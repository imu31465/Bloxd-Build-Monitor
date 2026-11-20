# Changed — Bundle Modifications Report (Part 003 / 067)

- **Updated at**: `2026-11-20T22:47 JST`
- **Part**: `3 / 67` (**284** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 002](part-002.md) · [Part 004 →](part-004.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/109.js` (7rj44.0704ff61 → qepqb8.0352199c · continued)

- **File**: `bundles/bloxd.io/chunks/js/109.js` (43 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df)

#### 8. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L155-L193` → after: `L109-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L109-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L109-L129) · [Before (L155-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L155-L193)

```diff
-       const mz = (0, Fz.useRef)(null),
-         Jz = (0, Fz.useRef)(null);
-       (0, Fz.useLayoutEffect)((() => {
-         var zz, tz, sz;
-         const Fz = null !== (zz = null === (tz = mz.current) || void 0 === tz ? void 0 : tz.querySelector(".rangeslider")) && void 0 !== zz ? zz : null;
-         null === Fz || void 0 === Fz || Fz.setAttribute("data-pad-slider", ""), null === Fz || void 0 === Fz || Fz.setAttribute("data-pad-focusable", ""), null === Fz || void 0 === Fz || null === (sz = Fz.querySelector(".rangeslider__handle")) || void 0 === sz || sz.setAttribute( … [truncated]
-       }), []), (0, Fz.useLayoutEffect)((() => {
-         var zz, tz;
-         xz ? null === (zz = Jz.current) || void 0 === zz || zz.setAttribute("aria-disabled", "true") : null === (tz = Jz.current) || void 0 === tz || tz.removeAttribute("aria-disabled")
-       }), [xz]);
-       const Iz = (null !== (tz = String(oz).split(".")[1]) && void 0 !== tz ? tz : "").length,
-         Cz = zz => {
-           const tz = Number((Math.round((zz - Xz) / oz) * oz + Xz).toFixed(Iz));
-           return Math.min(Oz, Math.max(Xz, tz))
-         },
-         ez = (0, Fz.useRef)(rz);
- ... (23 more removed lines; see GitHub link above)
+       const {
+         t: hv
+       } = (0, Tv.x)();
+       return (0, gv.useEffect)((() => {
+         Bv.f.skipPlayWait()
+       }), []), (0, Vv.jsx)(Lv.h, {
+         icon: "download",
+         title: "customTexturePack:downloadTitle",
+         subtitle: (0, Vv.jsxs)("div", {
+           className: "CustomTexturePackDownloaderSubtitleText",
+           children: [hv("customTexturePack:downloadPrompt"), (0, Vv.jsx)("div", {
+             className: "CustomTexturePackDownloaderWarningText",
+             children: hv("customTexturePack:authorWarning")
+           }), (0, Vv.jsx)("div", {
+             className: "CustomTexturePackDownloaderSecondaryText",
+             children: hv("customTexturePack:existingPackSaved")
+ ... (5 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L195-L196` → after: `L131-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L131-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L131-L133) · [Before (L195-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L195-L196)

```diff
-         endDrag: () => {
-           Zz.current && (Zz.current = !1, null === rz || void 0 === rz || rz())
+         cancel: {
+           text: "customTexturePack:skip",
+           onClick: Pv
```

#### 10. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L225-L233` → after: `L138-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L138-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L138-L147) · [Before (L225-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L225-L233)

```diff
-       let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
-       const tz = Kz.NotificationProvider.showPromptPopup({
-         title: "settingsMenu:reloadPagePopupTitle",
-         subtitle: "settingsMenu:reloadPagePopupSubtitle",
-         confirmText: "settingsMenu:reloadPagePopupConfirm",
-         confirmTooltip: "",
-         cancelText: "general:cancel",
-         cancelTooltip: "",
-         unlockPointerKey: zz
+       let vv = !1;
+       const zv = lv.NotificationProvider.showCustomPopup({
+         body: zv => (0, Vv.jsx)(Jv, {
+           onApply: () => {
+             vv = !0, zv()
+           },
+           onSkip: zv
+         }),
+         disableExitButton: !0,
+         disablePressBackgroundToClose: !0
```

#### 11. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L235` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L149) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L235)

```diff
-       !0 === await tz.getResult() && (0, uz.reloadBloxd)()
+       return await zv.getResult(), vv
```

#### 12. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L239-L260` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L157) · [Before (L239-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L239-L260)

```diff
-       let {
-         label: tz,
-         options: sz,
-         value: Fz,
-         onChange: Wz,
-         circleInfoText: Xz
-       } = zz;
-       return (0, bz.jsxs)("div", {
-         className: "SettingBox SegmentedSettingRow",
-         children: [(0, bz.jsxs)("div", {
-           className: "SliderText",
-           children: [tz, Xz && (0, bz.jsx)(Oz.d, {
-             className: "SettingsTextInputCircleInfo",
-             hoverInfo: Xz
-           })]
-         }), (0, bz.jsx)(oz.b, {
- ... (6 more removed lines; see GitHub link above)
+       vv.setGamePackConfirm(Ev), bv = vv
```

#### 13. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L262-L292` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L159) · [Before (L262-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L262-L292)

```diff
-   },
-   6245: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       default: () => Vz
-     });
-     var Fz = sz(65),
-       Wz = sz(1493),
-       Xz = sz(6129),
-       Oz = sz(1213),
-       oz = sz(321),
-       vz = sz(1306),
-       Uz = sz(1483),
-       Kz = sz(1419),
-       uz = sz(1333),
-       Nz = sz(2391),
-       bz = sz(2524),
- ... (15 more removed lines; see GitHub link above)
+     var kv = Pv(3247);
```

#### 14. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L296-L308` → after: `L163-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L163-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L163-L165) · [Before (L296-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L296-L308)

```diff
-         details: tz,
-         owner: sz,
-         onChanged: Wz
-       } = zz;
-       const {
-         t: Oz
-       } = (0, Bz.B)(), oz = (0, Uz.useNavigatePreserveSearch)(), {
-         userContext: uz
-       } = (0, Dz.b)(), [Nz, bz] = (0, Fz.useState)(!1), [wz, Hz] = (0, Fz.useState)(null), [Pz, rz] = (0, Fz.useState)(!1), {
-         packId: ez,
-         name: Zz,
-         description: Gz,
-         live: Tz
+         schematicId: zv,
+         texturePackKey: Pv,
+         onClose: hv
```

#### 15. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L310-L319` → after: `L167-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L167-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L167-L170) · [Before (L310-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L310-L319)

```diff
-       async function cz(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wz;
-         bz(!0), Hz(null);
-         try {
-           await zz(), tz()
-         } catch (sz) {
-           console.error("Failed to change a shader pack", sz), Hz((0, Jz.B)(sz, Oz, "shaderPackListing:ownerActionFailed"))
-         } finally {
-           bz(!1)
-         }
+       const [Sv, ev] = (0, gv.useState)("prompt"), [pv, dv] = (0, gv.useState)(null), Nv = (0, kv.b)();
+ 
+       function lv() {
+         hv()
```

#### 16. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L321-L452` → after: `L172-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L172-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L172-L207) · [Before (L321-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L321-L452)

```diff
-       const jz = (0, Jz.u)(uz);
-       return (0, Iz.jsxs)("section", {
-         className: "ShaderPackOwnerPanel",
-         children: [(0, Iz.jsx)("h2", {
-           className: "ShaderPackSectionTitle",
-           children: Oz("general:manage")
-         }), (0, Jz.hb)(sz, !(null === Tz || void 0 === Tz || !Tz.renderId), Date.now(), Oz).map((zz => (0, Iz.jsxs)("div", {
-           className: Yz()("ShaderPackOwnerNotice", {
-             Warning: "warning" === zz.tone
-           }),
-           children: [(0, Iz.jsx)(xz.c, {
-             name: "warning" === zz.tone ? "triangle-exclamation" : "circle-info"
-           }), (0, Iz.jsxs)("div", {
-             children: [zz.text, zz.detail && (0, Iz.jsx)("pre", {
-               className: "ShaderPackOwnerNoticeDetail",
-               children: zz.detail
- ... (116 more removed lines; see GitHub link above)
+       return "prompt" === Sv ? (0, Vv.jsx)(Jv, {
+         onApply: async function() {
+           ev("downloading");
+           try {
+             const vv = await async function(vv, zv) {
+               const Pv = await (0, Mv.d)(zv);
+               if (Pv) return {
+                 pack: Pv,
+                 key: zv
+               };
+               const hv = await Gv.userContextManager.getCurrentUserContext(),
+                 Sv = (await Qv.e.getGame(hv, vv, !0)).customTexturePackKey;
+               if (!Sv) return null;
+               const ev = await (0, Mv.d)(Sv);
+               if (!ev) throw new Error("The texture pack could not be found");
+               return {
+ ... (20 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L454-L537` → after: `L209-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L209-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L209-L217) · [Before (L454-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L454-L537)

```diff
-         })]
-       })
-     }
-     var Zz = sz(78),
-       Gz = sz(1824),
-       Tz = sz(1264),
-       cz = sz(4644),
-       jz = sz(1191),
-       Az = sz(6143),
-       yz = sz(6138),
-       Mz = sz(6153);
- 
-     function dz(zz) {
-       let {
-         item: tz
-       } = zz;
- ... (68 more removed lines; see GitHub link above)
+         })
+       }) : "error" === Sv ? (0, Vv.jsx)(Lv.h, {
+         icon: "face-worried",
+         title: "customTexturePack:errorTitle",
+         subtitle: pv,
+         confirm: {
+           text: "customTexturePack:refreshPage",
+           onClick: () => {
+             window.location.reload()
```

#### 18. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L539-L556` → after: `L219-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L219-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L219-L222) · [Before (L539-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L539-L556)

```diff
-         })]
-       })
-     }
- 
-     function hz(zz) {
-       let {
-         fullUrl: tz,
-         largeUrl: sz,
-         alt: Wz,
-         onClose: Xz
-       } = zz;
-       const Oz = (0, Fz.useRef)(null);
-       return (0, Tz.s)("popup", Oz, Xz), (0, Fz.useEffect)((() => {
-         function zz(zz) {
-           "Escape" === zz.key && (zz.stopPropagation(), Xz())
-         }
- ... (2 more removed lines; see GitHub link above)
+         },
+         cancel: {
+           text: "customTexturePack:skip",
+           onClick: lv
```

#### 19. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L558-L571` → after: `L224-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L224-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L224-L229) · [Before (L558-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L558-L571)

```diff
-       }), [Xz]), (0, Zz.createPortal)((0, Iz.jsxs)("div", {
-         ref: Oz,
-         className: "ShaderPackFullSize",
-         onClick: Xz,
-         children: [(0, Iz.jsx)("img", {
-           className: "ShaderPackFullSizeImage",
-           src: tz,
-           alt: Wz,
-           draggable: !1,
-           style: {
-             backgroundImage: `url(${sz})`
-           }
-         }), (0, Iz.jsx)(Kz.n, {
-           className: "ShaderPackFullSizeClose",
+       }) : "refused" === Sv ? (0, Vv.jsx)(Lv.h, {
+         icon: "face-worried",
+         title: "customTexturePack:cantApplyTitle",
+         subtitle: "customTexturePack:gamePackHasExternalUrls",
+         confirm: {
+           text: "general:continue",
```

#### 20. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L573-L574` → after: `L231-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L231-L232) · [Before (L573-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L573-L574)

```diff
-         })]
-       }), document.body)
+         }
+       }) : null
```

#### 21. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L576` → after: `L234-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L234-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L234-L242) · [Before (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L576)

```diff
-     const Qz = 5;
+     var uv = Pv(8580),
+       vz = Pv(4091),
+       zz = Pv(1736),
+       Pz = Pv(2715),
+       hz = Pv(3187),
+       Sz = Pv(4444),
+       ez = Pv(1285),
+       gz = Pv(635),
+       pz = Pv(716);
```

#### 22. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L578-L597` → after: `L244-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L244-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L244-L314) · [Before (L578-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L578-L597)

```diff
-     function kz(zz) {
-       let {
-         item: tz,
-         packUrl: sz,
-         baselineUrl: Wz
-       } = zz;
-       const {
-         t: Oz
-       } = (0, Bz.B)(), [oz, vz] = (0, Fz.useState)(50), Uz = (0, Fz.useRef)(!1), Kz = (0, Fz.useRef)(null), {
-         width: uz,
-         height: Nz
-       } = Xz.q.large;
- 
-       function bz(zz) {
-         vz((tz => (0, Gz.f)(tz + zz, 0, 100)))
-       }
- ... (4 more removed lines; see GitHub link above)
+     function dz() {
+       const vv = Sv.c.get("clientEscMenuOptions");
+       dv.gameBridge.send("setLookSensitivity", Sv.c.get("isTouchScreen") ? (0, pz.k)(vv) : vv.mouseSensitivity)
+     }
+     async function Nz(vv, zv, Pv) {
+       const hv = (0, Sz.H)(zv);
+       async function gv(vv, zv, Pv, hv) {
+         var gv;
+         if (hv.aborted) return null;
+         null === Sv.c.get("gameEntrySource") && (0, Sv.g)("directPlayUrl"), gz.r && (0, yv.c)().catch((() => {})), Sv.c.set({
+           gameState: "findingLobby"
+         }), mv.j.zC("loadingScreenState", "loadingPage:findingLobby");
+         const pv = await Gv.userContextManager.getCurrentUserContext();
+         dv.gameBridge.send("setRequestedGame", {
+           gameNameWithVariation: zv,
+           discordContext: vv instanceof qv.e ? vv.getSerialisableParams() : null
+ ... (55 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L599-L645` → after: `L316-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L316-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L316-L324) · [Before (L599-L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L599-L645)

```diff
-       return (0, cz.g)(Kz, {
-         adjust: zz => {
-           bz(zz * Qz)
-         },
-         setFraction: zz => {
-           vz(100 * zz)
-         },
-         endDrag: () => {}
-       }), (0, Iz.jsxs)("div", {
-         ref: Kz,
-         className: "ShaderPackCompare",
-         "data-pad-slider": "",
-         "data-pad-focusable": "",
-         role: "slider",
-         tabIndex: 0,
-         "aria-label": Oz("shaderPackListing:compare"),
- ... (31 more removed lines; see GitHub link above)
+       return hv && (0, Sv.g)("updateRejoin"), (0, hz.j)((async Sv => {
+         try {
+           let pv = vv,
+             dv = await gv(pv, zv, Pv, Sv);
+           for (let vv = 0; hv && vv < Sz.j; vv++) {
+             var ev;
+             if (null === (ev = dv) || void 0 === ev || !ev.isError() || dv.asError().code !== Wv.o.REQUEST_TO_MATCHMAKING) break;
+             if (!await (0, Sz.J)((0, Sz.u)(vv), Sv)) return dv;
+             pv = (0, Sz.w)(pv, vv + 1, "string" === typeof pv && (0, wv.S)(pv)), dv = await gv(pv, zv, Pv, Sv)
```

#### 24. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L647-L677` → after: `L326-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L326-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L326-L342) · [Before (L647-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L647-L677)

```diff
-         }), (0, Iz.jsx)("div", {
-           className: "ShaderPackCompareLine"
-         }), (0, Iz.jsx)("img", {
-           className: "ShaderPackComparePack",
-           src: sz,
-           width: uz,
-           height: Nz,
-           alt: "",
-           draggable: !1
-         }), (0, Iz.jsx)(yz.d, {
-           item: tz,
-           className: "ShaderPackCompareNotice"
-         })]
-       })
-     }
- 
- ... (15 more removed lines; see GitHub link above)
+           return dv
+         } catch (pv) {
+           if ((0, Pz.e)("matchmake_failed", pv, "unexpected"), dv.gameBridge.send("leaveGame", {
+               reloadPath: Sv.aborted ? null : "/"
+             }), Sv.aborted) return null;
+           throw pv
+         }
+       }), (async vv => {
+         var Pv;
+         if (hv) return;
+         const Sv = (0, Yv.I)();
+         null !== Sv && (await Sv, vv.aborted) || (null !== (Pv = tv.e[zv]) && void 0 !== Pv && Pv.playAdBeforeMatchmaking ? (Bv.f.skipPlayWait(), await new Promise((vv => {
+           (0, Yv.eb)((() => {
+             vv(!0)
+           }), "video_start")
+         }))) : (0, Yv.eb)((() => {}), "video_start"))
+ ... (1 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L691` → after: `L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L345) · [Before (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L691)

```diff
-     function qz(zz) {
+     function lz() {
```

#### 26. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L693-L699` → after: `L347-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L347-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L347-L368) · [Before (L693-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L693-L699)

```diff
-         userContext: tz
-       } = (0, Dz.b)(), [Wz, Xz] = (0, Fz.useState)(null), [Oz, oz] = (0, Fz.useState)(!1), [vz, Uz] = (0, Fz.useState)(!1), [Kz, uz] = (0, Fz.useState)(null), Nz = null === zz || void 0 === zz ? void 0 : zz.packId, bz = null === zz || void 0 === zz ? void 0 : zz.sourceHash;
-       return (0, Fz.useEffect)((() => {
-         if (oz(!1), uz(null), void 0 === Nz) return;
-         let zz = !1;
-         return Promise.all([(0, Hz.hasUsableWebGpuAdapter)(), (0, nz.g)()]).then((tz => {
-           let [sz, Fz] = tz;
+         t: vv
+       } = (0, Tv.x)(), zv = (0, Nv.useNavigatePreserveSearch)(), Pv = (0, hv.p)(), sv = (0, hv.B)(), iv = (0, gv.useRef)({
+         t: vv,
+         navigate: zv
+       });
+       iv.current = {
+         t: vv,
+         navigate: zv
+       };
+       const mv = (0, gv.useRef)("");
+       mv.current = Pv.pathname + Pv.search;
+       const {
+         gameState: jv,
+         clientEscMenuOptions: Uv
+       } = (0, Sv.i)(["gameState", "clientEscMenuOptions"]), tv = (0, gv.useRef)(null), qv = (0, gv.useRef)(null);
+       var Zv;
+ ... (6 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L701-L705` → after: `L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L370) · [Before (L701-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L701-L705)

```diff
-           zz || (Xz(sz), oz((null === Fz || void 0 === Fz || null === (Wz = Fz.listing) || void 0 === Wz ? void 0 : Wz.packId) === Nz && Fz.listing.sourceHash === bz))
-         })).catch((tz => {
-           console.error("Failed to check whether this shader pack can be used", tz), zz || Xz(!1)
-         })), () => {
-           zz = !0
+           vv = !1, ov.wanted = !1, null === (zv = bv) || void 0 === zv || zv.setGamePackConfirm(null), bv = null
```

#### 28. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L707-L714` → after: `L372-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L372-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L372-L418) · [Before (L707-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L707-L714)

```diff
-       }), [Nz, bz]), {
-         webGpuUsable: Wz,
-         inUse: Oz,
-         busy: vz,
-         errorKey: Kz,
-         use: () => {
-           null !== zz && async function(zz) {
-             Uz(!0), uz(null);
+       }), [Zv]), (0, gv.useEffect)((() => {
+         var vv;
+         (0, ev.needGameClientNow)();
+         const {
+           t: zv,
+           navigate: hv
+         } = iv.current, gv = (0, uv.b)(sv, Pv.search);
+         if (sv.lobbyName && !new URLSearchParams(Pv.search).has("lobby")) return void hv((0, xv.e)(gv.gameNameWithVariation, gv.lobbyName), {
+           replace: !0
+         });
+         let pv = Promise.resolve({
+           shouldMatchmake: !0
+         });
+         if ("/play/discord-custom-lobby" === Pv.pathname) {
+           const vv = Sv.c.get("discordContext");
+           if (!vv) return void hv("/");
+ ... (31 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L716-L728` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L420) · [Before (L716-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L716-L728)

```diff
-               const {
-                 installListedShaderPack: Fz
-               } = await Promise.all([sz.e(74), sz.e(131), sz.e(126)]).then((() => sz(39632))), Wz = await Fz({
-                 packId: zz.packId,
-                 sourceHash: zz.sourceHash,
-                 name: zz.name,
-                 ownerName: zz.ownerName,
-                 description: zz.description
-               });
-               if ("failed" === Wz.kind) return void uz(az[Wz.reason]);
-               oz(!0), gz.d.recordShaderPackDownload(tz, zz.packId).catch((zz => {
-                 console.error("Failed to count a shader pack's download", zz)
-               })), (0, Lz.h)()
+               hv = await Qv.e.getGame(zv, Pv, !0)
```

#### 30. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L730-L732` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L422) · [Before (L730-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L730-L732)

```diff
-               console.error("Failed to use the shader pack", Fz), uz("shaderPack:unexpectedError")
-             } finally {
-               Uz(!1)
+               return void console.error("Failed to get game", gv)
```

#### 31. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L734` → after: `L424-L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L424-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L424-L544) · [Before (L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L734)

```diff
-           }(zz)
+             const Sv = hv.customTexturePackKey;
+             if (!Sv) return void(Av.b.isUsingTemporaryTexturePack() && ((0, fv.reloadBloxd)(), await new Promise((() => {}))));
+             if (Av.b.isUsingTemporaryTexturePack() && Av.b.getTemporaryTexturePackSource() === Sv) return;
+             const ev = lv.NotificationProvider.showCustomPopup({
+               body: vv => (0, Vv.jsx)(Xv, {
+                 schematicId: Pv,
+                 texturePackKey: Sv,
+                 onClose: vv
+               }),
+               disableExitButton: !0,
+               disablePressBackgroundToClose: !0
+             });
+             await ev.getResult()
+           }(Tv), zv = pv;
+           pv = vv.catch((vv => {
+             console.error("Failed to check for custom texture pack", vv)
+ ... (105 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L736` → after: `L546-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L546-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L546-L575) · [Before (L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L736)

```diff
-       }
+       }), [sv, Pv.search, Pv.pathname]), (0, gv.useEffect)((() => {
+         Uv.disableFullscreen && (0, nv.b)() ? (0, nv.e)() : !Uv.disableFullscreen && (0, nv.d)() && (0, nv.m)()
+       }), [jv, Uv]), (0, gv.useEffect)((() => {
+         "inGame" === jv && dz()
+       }), [jv, Uv]), (0, gv.useEffect)((() => {
+         "inGame" !== jv && Sv.c.set({
+           openInGameMenuName: null
+         })
+       }), [jv]);
+       const Lv = function(vv) {
+         const zv = (0, Sv.d)(vv),
+           [Pv, hv] = (0, gv.useState)(0),
+           [ev, dv] = (0, gv.useState)(!1);
+         (0, pv.g)("gameJoined", (() => {
+           (0, Sv.d)(Sv.c.get("gameState")) && (hv((vv => vv + 1)), dv(!0))
+         })), (0, gv.useEffect)((() => {
+ ... (14 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L740-L768` → after: `L603-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L603-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L603-L624) · [Before (L740-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L740-L768)

```diff
-       let {
-         packUse: tz
-       } = zz;
-       const {
-         t: sz
-       } = (0, Bz.B)(), {
-         webGpuUsable: Fz,
-         inUse: Wz,
-         busy: Xz,
-         errorKey: Oz,
-         use: oz
-       } = tz;
-       return (0, Iz.jsxs)("div", {
-         className: "ShaderPackUse",
-         children: [(0, Iz.jsxs)(Kz.p, {
-           disabled: !0 !== Fz || Wz,
- ... (13 more removed lines; see GitHub link above)
+       return vv = function(vv, zv) {
+         var Pv;
+         const hv = new URLSearchParams(zv),
+           Sv = hv.get("lobby"),
+           ev = hv.get("vm"),
+           gv = null !== (Pv = Sv) && void 0 !== Pv ? Pv : vv.lobbyName,
+           pv = null !== ev && void 0 !== ev ? ev : vv.directJoinVmUrl;
+         if (gv === vv.lobbyName && pv === vv.directJoinVmUrl) return vv;
+         return {
+           ...vv,
+           lobbyName: gv,
+           directJoinVmUrl: pv
+         }
+       }(vv, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), vv = function(vv) {
+         if ((0, ev.N)(vv.directJoinVmUrl)) return vv;
+         const zv = (0, Sv.db)(vv.directJoinVmUrl);
+ ... (6 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L772-L842` → after: `L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L635) · [Before (L772-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L772-L842)

```diff
-       var zz;
-       const {
-         t: tz
-       } = (0, Bz.B)(), sz = (0, Uz.useNavigatePreserveSearch)(), {
-         packId: Xz
-       } = (0, Wz.C)(), {
-         userContext: Oz,
-         isUserContextUpdating: oz
-       } = (0, Dz.b)(), [uz, Nz] = (0, Fz.useState)(null), [bz, Hz] = (0, Fz.useState)(null), [Pz, rz] = (0, Fz.useState)(0), Yz = (0, Fz.useRef)(0);
- 
-       function xz() {
-         var zz;
-         null !== (zz = (0, Uz.getPreviousLocation)()) && void 0 !== zz && zz.startsWith(Jz.db) ? sz(-1) : sz(Jz.db)
-       }(0, wz.b)(xz), (0, Az.c)(), (0, Fz.useEffect)((() => {
-         if (oz || void 0 === Xz) return;
-         const zz = ++Yz.current;
- ... (55 more removed lines; see GitHub link above)
+       hv = !0
```

#### 35. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L845-L864` → after: `L638-L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L638-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L638-L639) · [Before (L845-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L845-L864)

```diff
-     function Rz(zz) {
-       let {
-         item: tz,
-         favourites: sz,
-         packUse: Fz
-       } = zz;
-       const Wz = sz.isFavourite(tz.packId);
-       return (0, Iz.jsxs)("div", {
-         className: "ShaderPackInformationActions",
-         children: [Hz.featureFlags.settings.canUseShaderPacks && (0, Iz.jsx)(Sz, {
-           packUse: Fz
-         }), (0, Iz.jsx)(Kz.v, {
-           className: "ShaderPackInformationLike",
-           onClick: () => {
-             sz.toggle(tz.packId)
-           },
- ... (4 more removed lines; see GitHub link above)
+     function ev() {
+       return hv
```

#### 36. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L867-L956` → after: `L655-L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L655-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L655-L665) · [Before (L867-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L867-L956)

```diff
-     function pz(zz) {
-       let {
-         item: tz,
-         ownerPreview: sz,
-         bloxdhubSlug: Fz,
-         actions: Wz
-       } = zz;
-       const {
-         t: oz
-       } = (0, Bz.B)(), vz = (0, bz.q)(), Kz = null === Fz ? null : (0, Xz.f)(Fz);
-       return (0, Iz.jsxs)("div", {
-         className: "ShaderPackFacts",
-         children: [tz.description && (0, Iz.jsx)("p", {
-           className: "ShaderPackDescription",
-           children: tz.description
-         }), (0, Iz.jsxs)("div", {
- ... (74 more removed lines; see GitHub link above)
+     function lv() {
+       return gv.c.cancelDownloadForJoin(), (0, pv.b)(), (0, Sv.f)(), (0, dv.g)(), (0, ev.h)(), Promise.all([Pv.e(70), Pv.e(73), Pv.e(72), Pv.e(71), Pv.e(84), Pv.e(261), Pv.e(199), Pv.e(217), Pv.e(239), Pv.e(212), Pv.e(46)]).then((() => Pv(39984))).catch((() => {})), Promise.all([ … [truncated]
+         let {
+           startJoinLoad: zv
+         } = vv;
+         zv()
+       }), (() => {})), Nv ??= Promise.all([Pv.e(72), Pv.e(75), Pv.e(129), Pv.e(132), Pv.e(263), Pv.e(186), Pv.e(88), Pv.e(87), Pv.e(86), Pv.e(212), Pv.e(61)]).then((() => Pv(40153))).then((vv => (vv.startWasmPlay(), vv.followPageUiPack((vv => {
+         hv.b.showGamePack(vv)
+       })), vv)), (vv => {
+         throw Nv = null, vv
+       })), Nv
```

#### 37. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L959-L985` → after: `L668-L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L668-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L668-L671) · [Before (L959-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L959-L985)

```diff
-     function fz(zz) {
-       let {
-         label: tz,
-         time: sz,
-         now: Fz
-       } = zz;
-       const {
-         t: Wz,
-         selectedLanguage: Xz
-       } = (0, Bz.B)(), Oz = new Date(sz);
-       let vz = Oz.toLocaleDateString();
-       if (Fz - sz <= 30 * oz.h) {
-         const zz = (0, Bz.o)(Xz.code, "shaderPackListing:timeAgo");
-         vz = Wz("shaderPackListing:timeAgo", {
-           time: (0, oz.bb)(zz, sz, Fz)
-         })
- ... (11 more removed lines; see GitHub link above)
+     function Tv() {
+       return Promise.all([Pv.e(72), Pv.e(75), Pv.e(129), Pv.e(132), Pv.e(263), Pv.e(186), Pv.e(88), Pv.e(87), Pv.e(86), Pv.e(212), Pv.e(61)]).then((() => Pv(40153))).then((vv => {
+         vv.startWasmPreviews(), vv.prefetchWasmPreviews()
+       }))
```

#### 38. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L988` → after: `L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L674) · [Before (L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L988)

```diff
-   4636: (zz, tz, sz) => {
+   8572: (vv, zv, Pv) => {
```

#### 39. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L990` → after: `L676-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L676-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L676-L680) · [Before (L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L990)

```diff
-       b: () => Oz
+       d: () => ev,
+       g: () => gv,
+       h: () => pv,
+       k: () => Nv,
+       n: () => dv
```

#### 40. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L992-L994` → after: `L682-L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L682-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L682-L683) · [Before (L992-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L992-L994)

```diff
-     var Fz = sz(1020),
-       Wz = sz.n(Fz),
-       Xz = sz(1087);
+     var hv = Pv(185),
+       Sv = Pv(4386);
```

#### 41. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L997-L1029` → after: `L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L686) · [Before (L997-L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L997-L1029)

```diff
-       let {
-         options: tz,
-         value: sz,
-         onChange: Fz,
-         ariaLabel: Oz,
-         className: oz,
-         reselectable: vz = !1,
-         keepsFocus: Uz = !1
-       } = zz;
-       return (0, Xz.jsx)("div", {
-         className: Wz()("SegmentedToggle", oz),
-         role: "group",
-         "aria-label": Oz,
-         children: tz.map((zz => {
-           const tz = zz.value === sz;
-           return (0, Xz.jsx)("button", {
- ... (17 more removed lines; see GitHub link above)
+       return gv(vv) === hv.b.gameOrPluginOnPlayerAuthRejected.code
```

#### 42. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1031-L1070` → after: `L688-L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L688-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L688-L693) · [Before (L1031-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L1031-L1070)

```diff
-   },
-   4644: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Xz,
-       g: () => Oz
-     });
-     var Fz = sz(65);
-     const Wz = new WeakMap,
-       Xz = zz => {
-         var tz;
-         const sz = zz.closest("[data-pad-slider]");
-         return sz && null !== (tz = Wz.get(sz)) && void 0 !== tz ? tz : null
-       },
-       Oz = (zz, tz) => {
-         const sz = (0, Fz.useRef)(tz);
-         sz.current = tz, (0, Fz.useEffect)((() => {
- ... (24 more removed lines; see GitHub link above)
+ 
+     function gv(vv) {
+       return "object" === typeof vv && null !== vv ? vv.code : void 0
+     }
+ 
+     function pv(vv) {
```

#### 43. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1072-L1073` → after: `L695-L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L695-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/109.js#L695-L705) · [Before (L1072-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/109.js#L1072-L1073)

```diff
-       let tz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       return null !== (zz = await Fz.e.getItem(Wz, tz)) && void 0 !== zz ? zz : null
+       return null !== (zv = Object.keys(Sv.d).find((zv => Sv.d[zv] === vv))) && void 0 !== zv ? zv : null
+     }
+ 
+     function dv(vv) {
+       return "notWhitelisted" === vv ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
+     }
+     const Nv = {
+       private: "customLobby:cantJoinPrivate",
+       notWhitelisted: "customLobby:cantJoinNotWhitelisted",
+       banned: "customLobby:cantJoinBanned",
+       adminLocked: "customLobby:cantJoinAdminLocked"
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/110.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/110.js` (51 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a)

#### 1. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L5-L18349` → after: `L4-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L4-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L4-L21) · [Before (L5-L18349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L5-L18349)

```diff
-   5804: function(zz, tz, sz) {
-     var Fz;
-     ! function() {
-       var Wz, Xz = 1e9,
-         Oz = {
-           precision: 20,
-           rounding: 4,
-           toExpNeg: -7,
-           toExpPos: 21,
-           LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
-         },
-         oz = !0,
-         vz = "[DecimalError] ",
-         Uz = vz + "Invalid argument: ",
-         Kz = vz + "Exponent out of range: ",
-         uz = Math.floor,
- ... (18329 more removed lines; see GitHub link above)
+   4732: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => av,
+       f: () => Gv,
+       i: () => sv,
+       l: () => cv
+     });
+     var hv = Pv(52),
+       Sv = Pv(4738),
+       ev = Pv(4129),
+       gv = Pv(1344),
+       pv = Pv(4765),
+       dv = Pv(1035),
+       Nv = Pv.n(dv),
+       lv = Pv(1336),
+       Tv = Pv(1692),
+ ... (2 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L18352-L18398` → after: `L24-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L24-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L24-L66) · [Before (L18352-L18398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L18352-L18398)

```diff
-       var tz = UO(zz, 2),
-         sz = tz[0],
-         Fz = tz[1],
-         Wz = sz,
-         Xz = Fz;
-       return sz > Fz && (Wz = Fz, Xz = sz), [Wz, Xz]
-     }
- 
-     function bO(zz, tz, sz) {
-       if (zz.lte(0)) return new(qX())(0);
-       var Fz = oO.getDigitCount(zz.toNumber()),
-         Wz = new(qX())(10).pow(Fz),
-         Xz = zz.div(Wz),
-         Oz = 1 !== Fz ? .05 : .1,
-         oz = new(qX())(Math.ceil(Xz.div(Oz).toNumber())).add(sz).mul(Oz).mul(Wz);
-       return tz ? oz : new(qX())(Math.ceil(oz))
- ... (31 more removed lines; see GitHub link above)
+       let {
+         label: zv,
+         onClick: Pv,
+         checked: hv,
+         circleInfoText: Sv,
+         className: pv,
+         disabled: dv,
+         note: lv
+       } = vv;
+       return (0, wv.jsxs)("div", {
+         "aria-disabled": dv || void 0,
+         "data-pad-focusable": !0,
+         className: Nv()("SettingBox CheckboxContainer", {
+           [pv]: pv,
+           SettingBoxDisabled: dv
+         }),
+ ... (27 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L18475-L18505` → after: `L71-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L71-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L71-L131) · [Before (L18475-L18505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L18475-L18505)

```diff
-       return function(zz) {
-         if (Array.isArray(zz)) return JO(zz)
-       }(zz) || function(zz) {
-         if ("undefined" !== typeof Symbol && null != zz[Symbol.iterator] || null != zz["@@iterator"]) return Array.from(zz)
-       }(zz) || function(zz, tz) {
-         if (!zz) return;
-         if ("string" === typeof zz) return JO(zz, tz);
-         var sz = Object.prototype.toString.call(zz).slice(8, -1);
-         "Object" === sz && zz.constructor && (sz = zz.constructor.name);
-         if ("Map" === sz || "Set" === sz) return Array.from(zz);
-         if ("Arguments" === sz || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(sz)) return JO(zz, tz)
-       }(zz) || function() {
-         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
-     }
- 
- ... (15 more removed lines; see GitHub link above)
+       let {
+         name: zv,
+         onChange: Pv,
+         min: Sv,
+         max: ev,
+         step: pv,
+         initValue: dv,
+         circleInfoText: lv,
+         format: Tv,
+         className: Wv,
+         padStep: av,
+         disabled: sv = !1,
+         selectableMax: Cv,
+         cappedNote: cv,
+         onChangeComplete: Gv
+       } = vv;
+ ... (45 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L18509-L18533` → after: `L136-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L136-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L136-L137) · [Before (L18509-L18533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L18509-L18533)

```diff
-       for (var tz = 1; tz < arguments.length; tz++) {
-         var sz = null != arguments[tz] ? arguments[tz] : {};
-         tz % 2 ? IO(Object(sz), !0).forEach((function(tz) {
-           eO(zz, tz, sz[tz])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(zz, Object.getOwnPropertyDescriptors(sz)) : IO(Object(sz)).forEach((function(tz) {
-           Object.defineProperty(zz, tz, Object.getOwnPropertyDescriptor(sz, tz))
-         }))
-       }
-       return zz
-     }
- 
-     function eO(zz, tz, sz) {
-       return (tz = function(zz) {
-         var tz = function(zz, tz) {
-           if ("object" != xO(zz) || !zz) return zz;
-           var sz = zz[Symbol.toPrimitive];
- ... (9 more removed lines; see GitHub link above)
+       var zv;
+       let {
```

#### 5. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L18535-L18927` → after: `L139-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L139-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L139-L168) · [Before (L18535-L18927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L18535-L18927)

```diff
-         enumerable: !0,
-         configurable: !0,
-         writable: !0
-       }) : zz[tz] = sz, zz
-     }
- 
-     function ZO(zz, tz, sz) {
-       return eX()(zz) || eX()(tz) ? sz : (0, PO.x)(tz) ? AX()(zz, tz, sz) : GX()(tz) ? tz(zz) : sz
-     }
- 
-     function GO(zz, tz, sz, Fz) {
-       var Wz = MX()(zz, (function(zz) {
-         return ZO(zz, tz)
-       }));
-       if ("number" === sz) {
-         var Xz = Wz.filter((function(zz) {
- ... (377 more removed lines; see GitHub link above)
+         min: ev,
+         max: gv,
+         step: pv,
+         onChange: dv,
+         orientation: Nv,
+         reverse: lv,
+         setIsChanging: Tv,
+         tooltip: av,
+         labels: sv,
+         handleLabel: iv,
+         format: cv,
+         onChangeStart: Gv,
+         onChangeComplete: mv,
+         padStep: jv,
+         disabled: fv = !1
+       } = vv;
+ ... (14 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L18929-L18937` → after: `L170-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L170-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L170-L188) · [Before (L18929-L18937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L18929-L18937)

```diff
-         none: gX,
-         silhouette: function(zz, tz) {
-           if ((sz = zz.length) > 0) {
-             for (var sz, Fz = 0, Wz = zz[tz[0]], Xz = Wz.length; Fz < Xz; ++Fz) {
-               for (var Oz = 0, oz = 0; Oz < sz; ++Oz) oz += zz[Oz][Fz][1] || 0;
-               Wz[Fz][1] += Wz[Fz][0] = -oz / 2
-             }
-             gX(zz, tz)
-           }
+         Dv = (0, hv.useRef)(mv);
+       Dv.current = mv, (0, hv.useEffect)((() => {
+         const vv = Fv.current;
+         if (!vv) return;
+         const zv = vv => {
+           var zv;
+           Cv.has(vv.key) && (null === (zv = Dv.current) || void 0 === zv || zv.call(Dv))
+         };
+         return vv.addEventListener("keyup", zv), () => {
+           vv.removeEventListener("keyup", zv)
+         }
+       }), []);
+       const Kv = (0, hv.useRef)(!1);
+       return (0, Wv.e)(Yv, {
+         adjust: vv => {
+           if (fv) return;
+ ... (3 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L18939-L18952` → after: `L190-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L190-L193) · [Before (L18939-L18952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L18939-L18952)

```diff
-         wiggle: function(zz, tz) {
-           if ((Wz = zz.length) > 0 && (Fz = (sz = zz[tz[0]]).length) > 0) {
-             for (var sz, Fz, Wz, Xz = 0, Oz = 1; Oz < Fz; ++Oz) {
-               for (var oz = 0, vz = 0, Uz = 0; oz < Wz; ++oz) {
-                 for (var Kz = zz[tz[oz]], uz = Kz[Oz][1] || 0, Nz = (uz - (Kz[Oz - 1][1] || 0)) / 2, bz = 0; bz < oz; ++bz) {
-                   var wz = zz[tz[bz]];
-                   Nz += (wz[Oz][1] || 0) - (wz[Oz - 1][1] || 0)
-                 }
-                 vz += uz, Uz += Nz * uz
-               }
-               sz[Oz - 1][1] += sz[Oz - 1][0] = Xz, vz && (Xz -= Uz / vz)
-             }
-             sz[Oz - 1][1] += sz[Oz - 1][0] = Xz, gX(zz, tz)
-           }
+         setFraction: vv => {
+           if (fv) return;
+           const zv = Ov(ev + (lv ? 1 - vv : vv) * (gv - ev));
+           zv !== Pv && (Kv.current || (Kv.current = !0, null === Gv || void 0 === Gv || Gv()), dv(zv))
```

#### 8. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L18954-L19098` → after: `L195-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L195-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L195-L196) · [Before (L18954-L19098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L18954-L19098)

```diff
-         positive: function(zz) {
-           var tz = zz.length;
-           if (!(tz <= 0))
-             for (var sz = 0, Fz = zz[0].length; sz < Fz; ++sz)
-               for (var Wz = 0, Xz = 0; Xz < tz; ++Xz) {
-                 var Oz = hX()(zz[Xz][sz][1]) ? zz[Xz][sz][0] : zz[Xz][sz][1];
-                 Oz >= 0 ? (zz[Xz][sz][0] = Wz, zz[Xz][sz][1] = Wz + Oz, Wz = zz[Xz][sz][1]) : (zz[Xz][sz][0] = 0, zz[Xz][sz][1] = 0)
-               }
-         }
-       },
-       pO = function(zz, tz, sz) {
-         var Fz = tz.map((function(zz) {
-             return zz.props.dataKey
-           })),
-           Wz = RO[sz],
-           Xz = function() {
- ... (129 more removed lines; see GitHub link above)
+         endDrag: () => {
+           Kv.current && (Kv.current = !1, null === mv || void 0 === mv || mv())
```

#### 9. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L19100-L19155` → after: `L198-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L198-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L198-L219) · [Before (L19100-L19155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L19100-L19155)

```diff
-         return sz[0]
-       },
-       Fo = function(zz, tz) {
-         var sz, Fz = (null !== (sz = zz.type) && void 0 !== sz && sz.defaultProps ? CO(CO({}, zz.type.defaultProps), zz.props) : zz.props).stackId;
-         if ((0, PO.x)(Fz)) {
-           var Wz = tz[Fz];
-           if (Wz) {
-             var Xz = Wz.items.indexOf(zz);
-             return Xz >= 0 ? Wz.stackedData[Xz] : null
-           }
-         }
-         return null
-       },
-       Wo = function(zz, tz, sz) {
-         return Object.keys(zz).reduce((function(Fz, Wz) {
-           var Xz = zz[Wz].stackedData.reduce((function(zz, Fz) {
- ... (40 more removed lines; see GitHub link above)
+       }), (0, wv.jsx)("div", {
+         ref: Fv,
+         style: {
+           display: "contents"
+         },
+         children: (0, wv.jsx)(Sv.d, {
+           value: Pv,
+           min: ev,
+           max: gv,
+           step: pv,
+           onChange: dv,
+           orientation: Nv,
+           reverse: lv,
+           tooltip: av,
+           labels: sv,
+           handleLabel: iv,
+ ... (6 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L19185-L19449` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L222) · [Before (L19185-L19449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L19185-L19449)

```diff
-       }
-   },
-   5742: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Nz,
-       g: () => uz
-     });
-     var Fz = sz(5585);
- 
-     function Wz(zz) {
-       return Wz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(zz) {
-         return typeof zz
-       } : function(zz) {
-         return zz && "function" == typeof Symbol && zz.constructor === Symbol && zz !== Symbol.prototype ? "symbol" : typeof zz
-       }, Wz(zz)
-     }
- ... (249 more removed lines; see GitHub link above)
+       })
```

#### 11. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L19451-L19460` → after: `L224-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L224-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L224-L235) · [Before (L19451-L19460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L19451-L19460)

```diff
- 
-     function Wz(zz, tz) {
-       var sz = Object.keys(zz);
-       if (Object.getOwnPropertySymbols) {
-         var Fz = Object.getOwnPropertySymbols(zz);
-         tz && (Fz = Fz.filter((function(tz) {
-           return Object.getOwnPropertyDescriptor(zz, tz).enumerable
-         }))), sz.push.apply(sz, Fz)
-       }
-       return sz
+     async function cv() {
+       let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+       const zv = lv.NotificationProvider.showPromptPopup({
+         title: "settingsMenu:reloadPagePopupTitle",
+         subtitle: "settingsMenu:reloadPagePopupSubtitle",
+         confirmText: "settingsMenu:reloadPagePopupConfirm",
+         confirmTooltip: "",
+         cancelText: "general:cancel",
+         cancelTooltip: "",
+         unlockPointerKey: vv
+       });
+       !0 === await zv.getResult() && (0, Tv.reloadBloxd)()
```

#### 12. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L19464-L19629` → after: `L239-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L239-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L239-L260) · [Before (L19464-L19629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L19464-L19629)

```diff
-       for (var tz = 1; tz < arguments.length; tz++) {
-         var sz = null != arguments[tz] ? arguments[tz] : {};
-         tz % 2 ? Wz(Object(sz), !0).forEach((function(tz) {
-           Oz(zz, tz, sz[tz])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(zz, Object.getOwnPropertyDescriptors(sz)) : Wz(Object(sz)).forEach((function(tz) {
-           Object.defineProperty(zz, tz, Object.getOwnPropertyDescriptor(sz, tz))
-         }))
-       }
-       return zz
-     }
- 
-     function Oz(zz, tz, sz) {
-       return (tz = function(zz) {
-         var tz = function(zz, tz) {
-           if ("object" != Fz(zz) || !zz) return zz;
-           var sz = zz[Symbol.toPrimitive];
- ... (150 more removed lines; see GitHub link above)
+       let {
+         label: zv,
+         options: Pv,
+         value: hv,
+         onChange: Sv,
+         circleInfoText: ev
+       } = vv;
+       return (0, wv.jsxs)("div", {
+         className: "SettingBox SegmentedSettingRow",
+         children: [(0, wv.jsxs)("div", {
+           className: "SliderText",
+           children: [zv, ev && (0, wv.jsx)(gv.d, {
+             className: "SettingsTextInputCircleInfo",
+             hoverInfo: ev
+           })]
+         }), (0, wv.jsx)(pv.c, {
+ ... (6 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L19633-L19637` → after: `L295-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L295-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L295-L455) · [Before (L19633-L19637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L19633-L19637)

```diff
-       return Yz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(zz) {
-         return typeof zz
-       } : function(zz) {
-         return zz && "function" == typeof Symbol && zz.constructor === Symbol && zz !== Symbol.prototype ? "symbol" : typeof zz
-       }, Yz(zz)
+       let {
+         details: zv,
+         owner: Pv,
+         onChanged: Sv
+       } = vv;
+       const {
+         t: gv
+       } = (0, cv.x)(), pv = (0, Nv.useNavigatePreserveSearch)(), {
+         userContext: Tv
+       } = (0, sv.d)(), [Wv, wv] = (0, hv.useState)(!1), [av, iv] = (0, hv.useState)(null), [Gv, mv] = (0, hv.useState)(!1), {
+         packId: Dv,
+         name: Kv,
+         description: Vv,
+         live: Uv
+       } = zv;
+       async function Rv(vv) {
+ ... (145 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L19639-L19666` → after: `L457-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L457-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L457-L464) · [Before (L19639-L19666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L19639-L19666)

```diff
-     var xz = {
-         click: "onClick",
-         mousedown: "onMouseDown",
-         mouseup: "onMouseUp",
-         mouseover: "onMouseOver",
-         mousemove: "onMouseMove",
-         mouseout: "onMouseOut",
-         mouseenter: "onMouseEnter",
-         mouseleave: "onMouseLeave",
-         touchcancel: "onTouchCancel",
-         touchend: "onTouchEnd",
-         touchmove: "onTouchMove",
-         touchstart: "onTouchStart",
-         contextmenu: "onContextMenu",
-         dblclick: "onDoubleClick"
-       },
- ... (12 more removed lines; see GitHub link above)
+     var Kv = Pv(62),
+       Vv = Pv(1855),
+       Uv = Pv(1265),
+       Rv = Pv(4773),
+       xv = Pv(1184),
+       tv = Pv(6278),
+       qv = Pv(6276),
+       Iv = Pv(6294);
```

#### 15. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L19668-L19675` → after: `L466-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L466-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L466-L540) · [Before (L19668-L19675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L19668-L19675)

```diff
-     function ez(zz, tz) {
-       var sz = [],
-         Fz = [];
-       return Fz = Array.isArray(tz) ? tz.map((function(zz) {
-         return mz(zz)
-       })) : [mz(tz)], Cz(zz).forEach((function(zz) {
-         var tz = Wz()(zz, "type.displayName") || Wz()(zz, "type.name"); - 1 !== Fz.indexOf(tz) && sz.push(zz)
-       })), sz
+     function Qv(vv) {
+       let {
+         item: zv
+       } = vv;
+       const {
+         t: Pv
+       } = (0, cv.x)(), [Sv] = (0, tv.h)(), [gv, pv] = (0, hv.useState)(Sv), [dv, Nv] = (0, hv.useState)(!1), [lv, Tv] = (0, hv.useState)(!1), {
+         s3Url: Wv
+       } = xv.clientSideServerUrls, {
+         width: wv,
+         height: av
+       } = ev.t.large, sv = (0, ev.v)(Wv, zv, gv, "large"), {
+         renderVersion: Cv
+       } = zv;
+       return (0, nv.jsxs)("div", {
+         className: "ShaderPackPreviews",
+ ... (59 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L19678-L19720` → after: `L543-L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L543-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L543-L553) · [Before (L19678-L19720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L19678-L19720)

```diff
-     function Zz(zz, tz) {
-       var sz = ez(zz, tz);
-       return sz && sz[0]
-     }
-     var Gz = function(zz) {
-         if (!zz || !zz.props) return !1;
-         var tz = zz.props,
-           sz = tz.width,
-           Fz = tz.height;
-         return !(!(0, Dz.z)(sz) || sz <= 0 || !(0, Dz.z)(Fz) || Fz <= 0)
-       },
-       Tz = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMat … [truncated]
-       cz = function(zz) {
-         return zz && zz.type && vz()(zz.type) && Tz.indexOf(zz.type) >= 0
-       },
-       jz = function(zz) {
- ... (27 more removed lines; see GitHub link above)
+     function Zv(vv) {
+       let {
+         fullUrl: zv,
+         largeUrl: Pv,
+         alt: Sv,
+         onClose: ev
+       } = vv;
+       const gv = (0, hv.useRef)(null);
+       return (0, Uv.q)("popup", gv, ev), (0, hv.useEffect)((() => {
+         function vv(vv) {
+           "Escape" === vv.key && (vv.stopPropagation(), ev())
```

#### 17. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L19722-L19733` → after: `L555-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L555-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L555-L556) · [Before (L19722-L19733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L19722-L19733)

```diff
-         return !0
-       },
-       Mz = function(zz, tz) {
-         if (Oz()(zz) && Oz()(tz)) return !0;
-         if (!Oz()(zz) && !Oz()(tz)) {
-           var sz = zz.props || {},
-             Fz = sz.children,
-             Wz = rz(sz, Bz),
-             Xz = tz.props || {},
-             oz = Xz.children,
-             vz = rz(Xz, Pz);
-           return Fz && oz ? (0, gz.c)(Wz, vz) && yz(Fz, oz) : !Fz && !oz && (0, gz.c)(Wz, vz)
+         return window.addEventListener("keydown", vv, !0), () => {
+           window.removeEventListener("keydown", vv, !0)
```

#### 18. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L19735-L19750` → after: `L558-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L558-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L558-L568) · [Before (L19735-L19750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L19735-L19750)

```diff
-         return !1
-       },
-       dz = function(zz, tz) {
-         var sz = [],
-           Fz = {};
-         return Cz(zz).forEach((function(zz, Wz) {
-           if (cz(zz)) sz.push(zz);
-           else if (zz) {
-             var Xz = mz(zz.type),
-               Oz = tz[Xz] || {},
-               oz = Oz.handler,
-               vz = Oz.once;
-             if (oz && (!vz || !Fz[Xz])) {
-               var Uz = oz(zz, Xz, Wz);
-               sz.push(Uz), Fz[Xz] = !0
-             }
+       }), [ev]), (0, Kv.createPortal)((0, nv.jsxs)("div", {
+         ref: gv,
+         className: "ShaderPackFullSize",
+         onClick: ev,
+         children: [(0, nv.jsx)("img", {
+           className: "ShaderPackFullSizeImage",
+           src: zv,
+           alt: Sv,
+           draggable: !1,
+           style: {
+             backgroundImage: `url(${Pv})`
```

#### 19. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L19752-L19768` → after: `L570-L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L570-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L570-L574) · [Before (L19752-L19768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L19752-L19768)

```diff
-         })), sz
-       },
-       hz = function(zz) {
-         var tz = zz && zz.type;
-         return tz && xz[tz] ? xz[tz] : null
-       },
-       Qz = function(zz, tz) {
-         return Cz(tz).indexOf(zz)
-       }
-   },
-   5075: (zz, tz, sz) => {
-     function Fz(zz, tz) {
-       for (var sz in zz)
-         if ({}.hasOwnProperty.call(zz, sz) && (!{}.hasOwnProperty.call(tz, sz) || zz[sz] !== tz[sz])) return !1;
-       for (var Fz in tz)
-         if ({}.hasOwnProperty.call(tz, Fz) && !{}.hasOwnProperty.call(zz, Fz)) return !1;
- ... (1 more removed lines; see GitHub link above)
+         }), (0, nv.jsx)(lv.i, {
+           className: "ShaderPackFullSizeClose",
+           onClick: ev
+         })]
+       }), document.body)
```

#### 20. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L19770-L19780` → after: `L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L576) · [Before (L19770-L19780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L19770-L19780)

```diff
-     sz.d(tz, {
-       c: () => Fz
-     })
-   },
-   5816: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Kz
-     });
-     var Fz = sz(5655),
-       Wz = sz(5746),
-       Xz = sz(5060);
+     const Av = 5;
```

#### 21. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L19783-L19788` → after: `L579-L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L579-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L579-L589) · [Before (L19783-L19788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L19783-L19788)

```diff
-       return Oz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(zz) {
-         return typeof zz
-       } : function(zz) {
-         return zz && "function" == typeof Symbol && zz.constructor === Symbol && zz !== Symbol.prototype ? "symbol" : typeof zz
-       }, Oz(zz)
-     }
+       let {
+         item: zv,
+         packUrl: Pv,
+         baselineUrl: Sv
+       } = vv;
+       const {
+         t: gv
+       } = (0, cv.x)(), [pv, dv] = (0, hv.useState)(50), Nv = (0, hv.useRef)(!1), lv = (0, hv.useRef)(null), {
+         width: Tv,
+         height: Wv
+       } = ev.t.large;
```

#### 22. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L19790-L19796` → after: `L591-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L591-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L591-L592) · [Before (L19790-L19796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L19790-L19796)

```diff
-     function oz(zz, tz) {
-       var sz = Object.keys(zz);
-       if (Object.getOwnPropertySymbols) {
-         var Fz = Object.getOwnPropertySymbols(zz);
-         tz && (Fz = Fz.filter((function(tz) {
-           return Object.getOwnPropertyDescriptor(zz, tz).enumerable
-         }))), sz.push.apply(sz, Fz)
+       function wv(vv) {
+         dv((zv => (0, Vv.e)(zv + vv, 0, 100)))
```

#### 23. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L19801-L19808` → after: `L595-L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L595-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L595-L597) · [Before (L19801-L19808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L19801-L19808)

```diff
-     function vz(zz) {
-       for (var tz = 1; tz < arguments.length; tz++) {
-         var sz = null != arguments[tz] ? arguments[tz] : {};
-         tz % 2 ? oz(Object(sz), !0).forEach((function(tz) {
-           Uz(zz, tz, sz[tz])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(zz, Object.getOwnPropertyDescriptors(sz)) : oz(Object(sz)).forEach((function(tz) {
-           Object.defineProperty(zz, tz, Object.getOwnPropertyDescriptor(sz, tz))
-         }))
+       function av(vv) {
+         const zv = vv.currentTarget.getBoundingClientRect();
+         dv((0, Vv.e)((vv.clientX - zv.left) / zv.width * 100, 0, 100))
```

#### 24. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L19810-L19871` → after: `L599-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L599-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L599-L659) · [Before (L19810-L19871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L19810-L19871)

```diff
-       return zz
-     }
- 
-     function Uz(zz, tz, sz) {
-       return (tz = function(zz) {
-         var tz = function(zz, tz) {
-           if ("object" != Oz(zz) || !zz) return zz;
-           var sz = zz[Symbol.toPrimitive];
-           if (void 0 !== sz) {
-             var Fz = sz.call(zz, tz || "default");
-             if ("object" != Oz(Fz)) return Fz;
-             throw new TypeError("@@toPrimitive must return a primitive value.")
-           }
-           return ("string" === tz ? String : Number)(zz)
-         }(zz, "string");
-         return "symbol" == Oz(tz) ? tz : tz + ""
- ... (46 more removed lines; see GitHub link above)
+       return (0, Rv.e)(lv, {
+         adjust: vv => {
+           wv(vv * Av)
+         },
+         setFraction: vv => {
+           dv(100 * vv)
+         },
+         endDrag: () => {}
+       }), (0, nv.jsxs)("div", {
+         ref: lv,
+         className: "ShaderPackCompare",
+         "data-pad-slider": "",
+         "data-pad-focusable": "",
+         role: "slider",
+         tabIndex: 0,
+         "aria-label": gv("shaderPackListing:compare"),
+ ... (45 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L19901-L19905` → after: `L664-L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L664-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L664-L677) · [Before (L19901-L19905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L19901-L19905)

```diff
-       return Oz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(zz) {
-         return typeof zz
-       } : function(zz) {
-         return zz && "function" == typeof Symbol && zz.constructor === Symbol && zz !== Symbol.prototype ? "symbol" : typeof zz
-       }, Oz(zz)
+       let {
+         side: zv,
+         onClick: Pv,
+         children: hv
+       } = vv;
+       return (0, nv.jsx)("button", {
+         type: "button",
+         className: `ShaderPackStageButton ${zv}`,
+         onClick: Pv,
+         children: (0, nv.jsx)("span", {
+           className: "ShaderPackStageButtonFace SmallTextBold",
+           children: hv
+         })
+       })
```

#### 26. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L19907-L19953` → after: `L679-L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L679-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L679-L689) · [Before (L19907-L19953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L19907-L19953)

```diff
-     var oz = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "a … [truncated]
-       vz = ["points", "pathLength"],
-       Uz = {
-         svg: ["viewBox", "children"],
-         polygon: vz,
-         polyline: vz
-       },
-       Kz = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus" … [truncated]
-       uz = function(zz, tz) {
-         if (!zz || "function" === typeof zz || "boolean" === typeof zz) return null;
-         var sz = zz;
-         if ((0, Fz.isValidElement)(zz) && (sz = zz.props), !Xz()(sz)) return null;
-         var Wz = {};
-         return Object.keys(sz).forEach((function(zz) {
-           Kz.includes(zz) && (Wz[zz] = tz || function(tz) {
-             return sz[zz](sz, tz)
- ... (31 more removed lines; see GitHub link above)
+     var Mv = Pv(4732),
+       yv = Pv(278),
+       Bv = Pv(6377);
+     const Jv = {
+       compiler: "shaderPack:compilerUnavailable",
+       download: "shaderPackListing:useDownloadFailed",
+       apiVersion: "shaderPackListing:useOtherApiVersion",
+       invalid: "shaderPackListing:useInvalid",
+       errors: "shaderPackListing:useFailsHere",
+       save: "shaderPack:saveFailed"
+     };
```

#### 27. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L19956-L19978` → after: `L692-L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L692-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L692-L732) · [Before (L19956-L19978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L19956-L19978)

```diff
-       if ("object" === typeof zz && null !== zz) {
-         var tz = zz.$$typeof;
-         switch (tz) {
-           case Fz:
-             switch (zz = zz.type) {
-               case Xz:
-               case oz:
-               case Oz:
-               case Nz:
-               case bz:
-                 return zz;
-               default:
-                 switch (zz = zz && zz.$$typeof) {
-                   case Kz:
-                   case Uz:
-                   case uz:
- ... (7 more removed lines; see GitHub link above)
+       const {
+         userContext: zv
+       } = (0, sv.d)(), [Sv, ev] = (0, hv.useState)(null), [gv, pv] = (0, hv.useState)(!1), [dv, Nv] = (0, hv.useState)(!1), [lv, Tv] = (0, hv.useState)(null), Wv = null === vv || void 0 === vv ? void 0 : vv.packId, wv = null === vv || void 0 === vv ? void 0 : vv.sourceHash;
+       return (0, hv.useEffect)((() => {
+         if (pv(!1), Tv(null), void 0 === Wv) return;
+         let vv = !1;
+         return Promise.all([(0, iv.hasUsableWebGpuAdapter)(), (0, Bv.g)()]).then((zv => {
+           let [Pv, hv] = zv;
+           var Sv;
+           vv || (ev(Pv), pv((null === hv || void 0 === hv || null === (Sv = hv.listing) || void 0 === Sv ? void 0 : Sv.packId) === Wv && hv.listing.sourceHash === wv))
+         })).catch((zv => {
+           console.error("Failed to check whether this shader pack can be used", zv), vv || ev(!1)
+         })), () => {
+           vv = !0
+         }
+       }), [Wv, wv]), {
+ ... (25 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L19980-L19981` → after: `L734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L734) · [Before (L19980-L19981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L19980-L19981)

```diff
-           case Wz:
-             return tz
+           }(vv)
```

#### 29. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L19985-L19992` → after: `L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L738) · [Before (L19985-L19992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L19985-L19992)

```diff
-     sz = Symbol.for("react.module.reference"), tz.isFragment = function(zz) {
-       return Hz(zz) === Xz
-     }
-   },
-   5064: (zz, tz, sz) => {
-     zz.exports = sz(5073)
-   },
-   4685: (zz, tz, sz) => {
+ 
```

#### 30. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L19994-L20009` → after: `L740-L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L740-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L740-L768) · [Before (L19994-L20009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L19994-L20009)

```diff
-       var tz, sz, Wz = "";
-       if ("string" == typeof zz || "number" == typeof zz) Wz += zz;
-       else if ("object" == typeof zz)
-         if (Array.isArray(zz)) {
-           var Xz = zz.length;
-           for (tz = 0; tz < Xz; tz++) zz[tz] && (sz = Fz(zz[tz])) && (Wz && (Wz += " "), Wz += sz)
-         } else
-           for (sz in zz) zz[sz] && (Wz && (Wz += " "), Wz += sz);
-       return Wz
-     }
-     sz.d(tz, {
-       d: () => Wz
-     });
-     const Wz = function() {
-       for (var zz, tz, sz = 0, Wz = "", Xz = arguments.length; sz < Xz; sz++)(zz = arguments[sz]) && (tz = Fz(zz)) && (Wz && (Wz += " "), Wz += tz);
-       return Wz
+       let {
+         packUse: zv
+       } = vv;
+       const {
+         t: Pv
+       } = (0, cv.x)(), {
+         webGpuUsable: hv,
+         inUse: Sv,
+         busy: ev,
+         errorKey: gv,
+         use: pv
+       } = zv;
+       return (0, nv.jsxs)("div", {
+         className: "ShaderPackUse",
+         children: [(0, nv.jsxs)(lv.j, {
+           disabled: !0 !== hv || Sv,
+ ... (13 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L20021-L20029` → after: `L772-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L772-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L772-L780) · [Before (L20021-L20029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L20021-L20029)

```diff
-       var zz, tz, sz = (0, Wz.b)().unknown(void 0),
-         Oz = sz.domain,
-         oz = sz.range,
-         vz = 0,
-         Uz = 1,
-         Kz = !1,
-         uz = 0,
-         Nz = 0,
-         bz = .5;
+       var vv;
+       const {
+         t: zv
+       } = (0, cv.x)(), Pv = (0, Nv.useNavigatePreserveSearch)(), {
+         packId: ev
+       } = (0, Sv.B)(), {
+         userContext: gv,
+         isUserContextUpdating: pv
+       } = (0, sv.d)(), [Tv, Wv] = (0, hv.useState)(null), [wv, iv] = (0, hv.useState)(null), [Gv, mv] = (0, hv.useState)(0), jv = (0, hv.useRef)(0);
```

#### 32. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L20032-L20068` → after: `L783-L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L783-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L783-L842) · [Before (L20032-L20068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L20032-L20068)

```diff
-         var sz = Oz().length,
-           Fz = Uz < vz,
-           Wz = Fz ? Uz : vz,
-           Xz = Fz ? vz : Uz;
-         zz = (Xz - Wz) / Math.max(1, sz - uz + 2 * Nz), Kz && (zz = Math.floor(zz)), Wz += (Xz - Wz - zz * (sz - uz)) * bz, tz = zz * (1 - uz), Kz && (Wz = Math.round(Wz), tz = Math.round(tz));
-         var wz = function(zz, tz, sz) {
-           zz = +zz, tz = +tz, sz = (Wz = arguments.length) < 2 ? (tz = zz, zz = 0, 1) : Wz < 3 ? 1 : +sz;
-           for (var Fz = -1, Wz = 0 | Math.max(0, Math.ceil((tz - zz) / sz)), Xz = new Array(Wz); ++Fz < Wz;) Xz[Fz] = zz + Fz * sz;
-           return Xz
-         }(sz).map((function(tz) {
-           return Wz + zz * tz
-         }));
-         return oz(Fz ? wz.reverse() : wz)
-       }
-       return delete sz.unknown, sz.domain = function(zz) {
-         return arguments.length ? (Oz(zz), wz()) : Oz()
- ... (21 more removed lines; see GitHub link above)
+         var vv;
+         null !== (vv = (0, Nv.getPreviousLocation)()) && void 0 !== vv && vv.startsWith(Yv.O) ? Pv(-1) : Pv(Yv.O)
+       }(0, av.c)(fv), (0, tv.d)(), (0, hv.useEffect)((() => {
+         if (pv || void 0 === ev) return;
+         const vv = ++jv.current;
+         iv(null), Cv.e.getShaderPack(gv, ev).then((zv => {
+           jv.current === vv && Wv(zv)
+         })).catch((zv => {
+           jv.current === vv && (console.error("Failed to get the shader pack", zv), Wv(null), iv({
+             error: zv
+           }))
+         }))
+       }), [ev, gv, pv, Gv]);
+       const Fv = () => {
+           mv((vv => vv + 1))
+         },
+ ... (44 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L20148-L20149` → after: `L847-L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L847-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L847-L849) · [Before (L20148-L20149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L20148-L20149)

```diff
-         _intern: sz,
-         _key: Fz
+         item: zv,
+         favourites: Pv,
+         packUse: hv
```

#### 34. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L20151-L20152` → after: `L851-L864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L851-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L851-L864) · [Before (L20151-L20152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L20151-L20152)

```diff
-       const Wz = Fz(tz);
-       return sz.has(Wz) ? sz.get(Wz) : tz
+       const Sv = Pv.isFavourite(zv.packId);
+       return (0, nv.jsxs)("div", {
+         className: "ShaderPackInformationActions",
+         children: [iv.featureFlags.settings.canUseShaderPacks && (0, nv.jsx)(ov, {
+           packUse: hv
+         }), (0, nv.jsx)(lv.m, {
+           className: "ShaderPackInformationLike",
+           onClick: () => {
+             Pv.toggle(zv.packId)
+           },
+           isLiked: !0 === Sv,
+           isLoading: null === Sv
+         })]
+       })
```

#### 35. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L20155` → after: `L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L867) · [Before (L20155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L20155)

```diff
-     function Xz(zz, tz) {
+     function kv(vv) {
```

#### 36. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L20157-L20158` → after: `L869-L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L869-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L869-L872) · [Before (L20157-L20158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L20157-L20158)

```diff
-         _intern: sz,
-         _key: Fz
+         item: zv,
+         ownerPreview: Pv,
+         bloxdhubSlug: hv,
+         actions: Sv
```

#### 37. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L20160-L20161` → after: `L874-L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L874-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L874-L956) · [Before (L20160-L20161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L20160-L20161)

```diff
-       const Wz = Fz(tz);
-       return sz.has(Wz) ? sz.get(Wz) : (sz.set(Wz, tz), tz)
+       const {
+         t: pv
+       } = (0, cv.x)(), dv = (0, wv.t)(), lv = null === hv ? null : (0, ev.f)(hv);
+       return (0, nv.jsxs)("div", {
+         className: "ShaderPackFacts",
+         children: [zv.description && (0, nv.jsx)("p", {
+           className: "ShaderPackDescription",
+           children: zv.description
+         }), (0, nv.jsxs)("div", {
+           className: "ShaderPackFeatureList",
+           children: [(null !== Pv || null !== lv) && (0, nv.jsx)("div", {
+             className: "ShaderPackAuthor",
+             children: null !== Pv ? (0, nv.jsxs)(nv.Fragment, {
+               children: [(0, nv.jsx)(Wv.e, {
+                 playerSocialPreview: Pv,
+                 showLocation: !1,
+ ... (67 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L20164` → after: `L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L959) · [Before (L20164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L20164)

```diff
-     function Oz(zz, tz) {
+     function Xv(vv) {
```

#### 39. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L20166-L20167` → after: `L961-L963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L961-L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L961-L963) · [Before (L20166-L20167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L20166-L20167)

```diff
-         _intern: sz,
-         _key: Fz
+         label: zv,
+         time: Pv,
+         now: hv
```

#### 40. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L20169-L20191` → after: `L965-L974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L965-L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L965-L974) · [Before (L20169-L20191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L20169-L20191)

```diff
-       const Wz = Fz(tz);
-       return sz.has(Wz) && (tz = sz.get(Wz), sz.delete(Wz)), tz
-     }
- 
-     function oz(zz) {
-       return null !== zz && "object" === typeof zz ? zz.valueOf() : zz
-     }
-     var vz = sz(5752);
-     const Uz = Symbol("implicit");
- 
-     function Kz() {
-       var zz = new Fz,
-         tz = [],
-         sz = [],
-         Wz = Uz;
- 
- ... (7 more removed lines; see GitHub link above)
+       const {
+         t: Sv,
+         selectedLanguage: ev
+       } = (0, cv.x)(), gv = new Date(Pv);
+       let dv = gv.toLocaleDateString();
+       if (hv - Pv <= 30 * pv.k) {
+         const vv = (0, cv.g)(ev.code, "shaderPackListing:timeAgo");
+         dv = Sv("shaderPackListing:timeAgo", {
+           time: (0, pv.gb)(vv, Pv, hv)
+         })
```

#### 41. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L20193-L20204` → after: `L976-L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L976-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L976-L985) · [Before (L20193-L20204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L20193-L20204)

```diff
-       return Xz.domain = function(sz) {
-         if (!arguments.length) return tz.slice();
-         tz = [], zz = new Fz;
-         for (const Fz of sz) zz.has(Fz) || zz.set(Fz, tz.push(Fz) - 1);
-         return Xz
-       }, Xz.range = function(zz) {
-         return arguments.length ? (sz = Array.from(zz), Xz) : sz.slice()
-       }, Xz.unknown = function(zz) {
-         return arguments.length ? (Wz = zz, Xz) : Wz
-       }, Xz.copy = function() {
-         return Kz(tz, sz).unknown(Wz)
-       }, vz.h.apply(Xz, arguments), Xz
+       return (0, nv.jsx)(Tv.h, {
+         tooltipInner: gv.toLocaleString(),
+         children: (0, nv.jsxs)("div", {
+           children: [(0, nv.jsx)("dt", {
+             children: zv
+           }), (0, nv.jsx)("dd", {
+             children: dv
+           })]
+         })
+       })
```

#### 42. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L20207` → after: `L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L988) · [Before (L20207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L20207)

```diff
-   5819: (zz, tz, sz) => {
+   4765: (vv, zv, Pv) => {
```

#### 43. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L20209` → after: `L990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L990) · [Before (L20209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L20209)

```diff
-       d: () => Fz
+       c: () => gv
```

#### 44. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L20211` → after: `L992-L994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L992-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L992-L994) · [Before (L20211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L20211)

```diff
-     Array.prototype.slice;
+     var hv = Pv(1035),
+       Sv = Pv.n(hv),
+       ev = Pv(1082);
```

#### 45. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L20214-L20221` → after: `L997-L1035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L997-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L997-L1035) · [Before (L20214-L20221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L20214-L20221)

```diff
-       return "object" === typeof zz && "length" in zz ? zz : Array.from(zz)
-     }
-   },
-   5712: (zz, tz, sz) => {
-     function Fz(zz) {
-       return function() {
-         return zz
-       }
+       let {
+         options: zv,
+         value: Pv,
+         onChange: hv,
+         ariaLabel: gv,
+         className: pv,
+         reselectable: dv = !1,
+         keepsFocus: Nv = !1,
+         padTabs: lv
+       } = vv;
+       const Tv = void 0 !== lv;
+       return (0, ev.jsx)("div", {
+         className: Sv()("SegmentedToggle", pv),
+         role: "group",
+         "aria-label": gv,
+         "data-pad-tabs": lv,
+ ... (23 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L20227` → after: `L1038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L1038) · [Before (L20227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L20227)

```diff
-   5718: (zz, tz, sz) => {
+   4773: (vv, zv, Pv) => {
```

#### 47. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L20229` → after: `L1040-L1041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR1040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L1040-L1041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L1040-L1041) · [Before (L20229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L20229)

```diff
-       b: () => Uz
+       c: () => ev,
+       e: () => gv
```

#### 48. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L20231-L20307` → after: `L1043-L1066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L1043-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L1043-L1066) · [Before (L20231-L20307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L20231-L20307)

```diff
-     const Fz = Math.PI,
-       Wz = 2 * Fz,
-       Xz = 1e-6,
-       Oz = Wz - Xz;
- 
-     function oz(zz) {
-       this._ += zz[0];
-       for (let tz = 1, sz = zz.length; tz < sz; ++tz) this._ += arguments[tz] + zz[tz]
-     }
-     class vz {
-       constructor(zz) {
-         this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == zz ? oz : function(zz) {
-           let tz = Math.floor(zz);
-           if (!(tz >= 0)) throw new Error(`invalid digits: ${zz}`);
-           if (tz > 15) return oz;
-           const sz = 10 ** tz;
- ... (61 more removed lines; see GitHub link above)
+     var hv = Pv(52);
+     const Sv = new WeakMap,
+       ev = vv => {
+         var zv;
+         const Pv = vv.closest("[data-pad-slider]");
+         return Pv && null !== (zv = Sv.get(Pv)) && void 0 !== zv ? zv : null
+       },
+       gv = (vv, zv) => {
+         const Pv = (0, hv.useRef)(zv);
+         Pv.current = zv, (0, hv.useEffect)((() => {
+           if (vv.current) return ((vv, zv) => (Sv.set(vv, zv), () => {
+             Sv.get(vv) === zv && Sv.delete(vv)
+           }))(vv.current, {
+             adjust: vv => {
+               Pv.current.adjust(vv)
+             },
+ ... (8 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L20326` → after: `L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L1069) · [Before (L20326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L20326)

```diff
-   5559: (zz, tz, sz) => {
+   6377: (vv, zv, Pv) => {
```

#### 50. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L20328` → after: `L1071-L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L1071-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L1071-L1072) · [Before (L20328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L20328)

```diff
-       d: () => Xz
+       c: () => Sv,
+       g: () => ev
```

#### 51. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L20330-L20339` → after: `L1074-L1079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L1074-L1079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/110.js#L1074-L1079) · [Before (L20330-L20339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/110.js#L20330-L20339)

```diff
-     var Fz = !0,
-       Wz = "Invariant failed";
- 
-     function Xz(zz, tz) {
-       if (!zz) {
-         if (Fz) throw new Error(Wz);
-         var sz = "function" === typeof tz ? tz() : tz,
-           Xz = sz ? "".concat(Wz, ": ").concat(sz) : Wz;
-         throw new Error(Xz)
-       }
+     var hv = Pv(39);
+     const Sv = "shaderPack";
+     async function ev() {
+       var vv;
+       let zv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+       return null !== (vv = await hv.f.getItem(Sv, zv)) && void 0 !== vv ? vv : null
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/111.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/111.js` (135 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4)

#### 1. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1)

```diff
- /*! For license information please see 7rj44.111.05b5ceb8.chunk.js.LICENSE.txt */
+ /*! For license information please see qepqb8.111.a37a6502.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L5-L82` → after: `L5-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L5-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L5-L34) · [Before (L5-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L5-L82)

```diff
-   6028: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       Graph: () => kz,
-       debug: () => cs,
-       default: () => ys,
-       graphlib: () => Xz,
-       layout: () => ws,
-       util: () => As,
-       version: () => Xt
-     });
-     var Fz = Object.defineProperty,
-       Wz = (zz, tz, sz) => ((zz, tz, sz) => tz in zz ? Fz(zz, tz, {
-         enumerable: !0,
-         configurable: !0,
-         writable: !0,
-         value: sz
- ... (62 more removed lines; see GitHub link above)
+   5926: function(vv, zv, Pv) {
+     var hv;
+     ! function() {
+       var Sv, ev = 1e9,
+         gv = {
+           precision: 20,
+           rounding: 4,
+           toExpNeg: -7,
+           toExpPos: 21,
+           LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
+         },
+         pv = !0,
+         dv = "[DecimalError] ",
+         Nv = dv + "Invalid argument: ",
+         lv = dv + "Exponent out of range: ",
+         Tv = Math.floor,
+ ... (14 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L84-L85` → after: `L36-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L36-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L36-L131) · [Before (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L84-L85)

```diff
-         hasNode(zz) {
-           return zz in this._nodes
+         for ((dv = Nv.length) - (ev = lv.length) < 0 && (ev = dv, hv = lv, lv = Nv, Nv = hv), Pv = 0; ev;) Pv = (Nv[--ev] = Nv[ev] + lv[ev] + Pv) / av | 0, Nv[ev] %= av;
+         for (Pv && (Nv.unshift(Pv), ++Sv), dv = Nv.length; 0 == Nv[--dv];) Nv.pop();
+         return zv.d = Nv, zv.e = Sv, pv ? Kv(zv, Wv) : zv
+       }
+ 
+       function Gv(vv, zv, Pv) {
+         if (vv !== ~~vv || vv < zv || vv > Pv) throw Error(Nv + vv)
+       }
+ 
+       function mv(vv) {
+         var zv, Pv, hv, Sv = vv.length - 1,
+           ev = "",
+           gv = vv[0];
+         if (Sv > 0) {
+           for (ev += gv, zv = 1; zv < Sv; zv++)(Pv = 7 - (hv = vv[zv] + "").length) && (ev += nv(Pv)), ev += hv;
+           (Pv = 7 - (hv = (gv = vv[zv]) + "").length) && (ev += nv(Pv))
+ ... (80 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L87-L94` → after: `L133-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L133-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L133-L139) · [Before (L87-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L87-L94)

```diff
-         removeNode(zz) {
-           if (zz in this._nodes) {
-             let tz = zz => this.removeEdge(this._edgeObjs[zz]);
-             delete this._nodes[zz], this._isCompound && (this._removeFromParentsChildList(zz), delete this._parent[zz], this.children(zz).forEach((zz => {
-               this.setParent(zz)
-             })), delete this._children[zz]), Object.keys(this._in[zz]).forEach(tz), delete this._in[zz], delete this._preds[zz], Object.keys(this._out[zz]).forEach(tz), delete this._out[zz], delete this._sucs[zz], --this._nodeCount
-           }
-           return this
+         return vv && zv > Pv ? zv : Pv
+       }, iv.squareRoot = iv.sqrt = function() {
+         var vv, zv, Pv, hv, Sv, ev, gv, Nv = this,
+           lv = Nv.constructor;
+         if (Nv.s < 1) {
+           if (!Nv.s) return new lv(0);
+           throw Error(dv + "NaN")
```

#### 5. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L96-L104` → after: `L141-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L141-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L141-L160) · [Before (L96-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L96-L104)

```diff
-         setParent(zz, tz) {
-           if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
-           if (void 0 === tz) tz = "\0";
-           else {
-             for (let sz = tz += ""; void 0 !== sz; sz = this.parent(sz))
-               if (sz === zz) throw new Error("Setting " + tz + " as parent of " + zz + " would create a cycle");
-             this.setNode(tz)
-           }
-           return this.setNode(zz), this._removeFromParentsChildList(zz), this._parent[zz] = tz, this._children[tz][zz] = !0, this
+         for (vv = Fv(Nv), pv = !1, 0 == (Sv = Math.sqrt(+Nv)) || Sv == 1 / 0 ? (((zv = mv(Nv.d)).length + vv) % 2 == 0 && (zv += "0"), Sv = Math.sqrt(zv), vv = Tv((vv + 1) / 2) - (vv < 0 || vv % 2), hv = new lv(zv = Sv == 1 / 0 ? "1e" + vv : (zv = Sv.toExponential()).slice(0, zv. … [truncated]
+           if (hv = (ev = hv).plus(jv(Nv, ev, gv + 2)).times(.5), mv(ev.d).slice(0, gv) === (zv = mv(hv.d)).slice(0, gv)) {
+             if (zv = zv.slice(gv - 3, gv + 1), Sv == gv && "4999" == zv) {
+               if (Kv(ev, Pv + 1, 0), ev.times(ev).eq(Nv)) {
+                 hv = ev;
+                 break
+               }
+             } else if ("9999" != zv) break;
+             gv += 4
+           } return pv = !0, Kv(hv, Pv)
+       }, iv.times = iv.mul = function(vv) {
+         var zv, Pv, hv, Sv, ev, gv, dv, Nv, lv, Tv = this,
+           Wv = Tv.constructor,
+           wv = Tv.d,
+           sv = (vv = new Wv(vv)).d;
+         if (!Tv.s || !vv.s) return new Wv(0);
+ ... (4 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L106-L110` → after: `L162-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L162-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L162-L189) · [Before (L106-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L106-L110)

```diff
-         parent(zz) {
-           if (this._isCompound) {
-             let tz = this._parent[zz];
-             if ("\0" !== tz) return tz
-           }
+         for (; !ev[--gv];) ev.pop();
+         return zv ? ++Pv : ev.shift(), vv.d = ev, vv.e = Pv, pv ? Kv(vv, Wv.precision) : vv
+       }, iv.toDecimalPlaces = iv.todp = function(vv, zv) {
+         var Pv = this,
+           hv = Pv.constructor;
+         return Pv = new hv(Pv), void 0 === vv ? Pv : (Gv(vv, 0, ev), void 0 === zv ? zv = hv.rounding : Gv(zv, 0, 8), Kv(Pv, vv + Fv(Pv) + 1, zv))
+       }, iv.toExponential = function(vv, zv) {
+         var Pv, hv = this,
+           Sv = hv.constructor;
+         return void 0 === vv ? Pv = Uv(hv, !0) : (Gv(vv, 0, ev), void 0 === zv ? zv = Sv.rounding : Gv(zv, 0, 8), Pv = Uv(hv = Kv(new Sv(hv), vv + 1, zv), !0, vv + 1)), Pv
+       }, iv.toFixed = function(vv, zv) {
+         var Pv, hv, Sv = this,
+           gv = Sv.constructor;
+         return void 0 === vv ? Uv(Sv) : (Gv(vv, 0, ev), void 0 === zv ? zv = gv.rounding : Gv(zv, 0, 8), Pv = Uv((hv = Kv(new gv(Sv), vv + Fv(Sv) + 1, zv)).abs(), !1, vv + Fv(hv) + 1), Sv.isneg() && !Sv.isZero() ? "-" + Pv : Pv)
+       }, iv.toInteger = iv.toint = function() {
+         var vv = this,
+ ... (12 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L112-L119` → after: `L191-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L191-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L191-L196) · [Before (L112-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L112-L119)

```diff
-         children() {
-           let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
-           if (this._isCompound) {
-             let tz = this._children[zz];
-             if (tz) return Object.keys(tz)
-           } else {
-             if ("\0" === zz) return this.nodes();
-             if (this.hasNode(zz)) return []
+         if (lv.eq(Sv)) return lv;
+         if (hv = Wv.precision, vv.eq(Sv)) return Kv(lv, hv);
+         if (Nv = (zv = vv.e) >= (Pv = vv.d.length - 1), gv = lv.s, Nv) {
+           if ((Pv = wv < 0 ? -wv : wv) <= sv) {
+             for (ev = new Wv(Sv), zv = Math.ceil(hv / 7 + 4), pv = !1; Pv % 2 && Rv((ev = ev.times(lv)).d, zv), 0 !== (Pv = Tv(Pv / 2));) Rv((lv = lv.times(lv)).d, zv);
+             return pv = !0, vv.s < 0 ? new Wv(Sv).div(ev) : Kv(ev, hv)
```

#### 8. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L121` → after: `L198-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L198-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L198-L218) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L121)

```diff
-           return []
+         } else if (gv < 0) throw Error(dv + "NaN");
+         return gv = gv < 0 && 1 & vv.d[Math.max(zv, Pv)] ? -1 : 1, lv.s = 1, pv = !1, ev = vv.times(Ov(lv, hv + 12)), pv = !0, (ev = fv(ev)).s = gv, ev
+       }, iv.toPrecision = function(vv, zv) {
+         var Pv, hv, Sv = this,
+           gv = Sv.constructor;
+         return void 0 === vv ? hv = Uv(Sv, (Pv = Fv(Sv)) <= gv.toExpNeg || Pv >= gv.toExpPos) : (Gv(vv, 1, ev), void 0 === zv ? zv = gv.rounding : Gv(zv, 0, 8), hv = Uv(Sv = Kv(new gv(Sv), vv, zv), vv <= (Pv = Fv(Sv)) || Pv <= gv.toExpNeg, vv)), hv
+       }, iv.toSignificantDigits = iv.tosd = function(vv, zv) {
+         var Pv = this.constructor;
+         return void 0 === vv ? (vv = Pv.precision, zv = Pv.rounding) : (Gv(vv, 1, ev), void 0 === zv ? zv = Pv.rounding : Gv(zv, 0, 8)), Kv(new Pv(this), vv, zv)
+       }, iv.toString = iv.valueOf = iv.val = iv.toJSON = function() {
+         var vv = this,
+           zv = Fv(vv),
+           Pv = vv.constructor;
+         return Uv(vv, zv <= Pv.toExpNeg || zv >= Pv.toExpPos)
+       };
+       var jv = function() {
+ ... (5 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L123-L125` → after: `L220-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L220-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L220-L229) · [Before (L123-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L123-L125)

```diff
-         predecessors(zz) {
-           let tz = this._preds[zz];
-           if (tz) return Object.keys(tz)
+ 
+         function zv(vv, zv, Pv, hv) {
+           var Sv, ev;
+           if (Pv != hv) ev = Pv > hv ? 1 : -1;
+           else
+             for (Sv = ev = 0; Sv < Pv; Sv++)
+               if (vv[Sv] != zv[Sv]) {
+                 ev = vv[Sv] > zv[Sv] ? 1 : -1;
+                 break
+               } return ev
```

#### 10. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L127-L129` → after: `L231-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L231-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L231-L234) · [Before (L127-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L127-L129)

```diff
-         successors(zz) {
-           let tz = this._sucs[zz];
-           if (tz) return Object.keys(tz)
+ 
+         function Pv(vv, zv, Pv) {
+           for (var hv = 0; Pv--;) vv[Pv] -= hv, hv = vv[Pv] < zv[Pv] ? 1 : 0, vv[Pv] = hv * av + vv[Pv] - zv[Pv];
+           for (; !vv[0] && vv.length > 1;) vv.shift()
```

#### 11. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L131-L138` → after: `L236-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L236-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L236-L253) · [Before (L131-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L131-L138)

```diff
-         neighbors(zz) {
-           let tz = this.predecessors(zz);
-           if (tz) {
-             let sz = new Set(tz),
-               Fz = this.successors(zz);
-             if (Fz)
-               for (let zz of Fz) sz.add(zz);
-             return Array.from(sz.values())
+         return function(hv, Sv, ev, gv) {
+           var pv, Nv, lv, Tv, Wv, wv, sv, Cv, iv, cv, Gv, mv, jv, fv, Yv, nv, Ov, Dv, Vv = hv.constructor,
+             Uv = hv.s == Sv.s ? 1 : -1,
+             Rv = hv.d,
+             xv = Sv.d;
+           if (!hv.s) return new Vv(hv);
+           if (!Sv.s) throw Error(dv + "Division by zero");
+           for (Nv = hv.e - Sv.e, Ov = xv.length, Yv = Rv.length, Cv = (sv = new Vv(Uv)).d = [], lv = 0; xv[lv] == (Rv[lv] || 0);) ++lv;
+           if (xv[lv] > (Rv[lv] || 0) && --Nv, (mv = null == ev ? ev = Vv.precision : gv ? ev + (Fv(hv) - Fv(Sv)) + 1 : ev) < 0) return new Vv(0);
+           if (mv = mv / 7 + 2 | 0, lv = 0, 1 == Ov)
+             for (Tv = 0, xv = xv[0], mv++;
+               (lv < Yv || Tv) && mv--; lv++) jv = Tv * av + (Rv[lv] || 0), Cv[lv] = jv / xv | 0, Tv = jv % xv | 0;
+           else {
+             for ((Tv = av / (xv[0] + 1) | 0) > 1 && (xv = vv(xv, Tv), Rv = vv(Rv, Tv), Ov = xv.length, Yv = Rv.length), fv = Ov, cv = (iv = Rv.slice(0, Ov)).length; cv < Ov;) iv[cv++] = 0;
+             (Dv = xv.slice()).unshift(0), nv = xv[0], xv[1] >= av / 2 && ++nv;
+             do {
+ ... (2 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L141-L218` → after: `L257-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L257-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L257-L270) · [Before (L141-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L141-L218)

```diff
-         isLeaf(zz) {
-           var tz;
-           let sz;
-           return sz = this.isDirected() ? this.successors(zz) : this.neighbors(zz), 0 === (null != (tz = null == sz ? void 0 : sz.length) ? tz : 0)
-         }
-         filterNodes(zz) {
-           let tz = new this.constructor({
-             directed: this._isDirected,
-             multigraph: this._isMultigraph,
-             compound: this._isCompound
-           });
-           tz.setGraph(this.graph()), Object.entries(this._nodes).forEach((sz => {
-             let [Fz, Wz] = sz;
-             zz(Fz) && tz.setNode(Fz, Wz)
-           })), Object.values(this._edgeObjs).forEach((zz => {
-             tz.hasNode(zz.v) && tz.hasNode(zz.w) && tz.setEdge(zz, this.edge(zz))
- ... (62 more removed lines; see GitHub link above)
+       }();
+ 
+       function fv(vv, zv) {
+         var Pv, hv, ev, gv, dv, Nv = 0,
+           Tv = 0,
+           wv = vv.constructor,
+           av = wv.precision;
+         if (Fv(vv) > 16) throw Error(lv + Fv(vv));
+         if (!vv.s) return new wv(Sv);
+         for (null == zv ? (pv = !1, dv = av) : dv = zv, gv = new wv(.03125); vv.abs().gte(.1);) vv = vv.times(gv), Tv += 5;
+         for (dv += Math.log(Wv(2, Tv)) / Math.LN10 * 2 + 5 | 0, Pv = hv = ev = new wv(Sv), wv.precision = dv;;) {
+           if (hv = Kv(hv.times(vv), dv), Pv = Pv.times(++Nv), mv((gv = ev.plus(jv(hv, Pv, dv))).d).slice(0, dv) === mv(ev.d).slice(0, dv)) {
+             for (; Tv--;) ev = Kv(ev.times(ev), dv);
+             return wv.precision = av, null == zv ? (pv = !0, Kv(ev, av)) : ev
```

#### 13. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L220-L235` → after: `L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L272) · [Before (L220-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L220-L235)

```diff
-           return this
-         }
-         inEdges(zz, tz) {
-           return this.isDirected() ? this.filterEdges(this._in[zz], zz, tz) : this.nodeEdges(zz, tz)
-         }
-         outEdges(zz, tz) {
-           return this.isDirected() ? this.filterEdges(this._out[zz], zz, tz) : this.nodeEdges(zz, tz)
-         }
-         nodeEdges(zz, tz) {
-           if (zz in this._nodes) return this.filterEdges({
-             ...this._in[zz],
-             ...this._out[zz]
-           }, zz, tz)
-         }
-         _removeFromParentsChildList(zz) {
-           delete this._children[this._parent[zz]][zz]
+           ev = gv
```

#### 14. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L262-L264` → after: `L276-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L276-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L276-L279) · [Before (L262-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L262-L264)

```diff
-     function Nz(zz, tz) {
-       return uz(zz, tz.v, tz.w, tz.name)
-     }
+       function Fv(vv) {
+         for (var zv = 7 * vv.e, Pv = vv.d[0]; Pv >= 10; Pv /= 10) zv++;
+         return zv
+       }
```

#### 15. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L266-L278` → after: `L281-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L281-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L281-L284) · [Before (L266-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L266-L278)

```diff
-     function bz(zz) {
-       let tz = {
-           options: {
-             directed: zz.isDirected(),
-             multigraph: zz.isMultigraph(),
-             compound: zz.isCompound()
-           },
-           nodes: wz(zz),
-           edges: Dz(zz)
-         },
-         sz = zz.graph();
-       return void 0 !== sz && (tz.value = structuredClone(sz)), tz
-     }
+       function Yv(vv, zv, Pv) {
+         if (zv > vv.LN10.sd()) throw pv = !0, Pv && (vv.precision = Pv), Error(dv + "LN10 precision limit exceeded");
+         return Kv(new vv(vv.LN10), zv)
+       }
```

#### 16. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L280-L289` → after: `L286-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L286-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L286-L289) · [Before (L280-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L280-L289)

```diff
-     function wz(zz) {
-       return zz.nodes().map((tz => {
-         let sz = zz.node(tz),
-           Fz = zz.parent(tz),
-           Wz = {
-             v: tz
-           };
-         return void 0 !== sz && (Wz.value = sz), void 0 !== Fz && (Wz.parent = Fz), Wz
-       }))
-     }
+       function nv(vv) {
+         for (var zv = ""; vv--;) zv += "0";
+         return zv
+       }
```

#### 17. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L291-L300` → after: `L291-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L291-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L291-L306) · [Before (L291-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L291-L300)

```diff
-     function Dz(zz) {
-       return zz.edges().map((tz => {
-         let sz = zz.edge(tz),
-           Fz = {
-             v: tz.v,
-             w: tz.w
-           };
-         return void 0 !== tz.name && (Fz.name = tz.name), void 0 !== sz && (Fz.value = sz), Fz
-       }))
-     }
+       function Ov(vv, zv) {
+         var Pv, hv, ev, gv, Nv, lv, Tv, Wv, wv, av = 1,
+           sv = vv,
+           Cv = sv.d,
+           iv = sv.constructor,
+           cv = iv.precision;
+         if (sv.s < 1) throw Error(dv + (sv.s ? "NaN" : "-Infinity"));
+         if (sv.eq(Sv)) return new iv(0);
+         if (null == zv ? (pv = !1, Wv = cv) : Wv = zv, sv.eq(10)) return null == zv && (pv = !0), Yv(iv, Wv);
+         if (Wv += 10, iv.precision = Wv, hv = (Pv = mv(Cv)).charAt(0), gv = Fv(sv), !(Math.abs(gv) < 15e14)) return Tv = Yv(iv, Wv + 2, cv).times(gv + ""), sv = Ov(new iv(hv + "." + Pv.slice(1)), Wv - 10).plus(Tv), iv.precision = cv, null == zv ? (pv = !0, Kv(sv, cv)) : sv;
+         for (; hv < 7 && 1 != hv || 1 == hv && Pv.charAt(1) > 3;) hv = (Pv = mv((sv = sv.times(vv)).d)).charAt(0), av++;
+         for (gv = Fv(sv), hv > 1 ? (sv = new iv("0." + Pv), gv++) : sv = new iv(hv + "." + Pv.slice(1)), lv = Nv = sv = jv(sv.minus(Sv), sv.plus(Sv), Wv), wv = Kv(sv.times(sv), Wv), ev = 3;;) {
+           if (Nv = Kv(Nv.times(wv), Wv), mv((Tv = lv.plus(jv(Nv, new iv(ev), Wv))).d).slice(0, Wv) === mv(lv.d).slice(0, Wv)) return lv = lv.times(2), 0 !== gv && (lv = lv.plus(Yv(iv, Wv + 2, cv).times(gv + ""))), lv = jv(lv, new iv(av), Wv), iv.precision = cv, null == zv ? (pv = … [truncated]
+           lv = Tv, ev += 2
+         }
+       }
```

#### 18. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L302-L335` → after: `L308-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L308-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L308-L321) · [Before (L302-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L302-L335)

```diff
-     function gz(zz) {
-       let tz = new vz(zz.options);
-       return void 0 !== zz.value && tz.setGraph(zz.value), zz.nodes.forEach((zz => {
-         tz.setNode(zz.v, zz.value), zz.parent && tz.setParent(zz.v, zz.parent)
-       })), zz.edges.forEach((zz => {
-         tz.setEdge({
-           v: zz.v,
-           w: zz.w,
-           name: zz.name
-         }, zz.value)
-       })), tz
-     }
-     oz({}, {
-       read: () => gz,
-       write: () => bz
-     });
- ... (18 more removed lines; see GitHub link above)
+       function Dv(vv, zv) {
+         var Pv, hv, Sv;
+         for ((Pv = zv.indexOf(".")) > -1 && (zv = zv.replace(".", "")), (hv = zv.search(/e/i)) > 0 ? (Pv < 0 && (Pv = hv), Pv += +zv.slice(hv + 1), zv = zv.substring(0, hv)) : Pv < 0 && (Pv = zv.length), hv = 0; 48 === zv.charCodeAt(hv);) ++hv;
+         for (Sv = zv.length; 48 === zv.charCodeAt(Sv - 1);) --Sv;
+         if (zv = zv.slice(hv, Sv)) {
+           if (Sv -= hv, Pv = Pv - hv - 1, vv.e = Tv(Pv / 7), vv.d = [], hv = (Pv + 1) % 7, Pv < 0 && (hv += 7), hv < Sv) {
+             for (hv && vv.d.push(+zv.slice(0, hv)), Sv -= 7; hv < Sv;) vv.d.push(+zv.slice(hv, hv += 7));
+             hv = 7 - (zv = zv.slice(hv)).length
+           } else hv -= Sv;
+           for (; hv--;) zv += "0";
+           if (vv.d.push(+zv), pv && (vv.e > Cv || vv.e < -Cv)) throw Error(lv + Pv)
+         } else vv.s = 0, vv.e = 0, vv.d = [0];
+         return vv
+       }
```

#### 19. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L337-L368` → after: `L323-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L323-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L323-L340) · [Before (L337-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L337-L368)

```diff
-     function Pz(zz, tz, sz, Fz) {
-       return function(zz, tz, sz, Fz) {
-         let Wz, Xz = {},
-           Oz = 0,
-           oz = zz.nodes(),
-           vz = function(zz) {
-             let tz = Xz[zz.v],
-               Fz = Xz[zz.w];
-             if (!tz || !Fz) return;
-             let Oz = sz(zz);
-             tz.distance + Oz < Fz.distance && (Xz[zz.w] = {
-               distance: tz.distance + Oz,
-               predecessor: zz.v
-             }, Wz = !0)
-           },
-           Uz = function() {
- ... (16 more removed lines; see GitHub link above)
+       function Kv(vv, zv, Pv) {
+         var hv, Sv, ev, gv, dv, Nv, wv, sv, iv = vv.d;
+         for (gv = 1, ev = iv[0]; ev >= 10; ev /= 10) gv++;
+         if ((hv = zv - gv) < 0) hv += 7, Sv = zv, wv = iv[sv = 0];
+         else {
+           if ((sv = Math.ceil((hv + 1) / 7)) >= (ev = iv.length)) return vv;
+           for (wv = ev = iv[sv], gv = 1; ev >= 10; ev /= 10) gv++;
+           Sv = (hv %= 7) - 7 + gv
+         }
+         if (void 0 !== Pv && (dv = wv / (ev = Wv(10, gv - Sv - 1)) % 10 | 0, Nv = zv < 0 || void 0 !== iv[sv + 1] || wv % ev, Nv = Pv < 4 ? (dv || Nv) && (0 == Pv || Pv == (vv.s < 0 ? 3 : 2)) : dv > 5 || 5 == dv && (4 == Pv || Nv || 6 == Pv && (hv > 0 ? Sv > 0 ? wv / Wv(10, gv -  … [truncated]
+         if (0 == hv ? (iv.length = sv, ev = 1, sv--) : (iv.length = sv + 1, ev = Wv(10, 7 - hv), iv[sv] = Sv > 0 ? (wv / Wv(10, gv - Sv) % Wv(10, Sv) | 0) * ev : 0), Nv)
+           for (;;) {
+             if (0 == sv) {
+               (iv[0] += ev) == av && (iv[0] = 1, ++vv.e);
+               break
+             }
+ ... (2 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L370-L373` → after: `L342-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L342-L343) · [Before (L370-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L370-L373)

```diff
-         }));
-         let Kz = oz.length;
-         for (let uz = 1; uz < Kz && (Wz = !1, Oz++, Uz(), Wz); uz++);
-         if (Oz === Kz - 1 && (Wz = !1, Uz(), Wz)) throw new Error("The graph contains a negative weight cycle");
+         for (hv = iv.length; 0 === iv[--hv];) iv.pop();
+         if (pv && (vv.e > Cv || vv.e < -Cv)) throw Error(lv + Fv(vv));
```

#### 21. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L389-L412` → after: `L346-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L346-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L346-L359) · [Before (L389-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L389-L412)

```diff
-       return zz.nodes().forEach((function(zz) {
-         tz = [], Wz(zz), tz.length && Fz.push(tz)
-       })), Fz
-     }
-     var Yz = class {
-         constructor() {
-           this._arr = [], this._keyIndices = {}
-         }
-         size() {
-           return this._arr.length
-         }
-         keys() {
-           return this._arr.map((zz => zz.key))
-         }
-         has(zz) {
-           return zz in this._keyIndices
- ... (8 more removed lines; see GitHub link above)
+ 
+       function Vv(vv, zv) {
+         var Pv, hv, Sv, ev, gv, dv, Nv, lv, Tv, Wv, wv = vv.constructor,
+           sv = wv.precision;
+         if (!vv.s || !zv.s) return zv.s ? zv.s = -zv.s : zv = new wv(vv), pv ? Kv(zv, sv) : zv;
+         if (Nv = vv.d, Wv = zv.d, hv = zv.e, lv = vv.e, Nv = Nv.slice(), gv = lv - hv) {
+           for ((Tv = gv < 0) ? (Pv = Nv, gv = -gv, dv = Wv.length) : (Pv = Wv, hv = lv, dv = Nv.length), gv > (Sv = Math.max(Math.ceil(sv / 7), dv) + 2) && (gv = Sv, Pv.length = 1), Pv.reverse(), Sv = gv; Sv--;) Pv.push(0);
+           Pv.reverse()
+         } else {
+           for ((Tv = (Sv = Nv.length) < (dv = Wv.length)) && (dv = Sv), Sv = 0; Sv < dv; Sv++)
+             if (Nv[Sv] != Wv[Sv]) {
+               Tv = Nv[Sv] < Wv[Sv];
+               break
+             } gv = 0
```

#### 22. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L414-L423` → after: `L361-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L361-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L361-L365) · [Before (L414-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L414-L423)

```diff
-         add(zz, tz) {
-           let sz = this._keyIndices,
-             Fz = String(zz);
-           if (!(Fz in sz)) {
-             let zz = this._arr,
-               Wz = zz.length;
-             return sz[Fz] = Wz, zz.push({
-               key: Fz,
-               priority: tz
-             }), this._decrease(Wz), !0
+         for (Tv && (Pv = Nv, Nv = Wv, Wv = Pv, zv.s = -zv.s), dv = Nv.length, Sv = Wv.length - dv; Sv > 0; --Sv) Nv[dv++] = 0;
+         for (Sv = Wv.length; Sv > gv;) {
+           if (Nv[--Sv] < Wv[Sv]) {
+             for (ev = Sv; ev && 0 === Nv[--ev];) Nv[ev] = av - 1;
+             --Nv[ev], Nv[Sv] += av
```

#### 23. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L425-L445` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L367) · [Before (L425-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L425-L445)

```diff
-           return !1
-         }
-         removeMin() {
-           if (0 === this.size()) throw new Error("Queue underflow");
-           this._swap(0, this._arr.length - 1);
-           let zz = this._arr.pop();
-           return delete this._keyIndices[zz.key], this._heapify(0), zz.key
-         }
-         decrease(zz, tz) {
-           let sz = this._keyIndices[zz];
-           if (void 0 === sz) throw new Error(`Key not found: ${zz}`);
-           let Fz = this._arr[sz].priority;
-           if (tz > Fz) throw new Error(`New priority is greater than current priority. Key: ${zz} Old: ${Fz} New: ${tz}`);
-           this._arr[sz].priority = tz, this._decrease(sz)
-         }
-         _heapify(zz) {
- ... (5 more removed lines; see GitHub link above)
+           Nv[Sv] -= Wv[Sv]
```

#### 24. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L447-L492` → after: `L369-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L369-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L369-L372) · [Before (L447-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L447-L492)

```diff
-         _decrease(zz) {
-           let tz, sz = this._arr,
-             Fz = sz[zz].priority;
-           for (; 0 !== zz && (tz = zz >> 1, !(sz[tz].priority < Fz));) this._swap(zz, tz), zz = tz
-         }
-         _swap(zz, tz) {
-           let sz = this._arr,
-             Fz = this._keyIndices,
-             Wz = sz[zz],
-             Xz = sz[tz];
-           sz[zz] = Xz, sz[tz] = Wz, Fz[Xz.key] = zz, Fz[Wz.key] = tz
-         }
-       },
-       xz = () => 1;
- 
-     function mz(zz, tz, sz, Fz) {
- ... (30 more removed lines; see GitHub link above)
+         for (; 0 === Nv[--dv];) Nv.pop();
+         for (; 0 === Nv[0]; Nv.shift()) --hv;
+         return Nv[0] ? (zv.d = Nv, zv.e = hv, pv ? Kv(zv, sv) : zv) : new wv(0)
+       }
```

#### 25. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L494-L498` → after: `L374-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L374-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L374-L379) · [Before (L494-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L494-L498)

```diff
-     function Jz(zz, tz, sz) {
-       return zz.nodes().reduce((function(Fz, Wz) {
-         return Fz[Wz] = mz(zz, Wz, tz, sz), Fz
-       }), {})
-     }
+       function Uv(vv, zv, Pv) {
+         var hv, Sv = Fv(vv),
+           ev = mv(vv.d),
+           gv = ev.length;
+         return zv ? (Pv && (hv = Pv - gv) > 0 ? ev = ev.charAt(0) + "." + ev.slice(1) + nv(hv) : gv > 1 && (ev = ev.charAt(0) + "." + ev.slice(1)), ev = ev + (Sv < 0 ? "e" : "e+") + Sv) : Sv < 0 ? (ev = "0." + nv(-Sv - 1) + ev, Pv && (hv = Pv - gv) > 0 && (ev += nv(hv))) : Sv >=  … [truncated]
+       }
```

#### 26. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L500-L504` → after: `L381-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L381-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L381-L383) · [Before (L500-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L500-L504)

```diff
-     function Iz(zz) {
-       let tz = 0,
-         sz = [],
-         Fz = {},
-         Wz = [];
+       function Rv(vv, zv) {
+         if (vv.length > zv) return vv.length = zv, !0
+       }
```

#### 27. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L507-L520` → after: `L386-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L386-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L386-L410) · [Before (L507-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L507-L520)

```diff
-         var oz;
-         let vz = Fz[Oz] = {
-           onStack: !0,
-           lowlink: tz,
-           index: tz++
-         };
-         if (sz.push(Oz), null == (oz = zz.successors(Oz)) || oz.forEach((function(zz) {
-             if (zz in Fz) {
-               let tz = Fz[zz];
-               null != tz && tz.onStack && (vz.lowlink = Math.min(vz.lowlink, tz.index))
-             } else {
-               Xz(zz);
-               let tz = Fz[zz];
-               tz && (vz.lowlink = Math.min(vz.lowlink, tz.lowlink))
+         if (!vv || "object" !== typeof vv) throw Error(dv + "Object expected");
+         var zv, Pv, hv, Sv = ["precision", 1, ev, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
+         for (zv = 0; zv < Sv.length; zv += 3)
+           if (void 0 !== (hv = vv[Pv = Sv[zv]])) {
+             if (!(Tv(hv) === hv && hv >= Sv[zv + 1] && hv <= Sv[zv + 2])) throw Error(Nv + Pv + ": " + hv);
+             this[Pv] = hv
+           } if (void 0 !== (hv = vv[Pv = "LN10"])) {
+           if (hv != Math.LN10) throw Error(Nv + Pv + ": " + hv);
+           this[Pv] = new this(hv)
+         }
+         return this
+       }
+       gv = function vv(zv) {
+         var Pv, hv, Sv;
+ 
+         function ev(vv) {
+ ... (9 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L522-L529` → after: `L412-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L412-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L412-L416) · [Before (L522-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L522-L529)

```diff
-           })), vz.lowlink === vz.index) {
-           let zz, tz = [];
-           do {
-             zz = sz.pop();
-             let Wz = Fz[zz];
-             Wz && (Wz.onStack = !1), tz.push(zz)
-           } while (Oz !== zz);
-           Wz.push(tz)
+             return vv === ~~vv && vv < 1e7 ? (zv.e = 0, void(zv.d = [vv])) : Dv(zv, vv.toString())
+           }
+           if ("string" !== typeof vv) throw Error(Nv + vv);
+           if (45 === vv.charCodeAt(0) ? (vv = vv.slice(1), zv.s = -1) : zv.s = 1, !wv.test(vv)) throw Error(Nv + vv);
+           Dv(zv, vv)
```

#### 29. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L538-L542` → after: `L455-L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L455-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L455-L460) · [Before (L538-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L538-L542)

```diff
-       return Iz(zz).filter((function(tz) {
-         var sz;
-         let Fz = tz[0];
-         return !!Fz && (tz.length > 1 || 1 === tz.length && (null != (sz = zz.outEdges(Fz, Fz)) ? sz : []).length > 0)
-       }))
+       var zv = -1,
+         Pv = null == vv ? 0 : vv.length;
+       for (this.clear(); ++zv < Pv;) {
+         var hv = vv[zv];
+         this.set(hv[0], hv[1])
+       }
```

#### 30. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L544` → after: `L462-L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L462-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L462-L473) · [Before (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L544)

```diff
-     var ez = () => 1;
+     dv.prototype.clear = hv, dv.prototype.delete = Sv, dv.prototype.get = ev, dv.prototype.has = gv, dv.prototype.set = pv, vv.exports = dv
+   },
+   5074: (vv, zv, Pv) => {
+     var hv = Pv(4982)(Pv(4842), "Map");
+     vv.exports = hv
+   },
+   4957: (vv, zv, Pv) => {
+     var hv = Pv(4963),
+       Sv = Pv(5077),
+       ev = Pv(5099),
+       gv = Pv(5104),
+       pv = Pv(5107);
```

#### 31. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L546-L590` → after: `L475-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L475-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L475-L480) · [Before (L546-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L546-L590)

```diff
-     function Zz(zz, tz, sz) {
-       return function(zz, tz, sz) {
-         let Fz = {},
-           Wz = zz.nodes();
-         return Wz.forEach((function(zz) {
-           let Xz = {};
-           Fz[zz] = Xz, Xz[zz] = {
-             distance: 0,
-             predecessor: ""
-           }, Wz.forEach((function(tz) {
-             zz !== tz && (Xz[tz] = {
-               distance: Number.POSITIVE_INFINITY,
-               predecessor: ""
-             })
-           })), sz(zz).forEach((function(sz) {
-             let Fz = sz.v === zz ? sz.w : sz.v,
- ... (29 more removed lines; see GitHub link above)
+     function dv(vv) {
+       var zv = -1,
+         Pv = null == vv ? 0 : vv.length;
+       for (this.clear(); ++zv < Pv;) {
+         var hv = vv[zv];
+         this.set(hv[0], hv[1])
```

#### 32. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L592` → after: `L482-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L482-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L482-L496) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L592)

```diff
-     };
+     }
+     dv.prototype.clear = hv, dv.prototype.delete = Sv, dv.prototype.get = ev, dv.prototype.has = gv, dv.prototype.set = pv, vv.exports = dv
+   },
+   5510: (vv, zv, Pv) => {
+     var hv = Pv(4982)(Pv(4842), "Promise");
+     vv.exports = hv
+   },
+   5513: (vv, zv, Pv) => {
+     var hv = Pv(4982)(Pv(4842), "Set");
+     vv.exports = hv
+   },
+   5328: (vv, zv, Pv) => {
+     var hv = Pv(4957),
+       Sv = Pv(5331),
+       ev = Pv(5339);
```

#### 33. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L595-L603` → after: `L499-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L499-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L499-L501) · [Before (L595-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L595-L603)

```diff
-       let tz = {},
-         sz = {},
-         Fz = [];
-       if (zz.sinks().forEach((function Wz(Xz) {
-           var Oz;
-           if (Xz in sz) throw new Gz;
-           Xz in tz || (sz[Xz] = !0, tz[Xz] = !0, null == (Oz = zz.predecessors(Xz)) || Oz.forEach(Wz), delete sz[Xz], Fz.push(Xz))
-         })), Object.keys(tz).length !== zz.nodeCount()) throw new Gz;
-       return Fz
+       var zv = -1,
+         Pv = null == vv ? 0 : vv.length;
+       for (this.__data__ = new hv; ++zv < Pv;) this.add(vv[zv])
```

#### 34. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L607-L611` → after: `L514-L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L514-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L514-L541) · [Before (L607-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L607-L611)

```diff
-       try {
-         Tz(zz)
-       } catch (tz) {
-         if (tz instanceof Gz) return !1;
-         throw tz
+       var zv = this.__data__ = new hv(vv);
+       this.size = zv.size
+     }
+     Nv.prototype.clear = Sv, Nv.prototype.delete = ev, Nv.prototype.get = gv, Nv.prototype.has = pv, Nv.prototype.set = dv, vv.exports = Nv
+   },
+   4874: (vv, zv, Pv) => {
+     var hv = Pv(4842).Symbol;
+     vv.exports = hv
+   },
+   5356: (vv, zv, Pv) => {
+     var hv = Pv(4842).Uint8Array;
+     vv.exports = hv
+   },
+   5515: (vv, zv, Pv) => {
+     var hv = Pv(4982)(Pv(4842), "WeakMap");
+     vv.exports = hv
+ ... (12 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L615-L626` → after: `L552-L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L552-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L552-L559) · [Before (L615-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L615-L626)

```diff
- 
-     function jz(zz, tz, sz, Fz, Wz) {
-       Array.isArray(tz) || (tz = [tz]);
-       let Xz = tz => {
-           var sz;
-           return null != (sz = zz.isDirected() ? zz.successors(tz) : zz.neighbors(tz)) ? sz : []
-         },
-         Oz = {};
-       return tz.forEach((function(tz) {
-         if (!zz.hasNode(tz)) throw new Error("Graph does not have node: " + tz);
-         Wz = Az(zz, tz, "post" === sz, Oz, Xz, Fz, Wz)
-       })), Wz
+   },
+   5399: vv => {
+     vv.exports = function(vv, zv) {
+       for (var Pv = -1, hv = null == vv ? 0 : vv.length, Sv = 0, ev = []; ++Pv < hv;) {
+         var gv = vv[Pv];
+         zv(gv, Pv, vv) && (ev[Sv++] = gv)
+       }
+       return ev
```

#### 36. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L628-L632` → after: `L561-L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L561-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L561-L565) · [Before (L628-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L628-L632)

```diff
- 
-     function Az(zz, tz, sz, Fz, Wz, Xz, Oz) {
-       return tz in Fz || (Fz[tz] = !0, sz || (Oz = Xz(Oz, tz)), Wz(tz).forEach((function(tz) {
-         Oz = Az(zz, tz, sz, Fz, Wz, Xz, Oz)
-       })), sz && (Oz = Xz(Oz, tz))), Oz
+   },
+   5720: (vv, zv, Pv) => {
+     var hv = Pv(5724);
+     vv.exports = function(vv, zv) {
+       return !!(null == vv ? 0 : vv.length) && hv(vv, zv, 0) > -1
```

#### 37. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L634-L638` → after: `L567-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L567-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L567-L572) · [Before (L634-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L634-L638)

```diff
- 
-     function yz(zz, tz, sz) {
-       return jz(zz, tz, sz, (function(zz, tz) {
-         return zz.push(tz), zz
-       }), [])
+   },
+   5749: vv => {
+     vv.exports = function(vv, zv, Pv) {
+       for (var hv = -1, Sv = null == vv ? 0 : vv.length; ++hv < Sv;)
+         if (Pv(zv, vv[hv])) return !0;
+       return !1
```

#### 38. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L640-L642` → after: `L574-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L574-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L574-L592) · [Before (L640-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L640-L642)

```diff
- 
-     function Mz(zz, tz) {
-       return yz(zz, tz, "post")
+   },
+   5416: (vv, zv, Pv) => {
+     var hv = Pv(5424),
+       Sv = Pv(5243),
+       ev = Pv(4902),
+       gv = Pv(5429),
+       pv = Pv(5220),
+       dv = Pv(5441),
+       Nv = Object.prototype.hasOwnProperty;
+     vv.exports = function(vv, zv) {
+       var Pv = ev(vv),
+         lv = !Pv && Sv(vv),
+         Tv = !Pv && !lv && gv(vv),
+         Wv = !Pv && !lv && !Tv && dv(vv),
+         wv = Pv || lv || Tv || Wv,
+         av = wv ? hv(vv.length, String) : [],
+ ... (3 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L644-L646` → after: `L594-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L594-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L594-L598) · [Before (L644-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L644-L646)

```diff
- 
-     function dz(zz, tz) {
-       return yz(zz, tz, "pre")
+   },
+   5128: vv => {
+     vv.exports = function(vv, zv) {
+       for (var Pv = -1, hv = null == vv ? 0 : vv.length, Sv = Array(hv); ++Pv < hv;) Sv[Pv] = zv(vv[Pv], Pv, vv);
+       return Sv
```

#### 40. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L648-L677` → after: `L600-L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L600-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L600-L603) · [Before (L648-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L648-L677)

```diff
- 
-     function hz(zz, tz) {
-       var sz;
-       let Fz, Wz = new vz,
-         Xz = {},
-         Oz = new Yz;
- 
-       function oz(zz) {
-         let sz = zz.v === Fz ? zz.w : zz.v,
-           Wz = Oz.priority(sz);
-         if (void 0 !== Wz) {
-           let oz = tz(zz);
-           oz < Wz && (Xz[sz] = Fz, Oz.decrease(sz, oz))
-         }
-       }
-       if (0 === zz.nodeCount()) return Wz;
- ... (14 more removed lines; see GitHub link above)
+   },
+   5236: vv => {
+     vv.exports = function(vv, zv) {
+       for (var Pv = -1, hv = zv.length, Sv = vv.length; ++Pv < hv;) vv[Sv + Pv] = zv[Pv];
```

#### 41. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L680-L705` → after: `L606-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L606-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L606-L611) · [Before (L680-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L680-L705)

```diff
- 
-     function Qz(zz, tz, sz, Fz) {
-       return function(zz, tz, sz, Fz) {
-         if (void 0 === sz) return mz(zz, tz, sz, Fz);
-         let Wz = !1,
-           Xz = zz.nodes();
-         for (let Oz = 0; Oz < Xz.length; Oz++) {
-           let oz = Xz[Oz];
-           if (void 0 === oz) continue;
-           let vz = Fz(oz);
-           for (let zz = 0; zz < vz.length; zz++) {
-             let tz = vz[zz];
-             if (!tz) continue;
-             let Fz = tz.v === oz ? tz.v : tz.w;
-             sz({
-               v: Fz,
- ... (10 more removed lines; see GitHub link above)
+   },
+   5343: vv => {
+     vv.exports = function(vv, zv) {
+       for (var Pv = -1, hv = null == vv ? 0 : vv.length; ++Pv < hv;)
+         if (zv(vv[Pv], Pv, vv)) return !0;
+       return !1
```

#### 42. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L707-L712` → after: `L613-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L613-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L613-L616) · [Before (L707-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L707-L712)

```diff
-     var kz = vz;
- 
-     function iz(zz, tz, sz, Fz) {
-       let Wz = Fz;
-       for (; zz.hasNode(Wz);) Wz = Ez(Fz);
-       return sz.dummy = tz, zz.setNode(Wz, sz), Wz
+   },
+   5812: vv => {
+     vv.exports = function(vv) {
+       return vv.split("")
```

#### 43. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L714-L722` → after: `L618-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L618-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L618-L648) · [Before (L714-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L714-L722)

```diff
- 
-     function Lz(zz) {
-       let tz = new kz({
-         multigraph: zz.isMultigraph()
-       }).setGraph(zz.graph());
-       return zz.nodes().forEach((sz => {
-         zz.children(sz).length || tz.setNode(sz, zz.node(sz))
-       })), zz.edges().forEach((sz => {
-         tz.setEdge(sz, zz.edge(sz))
+   },
+   5050: (vv, zv, Pv) => {
+     var hv = Pv(5055);
+     vv.exports = function(vv, zv) {
+       for (var Pv = vv.length; Pv--;)
+         if (hv(vv[Pv][0], zv)) return Pv;
+       return -1
+     }
+   },
+   5967: (vv, zv, Pv) => {
+     var hv = Pv(5668);
+     vv.exports = function(vv, zv, Pv) {
+       "__proto__" == zv && hv ? hv(vv, zv, {
+         configurable: !0,
+         enumerable: !0,
+         value: Pv,
+ ... (15 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L725-L736` → after: `L651-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L651-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L651-L659) · [Before (L725-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L725-L736)

```diff
- 
-     function lz(zz, tz) {
-       let sz, Fz, Wz = zz.x,
-         Xz = zz.y,
-         Oz = tz.x - Wz,
-         oz = tz.y - Xz,
-         vz = zz.width / 2,
-         Uz = zz.height / 2;
-       if (!Oz && !oz) throw new Error("Not possible to find intersection inside of the rectangle");
-       return Math.abs(oz) * vz > Math.abs(Oz) * Uz ? (oz < 0 && (Uz = -Uz), sz = Uz * Oz / oz, Fz = Uz) : (Oz < 0 && (vz = -vz), sz = vz, Fz = vz * oz / Oz), {
-         x: Wz + sz,
-         y: Xz + Fz
+   },
+   5885: (vv, zv, Pv) => {
+     var hv = Pv(4870);
+     vv.exports = function(vv, zv, Pv) {
+       for (var Sv = -1, ev = vv.length; ++Sv < ev;) {
+         var gv = vv[Sv],
+           pv = zv(gv);
+         if (null != pv && (void 0 === dv ? pv === pv && !hv(pv) : Pv(pv, dv))) var dv = pv,
+           Nv = gv
```

#### 45. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L739-L754` → after: `L663-L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L663-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L663-L668) · [Before (L739-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L739-L754)

```diff
- 
-     function nz(zz) {
-       let tz = zt(Vz(zz) + 1).map((() => []));
-       return zz.nodes().forEach((sz => {
-         let Fz = zz.node(sz),
-           Wz = Fz.rank;
-         void 0 !== Wz && (tz[Wz] || (tz[Wz] = []), tz[Wz][Fz.order] = sz)
-       })), tz
-     }
- 
-     function az(zz, tz, sz, Fz) {
-       let Wz = {
-         width: 0,
-         height: 0
-       };
-       return arguments.length >= 4 && (Wz.rank = sz, Wz.order = Fz), iz(zz, "border", Wz, tz)
+   },
+   5733: vv => {
+     vv.exports = function(vv, zv, Pv, hv) {
+       for (var Sv = vv.length, ev = Pv + (hv ? 1 : -1); hv ? ev-- : ++ev < Sv;)
+         if (zv(vv[ev], ev, vv)) return ev;
+       return -1
```

#### 46. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L756-L769` → after: `L670-L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L670-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L670-L679) · [Before (L756-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L756-L769)

```diff
-     var qz = 65535;
- 
-     function Sz(zz, tz) {
-       if (tz.length > qz) {
-         let sz = function(zz) {
-           let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qz,
-             sz = [];
-           for (let Fz = 0; Fz < zz.length; Fz += tz) {
-             let Wz = zz.slice(Fz, Fz + tz);
-             sz.push(Wz)
-           }
-           return sz
-         }(tz);
-         return zz(...sz.map((tz => zz(...tz))))
+   },
+   5234: (vv, zv, Pv) => {
+     var hv = Pv(5236),
+       Sv = Pv(5241);
+     vv.exports = function vv(zv, Pv, ev, gv, pv) {
+       var dv = -1,
+         Nv = zv.length;
+       for (ev || (ev = Sv), pv || (pv = []); ++dv < Nv;) {
+         var lv = zv[dv];
+         Pv > 0 && ev(lv) ? Pv > 1 ? vv(lv, Pv - 1, ev, gv, pv) : hv(pv, lv) : gv || (pv[pv.length] = lv)
```

#### 47. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L771-L779` → after: `L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L681) · [Before (L771-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L771-L779)

```diff
-       return zz(...tz)
-     }
- 
-     function Vz(zz) {
-       let tz = zz.nodes().map((tz => {
-         let sz = zz.node(tz).rank;
-         return void 0 === sz ? Number.MIN_VALUE : sz
-       }));
-       return Sz(Math.max, tz)
+       return pv
```

#### 48. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L781-L788` → after: `L683-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L683-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L683-L692) · [Before (L781-L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L781-L788)

```diff
- 
-     function Rz(zz, tz) {
-       let sz = Date.now();
-       try {
-         return tz()
-       } finally {
-         console.log(zz + " time: " + (Date.now() - sz) + "ms")
-       }
+   },
+   5607: (vv, zv, Pv) => {
+     var hv = Pv(5609)();
+     vv.exports = hv
+   },
+   5604: (vv, zv, Pv) => {
+     var hv = Pv(5607),
+       Sv = Pv(5409);
+     vv.exports = function(vv, zv) {
+       return vv && hv(vv, zv, Sv)
```

#### 49. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L790-L792` → after: `L694-L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L694-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L694-L700) · [Before (L790-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L790-L792)

```diff
- 
-     function pz(zz, tz) {
-       return tz()
+   },
+   4928: (vv, zv, Pv) => {
+     var hv = Pv(4933),
+       Sv = Pv(5133);
+     vv.exports = function(vv, zv) {
+       for (var Pv = 0, ev = (zv = hv(zv, vv)).length; null != vv && Pv < ev;) vv = vv[Sv(zv[Pv++])];
+       return Pv && Pv == ev ? vv : void 0
```

#### 50. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L794-L797` → after: `L702-L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L702-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L702-L708) · [Before (L794-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L794-L797)

```diff
-     var fz = 0;
- 
-     function Ez(zz) {
-       return zz + "" + ++fz
+   },
+   5382: (vv, zv, Pv) => {
+     var hv = Pv(5236),
+       Sv = Pv(4902);
+     vv.exports = function(vv, zv, Pv) {
+       var ev = zv(vv);
+       return Sv(vv) ? ev : hv(ev, Pv(vv))
```

#### 51. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L799-L807` → after: `L710-L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L710-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L710-L717) · [Before (L799-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L799-L807)

```diff
- 
-     function zt(zz, tz) {
-       let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-       null == tz && (tz = zz, zz = 0);
-       let Fz = zz => zz < tz;
-       sz < 0 && (Fz = zz => tz < zz);
-       let Wz = [];
-       for (let Xz = zz; Fz(Xz); Xz += sz) Wz.push(Xz);
-       return Wz
+   },
+   4872: (vv, zv, Pv) => {
+     var hv = Pv(4874),
+       Sv = Pv(4883),
+       ev = Pv(4885),
+       gv = hv ? hv.toStringTag : void 0;
+     vv.exports = function(vv) {
+       return null == vv ? void 0 === vv ? "[object Undefined]" : "[object Null]" : gv && gv in Object(vv) ? Sv(vv) : ev(vv)
```

#### 52. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L809-L813` → after: `L719-L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L719-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L719-L722) · [Before (L809-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L809-L813)

```diff
- 
-     function tt(zz, tz) {
-       let sz = {};
-       for (let Fz of tz) void 0 !== zz[Fz] && (sz[Fz] = zz[Fz]);
-       return sz
+   },
+   5887: vv => {
+     vv.exports = function(vv, zv) {
+       return vv > zv
```

#### 53. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L815-L821` → after: `L724-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L724-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L724-L727) · [Before (L815-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L815-L821)

```diff
- 
-     function st(zz, tz) {
-       let sz;
-       return sz = "string" == typeof tz ? zz => zz[tz] : tz, Object.entries(zz).reduce(((zz, tz) => {
-         let [Fz, Wz] = tz;
-         return zz[Fz] = sz(Wz, Fz), zz
-       }), {})
+   },
+   5549: vv => {
+     vv.exports = function(vv, zv) {
+       return null != vv && zv in Object(vv)
```

#### 54. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L823-L842` → after: `L729-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L729-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L729-L735) · [Before (L823-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L823-L842)

```diff
-     var Ft = "\0";
- 
-     function Wt(zz, tz, sz) {
-       var Fz, Wz, Xz, Oz, oz, vz;
-       if (!(zz && tz && sz && "edge" === tz.dummy && "edge" === sz.dummy && tz.edgeObj && sz.edgeObj && zz[tz.edgeObj.v] && zz[sz.edgeObj.v] && zz[tz.edgeObj.w] && zz[sz.edgeObj.w])) return 0;
-       let Uz = !0;
-       tz.edgeObj.w === sz.edgeObj.w && (Uz = !1);
-       let Kz = Uz ? null != (Wz = null == (Fz = zz[tz.edgeObj.v]) ? void 0 : Fz.rank) ? Wz : NaN : null != (Oz = null == (Xz = zz[tz.edgeObj.w]) ? void 0 : Xz.rank) ? Oz : NaN,
-         uz = Object.entries(zz).find((zz => {
-           var sz, Fz;
-           return (null == (sz = zz[1].edgeObj) ? void 0 : sz.v) === tz.edgeObj.v && (null == (Fz = zz[1].edgeObj) ? void 0 : Fz.w) === tz.edgeObj.w && zz[1].rank === Kz
-         })),
-         Nz = Object.entries(zz).find((zz => {
-           var tz, Fz;
-           return (null == (tz = zz[1].edgeObj) ? void 0 : tz.v) === sz.edgeObj.v && (null == (Fz = zz[1].edgeObj) ? void 0 : Fz.w) === sz.edgeObj.w && zz[1].rank === Kz
-         }));
- ... (4 more removed lines; see GitHub link above)
+   },
+   5724: (vv, zv, Pv) => {
+     var hv = Pv(5733),
+       Sv = Pv(5739),
+       ev = Pv(5741);
+     vv.exports = function(vv, zv, Pv) {
+       return zv === zv ? ev(vv, zv, Pv) : hv(vv, Sv, Pv)
```

#### 55. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L844-L847` → after: `L737-L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L737-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L737-L742) · [Before (L844-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L844-L847)

```diff
-     var Xt = "3.1.1";
- 
-     function Ot(zz) {
-       zz._prev._next = zz._next, zz._next._prev = zz._prev, delete zz._next, delete zz._prev
+   },
+   5252: (vv, zv, Pv) => {
+     var hv = Pv(4872),
+       Sv = Pv(4888);
+     vv.exports = function(vv) {
+       return Sv(vv) && "[object Arguments]" == hv(vv)
```

#### 56. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L849-L851` → after: `L744-L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L744-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L744-L749) · [Before (L849-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L849-L851)

```diff
- 
-     function ot(zz, tz) {
-       if ("_next" !== zz && "_prev" !== zz) return tz
+   },
+   5315: (vv, zv, Pv) => {
+     var hv = Pv(5317),
+       Sv = Pv(4888);
+     vv.exports = function vv(zv, Pv, ev, gv, pv) {
+       return zv === Pv || (null == zv || null == Pv || !Sv(zv) && !Sv(Pv) ? zv !== zv && Pv !== Pv : hv(zv, Pv, ev, gv, vv, pv))
```

#### 57. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L853-L873` → after: `L751-L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L751-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L751-L784) · [Before (L853-L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L853-L873)

```diff
-     var vt = class {
-         constructor() {
-           Wz(this, "_sentinel");
-           let zz = {};
-           zz._next = zz._prev = zz, this._sentinel = zz
-         }
-         dequeue() {
-           let zz = this._sentinel,
-             tz = zz._prev;
-           if (tz !== zz) return Ot(tz), tz
-         }
-         enqueue(zz) {
-           let tz = this._sentinel;
-           zz._prev && zz._next && Ot(zz), zz._next = tz._next, tz._next._prev = zz, tz._next = zz, zz._prev = tz
-         }
-         toString() {
- ... (5 more removed lines; see GitHub link above)
+   },
+   5317: (vv, zv, Pv) => {
+     var hv = Pv(5277),
+       Sv = Pv(5319),
+       ev = Pv(5347),
+       gv = Pv(5369),
+       pv = Pv(5493),
+       dv = Pv(4902),
+       Nv = Pv(5429),
+       lv = Pv(5441),
+       Tv = "[object Arguments]",
+       Wv = "[object Array]",
+       wv = "[object Object]",
+       av = Object.prototype.hasOwnProperty;
+     vv.exports = function(vv, zv, Pv, sv, Cv, iv) {
+       var cv = dv(vv),
+ ... (18 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L875-L926` → after: `L786-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L786-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L786-L811) · [Before (L875-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L875-L926)

```diff
-       },
-       Ut = () => 1;
- 
-     function Kt(zz, tz) {
-       if (zz.nodeCount() <= 1) return [];
-       let sz = function(zz, tz) {
-         let sz = new kz,
-           Fz = 0,
-           Wz = 0;
-         zz.nodes().forEach((zz => {
-           sz.setNode(zz, {
-             v: zz,
-             in: 0,
-             out: 0
-           })
-         })), zz.edges().forEach((zz => {
- ... (36 more removed lines; see GitHub link above)
+       }
+       return !!Yv && (iv || (iv = new hv), gv(vv, zv, Pv, sv, Cv, iv))
+     }
+   },
+   5270: (vv, zv, Pv) => {
+     var hv = Pv(5277),
+       Sv = Pv(5315);
+     vv.exports = function(vv, zv, Pv, ev) {
+       var gv = Pv.length,
+         pv = gv,
+         dv = !ev;
+       if (null == vv) return !pv;
+       for (vv = Object(vv); gv--;) {
+         var Nv = Pv[gv];
+         if (dv && Nv[2] ? Nv[1] !== vv[Nv[0]] : !(Nv[0] in vv)) return !1
+       }
+ ... (10 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L928-L929` → after: `L813-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L813-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L813-L814) · [Before (L928-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L928-L929)

```diff
-         return Xz
-       }(sz.graph, sz.buckets, sz.zeroIdx).flatMap((tz => zz.outEdges(tz.v, tz.w) || []))
+       }
+       return !0
```

#### 60. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L931-L947` → after: `L816-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L816-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L816-L819) · [Before (L931-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L931-L947)

```diff
- 
-     function ut(zz, tz, sz, Fz, Wz) {
-       let Xz = [],
-         Oz = Wz ? Xz : void 0;
-       return (zz.inEdges(Fz.v) || []).forEach((Fz => {
-         let Oz = zz.edge(Fz),
-           oz = zz.node(Fz.v);
-         Wz && Xz.push({
-           v: Fz.v,
-           w: Fz.w
-         }), oz.out -= Oz, Nt(tz, sz, oz)
-       })), (zz.outEdges(Fz.v) || []).forEach((Fz => {
-         let Wz = zz.edge(Fz),
-           Xz = Fz.w,
-           Oz = zz.node(Xz);
-         Oz.in -= Wz, Nt(tz, sz, Oz)
- ... (1 more removed lines; see GitHub link above)
+   },
+   5739: vv => {
+     vv.exports = function(vv) {
+       return vv !== vv
```

#### 61. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L949-L952` → after: `L821-L834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L821-L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L821-L834) · [Before (L949-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L949-L952)

```diff
- 
-     function Nt(zz, tz, sz) {
-       var Fz, Wz, Xz;
-       sz.out ? sz.in ? null == (Xz = zz[sz.out - sz.in + tz]) || Xz.enqueue(sz) : null == (Wz = zz[zz.length - 1]) || Wz.enqueue(sz) : null == (Fz = zz[0]) || Fz.enqueue(sz)
+   },
+   4988: (vv, zv, Pv) => {
+     var hv = Pv(4995),
+       Sv = Pv(4999),
+       ev = Pv(4826),
+       gv = Pv(5013),
+       pv = /^\[object .+?Constructor\]$/,
+       dv = Function.prototype,
+       Nv = Object.prototype,
+       lv = dv.toString,
+       Tv = Nv.hasOwnProperty,
+       Wv = RegExp("^" + lv.call(Tv).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
+     vv.exports = function(vv) {
+       return !(!ev(vv) || Sv(vv)) && (hv(vv) ? Wv : pv).test(gv(vv))
```

#### 62. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L954-L965` → after: `L836-L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L836-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L836-L933) · [Before (L954-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L954-L965)

```diff
- 
-     function bt(zz, tz) {
-       var sz;
-       ("greedy" === zz.graph().acyclicer ? Kt(zz, (sz = zz, zz => sz.edge(zz).weight)) : function(zz, tz) {
-         let sz = [],
-           Fz = {},
-           Wz = {};
- 
-         function Xz(tz) {
-           Object.hasOwn(Wz, tz) || (Wz[tz] = !0, Fz[tz] = !0, zz.outEdges(tz).forEach((zz => {
-             Object.hasOwn(Fz, zz.w) ? sz.push(zz) : Xz(zz.w)
-           })), delete Fz[tz])
+   },
+   5444: (vv, zv, Pv) => {
+     var hv = Pv(4872),
+       Sv = Pv(5211),
+       ev = Pv(4888),
+       gv = {};
+     gv["[object Float32Array]"] = gv["[object Float64Array]"] = gv["[object Int8Array]"] = gv["[object Int16Array]"] = gv["[object Int32Array]"] = gv["[object Uint8Array]"] = gv["[object Uint8ClampedArray]"] = gv["[object Uint16Array]"] = gv["[object Uint32Array]"] = !0, gv["[obj … [truncated]
+       return ev(vv) && Sv(vv.length) && !!gv[hv(vv)]
+     }
+   },
+   5265: (vv, zv, Pv) => {
+     var hv = Pv(5268),
+       Sv = Pv(5538),
+       ev = Pv(5567),
+       gv = Pv(4902),
+       pv = Pv(5575);
+ ... (82 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L967-L991` → after: `L935-L937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L935-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L935-L937) · [Before (L967-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L967-L991)

```diff
- 
-         function Oz(Xz) {
-           var oz;
-           Object.hasOwn(Wz, Xz) || (Wz[Xz] = !0, Fz[Xz] = !0, null == (oz = zz.outEdges(Xz)) || oz.forEach((Wz => {
-             var oz, vz;
-             Object.hasOwn(Fz, Wz.w) || (null == (oz = tz.node(Xz)) ? void 0 : oz.rank) > (null == (vz = tz.node(Wz.w)) ? void 0 : vz.rank) && function(zz, tz, sz) {
-               let Fz = new Set;
- 
-               function Wz(tz) {
-                 var Xz;
-                 if (zz.sources().includes(tz)) return !0;
-                 Fz.add(tz);
-                 for (let Oz of null != (Xz = zz.inEdges(tz)) ? Xz : [])
-                   if ((Oz.v !== sz.v || Oz.w !== sz.w) && !Fz.has(Oz.v) && Wz(Oz.v)) return !0;
-                 return !1
-               }
- ... (9 more removed lines; see GitHub link above)
+       }));
+       return pv(wv, (function(vv, zv) {
+         return Nv(vv, zv, Pv)
```

#### 64. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L994-L1017` → after: `L940-L945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L940-L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L940-L945) · [Before (L994-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L994-L1017)

```diff
- 
-     function wt(zz) {
-       zz.graph().dummyChains = [], zz.edges().forEach((tz => function(zz, tz) {
-         let sz, Fz, Wz, Xz = tz.v,
-           Oz = zz.node(Xz).rank,
-           oz = tz.w,
-           vz = zz.node(oz).rank,
-           Uz = tz.name,
-           Kz = zz.edge(tz),
-           uz = Kz.labelRank;
-         if (vz === Oz + 1) return;
-         for (zz.removeEdge(tz), Wz = 0, ++Oz; Oz < vz; ++Wz, ++Oz) Kz.points = [], Fz = {
-           width: 0,
-           height: 0,
-           edgeLabel: Kz,
-           edgeObj: tz,
- ... (8 more removed lines; see GitHub link above)
+   },
+   5579: vv => {
+     vv.exports = function(vv) {
+       return function(zv) {
+         return null == zv ? void 0 : zv[vv]
+       }
```

#### 65. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1019-L1030` → after: `L947-L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L947-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L947-L953) · [Before (L1019-L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1019-L1030)

```diff
- 
-     function Dt(zz) {
-       let tz = {};
-       zz.sources().forEach((function sz(Fz) {
-         let Wz = zz.node(Fz);
-         if (Object.hasOwn(tz, Fz)) return Wz.rank;
-         tz[Fz] = !0;
-         let Xz = zz.outEdges(Fz),
-           Oz = Xz ? Xz.map((tz => null == tz ? Number.POSITIVE_INFINITY : sz(tz.w) - zz.edge(tz).minlen)) : [],
-           oz = Sz(Math.min, Oz);
-         return oz === Number.POSITIVE_INFINITY && (oz = 0), Wz.rank = oz
-       }))
+   },
+   5586: (vv, zv, Pv) => {
+     var hv = Pv(4928);
+     vv.exports = function(vv) {
+       return function(zv) {
+         return hv(zv, vv)
+       }
```

#### 66. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1032-L1034` → after: `L955-L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L955-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L955-L961) · [Before (L1032-L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1032-L1034)

```diff
- 
-     function gt(zz, tz) {
-       return zz.node(tz.w).rank - zz.node(tz.v).rank - zz.edge(tz).minlen
+   },
+   5203: vv => {
+     var zv = Math.ceil,
+       Pv = Math.max;
+     vv.exports = function(vv, hv, Sv, ev) {
+       for (var gv = -1, pv = Pv(zv((hv - vv) / (Sv || 1)), 0), dv = Array(pv); pv--;) dv[ev ? pv : ++gv] = vv, vv += Sv;
+       return dv
```

#### 67. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1036-L1044` → after: `L963-L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L963-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L963-L991) · [Before (L1036-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1036-L1044)

```diff
-     var Ht = function(zz) {
-       let tz = new kz({
-           directed: !1
-         }),
-         sz = zz.nodes();
-       if (0 === sz.length) throw new Error("Graph must have at least one node");
-       let Fz, Wz, Xz = sz[0],
-         Oz = zz.nodeCount();
-       for (tz.setNode(Xz, {}); Bt(tz, zz) < Oz && (Fz = Pt(tz, zz), Fz);) Wz = tz.hasNode(Fz.v) ? gt(zz, Fz) : -gt(zz, Fz), rt(tz, zz, Wz);
+   },
+   5635: (vv, zv, Pv) => {
+     var hv = Pv(5567),
+       Sv = Pv(5643),
+       ev = Pv(5652);
+     vv.exports = function(vv, zv) {
+       return ev(Sv(vv, zv, hv), vv + "")
+     }
+   },
+   5660: (vv, zv, Pv) => {
+     var hv = Pv(5665),
+       Sv = Pv(5668),
+       ev = Pv(5567),
+       gv = Sv ? function(vv, zv) {
+         return Sv(vv, "toString", {
+           configurable: !0,
+ ... (13 more added lines; see GitHub link above)
```

#### 68. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1058-L1063` → after: `L994-L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L994-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L994-L1001) · [Before (L1058-L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1058-L1063)

```diff
- 
-     function Pt(zz, tz) {
-       return tz.edges().reduce(((sz, Fz) => {
-         let Wz = Number.POSITIVE_INFINITY;
-         return zz.hasNode(Fz.v) !== zz.hasNode(Fz.w) && (Wz = gt(tz, Fz)), Wz < sz[0] ? [Wz, Fz] : sz
-       }), [Number.POSITIVE_INFINITY, null])[1]
+   },
+   6038: (vv, zv, Pv) => {
+     var hv = Pv(5602);
+     vv.exports = function(vv, zv) {
+       var Pv;
+       return hv(vv, (function(vv, hv, Sv) {
+         return !(Pv = zv(vv, hv, Sv))
+       })), !!Pv
```

#### 69. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1065-L1067` → after: `L1003-L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1003-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1003-L1008) · [Before (L1065-L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1065-L1067)

```diff
- 
-     function rt(zz, tz, sz) {
-       zz.nodes().forEach((zz => tz.node(zz).rank += sz))
+   },
+   5618: vv => {
+     vv.exports = function(vv, zv) {
+       var Pv = vv.length;
+       for (vv.sort(zv); Pv--;) vv[Pv] = vv[Pv].value;
+       return vv
```

#### 70. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1069-L1090` → after: `L1010-L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1010-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1010-L1014) · [Before (L1069-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1069-L1090)

```diff
-     var {
-       preorder: Yt,
-       postorder: xt
-     } = Hz, mt = Jt;
- 
-     function Jt(zz) {
-       zz = function(zz) {
-         let tz = (new kz).setGraph(zz.graph());
-         return zz.nodes().forEach((sz => tz.setNode(sz, zz.node(sz)))), zz.edges().forEach((sz => {
-           let Fz = tz.edge(sz.v, sz.w) || {
-               weight: 0,
-               minlen: 1
-             },
-             Wz = zz.edge(sz);
-           tz.setEdge(sz.v, sz.w, {
-             weight: Fz.weight + Wz.weight,
- ... (6 more removed lines; see GitHub link above)
+   },
+   5424: vv => {
+     vv.exports = function(vv, zv) {
+       for (var Pv = -1, hv = Array(vv); ++Pv < vv;) hv[Pv] = zv(Pv);
+       return hv
```

#### 71. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1092-L1099` → after: `L1016-L1029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1016-L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1016-L1029) · [Before (L1092-L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1092-L1099)

```diff
- 
-     function It(zz, tz) {
-       let sz = xt(zz, zz.nodes());
-       sz = sz.slice(0, sz.length - 1), sz.forEach((sz => function(zz, tz, sz) {
-         let Fz = zz.node(sz).parent,
-           Wz = zz.edge(sz, Fz);
-         Wz.cutvalue = Ct(zz, tz, sz)
-       }(zz, tz, sz)))
+   },
+   5121: (vv, zv, Pv) => {
+     var hv = Pv(4874),
+       Sv = Pv(5128),
+       ev = Pv(4902),
+       gv = Pv(4870),
+       pv = hv ? hv.prototype : void 0,
+       dv = pv ? pv.toString : void 0;
+     vv.exports = function vv(zv) {
+       if ("string" == typeof zv) return zv;
+       if (ev(zv)) return Sv(zv, vv) + "";
+       if (gv(zv)) return dv ? dv.call(zv) : "";
+       var Pv = zv + "";
+       return "0" == Pv && 1 / zv == -1 / 0 ? "-0" : Pv
```

#### 72. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1101-L1103` → after: `L1031-L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1031-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1031-L1056) · [Before (L1101-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1101-L1103)

```diff
- 
-     function Ct(zz, tz, sz) {
-       let Fz = zz.node(sz).parent,
+   },
+   4863: (vv, zv, Pv) => {
+     var hv = Pv(4866),
+       Sv = /^\s+/;
+     vv.exports = function(vv) {
+       return vv ? vv.slice(0, hv(vv) + 1).replace(Sv, "") : vv
+     }
+   },
+   5453: vv => {
+     vv.exports = function(vv) {
+       return function(zv) {
+         return vv(zv)
+       }
+     }
+   },
+   5717: (vv, zv, Pv) => {
+ ... (10 more added lines; see GitHub link above)
```

#### 73. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1105-L1122` → after: `L1058-L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1058-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1058-L1075) · [Before (L1105-L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1105-L1122)

```diff
-         Xz = tz.edge(sz, Fz),
-         Oz = 0;
-       Xz || (Wz = !1, Xz = tz.edge(Fz, sz)), Oz = Xz.weight;
-       let oz = tz.nodeEdges(sz);
-       return oz && oz.forEach((Xz => {
-         let oz = Xz.v === sz,
-           vz = oz ? Xz.w : Xz.v;
-         if (vz !== Fz) {
-           let Fz = oz === Wz,
-             Uz = tz.edge(Xz).weight;
-           if (Oz += Fz ? Uz : -Uz, function(zz, tz, sz) {
-               return zz.hasEdge(tz, sz)
-             }(zz, sz, vz)) {
-             let tz = zz.edge(sz, vz).cutvalue;
-             Oz += Fz ? -tz : tz
-           }
- ... (2 more removed lines; see GitHub link above)
+         wv = [],
+         av = wv;
+       if (Pv) Wv = !1, lv = ev;
+       else if (Tv >= 200) {
+         var sv = zv ? null : pv(vv);
+         if (sv) return dv(sv);
+         Wv = !1, lv = gv, av = new hv
+       } else av = zv ? [] : wv;
+       vv: for (; ++Nv < Tv;) {
+         var Cv = vv[Nv],
+           iv = zv ? zv(Cv) : Cv;
+         if (Cv = Pv || 0 !== Cv ? Cv : 0, Wv && iv === iv) {
+           for (var cv = av.length; cv--;)
+             if (av[cv] === iv) continue vv;
+           zv && av.push(iv), wv.push(Cv)
+         } else lv(av, iv, Pv) || (av !== wv && av.push(iv), wv.push(Cv))
+ ... (2 more added lines; see GitHub link above)
```

#### 74. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1124-L1126` → after: `L1077-L1080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1077-L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1077-L1080) · [Before (L1124-L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1124-L1126)

```diff
- 
-     function et(zz, tz) {
-       arguments.length < 2 && (tz = zz.nodes()[0]), Zt(zz, {}, 1, tz)
+   },
+   5345: vv => {
+     vv.exports = function(vv, zv) {
+       return vv.has(zv)
```

#### 75. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1128-L1136` → after: `L1082-L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1082-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1082-L1089) · [Before (L1128-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1128-L1136)

```diff
- 
-     function Zt(zz, tz, sz, Fz, Wz) {
-       let Xz = sz,
-         Oz = zz.node(Fz);
-       tz[Fz] = !0;
-       let oz = zz.neighbors(Fz);
-       return oz && oz.forEach((Wz => {
-         Object.hasOwn(tz, Wz) || (sz = Zt(zz, tz, sz, Wz, Fz))
-       })), Oz.low = Xz, Oz.lim = sz++, Wz ? Oz.parent = Wz : delete Oz.parent, sz
+   },
+   4933: (vv, zv, Pv) => {
+     var hv = Pv(4902),
+       Sv = Pv(4939),
+       ev = Pv(4942),
+       gv = Pv(5113);
+     vv.exports = function(vv, zv) {
+       return hv(vv) ? vv : Sv(vv, zv) ? [vv] : ev(gv(vv))
```

#### 76. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1138-L1140` → after: `L1091-L1096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1091-L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1091-L1096) · [Before (L1138-L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1138-L1140)

```diff
- 
-     function Gt(zz) {
-       return zz.edges().find((tz => zz.edge(tz).cutvalue < 0))
+   },
+   5793: (vv, zv, Pv) => {
+     var hv = Pv(5800);
+     vv.exports = function(vv, zv, Pv) {
+       var Sv = vv.length;
+       return Pv = void 0 === Pv ? Sv : Pv, !zv && Pv >= Sv ? vv : hv(vv, zv, Pv)
```

#### 77. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1142-L1151` → after: `L1098-L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1098-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1098-L1114) · [Before (L1142-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1142-L1151)

```diff
- 
-     function Tt(zz, tz, sz) {
-       let Fz = sz.v,
-         Wz = sz.w;
-       tz.hasEdge(Fz, Wz) || (Fz = sz.w, Wz = sz.v);
-       let Xz = zz.node(Fz),
-         Oz = zz.node(Wz),
-         oz = Xz,
-         vz = !1;
-       return Xz.lim > Oz.lim && (oz = Oz, vz = !0), tz.edges().filter((tz => vz === jt(zz, zz.node(tz.v), oz) && vz !== jt(zz, zz.node(tz.w), oz))).reduce(((zz, sz) => gt(tz, sz) < gt(tz, zz) ? sz : zz))
+   },
+   5628: (vv, zv, Pv) => {
+     var hv = Pv(4870);
+     vv.exports = function(vv, zv) {
+       if (vv !== zv) {
+         var Pv = void 0 !== vv,
+           Sv = null === vv,
+           ev = vv === vv,
+           gv = hv(vv),
+           pv = void 0 !== zv,
+           dv = null === zv,
+           Nv = zv === zv,
+           lv = hv(zv);
+         if (!dv && !lv && !gv && vv > zv || gv && pv && Nv && !dv && !lv || Sv && pv && Nv || !Pv && Nv || !ev) return 1;
+         if (!Sv && !gv && !lv && vv < zv || lv && Pv && ev && !Sv && !gv || dv && Pv && ev || !pv && ev || !Nv) return -1
+       }
+ ... (1 more added lines; see GitHub link above)
```

#### 78. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1153-L1168` → after: `L1116-L1124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1116-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1116-L1124) · [Before (L1153-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1153-L1168)

```diff
- 
-     function ct(zz, tz, sz, Fz) {
-       let Wz = sz.v,
-         Xz = sz.w;
-       zz.removeEdge(Wz, Xz), zz.setEdge(Fz.v, Fz.w, {}), et(zz), It(zz, tz),
-         function(zz, tz) {
-           let sz = zz.nodes().find((tz => !zz.node(tz).parent));
-           if (!sz) return;
-           let Fz = Yt(zz, [sz]);
-           Fz = Fz.slice(1), Fz.forEach((sz => {
-             let Fz = zz.node(sz).parent,
-               Wz = tz.edge(sz, Fz),
-               Xz = !1;
-             Wz || (Wz = tz.edge(Fz, sz), Xz = !0), tz.node(sz).rank = tz.node(Fz).rank + (Xz ? Wz.minlen : -Wz.minlen)
-           }))
-         }(zz, tz)
+   },
+   5621: (vv, zv, Pv) => {
+     var hv = Pv(5628);
+     vv.exports = function(vv, zv, Pv) {
+       for (var Sv = -1, ev = vv.criteria, gv = zv.criteria, pv = ev.length, dv = Pv.length; ++Sv < pv;) {
+         var Nv = hv(ev[Sv], gv[Sv]);
+         if (Nv) return Sv >= dv ? Nv : Nv * ("desc" == Pv[Sv] ? -1 : 1)
+       }
+       return vv.index - zv.index
```

#### 79. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1170-L1172` → after: `L1126-L1140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1126-L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1126-L1140) · [Before (L1170-L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1170-L1172)

```diff
- 
-     function jt(zz, tz, sz) {
-       return sz.low <= tz.lim && tz.lim <= sz.lim
+   },
+   5004: (vv, zv, Pv) => {
+     var hv = Pv(4842)["__core-js_shared__"];
+     vv.exports = hv
+   },
+   5611: (vv, zv, Pv) => {
+     var hv = Pv(5209);
+     vv.exports = function(vv, zv) {
+       return function(Pv, Sv) {
+         if (null == Pv) return Pv;
+         if (!hv(Pv)) return vv(Pv, Sv);
+         for (var ev = Pv.length, gv = zv ? ev : -1, pv = Object(Pv);
+           (zv ? gv-- : ++gv < ev) && !1 !== Sv(pv[gv], gv, pv););
+         return Pv
+       }
```

#### 80. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1174-L1190` → after: `L1142-L1150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1142-L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1142-L1150) · [Before (L1174-L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1174-L1190)

```diff
-     Jt.initLowLimValues = et, Jt.initCutValues = It, Jt.calcCutValue = Ct, Jt.leaveEdge = Gt, Jt.enterEdge = Tt, Jt.exchangeEdges = ct;
-     var At = function(zz) {
-       let tz = zz.graph().ranker;
-       if ("function" == typeof tz) return tz(zz);
-       switch (tz) {
-         case "network-simplex":
-         default:
-           Mt(zz);
-           break;
-         case "tight-tree":
-           ! function(zz) {
-             Dt(zz), Ht(zz)
-           }(zz);
-           break;
-         case "longest-path":
-           yt(zz);
- ... (1 more removed lines; see GitHub link above)
+   },
+   5609: vv => {
+     vv.exports = function(vv) {
+       return function(zv, Pv, hv) {
+         for (var Sv = -1, ev = Object(zv), gv = hv(zv), pv = gv.length; pv--;) {
+           var dv = gv[vv ? pv : ++Sv];
+           if (!1 === Pv(ev[dv], dv, ev)) break
+         }
+         return zv
```

#### 81. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1198-L1248` → after: `L1153-L1179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1153-L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1153-L1179) · [Before (L1198-L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1198-L1248)

```diff
-     var dt = function(zz) {
-       let tz = function(zz) {
-           let tz = {},
-             sz = 0;
- 
-           function Fz(Wz) {
-             let Xz = sz;
-             zz.children(Wz).forEach(Fz), tz[Wz] = {
-               low: Xz,
-               lim: sz++
-             }
-           }
-           return zz.children(Ft).forEach(Fz), tz
-         }(zz),
-         sz = zz.graph();
-       if (!Array.isArray(sz.dummyChains)) return;
- ... (35 more removed lines; see GitHub link above)
+   },
+   5785: (vv, zv, Pv) => {
+     var hv = Pv(5793),
+       Sv = Pv(5802),
+       ev = Pv(5804),
+       gv = Pv(5113);
+     vv.exports = function(vv) {
+       return function(zv) {
+         zv = gv(zv);
+         var Pv = Sv(zv) ? ev(zv) : void 0,
+           pv = Pv ? Pv[0] : zv.charAt(0),
+           dv = Pv ? hv(Pv, 1).join("") : zv.slice(1);
+         return pv[vv]() + dv
+       }
+     }
+   },
+ ... (11 more added lines; see GitHub link above)
```

#### 82. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1252-L1308` → after: `L1182-L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1182-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1182-L1184) · [Before (L1252-L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1252-L1308)

```diff
-       }))
-     };
- 
-     function ht(zz) {
-       let tz = iz(zz, "root", {}, "_root"),
-         sz = function(zz) {
-           let tz = {};
- 
-           function sz(Fz, Wz) {
-             let Xz = zz.children(Fz);
-             Xz && Xz.length && Xz.forEach((zz => sz(zz, Wz + 1))), tz[Fz] = Wz
-           }
-           return zz.children(Ft).forEach((zz => sz(zz, 1))), tz
-         }(zz),
-         Fz = Object.values(sz),
-         Wz = Sz(Math.max, Fz) - 1,
- ... (41 more removed lines; see GitHub link above)
+         var Nv = vv(zv, Pv, gv);
+         return Nv > -1 ? pv[dv ? zv[Nv] : Nv] : void 0
+       }
```

#### 83. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1310-L1316` → after: `L1186-L1238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1186-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1186-L1238) · [Before (L1310-L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1310-L1316)

```diff
-     var kt = function(zz) {
-       zz.children(Ft).forEach((function tz(sz) {
-         let Fz = zz.children(sz),
-           Wz = zz.node(sz);
-         if (Fz.length && Fz.forEach(tz), Wz && Object.hasOwn(Wz, "minRank")) {
-           Wz.borderLeft = [], Wz.borderRight = [];
-           for (let tz = Wz.minRank, Fz = Wz.maxRank + 1; tz < Fz; ++tz) it(zz, "borderLeft", "_bl", sz, Wz, tz), it(zz, "borderRight", "_br", sz, Wz, tz)
+   },
+   5198: (vv, zv, Pv) => {
+     var hv = Pv(5203),
+       Sv = Pv(5205),
+       ev = Pv(5224);
+     vv.exports = function(vv) {
+       return function(zv, Pv, gv) {
+         return gv && "number" != typeof gv && Sv(zv, Pv, gv) && (Pv = gv = void 0), zv = ev(zv), void 0 === Pv ? (Pv = zv, zv = 0) : Pv = ev(Pv), gv = void 0 === gv ? zv < Pv ? 1 : -1 : ev(gv), hv(zv, Pv, gv, vv)
+       }
+     }
+   },
+   5755: (vv, zv, Pv) => {
+     var hv = Pv(5513),
+       Sv = Pv(5762),
+       ev = Pv(5361),
+       gv = hv && 1 / ev(new hv([, -0]))[1] == 1 / 0 ? function(vv) {
+ ... (37 more added lines; see GitHub link above)
```

#### 84. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1318-L1332` → after: `L1240-L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1240-L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1240-L1252) · [Before (L1318-L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1318-L1332)

```diff
-       }))
-     };
- 
-     function it(zz, tz, sz, Fz, Wz, Xz) {
-       let Oz = {
-           width: 0,
-           height: 0,
-           rank: Xz,
-           borderType: tz
-         },
-         oz = Wz[tz][Xz - 1],
-         vz = iz(zz, "border", Oz, sz);
-       Wz[tz][Xz] = vz, zz.setParent(vz, Fz), oz && zz.setEdge(oz, vz, {
-         weight: 1
-       })
+         if (Cv) {
+           if (!Sv(zv, (function(vv, zv) {
+               if (!ev(Cv, zv) && (iv === vv || pv(iv, vv, Pv, gv, dv))) return Cv.push(zv)
+             }))) {
+             sv = !1;
+             break
+           }
+         } else if (iv !== cv && !pv(iv, cv, Pv, gv, dv)) {
+           sv = !1;
+           break
+         }
+       }
+       return dv.delete(vv), dv.delete(zv), sv
```

#### 85. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1334-L1350` → after: `L1254-L1293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1254-L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1254-L1293) · [Before (L1334-L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1334-L1350)

```diff
- 
-     function Lt(zz) {
-       var tz;
-       let sz = null == (tz = zz.graph().rankdir) ? void 0 : tz.toLowerCase();
-       ("bt" === sz || "rl" === sz) && function(zz) {
-         zz.nodes().forEach((tz => qt(zz.node(tz)))), zz.edges().forEach((tz => {
-           var sz;
-           let Fz = zz.edge(tz);
-           null == (sz = Fz.points) || sz.forEach(qt), Object.hasOwn(Fz, "y") && qt(Fz)
-         }))
-       }(zz), ("lr" === sz || "rl" === sz) && (function(zz) {
-         zz.nodes().forEach((tz => St(zz.node(tz)))), zz.edges().forEach((tz => {
-           var sz;
-           let Fz = zz.edge(tz);
-           null == (sz = Fz.points) || sz.forEach(St), Object.hasOwn(Fz, "x") && St(Fz)
-         }))
- ... (1 more removed lines; see GitHub link above)
+   },
+   5347: (vv, zv, Pv) => {
+     var hv = Pv(4874),
+       Sv = Pv(5356),
+       ev = Pv(5055),
+       gv = Pv(5319),
+       pv = Pv(5359),
+       dv = Pv(5361),
+       Nv = hv ? hv.prototype : void 0,
+       lv = Nv ? Nv.valueOf : void 0;
+     vv.exports = function(vv, zv, Pv, hv, Nv, Tv, Wv) {
+       switch (Pv) {
+         case "[object DataView]":
+           if (vv.byteLength != zv.byteLength || vv.byteOffset != zv.byteOffset) return !1;
+           vv = vv.buffer, zv = zv.buffer;
+         case "[object ArrayBuffer]":
+ ... (24 more added lines; see GitHub link above)
```

#### 86. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1352-L1354` → after: `L1295-L1328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1295-L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1295-L1328) · [Before (L1352-L1354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1352-L1354)

```diff
- 
-     function lt(zz) {
-       zz.nodes().forEach((tz => nt(zz.node(tz)))), zz.edges().forEach((tz => nt(zz.edge(tz))))
+   },
+   5369: (vv, zv, Pv) => {
+     var hv = Pv(5378),
+       Sv = Object.prototype.hasOwnProperty;
+     vv.exports = function(vv, zv, Pv, ev, gv, pv) {
+       var dv = 1 & Pv,
+         Nv = hv(vv),
+         lv = Nv.length;
+       if (lv != hv(zv).length && !dv) return !1;
+       for (var Tv = lv; Tv--;) {
+         var Wv = Nv[Tv];
+         if (!(dv ? Wv in zv : Sv.call(zv, Wv))) return !1
+       }
+       var wv = pv.get(vv),
+         av = pv.get(zv);
+       if (wv && av) return wv == zv && av == vv;
+ ... (18 more added lines; see GitHub link above)
```

#### 87. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1356-L1359` → after: `L1330-L1340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1330-L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1330-L1340) · [Before (L1356-L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1356-L1359)

```diff
- 
-     function nt(zz) {
-       let tz = zz.width;
-       zz.width = zz.height, zz.height = tz
+   },
+   4848: (vv, zv, Pv) => {
+     var hv = "object" == typeof Pv.g && Pv.g && Pv.g.Object === Object && Pv.g;
+     vv.exports = hv
+   },
+   5378: (vv, zv, Pv) => {
+     var hv = Pv(5382),
+       Sv = Pv(5391),
+       ev = Pv(5409);
+     vv.exports = function(vv) {
+       return hv(vv, ev, Sv)
```

#### 88. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1361-L1363` → after: `L1342-L1347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1342-L1347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1342-L1347) · [Before (L1361-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1361-L1363)

```diff
- 
-     function qt(zz) {
-       zz.y = -zz.y
+   },
+   5084: (vv, zv, Pv) => {
+     var hv = Pv(5093);
+     vv.exports = function(vv, zv) {
+       var Pv = vv.__data__;
+       return hv(zv) ? Pv["string" == typeof zv ? "string" : "hash"] : Pv.map
```

#### 89. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1365-L1368` → after: `L1349-L1359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1349-L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1349-L1359) · [Before (L1365-L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1365-L1368)

```diff
- 
-     function St(zz) {
-       let tz = zz.x;
-       zz.x = zz.y, zz.y = tz
+   },
+   5524: (vv, zv, Pv) => {
+     var hv = Pv(5528),
+       Sv = Pv(5409);
+     vv.exports = function(vv) {
+       for (var zv = Sv(vv), Pv = zv.length; Pv--;) {
+         var ev = zv[Pv],
+           gv = vv[ev];
+         zv[Pv] = [ev, gv, hv(gv)]
+       }
+       return zv
```

#### 90. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1370-L1388` → after: `L1361-L1367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1361-L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1361-L1367) · [Before (L1370-L1388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1370-L1388)

```diff
- 
-     function Vt(zz) {
-       let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-         sz = {},
-         Fz = zz.nodes().filter((tz => !zz.children(tz).length)),
-         Wz = Fz.map((tz => zz.node(tz).rank)),
-         Xz = zt(Sz(Math.max, Wz) + 1).map((() => []));
-       return Fz.sort(((tz, sz) => zz.node(tz).rank - zz.node(sz).rank)).forEach((function Fz(Wz) {
-         if (sz[Wz]) return;
-         sz[Wz] = !0;
-         let Oz = zz.node(Wz);
-         Xz[Oz.rank].push(Wz);
-         let oz = zz.successors(Wz);
-         oz && [...oz].sort(((sz, Fz) => function(sz, Fz) {
-           let Wz = zz.node(sz),
-             Xz = zz.node(Fz);
- ... (3 more removed lines; see GitHub link above)
+   },
+   4982: (vv, zv, Pv) => {
+     var hv = Pv(4988),
+       Sv = Pv(5015);
+     vv.exports = function(vv, zv) {
+       var Pv = Sv(vv, zv);
+       return hv(Pv) ? Pv : void 0
```

#### 91. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1390-L1393` → after: `L1369-L1437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1369-L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1369-L1437) · [Before (L1390-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1390-L1393)

```diff
- 
-     function Rt(zz, tz) {
-       let sz = 0;
-       for (let Fz = 1; Fz < tz.length; ++Fz) sz += pt(zz, tz[Fz - 1], tz[Fz]);
+   },
+   6020: (vv, zv, Pv) => {
+     var hv = Pv(5488)(Object.getPrototypeOf, Object);
+     vv.exports = hv
+   },
+   4883: (vv, zv, Pv) => {
+     var hv = Pv(4874),
+       Sv = Object.prototype,
+       ev = Sv.hasOwnProperty,
+       gv = Sv.toString,
+       pv = hv ? hv.toStringTag : void 0;
+     vv.exports = function(vv) {
+       var zv = ev.call(vv, pv),
+         Pv = vv[pv];
+       try {
+         vv[pv] = void 0;
+ ... (53 more added lines; see GitHub link above)
```

#### 92. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1396-L1419` → after: `L1445-L1654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1445-L1654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1445-L1654) · [Before (L1396-L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1396-L1419)

```diff
- 
-     function pt(zz, tz, sz) {
-       let Fz = function(zz, tz) {
-           return zz.reduce(((zz, sz, Fz) => (zz[sz] = tz[Fz], zz)), {})
-         }(sz, sz.map(((zz, tz) => tz))),
-         Wz = tz.flatMap((tz => {
-           let sz = zz.outEdges(tz);
-           return sz ? sz.map((tz => ({
-             pos: Fz[tz.w],
-             weight: zz.edge(tz).weight
-           }))).sort(((zz, tz) => zz.pos - tz.pos)) : []
-         })),
-         Xz = 1;
-       for (; Xz < sz.length;) Xz <<= 1;
-       let Oz = 2 * Xz - 1;
-       Xz -= 1;
- ... (8 more removed lines; see GitHub link above)
+   },
+   5558: (vv, zv, Pv) => {
+     var hv = Pv(4933),
+       Sv = Pv(5243),
+       ev = Pv(4902),
+       gv = Pv(5220),
+       pv = Pv(5211),
+       dv = Pv(5133);
+     vv.exports = function(vv, zv, Pv) {
+       for (var Nv = -1, lv = (zv = hv(zv, vv)).length, Tv = !1; ++Nv < lv;) {
+         var Wv = dv(zv[Nv]);
+         if (!(Tv = null != vv && Pv(vv, Wv))) break;
+         vv = vv[Wv]
+       }
+       return Tv || ++Nv != lv ? Tv : !!(lv = null == vv ? 0 : vv.length) && pv(lv) && gv(Wv, lv) && (ev(vv) || Sv(vv))
+     }
+ ... (194 more added lines; see GitHub link above)
```

#### 93. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1422-L1437` → after: `L1657-L1669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1657-L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1657-L1669) · [Before (L1422-L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1422-L1437)

```diff
- 
-     function ft(zz, tz) {
-       let sz = {};
-       return zz.forEach(((zz, tz) => {
-           let Fz = {
-             indegree: 0,
-             in: [],
-             out: [],
-             vs: [zz.v],
-             i: tz
-           };
-           void 0 !== zz.barycenter && (Fz.barycenter = zz.barycenter, Fz.weight = zz.weight), sz[zz.v] = Fz
-         })), tz.edges().forEach((zz => {
-           let tz = sz[zz.v],
-             Fz = sz[zz.w];
-           void 0 !== tz && void 0 !== Fz && (Fz.indegree++, tz.out.push(Fz))
+   },
+   5535: vv => {
+     vv.exports = function(vv, zv) {
+       return function(Pv) {
+         return null != Pv && (Pv[vv] === zv && (void 0 !== zv || vv in Object(Pv)))
+       }
+     }
+   },
+   4950: (vv, zv, Pv) => {
+     var hv = Pv(4952);
+     vv.exports = function(vv) {
+       var zv = hv(vv, (function(vv) {
+           return 500 === Pv.size && Pv.clear(), vv
```

#### 94. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1439-L1462` → after: `L1671-L1672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1671-L1672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1671-L1672) · [Before (L1439-L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1439-L1462)

```diff
-         function(zz) {
-           let tz = [];
- 
-           function sz(zz) {
-             return tz => {
-               tz.merged || (void 0 === tz.barycenter || void 0 === zz.barycenter || tz.barycenter >= zz.barycenter) && function(zz, tz) {
-                 let sz = 0,
-                   Fz = 0;
-                 zz.weight && (sz += zz.barycenter * zz.weight, Fz += zz.weight), tz.weight && (sz += tz.barycenter * tz.weight, Fz += tz.weight), zz.vs = tz.vs.concat(zz.vs), zz.barycenter = sz / Fz, zz.weight = Fz, zz.i = Math.min(tz.i, zz.i), tz.merged = !0
-               }(zz, tz)
-             }
-           }
- 
-           function Fz(tz) {
-             return sz => {
-               sz.in.push(tz), 0 === --sz.indegree && zz.push(sz)
- ... (8 more removed lines; see GitHub link above)
+         Pv = zv.cache;
+       return zv
```

#### 95. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1464-L1484` → after: `L1674-L1756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1674-L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1674-L1756) · [Before (L1464-L1484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1464-L1484)

```diff
- 
-     function Et(zz, tz, sz, Fz, Wz) {
-       let Xz = {},
-         Oz = null,
-         oz = null,
-         vz = Wz;
-       "boolean" == typeof tz ? (vz = tz, Xz = {}) : tz && (Xz = tz, Oz = null != sz ? sz : null, oz = null != Fz ? Fz : null);
-       let Uz = function(zz, tz) {
-           let sz = {
-             lhs: [],
-             rhs: []
-           };
-           return zz.forEach((zz => {
-             tz(zz) ? sz.lhs.push(zz) : sz.rhs.push(zz)
-           })), sz
-         }(zz, (zz => Object.hasOwn(zz, "barycenter"))),
- ... (5 more removed lines; see GitHub link above)
+   },
+   4978: (vv, zv, Pv) => {
+     var hv = Pv(4982)(Object, "create");
+     vv.exports = hv
+   },
+   5483: (vv, zv, Pv) => {
+     var hv = Pv(5488)(Object.keys, Object);
+     vv.exports = hv
+   },
+   5462: (vv, zv, Pv) => {
+     vv = Pv.nmd(vv);
+     var hv = Pv(4848),
+       Sv = zv && !zv.nodeType && zv,
+       ev = Sv && vv && !vv.nodeType && vv,
+       gv = ev && ev.exports === Sv && hv.process,
+       pv = function() {
+ ... (67 more added lines; see GitHub link above)
```

#### 96. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1486-L1504` → after: `L1758-L1828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1758-L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1758-L1828) · [Before (L1486-L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1486-L1504)

```diff
-       Kz.sort(function(zz, tz, sz) {
-         return (Fz, Wz) => {
-           if (Fz.barycenter < Wz.barycenter) return -1;
-           if (Fz.barycenter > Wz.barycenter) return 1;
-           if (zz && ("string" == typeof Fz.vs[0] || "string" == typeof Wz.vs[0])) {
-             let sz = zz.node(Fz.vs[0]),
-               Xz = zz.node(Wz.vs[0]),
-               Oz = Wt(tz, sz, Xz);
-             if (0 !== Oz) return Oz
-           }
-           return sz ? Wz.i - Fz.i : Fz.i - Wz.i
-         }
-       }(oz, Oz, !!vz));
-       for (let [Hz, Bz] of Object.entries(Xz)) {
-         let zz = Kz.findIndex((zz => zz.vs[0] === Hz));
-         Kz.splice(zz + 1, 0, Bz)
- ... (3 more removed lines; see GitHub link above)
+       return function() {
+         var Sv = zv(),
+           ev = 16 - (Sv - hv);
+         if (hv = Sv, ev > 0) {
+           if (++Pv >= 800) return arguments[0]
+         } else Pv = 0;
+         return vv.apply(void 0, arguments)
+       }
+     }
+   },
+   5280: (vv, zv, Pv) => {
+     var hv = Pv(5040);
+     vv.exports = function() {
+       this.__data__ = new hv, this.size = 0
+     }
+   },
+ ... (55 more added lines; see GitHub link above)
```

#### 97. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1506-L1509` → after: `L1830-L1837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1830-L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1830-L1837) · [Before (L1506-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1506-L1509)

```diff
-       let gz = {
-         vs: Nz.flat(1)
-       };
-       return wz && (gz.barycenter = bz / wz, gz.weight = wz), gz
+     vv.exports = gv
+   },
+   5133: (vv, zv, Pv) => {
+     var hv = Pv(4870);
+     vv.exports = function(vv) {
+       if ("string" == typeof vv || hv(vv)) return vv;
+       var zv = vv + "";
+       return "0" == zv && 1 / vv == -1 / 0 ? "-0" : zv
```

#### 98. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1511-L1514` → after: `L1839-L1857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1839-L1857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1839-L1857) · [Before (L1511-L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1511-L1514)

```diff
- 
-     function zs(zz, tz, sz) {
-       let Fz;
-       for (; tz.length && (Fz = tz[tz.length - 1]).i <= sz;) tz.pop(), zz.push(Fz.vs), sz++;
+   },
+   5013: vv => {
+     var zv = Function.prototype.toString;
+     vv.exports = function(vv) {
+       if (null != vv) {
+         try {
+           return zv.call(vv)
+         } catch (Pv) {}
+         try {
+           return vv + ""
+         } catch (Pv) {}
+       }
+       return ""
+     }
+   },
+   4866: vv => {
+ ... (3 more added lines; see GitHub link above)
```

#### 99. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1518-L1562` → after: `L1898-L1929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1898-L1929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L1898-L1929) · [Before (L1518-L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1518-L1562)

```diff
-     function ts(zz, tz, sz, Fz, Wz) {
-       var Xz, Oz, oz, vz, Uz, Kz, uz, Nz, bz, wz, Dz;
-       let gz = null,
-         Hz = Wz;
-       "boolean" == typeof Fz ? (Hz = Fz, gz = null) : void 0 !== Fz && (gz = Fz);
-       let Bz = zz.children(tz),
-         Pz = zz.node(tz),
-         rz = Pz ? Pz.borderLeft : void 0,
-         Yz = Pz ? Pz.borderRight : void 0,
-         xz = {};
-       rz && (Bz = Bz.filter((zz => zz !== rz && zz !== Yz)));
-       let mz = function(zz) {
-         return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((tz => {
-           let sz = zz.inEdges(tz);
-           if (!sz || !sz.length) return {
-             v: tz
- ... (29 more removed lines; see GitHub link above)
+       function cv(zv) {
+         var Pv = dv,
+           hv = Nv;
+         return dv = Nv = void 0, av = zv, Tv = vv.apply(hv, Pv)
+       }
+ 
+       function Gv(vv) {
+         var Pv = vv - wv;
+         return void 0 === wv || Pv >= zv || Pv < 0 || Cv && vv - av >= lv
+       }
+ 
+       function mv() {
+         var vv = Sv();
+         if (Gv(vv)) return jv(vv);
+         Wv = setTimeout(mv, function(vv) {
+           var Pv = zv - (vv - wv);
+ ... (16 more added lines; see GitHub link above)
```

#### 100. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1565-L1596` → after: `L2238-L2292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2238-L2292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2238-L2292) · [Before (L1565-L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1565-L1596)

```diff
-       let Jz = ft(mz, sz);
-       ! function(zz, tz) {
-         zz.forEach((zz => {
-           zz.vs = zz.vs.flatMap((zz => tz[zz] ? tz[zz].vs : zz))
-         }))
-       }(Jz, xz);
-       let Iz = {},
-         Cz = !1;
-       for (let Zz = 0; Zz < Jz.length; Zz++)
-         for (let tz = Zz + 1; tz < Jz.length; tz++)
-           if (Jz[Zz] && Jz[tz] && null != (Xz = Jz[Zz]) && Xz.barycenter && null != (Oz = Jz[tz]) && Oz.barycenter && (null == (oz = Jz[Zz]) ? void 0 : oz.barycenter) === Jz[tz].barycenter) {
-             let sz = null != (Uz = null == (vz = Jz[Zz]) ? void 0 : vz.vs[0]) ? Uz : "",
-               Fz = null != (uz = null == (Kz = Jz[tz]) ? void 0 : Kz.vs[0]) ? uz : "",
-               Wz = zz.node(sz),
-               Xz = zz.node(Fz);
-             if ("edge" === Wz.dummy && "edge" === Xz.dummy && (null == (Nz = Wz.edgeObj) ? void 0 : Nz.v) === (null == (bz = Xz.edgeObj) ? void 0 : bz.v) && (null == (wz = Wz.edgeObj) ? void 0 : wz.w) === (null == (Dz = Xz.edgeObj) ? void 0 : Dz.w)) {
- ... (16 more removed lines; see GitHub link above)
+     vv.exports = pv
+   },
+   5403: vv => {
+     vv.exports = function() {
+       return []
+     }
+   },
+   5432: vv => {
+     vv.exports = function() {
+       return !1
+     }
+   },
+   4810: (vv, zv, Pv) => {
+     var hv = Pv(4817),
+       Sv = Pv(4826);
+     vv.exports = function(vv, zv, Pv) {
+ ... (39 more added lines; see GitHub link above)
```

#### 101. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1598-L1608` → after: `L2294-L2303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2294-L2303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2294-L2303) · [Before (L1598-L1608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1598-L1608)

```diff
-       return Object.defineProperty(ez, "result", {
-         value: ez,
-         enumerable: !1,
-         configurable: !0,
-         writable: !0
-       }), Object.defineProperty(ez, "usedBias", {
-         value: Cz,
-         enumerable: !1,
-         configurable: !0,
-         writable: !0
-       }), ez
+       if ("string" != typeof vv) return 0 === vv ? vv : +vv;
+       vv = hv(vv);
+       var Pv = pv.test(vv);
+       return Pv || dv.test(vv) ? Nv(vv.slice(2), Pv ? 2 : 8) : gv.test(vv) ? NaN : +vv
+     }
+   },
+   5113: (vv, zv, Pv) => {
+     var hv = Pv(5121);
+     vv.exports = function(vv) {
+       return null == vv ? "" : hv(vv)
```

#### 102. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1611-L1641` → after: `L2331-L2334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2331-L2334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2331-L2334) · [Before (L1611-L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1611-L1641)

```diff
-     function ss(zz, tz, sz, Fz) {
-       Fz || (Fz = zz.nodes());
-       let Wz = function(zz) {
-           let tz;
-           for (; zz.hasNode(tz = Ez("_root")););
-           return tz
-         }(zz),
-         Xz = new kz({
-           compound: !0
-         }).setGraph({
-           root: Wz
-         }).setDefaultNodeLabel((tz => zz.node(tz)));
-       return Fz.forEach((Fz => {
-         let Oz = zz.node(Fz),
-           oz = zz.parent(Fz);
-         if (Oz.rank === tz || Oz.minRank <= tz && tz <= Oz.maxRank) {
- ... (15 more removed lines; see GitHub link above)
+     function Nv(vv, zv) {
+       return function(Pv, hv, Sv) {
+         return vv(Pv, hv, Sv) && zv(Pv, hv, Sv)
+       }
```

#### 103. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1645-L1658` → after: `L2338-L2346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2338-L2346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2338-L2346) · [Before (L1645-L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1645-L1658)

```diff
-       let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
-         sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-       if ("function" == typeof tz.customOrder) return void tz.customOrder(zz, Fs);
-       let Fz = Vz(zz),
-         Wz = Ws(zz, zt(1, Fz + 1), "inEdges"),
-         Xz = Ws(zz, zt(Fz - 1, -1, -1), "outEdges"),
-         Oz = Vt(zz, sz);
-       if (Os(zz, Oz), tz.disableOptimalOrderHeuristic) return;
-       let oz, vz = Number.POSITIVE_INFINITY,
-         Uz = tz.constraints || [];
-       for (let Kz = 0, uz = 0; uz < 4; ++Kz, ++uz) {
-         Xs(Kz % 2 ? Wz : Xz, Kz % 4 >= 2, Uz, sz), Oz = nz(zz);
-         let tz = Rt(zz, Oz);
-         tz < vz ? (uz = 0, oz = Object.assign({}, Oz), vz = tz) : tz === vz && (oz = structuredClone(Oz))
+       return function(zv, Pv, hv) {
+         if (!zv || !Pv || "object" !== typeof zv || "object" !== typeof Pv) return vv(zv, Pv, hv);
+         const {
+           cache: Sv
+         } = hv, ev = Sv.get(zv), gv = Sv.get(Pv);
+         if (ev && gv) return ev === Pv && gv === zv;
+         Sv.set(zv, Pv), Sv.set(Pv, zv);
+         const pv = vv(zv, Pv, hv);
+         return Sv.delete(zv), Sv.delete(Pv), pv
```

#### 104. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1660` → after: `L2348-L2364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2348-L2364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2348-L2364) · [Before (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1660)

```diff
-       Os(zz, oz)
+     }
+ 
+     function Tv(vv) {
+       return gv(vv).concat(pv(vv))
+     }
+     const Wv = Object.hasOwn || ((vv, zv) => dv.call(vv, zv));
+ 
+     function wv(vv, zv) {
+       return vv === zv || !vv && !zv && vv !== vv && zv !== zv
+     }
+     const {
+       getOwnPropertyDescriptor: av,
+       keys: sv
+     } = Object;
+ 
+     function Cv(vv, zv) {
+ ... (1 more added lines; see GitHub link above)
```

#### 105. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1664-L1675` → after: `L2368-L2372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2368-L2372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2368-L2372) · [Before (L1664-L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1664-L1675)

```diff
-       let Fz = new Map,
-         Wz = (zz, tz) => {
-           Fz.has(zz) || Fz.set(zz, []), Fz.get(zz).push(tz)
-         };
-       for (let Xz of zz.nodes()) {
-         let tz = zz.node(Xz);
-         if ("number" == typeof tz.rank && Wz(tz.rank, Xz), "number" == typeof tz.minRank && "number" == typeof tz.maxRank)
-           for (let zz = tz.minRank; zz <= tz.maxRank; zz++) zz !== tz.rank && Wz(zz, Xz)
-       }
-       return tz.map((function(tz) {
-         return ss(zz, tz, sz, Fz.get(tz) || [])
-       }))
+       let hv = vv.length;
+       if (zv.length !== hv) return !1;
+       for (; hv-- > 0;)
+         if (!Pv.equals(vv[hv], zv[hv], hv, hv, vv, zv, Pv)) return !1;
+       return !0
```

#### 106. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1678-L1699` → after: `L2375-L2380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2375-L2380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2375-L2380) · [Before (L1678-L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1678-L1699)

```diff
-     function Xs(zz, tz, sz, Fz) {
-       let Wz = !0,
-         Xz = new kz;
-       zz.forEach((function(zz) {
-         sz.forEach((zz => Xz.setEdge(zz.left, zz.right)));
-         let Oz = zz.graph().root,
-           {
-             result: oz,
-             usedBias: vz
-           } = ts(zz, Oz, Xz, Fz, Wz);
-         tz && vz && (Wz = !Wz), oz.vs.forEach(((tz, sz) => zz.node(tz).order = sz)),
-           function(zz, tz, sz) {
-             let Fz, Wz = {};
-             sz.forEach((sz => {
-               let Xz, Oz, oz = zz.parent(sz);
-               for (; oz;) {
- ... (6 more removed lines; see GitHub link above)
+     function cv(vv, zv) {
+       return vv.byteLength === zv.byteLength && Vv(new Uint8Array(vv.buffer, vv.byteOffset, vv.byteLength), new Uint8Array(zv.buffer, zv.byteOffset, zv.byteLength))
+     }
+ 
+     function Gv(vv, zv) {
+       return wv(vv.getTime(), zv.getTime())
```

#### 107. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1703` → after: `L2384-L2388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2384-L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2384-L2388) · [Before (L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1703)

```diff
-       Object.values(tz).forEach((tz => tz.forEach(((tz, sz) => zz.node(tz).order = sz))))
+       return vv.name === zv.name && vv.message === zv.message && vv.cause === zv.cause && vv.stack === zv.stack
+     }
+ 
+     function jv(vv, zv) {
+       return vv === zv
```

#### 108. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1707-L1709` → after: `L2392-L2418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2392-L2418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2392-L2418) · [Before (L1707-L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1707-L1709)

```diff
-       if (tz > sz) {
-         let zz = tz;
-         tz = sz, sz = zz
+       const hv = vv.size;
+       if (hv !== zv.size) return !1;
+       if (!hv) return !0;
+       const Sv = new Array(hv),
+         ev = vv.entries();
+       let gv, pv, dv = 0;
+       for (;
+         (gv = ev.next()) && !gv.done;) {
+         const hv = zv.entries();
+         let ev = !1,
+           Nv = 0;
+         for (;
+           (pv = hv.next()) && !pv.done;) {
+           if (Sv[Nv]) {
+             Nv++;
+             continue
+ ... (11 more added lines; see GitHub link above)
```

#### 109. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1711-L1712` → after: `L2420-L2430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2420-L2430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2420-L2430) · [Before (L1711-L1712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1711-L1712)

```diff
-       let Fz = zz[tz];
-       Fz || (zz[tz] = Fz = {}), Fz[sz] = !0
+       return !0
+     }
+     const Fv = wv;
+ 
+     function Yv(vv, zv, Pv) {
+       const hv = sv(vv);
+       let Sv = hv.length;
+       if (sv(zv).length !== Sv) return !1;
+       for (; Sv-- > 0;)
+         if (!Rv(vv, zv, Pv, hv[Sv])) return !1;
+       return !0
```

#### 110. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1716-L1718` → after: `L2434-L2439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2434-L2439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2434-L2439) · [Before (L1716-L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1716-L1718)

```diff
-       if (tz > sz) {
-         let zz = tz;
-         tz = sz, sz = zz
+       const hv = Tv(vv);
+       let Sv, ev, gv, pv = hv.length;
+       if (Tv(zv).length !== pv) return !1;
+       for (; pv-- > 0;) {
+         if (Sv = hv[pv], !Rv(vv, zv, Pv, Sv)) return !1;
+         if (ev = av(vv, Sv), gv = av(zv, Sv), (ev || gv) && (!ev || !gv || ev.configurable !== gv.configurable || ev.enumerable !== gv.enumerable || ev.writable !== gv.writable)) return !1
```

#### 111. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1720-L1721` → after: `L2441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2441) · [Before (L1720-L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1720-L1721)

```diff
-       let Fz = zz[tz];
-       return void 0 !== Fz && Object.hasOwn(Fz, sz)
+       return !0
```

#### 112. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1724-L1769` → after: `L2444-L2446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2444-L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2444-L2446) · [Before (L1724-L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1724-L1769)

```diff
-     function Us(zz, tz, sz, Fz) {
-       let Wz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-         Xz = {},
-         Oz = function(zz, tz, sz, Fz) {
-           let Wz = new kz,
-             Xz = zz.graph(),
-             Oz = function(zz, tz, sz) {
-               return (Fz, Wz, Xz) => {
-                 let Oz, oz = Fz.node(Wz),
-                   vz = Fz.node(Xz),
-                   Uz = 0;
-                 if (Uz += oz.width / 2, Object.hasOwn(oz, "labelpos")) switch (oz.labelpos.toLowerCase()) {
-                   case "l":
-                     Oz = -oz.width / 2;
-                     break;
-                   case "r":
- ... (30 more removed lines; see GitHub link above)
+     function Ov(vv, zv) {
+       return wv(vv.valueOf(), zv.valueOf())
+     }
```

#### 113. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1771-L1779` → after: `L2448-L2468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2448-L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2448-L2468) · [Before (L1771-L1779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1771-L1779)

```diff
-       function vz(zz, tz) {
-         let sz = Oz.nodes().slice(),
-           Fz = {},
-           Wz = sz.pop();
-         for (; Wz;) {
-           if (Fz[Wz]) zz(Wz);
-           else {
-             Fz[Wz] = !0, sz.push(Wz);
-             for (let zz of tz(Wz)) sz.push(zz)
+     function Dv(vv, zv) {
+       return vv.source === zv.source && vv.flags === zv.flags
+     }
+ 
+     function Kv(vv, zv, Pv) {
+       const hv = vv.size;
+       if (hv !== zv.size) return !1;
+       if (!hv) return !0;
+       const Sv = new Array(hv),
+         ev = vv.values();
+       let gv, pv;
+       for (;
+         (gv = ev.next()) && !gv.done;) {
+         const hv = zv.values();
+         let ev = !1,
+           dv = 0;
+ ... (5 more added lines; see GitHub link above)
```

#### 114. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1781` → after: `L2470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2470) · [Before (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1781)

```diff
-           Wz = sz.pop()
+           dv++
```

#### 115. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1784-L1810` → after: `L2474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2474) · [Before (L1784-L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1784-L1810)

```diff
-       return vz((function(zz) {
-         let tz = Oz.inEdges(zz);
-         Xz[zz] = tz ? tz.reduce(((zz, tz) => {
-           var sz;
-           let Fz = null != (sz = Xz[tz.v]) ? sz : 0,
-             Wz = Oz.edge(tz);
-           return Math.max(zz, Fz + (void 0 !== Wz ? Wz : 0))
-         }), 0) : 0
-       }), (function(zz) {
-         return Oz.predecessors(zz) || []
-       })), vz((function(tz) {
-         let sz = Oz.outEdges(tz),
-           Fz = Number.POSITIVE_INFINITY;
-         sz && (Fz = sz.reduce(((zz, tz) => {
-           let sz = Xz[tz.w],
-             Fz = Oz.edge(tz);
- ... (11 more removed lines; see GitHub link above)
+       return !0
```

#### 116. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1814-L1977` → after: `L2478-L2482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2478-L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2478-L2482) · [Before (L1814-L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1814-L1977)

```diff
-       let sz, Fz = nz(zz),
-         Wz = Object.assign(function(zz, tz) {
-           let sz = {};
-           return tz.length && tz.reduce((function(tz, Fz) {
-             let Wz = 0,
-               Xz = 0,
-               Oz = tz.length,
-               oz = Fz[Fz.length - 1];
-             return Fz.forEach(((tz, vz) => {
-               let Uz = function(zz, tz) {
-                   if (zz.node(tz).dummy) {
-                     let sz = zz.predecessors(tz);
-                     if (sz) return sz.find((tz => zz.node(tz).dummy))
-                   }
-                 }(zz, tz),
-                 Kz = Uz ? zz.node(Uz).order : Oz;
- ... (148 more removed lines; see GitHub link above)
+       let Pv = vv.byteLength;
+       if (zv.byteLength !== Pv || vv.byteOffset !== zv.byteOffset) return !1;
+       for (; Pv-- > 0;)
+         if (vv[Pv] !== zv[Pv]) return !1;
+       return !0
```

#### 117. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1981-L2001` → after: `L2486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2486) · [Before (L1981-L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L1981-L2001)

```diff
-       (function(zz) {
-         let tz = nz(zz),
-           sz = zz.graph(),
-           Fz = sz.ranksep,
-           Wz = sz.rankalign,
-           Xz = 0;
-         tz.forEach((tz => {
-           let sz = tz.reduce(((tz, sz) => {
-             var Fz;
-             let Wz = null != (Fz = zz.node(sz).height) ? Fz : 0;
-             return tz > Wz ? tz : Wz
-           }), 0);
-           tz.forEach((tz => {
-             let Fz = zz.node(tz);
-             Fz.y = "top" === Wz ? Xz + Fz.height / 2 : "bottom" === Wz ? Xz + sz - Fz.height / 2 : Xz + sz / 2
-           })), Xz += sz + Fz
- ... (5 more removed lines; see GitHub link above)
+       return vv.hostname === zv.hostname && vv.pathname === zv.pathname && vv.protocol === zv.protocol && vv.port === zv.port && vv.hash === zv.hash && vv.username === zv.username && vv.password === zv.password
```

#### 118. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L2005-L2006` → after: `L2489-L2490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2489-L2490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2489-L2490) · [Before (L2005-L2006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L2005-L2006)

```diff
-     function ws(zz) {
-       return gs(zz, pz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), zz
+     function Rv(vv, zv, Pv, hv) {
+       return !("_owner" !== hv && "__o" !== hv && "__v" !== hv || !vv.$$typeof && !zv.$$typeof) || Wv(zv, hv) && Pv.equals(vv[hv], zv[hv], hv, hv, vv, zv, Pv)
```

#### 119. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L2009-L2014` → after: `L2508-L2562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2508-L2562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2508-L2562) · [Before (L2009-L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L2009-L2014)

```diff
-     function Ds(zz, tz, sz) {
-       let Fz = tz;
-       for (; void 0 !== Fz;) {
-         let tz = zz.parent(Fz);
-         if (tz === sz) return Fz;
-         Fz = tz
+     function qv(vv) {
+       let {
+         areArrayBuffersEqual: zv,
+         areArraysEqual: Pv,
+         areDataViewsEqual: hv,
+         areDatesEqual: Sv,
+         areErrorsEqual: ev,
+         areFunctionsEqual: gv,
+         areMapsEqual: pv,
+         areNumbersEqual: dv,
+         areObjectsEqual: Nv,
+         arePrimitiveWrappersEqual: lv,
+         areRegExpsEqual: Tv,
+         areSetsEqual: Wv,
+         areTypedArraysEqual: wv,
+         areUrlsEqual: av,
+ ... (39 more added lines; see GitHub link above)
```

#### 120. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L2018-L2141` → after: `L2587-L2594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2587-L2594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2587-L2594) · [Before (L2018-L2141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L2018-L2141)

```diff
-     function gs(zz, tz, sz) {
-       var Fz;
-       let Wz = zz.nodes().filter((tz => zz.children(tz).length)),
-         Xz = {};
-       Wz.forEach((Fz => {
-         let Wz = zz.node(Fz);
-         if (Wz && Wz.rankdir) {
-           let Oz = new kz({
-             multigraph: !0,
-             compound: !0
-           });
-           Oz.setGraph({
-             rankdir: Wz.rankdir
-           });
-           let oz = zz.children(Fz);
-           oz.forEach((tz => {
- ... (108 more removed lines; see GitHub link above)
+     function Qv() {
+       let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+       const {
+         circular: zv = !1,
+         createInternalComparator: Pv,
+         createState: hv,
+         strict: Sv = !1
+       } = vv, ev = function(vv) {
```

#### 121. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L2143-L2152` → after: `L2596-L2626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2596-L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2596-L2626) · [Before (L2143-L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L2143-L2152)

```diff
-           edge: sz,
-           label: Fz
-         } = tz, Wz = uz(sz.v), Xz = uz(sz.w);
-         if (Wz !== Xz && zz.hasNode(Wz) && zz.hasNode(Xz)) {
-           let tz = `${Wz}\0${Xz}`;
-           wz.has(tz) || (wz.add(tz), zz.setEdge(Wz, Xz, {
-             ...Fz,
-             width: 0,
-             height: 0
-           }))
+           circular: zv,
+           createCustomConfig: Pv,
+           strict: hv
+         } = vv, Sv = {
+           areArrayBuffersEqual: Cv,
+           areArraysEqual: hv ? nv : iv,
+           areDataViewsEqual: cv,
+           areDatesEqual: Gv,
+           areErrorsEqual: mv,
+           areFunctionsEqual: jv,
+           areMapsEqual: hv ? Nv(fv, nv) : fv,
+           areNumbersEqual: Fv,
+           areObjectsEqual: hv ? nv : Yv,
+           arePrimitiveWrappersEqual: Ov,
+           areRegExpsEqual: Dv,
+           areSetsEqual: hv ? Nv(Kv, nv) : Kv,
+ ... (15 more added lines; see GitHub link above)
```

#### 122. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L2154-L2162` → after: `L2628-L2631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2628-L2631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2628-L2631) · [Before (L2154-L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L2154-L2162)

```diff
-       }));
-       let Dz = Zs(zz),
-         gz = Hs(Dz, tz, sz, null != (Fz = bs.get(zz)) ? Fz : null);
-       bs.set(zz, gz), Bs(zz, Dz), wz.forEach((tz => {
-         let sz = tz.indexOf("\0"),
-           Fz = tz.slice(0, sz),
-           Wz = tz.slice(sz + 1);
-         zz.hasEdge(Fz, Wz) && zz.removeEdge(Fz, Wz)
-       })), Oz.forEach((tz => {
+         return Sv
+       }(vv), gv = qv(ev);
+       var pv;
+       return function(vv) {
```

#### 123. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L2164-L2168` → after: `L2633-L2637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2633-L2637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2633-L2637) · [Before (L2164-L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L2164-L2168)

```diff
-           clusterId: sz,
-           subgraph: Fz,
-           bounds: Wz,
-           removedNodes: Xz,
-           removedEdges: Oz
+           circular: zv,
+           comparator: Pv,
+           createState: hv,
+           equals: Sv,
+           strict: ev
```

#### 124. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L2170-L2214` → after: `L2639-L2666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2639-L2666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2639-L2666) · [Before (L2170-L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L2170-L2214)

```diff
-         var oz, vz;
-         let Uz = zz.node(sz),
-           Kz = null != (oz = null == Uz ? void 0 : Uz.x) ? oz : 0,
-           uz = null != (vz = null == Uz ? void 0 : Uz.y) ? vz : 0,
-           Nz = (Wz.minX + Wz.maxX) / 2,
-           bz = (Wz.VF + Wz.RF) / 2;
-         Xz.forEach((tz => {
-           let {
-             id: sz,
-             node: Fz,
-             parent: Wz
-           } = tz;
-           zz.setNode(sz, Fz), void 0 !== Wz && zz.setParent(sz, Wz)
-         })), Oz.forEach((tz => {
-           let {
-             edge: sz,
- ... (29 more removed lines; see GitHub link above)
+         if (hv) return function(vv, gv) {
+           const {
+             cache: pv = (zv ? new WeakMap : void 0),
+             meta: dv
+           } = hv();
+           return Pv(vv, gv, {
+             cache: pv,
+             equals: Sv,
+             meta: dv,
+             strict: ev
+           })
+         };
+         if (zv) return function(vv, zv) {
+           return Pv(vv, zv, {
+             cache: new WeakMap,
+             equals: Sv,
+ ... (12 more added lines; see GitHub link above)
```

#### 125. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L2219-L2448` → after: `L2689-L2695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2689-L2695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2689-L2695) · [Before (L2219-L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L2219-L2448)

```diff
-     function Hs(zz, tz, sz) {
-       let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-       var Wz, Xz;
-       let Oz = !1 !== (null == sz ? void 0 : sz.useDynamic),
-         oz = Oz && null != (Wz = null == Fz ? void 0 : Fz.graph) ? Wz : null,
-         vz = Oz && null != (Xz = null == Fz ? void 0 : Fz.rawNodes) ? Xz : null;
-       tz("    makeSpaceForEdgeLabels", (() => function(zz) {
-         let tz = zz.graph();
-         tz.ranksep /= 2, zz.edges().forEach((sz => {
-           var Fz;
-           let Wz = zz.edge(sz);
-           Wz.minlen *= 2, "c" !== (null != (Fz = Wz.labelpos) ? Fz : "r").toLowerCase() && ("TB" === tz.rankdir || "BT" === tz.rankdir ? Wz.width += Wz.labeloffset : Wz.height += Wz.labeloffset)
-         }))
-       }(zz))), tz("    removeSelfEdges", (() => function(zz) {
-         zz.edges().forEach((tz => {
-           if (tz.v === tz.w) {
- ... (214 more removed lines; see GitHub link above)
+     function Av(vv) {
+       return Av = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
+         return typeof vv
+       } : function(vv) {
+         return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
+       }, Av(vv)
+     }
```

#### 126. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L2450-L2488` → after: `L2697-L2734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2697-L2734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2697-L2734) · [Before (L2450-L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L2450-L2488)

```diff
-         function vz(zz) {
-           let Xz = zz.x,
-             Oz = zz.y,
-             oz = zz.width,
-             vz = zz.height;
-           tz = Math.min(tz, Xz - oz / 2), sz = Math.max(sz, Xz + oz / 2), Fz = Math.min(Fz, Oz - vz / 2), Wz = Math.max(Wz, Oz + vz / 2)
-         }
-         zz.nodes().forEach((tz => vz(zz.node(tz)))), zz.edges().forEach((tz => {
-           let sz = zz.edge(tz);
-           Object.hasOwn(sz, "x") && vz(sz)
-         })), tz -= Oz, Fz -= oz, zz.nodes().forEach((sz => {
-           let Wz = zz.node(sz);
-           Wz.x -= tz, Wz.y -= Fz
-         })), zz.edges().forEach((sz => {
-           let Wz = zz.edge(sz);
-           Wz.points.forEach((zz => {
- ... (23 more removed lines; see GitHub link above)
+     function Lv(vv) {
+       return function(vv) {
+         if (Array.isArray(vv)) return vv
+       }(vv) || function(vv) {
+         if ("undefined" !== typeof Symbol && null != vv[Symbol.iterator] || null != vv["@@iterator"]) return Array.from(vv)
+       }(vv) || function(vv, zv) {
+         if (!vv) return;
+         if ("string" === typeof vv) return Hv(vv, zv);
+         var Pv = Object.prototype.toString.call(vv).slice(8, -1);
+         "Object" === Pv && vv.constructor && (Pv = vv.constructor.name);
+         if ("Map" === Pv || "Set" === Pv) return Array.from(vv);
+         if ("Arguments" === Pv || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Pv)) return Hv(vv, zv)
+       }(vv) || function() {
+         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
+     }
+ ... (22 more added lines; see GitHub link above)
```

#### 127. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L2490-L2493` → after: `L2736-L2751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2736-L2751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2736-L2751) · [Before (L2490-L2493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L2490-L2493)

```diff
-         }))
-       }(zz))), {
-         graph: zz,
-         rawNodes: Uz
+         };
+       return {
+         stop: function() {
+           zv = !0
+         },
+         start: function(vv) {
+           zv = !1, Pv(vv)
+         },
+         subscribe: function(zv) {
+           return vv = zv,
+             function() {
+               vv = function() {
+                 return null
+               }
+             }
+         }
```

#### 128. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L2498-L2506` → after: `L2764-L2771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2764-L2771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2764-L2771) · [Before (L2498-L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L2498-L2506)

```diff
-       zz.nodes().forEach((sz => {
-         let Fz = zz.node(sz),
-           Wz = tz.node(sz);
-         Fz && (Fz.x = Wz.x, Fz.y = Wz.y, Fz.order = Wz.order, Fz.rank = Wz.rank, tz.children(sz).length && (Fz.width = Wz.width, Fz.height = Wz.height))
-       })), zz.edges().forEach((sz => {
-         let Fz = zz.edge(sz),
-           Wz = tz.edge(sz);
-         Fz.points = Wz.points, Object.hasOwn(Wz, "x") && (Fz.x = Wz.x, Fz.y = Wz.y)
-       })), zz.graph().width = tz.graph().width, zz.graph().height = tz.graph().height
+       var Pv = Object.keys(vv);
+       if (Object.getOwnPropertySymbols) {
+         var hv = Object.getOwnPropertySymbols(vv);
+         zv && (hv = hv.filter((function(zv) {
+           return Object.getOwnPropertyDescriptor(vv, zv).enumerable
+         }))), Pv.push.apply(Pv, hv)
+       }
+       return Pv
```

#### 129. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L2534-L2549` → after: `L2775-L2804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2775-L2804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2775-L2804) · [Before (L2534-L2549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L2534-L2549)

```diff
-       let tz = new kz({
-           multigraph: !0,
-           compound: !0
-         }),
-         sz = Ts(zz.graph());
-       return tz.setGraph(Object.assign({}, rs, Gs(sz, Ps), tt(sz, Ys))), zz.nodes().forEach((sz => {
-         let Fz = Gs(Ts(zz.node(sz)), xs);
-         Object.keys(ms).forEach((zz => {
-           void 0 === Fz[zz] && (Fz[zz] = ms[zz])
-         })), tz.setNode(sz, Fz);
-         let Wz = zz.parent(sz);
-         void 0 !== Wz && tz.setParent(sz, Wz)
-       })), zz.edges().forEach((sz => {
-         let Fz = Ts(zz.edge(sz));
-         tz.setEdge(sz, Object.assign({}, Cs, Gs(Fz, Is), tt(Fz, es)))
-       })), tz
+       for (var zv = 1; zv < arguments.length; zv++) {
+         var Pv = null != arguments[zv] ? arguments[zv] : {};
+         zv % 2 ? Bv(Object(Pv), !0).forEach((function(zv) {
+           Ev(vv, zv, Pv[zv])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : Bv(Object(Pv)).forEach((function(zv) {
+           Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
+         }))
+       }
+       return vv
+     }
+ 
+     function Ev(vv, zv, Pv) {
+       return (zv = function(vv) {
+         var zv = function(vv, zv) {
+           if ("object" !== yv(vv) || null === vv) return vv;
+           var Pv = vv[Symbol.toPrimitive];
+ ... (14 more added lines; see GitHub link above)
```

#### 130. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L2553` → after: `L2824-L2851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2824-L2851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2824-L2851) · [Before (L2553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L2553)

```diff
-       return st(tt(zz, tz), Number)
+       return function(vv) {
+         if (Array.isArray(vv)) return vv
+       }(vv) || function(vv, zv) {
+         var Pv = null == vv ? null : "undefined" != typeof Symbol && vv[Symbol.iterator] || vv["@@iterator"];
+         if (null != Pv) {
+           var hv, Sv, ev, gv, pv = [],
+             dv = !0,
+             Nv = !1;
+           try {
+             if (ev = (Pv = Pv.call(vv)).next, 0 === zv) {
+               if (Object(Pv) !== Pv) return;
+               dv = !1
+             } else
+               for (; !(dv = (hv = ev.call(Pv)).done) && (pv.push(hv.value), pv.length !== zv); dv = !0);
+           } catch (vv) {
+             Nv = !0, Sv = vv
+ ... (12 more added lines; see GitHub link above)
```

#### 131. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L2557-L2561` → after: `L2855-L2861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2855-L2861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2855-L2861) · [Before (L2557-L2561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L2557-L2561)

```diff
-       let tz = {};
-       return zz && Object.entries(zz).forEach((zz => {
-         let [sz, Fz] = zz;
-         "string" == typeof sz && (sz = sz.toLowerCase()), tz[sz] = Fz
-       })), tz
+       return function(vv) {
+         if (Array.isArray(vv)) return vz(vv)
+       }(vv) || function(vv) {
+         if ("undefined" !== typeof Symbol && null != vv[Symbol.iterator] || null != vv["@@iterator"]) return Array.from(vv)
+       }(vv) || uv(vv) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 132. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L2564-L2581` → after: `L2864-L2869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2864-L2869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2864-L2869) · [Before (L2564-L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L2564-L2581)

```diff
-     function cs(zz) {
-       let tz = nz(zz),
-         sz = new kz({
-           compound: !0,
-           multigraph: !0
-         }).setGraph({});
-       return zz.nodes().forEach((tz => {
-         sz.setNode(tz, {
-           label: tz
-         }), sz.setParent(tz, "layer" + zz.node(tz).rank)
-       })), zz.edges().forEach((zz => sz.setEdge(zz.v, zz.w, {}, zz.name))), tz.forEach(((zz, tz) => {
-         let Fz = "layer" + tz;
-         sz.setNode(Fz, {
-           rank: "same"
-         }), zz.reduce(((zz, tz) => (sz.setEdge(zz, tz, {
-           style: "invis"
- ... (2 more removed lines; see GitHub link above)
+     function uv(vv, zv) {
+       if (vv) {
+         if ("string" === typeof vv) return vz(vv, zv);
+         var Pv = Object.prototype.toString.call(vv).slice(8, -1);
+         return "Object" === Pv && vv.constructor && (Pv = vv.constructor.name), "Map" === Pv || "Set" === Pv ? Array.from(vv) : "Arguments" === Pv || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Pv) ? vz(vv, zv) : void 0
+       }
```

#### 133. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L2583-L2585` → after: `L2871-L2879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2871-L2879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2871-L2879) · [Before (L2583-L2585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L2583-L2585)

```diff
-     var As = {
-         time: Rz,
-         notime: pz
+ 
+     function vz(vv, zv) {
+       (null == zv || zv > vv.length) && (zv = vv.length);
+       for (var Pv = 0, hv = new Array(zv); Pv < zv; Pv++) hv[Pv] = vv[Pv];
+       return hv
+     }
+     var zz = 1e-4,
+       Pz = function(vv, zv) {
+         return [0, 3 * vv, 3 * zv - 6 * vv, 3 * vv - 3 * zv + 1]
```

#### 134. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L2587-L2594` → after: `L2881-L2891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2881-L2891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2881-L2891) · [Before (L2587-L2594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L2587-L2594)

```diff
-       ys = {
-         graphlib: Xz,
-         version: Xt,
-         layout: ws,
-         debug: cs,
-         util: {
-           time: Rz,
-           notime: pz
+       hz = function(vv, zv) {
+         return vv.map((function(vv, Pv) {
+           return vv * Math.pow(zv, Pv)
+         })).reduce((function(vv, zv) {
+           return vv + zv
+         }))
+       },
+       Sz = function(vv, zv) {
+         return function(Pv) {
+           var hv = Pz(vv, zv);
+           return hz(hv, Pv)
```

#### 135. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L2596` → after: `L2893-L20340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2893-L20340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/111.js#L2893-L20340) · [Before (L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/111.js#L2596)

```diff
-       }
+       },
+       ez = function() {
+         for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
+         var hv = zv[0],
+           Sv = zv[1],
+           ev = zv[2],
+           gv = zv[3];
+         if (1 === zv.length) switch (zv[0]) {
+           case "linear":
+             hv = 0, Sv = 0, ev = 1, gv = 1;
+             break;
+           case "ease":
+             hv = .25, Sv = .1, ev = .25, gv = 1;
+             break;
+           case "ease-in":
+             hv = .42, Sv = 0, ev = 1, gv = 1;
+ ... (17432 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/112.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/112.js` (149 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e)

#### 1. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L4` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L5) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L4)

```diff
-   37715: (zz, tz, sz) => {
+   6161: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L6` → after: `L7-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L7-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L7-L30) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L6)

```diff
-       default: () => Xz
+       Graph: () => Lv,
+       debug: () => VP,
+       default: () => RP,
+       graphlib: () => ev,
+       layout: () => wP,
+       util: () => UP,
+       version: () => ez
+     });
+     var hv = Object.defineProperty,
+       Sv = (vv, zv, Pv) => ((vv, zv, Pv) => zv in vv ? hv(vv, zv, {
+         enumerable: !0,
+         configurable: !0,
+         writable: !0,
+         value: Pv
+       }) : vv[zv] = Pv)(vv, "symbol" != typeof zv ? zv + "" : zv, Pv),
+       ev = {};
+ ... (8 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L8-L66` → after: `L32-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L32-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L32-L41) · [Before (L8-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L8-L66)

```diff
-     var Fz = sz(37723),
-       Wz = sz.n(Fz);
- 
-     function Xz(zz) {
-       var tz = [],
-         sz = [],
-         Fz = null;
- 
-       function Xz(sz, Wz) {
-         var Xz = Fz[sz],
-           oz = Fz[Wz];
-         Xz && oz && (function(zz, tz, sz, Fz) {
-           if (zz.POz) return tz.POz ? function(zz, tz) {
-             var sz = (zz[3] - zz[0]) / 2,
-               Fz = (tz[3] - tz[0]) / 2,
-               Wz = zz[0] + sz - (tz[0] + Fz),
- ... (43 more removed lines; see GitHub link above)
+     var gv = Object.defineProperty,
+       pv = (vv, zv) => {
+         for (var Pv in zv) gv(vv, Pv, {
+           get: zv[Pv],
+           enumerable: !0
+         })
+       },
+       dv = class {
+         constructor(vv) {
+           this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () … [truncated]
```

#### 4. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L68-L101` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L43-L44) · [Before (L68-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L68-L101)

```diff
-       };
- 
-       function Oz(zz, tz) {
-         var sz = (zz[3] - zz[0]) / 2,
-           Fz = zz[0] + sz,
-           Wz = zz[2] + sz,
-           Xz = oz(Fz, tz[0], tz[3]) - Fz,
-           Oz = oz(Wz, tz[2], tz[5]) - Wz;
-         return Xz * Xz + Oz * Oz <= sz * sz
-       }
- 
-       function oz(zz, tz, sz) {
-         return zz < tz ? tz : zz > sz ? sz : zz
-       }
-     }
-   },
- ... (18 more removed lines; see GitHub link above)
+         isDirected() {
+           return this._isDirected
```

#### 5. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L103-L120` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L46-L47) · [Before (L103-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L103-L120)

```diff
-       }
-     }
-     sz.r(tz), sz.d(tz, {
-       default: () => Fz
-     })
-   },
-   37796: (zz, tz, sz) => {
-     function Fz(zz) {
-       return {
-         name: "J9",
-         order: 99,
-         state: {
-           PJ: 1.5
-         },
-         Hr: null,
-         NJ: null,
- ... (2 more removed lines; see GitHub link above)
+         isMultigraph() {
+           return this._isMultigraph
```

#### 6. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L122-L130` → after: `L49-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L49-L50) · [Before (L122-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L122-L130)

```diff
-       }
-     }
- 
-     function Wz(zz, tz, sz) {
-       if (sz.Qr.JOz(zz.yI)) {
-         var Fz = sz.Qr.kzz(zz.yI).mesh;
-         if (Fz.metadata) {
-           var Wz = tz < zz.PJ;
-           sz.mD.o5(Fz, !Wz)
+         isCompound() {
+           return this._isCompound
```

#### 7. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L132-L158` → after: `L52-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L52-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L52-L98) · [Before (L132-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L132-L158)

```diff
-       }
-     }
-     sz.r(tz), sz.d(tz, {
-       default: () => Fz
-     })
-   },
-   37786: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       default: () => Xz
-     });
-     var Fz = sz(330),
-       Wz = sz.n(Fz);
- 
-     function Xz(zz) {
-       let tz = 0;
-       const sz = Wz().create(),
- ... (11 more removed lines; see GitHub link above)
+         setGraph(vv) {
+           return this._label = vv, this
+         }
+         graph() {
+           return this._label
+         }
+         setDefaultNodeLabel(vv) {
+           return this._defaultNodeLabelFn = "function" != typeof vv ? () => vv : vv, this
+         }
+         nodeCount() {
+           return this._nodeCount
+         }
+         nodes() {
+           return Object.keys(this._nodes)
+         }
+         sources() {
+ ... (31 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L160-L162` → after: `L100-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L100-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L100-L102) · [Before (L160-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L160-L162)

```diff
-             const tz = Uz.nN || zz.nN;
-             for (let zz = 0; zz < 3; zz++) Fz[zz] = Kz.position[zz] - tz[zz] + sz[zz];
-             zz.Qr.eOz(Oz.yI, Fz)
+             for (let Pv = zv += ""; void 0 !== Pv; Pv = this.parent(Pv))
+               if (Pv === vv) throw new Error("Setting " + zv + " as parent of " + vv + " would create a cycle");
+             this.setNode(zv)
```

#### 9. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L164-L193` → after: `L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L104) · [Before (L164-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L164-L193)

```diff
-         else Oz.itz || (Oz.COz && Oz.COz(Oz.yI), zz.Qr.pI(Oz.yI, zz.Qr.names.VY))
-       }
-       return {
-         name: "VY",
-         order: zz.room ? 50 : 97,
-         state: {
-           yw: 0,
-           offset: null,
-           Ltz: null,
-           dtz: !0,
-           COz: null,
-           itz: !1,
-           IOz: 0
-         },
-         Hr: function(sz, Fz) {
-           Fz.offset = Fz.offset ? Wz().clone(Fz.offset) : Wz().create();
- ... (14 more removed lines; see GitHub link above)
+           return this.setNode(vv), this._removeFromParentsChildList(vv), this._parent[vv] = zv, this._children[zv][vv] = !0, this
```

#### 10. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L195-L278` → after: `L106-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L106-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L106-L109) · [Before (L195-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L195-L278)

```diff
-       }
-     }
-   },
-   37798: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       default: () => uz
-     });
-     var Fz = sz(330),
-       Wz = sz.n(Fz),
-       Xz = sz(36788),
-       Oz = sz(36576),
-       oz = sz(37802),
-       vz = sz(36978);
- 
-     function Uz(zz, tz) {
-       const sz = tz.AFz || tz;
- ... (68 more removed lines; see GitHub link above)
+         parent(vv) {
+           if (this._isCompound) {
+             let zv = this._parent[vv];
+             if ("\0" !== zv) return zv
```

#### 11. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L281-L311` → after: `L112-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L112-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L112-L119) · [Before (L281-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L281-L311)

```diff
-       }
-     }
-   },
-   37703: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       PhysicsState: () => Xz,
-       default: () => Oz,
-       setFloatingYValue: () => Uz,
-       kOz: () => vz,
-       iOz: () => Kz
-     });
-     var Fz = sz(330),
-       Wz = sz.n(Fz);
-     class Xz {
-       constructor() {
-         this.body = null, this.gs = null, this.CN = null
- ... (15 more removed lines; see GitHub link above)
+         children() {
+           let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
+           if (this._isCompound) {
+             let zv = this._children[vv];
+             if (zv) return Object.keys(zv)
+           } else {
+             if ("\0" === vv) return this.nodes();
+             if (this.hasNode(vv)) return []
```

#### 12. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L313-L318` → after: `L121-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L121-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L121-L138) · [Before (L313-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L313-L318)

```diff
-           zz.physics.QN(sz.body)
-         },
-         system: function(tz, sz) {
-           for (var Fz = 0; Fz < sz.length; Fz++) {
-             var Wz = sz[Fz];
-             Kz(Wz, zz.Qr.qL(Wz.yI))
+           return []
+         }
+         predecessors(vv) {
+           let zv = this._preds[vv];
+           if (zv) return Object.keys(zv)
+         }
+         successors(vv) {
+           let zv = this._sucs[vv];
+           if (zv) return Object.keys(zv)
+         }
+         neighbors(vv) {
+           let zv = this.predecessors(vv);
+           if (zv) {
+             let Pv = new Set(zv),
+               hv = this.successors(vv);
+             if (hv)
+ ... (2 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L320-L325` → after: `L140-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L140-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L140-L218) · [Before (L320-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L320-L325)

```diff
-         },
-         Vr: function(tz, sz) {
-           for (var Fz = zz.o3, Wz = 1e3 / zz.container.ZY.iJ, Xz = Fz * (Wz *= zz.B3), Oz = Math.min((Xz - Wz) / 1e3, 0), oz = 0; oz < sz.length; oz++) {
-             var vz = sz[oz],
-               Uz = vz.yI;
-             uz(vz, zz.Qr.qL(Uz), Oz, zz.Qr.LOz(Uz))
+         }
+         isLeaf(vv) {
+           var zv;
+           let Pv;
+           return Pv = this.isDirected() ? this.successors(vv) : this.neighbors(vv), 0 === (null != (zv = null == Pv ? void 0 : Pv.length) ? zv : 0)
+         }
+         filterNodes(vv) {
+           let zv = new this.constructor({
+             directed: this._isDirected,
+             multigraph: this._isMultigraph,
+             compound: this._isCompound
+           });
+           zv.setGraph(this.graph()), Object.entries(this._nodes).forEach((Pv => {
+             let [hv, Sv] = Pv;
+             vv(hv) && zv.setNode(hv, Sv)
+           })), Object.values(this._edgeObjs).forEach((vv => {
+ ... (63 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L328-L330` → after: `L222-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L222-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L222-L242) · [Before (L328-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L328-L330)

```diff
-       }
-     }
-     var oz = Wz().create();
+         inEdges(vv, zv) {
+           return this.isDirected() ? this.filterEdges(this._in[vv], vv, zv) : this.nodeEdges(vv, zv)
+         }
+         outEdges(vv, zv) {
+           return this.isDirected() ? this.filterEdges(this._out[vv], vv, zv) : this.nodeEdges(vv, zv)
+         }
+         nodeEdges(vv, zv) {
+           if (vv in this._nodes) return this.filterEdges({
+             ...this._in[vv],
+             ...this._out[vv]
+           }, vv, zv)
+         }
+         _removeFromParentsChildList(vv) {
+           delete this._children[this._parent[vv]][vv]
+         }
+         filterEdges(vv, zv, Pv) {
+ ... (5 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L333-L341` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L245) · [Before (L333-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L333-L341)

```diff
-       var sz = zz.body.gN,
-         Fz = tz.Wsz;
-       Wz().copy(sz.base, Fz), Wz().set(sz.vec, tz.width, tz.height, tz.width), Wz().add(sz.max, sz.base, sz.vec), Uz(zz, tz, zz.gs)
-     }
- 
-     function Uz(zz, tz, sz) {
-       zz.gs = sz;
-       const Fz = tz.nN ?? zz.CN.nN;
-       zz.body.YG = null !== sz ? sz - Fz[1] : null
+       vv[zv] ? vv[zv]++ : vv[zv] = 1
```

#### 16. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L345-L348` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L249) · [Before (L345-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L345-L348)

```diff
-       var sz = zz.body.gN.base,
-         Fz = tz.width / 2,
-         Wz = tz.Yzz;
-       Wz[0] = sz[0] + Fz, Wz[1] = sz[1], Wz[2] = sz[2] + Fz
+       void 0 !== vv[zv] && !--vv[zv] && delete vv[zv]
```

#### 17. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L352-L365` → after: `L253-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L253-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L253-L257) · [Before (L352-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L352-L365)

```diff
-       var Xz = zz.body.hb;
-       Wz().wt(oz, tz.Yzz, Xz, sz), Fz && Wz().lerp(oz, tz.oq, oz, .3), Wz().copy(tz.oq, oz)
-     }
-   },
-   37697: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       PositionState: () => Wz,
-       default: () => Xz,
-       lOz: () => Oz
-     });
-     const Fz = sz(330);
-     class Wz {
-       constructor() {
-         this.position = null, this.width = .8, this.height = .8, this.Yzz = null, this.oq = null, this.Wsz = null, this.nN = null
+       let Sv = "" + zv,
+         ev = "" + Pv;
+       if (!vv && Sv > ev) {
+         let vv = Sv;
+         Sv = ev, ev = vv
```

#### 18. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L369-L388` → after: `L262-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L262-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L262-L263) · [Before (L369-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L369-L388)

```diff
-     function Xz(zz) {
-       return {
-         name: "position",
-         order: 41,
-         state: new Wz,
-         Hr: function(tz, sz) {
-           var Wz = [0, 0, 0];
-           sz.position && Fz.copy(Wz, sz.position), sz.position = Wz, sz.Yzz = Fz.create(), sz.oq = Fz.create(), sz.Wsz = new Float32Array(6), zz.dzz(sz.position, null, sz.Yzz), Fz.copy(sz.oq, sz.Yzz), Oz(sz)
-         },
-         NJ: null,
-         system: function(tz, sz) {
-           for (var Fz = 0; Fz < sz.length; Fz++) {
-             var Wz = sz[Fz],
-               Xz = Wz.nN ?? zz.nN,
-               oz = Wz.position,
-               vz = Wz.Yzz;
- ... (4 more removed lines; see GitHub link above)
+     function Wv(vv, zv) {
+       return Tv(vv, zv.v, zv.w, zv.name)
```

#### 19. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L392-L405` → after: `L267-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L267-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L267-L274) · [Before (L392-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L392-L405)

```diff
-       var tz = zz.width / 2,
-         sz = zz.Yzz,
-         Fz = zz.Wsz;
-       Fz[0] = sz[0] - tz, Fz[1] = sz[1], Fz[2] = sz[2] - tz, Fz[3] = sz[0] + tz, Fz[4] = sz[1] + zz.height, Fz[5] = sz[2] + tz
-     }
-   },
-   37707: (zz, tz, sz) => {
-     function Fz(zz) {
-       var tz = "nOz";
-       return {
-         name: tz,
-         order: 99,
-         state: {
-           time: 100.1
+       let zv = {
+           options: {
+             directed: vv.isDirected(),
+             multigraph: vv.isMultigraph(),
+             compound: vv.isCompound()
+           },
+           nodes: av(vv),
+           edges: sv(vv)
```

#### 20. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L407-L448` → after: `L276-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L276-L277) · [Before (L407-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L407-L448)

```diff
-         Hr: null,
-         NJ: null,
-         system: function(sz, Fz) {
-           for (var Wz = 0; Wz < Fz.length; Wz++) {
-             var Xz = Fz[Wz];
-             Xz.time -= sz, Xz.time < 0 && zz.Qr.pI(Xz.yI, tz)
-           }
-         }
-       }
-     }
-     sz.r(tz), sz.d(tz, {
-       default: () => Fz
-     })
-   },
-   37125: (zz, tz, sz) => {
-     sz.d(tz, {
- ... (26 more removed lines; see GitHub link above)
+         Pv = vv.graph();
+       return void 0 !== Pv && (zv.value = structuredClone(Pv)), zv
```

#### 21. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L451-L456` → after: `L280-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L280-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L280-L288) · [Before (L451-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L451-L456)

```diff
-     function Uz(zz, tz, sz, Fz, Xz, Oz, Uz, Kz) {
-       let uz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : oz,
-         bz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
-       this.CN = zz, this.zsz = !1, this.PD = 0, this.QD = [0, 0, 0], this.OD = tz, this.RN = Uz, this.ZJ = Kz, this.i = sz, this.j = Fz, this.k = Xz, this.size = Oz, this.x = sz * Oz, this.y = Fz * Oz, this.z = Xz * Oz, this.pos = [this.x, this.y, this.z], this.kD = !1, this.dFz  … [truncated]
-       var wz = Array.from(Array(27), (() => null));
-       this.aw = Wz()(wz, [3, 3, 3]).lo(1, 1, 1), this.aw.set(0, 0, 0, this), this.SOz = 0, this.Bg = 0, this.vg = !1, this.gD = 0, this.rD = !1, this.ED = !1, this.zg = null, this.VOz = new vz, this.Mw = null, this.kw = !1, this.Og = !1, this.og = !1, Nz(this, bz)
+     function av(vv) {
+       return vv.nodes().map((zv => {
+         let Pv = vv.node(zv),
+           hv = vv.parent(zv),
+           Sv = {
+             v: zv
+           };
+         return void 0 !== Pv && (Sv.value = Pv), void 0 !== hv && (Sv.parent = hv), Sv
+       }))
```

#### 22. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L460-L461` → after: `L292-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L292-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L292-L299) · [Before (L460-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L460-L461)

```diff
-       var tz = new Uint16Array(zz * zz * zz);
-       return Wz()(tz, [zz, zz, zz])
+       return vv.edges().map((zv => {
+         let Pv = vv.edge(zv),
+           hv = {
+             v: zv.v,
+             w: zv.w
+           };
+         return void 0 !== zv.name && (hv.name = zv.name), void 0 !== Pv && (hv.value = Pv), hv
+       }))
```

#### 23. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L464-L466` → after: `L302-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L302-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L302-L312) · [Before (L464-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L464-L466)

```diff
-     function uz(zz, tz, sz, Fz, Wz, Xz) {
-       var Oz = tz[sz];
-       Oz && Oz(zz.x + Fz, zz.y + Wz, zz.z + Xz)
+     function Cv(vv) {
+       let zv = new dv(vv.options);
+       return void 0 !== vv.value && zv.setGraph(vv.value), vv.nodes.forEach((vv => {
+         zv.setNode(vv.v, vv.value), vv.parent && zv.setParent(vv.v, vv.parent)
+       })), vv.edges.forEach((vv => {
+         zv.setEdge({
+           v: vv.v,
+           w: vv.w,
+           name: vv.name
+         }, vv.value)
+       })), zv
```

#### 24. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L469-L490` → after: `L337-L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L337-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L337-L378) · [Before (L469-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L469-L490)

```diff
-     function Nz(zz, tz) {
-       if (tz) ! function(zz, tz) {
-         for (var sz = tz.HA, Fz = 0; Fz < sz.length; Fz++) {
-           var Wz = sz[Fz];
-           bz(zz, zz.RN.data[Wz], Wz >> 10, Wz >> 5 & 31, 31 & Wz)
-         }
-         zz.sw.set(tz.sA), zz.jw = tz.gJ, zz.Qw = tz.Aw, zz.kD = !zz.Qw
-       }(zz, tz);
-       else {
-         for (var sz = zz.RN, Fz = sz.data, Wz = sz.shape[0], Xz = zz.CN.Zb.eD, Oz = zz.CN.Zb.qT, vz = zz.CN.Zb.lT, Uz = zz.CN.Zb.aT, Kz = !0, uz = !0, Nz = 0; Nz < Wz; ++Nz) {
-           var wz = zz.sw[Nz];
-           if (wz === oz || Uz[wz] || Oz[wz]) {
-             for (var Dz = sz.get(0, Nz, 0), gz = 0; gz < Wz; ++gz)
-               for (var Hz = sz.index(gz, Nz, 0), Bz = 0; Bz < Wz; ++Bz, ++Hz) {
-                 var Pz = Fz[Hz];
-                 Dz !== oz && Pz !== Dz && (Dz = oz), 0 !== Pz ? vz[Pz] ? uz = !1 : (Kz = Kz && Xz[Pz], uz = !1, bz(zz, Pz, gz, Nz, Bz), Fz = sz.data) : Kz = !1
- ... (6 more removed lines; see GitHub link above)
+     function Gv(vv, zv, Pv, hv) {
+       return function(vv, zv, Pv, hv) {
+         let Sv, ev = {},
+           gv = 0,
+           pv = vv.nodes(),
+           dv = function(vv) {
+             let zv = ev[vv.v],
+               hv = ev[vv.w];
+             if (!zv || !hv) return;
+             let gv = Pv(vv);
+             zv.distance + gv < hv.distance && (ev[vv.w] = {
+               distance: zv.distance + gv,
+               predecessor: vv.v
+             }, Sv = !0)
+           },
+           Nv = function() {
+ ... (26 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L493-L497` → after: `L381-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L381-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L381-L383) · [Before (L493-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L493-L497)

```diff
-     function bz(zz, tz, sz, Fz, Wz) {
-       zz.CN.Zb.aT[tz] && (zz.CN.tg.A_(zz, tz, sz, Fz, Wz), zz.dFz = !0);
-       var Xz = zz.CN.Zb.qT[tz];
-       Xz && (zz.VOz.add(sz, Fz, Wz), uz(zz, Xz, "onLoad", sz, Fz, Wz))
-     }
+     function mv(vv) {
+       let zv, Pv = {},
+         hv = [];
```

#### 26. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L499-L618` → after: `L385-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L385-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L385-L387) · [Before (L499-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L499-L618)

```diff
-     function wz(zz, tz) {
-       var sz = zz.RN,
-         Fz = zz.CN.Zb.qT;
-       zz.VOz.forEach((Wz => {
-         let [Xz, Oz, oz] = Wz;
-         var vz = sz.get(Xz, Oz, oz);
-         uz(zz, Fz[vz], tz, Xz, Oz, oz)
-       }))
-     }
-     Uz.prototype.YD = function(zz) {
-       let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oz,
-         sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-       wz(this, "uR");
-       var Fz = this.Qw;
-       this.CN.tg.HD(this), this.CN.AY.HD(this), this.RN = zz, this.CN.PN.xD.ROz(this.i, this.j, this.k, zz), this.PD++;
-       for (var Wz = 0; Wz < 3; Wz++) this.QD[Wz]++;
- ... (104 more removed lines; see GitHub link above)
+       function Sv(hv) {
+         var ev, gv;
+         hv in Pv || (Pv[hv] = !0, zv.push(hv), null == (ev = vv.successors(hv)) || ev.forEach(Sv), null == (gv = vv.predecessors(hv)) || gv.forEach(Sv))
```

#### 27. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L621-L665` → after: `L393-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L393-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L393-L395) · [Before (L621-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L621-L665)

```diff
-     class uz {
-       constructor(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
-           let zz = 2654435769;
-           return () => (zz ^= zz << 13, zz ^= zz >>> 17, zz ^= zz << 5, (zz >>> 0) / 4294967296)
-         }();
-         this.ecs = zz, this.random = tz, this.windows = [], this.sampleRate = 0, this.runNames = [], this.runMs = [], this.runStates = [], this.now = () => performance.now();
-         const sz = zz.wN,
-           Fz = zz.render;
-         zz.wN = tz => this.sampleRate > 0 && this.random() < this.sampleRate && zz._systems.length > 0 ? (this.runTimed(zz._systems, "system", tz), zz) : sz(tz), zz.render = tz => this.sampleRate > 0 && this.random() < this.sampleRate && zz._renderSystems.length > 0 ? (this.runTi … [truncated]
-       }
-       openWindow(zz) {
-         const tz = new Kz(zz);
-         return this.windows.push(tz), this.updateSampleRate(), tz
-       }
-       closeWindow(zz) {
- ... (29 more removed lines; see GitHub link above)
+     var jv = class {
+         constructor() {
+           this._arr = [], this._keyIndices = {}
```

#### 28. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L667-L753` → after: `L397-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L397-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L397-L398) · [Before (L667-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L667-L753)

```diff
-       }
-     }
-     let Nz;
- 
-     function bz(zz) {
-       Nz = zz
-     }
-     var wz = {
-       zoz: 10
-     };
-     const Dz = {
-       physics: {
-         Zw: sz(37703),
-         server: !0
-       },
-       position: {
- ... (71 more removed lines; see GitHub link above)
+         size() {
+           return this._arr.length
```

#### 29. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L755-L764` → after: `L400-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L400-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L400-L401) · [Before (L755-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L755-L764)

```diff
-       }
-       Atz(zz, tz, sz, Fz) {
-         var Wz = this.qL(zz);
-         Wz.width = (tz + Fz) / 2, Wz.height = sz, this.Ooz(zz, Wz)
-       }
-       h_(zz) {
-         for (var tz of this.ZI(this.names.position)) {
-           var sz = tz.Yzz,
-             Fz = tz.width / 2;
-           Hz(sz, 0, -Fz, Fz, tz.yI), Hz(sz, 1, 0, tz.height, tz.yI), Hz(sz, 2, -Fz, Fz, tz.yI), Oz().subtract(sz, sz, zz), this.Ooz(tz.yI, tz), this.eT(tz.yI)?.yG()
+         keys() {
+           return this._arr.map((vv => vv.key))
```

#### 30. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L766-L799` → after: `L403-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L403-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L403-L404) · [Before (L766-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L766-L799)

```diff
-       }
-       uq(zz) {
-         return this.qL(zz).Yzz
-       }
-       eOz(zz, tz) {
-         var sz = this.qL(zz);
-         Oz().copy(sz.Yzz, tz), this.Ooz(zz, sz)
-       }
-       Ooz(zz, tz) {
-         Oz().copy(tz.oq, tz.Yzz);
-         var sz = tz.nN ?? this.CN.nN;
-         Oz().add(tz.position, tz.Yzz, sz), (0, oz.lOz)(tz);
-         var Fz = this.N9(zz);
-         Fz && (0, vz.kOz)(Fz, tz)
-       }
-       ooz(zz, tz, sz) {
- ... (18 more removed lines; see GitHub link above)
+         has(vv) {
+           return vv in this._keyIndices
```

#### 31. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L801-L813` → after: `L406-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L406-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L406-L408) · [Before (L801-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L801-L813)

```diff
-         return !1
-       }
-       voz(zz, tz) {
-         var sz, Fz = this.CN.nN,
-           Wz = [zz.base[0] - Fz[0], zz.base[1] - Fz[1], zz.base[2] - Fz[2], zz.max[0] - Fz[0], zz.max[1] - Fz[1], zz.max[2] - Fz[2]];
-         if (tz)
-           for (var Xz of (sz = [], this.ZI(tz))) {
-             var Oz = this.qL(Xz.yI);
-             Oz && sz.push(Oz)
-           } else sz = this.ZI(this.names.position);
-         for (var oz = [], vz = 0; vz < sz.length; vz++) {
-           var Uz = sz[vz];
-           Bz(Wz, Uz.Wsz) && oz.push(Uz.yI)
+         priority(vv) {
+           let zv = this._keyIndices[vv];
+           if (void 0 !== zv) return this._arr[zv].priority
```

#### 32. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L815-L834` → after: `L410-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L410-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L410-L412) · [Before (L815-L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L815-L834)

```diff
-         return oz
-       }
-       add() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
-           sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
-           Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-           Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
-           Xz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-           oz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
-         var vz = this,
-           Uz = (arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : void 0) || this.lL();
-         try {
-           this.MI(Uz, this.names.position, {
-             position: zz || Oz().create(),
-             width: tz,
- ... (4 more removed lines; see GitHub link above)
+         min() {
+           if (0 === this.size()) throw new Error("Queue underflow");
+           return this._arr[0].key
```

#### 33. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L836-L841` → after: `L414-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L414-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L414-L423) · [Before (L836-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L836-L841)

```diff
-         if (Xz) {
-           this.MI(Uz, this.names.physics);
-           var Kz = this.eT(Uz),
-             uz = this.names.nOz;
-           Kz.yN = function() {
-             vz.ooz(Uz, uz)
+         add(vv, zv) {
+           let Pv = this._keyIndices,
+             hv = String(vv);
+           if (!(hv in Pv)) {
+             let vv = this._arr,
+               Sv = vv.length;
+             return Pv[hv] = Sv, vv.push({
+               key: hv,
+               priority: zv
+             }), this._decrease(Sv), !0
```

#### 34. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L844-L36304` → after: `L427-L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L427-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L427-L445) · [Before (L844-L36304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L844-L36304)

```diff
-         return Fz && (Wz || (Wz = Oz().create()), this.MI(Uz, this.names.mesh, {
-           mesh: Fz,
-           offset: Wz
-         })), oz && this.MI(Uz, this.names.ew, {
-           size: tz
-         }), Uz
-       }
-     }
- 
-     function Hz(zz, tz, sz, Fz, Wz) {
-       var Xz = zz[tz] + sz,
-         Oz = zz[tz] + Fz;
-       Math.abs(Xz - Math.round(Xz)) < .002 && (zz[tz] += .002), Math.abs(Oz - Math.round(Oz)) < .001 && (zz[tz] -= .001)
-     }
- 
-     function Bz(zz, tz) {
- ... (35445 more removed lines; see GitHub link above)
+         removeMin() {
+           if (0 === this.size()) throw new Error("Queue underflow");
+           this._swap(0, this._arr.length - 1);
+           let vv = this._arr.pop();
+           return delete this._keyIndices[vv.key], this._heapify(0), vv.key
+         }
+         decrease(vv, zv) {
+           let Pv = this._keyIndices[vv];
+           if (void 0 === Pv) throw new Error(`Key not found: ${vv}`);
+           let hv = this._arr[Pv].priority;
+           if (zv > hv) throw new Error(`New priority is greater than current priority. Key: ${vv} Old: ${hv} New: ${zv}`);
+           this._arr[Pv].priority = zv, this._decrease(Pv)
+         }
+         _heapify(vv) {
+           let zv = this._arr,
+             Pv = 2 * vv,
+ ... (3 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L36306-L36347` → after: `L447-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L447-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L447-L450) · [Before (L36306-L36347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L36306-L36347)

```diff
-       }
-       return oz
-     }
- 
-     function pz(zz, tz) {
-       return {
-         severity: Bz.d.Warning,
-         source: zz,
-         message: tz
-       }
-     }
-   },
-   36759: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => Wz,
-       g: () => Oz,
- ... (26 more removed lines; see GitHub link above)
+         _decrease(vv) {
+           let zv, Pv = this._arr,
+             hv = Pv[vv].priority;
+           for (; 0 !== vv && (zv = vv >> 1, !(Pv[zv].priority < hv));) this._swap(vv, zv), vv = zv
```

#### 36. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L36349-L36356` → after: `L452-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L452-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L452-L457) · [Before (L36349-L36356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L36349-L36356)

```diff
-         return tz
-       }
-       mask(zz, tz) {
-         if (null === zz) return null;
-         const sz = new Uint8Array(this.rig.boneCount);
-         for (const Fz of zz) {
-           const zz = this.rig.indexOf(Fz);
-           zz < 0 ? (this.missing.add(Fz), this.warn(`${tz} masks bone ${Fz}, which ${this.rig.id} does not have`)) : sz[zz] = 1
+         _swap(vv, zv) {
+           let Pv = this._arr,
+             hv = this._keyIndices,
+             Sv = Pv[vv],
+             ev = Pv[zv];
+           Pv[vv] = ev, Pv[zv] = Sv, hv[ev.key] = vv, hv[Sv.key] = zv
```

#### 37. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L36358-L36391` → after: `L459-L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L459-L460) · [Before (L36358-L36391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L36358-L36391)

```diff
-         return sz
-       }
-       warn(zz) {
-         this.diagnostics.push({
-           severity: Fz.d.Warning,
-           source: this.binding.source,
-           message: zz
-         })
-       }
-     }
- 
-     function Xz(zz) {
-       const tz = new Set,
-         sz = (zz, sz) => {
-           const Fz = null === sz ? null : new Set(sz.map((zz => zz.toLowerCase())));
-           for (const Wz of zz.bones) {
- ... (18 more removed lines; see GitHub link above)
+       },
+       fv = () => 1;
```

#### 38. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L36393-L36397` → after: `L462-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L462-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L462-L485) · [Before (L36393-L36397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L36393-L36397)

```diff
-     function* vz(zz) {
-       for (const sz of [...zz.states.values(), zz.fallback])
-         for (const zz of null !== (tz = null === sz || void 0 === sz ? void 0 : sz.children) && void 0 !== tz ? tz : []) {
-           var tz;
-           yield zz.clip
+     function Fv(vv, zv, Pv, hv) {
+       return function(vv, zv, Pv, hv) {
+         let Sv, ev, gv = {},
+           pv = new jv,
+           dv = function(vv) {
+             let zv = vv.v !== Sv ? vv.v : vv.w,
+               hv = gv[zv];
+             if (!hv) return;
+             let dv = Pv(vv),
+               Nv = ev.distance + dv;
+             if (dv < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + vv + " Weight: " + dv);
+             Nv < hv.distance && (hv.distance = Nv, hv.predecessor = Sv, pv.decrease(zv, Nv))
+           };
+         for (vv.nodes().forEach((function(vv) {
+             let Pv = vv === zv ? 0 : Number.POSITIVE_INFINITY;
+             gv[vv] = {
+ ... (8 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L36417-L36443` → after: `L494-L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L494-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L494-L497) · [Before (L36417-L36443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L36417-L36443)

```diff
-     function vz(zz) {
-       return "" === zz || "0" === zz || zz.length > Wz.c ? zz : Xz.test(zz) ? (-parseFloat(zz)).toString() : function(zz, tz) {
-         if (zz.includes("return ")) return function(zz, tz) {
-           let sz = "",
-             Fz = 0,
-             Wz = 0;
-           for (;;) {
-             const Xz = zz.indexOf("return ", Wz);
-             if (-1 === Xz) break;
-             const Oz = Xz + 7,
-               oz = Kz(zz, Oz);
-             if (-1 !== oz) {
-               if (sz += zz.substring(Fz, Oz) + tz(zz.substring(Oz, oz)), Fz = oz, oz === zz.length) break;
-               Wz = oz + 1
-             } else Wz = uz(zz, Oz) + 1
-           }
- ... (11 more removed lines; see GitHub link above)
+     function Yv(vv, zv, Pv) {
+       return vv.nodes().reduce((function(hv, Sv) {
+         return hv[Sv] = Fv(vv, Sv, zv, Pv), hv
+       }), {})
```

#### 40. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L36447-L36461` → after: `L501-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L501-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L501-L520) · [Before (L36447-L36461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L36447-L36461)

```diff
-       let tz, sz = !0,
-         Fz = 0,
-         Wz = "";
-       for (const Xz of zz) {
-         if (0 === Fz) {
-           let zz, Fz = !0;
-           if ("-" === Xz && "*" !== tz && "/" !== tz) {
-             sz || tz || (Wz += "+"), sz = !1;
-             continue
-           }
-           if (" " === Xz || "\n" === Xz) Fz = !1;
-           else {
-             if ("+" === Xz && "*" !== tz && "/" !== tz) {
-               Wz += "-", sz = !1;
-               continue
+       let zv = 0,
+         Pv = [],
+         hv = {},
+         Sv = [];
+ 
+       function ev(gv) {
+         var pv;
+         let dv = hv[gv] = {
+           onStack: !0,
+           lowlink: zv,
+           index: zv++
+         };
+         if (Pv.push(gv), null == (pv = vv.successors(gv)) || pv.forEach((function(vv) {
+             if (vv in hv) {
+               let zv = hv[vv];
+               null != zv && zv.onStack && (dv.lowlink = Math.min(dv.lowlink, zv.index))
+ ... (4 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L36463-L36465` → after: `L522-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L522-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L522-L529) · [Before (L36463-L36465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L36463-L36465)

```diff
-             "?:".includes(Xz) ? (sz = !0, zz = Xz) : sz ? (Wz += "-", sz = !1) : "+-*/&|".includes(Xz) && (zz = Xz)
-           }
-           Fz && (tz = zz)
+           })), dv.lowlink === dv.index) {
+           let vv, zv = [];
+           do {
+             vv = Pv.pop();
+             let Sv = hv[vv];
+             Sv && (Sv.onStack = !1), zv.push(vv)
+           } while (gv !== vv);
+           Sv.push(zv)
```

#### 42. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L36478-L36484` → after: `L532-L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L532-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L532-L534) · [Before (L36478-L36484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L36478-L36484)

```diff
-       return zz.length
-     }
- 
-     function uz(zz, tz) {
-       for (let sz = tz; sz < zz.length; sz++)
-         if (Nz(zz[sz])) return sz;
-       return zz.length
+       return vv.nodes().forEach((function(vv) {
+         vv in hv || ev(vv)
+       })), Sv
```

#### 43. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L36488-L36517` → after: `L538-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L538-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L538-L542) · [Before (L36488-L36517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L36488-L36517)

```diff
-       return "\n" === zz || "\r" === zz || "\u2028" === zz || "\u2029" === zz
-     }
-     class bz extends Error {}
-     const wz = 3600,
-       Dz = /^(\d+(\.\d*)?|\.\d+)$/;
- 
-     function gz(zz, tz) {
-       const sz = Dz.test(zz) ? Number(zz) : NaN;
-       if (!(sz >= 0 && sz <= wz)) throw new bz(`${tz}: keyframe time "${zz}" must be a number of seconds from 0 to ${wz}`);
-       return sz
-     }
- 
-     function Hz(zz, tz) {
-       const sz = zz.lerp_mode;
-       if (void 0 === sz || "linear" === sz) return !1;
-       if ("catmullrom" === sz) return !0;
- ... (14 more removed lines; see GitHub link above)
+       return nv(vv).filter((function(zv) {
+         var Pv;
+         let hv = zv[0];
+         return !!hv && (zv.length > 1 || 1 === zv.length && (null != (Pv = vv.outEdges(hv, hv)) ? Pv : []).length > 0)
+       }))
```

#### 44. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L36521-L36541` → after: `L547-L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L547-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L547-L586) · [Before (L36521-L36541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L36521-L36541)

```diff
-       if ("number" === typeof zz || "string" === typeof zz) return [zz, zz, zz];
-       if (Array.isArray(zz)) return function(zz, tz) {
-         switch (tz) {
-           case Fz.h.Position:
-             return [rz(zz[0]), zz[1], zz[2]];
-           case Fz.h.Rotation:
-             return [rz(zz[0]), rz(zz[1]), zz[2]];
-           case Fz.h.Scale:
-             return zz
-         }
-       }(function(zz, tz) {
-         for (const sz of zz)
-           if ("number" !== typeof sz && "string" !== typeof sz) throw new bz(`${tz}: vector elements must be numbers or Molang strings`);
-         if (1 === zz.length) {
-           const tz = zz[0];
-           return [tz, tz, tz]
- ... (5 more removed lines; see GitHub link above)
+       return function(vv, zv, Pv) {
+         let hv = {},
+           Sv = vv.nodes();
+         return Sv.forEach((function(vv) {
+           let ev = {};
+           hv[vv] = ev, ev[vv] = {
+             distance: 0,
+             predecessor: ""
+           }, Sv.forEach((function(zv) {
+             vv !== zv && (ev[zv] = {
+               distance: Number.POSITIVE_INFINITY,
+               predecessor: ""
+             })
+           })), Pv(vv).forEach((function(Pv) {
+             let hv = Pv.v === vv ? Pv.w : Pv.v,
+               Sv = zv(Pv);
+ ... (24 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L36545` → after: `L595-L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L595-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L595-L603) · [Before (L36545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L36545)

```diff
-       return "number" === typeof zz ? 0 === zz ? 0 : -zz : vz(zz)
+       let zv = {},
+         Pv = {},
+         hv = [];
+       if (vv.sinks().forEach((function Sv(ev) {
+           var gv;
+           if (ev in Pv) throw new Vv;
+           ev in zv || (Pv[ev] = !0, zv[ev] = !0, null == (gv = vv.predecessors(ev)) || gv.forEach(Sv), delete Pv[ev], hv.push(ev))
+         })), Object.keys(zv).length !== vv.nodeCount()) throw new Vv;
+       return hv
```

#### 46. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L36549-L36553` → after: `L607-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L607-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L607-L611) · [Before (L36549-L36553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L36549-L36553)

```diff
-       let tz = !1;
-       for (let Wz = 0; Wz < zz.length; Wz++) {
-         const Xz = zz[Wz],
-           Oz = zz[Wz + 1];
-         void 0 !== Oz && 2 === Oz.dataPoints.length && (sz = Xz.dataPoints[Xz.dataPoints.length - 1], Fz = Oz.dataPoints[0], String(sz[0]) === String(Fz[0]) && String(sz[1]) === String(Fz[1]) && String(sz[2]) === String(Fz[2])) ? (Oz.dataPoints.splice(0, 1), xz(Xz), tz = !0) : vo … [truncated]
+       try {
+         Uv(vv)
+       } catch (zv) {
+         if (zv instanceof Vv) return !1;
+         throw zv
```

#### 47. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L36555` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L613) · [Before (L36555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L36555)

```diff
-       var sz, Fz
+       return !0
```

#### 48. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L36558-L36559` → after: `L616-L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L616-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L616-L626) · [Before (L36558-L36559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L36558-L36559)

```diff
-     function xz(zz) {
-       zz.step = !0, zz.catmullRom = !1
+     function xv(vv, zv, Pv, hv, Sv) {
+       Array.isArray(zv) || (zv = [zv]);
+       let ev = zv => {
+           var Pv;
+           return null != (Pv = vv.isDirected() ? vv.successors(zv) : vv.neighbors(zv)) ? Pv : []
+         },
+         gv = {};
+       return zv.forEach((function(zv) {
+         if (!vv.hasNode(zv)) throw new Error("Graph does not have node: " + zv);
+         Sv = tv(vv, zv, "post" === Pv, gv, ev, hv, Sv)
+       })), Sv
```

#### 49. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L36562-L36563` → after: `L629-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L629-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L629-L632) · [Before (L36562-L36563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L36562-L36563)

```diff
-     function mz(zz) {
-       return "object" === typeof zz && null !== zz && !Array.isArray(zz)
+     function tv(vv, zv, Pv, hv, Sv, ev, gv) {
+       return zv in hv || (hv[zv] = !0, Pv || (gv = ev(gv, zv)), Sv(zv).forEach((function(zv) {
+         gv = tv(vv, zv, Pv, hv, Sv, ev, gv)
+       })), Pv && (gv = ev(gv, zv))), gv
```

#### 50. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L36773-L37060` → after: `L636-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L636-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L636-L638) · [Before (L36773-L37060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L36773-L37060)

```diff
-       if ("+" !== zz && "-" !== zz && "*" !== zz && "/" !== zz) return null;
-       const Fz = tz.evaluate,
-         Wz = sz.evaluate,
-         Xz = sz.constant;
-       if (null !== Xz) {
-         if ("/" === zz) return 0 === Xz ? () => 0 : zz => Fz(zz) / Xz;
-         if (void 0 !== tz.query) {
-           const sz = tz.query;
-           switch (zz) {
-             case "+":
-               return zz => zz.queries[sz] + Xz;
-             case "-":
-               return zz => zz.queries[sz] - Xz
-           }
-           return zz => zz.queries[sz] * Xz
-         }
- ... (272 more removed lines; see GitHub link above)
+       return xv(vv, zv, Pv, (function(vv, zv) {
+         return vv.push(zv), vv
+       }), [])
```

#### 51. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37130-L37301` → after: `L641-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L641-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L641-L642) · [Before (L37130-L37301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37130-L37301)

```diff
-     function kz(zz) {
-       return {
-         constant: zz,
-         readsClock: !1,
-         readsAnimTime: !1,
-         cost: 0,
-         evaluate: () => zz
-       }
-     }
-     class iz {
-       constructor(zz, tz) {
-         this.tokens = zz, this.variableSlots = tz, this.index = 0, this.depth = 0, this.nodeCount = 0, this.readsClock = !1, this.readsAnimTime = !1
-       }
-       get nodes() {
-         return this.nodeCount
-       }
- ... (156 more removed lines; see GitHub link above)
+     function Iv(vv, zv) {
+       return qv(vv, zv, "post")
```

#### 52. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37305-L37323` → after: `L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L646) · [Before (L37305-L37323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37305-L37323)

```diff
-       try {
-         if (zz.length > dz) throw new cz(`expression is longer than ${dz} characters`, dz);
-         if ("" === zz.trim()) return {
-           ok: !0,
-           value: kz(0)
-         };
-         const sz = new iz(Az(zz), tz.variableSlots),
-           Fz = sz.parseProgram();
-         return {
-           ok: !0,
-           value: null === Fz.constant ? new lz(Fz.evaluate, sz.readsClock, sz.readsAnimTime, sz.nodes) : kz(Lz(Fz.constant))
-         }
-       } catch (sz) {
-         if (sz instanceof cz) return {
-           ok: !1,
-           error: `${sz.message} at offset ${sz.offset}`
- ... (3 more removed lines; see GitHub link above)
+       return qv(vv, zv, "pre")
```

#### 53. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37335-L37338` → after: `L649-L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L649-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L649-L653) · [Before (L37335-L37338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37335-L37338)

```diff
-     function Oz(zz) {
-       if ("dX" in zz) return xz.createAnimationScript(zz);
-       return new Uz(zz).createAnimationScript()
-     }
+     function Zv(vv, zv) {
+       var Pv;
+       let hv, Sv = new dv,
+         ev = {},
+         gv = new jv;
```

#### 54. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37340-L37405` → after: `L655-L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L655-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L655-L660) · [Before (L37340-L37405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37340-L37405)

```diff
-     function oz(zz, tz, sz, Wz) {
-       const Xz = zz.dX <= 0 ? 1 : tz + sz * Math.max(0, Wz) / zz.dX;
-       return zz.hX === Fz.g.LoopOnLastFrame ? Xz % 1 : zz.hX === Fz.g.NoLoop && Xz >= 1 ? null : Math.min(1, Xz)
-     }
-     class vz {
-       createAnimationScript(zz) {
-         const {
-           dX: tz,
-           loop: sz,
-           QX: Fz
-         } = zz;
-         return {
-           dX: Math.round(tz),
-           hX: this.createLoopMode(null !== sz && void 0 !== sz && sz),
-           QX: this.createNodeSkeletonAnimationScript(null !== Fz && void 0 !== Fz ? Fz : null)
-         }
- ... (50 more removed lines; see GitHub link above)
+       function pv(vv) {
+         let Pv = vv.v === hv ? vv.w : vv.v,
+           Sv = gv.priority(Pv);
+         if (void 0 !== Sv) {
+           let pv = zv(vv);
+           pv < Sv && (ev[Pv] = hv, gv.decrease(Pv, pv))
```

#### 55. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37409-L37421` → after: `L663-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L663-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L663-L674) · [Before (L37409-L37421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37409-L37421)

```diff
-       createAnimationFrameWithoutPrecomputes(zz, tz) {
-         let sz, Fz, Wz = null;
-         var Xz;
-         if ("object" === typeof tz && "point" in tz) Wz = null !== (Xz = tz.LX) && void 0 !== Xz ? Xz : null, sz = tz.point, Fz = tz.point;
-         else if ("object" === typeof tz && "pre" in tz) {
-           var Oz;
-           Wz = null !== (Oz = tz.LX) && void 0 !== Oz ? Oz : null, sz = tz.pre, Fz = tz.post
-         } else sz = tz, Fz = tz;
-         return {
-           timeFraction: zz,
-           LX: this.createLerpMode(Wz),
-           pre: sz,
-           post: Fz
+       if (0 === vv.nodeCount()) return Sv;
+       vv.nodes().forEach((function(vv) {
+         gv.add(vv, Number.POSITIVE_INFINITY), Sv.setNode(vv)
+       }));
+       let Nv = vv.nodes()[0];
+       void 0 !== Nv && gv.decrease(Nv, 0);
+       let lv = !1;
+       for (; gv.size() > 0;) {
+         if (hv = gv.removeMin(), hv in ev) Sv.setEdge(hv, ev[hv]);
+         else {
+           if (lv) throw new Error("Input graph is not connected: " + vv);
+           lv = !0
```

#### 56. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37424-L37426` → after: `L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L678) · [Before (L37424-L37426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37424-L37426)

```diff
-       createLerpMode(zz) {
-         return null === zz ? Fz.f.Linear : vz.LERP_MODE_SCHEMA_MAPPING[zz]
-       }
+       return Sv
```

#### 57. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37428-L37504` → after: `L680-L685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L680-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L680-L685) · [Before (L37428-L37504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37428-L37504)

```diff
-     vz.LERP_MODE_SCHEMA_MAPPING = {
-       linear: Fz.f.Linear,
-       "catmull-rom-spline": Fz.f.CatmullRomSpline
-     };
-     class Uz {
-       constructor(zz) {
-         this.animationSchema = zz
-       }
-       createAnimationScript() {
-         const {
-           animation_length: zz,
-           loop: tz,
-           bones: sz
-         } = this.animationSchema;
-         return {
-           dX: Math.round(1e3 * zz),
- ... (61 more removed lines; see GitHub link above)
+ 
+     function Av(vv, zv, Pv, hv) {
+       return function(vv, zv, Pv, hv) {
+         if (void 0 === Pv) return Fv(vv, zv, Pv, hv);
+         let Sv = !1,
+           ev = vv.nodes();
```

#### 58. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37506-L37536` → after: `L687-L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L687-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L687-L705) · [Before (L37506-L37536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37506-L37536)

```diff
-           var Oz, oz, vz;
-           const zz = Wz[Uz],
-             tz = null !== (Oz = Wz[Uz - 1]) && void 0 !== Oz ? Oz : zz,
-             Fz = null !== (oz = Wz[Uz + 1]) && void 0 !== oz ? oz : zz,
-             Kz = null !== (vz = Wz[Uz + 2]) && void 0 !== vz ? vz : Fz;
-           Xz.push({
-             ...zz,
-             ...sz(tz.post, tz.timeFraction, zz.post, zz.timeFraction, Fz.pre, Fz.timeFraction, Kz.pre, Kz.timeFraction)
-           })
-         }
-         return Xz
-       }
-       createAnimationFrameWithoutPrecomputes(zz, tz, sz) {
-         let Fz, Wz, Xz = null;
-         if ("object" === typeof tz && "post" in tz) {
-           var Oz;
- ... (15 more removed lines; see GitHub link above)
+           let pv = ev[gv];
+           if (void 0 === pv) continue;
+           let dv = hv(pv);
+           for (let vv = 0; vv < dv.length; vv++) {
+             let zv = dv[vv];
+             if (!zv) continue;
+             let hv = zv.v === pv ? zv.v : zv.w;
+             Pv({
+               v: hv,
+               w: hv === zv.v ? zv.w : zv.v
+             }) < 0 && (Sv = !0)
+           }
+           if (Sv) return Gv(vv, zv, Pv, hv)
+         }
+         return Fv(vv, zv, Pv, hv)
+       }(vv, zv, Pv, null != hv ? hv : zv => {
+ ... (3 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37539-L37540` → after: `L709-L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L709-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L709-L712) · [Before (L37539-L37540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37539-L37540)

```diff
-     function Kz(zz) {
-       return Number.isFinite(zz.timeFraction) && uz(zz.pre) && uz(zz.post)
+     function Hv(vv, zv, Pv, hv) {
+       let Sv = hv;
+       for (; vv.hasNode(Sv);) Sv = uv(hv);
+       return Pv.dummy = zv, vv.setNode(Sv, Pv), Sv
```

#### 60. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37544` → after: `L716-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L716-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L716-L723) · [Before (L37544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37544)

```diff
-       return Number.isFinite(zz[0]) && Number.isFinite(zz[1]) && Number.isFinite(zz[2])
+       let zv = new Lv({
+         multigraph: vv.isMultigraph()
+       }).setGraph(vv.graph());
+       return vv.nodes().forEach((Pv => {
+         vv.children(Pv).length || zv.setNode(Pv, vv.node(Pv))
+       })), vv.edges().forEach((Pv => {
+         zv.setEdge(Pv, vv.edge(Pv))
+       })), zv
```

#### 61. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37547-L37555` → after: `L726-L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L726-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L726-L736) · [Before (L37547-L37555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37547-L37555)

```diff
-     function Nz(zz, tz, sz, Fz, Wz, Xz, Oz, oz) {
-       const vz = Xz - tz,
-         Uz = Xz - Fz,
-         Kz = oz - Fz,
-         uz = [null, null, null];
-       for (let Nz = 0; Nz < uz.length; Nz++) uz[Nz] = bz(zz[Nz], sz[Nz], Wz[Nz], Oz[Nz], vz, Kz);
-       return {
-         lX: Uz,
-         aX: uz
+     function yv(vv, zv) {
+       let Pv, hv, Sv = vv.x,
+         ev = vv.y,
+         gv = zv.x - Sv,
+         pv = zv.y - ev,
+         dv = vv.width / 2,
+         Nv = vv.height / 2;
+       if (!gv && !pv) throw new Error("Not possible to find intersection inside of the rectangle");
+       return Math.abs(pv) * dv > Math.abs(gv) * Nv ? (pv < 0 && (Nv = -Nv), Pv = Nv * gv / pv, hv = Nv) : (gv < 0 && (dv = -dv), Pv = dv, hv = dv * pv / gv), {
+         x: Sv + Pv,
+         y: ev + hv
```

#### 62. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37559-L37564` → after: `L740-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L740-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L740-L746) · [Before (L37559-L37564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37559-L37564)

```diff
-     function bz(zz, tz, sz, Fz, Xz, Oz) {
-       return {
-         SX: Wz.c.computeShortestRotation(zz, sz) / Xz,
-         VX: Wz.c.computeShortestRotation(tz, Fz) / Oz,
-         delta: Wz.c.computeShortestRotation(tz, sz)
-       }
+     function Bv(vv) {
+       let zv = vz(bv(vv) + 1).map((() => []));
+       return vv.nodes().forEach((Pv => {
+         let hv = vv.node(Pv),
+           Sv = hv.rank;
+         void 0 !== Sv && (zv[Sv] || (zv[Sv] = []), zv[Sv][hv.order] = Pv)
+       })), zv
```
