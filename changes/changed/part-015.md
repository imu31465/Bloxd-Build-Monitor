# Changed — Bundle Modifications Report (Part 015 / 047)

- **Updated at**: `2026-11-22T23:29 JST`
- **Part**: `15 / 47` (**294** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 014](part-014.md) · [Part 016 →](part-016.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/292.js` (bqoxjr.2558012f → 3lwmg.ecbaa066 · continued)

- **File**: `bundles/bloxd.io/chunks/js/292.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76)

#### 14. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L228-L252` → after: `L16362-L16628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R16362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L16362-L16628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/292.js#L16362-L16628) · [Before (L228-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/292.js#L228-L252)

```diff
-             wQ && wQ.scrollIntoView({
-               block: "start",
-               behavior: "smooth"
-             })
-           }), [IQ]),
-           DF = (0, LQ.useCallback)((QQ => {
-             var FQ, wQ;
-             const LQ = null !== (FQ = null === (wQ = rQ.current) || void 0 === wQ ? void 0 : wQ.clientWidth) && void 0 !== FQ ? FQ : window.innerWidth,
-               qQ = Math.max(120, LQ - 200);
-             return Math.min(Math.max(QQ, 120), qQ)
-           }), []),
-           kF = (0, LQ.useCallback)((() => {
-             var QQ;
-             VQ.current && (VQ.current = !1, null === (QQ = rQ.current) || void 0 === QQ || QQ.classList.remove("DocsSidebarResizing"))
-           }), []),
-           vF = (0, LQ.useCallback)((QQ => {
- ... (9 more removed lines; see GitHub link above)
+           return Sk.changes.empty || ik(ek.update(Sk, {
+             userEvent: "indent"
+           })), !0
+         }
+       }, {
+         key: "Shift-Mod-k",
+         run: kk => {
+           if (kk.state.readOnly) return !1;
+           let {
+             state: ek
+           } = kk, ik = ek.changes(ze(ek).map((kk => {
+             let {
+               from: ik,
+               to: Dk
+             } = kk;
+             return ik > 0 ? ik-- : Dk < ek.doc.length && Dk++, {
+ ... (251 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L254-L264` → after: `L16630-L16768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R16630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L16630-L16768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/292.js#L16630-L16768) · [Before (L254-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/292.js#L254-L264)

```diff
-           return window.addEventListener("mousemove", FQ), window.addEventListener("mouseup", kF), () => {
-             window.removeEventListener("mousemove", FQ), window.removeEventListener("mouseup", kF), null === QQ || void 0 === QQ || QQ.classList.remove("DocsSidebarResizing")
-           }
-         }), [DF, kF]);
-         const mF = (0, LQ.useCallback)((QQ => {
-           if (QQ) {
-             const [FQ, wQ] = QQ.slice(1).split("-");
-             wQ && (hQ.current = {
-               docId: FQ,
-               subsection: wQ
-             }), FQ && qF(FQ)
+             let ik = kk.from,
+               Dk = ek.doc.lineAt(ik),
+               fk = ik == Dk.from ? ik - 1 : (0, bk.U)(Dk.text, ik - Dk.from, !1) + Dk.from,
+               Sk = ik == Dk.to ? ik + 1 : (0, bk.U)(Dk.text, ik - Dk.from, !0) + Dk.from;
+             return {
+               changes: {
+                 from: fk,
+                 to: Sk,
+                 insert: ek.doc.slice(ik, Sk).append(ek.doc.slice(fk, ik))
+               },
+               range: bk.h.cursor(Sk)
+             }
+           }));
+           return !Dk.changes.empty && (ik(ek.update(Dk, {
+             scrollIntoView: !0,
+             userEvent: "move.character"
+ ... (123 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L266-L277` → after: `L16770-L16846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R16770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L16770-L16846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/292.js#L16770-L16846) · [Before (L266-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/292.js#L266-L277)

```diff
-         }), [qF]);
-         (0, LQ.useEffect)((() => {
-           const QQ = hQ.current;
-           QQ && OQ === QQ.docId && (setTimeout((() => {
-             oF(QQ.subsection)
-           }), 0), hQ.current = null)
-         })), (0, LQ.useEffect)((() => {
-           if (!IQ.current) return;
-           IQ.current.querySelectorAll("a.DocsAnchor").forEach((QQ => {
-             QQ.addEventListener("click", (FQ => {
-               FQ.preventDefault(), mF(QQ.dataset.id)
-             }))
+         }
+       }, {
+         dark: !0
+       }),
+       xi = Pk.e.define([{
+         tag: Oe.o.keyword,
+         color: fi
+       }, {
+         tag: [Oe.o.name, Oe.o.deleted, Oe.o.character, Oe.o.propertyName, Oe.o.macroName],
+         color: Ge
+       }, {
+         tag: [Oe.o.function(Oe.o.variableName), Oe.o.labelName],
+         color: ei
+       }, {
+         tag: [Oe.o.color, Oe.o.constant(Oe.o.name), Oe.o.standard(Oe.o.name)],
+         color: Di
+ ... (61 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L279-L411` → after: `L16848-L17010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R16848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L16848-L17010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/292.js#L16848-L17010) · [Before (L279-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/292.js#L279-L411)

```diff
-         }), [OQ, mF]);
-         const uF = Object.values(cQ).find((QQ => (null === QQ || void 0 === QQ ? void 0 : QQ.pageStep) === JQ));
-         return (0, YQ.jsx)(GQ.i, {
-           tutorial: "docsOverview",
-           step: null !== (CQ = null === uF || void 0 === uF ? void 0 : uF.pageStep) && void 0 !== CQ ? CQ : "docsPanel",
-           text: BQ(null !== (SQ = null === uF || void 0 === uF ? void 0 : uF.pageText) && void 0 !== SQ ? SQ : "codeEditor:tutorialDocsPanel"),
-           enabled: RQ,
-           placement: "left",
-           onPrevious: uF ? void 0 : WQ,
-           children: (0, YQ.jsxs)("div", {
-             className: "DocsPanel",
-             ref: rQ,
-             children: [(0, YQ.jsxs)("div", {
-               className: "DocsSidebar",
-               style: {
-                 width: XQ,
- ... (117 more removed lines; see GitHub link above)
+         }
+       }
+       cancel() {
+         this.isCancelled = !0, this.callbacks.length = 0
+       }
+       reset() {
+         this.timeLeftMS = this.timeoutMS, this.isCancelled = !1, this.isTimeExhausted = !1
+       }
+       get isDone() {
+         return this.isCancelled || this.isTimeExhausted
+       }
+     }
+     class wi {
+       constructor() {
+         this.interval = null, this.latches = new Set
+       }
+ ... (147 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L413` → after: `L17012-L17228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R17012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L17012-L17228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/292.js#L17012-L17228) · [Before (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/292.js#L413)

```diff
-       }))
+       }), [xk, Mk, nk, Uk, Hk, wk, lk, pk, yk, Yk, Lk, Ck, Ak, Dk, mk]), (0, Sk.useEffect)((() => {
+         if (void 0 !== ek) {
+           var kk = Fk ? Fk.state.doc.toString() : "";
+           if (Fk && ek !== kk) {
+             var ik = () => {
+               Fk && ek !== Fk.state.doc.toString() && Fk.dispatch({
+                 changes: {
+                   from: 0,
+                   to: Fk.state.doc.toString().length,
+                   insert: ek || ""
+                 },
+                 annotations: [yi.of(!0)]
+               })
+             };
+             zk.current && !zk.current.isDone ? Qk.current = ik : ik()
+           }
+ ... (201 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/293.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/293.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663)

#### 1. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/293.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/293.js#L4)

```diff
-   40881: (QQ, FQ, wQ) => {
+   40876: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L6` → after: `L6-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L6-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/293.js#L6-L28) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/293.js#L6)

```diff
-       ensureLocalBloxdTypes: () => eQ
+       b: () => ye,
+       e: () => Ik,
+       ChangeSet: () => zk,
+       f: () => qe,
+       h: () => Xk,
+       j: () => ve,
+       n: () => Tk,
+       p: () => qk,
+       q: () => Se,
+       w: () => Be,
+       s: () => ce,
+       A: () => he,
+       D: () => Ce,
+       E: () => Jk,
+       I: () => Hk,
+       K: () => Ae,
+ ... (7 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L8-L17` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/293.js#L30-L31) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/293.js#L8-L17)

```diff
-     var LQ = wQ(4610),
-       qQ = wQ(40770),
-       oQ = wQ(40764),
-       DQ = wQ(36472),
-       kQ = wQ(36481),
-       vQ = wQ(36491);
-     const mQ = JSON.stringify({
-       name: "@bloxd",
-       types: "index.d.ts"
-     }, null, "\t") + "\n";
+     let Dk = [],
+       fk = [];
```

#### 4. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L20` → after: `L34-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L34-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/293.js#L34-L92) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/293.js#L20)

```diff
-       return QQ.replace(/^\//, "")
+       if (kk < 768) return !1;
+       for (let ek = 0, ik = Dk.length;;) {
+         let Sk = ek + ik >> 1;
+         if (kk < Dk[Sk]) ik = Sk;
+         else {
+           if (!(kk >= fk[Sk])) return !0;
+           ek = Sk + 1
+         }
+         if (ek == ik) return !1
+       }
+     }
+ 
+     function bk(kk) {
+       return kk >= 127462 && kk <= 127487
+     }(() => {
+       let kk = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7, … [truncated]
+ ... (43 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L24` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/293.js#L96) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/293.js#L24)

```diff
-       return uQ((0, kQ.p)(QQ.name, "")).replace(/\/$/, "")
+       return kk >= 56320 && kk < 57344
```

#### 6. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L28` → after: `L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/293.js#L100) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/293.js#L28)

```diff
-       return QQ.typesVfsPath.slice(QQ.typesVfsPath.lastIndexOf("/") + 1)
+       return kk >= 55296 && kk < 56320
```

#### 7. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L32-L42` → after: `L104-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L104-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/293.js#L104-L346) · [Before (L32-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/293.js#L32-L42)

```diff
-       return JSON.stringify({
-         name: QQ.specifier,
-         types: bQ(QQ)
-       }, null, "\t") + "\n"
-     }
-     async function xQ(QQ) {
-       let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
-       const wQ = [];
-       for await (const [LQ, qQ] of QQ.entries()) {
-         const QQ = FQ ? `${FQ}/${LQ}` : LQ;
-         "directory" !== qQ.kind ? wQ.push(QQ) : wQ.push(...await xQ(qQ, QQ))
+       return kk < 65536 ? 1 : 2
+     }
+     class Hk {
+       lineAt(kk) {
+         if (kk < 0 || kk > this.length) throw new RangeError(`Invalid position ${kk} in document of length ${this.length}`);
+         return this.lineInner(kk, !1, 1, 0)
+       }
+       line(kk) {
+         if (kk < 1 || kk > this.lines) throw new RangeError(`Invalid line number ${kk} in ${this.lines}-line document`);
+         return this.lineInner(kk, !0, 1, 0)
+       }
+       replace(kk, ek, ik) {
+         [kk, ek] = jk(this, kk, ek);
+         let Dk = [];
+         return this.decompose(0, kk, Dk, 2), ik.length && ik.decompose(0, ik.length, Dk, 3), this.decompose(ek, this.length, Dk, 1), lk.from(Dk, this.length - (ek - kk) + ik.length)
+       }
+ ... (227 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L46-L66` → after: `L350-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L350-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/293.js#L350-L437) · [Before (L46-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/293.js#L46-L66)

```diff
-     async function AQ(QQ, FQ, wQ) {
-       const LQ = HQ(FQ),
-         qQ = await (0, vQ.j)(QQ, LQ);
-       if (!qQ) return;
-       const oQ = new Set([bQ(FQ), "package.json"]);
-       if (wQ)
-         for (const vQ of Object.keys(FQ.files)) oQ.add(vQ);
-       const DQ = await xQ(qQ),
-         kQ = new Set;
-       for (const HQ of DQ) {
-         if (oQ.has(HQ)) continue;
-         await (0, vQ.y)(QQ, `${LQ}/${HQ}`);
-         const FQ = HQ.split("/");
-         for (let QQ = 1; QQ < FQ.length; QQ++) kQ.add(FQ.slice(0, QQ).join("/"))
-       }
-       const mQ = [...kQ].sort(((QQ, FQ) => FQ.split("/").length - QQ.split("/").length));
- ... (5 more removed lines; see GitHub link above)
+ 
+     function yk(kk, ek, ik) {
+       return pk(kk, [""], ek, ik)
+     }
+     Hk.empty = new wk([""], 0);
+     class Yk {
+       constructor(kk) {
+         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         this.dir = ek, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [kk], this.offsets = [ek > 0 ? 1 : (kk instanceof wk ? kk.text.length : kk.children.length) << 1]
+       }
+       nextInner(kk, ek) {
+         for (this.done = this.lineBreak = !1;;) {
+           let ik = this.nodes.length - 1,
+             Dk = this.nodes[ik],
+             fk = this.offsets[ik],
+             Sk = fk >> 1,
+ ... (72 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L71-L90` → after: `L464-L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L464-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/293.js#L464-L1077) · [Before (L71-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/293.js#L71-L90)

```diff
-       const FQ = {
-         "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
-       };
-       for (const LQ of Object.values(DQ.e)) FQ[LQ.specifier] = [`.${LQ.typesVfsPath}`];
-       const wQ = [];
-       for (const LQ of QQ)
-         for (const QQ of Object.keys(LQ.files)) wQ.push(uQ((0, kQ.p)(LQ.name, QQ)));
-       return JSON.stringify({
-         compilerOptions: {
-           allowJs: !0,
-           checkJs: !1,
-           strict: !1,
-           module: "ESNext",
-           moduleResolution: "bundler",
-           target: "ES2015",
-           noEmit: !0,
- ... (4 more removed lines; see GitHub link above)
+       return kk < 65536 ? 1 : 2
+     }
+     const uk = /\r\n?|\n/;
+     var qk = function(kk) {
+       return kk[kk.Simple = 0] = "Simple", kk[kk.TrackDel = 1] = "TrackDel", kk[kk.TrackBefore = 2] = "TrackBefore", kk[kk.TrackAfter = 3] = "TrackAfter", kk
+     }(qk || (qk = {}));
+     class Ik {
+       constructor(kk) {
+         this.sections = kk
+       }
+       get length() {
+         let kk = 0;
+         for (let ek = 0; ek < this.sections.length; ek += 2) kk += this.sections[ek];
+         return kk
+       }
+       get newLength() {
+ ... (598 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L92-L107` → after: `L1079-L2145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L1079-L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/293.js#L1079-L2145) · [Before (L92-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/293.js#L92-L107)

```diff
-         include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
-         files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...wQ]
-       }, null, "\t") + "\n"
-     }
-     async function eQ(QQ) {
-       let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
-       const wQ = new Set(FQ.map((QQ => QQ.name))),
-         bQ = Object.values(DQ.e).flatMap((FQ => {
-           const LQ = uQ(FQ.typesVfsPath),
-             qQ = `${HQ(FQ)}/package.json`;
-           return [...wQ.has(FQ.name) ? Object.entries(FQ.files).map((wQ => {
-             let [LQ, qQ] = wQ;
-             return (0, vQ.H)(QQ, uQ((0, kQ.p)(FQ.name, LQ)), qQ)
-           })) : [], (0, vQ.H)(QQ, LQ, FQ.types), (0, vQ.H)(QQ, qQ, YQ(FQ))]
-         }));
-       await Promise.all([(0, vQ.H)(QQ, "node_modules/@bloxd/index.d.ts", LQ.default), (0, vQ.H)(QQ, "node_modules/@bloxd/globals.d.ts", oQ.b), (0, vQ.H)(QQ, "node_modules/@bloxd/lib.d.ts", qQ.c), (0, vQ.H)(QQ, "node_modules/@bloxd/package.json", mQ), (0, vQ.H)(QQ, "tsconfig.json" … [truncated]
+         reconfigure(kk, fk) {
+           let Sk = Gk(kk, Dk),
+             Pk = fk.config.facets[ek.id],
+             mk = fk.facet(ek);
+           if (Pk && !Sk && Zk(ik, Pk)) return kk.values[bk] = mk, 0;
+           let Mk = rk(kk);
+           return ek.compare(Mk, mk) ? (kk.values[bk] = mk, 0) : (kk.values[bk] = Mk, 1)
+         }
+       }
+     }
+     const Rk = Tk.define({
+       static: !0
+     });
+     class Jk {
+       constructor(kk, ek, ik, Dk, fk) {
+         this.id = kk, this.createF = ek, this.updateF = ik, this.compareF = Dk, this.spec = fk, this.provides = void 0
+ ... (1051 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/294.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/294.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b)

#### 1. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L4-L21` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/294.js#L4-L7) · [Before (L4-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/294.js#L4-L21)

```diff
-   40950: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       installImageBitmapTextureLoader: () => mQ
-     });
-     var LQ = wQ(39274),
-       qQ = wQ(40956),
-       oQ = wQ(3091);
- 
-     function DQ(QQ, FQ) {
-       if ("string" === typeof QQ) {
-         const wQ = (0, oQ.e)(QQ);
-         return wQ ? new Blob([(0, oQ.c)(wQ.base64)], {
-           type: wQ.mimeType || FQ
-         }) : null
-       }
-       return QQ instanceof Blob ? QQ : new Blob([QQ], {
- ... (2 more removed lines; see GitHub link above)
+   40966: kk => {
+     function ek(kk) {
+       var ek = new Error("Cannot find module '" + kk + "'");
+       throw ek.code = "MODULE_NOT_FOUND", ek
```

#### 2. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L23-L30` → after: `L9-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L9-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/294.js#L9-L19) · [Before (L23-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/294.js#L23-L30)

```diff
-     const kQ = function(QQ, FQ, wQ, LQ) {
-       let oQ, kQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
-         vQ = arguments.length > 5 ? arguments[5] : void 0,
-         mQ = arguments.length > 6 ? arguments[6] : void 0;
-       try {
-         oQ = DQ(QQ, kQ)
-       } catch {
-         oQ = null
+     ek.keys = () => [], ek.resolve = ek, ek.id = 40966, kk.exports = ek
+   },
+   41021: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => Dk,
+       f: () => fk
+     });
+     const Dk = "Sends one question to the AI",
+       fk = {
+         title: Dk,
+         "data-asks-ai": !0
```

#### 3. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L66` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/294.js#L22) · [Before (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/294.js#L66)

```diff
-   40956: (QQ, FQ, wQ) => {
+   40936: (kk, ek, ik) => {
```

#### 4. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L68-L69` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/294.js#L24) · [Before (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/294.js#L68-L69)

```diff
-       d: () => LQ.h,
-       e: () => LQ.p
+       b: () => Dk
```

#### 5. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L71-L73` → after: `L26-L4269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L26-L4269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/294.js#L26-L4269) · [Before (L71-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/294.js#L71-L73)

```diff
-     var LQ = wQ(39448);
-     (0, LQ.t)()
-   }
+     const Dk = String.raw`
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
+ ... (4228 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/295.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/295.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617)

#### 1. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/295.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/295.js#L4)

```diff
-   41021: (QQ, FQ, wQ) => {
+   40950: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/295.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/295.js#L6)

```diff
-       e: () => oQ
+       d: () => Dk
```

#### 3. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L8-L55` → after: `L8-L6410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L8-L6410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/295.js#L8-L6410) · [Before (L8-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/295.js#L8-L55)

```diff
-     var LQ = wQ(39518),
-       qQ = wQ(41027);
-     class oQ {
-       constructor(QQ, FQ) {
-         let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
-         this.maxDepth = wQ, this.fLQ = [], this._maxBlockCapacity = FQ || 64, this._selectionContent = new LQ.b(1024), this._creationFunc = QQ
-       }
-       update(QQ, FQ, wQ) {
-         qQ.e._CreateBlocks(QQ, FQ, wQ, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
-       }
-       sLQ(QQ) {
-         for (let FQ = 0; FQ < this.blocks.length; FQ++) {
-           this.blocks[FQ].addEntry(QQ)
-         }
-       }
-       yN(QQ) {
- ... (32 more removed lines; see GitHub link above)
+     const Dk = String.raw`interface Map<K, V> {
+     clear(): void;
+     /**
+      * @returns true if an element in the Map existed and has been removed, or false if the element does not exist.
+      */
+     delete(key: K): boolean;
+     /**
+      * Executes a provided function once per each key/value pair in the Map, in insertion order.
+      */
+     forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
+     /**
+      * Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.
+      * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
+      */
+     get(key: K): V | undefined;
+     /**
+ ... (6387 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L57` → after: `L6412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R6412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L6412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/295.js#L6412) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/295.js#L57)

```diff
-   41027: (QQ, FQ, wQ) => {
+   40945: (kk, ek, ik) => {
```

#### 5. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L61-L4405` → after: `L6416-L7359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R6416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L6416-L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/295.js#L6416-L7359) · [Before (L61-L4405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/295.js#L61-L4405)

```diff
-     var LQ = wQ(36696),
-       qQ = wQ(39736);
-     class oQ {
-       constructor(QQ, FQ, wQ, LQ, qQ, oQ) {
-         this.entries = [], this.hLQ = new Array, this._capacity = wQ, this._depth = LQ, this._maxDepth = qQ, this._creationFunc = oQ, this._minPoint = QQ, this._maxPoint = FQ, this.hLQ.push(QQ.clone()), this.hLQ.push(FQ.clone()), this.hLQ.push(QQ.clone()), this.hLQ[2].x = FQ.x, t … [truncated]
-       }
-       get MH() {
-         return this._capacity
-       }
-       get TLQ() {
-         return this._minPoint
-       }
-       get NLQ() {
-         return this._maxPoint
-       }
-       addEntry(QQ) {
- ... (4329 more removed lines; see GitHub link above)
+     const Dk = String.raw`import type {
+ 	GameApi,
+ 	Console,
+ 	EntityId,
+ 	Pos,
+ 	LifeformId,
+ 	PlayerId,
+ 	PlayerDbId,
+ 	LifeformBodyPart,
+ 	PlayerAttemptDamageOtherPlayerOpts,
+ 	HittingSoundOverride,
+ 	DamageCause,
+ 	ItemName,
+ 	EnchantmentAttributes,
+ 	EnchantmentPerk,
+ 	EnchantmentTier,
+ ... (928 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/296.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/296.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486)

#### 1. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L4-L186` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/296.js#L4-L9) · [Before (L4-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/296.js#L4-L186)

```diff
-   41101: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => bQ,
-       f: () => eQ,
-       j: () => YQ,
-       m: () => xQ,
-       q: () => GQ,
-       r: () => MQ
-     });
-     var LQ = wQ(41061);
-     var qQ = "Babylon Lite v1.32.0",
-       oQ = wQ(41108);
- 
-     function DQ(QQ) {
-       return "clientWidth" in QQ
-     }
- ... (167 more removed lines; see GitHub link above)
+   40957: (kk, ek, ik) => {
+     function Dk() {
+       return Dk = Object.assign ? Object.assign.bind() : function(kk) {
+         for (var ek = 1; ek < arguments.length; ek++) {
+           var ik = arguments[ek];
+           for (var Dk in ik)({}).hasOwnProperty.call(ik, Dk) && (kk[Dk] = ik[Dk])
```

#### 2. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L188-L196` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/296.js#L11-L12) · [Before (L188-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/296.js#L188-L196)

```diff
-         const FQ = QQ._currentEncoder;
-         for (let QQ = 0; QQ < wQ.length; QQ++) {
-           const LQ = wQ[QQ];
-           LQ._captureService?.(LQ, FQ)
-         }
-         QQ._gpuTimerEnd?.(FQ), QQ._cbs[0] = FQ.finish(), QQ._device.queue.submit(QQ._cbs), QQ._flushGpuRetirements?.(QQ), QQ.drawCallCount = LQ, QQ._gpuTimerResolve?.()
-       } finally {
-         QQ._currentEncoder = void 0
-       }
+         return kk
+       }, Dk.apply(null, arguments)
```

#### 3. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L205-L213` → after: `L18-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L18-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/296.js#L18-L33) · [Before (L205-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/296.js#L205-L213)

```diff
-     var LQ = globalThis.GPUTextureUsage,
-       qQ = globalThis.GPUBufferUsage,
-       oQ = globalThis.GPUShaderStage;
-     globalThis.GPUColorWrite
-   },
-   41129: (QQ, FQ, wQ) => {
-     function LQ(QQ) {
-       qQ(QQ.splice(0))
-     }
+     var fk = !1;
+     try {
+       fk = "undefined" !== typeof localStorage
+     } catch (Uk) {}
+     var Sk = "undefined" !== typeof process,
+       bk = fk && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || Sk && {
+         NODE_ENV: "production",
+         PUBLIC_URL: "",
+         WDS_SOCKET_HOST: void 0,
+         WDS_SOCKET_PATH: void 0,
+         WDS_SOCKET_PORT: void 0,
+         FAST_REFRESH: !0,
+         REACT_APP_DEV_URLS: "false"
+       }.DEBUG ? console.log : function(kk) {
+         return ""
+       };
```

#### 4. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L215-L219` → after: `L35-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L35-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/296.js#L35-L87) · [Before (L215-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/296.js#L215-L219)

```diff
-     function qQ(QQ) {
-       for (const wQ of QQ) try {
-         wQ()
-       } catch (FQ) {
-         console.error("GPU resource retirement failed.", FQ)
+     function rk(kk, ek, ik, fk, Sk) {
+       void 0 === fk && (fk = {});
+       var bk = Dk({}, Mk(ik), fk),
+         rk = function(kk, ek, ik, fk, Sk) {
+           var bk = [].concat(ek),
+             rk = nk(kk, ik, fk),
+             Pk = rk.compilerHost,
+             mk = rk.updateFile,
+             Mk = rk.deleteFile,
+             Kk = new Map,
+             xk = 0,
+             Uk = Dk({}, Pk, {
+               getProjectVersion: function() {
+                 return xk.toString()
+               },
+               getCompilationSettings: function() {
+ ... (37 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L257-L282` → after: `L90-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L90-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/296.js#L90-L95) · [Before (L257-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/296.js#L257-L282)

```diff
-         _descriptor: QQ,
-         _resolveSize: qQ,
-         _colorTexture: null,
-         _colorView: null,
-         _depthTexture: null,
-         _depthView: null,
-         _width: 0,
-         _height: 0
-       }
-     }
- 
-     function DQ(QQ, FQ) {
-       if (QQ._eager) return void QQ._syncEager?.(FQ);
-       kQ(QQ);
-       const wQ = QQ._descriptor,
-         {
- ... (10 more removed lines; see GitHub link above)
+         name: "vfs",
+         sys: kk,
+         languageService: xk,
+         getSourceFile: function(kk) {
+           var ek;
+           return null == (ek = xk.getProgram()) ? void 0 : ek.getSourceFile(kk)
```

#### 6. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L284-L291` → after: `L97-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/296.js#L97-L98) · [Before (L284-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/296.js#L284-L291)

```diff
-         format: wQ.format,
-         sampleCount: wQ.samples,
-         usage: LQ.g.RENDER_ATTACHMENT | LQ.g.TEXTURE_BINDING | LQ.g.COPY_SRC | LQ.g.COPY_DST
-       }), QQ._colorView = QQ._colorTexture.createView()), wQ.dFormat && (QQ._depthTexture = vQ.createTexture({
-         label: wQ.lbl,
-         size: {
-           width: oQ,
-           height: DQ
+         createFile: function(kk, ek) {
+           mk(ik.createSourceFile(kk, ek, bk.target, !1))
```

#### 7. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L293-L415` → after: `L100-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L100-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/296.js#L100-L115) · [Before (L293-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/296.js#L293-L415)

```diff
-         format: wQ.dFormat,
-         sampleCount: wQ.samples,
-         usage: LQ.g.RENDER_ATTACHMENT | LQ.g.TEXTURE_BINDING
-       }), QQ._depthView = QQ._depthTexture.createView())
-     }
- 
-     function kQ(QQ) {
-       if (!QQ || QQ._eager && !QQ._disposeAttachments) return;
-       const FQ = QQ._colorTexture,
-         wQ = QQ._depthTexture;
-       if (QQ._colorTexture = QQ._depthTexture = null, QQ._colorView = QQ._depthView = null, QQ._width = QQ._height = 0, QQ._disposeAttachments) QQ._disposeAttachments(FQ, wQ);
-       else try {
-         FQ?.destroy()
-       } finally {
-         !1 !== QQ._ownsDepthTexture && wQ?.destroy()
-       }
- ... (107 more removed lines; see GitHub link above)
+         updateFile: function(kk, ek, Dk) {
+           var fk = xk.getProgram().getSourceFile(kk);
+           if (!fk) throw new Error("Did not find a source file for " + kk);
+           var Sk = fk.text,
+             bk = null != Dk ? Dk : ik.createTextSpan(0, Sk.length),
+             rk = Sk.slice(0, bk.start) + ek + Sk.slice(bk.start + bk.length),
+             Pk = ik.updateSourceFile(fk, rk, {
+               span: bk,
+               newLength: ek.length
+             });
+           mk(Pk)
+         },
+         deleteFile: function(kk) {
+           var ek = xk.getProgram().getSourceFile(kk);
+           ek && Kk(ek)
+         }
```

#### 8. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L434` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/296.js#L120) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/296.js#L434)

```diff
-       return QQ._projFov === QQ.fov && QQ._projNear === QQ.nearPlane && QQ._projFar === QQ.farPlane || (QQ._projFov = QQ.fov, QQ._projNear = QQ.nearPlane, QQ._projFar = QQ.farPlane, QQ._projRev = (QQ._projRev ?? 0) + 1), QQ.worldMatrixVersion + (QQ._projRev ?? 0)
+       throw new Error("Method '" + kk + "' is not implemented.")
```

#### 9. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L438-L488` → after: `L124-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L124-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/296.js#L124-L128) · [Before (L438-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/296.js#L438-L488)

```diff
-       const wQ = mQ(QQ);
-       if (QQ._projVer === wQ && QQ._projAspect === FQ) return QQ._projCache;
-       const LQ = QQ._projCache;
-       return null !== vQ && QQ.ortho ? vQ(QQ, FQ, LQ) : function(QQ, FQ, wQ, LQ, qQ) {
-         const oQ = 1 / Math.tan(.5 * FQ),
-           DQ = qQ - LQ;
-         QQ[0] = oQ / wQ, QQ[5] = oQ, QQ[10] = -LQ / DQ, QQ[11] = 1, QQ[14] = qQ * LQ / DQ
-       }(LQ, QQ.fov, FQ, QQ.nearPlane, QQ.farPlane), QQ._projVer = wQ, QQ._projAspect = FQ, LQ
-     }
-     var HQ = wQ(41067);
- 
-     function bQ(QQ, FQ, wQ) {
-       return QQ._device.createBuffer({
-         label: wQ,
-         size: (LQ = FQ, qQ = 16, Math.ceil(LQ / qQ) * qQ),
-         usage: HQ.d.UNIFORM | HQ.d.COPY_DST
- ... (35 more removed lines; see GitHub link above)
+       return function() {
+         for (var ik = arguments.length, Dk = new Array(ik), fk = 0; fk < ik; fk++) Dk[fk] = arguments[fk];
+         var Sk = ek.apply(void 0, Dk),
+           rk = "string" === typeof Sk ? Sk.slice(0, 80) + "..." : Sk;
+         return bk.apply(void 0, ["> " + kk].concat(Dk)), bk("< " + rk), Sk
```

#### 10. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L492-L494` → after: `L131-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L131-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/296.js#L131-L148) · [Before (L492-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/296.js#L492-L494)

```diff
-     var eQ = wQ(41137),
-       MQ = new DQ.i(1),
-       GQ = new DQ.b(MQ.buffer);
+     var Mk = function(kk) {
+         return Dk({}, kk.getDefaultCompilerOptions(), {
+           jsx: kk.JsxEmit.React,
+           strict: !0,
+           esModuleInterop: !0,
+           module: kk.ModuleKind.ESNext,
+           suppressOutputPathCheck: !0,
+           skipLibCheck: !0,
+           skipDefaultLibCheck: !0
+         }, kk.versionMajorMinor && Number(kk.versionMajorMinor.split(".")[0]) >= 6 ? {
+           ignoreDeprecations: "6.0"
+         } : {
+           moduleResolution: kk.ModuleResolutionKind.NodeJs
+         })
+       },
+       Kk = function(kk) {
+ ... (2 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L580-L597` → after: `L152-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L152-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/296.js#L152-L154) · [Before (L580-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/296.js#L580-L597)

```diff
-         _renderables: QQ,
-         _opaqueBindings: [],
-         _directBindings: [],
-         _transparentBindings: [],
-         _ob: [],
-         _lastVersion: FQ
-       }
-     }
- 
-     function RQ(QQ, FQ, wQ) {
-       QQ.clr ??= !0;
-       const qQ = QQ.rt._descriptor,
-         oQ = QQ.depth?._descriptor,
-         vQ = {
-           _colorFormat: qQ.format,
-           _depthStencilFormat: oQ?.dFormat ?? qQ.dFormat,
- ... (2 more removed lines; see GitHub link above)
+         args: [],
+         createDirectory: function() {
+           return Pk("createDirectory")
```

#### 12. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L599-L601` → after: `L156-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L156-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/296.js#L156-L162) · [Before (L599-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/296.js#L599-L601)

```diff
-         uQ = {
-           loadOp: "clear",
-           storeOp: "store"
+         directoryExists: mk("directoryExists", (function(ek) {
+           return Array.from(kk.keys()).some((function(kk) {
+             return kk.startsWith(ek)
+           }))
+         })),
+         exit: function() {
+           return Pk("exit")
```

#### 13. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L603-L746` → after: `L164-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L164-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/296.js#L164-L195) · [Before (L603-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/296.js#L603-L746)

```diff
-         HQ = {
-           ...WQ([], -1),
-           name: QQ.name,
-           _config: QQ,
-           _ownsTargets: !QQ.sharedRt,
-           engine: FQ,
-           lA: wQ,
-           _passes: [],
-           _renderPassDescriptor: {
-             colorAttachments: [uQ]
-           },
-           _colorAttachment: uQ,
-           _sceneUBO: bQ(FQ, 368),
-           _suData: new DQ.b(92),
-           _sceneUboCacheKey: [],
-           _targetSignature: vQ,
- ... (128 more removed lines; see GitHub link above)
+         fileExists: mk("fileExists", (function(ek) {
+           return kk.has(ek) || kk.has(Kk(ek))
+         })),
+         getCurrentDirectory: function() {
+           return "/"
+         },
+         getDirectories: function() {
+           return []
+         },
+         getExecutingFilePath: function() {
+           return Pk("getExecutingFilePath")
+         },
+         readDirectory: mk("readDirectory", (function(ek) {
+           return "/" === ek ? Array.from(kk.keys()) : []
+         })),
+         readFile: mk("readFile", (function(ek) {
+ ... (16 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L807-L875` → after: `L201-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L201-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/296.js#L201-L205) · [Before (L807-L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/296.js#L807-L875)

```diff
-       let LQ = null,
-         qQ = 0;
-       for (const oQ of FQ) {
-         const FQ = oQ.renderable.mesh;
-         FQ && !1 === FQ.visible || (oQ.pipeline !== LQ && (QQ.setPipeline(oQ.pipeline), LQ = oQ.pipeline), qQ += oQ.draw(QQ, wQ))
-       }
-       return qQ
-     }
- 
-     function KQ(QQ) {
-       const FQ = QQ._materialSwapQueue;
-       if (!FQ[0] || QQ._runtimeBuilds?.w) return;
-       let LQ, qQ, oQ;
-       const DQ = QQ._renderables;
-       for (const wQ of FQ) {
-         const FQ = wQ.material;
- ... (53 more removed lines; see GitHub link above)
+       var fk = new Map;
+       return {
+         compilerHost: Dk({}, kk, {
+           getCanonicalFileName: function(kk) {
+             return kk
```

#### 15. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L877-L887` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/296.js#L207-L208) · [Before (L877-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/296.js#L877-L887)

```diff
-           camera: null,
-           lights: [],
-           meshes: [],
-           animationGroups: [],
-           fog: null,
-           clipPlane: null,
-           shadowGenerators: [],
-           imageProcessing: {
-             exposure: 1,
-             contrast: 1,
-             toneMappingEnabled: !1
+           getDefaultLibFileName: function() {
+             return "/" + ik.getDefaultLibFileName(ek)
```

#### 16. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L889-L913` → after: `L210-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/296.js#L210-L211) · [Before (L889-L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/296.js#L889-L913)

```diff
-           _renderables: [],
-           _prePasses: [],
-           _pickSources: [],
-           _uniformUpdaters: [],
-           fixedDeltaMs: 0,
-           _beforeRender: [],
-           _deferredBuilders: [],
-           _groups: new Map,
-           _disposables: [],
-           _meshDisposables: new Map,
-           _materialSwapQueue: [],
-           _renderableVersion: 0,
-           _materialEpoch: 0,
-           _built: !1,
-           _drawCallsPre: 0,
-           _update() {
- ... (9 more removed lines; see GitHub link above)
+           getNewLine: function() {
+             return kk.newLine
```

#### 17. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L915-L1009` → after: `L213-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L213-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/296.js#L213-L215) · [Before (L915-L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/296.js#L915-L1009)

```diff
-           _record: () => qQ._frameGraph.execute(),
-           _resize() {
-             qQ._frameGraph.build()
-           }
-         },
-         DQ = function() {
-           const QQ = {
-             _tasks: [],
-             _currentProcessedTask: null,
-             build() {
-               for (let FQ = 0; FQ < QQ._tasks.length; FQ++) oQ(QQ, QQ._tasks[FQ]);
-               for (const FQ of QQ._tasks)
-                 for (const QQ of FQ._passes) QQ._initialize()
-             },
-             execute() {
-               let FQ = 0;
- ... (79 more removed lines; see GitHub link above)
+           getSourceFile: function(Dk, Sk) {
+             var bk, rk;
+             return fk.get(Dk) || (rk = ik.createSourceFile(Dk, kk.readFile(Dk), null != (bk = null != Sk ? Sk : ek.target) ? bk : Mk(ik).target, !1), fk.set(rk.fileName, rk), rk)
```

#### 18. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L1011-L1013` → after: `L217-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L217-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/296.js#L217-L219) · [Before (L1011-L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/296.js#L1011-L1013)

```diff
-           format: HQ,
-           mipLevelCount: bQ,
-           usage: qQ.g.TEXTURE_BINDING | qQ.g.COPY_DST | qQ.g.RENDER_ATTACHMENT
+           useCaseSensitiveFileNames: function() {
+             return kk.useCaseSensitiveFileNames
+           }
```

#### 19. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L1015-L1020` → after: `L221-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L221-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/296.js#L221-L223) · [Before (L1015-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/296.js#L1015-L1020)

```diff
-         xQ = {
-           addressModeU: kQ.addressModeU ?? "clamp-to-edge",
-           addressModeV: kQ.addressModeV ?? "clamp-to-edge",
-           minFilter: kQ.minFilter ?? "linear",
-           magFilter: kQ.magFilter ?? "linear",
-           mipmapFilter: uQ ? "linear" : "nearest"
+         updateFile: function(ek) {
+           var ik = fk.has(ek.fileName);
+           return kk.writeFile(ek.fileName, ek.text), fk.set(ek.fileName, ek), ik
```

#### 20. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L1022-L1274` → after: `L225-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L225-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/296.js#L225-L228) · [Before (L1022-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/296.js#L1022-L1274)

```diff
-         AQ = (0, DQ.e)(QQ, xQ),
-         tQ = {
-           texture: YQ,
-           view: YQ.createView(),
-           sampler: AQ,
-           width: FQ,
-           height: wQ
-         };
-       return (0, oQ.e)(tQ), QQ._dlr && QQ._dlr.t(tQ, {
-         kind: "dynamic",
-         width: FQ,
-         height: wQ,
-         format: HQ,
-         levels: bQ,
-         samplerDesc: xQ,
-         source: null,
- ... (237 more removed lines; see GitHub link above)
+         deleteFile: function(ek) {
+           var ik = fk.has(ek.fileName);
+           return fk.delete(ek.fileName), kk.deleteFile(ek.fileName), ik
+         }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/297.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/297.js` (24 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3)

#### 1. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L4-L61` → after: `L4-L2269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L4-L2269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/297.js#L4-L2269) · [Before (L4-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/297.js#L4-L61)

```diff
-   41169: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => mQ
-     });
-     var LQ = wQ(36696),
-       qQ = wQ(36729),
-       oQ = wQ(39389),
-       DQ = wQ(36705),
-       kQ = wQ(36873);
-     class vQ {
-       constructor(QQ, FQ, wQ, LQ) {
-         this.name = QQ, this.worldAxisForNormal = FQ, this.worldAxisForFileX = wQ, this.worldAxisForFileY = LQ
-       }
-     }
-     class mQ {
-       static _NearestPow2Floor(QQ) {
- ... (42 more removed lines; see GitHub link above)
+   40972: (kk, ek, ik) => {
+     var Dk = "/index.js",
+       fk = {};
+     (kk => {
+       var ek = Object.defineProperty,
+         fk = (Object.getOwnPropertyDescriptor, Object.getOwnPropertyNames, Object.prototype.hasOwnProperty, (kk, ik) => {
+           for (var Dk in ik) ek(kk, Dk, {
+             get: ik[Dk],
+             enumerable: !0
+           })
+         }),
+         Sk = {};
+       fk(Sk, {
+         ANONYMOUS: () => Z8,
+         AccessFlags: () => KS,
+         AssertionLevel: () => Li,
+ ... (2250 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L63-L64` → after: `L2271-L2277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2271-L2277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/297.js#L2271-L2277) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/297.js#L63-L64)

```diff
-       static _AreaElement(QQ, FQ) {
-         return Math.atan2(QQ * FQ, Math.sqrt(QQ * QQ + FQ * FQ + 1))
+ 
+       function xk(kk, ek) {
+         if (void 0 !== kk)
+           for (let ik = 0; ik < kk.length; ik++) {
+             const Dk = ek(kk[ik], ik);
+             if (Dk) return Dk
+           }
```

#### 3. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L66-L84` → after: `L2279-L2284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2279-L2284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/297.js#L2279-L2284) · [Before (L66-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/297.js#L66-L84)

```diff
-       static _DownsampleFace(QQ, FQ, wQ, LQ) {
-         const qQ = QQ instanceof Float32Array ? QQ : Float32Array.from(QQ),
-           oQ = wQ * wQ * LQ,
-           DQ = new Float32Array(oQ),
-           kQ = FQ / wQ,
-           vQ = 1 / (kQ * kQ);
-         for (let uQ = 0; uQ < wQ; uQ++) {
-           const QQ = Math.floor(uQ * kQ),
-             oQ = Math.floor((uQ + 1) * kQ);
-           for (let mQ = 0; mQ < wQ; mQ++) {
-             const HQ = Math.floor(mQ * kQ),
-               bQ = Math.floor((mQ + 1) * kQ),
-               YQ = (uQ * wQ + mQ) * LQ;
-             for (let wQ = 0; wQ < LQ; wQ++) {
-               let kQ = 0;
-               for (let DQ = QQ; DQ < oQ; DQ++)
- ... (3 more removed lines; see GitHub link above)
+ 
+       function nk(kk, ek) {
+         if (void 0 !== kk)
+           for (let ik = kk.length - 1; ik >= 0; ik--) {
+             const Dk = ek(kk[ik], ik);
+             if (Dk) return Dk
```

#### 4. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L92-L103` → after: `L2287-L2292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2287-L2292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/297.js#L2287-L2292) · [Before (L92-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/297.js#L92-L103)

```diff
-       static ConvertCubeMapToSphericalPolynomial(QQ) {
-         let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const wQ = FQ > 0 ? this._NearestPow2Floor(FQ) : 0;
-         if (wQ > 0 && QQ.size > wQ) {
-           const FQ = 5 === QQ.format ? 4 : 3,
-             LQ = ["right", "left", "up", "down", "front", "back"],
-             qQ = {};
-           for (const oQ of LQ) qQ[oQ] = this._DownsampleFace(QQ[oQ], QQ.size, wQ, FQ);
-           QQ = {
-             ...QQ,
-             ...qQ,
-             size: wQ
+ 
+       function Uk(kk, ek) {
+         if (void 0 !== kk)
+           for (let ik = 0; ik < kk.length; ik++) {
+             const Dk = ek(kk[ik], ik);
+             if (void 0 !== Dk) return Dk
```

#### 5. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L106-L201` → after: `L2301-L2307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2301-L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/297.js#L2301-L2307) · [Before (L106-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/297.js#L106-L201)

```diff
-         const LQ = new oQ.b;
-         let vQ = 0;
-         const mQ = 2 / QQ.size,
-           uQ = mQ,
-           HQ = .5 * mQ,
-           bQ = HQ - 1;
-         for (let oQ = 0; oQ < 6; oQ++) {
-           const FQ = this._FileFaces[oQ],
-             wQ = QQ[FQ.name];
-           let YQ = bQ;
-           const xQ = 5 === QQ.format ? 4 : 3;
-           for (let oQ = 0; oQ < QQ.size; oQ++) {
-             let AQ = bQ;
-             for (let uQ = 0; uQ < QQ.size; uQ++) {
-               const bQ = FQ.worldAxisForFileX.scale(AQ).add(FQ.worldAxisForFileY.scale(YQ)).add(FQ.worldAxisForNormal);
-               bQ.normalize();
- ... (80 more removed lines; see GitHub link above)
+       }
+ 
+       function wk(kk, ek, ik) {
+         let Dk = ik;
+         if (kk) {
+           let ik = 0;
+           for (const fk of kk) Dk = ek(Dk, fk, ik), ik++
```

#### 6. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L204-L206` → after: `L2348-L2377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2348-L2377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/297.js#L2348-L2377) · [Before (L204-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/297.js#L204-L206)

```diff
-       static _GetHalfFloatAsFloatRGBAArrayBuffer(QQ, FQ, wQ, LQ, qQ, oQ) {
-         const kQ = new Float32Array(LQ),
-           vQ = new Uint16Array(qQ, wQ);
+ 
+       function Ck(kk, ek, ik) {
+         if (void 0 === kk) return -1;
+         for (let Dk = ik ?? 0; Dk < kk.length; Dk++)
+           if (ek(kk[Dk], Dk)) return Dk;
+         return -1
+       }
+ 
+       function Ak(kk, ek, ik) {
+         if (void 0 === kk) return -1;
+         for (let Dk = ik ?? kk.length - 1; Dk >= 0; Dk--)
+           if (ek(kk[Dk], Dk)) return Dk;
+         return -1
+       }
+ 
+       function jk(kk, ek) {
+ ... (14 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L208-L211` → after: `L2379-L2381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2379-L2381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/297.js#L2379-L2381) · [Before (L208-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/297.js#L208-L211)

```diff
-         for (let uQ = 0; uQ < FQ; uQ++)
-           for (let FQ = 0; FQ < QQ; FQ++) {
-             const wQ = 4 * (FQ + uQ * QQ);
-             kQ[mQ] = (0, DQ.d)(vQ[wQ]), kQ[mQ + 1] = (0, DQ.d)(vQ[wQ + 1]), kQ[mQ + 2] = (0, DQ.d)(vQ[wQ + 2]), xQ.StoreLODInAlphaChannel ? kQ[mQ + 3] = oQ : kQ[mQ + 3] = (0, DQ.d)(vQ[wQ + 3]), mQ += 4
+         if (void 0 !== kk)
+           for (let Dk = 0; Dk < kk.length; Dk++) {
+             ek(kk[Dk], Dk) && ik++
```

#### 8. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L215-L218` → after: `L2385-L2388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2385-L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/297.js#L2385-L2388) · [Before (L215-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/297.js#L215-L218)

```diff
-       static _GetHalfFloatRGBAArrayBuffer(QQ, FQ, wQ, LQ, qQ, oQ) {
-         if (xQ.StoreLODInAlphaChannel) {
-           const kQ = new Uint16Array(LQ),
-             vQ = new Uint16Array(qQ, wQ);
+ 
+       function Vk(kk, ek) {
+         if (void 0 !== kk) {
+           const ik = kk.length;
```

#### 9. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L220-L223` → after: `L2390-L2395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2390-L2395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/297.js#L2390-L2395) · [Before (L220-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/297.js#L220-L223)

```diff
-           for (let wQ = 0; wQ < FQ; wQ++)
-             for (let FQ = 0; FQ < QQ; FQ++) {
-               const LQ = 4 * (FQ + wQ * QQ);
-               kQ[mQ] = vQ[LQ], kQ[mQ + 1] = vQ[LQ + 1], kQ[mQ + 2] = vQ[LQ + 2], kQ[mQ + 3] = (0, DQ.j)(oQ), mQ += 4
+           for (; Dk < ik && ek(kk[Dk]);) Dk++;
+           if (Dk < ik) {
+             const fk = kk.slice(0, Dk);
+             for (Dk++; Dk < ik;) {
+               const ik = kk[Dk];
+               ek(ik) && fk.push(ik), Dk++
```

#### 10. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L225` → after: `L2397-L2398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2397-L2398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/297.js#L2397-L2398) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/297.js#L225)

```diff
-           return kQ
+             return fk
+           }
```

#### 11. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L227` → after: `L2400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/297.js#L2400) · [Before (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/297.js#L227)

```diff
-         return new Uint16Array(qQ, wQ, LQ)
+         return kk
```

#### 12. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L229-L239` → after: `L2402-L2417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2402-L2417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/297.js#L2402-L2417) · [Before (L229-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/297.js#L229-L239)

```diff
-       static _GetFloatRGBAArrayBuffer(QQ, FQ, wQ, LQ, qQ, oQ) {
-         if (xQ.StoreLODInAlphaChannel) {
-           const DQ = new Float32Array(LQ),
-             kQ = new Float32Array(qQ, wQ);
-           let vQ = 0;
-           for (let wQ = 0; wQ < FQ; wQ++)
-             for (let FQ = 0; FQ < QQ; FQ++) {
-               const LQ = 4 * (FQ + wQ * QQ);
-               DQ[vQ] = kQ[LQ], DQ[vQ + 1] = kQ[LQ + 1], DQ[vQ + 2] = kQ[LQ + 2], DQ[vQ + 3] = oQ, vQ += 4
-             }
-           return DQ
+ 
+       function Fk(kk, ek) {
+         let ik = 0;
+         for (let Dk = 0; Dk < kk.length; Dk++) ek(kk[Dk], Dk, kk) && (kk[ik] = kk[Dk], ik++);
+         kk.length = ik
+       }
+ 
+       function uk(kk) {
+         kk.length = 0
+       }
+ 
+       function qk(kk, ek) {
+         let ik;
+         if (void 0 !== kk) {
+           ik = [];
+           for (let Dk = 0; Dk < kk.length; Dk++) ik.push(ek(kk[Dk], Dk))
```

#### 13. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L241` → after: `L2419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/297.js#L2419) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/297.js#L241)

```diff
-         return new Float32Array(qQ, wQ, LQ)
+         return ik
```

#### 14. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L243-L248` → after: `L2421-L2436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2421-L2436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/297.js#L2421-L2436) · [Before (L243-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/297.js#L243-L248)

```diff
-       static _GetFloatAsHalfFloatRGBAArrayBuffer(QQ, FQ, wQ, LQ, qQ, oQ) {
-         const kQ = new Uint16Array(LQ),
-           vQ = new Float32Array(qQ, wQ);
-         let mQ = 0;
-         for (let uQ = 0; uQ < FQ; uQ++)
-           for (let FQ = 0; FQ < QQ; FQ++) kQ[mQ] = (0, DQ.j)(vQ[mQ]), kQ[mQ + 1] = (0, DQ.j)(vQ[mQ + 1]), kQ[mQ + 2] = (0, DQ.j)(vQ[mQ + 2]), xQ.StoreLODInAlphaChannel ? kQ[mQ + 3] = (0, DQ.j)(oQ) : kQ[mQ + 3] = (0, DQ.j)(vQ[mQ + 3]), mQ += 4;
+ 
+       function* Ik(kk, ek) {
+         for (const ik of kk) yield ek(ik)
+       }
+ 
+       function zk(kk, ek) {
+         if (void 0 !== kk)
+           for (let ik = 0; ik < kk.length; ik++) {
+             const Dk = kk[ik],
+               fk = ek(Dk, ik);
+             if (Dk !== fk) {
+               const Dk = kk.slice(0, ik);
+               for (Dk.push(fk), ik++; ik < kk.length; ik++) Dk.push(ek(kk[ik], ik));
+               return Dk
+             }
+           }
```

#### 15. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L251-L258` → after: `L2439-L2464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2439-L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/297.js#L2439-L2464) · [Before (L251-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/297.js#L251-L258)

```diff
-       static _GetFloatAsUIntRGBAArrayBuffer(QQ, FQ, wQ, qQ, oQ, DQ) {
-         const kQ = new Uint8Array(qQ),
-           vQ = new Float32Array(oQ, wQ);
-         let mQ = 0;
-         for (let uQ = 0; uQ < FQ; uQ++)
-           for (let FQ = 0; FQ < QQ; FQ++) {
-             const wQ = 4 * (FQ + uQ * QQ);
-             kQ[mQ] = 255 * (0, LQ.Clamp)(vQ[wQ]), kQ[mQ + 1] = 255 * (0, LQ.Clamp)(vQ[wQ + 1]), kQ[mQ + 2] = 255 * (0, LQ.Clamp)(vQ[wQ + 2]), xQ.StoreLODInAlphaChannel ? kQ[mQ + 3] = DQ : kQ[mQ + 3] = 255 * (0, LQ.Clamp)(vQ[wQ + 3]), mQ += 4
+ 
+       function Qk(kk) {
+         const ek = [];
+         for (let ik = 0; ik < kk.length; ik++) {
+           const Dk = kk[ik];
+           Dk && (Di(Dk) ? Ke(ek, Dk) : ek.push(Dk))
+         }
+         return ek
+       }
+ 
+       function vk(kk, ek) {
+         let ik;
+         if (void 0 !== kk)
+           for (let Dk = 0; Dk < kk.length; Dk++) {
+             const fk = ek(kk[Dk], Dk);
+             fk && (ik = Di(fk) ? Ke(ik, fk) : Pe(ik, fk))
+ ... (10 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L262-L269` → after: `L2468-L2482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2468-L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/297.js#L2468-L2482) · [Before (L262-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/297.js#L262-L269)

```diff
-       static _GetHalfFloatAsUIntRGBAArrayBuffer(QQ, FQ, wQ, qQ, oQ, kQ) {
-         const vQ = new Uint8Array(qQ),
-           mQ = new Uint16Array(oQ, wQ);
-         let uQ = 0;
-         for (let HQ = 0; HQ < FQ; HQ++)
-           for (let FQ = 0; FQ < QQ; FQ++) {
-             const wQ = 4 * (FQ + HQ * QQ);
-             vQ[uQ] = 255 * (0, LQ.Clamp)((0, DQ.d)(mQ[wQ])), vQ[uQ + 1] = 255 * (0, LQ.Clamp)((0, DQ.d)(mQ[wQ + 1])), vQ[uQ + 2] = 255 * (0, LQ.Clamp)((0, DQ.d)(mQ[wQ + 2])), xQ.StoreLODInAlphaChannel ? vQ[uQ + 3] = kQ : vQ[uQ + 3] = 255 * (0, LQ.Clamp)((0, DQ.d)(mQ[wQ + 3])), uQ … [truncated]
+ 
+       function* hk(kk, ek) {
+         for (const ik of kk) {
+           const kk = ek(ik);
+           kk && (yield* kk)
+         }
+       }
+ 
+       function ak(kk, ek) {
+         let ik;
+         if (void 0 !== kk)
+           for (let Dk = 0; Dk < kk.length; Dk++) {
+             const fk = kk[Dk],
+               Sk = ek(fk, Dk);
+             (ik || fk !== Sk || Di(Sk)) && (ik || (ik = kk.slice(0, Dk)), Di(Sk) ? Ke(ik, Sk) : ik.push(Sk))
```

#### 17. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L273-L280` → after: `L2496-L2502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2496-L2502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/297.js#L2496-L2502) · [Before (L273-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/297.js#L273-L280)

```diff
-       static _GetRGBAArrayBuffer(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ) {
-         const mQ = new Uint8Array(LQ),
-           uQ = new Uint8Array(qQ, wQ);
-         let HQ = 0;
-         for (let bQ = 0; bQ < FQ; bQ++)
-           for (let FQ = 0; FQ < QQ; FQ++) {
-             const wQ = 4 * (FQ + bQ * QQ);
-             mQ[HQ] = uQ[wQ + oQ], mQ[HQ + 1] = uQ[wQ + DQ], mQ[HQ + 2] = uQ[wQ + kQ], mQ[HQ + 3] = uQ[wQ + vQ], HQ += 4
+ 
+       function tk(kk, ek) {
+         const ik = [];
+         if (void 0 !== kk)
+           for (let Dk = 0; Dk < kk.length; Dk++) {
+             const fk = ek(kk[Dk], Dk);
+             void 0 !== fk && ik.push(fk)
```

#### 18. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L284-L285` → after: `L2506-L2511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2506-L2511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/297.js#L2506-L2511) · [Before (L284-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/297.js#L284-L285)

```diff
-       static _ExtractLongWordOrder(QQ) {
-         return 0 === QQ || 255 === QQ || -16777216 === QQ ? 0 : 1 + xQ._ExtractLongWordOrder(QQ >> 8)
+ 
+       function* Xk(kk, ek) {
+         for (const ik of kk) {
+           const kk = ek(ik);
+           void 0 !== kk && (yield kk)
+         }
```

#### 19. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L287-L294` → after: `L2513-L2545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2513-L2545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/297.js#L2513-L2545) · [Before (L287-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/297.js#L287-L294)

```diff
-       static _GetRGBArrayBuffer(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ) {
-         const vQ = new Uint8Array(LQ),
-           mQ = new Uint8Array(qQ, wQ);
-         let uQ = 0;
-         for (let HQ = 0; HQ < FQ; HQ++)
-           for (let FQ = 0; FQ < QQ; FQ++) {
-             const wQ = 3 * (FQ + HQ * QQ);
-             vQ[uQ] = mQ[wQ + oQ], vQ[uQ + 1] = mQ[wQ + DQ], vQ[uQ + 2] = mQ[wQ + kQ], uQ += 3
+ 
+       function Bk(kk, ek, ik) {
+         if (kk.has(ek)) return kk.get(ek);
+         const Dk = ik();
+         return kk.set(ek, Dk), Dk
+       }
+ 
+       function ck(kk, ek) {
+         return !kk.has(ek) && (kk.add(ek), !0)
+       }
+ 
+       function* Tk(kk) {
+         yield kk
+       }
+ 
+       function Zk(kk, ek, ik) {
+ ... (17 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L298-L306` → after: `L2550-L2579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2550-L2579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/297.js#L2550-L2579) · [Before (L298-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/297.js#L298-L306)

```diff
-       static _GetLuminanceArrayBuffer(QQ, FQ, wQ, LQ, qQ) {
-         const oQ = new Uint8Array(LQ),
-           DQ = new Uint8Array(qQ, wQ);
-         let kQ = 0;
-         for (let vQ = 0; vQ < FQ; vQ++)
-           for (let FQ = 0; FQ < QQ; FQ++) {
-             const wQ = FQ + vQ * QQ;
-             oQ[kQ] = DQ[wQ], kQ++
-           }
+ 
+       function Ok(kk, ek) {
+         if (void 0 === kk) return;
+         const ik = new Map;
+         return kk.forEach(((kk, Dk) => {
+           const [fk, Sk] = ek(Dk, kk);
+           ik.set(fk, Sk)
+         })), ik
+       }
+ 
+       function gk(kk, ek) {
+         if (void 0 !== kk) {
+           if (void 0 === ek) return kk.length > 0;
+           for (let ik = 0; ik < kk.length; ik++)
+             if (ek(kk[ik])) return !0
+         }
+ ... (14 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L309-L354` → after: `L2582-L2640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2582-L2640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/297.js#L2582-L2640) · [Before (L309-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/297.js#L309-L354)

```diff
-       static UploadDDSLevels(QQ, FQ, wQ, LQ, DQ, vQ) {
-         let mQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
-           AQ = arguments.length > 7 ? arguments[7] : void 0,
-           tQ = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
-           eQ = null;
-         LQ.sphericalPolynomial && (eQ = []);
-         const MQ = !!QQ.getCaps().s3tc;
-         FQ.generateMipMaps = DQ;
-         const GQ = new Int32Array(wQ.buffer, wQ.byteOffset, 31);
-         let pQ, cQ, CQ, SQ, iQ, WQ, RQ, OQ = 0,
-           sQ = 0,
-           rQ = 1;
-         if (542327876 !== GQ[0]) return void qQ.c.Error("Invalid magic number in DDS header");
-         if (!LQ.isFourCC && !LQ.isRGB && !LQ.isLuminance) return void qQ.c.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
-         if (LQ.isCompressed && !MQ) return void qQ.c.Error("Compressed textures are not supported on this platform.");
-         let IQ = GQ[22];
- ... (30 more removed lines; see GitHub link above)
+ 
+       function Jk(kk) {
+         return kk.map(Rk)
+       }
+ 
+       function ke(kk, ek, ik) {
+         const Dk = Jk(kk);
+         ! function(kk, ek, ik) {
+           ek.sort(((ek, Dk) => ik(kk[ek], kk[Dk]) || di(ek, Dk)))
+         }(kk, Dk, ik);
+         let fk = kk[Dk[0]];
+         const Sk = [Dk[0]];
+         for (let bk = 1; bk < Dk.length; bk++) {
+           const ik = Dk[bk],
+             rk = kk[ik];
+           ek(fk, rk) || (Sk.push(ik), fk = rk)
+ ... (43 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L356` → after: `L2642-L2679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2642-L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/297.js#L2642-L2679) · [Before (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/297.js#L356)

```diff
-             if (QQ) break
+             Dk.push(ik = Sk)
+           }
+           return Dk
+         }(Ue(kk, ek), ik ?? ek ?? zi)
+       }
+ 
+       function Se(kk, ek) {
+         let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ci;
+         if (void 0 === kk || void 0 === ek) return kk === ek;
+         if (kk.length !== ek.length) return !1;
+         for (let Dk = 0; Dk < kk.length; Dk++)
+           if (!ik(kk[Dk], ek[Dk], Dk)) return !1;
+         return !0
+       }
+ 
+       function be(kk) {
+ ... (22 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L361-L426` → after: `L2682-L125584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2682-L125584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/297.js#L2682-L125584) · [Before (L361-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/297.js#L361-L426)

```diff
-         var NQ;
-         const TQ = xQ._ExtractLongWordOrder(GQ[23]),
-           KQ = xQ._ExtractLongWordOrder(GQ[24]),
-           zQ = xQ._ExtractLongWordOrder(GQ[25]),
-           lQ = xQ._ExtractLongWordOrder(GQ[26]);
-         UQ && (sQ = QQ._getRGBABufferInternalSizedFormat(LQ.textureType)), WQ = 1, GQ[2] & kQ && !1 !== DQ && (WQ = Math.max(1, GQ[7]));
-         const jQ = AQ || 0,
-           aQ = QQ.getCaps();
-         for (let qQ = jQ; qQ < vQ; qQ++) {
-           for (cQ = GQ[4], CQ = GQ[3], RQ = 0; RQ < WQ; ++RQ) {
-             if (-1 === mQ || mQ === RQ) {
-               const oQ = -1 === mQ ? RQ : 0;
-               if (!LQ.isCompressed && LQ.isFourCC) {
-                 FQ.format = 5, OQ = cQ * CQ * 4;
-                 let LQ = null;
-                 if (QQ._badOS || QQ._badDesktopOS || !aQ.textureHalfFloat && !aQ.textureFloat) 128 === IQ ? (LQ = xQ._GetFloatAsUIntRGBAArrayBuffer(cQ, CQ, wQ.byteOffset + SQ, OQ, wQ.buffer, oQ), eQ && 0 == oQ && eQ.push(xQ._GetFloatRGBAArrayBuffer(cQ, CQ, wQ.byteOffset + SQ, OQ, … [truncated]
- ... (50 more removed lines; see GitHub link above)
+         return Dk
+       }
+ 
+       function Pe(kk, ek) {
+         return void 0 === ek ? kk : void 0 === kk ? [ek] : (kk.push(ek), kk)
+       }
+ 
+       function me(kk, ek) {
+         return void 0 === kk ? ek : void 0 === ek ? kk : Di(kk) ? Di(ek) ? Nk(kk, ek) : Pe(kk, ek) : Di(ek) ? Pe(ek, kk) : [kk, ek]
+       }
+ 
+       function Me(kk, ek) {
+         return ek < 0 ? kk.length + ek : ek
+       }
+ 
+       function Ke(kk, ek, ik, Dk) {
+ ... (122887 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L428-L429` → after: `L125586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R125586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L125586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/297.js#L125586) · [Before (L428-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/297.js#L428-L429)

```diff
-     }
-     xQ.StoreLODInAlphaChannel = !1
+     })
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/298.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/298.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89)

#### 1. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/298.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/298.js#L2)

```diff
- export const ids = [297, 298];
+ export const ids = [298];
```

#### 2. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/298.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/298.js#L4-L6)

```diff
-   41184: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       _DDSTextureLoader: () => oQ
+   41050: (kk, ek, ik) => {
+     ik.d(ek, {
+       collectImportedWorldCodePluginNames: () => mk
```

#### 3. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8-L12` → after: `L8-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/298.js#L8-L61) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/298.js#L8-L12)

```diff
-     var LQ = wQ(39389),
-       qQ = wQ(41162);
-     class oQ {
-       constructor() {
-         this.supportCascades = !0
+     var Dk = ik(36463),
+       fk = ik(36454),
+       Sk = ik(40972),
+       bk = ik.n(Sk);
+ 
+     function rk(kk) {
+       return bk().isImportDeclaration(kk) && bk().isStringLiteral(kk.moduleSpecifier) && function(kk) {
+         const ek = kk.importClause;
+         if (!ek) return !0;
+         if (ek.isTypeOnly) return !1;
+         const ik = ek.namedBindings;
+         return !(ik && !bk().isNamespaceImport(ik)) || !!ek.name || ik.elements.some((kk => !kk.isTypeOnly))
+       }(kk) || bk().isExportDeclaration(kk) && kk.moduleSpecifier && bk().isStringLiteral(kk.moduleSpecifier) && function(kk) {
+         return !kk.isTypeOnly && (!kk.exportClause || !bk().isNamedExports(kk.exportClause) || 0 === kk.exportClause.elements.length || kk.exportClause.elements.some((kk => !kk.isTypeOnly)))
+       }(kk) ? kk.moduleSpecifier.text : bk().isImportEqualsDeclaration(kk) && !kk.isTypeOnly && bk().isExternalModuleReference(kk.moduleReference) && kk.moduleReference.expression && bk().isStringLiteral(kk.moduleReference.expression) ? kk.moduleReference.expression.text : bk().i … [truncated]
+     }
+ ... (38 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14-L40` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/298.js#L63) · [Before (L14-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/298.js#L14-L40)

```diff
-       loadCubeData(QQ, FQ, wQ, oQ) {
-         const DQ = FQ.Wx();
-         let kQ, vQ = !1,
-           mQ = 1e3;
-         if (Array.isArray(QQ))
-           for (let LQ = 0; LQ < QQ.length; LQ++) {
-             const wQ = QQ[LQ];
-             kQ = qQ.DDSTools.GetDDSInfo(wQ), FQ.width = kQ.width, FQ.height = kQ.height, vQ = (kQ.isRGB || kQ.isLuminance || kQ.mipmapCount > 1) && FQ.generateMipMaps, DQ._unpackFlipY(kQ.isCompressed), qQ.DDSTools.UploadDDSLevels(DQ, FQ, wQ, kQ, vQ, 6, -1, LQ), kQ.isFourCC || 1 ! … [truncated]
-           } else {
-             const oQ = QQ;
-             kQ = qQ.DDSTools.GetDDSInfo(oQ), FQ.width = kQ.width, FQ.height = kQ.height, wQ && (kQ.sphericalPolynomial = new LQ.e), vQ = (kQ.isRGB || kQ.isLuminance || kQ.mipmapCount > 1) && FQ.generateMipMaps, DQ._unpackFlipY(kQ.isCompressed), qQ.DDSTools.UploadDDSLevels(DQ, FQ, … [truncated]
-           }
-         DQ._setCubeMapTextureParams(FQ, vQ, mQ), FQ.isReady = !0, FQ.onLoadedObservable.notifyObservers(FQ), FQ.onLoadedObservable.clear(), oQ && oQ({
-           isDDS: !0,
-           width: FQ.width,
-           info: kQ,
- ... (11 more removed lines; see GitHub link above)
+       return [...ek].sort()
```

#### 5. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L43-L55` → after: `L66-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L66-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/298.js#L66-L69) · [Before (L43-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/298.js#L43-L55)

```diff
-   41169: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => mQ
-     });
-     var LQ = wQ(36696),
-       qQ = wQ(36729),
-       oQ = wQ(39389),
-       DQ = wQ(36705),
-       kQ = wQ(36873);
-     class vQ {
-       constructor(QQ, FQ, wQ, LQ) {
-         this.name = QQ, this.worldAxisForNormal = FQ, this.worldAxisForFileX = wQ, this.worldAxisForFileY = LQ
-       }
+   41012: kk => {
+     function ek(kk) {
+       var ek = new Error("Cannot find module '" + kk + "'");
+       throw ek.code = "MODULE_NOT_FOUND", ek
```

#### 6. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L57-L184` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/298.js#L71) · [Before (L57-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/298.js#L57-L184)

```diff
-     class mQ {
-       static _NearestPow2Floor(QQ) {
-         return QQ <= 1 ? 1 : 1 << Math.floor(Math.log2(QQ))
-       }
-       static ConvertCubeMapTextureToSphericalPolynomial(QQ) {
-         if (!QQ.isCube) return null;
-         QQ.iN()?.Wx().flushFramebuffer();
-         const FQ = QQ.getSize().width,
-           wQ = QQ._sphericalPolynomialTargetSize,
-           LQ = wQ > 0 ? this._NearestPow2Floor(wQ) : 0,
-           qQ = !QQ.noMipmap && !0 === QQ._texture?.generateMipMaps,
-           oQ = LQ > 0 && LQ < FQ && qQ,
-           DQ = oQ ? Math.max(0, Math.round(Math.log2(FQ / LQ))) : 0,
-           kQ = oQ ? Math.max(1, Math.floor(FQ / Math.pow(2, DQ))) : FQ,
-           vQ = QQ.readPixels(0, DQ, void 0, !1),
-           mQ = QQ.readPixels(1, DQ, void 0, !1);
- ... (112 more removed lines; see GitHub link above)
+     ek.keys = () => [], ek.resolve = ek, ek.id = 41012, kk.exports = ek
```

#### 7. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L186-L469` → after: `L73-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L73-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/298.js#L73-L79) · [Before (L186-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/298.js#L186-L469)

```diff
-   41162: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       DDSTools: () => xQ
-     });
-     var LQ = wQ(36729),
-       qQ = wQ(38203),
-       oQ = wQ(41169),
-       DQ = wQ(39475);
-     const kQ = 131072,
-       vQ = 131072;
- 
-     function mQ(QQ) {
-       return QQ.charCodeAt(0) + (QQ.charCodeAt(1) << 8) + (QQ.charCodeAt(2) << 16) + (QQ.charCodeAt(3) << 24)
-     }
-     const uQ = mQ("DXT1"),
-       HQ = mQ("DXT3"),
- ... (268 more removed lines; see GitHub link above)
+   40998: () => {},
+   40982: () => {},
+   41015: () => {},
+   40994: () => {},
+   40985: () => {},
+   40974: () => {},
+   41003: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/299.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/299.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8)

#### 1. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/299.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/299.js#L4)

```diff
-   41197: (QQ, FQ, wQ) => {
+   41027: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/299.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/299.js#L6)

```diff
-       _ENVTextureLoader: () => WQ
+       default: () => Ck
```

#### 3. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L8-L18` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/299.js#L8-L18) · [Before (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/299.js#L8-L18)

```diff
-     var LQ = wQ(39333),
-       qQ = wQ(36696),
-       oQ = wQ(36729),
-       DQ = wQ(39389),
-       kQ = wQ(39226),
-       vQ = wQ(39397),
-       mQ = (wQ(39496), wQ(41200)),
-       uQ = wQ(38203),
-       HQ = (wQ(41209), wQ(41235), wQ(39470));
-     const bQ = "image/png",
-       YQ = [134, 22, 135, 150, 246, 214, 150, 54];
+     var Dk = ik(60),
+       fk = ik(4689),
+       Sk = ik(1648),
+       bk = ik(1021),
+       rk = ik.n(bk),
+       Pk = ik(1410),
+       mk = ik(1172),
+       Mk = ik(4659),
+       Kk = ik(4674),
+       xk = ik(4678),
+       nk = ik(1066);
```

#### 4. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L21-L28` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/299.js#L21) · [Before (L21-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/299.js#L21-L28)

```diff
-       const FQ = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength);
-       let wQ = 0;
-       for (let DQ = 0; DQ < YQ.length; DQ++)
-         if (FQ.getUint8(wQ++) !== YQ[DQ]) return uQ.c.Error("Not a babylon environment map"), null;
-       let LQ, qQ = "";
-       for (; LQ = FQ.getUint8(wQ++);) qQ += String.fromCharCode(LQ);
-       let oQ = JSON.parse(qQ);
-       return oQ = AQ(oQ), oQ.binaryDataPosition = wQ, oQ.specular && (oQ.specular.lodGenerationScale = oQ.specular.lodGenerationScale || .8), oQ
+       return kk.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
```

#### 5. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L31-L37` → after: `L25-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L25-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/299.js#L25-L27) · [Before (L31-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/299.js#L31-L37)

```diff
-     function AQ(QQ) {
-       if (QQ.version > 2) throw new Error(`Unsupported babylon environment map version "${QQ.version}". Latest supported version is "2".`);
-       return 2 === QQ.version ? QQ : QQ = {
-         ...QQ,
-         version: 2,
-         imageType: bQ
-       }
+     function Hk(kk, ek) {
+       const ik = Uk(kk).replace(/"/g, "&quot;");
+       return `<button type="button" class="DocsCopyButton ${ek}" title="${ik}" aria-label="${ik}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" vi … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L41-L49` → after: `L31-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L31-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/299.js#L31-L39) · [Before (L41-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/299.js#L41-L49)

```diff
-       const wQ = (FQ = AQ(FQ)).specular;
-       let LQ = Math.log2(FQ.width);
-       if (LQ = Math.round(LQ) + 1, wQ.mipmaps.length !== 6 * LQ) throw new Error(`Unsupported specular mipmaps number "${wQ.mipmaps.length}"`);
-       const qQ = new Array(LQ);
-       for (let oQ = 0; oQ < LQ; oQ++) {
-         qQ[oQ] = new Array(6);
-         for (let LQ = 0; LQ < 6; LQ++) {
-           const DQ = wQ.mipmaps[6 * oQ + LQ];
-           qQ[oQ][LQ] = new Uint8Array(QQ.buffer, QQ.byteOffset + FQ.binaryDataPosition + DQ.position, DQ.length)
+       const ik = [],
+         Dk = kk.toLowerCase(),
+         fk = ek.toLowerCase();
+       let Sk = 0;
+       for (; Sk < kk.length;) {
+         const bk = Dk.indexOf(fk, Sk);
+         if (-1 === bk) {
+           ik.push(kk.slice(Sk));
+           break
```

#### 7. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L54-L63` → after: `L48-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L48-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/299.js#L48-L69) · [Before (L54-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/299.js#L54-L63)

```diff
- 
-     function eQ(QQ, FQ) {
-       FQ = AQ(FQ);
-       const wQ = new Array(6),
-         LQ = FQ.irradiance?.irradianceTexture;
-       if (LQ) {
-         if (6 !== LQ.faces.length) throw new Error(`Incorrect irradiance texture faces number "${LQ.faces.length}"`);
-         for (let qQ = 0; qQ < 6; qQ++) {
-           const oQ = LQ.faces[qQ];
-           wQ[qQ] = new Uint8Array(QQ.buffer, QQ.byteOffset + FQ.binaryDataPosition + oQ.position, oQ.length)
+     var lk = ik(1033),
+       pk = ik(1345),
+       yk = ik(36486),
+       Yk = ik(36489);
+     const Lk = {
+         clientOptions: {
+           tabStep: "docsClientOptionsTab",
+           tabText: "codeEditor:tutorialClientOptionsTab",
+           pageStep: "docsClientOptions",
+           pageText: "codeEditor:tutorialClientOptions"
+         },
+         apiReference: {
+           tabStep: "docsApiReferenceTab",
+           tabText: "codeEditor:tutorialApiReferenceTab",
+           pageStep: "docsApiReference",
+           pageText: "codeEditor:tutorialApiReference"
+ ... (6 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L65-L94` → after: `L71-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L71-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/299.js#L71-L276) · [Before (L65-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/299.js#L65-L94)

```diff
-       }
-       return wQ
-     }
- 
-     function MQ(QQ, FQ, wQ) {
-       const LQ = (wQ = AQ(wQ)).specular;
-       if (!LQ) return Promise.resolve([]);
-       QQ._lodGenerationScale = LQ.lodGenerationScale;
-       const oQ = [],
-         DQ = tQ(FQ, wQ);
-       oQ.push(pQ(QQ, DQ, wQ.imageType));
-       const kQ = wQ.irradiance?.irradianceTexture;
-       if (kQ) {
-         const LQ = eQ(FQ, wQ);
-         let DQ = null;
-         wQ.irradiance?.irradianceTexture?.dominantDirection && (DQ = qQ.p.FromArray(wQ.irradiance.irradianceTexture.dominantDirection)), oQ.push(cQ(QQ, LQ, kQ.size, wQ.imageType, DQ))
- ... (14 more removed lines; see GitHub link above)
+       },
+       Ck = (0, Dk.memo)((function(kk) {
+         var ek, ik, bk, Kk, xk, Ck, Ak;
+         let {
+           popOutDocs: jk,
+           hideDocs: sk,
+           tutorialEnabled: dk
+         } = kk;
+         const [Vk, Fk] = (0, Dk.useState)(fk.b[0].id), uk = (0, Dk.useRef)(null), qk = (0, Dk.useRef)(null), [Ik, zk] = (0, Dk.useState)(""), [Qk, vk] = (0, Dk.useState)(0), [Ek, hk] = (0, Dk.useState)(null), [ak, Wk] = (0, Dk.useState)(!1), [tk, Xk] = (0, Dk.useState)(160), Bk = … [truncated]
+         (0, Dk.useEffect)((() => {
+           gk && Ik.length > 0 && (zk(""), Ok((kk => kk + 1)))
+         }), [gk, Ik]);
+         const Gk = Ik.length > 0,
+           Nk = (0, Dk.useMemo)((() => function(kk) {
+             if (!kk) return [];
+             const ek = kk.toLowerCase(),
+ ... (190 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L97-L103` → after: `L279-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L279-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/299.js#L279-L412) · [Before (L97-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/299.js#L97-L103)

```diff
-         } else {
-           if (FQ._uploadImageToTexture(uQ, QQ, oQ, DQ), kQ) {
-             const wQ = vQ[DQ];
-             wQ && FQ._uploadImageToTexture(wQ._texture, QQ, oQ, 0)
-           }
-           HQ()
-         }
+         }), [Vk, Me]);
+         const Ke = Object.values(Lk).find((kk => (null === kk || void 0 === kk ? void 0 : kk.pageStep) === Tk));
+         return (0, nk.jsx)(yk.j, {
+           tutorial: "docsOverview",
+           step: null !== (Ck = null === Ke || void 0 === Ke ? void 0 : Ke.pageStep) && void 0 !== Ck ? Ck : "docsPanel",
+           text: Jk(null !== (Ak = null === Ke || void 0 === Ke ? void 0 : Ke.pageText) && void 0 !== Ak ? Ak : "codeEditor:tutorialDocsPanel"),
+           enabled: dk,
+           placement: "left",
+           onPrevious: Ke ? void 0 : sk,
+           children: (0, nk.jsxs)("div", {
+             className: "DocsPanel",
+             ref: uk,
+             children: [(0, nk.jsxs)("div", {
+               className: "DocsSidebar",
+               style: {
+                 width: tk,
+ ... (118 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/300.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/300.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008)

#### 1. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/300.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/300.js#L4-L6)

```diff
-   41175: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       _IESTextureLoader: () => kQ
+   41055: (kk, ek, ik) => {
+     ik.d(ek, {
+       ensureLocalBloxdTypes: () => lk
```

#### 2. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L8` → after: `L8-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/300.js#L8-L17) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/300.js#L8)

```diff
-     var LQ = wQ(36729);
+     var Dk = ik(4707),
+       fk = ik(40950),
+       Sk = ik(40945),
+       bk = ik(36446),
+       rk = ik(36454),
+       Pk = ik(36475);
+     const mk = JSON.stringify({
+       name: "@bloxd",
+       types: "index.d.ts"
+     }, null, "\t") + "\n";
```

#### 3. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L11` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/300.js#L20) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/300.js#L11)

```diff
-       return QQ.split(" ").filter((QQ => "" !== QQ)).map((QQ => parseFloat(QQ)))
+       return kk.replace(/^\//, "")
```

#### 4. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L14-L17` → after: `L23-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L23-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/300.js#L23-L66) · [Before (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/300.js#L14-L17)

```diff
-     function oQ(QQ, FQ, wQ) {
-       for (; wQ.length !== FQ;) {
-         const FQ = qQ(QQ.lines[QQ.index++]);
-         wQ.push(...FQ)
+     function Kk(kk) {
+       return Mk((0, rk.s)(kk.name, "")).replace(/\/$/, "")
+     }
+ 
+     function xk(kk) {
+       return kk.typesVfsPath.slice(kk.typesVfsPath.lastIndexOf("/") + 1)
+     }
+ 
+     function nk(kk) {
+       return JSON.stringify({
+         name: kk.specifier,
+         types: xk(kk)
+       }, null, "\t") + "\n"
+     }
+     async function Uk(kk) {
+       let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
+ ... (28 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L21-L44` → after: `L70-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L70-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/300.js#L70-L94) · [Before (L21-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/300.js#L21-L44)

```diff
-     function DQ(QQ, FQ, wQ) {
-       let qQ = 0,
-         oQ = 0,
-         DQ = 0,
-         kQ = 0,
-         vQ = 0,
-         mQ = 0;
-       for (let LQ = 0; LQ < QQ.numberOfHorizontalAngles - 1; LQ++)
-         if (wQ < QQ.horizontalAngles[LQ + 1] || LQ === QQ.numberOfHorizontalAngles - 2) {
-           oQ = LQ, DQ = QQ.horizontalAngles[LQ], kQ = QQ.horizontalAngles[LQ + 1];
-           break
-         } for (let LQ = 0; LQ < QQ.numberOfVerticalAngles - 1; LQ++)
-         if (FQ < QQ.verticalAngles[LQ + 1] || LQ === QQ.numberOfVerticalAngles - 2) {
-           qQ = LQ, vQ = QQ.verticalAngles[LQ], mQ = QQ.verticalAngles[LQ + 1];
-           break
-         } const uQ = kQ - DQ,
- ... (8 more removed lines; see GitHub link above)
+     function wk(kk) {
+       const ek = {
+         "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
+       };
+       for (const Dk of Object.values(bk.g)) ek[Dk.specifier] = [`.${Dk.typesVfsPath}`];
+       const ik = [];
+       for (const Dk of kk)
+         for (const kk of Object.keys(Dk.files)) ik.push(Mk((0, rk.s)(Dk.name, kk)));
+       return JSON.stringify({
+         compilerOptions: {
+           allowJs: !0,
+           checkJs: !1,
+           strict: !1,
+           module: "ESNext",
+           moduleResolution: "bundler",
+           target: "ES2015",
+ ... (9 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L46-L100` → after: `L96-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L96-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/300.js#L96-L107) · [Before (L46-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/300.js#L46-L100)

```diff
-     class kQ {
-       constructor() {
-         this.supportCascades = !1
-       }
-       loadCubeData() {
-         throw ".ies not supported in Cube."
-       }
-       loadData(QQ, FQ, wQ) {
-         const LQ = function(QQ) {
-           const FQ = {
-               lines: new TextDecoder("utf-8").decode(QQ).split("\n"),
-               index: 0
-             },
-             wQ = {
-               version: FQ.lines[0],
-               candelaValues: [],
- ... (39 more removed lines; see GitHub link above)
+     async function lk(kk) {
+       let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
+       const ik = new Set(ek.map((kk => kk.name))),
+         xk = Object.values(bk.g).flatMap((ek => {
+           const Dk = Mk(ek.typesVfsPath),
+             fk = `${Kk(ek)}/package.json`;
+           return [...ik.has(ek.name) ? Object.entries(ek.files).map((ik => {
+             let [Dk, fk] = ik;
+             return (0, Pk.J)(kk, Mk((0, rk.s)(ek.name, Dk)), fk)
+           })) : [], (0, Pk.J)(kk, Dk, ek.types), (0, Pk.J)(kk, fk, nk(ek))]
+         }));
+       await Promise.all([(0, Pk.J)(kk, "node_modules/@bloxd/index.d.ts", Dk.default), (0, Pk.J)(kk, "node_modules/@bloxd/globals.d.ts", Sk.e), (0, Pk.J)(kk, "node_modules/@bloxd/lib.d.ts", fk.d), (0, Pk.J)(kk, "node_modules/@bloxd/package.json", mk), (0, Pk.J)(kk, "tsconfig.json" … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/301.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/301.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad)

#### 1. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/301.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/301.js#L4)

```diff
-   41191: (QQ, FQ, wQ) => {
+   41105: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/301.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/301.js#L6)

```diff
-       _BasisTextureLoader: () => MQ
+       installImageBitmapTextureLoader: () => mk
```

#### 3. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8-L11` → after: `L8-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/301.js#L8-L42) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/301.js#L8-L11)

```diff
-     var LQ, qQ = wQ(39505),
-       oQ = wQ(38203),
-       DQ = wQ(39897),
-       kQ = wQ(39226);
+     var Dk = ik(39445),
+       fk = ik(41109),
+       Sk = ik(3177);
+ 
+     function bk(kk, ek) {
+       if ("string" === typeof kk) {
+         const ik = (0, Sk.c)(kk);
+         return ik ? new Blob([(0, Sk.b)(ik.base64)], {
+           type: ik.mimeType || ek
+         }) : null
+       }
+       return kk instanceof Blob ? kk : new Blob([kk], {
+         type: ek
+       })
+     }
+     const rk = function(kk, ek, ik, Dk) {
+ ... (19 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L14-L284` → after: `L45-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L45-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/301.js#L45-L63) · [Before (L14-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/301.js#L14-L284)

```diff
-       const QQ = 0,
-         FQ = 1,
-         wQ = 2,
-         LQ = 3,
-         qQ = 6,
-         oQ = 8,
-         DQ = 9,
-         kQ = 10,
-         vQ = 14;
-       let mQ = null;
- 
-       function uQ(QQ, FQ, wQ, LQ, qQ) {
-         const oQ = QQ.getImageTranscodedSizeInBytes(FQ, wQ, LQ);
-         let DQ = new Uint8Array(oQ);
-         if (!QQ.transcodeImage(DQ, FQ, wQ, LQ, 1, 0)) return null;
-         if (qQ) {
- ... (255 more removed lines; see GitHub link above)
+       "idle" === Pk && "function" === typeof createImageBitmap && (Pk = "pending", async function() {
+         const kk = document.createElement("canvas");
+         kk.width = 1, kk.height = 2;
+         const ek = kk.getContext("2d");
+         if (!ek) throw new Error("2d context unavailable");
+         ek.fillStyle = "#f00", ek.fillRect(0, 0, 1, 1), ek.fillStyle = "#0f0", ek.fillRect(0, 1, 1, 1);
+         const ik = bk(kk.toDataURL(), "");
+         if (!ik) throw new Error("toDataURL did not produce a base64 data URL");
+         const Dk = await createImageBitmap(ik, {
+           premultiplyAlpha: "none",
+           colorSpaceConversion: "none",
+           imageOrientation: "flipY"
+         });
+         ek.drawImage(Dk, 0, 0);
+         const fk = ek.getImageData(0, 0, 1, 1).data;
+         return fk[1] > fk[0]
+ ... (3 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/302.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/302.js` (119 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a)

#### 1. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L4)

```diff
-   41218: (QQ, FQ, wQ) => {
+   41186: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L6)

```diff
-       e: () => eQ
+       c: () => Sk
```

#### 3. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L8-L19` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L8-L9) · [Before (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L8-L19)

```diff
-     var LQ = wQ(36722),
-       qQ = wQ(36696),
-       oQ = wQ(39897),
-       DQ = wQ(39566),
-       kQ = wQ(39333),
-       vQ = wQ(38203),
-       mQ = wQ(39550),
-       uQ = wQ(39574),
-       HQ = wQ(36709),
-       bQ = wQ(39289),
-       YQ = wQ(39518),
-       xQ = wQ(39623);
+     var Dk = ik(39672),
+       fk = ik(41191);
```

#### 4. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L21-L25` → after: `L11-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L11-L13) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L21-L25)

```diff
-       get renderList() {
-         return this._renderList
-       }
-       set renderList(QQ) {
-         this._renderList !== QQ && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), QQ && (this._unObserveRenderList = (0, HQ.h)(QQ, this._renderListHasChanged)), this._renderList = QQ)
+       constructor(kk, ek) {
+         let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
+         this.maxDepth = ik, this.bDk = [], this._maxBlockCapacity = ek || 64, this._selectionContent = new Dk.e(1024), this._creationFunc = kk
```

#### 5. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L27-L28` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L15-L16) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L27-L28)

```diff
-       get disableImageProcessing() {
-         return this._disableImageProcessing
+       update(kk, ek, ik) {
+         fk.c._CreateBlocks(kk, ek, ik, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
```

#### 6. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L30-L31` → after: `L18-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L18-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L18-L21) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L30-L31)

```diff
-       set disableImageProcessing(QQ) {
-         QQ !== this._disableImageProcessing && (this._disableImageProcessing = QQ, this._scene.markAllMaterialsAsDirty(64))
+       Zik(kk) {
+         for (let ek = 0; ek < this.blocks.length; ek++) {
+           this.blocks[ek].addEntry(kk)
+         }
```

#### 7. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L33-L34` → after: `L23-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L23-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L23-L26) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L33-L34)

```diff
-       get disableDepthPrePass() {
-         return this._disableDepthPrePass
+       Tu(kk) {
+         for (let ek = 0; ek < this.blocks.length; ek++) {
+           this.blocks[ek].removeEntry(kk)
+         }
```

#### 8. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L36-L37` → after: `L28-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L28-L33) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L36-L37)

```diff
-       set disableDepthPrePass(QQ) {
-         this._disableDepthPrePass = QQ, this._renderingManager.disableDepthPrePass = QQ
+       select(kk, ek) {
+         this._selectionContent.reset();
+         for (let ik = 0; ik < this.blocks.length; ik++) {
+           this.blocks[ik].select(kk, this._selectionContent, ek)
+         }
+         return ek ? this._selectionContent.concat(this.bDk) : this._selectionContent.concatWithNoDuplicate(this.bDk), this._selectionContent
```

#### 9. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L39-L40` → after: `L35-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L35-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L35-L40) · [Before (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L39-L40)

```diff
-       get name() {
-         return this._name
+       intersects(kk, ek, ik) {
+         this._selectionContent.reset();
+         for (let Dk = 0; Dk < this.blocks.length; Dk++) {
+           this.blocks[Dk].intersects(kk, ek, this._selectionContent, ik)
+         }
+         return ik ? this._selectionContent.concat(this.bDk) : this._selectionContent.concatWithNoDuplicate(this.bDk), this._selectionContent
```

#### 10. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L42-L50` → after: `L42-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L42-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L42-L45) · [Before (L42-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L42-L50)

```diff
-       set name(QQ) {
-         if (this._name !== QQ) {
-           if (this._name = QQ, this._sceneUBOs)
-             for (let QQ = 0; QQ < this._sceneUBOs.length; ++QQ) this._sceneUBOs[QQ].name = `Scene ubo #${QQ} for ${this.name}`;
-           if (this._scene)
-             for (let QQ = 0; QQ < this._renderPassIds.length; ++QQ) {
-               const FQ = this._renderPassIds[QQ];
-               this._engine._renderPassNames[FQ] = `${this._name}#${QQ}`
-             }
+       intersectsRay(kk) {
+         this._selectionContent.reset();
+         for (let ek = 0; ek < this.blocks.length; ek++) {
+           this.blocks[ek].intersectsRay(kk, this._selectionContent)
```

#### 11. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L53-L54` → after: `L49-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L49-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L49-L65) · [Before (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L53-L54)

```diff
-       get renderPassIds() {
-         return this._renderPassIds
+     }
+     Sk.CreationFuncForMeshes = (kk, ek) => {
+       const ik = kk.hq();
+       !kk.isBlocked && ik.boundingBox.intersectsMinMax(ek.Jik, ek.Rik) && ek.entries.push(kk)
+     }, Sk.CreationFuncForSubMeshes = (kk, ek) => {
+       kk.hq().boundingBox.intersectsMinMax(ek.Jik, ek.Rik) && ek.entries.push(kk)
+     }
+   },
+   41191: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => Sk
+     });
+     var Dk = ik(36698),
+       fk = ik(39894);
+     class Sk {
+       constructor(kk, ek, ik, Dk, fk, Sk) {
+ ... (1 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L56-L57` → after: `L67-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L67-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L67-L68) · [Before (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L56-L57)

```diff
-       get currentRefreshId() {
-         return this._currentRefreshId
+       get vK() {
+         return this._capacity
```

#### 13. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L59-L60` → after: `L70-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L70-L71) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L59-L60)

```diff
-       getActiveMeshes() {
-         return this._activeMeshes
+       get Jik() {
+         return this._minPoint
```

#### 14. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L62-L78` → after: `L73-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L73-L74) · [Before (L62-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L62-L78)

```diff
-       setMaterialForRendering(QQ, FQ) {
-         let wQ;
-         wQ = Array.isArray(QQ) ? QQ : [QQ];
-         for (let LQ = 0; LQ < wQ.length; ++LQ)
-           for (let QQ = 0; QQ < this.options.numPasses; ++QQ) {
-             let qQ = wQ[LQ];
-             wQ[LQ].lN && (qQ = wQ[LQ].cqQ), qQ.setMaterialForRenderPass(this._renderPassIds[QQ], void 0 !== FQ ? Array.isArray(FQ) ? FQ[QQ] : FQ : void 0)
-           }
-       }
-       _freezeActiveMeshes(QQ) {
-         this._freezeActiveMeshesCancel = (0, bQ.e)((() => this._checkReadiness()), (() => {
-           if (this._freezeActiveMeshesCancel = null, QQ)
-             for (let QQ = 0; QQ < this._activeMeshes.length; QQ++) this._activeMeshes.data[QQ]._freeze();
-           this._prepareRenderingManager(0, !0), this._isFrozen = !0
-         }), ((QQ, FQ) => {
-           this._freezeActiveMeshesCancel = null, FQ ? (vQ.c.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), QQ && vQ.c.Error(QQ)) : (vQ.c.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), QQ && (vQ.c.E … [truncated]
- ... (1 more removed lines; see GitHub link above)
+       get Rik() {
+         return this._maxPoint
```

#### 15. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L80-L83` → after: `L76-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L76-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L76-L80) · [Before (L80-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L80-L83)

```diff
-       _unfreezeActiveMeshes() {
-         this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
-         for (let QQ = 0; QQ < this._activeMeshes.length; QQ++) this._activeMeshes.data[QQ]._unFreeze();
-         this._isFrozen = !1
+       addEntry(kk) {
+         if (this.blocks)
+           for (let ek = 0; ek < this.blocks.length; ek++) {
+             this.blocks[ek].addEntry(kk)
+           } else this._creationFunc(kk, this), this.entries.length > this.vK && this._depth < this._maxDepth && this.createInnerBlocks()
```

#### 16. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L85-L158` → after: `L82-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L82-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L82-L85) · [Before (L85-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L85-L158)

```diff
-       constructor(QQ, FQ, wQ) {
-         this._unObserveRenderList = null, this._renderListHasChanged = (QQ, FQ) => {
-           const wQ = this._renderList ? this._renderList.length : 0;
-           if (0 === FQ && wQ > 0 || 0 === wQ)
-             for (const LQ of this._scene.meshes) LQ._markSubMeshesAsLightDirty()
-         }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticl … [truncated]
-           numPasses: 1,
-           doNotChangeAspectRatio: !0,
-           enableClusteredLights: !1,
-           ...wQ
-         }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new uQ.e(FQ), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
-           for (const QQ of this._scene.lights) QQ.getTypeID() === xQ.c.LIGHTTYPEID_CLUSTERED_CONTAINER && QQ.isSupported && QQ._updateBatches(this.activeCamera).render()
-         })), this._scene.addObjectRenderer(this)
-       }
-       _releaseRenderPassId() {
-         for (let QQ = 0; QQ < this.options.numPasses; ++QQ) this._engine.releaseRenderPassId(this._renderPassIds[QQ]);
- ... (58 more removed lines; see GitHub link above)
+       removeEntry(kk) {
+         if (this.blocks) {
+           for (let ek = 0; ek < this.blocks.length; ek++) {
+             this.blocks[ek].removeEntry(kk)
```

#### 17. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L161` → after: `L89-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L89-L90) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L161)

```diff
-         this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
+         const ek = this.entries.indexOf(kk);
+         ek > -1 && this.entries.splice(ek, 1)
```

#### 18. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L163-L169` → after: `L92-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L92-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L92-L96) · [Before (L163-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L163-L169)

```diff
-       initRender(QQ, FQ) {
-         const wQ = this.activeCamera ?? this._scene.activeCamera;
-         this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers … [truncated]
-       }
-       finishRender() {
-         const QQ = this._scene;
-         this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (QQ.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), QQ._activeCamera = this._currentSceneCamera, this._currentSceneCamera  … [truncated]
+       addEntries(kk) {
+         for (let ek = 0; ek < kk.length; ek++) {
+           const ik = kk[ek];
+           this.addEntry(ik)
+         }
```

#### 19. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L171-L208` → after: `L98-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L98-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L98-L102) · [Before (L171-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L171-L208)

```diff
-       render() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         const wQ = this._engine.currentRenderPassId;
-         this._engine.currentRenderPassId = this._renderPassIds[QQ], this.onBeforeRenderObservable.notifyObservers(QQ);
-         if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(QQ);
-         else {
-           const FQ = this._prepareRenderingManager(QQ),
-             wQ = this._scene.getOutlineRenderer?.(),
-             LQ = wQ?.enabled;
-           wQ && (wQ.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(QQ), this._renderingManager.render(this.customRenderFunction, FQ, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshe … [truncated]
-         }
-         FQ || this.onAfterRenderObservable.notifyObservers(QQ), this._engine.currentRenderPassId = wQ
-       }
-       _checkReadiness() {
-         const QQ = this._scene,
- ... (22 more removed lines; see GitHub link above)
+       select(kk, ek, ik) {
+         if (fk.e.IsInFrustum(this.rDk, kk)) {
+           if (this.blocks) {
+             for (let Dk = 0; Dk < this.blocks.length; Dk++) {
+               this.blocks[Dk].select(kk, ek, ik)
```

#### 20. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L210-L225` → after: `L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L104) · [Before (L210-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L210-L225)

```diff
-             let LQ = FQ._edgesRenderer,
-               qQ = FQ.hasThinInstances;
-             if (FQ.lN) {
-               const QQ = FQ.cqQ;
-               QQ.edgesShareWithInstances && QQ._edgesRenderer?.isEnabled && (LQ = QQ._edgesRenderer, qQ = !0)
-             } else FQ.pqQ && FQ.edgesShareWithInstances && (qQ = !0);
-             !this.customRenderFunction && this.renderOpaqueMeshes && LQ?.isEnabled && (LQ.isReady(qQ) || (wQ = !1))
-           }
-           if (this.renderParticles && QQ.particlesEnabled) {
-             const FQ = this.particleSystemList || QQ.fC;
-             for (const QQ of FQ) QQ.isReady() || (wQ = !1)
-           }
-           if (this.renderSprites && QQ.spritesEnabled) {
-             const FQ = this.spriteManagerList || QQ.spriteManagers;
-             if (FQ)
-               for (const LQ of FQ) QQ.activeCamera && 0 === (LQ.layerMask & QQ.activeCamera.layerMask) || LQ.isReady && !LQ.isReady() && (wQ = !1)
+             return
```

#### 21. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L227` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L106) · [Before (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L227)

```diff
-           this.onAfterRenderObservable.notifyObservers(qQ), LQ > 1 && (QQ.incrementRenderId(), QQ.resetCachedMaterial())
+           ik ? ek.concat(this.entries) : ek.concatWithNoDuplicate(this.entries)
```

#### 22. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L231-L251` → after: `L109-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L109-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L109-L113) · [Before (L231-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L231-L251)

```diff
-       _prepareRenderingManager() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         const wQ = this._scene;
-         let LQ, qQ, oQ = null;
-         const DQ = this.renderList ? this.renderList : wQ.frameGraph ? wQ.meshes : wQ.getActiveMeshes().data,
-           kQ = this.renderList || wQ.frameGraph ? DQ.length : wQ.getActiveMeshes().length;
-         if (this.getCustomRenderList && (oQ = this.getCustomRenderList(QQ, DQ, kQ)), oQ) LQ = oQ.length, qQ = this.forceLayerMaskCheck;
-         else {
-           if (this._defaultRenderListPrepared && !FQ && !this._engine.isWebGPU) return DQ;
-           this._defaultRenderListPrepared = !0, oQ = DQ, LQ = kQ, qQ = !this.renderList || this.forceLayerMaskCheck
-         }
-         const vQ = wQ.activeCamera,
-           mQ = this.cameraForLOD ?? vQ,
-           uQ = wQ.getBoundingBoxRenderer?.();
-         if (wQ._activeMeshesFrozen && this._isFrozen) {
- ... (5 more removed lines; see GitHub link above)
+       intersects(kk, ek, ik, Dk) {
+         if (fk.e.IntersectsSphere(this._minPoint, this._maxPoint, kk, ek)) {
+           if (this.blocks) {
+             for (let fk = 0; fk < this.blocks.length; fk++) {
+               this.blocks[fk].intersects(kk, ek, ik, Dk)
```

#### 23. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L254` → after: `L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L117) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L254)

```diff
-           return oQ
+           Dk ? ik.concat(this.entries) : ik.concatWithNoDuplicate(this.entries)
```

#### 24. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L256-L286` → after: `L119-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L119-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L119-L124) · [Before (L256-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L256-L286)

```diff
-         if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), uQ && uQ.reset(), this.renderMeshes) {
-           const QQ = wQ.getRenderId(),
-             FQ = wQ.getFrameId();
-           for (let DQ = 0; DQ < LQ; DQ++) {
-             const LQ = oQ[DQ];
-             if (LQ && !LQ.isBlocked) {
-               if (this.customIsReadyFunction) {
-                 if (!this.customIsReadyFunction(LQ, this.refreshRate, !1)) {
-                   this.resetRefreshCounter();
-                   continue
-                 }
-               } else if (!LQ.isReady(0 === this.refreshRate)) {
-                 this.resetRefreshCounter();
-                 continue
-               }
-               let oQ, DQ;
- ... (15 more removed lines; see GitHub link above)
+       }
+       intersectsRay(kk, ek) {
+         if (kk.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
+           if (this.blocks) {
+             for (let ik = 0; ik < this.blocks.length; ik++) {
+               this.blocks[ik].intersectsRay(kk, ek)
```

#### 25. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L336-L340` → after: `L131-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L131-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L131-L144) · [Before (L336-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L336-L340)

```diff
-       _rebuild() {
-         this.refreshRate === AQ.REFRESHRATE_RENDER_ONCE && (this.refreshRate = AQ.REFRESHRATE_RENDER_ONCE)
-       }
-       freeRenderingGroups() {
-         this._renderingManager && this._renderingManager.freeRenderingGroups()
+       createInnerBlocks() {
+         Sk._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
+       }
+       static _CreateBlocks(kk, ek, ik, fk, bk, rk, Pk, mk) {
+         Pk.blocks = new Array;
+         const Mk = new Dk.o((ek.x - kk.x) / 2, (ek.y - kk.y) / 2, (ek.z - kk.z) / 2);
+         for (let Dk = 0; Dk < 2; Dk++)
+           for (let ek = 0; ek < 2; ek++)
+             for (let Kk = 0; Kk < 2; Kk++) {
+               const xk = kk.add(Mk.multiplyByFloats(Dk, ek, Kk)),
+                 nk = kk.add(Mk.multiplyByFloats(Dk + 1, ek + 1, Kk + 1)),
+                 Uk = new Sk(xk, nk, fk, bk + 1, rk, mk);
+               Uk.addEntries(ik), Pk.blocks.push(Uk)
+             }
```

#### 26. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L343-L488` → after: `L147-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L147-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L147-L161) · [Before (L343-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L343-L488)

```diff
-     AQ.REFRESHRATE_RENDER_ONCE = 0, AQ.REFRESHRATE_RENDER_ONEVERYFRAME = 1, AQ.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
-     var tQ = wQ(39277);
-     class eQ extends oQ.e {
-       get renderListPredicate() {
-         return this._objectRenderer.renderListPredicate
-       }
-       set renderListPredicate(QQ) {
-         this._objectRenderer.renderListPredicate = QQ
-       }
-       get renderList() {
-         return this._objectRenderer.renderList
-       }
-       set renderList(QQ) {
-         this._objectRenderer.renderList = QQ
-       }
-       get particleSystemList() {
- ... (130 more removed lines; see GitHub link above)
+   },
+   41193: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => Mk
+     });
+     var Dk = ik(39653),
+       fk = ik(36698),
+       Sk = ik(40016),
+       bk = ik(41129),
+       rk = ik(39736),
+       Pk = ik(36722),
+       mk = ik(41186);
+     class Mk {
+       constructor(kk) {
+         this.name = rk.b.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new bk.w(fk.o.Zero(), new fk.o(1, 1, 1)), (kk = kk || Pk.e.LastCreatedScene) && (this.bw = kk, this.bw.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.bw.getActiveSubMeshCandidat … [truncated]
```

#### 27. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L490-L491` → after: `L163-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L163-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L163-L172) · [Before (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L490-L491)

```diff
-       get boundingBoxSize() {
-         return this._boundingBoxSize
+       register() {
+         this.bw.onMeshRemovedObservable.add((kk => {
+           const ek = this.bw.selectionOctree;
+           if (void 0 !== ek && null !== ek) {
+             const ik = ek.bDk.indexOf(kk); - 1 !== ik && ek.bDk.splice(ik, 1)
+           }
+         })), this.bw.onMeshImportedObservable.add((kk => {
+           const ek = this.bw.selectionOctree;
+           void 0 !== ek && null !== ek && ek.Zik(kk)
+         }))
```

#### 28. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L493-L494` → after: `L174-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L174-L175) · [Before (L493-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L493-L494)

```diff
-       get depthStencilTexture() {
-         return this._renderTarget?._depthStencilTexture ?? null
+       getActiveMeshCandidates() {
+         return this.bw.nDk?.select(this.bw.frustumPlanes) || this.bw._getDefaultMeshCandidates()
```

#### 29. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L496-L583` → after: `L177-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L177-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L177-L179) · [Before (L496-L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L496-L583)

```diff
-       constructor(QQ, FQ, wQ) {
-         let DQ, kQ, mQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-           uQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
-           HQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
-           bQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-           YQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : oQ.e.TRILINEAR_SAMPLINGMODE,
-           xQ = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
-           tQ = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
-           eQ = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
-           MQ = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
-           GQ = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
-           pQ = arguments.length > 13 ? arguments[13] : void 0,
-           cQ = arguments.length > 14 ? arguments[14] : void 0,
-           CQ = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
-           SQ = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
-           iQ = !0,
- ... (72 more removed lines; see GitHub link above)
+       getActiveSubMeshCandidates(kk) {
+         if (kk._submeshesOctree && kk.useOctreeForRenderingSelection) {
+           return kk._submeshesOctree.select(this.bw.frustumPlanes)
```

#### 30. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L585` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L181) · [Before (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L585)

```diff
-         this._postProcesses.push(QQ), this._postProcesses[0].autoClear = !1
+         return this.bw._getDefaultSubMeshCandidates(kk)
```

#### 31. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L587-L592` → after: `L183-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L183-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L183-L186) · [Before (L587-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L587-L592)

```diff
-       clearPostProcesses() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         if (this._postProcesses) {
-           if (QQ)
-             for (const QQ of this._postProcesses) QQ.dispose();
-           this._postProcesses = []
+       getIntersectingSubMeshCandidates(kk, ek) {
+         if (kk._submeshesOctree && kk.useOctreeForPicking) {
+           bk.w.TransformToRef(ek, kk.getWorldMatrix(), this._tempRay);
+           return kk._submeshesOctree.intersectsRay(this._tempRay)
```

#### 32. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L595-L741` → after: `L190-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L190-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L190-L195) · [Before (L595-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L595-L741)

```diff
-       removePostProcess(QQ) {
-         if (!this._postProcesses) return;
-         const FQ = this._postProcesses.indexOf(QQ); - 1 !== FQ && (this._postProcesses.splice(FQ, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
-       }
-       resetRefreshCounter() {
-         this._objectRenderer.resetRefreshCounter()
-       }
-       get refreshRate() {
-         return this._objectRenderer.refreshRate
-       }
-       set refreshRate(QQ) {
-         this._objectRenderer.refreshRate = QQ
-       }
-       _shouldRender() {
-         return this._objectRenderer.shouldRender()
-       }
- ... (131 more removed lines; see GitHub link above)
+       getCollidingSubMeshCandidates(kk, ek) {
+         if (kk._submeshesOctree && kk.useOctreeForCollisions) {
+           const ik = ek._velocityWorldLength + Math.max(ek._radius.x, ek._radius.y, ek._radius.z);
+           return kk._submeshesOctree.intersects(ek._basePointWorld, ik)
+         }
+         return this.bw._getDefaultSubMeshCandidates(kk)
```

#### 33. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L744-L745` → after: `L200-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L200-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L200-L222) · [Before (L744-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L744-L745)

```diff
-     eQ.REFRESHRATE_RENDER_ONCE = AQ.REFRESHRATE_RENDER_ONCE, eQ.REFRESHRATE_RENDER_ONEVERYFRAME = AQ.REFRESHRATE_RENDER_ONEVERYFRAME, eQ.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = AQ.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
-     Object.getOwnPropertyDescriptor(eQ.prototype, "noPrePassRenderer") || Object.defineProperty(eQ.prototype, "noPrePassRenderer", (0, tQ.e)("RenderTargetTexture", "noPrePassRenderer"))
+     let Kk = !1;
+     Kk || (Kk = !0, Dk.f.prototype.createOrUpdateSelectionOctree = function() {
+       let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
+         ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
+         ik = this._getComponent(rk.b.NAME_OCTREE);
+       ik || (ik = new Mk(this), this.qik(ik)), this.nDk || (this.nDk = new mk.c(mk.c.CreationFuncForMeshes, kk, ek));
+       const Dk = this.getWorldExtends();
+       return this.nDk.update(Dk.min, Dk.max, this.meshes), this.nDk
+     }, Object.defineProperty(Dk.f.prototype, "selectionOctree", {
+       get: function() {
+         return this.nDk
+       },
+       enumerable: !0,
+       configurable: !0
+     }), Sk.c.prototype.createOrUpdateSubmeshesOctree = function() {
+       let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
+ ... (7 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L747` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L224) · [Before (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L747)

```diff
-   41202: (QQ, FQ, wQ) => {
+   41129: (kk, ek, ik) => {
```

#### 35. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L750` → after: `L227-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L227-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L227-L235) · [Before (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L750)

```diff
-       f: () => uQ
+       c: () => Hk,
+       f: () => Uk,
+       i: () => nk,
+       l: () => Vk,
+       m: () => dk,
+       p: () => Ak,
+       q: () => sk,
+       u: () => jk,
+       w: () => Kk
```

#### 36. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L752-L753` → after: `L237-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L237-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L237-L241) · [Before (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L752-L753)

```diff
-     var LQ = wQ(39561),
-       qQ = wQ(37631),
+     var Dk = ik(36703),
+       fk = ik(36698),
+       Sk = ik(36707),
+       bk = ik(39879),
+       rk = ik(39701),
```

#### 37. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L755-L756` → after: `L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L243) · [Before (L755-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L755-L756)

```diff
-       DQ = wQ(39243),
-       kQ = wQ(39748);
+       mk = ik(39767);
```

#### 38. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L758-L759` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L245) · [Before (L758-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L758-L759)

```diff
-       positions: [1, 1, -1, 1, -1, -1, 1, -1],
-       indices: [0, 1, 2, 0, 2, 3]
+       internalPickerForMesh: void 0
```

#### 39. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L762-L882` → after: `L248-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L248-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L248-L251) · [Before (L762-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L762-L882)

```diff
-       constructor(QQ) {
-         let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vQ;
-         this._fullscreenViewport = new qQ.c(0, 0, 1, 1);
-         const wQ = FQ.positions ?? vQ.positions,
-           oQ = FQ.indices ?? vQ.indices;
-         this.engine = QQ, this._vertexBuffers = {
-           [LQ.h.PositionKind]: new LQ.h(QQ, wQ, LQ.h.PositionKind, !1, !1, 2)
-         }, this._indexBuffer = QQ.createIndexBuffer(oQ), this._indexBufferLength = oQ.length, this._onContextRestoredObserver = QQ.onContextRestoredObservable.add((() => {
-           this._indexBuffer = QQ.createIndexBuffer(oQ);
-           for (const QQ in this._vertexBuffers) {
-             this._vertexBuffers[QQ]._rebuild()
-           }
-         }))
-       }
-       setViewport() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
- ... (105 more removed lines; see GitHub link above)
+       constructor(kk, ek) {
+         let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
+           fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Dk.d;
+         this.origin = kk, this.direction = ek, this.length = ik, this.epsilon = fk
```

#### 40. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L884-L903` → after: `L253-L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L253-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L253-L309) · [Before (L884-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L884-L903)

```diff
-       updateEffect() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-           LQ = arguments.length > 3 ? arguments[3] : void 0,
-           qQ = arguments.length > 4 ? arguments[4] : void 0,
-           oQ = arguments.length > 5 ? arguments[5] : void 0,
-           kQ = arguments.length > 6 ? arguments[6] : void 0,
-           vQ = arguments.length > 7 ? arguments[7] : void 0;
-         const mQ = uQ._GetShaderCodeProcessing(this.name);
-         if (mQ?.defineCustomBindings) {
-           const LQ = FQ?.slice() ?? [];
-           LQ.push(...this.options.uniforms);
-           const qQ = wQ?.slice() ?? [];
-           qQ.push(...this.options.samplers), QQ = mQ.defineCustomBindings(this.name, QQ, LQ, qQ), FQ = LQ, wQ = qQ
-         }
- ... (4 more removed lines; see GitHub link above)
+       clone() {
+         return new Kk(this.origin.clone(), this.direction.clone(), this.length)
+       }
+       intersectsBoxMinMax(kk, ek) {
+         let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         const Dk = Kk._TmpVector3[0].Z6(kk.x - ik, kk.y - ik, kk.z - ik),
+           fk = Kk._TmpVector3[1].Z6(ek.x + ik, ek.y + ik, ek.z + ik);
+         let Sk, bk, rk, Pk, mk = 0,
+           Mk = Number.MAX_VALUE;
+         if (Math.abs(this.direction.x) < 1e-7) {
+           if (this.origin.x < Dk.x || this.origin.x > fk.x) return !1
+         } else if (Sk = 1 / this.direction.x, bk = (Dk.x - this.origin.x) * Sk, rk = (fk.x - this.origin.x) * Sk, rk === -1 / 0 && (rk = 1 / 0), bk > rk && (Pk = bk, bk = rk, rk = Pk), mk = Math.max(bk, mk), Mk = Math.min(rk, Mk), mk > Mk) return !1;
+         if (Math.abs(this.direction.y) < 1e-7) {
+           if (this.origin.y < Dk.y || this.origin.y > fk.y) return !1
+         } else if (Sk = 1 / this.direction.y, bk = (Dk.y - this.origin.y) * Sk, rk = (fk.y - this.origin.y) * Sk, rk === -1 / 0 && (rk = 1 / 0), bk > rk && (Pk = bk, bk = rk, rk = Pk), mk = Math.max(bk, mk), Mk = Math.min(rk, Mk), mk > Mk) return !1;
+         if (Math.abs(this.direction.z) < 1e-7) {
+ ... (41 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L905-L931` → after: `L311-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L311-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L311-L316) · [Before (L905-L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L905-L931)

```diff
-         bQ = this.options.extraInitializationsAsync ? async () => {
-           await (HQ?.()), await this.options.extraInitializationsAsync()
-         }: HQ, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
-           vertex: kQ ?? this._shaderPath.vertex,
-           fragment: vQ ?? this._shaderPath.fragment
-         }, {
-           attributes: this.options.attributeNames,
-           uniformsNames: FQ || this.options.uniforms,
-           uniformBuffersNames: this.options.uniformBuffers,
-           samplers: wQ || this.options.samplers,
-           defines: null !== QQ ? QQ : "",
-           fallbacks: null,
-           onCompiled: qQ ?? this.options.onCompiled,
-           onError: oQ ?? null,
-           indexParameters: LQ || this.options.indexParameters,
-           processCodeAfterIncludes: mQ?.processCodeAfterIncludes ? (QQ, FQ) => mQ.processCodeAfterIncludes(this.name, QQ, FQ) : null,
- ... (11 more removed lines; see GitHub link above)
+         const ik = fk.o.Dot(kk.normal, this.direction);
+         if (Math.abs(ik) < 9.99999997475243e-7) return null;
+         {
+           const Dk = fk.o.Dot(kk.normal, this.origin);
+           return ek = (-kk.d - Dk) / ik, ek < 0 ? ek < -9.99999997475243e-7 ? null : 0 : ek
+         }
```

#### 42. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L933-L990` → after: `L318-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L318-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L318-L327) · [Before (L933-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L933-L990)

```diff
-     }
-     uQ.ForceGLSL = !1, uQ._CustomShaderCodeProcessing = {}
-   },
-   41235: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       Dispose: () => MQ,
-       DumpData: () => eQ,
-       DumpDataAsync: () => tQ,
-       DumpFramebuffer: () => AQ,
-       DumpTools: () => GQ,
-       EncodeImageAsync: () => xQ,
-       RegisterDumpTools: () => cQ
-     });
-     var LQ = wQ(39402),
-       qQ = wQ(41202),
-       oQ = wQ(39505),
- ... (42 more removed lines; see GitHub link above)
+       intersectsAxis(kk) {
+         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         switch (kk) {
+           case "y": {
+             const kk = (this.origin.y - ek) / this.direction.y;
+             return kk > 0 ? null : new fk.o(this.origin.x + this.direction.x * -kk, ek, this.origin.z + this.direction.z * -kk)
+           }
+           case "x": {
+             const kk = (this.origin.x - ek) / this.direction.x;
+             return kk > 0 ? null : new fk.o(ek, this.origin.y + this.direction.y * -kk, this.origin.z + this.direction.z * -kk)
```

#### 43. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L993-L1008` → after: `L336-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L336-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L336-L348) · [Before (L993-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L993-L1008)

```diff
-       }()), await HQ
-     }
-     let YQ = (() => {
-       var QQ;
-       let FQ, wQ = [];
-       return QQ = class {
-         static async EncodeImageAsync(QQ, FQ, wQ, LQ, qQ, DQ) {
-           const kQ = await bQ(),
-             vQ = kQ.dumpEngine;
-           vQ.engine.setSize(FQ, wQ, !0);
-           const mQ = vQ.engine.createRawTexture(QQ, FQ, wQ, 5, !1, !qQ, 1);
-           return vQ.renderer.setViewport(), vQ.renderer.applyEffectWrapper(vQ.wrapper), vQ.wrapper.effect._bindTexture("textureSampler", mQ), vQ.renderer.draw(), mQ.dispose(), await new Promise(((QQ, FQ) => {
-             oQ.g.ToBlob(kQ.canvas, (wQ => {
-               wQ ? QQ(wQ) : FQ(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
-             }), LQ, DQ)
-           }))
+       }
+       qDk(kk, ek, ik) {
+         let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+           Sk = arguments.length > 4 ? arguments[4] : void 0,
+           bk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+         const rk = fk.j.Matrix[0];
+         return kk.getWorldMatrix().invertToRef(rk), this._tmpRay ? Kk.TransformToRef(this, rk, this._tmpRay) : this._tmpRay = Kk.Transform(this, rk), kk.intersects(this._tmpRay, ek, ik, Dk, Sk, bk)
+       }
+       intersectsMeshes(kk, ek, ik) {
+         ik ? ik.length = 0 : ik = [];
+         for (let Dk = 0; Dk < kk.length; Dk++) {
+           const fk = this.qDk(kk[Dk], ek);
+           fk.hit && ik.push(fk)
```

#### 44. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1010-L1049` → after: `L350-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L350-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L350-L417) · [Before (L1010-L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1010-L1049)

```diff
-       }, (() => {
-         const qQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         FQ = [uQ.i], (0, LQ.i)(QQ, null, FQ, {
-           kind: "method",
-           name: "EncodeImageAsync",
-           static: !0,
-           private: !1,
-           access: {
-             has: QQ => "EncodeImageAsync" in QQ,
-             get: QQ => QQ.EncodeImageAsync
-           },
-           metadata: qQ
-         }, null, wQ), qQ && Object.defineProperty(QQ, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
- ... (24 more removed lines; see GitHub link above)
+         return ik.sort(this._comparePickingInfo), ik
+       }
+       _comparePickingInfo(kk, ek) {
+         return kk.distance < ek.distance ? -1 : kk.distance > ek.distance ? 1 : 0
+       }
+       intersectionSegment(kk, ek, ik) {
+         const Dk = this.origin,
+           Sk = fk.j.eH[0],
+           bk = fk.j.eH[1],
+           rk = fk.j.eH[2],
+           Pk = fk.j.eH[3];
+         ek.subtractToRef(kk, Sk), this.direction.scaleToRef(Kk._Rayl, rk), Dk.addToRef(rk, bk), kk.subtractToRef(Dk, Pk);
+         const mk = fk.o.Dot(Sk, Sk),
+           Mk = fk.o.Dot(Sk, rk),
+           xk = fk.o.Dot(rk, rk),
+           nk = fk.o.Dot(Sk, Pk),
+ ... (52 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1051` → after: `L419-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L419-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L419-L430) · [Before (L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1051)

```diff
-         wQ = QQ
+         return ik
+       }
+       unprojectRayToRef(kk, ek, ik, Dk, Sk, bk, rk) {
+         const mk = fk.j.Matrix[0];
+         Sk.multiplyToRef(bk, mk), mk.multiplyToRef(rk, mk), mk.invert();
+         const Mk = Pk.e.LastCreatedEngine,
+           Kk = fk.j.eH[0];
+         Kk.x = kk / ik * 2 - 1, Kk.y = -(ek / Dk * 2 - 1), Kk.z = Mk?.Xik ? 1 : Mk?.isNDCHalfZRange ? 0 : -1;
+         const xk = fk.j.eH[1].Z6(Kk.x, Kk.y, 1 - 1e-8),
+           nk = fk.j.eH[2],
+           Uk = fk.j.eH[3];
+         fk.o.TransformCoordinatesToRef(Kk, mk, nk), fk.o.TransformCoordinatesToRef(xk, mk, Uk), this.origin.Fs(nk), Uk.subtractToRef(nk, this.direction), this.direction.normalize()
```

#### 46. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1053-L1056` → after: `L432-L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L432-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L432-L454) · [Before (L1053-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1053-L1056)

```diff
-       const bQ = await YQ.EncodeImageAsync(wQ, QQ, FQ, LQ, kQ, HQ);
-       void 0 !== qQ && oQ.g.DownloadBlob(bQ, qQ), bQ.type !== LQ && vQ.c.Warn(`DumpData: The requested mimeType '${LQ}' is not supported. The result has mimeType '${bQ.type}' instead.`);
-       const xQ = await bQ.arrayBuffer();
-       return uQ ? xQ : `data:${LQ};base64,${(0,mQ.i)(xQ)}`
+     }
+ 
+     function xk(kk, ek, ik, Dk, fk) {
+       let Sk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       const bk = Kk.Zero();
+       return nk(kk, ek, ik, Dk, bk, fk, Sk), bk
+     }
+ 
+     function nk(kk, ek, ik, Dk, Sk, bk) {
+       let rk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         Pk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
+       const mk = kk.JU();
+       if (!bk && !(bk = kk.activeCamera) && !(bk = kk.cameraToUseForPointers)) return kk;
+       const Mk = bk.viewport,
+         Kk = mk.getRenderHeight(),
+         {
+ ... (7 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1060-L1063` → after: `L458-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L458-L459) · [Before (L1060-L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1060-L1063)

```diff
-       let qQ = arguments.length > 5 ? arguments[5] : void 0;
-       void 0 !== qQ || LQ || (qQ = ""), tQ(QQ, FQ, wQ, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", qQ, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.len … [truncated]
-         LQ && LQ(QQ)
-       }))
+       const fk = Kk.Zero();
+       return Hk(kk, ek, ik, fk, Dk), fk
```

#### 48. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1066-L1069` → after: `L462-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L462-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L462-L476) · [Before (L1066-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1066-L1069)

```diff
-     function MQ() {
-       HQ && (HQ?.then((QQ => {
-         QQ.canvas instanceof HTMLCanvasElement && QQ.canvas.remove(), QQ.dumpEngine && (QQ.dumpEngine.engine.dispose(), QQ.dumpEngine.renderer.dispose(), QQ.dumpEngine.wrapper.dispose())
-       })), HQ = null)
+     function Hk(kk, ek, ik, Dk, Sk) {
+       if (!rk.b) return kk;
+       const bk = kk.JU();
+       if (!Sk && !(Sk = kk.activeCamera) && !(Sk = kk.cameraToUseForPointers)) throw new Error("Active camera not set");
+       const Pk = Sk.viewport,
+         mk = bk.getRenderHeight(),
+         {
+           x: Mk,
+           y: Kk,
+           width: xk,
+           height: nk
+         } = Pk.toGlobal(bk.getRenderWidth(), mk),
+         Uk = fk.b.Identity(),
+         Hk = 1 / bk.getHardwareScalingLevel();
+       return ek = ek * Hk - Mk, ik = ik * Hk - (mk - Kk - nk), Dk.update(ek, ik, xk, nk, Uk, Uk, Sk.getProjectionMatrix()), kk
```

#### 49. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1079-L1082` → after: `L479-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L479-L480) · [Before (L1079-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1079-L1082)

```diff
-     function cQ() {
-       if (pQ) return;
-       pQ = !0;
-       oQ.g.DumpData = eQ, oQ.g.DumpDataAsync = tQ, oQ.g.DumpFramebuffer = AQ
+     function wk(kk, ek, ik, Dk, fk, Sk, bk, rk) {
+       return lk(kk, ik, Dk, ek(Dk, ik.enableDistantPicking), fk, Sk, bk, rk)
```

#### 50. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1180-L1202` → after: `L484-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L484-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L484-L485) · [Before (L1180-L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1180-L1202)

```diff
-       const mQ = FQ.Wx();
-       return FQ.isReady = !1, qQ = qQ ?? FQ.samplingMode, LQ = LQ ?? FQ.type, oQ = oQ ?? FQ.format, kQ = kQ ?? FQ.width, vQ = vQ ?? FQ.height, -1 === LQ && (LQ = 0), new Promise((uQ => {
-         const HQ = new DQ.d("postprocess", QQ, null, null, 1, null, qQ, mQ, !1, void 0, LQ, void 0, null, !1, oQ);
-         HQ.externalTextureSamplerBinding = !0;
-         const bQ = mQ.createRenderTargetTexture({
-           width: kQ,
-           height: vQ
-         }, {
-           generateDepthBuffer: !1,
-           generateMipMaps: !1,
-           generateStencilBuffer: !1,
-           samplingMode: qQ,
-           type: LQ,
-           format: oQ
-         });
-         HQ.onEffectCreatedObservable.addOnce((QQ => {
- ... (7 more removed lines; see GitHub link above)
+       const Pk = ek.intersects(Dk, fk, bk, Sk, ik, rk);
+       return Pk && Pk.hit ? !fk && null != kk && Pk.distance >= kk.distance ? null : Pk : null
```

#### 51. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1204-L1329` → after: `L487-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L487-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L487-L542) · [Before (L1204-L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1204-L1329)

```diff
-     async function xQ(QQ, FQ, oQ) {
-       let kQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-         vQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
-         mQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         uQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
-       await async function(QQ) {
-         if (QQ.isReady()) return;
-         if (QQ.loadingError) throw new Error(QQ.errorObject?.message || `Texture ${QQ.name} errored while loading.`);
-         const FQ = QQ.onLoadObservable;
-         if (FQ) return await new Promise((QQ => FQ.addOnce((() => QQ()))));
-         const wQ = QQ._texture?.onLoadedObservable;
-         if (wQ) return await new Promise((QQ => wQ.addOnce((() => QQ()))));
-         throw new Error(`Cannot determine readiness of texture ${QQ.name}.`)
-       }(QQ);
-       const bQ = QQ.getInternalTexture(),
-         YQ = QQ.is3D || !!bQ?.is3D,
- ... (110 more removed lines; see GitHub link above)
+ 
+     function pk(kk, ek) {
+       return "InstancedLinesMesh" === kk || "LinesMesh" === kk ? ek.intersectionThreshold : 0
+     }
+ 
+     function yk(kk) {
+       const ek = kk.getClassName();
+       if ("GreasedLineMesh" === ek) return {
+         rawBoundingInfo: null,
+         intersectionThreshold: 0
+       };
+       const ik = kk.rawBoundingInfo;
+       return {
+         rawBoundingInfo: ik,
+         intersectionThreshold: ik ? pk(ek, kk) : 0
+       }
+ ... (40 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1331-L1358` → after: `L544-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L544-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L544-L584) · [Before (L1331-L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1331-L1358)

```diff
-             throw Error("Render to texture failed.")
-           } finally {
-             AQ.dispose(), xQ.dispose()
-           }
-         }(QQ, tQ, eQ, kQ, vQ, uQ)
-       }
-       let MQ = await QQ.readPixels(kQ, vQ);
-       if (!MQ) throw new Error(`Failed to read pixels from texture ${QQ.name}.`);
-       if (MQ instanceof Float32Array) {
-         const QQ = new Uint8Array(MQ.length);
-         let FQ = MQ.length;
-         for (; FQ--;) {
-           const wQ = MQ[FQ];
-           QQ[FQ] = Math.round(255 * (0, HQ.Clamp)(wQ))
-         }
-         MQ = QQ
- ... (12 more removed lines; see GitHub link above)
+           }
+         } else {
+           const kk = xk(Pk, ek, Mk, Hk, Dk, Sk, bk);
+           if (kk && (Pk = kk, Dk)) return Pk
+         }
+       }
+       return Pk || new rk.b
+     }
+ 
+     function Ck(kk, ek, ik, Dk) {
+       if (!rk.b) return null;
+       const Sk = [],
+         bk = !!(kk.activeCameras && kk.activeCameras.length > 1 && kk.cameraToUseForPointers !== kk.activeCamera),
+         Pk = kk.cameraToUseForPointers || kk.activeCamera,
+         mk = Mk.internalPickerForMesh || wk,
+         Kk = mk === wk;
+ ... (25 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1363` → after: `L587-L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L587-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L587-L589) · [Before (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1363)

```diff
-           return FQ
+         } else {
+           const kk = mk(null, ek, Mk, nk, !1, !1, Dk);
+           kk && Sk.push(kk)
```

#### 54. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1368-L1392` → after: `L594-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L594-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L594-L627) · [Before (L1368-L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1368-L1392)

```diff
-     const AQ = {
-       CreateResizedCopy: function(QQ, FQ, wQ) {
-         let oQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-         const DQ = QQ.iN(),
-           kQ = DQ.Wx(),
-           vQ = new qQ.e("resized" + QQ.name, {
-             width: FQ,
-             height: wQ
-           }, DQ, !QQ.noMipmap, !0, QQ._texture.type, !1, QQ.samplingMode, !1);
-         vQ.wrapU = QQ.wrapU, vQ.wrapV = QQ.wrapV, vQ.uOffset = QQ.uOffset, vQ.vOffset = QQ.vOffset, vQ.uScale = QQ.uScale, vQ.vScale = QQ.vScale, vQ.uAng = QQ.uAng, vQ.vAng = QQ.vAng, vQ.wAng = QQ.wAng, vQ.coordinatesIndex = QQ.coordinatesIndex, vQ.level = QQ.level, vQ.anisotropi … [truncated]
-         const mQ = new uQ("pass", 1, null, oQ ? LQ.e.BILINEAR_SAMPLINGMODE : LQ.e.NEAREST_SAMPLINGMODE, kQ, !1, 0);
-         return mQ.externalTextureSamplerBinding = !0, mQ.onEffectCreatedObservable.addOnce((FQ => {
-           FQ.executeWhenCompiled((() => {
-             mQ.onApply = function(FQ) {
-               FQ.setTexture("textureSampler", QQ)
-             };
- ... (9 more removed lines; see GitHub link above)
+ 
+     function Ak(kk, ek, ik, Dk, Sk, bk) {
+       if (!rk.b) return null;
+       const Pk = Lk(kk, (Dk => (kk._tempPickingRay || (kk._tempPickingRay = Kk.Zero()), nk(kk, ek, ik, Dk, kk._tempPickingRay, bk || null), kk._tempPickingRay)), Dk, Sk, !0);
+       return Pk && (Pk.ray = xk(kk, ek, ik, fk.b.Identity(), bk || null)), Pk
+     }
+ 
+     function jk(kk, ek, ik, Dk, Sk, bk, rk) {
+       const Pk = Lk(kk, ((Dk, fk) => (kk._tempPickingRay || (kk._tempPickingRay = Kk.Zero()), nk(kk, ek, ik, Dk, kk._tempPickingRay, bk || null, !1, fk), kk._tempPickingRay)), Dk, Sk, !1, rk);
+       return Pk && (Pk.ray = xk(kk, ek, ik, fk.b.Identity(), bk || null)), Pk
+     }
+ 
+     function sk(kk, ek, ik, Dk, Sk) {
+       const bk = Lk(kk, (ik => (kk._pickWithRayInverseMatrix || (kk._pickWithRayInverseMatrix = fk.b.Identity()), ik.invertToRef(kk._pickWithRayInverseMatrix), kk._cachedRayForTransform || (kk._cachedRayForTransform = Kk.Zero()), Kk.TransformToRef(ek, kk._pickWithRayInverseMatrix … [truncated]
+       return bk && (bk.ray = ek), bk
+     }
+ ... (18 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1395` → after: `L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L644) · [Before (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1395)

```diff
-   41200: (QQ, FQ, wQ) => {
+   41122: (kk, ek, ik) => {
```

#### 56. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1397` → after: `L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L646) · [Before (L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1397)

```diff
-       d: () => xQ
+       b: () => Sk.w
```

#### 57. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1399-L1409` → after: `L648-L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L648-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L648-L683) · [Before (L1399-L1409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1399-L1409)

```diff
-     var LQ = wQ(39402),
-       qQ = wQ(39518),
-       oQ = wQ(36722),
-       DQ = wQ(36696),
-       kQ = wQ(39243),
-       vQ = wQ(39409),
-       mQ = wQ(39426),
-       uQ = wQ(36741),
-       HQ = wQ(39295),
-       bQ = wQ(39333),
-       YQ = wQ(41202);
+     var Dk = ik(39653),
+       fk = ik(39782),
+       Sk = ik(41129);
+     let bk = !1;
+     bk || (bk = !0, (0, Sk.b)(Dk.f, fk.e), Dk.f.prototype.createPickingRayToRef = function(kk, ek, ik, Dk, fk) {
+       let bk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         rk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
+       return (0, Sk.i)(this, kk, ek, ik, Dk, fk, bk, rk)
+     }, Dk.f.prototype.createPickingRayInCameraSpace = function(kk, ek, ik) {
+       return (0, Sk.f)(this, kk, ek, ik)
+     }, Dk.f.prototype.createPickingRayInCameraSpaceToRef = function(kk, ek, ik, Dk) {
+       return (0, Sk.c)(this, kk, ek, ik, Dk)
+     }, Dk.f.prototype.pickWithBoundingInfo = function(kk, ek, ik, Dk, fk) {
+       return (0, Sk.p)(this, kk, ek, ik, Dk, fk)
+     }, Dk.f.prototype.Un = function(kk, ek, ik, Dk, fk, bk) {
+       let rk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
+ ... (20 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1412-L1427` → after: `L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L686) · [Before (L1412-L1427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1412-L1427)

```diff
-         let FQ, kQ, HQ, xQ, AQ, eQ, MQ, GQ, pQ, cQ, CQ, SQ, iQ, WQ, RQ, OQ, sQ = [],
-           rQ = [],
-           IQ = [],
-           UQ = [],
-           NQ = [],
-           TQ = [],
-           KQ = [],
-           zQ = [],
-           lQ = [],
-           jQ = [],
-           aQ = [],
-           XQ = [],
-           fQ = [],
-           VQ = [],
-           hQ = [],
-           JQ = [],
+         let ek, ik, Pk, mk, Mk, Kk, xk, nk, Uk = rk.b,
```

#### 59. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1441-L1446` → after: `L700-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L700-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L700-L702) · [Before (L1441-L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1441-L1446)

```diff
-         return QQ = class {
-           static get ForceGLSL() {
-             return YQ.f.ForceGLSL
-           }
-           static set ForceGLSL(QQ) {
-             YQ.f.ForceGLSL = QQ
+         return kk = class extends Uk {
+           get shadowFrustumSize() {
+             return this._shadowFrustumSize
```

#### 60. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1448-L1449` → after: `L704-L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L704-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L704-L705) · [Before (L1448-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1448-L1449)

```diff
-           static RegisterShaderCodeProcessing(QQ, FQ) {
-             YQ.f.RegisterShaderCodeProcessing(QQ, FQ)
+           set shadowFrustumSize(kk) {
+             this._shadowFrustumSize = kk, this.forceProjectionMatrixCompute()
```

#### 61. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1451-L1452` → after: `L707-L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L707-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L707-L708) · [Before (L1451-L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1451-L1452)

```diff
-           get name() {
-             return this._effectWrapper.name
+           get shadowOrthoScale() {
+             return this._shadowOrthoScale
```

#### 62. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1454-L1455` → after: `L710-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L710-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L710-L711) · [Before (L1454-L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1454-L1455)

```diff
-           set name(QQ) {
-             this._effectWrapper.name = QQ
+           set shadowOrthoScale(kk) {
+             this._shadowOrthoScale = kk, this.forceProjectionMatrixCompute()
```

#### 63. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1457-L1458` → after: `L713-L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L713-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L713-L714) · [Before (L1457-L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1457-L1458)

```diff
-           get alphaMode() {
-             return this._effectWrapper.alphaMode
+           get orthoLeft() {
+             return this._orthoLeft
```

#### 64. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1460-L1461` → after: `L716-L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L716-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L716-L717) · [Before (L1460-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1460-L1461)

```diff
-           set alphaMode(QQ) {
-             this._effectWrapper.alphaMode = QQ
+           set orthoLeft(kk) {
+             this._orthoLeft = kk
```

#### 65. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1463-L1548` → after: `L719-L720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L719-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L719-L720) · [Before (L1463-L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1463-L1548)

```diff
-           get samples() {
-             return this._samples
-           }
-           set samples(QQ) {
-             this._samples = Math.min(QQ, this._engine.getCaps().maxMSAASamples), this._textures.forEach((QQ => {
-               QQ.setSamples(this._samples)
-             }))
-           }
-           get shaderLanguage() {
-             return this._shaderLanguage
-           }
-           getEffectName() {
-             return this._fragmentUrl
-           }
-           set onActivate(QQ) {
-             this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), QQ && (this._onActivateObserver = this.onActivateObservable.add(QQ))
- ... (70 more removed lines; see GitHub link above)
+           get orthoRight() {
+             return this._orthoRight
```

#### 66. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1550-L1552` → after: `L722-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L722-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L722-L723) · [Before (L1550-L1552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1550-L1552)

```diff
-           _gatherImports() {
-             let QQ = arguments.length > 1 ? arguments[1] : void 0;
-             arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? QQ.push(Promise.all([wQ.e(357).then((() => wQ(60891)))])) : QQ.push(Promise.all([wQ.e(346).then((() => wQ(60652)))]))
+           set orthoRight(kk) {
+             this._orthoRight = kk
```

#### 67. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1554-L1607` → after: `L725-L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L725-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L725-L726) · [Before (L1554-L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1554-L1607)

```diff
-           getClassName() {
-             return "PostProcess"
-           }
-           Wx() {
-             return this._engine
-           }
-           getEffect() {
-             return this._effectWrapper.drawWrapper.effect
-           }
-           shareOutputWith(QQ) {
-             return this._disposeTextures(), this._shareOutputWithPostProcess = QQ, this
-           }
-           useOwnOutput() {
-             0 == this._textures.length && (this._textures = new qQ.d(2)), this._shareOutputWithPostProcess = null
-           }
-           updateEffect() {
- ... (38 more removed lines; see GitHub link above)
+           get orthoTop() {
+             return this._orthoTop
```

#### 68. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1609-L1672` → after: `L728-L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L728-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L728-L729) · [Before (L1609-L1672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1609-L1672)

```diff
-           resize(QQ, FQ) {
-             let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-               LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-               qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-             this._textures.length > 0 && this._textures.reset(), this.width = QQ, this.height = FQ;
-             let oQ = null;
-             if (wQ)
-               for (let vQ = 0; vQ < wQ._postProcesses.length; vQ++)
-                 if (null !== wQ._postProcesses[vQ]) {
-                   oQ = wQ._postProcesses[vQ];
-                   break
-                 } const DQ = {
-                 width: this.width,
-                 height: this.height
-               },
-               kQ = {
- ... (48 more removed lines; see GitHub link above)
+           set orthoTop(kk) {
+             this._orthoTop = kk
```

#### 69. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1674-L1675` → after: `L731-L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L731-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L731-L732) · [Before (L1674-L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1674-L1675)

```diff
-           get isSupported() {
-             return this._effectWrapper.drawWrapper.effect.isSupported
+           get orthoBottom() {
+             return this._orthoBottom
```

#### 70. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1677-L1678` → after: `L734-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L734-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L734-L735) · [Before (L1677-L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1677-L1678)

```diff
-           get aspectRatio() {
-             return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.aspectRatio : this._forcedOutputTexture ? this._forcedOutputTexture.width / this._forcedOutputTexture.height : this.width / this.height
+           set orthoBottom(kk) {
+             this._orthoBottom = kk
```

#### 71. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1680-L1681` → after: `L737-L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L737-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L737-L738) · [Before (L1680-L1681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1680-L1681)

```diff
-           isReady() {
-             return this._effectWrapper.isReady()
+           constructor(kk, ek, ik, fk) {
+             super(kk, ik, fk), this._shadowFrustumSize = ((0, Dk.e)(this, Hk), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, Dk.e)(this, wk, !0), this.autoCalcShadowZBounds = ((0, Dk.e)(this, lk), (0, Dk.e)(this, pk, !1)), this._orthoLeft = ((0, Dk.e)(this, yk), ( … [truncated]
```

#### 72. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1683-L1686` → after: `L740-L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L740-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L740-L741) · [Before (L1683-L1686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1683-L1686)

```diff
-           apply() {
-             if (!this._effectWrapper.isReady()) return null;
-             let QQ;
-             return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.Wx().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaCo … [truncated]
+           getClassName() {
+             return "DirectionalLight"
```

#### 73. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1688-L1689` → after: `L743-L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L743-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L743-L744) · [Before (L1688-L1689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1688-L1689)

```diff
-           _disposeTextures() {
-             this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
+           getTypeID() {
+             return bk.d.LIGHTTYPEID_DIRECTIONALLIGHT
```

#### 74. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1691-L1693` → after: `L746-L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L746-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L746-L747) · [Before (L1691-L1693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1691-L1693)

```diff
-           _disposeTextureCache() {
-             for (let QQ = this._textureCache.length - 1; QQ >= 0; QQ--) this._textureCache[QQ].texture.dispose();
-             this._textureCache.length = 0
+           _setDefaultShadowProjectionMatrix(kk, ek, ik) {
+             this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(kk) : this._setDefaultAutoExtendShadowProjectionMatrix(kk, ek, ik)
```

#### 75. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1695-L1696` → after: `L749-L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L749-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L749-L751) · [Before (L1695-L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1695-L1696)

```diff
-           setPrePassRenderer(QQ) {
-             return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = QQ.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
+           _setDefaultFixedFrustumShadowProjectionMatrix(kk) {
+             const ek = this.XF().activeCamera;
+             Sk.b.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : ek ? ek.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : ek ? ek.maxZ : 1e4, kk, this.XF().JU().isNDCHalfZRange)
```

#### 76. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1698-L1703` → after: `L753-L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L753-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L753-L764) · [Before (L1698-L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1698-L1703)

```diff
-           dispose(QQ) {
-             let FQ;
-             if (QQ = QQ || this.W8, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (FQ = this._parentContainer.postProcesses.indexOf(this), FQ > -1 && this._p … [truncated]
-               if (QQ.detachPostProcess(this), FQ = QQ._postProcesses.indexOf(this), 0 === FQ && QQ._postProcesses.length > 0) {
-                 const QQ = this.W8._getFirstPostProcess();
-                 QQ && QQ.markTextureDirty()
+           _setDefaultAutoExtendShadowProjectionMatrix(kk, ek, ik) {
+             const Dk = this.XF().activeCamera;
+             if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
+               const kk = Sk.o.Zero();
+               this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
+               let Dk = Number.MAX_VALUE,
+                 fk = -Number.MAX_VALUE;
+               for (let bk = 0; bk < ik.length; bk++) {
+                 const rk = ik[bk];
+                 if (!rk) continue;
+                 const Pk = rk.hq().boundingBox;
+                 for (let ik = 0; ik < Pk.vectorsWorld.length; ik++) Sk.o.TransformCoordinatesToRef(Pk.vectorsWorld[ik], ek, kk), kk.x < this._orthoLeft && (this._orthoLeft = kk.x), kk.y < this._orthoBottom && (this._orthoBottom = kk.y), kk.x > this._orthoRight && (this._orthoRigh … [truncated]
```

#### 77. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1705` → after: `L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L766) · [Before (L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1705)

```diff
-               this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
+               this.autoCalcShadowZBounds && (this._shadowMinZ = Dk, this._shadowMaxZ = fk)
```

#### 78. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1708-L1711` → after: `L781-L782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L781-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L781-L782) · [Before (L1708-L1711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1708-L1711)

```diff
-           serialize() {
-             const QQ = mQ.c.Serialize(this),
-               FQ = this.getCamera() || this._scene && this._scene.activeCamera;
-             return QQ.customType = "BABYLON." + this.getClassName(), QQ.cameraId = FQ ? FQ.id : null, QQ.reusable = this._reusable, QQ.textureType = this._textureType, QQ.fragmentUrl = this._fragmentUrl, QQ.parameters = this._parameters, QQ.samplers = this._samplers, QQ.uniformBu … [truncated]
+           transferToNodeMaterialEffect(kk, ek) {
+             return this.computeTransformedInformation() ? (kk.setFloat3(ek, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (kk.setFloat3(ek, this.direction.x, this.direction.y, this.direction.z), this)
```

#### 79. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1713-L1717` → after: `L784-L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L784-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L784-L786) · [Before (L1713-L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1713-L1717)

```diff
-           clone() {
-             const FQ = this.serialize();
-             FQ._engine = this._engine, FQ.cameraId = null;
-             const wQ = QQ.Parse(FQ, this._scene, "");
-             return wQ ? (wQ.onActivateObservable = this.onActivateObservable.clone(), wQ.onSizeChangedObservable = this.onSizeChangedObservable.clone(), wQ.onApplyObservable = this.onApplyObservable.clone(), wQ.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), wQ. … [truncated]
+           getDepthMinZ(kk) {
+             const ek = this._scene.JU();
+             return !ek.Xik && ek.isNDCHalfZRange ? 0 : 1
```

#### 80. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1719-L1723` → after: `L788-L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L788-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L788-L790) · [Before (L1719-L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1719-L1723)

```diff
-           static Parse(QQ, FQ, wQ) {
-             const LQ = (0, uQ.b)(QQ.customType);
-             if (!LQ || !LQ._Parse) return null;
-             const qQ = FQ ? FQ.getCameraById(QQ.cameraId) : null;
-             return LQ._Parse(QQ, qQ, FQ, wQ)
+           getDepthMaxZ(kk) {
+             const ek = this._scene.JU();
+             return ek.Xik && ek.isNDCHalfZRange ? 0 : 1
```

#### 81. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1725-L1726` → after: `L792-L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L792-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L792-L793) · [Before (L1725-L1726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1725-L1726)

```diff
-           static _Parse(FQ, wQ, LQ, qQ) {
-             return mQ.c.Parse((() => new QQ(FQ.name, FQ.fragmentUrl, FQ.parameters, FQ.samplers, FQ.options, wQ, FQ.renderTargetSamplingMode, FQ._engine, FQ.reusable, FQ.defines, FQ.textureType, FQ.vertexUrl, FQ.indexParameters, !1, FQ.textureFormat)), FQ, LQ, qQ)
+           prepareLightSpecificDefines(kk, ek) {
+             kk["DIRLIGHT" + ek] = !0
```

#### 82. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1729-L1730` → after: `L796-L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L796-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L796-L797) · [Before (L1729-L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1729-L1730)

```diff
-           const wQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-           FQ = [(0, vQ.I)()], kQ = [(0, vQ.I)()], HQ = [(0, vQ.I)()], xQ = [(0, vQ.I)()], AQ = [(0, vQ.I)()], eQ = [(0, vQ.n)()], MQ = [(0, vQ.I)()], GQ = [(0, vQ.I)()], pQ = [(0, vQ.I)()], cQ = [(0, vQ.I)()], CQ = [(0, vQ.I)()], SQ = [(0, vQ.I)()], iQ = [(0, vQ.I)()], WQ = [(0,  … [truncated]
+           const Sk = "function" === typeof Symbol && Symbol.metadata ? Object.create(Uk[Symbol.metadata] ?? null) : void 0;
+           ek = [(0, fk.I)()], ik = [(0, fk.I)()], Pk = [(0, fk.I)()], mk = [(0, fk.I)()], Mk = [(0, fk.I)("orthoLeft")], Kk = [(0, fk.I)("orthoRight")], xk = [(0, fk.I)("orthoTop")], nk = [(0, fk.I)("orthoBottom")], (0, Dk.d)(kk, null, ek, {
```

#### 83. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1732` → after: `L799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L799) · [Before (L1732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1732)

```diff
-             name: "name",
+             name: "shadowFrustumSize",
```

#### 84. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1736-L1737` → after: `L803-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L803-L804) · [Before (L1736-L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1736-L1737)

```diff
-               has: QQ => "name" in QQ,
-               get: QQ => QQ.name
+               has: kk => "shadowFrustumSize" in kk,
+               get: kk => kk.shadowFrustumSize
```

#### 85. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1740` → after: `L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L807) · [Before (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1740)

```diff
-           }, null, sQ), (0, LQ.i)(QQ, null, pQ, {
+           }, null, Hk), (0, Dk.d)(kk, null, ik, {
```

#### 86. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1742-L1843` → after: `L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L809) · [Before (L1742-L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1742-L1843)

```diff
-             name: "alphaMode",
-             static: !1,
-             private: !1,
-             access: {
-               has: QQ => "alphaMode" in QQ,
-               get: QQ => QQ.alphaMode
-             },
-             metadata: wQ
-           }, null, sQ), (0, LQ.i)(null, null, FQ, {
-             kind: "field",
-             name: "uniqueId",
-             static: !1,
-             private: !1,
-             access: {
-               has: QQ => "uniqueId" in QQ,
-               get: QQ => QQ.uniqueId,
- ... (86 more removed lines; see GitHub link above)
+             name: "shadowOrthoScale",
```

#### 87. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1847-L1851` → after: `L813-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L813-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L813-L814) · [Before (L1847-L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1847-L1851)

```diff
-               has: QQ => "alphaConstants" in QQ,
-               get: QQ => QQ.alphaConstants,
-               set: (QQ, FQ) => {
-                 QQ.alphaConstants = FQ
-               }
+               has: kk => "shadowOrthoScale" in kk,
+               get: kk => kk.shadowOrthoScale
```

#### 88. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1854` → after: `L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L817) · [Before (L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1854)

```diff
-           }, JQ, EQ), (0, LQ.i)(null, null, CQ, {
+           }, null, Hk), (0, Dk.d)(null, null, Pk, {
```

#### 89. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1856` → after: `L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L819) · [Before (L1856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1856)

```diff
-             name: "enablePixelPerfectMode",
+             name: "autoUpdateExtends",
```

#### 90. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1860-L1861` → after: `L823-L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L823-L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L823-L824) · [Before (L1860-L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1860-L1861)

```diff
-               has: QQ => "enablePixelPerfectMode" in QQ,
-               get: QQ => QQ.enablePixelPerfectMode,
+               has: kk => "autoUpdateExtends" in kk,
+               get: kk => kk.autoUpdateExtends,
```

#### 91. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1863` → after: `L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L826) · [Before (L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1863)

```diff
-                 QQ.enablePixelPerfectMode = FQ
+                 kk.autoUpdateExtends = ek
```

#### 92. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1867` → after: `L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L830) · [Before (L1867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1867)

```diff
-           }, nQ, gQ), (0, LQ.i)(null, null, SQ, {
+           }, wk, lk), (0, Dk.d)(null, null, mk, {
```

#### 93. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1869` → after: `L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L832) · [Before (L1869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1869)

```diff
-             name: "forceFullscreenViewport",
+             name: "autoCalcShadowZBounds",
```

#### 94. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1873-L1874` → after: `L836-L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L836-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L836-L837) · [Before (L1873-L1874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1873-L1874)

```diff
-               has: QQ => "forceFullscreenViewport" in QQ,
-               get: QQ => QQ.forceFullscreenViewport,
+               has: kk => "autoCalcShadowZBounds" in kk,
+               get: kk => kk.autoCalcShadowZBounds,
```

#### 95. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1876` → after: `L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L839) · [Before (L1876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1876)

```diff
-                 QQ.forceFullscreenViewport = FQ
+                 kk.autoCalcShadowZBounds = ek
```

#### 96. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1880` → after: `L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L843) · [Before (L1880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1880)

```diff
-           }, PQ, ZQ), (0, LQ.i)(null, null, iQ, {
+           }, pk, yk), (0, Dk.d)(null, null, Mk, {
```

#### 97. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1882` → after: `L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L845) · [Before (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1882)

```diff
-             name: "scaleMode",
+             name: "_orthoLeft",
```

#### 98. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1886-L1887` → after: `L849-L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L849-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L849-L850) · [Before (L1886-L1887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1886-L1887)

```diff
-               has: QQ => "scaleMode" in QQ,
-               get: QQ => QQ.scaleMode,
+               has: kk => "_orthoLeft" in kk,
+               get: kk => kk._orthoLeft,
```

#### 99. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1889` → after: `L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L852) · [Before (L1889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1889)

```diff
-                 QQ.scaleMode = FQ
+                 kk._orthoLeft = ek
```

#### 100. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1893` → after: `L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L856) · [Before (L1893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1893)

```diff
-           }, yQ, BQ), (0, LQ.i)(null, null, WQ, {
+           }, Yk, Lk), (0, Dk.d)(null, null, Kk, {
```

#### 101. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1895` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L858) · [Before (L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1895)

```diff
-             name: "alwaysForcePOT",
+             name: "_orthoRight",
```

#### 102. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1899-L1900` → after: `L862-L863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L862-L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L862-L863) · [Before (L1899-L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1899-L1900)

```diff
-               has: QQ => "alwaysForcePOT" in QQ,
-               get: QQ => QQ.alwaysForcePOT,
+               has: kk => "_orthoRight" in kk,
+               get: kk => kk._orthoRight,
```

#### 103. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1902` → after: `L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L865) · [Before (L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1902)

```diff
-                 QQ.alwaysForcePOT = FQ
+                 kk._orthoRight = ek
```

#### 104. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1906` → after: `L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L869) · [Before (L1906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1906)

```diff
-           }, dQ, QF), (0, LQ.i)(null, null, RQ, {
+           }, Ck, Ak), (0, Dk.d)(null, null, xk, {
```

#### 105. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1908` → after: `L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L871) · [Before (L1908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1908)

```diff
-             name: "_samples",
+             name: "_orthoTop",
```

#### 106. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1912-L1913` → after: `L875-L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L875-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L875-L876) · [Before (L1912-L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1912-L1913)

```diff
-               has: QQ => "_samples" in QQ,
-               get: QQ => QQ._samples,
+               has: kk => "_orthoTop" in kk,
+               get: kk => kk._orthoTop,
```

#### 107. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1915` → after: `L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L878) · [Before (L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1915)

```diff
-                 QQ._samples = FQ
+                 kk._orthoTop = ek
```

#### 108. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1919` → after: `L882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L882) · [Before (L1919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1919)

```diff
-           }, FF, wF), (0, LQ.i)(null, null, OQ, {
+           }, jk, sk), (0, Dk.d)(null, null, nk, {
```

#### 109. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1921` → after: `L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L884) · [Before (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1921)

```diff
-             name: "adaptScaleToCurrentViewport",
+             name: "_orthoBottom",
```

#### 110. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1925-L1926` → after: `L888-L889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L888-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L888-L889) · [Before (L1925-L1926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1925-L1926)

```diff
-               has: QQ => "adaptScaleToCurrentViewport" in QQ,
-               get: QQ => QQ.adaptScaleToCurrentViewport,
+               has: kk => "_orthoBottom" in kk,
+               get: kk => kk._orthoBottom,
```

#### 111. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1928` → after: `L891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L891) · [Before (L1928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1928)

```diff
-                 QQ.adaptScaleToCurrentViewport = FQ
+                 kk._orthoBottom = ek
```

#### 112. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1941-L1953` → after: `L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L904) · [Before (L1941-L1953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1941-L1953)

```diff
- 
-     function tQ() {
-       AQ || (AQ = !0, HQ.e.prototype.setTextureFromPostProcess = function(QQ, FQ, wQ) {
-         let LQ = null;
-         FQ && (FQ._forcedOutputTexture ? LQ = FQ._forcedOutputTexture : FQ._textures.data[FQ._currentRenderTextureInd] && (LQ = FQ._textures.data[FQ._currentRenderTextureInd])), this._bindTexture(QQ, LQ?.texture ?? null, wQ)
-       }, HQ.e.prototype.setTextureFromPostProcessOutput = function(QQ, FQ, wQ) {
-         this._bindTexture(QQ, FQ?._outputTexture?.texture ?? null, wQ)
-       }, kQ.d.prototype.setTextureFromPostProcess = function(QQ, FQ) {
-         this._engine.setTextureFromPostProcess(this._samplers[QQ], FQ, QQ)
-       }, kQ.d.prototype.setTextureFromPostProcessOutput = function(QQ, FQ) {
-         this._engine.setTextureFromPostProcessOutput(this._samplers[QQ], FQ, QQ)
-       }, (0, uQ.e)("BABYLON.PostProcess", xQ))
-     }
+     Kk || (Kk = !0, Pk.b.AddNodeConstructor("Light_Type_1", ((kk, ek) => () => new Mk(kk, Sk.o.Zero(), ek))), (0, mk.h)("BABYLON.DirectionalLight", Mk))
```

#### 113. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1955` → after: `L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L906) · [Before (L1955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1955)

```diff
-   41226: (QQ, FQ, wQ) => {
+   41155: (kk, ek, ik) => {
```

#### 114. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1957-L1958` → after: `L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L908) · [Before (L1957-L1958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1957-L1958)

```diff
-       c: () => DQ,
-       f: () => oQ
+       b: () => Ze
```

#### 115. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1960-L1964` → after: `L910-L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L910-L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L910-L923) · [Before (L1960-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1960-L1964)

```diff
-     var LQ = wQ(41202),
-       qQ = wQ(36720);
-     class oQ extends LQ.f {
-       _gatherImports(QQ, FQ) {
-         QQ ? (this._webGPUReady = !0, FQ.push(Promise.all([wQ.e(364).then((() => wQ(60953)))]))) : FQ.push(Promise.all([wQ.e(365).then((() => wQ(60956)))])), super._gatherImports(QQ, FQ)
+     var Dk = ik(38294),
+       fk = ik(36726),
+       Sk = ik(36698),
+       bk = ik(39708),
+       rk = ik(41162),
+       Pk = ik(36722),
+       mk = ik(39849),
+       Mk = ik(36874),
+       Kk = ik(38296),
+       xk = ik(38265),
+       nk = ik(36729);
+     class Uk {
+       constructor() {
+         this.direction1 = new Sk.o(0, 1, 0), this.direction2 = new Sk.o(0, 1, 0)
```

#### 116. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1966-L1976` → after: `L925-L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L925-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L925-L955) · [Before (L1966-L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1966-L1976)

```diff
-       constructor(QQ) {
-         let FQ = arguments.length > 2 ? arguments[2] : void 0;
-         const wQ = {
-           name: QQ,
-           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || qQ.d.LastCreatedEngine,
-           useShaderStore: !0,
-           useAsPostProcess: !0,
-           fragmentShader: oQ.FragmentUrl,
-           ...FQ
-         };
-         wQ.engine || (wQ.engine = qQ.d.LastCreatedEngine), super(wQ)
+       startDirectionFunction(kk, ek, ik, Dk) {
+         const fk = (0, nk.RandomRange)(this.direction1.x, this.direction2.x),
+           bk = (0, nk.RandomRange)(this.direction1.y, this.direction2.y),
+           rk = (0, nk.RandomRange)(this.direction1.z, this.direction2.z);
+         Dk ? ek.Z6(fk, bk, rk) : Sk.o.TransformNormalFromFloatsToRef(fk, bk, rk, kk, ek)
+       }
+       startPositionFunction(kk, ek, ik, Dk) {
+         Dk ? ek.Z6(0, 0, 0) : Sk.o.TransformCoordinatesFromFloatsToRef(0, 0, 0, kk, ek)
+       }
+       clone() {
+         const kk = new Uk;
+         return xk.c.DeepCopy(this, kk), kk
+       }
+       applyToShader(kk) {
+         kk.setVector3("direction1", this.direction1), kk.setVector3("direction2", this.direction2)
+       }
+ ... (15 more added lines; see GitHub link above)
```

#### 117. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1979-L1982` → after: `L958-L980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L958-L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L958-L980) · [Before (L1979-L1982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1979-L1982)

```diff
-     oQ.FragmentUrl = "pass";
-     class DQ extends LQ.f {
-       _gatherImports(QQ, FQ) {
-         QQ ? (this._webGPUReady = !0, FQ.push(Promise.all([wQ.e(366).then((() => wQ(60959)))]))) : FQ.push(Promise.all([wQ.e(367).then((() => wQ(60964)))])), super._gatherImports(QQ, FQ)
+     class Hk {
+       constructor() {
+         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.radius = kk, this.radiusRange = ek, this.directionRandomizer = ik
+       }
+       startDirectionFunction(kk, ek, ik, Dk) {
+         const fk = ik.position.subtract(kk.getTranslation()).normalize(),
+           bk = (0, nk.RandomRange)(0, this.directionRandomizer),
+           rk = (0, nk.RandomRange)(0, this.directionRandomizer),
+           Pk = (0, nk.RandomRange)(0, this.directionRandomizer);
+         fk.x += bk, fk.y += rk, fk.z += Pk, fk.normalize(), Dk ? ek.Fs(fk) : Sk.o.TransformNormalFromFloatsToRef(fk.x, fk.y, fk.z, kk, ek)
+       }
+       startPositionFunction(kk, ek, ik, Dk) {
+         const fk = this.radius - (0, nk.RandomRange)(0, this.radius * this.radiusRange),
+ ... (7 more added lines; see GitHub link above)
```

#### 118. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1984-L2017` → after: `L982-L1088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L982-L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L982-L1088) · [Before (L1984-L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L1984-L2017)

```diff
-       constructor(QQ) {
-         super({
-           ...arguments.length > 2 ? arguments[2] : void 0,
-           name: QQ,
-           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || qQ.d.LastCreatedEngine,
-           useShaderStore: !0,
-           useAsPostProcess: !0,
-           fragmentShader: DQ.FragmentUrl,
-           defines: "#define POSITIVEX"
-         }), this._face = 0
-       }
-       get face() {
-         return this._face
-       }
-       set face(QQ) {
-         if (!(QQ < 0 || QQ > 5)) switch (this._face = QQ, this._face) {
- ... (18 more removed lines; see GitHub link above)
+       clone() {
+         const kk = new Hk(this.radius, this.directionRandomizer);
+         return xk.c.DeepCopy(this, kk), kk
+       }
+       applyToShader(kk) {
+         kk.setFloat("radius", this.radius), kk.setFloat("radiusRange", this.radiusRange), kk.setFloat("directionRandomizer", this.directionRandomizer)
+       }
+       buildUniformLayout(kk) {
+         kk.addUniform("radius", 1), kk.addUniform("radiusRange", 1), kk.addUniform("directionRandomizer", 1)
+       }
+       getEffectDefines() {
+         return "#define HEMISPHERICEMITTER"
+       }
+       getClassName() {
+         return "HemisphericParticleEmitter"
+       }
+ ... (91 more added lines; see GitHub link above)
```

#### 119. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L2020` → after: `L1091-L4405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L1091-L4405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/302.js#L1091-L4405) · [Before (L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/302.js#L2020)

```diff
-     DQ.FragmentUrl = "passCube"
+     var pk = ik(38262);
+     class yk {
+       get radius() {
+         return this._radius
+       }
+       set radius(kk) {
+         this._radius = kk, this._buildHeight()
+       }
+       get angle() {
+         return this._angle
+       }
+       set angle(kk) {
+         this._angle = kk, this._buildHeight()
+       }
+       _buildHeight() {
+         0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
+ ... (3299 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/303.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/303.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a)

#### 1. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L4-L6` → after: `L4-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/303.js#L4-L11) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/303.js#L4-L6)

```diff
-   41245: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       _HDRTextureLoader: () => uQ
+   41291: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => xk,
+       d: () => lk,
+       f: () => nk,
+       h: () => Uk,
+       k: () => yk,
+       o: () => pk
```

#### 2. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L8-L29` → after: `L13-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L13-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/303.js#L13-L56) · [Before (L8-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/303.js#L8-L29)

```diff
-     var LQ = wQ(36696);
-     class qQ {
-       static ConvertPanoramaToCubemap(QQ, FQ, wQ, LQ) {
-         let qQ, oQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           DQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
-         if (!QQ) throw "ConvertPanoramaToCubemap: input cannot be null";
-         if (QQ.length != FQ * wQ * 3) {
-           if (QQ.length != FQ * wQ * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
-           qQ = 4
-         } else qQ = 3;
-         return {
-           front: this.CreateCubemapTexture(LQ, this.FACE_FRONT, QQ, FQ, wQ, oQ, DQ, qQ),
-           back: this.CreateCubemapTexture(LQ, this.FACE_BACK, QQ, FQ, wQ, oQ, DQ, qQ),
-           left: this.CreateCubemapTexture(LQ, this.FACE_LEFT, QQ, FQ, wQ, oQ, DQ, qQ),
-           right: this.CreateCubemapTexture(LQ, this.FACE_RIGHT, QQ, FQ, wQ, oQ, DQ, qQ),
-           up: this.CreateCubemapTexture(LQ, this.FACE_UP, QQ, FQ, wQ, oQ, DQ, qQ),
- ... (6 more removed lines; see GitHub link above)
+     var Dk = ik(41223);
+     var fk = "Babylon Lite v1.32.0",
+       Sk = ik(41297);
+ 
+     function bk(kk) {
+       return "clientWidth" in kk
+     }
+     var rk = 1;
+ 
+     function Pk(kk, ek, ik) {
+       const Pk = ek.getContext("webgpu");
+       Pk || (0, Dk.c)(54), bk(ek) && ek.setAttribute("data-engine", fk);
+       const mk = ik?.format ?? navigator.gpu.getPreferredCanvasFormat(),
+         Mk = ik?.srgb ? (Kk = mk).endsWith("-srgb") ? Kk : `${Kk}-srgb` : mk;
+       var Kk;
+       const xk = ik?.alphaMode ?? "opaque";
+ ... (28 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L31-L52` → after: `L58-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L58-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/303.js#L58-L185) · [Before (L31-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/303.js#L31-L52)

```diff
-       static CreateCubemapTexture(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ) {
-         const vQ = new ArrayBuffer(QQ * QQ * 4 * 3),
-           mQ = new Float32Array(vQ),
-           uQ = oQ ? Math.max(1, Math.round(LQ / 4 / QQ)) : 1,
-           HQ = 1 / uQ,
-           bQ = HQ * HQ,
-           YQ = FQ[1].subtract(FQ[0]).scale(HQ / QQ),
-           xQ = FQ[3].subtract(FQ[2]).scale(HQ / QQ),
-           AQ = 1 / QQ;
-         let tQ = 0;
-         for (let eQ = 0; eQ < QQ; eQ++)
-           for (let oQ = 0; oQ < uQ; oQ++) {
-             let oQ = FQ[0],
-               vQ = FQ[2];
-             for (let FQ = 0; FQ < QQ; FQ++)
-               for (let HQ = 0; HQ < uQ; HQ++) {
- ... (6 more removed lines; see GitHub link above)
+     }
+ 
+     function mk(kk) {
+       const ek = kk._context.getCurrentTexture(),
+         ik = kk.scRT;
+       ik._colorTexture = ek, ik._colorView = ek.createView({
+         format: kk.format
+       }), ik._width = ek.width, ik._height = ek.height
+     }
+ 
+     function Mk(kk) {
+       const ek = kk.canvas;
+       if (!bk(ek)) return;
+       const ik = kk._w ?? ek.clientWidth,
+         Dk = kk._h ?? ek.clientHeight;
+       if (!(ik > 0 && Dk > 0)) return;
+ ... (112 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L77-L80` → after: `L531-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L531-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/303.js#L531-L575) · [Before (L77-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/303.js#L77-L80)

```diff
-     function oQ(QQ, FQ, wQ, LQ, qQ, oQ) {
-       qQ > 0 ? (qQ = function(QQ, FQ) {
-         return FQ > 1023 ? QQ * Math.pow(2, 1023) * Math.pow(2, FQ - 1023) : FQ < -1074 ? QQ * Math.pow(2, -1074) * Math.pow(2, FQ + 1074) : QQ * Math.pow(2, FQ)
-       }(1, qQ - 136), QQ[oQ + 0] = FQ * qQ, QQ[oQ + 1] = wQ * qQ, QQ[oQ + 2] = LQ * qQ) : (QQ[oQ + 0] = 0, QQ[oQ + 1] = 0, QQ[oQ + 2] = 0)
+     function Ak(kk, ek) {
+       let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+         Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       const fk = ek;
+       if (0 === Dk && 16 === fk.length) return void kk.set(fk, ik);
+       const Sk = Dk,
+         bk = ik;
+       kk[bk + 0] = fk[Sk + 0], kk[bk + 1] = fk[Sk + 1], kk[bk + 2] = fk[Sk + 2], kk[bk + 3] = fk[Sk + 3], kk[bk + 4] = fk[Sk + 4], kk[bk + 5] = fk[Sk + 5], kk[bk + 6] = fk[Sk + 6], kk[bk + 7] = fk[Sk + 7], kk[bk + 8] = fk[Sk + 8], kk[bk + 9] = fk[Sk + 9], kk[bk + 10] = fk[Sk + 10 … [truncated]
+     }
+ 
+     function jk(kk, ek, ik, Dk, fk) {
+       kk.fill(0);
+       const Sk = function(kk, ek) {
+           const ik = mk(kk);
+           if (kk._vpVer === ik && kk._vpAspect === ek) return kk._vpCache;
+           const Dk = kk._vpCache;
+ ... (29 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L84-L85` → after: `L579-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L579-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/303.js#L579-L690) · [Before (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/303.js#L84-L85)

```diff
-       let wQ, LQ = "";
-       for (let qQ = FQ; qQ < QQ.length - FQ && (wQ = String.fromCharCode(QQ[qQ]), "\n" != wQ); qQ++) LQ += wQ;
+       return {
+         _renderables: kk,
+         _opaqueBindings: [],
+         _directBindings: [],
+         _transparentBindings: [],
+         _ob: [],
+         _lastVersion: ek
+       }
+     }
+ 
+     function dk(kk, ek, ik) {
+       kk.clr ??= !0;
+       const fk = kk.rt._descriptor,
+         Sk = kk.depth?._descriptor,
+         Pk = {
+           _colorFormat: fk.format,
+ ... (96 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L90-L134` → after: `L703-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L703-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/303.js#L703-L746) · [Before (L90-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/303.js#L90-L134)

```diff
-       let FQ = DQ(QQ, 0);
-       if ("#" != FQ[0] || "?" != FQ[1]) throw "Bad HDR Format.";
-       let wQ = !1,
-         LQ = !1,
-         qQ = 0;
-       do {
-         qQ += FQ.length + 1, FQ = DQ(QQ, qQ), "FORMAT=32-bit_rle_rgbe" == FQ ? LQ = !0 : 0 == FQ.length && (wQ = !0)
-       } while (!wQ);
-       if (!LQ) throw "HDR Bad header format, unsupported FORMAT";
-       qQ += FQ.length + 1, FQ = DQ(QQ, qQ);
-       const oQ = /^-Y (.*) \+X (.*)$/g.exec(FQ);
-       if (!oQ || oQ.length < 3) throw "HDR Bad header format, no size";
-       const kQ = parseInt(oQ[2]),
-         vQ = parseInt(oQ[1]);
-       if (kQ < 8 || kQ > 32767) throw "HDR Bad header format, unsupported size";
-       return qQ += FQ.length + 1, {
- ... (29 more removed lines; see GitHub link above)
+       let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk._renderables,
+         ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+         fk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
+         Sk = arguments.length > 4 ? arguments[4] : void 0;
+       const bk = kk._config,
+         rk = bk.rt,
+         Pk = kk._batchState,
+         mk = sk(ek, kk.bw._renderableVersion);
+       if (ik) {
+         const ek = (ek, ik) => {
+           ek && (ik || kk._ownsTargets || ek._eager) && (0, Dk.g)(ek, kk.engine)
+         };
+         ek(rk), rk._descriptor.samples > 1 && ek(bk.rst), ek(bk.depth, !0)
+       }
+       const {
+         _opaqueBindings: Mk,
+ ... (28 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L136-L137` → after: `L748-L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L748-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/303.js#L748-L749) · [Before (L136-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/303.js#L136-L137)

```diff
-         return MQ
-       }(QQ, FQ)
+         kk._renderPassDescriptor.depthStencilAttachment = bk
+       }(kk, rk), kk._updateContext.targetWidth = rk._width, kk._updateContext.targetHeight = rk._height), fk && (Object.assign(kk, mk), Pk?._release(kk.engine, [mk._batchState])), mk
```

#### 8. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L141-L148` → after: `L753-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L753-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/303.js#L753-L811) · [Before (L141-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/303.js#L141-L148)

```diff
-       let wQ = FQ.height;
-       const LQ = FQ.width;
-       let qQ, DQ, kQ, vQ, mQ, uQ = FQ.dataPosition;
-       const HQ = new ArrayBuffer(FQ.width * FQ.height * 4 * 3),
-         bQ = new Float32Array(HQ);
-       for (; wQ > 0;) {
-         for (mQ = 0; mQ < FQ.width; mQ++) qQ = QQ[uQ++], DQ = QQ[uQ++], kQ = QQ[uQ++], vQ = QQ[uQ++], oQ(bQ, qQ, DQ, kQ, vQ, (FQ.height - wQ) * LQ * 3 + 3 * mQ);
-         wQ--
+       const ik = kk.engine,
+         Dk = kk._config,
+         Sk = Dk.rt,
+         bk = kk.bw,
+         rk = kk._opaqueBindings,
+         Pk = kk._ob,
+         mk = kk._sceneBG;
+       if (function(kk, ek, ik, Dk) {
+           const fk = ek?.viewport;
+           if (!fk) return;
+           const Sk = Math.floor(fk.x * ik),
+             bk = Math.floor((1 - fk.y - fk.height) * Dk),
+             rk = Math.ceil((fk.x + fk.width) * ik) - Sk,
+             Pk = Math.ceil((1 - fk.y) * Dk) - bk;
+           kk.setViewport(Sk, bk, rk, Pk, 0, 1), kk.setScissorRect(Sk, bk, rk, Pk)
+         }(ek, Dk.cam ?? bk.camera, Sk._width, Sk._height), ek.setBindGroup(0, mk), kk._lastVis !== fk.b || !Pk.length) {
+ ... (43 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L152-L170` → after: `L815-L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L815-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/303.js#L815-L850) · [Before (L152-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/303.js#L152-L170)

```diff
-     qQ.FACE_LEFT = [new LQ.p(-1, -1, -1), new LQ.p(1, -1, -1), new LQ.p(-1, 1, -1), new LQ.p(1, 1, -1)], qQ.FACE_RIGHT = [new LQ.p(1, -1, 1), new LQ.p(-1, -1, 1), new LQ.p(1, 1, 1), new LQ.p(-1, 1, 1)], qQ.FACE_FRONT = [new LQ.p(1, -1, -1), new LQ.p(1, -1, 1), new LQ.p(1, 1, -1), … [truncated]
-     class uQ {
-       constructor() {
-         this.supportCascades = !1
-       }
-       loadCubeData() {
-         throw ".hdr not supported in Cube."
-       }
-       loadData(QQ, FQ, wQ) {
-         const LQ = new Uint8Array(QQ.buffer, QQ.byteOffset, QQ.byteLength),
-           qQ = kQ(LQ),
-           oQ = vQ(LQ, qQ),
-           DQ = qQ.width * qQ.height,
-           mQ = new Float32Array(4 * DQ);
-         for (let kQ = 0; kQ < DQ; kQ += 1) mQ[4 * kQ] = oQ[3 * kQ], mQ[4 * kQ + 1] = oQ[3 * kQ + 1], mQ[4 * kQ + 2] = oQ[3 * kQ + 2], mQ[4 * kQ + 3] = 1;
-         wQ(qQ.width, qQ.height, FQ.generateMipMaps, !1, (() => {
- ... (3 more removed lines; see GitHub link above)
+ 
+     function vk(kk) {
+       const ek = kk._materialSwapQueue;
+       if (!ek[0] || kk._runtimeBuilds?.w) return;
+       let Dk, fk, Sk;
+       const bk = kk._renderables;
+       for (const ik of ek) {
+         const ek = ik.material;
+         if (!ek) continue;
+         const rk = ik._runtimeThinBuild;
+         if (rk) {
+           fk = rk(kk, ik, fk);
+           continue
+         }
+         const Pk = kk._groups.get(ek._buildGroup),
+           mk = Pk?.r;
+ ... (20 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/304.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/304.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc)

#### 1. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/304.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/304.js#L4-L6)

```diff
-   41253: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       _KTXTextureLoader: () => xQ
+   41321: (kk, ek, ik) => {
+     ik.d(ek, {
+       parseShaderPack: () => Dk
```

#### 2. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L59-L94` → after: `L10-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L10-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/304.js#L10-L15) · [Before (L59-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/304.js#L59-L94)

```diff
-       let FQ;
-       "undefined" === typeof QQ && "undefined" !== typeof KTX2DECODER && (QQ = KTX2DECODER), onmessage = wQ => {
-         if (wQ.data) switch (wQ.data.action) {
-           case "init": {
-             const LQ = wQ.data.urls;
-             LQ && (LQ.jsDecoderModule && "undefined" === typeof QQ && (importScripts(LQ.jsDecoderModule), QQ = KTX2DECODER), uQ(LQ)), wQ.data.wasmBinaries && uQ(void 0, {
-               ...wQ.data.wasmBinaries,
-               jsDecoderModule: QQ
-             }), FQ = new QQ.KTX2Decoder, postMessage({
-               action: "init"
-             });
-             break
-           }
-           case "setDefaultDecoderOptions":
-             QQ.KTX2Decoder.DefaultDecoderOptions = wQ.data.options;
-             break;
- ... (20 more removed lines; see GitHub link above)
+       var ek, ik;
+       const Dk = kk.get("shaderPackUrl"),
+         fk = null !== (ek = kk.get("shaderPackMode")) && void 0 !== ek ? ek : "strict";
+       if (null === Dk) {
+         if (kk.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
+         return null
```

#### 3. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L96-L107` → after: `L17-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L17-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/304.js#L17-L25) · [Before (L96-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/304.js#L96-L107)

```diff
-     }! function(QQ) {
-       QQ[QQ.ETC1S = 0] = "ETC1S", QQ[QQ.UASTC4x4 = 1] = "UASTC4x4", QQ[QQ.RGBA32 = 2] = "RGBA32"
-     }(oQ || (oQ = {})),
-     function(QQ) {
-       QQ[QQ.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", QQ[QQ.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", QQ[QQ.BC7_RGBA = 1] = "BC7_RGBA", QQ[QQ.BC3_RGBA = 2] = "BC3_RGBA", QQ[QQ.BC1_RGB = 3] = "BC1_RGB", QQ[QQ.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", QQ[QQ.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB",  … [truncated]
-     }(DQ || (DQ = {})),
-     function(QQ) {
-       QQ[QQ.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", QQ[QQ.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", QQ[QQ.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", QQ[QQ.COMPRESSED_RGBA_S3TC_DXT5_EXT  … [truncated]
-     }(kQ || (kQ = {}));
-     class bQ {
-       static GetDefaultNumWorkers() {
-         return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
+       if ("lite" !== kk.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
+       if (! function(kk) {
+           return "strict" === kk || "allow" === kk
+         }(fk)) throw new Error(`Unknown shaderPackMode "${fk}" - use strict or allow`);
+       const Sk = (null !== (ik = kk.get("variants")) && void 0 !== ik ? ik : "").split(",").find((kk => kk.trim().startsWith("liteShaderPack")));
+       if (void 0 !== Sk) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${Sk.trim()}`);
+       return {
+         url: Dk,
+         mode: fk
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/305.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/305.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e)

#### 1. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/305.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/305.js#L4-L6)

```diff
-   41260: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       _TGATextureLoader: () => kQ
+   41347: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => mk
```

#### 2. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L8` → after: `L8-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L8-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/305.js#L8-L156) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/305.js#L8)

```diff
-     var LQ = wQ(38203);
+     var Dk = ik(36698),
+       fk = ik(36729),
+       Sk = ik(39558),
+       bk = ik(36703),
+       rk = ik(36874);
+     class Pk {
+       constructor(kk, ek, ik, Dk) {
+         this.name = kk, this.worldAxisForNormal = ek, this.worldAxisForFileX = ik, this.worldAxisForFileY = Dk
+       }
+     }
+     class mk {
+       static _NearestPow2Floor(kk) {
+         return kk <= 1 ? 1 : 1 << Math.floor(Math.log2(kk))
+       }
+       static ConvertCubeMapTextureToSphericalPolynomial(kk) {
+         if (!kk.isCube) return null;
+ ... (133 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L11-L24` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/305.js#L159) · [Before (L11-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/305.js#L11-L24)

```diff
-       let FQ = 0;
-       return {
-         id_length: QQ[FQ++],
-         colormap_type: QQ[FQ++],
-         image_type: QQ[FQ++],
-         colormap_index: QQ[FQ++] | QQ[FQ++] << 8,
-         colormap_length: QQ[FQ++] | QQ[FQ++] << 8,
-         colormap_size: QQ[FQ++],
-         origin: [QQ[FQ++] | QQ[FQ++] << 8, QQ[FQ++] | QQ[FQ++] << 8],
-         width: QQ[FQ++] | QQ[FQ++] << 8,
-         height: QQ[FQ++] | QQ[FQ++] << 8,
-         pixel_size: QQ[FQ++],
-         flags: QQ[17]
-       }
+       return kk.charCodeAt(0) + (kk.charCodeAt(1) << 8) + (kk.charCodeAt(2) << 16) + (kk.charCodeAt(3) << 24)
```

#### 4. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L26-L85` → after: `L161-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L161-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/305.js#L161-L427) · [Before (L26-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/305.js#L26-L85)

```diff
- 
-     function oQ(QQ, FQ) {
-       if (FQ.length < 19) return void LQ.c.Error("Unable to load TGA file - Not enough data to contain header");
-       let wQ = 18;
-       const oQ = qQ(FQ);
-       if (oQ.id_length + wQ > FQ.length) return void LQ.c.Error("Unable to load TGA file - Not enough data");
-       wQ += oQ.id_length;
-       let kQ, vQ = !1,
-         mQ = !1,
-         uQ = !1;
-       switch (oQ.image_type) {
-         case 9:
-           vQ = !0;
-         case 1:
-           mQ = !0;
-           break;
- ... (44 more removed lines; see GitHub link above)
+     const Mk = mk("DXT1"),
+       Kk = mk("DXT3"),
+       xk = mk("DXT5"),
+       nk = mk("DX10");
+     class Uk {
+       static GetDDSInfo(kk) {
+         const ek = new Int32Array(kk.buffer, kk.byteOffset, 31),
+           ik = new Int32Array(kk.buffer, kk.byteOffset, 35);
+         let Dk = 1;
+         ek[2] & rk && (Dk = Math.max(1, ek[7]));
+         const fk = ek[21],
+           Sk = fk === nk ? ik[32] : 0;
+         let bk = 0;
+         switch (fk) {
+           case 113:
+             bk = 2;
+ ... (251 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L87-L172` → after: `L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/305.js#L429) · [Before (L87-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/305.js#L87-L172)

```diff
-     const DQ = {
-       GetTGAHeader: qQ,
-       UploadContent: oQ,
-       _getImageData8bits: function(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ) {
-         const mQ = wQ,
-           uQ = FQ,
-           HQ = QQ.width,
-           bQ = QQ.height;
-         let YQ, xQ, AQ, tQ = 0;
-         const eQ = new Uint8Array(HQ * bQ * 4);
-         for (AQ = LQ; AQ !== oQ; AQ += qQ)
-           for (xQ = DQ; xQ !== vQ; xQ += kQ, tQ++) YQ = mQ[tQ], eQ[4 * (xQ + HQ * AQ) + 3] = 255, eQ[4 * (xQ + HQ * AQ) + 2] = uQ[3 * YQ + 0], eQ[4 * (xQ + HQ * AQ) + 1] = uQ[3 * YQ + 1], eQ[4 * (xQ + HQ * AQ) + 0] = uQ[3 * YQ + 2];
-         return eQ
-       },
-       _getImageData16bits: function(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ) {
-         const mQ = wQ,
- ... (70 more removed lines; see GitHub link above)
+     Uk.StoreLODInAlphaChannel = !1
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/306.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/306.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2)

#### 1. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/306.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/306.js#L2)

```diff
- export const ids = [306];
+ export const ids = [305, 306];
```

#### 2. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/306.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/306.js#L4)

```diff
-   41265: (QQ, FQ, wQ) => {
+   41358: (kk, ek, ik) => {
```

#### 3. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/306.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/306.js#L6-L7)

```diff
-       ReadExrDataAsync: () => HF,
-       _ExrTextureLoader: () => uF
+       _DDSTextureLoader: () => Sk
```

#### 4. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L9-L170` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/306.js#L8-L12) · [Before (L9-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/306.js#L9-L170)

```diff
-     var LQ = wQ(38203),
-       qQ = wQ(36729),
-       oQ = wQ(39475);
-     const DQ = 4,
-       kQ = 4,
-       vQ = 1,
-       mQ = 2,
-       uQ = 8,
-       HQ = 65536,
-       bQ = HQ >> 3,
-       YQ = 14,
-       xQ = 65537,
-       AQ = 1 << YQ,
-       tQ = AQ - 1,
-       eQ = 59,
-       MQ = 63,
- ... (146 more removed lines; see GitHub link above)
+     var Dk = ik(39558),
+       fk = ik(41338);
+     class Sk {
+       constructor() {
+         this.supportCascades = !0
```

#### 5. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L172-L207` → after: `L14-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L14-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/306.js#L14-L32) · [Before (L172-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/306.js#L172-L207)

```diff
-     }
- 
-     function KQ(QQ, FQ) {
-       let wQ = 0,
-         LQ = Math.floor((QQ.length + 1) / 2),
-         qQ = 0;
-       const oQ = QQ.length - 1;
-       for (; !(qQ > oQ) && (FQ[qQ++] = QQ[wQ++], !(qQ > oQ));) FQ[qQ++] = QQ[LQ++]
-     }! function(QQ) {
-       QQ[QQ.NO_COMPRESSION = 0] = "NO_COMPRESSION", QQ[QQ.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", QQ[QQ.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", QQ[QQ.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", QQ[QQ.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", QQ[QQ.PXR24_COMPRESSION = 5] = "PX … [truncated]
-     }(pQ || (pQ = {})),
-     function(QQ) {
-       QQ[QQ.INCREASING_Y = 0] = "INCREASING_Y", QQ[QQ.DECREASING_Y = 1] = "DECREASING_Y"
-     }(cQ || (cQ = {}));
-     const zQ = 20000630;
- 
- ... (20 more removed lines; see GitHub link above)
+       loadCubeData(kk, ek, ik, Sk) {
+         const bk = ek.JU();
+         let rk, Pk = !1,
+           mk = 1e3;
+         if (Array.isArray(kk))
+           for (let Dk = 0; Dk < kk.length; Dk++) {
+             const ik = kk[Dk];
+             rk = fk.DDSTools.GetDDSInfo(ik), ek.width = rk.width, ek.height = rk.height, Pk = (rk.isRGB || rk.isLuminance || rk.mipmapCount > 1) && ek.generateMipMaps, bk._unpackFlipY(rk.isCompressed), fk.DDSTools.UploadDDSLevels(bk, ek, ik, rk, Pk, 6, -1, Dk), rk.isFourCC || 1 ! … [truncated]
+           } else {
+             const Sk = kk;
+             rk = fk.DDSTools.GetDDSInfo(Sk), ek.width = rk.width, ek.height = rk.height, ik && (rk.sphericalPolynomial = new Dk.f), Pk = (rk.isRGB || rk.isLuminance || rk.mipmapCount > 1) && ek.generateMipMaps, bk._unpackFlipY(rk.isCompressed), fk.DDSTools.UploadDDSLevels(bk, ek, … [truncated]
+           }
+         bk._setCubeMapTextureParams(ek, Pk, mk), ek.isReady = !0, ek.onLoadedObservable.notifyObservers(ek), ek.onLoadedObservable.clear(), Sk && Sk({
+           isDDS: !0,
+           width: ek.width,
+           info: rk,
+ ... (3 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L209-L213` → after: `L34-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L34-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/306.js#L34-L39) · [Before (L209-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/306.js#L209-L213)

```diff
-       if (0 != (-5 & qQ)) throw new Error("Unsupported file format");
-       return {
-         version: wQ,
-         spec: oQ,
-         ...DQ
+       loadData(kk, ek, ik) {
+         const Dk = fk.DDSTools.GetDDSInfo(kk),
+           Sk = (Dk.isRGB || Dk.isLuminance || Dk.mipmapCount > 1) && ek.generateMipMaps && Math.max(Dk.width, Dk.height) >> Dk.mipmapCount - 1 === 1;
+         ik(Dk.width, Dk.height, Sk, Dk.isFourCC, (() => {
+           fk.DDSTools.UploadDDSLevels(ek.JU(), ek, kk, Dk, Sk, 1)
+         }))
```

#### 7. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L216-L224` → after: `L42-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L42-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/306.js#L42-L54) · [Before (L216-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/306.js#L216-L224)

```diff
-     const jQ = 32768,
-       aQ = 65535;
- 
-     function XQ(QQ, FQ, wQ, LQ, qQ) {
-       for (; wQ < QQ;) FQ = FQ << 8 | OQ(LQ, qQ), wQ += 8;
-       return {
-         l: FQ >> (wQ -= QQ) & (1 << QQ) - 1,
-         c: FQ,
-         lc: wQ
+   },
+   41347: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => mk
+     });
+     var Dk = ik(36698),
+       fk = ik(36729),
+       Sk = ik(39558),
+       bk = ik(36703),
+       rk = ik(36874);
+     class Pk {
+       constructor(kk, ek, ik, Dk) {
+         this.name = kk, this.worldAxisForNormal = ek, this.worldAxisForFileX = ik, this.worldAxisForFileY = Dk
```

#### 8. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L227-L231` → after: `L57-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/306.js#L57-L59) · [Before (L227-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/306.js#L227-L231)

```diff
- 
-     function fQ(QQ, FQ, wQ, LQ) {
-       return {
-         c: QQ = QQ << 8 | OQ(wQ, LQ),
-         lc: FQ += 8
+     class mk {
+       static _NearestPow2Floor(kk) {
+         return kk <= 1 ? 1 : 1 << Math.floor(Math.log2(kk))
```

#### 9. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L233-L247` → after: `L61-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L61-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/306.js#L61-L100) · [Before (L233-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/306.js#L233-L247)

```diff
-     }
- 
-     function VQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ) {
-       if (QQ == FQ) {
-         if (LQ < 8) {
-           const QQ = fQ(wQ, LQ, qQ, oQ);
-           wQ = QQ.c, LQ = QQ.lc
-         }
-         let QQ = wQ >> (LQ -= 8);
-         if (QQ = new Uint8Array([QQ])[0], kQ.value + QQ > vQ) return null;
-         const FQ = DQ[kQ.value - 1];
-         for (; QQ-- > 0;) DQ[kQ.value++] = FQ
-       } else {
-         if (!(kQ.value < vQ)) return null;
-         DQ[kQ.value++] = QQ
+       static ConvertCubeMapTextureToSphericalPolynomial(kk) {
+         if (!kk.isCube) return null;
+         kk.XF()?.JU().flushFramebuffer();
+         const ek = kk.getSize().width,
+           ik = kk._sphericalPolynomialTargetSize,
+           Dk = ik > 0 ? this._NearestPow2Floor(ik) : 0,
+           fk = !kk.noMipmap && !0 === kk._texture?.generateMipMaps,
+           Sk = Dk > 0 && Dk < ek && fk,
+           bk = Sk ? Math.max(0, Math.round(Math.log2(ek / Dk))) : 0,
+           rk = Sk ? Math.max(1, Math.floor(ek / Math.pow(2, bk))) : ek,
+           Pk = kk.readPixels(0, bk, void 0, !1),
+           mk = kk.readPixels(1, bk, void 0, !1);
+         let Mk, Kk;
+         kk.isRenderTarget ? (Mk = kk.readPixels(3, bk, void 0, !1), Kk = kk.readPixels(2, bk, void 0, !1)) : (Mk = kk.readPixels(2, bk, void 0, !1), Kk = kk.readPixels(3, bk, void 0, !1));
+         const xk = kk.readPixels(4, bk, void 0, !1),
+           nk = kk.readPixels(5, bk, void 0, !1),
+ ... (24 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L249-L251` → after: `L102-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/306.js#L102-L103) · [Before (L249-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/306.js#L249-L251)

```diff
-       return {
-         c: wQ,
-         lc: LQ
+       static _AreaElement(kk, ek) {
+         return Math.atan2(kk * ek, Math.sqrt(kk * kk + ek * ek + 1))
```

#### 11. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L253-L332` → after: `L105-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L105-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/306.js#L105-L122) · [Before (L253-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/306.js#L253-L332)

```diff
-     }
-     const hQ = new Array(59);
- 
-     function JQ(QQ, FQ, wQ, LQ, qQ, oQ) {
-       const DQ = FQ;
-       let kQ = 0,
-         vQ = 0;
-       for (; LQ <= qQ; LQ++) {
-         if (DQ.value - FQ.value > wQ) return;
-         let mQ = XQ(6, kQ, vQ, QQ, DQ);
-         const uQ = mQ.l;
-         if (kQ = mQ.c, vQ = mQ.lc, oQ[LQ] = uQ, uQ == MQ) {
-           if (DQ.value - FQ.value > wQ) throw new Error("Error in HufUnpackEncTable");
-           mQ = XQ(8, kQ, vQ, QQ, DQ);
-           let uQ = mQ.l + GQ;
-           if (kQ = mQ.c, vQ = mQ.lc, LQ + uQ > qQ + 1) throw new Error("Error in HufUnpackEncTable");
- ... (64 more removed lines; see GitHub link above)
+       static _DownsampleFace(kk, ek, ik, Dk) {
+         const fk = kk instanceof Float32Array ? kk : Float32Array.from(kk),
+           Sk = ik * ik * Dk,
+           bk = new Float32Array(Sk),
+           rk = ek / ik,
+           Pk = 1 / (rk * rk);
+         for (let Mk = 0; Mk < ik; Mk++) {
+           const kk = Math.floor(Mk * rk),
+             Sk = Math.floor((Mk + 1) * rk);
+           for (let mk = 0; mk < ik; mk++) {
+             const Kk = Math.floor(mk * rk),
+               xk = Math.floor((mk + 1) * rk),
+               nk = (Mk * ik + mk) * Dk;
+             for (let ik = 0; ik < Dk; ik++) {
+               let rk = 0;
+               for (let bk = kk; bk < Sk; bk++)
+ ... (2 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L336-L364` → after: `L126-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L126-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/306.js#L126-L142) · [Before (L336-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/306.js#L336-L364)

```diff
-       }(uQ, kQ, vQ, HQ),
-       function(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ) {
-         let mQ = 0,
-           uQ = 0;
-         const HQ = DQ,
-           bQ = Math.trunc(LQ.value + (qQ + 7) / 8);
-         for (; LQ.value < bQ;) {
-           let qQ = fQ(mQ, uQ, wQ, LQ);
-           for (mQ = qQ.c, uQ = qQ.lc; uQ >= YQ;) {
-             const DQ = FQ[mQ >> uQ - YQ & tQ];
-             if (DQ.len) {
-               uQ -= DQ.len;
-               const QQ = VQ(DQ.lit, oQ, mQ, uQ, wQ, LQ, kQ, vQ, HQ);
-               QQ && (mQ = QQ.c, uQ = QQ.lc)
-             } else {
-               if (!DQ.p) throw new Error("hufDecode issues");
- ... (13 more removed lines; see GitHub link above)
+         if (kk instanceof Float32Array) return bk;
+         const mk = new(0, kk.constructor)(Sk);
+         for (let Mk = 0; Mk < Sk; Mk++) mk[Mk] = bk[Mk] + .5 | 0;
+         return mk
+       }
+       static ConvertCubeMapToSphericalPolynomial(kk) {
+         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         const ik = ek > 0 ? this._NearestPow2Floor(ek) : 0;
+         if (ik > 0 && kk.size > ik) {
+           const ek = 5 === kk.format ? 4 : 3,
+             Dk = ["right", "left", "up", "down", "front", "back"],
+             fk = {};
+           for (const Sk of Dk) fk[Sk] = this._DownsampleFace(kk[Sk], kk.size, ik, ek);
+           kk = {
+             ...kk,
+             ...fk,
+ ... (1 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L367-L374` → after: `L145-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L145-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/306.js#L145-L177) · [Before (L367-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/306.js#L367-L374)

```diff
-         const xQ = 8 - qQ & 7;
-         for (mQ >>= xQ, uQ -= xQ; uQ > 0;) {
-           const QQ = FQ[mQ << YQ - uQ & tQ];
-           if (!QQ.len) throw new Error("HufDecode issues");
-           {
-             uQ -= QQ.len;
-             const FQ = VQ(QQ.lit, oQ, mQ, uQ, wQ, LQ, kQ, vQ, HQ);
-             FQ && (mQ = FQ.c, uQ = FQ.lc)
+         const Dk = new Sk.b;
+         let Pk = 0;
+         const mk = 2 / kk.size,
+           Mk = mk,
+           Kk = .5 * mk,
+           xk = Kk - 1;
+         for (let Sk = 0; Sk < 6; Sk++) {
+           const ek = this._FileFaces[Sk],
+             ik = kk[ek.name];
+           let nk = xk;
+           const Uk = 5 === kk.format ? 4 : 3;
+           for (let Sk = 0; Sk < kk.size; Sk++) {
+             let Hk = xk;
+             for (let Mk = 0; Mk < kk.size; Mk++) {
+               const xk = ek.worldAxisForFileX.scale(Hk).add(ek.worldAxisForFileY.scale(nk)).add(ek.worldAxisForNormal);
+               xk.normalize();
+ ... (17 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L377-L397` → after: `L180-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L180-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/306.js#L180-L181) · [Before (L377-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/306.js#L377-L397)

```diff
-       }(uQ, HQ, QQ, wQ, mQ, vQ, oQ, qQ, {
-         value: 0
-       })
-     }
- 
-     function PQ(QQ) {
-       return 65535 & QQ
-     }
- 
-     function ZQ(QQ) {
-       const FQ = PQ(QQ);
-       return FQ > 32767 ? FQ - 65536 : FQ
-     }
- 
-     function yQ(QQ, FQ) {
-       const wQ = ZQ(QQ),
- ... (5 more removed lines; see GitHub link above)
+         const nk = 6 * (4 * Math.PI) / 6 / Pk;
+         return Dk.scaleInPlace(nk), Dk.convertIncidentRadianceToIrradiance(), Dk.convertIrradianceToLambertianRadiance(), Sk.f.FromHarmonics(Dk)
```

#### 15. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L401-L408` → after: `L197-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/306.js#L197-L198) · [Before (L401-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/306.js#L401-L408)

```diff
-     function BQ(QQ, FQ) {
-       const wQ = PQ(QQ),
-         LQ = PQ(FQ),
-         qQ = wQ - (LQ >> 1) & aQ;
-       return {
-         a: LQ + qQ - jQ & aQ,
-         b: qQ
-       }
+     function mk(kk) {
+       return kk.charCodeAt(0) + (kk.charCodeAt(1) << 8) + (kk.charCodeAt(2) << 16) + (kk.charCodeAt(3) << 24)
```

#### 16. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L410-L436` → after: `L200-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L200-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/306.js#L200-L227) · [Before (L410-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/306.js#L410-L436)

```diff
- 
-     function dQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
-       const kQ = DQ < 16384,
-         vQ = wQ > qQ ? qQ : wQ;
-       let mQ, uQ, HQ = 1;
-       for (; HQ <= vQ;) HQ <<= 1;
-       for (HQ >>= 1, mQ = HQ, HQ >>= 1; HQ >= 1;) {
-         uQ = 0;
-         const DQ = uQ + oQ * (qQ - mQ),
-           vQ = oQ * HQ,
-           bQ = oQ * mQ,
-           YQ = LQ * HQ,
-           xQ = LQ * mQ;
-         let AQ, tQ, eQ, MQ;
-         for (; uQ <= DQ; uQ += bQ) {
-           let qQ = uQ;
- ... (11 more removed lines; see GitHub link above)
+     const Mk = mk("DXT1"),
+       Kk = mk("DXT3"),
+       xk = mk("DXT5"),
+       nk = mk("DX10");
+     class Uk {
+       static GetDDSInfo(kk) {
+         const ek = new Int32Array(kk.buffer, kk.byteOffset, 31),
+           ik = new Int32Array(kk.buffer, kk.byteOffset, 35);
+         let Dk = 1;
+         ek[2] & rk && (Dk = Math.max(1, ek[7]));
+         const fk = ek[21],
+           Sk = fk === nk ? ik[32] : 0;
+         let bk = 0;
+         switch (fk) {
+           case 113:
+             bk = 2;
+ ... (12 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L445-L452` → after: `L230-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L230-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/306.js#L230-L240) · [Before (L445-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/306.js#L445-L452)

```diff
-         if (qQ & HQ) {
-           let qQ = uQ;
-           const oQ = uQ + LQ * (wQ - mQ);
-           for (; qQ <= oQ; qQ += xQ) {
-             const wQ = qQ + YQ;
-             let LQ;
-             LQ = kQ ? yQ(QQ[qQ + FQ], QQ[wQ + FQ]) : BQ(QQ[qQ + FQ], QQ[wQ + FQ]), AQ = LQ.a, QQ[wQ + FQ] = LQ.b, QQ[qQ + FQ] = AQ
-           }
+         return {
+           width: ek[4],
+           height: ek[3],
+           mipmapCount: Dk,
+           isFourCC: 4 === (4 & ek[20]),
+           isRGB: 64 === (64 & ek[20]),
+           isLuminance: (ek[20] & Pk) === Pk,
+           isCube: 512 === (512 & ek[28]),
+           isCompressed: fk === Mk || fk === Kk || fk === xk,
+           dxgiFormat: Sk,
+           textureType: bk
```

#### 18. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L456-L467` → after: `L243-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L243-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/306.js#L243-L257) · [Before (L456-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/306.js#L456-L467)

```diff
-       return uQ
-     }
- 
-     function QF(QQ) {
-       return new DataView(QQ.array.buffer, QQ.offset.value, QQ.size)
-     }
- 
-     function FF(QQ) {
-       const FQ = QQ.viewer.buffer.slice(QQ.offset.value, QQ.offset.value + QQ.size),
-         wQ = new Uint8Array(function(QQ) {
-           let FQ = QQ.byteLength;
-           const wQ = [];
+       static _GetHalfFloatAsFloatRGBAArrayBuffer(kk, ek, ik, Dk, fk, Sk) {
+         const rk = new Float32Array(Dk),
+           Pk = new Uint16Array(fk, ik);
+         let mk = 0;
+         for (let Mk = 0; Mk < ek; Mk++)
+           for (let ek = 0; ek < kk; ek++) {
+             const ik = 4 * (ek + Mk * kk);
+             rk[mk] = (0, bk.e)(Pk[ik]), rk[mk + 1] = (0, bk.e)(Pk[ik + 1]), rk[mk + 2] = (0, bk.e)(Pk[ik + 2]), Uk.StoreLODInAlphaChannel ? rk[mk + 3] = Sk : rk[mk + 3] = (0, bk.e)(Pk[ik + 3]), mk += 4
+           }
+         return rk
+       }
+       static _GetHalfFloatRGBAArrayBuffer(kk, ek, ik, Dk, fk, Sk) {
+         if (Uk.StoreLODInAlphaChannel) {
+           const rk = new Uint16Array(Dk),
+             Pk = new Uint16Array(fk, ik);
```

#### 19. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L469-L480` → after: `L259-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L259-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/306.js#L259-L262) · [Before (L469-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/306.js#L469-L480)

```diff
-           const qQ = new DataView(QQ);
-           for (; FQ > 0;) {
-             const QQ = qQ.getInt8(LQ++);
-             if (QQ < 0) {
-               const oQ = -QQ;
-               FQ -= oQ + 1;
-               for (let QQ = 0; QQ < oQ; QQ++) wQ.push(qQ.getUint8(LQ++))
-             } else {
-               const oQ = QQ;
-               FQ -= 2;
-               const DQ = qQ.getUint8(LQ++);
-               for (let QQ = 0; QQ < oQ + 1; QQ++) wQ.push(DQ)
+           for (let ik = 0; ik < ek; ik++)
+             for (let ek = 0; ek < kk; ek++) {
+               const Dk = 4 * (ek + ik * kk);
+               rk[mk] = Pk[Dk], rk[mk + 1] = Pk[Dk + 1], rk[mk + 2] = Pk[Dk + 2], rk[mk + 3] = (0, bk.i)(Sk), mk += 4
```

#### 20. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L521-L540` → after: `L266-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L266-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/306.js#L266-L271) · [Before (L521-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/306.js#L521-L540)

```diff
-       return new DataView(qQ.buffer)
-     }
- 
-     function qF(QQ) {
-       const FQ = QQ.viewer,
-         wQ = {
-           value: QQ.offset.value
-         },
-         LQ = new Uint16Array(QQ.width * QQ.scanlineBlockSize * (QQ.channels * QQ.type)),
-         qQ = new Uint8Array(bQ);
-       let oQ = 0;
-       const DQ = new Array(QQ.channels);
-       for (let mQ = 0; mQ < QQ.channels; mQ++) DQ[mQ] = {}, DQ[mQ].start = oQ, DQ[mQ].end = DQ[mQ].start, DQ[mQ].nx = QQ.width, DQ[mQ].ny = QQ.lines, DQ[mQ].size = QQ.type, oQ += DQ[mQ].nx * DQ[mQ].ny * DQ[mQ].size;
-       const kQ = RQ(FQ, wQ),
-         vQ = RQ(FQ, wQ);
-       if (vQ >= bQ) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
- ... (4 more removed lines; see GitHub link above)
+         return new Uint16Array(fk, ik, Dk)
+       }
+       static _GetFloatRGBAArrayBuffer(kk, ek, ik, Dk, fk, Sk) {
+         if (Uk.StoreLODInAlphaChannel) {
+           const bk = new Float32Array(Dk),
+             rk = new Float32Array(fk, ik);
```

#### 21. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L542-L544` → after: `L273-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L273-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/306.js#L273-L277) · [Before (L542-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/306.js#L542-L544)

```diff
-           for (let qQ = 0; qQ < HQ; ++qQ)(0 == qQ || QQ[qQ >> 3] & 1 << (7 & qQ)) && (FQ[wQ++] = qQ);
-           const LQ = wQ - 1;
-           for (; wQ < HQ;) FQ[wQ++] = 0;
+           for (let ik = 0; ik < ek; ik++)
+             for (let ek = 0; ek < kk; ek++) {
+               const Dk = 4 * (ek + ik * kk);
+               bk[Pk] = rk[Dk], bk[Pk + 1] = rk[Dk + 1], bk[Pk + 2] = rk[Dk + 2], bk[Pk + 3] = Sk, Pk += 4
+             }
```

#### 22. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L564-L628` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/306.js#L280) · [Before (L564-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/306.js#L564-L628)

```diff
-       return new DataView(tQ.buffer)
-     }
-     var oF, DF = wQ(39505);
-     ! function(QQ) {
-       QQ[QQ.Float = 0] = "Float", QQ[QQ.HalfFloat = 1] = "HalfFloat"
-     }(oF || (oF = {}));
-     class kF {}
-     async function vF(QQ, FQ, wQ, LQ) {
-       const qQ = {
-         size: 0,
-         viewer: FQ,
-         array: new Uint8Array(FQ.buffer),
-         offset: wQ,
-         width: QQ.dataWindow.xMax - QQ.dataWindow.xMin + 1,
-         height: QQ.dataWindow.yMax - QQ.dataWindow.yMin + 1,
-         channels: QQ.channels.length,
- ... (49 more removed lines; see GitHub link above)
+         return new Float32Array(fk, ik, Dk)
```

#### 23. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L630-L670` → after: `L282-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L282-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/306.js#L282-L288) · [Before (L630-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/306.js#L630-L670)

```diff
-       let DQ = !1;
-       if (oQ.R && oQ.G && oQ.B && oQ.A) qQ.outputChannels = 4, qQ.decodeChannels = {
-         R: 0,
-         G: 1,
-         B: 2,
-         A: 3
-       };
-       else if (oQ.R && oQ.G && oQ.B) DQ = !0, qQ.outputChannels = 4, qQ.decodeChannels = {
-         R: 0,
-         G: 1,
-         B: 2,
-         A: 3
-       };
-       else if (oQ.R && oQ.G) qQ.outputChannels = 2, qQ.decodeChannels = {
-         R: 0,
-         G: 1
- ... (25 more removed lines; see GitHub link above)
+       static _GetFloatAsHalfFloatRGBAArrayBuffer(kk, ek, ik, Dk, fk, Sk) {
+         const rk = new Uint16Array(Dk),
+           Pk = new Float32Array(fk, ik);
+         let mk = 0;
+         for (let Mk = 0; Mk < ek; Mk++)
+           for (let ek = 0; ek < kk; ek++) rk[mk] = (0, bk.i)(Pk[mk]), rk[mk + 1] = (0, bk.i)(Pk[mk + 1]), rk[mk + 2] = (0, bk.i)(Pk[mk + 2]), Uk.StoreLODInAlphaChannel ? rk[mk + 3] = (0, bk.i)(Sk) : rk[mk + 3] = (0, bk.i)(Pk[mk + 3]), mk += 4;
+         return rk
```

#### 24. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L672-L683` → after: `L290-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L290-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/306.js#L290-L299) · [Before (L672-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/306.js#L672-L683)

```diff
-       qQ.blockCount = qQ.height / qQ.scanlineBlockSize;
-       for (let kQ = 0; kQ < qQ.blockCount; kQ++) sQ(FQ, wQ);
-       const vQ = qQ.width * qQ.height * qQ.outputChannels;
-       switch (LQ) {
-         case oF.Float:
-           qQ.byteArray = new Float32Array(vQ), qQ.textureType = 1, DQ && qQ.byteArray.fill(1, 0, vQ);
-           break;
-         case oF.HalfFloat:
-           qQ.byteArray = new Uint16Array(vQ), qQ.textureType = 2, DQ && qQ.byteArray.fill(15360, 0, vQ);
-           break;
-         default:
-           throw new Error("Unsupported type: " + LQ)
+       static _GetFloatAsUIntRGBAArrayBuffer(kk, ek, ik, fk, Sk, bk) {
+         const rk = new Uint8Array(fk),
+           Pk = new Float32Array(Sk, ik);
+         let mk = 0;
+         for (let Mk = 0; Mk < ek; Mk++)
+           for (let ek = 0; ek < kk; ek++) {
+             const ik = 4 * (ek + Mk * kk);
+             rk[mk] = 255 * (0, Dk.Clamp)(Pk[ik]), rk[mk + 1] = 255 * (0, Dk.Clamp)(Pk[ik + 1]), rk[mk + 2] = 255 * (0, Dk.Clamp)(Pk[ik + 2]), Uk.StoreLODInAlphaChannel ? rk[mk + 3] = bk : rk[mk + 3] = 255 * (0, Dk.Clamp)(Pk[ik + 3]), mk += 4
+           }
+         return rk
```

#### 25. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L685-L715` → after: `L301-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L301-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/306.js#L301-L308) · [Before (L685-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/306.js#L685-L715)

```diff
-       let uQ = 0;
-       for (const kQ of QQ.channels) void 0 !== qQ.decodeChannels[kQ.name] && (qQ.channelLineOffsets[kQ.name] = uQ * qQ.width), uQ += 2 * kQ.pixelType;
-       return qQ.bytesPerLine = qQ.width * uQ, qQ.outLineWidth = qQ.width * qQ.outputChannels, "INCREASING_Y" === QQ.lineOrder ? qQ.scanOrder = QQ => QQ : qQ.scanOrder = QQ => qQ.height - 1 - QQ, 4 == qQ.outputChannels ? (qQ.format = 5, qQ.linearSpace = !0) : (qQ.format = 6, qQ.li … [truncated]
-     }
- 
-     function mF(QQ, FQ, wQ, LQ) {
-       const qQ = {
-         value: 0
-       };
-       for (let oQ = 0; oQ < QQ.height / QQ.scanlineBlockSize; oQ++) {
-         const DQ = SQ(wQ, LQ) - FQ.dataWindow.yMin;
-         QQ.size = iQ(wQ, LQ), QQ.lines = DQ + QQ.scanlineBlockSize > QQ.height ? QQ.height - DQ : QQ.scanlineBlockSize;
-         const kQ = QQ.size < QQ.lines * QQ.bytesPerLine && QQ.uncompress ? QQ.uncompress(QQ) : QF(QQ);
-         LQ.value += QQ.size;
-         for (let wQ = 0; wQ < QQ.scanlineBlockSize; wQ++) {
-           const LQ = oQ * QQ.scanlineBlockSize,
- ... (15 more removed lines; see GitHub link above)
+       static _GetHalfFloatAsUIntRGBAArrayBuffer(kk, ek, ik, fk, Sk, rk) {
+         const Pk = new Uint8Array(fk),
+           mk = new Uint16Array(Sk, ik);
+         let Mk = 0;
+         for (let Kk = 0; Kk < ek; Kk++)
+           for (let ek = 0; ek < kk; ek++) {
+             const ik = 4 * (ek + Kk * kk);
+             Pk[Mk] = 255 * (0, Dk.Clamp)((0, bk.e)(mk[ik])), Pk[Mk + 1] = 255 * (0, Dk.Clamp)((0, bk.e)(mk[ik + 1])), Pk[Mk + 2] = 255 * (0, Dk.Clamp)((0, bk.e)(mk[ik + 2])), Uk.StoreLODInAlphaChannel ? Pk[Mk + 3] = rk : Pk[Mk + 3] = 255 * (0, Dk.Clamp)((0, bk.e)(mk[ik + 3])), Mk … [truncated]
```

#### 26. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L717` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/306.js#L310) · [Before (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/306.js#L717)

```diff
-         }
+         return Pk
```

#### 27. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L719-L723` → after: `L312-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L312-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/306.js#L312-L321) · [Before (L719-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/306.js#L719-L723)

```diff
-     }
-     kF.DefaultOutputType = oF.HalfFloat, kF.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
-     class uF {
-       constructor() {
-         this.supportCascades = !1
+       static _GetRGBAArrayBuffer(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk) {
+         const mk = new Uint8Array(Dk),
+           Mk = new Uint8Array(fk, ik);
+         let Kk = 0;
+         for (let xk = 0; xk < ek; xk++)
+           for (let ek = 0; ek < kk; ek++) {
+             const ik = 4 * (ek + xk * kk);
+             mk[Kk] = Mk[ik + Sk], mk[Kk + 1] = Mk[ik + bk], mk[Kk + 2] = Mk[ik + rk], mk[Kk + 3] = Mk[ik + Pk], Kk += 4
+           }
+         return mk
```

#### 28. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L725-L726` → after: `L323-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/306.js#L323-L324) · [Before (L725-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/306.js#L725-L726)

```diff
-       loadCubeData(QQ, FQ, wQ, LQ, qQ) {
-         throw ".exr not supported in Cube."
+       static _ExtractLongWordOrder(kk) {
+         return 0 === kk || 255 === kk || -16777216 === kk ? 0 : 1 + Uk._ExtractLongWordOrder(kk >> 8)
```

#### 29. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L728-L744` → after: `L326-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L326-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/306.js#L326-L335) · [Before (L728-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/306.js#L728-L744)

```diff
-       loadData(QQ, FQ, wQ) {
-         const qQ = new DataView(QQ.buffer),
-           oQ = {
-             value: 0
-           },
-           DQ = lQ(qQ, oQ);
-         vF(DQ, qQ, oQ, kF.DefaultOutputType).then((QQ => {
-           mF(QQ, DQ, qQ, oQ);
-           const LQ = DQ.dataWindow.xMax - DQ.dataWindow.xMin + 1,
-             kQ = DQ.dataWindow.yMax - DQ.dataWindow.yMin + 1;
-           wQ(LQ, kQ, FQ.generateMipMaps, !1, (() => {
-             const wQ = FQ.Wx();
-             FQ.format = DQ.format, FQ.type = QQ.textureType, FQ.invertY = !1, FQ._gammaSpace = !DQ.linearSpace, QQ.byteArray && wQ._uploadDataToTextureDirectly(FQ, QQ.byteArray, 0, 0, void 0, !0)
-           }))
-         })).catch((QQ => {
-           LQ.c.Error("Failed to load EXR texture: ", QQ)
- ... (1 more removed lines; see GitHub link above)
+       static _GetRGBArrayBuffer(kk, ek, ik, Dk, fk, Sk, bk, rk) {
+         const Pk = new Uint8Array(Dk),
+           mk = new Uint8Array(fk, ik);
+         let Mk = 0;
+         for (let Kk = 0; Kk < ek; Kk++)
+           for (let ek = 0; ek < kk; ek++) {
+             const ik = 3 * (ek + Kk * kk);
+             Pk[Mk] = mk[ik + Sk], Pk[Mk + 1] = mk[ik + bk], Pk[Mk + 2] = mk[ik + rk], Mk += 3
+           }
+         return Pk
```

#### 30. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L746-L765` → after: `L337-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L337-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/306.js#L337-L346) · [Before (L746-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/306.js#L746-L765)

```diff
-     }
-     async function HF(QQ) {
-       const FQ = new DataView(QQ),
-         wQ = {
-           value: 0
-         },
-         qQ = lQ(FQ, wQ);
-       try {
-         const QQ = await vF(qQ, FQ, wQ, oF.Float);
-         return mF(QQ, qQ, FQ, wQ), QQ.byteArray ? {
-           width: qQ.dataWindow.xMax - qQ.dataWindow.xMin + 1,
-           height: qQ.dataWindow.yMax - qQ.dataWindow.yMin + 1,
-           data: new Float32Array(QQ.byteArray)
-         } : (LQ.c.Error("Failed to decode EXR data: No byte array available."), {
-           width: 0,
-           height: 0,
- ... (4 more removed lines; see GitHub link above)
+       static _GetLuminanceArrayBuffer(kk, ek, ik, Dk, fk) {
+         const Sk = new Uint8Array(Dk),
+           bk = new Uint8Array(fk, ik);
+         let rk = 0;
+         for (let Pk = 0; Pk < ek; Pk++)
+           for (let ek = 0; ek < kk; ek++) {
+             const ik = ek + Pk * kk;
+             Sk[rk] = bk[ik], rk++
+           }
+         return Sk
```

#### 31. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L767-L770` → after: `L348-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L348-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/306.js#L348-L465) · [Before (L767-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/306.js#L767-L770)

```diff
-       return {
-         width: 0,
-         height: 0,
-         data: null
+       static UploadDDSLevels(kk, ek, ik, Dk, bk, Pk) {
+         let mk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
+           Hk = arguments.length > 7 ? arguments[7] : void 0,
+           wk = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
+           lk = null;
+         Dk.sphericalPolynomial && (lk = []);
+         const pk = !!kk.getCaps().s3tc;
+         ek.generateMipMaps = bk;
+         const yk = new Int32Array(ik.buffer, ik.byteOffset, 31);
+         let Yk, Lk, Ck, Ak, jk, sk, dk, Vk = 0,
+           Fk = 0,
+           uk = 1;
+         if (542327876 !== yk[0]) return void fk.b.Error("Invalid magic number in DDS header");
+         if (!Dk.isFourCC && !Dk.isRGB && !Dk.isLuminance) return void fk.b.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
+         if (Dk.isCompressed && !pk) return void fk.b.Error("Compressed textures are not supported on this platform.");
+         let qk = yk[22];
+ ... (102 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/307.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/307.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a)

#### 1. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L4` → after: `L4-L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L4-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/307.js#L4-L420) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/307.js#L4)

```diff
-   41424: (QQ, FQ, wQ) => {
+   41373: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       _ENVTextureLoader: () => sk
+     });
+     var Dk = ik(39501),
+       fk = ik(36698),
+       Sk = ik(36729),
+       bk = ik(39558),
+       rk = ik(39391),
+       Pk = ik(39564),
+       mk = (ik(39653), ik(41376)),
+       Mk = ik(38272),
+       Kk = (ik(41393), ik(41413), ik(39623));
+     const xk = "image/png",
+       nk = [134, 22, 135, 150, 246, 214, 150, 54];
+ 
+ ... (401 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8-L104` → after: `L424-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L424-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/307.js#L424-L462) · [Before (L8-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/307.js#L8-L104)

```diff
-     var LQ = wQ(39251);
-     const qQ = "bumpVertex",
-       oQ = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
-     }
-   },
-   41334: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "bumpVertexDeclaration",
-       oQ = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
- ... (81 more removed lines; see GitHub link above)
+     var Dk = ik(41376),
+       fk = ik(41397);
+     class Sk {
+       static ExpandRGBDTexture(kk) {
+         const ek = kk._texture;
+         if (!ek || !kk.isRGBD) return;
+         const fk = ek.JU(),
+           Sk = fk.getCaps(),
+           bk = ek.isReady;
+         let rk = !1;
+         Sk.textureHalfFloatRender && Sk.textureHalfFloatLinearFiltering ? (rk = !0, ek.type = 2) : Sk.textureFloatRender && Sk.textureFloatLinearFiltering && (rk = !0, ek.type = 1), rk && (ek.isReady = !1, ek._isRGBD = !1, ek.invertY = !1);
+         const Pk = async () => {
+           const Sk = fk.isWebGPU,
+             bk = Sk ? 1 : 0;
+           ek.isReady = !1, Sk ? await ik.e(341).then((() => ik(60794))) : await ik.e(323).then((() => ik(60800)));
+           const rk = new Dk.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, fk, !1, void 0, ek.type, void 0, null, !1, void 0, bk);
+ ... (23 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/308.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/308.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e)

#### 1. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/308.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/308.js#L4-L6)

```diff
-   41396: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => DQ
+   41355: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       _IESTextureLoader: () => rk
```

#### 2. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L8-L14` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/308.js#L8-L11) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/308.js#L8-L14)

```diff
-     var LQ = wQ(39251);
-     const qQ = "bakedVertexAnimation",
-       oQ = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
+     var Dk = ik(36729);
+ 
+     function fk(kk) {
+       return kk.split(" ").filter((kk => "" !== kk)).map((kk => parseFloat(kk)))
```

#### 3. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L16-L27` → after: `L13-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L13-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/308.js#L13-L18) · [Before (L16-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/308.js#L16-L27)

```diff
-   },
-   41309: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "bakedVertexAnimationDeclaration",
-       oQ = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
+ 
+     function Sk(kk, ek, ik) {
+       for (; ik.length !== ek;) {
+         const ek = fk(kk.lines[kk.index++]);
+         ik.push(...ek)
+       }
```

#### 4. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L29-L40` → after: `L20-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L20-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/308.js#L20-L44) · [Before (L29-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/308.js#L29-L40)

```diff
-   },
-   41302: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "bonesDeclaration",
-       oQ = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
+ 
+     function bk(kk, ek, ik) {
+       let fk = 0,
+         Sk = 0,
+         bk = 0,
+         rk = 0,
+         Pk = 0,
+         mk = 0;
+       for (let Dk = 0; Dk < kk.numberOfHorizontalAngles - 1; Dk++)
+         if (ik < kk.horizontalAngles[Dk + 1] || Dk === kk.numberOfHorizontalAngles - 2) {
+           Sk = Dk, bk = kk.horizontalAngles[Dk], rk = kk.horizontalAngles[Dk + 1];
+           break
+         } for (let Dk = 0; Dk < kk.numberOfVerticalAngles - 1; Dk++)
+         if (ek < kk.verticalAngles[Dk + 1] || Dk === kk.numberOfVerticalAngles - 2) {
+           fk = Dk, Pk = kk.verticalAngles[Dk], mk = kk.verticalAngles[Dk + 1];
+           break
+ ... (9 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L42-L404` → after: `L46-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L46-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/308.js#L46-L100) · [Before (L42-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/308.js#L42-L404)

```diff
-   },
-   41387: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "bonesVertex",
-       oQ = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
-     }
-   },
-   41428: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
- ... (347 more removed lines; see GitHub link above)
+     class rk {
+       constructor() {
+         this.supportCascades = !1
+       }
+       loadCubeData() {
+         throw ".ies not supported in Cube."
+       }
+       loadData(kk, ek, ik) {
+         const Dk = function(kk) {
+           const ek = {
+               lines: new TextDecoder("utf-8").decode(kk).split("\n"),
+               index: 0
+             },
+             ik = {
+               version: ek.lines[0],
+               candelaValues: [],
+ ... (39 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/309.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/309.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868)

#### 1. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/309.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/309.js#L4-L6)

```diff
-   41455: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => DQ
+   41367: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       _BasisTextureLoader: () => pk
```

#### 2. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L8-L11` → after: `L8-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L8-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/309.js#L8-L135) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/309.js#L8-L11)

```diff
-     var LQ = wQ(39251);
-     const qQ = "decalFragmentDeclaration",
-       oQ = "#ifdef DECAL\nuniform vec4 vDecalInfos;\n#endif\n";
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk, fk = ik(39662),
+       Sk = ik(38272),
+       bk = ik(40053),
+       rk = ik(39391);
+ 
+     function Pk() {
+       const kk = 0,
+         ek = 1,
+         ik = 2,
+         Dk = 3,
+         fk = 6,
+         Sk = 8,
+         bk = 9,
+         rk = 10,
+         Pk = 14;
+       let mk = null;
+ ... (112 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L13-L183` → after: `L137-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L137-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/309.js#L137-L284) · [Before (L13-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/309.js#L13-L183)

```diff
-       name: qQ,
-       shader: oQ
-     }
-   },
-   41577: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "depthPrePass",
-       oQ = "#ifdef DEPTHPREPASS\ngl_FragColor=vec4(0.,0.,0.,1.0);return;\n#endif\n";
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
-     }
- ... (155 more removed lines; see GitHub link above)
+       JSModuleURL: `${fk.i._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
+       WasmModuleURL: `${fk.i._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
+     };
+     let Mk = null,
+       Kk = null,
+       xk = 0;
+     const nk = async () => (Mk || (Mk = new Promise(((kk, ek) => {
+       Kk ? kk(Kk) : fk.i.LoadFileAsync(fk.i.GetBabylonScriptURL(mk.WasmModuleURL)).then((ik => {
+         if ("function" !== typeof URL) return ek("Basis transcoder requires an environment with a URL constructor");
+         const Dk = URL.createObjectURL(new Blob([`(${Pk})()`], {
+           type: "application/javascript"
+         }));
+         Kk = new Worker(Dk), async function(kk, ek, ik) {
+           return await new Promise(((Dk, Sk) => {
+             const bk = ek => {
+               "init" === ek.data.action ? (kk.removeEventListener("message", bk), Dk(kk)) : "error" === ek.data.action && Sk(ek.data.error || "error initializing worker")
+ ... (132 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/310.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/310.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d)

#### 1. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L4-L44` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/310.js#L4) · [Before (L4-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/310.js#L4-L44)

```diff
-   41568: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "bumpFragment",
-       oQ = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
-     }
-   },
-   41543: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => DQ
- ... (25 more removed lines; see GitHub link above)
+   41404: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L48-L54` → after: `L8-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L8-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/310.js#L8-L341) · [Before (L48-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/310.js#L48-L54)

```diff
-     var LQ = wQ(39251);
-     const qQ = "clipPlaneFragment",
-       oQ = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
+     var Dk = ik(36726),
+       fk = ik(36698),
+       Sk = ik(40053),
+       bk = ik(39716),
+       rk = ik(39501),
+       Pk = ik(38272),
+       mk = ik(39696),
+       Mk = ik(39728),
+       Kk = ik(36707),
+       xk = ik(39458),
+       nk = ik(39672),
+       Uk = ik(39769);
+     class Hk {
+       get renderList() {
+         return this._renderList
+       }
+ ... (318 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L56-L67` → after: `L343-L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L343-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/310.js#L343-L742) · [Before (L56-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/310.js#L56-L67)

```diff
-   },
-   41548: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "clipPlaneFragmentDeclaration",
-       oQ = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
+     Hk.REFRESHRATE_RENDER_ONCE = 0, Hk.REFRESHRATE_RENDER_ONEVERYFRAME = 1, Hk.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
+     var wk = ik(39447);
+     class lk extends Sk.f {
+       get renderListPredicate() {
+         return this._objectRenderer.renderListPredicate
+       }
+       set renderListPredicate(kk) {
+         this._objectRenderer.renderListPredicate = kk
+       }
+       get renderList() {
+         return this._objectRenderer.renderList
+       }
+       set renderList(kk) {
+         this._objectRenderer.renderList = kk
+       }
+       get particleSystemList() {
+ ... (384 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L70` → after: `L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/310.js#L747) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/310.js#L70)

```diff
-   41300: (QQ, FQ, wQ) => {
+   41384: (kk, ek, ik) => {
```

#### 5. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L72` → after: `L749-L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/310.js#L749-L750) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/310.js#L72)

```diff
-       e: () => DQ
+       d: () => mk,
+       f: () => Mk
```

#### 6. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L74-L77` → after: `L752-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L752-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/310.js#L752-L756) · [Before (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/310.js#L74-L77)

```diff
-     var LQ = wQ(39251);
-     const qQ = "helperFunctions",
-       oQ = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39708),
+       fk = ik(37679),
+       Sk = ik(36726),
+       bk = ik(39403),
+       rk = ik(39906);
```

#### 7. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L79-L80` → after: `L758-L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L758-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/310.js#L758-L810) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/310.js#L79-L80)

```diff
-       name: qQ,
-       shader: oQ
+       positions: [1, 1, -1, 1, -1, -1, 1, -1],
+       indices: [0, 1, 2, 0, 2, 3]
+     };
+     class mk {
+       constructor(kk) {
+         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Pk;
+         this._fullscreenViewport = new fk.b(0, 0, 1, 1);
+         const ik = ek.positions ?? Pk.positions,
+           Sk = ek.indices ?? Pk.indices;
+         this.engine = kk, this._vertexBuffers = {
+           [Dk.e.PositionKind]: new Dk.e(kk, ik, Dk.e.PositionKind, !1, !1, 2)
+         }, this._indexBuffer = kk.createIndexBuffer(Sk), this._indexBufferLength = Sk.length, this._onContextRestoredObserver = kk.RU.add((() => {
+           this._indexBuffer = kk.createIndexBuffer(Sk);
+           for (const kk in this._vertexBuffers) {
+             this._vertexBuffers[kk]._rebuild()
+           }
+ ... (37 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L82-L93` → after: `L812-L932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L812-L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/310.js#L812-L932) · [Before (L82-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/310.js#L82-L93)

```diff
-   },
-   41458: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "objectIdFunctions",
-       oQ = "highp vec4 encodeObjectId(highp float objectId) {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4(objectId/255.0,0.0,0.0,1.0);\n#else\nhighp float id=floor(objectId);highp vec3 encodedId=vec3(\nfloor(mod(id,16777216.0)/65536.0),\nfloor(mod(id,65536.0)/256.0),\nmod(id,256.0) … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
+     class Mk {
+       static RegisterShaderCodeProcessing(kk, ek) {
+         ek ? Mk._CustomShaderCodeProcessing[kk ?? ""] = ek : delete Mk._CustomShaderCodeProcessing[kk ?? ""]
+       }
+       static _GetShaderCodeProcessing(kk) {
+         return Mk._CustomShaderCodeProcessing[kk] ?? Mk._CustomShaderCodeProcessing[""]
+       }
+       get name() {
+         return this.options.name
+       }
+       set name(kk) {
+         this.options.name = kk
+       }
+       isReady() {
+         return this._drawWrapper.effect?.isReady() ?? !1
+       }
+ ... (105 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L96-L98` → after: `L936-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L936-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/310.js#L936-L944) · [Before (L96-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/310.js#L96-L98)

```diff
-   61252: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => DQ
+   41413: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       Dispose: () => pk,
+       DumpData: () => lk,
+       DumpDataAsync: () => wk,
+       DumpFramebuffer: () => Hk,
+       DumpTools: () => yk,
+       EncodeImageAsync: () => Uk,
+       RegisterDumpTools: () => Lk
```

#### 10. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L100-L106` → after: `L946-L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L946-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/310.js#L946-L993) · [Before (L100-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/310.js#L100-L106)

```diff
-     var LQ = wQ(39251);
-     const qQ = "openpbrDielectricReflectance",
-       oQ = "struct ReflectanceParams\n{float F0;float F90;vec3 coloredF0;vec3 coloredF90;};\n#define pbr_inline\nReflectanceParams dielectricReflectance(\nin float insideIOR,in float outsideIOR,in vec3 specularColor,in float specularWeight\n)\n{ReflectanceParams outParams;float d … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
+     var Dk = ik(39566),
+       fk = ik(41384),
+       Sk = ik(39662),
+       bk = ik(36729),
+       rk = ik(36722),
+       Pk = ik(38272),
+       mk = ik(39620),
+       Mk = ik(39570);
+     let Kk = null;
+     async function xk() {
+       return Kk || (Kk = async function() {
+         const kk = rk.e.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
+         kk instanceof OffscreenCanvas && Pk.b.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
+         const {
+           ThinEngine: ek
+         } = await Promise.resolve().then((() => ik(39398)));
+ ... (32 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L108-L119` → after: `L995-L1036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L995-L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/310.js#L995-L1036) · [Before (L108-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/310.js#L108-L119)

```diff
-   },
-   61257: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "openpbrGeometryInfo",
-       oQ = "struct geometryInfoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;};struct geometryInfoAnisoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;float anisotropy;vec3 anisotropicTangent;vec3 … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
+     let nk = (() => {
+       var kk;
+       let ek, ik = [];
+       return kk = class {
+         static async EncodeImageAsync(kk, ek, ik, Dk, fk, bk) {
+           const rk = await xk(),
+             Pk = rk.dumpEngine;
+           Pk.engine.setSize(ek, ik, !0);
+           const mk = Pk.engine.createRawTexture(kk, ek, ik, 5, !1, !fk, 1);
+           return Pk.renderer.setViewport(), Pk.renderer.applyEffectWrapper(Pk.wrapper), Pk.wrapper.effect._bindTexture("textureSampler", mk), Pk.renderer.draw(), mk.dispose(), await new Promise(((kk, ek) => {
+             Sk.i.ToBlob(rk.canvas, (ik => {
+               ik ? kk(ik) : ek(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
+             }), Dk, bk)
+           }))
+         }
+       }, (() => {
+ ... (26 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L121-L132` → after: `L1038-L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L1038-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/310.js#L1038-L1056) · [Before (L121-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/310.js#L121-L132)

```diff
-   },
-   61265: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "openpbrIblFunctions",
-       oQ = "#ifdef REFLECTION\nvec3 sampleIrradiance(\nin vec3 surfaceNormal\n#if defined(NORMAL) && defined(USESPHERICALINVERTEX)\n,in vec3 vEnvironmentIrradianceSH\n#endif\n#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || ( … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
+     async function wk(kk, ek, ik) {
+       let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
+         fk = arguments.length > 4 ? arguments[4] : void 0,
+         rk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         Mk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         Kk = arguments.length > 7 ? arguments[7] : void 0;
+       if (ik instanceof Float32Array) {
+         const kk = new Uint8Array(ik.length);
+         let ek = ik.length;
+         for (; ek--;) {
+           const Dk = ik[ek];
+           kk[ek] = Math.round(255 * (0, bk.Clamp)(Dk))
+         }
+         ik = kk
+       }
+       const xk = await nk.EncodeImageAsync(ik, kk, ek, Dk, rk, Kk);
+ ... (3 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L134-L158` → after: `L1058-L1063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L1058-L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/310.js#L1058-L1063) · [Before (L134-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/310.js#L134-L158)

```diff
-   },
-   61277: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "openpbrSubsurfaceLayerData",
-       oQ = "float subsurface_weight=vSubsurfaceWeight;vec3 subsurface_color=vSubsurfaceColor.rgb;float subsurface_radius=vSubsurfaceRadius;vec3 subsurface_radius_scale=vSubsurfaceRadiusScale;float subsurface_scatter_anisotropy=clamp(vSubsurfaceScatterAnisotropy,-0.9999,0.9999);\n … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
-     }
-   },
-   61270: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
- ... (9 more removed lines; see GitHub link above)
+ 
+     function lk(kk, ek, ik, Dk) {
+       let fk = arguments.length > 5 ? arguments[5] : void 0;
+       void 0 !== fk || Dk || (fk = ""), wk(kk, ek, ik, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", fk, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.len … [truncated]
+         Dk && Dk(kk)
+       }))
```

#### 14. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L160-L171` → after: `L1065-L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR1065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L1065-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/310.js#L1065-L1069) · [Before (L160-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/310.js#L160-L171)

```diff
-   },
-   61035: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "pbrBRDFFunctions",
-       oQ = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
+ 
+     function pk() {
+       Kk && (Kk?.then((kk => {
+         kk.canvas instanceof HTMLCanvasElement && kk.canvas.remove(), kk.dumpEngine && (kk.dumpEngine.engine.dispose(), kk.dumpEngine.renderer.dispose(), kk.dumpEngine.wrapper.dispose())
+       })), Kk = null)
```

#### 15. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L183-L184` → after: `L1072-L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L1072-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/310.js#L1072-L1082) · [Before (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/310.js#L183-L184)

```diff
-       name: qQ,
-       shader: oQ
+       DumpData: lk,
+       DumpDataAsync: wk,
+       DumpFramebuffer: Hk,
+       Dispose: pk
+     };
+     let Yk = !1;
+ 
+     function Lk() {
+       if (Yk) return;
+       Yk = !0;
+       Sk.i.DumpData = lk, Sk.i.DumpDataAsync = wk, Sk.i.DumpFramebuffer = Hk
```

#### 16. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L187` → after: `L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR1085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/310.js#L1085) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/310.js#L187)

```diff
-   61090: (QQ, FQ, wQ) => {
+   41397: (kk, ek, ik) => {
```

#### 17. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L189` → after: `L1087-L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR1087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L1087-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/310.js#L1087-L1089) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/310.js#L189)

```diff
-       e: () => DQ
+       c: () => nk,
+       e: () => Uk,
+       g: () => Hk
```

#### 18. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L191-L197` → after: `L1091-L1202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L1091-L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/310.js#L1091-L1202) · [Before (L191-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/310.js#L191-L197)

```diff
-     var LQ = wQ(39251);
-     const qQ = "pbrIBLFunctions",
-       oQ = "#if defined(REFLECTION) || defined(SS_REFRACTION)\nfloat getLodFromAlphaG(float cubeMapDimensionPixels,float microsurfaceAverageSlope) {float microsurfaceAverageSlopeTexels=cubeMapDimensionPixels*microsurfaceAverageSlope;float lod=log2(microsurfaceAverageSlopeTexels); … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
+     var Dk = ik(40053),
+       fk = ik(41404),
+       Sk = ik(39566),
+       bk = ik(41376),
+       rk = ik(39585),
+       Pk = ik(41407),
+       mk = ik(39570);
+     class Mk extends bk.c {
+       getClassName() {
+         return "PassPostProcess"
+       }
+       constructor(kk, ek) {
+         let ik = arguments.length > 4 ? arguments[4] : void 0;
+         const Dk = {
+           size: "number" === typeof ek ? ek : void 0,
+           camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+ ... (96 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L199-L210` → after: `L1204-L1366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR1204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L1204-L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/310.js#L1204-L1366) · [Before (L199-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/310.js#L199-L210)

```diff
-   },
-   41506: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "reflectionFunction",
-       oQ = "vec3 computeFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)\n{float lon=atan(direction.z,direction.x);float lat=acos(direction.y);vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;float s=sphereCoords.x*0.5+0.5;float t=sphereCoords.y;return  … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
+     async function Uk(kk, ek, Sk) {
+       let rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+         Pk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
+         mk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         Mk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
+       await async function(kk) {
+         if (kk.isReady()) return;
+         if (kk.loadingError) throw new Error(kk.errorObject?.message || `Texture ${kk.name} errored while loading.`);
+         const ek = kk.onLoadObservable;
+         if (ek) return await new Promise((kk => ek.addOnce((() => kk()))));
+         const ik = kk._texture?.onLoadedObservable;
+         if (ik) return await new Promise((kk => ik.addOnce((() => kk()))));
+         throw new Error(`Cannot determine readiness of texture ${kk.name}.`)
+       }(kk);
+       const xk = kk.getInternalTexture(),
+         nk = kk.is3D || !!xk?.is3D,
+ ... (147 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L222-L223` → after: `L1369-L1392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR1369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L1369-L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/310.js#L1369-L1392) · [Before (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/310.js#L222-L223)

```diff
-       name: qQ,
-       shader: oQ
+       CreateResizedCopy: function(kk, ek, ik) {
+         let Sk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+         const bk = kk.XF(),
+           rk = bk.JU(),
+           Pk = new fk.c("resized" + kk.name, {
+             width: ek,
+             height: ik
+           }, bk, !kk.noMipmap, !0, kk._texture.type, !1, kk.samplingMode, !1);
+         Pk.wrapU = kk.wrapU, Pk.wrapV = kk.wrapV, Pk.uOffset = kk.uOffset, Pk.vOffset = kk.vOffset, Pk.uScale = kk.uScale, Pk.vScale = kk.vScale, Pk.uAng = kk.uAng, Pk.vAng = kk.vAng, Pk.wAng = kk.wAng, Pk.coordinatesIndex = kk.coordinatesIndex, Pk.level = kk.level, Pk.anisotropi … [truncated]
+         const mk = new Mk("pass", 1, null, Sk ? Dk.f.BILINEAR_SAMPLINGMODE : Dk.f.NEAREST_SAMPLINGMODE, rk, !1, 0);
+         return mk.externalTextureSamplerBinding = !0, mk.onEffectCreatedObservable.addOnce((ek => {
+           ek.executeWhenCompiled((() => {
+             mk.onApply = function(ek) {
+               ek.setTexture("textureSampler", kk)
+             };
+             const ek = Pk.renderTarget;
+ ... (8 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L226` → after: `L1395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR1395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/310.js#L1395) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/310.js#L226)

```diff
-   61245: (QQ, FQ, wQ) => {
+   41376: (kk, ek, ik) => {
```

#### 22. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L228` → after: `L1397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR1397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/310.js#L1397) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/310.js#L228)

```diff
-       b: () => DQ
+       c: () => Uk
```
