# Changed — Bundle Modifications Report (Part 026 / 067)

- **Updated at**: `2026-11-20T22:47 JST`
- **Part**: `26 / 67` (**297** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 025](part-025.md) · [Part 027 →](part-027.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/284.js` (7rj44.0704ff61 → qepqb8.0352199c · continued)

- **File**: `bundles/bloxd.io/chunks/js/284.js` (63 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887)

#### 57. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L17038-L17123` → after: `L564-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L564-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L564-L592) · [Before (L17038-L17123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L17038-L17123)

```diff
-     var Ys = sz(1087),
-       xs = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly",  … [truncated]
-       ms = (0, Xz.forwardRef)(((zz, tz) => {
-         var {
-           className: sz,
-           value: Oz = "",
-           selection: oz,
-           extensions: vz = [],
-           onChange: Uz,
-           onStatistics: Kz,
-           onCreateEditor: uz,
-           onUpdate: Nz,
-           autoFocus: bz,
-           theme: wz = "light",
-           height: Dz,
-           minHeight: gz,
- ... (70 more removed lines; see GitHub link above)
+     var Kz = function(vv) {
+       return vv[vv.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", vv[vv.DuplicateIdentifier = 2300] = "DuplicateIdentifier", vv
+     }(Kz || {});
+     const Vz = new Set([Kz.DuplicateIdentifier]),
+       Uz = new Set([Kz.VariableDefinedElsewhere]),
+       Rz = new Set([]),
+       xz = "/index.js";
+ 
+     function tz(vv) {
+       return "/" + vv
+     }
+ 
+     function qz(vv, zv, Pv) {
+       vv.getSourceFile(zv) && vv.deleteFile(zv), vv.createFile(zv, Pv)
+     }
+ 
+ ... (13 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L17130-L17135` → after: `L597-L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L597-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L597-L635) · [Before (L17130-L17135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L17130-L17135)

```diff
-       if ("string" == typeof tz) zz.appendChild(document.createTextNode(tz));
-       else if (null == tz);
-       else if (null != tz.nodeType) zz.appendChild(tz);
-       else {
-         if (!Array.isArray(tz)) throw new RangeError("Unsupported child node: " + tz);
-         for (var sz = 0; sz < tz.length; sz++) Wz(zz, tz[sz])
+       return Pv => {
+         var hv, Sv;
+         const ev = vv.languageService.getCompletionsAtPosition(zv, Pv.pos, {});
+         if (!ev) return {
+           from: Pv.pos,
+           options: []
+         };
+         let gv = null !== (hv = null === (Sv = ev.optionalReplacementSpan) || void 0 === Sv ? void 0 : Sv.start) && void 0 !== hv ? hv : Pv.pos;
+         if (!ev.optionalReplacementSpan) {
+           const vv = Pv.state.doc.sliceString(0, Pv.pos);
+           for (; gv > 0 && /[\w$]/.test(vv[gv - 1]);) gv--
+         }
+         return ev.entries = ev.entries.filter((vv => vv.kind !== sv().ScriptElementKind.warning)), {
+           from: gv,
+           options: ev.entries.map((hv => {
+             var Sv, ev, pv, dv;
+ ... (23 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L17156-L17157` → after: `L639-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L639-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L639-L654) · [Before (L17156-L17157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L17156-L17157)

```diff
-         function Fz(zz) {
-           return /^@/.test(zz) ? [zz] : zz.split(/,\s*/)
+     function Az(vv) {
+       return zv => {
+         const Pv = document.createElement("div");
+         Pv.className = "CodeEditorTooltip";
+         let hv = !1;
+         return queueMicrotask((() => {
+           hv || (pv.render((0, Fz.jsx)(Wv.c, {
+             text: vv
+           }), Pv), zv.requestMeasure())
+         })), {
+           dom: Pv,
+           destroy() {
+             hv = !0, queueMicrotask((() => {
+               pv.unmountComponentAtNode(Pv)
+             }))
+           }
```

#### 60. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L17160-L17172` → after: `L659-L720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L659-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L659-L720) · [Before (L17160-L17172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L17160-L17172)

```diff
-         function Wz(zz, tz, Xz, Oz) {
-           let oz = [],
-             vz = /^@(\w+)\b/.exec(zz[0]),
-             Uz = vz && "keyframes" == vz[1];
-           if (vz && null == tz) return Xz.push(zz[0] + ";");
-           for (let sz in tz) {
-             let Oz = tz[sz];
-             if (/&/.test(sz)) Wz(sz.split(/,\s*/).map((tz => zz.map((zz => tz.replace(/&/, zz))))).reduce(((zz, tz) => zz.concat(tz))), Oz, Xz);
-             else if (Oz && "object" == typeof Oz) {
-               if (!vz) throw new RangeError("The value of a property (" + sz + ") should be a primitive value.");
-               Wz(Fz(sz), Oz, oz, Uz)
-             } else null != Oz && oz.push(sz.replace(/_.*/, "").replace(/[A-Z]/g, (zz => "-" + zz.toLowerCase())) + ": " + Oz + ";")
-           }(oz.length || Uz) && Xz.push((!sz || vz || Oz ? zz : zz.map(sz)).join(", ") + " {" + oz.join(" ") + "}")
+     function Lz(vv, zv, Pv) {
+       return hv => {
+         var Sv;
+         if (!zv) return [];
+         const ev = null === (Sv = hv.selection.PC[0]) || void 0 === Sv ? void 0 : Sv.head;
+         if (void 0 === ev) return [];
+         const gv = vv.languageService.getSignatureHelpItems(Pv, ev, {});
+         if (!gv || !gv.items.length) return [];
+         const pv = gv.applicableSpan.start - gv.items[0].prefixDisplayParts.map((vv => vv.text)).join("").length,
+           dv = gv.applicableSpan.start,
+           Nv = hv.doc.lineAt(ev),
+           lv = Nv.from,
+           Tv = Math.min(Nv.to, ev);
+         let Wv, wv;
+         return pv < lv ? (Wv = lv, wv = Tv) : (Wv = pv, wv = dv), [{
+           pos: Wv,
+ ... (46 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L17174-L17186` → after: `L722-L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L722-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L722-L743) · [Before (L17174-L17186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L17174-L17186)

```diff
-         for (let Xz in zz) Wz(Fz(Xz), zz[Xz], this.rules)
-       }
-       getRules() {
-         return this.rules.join("\n")
-       }
-       static newName() {
-         let zz = Xz[Fz] || 1;
-         return Xz[Fz] = zz + 1, "\u037c" + zz.toString(36)
-       }
-       static mount(zz, tz, sz) {
-         let Fz = zz[Wz],
-           Xz = sz && sz.nonce;
-         Fz ? Xz && Fz.setNonce(Xz) : Fz = new vz(zz, Xz), Fz.mount(Array.isArray(tz) ? tz : [tz], zz)
+         const dv = [];
+         for (const vv of ev.displayParts) dv.push({
+           str: vv.text,
+           style: {
+             color: Oz.text
+           }
+         });
+         if (ev.documentation) {
+           dv.push("\n\n");
+           for (const vv of ev.documentation) dv.push({
+             str: vv.text,
+             style: {
+               color: Oz.docs
+             }
+           })
+         }
+ ... (6 more added lines; see GitHub link above)
```

#### 62. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L17189-L17213` → after: `L746-L902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L746-L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L746-L902) · [Before (L17189-L17213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L17189-L17213)

```diff
-     let oz = new Map;
-     class vz {
-       constructor(zz, tz) {
-         let sz = zz.ownerDocument || zz,
-           Fz = sz.defaultView;
-         if (!zz.head && zz.adoptedStyleSheets && Fz.CSSStyleSheet) {
-           let tz = oz.get(sz);
-           if (tz) return zz[Wz] = tz;
-           this.sheet = new Fz.CSSStyleSheet, oz.set(sz, this)
-         } else this.styleTag = sz.createElement("style"), tz && this.styleTag.setAttribute("nonce", tz);
-         this.modules = [], zz[Wz] = this
-       }
-       mount(zz, tz) {
-         let sz = this.sheet,
-           Fz = 0,
-           Wz = 0;
- ... (9 more removed lines; see GitHub link above)
+     const Mz = {
+       indentSize: 4,
+       tabSize: 4,
+       newLineCharacter: "\n",
+       convertTabsToSpaces: !0,
+       insertSpaceAfterCommaDelimiter: !0,
+       insertSpaceAfterSemicolonInForStatements: !0,
+       insertSpaceBeforeAndAfterBinaryOperators: !0,
+       insertSpaceAfterKeywordsInControlFlowStatements: !0,
+       insertSpaceAfterFunctionKeywordForAnonymousFunctions: !0,
+       insertSpaceBeforeFunctionParenthesis: !1,
+       insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: !1,
+       insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: !1,
+       insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: !0,
+       insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: !1,
+       insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces: !1,
+ ... (141 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L17216-L17227` → after: `L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L1181) · [Before (L17216-L17227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L17216-L17227)

```diff
-         if (sz) tz.adoptedStyleSheets.indexOf(this.sheet) < 0 && (tz.adoptedStyleSheets = [this.sheet, ...tz.adoptedStyleSheets]);
-         else {
-           let zz = "";
-           for (let tz = 0; tz < this.modules.length; tz++) zz += this.modules[tz].getRules() + "\n";
-           this.styleTag.textContent = zz;
-           let sz = tz.head || tz;
-           this.styleTag.parentNode != sz && sz.insertBefore(this.styleTag, sz.firstChild)
-         }
-       }
-       setNonce(zz) {
-         this.styleTag && this.styleTag.getAttribute("nonce") != zz && this.styleTag.setAttribute("nonce", zz)
-       }
+       }, Vz)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/285.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/285.js` (215 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2)

#### 1. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L4)

```diff
-   40427: (zz, tz, sz) => {
+   40593: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L6)

```diff
-       e: () => Bt,
+       c: () => xz,
+       d: () => Yz,
```

#### 3. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L8-L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L8-L9)

```diff
-       ChangeSet: () => jz,
-       i: () => Gt,
+       k: () => dv,
```

#### 4. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L11-L28` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L11-L12) · [Before (L11-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L11-L28)

```diff
-       p: () => At,
-       q: () => nz,
-       u: () => Tz,
-       x: () => Wt,
-       B: () => it,
-       y: () => Lt,
-       E: () => Mt,
-       F: () => Yt,
-       H: () => fz,
-       I: () => Dz,
-       K: () => xt,
-       L: () => Cz,
-       P: () => Zz,
-       Q: () => yt,
-       U: () => ts,
-       Y: () => Iz,
- ... (2 more removed lines; see GitHub link above)
+       m: () => Nv,
+       o: () => Wz
```

#### 5. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L30-L40` → after: `L14-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14-L39) · [Before (L30-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L30-L40)

```diff
-     let Fz = [],
-       Wz = [];
- 
-     function Xz(zz) {
-       if (zz < 768) return !1;
-       for (let tz = 0, sz = Fz.length;;) {
-         let Xz = tz + sz >> 1;
-         if (zz < Fz[Xz]) sz = Xz;
-         else {
-           if (!(zz >= Wz[Xz])) return !0;
-           tz = Xz + 1
+     var hv = Pv(40599),
+       Sv = Pv(40605),
+       ev = Pv(40626);
+     class gv {
+       constructor(vv, zv, Pv, hv) {
+         this.state = vv, this.pos = zv, this.explicit = Pv, this.view = hv, this.abortListeners = [], this.abortOnDocChange = !1
+       }
+       tokenBefore(vv) {
+         let zv = (0, ev.tb)(this.state).resolveInner(this.pos, -1);
+         for (; zv && vv.indexOf(zv.name) < 0;) zv = zv.parent;
+         return zv ? {
+           from: zv.from,
+           to: this.pos,
+           text: this.state.sliceDoc(zv.from, this.pos),
+           type: zv.type
+         } : null
+ ... (10 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L42` → after: `L41-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L41-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L41-L46) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L42)

```diff
-         if (tz == sz) return !1
+       }
+       get aborted() {
+         return null == this.abortListeners
+       }
+       addEventListener(vv, zv, Pv) {
+         "abort" == vv && this.abortListeners && (this.abortListeners.push(zv), Pv && Pv.onDocChange && (this.abortOnDocChange = !0))
```

#### 7. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L47-L55` → after: `L51-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L51-L53) · [Before (L47-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L47-L55)

```diff
-       return zz >= 127462 && zz <= 127487
-     }(() => {
-       let zz = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7, … [truncated]
-       for (let tz = 0, sz = 0; tz < zz.length; tz++)(tz % 2 ? Wz : Fz).push(sz += zz[tz])
-     })();
-     const oz = 8205;
- 
-     function vz(zz, tz) {
-       return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? Uz : Kz)(zz, tz, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
+       let zv = Object.keys(vv).join(""),
+         Pv = /\w/.test(zv);
+       return Pv && (zv = zv.replace(/\w/g, "")), `[${Pv?"\\w":""}${zv.replace(/[^\w\s]/g,"\\$&")}]`
```

#### 8. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L58-L72` → after: `L56-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L56-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L56-L68) · [Before (L58-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L58-L72)

```diff
-     function Uz(zz, tz, sz) {
-       if (tz == zz.length) return tz;
-       tz && Nz(zz.charCodeAt(tz)) && bz(zz.charCodeAt(tz - 1)) && tz--;
-       let Fz = uz(zz, tz);
-       for (tz += wz(Fz); tz < zz.length;) {
-         let Wz = uz(zz, tz);
-         if (Fz == oz || Wz == oz || sz && Xz(Wz)) tz += wz(Wz), Fz = Wz;
-         else {
-           if (!Oz(Wz)) break;
-           {
-             let sz = 0,
-               Fz = tz - 2;
-             for (; Fz >= 0 && Oz(uz(zz, Fz));) sz++, Fz -= 2;
-             if (sz % 2 == 0) break;
-             tz += 2
+     function dv(vv) {
+       let zv = vv.map((vv => "string" == typeof vv ? {
+           label: vv
+         } : vv)),
+         [Pv, hv] = zv.every((vv => /^\w+$/.test(vv.label))) ? [/\w*$/, /\w+$/] : function(vv) {
+           let zv = Object.create(null),
+             Pv = Object.create(null);
+           for (let {
+               label: Sv
+             }
+             of vv) {
+             zv[Sv[0]] = !0;
+             for (let vv = 1; vv < Sv.length; vv++) Pv[Sv[vv]] = !0
```

#### 9. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L74` → after: `L70-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L70-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L70-L79) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L74)

```diff
-         }
+           let hv = pv(zv) + pv(Pv) + "*$";
+           return [new RegExp("^" + hv), new RegExp(hv)]
+         }(zv);
+       return vv => {
+         let Sv = vv.matchBefore(hv);
+         return Sv || vv.explicit ? {
+           from: Sv ? Sv.from : vv.pos,
+           options: zv,
+           validFor: Pv
+         } : null
```

#### 10. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L79-L83` → after: `L83-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L83-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L83-L89) · [Before (L79-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L79-L83)

```diff
-     function Kz(zz, tz, sz) {
-       for (; tz > 0;) {
-         let Fz = Uz(zz, tz - 2, sz);
-         if (Fz < tz) return Fz;
-         tz--
+     function Nv(vv, zv) {
+       return Pv => {
+         for (let zv = (0, ev.tb)(Pv.state).resolveInner(Pv.pos, -1); zv; zv = zv.parent) {
+           if (vv.indexOf(zv.name) > -1) return null;
+           if (zv.type.isTop) break
+         }
+         return zv(Pv)
```

#### 11. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L87-L92` → after: `L92-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L92-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L92-L95) · [Before (L87-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L87-L92)

```diff
- 
-     function uz(zz, tz) {
-       let sz = zz.charCodeAt(tz);
-       if (!bz(sz) || tz + 1 == zz.length) return sz;
-       let Fz = zz.charCodeAt(tz + 1);
-       return Nz(Fz) ? Fz - 56320 + (sz - 55296 << 10) + 65536 : sz
+     class lv {
+       constructor(vv, zv, Pv, hv) {
+         this.completion = vv, this.source = zv, this.match = Pv, this.score = hv
+       }
```

#### 12. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L96` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L99) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L96)

```diff
-       return zz >= 56320 && zz < 57344
+       return vv.selection.main.from
```

#### 13. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L99-L100` → after: `L102-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L102-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L102-L132) · [Before (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L99-L100)

```diff
-     function bz(zz) {
-       return zz >= 55296 && zz < 56320
+     function Wv(vv, zv) {
+       var Pv;
+       let {
+         source: hv
+       } = vv, Sv = zv && "^" != hv[0], ev = "$" != hv[hv.length - 1];
+       return Sv || ev ? new RegExp(`${Sv?"^":""}(?:${hv})${ev?"$":""}`, null !== (Pv = vv.flags) && void 0 !== Pv ? Pv : vv.ignoreCase ? "i" : "") : vv
+     }
+     const wv = hv.c.define();
+ 
+     function av(vv, zv, Pv, Sv) {
+       let {
+         main: ev
+       } = vv.selection, gv = Pv - ev.from, pv = Sv - ev.from;
+       return {
+         ...vv.changeByRange((dv => {
+           if (dv != ev && Pv != Sv && vv.sliceDoc(dv.from + gv, dv.from + pv) != vv.sliceDoc(Pv, Sv)) return {
+ ... (15 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L104` → after: `L137-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L137-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L137-L139) · [Before (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L104)

```diff
-       return zz < 65536 ? 1 : 2
+       if (!Array.isArray(vv)) return vv;
+       let zv = sv.get(vv);
+       return zv || sv.set(vv, zv = dv(vv)), zv
```

#### 15. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L107-L118` → after: `L144-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L144-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L144-L154) · [Before (L107-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L107-L118)

```diff
-       lineAt(zz) {
-         if (zz < 0 || zz > this.length) throw new RangeError(`Invalid position ${zz} in document of length ${this.length}`);
-         return this.lineInner(zz, !1, 1, 0)
-       }
-       line(zz) {
-         if (zz < 1 || zz > this.lines) throw new RangeError(`Invalid line number ${zz} in ${this.lines}-line document`);
-         return this.lineInner(zz, !0, 1, 0)
-       }
-       replace(zz, tz, sz) {
-         [zz, tz] = Jz(this, zz, tz);
-         let Fz = [];
-         return this.decompose(0, zz, Fz, 2), sz.length && sz.decompose(0, sz.length, Fz, 3), this.decompose(tz, this.length, Fz, 1), Hz.from(Fz, this.length - (tz - zz) + sz.length)
+       constructor(vv) {
+         this.pattern = vv, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
+         for (let zv = 0; zv < vv.length;) {
+           let Pv = (0, hv.K)(vv, zv),
+             Sv = (0, hv.L)(Pv);
+           this.chars.push(Pv);
+           let ev = vv.slice(zv, zv + Sv),
+             gv = ev.toUpperCase();
+           this.folded.push((0, hv.K)(gv == ev ? ev.toLowerCase() : gv, 0)), zv += Sv
+         }
+         this.astral = vv.length != this.chars.length
```

#### 16. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L120-L121` → after: `L156-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L156-L157) · [Before (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L120-L121)

```diff
-       append(zz) {
-         return this.replace(this.length, this.length, zz)
+       ret(vv, zv) {
+         return this.score = vv, this.matched = zv, this
```

#### 17. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L123-L127` → after: `L159-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L159-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L159-L205) · [Before (L123-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L123-L127)

```diff
-       slice(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
-         [zz, tz] = Jz(this, zz, tz);
-         let sz = [];
-         return this.decompose(zz, tz, sz, 0), Hz.from(sz, tz - zz)
+       match(vv) {
+         if (0 == this.pattern.length) return this.ret(-100, []);
+         if (vv.length < this.pattern.length) return null;
+         let {
+           chars: zv,
+           folded: Pv,
+           any: Sv,
+           precise: ev,
+           byWord: gv
+         } = this;
+         if (1 == zv.length) {
+           let Sv = (0, hv.K)(vv, 0),
+             ev = (0, hv.L)(Sv),
+             gv = ev == vv.length ? 0 : -100;
+           if (Sv == zv[0]);
+           else {
+ ... (31 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L129-L138` → after: `L207-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L207-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L207-L212) · [Before (L129-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L129-L138)

```diff
-       eq(zz) {
-         if (zz == this) return !0;
-         if (zz.length != this.length || zz.lines != this.lines) return !1;
-         let tz = this.scanIdentical(zz, 1),
-           sz = this.length - this.scanIdentical(zz, -1),
-           Fz = new rz(this),
-           Wz = new rz(zz);
-         for (let Xz = tz, Oz = tz;;) {
-           if (Fz.next(Xz), Wz.next(Xz), Xz = 0, Fz.lineBreak != Wz.lineBreak || Fz.done != Wz.done || Fz.value != Wz.value) return !1;
-           if (Oz += Fz.value.length, Fz.done || Oz >= sz) return !0
+       result(vv, zv, Pv) {
+         let Sv = [],
+           ev = 0;
+         for (let gv of zv) {
+           let vv = gv + (this.astral ? (0, hv.L)((0, hv.K)(Pv, gv)) : 1);
+           ev && Sv[ev - 1] == gv ? Sv[ev - 1] = vv : (Sv[ev++] = gv, Sv[ev++] = vv)
```

#### 19. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L141-L142` → after: `L216-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L216-L219) · [Before (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L141-L142)

```diff
-       iter() {
-         return new rz(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
+     }
+     class mv {
+       constructor(vv) {
+         this.pattern = vv, this.matched = [], this.score = 0, this.folded = vv.toLowerCase()
```

#### 20. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L144-L146` → after: `L221-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L221-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L221-L225) · [Before (L144-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L144-L146)

```diff
-       iterRange(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
-         return new Yz(this, zz, tz)
+       match(vv) {
+         if (vv.length < this.pattern.length) return null;
+         let zv = vv.slice(0, this.pattern.length),
+           Pv = zv == this.pattern ? 0 : zv.toLowerCase() == this.folded ? -200 : null;
+         return null == Pv ? null : (this.matched = [0, zv.length], this.score = Pv + (vv.length == this.pattern.length ? 0 : -100), this)
```

#### 21. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L148-L156` → after: `L227-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L227-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L227-L276) · [Before (L148-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L148-L156)

```diff
-       iterLines(zz, tz) {
-         let sz;
-         if (null == zz) sz = this.iter();
-         else {
-           null == tz && (tz = this.lines + 1);
-           let Fz = this.line(zz).from;
-           sz = this.iterRange(Fz, Math.max(Fz, tz == this.lines + 1 ? this.length : tz <= 1 ? 0 : this.line(tz - 1).to))
-         }
-         return new xz(sz)
+     }
+     const jv = hv.q.define({
+       combine: vv => (0, hv.O)(vv, {
+         activateOnTyping: !0,
+         activateOnCompletion: () => !1,
+         activateOnTypingDelay: 100,
+         selectOnOpen: !0,
+         override: null,
+         closeOnBlur: !0,
+         maxRenderedOptions: 100,
+         defaultKeymap: !0,
+         tooltipClass: () => "",
+         optionClass: () => "",
+         aboveCursor: !1,
+         icons: !0,
+         addToOptions: [],
+ ... (34 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L158-L159` → after: `L278-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L278-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L278-L280) · [Before (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L158-L159)

```diff
-       toString() {
-         return this.sliceString(0)
+       return {
+         style: `${Wv}: ${pv/((zv.bottom-zv.top)/gv.offsetHeight)}px; max-width: ${dv/((zv.right-zv.left)/gv.offsetWidth)}px`,
+         class: "cm-completionInfo-" + (Tv ? Nv ? "left-narrow" : "right-narrow" : lv ? "left" : "right")
```

#### 23. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L161-L163` → after: `L282-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L282-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L282-L295) · [Before (L161-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L161-L163)

```diff
-       toJSON() {
-         let zz = [];
-         return this.flatten(zz), zz
+     }
+     const Yv = hv.B.define();
+ 
+     function nv(vv, zv, Pv) {
+       if (vv <= Pv) return {
+         from: 0,
+         to: vv
+       };
+       if (zv < 0 && (zv = 0), zv <= vv >> 1) {
+         let vv = Math.floor(zv / Pv);
+         return {
+           from: vv * Pv,
+           to: (vv + 1) * Pv
+         }
```

#### 24. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L165-L168` → after: `L297-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L297-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L297-L300) · [Before (L165-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L165-L168)

```diff
-       constructor() {}
-       static of (zz) {
-         if (0 == zz.length) throw new RangeError("A document must have at least one line");
-         return 1 != zz.length || zz[0] ? zz.length <= 32 ? new gz(zz) : Hz.from(gz.split(zz, [])) : Dz.empty
+       let hv = Math.floor((vv - zv) / Pv);
+       return {
+         from: vv - (hv + 1) * Pv,
+         to: vv - hv * Pv
```

#### 25. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L171-L178` → after: `L303-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L303-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L303-L365) · [Before (L171-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L171-L178)

```diff
-     class gz extends Dz {
-       constructor(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(zz) {
-           let tz = -1;
-           for (let sz of zz) tz += sz.length + 1;
-           return tz
-         }(zz);
-         super(), this.text = zz, this.length = tz
+     class Ov {
+       constructor(vv, zv, Pv) {
+         this.view = vv, this.stateField = zv, this.applyCompletion = Pv, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
+           read: () => this.measureInfo(),
+           write: vv => this.placeInfo(vv),
+           key: this
+         }, this.space = null, this.currentClass = "";
+         let hv = vv.state.field(zv),
+           {
+             options: Sv,
+             selected: ev
+           } = hv.open,
+           gv = vv.state.facet(jv);
+         this.optionContent = function(vv) {
+           let zv = vv.addToOptions.slice();
+           return vv.icons && zv.push({
+ ... (47 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L180-L181` → after: `L367-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L367-L368) · [Before (L180-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L180-L181)

```diff
-       get lines() {
-         return this.text.length
+       mount() {
+         this.updateSel()
```

#### 27. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L183-L184` → after: `L370-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L370-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L370-L373) · [Before (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L183-L184)

```diff
-       get children() {
-         return null
+       showOptions(vv, zv) {
+         this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(vv, zv, this.range)), this.list.addEventListener("scroll", (() => {
+           this.info && this.view.requestMeasure(this.placeInfoReq)
+         }))
```

#### 28. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L186-L191` → after: `L375-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L375-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L375-L385) · [Before (L186-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L186-L191)

```diff
-       lineInner(zz, tz, sz, Fz) {
-         for (let Wz = 0;; Wz++) {
-           let Xz = this.text[Wz],
-             Oz = Fz + Xz.length;
-           if ((tz ? sz : Oz) >= zz) return new mz(Fz, Oz, sz, Xz);
-           Fz = Oz + 1, sz++
+       update(vv) {
+         var zv;
+         let Pv = vv.state.field(this.stateField),
+           hv = vv.startState.field(this.stateField);
+         if (this.updateTooltipClass(vv.state), Pv != hv) {
+           let {
+             options: Sv,
+             selected: ev,
+             disabled: gv
+           } = Pv.open;
+           hv.open && hv.open.options == Sv || (this.range = nv(Sv.length, ev, vv.state.facet(jv).maxRenderedOptions), this.showOptions(Sv, Pv.id)), this.updateSel(), gv != (null === (zv = hv.open) || void 0 === zv ? void 0 : zv.disabled) && this.dom.classList.toggle("cm-tooltip-a … [truncated]
```

#### 29. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L194-L221` → after: `L388-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L388-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L388-L393) · [Before (L194-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L194-L221)

```diff
-       decompose(zz, tz, sz, Fz) {
-         let Wz = zz <= 0 && tz >= this.length ? this : new gz(Pz(this.text, zz, tz), Math.min(tz, this.length) - Math.max(0, zz));
-         if (1 & Fz) {
-           let zz = sz.pop(),
-             tz = Bz(Wz.text, zz.text.slice(), 0, Wz.length);
-           if (tz.length <= 32) sz.push(new gz(tz, zz.length + Wz.length));
-           else {
-             let zz = tz.length >> 1;
-             sz.push(new gz(tz.slice(0, zz)), new gz(tz.slice(zz)))
-           }
-         } else sz.push(Wz)
-       }
-       replace(zz, tz, sz) {
-         if (!(sz instanceof gz)) return super.replace(zz, tz, sz);
-         [zz, tz] = Jz(this, zz, tz);
-         let Fz = Bz(this.text, Bz(sz.text, Pz(this.text, 0, zz)), tz),
- ... (12 more removed lines; see GitHub link above)
+       updateTooltipClass(vv) {
+         let zv = this.tooltipClass(vv);
+         if (zv != this.currentClass) {
+           for (let vv of this.currentClass.split(" ")) vv && this.dom.classList.remove(vv);
+           for (let vv of zv.split(" ")) vv && this.dom.classList.add(vv);
+           this.currentClass = zv
```

#### 30. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L225-L226` → after: `L396-L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L396-L397) · [Before (L225-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L225-L226)

```diff
-       flatten(zz) {
-         for (let tz of this.text) zz.push(tz)
+       positioned(vv) {
+         this.space = vv, this.info && this.view.requestMeasure(this.placeInfoReq)
```

#### 31. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L228-L241` → after: `L399-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L399-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L399-L417) · [Before (L228-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L228-L241)

```diff
-       scanIdentical() {
-         return 0
-       }
-       static split(zz, tz) {
-         let sz = [],
-           Fz = -1;
-         for (let Wz of zz) sz.push(Wz), Fz += Wz.length + 1, 32 == sz.length && (tz.push(new gz(sz, Fz)), sz = [], Fz = -1);
-         return Fz > -1 && tz.push(new gz(sz, Fz)), tz
-       }
-     }
-     class Hz extends Dz {
-       constructor(zz, tz) {
-         super(), this.children = zz, this.length = tz, this.lines = 0;
-         for (let sz of zz) this.lines += sz.lines
+       updateSel() {
+         let vv = this.view.state.field(this.stateField),
+           zv = vv.open;
+         (zv.selected > -1 && zv.selected < this.range.from || zv.selected >= this.range.to) && (this.range = nv(zv.options.length, zv.selected, this.view.state.facet(jv).maxRenderedOptions), this.showOptions(zv.options, vv.id));
+         let Pv = this.updateSelectedOption(zv.selected);
+         if (Pv) {
+           this.destroyInfo();
+           let {
+             completion: hv
+           } = zv.options[zv.selected], {
+             info: ev
+           } = hv;
+           if (!ev) return;
+           let gv = "string" === typeof ev ? document.createTextNode(ev) : ev(hv);
+           if (!gv) return;
+           "then" in gv ? gv.then((zv => {
+ ... (3 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L243-L249` → after: `L419-L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L419-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L419-L428) · [Before (L243-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L243-L249)

```diff
-       lineInner(zz, tz, sz, Fz) {
-         for (let Wz = 0;; Wz++) {
-           let Xz = this.children[Wz],
-             Oz = Fz + Xz.length,
-             oz = sz + Xz.lines - 1;
-           if ((tz ? oz : Oz) >= zz) return Xz.lineInner(zz, tz, sz, Fz);
-           Fz = Oz + 1, sz = oz + 1
+       addInfoPane(vv, zv) {
+         this.destroyInfo();
+         let Pv = this.info = document.createElement("div");
+         if (Pv.className = "cm-tooltip cm-completionInfo", Pv.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != vv.nodeType) Pv.appendChild(vv), this.infoDestroy = null;
+         else {
+           let {
+             dom: zv,
+             destroy: hv
+           } = vv;
+           Pv.appendChild(zv), this.infoDestroy = hv || null
```

#### 33. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L252-L258` → after: `L432-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L432-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L432-L455) · [Before (L252-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L252-L258)

```diff
-       decompose(zz, tz, sz, Fz) {
-         for (let Wz = 0, Xz = 0; Xz <= tz && Wz < this.children.length; Wz++) {
-           let Oz = this.children[Wz],
-             oz = Xz + Oz.length;
-           if (zz <= oz && tz >= Xz) {
-             let Wz = Fz & ((Xz <= zz ? 1 : 0) | (oz >= tz ? 2 : 0));
-             Xz >= zz && oz <= tz && !Wz ? sz.push(Oz) : Oz.decompose(zz - Xz, tz - Xz, sz, Wz)
+       updateSelectedOption(vv) {
+         let zv = null;
+         for (let Pv = this.list.firstChild, hv = this.range.from; Pv; Pv = Pv.nextSibling, hv++) "LI" == Pv.nodeName && Pv.id ? hv == vv ? Pv.hasAttribute("aria-selected") || (Pv.setAttribute("aria-selected", "true"), zv = Pv) : Pv.hasAttribute("aria-selected") && (Pv.removeAttri … [truncated]
+         return zv && function(vv, zv) {
+           let Pv = vv.getBoundingClientRect(),
+             hv = zv.getBoundingClientRect(),
+             Sv = Pv.height / vv.offsetHeight;
+           hv.top < Pv.top ? vv.scrollTop -= (Pv.top - hv.top) / Sv : hv.bottom > Pv.bottom && (vv.scrollTop += (hv.bottom - Pv.bottom) / Sv)
+         }(this.list, zv), zv
+       }
+       measureInfo() {
+         let vv = this.dom.querySelector("[aria-selected]");
+         if (!vv || !this.info) return null;
+         let zv = this.dom.getBoundingClientRect(),
+           Pv = this.info.getBoundingClientRect(),
+           hv = vv.getBoundingClientRect(),
+ ... (8 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L263-L273` → after: `L460-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L460-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L460-L481) · [Before (L263-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L263-L273)

```diff
-       replace(zz, tz, sz) {
-         if ([zz, tz] = Jz(this, zz, tz), sz.lines < this.lines)
-           for (let Fz = 0, Wz = 0; Fz < this.children.length; Fz++) {
-             let Xz = this.children[Fz],
-               Oz = Wz + Xz.length;
-             if (zz >= Wz && tz <= Oz) {
-               let oz = Xz.replace(zz - Wz, tz - Wz, sz),
-                 vz = this.lines - Xz.lines + oz.lines;
-               if (oz.lines < vz >> 4 && oz.lines > vz >> 6) {
-                 let Wz = this.children.slice();
-                 return Wz[Fz] = oz, new Hz(Wz, this.length - (tz - zz) + sz.length)
+       placeInfo(vv) {
+         this.info && (vv ? (vv.style && (this.info.style.cssText = vv.style), this.info.className = "cm-tooltip cm-completionInfo " + (vv.class || "")) : this.info.style.cssText = "top: -1e6px")
+       }
+       createListBox(vv, zv, Pv) {
+         const hv = document.createElement("ul");
+         hv.id = zv, hv.setAttribute("role", "listbox"), hv.setAttribute("aria-expanded", "true"), hv.setAttribute("aria-label", this.view.state.phrase("Completions")), hv.addEventListener("mousedown", (vv => {
+           vv.target == hv && vv.preventDefault()
+         }));
+         let Sv = null;
+         for (let ev = Pv.from; ev < Pv.to; ev++) {
+           let {
+             completion: gv,
+             match: pv
+           } = vv[ev], {
+             section: dv
+           } = gv;
+ ... (6 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L279-L289` → after: `L484-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L484-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L484-L491) · [Before (L279-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L279-L289)

```diff
-         return super.replace(zz, tz, sz)
-       }
-       sliceString(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
-           sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
-         [zz, tz] = Jz(this, zz, tz);
-         let Fz = "";
-         for (let Wz = 0, Xz = 0; Wz < this.children.length && Xz <= tz; Wz++) {
-           let Oz = this.children[Wz],
-             oz = Xz + Oz.length;
-           Xz > zz && Wz && (Fz += sz), zz < oz && tz > Xz && (Fz += Oz.sliceString(zz - Xz, tz - Xz, sz)), Xz = oz + 1
+           const Nv = hv.appendChild(document.createElement("li"));
+           Nv.id = zv + "-" + ev, Nv.setAttribute("role", "option");
+           let lv = this.optionClass(gv);
+           lv && (Nv.className = lv);
+           for (let vv of this.optionContent) {
+             let zv = vv(gv, this.view.state, this.view, pv);
+             zv && Nv.appendChild(zv)
+           }
```

#### 36. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L291-L294` → after: `L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L493) · [Before (L291-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L291-L294)

```diff
-         return Fz
-       }
-       flatten(zz) {
-         for (let tz of this.children) tz.flatten(zz)
+         return Pv.from && hv.classList.add("cm-completionListIncompleteTop"), Pv.to < vv.length && hv.classList.add("cm-completionListIncompleteBottom"), hv
```

#### 37. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L296-L306` → after: `L495-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L495-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L495-L496) · [Before (L296-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L296-L306)

```diff
-       scanIdentical(zz, tz) {
-         if (!(zz instanceof Hz)) return 0;
-         let sz = 0,
-           [Fz, Wz, Xz, Oz] = tz > 0 ? [0, 0, this.children.length, zz.children.length] : [this.children.length - 1, zz.children.length - 1, -1, -1];
-         for (;; Fz += tz, Wz += tz) {
-           if (Fz == Xz || Wz == Oz) return sz;
-           let oz = this.children[Fz],
-             vz = zz.children[Wz];
-           if (oz != vz) return sz + oz.scanIdentical(vz, tz);
-           sz += oz.length + 1
-         }
+       destroyInfo() {
+         this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
```

#### 38. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L308-L336` → after: `L498-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L498-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L498-L499) · [Before (L308-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L308-L336)

```diff
-       static from(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz.reduce(((zz, tz) => zz + tz.length + 1), -1),
-           sz = 0;
-         for (let Nz of zz) sz += Nz.lines;
-         if (sz < 32) {
-           let sz = [];
-           for (let tz of zz) tz.flatten(sz);
-           return new gz(sz, tz)
-         }
-         let Fz = Math.max(32, sz >> 5),
-           Wz = Fz << 1,
-           Xz = Fz >> 1,
-           Oz = [],
-           oz = 0,
-           vz = -1,
-           Uz = [];
- ... (13 more removed lines; see GitHub link above)
+       destroy() {
+         this.destroyInfo()
```

#### 39. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L341-L348` → after: `L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L504) · [Before (L341-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L341-L348)

```diff
-       let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-         Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
-       for (let Wz = 0, Xz = 0, Oz = !0; Xz < zz.length && Wz <= Fz; Xz++) {
-         let oz = zz[Xz],
-           vz = Wz + oz.length;
-         vz >= sz && (vz > Fz && (oz = oz.slice(0, Fz - Wz)), Wz < sz && (oz = oz.slice(sz - Wz)), Oz ? (tz[tz.length - 1] += oz, Oz = !1) : tz.push(oz)), Wz = vz + 1
-       }
-       return tz
+       return Pv => new Ov(Pv, vv, zv)
```

#### 40. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L351-L352` → after: `L507-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L507-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L507-L508) · [Before (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L351-L352)

```diff
-     function Pz(zz, tz, sz) {
-       return Bz(zz, [""], tz, sz)
+     function Kv(vv) {
+       return 100 * (vv.boost || 0) + (vv.apply ? 10 : 0) + (vv.info ? 5 : 0) + (vv.type ? 1 : 0)
```

#### 41. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L356-L379` → after: `L511-L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L511-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L511-L567) · [Before (L356-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L356-L379)

```diff
-       constructor(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         this.dir = tz, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [zz], this.offsets = [tz > 0 ? 1 : (zz instanceof gz ? zz.text.length : zz.children.length) << 1]
-       }
-       nextInner(zz, tz) {
-         for (this.done = this.lineBreak = !1;;) {
-           let sz = this.nodes.length - 1,
-             Fz = this.nodes[sz],
-             Wz = this.offsets[sz],
-             Xz = Wz >> 1,
-             Oz = Fz instanceof gz ? Fz.text.length : Fz.children.length;
-           if (Xz == (tz > 0 ? Oz : 0)) {
-             if (0 == sz) return this.done = !0, this.value = "", this;
-             tz > 0 && this.offsets[sz - 1]++, this.nodes.pop(), this.offsets.pop()
-           } else if ((1 & Wz) == (tz > 0 ? 0 : 1)) {
-             if (this.offsets[sz] += tz, 0 == zz) return this.lineBreak = !0, this.value = "\n", this;
- ... (8 more removed lines; see GitHub link above)
+       constructor(vv, zv, Pv, hv, Sv, ev) {
+         this.options = vv, this.attrs = zv, this.tooltip = Pv, this.timestamp = hv, this.selected = Sv, this.disabled = ev
+       }
+       setSelected(vv, zv) {
+         return vv == this.selected || vv >= this.options.length ? this : new Vv(this.options, tv(zv, vv), this.tooltip, this.timestamp, vv, this.disabled)
+       }
+       static build(vv, zv, Pv, hv, Sv, ev) {
+         if (hv && !ev && vv.some((vv => vv.isPending))) return hv.setDisabled();
+         let gv = function(vv, zv) {
+           let Pv = [],
+             hv = null,
+             Sv = null,
+             ev = vv => {
+               Pv.push(vv);
+               let {
+                 section: zv
+ ... (41 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L383-L385` → after: `L594-L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L594-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L594-L601) · [Before (L383-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L383-L385)

```diff
-       next() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
-         return zz < 0 && (this.nextInner(-zz, -this.dir), zz = this.value.length), this.nextInner(zz, this.dir)
+       map(vv) {
+         return new Vv(this.options, this.attrs, {
+           ...this.tooltip,
+           pos: vv.mapPos(this.tooltip.pos)
+         }, this.timestamp, this.selected, this.disabled)
+       }
+       setDisabled() {
+         return new Vv(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
```

#### 43. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L390` → after: `L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L606) · [Before (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L390)

```diff
-         this.value = "", this.done = !1, this.cursor = new rz(zz, tz > sz ? -1 : 1), this.pos = tz > sz ? zz.length : 0, this.from = Math.min(tz, sz), this.to = Math.max(tz, sz)
+         this.active = vv, this.id = zv, this.open = Pv
```

#### 44. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L392-L396` → after: `L608-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L608-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L608-L611) · [Before (L392-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L392-L396)

```diff
-       nextInner(zz, tz) {
-         if (tz < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
-         zz += Math.max(0, tz < 0 ? this.pos - this.to : this.from - this.pos);
-         let sz = tz < 0 ? this.pos - this.from : this.to - this.pos;
-         zz > sz && (zz = sz), sz -= zz;
+       static start() {
+         return new Uv(qv, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
+       }
+       update(vv) {
```

#### 45. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L398-L400` → after: `L613-L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L613-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L613-L630) · [Before (L398-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L398-L400)

```diff
-           value: Fz
-         } = this.cursor.next(zz);
-         return this.pos += (Fz.length + zz) * tz, this.value = Fz.length <= sz ? Fz : tz < 0 ? Fz.slice(Fz.length - sz) : Fz.slice(0, sz), this.done = !this.value, this
+           state: zv
+         } = vv, Pv = zv.facet(jv), hv = (Pv.override || zv.languageDataAt("autocomplete", Tv(zv)).map(Cv)).map((zv => (this.active.find((vv => vv.source == zv)) || new Qv(zv, this.active.some((vv => 0 != vv.state)) ? 1 : 0)).update(vv, Pv)));
+         hv.length == this.active.length && hv.every(((vv, zv) => vv == this.active[zv])) && (hv = this.active);
+         let Sv = this.open,
+           ev = vv.effects.some((vv => vv.is(Av)));
+         Sv && vv.docChanged && (Sv = Sv.map(vv.changes)), vv.selection || hv.some((zv => zv.hasResult() && vv.changes.touchesRange(zv.from, zv.to))) || ! function(vv, zv) {
+           if (vv == zv) return !0;
+           for (let Pv = 0, hv = 0;;) {
+             for (; Pv < vv.length && !vv[Pv].hasResult();) Pv++;
+             for (; hv < zv.length && !zv[hv].hasResult();) hv++;
+             let Sv = Pv == vv.length,
+               ev = hv == zv.length;
+             if (Sv || ev) return Sv == ev;
+             if (vv[Pv++].result != zv[hv++].result) return !1
+           }
+         }(hv, this.active) || ev ? Sv = Vv.build(hv, zv, this.id, Sv, Pv, ev) : Sv && Sv.disabled && !hv.some((vv => vv.isPending)) && (Sv = null), !Sv && hv.every((vv => !vv.isPending)) && hv.some((vv => vv.hasResult())) && (hv = hv.map((vv => vv.hasResult() ? new Qv(vv.source,  … [truncated]
+ ... (2 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L402-L404` → after: `L632-L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L632-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L632-L633) · [Before (L402-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L402-L404)

```diff
-       next() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
-         return zz < 0 ? zz = Math.max(zz, this.from - this.pos) : zz > 0 && (zz = Math.min(zz, this.to - this.pos)), this.nextInner(zz, this.cursor.dir)
+       get tooltip() {
+         return this.open ? this.open.tooltip : null
```

#### 47. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L406-L407` → after: `L635-L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L635-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L635-L636) · [Before (L406-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L406-L407)

```diff
-       get lineBreak() {
-         return this.cursor.lineBreak && "" != this.value
+       get attrs() {
+         return this.open ? this.open.attrs : this.active.length ? Rv : xv
```

#### 48. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L410-L412` → after: `L639-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L639-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L639-L657) · [Before (L410-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L410-L412)

```diff
-     class xz {
-       constructor(zz) {
-         this.inner = zz, this.afterBreak = !0, this.value = "", this.done = !1
+     const Rv = {
+         "aria-autocomplete": "list"
+       },
+       xv = {};
+ 
+     function tv(vv, zv) {
+       let Pv = {
+         "aria-autocomplete": "list",
+         "aria-haspopup": "listbox",
+         "aria-controls": vv
+       };
+       return zv > -1 && (Pv["aria-activedescendant"] = vv + "-" + zv), Pv
+     }
+     const qv = [];
+ 
+     function Iv(vv, zv) {
+ ... (3 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L414-L421` → after: `L659-L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L659-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L659-L665) · [Before (L414-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L414-L421)

```diff
-       next() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           {
-             done: tz,
-             lineBreak: sz,
-             value: Fz
-           } = this.inner.next(zz);
-         return tz && this.afterBreak ? (this.value = "", this.afterBreak = !1) : tz ? (this.done = !0, this.value = "") : sz ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = Fz, this.afterBreak = !1), this
+       let Pv = vv.isUserEvent("input.type");
+       return Pv && zv.activateOnTyping ? 5 : Pv ? 1 : vv.isUserEvent("delete.backward") ? 2 : vv.selection ? 8 : vv.docChanged ? 16 : 0
+     }
+     class Qv {
+       constructor(vv, zv) {
+         let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         this.source = vv, this.state = zv, this.explicit = Pv
```

#### 50. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L423` → after: `L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L667) · [Before (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L423)

```diff
-       get lineBreak() {
+       hasResult() {
```

#### 51. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L426-L434` → after: `L670-L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L670-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L670-L671) · [Before (L426-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L426-L434)

```diff
-     }
-     "undefined" != typeof Symbol && (Dz.prototype[Symbol.iterator] = function() {
-       return this.iter()
-     }, rz.prototype[Symbol.iterator] = Yz.prototype[Symbol.iterator] = xz.prototype[Symbol.iterator] = function() {
-       return this
-     });
-     class mz {
-       constructor(zz, tz, sz, Fz) {
-         this.from = zz, this.to = tz, this.number = sz, this.text = Fz
+       get isPending() {
+         return 1 == this.state
```

#### 52. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L436-L437` → after: `L673-L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L673-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L673-L691) · [Before (L436-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L436-L437)

```diff
-       get length() {
-         return this.to - this.from
+       update(vv, zv) {
+         let Pv = Iv(vv, zv),
+           hv = this;
+         (8 & Pv || 16 & Pv && this.touches(vv)) && (hv = new Qv(hv.source, 0)), 4 & Pv && 0 == hv.state && (hv = new Qv(this.source, 1)), hv = hv.updateFor(vv, Pv);
+         for (let Sv of vv.effects)
+           if (Sv.is(iv)) hv = new Qv(hv.source, 1, Sv.value);
+           else if (Sv.is(cv)) hv = new Qv(hv.source, 0);
+         else if (Sv.is(Av))
+           for (let vv of Sv.value) vv.source == hv.source && (hv = vv);
+         return hv
+       }
+       updateFor(vv, zv) {
+         return this.map(vv.changes)
+       }
+       map(vv) {
+         return this
+ ... (3 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L440-L442` → after: `L694-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L694-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L694-L723) · [Before (L440-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L440-L442)

```diff
- 
-     function Jz(zz, tz, sz) {
-       return [tz = Math.max(0, Math.min(zz.length, tz)), Math.max(tz, Math.min(zz.length, sz))]
+     class Zv extends Qv {
+       constructor(vv, zv, Pv, hv, Sv, ev) {
+         super(vv, 3, zv), this.limit = Pv, this.result = hv, this.from = Sv, this.to = ev
+       }
+       hasResult() {
+         return !0
+       }
+       updateFor(vv, zv) {
+         var Pv;
+         if (!(3 & zv)) return this.map(vv.changes);
+         let hv = this.result;
+         hv.map && !vv.changes.empty && (hv = hv.map(hv, vv.changes));
+         let Sv = vv.changes.mapPos(this.from),
+           ev = vv.changes.mapPos(this.to, 1),
+           pv = Tv(vv.state);
+         if (pv > ev || !hv || 2 & zv && (Tv(vv.startState) == this.from || pv < this.limit)) return new Qv(this.source, 4 & zv ? 1 : 0);
+ ... (14 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L446` → after: `L735-L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L735-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L735-L740) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L446)

```diff
-       return vz(zz, tz, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
+       const Pv = zv.completion.apply || zv.completion.label;
+       let hv = vv.state.field(Lv).active.find((vv => vv.source == zv.source));
+       return hv instanceof Zv && ("string" == typeof Pv ? vv.dispatch({
+         ...av(vv.state, Pv, hv.from, hv.to),
+         annotations: wv.of(zv.completion)
+       }) : Pv(vv, zv.completion, hv.from, hv.to), !0)
```

#### 55. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L449-L456` → after: `L744-L13714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L744-L13714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L744-L13714) · [Before (L449-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L449-L456)

```diff
-     function Cz(zz, tz) {
-       let sz = zz.charCodeAt(tz);
-       if (!((Fz = sz) >= 55296 && Fz < 56320) || tz + 1 == zz.length) return sz;
-       var Fz;
-       let Wz = zz.charCodeAt(tz + 1);
-       return function(zz) {
-         return zz >= 56320 && zz < 57344
-       }(Wz) ? Wz - 56320 + (sz - 55296 << 10) + 65536 : sz
+     function yv(vv) {
+       let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
+       return Pv => {
+         let hv = Pv.state.field(Lv, !1);
+         if (!hv || !hv.open || hv.open.disabled || Date.now() - hv.open.timestamp < Pv.state.facet(jv).interactionDelay) return !1;
+         let ev, gv = 1;
+         "page" == zv && (ev = (0, Sv.B)(Pv, hv.open.tooltip)) && (gv = Math.max(2, Math.floor(ev.dom.offsetHeight / ev.dom.querySelector("li").offsetHeight) - 1));
+         let {
+           length: pv
+         } = hv.open.options, dv = hv.open.selected > -1 ? hv.open.selected + gv * (vv ? 1 : -1) : vv ? 0 : pv - 1;
+         return dv < 0 ? dv = "page" == zv ? 0 : pv - 1 : dv >= pv && (dv = "page" == zv ? pv - 1 : 0), Pv.dispatch({
+           effects: Yv.of(dv)
+         }), !0
+       }
+     }
+     const Bv = vv => !!vv.state.field(Lv, !1) && (vv.dispatch({
+ ... (12955 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L459-L461` → after: `L14086-L14109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14086-L14109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14086-L14109) · [Before (L459-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L459-L461)

```diff
-     function ez(zz) {
-       return zz <= 65535 ? String.fromCharCode(zz) : (zz -= 65536, String.fromCharCode(55296 + (zz >> 10), 56320 + (1023 & zz)))
-     }
+           function iv(vv, zv, Pv, hv) {
+             let gv = [],
+               pv = 0,
+               dv = -1;
+             for (; Nv.pos > zv;) {
+               let {
+                 id: vv,
+                 start: zv,
+                 end: Pv,
+                 size: hv
+               } = Nv;
+               if (hv > 4) Nv.next();
+               else {
+                 if (dv > -1 && zv < dv) break;
+                 dv < 0 && (dv = Pv - ev), gv.push(vv, zv, Pv), pv++, Nv.next()
+               }
+ ... (8 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L463-L464` → after: `L14111-L14198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14111-L14198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14111-L14198) · [Before (L463-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L463-L464)

```diff
-     function Zz(zz) {
-       return zz < 65536 ? 1 : 2
+           function cv(vv, zv) {
+             return (Pv, hv, Sv) => {
+               let ev, pv, dv = 0,
+                 Nv = Pv.length - 1;
+               if (Nv >= 0 && (ev = Pv[Nv]) instanceof av) {
+                 if (!Nv && ev.type == vv && ev.length == Sv) return ev;
+                 (pv = ev.prop(gv.lookAhead)) && (dv = hv[Nv] + ev.length + pv)
+               }
+               return mv(vv, Pv, hv, Sv, dv, zv)
+             }
+           }
+ 
+           function Gv(vv, zv, Pv, hv, ev, gv, pv, dv, Nv) {
+             let lv = [],
+               Tv = [];
+             for (; vv.length > hv;) lv.push(vv.pop()), Tv.push(zv.pop() + Pv - ev);
+ ... (72 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L466-L469` → after: `L14200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14200) · [Before (L466-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L466-L469)

```diff
-     const Gz = /\r\n?|\n/;
-     var Tz = function(zz) {
-       return zz[zz.Simple = 0] = "Simple", zz[zz.TrackDel = 1] = "TrackDel", zz[zz.TrackBefore = 2] = "TrackBefore", zz[zz.TrackAfter = 3] = "TrackAfter", zz
-     }(Tz || (Tz = {}));
+     av.empty = new av(Nv.none, [], [], 0);
```

#### 59. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L471-L472` → after: `L14202-L14203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14202-L14203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14202-L14203) · [Before (L471-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L471-L472)

```diff
-       constructor(zz) {
-         this.sections = zz
+       constructor(vv, zv) {
+         this.buffer = vv, this.index = zv
```

#### 60. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L474-L477` → after: `L14205-L14206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14205-L14206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14205-L14206) · [Before (L474-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L474-L477)

```diff
-       get length() {
-         let zz = 0;
-         for (let tz = 0; tz < this.sections.length; tz += 2) zz += this.sections[tz];
-         return zz
+       get id() {
+         return this.buffer[this.index - 4]
```

#### 61. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L479-L485` → after: `L14208-L14209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14208-L14209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14208-L14209) · [Before (L479-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L479-L485)

```diff
-       get newLength() {
-         let zz = 0;
-         for (let tz = 0; tz < this.sections.length; tz += 2) {
-           let sz = this.sections[tz + 1];
-           zz += sz < 0 ? this.sections[tz] : sz
-         }
-         return zz
+       get start() {
+         return this.buffer[this.index - 3]
```

#### 62. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L487-L488` → after: `L14211-L14212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14211-L14212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14211-L14212) · [Before (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L487-L488)

```diff
-       get empty() {
-         return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
+       get end() {
+         return this.buffer[this.index - 2]
```

#### 63. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L490-L495` → after: `L14214-L14229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14214-L14229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14214-L14229) · [Before (L490-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L490-L495)

```diff
-       iterGaps(zz) {
-         for (let tz = 0, sz = 0, Fz = 0; tz < this.sections.length;) {
-           let Wz = this.sections[tz++],
-             Xz = this.sections[tz++];
-           Xz < 0 ? (zz(sz, Fz, Wz), Fz += Wz) : Fz += Xz, sz += Wz
-         }
+       get size() {
+         return this.buffer[this.index - 1]
+       }
+       get pos() {
+         return this.index
+       }
+       next() {
+         this.index -= 4
+       }
+       fork() {
+         return new sv(this.buffer, this.index)
+       }
+     }
+     class Cv {
+       constructor(vv, zv, Pv) {
+         this.buffer = vv, this.length = zv, this.set = Pv
```

#### 64. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L497-L498` → after: `L14231-L14232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14231-L14232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14231-L14232) · [Before (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L497-L498)

```diff
-       iterChangedRanges(zz) {
-         Mz(this, zz, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
+       get type() {
+         return Nv.none
```

#### 65. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L500` → after: `L14234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14234) · [Before (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L500)

```diff
-       get invertedDesc() {
+       toString() {
```

#### 66. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L502-L507` → after: `L14236-L14237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14236-L14237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14236-L14237) · [Before (L502-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L502-L507)

```diff
-         for (let tz = 0; tz < this.sections.length;) {
-           let sz = this.sections[tz++],
-             Fz = this.sections[tz++];
-           Fz < 0 ? zz.push(sz, Fz) : zz.push(Fz, sz)
-         }
-         return new cz(zz)
+         for (let zv = 0; zv < this.buffer.length;) vv.push(this.childString(zv)), zv = this.buffer[zv + 3];
+         return vv.join(",")
```

#### 67. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L509-L510` → after: `L14239-L14247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14239-L14247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14239-L14247) · [Before (L509-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L509-L510)

```diff
-       composeDesc(zz) {
-         return this.empty ? zz : zz.empty ? this : hz(this, zz)
+       childString(vv) {
+         let zv = this.buffer[vv],
+           Pv = this.buffer[vv + 3],
+           hv = this.set.types[zv],
+           Sv = hv.name;
+         if (/\W/.test(Sv) && !hv.isError && (Sv = JSON.stringify(Sv)), Pv == (vv += 4)) return Sv;
+         let ev = [];
+         for (; vv < Pv;) ev.push(this.childString(vv)), vv = this.buffer[vv + 3];
+         return Sv + "(" + ev.join(",") + ")"
```

#### 68. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L512-L514` → after: `L14249-L14254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14249-L14254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14249-L14254) · [Before (L512-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L512-L514)

```diff
-       mapDesc(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         return zz.empty ? this : dz(this, zz, tz)
+       findChild(vv, zv, Pv, hv, Sv) {
+         let {
+           buffer: ev
+         } = this, gv = -1;
+         for (let pv = vv; pv != zv && !(iv(Sv, hv, ev[pv + 1], ev[pv + 2]) && (gv = pv, Pv > 0)); pv = ev[pv + 3]);
+         return gv
```

#### 69. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L516-L519` → after: `L14256-L14258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14256-L14258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14256-L14258) · [Before (L516-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L516-L519)

```diff
-       mapPos(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
-           sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Tz.Simple,
-           Fz = 0,
+       slice(vv, zv, Pv) {
+         let hv = this.buffer,
+           Sv = new Uint16Array(zv - vv),
```

#### 70. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L521-L533` → after: `L14260-L14263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14260-L14263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14260-L14263) · [Before (L521-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L521-L533)

```diff
-         for (let Xz = 0; Xz < this.sections.length;) {
-           let Oz = this.sections[Xz++],
-             oz = this.sections[Xz++],
-             vz = Fz + Oz;
-           if (oz < 0) {
-             if (vz > zz) return Wz + (zz - Fz);
-             Wz += Oz
-           } else {
-             if (sz != Tz.Simple && vz >= zz && (sz == Tz.TrackDel && Fz < zz && vz > zz || sz == Tz.TrackBefore && Fz < zz || sz == Tz.TrackAfter && vz > zz)) return null;
-             if (vz > zz || vz == zz && tz < 0 && !Oz) return zz == Fz || tz < 0 ? Wz : Wz + oz;
-             Wz += oz
-           }
-           Fz = vz
+         for (let gv = vv, pv = 0; gv < zv;) {
+           Sv[pv++] = hv[gv++], Sv[pv++] = hv[gv++] - Pv;
+           let zv = Sv[pv++] = hv[gv++] - Pv;
+           Sv[pv++] = hv[gv++] - vv, ev = Math.max(ev, zv)
```

#### 71. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L535-L536` → after: `L14265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14265) · [Before (L535-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L535-L536)

```diff
-         if (zz > Fz) throw new RangeError(`Position ${zz} is out of range for changeset of length ${Fz}`);
-         return Wz
+         return new Cv(Sv, ev, this.set)
```

#### 72. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L538-L545` → after: `L14267-L14282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14267-L14282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14267-L14282) · [Before (L538-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L538-L545)

```diff
-       touchesRange(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz;
-         for (let sz = 0, Fz = 0; sz < this.sections.length && Fz <= tz;) {
-           let Wz = Fz + this.sections[sz++];
-           if (this.sections[sz++] >= 0 && Fz <= tz && Wz >= zz) return !(Fz < zz && Wz > tz) || "cover";
-           Fz = Wz
-         }
-         return !1
+     }
+ 
+     function iv(vv, zv, Pv, hv) {
+       switch (vv) {
+         case -2:
+           return Pv < zv;
+         case -1:
+           return hv >= zv && Pv < zv;
+         case 0:
+           return Pv < zv && hv > zv;
+         case 1:
+           return Pv <= zv && hv > zv;
+         case 2:
+           return hv > zv;
+         case 4:
+           return !0
```

#### 73. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L547-L552` → after: `L14284-L14327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14284-L14327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14284-L14327) · [Before (L547-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L547-L552)

```diff
-       toString() {
-         let zz = "";
-         for (let tz = 0; tz < this.sections.length;) {
-           let sz = this.sections[tz++],
-             Fz = this.sections[tz++];
-           zz += (zz ? " " : "") + sz + (Fz >= 0 ? ":" + Fz : "")
+     }
+ 
+     function cv(vv, zv, Pv, hv) {
+       for (var Sv; vv.from == vv.to || (Pv < 1 ? vv.from >= zv : vv.from > zv) || (Pv > -1 ? vv.to <= zv : vv.to < zv);) {
+         let zv = !hv && vv instanceof mv && vv.index < 0 ? null : vv.parent;
+         if (!zv) return vv;
+         vv = zv
+       }
+       let ev = hv ? 0 : wv.IgnoreOverlays;
+       if (hv)
+         for (let gv = vv, pv = gv.parent; pv; gv = pv, pv = gv.parent) gv instanceof mv && gv.index < 0 && (null === (Sv = pv.enter(zv, Pv, ev)) || void 0 === Sv ? void 0 : Sv.from) != gv.from && (vv = pv);
+       for (;;) {
+         let hv = vv.enter(zv, Pv, ev);
+         if (!hv) return vv;
+         vv = hv
+       }
+ ... (28 more added lines; see GitHub link above)
```

#### 74. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L556-L561` → after: `L14331-L14332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14331-L14332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14331-L14332) · [Before (L556-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L556-L561)

```diff
-       toJSON() {
-         return this.sections
-       }
-       static fromJSON(zz) {
-         if (!Array.isArray(zz) || zz.length % 2 || zz.some((zz => "number" != typeof zz))) throw new RangeError("Invalid JSON representation of ChangeDesc");
-         return new cz(zz)
+       get node() {
+         return this
```

#### 75. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L563-L564` → after: `L14334-L14335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14334-L14335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14334-L14335) · [Before (L563-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L563-L564)

```diff
-       static create(zz) {
-         return new cz(zz)
+       get next() {
+         return this.parent
```

#### 76. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L568-L569` → after: `L14339-L14340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14339-L14340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14339-L14340) · [Before (L568-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L568-L569)

```diff
-       constructor(zz, tz) {
-         super(zz), this.inserted = tz
+       constructor(vv, zv, Pv, hv) {
+         super(), this._tree = vv, this.from = zv, this.index = Pv, this._parent = hv
```

#### 77. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L571-L573` → after: `L14342-L14343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14342-L14343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14342-L14343) · [Before (L571-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L571-L573)

```diff
-       apply(zz) {
-         if (this.length != zz.length) throw new RangeError("Applying change set to a document with the wrong length");
-         return Mz(this, ((tz, sz, Fz, Wz, Xz) => zz = zz.replace(Fz, Fz + (sz - tz), Xz)), !1), zz
+       get type() {
+         return this._tree.type
```

#### 78. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L575-L576` → after: `L14345-L14346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14345-L14346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14345-L14346) · [Before (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L575-L576)

```diff
-       mapDesc(zz) {
-         return dz(this, zz, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
+       get name() {
+         return this._tree.type.name
```

#### 79. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L578-L588` → after: `L14348-L14370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14348-L14370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14348-L14370) · [Before (L578-L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L578-L588)

```diff
-       invert(zz) {
-         let tz = this.sections.slice(),
-           sz = [];
-         for (let Fz = 0, Wz = 0; Fz < tz.length; Fz += 2) {
-           let Xz = tz[Fz],
-             Oz = tz[Fz + 1];
-           if (Oz >= 0) {
-             tz[Fz] = Oz, tz[Fz + 1] = Xz;
-             let oz = Fz >> 1;
-             for (; sz.length < oz;) sz.push(Dz.empty);
-             sz.push(Xz ? zz.slice(Wz, Wz + Xz) : Dz.empty)
+       get to() {
+         return this.from + this._tree.length
+       }
+       nextChild(vv, zv, Pv, hv) {
+         let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
+         for (let ev = this;;) {
+           for (let {
+               children: gv,
+               positions: dv
+             } = ev._tree, Nv = zv > 0 ? gv.length : -1; vv != Nv; vv += zv) {
+             let Nv, lv = gv[vv],
+               Tv = dv[vv] + ev.from;
+             if (Sv & wv.EnterBracketed && lv instanceof av && (Nv = pv.get(lv)) && !Nv.overlay && Nv.bracketed && Pv >= Tv && Pv <= Tv + lv.length || iv(hv, Pv, Tv, Tv + lv.length))
+               if (lv instanceof Cv) {
+                 if (Sv & wv.ExcludeBuffers) continue;
+                 let gv = lv.findChild(0, lv.buffer.length, zv, Pv - Tv, hv);
+ ... (7 more added lines; see GitHub link above)
```

#### 80. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L590` → after: `L14372-L14373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14372-L14373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14372-L14373) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L590)

```diff
-           Wz += Xz
+           if (Sv & wv.IncludeAnonymous || !ev.type.isAnonymous) return null;
+           if (vv = ev.index >= 0 ? ev.index + zv : zv < 0 ? -1 : ev._parent._tree.children.length, ev = ev._parent, !ev) return null
```

#### 81. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L594-L595` → after: `L14376-L14377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14376-L14377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14376-L14377) · [Before (L594-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L594-L595)

```diff
-       compose(zz) {
-         return this.empty ? zz : zz.empty ? this : hz(this, zz, !0)
+       get firstChild() {
+         return this.nextChild(0, 1, 0, 4)
```

#### 82. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L597-L599` → after: `L14379-L14380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14379-L14380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14379-L14380) · [Before (L597-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L597-L599)

```diff
-       map(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         return zz.empty ? this : dz(this, zz, tz, !0)
+       get lastChild() {
+         return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
```

#### 83. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L601-L602` → after: `L14382-L14383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14382-L14383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14382-L14383) · [Before (L601-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L601-L602)

```diff
-       iterChanges(zz) {
-         Mz(this, zz, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
+       childAfter(vv) {
+         return this.nextChild(0, 1, vv, 2)
```

#### 84. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L604-L605` → after: `L14385-L14386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14385-L14386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14385-L14386) · [Before (L604-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L604-L605)

```diff
-       get desc() {
-         return cz.create(this.sections)
+       childBefore(vv) {
+         return this.nextChild(this._tree.children.length - 1, -1, vv, -2)
```

#### 85. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L607-L631` → after: `L14388-L14389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14388-L14389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14388-L14389) · [Before (L607-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L607-L631)

```diff
-       filter(zz) {
-         let tz = [],
-           sz = [],
-           Fz = [],
-           Wz = new Qz(this);
-         zz: for (let Xz = 0, Oz = 0;;) {
-           let oz = Xz == zz.length ? 1e9 : zz[Xz++];
-           for (; Oz < oz || Oz == oz && 0 == Wz.len;) {
-             if (Wz.done) break zz;
-             let zz = Math.min(Wz.len, oz - Oz);
-             Az(Fz, zz, -1);
-             let Xz = -1 == Wz.ins ? -1 : 0 == Wz.off ? Wz.ins : 0;
-             Az(tz, zz, Xz), Xz > 0 && yz(sz, tz, Wz.text), Wz.forward(zz), Oz += zz
-           }
-           let vz = zz[Xz++];
-           for (; Oz < vz;) {
- ... (9 more removed lines; see GitHub link above)
+       prop(vv) {
+         return this._tree.prop(vv)
```

#### 86. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L633-L638` → after: `L14391-L14401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14391-L14401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14391-L14401) · [Before (L633-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L633-L638)

```diff
-       toJSON() {
-         let zz = [];
-         for (let tz = 0; tz < this.sections.length; tz += 2) {
-           let sz = this.sections[tz],
-             Fz = this.sections[tz + 1];
-           Fz < 0 ? zz.push(sz) : 0 == Fz ? zz.push([sz]) : zz.push([sz].concat(this.inserted[tz >> 1].toJSON()))
+       enter(vv, zv) {
+         let Pv, hv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         if (!(hv & wv.IgnoreOverlays) && (Pv = pv.get(this._tree)) && Pv.overlay) {
+           let Sv = vv - this.from,
+             ev = hv & wv.EnterBracketed && Pv.bracketed;
+           for (let {
+               from: vv,
+               to: hv
+             }
+             of Pv.overlay)
+             if ((zv > 0 || ev ? vv <= Sv : vv < Sv) && (zv < 0 || ev ? hv >= Sv : hv > Sv)) return new mv(Pv.tree, Pv.overlay[0].from + this.from, -1, this)
```

#### 87. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L642-L646` → after: `L14410-L14428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14410-L14428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14410-L14428) · [Before (L642-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L642-L646)

```diff
-       static of (zz, tz, sz) {
-         let Fz = [],
-           Wz = [],
-           Xz = 0,
-           Oz = null;
+       get parent() {
+         return this._parent ? this._parent.nextSignificantParent() : null
+       }
+       get nextSibling() {
+         return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null
+       }
+       get prevSibling() {
+         return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4) : null
+       }
+       get tree() {
+         return this._tree
+       }
+       toTree() {
+         return this._tree
+       }
+       toString() {
+ ... (3 more added lines; see GitHub link above)
```

#### 88. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L648-L672` → after: `L14430-L14450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14430-L14450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14430-L14450) · [Before (L648-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L648-L672)

```diff
-         function oz() {
-           if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !Fz.length) return;
-           Xz < tz && Az(Fz, tz - Xz, -1);
-           let zz = new jz(Fz, Wz);
-           Oz = Oz ? Oz.compose(zz.map(Oz)) : zz, Fz = [], Wz = [], Xz = 0
-         }
-         return function zz(vz) {
-           if (Array.isArray(vz))
-             for (let tz of vz) zz(tz);
-           else if (vz instanceof jz) {
-             if (vz.length != tz) throw new RangeError(`Mismatched change set length (got ${vz.length}, expected ${tz})`);
-             oz(), Oz = Oz ? Oz.compose(vz.map(Oz)) : vz
-           } else {
-             let {
-               from: zz,
-               to: Oz = zz,
- ... (9 more removed lines; see GitHub link above)
+     function jv(vv, zv, Pv, hv) {
+       let Sv = vv.cursor(),
+         ev = [];
+       if (!Sv.firstChild()) return ev;
+       if (null != Pv)
+         for (let gv = !1; !gv;)
+           if (gv = Sv.type.is(Pv), !Sv.nextSibling()) return ev;
+       for (;;) {
+         if (null != hv && Sv.type.is(hv)) return ev;
+         if (Sv.type.is(zv) && ev.push(Sv.node), !Sv.nextSibling()) return null == hv ? ev : []
+       }
+     }
+ 
+     function fv(vv, zv) {
+       let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zv.length - 1;
+       for (let hv = vv; Pv >= 0; hv = hv.parent) {
+ ... (5 more added lines; see GitHub link above)
```

#### 89. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L674-L675` → after: `L14452-L14456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14452-L14456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14452-L14456) · [Before (L674-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L674-L675)

```diff
-       static empty(zz) {
-         return new jz(zz ? [zz, -1] : [], [])
+       return !0
+     }
+     class Fv {
+       constructor(vv, zv, Pv, hv) {
+         this.parent = vv, this.buffer = zv, this.index = Pv, this.start = hv
```

#### 90. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L677-L678` → after: `L14458-L14521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14458-L14521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14458-L14521) · [Before (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L677-L678)

```diff
-       static fromJSON(zz) {
-         if (!Array.isArray(zz)) throw new RangeError("Invalid JSON representation of ChangeSet");
+     }
+     class Yv extends Gv {
+       get name() {
+         return this.type.name
+       }
+       get from() {
+         return this.context.start + this.context.buffer.buffer[this.index + 1]
+       }
+       get to() {
+         return this.context.start + this.context.buffer.buffer[this.index + 2]
+       }
+       constructor(vv, zv, Pv) {
+         super(), this.context = vv, this._parent = zv, this.index = Pv, this.type = vv.buffer.set.types[vv.buffer.buffer[Pv]]
+       }
+       child(vv, zv, Pv) {
+         let {
+ ... (48 more added lines; see GitHub link above)
```

#### 91. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L680-L691` → after: `L14523-L14531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14523-L14531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14523-L14531) · [Before (L680-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L680-L691)

```diff
-           sz = [];
-         for (let Fz = 0; Fz < zz.length; Fz++) {
-           let Wz = zz[Fz];
-           if ("number" == typeof Wz) tz.push(Wz, -1);
-           else {
-             if (!Array.isArray(Wz) || "number" != typeof Wz[0] || Wz.some(((zz, tz) => tz && "string" != typeof zz))) throw new RangeError("Invalid JSON representation of ChangeSet");
-             if (1 == Wz.length) tz.push(Wz[0], 0);
-             else {
-               for (; sz.length < Fz;) sz.push(Dz.empty);
-               sz[Fz] = Dz.of(Wz.slice(1)), tz.push(Wz[0], sz[Fz].length)
-             }
-           }
+           zv = [],
+           {
+             buffer: Pv
+           } = this.context,
+           hv = this.index + 4,
+           Sv = Pv.buffer[this.index + 3];
+         if (Sv > hv) {
+           let ev = Pv.buffer[this.index + 1];
+           vv.push(Pv.slice(hv, Sv, ev)), zv.push(0)
```

#### 92. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L693` → after: `L14533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14533) · [Before (L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L693)

```diff
-         return new jz(tz, sz)
+         return new av(this.type, vv, zv, this.to - this.from)
```

#### 93. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L695-L696` → after: `L14535-L14536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14535-L14536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14535-L14536) · [Before (L695-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L695-L696)

```diff
-       static createSet(zz, tz) {
-         return new jz(zz, tz)
+       toString() {
+         return this.context.buffer.childString(this.index)
```

#### 94. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L700-L704` → after: `L14540-L14550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14540-L14550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14540-L14550) · [Before (L700-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L700-L704)

```diff
-     function Az(zz, tz, sz) {
-       let Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       if (0 == tz && sz <= 0) return;
-       let Wz = zz.length - 2;
-       Wz >= 0 && sz <= 0 && sz == zz[Wz + 1] ? zz[Wz] += tz : Wz >= 0 && 0 == tz && 0 == zz[Wz] ? zz[Wz + 1] += sz : Fz ? (zz[Wz] += tz, zz[Wz + 1] += sz) : zz.push(tz, sz)
+     function nv(vv) {
+       if (!vv.length) return null;
+       let zv = 0,
+         Pv = vv[0];
+       for (let ev = 1; ev < vv.length; ev++) {
+         let hv = vv[ev];
+         (hv.from > Pv.from || hv.to < Pv.to) && (Pv = hv, zv = ev)
+       }
+       let hv = Pv instanceof mv && Pv.index < 0 ? null : Pv.parent,
+         Sv = vv.slice();
+       return hv ? Sv[zv] = hv : Sv.splice(zv, 1), new Ov(Sv, Pv)
```

#### 95. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L706-L713` → after: `L14552-L14557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14552-L14557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14552-L14557) · [Before (L706-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L706-L713)

```diff
- 
-     function yz(zz, tz, sz) {
-       if (0 == sz.length) return;
-       let Fz = tz.length - 2 >> 1;
-       if (Fz < zz.length) zz[zz.length - 1] = zz[zz.length - 1].append(sz);
-       else {
-         for (; zz.length < Fz;) zz.push(Dz.empty);
-         zz.push(sz)
+     class Ov {
+       constructor(vv, zv) {
+         this.heads = vv, this.node = zv
+       }
+       get next() {
+         return nv(this.heads)
```

#### 96. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L716-L722` → after: `L14560-L14566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14560-L14566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14560-L14566) · [Before (L716-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L716-L722)

```diff
- 
-     function Mz(zz, tz, sz) {
-       let Fz = zz.inserted;
-       for (let Wz = 0, Xz = 0, Oz = 0; Oz < zz.sections.length;) {
-         let oz = zz.sections[Oz++],
-           vz = zz.sections[Oz++];
-         if (vz < 0) Wz += oz, Xz += oz;
+     class Dv {
+       get name() {
+         return this.type.name
+       }
+       constructor(vv) {
+         let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = zv & ~wv.EnterBracketed, vv instanceof mv) this.yieldNode(vv);
```

#### 97. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L724-L728` → after: `L14568-L14570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14568-L14570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14568-L14570) · [Before (L724-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L724-L728)

```diff
-           let Uz = Wz,
-             Kz = Xz,
-             uz = Dz.empty;
-           for (; Uz += oz, Kz += vz, vz && Fz && (uz = uz.append(Fz[Oz - 2 >> 1])), !(sz || Oz == zz.sections.length || zz.sections[Oz + 1] < 0);) oz = zz.sections[Oz++], vz = zz.sections[Oz++];
-           tz(Wz, Uz, Xz, Kz, uz), Wz = Uz, Xz = Kz
+           this._tree = vv.context.parent, this.buffer = vv.context;
+           for (let zv = vv._parent; zv; zv = zv._parent) this.stack.unshift(zv.index);
+           this.bufferNode = vv, this.yieldBuf(vv.index)
```

#### 98. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L731-L752` → after: `L14573-L14626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14573-L14626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14573-L14626) · [Before (L731-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L731-L752)

```diff
-     }
- 
-     function dz(zz, tz, sz) {
-       let Fz = [],
-         Wz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
-         Xz = new Qz(zz),
-         Oz = new Qz(tz),
-         oz = 0;
-       for (let vz = -1;;) {
-         if (++oz > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
-         if (Xz.done && Oz.len || Oz.done && Xz.len) throw new Error("Mismatched change set lengths");
-         if (-1 == Xz.ins && -1 == Oz.ins) {
-           let zz = Math.min(Xz.len, Oz.len);
-           Az(Fz, zz, -1), Xz.forward(zz), Oz.forward(zz)
-         } else if (Oz.ins >= 0 && (Xz.ins < 0 || vz == Xz.i || 0 == Xz.off && (Oz.len < Xz.len || Oz.len == Xz.len && !sz))) {
-           let zz = Oz.len;
- ... (6 more removed lines; see GitHub link above)
+       yieldNode(vv) {
+         return !!vv && (this._tree = vv, this.type = vv.type, this.from = vv.from, this.to = vv.to, !0)
+       }
+       yieldBuf(vv, zv) {
+         this.index = vv;
+         let {
+           start: Pv,
+           buffer: hv
+         } = this.buffer;
+         return this.type = zv || hv.set.types[hv.buffer[vv]], this.from = Pv + hv.buffer[vv + 1], this.to = Pv + hv.buffer[vv + 2], !0
+       }
+       yield(vv) {
+         return !!vv && (vv instanceof mv ? (this.buffer = null, this.yieldNode(vv)) : (this.buffer = vv.context, this.yieldBuf(vv.index, vv.type)))
+       }
+       toString() {
+         return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
+ ... (38 more added lines; see GitHub link above)
```

#### 99. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L754-L768` → after: `L14628-L14716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14628-L14716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14628-L14716) · [Before (L754-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L754-L768)

```diff
-           if (!(Xz.ins >= 0)) {
-             if (Xz.done && Oz.done) return Wz ? jz.createSet(Fz, Wz) : cz.create(Fz);
-             throw new Error("Mismatched change set lengths")
-           } {
-             let zz = 0,
-               tz = Xz.len;
-             for (; tz;) {
-               if (++oz > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
-               if (-1 == Oz.ins) {
-                 let sz = Math.min(tz, Oz.len);
-                 zz += sz, tz -= sz, Oz.forward(sz)
-               } else {
-                 if (!(0 == Oz.ins && Oz.len < tz)) break;
-                 tz -= Oz.len, Oz.next()
-               }
+           let vv = zv.buffer[this.index + 3];
+           if (vv < (Pv < 0 ? zv.buffer.length : zv.buffer[this.stack[Pv] + 3])) return this.yieldBuf(vv)
+         }
+         return Pv < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + vv, vv, 0, 4, this.mode))
+       }
+       nextSibling() {
+         return this.sibling(1)
+       }
+       prevSibling() {
+         return this.sibling(-1)
+       }
+       atLastNode(vv) {
+         let zv, Pv, {
+           buffer: hv
+         } = this;
+         if (hv) {
+ ... (73 more added lines; see GitHub link above)
```

#### 100. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L770` → after: `L14718-L14739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14718-L14739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14718-L14739) · [Before (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L770)

```diff
-             Az(Fz, zz, vz < Xz.i ? Xz.ins : 0), Wz && vz < Xz.i && yz(Wz, Fz, Xz.text), vz = Xz.i, Xz.forward(Xz.len - tz)
+             this.type.isAnonymous || (hv = !0)
+           }
+           for (;;) {
+             if (hv && zv && zv(this), hv = this.type.isAnonymous, !Pv) return;
+             if (this.nextSibling()) break;
+             this.parent(), Pv--, hv = !0
+           }
+         }
+       }
+       matchContext(vv) {
+         if (!this.buffer) return fv(this.node.parent, vv);
+         let {
+           buffer: zv
+         } = this.buffer, {
+           types: Pv
+         } = zv.set;
+ ... (6 more added lines; see GitHub link above)
```

#### 101. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L777-L795` → after: `L14752-L14759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14752-L14759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14752-L14759) · [Before (L777-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L777-L795)

```diff
-       let sz = [],
-         Fz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
-         Wz = new Qz(zz),
-         Xz = new Qz(tz),
-         Oz = 0;
-       for (let oz = !1;;) {
-         if (++Oz > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
-         if (Wz.done && Xz.done) return Fz ? jz.createSet(sz, Fz) : cz.create(sz);
-         if (0 == Wz.ins) Az(sz, Wz.len, 0, oz), Wz.next();
-         else if (0 != Xz.len || Xz.done) {
-           if (Wz.done || Xz.done) throw new Error("Mismatched change set lengths");
-           {
-             let zz = Math.min(Wz.len2, Xz.len),
-               tz = sz.length;
-             if (-1 == Wz.ins) {
-               let tz = -1 == Xz.ins ? -1 : Xz.off ? 0 : Xz.ins;
- ... (3 more removed lines; see GitHub link above)
+       if (!vv.isAnonymous || zv instanceof Cv || zv.type != vv) return 1;
+       let Pv = Vv.get(zv);
+       if (null == Pv) {
+         Pv = 1;
+         for (let hv of zv.children) {
+           if (hv.type != vv || !(hv instanceof av)) {
+             Pv = 1;
+             break
```

#### 102. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L797` → after: `L14761-L14763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14761-L14763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14761-L14763) · [Before (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L797)

```diff
-         } else Az(sz, 0, Xz.ins, oz), Fz && yz(Fz, sz, Xz.text), Xz.next()
+           Pv += Uv(vv, hv)
+         }
+         Vv.set(zv, Pv)
```

#### 103. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L801-L808` → after: `L14800-L14801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14800-L14801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14800-L14801) · [Before (L801-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L801-L808)

```diff
-       constructor(zz) {
-         this.set = zz, this.i = 0, this.next()
-       }
-       next() {
-         let {
-           sections: zz
-         } = this.set;
-         this.i < zz.length ? (this.len = zz[this.i++], this.ins = zz[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
+       constructor() {
+         this.map = new WeakMap
```

#### 104. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L810-L811` → after: `L14803-L14805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14803-L14805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14803-L14805) · [Before (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L810-L811)

```diff
-       get done() {
-         return -2 == this.ins
+       setBuffer(vv, zv, Pv) {
+         let hv = this.map.get(vv);
+         hv || this.map.set(vv, hv = new Map), hv.set(zv, Pv)
```

#### 105. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L813-L814` → after: `L14807-L14809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14807-L14809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14807-L14809) · [Before (L813-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L813-L814)

```diff
-       get len2() {
-         return this.ins < 0 ? this.len : this.ins
+       getBuffer(vv, zv) {
+         let Pv = this.map.get(vv);
+         return Pv && Pv.get(zv)
```

#### 106. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L816-L820` → after: `L14811-L14812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14811-L14812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14811-L14812) · [Before (L816-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L816-L820)

```diff
-       get text() {
-         let {
-           inserted: zz
-         } = this.set, tz = this.i - 2 >> 1;
-         return tz >= zz.length ? Dz.empty : zz[tz]
+       set(vv, zv) {
+         vv instanceof Yv ? this.setBuffer(vv.context.buffer, vv.index, zv) : vv instanceof mv && this.map.set(vv.tree, zv)
```

#### 107. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L822-L826` → after: `L14814-L14815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14814-L14815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14814-L14815) · [Before (L822-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L822-L826)

```diff
-       textBit(zz) {
-         let {
-           inserted: tz
-         } = this.set, sz = this.i - 2 >> 1;
-         return sz >= tz.length && !zz ? Dz.empty : tz[sz].slice(this.off, null == zz ? void 0 : this.off + zz)
+       get(vv) {
+         return vv instanceof Yv ? this.getBuffer(vv.context.buffer, vv.index) : vv instanceof mv ? this.map.get(vv.tree) : void 0
```

#### 108. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L828-L829` → after: `L14817-L14818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14817-L14818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14817-L14818) · [Before (L828-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L828-L829)

```diff
-       forward(zz) {
-         zz == this.len ? this.next() : (this.len -= zz, this.off += zz)
+       cursorSet(vv, zv) {
+         vv.buffer ? this.setBuffer(vv.buffer.buffer, vv.index, zv) : this.map.set(vv.tree, zv)
```

#### 109. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L831-L832` → after: `L14820-L14821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14820-L14821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14820-L14821) · [Before (L831-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L831-L832)

```diff
-       forward2(zz) {
-         -1 == this.ins ? this.forward(zz) : zz == this.ins ? this.next() : (this.ins -= zz, this.off += zz)
+       cursorGet(vv) {
+         return vv.buffer ? this.getBuffer(vv.buffer.buffer, vv.index) : this.map.get(vv.tree)
```

#### 110. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L836-L840` → after: `L14825-L14828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14825-L14828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14825-L14828) · [Before (L836-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L836-L840)

```diff
-       constructor(zz, tz, sz) {
-         this.from = zz, this.to = tz, this.flags = sz
-       }
-       get anchor() {
-         return 32 & this.flags ? this.to : this.from
+       constructor(vv, zv, Pv, hv) {
+         let Sv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           ev = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+         this.from = vv, this.to = zv, this.tree = Pv, this.offset = hv, this.open = (Sv ? 1 : 0) | (ev ? 2 : 0)
```

#### 111. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L842-L843` → after: `L14830-L14831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14830-L14831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14830-L14831) · [Before (L842-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L842-L843)

```diff
-       get head() {
-         return 32 & this.flags ? this.from : this.to
+       get openStart() {
+         return (1 & this.open) > 0
```

#### 112. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L845-L846` → after: `L14833-L14834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14833-L14834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14833-L14834) · [Before (L845-L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L845-L846)

```diff
-       get empty() {
-         return this.from == this.to
+       get openEnd() {
+         return (2 & this.open) > 0
```

#### 113. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L848-L849` → after: `L14836-L14841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14836-L14841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14836-L14841) · [Before (L848-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L848-L849)

```diff
-       get assoc() {
-         return 8 & this.flags ? -1 : 16 & this.flags ? 1 : 0
+       static addTree(vv) {
+         let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
+           Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           hv = [new tv(0, vv.length, vv, 0, !1, Pv)];
+         for (let Sv of zv) Sv.to > vv.length && hv.push(Sv);
+         return hv
```

#### 114. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L851-L853` → after: `L14843-L14866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14843-L14866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14843-L14866) · [Before (L851-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L851-L853)

```diff
-       get bidiLevel() {
-         let zz = 7 & this.flags;
-         return 7 == zz ? null : zz
+       static applyChanges(vv, zv) {
+         let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
+         if (!zv.length) return vv;
+         let hv = [],
+           Sv = 1,
+           ev = vv.length ? vv[0] : null;
+         for (let gv = 0, pv = 0, dv = 0;; gv++) {
+           let Nv = gv < zv.length ? zv[gv] : null,
+             lv = Nv ? Nv.fromA : 1e9;
+           if (lv - pv >= Pv)
+             for (; ev && ev.from < lv;) {
+               let zv = ev;
+               if (pv >= zv.from || lv <= zv.to || dv) {
+                 let vv = Math.max(zv.from, pv) - dv,
+                   Pv = Math.min(zv.to, lv) - dv;
+                 zv = vv >= Pv ? null : new tv(vv, Pv, zv.tree, zv.offset + dv, gv > 0, !!Nv)
+ ... (8 more added lines; see GitHub link above)
```

#### 115. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L855-L857` → after: `L14868-L14871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14868-L14871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14868-L14871) · [Before (L855-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L855-L857)

```diff
-       get goalColumn() {
-         let zz = this.flags >> 6;
-         return 16777215 == zz ? void 0 : zz
+     }
+     class qv {
+       startParse(vv, zv, Pv) {
+         return "string" == typeof vv && (vv = new Iv(vv)), Pv = Pv ? Pv.length ? Pv.map((vv => new ev(vv.from, vv.to))) : [new ev(0, 0)] : [new ev(0, vv.length)], this.createParse(vv, zv || [], Pv)
```

#### 116. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L859-L861` → after: `L14873-L14878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14873-L14878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14873-L14878) · [Before (L859-L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L859-L861)

```diff
-       map(zz) {
-         let tz, sz, Fz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
-         return this.empty ? tz = sz = zz.mapPos(this.from, Fz) : (tz = zz.mapPos(this.from, 1), sz = zz.mapPos(this.to, -1)), tz == this.from && sz == this.to ? this : new kz(tz, sz, this.flags)
+       parse(vv, zv, Pv) {
+         let hv = this.startParse(vv, zv, Pv);
+         for (;;) {
+           let vv = hv.advance();
+           if (vv) return vv
+         }
```

#### 117. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L863-L868` → after: `L14880-L14883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14880-L14883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14880-L14883) · [Before (L863-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L863-L868)

```diff
-       extend(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz,
-           sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         if (zz <= this.anchor && tz >= this.anchor) return iz.range(zz, tz, void 0, void 0, sz);
-         let Fz = Math.abs(zz - this.anchor) > Math.abs(tz - this.anchor) ? zz : tz;
-         return iz.range(this.anchor, Fz, void 0, void 0, sz)
+     }
+     class Iv {
+       constructor(vv) {
+         this.string = vv
```

#### 118. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L870-L872` → after: `L14885-L14886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14885-L14886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14885-L14886) · [Before (L870-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L870-L872)

```diff
-       eq(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         return this.anchor == zz.anchor && this.head == zz.head && this.goalColumn == zz.goalColumn && (!tz || !this.empty || this.assoc == zz.assoc)
+       get length() {
+         return this.string.length
```

#### 119. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L874-L878` → after: `L14888-L14889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14888-L14889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14888-L14889) · [Before (L874-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L874-L878)

```diff
-       toJSON() {
-         return {
-           anchor: this.anchor,
-           head: this.head
-         }
+       chunk(vv) {
+         return this.string.slice(vv)
```

#### 120. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L880-L882` → after: `L14891-L14892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14891-L14892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14891-L14892) · [Before (L880-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L880-L882)

```diff
-       static fromJSON(zz) {
-         if (!zz || "number" != typeof zz.anchor || "number" != typeof zz.head) throw new RangeError("Invalid JSON representation for SelectionRange");
-         return iz.range(zz.anchor, zz.head)
+       get lineChunks() {
+         return !1
```

#### 121. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L884-L885` → after: `L14894-L14895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14894-L14895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14894-L14895) · [Before (L884-L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L884-L885)

```diff
-       static create(zz, tz, sz) {
-         return new kz(zz, tz, sz)
+       read(vv, zv) {
+         return this.string.slice(vv, zv)
```

#### 122. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L889-L890` → after: `L14912-L14913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14912-L14913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14912-L14913) · [Before (L889-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L889-L890)

```diff
-       constructor(zz, tz) {
-         this.du = zz, this.mainIndex = tz
+       constructor(vv, zv, Pv, hv) {
+         this.name = vv, this.set = zv, this.base = Pv, this.modified = hv, this.id = Sv++
```

#### 123. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L892-L894` → after: `L14915-L14920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14915-L14920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14915-L14920) · [Before (L892-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L892-L894)

```diff
-       map(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
-         return zz.empty ? this : iz.create(this.du.map((sz => sz.map(zz, tz))), this.mainIndex)
+       toString() {
+         let {
+           name: vv
+         } = this;
+         for (let zv of this.modified) zv.name && (vv = `${zv.name}(${vv})`);
+         return vv
```

#### 124. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L896-L901` → after: `L14922-L14928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14922-L14928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14922-L14928) · [Before (L896-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L896-L901)

```diff
-       eq(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         if (this.du.length != zz.du.length || this.mainIndex != zz.mainIndex) return !1;
-         for (let sz = 0; sz < this.du.length; sz++)
-           if (!this.du[sz].eq(zz.du[sz], tz)) return !1;
-         return !0
+       static define(vv, zv) {
+         let Pv = "string" == typeof vv ? vv : "?";
+         if (vv instanceof ev && (zv = vv), null === zv || void 0 === zv ? void 0 : zv.base) throw new Error("Can not derive from a modified tag");
+         let hv = new ev(Pv, [], null, []);
+         if (hv.set.push(hv), zv)
+           for (let Sv of zv.set) hv.set.push(Sv);
+         return hv
```

#### 125. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L903-L904` → after: `L14930-L14932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14930-L14932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14930-L14932) · [Before (L903-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L903-L904)

```diff
-       get main() {
-         return this.du[this.mainIndex]
+       static defineModifier(vv) {
+         let zv = new pv(vv);
+         return vv => vv.modified.indexOf(zv) > -1 ? vv : pv.get(vv.base || vv, vv.modified.concat(zv).sort(((vv, zv) => vv.id - zv.id)))
```

#### 126. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L906-L907` → after: `L14934-L14938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14934-L14938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14934-L14938) · [Before (L906-L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L906-L907)

```diff
-       asSingle() {
-         return 1 == this.du.length ? this : new iz([this.main], 0)
+     }
+     let gv = 0;
+     class pv {
+       constructor(vv) {
+         this.name = vv, this.instances = [], this.id = gv++
```

#### 127. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L909-L911` → after: `L14940-L14961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14940-L14961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14940-L14961) · [Before (L909-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L909-L911)

```diff
-       addRange(zz) {
-         let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         return iz.create([zz].concat(this.du), tz ? 0 : this.mainIndex + 1)
+       static get(vv, zv) {
+         if (!zv.length) return vv;
+         let Pv = zv[0].instances.find((Pv => {
+           return Pv.base == vv && (hv = zv, Sv = Pv.modified, hv.length == Sv.length && hv.every(((vv, zv) => vv == Sv[zv])));
+           var hv, Sv
+         }));
+         if (Pv) return Pv;
+         let hv = [],
+           Sv = new ev(vv.name, hv, vv, zv);
+         for (let ev of zv) ev.instances.push(Sv);
+         let gv = function(vv) {
+           let zv = [
+             []
+           ];
+           for (let Pv = 0; Pv < vv.length; Pv++)
+             for (let hv = 0, Sv = zv.length; hv < Sv; hv++) zv.push(zv[hv].concat(vv[Pv]));
+ ... (6 more added lines; see GitHub link above)
```

#### 128. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L913-L916` → after: `L14963-L14996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14963-L14996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14963-L14996) · [Before (L913-L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L913-L916)

```diff
-       replaceRange(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
-           sz = this.du.slice();
-         return sz[tz] = zz, iz.create(sz, this.mainIndex)
+     }
+ 
+     function dv(vv) {
+       let zv = Object.create(null);
+       for (let Pv in vv) {
+         let hv = vv[Pv];
+         Array.isArray(hv) || (hv = [hv]);
+         for (let vv of Pv.split(" "))
+           if (vv) {
+             let Pv = [],
+               Sv = 2,
+               ev = vv;
+             for (let zv = 0;;) {
+               if ("..." == ev && zv > 0 && zv + 3 == vv.length) {
+                 Sv = 1;
+                 break
+ ... (18 more added lines; see GitHub link above)
```

#### 129. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L918-L921` → after: `L14998-L15006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14998-L15006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L14998-L15006) · [Before (L918-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L918-L921)

```diff
-       toJSON() {
-         return {
-           du: this.du.map((zz => zz.toJSON())),
-           main: this.mainIndex
+       return Nv.add(zv)
+     }
+     const Nv = new hv.l({
+       combine(vv, zv) {
+         let Pv, hv, Sv;
+         for (; vv || zv;) {
+           if (!vv || zv && vv.depth >= zv.depth ? (Sv = zv, zv = zv.next) : (Sv = vv, vv = vv.next), Pv && Pv.mode == Sv.mode && !Sv.context && !Pv.context) continue;
+           let ev = new lv(Sv.tags, Sv.mode, Sv.context);
+           Pv ? Pv.next = ev : hv = ev, Pv = ev
```

#### 130. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L924-L930` → after: `L15010-L15013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15010-L15013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15010-L15013) · [Before (L924-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L924-L930)

```diff
-       static fromJSON(zz) {
-         if (!zz || !Array.isArray(zz.du) || "number" != typeof zz.main || zz.main >= zz.du.length) throw new RangeError("Invalid JSON representation for EditorSelection");
-         return new iz(zz.du.map((zz => kz.fromJSON(zz))), zz.main)
-       }
-       static single(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz;
-         return new iz([iz.range(zz, tz)], 0)
+     });
+     class lv {
+       constructor(vv, zv, Pv, hv) {
+         this.tags = vv, this.mode = zv, this.context = Pv, this.next = hv
```

#### 131. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L932-L940` → after: `L15015-L15016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15015-L15016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15015-L15016) · [Before (L932-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L932-L940)

```diff
-       static create(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         if (0 == zz.length) throw new RangeError("A selection needs at least one range");
-         for (let sz = 0, Fz = 0; Fz < zz.length; Fz++) {
-           let Wz = zz[Fz];
-           if (Wz.empty ? Wz.from <= sz : Wz.from < sz) return iz.normalized(zz.slice(), tz);
-           sz = Wz.to
-         }
-         return new iz(zz, tz)
+       get opaque() {
+         return 0 == this.mode
```

#### 132. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L942-L946` → after: `L15018-L15019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15018-L15019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15018-L15019) · [Before (L942-L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L942-L946)

```diff
-       static cursor(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           sz = arguments.length > 2 ? arguments[2] : void 0,
-           Fz = arguments.length > 3 ? arguments[3] : void 0;
-         return kz.create(zz, zz, (0 == tz ? 0 : tz < 0 ? 8 : 16) | (null == sz ? 7 : Math.min(6, sz)) | (null !== Fz && void 0 !== Fz ? Fz : 16777215) << 6)
+       get inherit() {
+         return 1 == this.mode
```

#### 133. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L948-L950` → after: `L15021-L15022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15021-L15022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15021-L15022) · [Before (L948-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L948-L950)

```diff
-       static range(zz, tz, sz, Fz, Wz) {
-         let Xz = (null !== sz && void 0 !== sz ? sz : 16777215) << 6 | (null == Fz ? 7 : Math.min(6, Fz));
-         return Wz || zz == tz || (Wz = tz < zz ? 1 : -1), tz < zz ? kz.create(tz, zz, 48 | Xz) : kz.create(zz, tz, (Wz ? Wz < 0 ? 8 : 16 : 0) | Xz)
+       sort(vv) {
+         return !vv || vv.depth < this.depth ? (this.next = vv, this) : (vv.next = this.sort(vv.next), vv)
```

#### 134. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L952-L965` → after: `L15024-L15025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15024-L15025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15024-L15025) · [Before (L952-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L952-L965)

```diff
-       static normalized(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           sz = zz[tz];
-         zz.sort(((zz, tz) => zz.from - tz.from)), tz = zz.indexOf(sz);
-         for (let Fz = 1; Fz < zz.length; Fz++) {
-           let sz = zz[Fz],
-             Wz = zz[Fz - 1];
-           if (sz.empty ? sz.from <= Wz.to : sz.from < Wz.to) {
-             let Xz = Wz.from,
-               Oz = Math.max(sz.to, Wz.to);
-             Fz <= tz && tz--, zz.splice(--Fz, 2, sz.anchor > sz.head ? iz.range(Oz, Xz) : iz.range(Xz, Oz))
-           }
-         }
-         return new iz(zz, tz)
+       get depth() {
+         return this.context ? this.context.length : 0
```

#### 135. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L970-L997` → after: `L15030-L15052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15030-L15052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15030-L15052) · [Before (L970-L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L970-L997)

```diff
-       for (let sz of zz.du)
-         if (sz.to > tz) throw new RangeError("Selection points outside of document")
-     }
-     let lz = 0;
-     class nz {
-       constructor(zz, tz, sz, Fz, Wz) {
-         this.combine = zz, this.compareInput = tz, this.compare = sz, this.isStatic = Fz, this.id = lz++, this.default = zz([]), this.extensions = "function" == typeof Wz ? Wz(this) : Wz
-       }
-       get reader() {
-         return this
-       }
-       static define() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-         return new nz(zz.combine || (zz => zz), zz.compareInput || ((zz, tz) => zz === tz), zz.compare || (zz.combine ? (zz, tz) => zz === tz : az), !!zz.static, zz.enables)
-       }
-       of(zz) {
- ... (12 more removed lines; see GitHub link above)
+       let Pv = Object.create(null);
+       for (let ev of vv)
+         if (Array.isArray(ev.tag))
+           for (let vv of ev.tag) Pv[vv.id] = ev.class;
+         else Pv[ev.tag.id] = ev.class;
+       let {
+         scope: hv,
+         all: Sv = null
+       } = zv || {};
+       return {
+         style: vv => {
+           let zv = Sv;
+           for (let hv of vv)
+             for (let vv of hv.set) {
+               let hv = Pv[vv.id];
+               if (hv) {
+ ... (7 more added lines; see GitHub link above)
```

#### 136. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1001-L1002` → after: `L15056-L15060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15056-L15060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15056-L15060) · [Before (L1001-L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1001-L1002)

```diff
-     function az(zz, tz) {
-       return zz == tz || zz.length == tz.length && zz.every(((zz, sz) => zz === tz[sz]))
+     function Wv(vv, zv, Pv) {
+       let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+         Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : vv.length,
+         ev = new wv(hv, Array.isArray(zv) ? zv : [zv], Pv);
+       ev.highlightRange(vv.cursor(), hv, Sv, "", ev.highlighters), ev.flush(Sv)
```

#### 137. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1005-L1006` → after: `L15064-L15065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15064-L15065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15064-L15065) · [Before (L1005-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1005-L1006)

```diff
-       constructor(zz, tz, sz, Fz) {
-         this.dependencies = zz, this.facet = tz, this.type = sz, this.value = Fz, this.id = lz++
+       constructor(vv, zv, Pv) {
+         this.at = vv, this.highlighters = zv, this.span = Pv, this.class = ""
```

#### 138. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1008-L1024` → after: `L15067-L15091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15067-L15091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15067-L15091) · [Before (L1008-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1008-L1024)

```diff
-       dynamicSlot(zz) {
-         var tz;
-         let sz = this.value,
-           Fz = this.facet.compareInput,
-           Wz = this.id,
-           Xz = zz[Wz] >> 1,
-           Oz = 2 == this.type,
-           oz = !1,
-           vz = !1,
-           Uz = [];
-         for (let Kz of this.dependencies) "doc" == Kz ? oz = !0 : "selection" == Kz ? vz = !0 : 0 == (1 & (null !== (tz = zz[Kz.id]) && void 0 !== tz ? tz : 1)) && Uz.push(zz[Kz.id]);
-         return {
-           create: zz => (zz.values[Xz] = sz(zz), 1),
-           update(zz, tz) {
-             if (oz && tz.docChanged || vz && (tz.docChanged || tz.selection) || Vz(zz, Uz)) {
-               let tz = sz(zz);
- ... (1 more removed lines; see GitHub link above)
+       startSpan(vv, zv) {
+         zv != this.class && (this.flush(vv), vv > this.at && (this.at = vv), this.class = zv)
+       }
+       flush(vv) {
+         vv > this.at && this.class && this.span(this.at, vv, this.class)
+       }
+       highlightRange(vv, zv, Pv, Sv, ev) {
+         let {
+           type: gv,
+           from: pv,
+           to: dv
+         } = vv;
+         if (pv >= Pv || dv <= zv) return;
+         gv.isTop && (ev = this.highlighters.filter((vv => !vv.scope || vv.scope(gv))));
+         let Tv = Sv,
+           Wv = function(vv) {
+ ... (9 more added lines; see GitHub link above)
```

#### 139. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1026-L1034` → after: `L15093-L15109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15093-L15109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15093-L15109) · [Before (L1026-L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1026-L1034)

```diff
-             return 0
-           },
-           reconfigure: (zz, tz) => {
-             let oz, vz = tz.config.address[Wz];
-             if (null != vz) {
-               let Wz = Kt(tz, vz);
-               if (this.dependencies.every((sz => sz instanceof nz ? tz.facet(sz) === zz.facet(sz) : !(sz instanceof fz) || tz.field(sz, !1) == zz.field(sz, !1))) || (Oz ? Sz(oz = sz(zz), Wz, Fz) : Fz(oz = sz(zz), Wz))) return zz.values[Xz] = Wz, 0
-             } else oz = sz(zz);
-             return zz.values[Xz] = oz, 1
+             return Pv
+           }(ev, Wv.tags);
+         if (wv && (Tv && (Tv += " "), Tv += wv, 1 == Wv.mode && (Sv += (Sv ? " " : "") + wv)), this.startSpan(Math.max(zv, pv), Tv), Wv.opaque) return;
+         let av = vv.tree && vv.tree.prop(hv.l.mounted);
+         if (av && av.overlay) {
+           let hv = vv.node.enter(av.overlay[0].from + pv, 1),
+             gv = this.highlighters.filter((vv => !vv.scope || vv.scope(av.tree.type))),
+             Nv = vv.firstChild();
+           for (let lv = 0, Wv = pv;; lv++) {
+             let wv = lv < av.overlay.length ? av.overlay[lv] : null,
+               sv = wv ? wv.from + pv : dv,
+               Cv = Math.max(zv, Wv),
+               iv = Math.min(Pv, sv);
+             if (Cv < iv && Nv)
+               for (; vv.from < iv && (this.highlightRange(vv, Cv, iv, Sv, ev), this.startSpan(Math.min(iv, vv.to), Tv), !(vv.to >= sv) && vv.nextSibling()););
+             if (!wv || sv > Pv) break;
+ ... (1 more added lines; see GitHub link above)
```

#### 140. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1039-L1044` → after: `L15124-L15227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15124-L15227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15124-L15227) · [Before (L1039-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1039-L1044)

```diff
- 
-     function Sz(zz, tz, sz) {
-       if (zz.length != tz.length) return !1;
-       for (let Fz = 0; Fz < zz.length; Fz++)
-         if (!sz(zz[Fz], tz[Fz])) return !1;
-       return !0
+     const av = ev.define,
+       sv = av(),
+       Cv = av(),
+       iv = av(Cv),
+       cv = av(Cv),
+       Gv = av(),
+       mv = av(Gv),
+       jv = av(Gv),
+       fv = av(),
+       Fv = av(fv),
+       Yv = av(),
+       nv = av(),
+       Ov = av(),
+       Dv = av(Ov),
+       Kv = av(),
+       Vv = {
+ ... (88 more added lines; see GitHub link above)
```

#### 141. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1048-L1050` → after: `L15341-L15349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15341-L15349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15341-L15349) · [Before (L1048-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1048-L1050)

```diff
-       let sz = !1;
-       for (let Fz of tz) 1 & Ut(zz, Fz) && (sz = !0);
-       return sz
+       return Pv => {
+         let {
+           state: hv,
+           dispatch: Sv
+         } = Pv;
+         if (hv.readOnly) return !1;
+         let ev = vv(zv, hv);
+         return !!ev && (Sv(hv.update(ev)), !0)
+       }
```

#### 142. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1052-L1059` → after: `L15351-L15353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15351-L15353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15351-L15353) · [Before (L1052-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1052-L1059)

```diff
- 
-     function Rz(zz, tz, sz) {
-       let Fz = sz.map((tz => zz[tz.id])),
-         Wz = sz.map((zz => zz.type)),
-         Xz = Fz.filter((zz => !(1 & zz))),
-         Oz = zz[tz.id] >> 1;
- 
-       function oz(zz) {
+     const Tv = lv(iv, 0),
+       Wv = lv(Cv, 0),
+       wv = lv(((vv, zv) => Cv(vv, zv, function(vv) {
```

#### 143. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1061-L1085` → after: `L15355-L15363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15355-L15363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15355-L15363) · [Before (L1061-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1061-L1085)

```diff
-         for (let tz = 0; tz < Fz.length; tz++) {
-           let Xz = Kt(zz, Fz[tz]);
-           if (2 == Wz[tz])
-             for (let zz of Xz) sz.push(zz);
-           else sz.push(Xz)
-         }
-         return tz.combine(sz)
-       }
-       return {
-         create(zz) {
-           for (let tz of Fz) Ut(zz, tz);
-           return zz.values[Oz] = oz(zz), 1
-         },
-         update(zz, sz) {
-           if (!Vz(zz, Xz)) return 0;
-           let Fz = oz(zz);
- ... (9 more removed lines; see GitHub link above)
+         for (let Pv of vv.selection.PC) {
+           let hv = vv.doc.lineAt(Pv.from),
+             Sv = Pv.to <= hv.to ? hv : vv.doc.lineAt(Pv.to);
+           Sv.from > hv.from && Sv.from == Pv.to && (Sv = Pv.to == hv.to + 1 ? hv : vv.doc.lineAt(Pv.to - 1));
+           let ev = zv.length - 1;
+           ev >= 0 && zv[ev].to > hv.from ? zv[ev].to = Sv.to : zv.push({
+             from: hv.from + /^\s*/.exec(hv.text)[0].length,
+             to: Sv.to
+           })
```

#### 144. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1087` → after: `L15365-L15370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15365-L15370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15365-L15370) · [Before (L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1087)

```diff
-       }
+         return zv
+       }(zv))), 0);
+ 
+     function av(vv, zv) {
+       let Pv = vv.languageDataAt("commentTokens", zv, 1);
+       return Pv.length ? Pv[0] : {}
```

#### 145. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1089-L1111` → after: `L15372-L15405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15372-L15405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15372-L15405) · [Before (L1089-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1089-L1111)

```diff
-     const pz = nz.define({
-       static: !0
-     });
-     class fz {
-       constructor(zz, tz, sz, Fz, Wz) {
-         this.id = zz, this.createF = tz, this.updateF = sz, this.compareF = Fz, this.spec = Wz, this.provides = void 0
-       }
-       static define(zz) {
-         let tz = new fz(lz++, zz.create, zz.update, zz.compare || ((zz, tz) => zz === tz), zz);
-         return zz.provide && (tz.provides = zz.provide(tz)), tz
-       }
-       create(zz) {
-         let tz = zz.facet(pz).find((zz => zz.field == this));
-         return ((null === tz || void 0 === tz ? void 0 : tz.create) || this.createF)(zz)
-       }
-       slot(zz) {
- ... (7 more removed lines; see GitHub link above)
+     const sv = 50;
+ 
+     function Cv(vv, zv) {
+       let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zv.selection.PC,
+         hv = Pv.map((vv => av(zv, vv.from).block));
+       if (!hv.every((vv => vv))) return null;
+       let Sv = Pv.map(((vv, Pv) => function(vv, zv, Pv, hv) {
+         let Sv, ev, {
+             open: gv,
+             close: pv
+           } = zv,
+           dv = vv.sliceDoc(Pv - sv, Pv),
+           Nv = vv.sliceDoc(hv, hv + sv),
+           lv = /\s*$/.exec(dv)[0].length,
+           Tv = /^\s*/.exec(Nv)[0].length,
+           Wv = dv.length - lv;
+ ... (18 more added lines; see GitHub link above)
```

#### 146. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1113-L1116` → after: `L15407-L15409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15407-L15409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15407-L15409) · [Before (L1113-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1113-L1116)

```diff
-           reconfigure: (zz, sz) => {
-             let Fz, Wz = zz.facet(pz),
-               Xz = sz.facet(pz);
-             return (Fz = Wz.find((zz => zz.field == this))) && Fz != Xz.find((zz => zz.field == this)) ? (zz.values[tz] = Fz.create(zz), 1) : null != sz.config.address[this.id] ? (zz.values[tz] = sz.field(this), 0) : (zz.values[tz] = this.create(zz), 1)
+           close: {
+             pos: hv - av - pv.length,
+             margin: /\s/.test(ev.charAt(Cv - 1)) ? 1 : 0
```

#### 147. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1120-L1128` → after: `L15442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15442) · [Before (L1120-L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1120-L1128)

```diff
-       init(zz) {
-         return [this, pz.of({
-           field: this,
-           create: zz
-         })]
-       }
-       get extension() {
-         return this
-       }
+       return null
```

#### 148. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1135-L1152` → after: `L15445-L15477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15445-L15477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15445-L15477) · [Before (L1135-L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1135-L1152)

```diff
-     function Ft(zz) {
-       return tz => new Xt(tz, zz)
-     }
-     const Wt = {
-       highest: Ft(0),
-       high: Ft(st),
-       default: Ft(tt),
-       low: Ft(zt),
-       lowest: Ft(Ez)
-     };
-     class Xt {
-       constructor(zz, tz) {
-         this.inner = zz, this.prec = tz
-       }
-     }
-     class Ot {
- ... (2 more removed lines; see GitHub link above)
+     function iv(vv, zv) {
+       let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zv.selection.PC,
+         hv = [],
+         Sv = -1;
+       vv: for (let {
+           from: ev,
+           to: gv
+         }
+         of Pv) {
+         let vv, Pv = hv.length,
+           pv = 1e9;
+         for (let dv = ev; dv <= gv;) {
+           let Pv = zv.doc.lineAt(dv);
+           if (void 0 == vv && (vv = av(zv, Pv.from).line, !vv)) continue vv;
+           if (Pv.from > Sv && (ev == gv || gv > Pv.from)) {
+             Sv = Pv.from;
+ ... (17 more added lines; see GitHub link above)
```

#### 149. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1154-L1158` → after: `L15479-L15496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15479-L15496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15479-L15496) · [Before (L1154-L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1154-L1158)

```diff
-       reconfigure(zz) {
-         return Ot.reconfigure.of({
-           compartment: this,
-           extension: zz
-         })
+       if (2 != vv && hv.some((vv => vv.comment < 0 && (!vv.empty || vv.single)))) {
+         let vv = [];
+         for (let {
+             line: zv,
+             token: Sv,
+             indent: ev,
+             empty: gv,
+             single: pv
+           }
+           of hv) !pv && gv || vv.push({
+           from: zv.from + ev,
+           insert: Sv + " "
+         });
+         let Pv = zv.changes(vv);
+         return {
+           changes: Pv,
+ ... (2 more added lines; see GitHub link above)
```

#### 150. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1160-L1161` → after: `L15498-L15515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15498-L15515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15498-L15515) · [Before (L1160-L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1160-L1161)

```diff
-       get(zz) {
-         return zz.config.compartments.get(this)
+       if (1 != vv && hv.some((vv => vv.comment >= 0))) {
+         let vv = [];
+         for (let {
+             line: zv,
+             comment: Pv,
+             token: Sv
+           }
+           of hv)
+           if (Pv >= 0) {
+             let hv = zv.from + Pv,
+               ev = hv + Sv.length;
+             " " == zv.text[ev - zv.from] && ev++, vv.push({
+               from: hv,
+               to: ev
+             })
+           } return {
+ ... (2 more added lines; see GitHub link above)
```

#### 151. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1164-L1166` → after: `L15519-L15568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15519-L15568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15519-L15568) · [Before (L1164-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1164-L1166)

```diff
-     class ot {
-       constructor(zz, tz) {
-         this.compartment = zz, this.inner = tz
+     const cv = gv.c.define(),
+       Gv = gv.c.define(),
+       mv = gv.q.define(),
+       jv = gv.q.define({
+         combine: vv => (0, gv.O)(vv, {
+           minDepth: 100,
+           newGroupDelay: 500,
+           joinToEvent: (vv, zv) => zv
+         }, {
+           minDepth: Math.max,
+           newGroupDelay: Math.min,
+           joinToEvent: (vv, zv) => (Pv, hv) => vv(Pv, hv) || zv(Pv, hv)
+         })
+       }),
+       fv = gv.E.define({
+         create: () => Av.empty,
+ ... (34 more added lines; see GitHub link above)
```

#### 152. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1170-L1171` → after: `L15576-L15577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15576-L15577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15576-L15577) · [Before (L1170-L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1170-L1171)

```diff
-       constructor(zz, tz, sz, Fz, Wz, Xz) {
-         for (this.base = zz, this.compartments = tz, this.dynamicSlots = sz, this.address = Fz, this.staticValues = Wz, this.facets = Xz, this.statusTemplate = []; this.statusTemplate.length < sz.length;) this.statusTemplate.push(0)
+       constructor(vv, zv, Pv, hv, Sv) {
+         this.changes = vv, this.effects = zv, this.mapped = Pv, this.startSelection = hv, this.selectionsAfter = Sv
```

#### 153. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1173-L1175` → after: `L15579-L15580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15579-L15580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15579-L15580) · [Before (L1173-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1173-L1175)

```diff
-       staticFacet(zz) {
-         let tz = this.address[zz.id];
-         return null == tz ? zz.default : this.staticValues[tz >> 1]
+       setSelAfter(vv) {
+         return new Kv(this.changes, this.effects, this.mapped, this.startSelection, vv)
```

#### 154. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1177-L1233` → after: `L15582-L15588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15582-L15588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15582-L15588) · [Before (L1177-L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1177-L1233)

```diff
-       static resolve(zz, tz, sz) {
-         let Fz = [],
-           Wz = Object.create(null),
-           Xz = new Map;
-         for (let uz of function(zz, tz, sz) {
-             let Fz = [
-                 [],
-                 [],
-                 [],
-                 [],
-                 []
-               ],
-               Wz = new Map;
- 
-             function Xz(zz, Oz) {
-               let oz = Wz.get(zz);
- ... (41 more removed lines; see GitHub link above)
+       toJSON() {
+         var vv, zv, Pv;
+         return {
+           changes: null === (vv = this.changes) || void 0 === vv ? void 0 : vv.toJSON(),
+           mapped: null === (zv = this.mapped) || void 0 === zv ? void 0 : zv.toJSON(),
+           startSelection: null === (Pv = this.startSelection) || void 0 === Pv ? void 0 : Pv.toJSON(),
+           selectionsAfter: this.selectionsAfter.map((vv => vv.toJSON()))
```

#### 155. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1235-L1236` → after: `L15590-L15603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15590-L15603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15590-L15603) · [Before (L1235-L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1235-L1236)

```diff
-         let Kz = vz.map((zz => zz(Oz)));
-         return new vt(zz, Xz, Kz, Oz, oz, Wz)
+       }
+       static fromJSON(vv) {
+         return new Kv(vv.changes && gv.ChangeSet.fromJSON(vv.changes), [], vv.mapped && gv.e.fromJSON(vv.mapped), vv.startSelection && gv.j.fromJSON(vv.startSelection), vv.selectionsAfter.map(gv.j.fromJSON))
+       }
+       static fromTransaction(vv, zv) {
+         let Pv = Rv;
+         for (let hv of vv.startState.facet(mv)) {
+           let zv = hv(vv);
+           zv.length && (Pv = Pv.concat(zv))
+         }
+         return !Pv.length && vv.changes.empty ? null : new Kv(vv.changes.invert(vv.startState.doc), Pv, void 0, zv || vv.startState.selection, Rv)
+       }
+       static selection(vv) {
+         return new Kv(void 0, Rv, void 0, void 0, vv)
```

#### 156. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1240-L1248` → after: `L15607-L15610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15607-L15610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15607-L15610) · [Before (L1240-L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1240-L1248)

```diff
-     function Ut(zz, tz) {
-       if (1 & tz) return 2;
-       let sz = tz >> 1,
-         Fz = zz.status[sz];
-       if (4 == Fz) throw new Error("Cyclic dependency between fields and/or facets");
-       if (2 & Fz) return Fz;
-       zz.status[sz] = 4;
-       let Wz = zz.computeSlot(zz, zz.config.dynamicSlots[sz]);
-       return zz.status[sz] = 2 | Wz
+     function Vv(vv, zv, Pv, hv) {
+       let Sv = zv + 1 > Pv + 20 ? zv - Pv - 1 : 0,
+         ev = vv.slice(Sv, zv);
+       return ev.push(hv), ev
```

#### 157. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1252` → after: `L15614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15614) · [Before (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1252)

```diff
-       return 1 & tz ? zz.config.staticValues[tz >> 1] : zz.values[tz >> 1]
+       return vv.length ? zv.length ? vv.concat(zv) : vv : zv
```

#### 158. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1254-L1274` → after: `L15616-L15623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15616-L15623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15616-L15623) · [Before (L1254-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1254-L1274)

```diff
-     const ut = nz.define(),
-       Nt = nz.define({
-         combine: zz => zz.some((zz => zz)),
-         static: !0
-       }),
-       bt = nz.define({
-         combine: zz => zz.length ? zz[0] : void 0,
-         static: !0
-       }),
-       wt = nz.define(),
-       Dt = nz.define(),
-       gt = nz.define(),
-       Ht = nz.define({
-         combine: zz => !!zz.length && zz[0]
-       });
-     class Bt {
- ... (5 more removed lines; see GitHub link above)
+     const Rv = [],
+       xv = 200;
+ 
+     function tv(vv, zv) {
+       if (vv.length) {
+         let Pv = vv[vv.length - 1],
+           hv = Pv.selectionsAfter.slice(Math.max(0, Pv.selectionsAfter.length - xv));
+         return hv.length && hv[hv.length - 1].eq(zv) ? vv : (hv.push(zv), Vv(vv, vv.length - 1, 1e9, Pv.setSelAfter(hv)))
```

#### 159. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1277-L1280` → after: `L15627-L15631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15627-L15631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15627-L15631) · [Before (L1277-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1277-L1280)

```diff
-     class Pt {
-       of(zz) {
-         return new Bt(this, zz)
-       }
+ 
+     function qv(vv) {
+       let zv = vv[vv.length - 1],
+         Pv = vv.slice();
+       return Pv[vv.length - 1] = zv.setSelAfter(zv.selectionsAfter.slice(0, zv.selectionsAfter.length - 1)), Pv
```

#### 160. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1282-L1287` → after: `L15633-L15644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15633-L15644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15633-L15644) · [Before (L1282-L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1282-L1287)

```diff
-     class rt {
-       constructor(zz) {
-         this.map = zz
-       }
-       of(zz) {
-         return new Yt(this, zz)
+ 
+     function Iv(vv, zv) {
+       if (!vv.length) return vv;
+       let Pv = vv.length,
+         hv = Rv;
+       for (; Pv;) {
+         let Sv = Qv(vv[Pv - 1], zv, hv);
+         if (Sv.changes && !Sv.changes.empty || Sv.effects.length) {
+           let zv = vv.slice(0, Pv);
+           return zv[Pv - 1] = Sv, zv
+         }
+         zv = Sv.mapped, Pv--, hv = Sv.selectionsAfter
```

#### 161. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1292` → after: `L15660-L15662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15660-L15662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15660-L15662) · [Before (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1292)

```diff
-         this.type = zz, this.value = tz
+         let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+           hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
+         this.done = vv, this.undone = zv, this.prevTime = Pv, this.prevUserEvent = hv
```

#### 162. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1294-L1296` → after: `L15664-L15665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15664-L15665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15664-L15665) · [Before (L1294-L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1294-L1296)

```diff
-       map(zz) {
-         let tz = this.type.map(this.value, zz);
-         return void 0 === tz ? void 0 : tz == this.value ? this : new Yt(this.type, tz)
+       isolate() {
+         return this.prevTime ? new Av(this.done, this.undone) : this
```

#### 163. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1298-L1299` → after: `L15667-L15680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15667-L15680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15667-L15680) · [Before (L1298-L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1298-L1299)

```diff
-       is(zz) {
-         return this.type == zz
+       addChanges(vv, zv, Pv, hv, Sv) {
+         let ev = this.done,
+           pv = ev[ev.length - 1];
+         return ev = pv && pv.changes && !pv.changes.empty && vv.changes && (!Pv || Zv.test(Pv)) && (!pv.selectionsAfter.length && zv - this.prevTime < hv.newGroupDelay && hv.joinToEvent(Sv, function(vv, zv) {
+           let Pv = [],
+             hv = !1;
+           return vv.iterChangedRanges(((vv, zv) => Pv.push(vv, zv))), zv.iterChangedRanges(((vv, zv, Sv, ev) => {
+             for (let gv = 0; gv < Pv.length;) {
+               let vv = Pv[gv++],
+                 zv = Pv[gv++];
+               ev >= vv && Sv <= zv && (hv = !0)
+             }
+           })), hv
+         }(pv.changes, vv.changes)) || "input.type.compose" == Pv) ? Vv(ev, ev.length - 1, hv.minDepth, new Kv(vv.changes.compose(pv.changes), Uv(gv.B.mapEffects(vv.effects, pv.changes), pv.effects), pv.mapped, pv.startSelection, Rv)) : Vv(ev, ev.length, hv.minDepth, vv), new Av(e … [truncated]
```

#### 164. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1301-L1302` → after: `L15682-L15685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15682-L15685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15682-L15685) · [Before (L1301-L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1301-L1302)

```diff
-       static define() {
-         return new rt((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (zz => zz))
+       addSelection(vv, zv, Pv, hv) {
+         let Sv = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Rv;
+         return Sv.length > 0 && zv - this.prevTime < hv && Pv == this.prevUserEvent && Pv && /^select($|\.)/.test(Pv) && (ev = Sv[Sv.length - 1], gv = vv, ev.PC.length == gv.PC.length && 0 === ev.PC.filter(((vv, zv) => vv.empty != gv.PC[zv].empty)).length) ? this : new Av(tv(this … [truncated]
+         var ev, gv
```

#### 165. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1304-L1309` → after: `L15687-L15719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15687-L15719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15687-L15719) · [Before (L1304-L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1304-L1309)

```diff
-       static mapEffects(zz, tz) {
-         if (!zz.length) return zz;
-         let sz = [];
-         for (let Fz of zz) {
-           let zz = Fz.map(tz);
-           zz && sz.push(zz)
+       addMapping(vv) {
+         return new Av(Iv(this.done, vv), Iv(this.undone, vv), this.prevTime, this.prevUserEvent)
+       }
+       pop(vv, zv, Pv) {
+         let hv = 0 == vv ? this.done : this.undone;
+         if (0 == hv.length) return null;
+         let Sv = hv[hv.length - 1],
+           ev = Sv.selectionsAfter[0] || (Sv.startSelection ? Sv.startSelection.map(Sv.changes.invertedDesc, 1) : zv.selection);
+         if (Pv && Sv.selectionsAfter.length) return zv.update({
+           selection: Sv.selectionsAfter[Sv.selectionsAfter.length - 1],
+           annotations: cv.of({
+             side: vv,
+             rest: qv(hv),
+             selection: ev
+           }),
+           userEvent: 0 == vv ? "select.undo" : "select.redo",
+ ... (17 more added lines; see GitHub link above)
```

#### 166. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1311` → after: `L15721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15721) · [Before (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1311)

```diff
-         return sz
+         return null
```

#### 167. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1314-L1343` → after: `L15724-L15800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15724-L15800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15724-L15800) · [Before (L1314-L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1314-L1343)

```diff
-     Yt.reconfigure = Yt.define(), Yt.appendConfig = Yt.define();
-     class xt {
-       constructor(zz, tz, sz, Fz, Wz, Xz) {
-         this.startState = zz, this.changes = tz, this.selection = sz, this.effects = Fz, this.annotations = Wz, this.scrollIntoView = Xz, this._doc = null, this._state = null, sz && Lz(sz, tz.newLength), Wz.some((zz => zz.type == xt.time)) || (this.annotations = Wz.concat(xt.time … [truncated]
-       }
-       static create(zz, tz, sz, Fz, Wz, Xz) {
-         return new xt(zz, tz, sz, Fz, Wz, Xz)
-       }
-       get newDoc() {
-         return this._doc || (this._doc = this.changes.apply(this.startState.doc))
-       }
-       get newSelection() {
-         return this.selection || this.startState.selection.map(this.changes)
-       }
-       get state() {
-         return this._state || this.startState.applyTransaction(this), this._state
- ... (14 more removed lines; see GitHub link above)
+     Av.empty = new Av(Rv, Rv);
+     const Lv = [{
+       key: "Mod-z",
+       run: Yv,
+       preventDefault: !0
+     }, {
+       key: "Mod-y",
+       mac: "Mod-Shift-z",
+       run: nv,
+       preventDefault: !0
+     }, {
+       linux: "Ctrl-Shift-z",
+       run: nv,
+       preventDefault: !0
+     }, {
+       key: "Mod-u",
+ ... (61 more added lines; see GitHub link above)
```

#### 168. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1348-L1355` → after: `L15806-L15830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15806-L15830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15806-L15830) · [Before (L1348-L1355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1348-L1355)

```diff
-       let sz = [];
-       for (let Fz = 0, Wz = 0;;) {
-         let Xz, Oz;
-         if (Fz < zz.length && (Wz == tz.length || tz[Wz] >= zz[Fz])) Xz = zz[Fz++], Oz = zz[Fz++];
-         else {
-           if (!(Wz < tz.length)) return sz;
-           Xz = tz[Wz++], Oz = tz[Wz++]
-         }!sz.length || sz[sz.length - 1] < Xz ? sz.push(Xz, Oz) : sz[sz.length - 1] < Oz && (sz[sz.length - 1] = Oz)
+       return yv(vv, (Pv => {
+         if (!Pv.empty) return Bv(Pv, zv);
+         let hv = vv.moveVertically(Pv, zv);
+         return hv.head != Pv.head ? hv : vv.moveToLineBoundary(Pv, zv)
+       }))
+     }
+     const vz = vv => uv(vv, !1),
+       zz = vv => uv(vv, !0);
+ 
+     function Pz(vv) {
+       let zv, Pv = vv.scrollDOM.clientHeight < vv.scrollDOM.scrollHeight - 2,
+         hv = 0,
+         Sv = 0;
+       if (Pv) {
+         for (let zv of vv.state.facet(pv.g.scrollMargins)) {
+           let Pv = zv(vv);
+ ... (9 more added lines; see GitHub link above)
```

#### 169. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1359-L1367` → after: `L15834-L15849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15834-L15849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15834-L15849) · [Before (L1359-L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1359-L1367)

```diff
-     function Jt(zz, tz, sz) {
-       var Fz;
-       let Wz, Xz, Oz;
-       return sz ? (Wz = tz.changes, Xz = jz.empty(tz.changes.length), Oz = zz.changes.compose(tz.changes)) : (Wz = tz.changes.map(zz.changes), Xz = zz.changes.mapDesc(tz.changes, !0), Oz = zz.changes.compose(Wz)), {
-         changes: Oz,
-         selection: tz.selection ? tz.selection.map(Xz) : null === (Fz = zz.selection) || void 0 === Fz ? void 0 : Fz.map(Wz),
-         effects: Yt.mapEffects(zz.effects, Wz).concat(Yt.mapEffects(tz.effects, Xz)),
-         annotations: zz.annotations.length ? zz.annotations.concat(tz.annotations) : tz.annotations,
-         scrollIntoView: zz.scrollIntoView || tz.scrollIntoView
+     function hz(vv, zv) {
+       let Pv, hv = Pz(vv),
+         {
+           state: Sv
+         } = vv,
+         ev = Hv(Sv.selection, (Pv => Pv.empty ? vv.moveVertically(Pv, zv, hv.height) : Bv(Pv, zv)));
+       if (ev.eq(Sv.selection)) return !1;
+       if (hv.selfScroll) {
+         let zv = vv.coordsAtPos(Sv.selection.main.head),
+           gv = vv.scrollDOM.getBoundingClientRect(),
+           dv = gv.top + hv.marginTop,
+           Nv = gv.bottom - hv.marginBottom;
+         zv && zv.top > dv && zv.bottom < Nv && (Pv = pv.g.scrollIntoView(ev.main.head, {
+           y: "start",
+           yMargin: zv.top - dv
+         }))
```

#### 170. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1372-L1379` → after: `L15859-L15863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15859-L15863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15859-L15863) · [Before (L1372-L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1372-L1379)

```diff
-       let Fz = tz.selection,
-         Wz = Zt(tz.annotations);
-       return tz.userEvent && (Wz = Wz.concat(xt.userEvent.of(tz.userEvent))), {
-         changes: tz.changes instanceof jz ? tz.changes : jz.of(tz.changes || [], sz, zz.facet(bt)),
-         selection: Fz && (Fz instanceof iz ? Fz : iz.single(Fz.anchor, Fz.head)),
-         effects: Zt(tz.effects),
-         annotations: Wz,
-         scrollIntoView: !!tz.scrollIntoView
+       let hv = vv.lineBlockAt(zv.head),
+         Sv = vv.moveToLineBoundary(zv, Pv);
+       if (Sv.head == zv.head && Sv.head != (Pv ? hv.to : hv.from) && (Sv = vv.moveToLineBoundary(zv, Pv, !1)), !Pv && Sv.head == hv.from && hv.length) {
+         let Pv = /^\s*/.exec(vv.state.sliceDoc(hv.from, Math.min(hv.from + 100, hv.to)))[0].length;
+         Pv && zv.head != hv.from + Pv && (Sv = gv.j.cursor(hv.from + Pv))
```

#### 171. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1384-L1402` → after: `L15869-L15872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15869-L15872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15869-L15872) · [Before (L1384-L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1384-L1402)

```diff
-       let Fz = It(zz, tz.length ? tz[0] : {}, zz.doc.length);
-       tz.length && !1 === tz[0].filter && (sz = !1);
-       for (let Xz = 1; Xz < tz.length; Xz++) {
-         !1 === tz[Xz].filter && (sz = !1);
-         let Wz = !!tz[Xz].sequential;
-         Fz = Jt(Fz, It(zz, tz[Xz], Wz ? Fz.changes.newLength : zz.doc.length), Wz)
-       }
-       let Wz = xt.create(zz, Fz.changes, Fz.selection, Fz.effects, Fz.annotations, Fz.scrollIntoView);
-       return function(zz) {
-         let tz = zz.startState,
-           sz = tz.facet(gt),
-           Fz = zz;
-         for (let Wz = sz.length - 1; Wz >= 0; Wz--) {
-           let Xz = sz[Wz](zz);
-           Xz && Object.keys(Xz).length && (Fz = Jt(Fz, It(tz, Xz, zz.changes.newLength), !0))
-         }
- ... (3 more removed lines; see GitHub link above)
+       let hv = !1,
+         Sv = Hv(vv.selection, (zv => {
+           let Sv = (0, dv.eb)(vv, zv.head, -1) || (0, dv.eb)(vv, zv.head, 1) || zv.head > 0 && (0, dv.eb)(vv, zv.head - 1, 1) || zv.head < vv.doc.length && (0, dv.eb)(vv, zv.head + 1, -1);
+           if (!Sv || !Sv.end) return zv;
```

#### 172. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1404-L1427` → after: `L15874-L15877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15874-L15877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15874-L15877) · [Before (L1404-L1427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1404-L1427)

```diff
-         for (let Wz of tz.facet(wt)) {
-           let tz = Wz(zz);
-           if (!1 === tz) {
-             sz = !1;
-             break
-           }
-           Array.isArray(tz) && (sz = !0 === sz ? tz : mt(sz, tz))
-         }
-         if (!0 !== sz) {
-           let Fz, Wz;
-           if (!1 === sz) Wz = zz.changes.invertedDesc, Fz = jz.empty(tz.doc.length);
-           else {
-             let tz = zz.changes.filter(sz);
-             Fz = tz.changes, Wz = tz.filtered.mapDesc(tz.changes).invertedDesc
-           }
-           zz = xt.create(tz, Fz, zz.selection && zz.selection.map(Wz), Yt.mapEffects(zz.effects, Wz), zz.annotations, zz.scrollIntoView)
- ... (8 more removed lines; see GitHub link above)
+           let ev = Sv.start.from == zv.head ? Sv.end.to : Sv.end.from;
+           return Pv ? gv.j.range(zv.anchor, ev) : gv.j.cursor(ev)
+         }));
+       return !!hv && (zv(Mv(vv, Sv)), !0)
```

#### 173. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1432-L1433` → after: `L15880-L15885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15880-L15885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15880-L15885) · [Before (L1432-L1433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1432-L1433)

```diff
-     function Zt(zz) {
-       return null == zz ? et : Array.isArray(zz) ? zz : [zz]
+     function dz(vv, zv) {
+       let Pv = Hv(vv.state.selection, (vv => {
+         let Pv = zv(vv);
+         return gv.j.range(vv.anchor, Pv.head, Pv.goalColumn, Pv.bidiLevel || void 0, Pv.assoc)
+       }));
+       return !Pv.eq(vv.state.selection) && (vv.dispatch(Mv(vv.state, Pv)), !0)
```

#### 174. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1444-L1451` → after: `L15888-L15959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15888-L15959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15888-L15959) · [Before (L1444-L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1444-L1451)

```diff
-     function jt(zz) {
-       return tz => {
-         if (!/\S/.test(tz)) return Gt.Space;
-         if (function(zz) {
-             if (ct) return ct.test(zz);
-             for (let tz = 0; tz < zz.length; tz++) {
-               let sz = zz[tz];
-               if (/\w/.test(sz) || sz > "\x80" && (sz.toUpperCase() != sz.toLowerCase() || Tt.test(sz))) return !0
+     function Nz(vv, zv) {
+       return dz(vv, (Pv => vv.moveByChar(Pv, zv)))
+     }
+     const lz = vv => Nz(vv, !Ev(vv)),
+       Tz = vv => Nz(vv, Ev(vv));
+ 
+     function Wz(vv, zv) {
+       return dz(vv, (Pv => vv.moveByGroup(Pv, zv)))
+     }
+ 
+     function wz(vv, zv) {
+       return dz(vv, (Pv => vv.moveVertically(Pv, zv)))
+     }
+     const az = vv => wz(vv, !1),
+       sz = vv => wz(vv, !0);
+ 
+ ... (56 more added lines; see GitHub link above)
```

#### 175. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1453-L1457` → after: `L15961-L15963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15961-L15963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15961-L15963) · [Before (L1453-L1457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1453-L1457)

```diff
-             return !1
-           }(tz)) return Gt.Word;
-         for (let sz = 0; sz < zz.length; sz++)
-           if (tz.indexOf(zz[sz]) > -1) return Gt.Word;
-         return Gt.Other
+             if (ev.head == Pv.head) break;
+             Pv = ev
+           }
```

#### 176. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1460-L1480` → after: `L15967-L15977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15967-L15977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15967-L15977) · [Before (L1460-L1480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1460-L1480)

```diff
-     class At {
-       constructor(zz, tz, sz, Fz, Wz, Xz) {
-         this.config = zz, this.doc = tz, this.selection = sz, this.values = Fz, this.status = zz.statusTemplate.slice(), this.computeSlot = Wz, Xz && (Xz._state = this);
-         for (let Oz = 0; Oz < this.config.dynamicSlots.length; Oz++) Ut(this, Oz << 1);
-         this.computeSlot = null
-       }
-       field(zz) {
-         let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
-           sz = this.config.address[zz.id];
-         if (null != sz) return Ut(this, sz), Kt(this, sz);
-         if (tz) throw new RangeError("Field is not present in this state")
-       }
-       update() {
-         for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
-         return Ct(this, tz, !0)
-       }
- ... (5 more removed lines; see GitHub link above)
+ 
+     function Yz(vv, zv) {
+       if (vv.state.readOnly) return !1;
+       let Pv = "delete.selection",
+         {
+           state: hv
+         } = vv,
+         Sv = hv.changeByRange((hv => {
+           let {
+             from: Sv,
+             to: ev
```

#### 177. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1482-L1544` → after: `L15979-L15990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R15979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L15979-L15990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L15979-L15990) · [Before (L1482-L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1482-L1544)

```diff
-         for (let Oz of zz.effects) Oz.is(Ot.reconfigure) ? (sz && (Wz = new Map, sz.compartments.forEach(((zz, tz) => Wz.set(tz, zz))), sz = null), Wz.set(Oz.value.compartment, Oz.value.extension)) : Oz.is(Yt.reconfigure) ? (sz = null, Fz = Oz.value) : Oz.is(Yt.appendConfig) && ( … [truncated]
-         if (sz) tz = zz.startState.values.slice();
-         else {
-           sz = vt.resolve(Fz, Wz, this), tz = new At(sz, this.doc, this.selection, sz.dynamicSlots.map((() => null)), ((zz, tz) => tz.reconfigure(zz, this)), null).values
-         }
-         let Xz = zz.startState.facet(Nt) ? zz.newSelection : zz.newSelection.asSingle();
-         new At(sz, zz.newDoc, Xz, tz, ((tz, sz) => sz.update(tz, zz)), zz)
-       }
-       replaceSelection(zz) {
-         return "string" == typeof zz && (zz = this.toText(zz)), this.changeByRange((tz => ({
-           changes: {
-             from: tz.from,
-             to: tz.to,
-             insert: zz
-           },
-           range: iz.cursor(tz.from + zz.length)
- ... (47 more removed lines; see GitHub link above)
+           if (Sv == ev) {
+             let gv = zv(hv);
+             gv < Sv ? (Pv = "delete.backward", gv = nz(vv, gv, !1)) : gv > Sv && (Pv = "delete.forward", gv = nz(vv, gv, !0)), Sv = Math.min(Sv, gv), ev = Math.max(ev, gv)
+           } else Sv = nz(vv, Sv, !1), ev = nz(vv, ev, !0);
+           return Sv == ev ? {
+             range: hv
+           } : {
+             changes: {
+               from: Sv,
+               to: ev
+             },
+             range: gv.j.cursor(Sv, Sv < hv.head ? -1 : 1)
```

#### 178. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1547-L1585` → after: `L16020-L16032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R16020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L16020-L16032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L16020-L16032) · [Before (L1547-L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1547-L1585)

```diff
-       }
-       static fromJSON(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
-           sz = arguments.length > 2 ? arguments[2] : void 0;
-         if (!zz || "string" != typeof zz.doc) throw new RangeError("Invalid JSON representation for EditorState");
-         let Fz = [];
-         if (sz)
-           for (let Wz in sz)
-             if (Object.prototype.hasOwnProperty.call(zz, Wz)) {
-               let tz = sz[Wz],
-                 Xz = zz[Wz];
-               Fz.push(tz.init((zz => tz.spec.fromJSON(Xz, zz))))
-             } return At.create({
-           doc: zz.doc,
-           selection: iz.fromJSON(zz.selection),
-           extensions: tz.extensions ? Fz.concat([tz.extensions]) : Fz
- ... (23 more removed lines; see GitHub link above)
+       })),
+       Dz = vv => Oz(vv, !1, !0),
+       Kz = vv => Oz(vv, !0, !1),
+       Vz = (vv, zv) => Yz(vv, (Pv => {
+         let hv = Pv.head,
+           {
+             state: Sv
+           } = vv,
+           ev = Sv.doc.lineAt(hv),
+           pv = Sv.charCategorizer(hv);
+         for (let vv = null;;) {
+           if (hv == (zv ? ev.to : ev.from)) {
+             hv == Pv.head && ev.number != (zv ? Sv.doc.lines : 1) && (hv += zv ? 1 : -1);
```

#### 179. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1587-L1618` → after: `L16034-L16039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R16034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L16034-L16039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L16034-L16039) · [Before (L1587-L1618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1587-L1618)

```diff
-           } return sz.length && (zz = zz.replace(/\$(\$|\d*)/g, ((zz, tz) => {
-           if ("$" == tz) return "$";
-           let Fz = +(tz || 1);
-           return !Fz || Fz > sz.length ? zz : sz[Fz - 1]
-         }))), zz
-       }
-       languageDataAt(zz, tz) {
-         let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
-           Fz = [];
-         for (let Wz of this.facet(ut))
-           for (let Xz of Wz(this, tz, sz)) Object.prototype.hasOwnProperty.call(Xz, zz) && Fz.push(Xz[zz]);
-         return Fz
-       }
-       charCategorizer(zz) {
-         let tz = this.languageDataAt("wordChars", zz);
-         return jt(tz.length ? tz[0] : "")
- ... (16 more removed lines; see GitHub link above)
+           }
+           let dv = (0, gv.W)(ev.text, hv - ev.from, zv) + ev.from,
+             Nv = ev.text.slice(Math.min(hv, dv) - ev.from, Math.max(hv, dv) - ev.from),
+             lv = pv(Nv);
+           if (null != vv && lv != vv) break;
+           " " == Nv && hv == Pv.head || (vv = lv), hv = dv
```

#### 180. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1620` → after: `L16041-L16059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R16041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L16041-L16059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L16041-L16059) · [Before (L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1620)

```diff
-         return Xz == Oz ? null : iz.range(Xz + sz, Oz + sz)
+         return hv
+       })),
+       Uz = vv => Vz(vv, !1);
+ 
+     function Rz(vv) {
+       let zv = [],
+         Pv = -1;
+       for (let hv of vv.selection.PC) {
+         let Sv = vv.doc.lineAt(hv.from),
+           ev = vv.doc.lineAt(hv.to);
+         if (hv.empty || hv.to != ev.from || (ev = vv.doc.lineAt(hv.to - 1)), Pv >= Sv.number) {
+           let vv = zv[zv.length - 1];
+           vv.to = ev.to, vv.PC.push(hv)
+         } else zv.push({
+           from: Sv.from,
+           to: ev.to,
+ ... (3 more added lines; see GitHub link above)
```

#### 181. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1624-L1636` → after: `L16064-L16089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R16064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L16064-L16089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L16064-L16089) · [Before (L1624-L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1624-L1636)

```diff
-     function yt(zz, tz) {
-       let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
-         Fz = {};
-       for (let Wz of zz)
-         for (let zz of Object.keys(Wz)) {
-           let tz = Wz[zz],
-             Xz = Fz[zz];
-           if (void 0 === Xz) Fz[zz] = tz;
-           else if (Xz === tz || void 0 === tz);
-           else {
-             if (!Object.hasOwnProperty.call(sz, zz)) throw new Error("Config merge conflict for field " + zz);
-             Fz[zz] = sz[zz](Xz, tz)
-           }
+     function xz(vv, zv, Pv) {
+       if (vv.readOnly) return !1;
+       let hv = [],
+         Sv = [];
+       for (let ev of Rz(vv)) {
+         if (Pv ? ev.to == vv.doc.length : 0 == ev.from) continue;
+         let zv = vv.doc.lineAt(Pv ? ev.to + 1 : ev.from - 1),
+           pv = zv.length + 1;
+         if (Pv) {
+           hv.push({
+             from: ev.to,
+             to: zv.to
+           }, {
+             from: ev.from,
+             insert: zv.text + vv.lineBreak
+           });
+ ... (10 more added lines; see GitHub link above)
```

#### 182. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1660-L1669` → after: `L16100-L16168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R16100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L16100-L16168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L16100-L16168) · [Before (L1660-L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1660-L1669)

```diff
-     function dt(zz, tz) {
-       return zz == tz || zz.constructor == tz.constructor && zz.eq(tz)
-     }
-     Mt.prototype.startSide = Mt.prototype.endSide = 0, Mt.prototype.point = !1, Mt.prototype.mapMode = Tz.TrackDel;
-     class ht {
-       constructor(zz, tz, sz) {
-         this.from = zz, this.to = tz, this.value = sz
-       }
-       static create(zz, tz, sz) {
-         return new ht(zz, tz, sz)
+     function tz(vv, zv, Pv) {
+       if (vv.readOnly) return !1;
+       let hv = [];
+       for (let ev of Rz(vv)) Pv ? hv.push({
+         from: ev.from,
+         insert: vv.doc.slice(ev.from, ev.to) + vv.lineBreak
+       }) : hv.push({
+         from: ev.to,
+         insert: vv.lineBreak + vv.doc.slice(ev.from, ev.to)
+       });
+       let Sv = vv.changes(hv);
+       return zv(vv.update({
+         changes: Sv,
+         selection: vv.selection.map(Sv, Pv ? 1 : -1),
+         scrollIntoView: !0,
+         userEvent: "input.copyline"
+ ... (53 more added lines; see GitHub link above)
```

#### 183. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1674-L1713` → after: `L16173-L16178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R16173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L16173-L16178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L16173-L16178) · [Before (L1674-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1674-L1713)

```diff
-       return zz.from - tz.from || zz.value.startSide - tz.value.startSide
-     }
-     class kt {
-       constructor(zz, tz, sz, Fz) {
-         this.from = zz, this.to = tz, this.value = sz, this.nsz = Fz
-       }
-       get length() {
-         return this.to[this.to.length - 1]
-       }
-       findIndex(zz, tz, sz) {
-         let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-           Wz = sz ? this.to : this.from;
-         for (let Xz = Fz, Oz = Wz.length;;) {
-           if (Xz == Oz) return Xz;
-           let Fz = Xz + Oz >> 1,
-             oz = Wz[Fz] - zz || (sz ? this.value[Fz].endSide : this.value[Fz].startSide) - tz;
- ... (24 more removed lines; see GitHub link above)
+       let Pv = -1;
+       return vv.changeByRange((hv => {
+         let Sv = [];
+         for (let gv = hv.from; gv <= hv.to;) {
+           let ev = vv.doc.lineAt(gv);
+           ev.number > Pv && (hv.empty || hv.to > ev.from) && (zv(ev, Sv, hv), Pv = ev.number), gv = ev.to + 1
```

#### 184. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1716-L1717` → after: `L16182-L16183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R16182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L16182-L16183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L16182-L16183) · [Before (L1716-L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1716-L1717)

```diff
-           mapped: sz.length ? new kt(Fz, Wz, sz, Oz) : null,
-           pos: Xz
+           changes: Sv,
+           range: gv.j.range(ev.mapPos(hv.anchor, 1), ev.mapPos(hv.head, 1))
```

#### 185. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1719` → after: `L16185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R16185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L16185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L16185) · [Before (L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1719)

```diff
-       }
+       }))
```

#### 186. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1721-L1741` → after: `L16187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R16187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L16187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L16187) · [Before (L1721-L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1721-L1741)

```diff
-     class it {
-       constructor(zz, tz, sz, Fz) {
-         this.chunkPos = zz, this.chunk = tz, this.nextLayer = sz, this.nsz = Fz
-       }
-       static create(zz, tz, sz, Fz) {
-         return new it(zz, tz, sz, Fz)
-       }
-       get length() {
-         let zz = this.chunk.length - 1;
-         return zz < 0 ? 0 : Math.max(this.chunkEnd(zz), this.nextLayer.length)
-       }
-       get size() {
-         if (this.Aw) return 0;
-         let zz = this.nextLayer.size;
-         for (let tz of this.chunk) zz += tz.value.length;
-         return zz
- ... (5 more removed lines; see GitHub link above)
+     const Zz = vv => {
```

#### 187. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1743-L1776` → after: `L16189-L16293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R16189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L16189-L16293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L16189-L16293) · [Before (L1743-L1776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1743-L1776)

```diff
-           add: tz = [],
-           sort: sz = !1,
-           filterFrom: Fz = 0,
-           filterTo: Wz = this.length
-         } = zz, Xz = zz.filter;
-         if (0 == tz.length && !Xz) return this;
-         if (sz && (tz = tz.slice().sort(Qt)), this.Aw) return tz.length ? it.of(tz) : this;
-         let Oz = new nt(this, null, -1).goto(0),
-           oz = 0,
-           vz = [],
-           Uz = new Lt;
-         for (; Oz.value || oz < tz.length;)
-           if (oz < tz.length && (Oz.from - tz[oz].from || Oz.startSide - tz[oz].value.startSide) >= 0) {
-             let zz = tz[oz++];
-             Uz.addInner(zz.from, zz.to, zz.value) || vz.push(zz)
-           } else 1 == Oz.rangeIndex && Oz.chunkIndex < this.chunk.length && (oz == tz.length || this.chunkEnd(Oz.chunkIndex) < tz[oz].from) && (!Xz || Fz > this.chunkEnd(Oz.chunkIndex) || Wz < this.chunkPos[Oz.chunkIndex]) && Uz.addChunk(this.chunkPos[Oz.chunkIndex], this.chunk[O … [truncated]
- ... (18 more removed lines; see GitHub link above)
+           state: zv,
+           dispatch: Pv
+         } = vv;
+         return !zv.readOnly && (Pv(zv.update(Qz(zv, ((vv, Pv) => {
+           Pv.push({
+             from: vv.from,
+             insert: zv.facet(dv.cb)
+           })
+         })), {
+           userEvent: "input.indent"
+         })), !0)
+       },
+       Az = vv => {
+         let {
+           state: zv,
+           dispatch: Pv
+ ... (89 more added lines; see GitHub link above)
```

#### 188. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1778-L1782` → after: `L16295-L16303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R16295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L16295-L16303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L16295-L16303) · [Before (L1778-L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1778-L1782)

```diff
-               mapped: Xz,
-               pos: oz
-             } = Oz.map(Wz, zz);
-             Xz && (Fz = Math.max(Fz, Xz.nsz), tz.push(Xz), sz.push(oz))
-           }
+               from: Pv,
+               to: hv
+             } = vv;
+             return gv.j.range(Pv, Math.min(hv + 1, zv.doc.length))
+           }));
+           return Pv(zv.update({
+             selection: gv.j.create(hv),
+             userEvent: "select"
+           })), !0
```

#### 189. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1784-L1792` → after: `L16305-L16768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R16305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L16305-L16768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L16305-L16768) · [Before (L1784-L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1784-L1792)

```diff
-         let Wz = this.nextLayer.map(zz);
-         return 0 == tz.length ? Wz : new it(sz, tz, Wz || it.empty, Fz)
-       }
-       between(zz, tz, sz) {
-         if (!this.Aw) {
-           for (let Fz = 0; Fz < this.chunk.length; Fz++) {
-             let Wz = this.chunkPos[Fz],
-               Xz = this.chunk[Fz];
-             if (tz >= Wz && zz <= Wz + Xz.length && !1 === Xz.between(Wz, zz - Wz, tz - Wz, sz)) return
+       }, {
+         key: "Mod-i",
+         run: vv => {
+           let {
+             state: zv,
+             dispatch: Pv
+           } = vv, hv = Hv(zv.selection, (vv => {
+             let Pv = (0, dv.tb)(zv),
+               hv = Pv.resolveStack(vv.from, 1);
+             if (vv.empty) {
+               let zv = Pv.resolveStack(vv.from, -1);
+               zv.node.from >= hv.node.from && zv.node.to <= hv.node.to && (hv = zv)
+             }
+             for (let zv = hv; zv; zv = zv.next) {
+               let {
+                 node: Pv
+ ... (448 more added lines; see GitHub link above)
```

#### 190. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1797-L1802` → after: `L16830-L16835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R16830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L16830-L16835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L16830-L16835) · [Before (L1797-L1802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1797-L1802)

```diff
-       iter() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
-         return qt.from([this]).goto(zz)
-       }
-       get Aw() {
-         return this.nextLayer == this
+     }, {
+       dark: !1
+     });
+     class aP {
+       constructor(vv, zv) {
+         this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = zv, this.timeoutMS = zv, this.callbacks.push(vv)
```

#### 191. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1804-L1831` → after: `L16837-L16847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R16837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L16837-L16847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L16837-L16847) · [Before (L1804-L1831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1804-L1831)

```diff
-       static iter(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return qt.from(zz).goto(tz)
-       }
-       static compare(zz, tz, sz, Fz) {
-         let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
-           Xz = zz.filter((zz => zz.nsz > 0 || !zz.Aw && zz.nsz >= Wz)),
-           Oz = tz.filter((zz => zz.nsz > 0 || !zz.Aw && zz.nsz >= Wz)),
-           oz = lt(Xz, Oz, sz),
-           vz = new Vt(Xz, oz, Wz),
-           Uz = new Vt(Oz, oz, Wz);
-         sz.iterGaps(((zz, tz, sz) => Rt(vz, zz, Uz, tz, sz, Fz))), sz.empty && 0 == sz.length && Rt(vz, 0, Uz, 0, 0, Fz)
-       }
-       static eq(zz, tz) {
-         let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-           Fz = arguments.length > 3 ? arguments[3] : void 0;
- ... (12 more removed lines; see GitHub link above)
+       MT() {
+         if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
+           this.isTimeExhausted = !0;
+           var vv = this.callbacks.slice();
+           this.callbacks.length = 0, vv.forEach((vv => {
+             try {
+               vv()
+             } catch (zv) {
+               console.error("TimeoutLatch callback error:", zv)
+             }
+           }))
```

#### 192. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1834-L1847` → after: `L16850-L16851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R16850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L16850-L16851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L16850-L16851) · [Before (L1834-L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1834-L1847)

```diff
-       static spans(zz, tz, sz, Fz) {
-         let Wz = new Vt(zz, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(tz),
-           Xz = tz,
-           Oz = Wz.openStart;
-         for (;;) {
-           let zz = Math.min(Wz.to, sz);
-           if (Wz.point) {
-             let sz = Wz.activeForPoint(Wz.to),
-               oz = Wz.pointFrom < tz ? sz.length + 1 : Wz.point.startSide < 0 ? sz.length : Math.min(sz.length, Oz);
-             Fz.point(Xz, zz, Wz.point, sz, oz, Wz.pointRank), Oz = Math.min(Wz.openEnd(zz), sz.length)
-           } else zz > Xz && (Fz.span(Xz, zz, Wz.active, Oz), Oz = Wz.openEnd(zz));
-           if (Wz.to > sz) return Oz + (Wz.point && Wz.to > sz ? 1 : 0);
-           Xz = Wz.to, Wz.next()
-         }
+       cancel() {
+         this.isCancelled = !0, this.callbacks.length = 0
```

#### 193. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1849-L1861` → after: `L16853-L16854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R16853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L16853-L16854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L16853-L16854) · [Before (L1849-L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1849-L1861)

```diff
-       static of (zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           sz = new Lt;
-         for (let Fz of zz instanceof ht ? [zz] : tz ? function(zz) {
-             if (zz.length > 1)
-               for (let tz = zz[0], sz = 1; sz < zz.length; sz++) {
-                 let Fz = zz[sz];
-                 if (Qt(tz, Fz) > 0) return zz.slice().sort(Qt);
-                 tz = Fz
-               }
-             return zz
-           }(zz) : zz) sz.add(Fz.from, Fz.to, Fz.value);
-         return sz.finish()
+       reset() {
+         this.timeLeftMS = this.timeoutMS, this.isCancelled = !1, this.isTimeExhausted = !1
```

#### 194. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1863-L1868` → after: `L16856-L16857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R16856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L16856-L16857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L16856-L16857) · [Before (L1863-L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1863-L1868)

```diff
-       static join(zz) {
-         if (!zz.length) return it.empty;
-         let tz = zz[zz.length - 1];
-         for (let sz = zz.length - 2; sz >= 0; sz--)
-           for (let Fz = zz[sz]; Fz != it.empty; Fz = Fz.nextLayer) tz = new it(Fz.chunkPos, Fz.chunk, tz, Math.max(Fz.nsz, tz.nsz));
-         return tz
+       get isDone() {
+         return this.isCancelled || this.isTimeExhausted
```

#### 195. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1877` → after: `L16862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R16862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L16862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L16862) · [Before (L1877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1877)

```diff
-         this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.nsz = -1, this.setMaxPoint = -1, this.nextLayer = null
+         this.interval = null, this.latches = new Set
```

#### 196. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1879-L1880` → after: `L16864-L16865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R16864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L16864-L16865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L16864-L16865) · [Before (L1879-L1880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1879-L1880)

```diff
-       add(zz, tz, sz) {
-         this.addInner(zz, tz, sz) || (this.nextLayer || (this.nextLayer = new Lt)).add(zz, tz, sz)
+       add(vv) {
+         this.latches.add(vv), this.start()
```

#### 197. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1882-L1885` → after: `L16867-L16868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R16867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L16867-L16868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L16867-L16868) · [Before (L1882-L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1882-L1885)

```diff
-       addInner(zz, tz, sz) {
-         let Fz = zz - this.lastTo || sz.startSide - this.last.endSide;
-         if (Fz <= 0 && (zz - this.lastFrom || sz.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
-         return !(Fz < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = zz), this.from.push(zz - this.chunkStart), this.to.push(tz - this.chunkStart), this.last = sz, this.lastFrom = zz, this.lastTo = tz, this.value.push(sz), sz.poi … [truncated]
+       remove(vv) {
+         this.latches.delete(vv), 0 === this.latches.size && this.stop()
```

#### 198. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1887-L1894` → after: `L16870-L16875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R16870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L16870-L16875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L16870-L16875) · [Before (L1887-L1894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1887-L1894)

```diff
-       addChunk(zz, tz) {
-         if ((zz - this.lastTo || tz.value[0].startSide - this.last.endSide) < 0) return !1;
-         this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, tz.nsz), this.chunks.push(tz), this.chunkPos.push(zz);
-         let sz = tz.value.length - 1;
-         return this.last = tz.value[sz], this.lastFrom = tz.from[sz] + zz, this.lastTo = tz.to[sz] + zz, !0
-       }
-       finish() {
-         return this.finishInner(it.empty)
+       start() {
+         null === this.interval && (this.interval = setInterval((() => {
+           this.latches.forEach((vv => {
+             vv.MT(), vv.isDone && this.remove(vv)
+           }))
+         }), 1))
```

#### 199. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1896-L1899` → after: `L16877-L16878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R16877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L16877-L16878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L16877-L16878) · [Before (L1896-L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1896-L1899)

```diff
-       finishInner(zz) {
-         if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return zz;
-         let tz = it.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(zz) : zz, this.setMaxPoint);
-         return this.from = null, tz
+       stop() {
+         null !== this.interval && (clearInterval(this.interval), this.interval = null)
```

#### 200. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1903-L1911` → after: `L16885-L16923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R16885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L16885-L16923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L16885-L16923) · [Before (L1903-L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1903-L1911)

```diff
-     function lt(zz, tz, sz) {
-       let Fz = new Map;
-       for (let Xz of zz)
-         for (let zz = 0; zz < Xz.chunk.length; zz++) Xz.chunk[zz].nsz <= 0 && Fz.set(Xz.chunk[zz], Xz.chunkPos[zz]);
-       let Wz = new Set;
-       for (let Xz of tz)
-         for (let zz = 0; zz < Xz.chunk.length; zz++) {
-           let tz = Fz.get(Xz.chunk[zz]);
-           null == tz || (sz ? sz.mapPos(tz) : tz) != Xz.chunkPos[zz] || (null === sz || void 0 === sz ? void 0 : sz.touchesRange(tz, tz + Xz.chunk[zz].length)) || Wz.add(Xz.chunk[zz])
+     function GP(vv) {
+       var {
+         value: zv,
+         selection: Pv,
+         onChange: hv,
+         onStatistics: Sv,
+         onCreateEditor: dv,
+         onUpdate: Nv,
+         extensions: lv = cP,
+         autoFocus: Tv,
+         theme: Wv = "light",
+         height: wv = null,
+         minHeight: av = null,
+         maxHeight: sv = null,
+         width: Cv = null,
+         minWidth: iv = null,
+ ... (23 more added lines; see GitHub link above)
```

#### 201. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1913-L1934` → after: `L16925-L16935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R16925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L16925-L16935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L16925-L16935) · [Before (L1913-L1934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1913-L1934)

```diff
-       return Wz
-     }
-     class nt {
-       constructor(zz, tz, sz) {
-         let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-         this.layer = zz, this.skip = tz, this.asz = sz, this.rank = Fz
-       }
-       get startSide() {
-         return this.value ? this.value.startSide : 0
-       }
-       get endSide() {
-         return this.value ? this.value.endSide : 0
-       }
-       goto(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
-         return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(zz, tz, !1), this
- ... (6 more removed lines; see GitHub link above)
+       }), Iv = pv.g.updateListener.of((vv => {
+         if (vv.docChanged && "function" === typeof hv && !vv.transactions.some((vv => vv.annotation(iP)))) {
+           xv.current ? xv.current.reset() : (xv.current = new aP((() => {
+             if (tv.current) {
+               var vv = tv.current;
+               tv.current = null, vv()
+             }
+             xv.current = null
+           }), 200), ("undefined" === typeof window ? new sP : (CP || (CP = new sP), CP)).add(xv.current));
+           var zv = vv.state.doc.toString();
+           hv(zv, vv)
```

#### 202. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1936-L1938` → after: `L16937-L16971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R16937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L16937-L16971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L16937-L16971) · [Before (L1936-L1938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1936-L1938)

```diff
-         if (this.chunkIndex < this.layer.chunk.length) {
-           let Fz = this.layer.chunk[this.chunkIndex].findIndex(zz - this.layer.chunkPos[this.chunkIndex], tz, !0);
-           (!sz || this.rangeIndex < Fz) && this.setRangeIndex(Fz)
+         Sv && Sv((vv => ({
+           line: vv.state.doc.lineAt(vv.state.selection.main.from),
+           lineCount: vv.state.doc.lines,
+           lineBreak: vv.state.lineBreak,
+           length: vv.state.doc.length,
+           readOnly: vv.state.readOnly,
+           tabSize: vv.state.tabSize,
+           selection: vv.state.selection,
+           selectionAsSingle: vv.state.selection.asSingle().main,
+           PC: vv.state.selection.PC,
+           selectionCode: vv.state.sliceDoc(vv.state.selection.main.from, vv.state.selection.main.to),
+           selections: vv.state.selection.PC.map((zv => vv.state.sliceDoc(zv.from, zv.to))),
+           selectedText: vv.state.selection.PC.some((vv => !vv.empty))
+         }))(vv))
+       })), Qv = function(vv) {
+         void 0 === vv && (vv = {});
+ ... (19 more added lines; see GitHub link above)
```

#### 203. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1940-L1954` → after: `L16973-L16996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R16973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L16973-L16996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L16973-L16996) · [Before (L1940-L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1940-L1954)

```diff
-         this.next()
-       }
-       forward(zz, tz) {
-         (this.to - zz || this.endSide - tz) < 0 && this.gotoInner(zz, tz, !0)
-       }
-       next() {
-         for (;;) {
-           if (this.chunkIndex == this.layer.chunk.length) {
-             this.from = this.to = 1e9, this.value = null;
-             break
-           } {
-             let zz = this.layer.chunkPos[this.chunkIndex],
-               tz = this.layer.chunk[this.chunkIndex],
-               sz = zz + tz.from[this.rangeIndex];
-             if (this.from = sz, this.to = zz + tz.to[this.rangeIndex], this.value = tz.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.asz < 0 || this.value.point && this.to - this.from >= this.asz) break
+         return !1 === Pv && Nv.push(pv.g.editable.of(!1)), hv && Nv.push(gv.n.readOnly.of(!0)), [...Nv]
+       }({
+         theme: Wv,
+         editable: mv,
+         readOnly: jv,
+         placeholder: Gv,
+         indentWithTab: fv,
+         basicSetup: Fv
+       }), Zv = [Iv, qv, ...Qv];
+       return Nv && "function" === typeof Nv && Zv.push(pv.g.updateListener.of(Nv)), Zv = Zv.concat(lv), (0, ev.useLayoutEffect)((() => {
+         if (Ov && !Uv) {
+           var vv = {
+               doc: zv,
+               selection: Pv,
+               extensions: Zv
+             },
+ ... (8 more added lines; see GitHub link above)
```

#### 204. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1957-L1969` → after: `L16999-L17035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R16999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L16999-L17035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L16999-L17035) · [Before (L1957-L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1957-L1969)

```diff
-       }
-       setRangeIndex(zz) {
-         if (zz == this.layer.chunk[this.chunkIndex].value.length) {
-           if (this.chunkIndex++, this.skip)
-             for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
-           this.rangeIndex = 0
-         } else this.rangeIndex = zz
-       }
-       nextChunk() {
-         this.chunkIndex++, this.rangeIndex = 0, this.next()
-       }
-       compare(zz) {
-         return this.from - zz.from || this.startSide - zz.startSide || this.rank - zz.rank || this.to - zz.to || this.endSide - zz.endSide
+         return () => {
+           Kv && (Rv(void 0), Vv(void 0))
+         }
+       }), [Ov, Uv]), (0, ev.useEffect)((() => {
+         vv.container && Dv(vv.container)
+       }), [vv.container]), (0, ev.useEffect)((() => () => {
+         Kv && (Kv.destroy(), Vv(void 0)), xv.current && (xv.current.cancel(), xv.current = null)
+       }), [Kv]), (0, ev.useEffect)((() => {
+         Tv && Kv && Kv.focus()
+       }), [Tv, Kv]), (0, ev.useEffect)((() => {
+         Kv && Kv.dispatch({
+           effects: gv.B.reconfigure.of(Zv)
+         })
+       }), [Wv, lv, wv, av, sv, Cv, iv, cv, Gv, mv, jv, fv, Fv, hv, Nv]), (0, ev.useEffect)((() => {
+         if (void 0 !== zv) {
+           var vv = Kv ? Kv.state.doc.toString() : "";
+ ... (21 more added lines; see GitHub link above)
```

#### 205. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1972-L2003` → after: `L17038-L17123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R17038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L17038-L17123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L17038-L17123) · [Before (L1972-L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L1972-L2003)

```diff
-     class qt {
-       constructor(zz) {
-         this.heap = zz
-       }
-       static from(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
-           Fz = [];
-         for (let Wz = 0; Wz < zz.length; Wz++)
-           for (let Xz = zz[Wz]; !Xz.Aw; Xz = Xz.nextLayer) Xz.nsz >= sz && Fz.push(new nt(Xz, tz, sz, Wz));
-         return 1 == Fz.length ? Fz[0] : new qt(Fz)
-       }
-       get startSide() {
-         return this.value ? this.value.startSide : 0
-       }
-       goto(zz) {
- ... (16 more removed lines; see GitHub link above)
+     var mP = Pv(1082),
+       jP = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly",  … [truncated]
+       fP = (0, ev.forwardRef)(((vv, zv) => {
+         var {
+           className: Pv,
+           value: gv = "",
+           selection: pv,
+           extensions: dv = [],
+           onChange: Nv,
+           onStatistics: lv,
+           onCreateEditor: Tv,
+           onUpdate: Wv,
+           autoFocus: wv,
+           theme: av = "light",
+           height: sv,
+           minHeight: Cv,
+ ... (70 more added lines; see GitHub link above)
```

#### 206. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2008-L2013` → after: `L17130-L17135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R17130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L17130-L17135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L17130-L17135) · [Before (L2008-L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L2008-L2013)

```diff
-       for (let sz = zz[tz];;) {
-         let Fz = 1 + (tz << 1);
-         if (Fz >= zz.length) break;
-         let Wz = zz[Fz];
-         if (Fz + 1 < zz.length && Wz.compare(zz[Fz + 1]) >= 0 && (Wz = zz[Fz + 1], Fz++), sz.compare(Wz) < 0) break;
-         zz[Fz] = sz, zz[tz] = Wz, tz = Fz
+       if ("string" == typeof zv) vv.appendChild(document.createTextNode(zv));
+       else if (null == zv);
+       else if (null != zv.nodeType) vv.appendChild(zv);
+       else {
+         if (!Array.isArray(zv)) throw new RangeError("Unsupported child node: " + zv);
+         for (var Pv = 0; Pv < zv.length; Pv++) Sv(vv, zv[Pv])
```

#### 207. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2017-L2018` → after: `L17150-L17174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R17150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L17150-L17174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L17150-L17174) · [Before (L2017-L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L2017-L2018)

```diff
-       constructor(zz, tz, sz) {
-         this.asz = sz, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = qt.from(zz, tz, sz)
+       constructor(vv, zv) {
+         this.rules = [];
+         let {
+           finish: Pv
+         } = zv || {};
+ 
+         function hv(vv) {
+           return /^@/.test(vv) ? [vv] : vv.split(/,\s*/)
+         }
+ 
+         function Sv(vv, zv, ev, gv) {
+           let pv = [],
+             dv = /^@(\w+)\b/.exec(vv[0]),
+             Nv = dv && "keyframes" == dv[1];
+           if (dv && null == zv) return ev.push(vv[0] + ";");
+           for (let Pv in zv) {
+ ... (9 more added lines; see GitHub link above)
```

#### 208. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2020-L2022` → after: `L17176-L17177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R17176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L17176-L17177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L17176-L17177) · [Before (L2020-L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L2020-L2022)

```diff
-       goto(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
-         return this.cursor.goto(zz, tz), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = zz, this.endSide = tz, this.openStart = -1, this.next(), this
+       getRules() {
+         return this.rules.join("\n")
```

#### 209. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2024-L2026` → after: `L17179-L17181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R17179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L17179-L17181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L17179-L17181) · [Before (L2024-L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L2024-L2026)

```diff
-       forward(zz, tz) {
-         for (; this.minActive > -1 && (this.activeTo[this.minActive] - zz || this.active[this.minActive].endSide - tz) < 0;) this.removeActive(this.minActive);
-         this.cursor.forward(zz, tz)
+       static newName() {
+         let vv = ev[hv] || 1;
+         return ev[hv] = vv + 1, "\u037c" + vv.toString(36)
```

#### 210. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2028-L2029` → after: `L17183-L17186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R17183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L17183-L17186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L17183-L17186) · [Before (L2028-L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L2028-L2029)

```diff
-       removeActive(zz) {
-         ft(this.active, zz), ft(this.activeTo, zz), ft(this.activeRank, zz), this.minActive = zs(this.active, this.activeTo)
+       static mount(vv, zv, Pv) {
+         let hv = vv[Sv],
+           ev = Pv && Pv.nonce;
+         hv ? ev && hv.setNonce(ev) : hv = new dv(vv, ev), hv.mount(Array.isArray(zv) ? zv : [zv], vv)
```

#### 211. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2031-L2039` → after: `L17188-L17199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R17188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L17188-L17199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L17188-L17199) · [Before (L2031-L2039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L2031-L2039)

```diff
-       addActive(zz) {
-         let tz = 0,
-           {
-             value: sz,
-             to: Fz,
-             rank: Wz
-           } = this.cursor;
-         for (; tz < this.activeRank.length && (Wz - this.activeRank[tz] || Fz - this.activeTo[tz]) > 0;) tz++;
-         Et(this.active, tz, sz), Et(this.activeTo, tz, Fz), Et(this.activeRank, tz, Wz), zz && Et(zz, tz, this.cursor.from), this.minActive = zs(this.active, this.activeTo)
+     }
+     let pv = new Map;
+     class dv {
+       constructor(vv, zv) {
+         let Pv = vv.ownerDocument || vv,
+           hv = Pv.defaultView;
+         if (!vv.head && vv.adoptedStyleSheets && hv.CSSStyleSheet) {
+           let zv = pv.get(Pv);
+           if (zv) return vv[Sv] = zv;
+           this.sheet = new hv.CSSStyleSheet, pv.set(Pv, this)
+         } else this.styleTag = Pv.createElement("style"), zv && this.styleTag.setAttribute("nonce", zv);
+         this.modules = [], vv[Sv] = this
```

#### 212. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2041-L2053` → after: `L17201-L17210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R17201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L17201-L17210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L17201-L17210) · [Before (L2041-L2053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L2041-L2053)

```diff
-       next() {
-         let zz = this.to,
-           tz = this.point;
-         this.point = null;
-         let sz = this.openStart < 0 ? [] : null;
-         for (;;) {
-           let Fz = this.minActive;
-           if (Fz > -1 && (this.activeTo[Fz] - this.cursor.from || this.active[Fz].endSide - this.cursor.startSide) < 0) {
-             if (this.activeTo[Fz] > zz) {
-               this.to = this.activeTo[Fz], this.endSide = this.active[Fz].endSide;
-               break
-             }
-             this.removeActive(Fz), sz && ft(sz, Fz)
+       mount(vv, zv) {
+         let Pv = this.sheet,
+           hv = 0,
+           Sv = 0;
+         for (let ev = 0; ev < vv.length; ev++) {
+           let zv = vv[ev],
+             gv = this.modules.indexOf(zv);
+           if (gv < Sv && gv > -1 && (this.modules.splice(gv, 1), Sv--, gv = -1), -1 == gv) {
+             if (this.modules.splice(Sv++, 0, zv), Pv)
+               for (let vv = 0; vv < zv.rules.length; vv++) Pv.insertRule(zv.rules[vv], hv++)
```

#### 213. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2055-L2071` → after: `L17212-L17213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R17212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L17212-L17213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L17212-L17213) · [Before (L2055-L2071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L2055-L2071)

```diff
-             if (!this.cursor.value) {
-               this.to = this.endSide = 1e9;
-               break
-             }
-             if (this.cursor.from > zz) {
-               this.to = this.cursor.from, this.endSide = this.cursor.startSide;
-               break
-             } {
-               let zz = this.cursor.value;
-               if (zz.point) {
-                 if (!(tz && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
-                   this.point = zz, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = zz.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
-                   break
-                 }
-                 this.cursor.next()
-               } else this.addActive(sz), this.cursor.next()
- ... (1 more removed lines; see GitHub link above)
+             for (; Sv < gv;) hv += this.modules[Sv++].rules.length;
+             hv += zv.rules.length, Sv++
```

#### 214. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2074-L2076` → after: `L17216-L17222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R17216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L17216-L17222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L17216-L17222) · [Before (L2074-L2076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L2074-L2076)

```diff
-         if (sz) {
-           this.openStart = 0;
-           for (let tz = sz.length - 1; tz >= 0 && sz[tz] < zz; tz--) this.openStart++
+         if (Pv) zv.adoptedStyleSheets.indexOf(this.sheet) < 0 && (zv.adoptedStyleSheets = [this.sheet, ...zv.adoptedStyleSheets]);
+         else {
+           let vv = "";
+           for (let zv = 0; zv < this.modules.length; zv++) vv += this.modules[zv].getRules() + "\n";
+           this.styleTag.textContent = vv;
+           let Pv = zv.head || zv;
+           this.styleTag.parentNode != Pv && Pv.insertBefore(this.styleTag, Pv.firstChild)
```

#### 215. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2079-L2143` → after: `L17225-L17226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R17225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L17225-L17226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/285.js#L17225-L17226) · [Before (L2079-L2143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/285.js#L2079-L2143)

```diff
-       activeForPoint(zz) {
-         if (!this.active.length) return this.active;
-         let tz = [];
-         for (let sz = this.active.length - 1; sz >= 0 && !(this.activeRank[sz] < this.pointRank); sz--)(this.activeTo[sz] > zz || this.activeTo[sz] == zz && this.active[sz].endSide >= this.point.endSide) && tz.push(this.active[sz]);
-         return tz.reverse()
-       }
-       openEnd(zz) {
-         let tz = 0;
-         for (let sz = this.activeTo.length - 1; sz >= 0 && this.activeTo[sz] > zz; sz--) tz++;
-         return tz
-       }
-     }
- 
-     function Rt(zz, tz, sz, Fz, Wz, Xz) {
-       zz.goto(tz), sz.goto(Fz);
-       let Oz = Fz + Wz,
- ... (49 more removed lines; see GitHub link above)
+       setNonce(vv) {
+         this.styleTag && this.styleTag.getAttribute("nonce") != vv && this.styleTag.setAttribute("nonce", vv)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/286.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/286.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469)

#### 1. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L4-L11` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/286.js#L4) · [Before (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/286.js#L4-L11)

```diff
-   40525: zz => {
-     function tz(zz) {
-       var tz = new Error("Cannot find module '" + zz + "'");
-       throw tz.code = "MODULE_NOT_FOUND", tz
-     }
-     tz.keys = () => [], tz.resolve = tz, tz.id = 40525, zz.exports = tz
-   },
-   40568: (zz, tz, sz) => {
+   40599: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L14` → after: `L7-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/286.js#L7-L28) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/286.js#L14)

```diff
-       f: () => Wz
+       e: () => Rv,
+       ChangeSet: () => xv,
+       f: () => Vz,
+       j: () => Hv,
+       n: () => tz,
+       q: () => Bv,
+       r: () => Uv,
+       u: () => Sz,
+       y: () => Hz,
+       x: () => Mz,
+       A: () => Iz,
+       B: () => jz,
+       E: () => Xv,
+       H: () => sv,
+       J: () => fz,
+       K: () => Ov,
+ ... (6 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L16-L19` → after: `L30-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L30-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/286.js#L30-L42) · [Before (L16-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/286.js#L16-L19)

```diff
-     const Fz = "Sends one question to the AI",
-       Wz = {
-         title: Fz,
-         "data-asks-ai": !0
+     let hv = [],
+       Sv = [];
+ 
+     function ev(vv) {
+       if (vv < 768) return !1;
+       for (let zv = 0, Pv = hv.length;;) {
+         let ev = zv + Pv >> 1;
+         if (vv < hv[ev]) Pv = ev;
+         else {
+           if (!(vv >= Sv[ev])) return !0;
+           zv = ev + 1
+         }
+         if (zv == Pv) return !1
```

#### 4. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L21-L24` → after: `L44-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L44-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/286.js#L44-L430) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/286.js#L21-L24)

```diff
-   },
-   40495: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Fz
+     }
+ 
+     function gv(vv) {
+       return vv >= 127462 && vv <= 127487
+     }(() => {
+       let vv = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7, … [truncated]
+       for (let zv = 0, Pv = 0; zv < vv.length; zv++)(zv % 2 ? Sv : hv).push(Pv += vv[zv])
+     })();
+     const pv = 8205;
+ 
+     function dv(vv, zv) {
+       return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? Nv : lv)(vv, zv, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
+     }
+ 
+     function Nv(vv, zv, Pv) {
+       if (zv == vv.length) return zv;
+ ... (371 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L26-L35` → after: `L432-L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L432-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/286.js#L432-L646) · [Before (L26-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/286.js#L26-L35)

```diff
-     const Fz = String.raw`
- 	/** The ID of the player running the code.
- 	 *
- 	 * Lobby code usually has nobody running it, so this is null.
- 	 */
- 	declare const myId: string | null
- 	/** The position of the code block or press to code board */
- 	declare const thisPos: [number, number, number]
- 	/** The owner of the current custom lobby */
- 	declare const lobbyOwnerId: string | null
+     class Fv {
+       constructor(vv, zv, Pv, hv) {
+         this.from = vv, this.to = zv, this.number = Pv, this.text = hv
+       }
+       get length() {
+         return this.to - this.from
+       }
+     }
+ 
+     function Yv(vv, zv, Pv) {
+       return [zv = Math.max(0, Math.min(vv.length, zv)), Math.max(zv, Math.min(vv.length, Pv))]
+     }
+ 
+     function nv(vv, zv) {
+       return dv(vv, zv, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
+     }
+ ... (199 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L37-L41` → after: `L648-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L648-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/286.js#L648-L698) · [Before (L37-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/286.js#L37-L41)

```diff
- 	interface Console {
- 		/** Log a message to chat. */
- 		log(message: any): void
- 	}
- 	declare const console: Console
+         function pv() {
+           if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !hv.length) return;
+           ev < zv && tv(hv, zv - ev, -1);
+           let vv = new xv(hv, Sv);
+           gv = gv ? gv.compose(vv.map(gv)) : vv, hv = [], Sv = [], ev = 0
+         }
+         return function vv(dv) {
+           if (Array.isArray(dv))
+             for (let zv of dv) vv(zv);
+           else if (dv instanceof xv) {
+             if (dv.length != zv) throw new RangeError(`Mismatched change set length (got ${dv.length}, expected ${zv})`);
+             pv(), gv = gv ? gv.compose(dv.map(gv)) : dv
+           } else {
+             let {
+               from: vv,
+               to: gv = vv,
+ ... (35 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L43-L1851` → after: `L700-L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L700-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/286.js#L700-L705) · [Before (L43-L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/286.js#L43-L1851)

```diff
- 	interface GameApi {
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
-  * @param entityId
-  */
- getPosition(entityId: EntityId): Pos
- /**
- ... (1793 more removed lines; see GitHub link above)
+     function tv(vv, zv, Pv) {
+       let hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       if (0 == zv && Pv <= 0) return;
+       let Sv = vv.length - 2;
+       Sv >= 0 && Pv <= 0 && Pv == vv[Sv + 1] ? vv[Sv] += zv : Sv >= 0 && 0 == zv && 0 == vv[Sv] ? vv[Sv + 1] += Pv : hv ? (vv[Sv] += zv, vv[Sv + 1] += Pv) : vv.push(zv, Pv)
+     }
```

#### 8. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L1853-L2218` → after: `L707-L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L707-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/286.js#L707-L715) · [Before (L1853-L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/286.js#L1853-L2218)

```diff
- calcExplosionForce(eId: EntityId, explosionType: ExplosionType, knockbackFactor: number, explosionRadius: number, explosionPos: number[], ignoreProjectiles: boolean): { force: Pos; forceFrac: number; }
- /**
-  * Add a custom killfeed message to the killfeed
-  * @param killer - The entity ID or a custom name and colour for the killer
-  * @param victim - The entity ID or a custom name and colour for the victim
-  * @param withItem - The item used
-  */
- addCustomKillfeedMessage(killer: { eId: EntityId } | { name: string; colour: string }, victim: { eId: EntityId } | { name: string; colour: string }, withItem: string): void
- /**
-  * Get the position of a player's target block and the block adjacent to it (e.g. where a block would be placed)
-  *
-  *
-  * Note: This position is a tick ahead of the client's block target info (noa.targetedBlock),
-  * since the client updates the blocktarget before the entities tick (and since it uses the renderposition of the camera)
-  *
-  * This normally doesn't matter but if you are client predicting something based on noa.targetedBlock
- ... (350 more removed lines; see GitHub link above)
+     function qv(vv, zv, Pv) {
+       if (0 == Pv.length) return;
+       let hv = zv.length - 2 >> 1;
+       if (hv < vv.length) vv[vv.length - 1] = vv[vv.length - 1].append(Pv);
+       else {
+         for (; vv.length < hv;) vv.push(sv.empty);
+         vv.push(Pv)
+       }
+     }
```

#### 9. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L2220-L2262` → after: `L717-L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L717-L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/286.js#L717-L731) · [Before (L2220-L2262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/286.js#L2220-L2262)

```diff
- 	}
- 	/** Game API */
- 	declare const api: GameApi;
- type EntityId = string
- type Pos = [number, number, number]
- type LifeformId = EntityId
- type PlayerId = LifeformId
- type PlayerDbId = string
- type LifeformBodyPart = (_TypeOf["lifeformBodyParts"])[number]
- interface PlayerAttemptDamageOtherPlayerOpts {
- 	eId: PlayerId
- 	hitEId: PlayerId
- 	attemptedDmgAmt: number
- 	withItem: string
- 	bodyPartHit?: LifeformBodyPart
- 	attackDir?: number[]
- ... (27 more removed lines; see GitHub link above)
+     function Iv(vv, zv, Pv) {
+       let hv = vv.inserted;
+       for (let Sv = 0, ev = 0, gv = 0; gv < vv.sections.length;) {
+         let pv = vv.sections[gv++],
+           dv = vv.sections[gv++];
+         if (dv < 0) Sv += pv, ev += pv;
+         else {
+           let Nv = Sv,
+             lv = ev,
+             Tv = sv.empty;
+           for (; Nv += pv, lv += dv, dv && hv && (Tv = Tv.append(hv[gv - 2 >> 1])), !(Pv || gv == vv.sections.length || vv.sections[gv + 1] < 0);) pv = vv.sections[gv++], dv = vv.sections[gv++];
+           zv(Sv, Nv, ev, lv, Tv), Sv = Nv, ev = lv
+         }
+       }
+     }
```

#### 10. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L2264-L2267` → after: `L733-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L733-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/286.js#L733-L774) · [Before (L2264-L2267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/286.js#L2264-L2267)

```diff
- 	// Armour
- 	| "Protection"
- 	| "Health"
- 	| "Health Regen"
+     function Qv(vv, zv, Pv) {
+       let hv = [],
+         Sv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
+         ev = new Av(vv),
+         gv = new Av(zv),
+         pv = 0;
+       for (let dv = -1;;) {
+         if (++pv > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
+         if (ev.done && gv.len || gv.done && ev.len) throw new Error("Mismatched change set lengths");
+         if (-1 == ev.ins && -1 == gv.ins) {
+           let vv = Math.min(ev.len, gv.len);
+           tv(hv, vv, -1), ev.forward(vv), gv.forward(vv)
+         } else if (gv.ins >= 0 && (ev.ins < 0 || dv == ev.i || 0 == ev.off && (gv.len < ev.len || gv.len == ev.len && !Pv))) {
+           let vv = gv.len;
+           for (tv(hv, gv.ins, -1); vv;) {
+             if (++pv > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
+ ... (26 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L2269-L2271` → after: `L776-L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L776-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/286.js#L776-L999) · [Before (L2269-L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/286.js#L2269-L2271)

```diff
- 	// Special Armour
- 	| "Stomp Damage"
- 	| "Knockback Resist"
+     function Zv(vv, zv) {
+       let Pv = [],
+         hv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
+         Sv = new Av(vv),
+         ev = new Av(zv),
+         gv = 0;
+       for (let pv = !1;;) {
+         if (++gv > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
+         if (Sv.done && ev.done) return hv ? xv.createSet(Pv, hv) : Rv.create(Pv);
+         if (0 == Sv.ins) tv(Pv, Sv.len, 0, pv), Sv.next();
+         else if (0 != ev.len || ev.done) {
+           if (Sv.done || ev.done) throw new Error("Mismatched change set lengths");
+           {
+             let vv = Math.min(Sv.len2, ev.len),
+               zv = Pv.length;
+             if (-1 == Sv.ins) {
+ ... (208 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L2273-L2276` → after: `L1001-L1038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1001-L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/286.js#L1001-L1038) · [Before (L2273-L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/286.js#L2273-L2276)

```diff
- 	// Bows & Crossbows
- 	| "Arrow Speed"
- 	| "Arrow Damage"
- 	| "Quick Charge"
+     function Jv(vv, zv) {
+       return vv == zv || vv.length == zv.length && vv.every(((vv, Pv) => vv === zv[Pv]))
+     }
+     class Ev {
+       constructor(vv, zv, Pv, hv) {
+         this.dependencies = vv, this.facet = zv, this.type = Pv, this.value = hv, this.id = yv++
+       }
+       dynamicSlot(vv) {
+         var zv;
+         let Pv = this.value,
+           hv = this.facet.compareInput,
+           Sv = this.id,
+           ev = vv[Sv] >> 1,
+           gv = 2 == this.type,
+           pv = !1,
+           dv = !1,
+ ... (22 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L2278-L2286` → after: `L1040-L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1040-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/286.js#L1040-L1045) · [Before (L2278-L2286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/286.js#L2278-L2286)

```diff
- 	// Tools
- 	| "Break Speed"
- 	| "Momentum"
- 	| "Mining Yield"
- 	| "Farming Yield"
- 	| "Mining Aura"
- 	| "Digging Aura"
- 	| "Lumber Aura"
- 	| "Farming Aura"
+     function ov(vv, zv, Pv) {
+       if (vv.length != zv.length) return !1;
+       for (let hv = 0; hv < vv.length; hv++)
+         if (!Pv(vv[hv], zv[hv])) return !1;
+       return !0
+     }
```

#### 14. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L2288-L2290` → after: `L1047-L1051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1047-L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/286.js#L1047-L1051) · [Before (L2288-L2290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/286.js#L2288-L2290)

```diff
- 	// Sticks
- 	| "Horizontal Knockback"
- 	| "Vertical Knockback"
+     function bv(vv, zv) {
+       let Pv = !1;
+       for (let hv of zv) 1 & Nz(vv, hv) && (Pv = !0);
+       return Pv
+     }
```

#### 15. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L2292-L2577` → after: `L1053-L1057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1053-L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/286.js#L1053-L1057) · [Before (L2292-L2577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/286.js#L2292-L2577)

```diff
- 	// Hang Gliders
- 	| "Firecracker Cooldown"
- 	| "Firecracker Boost"
- 	| "Gliding Speed"
- type EnchantmentTier = (_TypeOf["enchantmentTiers"])[number]
- type CustomTextStyling = (string | EntityName | TranslatedText | StyledIcon | StyledText | ProgressBar | StyledKeyBinding)[]
- type TranslatedText = {
- 	translationKey: string
- 	params?: Record<string, string | number | boolean | EntityName>
- }
- type EntityName = {
- 	entityName: string
- 	ranks?: Readonly<Rank[]>
- 	style?: {
- 		color?: string
- 		colour?: string
- ... (270 more removed lines; see GitHub link above)
+     function rv(vv, zv, Pv) {
+       let hv = Pv.map((zv => vv[zv.id])),
+         Sv = Pv.map((vv => vv.type)),
+         ev = hv.filter((vv => !(1 & vv))),
+         gv = vv[zv.id] >> 1;
```

#### 16. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L2579-L2919` → after: `L1059-L1133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1059-L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/286.js#L1059-L1133) · [Before (L2579-L2919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/286.js#L2579-L2919)

```diff
- 	// Not defined on client, must be defined on server
- 	boughtCallback?: (
- 		playerId: PlayerId,
- 		cost: number,
- 		currency: string,
- 		categoryKey: ShopCategoryKey,
- 		itemKey: ShopItemKey,
- 		userInput: string,
- 		amount: number | undefined,
- 	) => void
- 	sell?: boolean // Optional, defaults to false. If true, the sign of "cost" is flipped. So a "cost" of -25 would give the player 25 currency AND be displayed as "25" (instead of -25)
- 	sortPriority?: number // Descending, bigger number means closer to the top
- 	hidden?: boolean
- 	smp?: SmpShopItemMeta // Set by the SMP marketplace plugin only, for its own shop screens
- }
- type ShopItemUserInput =
- ... (325 more removed lines; see GitHub link above)
+       function pv(vv) {
+         let Pv = [];
+         for (let zv = 0; zv < hv.length; zv++) {
+           let ev = lz(vv, hv[zv]);
+           if (2 == Sv[zv])
+             for (let vv of ev) Pv.push(vv);
+           else Pv.push(ev)
+         }
+         return zv.combine(Pv)
+       }
+       return {
+         create(vv) {
+           for (let zv of hv) Nz(vv, zv);
+           return vv.values[gv] = pv(vv), 1
+         },
+         update(vv, Pv) {
+ ... (59 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L2921-L2922` → after: `L1135-L1189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1135-L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/286.js#L1135-L1189) · [Before (L2921-L2922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/286.js#L2921-L2922)

```diff
- 	msPerRound?: number // computed from fireRate
- 	msPerRoundTouchScreen?: number // computed from fireRateWithHeldTouch
+     function hz(vv) {
+       return zv => new ez(zv, vv)
+     }
+     const Sz = {
+       highest: hz(0),
+       high: hz(Pz),
+       default: hz(zz),
+       low: hz(vz),
+       lowest: hz(uv)
+     };
+     class ez {
+       constructor(vv, zv) {
+         this.inner = vv, this.prec = zv
+       }
+     }
+     class gz {
+ ... (39 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L2924-L2925` → after: `L1191-L1238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1191-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/286.js#L1191-L1238) · [Before (L2924-L2925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/286.js#L2924-L2925)

```diff
- 	altYVelocityInaccuracy?: number
- 	altInaccuracyFromJump?: number
+             function ev(vv, gv) {
+               let pv = Sv.get(vv);
+               if (null != pv) {
+                 if (pv <= gv) return;
+                 let zv = hv[pv].indexOf(vv);
+                 zv > -1 && hv[pv].splice(zv, 1), vv instanceof pz && Pv.delete(vv.compartment)
+               }
+               if (Sv.set(vv, gv), Array.isArray(vv))
+                 for (let zv of vv) ev(zv, gv);
+               else if (vv instanceof pz) {
+                 if (Pv.has(vv.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
+                 let hv = zv.get(vv.compartment) || vv.inner;
+                 Pv.set(vv.compartment, hv), ev(hv, gv)
+               } else if (vv instanceof ez) ev(vv.inner, vv.prec);
+               else if (vv instanceof Xv) hv[gv].push(vv), vv.provides && ev(vv.provides, gv);
+               else if (vv instanceof Ev) hv[gv].push(vv), vv.facet.extensions && ev(vv.facet.extensions, zz);
+ ... (32 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L2927` → after: `L1240-L1249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1240-L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/286.js#L1240-L1249) · [Before (L2927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/286.js#L2927)

```diff
- 	hasVerticalInaccuracy?: boolean
+     function Nz(vv, zv) {
+       if (1 & zv) return 2;
+       let Pv = zv >> 1,
+         hv = vv.status[Pv];
+       if (4 == hv) throw new Error("Cyclic dependency between fields and/or facets");
+       if (2 & hv) return hv;
+       vv.status[Pv] = 4;
+       let Sv = vv.computeSlot(vv, vv.config.dynamicSlots[Pv]);
+       return vv.status[Pv] = 2 | Sv
+     }
```

#### 20. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L2929` → after: `L1251-L1345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1251-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/286.js#L1251-L1345) · [Before (L2929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/286.js#L2929)

```diff
- 	keepScopeOnShot?: boolean
+     function lz(vv, zv) {
+       return 1 & zv ? vv.config.staticValues[zv >> 1] : vv.values[zv >> 1]
+     }
+     const Tz = Bv.define(),
+       Wz = Bv.define({
+         combine: vv => vv.some((vv => vv)),
+         static: !0
+       }),
+       wz = Bv.define({
+         combine: vv => vv.length ? vv[0] : void 0,
+         static: !0
+       }),
+       az = Bv.define(),
+       sz = Bv.define(),
+       Cz = Bv.define(),
+       iz = Bv.define({
+ ... (79 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L2931` → after: `L1347-L1357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1347-L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/286.js#L1347-L1357) · [Before (L2931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/286.js#L2931)

```diff
- 	aimZoomFactor?: number
+     function Fz(vv, zv) {
+       let Pv = [];
+       for (let hv = 0, Sv = 0;;) {
+         let ev, gv;
+         if (hv < vv.length && (Sv == zv.length || zv[Sv] >= vv[hv])) ev = vv[hv++], gv = vv[hv++];
+         else {
+           if (!(Sv < zv.length)) return Pv;
+           ev = zv[Sv++], gv = zv[Sv++]
+         }!Pv.length || Pv[Pv.length - 1] < ev ? Pv.push(ev, gv) : Pv[Pv.length - 1] < gv && (Pv[Pv.length - 1] = gv)
+       }
+     }
```

#### 22. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L2933-L2942` → after: `L1359-L1369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1359-L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/286.js#L1359-L1369) · [Before (L2933-L2942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/286.js#L2933-L2942)

```diff
- 	// Kickback
- 	kickbackDecreaseRate: number
- 	minKickback?: number
- 	maxKickback?: number
- 	kickbackRate?: number
- }
- type NonOverridableStats =
- 	// Precomputed values
- 	| "msPerRound"
- 	| "msPerRoundTouchScreen"
+     function Yz(vv, zv, Pv) {
+       var hv;
+       let Sv, ev, gv;
+       return Pv ? (Sv = zv.changes, ev = xv.empty(zv.changes.length), gv = vv.changes.compose(zv.changes)) : (Sv = zv.changes.map(vv.changes), ev = vv.changes.mapDesc(zv.changes, !0), gv = vv.changes.compose(Sv)), {
+         changes: gv,
+         selection: zv.selection ? zv.selection.map(ev) : null === (hv = vv.selection) || void 0 === hv ? void 0 : hv.map(Sv),
+         effects: jz.mapEffects(vv.effects, Sv).concat(jz.mapEffects(zv.effects, ev)),
+         annotations: vv.annotations.length ? vv.annotations.concat(zv.annotations) : zv.annotations,
+         scrollIntoView: vv.scrollIntoView || zv.scrollIntoView
+       }
+     }
```

#### 23. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L2944-L3066` → after: `L1371-L1381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1371-L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/286.js#L1371-L1381) · [Before (L2944-L3066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/286.js#L2944-L3066)

```diff
- 	// These two don't even work lol
- 	// TODO: Fix them
- 	| "tagSpeedMult"
- 	| "subsequentTagSpeedReductionScalar"
- type GunCategory = (_TypeOf["gunCategories"])[number]
- type WeaponComboInfo = Readonly<{
- 	comboWindowMs: number
- 	comboMultipliers: readonly number[]
- 	backstabAngle?: number // If present, hitting an enemy from behind within this angle (radians) skip to end of combo
- }>
- type AnyMetadataItem = Partial<BlockMetadataItem & NonBlockMetadataItem>
- type CustomItemStat = (_TypeOf["customItemStats"])[number]
- type InvenItem = { name: string; amount: number | null; attributes: ItemAttributes; typeObj: any }
- type RecipesForItem = RecursiveReadonly<
- 	{
- 		requires: { items: ItemName[]; amt: number }[]
- ... (107 more removed lines; see GitHub link above)
+     function nz(vv, zv, Pv) {
+       let hv = zv.selection,
+         Sv = Kz(zv.annotations);
+       return zv.userEvent && (Sv = Sv.concat(fz.userEvent.of(zv.userEvent))), {
+         changes: zv.changes instanceof xv ? zv.changes : xv.of(zv.changes || [], Pv, vv.facet(wz)),
+         selection: hv && (hv instanceof Hv ? hv : Hv.single(hv.anchor, hv.head)),
+         effects: Kz(zv.effects),
+         annotations: Sv,
+         scrollIntoView: !!zv.scrollIntoView
+       }
+     }
```

#### 24. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L3068-L3070` → after: `L1383-L1430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1383-L1430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/286.js#L1383-L1430) · [Before (L3068-L3070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/286.js#L3068-L3070)

```diff
- 	// If a mob drops an item, then we choose a random amount within these bounds.
- 	dropMinAmount?: number
- 	dropMaxAmount?: number
+     function Oz(vv, zv, Pv) {
+       let hv = nz(vv, zv.length ? zv[0] : {}, vv.doc.length);
+       zv.length && !1 === zv[0].filter && (Pv = !1);
+       for (let ev = 1; ev < zv.length; ev++) {
+         !1 === zv[ev].filter && (Pv = !1);
+         let Sv = !!zv[ev].sequential;
+         hv = Yz(hv, nz(vv, zv[ev], Sv ? hv.changes.newLength : vv.doc.length), Sv)
+       }
+       let Sv = fz.create(vv, hv.changes, hv.selection, hv.effects, hv.annotations, hv.scrollIntoView);
+       return function(vv) {
+         let zv = vv.startState,
+           Pv = zv.facet(Cz),
+           hv = vv;
+         for (let Sv = Pv.length - 1; Sv >= 0; Sv--) {
+           let ev = Pv[Sv](vv);
+           ev && Object.keys(ev).length && (hv = Yz(hv, nz(zv, ev, vv.changes.newLength), !0))
+ ... (32 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L3072-L4004` → after: `L1432-L1442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1432-L1442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/286.js#L1432-L1442) · [Before (L3072-L4004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/286.js#L3072-L4004)

```diff
- 	// If true, the item will "burst" out of the mob rather than just dropping.
- 	applyBurstImpulseToDrop?: boolean
- }>
- type MobBurstAttackInfo = Readonly<{
- 	burstAttackIntervals: readonly number[]
- }>
- type MobArmour = Partial<Readonly<Record<ArmourPart, MobArmourPiece>>>
- type MobWarpTargetSpecialAttackInfo = Readonly<{
- 	cooldown: number
- 	range: number
- 	sound: string | null
- 	delay: number
- 	minDestinationRadius: number
- 	maxDestinationRadius: number
- 	swingArm: boolean
- 	particleOpts: TempMobParticleOpts | null
- ... (917 more removed lines; see GitHub link above)
+     function Kz(vv) {
+       return null == vv ? Dz : Array.isArray(vv) ? vv : [vv]
+     }
+     var Vz = function(vv) {
+       return vv[vv.Word = 0] = "Word", vv[vv.Space = 1] = "Space", vv[vv.Other = 2] = "Other", vv
+     }(Vz || (Vz = {}));
+     const Uz = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
+     let Rz;
+     try {
+       Rz = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
+     } catch (PP) {}
```

#### 26. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L4257-L4258` → after: `L1445-L2145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1445-L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/286.js#L1445-L2145) · [Before (L4257-L4258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/286.js#L4257-L4258)

```diff
-       var tz = new Error("Cannot find module '" + zz + "'");
-       throw tz.code = "MODULE_NOT_FOUND", tz
+       return zv => {
+         if (!/\S/.test(zv)) return Vz.Space;
+         if (function(vv) {
+             if (Rz) return Rz.test(vv);
+             for (let zv = 0; zv < vv.length; zv++) {
+               let Pv = vv[zv];
+               if (/\w/.test(Pv) || Pv > "\x80" && (Pv.toUpperCase() != Pv.toLowerCase() || Uz.test(Pv))) return !0
+             }
+             return !1
+           }(zv)) return Vz.Word;
+         for (let Pv = 0; Pv < vv.length; Pv++)
+           if (zv.indexOf(vv[Pv]) > -1) return Vz.Word;
+         return Vz.Other
+       }
+     }
+     class tz {
+ ... (685 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L4260-L4269` → after: `L2147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R2147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/286.js#L2147) · [Before (L4260-L4269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/286.js#L4260-L4269)

```diff
-     tz.keys = () => [], tz.resolve = tz, tz.id = 40556, zz.exports = tz
-   },
-   40523: () => {},
-   40551: () => {},
-   40534: () => {},
-   40564: () => {},
-   40547: () => {},
-   40540: () => {},
-   40530: () => {},
-   40553: () => {}
+   }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/287.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/287.js` (98 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1)

#### 1. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4` → after: `L4-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L4-L22) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L4)

```diff
-   40506: (zz, tz, sz) => {
+   40690: vv => {
+     function zv(vv) {
+       var zv = new Error("Cannot find module '" + vv + "'");
+       throw zv.code = "MODULE_NOT_FOUND", zv
+     }
+     zv.keys = () => [], zv.resolve = zv, zv.id = 40690, vv.exports = zv
+   },
+   40753: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => hv,
+       e: () => Sv
+     });
+     const hv = "Sends one question to the AI",
+       Sv = {
+         title: hv,
+         "data-asks-ai": !0
+ ... (3 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8-L736` → after: `L26-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L26-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L26-L57) · [Before (L8-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L8-L736)

```diff
-     const Fz = String.raw`interface Map<K, V> {
-     clear(): void;
-     /**
-      * @returns true if an element in the Map existed and has been removed, or false if the element does not exist.
-      */
-     delete(key: K): boolean;
-     /**
-      * Executes a provided function once per each key/value pair in the Map, in insertion order.
-      */
-     forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
-     /**
-      * Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.
-      * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
-      */
-     get(key: K): V | undefined;
-     /**
- ... (713 more removed lines; see GitHub link above)
+     const hv = String.raw`
+ 	/** The ID of the player running the code.
+ 	 *
+ 	 * Lobby code usually has nobody running it, so this is null.
+ 	 */
+ 	declare const myId: string | null
+ 	/** The position of the code block or press to code board */
+ 	declare const thisPos: [number, number, number]
+ 	/** The owner of the current custom lobby */
+ 	declare const lobbyOwnerId: string | null
+ 
+ 	interface Console {
+ 		/** Log a message to chat. */
+ 		log(message: any): void
+ 	}
+ 	declare const console: Console
+ ... (16 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L738` → after: `L59-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L59-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L59-L63) · [Before (L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L738)

```diff
-  * Describes a user-defined {@link Iterator} that is also iterable.
+  * Set position of a player / entity.
+  * @param entityId
+  * @param x Can also be an array, in which case y and z shouldn't be passed
+  * @param y
+  * @param z
```

#### 4. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L740-L743` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L65) · [Before (L740-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L740-L743)

```diff
- interface IterableIterator<T, TReturn = any, TNext = any> extends Iterator<T, TReturn, TNext> {
-     [Symbol.iterator](): IterableIterator<T, TReturn, TNext>;
- }
- 
+ setPosition(entityId: EntityId, x: number | number[], y?: number, z?: number): void
```

#### 5. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L745` → after: `L67-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L67-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L67-L68) · [Before (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L745)

```diff
-  * Describes an {@link Iterator} produced by the runtime that inherits from the intrinsic \`Iterator.prototype\`.
+  * Get the scale of a lifeform.
+  * @param lifeformId
```

#### 6. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L747-L1178` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L70) · [Before (L747-L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L747-L1178)

```diff
- interface IteratorObject<T, TReturn = unknown, TNext = unknown> extends Iterator<T, TReturn, TNext> {
-     [Symbol.iterator](): IteratorObject<T, TReturn, TNext>;
- }
- 
- interface ArrayIterator<T> extends IteratorObject<T, BuiltinIteratorReturn, unknown> {
-     [Symbol.iterator](): ArrayIterator<T>;
- }
- 
- interface Array<T> {
-     /** Iterator */
-     [Symbol.iterator](): ArrayIterator<T>;
- 
-     /**
-      * Returns an iterable of key, value pairs for every entry in the array
-      */
-     entries(): ArrayIterator<[number, T]>;
- ... (416 more removed lines; see GitHub link above)
+ getLifeformScale(lifeformId: LifeformId): number
```

#### 7. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1180-L1181` → after: `L72-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L72-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L72-L77) · [Before (L1180-L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L1180-L1181)

```diff
-  * Defines the \`TReturn\` type used for built-in iterators produced by \`Array\`, \`Map\`, \`Set\`, and others.
-  * This is \`undefined\` when \`strictBuiltInIteratorReturn\` is \`true\`; otherwise, this is \`any\`.
+  * Set the visual + physical scale of a lifeform. A scale of 1 is the default size.
+  * Bodies stop growing at 25 blocks wide and 90 tall (a player's at scale 50); past that only the model grows.
+  * getLifeformScale returns the scale rounded to 32-bit precision (0.7 reads back as 0.699999988079071).
+  *
+  * @param lifeformId
+  * @param scale Must be a positive number, from about 1.4e-45 to 3.4e38.
```

#### 8. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1183-L3029` → after: `L79-L1615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L79-L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L79-L1615) · [Before (L1183-L3029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L1183-L3029)

```diff
- type BuiltinIteratorReturn = intrinsic;
- 
- interface ProxyHandler<T extends object> {
-     /**
-      * A trap method for a function call.
-      * @param target The original callable object which is being proxied.
-      */
-     apply?(target: T, thisArg: any, argArray: any[]): any;
- 
-     /**
-      * A trap for the \`new\` operator.
-      * @param target The original object which is being proxied.
-      * @param newTarget The constructor that was originally called.
-      */
-     construct?(target: T, argArray: any[], newTarget: Function): object;
- 
- ... (1831 more removed lines; see GitHub link above)
+ setLifeformScale(lifeformId: LifeformId, scale: number): void
+ /**
+  * Get all the player ids.
+  */
+ getPlayerIds(): PlayerId[]
+ /**
+  * Whether a player is currently in the game
+  *
+  * @param playerId
+  */
+ playerIsInGame(playerId: PlayerId): boolean
+ /**
+  * Whether a player is signed in to a Bloxd account: false for guests, who are still in the game.
+  * To check that a player is still in the game, use playerIsInGame.
+  * @param playerId
+  * @returns
+ ... (1521 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3031` → after: `L1617-L1620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1617-L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L1617-L1620) · [Before (L3031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L3031)

```diff
-  * Creates a new function.
+  * Delete a request for a player.
+  *
+  * @param playerId
+  * @param id Returned from the addUiRequest call you want to cancel
```

#### 10. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3033-L3952` → after: `L1622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L1622) · [Before (L3033-L3952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L3033-L3952)

```diff
- interface Function {
-     /**
-      * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
-      * @param thisArg The object to be used as the this object.
-      * @param argArray A set of arguments to be passed to the function.
-      */
-     apply(this: Function, thisArg: any, argArray?: any): any;
- 
-     /**
-      * Calls a method of an object, substituting another object for the current object.
-      * @param thisArg The object to be used as the current object.
-      * @param argArray A list of arguments to be passed to the method.
-      */
-     call(this: Function, thisArg: any, ...argArray: any[]): any;
- 
-     /**
- ... (904 more removed lines; see GitHub link above)
+ deleteUiRequest(playerId: PlayerId, id: UiRequestId): void
```

#### 11. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3954-L3957` → after: `L1624-L1629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1624-L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L1624-L1629) · [Before (L3954-L3957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L3954-L3957)

```diff
-  * Represents a raw buffer of binary data, which is used to store data for the
-  * different typed arrays. ArrayBuffers cannot be read from or written to directly,
-  * but can be passed to a typed array or DataView Object to interpret the raw
-  * buffer as needed.
+  * Show a message over the shop in the same place that a shop item's onBoughtMessage is shown.
+  * Displays for a couple seconds before disappearing
+  * Use case is to show a dynamic message when player buys an item
+  *
+  * @param playerId
+  * @param info
```

#### 12. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3959-L3970` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L1631) · [Before (L3959-L3970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L3959-L3970)

```diff
- interface ArrayBuffer {
-     /**
-      * Read-only. The length of the ArrayBuffer (in bytes).
-      */
-     readonly byteLength: number;
- 
-     /**
-      * Returns a section of an ArrayBuffer.
-      */
-     slice(begin?: number, end?: number): ArrayBuffer;
- }
- 
+ sendOverShopInfo(playerId: PlayerId, info: string | CustomTextStyling): void
```

#### 13. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3972` → after: `L1633-L1640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1633-L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L1633-L1640) · [Before (L3972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L3972)

```diff
-  * Allowed ArrayBuffer types for the buffer of an ArrayBufferView and related Typed Arrays.
+  * Open the shop UI for a player
+  *
+  * @param playerId
+  * @param toggle Whether to close the shop if it's already open. Leave this off when opening from an
+  * interaction: holding the interact button re-fires the alt action every ~50-150ms, so a toggle would
+  * flicker the shop open and closed until release.
+  * @param forceCategoryKey If set, will change the shop to this category
+  * @param onlyIfNonEmpty If true, will only open the shop if the category (or shop, if no category is provided) is non-empty
```

#### 14. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3974-L4000` → after: `L1642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L1642) · [Before (L3974-L4000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L3974-L4000)

```diff
- interface ArrayBufferTypes {
-     ArrayBuffer: ArrayBuffer;
- }
- 
- interface ArrayBufferConstructor {
-     readonly prototype: ArrayBuffer;
-     new (byteLength: number): ArrayBuffer;
-     isView(arg: any): arg is ArrayBufferView;
- }
- 
- interface ArrayBufferView<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
-     /**
-      * The ArrayBuffer instance referenced by the array.
-      */
-     readonly buffer: TArrayBuffer;
- 
- ... (11 more removed lines; see GitHub link above)
+ openShop(playerId: PlayerId, toggle?: boolean, forceCategoryKey?: ShopCategoryKey | null, onlyIfNonEmpty?: boolean): void
```

#### 15. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4002-L4003` → after: `L1644-L1654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1644-L1654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L1644-L1654) · [Before (L4002-L4003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L4002-L4003)

```diff
-  * A typed array of 8-bit integer values. The contents are initialized to 0. If the requested
-  * number of bytes could not be allocated an exception is raised.
+  * Apply an effect to a lifeform.
+  * Can be an inbuilt effect E.g. "Speed" (speed boost), "Damage" (damage boost).
+  * For inbuilt just pass the name of the effect and the functionality is handled in-engine.
+  * For custom effect, you pass customEffectInfo. The icon can be an InGameIconName or a bloxd item name.
+  * The custom effect onEndCb is an optional helper within which you can undo the effect you applied.
+  * Note that onEndCb will not work for press to code boards, code blocks or world code.
+  *
+  * @param lifeformId
+  * @param effectName
+  * @param duration
+  * @param customEffectInfo
```

#### 16. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4005-L4282` → after: `L1656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L1656) · [Before (L4005-L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L4005-L4282)

```diff
- interface Int8Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
-     /**
-      * The size in bytes of each element in the array.
-      */
-     readonly BYTES_PER_ELEMENT: number;
- 
-     /**
-      * The ArrayBuffer instance referenced by the array.
-      */
-     readonly buffer: TArrayBuffer;
- 
-     /**
-      * The length in bytes of the array.
-      */
-     readonly byteLength: number;
- 
- ... (262 more removed lines; see GitHub link above)
+ applyEffect(lifeformId: LifeformId, effectName: string, duration: number | null, customEffectInfo: { icon?: IngameIconName | ItemName; onEndCb?: () => void; displayName?: string | TranslatedText } & Partial<InbuiltEffectInfo>): void
```

#### 17. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4284-L4285` → after: `L1658-L1662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1658-L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L1658-L1662) · [Before (L4284-L4285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L4284-L4285)

```diff
-  * A typed array of 8-bit unsigned integer values. The contents are initialized to 0. If the
-  * requested number of bytes could not be allocated an exception is raised.
+  * Check if a lifeform has an effect.
+  *
+  * @param lifeformId
+  * @param name
+  * @param atOrAboveLevel Checks whether the effect is at or above the given level
```

#### 18. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4287-L4563` → after: `L1664-L1851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1664-L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L1664-L1851) · [Before (L4287-L4563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L4287-L4563)

```diff
- interface Uint8Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
-     /**
-      * The size in bytes of each element in the array.
-      */
-     readonly BYTES_PER_ELEMENT: number;
- 
-     /**
-      * The ArrayBuffer instance referenced by the array.
-      */
-     readonly buffer: TArrayBuffer;
- 
-     /**
-      * The length in bytes of the array.
-      */
-     readonly byteLength: number;
- 
- ... (261 more removed lines; see GitHub link above)
+ hasEffect(lifeformId: LifeformId, name: string, atOrAboveLevel?: number): boolean
+ /**
+  * Get the level of an effect on a lifeform, or 0 if they don't have it.
+  *
+  * @param lifeformId
+  * @param name
+  */
+ getEffectLevel(lifeformId: LifeformId, name: string): number
+ /**
+  * Get all the effects currently applied to a lifeform.
+  *
+  * @param lifeformId
+  */
+ getEffects(lifeformId: LifeformId): string[]
+ /**
+  * Remove an effect from a lifeform.
+ ... (172 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4566-L4567` → after: `L1930-L1942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1930-L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L1930-L1942) · [Before (L4566-L4567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L4566-L4567)

```diff
-  * A typed array of 16-bit signed integer values. The contents are initialized to 0. If the
-  * requested number of bytes could not be allocated an exception is raised.
+  * Register an event for analytics. Custom games only: anywhere else, World Code gets an error.
+  * Special value is eventType "match" and eventValue "match_started" to mark the start of a match when calculating average quantities
+  * Each player can send 20 events a minute. Each day a game can have 20 game categories, 20 event types in each and
+  * 50 event values for each type; once it goes past one, events at that level are dropped until midnight UTC
+  *
+  * @param playerId - The player associated with the event
+  * @param eventType - The type of event e.g. "shop" or "death", at most 64 characters
+  * @param eventValue - The detail of the event e.g. the item bought or cause of death, at most 128 characters
+  * @param gameCategoryId - The game category id e.g. the map you're playing on or the variant of the game to filter by or compare, at most 128 characters
+  * @param gameStartTimeMs - The time the game or match started in milliseconds since 1970, within the last 30 days - use to get event times relative to the start of the game.
+  * Each event also records the player's lifetime playtime
+  * @param position - Where the event happened, e.g. where the player died or the block they broke, shown on Studio's heatmap. In the same frame of reference as the game's registerAnalyticsPlayerPosition positions for this category. Without one, no position is recorded
+  * @param numericValue - A number the event measures, e.g. the coins earned, the round's score or the seconds it took.
```

#### 20. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4569-L4845` → after: `L1944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L1944) · [Before (L4569-L4845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L4569-L4845)

```diff
- interface Int16Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
-     /**
-      * The size in bytes of each element in the array.
-      */
-     readonly BYTES_PER_ELEMENT: number;
- 
-     /**
-      * The ArrayBuffer instance referenced by the array.
-      */
-     readonly buffer: TArrayBuffer;
- 
-     /**
-      * The length in bytes of the array.
-      */
-     readonly byteLength: number;
- 
- ... (261 more removed lines; see GitHub link above)
+ registerAnalyticsEvent(playerId: string, eventType: string, eventValue: string | null, gameCategoryId: string | null, gameStartTimeMs: number, position?: Pos | null, numericValue?: number | null): void
```

#### 21. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4847-L4848` → after: `L1946-L1954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1946-L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L1946-L1954) · [Before (L4847-L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L4847-L4848)

```diff
-  * A typed array of 16-bit unsigned integer values. The contents are initialized to 0. If the
-  * requested number of bytes could not be allocated an exception is raised.
+  * Record where a player is for the analytics heatmap. Call it at a regular interval (e.g. once a second).
+  * Custom games only: anywhere else, World Code gets an error.
+  * Each player can send 120 positions a minute. Each day a game can send 100,000 different blocks (event positions
+  * included); once it goes past that, positions are dropped until midnight UTC
+  *
+  * @param playerId - The player whose position to record
+  * @param gameCategoryId - The game category id e.g. the map you're playing on or the variant of the game to filter by, at most 128 characters
+  * @param gameStartTimeMs - The time the game or match started in milliseconds since 1970, within the last 30 days - used to get a playback of positions
+  * @param position - The position of the player to record. Defaults to the player's global position.
```

#### 22. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4850-L5127` → after: `L1956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L1956) · [Before (L4850-L5127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L4850-L5127)

```diff
- interface Uint16Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
-     /**
-      * The size in bytes of each element in the array.
-      */
-     readonly BYTES_PER_ELEMENT: number;
- 
-     /**
-      * The ArrayBuffer instance referenced by the array.
-      */
-     readonly buffer: TArrayBuffer;
- 
-     /**
-      * The length in bytes of the array.
-      */
-     readonly byteLength: number;
- 
- ... (262 more removed lines; see GitHub link above)
+ registerAnalyticsPlayerPosition(playerId: string, gameCategoryId: string | null, gameStartTimeMs: number, position?: Pos | null): void
```

#### 23. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5129-L5130` → after: `L1958-L1959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1958-L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L1958-L1959) · [Before (L5129-L5130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L5129-L5130)

```diff
-  * A typed array of 32-bit signed integer values. The contents are initialized to 0. If the
-  * requested number of bytes could not be allocated an exception is raised.
+  * Gets a database value that is saved per lobby.
+  * @param key
```

#### 24. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5132-L5409` → after: `L1961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L1961) · [Before (L5132-L5409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L5132-L5409)

```diff
- interface Int32Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
-     /**
-      * The size in bytes of each element in the array.
-      */
-     readonly BYTES_PER_ELEMENT: number;
- 
-     /**
-      * The ArrayBuffer instance referenced by the array.
-      */
-     readonly buffer: TArrayBuffer;
- 
-     /**
-      * The length in bytes of the array.
-      */
-     readonly byteLength: number;
- 
- ... (262 more removed lines; see GitHub link above)
+ getLobbyDbValue(key: string): string | number | null
```

#### 25. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5411-L5412` → after: `L1963-L1965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1963-L1965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L1963-L1965) · [Before (L5411-L5412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L5411-L5412)

```diff
-  * A typed array of 32-bit unsigned integer values. The contents are initialized to 0. If the
-  * requested number of bytes could not be allocated an exception is raised.
+  * Sets a database value that is saved per lobby. This persists between sessions.
+  * @param key
+  * @param value
```

#### 26. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5414-L5690` → after: `L1967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L1967) · [Before (L5414-L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L5414-L5690)

```diff
- interface Uint32Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
-     /**
-      * The size in bytes of each element in the array.
-      */
-     readonly BYTES_PER_ELEMENT: number;
- 
-     /**
-      * The ArrayBuffer instance referenced by the array.
-      */
-     readonly buffer: TArrayBuffer;
- 
-     /**
-      * The length in bytes of the array.
-      */
-     readonly byteLength: number;
- 
- ... (261 more removed lines; see GitHub link above)
+ setLobbyDbValue(key: string, value: string | number): void
```

#### 27. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5692-L5693` → after: `L1969-L1970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1969-L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L1969-L1970) · [Before (L5692-L5693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L5692-L5693)

```diff
-  * A typed array of 32-bit float values. The contents are initialized to 0. If the requested number
-  * of bytes could not be allocated an exception is raised.
+  * Deletes a database value that is saved per lobby.
+  * @param key
```

#### 28. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5695-L5972` → after: `L1972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L1972) · [Before (L5695-L5972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L5695-L5972)

```diff
- interface Float32Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
-     /**
-      * The size in bytes of each element in the array.
-      */
-     readonly BYTES_PER_ELEMENT: number;
- 
-     /**
-      * The ArrayBuffer instance referenced by the array.
-      */
-     readonly buffer: TArrayBuffer;
- 
-     /**
-      * The length in bytes of the array.
-      */
-     readonly byteLength: number;
- 
- ... (262 more removed lines; see GitHub link above)
+ deleteLobbyDbValue(key: string): void
```

#### 29. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5974-L5975` → after: `L1974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L1974) · [Before (L5974-L5975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L5974-L5975)

```diff
-  * A typed array of 64-bit float values. The contents are initialized to 0. If the requested
-  * number of bytes could not be allocated an exception is raised.
+  * Deletes all database values that are saved per lobby.
```

#### 30. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5977-L6275` → after: `L1976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L1976) · [Before (L5977-L6275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L5977-L6275)

```diff
- interface Float64Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
-     /**
-      * The size in bytes of each element in the array.
-      */
-     readonly BYTES_PER_ELEMENT: number;
- 
-     /**
-      * The ArrayBuffer instance referenced by the array.
-      */
-     readonly buffer: TArrayBuffer;
- 
-     /**
-      * The length in bytes of the array.
-      */
-     readonly byteLength: number;
- 
- ... (283 more removed lines; see GitHub link above)
+ deleteAllLobbyDbValues(): void
```

#### 31. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6277` → after: `L1978-L1980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1978-L1980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L1978-L1980) · [Before (L6277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L6277)

```diff
-  * Extracts the type of the 'this' parameter of a function type, or 'unknown' if the function type has no 'this' parameter.
+  * Gets a database value that is saved per player.
+  * @param playerId
+  * @param key
```

#### 32. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6279-L6280` → after: `L1982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L1982) · [Before (L6279-L6280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L6279-L6280)

```diff
- type ThisParameterType<T> = T extends (this: infer U, ...args: never) => any ? U : unknown;
- 
+ getPlayerDbValue(playerId: PlayerId, key: string): string | number | null
```

#### 33. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6282` → after: `L1984-L1988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1984-L1988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L1984-L1988) · [Before (L6282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L6282)

```diff
-  * Removes the 'this' parameter from a function type.
+  * Sets a database value that is saved per player. For custom games this persists between sessions and
+  * between lobbies, and is shared across all of the game's variations (e.g. a hub and its sub-modes).
+  * @param playerId
+  * @param key
+  * @param value
```

#### 34. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6284-L6285` → after: `L1990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L1990) · [Before (L6284-L6285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L6284-L6285)

```diff
- type OmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T;
- 
+ setPlayerDbValue(playerId: PlayerId, key: string, value: string | number): void
```

#### 35. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6287` → after: `L1992-L1994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1992-L1994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L1992-L1994) · [Before (L6287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L6287)

```diff
-  * Make all properties in T optional
+  * Deletes a database value that is saved per player.
+  * @param playerId
+  * @param key
```

#### 36. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6289-L6292` → after: `L1996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L1996) · [Before (L6289-L6292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L6289-L6292)

```diff
- type Partial<T> = {
-     [P in keyof T]?: T[P];
- };
- 
+ deletePlayerDbValue(playerId: PlayerId, key: string): void
```

#### 37. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6294` → after: `L1998-L1999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1998-L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L1998-L1999) · [Before (L6294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L6294)

```diff
-  * Make all properties in T required
+  * Deletes all database values that are saved per player, including persisted currencies.
+  * @param playerId
```

#### 38. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6296-L6299` → after: `L2001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2001) · [Before (L6296-L6299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L6296-L6299)

```diff
- type Required<T> = {
-     [P in keyof T]-?: T[P];
- };
- 
+ deleteAllPlayerDbValues(playerId: PlayerId): void
```

#### 39. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6301` → after: `L2003-L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2003-L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2003-L2014) · [Before (L6301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L6301)

```diff
-  * Make all properties in T readonly
+  * Dynamically define a currency for a player and show it on the HUD.
+  * Amounts will persist between sessions if \`persistent\` is set to true.
+  * Persistent currencies count towards db length limits.
+  *
+  * Example usage:
+  * \`\`\`js
+  * api.setCurrency(myId, "myCurrency", { amount: 100, icon: "coins", iconColour: "blue", persistent: true })
+  * \`\`\`
+  *
+  * @param playerId
+  * @param currencyId
+  * @param info - { amount, icon } are required (icon is an icon name such as "coins"); iconColour, persistent, hidden and subtext are optional
```

#### 40. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6303-L6306` → after: `L2016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2016) · [Before (L6303-L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L6303-L6306)

```diff
- type Readonly<T> = {
-     readonly [P in keyof T]: T[P];
- };
- 
+ setCurrency(playerId: PlayerId, currencyId: string, info: UgcCurrencyInfo): void
```

#### 41. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6308` → after: `L2018-L2020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2018-L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2018-L2020) · [Before (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L6308)

```diff
-  * From T, pick a set of properties whose keys are in the union K
+  * Delete a currency from a player. This will make the currency unknown to the player.
+  * @param playerId
+  * @param currencyId
```

#### 42. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6310-L6313` → after: `L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2022) · [Before (L6310-L6313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L6310-L6313)

```diff
- type Pick<T, K extends keyof T> = {
-     [P in K]: T[P];
- };
- 
+ deleteCurrency(playerId: PlayerId, currencyId: string): void
```

#### 43. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6315` → after: `L2024-L2028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2024-L2028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2024-L2028) · [Before (L6315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L6315)

```diff
-  * Construct a type with a set of properties K of type T
+  * Set the amount of a currency a player has. For persistent currencies, amount/subtext count towards db length limits.
+  * @param playerId
+  * @param currencyId
+  * @param amount
+  * @param subtext
```

#### 44. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6317-L6320` → after: `L2030-L2134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2030-L2134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2030-L2134) · [Before (L6317-L6320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L6317-L6320)

```diff
- type Record<K extends keyof any, T> = {
-     [P in K]: T;
- };
- 
+ setCurrencyAmount(playerId: PlayerId, currencyId: string, amount: number, subtext?: string | CustomTextStyling): void
+ /**
+  * Give a player an amount of currency. Can be negative to remove money.
+  * The currency must exist for the player first, or this throws: make it with setCurrency (with an icon), e.g. in onPlayerJoin.
+  * @param playerId
+  * @param currencyId
+  * @param amount
+  */
+ giveCurrencyAmount(playerId: PlayerId, currencyId: string, amount: number): void
+ /**
+  * Replace a world chunk with a chunk from a project schematic, including air and block data.
+  * Both positions are block coordinates selecting their containing 32-block chunk.
+  * Add schematics in the Code Editor. Missing paths or source chunks throw an error.
+  * @param schematicPath Project-relative path, including .bloxdschem.
+  * @param srcCoords Block coordinates in the schematic's chunk grid (including selection padding).
+  * @param destCoords Block coordinates in the world. Existing blocks are replaced without break drops.
+ ... (89 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6322` → after: `L2136-L2139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2136-L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2136-L2139) · [Before (L6322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L6322)

```diff
-  * Exclude from T those types that are assignable to U
+  * Get the status of a queued command.
+  *
+  * @param id The ID of the queued command to get the status of.
+  * @returns NOT_IN_QUEUE, WAITING_TO_RUN, or CURRENTLY_RUNNING.
```

#### 46. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6324-L6325` → after: `L2141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2141) · [Before (L6324-L6325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L6324-L6325)

```diff
- type Exclude<T, U> = T extends U ? never : T;
- 
+ getQueuedStatus(id: QueuedCommandId): QueuedStatusString
```

#### 47. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6327` → after: `L2143-L2145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2143-L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2143-L2145) · [Before (L6327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L6327)

```diff
-  * Extract from T those types that are assignable to U
+  * Remove a queued command from the queue.
+  *
+  * @param id The ID of the queued command to remove.
```

#### 48. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6329-L6330` → after: `L2147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2147) · [Before (L6329-L6330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L6329-L6330)

```diff
- type Extract<T, U> = T extends U ? T : never;
- 
+ removeFromQueue(id: QueuedCommandId): void
```
