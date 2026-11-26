# Changed — Bundle Modifications Report (Part 032 / 116)

- **Updated at**: `2026-11-27T00:59 JST`
- **Part**: `32 / 116` (**268** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 031](part-031.md) · [Part 033 →](part-033.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/277.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/bloxd.io/chunks/js/277.js` (481 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410)

#### 166. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3465-L3496` → after: `L2902-L2922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2902-L2922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2902-L2922) · [Before (L3465-L3496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3465-L3496)

```diff
-     xV.d(eV, {
-       e: () => JV
-     })
-   },
-   41577: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => YV
-     });
-     var JV = xV(41145);
-     class YV {
-       static GetEffect(VV) {
-         return void 0 === VV.getPipelineContext ? VV.effect : VV
-       }
-       constructor(VV) {
-         let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = VV.createDrawContext(), eV && (this.materialContext = VV.createMaterialContext())
- ... (16 more removed lines; see GitHub link above)
+ 
+     function qt(HH) {
+       let BH = "";
+       return rz(HH) && !Sz(HH) && HH.childNodes && HH.childNodes.length && Rh(HH.childNodes, (function(HH) {
+         var LH;
+         It(HH) && HH.textContent && (BH += null !== (LH = et(HH.textContent)) && void 0 !== LH ? LH : "")
+       })), YL(BH)
+     }
+ 
+     function gt(HH) {
+       var BH;
+       return VL(HH.target) ? HH.srcElement || null : (null === (BH = HH.target) || void 0 === BH ? void 0 : BH.shadowRoot) ? HH.composedPath()[0] || null : HH.target || null
+     }
+     const Nt = ["a", "button", "form", "input", "select", "textarea", "label"];
+ 
+     function Rt(HH, BH) {
+ ... (5 more added lines; see GitHub link above)
```

#### 167. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3515` → after: `L2927-L2930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2927-L2930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2927-L2930) · [Before (L3515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3515)

```diff
-       return (0, YV.y)(eV).cachedPipelines[VV]
+       if (VL(BH)) return !0;
+       for (const LH of HH)
+         if (BH.some((HH => Rt(LH, HH)))) return !0;
+       return !1
```

#### 168. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3519-L3524` → after: `L2934-L2957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2934-L2957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2934-L2957) · [Before (L3519-L3524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3519-L3524)

```diff
-       const eV = VV._name,
-         xV = VV.context;
-       if (eV && xV) {
-         const VV = (0, YV.y)(xV),
-           JV = VV.cachedPipelines[eV];
-         JV?.dispose(), delete VV.cachedPipelines[eV]
+       const BH = HH.parentNode;
+       return !(!BH || !mt(BH)) && BH
+     }
+     const Ft = [".ph-no-autocapture", "[data-ph-no-autocapture]"],
+       Dt = ["next", "previous", "prev", ">", "<", "\u2192", "\u2190", "\u203a", "\u2039", "\xbb", "\xab", "\u25b6", "\u25c0", "\u276f", "\u276e"],
+       wt = [...Dt, "+", "-", "\u2212", "\u2013"],
+       Zt = wt.length + 10,
+       dt = ["button", "a", "input", "select", "textarea", "label"],
+       st = ["button", "link", "tab", "menuitem", "option"],
+       Jt = (HH, BH) => /[a-z0-9]/i.test(BH) ? GL(wt, BH) ? new RegExp(`\\b${BH}\\b`).test(HH) : HH.includes(BH) : HH === BH,
+       it = HH => GL(dt, HH.tagName.toLowerCase()) || GL(st, (HH.getAttribute("role") || "").toLowerCase());
+ 
+     function pt(HH) {
+       let BH = "",
+         LH = "";
+       const AH = HH => {
+ ... (8 more added lines; see GitHub link above)
```

#### 169. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3528-L3555` → after: `L2963-L2998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2963-L2998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2963-L2998) · [Before (L3528-L3555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3528-L3555)

```diff
-     function ZV(VV, eV, xV, YV, UV, yV, QV) {
-       let nV, wV;
-       const ZV = (0, JV.n)() ? yV?.getHostDocument() : null;
-       nV = "string" === typeof eV ? eV : "string" === typeof eV.vertexSource ? "source:" + eV.vertexSource : "string" === typeof eV.vertexElement ? ZV?.getElementById(eV.vertexElement) || eV.vertexElement : eV.vertex || eV, wV = "string" === typeof eV ? eV : "string" === typeof e … [truncated]
-       const rV = [void 0, void 0],
-         kV = () => {
-           if (rV[0] && rV[1]) {
-             const [JV, nV] = rV;
-             (0, pV.f)(VV), (0, pV.l)(JV, VV, ((JV, wV) => {
-               QV && (QV._vertexSourceCodeBeforeMigration = wV), xV && (JV = xV("vertex", JV)), VV.isFragment = !0, (0, pV.l)(nV, VV, ((yV, nV) => {
-                 QV && (QV._fragmentSourceCodeBeforeMigration = nV), xV && (yV = xV("fragment", yV));
-                 const wV = (0, pV.b)(JV, yV, VV);
-                 VV = null;
-                 const ZV = function(VV, eV, xV, JV) {
-                   if (xV) {
-                     return {
- ... (12 more removed lines; see GitHub link above)
+     function Bz(HH, BH) {
+       if (!JB || Lz(HH)) return !1;
+       let LH, AH, rH;
+       var SH, hH;
+       if (fL(BH) ? (LH = !!BH && yt, AH = void 0, rH = !1) : (LH = null !== (SH = null == BH ? void 0 : BH.css_selector_ignorelist) && void 0 !== SH ? SH : yt, AH = null == BH ? void 0 : BH.content_ignorelist, rH = null !== (hH = null == BH ? void 0 : BH.ignore_text_selection) && … [truncated]
+       if (rH && function(HH) {
+           return !(!HH || !mt(HH)) && (!!ot(HH, "textarea") || (ot(HH, "input") ? GL(Hz, (HH.getAttribute("type") || "").toLowerCase()) : function(HH) {
+             var BH;
+             if (HH.isContentEditable) return !0;
+             const LH = null === (BH = HH.getAttribute) || void 0 === BH ? void 0 : BH.call(HH, "contenteditable");
+             return "true" === LH || "" === LH
+           }(HH)))
+         }(HH)) return !1;
+       const {
+         targetElementList: tH
+       } = Az(HH, !1);
+ ... (20 more added lines; see GitHub link above)
```

#### 170. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3557-L3562` → after: `L3000-L3004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3000-L3004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L3000-L3004) · [Before (L3557-L3562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3557-L3562)

```diff
-         };
-       vV(nV, "Vertex", "", (VV => {
-         QV && (QV._rawVertexSourceCode = VV), rV[0] = VV, kV()
-       }), UV), vV(wV, "Fragment", "Pixel", (VV => {
-         QV && (QV._rawFragmentSourceCode = VV), rV[1] = VV, kV()
-       }), UV)
+           const BH = pt(LH);
+           if (BH.safeText || BH.ariaLabel) return BH
+         }
+         return pt(HH)
+       }(HH, tH)) || jt(tH, LH))
```

#### 171. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3565-L3571` → after: `L3035-L3049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3035-L3049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L3035-L3049) · [Before (L3565-L3571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3565-L3571)

```diff
-     function vV(VV, eV, xV, YV, yV, pV) {
-       if ("undefined" !== typeof HTMLElement && VV instanceof HTMLElement) {
-         return void YV((0, JV.b)(VV))
-       }
-       if ("source:" === VV.substring(0, 7)) return void YV(VV.substring(7));
-       if ("base64:" === VV.substring(0, 7)) {
-         return void YV(window.atob(VV.substring(7)))
+     function rz(HH) {
+       const BH = new Set;
+       let LH = 0;
+       for (let SH = HH; SH.parentNode && !ot(SH, "body"); SH = SH.parentNode) {
+         if (LH++ >= 1e3 || BH.has(SH)) return !1;
+         BH.add(SH);
+         const HH = ct(SH);
+         if (GL(HH, "ph-sensitive") || GL(HH, "ph-no-capture")) return !1
+       }
+       if (GL(ct(HH), "ph-include")) return !0;
+       const AH = HH.type || "";
+       if (OL(AH)) switch (AH.toLowerCase()) {
+         case "hidden":
+         case "password":
+           return !1
```

#### 172. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3573-L3578` → after: `L3051-L3052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3051-L3052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L3051-L3052) · [Before (L3573-L3578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3573-L3578)

```diff
-       const nV = UV.d.GetShadersStore(yV);
-       if (nV[VV + eV + "Shader"]) return void YV(nV[VV + eV + "Shader"]);
-       if (xV && nV[VV + xV + "Shader"]) return void YV(nV[VV + xV + "Shader"]);
-       let wV;
-       if (wV = "." === VV[0] || "/" === VV[0] || VV.indexOf("http") > -1 ? VV : UV.d.GetShadersRepository(yV) + VV, !(pV = pV || QV.k)) throw new Error("loadFileInjection is not defined");
-       pV(wV + "." + eV.toLowerCase() + ".fx", YV)
+       const rH = HH.name || HH.id || "";
+       return !OL(rH) || !/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(rH.replace(/[^a-zA-Z0-9]/g, ""))
```

#### 173. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3580-L3591` → after: `L3054-L3070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3054-L3070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L3054-L3070) · [Before (L3580-L3591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3580-L3591)

```diff
-     const rV = (VV, eV, xV, JV) => {
-       try {
-         const UV = VV.context ? (0, YV.y)(VV.context) : null;
-         UV && (UV.disableParallelShaderCompile = VV.disableParallelCompilation);
-         const yV = VV.existingPipelineContext || eV(VV.shaderProcessingContext);
-         return yV._name = VV.name, VV.name && UV && (UV.cachedPipelines[VV.name] = yV), xV(yV, VV.vertex, VV.fragment, !!VV.createAsRaw, "", "", VV.rebuildRebind, VV.defines, VV.transformFeedbackVaryings, "", (() => {
-           JV(yV, (() => {
-             VV.onRenderingStateCompiled?.(yV)
-           }))
-         })), yV
-       } catch (UV) {
-         throw yV.b.Error("Error compiling effect"), UV
+ 
+     function Sz(HH) {
+       return !!(ot(HH, "input") && !["button", "checkbox", "submit", "reset"].includes(HH.type) || ot(HH, "select") || ot(HH, "textarea") || "true" === HH.getAttribute("contenteditable"))
+     }
+     const hz = new RegExp("^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$"),
+       tz = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g,
+       zz = [16, 15, 14, 13],
+       Cz = new RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$"),
+       Ez = new RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))", "g"),
+       Xz = /[0-9A-Za-z_]/;
+ 
+     function Gz(HH) {
+       let BH = 0,
+         LH = !1;
+       for (let AH = HH.length - 1; AH >= 0; AH--) {
+         let rH = HH.charCodeAt(AH) - 48;
+ ... (1 more added lines; see GitHub link above)
```

#### 174. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3594-L3615` → after: `L3074-L3104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3074-L3104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L3074-L3104) · [Before (L3594-L3615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3594-L3615)

```diff
-   },
-   41101: (VV, eV, xV) => {
-     xV.d(eV, {
-       c: () => QV
-     });
-     var JV = xV(38296),
-       YV = xV(39870),
-       UV = xV(41108),
-       yV = xV(41113),
-       pV = xV(41145);
-     class QV {
-       static get ShadersRepository() {
-         return UV.d.ShadersRepository
-       }
-       static set ShadersRepository(VV) {
-         UV.d.ShadersRepository = VV
- ... (6 more removed lines; see GitHub link above)
+ 
+     function Yz(HH) {
+       let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+       if (mL(HH)) return !1;
+       if (OL(HH)) {
+         if (HH = YL(HH), BH ? hz.test((HH || "").replace(/[- ]/g, "")) : function(HH) {
+             let BH;
+             for (tz.lastIndex = 0; BH = tz.exec(HH);) {
+               const HH = BH[2];
+               if (!HH) continue;
+               const LH = HH.replace(/[- ]/g, "");
+               for (let BH = 0; LH.length > BH; BH++)
+                 for (const HH of zz) {
+                   const AH = BH + HH;
+                   if (LH.length >= AH) {
+                     const HH = LH.slice(BH, AH);
+ ... (15 more added lines; see GitHub link above)
```

#### 175. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3617-L3618` → after: `L3106-L3145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3106-L3145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L3106-L3145) · [Before (L3617-L3618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3617-L3618)

```diff
-       get shaderLanguage() {
-         return this._shaderLanguage
+       return !0
+     }
+ 
+     function uz(HH) {
+       let BH = qt(HH);
+       return BH = `${BH} ${Qz(HH)}`.trim(), Yz(BH) ? BH : ""
+     }
+ 
+     function Qz(HH) {
+       let BH = "";
+       return HH && HH.childNodes && HH.childNodes.length && Rh(HH.childNodes, (function(HH) {
+         var LH;
+         if (HH && "span" === (null === (LH = HH.tagName) || void 0 === LH ? void 0 : LH.toLowerCase())) try {
+           const LH = qt(HH);
+           BH = `${BH} ${LH}`.trim(), HH.childNodes && HH.childNodes.length && (BH = `${BH} ${Qz(HH)}`.trim())
+         } catch (HH) {
+ ... (24 more added lines; see GitHub link above)
```

#### 176. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3621-L3647` → after: `L3148-L3165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3148-L3165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L3148-L3165) · [Before (L3621-L3647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3621-L3647)

```diff
-         let YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-           UV = arguments.length > 4 ? arguments[4] : void 0,
-           pV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
-           nV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
-           wV = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
-           ZV = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
-           vV = arguments.length > 9 ? arguments[9] : void 0,
-           rV = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
-           kV = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
-           bV = arguments.length > 12 ? arguments[12] : void 0;
-         this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new JV.c, this.onErrorObservable = new JV.c, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationF … [truncated]
-         const EV = this._key.replace(/\r/g, "").replace(/\n/g, "|");
-         let BV;
-         if (eV.attributes) {
-           const VV = eV;
-           if (this._engine = xV, this._attributesNames = VV.attributes, this._uniformsNames = VV.uniformsNames.concat(VV.samplers), this._samplerList = VV.samplers.slice(), this.defines = VV.defines, this.onError = VV.onError, this.onCompiled = VV.onCompiled, this._fallbacks = VV … [truncated]
- ... (11 more removed lines; see GitHub link above)
+         this.instance = HH, this.isEnabled = BH, this.onCapture = LH, this.startIfEnabledOrStop()
+       }
+       onRemoteConfig(HH) {
+         if (!HH.ok) return;
+         const BH = HH.config;
+         "captureDeadClicks" in BH && (this.instance.persistence && this.instance.persistence.register({
+           [jH]: BH.captureDeadClicks
+         }), this.startIfEnabledOrStop())
+       }
+       startIfEnabledOrStop() {
+         this.isEnabled(this) ? this._loadScript((() => {
+           this._start()
+         })) : this.stop()
+       }
+       _loadScript(HH) {
+         var BH, LH, AH;
+ ... (2 more added lines; see GitHub link above)
```

#### 177. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3650-L3674` → after: `L3168-L3178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3168-L3178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L3168-L3178) · [Before (L3650-L3674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3650-L3674)

```diff
-       async _processShaderCodeAsync() {
-         let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-           JV = arguments.length > 3 ? arguments[3] : void 0;
-         JV && await JV(), this._processingContext = xV || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
-         const YV = {
-           defines: this.defines.split("\n"),
-           indexParameters: this._indexParameters,
-           isFragment: !1,
-           shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
-           processor: VV ?? this._engine._getShaderProcessor(this._shaderLanguage),
-           supportsUniformBuffers: this._engine.supportsUniformBuffers,
-           shadersRepository: UV.d.GetShadersRepository(this._shaderLanguage),
-           includesShadersStore: UV.d.GetIncludesShadersStore(this._shaderLanguage),
-           version: (100 * this._engine.version).toString(),
- ... (9 more removed lines; see GitHub link above)
+       _start() {
+         var HH;
+         if (yB) {
+           if (!this._lazyLoadedDeadClicksAutocapture && (null === (HH = tL.__PosthogExtensions__) || void 0 === HH ? void 0 : HH.initDeadClicksAutocapture)) {
+             const HH = TL(this.instance.config.capture_dead_clicks) ? xr({}, this.instance.config.capture_dead_clicks) : {};
+             HH.__onCapture = this.onCapture, this.onCapture && (HH.capture_dead_swipes = !1), this._lazyLoadedDeadClicksAutocapture = tL.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, HH), this._lazyLoadedDeadClicksAutocapture.start(yB), xz.info("starting...")
+           }
+         } else xz.error("`document` not found. Cannot start.")
+       }
+       stop() {
+         this._lazyLoadedDeadClicksAutocapture && (this._lazyLoadedDeadClicksAutocapture.stop(), this._lazyLoadedDeadClicksAutocapture = void 0, xz.info("stopping..."))
```

#### 178. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3676-L3677` → after: `L3180-L3654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3180-L3654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L3180-L3654) · [Before (L3676-L3677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3676-L3677)

```diff
-       get key() {
-         return this._key
+     };
+     const Uz = gh("[SegmentIntegration]");
+ 
+     function Vz(HH, BH) {
+       let LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+       const AH = HH.config.segment;
+       if (!AH) return BH();
+       const {
+         analytics: rH,
+         filterProperties: SH
+       } = (HH => PL(HH.register))(hH = AH) ? {
+         analytics: hH
+       } : hH;
+       var hH;
+       ! function(HH, BH, LH, AH) {
+         const rH = BH => {
+ ... (459 more added lines; see GitHub link above)
```

#### 179. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3679` → after: `L3656-L3657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3656-L3657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L3656-L3657) · [Before (L3679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3679)

```diff
-       isReady() {
+     }
+     const cz = () => {
```

#### 180. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3681-L3682` → after: `L3659-L3660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3659-L3660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L3659-L3660) · [Before (L3681-L3682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3681-L3682)

```diff
-           return this._isReadyInternal()
-         } catch {
+           return "u" > typeof window && !1 !== window.navigator.onLine
+         } catch (AH) {
```

#### 181. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3686-L3723` → after: `L3770-L3794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3770-L3794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L3770-L3794) · [Before (L3686-L3723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3686-L3723)

```diff
-       _isReadyInternal() {
-         return !!this._engine.iN || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
-       }
-       sk() {
-         return this._engine
-       }
-       getPipelineContext() {
-         return this._pipelineContext
-       }
-       getAttributesNames() {
-         return this._attributesNames
-       }
-       getAttributeLocation(VV) {
-         return this._attributes[VV]
-       }
-       getAttributeLocationByName(VV) {
- ... (22 more removed lines; see GitHub link above)
+       return AH
+     }
+ 
+     function Jz() {
+       return navigator.language || navigator.userLanguage
+     }
+ 
+     function iz() {
+       const HH = Jz();
+       return "string" == typeof HH ? HH.split("-")[0] : void 0
+     }
+     const pz = "$direct";
+ 
+     function yz() {
+       return (null == yB ? void 0 : yB.referrer) || pz
+     }
+ ... (9 more added lines; see GitHub link above)
```

#### 182. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3725-L3726` → after: `L3796-L3813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3796-L3813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L3796-L3813) · [Before (L3725-L3726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3725-L3726)

```diff
-       getCompilationError() {
-         return this._compilationError
+     }
+ 
+     function BC(HH) {
+       let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+       var LH;
+       const {
+         r: AH,
+         u: rH
+       } = HH, SH = BH ? Er(rH) : rH, hH = {
+         $referrer: AH,
+         $referring_domain: null == AH ? void 0 : AH == pz ? pz : null === (LH = Nz(AH)) || void 0 === LH ? void 0 : LH.host
+       };
+       if (SH) {
+         hH.$current_url = SH;
+         const HH = Nz(SH);
+         hH.$host = null == HH ? void 0 : HH.host, hH.$pathname = null == HH ? void 0 : HH.pathname;
+ ... (2 more added lines; see GitHub link above)
```

#### 183. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3728-L3729` → after: `L3815-L3817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3815-L3817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L3815-L3817) · [Before (L3728-L3729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3728-L3729)

```diff
-       allFallbacksProcessed() {
-         return this._allFallbacksProcessed
+       if (AH) {
+         const HH = sz(AH);
+         jh(hH, HH)
```

#### 184. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3731-L3733` → after: `L3819-L3899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3819-L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L3819-L3899) · [Before (L3731-L3733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3731-L3733)

```diff
-       async whenCompiledAsync() {
-         return await new Promise((VV => {
-           this.executeWhenCompiled(VV)
+       return hH
+     }
+ 
+     function LC() {
+       try {
+         return (new Date).getTimezoneOffset()
+       } catch (AH) {
+         return
+       }
+     }
+     const AC = {
+         flags: EH,
+         surveys: tB
+       },
+       rC = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"],
+       SC = HH => `${HH}_cookie_identity_change_pending`,
+ ... (65 more added lines; see GitHub link above)
```

#### 185. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3736-L3759` → after: `L3902-L3903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3902-L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L3902-L3903) · [Before (L3736-L3759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3736-L3759)

```diff
-       executeWhenCompiled(VV) {
-         this.isReady() ? VV(this) : (this.onCompileObservable.add((eV => {
-           VV(eV)
-         })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
-       }
-       _checkIsReady(VV) {
-         (0, pV.f)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (eV => {
-           this._processCompilationErrors(eV, VV)
-         }), 16, 12e4, !0, ` - Effect: ${"string"===typeof this.name?this.name:this.key}`)
-       }
-       get vertexSourceCode() {
-         return this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride ? this._vertexSourceCodeOverride : this._pipelineContext?._getVertexShaderCode() ?? this._vertexSourceCode
-       }
-       get fragmentSourceCode() {
-         return this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride ? this._fragmentSourceCodeOverride : this._pipelineContext?._getFragmentShaderCode() ?? this._fragmentSourceCode
-       }
- ... (8 more removed lines; see GitHub link above)
+       onCrossTabFeatureFlagChange(HH) {
+         return this._crossTabFeatureFlagHandlers.add(HH), () => this._crossTabFeatureFlagHandlers.delete(HH)
```

#### 186. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3761-L3762` → after: `L3905-L3906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3905-L3906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L3905-L3906) · [Before (L3761-L3762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3761-L3762)

```diff
-       get rawFragmentSourceCode() {
-         return this._rawFragmentSourceCode
+       destroy() {
+         this._onStorage && JB && (JB.removeEventListener("storage", this._onStorage), this._onStorage = void 0), this._crossTabFeatureFlagHandlers.clear()
```

#### 187. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3764-L3780` → after: `L3908-L3914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3908-L3914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L3908-L3914) · [Before (L3764-L3780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3764-L3780)

```diff
-       getPipelineGenerationOptions() {
-         return {
-           platformName: this._engine.shaderPlatformName,
-           shaderLanguage: this._shaderLanguage,
-           shaderNameOrContent: this.name,
-           key: this._key,
-           defines: this.defines.split("\n"),
-           addGlobalDefines: !1,
-           extendedProcessingOptions: {
-             indexParameters: this._indexParameters,
-             isNDCHalfZRange: this._engine.isNDCHalfZRange,
-             zYV: this._engine.zYV,
-             supportsUniformBuffers: this._engine.supportsUniformBuffers
-           },
-           extendedCreatePipelineOptions: {
-             transformFeedbackVaryings: this._transformFeedbackVaryings,
- ... (1 more removed lines; see GitHub link above)
+       _syncCrossTabFeatureFlagProperties(HH, BH) {
+         let LH, AH, rH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+         if (this._disabled) return !1;
+         try {
+           if (AH = Ct._get(HH), kL(AH)) {
+             const HH = this._slotWriteState(BH);
+             return HH.storageValue = null, BH !== tC && (HH.persisted = !1), !1
```

#### 188. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3784-L3800` → after: `L3925-L3928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3925-L3928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L3925-L3928) · [Before (L3784-L3800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3784-L3800)

```diff
-       _rebuildProgram(VV, eV, xV, JV) {
-         this._isReady = !1, this._vertexSourceCodeOverride = VV, this._fragmentSourceCodeOverride = eV, this.onError = (VV, eV) => {
-           JV && JV(eV)
-         }, this.onCompiled = () => {
-           const VV = this.sk().scenes;
-           if (VV)
-             for (let eV = 0; eV < VV.length; eV++) VV[eV].markAllMaterialsAsDirty(127);
-           this._pipelineContext._handlesSpectorRebuildCallback?.(xV)
-         }, this._fallbacks = null, this._prepareEffect()
-       }
-       _onRenderingStateCompiled(VV) {
-         if (this._pipelineContext = VV, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesName … [truncated]
-           for (let eV = 0; eV < this._attributesNames.length; eV++) {
-             const VV = this._attributesNames[eV];
-             this._attributeLocationByName[VV] = this._attributes[eV]
-           }
- ... (1 more removed lines; see GitHub link above)
+       _hasCrossTabFeatureFlagIdentityMismatch(HH) {
+         const BH = this.props[VH],
+           LH = HH[VH];
+         return !VL(BH) && !VL(LH) && BH !== LH
```

#### 189. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3802-L3805` → after: `L3930-L3932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3930-L3932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L3930-L3932) · [Before (L3802-L3805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3802-L3805)

```diff
-       _prepareEffect() {
-         let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const eV = this._pipelineContext;
-         this._isReady = !1;
+       _rememberCrossTabStorageFingerprint(HH, BH, LH, AH) {
+         const rH = this._slotWriteState(BH);
+         rH.storageValue = AH, BH !== tC && (rH.persisted = LH);
```

#### 190. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3807-L3827` → after: `L3934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L3934) · [Before (L3807-L3827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3807-L3827)

```diff
-           const xV = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
-             JV = xV ? null : this.defines,
-             YV = xV ? this._vertexSourceCodeOverride : this._vertexSourceCode,
-             UV = xV ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
-             pV = this._engine;
-           this._pipelineContext = (0, yV.f)({
-             existingPipelineContext: VV ? eV : null,
-             vertex: YV,
-             fragment: UV,
-             context: "WEBGL2" === pV.shaderPlatformName || "WEBGL1" === pV.shaderPlatformName ? pV._gl : void 0,
-             rebuildRebind: (VV, eV, xV, JV) => this._rebuildProgram(VV, eV, xV, JV),
-             defines: JV,
-             transformFeedbackVaryings: this._transformFeedbackVaryings,
-             name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
-             createAsRaw: xV,
-             disableParallelCompilation: this._disableParallelShaderCompilation,
- ... (5 more removed lines; see GitHub link above)
+           rH.fingerprint = this._entryFingerprint(HH, BH)
```

#### 191. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3829` → after: `L3936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L3936) · [Before (L3829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3829)

```diff
-           this._processCompilationErrors(xV, eV)
+           rH.fingerprint = void 0
```

#### 192. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3832-L3841` → after: `L3939-L3978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3939-L3978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L3939-L3978) · [Before (L3832-L3841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3832-L3841)

```diff
-       _getShaderCodeAndErrorLine(VV, eV, xV) {
-         const JV = xV ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
-         let YV = null;
-         if (eV && VV) {
-           const UV = eV.match(JV);
-           if (UV && 2 === UV.length) {
-             const eV = parseInt(UV[1]),
-               JV = VV.split("\n", -1);
-             JV.length >= eV && (YV = `Offending line [${eV}] in ${xV?"fragment":"vertex"} code: ${JV[eV-1]}`)
-           }
+       _mergeCrossTabFeatureFlagProperties(HH, BH, LH) {
+         let AH = !1;
+         return zC.forEach((LH => {
+           var rH;
+           const SH = null === (rH = lz(LH)) || void 0 === rH ? void 0 : rH.storageGroup;
+           if (BH === tC && this._splitStorage && SH || BH !== tC && SH !== BH) return;
+           const hH = LH in HH,
+             tH = this._mergePendingCrossTabFeatureFlagChanges(LH, hH ? HH[LH] : void 0),
+             zH = this._pendingCrossTabFeatureFlagChanges.has(LH) ? LH in this.props : hH;
+           zH === LH in this.props && GC(tH, this.props[LH]) || (zH ? this._setProp(LH, tH, !1) : this._deleteProp(LH, !1), AH = !0)
+         })), AH && LH && this._crossTabFeatureFlagHandlers.forEach((HH => HH())), AH
+       }
+       _reconcileCrossTabFeatureFlagPropertiesBeforeWrite() {
+         if (!this._splitStorageEligible) return !1;
+         try {
+           this._crossTabFeatureFlagIdentityMismatch = !1;
+ ... (24 more added lines; see GitHub link above)
```

#### 193. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3864-L3868` → after: `L3981-L4004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3981-L4004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L3981-L4004) · [Before (L3864-L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3864-L3868)

```diff
-       get isSupported() {
-         return "" === this._compilationError
-       }
-       _bindTexture(VV, eV) {
-         this._engine._bindTexture(this._samplers[VV], eV, VV)
+       _setCrossTabFeatureFlagChangesPending(HH, BH) {
+         this._pendingCrossTabFeatureFlagChanges.set(HH, BH);
+         const LH = lz(HH);
+         (null == LH ? void 0 : LH.volatile) || (this._slotWriteState((this._splitStorage ? null == LH ? void 0 : LH.storageGroup : void 0) || tC).fingerprint = void 0, this._markGroupDirty(HH))
+       }
+       _markAllCrossTabFeatureFlagChangesPending() {
+         zC.forEach((HH => this._pendingCrossTabFeatureFlagChanges.set(HH, !0)))
+       }
+       _markLoadedCrossTabFeatureFlagChangesPending() {
+         if (this._splitStorageEligible) try {
+           const HH = Ct._get(this._name),
+             BH = YC(HH);
+           this._slotWriteState(tC).storageValue = HH, zC.forEach((HH => {
+             var LH;
+             const AH = this._splitStorage ? null === (LH = lz(HH)) || void 0 === LH ? void 0 : LH.storageGroup : void 0,
+               rH = AH ? Ct._get(this._groupEntryName(AH)) : null;
+ ... (8 more added lines; see GitHub link above)
```

#### 194. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3870-L3871` → after: `L4006-L4019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4006-L4019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4006-L4019) · [Before (L3870-L3871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3870-L3871)

```diff
-       setTexture(VV, eV) {
-         this._engine.setTexture(this._samplers[VV], this._uniforms[VV], eV, VV)
+       _mergePendingCrossTabFeatureFlagChanges(HH, BH) {
+         const LH = this._pendingCrossTabFeatureFlagChanges.get(HH);
+         if (!LH) return BH;
+         if (!0 === LH) return this.props[HH];
+         if ("$active_feature_flags" === HH) {
+           const AH = new Set(vL(BH) ? BH : []),
+             rH = new Set(vL(this.props[HH]) ? this.props[HH] : []);
+           return LH.forEach((HH => rH.has(HH) ? AH.add(HH) : AH.delete(HH))), Array.from(AH)
+         }
+         const AH = TL(BH) ? xr({}, BH) : {},
+           rH = TL(this.props[HH]) ? this.props[HH] : {};
+         return LH.forEach((HH => {
+           HH in rH ? AH[HH] = rH[HH] : delete AH[HH]
+         })), AH
```

#### 195. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3873-L3879` → after: `L4021-L4053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4021-L4053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4021-L4053) · [Before (L3873-L3879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3873-L3879)

```diff
-       setTextureArray(VV, eV) {
-         const xV = VV + "Ex";
-         if (-1 === this._samplerList.indexOf(xV + "0")) {
-           const JV = this._samplerList.indexOf(VV);
-           for (let VV = 1; VV < eV.length; VV++) {
-             const eV = xV + (VV - 1).toString();
-             this._samplerList.splice(JV + VV, 0, eV)
+       _markPendingCrossTabFeatureFlagChanges(HH, BH, LH) {
+         if (!CC(HH)) return;
+         const AH = this._pendingCrossTabFeatureFlagChanges.get(HH);
+         if (!0 === AH) return;
+         let rH = BH;
+         if (this._splitStorageEligible) try {
+           var SH;
+           const BH = this._splitStorage ? null === (SH = lz(HH)) || void 0 === SH ? void 0 : SH.storageGroup : void 0,
+             LH = BH ? this._groupEntryName(BH) : this._name;
+           rH = YC(Ct._get(LH))[HH]
+         } catch (HH) {}
+         const hH = new Set(AH || []);
+         if ("$active_feature_flags" === HH) {
+           if (!VL(BH) && !vL(BH) || !VL(rH) && !vL(rH) || !vL(LH)) return void this._setCrossTabFeatureFlagChangesPending(HH, !0);
+           const AH = new Set(BH || []),
+             SH = new Set(rH || []),
+ ... (17 more added lines; see GitHub link above)
```

#### 196. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3884` → after: `L4056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4056) · [Before (L3884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3884)

```diff
-         this._engine.setTextureArray(this._samplers[VV], this._uniforms[VV], eV, VV)
+         hH.size ? this._setCrossTabFeatureFlagChangesPending(HH, hH) : this._pendingCrossTabFeatureFlagChanges.delete(HH)
```

#### 197. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3886-L3888` → after: `L4058-L4074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4058-L4074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4058-L4074) · [Before (L3886-L3888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3886-L3888)

```diff
-       bindUniformBuffer(VV, eV) {
-         const xV = this._uniformBuffersNames[eV];
-         void 0 === xV || QV._BaseCache[xV] === VV && this._engine._features.useUBOBindingCache || (QV._BaseCache[xV] = VV, this._engine.bindUniformBufferBase(VV, xV, eV))
+       _saveDebounceMs() {
+         var HH;
+         const BH = null === (HH = this._config) || void 0 === HH ? void 0 : HH.persistence_save_debounce_ms;
+         return oL(BH) && BH > 0 ? BH : 0
+       }
+       _rememberCurrentCookieProperties(HH) {
+         if (this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase())
+           if (HH) try {
+             const BH = Qt(HH, this._config.cookie_persisted_properties || []),
+               LH = Mt(BH, this._config.cookie_persisted_properties || []),
+               AH = JSON.stringify(BH) + "|" + JSON.stringify(LH),
+               rH = tt._get(this._name) || void 0;
+             rH && vt(this._name, rH) === AH && (this._lastSeenCookiePropertiesFingerprint = AH, this._lastSeenMainCookieValue = rH)
+           } catch (HH) {} else try {
+             const HH = tt._get(this._name) || void 0;
+             this._lastSeenCookiePropertiesFingerprint = HH ? vt(this._name, HH) : void 0, this._lastSeenMainCookieValue = HH
+ ... (1 more added lines; see GitHub link above)
```

#### 198. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3890-L3891` → after: `L4076-L4077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4076-L4077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4076-L4077) · [Before (L3890-L3891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3890-L3891)

```diff
-       bindUniformBlock(VV, eV) {
-         this._engine.bindUniformBlock(this._pipelineContext, VV, eV)
+       syncCookieProperties() {
+         return this._syncCookieProperties(this._config)
```

#### 199. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3893-L3894` → after: `L4079-L4127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4079-L4127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4079-L4127) · [Before (L3893-L3894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3893-L3894)

```diff
-       setInt(VV, eV) {
-         return this._pipelineContext.setInt(VV, eV), this
+       _syncCookieProperties(HH) {
+         let BH, LH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         if (this._disabled && !LH || this._cookieSyncSuppressed || !HH.cookieWinsOnConflict || "localstorage+cookie" !== HH.persistence.toLowerCase()) return !1;
+         try {
+           BH = tt._get(this._name) || void 0
+         } catch (HH) {}
+         if (!BH || BH === this._lastSeenMainCookieValue) return !1;
+         const AH = vt(this._name, BH);
+         let rH;
+         try {
+           rH = ut(JSON.parse(BH))
+         } catch (HH) {
+           return !1
+         }
+         if ((tt._get(this._name) || void 0) !== BH) return !1;
+         this._lastSeenCookiePropertiesFingerprint = AH, this._lastSeenMainCookieValue = BH;
+ ... (33 more added lines; see GitHub link above)
```

#### 200. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3896-L3897` → after: `L4129-L4130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4129-L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4129-L4130) · [Before (L3896-L3897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3896-L3897)

```diff
-       setInt2(VV, eV, xV) {
-         return this._pipelineContext.setInt2(VV, eV, xV), this
+       _publishSuppressedCookieSnapshot() {
+         this._cookieSyncSuppressed && (VL(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), delete this._slotState[tC], this._writeNow(!0))
```

#### 201. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3899-L3900` → after: `L4132-L4138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4132-L4138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4132-L4138) · [Before (L3899-L3900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3899-L3900)

```diff
-       setInt3(VV, eV, xV, JV) {
-         return this._pipelineContext.setInt3(VV, eV, xV, JV), this
+       _endCookieSyncSuppression() {
+         let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         if (this._cookieSyncSuppressed) try {
+           HH ? this._publishSuppressedCookieSnapshot() : VL(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0)
+         } finally {
+           this._cookieSyncSuppressed = !1
+         }
```

#### 202. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3902-L3903` → after: `L4140-L4141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4140-L4141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4140-L4141) · [Before (L3902-L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3902-L3903)

```diff
-       setInt4(VV, eV, xV, JV, YV) {
-         return this._pipelineContext.setInt4(VV, eV, xV, JV, YV), this
+       isDisabled() {
+         return !!this._disabled
```

#### 203. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3905-L3906` → after: `L4143-L4235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4143-L4235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4143-L4235) · [Before (L3905-L3906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3905-L3906)

```diff
-       setIntArray(VV, eV) {
-         return this._pipelineContext.setIntArray(VV, eV), this
+       _buildStorage(HH) {
+         -1 === rC.indexOf(HH.persistence.toLowerCase()) && (qh.critical("Unknown persistence type " + HH.persistence + "; falling back to localStorage+cookie"), HH.persistence = "localStorage+cookie");
+         const BH = function() {
+           let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
+             BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+             LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !1;
+           const AH = [...Xt, ...HH];
+           return xr(xr({}, Ct), {}, {
+             _parse(HH) {
+               try {
+                 let SH, hH = {};
+                 try {
+                   SH = tt._get(HH) || void 0, hH = SH ? ut(JSON.parse(SH)) : {}
+                 } catch (HH) {}
+                 const tH = JSON.parse(Ct._get(HH) || "{}");
+                 let zH;
+ ... (77 more added lines; see GitHub link above)
```

#### 204. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3908-L3909` → after: `L4237-L4277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4237-L4277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4237-L4277) · [Before (L3908-L3909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3908-L3909)

```diff
-       setIntArray2(VV, eV) {
-         return this._pipelineContext.setIntArray2(VV, eV), this
+       load() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         if (this._disabled && !HH) return;
+         const BH = this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase(),
+           LH = BH ? Ct._parse(this._name) : null;
+         let AH = {};
+         if (BH) try {
+           AH = ut(tt._parse(this._name)), Rh(AH, ((HH, BH) => {
+             (VL(HH) || kL(HH) || "" === HH) && delete AH[BH]
+           }))
+         } catch (HH) {}
+         const rH = this.WQ._parse(this._name);
+         if (rH && (this.props = jh({}, rH)), this._splitStorage && this._loadGroupEntries(), BH && rH) {
+           var SH, hH;
+           const HH = null == LH ? void 0 : LH[VH],
+             BH = null !== (SH = null == LH ? void 0 : LH.$user_state) && void 0 !== SH ? SH : nB,
+ ... (25 more added lines; see GitHub link above)
```

#### 205. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3911-L3912` → after: `L4279-L4286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4279-L4286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4279-L4286) · [Before (L3911-L3912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3911-L3912)

```diff
-       setIntArray3(VV, eV) {
-         return this._pipelineContext.setIntArray3(VV, eV), this
+       _loadGroupEntries() {
+         for (const HH of oz) {
+           const BH = Ct._parse(this._groupEntryName(HH));
+           if (BH && !UL(BH)) {
+             const LH = this._slotWriteState(HH);
+             LH.persisted = !0, this._mainCarriesGroupKey(HH) || (LH.fingerprint = this._entryFingerprint(BH, HH)), this._groupEntryIsStale(HH, BH) || jh(this.props, BH)
+           }
+         }
```

#### 206. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3914-L3915` → after: `L4288-L4292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4288-L4292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4288-L4292) · [Before (L3914-L3915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3914-L3915)

```diff
-       setIntArray4(VV, eV) {
-         return this._pipelineContext.setIntArray4(VV, eV), this
+       _mainCarriesGroupKey(HH) {
+         return Object.keys(this.props).some((BH => {
+           var LH;
+           return (null === (LH = lz(BH)) || void 0 === LH ? void 0 : LH.storageGroup) === HH
+         }))
```

#### 207. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3917-L3918` → after: `L4294-L4299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4294-L4299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4294-L4299) · [Before (L3917-L3918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3917-L3918)

```diff
-       setUInt(VV, eV) {
-         return this._pipelineContext.setUInt(VV, eV), this
+       _groupEntryIsStale(HH, BH) {
+         const LH = AC[HH];
+         if (!LH) return !1;
+         const AH = BH[LH],
+           rH = this.props[LH];
+         return oL(AH) && oL(rH) && rH > AH
```

#### 208. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3920-L3921` → after: `L4301-L4314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4301-L4314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4301-L4314) · [Before (L3920-L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3920-L3921)

```diff
-       setUInt2(VV, eV, xV) {
-         return this._pipelineContext.setUInt2(VV, eV, xV), this
+       refreshKey(HH) {
+         var BH;
+         if (this._disabled) return;
+         if (this._metaIdentifierChangePending.has(HH)) return;
+         const LH = this._splitStorage ? null === (BH = lz(HH)) || void 0 === BH ? void 0 : BH.storageGroup : void 0,
+           AH = LH ? Ct._parse(this._groupEntryName(LH)) : this.WQ._parse(this._name);
+         if (AH && HH in AH) this._setProp(HH, AH[HH], !1);
+         else {
+           if (LH) {
+             const BH = this.WQ._parse(this._name);
+             if (BH && HH in BH) return void this._setProp(HH, BH[HH], !1)
+           }
+           this._deleteProp(HH, !1)
+         }
```

#### 209. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3923-L3924` → after: `L4316-L4321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4316-L4321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4316-L4321) · [Before (L3923-L3924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3923-L3924)

```diff
-       setUInt3(VV, eV, xV, JV) {
-         return this._pipelineContext.setUInt3(VV, eV, xV, JV), this
+       save() {
+         if (this._disabled) return;
+         const HH = this._saveDebounceMs();
+         HH > 0 ? VL(this._pendingSaveTimer) && (this._pendingSaveTimer = setTimeout((() => {
+           this._pendingSaveTimer = void 0, this._writeNow()
+         }), HH)) : this._writeNow()
```

#### 210. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3926-L3927` → after: `L4323-L4324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4323-L4324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4323-L4324) · [Before (L3926-L3927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3926-L3927)

```diff
-       setUInt4(VV, eV, xV, JV, YV) {
-         return this._pipelineContext.setUInt4(VV, eV, xV, JV, YV), this
+       flush() {
+         VL(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0, this._writeNow())
```

#### 211. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3929-L3930` → after: `L4326-L4362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4326-L4362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4326-L4362) · [Before (L3929-L3930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3929-L3930)

```diff
-       setUIntArray(VV, eV) {
-         return this._pipelineContext.setUIntArray(VV, eV), this
+       _writeNow() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         if (this._disabled || this._cookieSyncSuppressed && !HH) return;
+         HH || (this.syncCookieProperties(), this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase() || EC.forEach((HH => this.refreshKey(HH))));
+         const BH = !HH && !this._storageMigrationInProgress;
+         BH || (this._crossTabFeatureFlagIdentityMismatch = !1);
+         const LH = !!BH && this._reconcileCrossTabFeatureFlagPropertiesBeforeWrite();
+         if (this._crossTabFeatureFlagIdentityMismatch) return void(this._config.debug && qh.warn("skipping persistence write because storage belongs to a different distinct ID"));
+         if (this._splitStorage) return this._writeNowSplit(), void(LH && this._crossTabFeatureFlagHandlers.forEach((HH => HH())));
+         const AH = this._writeEntry(this.WQ, this._name, this.props, tC);
+         "written" === AH && this._rememberCurrentCookieProperties(this.props), "failed" !== AH && (this._pendingCrossTabFeatureFlagChanges.clear(), this._localIdentityChangePending = !1, this._metaIdentifierChangePending.clear()), LH && this._crossTabFeatureFlagHandlers.forEach(( … [truncated]
+       }
+       _writeNowSplit() {
+         const {
+           main: HH,
+           groups: BH
+ ... (21 more added lines; see GitHub link above)
```

#### 212. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3932-L3933` → after: `L4364-L4396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4364-L4396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4364-L4396) · [Before (L3932-L3933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3932-L3933)

```diff
-       setUIntArray2(VV, eV) {
-         return this._pipelineContext.setUIntArray2(VV, eV), this
+       _partitionProps() {
+         const HH = {},
+           BH = {
+             flags: {},
+             surveys: {}
+           };
+         return Rh(this.props, ((LH, AH) => {
+           var rH;
+           const SH = null === (rH = lz(AH)) || void 0 === rH ? void 0 : rH.storageGroup;
+           SH ? BH[SH][AH] = LH : HH[AH] = LH
+         })), {
+           main: HH,
+           groups: BH
+         }
+       }
+       _entryFingerprint(HH, BH) {
+ ... (17 more added lines; see GitHub link above)
```

#### 213. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3935-L3936` → after: `L4398-L4404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4398-L4404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4398-L4404) · [Before (L3935-L3936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3935-L3936)

```diff
-       setUIntArray3(VV, eV) {
-         return this._pipelineContext.setUIntArray3(VV, eV), this
+       remove() {
+         let {
+           keepGroupEntries: HH = !1
+         } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+         if (this._markAllCrossTabFeatureFlagChangesPending(), VL(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), this.WQ._remove(this._name, !1), this.WQ._remove(this._name, !0), !HH && this._ownsSplitStorage)
+           for (const BH of oz) Ct._remove(this._groupEntryName(BH));
+         HH ? delete this._slotState[tC] : this._slotState = {}, this._lastSeenCookiePropertiesFingerprint = void 0, this._lastSeenMainCookieValue = void 0
```

#### 214. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3938-L3939` → after: `L4406-L4407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4406-L4407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4406-L4407) · [Before (L3938-L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3938-L3939)

```diff
-       setUIntArray4(VV, eV) {
-         return this._pipelineContext.setUIntArray4(VV, eV), this
+       clear() {
+         this.remove(), this.props = {}
```

#### 215. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3941-L3942` → after: `L4409-L4417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4409-L4417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4409-L4417) · [Before (L3941-L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3941-L3942)

```diff
-       setFloatArray(VV, eV) {
-         return this._pipelineContext.setArray(VV, eV), this
+       register_once(HH, BH, LH) {
+         if (TL(HH)) {
+           this.syncCookieProperties(), VL(BH) && (BH = "None"), this._expire_days = VL(LH) ? this._default_expiry : LH;
+           let AH = !1;
+           if (Rh(HH, ((HH, LH) => {
+               this.props.hasOwnProperty(LH) && this.props[LH] !== BH || (this._setProp(LH, HH), AH = !0)
+             })), AH) return this.save(), !0
+         }
+         return !1
```

#### 216. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3944-L3945` → after: `L4419-L4427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4419-L4427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4419-L4427) · [Before (L3944-L3945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3944-L3945)

```diff
-       setFloatArray2(VV, eV) {
-         return this._pipelineContext.setArray2(VV, eV), this
+       register(HH, BH) {
+         if (TL(HH)) {
+           this.syncCookieProperties(), this._expire_days = VL(BH) ? this._default_expiry : BH;
+           let LH = !1;
+           if (Rh(HH, ((BH, AH) => {
+               HH.hasOwnProperty(AH) && (this.props[AH] !== BH || TL(BH) || vL(BH)) && (this._setProp(AH, BH), LH = !0)
+             })), LH) return this.save(), !0
+         }
+         return !1
```

#### 217. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3947-L3948` → after: `L4429-L4485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4429-L4485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4429-L4485) · [Before (L3947-L3948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3947-L3948)

```diff
-       setFloatArray3(VV, eV) {
-         return this._pipelineContext.setArray3(VV, eV), this
+       unregister(HH) {
+         this.syncCookieProperties();
+         const BH = "string" == typeof HH ? [HH] : HH;
+         let LH = !1;
+         for (const AH of BH) AH in this.props && (this._deleteProp(AH), LH = !0);
+         LH && this.save()
+       }
+       update_campaign_params() {
+         const HH = null == yB ? void 0 : yB.URL;
+         if (HH === this._campaign_params_url) return;
+         const BH = dz(this._config.custom_campaign_params, this._config.mask_personal_data_properties, this._config.custom_personal_data_properties),
+           LH = !UL(Dh(BH));
+         return LH && this.register(BH), this._campaign_params_url = HH, LH ? BH : void 0
+       }
+       update_search_keyword() {
+         this.register(function() {
+ ... (41 more added lines; see GitHub link above)
```

#### 218. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3950-L3951` → after: `L4487-L4490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4487-L4490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4487-L4490) · [Before (L3950-L3951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3950-L3951)

```diff
-       setFloatArray4(VV, eV) {
-         return this._pipelineContext.setArray4(VV, eV), this
+       safe_merge(HH) {
+         return Rh(this.props, (function(BH, LH) {
+           LH in HH || (HH[LH] = BH)
+         })), HH
```

#### 219. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3953-L3954` → after: `L4492-L4520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4492-L4520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4492-L4520) · [Before (L3953-L3954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3953-L3954)

```diff
-       setArray(VV, eV) {
-         return this._pipelineContext.setArray(VV, eV), this
+       update_config(HH, BH, LH) {
+         const AH = HH.persistence !== BH.persistence,
+           rH = !((HH, BH) => {
+             if (HH.length !== BH.length) return !1;
+             const LH = [...HH].sort(),
+               AH = [...BH].sort();
+             return LH.every(((HH, BH) => HH === AH[BH]))
+           })(HH.cookie_persisted_properties || [], BH.cookie_persisted_properties || []),
+           SH = AH || rH,
+           hH = HH.cookieWinsOnConflict !== BH.cookieWinsOnConflict,
+           tH = HH.disable_persistence || !!LH,
+           zH = !!this._disabled && !tH;
+         tH || this._syncCookieProperties(BH, zH), this._config = HH, !tH && (AH || rH || hH) && (this._lastSeenCookiePropertiesFingerprint = void 0, this._lastSeenMainCookieValue = void 0, this._syncCookieProperties(xr(xr({}, HH), {}, {
+           cookie_persisted_properties: BH.cookie_persisted_properties
+         }), zH));
+         const CH = SH || hH ? this._buildStorage(HH) : this.WQ;
+ ... (13 more added lines; see GitHub link above)
```

#### 220. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3956-L3957` → after: `L4522-L4530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4522-L4530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4522-L4530) · [Before (L3956-L3957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3956-L3957)

```diff
-       setArray2(VV, eV) {
-         return this._pipelineContext.setArray2(VV, eV), this
+       _truncateExistingPersonInfoForCookie() {
+         const HH = this.props[VB];
+         if (!this._storesIdentityInCookie || !TL(HH) || "string" != typeof HH.r) return;
+         const BH = hC(HH.r),
+           LH = "string" == typeof HH.u ? hC(HH.u) : HH.u;
+         BH === HH.r && LH === HH.u || this._setProp(VB, xr(xr({}, HH), {}, {
+           r: BH,
+           u: LH
+         }))
```

#### 221. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3959-L3960` → after: `L4532-L4533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4532-L4533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4532-L4533) · [Before (L3959-L3960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3959-L3960)

```diff
-       setArray3(VV, eV) {
-         return this._pipelineContext.setArray3(VV, eV), this
+       set_disabled(HH) {
+         this._disabled = HH, this._disabled ? this.remove() : this.save()
```

#### 222. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3962-L3963` → after: `L4535-L4538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4535-L4538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4535-L4538) · [Before (L3962-L3963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3962-L3963)

```diff
-       setArray4(VV, eV) {
-         return this._pipelineContext.setArray4(VV, eV), this
+       set_cross_subdomain(HH) {
+         HH !== this._cross_subdomain && (this._cross_subdomain = HH, this.remove({
+           keepGroupEntries: !0
+         }), this.save())
```

#### 223. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3965-L3966` → after: `L4540-L4543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4540-L4543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4540-L4543) · [Before (L3965-L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3965-L3966)

```diff
-       setMatrices(VV, eV) {
-         return this._pipelineContext.setMatrices(VV, eV), this
+       set_secure(HH) {
+         HH !== this._secure && (this._secure = HH, this.remove({
+           keepGroupEntries: !0
+         }), this.save())
```

#### 224. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3968-L3969` → after: `L4545-L4547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4545-L4547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4545-L4547) · [Before (L3968-L3969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3968-L3969)

```diff
-       setMatrix(VV, eV) {
-         return this._pipelineContext.setMatrix(VV, eV), this
+       set_event_timer(HH, BH) {
+         const LH = this.props.__timers || {};
+         LH[HH] = BH, this._setProp(KH, LH), this.save()
```

#### 225. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3971-L3972` → after: `L4549-L4552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4549-L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4549-L4552) · [Before (L3971-L3972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3971-L3972)

```diff
-       setMatrix3x3(VV, eV) {
-         return this._pipelineContext.setMatrix3x3(VV, eV), this
+       remove_event_timer(HH) {
+         const BH = this.props.__timers || {},
+           LH = BH[HH];
+         return VL(LH) || (delete BH[HH], this._setProp(KH, BH), this.save()), LH
```

#### 226. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3974-L3975` → after: `L4554-L4555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4554-L4555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4554-L4555) · [Before (L3974-L3975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3974-L3975)

```diff
-       setMatrix2x2(VV, eV) {
-         return this._pipelineContext.setMatrix2x2(VV, eV), this
+       get_property(HH) {
+         return this.props[HH]
```

#### 227. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3977-L3978` → after: `L4557-L4558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4557-L4558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4557-L4558) · [Before (L3977-L3978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3977-L3978)

```diff
-       setFloat(VV, eV) {
-         return this._pipelineContext.setFloat(VV, eV), this
+       set_property(HH, BH) {
+         this._setProp(HH, BH), this.save()
```

#### 228. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3980-L3981` → after: `L4560-L4564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4560-L4564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4560-L4564) · [Before (L3980-L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3980-L3981)

```diff
-       setBool(VV, eV) {
-         return this._pipelineContext.setInt(VV, eV ? 1 : 0), this
+       _setProp(HH, BH) {
+         let LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+         var AH;
+         const rH = this.props[HH];
+         this.props[HH] = BH, LH && ("distinct_id" !== HH && "$user_state" !== HH || rH === BH || (this._localIdentityChangePending = !0), XC(HH) && !GC(rH, BH) && this._metaIdentifierChangePending.add(HH), this._markPendingCrossTabFeatureFlagChanges(HH, rH, BH), (null === (AH = l … [truncated]
```

#### 229. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3983-L3984` → after: `L4566-L4568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4566-L4568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4566-L4568) · [Before (L3983-L3984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3983-L3984)

```diff
-       setVector2(VV, eV) {
-         return this._pipelineContext.setVector2(VV, eV), this
+       _deleteProp(HH) {
+         let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         delete this.props[HH], BH && (CC(HH) && this._setCrossTabFeatureFlagChangesPending(HH, !0), XC(HH) && this._metaIdentifierChangePending.add(HH), this._markGroupDirty(HH))
```

#### 230. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3986-L3987` → after: `L4570-L4573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4570-L4573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4570-L4573) · [Before (L3986-L3987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3986-L3987)

```diff
-       setFloat2(VV, eV, xV) {
-         return this._pipelineContext.setFloat2(VV, eV, xV), this
+       _markGroupDirty(HH) {
+         var BH;
+         const LH = null === (BH = lz(HH)) || void 0 === BH ? void 0 : BH.storageGroup;
+         LH && (this._slotWriteState(LH).gu = !0)
```

#### 231. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3989-L3990` → after: `L4575-L4576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4575-L4576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4575-L4576) · [Before (L3989-L3990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3989-L3990)

```diff
-       setVector3(VV, eV) {
-         return this._pipelineContext.setVector3(VV, eV), this
+       _slotWriteState(HH) {
+         return this._slotState[HH] || (this._slotState[HH] = {})
```

#### 232. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3992-L3993` → after: `L4578-L4606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4578-L4606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4578-L4606) · [Before (L3992-L3993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3992-L3993)

```diff
-       setFloat3(VV, eV, xV, JV) {
-         return this._pipelineContext.setFloat3(VV, eV, xV, JV), this
+     };
+     const WC = {
+         GZipJS: "gzip-js",
+         Base64: "base64"
+       },
+       MC = "events",
+       xC = "cancelEvents",
+       vC = "popover",
+       PC = "api",
+       TC = "widget",
+       UC = "survey shown",
+       VC = "survey dismissed",
+       OC = "survey sent",
+       bC = "$survey_id",
+       kC = "$survey_iteration",
+       mC = "$survey_last_seen_date",
+ ... (13 more added lines; see GitHub link above)
```

#### 233. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3995-L3996` → after: `L4608-L4626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4608-L4626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4608-L4626) · [Before (L3995-L3996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3995-L3996)

```diff
-       setVector4(VV, eV) {
-         return this._pipelineContext.setVector4(VV, eV), this
+     }
+     const lC = "product tour shown",
+       KC = "$product_tour_last_seen_date",
+       cC = "$product_tour_type",
+       eC = gh("[RateLimiter]");
+     var qC = class {
+       constructor(HH) {
+         this.serverLimits = {}, this.lastEventRateLimited = !1, this.checkForLimiting = HH => {
+           const BH = HH.text;
+           if (BH && BH.length) try {
+             (JSON.parse(BH).quota_limited || []).forEach((HH => {
+               eC.info(`${HH||"events"} is quota limited.`), this.serverLimits[HH] = (new Date).getTime() + 6e4
+             }))
+           } catch (HH) {
+             return void eC.warn(`could not rate limit - continuing. Error: "${null==HH?void 0:HH.message}"`, {
+               text: BH
+ ... (3 more added lines; see GitHub link above)
```

#### 234. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3998-L3999` → after: `L4628-L4630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4628-L4630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4628-L4630) · [Before (L3998-L3999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3998-L3999)

```diff
-       setQuaternion(VV, eV) {
-         return this._pipelineContext.setQuaternion(VV, eV), this
+       get captureEventsPerSecond() {
+         var HH;
+         return (null === (HH = this.instance.config.rate_limiting) || void 0 === HH ? void 0 : HH.events_per_second) || 10
```

#### 235. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4001-L4002` → after: `L4632-L4634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4632-L4634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4632-L4634) · [Before (L4001-L4002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4001-L4002)

```diff
-       setFloat4(VV, eV, xV, JV, YV) {
-         return this._pipelineContext.setFloat4(VV, eV, xV, JV, YV), this
+       get captureEventsBurstLimit() {
+         var HH;
+         return Math.max((null === (HH = this.instance.config.rate_limiting) || void 0 === HH ? void 0 : HH.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond)
```

#### 236. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4004-L4005` → after: `L4636-L4655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4636-L4655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4636-L4655) · [Before (L4004-L4005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4004-L4005)

```diff
-       setColor3(VV, eV) {
-         return this._pipelineContext.setColor3(VV, eV), this
+       clientRateLimitContext() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         var BH, LH, AH;
+         const {
+           captureEventsBurstLimit: rH,
+           captureEventsPerSecond: SH
+         } = this, hH = (new Date).getTime(), tH = null !== (BH = null === (LH = this.instance.persistence) || void 0 === LH ? void 0 : LH.get_property("$capture_rate_limit")) && void 0 !== BH ? BH : {
+           tokens: rH,
+           last: hH
+         };
+         tH.tokens += (hH - tH.last) / 1e3 * SH, tH.last = hH, tH.tokens > rH && (tH.tokens = rH);
+         const zH = 1 > tH.tokens;
+         if (zH || HH || (tH.tokens = Math.max(0, tH.tokens - 1)), zH && !HH) {
+           const HH = (oL(tH.dropped) ? tH.dropped : 0) + 1;
+           tH.dropped = HH, !this.lastEventRateLimited && this._captureWarning(HH) && (tH.dropped = 0)
+         }
+ ... (4 more added lines; see GitHub link above)
```

#### 237. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4007-L4008` → after: `L4657-L4659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4657-L4659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4657-L4659) · [Before (L4007-L4008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4007-L4008)

```diff
-       setColor4(VV, eV, xV) {
-         return this._pipelineContext.setColor4(VV, eV, xV), this
+       _isPropertyAllowed(HH) {
+         const BH = this.instance.config.property_denylist;
+         return !vL(BH) || !BH.includes(HH)
```

#### 238. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4010-L4011` → after: `L4661-L4663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4661-L4663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4661-L4663) · [Before (L4010-L4011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4010-L4011)

```diff
-       setDirectColor4(VV, eV) {
-         return this._pipelineContext.setDirectColor4(VV, eV), this
+       _triggeringPage() {
+         var HH;
+         if (this._isPropertyAllowed("$current_url") && this._isPropertyAllowed("$pathname") && (null == HL ? void 0 : HL.pathname)) return `${null!==(HH=HL.origin)&&void 0!==HH?HH:""}${HL.pathname}`
```

#### 239. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4013-L4014` → after: `L4665-L4675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4665-L4675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4665-L4675) · [Before (L4013-L4014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4013-L4014)

```diff
-       clearCodeCache() {
-         this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
+       _captureWarning(HH) {
+         var BH, LH;
+         const {
+           captureEventsBurstLimit: AH,
+           captureEventsPerSecond: rH
+         } = this, SH = this._triggeringPage(), hH = this._isPropertyAllowed("$session_id") ? null === (BH = (LH = this.instance).get_session_id) || void 0 === BH ? void 0 : BH.call(LH) : void 0, tH = [`${HH} event(s) dropped since the last warning`, SH ? `triggered on ${SH}` : vo … [truncated]
+         return !!this.instance.capture("$$client_ingestion_warning", {
+           $$client_ingestion_warning_message: `posthog-js client rate limited: ${tH}. Config is set to ${rH} events per second and ${AH} events burst limit.`
+         }, {
+           skip_client_rate_limiting: !0
+         })
```

#### 240. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4016-L4022` → after: `L4677-L4679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4677-L4679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4677-L4679) · [Before (L4016-L4022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4016-L4022)

```diff
-       dispose() {
-         if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
-         else {
-           if (QV.PersistentMode) return;
-           this._refCount--
-         }
-         this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, yV.i)(this._pipelineContext), this._engine._r … [truncated]
+       isServerRateLimited(HH) {
+         const BH = this.serverLimits[HH || "events"] || !1;
+         return !1 !== BH && (new Date).getTime() < BH
```

#### 241. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4024-L4026` → after: `L4681-L4685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4681-L4685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4681-L4685) · [Before (L4024-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4024-L4026)

```diff
-       static RegisterShader(VV, eV, xV) {
-         let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-         eV && (UV.d.GetShadersStore(JV)[`${VV}PixelShader`] = eV), xV && (UV.d.GetShadersStore(JV)[`${VV}VertexShader`] = xV)
+     };
+     const gC = gh("[RemoteConfig]");
+     var NC = class {
+       constructor(HH) {
+         this._instance = HH
```

#### 242. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4028-L4029` → after: `L4687-L4689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4687-L4689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4687-L4689) · [Before (L4028-L4029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4028-L4029)

```diff
-       static ResetCache() {
-         QV._BaseCache = {}
+       get remoteConfig() {
+         var HH;
+         return null === (HH = tL._POSTHOG_REMOTE_CONFIG) || void 0 === HH || null === (HH = HH[this._instance.config.token]) || void 0 === HH ? void 0 : HH.config
```

#### 243. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4031-L4108` → after: `L4691-L4693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4691-L4693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4691-L4693) · [Before (L4031-L4108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4031-L4108)

```diff
-     }
-     QV.LogShaderCodeOnCompilationError = !0, QV.PersistentMode = !1, QV.AutomaticallyClearCodeCache = !1, QV._UniqueIdSeed = 0, QV._BaseCache = {}, QV.ShadersStore = UV.d.ShadersStore, QV.IncludesShadersStore = UV.d.IncludesShadersStore
-   },
-   41405: (VV, eV, xV) => {
-     xV.d(eV, {
-       e: () => wV,
-       h: () => PV,
-       j: () => TV
-     });
-     var JV = xV(41101),
-       YV = xV(38269),
-       UV = xV(38311),
-       yV = xV(41383);
-     const pV = new YV.d,
-       QV = new YV.d,
-       nV = new YV.d,
- ... (62 more removed lines; see GitHub link above)
+       _loadRemoteConfigJs(HH) {
+         var BH, LH, AH;
+         (null === (BH = tL.__PosthogExtensions__) || void 0 === BH ? void 0 : BH.loadExternalDependency) ? null === (LH = tL.__PosthogExtensions__) || void 0 === LH || null === (AH = LH.loadExternalDependency) || void 0 === AH || AH.call(LH, this._instance, "remote-config", (() = … [truncated]
```

#### 244. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4110-L4124` → after: `L4695-L4700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4695-L4700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4695-L4700) · [Before (L4110-L4124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4110-L4124)

```diff
-     }
-     const jV = yV.b,
-       qV = JV.c,
-       tV = jV.prototype._updateMatrixForUniform,
-       FV = JV.c.prototype.setMatrix;
- 
-     function TV() {
-       JV.c.prototype.setMatrix = FV, qV._setMatrixOverride = void 0, jV.prototype._updateMatrixForUniform = tV, jV.prototype._updateMatrixForUniformOverride = void 0
-     }
- 
-     function PV() {
-       qV.prototype._setMatrixOverride = FV, qV.prototype.setMatrix = function(VV, eV) {
-         return this._setMatrixOverride(VV, BV(VV, eV)), this
-       }, jV.prototype._updateMatrixForUniformOverride = tV, jV.prototype._updateMatrixForUniform = function(VV, eV) {
-         this._updateMatrixForUniformOverride(VV, BV(VV, eV))
+       _loadRemoteConfigJSON(HH) {
+         this._instance._send_request({
+           method: "GET",
+           url: this._instance.requestRouter.endpointFor("assets", `/array/${this._instance.config.token}/config`),
+           callback: HH
+         })
```

#### 245. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4126-L4271` → after: `L4702-L4713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4702-L4713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4702-L4713) · [Before (L4126-L4271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4126-L4271)

```diff
-     }
-   },
-   41378: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => UV,
-       f: () => YV
-     });
-     var JV = xV(41369);
- 
-     function YV(VV, eV) {
-       eV.WHITEBALANCE && VV.push("whiteBalanceMatrix"), eV.EXPOSURE && VV.push("exposureLinear"), eV.CONTRAST && VV.push("contrast"), eV.COLORGRADING && VV.push("colorTransformSettings"), (eV.VIGNETTE || eV.DITHER) && VV.push("vInverseScreenSize"), eV.VIGNETTE && (VV.push("vignet … [truncated]
-     }
- 
-     function UV(VV, eV) {
-       eV.COLORGRADING && VV.push("txColorTransform")
-     }
- ... (130 more removed lines; see GitHub link above)
+       load() {
+         try {
+           if (this.remoteConfig) return gC.info("Using preloaded remote config", this.remoteConfig), void this._onRemoteConfig(this.remoteConfig);
+           if (this._instance._shouldDisableFlags()) return void gC.warn("Remote config is disabled. Falling back to local config.");
+           this._loadRemoteConfigJs((HH => {
+             if (!HH) return gC.info("No config found after loading remote JS config. Falling back to JSON."), void this._loadRemoteConfigJSON((HH => {
+               this._onRemoteConfig(HH.json, HH)
+             }));
+             this._onRemoteConfig(HH)
+           }))
+         } catch (AH) {
+           gC.error("Error loading remote config", AH), this._onRemoteConfig()
```

#### 246. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4273-L4274` → after: `L4715-L4726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4715-L4726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4715-L4726) · [Before (L4273-L4274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4273-L4274)

```diff
-         set globalDensity(VV) {
-           this._globalDensity = VV, this._dirty = !0
+       }
+       _onRemoteConfig(HH, BH) {
+         !HH && BH && (0 === BH.statusCode ? BH.error || gC.warn("Failed to fetch remote config from PostHog.") : gC.error("Failed to fetch remote config from PostHog."));
+         try {
+           this._instance._onRemoteConfig(HH ? {
+             ok: !0,
+             config: HH
+           } : {
+             ok: !1
+           })
+         } catch (HH) {
+           gC.error("Error applying remote config", HH)
```

#### 247. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4276-L4277` → after: `L4728-L4732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4728-L4732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4728-L4732) · [Before (L4276-L4277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4276-L4277)

```diff
-         get globalSaturation() {
-           return this._globalSaturation
+         if (!1 !== (null == HH ? void 0 : HH.hasFeatureFlags) && !this._instance.config.advanced_disable_feature_flags_on_first_load) try {
+           var LH;
+           null === (LH = this._instance.featureFlags) || void 0 === LH || LH.ensureFlagsLoaded()
+         } catch (HH) {
+           gC.error("Error loading feature flags", HH)
```

#### 248. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4279-L4280` → after: `L4734-L4853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4734-L4853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4734-L4853) · [Before (L4279-L4280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4279-L4280)

```diff
-         set globalSaturation(VV) {
-           this._globalSaturation = VV, this._dirty = !0
+       }
+     };
+     var RC = Uint8Array,
+       jC = Uint16Array,
+       nC = Uint32Array,
+       FC = new RC([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
+       DC = new RC([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
+       wC = new RC([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
+       ZC = function(HH, BH) {
+         for (var LH = new jC(31), AH = 0; 31 > AH; ++AH) LH[AH] = BH += 1 << HH[AH - 1];
+         var rH = new nC(LH[30]);
+         for (AH = 1; 30 > AH; ++AH)
+           for (var SH = LH[AH]; LH[AH + 1] > SH; ++SH) rH[SH] = SH - LH[AH] << 5 | AH;
+         return [LH, rH]
+       },
+       dC = ZC(FC, 2),
+ ... (104 more added lines; see GitHub link above)
```

#### 249. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4282-L4283` → after: `L4855-L4921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4855-L4921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4855-L4921) · [Before (L4282-L4283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4282-L4283)

```diff
-         get globalExposure() {
-           return this._globalExposure
+         return [new RC(YH), uH]
+       },
+       CE = function(HH, BH, LH) {
+         return -1 == HH.s ? Math.max(CE(HH.l, BH, LH + 1), CE(HH.r, BH, LH + 1)) : BH[HH.s] = LH
+       },
+       EE = function(HH) {
+         for (var BH = HH.length; BH && !HH[--BH];);
+         for (var LH = new jC(++BH), AH = 0, rH = HH[0], SH = 1, hH = function(HH) {
+             LH[AH++] = HH
+           }, tH = 1; BH >= tH; ++tH)
+           if (HH[tH] == rH && tH != BH) ++SH;
+           else {
+             if (!rH && SH > 2) {
+               for (; SH > 138; SH -= 138) hH(32754);
+               SH > 2 && (hH(SH > 10 ? SH - 11 << 5 | 28690 : SH - 3 << 5 | 12305), SH = 0)
+             } else if (SH > 3) {
+ ... (51 more added lines; see GitHub link above)
```

#### 250. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4285-L4286` → after: `L4923-L5062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4923-L5062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4923-L5062) · [Before (L4285-L4286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4285-L4286)

```diff
-         set globalExposure(VV) {
-           this._globalExposure = VV, this._dirty = !0
+         return HH
+       }()),
+       WE = function(HH, BH, LH) {
+         for (; LH; ++BH) HH[BH] = LH, LH >>>= 8
+       };
+     const ME = !!LL || !!BL,
+       xE = new WeakMap,
+       vE = "text/plain";
+     let PE = 0,
+       TE = !1;
+     const UE = (HH, BH) => {
+         const [LH, AH] = HH.split("#"), [rH, SH] = LH.split("?");
+         if (!SH) return HH;
+         const hH = SH.split("&").filter((HH => HH.split("=")[0] !== BH)).join("&");
+         return `${rH}${hH?`?${hH}`:""}${AH?`#${AH}`:""}`
+       },
+ ... (124 more added lines; see GitHub link above)
```

#### 251. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4288-L4289` → after: `L5064-L5073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R5064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L5064-L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L5064-L5073) · [Before (L4288-L4289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4288-L4289)

```diff
-         get highlightsHue() {
-           return this._highlightsHue
+         if (LH === WC.Base64) {
+           const HH = function(HH) {
+               return HH ? btoa(encodeURIComponent(HH).replace(/%([0-9A-F]{2})/g, ((HH, BH) => String.fromCharCode(parseInt(BH, 16))))) : HH
+             }(gz(BH)),
+             LH = (HH => "data=" + encodeURIComponent("string" == typeof HH ? HH : gz(HH)))(HH);
+           return {
+             contentType: "application/x-www-form-urlencoded",
+             body: LH,
+             estimatedSize: new Blob([LH]).size
+           }
```

#### 252. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4291-L4292` → after: `L5075-L5103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R5075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L5075-L5103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L5075-L5103) · [Before (L4291-L4292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4291-L4292)

```diff
-         set highlightsHue(VV) {
-           this._highlightsHue = VV, this._dirty = !0
+         const AH = gz(BH);
+         return {
+           contentType: "application/json",
+           body: AH,
+           estimatedSize: new Blob([AH]).size
+         }
+       },
+       bE = HH => {
+         const BH = () => "sendBeacon" === HH.transport ? {
+           url: VE(HH.url, {
+             compression: WC.Base64
+           }),
+           encodedBody: OE(xr(xr({}, HH), {}, {
+             compression: WC.Base64,
+             _encodedBody: void 0
+           }))
+ ... (13 more added lines; see GitHub link above)
```

#### 253. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4294-L4295` → after: `L5105-L5119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R5105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L5105-L5119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L5105-L5119) · [Before (L4294-L4295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4294-L4295)

```diff
-         get highlightsDensity() {
-           return this._highlightsDensity
+         return LH && xS(HH.compression, Rz(HH.url, "compression")) && !((AH = LH.body) instanceof ArrayBuffer ? MS(new Uint8Array(AH)) : ArrayBuffer.isView(AH) && MS(new Uint8Array(AH.buffer, AH.byteOffset, AH.byteLength))) ? (TE = !0, BH()) : {
+           url: HH.url,
+           encodedBody: LH
+         };
+         var AH
+       },
+       kE = HH => {
+         try {
+           return bE(HH)
+         } catch (SH) {
+           var BH;
+           return qh.error(SH), void(null === (BH = HH.callback) || void 0 === BH || BH.call(HH, {
+             statusCode: 0,
+             error: SH
+           }))
```

#### 254. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4297-L4298` → after: `L5121-L5140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R5121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L5121-L5140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L5121-L5140) · [Before (L4297-L4298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4297-L4298)

```diff
-         set highlightsDensity(VV) {
-           this._highlightsDensity = VV, this._dirty = !0
+       },
+       mE = function() {
+         var HH = DL((function*(HH) {
+           const BH = yield function(HH) {
+             return OS.apply(this, arguments)
+           }(gz(HH.data), SH.DEBUG, {
+             rethrow: !0
+           });
+           if (!BH) return HH;
+           const LH = yield BH.arrayBuffer();
+           return xr(xr({}, HH), {}, {
+             _encodedBody: {
+               contentType: vE,
+               body: LH,
+               estimatedSize: LH.byteLength
+             }
+ ... (4 more added lines; see GitHub link above)
```

#### 255. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4300-L4301` → after: `L5142-L5163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R5142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L5142-L5163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L5142-L5163) · [Before (L4300-L4301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4300-L4301)

```diff
-         get highlightsSaturation() {
-           return this._highlightsSaturation
+       }(),
+       oE = /Failed to fetch|NetworkError|Load failed/i,
+       IE = HH => "TypeError" === (null == HH ? void 0 : HH.name) && oE.test((null == HH ? void 0 : HH.message) || ""),
+       fE = HH => {
+         try {
+           const BH = function(HH) {
+             let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+             if ("string" != typeof HH || !HH) return;
+             const LH = HH.trim(),
+               AH = /^\d+\s*,/.test(LH) ? LH.slice(0, LH.indexOf(",")).trim() : LH;
+             if (/^\d+$/.test(AH)) {
+               const HH = 1e3 * Math.min(Number(AH), 300);
+               return HH > 0 ? HH : void 0
+             }
+             if (!/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun)[a-z]*[ ,]/.test(AH)) return;
+             const rH = /^\w{3} \w{3} /.test(AH) ? AH + " GMT" : AH,
+ ... (6 more added lines; see GitHub link above)
```

#### 256. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4303-L4304` → after: `L5165-L5456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R5165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L5165-L5456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L5165-L5456) · [Before (L4303-L4304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4303-L4304)

```diff
-         set highlightsSaturation(VV) {
-           this._highlightsSaturation = VV, this._dirty = !0
+       },
+       lE = HH => {
+         const BH = kE(HH);
+         if (!BH) return;
+         const LH = new LL;
+         xE.set(LH, !0);
+         const {
+           url: AH,
+           encodedBody: rH
+         } = BH;
+         LH.open(HH.method || "GET", AH, !0);
+         const {
+           contentType: SH,
+           body: hH
+         } = null != rH ? rH : {};
+         Rh(HH.headers, (function(HH, BH) {
+ ... (276 more added lines; see GitHub link above)
```

#### 257. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4306-L4307` → after: `L5458-L5496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R5458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L5458-L5496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L5458-L5496) · [Before (L4306-L4307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4306-L4307)

```diff
-         get highlightsExposure() {
-           return this._highlightsExposure
+         return this._queue = [], HH
+       }
+     };
+     const jE = ["retriesPerformedSoFar"];
+     var nE = class {
+         constructor(HH) {
+           this._instance = HH, this._isPolling = !1, this._pollIntervalMs = 3e3, this._queue = [], this._queue = [], this._areWeOnline = !0, this.resume()
+         }
+         resume() {
+           if (!VL(JB) && "onLine" in JB.navigator) {
+             if (this._areWeOnline = JB.navigator.onLine, this._onlineListener) return;
+             this._onlineListener = () => {
+               this._areWeOnline = !0, this._flush()
+             }, this._offlineListener = () => {
+               this._areWeOnline = !1
+             }, ah(JB, "online", this._onlineListener), ah(JB, "offline", this._offlineListener)
+ ... (23 more added lines; see GitHub link above)
```

#### 258. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4309-L4310` → after: `L5498-L5530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R5498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L5498-L5530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L5498-L5530) · [Before (L4309-L4310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4309-L4310)

```diff
-         set highlightsExposure(VV) {
-           this._highlightsExposure = VV, this._dirty = !0
+         _enqueue(HH, BH) {
+           const LH = HH.retriesPerformedSoFar || 0;
+           HH.retriesPerformedSoFar = LH + 1;
+           const AH = Math.max(function(HH) {
+               const BH = 3e3 * Math.pow(2, HH),
+                 LH = BH / 2,
+                 AH = Math.min(18e5, BH),
+                 rH = (Math.random() - .5) * (AH - LH);
+               return Math.ceil(AH + rH)
+             }(LH), null != BH ? BH : 0),
+             rH = Date.now() + AH;
+           this._queue.push({
+             retryAt: rH,
+             requestOptions: HH
+           });
+           let SH = `Enqueued failed request for retry in ${AH}`;
+ ... (17 more added lines; see GitHub link above)
```

#### 259. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4312-L4313` → after: `L5532-L5588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R5532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L5532-L5588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L5532-L5588) · [Before (L4312-L4313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4312-L4313)

```diff
-         get midtonesHue() {
-           return this._midtonesHue
+         unload() {
+           this._poller && (clearTimeout(this._poller), this._poller = void 0), this._isPolling = !1, VL(JB) || (this._onlineListener && (JB.removeEventListener("online", this._onlineListener), this._onlineListener = void 0), this._offlineListener && (JB.removeEventListener("offli … [truncated]
+           for (const {
+               requestOptions: HH
+             }
+             of this._queue) try {
+             this._instance._send_request(xr(xr({}, HH), {}, {
+               callback: vL(HH.data) ? void 0 : HH.callback,
+               transport: "sendBeacon"
+             }))
+           } catch (AH) {
+             qh.error(AH)
+           }
+           this._queue = []
+         }
+       },
+ ... (41 more added lines; see GitHub link above)
```

#### 260. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4315-L4316` → after: `L5590-L5597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R5590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L5590-L5597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L5590-L5597) · [Before (L4315-L4316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4315-L4316)

```diff
-         set midtonesHue(VV) {
-           this._midtonesHue = VV, this._dirty = !0
+         _scrollPosition(HH) {
+           var BH, LH;
+           const AH = "y" === HH ? "scrollTop" : "scrollLeft";
+           if (this._scrollRoot) {
+             const HH = this.scrollElement();
+             return HH && HH[AH] || 0
+           }
+           return JB ? "y" === HH ? JB.scrollY || JB.pageYOffset || (null === (BH = JB.document) || void 0 === BH || null === (BH = BH.documentElement) || void 0 === BH ? void 0 : BH.scrollTop) || 0 : JB.scrollX || JB.pageXOffset || (null === (LH = JB.document) || void 0 === LH || … [truncated]
```

#### 261. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4318-L4319` → after: `L5599-L5600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R5599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L5599-L5600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L5599-L5600) · [Before (L4318-L4319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4318-L4319)

```diff
-         get midtonesDensity() {
-           return this._midtonesDensity
+         scrollY() {
+           return this._scrollPosition("y")
```

#### 262. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4321-L4322` → after: `L5602-L5603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R5602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L5602-L5603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L5602-L5603) · [Before (L4321-L4322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4321-L4322)

```diff
-         set midtonesDensity(VV) {
-           this._midtonesDensity = VV, this._dirty = !0
+         scrollX() {
+           return this._scrollPosition("x")
```

#### 263. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4324-L4325` → after: `L5605-L5652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R5605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L5605-L5652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L5605-L5652) · [Before (L4324-L4325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4324-L4325)

```diff
-         get midtonesSaturation() {
-           return this._midtonesSaturation
+       };
+     const DE = HH => HC(null == HH ? void 0 : HH.config.mask_personal_data_properties, null == HH ? void 0 : HH.config.custom_personal_data_properties, null == HH ? void 0 : HH.config.disable_capture_url_hashes);
+     var wE = class {
+         constructor(HH, BH, LH, AH) {
+           this._onSessionIdCallback = HH => {
+             const BH = this._getStored();
+             if (BH && BH.sessionId === HH) return;
+             const LH = {
+               sessionId: HH,
+               props: this._sessionSourceParamGenerator(this._instance)
+             };
+             this._persistence.register({
+               [vB]: LH
+             })
+           }, this._instance = HH, this._sessionIdManager = BH, this._persistence = LH, this._sessionSourceParamGenerator = AH || DE, this._sessionIdManager.onSessionId(this._onSessionIdCallback)
+         }
+ ... (32 more added lines; see GitHub link above)
```

#### 264. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4327-L4328` → after: `L5654-L5655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R5654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L5654-L5655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L5654-L5655) · [Before (L4327-L4328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4327-L4328)

```diff
-         set midtonesSaturation(VV) {
-           this._midtonesSaturation = VV, this._dirty = !0
+         constructor() {
+           this._events = {}
```

#### 265. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4330-L4331` → after: `L5657-L5860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R5657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L5657-L5860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L5657-L5860) · [Before (L4330-L4331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4330-L4331)

```diff
-         get midtonesExposure() {
-           return this._midtonesExposure
+       };
+     const dE = gh("[SessionId]"),
+       aE = 864e5;
+     var sE = class {
+       on(HH, BH) {
+         return this._eventEmitter.on(HH, BH)
+       }
+       constructor(HH, BH, LH) {
+         var AH;
+         if (this._lastPersistedActivityTimestamp = null, this._lastCookieSyncTimestamp = null, this._sessionIdChangedHandlers = [], this._beforeUnloadListener = void 0, this._destroyed = !1, this._eventEmitter = new ZE, this._sessionHasBeenIdleTooLong = (HH, BH) => !(!IL(HH) || ! … [truncated]
+         if ("always" === HH.config.cookieless_mode) throw new Error('SessionIdManager cannot be used with cookieless_mode="always"');
+         this._config = HH.config, this._persistence = HH.persistence, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._pendingBootstrapSession = void 0, this._sessionActivityTimestamp = null, this._sessionIdGenerator = BH || Lt, this._w … [truncated]
+         const rH = this._config.persistence_name || this._config.token;
+         if (this._sessionTimeoutMs = 1e3 * aL(this._config.session_idle_timeout_seconds || 1800, 60, 36e3, dE.createLogger("session_idle_timeout_seconds"), 1800), HH.register({
+             $configured_session_timeout_ms: this._sessionTimeoutMs
+           }), this._resetIdleTimer(), this._window_id_storage_key = "ph_" + rH + "_window_id", this._primary_window_exists_storage_key = "ph_" + rH + "_primary_window_exists", this._canUseSessionStorage()) {
+ ... (188 more added lines; see GitHub link above)
```

#### 266. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4333-L4334` → after: `L5862-L5886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R5862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L5862-L5886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L5862-L5886) · [Before (L4333-L4334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4333-L4334)

```diff
-         set midtonesExposure(VV) {
-           this._midtonesExposure = VV, this._dirty = !0
+       }))).apply(this, arguments)
+     }
+ 
+     function pE(HH, BH) {
+       let LH = `$survey_${BH}/${HH.id}`;
+       return HH.current_iteration && HH.current_iteration > 0 && (LH = `$survey_${BH}/${HH.id}/${HH.current_iteration}`), LH
+     }
+ 
+     function yE(HH) {
+       var BH;
+       return !!(null === (BH = HH.conditions) || void 0 === BH || null === (BH = BH.events) || void 0 === BH || null === (BH = BH.values) || void 0 === BH ? void 0 : BH.length)
+     }
+     const HX = (HH, BH) => {
+         if (!(HH => {
+             try {
+               new RegExp(HH)
+ ... (9 more added lines; see GitHub link above)
```

#### 267. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4336-L4337` → after: `L5888-L5964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R5888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L5888-L5964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L5888-L5964) · [Before (L4336-L4337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4336-L4337)

```diff
-         get shadowsHue() {
-           return this._shadowsHue
+       },
+       BX = HH => HH.toLowerCase(),
+       LX = {
+         exact: (HH, BH) => BH.some((BH => HH.some((HH => BH === HH)))),
+         is_not: (HH, BH) => BH.every((BH => HH.every((HH => BH !== HH)))),
+         regex: (HH, BH) => BH.some((BH => HH.some((HH => HX(BH, HH))))),
+         not_regex: (HH, BH) => BH.every((BH => HH.every((HH => !HX(BH, HH))))),
+         icontains: (HH, BH) => BH.map(BX).some((BH => HH.map(BX).some((HH => BH.includes(HH))))),
+         not_icontains: (HH, BH) => BH.map(BX).every((BH => HH.map(BX).every((HH => !BH.includes(HH))))),
+         gt: (HH, BH) => BH.some((BH => {
+           const LH = parseFloat(BH);
+           return !isNaN(LH) && HH.some((HH => LH > parseFloat(HH)))
+         })),
+         lt: (HH, BH) => BH.some((BH => {
+           const LH = parseFloat(BH);
+           return !isNaN(LH) && HH.some((HH => LH < parseFloat(HH)))
+ ... (61 more added lines; see GitHub link above)
```

#### 268. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4339-L4340` → after: `L5966-L5976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R5966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L5966-L5976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L5966-L5976) · [Before (L4339-L4340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4339-L4340)

```diff
-         set shadowsHue(VV) {
-           this._shadowsHue = VV, this._dirty = !0
+         if (rH && "api" === HH && zX.some((HH => 0 === BH.indexOf(HH)))) {
+           const HH = this._urlKey(AH);
+           if (HH) {
+             const BH = this.apiHost;
+             let LH = this._ingestionEndpoints;
+             (null == LH ? void 0 : LH.apiHost) === BH && LH.rewriteRequestPath === rH || (LH = {
+               apiHost: BH,
+               rewriteRequestPath: rH,
+               urls: new Set
+             }, this._ingestionEndpoints = LH), LH.urls.add(HH)
+           }
```

#### 269. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4342-L4343` → after: `L5978-L5999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R5978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L5978-L5999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L5978-L5999) · [Before (L4342-L4343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4342-L4343)

```diff
-         get shadowsDensity() {
-           return this._shadowsDensity
+         return AH
+       }
+       isIngestionEndpoint(HH) {
+         const BH = this._ingestionEndpoints,
+           LH = this._urlKey(HH);
+         return (null == BH ? void 0 : BH.apiHost) === this.apiHost && BH.rewriteRequestPath === this.instance.config.rewriteRequestPath && !!LH && BH.urls.has(LH)
+       }
+       endpointFor(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
+         if (BH && (BH = "/" === BH[0] ? BH : `/${BH}`), "ui" === HH) return this._prepareEndpoint(HH, BH, this.uiHost + BH);
+         if ("flags" === HH) return this._prepareEndpoint(HH, BH, this.flagsApiHost + BH);
+         if ("assets" === HH) {
+           const LH = this._staticAssetHostOverride(BH);
+           if (LH) return this._prepareEndpoint(HH, BH, `${LH}${BH}`)
+         }
+         if (this.region === SX) return this._prepareEndpoint(HH, BH, this.apiHost + BH);
+ ... (6 more added lines; see GitHub link above)
```

#### 270. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4345-L4346` → after: `L6001-L6010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R6001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L6001-L6010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L6001-L6010) · [Before (L4345-L4346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4345-L4346)

```diff
-         set shadowsDensity(VV) {
-           this._shadowsDensity = VV, this._dirty = !0
+       }
+     };
+     const EX = gh("[Surveys]"),
+       XX = HH => {
+         try {
+           const BH = (HH => ((HH, BH) => `seenSurvey_${function(HH){return HH.current_iteration&&HH.current_iteration>0?`${HH.id}_${HH.current_iteration}`:HH.id}(BH)}`)(0, HH))(HH);
+           if (localStorage.getItem(BH)) return;
+           localStorage.setItem(BH, "true")
+         } catch (HH) {
+           EX.error("Failed to persist survey seen state", HH)
```

#### 271. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4348-L4349` → after: `L6012-L6042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R6012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L6012-L6042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L6012-L6042) · [Before (L4348-L4349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4348-L4349)

```diff
-         get shadowsSaturation() {
-           return this._shadowsSaturation
+       },
+       GX = [vC, TC, PC],
+       YX = {
+         ignoreConditions: !1,
+         ignoreDelay: !1,
+         displayType: oC
+       },
+       uX = gh("[PostHog ExternalIntegrations]"),
+       QX = {
+         intercom: "intercom-integration",
+         crispChat: "crisp-chat-integration"
+       };
+     var WX = class {
+       constructor(HH) {
+         this._instance = HH
+       }
+ ... (15 more added lines; see GitHub link above)
```

#### 272. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4351-L4352` → after: `L6044-L6063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R6044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L6044-L6063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L6044-L6063) · [Before (L4351-L4352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4351-L4352)

```diff
-         set shadowsSaturation(VV) {
-           this._shadowsSaturation = VV, this._dirty = !0
+       }
+     };
+     const MX = "autocapture",
+       xX = "featureFlags",
+       vX = "logs",
+       PX = "surveys";
+     var TX = class {
+         constructor(HH) {
+           this._instance = HH
+         }
+         initialize() {}
+         get(HH) {
+           const BH = this._instance.persistence;
+           if ("string" == typeof HH) return null == BH ? void 0 : BH.get_property(HH);
+           const LH = {};
+           for (const AH of HH) {
+ ... (4 more added lines; see GitHub link above)
```

#### 273. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4354-L4355` → after: `L6065-L6097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R6065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L6065-L6097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L6065-L6097) · [Before (L4354-L4355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4354-L4355)

```diff
-         get shadowsExposure() {
-           return this._shadowsExposure
+         set(HH, BH) {
+           var LH;
+           null === (LH = this._instance.persistence) || void 0 === LH || LH.register("string" == typeof HH ? {
+             [HH]: BH
+           } : HH)
+         }
+         remove(HH) {
+           var BH;
+           null === (BH = this._instance.persistence) || void 0 === BH || BH.unregister(HH)
+         }
+       },
+       UX = class {
+         constructor(HH) {
+           this.instance = HH, this._logger = qh, this.kv = new TX(HH), this.onEvent = HH => fC(this.instance._addCaptureHook(((BH, LH) => {
+             if (LH) try {
+               HH({
+ ... (17 more added lines; see GitHub link above)
```

#### 274. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4357-L4358` → after: `L6099-L6100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R6099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L6099-L6100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L6099-L6100) · [Before (L4357-L4358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4357-L4358)

```diff
-         set shadowsExposure(VV) {
-           this._shadowsExposure = VV, this._dirty = !0
+         get logger() {
+           return this._logger
```

#### 275. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4360-L4361` → after: `L6102-L6103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R6102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L6102-L6103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L6102-L6103) · [Before (L4360-L4361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4360-L4361)

```diff
-         getClassName() {
-           return "ColorCurves"
+         get distinctId() {
+           return this.instance.get_distinct_id()
```

#### 276. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4363-L4364` → after: `L6105-L6107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R6105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L6105-L6107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L6105-L6107) · [Before (L4363-L4364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4363-L4364)

```diff
-         _getColorGradingDataToRef(eV, xV, JV, YV, UV) {
-           null != eV && (eV = VV._Clamp(eV, 0, 360), xV = VV._Clamp(xV, -100, 100), JV = VV._Clamp(JV, -100, 100), YV = VV._Clamp(YV, -100, 100), xV = VV._ApplyColorGradingSliderNonlinear(xV), xV *= .5, YV = VV._ApplyColorGradingSliderNonlinear(YV), xV < 0 && (xV *= -1, eV = (eV  … [truncated]
+         get anonymousId() {
+           var HH;
+           return null !== (HH = this.instance.get_property("$device_id")) && void 0 !== HH ? HH : this.distinctId
```

#### 277. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4366-L4369` → after: `L6109-L6111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R6109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L6109-L6111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L6109-L6111) · [Before (L4366-L4369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4366-L4369)

```diff
-         static _ApplyColorGradingSliderNonlinear(VV) {
-           VV /= 100;
-           let eV = Math.abs(VV);
-           return eV = Math.pow(eV, 2), VV < 0 && (eV *= -1), eV *= 100, eV
+         get deviceId() {
+           const HH = this.instance.get_property(OH);
+           return "string" == typeof HH ? HH : void 0
```

#### 278. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4371-L4401` → after: `L6113-L6116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R6113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L6113-L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L6113-L6116) · [Before (L4371-L4401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4371-L4401)

```diff
-         static _FromHSBToRef(eV, xV, JV, YV) {
-           let UV = VV._Clamp(eV, 0, 360);
-           const yV = VV._Clamp(xV / 100, 0, 1),
-             pV = VV._Clamp(JV / 100, 0, 1);
-           if (0 === yV) YV.r = pV, YV.g = pV, YV.b = pV;
-           else {
-             UV /= 60;
-             const VV = Math.floor(UV),
-               eV = UV - VV,
-               xV = pV * (1 - yV),
-               JV = pV * (1 - yV * eV),
-               QV = pV * (1 - yV * (1 - eV));
-             switch (VV) {
-               case 0:
-                 YV.r = pV, YV.g = QV, YV.b = xV;
-                 break;
- ... (15 more removed lines; see GitHub link above)
+         get library() {
+           return {
+             name: SH.LIB_NAME,
+             version: SH.LIB_VERSION
```

#### 279. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4405-L4406` → after: `L6119-L6121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R6119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L6119-L6121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L6119-L6121) · [Before (L4405-L4406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4405-L4406)

```diff
-         static _Clamp(VV, eV, xV) {
-           return Math.min(Math.max(VV, eV), xV)
+         get initialPersonProperties() {
+           var HH, BH;
+           return null !== (HH = null === (BH = this.instance.persistence) || void 0 === BH ? void 0 : BH.get_initial_props()) && void 0 !== HH ? HH : {}
```

#### 280. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4408-L4457` → after: `L6123-L6134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R6123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L6123-L6134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L6123-L6134) · [Before (L4408-L4457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4408-L4457)

```diff
-         clone() {
-           return FV.b.Clone((() => new VV), this)
-         }
-         serialize() {
-           return FV.b.Serialize(this)
-         }
-         _bind(VV) {
-           let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
-             xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
-             JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
-           this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturati … [truncated]
-         }
-       }, (() => {
-         const yV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         eV = [(0, YV.J)()], xV = [(0, YV.J)()], UV = [(0, YV.J)()], pV = [(0, YV.J)()], QV = [(0, YV.J)()], nV = [(0, YV.J)()], wV = [(0, YV.J)()], ZV = [(0, YV.J)()], vV = [(0, YV.J)()], rV = [(0, YV.J)()], kV = [(0, YV.J)()], bV = [(0, YV.J)()], (0, JV.i)(null, null, eV, {
-           kind: "field",
- ... (34 more removed lines; see GitHub link above)
+         get groups() {
+           return this.instance.getGroups()
+         }
+         get session() {
+           try {
+             var HH, BH, LH, AH, rH;
+             const SH = null === (HH = this.instance.sessionManager) || void 0 === HH ? void 0 : HH.checkAndGetSessionAndWindowId(!0);
+             return {
+               sessionId: null !== (BH = null == SH ? void 0 : SH.sessionId) && void 0 !== BH ? BH : "",
+               windowId: null !== (LH = null == SH ? void 0 : SH.windowId) && void 0 !== LH ? LH : "",
+               sessionStartTimestamp: null !== (AH = null == SH ? void 0 : SH.sessionStartTimestamp) && void 0 !== AH ? AH : 0,
+               lastActivityTimestamp: null !== (rH = null == SH ? void 0 : SH.lastActivityTimestamp) && void 0 !== rH ? rH : 0
```

#### 281. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4459-L4470` → after: `L6136-L6141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R6136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L6136-L6141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L6136-L6141) · [Before (L4459-L4470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4459-L4470)

```diff
-           },
-           metadata: yV
-         }, tV, PV), (0, JV.i)(null, null, pV, {
-           kind: "field",
-           name: "_globalExposure",
-           static: !1,
-           private: !1,
-           access: {
-             has: VV => "_globalExposure" in VV,
-             get: VV => VV._globalExposure,
-             set: (VV, eV) => {
-               VV._globalExposure = eV
+           } catch (HH) {
+             return {
+               sessionId: "",
+               windowId: "",
+               sessionStartTimestamp: 0,
+               lastActivityTimestamp: 0
```

#### 282. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4473-L4484` → after: `L6304-L6314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R6304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L6304-L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L6304-L6314) · [Before (L4473-L4484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4473-L4484)

```diff
-           metadata: yV
-         }, AV, NV), (0, JV.i)(null, null, QV, {
-           kind: "field",
-           name: "_highlightsHue",
-           static: !1,
-           private: !1,
-           access: {
-             has: VV => "_highlightsHue" in VV,
-             get: VV => VV._highlightsHue,
-             set: (VV, eV) => {
-               VV._highlightsHue = eV
-             }
+           get_device_id: HH => HH,
+           capture_performance: void 0,
+           name: "posthog",
+           bootstrap: {},
+           disable_compression: !1,
+           session_idle_timeout_seconds: 1800,
+           person_profiles: DB,
+           before_send: void 0,
+           get_current_url: void 0,
+           request_queue_config: {
+             flush_interval_ms: 3e3
```

#### 283. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4486-L4497` → after: `L6316-L6323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R6316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L6316-L6323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L6316-L6323) · [Before (L4486-L4497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4486-L4497)

```diff
-           metadata: yV
-         }, XV, MV), (0, JV.i)(null, null, nV, {
-           kind: "field",
-           name: "_highlightsDensity",
-           static: !1,
-           private: !1,
-           access: {
-             has: VV => "_highlightsDensity" in VV,
-             get: VV => VV._highlightsDensity,
-             set: (VV, eV) => {
-               VV._highlightsDensity = eV
-             }
+           error_tracking: {},
+           _onCapture: bX
+         }, (HH => ({
+           rageclick: HH && HH >= "2026-05-30" ? {
+             content_ignorelist: wt,
+             ignore_text_selection: !0
+           } : !HH || "2025-11-30" > HH || {
+             content_ignorelist: !0
```

#### 284. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4499-L4509` → after: `L6325-L6417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R6325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L6325-L6417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L6325-L6417) · [Before (L4499-L4509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4499-L4509)

```diff
-           metadata: yV
-         }, zV, GV), (0, JV.i)(null, null, wV, {
-           kind: "field",
-           name: "_highlightsSaturation",
-           static: !1,
-           private: !1,
-           access: {
-             has: VV => "_highlightsSaturation" in VV,
-             get: VV => VV._highlightsSaturation,
-             set: (VV, eV) => {
-               VV._highlightsSaturation = eV
+           capture_pageview: !HH || "2025-05-24" > HH || "history_change",
+           session_recording: RX(HH),
+           external_scripts_inject_target: HH && HH >= "2026-01-30" ? "head" : "body",
+           internal_or_test_user_hostname: HH && HH >= "2026-01-30" ? /^(localhost|127\.0\.0\.1)$/ : void 0,
+           persistence_save_debounce_ms: HH && HH >= "2026-05-30" ? 250 : 0,
+           split_storage: !(!HH || "2026-05-30" > HH),
+           detect_google_search_app: !(!HH || "2026-05-30" > HH),
+           disable_capture_url_hashes: !(!HH || "2026-06-25" > HH),
+           cookieWinsOnConflict: !(!HH || "unset" === HH || "2026-08-29" > HH)
+         }))(HH))
+       },
+       nX = [
+         ["process_person", "person_profiles"],
+         ["xhr_headers", "request_headers"],
+         ["cookie_name", "persistence_name"],
+         ["disable_cookie", "disable_persistence"],
+ ... (77 more added lines; see GitHub link above)
```

#### 285. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4511-L4522` → after: `L6419-L6432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R6419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L6419-L6432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L6419-L6432) · [Before (L4511-L4522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4511-L4522)

```diff
-           },
-           metadata: yV
-         }, WV, RV), (0, JV.i)(null, null, ZV, {
-           kind: "field",
-           name: "_highlightsExposure",
-           static: !1,
-           private: !1,
-           access: {
-             has: VV => "_highlightsExposure" in VV,
-             get: VV => VV._highlightsExposure,
-             set: (VV, eV) => {
-               VV._highlightsExposure = eV
+           }(this, HH), this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this._initialPageviewCaptured = !1, this._visibilityStateListener = null, this._initialPersonProfilesConfig = null, this._cachedPersonProperties = null, this.scrollManager … [truncated]
+           const LH = null !== (BH = HH.__defaultExtensionClasses) && void 0 !== BH ? BH : {};
+           this.featureFlags = LH.featureFlags && new LH.featureFlags(this), this.toolbar = LH.toolbar && new LH.toolbar(this), this.surveys = LH.surveys && new LH.surveys(this), this.conversations = LH.conversations && new LH.conversations(this), this.logs = LH.logs && new LH.log … [truncated]
+             set: (HH, BH, LH) => {
+               const AH = OL(HH) ? {
+                 [HH]: BH
+               } : HH;
+               this.setPersonProperties(AH), null == LH || LH({})
+             },
+             set_once: (HH, BH, LH) => {
+               const AH = OL(HH) ? {
+                 [HH]: BH
+               } : HH;
+               this.setPersonProperties(void 0, AH), null == LH || LH({})
```

#### 286. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4524-L4535` → after: `L6434-L6503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R6434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L6434-L6503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L6434-L6503) · [Before (L4524-L4535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4524-L4535)

```diff
-           },
-           metadata: yV
-         }, gV, DV), (0, JV.i)(null, null, vV, {
-           kind: "field",
-           name: "_midtonesHue",
-           static: !1,
-           private: !1,
-           access: {
-             has: VV => "_midtonesHue" in VV,
-             get: VV => VV._midtonesHue,
-             set: (VV, eV) => {
-               VV._midtonesHue = eV
+           }, this.on("eventCaptured", (HH => qh.info(`send "${null==HH?void 0:HH.event}"`, HH)))
+         }
+         init(BH, LH, AH) {
+           if (AH && AH !== NX) {
+             var rH;
+             const SH = null !== (rH = VX[AH]) && void 0 !== rH ? rH : new HH;
+             return SH._init(BH, LH, AH), VX[AH] = SH, VX[NX][AH] = SH, SH
+           }
+           return this._init(BH, LH, AH)
+         }
+         _init(HH) {
+           let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+             LH = arguments.length > 2 ? arguments[2] : void 0;
+           var AH, rH, hH;
+           const tH = OL(HH) ? HH.trim() : "";
+           if (!tH) return qh.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
+ ... (54 more added lines; see GitHub link above)
```

#### 287. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4537-L4548` → after: `L6505-L6546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R6505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L6505-L6546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L6505-L6546) · [Before (L4537-L4548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4537-L4548)

```diff
-           },
-           metadata: yV
-         }, iV, CV), (0, JV.i)(null, null, rV, {
-           kind: "field",
-           name: "_midtonesDensity",
-           static: !1,
-           private: !1,
-           access: {
-             has: VV => "_midtonesDensity" in VV,
-             get: VV => VV._midtonesDensity,
-             set: (VV, eV) => {
-               VV._midtonesDensity = eV
+           }
+           if (WH) this.register_once({
+             distinct_id: bB,
+             $device_id: null
+           }, "");
+           else if (!this.get_distinct_id()) {
+             const HH = this.config.get_device_id(Lt());
+             this.register_once({
+               distinct_id: HH,
+               $device_id: HH
+             }, ""), this.persistence.set_property(xB, nB)
+           }
+           return ah(JB, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), {
+             passive: !1
+           }), ah(JB, "pageshow", (() => {
+             var HH;
+ ... (26 more added lines; see GitHub link above)
```

#### 288. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4550-L4561` → after: `L6548-L6601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R6548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L6548-L6601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L6548-L6601) · [Before (L4550-L4561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4550-L4561)

```diff
-           },
-           metadata: yV
-         }, aV, oV), (0, JV.i)(null, null, kV, {
-           kind: "field",
-           name: "_midtonesSaturation",
-           static: !1,
-           private: !1,
-           access: {
-             has: VV => "_midtonesSaturation" in VV,
-             get: VV => VV._midtonesSaturation,
-             set: (VV, eV) => {
-               VV._midtonesSaturation = eV
+           }))) : this._extensions.push(HH)
+         }
+         _enrollFeatureFlags() {
+           var BH, LH, AH, rH = this;
+           const SH = null !== (BH = null === (LH = this.config.__extensionClasses) || void 0 === LH ? void 0 : LH.featureFlags) && void 0 !== BH ? BH : null === (AH = HH.__defaultExtensionClasses) || void 0 === AH ? void 0 : AH.featureFlags;
+           var hH, tH, zH;
+           if (SH)
+             if (this.featureFlags && this.featureFlags instanceof SH || (null === (hH = this._featureFlagsReloadingUnsubscribe) || void 0 === hH || hH.call(this), this._featureFlagsReloadingUnsubscribe = void 0, this.featureFlags = new SH(this)), PL(this.featureFlags.onReloading) … [truncated]
+               if (!this._featureFlagsReloadingUnsubscribe) {
+                 this._featureFlagsReloadingUnsubscribe = this.featureFlags.onReloading((() => {
+                   this._internalEventEmitter.emit("featureFlagsReloading", !0)
+                 }));
+                 const HH = this.featureFlags;
+                 DL((function*() {
+                   try {
+                     yield HH.setup(rH._getBrowserClientAdapter())
+ ... (38 more added lines; see GitHub link above)
```

#### 289. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4563-L4574` → after: `L6603-L6614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R6603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L6603-L6614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L6603-L6614) · [Before (L4563-L4574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4563-L4574)

```diff
-           },
-           metadata: yV
-         }, cV, hV), (0, JV.i)(null, null, bV, {
-           kind: "field",
-           name: "_midtonesExposure",
-           static: !1,
-           private: !1,
-           access: {
-             has: VV => "_midtonesExposure" in VV,
-             get: VV => VV._midtonesExposure,
-             set: (VV, eV) => {
-               VV._midtonesExposure = eV
+           })), this._processInitTaskQueue(rH, LH)
+         }
+         _processInitTaskQueue(HH, BH) {
+           for (; HH.length > 0;) {
+             if (this.config.__preview_deferred_init_extensions && performance.now() - BH >= 30 && HH.length > 0) return void(this._extensionInitTimeout = setTimeout((() => {
+               this._extensionInitTimeout = void 0, this._processInitTaskQueue(HH, BH)
+             }), 0));
+             const LH = HH.shift();
+             if (LH) try {
+               LH()
+             } catch (HH) {
+               qh.error("Error initializing extension:", HH)
```

#### 290. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4715-L4753` → after: `L6617-L6707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R6617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L6617-L6707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L6617-L6707) · [Before (L4715-L4753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4715-L4753)

```diff
-           set whiteBalanceEnabled(VV) {
-             this._whiteBalanceEnabled !== VV && (this._whiteBalanceEnabled = VV, this._updateParameters())
-           }
-           get temperature() {
-             return this._temperature
-           }
-           set temperature(VV) {
-             VV = Number.isNaN(VV) ? wV : Math.max(VV, wV), this._temperature !== VV && (this._temperature = VV, this._updateParameters())
-           }
-           get tint() {
-             return this._tint
-           }
-           set tint(VV) {
-             VV = (0, pV.Clamp)(VV, -150, ZV), this._tint !== VV && (this._tint = VV, this._updateParameters())
-           }
-           _getWhiteBalanceMatrix() {
- ... (23 more removed lines; see GitHub link above)
+           const LH = Math.round(performance.now() - BH);
+           this.register_for_session({
+             [mB]: this.config.__preview_deferred_init_extensions ? "deferred" : "synchronous",
+             [oB]: LH
+           }), this.config.__preview_deferred_init_extensions && qh.info(`PostHog extensions initialized (${LH}ms)`)
+         }
+         _onRemoteConfig(HH) {
+           if (!yB || !yB.body) return qh.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout((() => {
+             this._onRemoteConfig(HH)
+           }), 500);
+           if (this.config.__preview_deferred_init_extensions && (this._pendingRemoteConfig = HH), this._lastRemoteConfig = HH, this.compression = void 0, HH.ok) {
+             var BH;
+             const LH = HH.config;
+             LH.supportedCompression && !this.config.disable_compression && (this.compression = GL(LH.supportedCompression, WC.GZipJS) ? WC.GZipJS : GL(LH.supportedCompression, WC.Base64) ? WC.Base64 : void 0), (null === (BH = LH.analytics) || void 0 === BH ? void 0 : BH.endpoint) … [truncated]
+           }
+           this.set_config({
+ ... (75 more added lines; see GitHub link above)
```

#### 291. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4755-L4756` → after: `L6709-L6734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R6709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L6709-L6734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L6709-L6734) · [Before (L4755-L4756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4755-L4756)

```diff
-           get vignetteEnabled() {
-             return this._vignetteEnabled
+         }
+         push(BH) {
+           if (OX > 0 && vL(BH) && OL(BH[0])) {
+             const LH = HH.prototype[BH[0]];
+             PL(LH) && LH.apply(this, BH.slice(1))
+           } else this._execute_array([BH])
+         }
+         get _facebookClickIdChannel() {
+           return {
+             property: oH,
+             persistenceKey: IH,
+             cookieName: "_fbc",
+             pattern: eX,
+             register: (HH, BH) => {
+               var LH;
+               return null === (LH = this.persistence) || void 0 === LH ? void 0 : LH.register({
+ ... (10 more added lines; see GitHub link above)
```

#### 292. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4758-L4759` → after: `L6736-L6755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R6736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L6736-L6755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L6736-L6755) · [Before (L4758-L4759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4758-L4759)

```diff
-           set vignetteEnabled(VV) {
-             this._vignetteEnabled !== VV && (this._vignetteEnabled = VV, this._updateParameters())
+         }
+         get _facebookBrowserIdChannel() {
+           return {
+             property: fH,
+             persistenceKey: lH,
+             cookieName: "_fbp",
+             pattern: qX,
+             register: (HH, BH) => {
+               var LH;
+               return null === (LH = this.persistence) || void 0 === LH ? void 0 : LH.register({
+                 [lH]: {
+                   value: HH,
+                   delivered: BH
+                 }
+               })
+             },
+ ... (4 more added lines; see GitHub link above)
```

#### 293. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4761-L4762` → after: `L6757-L6926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R6757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L6757-L6926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L6757-L6926) · [Before (L4761-L4762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4761-L4762)

```diff
-           get ditheringEnabled() {
-             return this._ditheringEnabled
+         }
+         _getPersistedMetaIdentifier(HH) {
+           var BH;
+           const LH = null === (BH = this.persistence) || void 0 === BH ? void 0 : BH.get_property(HH.persistenceKey);
+           return OL(LH) && HH.pattern.test(LH) ? {
+             value: LH,
+             delivered: !1
+           } : TL(LH) && OL(LH.value) && HH.pattern.test(LH.value) ? {
+             value: LH.value,
+             delivered: !0 === LH.delivered
+           } : void 0
+         }
+         _storeMetaIdentifier(HH, BH, LH) {
+           return BH === (null == LH ? void 0 : LH.value) ? {
+             value: BH,
+             pending: !LH.delivered
+ ... (154 more added lines; see GitHub link above)
```

#### 294. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4764-L4765` → after: `L6928-L7076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R6928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L6928-L7076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L6928-L7076) · [Before (L4764-L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4764-L4765)

```diff
-           set ditheringEnabled(VV) {
-             this._ditheringEnabled !== VV && (this._ditheringEnabled = VV, this._updateParameters())
+           const VH = xr(xr({}, XH.properties.$set), XH.$set);
+           if (UL(VH) || this.setPersonPropertiesForFlags(VH), !mL(this.config.before_send)) {
+             const HH = this._runBeforeSend(XH);
+             if (!HH) return;
+             XH = HH, XH.uuid = zr(XH.uuid, Lt)
+           }
+           this.sessionRecording && !this._replayDebugPropertiesPaused && KX(HH) && (this._replayDebugPropertiesPaused = !0, setTimeout((() => this._replayDebugPropertiesPaused = !1), 3e4));
+           const OH = vH.filter((HH => {
+             let {
+               channel: BH,
+               update: LH
+             } = HH;
+             var AH, rH, SH;
+             const hH = null !== (AH = null === (rH = XH.$set) || void 0 === rH ? void 0 : rH[BH.property]) && void 0 !== AH ? AH : TL(null === (SH = XH.properties) || void 0 === SH ? void 0 : SH.$set) ? XH.properties.$set[BH.property] : void 0;
+             return (null == LH ? void 0 : LH.pending) && hH === LH.value
+           }));
+ ... (133 more added lines; see GitHub link above)
```

#### 295. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4767-L4768` → after: `L7078-L7088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R7078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L7078-L7088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L7078-L7088) · [Before (L4767-L4768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4767-L4768)

```diff
-           get ditheringIntensity() {
-             return this._ditheringIntensity
+           this.sessionPropsManager && jh(tH, this.sessionPropsManager.getSessionProps());
+           try {
+             var CH;
+             if (this.sessionRecording) {
+               const BH = this.sessionRecording.sdkDebugProperties,
+                 LH = !this._replayDebugPropertiesPaused && KX(HH);
+               for (const HH in BH)(LH || GL(fX, HH)) && (tH[HH] = BH[HH])
+             }
+             tH.$sdk_debug_retry_queue_size = null === (CH = this._retryQueue) || void 0 === CH ? void 0 : CH.length
+           } catch (HH) {
+             tH.$sdk_debug_error_capturing_properties = String(HH)
```

#### 296. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4770-L4771` → after: `L7090-L7530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R7090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L7090-L7530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L7090-L7530) · [Before (L4770-L4771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4770-L4771)

```diff
-           set ditheringIntensity(VV) {
-             this._ditheringIntensity !== VV && (this._ditheringIntensity = VV, this._updateParameters())
+           let EH;
+           if (this.requestRouter.region === SX && (tH.$lib_custom_api_host = this.config.api_host), EH = "$pageview" !== HH || SH ? "$pageleave" !== HH || SH ? this.pageViewManager.doEvent() : this.pageViewManager.doPageLeave(LH) : this.pageViewManager.doPageView(LH, AH), tH = jh … [truncated]
+             const HH = LH.getTime() - hH;
+             tH.$duration = parseFloat((HH / 1e3).toFixed(3))
+           }
+           SL && this.config.opt_out_useragent_filter && (tH.$browser_type = this._is_bot() ? "bot" : "browser");
+           const XH = this.persistence.properties(),
+             GH = this.sessionPersistence.properties(),
+             YH = tH.$groups,
+             uH = XH.$groups;
+           TL(YH) && !UL(YH) && (tH.$groups = xr(xr({}, TL(uH) ? uH : {}), YH)), Rh(["$referrer", "$referring_domain"], (HH => {
+             HH in XH && delete GH[HH]
+           }));
+           const QH = {};
+           if (this._extensionEventPropertyProducers.length > 0)
+             for (const rH of this._extensionEventPropertyProducers.slice()) try {
+ ... (425 more added lines; see GitHub link above)
```

#### 297. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4773-L4774` → after: `L7532-L7605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R7532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L7532-L7605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L7532-L7605) · [Before (L4773-L4774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4773-L4774)

```diff
-           get skipFinalColorClamp() {
-             return this._skipFinalColorClamp
+           return AH
+         }
+         alias(HH, BH) {
+           return HH === this.get_property("$people_distinct_id") ? (qh.critical("Attempting to create alias for existing People user - aborting."), -2) : this._requirePersonProcessing("posthog.alias") ? (VL(BH) && (BH = this.get_distinct_id()), HH !== BH ? (this._register_single( … [truncated]
+             alias: HH,
+             distinct_id: BH
+           })) : (qh.warn("alias matches current distinct_id - skipping api call."), this.identify(HH), -1)) : void 0
+         }
+         set_config(HH) {
+           const BH = xr({}, this.config);
+           if (TL(HH)) {
+             var LH, AH, rH, hH, tH, zH, CH, EH, XH, GH, YH, uH, QH, WH;
+             jh(this.config, FX(HH));
+             const TH = this._is_persistence_disabled();
+             if (this.persistence) {
+               const HH = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence;
+ ... (58 more added lines; see GitHub link above)
```

#### 298. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4776-L4777` → after: `L7607-L7765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R7607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L7607-L7765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L7607-L7765) · [Before (L4776-L4777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4776-L4777)

```diff
-           set skipFinalColorClamp(VV) {
-             this._skipFinalColorClamp !== VV && (this._skipFinalColorClamp = VV, this._updateParameters())
+         }
+         addExceptionStep(HH, BH) {
+           var LH;
+           null === (LH = this.exceptions) || void 0 === LH || LH.addExceptionStep(HH, BH)
+         }
+         captureLog(HH) {
+           var BH;
+           null === (BH = this.logs) || void 0 === BH || BH.captureLog(HH)
+         }
+         get logger() {
+           var BH, LH;
+           return null !== (BH = null === (LH = this.logs) || void 0 === LH ? void 0 : LH.logger) && void 0 !== BH ? BH : HH._noopLogger
+         }
+         startExceptionAutocapture(HH) {
+           this.set_config({
+             capture_exceptions: null == HH || HH
+ ... (143 more added lines; see GitHub link above)
```

#### 299. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4779-L4780` → after: `L7767-L7863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R7767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L7767-L7863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L7767-L7863) · [Before (L4779-L4780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4779-L4780)

```diff
-           get applyByPostProcess() {
-             return this._applyByPostProcess
+           for (const SH of LH)
+             if (rH.properties && mL(rH.properties[SH])) return qh.warn(`Event '${HH.event}' had its '${SH}' property removed in a beforeSend function. This property is required for ingestion, so the event will be dropped.`), null;
+           return rH
+         }
+         getPageViewId() {
+           var HH;
+           return null === (HH = this.pageViewManager._currentPageview) || void 0 === HH ? void 0 : HH.pageViewId
+         }
+         captureTraceFeedback(HH, BH) {
+           this.capture("$ai_feedback", {
+             $ai_trace_id: String(HH),
+             $ai_feedback_text: BH
+           })
+         }
+         captureTraceMetric(HH, BH, LH) {
+           this.capture("$ai_metric", {
+ ... (81 more added lines; see GitHub link above)
```

#### 300. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4782-L4783` → after: `L7865-L7881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R7865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L7865-L7881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L7865-L7881) · [Before (L4782-L4783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4782-L4783)

```diff
-           set applyByPostProcess(VV) {
-             this._applyByPostProcess !== VV && (this._applyByPostProcess = VV, this._updateParameters())
+           return !1
+         }
+         _trackPointer(HH) {
+           if (!this.isEnabled || "pointercancel" === HH.type) return void this._clearPointer();
+           if ("pointerdown" === HH.type) {
+             this._clearPointer();
+             const LH = gt(HH);
+             var BH;
+             return void(HH.isPrimary && 0 === HH.button && !HH.ctrlKey && LH && mt(LH) && (this._pointerDown = {
+               target: LH,
+               excluded: this._isExcludedPointerTarget(LH),
+               id: HH.pointerId,
+               x: HH.clientX,
+               y: HH.clientY,
+               released: !1,
+               distinctId: null === (BH = this._client) || void 0 === BH ? void 0 : BH.distinctId
+ ... (1 more added lines; see GitHub link above)
```

#### 301. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4785-L4831` → after: `L7883-L7940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R7883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L7883-L7940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L7883-L7940) · [Before (L4785-L4831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4785-L4831)

```diff
-           get isEnabled() {
-             return this._isEnabled
-           }
-           set isEnabled(VV) {
-             this._isEnabled !== VV && (this._isEnabled = VV, this._updateParameters())
-           }
-           _updateParameters() {
-             this.onUpdateParameters.notifyObservers(this)
-           }
-           getClassName() {
-             return "ImageProcessingConfiguration"
-           }
-           prepareDefines(eV) {
-             if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return eV.WHITEBALANCE = !1, eV.VIGNETTE = !1, eV.TONEMAPPING = 0, eV.CONTRAST = !1, eV.EXPOSURE = !1, eV.COLORCURVES = !1, eV.COLORGRADING = !1, eV. … [truncated]
-             if (eV.WHITEBALANCE = this._whiteBalanceEnabled, eV.VIGNETTE = this.vignetteEnabled, eV.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === VV._VIGNETTEMODE_MULTIPLY, eV.VIGNETTEBLENDMODEOPAQUE = !eV.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this … [truncated]
-               case VV.TONEMAPPING_KHR_PBR_NEUTRAL:
- ... (31 more removed lines; see GitHub link above)
+           const LH = this._pointerDown;
+           LH && (HH.pointerId !== LH.id || Math.abs(HH.clientX - LH.x) > 5 || Math.abs(HH.clientY - LH.y) > 5 ? this._clearPointer() : "pointerup" === HH.type && (LH.released = !0, this._pointerExpiry = setTimeout((() => this._clearPointer()), 0)))
+         }
+         _recoverClickTarget(HH) {
+           var BH;
+           const LH = this._pointerDown;
+           this._clearPointer();
+           const AH = gt(HH);
+           if ((null == LH ? void 0 : LH.released) && LH.target.isConnected && LH.distinctId === (null === (BH = this._client) || void 0 === BH ? void 0 : BH.distinctId) && HH.pointerId === LH.id && (HH.detail > 0 || "touch" === HH.pointerType || "pen" === HH.pointerType) && 0 === … [truncated]
+             var rH;
+             if (LH.excluded) return null;
+             const HH = null !== (rH = this._refreshConfig().css_selector_ignorelist) && void 0 !== rH ? rH : Ft;
+             return [AH, null == yB ? void 0 : yB.documentElement, null == yB ? void 0 : yB.body].some((BH => {
+               if (!BH) return !1;
+               const LH = ct(BH);
+               return GL(LH, "ph-no-capture") || GL(LH, "ph-sensitive") || !rz(BH) || Sz(BH) || HH.some((HH => Rt(BH, HH)))
+ ... (42 more added lines; see GitHub link above)
```

#### 302. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4833-L4909` → after: `L7942-L7959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R7942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L7942-L7959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L7942-L7959) · [Before (L4833-L4909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4833-L4909)

```diff
-           }
-           clone() {
-             return FV.b.Clone((() => new VV), this)
-           }
-           serialize() {
-             return FV.b.Serialize(this)
-           }
-           static get VIGNETTEMODE_MULTIPLY() {
-             return this._VIGNETTEMODE_MULTIPLY
-           }
-           static get VIGNETTEMODE_OPAQUE() {
-             return this._VIGNETTEMODE_OPAQUE
-           }
-         }, (() => {
-           const UV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-           eV = [(0, YV.l)()], xV = [(0, YV.J)()], nV = [(0, YV.F)("colorGradingTexture")], rV = [(0, YV.J)()], kV = [(0, YV.J)()], bV = [(0, YV.J)()], BV = [(0, YV.J)()], TV = [(0, YV.J)()], MV = [(0, YV.J)()], zV = [(0, YV.J)()], GV = [(0, YV.J)()], WV = [(0, YV.J)()], RV = [(0, … [truncated]
- ... (61 more removed lines; see GitHub link above)
+           };
+           if (ah(JB, "blur", HH), ah(yB, "submit", HH, {
+               capture: !0
+             }), ah(yB, "change", HH, {
+               capture: !0
+             }), ah(yB, "click", HH, {
+               capture: !0
+             }), Rh(["pointerdown", "pointermove", "pointerup", "pointercancel"], (BH => {
+               ah(yB, BH, HH, {
+                 capture: !0
+               })
+             })), this._refreshConfig().capture_copied_text) {
+             const HH = this._copiedTextHandler = HH => {
+               HH = HH || (null == JB ? void 0 : JB.event);
+               try {
+                 this._captureEvent(HH, dX)
+ ... (2 more added lines; see GitHub link above)
```

#### 303. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4911-L4922` → after: `L7961-L8039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R7961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L7961-L8039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L7961-L8039) · [Before (L4911-L4922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4911-L4922)

```diff
-             },
-             metadata: UV
-           }, Je, Ye), (0, JV.i)(null, null, bV, {
-             kind: "field",
-             name: "_colorGradingBGR",
-             static: !1,
-             private: !1,
-             access: {
-               has: VV => "_colorGradingBGR" in VV,
-               get: VV => VV._colorGradingBGR,
-               set: (VV, eV) => {
-                 VV._colorGradingBGR = eV
+             };
+             ah(yB, "copy", HH, {
+               capture: !0
+             }), ah(yB, "cut", HH, {
+               capture: !0
+             }), ah(yB, "paste", HH, {
+               capture: !0
+             })
+           }
+         }
+         _removeDomEventHandlers() {
+           this._clearPointer(), this._domEventHandler && (null == JB || JB.removeEventListener("blur", this._domEventHandler), Rh(["pointerdown", "pointermove", "pointerup", "pointercancel"], (HH => {
+             null == yB || yB.removeEventListener(HH, this._domEventHandler, !0)
+           })), null == yB || yB.removeEventListener("submit", this._domEventHandler, !0), null == yB || yB.removeEventListener("change", this._domEventHandler, !0), null == yB || yB.removeEventListener("click", this._domEventHandler, !0), this._domEventHandler = void 0), this._co … [truncated]
+         }
+         startIfEnabled() {
+ ... (63 more added lines; see GitHub link above)
```

#### 304. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4924-L4935` → after: `L8041-L8069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8041-L8069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8041-L8069) · [Before (L4924-L4935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4924-L4935)

```diff
-             },
-             metadata: UV
-           }, Ue, ye), (0, JV.i)(null, null, BV, {
-             kind: "field",
-             name: "_exposure",
-             static: !1,
-             private: !1,
-             access: {
-               has: VV => "_exposure" in VV,
-               get: VV => VV._exposure,
-               set: (VV, eV) => {
-                 VV._exposure = eV
+               const {
+                 parentIsUsefulElement: tH,
+                 targetElementList: zH
+               } = Az(HH, AH);
+               if (! function(HH, BH) {
+                   const LH = null == BH ? void 0 : BH.element_allowlist;
+                   if (VL(LH)) return !0;
+                   for (const AH of HH)
+                     if (LH.some((HH => AH.tagName.toLowerCase() === HH))) return !0;
+                   return !1
+                 }(zH, LH)) return !1;
+               if (!jt(zH, null == LH ? void 0 : LH.css_selector_allowlist)) return !1;
+               if (jt(zH, null !== (hH = null == LH ? void 0 : LH.css_selector_ignorelist) && void 0 !== hH ? hH : Ft)) return !1;
+               try {
+                 const LH = JB.getComputedStyle(HH);
+                 if (LH && "pointer" === LH.getPropertyValue("cursor") && "click" === BH.type) return !0
+ ... (13 more added lines; see GitHub link above)
```

#### 305. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4937-L4948` → after: `L8071-L8073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8071-L8073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8071-L8073) · [Before (L4937-L4948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4937-L4948)

```diff
-             },
-             metadata: UV
-           }, pe, Qe), (0, JV.i)(null, null, TV, {
-             kind: "field",
-             name: "_toneMappingEnabled",
-             static: !1,
-             private: !1,
-             access: {
-               has: VV => "_toneMappingEnabled" in VV,
-               get: VV => VV._toneMappingEnabled,
-               set: (VV, eV) => {
-                 VV._toneMappingEnabled = eV
+             }(AH, HH, tH, hH, hH ? ["copy", "cut", "paste"] : void 0, {
+               config: {
+                 get_current_url: rH.getCurrentUrl
```

#### 306. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4950-L4961` → after: `L8075-L8162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8075-L8162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8075-L8162) · [Before (L4950-L4961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4950-L4961)

```diff
-             },
-             metadata: UV
-           }, ne, we), (0, JV.i)(null, null, MV, {
-             kind: "field",
-             name: "_toneMappingType",
-             static: !1,
-             private: !1,
-             access: {
-               has: VV => "_toneMappingType" in VV,
-               get: VV => VV._toneMappingType,
-               set: (VV, eV) => {
-                 VV._toneMappingType = eV
+             })) {
+             var zH;
+             const {
+               props: LH,
+               explicitNoCapture: SH,
+               target: hH
+             } = function(HH, BH) {
+               let {
+                 e: LH,
+                 maskAllElementAttributes: AH,
+                 maskAllText: rH,
+                 elementAttributeIgnoreList: SH,
+                 elementsChainAsString: hH,
+                 disableCaptureUrlHashes: tH
+               } = BH;
+               var zH, CH;
+ ... (72 more added lines; see GitHub link above)
```

#### 307. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4963-L4974` → after: `L8164-L8250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8164-L8250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8164-L8250) · [Before (L4963-L4974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4963-L4974)

```diff
-             },
-             metadata: UV
-           }, Ze, ve), (0, JV.i)(null, null, zV, {
-             kind: "field",
-             name: "_contrast",
-             static: !1,
-             private: !1,
-             access: {
-               has: VV => "_contrast" in VV,
-               get: VV => VV._contrast,
-               set: (VV, eV) => {
-                 VV._contrast = eV
+               return {
+                 props: jh((UH = LH.type, {
+                   $event_type: UH,
+                   $ce_version: 1
+                 }), hH ? {} : {
+                   $elements: uH
+                 }, {
+                   $elements_chain: (TH = uH, vL(TH) ? function(HH) {
+                     return HH.map((HH => {
+                       var BH, LH;
+                       let AH = "";
+                       if (HH.tag_name && (AH += HH.tag_name), HH.attr_class) {
+                         HH.attr_class.sort();
+                         for (const BH of HH.attr_class) AH += `.${BH.replace(/"/g,"")}`
+                       }
+                       const rH = xr(xr(xr(xr({}, HH.text ? {
+ ... (71 more added lines; see GitHub link above)
```

#### 308. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4976-L5220` → after: `L8252-L8276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8252-L8276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8252-L8276) · [Before (L4976-L5220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4976-L5220)

```diff
-             },
-             metadata: UV
-           }, re, ke), (0, JV.i)(null, null, GV, {
-             kind: "field",
-             name: "_whiteBalanceEnabled",
-             static: !1,
-             private: !1,
-             access: {
-               has: VV => "_whiteBalanceEnabled" in VV,
-               get: VV => VV._whiteBalanceEnabled,
-               set: (VV, eV) => {
-                 VV._whiteBalanceEnabled = eV
-               }
-             },
-             metadata: UV
-           }, be, Ee), (0, JV.i)(null, null, WV, {
- ... (229 more removed lines; see GitHub link above)
+               LH.$copy_type = BH
+             }
+             return null === (zH = this._client) || void 0 === zH || zH.capture(BH, LH), !0
+           }
+         }
+         isBrowserSupported() {
+           return PL(null == yB ? void 0 : yB.querySelectorAll)
+         }
+       },
+       pX = class {
+         constructor(HH) {
+           this._instance = HH
+         }
+         refresh(HH) {
+           const BH = this._instance.config,
+             LH = TL(BH.autocapture) ? BH.autocapture : void 0;
+ ... (9 more added lines; see GitHub link above)
```

#### 309. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5222-L5224` → after: `L8278-L8308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8278-L8308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8278-L8308) · [Before (L5222-L5224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5222-L5224)

```diff
-     function WV(VV) {
-       const eV = FV.b.Parse((() => new zV), VV, null, null);
-       return void 0 !== VV.vignetteCentreX && (eV.vignetteCenterX = VV.vignetteCentreX), void 0 !== VV.vignetteCentreY && (eV.vignetteCenterY = VV.vignetteCentreY), eV
+     function LG(HH, BH, LH) {
+       try {
+         if (!(BH in HH)) return HG;
+         const AH = {
+             next: HH[BH]
+           },
+           rH = LH((function() {
+             for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
+             return AH.next.apply(this, BH)
+           }));
+         return PL(rH) && (rH.prototype = rH.prototype || {}, Object.defineProperties(rH, {
+           __posthog_wrapped__: {
+             enumerable: !1,
+             value: !0
+           },
+           __posthog_layer__: {
+ ... (15 more added lines; see GitHub link above)
```

#### 310. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5227-L5228` → after: `L8322-L8323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8322-L8323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8322-L8323) · [Before (L5227-L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5227-L5228)

```diff
-     function RV() {
-       GV || (GV = !0, zV.Parse = WV, FV.b._ImageProcessingConfigurationParser = WV, (0, MV.d)("BABYLON.ImageProcessingConfiguration", zV))
+     function uG(HH) {
+       return TL(HH) && "clientX" in HH && "clientY" in HH && oL(HH.clientX) && oL(HH.clientY)
```

#### 311. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5230-L5237` → after: `L8325-L8336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8325-L8336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8325-L8336) · [Before (L5230-L5237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5230-L5237)

```diff
-   },
-   41383: (VV, eV, xV) => {
-     xV.d(eV, {
-       b: () => UV
-     });
-     var JV = xV(39870),
-       YV = xV(41341);
-     class UV {
+     const QG = gh("[Product Tours]"),
+       WG = HH => {
+         var BH;
+         return !HH.config.disable_product_tours && !!(null === (BH = HH.persistence) || void 0 === BH ? void 0 : BH.get_property(nH))
+       },
+       MG = ["$set_once", "$set"],
+       xG = gh("[SiteApps]"),
+       vG = "Error while initializing PostHog app with config id ",
+       PG = (HH, BH) => (null == HH ? void 0 : HH.then) ? HH.then(BH) : BH(HH),
+       TG = "SDK is not enabled or survey functionality is not yet loaded",
+       UG = "Disabled. Not loading surveys.";
+     var VG = class {
```

#### 312. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5239-L5252` → after: `L8338-L8358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8338-L8358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8338-L8358) · [Before (L5239-L5252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5239-L5252)

```diff
-         let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           JV = arguments.length > 3 ? arguments[3] : void 0,
-           YV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           UV = arguments.length > 5 ? arguments[5] : void 0;
-         this._uniformNames = [], this._valueCache = {}, this._engine = VV, this._noUBO = !VV.supportsUniformBuffers || YV, this._dynamic = xV, this._name = JV ?? "no-name", this._data = eV || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {},  … [truncated]
-       }
-       get useUbo() {
-         return !this._noUBO
-       }
-       get isSync() {
-         return !this._needSync
-       }
-       isDynamic() {
-         return this._dynamic
+         this._configSource = HH, this._initialClientState = BH, this.name = PX, this._surveyEventReceiver = null, this._surveyManager = null, this._isInitializingSurveys = !1, this._surveyInitializationFailed = !1, this._surveyCallbacks = [], this._activeMatchingSurveyCallbacks = … [truncated]
+           if (this._disposed) return;
+           if (this._config.disableSurveys) return;
+           if (!HH.ok) return this._surveyInitializationFailed = !0, this._notifyActiveMatchingSurveyCallbacks({
+             isLoaded: !1,
+             error: "Remote config unavailable. Not loading surveys."
+           }), EX.warn("Remote config unavailable. Not loading surveys.");
+           const BH = HH.config.surveys;
+           if (mL(BH)) return EX.warn("Flags not loaded yet. Not loading surveys.");
+           this._isSurveysEnabled = fL(BH) ? BH : BH.length > 0, EX.info(`flags response received, isSurveysEnabled: ${this._isSurveysEnabled}`), this.loadIfEnabled()
+         }, this._notifyActiveMatchingSurveyCallbacks = HH => {
+           this._activeMatchingSurveyCallbacks.slice().forEach((BH => this._notifyActiveMatchingSurveyCallback(BH, HH)))
+         }
+       }
+       setup(HH) {
+         if (!this._disposed) return this._initializingClient = HH, PG(HH.kv.initialize(), (() => {
+ ... (5 more added lines; see GitHub link above)
```

#### 313. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5254-L5255` → after: `L8360-L8364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8360-L8364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8360-L8364) · [Before (L5254-L5255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5254-L5255)

```diff
-       getData() {
-         return this._bufferData
+       dispose() {
+         var HH, BH, LH, AH, rH;
+         this._disposed || (this._disposed = !0, this._initializingClient = void 0, this._client = void 0, null === (HH = this._remoteConfigSubscription) || void 0 === HH || HH.dispose(), this._remoteConfigSubscription = void 0, null === (BH = this._surveyEventReceiver) || void 0  … [truncated]
+           HH.active = !1
+         })), this._activeMatchingSurveyCallbacks = [], null === (rH = this._activeMatchingSurveyConditionsUnsubscribe) || void 0 === rH || rH.call(this), this._activeMatchingSurveyConditionsUnsubscribe = void 0, this._getSurveysInFlightPromise = null, this._renderTimeouts.forEach … [truncated]
```

#### 314. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5257-L5258` → after: `L8366-L8367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8366-L8367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8366-L8367) · [Before (L5257-L5258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5257-L5258)

```diff
-       getBuffer() {
-         return this._buffer
+       get _config() {
+         return this._configSource.get()
```

#### 315. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5260-L5261` → after: `L8369-L8370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8369-L8370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8369-L8370) · [Before (L5260-L5261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5260-L5261)

```diff
-       getUniformNames() {
-         return this._uniformNames
+       initialize() {
+         this.loadIfEnabled()
```

#### 316. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5263-L5292` → after: `L8372-L8381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8372-L8381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8372-L8381) · [Before (L5263-L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5263-L5292)

```diff
-       _fillAlignment(VV) {
-         let eV;
-         if (eV = VV <= 2 ? VV : 4, this._uniformLocationPointer % eV !== 0) {
-           const VV = this._uniformLocationPointer;
-           this._uniformLocationPointer += eV - this._uniformLocationPointer % eV;
-           const xV = this._uniformLocationPointer - VV;
-           for (let eV = 0; eV < xV; eV++) this._data.push(0)
-         }
-       }
-       addUniform(VV, eV) {
-         let xV, JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         if (JV > 0 && "number" === typeof eV && (this._uniformArraySizes[VV] = {
-             strideSize: eV,
-             arraySize: JV
-           }), void 0 === this._uniformLocations[VV] && (this._uniformNames.push(VV), !this._noUBO)) {
-           if (JV > 0) {
- ... (14 more removed lines; see GitHub link above)
+       reset() {
+         var HH, BH;
+         null === (HH = this._surveyManager) || void 0 === HH || null === (BH = HH.clearInMemoryInProgressSurveyState) || void 0 === BH || BH.call(HH);
+         try {
+           var LH;
+           null === (LH = this._surveyEventReceiver) || void 0 === LH || LH.reset(), localStorage.removeItem("lastSeenSurveyDate");
+           const HH = [];
+           for (let BH = 0; BH < localStorage.length; BH++) {
+             const LH = localStorage.key(BH);
+             ((null == LH ? void 0 : LH.startsWith("seenSurvey_")) || (null == LH ? void 0 : LH.startsWith("inProgressSurvey_"))) && HH.push(LH)
```

#### 317. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5294-L5296` → after: `L8383-L8414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8383-L8414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8383-L8414) · [Before (L5294-L5296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5294-L5296)

```diff
-           this._uniformSizes[VV] = eV, this._uniformLocations[VV] = this._uniformLocationPointer, this._uniformLocationPointer += eV;
-           for (let VV = 0; VV < eV; VV++) this._data.push(xV[VV]);
-           this._needSync = !0
+           HH.forEach((HH => localStorage.removeItem(HH)))
+         } catch (HH) {}
+         this._notifyActiveMatchingSurveyCallbacks()
+       }
+       loadIfEnabled() {
+         if (this._disposed || !this._client) return;
+         const HH = this._config;
+         if (this._surveyManager) return;
+         if (this._isInitializingSurveys) return void EX.info("Already initializing surveys, skipping...");
+         if (HH.disableSurveys) return void EX.info(UG);
+         if (HH.cookielessMode && this._configSource.isOptedOut()) return void EX.info("Not loading surveys in cookieless mode without consent.");
+         const BH = this._configSource.getExtensions();
+         if (!BH) return void this._handleSurveyLoadError("PostHog Extensions not found.");
+         if (VL(this._isSurveysEnabled) && !HH.advancedEnableSurveys) return;
+         const LH = this._isSurveysEnabled || HH.advancedEnableSurveys;
+         this._isInitializingSurveys = !0, this._surveyInitializationFailed = !1;
+ ... (16 more added lines; see GitHub link above)
```

#### 318. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5299-L5367` → after: `L8417-L8424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8417-L8424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8417-L8424) · [Before (L5299-L5367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5299-L5367)

```diff
-       addMatrix(VV, eV) {
-         this.addUniform(VV, Array.prototype.slice.call(eV.WYV()))
-       }
-       addFloat2(VV, eV, xV) {
-         const JV = [eV, xV];
-         this.addUniform(VV, JV)
-       }
-       addFloat3(VV, eV, xV, JV) {
-         const YV = [eV, xV, JV];
-         this.addUniform(VV, YV)
-       }
-       addColor3(VV, eV) {
-         const xV = [eV.r, eV.g, eV.b];
-         this.addUniform(VV, xV)
-       }
-       addColor4(VV, eV, xV) {
- ... (53 more removed lines; see GitHub link above)
+       _completeSurveyInitialization(HH, BH) {
+         var LH, AH;
+         if (this._disposed) return;
+         this._surveyManager = HH(BH), this._surveyEventReceiver = this._configSource.createEventReceiver(this._notifyActiveMatchingSurveyCallbacks);
+         const rH = null === (LH = null !== (AH = this._client) && void 0 !== AH ? AH : this._initialClientState) || void 0 === LH ? void 0 : LH.kv.get(hB);
+         rH && this._registerEventOrActionBasedSurveys(rH), EX.info("Surveys loaded successfully"), this._startActiveMatchingSurveyConditions(), this._notifyActiveMatchingSurveyCallbacks(), this._notifySurveyCallbacks({
+           isLoaded: !0
+         })
```

#### 319. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5369-L5370` → after: `L8426-L8433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8426-L8433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8426-L8433) · [Before (L5369-L5370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5369-L5370)

```diff
-       _copyBuffer(VV, eV) {
-         for (let xV = 0; xV < VV.length; ++xV) eV[xV] = VV[xV]
+       _handleSurveyLoadError(HH, BH) {
+         this._surveyInitializationFailed = !0, EX.error(HH, BH), this._notifyActiveMatchingSurveyCallbacks({
+           isLoaded: !1,
+           error: HH
+         }), this._notifySurveyCallbacks({
+           isLoaded: !1,
+           error: HH
+         })
```

#### 320. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5372-L5452` → after: `L8435-L8439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8435-L8439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8435-L8439) · [Before (L5372-L5452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5372-L5452)

```diff
-       update() {
-         if (!this._noUBO)
-           if (this.bindUniformBuffer(), this._buffer)
-             if (this._dynamic || this._needSync) {
-               if (this._buffers && this._buffers.length > 1 && this._buffers[this._bufferIndex][1]) {
-                 if (this._buffersEqual(this._bufferData, this._buffers[this._bufferIndex][1])) return this._needSync = !1, void(this._createBufferOnWrite = this._trackUBOsInFrame);
-                 this._copyBuffer(this._bufferData, this._buffers[this._bufferIndex][1])
-               }
-               this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData), this._needSync = !1, this._createBufferOnWrite = this._trackUBOsInFrame
-             } else this._createBufferOnWrite = this._trackUBOsInFrame;
-         else this.create()
-       }
-       _updateOwnerKeyed(VV) {
-         if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
-         this._buffer || this.create(), this._checkNewFrame();
-         let eV = this._slotByOwner.get(VV);
- ... (65 more removed lines; see GitHub link above)
+       onSurveysLoaded(HH) {
+         return this._surveyCallbacks.push(HH), this._surveyManager && this._notifySurveyCallbacks({
+           isLoaded: !0
+         }), () => {
+           this._surveyCallbacks = this._surveyCallbacks.filter((BH => BH !== HH))
```

#### 321. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5455-L5501` → after: `L8442-L8492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8442-L8492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8442-L8492) · [Before (L5455-L5501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5455-L5501)

```diff
-       _cacheMatrix(VV, eV) {
-         this._checkNewFrame();
-         const xV = this._valueCache[VV],
-           JV = eV.updateFlag;
-         return (void 0 === xV || xV !== JV) && (this._valueCache[VV] = JV, !0)
-       }
-       _updateMatrix3x3ForUniform(VV, eV) {
-         for (let xV = 0; xV < 3; xV++) UV._TempBuffer[4 * xV] = eV[3 * xV], UV._TempBuffer[4 * xV + 1] = eV[3 * xV + 1], UV._TempBuffer[4 * xV + 2] = eV[3 * xV + 2], UV._TempBuffer[4 * xV + 3] = 0;
-         this.updateUniform(VV, UV._TempBuffer, 12)
-       }
-       _updateMatrix3x3ForEffect(VV, eV) {
-         this._currentEffect.setMatrix3x3(VV, eV)
-       }
-       _updateMatrix2x2ForEffect(VV, eV) {
-         this._currentEffect.setMatrix2x2(VV, eV)
-       }
- ... (31 more removed lines; see GitHub link above)
+       getSurveys(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         var LH;
+         const AH = null !== (LH = this._client) && void 0 !== LH ? LH : this._initialClientState;
+         if (!AH || this._disposed) return;
+         if (this._config.disableSurveys) return EX.info(UG), HH([]);
+         const rH = AH.kv.get(hB);
+         if (rH && !BH) return HH(rH, {
+           isLoaded: !0
+         }), void(this._shouldBackgroundRefreshSurveys() && this.getSurveys((() => {}), !0));
+         if (this._getSurveysInFlightPromise) return void this._getSurveysInFlightPromise.then((BH => {
+           let {
+             surveys: LH,
+             context: AH
+           } = BH;
+           this._disposed || HH(LH, AH)
+ ... (35 more added lines; see GitHub link above)
```

#### 322. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5503-L5516` → after: `L8494-L8522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8494-L8522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8494-L8522) · [Before (L5503-L5516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5503-L5516)

```diff
-       _updateFloatArrayForEffect(VV, eV) {
-         let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
-         switch (this._uniformArraySizes[VV]?.strideSize) {
-           case 2:
-             this._currentEffect.setFloatArray2(VV + xV, eV);
-             break;
-           case 3:
-             this._currentEffect.setFloatArray3(VV + xV, eV);
-             break;
-           case 4:
-             this._currentEffect.setFloatArray4(VV + xV, eV);
-             break;
-           default:
-             this._currentEffect.setFloatArray(VV + xV, eV)
+       _handleSurveyResponse(HH, BH) {
+         if (this._disposed) return {
+           surveys: [],
+           context: {
+             isLoaded: !1,
+             error: TG
+           }
+         };
+         const LH = BH.statusCode;
+         if (200 !== LH || !BH.json) {
+           const HH = `Surveys API could not be loaded, status: ${LH}`;
+           return 0 !== LH ? EX.error(HH) : BH.error || EX.warn(HH), this._lastSurveyRefreshFailedAt = Date.now(), {
+             surveys: [],
+             context: {
+               isLoaded: !1,
+               error: HH
+ ... (13 more added lines; see GitHub link above)
```

#### 323. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5519-L5639` → after: `L8525-L8556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8525-L8556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8525-L8556) · [Before (L5519-L5639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5519-L5639)

```diff
-       _updateFloatArrayForUniform(VV, eV) {
-         this.updateUniformArray(VV, eV, eV.length)
-       }
-       _updateArrayForEffect(VV, eV) {
-         this._currentEffect.setArray(VV, eV)
-       }
-       _updateArrayForUniform(VV, eV) {
-         this.updateUniformArray(VV, eV, eV.length)
-       }
-       _updateIntArrayForEffect(VV, eV) {
-         this._currentEffect.setIntArray(VV, eV)
-       }
-       _updateIntArrayForUniform(VV, eV) {
-         UV._TempBufferInt32View.set(eV), this.updateUniformArray(VV, UV._TempBuffer, eV.length)
-       }
-       _updateUIntArrayForEffect(VV, eV) {
- ... (105 more removed lines; see GitHub link above)
+       _registerEventOrActionBasedSurveys(HH) {
+         var BH;
+         const LH = HH.filter((HH => function(HH) {
+           return !(!HH.start_date || HH.end_date)
+         }(HH) && (yE(HH) || function(HH) {
+           var BH;
+           return !!(null === (BH = HH.conditions) || void 0 === BH || null === (BH = BH.actions) || void 0 === BH || null === (BH = BH.values) || void 0 === BH ? void 0 : BH.length)
+         }(HH))));
+         null === (BH = this._surveyEventReceiver) || void 0 === BH || BH.replace(LH)
+       }
+       _shouldBackgroundRefreshSurveys() {
+         return this._isSurveyCacheStale() && !this._getSurveysInFlightPromise && !this._isSurveyRefreshBackingOff()
+       }
+       _isSurveyCacheStale() {
+         var HH, BH;
+         const LH = null === (HH = null !== (BH = this._client) && void 0 !== BH ? BH : this._initialClientState) || void 0 === HH ? void 0 : HH.kv.get(tB);
+ ... (16 more added lines; see GitHub link above)
```

#### 324. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5641-L5642` → after: `L8558-L8564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8558-L8564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8558-L8564) · [Before (L5641-L5642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5641-L5642)

```diff
-       setTexture(VV, eV) {
-         this._currentEffect.setTexture(VV, eV)
+       _notifySurveyCallbacks(HH) {
+         for (const BH of this._surveyCallbacks) try {
+           if (!HH.isLoaded) return BH([], HH);
+           this.getSurveys(BH)
+         } catch (HH) {
+           EX.error("Error in survey callback", HH)
+         }
```

#### 325. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5644-L5645` → after: `L8566-L8569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8566-L8569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8566-L8569) · [Before (L5644-L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5644-L5645)

```diff
-       setTextureArray(VV, eV) {
-         this._currentEffect.setTextureArray(VV, eV)
+       getActiveMatchingSurveys(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         if (!mL(this._surveyManager)) return this._surveyManager.getActiveMatchingSurveys(HH, BH);
+         EX.warn("init was not called")
```

#### 326. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5647-L5648` → after: `L8571-L8611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8571-L8611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8571-L8611) · [Before (L5647-L5648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5647-L5648)

```diff
-       bindTexture(VV, eV) {
-         this._currentEffect._bindTexture(VV, eV)
+       onActiveMatchingSurveysChanged(HH) {
+         var BH, LH;
+         if (this._disposed) return () => {};
+         const AH = {
+           callback: HH,
+           active: !0,
+           revision: 0
+         };
+         this._activeMatchingSurveyCallbacks.push(AH), this._startActiveMatchingSurveyConditions();
+         const rH = null === (BH = null !== (LH = this._client) && void 0 !== LH ? LH : this._initialClientState) || void 0 === BH ? void 0 : BH.kv.get(hB);
+         return this._config.disableSurveys || !this._surveyManager && this._surveyInitializationFailed && !this._isInitializingSurveys || !rH && !mL(this._lastSurveyRefreshFailedAt) && !this._getSurveysInFlightPromise ? this._notifyActiveMatchingSurveyCallback(AH, {
+           isLoaded: !1
+         }) : this._surveyManager && this._notifyActiveMatchingSurveyCallback(AH), () => {
+           var HH;
+           AH.active = !1, this._activeMatchingSurveyCallbacks = this._activeMatchingSurveyCallbacks.filter((HH => HH !== AH)), 0 === this._activeMatchingSurveyCallbacks.length && (null === (HH = this._activeMatchingSurveyConditionsUnsubscribe) || void 0 === HH || HH.call(this), t … [truncated]
+         }
+ ... (25 more added lines; see GitHub link above)
```

#### 327. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5650-L5651` → after: `L8613-L8618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8613-L8618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8613-L8618) · [Before (L5650-L5651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5650-L5651)

```diff
-       updateUniformDirectly(VV, eV) {
-         this.updateUniform(VV, eV, eV.length), this.update()
+       _getSurveyById(HH) {
+         let BH = null;
+         return this.getSurveys((LH => {
+           var AH;
+           BH = null !== (AH = LH.find((BH => BH.id === HH))) && void 0 !== AH ? AH : null
+         })), BH
```

#### 328. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5653-L5654` → after: `L8620-L8629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8620-L8629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8620-L8629) · [Before (L5653-L5654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5653-L5654)

```diff
-       bindToEffect(VV, eV) {
-         this._currentEffect = VV, this._currentEffectName = eV
+       _checkSurveyEligibility(HH) {
+         if (mL(this._surveyManager)) return {
+           eligible: !1,
+           reason: TG
+         };
+         const BH = "string" == typeof HH ? this._getSurveyById(HH) : HH;
+         return BH ? this._surveyManager.checkSurveyEligibility(BH) : {
+           eligible: !1,
+           reason: "Survey not found"
+         }
```

#### 329. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5656-L5657` → after: `L8631-L8644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8631-L8644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8631-L8644) · [Before (L5656-L5657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5656-L5657)

```diff
-       bindUniformBuffer() {
-         !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
+       _checkSurveyRenderability(HH) {
+         if (!this._configSource.isCapturing()) return {
+           eligible: !1,
+           reason: "PostHog is not capturing, so a survey response cannot be recorded"
+         };
+         if (mL(this._surveyManager)) return {
+           eligible: !1,
+           reason: TG
+         };
+         const BH = "string" == typeof HH ? this._getSurveyById(HH) : HH;
+         return BH ? this._surveyManager.checkSurveyRenderability(BH) : {
+           eligible: !1,
+           reason: "Survey not found"
+         }
```

#### 330. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5659-L5660` → after: `L8646-L8676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8646-L8676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8646-L8676) · [Before (L5659-L5660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5659-L5660)

```diff
-       unbindEffect() {
-         this._currentEffect = void 0, this._currentEffectName = void 0
+       canRenderSurvey(HH) {
+         if (mL(this._surveyManager)) return EX.warn("init was not called"), {
+           visible: !1,
+           disabledReason: TG
+         };
+         const BH = this._checkSurveyRenderability(HH);
+         return {
+           visible: BH.eligible,
+           disabledReason: BH.reason
+         }
+       }
+       canRenderSurveyAsync(HH, BH) {
+         return mL(this._surveyManager) ? (EX.warn("init was not called"), Promise.resolve({
+           visible: !1,
+           disabledReason: TG
+         })) : new Promise((LH => {
+ ... (15 more added lines; see GitHub link above)
```

#### 331. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5662-L5665` → after: `L8678-L8711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8678-L8711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8678-L8711) · [Before (L5662-L5665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5662-L5665)

```diff
-       setDataBuffer(VV) {
-         if (!this._buffers) return this._buffer === VV;
-         for (let eV = 0; eV < this._buffers.length; ++eV) {
-           if (this._buffers[eV][0] === VV) return this._bufferIndex = eV, this._buffer = VV, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[eV][1] && (this._bufferData.set(this._buffers[eV][1]), this._dataGeneration++), thi … [truncated]
+       renderSurvey(HH, BH, LH) {
+         var AH;
+         if (!this._configSource.isCapturing()) return;
+         if (mL(this._surveyManager)) return void EX.warn("init was not called");
+         const rH = "string" == typeof HH ? this._getSurveyById(HH) : HH;
+         if (!(null == rH ? void 0 : rH.id)) return void EX.warn("Survey not found");
+         if (!GX.includes(rH.type)) return void EX.warn(`Surveys of type ${rH.type} cannot be rendered in the app`);
+         const SH = null == yB ? void 0 : yB.querySelector(BH);
+         if (SH) {
+           if (null === (AH = rH.appearance) || void 0 === AH ? void 0 : AH.surveyPopupDelaySeconds) {
+             EX.info(`Rendering survey ${rH.id} with delay of ${rH.appearance.surveyPopupDelaySeconds} seconds`);
+             const HH = setTimeout((() => {
+               var BH, AH;
+               this._renderTimeouts.delete(HH), !this._disposed && this._configSource.isCapturing() && (EX.info(`Rendering survey ${rH.id} with delay of ${null===(BH=rH.appearance)||void 0===BH?void 0:BH.surveyPopupDelaySeconds} seconds`), null === (AH = this._surveyManager) || vo … [truncated]
+             }), 1e3 * rH.appearance.surveyPopupDelaySeconds);
+             return void this._renderTimeouts.add(HH)
+ ... (18 more added lines; see GitHub link above)
```

#### 332. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5667-L5670` → after: `L8713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8713) · [Before (L5667-L5670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5667-L5670)

```diff
-         return !1
-       }
-       has(VV) {
-         return void 0 !== this._uniformLocations[VV]
+         BH.displayType !== IC ? this._surveyManager.handlePopoverSurvey(rH, BH) : this.renderSurvey(rH, BH.selector, BH.properties)
```

#### 333. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5672-L5695` → after: `L8715-L8716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8715-L8716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8715-L8716) · [Before (L5672-L5695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5672-L5695)

```diff
-       dispose() {
-         if (this._noUBO) return;
-         const VV = this._engine._uniformBuffers,
-           eV = VV.indexOf(this);
-         if (-1 !== eV && (VV[eV] = VV[VV.length - 1], VV.pop()), this._trackUBOsInFrame && this._buffers) {
-           this._resetOwnerSlots();
-           for (let VV = 0; VV < this._buffers.length; ++VV) {
-             const eV = this._buffers[VV][0];
-             this._engine._releaseBuffer(eV)
-           }
-           this._buffers = [], this._buffer = null, this._bufferIndex = -1
-         } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
-       }
-     }
-     UV._MAX_UNIFORM_SIZE = 256, UV._TempBuffer = new Float32Array(UV._MAX_UNIFORM_SIZE), UV._TempBufferInt32View = new Int32Array(UV._TempBuffer.buffer), UV._TempBufferUInt32View = new Uint32Array(UV._TempBuffer.buffer)
-   },
- ... (8 more removed lines; see GitHub link above)
+       cancelPendingSurvey(HH) {
+         mL(this._surveyManager) ? EX.warn("init was not called") : this._surveyManager.cancelSurvey(HH)
```

#### 334. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5697-L5698` → after: `L8718-L8720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8718-L8720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8718-L8720) · [Before (L5697-L5698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5697-L5698)

```diff
-       get underlyingResource() {
-         return this._buffer
+       handlePageUnload() {
+         var HH, BH;
+         null === (HH = this._surveyManager) || void 0 === HH || null === (BH = HH.handlePageUnload) || void 0 === BH || BH.call(HH)
```

#### 335. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5700-L5729` → after: `L8722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8722) · [Before (L5700-L5729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5700-L5729)

```diff
-     }
-   },
-   41266: (VV, eV, xV) => {
-     xV.d(eV, {
-       e: () => QV,
-       f: () => nV
-     });
-     const JV = "__bjs_serializable__",
-       YV = new WeakMap;
- 
-     function UV(VV, eV) {
-       return Object.prototype.hasOwnProperty.call(VV, eV)
-     }
-     const yV = function() {
-       let VV = Symbol.metadata;
-       return VV || (VV = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
- ... (14 more removed lines; see GitHub link above)
+     };
```

#### 336. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5731-L5745` → after: `L8724-L8741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8724-L8741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8724-L8741) · [Before (L5731-L5745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5731-L5745)

```diff
-     function nV(VV) {
-       const eV = pV(VV),
-         xV = eV ? eV[yV] : void 0;
-       if (!xV) return {};
-       const QV = YV.get(xV);
-       if (QV) return QV;
-       const nV = {},
-         wV = [];
-       let ZV = xV;
-       for (; ZV;) wV.push(ZV), ZV = Object.getPrototypeOf(ZV);
-       for (const YV of wV)
-         if (UV(YV, JV)) {
-           const VV = YV[JV];
-           for (const eV in VV) nV[eV] = VV[eV]
-         } return YV.set(xV, nV), nV
+     function OG(HH, BH, LH) {
+       if (mL(HH)) return !1;
+       switch (LH) {
+         case "exact":
+           return HH === BH;
+         case "contains": {
+           const LH = BH.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/_/g, ".").replace(/%/g, ".*");
+           return new RegExp(LH, "i").test(HH)
+         }
+         case "regex":
+           try {
+             return new RegExp(BH).test(HH)
+           } catch (HH) {
+             return !1
+           }
+         default:
+ ... (2 more added lines; see GitHub link above)
```

#### 337. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5747-L5793` → after: `L8743-L8799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8743-L8799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8743-L8799) · [Before (L5747-L5793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5747-L5793)

```diff
-   },
-   41263: (VV, eV, xV) => {
-     xV.d(eV, {
-       C: () => vV,
-       E: () => bV,
-       F: () => pV,
-       H: () => wV,
-       I: () => ZV,
-       J: () => yV,
-       d: () => qV,
-       h: () => UV,
-       j: () => jV,
-       l: () => rV,
-       o: () => QV,
-       s: () => kV,
-       u: () => nV,
- ... (31 more removed lines; see GitHub link above)
+     var bG = class {
+         constructor(HH) {
+           this._instance = HH, this._actionRegistry = new Set, this._actionEvents = new Set, this._debugEventEmitter = new ZE, this._checkStep = (HH, BH) => this._checkStepEvent(HH, BH) && this._checkStepUrl(HH, BH) && this._checkStepElement(HH, BH) && this._checkStepProperties(H … [truncated]
+         }
+         init() {
+           var HH, BH;
+           VL(null === (HH = this._instance) || void 0 === HH ? void 0 : HH._addCaptureHook) || (this._captureHookUnsubscribe = null === (BH = this._instance) || void 0 === BH ? void 0 : BH._addCaptureHook(((HH, BH) => {
+             this.on(HH, BH)
+           })))
+         }
+         dispose() {
+           var HH, BH;
+           null === (HH = this._captureHookUnsubscribe) || void 0 === HH || HH.call(this), this._captureHookUnsubscribe = void 0, null === (BH = this._instance) || void 0 === BH || null === (BH = BH.autocapture) || void 0 === BH || BH.setElementSelectors(new Set, this), this._debu … [truncated]
+         }
+         register(HH) {
+           var BH, LH;
+ ... (41 more added lines; see GitHub link above)
```

#### 338. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5796-L5850` → after: `L8803-L8843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8803-L8843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8803-L8843) · [Before (L5796-L5850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5796-L5850)

```diff
-       }(VV, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
-     }
- 
-     function yV(VV) {
-       return YV(0, VV)
-     }
- 
-     function pV(VV) {
-       return YV(1, VV)
-     }
- 
-     function QV(VV) {
-       return YV(2, VV)
-     }
- 
-     function nV(VV) {
- ... (39 more removed lines; see GitHub link above)
+         _checkStepElement(HH, BH) {
+           return !!this._checkStepHref(HH, BH) && !!this._checkStepText(HH, BH) && !!this._checkStepSelector(HH, BH)
+         }
+         _checkStepHref(HH, BH) {
+           var LH;
+           if (!(null == BH ? void 0 : BH.href)) return !0;
+           const AH = this._getElementsList(HH);
+           if (AH.length > 0) return AH.some((HH => OG(HH.href, BH.href, BH.href_matching || "exact")));
+           const rH = (null == HH || null === (LH = HH.properties) || void 0 === LH ? void 0 : LH.$elements_chain) || "";
+           return !!rH && OG(function(HH) {
+             const BH = HH.match(/(?::|")href="(.*?)"/);
+             return BH ? BH[1] : ""
+           }(rH), BH.href, BH.href_matching || "exact")
+         }
+         _checkStepText(HH, BH) {
+           var LH;
+ ... (25 more added lines; see GitHub link above)
```

#### 339. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5852-L5871` → after: `L8845-L8969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8845-L8969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8845-L8969) · [Before (L5852-L5871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5852-L5871)

```diff
-         for (var yV = arguments.length, pV = new Array(yV), QV = 0; QV < yV; QV++) pV[QV] = arguments[QV];
-         return YV.apply(this, pV)
-       };
-       return UV
-     }
- 
-     function jV(VV, eV) {
-       return BV(VV, eV, (VV => VV))
-     }
- 
-     function qV(VV) {
-       let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-       return (xV, JV) => {
-         const YV = eV || "_" + String(JV.name);
-         return {
-           get() {
- ... (4 more removed lines; see GitHub link above)
+         _getElementsList(HH) {
+           var BH;
+           return null == (null == HH || null === (BH = HH.properties) || void 0 === BH ? void 0 : BH.$elements) ? [] : null == HH ? void 0 : HH.properties.$elements
+         }
+         _checkStepProperties(HH, BH) {
+           return !(null == BH ? void 0 : BH.properties) || 0 === BH.properties.length || AX(BH.properties.reduce(((HH, BH) => {
+             const LH = vL(BH.value) ? BH.value.map(String) : null != BH.value ? [String(BH.value)] : [];
+             return HH[BH.key] = {
+               values: LH,
+               operator: BH.operator || "exact"
+             }, HH
+           }), {}), null == HH ? void 0 : HH.properties)
+         }
+       },
+       kG = class {
+         constructor(HH, BH) {
+ ... (109 more added lines; see GitHub link above)
```

#### 340. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5874-L5921` → after: `L8987-L8988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8987-L8988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8987-L8988) · [Before (L5874-L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5874-L5921)

```diff
-       }
-     }
-     jV.filter = function(VV) {
-       return (eV, xV) => BV(eV, xV, ((eV, xV) => function() {
-         for (var JV = arguments.length, YV = new Array(JV), UV = 0; UV < JV; UV++) YV[UV] = arguments[UV];
-         return VV(...YV) ? eV(...YV) : xV.apply(this, YV)
-       }))
-     }
-   },
-   41279: (VV, eV, xV) => {
-     xV.d(eV, {
-       b: () => nV
-     });
-     var JV = xV(41138),
-       YV = xV(41286),
-       UV = xV(38389),
- ... (32 more removed lines; see GitHub link above)
+         onAction(HH) {
+           this._actionToItems.has(HH) && this._activateItems(this._actionToItems.get(HH) || [])
```

#### 341. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5923-L5932` → after: `L8990-L9077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8990-L9077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L8990-L9077) · [Before (L5923-L5932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5923-L5932)

```diff
-       }
-       return UV
-     };
-     class nV {
-       static AppendSerializedAnimations(VV, eV) {
-         if (VV.animations) {
-           eV.animations = [];
-           for (let xV = 0; xV < VV.animations.length; xV++) {
-             const JV = VV.animations[xV];
-             eV.animations.push(JV.serialize())
+         _activateItems(HH) {
+           var BH, LH;
+           if (0 === HH.length) return;
+           const AH = !!(null === (BH = this._instance) || void 0 === BH || null === (LH = BH.get_session_id) || void 0 === LH ? void 0 : LH.call(BH)),
+             rH = [];
+           for (const SH of HH) AH && this._shouldPersistArmedActivation(SH) ? this._persistActivation(SH) && this._recordActivationTimestamp(SH) : rH.push(SH);
+           rH.length > 0 && (this._pendingActivatedItems = [...new Set([...this._pendingActivatedItems, ...rH])]), this._getLogger().info("updating activated items", {
+             activatedItems: this.getActivatedIds()
+           }), this._notifyActivationChanged()
+         }
+         _persistActivation(HH) {
+           this._pendingActivatedItems = this._pendingActivatedItems.filter((BH => BH !== HH));
+           const BH = this._getPersistedActivatedIds();
+           return !BH.includes(HH) && (this._setActivatedItems([...BH, HH]), this._stampActivationSession(), !0)
+         }
+         _deactivateItems(HH) {
+ ... (72 more added lines; see GitHub link above)
```

#### 342. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5935-L5965` → after: `L9080-L9190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9080-L9190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9080-L9190) · [Before (L5935-L5965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5935-L5965)

```diff
-       }
-       static Serialize(VV, eV) {
-         eV || (eV = {}), YV.d && (eV.tags = YV.d.GetTags(VV));
-         const xV = (0, pV.f)(VV);
-         for (const JV in xV) {
-           const YV = xV[JV],
-             UV = YV.sourceName || JV,
-             yV = YV.type,
-             pV = VV[JV];
-           if (void 0 !== pV && null !== pV && ("uniqueId" !== JV || nV.AllowLoadingUniqueId)) switch (yV) {
-             case 0:
-               Array.isArray(pV) ? eV[UV] = pV.slice() : eV[UV] = pV;
-               break;
-             case 1:
-             case 3:
-             case 7:
- ... (15 more removed lines; see GitHub link above)
+         getActivatedIds() {
+           return [...new Set([...this._getPersistedActivatedIds(), ...this._pendingActivatedItems])].filter((HH => !this._isItemPermanentlyIneligible(HH)))
+         }
+         dispose() {
+           var HH, BH, LH;
+           null === (HH = this._sessionIdUnsubscribe) || void 0 === HH || HH.call(this), this._sessionIdUnsubscribe = void 0, null === (BH = this._captureHookUnsubscribe) || void 0 === BH || BH.call(this), this._captureHookUnsubscribe = void 0, null === (LH = this._actionMatcher)  … [truncated]
+         }
+         reset() {
+           this._pendingActivatedItems = [], this._getRawPersistedActivatedIds().length > 0 && this._setActivatedItems([]), this._clearActivationSession(), this._clearAllActivationTimestamps(), this._notifyActivationChanged()
+         }
+         getEventToItemsMap() {
+           return this._eventToItems
+         }
+         _getActionMatcher() {
+           return this._actionMatcher
+         }
+ ... (95 more added lines; see GitHub link above)
```

#### 343. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5968-L6021` → after: `L9194-L9248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9194-L9248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9194-L9248) · [Before (L5968-L6021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L5968-L6021)

```diff
-         return eV
-       }
-       static ParseProperties(VV, eV, xV, JV) {
-         JV || (JV = "");
-         const YV = (0, pV.f)(eV);
-         for (const pV in YV) {
-           const QV = YV[pV],
-             wV = VV[QV.sourceName || pV],
-             ZV = QV.type;
-           if (void 0 !== wV && null !== wV && ("uniqueId" !== pV || nV.AllowLoadingUniqueId)) {
-             const VV = eV;
-             switch (ZV) {
-               case 0:
-                 VV[pV] = wV;
-                 break;
-               case 1:
- ... (38 more removed lines; see GitHub link above)
+         set(HH, BH) {
+           this._instance.register("string" == typeof HH ? {
+             [HH]: BH
+           } : HH)
+         }
+         remove(HH) {
+           "string" != typeof HH ? HH.forEach((HH => this._instance.unregister(HH))) : this._instance.unregister(HH)
+         }
+       },
+       IG = class {
+         constructor(HH) {
+           this._instance = HH
+         }
+         get() {
+           const HH = this._instance.config;
+           return {
+ ... (39 more added lines; see GitHub link above)
```

#### 344. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6025-L6028` → after: `L9304-L9308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9304-L9308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9304-L9308) · [Before (L6025-L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6025-L6028)

```diff
-       static Parse(VV, eV, xV) {
-         let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-         const UV = VV();
-         return YV.d && YV.d.AddTagsTo(UV, eV.tags), nV.ParseProperties(eV, UV, xV, JV), UV
+       _finishSetup(HH) {
+         var BH;
+         if (this._client === HH) return this._window && ah(this._window, "online", this._onOnline), this._syncAutomaticRefresh(), this._dynamicProperties = HH.registerDynamicEventProperties((() => this._isCacheStale() ? this._baseEventProperties : this._eventPropertiesWithFlagVal … [truncated]
+           this._clearBootstrapState(), this._rebuildEventProperties(), this._fireFeatureFlagsCallbacks()
+         })), this._rebuildEventProperties(), this.initialize()
```

#### 345. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6030-L6031` → after: `L9310-L9311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9310-L9311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9310-L9311) · [Before (L6030-L6031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6030-L6031)

```diff
-       static Clone(VV, eV) {
-         return QV(VV, eV, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
+       _resumeConfiguredInterval() {
+         this._hadUserInteraction = !0, this._dueRefreshIntervalMs = this._refreshIntervalMs, this._refreshIfDue()
```

#### 346. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6033-L6034` → after: `L9313-L9321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9313-L9321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9313-L9321) · [Before (L6033-L6034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6033-L6034)

```diff
-       static Instanciate(VV, eV) {
-         return QV(VV, eV, !0)
+       _syncAutomaticRefresh() {
+         var HH;
+         const BH = this._config.refreshIntervalMs,
+           LH = !this._config.remoteRequestsDisabled && this._document && !VL(BH) && BH > 0 ? BH : void 0;
+         this._config.idleRefreshBackoff || (this._dueRefreshIntervalMs = LH), LH !== this._refreshIntervalMs && (this._stopAutomaticRefresh(), VL(LH) || (this._refreshIntervalMs = LH, this._dueRefreshIntervalMs = LH, this._scheduleNextRefresh(), (null === (HH = this._document) || … [truncated]
+           ah(this._document, HH, this._onUserInteraction, {
+             capture: !0
+           })
+         })))))
```

#### 347. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6036-L6054` → after: `L9323-L9324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9323-L9324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9323-L9324) · [Before (L6036-L6054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6036-L6054)

```diff
-     }
-     nV.AllowLoadingUniqueId = !1, nV._ImageProcessingConfigurationParser = VV => {
-       throw (0, JV.n)("ImageProcessingConfiguration")
-     }, nV._FresnelParametersParser = VV => {
-       throw (0, JV.n)("FresnelParameters")
-     }, nV._ColorCurvesParser = VV => {
-       throw (0, JV.n)("ColorCurves")
-     }, nV._TextureParser = (VV, eV, xV) => {
-       throw (0, JV.n)("Texture")
-     }
-   },
-   41204: (VV, eV, xV) => {
-     xV.d(eV, {
-       c: () => YV
-     });
-     var JV = xV(41154);
- ... (3 more removed lines; see GitHub link above)
+       _scheduleNextRefresh() {
+         VL(this._refreshIntervalMs) || (VL(this._refreshInterval) || clearInterval(this._refreshInterval), this._lastRefreshAt = Date.now(), this._refreshInterval = setInterval(this._refreshIfDue, this._refreshIntervalMs))
```

#### 348. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6056-L6057` → after: `L9326-L9333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9326-L9333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9326-L9333) · [Before (L6056-L6057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6056-L6057)

```diff
-       get max() {
-         return this._max
+       _stopAutomaticRefresh() {
+         var HH, BH;
+         VL(this._refreshInterval) || (clearInterval(this._refreshInterval), this._refreshInterval = void 0, null === (HH = this._document) || void 0 === HH || null === (BH = HH.removeEventListener) || void 0 === BH || BH.call(HH, "visibilitychange", this._onVisibilityChange), Nh( … [truncated]
+           var BH, LH;
+           null === (BH = this._document) || void 0 === BH || null === (LH = BH.removeEventListener) || void 0 === LH || LH.call(BH, HH, this._onUserInteraction, {
+             capture: !0
+           })
+         }))), this._refreshIntervalMs = void 0, this._dueRefreshIntervalMs = void 0, this._hadUserInteraction = !1, this._lastRefreshAt = void 0
```

#### 349. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6059-L6060` → after: `L9335-L9336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9335-L9336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9335-L9336) · [Before (L6059-L6060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6059-L6060)

```diff
-       get average() {
-         return this._average
+       destroy() {
+         this._dispose()
```

#### 350. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6062-L6063` → after: `L9338-L9339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9338-L9339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9338-L9339) · [Before (L6062-L6063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6062-L6063)

```diff
-       get lastSecAverage() {
-         return this._lastSecAverage
+       dispose() {
+         this._dispose()
```

#### 351. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6065-L6066` → after: `L9341-L9343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9341-L9343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9341-L9343) · [Before (L6065-L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6065-L6066)

```diff
-       get current() {
-         return this._current
+       _dispose() {
+         var HH, BH, LH;
+         this._stopAutomaticRefresh(), this._requestGeneration++, this._additionalReloadRequested = !1, this._initializingClient = void 0, this._settleReloads(this._pendingReloads, "xB"), this._settleReloads(this._activeReloads, "xB"), this._client && (this._clearDebouncer(), null … [truncated]
```

#### 352. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6068-L6069` → after: `L9345-L9346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9345-L9346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9345-L9346) · [Before (L6068-L6069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6068-L6069)

```diff
-       get total() {
-         return this._totalAccumulated
+       get _config() {
+         return this._configSource.get()
```

#### 353. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6071-L6072` → after: `L9348-L9350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9348-L9350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9348-L9350) · [Before (L6071-L6072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6071-L6072)

```diff
-       get count() {
-         return this._totalValueCount
+       _prop(HH) {
+         var BH;
+         return this._bootstrapState && HH in this._bootstrapState ? this._bootstrapState[HH] : null === (BH = this._client) || void 0 === BH ? void 0 : BH.kv.get(HH)
```

#### 354. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6074-L6075` → after: `L9352-L9353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9352-L9353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9352-L9353) · [Before (L6074-L6075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6074-L6075)

```diff
-       constructor() {
-         this._startMonitoringTime = 0, this._min = 0, this._max = 0, this._hasResult = !1, this._hasCurrentValue = !1, this._average = 0, this._lastSecAverage = 0, this._current = 0, this._totalValueCount = 0, this._totalAccumulated = 0, this._lastSecAccumulated = 0, this._lastSe … [truncated]
+       _clearBootstrapState() {
+         return !!this._bootstrapState && (this._bootstrapState = void 0, !0)
```

#### 355. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6077-L6078` → after: `L9355-L9357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9355-L9357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9355-L9357) · [Before (L6077-L6078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6077-L6078)

```diff
-       fetchNewFrame() {
-         this._totalValueCount++, this._current = 0, this._hasCurrentValue = YV.Enabled, this._lastSecValueCount++
+       _fallBackToPersistedFlags() {
+         var HH;
+         return !VL(null === (HH = this._client) || void 0 === HH ? void 0 : HH.kv.get("$enabled_feature_flags")) && this._clearBootstrapState()
```

#### 356. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6080-L6081` → after: `L9359-L9363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9359-L9363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9359-L9363) · [Before (L6080-L6081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6080-L6081)

```diff
-       addCount(VV, eV) {
-         YV.Enabled && (this._current += VV, this._hasCurrentValue = !0, eV && this._fetchResult())
+       _set(HH) {
+         this._persist((() => {
+           var BH;
+           return null === (BH = this._client) || void 0 === BH ? void 0 : BH.kv.set(HH)
+         }))
```

#### 357. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6083-L6084` → after: `L9365-L9398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9365-L9398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9365-L9398) · [Before (L6083-L6084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6083-L6084)

```diff
-       beginMonitoring() {
-         YV.Enabled && (this._startMonitoringTime = JV.b.Now)
+       _markCrossTabFeatureFlagSnapshot(HH, BH, LH) {
+         if (!this._crossTabPersistence || !HH.$enabled_feature_flags) return;
+         const AH = this._prop("$enabled_feature_flags") || {},
+           rH = HH.$enabled_feature_flags || {},
+           SH = BH.flags || BH.featureFlags,
+           hH = BH.flags ? Object.entries(BH.flags).filter((HH => {
+             let [, BH] = HH;
+             return !(null == BH ? void 0 : BH.failed)
+           })).map((HH => {
+             let [BH] = HH;
+             return BH
+           })) : [],
+           CH = !!BH.errorsWhileComputingFlags && !!BH.flags,
+           uH = CH ? hH : LH && !vL(SH) ? Object.keys(SH || {}) : Array.from(new Set([...Object.keys(AH), ...Object.keys(rH)])),
+           QH = this._prop("$feature_flag_payloads") || {},
+           WH = HH.$feature_flag_payloads || {},
+ ... (18 more added lines; see GitHub link above)
```

#### 358. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6086-L6091` → after: `L9400-L9405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9400-L9405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9400-L9405) · [Before (L6086-L6091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6086-L6091)

```diff
-       endMonitoring() {
-         let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-         if (!YV.Enabled) return;
-         VV && this.fetchNewFrame();
-         const eV = JV.b.Now;
-         this._current = eV - this._startMonitoringTime, this._hasCurrentValue = !0, VV && this._fetchResult()
+       _persist(HH) {
+         try {
+           HH()
+         } catch (HH) {
+           this._logger.error("Failed to update feature flag persistence", HH)
+         }
```

#### 359. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6093-L6094` → after: `L9407-L9441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9407-L9441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9407-L9441) · [Before (L6093-L6094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6093-L6094)

```diff
-       GZ() {
-         this._fetchResult()
+       _rebuildEventProperties() {
+         const HH = {};
+         for (const AH of [tH, xH, XH, vH]) {
+           const BH = this._prop(AH);
+           VL(BH) || (HH[AH] = BH)
+         }
+         this._baseEventProperties = HH;
+         const BH = xr({}, HH),
+           LH = this._prop(YH);
+         if (LH)
+           for (const [AH, rH] of Object.entries(LH)) BH[`$feature/${AH}`] = rH;
+         this._eventPropertiesWithFlagValues = BH
+       }
+       _isCacheStale() {
+         const HH = this._config.cacheTtlMs;
+         if (!HH || 0 >= HH) return !1;
+ ... (19 more added lines; see GitHub link above)
```

#### 360. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6096-L6100` → after: `L9443-L9458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9443-L9458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9443-L9458) · [Before (L6096-L6100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6096-L6100)

```diff
-       _fetchResult() {
-         if (!this._hasCurrentValue) return;
-         this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult  … [truncated]
-         const VV = JV.b.Now;
-         VV - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = VV, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
+       initialize() {
+         var HH, BH;
+         const LH = this._config,
+           AH = null !== (HH = null === (BH = LH.bootstrap) || void 0 === BH ? void 0 : BH.featureFlags) && void 0 !== HH ? HH : {};
+         if (Object.keys(AH).length) {
+           var rH, SH;
+           const HH = null !== (rH = null === (SH = LH.bootstrap) || void 0 === SH ? void 0 : SH.featureFlagPayloads) && void 0 !== rH ? rH : {},
+             BH = Object.keys(AH).filter((HH => !VL(AH[HH]))).reduce(((HH, BH) => (HH[BH] = AH[BH], HH)), {}),
+             hH = Object.keys(HH).filter((HH => BH[HH])).reduce(((BH, LH) => (BH[LH] = HH[LH], BH)), {});
+           return this._receivedFeatureFlags({
+             featureFlags: BH,
+             featureFlagPayloads: hH
+           }, void 0, {
+             persist: !1
+           })
+         }
```

#### 361. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6102-L6112` → after: `L9460-L9481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9460-L9481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9460-L9481) · [Before (L6102-L6112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6102-L6112)

```diff
-     }
-     YV.Enabled = !0
-   },
-   41353: (VV, eV, xV) => {
-     xV.d(eV, {
-       c: () => YV,
-       f: () => JV
-     });
-     class JV {
-       constructor(VV) {
-         this.length = 0, this.data = new Array(VV), this._id = JV._GlobalId++
+       updateFlags(HH, BH, LH) {
+         var AH, rH;
+         const SH = (null == LH ? void 0 : LH.merge) && null !== (AH = this._prop("$enabled_feature_flags")) && void 0 !== AH ? AH : {},
+           hH = (null == LH ? void 0 : LH.merge) && null !== (rH = this._prop("$feature_flag_payloads")) && void 0 !== rH ? rH : {},
+           tH = xr(xr({}, SH), HH),
+           zH = xr(xr({}, hH), BH),
+           CH = {};
+         for (const [EH, XH] of Object.entries(tH)) CH[EH] = {
+           key: EH,
+           enabled: YS(XH),
+           variant: uS(XH),
+           reason: void 0,
+           metadata: VL(null == zH ? void 0 : zH[EH]) ? void 0 : {
+             id: 0,
+             version: void 0,
+             description: void 0,
+ ... (6 more added lines; see GitHub link above)
```

#### 362. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6114-L6115` → after: `L9483-L9484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9483-L9484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9483-L9484) · [Before (L6114-L6115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6114-L6115)

```diff
-       push(VV) {
-         this.data[this.length++] = VV, this.length > this.data.length && (this.data.length *= 2)
+       get hasLoadedFlags() {
+         return this._hasLoadedFlags
```

#### 363. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6117-L6118` → after: `L9486-L9529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9486-L9529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9486-L9529) · [Before (L6117-L6118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6117-L6118)

```diff
-       forEach(VV) {
-         for (let eV = 0; eV < this.length; eV++) VV(this.data[eV])
+       getFlags() {
+         return Object.keys(this.getFlagVariants())
+       }
+       getFlagsWithDetails() {
+         const HH = this._prop(zH),
+           BH = this._prop(vH),
+           LH = this._prop(PH);
+         if (!LH && !BH) return HH || {};
+         const AH = jh({}, HH || {}),
+           rH = [...new Set([...Object.keys(LH || {}), ...Object.keys(BH || {})])];
+         for (const tH of rH) {
+           var SH, hH;
+           const HH = AH[tH],
+             rH = null == BH ? void 0 : BH[tH],
+             zH = VL(rH) ? null !== (SH = null == HH ? void 0 : HH.enabled) && void 0 !== SH && SH : !!rH,
+             CH = VL(rH) ? null == HH ? void 0 : HH.variant : "string" == typeof rH ? rH : void 0,
+ ... (28 more added lines; see GitHub link above)
```

#### 364. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6120-L6121` → after: `L9531-L9573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9531-L9573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9531-L9573) · [Before (L6120-L6121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6120-L6121)

```diff
-       sort(VV) {
-         this.data.sort(VV)
+       getFlagVariants() {
+         const HH = this._prop(YH),
+           BH = this._prop(vH);
+         if (!BH) return HH || {};
+         const LH = jh({}, HH || {}),
+           AH = Object.keys(BH);
+         for (let rH = 0; AH.length > rH; rH++) LH[AH[rH]] = BH[AH[rH]];
+         return this._override_warning || (this._logger.warn(" Overriding feature flags!", {
+           enabledFlags: HH,
+           overriddenFlags: BH,
+           finalFlags: LH
+         }), this._override_warning = !0), LH
+       }
+       getFlagPayloads() {
+         const HH = this._prop(xH),
+           BH = this._prop(PH);
+ ... (27 more added lines; see GitHub link above)
```

#### 365. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6123-L6124` → after: `L9575-L9578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9575-L9578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9575-L9578) · [Before (L6123-L6124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6123-L6124)

```diff
-       reset() {
-         this.length = 0
+       _settleReloads(HH, BH) {
+         HH.forEach((HH => HH({
+           status: BH
+         }))), HH.clear()
```

#### 366. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6126-L6127` → after: `L9580-L9581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9580-L9581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9580-L9581) · [Before (L6126-L6127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6126-L6127)

```diff
-       dispose() {
-         this.reset(), this.data && (this.data.length = 0)
+       _clearDebouncer() {
+         clearTimeout(this._reloadDebouncer), this._reloadDebouncer = void 0
```

#### 367. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6129-L6132` → after: `L9583-L9585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9583-L9585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9583-L9585) · [Before (L6129-L6132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6129-L6132)

```diff
-       concat(VV) {
-         if (0 !== VV.length) {
-           this.length + VV.length > this.data.length && (this.data.length = 2 * (this.length + VV.length));
-           for (let eV = 0; eV < VV.length; eV++) this.data[this.length++] = (VV.data || VV)[eV]
+       onReloading(HH) {
+         return this._reloadingHandlers.push(HH), () => {
+           this._reloadingHandlers = this._reloadingHandlers.filter((BH => BH !== HH))
```

#### 368. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6135-L6137` → after: `L9588-L9589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9588-L9589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9588-L9589) · [Before (L6135-L6137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6135-L6137)

```diff
-       indexOf(VV) {
-         const eV = this.data.indexOf(VV);
-         return eV >= this.length ? -1 : eV
+       ensureFlagsLoaded() {
+         this._hasLoadedFlags || this._requestInFlight || this._reloadDebouncer || this.reloadFeatureFlags()
```

#### 369. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6139-L6140` → after: `L9591-L9592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9591-L9592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9591-L9592) · [Before (L6139-L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6139-L6140)

```diff
-       contains(VV) {
-         return -1 !== this.indexOf(VV)
+       setAnonymousDistinctId(HH) {
+         this.$anon_distinct_id = HH
```

#### 370. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6142-L6146` → after: `L9594-L9598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9594-L9598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9594-L9598) · [Before (L6142-L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6142-L6146)

```diff
-     }
-     JV._GlobalId = 0;
-     class YV extends JV {
-       constructor() {
-         super(...arguments), this._duplicateId = 0
+       setReloadingPaused(HH) {
+         this._reloadingDisabled = HH
+       }
+       resetFlagCallReported() {
+         this._remove(WH)
```

#### 371. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6148-L6149` → after: `L9600-L9672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9600-L9672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9600-L9672) · [Before (L6148-L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6148-L6149)

```diff
-       push(VV) {
-         super.push(VV), VV.__smartArrayFlags || (VV.__smartArrayFlags = {}), VV.__smartArrayFlags[this._id] = this._duplicateId
+       _callFlagsEndpoint(HH) {
+         var BH;
+         this._clearDebouncer();
+         const LH = this._client;
+         if (!LH || this._config.remoteRequestsDisabled || this._hasStatusZeroCircuitBreakerTripped()) return void this._settleReloads(this._pendingReloads, "skipped");
+         if (this._requestInFlight) return void(this._additionalReloadRequested = !0);
+         const AH = {
+           token: LH.projectToken,
+           distinct_id: LH.distinctId,
+           groups: LH.groups,
+           $anon_distinct_id: this.$anon_distinct_id,
+           person_properties: xr(xr(xr({}, LH.initialPersonProperties), this._prop("$stored_person_properties") || {}), {}, {
+             $lib: LH.library.name,
+             $lib_version: LH.library.version
+           }),
+           group_properties: this._prop(uH),
+ ... (57 more added lines; see GitHub link above)
```

#### 372. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6151-L6152` → after: `L9674-L9675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9674-L9675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9674-L9675) · [Before (L6151-L6152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6151-L6152)

```diff
-       pushNoDuplicate(VV) {
-         return (!VV.__smartArrayFlags || VV.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(VV), !0)
+       _hasStatusZeroCircuitBreakerTripped() {
+         return ez(this._consecutiveStatusZeroFailures, 3)
```

#### 373. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6154-L6155` → after: `L9677-L9678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9677-L9678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9677-L9678) · [Before (L6154-L6155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6154-L6155)

```diff
-       reset() {
-         super.reset(), this._duplicateId++
+       _trackStatusZeroReachability(HH) {
+         this._consecutiveStatusZeroFailures = qz(HH, this._consecutiveStatusZeroFailures, 3, (() => this._logger.warn("Feature flag requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped refre … [truncated]
```

#### 374. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6157-L6163` → after: `L9680-L9761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9680-L9761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9680-L9761) · [Before (L6157-L6163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6157-L6163)

```diff
-       concatWithNoDuplicate(VV) {
-         if (0 !== VV.length) {
-           this.length + VV.length > this.data.length && (this.data.length = 2 * (this.length + VV.length));
-           for (let eV = 0; eV < VV.length; eV++) {
-             const xV = (VV.data || VV)[eV];
-             this.pushNoDuplicate(xV)
-           }
+       getFeatureFlag(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+         var LH;
+         if (BH.fresh && !this._flagsLoadedFromRemote) return;
+         if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return void this._logger.warn('getFeatureFlag for key "' + HH + qG);
+         if (this._checkAndTriggerStaleRefresh()) return;
+         const AH = this.getFeatureFlagResult(HH, BH);
+         return null !== (LH = null == AH ? void 0 : AH.variant) && void 0 !== LH ? LH : null == AH ? void 0 : AH.enabled
+       }
+       getFeatureFlagDetails(HH) {
+         return this.getFlagsWithDetails()[HH]
+       }
+       getFeatureFlagPayload(HH) {
+         const BH = this.getFeatureFlagResult(HH, {
+           send_event: !1
+         });
+ ... (66 more added lines; see GitHub link above)
```

#### 375. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6166-L6174` → after: `L9764-L9765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9764-L9765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9764-L9765) · [Before (L6166-L6174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6166-L6174)

```diff
-     }
-   },
-   41286: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => YV
-     });
-     class JV {
-       static Eval(VV, eV) {
-         return "true" === (VV = VV.match(/\([^()]*\)/g) ? VV.replace(/\([^()]*\)/g, (VV => (VV = VV.slice(1, VV.length - 1), JV._HandleParenthesisContent(VV, eV)))) : JV._HandleParenthesisContent(VV, eV)) || "false" !== VV && JV.Eval(VV, eV)
+       getRemoteConfigPayload(HH, BH) {
+         this._getRemoteConfigPayload(HH, BH)
```

#### 376. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6176-L6190` → after: `L9767-L9777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9767-L9777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9767-L9777) · [Before (L6176-L6190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6176-L6190)

```diff
-       static _HandleParenthesisContent(VV, eV) {
-         let xV;
-         eV = eV || (VV => "true" === VV);
-         const YV = VV.split("||");
-         for (const UV in YV)
-           if (Object.prototype.hasOwnProperty.call(YV, UV)) {
-             let VV = JV._SimplifyNegation(YV[UV].trim());
-             const yV = VV.split("&&");
-             if (yV.length > 1)
-               for (let YV = 0; YV < yV.length; ++YV) {
-                 const UV = JV._SimplifyNegation(yV[YV].trim());
-                 if (xV = "true" !== UV && "false" !== UV ? "!" === UV[0] ? !eV(UV.substring(1)) : eV(UV) : "true" === UV, !xV) {
-                   VV = "false";
-                   break
-                 }
+       _getRemoteConfigPayload(HH, BH) {
+         var LH = this;
+         return DL((function*() {
+           const AH = LH._client;
+           if (!AH) return;
+           const rH = {
+               distinct_id: AH.distinctId,
+               token: AH.projectToken,
+               person_properties: {
+                 $lib: AH.library.name,
+                 $lib_version: AH.library.version
```

#### 377. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6192-L6194` → after: `L9779-L9866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9779-L9866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9779-L9866) · [Before (L6192-L6194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6192-L6194)

```diff
-             if (xV || "true" === VV) {
-               xV = !0;
-               break
+             },
+             SH = LH._getValidEvaluationEnvironments();
+           SH.length && (rH.evaluation_contexts = SH);
+           const hH = LH._getValidFlagKeys();
+           let tH;
+           VL(hH) || (rH.flag_keys = hH);
+           try {
+             var zH;
+             const BH = null === (zH = (yield AH.sendRequest("/flags/?v=2", {
+               target: "flags",
+               method: "POST",
+               body: rH,
+               compression: LH._config.compression,
+               sentAt: "body",
+               timeoutMs: LH._config.requestTimeoutMs
+             })).json) || void 0 === zH ? void 0 : zH.featureFlagPayloads;
+ ... (72 more added lines; see GitHub link above)
```

#### 378. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6196-L6208` → after: `L9868-L9924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9868-L9924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9868-L9924) · [Before (L6196-L6208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6196-L6208)

```diff
-             xV = "true" !== VV && "false" !== VV ? "!" === VV[0] ? !eV(VV.substring(1)) : eV(VV) : "true" === VV
-           } return xV ? "true" : "false"
-       }
-       static _SimplifyNegation(VV) {
-         return "!true" === (VV = (VV = VV.replace(/^[\s!]+/, (VV => (VV = VV.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? VV = "false" : "!false" === VV && (VV = "true"), VV
-       }
-     }
-     class YV {
-       static EnableFor(VV) {
-         VV._tags = VV._tags || {}, VV.hasTags = () => YV.HasTags(VV), VV.addTags = eV => YV.AddTagsTo(VV, eV), VV.removeTags = eV => YV.RemoveTagsFrom(VV, eV), VV.matchesTagsQuery = eV => YV.MatchesQuery(VV, eV)
-       }
-       static DisableFor(VV) {
-         delete VV._tags, delete VV.hasTags, delete VV.addTags, delete VV.removeTags, delete VV.matchesTagsQuery
+           }
+           let vH = uH,
+             PH = QH,
+             TH = CH;
+           if (null == rH ? void 0 : rH.partialResponse) {
+             const HH = Object.keys(vH),
+               rH = PH || {};
+             vH = xr(xr({}, BH), vH), PH = xr(xr({}, LH), rH), HH.forEach((HH => {
+               HH in rH || null == PH || delete PH[HH]
+             })), TH = xr(xr({}, AH), TH)
+           } else if (HH.errorsWhileComputingFlags)
+             if (CH) {
+               const HH = new Set(Object.keys(CH).filter((HH => {
+                 var BH;
+                 return !(null === (BH = CH[HH]) || void 0 === BH ? void 0 : BH.failed)
+               })));
+ ... (41 more added lines; see GitHub link above)
```

#### 379. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6210-L6215` → after: `L9926-L9927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9926-L9927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9926-L9927) · [Before (L6210-L6215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6210-L6215)

```diff
-       static HasTags(VV) {
-         if (!VV._tags) return !1;
-         const eV = VV._tags;
-         for (const xV in eV)
-           if (Object.prototype.hasOwnProperty.call(eV, xV)) return !0;
-         return !1
+       overrideFeatureFlags(HH) {
+         this._overrideFeatureFlags(HH)
```

#### 380. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6217-L6223` → after: `L9929-L9970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9929-L9970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9929-L9970) · [Before (L6217-L6223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6217-L6223)

```diff
-       static GetTags(VV) {
-         let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (!VV._tags) return null;
-         if (eV) {
-           const eV = [];
-           for (const xV in VV._tags) Object.prototype.hasOwnProperty.call(VV._tags, xV) && !0 === VV._tags[xV] && eV.push(xV);
-           return eV.join(" ")
+       _overrideFeatureFlags(HH) {
+         if (this._client) {
+           if (!1 === HH) return this._remove([vH, PH]), this._fireFeatureFlagsCallbacks(), void eG.info("All overrides cleared");
+           if (vL(HH)) return this._set({
+             [vH]: jG(HH)
+           }), this._fireFeatureFlagsCallbacks(), void eG.info("Flag overrides set", {
+             flags: HH
+           });
+           if (HH && "object" == typeof HH && ("flags" in HH || "payloads" in HH)) {
+             var BH;
+             const LH = HH;
+             this._override_warning = Boolean(null !== (BH = LH.suppressWarning) && void 0 !== BH && BH);
+             const AH = {},
+               rH = LH.flags,
+               SH = LH.payloads;
+             return rH && (AH[vH] = vL(rH) ? jG(rH) : rH), SH && (AH[PH] = SH), Object.keys(AH).length && this._set(AH), !1 === rH && !1 === SH ? this._remove([vH, PH]) : !1 === rH ? this._remove(vH) : !1 === SH && this._remove(PH), this._fireFeatureFlagsCallbacks(), !1 === rH ? e … [truncated]
+ ... (26 more added lines; see GitHub link above)
```

#### 381. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6225` → after: `L9972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9972) · [Before (L6225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6225)

```diff
-         return VV._tags
+         return () => this.removeFeatureFlagsHandler(HH)
```

#### 382. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6227-L6231` → after: `L9974-L10003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9974-L10003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9974-L10003) · [Before (L6227-L6231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6227-L6231)

```diff
-       static AddTagsTo(VV, eV) {
-         if (!eV) return;
-         if ("string" !== typeof eV) return;
-         const xV = eV.split(" ");
-         for (const JV of xV) YV._AddTagTo(VV, JV)
+       updateEarlyAccessFeatureEnrollment(HH, BH, LH) {
+         var AH;
+         const rH = (this._prop("$early_access_features") || []).find((BH => BH.flagKey === HH)),
+           SH = {
+             [`$feature_enrollment/${HH}`]: BH
+           },
+           hH = {
+             $feature_flag: HH,
+             $feature_enrollment: BH,
+             $set: SH
+           };
+         rH && (hH.$early_access_feature_name = rH.name), LH && (hH.$feature_enrollment_stage = LH);
+         const zH = xr(xr({}, this.getFlagVariants()), {}, {
+           [HH]: BH
+         });
+         null === (AH = this._crossTabPersistence) || void 0 === AH || AH.markCrossTabFeatureFlagChanges({
+ ... (14 more added lines; see GitHub link above)
```

#### 383. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6233-L6234` → after: `L10005-L10009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10005-L10009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10005-L10009) · [Before (L6233-L6234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6233-L6234)

```diff
-       static _AddTagTo(VV, eV) {
-         "" !== (eV = eV.trim()) && "true" !== eV && "false" !== eV && (eV.match(/[\s]/) || eV.match(/^([!]|([|]|[&]){2})/) || (YV.EnableFor(VV), VV._tags[eV] = !0))
+       getEarlyAccessFeatures(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           LH = arguments.length > 2 ? arguments[2] : void 0;
+         const AH = this._prop(hH);
+         !AH || BH ? this._getEarlyAccessFeatures(HH, LH) : HH(AH)
```

#### 384. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6236-L6239` → after: `L10011-L10036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10011-L10036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10011-L10036) · [Before (L6236-L6239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6236-L6239)

```diff
-       static RemoveTagsFrom(VV, eV) {
-         if (!YV.HasTags(VV)) return;
-         const xV = eV.split(" ");
-         for (const JV in xV) YV._RemoveTagFrom(VV, xV[JV])
+       _getEarlyAccessFeatures(HH, BH) {
+         var LH = this;
+         return DL((function*() {
+           const AH = LH._client;
+           if (!AH) return;
+           const rH = BH ? `&${BH.map((HH=>`stage=${HH}`)).join("&")}` : "";
+           let SH;
+           try {
+             const HH = yield AH.sendRequest(`/api/early_access_features/?token=${AH.projectToken}${rH}`, {
+               target: "api",
+               method: "GET",
+               sentAt: "query"
+             });
+             if (!HH.json) return;
+             SH = HH.json.earlyAccessFeatures, LH._set({
+               [hH]: SH
+ ... (10 more added lines; see GitHub link above)
```

#### 385. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6241-L6242` → after: `L10038-L10044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10038-L10044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10038-L10044) · [Before (L6241-L6242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6241-L6242)

```diff
-       static _RemoveTagFrom(VV, eV) {
-         delete VV._tags[eV]
+       _prepareFeatureFlagsForCallbacks() {
+         const HH = this.getFlags(),
+           BH = this.getFlagVariants();
+         return {
+           flags: HH.filter((HH => BH[HH])),
+           flagVariants: Object.keys(BH).filter((HH => BH[HH])).reduce(((HH, LH) => (HH[LH] = BH[LH], HH)), {})
+         }
```

#### 386. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6244-L6245` → after: `L10046-L10060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10046-L10060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10046-L10060) · [Before (L6244-L6245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6244-L6245)

```diff
-       static MatchesQuery(VV, eV) {
-         return void 0 === eV || ("" === eV ? YV.HasTags(VV) : JV.Eval(eV, (eV => YV.HasTags(VV) && VV._tags[eV])))
+       _fireFeatureFlagsCallbacks(HH) {
+         this._rebuildEventProperties();
+         const {
+           flags: BH,
+           flagVariants: LH
+         } = this._prepareFeatureFlagsForCallbacks();
+         this.featureFlagEventHandlers.forEach((AH => {
+           try {
+             AH(BH, LH, {
+               errorsLoading: HH
+             })
+           } catch (HH) {
+             this._logger.error("Error while running feature flags callback", HH)
+           }
+         }))
```

#### 387. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6247-L6257` → after: `L10062-L10064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10062-L10064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10062-L10064) · [Before (L6247-L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6247-L6257)

```diff
-     }
-   },
-   41398: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => UV
-     });
-     var JV = xV(41394),
-       YV = xV(38296);
-     class UV {
-       constructor(VV) {
-         this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new YV.c, this._scene = VV
+       setPersonPropertiesForFlags(HH) {
+         let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         this._setPersonPropertiesForFlags(HH, BH)
```

#### 388. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6259-L6262` → after: `L10066-L10076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10066-L10076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10066-L10076) · [Before (L6259-L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6259-L6262)

```diff
-       _prepareBuffers() {
-         if (this._vertexBuffers[JV.j.PositionKind]) return;
-         const VV = [];
-         VV.push(1, 1), VV.push(-1, 1), VV.push(-1, -1), VV.push(1, -1), this._vertexBuffers[JV.j.PositionKind] = new JV.j(this._scene.sk(), VV, JV.j.PositionKind, !1, !1, 2), this._buildIndexBuffer()
+       _setPersonPropertiesForFlags(HH) {
+         let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         const LH = this._prop("$stored_person_properties") || {},
+           AH = (null == HH ? void 0 : HH.$set) || ((null == HH ? void 0 : HH.$set_once) ? {} : HH),
+           rH = null == HH ? void 0 : HH.$set_once,
+           SH = {};
+         if (rH)
+           for (const hH in rH)({}).hasOwnProperty.call(rH, hH) && (hH in LH || (SH[hH] = rH[hH]));
+         this._set({
+           [QH]: xr(xr(xr({}, LH), SH), AH)
+         }), BH && this.reloadFeatureFlags()
```

#### 389. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6264-L6266` → after: `L10078-L10089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10078-L10089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10078-L10089) · [Before (L6264-L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6264-L6266)

```diff
-       _buildIndexBuffer() {
-         const VV = [];
-         VV.push(0), VV.push(1), VV.push(2), VV.push(0), VV.push(2), VV.push(3), this._indexBuffer = this._scene.sk().createIndexBuffer(VV)
+       unsetPersonPropertiesForFlags(HH) {
+         let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         const LH = xr({}, this._prop("$stored_person_properties") || {});
+         HH.forEach((HH => {
+           delete LH[HH]
+         })), this._set({
+           [QH]: LH
+         }), BH && this.reloadFeatureFlags()
+       }
+       resetPersonPropertiesForFlags() {
+         let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         this._remove(QH), HH && this.reloadFeatureFlags()
```

#### 390. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6268-L6275` → after: `L10091-L10108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10091-L10108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10091-L10108) · [Before (L6268-L6275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6268-L6275)

```diff
-       _getActivePostProcesses(VV) {
-         const eV = this._activePostProcesses;
-         eV.length = 0;
-         for (let xV = 0; xV < VV.length; xV++) {
-           const JV = VV[xV];
-           JV && eV.push(JV)
-         }
-         return eV
+       setGroupPropertiesForFlags(HH) {
+         let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         const LH = this._prop("$stored_group_properties") || {},
+           AH = xr({}, LH);
+         for (const rH of Object.keys(HH)) AH[rH] = xr(xr({}, LH[rH]), HH[rH]);
+         this._set({
+           [uH]: AH
+         }), BH && this.reloadFeatureFlags()
+       }
+       resetGroupPropertiesForFlags(HH) {
+         if (HH) {
+           const BH = this._prop("$stored_group_properties") || {};
+           this._set({
+             [uH]: xr(xr({}, BH), {}, {
+               [HH]: {}
+             })
+ ... (2 more added lines; see GitHub link above)
```

#### 391. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6277-L6301` → after: `L10110-L10111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10110-L10111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10110-L10111) · [Before (L6277-L6301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6277-L6301)

```diff
-       _rebuild() {
-         const VV = this._vertexBuffers[JV.j.PositionKind];
-         VV && (VV._rebuild(), this._buildIndexBuffer())
-       }
-       _prepareFrame() {
-         let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-         const xV = this._scene.activeCamera;
-         return !!xV && (eV = eV || this._getActivePostProcesses(xV._postProcesses), !(!eV || 0 === eV.length || !this._scene.postProcessesEnabled) && (eV[0].activate(xV, VV, null !== eV && void 0 !== eV), !0))
-       }
-       directRender(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-           YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
-           UV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
- ... (9 more removed lines; see GitHub link above)
+       reset() {
+         this._requestGeneration++, this._settleReloads(this._pendingReloads, "xB"), this._settleReloads(this._activeReloads, "xB"), this._additionalReloadRequested = !1, this._baseEventProperties = {}, this._eventPropertiesWithFlagValues = {}, this._bootstrapState = void 0, this. … [truncated]
```

#### 392. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6303-L6315` → after: `L10113-L10118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10113-L10118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10113-L10118) · [Before (L6303-L6315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6303-L6315)

```diff
-       _finalizeFrame(VV, eV, xV, JV) {
-         let YV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const UV = this._scene.activeCamera;
-         if (!UV) return;
-         if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (JV = JV || this._getActivePostProcesses(UV._postProcesses)).length || !this._scene.postProcessesEnabled) return;
-         const yV = this._scene.sk();
-         for (let pV = 0, QV = JV.length; pV < QV; pV++) {
-           const nV = JV[pV];
-           if (pV < QV - 1 ? nV._outputTexture = JV[pV + 1].activate(UV, eV?.texture) : (eV ? (yV.bindFramebuffer(eV, xV, void 0, void 0, YV), nV._outputTexture = eV) : (yV.restoreDefaultFramebuffer(), nV._outputTexture = null), yV._debugInsertMarker?.(`post process ${JV[pV].name} … [truncated]
-           const wV = nV.apply();
-           wV && (nV.onBeforeRenderObservable.notifyObservers(wV), this._prepareBuffers(), yV.bindBuffers(this._vertexBuffers, this._indexBuffer, wV), yV.drawElementsType(0, 0, 6), nV.onAfterRenderObservable.notifyObservers(wV))
-         }
-         yV.setDepthBuffer(!0), yV.setDepthWrite(!0), yV.setAlphaMode(0)
+     };
+     const DG = gh("[FeatureFlags]");
+     var wG = class {
+       constructor(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         this._loggedEvaluationEnvironmentsDeprecation = !1, this.update(HH, BH)
```

#### 393. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6317-L6319` → after: `L10120-L10144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10120-L10144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10120-L10144) · [Before (L6317-L6319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6317-L6319)

```diff
-       dispose() {
-         const VV = this._vertexBuffers[JV.j.PositionKind];
-         VV && (VV.dispose(), this._vertexBuffers[JV.j.PositionKind] = null), this._indexBuffer && (this._scene.sk()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
+       update(HH, BH) {
+         this._snapshot = ((HH, BH) => {
+           var LH, AH, rH, SH, hH, tH, zH, CH;
+           return {
+             bootstrap: {
+               featureFlags: null !== (LH = null === (AH = HH.bootstrap) || void 0 === AH ? void 0 : AH.featureFlags) && void 0 !== LH ? LH : void 0,
+               featureFlagPayloads: null !== (rH = null === (SH = HH.bootstrap) || void 0 === SH ? void 0 : SH.featureFlagPayloads) && void 0 !== rH ? rH : void 0
+             },
+             remoteRequestsDisabled: BH,
+             featureFlagsDisabled: !!HH.advanced_disable_feature_flags,
+             onlyEvaluateSurveyFeatureFlags: !!HH.advanced_only_evaluate_survey_feature_flags,
+             deduplicateCallsPerSession: !!HH.advanced_feature_flags_dedup_per_session,
+             cacheTtlMs: HH.feature_flag_cache_ttl_ms,
+             refreshIntervalMs: null !== (hH = HH.remote_config_refresh_interval_ms) && void 0 !== hH ? hH : 3e5,
+             idleRefreshBackoff: VL(HH.remote_config_refresh_interval_ms),
+             requestTimeoutMs: HH.feature_flag_request_timeout_ms,
+ ... (9 more added lines; see GitHub link above)
```

#### 394. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6321-L6331` → after: `L10146-L10169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10146-L10169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10146-L10169) · [Before (L6321-L6331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6321-L6331)

```diff
-     }
-   },
-   41420: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => nV
-     });
-     var JV = xV(41353),
-       YV = xV(38269);
-     const UV = [],
-       yV = [];
-     let pV = !1;
+     };
+     const ZG = HH => qL(HH) && ("RangeError" === HH.name && 0 === HH.message.indexOf("Maximum call stack size exceeded") || "InternalError" === HH.name && "too much recursion" === HH.message),
+       dG = gh("[Error tracking]"),
+       aG = "webkit-masked-url:",
+       sG = [{
+         value: "isolatedAPI.contexts.topHostname",
+         exact: !1
+       }, {
+         value: "No response from target",
+         exact: !0
+       }],
+       JG = ["chrome-extension://", "moz-extension://", "safari-extension:", "safari-web-extension:", aG],
+       iG = ["__firefox__", "__gCrWeb"],
+       pG = "Refusing to render web experiment since the viewer is a likely bot",
+       yG = {
+         icontains: (HH, BH) => BH.toLowerCase().indexOf(HH.toLowerCase()) > -1,
+ ... (8 more added lines; see GitHub link above)
```

#### 395. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6334-L6344` → after: `L10172-L10233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10172-L10233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10172-L10233) · [Before (L6334-L6344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6334-L6344)

```diff
-       for (; VV.length < eV;) VV.push(void 0)
-     }
-     class nV {
-       set opaqueSortCompareFn(VV) {
-         this._opaqueSortCompareFn = VV || nV.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
-       }
-       set alphaTestSortCompareFn(VV) {
-         this._alphaTestSortCompareFn = VV || nV.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
-       }
-       set transparentSortCompareFn(VV) {
-         this._transparentSortCompareFn = VV || nV.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
+       var LH, AH, rH, SH, hH, tH, zH;
+       const CH = null !== (LH = null == HH ? void 0 : HH.flushIntervalMs) && void 0 !== LH ? LH : 3e3,
+         EH = null !== (AH = null == HH ? void 0 : HH.maxBufferSize) && void 0 !== AH ? AH : 100,
+         XH = (null == BH ? void 0 : BH.consoleCapture) ? void 0 : null !== (rH = null == HH ? void 0 : HH.maxLogsPerInterval) && void 0 !== rH ? rH : 1e3,
+         GH = VL(XH) ? Math.max(EH, 2048) : Math.max(EH, XH),
+         YH = xr(xr({}, function() {
+           let HH = "",
+             BH = "";
+           try {
+             var LH;
+             const AH = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : void 0,
+               rH = null == AH || null === (LH = AH.navigator) || void 0 === LH ? void 0 : LH.userAgent;
+             rH && ([HH, BH] = JA(rH))
+           } catch (HH) {}
+           return function(HH, BH) {
+             const LH = function(HH) {
+ ... (46 more added lines; see GitHub link above)
```

#### 396. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6347-L6401` → after: `L10236-L10240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10236-L10240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10236-L10240) · [Before (L6347-L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6347-L6401)

```diff
-         let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-           YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-           UV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
-         this.index = VV, this._opaqueSubMeshes = new JV.f(256), this._transparentSubMeshes = new JV.f(256), this._alphaTestSubMeshes = new JV.f(256), this._depthOnlySubMeshes = new JV.f(256), this._particleSystems = new JV.f(256), this._spriteManagers = new JV.f(256), this._empty … [truncated]
-       }
-       render(VV, eV, xV, JV) {
-         let YV = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
-           UV = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-           yV = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
-           pV = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
-           QV = arguments.length > 8 ? arguments[8] : void 0;
-         if (VV) return void VV(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
-         const nV = this._scene.sk();
-         YV && 0 !== this._depthOnlySubMeshes.length && (nV.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), nV.setColorWrite(!0)), UV && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), yV && 0 !== this._alphaTestSubMeshes.length … [truncated]
-         const wV = nV.getStencilBuffer();
-         if (nV.setStencilBuffer(!1), eV && this._renderSprites(), xV && this._renderParticles(JV), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), pV && (QV || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
- ... (39 more removed lines; see GitHub link above)
+         var LH;
+         this._configSource = HH, this._getSdkContext = BH, this.name = "logs", this._isLogsEnabled = !1, this._isLoaded = !1, this._isLoading = !1, this._logger = gh("[logs]"), this._queue = [], this._consoleQueue = [], this._consecutiveStatusZeroFailures = 0, this._setupStarted  … [truncated]
+           var HH, BH;
+           this._disposed || (this._consecutiveStatusZeroFailures = 0, null === (HH = this._core) || void 0 === HH || HH.onReconnect(), null === (BH = this._consoleCore) || void 0 === BH || BH.onReconnect())
+         }, this._isLogsEnabled = !!(null === (LH = HH.get()) || void 0 === LH ? void 0 : LH.captureConsoleLogs)
```

#### 397. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6403-L6419` → after: `L10242-L10243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10242-L10243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10242-L10243) · [Before (L6403-L6419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6403-L6419)

```diff
-       static _DrawSorted(VV, eV, xV, JV) {
-         let YV;
-         const UV = VV[0].getMesh().dD();
-         for (let yV = 0; yV < eV; yV++) {
-           if (YV = VV[yV], UV._activeMeshesFrozenButKeepClipping && !YV.isInFrustum(UV._frustumPlanes)) continue;
-           let eV = !1;
-           if (xV) {
-             const VV = YV.eb();
-             if (VV && VV.needDepthPrePass && !JV) {
-               eV = !0;
-               const xV = VV.dD().sk();
-               xV.setColorWrite(!1), xV.setAlphaMode(0), YV.render(!1), xV.setColorWrite(!0)
-             }
-           }
-           const pV = YV._renderingMesh;
-           !eV && pV._renderRunFollower(YV, xV) || YV.render(xV)
- ... (1 more removed lines; see GitHub link above)
+       get _isRequestReady() {
+         return !0
```

#### 398. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6421-L6437` → after: `L10245-L10247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10245-L10247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10245-L10247) · [Before (L6421-L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6421-L6437)

```diff
-       static _StableSort(VV, eV, xV) {
-         for (let JV = 0; JV < eV; JV += 16) {
-           const YV = Math.min(JV + 16, eV);
-           for (let eV = JV + 1; eV < YV; eV++) {
-             const YV = VV[eV];
-             let UV = JV,
-               yV = eV;
-             for (; UV < yV;) {
-               const eV = UV + yV >>> 1;
-               xV(YV, VV[eV]) < 0 ? yV = eV : UV = eV + 1
-             }
-             for (let xV = eV; xV > UV; xV--) VV[xV] = VV[xV - 1];
-             VV[UV] = YV
-           }
-         }
-         if (!(eV <= 16)) {
- ... (1 more removed lines; see GitHub link above)
+       _getConsoleLoader() {}
+       _listenForReconnect() {
+         if (!this._listeningForReconnect) {
```

#### 399. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6439-L6459` → after: `L10249-L10251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10249-L10251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10249-L10251) · [Before (L6439-L6459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6439-L6459)

```diff
-             let JV = VV,
-               YV = UV;
-             for (let VV = 16; VV < eV; VV *= 2) {
-               for (let yV = 0; yV < eV; yV += 2 * VV) {
-                 const UV = Math.min(yV + VV, eV),
-                   pV = Math.min(yV + 2 * VV, eV);
-                 let QV = yV,
-                   nV = UV,
-                   wV = yV;
-                 if (UV < pV && xV(JV[UV], JV[UV - 1]) < 0)
-                   for (; QV < UV && nV < pV;) YV[wV++] = xV(JV[nV], JV[QV]) < 0 ? JV[nV++] : JV[QV++];
-                 for (; QV < UV;) YV[wV++] = JV[QV++];
-                 for (; nV < pV;) YV[wV++] = JV[nV++]
-               }
-               const UV = YV;
-               YV = JV, JV = UV
- ... (5 more removed lines; see GitHub link above)
+             this._window = typeof window > "u" ? void 0 : window
+           } catch (AH) {
+             this._window = void 0
```

#### 400. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6463-L6470` → after: `L10256-L10259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10256-L10259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10256-L10259) · [Before (L6463-L6470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6463-L6470)

```diff
-       static defaultTransparentSortCompare(VV, eV) {
-         return VV._alphaIndex > eV._alphaIndex ? 1 : VV._alphaIndex < eV._alphaIndex ? -1 : nV.backToFrontSortCompare(VV, eV)
-       }
-       static backToFrontSortCompare(VV, eV) {
-         return VV._distanceToCamera < eV._distanceToCamera ? 1 : VV._distanceToCamera > eV._distanceToCamera ? -1 : 0
-       }
-       static frontToBackSortCompare(VV, eV) {
-         return VV._distanceToCamera < eV._distanceToCamera ? -1 : VV._distanceToCamera > eV._distanceToCamera ? 1 : 0
+       _buildCore(HH, BH, LH, AH) {
+         this._listenForReconnect();
+         const rH = LY(this._configSource.get(), LH);
+         return [new Ih(this._createHost(HH, BH), rH, this._coreLogger, (() => this._getSdkContext()), (HH => HH()), void 0, AH), rH]
```

#### 401. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6472-L6475` → after: `L10261-L10266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10261-L10266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10261-L10266) · [Before (L6472-L6475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6472-L6475)

```diff
-       static PainterSortCompare(VV, eV) {
-         const xV = VV.getMesh(),
-           JV = eV.getMesh();
-         return xV.material && JV.material ? xV.material.uniqueId - JV.material.uniqueId : xV.uniqueId - JV.uniqueId
+       _getCore() {
+         const HH = this._configSource.get();
+         var BH;
+         return this._core && this._resolvedFrom === HH || (null === (BH = this._core) || void 0 === BH || BH.reset(), this._resolvedFrom = HH, [this._core, this._resolvedConfig] = this._buildCore((() => this._queue), (HH => {
+           this._queue = HH
+         }))), this._core
```

#### 402. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6477-L6478` → after: `L10268-L10281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10268-L10281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10268-L10281) · [Before (L6477-L6478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6477-L6478)

```diff
-       prepare() {
-         this._opaqueSubMeshes.reset(), this._transparentSubMeshes.reset(), this._alphaTestSubMeshes.reset(), this._depthOnlySubMeshes.reset(), this._particleSystems.reset(), this.prepareSprites(), this._edgesRenderers.reset(), this._empty = !0
+       _getConsoleCore() {
+         const HH = this._configSource.get();
+         var BH;
+         return this._consoleCore && this._consoleResolvedFrom === HH || (null === (BH = this._consoleCore) || void 0 === BH || BH.reset(), this._consoleResolvedFrom = HH, [this._consoleCore, this._consoleResolvedConfig] = this._buildCore((() => this._consoleQueue), (HH => {
+           this._consoleQueue = HH
+         }), {
+           serviceNameDefault: "posthog-browser-logs",
+           consoleCapture: !0
+         }, SY)), this._consoleCore
+       }
+       setup(HH) {
+         if (!this._disposed && !this._setupStarted) return this._setupStarted = !0, this._client = HH, this._logger = HH.logger.createLogger("[logs]"), PG(HH.kv.initialize(), (() => {
+           this._disposed || this._finishSetup(HH)
+         }))
```

#### 403. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6480-L6481` → after: `L10283-L10291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10283-L10291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10283-L10291) · [Before (L6480-L6481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6480-L6481)

```diff
-       prepareSprites() {
-         this._spriteManagers.reset()
+       _finishSetup(HH) {
+         var BH;
+         this._listenForReconnect(), (null === (BH = this._configSource.get()) || void 0 === BH ? void 0 : BH.captureConsoleLogs) && (this._isLogsEnabled = !0), (this._isLogsEnabled || this._configSource.remoteConfigWillArrive && HH.kv.get(this._configSource.captureHintKey)) && th … [truncated]
+         let LH = !1;
+         const AH = HH.onRemoteConfig((HH => {
+           var BH;
+           LH = HH.ok && !0 === (null === (BH = HH.config.logs) || void 0 === BH ? void 0 : BH.captureConsoleLogs), this.onRemoteConfig(HH)
+         }));
+         this._disposed ? AH.dispose() : (this._remoteConfigSubscription = AH, LH || this.loadIfEnabled())
```

#### 404. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6484` → after: `L10294-L10295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10294-L10295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10294-L10295) · [Before (L6484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6484)

```diff
-         this._opaqueSubMeshes.dispose(), this._transparentSubMeshes.dispose(), this._alphaTestSubMeshes.dispose(), this._depthOnlySubMeshes.dispose(), this._particleSystems.dispose(), this._spriteManagers.dispose(), this._edgesRenderers.dispose()
+         var HH, BH, LH, AH, rH, SH, hH;
+         this._disposed || (this._disposed = !0, this._stopConsoleRecorder(), null === (HH = this._remoteConfigSubscription) || void 0 === HH || HH.dispose(), this._remoteConfigSubscription = void 0, this._client = void 0, this._isLoading = !1, null === (BH = this._window) || void … [truncated]
```

#### 405. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6486-L6487` → after: `L10297-L10301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10297-L10301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10297-L10301) · [Before (L6486-L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6486-L6487)

```diff
-       dispatch(VV, eV, xV) {
-         void 0 === eV && (eV = VV.getMesh()), void 0 === xV && (xV = VV.eb()), null !== xV && void 0 !== xV && (xV.needAlphaBlendingForMesh(eV) ? this._transparentSubMeshes.push(VV) : xV.needAlphaTestingForMesh(eV) ? (xV.needDepthPrePass && !this.disableDepthPrePass && this._dept … [truncated]
+       onRemoteConfig(HH) {
+         var BH, LH;
+         if (this._disposed) return;
+         const AH = HH.ok ? null === (BH = HH.config.logs) || void 0 === BH ? void 0 : BH.captureConsoleLogs : void 0;
+         mL(AH) ? this._stopRecorderStartedByPersistedHint() : (null === (LH = this._client) || void 0 === LH || LH.kv.set(this._configSource.captureHintKey, !!AH), AH ? (this._isLogsEnabled = !0, this._isLoaded || this._startConsoleRecorder(), this.loadIfEnabled()) : this._stopRe … [truncated]
```

#### 406. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6489-L6493` → after: `L10303-L10305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10303-L10305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10303-L10305) · [Before (L6489-L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6489-L6493)

```diff
-       dispatchSprites(VV) {
-         this._spriteManagers.push(VV), this._empty = !1
-       }
-       dispatchParticles(VV) {
-         this._particleSystems.push(VV), this._empty = !1
+       reset() {
+         var HH, BH, LH, AH;
+         this._stopConsoleRecorder(), null === (HH = this._core) || void 0 === HH || HH.clearQueue(), this._queue = [], null === (BH = this._core) || void 0 === BH || BH.reset(), null === (LH = this._consoleCore) || void 0 === LH || LH.clearQueue(), this._consoleQueue = [], null = … [truncated]
```

#### 407. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6495-L6505` → after: `L10307-L10308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10307-L10308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10307-L10308) · [Before (L6495-L6505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6495-L6505)

```diff
-       _renderParticles(VV) {
-         if (0 === this._particleSystems.length) return;
-         const eV = this._scene.activeCamera;
-         this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
-         for (let xV = 0; xV < this._particleSystems.length; xV++) {
-           const JV = this._particleSystems.data[xV];
-           if (0 === (eV && eV.layerMask & JV.layerMask)) continue;
-           const YV = JV.emitter;
-           YV.position && VV && -1 === VV.indexOf(YV) || this._scene._activeParticles.addCount(JV.render(), !1)
-         }
-         this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
+       captureLog(HH) {
+         !this._disposed && this._client && this._getCore().captureLog(HH)
```

#### 408. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6507-L6515` → after: `L10310-L10311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10310-L10311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10310-L10311) · [Before (L6507-L6515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6507-L6515)

```diff
-       _renderSprites() {
-         if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
-         const VV = this._scene.activeCamera;
-         this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
-         for (let eV = 0; eV < this._spriteManagers.length; eV++) {
-           const xV = this._spriteManagers.data[eV];
-           0 !== (VV && VV.layerMask & xV.layerMask) && xV.render()
-         }
-         this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
+       captureConsoleLog(HH) {
+         !this._disposed && this._client && this._getConsoleCore().captureLog(HH)
```

#### 409. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6517-L6546` → after: `L10313-L10317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10313-L10317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10313-L10317) · [Before (L6517-L6546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6517-L6546)

```diff
-     }
-     nV._ZeroVector = YV.o.Zero()
-   },
-   41413: (VV, eV, xV) => {
-     xV.d(eV, {
-       b: () => UV
-     });
-     var JV = xV(41420);
-     class YV {}
-     class UV {
-       get disableDepthPrePass() {
-         return this._disableDepthPrePass
-       }
-       set disableDepthPrePass(VV) {
-         this._disableDepthPrePass = VV;
-         for (const eV of this._renderingGroups) eV.disableDepthPrePass = VV
- ... (14 more removed lines; see GitHub link above)
+       captureBufferedConsoleLog(HH, BH, LH) {
+         !this._disposed && this._client && this._getConsoleCore().captureLog(HH, {
+           context: BH,
+           occurredAtMs: LH
+         })
```

#### 410. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6548-L6600` → after: `L10319-L10321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10319-L10321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10319-L10321) · [Before (L6548-L6600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6548-L6600)

```diff
-       constructor(VV) {
-         this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderin … [truncated]
-         for (let eV = UV.MIN_RENDERINGGROUPS; eV < UV.MAX_RENDERINGGROUPS; eV++) this._autoClearDepthStencil[eV] = {
-           autoClear: !0,
-           depth: !0,
-           stencil: !0
-         }
-       }
-       get renderingGroups() {
-         return this._renderingGroups
-       }
-       getRenderingGroup(VV) {
-         const eV = VV || 0;
-         return this._prepareRenderingGroup(eV), this._renderingGroups[eV]
-       }
-       _clearDepthStencilBuffer() {
- ... (37 more removed lines; see GitHub link above)
+       _onOptOut() {
+         var HH;
+         this._stopConsoleRecorder(), null === (HH = this._consoleCore) || void 0 === HH || HH.clearQueue(), this._consoleQueue = []
```

#### 411. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6602-L6607` → after: `L10323-L10324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10323-L10324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10323-L10324) · [Before (L6602-L6607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6602-L6607)

```diff
-       reset() {
-         if (!this.maintainStateBetweenFrames)
-           for (let VV = UV.MIN_RENDERINGGROUPS; VV < UV.MAX_RENDERINGGROUPS; VV++) {
-             const eV = this._renderingGroups[VV];
-             eV && eV.prepare()
-           }
+       _stopRecorderStartedByPersistedHint() {
+         this._isLogsEnabled || this._stopConsoleRecorder()
```

#### 412. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6609-L6613` → after: `L10326-L10339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10326-L10339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10326-L10339) · [Before (L6609-L6613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6609-L6613)

```diff
-       resetSprites() {
-         if (!this.maintainStateBetweenFrames)
-           for (let VV = UV.MIN_RENDERINGGROUPS; VV < UV.MAX_RENDERINGGROUPS; VV++) {
-             const eV = this._renderingGroups[VV];
-             eV && eV.prepareSprites()
+       _startConsoleRecorder() {
+         var HH, BH = this;
+         if (this._isRecordingConsole || !(null === (HH = this._window) || void 0 === HH ? void 0 : HH.console)) return;
+         const LH = LY(this._configSource.get()).maxBufferSize;
+         let AH = !0;
+         this._consoleRecorderUnpatchers.push((() => {
+           AH = !1
+         }));
+         for (const rH of AY) {
+           let SH;
+           try {
+             SH = rY(this._window.console[rH])
+           } catch (HH) {
+             continue
```

#### 413. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6615-L6622` → after: `L10341-L10350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10341-L10350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10341-L10350) · [Before (L6615-L6622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6615-L6622)

```diff
-       }
-       dispose() {
-         this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
-       }
-       freeRenderingGroups() {
-         for (let VV = UV.MIN_RENDERINGGROUPS; VV < UV.MAX_RENDERINGGROUPS; VV++) {
-           const eV = this._renderingGroups[VV];
-           eV && eV.dispose()
+           SH && this._consoleRecorderUnpatchers.push(LG(this._window.console, rH, (HH => {
+             const hH = function() {
+               for (var SH = arguments.length, hH = new Array(SH), tH = 0; tH < SH; tH++) hH[tH] = arguments[tH];
+               try {
+                 AH && BH._recordConsoleEntry(rH, hH, LH)
+               } catch (rH) {}
+               return HH.apply(BH._window.console, hH)
+             };
+             return hH.__rrweb_original__ = SH, hH
+           })))
```

#### 414. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6625-L6632` → after: `L10356-L10418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10356-L10418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10356-L10418) · [Before (L6625-L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6625-L6632)

```diff
-       _prepareRenderingGroup(VV) {
-         void 0 === this._renderingGroups[VV] && (this._renderingGroups[VV] = new JV.d(VV, this._scene, this._customOpaqueSortCompareFn[VV], this._customAlphaTestSortCompareFn[VV], this._customTransparentSortCompareFn[VV]), this._renderingGroups[VV].disableDepthPrePass = this._dis … [truncated]
-       }
-       dispatchSprites(VV) {
-         this.maintainStateBetweenFrames && VV._wasDispatched || (VV._wasDispatched = !0, this.getRenderingGroup(VV.renderingGroupId).dispatchSprites(VV))
-       }
-       dispatchParticles(VV) {
-         this.maintainStateBetweenFrames && VV._wasDispatched || (VV._wasDispatched = !0, this.getRenderingGroup(VV.renderingGroupId).dispatchParticles(VV))
+       _recordConsoleEntry(HH, BH, LH) {
+         var AH;
+         if (this._isRecordingConsole && !this._isRecordingConsoleEntry && 0 !== BH.length)
+           if (null === (AH = this._client) || void 0 === AH ? void 0 : AH.canCapture) {
+             if (LH > this._consoleBuffer.length) {
+               this._isRecordingConsoleEntry = !0;
+               try {
+                 this._consoleBuffer.push({
+                   level: HH,
+                   args: BH,
+                   occurredAtMs: Date.now(),
+                   context: this._getSdkContext()
+                 })
+               } finally {
+                 this._isRecordingConsoleEntry = !1
+               }
+ ... (47 more added lines; see GitHub link above)
```

#### 415. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6634-L6635` → after: `L10420-L10421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10420-L10421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10420-L10421) · [Before (L6634-L6635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6634-L6635)

```diff
-       dispatch(VV, eV, xV) {
-         void 0 === eV && (eV = VV.getMesh()), this.maintainStateBetweenFrames && VV._wasDispatched || (VV._wasDispatched = !0, this.getRenderingGroup(eV.renderingGroupId).dispatch(VV, eV, xV))
+       flushLogs(HH) {
+         this._client && (HH ? this._flushViaTransport(HH) : (this._core && this._core.flush().catch((HH => this._logFlushError(HH))), this._consoleCore && this._consoleCore.flush().catch((HH => this._logFlushError(HH)))))
```

#### 416. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6637-L6644` → after: `L10423-L10452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10423-L10452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10423-L10452) · [Before (L6637-L6644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6637-L6644)

```diff
-       setRenderingOrder(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-           JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-         if (this._customOpaqueSortCompareFn[VV] = eV, this._customAlphaTestSortCompareFn[VV] = xV, this._customTransparentSortCompareFn[VV] = JV, this._renderingGroups[VV]) {
-           const eV = this._renderingGroups[VV];
-           eV.opaqueSortCompareFn = this._customOpaqueSortCompareFn[VV], eV.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[VV], eV.transparentSortCompareFn = this._customTransparentSortCompareFn[VV]
-         }
+       flush() {
+         var HH = this;
+         return DL((function*() {
+           var BH, LH;
+           const AH = null === (BH = HH._core) || void 0 === BH ? void 0 : BH.flush().catch((BH => HH._logFlushError(BH))),
+             rH = null === (LH = HH._consoleCore) || void 0 === LH ? void 0 : LH.flush().catch((BH => HH._logFlushError(BH)));
+           yield AH, yield rH
+         }))()
+       }
+       _logFlushError(HH) {
+         zY(HH) || this._logger.error("PostHog logs flush failed:", HH)
+       }
+       loadIfEnabled() {
+         if (this._disposed || !this._isLogsEnabled || this._isLoaded || this._isLoading) return;
+         const HH = this._getConsoleLoader();
+         if (HH) {
+ ... (14 more added lines; see GitHub link above)
```

#### 417. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6646-L6652` → after: `L10454-L10469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10454-L10469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10454-L10469) · [Before (L6646-L6652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6646-L6652)

```diff
-       setRenderingAutoClearDepthStencil(VV, eV) {
-         let xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
-           JV = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-         this._autoClearDepthStencil[VV] = {
-           autoClear: eV,
-           depth: xV,
-           stencil: JV
+       _createHost(HH, BH) {
+         const LH = this._client;
+         return {
+           get isDisabled() {
+             return !1
+           },
+           get optedOut() {
+             return !LH.canCapture
+           },
+           getPersistedProperty: BH => BH === zL.LogsQueue ? HH() : void 0,
+           setPersistedProperty(HH, LH) {
+             HH === zL.LogsQueue && BH(null != LH ? LH : [])
+           },
+           _sendLogsBatch: HH => this._sendLogsBatch(HH),
+           getLibraryId: () => LH.library.name,
+           getLibraryVersion: () => LH.library.version
```

#### 418. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6655-L6683` → after: `L10472-L10520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10472-L10520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10472-L10520) · [Before (L6655-L6683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6655-L6683)

```diff
-       getAutoClearDepthStencilSetup(VV) {
-         return this._autoClearDepthStencil[VV]
-       }
-     }
-     UV.MAX_RENDERINGGROUPS = 4, UV.MIN_RENDERINGGROUPS = 0, UV.AUTOCLEAR = !0
-   },
-   41161: (VV, eV, xV) => {
-     xV.d(eV, {
-       b: () => JV
-     });
-     class JV {
-       constructor(VV) {
-         this._supportBlendParametersPerTarget = VV, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled =  … [truncated]
-       }
-       get isDirty() {
-         return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
- ... (13 more removed lines; see GitHub link above)
+       _sendLogsBatch(HH) {
+         return new Promise((BH => {
+           if (ez(this._consecutiveStatusZeroFailures, 3)) return void BH({
+             kind: "fatal",
+             error: tY(void 0, "logs endpoint is unreachable, dropping batch")
+           });
+           let LH = !1;
+           const AH = HH => {
+               LH || (LH = !0, clearTimeout(rH), BH(HH))
+             },
+             rH = setTimeout((() => {
+               this._logger.warn("Logs request timed out before receiving a response"), AH({
+                 kind: "retry-later",
+                 error: tY(void 0, "logs request timed out")
+               })
+             }), 9e4),
+ ... (33 more added lines; see GitHub link above)
```

#### 419. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6685-L6687` → after: `L10522-L10523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10522-L10523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10522-L10523) · [Before (L6685-L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6685-L6687)

```diff
-       setAlphaBlendFunctionParameters(VV, eV, xV, JV) {
-         const YV = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
-         this._blendFunctionParameters[YV + 0] === VV && this._blendFunctionParameters[YV + 1] === eV && this._blendFunctionParameters[YV + 2] === xV && this._blendFunctionParameters[YV + 3] === JV || (this._blendFunctionParameters[YV + 0] = VV, this._blendFunctionParameters[YV +  … [truncated]
+       _trackEndpointReachability(HH, BH) {
+         (0 !== HH || BH) && (this._consecutiveStatusZeroFailures = qz(HH, this._consecutiveStatusZeroFailures, 3, (() => this._logger.warn("Log requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. S … [truncated]
```

#### 420. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6689-L6691` → after: `L10525-L10530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10525-L10530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10525-L10530) · [Before (L6689-L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6689-L6691)

```diff
-       setAlphaEquationParameters(VV, eV) {
-         const xV = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
-         this._blendEquationParameters[xV + 0] === VV && this._blendEquationParameters[xV + 1] === eV || (this._blendEquationParameters[xV + 0] = VV, this._blendEquationParameters[xV + 1] = eV, this._isBlendEquationParametersDirty = !0)
+       _flushViaTransport(HH) {
+         this._queue.length > 0 && this._drainQueueViaTransport(HH, this._queue, this._resolvedConfig, this._client.library.name, (HH => {
+           this._queue = HH
+         })), this._consoleQueue.length > 0 && this._drainQueueViaTransport(HH, this._consoleQueue, this._consoleResolvedConfig, SY, (HH => {
+           this._consoleQueue = HH
+         }))
```

#### 421. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6693-L6694` → after: `L10532-L10546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10532-L10546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10532-L10546) · [Before (L6693-L6694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6693-L6694)

```diff
-       reset() {
-         this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this. … [truncated]
+       _drainQueueViaTransport(HH, BH, LH, AH, rH) {
+         if (0 === BH.length) return;
+         const SH = BH.map((HH => HH.record));
+         rH([]);
+         const hH = bh(SH, Oh(LH, this._client.library.name, this._client.library.version), AH, this._client.library.version);
+         this._client.sendRequest("/i/v1/logs", {
+           method: "POST",
+           query: {
+             token: this._client.projectToken
+           },
+           body: hH,
+           compression: "best-available",
+           transport: HH,
+           timeoutMs: 6e4
+         }).catch((HH => this._logFlushError(HH)))
```

#### 422. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6696-L6705` → after: `L10548-L10564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10548-L10564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10548-L10564) · [Before (L6696-L6705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6696-L6705)

```diff
-       apply(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
-           xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         if (this._numTargets !== eV && (this._numTargets = eV, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== xV && (this._blendDisabledTargetsMask = xV, this._isAlphaBlendDirty = !0), !this.isDirty) return;
-         if (this._isBlendConstantsDirty && (VV.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === eV || !this._supportBlendParametersPerTarget) {
-           if (this._isAlphaBlendDirty) {
-             if (eV > 1 && 0 !== xV && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
-             this._alphaBlend[0] && 0 === (1 & xV) ? VV.enable(VV.BLEND) : VV.disable(VV.BLEND), this._isAlphaBlendDirty = !1
-           }
-           return this._isBlendFunctionParametersDirty && (VV.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEq … [truncated]
+     };
+     const EY = gh("[NetworkMetrics]"),
+       XY = () => {
+         var HH;
+         return (null == JB || null === (HH = JB.performance) || void 0 === HH ? void 0 : HH.now) ? JB.performance.now() : Date.now()
+       },
+       GY = {
+         "http:": 80,
+         "https:": 443
+       },
+       YY = new Set(["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"]),
+       uY = (HH, BH) => {
+         var LH;
+         const AH = String(BH);
+         return {
+           method: String(HH).toUpperCase(),
+ ... (1 more added lines; see GitHub link above)
```

#### 423. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6707-L6713` → after: `L10566-L10612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10566-L10612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10566-L10612) · [Before (L6707-L6713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6707-L6713)

```diff
-         const JV = VV;
-         if (this._isAlphaBlendDirty) {
-           for (let YV = 0; YV < eV; YV++) {
-             const eV = YV < this._numTargetEnabled ? YV : 0;
-             this._alphaBlend[eV] && 0 === (xV & 1 << YV) ? JV.enableIndexed(VV.BLEND, YV) : JV.disableIndexed(VV.BLEND, YV)
-           }
-           this._isAlphaBlendDirty = !1
+       },
+       QY = function(HH, BH, LH, AH, rH, SH) {
+         let hH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
+         try {
+           var tH, zH;
+           const CH = rH();
+           if (!CH) return;
+           const EH = LH || void 0,
+             XH = XY() - AH,
+             GH = Nz(BH.url);
+           if (GH && "http:" !== GH.protocol && "https:" !== GH.protocol) return;
+           const YH = {
+               url: (null == GH ? void 0 : GH.href) || BH.url,
+               method: BH.method
+             },
+             uH = PL(CH.name) ? CH.name(YH) : OL(CH.name) ? CH.name : "http.client.request.duration";
+ ... (31 more added lines; see GitHub link above)
```

#### 424. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6715-L6720` → after: `L10614-L10628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10614-L10628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10614-L10628) · [Before (L6715-L6720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6715-L6720)

```diff
-         if (this._isBlendFunctionParametersDirty) {
-           for (let VV = 0; VV < eV; VV++) {
-             const eV = VV < this._numTargetEnabled ? 4 * VV : 0;
-             JV.blendFuncSeparateIndexed(VV, this._blendFunctionParameters[eV + 0], this._blendFunctionParameters[eV + 1], this._blendFunctionParameters[eV + 2], this._blendFunctionParameters[eV + 3])
-           }
-           this._isBlendFunctionParametersDirty = !1
+       },
+       WY = () => {},
+       MY = (HH, BH) => PL(null == JB ? void 0 : JB.fetch) ? LG(JB, "fetch", (LH => function() {
+         for (var AH = arguments.length, rH = new Array(AH), SH = 0; SH < AH; SH++) rH[SH] = arguments[SH];
+         const hH = XY(),
+           tH = LH.apply(this, rH);
+         if (!BH()) return tH;
+         try {
+           var zH, CH, EH;
+           const [LH, AH] = rH, SH = uY(null !== (zH = null !== (CH = null == AH ? void 0 : AH.method) && void 0 !== CH ? CH : null == LH ? void 0 : LH.method) && void 0 !== zH ? zH : "GET", null !== (EH = null == LH ? void 0 : LH.url) && void 0 !== EH ? EH : LH);
+           return tH.then((LH => (QY(HH, SH, null == LH ? void 0 : LH.status, hH, BH, void 0, !0), LH)), (LH => {
+             throw QY(HH, SH, void 0, hH, BH, LH), LH
+           }))
+         } catch (HH) {
+           return EY.error("Failed to observe fetch", HH), tH
```

#### 425. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6722-L6727` → after: `L10630-L10666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10630-L10666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10630-L10666) · [Before (L6722-L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6722-L6727)

```diff
-         if (this._isBlendEquationParametersDirty) {
-           for (let VV = 0; VV < eV; VV++) {
-             const eV = VV < this._numTargetEnabled ? 2 * VV : 0;
-             JV.blendEquationSeparateIndexed(VV, this._blendEquationParameters[eV + 0], this._blendEquationParameters[eV + 1])
-           }
-           this._isBlendEquationParametersDirty = !1
+       })) : WY,
+       xY = (HH, BH) => {
+         var LH;
+         const AH = null == JB || null === (LH = JB.XMLHttpRequest) || void 0 === LH ? void 0 : LH.prototype;
+         if (!AH) return WY;
+         const rH = new WeakMap,
+           SH = LG(AH, "open", (HH => function() {
+             for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
+             try {
+               (() => xE.has(this))() || rH.set(this, uY(LH[0], LH[1]))
+             } catch (HH) {
+               EY.error("Failed to observe XHR open", HH)
+             }
+             return HH.apply(this, LH)
+           })),
+           hH = LG(AH, "send", (LH => function() {
+ ... (21 more added lines; see GitHub link above)
```

#### 426. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6729-L6796` → after: `L10668-L10682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10668-L10682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10668-L10682) · [Before (L6729-L6796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6729-L6796)

```diff
-       }
-       setAlphaMode(VV, eV) {
-         let xV = 32774;
-         switch (VV) {
-           case 0:
-             break;
-           case 7:
-             this.setAlphaBlendFunctionParameters(1, 771, 1, 1, eV);
-             break;
-           case 8:
-           case 14:
-             this.setAlphaBlendFunctionParameters(1, 771, 1, 771, eV);
-             break;
-           case 2:
-             this.setAlphaBlendFunctionParameters(770, 771, 1, 1, eV);
-             break;
- ... (52 more removed lines; see GitHub link above)
+       },
+       vY = new WeakMap,
+       PY = new Set(["$comment", "$defs", "$id", "$schema", "additionalProperties", "default", "definitions", "deprecated", "description", "examples", "minProperties", "properties", "readOnly", "required", "title", "type", "writeOnly"]),
+       TY = {
+         maxStringLength: 2048,
+         truncationSuffix: "..."
+       };
+ 
+     function UY(HH) {
+       if (HH) return !0 === HH ? {
+         intent: !0,
+         model: !0
+       } : {
+         intent: !1 !== HH.intent,
+         model: !1 !== HH.model
```

#### 427. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6799-L6869` → after: `L10685-L10687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10685-L10687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10685-L10687) · [Before (L6799-L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6799-L6869)

```diff
-   },
-   41450: (VV, eV, xV) => {
-     xV.d(eV, {
-       c: () => JV
-     });
-     class JV {}
-     JV._IsPickingAvailable = !1
-   },
-   41337: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => px,
-       e: () => Ux
-     });
-     var JV = xV(41341),
-       YV = xV(41145),
-       UV = xV(41154),
- ... (55 more removed lines; see GitHub link above)
+ 
+     function VY(HH, BH) {
+       return {}.hasOwnProperty.call(HH, BH)
```

#### 428. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6871-L6892` → after: `L10689-L10697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10689-L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10689-L10697) · [Before (L6871-L6892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6871-L6892)

```diff
-     var nV = xV(41286),
-       wV = xV(38269),
-       ZV = xV(41360),
-       vV = xV(41383),
-       rV = xV(41390);
-     class kV {
-       constructor(VV, eV, xV, JV, YV, UV) {
-         this.source = VV, this.pointerX = eV, this.pointerY = xV, this.meshUnderPointer = JV, this.sourceEvent = YV, this.additionalData = UV
-       }
-       static CreateNew(VV, eV, xV) {
-         const JV = VV.dD();
-         return new kV(VV, JV.pointerX, JV.pointerY, JV.meshUnderPointer || VV, eV, xV)
-       }
-       static CreateNewFromSprite(VV, eV, xV, JV) {
-         return new kV(VV, eV.pointerX, eV.pointerY, eV.meshUnderPointer, xV, JV)
-       }
- ... (6 more removed lines; see GitHub link above)
+ 
+     function OY(HH, BH) {
+       const LH = Object.create(HH);
+       return BH && Object.defineProperty(LH, "inputSchema", {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         value: BH
+       }), LH
```

#### 429. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6894-L7005` → after: `L10699-L10737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10699-L10737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10699-L10737) · [Before (L6894-L7005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6894-L7005)

```diff
-     var bV = xV(41398),
-       EV = xV(41405),
-       BV = xV(41413),
-       jV = xV(41429),
-       qV = xV(41122),
-       tV = xV(38287),
-       FV = xV(41138),
-       TV = xV(41433);
-     class PV {
-       constructor() {
-         this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
-       }
-       static get HasTriggers() {
-         for (const VV in PV.Triggers)
-           if (Object.prototype.hasOwnProperty.call(PV.Triggers, VV)) return !0;
-         return !1
- ... (96 more removed lines; see GitHub link above)
+ 
+     function bY(HH, BH) {
+       let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+       if (!OL(HH)) return;
+       const AH = HH.trim();
+       return AH ? (LH ? function(HH, BH) {
+         return function(HH) {
+           return HH.length >= 10240 && (mS.test(HH) || function(HH) {
+             const BH = fS.exec(HH);
+             if (!BH) return !1;
+             let LH;
+             try {
+               LH = decodeURIComponent(HH.slice(BH[0].length))
+             } catch (HH) {
+               return !1
+             }
+ ... (23 more added lines; see GitHub link above)
```

#### 430. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L7007-L7028` → after: `L10739-L10744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10739-L10744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10739-L10744) · [Before (L7007-L7028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L7007-L7028)

```diff
-     class iV {
-       constructor(VV, eV, xV) {
-         this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(VV, eV, ((VV, eV, JV, YV) => {
-           const UV = DV.CreateDeviceEvent(VV, eV, JV, YV, this);
-           xV(VV, eV, UV)
-         })) : this._createDummyNativeInput()
-       }
-       pollInput(VV, eV, xV) {
-         return this._nativeInput.pollInput(VV, eV, xV)
-       }
-       isDeviceAvailable(VV) {
-         return VV === AV.Mouse || VV === AV.Touch
-       }
-       dispose() {
-         this._nativeInput.dispose()
-       }
- ... (6 more removed lines; see GitHub link above)
+ 
+     function kY(HH) {
+       try {
+         return TL(HH) && !0 === HH.isError
+       } catch (HH) {
+         return !1
```

#### 431. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L7031-L7103` → after: `L10747-L10751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10747-L10751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10747-L10751) · [Before (L7031-L7103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L7031-L7103)

```diff
-     const CV = Object.keys(NV).length / 2;
-     class aV {
-       constructor(VV, eV, xV, YV) {
-         this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = JV.j.IsSafari(), this._usingMacOs = (0, qV.j)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = VV => {}, this._keyboardUpEvent = VV => {}, this._k … [truncated]
-           this._enableEvents()
-         })
-       }
-       pollInput(VV, eV, xV) {
-         const YV = this._inputs[VV][eV];
-         if (!YV) throw `Unable to find device ${AV[VV]}`;
-         VV >= AV.DualShock && VV <= AV.DualSense && this._updateDevice(VV, eV, xV);
-         const UV = YV[xV];
-         if (void 0 === UV) throw `Unable to find input ${xV} for device ${AV[VV]} in slot ${eV}`;
-         return xV === NV.Move && JV.j.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), UV
-       }
-       isDeviceAvailable(VV) {
- ... (57 more removed lines; see GitHub link above)
+     const mY = {
+         featureFlags: class extends FG {
+           constructor(HH) {
+             const BH = new wG(HH.config, HH._shouldDisableFlags());
+             super(BH), this.name = xX, this._instance = HH, this._mutableConfigSource = BH
```

#### 432. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L7105-L7114` → after: `L10753-L10826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10753-L10826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10753-L10826) · [Before (L7105-L7114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L7105-L7114)

```diff
-         }, this._keyboardUpEvent = VV => {
-           this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(AV.Keyboard, 0, 255));
-           const eV = this._inputs[AV.Keyboard][0];
-           if (eV) {
-             eV[VV.keyCode] = 0;
-             const xV = VV;
-             if (xV.inputIndex = VV.keyCode, this._usingMacOs && "Meta" === VV.key && this._metaKeys.length > 0) {
-               for (const VV of this._metaKeys) {
-                 const xV = DV.CreateDeviceEvent(AV.Keyboard, 0, VV, 0, this, this._elementToAttachTo);
-                 eV[VV] = 0, this._onInputChanged(AV.Keyboard, 0, xV)
+           get _crossTabPersistence() {
+             return this._instance.persistence
+           }
+           updateConfig(HH, BH) {
+             this._mutableConfigSource.update(HH, BH), this._onConfigUpdated()
+           }
+         }
+       },
+       oY = {
+         sessionRecording: class {
+           get _config() {
+             return this._instance.config
+           }
+           get _persistence() {
+             return this._instance.persistence
+           }
+ ... (58 more added lines; see GitHub link above)
```

#### 433. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L7116` → after: `L10828-L10886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10828-L10886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10828-L10886) · [Before (L7116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L7116)

```diff
-               this._metaKeys.splice(0, this._metaKeys.length)
+           }
+           stopRecording() {
+             var HH, BH;
+             null === (HH = this._persistFlagsOnSessionListener) || void 0 === HH || HH.call(this), this._persistFlagsOnSessionListener = void 0, null === (BH = this._lazyLoadedSessionRecording) || void 0 === BH || BH.stop()
+           }
+           _discardRecording() {
+             let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+             var BH, LH;
+             null === (BH = this._persistFlagsOnSessionListener) || void 0 === BH || BH.call(this), this._persistFlagsOnSessionListener = void 0, null === (LH = this._lazyLoadedSessionRecording) || void 0 === LH || LH.discard({
+               discardProducerEvents: HH
+             })
+           }
+           _resetSampling() {
+             var HH, BH;
+             null === (HH = this._persistence) || void 0 === HH || HH.unregister("$session_is_sampled"), null === (BH = this._persistence) || void 0 === BH || BH.unregister("$replay_sample_rate")
+           }
+ ... (43 more added lines; see GitHub link above)
```
