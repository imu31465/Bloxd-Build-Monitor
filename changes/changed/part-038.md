# Changed — Bundle Modifications Report (Part 038 / 104)

- **Updated at**: `2026-11-24T00:51 JST`
- **Part**: `38 / 104` (**311** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 037](part-037.md) · [Part 039 →](part-039.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/300.js` (3lwmg.ecbaa066 → w4ddu.56408518 · continued)

- **File**: `bundles/bloxd.io/chunks/js/300.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008)

#### 1. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/300.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/300.js#L4-L6)

```diff
-   41055: (kk, ek, ik) => {
-     ik.d(ek, {
-       ensureLocalBloxdTypes: () => lk
+   41260: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       default: () => JC
```

#### 2. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L8-L17` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/300.js#L8-L18) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/300.js#L8-L17)

```diff
-     var Dk = ik(4707),
-       fk = ik(40950),
-       Sk = ik(40945),
-       bk = ik(36446),
-       rk = ik(36454),
-       Pk = ik(36475);
-     const mk = JSON.stringify({
-       name: "@bloxd",
-       types: "index.d.ts"
-     }, null, "\t") + "\n";
+     var QC = ZC(48),
+       wC = ZC(4679),
+       bC = ZC(1593),
+       nC = ZC(1002),
+       fC = ZC.n(nC),
+       oC = ZC(1388),
+       qC = ZC(1143),
+       FC = ZC(4657),
+       WC = ZC(4668),
+       NC = ZC(4672),
+       MC = ZC(1056);
```

#### 3. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L20` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/300.js#L21-L27) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/300.js#L20)

```diff
-       return kk.replace(/^\//, "")
+       return CC.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
+     }
+     FC.c.registerLanguage("javascript", WC.b), FC.c.registerLanguage("typescript", NC.b);
+ 
+     function SC(CC, zC) {
+       const ZC = gC(CC).replace(/"/g, "&quot;");
+       return `<button type="button" class="DocsCopyButton ${zC}" title="${ZC}" aria-label="${ZC}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" vi … [truncated]
```

#### 4. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L23-L42` → after: `L30-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L30-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/300.js#L30-L44) · [Before (L23-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/300.js#L23-L42)

```diff
-     function Kk(kk) {
-       return Mk((0, rk.s)(kk.name, "")).replace(/\/$/, "")
-     }
- 
-     function xk(kk) {
-       return kk.typesVfsPath.slice(kk.typesVfsPath.lastIndexOf("/") + 1)
-     }
- 
-     function nk(kk) {
-       return JSON.stringify({
-         name: kk.specifier,
-         types: xk(kk)
-       }, null, "\t") + "\n"
-     }
-     async function Uk(kk) {
-       let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
- ... (4 more removed lines; see GitHub link above)
+     function pC(CC, zC) {
+       const ZC = [],
+         QC = CC.toLowerCase(),
+         wC = zC.toLowerCase();
+       let bC = 0;
+       for (; bC < CC.length;) {
+         const nC = QC.indexOf(wC, bC);
+         if (-1 === nC) {
+           ZC.push(CC.slice(bC));
+           break
+         }
+         nC > bC && ZC.push(CC.slice(bC, nC)), ZC.push((0, MC.jsx)("mark", {
+           className: "DocsHighlight",
+           children: CC.slice(nC, nC + zC.length)
+         }, nC)), bC = nC + zC.length
```

#### 5. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L46-L90` → after: `L48-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L48-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/300.js#L48-L57) · [Before (L46-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/300.js#L46-L90)

```diff
-     async function Hk(kk, ek, ik) {
-       const Dk = Kk(ek),
-         fk = await (0, Pk.h)(kk, Dk);
-       if (!fk) return;
-       const Sk = new Set([xk(ek), "package.json"]);
-       if (ik)
-         for (const Pk of Object.keys(ek.files)) Sk.add(Pk);
-       const bk = await Uk(fk),
-         rk = new Set;
-       for (const Kk of bk) {
-         if (Sk.has(Kk)) continue;
-         await (0, Pk.y)(kk, `${Dk}/${Kk}`);
-         const ek = Kk.split("/");
-         for (let kk = 1; kk < ek.length; kk++) rk.add(ek.slice(0, kk).join("/"))
-       }
-       const mk = [...rk].sort(((kk, ek) => ek.split("/").length - kk.split("/").length));
- ... (29 more removed lines; see GitHub link above)
+     var PC = ZC(1013),
+       GC = ZC(1321),
+       RC = ZC(36747),
+       AC = ZC(36750);
+     const xC = {
+         clientOptions: {
+           tabStep: "docsClientOptionsTab",
+           tabText: "codeEditor:tutorialClientOptionsTab",
+           pageStep: "docsClientOptions",
+           pageText: "codeEditor:tutorialClientOptions"
```

#### 6. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L92-L108` → after: `L59-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L59-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/300.js#L59-L413) · [Before (L92-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/300.js#L92-L108)

```diff
-         include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
-         files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...ik]
-       }, null, "\t") + "\n"
-     }
-     async function lk(kk) {
-       let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
-       const ik = new Set(ek.map((kk => kk.name))),
-         xk = Object.values(bk.g).flatMap((ek => {
-           const Dk = Mk(ek.typesVfsPath),
-             fk = `${Kk(ek)}/package.json`;
-           return [...ik.has(ek.name) ? Object.entries(ek.files).map((ik => {
-             let [Dk, fk] = ik;
-             return (0, Pk.J)(kk, Mk((0, rk.s)(ek.name, Dk)), fk)
-           })) : [], (0, Pk.J)(kk, Dk, ek.types), (0, Pk.J)(kk, fk, nk(ek))]
-         }));
-       await Promise.all([(0, Pk.J)(kk, "node_modules/@bloxd/index.d.ts", Dk.default), (0, Pk.J)(kk, "node_modules/@bloxd/globals.d.ts", Sk.e), (0, Pk.J)(kk, "node_modules/@bloxd/lib.d.ts", fk.d), (0, Pk.J)(kk, "node_modules/@bloxd/package.json", mk), (0, Pk.J)(kk, "tsconfig.json" … [truncated]
- ... (1 more removed lines; see GitHub link above)
+         apiReference: {
+           tabStep: "docsApiReferenceTab",
+           tabText: "codeEditor:tutorialApiReferenceTab",
+           pageStep: "docsApiReference",
+           pageText: "codeEditor:tutorialApiReference"
+         },
+         callbacks: {
+           tabStep: "docsCallbacksTab",
+           tabText: "codeEditor:tutorialCallbacksTab",
+           pageStep: "docsCallbacks",
+           pageText: "codeEditor:tutorialCallbacks"
+         }
+       },
+       JC = (0, QC.memo)((function(CC) {
+         var zC, ZC, nC, WC, NC, JC, IC;
+         let {
+ ... (339 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/301.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/301.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad)

#### 1. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/301.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/301.js#L4-L6)

```diff
-   41105: (kk, ek, ik) => {
-     ik.r(ek), ik.d(ek, {
-       installImageBitmapTextureLoader: () => mk
+   41289: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       ensureLocalBloxdTypes: () => PC
```

#### 2. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8-L10` → after: `L8-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/301.js#L8-L17) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/301.js#L8-L10)

```diff
-     var Dk = ik(39445),
-       fk = ik(41109),
-       Sk = ik(3177);
+     var QC = ZC(4696),
+       wC = ZC(41188),
+       bC = ZC(41179),
+       nC = ZC(36714),
+       fC = ZC(36721),
+       oC = ZC(36735);
+     const qC = JSON.stringify({
+       name: "@bloxd",
+       types: "index.d.ts"
+     }, null, "\t") + "\n";
```

#### 3. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L12-L17` → after: `L19-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L19-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/301.js#L19-L42) · [Before (L12-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/301.js#L12-L17)

```diff
-     function bk(kk, ek) {
-       if ("string" === typeof kk) {
-         const ik = (0, Sk.c)(kk);
-         return ik ? new Blob([(0, Sk.b)(ik.base64)], {
-           type: ik.mimeType || ek
-         }) : null
+     function FC(CC) {
+       return CC.replace(/^\//, "")
+     }
+ 
+     function WC(CC) {
+       return FC((0, fC.t)(CC.name, "")).replace(/\/$/, "")
+     }
+ 
+     function NC(CC) {
+       return CC.typesVfsPath.slice(CC.typesVfsPath.lastIndexOf("/") + 1)
+     }
+ 
+     function MC(CC) {
+       return JSON.stringify({
+         name: CC.specifier,
+         types: NC(CC)
+ ... (8 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L19-L21` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/301.js#L44) · [Before (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/301.js#L19-L21)

```diff
-       return kk instanceof Blob ? kk : new Blob([kk], {
-         type: ek
-       })
+       return ZC
```

#### 5. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L23-L30` → after: `L46-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L46-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/301.js#L46-L59) · [Before (L23-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/301.js#L23-L30)

```diff
-     const rk = function(kk, ek, ik, Dk) {
-       let Sk, rk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
-         Pk = arguments.length > 5 ? arguments[5] : void 0,
-         mk = arguments.length > 6 ? arguments[6] : void 0;
-       try {
-         Sk = bk(kk, rk)
-       } catch {
-         Sk = null
+     async function SC(CC, zC, ZC) {
+       const QC = WC(zC),
+         wC = await (0, oC.k)(CC, QC);
+       if (!wC) return;
+       const bC = new Set([NC(zC), "package.json"]);
+       if (ZC)
+         for (const oC of Object.keys(zC.files)) bC.add(oC);
+       const nC = await gC(wC),
+         fC = new Set;
+       for (const WC of nC) {
+         if (bC.has(WC)) continue;
+         await (0, oC.y)(CC, `${QC}/${WC}`);
+         const zC = WC.split("/");
+         for (let CC = 1; CC < zC.length; CC++) fC.add(zC.slice(0, CC).join("/"))
```

#### 6. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L32-L42` → after: `L61-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L61-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/301.js#L61-L68) · [Before (L32-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/301.js#L32-L42)

```diff
-       return Sk ? (createImageBitmap(Sk, {
-         premultiplyAlpha: "none",
-         colorSpaceConversion: "none",
-         ...Pk
-       }).then((kk => {
-         ek(kk)
-       }), (() => {
-         (0, fk.e)(kk, ek, ik, Dk, rk, Pk, mk)
-       })), null) : (0, fk.e)(kk, ek, ik, Dk, rk, Pk, mk)
-     };
-     let Pk = "idle";
+       const qC = [...fC].sort(((CC, zC) => zC.split("/").length - CC.split("/").length));
+       for (const WC of qC) try {
+         await (0, oC.y)(CC, `${QC}/${WC}`)
+       } catch (FC) {
+         if (FC instanceof DOMException && "InvalidModificationError" === FC.name) continue;
+         throw FC
+       }
+     }
```

#### 7. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L44-L63` → after: `L70-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L70-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/301.js#L70-L94) · [Before (L44-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/301.js#L44-L63)

```diff
-     function mk() {
-       "idle" === Pk && "function" === typeof createImageBitmap && (Pk = "pending", async function() {
-         const kk = document.createElement("canvas");
-         kk.width = 1, kk.height = 2;
-         const ek = kk.getContext("2d");
-         if (!ek) throw new Error("2d context unavailable");
-         ek.fillStyle = "#f00", ek.fillRect(0, 0, 1, 1), ek.fillStyle = "#0f0", ek.fillRect(0, 1, 1, 1);
-         const ik = bk(kk.toDataURL(), "");
-         if (!ik) throw new Error("toDataURL did not produce a base64 data URL");
-         const Dk = await createImageBitmap(ik, {
-           premultiplyAlpha: "none",
-           colorSpaceConversion: "none",
-           imageOrientation: "flipY"
-         });
-         ek.drawImage(Dk, 0, 0);
-         const fk = ek.getImageData(0, 0, 1, 1).data;
- ... (4 more removed lines; see GitHub link above)
+     function pC(CC) {
+       const zC = {
+         "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
+       };
+       for (const QC of Object.values(nC.c)) zC[QC.specifier] = [`.${QC.typesVfsPath}`];
+       const ZC = [];
+       for (const QC of CC)
+         for (const CC of Object.keys(QC.files)) ZC.push(FC((0, fC.t)(QC.name, CC)));
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

#### 8. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L65-L72` → after: `L96-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L96-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/301.js#L96-L108) · [Before (L65-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/301.js#L65-L72)

```diff
-   },
-   41109: (kk, ek, ik) => {
-     ik.d(ek, {
-       d: () => Dk.f,
-       e: () => Dk.o
-     });
-     var Dk = ik(39607);
-     (0, Dk.s)()
+     async function PC(CC) {
+       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
+       const ZC = new Set(zC.map((CC => CC.name))),
+         NC = Object.values(nC.c).flatMap((zC => {
+           const QC = FC(zC.typesVfsPath),
+             wC = `${WC(zC)}/package.json`;
+           return [...ZC.has(zC.name) ? Object.entries(zC.files).map((ZC => {
+             let [QC, wC] = ZC;
+             return (0, oC.F)(CC, FC((0, fC.t)(zC.name, QC)), wC)
+           })) : [], (0, oC.F)(CC, QC, zC.types), (0, oC.F)(CC, wC, MC(zC))]
+         }));
+       await Promise.all([(0, oC.F)(CC, "node_modules/@bloxd/index.d.ts", QC.default), (0, oC.F)(CC, "node_modules/@bloxd/globals.d.ts", bC.b), (0, oC.F)(CC, "node_modules/@bloxd/lib.d.ts", wC.d), (0, oC.F)(CC, "node_modules/@bloxd/package.json", qC), (0, oC.F)(CC, "tsconfig.json" … [truncated]
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/302.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/302.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a)

#### 1. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L4-L235` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/302.js#L4-L6) · [Before (L4-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/302.js#L4-L235)

```diff
-   41186: (kk, ek, ik) => {
-     ik.d(ek, {
-       c: () => Sk
-     });
-     var Dk = ik(39672),
-       fk = ik(41191);
-     class Sk {
-       constructor(kk, ek) {
-         let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
-         this.maxDepth = ik, this.bDk = [], this._maxBlockCapacity = ek || 64, this._selectionContent = new Dk.e(1024), this._creationFunc = kk
-       }
-       update(kk, ek, ik) {
-         fk.c._CreateBlocks(kk, ek, ik, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
-       }
-       Zik(kk) {
-         for (let ek = 0; ek < this.blocks.length; ek++) {
- ... (216 more removed lines; see GitHub link above)
+   41347: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       installImageBitmapTextureLoader: () => qC
```

#### 2. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L237-L486` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/302.js#L8-L10) · [Before (L237-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/302.js#L237-L486)

```diff
-     var Dk = ik(36703),
-       fk = ik(36698),
-       Sk = ik(36707),
-       bk = ik(39879),
-       rk = ik(39701),
-       Pk = ik(36722),
-       mk = ik(39767);
-     const Mk = {
-       internalPickerForMesh: void 0
-     };
-     class Kk {
-       constructor(kk, ek) {
-         let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
-           fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Dk.d;
-         this.origin = kk, this.direction = ek, this.length = ik, this.epsilon = fk
-       }
- ... (234 more removed lines; see GitHub link above)
+     var QC = ZC(39692),
+       wC = ZC(41349),
+       bC = ZC(3188);
```

#### 3. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L489-L590` → after: `L13-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L13-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/302.js#L13-L17) · [Before (L489-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/302.js#L489-L590)

```diff
-       return "InstancedLinesMesh" === kk || "LinesMesh" === kk ? ek.intersectionThreshold : 0
-     }
- 
-     function yk(kk) {
-       const ek = kk.getClassName();
-       if ("GreasedLineMesh" === ek) return {
-         rawBoundingInfo: null,
-         intersectionThreshold: 0
-       };
-       const ik = kk.rawBoundingInfo;
-       return {
-         rawBoundingInfo: ik,
-         intersectionThreshold: ik ? pk(ek, kk) : 0
-       }
-     }
- 
- ... (86 more removed lines; see GitHub link above)
+       if ("string" === typeof CC) {
+         const ZC = (0, bC.e)(CC);
+         return ZC ? new Blob([(0, bC.c)(ZC.base64)], {
+           type: ZC.mimeType || zC
+         }) : null
```

#### 4. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L592-L639` → after: `L19-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L19-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/302.js#L19-L20) · [Before (L592-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/302.js#L592-L639)

```diff
-       return Sk
-     }
- 
-     function Ak(kk, ek, ik, Dk, Sk, bk) {
-       if (!rk.b) return null;
-       const Pk = Lk(kk, (Dk => (kk._tempPickingRay || (kk._tempPickingRay = Kk.Zero()), nk(kk, ek, ik, Dk, kk._tempPickingRay, bk || null), kk._tempPickingRay)), Dk, Sk, !0);
-       return Pk && (Pk.ray = xk(kk, ek, ik, fk.b.Identity(), bk || null)), Pk
-     }
- 
-     function jk(kk, ek, ik, Dk, Sk, bk, rk) {
-       const Pk = Lk(kk, ((Dk, fk) => (kk._tempPickingRay || (kk._tempPickingRay = Kk.Zero()), nk(kk, ek, ik, Dk, kk._tempPickingRay, bk || null, !1, fk), kk._tempPickingRay)), Dk, Sk, !1, rk);
-       return Pk && (Pk.ray = xk(kk, ek, ik, fk.b.Identity(), bk || null)), Pk
-     }
- 
-     function sk(kk, ek, ik, Dk, Sk) {
-       const bk = Lk(kk, (ik => (kk._pickWithRayInverseMatrix || (kk._pickWithRayInverseMatrix = fk.b.Identity()), ik.invertToRef(kk._pickWithRayInverseMatrix), kk._cachedRayForTransform || (kk._cachedRayForTransform = Kk.Zero()), Kk.TransformToRef(ek, kk._pickWithRayInverseMatrix … [truncated]
- ... (32 more removed lines; see GitHub link above)
+       return CC instanceof Blob ? CC : new Blob([CC], {
+         type: zC
```

#### 5. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L642-L904` → after: `L23-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L23-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/302.js#L23-L64) · [Before (L642-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/302.js#L642-L904)

```diff
-     Kk._TmpVector3 = (0, Sk.c)(6, fk.o.Zero), Kk._RayDistant = Kk.Zero(), Kk._Smallnum = 1e-8, Kk._Rayl = 1e9
-   },
-   41122: (kk, ek, ik) => {
-     ik.d(ek, {
-       b: () => Sk.w
-     });
-     var Dk = ik(39653),
-       fk = ik(39782),
-       Sk = ik(41129);
-     let bk = !1;
-     bk || (bk = !0, (0, Sk.b)(Dk.f, fk.e), Dk.f.prototype.createPickingRayToRef = function(kk, ek, ik, Dk, fk) {
-       let bk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         rk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
-       return (0, Sk.i)(this, kk, ek, ik, Dk, fk, bk, rk)
-     }, Dk.f.prototype.createPickingRayInCameraSpace = function(kk, ek, ik) {
-       return (0, Sk.f)(this, kk, ek, ik)
- ... (247 more removed lines; see GitHub link above)
+     const fC = function(CC, zC, ZC, QC) {
+       let bC, fC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
+         oC = arguments.length > 5 ? arguments[5] : void 0,
+         qC = arguments.length > 6 ? arguments[6] : void 0;
+       try {
+         bC = nC(CC, fC)
+       } catch {
+         bC = null
+       }
+       return bC ? (createImageBitmap(bC, {
+         premultiplyAlpha: "none",
+         colorSpaceConversion: "none",
+         ...oC
+       }).then((CC => {
+         zC(CC)
+       }), (() => {
+ ... (26 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L906` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/302.js#L66) · [Before (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/302.js#L906)

```diff
-   41155: (kk, ek, ik) => {
+   41349: (CC, zC, ZC) => {
```

#### 7. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L908` → after: `L68-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/302.js#L68-L69) · [Before (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/302.js#L908)

```diff
-       b: () => Ze
+       c: () => QC.g,
+       d: () => QC.m
```

#### 8. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L910-L4405` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/302.js#L71-L72) · [Before (L910-L4405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/302.js#L910-L4405)

```diff
-     var Dk = ik(38294),
-       fk = ik(36726),
-       Sk = ik(36698),
-       bk = ik(39708),
-       rk = ik(41162),
-       Pk = ik(36722),
-       mk = ik(39849),
-       Mk = ik(36874),
-       Kk = ik(38296),
-       xk = ik(38265),
-       nk = ik(36729);
-     class Uk {
-       constructor() {
-         this.direction1 = new Sk.o(0, 1, 0), this.direction2 = new Sk.o(0, 1, 0)
-       }
-       startDirectionFunction(kk, ek, ik, Dk) {
- ... (3480 more removed lines; see GitHub link above)
+     var QC = ZC(39865);
+     (0, QC.p)()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/303.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/303.js` (51 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a)

#### 1. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L4)

```diff
-   41291: (kk, ek, ik) => {
+   41422: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L6-L11` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L6) · [Before (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L6-L11)

```diff
-       b: () => xk,
-       d: () => lk,
-       f: () => nk,
-       h: () => Uk,
-       k: () => yk,
-       o: () => pk
+       c: () => bC
```

#### 3. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L13-L56` → after: `L8-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L8-L13) · [Before (L13-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L13-L56)

```diff
-     var Dk = ik(41223);
-     var fk = "Babylon Lite v1.32.0",
-       Sk = ik(41297);
- 
-     function bk(kk) {
-       return "clientWidth" in kk
-     }
-     var rk = 1;
- 
-     function Pk(kk, ek, ik) {
-       const Pk = ek.getContext("webgpu");
-       Pk || (0, Dk.c)(54), bk(ek) && ek.setAttribute("data-engine", fk);
-       const mk = ik?.format ?? navigator.gpu.getPreferredCanvasFormat(),
-         Mk = ik?.srgb ? (Kk = mk).endsWith("-srgb") ? Kk : `${Kk}-srgb` : mk;
-       var Kk;
-       const xk = ik?.alphaMode ?? "opaque";
- ... (28 more removed lines; see GitHub link above)
+     var QC = ZC(39925),
+       wC = ZC(41429);
+     class bC {
+       constructor(CC, zC) {
+         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
+         this.maxDepth = ZC, this.gQC = [], this._maxBlockCapacity = zC || 64, this._selectionContent = new QC.e(1024), this._creationFunc = CC
```

#### 4. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L58-L84` → after: `L15-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L15-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L15-L47) · [Before (L58-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L58-L84)

```diff
-     }
- 
-     function mk(kk) {
-       const ek = kk._context.getCurrentTexture(),
-         ik = kk.scRT;
-       ik._colorTexture = ek, ik._colorView = ek.createView({
-         format: kk.format
-       }), ik._width = ek.width, ik._height = ek.height
-     }
- 
-     function Mk(kk) {
-       const ek = kk.canvas;
-       if (!bk(ek)) return;
-       const ik = kk._w ?? ek.clientWidth,
-         Dk = kk._h ?? ek.clientHeight;
-       if (!(ik > 0 && Dk > 0)) return;
- ... (11 more removed lines; see GitHub link above)
+       update(CC, zC, ZC) {
+         wC.b._CreateBlocks(CC, zC, ZC, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
+       }
+       zQC(CC) {
+         for (let zC = 0; zC < this.blocks.length; zC++) {
+           this.blocks[zC].addEntry(CC)
+         }
+       }
+       IH(CC) {
+         for (let zC = 0; zC < this.blocks.length; zC++) {
+           this.blocks[zC].removeEntry(CC)
+         }
+       }
+       select(CC, zC) {
+         this._selectionContent.reset();
+         for (let ZC = 0; ZC < this.blocks.length; ZC++) {
+ ... (17 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L87-L165` → after: `L50-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L50-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L50-L54) · [Before (L87-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L87-L165)

```diff
-     var xk = 0;
- 
-     function nk(kk, ek) {
-       return -1 !== kk._renderingContexts.indexOf(ek)
-     }
- 
-     function Uk(kk, ek) {
-       return -1 === kk._renderingContexts.indexOf(ek) && (kk._renderingContexts.push(ek), !0)
-     }
-     var Hk = null;
-     var wk = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
-     async function lk(kk, ek) {
-       const Sk = await navigator.gpu.requestAdapter({
-         powerPreference: "high-performance",
-         ...Hk ? Hk() : {}
-       });
- ... (63 more removed lines; see GitHub link above)
+     bC.CreationFuncForMeshes = (CC, zC) => {
+       const ZC = CC.WE();
+       !CC.isBlocked && ZC.boundingBox.intersectsMinMax(zC.nQC, zC.bQC) && zC.entries.push(CC)
+     }, bC.CreationFuncForSubMeshes = (CC, zC) => {
+       CC.WE().boundingBox.intersectsMinMax(zC.nQC, zC.bQC) && zC.entries.push(CC)
```

#### 6. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L167-L185` → after: `L56-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L56-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L56-L85) · [Before (L167-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L167-L185)

```diff
- 
-     function Yk(kk, ek) {
-       let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kk._surfaces,
-         Dk = 0;
-       for (let Sk = ik.length; Sk--;) Dk += ik[Sk]._renderingContexts.length;
-       if (!Dk) return kk.drawCallCount = 0, kk._flushGpuRetirements?.(kk);
-       const fk = kk._device.createCommandEncoder({
-         label: "frame"
-       });
-       kk._currentEncoder = fk, kk._currentDelta = ek;
-       try {
-         kk._gpuTimerBegin?.(fk), Dk = 0;
-         for (let kk = 0; kk < ik.length; kk++) {
-           const ek = ik[kk];
-           ek._capturePreFrame?.(ek), mk(ek);
-           const fk = ek._renderingContexts;
- ... (3 more removed lines; see GitHub link above)
+   },
+   41429: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => bC
+     });
+     var QC = ZC(36963),
+       wC = ZC(40136);
+     class bC {
+       constructor(CC, zC, ZC, QC, wC, bC) {
+         this.entries = [], this.SQC = new Array, this._capacity = ZC, this._depth = QC, this._maxDepth = wC, this._creationFunc = bC, this._minPoint = CC, this._maxPoint = zC, this.SQC.push(CC.clone()), this.SQC.push(zC.clone()), this.SQC.push(CC.clone()), this.SQC[2].x = zC.x, t … [truncated]
+       }
+       get HW() {
+         return this._capacity
+       }
+       get nQC() {
+         return this._minPoint
+ ... (14 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L188` → after: `L89-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L89-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L89-L92) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L188)

```diff
-         const ek = kk._currentEncoder;
+         const zC = this.entries.indexOf(CC);
+         zC > -1 && this.entries.splice(zC, 1)
+       }
+       addEntries(CC) {
```

#### 8. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L191` → after: `L95-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L95-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L95-L128) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L191)

```diff
-           Dk._captureService?.(Dk, ek)
+           this.addEntry(ZC)
+         }
+       }
+       select(CC, zC, ZC) {
+         if (wC.b.IsInFrustum(this.SQC, CC)) {
+           if (this.blocks) {
+             for (let QC = 0; QC < this.blocks.length; QC++) {
+               this.blocks[QC].select(CC, zC, ZC)
+             }
+             return
+           }
+           ZC ? zC.concat(this.entries) : zC.concatWithNoDuplicate(this.entries)
+         }
+       }
+       intersects(CC, zC, ZC, QC) {
+         if (wC.b.IntersectsSphere(this._minPoint, this._maxPoint, CC, zC)) {
+ ... (18 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L193-L195` → after: `L130-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L130-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L130-L144) · [Before (L193-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L193-L195)

```diff
-         kk._gpuTimerEnd?.(ek), kk._cbs[0] = ek.finish(), kk._device.queue.submit(kk._cbs), kk._flushGpuRetirements?.(kk), kk.drawCallCount = Dk, kk._gpuTimerResolve?.()
-       } finally {
-         kk._currentEncoder = void 0
+       }
+       createInnerBlocks() {
+         bC._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
+       }
+       static _CreateBlocks(CC, zC, ZC, wC, nC, fC, oC, qC) {
+         oC.blocks = new Array;
+         const FC = new QC.r((zC.x - CC.x) / 2, (zC.y - CC.y) / 2, (zC.z - CC.z) / 2);
+         for (let QC = 0; QC < 2; QC++)
+           for (let zC = 0; zC < 2; zC++)
+             for (let WC = 0; WC < 2; WC++) {
+               const NC = CC.add(FC.multiplyByFloats(QC, zC, WC)),
+                 MC = CC.add(FC.multiplyByFloats(QC + 1, zC + 1, WC + 1)),
+                 gC = new bC(NC, MC, wC, nC + 1, fC, qC);
+               gC.addEntries(ZC), oC.blocks.push(gC)
+             }
```

#### 10. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L199` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L148) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L199)

```diff
-   41232: (kk, ek, ik) => {
+   41434: (CC, zC, ZC) => {
```

#### 11. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L201-L203` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L150) · [Before (L201-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L201-L203)

```diff
-       b: () => fk,
-       d: () => Sk,
-       h: () => Dk
+       e: () => FC
```

#### 12. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L205-L219` → after: `L152-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L152-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L152-L161) · [Before (L205-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L205-L219)

```diff
-     var Dk = globalThis.GPUTextureUsage,
-       fk = globalThis.GPUBufferUsage,
-       Sk = globalThis.GPUShaderStage;
-     globalThis.GPUColorWrite
-   },
-   41307: (kk, ek, ik) => {
-     function Dk(kk) {
-       fk(kk.splice(0))
-     }
- 
-     function fk(kk) {
-       for (const ik of kk) try {
-         ik()
-       } catch (ek) {
-         console.error("GPU resource retirement failed.", ek)
+     var QC = ZC(39910),
+       wC = ZC(36963),
+       bC = ZC(40265),
+       nC = ZC(41369),
+       fC = ZC(39990),
+       oC = ZC(36985),
+       qC = ZC(41422);
+     class FC {
+       constructor(CC) {
+         this.name = fC.b.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new nC.u(wC.r.Zero(), new wC.r(1, 1, 1)), (CC = CC || oC.c.LastCreatedScene) && (this.sS = CC, this.sS.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.sS.getActiveSubMeshCandidat … [truncated]
```

#### 13. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L222-L239` → after: `L200-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L200-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L200-L221) · [Before (L222-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L222-L239)

```diff
- 
-     function Sk(kk, ek) {
-       kk._flushGpuRetirements ??= bk, (kk._retirements ??= []).push(ek)
-     }
- 
-     function bk(kk) {
-       const ek = kk._retirements;
-       if (!ek) return;
-       kk._retirements = null;
-       const ik = kk._retiring ??= new Set;
-       ik.add(ek), queueMicrotask((() => {
-         kk._device.queue.onSubmittedWorkDone().then((() => {
-           ik.delete(ek), Dk(ek)
-         })).catch((() => {}))
-       }))
-     }
- ... (2 more removed lines; see GitHub link above)
+     let WC = !1;
+     WC || (WC = !0, QC.g.prototype.createOrUpdateSelectionOctree = function() {
+       let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
+         zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
+         ZC = this._getComponent(fC.b.NAME_OCTREE);
+       ZC || (ZC = new FC(this), this.sZC(ZC)), this.xQC || (this.xQC = new qC.c(qC.c.CreationFuncForMeshes, CC, zC));
+       const QC = this.getWorldExtends();
+       return this.xQC.update(QC.min, QC.max, this.meshes), this.xQC
+     }, Object.defineProperty(QC.g.prototype, "selectionOctree", {
+       get: function() {
+         return this.xQC
+       },
+       enumerable: !0,
+       configurable: !0
+     }), bC.b.prototype.createOrUpdateSubmeshesOctree = function() {
+       let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
+ ... (6 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L242` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L224) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L242)

```diff
-   41297: (kk, ek, ik) => {
+   41369: (CC, zC, ZC) => {
```

#### 15. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L244` → after: `L226-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L226-L227) · [Before (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L244)

```diff
-       e: () => Sk,
+       c: () => YC,
+       f: () => SC,
```

#### 16. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L246` → after: `L229-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L229-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L229-L235) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L246)

```diff
-       k: () => rk
+       j: () => MC,
+       l: () => hC,
+       o: () => eC,
+       p: () => IC,
+       q: () => vC,
+       r: () => iC,
+       u: () => WC
```

#### 17. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L248-L264` → after: `L237-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L237-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L237-L251) · [Before (L248-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L248-L264)

```diff
-     var Dk = ik(41232);
- 
-     function fk(kk) {
-       const ek = kk.size;
-       return "canvas" in ek ? ek.canvas : ek
-     }
- 
-     function Sk(kk) {
-       return {
-         _descriptor: kk,
-         _resolveSize: fk,
-         _colorTexture: null,
-         _colorView: null,
-         _depthTexture: null,
-         _depthView: null,
-         _width: 0,
- ... (1 more removed lines; see GitHub link above)
+     var QC = ZC(36968),
+       wC = ZC(36963),
+       bC = ZC(36971),
+       nC = ZC(40123),
+       fC = ZC(39953),
+       oC = ZC(36985),
+       qC = ZC(40013);
+     const FC = {
+       internalPickerForMesh: void 0
+     };
+     class WC {
+       constructor(CC, zC) {
+         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
+           wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QC.e;
+         this.origin = CC, this.direction = zC, this.length = ZC, this.epsilon = wC
```

#### 18. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L266-L271` → after: `L253-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L253-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L253-L312) · [Before (L266-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L266-L271)

```diff
-     }
- 
-     function bk(kk, ek) {
-       if (kk._eager) return void kk._syncEager?.(ek);
-       rk(kk);
-       const ik = kk._descriptor,
+       clone() {
+         return new WC(this.origin.clone(), this.direction.clone(), this.length)
+       }
+       intersectsBoxMinMax(CC, zC) {
+         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         const QC = WC._TmpVector3[0].L_(CC.x - ZC, CC.y - ZC, CC.z - ZC),
+           wC = WC._TmpVector3[1].L_(zC.x + ZC, zC.y + ZC, zC.z + ZC);
+         let bC, nC, fC, oC, qC = 0,
+           FC = Number.MAX_VALUE;
+         if (Math.abs(this.direction.x) < 1e-7) {
+           if (this.origin.x < QC.x || this.origin.x > wC.x) return !1
+         } else if (bC = 1 / this.direction.x, nC = (QC.x - this.origin.x) * bC, fC = (wC.x - this.origin.x) * bC, fC === -1 / 0 && (fC = 1 / 0), nC > fC && (oC = nC, nC = fC, fC = oC), qC = Math.max(nC, qC), FC = Math.min(fC, FC), qC > FC) return !1;
+         if (Math.abs(this.direction.y) < 1e-7) {
+           if (this.origin.y < QC.y || this.origin.y > wC.y) return !1
+         } else if (bC = 1 / this.direction.y, nC = (QC.y - this.origin.y) * bC, fC = (wC.y - this.origin.y) * bC, fC === -1 / 0 && (fC = 1 / 0), nC > fC && (oC = nC, nC = fC, fC = oC), qC = Math.max(nC, qC), FC = Math.min(fC, FC), qC > FC) return !1;
+         if (Math.abs(this.direction.z) < 1e-7) {
+ ... (44 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L273-L307` → after: `L314-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L314-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L314-L430) · [Before (L273-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L273-L307)

```diff
-           width: Sk,
-           height: bk
-         } = (kk._resolveSize ?? fk)(ik);
-       kk._width = Sk, kk._height = bk;
-       const Pk = ek._device;
-       ik.format && (kk._colorTexture = Pk.createTexture({
-         label: ik.lbl,
-         size: {
-           width: Sk,
-           height: bk
-         },
-         format: ik.format,
-         sampleCount: ik.samples,
-         usage: Dk.h.RENDER_ATTACHMENT | Dk.h.TEXTURE_BINDING | Dk.h.COPY_SRC | Dk.h.COPY_DST
-       }), kk._colorView = kk._colorTexture.createView()), ik.dFormat && (kk._depthTexture = Pk.createTexture({
-         label: ik.lbl,
- ... (19 more removed lines; see GitHub link above)
+           const QC = wC.r.Dot(CC.normal, this.origin);
+           return zC = (-CC.d - QC) / ZC, zC < 0 ? zC < -9.99999997475243e-7 ? null : 0 : zC
+         }
+       }
+       intersectsAxis(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         switch (CC) {
+           case "y": {
+             const CC = (this.origin.y - zC) / this.direction.y;
+             return CC > 0 ? null : new wC.r(this.origin.x + this.direction.x * -CC, zC, this.origin.z + this.direction.z * -CC)
+           }
+           case "x": {
+             const CC = (this.origin.x - zC) / this.direction.x;
+             return CC > 0 ? null : new wC.r(zC, this.origin.y + this.direction.y * -CC, this.origin.z + this.direction.z * -CC)
+           }
+           case "z": {
+ ... (101 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L345-L351` → after: `L434-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L434-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L434-L437) · [Before (L345-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L345-L351)

```diff
-     function fk(kk) {
-       let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const ik = ek.compare,
-         fk = ek.lodMinClamp ?? 0,
-         Sk = ek.lodMaxClamp ?? 32,
-         bk = void 0 !== ik || 0 !== fk || 32 !== Sk ? `${ik??""}:${fk}:${Sk}` : "";
-       return (0, Dk.c)(kk, ek, bk)
+     function NC(CC, zC, ZC, QC, wC) {
+       let bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       const nC = WC.Zero();
+       return MC(CC, zC, ZC, QC, nC, wC, bC), nC
```

#### 21. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L360-L362` → after: `L440-L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L440-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L440-L454) · [Before (L360-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L360-L362)

```diff
-     function fk(kk) {
-       const ek = Dk ??= new WeakMap;
-       ek.set(kk, (ek.get(kk) ?? 0) + 1)
+     function MC(CC, zC, ZC, QC, bC, nC) {
+       let fC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         oC = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
+       const qC = CC.mg();
+       if (!nC && !(nC = CC.activeCamera) && !(nC = CC.cameraToUseForPointers)) return CC;
+       const FC = nC.viewport,
+         WC = qC.getRenderHeight(),
+         {
+           x: NC,
+           y: MC,
+           width: gC,
+           height: SC
+         } = FC.toGlobal(qC.getRenderWidth(), WC),
+         pC = 1 / qC.getHardwareScalingLevel();
+       return zC = zC * pC - NC, ZC = ZC * pC - (WC - MC - SC), bC.update(zC, ZC, gC, SC, QC || wC.b.IdentityReadOnly, fC ? wC.b.IdentityReadOnly : nC.getViewMatrix(), nC.getProjectionMatrix(), oC), CC
```

#### 22. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L365-L366` → after: `L457-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L457-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L457-L459) · [Before (L365-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L365-L366)

```diff
-     function Sk(kk) {
-       fk(kk.texture)
+     function gC(CC, zC, ZC, QC) {
+       const wC = WC.Zero();
+       return SC(CC, zC, ZC, wC, QC), wC
```

#### 23. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L386-L399` → after: `L462-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L462-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L462-L476) · [Before (L386-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L386-L399)

```diff
-     function rk(kk) {
-       let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
-         ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
-       const fk = kk._device,
-         Sk = Dk ??= new WeakMap;
-       let rk = Sk.get(fk);
-       rk || Sk.set(fk, rk = new Map);
-       let Pk = ik;
-       for (const Dk in bk) {
-         const kk = Dk;
-         Pk += `:${ek[kk]??bk[kk]}`
-       }
-       let mk = rk.get(Pk);
-       return mk || rk.set(Pk, mk = fk.createSampler(ek)), mk
+     function SC(CC, zC, ZC, QC, bC) {
+       if (!fC.c) return CC;
+       const nC = CC.mg();
+       if (!bC && !(bC = CC.activeCamera) && !(bC = CC.cameraToUseForPointers)) throw new Error("Active camera not set");
+       const oC = bC.viewport,
+         qC = nC.getRenderHeight(),
+         {
+           x: FC,
+           y: WC,
+           width: NC,
+           height: MC
+         } = oC.toGlobal(nC.getRenderWidth(), qC),
+         gC = wC.b.Identity(),
+         SC = 1 / nC.getHardwareScalingLevel();
+       return zC = zC * SC - FC, ZC = ZC * SC - (qC - WC - MC), QC.update(zC, ZC, NC, MC, gC, gC, bC.getProjectionMatrix()), CC
```

#### 24. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L410-L416` → after: `L479-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L479-L480) · [Before (L410-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L410-L416)

```diff
-     function Sk(kk, ek) {
-       ek._passes.length = 0, kk._currentProcessedTask = ek;
-       try {
-         ek.record()
-       } finally {
-         kk._currentProcessedTask = null
-       }
+     function pC(CC, zC, ZC, QC, wC, bC, nC, fC) {
+       return PC(CC, ZC, QC, zC(QC, ZC.enableDistantPicking), wC, bC, nC, fC)
```

#### 25. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L433-L434` → after: `L483-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L483-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L483-L485) · [Before (L433-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L433-L434)

```diff
-     function mk(kk) {
-       return kk._projFov === kk.fov && kk._projNear === kk.nearPlane && kk._projFar === kk.farPlane || (kk._projFov = kk.fov, kk._projNear = kk.nearPlane, kk._projFar = kk.farPlane, kk._projRev = (kk._projRev ?? 0) + 1), kk.worldMatrixVersion + (kk._projRev ?? 0)
+     function PC(CC, zC, ZC, QC, wC, bC, nC, fC) {
+       const oC = zC.intersects(QC, wC, nC, bC, ZC, fC);
+       return oC && oC.hit ? !wC && null != CC && oC.distance >= CC.distance ? null : oC : null
```

#### 26. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L438-L490` → after: `L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L489) · [Before (L438-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L438-L490)

```diff
-       const ik = mk(kk);
-       if (kk._projVer === ik && kk._projAspect === ek) return kk._projCache;
-       const Dk = kk._projCache;
-       return null !== Pk && kk.ortho ? Pk(kk, ek, Dk) : function(kk, ek, ik, Dk, fk) {
-         const Sk = 1 / Math.tan(.5 * ek),
-           bk = fk - Dk;
-         kk[0] = Sk / ik, kk[5] = Sk, kk[10] = -Dk / bk, kk[11] = 1, kk[14] = fk * Dk / bk
-       }(Dk, kk.fov, ek, kk.nearPlane, kk.farPlane), kk._projVer = ik, kk._projAspect = ek, Dk
-     }
-     var Kk = ik(41232);
- 
-     function xk(kk, ek, ik) {
-       return kk._device.createBuffer({
-         label: ik,
-         size: (Dk = ek, fk = 16, Math.ceil(Dk / fk) * fk),
-         usage: Kk.b.UNIFORM | Kk.b.COPY_DST
- ... (37 more removed lines; see GitHub link above)
+       return "InstancedLinesMesh" === CC || "LinesMesh" === CC ? zC.intersectionThreshold : 0
```

#### 27. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L497-L507` → after: `L493-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L493-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L493-L501) · [Before (L497-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L497-L507)

```diff
-       let ek = 0;
-       for (const ik of kk) ek += ik._lightVersion ?? 0;
-       return ek
-     }
- 
-     function Lk(kk, ek) {
-       kk.fill(0);
-       let ik = 0;
-       for (const Dk of ek) {
-         if (ik >= lk.b) break;
-         Dk._writeLightUbo && (Dk._writeLightUbo(kk, 4 + 16 * ik), ik++)
+       const zC = CC.getClassName();
+       if ("GreasedLineMesh" === zC) return {
+         rawBoundingInfo: null,
+         intersectionThreshold: 0
+       };
+       const ZC = CC.rawBoundingInfo;
+       return {
+         rawBoundingInfo: ZC,
+         intersectionThreshold: ZC ? GC(zC, CC) : 0
```

#### 28. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L542-L575` → after: `L506-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L506-L507) · [Before (L542-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L542-L575)

```diff
-       kk.fill(0);
-       const Sk = function(kk, ek) {
-           const ik = mk(kk);
-           if (kk._vpVer === ik && kk._vpAspect === ek) return kk._vpCache;
-           const Dk = kk._vpCache;
-           return function(kk, ek, ik, Dk, fk, Sk) {
-             const bk = ik[Dk],
-               rk = ik[Dk + 1],
-               Pk = ik[Dk + 2],
-               mk = ik[Dk + 3],
-               Mk = ik[Dk + 4],
-               Kk = ik[Dk + 5],
-               xk = ik[Dk + 6],
-               nk = ik[Dk + 7],
-               Uk = ik[Dk + 8],
-               Hk = ik[Dk + 9],
- ... (18 more removed lines; see GitHub link above)
+       const bC = CC(ZC, zC.enableDistantPicking);
+       return bC.intersectsSphere(QC.IQC, wC) && bC.intersectsBox(QC.boundingBox, wC) ? bC : null
```

#### 29. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L578-L585` → after: `L510-L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L510-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L510-L548) · [Before (L578-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L578-L585)

```diff
-     function sk(kk, ek) {
-       return {
-         _renderables: kk,
-         _opaqueBindings: [],
-         _directBindings: [],
-         _transparentBindings: [],
-         _ob: [],
-         _lastVersion: ek
+     function xC(CC, zC, ZC, QC, bC, nC) {
+       let oC = null;
+       const qC = !!(CC.activeCameras && CC.activeCameras.length > 1 && CC.cameraToUseForPointers !== CC.activeCamera),
+         WC = CC.cameraToUseForPointers || CC.activeCamera,
+         NC = FC.internalPickerForMesh || pC,
+         MC = NC === pC;
+       for (let fC = 0; fC < CC.meshes.length; fC++) {
+         const FC = CC.meshes[fC];
+         if (ZC) {
+           if (!ZC(FC, -1)) continue
+         } else if (!FC.isEnabled() || !FC.isVisible || !FC.tS) continue;
+         const gC = qC && FC.isWorldMatrixCameraDependent(),
+           SC = FC.computeWorldMatrix(gC, WC);
+         if (FC.hasThinInstances && FC.AzC) {
+           const CC = NC(oC, zC, FC, SC, !0, !0, nC);
+           if (CC) {
+ ... (23 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L589-L688` → after: `L553-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L553-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L553-L585) · [Before (L589-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L589-L688)

```diff
-     function dk(kk, ek, ik) {
-       kk.clr ??= !0;
-       const fk = kk.rt._descriptor,
-         Sk = kk.depth?._descriptor,
-         Pk = {
-           _colorFormat: fk.format,
-           _depthStencilFormat: Sk?.dFormat ?? fk.dFormat,
-           _depthCompare: fk.depthCompare ?? Sk?.depthCompare,
-           _sampleCount: fk.samples
-         },
-         Mk = {
-           loadOp: "clear",
-           storeOp: "store"
-         },
-         Kk = {
-           ...sk([], -1),
- ... (84 more removed lines; see GitHub link above)
+     function JC(CC, zC, ZC, QC) {
+       if (!fC.c) return null;
+       const bC = [],
+         nC = !!(CC.activeCameras && CC.activeCameras.length > 1 && CC.cameraToUseForPointers !== CC.activeCamera),
+         oC = CC.cameraToUseForPointers || CC.activeCamera,
+         qC = FC.internalPickerForMesh || pC,
+         WC = qC === pC;
+       for (let fC = 0; fC < CC.meshes.length; fC++) {
+         const FC = CC.meshes[fC];
+         if (ZC) {
+           if (!ZC(FC, -1)) continue
+         } else if (!FC.isEnabled() || !FC.isVisible || !FC.tS) continue;
+         const NC = nC && FC.isWorldMatrixCameraDependent(),
+           MC = FC.computeWorldMatrix(NC, oC);
+         if (FC.hasThinInstances && FC.AzC) {
+           if (qC(null, zC, FC, MC, !0, !0, QC)) {
+ ... (17 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L690` → after: `L587-L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L587-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L587-L591) · [Before (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L690)

```diff
-         };
+         } else {
+           const CC = qC(null, zC, FC, MC, !1, !1, QC);
+           CC && bC.push(CC)
+         }
+       }
```

#### 32. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L694-L695` → after: `L595-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L595-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L595-L598) · [Before (L694-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L694-L695)

```diff
-     function Vk(kk, ek) {
-       return ek._sortDistance - kk._sortDistance || kk.renderable.order - ek.renderable.order
+     function IC(CC, zC, ZC, QC, bC, nC) {
+       if (!fC.c) return null;
+       const oC = xC(CC, (QC => (CC._tempPickingRay || (CC._tempPickingRay = WC.Zero()), MC(CC, zC, ZC, QC, CC._tempPickingRay, nC || null), CC._tempPickingRay)), QC, bC, !0);
+       return oC && (oC.ray = NC(CC, zC, ZC, wC.b.Identity(), nC || null)), oC
```

#### 33. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L698-L699` → after: `L601-L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L601-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L601-L603) · [Before (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L698-L699)

```diff
-     function Fk(kk, ek) {
-       return kk.renderable.order - ek.renderable.order
+     function iC(CC, zC, ZC, QC, bC, nC, fC) {
+       const oC = xC(CC, ((QC, wC) => (CC._tempPickingRay || (CC._tempPickingRay = WC.Zero()), MC(CC, zC, ZC, QC, CC._tempPickingRay, nC || null, !1, wC), CC._tempPickingRay)), QC, bC, !1, fC);
+       return oC && (oC.ray = NC(CC, zC, ZC, wC.b.Identity(), nC || null)), oC
```

#### 34. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L702-L749` → after: `L606-L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L606-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L606-L608) · [Before (L702-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L702-L749)

```diff
-     function uk(kk) {
-       let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk._renderables,
-         ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         fk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
-         Sk = arguments.length > 4 ? arguments[4] : void 0;
-       const bk = kk._config,
-         rk = bk.rt,
-         Pk = kk._batchState,
-         mk = sk(ek, kk.bw._renderableVersion);
-       if (ik) {
-         const ek = (ek, ik) => {
-           ek && (ik || kk._ownsTargets || ek._eager) && (0, Dk.g)(ek, kk.engine)
-         };
-         ek(rk), rk._descriptor.samples > 1 && ek(bk.rst), ek(bk.depth, !0)
-       }
-       const {
- ... (32 more removed lines; see GitHub link above)
+     function vC(CC, zC, ZC, QC, bC) {
+       const nC = xC(CC, (ZC => (CC._pickWithRayInverseMatrix || (CC._pickWithRayInverseMatrix = wC.b.Identity()), ZC.invertToRef(CC._pickWithRayInverseMatrix), CC._cachedRayForTransform || (CC._cachedRayForTransform = WC.Zero()), WC.TransformToRef(zC, CC._pickWithRayInverseMatrix … [truncated]
+       return nC && (nC.ray = zC), nC
```

#### 35. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L752-L778` → after: `L611-L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L611-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L611-L612) · [Before (L752-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L752-L778)

```diff
-     function qk(kk, ek) {
-       const ik = kk.engine,
-         Dk = kk._config,
-         Sk = Dk.rt,
-         bk = kk.bw,
-         rk = kk._opaqueBindings,
-         Pk = kk._ob,
-         mk = kk._sceneBG;
-       if (function(kk, ek, ik, Dk) {
-           const fk = ek?.viewport;
-           if (!fk) return;
-           const Sk = Math.floor(fk.x * ik),
-             bk = Math.floor((1 - fk.y - fk.height) * Dk),
-             rk = Math.ceil((fk.x + fk.width) * ik) - Sk,
-             Pk = Math.ceil((1 - fk.y) * Dk) - bk;
-           kk.setViewport(Sk, bk, rk, Pk, 0, 1), kk.setScissorRect(Sk, bk, rk, Pk)
- ... (11 more removed lines; see GitHub link above)
+     function eC(CC, zC, ZC, QC, wC, bC) {
+       return JC(CC, (QC => NC(CC, zC, ZC, QC, wC || null)), QC, bC)
```

#### 36. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L781-L799` → after: `L615-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L615-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L615-L616) · [Before (L781-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L781-L799)

```diff
-     function Ik(kk, ek) {
-       let ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
-       const Dk = Ck(ek, kk.bw)._buffer;
-       if (Dk === kk._lightsUBO) return;
-       const fk = ek._device.createBindGroup({
-         layout: Hk(ek),
-         entries: [{
-           binding: 0,
-           resource: {
-             buffer: kk._sceneUBO
-           }
-         }, {
-           binding: 1,
-           resource: {
-             buffer: Dk
-           }
- ... (3 more removed lines; see GitHub link above)
+     function hC(CC, zC, ZC, QC) {
+       return JC(CC, (ZC => (CC._pickWithRayInverseMatrix || (CC._pickWithRayInverseMatrix = wC.b.Identity()), ZC.invertToRef(CC._pickWithRayInverseMatrix), CC._cachedRayForTransform || (CC._cachedRayForTransform = WC.Zero()), WC.TransformToRef(zC, CC._pickWithRayInverseMatrix, CC … [truncated]
```

#### 37. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L803-L862` → after: `L620-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L620-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L620-L627) · [Before (L803-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L803-L862)

```diff
-       for (const ik of kk) ik.update?.(ek)
-     }
- 
-     function Qk(kk, ek, ik) {
-       let Dk = null,
-         fk = 0;
-       for (const Sk of ek) {
-         const ek = Sk.renderable.mesh;
-         ek && !1 === ek.visible || (Sk.pipeline !== Dk && (kk.setPipeline(Sk.pipeline), Dk = Sk.pipeline), fk += Sk.draw(kk, ik))
-       }
-       return fk
-     }
- 
-     function vk(kk) {
-       const ek = kk._materialSwapQueue;
-       if (!ek[0] || kk._runtimeBuilds?.w) return;
- ... (44 more removed lines; see GitHub link above)
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
+         QC = arguments.length > 3 ? arguments[3] : void 0,
+         bC = arguments.length > 4 ? arguments[4] : void 0;
+       QC || (QC = CC.getWorldMatrix()), zC.length = ZC, bC ? zC.origin.Av(bC) : zC.origin.Av(CC.position);
+       const nC = wC.j.Eg[2];
+       nC.set(0, 0, CC._scene.useRightHandedSystem ? -1 : 1);
+       const fC = wC.j.Eg[3];
+       return wC.r.TransformNormalToRef(nC, QC, fC), wC.r.NormalizeToRef(fC, zC.direction), zC
```

#### 38. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L867-L985` → after: `L631-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L631-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L631-L642) · [Before (L867-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L867-L985)

```diff
-       const ik = kk.engine,
-         fk = {
-           _kind: "bw",
-           surface: kk,
-           clearColor: {
-             r: .2,
-             g: .2,
-             b: .3,
-             a: 1
-           },
-           camera: null,
-           lights: [],
-           meshes: [],
-           animationGroups: [],
-           fog: null,
-           clipPlane: null,
- ... (103 more removed lines; see GitHub link above)
+       zC && (zC.prototype.getForwardRay = function() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
+           zC = arguments.length > 1 ? arguments[1] : void 0,
+           ZC = arguments.length > 2 ? arguments[2] : void 0;
+         return KC(this, new WC(wC.r.Zero(), wC.r.Zero(), CC), CC, zC, ZC)
+       }, zC.prototype.getForwardRayToRef = function(CC) {
+         return KC(this, CC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
+       }), CC && (qC.c._IsPickingAvailable = !0, CC.prototype.createPickingRay = function(CC, zC, ZC, QC) {
+         return NC(this, CC, zC, ZC, QC, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
+       })
+     }
+     WC._TmpVector3 = (0, bC.d)(6, wC.r.Zero), WC._RayDistant = WC.Zero(), WC._Smallnum = 1e-8, WC._Rayl = 1e9
```

#### 39. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L987` → after: `L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L644) · [Before (L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L987)

```diff
-   41284: (kk, ek, ik) => {
+   41362: (CC, zC, ZC) => {
```

#### 40. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L989-L990` → after: `L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L646) · [Before (L989-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L989-L990)

```diff
-       e: () => mk,
-       g: () => Mk
+       c: () => bC.u
```

#### 41. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L992-L1056` → after: `L648-L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L648-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L648-L671) · [Before (L992-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L992-L1056)

```diff
-     var Dk = ik(41223),
-       fk = ik(41232),
-       Sk = ik(41238),
-       bk = ik(41245),
-       rk = ik(41251),
-       Pk = ik(41258);
- 
-     function mk(kk, ek, ik) {
-       let rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
-       (ek < 1 || ik < 1) && (0, Dk.c)(676, ek, ik);
-       const mk = kk._device,
-         Mk = rk.mipMaps ?? !1,
-         Kk = rk.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
-         xk = Mk ? (0, Pk.e)(ek, ik) : 1,
-         nk = mk.createTexture({
-           size: {
- ... (49 more removed lines; see GitHub link above)
+     var QC = ZC(39910),
+       wC = ZC(40042),
+       bC = ZC(41369);
+     let nC = !1;
+     nC || (nC = !0, (0, bC.c)(QC.g, wC.d), QC.g.prototype.createPickingRayToRef = function(CC, zC, ZC, QC, wC) {
+       let nC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         fC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
+       return (0, bC.j)(this, CC, zC, ZC, QC, wC, nC, fC)
+     }, QC.g.prototype.createPickingRayInCameraSpace = function(CC, zC, ZC) {
+       return (0, bC.g)(this, CC, zC, ZC)
+     }, QC.g.prototype.createPickingRayInCameraSpaceToRef = function(CC, zC, ZC, QC) {
+       return (0, bC.f)(this, CC, zC, ZC, QC)
+     }, QC.g.prototype.pickWithBoundingInfo = function(CC, zC, ZC, QC, wC) {
+       return (0, bC.p)(this, CC, zC, ZC, QC, wC)
+     }, QC.g.prototype.CM = function(CC, zC, ZC, QC, wC, nC) {
+       let fC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
+ ... (8 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1058` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L673) · [Before (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L1058)

```diff
-   41275: (kk, ek, ik) => {
+   41375: (CC, zC, ZC) => {
```

#### 43. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1062-L1152` → after: `L677-L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L677-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L677-L766) · [Before (L1062-L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L1062-L1152)

```diff
-     var Dk = ik(41223),
-       fk = ik(41232),
-       Sk = ik(41238),
-       bk = ik(41245),
-       rk = ik(41258);
-     async function Pk(kk, ek) {
-       let Pk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-       const [mk, Mk] = function(kk) {
-         const ek = kk,
-           ik = [
-             [ek.displayWidth, ek.displayHeight],
-             [ek.videoWidth, ek.videoHeight],
-             [ek.naturalWidth, ek.naturalHeight],
-             [ek.width, ek.height]
-           ];
-         for (const [Dk, fk] of ik)
- ... (75 more removed lines; see GitHub link above)
+     var QC = ZC(39811),
+       wC = ZC(39818),
+       bC = ZC(36963),
+       nC = ZC(40084),
+       fC = ZC(41384),
+       oC = ZC(40046),
+       qC = ZC(37002);
+     let FC = (() => {
+         var CC;
+         let zC, ZC, oC, qC, FC, WC, NC, MC, gC = fC.d,
+           SC = [],
+           pC = [],
+           PC = [],
+           GC = [],
+           RC = [],
+           AC = [],
+ ... (74 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1154-L1161` → after: `L768-L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L768-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L768-L904) · [Before (L1154-L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L1154-L1161)

```diff
-           }, sk = await (kk._dlr?.x(Hk, Kk, xk, yk, Yk, Ck, Ak, Uk, jk)) ?? await jk(Hk);
-         return (0, Sk.d)(sk), sk
-       } catch (pk) {
-         throw lk.texture?.destroy(), pk
-       } finally {
-         wk?.close()
-       }
-     }
+             const wC = this._orthoRight - this._orthoLeft,
+               nC = this._orthoTop - this._orthoBottom,
+               fC = void 0 !== this.shadowMinZ ? this.shadowMinZ : QC?.minZ || 0,
+               oC = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : QC?.maxZ || 1e4,
+               qC = this.Km().mg().BZC;
+             bC.b.OrthoOffCenterLHToRef(this._orthoLeft - wC * this.shadowOrthoScale, this._orthoRight + wC * this.shadowOrthoScale, this._orthoBottom - nC * this.shadowOrthoScale, this._orthoTop + nC * this.shadowOrthoScale, qC ? oC : fC, qC ? fC : oC, CC, this.Km().mg().isNDCHal … [truncated]
+           }
+           _buildUniformLayout() {
+             this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformB … [truncated]
+           }
+           transferToEffect(CC, zC) {
+             return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, zC), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this. … [truncated]
+           }
+           transferToNodeMaterialEffect(CC, zC) {
+             return this.computeTransformedInformation() ? (CC.setFloat3(zC, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (CC.setFloat3(zC, this.direction.x, this.direction.y, this.direction.z), this)
+           }
+ ... (121 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1163-L1166` → after: `L906-L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L906-L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L906-L908) · [Before (L1163-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L1163-L1166)

```diff
-   41251: (kk, ek, ik) => {
-     ik.r(ek), ik.d(ek, {
-       generateMipmaps: () => nk,
-       recordMipmaps: () => Uk
+   41394: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => jz
```

#### 46. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1168-L1199` → after: `L910-L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L910-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L910-L956) · [Before (L1168-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L1168-L1199)

```diff
-     var Dk = ik(41232),
-       fk = ik(41245),
-       Sk = {
-         magFilter: "linear",
-         minFilter: "linear"
-       };
-     var bk = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*ve … [truncated]
-       rk = null,
-       Pk = null,
-       mk = null,
-       Mk = null,
-       Kk = null;
- 
-     function xk(kk) {
-       const ek = kk._device;
-       ek !== Kk && (rk?.clear(), rk = null, Pk = null, mk = null, Mk = null, Kk = null, Kk = ek), Pk ??= ek.createShaderModule({
- ... (16 more removed lines; see GitHub link above)
+     var QC = ZC(38538),
+       wC = ZC(36987),
+       bC = ZC(36963),
+       nC = ZC(39959),
+       fC = ZC(41396),
+       oC = ZC(36985),
+       qC = ZC(40100),
+       FC = ZC(37142),
+       WC = ZC(38544),
+       NC = ZC(38501),
+       MC = ZC(36991);
+     class gC {
+       constructor() {
+         this.direction1 = new bC.r(0, 1, 0), this.direction2 = new bC.r(0, 1, 0)
+       }
+       startDirectionFunction(CC, zC, ZC, QC) {
+ ... (31 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1201-L1205` → after: `L958-L1004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L958-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L958-L1004) · [Before (L1201-L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L1201-L1205)

```diff
- 
-     function nk(kk, ek, ik) {
-       const Dk = kk._device,
-         fk = Dk.createCommandEncoder();
-       Uk(kk, ek, fk, ik), Dk.queue.submit([fk.finish()])
+     class SC {
+       constructor() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.radius = CC, this.radiusRange = zC, this.directionRandomizer = ZC
+       }
+       startDirectionFunction(CC, zC, ZC, QC) {
+         const wC = ZC.position.subtract(CC.getTranslation()).normalize(),
+           nC = (0, MC.RandomRange)(0, this.directionRandomizer),
+           fC = (0, MC.RandomRange)(0, this.directionRandomizer),
+           oC = (0, MC.RandomRange)(0, this.directionRandomizer);
+         wC.x += nC, wC.y += fC, wC.z += oC, wC.normalize(), QC ? zC.Av(wC) : bC.r.TransformNormalFromFloatsToRef(wC.x, wC.y, wC.z, CC, zC)
+       }
+       startPositionFunction(CC, zC, ZC, QC) {
+         const wC = this.radius - (0, MC.RandomRange)(0, this.radius * this.radiusRange),
+ ... (31 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1207-L1274` → after: `L1006-L1051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L1006-L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L1006-L1051) · [Before (L1207-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L1207-L1274)

```diff
- 
-     function Uk(kk, ek, ik, Dk) {
-       if (ek.mipLevelCount <= 1) return;
-       const fk = kk._device,
-         Sk = function(kk, ek) {
-           const ik = kk._device;
-           xk(kk), rk ??= new Map;
-           let Dk = rk.get(ek);
-           return Dk || (Dk = ik.createRenderPipeline({
-             layout: ik.createPipelineLayout({
-               bindGroupLayouts: [Mk]
-             }),
-             vertex: {
-               module: Pk,
-               entryPoint: "vs"
-             },
- ... (52 more removed lines; see GitHub link above)
+     class pC {
+       constructor() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.radius = CC, this.radiusRange = zC, this.directionRandomizer = ZC
+       }
+       startDirectionFunction(CC, zC, ZC, QC) {
+         const wC = ZC.position.subtract(CC.getTranslation()).normalize(),
+           nC = (0, MC.RandomRange)(0, this.directionRandomizer),
+           fC = (0, MC.RandomRange)(0, this.directionRandomizer),
+           oC = (0, MC.RandomRange)(0, this.directionRandomizer);
+         wC.x += nC, wC.y += fC, wC.z += oC, wC.normalize(), QC ? zC.Av(wC) : bC.r.TransformNormalFromFloatsToRef(wC.x, wC.y, wC.z, CC, zC)
+       }
+       startPositionFunction(CC, zC, ZC, QC) {
+         const wC = this.radius - (0, MC.RandomRange)(0, this.radius * this.radiusRange),
+ ... (30 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1277-L1280` → after: `L1054-L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L1054-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L1054-L1089) · [Before (L1277-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L1277-L1280)

```diff
-   },
-   41258: (kk, ek, ik) => {
-     function Dk(kk, ek) {
-       return Math.floor(Math.log2(Math.max(kk, ek))) + 1
+     class PC extends pC {
+       constructor() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new bC.r(0, 1, 0),
+           ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new bC.r(0, 1, 0);
+         super(CC), this.direction1 = zC, this.direction2 = ZC
+       }
+       startDirectionFunction(CC, zC, ZC, QC) {
+         const wC = (0, MC.RandomRange)(this.direction1.x, this.direction2.x),
+           nC = (0, MC.RandomRange)(this.direction1.y, this.direction2.y),
+           fC = (0, MC.RandomRange)(this.direction1.z, this.direction2.z);
+         QC ? zC.L_(wC, nC, fC) : bC.r.TransformNormalFromFloatsToRef(wC, nC, fC, CC, zC)
+       }
+       clone() {
+         const CC = new PC(this.radius, this.direction1, this.direction2);
+         return NC.e.DeepCopy(this, CC), CC
+ ... (20 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1282-L1332` → after: `L1091-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L1091-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L1091-L1156) · [Before (L1282-L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L1282-L1332)

```diff
-     ik.d(ek, {
-       e: () => Dk
-     })
-   },
-   41215: (kk, ek, ik) => {
-     ik.d(ek, {
-       b: () => mk,
-       d: () => Mk
-     });
-     var Dk = ik(41223),
-       fk = ik(41232),
-       Sk = ik(41238),
-       bk = ik(41245),
-       rk = ik(41251),
-       Pk = ik(41258);
- 
- ... (35 more removed lines; see GitHub link above)
+     var GC = ZC(38497);
+     class RC {
+       get radius() {
+         return this._radius
+       }
+       set radius(CC) {
+         this._radius = CC, this._buildHeight()
+       }
+       get angle() {
+         return this._angle
+       }
+       set angle(CC) {
+         this._angle = CC, this._buildHeight()
+       }
+       _buildHeight() {
+         0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
+ ... (50 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1334-L1347` → after: `L1158-L1561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L1158-L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/303.js#L1158-L1561) · [Before (L1334-L1347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/303.js#L1334-L1347)

```diff
- 
-     function Mk(kk, ek, ik, fk) {
-       let Sk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
-       (ik < 0 || ik >= ek.layers || (0 | ik) !== ik) && (0, Dk.c)(723, ek.layers, ik);
-       const bk = Sk.invertY ?? !0,
-         Pk = Sk.premultiplyAlpha ?? !1;
-       kk._device.queue.copyExternalImageToTexture({
-         source: fk,
-         flipY: bk
-       }, {
-         texture: ek.texture,
-         origin: [0, 0, ik],
-         premultipliedAlpha: Pk
-       }, [ek.width, ek.height, 1]), ek.texture.mipLevelCount > 1 && (0, rk.generateMipmaps)(kk, ek.texture, ik)
+     class AC extends RC {
+       constructor() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
+           ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new bC.r(0, 1, 0),
+           QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new bC.r(0, 1, 0);
+         super(CC, zC), this.direction1 = ZC, this.direction2 = QC
+       }
+       startDirectionFunction(CC, zC, ZC, QC) {
+         const wC = (0, MC.RandomRange)(this.direction1.x, this.direction2.x),
+           nC = (0, MC.RandomRange)(this.direction1.y, this.direction2.y),
+           fC = (0, MC.RandomRange)(this.direction1.z, this.direction2.z);
+         QC ? zC.L_(wC, nC, fC) : bC.r.TransformNormalFromFloatsToRef(wC, nC, fC, CC, zC)
+       }
+       clone() {
+         const CC = new AC(this.radius, this.angle, this.direction1, this.direction2);
+ ... (388 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/304.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/304.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc)

#### 1. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/304.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/304.js#L4)

```diff
-   41321: (kk, ek, ik) => {
+   41514: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L6` → after: `L6-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/304.js#L6-L11) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/304.js#L6)

```diff
-       parseShaderPack: () => Dk
+       e: () => NC,
+       i: () => PC,
+       j: () => MC,
+       n: () => gC,
+       q: () => RC,
+       s: () => GC
```

#### 3. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L10-L15` → after: `L18-L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L18-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/304.js#L18-L415) · [Before (L10-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/304.js#L10-L15)

```diff
-       var ek, ik;
-       const Dk = kk.get("shaderPackUrl"),
-         fk = null !== (ek = kk.get("shaderPackMode")) && void 0 !== ek ? ek : "strict";
-       if (null === Dk) {
-         if (kk.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
-         return null
+       return "clientWidth" in CC
+     }
+     var fC = 1;
+ 
+     function oC(CC, zC, ZC) {
+       const oC = zC.getContext("webgpu");
+       oC || (0, QC.b)(54), nC(zC) && zC.setAttribute("data-engine", wC);
+       const qC = ZC?.format ?? navigator.gpu.getPreferredCanvasFormat(),
+         FC = ZC?.srgb ? (WC = qC).endsWith("-srgb") ? WC : `${WC}-srgb` : qC;
+       var WC;
+       const NC = ZC?.alphaMode ?? "opaque";
+       oC.configure({
+         device: CC._device,
+         format: qC,
+         alphaMode: NC,
+         viewFormats: [FC]
+ ... (382 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L17-L22` → after: `L417-L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L417-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/304.js#L417-L578) · [Before (L17-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/304.js#L17-L22)

```diff
-       if ("lite" !== kk.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
-       if (! function(kk) {
-           return "strict" === kk || "allow" === kk
-         }(fk)) throw new Error(`Unknown shaderPackMode "${fk}" - use strict or allow`);
-       const Sk = (null !== (ik = kk.get("variants")) && void 0 !== ik ? ik : "").split(",").find((kk => kk.trim().startsWith("liteShaderPack")));
-       if (void 0 !== Sk) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${Sk.trim()}`);
+     }
+     var nC = ZC(41532);
+ 
+     function fC(CC) {
+       const zC = CC.worldMatrixVersion;
+       if (CC._viewVer === zC) return CC._viewCache;
+       const ZC = CC._viewCache,
+         QC = CC.worldMatrix,
+         wC = CC._useFloatingOrigin,
+         bC = wC ? 0 : QC[12],
+         nC = wC ? 0 : QC[13],
+         fC = wC ? 0 : QC[14];
+       return ZC[0] = QC[0], ZC[1] = QC[4], ZC[2] = QC[8], ZC[3] = 0, ZC[4] = QC[1], ZC[5] = QC[5], ZC[6] = QC[9], ZC[7] = 0, ZC[8] = QC[2], ZC[9] = QC[6], ZC[10] = QC[10], ZC[11] = 0, ZC[12] = -(QC[0] * bC + QC[1] * nC + QC[2] * fC), ZC[13] = -(QC[4] * bC + QC[5] * nC + QC[6] * f … [truncated]
+     }
+     var oC = null;
+ 
+ ... (146 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L24-L25` → after: `L580-L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L580-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/304.js#L580-L775) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/304.js#L24-L25)

```diff
-         url: Dk,
-         mode: fk
+         _renderables: CC,
+         _opaqueBindings: [],
+         _directBindings: [],
+         _transparentBindings: [],
+         _ob: [],
+         _lastVersion: zC
+       }
+     }
+ 
+     function eC(CC, zC, ZC) {
+       CC.clr ??= !0;
+       const wC = CC.rt._descriptor,
+         bC = CC.depth?._descriptor,
+         oC = {
+           _colorFormat: wC.format,
+           _depthStencilFormat: bC?.dFormat ?? wC.dFormat,
+ ... (180 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/305.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/305.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e)

#### 1. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/305.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/305.js#L4)

```diff
-   41347: (kk, ek, ik) => {
+   41563: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/305.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/305.js#L6)

```diff
-       b: () => mk
+       parseShaderPack: () => QC
```

#### 3. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L8-L15` → after: `L8-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L8-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/305.js#L8-L25) · [Before (L8-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/305.js#L8-L15)

```diff
-     var Dk = ik(36698),
-       fk = ik(36729),
-       Sk = ik(39558),
-       bk = ik(36703),
-       rk = ik(36874);
-     class Pk {
-       constructor(kk, ek, ik, Dk) {
-         this.name = kk, this.worldAxisForNormal = ek, this.worldAxisForFileX = ik, this.worldAxisForFileY = Dk
+ 
+     function QC(CC) {
+       var zC, ZC;
+       const QC = CC.get("shaderPackUrl"),
+         wC = null !== (zC = CC.get("shaderPackMode")) && void 0 !== zC ? zC : "strict";
+       if (null === QC) {
+         if (CC.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
+         return null
+       }
+       if ("lite" !== CC.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
+       if (! function(CC) {
+           return "strict" === CC || "allow" === CC
+         }(wC)) throw new Error(`Unknown shaderPackMode "${wC}" - use strict or allow`);
+       const bC = (null !== (ZC = CC.get("variants")) && void 0 !== ZC ? ZC : "").split(",").find((CC => CC.trim().startsWith("liteShaderPack")));
+       if (void 0 !== bC) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${bC.trim()}`);
+       return {
+ ... (2 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/306.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/306.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2)

#### 1. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/306.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/306.js#L2)

```diff
- export const ids = [305, 306];
+ export const ids = [306];
```

#### 2. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L4-L43` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/306.js#L4) · [Before (L4-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/306.js#L4-L43)

```diff
-   41358: (kk, ek, ik) => {
-     ik.r(ek), ik.d(ek, {
-       _DDSTextureLoader: () => Sk
-     });
-     var Dk = ik(39558),
-       fk = ik(41338);
-     class Sk {
-       constructor() {
-         this.supportCascades = !0
-       }
-       loadCubeData(kk, ek, ik, Sk) {
-         const bk = ek.JU();
-         let rk, Pk = !1,
-           mk = 1e3;
-         if (Array.isArray(kk))
-           for (let Dk = 0; Dk < kk.length; Dk++) {
- ... (24 more removed lines; see GitHub link above)
+   41590: (CC, zC, ZC) => {
```

#### 3. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L47-L51` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/306.js#L8-L12) · [Before (L47-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/306.js#L47-L51)

```diff
-     var Dk = ik(36698),
-       fk = ik(36729),
-       Sk = ik(39558),
-       bk = ik(36703),
-       rk = ik(36874);
+     var QC = ZC(36963),
+       wC = ZC(36991),
+       bC = ZC(39800),
+       nC = ZC(36968),
+       fC = ZC(37142);
```

#### 4. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L63` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/306.js#L24) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/306.js#L63)

```diff
-         kk.XF()?.JU().flushFramebuffer();
+         CC.Km()?.mg().flushFramebuffer();
```

#### 5. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L106` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/306.js#L67) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/306.js#L106)

```diff
-         const fk = kk instanceof Float32Array ? kk : Float32Array.from(kk),
+         const wC = CC instanceof Float32Array ? CC : Float32Array.from(CC),
```

#### 6. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L145` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/306.js#L106) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/306.js#L145)

```diff
-         const Dk = new Sk.b;
+         const QC = new bC.c;
```

#### 7. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L181` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/306.js#L142) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/306.js#L181)

```diff
-         return Dk.scaleInPlace(nk), Dk.convertIncidentRadianceToIrradiance(), Dk.convertIrradianceToLambertianRadiance(), Sk.f.FromHarmonics(Dk)
+         return QC.scaleInPlace(MC), QC.convertIncidentRadianceToIrradiance(), QC.convertIrradianceToLambertianRadiance(), bC.g.FromHarmonics(QC)
```

#### 8. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L184` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/306.js#L145) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/306.js#L184)

```diff
-     mk._FileFaces = [new Pk("right", new Dk.o(1, 0, 0), new Dk.o(0, 0, -1), new Dk.o(0, -1, 0)), new Pk("left", new Dk.o(-1, 0, 0), new Dk.o(0, 0, 1), new Dk.o(0, -1, 0)), new Pk("up", new Dk.o(0, 1, 0), new Dk.o(1, 0, 0), new Dk.o(0, 0, 1)), new Pk("down", new Dk.o(0, -1, 0), ne … [truncated]
+     qC._FileFaces = [new oC("right", new QC.r(1, 0, 0), new QC.r(0, 0, -1), new QC.r(0, -1, 0)), new oC("left", new QC.r(-1, 0, 0), new QC.r(0, 0, 1), new QC.r(0, -1, 0)), new oC("up", new QC.r(0, 1, 0), new QC.r(1, 0, 0), new QC.r(0, 0, 1)), new oC("down", new QC.r(0, -1, 0), ne … [truncated]
```

#### 9. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L186` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/306.js#L147) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/306.js#L186)

```diff
-   41338: (kk, ek, ik) => {
+   41585: (CC, zC, ZC) => {
```

#### 10. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L190-L193` → after: `L151-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L151-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/306.js#L151-L154) · [Before (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/306.js#L190-L193)

```diff
-     var Dk = ik(36729),
-       fk = ik(38272),
-       Sk = ik(41347),
-       bk = ik(39628);
+     var QC = ZC(36991),
+       wC = ZC(38507),
+       bC = ZC(41590),
+       nC = ZC(39889);
```

#### 11. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L220` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/306.js#L181) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/306.js#L220)

```diff
-           case nk:
+           case MC:
```

#### 12. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L250` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/306.js#L211) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/306.js#L250)

```diff
-             rk[mk] = (0, bk.e)(Pk[ik]), rk[mk + 1] = (0, bk.e)(Pk[ik + 1]), rk[mk + 2] = (0, bk.e)(Pk[ik + 2]), Uk.StoreLODInAlphaChannel ? rk[mk + 3] = Sk : rk[mk + 3] = (0, bk.e)(Pk[ik + 3]), mk += 4
+             fC[qC] = (0, nC.e)(oC[ZC]), fC[qC + 1] = (0, nC.e)(oC[ZC + 1]), fC[qC + 2] = (0, nC.e)(oC[ZC + 2]), gC.StoreLODInAlphaChannel ? fC[qC + 3] = bC : fC[qC + 3] = (0, nC.e)(oC[ZC + 3]), qC += 4
```

#### 13. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L262` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/306.js#L223) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/306.js#L262)

```diff
-               rk[mk] = Pk[Dk], rk[mk + 1] = Pk[Dk + 1], rk[mk + 2] = Pk[Dk + 2], rk[mk + 3] = (0, bk.i)(Sk), mk += 4
+               fC[qC] = oC[QC], fC[qC + 1] = oC[QC + 1], fC[qC + 2] = oC[QC + 2], fC[qC + 3] = (0, nC.k)(bC), qC += 4
```

#### 14. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L287` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/306.js#L248) · [Before (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/306.js#L287)

```diff
-           for (let ek = 0; ek < kk; ek++) rk[mk] = (0, bk.i)(Pk[mk]), rk[mk + 1] = (0, bk.i)(Pk[mk + 1]), rk[mk + 2] = (0, bk.i)(Pk[mk + 2]), Uk.StoreLODInAlphaChannel ? rk[mk + 3] = (0, bk.i)(Sk) : rk[mk + 3] = (0, bk.i)(Pk[mk + 3]), mk += 4;
+           for (let zC = 0; zC < CC; zC++) fC[qC] = (0, nC.k)(oC[qC]), fC[qC + 1] = (0, nC.k)(oC[qC + 1]), fC[qC + 2] = (0, nC.k)(oC[qC + 2]), gC.StoreLODInAlphaChannel ? fC[qC + 3] = (0, nC.k)(bC) : fC[qC + 3] = (0, nC.k)(oC[qC + 3]), qC += 4;
```

#### 15. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L297` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/306.js#L258) · [Before (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/306.js#L297)

```diff
-             rk[mk] = 255 * (0, Dk.Clamp)(Pk[ik]), rk[mk + 1] = 255 * (0, Dk.Clamp)(Pk[ik + 1]), rk[mk + 2] = 255 * (0, Dk.Clamp)(Pk[ik + 2]), Uk.StoreLODInAlphaChannel ? rk[mk + 3] = bk : rk[mk + 3] = 255 * (0, Dk.Clamp)(Pk[ik + 3]), mk += 4
+             fC[qC] = 255 * (0, QC.Clamp)(oC[ZC]), fC[qC + 1] = 255 * (0, QC.Clamp)(oC[ZC + 1]), fC[qC + 2] = 255 * (0, QC.Clamp)(oC[ZC + 2]), gC.StoreLODInAlphaChannel ? fC[qC + 3] = nC : fC[qC + 3] = 255 * (0, QC.Clamp)(oC[ZC + 3]), qC += 4
```

#### 16. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L308` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/306.js#L269) · [Before (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/306.js#L308)

```diff
-             Pk[Mk] = 255 * (0, Dk.Clamp)((0, bk.e)(mk[ik])), Pk[Mk + 1] = 255 * (0, Dk.Clamp)((0, bk.e)(mk[ik + 1])), Pk[Mk + 2] = 255 * (0, Dk.Clamp)((0, bk.e)(mk[ik + 2])), Uk.StoreLODInAlphaChannel ? Pk[Mk + 3] = rk : Pk[Mk + 3] = 255 * (0, Dk.Clamp)((0, bk.e)(mk[ik + 3])), Mk … [truncated]
+             oC[FC] = 255 * (0, QC.Clamp)((0, nC.e)(qC[ZC])), oC[FC + 1] = 255 * (0, QC.Clamp)((0, nC.e)(qC[ZC + 1])), oC[FC + 2] = 255 * (0, QC.Clamp)((0, nC.e)(qC[ZC + 2])), gC.StoreLODInAlphaChannel ? oC[FC + 3] = fC : oC[FC + 3] = 255 * (0, QC.Clamp)((0, nC.e)(qC[ZC + 3])), FC … [truncated]
```

#### 17. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L360-L362` → after: `L321-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L321-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/306.js#L321-L323) · [Before (L360-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/306.js#L360-L362)

```diff
-         if (542327876 !== yk[0]) return void fk.b.Error("Invalid magic number in DDS header");
-         if (!Dk.isFourCC && !Dk.isRGB && !Dk.isLuminance) return void fk.b.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
-         if (Dk.isCompressed && !pk) return void fk.b.Error("Compressed textures are not supported on this platform.");
+         if (542327876 !== RC[0]) return void wC.c.Error("Invalid magic number in DDS header");
+         if (!QC.isFourCC && !QC.isRGB && !QC.isLuminance) return void wC.c.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
+         if (QC.isCompressed && !GC) return void wC.c.Error("Compressed textures are not supported on this platform.");
```

#### 18. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L367` → after: `L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/306.js#L328) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/306.js#L367)

```diff
-           case Mk:
+           case FC:
```

#### 19. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L370` → after: `L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/306.js#L331) · [Before (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/306.js#L370)

```diff
-           case Kk:
+           case WC:
```

#### 20. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L373` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/306.js#L334) · [Before (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/306.js#L373)

```diff
-           case xk:
+           case NC:
```

#### 21. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L382` → after: `L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/306.js#L343) · [Before (L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/306.js#L382)

```diff
-           case nk: {
+           case MC: {
```

#### 22. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L398` → after: `L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/306.js#L359) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/306.js#L398)

```diff
-             return void fk.b.Error(["Unsupported FourCC code:", (zk = Yk, String.fromCharCode(255 & zk, zk >> 8 & 255, zk >> 16 & 255, zk >> 24 & 255))])
+             return void wC.c.Error(["Unsupported FourCC code:", (HC = AC, String.fromCharCode(255 & HC, HC >> 8 & 255, HC >> 16 & 255, HC >> 24 & 255))])
```

#### 23. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L411` → after: `L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/306.js#L372) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/306.js#L411)

```diff
-               const Sk = -1 === mk ? dk : 0;
+               const bC = -1 === qC ? eC : 0;
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/307.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/307.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a)

#### 1. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/307.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/307.js#L2)

```diff
- export const ids = [307];
+ export const ids = [306, 307];
```

#### 2. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/307.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/307.js#L4)

```diff
-   41373: (kk, ek, ik) => {
+   41600: (CC, zC, ZC) => {
```

#### 3. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/307.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/307.js#L6)

```diff
-       _ENVTextureLoader: () => sk
+       _DDSTextureLoader: () => bC
```

#### 4. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8-L222` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/307.js#L8-L9) · [Before (L8-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/307.js#L8-L222)

```diff
-     var Dk = ik(39501),
-       fk = ik(36698),
-       Sk = ik(36729),
-       bk = ik(39558),
-       rk = ik(39391),
-       Pk = ik(39564),
-       mk = (ik(39653), ik(41376)),
-       Mk = ik(38272),
-       Kk = (ik(41393), ik(41413), ik(39623));
-     const xk = "image/png",
-       nk = [134, 22, 135, 150, 246, 214, 150, 54];
- 
-     function Uk(kk) {
-       const ek = new DataView(kk.buffer, kk.byteOffset, kk.byteLength);
-       let ik = 0;
-       for (let bk = 0; bk < nk.length; bk++)
- ... (199 more removed lines; see GitHub link above)
+     var QC = ZC(39800),
+       wC = ZC(41585);
```

#### 5. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L225` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/307.js#L12) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/307.js#L225)

```diff
-         this.supportCascades = !1
+         this.supportCascades = !0
```

#### 6. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L227-L239` → after: `L14-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L14-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/307.js#L14-L24) · [Before (L227-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/307.js#L227-L239)

```diff
-       loadCubeData(kk, ek, ik, Dk, fk) {
-         if (Array.isArray(kk)) return;
-         const Sk = Uk(kk);
-         if (Sk) {
-           ek.width = Sk.width, ek.height = Sk.width;
-           try {
-             (0, jk.d)(), Ak(ek, Sk), pk(ek, kk, Sk).then((() => {
-               ek.isReady = !0, ek.onLoadedObservable.notifyObservers(ek), ek.onLoadedObservable.clear(), Dk && Dk()
-             }), (kk => {
-               fk?.("Can not upload environment levels", kk)
-             }))
-           } catch (bk) {
-             fk?.("Can not upload environment file", bk)
+       loadCubeData(CC, zC, ZC, bC) {
+         const nC = zC.mg();
+         let fC, oC = !1,
+           qC = 1e3;
+         if (Array.isArray(CC))
+           for (let QC = 0; QC < CC.length; QC++) {
+             const ZC = CC[QC];
+             fC = wC.DDSTools.GetDDSInfo(ZC), zC.width = fC.width, zC.height = fC.height, oC = (fC.isRGB || fC.isLuminance || fC.mipmapCount > 1) && zC.generateMipMaps, nC._unpackFlipY(fC.isCompressed), wC.DDSTools.UploadDDSLevels(nC, zC, ZC, fC, oC, 6, -1, QC), fC.isFourCC || 1 ! … [truncated]
+           } else {
+             const bC = CC;
+             fC = wC.DDSTools.GetDDSInfo(bC), zC.width = fC.width, zC.height = fC.height, ZC && (fC.sphericalPolynomial = new QC.g), oC = (fC.isRGB || fC.isLuminance || fC.mipmapCount > 1) && zC.generateMipMaps, nC._unpackFlipY(fC.isCompressed), wC.DDSTools.UploadDDSLevels(nC, zC, … [truncated]
```

#### 7. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L241` → after: `L26-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L26-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/307.js#L26-L32) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/307.js#L241)

```diff
-         } else fk && fk("Can not parse the environment file", null)
+         nC._setCubeMapTextureParams(zC, oC, qC), zC.isReady = !0, zC.onLoadedObservable.notifyObservers(zC), zC.onLoadedObservable.clear(), bC && bC({
+           isDDS: !0,
+           width: zC.width,
+           info: fC,
+           data: CC,
+           texture: zC
+         })
```

#### 8. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L243-L244` → after: `L34-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L34-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/307.js#L34-L39) · [Before (L243-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/307.js#L243-L244)

```diff
-       loadData() {
-         throw ".env not supported in 2d."
+       loadData(CC, zC, ZC) {
+         const QC = wC.DDSTools.GetDDSInfo(CC),
+           bC = (QC.isRGB || QC.isLuminance || QC.mipmapCount > 1) && zC.generateMipMaps && Math.max(QC.width, QC.height) >> QC.mipmapCount - 1 === 1;
+         ZC(QC.width, QC.height, bC, QC.isFourCC, (() => {
+           wC.DDSTools.UploadDDSLevels(zC.mg(), zC, CC, QC, bC, 1)
+         }))
```

#### 9. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L248-L277` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/307.js#L43) · [Before (L248-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/307.js#L248-L277)

```diff
-   41420: (kk, ek, ik) => {
-     ik.d(ek, {
-       d: () => bk
-     });
-     var Dk = ik(41347),
-       fk = ik(39564);
-     let Sk = !1;
- 
-     function bk() {
-       Sk || (Sk = !0, fk.b.prototype._sphericalPolynomialTargetSize = 0, fk.b.prototype.forceSphericalPolynomialsRecompute = function() {
-         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
-       }, Object.defineProperty(fk.b.prototype, "sphericalPolynomial", {
-         get: function() {
-           if (this._texture) {
-             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
-             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Dk.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
- ... (14 more removed lines; see GitHub link above)
+   41590: (CC, zC, ZC) => {
```

#### 10. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L281-L285` → after: `L47-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L47-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/307.js#L47-L51) · [Before (L281-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/307.js#L281-L285)

```diff
-     var Dk = ik(36698),
-       fk = ik(36729),
-       Sk = ik(39558),
-       bk = ik(36703),
-       rk = ik(36874);
+     var QC = ZC(36963),
+       wC = ZC(36991),
+       bC = ZC(39800),
+       nC = ZC(36968),
+       fC = ZC(37142);
```

#### 11. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L297` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/307.js#L63) · [Before (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/307.js#L297)

```diff
-         kk.XF()?.JU().flushFramebuffer();
+         CC.Km()?.mg().flushFramebuffer();
```

#### 12. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L340` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/307.js#L106) · [Before (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/307.js#L340)

```diff
-         const fk = kk instanceof Float32Array ? kk : Float32Array.from(kk),
+         const wC = CC instanceof Float32Array ? CC : Float32Array.from(CC),
```

#### 13. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L379` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/307.js#L145) · [Before (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/307.js#L379)

```diff
-         const Dk = new Sk.b;
+         const QC = new bC.c;
```

#### 14. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L415` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/307.js#L181) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/307.js#L415)

```diff
-         return Dk.scaleInPlace(nk), Dk.convertIncidentRadianceToIrradiance(), Dk.convertIrradianceToLambertianRadiance(), Sk.f.FromHarmonics(Dk)
+         return QC.scaleInPlace(MC), QC.convertIncidentRadianceToIrradiance(), QC.convertIrradianceToLambertianRadiance(), bC.g.FromHarmonics(QC)
```

#### 15. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L418` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/307.js#L184) · [Before (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/307.js#L418)

```diff
-     mk._FileFaces = [new Pk("right", new Dk.o(1, 0, 0), new Dk.o(0, 0, -1), new Dk.o(0, -1, 0)), new Pk("left", new Dk.o(-1, 0, 0), new Dk.o(0, 0, 1), new Dk.o(0, -1, 0)), new Pk("up", new Dk.o(0, 1, 0), new Dk.o(1, 0, 0), new Dk.o(0, 0, 1)), new Pk("down", new Dk.o(0, -1, 0), ne … [truncated]
+     qC._FileFaces = [new oC("right", new QC.r(1, 0, 0), new QC.r(0, 0, -1), new QC.r(0, -1, 0)), new oC("left", new QC.r(-1, 0, 0), new QC.r(0, 0, 1), new QC.r(0, -1, 0)), new oC("up", new QC.r(0, 1, 0), new QC.r(1, 0, 0), new QC.r(0, 0, 1)), new oC("down", new QC.r(0, -1, 0), ne … [truncated]
```

#### 16. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L420` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/307.js#L186) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/307.js#L420)

```diff
-   41393: (kk, ek, ik) => {
+   41585: (CC, zC, ZC) => {
```

#### 17. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L422` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/307.js#L188) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/307.js#L422)

```diff
-       e: () => Sk
+       DDSTools: () => gC
```

#### 18. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L424-L425` → after: `L190-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L190-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/307.js#L190-L203) · [Before (L424-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/307.js#L424-L425)

```diff
-     var Dk = ik(41376),
-       fk = ik(41397);
+     var QC = ZC(36991),
+       wC = ZC(38507),
+       bC = ZC(41590),
+       nC = ZC(39889);
+     const fC = 131072,
+       oC = 131072;
+ 
+     function qC(CC) {
+       return CC.charCodeAt(0) + (CC.charCodeAt(1) << 8) + (CC.charCodeAt(2) << 16) + (CC.charCodeAt(3) << 24)
+     }
+     const FC = qC("DXT1"),
+       WC = qC("DXT3"),
+       NC = qC("DXT5"),
+       MC = qC("DX10");
```

#### 19. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L427-L457` → after: `L205-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L205-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/307.js#L205-L310) · [Before (L427-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/307.js#L427-L457)

```diff
-       static ExpandRGBDTexture(kk) {
-         const ek = kk._texture;
-         if (!ek || !kk.isRGBD) return;
-         const fk = ek.JU(),
-           Sk = fk.getCaps(),
-           bk = ek.isReady;
-         let rk = !1;
-         Sk.textureHalfFloatRender && Sk.textureHalfFloatLinearFiltering ? (rk = !0, ek.type = 2) : Sk.textureFloatRender && Sk.textureFloatLinearFiltering && (rk = !0, ek.type = 1), rk && (ek.isReady = !1, ek._isRGBD = !1, ek.invertY = !1);
-         const Pk = async () => {
-           const Sk = fk.isWebGPU,
-             bk = Sk ? 1 : 0;
-           ek.isReady = !1, Sk ? await ik.e(341).then((() => ik(60794))) : await ik.e(323).then((() => ik(60800)));
-           const rk = new Dk.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, fk, !1, void 0, ek.type, void 0, null, !1, void 0, bk);
-           rk.externalTextureSamplerBinding = !0;
-           const Pk = fk.createRenderTargetTexture(ek.width, {
-             generateDepthBuffer: !1,
- ... (15 more removed lines; see GitHub link above)
+       static GetDDSInfo(CC) {
+         const zC = new Int32Array(CC.buffer, CC.byteOffset, 31),
+           ZC = new Int32Array(CC.buffer, CC.byteOffset, 35);
+         let QC = 1;
+         zC[2] & fC && (QC = Math.max(1, zC[7]));
+         const wC = zC[21],
+           bC = wC === MC ? ZC[32] : 0;
+         let nC = 0;
+         switch (wC) {
+           case 113:
+             nC = 2;
+             break;
+           case 116:
+             nC = 1;
+             break;
+           case MC:
+ ... (90 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L459-L461` → after: `L312-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L312-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/307.js#L312-L465) · [Before (L459-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/307.js#L459-L461)

```diff
-       static async EncodeTextureToRGBD(kk, ek) {
-         let Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         return ek.JU().isWebGPU ? await ik.e(342).then((() => ik(60811))) : await ik.e(324).then((() => ik(60807))), await (0, fk.c)("rgbdEncode", kk, ek, Dk, 1, 5)
+       static _GetRGBAArrayBuffer(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
+         const qC = new Uint8Array(QC),
+           FC = new Uint8Array(wC, ZC);
+         let WC = 0;
+         for (let NC = 0; NC < zC; NC++)
+           for (let zC = 0; zC < CC; zC++) {
+             const ZC = 4 * (zC + NC * CC);
+             qC[WC] = FC[ZC + bC], qC[WC + 1] = FC[ZC + nC], qC[WC + 2] = FC[ZC + fC], qC[WC + 3] = FC[ZC + oC], WC += 4
+           }
+         return qC
+       }
+       static _ExtractLongWordOrder(CC) {
+         return 0 === CC || 255 === CC || -16777216 === CC ? 0 : 1 + gC._ExtractLongWordOrder(CC >> 8)
+       }
+       static _GetRGBArrayBuffer(CC, zC, ZC, QC, wC, bC, nC, fC) {
+         const oC = new Uint8Array(QC),
+ ... (138 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/308.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/308.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e)

#### 1. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/308.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/308.js#L4)

```diff
-   41355: (kk, ek, ik) => {
+   41612: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/308.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/308.js#L6)

```diff
-       _IESTextureLoader: () => rk
+       _ENVTextureLoader: () => vC
```

#### 3. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L8` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/308.js#L8-L18) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/308.js#L8)

```diff
-     var Dk = ik(36729);
+     var QC = ZC(39747),
+       wC = ZC(36963),
+       bC = ZC(36991),
+       nC = ZC(39800),
+       fC = ZC(39650),
+       oC = ZC(39803),
+       qC = (ZC(39910), ZC(41618)),
+       FC = ZC(38507),
+       WC = (ZC(41630), ZC(41648), ZC(39882));
+     const NC = "image/png",
+       MC = [134, 22, 135, 150, 246, 214, 150, 54];
```

#### 4. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L11` → after: `L21-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L21-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/308.js#L21-L66) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/308.js#L11)

```diff
-       return kk.split(" ").filter((kk => "" !== kk)).map((kk => parseFloat(kk)))
+       const zC = new DataView(CC.buffer, CC.byteOffset, CC.byteLength);
+       let ZC = 0;
+       for (let nC = 0; nC < MC.length; nC++)
+         if (zC.getUint8(ZC++) !== MC[nC]) return FC.c.Error("Not a babylon environment map"), null;
+       let QC, wC = "";
+       for (; QC = zC.getUint8(ZC++);) wC += String.fromCharCode(QC);
+       let bC = JSON.parse(wC);
+       return bC = SC(bC), bC.binaryDataPosition = ZC, bC.specular && (bC.specular.lodGenerationScale = bC.specular.lodGenerationScale || .8), bC
+     }
+ 
+     function SC(CC) {
+       if (CC.version > 2) throw new Error(`Unsupported babylon environment map version "${CC.version}". Latest supported version is "2".`);
+       return 2 === CC.version ? CC : CC = {
+         ...CC,
+         version: 2,
+         imageType: NC
+ ... (30 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L15-L45` → after: `L70-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L70-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/308.js#L70-L222) · [Before (L15-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/308.js#L15-L45)

```diff
-       for (; ik.length !== ek;) {
-         const ek = fk(kk.lines[kk.index++]);
-         ik.push(...ek)
-       }
-     }
- 
-     function bk(kk, ek, ik) {
-       let fk = 0,
-         Sk = 0,
-         bk = 0,
-         rk = 0,
-         Pk = 0,
-         mk = 0;
-       for (let Dk = 0; Dk < kk.numberOfHorizontalAngles - 1; Dk++)
-         if (ik < kk.horizontalAngles[Dk + 1] || Dk === kk.numberOfHorizontalAngles - 2) {
-           Sk = Dk, bk = kk.horizontalAngles[Dk], rk = kk.horizontalAngles[Dk + 1];
- ... (15 more removed lines; see GitHub link above)
+       const QC = (ZC = SC(ZC)).specular;
+       if (!QC) return Promise.resolve([]);
+       CC._lodGenerationScale = QC.lodGenerationScale;
+       const bC = [],
+         nC = pC(zC, ZC);
+       bC.push(AC(CC, nC, ZC.imageType));
+       const fC = ZC.irradiance?.irradianceTexture;
+       if (fC) {
+         const QC = PC(zC, ZC);
+         let nC = null;
+         ZC.irradiance?.irradianceTexture?.dominantDirection && (nC = wC.r.FromArray(ZC.irradiance.irradianceTexture.dominantDirection)), bC.push(xC(CC, QC, fC.size, ZC.imageType, nC))
+       }
+       return Promise.all(bC)
+     }
+     async function RC(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC) {
+       return await new Promise(((WC, NC) => {
+ ... (137 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L50-L65` → after: `L227-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L227-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/308.js#L227-L330) · [Before (L50-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/308.js#L50-L65)

```diff
-       loadCubeData() {
-         throw ".ies not supported in Cube."
-       }
-       loadData(kk, ek, ik) {
-         const Dk = function(kk) {
-           const ek = {
-               lines: new TextDecoder("utf-8").decode(kk).split("\n"),
-               index: 0
-             },
-             ik = {
-               version: ek.lines[0],
-               candelaValues: [],
-               horizontalAngles: [],
-               verticalAngles: [],
-               numberOfHorizontalAngles: 0,
-               numberOfVerticalAngles: 0
+       loadCubeData(CC, zC, ZC, QC, wC) {
+         if (Array.isArray(CC)) return;
+         const bC = gC(CC);
+         if (bC) {
+           zC.width = bC.width, zC.height = bC.width;
+           try {
+             (0, iC.e)(), IC(zC, bC), GC(zC, CC, bC).then((() => {
+               zC.isReady = !0, zC.onLoadedObservable.notifyObservers(zC), zC.onLoadedObservable.clear(), QC && QC()
+             }), (CC => {
+               wC?.("Can not upload environment levels", CC)
+             }))
+           } catch (nC) {
+             wC?.("Can not upload environment file", nC)
+           }
+         } else wC && wC("Can not parse the environment file", null)
+       }
+ ... (88 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L67-L98` → after: `L332-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L332-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/308.js#L332-L333) · [Before (L67-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/308.js#L67-L98)

```diff
-           for (ek.index = 1; ek.lines.length > 0 && !ek.lines[ek.index].includes("TILT=");) ek.index++;
-           ek.lines[ek.index].includes("INCLUDE"), ek.index++;
-           const Dk = fk(ek.lines[ek.index++]);
-           ik.numberOfLights = Dk[0], ik.lumensPerLamp = Dk[1], ik.numberOfVerticalAngles = Dk[3], ik.numberOfHorizontalAngles = Dk[4], ik.photometricType = Dk[5], ik.unitsType = Dk[6], ik.width = Dk[7], ik.length = Dk[8], ik.height = Dk[9], ek.index++;
-           for (let fk = 0; fk < ik.numberOfHorizontalAngles; fk++) ik.candelaValues[fk] = [];
-           Sk(ek, ik.numberOfVerticalAngles, ik.verticalAngles), Sk(ek, ik.numberOfHorizontalAngles, ik.horizontalAngles);
-           for (let fk = 0; fk < ik.numberOfHorizontalAngles; fk++) Sk(ek, ik.numberOfVerticalAngles, ik.candelaValues[fk]);
-           let rk = -1;
-           for (let fk = 0; fk < ik.numberOfHorizontalAngles; fk++)
-             for (let kk = 0; kk < ik.numberOfVerticalAngles; kk++) rk = Math.max(rk, ik.candelaValues[fk][kk]);
-           if (rk > 0)
-             for (let fk = 0; fk < ik.numberOfHorizontalAngles; fk++)
-               for (let kk = 0; kk < ik.numberOfVerticalAngles; kk++) ik.candelaValues[fk][kk] /= rk;
-           const Pk = 180,
-             mk = 360,
-             Mk = new Float32Array(64800),
- ... (16 more removed lines; see GitHub link above)
+             CC(this.ConvertCubeMapToSphericalPolynomial(NC))
+           }))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/309.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/309.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868)

#### 1. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/309.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/309.js#L4)

```diff
-   41367: (kk, ek, ik) => {
+   41598: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/309.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/309.js#L6)

```diff
-       _BasisTextureLoader: () => pk
+       _IESTextureLoader: () => fC
```

#### 3. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L8-L11` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/309.js#L8) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/309.js#L8-L11)

```diff
-     var Dk, fk = ik(39662),
-       Sk = ik(38272),
-       bk = ik(40053),
-       rk = ik(39391);
+     var QC = ZC(36991);
```

#### 4. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L13-L23` → after: `L10-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/309.js#L10-L12) · [Before (L13-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/309.js#L13-L23)

```diff
-     function Pk() {
-       const kk = 0,
-         ek = 1,
-         ik = 2,
-         Dk = 3,
-         fk = 6,
-         Sk = 8,
-         bk = 9,
-         rk = 10,
-         Pk = 14;
-       let mk = null;
+     function wC(CC) {
+       return CC.split(" ").filter((CC => "" !== CC)).map((CC => parseFloat(CC)))
+     }
```

#### 5. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L25-L48` → after: `L14-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/309.js#L14-L17) · [Before (L25-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/309.js#L25-L48)

```diff
-       function Mk(kk, ek, ik, Dk, fk) {
-         const Sk = kk.getImageTranscodedSizeInBytes(ek, ik, Dk);
-         let bk = new Uint8Array(Sk);
-         if (!kk.transcodeImage(bk, ek, ik, Dk, 1, 0)) return null;
-         if (fk) {
-           bk = function(kk, ek, ik, Dk) {
-             const fk = new Uint16Array(4),
-               Sk = new Uint16Array(ik * Dk),
-               bk = ik / 4,
-               rk = Dk / 4;
-             for (let Pk = 0; Pk < rk; Pk++)
-               for (let Dk = 0; Dk < bk; Dk++) {
-                 const rk = ek + 8 * (Pk * bk + Dk);
-                 fk[0] = kk[rk] | kk[rk + 1] << 8, fk[1] = kk[rk + 2] | kk[rk + 3] << 8, fk[2] = (2 * (31 & fk[0]) + 1 * (31 & fk[1])) / 3 | (2 * (2016 & fk[0]) + 1 * (2016 & fk[1])) / 3 & 2016 | (2 * (63488 & fk[0]) + 1 * (63488 & fk[1])) / 3 & 63488, fk[3] = (2 * (31 & fk[1]) +  … [truncated]
-                 for (let ek = 0; ek < 4; ek++) {
-                   const bk = kk[rk + 4 + ek];
- ... (8 more removed lines; see GitHub link above)
+     function bC(CC, zC, ZC) {
+       for (; ZC.length !== zC;) {
+         const zC = wC(CC.lines[CC.index++]);
+         ZC.push(...zC)
```

#### 6. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L50-L238` → after: `L19-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L19-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/309.js#L19-L45) · [Before (L50-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/309.js#L50-L238)

```diff
-       onmessage = Kk => {
-         if ("init" === Kk.data.action) {
-           if (Kk.data.url) try {
-             importScripts(Kk.data.url)
-           } catch (xk) {
-             postMessage({
-               action: "error",
-               error: xk
-             })
-           }
-           mk || (mk = BASIS({
-             wasmBinary: Kk.data.wasmBinary
-           })), null !== mk && mk.then((kk => {
-             BASIS = kk, kk.initializeBasis(), postMessage({
-               action: "init"
-             })
- ... (173 more removed lines; see GitHub link above)
+     }
+ 
+     function nC(CC, zC, ZC) {
+       let wC = 0,
+         bC = 0,
+         nC = 0,
+         fC = 0,
+         oC = 0,
+         qC = 0;
+       for (let QC = 0; QC < CC.numberOfHorizontalAngles - 1; QC++)
+         if (ZC < CC.horizontalAngles[QC + 1] || QC === CC.numberOfHorizontalAngles - 2) {
+           bC = QC, nC = CC.horizontalAngles[QC], fC = CC.horizontalAngles[QC + 1];
+           break
+         } for (let QC = 0; QC < CC.numberOfVerticalAngles - 1; QC++)
+         if (zC < CC.verticalAngles[QC + 1] || QC === CC.numberOfVerticalAngles - 2) {
+           wC = QC, oC = CC.verticalAngles[QC], qC = CC.verticalAngles[QC + 1];
+ ... (11 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L243-L261` → after: `L50-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/309.js#L50-L51) · [Before (L243-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/309.js#L243-L261)

```diff
-       loadCubeData(kk, ek, ik, Dk, Sk) {
-         if (Array.isArray(kk)) return;
-         const bk = ek.JU().getCaps(),
-           rk = {
-             supportedCompressionFormats: {
-               etc1: !!bk.etc1,
-               s3tc: !!bk.s3tc,
-               pvrtc: !!bk.pvrtc,
-               etc2: !!bk.etc2,
-               astc: !!bk.astc,
-               bc7: !!bk.bptc
-             }
-           };
-         Uk(kk, rk).then((kk => {
-           const ik = kk.fileInfo.images[0].levels.length > 1 && ek.generateMipMaps;
-           wk(ek, kk), ek.JU()._setCubeMapTextureParams(ek, ik), ek.isReady = !0, ek.onLoadedObservable.notifyObservers(ek), ek.onLoadedObservable.clear(), Dk && Dk()
- ... (3 more removed lines; see GitHub link above)
+       loadCubeData() {
+         throw ".ies not supported in Cube."
```

#### 8. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L264-L282` → after: `L54-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L54-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/309.js#L54-L98) · [Before (L264-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/309.js#L264-L282)

```diff
-         const Dk = ek.JU().getCaps(),
-           Sk = {
-             supportedCompressionFormats: {
-               etc1: !!Dk.etc1,
-               s3tc: !!Dk.s3tc,
-               pvrtc: !!Dk.pvrtc,
-               etc2: !!Dk.etc2,
-               astc: !!Dk.astc,
-               bc7: !!Dk.bptc
-             }
-           };
-         Uk(kk, Sk).then((kk => {
-           const Dk = kk.fileInfo.images[0].levels[0],
-             fk = kk.fileInfo.images[0].levels.length > 1 && ek.generateMipMaps;
-           ik(Dk.width, Dk.height, fk, -1 !== kk.format, (() => {
-             wk(ek, kk)
- ... (3 more removed lines; see GitHub link above)
+         const QC = function(CC) {
+           const zC = {
+               lines: new TextDecoder("utf-8").decode(CC).split("\n"),
+               index: 0
+             },
+             ZC = {
+               version: zC.lines[0],
+               candelaValues: [],
+               horizontalAngles: [],
+               verticalAngles: [],
+               numberOfHorizontalAngles: 0,
+               numberOfVerticalAngles: 0
+             };
+           for (zC.index = 1; zC.lines.length > 0 && !zC.lines[zC.index].includes("TILT=");) zC.index++;
+           zC.lines[zC.index].includes("INCLUDE"), zC.index++;
+           const QC = wC(zC.lines[zC.index++]);
+ ... (29 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/310.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/310.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d)

#### 1. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/310.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/310.js#L4-L6)

```diff
-   41404: (kk, ek, ik) => {
-     ik.d(ek, {
-       c: () => lk
+   41604: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       _BasisTextureLoader: () => GC
```

#### 2. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L8-L204` → after: `L8-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L8-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/310.js#L8-L43) · [Before (L8-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/310.js#L8-L204)

```diff
-     var Dk = ik(36726),
-       fk = ik(36698),
-       Sk = ik(40053),
-       bk = ik(39716),
-       rk = ik(39501),
-       Pk = ik(38272),
-       mk = ik(39696),
-       Mk = ik(39728),
-       Kk = ik(36707),
-       xk = ik(39458),
-       nk = ik(39672),
-       Uk = ik(39769);
-     class Hk {
-       get renderList() {
-         return this._renderList
-       }
- ... (181 more removed lines; see GitHub link above)
+     var QC, wC = ZC(39913),
+       bC = ZC(38507),
+       nC = ZC(40303),
+       fC = ZC(39650);
+ 
+     function oC() {
+       const CC = 0,
+         zC = 1,
+         ZC = 2,
+         QC = 3,
+         wC = 6,
+         bC = 8,
+         nC = 9,
+         fC = 10,
+         oC = 14;
+       let qC = null;
+ ... (20 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L206-L227` → after: `L45-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L45-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/310.js#L45-L46) · [Before (L206-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/310.js#L206-L227)

```diff
-             } else if (!ek.isReady(!0)) {
-               ik = !1;
-               continue
-             }
-             let Dk = ek._edgesRenderer,
-               fk = ek.hasThinInstances;
-             if (ek.JF) {
-               const kk = ek.aDk;
-               kk.edgesShareWithInstances && kk._edgesRenderer?.isEnabled && (Dk = kk._edgesRenderer, fk = !0)
-             } else ek.hDk && ek.edgesShareWithInstances && (fk = !0);
-             !this.customRenderFunction && this.renderOpaqueMeshes && Dk?.isEnabled && (Dk.isReady(fk) || (ik = !1))
-           }
-           if (this.renderParticles && kk.particlesEnabled) {
-             const ek = this.particleSystemList || kk.ZY;
-             for (const kk of ek) kk.isReady() || (ik = !1)
-           }
- ... (6 more removed lines; see GitHub link above)
+             return bC
+           }(nC, 0, CC.getImageWidth(zC, ZC) + 3 & -4, CC.getImageHeight(zC, ZC) + 3 & -4)
```

#### 4. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L229` → after: `L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/310.js#L48) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/310.js#L229)

```diff
-         return this._engine.currentRenderPassId = ek, ik
+         return nC
```

#### 5. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L231-L252` → after: `L50-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L50-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/310.js#L50-L58) · [Before (L231-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/310.js#L231-L252)

```diff
-       _prepareRenderingManager() {
-         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         const ik = this._scene;
-         let Dk, fk, Sk = null;
-         const bk = this.renderList ? this.renderList : ik.frameGraph ? ik.meshes : ik.getActiveMeshes().data,
-           rk = this.renderList || ik.frameGraph ? bk.length : ik.getActiveMeshes().length;
-         if (this.getCustomRenderList && (Sk = this.getCustomRenderList(kk, bk, rk)), Sk) Dk = Sk.length, fk = this.forceLayerMaskCheck;
-         else {
-           if (this._defaultRenderListPrepared && !ek && !this._engine.isWebGPU) return bk;
-           this._defaultRenderListPrepared = !0, Sk = bk, Dk = rk, fk = !this.renderList || this.forceLayerMaskCheck
-         }
-         const Pk = ik.activeCamera,
-           mk = this.cameraForLOD ?? Pk,
-           Mk = ik.getBoundingBoxRenderer?.();
-         if (ik._activeMeshesFrozen && this._isFrozen) {
- ... (6 more removed lines; see GitHub link above)
+       onmessage = WC => {
+         if ("init" === WC.data.action) {
+           if (WC.data.url) try {
+             importScripts(WC.data.url)
+           } catch (NC) {
+             postMessage({
+               action: "error",
+               error: NC
+             })
```

#### 6. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L254-L265` → after: `L60-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L60-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/310.js#L60-L85) · [Before (L254-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/310.js#L254-L265)

```diff
-           return Sk
-         }
-         if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), Mk && Mk.reset(), this.renderMeshes) {
-           const kk = ik.getRenderId(),
-             ek = ik.getFrameId();
-           for (let bk = 0; bk < Dk; bk++) {
-             const Dk = Sk[bk];
-             if (Dk && !Dk.isBlocked) {
-               if (this.customIsReadyFunction) {
-                 if (!this.customIsReadyFunction(Dk, this.refreshRate, !1)) {
-                   this.resetRefreshCounter();
-                   continue
+           qC || (qC = BASIS({
+             wasmBinary: WC.data.wasmBinary
+           })), null !== qC && qC.then((CC => {
+             BASIS = CC, CC.initializeBasis(), postMessage({
+               action: "init"
+             })
+           }))
+         } else if ("transcode" === WC.data.action) {
+           const qC = WC.data.config,
+             NC = WC.data.imageData,
+             MC = new BASIS.BasisFile(NC),
+             gC = function(CC) {
+               const zC = CC.getHasAlpha(),
+                 ZC = CC.getNumImages(),
+                 QC = [];
+               for (let wC = 0; wC < ZC; wC++) {
+ ... (10 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L267-L269` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/310.js#L87) · [Before (L267-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/310.js#L267-L269)

```diff
-               } else if (!Dk.isReady(0 === this.refreshRate)) {
-                 this.resetRefreshCounter();
-                 continue
+                 QC.push(zC)
```

#### 8. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L271-L283` → after: `L89-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L89-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/310.js#L89-L114) · [Before (L271-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/310.js#L271-L283)

```diff
-               let Sk, bk;
-               if (mk) {
-                 const kk = Dk._internalAbstractMeshDataInfo._currentLOD.get(mk);
-                 kk && kk[1] === ek ? Sk = kk[0] : (Sk = ik.customLODSelector ? ik.customLODSelector(Dk, mk) : Dk.getLOD(mk), kk ? (kk[0] = Sk, kk[1] = ek) : Dk._internalAbstractMeshDataInfo._currentLOD.set(mk, [Sk, ek]))
-               } else Sk = Dk;
-               if (!Sk) continue;
-               if (Sk !== Dk && 0 !== Sk.billboardMode && Sk.computeWorldMatrix(), Sk._preActivateForIntermediateRendering(kk), bk = !(!fk || !Pk) && 0 === (Dk.layerMask & Pk.layerMask), Dk.isEnabled() && Dk.isVisible && Dk.TY && !bk) {
-                 if (this._activeMeshes.push(Dk), Sk._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, Sk !== Dk && Sk._activate(kk, !0), this.enableBoundingBoxRendering && Mk && Mk._preActiveMesh(Dk), Dk._activate(kk, !0) && Dk.TY.length) {
-                   Dk.JF ? Dk._internalAbstractMeshDataInfo._actAsRegularMesh && (Sk = Dk) : Sk._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, Sk._internalAbstractMeshDataInfo._isActiveIntermediate = !0, ik._prepareSkeleton(Sk);
-                   for (let kk = 0; kk < Sk.TY.length; kk++) {
-                     const ek = Sk.TY[kk];
-                     this.enableBoundingBoxRendering && Mk && Mk._evaluateSubMesh(Dk, ek), this._renderingManager.dispatch(ek, Sk)
-                   }
+               return {
+                 hasAlpha: zC,
+                 images: QC
+               }
+             }(MC);
+           let SC = WC.data.ignoreSupportedFormats ? null : function(qC, FC) {
+               let WC = null;
+               qC.supportedCompressionFormats && (WC = qC.supportedCompressionFormats.astc ? fC : qC.supportedCompressionFormats.bc7 ? wC : qC.supportedCompressionFormats.s3tc ? FC.hasAlpha ? QC : ZC : qC.supportedCompressionFormats.pvrtc ? FC.hasAlpha ? nC : bC : qC.supportedComp … [truncated]
+               return WC
+             }(WC.data.config, gC),
+             pC = !1;
+           null === SC && (pC = !0, SC = gC.hasAlpha ? QC : ZC);
+           let PC = !0;
+           MC.startTranscoding() || (PC = !1);
+           const GC = [];
+           for (let CC = 0; CC < gC.images.length && PC; CC++) {
+ ... (10 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L285` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/310.js#L116) · [Before (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/310.js#L285)

```diff
-                 Dk._postActivate()
+                 ZC.transcodedPixels = wC, GC.push(ZC.transcodedPixels.buffer)
```

#### 10. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L1053-L1070` → after: `L133-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L133-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/310.js#L133-L135) · [Before (L1053-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/310.js#L1053-L1070)

```diff
-       const xk = await nk.EncodeImageAsync(ik, kk, ek, Dk, rk, Kk);
-       void 0 !== fk && Sk.i.DownloadBlob(xk, fk), xk.type !== Dk && Pk.b.Warn(`DumpData: The requested mimeType '${Dk}' is not supported. The result has mimeType '${xk.type}' instead.`);
-       const Uk = await xk.arrayBuffer();
-       return Mk ? Uk : `data:${Dk};base64,${(0,mk.i)(Uk)}`
-     }
- 
-     function lk(kk, ek, ik, Dk) {
-       let fk = arguments.length > 5 ? arguments[5] : void 0;
-       void 0 !== fk || Dk || (fk = ""), wk(kk, ek, ik, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", fk, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.len … [truncated]
-         Dk && Dk(kk)
-       }))
-     }
- 
-     function pk() {
-       Kk && (Kk?.then((kk => {
-         kk.canvas instanceof HTMLCanvasElement && kk.canvas.remove(), kk.dumpEngine && (kk.dumpEngine.engine.dispose(), kk.dumpEngine.renderer.dispose(), kk.dumpEngine.wrapper.dispose())
- ... (2 more removed lines; see GitHub link above)
+     }! function(CC) {
+       CC[CC.cTFETC1 = 0] = "cTFETC1", CC[CC.cTFETC2 = 1] = "cTFETC2", CC[CC.cTFBC1 = 2] = "cTFBC1", CC[CC.cTFBC3 = 3] = "cTFBC3", CC[CC.cTFBC4 = 4] = "cTFBC4", CC[CC.cTFBC5 = 5] = "cTFBC5", CC[CC.cTFBC7 = 6] = "cTFBC7", CC[CC.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", CC[CC.cTFPVR … [truncated]
+     }(QC || (QC = {}));
```

#### 11. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L1072-L1075` → after: `L137-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/310.js#L137-L138) · [Before (L1072-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/310.js#L1072-L1075)

```diff
-       DumpData: lk,
-       DumpDataAsync: wk,
-       DumpFramebuffer: Hk,
-       Dispose: pk
+       JSModuleURL: `${wC.g._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
+       WasmModuleURL: `${wC.g._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
```

#### 12. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L1077-L1199` → after: `L140-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L140-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/310.js#L140-L158) · [Before (L1077-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/310.js#L1077-L1199)

```diff
-     let Yk = !1;
- 
-     function Lk() {
-       if (Yk) return;
-       Yk = !0;
-       Sk.i.DumpData = lk, Sk.i.DumpDataAsync = wk, Sk.i.DumpFramebuffer = Hk
-     }
-   },
-   41397: (kk, ek, ik) => {
-     ik.d(ek, {
-       c: () => nk,
-       e: () => Uk,
-       g: () => Hk
-     });
-     var Dk = ik(40053),
-       fk = ik(41404),
- ... (107 more removed lines; see GitHub link above)
+     let FC = null,
+       WC = null,
+       NC = 0;
+     const MC = async () => (FC || (FC = new Promise(((CC, zC) => {
+       WC ? CC(WC) : wC.g.LoadFileAsync(wC.g.GetBabylonScriptURL(qC.WasmModuleURL)).then((ZC => {
+         if ("function" !== typeof URL) return zC("Basis transcoder requires an environment with a URL constructor");
+         const QC = URL.createObjectURL(new Blob([`(${oC})()`], {
+           type: "application/javascript"
+         }));
+         WC = new Worker(QC), async function(CC, zC, ZC) {
+           return await new Promise(((QC, bC) => {
+             const nC = zC => {
+               "init" === zC.data.action ? (CC.removeEventListener("message", nC), QC(CC)) : "error" === zC.data.action && bC(zC.data.error || "error initializing worker")
+             };
+             CC.addEventListener("message", nC), CC.postMessage({
+               action: "init",
+ ... (3 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L1203-L1313` → after: `L183-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L183-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/310.js#L183-L195) · [Before (L1203-L1313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/310.js#L1203-L1313)

```diff
-     }
-     async function Uk(kk, ek, Sk) {
-       let rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-         Pk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
-         mk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         Mk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
-       await async function(kk) {
-         if (kk.isReady()) return;
-         if (kk.loadingError) throw new Error(kk.errorObject?.message || `Texture ${kk.name} errored while loading.`);
-         const ek = kk.onLoadObservable;
-         if (ek) return await new Promise((kk => ek.addOnce((() => kk()))));
-         const ik = kk._texture?.onLoadedObservable;
-         if (ik) return await new Promise((kk => ik.addOnce((() => kk()))));
-         throw new Error(`Cannot determine readiness of texture ${kk.name}.`)
-       }(kk);
-       const xk = kk.getInternalTexture(),
- ... (95 more removed lines; see GitHub link above)
+     }, SC = (CC, zC) => {
+       let ZC = zC._gl?.TEXTURE_2D;
+       CC.isCube && (ZC = zC._gl?.TEXTURE_CUBE_MAP), zC._bindTextureDirectly(ZC, CC, !0)
+     }, pC = (CC, zC) => {
+       const ZC = CC.mg();
+       for (let wC = 0; wC < zC.fileInfo.images.length; wC++) {
+         const oC = zC.fileInfo.images[wC].levels[0];
+         if (CC._invertVScale = CC.invertY, -1 === zC.format || zC.format === QC.cTFRGB565)
+           if (CC.type = 10, CC.format = 4, !ZC._features.basisNeedsPOT || Math.log2(oC.width) % 1 === 0 && Math.log2(oC.height) % 1 === 0) CC._invertVScale = !CC.invertY, CC.width = oC.width + 3 & -4, CC.height = oC.height + 3 & -4, CC.samplingMode = 2, SC(CC, ZC), ZC._uploadData … [truncated]
+           else {
+             const zC = new fC.c(ZC, 2);
+             CC._invertVScale = CC.invertY, zC.type = 10, zC.format = 4, zC.width = oC.width + 3 & -4, zC.height = oC.height + 3 & -4, SC(zC, ZC), ZC._uploadDataToTextureDirectly(zC, new Uint16Array(oC.transcodedPixels.buffer), wC, 0, 4, !0), ZC._rescaleTexture(zC, CC, ZC.scenes[0 … [truncated]
+               ZC._releaseTexture(zC), SC(CC, ZC)
```

#### 14. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L1335-L1363` → after: `L198-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L198-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/310.js#L198-L206) · [Before (L1335-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/310.js#L1335-L1363)

```diff
-         }(kk, wk, lk, rk, Pk, Mk)
-       }
-       let pk = await kk.readPixels(rk, Pk);
-       if (!pk) throw new Error(`Failed to read pixels from texture ${kk.name}.`);
-       if (pk instanceof Float32Array) {
-         const kk = new Uint8Array(pk.length);
-         let ek = pk.length;
-         for (; ek--;) {
-           const ik = pk[ek];
-           kk[ek] = Math.round(255 * (0, Kk.Clamp)(ik))
-         }
-         pk = kk
-       }
-       const yk = wk * lk,
-         Yk = 4 * yk;
-       if (pk.length !== Yk) {
- ... (13 more removed lines; see GitHub link above)
+         else {
+           CC.width = oC.width, CC.height = oC.height, CC.generateMipMaps = zC.fileInfo.images[wC].levels.length > 1;
+           const QC = PC.GetInternalFormatFromBasisFormat(zC.format, ZC);
+           CC.format = QC, SC(CC, ZC);
+           const fC = zC.fileInfo.images[wC].levels;
+           for (let zC = 0; zC < fC.length; zC++) {
+             const bC = fC[zC];
+             ZC._uploadCompressedDataToTextureDirectly(CC, QC, bC.width, bC.height, bC.transcodedPixels, wC, zC)
+           }!ZC._features.basisNeedsPOT || Math.log2(CC.width) % 1 === 0 && Math.log2(CC.height) % 1 === 0 || (bC.c.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with  … [truncated]
```

#### 15. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L1366-L2001` → after: `L209-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L209-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/310.js#L209-L216) · [Before (L1366-L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/310.js#L1366-L2001)

```diff
-       return pk
-     }
-     const Hk = {
-       CreateResizedCopy: function(kk, ek, ik) {
-         let Sk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-         const bk = kk.XF(),
-           rk = bk.JU(),
-           Pk = new fk.c("resized" + kk.name, {
-             width: ek,
-             height: ik
-           }, bk, !kk.noMipmap, !0, kk._texture.type, !1, kk.samplingMode, !1);
-         Pk.wrapU = kk.wrapU, Pk.wrapV = kk.wrapV, Pk.uOffset = kk.uOffset, Pk.vOffset = kk.vOffset, Pk.uScale = kk.uScale, Pk.vScale = kk.vScale, Pk.uAng = kk.uAng, Pk.vAng = kk.vAng, Pk.wAng = kk.wAng, Pk.coordinatesIndex = kk.coordinatesIndex, Pk.level = kk.level, Pk.anisotropi … [truncated]
-         const mk = new Mk("pass", 1, null, Sk ? Dk.f.BILINEAR_SAMPLINGMODE : Dk.f.NEAREST_SAMPLINGMODE, rk, !1, 0);
-         return mk.externalTextureSamplerBinding = !0, mk.onEffectCreatedObservable.addOnce((ek => {
-           ek.executeWhenCompiled((() => {
-             mk.onApply = function(ek) {
- ... (620 more removed lines; see GitHub link above)
+     }, PC = {
+       JSModuleURL: qC.JSModuleURL,
+       WasmModuleURL: qC.WasmModuleURL,
+       GetInternalFormatFromBasisFormat: (CC, zC) => {
+         let ZC;
+         switch (CC) {
+           case QC.cTFETC1:
+             ZC = 36196;
```

#### 16. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L2003-L2004` → after: `L218-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L218-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/310.js#L218-L219) · [Before (L2003-L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/310.js#L2003-L2004)

```diff
-           case 1:
-             this.updateEffect("#define NEGATIVEX");
+           case QC.cTFBC1:
+             ZC = 33776;
```

#### 17. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L2006-L2007` → after: `L221-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L221-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/310.js#L221-L222) · [Before (L2006-L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/310.js#L2006-L2007)

```diff
-           case 2:
-             this.updateEffect("#define POSITIVEY");
+           case QC.cTFBC4:
+             ZC = 33779;
```

#### 18. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L2009-L2010` → after: `L224-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L224-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/310.js#L224-L225) · [Before (L2009-L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/310.js#L2009-L2010)

```diff
-           case 3:
-             this.updateEffect("#define NEGATIVEY");
+           case QC.cTFASTC_4x4:
+             ZC = 37808;
```

#### 19. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L2012-L2013` → after: `L227-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L227-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/310.js#L227-L228) · [Before (L2012-L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/310.js#L2012-L2013)

```diff
-           case 4:
-             this.updateEffect("#define POSITIVEZ");
+           case QC.cTFETC2:
+             ZC = 37496;
```

#### 20. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L2015-L2016` → after: `L230-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/310.js#L230-L231) · [Before (L2015-L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/310.js#L2015-L2016)

```diff
-           case 5:
-             this.updateEffect("#define NEGATIVEZ")
+           case QC.cTFBC7:
+             ZC = 36492
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/311.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/311.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab)

#### 1. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/311.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/311.js#L4-L6)

```diff
-   41426: (kk, ek, ik) => {
-     ik.r(ek), ik.d(ek, {
-       _HDRTextureLoader: () => Mk
+   41638: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => PC
```

#### 2. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L8` → after: `L8-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/311.js#L8-L19) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/311.js#L8)

```diff
-     var Dk = ik(36698);
+     var QC = ZC(36987),
+       wC = ZC(36963),
+       bC = ZC(40303),
+       nC = ZC(39962),
+       fC = ZC(39747),
+       oC = ZC(38507),
+       qC = ZC(39950),
+       FC = ZC(39978),
+       WC = ZC(36971),
+       NC = ZC(39712),
+       MC = ZC(39925),
+       gC = ZC(40022);
```

#### 3. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L10-L41` → after: `L21-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L21-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/311.js#L21-L258) · [Before (L10-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/311.js#L10-L41)

```diff
-       static ConvertPanoramaToCubemap(kk, ek, ik, Dk) {
-         let fk, Sk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           bk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
-         if (!kk) throw "ConvertPanoramaToCubemap: input cannot be null";
-         if (kk.length != ek * ik * 3) {
-           if (kk.length != ek * ik * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
-           fk = 4
-         } else fk = 3;
-         return {
-           front: this.CreateCubemapTexture(Dk, this.FACE_FRONT, kk, ek, ik, Sk, bk, fk),
-           back: this.CreateCubemapTexture(Dk, this.FACE_BACK, kk, ek, ik, Sk, bk, fk),
-           left: this.CreateCubemapTexture(Dk, this.FACE_LEFT, kk, ek, ik, Sk, bk, fk),
-           right: this.CreateCubemapTexture(Dk, this.FACE_RIGHT, kk, ek, ik, Sk, bk, fk),
-           up: this.CreateCubemapTexture(Dk, this.FACE_UP, kk, ek, ik, Sk, bk, fk),
-           down: this.CreateCubemapTexture(Dk, this.FACE_DOWN, kk, ek, ik, Sk, bk, fk),
-           size: Dk,
- ... (16 more removed lines; see GitHub link above)
+       get renderList() {
+         return this._renderList
+       }
+       set renderList(CC) {
+         this._renderList !== CC && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), CC && (this._unObserveRenderList = (0, WC.i)(CC, this._renderListHasChanged)), this._renderList = CC)
+       }
+       get disableImageProcessing() {
+         return this._disableImageProcessing
+       }
+       set disableImageProcessing(CC) {
+         CC !== this._disableImageProcessing && (this._disableImageProcessing = CC, this._scene.markAllMaterialsAsDirty(64))
+       }
+       get disableDepthPrePass() {
+         return this._disableDepthPrePass
+       }
+       set disableDepthPrePass(CC) {
+ ... (222 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L43-L50` → after: `L260-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L260-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/311.js#L260-L285) · [Before (L43-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/311.js#L43-L50)

```diff
-             let Sk = ek[0],
-               Pk = ek[2];
-             for (let ek = 0; ek < kk; ek++)
-               for (let Kk = 0; Kk < Mk; Kk++) {
-                 const Mk = Pk.subtract(Sk).scale(wk).add(Sk);
-                 Mk.normalize();
-                 const Kk = this.CalcProjectionSpherical(Mk, ik, Dk, fk, rk, bk);
-                 mk[lk * kk * 3 + 3 * ek + 0] += Kk.r * xk, mk[lk * kk * 3 + 3 * ek + 1] += Kk.g * xk, mk[lk * kk * 3 + 3 * ek + 2] += Kk.b * xk, Sk = Sk.add(nk), Pk = Pk.add(Uk)
+             const QC = bC[nC];
+             if (QC && !QC.isBlocked) {
+               if (this.customIsReadyFunction) {
+                 if (!this.customIsReadyFunction(QC, this.refreshRate, !1)) {
+                   this.resetRefreshCounter();
+                   continue
+                 }
+               } else if (!QC.isReady(0 === this.refreshRate)) {
+                 this.resetRefreshCounter();
+                 continue
+               }
+               let bC, nC;
+               if (qC) {
+                 const CC = QC._internalAbstractMeshDataInfo._currentLOD.get(qC);
+                 CC && CC[1] === zC ? bC = CC[0] : (bC = ZC.customLODSelector ? ZC.customLODSelector(QC, qC) : QC.getLOD(qC), CC ? (CC[0] = bC, CC[1] = zC) : QC._internalAbstractMeshDataInfo._currentLOD.set(qC, [bC, zC]))
+               } else bC = QC;
+ ... (10 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L52` → after: `L287-L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L287-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/311.js#L287-L569) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/311.js#L52)

```diff
-             wk += Hk * Kk
+             }
+           }
+         }
+         if (this.enableBoundingBoxRendering && FC && zC)
+           for (let WC = 0; WC < FC.renderList.length; WC++) {
+             const CC = FC.renderList.data[WC];
+             this._activeBoundingBoxes.push(CC)
+           }
+         if (this._scene.particlesEnabled && this.renderParticles) {
+           this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
+           const CC = this.particleSystemList || ZC.Ix;
+           for (let zC = 0; zC < CC.length; zC++) {
+             const ZC = CC[zC],
+               QC = ZC.emitter;
+             ZC.isStarted() && QC && (!QC.position || QC.isEnabled()) && this._renderingManager.dispatchParticles(ZC)
+           }
+ ... (267 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L56-L68` → after: `L719-L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L719-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/311.js#L719-L984) · [Before (L56-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/311.js#L56-L68)

```diff
-       static CalcProjectionSpherical(kk, ek, ik, Dk, fk, Sk) {
-         let bk = Math.atan2(kk.z, kk.x);
-         const rk = Math.acos(kk.y);
-         for (; bk < -Math.PI;) bk += 2 * Math.PI;
-         for (; bk > Math.PI;) bk -= 2 * Math.PI;
-         let Pk = bk / Math.PI;
-         const mk = rk / Math.PI;
-         Pk = .5 * Pk + .5;
-         let Mk = Math.round(Pk * ik);
-         Mk < 0 ? Mk = 0 : Mk >= ik && (Mk = ik - 1);
-         let Kk = Math.round(mk * Dk);
-         Kk < 0 ? Kk = 0 : Kk >= Dk && (Kk = Dk - 1);
-         const xk = Sk ? Dk - Kk - 1 : Kk;
+       disposeFramebufferObjects() {
+         this._renderTarget?.dispose(!0)
+       }
+       releaseInternalTexture() {
+         this._renderTarget?.releaseTextures(), this._texture = null
+       }
+       dispose() {
+         this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this … [truncated]
+         const CC = this.Km();
+         if (!CC) return;
+         let zC = CC.customRenderTargets.indexOf(this);
+         zC >= 0 && CC.customRenderTargets.splice(zC, 1);
+         for (const ZC of CC.cameras) zC = ZC.customRenderTargets.indexOf(this), zC >= 0 && ZC.customRenderTargets.splice(zC, 1);
+         this._renderTarget?.dispose(), this._renderTarget = null, this._texture = null, super.dispose()
+       }
+       _rebuild() {
+ ... (250 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L70-L72` → after: `L986-L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L986-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/311.js#L986-L1008) · [Before (L70-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/311.js#L70-L72)

```diff
-           r: ek[xk * ik * fk + Mk * fk + 0],
-           g: ek[xk * ik * fk + Mk * fk + 1],
-           b: ek[xk * ik * fk + Mk * fk + 2]
+           canvas: CC,
+           dumpEngine: {
+             engine: QC,
+             renderer: bC,
+             wrapper: qC
+           }
+         }
+       }()), await WC
+     }
+     let MC = (() => {
+       var CC;
+       let zC, ZC = [];
+       return CC = class {
+         static async EncodeImageAsync(CC, zC, ZC, QC, wC, nC) {
+           const fC = await NC(),
+             oC = fC.dumpEngine;
+ ... (7 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L77-L80` → after: `L1059-L1063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR1059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L1059-L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/311.js#L1059-L1063) · [Before (L77-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/311.js#L77-L80)

```diff
-     function Sk(kk, ek, ik, Dk, fk, Sk) {
-       fk > 0 ? (fk = function(kk, ek) {
-         return ek > 1023 ? kk * Math.pow(2, 1023) * Math.pow(2, ek - 1023) : ek < -1074 ? kk * Math.pow(2, -1074) * Math.pow(2, ek + 1074) : kk * Math.pow(2, ek)
-       }(1, fk - 136), kk[Sk + 0] = ek * fk, kk[Sk + 1] = ik * fk, kk[Sk + 2] = Dk * fk) : (kk[Sk + 0] = 0, kk[Sk + 1] = 0, kk[Sk + 2] = 0)
+     function PC(CC, zC, ZC, QC) {
+       let wC = arguments.length > 5 ? arguments[5] : void 0;
+       void 0 !== wC || QC || (wC = ""), pC(CC, zC, ZC, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", wC, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.len … [truncated]
+         QC && QC(CC)
+       }))
```

#### 9. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L83-L86` → after: `L1066-L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR1066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L1066-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/311.js#L1066-L1069) · [Before (L83-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/311.js#L83-L86)

```diff
-     function bk(kk, ek) {
-       let ik, Dk = "";
-       for (let fk = ek; fk < kk.length - ek && (ik = String.fromCharCode(kk[fk]), "\n" != ik); fk++) Dk += ik;
-       return Dk
+     function GC() {
+       WC && (WC?.then((CC => {
+         CC.canvas instanceof HTMLCanvasElement && CC.canvas.remove(), CC.dumpEngine && (CC.dumpEngine.engine.dispose(), CC.dumpEngine.renderer.dispose(), CC.dumpEngine.wrapper.dispose())
+       })), WC = null)
```

#### 10. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L89-L109` → after: `L1079-L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L1079-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/311.js#L1079-L1082) · [Before (L89-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/311.js#L89-L109)

```diff
-     function rk(kk) {
-       let ek = bk(kk, 0);
-       if ("#" != ek[0] || "?" != ek[1]) throw "Bad HDR Format.";
-       let ik = !1,
-         Dk = !1,
-         fk = 0;
-       do {
-         fk += ek.length + 1, ek = bk(kk, fk), "FORMAT=32-bit_rle_rgbe" == ek ? Dk = !0 : 0 == ek.length && (ik = !0)
-       } while (!ik);
-       if (!Dk) throw "HDR Bad header format, unsupported FORMAT";
-       fk += ek.length + 1, ek = bk(kk, fk);
-       const Sk = /^-Y (.*) \+X (.*)$/g.exec(ek);
-       if (!Sk || Sk.length < 3) throw "HDR Bad header format, no size";
-       const rk = parseInt(Sk[2]),
-         Pk = parseInt(Sk[1]);
-       if (rk < 8 || rk > 32767) throw "HDR Bad header format, unsupported size";
- ... (5 more removed lines; see GitHub link above)
+     function xC() {
+       if (AC) return;
+       AC = !0;
+       bC.g.DumpData = PC, bC.g.DumpDataAsync = pC, bC.g.DumpFramebuffer = SC
```

#### 11. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L112-L134` → after: `L1179-L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR1179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L1179-L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/311.js#L1179-L1344) · [Before (L112-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/311.js#L112-L134)

```diff
-     function Pk(kk, ek) {
-       return function(kk, ek) {
-         let ik = ek.height;
-         const Dk = ek.width;
-         let fk, bk, rk, Pk, Mk, Kk, xk, nk, Uk = ek.dataPosition;
-         const Hk = new ArrayBuffer(4 * Dk),
-           wk = new Uint8Array(Hk),
-           lk = new ArrayBuffer(ek.width * ek.height * 4 * 3),
-           pk = new Float32Array(lk);
-         for (; ik > 0;) {
-           if (fk = kk[Uk++], bk = kk[Uk++], rk = kk[Uk++], Pk = kk[Uk++], 2 != fk || 2 != bk || 128 & rk || ek.width < 8 || ek.width > 32767) return mk(kk, ek);
-           if ((rk << 8 | Pk) != Dk) throw "HDR Bad header format, wrong scan line width";
-           for (Kk = 0, nk = 0; nk < 4; nk++)
-             for (xk = (nk + 1) * Dk; Kk < xk;)
-               if (fk = kk[Uk++], bk = kk[Uk++], fk > 128) {
-                 if (Mk = fk - 128, 0 == Mk || Mk > xk - Kk) throw "HDR Bad Format, bad scanline data (run)";
- ... (7 more removed lines; see GitHub link above)
+     function MC(CC, zC, ZC, QC, wC, bC, fC, oC) {
+       const qC = zC.mg();
+       return zC.isReady = !1, wC = wC ?? zC.samplingMode, QC = QC ?? zC.type, bC = bC ?? zC.format, fC = fC ?? zC.width, oC = oC ?? zC.height, -1 === QC && (QC = 0), new Promise((FC => {
+         const WC = new nC.d("postprocess", CC, null, null, 1, null, wC, qC, !1, void 0, QC, void 0, null, !1, bC);
+         WC.externalTextureSamplerBinding = !0;
+         const NC = qC.createRenderTargetTexture({
+           width: fC,
+           height: oC
+         }, {
+           generateDepthBuffer: !1,
+           generateMipMaps: !1,
+           generateStencilBuffer: !1,
+           samplingMode: wC,
+           type: QC,
+           format: bC
+         });
+ ... (150 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L136-L137` → after: `L1346-L1392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR1346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L1346-L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/311.js#L1346-L1392) · [Before (L136-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/311.js#L136-L137)

```diff
-         return pk
-       }(kk, ek)
+         GC = CC
+       }
+       const RC = pC * PC,
+         AC = 4 * RC;
+       if (GC.length !== AC) {
+         const CC = 0 === RC ? 0 : GC.length / RC;
+         if (1 === CC || 2 === CC || 3 === CC) {
+           const zC = new Uint8Array(AC);
+           for (let ZC = 0, QC = 0, wC = 0; ZC < RC; ZC++, wC += 4) {
+             const ZC = GC[QC++];
+             if (1 === CC) {
+               zC[wC] = ZC, zC[wC + 1] = ZC, zC[wC + 2] = ZC, zC[wC + 3] = 255;
+               continue
+             }
+             const bC = GC[QC++];
+             2 !== CC ? (zC[wC] = ZC, zC[wC + 1] = bC, zC[wC + 2] = GC[QC++], zC[wC + 3] = 255) : (zC[wC] = ZC, zC[wC + 1] = bC, zC[wC + 2] = 0, zC[wC + 3] = 255)
+ ... (31 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L140-L148` → after: `L1942-L1976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR1942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L1942-L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/311.js#L1942-L1976) · [Before (L140-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/311.js#L140-L148)

```diff
-     function mk(kk, ek) {
-       let ik = ek.height;
-       const Dk = ek.width;
-       let fk, bk, rk, Pk, mk, Mk = ek.dataPosition;
-       const Kk = new ArrayBuffer(ek.width * ek.height * 4 * 3),
-         xk = new Float32Array(Kk);
-       for (; ik > 0;) {
-         for (mk = 0; mk < ek.width; mk++) fk = kk[Mk++], bk = kk[Mk++], rk = kk[Mk++], Pk = kk[Mk++], Sk(xk, fk, bk, rk, Pk, (ek.height - ik) * Dk * 3 + 3 * mk);
-         ik--
+     function pC() {
+       SC || (SC = !0, WC.b.prototype.setTextureFromPostProcess = function(CC, zC, ZC) {
+         let QC = null;
+         zC && (zC._forcedOutputTexture ? QC = zC._forcedOutputTexture : zC._textures.data[zC._currentRenderTextureInd] && (QC = zC._textures.data[zC._currentRenderTextureInd])), this._bindTexture(CC, QC?.texture ?? null, ZC)
+       }, WC.b.prototype.setTextureFromPostProcessOutput = function(CC, zC, ZC) {
+         this._bindTexture(CC, zC?._outputTexture?.texture ?? null, ZC)
+       }, fC.b.prototype.setTextureFromPostProcess = function(CC, zC) {
+         this._engine.setTextureFromPostProcess(this._samplers[CC], zC, CC)
+       }, fC.b.prototype.setTextureFromPostProcessOutput = function(CC, zC) {
+         this._engine.setTextureFromPostProcessOutput(this._samplers[CC], zC, CC)
+       }, (0, FC.d)("BABYLON.PostProcess", gC))
+     }
+   },
+   41640: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC,
+ ... (19 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L152-L170` → after: `L1979-L2017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR1979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L1979-L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/311.js#L1979-L2017) · [Before (L152-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/311.js#L152-L170)

```diff
-     fk.FACE_LEFT = [new Dk.o(-1, -1, -1), new Dk.o(1, -1, -1), new Dk.o(-1, 1, -1), new Dk.o(1, 1, -1)], fk.FACE_RIGHT = [new Dk.o(1, -1, 1), new Dk.o(-1, -1, 1), new Dk.o(1, 1, 1), new Dk.o(-1, 1, 1)], fk.FACE_FRONT = [new Dk.o(1, -1, -1), new Dk.o(1, -1, 1), new Dk.o(1, 1, -1), … [truncated]
-     class Mk {
-       constructor() {
-         this.supportCascades = !1
-       }
-       loadCubeData() {
-         throw ".hdr not supported in Cube."
-       }
-       loadData(kk, ek, ik) {
-         const Dk = new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength),
-           fk = rk(Dk),
-           Sk = Pk(Dk, fk),
-           bk = fk.width * fk.height,
-           mk = new Float32Array(4 * bk);
-         for (let rk = 0; rk < bk; rk += 1) mk[4 * rk] = Sk[3 * rk], mk[4 * rk + 1] = Sk[3 * rk + 1], mk[4 * rk + 2] = Sk[3 * rk + 2], mk[4 * rk + 3] = 1;
-         ik(fk.width, fk.height, ek.generateMipMaps, !1, (() => {
- ... (3 more removed lines; see GitHub link above)
+     bC.FragmentUrl = "pass";
+     class nC extends QC.e {
+       _gatherImports(CC, zC) {
+         CC ? (this._webGPUReady = !0, zC.push(Promise.all([ZC.e(373).then((() => ZC(61111)))]))) : zC.push(Promise.all([ZC.e(374).then((() => ZC(61118)))])), super._gatherImports(CC, zC)
+       }
+       constructor(CC) {
+         super({
+           ...arguments.length > 2 ? arguments[2] : void 0,
+           name: CC,
+           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || wC.c.LastCreatedEngine,
+           useShaderStore: !0,
+           useAsPostProcess: !0,
+           fragmentShader: nC.FragmentUrl,
+           defines: "#define POSITIVEX"
+         }), this._face = 0
+       }
+ ... (23 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/312.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/312.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986)

#### 1. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/312.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/312.js#L4)

```diff
-   41428: (kk, ek, ik) => {
+   41657: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/312.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/312.js#L6)

```diff
-       _KTXTextureLoader: () => Uk
+       _HDRTextureLoader: () => FC
```

#### 3. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/312.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/312.js#L8)

```diff
-     var Dk = ik(38272);
+     var QC = ZC(36963);
```

#### 4. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L10-L23` → after: `L10-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L10-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/312.js#L10-L28) · [Before (L10-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/312.js#L10-L23)

```diff
-       constructor(kk, ek) {
-         if (this.data = kk, this.isInvalid = !1, !fk.IsValid(kk)) return this.isInvalid = !0, void Dk.b.Error("texture missing KTX identifier");
-         const ik = Uint32Array.BYTES_PER_ELEMENT,
-           Sk = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * ik),
-           bk = 67305985 === Sk.getUint32(0, !0);
-         return this.glType = Sk.getUint32(1 * ik, bk), this.glTypeSize = Sk.getUint32(2 * ik, bk), this.glFormat = Sk.getUint32(3 * ik, bk), this.glInternalFormat = Sk.getUint32(4 * ik, bk), this.glBaseInternalFormat = Sk.getUint32(5 * ik, bk), this.pixelWidth = Sk.getUint32(6 *  … [truncated]
-       }
-       uploadLevels(kk, ek) {
-         switch (this.loadType) {
-           case fk.COMPRESSED_2D:
-             this._upload2DCompressedLevels(kk, ek);
-           case fk.TEX_2D:
-           case fk.COMPRESSED_3D:
-           case fk.TEX_3D:
+       static ConvertPanoramaToCubemap(CC, zC, ZC, QC) {
+         let wC, bC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           nC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
+         if (!CC) throw "ConvertPanoramaToCubemap: input cannot be null";
+         if (CC.length != zC * ZC * 3) {
+           if (CC.length != zC * ZC * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
+           wC = 4
+         } else wC = 3;
+         return {
+           front: this.CreateCubemapTexture(QC, this.FACE_FRONT, CC, zC, ZC, bC, nC, wC),
+           back: this.CreateCubemapTexture(QC, this.FACE_BACK, CC, zC, ZC, bC, nC, wC),
+           left: this.CreateCubemapTexture(QC, this.FACE_LEFT, CC, zC, ZC, bC, nC, wC),
+           right: this.CreateCubemapTexture(QC, this.FACE_RIGHT, CC, zC, ZC, bC, nC, wC),
+           up: this.CreateCubemapTexture(QC, this.FACE_UP, CC, zC, ZC, bC, nC, wC),
+           down: this.CreateCubemapTexture(QC, this.FACE_DOWN, CC, zC, ZC, bC, nC, wC),
+           size: QC,
+ ... (3 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L26-L36` → after: `L31-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L31-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/312.js#L31-L52) · [Before (L26-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/312.js#L26-L36)

```diff
-       _upload2DCompressedLevels(kk, ek) {
-         let ik = fk.HEADER_LEN + this.bytesOfKeyValueData,
-           Dk = this.pixelWidth,
-           Sk = this.pixelHeight;
-         const bk = ek ? this.numberOfMipmapLevels : 1;
-         for (let fk = 0; fk < bk; fk++) {
-           const ek = new Int32Array(this.data.buffer, this.data.byteOffset + ik, 1)[0];
-           ik += 4;
-           for (let bk = 0; bk < this.numberOfFaces; bk++) {
-             const rk = new Uint8Array(this.data.buffer, this.data.byteOffset + ik, ek);
-             kk.JU()._uploadCompressedDataToTextureDirectly(kk, kk.format, Dk, Sk, rk, bk, fk), ik += ek, ik += 3 - (ek + 3) % 4
+       static CreateCubemapTexture(CC, zC, ZC, QC, wC, bC, nC, fC) {
+         const oC = new ArrayBuffer(CC * CC * 4 * 3),
+           qC = new Float32Array(oC),
+           FC = bC ? Math.max(1, Math.round(QC / 4 / CC)) : 1,
+           WC = 1 / FC,
+           NC = WC * WC,
+           MC = zC[1].subtract(zC[0]).scale(WC / CC),
+           gC = zC[3].subtract(zC[2]).scale(WC / CC),
+           SC = 1 / CC;
+         let pC = 0;
+         for (let PC = 0; PC < CC; PC++)
+           for (let bC = 0; bC < FC; bC++) {
+             let bC = zC[0],
+               oC = zC[2];
+             for (let zC = 0; zC < CC; zC++)
+               for (let WC = 0; WC < FC; WC++) {
+ ... (6 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L38` → after: `L54-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L54-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/312.js#L54-L72) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/312.js#L38)

```diff
-           Dk = Math.max(1, .5 * Dk), Sk = Math.max(1, .5 * Sk)
+         return qC
+       }
+       static CalcProjectionSpherical(CC, zC, ZC, QC, wC, bC) {
+         let nC = Math.atan2(CC.z, CC.x);
+         const fC = Math.acos(CC.y);
+         for (; nC < -Math.PI;) nC += 2 * Math.PI;
+         for (; nC > Math.PI;) nC -= 2 * Math.PI;
+         let oC = nC / Math.PI;
+         const qC = fC / Math.PI;
+         oC = .5 * oC + .5;
+         let FC = Math.round(oC * ZC);
+         FC < 0 ? FC = 0 : FC >= ZC && (FC = ZC - 1);
+         let WC = Math.round(qC * QC);
+         WC < 0 ? WC = 0 : WC >= QC && (WC = QC - 1);
+         const NC = bC ? QC - WC - 1 : WC;
+         return {
+ ... (3 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L49-L51` → after: `L76-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L76-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/312.js#L76-L81) · [Before (L49-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/312.js#L49-L51)

```diff
-     fk.HEADER_LEN = 64, fk.COMPRESSED_2D = 0, fk.COMPRESSED_3D = 1, fk.TEX_2D = 2, fk.TEX_3D = 3;
-     var Sk, bk, rk, Pk = ik(41430),
-       mk = ik(39662);
+ 
+     function bC(CC, zC, ZC, QC, wC, bC) {
+       wC > 0 ? (wC = function(CC, zC) {
+         return zC > 1023 ? CC * Math.pow(2, 1023) * Math.pow(2, zC - 1023) : zC < -1074 ? CC * Math.pow(2, -1074) * Math.pow(2, zC + 1074) : CC * Math.pow(2, zC)
+       }(1, wC - 136), CC[bC + 0] = zC * wC, CC[bC + 1] = ZC * wC, CC[bC + 2] = QC * wC) : (CC[bC + 0] = 0, CC[bC + 1] = 0, CC[bC + 2] = 0)
+     }
```

#### 8. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L54-L55` → after: `L84-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/312.js#L84-L86) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/312.js#L54-L55)

```diff
-       const ik = ek?.jsDecoderModule || KTX2DECODER;
-       kk && (kk.wasmBaseUrl && (ik.Transcoder.WasmBaseUrl = kk.wasmBaseUrl), kk.wasmUASTCToASTC && (ik.LiteTranscoder_UASTC_ASTC.WasmModuleURL = kk.wasmUASTCToASTC), kk.wasmUASTCToBC7 && (ik.LiteTranscoder_UASTC_BC7.WasmModuleURL = kk.wasmUASTCToBC7), kk.wasmUASTCToRGBA_UNORM &&  … [truncated]
+       let ZC, QC = "";
+       for (let wC = zC; wC < CC.length - zC && (ZC = String.fromCharCode(CC[wC]), "\n" != ZC); wC++) QC += ZC;
+       return QC
```

#### 9. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L59-L241` → after: `L90-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L90-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/312.js#L90-L108) · [Before (L59-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/312.js#L59-L241)

```diff
-       let ek;
-       "undefined" === typeof kk && "undefined" !== typeof KTX2DECODER && (kk = KTX2DECODER), onmessage = ik => {
-         if (ik.data) switch (ik.data.action) {
-           case "init": {
-             const Dk = ik.data.urls;
-             Dk && (Dk.jsDecoderModule && "undefined" === typeof kk && (importScripts(Dk.jsDecoderModule), kk = KTX2DECODER), Mk(Dk)), ik.data.wasmBinaries && Mk(void 0, {
-               ...ik.data.wasmBinaries,
-               jsDecoderModule: kk
-             }), ek = new kk.KTX2Decoder, postMessage({
-               action: "init"
-             });
-             break
-           }
-           case "setDefaultDecoderOptions":
-             kk.KTX2Decoder.DefaultDecoderOptions = ik.data.options;
-             break;
- ... (167 more removed lines; see GitHub link above)
+       let zC = nC(CC, 0);
+       if ("#" != zC[0] || "?" != zC[1]) throw "Bad HDR Format.";
+       let ZC = !1,
+         QC = !1,
+         wC = 0;
+       do {
+         wC += zC.length + 1, zC = nC(CC, wC), "FORMAT=32-bit_rle_rgbe" == zC ? QC = !0 : 0 == zC.length && (ZC = !0)
+       } while (!ZC);
+       if (!QC) throw "HDR Bad header format, unsupported FORMAT";
+       wC += zC.length + 1, zC = nC(CC, wC);
+       const bC = /^-Y (.*) \+X (.*)$/g.exec(zC);
+       if (!bC || bC.length < 3) throw "HDR Bad header format, no size";
+       const fC = parseInt(bC[2]),
+         oC = parseInt(bC[1]);
+       if (fC < 8 || fC > 32767) throw "HDR Bad header format, unsupported size";
+       return wC += zC.length + 1, {
+ ... (3 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L245-L288` → after: `L112-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L112-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/312.js#L112-L148) · [Before (L245-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/312.js#L245-L288)

```diff
-     function nk(kk) {
-       switch (kk) {
-         case 35916:
-           return 33776;
-         case 35918:
-           return 33778;
-         case 35919:
-           return 33779;
-         case 37493:
-           return 37492;
-         case 37497:
-           return 37496;
-         case 37495:
-           return 37494;
-         case 37840:
-           return 37808;
- ... (28 more removed lines; see GitHub link above)
+     function oC(CC, zC) {
+       return function(CC, zC) {
+         let ZC = zC.height;
+         const QC = zC.width;
+         let wC, nC, fC, oC, FC, WC, NC, MC, gC = zC.dataPosition;
+         const SC = new ArrayBuffer(4 * QC),
+           pC = new Uint8Array(SC),
+           PC = new ArrayBuffer(zC.width * zC.height * 4 * 3),
+           GC = new Float32Array(PC);
+         for (; ZC > 0;) {
+           if (wC = CC[gC++], nC = CC[gC++], fC = CC[gC++], oC = CC[gC++], 2 != wC || 2 != nC || 128 & fC || zC.width < 8 || zC.width > 32767) return qC(CC, zC);
+           if ((fC << 8 | oC) != QC) throw "HDR Bad header format, wrong scan line width";
+           for (WC = 0, MC = 0; MC < 4; MC++)
+             for (NC = (MC + 1) * QC; WC < NC;)
+               if (wC = CC[gC++], nC = CC[gC++], wC > 128) {
+                 if (FC = wC - 128, 0 == FC || FC > NC - WC) throw "HDR Bad Format, bad scanline data (run)";
+ ... (21 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L290` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/312.js#L150) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/312.js#L290)

```diff
-       return null
+       return NC
```

#### 12. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L292-L361` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/312.js#L152) · [Before (L292-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/312.js#L292-L361)

```diff
-     xk.URLConfig = {
-       jsDecoderModule: "https://cdn.babylonjs.com/babylon.ktx2Decoder.js",
-       wasmUASTCToASTC: null,
-       wasmUASTCToBC7: null,
-       wasmUASTCToRGBA_UNORM: null,
-       wasmUASTCToRGBA_SRGB: null,
-       wasmUASTCToR8_UNORM: null,
-       wasmUASTCToRG8_UNORM: null,
-       jsMSCTranscoder: null,
-       wasmMSCTranscoder: null,
-       wasmZSTDDecoder: null
-     }, xk.DefaultNumWorkers = xk.GetDefaultNumWorkers(), xk.DefaultDecoderOptions = new class {
-       constructor() {
-         this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
-       }
-       get isDirty() {
- ... (54 more removed lines; see GitHub link above)
+     wC.FACE_LEFT = [new QC.r(-1, -1, -1), new QC.r(1, -1, -1), new QC.r(-1, 1, -1), new QC.r(1, 1, -1)], wC.FACE_RIGHT = [new QC.r(1, -1, 1), new QC.r(-1, -1, 1), new QC.r(1, 1, 1), new QC.r(-1, 1, 1)], wC.FACE_FRONT = [new QC.r(1, -1, -1), new QC.r(1, -1, 1), new QC.r(1, 1, -1), … [truncated]
```

#### 13. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L366-L374` → after: `L157-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/312.js#L157-L158) · [Before (L366-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/312.js#L366-L374)

```diff
-       loadCubeData(kk, ek, ik, Dk) {
-         if (Array.isArray(kk)) return;
-         ek._invertVScale = !ek.invertY;
-         const Sk = ek.JU(),
-           bk = new fk(kk, 6),
-           rk = nk(bk.glInternalFormat);
-         null !== rk ? (ek.format = rk, ek._useSRGBBuffer = Sk._getUseSRGBBuffer(!0, !ek.generateMipMaps), ek._gammaSpace = !0) : ek.format = bk.glInternalFormat;
-         const Pk = bk.numberOfMipmapLevels > 1 && ek.generateMipMaps;
-         Sk._unpackFlipY(!0), bk.uploadLevels(ek, ek.generateMipMaps), ek.width = bk.pixelWidth, ek.height = bk.pixelHeight, Sk._setCubeMapTextureParams(ek, Pk, bk.numberOfMipmapLevels - 1), ek.isReady = !0, ek.onLoadedObservable.notifyObservers(ek), ek.onLoadedObservable.clear(), … [truncated]
+       loadCubeData() {
+         throw ".hdr not supported in Cube."
```

#### 14. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L376-L424` → after: `L160-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L160-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/312.js#L160-L169) · [Before (L376-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/312.js#L376-L424)

```diff
-       loadData(kk, ek, ik, Sk) {
-         if (fk.IsValid(kk)) {
-           ek._invertVScale = !ek.invertY;
-           const Dk = new fk(kk, 1),
-             Sk = nk(Dk.glInternalFormat);
-           null !== Sk ? (ek.format = Sk, ek._useSRGBBuffer = ek.JU()._getUseSRGBBuffer(!0, !ek.generateMipMaps), ek._gammaSpace = !0) : ek.format = Dk.glInternalFormat, ik(Dk.pixelWidth, Dk.pixelHeight, ek.generateMipMaps, !0, (() => {
-             Dk.uploadLevels(ek, ek.generateMipMaps)
-           }), Dk.isInvalid)
-         } else if (xk.IsValid(kk)) {
-           new xk(ek.JU())._uploadAsync(kk, ek, Sk).then((() => {
-             ik(ek.width, ek.height, ek.generateMipMaps, !0, (() => {}), !1)
-           }), (kk => {
-             Dk.b.Warn(`Failed to load KTX2 texture data: ${kk.message}`), ik(0, 0, !1, !1, (() => {}), !0)
-           }))
-         } else Dk.b.Error("texture missing KTX identifier"), ik(0, 0, !1, !1, (() => {}), !0)
-       }
- ... (33 more removed lines; see GitHub link above)
+       loadData(CC, zC, ZC) {
+         const QC = new Uint8Array(CC.buffer, CC.byteOffset, CC.byteLength),
+           wC = fC(QC),
+           bC = oC(QC, wC),
+           nC = wC.width * wC.height,
+           qC = new Float32Array(4 * nC);
+         for (let fC = 0; fC < nC; fC += 1) qC[4 * fC] = bC[3 * fC], qC[4 * fC + 1] = bC[3 * fC + 1], qC[4 * fC + 2] = bC[3 * fC + 2], qC[4 * fC + 3] = 1;
+         ZC(wC.width, wC.height, zC.generateMipMaps, !1, (() => {
+           const CC = zC.mg();
+           zC.type = 1, zC.format = 5, zC._gammaSpace = !1, CC._uploadDataToTextureDirectly(zC, qC)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/313.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/313.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333)

#### 1. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/313.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/313.js#L4)

```diff
-   41438: (kk, ek, ik) => {
+   41665: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/313.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/313.js#L6)

```diff
-       _TGATextureLoader: () => rk
+       _KTXTextureLoader: () => gC
```

#### 3. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L8` → after: `L8-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L8-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/313.js#L8-L56) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/313.js#L8)

```diff
-     var Dk = ik(38272);
+     var QC = ZC(38507);
+     class wC {
+       constructor(CC, zC) {
+         if (this.data = CC, this.isInvalid = !1, !wC.IsValid(CC)) return this.isInvalid = !0, void QC.c.Error("texture missing KTX identifier");
+         const ZC = Uint32Array.BYTES_PER_ELEMENT,
+           bC = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * ZC),
+           nC = 67305985 === bC.getUint32(0, !0);
+         return this.glType = bC.getUint32(1 * ZC, nC), this.glTypeSize = bC.getUint32(2 * ZC, nC), this.glFormat = bC.getUint32(3 * ZC, nC), this.glInternalFormat = bC.getUint32(4 * ZC, nC), this.glBaseInternalFormat = bC.getUint32(5 * ZC, nC), this.pixelWidth = bC.getUint32(6 *  … [truncated]
+       }
+       uploadLevels(CC, zC) {
+         switch (this.loadType) {
+           case wC.COMPRESSED_2D:
+             this._upload2DCompressedLevels(CC, zC);
+           case wC.TEX_2D:
+           case wC.COMPRESSED_3D:
+           case wC.TEX_3D:
+ ... (33 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L11-L23` → after: `L59-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L59-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/313.js#L59-L241) · [Before (L11-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/313.js#L11-L23)

```diff
-       let ek = 0;
-       return {
-         id_length: kk[ek++],
-         colormap_type: kk[ek++],
-         image_type: kk[ek++],
-         colormap_index: kk[ek++] | kk[ek++] << 8,
-         colormap_length: kk[ek++] | kk[ek++] << 8,
-         colormap_size: kk[ek++],
-         origin: [kk[ek++] | kk[ek++] << 8, kk[ek++] | kk[ek++] << 8],
-         width: kk[ek++] | kk[ek++] << 8,
-         height: kk[ek++] | kk[ek++] << 8,
-         pixel_size: kk[ek++],
-         flags: kk[17]
+       let zC;
+       "undefined" === typeof CC && "undefined" !== typeof KTX2DECODER && (CC = KTX2DECODER), onmessage = ZC => {
+         if (ZC.data) switch (ZC.data.action) {
+           case "init": {
+             const QC = ZC.data.urls;
+             QC && (QC.jsDecoderModule && "undefined" === typeof CC && (importScripts(QC.jsDecoderModule), CC = KTX2DECODER), FC(QC)), ZC.data.wasmBinaries && FC(void 0, {
+               ...ZC.data.wasmBinaries,
+               jsDecoderModule: CC
+             }), zC = new CC.KTX2Decoder, postMessage({
+               action: "init"
+             });
+             break
+           }
+           case "setDefaultDecoderOptions":
+             CC.KTX2Decoder.DefaultDecoderOptions = ZC.data.options;
+             break;
+ ... (167 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L27-L66` → after: `L245-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L245-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/313.js#L245-L357) · [Before (L27-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/313.js#L27-L66)

```diff
-     function Sk(kk, ek) {
-       if (ek.length < 19) return void Dk.b.Error("Unable to load TGA file - Not enough data to contain header");
-       let ik = 18;
-       const Sk = fk(ek);
-       if (Sk.id_length + ik > ek.length) return void Dk.b.Error("Unable to load TGA file - Not enough data");
-       ik += Sk.id_length;
-       let rk, Pk = !1,
-         mk = !1,
-         Mk = !1;
-       switch (Sk.image_type) {
-         case 9:
-           Pk = !0;
-         case 1:
-           mk = !0;
-           break;
-         case 10:
- ... (24 more removed lines; see GitHub link above)
+     function MC(CC) {
+       switch (CC) {
+         case 35916:
+           return 33776;
+         case 35918:
+           return 33778;
+         case 35919:
+           return 33779;
+         case 37493:
+           return 37492;
+         case 37497:
+           return 37496;
+         case 37495:
+           return 37494;
+         case 37840:
+           return 37808;
+ ... (97 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L68-L155` → after: `L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/313.js#L359) · [Before (L68-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/313.js#L68-L155)

```diff
-       } else rk = ek.subarray(ik, ik + (mk ? Sk.width * Sk.height : xk));
-       switch ((48 & Sk.flags) >> 4) {
-         default:
-         case 2:
-           Uk = 0, wk = 1, yk = Sk.width, Hk = 0, lk = 1, pk = Sk.height;
-           break;
-         case 0:
-           Uk = 0, wk = 1, yk = Sk.width, Hk = Sk.height - 1, lk = -1, pk = -1;
-           break;
-         case 3:
-           Uk = Sk.width - 1, wk = -1, yk = -1, Hk = 0, lk = 1, pk = Sk.height;
-           break;
-         case 1:
-           Uk = Sk.width - 1, wk = -1, yk = -1, Hk = Sk.height - 1, lk = -1, pk = -1
-       }
-       const Yk = "_getImageData" + (Mk ? "Grey" : "") + Sk.pixel_size + "bits",
- ... (72 more removed lines; see GitHub link above)
+         }), this._ktx2DecoderOptions = CC, CC
```

#### 7. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L162-L169` → after: `L366-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L366-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/313.js#L366-L424) · [Before (L162-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/313.js#L162-L169)

```diff
-       loadCubeData() {
-         throw ".env not supported in Cube."
-       }
-       loadData(kk, ek, ik) {
-         const Dk = new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength),
-           bk = fk(Dk);
-         ik(bk.width, bk.height, ek.generateMipMaps, !1, (() => {
-           Sk(ek, Dk)
+       loadCubeData(CC, zC, ZC, QC) {
+         if (Array.isArray(CC)) return;
+         zC._invertVScale = !zC.invertY;
+         const bC = zC.mg(),
+           nC = new wC(CC, 6),
+           fC = MC(nC.glInternalFormat);
+         null !== fC ? (zC.format = fC, zC._useSRGBBuffer = bC._getUseSRGBBuffer(!0, !zC.generateMipMaps), zC._gammaSpace = !0) : zC.format = nC.glInternalFormat;
+         const oC = nC.numberOfMipmapLevels > 1 && zC.generateMipMaps;
+         bC._unpackFlipY(!0), nC.uploadLevels(zC, zC.generateMipMaps), zC.width = nC.pixelWidth, zC.height = nC.pixelHeight, bC._setCubeMapTextureParams(zC, oC, nC.numberOfMipmapLevels - 1), zC.isReady = !0, zC.onLoadedObservable.notifyObservers(zC), zC.onLoadedObservable.clear(), … [truncated]
+       }
+       loadData(CC, zC, ZC, bC) {
+         if (wC.IsValid(CC)) {
+           zC._invertVScale = !zC.invertY;
+           const QC = new wC(CC, 1),
+             bC = MC(QC.glInternalFormat);
+           null !== bC ? (zC.format = bC, zC._useSRGBBuffer = zC.mg()._getUseSRGBBuffer(!0, !zC.generateMipMaps), zC._gammaSpace = !0) : zC.format = QC.glInternalFormat, ZC(QC.pixelWidth, QC.pixelHeight, zC.generateMipMaps, !0, (() => {
+ ... (43 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/314.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/314.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65)

#### 1. `bundles/bloxd.io/chunks/js/314.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/314.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/314.js#L4)

```diff
-   41444: (kk, ek, ik) => {
+   41679: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/314.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/314.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/314.js#L6-L7)

```diff
-       ReadExrDataAsync: () => xe,
-       _ExrTextureLoader: () => Ke
+       _TGATextureLoader: () => fC
```

#### 3. `bundles/bloxd.io/chunks/js/314.js` (Changed code · before: `L9-L165` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/314.js#L8) · [Before (L9-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/314.js#L9-L165)

```diff
-     var Dk = ik(38272),
-       fk = ik(36729),
-       Sk = ik(39628);
-     const bk = 4,
-       rk = 4,
-       Pk = 1,
-       mk = 2,
-       Mk = 8,
-       Kk = 65536,
-       xk = Kk >> 3,
-       nk = 14,
-       Uk = 65537,
-       Hk = 1 << nk,
-       wk = Hk - 1,
-       lk = 59,
-       pk = 63,
- ... (141 more removed lines; see GitHub link above)
+     var QC = ZC(38507);
```

#### 4. `bundles/bloxd.io/chunks/js/314.js` (Changed code · before: `L168-L170` → after: `L11-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65) · [After (L11-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/314.js#L11-L23) · [Before (L168-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/314.js#L168-L170)

```diff
-       for (let ek = 1; ek < kk.length; ek++) {
-         const ik = kk[ek - 1] + kk[ek] - 128;
-         kk[ek] = ik
+       let zC = 0;
+       return {
+         id_length: CC[zC++],
+         colormap_type: CC[zC++],
+         image_type: CC[zC++],
+         colormap_index: CC[zC++] | CC[zC++] << 8,
+         colormap_length: CC[zC++] | CC[zC++] << 8,
+         colormap_size: CC[zC++],
+         origin: [CC[zC++] | CC[zC++] << 8, CC[zC++] | CC[zC++] << 8],
+         width: CC[zC++] | CC[zC++] << 8,
+         height: CC[zC++] | CC[zC++] << 8,
+         pixel_size: CC[zC++],
+         flags: CC[17]
```

#### 5. `bundles/bloxd.io/chunks/js/314.js` (Changed code · before: `L175-L207` → after: `L28-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65) · [After (L28-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/314.js#L28-L49) · [Before (L175-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/314.js#L175-L207)

```diff
-       let ik = 0,
-         Dk = Math.floor((kk.length + 1) / 2),
-         fk = 0;
-       const Sk = kk.length - 1;
-       for (; !(fk > Sk) && (ek[fk++] = kk[ik++], !(fk > Sk));) ek[fk++] = kk[Dk++]
-     }! function(kk) {
-       kk[kk.NO_COMPRESSION = 0] = "NO_COMPRESSION", kk[kk.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", kk[kk.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", kk[kk.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", kk[kk.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", kk[kk.PXR24_COMPRESSION = 5] = "PX … [truncated]
-     }(Yk || (Yk = {})),
-     function(kk) {
-       kk[kk.INCREASING_Y = 0] = "INCREASING_Y", kk[kk.DECREASING_Y = 1] = "DECREASING_Y"
-     }(Lk || (Lk = {}));
-     const Ek = 20000630;
- 
-     function hk(kk, ek) {
-       if (kk.getUint32(0, !0) != Ek) throw new Error("Incorrect OpenEXR format");
-       const ik = kk.getUint8(4),
- ... (17 more removed lines; see GitHub link above)
+       if (zC.length < 19) return void QC.c.Error("Unable to load TGA file - Not enough data to contain header");
+       let ZC = 18;
+       const bC = wC(zC);
+       if (bC.id_length + ZC > zC.length) return void QC.c.Error("Unable to load TGA file - Not enough data");
+       ZC += bC.id_length;
+       let fC, oC = !1,
+         qC = !1,
+         FC = !1;
+       switch (bC.image_type) {
+         case 9:
+           oC = !0;
+         case 1:
+           qC = !0;
+           break;
+         case 10:
+           oC = !0;
+ ... (6 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/314.js` (Changed code · before: `L209-L213` → after: `L51-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65) · [After (L51-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/314.js#L51-L81) · [Before (L209-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/314.js#L209-L213)

```diff
-       if (0 != (-5 & fk)) throw new Error("Unsupported file format");
-       return {
-         version: ik,
-         spec: Sk,
-         ...bk
+       const WC = bC.pixel_size >> 3,
+         NC = bC.width * bC.height * WC;
+       let MC, gC, SC, pC, PC, GC, RC;
+       if (qC && (MC = zC.subarray(ZC, ZC += bC.colormap_length * (bC.colormap_size >> 3))), oC) {
+         let CC, QC, wC;
+         fC = new Uint8Array(NC);
+         let bC = 0;
+         const nC = new Uint8Array(WC);
+         for (; ZC < NC && bC < NC;)
+           if (CC = zC[ZC++], QC = 1 + (127 & CC), 128 & CC) {
+             for (wC = 0; wC < WC; ++wC) nC[wC] = zC[ZC++];
+             for (wC = 0; wC < QC; ++wC) fC.set(nC, bC + wC * WC);
+             bC += WC * QC
+           } else {
+             for (QC *= WC, wC = 0; wC < QC; ++wC) fC[bC + wC] = zC[ZC++];
+             bC += QC
+ ... (15 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/314.js` (Changed code · before: `L216-L224` → after: `L87-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65) · [After (L87-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/314.js#L87-L155) · [Before (L216-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/314.js#L216-L224)

```diff
-     const ak = 32768,
-       Wk = 65535;
- 
-     function tk(kk, ek, ik, Dk, fk) {
-       for (; ik < kk;) ek = ek << 8 | Vk(Dk, fk), ik += 8;
-       return {
-         l: ek >> (ik -= kk) & (1 << kk) - 1,
-         c: ek,
-         lc: ik
+     const nC = {
+       GetTGAHeader: wC,
+       UploadContent: bC,
+       _getImageData8bits: function(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
+         const qC = ZC,
+           FC = zC,
+           WC = CC.width,
+           NC = CC.height;
+         let MC, gC, SC, pC = 0;
+         const PC = new Uint8Array(WC * NC * 4);
+         for (SC = QC; SC !== bC; SC += wC)
+           for (gC = nC; gC !== oC; gC += fC, pC++) MC = qC[pC], PC[4 * (gC + WC * SC) + 3] = 255, PC[4 * (gC + WC * SC) + 2] = FC[3 * MC + 0], PC[4 * (gC + WC * SC) + 1] = FC[3 * MC + 1], PC[4 * (gC + WC * SC) + 0] = FC[3 * MC + 2];
+         return PC
+       },
+       _getImageData16bits: function(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
+         const qC = ZC,
+ ... (53 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/314.js` (Changed code · before: `L226-L720` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/314.js#L157) · [Before (L226-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/314.js#L226-L720)

```diff
-     }
- 
-     function Xk(kk, ek, ik, Dk) {
-       return {
-         c: kk = kk << 8 | Vk(ik, Dk),
-         lc: ek += 8
-       }
-     }
- 
-     function Bk(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk) {
-       if (kk == ek) {
-         if (Dk < 8) {
-           const kk = Xk(ik, Dk, fk, Sk);
-           ik = kk.c, Dk = kk.lc
-         }
-         let kk = ik >> (Dk -= 8);
- ... (479 more removed lines; see GitHub link above)
+     };
```

#### 9. `bundles/bloxd.io/chunks/js/314.js` (Changed code · before: `L725-L726` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/314.js#L162-L163) · [Before (L725-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/314.js#L725-L726)

```diff
-       loadCubeData(kk, ek, ik, Dk, fk) {
-         throw ".exr not supported in Cube."
+       loadCubeData() {
+         throw ".env not supported in Cube."
```

#### 10. `bundles/bloxd.io/chunks/js/314.js` (Changed code · before: `L729-L743` → after: `L166-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65) · [After (L166-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/314.js#L166-L169) · [Before (L729-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/314.js#L729-L743)

```diff
-         const fk = new DataView(kk.buffer),
-           Sk = {
-             value: 0
-           },
-           bk = hk(fk, Sk);
-         me(bk, fk, Sk, Pe.DefaultOutputType).then((kk => {
-           Me(kk, bk, fk, Sk);
-           const Dk = bk.dataWindow.xMax - bk.dataWindow.xMin + 1,
-             rk = bk.dataWindow.yMax - bk.dataWindow.yMin + 1;
-           ik(Dk, rk, ek.generateMipMaps, !1, (() => {
-             const ik = ek.JU();
-             ek.format = bk.format, ek.type = kk.textureType, ek.invertY = !1, ek._gammaSpace = !bk.linearSpace, kk.byteArray && ik._uploadDataToTextureDirectly(ek, kk.byteArray, 0, 0, void 0, !0)
-           }))
-         })).catch((kk => {
-           Dk.b.Error("Failed to load EXR texture: ", kk)
+         const QC = new Uint8Array(CC.buffer, CC.byteOffset, CC.byteLength),
+           nC = wC(QC);
+         ZC(nC.width, nC.height, zC.generateMipMaps, !1, (() => {
+           bC(zC, QC)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/315.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/315.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b)

#### 1. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/315.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/315.js#L4-L6)

```diff
-   41597: (kk, ek, ik) => {
-     ik.d(ek, {
-       b: () => bk
+   41687: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       ReadExrDataAsync: () => Wz,
+       _ExrTextureLoader: () => Fz
```

#### 2. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L8-L104` → after: `L9-L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L9-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/315.js#L9-L771) · [Before (L8-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/315.js#L8-L104)

```diff
-     var Dk = ik(39412);
-     const fk = "bumpVertex",
-       Sk = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
-     const bk = {
-       name: fk,
-       shader: Sk
-     }
-   },
-   41519: (kk, ek, ik) => {
-     ik.d(ek, {
-       c: () => bk
-     });
-     var Dk = ik(39412);
-     const fk = "bumpVertexDeclaration",
-       Sk = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
- ... (81 more removed lines; see GitHub link above)
+     var QC = ZC(38507),
+       wC = ZC(36991),
+       bC = ZC(39889);
+     const nC = 4,
+       fC = 4,
+       oC = 1,
+       qC = 2,
+       FC = 8,
+       WC = 65536,
+       NC = WC >> 3,
+       MC = 14,
+       gC = 65537,
+       SC = 1 << MC,
+       pC = SC - 1,
+       PC = 59,
+       GC = 63,
+ ... (747 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/316.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/316.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064)

#### 1. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/316.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/316.js#L4)

```diff
-   41576: (kk, ek, ik) => {
+   41872: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/316.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/316.js#L6)

```diff
-       c: () => bk
+       b: () => nC
```

#### 3. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/316.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/316.js#L8-L11)

```diff
-     var Dk = ik(39412);
-     const fk = "bakedVertexAnimation",
-       Sk = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     var QC = ZC(39674);
+     const wC = "bumpVertex",
+       bC = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 4. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/316.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/316.js#L17)

```diff
-   41494: (kk, ek, ik) => {
+   41770: (CC, zC, ZC) => {
```

#### 5. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/316.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/316.js#L19)

```diff
-       d: () => bk
+       e: () => nC
```

#### 6. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/316.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/316.js#L21-L24)

```diff
-     var Dk = ik(39412);
-     const fk = "bakedVertexAnimationDeclaration",
-       Sk = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     var QC = ZC(39674);
+     const wC = "bumpVertexDeclaration",
+       bC = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 7. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/316.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/316.js#L30)

```diff
-   41487: (kk, ek, ik) => {
+   41714: (CC, zC, ZC) => {
```

#### 8. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/316.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/316.js#L32)

```diff
-       b: () => bk
+       c: () => nC
```

#### 9. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L34-L37` → after: `L34-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L34-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/316.js#L34-L38) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/316.js#L34-L37)

```diff
-     var Dk = ik(39412);
-     const fk = "bonesDeclaration",
-       Sk = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     var QC = ZC(39674);
+     ZC(41703), ZC(41708);
+     const wC = "defaultUboDeclaration",
+       bC = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 10. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L43-L45` → after: `L44-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/316.js#L44-L46) · [Before (L43-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/316.js#L43-L45)

```diff
-   41572: (kk, ek, ik) => {
-     ik.d(ek, {
-       e: () => bk
+   41694: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       defaultVertexShader: () => UC
```

#### 11. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L47-L50` → after: `L48-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L48-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/316.js#L48-L52) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/316.js#L47-L50)

```diff
-     var Dk = ik(39412);
-     const fk = "bonesVertex",
-       Sk = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     var QC = ZC(39674),
+       wC = ZC(41699);
+     const bC = "defaultVertexDeclaration",
+       nC = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nuniform mat4 view;\n#ifdef DIFFUSE\nuniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform mat4 ambientMatrix;uniform vec2 vAmbientInfos;\n#endif\n#ifdef O … [truncated]
+     QC.b.IncludesShadersStore[bC] || (QC.b.IncludesShadersStore[bC] = nC);
```

#### 12. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L54-L63` → after: `L56-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L56-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/316.js#L56-L91) · [Before (L54-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/316.js#L54-L63)

```diff
-     }
-   },
-   41606: (kk, ek, ik) => {
-     ik.d(ek, {
-       c: () => bk
-     });
-     var Dk = ik(39412);
-     const fk = "clipPlaneVertex",
-       Sk = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     };
+     var oC = ZC(41703),
+       qC = ZC(41708),
+       FC = ZC(41714),
+       WC = ZC(41717),
+       NC = ZC(41726),
+       MC = ZC(41729),
+       gC = ZC(41737),
+       SC = ZC(41740),
+       pC = ZC(41747),
+       PC = ZC(41755),
+       GC = ZC(41763),
+       RC = ZC(41770),
+       AC = ZC(41778),
+       xC = ZC(41787),
+       JC = ZC(41795),
+ ... (20 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L67-L401` → after: `L95-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L95-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/316.js#L95-L101) · [Before (L67-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/316.js#L67-L401)

```diff
-     }
-   },
-   41522: (kk, ek, ik) => {
-     ik.d(ek, {
-       e: () => bk
-     });
-     var Dk = ik(39412);
-     const fk = "clipPlaneVertexDeclaration",
-       Sk = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
-     const bk = {
-       name: fk,
-       shader: Sk
-     }
-   },
-   41455: (kk, ek, ik) => {
- ... (319 more removed lines; see GitHub link above)
+     };
+     var DC = ZC(41894);
+     const jC = "defaultVertexShader",
+       yC = "#define CUSTOM_VERTEX_EXTENSION\n#include<__decl__defaultVertex>\n#define CUSTOM_VERTEX_BEGIN\nattribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef TANGENT\nattribute vec4 tangent;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#include<uv … [truncated]
+     QC.b.ShadersStore[jC] || (QC.b.ShadersStore[jC] = yC);
+     const LC = [wC.c, fC, oC.b, qC.e, FC.c, WC.e, NC.d, MC.d, gC.b, SC.d, pC.c, PC.e, GC.b, RC.e, AC.d, xC.c, JC.c, IC.d, iC.d, vC.d, eC.c, hC.d, KC.c, YC.c, dC.e, mC.b, HC.e, EC.e, lC.c, XC.b, cC.d, uC.d, rC.e, sC.d, tC, DC.d];
+     for (const BC of LC) QC.b.IncludesShadersStore[BC.name] || (QC.b.IncludesShadersStore[BC.name] = BC.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/317.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/317.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9)

#### 1. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L4)

```diff
-   41636: (kk, ek, ik) => {
+   41848: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L6)

```diff
-       d: () => bk
+       b: () => nC
```

#### 3. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L8-L11)

```diff
-     var Dk = ik(39412);
-     const fk = "decalFragmentDeclaration",
-       Sk = "#ifdef DECAL\nuniform vec4 vDecalInfos;\n#endif\n";
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     var QC = ZC(39674);
+     const wC = "bakedVertexAnimation",
+       bC = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 4. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L17)

```diff
-   41750: (kk, ek, ik) => {
+   41737: (CC, zC, ZC) => {
```

#### 5. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L21-L24)

```diff
-     var Dk = ik(39412);
-     const fk = "depthPrePass",
-       Sk = "#ifdef DEPTHPREPASS\ngl_FragColor=vec4(0.,0.,0.,1.0);return;\n#endif\n";
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     var QC = ZC(39674);
+     const wC = "bakedVertexAnimationDeclaration",
+       bC = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 6. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L30)

```diff
-   41659: (kk, ek, ik) => {
+   41729: (CC, zC, ZC) => {
```

#### 7. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L34-L37)

```diff
-     var Dk = ik(39412);
-     const fk = "lightFragmentDeclaration",
-       Sk = "#ifdef LIGHT{X}\nuniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};\n#ifdef SPECULARTERM\nuniform vec4 vLightSpecular{X};\n#else\nvec4 vLightSpecular{X}=vec4(0.);\n#endif\n#ifdef SHADOW{X}\n#ifdef SHADOWCSM{X}\nuniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{ … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     var QC = ZC(39674);
+     const wC = "bonesDeclaration",
+       bC = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 8. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L43)

```diff
-   41665: (kk, ek, ik) => {
+   41846: (CC, zC, ZC) => {
```

#### 9. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L47-L50)

```diff
-     var Dk = ik(39412);
-     const fk = "lightUboDeclaration",
-       Sk = "#ifdef LIGHT{X}\nuniform Light{X}\n{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;\n#ifdef SPOTLIGHT{X}\nvec4 vLightDirection;vec4 vLightFalloff;\n#elif defined(POINTLIGHT{X})\nvec4 vLightFalloff;\n#elif defined(HEMILIGHT{X})\nvec3 vLightGround;\n#elif define … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     var QC = ZC(39674);
+     const wC = "bonesVertex",
+       bC = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 10. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L56)

```diff
-   41671: (kk, ek, ik) => {
+   41875: (CC, zC, ZC) => {
```

#### 11. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L58` → after: `L58-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L58-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L58-L175) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L58)

```diff
-       b: () => bk
+       d: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "clipPlaneVertex",
+       bC = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   41778: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => nC
+     });
+     var QC = ZC(39674);
+ ... (102 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L60-L63` → after: `L177-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L177-L180) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L60-L63)

```diff
-     var Dk = ik(39412);
-     const fk = "ltcHelperFunctions",
-       Sk = "vec2 LTCUv( const in vec3 N,const in vec3 V,const in float roughness ) {const float LUTSIZE=64.0;const float LUTSCALE=( LUTSIZE-1.0 )/LUTSIZE;const float LUTBIAS=0.5/LUTSIZE;float dotNV=saturate( dot( N,V ) );vec2 uv=vec2( roughness,sqrt( 1.0-dotNV ) );uv=uv*LUTSCALE+ … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     var QC = ZC(39674);
+     const wC = "lightVxUboDeclaration",
+       bC = "#ifdef LIGHT{X}\nuniform Light{X}\n{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;\n#ifdef SPOTLIGHT{X}\nvec4 vLightDirection;vec4 vLightFalloff;\n#elif defined(POINTLIGHT{X})\nvec4 vLightFalloff;\n#elif defined(HEMILIGHT{X})\nvec3 vLightGround;\n#elif define … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 13. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L69` → after: `L186-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L186-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L186-L199) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L69)

```diff
-   41513: (kk, ek, ik) => {
+   41816: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "logDepthDeclaration",
+       bC = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   41894: (CC, zC, ZC) => {
```

#### 14. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L73` → after: `L203-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L203-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L203-L216) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L73)

```diff
-     var Dk = ik(39412);
+     var QC = ZC(39674);
+     const wC = "logDepthVertex",
+       bC = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   41755: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => nC
+     });
+     var QC = ZC(39674);
```

#### 15. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L76` → after: `L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L219) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L76)

```diff
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 16. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L82` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L225) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L82)

```diff
-   41467: (kk, ek, ik) => {
+   41708: (CC, zC, ZC) => {
```

#### 17. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L84` → after: `L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L227) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L84)

```diff
-       d: () => bk
+       e: () => nC
```

#### 18. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L86` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L229) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L86)

```diff
-     var Dk = ik(39412);
+     var QC = ZC(39674);
```

#### 19. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L89` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L232) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L89)

```diff
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 20. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L95` → after: `L238-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L238-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L238-L251) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L95)

```diff
-   41653: (kk, ek, ik) => {
+   41830: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "morphTargetsVertex",
+       bC = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\n#if {X}==0\nfor (int i=0; i<NUM_MORPH_INFLUENCERS; i++) {if (float(i)>=morphTargetCount) break;vertexID=float(gl_VertexID)*morphTargetTextureInfo.x;\n#ifdef MORPHTARGETS_POSITION\npositionUpdated+=(readVector3FromRawSa … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   41811: (CC, zC, ZC) => {
```

#### 21. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L99-L102` → after: `L255-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L255-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L255-L258) · [Before (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L99-L102)

```diff
-     var Dk = ik(39412);
-     const fk = "oitDeclaration",
-       Sk = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\n#extension GL_EXT_draw_buffers : require\nlayout(location=0) out vec2 depth; \nlayout(location=1) out vec4 frontColor;layout(location=2) out vec4 backColor;\n#define MAX_DEPTH 99999.0\nhighp vec4 gl_FragColor;uniform sampler2D oi … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     var QC = ZC(39674);
+     const wC = "morphTargetsVertexDeclaration",
+       bC = "#ifdef MORPHTARGETS\n#ifndef MORPHTARGETS_TEXTURE\n#ifdef MORPHTARGETS_POSITION\nattribute vec3 position{X};\n#endif\n#ifdef MORPHTARGETS_NORMAL\nattribute vec3 normal{X};\n#endif\n#ifdef MORPHTARGETS_TANGENT\nattribute vec3 tangent{X};\n#endif\n#ifdef MORPHTARGETS_UV … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 22. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L108` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L264) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L108)

```diff
-   41769: (kk, ek, ik) => {
+   41824: (CC, zC, ZC) => {
```

#### 23. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L110` → after: `L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L266) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L110)

```diff
-       b: () => bk
+       d: () => nC
```

#### 24. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L112-L115` → after: `L268-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L268-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L268-L271) · [Before (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L112-L115)

```diff
-     var Dk = ik(39412);
-     const fk = "oitFragment",
-       Sk = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\nfloat fragDepth=gl_FragCoord.z; \n#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS\nuint halfFloat=packHalf2x16(vec2(fragDepth));vec2 full=unpackHalf2x16(halfFloat);fragDepth=full.x;\n#endif\nivec2 fragCoord=ivec2(gl_FragCoord.xy);ve … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     var QC = ZC(39674);
+     const wC = "morphTargetsVertexGlobal",
+       bC = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\nfloat vertexID;\n#endif\n#endif\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 25. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L121` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L277) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L121)

```diff
-   41685: (kk, ek, ik) => {
+   41808: (CC, zC, ZC) => {
```

#### 26. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L123` → after: `L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L279) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L123)

```diff
-       b: () => bk
+       d: () => nC
```

#### 27. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L125-L128` → after: `L281-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L281-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L281-L284) · [Before (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L125-L128)

```diff
-     var Dk = ik(39412);
-     const fk = "reflectionFunction",
-       Sk = "vec3 computeFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)\n{float lon=atan(direction.z,direction.x);float lat=acos(direction.y);vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;float s=sphereCoords.x*0.5+0.5;float t=sphereCoords.y;return  … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     var QC = ZC(39674);
+     const wC = "morphTargetsVertexGlobalDeclaration",
+       bC = "#ifdef MORPHTARGETS\nuniform float morphTargetInfluences[NUM_MORPH_INFLUENCERS];\n#ifdef MORPHTARGETS_TEXTURE \nuniform float morphTargetTextureIndices[NUM_MORPH_INFLUENCERS];uniform vec3 morphTargetTextureInfo;uniform highp sampler2DArray morphTargets;vec3 readVector … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 28. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L134` → after: `L290-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L290-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L290-L316) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L134)

```diff
-   41681: (kk, ek, ik) => {
+   41851: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "prePassVertex",
+       bC = "#ifdef PREPASS_DEPTH\nvViewPos=(view*worldPos).rgb;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvNormViewDepth=((view*worldPos).z-cameraInfo.x)/(cameraInfo.y-cameraInfo.x);\n#endif\n#ifdef PREPASS_LOCAL_POSITION\nvPosition=positionUpdated.xyz;\n#endif\n#if (defined … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   41747: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC
+ ... (11 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L138-L141` → after: `L320-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L320-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L320-L323) · [Before (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L138-L141)

```diff
-     var Dk = ik(39412);
-     const fk = "samplerFragmentDeclaration",
-       Sk = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     var QC = ZC(39674);
+     const wC = "samplerVertexDeclaration",
+       bC = "#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0\nvarying vec2 v_VARYINGNAME_UV;\n#endif\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 30. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L147` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L329) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L147)

```diff
-   41462: (kk, ek, ik) => {
+   41863: (CC, zC, ZC) => {
```

#### 31. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L149` → after: `L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L331) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L149)

```diff
-       d: () => bk
+       c: () => nC
```

#### 32. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L151` → after: `L333-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L333-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L333-L346) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L151)

```diff
-     var Dk = ik(39412);
+     var QC = ZC(39674);
+     const wC = "samplerVertexImplementation",
+       bC = "#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0\nif (v_INFONAME_==0.)\n{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uvUpdated,1.0,0.0));}\n#ifdef UV2\nelse if (v_INFONAME_==1.)\n{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv2Updated,1.0,0.0));}\n#endif\n#ifd … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   41703: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => nC
+     });
+     var QC = ZC(39674);
```

#### 33. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L154` → after: `L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L349) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L154)

```diff
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 34. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L160` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L355) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L160)

```diff
-   41677: (kk, ek, ik) => {
+   41883: (CC, zC, ZC) => {
```

#### 35. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L162` → after: `L357-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L357-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L357-L370) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L162)

```diff
-       b: () => bk
+       e: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "shadowsVertex",
+       bC = "#ifdef SHADOWS\n#if defined(SHADOWCSM{X})\nvPositionFromCamera{X}=view*worldPos;for (int i=0; i<SHADOWCSMNUM_CASCADES{X}; i++) {vPositionFromLight{X}[i]=lightMatrix{X}[i]*worldPos;\n#ifdef USE_REVERSE_DEPTHBUFFER\nvDepthMetric{X}[i]=(-vPositionFromLight{X}[i].z+light{ … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   41717: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => nC
```

#### 36. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L164-L167` → after: `L372-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L372-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L372-L375) · [Before (L164-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L164-L167)

```diff
-     var Dk = ik(39412);
-     const fk = "shadowsFragmentFunctions",
-       Sk = "#ifdef SHADOWS\n#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)\n#else\n#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)\n#endif\n#ifndef SHADOWFLOAT\nfloat unpack(vec4 color)\n{const vec4 bit_shift=vec4(1.0/(255 … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     var QC = ZC(39674);
+     const wC = "uvAttributeDeclaration",
+       bC = "#ifdef UV{X}\nattribute vec2 uv{X};\n#endif\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 37. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L173` → after: `L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L381) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L173)

```diff
-   41702: (kk, ek, ik) => {
+   41860: (CC, zC, ZC) => {
```

#### 38. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L177-L180` → after: `L385-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L385-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/317.js#L385-L401) · [Before (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/317.js#L177-L180)

```diff
-     var Dk = ik(39412);
-     const fk = "textureRepetitionFunctions",
-       Sk = "#if TEXTURE_REPETITION_MODE>0\nvec4 _texRepHash4(vec2 p) {return fract(sin(vec4(\n1.0+dot(p,vec2(37.0,17.0)),\n2.0+dot(p,vec2(11.0,47.0)),\n3.0+dot(p,vec2(41.0,29.0)),\n4.0+dot(p,vec2(23.0,31.0))\n))*103.0);}\n#endif\n#if TEXTURE_REPETITION_MODE==1\nvec4 _texRepSample … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     var QC = ZC(39674);
+     const wC = "uvVariableDeclaration",
+       bC = "#if !defined(UV{X}) && defined(MAINUV{X})\nvec2 uv{X}=vec2(0.,0.);\n#endif\n#ifdef MAINUV{X}\nvMainUV{X}=uv{X};\n#endif\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   41888: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "vertexColorMixing",
+       bC = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvColor=vec4(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvColor*=colorUpdated;\n#else\nvColor.rgb*=colorUpdated.rgb;\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvColor*=instanceColor;\n#endif\n#e … [truncated]
+ ... (1 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/318.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/318.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c)

#### 1. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L4-L44` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L4) · [Before (L4-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L4-L44)

```diff
-   41737: (kk, ek, ik) => {
-     ik.d(ek, {
-       b: () => bk
-     });
-     var Dk = ik(39412);
-     const fk = "bumpFragment",
-       Sk = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
-     const bk = {
-       name: fk,
-       shader: Sk
-     }
-   },
-   41710: (kk, ek, ik) => {
-     ik.d(ek, {
-       d: () => bk
- ... (25 more removed lines; see GitHub link above)
+   41909: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L48-L51` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L8-L11) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L48-L51)

```diff
-     var Dk = ik(39412);
-     const fk = "clipPlaneFragment",
-       Sk = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     var QC = ZC(39674);
+     const wC = "decalFragmentDeclaration",
+       bC = "#ifdef DECAL\nuniform vec4 vDecalInfos;\n#endif\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 3. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L57-L83` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L17) · [Before (L57-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L57-L83)

```diff
-   41718: (kk, ek, ik) => {
-     ik.d(ek, {
-       d: () => bk
-     });
-     var Dk = ik(39412);
-     const fk = "clipPlaneFragmentDeclaration",
-       Sk = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
-     const bk = {
-       name: fk,
-       shader: Sk
-     }
-   },
-   41479: (kk, ek, ik) => {
-     ik.d(ek, {
-       d: () => bk
- ... (11 more removed lines; see GitHub link above)
+   42033: (CC, zC, ZC) => {
```

#### 4. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L87-L90` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L21-L24) · [Before (L87-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L87-L90)

```diff
-     var Dk = ik(39412);
-     const fk = "objectIdFunctions",
-       Sk = "highp vec4 encodeObjectId(highp float objectId) {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4(objectId/255.0,0.0,0.0,1.0);\n#else\nhighp float id=floor(objectId);highp vec3 encodedId=vec3(\nfloor(mod(id,16777216.0)/65536.0),\nfloor(mod(id,65536.0)/256.0),\nmod(id,256.0) … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     var QC = ZC(39674);
+     const wC = "depthPrePass",
+       bC = "#ifdef DEPTHPREPASS\ngl_FragColor=vec4(0.,0.,0.,1.0);return;\n#endif\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 5. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L96` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L30) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L96)

```diff
-   61171: (kk, ek, ik) => {
+   41925: (CC, zC, ZC) => {
```

#### 6. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L100-L103` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L34-L37) · [Before (L100-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L100-L103)

```diff
-     var Dk = ik(39412);
-     const fk = "openpbrDielectricReflectance",
-       Sk = "struct ReflectanceParams\n{float F0;float F90;vec3 coloredF0;vec3 coloredF90;};\n#define pbr_inline\nReflectanceParams dielectricReflectance(\nin float insideIOR,in float outsideIOR,in vec3 specularColor,in float specularWeight\n)\n{ReflectanceParams outParams;float d … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     var QC = ZC(39674);
+     const wC = "lightFragmentDeclaration",
+       bC = "#ifdef LIGHT{X}\nuniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};\n#ifdef SPECULARTERM\nuniform vec4 vLightSpecular{X};\n#else\nvec4 vLightSpecular{X}=vec4(0.);\n#endif\n#ifdef SHADOW{X}\n#ifdef SHADOWCSM{X}\nuniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{ … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 7. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L109` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L43) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L109)

```diff
-   61176: (kk, ek, ik) => {
+   41934: (CC, zC, ZC) => {
```

#### 8. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L111` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L45) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L111)

```diff
-       c: () => bk
+       b: () => nC
```

#### 9. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L113-L116` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L47-L50) · [Before (L113-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L113-L116)

```diff
-     var Dk = ik(39412);
-     const fk = "openpbrGeometryInfo",
-       Sk = "struct geometryInfoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;};struct geometryInfoAnisoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;float anisotropy;vec3 anisotropicTangent;vec3 … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     var QC = ZC(39674);
+     const wC = "lightUboDeclaration",
+       bC = "#ifdef LIGHT{X}\nuniform Light{X}\n{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;\n#ifdef SPOTLIGHT{X}\nvec4 vLightDirection;vec4 vLightFalloff;\n#elif defined(POINTLIGHT{X})\nvec4 vLightFalloff;\n#elif defined(HEMILIGHT{X})\nvec3 vLightGround;\n#elif define … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 10. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L122` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L56) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L122)

```diff
-   61181: (kk, ek, ik) => {
+   41938: (CC, zC, ZC) => {
```

#### 11. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L124` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L58) · [Before (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L124)

```diff
-       e: () => bk
+       c: () => nC
```

#### 12. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L126-L129` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L60-L63) · [Before (L126-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L126-L129)

```diff
-     var Dk = ik(39412);
-     const fk = "openpbrIblFunctions",
-       Sk = "#ifdef REFLECTION\nvec3 sampleIrradiance(\nin vec3 surfaceNormal\n#if defined(NORMAL) && defined(USESPHERICALINVERTEX)\n,in vec3 vEnvironmentIrradianceSH\n#endif\n#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || ( … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     var QC = ZC(39674);
+     const wC = "ltcHelperFunctions",
+       bC = "vec2 LTCUv( const in vec3 N,const in vec3 V,const in float roughness ) {const float LUTSIZE=64.0;const float LUTSCALE=( LUTSIZE-1.0 )/LUTSIZE;const float LUTBIAS=0.5/LUTSIZE;float dotNV=saturate( dot( N,V ) );vec2 uv=vec2( roughness,sqrt( 1.0-dotNV ) );uv=uv*LUTSCALE+ … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 13. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L135` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L69) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L135)

```diff
-   61193: (kk, ek, ik) => {
+   41755: (CC, zC, ZC) => {
```

#### 14. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L139-L155` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L73-L76) · [Before (L139-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L139-L155)

```diff
-     var Dk = ik(39412);
-     const fk = "openpbrSubsurfaceLayerData",
-       Sk = "float subsurface_weight=vSubsurfaceWeight;vec3 subsurface_color=vSubsurfaceColor.rgb;float subsurface_radius=vSubsurfaceRadius;vec3 subsurface_radius_scale=vSubsurfaceRadiusScale;float subsurface_scatter_anisotropy=clamp(vSubsurfaceScatterAnisotropy,-0.9999,0.9999);\n … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
-     const bk = {
-       name: fk,
-       shader: Sk
-     }
-   },
-   61187: (kk, ek, ik) => {
-     ik.d(ek, {
-       b: () => bk
-     });
-     var Dk = ik(39412);
-     const fk = "openpbrTransmissionLayerData",
-       Sk = "float transmission_weight=vTransmissionWeight;vec3 transmission_color=vTransmissionColor.rgb;float transmission_depth=vTransmissionDepth;vec3 transmission_scatter=vTransmissionScatter.rgb;float transmission_scatter_anisotropy=clamp(vTransmissionScatterAnisotropy,-0.99 … [truncated]
- ... (1 more removed lines; see GitHub link above)
+     var QC = ZC(39674);
+     const wC = "mainUVVaryingDeclaration",
+       bC = "#ifdef MAINUV{X}\nvarying vec2 vMainUV{X};\n#endif\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 15. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L161` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L82) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L161)

```diff
-   60935: (kk, ek, ik) => {
+   41708: (CC, zC, ZC) => {
```

#### 16. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L165-L168` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L86-L89) · [Before (L165-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L165-L168)

```diff
-     var Dk = ik(39412);
-     const fk = "pbrBRDFFunctions",
-       Sk = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     var QC = ZC(39674);
+     const wC = "meshUboDeclaration",
+       bC = "#ifdef WEBGL2\nuniform mat4 world;uniform float visibility;\n#else\nlayout(std140,column_major) uniform;uniform Mesh\n{mat4 world;float visibility;};\n#endif\n#define WORLD_UBO\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 17. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L174` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L95) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L174)

```diff
-   60958: (kk, ek, ik) => {
+   41919: (CC, zC, ZC) => {
```

#### 18. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L178-L181` → after: `L99-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L99-L102) · [Before (L178-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L178-L181)

```diff
-     var Dk = ik(39412);
-     const fk = "pbrFragmentReflectionDeclaration",
-       Sk = "#ifdef REFLECTION\n#ifdef REFLECTIONMAP_3D\n#define sampleReflection(s,c) textureCube(s,c)\nuniform samplerCube reflectionSampler;\n#ifdef LODBASEDMICROSFURACE\n#define sampleReflectionLod(s,c,l) textureCubeLodEXT(s,c,l)\n#else\nuniform samplerCube reflectionSamplerLo … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     var QC = ZC(39674);
+     const wC = "oitDeclaration",
+       bC = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\n#extension GL_EXT_draw_buffers : require\nlayout(location=0) out vec2 depth; \nlayout(location=1) out vec4 frontColor;layout(location=2) out vec4 backColor;\n#define MAX_DEPTH 99999.0\nhighp vec4 gl_FragColor;uniform sampler2D oi … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 19. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L187` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L108) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L187)

```diff
-   60998: (kk, ek, ik) => {
+   42044: (CC, zC, ZC) => {
```

#### 20. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L189` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L110) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L189)

```diff
-       b: () => bk
+       c: () => nC
```

#### 21. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L191-L194` → after: `L112-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L112-L115) · [Before (L191-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L191-L194)

```diff
-     var Dk = ik(39412);
-     const fk = "pbrIBLFunctions",
-       Sk = "#if defined(REFLECTION) || defined(SS_REFRACTION)\nfloat getLodFromAlphaG(float cubeMapDimensionPixels,float microsurfaceAverageSlope) {float microsurfaceAverageSlopeTexels=cubeMapDimensionPixels*microsurfaceAverageSlope;float lod=log2(microsurfaceAverageSlopeTexels); … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     var QC = ZC(39674);
+     const wC = "oitFragment",
+       bC = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\nfloat fragDepth=gl_FragCoord.z; \n#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS\nuint halfFloat=packHalf2x16(vec2(fragDepth));vec2 full=unpackHalf2x16(halfFloat);fragDepth=full.x;\n#endif\nivec2 fragCoord=ivec2(gl_FragCoord.xy);ve … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 22. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L200` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L121) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L200)

```diff
-   41685: (kk, ek, ik) => {
+   41964: (CC, zC, ZC) => {
```

#### 23. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L202` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L123) · [Before (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L202)

```diff
-       b: () => bk
+       d: () => nC
```

#### 24. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L204` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L125) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L204)

```diff
-     var Dk = ik(39412);
+     var QC = ZC(39674);
```

#### 25. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L207` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L128) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L207)

```diff
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 26. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L213` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L134) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L213)

```diff
-   41681: (kk, ek, ik) => {
+   41961: (CC, zC, ZC) => {
```

#### 27. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L215` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L136) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L215)

```diff
-       b: () => bk
+       e: () => nC
```

#### 28. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L217` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L138) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L217)

```diff
-     var Dk = ik(39412);
+     var QC = ZC(39674);
```

#### 29. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L220` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L141) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L220)

```diff
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 30. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L226` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L147) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L226)

```diff
-   61164: (kk, ek, ik) => {
+   41703: (CC, zC, ZC) => {
```

#### 31. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L230-L233` → after: `L151-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L151-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L151-L154) · [Before (L230-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L230-L233)

```diff
-     var Dk = ik(39412);
-     const fk = "sceneFragmentDeclaration",
-       Sk = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nuniform mat4 viewProjectionR;\n#endif\nuniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;uniform mat4 inverseProjection;\n";
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     var QC = ZC(39674);
+     const wC = "sceneUboDeclaration",
+       bC = "layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nmat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 32. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L239` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L160) · [Before (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L239)

```diff
-   41462: (kk, ek, ik) => {
+   41952: (CC, zC, ZC) => {
```

#### 33. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L241` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L162) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L241)

```diff
-       d: () => bk
+       e: () => nC
```

#### 34. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L243-L246` → after: `L164-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L164-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L164-L167) · [Before (L243-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L243-L246)

```diff
-     var Dk = ik(39412);
-     const fk = "sceneUboDeclaration",
-       Sk = "layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nmat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};\n";
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     var QC = ZC(39674);
+     const wC = "shadowsFragmentFunctions",
+       bC = "#ifdef SHADOWS\n#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)\n#else\n#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)\n#endif\n#ifndef SHADOWFLOAT\nfloat unpack(vec4 color)\n{const vec4 bit_shift=vec4(1.0/(255 … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 35. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L252-L254` → after: `L173-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L173-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L173-L175) · [Before (L252-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L252-L254)

```diff
-   61278: (kk, ek, ik) => {
-     ik.r(ek), ik.d(ek, {
-       geometryPixelShader: () => uk
+   41977: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => nC
```

#### 36. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L256-L287` → after: `L177-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/318.js#L177-L180) · [Before (L256-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/318.js#L256-L287)

```diff
-     var Dk = ik(39412),
-       fk = ik(41639),
-       Sk = ik(41718);
-     const bk = "mrtFragmentDeclaration",
-       rk = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#ifdef MESH_BLEND_TAG\n#if {X}>0\n#if MESH_BLEND_TAG_INDEX==0\nlayout(location=0) out highp uvec4 meshBlendTagOutput;\n#else\nlayout(location=0) out highp vec4 glFragData0;\n#endif\n#endif\n#if {X}>1\n#if MESH … [truncated]
-     Dk.d.IncludesShadersStore[bk] || (Dk.d.IncludesShadersStore[bk] = rk);
-     const Pk = {
-       name: bk,
-       shader: rk
-     };
-     var mk = ik(41704),
-       Mk = ik(41681),
-       Kk = ik(41710),
-       xk = ik(41479),
-       nk = ik(60958),
-       Uk = ik(61164),
- ... (16 more removed lines; see GitHub link above)
+     var QC = ZC(39674);
+     const wC = "textureRepetitionFunctions",
+       bC = "#if TEXTURE_REPETITION_MODE>0\nvec4 _texRepHash4(vec2 p) {return fract(sin(vec4(\n1.0+dot(p,vec2(37.0,17.0)),\n2.0+dot(p,vec2(11.0,47.0)),\n3.0+dot(p,vec2(41.0,29.0)),\n4.0+dot(p,vec2(23.0,31.0))\n))*103.0);}\n#endif\n#if TEXTURE_REPETITION_MODE==1\nvec4 _texRepSample … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/319.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/319.js` (41 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9)

#### 1. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/319.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/319.js#L4)

```diff
-   41576: (kk, ek, ik) => {
+   42020: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/319.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/319.js#L6)

```diff
-       c: () => bk
+       b: () => nC
```

#### 3. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/319.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/319.js#L8-L11)

```diff
-     var Dk = ik(39412);
-     const fk = "bakedVertexAnimation",
-       Sk = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     var QC = ZC(39674);
+     const wC = "bumpFragment",
+       bC = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 4. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/319.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/319.js#L17)

```diff
-   41494: (kk, ek, ik) => {
+   41988: (CC, zC, ZC) => {
```

#### 5. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L21-L24` → after: `L21-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/319.js#L21-L25) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/319.js#L21-L24)

```diff
-     var Dk = ik(39412);
-     const fk = "bakedVertexAnimationDeclaration",
-       Sk = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     var QC = ZC(39674);
+     ZC(41961);
+     const wC = "bumpFragmentFunctions",
+       bC = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 6. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L30` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/319.js#L31) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/319.js#L30)

```diff
-   41487: (kk, ek, ik) => {
+   41982: (CC, zC, ZC) => {
```

#### 7. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L32` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/319.js#L33) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/319.js#L32)

```diff
-       b: () => bk
+       e: () => nC
```

#### 8. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L34-L37` → after: `L35-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/319.js#L35-L38) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/319.js#L34-L37)

```diff
-     var Dk = ik(39412);
-     const fk = "bonesDeclaration",
-       Sk = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     var QC = ZC(39674);
+     const wC = "bumpFragmentMainFunctions",
+       bC = "#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#ifdef OBJECTSPACE … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 9. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L43` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/319.js#L44) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/319.js#L43)

```diff
-   41572: (kk, ek, ik) => {
+   42013: (CC, zC, ZC) => {
```

#### 10. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L45` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/319.js#L46) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/319.js#L45)

```diff
-       e: () => bk
+       c: () => nC
```

#### 11. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L47-L50` → after: `L48-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/319.js#L48-L51) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/319.js#L47-L50)

```diff
-     var Dk = ik(39412);
-     const fk = "bonesVertex",
-       Sk = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     var QC = ZC(39674);
+     const wC = "clipPlaneFragment",
+       bC = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 12. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L56` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/319.js#L57) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/319.js#L56)

```diff
-   41597: (kk, ek, ik) => {
+   41996: (CC, zC, ZC) => {
```

#### 13. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L60-L63` → after: `L61-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/319.js#L61-L64) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/319.js#L60-L63)

```diff
-     var Dk = ik(39412);
-     const fk = "bumpVertex",
-       Sk = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     var QC = ZC(39674);
+     const wC = "clipPlaneFragmentDeclaration",
+       bC = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 14. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L69` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/319.js#L70) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/319.js#L69)

```diff
-   41606: (kk, ek, ik) => {
+   41726: (CC, zC, ZC) => {
```

#### 15. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L71` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/319.js#L72) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/319.js#L71)

```diff
-       c: () => bk
+       d: () => nC
```

#### 16. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L73-L76` → after: `L74-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/319.js#L74-L77) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/319.js#L73-L76)

```diff
-     var Dk = ik(39412);
-     const fk = "clipPlaneVertex",
-       Sk = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     var QC = ZC(39674);
+     const wC = "helperFunctions",
+       bC = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 17. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L82` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/319.js#L83) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/319.js#L82)

```diff
-   41522: (kk, ek, ik) => {
+   41911: (CC, zC, ZC) => {
```

#### 18. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L84` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/319.js#L85) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/319.js#L84)

```diff
-       e: () => bk
+       d: () => nC
```
