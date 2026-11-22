# Changed — Bundle Modifications Report (Part 018 / 047)

- **Updated at**: `2026-11-22T23:29 JST`
- **Part**: `18 / 47` (**341** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 017](part-017.md) · [Part 019 →](part-019.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/78.js` (bqoxjr.2558012f → 3lwmg.ecbaa066 · continued)

- **File**: `bundles/bloxd.io/chunks/js/78.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521)

#### 7. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L111` → after: `L419-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L419-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/78.js#L419-L674) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/78.js#L111)

```diff
-         if (QQ.trim().startsWith("|") && LQ + 1 < FQ.length && /^\s*\|[\s:|-]+\|\s*$/.test(FQ[LQ + 1])) {
+         const vk = "## Glossary of Referenced Types";
+         const Ek = [{
+             id: "welcome",
+             slug: "",
+             title: "Welcome",
+             icon: "house",
+             summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
+             layout: "article",
+             markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Ge … [truncated]
+           }, ...sk.b.flatMap((kk => {
+             const ek = {
+               id: kk.id,
+               slug: Qk(kk.id),
+               title: kk.title,
+               markdown: kk.content,
+               ...uk[kk.id]
+ ... (240 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L113-L120` → after: `L676-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L676-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/78.js#L676-L701) · [Before (L113-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/78.js#L113-L120)

```diff
-             oQ = [];
-           for (LQ += 2; LQ < FQ.length && FQ[LQ].trim().startsWith("|");) oQ.push(mQ(FQ[LQ])), LQ++;
-           wQ.push({
-             kind: "table",
-             header: qQ,
-             rows: oQ
-           });
-           continue
+             ik = function(kk) {
+               const ek = new Map,
+                 ik = kk.find((kk => "_TypeOf" === kk.name));
+               let Dk = null;
+               const fk = () => {
+                 if (Dk) {
+                   const kk = Dk.lines.join("\n");
+                   ek.set(Dk.name, {
+                     text: kk,
+                     members: ke(kk),
+                     object: ee(kk)
+                   })
+                 }
+               };
+               for (const Sk of ik.lines.slice(1, -1)) {
+                 const kk = Sk.match(/^\t([\w$]+): (.+)$/);
+ ... (10 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L122` → after: `L703-L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L703-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/78.js#L703-L806) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/78.js#L122)

```diff
-         if (QQ.startsWith(">")) {
+         let Se, be, re;
+ 
+         function Pe() {
+           return be ??= function(kk) {
+             const ek = Jk(kk).find((kk => "GameApi" === kk.name)),
+               ik = new Map,
+               Dk = ek.lines;
+             for (let Sk = 0; Sk < Dk.length; Sk++) {
+               var fk;
+               if (!Dk[Sk].trimStart().startsWith("/**")) continue;
+               const kk = Sk;
+               for (; Sk < Dk.length && !Dk[Sk].includes("*/");) Sk++;
+               const ek = null === (fk = Dk[Sk + 1]) || void 0 === fk ? void 0 : fk.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
+               if (!ek) continue;
+               let bk = null;
+               const rk = [];
+ ... (88 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L124-L127` → after: `L808-L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L808-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/78.js#L808-L849) · [Before (L124-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/78.js#L124-L127)

```diff
-           for (; LQ < FQ.length && FQ[LQ].startsWith(">");) QQ.push(FQ[LQ].replace(/^>\s?/, "")), LQ++;
-           wQ.push({
-             kind: "quote",
-             blocks: bQ(QQ.join("\n"))
+           let ik = 0;
+           for (const Dk of kk.matchAll(le)) ek.push(kk.slice(ik, Dk.index), (0, Uk.jsx)(ye, {
+             colour: Dk[0]
+           }), Dk[0]), ik = Dk.index + Dk[0].length;
+           return ek.push(kk.slice(ik)), ek
+         }
+ 
+         function Le(kk) {
+           let {
+             href: ek,
+             children: ik
+           } = kk;
+           const fk = (0, Dk.useContext)(Ue);
+           if (ek.startsWith("#")) {
+             const kk = Bk(ek);
+             if (kk) return (0, Uk.jsx)(bk.b, {
+ ... (26 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L129-L138` → after: `L851-L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L851-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/78.js#L851-L852) · [Before (L129-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/78.js#L129-L138)

```diff
-           continue
-         }
-         if (uQ.test(QQ)) {
-           const qQ = [],
-             oQ = /^\s*\d+\./.test(QQ);
-           for (; LQ < FQ.length && !vQ(FQ[LQ]) && (uQ.test(FQ[LQ]) || /^\s+\S/.test(FQ[LQ]));) qQ.push(FQ[LQ]), LQ++;
-           wQ.push({
-             kind: "list",
-             ordered: oQ,
-             items: HQ(qQ)
+           if (me().has(ek)) return (0, Uk.jsx)(de, {
+             type: ek
```

#### 12. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L140-L163` → after: `L854-L866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L854-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/78.js#L854-L866) · [Before (L140-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/78.js#L140-L163)

```diff
-           continue
-         }
-         const kQ = [];
-         for (; LQ < FQ.length && !vQ(FQ[LQ]) && !/^\s*```/.test(FQ[LQ]) && !/^#{1,6}\s/.test(FQ[LQ]) && !FQ[LQ].startsWith(">") && !uQ.test(FQ[LQ]) && (!FQ[LQ].trim().startsWith("|") || 0 !== kQ.length);) kQ.push(FQ[LQ].trim()), LQ++;
-         0 === kQ.length && (kQ.push(FQ[LQ].trim()), LQ++), wQ.push({
-           kind: "paragraph",
-           text: kQ.join(" ")
-         })
-       }
-       return wQ
-     }
- 
-     function YQ(QQ) {
-       let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
-       const wQ = bQ(QQ);
-       let LQ = "";
- ... (8 more removed lines; see GitHub link above)
+           const fk = ne(ek);
+           if (fk) return (0, Uk.jsx)(bk.b, {
+             className: "DocsInlineCode DocsSymbolLink",
+             to: Tk(ik, ak(fk.pageId), fk.anchor),
+             children: ek
+           });
+           const Sk = pe(ek);
+           return (0, Uk.jsxs)("code", {
+             className: "DocsInlineCode",
+             children: [Sk && (0, Uk.jsx)(ye, {
+               colour: Sk
+             }), ek]
+           })
```

#### 13. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L165-L167` → after: `L868-L895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L868-L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/78.js#L868-L895) · [Before (L165-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/78.js#L165-L167)

```diff
-         if ("heading" === mQ.kind && 1 === mQ.level && !LQ) {
-           LQ = mQ.text;
-           continue
+ 
+         function Ae(kk) {
+           let {
+             text: ek
+           } = kk;
+           const ik = [];
+           let fk = 0;
+           for (const Dk of ek.matchAll(jk.g)) {
+             Dk.index > fk && ik.push(...Ye(ek.slice(fk, Dk.index)));
+             const [, kk, Sk, bk, rk, Pk] = Dk;
+             kk ? ik.push((0, Uk.jsx)(Ce, {
+               code: (0, jk.m)(kk, Sk)
+             })) : bk ? ik.push((0, Uk.jsx)("strong", {
+               children: (0, Uk.jsx)(Ae, {
+                 text: bk
+               })
+ ... (12 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L169-L174` → after: `L897-L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L897-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/78.js#L897-L930) · [Before (L169-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/78.js#L169-L174)

```diff
-         if ("heading" === mQ.kind && mQ.level <= FQ) {
-           oQ.push({
-             heading: mQ,
-             blocks: []
-           });
-           continue
+         const je = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
+           se = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);
+ 
+         function de(kk) {
+           let {
+             type: ek
+           } = kk;
+           const ik = me(),
+             fk = [];
+           for (const Dk of ek.trim().matchAll(je)) {
+             const [kk, ek, Sk, bk, rk] = Dk;
+             ek ? fk.push((0, Uk.jsx)("span", {
+               className: "DocsTypeString",
+               children: kk
+             })) : Sk && ik.has(Sk) ? fk.push((0, Uk.jsx)(Ie, {
+               name: Sk,
+ ... (18 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L176-L298` → after: `L932-L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L932-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/78.js#L932-L983) · [Before (L176-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/78.js#L176-L298)

```diff
-         const QQ = oQ.at(-1);
-         QQ ? QQ.blocks.push(mQ) : qQ.push(mQ)
-       }
-       const vQ = QQ => {
-         for (;
-           "rule" === (null === (FQ = QQ.at(-1)) || void 0 === FQ ? void 0 : FQ.kind);) {
-           var FQ;
-           QQ.pop()
-         }
-       };
-       vQ(qQ);
-       for (const mQ of oQ) vQ(mQ.blocks);
-       return {
-         title: LQ,
-         intro: qQ,
-         sections: oQ
- ... (107 more removed lines; see GitHub link above)
+         const Ve = 480,
+           Fe = 6,
+           ue = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
+         let qe = 0;
+ 
+         function Ie(kk) {
+           let {
+             name: ek,
+             definition: ik
+           } = kk;
+           const fk = (0, Dk.useContext)(Ue),
+             Sk = Me[ek],
+             rk = (0, Dk.useRef)(null),
+             Pk = (0, Dk.useRef)(null),
+             Mk = (0, Dk.useRef)(null),
+             [Kk, xk] = (0, Dk.useState)(!1),
+ ... (36 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L300-L364` → after: `L985-L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L985-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/78.js#L985-L1113) · [Before (L300-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/78.js#L300-L364)

```diff
-           }, FQ);
-         case "table":
-           return (0, oQ.jsxs)("table", {
-             children: [(0, oQ.jsx)("thead", {
-               children: (0, oQ.jsx)("tr", {
-                 children: QQ.header.map(((QQ, FQ) => (0, oQ.jsx)("th", {
-                   children: vQ(QQ)
-                 }, FQ)))
-               })
-             }), (0, oQ.jsx)("tbody", {
-               children: QQ.rows.map(((QQ, FQ) => (0, oQ.jsx)("tr", {
-                 children: QQ.map(((QQ, FQ) => (0, oQ.jsx)("td", {
-                   children: vQ(QQ)
-                 }, FQ)))
-               }, FQ)))
-             })]
- ... (49 more removed lines; see GitHub link above)
+           }), [Kk]), (0, Uk.jsxs)(Uk.Fragment, {
+             children: [(0, Uk.jsx)("button", {
+               type: "button",
+               ref: rk,
+               className: "DocsTypeLink",
+               "aria-expanded": Kk,
+               "aria-describedby": Kk ? yk : void 0,
+               onMouseEnter: Yk,
+               onMouseLeave: Lk,
+               onFocus: Yk,
+               onBlur: Lk,
+               onKeyDown: kk => {
+                 "Tab" === kk.key && !kk.shiftKey && Mk.current && (kk.preventDefault(), Mk.current.focus())
+               },
+               onClick: Yk,
+               children: ek
+ ... (113 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L366-L410` → after: `L1115-L1120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1115-L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/78.js#L1115-L1120) · [Before (L366-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/78.js#L366-L410)

```diff
-           if (wQ || /^\s*>/.test(LQ)) continue;
-           const QQ = LQ.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
-           FQ.push(...(0, qQ.r)(QQ))
-         }
-         return FQ
-       }(QQ).filter((QQ => kQ(QQ) || mQ.test(QQ) && !vQ.test(QQ)))
-     }
-     const bQ = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
-       YQ = [{
-         name: "Qwen3.6-27B",
-         temperature: .7,
-         reasoningEffort: "none"
-       }, {
-         name: "Qwen3.5-397B-A17B",
-         temperature: .7,
-         reasoningEffort: "none"
- ... (29 more removed lines; see GitHub link above)
+         };
+         var ae = ik(302),
+           We = ik(1946);
+ 
+         function te(kk) {
+           return kk.startsWith("fa-")
```

#### 18. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L412-L413` → after: `L1122-L1142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1122-L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/78.js#L1122-L1142) · [Before (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/78.js#L412-L413)

```diff
-       }
-     }
+         const Xe = {
+             text: "Text",
+             icon: "Icon",
+             progressBar: "Progress bar",
+             keyBinding: "Key binding",
+             other: "Other"
+           },
+           Be = {
+             text: "Text",
+             icon: {
+               icon: "Pixelated Heart"
+             },
+             progressBar: {
+               type: "ProgressBar",
+               progress: .5
+             },
+ ... (5 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L415-L419` → after: `L1144-L1269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1144-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/78.js#L1144-L1269) · [Before (L415-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/78.js#L415-L419)

```diff
-     function GQ(QQ, FQ, wQ) {
-       return new Promise(((qQ, oQ) => {
-         const DQ = new AbortController,
-           kQ = () => {
-             DQ.abort(), oQ((0, LQ.e)(wQ))
+         function ce(kk) {
+           return "string" === typeof kk ? "text" : "entityName" in kk || "translationKey" in kk ? "other" : (0, ae.wb)(kk) ? "progressBar" : (0, ae.tb)(kk) ? "keyBinding" : "icon" in kk ? "icon" : "str" in kk && "string" === typeof kk.str ? "text" : "other"
+         }
+         const Te = [{
+             path: ["style", "color"],
+             label: "Colour",
+             field: {
+               kind: "colour"
+             },
+             defaultText: "The surrounding text's"
+           }, {
+             path: ["style", "fontSize"],
+             label: "Font size",
+             field: {
+               kind: "size"
+             },
+ ... (110 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L421-L439` → after: `L1271-L1400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1271-L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/78.js#L1271-L1400) · [Before (L421-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/78.js#L421-L439)

```diff
-         if (null !== wQ && void 0 !== wQ && wQ.aborted) return void kQ();
-         null === wQ || void 0 === wQ || wQ.addEventListener("abort", kQ, {
-           once: !0
-         });
-         const vQ = YQ.map((() => !1));
-         let mQ = null;
-         const uQ = YQ.map((() => !1)),
-           HQ = YQ.map((() => !1));
-         YQ.forEach(((LQ, bQ) => {
-           const xQ = MQ(tQ, DQ.signal);
-           CQ(LQ, [{
-             role: "user",
-             content: QQ
-           }], xQ.signal).then((QQ => {
-             DQ.signal.aborted || ("busy" === QQ || "failed" === QQ ? (uQ[bQ] = "busy" === QQ, HQ[bQ] = !0) : null !== QQ && (null === mQ || bQ < mQ.rank) && (mQ = {
-               rank: bQ,
- ... (3 more removed lines; see GitHub link above)
+ 
+         function Ze(kk) {
+           return "string" === typeof kk ? {
+             str: kk
+           } : kk
+         }
+ 
+         function Oe(kk, ek) {
+           let ik = Ze(kk);
+           for (const Dk of ek) ik = ik && "object" === typeof ik ? ik[Dk] : void 0;
+           return ik
+         }
+ 
+         function ge(kk, ek, ik) {
+           const Dk = (kk, fk) => {
+             var Sk;
+ ... (114 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L441-L653` → after: `L1402-L1429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1402-L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/78.js#L1402-L1429) · [Before (L441-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/78.js#L441-L653)

```diff
-             }, FQ(mQ.answer)))
-           }), (QQ => {
-             DQ.signal.aborted || (HQ[bQ] = !0, console.warn(`Studio AI: ${LQ.name} couldn't be reached`, QQ))
-           })).finally((() => {
-             xQ.clear(), vQ[bQ] = !0, DQ.signal.aborted || (() => {
-               var QQ, FQ;
-               const LQ = null !== (QQ = null === (FQ = mQ) || void 0 === FQ ? void 0 : FQ.rank) && void 0 !== QQ ? QQ : YQ.length;
-               vQ.slice(0, LQ).includes(!1) || (null === wQ || void 0 === wQ || wQ.removeEventListener("abort", kQ), DQ.abort(), null !== mQ ? qQ({
-                 ...mQ.answer,
-                 isFinal: !HQ.slice(0, mQ.rank).includes(!0)
-               }) : oQ(new eQ(uQ.includes(!0) ? "busy" : "failed")))
-             })()
-           })).catch((QQ => {
-             console.error("Studio AI: showing an answer failed", QQ)
-           }))
-         }))
- ... (197 more removed lines; see GitHub link above)
+               return fk(), JSON.parse(ek)
+             }(kk.trim())
+           } catch (Dk) {
+             return {
+               parts: null,
+               error: Dk instanceof SyntaxError ? "This isn't a valid array yet." : Dk.message
+             }
+           }
+           if (!Array.isArray(ek)) return {
+             parts: null,
+             error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
+           };
+           const ik = ek.findIndex((kk => !Di(kk)));
+           return -1 !== ik ? {
+             parts: null,
+             error: `Part ${ik+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
+ ... (12 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L655-L700` → after: `L1431-L7296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1431-L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/78.js#L1431-L7296) · [Before (L655-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/78.js#L655-L700)

```diff
-           kQ = new RegExp(`(?:${FQ.source})`, `${LQ}y`).exec(QQ);
-         if (kQ) {
-           if (oQ.push(kQ), !FQ.global) return oQ;
-           qQ.lastIndex = DQ(kQ)
-         }
-         for (let vQ = qQ.exec(QQ); vQ; vQ = qQ.exec(QQ)) {
-           const wQ = bQ(QQ, FQ, vQ.index) - vQ.index;
-           if (vQ[0] = vQ[0].slice(wQ), vQ.index += wQ, oQ.push(vQ), !FQ.global) break;
-           qQ.lastIndex = DQ(vQ)
-         }
-         return oQ
-       }(QQ, FQ, wQ.notAfter) : function(QQ, FQ, wQ) {
-         const LQ = new RegExp(FQ.source, `${FQ.flags.replace(/[gy]/g,"")}g`),
-           qQ = [];
-         for (let oQ = LQ.exec(QQ); oQ; oQ = LQ.exec(QQ))
-           if (!wQ || wQ(oQ)) {
- ... (30 more removed lines; see GitHub link above)
+           Pi = {
+             progressBar: he.progressBar.Kk,
+             timedClick: he.timedClick.icon,
+             gravityBar: he.gravityBar.icon,
+             precisionBar: he.precisionBar.icon,
+             rhythmClick: he.rhythmClick.icon
+           };
+ 
+         function mi(kk) {
+           let {
+             type: ek
+           } = kk;
+           const [ik, fk] = (0, Dk.useState)("ready"), [bk, rk] = (0, Dk.useState)(1), [Pk, mk] = (0, Dk.useState)(!0), Mk = (0, Dk.useRef)(null), Kk = (0, Dk.useRef)(null), xk = (0, Dk.useRef)(null), nk = (0, Dk.useRef)(new Set), Hk = (0, Dk.useRef)(!1), lk = Pi[ek], pk = (0, Dk. … [truncated]
+             getState: () => {
+               var kk, ek;
+               return null !== (kk = null === (ek = xk.current) || void 0 === ek ? void 0 : ek.getState()) && void 0 !== kk ? kk : ri
+ ... (5850 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/79.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/79.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f54d083bb6358651e47b544398d230d705c325b9bec276d029b098b883336900)

#### 1. `bundles/bloxd.io/chunks/js/79.js` (Changed code · before: `L4` → after: `L4-L1326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f54d083bb6358651e47b544398d230d705c325b9bec276d029b098b883336900R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f54d083bb6358651e47b544398d230d705c325b9bec276d029b098b883336900) · [After (L4-L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/79.js#L4-L1326) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/79.js#L4)

```diff
-   4593: (QQ, FQ, wQ) => {
+   4668: kk => {
+     function ek(kk) {
+       return kk instanceof Map ? kk.clear = kk.delete = kk.set = function() {
+         throw new Error("map is read-only")
+       } : kk instanceof Set && (kk.add = kk.clear = kk.delete = function() {
+         throw new Error("set is read-only")
+       }), Object.freeze(kk), Object.getOwnPropertyNames(kk).forEach((ik => {
+         const Dk = kk[ik],
+           fk = typeof Dk;
+         "object" !== fk && "function" !== fk || Object.isFrozen(Dk) || ek(Dk)
+       })), kk
+     }
+     class ik {
+       constructor(kk) {
+         void 0 === kk.data && (kk.data = {}), this.data = kk.data, this.isMatchIgnored = !1
+       }
+ ... (1307 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/79.js` (Changed code · before: `L8-L17` → after: `L1330-L1337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f54d083bb6358651e47b544398d230d705c325b9bec276d029b098b883336900R1330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f54d083bb6358651e47b544398d230d705c325b9bec276d029b098b883336900) · [After (L1330-L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/79.js#L1330-L1337) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/79.js#L8-L17)

```diff
-     const LQ = '# Callbacks\n\nPlayers can use World Code in custom worlds get functions they\'ve written to run when game events happen. These special functions are called callbacks. The world code can be viewed by pressing F8 by default. Initially the world code will have this  … [truncated]
-       qQ = '# Client Options\n\nA player\'s "Client Options" impact what they are capable of doing in the world. For example you can give them a double jump by setting the player\'s `airJumpCount` to `1`. Alternatively their health bar can be increased by setting their `maxHealth … [truncated]
-       oQ = '# Entity Settings\n\nAn "Entity Setting" impacts how a player sees or interacts with another player or entity.\nE.g. Player 1 could have an otherEntitySetting for entity 2 as opacity set to 0.5. This means player 1 sees entity 2 as partly see-through. Player1 is the r … [truncated]
-       DQ = '# Mob Settings\n\nThese impact the behaviour of mobs, what they look like, and how they sound. These can either be set on a per-mob basis or the default can be set for all mobs of a particular type.\nThese API methods allow you to modify mob settings:\n\n```js\n/**\n  … [truncated]
-       kQ = '# Vehicle Settings\n\nA vehicle is something you get into and ride, like a boat or a kart. A physics type is a list of settings describing how something moves - its weight, speed, steering, and so on. The two are separate: riding a vehicle normally changes your physic … [truncated]
-       vQ = "# API Reference\n\n## addCustomKillfeedMessage\nAdd a custom killfeed message to the killfeed\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| killer | ` { eId: EntityId } \\| { name: string; colour: string } ` | The entity … [truncated]
-     var mQ = wQ(4597),
-       uQ = wQ(4605);
-     const HQ = '# How-Tos\n\nThis contains a quick list of tutorials for some features that may be harder to understand on first glance.\n\n## Variations\n\nCustom games now support *variations*, which allow you to create your own alterations of gameplay.\n\n### Custom Games\n\nI … [truncated]
-       bQ = '# Snippets\n\nShort pieces of code to copy into a code block and change to suit your world. In a code block or board, `myId` is the player who ran it. In World Code, use the player ID a callback is given instead.\n\n## Make the player jump\n\nSets the player\'s veloci … [truncated]
+     const Dk = "[A-Za-z$_][0-9A-Za-z$_]*",
+       fk = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugge … [truncated]
+       Sk = ["true", "false", "null", "undefined", "NaN", "Infinity"],
+       bk = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigU … [truncated]
+       rk = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
+       Pk = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
+       mk = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
+       Mk = [].concat(Pk, bk, rk);
```

#### 3. `bundles/bloxd.io/chunks/js/79.js` (Changed code · before: `L20` → after: `L1340-L1669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f54d083bb6358651e47b544398d230d705c325b9bec276d029b098b883336900R1340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f54d083bb6358651e47b544398d230d705c325b9bec276d029b098b883336900) · [After (L1340-L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/79.js#L1340-L1669) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/79.js#L20)

```diff
-       return QQ.split("\n").filter((QQ => QQ.startsWith("## "))).map((QQ => QQ.replace(/^## (.+)$/gm, "$1").trim()))
+       const ek = kk.regex,
+         ik = Dk,
+         Kk = "<>",
+         xk = "</>",
+         nk = {
+           tn: /<[A-Za-z0-9\\._:-]+/,
+           end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
+           isTrulyOpeningTag: (kk, ek) => {
+             const ik = kk[0].length + kk.index,
+               Dk = kk.input[ik];
+             if ("<" === Dk || "," === Dk) return void ek.ignoreMatch();
+             let fk;
+             ">" === Dk && (((kk, ek) => {
+               let {
+                 after: ik
+               } = ek;
+ ... (314 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/79.js` (Changed code · before: `L24-L112` → after: `L1673-L1724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f54d083bb6358651e47b544398d230d705c325b9bec276d029b098b883336900R1673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f54d083bb6358651e47b544398d230d705c325b9bec276d029b098b883336900) · [After (L1673-L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/79.js#L1673-L1724) · [Before (L24-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/79.js#L24-L112)

```diff
-       return QQ.split("\n").map(((QQ, FQ) => 0 === FQ ? QQ.trim() : QQ.trim().replace(/^# ?/gm, " "))).join("\n\n")
-     }
-     const AQ = [{
-       id: "readme",
-       title: "Getting started",
-       content: '# Getting started\n\nThere are three places to write JavaScript in Bloxd: code blocks, code boards and World Code. Code in any of them controls the game through `api`, in custom games and worlds. Only players who can edit code (the `canEditCode` client option) can … [truncated]
-     }, {
-       id: "snippets",
-       title: "Snippets",
-       content: bQ,
-       subsections: YQ(bQ)
-     }, {
-       id: "changelog",
-       title: "Changelog",
-       content: '# Changelog\n\nHere you can discover the latest changes to the API.\n\n### 17th November 2026\n- Added the [`highlightedHotbarSlots`](#clientOptions-highlightedHotbarSlots) client option, to make hotbar slots pulse and show a player which item to use, e.g. `api.se … [truncated]
-     }, {
- ... (73 more removed lines; see GitHub link above)
+       const ek = kk.regex,
+         ik = Kk(kk),
+         bk = Dk,
+         rk = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
+         Pk = {
+           tn: [/namespace/, /\s+/, kk.IDENT_RE],
+           beginScope: {
+             1: "keyword",
+             3: "title.class"
+           }
+         },
+         xk = {
+           beginKeywords: "interface",
+           end: /\{/,
+           excludeEnd: !0,
+           keywords: {
+ ... (36 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/80.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/80.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b112ff1a6dbdf96d201a514abb07f466726881ab373790e26ed025b59ab12d0e)

#### 1. `bundles/bloxd.io/chunks/js/80.js` (Changed code · before: `L4-L6` → after: `L4-L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b112ff1a6dbdf96d201a514abb07f466726881ab373790e26ed025b59ab12d0eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b112ff1a6dbdf96d201a514abb07f466726881ab373790e26ed025b59ab12d0e) · [After (L4-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/80.js#L4-L697) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/80.js#L4-L6)

```diff
-   4597: QQ => {
-     QQ.exports = '# Block Names (1533 blocks)\n#\n# Each block name listed below is the ROOT block - use it exactly as shown (no suffix).\n# Some blocks also have meta variants, indicated by codes in brackets.\n#\n# ROOT BLOCK: Use the block name exactly as listed (e.g. "Maple Do … [truncated]
-   }
+   4685: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => Dk,
+       g: () => bk,
+       h: () => wk,
+       i: () => Hk,
+       m: () => rk,
+       p: () => fk,
+       q: () => Sk,
+       u: () => Uk,
+       v: () => nk,
+       w: () => xk
+     });
+     const Dk = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;
+ 
+     function fk(kk) {
+ ... (678 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/81.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/81.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d4c6518bbd2663d88eccddc31efbae262afcd75f382e56320729aa2b4828a00c)

#### 1. `bundles/bloxd.io/chunks/js/81.js` (Changed code · before: `L4-L5` → after: `L4-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d4c6518bbd2663d88eccddc31efbae262afcd75f382e56320729aa2b4828a00cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d4c6518bbd2663d88eccddc31efbae262afcd75f382e56320729aa2b4828a00c) · [After (L4-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/81.js#L4-L112) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/81.js#L4-L5)

```diff
-   4605: QQ => {
-     QQ.exports = "# Item Names (1532 items)\n\nWood Pickaxe\nStone Pickaxe\nIron Pickaxe\nGold Pickaxe\nDiamond Pickaxe\nMoonstone Pickaxe\nGolem Pickaxe\nWood Axe\nStone Axe\nIron Axe\nGold Axe\nDiamond Axe\nMoonstone Axe\nArtisan Axe\nWood Spade\nStone Spade\nIron Spade\nGold S … [truncated]
+   4689: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => Hk
+     });
+     const Dk = '# Callbacks\n\nPlayers can use World Code in custom worlds get functions they\'ve written to run when game events happen. These special functions are called callbacks. The world code can be viewed by pressing F8 by default. Initially the world code will have this  … [truncated]
+       fk = '# Client Options\n\nA player\'s "Client Options" impact what they are capable of doing in the world. For example you can give them a double jump by setting the player\'s `airJumpCount` to `1`. Alternatively their health bar can be increased by setting their `maxHealth … [truncated]
+       Sk = '# Entity Settings\n\nAn "Entity Setting" impacts how a player sees or interacts with another player or entity.\nE.g. Player 1 could have an otherEntitySetting for entity 2 as opacity set to 0.5. This means player 1 sees entity 2 as partly see-through. Player1 is the r … [truncated]
+       bk = '# Mob Settings\n\nThese impact the behaviour of mobs, what they look like, and how they sound. These can either be set on a per-mob basis or the default can be set for all mobs of a particular type.\nThese API methods allow you to modify mob settings:\n\n```js\n/**\n  … [truncated]
+       rk = '# Vehicle Settings\n\nA vehicle is something you get into and ride, like a boat or a kart. A physics type is a list of settings describing how something moves - its weight, speed, steering, and so on. The two are separate: riding a vehicle normally changes your physic … [truncated]
+       Pk = "# API Reference\n\n## addCustomKillfeedMessage\nAdd a custom killfeed message to the killfeed\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| killer | ` { eId: EntityId } \\| { name: string; colour: string } ` | The entity … [truncated]
+     var mk = ik(4691),
+       Mk = ik(4699);
+     const Kk = '# How-Tos\n\nThis contains a quick list of tutorials for some features that may be harder to understand on first glance.\n\n## Variations\n\nCustom games now support *variations*, which allow you to create your own alterations of gameplay.\n\n### Custom Games\n\nI … [truncated]
+       xk = '# Snippets\n\nShort pieces of code to copy into a code block and change to suit your world. In a code block or board, `myId` is the player who ran it. In World Code, use the player ID a callback is given instead.\n\n## Make the player jump\n\nSets the player\'s veloci … [truncated]
+ 
+     function nk(kk) {
+ ... (93 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/82.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/82.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0bca5612384b6a1c14f5b4d5320f4cb71e8849c25929b9bb68ac327ffa9e417c)

#### 1. `bundles/bloxd.io/chunks/js/82.js` (Changed code · before: `L4-L4485` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0bca5612384b6a1c14f5b4d5320f4cb71e8849c25929b9bb68ac327ffa9e417cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0bca5612384b6a1c14f5b4d5320f4cb71e8849c25929b9bb68ac327ffa9e417c) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/82.js#L4-L5) · [Before (L4-L4485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/82.js#L4-L4485)

```diff
-   4610: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       default: () => LQ
-     });
-     const LQ = String.raw`export interface GameApi {
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
+   4691: kk => {
+     kk.exports = '# Block Names (1533 blocks)\n#\n# Each block name listed below is the ROOT block - use it exactly as shown (no suffix).\n# Some blocks also have meta variants, indicated by codes in brackets.\n#\n# ROOT BLOCK: Use the block name exactly as listed (e.g. "Maple Do … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/83.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/83.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4)

#### 1. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4-L23259` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/83.js#L4-L5) · [Before (L4-L23259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/83.js#L4-L23259)

```diff
-   36164: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => aQ,
-       c: () => lQ
-     });
-     var LQ = wQ(53),
-       qQ = wQ(1897),
-       oQ = wQ(36166),
-       DQ = wQ.n(oQ),
-       kQ = wQ(4388),
-       vQ = wQ(1873),
-       mQ = wQ(1447),
-       uQ = wQ(96),
-       HQ = wQ(114),
-       bQ = wQ(317),
-       YQ = wQ(1070),
- ... (23240 more removed lines; see GitHub link above)
+   4699: kk => {
+     kk.exports = "# Item Names (1532 items)\n\nWood Pickaxe\nStone Pickaxe\nIron Pickaxe\nGold Pickaxe\nDiamond Pickaxe\nMoonstone Pickaxe\nGolem Pickaxe\nWood Axe\nStone Axe\nIron Axe\nGold Axe\nDiamond Axe\nMoonstone Axe\nArtisan Axe\nWood Spade\nStone Spade\nIron Spade\nGold S … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/84.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/84.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc)

#### 1. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/84.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/84.js#L4-L7)

```diff
-   4619: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => pQ,
-       d: () => eQ
+   4707: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       default: () => Dk
```

#### 2. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L9-L1787` → after: `L8-L4485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L8-L4485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/84.js#L8-L4485) · [Before (L9-L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/84.js#L9-L1787)

```diff
-     var LQ = wQ(1317),
-       qQ = wQ(22);
-     var oQ = wQ(317);
-     var DQ = wQ(619);
-     var kQ = wQ(2313),
-       vQ = wQ(4621),
-       mQ = wQ(4642),
-       uQ = wQ(4657);
-     class HQ {
-       constructor(QQ, FQ, wQ, LQ, qQ, oQ) {
-         this.id = QQ, this.type = FQ, this.parameters = wQ, this.tearDownNotification = LQ, this.onDonePromise = qQ, this.resolveRequest = oQ
-       }
-     }
-     const bQ = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
-     class YQ {
-       constructor(QQ, FQ, wQ, LQ, qQ, oQ) {
- ... (1763 more removed lines; see GitHub link above)
+     const Dk = String.raw`export interface GameApi {
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

## `bloxd.io` · `bundles/bloxd.io/chunks/js/85.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/85.js` (104 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20)

#### 1. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L4-L6)

```diff
-   39967: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       startWasmPadGameplay: () => jQ
+   36064: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => tk,
+       f: () => ak
```

#### 2. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8-L19` → after: `L9-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L9-L29) · [Before (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L8-L19)

```diff
-     wQ(39969);
-     var LQ = wQ(39973),
-       qQ = wQ(39989),
-       oQ = wQ(1911),
-       DQ = wQ(40003),
-       kQ = wQ(4638),
-       vQ = wQ(4621),
-       mQ = wQ(40005),
-       uQ = wQ(40009),
-       HQ = wQ(4651),
-       bQ = wQ(40089),
-       YQ = wQ(2320),
+     var Dk = ik(60),
+       fk = ik(1893),
+       Sk = ik(36067),
+       bk = ik.n(Sk),
+       rk = ik(4482),
+       Pk = ik(1858),
+       mk = ik(1406),
+       Mk = ik(99),
+       Kk = ik(111),
+       xk = ik(314),
+       nk = ik(1021),
+       Uk = ik.n(nk),
+       Hk = ik(22),
+       wk = ik(1033),
+       lk = ik(1614),
+       pk = ik(1688),
+ ... (5 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21-L63` → after: `L31-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L31-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L31-L78) · [Before (L21-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L21-L63)

```diff
-       AQ = wQ(39978),
-       tQ = wQ(8596),
-       eQ = wQ(38642);
-     const MQ = QQ => {
-         const FQ = HQ.b.indexOf(QQ);
-         if (FQ < 0) throw new Error(`No core action "${QQ}"`);
-         return FQ
-       },
-       GQ = MQ("primary-fire"),
-       pQ = MQ("alt-fire"),
-       cQ = MQ("mid-fire"),
-       CQ = MQ("jump"),
-       SQ = MQ("ReloadGun"),
-       iQ = MQ("SwapCameraZoom"),
-       WQ = MQ("TouchAction1"),
-       RQ = {
- ... (27 more removed lines; see GitHub link above)
+       sk = ik(36075),
+       dk = ik(36104),
+       Vk = ik(1426),
+       Fk = ik(2423),
+       uk = ik(1172),
+       qk = ik(36121);
+     var Ik = ik(33721),
+       zk = ik(1264);
+     var Qk = ik(1066);
+     const vk = ik(36127),
+       Ek = ["enter", "t", "/"];
+     let hk = !1;
+ 
+     function ak() {
+       return hk || (0, pk.isTextEntry)(document.activeElement)
+     }
+ ... (32 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L65-L66` → after: `L80-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L80-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L80-L86) · [Before (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L65-L66)

```diff
-           qQ = () => {
-             wQ = !1, FQ.reset(), LQ(0, 0)
+           Dk = ik => {
+             const Dk = ek,
+               fk = Dk && (0, qk.d)(ik.changedTouches, Dk.id);
+             fk && (ik.preventDefault(), kk.scrollBy({
+               top: Dk.y - fk.clientY,
+               behavior: "instant"
+             }), Dk.y = fk.clientY)
```

#### 5. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L68-L77` → after: `L88-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L88-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L88-L93) · [Before (L68-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L68-L77)

```diff
-         return {
-           update: (qQ, oQ, vQ) => {
-             wQ || (QQ.discardPending(), wQ = !0);
-             const mQ = (0, AQ.o)(FQ, qQ, oQ, vQ, performance.now());
-             LQ(mQ.yawRadPerSec, mQ.pitchRadPerSec);
-             const uQ = QQ.drainLookDelta();
-             0 === uQ.PU && 0 === uQ.dU || (0, YQ.v)(kQ.I.PadLook, DQ.Cd.Gyro, uQ.PU, uQ.dU, 0)
-           },
-           release: qQ,
-           uninstall: qQ
+         return kk.addEventListener("touchstart", ik, {
+           passive: !0
+         }), kk.addEventListener("touchmove", Dk, {
+           passive: !1
+         }), () => {
+           kk.removeEventListener("touchstart", ik), kk.removeEventListener("touchmove", Dk)
```

#### 6. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L79-L87` → after: `L95-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L95-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L95-L139) · [Before (L79-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L79-L87)

```diff
-       },
-       zQ = () => {
-         const QQ = UQ();
-         return null !== QQ && 0 !== (NQ(QQ) & DQ.Gd.PadSneakToggled)
-       },
-       lQ = () => {
-         const QQ = (QQ => {
-           const FQ = QQ => function() {
-             return (0, bQ.d)(), QQ(...arguments)
+       }), [Zk]);
+       const [Ok, gk] = (0, Dk.useState)(!1), [Gk, Nk] = (0, Dk.useState)(!1), Rk = (0, Dk.useRef)(Ok), Jk = (0, Dk.useRef)(null), ke = (0, Dk.useRef)(!1), ee = (0, Dk.useRef)(null), ie = (0, Dk.useRef)(null), De = (0, Dk.useRef)(null), fe = (0, Dk.useRef)(Pe);
+       fe.current = Pe;
+       const Se = (0, Fk.n)();
+ 
+       function be() {
+         Yk.current = !1, nk(!1), ie.current.blur()
+       }
+ 
+       function re(kk) {
+         Rk.current = kk, gk(kk)
+       }
+ 
+       function Pe() {
+         const kk = ie.current.value;
+         ie.current.value = "", me(kk)
+ ... (29 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L89-L114` → after: `L141-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L141-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L141-L205) · [Before (L89-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L89-L114)

```diff
-           return {
-             primaryFireDown: FQ((() => (sQ(GQ), 0))),
-             primaryFireUp: FQ((() => {
-               rQ(GQ)
-             })),
-             altFireDown: FQ((() => (sQ(pQ), 0))),
-             altFireUp: FQ((() => {
-               rQ(pQ)
-             })),
-             jumpDown: FQ((() => {
-               IQ(CQ)
-             })),
-             specialActionDown: FQ((QQ => {
-               sQ(RQ[QQ])
-             })),
-             specialActionUp: FQ((QQ => {
- ... (10 more removed lines; see GitHub link above)
+           document.addEventListener("touchstart", kk, {
+             capture: !0
+           });
+           const ek = kk => {
+             (0, dk.g)(kk.target) && (Yk.current = !1, nk(!1))
+           };
+           document.addEventListener("mousedown", ek, {
+             capture: !0
+           });
+           const ik = () => {
+               clearTimeout(Jk.current), re(!0)
+             },
+             Dk = () => {
+               clearTimeout(Jk.current), Jk.current = setTimeout((() => {
+                 re(!1), Ke()
+               }), 4e3)
+ ... (49 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L116` → after: `L207-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L207-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L207-L222) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L116)

```diff
-             pickBlock: FQ((() => (IQ(cQ), TQ(QQ()))))
+             xk = () => {
+               mk = !0, Kk.unobserve(Pk), Kk.observe(Pk)
+             };
+           ee.current = xk;
+           const Uk = new MutationObserver(xk);
+           return Uk.observe(Pk, {
+             childList: !0,
+             subtree: !0
+           }), () => {
+             document.removeEventListener("keydown", rk, {
+               capture: !0
+             }), document.removeEventListener("touchstart", kk, {
+               capture: !0
+             }), document.removeEventListener("mousedown", ek, {
+               capture: !0
+             }), document.removeEventListener("pointerlockchange", Sk), ee.current = null, Uk.disconnect(), Kk.disconnect(), clearTimeout(Jk.current)
```

#### 9. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L118-L164` → after: `L224-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L224-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L224-L226) · [Before (L118-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L118-L164)

```diff
-         })(UQ);
-         let FQ = !1,
-           wQ = null;
-         const LQ = () => {
-           var QQ;
-           null === (QQ = wQ) || void 0 === QQ || QQ(), wQ = null
-         };
-         return {
-           bodies: () => QQ,
-           look: KQ(),
-           move: (QQ, wQ) => {
-             var qQ;
-             LQ();
-             const {
-               bits: oQ,
-               flips: kQ
- ... (31 more removed lines; see GitHub link above)
+         }), []), (0, yk.s)(ie, {
+           open: () => {
+             nk(!0)
```

#### 10. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L166-L168` → after: `L228-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L228-L229) · [Before (L166-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L166-L168)

```diff
-           isReplayMode: () => {
-             const QQ = UQ();
-             return null !== QQ && 0 !== (NQ(QQ) & DQ.Gd.Replay)
+           close: () => {
+             be()
```

#### 11. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L170-L172` → after: `L231-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L231-L232) · [Before (L170-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L170-L172)

```diff
-           isFreeCameraOn: () => {
-             const QQ = UQ();
-             return null !== QQ && 0 !== (NQ(QQ) & DQ.Gd.FreeCam)
+           submit: () => {
+             "" !== ie.current.value && Pe(), be()
```

#### 12. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L174-L177` → after: `L234-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L234-L235) · [Before (L174-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L174-L177)

```diff
-           targetsBlock: () => TQ(UQ()),
-           selectedSlotEmpty: () => {
-             var QQ;
-             return !(null !== (QQ = UQ()) && void 0 !== QQ && QQ.items.ym())
+           stepHistory: () => {
+             Me(1, !0)
```

#### 13. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L179-L181` → after: `L237-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L237-L238) · [Before (L179-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L179-L181)

```diff
-           pickBlockAllowed: () => !!oQ.b.get("creative") && !!oQ.b.get("canPickBlocks"),
-           scrollHotbar: QQ => {
-             OQ(DQ.yd.Hotbar, DQ.wd.Down | (QQ > 0 ? DQ.wd.Next : 0))
+           sendLine: kk => {
+             me(kk), be()
```

#### 14. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L183-L194` → after: `L240-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L240-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L240-L260) · [Before (L183-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L183-L194)

```diff
-           hasFullInventory: mQ.l,
-           hasLobbyTab: () => (0, eQ.b)({
-             lobbyLeaderboardInfo: oQ.b.get("lobbyLeaderboardInfo"),
-             lobbyManage: oQ.b.get("lobbyManage")
-           }),
-           contextActionInputs: () => {
-             var QQ, FQ, wQ, LQ;
-             const qQ = UQ();
-             return {
-               holdingGun: !1 !== (null === qQ || void 0 === qQ ? void 0 : qQ.localPlayerAlive()) && "Gun" === (null === qQ || void 0 === qQ || null === (QQ = qQ.items.ym()) || void 0 === QQ || null === (FQ = QQ.typeObj) || void 0 === FQ ? void 0 : FQ.type),
-               customButtons: null !== (wQ = oQ.b.get("customButtons")) && void 0 !== wQ ? wQ : null,
-               touchscreenActionButton: null !== (LQ = oQ.b.get("touchscreenActionButton")) && void 0 !== LQ ? LQ : null
+           selectNextChannel: () => {
+             jk.d.selectNextChannel()
+           }
+         }), (0, Dk.useEffect)((() => {
+           var kk;
+           (Yk.current = Sk, ie.current) && (Sk ? (Bk.current = 0, ie.current.focus()) : (ie.current.blur(), null === (kk = ee.current) || void 0 === kk || kk.call(ee)))
+         }), [Sk]),
+         function(kk, ek) {
+           (0, Dk.useLayoutEffect)((() => {
+             if (!ek) return;
+             Ik.e.hold();
+             const ik = kk.current.closest(".InGameHeaderAndChat"),
+               Dk = (0, zk.c)((kk => {
+                 let {
+                   top: ek,
+                   height: Dk
+ ... (5 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L197-L198` → after: `L598-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L598-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L598-L796) · [Before (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L197-L198)

```diff
-           pressTouchButton: QQ => {
-             QQ ? sQ(WQ) : rQ(WQ)
+           onPointerMove: kk => {
+             const ik = lk.current;
+             if (!ik) return;
+             const Dk = "right" === ek ? ik.start - kk.clientX : yk(kk) - ik.start;
+             Uk(Math.min(ik.maxSize, Math.max(ik.minSize, ik.startSize + Dk)))
+           },
+           onPointerUp: Yk,
+           onPointerCancel: Yk,
+           onLostPointerCapture: Yk
+         }), Mk && (0, rk.jsx)(bk.n, {
+           className: "ResizableSidePanelClose",
+           onClick: Mk
+         })]
+       })
+     }
+   },
+ ... (183 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L201-L207` → after: `L803-L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L803-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L803-L806) · [Before (L201-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L201-L207)

```diff
-       },
-       jQ = () => {
-         const QQ = (0, qQ.e)(lQ()),
-           FQ = (0, LQ.d)(),
-           wQ = null;
-         return () => {
-           QQ(), FQ(), null === wQ || void 0 === wQ || wQ()
+       }
+       subscribe(kk) {
+         return this.listeners.add(kk), () => {
+           this.listeners.delete(kk)
```

#### 17. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L211` → after: `L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L822) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L211)

```diff
-   4638: (QQ, FQ, wQ) => {
+   36475: (kk, ek, ik) => {
```

#### 18. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L213-L215` → after: `L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L824) · [Before (L213-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L213-L215)

```diff
-       Ab: () => zQ,
-       B: () => LQ,
-       Eb: () => IQ,
+       C: () => xk,
```

#### 19. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L217-L222` → after: `L826-L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L826-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L826-L827) · [Before (L217-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L217-L222)

```diff
-       I: () => tQ,
-       Ib: () => TQ,
-       L: () => gQ,
-       Lb: () => UQ,
-       Nb: () => AQ,
-       O: () => uQ,
+       J: () => jk,
+       M: () => sk,
```

#### 20. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L224-L237` → after: `L829-L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L829-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L829-L831) · [Before (L224-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L224-L237)

```diff
-       Qb: () => iQ,
-       U: () => mQ,
-       Ub: () => SQ,
-       Vb: () => NQ,
-       Y: () => eQ,
-       Zb: () => XQ,
-       ab: () => vQ,
-       bc: () => KQ,
-       cc: () => lQ,
-       db: () => xQ,
-       dc: () => jQ,
-       e: () => EQ,
-       eb: () => YQ,
-       fc: () => cQ,
+       c: () => Uk,
+       f: () => Pk,
+       g: () => Hk,
```

#### 21. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L239-L241` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L833) · [Before (L239-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L239-L241)

```diff
-       hb: () => WQ,
-       i: () => bQ,
-       jc: () => CQ,
+       k: () => rk,
```

#### 22. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L243-L249` → after: `L835-L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L835-L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L835-L836) · [Before (L243-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L243-L249)

```diff
-       lb: () => OQ,
-       mc: () => VQ,
-       n: () => hQ,
-       nc: () => qQ,
-       ob: () => sQ,
-       pb: () => RQ,
-       qb: () => rQ,
+       m: () => nk,
+       o: () => wk,
```

#### 23. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L251-L256` → after: `L838-L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L838-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L838-L839) · [Before (L251-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L251-L256)

```diff
-       rc: () => nQ,
-       ub: () => fQ,
-       v: () => MQ,
-       wb: () => aQ,
-       x: () => DQ,
-       z: () => kQ
+       u: () => Fk,
+       y: () => dk
```

#### 24. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L258-L478` → after: `L841-L2523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L841-L2523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L841-L2523) · [Before (L258-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L258-L478)

```diff
-     const LQ = 32,
-       qQ = 33.333333333333336,
-       oQ = {
-         AbiVersion: 0,
-         Status: 1,
-         LastError: 2,
-         ErrorCount: 3,
-         FrameIndex: 4,
-         TicksRun: 5,
-         TicksDropped: 6,
-         Alpha: 7,
-         NetOutPtr: 8,
-         NetOutLen: 9,
-         WorkerOutPtr: 10,
-         WorkerOutLen: 11,
-         EventsPtr: 12,
- ... (205 more removed lines; see GitHub link above)
+     var Dk = ik(36463),
+       fk = ik(36471);
+     const Sk = "bloxd-world-code-directory-sync",
+       bk = "handles",
+       rk = "[INVALID SCHEMATIC PLACEHOLDER]";
+ 
+     function Pk(kk, ek) {
+       return `${kk}::${ek}`
+     }
+     const mk = new Set(["node_modules", ".git"]);
+ 
+     function Mk() {
+       return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
+     }
+ 
+     function Kk() {
+ ... (1667 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L481-L484` → after: `L3473-L3474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R3473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L3473-L3474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L3473-L3474) · [Before (L481-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L481-L484)

```diff
-         ToggleRecording: 0,
-         SaveClip: 1,
-         ViewerOpened: 2,
-         ViewerClosed: 3
+         initialDelayMs: 400,
+         intervalMs: 100
```

#### 26. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L486-L489` → after: `L3476-L4786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R3476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L3476-L4786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L3476-L4786) · [Before (L486-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L486-L489)

```diff
-       NQ = {
-         Clip: 0,
-         Recording: 1,
-         Edited: 2
+       Ni = () => {
+         const kk = (0, Bi.h)();
+         return kk ? kk.getPadRepeatTiming(Gi) : Gi
+       };
+ 
+     function Ri(kk, ek, ik) {
+       var Dk, fk;
+       const Sk = (0, Mi.v)(ek, kk);
+       let bk = null === (Dk = ek[kk]) || void 0 === Dk ? void 0 : Dk.description;
+       if (ik && (null === (fk = (0, Oi.g)().get(kk)) || void 0 === fk || !fk.hideIngredients)) {
+         bk ? (bk = (0, sk.db)(bk), bk.push({
+           str: "\n"
+         })) : bk = [], bk.push({
+           str: "\n"
+         }), bk.push({
+           str: "Can be crafted from:\n"
+ ... (1295 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L491-L507` → after: `L4788-L4790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R4788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L4788-L4790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L4788-L4790) · [Before (L491-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L491-L507)

```diff
-       TQ = {
-         RecordingStarted: 0,
-         RecordingStopped: 1,
-         RecordingDiscarded: 2,
-         ClipSaved: 3,
-         ClipEmpty: 4,
-         ClippingNotOn: 5,
-         Disallowed: 6,
-         ClippingOn: 7,
-         ClippingOff: 8,
-         LimitReached: 9,
-         ClipSettingsChanged: 10,
-         SaveBusy: 11,
-         CloseViewerFirst: 12,
-         FileDiscarded: 13,
-         SaveFailed: 14,
- ... (1 more removed lines; see GitHub link above)
+       Chestplate: {
+         sprite: "empty_armor_slot_chestplate",
+         image: qD
```

#### 28. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L509-L513` → after: `L4792-L4794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R4792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L4792-L4794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L4792-L4794) · [Before (L509-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L509-L513)

```diff
-       KQ = {
-         Cleared: 0,
-         Text: 1,
-         Int: 2,
-         Double: 3
+       Gauntlets: {
+         sprite: "empty_armor_slot_gauntlets",
+         image: ID
```

#### 29. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L515-L519` → after: `L4796-L4798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R4796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L4796-L4798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L4796-L4798) · [Before (L515-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L515-L519)

```diff
-       zQ = 65535,
-       lQ = {
-         FlyingText: 1,
-         PlayerKilled: 2,
-         Killfeed: 3
+       Leggings: {
+         sprite: "empty_armor_slot_leggings",
+         image: ik(19790)
```

#### 30. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L521-L731` → after: `L4800-L5944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R4800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L4800-L5944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L4800-L5944) · [Before (L521-L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L521-L731)

```diff
-       jQ = {
-         None: 0,
-         Paused: 1,
-         Playing: 2,
-         Cropping: 3,
-         Loading: 4
-       },
-       aQ = 2,
-       XQ = {
-         UiText: 0,
-         Environment: 6,
-         Hud: 12,
-         Count: 19
-       },
-       fQ = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShi … [truncated]
-       VQ = {
- ... (195 more removed lines; see GitHub link above)
+       Boots: {
+         sprite: "empty_armor_slot_boots",
+         image: uD
+       }
+     };
+ 
+     function QD(kk) {
+       const {
+         sprite: ek,
+         image: ik
+       } = zD[kk];
+       return Ze(ek, ce.g.ITEM, ik)
+     }
+ 
+     function vD(kk) {
+       let {
+ ... (1129 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L733-L757` → after: `L5946-L6085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R5946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L5946-L6085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L5946-L6085) · [Before (L733-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L733-L757)

```diff
-       EQ = 8,
-       nQ = {
-         GameCodeMessage: 4,
-         NewOtherEntitySettings: 23,
-         NewClientOptions: 37,
-         Chat: 64,
-         UiRequestPopup: 8,
-         TaskProgress: 9,
-         CustomKillfeed: 15,
-         TopRightHelper: 24,
-         NewUiRequest: 51,
-         PlayerKilled: 61,
-         OverShopInfo: 43,
-         ShowShopTutorial: 76,
-         SetCookie: 0,
-         LeaveValues: 85,
- ... (9 more removed lines; see GitHub link above)
+       xf = (0, fk.memo)((function(kk) {
+         var ek, ik;
+         let {
+           show: Dk,
+           onOpen: Sk,
+           onClose: rk
+         } = kk;
+         const {
+           t: Pk
+         } = (0, Gk.D)(), [Kk, xk] = (0, fk.useState)(null), [Uk, Hk] = (0, fk.useState)(0);
+         (0, jk.c)("OpenDiscordReportBox", (kk => {
+           mk.gameBridge.send("requestDiscordReportKey", kk), xk(null), Hk(0), Sk()
+         })), (0, jk.c)("setDiscordReportKey", xk);
+         const wk = Dk && null === Kk;
+         (0, fk.useEffect)((() => {
+           if (!wk) return;
+ ... (124 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L759` → after: `L6087-L22790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R6087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L6087-L22790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L6087-L22790) · [Before (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L759)

```diff
-       gQ = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
+       Hf = (0, fk.memo)((function(kk) {
+         let {
+           show: ek,
+           onOpen: ik,
+           onClose: Dk
+         } = kk;
+         const [Sk, rk] = (0, fk.useState)(null), Pk = (0, fk.useRef)(0), Kk = (0, fk.useRef)(null), {
+           t: xk
+         } = (0, Gk.D)();
+         (0, jk.c)("EditCustomLobbyBlock", (kk => {
+           let {
+             pos: ek
+           } = kk;
+           rk(ek), null !== ek && ik(), Kk.current.scrollTo(0, Pk.current)
+         }));
+         const nk = kk => {
+ ... (16688 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L761` → after: `L22792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L22792) · [Before (L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L761)

```diff
-   4621: (QQ, FQ, wQ) => {
+   36550: (kk, ek, ik) => {
```

#### 34. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L763-L768` → after: `L22794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L22794) · [Before (L763-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L763-L768)

```diff
-       A: () => sQ,
-       B: () => MQ,
-       F: () => DQ,
-       H: () => kQ,
-       I: () => WQ,
-       d: () => iQ,
+       b: () => Mk,
```

#### 35. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L772-L777` → after: `L22797-L22798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22797-L22798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L22797-L22798) · [Before (L772-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L772-L777)

```diff
-       k: () => eQ,
-       n: () => CQ,
-       r: () => GQ,
-       v: () => cQ,
-       x: () => RQ,
-       y: () => OQ
+       j: () => rk,
+       n: () => Kk
```

#### 36. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L779` → after: `L22800-L22802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22800-L22802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L22800-L22802) · [Before (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L779)

```diff
-     var LQ = wQ(4626);
+     var Dk = ik(36546),
+       fk = ik(36552),
+       Sk = ik(694);
```

#### 37. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L781-L783` → after: `L22804-L22807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22804-L22807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L22804-L22807) · [Before (L781-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L781-L783)

```diff
-       lockPointer: () => !1,
-       unlockPointer: () => {},
-       leaveGame: () => {}
+       description: "Bloxd Replay",
+       accept: {
+         [Dk.i]: Dk.e
+       }
```

#### 38. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L792` → after: `L22811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L22811) · [Before (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L792)

```diff
-       return oQ
+       return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker && !(0, Sk.b)()
```

#### 39. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L805-L806` → after: `L22815-L22829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22815-L22829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L22815-L22829) · [Before (L805-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L805-L806)

```diff
-       return vQ.add(QQ), () => {
-         vQ.delete(QQ)
+       return kk instanceof DOMException && "AbortError" === kk.name
+     }
+     async function mk() {
+       try {
+         const [kk] = await window.showOpenFilePicker({
+           multiple: !1,
+           types: [bk]
+         }), ek = await kk.getFile();
+         return {
+           handle: kk,
+           bytes: new Uint8Array(await ek.arrayBuffer())
+         }
+       } catch (kk) {
+         if (Pk(kk)) return null;
+         throw kk
```

#### 40. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L809-L812` → after: `L22832-L22843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22832-L22843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L22832-L22843) · [Before (L809-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L809-L812)

```diff
- 
-     function MQ(QQ, FQ) {
-       for (const LQ of vQ) try {
-         LQ(QQ)
+     async function Mk(kk) {
+       if (kk && await async function(kk) {
+           const ek = {
+             mode: "readwrite"
+           };
+           return "granted" === await kk.queryPermission(ek) || "granted" === await kk.requestPermission(ek)
+         }(kk)) return kk;
+       try {
+         return await window.showSaveFilePicker({
+           suggestedName: (0, Dk.p)(),
+           types: [bk]
+         })
```

#### 41. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L814` → after: `L22845-L22846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22845-L22846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L22845-L22846) · [Before (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L814)

```diff
-         FQ(wQ)
+         if (Pk(ek)) return null;
+         throw ek
```

#### 42. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L819-L821` → after: `L22857-L22904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22857-L22904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L22857-L22904) · [Before (L819-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L819-L821)

```diff
-       return mQ.add(QQ), () => {
-         mQ.delete(QQ)
-       }
+       return (0, Dk.l)((0, fk.f)(kk))
+     }
+   },
+   35977: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => Kk
+     });
+     var Dk = ik(22),
+       fk = ik(99),
+       Sk = ik(38),
+       bk = ik(672),
+       rk = ik(3419),
+       Pk = ik(6505);
+     const mk = "shaderPackListingCheckedAt",
+       Mk = 36e5;
+ 
+ ... (32 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L825-L831` → after: `L22918-L22923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22918-L22923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L22918-L22923) · [Before (L825-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L825-L831)

```diff
-       const wQ = uQ < 0 ? 0 : QQ - uQ;
-       uQ = QQ;
-       for (const qQ of mQ) try {
-         qQ(wQ)
-       } catch (LQ) {
-         FQ(LQ)
-       }
+       var ik, Pk, mk;
+       if (!fk.b.get("isKeydownEnabled") || kk.repeat) return;
+       const Mk = kk.code;
+       "Escape" === kk.key ? (0, bk.k)(kk) : null !== (ik = rk.u.OpenSettings) && void 0 !== ik && ik.includes(Mk) ? (0, bk.A)(kk, Dk.r.SETTINGS) : null !== (Pk = rk.u.OpenCharacterCustomization) && void 0 !== Pk && Pk.includes(Mk) ? (0, Sk.c)() || (0, bk.A)(kk, Dk.r.CUSTOMISATION … [truncated]
+         showDebugOverlay: !fk.b.get("showDebugOverlay")
+       })
```

#### 44. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L835-L837` → after: `L22936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L22936) · [Before (L835-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L835-L837)

```diff
-       return HQ.add(QQ), () => {
-         HQ.delete(QQ)
-       }
+       return `${bk}${kk}`
```

#### 45. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L841-L843` → after: `L22940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L22940) · [Before (L841-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L841-L843)

```diff
-       return bQ.add(QQ), () => {
-         bQ.delete(QQ)
-       }
+       return kk.startsWith(rk("game-server-"))
```

#### 46. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L848` → after: `L22944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L22944) · [Before (L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L848)

```diff
-       SQ += QQ
+       return /^game-server-[a-z0-9-]+\.bloxd\.io$/i.test(kk)
```

#### 47. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L850-L853` → after: `L22946-L22968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22946-L22968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L22946-L22968) · [Before (L850-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L850-L853)

```diff
- 
-     function WQ() {
-       const QQ = SQ;
-       return SQ = 0, QQ
+     var Mk = ik(1220),
+       Kk = ik(1207),
+       xk = ik(26),
+       nk = ik(1187),
+       Uk = ik(1735),
+       Hk = ik(1767),
+       wk = ik(2894),
+       lk = ik(1291),
+       pk = ik(1302),
+       yk = ik(1459),
+       Yk = ik(1177),
+       Lk = ik(35986),
+       Ck = ik(38),
+       Ak = ik(131),
+       jk = ik(36011);
+     const sk = "gameServerRoute";
+ ... (7 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L857-L858` → after: `L23119-L23211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23119-L23211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23119-L23211) · [Before (L857-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L857-L858)

```diff
-       return AQ.add(QQ), () => {
-         AQ.delete(QQ)
+       return async (ek, ik, bk, rk, mk) => {
+         let Kk;
+         if ((0, Dk.F)(bk)) {
+           if (mk.aborted) return qk();
+           const kk = await Ik(ek, ik, rk);
+           if (mk.aborted || wk.e.matchmakingEnded(kk.isError() ? null : performance.now()), kk.isError()) {
+             const ek = kk.asError();
+             return console.log("Join room did not succeed, reason:", ek.message), ek.forward()
+           }
+           Kk = kk.getValue()
+         } else {
+           wk.e.skipPlayWait();
+           const kk = zk(bk.replace("https://", "").replace("http://", ""));
+           if (kk.isError()) return kk.asError().forward();
+           Kk = {
+             endpoint: kk.getValue(),
+ ... (77 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L863-L865` → after: `L23216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23216) · [Before (L863-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L863-L865)

```diff
-       return tQ.add(QQ), () => {
-         tQ.delete(QQ)
-       }
+       null !== kk && Vk.afterAliasJoinLeft(performance.now() - kk)
```

#### 50. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L869` → after: `L23220-L23245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23220-L23245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23220-L23245) · [Before (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L869)

```diff
-       YQ = 0, xQ = 0, uQ = -1
+       return Mk.d.errorWithCode("Left the game while it loaded", Sk.n.REQUEST_TO_MATCHMAKING, {
+         severity: "low",
+         Ji: !0
+       })
+     }
+     async function Ik(kk, ek, ik) {
+       return (0, Dk.F)(kk) || kk instanceof fk.c || !(kk.length > Kk.M) ? await yk.b.matchmakePlayer(ik, kk, ek, (0, Lk.d)()).then((kk => {
+         if (!1 === kk.succeeded) return Mk.d.errorWithCode(kk.failReason, Sk.n.REQUEST_TO_MATCHMAKING, {
+           severity: "low"
+         });
+         const {
+           gameServerHost: ek,
+           lobbyName: ik,
+           gameNameWithVariation: Dk
+         } = kk, fk = zk(Vk.hostFor(ek));
+         return fk.isError() ? fk.asError().forward() : Mk.d.value({
+ ... (10 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L873-L876` → after: `L23313-L23315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23313-L23315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23313-L23315) · [Before (L873-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L873-L876)

```diff
-       if ("paced" === QQ) return xQ += FQ, null;
-       if ("drawn" !== QQ && "skipped" !== QQ) return null;
-       const wQ = FQ + xQ;
-       return xQ = 0, wQ
+       for (let ik = 0; ik < kk.length; ik++)
+         if (kk[ik].identifier === ek) return kk[ik];
+       return null
```

#### 52. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L879-L909` → after: `L23318-L23319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23318-L23319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23318-L23319) · [Before (L879-L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L879-L909)

```diff
-     function IQ(QQ, FQ, wQ, qQ) {
-       const oQ = (0, LQ.h)(FQ),
-         DQ = QQ > 0 ? performance.now() : 0;
-       for (let LQ = 0; LQ < QQ; LQ++)
-         for (const QQ of AQ) try {
-           QQ()
-         } catch (kQ) {
-           qQ(kQ)
-         }
-       if (QQ > 0 && iQ(performance.now() - DQ), null !== wQ) {
-         for (const QQ of HQ) try {
-           QQ(wQ)
-         } catch (kQ) {
-           qQ(kQ)
-         }
-         YQ += wQ
- ... (15 more removed lines; see GitHub link above)
+     function fk(kk, ek) {
+       return null !== Dk(kk, ek)
```

#### 53. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L912-L968` → after: `L23326-L23331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23326-L23331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23326-L23331) · [Before (L912-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L912-L968)

```diff
-   4632: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       $: () => XQ,
-       $b: () => qQ.k,
-       $c: () => LQ.fc,
-       Ab: () => rQ,
-       Ac: () => LQ.Eb,
-       Ad: () => kF,
-       B: () => yQ,
-       Cc: () => LQ.Ib,
-       D: () => LQ.h,
-       Db: () => OQ,
-       Dd: () => AF,
-       G: () => mQ,
-       Gc: () => LQ.Lb,
-       H: () => LQ.i,
- ... (41 more removed lines; see GitHub link above)
+   36489: (kk, ek, ik) => {
+     ik.d(ek, {
+       A: () => Ek,
+       E: () => hk,
+       H: () => Qk,
+       K: () => ak,
```

#### 54. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L972-L985` → after: `L23334-L23335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23334-L23335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23334-L23335) · [Before (L972-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L972-L985)

```diff
-       ed: () => tQ,
-       fb: () => LQ.I,
-       fc: () => LQ.hb,
-       gd: () => vF,
-       h: () => WQ,
-       hb: () => hQ,
-       hc: () => LQ.lb,
-       hd: () => aQ,
-       ib: () => ZQ,
-       id: () => fQ,
-       jb: () => LQ.O,
-       jc: () => LQ.ob,
-       jd: () => jQ,
-       kb: () => QF,
+       i: () => rk,
+       j: () => zk,
```

#### 55. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L987-L1001` → after: `L23337-L23339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23337-L23339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23337-L23339) · [Before (L987-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L987-L1001)

```diff
-       m: () => LQ.e,
-       mc: () => LQ.pb,
-       md: () => JQ,
-       n: () => bF,
-       nb: () => wF,
-       oc: () => LQ.qb,
-       pb: () => LQ.Q,
-       q: () => sQ,
-       qd: () => VQ,
-       rb: () => qQ.g,
-       sb: () => iQ,
-       sc: () => LQ.Ab,
-       t: () => DQ,
-       tc: () => xF,
-       td: () => nQ,
+       p: () => Ck,
+       s: () => Ik,
+       u: () => qk,
```

#### 56. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1003-L1007` → after: `L23341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23341) · [Before (L1003-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1003-L1007)

```diff
-       vc: () => uF,
-       wb: () => lQ,
-       wd: () => EQ,
-       xc: () => qF,
-       z: () => YF
+       y: () => vk
```

#### 57. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1009-L1017` → after: `L23343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23343) · [Before (L1009-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1009-L1017)

```diff
-     var LQ = wQ(4638),
-       qQ = wQ(2313);
-     const oQ = Math.round(1e3 / LQ.nc),
-       DQ = 4,
-       kQ = 2;
- 
-     function vQ() {
-       return crypto.getRandomValues(new Uint32Array(kQ))
-     }
+     var Dk = ik(38);
```

#### 58. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1019-L1021` → after: `L23345-L23346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23345-L23346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23345-L23346) · [Before (L1019-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1019-L1021)

```diff
-         Ok: 0,
-         Errors: 1,
-         Fatal: 2
+         codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
+         worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
```

#### 59. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1023` → after: `L23348-L23352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23348-L23352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23348-L23352) · [Before (L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1023)

```diff
-       uQ = 16,
+       Sk = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
+       bk = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
+       rk = Sk.filter((kk => "docsButton" !== kk)),
+       Pk = bk.filter((kk => "aiHelperButton" !== kk)),
+       mk = "codeEditorTutorials",
```

#### 60. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1025-L1026` → after: `L23354-L23355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23354-L23355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23354-L23355) · [Before (L1025-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1025-L1026)

```diff
-         Draws: 1,
-         NetAll: 2
+         codeBlockIntro: "codeBlockIntroShown",
+         worldCodeIntro: "worldCodeIntroShown"
```

#### 61. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1029-L1031` → after: `L23358-L23360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23358-L23360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23358-L23360) · [Before (L1029-L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1029-L1031)

```diff
-         ShowFog: 1,
-         Lighting: 2,
-         ChunkFade: 4
+         welcome: "welcomeComplete",
+         docsOverview: "docsOverviewComplete",
+         aiHelperOverview: "aiHelperOverviewComplete"
```

#### 62. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1035` → after: `L23392-L23396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23392-L23396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23392-L23396) · [Before (L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1035)

```diff
-       return (QQ.nametagsHidden ? CQ.NametagsHidden : 0) | (QQ.crouchToggle ? CQ.CrouchToggle : 0) | (QQ.bhopDisabled ? CQ.BhopDisabled : 0) | (QQ.disableBobbing ? CQ.DisableBobbing : 0) | (QQ.ezTowering ? CQ.EzTowering : 0) | (QQ.ezBridging ? CQ.EzBridging : 0) | (QQ.showChunkBo … [truncated]
+       const ek = Yk();
+       ek[kk] || (xk = {
+         ...ek,
+         [kk]: !0
+       }, Dk.f.setItem(mk, xk))
```

#### 63. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1074` → after: `L23400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23400) · [Before (L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1074)

```diff
-       return (QQ.showFog ? bQ.ShowFog : 0) | (QQ.lighting ? bQ.Lighting : 0) | (QQ.chunkFade ? bQ.ChunkFade : 0)
+       return "docsOverview" === kk ? Sk : "aiHelperOverview" === kk ? bk : nk ? fk[nk] : []
```

#### 64. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1076-L1111` → after: `L23402-L23463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23402-L23463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23402-L23463) · [Before (L1076-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1076-L1111)

```diff
-     const cQ = {
-         ResetFirst: 1,
-         AdStart: 2,
-         PreventMovement: 4,
-         AdEnd: 8,
-         PayloadMaxBytes: 1 << 20
-       },
-       CQ = {
-         NametagsHidden: 1,
-         CrouchToggle: 2,
-         BhopDisabled: 4,
-         DisableBobbing: 8,
-         EzTowering: 16,
-         EzBridging: 32,
-         ShowChunkBorders: 64,
-         All: 127
- ... (20 more removed lines; see GitHub link above)
+ 
+     function Ak(kk) {
+       return ("worldCodeButton" !== kk || !Yk().worldCodeIntroShown) && !lk.has(kk)
+     }
+ 
+     function jk(kk) {
+       var ek;
+       return (null === (ek = wk) || void 0 === ek ? void 0 : ek.name) === kk ? wk.stepsDone : Uk
+     }
+ 
+     function sk(kk, ek) {
+       if (! function(kk) {
+           return wk ? wk.name === kk : "welcome" === kk
+         }(kk) || !Ak(ek) || jk(kk).has(ek)) return !1;
+       if (wk) return !0;
+       const ik = Mk[ek];
+ ... (46 more added lines; see GitHub link above)
```

#### 65. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1113-L1114` → after: `L23465-L23472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23465-L23472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23465-L23472) · [Before (L1113-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1113-L1114)

```diff
-         Held: 1
-       };
+         name: kk,
+         stepsDone: new Set
+       }, yk()
+     }
+ 
+     function vk() {
+       (wk || 0 !== Uk.size || 0 !== Hk.size) && (wk = null, Uk.clear(), Hk.clear(), yk())
+     }
```

#### 66. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1117` → after: `L23475-L23476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23475-L23476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23475-L23476) · [Before (L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1117)

```diff
-       return (QQ | FQ << 8) >>> 0
+       const ik = ek ? kk : nk === kk ? null : nk;
+       ik !== nk && (nk = ik, yk())
```

#### 67. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1120-L1121` → after: `L23479-L23480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23479-L23480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23479-L23480) · [Before (L1120-L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1120-L1121)

```diff
-     function TQ(QQ) {
-       return 255 & QQ
+     function hk(kk, ek) {
+       lk.has(kk) === ek && (ek ? lk.delete(kk) : lk.add(kk), yk())
```

#### 68. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1125` → after: `L23484-L23504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23484-L23504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23484-L23504) · [Before (L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1125)

```diff
-       return QQ >>> 8
+       return pk.add(kk), () => {
+         pk.delete(kk)
+       }
+     }
+   },
+   36136: (kk, ek, ik) => {
+     ik.d(ek, {
+       e: () => Mk,
+       f: () => xk,
+       h: () => lk,
+       l: () => mk
+     });
+     var Dk = ik(22),
+       fk = ik(2388),
+       Sk = ik(2395),
+       bk = ik(2397),
+ ... (5 more added lines; see GitHub link above)
```

#### 69. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1129` → after: `L23517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23517) · [Before (L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1129)

```diff
-       return QQ + 3 & -4
+       return kk.classList.contains("TouchKeyHit") && nk() ? null : kk.firstElementChild
```

#### 70. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1165` → after: `L23521-L23531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23521-L23531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23521-L23531) · [Before (L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1165)

```diff
-       return QQ === nQ.WorldgenSeed || QQ === nQ.Generate
+       return kk.classList.contains("TouchKeyHit") && !kk.classList.contains("CanvasZone") ? {
+         whole: !nk(),
+         keyBox: null
+       } : {
+         whole: !1,
+         keyBox: Uk(Kk(kk))
+       }
+     }
+ 
+     function nk() {
+       return document.documentElement.classList.contains(rk.f)
```

#### 71. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1233-L1235` → after: `L23535-L23543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23535-L23543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23535-L23543) · [Before (L1233-L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1233-L1235)

```diff
-       for (const [FQ, wQ] of Object.entries(LQ.h))
-         if (wQ === QQ) return FQ;
-       return `Unknown${QQ}`
+       return !(kk instanceof HTMLElement) || kk.offsetWidth <= 0 || kk.offsetHeight <= 0 ? null : {
+         width: kk.offsetWidth,
+         height: kk.offsetHeight
+       }
+     }
+ 
+     function Hk(kk, ek) {
+       const ik = kk => Math.min(65535, Math.round(4 * kk));
+       return (ik(kk) | ik(ek) << 16) >>> 0
```

#### 72. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1240-L1248` → after: `L23548-L23550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23548-L23550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23548-L23550) · [Before (L1240-L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1240-L1248)

```diff
-         status: QQ[LQ.F.Status],
-         lastError: QQ[LQ.F.LastError],
-         lastErrorDetail: QQ[LQ.F.LastErrorDetail],
-         errorCount: QQ[LQ.F.ErrorCount],
-         frameIndex: QQ[LQ.F.FrameIndex],
-         tickIndex: QQ[LQ.F.TickIndex],
-         renderPending: QQ[LQ.F.RenderPending],
-         firstView: QQ[LQ.F.FirstView],
-         chunksCancelled: QQ[LQ.F.ChunksCancelled]
+         x: kk.left + kk.width / 2,
+         y: kk.top + kk.height / 2,
+         radius: Math.min(kk.width, kk.height) / 2
```

#### 73. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1252` → after: `L23619-L23622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23619-L23622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23619-L23622) · [Before (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1252)

```diff
-   4626: (QQ, FQ, wQ) => {
+   36442: (kk, ek, ik) => {
+     function Dk(kk) {
+       return "fetch" === kk || "timeout" === kk || "integrity" === kk ? "download" : "browser"
+     }
```

#### 74. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1254-L1256` → after: `L23624-L23629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23624-L23629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23624-L23629) · [Before (L1254-L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1254-L1256)

```diff
-       c: () => DQ,
-       e: () => oQ,
-       h: () => qQ
+       d: () => fk,
+       g: () => bk,
+       j: () => Pk,
+       l: () => rk,
+       p: () => Dk,
+       t: () => Sk
```

#### 75. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1258` → after: `L23631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23631) · [Before (L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1258)

```diff
-     var LQ = wQ(4632);
+     const fk = "https://discord.gg/playbloxd";
```

#### 76. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1261` → after: `L23634-L23650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23634-L23650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23634-L23650) · [Before (L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1261)

```diff
-       return "none" !== QQ
+       return "download" === kk ? {
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
+         discordLink: !1,
+         confirm: "general:ok",
+         cancel: null
+ ... (1 more added lines; see GitHub link above)
```

#### 77. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1265-L1272` → after: `L23654-L23663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23654-L23663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23654-L23663) · [Before (L1265-L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1265-L1272)

```diff
-       if (!QQ) return "none";
-       switch (FQ) {
-         case LQ.R.Drawn:
-           return "drawn";
-         case LQ.R.Paced:
-           return "paced";
-         default:
-           return "skipped"
+       return {
+         icon: "face-dizzy",
+         title: "wasmScreens:crashTitle",
+         help: ek ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
+         helpValues: {
+           code: kk.code
+         },
+         discordLink: ek,
+         confirm: "general:reload",
+         cancel: "general:back"
```

#### 78. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1276-L1277` → after: `L23667-L23690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23667-L23690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23667-L23690) · [Before (L1276-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1276-L1277)

```diff
-     function DQ(QQ) {
-       return "drawn" === QQ
+     function rk() {
+       return {
+         icon: "face-dizzy",
+         title: "wasmScreens:turnstilePageTitle",
+         help: "wasmScreens:turnstilePageHelp",
+         helpValues: {},
+         discordLink: !1,
+         confirm: "general:ok",
+         cancel: null
+       }
+     }
+ 
+     function Pk(kk, ek, ik) {
+       return {
+         icon: "wifi",
+         title: "wasmScreens:disconnectedTitle",
+ ... (8 more added lines; see GitHub link above)
```

#### 79. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1280` → after: `L23693-L23700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23693-L23700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23693-L23700) · [Before (L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1280)

```diff
-   4651: (QQ, FQ, wQ) => {
+   36502: (kk, ek, ik) => {
+     function Dk(kk, ek) {
+       return null === kk || null === ek ? kk === ek : kk[0] === ek[0] && kk[1] === ek[1] && kk[2] === ek[2]
+     }
+ 
+     function fk(kk) {
+       return [kk[0] + .5, kk[1] + .5, kk[2] + .5]
+     }
```

#### 80. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1289-L1483` → after: `L23712-L23718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23712-L23718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23712-L23718) · [Before (L1289-L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1289-L1483)

```diff
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
-         Digit6: 16,
- ... (179 more removed lines; see GitHub link above)
+         files: {
+           "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
+           "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
+         },
+         dependencies: [],
+         bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in … [truncated]
+         types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
```

#### 81. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1487-L1547` → after: `L23721-L23737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23721-L23737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23721-L23737) · [Before (L1487-L1547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1487-L1547)

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
- ... (45 more removed lines; see GitHub link above)
+         files: {
+           "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\ … [truncated]
+         },
+         dependencies: ["helpers"],
+         bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in … [truncated]
+         types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every  … [truncated]
+       },
+       Sk = {
+         files: {
+           "chunk.ts": 'import { setTimeout } from "./timers"\n\n/**\n * Forces a chunk to be loaded.\n * @param x - The x coordinate of the chunk\n * @param y - The y coordinate of the chunk\n * @param z - The z coordinate of the chunk\n * @param onLoaded - The function to call w … [truncated]
+           "index.ts": 'import { handleTimers } from "./timers"\n\ntick = () => {\n\thandleTimers()\n}\n\nexport { setTimeout, setInterval, clearTimeout, clearInterval } from "./timers"\nexport type { TimeoutId, IntervalId } from "./timers"\nexport { forceLoadChunk } from "./chunk … [truncated]
+           "random.ts": "/**\n * Generates a random integer between min and max, inclusive.\n * @param min - The minimum value.\n * @param max - The maximum value.\n * @param includeMax - Whether to include the max value in the range. Defaults to false.\n * @returns A random integ … [truncated]
+           "timers.ts": 'import { PlayerId } from "@bloxd"\n\ndeclare const __brand: unique symbol\ntype Branded<T, B> = T & { [__brand]: B }\nexport type TimeoutId = Branded<number, "TimeoutId">\nexport type IntervalId = Branded<number, "IntervalId">\n\nlet nextTimeoutId: number  … [truncated]
+         },
+         dependencies: [],
+         bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in … [truncated]
+ ... (1 more added lines; see GitHub link above)
```

#### 82. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1550-L1554` → after: `L23740-L23750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23740-L23750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23740-L23750) · [Before (L1550-L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1550-L1554)

```diff
-         jump: [188],
-         crouch: [189],
-         SwapCameraZoom: [190],
-         "primary-fire": [194],
-         "alt-fire": [195]
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

#### 83. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1556` → after: `L23752-L23809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23752-L23809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23752-L23809) · [Before (L1556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1556)

```diff
-       kQ = [16]
+       rk = {
+         debug: {
+           name: "debug",
+           specifier: "@plugins/debug",
+           sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
+           typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
+           files: Dk.files,
+           dependencies: Dk.dependencies,
+           bundledSource: Dk.bundledSource,
+           types: Dk.types
+         },
+         dialogue: {
+           name: "dialogue",
+           specifier: "@plugins/dialogue",
+           sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
+           typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
+ ... (42 more added lines; see GitHub link above)
```

#### 84. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1558` → after: `L23811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23811) · [Before (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1558)

```diff
-   40089: (QQ, FQ, wQ) => {
+   36454: (kk, ek, ik) => {
```

#### 85. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1560-L1562` → after: `L23813-L23821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23813-L23821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23813-L23821) · [Before (L1560-L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1560-L1562)

```diff
-       d: () => DQ,
-       g: () => oQ,
-       j: () => qQ
+       c: () => Pk,
+       e: () => rk,
+       i: () => bk,
+       j: () => Sk,
+       k: () => mk,
+       o: () => Mk,
+       p: () => Uk,
+       s: () => nk,
+       v: () => xk
```

#### 86. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1564` → after: `L23823-L23824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23823-L23824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23823-L23824) · [Before (L1564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1564)

```diff
-     let LQ = null;
+     var Dk = ik(1218);
+     const fk = ["quickjs", "ses"];
```

#### 87. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1567` → after: `L23827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23827) · [Before (L1567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1567)

```diff
-       LQ = QQ
+       return fk.includes(kk)
```

#### 88. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1571` → after: `L23831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23831) · [Before (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1571)

```diff
-       LQ === QQ && (LQ = null)
+       return kk === Dk.i || kk === Dk.k
```

#### 89. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1574-L1576` → after: `L23834-L23835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23834-L23835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23834-L23835) · [Before (L1574-L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1574-L1576)

```diff
-     function DQ() {
-       var QQ;
-       null === (QQ = LQ) || void 0 === QQ || QQ()
+     function rk(kk, ek) {
+       return kk === Dk.i && ek === Dk.k || kk === Dk.k && ek === Dk.i
```

#### 90. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1590` → after: `L23839-L23841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23839-L23841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23839-L23841) · [Before (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1590)

```diff
-       return QQ instanceof HTMLElement && (!!(QQ.isContentEditable || QQ instanceof HTMLTextAreaElement || QQ instanceof HTMLSelectElement) || QQ instanceof HTMLInputElement && !oQ.has(QQ.type))
+       const ek = Dk.k in kk,
+         ik = Dk.i in kk;
+       return ek && ik ? null : ek ? Dk.k : ik ? Dk.i : null
```

#### 91. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1593-L1614` → after: `L23844-L23846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23844-L23846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23844-L23846) · [Before (L1593-L1614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1593-L1614)

```diff
-     function kQ(QQ) {
-       let FQ = null;
-       const wQ = wQ => {
-           const qQ = DQ(wQ);
-           qQ !== FQ && (FQ = qQ, QQ(LQ.i.UiCapture, LQ.w.Keyboard, 0, 0, qQ ? LQ.w.Keyboard : 0))
-         },
-         qQ = QQ => {
-           wQ(QQ.target)
-         },
-         oQ = QQ => {
-           wQ(QQ.relatedTarget)
-         },
-         kQ = () => {
-           wQ(document.activeElement)
-         },
-         vQ = {
- ... (6 more removed lines; see GitHub link above)
+     function mk(kk, ek, ik) {
+       const Dk = `${ek}/`;
+       return kk.filter((kk => kk.startsWith(Dk))).map((kk => [kk, `${ik}/${kk.slice(Dk.length)}`]))
```

#### 92. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1623-L1629` → after: `L23851-L23852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23851-L23852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23851-L23852) · [Before (L1623-L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1623-L1629)

```diff
-       for (const qQ of vQ.values()) oQ |= qQ;
-       return (0, qQ.A)(QQ, oQ & QQ)
-     }
-   },
-   36561: (QQ, FQ, wQ) => {
-     function LQ(QQ) {
-       return QQ.includes("Leaf Bed")
+       for (const [Dk, fk] of Object.entries(kk)) Dk !== ek && (ik += fk.length);
+       return ik
```

#### 93. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1633` → after: `L23857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23857) · [Before (L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1633)

```diff
-       return / Bed(?: Head)?(?:\||$)/.test(QQ) && !LQ(QQ)
+       return `${Kk}${kk}`
```

#### 94. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1636-L1637` → after: `L23860-L23861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23860-L23861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23860-L23861) · [Before (L1636-L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1636-L1637)

```diff
-     function oQ(QQ) {
-       return QQ.includes(" Strongbed")
+     function nk(kk, ek) {
+       return `/node_modules/@plugins/${kk}/${ek}`
```

#### 95. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1641` → after: `L23865-L23869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23865-L23869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23865-L23869) · [Before (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1641)

```diff
-       return LQ(QQ) || qQ(QQ) || oQ(QQ)
+       if (!kk.startsWith(Kk)) return null;
+       const ek = kk.slice(Kk.length);
+       return function(kk) {
+         return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(kk)
+       }(ek) ? ek : null
```

#### 96. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1650` → after: `L23872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23872) · [Before (L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1650)

```diff
-   36554: (QQ, FQ, wQ) => {
+   36471: (kk, ek, ik) => {
```

#### 97. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1652` → after: `L23874-L23878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23874-L23878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23874-L23878) · [Before (L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1652)

```diff
-       d: () => mQ
+       e: () => rk,
+       f: () => fk,
+       g: () => bk,
+       j: () => Pk,
+       k: () => Sk
```

#### 98. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1654-L1667` → after: `L23880-L23890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23880-L23890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23880-L23890) · [Before (L1654-L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1654-L1667)

```diff
-     var LQ = wQ(36561),
-       qQ = wQ(9195);
-     const oQ = [],
-       DQ = [],
-       kQ = [],
-       vQ = [];
-     for (const uQ of Object.keys(qQ.k))(0, LQ.i)(uQ) ? oQ.push(uQ) : (0, LQ.q)(uQ) && DQ.push(uQ), (0, LQ.m)(uQ) && kQ.push(uQ), (uQ.includes(" Bed Head") || uQ.includes(" Strongbed Head")) && vQ.push(uQ);
-     const mQ = {
-       leafBeds: oQ,
-       woolBeds: DQ,
-       strongBeds: kQ,
-       beds: [...oQ, ...DQ, ...kQ],
-       bedHeads: vQ,
-       blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
+     var Dk = ik(36463);
+     const fk = 5,
+       Sk = "[SCHEMATIC]",
+       bk = 1024e4;
+ 
+     function rk(kk) {
+       return kk.endsWith(".bloxdschem") && (0, Dk.z)(kk.slice(0, -11) + ".ts") && kk.length <= 64
+     }
+ 
+     function Pk(kk) {
+       return Object.fromEntries(Object.keys(kk).map((kk => [kk, Sk])))
```

#### 99. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1670` → after: `L23893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23893) · [Before (L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1670)

```diff
-   6314: (QQ, FQ, wQ) => {
+   36463: (kk, ek, ik) => {
```

#### 100. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1672` → after: `L23895-L23897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23895-L23897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23895-L23897) · [Before (L1672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1672)

```diff
-       d: () => DQ,
+       A: () => Mk,
+       E: () => bk,
+       e: () => fk,
```

#### 101. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1675-L1678` → after: `L23900-L23903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23900-L23903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23900-L23903) · [Before (L1675-L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1675-L1678)

```diff
-       o: () => oQ,
-       q: () => mQ,
-       r: () => LQ,
-       s: () => kQ
+       p: () => rk,
+       t: () => Pk,
+       x: () => mk,
+       z: () => Kk
```

#### 102. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1681-L1693` → after: `L23907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23907) · [Before (L1681-L1693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1681-L1693)

```diff
-         return QQ[QQ.DEFAULT = 0] = "DEFAULT", QQ[QQ.BOAT = 1] = "BOAT", QQ[QQ.GLIDER = 2] = "GLIDER", QQ[QQ.BALLOON = 3] = "BALLOON", QQ[QQ.SLEEPING = 4] = "SLEEPING", QQ[QQ.RIDING_MOB = 5] = "RIDING_MOB", QQ[QQ.CAR = 6] = "CAR", QQ[QQ.HOVERCRAFT = 7] = "HOVERCRAFT", QQ
-       }({}),
-       qQ = function(QQ) {
-         return QQ[QQ.WOOD = 0] = "WOOD", QQ[QQ.OBSIDIAN = 1] = "OBSIDIAN", QQ[QQ.SPEED = 2] = "SPEED", QQ
-       }({}),
-       oQ = function(QQ) {
-         return QQ[QQ.WOOD = 0] = "WOOD", QQ[QQ.IRON = 1] = "IRON", QQ[QQ.GOLD = 2] = "GOLD", QQ[QQ.DIAMOND = 3] = "DIAMOND", QQ
-       }({}),
-       DQ = function(QQ) {
-         return QQ[QQ.YELLOW = 0] = "YELLOW", QQ[QQ.WHITE = 1] = "WHITE", QQ[QQ.RED = 2] = "RED", QQ[QQ.PURPLE = 3] = "PURPLE", QQ[QQ.PINK = 4] = "PINK", QQ[QQ.ORANGE = 5] = "ORANGE", QQ[QQ.MAGENTA = 6] = "MAGENTA", QQ[QQ.LIME = 7] = "LIME", QQ[QQ.LIGHT_GRAY = 8] = "LIGHT_GRAY", Q … [truncated]
-       }({}),
-       kQ = function(QQ) {
-         return QQ[QQ.ROTATION_1 = 0] = "ROTATION_1", QQ[QQ.ROTATION_2 = 1] = "ROTATION_2", QQ[QQ.ROTATION_3 = 2] = "ROTATION_3", QQ[QQ.ROTATION_4 = 3] = "ROTATION_4", QQ
+         return kk[kk.Join = 0] = "Join", kk[kk.Leave = 1] = "Leave", kk[kk.Push = 2] = "Push", kk[kk.Cursor = 3] = "Cursor", kk[kk.Submit = 4] = "Submit", kk[kk.ReloadAsVariation = 5] = "ReloadAsVariation", kk[kk.CreateFile = 6] = "CreateFile", kk[kk.RenameFile = 7] = "RenameFile … [truncated]
```

#### 103. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1696` → after: `L23910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23910) · [Before (L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1696)

```diff
-         return QQ[QQ.KART = 0] = "KART", QQ[QQ.OFF_ROADER = 1] = "OFF_ROADER", QQ[QQ.CAR = 2] = "CAR", QQ[QQ.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", QQ[QQ.ARMORED_CAR = 4] = "ARMORED_CAR", QQ[QQ.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", QQ[QQ.DIAMOND_MINING_DRILL = 6] = … [truncated]
+         return kk[kk.Joined = 0] = "Joined", kk[kk.Updates = 1] = "Updates", kk[kk.Presence = 2] = "Presence", kk[kk.RemoteCursor = 3] = "RemoteCursor", kk[kk.ForceClose = 4] = "ForceClose", kk[kk.LobbyFilesChanged = 5] = "LobbyFilesChanged", kk[kk.EngineSettings = 6] = "EngineSe … [truncated]
```

#### 104. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1698-L1701` → after: `L23912-L24160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23912-L24160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/85.js#L23912-L24160) · [Before (L1698-L1701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/85.js#L1698-L1701)

```diff
-     LQ.DEFAULT, LQ.BOAT, qQ.SPEED, LQ.GLIDER, oQ.DIAMOND, LQ.BALLOON, DQ.BLACK, LQ.SLEEPING, kQ.ROTATION_4, LQ.RIDING_MOB, LQ.CAR, vQ.MOONSTONE_MINING_DRILL, LQ.HOVERCRAFT;
-     let mQ = function(QQ) {
-       return QQ[QQ.NORMAL = 0] = "NORMAL", QQ[QQ.GLIDING = 1] = "GLIDING", QQ[QQ.FLOATING = 2] = "FLOATING", QQ
-     }({})
+ 
+     function bk(kk) {
+       return "lobby" === kk.kind ? `lobby:${kk.path}` : `codeBlock:${kk.pos[0]},${kk.pos[1]},${kk.pos[2]}`
+     }
+ 
+     function rk(kk) {
+       if ("lobby" === kk) return {
+         kind: "lobby",
+         path: Dk.i
+       };
+       if (kk.startsWith("lobby:")) {
+         const ek = kk.slice(6);
+         return Kk(ek) ? {
+           kind: "lobby",
+           path: ek
+         } : null
+ ... (233 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/86.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/86.js` (30 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba)

#### 1. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/86.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/86.js#L4)

```diff
-   40145: (QQ, FQ, wQ) => {
+   4716: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L14-L23` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/86.js#L7) · [Before (L14-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/86.js#L14-L23)

```diff
-       e: () => jQ,
-       f: () => RQ,
-       i: () => nQ,
-       k: () => OQ,
-       o: () => WQ,
-       r: () => lQ,
-       v: () => IQ,
-       x: () => TQ,
-       y: () => NQ,
-       z: () => ZQ
+       e: () => lk
```

#### 3. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L25-L68` → after: `L9-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L9-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/86.js#L9-L19) · [Before (L25-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/86.js#L25-L68)

```diff
-     var LQ = wQ(1395),
-       qQ = wQ(22),
-       oQ = wQ(1302),
-       DQ = wQ(2313),
-       kQ = wQ(4657),
-       vQ = wQ(4621);
-     let mQ, uQ = !1,
-       HQ = !1,
-       bQ = !1,
-       YQ = !1;
-     const xQ = 1300,
-       AQ = 3e3;
-     let tQ = 0,
-       eQ = !1,
-       MQ = !1,
-       GQ = 0;
- ... (28 more removed lines; see GitHub link above)
+     var Dk = ik(1288),
+       fk = ik(26);
+     var Sk = ik(314);
+     var bk = ik(594);
+     var rk = ik(2388),
+       Pk = ik(4721),
+       mk = ik(4745),
+       Mk = ik(4752);
+     class Kk {
+       constructor(kk, ek, ik, Dk, fk, Sk) {
+         this.id = kk, this.type = ek, this.parameters = ik, this.tearDownNotification = Dk, this.onDonePromise = fk, this.resolveRequest = Sk
```

#### 4. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L71-L74` → after: `L22-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/86.js#L22-L30) · [Before (L71-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/86.js#L71-L74)

```diff
- 
-     function IQ(QQ) {
-       return iQ.add(QQ), () => {
-         iQ.delete(QQ)
+     const xk = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
+     class nk {
+       constructor(kk, ek, ik, Dk, fk, Sk) {
+         this.id = kk, this.type = ek, this.parameters = ik, this.resolveRequest = Dk, this.onDonePromise = fk, this.tearDownNotification = Sk, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.i … [truncated]
+         const bk = lk[ek];
+         if (!bk) throw console.error(`No QTE implementation registered for type: ${ek}`), new Error(`No QTE implementation registered for type: ${ek}`);
+         this.implementation = new bk(ik, (kk => {
+           this.isCompleted = !0, this.resolveRequest(kk)
+         }), this.tearDownNotification), this.setupInputHandlers()
```

#### 5. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L76-L88` → after: `L32-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L32-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/86.js#L32-L59) · [Before (L76-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/86.js#L76-L88)

```diff
-     }
- 
-     function UQ() {
-       (0, kQ.i)(DQ.w.Menu, (0, oQ.p)() ? 0 : DQ.w.Menu)
-     }
- 
-     function NQ() {
-       MQ = !1, GQ = 0, UQ(), hQ()
-     }
- 
-     function TQ(QQ) {
-       return SQ.add(QQ), () => {
-         SQ.delete(QQ)
+       setupInputHandlers() {
+         this.mouseSub = fk.j.subscribe("QTEMouseState", (kk => {
+           let {
+             isDown: ek
+           } = kk;
+           this.isCompleted || this.implementation.handleMouseInput(ek)
+         })), this.stopInputActions = (0, mk.j)((kk => {
+           this.isCompleted || !xk.has(kk.action) && !(0, mk.f)(kk) || this.implementation.handleMouseInput(kk.down)
+         })), this.tickSub = fk.j.subscribe("noaTick", (kk => {
+           if (this.isCompleted) return;
+           const ek = kk / 1e3;
+           this.implementation.handleTick(ek)
+         })), this.stopShellTicks = (0, Pk.x)((() => {
+           this.isCompleted || this.implementation.handleTick(rk.r / 1e3)
+         }))
+       }
+ ... (12 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L91-L184` → after: `L62-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L62-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/86.js#L62-L287) · [Before (L91-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/86.js#L91-L184)

```diff
- 
-     function KQ(QQ) {
-       HQ = !1, QQ !== uQ && (uQ = QQ, YQ = !1, clearTimeout(mQ), bQ = !uQ && cQ, uQ ? (eQ = !1, MQ = !1, GQ = 0) : sQ() && !cQ && (MQ = !0), cQ = !1, uQ && !sQ() && PQ(), yQ(), bQ && hQ())
-     }
- 
-     function zQ(QQ) {
-       QQ !== eQ && (eQ = QQ, QQ || hQ())
-     }
- 
-     function lQ() {
-       HQ = !1, YQ || !0 !== fQ() || (YQ = !0, clearTimeout(mQ), mQ = setTimeout(aQ, xQ))
-     }
- 
-     function jQ() {
-       return (!HQ || performance.now() - tQ > AQ) && (HQ = (0, vQ.H)().lockPointer(), tQ = performance.now()), HQ
-     }
- ... (78 more removed lines; see GitHub link above)
+     const Uk = new Dk.e,
+       Hk = new Map;
+     let wk = null;
+     const lk = {
+       progressBar: class {
+         constructor(kk, ek, ik) {
+           var Dk, fk, Sk, bk;
+           this.resolveRequest = ek, this.tearDownNotification = ik, this.progress = 0, this.bk = void 0, this.rk = void 0, this.Pk = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
+           const rk = kk;
+           this.bk = null !== (Dk = rk.bk) && void 0 !== Dk ? Dk : .075, this.rk = null !== (fk = rk.rk) && void 0 !== fk ? fk : 1, this.progress = null !== (Sk = rk.Sk) && void 0 !== Sk ? Sk : 30, this.Pk = null !== (bk = rk.Pk) && void 0 !== bk && bk, this.parameters = rk
+         }
+         handleMouseInput(kk) {
+           kk && !this.isCompleted && (this.clickCount++, this.progress += this.rk, this.progress >= 100 && this.complete(!0))
+         }
+         handleTick() {
+           if (!this.isCompleted)
+ ... (210 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L187-L191` → after: `L290-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L290-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/86.js#L290-L294) · [Before (L187-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/86.js#L187-L191)

```diff
-       return qQ
-     }
- 
-     function uQ(QQ) {
-       oQ = QQ
+       (0, Mk.j)(rk.t.Qte, wk ? rk.t.Qte : 0), wk ? fk.j.tm("qteStateUpdated", wk.getState()) : fk.j.tm("qteStateUpdated", {
+         type: null,
+         typeSpecificParameters: null,
+         isActive: !1
+       })
```

#### 8. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L193-L195` → after: `L296-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L296-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/86.js#L296-L306) · [Before (L193-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/86.js#L193-L195)

```diff
- 
-     function HQ() {
-       return oQ
+     class yk {
+       constructor(kk, ek) {
+         this.resultPromise = kk, this.tearDownQTE = ek
+       }
+       static create(kk, ek, ik) {
+         const Dk = Promise.race([kk, ek]);
+         return new yk(Dk, ik)
+       }
+       async getResult() {
+         return await this.resultPromise
+       }
```

#### 9. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L197-L200` → after: `L308-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L308-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/86.js#L308-L354) · [Before (L197-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/86.js#L197-L200)

```diff
- 
-     function bQ() {
-       var QQ, FQ;
-       return !0 === (null === (QQ = qQ) || void 0 === QQ || null === (FQ = QQ.currentViewer) || void 0 === FQ ? void 0 : FQ.inPlayback)
+     class Yk {
+       static queueQTE(kk, ek, ik) {
+         let Dk, fk;
+         const Sk = new Promise((kk => {
+             Dk = kk
+           })),
+           bk = new Promise((kk => {
+             fk = () => {
+               kk("qteTornDown")
+             }
+           })),
+           rk = Promise.race([Sk, bk]).then((() => {})),
+           Pk = new Kk(kk, ek, ik, fk, rk, Dk);
+         return Hk.set(kk, Pk), Uk.enqueue(Pk), wk || this.processNextQTE(), yk.create(Sk, bk, fk)
+       }
+       static async processNextQTE() {
+ ... (31 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L203` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/86.js#L357) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/86.js#L203)

```diff
-   4621: (QQ, FQ, wQ) => {
+   4721: (kk, ek, ik) => {
```

#### 11. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L206` → after: `L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/86.js#L360) · [Before (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/86.js#L206)

```diff
-       B: () => MQ,
+       D: () => pk,
```

#### 12. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L208-L212` → after: `L362-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L362-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/86.js#L362-L364) · [Before (L208-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/86.js#L208-L212)

```diff
-       H: () => kQ,
-       I: () => WQ,
-       d: () => iQ,
-       e: () => pQ,
-       f: () => IQ,
+       J: () => rk,
+       K: () => sk,
+       c: () => jk,
```

#### 13. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L214` → after: `L366-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L366-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/86.js#L366-L367) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/86.js#L214)

```diff
-       k: () => eQ,
+       j: () => qk,
+       l: () => uk,
```

#### 14. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L221` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/86.js#L375) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/86.js#L221)

```diff
-     var LQ = wQ(4626);
+     var Dk = ik(4728);
```

#### 15. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L230` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/86.js#L384) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/86.js#L230)

```diff
-       oQ = null !== QQ && void 0 !== QQ ? QQ : qQ
+       Sk = null !== kk && void 0 !== kk ? kk : fk
```

#### 16. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L322` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/86.js#L476) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/86.js#L322)

```diff
-       const oQ = (0, LQ.h)(FQ),
+       const Sk = (0, Dk.j)(ek),
```

#### 17. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L354-L369` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/86.js#L508) · [Before (L354-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/86.js#L354-L369)

```diff
-   40335: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => LQ
-     });
-     const LQ = {
-       stop: () => LQ,
-       fade: () => LQ,
-       rate: () => LQ,
-       getVolume: () => 0,
-       getRelativeVolume: () => 0,
-       setRelativeVolume: () => LQ,
-       setPannerAttr: () => LQ,
-       setPosition: () => LQ
-     }
-   },
-   4642: (QQ, FQ, wQ) => {
+   4745: (kk, ek, ik) => {
```

#### 18. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L371-L372` → after: `L510-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L510-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/86.js#L510-L511) · [Before (L371-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/86.js#L371-L372)

```diff
-       e: () => vQ,
-       g: () => oQ,
+       d: () => Pk,
+       f: () => Sk,
```

#### 19. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L375-L376` → after: `L514-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/86.js#L514-L515) · [Before (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/86.js#L375-L376)

```diff
-     var LQ = wQ(2313),
-       qQ = wQ(4651);
+     var Dk = ik(2388),
+       fk = ik(4750);
```

#### 20. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L383` → after: `L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/86.js#L522) · [Before (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/86.js#L383)

```diff
-       return "mid-fire" === FQ && 0 !== (wQ & LQ.c.AltLeftClick)
+       return "mid-fire" === ek && 0 !== (ik & Dk.d.AltLeftClick)
```

#### 21. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L394` → after: `L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/86.js#L533) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/86.js#L394)

```diff
-       const FQ = qQ.b[255 & QQ];
+       const ek = fk.e[255 & kk];
```

#### 22. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L399` → after: `L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/86.js#L538) · [Before (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/86.js#L399)

```diff
-           down: 0 !== (wQ & LQ.c.Down),
+           down: 0 !== (ik & Dk.d.Down),
```

#### 23. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L406` → after: `L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/86.js#L545) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/86.js#L406)

```diff
-   4651: (QQ, FQ, wQ) => {
+   4750: (kk, ek, ik) => {
```

#### 24. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L408-L412` → after: `L547-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L547-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/86.js#L547-L551) · [Before (L408-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/86.js#L408-L412)

```diff
-       b: () => qQ,
-       c: () => oQ,
-       d: () => DQ,
-       f: () => LQ,
-       g: () => kQ
+       e: () => fk,
+       g: () => Sk,
+       k: () => bk,
+       n: () => Dk,
+       q: () => rk
```

#### 25. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L684-L729` → after: `L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/86.js#L823) · [Before (L684-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/86.js#L684-L729)

```diff
-   40418: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => uQ,
-       g: () => mQ,
-       i: () => vQ
-     });
-     var LQ = wQ(4638),
-       qQ = wQ(2313),
-       oQ = wQ(4657);
-     let DQ = !1,
-       kQ = !1;
- 
-     function vQ(QQ) {
-       DQ = !0;
-       try {
-         QQ()
- ... (30 more removed lines; see GitHub link above)
+   4752: (kk, ek, ik) => {
```

#### 26. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L732-L733` → after: `L826-L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L826-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/86.js#L826-L827) · [Before (L732-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/86.js#L732-L733)

```diff
-       g: () => DQ,
-       i: () => mQ
+       i: () => bk,
+       j: () => mk
```

#### 27. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L735-L736` → after: `L829-L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L829-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/86.js#L829-L830) · [Before (L735-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/86.js#L735-L736)

```diff
-     var LQ = wQ(2313),
-       qQ = wQ(2320);
+     var Dk = ik(2388),
+       fk = ik(2395);
```

#### 28. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L747` → after: `L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/86.js#L841) · [Before (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/86.js#L747)

```diff
-           qQ !== FQ && (FQ = qQ, QQ(LQ.i.UiCapture, LQ.w.Keyboard, 0, 0, qQ ? LQ.w.Keyboard : 0))
+           fk !== ek && (ek = fk, kk(Dk.k.UiCapture, Dk.t.Keyboard, 0, 0, fk ? Dk.t.Keyboard : 0))
```

#### 29. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L771` → after: `L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/86.js#L865) · [Before (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/86.js#L771)

```diff
-       vQ.set(LQ, (null !== (wQ = vQ.get(LQ)) && void 0 !== wQ ? wQ : 0) & ~QQ | FQ & QQ);
+       Pk.set(Dk, (null !== (ik = Pk.get(Dk)) && void 0 !== ik ? ik : 0) & ~kk | ek & kk);
```

#### 30. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L774-L997` → after: `L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/86.js#L868) · [Before (L774-L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/86.js#L774-L997)

```diff
-       return (0, qQ.A)(QQ, oQ & QQ)
-     }
-   },
-   40175: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => uQ,
-       c: () => vQ,
-       f: () => kQ,
-       j: () => mQ
-     });
-     var LQ = wQ(1904);
-     let qQ = null,
-       oQ = 0;
-     const DQ = new Set;
- 
-     function kQ() {
- ... (208 more removed lines; see GitHub link above)
+       return (0, fk.x)(kk, Sk & kk)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/87.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/87.js` (106 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e)

#### 1. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L4)

```diff
-   38291: (QQ, FQ, wQ) => {
+   40466: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L6-L7` → after: `L6-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L6-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L6-L13) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L6-L7)

```diff
-       b: () => DQ,
-       c: () => mQ,
+       A: () => Ek,
+       B: () => uk,
+       C: () => vk,
+       G: () => Fk,
+       K: () => Tk,
+       N: () => ck,
+       P: () => Ik,
+       d: () => Zk,
```

#### 3. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L10-L11` → after: `L16-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L16-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L16-L23) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L10-L11)

```diff
-       i: () => vQ,
-       j: () => kQ
+       j: () => Ok,
+       m: () => Vk,
+       o: () => sk,
+       s: () => hk,
+       t: () => qk,
+       x: () => Qk,
+       y: () => zk,
+       z: () => Nk
```

#### 4. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L13-L32` → after: `L25-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L25-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L25-L45) · [Before (L13-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L13-L32)

```diff
-     const LQ = "A valid external Instance reference no longer exists.",
-       qQ = [
-         [1e4, "<10s", "lt10s"],
-         [6e4, "<1m", "lt1m"],
-         [3e5, "<5m", "lt5m"],
-         [18e5, "<30m", "lt30m"],
-         [1 / 0, "30m+", "ge30m"]
-       ],
-       oQ = [
-         [1e3, "lt1s"],
-         [2e3, "lt2s"],
-         [5e3, "lt5s"],
-         [1e4, "lt10s"],
-         [3e4, "lt30s"],
-         [1 / 0, "ge30s"]
-       ];
- ... (4 more removed lines; see GitHub link above)
+     var Dk = ik(1371),
+       fk = ik(26),
+       Sk = ik(1273),
+       bk = ik(2388),
+       rk = ik(4752),
+       Pk = ik(4721);
+     let mk, Mk = !1,
+       Kk = !1,
+       xk = !1,
+       nk = !1;
+     const Uk = 1300,
+       Hk = 3e3;
+     let wk = 0,
+       lk = !1,
+       pk = !1,
+       yk = 0;
+ ... (5 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L34-L39` → after: `L47-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L47-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L47-L60) · [Before (L34-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L34-L39)

```diff
-     function kQ(QQ, FQ) {
-       return QQ ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(QQ) {
-         var FQ;
-         const wQ = null !== (FQ = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(QQ)) && void 0 !== FQ ? FQ : /failed with ([A-Z][A-Z0-9_]+)/.exec(QQ);
-         return wQ ? wQ[1] : QQ.includes(LQ) ? "gpu_process_lost" : "other"
-       }(FQ)
+     function sk() {
+       return Mk
+     }
+ 
+     function dk() {
+       return pk
+     }
+ 
+     function Vk() {
+       return Ck
+     }
+ 
+     function Fk() {
+       return (0, Sk.w)() && !Ck
```

#### 6. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L43` → after: `L64-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L64-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L64-L69) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L43)

```diff
-       return `${(null===QQ||void 0===QQ?void 0:QQ.vendor)||"unknown vendor"} ${(null===QQ||void 0===QQ?void 0:QQ.architecture)||"unknown architecture"}`
+       let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+       if (kk !== Ck) {
+         Ck = kk;
+         for (const kk of [...jk]) kk(Ck);
+         ek && ck()
+       }
```

#### 7. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L47` → after: `L73-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L73-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L73-L83) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L47)

```diff
-       return bQ(QQ)[1]
+       return jk.add(kk), () => {
+         jk.delete(kk)
+       }
+     }
+ 
+     function Ik() {
+       (0, rk.j)(bk.t.Menu, (0, Sk.w)() ? 0 : bk.t.Menu)
+     }
+ 
+     function zk() {
+       pk = !1, yk = 0, Ik(), ck()
```

#### 8. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L51` → after: `L87-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L87-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L87-L89) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L51)

```diff
-       return bQ(QQ)[2]
+       return Ak.add(kk), () => {
+         Ak.delete(kk)
+       }
```

#### 9. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L55` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L93) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L55)

```diff
-       return YQ(oQ, QQ)[1]
+       Kk = !1, kk !== Mk && (Mk = kk, nk = !1, clearTimeout(mk), xk = !Mk && Lk, Mk ? (lk = !1, pk = !1, yk = 0) : Fk() && !Lk && (pk = !0), Lk = !1, Mk && !Fk() && Gk(), Rk(), xk && ck())
```

#### 10. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L59` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L97) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L59)

```diff
-       return YQ(qQ, QQ)
+       kk !== lk && (lk = kk, kk || ck())
```

#### 11. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L62` → after: `L100-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L100-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L100-L116) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L62)

```diff
-     function YQ(QQ, FQ) {
+     function hk() {
+       Kk = !1, nk || !0 !== Xk() || (nk = !0, clearTimeout(mk), mk = setTimeout(Wk, Uk))
+     }
+ 
+     function ak() {
+       return (!Kk || performance.now() - wk > Hk) && (Kk = (0, Pk.J)().lockPointer(), wk = performance.now()), Kk
+     }
+ 
+     function Wk() {
+       tk() && Bk() && ak()
+     }
+ 
+     function tk() {
+       return Fk() && !Mk && !lk && !(0, Dk.d)()
+     }
+ 
+ ... (1 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L64-L67` → after: `L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L118) · [Before (L64-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L64-L67)

```diff
-       return null !== (wQ = QQ.find((QQ => {
-         let [wQ] = QQ;
-         return FQ < wQ
-       }))) && void 0 !== wQ ? wQ : QQ[QQ.length - 1]
+       return "undefined" === typeof navigator || null === (kk = navigator.userActivation) || void 0 === kk ? void 0 : kk.isActive
```

#### 13. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L69-L79` → after: `L120-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L120-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L120-L122) · [Before (L69-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L69-L79)

```diff
-   },
-   38607: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => LQ,
-       d: () => qQ
-     });
-     const LQ = 45e3;
-     class qQ extends Error {
-       constructor() {
-         super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
-       }
+ 
+     function Bk() {
+       return xk && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== Xk()
```

#### 14. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L92-L93` → after: `L125-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L125-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L125-L126) · [Before (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L92-L93)

```diff
-     function oQ(QQ) {
-       return 2 ** Math.floor(Math.log2(Math.max(1, QQ / qQ)))
+     function ck() {
+       Fk() ? tk() && !pk && Bk() && ak() : Mk && !Lk && Gk()
```

#### 15. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L96-L97` → after: `L129-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L129-L130) · [Before (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L96-L97)

```diff
-     function DQ(QQ) {
-       return (QQ / qQ).toFixed(1)
+     function Tk() {
+       pk ? navigator.vendor.startsWith("Apple") ? gk() : yk = Yk : ck()
```

#### 16. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L115-L116` → after: `L133-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L133-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L133-L134) · [Before (L115-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L115-L116)

```diff
-     function vQ(QQ) {
-       return Math.floor(qQ * QQ / oQ)
+     function Zk() {
+       yk > 0 && 0 === --yk && gk()
```

#### 17. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L119-L128` → after: `L137-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L137-L138) · [Before (L119-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L119-L128)

```diff
-     function mQ(QQ) {
-       const FQ = QQ - Math.floor(QQ / 6);
-       let wQ = LQ.e.maxChunkHorizAddDistance,
-         qQ = LQ.e.maxChunkVertAddDistance;
-       if (uQ(wQ + 1, qQ + 1) <= FQ) return null;
-       for (; uQ(wQ + 1, qQ + 1) > FQ && (wQ > 0 || qQ > 0);) wQ > qQ ? wQ-- : qQ--;
-       return {
-         horizontal: wQ,
-         vertical: qQ
-       }
+     function Ok() {
+       yk = 0
```

#### 18. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L131-L137` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L141-L142) · [Before (L131-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L131-L137)

```diff
-     function uQ(QQ, FQ) {
-       const wQ = Math.max(QQ, FQ);
-       let LQ = 0;
-       for (let qQ = -wQ; qQ <= wQ; qQ++)
-         for (let oQ = -wQ; oQ <= wQ; oQ++)
-           for (let DQ = -wQ; DQ <= wQ; DQ++) HQ(QQ, FQ, qQ, oQ, DQ) && LQ++;
-       return LQ
+     function gk() {
+       tk() && !0 === Xk() && ak()
```

#### 19. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L140-L142` → after: `L145-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L145-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L145-L157) · [Before (L140-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L140-L142)

```diff
-     function HQ(QQ, FQ, wQ, LQ, qQ) {
-       const oQ = wQ * wQ + qQ * qQ;
-       return QQ === FQ ? oQ + LQ * LQ <= QQ * QQ : QQ > FQ ? Math.abs(LQ) <= FQ && oQ + LQ * LQ <= QQ * QQ : oQ <= QQ * QQ && oQ + LQ * LQ <= FQ * FQ
+     function Gk() {
+       Lk = !0, (0, Pk.J)().unlockPointer()
+     }
+ 
+     function Nk() {
+       Kk = !1, xk = !1, nk = !1, clearTimeout(mk), lk = !1, pk = !1, yk = 0, Lk = !1;
+       const kk = Mk;
+       Mk = !1, kk && Rk()
+     }
+ 
+     function Rk() {
+       for (const kk of [...Ak]) kk(Mk);
+       fk.j.tm("pointerLockUpdate", Mk)
```

#### 20. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L145` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L160) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L145)

```diff
-   40275: (QQ, FQ, wQ) => {
+   40262: (kk, ek, ik) => {
```

#### 21. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L149` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L163) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L149)

```diff
-       f: () => kQ,
+       h: () => rk,
```

#### 22. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L152` → after: `L166-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L166-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L166-L168) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L152)

```diff
-       p: () => DQ
+       p: () => bk,
+       s: () => Mk,
+       t: () => Pk
```

#### 23. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L154-L156` → after: `L170-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L170-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L170-L172) · [Before (L154-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L154-L156)

```diff
-     var LQ = wQ(201);
-     const qQ = 3e3,
-       oQ = 15e3;
+     let Dk = null,
+       fk = null,
+       Sk = null;
```

#### 24. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L159-L163` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L175) · [Before (L159-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L159-L163)

```diff
-       const FQ = QQ.endsWith(LQ.l);
-       return {
-         text: (FQ ? QQ.slice(0, -LQ.l.length) : QQ) || null,
-         dropsCache: FQ
-       }
+       Dk = kk
```

#### 25. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L167-L169` → after: `L178-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L178-L179) · [Before (L167-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L167-L169)

```diff
-     function vQ(QQ, FQ) {
-       const wQ = uQ(QQ);
-       return null !== wQ.name && "" === LQ.d[wQ.name].text && null !== FQ ? FQ : wQ.reason
+     function rk() {
+       return Dk
```

#### 26. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L174-L196` → after: `L183-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L183-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L183-L200) · [Before (L174-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L174-L196)

```diff
-       var FQ;
-       let wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-       const qQ = null !== (FQ = Object.keys(LQ.d).find((FQ => LQ.d[FQ].code === QQ))) && void 0 !== FQ ? FQ : null;
-       if (null === qQ) return {
-         code: QQ,
-         name: qQ,
-         reason: null !== wQ && void 0 !== wQ ? wQ : `${kQ}\nCode: ${QQ}`,
-         canReconnect: !1,
-         automaticallyReconnect: !1,
-         requiresRefresh: !1
-       };
-       const {
-         text: oQ,
-         canReconnect: DQ = !1
-       } = LQ.d[qQ], vQ = QQ === LQ.d.outdatedVersion.code || QQ === LQ.d.loadRecaptchaError.code;
-       return {
- ... (7 more removed lines; see GitHub link above)
+       fk = kk
+     }
+ 
+     function mk() {
+       return fk
+     }
+ 
+     function Mk(kk) {
+       Sk = kk
+     }
+ 
+     function Kk() {
+       return Sk
+     }
+ 
+     function xk() {
+ ... (2 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L199` → after: `L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L203) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L199)

```diff
-   4632: (QQ, FQ, wQ) => {
+   4721: (kk, ek, ik) => {
```

#### 28. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L201-L252` → after: `L205-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L205-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L205-L209) · [Before (L201-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L201-L252)

```diff
-       $: () => XQ,
-       $b: () => qQ.k,
-       $c: () => LQ.fc,
-       Ab: () => rQ,
-       Ac: () => LQ.Eb,
-       Ad: () => kF,
-       B: () => yQ,
-       Cc: () => LQ.Ib,
-       D: () => LQ.h,
-       Db: () => OQ,
-       Dd: () => AF,
-       G: () => mQ,
-       Gc: () => LQ.Lb,
-       H: () => LQ.i,
-       Hb: () => LQ.Y,
-       Hd: () => pQ,
- ... (36 more removed lines; see GitHub link above)
+       A: () => Fk,
+       D: () => pk,
+       F: () => bk,
+       J: () => rk,
+       K: () => sk,
```

#### 29. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L254-L272` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L211-L212) · [Before (L254-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L254-L272)

```diff
-       cc: () => eQ,
-       cd: () => oQ,
-       d: () => xQ,
-       dc: () => LF,
-       e: () => mF,
-       ed: () => tQ,
-       fb: () => LQ.I,
-       fc: () => LQ.hb,
-       gd: () => vF,
-       h: () => WQ,
-       hb: () => hQ,
-       hc: () => LQ.lb,
-       hd: () => aQ,
-       ib: () => ZQ,
-       id: () => fQ,
-       jb: () => LQ.O,
- ... (3 more removed lines; see GitHub link above)
+       g: () => Yk,
+       j: () => qk,
```

#### 30. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L282-L288` → after: `L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L216) · [Before (L282-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L282-L288)

```diff
-       qd: () => VQ,
-       rb: () => qQ.g,
-       sb: () => iQ,
-       sc: () => LQ.Ab,
-       t: () => DQ,
-       tc: () => xF,
-       td: () => nQ,
+       r: () => yk,
```

#### 31. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L290-L294` → after: `L218-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L218-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L218-L219) · [Before (L290-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L290-L294)

```diff
-       vc: () => uF,
-       wb: () => lQ,
-       wd: () => EQ,
-       xc: () => qF,
-       z: () => YF
+       x: () => dk,
+       y: () => Vk
```

#### 32. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L296-L304` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L221) · [Before (L296-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L296-L304)

```diff
-     var LQ = wQ(4638),
-       qQ = wQ(2313);
-     const oQ = Math.round(1e3 / LQ.nc),
-       DQ = 4,
-       kQ = 2;
- 
-     function vQ() {
-       return crypto.getRandomValues(new Uint32Array(kQ))
-     }
+     var Dk = ik(4728);
```

#### 33. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L306-L319` → after: `L223-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L223-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L223-L227) · [Before (L306-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L306-L319)

```diff
-         Ok: 0,
-         Errors: 1,
-         Fatal: 2
-       },
-       uQ = 16,
-       HQ = {
-         Draws: 1,
-         NetAll: 2
-       },
-       bQ = {
-         ShowFog: 1,
-         Lighting: 2,
-         ChunkFade: 4
-       };
+       lockPointer: () => !1,
+       unlockPointer: () => {},
+       leaveGame: () => {}
+     };
+     let Sk = fk;
```

#### 34. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L322` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L230) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L322)

```diff
-       return (QQ.nametagsHidden ? CQ.NametagsHidden : 0) | (QQ.crouchToggle ? CQ.CrouchToggle : 0) | (QQ.bhopDisabled ? CQ.BhopDisabled : 0) | (QQ.disableBobbing ? CQ.DisableBobbing : 0) | (QQ.ezTowering ? CQ.EzTowering : 0) | (QQ.ezBridging ? CQ.EzBridging : 0) | (QQ.showChunkBo … [truncated]
+       Sk = null !== kk && void 0 !== kk ? kk : fk
```

#### 35. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L324-L358` → after: `L232-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L232-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L232-L244) · [Before (L324-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L324-L358)

```diff
-     const xQ = {
-         Flags: 0,
-         PhysicsVersion: 1,
-         InbuiltOverwritten: 2,
-         AltComplete: 3,
-         ProbeUsedProp: 4
-       },
-       AQ = {
-         Ready: 1,
-         SendFnReplaced: 2,
-         Butto: 4,
-         IdentityChanged: 32,
-         CheckFuncHit: 128,
-         OriginStackHit: 256
-       },
-       tQ = {
- ... (19 more removed lines; see GitHub link above)
+ 
+     function rk() {
+       return Sk
+     }
+     const Pk = new Set,
+       mk = new Set;
+     let Mk = -1;
+     const Kk = new Set,
+       xk = new Set;
+     let nk = 0,
+       Uk = 0;
+     const Hk = new Set,
+       wk = new Set;
```

#### 36. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L361` → after: `L247-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L247-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L247-L249) · [Before (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L361)

```diff
-       return (QQ.showFog ? bQ.ShowFog : 0) | (QQ.lighting ? bQ.Lighting : 0) | (QQ.chunkFade ? bQ.ChunkFade : 0)
+       return Pk.add(kk), () => {
+         Pk.delete(kk)
+       }
```

#### 37. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L404` → after: `L253-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L253-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L253-L257) · [Before (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L404)

```diff
-       return (QQ | FQ << 8) >>> 0
+       for (const Dk of Pk) try {
+         Dk(kk)
+       } catch (ik) {
+         ek(ik)
+       }
```

#### 38. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L408` → after: `L261-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L261-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L261-L263) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L408)

```diff
-       return 255 & QQ
+       return mk.add(kk), () => {
+         mk.delete(kk)
+       }
```

#### 39. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L411-L412` → after: `L266-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L266-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L266-L273) · [Before (L411-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L411-L412)

```diff
-     function KQ(QQ) {
-       return QQ >>> 8
+     function Yk(kk, ek) {
+       const ik = Mk < 0 ? 0 : kk - Mk;
+       Mk = kk;
+       for (const fk of mk) try {
+         fk(ik)
+       } catch (Dk) {
+         ek(Dk)
+       }
```

#### 40. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L416` → after: `L277-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L277-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L277-L279) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L416)

```diff
-       return QQ + 3 & -4
+       return Kk.add(kk), () => {
+         Kk.delete(kk)
+       }
```

#### 41. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L452` → after: `L283-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L283-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L283-L285) · [Before (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L452)

```diff
-       return QQ === nQ.WorldgenSeed || QQ === nQ.Generate
+       return xk.add(kk), () => {
+         xk.delete(kk)
+       }
```

#### 42. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L454-L517` → after: `L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L287) · [Before (L454-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L454-L517)

```diff
-     const PQ = 4,
-       ZQ = 99,
-       yQ = {
-         PAIRS_MAX: 16,
-         FIXED_WORDS: 2,
-         PAIR_WORDS: 2,
-         WORDS_MAX: 34
-       },
-       BQ = {
-         BYTES: 12,
-         WEBGPU: 1,
-         GL: 2,
-         WEBGPU_LOSSES_MAX: 1,
-         LOST: 0,
-         PIPELINE_FAILED: 1
-       },
- ... (48 more removed lines; see GitHub link above)
+     let Ak = 0;
```

#### 43. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L520-L522` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L290) · [Before (L520-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L520-L522)

```diff
-       for (const [FQ, wQ] of Object.entries(LQ.h))
-         if (wQ === QQ) return FQ;
-       return `Unknown${QQ}`
+       Ak += kk
```

#### 44. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L525-L552` → after: `L293-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L293-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L293-L295) · [Before (L525-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L525-L552)

```diff
-     function tF(QQ) {
-       return {
-         status: QQ[LQ.F.Status],
-         lastError: QQ[LQ.F.LastError],
-         lastErrorDetail: QQ[LQ.F.LastErrorDetail],
-         errorCount: QQ[LQ.F.ErrorCount],
-         frameIndex: QQ[LQ.F.FrameIndex],
-         tickIndex: QQ[LQ.F.TickIndex],
-         renderPending: QQ[LQ.F.RenderPending],
-         firstView: QQ[LQ.F.FirstView],
-         chunksCancelled: QQ[LQ.F.ChunksCancelled]
-       }
-     }
-   },
-   40065: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
- ... (12 more removed lines; see GitHub link above)
+     function sk() {
+       const kk = Ak;
+       return Ak = 0, kk
```

#### 45. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L556` → after: `L299-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L299-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L299-L301) · [Before (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L556)

```diff
-       return QQ instanceof RangeError && /call stack/i.test(QQ.message) || QQ instanceof Error && "InternalError" === QQ.name && /recursion/i.test(QQ.message)
+       return Hk.add(kk), () => {
+         Hk.delete(kk)
+       }
```

#### 46. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L560` → after: `L305-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L305-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L305-L307) · [Before (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L560)

```diff
-       return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(QQ))
+       return wk.add(kk), () => {
+         wk.delete(kk)
+       }
```

#### 47. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L564-L566` → after: `L310-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L310-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L310-L311) · [Before (L564-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L564-L566)

```diff
-     function kQ(QQ) {
-       var FQ;
-       return QQ instanceof WebAssembly.RuntimeError || QQ instanceof LQ || qQ(QQ) && DQ.test(null !== (FQ = QQ.stack) && void 0 !== FQ ? FQ : "")
+     function Fk() {
+       nk = 0, Uk = 0, Mk = -1
```

#### 48. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L570-L571` → after: `L315-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L315-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L315-L318) · [Before (L570-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L570-L571)

```diff
-       if (kQ(QQ)) throw QQ;
-       console.error(FQ, QQ)
+       if ("paced" === kk) return Uk += ek, null;
+       if ("drawn" !== kk && "skipped" !== kk) return null;
+       const ik = ek + Uk;
+       return Uk = 0, ik
```

#### 49. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L574-L2223` → after: `L321-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L321-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L321-L326) · [Before (L574-L2223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L574-L2223)

```diff
-     function mQ(QQ, FQ, wQ, qQ, oQ) {
-       if (FQ % qQ !== 0 || FQ + wQ > QQ.byteLength) throw new LQ(`${oQ}: ${wQ} bytes at ${FQ}, ${qQ}-aligned, outside ${QQ.byteLength} bytes of memory`)
-     }
- 
-     function uQ(QQ, FQ, wQ, LQ, qQ) {
-       return 0 === wQ ? null : (mQ(FQ, wQ, LQ * QQ.BYTES_PER_ELEMENT, QQ.BYTES_PER_ELEMENT, qQ), new QQ(FQ, wQ, LQ))
-     }
- 
-     function HQ(QQ, FQ, wQ, LQ, qQ) {
-       return 0 === FQ ? null : (mQ(QQ, FQ, wQ, LQ, qQ), new DataView(QQ, FQ, wQ))
-     }
-   },
-   40411: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => LQ
-     });
- ... (1634 more removed lines; see GitHub link above)
+     function qk(kk, ek, ik, fk) {
+       const Sk = (0, Dk.j)(ek),
+         bk = kk > 0 ? performance.now() : 0;
+       for (let Dk = 0; Dk < kk; Dk++)
+         for (const kk of Hk) try {
+           kk()
```

#### 50. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L2225-L2351` → after: `L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L328) · [Before (L2225-L2351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L2225-L2351)

```diff
-           return this.stop(), this.onError(wQ), FQ
-         }
-       }
-     }
- 
-     function OQ(QQ) {
-       const FQ = (QQ, FQ) => `${QQ}/${(0,LQ.l)(FQ)}`;
-       return `memory ${(0,LQ.l)(QQ.memoryBytes)} live ${(0,LQ.l)(QQ.liveBytes)} peak ${(0,LQ.l)(QQ.peakLiveBytes)} unused ${(0,LQ.l)(QQ.unusedBytes)} ceiling ${(0,LQ.l)(QQ.ceilingBytes)} MiB; grows upFront ${FQ(QQ.grows.upFront,QQ.grownBytes.upFront)} ahead ${FQ(QQ.grows.ahead,QQ … [truncated]
-     }
-   },
-   40380: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => vQ,
-       e: () => mQ,
-       h: () => YQ,
-       l: () => HQ
- ... (111 more removed lines; see GitHub link above)
+           fk(rk)
```

#### 51. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L2353-L2365` → after: `L330-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L330-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L330-L332) · [Before (L2353-L2365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L2353-L2365)

```diff
-         LQ.recheck && this.resendIfChanged(QQ)
-       }
-       refusedFile(QQ, FQ) {
-         var wQ, LQ;
-         if (null === (wQ = this.onTaken) || void 0 === wQ || wQ.call(this, QQ, !1), this.refusedPack.set(QQ, FQ.url), this.pending.has(QQ)) return void(null === (LQ = this.onPackFileFailed) || void 0 === LQ || LQ.call(this, QQ, xQ(FQ.url)));
-         const qQ = this.mY(QQ, FQ.attempt.ask);
-         qQ.recheck = FQ.attempt.recheck, this.afterRefusal(QQ, qQ, FQ.url)
-       }
-       async afterRefusal(QQ, FQ, wQ) {
-         var LQ;
-         let qQ;
-         try {
-           qQ = await this.wanted(QQ)
+       if (kk > 0 && jk(performance.now() - bk), null !== ik) {
+         for (const kk of Kk) try {
+           kk(ik)
```

#### 52. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L2367-L2390` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L334) · [Before (L2367-L2390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L2367-L2390)

```diff
-           return void(this.pending.get(QQ) === FQ && this.giveUp(QQ, FQ, wQ, oQ))
-         }
-         this.pending.get(QQ) === FQ && (qQ.inPlaceOf !== wQ ? FQ.ask || (null !== (LQ = qQ.url) && void 0 !== LQ ? LQ : void 0) !== this.drawn.get(QQ) ? this.fetch(QQ, FQ, qQ.url, qQ.inPlaceOf) : this.pending.delete(QQ) : this.fallBack(QQ, FQ, wQ, xQ(wQ)))
-       }
-       mY(QQ, FQ) {
-         const wQ = {
-           url: void 0,
-           ask: FQ,
-           ym: !1,
-           recheck: !1,
-           inPlaceOf: void 0
-         };
-         this.pending.set(QQ, wQ);
-         for (let LQ = this.ready.length - 1; LQ >= 0; LQ--) this.ready[LQ].file === QQ && this.ready.splice(LQ, 1);
-         return wQ
-       }
- ... (8 more removed lines; see GitHub link above)
+           fk(rk)
```

#### 53. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L2393-L2447` → after: `L338-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L338-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L338-L342) · [Before (L2393-L2447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L2393-L2447)

```diff
-       fetchWanted(QQ, FQ) {
-         const wQ = this.files.url(QQ);
-         wQ instanceof Promise ? wQ.then((wQ => {
-           this.fetchFound(QQ, FQ, wQ)
-         }), (wQ => {
-           this.pending.get(QQ) === FQ && this.giveUp(QQ, FQ, "", wQ)
-         })) : this.fetchFound(QQ, FQ, wQ)
-       }
-       fetchFound(QQ, FQ, wQ) {
-         null !== wQ && this.refusedPack.get(QQ) === wQ ? Promise.resolve(this.files.shippedUrl(QQ)).then((LQ => {
-           this.fetch(QQ, FQ, LQ, wQ)
-         }), (LQ => {
-           this.pending.get(QQ) === FQ && this.giveUp(QQ, FQ, wQ, LQ)
-         })) : this.fetch(QQ, FQ, wQ)
-       }
-       fetch(QQ, FQ, wQ, LQ) {
- ... (39 more removed lines; see GitHub link above)
+       if ("drawn" === ek) {
+         const kk = nk;
+         nk = 0;
+         for (const ek of xk) try {
+           ek(kk)
```

#### 54. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L2449-L2507` → after: `L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L344) · [Before (L2449-L2507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L2449-L2507)

```diff
-           DQ = kQ
-         }
-         this.pending.get(QQ) === FQ && (null !== oQ && oQ !== wQ ? (null === (qQ = this.onPackFileFailed) || void 0 === qQ || qQ.call(this, QQ, LQ), FQ.ask || this.drawn.get(QQ) !== oQ ? (FQ.url = oQ, FQ.inPlaceOf = wQ, this.load(QQ, FQ, oQ)) : this.pending.delete(QQ)) : this.giv … [truncated]
-       }
-       ringRefused(QQ, FQ, wQ, LQ) {
-         let qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         (0, oQ.n)(wQ) ? this.fallBack(QQ, FQ, wQ, LQ): this.giveUp(QQ, FQ, wQ, LQ, qQ)
-       }
-       giveUp(QQ, FQ, wQ, qQ) {
-         let oQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         this.onFailure({
-           file: QQ,
-           url: AQ(wQ),
-           error: qQ,
-           startup: this.startupLeft.has(QQ)
-         }), FQ.ask || !this.drawn.has(QQ) ? (0, LQ.fb)(qQ) ? this.queueRecord(QQ, FQ, wQ, uQ, Promise.resolve((0, DQ.r)(QQ, (0, kQ.k)(qQ))), oQ) : this.buildFile(QQ, FQ, wQ, uQ, oQ) : this.pending.delete(QQ)
- ... (43 more removed lines; see GitHub link above)
+           fk(rk)
```

#### 55. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L2510-L2559` → after: `L347-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L347-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L347-L350) · [Before (L2510-L2559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L2510-L2559)

```diff
-     }
- 
-     function xQ(QQ) {
-       return new bQ(`presentation refused ${AQ(QQ)}`)
-     }
- 
-     function AQ(QQ) {
-       return QQ.startsWith("data:") ? `${QQ.slice(0,Math.min(Math.max(QQ.indexOf(","),5),64))},...` : QQ
-     }
-   },
-   40385: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => DQ,
-       h: () => oQ,
-       j: () => uQ,
-       n: () => kQ,
- ... (34 more removed lines; see GitHub link above)
+       for (const Dk of wk) try {
+         Dk(kk, Sk)
+       } catch (rk) {
+         fk(rk)
```

#### 56. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L2573` → after: `L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L354) · [Before (L2573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L2573)

```diff
-   40388: (QQ, FQ, wQ) => {
+   40483: (kk, ek, ik) => {
```

#### 57. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L2575-L2581` → after: `L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L356) · [Before (L2575-L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L2575-L2581)

```diff
-       b: () => mQ,
-       f: () => uQ,
-       j: () => YQ,
-       n: () => tQ,
-       r: () => xQ,
-       s: () => bQ,
-       v: () => AQ
+       e: () => Dk
```

#### 58. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L2583-L2622` → after: `L358-L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L358-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L358-L366) · [Before (L2583-L2622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L2583-L2622)

```diff
-     const LQ = 826427981,
-       qQ = 1,
-       oQ = 2,
-       DQ = 44,
-       kQ = 46,
-       vQ = 58,
-       mQ = 8,
-       uQ = 4;
- 
-     function HQ(QQ, FQ, wQ) {
-       const qQ = (new TextEncoder).encode(wQ),
-         oQ = mQ + 4 * (FQ.length + 2),
-         DQ = new Uint8Array(oQ + (qQ.byteLength + 3 & -4)),
-         kQ = new DataView(DQ.buffer);
-       return kQ.setUint32(0, QQ, !0), kQ.setUint32(mQ, LQ, !0), FQ.forEach(((QQ, FQ) => {
-         kQ.setUint32(mQ + 4 * (FQ + 1), QQ, !0)
- ... (24 more removed lines; see GitHub link above)
+     const Dk = {
+       stop: () => Dk,
+       fade: () => Dk,
+       rate: () => Dk,
+       getVolume: () => 0,
+       getRelativeVolume: () => 0,
+       setRelativeVolume: () => Dk,
+       setPannerAttr: () => Dk,
+       setPosition: () => Dk
```

#### 59. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L2625` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L369) · [Before (L2625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L2625)

```diff
-   40378: (QQ, FQ, wQ) => {
+   4745: (kk, ek, ik) => {
```

#### 60. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L2628-L2814` → after: `L372-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L372-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L372-L376) · [Before (L2628-L2814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L2628-L2814)

```diff
-       g: () => tQ,
-       j: () => pQ,
-       k: () => WQ,
-       o: () => iQ,
-       p: () => RQ,
-       r: () => MQ
-     });
-     var LQ = wQ(4638),
-       qQ = wQ(40259);
-     const oQ = 1,
-       DQ = 18,
-       kQ = 19,
-       vQ = 20,
-       mQ = {
-         [oQ]: "link",
-         2: "draw",
- ... (171 more removed lines; see GitHub link above)
+       f: () => Sk,
+       j: () => rk
+     });
+     var Dk = ik(2388),
+       fk = ik(4750);
```

#### 61. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L2818-L2821` → after: `L380-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L380-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L380-L383) · [Before (L2818-L2821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L2818-L2821)

```diff
-         group: FQ,
-         instance: wQ
-       } = QQ, LQ = SQ.get(FQ);
-       return void 0 === LQ && (LQ = [], SQ.set(FQ, LQ)), !LQ.includes(wQ) && (LQ.length >= CQ || (LQ.push(wQ), !1))
+         action: ek,
+         flags: ik
+       } = kk;
+       return "mid-fire" === ek && 0 !== (ik & Dk.d.AltLeftClick)
```

#### 62. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L2824-L2825` → after: `L387-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L387-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L387-L390) · [Before (L2824-L2825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L2824-L2825)

```diff
-     function WQ() {
-       return SQ.size > 0
+     function rk(kk) {
+       return bk.add(kk), () => {
+         bk.delete(kk)
+       }
```

#### 63. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L2828-L2829` → after: `L393-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L393-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L393-L403) · [Before (L2828-L2829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L2828-L2829)

```diff
-     function RQ() {
-       SQ.clear()
+     function Pk(kk) {
+       const ek = fk.e[255 & kk];
+       if (void 0 === ek) return;
+       const ik = kk >>> 8 & 255,
+         Sk = {
+           action: ek,
+           down: 0 !== (ik & Dk.d.Down),
+           flags: ik,
+           press: kk >>> 16
+         };
+       for (const Dk of bk) Dk(Sk)
```

#### 64. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L2832` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L406) · [Before (L2832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L2832)

```diff
-   40301: (QQ, FQ, wQ) => {
+   4750: (kk, ek, ik) => {
```

#### 65. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L2839-L2844` → after: `L690-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L690-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L690-L694) · [Before (L2839-L2844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L2839-L2844)

```diff
-     var LQ = wQ(6470),
-       qQ = wQ(22),
-       oQ = wQ(4184),
-       DQ = wQ(4638),
-       kQ = wQ(6467),
-       vQ = wQ(40307);
+     var Dk = ik(4741),
+       fk = ik(2388),
+       Sk = ik(4752);
+     let bk = !1,
+       rk = !1;
```

#### 66. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L2846-L2848` → after: `L696-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L696-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L696-L702) · [Before (L2846-L2848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L2846-L2848)

```diff
-     function mQ(QQ, FQ) {
-       const wQ = (0, kQ.c)(FQ.variants);
-       return QQ.setShaderPack(wQ.variantFlags, wQ.hooks, wQ.moduleCodes, (0, vQ.D)(FQ.layers), vQ.n[FQ.Hm], FQ.keepCircleShadows)
+     function Pk(kk) {
+       bk = !0;
+       try {
+         kk()
+       } finally {
+         bk = !1
+       }
```

#### 67. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L2858-L2868` → after: `L706-L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L706-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L706-L719) · [Before (L2858-L2868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L2858-L2868)

```diff
-       var wQ;
-       const LQ = null !== (wQ = null === QQ || void 0 === QQ ? void 0 : QQ.reason) && void 0 !== wQ ? wQ : "none";
-       return xQ.has(LQ) ? {
-         messageKey: FQ ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
-         noAdapter: !0
-       } : "not_requested" === LQ && "override" === (null === QQ || void 0 === QQ ? void 0 : QQ.source) ? {
-         messageKey: "shaderPack:failedRendererOverride",
-         noAdapter: !1
-       } : {
-         messageKey: AQ.has(LQ) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
-         noAdapter: !1
+       if (bk) return !1;
+       switch (kk) {
+         case Dk.O.MouseDown:
+         case Dk.O.MouseUp:
+         case Dk.O.TouchStart:
+         case Dk.O.TouchEnd:
+         case Dk.O.TouchCancel:
+         case Dk.O.TouchButton:
+           return !0;
+         case Dk.O.KeyDown:
+         case Dk.O.KeyUp:
+           return 0 === (ek & fk.h.Repeat) && !(0, Sk.i)(document.activeElement);
+         default:
+           return !1
```

#### 68. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L2871-L2878` → after: `L722-L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L722-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L722-L726) · [Before (L2871-L2878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L2871-L2878)

```diff
-     const eQ = {
-       messageKey: "shaderPack:failedDeviceGraphics",
-       noAdapter: !1
-     };
-     class MQ extends Error {
-       constructor(QQ) {
-         super(`the shader pack can't run in this game: ${QQ}`), this.messageKey = QQ, this.name = "ShaderPackJoinError"
-       }
+ 
+     function Mk(kk) {
+       rk || (rk = !0, queueMicrotask((() => {
+         rk = !1, kk()
+       })))
```

#### 69. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L2880-L2994` → after: `L728-L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L728-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L728-L740) · [Before (L2880-L2994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L2880-L2994)

```diff
-     const GQ = "strict";
-     class pQ {
-       constructor(QQ) {
-         this.deps = QQ, this.pagePack = void 0, this.loaded = null, this.Hm = GQ, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this. … [truncated]
-           status: "none"
-         }))).then((QQ => (this.loaded = QQ, "active" === QQ.status && (this.handOverToPreviews(QQ), null !== QQ.harnessPolicy && (this.Hm = QQ.harnessPolicy, this.handOver())), QQ)))
-       }
-       async join(QQ) {
-         this.leave();
-         const FQ = this.game,
-           [wQ, qQ] = await Promise.all([this.pagePack, this.policyOf(QQ)]);
-         if (FQ !== this.game || "none" === wQ.status) return null;
-         const oQ = "active" === wQ.status ? wQ.pack.variants : wQ.variants,
-           DQ = (0, LQ.l)(oQ, qQ);
-         if (DQ && "active" === wQ.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
-         if (DQ) {
- ... (99 more removed lines; see GitHub link above)
+   },
+   4752: (kk, ek, ik) => {
+     ik.d(ek, {
+       e: () => rk,
+       i: () => bk,
+       j: () => mk
+     });
+     var Dk = ik(2388),
+       fk = ik(2395);
+     const Sk = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);
+ 
+     function bk(kk) {
+       return kk instanceof HTMLElement && (!!(kk.isContentEditable || kk instanceof HTMLTextAreaElement || kk instanceof HTMLSelectElement) || kk instanceof HTMLInputElement && !Sk.has(kk.type))
```

#### 70. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L2998-L3018` → after: `L743-L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L743-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L743-L747) · [Before (L2998-L3018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L2998-L3018)

```diff
-     function CQ(QQ, FQ, wQ, LQ) {
-       return qQ.l.subscribe(cQ, (QQ => {
-         let {
-           translationKey: FQ,
-           stillCurrent: wQ,
-           reasonKey: LQ
-         } = QQ;
-         wQ() && qQ.l.GA("chat", (0, oQ.h)(FQ, LQ))
-       })), new pQ({
-         load: SQ,
-         policyOf: iQ,
-         core: QQ,
-         previews: FQ,
-         noWebGpu: wQ,
-         notify: (QQ, FQ, wQ) => {
-           const LQ = {
- ... (5 more removed lines; see GitHub link above)
+     function rk(kk) {
+       let ek = null;
+       const ik = ik => {
+           const fk = bk(ik);
+           fk !== ek && (ek = fk, kk(Dk.k.UiCapture, Dk.t.Keyboard, 0, 0, fk ? Dk.t.Keyboard : 0))
```

#### 71. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3020-L3021` → after: `L749-L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L749-L750) · [Before (L3020-L3021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3020-L3021)

```diff
-         failInGame: QQ => {
-           qQ.l.GA(oQ.e, QQ)
+         fk = kk => {
+           ik(kk.target)
```

#### 72. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3023-L3038` → after: `L752-L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L752-L753) · [Before (L3023-L3038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3023-L3038)

```diff
-         warn: LQ
-       })
-     }
-     async function SQ() {
-       const [{
-         shaderPackPage: QQ,
-         harnessShaderPackMode: FQ
-       }, {
-         shaderPackTextures: LQ
-       }] = await Promise.all([wQ.e(130).then((() => wQ(38741))), wQ.e(131).then((() => wQ(6460)))]), qQ = await QQ.load();
-       return "active" !== qQ.status ? qQ : {
-         status: "active",
-         pack: {
-           variants: qQ.pack.variants,
-           layers: LQ().layers,
-           keepCircleShadows: qQ.pack.keepCircleShadows
+         Sk = kk => {
+           ik(kk.relatedTarget)
```

#### 73. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3040` → after: `L755-L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L755-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L755-L763) · [Before (L3040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3040)

```diff
-         harnessPolicy: FQ()
+         rk = () => {
+           ik(document.activeElement)
+         },
+         Pk = {
+           capture: !0,
+           passive: !0
+         };
+       return document.addEventListener("focusin", fk, Pk), document.addEventListener("focusout", Sk, Pk), document.addEventListener("keydown", rk, Pk), ik(document.activeElement), () => {
+         document.removeEventListener("focusin", fk, Pk), document.removeEventListener("focusout", Sk, Pk), document.removeEventListener("keydown", rk, Pk)
```

#### 74. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3043` → after: `L766-L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L766-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L766-L768) · [Before (L3043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3043)

```diff
-     async function iQ(QQ) {
+     const Pk = new Map;
+ 
+     function mk(kk, ek) {
```

#### 75. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3045-L3050` → after: `L770-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L770-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L770-L774) · [Before (L3045-L3050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3045-L3050)

```diff
-       const [{
-         harnessShaderPackMode: LQ
-       }, {
-         getShaderPackPolicy: qQ
-       }] = await Promise.all([wQ.e(130).then((() => wQ(38741))), wQ.e(90).then((() => wQ(40660)))]);
-       return null !== (FQ = LQ()) && void 0 !== FQ ? FQ : qQ(QQ)
+       let Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
+       Pk.set(Dk, (null !== (ik = Pk.get(Dk)) && void 0 !== ik ? ik : 0) & ~kk | ek & kk);
+       let Sk = 0;
+       for (const fk of Pk.values()) Sk |= fk;
+       return (0, fk.x)(kk, Sk & kk)
```

#### 76. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3053` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L777) · [Before (L3053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3053)

```diff
-   40399: (QQ, FQ, wQ) => {
+   40550: (kk, ek, ik) => {
```

#### 77. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3057-L3060` → after: `L782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L782) · [Before (L3057-L3060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3057-L3060)

```diff
-       h: () => vQ,
-       l: () => mQ,
-       o: () => uQ,
-       s: () => bQ
+       i: () => mk
```

#### 78. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3062-L3070` → after: `L784-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L784-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L784-L787) · [Before (L3062-L3070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3062-L3070)

```diff
-     var LQ = wQ(40407),
-       qQ = wQ(40411);
-     const oQ = "atlas:",
-       DQ = 3e4;
-     class kQ extends Error {
-       constructor(QQ, FQ) {
-         super(`fetching ${QQ} answered HTTP ${FQ}`), this.url = QQ, this.status = FQ, this.name = "TerrainTextureFetchError"
-       }
-     }
+     var Dk = ik(1903);
+     let fk = null,
+       Sk = 0;
+     const bk = new Set;
```

#### 79. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3072-L3085` → after: `L789-L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L789-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L789-L790) · [Before (L3072-L3085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3072-L3085)

```diff
-     function vQ(QQ) {
-       if (!QQ.startsWith(oQ)) return null;
-       const FQ = Number(QQ.slice(oQ.length));
-       return Number.isInteger(FQ) && FQ >= 0 ? FQ : null
-     }
-     async function mQ() {
-       const QQ = await wQ.e(202).then((() => wQ(33928)));
-       return {
-         atlasSheets: QQ.blockAtlasUrls,
-         texture: FQ => {
-           var wQ, LQ, oQ;
-           return null !== (wQ = null !== (LQ = null !== (oQ = QQ.animatedBlockTextures[FQ]) && void 0 !== oQ ? oQ : QQ.rotatedBlockTextures[FQ]) && void 0 !== LQ ? LQ : qQ.e[FQ]) && void 0 !== wQ ? wQ : null
-         }
-       }
+     function rk() {
+       return fk
```

#### 80. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3087-L3110` → after: `L792-L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L792-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L792-L794) · [Before (L3087-L3110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3087-L3110)

```diff
-     async function uQ(QQ) {
-       const FQ = new AbortController,
-         wQ = setTimeout((() => {
-           FQ.abort(new DOMException(`${QQ} took over ${DQ} ms`, "TimeoutError"))
-         }), DQ);
-       let LQ;
-       try {
-         const wQ = await fetch(QQ, {
-           signal: FQ.signal
-         });
-         if (!wQ.ok) throw new kQ(QQ, wQ.status);
-         LQ = await wQ.blob()
-       } finally {
-         clearTimeout(wQ)
-       }
-       const qQ = await createImageBitmap(LQ, {
- ... (8 more removed lines; see GitHub link above)
+ 
+     function Pk() {
+       return Sk
```

#### 81. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3115-L3194` → after: `L798-L799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L798-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L798-L799) · [Before (L3115-L3194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3115-L3194)

```diff
-       const {
-         width: FQ,
-         height: wQ
-       } = QQ, qQ = Math.max(1, Math.min(wQ, HQ)), oQ = (0, LQ.d)(FQ, qQ, {
-         willReadFrequently: !0
-       });
-       if (!oQ) throw new Error("no 2D context to read the texture back");
-       oQ.globalCompositeOperation = "copy";
-       const DQ = new Uint8Array(FQ * wQ * 4);
-       for (let LQ = 0; LQ < wQ; LQ += qQ) {
-         const kQ = Math.min(qQ, wQ - LQ);
-         oQ.drawImage(QQ, 0, LQ, FQ, kQ, 0, 0, FQ, kQ), DQ.set(oQ.getImageData(0, 0, FQ, kQ).data, LQ * FQ * 4)
-       }
-       return {
-         width: FQ,
-         height: wQ,
- ... (64 more removed lines; see GitHub link above)
+       fk = kk, Sk++, (0, Dk.c)();
+       for (const ek of bk) ek()
```

#### 82. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3326` → after: `L803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L803) · [Before (L3326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3326)

```diff
-       return "fetch" === QQ || "timeout" === QQ || "integrity" === QQ ? "download" : "browser"
+       bk.add(kk)
```

#### 83. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3329` → after: `L808-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L808-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L808-L814) · [Before (L3329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3329)

```diff
-       d: () => qQ,
+       b: () => Dk
+     });
+     const Dk = 2e3
+   },
+   40475: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => Ck,
```

#### 84. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3332-L3334` → after: `L817-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L817-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L817-L819) · [Before (L3332-L3334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3332-L3334)

```diff
-       n: () => kQ,
-       r: () => LQ,
-       s: () => oQ
+       l: () => Lk,
+       o: () => Yk,
+       r: () => Ak
```

#### 85. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3336-L3356` → after: `L821-L829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L821-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L821-L829) · [Before (L3336-L3356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3336-L3356)

```diff
-     const qQ = "https://discord.gg/playbloxd";
- 
-     function oQ(QQ) {
-       return "download" === QQ ? {
-         icon: "wifi",
-         title: "wasmScreens:downloadFailedTitle",
-         help: "wasmScreens:downloadFailedHelp",
-         helpValues: {},
-         discordLink: !1,
-         confirm: "general:tryAgain",
-         cancel: "general:back"
-       } : {
-         icon: "face-dizzy",
-         title: "wasmScreens:unsupportedTitle",
-         help: "wasmScreens:unsupportedHelp",
-         helpValues: {},
- ... (5 more removed lines; see GitHub link above)
+     var Dk = ik(171),
+       fk = ik(22),
+       Sk = ik(26),
+       bk = ik(2727),
+       rk = ik(1284),
+       Pk = ik(33707),
+       mk = ik(689),
+       Mk = ik(99),
+       Kk = ik(169);
```

#### 86. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3358-L3369` → after: `L831-L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L831-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L831-L841) · [Before (L3358-L3369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3358-L3369)

```diff
-     function DQ(QQ, FQ) {
-       return {
-         icon: "face-dizzy",
-         title: "wasmScreens:crashTitle",
-         help: FQ ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
-         helpValues: {
-           code: QQ.code
-         },
-         discordLink: FQ,
-         confirm: "general:reload",
-         cancel: "general:back"
-       }
+     function xk() {
+       var kk;
+       const ek = (0, bk.K)(),
+         ik = function(kk, ek) {
+           return {
+             sampleCount: kk.antiAliasing ? 4 : 1,
+             n: (0, bk.B)(kk.pixelScale, ek),
+             pixelated: (0, bk.z)(kk.pixelSmoothing)
+           }
+         }(fk.b.get("clientEscMenuOptions"), ek);
+       return ik.sampleCount > 1 && (0, Pk.b)() && (ik.sampleCount = 1), ik.n = null !== (kk = (0, Pk.m)()) && void 0 !== kk ? kk : ik.n, Dk.h.includes((0, Mk.getSoftwareRenderer)()) && (ik.sampleCount = 1, ik.n = Math.max(ik.n, (0, bk.B)(Kk.u.pixelScale, ek))), ik
```

#### 87. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3373-L3381` → after: `L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L849) · [Before (L3373-L3381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3373-L3381)

```diff
-       return {
-         icon: "face-dizzy",
-         title: "wasmScreens:turnstilePageTitle",
-         help: "wasmScreens:turnstilePageHelp",
-         helpValues: {},
-         discordLink: !1,
-         confirm: "general:ok",
-         cancel: null
-       }
+       for (const kk of Hk) kk()
```

#### 88. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3384-L3394` → after: `L852-L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L852-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L852-L855) · [Before (L3384-L3394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3384-L3394)

```diff
-     function vQ(QQ, FQ, wQ) {
-       return {
-         icon: "wifi",
-         title: "wasmScreens:disconnectedTitle",
-         help: wQ ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
-         helpValues: {
-           reason: QQ.reason
-         },
-         discordLink: null === QQ.name,
-         confirm: FQ ? "general:reconnect" : QQ.requiresRefresh ? "general:reload" : "general:ok",
-         cancel: null
+     function pk() {
+       if (null === nk) {
+         const kk = document.createElement("div");
+         kk.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", kk.setAttribute("aria-hidden", "true"), document.body.append(kk), Uk = kk, nk = new bk.b(kk, lk)
```

#### 89. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3426-L3429` → after: `L861-L863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L861-L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L861-L863) · [Before (L3426-L3429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3426-L3429)

```diff
-       if (0 === QQ) return null;
-       const FQ = xQ[QQ];
-       if (void 0 === FQ) throw new Error(`${QQ} is not a shader pack hook function id`);
-       return FQ
+       const ek = (0, bk.o)(),
+         [ik, Dk] = pk().size(ek);
+       return (0, bk.i)(ik, Dk, ek, kk.n)
```

#### 90. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3433-L3437` → after: `L867-L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L867-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L867-L872) · [Before (L3433-L3437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3433-L3437)

```diff
-       const FQ = LQ.d.length;
-       return {
-         strict: QQ >= FQ,
-         program: LQ.d[QQ % FQ]
-       }
+       var ek, ik, Dk, fk;
+       const Sk = (0, bk.o)(),
+         [Pk, mk] = pk().size(Sk);
+       if (Pk <= 0 || mk <= 0) return null;
+       const Mk = (0, bk.i)(Pk, mk, Sk, xk().n);
+       return (0, bk.e)(kk, Mk), kk.style.left = `${null!==(ek=null===(ik=wk)||void 0===ik?void 0:ik.rect.left)&&void 0!==ek?ek:0}px`, kk.style.top = `${null!==(Dk=null===(fk=wk)||void 0===fk?void 0:fk.rect.top)&&void 0!==Dk?Dk:0}px`, (0, rk.I)(kk.style, wk), Mk
```

#### 91. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3441` → after: `L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L876) · [Before (L3441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3441)

```diff
-       return Number(QQ.strict) * LQ.d.length + LQ.d.indexOf(QQ.program)
+       wk = kk, pk(), (0, rk.E)(Uk.style, kk, ""), lk()
```

#### 92. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3444-L3445` → after: `L879-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L879-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L879-L880) · [Before (L3444-L3445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3444-L3445)

```diff
-     function GQ(QQ) {
-       return "" === QQ ? [] : QQ.split(" ")
+     function Ck(kk, ek) {
+       kk.style.imageRendering = (0, bk.L)(ek.pixelated)
```

#### 93. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3448-L3458` → after: `L883-L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L883-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L883-L890) · [Before (L3448-L3458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3448-L3458)

```diff
-     function pQ(QQ) {
-       const FQ = {
-         variantFlags: new Uint8Array(qQ),
-         hooks: new Uint8Array(qQ * oQ),
-         moduleCodes: Array(qQ).fill(""),
-         reads: Array(2 * qQ).fill("")
-       };
-       for (const wQ of QQ) {
-         const QQ = MQ(wQ.key),
-           LQ = (QQ, FQ) => null === wQ.hooks.surface || wQ.reads.fragment.includes(QQ) ? 0 : FQ;
-         FQ.variantFlags[QQ] = (wQ.sceneDepth ? DQ : 0) | (wQ.movesVertices ? kQ : 0) | (wQ.sunShadow ? vQ : 0) | (wQ.airShadow ? mQ : 0) | (wQ.discards ? uQ : 0) | LQ("localPosition", HQ) | LQ("enchantSpeed", bQ) | LQ("enchantTier", YQ), FQ.hooks[QQ * oQ] = AQ(wQ.hooks.vertex), F … [truncated]
+     function Ak(kk, ek) {
+       const ik = (0, Sk.k)("appManagerUpdated|clientEscMenuOptions", (() => {
+           Ck(kk, xk()), ek()
+         })),
+         Dk = (0, Pk.t)(ek),
+         fk = (0, mk.o)(ek);
+       return pk(), Hk.add(ek), () => {
+         ik(), Dk(), fk(), Hk.delete(ek)
```

#### 94. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3492` → after: `L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L894) · [Before (L3492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3492)

```diff
-   40307: (QQ, FQ, wQ) => {
+   40587: (kk, ek, ik) => {
```

#### 95. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3494-L3505` → after: `L896-L898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L896-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L896-L898) · [Before (L3494-L3505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3494-L3505)

```diff
-       A: () => DQ,
-       D: () => AQ,
-       F: () => YQ,
-       J: () => xQ,
-       e: () => qQ,
-       h: () => LQ,
-       i: () => bQ,
-       k: () => uQ,
-       n: () => tQ,
-       q: () => oQ,
-       u: () => kQ,
-       x: () => vQ
+       b: () => bk,
+       d: () => Sk,
+       f: () => fk
```

#### 96. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3507-L3559` → after: `L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L900) · [Before (L3507-L3559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3507-L3559)

```diff
-     const LQ = 3,
-       qQ = 0,
-       oQ = 1,
-       DQ = 2,
-       kQ = {
-         uniform: 3,
-         Sb: 4,
-         special: 5,
-         volume: 6,
-         sampler: 7,
-         entities: 8,
-         entityGrids: 9
-       },
-       vQ = 10,
-       mQ = "BloxdPackInputs",
-       uQ = "bloxdPackInputs",
- ... (37 more removed lines; see GitHub link above)
+     let Dk = null;
```

#### 97. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3561-L3565` → after: `L902-L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L902-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L902-L903) · [Before (L3561-L3565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3561-L3565)

```diff
-     function xQ(QQ, FQ) {
-       const wQ = new DataView(QQ, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, bQ),
-         [LQ, qQ, oQ, DQ, kQ, vQ] = HQ;
-       wQ.setFloat32(LQ.offset, FQ.seconds, !0), wQ.setUint32(qQ.offset, FQ.lit ? 1 : 0, !0);
-       for (let mQ = 0; mQ < 3; mQ++) wQ.setInt32(oQ.offset + 4 * mQ, FQ.renderOffset[mQ], !0), wQ.setFloat32(DQ.offset + 4 * mQ, FQ.MQQ[mQ], !0), wQ.setFloat32(kQ.offset + 4 * mQ, FQ.eyePosition[mQ], !0), wQ.setFloat32(vQ.offset + 4 * mQ, FQ.shadowDirection[mQ], !0)
+     function fk(kk) {
+       Dk = kk
```

#### 98. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3569-L3576` → after: `L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L907) · [Before (L3569-L3576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3569-L3576)

```diff
-       const FQ = new Uint32Array(Math.max(1, QQ.length));
-       return QQ.forEach(((QQ, wQ) => {
-         let {
-           id: LQ,
-           rotation: qQ
-         } = QQ;
-         FQ[wQ] = 65535 & LQ | (3 & qQ) << 16
-       })), FQ
+       Dk === kk && (Dk = null)
```

#### 99. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3578-L3581` → after: `L909-L912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L909-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L909-L912) · [Before (L3578-L3581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3578-L3581)

```diff
-     const tQ = {
-       off: 0,
-       strict: 1,
-       allow: 2
+ 
+     function bk() {
+       var kk;
+       null === (kk = Dk) || void 0 === kk || kk()
```

#### 100. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3584` → after: `L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L915) · [Before (L3584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3584)

```diff
-   6470: (QQ, FQ, wQ) => {
+   40541: (kk, ek, ik) => {
```

#### 101. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3588-L3590` → after: `L920-L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L920-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L920-L922) · [Before (L3588-L3590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3588-L3590)

```diff
-       l: () => kQ,
-       m: () => qQ,
-       o: () => oQ
+       j: () => Kk,
+       n: () => Mk,
+       p: () => xk
```

#### 102. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3592-L3599` → after: `L924-L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L924-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L924-L942) · [Before (L3592-L3599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3592-L3599)

```diff
-     const LQ = ["terrain", "liquid", "model"];
- 
-     function qQ() {
-       const QQ = [];
-       for (const FQ of [!1, !0])
-         for (const wQ of LQ) QQ.push({
-           strict: FQ,
-           program: wQ
+     var Dk = ik(2823);
+     class fk extends Error {
+       constructor(kk, ek, ik) {
+         super(`${"fetch"===kk?"fetching":"decoding"} ${ek} failed`, ik), this.stage = kk, this.source = ek, this.name = "ShellImageError"
+       }
+     }
+     async function Sk(kk) {
+       let ek, ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dk.M,
+         Sk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
+       if ("string" === typeof kk) try {
+         ek = await ik(kk)
+       } catch (bk) {
+         throw new fk("fetch", kk, {
+           cause: bk
+         })
+       } else ek = kk;
+ ... (3 more added lines; see GitHub link above)
```

#### 103. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3601` → after: `L944-L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L944-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L944-L953) · [Before (L3601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3601)

```diff
-       return QQ
+         return await createImageBitmap(kk, {
+           premultiplyAlpha: "none",
+           colorSpaceConversion: "none",
+           imageOrientation: Sk
+         })
+       } catch (bk) {
+         throw new fk("decode", "string" === typeof kk ? kk : `${ek.byteLength} bytes`, {
+           cause: bk
+         })
+       }
```

#### 104. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3605` → after: `L960-L963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L960-L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L960-L963) · [Before (L3605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3605)

```diff
-       return `${QQ.strict?"strict":"allow"}.${QQ.program}`
+       if (bk = kk, null !== kk) {
+         for (const [ek, ik] of rk) kk.Iik(ek, ik);
+         rk.clear()
+       }
```

#### 105. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3609` → after: `L967-L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L967-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L967-L976) · [Before (L3609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3609)

```diff
-       return !QQ.hooks.vertex && !QQ.hooks.surface && !QQ.hooks.light
+       const ek = Pk++;
+       return bk ? bk.Iik(ek, kk) : rk.set(ek, kk), ek
+     }
+     async function Kk(kk, ek, ik) {
+       const Dk = await Sk(kk, ek, ik);
+       return {
+         id: Mk(Dk),
+         width: Dk.width,
+         height: Dk.height
+       }
```

#### 106. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L3613` → after: `L988-L1002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L988-L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/87.js#L988-L1002) · [Before (L3613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/87.js#L3613)

```diff
-       return "off" !== FQ && (null === QQ || QQ.some((QQ => QQ.key.strict === ("strict" === FQ) && !DQ(QQ))))
+       if (!Object.prototype.hasOwnProperty.call(kk, ek)) throw new TypeError("attempted to use private field on non-instance");
+       return kk
+     }
+     ik.d(ek, {
+       e: () => Dk
+     })
+   },
+   40492: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => fk
+     });
+     var Dk = 0;
+ 
+     function fk(kk) {
+       return "__private_" + Dk++ + "_" + kk
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/88.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/88.js` (66 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d)

#### 1. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L4-L49` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L4-L6) · [Before (L4-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L4-L49)

```diff
-   4638: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       Ab: () => zQ,
-       B: () => LQ,
-       Eb: () => IQ,
-       F: () => oQ,
-       I: () => tQ,
-       Ib: () => TQ,
-       L: () => gQ,
-       Lb: () => UQ,
-       Nb: () => AQ,
-       O: () => uQ,
-       Q: () => HQ,
-       Qb: () => iQ,
-       U: () => mQ,
-       Ub: () => SQ,
- ... (30 more removed lines; see GitHub link above)
+   40118: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       startWasmPadGameplay: () => ak
```

#### 2. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L51-L231` → after: `L8-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L8-L27) · [Before (L51-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L51-L231)

```diff
-     const LQ = 32,
-       qQ = 33.333333333333336,
-       oQ = {
-         AbiVersion: 0,
-         Status: 1,
-         LastError: 2,
-         ErrorCount: 3,
-         FrameIndex: 4,
-         TicksRun: 5,
-         TicksDropped: 6,
-         Alpha: 7,
-         NetOutPtr: 8,
-         NetOutLen: 9,
-         WorkerOutPtr: 10,
-         WorkerOutLen: 11,
-         EventsPtr: 12,
- ... (165 more removed lines; see GitHub link above)
+     ik(40123);
+     var Dk = ik(40130),
+       fk = ik(40145),
+       Sk = ik(1911),
+       bk = ik(40157),
+       rk = ik(4741),
+       Pk = ik(4721),
+       mk = ik(40161),
+       Mk = ik(40165),
+       Kk = ik(4750),
+       xk = ik(40247),
+       nk = ik(2395),
+       Uk = ik(8683),
+       Hk = ik(40133),
+       wk = ik(8665),
+       lk = ik(38676);
+ ... (4 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L233-L235` → after: `L29-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L29-L35) · [Before (L233-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L233-L235)

```diff
-       pQ = 4,
-       cQ = 4,
-       CQ = 65535,
+       yk = pk("primary-fire"),
+       Yk = pk("alt-fire"),
+       Lk = pk("mid-fire"),
+       Ck = pk("jump"),
+       Ak = pk("ReloadGun"),
+       jk = pk("SwapCameraZoom"),
+       sk = pk("TouchAction1"),
```

#### 4. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L237-L247` → after: `L37-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L37-L38) · [Before (L237-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L237-L247)

```diff
-         Open: 1,
-         TooLarge: 2,
-         NothingStaged: 3,
-         NotPlayback: 4,
-         NotOpen: 5,
-         BadValue: 6,
-         Crop: 7,
-         NotLive: 8,
-         ModuleLoad: 9,
-         ModuleTrap: 10,
-         Port: 11
+         SpecialAction1: pk("SpecialAction1"),
+         SpecialAction2: pk("SpecialAction2")
```

#### 5. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L249-L271` → after: `L40-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L40-L41) · [Before (L249-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L249-L271)

```diff
-       iQ = {
-         Busy: 0,
-         Range: 1,
-         OtherBody: 2,
-         TooLarge: 3,
-         Corrupt: 4,
-         Ended: 5
-       },
-       WQ = 88,
-       RQ = 0,
-       OQ = 24,
-       sQ = 48,
-       rQ = 80,
-       IQ = {
-         FilePartDone: 526,
-         FileDone: 527,
- ... (7 more removed lines; see GitHub link above)
+       Vk = (kk, ek) => {
+         (0, nk.r)(rk.O.PadAction, kk, 0, 0, (0, nk.o)(ek, performance.now()))
```

#### 6. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L273-L277` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L43-L44) · [Before (L273-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L273-L277)

```diff
-       UQ = {
-         ToggleRecording: 0,
-         SaveClip: 1,
-         ViewerOpened: 2,
-         ViewerClosed: 3
+       Fk = kk => {
+         Vk(kk, bk.ld.Down)
```

#### 7. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L279-L282` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L46-L47) · [Before (L279-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L279-L282)

```diff
-       NQ = {
-         Clip: 0,
-         Recording: 1,
-         Edited: 2
+       uk = kk => {
+         Vk(kk, 0)
```

#### 8. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L284-L300` → after: `L49-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L49-L50) · [Before (L284-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L284-L300)

```diff
-       TQ = {
-         RecordingStarted: 0,
-         RecordingStopped: 1,
-         RecordingDiscarded: 2,
-         ClipSaved: 3,
-         ClipEmpty: 4,
-         ClippingNotOn: 5,
-         Disallowed: 6,
-         ClippingOn: 7,
-         ClippingOff: 8,
-         LimitReached: 9,
-         ClipSettingsChanged: 10,
-         SaveBusy: 11,
-         CloseViewerFirst: 12,
-         FileDiscarded: 13,
-         SaveFailed: 14,
- ... (1 more removed lines; see GitHub link above)
+       qk = kk => {
+         Fk(kk), uk(kk)
```

#### 9. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L302-L319` → after: `L52-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L52-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L52-L54) · [Before (L302-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L302-L319)

```diff
-       KQ = {
-         Cleared: 0,
-         Text: 1,
-         Int: 2,
-         Double: 3
-       },
-       zQ = 65535,
-       lQ = {
-         FlyingText: 1,
-         PlayerKilled: 2,
-         Killfeed: 3
-       },
-       jQ = {
-         None: 0,
-         Paused: 1,
-         Playing: 2,
- ... (2 more removed lines; see GitHub link above)
+       Ik = () => {
+         const kk = (0, Mk.g)();
+         return null !== kk && void 0 !== kk && kk.isCoreRunning ? kk : null
```

#### 10. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L321-L366` → after: `L56-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L56-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L56-L78) · [Before (L321-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L321-L366)

```diff
-       aQ = 2,
-       XQ = {
-         UiText: 0,
-         Environment: 6,
-         Hud: 12,
-         Count: 19
-       },
-       fQ = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShi … [truncated]
-       VQ = {
-         SkyTable: 600,
-         SkyImagesReady: 601,
-         SkyTableHeaderBytes: 8,
-         SkyTableEntryBytes: 92,
-         SkyImagesReadyBytes: 32,
-         KindNone: 0,
-         KindCustom: 1,
- ... (30 more removed lines; see GitHub link above)
+       zk = kk => bk.t.playerFlags(kk.api.apiView, 0),
+       Qk = kk => null !== kk && bk.t.targetBlockId(kk.api.apiView, 0) !== bk.Vc,
+       vk = () => {
+         const kk = (0, Uk.c)(),
+           ek = new Hk.b;
+         let ik = !1;
+         const Dk = (kk, ek) => {
+             (0, nk.r)(rk.O.PadLook, bk.rd.Rate, kk, ek, 0)
+           },
+           fk = () => {
+             ik = !1, ek.reset(), Dk(0, 0)
+           };
+         return {
+           update: (fk, Sk, Pk) => {
+             ik || (kk.discardPending(), ik = !0);
+             const mk = (0, Hk.r)(ek, fk, Sk, Pk, performance.now());
+ ... (7 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L368-L524` → after: `L80-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L80-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L80-L82) · [Before (L368-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L368-L524)

```diff
-       JQ = {
-         None: 0,
-         InputOverCapacity: 1,
-         InputTruncated: 2,
-         InputUnknownKind: 3,
-         InputNonFinite: 4,
-         NetOverCapacity: 16,
-         NetTruncated: 17,
-         NetOversize: 18,
-         NetBadKind: 19,
-         NetConnUnknown: 20,
-         NetConnBackwards: 21,
-         WorkerOverCapacity: 32,
-         WorkerTruncated: 33,
-         WorkerUnknownKind: 34,
-         TimeNonFinite: 48,
- ... (141 more removed lines; see GitHub link above)
+       Ek = () => {
+         const kk = Ik();
+         return null !== kk && 0 !== (zk(kk) & bk.yd.PadSneakToggled)
```

#### 12. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L526-L550` → after: `L84-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L84-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L84-L200) · [Before (L526-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L526-L550)

```diff
-       EQ = 8,
-       nQ = {
-         GameCodeMessage: 4,
-         NewOtherEntitySettings: 23,
-         NewClientOptions: 37,
-         Chat: 64,
-         UiRequestPopup: 8,
-         TaskProgress: 9,
-         CustomKillfeed: 15,
-         TopRightHelper: 24,
-         NewUiRequest: 51,
-         PlayerKilled: 61,
-         OverShopInfo: 43,
-         ShowShopTutorial: 76,
-         SetCookie: 0,
-         LeaveValues: 85,
- ... (9 more removed lines; see GitHub link above)
+       hk = () => {
+         const kk = (kk => {
+           const ek = kk => function() {
+             return (0, xk.c)(), kk(...arguments)
+           };
+           return {
+             primaryFireDown: ek((() => (Fk(yk), 0))),
+             primaryFireUp: ek((() => {
+               uk(yk)
+             })),
+             altFireDown: ek((() => (Fk(Yk), 0))),
+             altFireUp: ek((() => {
+               uk(Yk)
+             })),
+             jumpDown: ek((() => {
+               qk(Ck)
+ ... (101 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L552-L598` → after: `L202-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L202-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L202-L209) · [Before (L552-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L552-L598)

```diff
-       gQ = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
-   },
-   40232: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => kQ
-     });
-     const LQ = 1 << 20,
-       qQ = 1 << 21,
-       oQ = 1024,
-       DQ = 2048;
- 
-     function kQ(QQ, FQ, wQ) {
-       const kQ = QQ + LQ,
-         vQ = FQ + oQ,
-         mQ = wQ + LQ;
-       return kQ < 0 || kQ >= qQ || mQ < 0 || mQ >= qQ || vQ < 0 || vQ >= DQ ? -1 : (kQ * qQ + mQ) * DQ + vQ
- ... (31 more removed lines; see GitHub link above)
+       ak = () => {
+         const kk = (0, fk.d)(hk()),
+           ek = (0, Dk.b)(),
+           ik = null;
+         return () => {
+           kk(), ek(), null === ik || void 0 === ik || ik()
+         }
+       }
```

#### 14. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L600` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L211) · [Before (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L600)

```diff
-   40222: (QQ, FQ, wQ) => {
+   4721: (kk, ek, ik) => {
```

#### 15. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L603` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L215) · [Before (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L603)

```diff
-       H: () => hQ,
+       F: () => bk,
```

#### 16. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L605-L611` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L217) · [Before (L605-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L605-L611)

```diff
-       M: () => fQ,
-       N: () => XQ,
-       Q: () => nQ,
-       T: () => EQ,
-       U: () => wF,
-       Y: () => ZQ,
-       ab: () => OQ,
+       K: () => sk,
```

#### 17. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L613-L614` → after: `L219-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L219-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L219-L220) · [Before (L613-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L613-L614)

```diff
-       d: () => DF,
-       h: () => PQ,
+       g: () => Yk,
+       j: () => qk,
```

#### 18. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L616-L617` → after: `L222-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L222-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L222-L224) · [Before (L616-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L616-L617)

```diff
-       p: () => JQ,
-       t: () => BQ,
+       n: () => lk,
+       q: () => Ck,
+       r: () => yk,
```

#### 19. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L619-L620` → after: `L226-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L226-L227) · [Before (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L619-L620)

```diff
-       w: () => oF,
-       z: () => jQ
+       x: () => dk,
+       y: () => Vk
```

#### 20. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L622-L672` → after: `L229-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L229-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L229-L235) · [Before (L622-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L622-L672)

```diff
-     var LQ = wQ(307),
-       qQ = wQ(268),
-       oQ = wQ(273),
-       DQ = wQ(17),
-       kQ = wQ(2753),
-       vQ = wQ(656),
-       mQ = wQ(4358),
-       uQ = wQ(2697),
-       HQ = wQ(3318),
-       bQ = wQ(96),
-       YQ = wQ(299),
-       xQ = wQ(27),
-       AQ = wQ(282),
-       tQ = wQ(118),
-       eQ = wQ(629),
-       MQ = wQ(126),
- ... (35 more removed lines; see GitHub link above)
+     var Dk = ik(4728);
+     const fk = {
+       lockPointer: () => !1,
+       unlockPointer: () => {},
+       leaveGame: () => {}
+     };
+     let Sk = fk;
```

#### 21. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L675-L686` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L238) · [Before (L675-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L675-L686)

```diff
-       return function(QQ) {
-         try {
-           return QQ()
-         } catch {
-           return null
-         }
-       }((() => {
-         var FQ, wQ, LQ, DQ;
-         const kQ = null !== (FQ = null === (wQ = QQ.info) || void 0 === wQ ? void 0 : wQ.vendor) && void 0 !== FQ ? FQ : "";
-         return "windows" === (0, bQ.getOperatingSystem)() && "" !== kQ && "intel" !== (0, bQ.normaliseGpuVendor)(kQ) ? null : ((0, bQ.seedGpuVendor)(kQ), vQ = (0, qQ.k)(), mQ = (0, oQ.f)(kQ, null !== (LQ = null === (DQ = QQ.info) || void 0 === DQ ? void 0 : DQ.architecture) && vo … [truncated]
-         var vQ, mQ
-       }))
+       Sk = null !== kk && void 0 !== kk ? kk : fk
```

#### 22. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L690-L762` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L242) · [Before (L690-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L690-L762)

```diff
-       var QQ;
-       return {
-         gpu: null !== (QQ = navigator.gpu) && void 0 !== QQ ? QQ : null,
-         webgl2: () => {
-           try {
-             return null !== document.createElement("canvas").getContext("webgl2")
-           } catch {
-             return !1
-           }
-         },
-         webgl1: () => function(QQ) {
-           let FQ, wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cQ.b;
-           try {
-             FQ = QQ.getContext("webgl")
-           } catch {
-             FQ = null
- ... (57 more removed lines; see GitHub link above)
+       return Sk
```

#### 23. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L766-L769` → after: `L255-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L255-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L255-L256) · [Before (L766-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L766-L769)

```diff
-       try {
-         return QQ()
-       } catch {
-         return !1
+       return Pk.add(kk), () => {
+         Pk.delete(kk)
```

#### 24. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L773-L892` → after: `L260-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L260-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L260-L262) · [Before (L773-L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L773-L892)

```diff
-     function KQ(QQ) {
-       return "lite" === QQ ? "webgpu" : "webgl2" === QQ || "babylon" === QQ ? "webgl" : null
-     }
-     async function zQ() {
-       let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NQ();
-       const FQ = await async function(QQ) {
-         const FQ = function(QQ) {
-             const FQ = QQ.override(),
-               wQ = QQ.webGpuSetting(),
-               LQ = null === FQ && !0 !== wQ && QQ.JY(),
-               qQ = null !== FQ || null !== wQ || LQ ? null : QQ.claimed(),
-               oQ = null !== FQ ? "override" : !0 === wQ ? "setting" : LQ ? "pack" : !1 === wQ ? "setting" : null !== qQ ? "claim" : "default",
-               DQ = function(QQ) {
-                 return "override" === QQ || "setting" === QQ
-               }(oQ);
-             if ("webgl" === FQ || "webgl1" === FQ || "webgl" === qQ || "setting" === oQ && !1 === wQ) return {
- ... (104 more removed lines; see GitHub link above)
+     function pk(kk, ek) {
+       for (const Dk of Pk) try {
+         Dk(kk)
```

#### 25. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L894` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L264) · [Before (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L894)

```diff
-         return DQ instanceof CQ.g
+         ek(ik)
```

#### 26. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L898-L913` → after: `L268-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L268-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L268-L271) · [Before (L898-L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L898-L913)

```diff
-     function XQ(QQ, FQ, wQ) {
-       if ("webgpu" !== QQ.backend) return !1;
-       const LQ = VQ(FQ, "terrainFetch", "texture", "storage");
-       return null !== LQ ? LQ : null !== QQ.adapter && (0, tQ.k)(QQ.adapter, wQ)
-     }
- 
-     function fQ(QQ, FQ, wQ) {
-       if ("webgpu" !== QQ.backend) return !1;
-       const LQ = VQ(FQ, "sceneDepth", "off", "on");
-       return null !== LQ ? LQ : null !== QQ.adapter && (0, tQ.l)(QQ.adapter, wQ)
-     }
- 
-     function VQ(QQ, FQ, wQ, LQ) {
-       const qQ = new URLSearchParams(QQ).get(FQ),
-         oQ = null !== qQ && void 0 !== qQ ? qQ : (0, vQ.d)(FQ);
-       return oQ !== wQ && oQ !== LQ ? null : (lQ ||= null === qQ, oQ === wQ)
+     function yk(kk) {
+       return mk.add(kk), () => {
+         mk.delete(kk)
+       }
```

#### 27. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L917-L921` → after: `L275-L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L275-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L275-L281) · [Before (L917-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L917-L921)

```diff
-       return "webgl" === QQ.backend && (0, oQ.q)(FQ)
-     }
- 
-     function JQ(QQ) {
-       return null !== QQ && "missing" in QQ
+       const ik = Mk < 0 ? 0 : kk - Mk;
+       Mk = kk;
+       for (const fk of mk) try {
+         fk(ik)
+       } catch (Dk) {
+         ek(Dk)
+       }
```

#### 28. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L925-L933` → after: `L285-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L285-L286) · [Before (L925-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L925-L933)

```diff
-       let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DQ.c;
-       try {
-         const wQ = "start_failed" === QQ || "pipeline_failed" === QQ,
-           LQ = FQ.turnOffWebGpuAfterDeviceLoss(wQ ? "visible" : (0, AQ.j)((0, YQ.g)()));
-         return !lQ || LQ && !FQ.isWebGpuOffAfterLoss() || (0, vQ.s)("webgpuLoss"), FQ.isWebGpuOffAfterLoss() && "webgpu" === KQ(xQ.i.getItem(uQ.e)) && xQ.i.removeItem(uQ.e), (0, kQ.o)("webgpuloss") && (0, mQ.b)((FQ => {
-           FQ.noteWebGpuLoss("wasm", LQ ? QQ : `${QQ}, which storage didn't keep`, null)
-         })), LQ
-       } catch {
-         return !1
+       return Kk.add(kk), () => {
+         Kk.delete(kk)
```

#### 29. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L938` → after: `L291-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L291-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L291-L293) · [Before (L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L938)

```diff
-       return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !ZQ()) ? EQ(QQ) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
+       return xk.add(kk), () => {
+         xk.delete(kk)
+       }
```

#### 30. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L940` → after: `L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L295) · [Before (L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L940)

```diff
-     const gQ = "framePacing";
+     let Ak = 0;
```

#### 31. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L943-L944` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L298) · [Before (L943-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L943-L944)

```diff
-       const FQ = new URLSearchParams(QQ).get(gQ);
-       return null !== FQ && /^\d{1,9}$/.test(FQ) ? Number(FQ) : void 0
+       Ak += kk
```

#### 32. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L948-L957` → after: `L302-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L302-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L302-L303) · [Before (L948-L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L948-L957)

```diff
-       let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
-       try {
-         return "webgpu" === KQ(new URLSearchParams(QQ).get(uQ.b))
-       } catch {
-         return !1
-       }
-     }
- 
-     function yQ(QQ) {
-       return !!BQ(QQ) || QQ instanceof Error && !(QQ instanceof WebAssembly.RuntimeError) && QQ.message.startsWith(`${pQ.h.RenderSurfaceUnusable}:`)
+       const kk = Ak;
+       return Ak = 0, kk
```

#### 33. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L961-L965` → after: `L307-L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L307-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L307-L309) · [Before (L961-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L961-L965)

```diff
-       const {
-         name: FQ,
-         message: wQ
-       } = null !== QQ && void 0 !== QQ ? QQ : {};
-       return "InvalidStateError" === FQ && "string" === typeof wQ && wQ.startsWith("GPUDevice.")
+       return Hk.add(kk), () => {
+         Hk.delete(kk)
+       }
```

#### 34. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L969-L970` → after: `L313-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L313-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L313-L315) · [Before (L969-L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L969-L970)

```diff
-       const FQ = QQ;
-       return "function" === typeof FQ.bLQ && "function" === typeof FQ.YLQ ? FQ : null
+       return wk.add(kk), () => {
+         wk.delete(kk)
+       }
```

#### 35. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L973-L974` → after: `L318-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L318-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L318-L319) · [Before (L973-L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L973-L974)

```diff
-     function QF(QQ) {
-       return "function" === typeof QQ.CLQ ? QQ : null
+     function Fk() {
+       nk = 0, Uk = 0, Mk = -1
```

#### 36. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L978-L980` → after: `L322-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L322-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L322-L326) · [Before (L978-L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L978-L980)

```diff
-     function wF(QQ) {
-       const FQ = null === QQ || void 0 === QQ ? void 0 : QQ.KoQ();
-       return void 0 === FQ ? void 0 : new Error(FQ)
+     function uk(kk, ek) {
+       if ("paced" === kk) return Uk += ek, null;
+       if ("drawn" !== kk && "skipped" !== kk) return null;
+       const ik = ek + Uk;
+       return Uk = 0, ik
```

#### 37. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L985-L994` → after: `L329-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L329-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L329-L356) · [Before (L985-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L985-L994)

```diff
-     function oF(QQ, FQ, wQ, LQ, qQ, oQ) {
-       return (0, CQ.l)(function(QQ, FQ, wQ, LQ, qQ, oQ) {
-         return (0, SQ.f)(QQ, FQ, (() => QQ.CLQ(wQ, LQ, qQ, oQ.indirectHangs, oQ.storagePullBreaks, oQ.splitPassBreaks, oQ.framesAhead, oQ.instancedTerrainSlow)))
-       }(QQ, FQ, wQ, LQ, qQ, oQ), qF, `${pQ.h.RenderSurfaceUnusable}: the renderer didn't open in ${qF/1e3} s`, kF)
-     }
-     async function DF(QQ, FQ, wQ, LQ, qQ, oQ) {
-       if ("function" !== typeof QQ.SDQ) throw new Error("this core has no set_renderer");
-       const DQ = await oF(FQ, FF, wQ, qQ, LQ, oQ);
-       try {
-         QQ.SDQ(DQ)
+     function qk(kk, ek, ik, fk) {
+       const Sk = (0, Dk.j)(ek),
+         bk = kk > 0 ? performance.now() : 0;
+       for (let Dk = 0; Dk < kk; Dk++)
+         for (const kk of Hk) try {
+           kk()
+         } catch (rk) {
+           fk(rk)
+         }
+       if (kk > 0 && jk(performance.now() - bk), null !== ik) {
+         for (const kk of Kk) try {
+           kk(ik)
+         } catch (rk) {
+           fk(rk)
+         }
+         nk += ik
+ ... (12 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L996` → after: `L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L358) · [Before (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L996)

```diff
-         throw kF(DQ), kQ
+         fk(rk)
```

#### 39. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1006` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L362) · [Before (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L1006)

```diff
-   40224: (QQ, FQ, wQ) => {
+   4750: (kk, ek, ik) => {
```

#### 40. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1008` → after: `L364-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L364-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L364-L368) · [Before (L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L1008)

```diff
-       b: () => LQ
+       e: () => fk,
+       g: () => Sk,
+       k: () => bk,
+       n: () => Dk,
+       q: () => rk
```

#### 41. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1011-L1018` → after: `L371-L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L371-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L371-L565) · [Before (L1011-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L1011-L1018)

```diff
-       extensions: ["ANGLE_instanced_arrays", "OES_vertex_array_object", "OES_element_index_uint", "OES_standard_derivatives"],
-       limits: {
-         MAX_VERTEX_ATTRIBS: 16,
-         MAX_TEXTURE_SIZE: 2048,
-         MAX_TEXTURE_IMAGE_UNITS: 8,
-         MAX_VARYING_VECTORS: 8,
-         MAX_VERTEX_UNIFORM_VECTORS: 128,
-         MAX_FRAGMENT_UNIFORM_VECTORS: 34
+         Mouse1: 1,
+         Mouse2: 2,
+         Mouse3: 3,
+         "Alt+Left Click": 4,
+         F2: 5,
+         F4: 6,
+         F5: 7,
+         F8: 8,
+         F9: 9,
+         Digit0: 10,
+         Digit1: 11,
+         Digit2: 12,
+         Digit3: 13,
+         Digit4: 14,
+         Digit5: 15,
+         Digit6: 16,
+ ... (179 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1020-L1021` → after: `L567-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L567-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L567-L638) · [Before (L1020-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L1020-L1021)

```diff
-       vertexHighFloatBits: 23
-     }
+       fk = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustom … [truncated]
+       Sk = {
+         forward: [21, 46],
+         backward: [31, 49],
+         left: [30, 47],
+         right: [32, 48],
+         sprint: [50, 51],
+         jump: [59],
+         crouch: [52, 41, 60, 61, 62, 53],
+         "primary-fire": [1],
+         "alt-fire": [3, 22],
+         SpecialAction1: [23],
+         SpecialAction2: [33],
+         ReloadGun: [23],
+         DropItem: [20],
+         "mid-fire": [2, 4],
+ ... (56 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1023` → after: `L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L640) · [Before (L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L1023)

```diff
-   40239: (QQ, FQ, wQ) => {
+   40247: (kk, ek, ik) => {
```

#### 44. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1025-L1026` → after: `L642-L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L642-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L642-L644) · [Before (L1025-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L1025-L1026)

```diff
-       b: () => vQ,
-       d: () => kQ
+       c: () => bk,
+       g: () => Sk,
+       h: () => fk
```

#### 45. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1028-L1034` → after: `L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L646) · [Before (L1028-L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L1028-L1034)

```diff
-     var LQ = wQ(671),
-       qQ = wQ(676);
- 
-     function oQ(QQ, FQ) {
-       const wQ = null === FQ ? void 0 : LQ.c.get(FQ);
-       return "all" === wQ || "webgl" === wQ && "webgpu" !== QQ.backend ? FQ : null
-     }
+     let Dk = null;
```

#### 46. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1037` → after: `L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L649) · [Before (L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L1037)

```diff
-       return "software_adapter" === QQ.reason ? null : QQ.adapter
+       Dk = kk
```

#### 47. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1040-L1042` → after: `L652-L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L652-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L652-L653) · [Before (L1040-L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L1040-L1042)

```diff
-     function kQ(QQ, FQ) {
-       const wQ = (0, LQ.n)();
-       return null === wQ ? null : (0, LQ.d)(DQ(QQ), wQ, FQ ? LQ.i : LQ.h)
+     function Sk(kk) {
+       Dk === kk && (Dk = null)
```

#### 48. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1045-L1048` → after: `L656-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L656-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L656-L658) · [Before (L1045-L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L1045-L1048)

```diff
-     function vQ(QQ, FQ) {
-       let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qQ.j;
-       const LQ = oQ(QQ, FQ);
-       return null !== LQ && "webgl" === QQ.backend && wQ(LQ) ? null : LQ
+     function bk() {
+       var kk;
+       null === (kk = Dk) || void 0 === kk || kk()
```

#### 49. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1051` → after: `L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L661) · [Before (L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L1051)

```diff
-   40226: (QQ, FQ, wQ) => {
+   4752: (kk, ek, ik) => {
```

#### 50. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1053-L1055` → after: `L663-L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L663-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L663-L664) · [Before (L1053-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L1053-L1055)

```diff
-       b: () => qQ,
-       f: () => uQ,
-       g: () => DQ,
+       e: () => rk,
+       i: () => bk,
```

#### 51. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1058-L1067` → after: `L667-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L667-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L667-L669) · [Before (L1058-L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L1058-L1067)

```diff
-     var LQ = wQ(35943);
-     class qQ extends Error {
-       constructor(QQ, FQ) {
-         let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         super(`${QQ}: the module trapped${wQ?" in an earlier call":""}: ${String(FQ)}`, {
-           cause: FQ
-         }), this.site = QQ, this.trap = FQ, this.earlier = wQ, this.name = "ModuleTrapError", FQ instanceof Error && void 0 !== FQ.stack && (this.stack = `${this.name}: ${this.message}\n${FQ.stack}`)
-       }
-     }
-     const oQ = new WeakMap;
+     var Dk = ik(2388),
+       fk = ik(2395);
+     const Sk = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);
```

#### 52. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1070` → after: `L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L672) · [Before (L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L1070)

```diff
-       return oQ.has(QQ)
+       return kk instanceof HTMLElement && (!!(kk.isContentEditable || kk instanceof HTMLTextAreaElement || kk instanceof HTMLSelectElement) || kk instanceof HTMLInputElement && !Sk.has(kk.type))
```

#### 53. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1073-L1074` → after: `L675-L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L675-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L675-L696) · [Before (L1073-L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L1073-L1074)

```diff
-     function kQ(QQ, FQ) {
-       oQ.has(QQ) || oQ.set(QQ, FQ)
+     function rk(kk) {
+       let ek = null;
+       const ik = ik => {
+           const fk = bk(ik);
+           fk !== ek && (ek = fk, kk(Dk.k.UiCapture, Dk.t.Keyboard, 0, 0, fk ? Dk.t.Keyboard : 0))
+         },
+         fk = kk => {
+           ik(kk.target)
+         },
+         Sk = kk => {
+           ik(kk.relatedTarget)
+         },
+         rk = () => {
+           ik(document.activeElement)
+         },
+         Pk = {
+ ... (6 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1078-L1114` → after: `L701-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L701-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L701-L706) · [Before (L1078-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L1078-L1114)

```diff
-       return !!(0, LQ.h)(FQ) && (kQ(QQ, FQ), !0)
-     }
-     const mQ = [
-       ["error", QQ => QQ.error],
-       ["unhandledrejection", QQ => QQ.reason]
-     ];
- 
-     function uQ(QQ, FQ, wQ) {
-       let DQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
-       return oQ.has(QQ) ? Promise.reject(new qQ(FQ, oQ.get(QQ), !0)) : new Promise(((oQ, vQ) => {
-         const uQ = wQ => {
-             kQ(QQ, wQ), YQ(), vQ(new qQ(FQ, wQ))
-           },
-           HQ = QQ => {
-             QQ instanceof WebAssembly.RuntimeError ? uQ(QQ) : (YQ(), vQ(QQ))
-           },
- ... (21 more removed lines; see GitHub link above)
+       var ik;
+       let Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
+       Pk.set(Dk, (null !== (ik = Pk.get(Dk)) && void 0 !== ik ? ik : 0) & ~kk | ek & kk);
+       let Sk = 0;
+       for (const fk of Pk.values()) Sk |= fk;
+       return (0, fk.x)(kk, Sk & kk)
```

#### 55. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1117-L1178` → after: `L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L709) · [Before (L1117-L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L1117-L1178)

```diff
-   40242: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       A: () => aQ,
-       D: () => NQ,
-       G: () => iQ,
-       J: () => IQ,
-       M: () => UQ,
-       O: () => KQ,
-       R: () => rQ,
-       c: () => SQ,
-       d: () => pQ,
-       h: () => zQ,
-       k: () => TQ,
-       n: () => GQ,
-       p: () => CQ,
-       q: () => eQ,
- ... (46 more removed lines; see GitHub link above)
+   36530: (kk, ek, ik) => {
```

#### 56. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1180-L1201` → after: `L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L711) · [Before (L1180-L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L1180-L1201)

```diff
-       WQ = QQ, (0, DQ.b)(QQ)
-     }
-     const OQ = "wasmClientRenderLost";
- 
-     function sQ() {
-       kQ.m.setItem(OQ, !0)
-     }
- 
-     function rQ() {
-       return !0 === kQ.m.getItem(OQ)
-     }
- 
-     function IQ() {
-       return WQ
-     }
- 
- ... (6 more removed lines; see GitHub link above)
+       return kk.includes("Leaf Bed")
```

#### 57. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1205-L1208` → after: `L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L715) · [Before (L1205-L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L1205-L1208)

```diff
-       return QQ ? QQ.load() : Promise.resolve().then((function() {
-         var QQ = new Error("Cannot find module '@bloxd/wasm/client'");
-         throw QQ.code = "MODULE_NOT_FOUND", QQ
-       })).then((QQ => QQ.bloxdWasmClient))
+       return / Bed(?: Head)?(?:\||$)/.test(kk) && !Dk(kk)
```

#### 58. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1212-L1270` → after: `L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L719) · [Before (L1212-L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L1212-L1270)

```diff
-       kQ.i.setItem(YQ, QQ)
-     }
-     async function zQ() {
-       if (null === uQ.e) return TQ(null);
-       const QQ = kQ.i.getItem(YQ);
-       let FQ = "none" === QQ ? null : "webgl";
-       return null !== QQ && "none" !== QQ && ("string" === typeof QQ && void 0 !== (0, LQ.b)(uQ.e, QQ) ? FQ = QQ : console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(QQ)}, is none of this client's: guessing WebGL2's`)), null === FQ ? null : uQ.e[FQ]()
-     }
-     let lQ = null,
-       jQ = null;
- 
-     function aQ() {
-       return lQ ??= UQ().then((async QQ => {
-         var FQ;
-         const wQ = null !== QQ && !(0, vQ.p)(QQ),
-           LQ = {
- ... (43 more removed lines; see GitHub link above)
+       return kk.includes(" Strongbed")
```

#### 59. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1274` → after: `L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L723) · [Before (L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L1274)

```diff
-       return ["pl", "ru", "tr", "uk", "vi"].includes(QQ)
+       return Dk(kk) || fk(kk) || Sk(kk)
```

#### 60. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1279` → after: `L727-L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L727-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L727-L729) · [Before (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L1279)

```diff
-       e: () => qQ
+       h: () => Dk,
+       i: () => Sk,
+       l: () => fk
```

#### 61. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1282` → after: `L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L732) · [Before (L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L1282)

```diff
-   40259: (QQ, FQ, wQ) => {
+   36528: (kk, ek, ik) => {
```

#### 62. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1284-L1285` → after: `L734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L734) · [Before (L1284-L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L1284-L1285)

```diff
-       d: () => kQ,
-       f: () => vQ
+       e: () => mk
```

#### 63. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1287-L1345` → after: `L736-L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L736-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L736-L749) · [Before (L1287-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L1287-L1345)

```diff
-     var LQ = wQ(96);
-     const qQ = "webgpuPipeline";
- 
-     function oQ(QQ) {
-       return QQ.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
-     }
-     let DQ = null;
- 
-     function kQ() {
-       if (null === DQ) try {
-         QQ = (0, LQ.getBrowserName)(), FQ = (0, LQ.getBrowserVersion)(), wQ = (0, LQ.getOperatingSystem)(), qQ = (0, LQ.getOperatingSystemVersion)(), DQ = `${QQ.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===FQ?"unknown":oQ(FQ)}-${wQ}${void 0===qQ?"":`_${oQ(qQ)}`}`
-       } catch (kQ) {
-         console.warn("The user agent couldn't be read for its browser code", kQ), DQ = "unknown"
-       }
-       var QQ, FQ, wQ, qQ;
-       return DQ
- ... (43 more removed lines; see GitHub link above)
+     var Dk = ik(36530),
+       fk = ik(9020);
+     const Sk = [],
+       bk = [],
+       rk = [],
+       Pk = [];
+     for (const Mk of Object.keys(fk.j))(0, Dk.h)(Mk) ? Sk.push(Mk) : (0, Dk.l)(Mk) && bk.push(Mk), (0, Dk.i)(Mk) && rk.push(Mk), (Mk.includes(" Bed Head") || Mk.includes(" Strongbed Head")) && Pk.push(Mk);
+     const mk = {
+       leafBeds: Sk,
+       woolBeds: bk,
+       strongBeds: rk,
+       beds: [...Sk, ...bk, ...rk],
+       bedHeads: Pk,
+       blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
```

#### 64. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1348-L1360` → after: `L752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L752) · [Before (L1348-L1360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L1348-L1360)

```diff
-   40217: (QQ, FQ, wQ) => {
-     QQ.exports = wQ.p + "static/media/bloxd_wasm_models_bg.593d3d487912d0f5515a.wasm"
-   },
-   40209: (QQ, FQ, wQ) => {
-     QQ.exports = wQ.p + "static/media/bloxd_wasm_workers_bg.bbb759863ba8f8a8aa47.wasm"
-   },
-   40264: (QQ, FQ, wQ) => {
-     QQ.exports = wQ.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
-   },
-   40268: (QQ, FQ, wQ) => {
-     QQ.exports = wQ.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
-   },
-   40201: (QQ, FQ, wQ) => {
+   6328: (kk, ek, ik) => {
```

#### 65. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1362-L1363` → after: `L754-L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L754-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L754-L760) · [Before (L1362-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L1362-L1363)

```diff
-       b: () => qQ,
-       e: () => LQ
+       c: () => bk,
+       f: () => fk,
+       g: () => Pk,
+       h: () => Sk,
+       l: () => mk,
+       o: () => Dk,
+       r: () => rk
```

#### 66. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1365-L1376` → after: `L762-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L762-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/88.js#L762-L783) · [Before (L1365-L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/88.js#L1365-L1376)

```diff
-     const LQ = {
-       name: "bloxd_wasm_workers",
-       url: function() {
-         return new wQ.U(wQ(40209))
-       }
-     };
-     const qQ = {
-       name: "bloxd_wasm_models",
-       url: function() {
-         return new wQ.U(wQ(40217))
-       }
-     }
+     let Dk = function(kk) {
+         return kk[kk.DEFAULT = 0] = "DEFAULT", kk[kk.BOAT = 1] = "BOAT", kk[kk.GLIDER = 2] = "GLIDER", kk[kk.BALLOON = 3] = "BALLOON", kk[kk.SLEEPING = 4] = "SLEEPING", kk[kk.RIDING_MOB = 5] = "RIDING_MOB", kk[kk.CAR = 6] = "CAR", kk[kk.HOVERCRAFT = 7] = "HOVERCRAFT", kk
+       }({}),
+       fk = function(kk) {
+         return kk[kk.WOOD = 0] = "WOOD", kk[kk.OBSIDIAN = 1] = "OBSIDIAN", kk[kk.SPEED = 2] = "SPEED", kk
+       }({}),
+       Sk = function(kk) {
+         return kk[kk.WOOD = 0] = "WOOD", kk[kk.IRON = 1] = "IRON", kk[kk.GOLD = 2] = "GOLD", kk[kk.DIAMOND = 3] = "DIAMOND", kk
+       }({}),
+       bk = function(kk) {
+         return kk[kk.YELLOW = 0] = "YELLOW", kk[kk.WHITE = 1] = "WHITE", kk[kk.RED = 2] = "RED", kk[kk.PURPLE = 3] = "PURPLE", kk[kk.PINK = 4] = "PINK", kk[kk.ORANGE = 5] = "ORANGE", kk[kk.MAGENTA = 6] = "MAGENTA", kk[kk.LIME = 7] = "LIME", kk[kk.LIGHT_GRAY = 8] = "LIGHT_GRAY", k … [truncated]
+       }({}),
+       rk = function(kk) {
+         return kk[kk.ROTATION_1 = 0] = "ROTATION_1", kk[kk.ROTATION_2 = 1] = "ROTATION_2", kk[kk.ROTATION_3 = 2] = "ROTATION_3", kk[kk.ROTATION_4 = 3] = "ROTATION_4", kk
+       }({}),
+       Pk = function(kk) {
+ ... (6 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/89.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/89.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8)

#### 1. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L4-L21` → after: `L4-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L4-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/89.js#L4-L572) · [Before (L4-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/89.js#L4-L21)

```diff
-   40870: (QQ, FQ, wQ) => {
-     async function LQ(QQ, FQ) {
-       const [{
-         clientSideServerUrls: LQ
-       }, {
-         postJsonWithMetricsCookiesAndJsonResponse: qQ
-       }, {
-         gameBridge: oQ
-       }] = await Promise.all([Promise.resolve().then((() => wQ(1213))), Promise.resolve().then((() => wQ(1147))), Promise.resolve().then((() => wQ(1897)))]), DQ = oQ.latest("connectedGame").websocketUrl;
-       if (!DQ) throw new Error("AI Helper: not connected to a game server");
-       const kQ = `${LQ.getHttpUrlFromWebSocketUrl(DQ)}${QQ}`;
-       return await qQ(kQ, FQ, {
-         retries: 0
-       })
-     }
-     wQ.r(FQ), wQ.d(FQ, {
- ... (2 more removed lines; see GitHub link above)
+   4741: (kk, ek, ik) => {
+     ik.d(ek, {
+       Ab: () => Zk,
+       Bb: () => ck,
+       C: () => Ak,
+       Eb: () => tk,
+       F: () => Ck,
+       Fb: () => vk,
+       G: () => bk,
+       H: () => rk,
+       Hb: () => ak,
+       I: () => Dk,
+       Kb: () => Ek,
+       L: () => Sk,
+       O: () => Yk,
+       Ob: () => wk,
+ ... (553 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L23-L26` → after: `L574-L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L574-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/89.js#L574-L671) · [Before (L23-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/89.js#L23-L26)

```diff
-   40862: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       WorldCodeAiPanel: () => Qb,
-       default: () => Fb
+   4735: (kk, ek, ik) => {
+     ik.d(ek, {
+       Ad: () => Vk,
+       Ae: () => Qk,
+       Bb: () => Pe,
+       C: () => He,
+       Cc: () => fk.m,
+       Cd: () => Dk.ic,
+       Dc: () => pk,
+       E: () => uk,
+       Ed: () => Dk.lc,
+       Ee: () => Pk,
+       Fb: () => Mk,
+       H: () => bk,
+       Hb: () => Dk.O,
+       Hc: () => be,
+ ... (82 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L28-L118` → after: `L673-L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L673-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/89.js#L673-L677) · [Before (L28-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/89.js#L28-L118)

```diff
-     var LQ = wQ(53),
-       qQ = wQ(1070),
-       oQ = wQ.n(qQ),
-       DQ = wQ(1107);
- 
-     function kQ(QQ) {
-       let {
-         title: FQ,
-         children: wQ,
-         isCalm: qQ = !1,
-         isElsewhere: kQ = !1,
-         defaultOpen: vQ = !1,
-         isOpen: mQ,
-         onToggle: uQ,
-         className: HQ
-       } = QQ;
- ... (75 more removed lines; see GitHub link above)
+     var Dk = ik(4741),
+       fk = ik(2388);
+     const Sk = Math.round(1e3 / Dk.qc),
+       bk = 4,
+       rk = 2;
```

#### 4. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L120-L139` → after: `L679-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L679-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/89.js#L679-L680) · [Before (L120-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/89.js#L120-L139)

```diff
-     function sQ(QQ, FQ, wQ) {
-       if (0 === FQ.length) return null;
-       let LQ = null;
-       for (let qQ = 0; qQ + FQ.length <= QQ.length; qQ++) {
-         if (FQ.every(((FQ, LQ) => wQ(QQ[qQ + LQ].text) === FQ))) {
-           if (LQ) return {
-             ...LQ,
-             isOnly: !1
-           };
-           const wQ = QQ[qQ + FQ.length - 1];
-           LQ = {
-             from: QQ[qQ].from,
-             to: wQ.from + wQ.text.length
-           }
-         }
-       }
- ... (4 more removed lines; see GitHub link above)
+     function Pk() {
+       return crypto.getRandomValues(new Uint32Array(rk))
```

#### 5. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L141-L152` → after: `L682-L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L682-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/89.js#L682-L697) · [Before (L141-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/89.js#L141-L152)

```diff
- 
-     function rQ(QQ, FQ) {
-       if ("" === FQ.trim()) return null;
-       const wQ = RQ(QQ),
-         LQ = function(QQ) {
-           return QQ.split("\n").map((QQ => QQ.trim())).filter(((QQ, FQ, wQ) => "" !== QQ || FQ > 0 && FQ < wQ.length - 1))
-         }(FQ),
-         qQ = sQ(wQ, LQ, (QQ => QQ.trim()));
-       if (null !== qQ) return {
-         from: qQ.from,
-         to: qQ.to,
-         isLoose: !qQ.isOnly
+     const mk = {
+         Ok: 0,
+         Errors: 1,
+         Fatal: 2
+       },
+       Mk = 16,
+       Kk = {
+         Draws: 1,
+         NetAll: 2,
+         StopForSends: 4
+       },
+       xk = 3,
+       nk = {
+         ShowFog: 1,
+         Lighting: 2,
+         ChunkFade: 4
```

#### 6. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L447-L453` → after: `L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/89.js#L701) · [Before (L447-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/89.js#L447-L453)

```diff
-       let FQ = QQ.replace(/\s+/g, " ").trim();
-       if ("" === FQ || FF.test(FQ)) return null;
-       if (FQ.length > QF) {
-         const QQ = FQ.slice(0, QF);
-         FQ = `${QQ.slice(0,Math.max(QQ.lastIndexOf(" "),60)).trimEnd()}\u2026`
-       }
-       return FQ.charAt(0).toUpperCase() + FQ.slice(1)
+       return (kk.nametagsHidden ? Ak.NametagsHidden : 0) | (kk.crouchToggle ? Ak.CrouchToggle : 0) | (kk.bhopDisabled ? Ak.BhopDisabled : 0) | (kk.disableBobbing ? Ak.DisableBobbing : 0) | (kk.ezTowering ? Ak.EzTowering : 0) | (kk.ezBridging ? Ak.EzBridging : 0) | (kk.showChunkBo … [truncated]
```

#### 7. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L455` → after: `L703-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L703-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/89.js#L703-L737) · [Before (L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/89.js#L455)

```diff
-     const LF = /(?:===?\s*|\bcase\s+|startsWith\(\s*)["'`]\/?([a-zA-Z][\w-]{0,20})/g;
+     const Hk = {
+         Flags: 0,
+         PhysicsVersion: 1,
+         InbuiltOverwritten: 2,
+         AltComplete: 3,
+         ProbeUsedProp: 4
+       },
+       wk = {
+         Ready: 1,
+         SendFnReplaced: 2,
+         Butto: 4,
+         IdentityChanged: 32,
+         CheckFuncHit: 128,
+         OriginStackHit: 256
+       },
+       lk = {
+ ... (19 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L458-L460` → after: `L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/89.js#L740) · [Before (L458-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/89.js#L458-L460)

```diff
-       var FQ, wQ;
-       const LQ = null === (FQ = /\(([^)]*)\)/.exec(QQ)) || void 0 === FQ || null === (wQ = FQ[1].split(",")[1]) || void 0 === wQ ? void 0 : wQ.trim();
-       return LQ && /^[A-Za-z_$][\w$]*$/.test(LQ) ? [...QQ.matchAll(/\b([A-Za-z_$][\w$]*)\s*\(([^()]*)\)/g)].flatMap((QQ => QQ[2].split(",").some((QQ => QQ.trim() === LQ)) ? [QQ[1]] : [])) : []
+       return (kk.showFog ? nk.ShowFog : 0) | (kk.lighting ? nk.Lighting : 0) | (kk.chunkFade ? nk.ChunkFade : 0)
```

#### 9. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L464-L539` → after: `L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/89.js#L783) · [Before (L464-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/89.js#L464-L539)

```diff
-       const wQ = new Set,
-         LQ = new Set,
-         qQ = new Set,
-         oQ = Object.values(QQ).map((QQ => {
-           const FQ = hQ(QQ),
-             wQ = FQ.filter((QQ => "playerCommand" === QQ.name)).map((FQ => QQ.slice(FQ.from, FQ.to)));
-           return {
-             text: QQ,
-             found: FQ,
-             own: wQ
-           }
-         })),
-         DQ = new Set(oQ.flatMap((QQ => {
-           let {
-             own: FQ
-           } = QQ;
- ... (60 more removed lines; see GitHub link above)
+       return (kk | ek << 8) >>> 0
```
