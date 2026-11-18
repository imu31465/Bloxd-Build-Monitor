# Historical build diff — part 019

- Base: e7e20713782fba2472c7866f1ac5b84e503e7647
- Build: 9ad456477d01ce4e7883eecb0f575724f962561f
- Files in this part: 2

<details>
<summary><code>bundles/bloxd.io/chunks/js/82.js</code> · modified · +1798 / -1798</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +1 / -1</summary>

```diff
@@ -1,7 +1,7 @@
 export const ⟦2-char-id⟧ = 82;
 export const ids = [82];
 export const modules = {
-  40217: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  40210: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
     async function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       const [{
         clientSideServerUrls: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 2 · Change · +2 / -2</summary>

```diff
@@ -9,9 +9,9 @@
         postJsonWithMetricsCookiesAndJsonResponse: ⟦2-char-id⟧
       }, {
         gameBridge: ⟦2-char-id⟧
-      }] = await Promise.all([Promise.resolve().then((() => ⟦2-char-id⟧(1098))), Promise.resolve().then((() => ⟦2-char-id⟧(1028))), Promise.resolve().then((() => ⟦2-char-id⟧(1703)))]), ⟦2-char-id⟧ = ⟦2-char-id⟧.latest("connectedGame").websocketUrl;
+      }] = await Promise.all([Promise.resolve().then((() => ⟦2-char-id⟧(1089))), Promise.resolve().then((() => ⟦2-char-id⟧(1020))), Promise.resolve().then((() => ⟦2-char-id⟧(1679)))]), ⟦2-char-id⟧ = ⟦2-char-id⟧.latest("connectedGame").websocketUrl;
       if (!⟦2-char-id⟧) throw new Error("AI Helper: not connected to a game server");
-      const ⟦2-char-id⟧ = `${FJ.getHttpUrlFromWebSocketUrl(XJ)}${JJ}`;
+      const ⟦2-char-id⟧ = `${VB.getHttpUrlFromWebSocketUrl(lB)}${BB}`;
       return await ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, {
         retries: 0
       })
```

</details>

<details>
<summary>Hunk 3 · Change · +4 / -4</summary>

```diff
@@ -20,15 +20,15 @@
       postToGameServer: () => ⟦2-char-id⟧
     })
   },
-  40211: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  40205: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       WorldCodeAiPanel: () => ⟦2-char-id⟧,
       default: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(47),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(926),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(933),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let {
```

</details>

<details>
<summary>Hunk 4 · Change · +1 / -1</summary>

```diff
@@ -41,7 +41,7 @@
         onToggle: ⟦2-char-id⟧,
         className: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      const [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(⟦2-char-id⟧), ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? jJ : ⟦2-char-id⟧;
+      const [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(⟦2-char-id⟧), ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? gB : ⟦2-char-id⟧;
       return (0, ⟦2-char-id⟧.jsxs)("div", {
         className: ⟦2-char-id⟧()("WorldCodeAiLog", ⟦2-char-id⟧ && "WorldCodeAiLog-calm", ⟦2-char-id⟧ && "WorldCodeAiLog-elsewhere", ⟦2-char-id⟧ && "WorldCodeAiLog-open", ⟦2-char-id⟧),
         children: [(0, ⟦2-char-id⟧.jsxs)("button", {
```

</details>

<details>
<summary>Hunk 5 · Change · +20 / -20</summary>

```diff
@@ -61,42 +61,42 @@
         })]
       })
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1703),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(5835),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1329),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(942),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4139),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(35915),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1475),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4220),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(5830);
-    const ⟦2-char-id⟧ = new URL(⟦2-char-id⟧.e).host;
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1679),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(5853),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1324),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(946),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4133),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(35873),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1477),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4218),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(5844);
+    const ⟦2-char-id⟧ = new URL(⟦2-char-id⟧.c).host;
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.trim();
       let ⟦2-char-id⟧;
       try {
-        const ⟦2-char-id⟧ = /^docs\//i.test(⟦2-char-id⟧) ? `${nJ.e}/` : `${nJ.e}/docs/`,
-          ⟦2-char-id⟧ = ⟦2-char-id⟧.toLowerCase().replace(/^www\./, "").startsWith(`${xJ}/`);
-        ⟦2-char-id⟧ = new URL(⟦2-char-id⟧ ? `https://${cJ}` : ⟦2-char-id⟧, ⟦2-char-id⟧)
+        const ⟦2-char-id⟧ = /^docs\//i.test(⟦2-char-id⟧) ? `${DB.c}/` : `${DB.c}/docs/`,
+          ⟦2-char-id⟧ = ⟦2-char-id⟧.toLowerCase().replace(/^www\./, "").startsWith(`${EB}/`);
+        ⟦2-char-id⟧ = new URL(⟦2-char-id⟧ ? `https://${TB}` : ⟦2-char-id⟧, ⟦2-char-id⟧)
       } catch {
         return null
       }
-      if ("https:" !== ⟦2-char-id⟧.protocol && "http:" !== ⟦2-char-id⟧.protocol || ⟦2-char-id⟧.host !== ⟦2-char-id⟧ && ⟦2-char-id⟧.host !== `www.${xJ}`) return null;
+      if ("https:" !== ⟦2-char-id⟧.protocol && "http:" !== ⟦2-char-id⟧.protocol || ⟦2-char-id⟧.host !== ⟦2-char-id⟧ && ⟦2-char-id⟧.host !== `www.${EB}`) return null;
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.pathname.toLowerCase();
-      return ⟦2-char-id⟧(⟦2-char-id⟧) || null !== (0, ⟦2-char-id⟧.u)(⟦2-char-id⟧) ? FJ : (0, ⟦2-char-id⟧.r)(⟦2-char-id⟧)
+      return ⟦2-char-id⟧(⟦2-char-id⟧) || null !== (0, ⟦2-char-id⟧.z)(⟦2-char-id⟧) ? VB : (0, ⟦2-char-id⟧.v)(⟦2-char-id⟧)
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return ⟦2-char-id⟧ === ⟦2-char-id⟧.e || ⟦2-char-id⟧ === ⟦2-char-id⟧.j
+      return ⟦2-char-id⟧ === ⟦2-char-id⟧.g || ⟦2-char-id⟧ === ⟦2-char-id⟧.n
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
-      return null === ⟦2-char-id⟧ ? JJ : `${nJ.e}${cJ}`
-    }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(629),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(40138),
+      return null === ⟦2-char-id⟧ ? BB : `${DB.c}${TB}`
+    }
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(670),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(40136),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 6 · Change · +1 / -1</summary>

```diff
@@ -163,7 +163,7 @@
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.indexOf(⟦2-char-id⟧);
       if (-1 !== ⟦2-char-id⟧) {
         var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-        const ⟦2-char-id⟧ = /\w/.test(⟦2-char-id⟧[0]) && /\w/.test(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ - 1]) && void 0 !== ⟦2-char-id⟧ ? qJ : "") || /\w/.test(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.at(-1)) && void 0 !== ⟦2-char-id⟧ ? jJ : "") && /\w/.test(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧.length]) && void 0 !== ⟦2-char-id⟧ ? YJ : "");
+        const ⟦2-char-id⟧ = /\w/.test(⟦2-char-id⟧[0]) && /\w/.test(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ - 1]) && void 0 !== ⟦2-char-id⟧ ? YB : "") || /\w/.test(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.at(-1)) && void 0 !== ⟦2-char-id⟧ ? gB : "") && /\w/.test(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧.length]) && void 0 !== ⟦2-char-id⟧ ? oB : "");
         return {
           from: ⟦2-char-id⟧,
           to: ⟦2-char-id⟧ + ⟦2-char-id⟧.length,
```

</details>

<details>
<summary>Hunk 7 · Change · +1 / -1</summary>

```diff
@@ -181,7 +181,7 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
-      return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = /^[ \t]*/.exec(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[0]) && void 0 !== ⟦2-char-id⟧ ? cJ : ""
+      return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = /^[ \t]*/.exec(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[0]) && void 0 !== ⟦2-char-id⟧ ? TB : ""
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 8 · Change · +1 / -1</summary>

```diff
@@ -200,7 +200,7 @@
       return ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
         var ⟦2-char-id⟧, ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧;
-        return (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.replace(/\\`/g, "").match(/`/g)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? ZJ : 0) % 2 === 1 && (⟦2-char-id⟧ = !⟦2-char-id⟧), ⟦2-char-id⟧ || ⟦2-char-id⟧ && ⟦2-char-id⟧ !== ⟦2-char-id⟧ ? JJ : function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
+        return (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.replace(/\\`/g, "").match(/`/g)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? dB : 0) % 2 === 1 && (⟦2-char-id⟧ = !⟦2-char-id⟧), ⟦2-char-id⟧ || ⟦2-char-id⟧ && ⟦2-char-id⟧ !== ⟦2-char-id⟧ ? BB : function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
           if ("" === ⟦2-char-id⟧.trim()) return ⟦2-char-id⟧;
           const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
           return ⟦2-char-id⟧.startsWith(⟦2-char-id⟧) ? ⟦2-char-id⟧ + ⟦2-char-id⟧.slice(⟦2-char-id⟧.length) : ⟦2-char-id⟧.startsWith(⟦2-char-id⟧) ? ⟦2-char-id⟧.slice(0, Math.max(0, ⟦2-char-id⟧.length - (⟦2-char-id⟧.length - ⟦2-char-id⟧.length))) + ⟦2-char-id⟧.trimStart() : ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 9 · Change · +5 / -5</summary>

```diff
@@ -221,19 +221,19 @@
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
         var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧;
-        (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.replace(/\\`/g, "").match(/`/g)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? XJ : 0) % 2 === 1 && (⟦2-char-id⟧ = !⟦2-char-id⟧);
+        (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.replace(/\\`/g, "").match(/`/g)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? lB : 0) % 2 === 1 && (⟦2-char-id⟧ = !⟦2-char-id⟧);
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.trim(),
           ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧.replace(/;$/, ""));
         if (void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧ === ⟦2-char-id⟧ || ⟦2-char-id⟧ || ⟦2-char-id⟧) return ⟦2-char-id⟧;
-        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.slice(⟦2-char-id⟧ + 1).find((⟦2-char-id⟧ => "" !== ⟦2-char-id⟧.trim()))) && void 0 !== ⟦2-char-id⟧ ? qJ : ⟦2-char-id⟧;
-        return /^(?:[([`+-]|\/(?![/*]))/.test(⟦2-char-id⟧.trim()) ? JJ : ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧.length - ⟦2-char-id⟧.trimStart().length) + ⟦2-char-id⟧
+        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.slice(⟦2-char-id⟧ + 1).find((⟦2-char-id⟧ => "" !== ⟦2-char-id⟧.trim()))) && void 0 !== ⟦2-char-id⟧ ? YB : ⟦2-char-id⟧;
+        return /^(?:[([`+-]|\/(?![/*]))/.test(⟦2-char-id⟧.trim()) ? BB : ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧.length - ⟦2-char-id⟧.trimStart().length) + ⟦2-char-id⟧
       })).join("\n");
-      return ⟦2-char-id⟧.trim() === ⟦2-char-id⟧.trim() && ⟦2-char-id⟧.trim() !== ⟦2-char-id⟧.trim() ? cJ : ⟦2-char-id⟧
+      return ⟦2-char-id⟧.trim() === ⟦2-char-id⟧.trim() && ⟦2-char-id⟧.trim() !== ⟦2-char-id⟧.trim() ? TB : ⟦2-char-id⟧
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
-      return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.split("\n").find((⟦2-char-id⟧ => "" !== ⟦2-char-id⟧.trim()))) && void 0 !== ⟦2-char-id⟧ ? cJ : ""
+      return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.split("\n").find((⟦2-char-id⟧ => "" !== ⟦2-char-id⟧.trim()))) && void 0 !== ⟦2-char-id⟧ ? TB : ""
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 10 · Change · +2 / -2</summary>

```diff
@@ -243,13 +243,13 @@
       for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length - 1; ⟦2-char-id⟧++) {
         var ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.slice(⟦2-char-id⟧, ⟦2-char-id⟧ + 2);
-        ⟦2-char-id⟧.set(⟦2-char-id⟧, (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? FJ : 0) + 1)
+        ⟦2-char-id⟧.set(⟦2-char-id⟧, (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? VB : 0) + 1)
       }
       let ⟦2-char-id⟧ = 0;
       for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length - 1; ⟦2-char-id⟧++) {
         var ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.slice(⟦2-char-id⟧, ⟦2-char-id⟧ + 2),
-          ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? eJ : 0;
+          ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? pB : 0;
         ⟦2-char-id⟧ > 0 && (⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧ - 1), ⟦2-char-id⟧++)
       }
       return 2 * ⟦2-char-id⟧ / (⟦2-char-id⟧.length + ⟦2-char-id⟧.length - 2)
```

</details>

<details>
<summary>Hunk 11 · Change · +1 / -1</summary>

```diff
@@ -290,7 +290,7 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧;
-      for (const ⟦2-char-id⟧ of (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧().getLeadingCommentRanges(⟦2-char-id⟧, ⟦2-char-id⟧.getFullStart())) && void 0 !== ⟦2-char-id⟧ ? UJ : []).reverse()) {
+      for (const ⟦2-char-id⟧ of (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧().getLeadingCommentRanges(⟦2-char-id⟧, ⟦2-char-id⟧.getFullStart())) && void 0 !== ⟦2-char-id⟧ ? yB : []).reverse()) {
         var ⟦2-char-id⟧;
         if (/\n[^\S\n]*\n/.test(⟦2-char-id⟧.slice(⟦2-char-id⟧.end, ⟦2-char-id⟧))) break;
         ⟦2-char-id⟧ = ⟦2-char-id⟧.pos
```

</details>

<details>
<summary>Hunk 12 · Change · +1 / -1</summary>

```diff
@@ -303,7 +303,7 @@
       const {
         parseDiagnostics: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      return (null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? cJ : 0) > 0
+      return (null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? TB : 0) > 0
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 13 · Change · +1 / -1</summary>

```diff
@@ -312,7 +312,7 @@
         ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
           const ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
             var ⟦2-char-id⟧, ⟦2-char-id⟧;
-            if (⟦2-char-id⟧().isFunctionDeclaration(⟦2-char-id⟧)) return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.name) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.text) && void 0 !== ⟦2-char-id⟧ ? cJ : null;
+            if (⟦2-char-id⟧().isFunctionDeclaration(⟦2-char-id⟧)) return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.name) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.text) && void 0 !== ⟦2-char-id⟧ ? TB : null;
             if (⟦2-char-id⟧().isVariableStatement(⟦2-char-id⟧) && 1 === ⟦2-char-id⟧.declarationList.declarations.length) {
               const ⟦2-char-id⟧ = ⟦2-char-id⟧.declarationList.declarations[0];
               return ⟦2-char-id⟧().isIdentifier(⟦2-char-id⟧.name) && ⟦2-char-id⟧.initializer && ⟦2-char-id⟧(⟦2-char-id⟧.initializer) ? ⟦2-char-id⟧.name.text : null
```

</details>

<details>
<summary>Hunk 14 · Change · +3 / -3</summary>

```diff
@@ -357,12 +357,12 @@
       var ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.filter((⟦2-char-id⟧ => ⟦2-char-id⟧.name === ⟦2-char-id⟧)),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.filter((⟦2-char-id⟧ => !⟦2-char-id⟧.isProperty)),
-        ⟦2-char-id⟧ = ⟦2-char-id⟧.length > 0 ? UJ : ⟦2-char-id⟧;
-      return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.topLevel))) && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧[0]
+        ⟦2-char-id⟧ = ⟦2-char-id⟧.length > 0 ? yB : ⟦2-char-id⟧;
+      return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.topLevel))) && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧[0]
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return "" === ⟦2-char-id⟧.trim() ? `${cJ.trim()}\n` : `${JJ.replace(/\s*$/,"")}\n\n${cJ.trim()}\n`
+      return "" === ⟦2-char-id⟧.trim() ? `${TB.trim()}\n` : `${BB.replace(/\s*$/,"")}\n\n${TB.trim()}\n`
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 15 · Change · +2 / -2</summary>

```diff
@@ -372,10 +372,10 @@
           functions: ⟦2-char-id⟧
         } = ⟦2-char-id⟧,
         ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧),
-        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.topLevel && !⟦2-char-id⟧.isProperty))) && void 0 !== ⟦2-char-id⟧ ? FJ : ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.topLevel)),
+        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.topLevel && !⟦2-char-id⟧.isProperty))) && void 0 !== ⟦2-char-id⟧ ? VB : ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.topLevel)),
         ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧),
         ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.name) : void 0,
-        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = void 0 !== ⟦2-char-id⟧ && !⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧.topLevel && ⟦2-char-id⟧.name === ⟦2-char-id⟧)) ? YJ : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? UJ : ⟦2-char-id⟧;
+        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = void 0 !== ⟦2-char-id⟧ && !⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧.topLevel && ⟦2-char-id⟧.name === ⟦2-char-id⟧)) ? oB : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? yB : ⟦2-char-id⟧;
       return ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
     }
 
```

</details>

<details>
<summary>Hunk 16 · Change · +1 / -1</summary>

```diff
@@ -400,7 +400,7 @@
         ⟦2-char-id⟧ = !⟦2-char-id⟧.hasErrors && (1 === ⟦2-char-id⟧.length || ⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧.name === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.name)))),
         ⟦2-char-id⟧ = 1 === ⟦2-char-id⟧.length && ⟦2-char-id⟧[0].name !== (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.name) ? ⟦2-char-id⟧[0].name : void 0,
         ⟦2-char-id⟧ = void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.functions.find((⟦2-char-id⟧ => ⟦2-char-id⟧.topLevel && ⟦2-char-id⟧.name === ⟦2-char-id⟧));
-      return ⟦2-char-id⟧ && ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? DJ : ⟦2-char-id⟧, ⟦2-char-id⟧.functions, ⟦2-char-id⟧) : function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧ && ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? LB : ⟦2-char-id⟧, ⟦2-char-id⟧.functions, ⟦2-char-id⟧) : function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧().createSourceFile("worldCode.js", ⟦2-char-id⟧, ⟦2-char-id⟧().ScriptTarget.Latest, !0, ⟦2-char-id⟧().ScriptKind.JS),
           ⟦2-char-id⟧ = ⟦2-char-id⟧.statements.find((⟦2-char-id⟧ => {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.getStart(⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 17 · Change · +3 / -3</summary>

```diff
@@ -417,14 +417,14 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧;
       for (; ⟦2-char-id⟧ > 0 && (" " === ⟦2-char-id⟧[⟦2-char-id⟧ - 1] || "\t" === ⟦2-char-id⟧[⟦2-char-id⟧ - 1]);) ⟦2-char-id⟧--;
-      return 0 === ⟦2-char-id⟧ || "\n" === ⟦2-char-id⟧[⟦2-char-id⟧ - 1] ? ZJ : ⟦2-char-id⟧
+      return 0 === ⟦2-char-id⟧ || "\n" === ⟦2-char-id⟧[⟦2-char-id⟧ - 1] ? dB : ⟦2-char-id⟧
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.trim().toLowerCase();
-      if ("" !== ⟦2-char-id⟧.trim() && ("top" === ⟦2-char-id⟧ || "start" === ⟦2-char-id⟧)) return `${ZJ.trim()}\n\n${JJ.replace(/^\s+/,"")}`;
+      if ("" !== ⟦2-char-id⟧.trim() && ("top" === ⟦2-char-id⟧ || "start" === ⟦2-char-id⟧)) return `${dB.trim()}\n\n${BB.replace(/^\s+/,"")}`;
       const ⟦2-char-id⟧ = "end" === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧));
-      return ⟦2-char-id⟧ ? `${JJ.slice(0,UJ.to)}\n\n${ZJ.trim()}${JJ.slice(UJ.to)}` : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
+      return ⟦2-char-id⟧ ? `${BB.slice(0,yB.to)}\n\n${dB.trim()}${BB.slice(yB.to)}` : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 18 · Change · +1 / -1</summary>

```diff
@@ -438,7 +438,7 @@
       if ("" === ⟦2-char-id⟧ || ⟦2-char-id⟧.test(⟦2-char-id⟧)) return null;
       if (⟦2-char-id⟧.length > ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧);
-        ⟦2-char-id⟧ = `${JJ.slice(0,Math.max(JJ.lastIndexOf(" "),60)).trimEnd()}\u2026`
+        ⟦2-char-id⟧ = `${BB.slice(0,Math.max(BB.lastIndexOf(" "),60)).trimEnd()}\u2026`
       }
       return ⟦2-char-id⟧.charAt(0).toUpperCase() + ⟦2-char-id⟧.slice(1)
     }
```

</details>

<details>
<summary>Hunk 19 · Change · +2 / -2</summary>

```diff
@@ -477,9 +477,9 @@
         of ⟦2-char-id⟧) {
         for (const ⟦2-char-id⟧ of ⟦2-char-id⟧(⟦2-char-id⟧)) ⟦2-char-id⟧.has(⟦2-char-id⟧) ? ⟦2-char-id⟧.add(⟦2-char-id⟧) : ⟦2-char-id⟧.add(⟦2-char-id⟧);
         const ⟦2-char-id⟧ = [...⟦2-char-id⟧, ...⟦2-char-id⟧.filter((⟦2-char-id⟧ => "playerCommand" !== ⟦2-char-id⟧.name && ⟦2-char-id⟧.has(⟦2-char-id⟧.name))).map((⟦2-char-id⟧ => ⟦2-char-id⟧.slice(⟦2-char-id⟧.from, ⟦2-char-id⟧.to)))],
-          ⟦2-char-id⟧ = ⟦2-char-id⟧.length > 0 || !/\bplayerCommand\b/.test(⟦2-char-id⟧) ? JJ : [⟦2-char-id⟧];
+          ⟦2-char-id⟧ = ⟦2-char-id⟧.length > 0 || !/\bplayerCommand\b/.test(⟦2-char-id⟧) ? BB : [⟦2-char-id⟧];
         for (const ⟦2-char-id⟧ of ⟦2-char-id⟧)
-          for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.matchAll(⟦2-char-id⟧)) ⟦2-char-id⟧.add(`/${JJ[1].split(/\s/)[0]}`)
+          for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.matchAll(⟦2-char-id⟧)) ⟦2-char-id⟧.add(`/${BB[1].split(/\s/)[0]}`)
       }
       const ⟦2-char-id⟧ = ⟦2-char-id⟧ => [...⟦2-char-id⟧].slice(0, 12);
       return {
```

</details>

<details>
<summary>Hunk 20 · Change · +1 / -1</summary>

```diff
@@ -493,7 +493,7 @@
       onPlayerLeave: "When a player leaves",
       onPlayerChat: "When a player chats",
       playerCommand: "When a player types a /command",
-      Hh: "Runs all the time",
+      dL: "Runs all the time",
       onPlayerJump: "When a player jumps",
       onPlayerClick: "When a player clicks",
       onPlayerAttack: "When a player attacks",
```

</details>

<details>
<summary>Hunk 21 · Change · +1 / -1</summary>

```diff
@@ -522,7 +522,7 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
       if (⟦2-char-id⟧) return ⟦2-char-id⟧;
-      return `When: ${JJ.replace(/^on/,"").replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase()}`
+      return `When: ${BB.replace(/^on/,"").replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase()}`
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 22 · Change · +6 / -6</summary>

```diff
@@ -534,16 +534,16 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.trim().split(/\s+/).length,
-        ⟦2-char-id⟧ = new Set((null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.match(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? cJ : []).map((⟦2-char-id⟧ => ⟦2-char-id⟧.toLowerCase().replace(/s$/, "")))).size,
-        ⟦2-char-id⟧ = (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.match(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? ZJ : []).length;
+        ⟦2-char-id⟧ = new Set((null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.match(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? TB : []).map((⟦2-char-id⟧ => ⟦2-char-id⟧.toLowerCase().replace(/s$/, "")))).size,
+        ⟦2-char-id⟧ = (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.match(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? dB : []).length;
       return ⟦2-char-id⟧ >= 2 && ⟦2-char-id⟧ >= 2 || ⟦2-char-id⟧ >= 30 && ⟦2-char-id⟧ >= 3
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧.split(/\n|\|/).map((⟦2-char-id⟧ => ⟦2-char-id⟧.replace(/^\s*(?:[-*\u2022]|\d+[.)]|step\s*\d+[:.)]?)\s*/i, "").replace(/\s+/g, " ").trim())).filter((⟦2-char-id⟧ => "" !== ⟦2-char-id⟧)).slice(0, 5).map((⟦2-char-id⟧ => ⟦2-char-id⟧.length > 90 ? `${JJ.slice(0,89).trimEnd()}\u2026` : ⟦2-char-id⟧));
-      return ⟦2-char-id⟧.length >= 2 ? cJ : []
-    }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(4275);
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧.split(/\n|\|/).map((⟦2-char-id⟧ => ⟦2-char-id⟧.replace(/^\s*(?:[-*\u2022]|\d+[.)]|step\s*\d+[:.)]?)\s*/i, "").replace(/\s+/g, " ").trim())).filter((⟦2-char-id⟧ => "" !== ⟦2-char-id⟧)).slice(0, 5).map((⟦2-char-id⟧ => ⟦2-char-id⟧.length > 90 ? `${BB.slice(0,89).trimEnd()}\u2026` : ⟦2-char-id⟧));
+      return ⟦2-char-id⟧.length >= 2 ? TB : []
+    }
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(4265);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       return ⟦2-char-id⟧.replace(/^on/, "").replace(/^player/i, "").toLowerCase()
```

</details>

<details>
<summary>Hunk 23 · Change · +1 / -1</summary>

```diff
@@ -563,7 +563,7 @@
       for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
         var ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
-        ⟦2-char-id⟧.set(⟦2-char-id⟧, [...null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? eJ : [], ⟦2-char-id⟧])
+        ⟦2-char-id⟧.set(⟦2-char-id⟧, [...null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? pB : [], ⟦2-char-id⟧])
       }
       const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧),
         ⟦2-char-id⟧ = new Set(⟦2-char-id⟧(⟦2-char-id⟧)),
```

</details>

<details>
<summary>Hunk 24 · Change · +2 / -2</summary>

```diff
@@ -572,8 +572,8 @@
       for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
         var ⟦2-char-id⟧;
         if (⟦2-char-id⟧.has(⟦2-char-id⟧) || ⟦2-char-id⟧.has(⟦2-char-id⟧) || !/^(on|player)[A-Z]/.test(⟦2-char-id⟧)) continue;
-        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧(⟦2-char-id⟧))) && void 0 !== ⟦2-char-id⟧ ? YJ : [];
-        1 !== ⟦2-char-id⟧.length || ⟦2-char-id⟧.includes(⟦2-char-id⟧[0]) || (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.q)(⟦2-char-id⟧, new RegExp(`${hJ}(?![\\w$])`, "g"), ⟦2-char-id⟧.m, (() => ⟦2-char-id⟧[0])), ⟦2-char-id⟧.push({
+        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧(⟦2-char-id⟧))) && void 0 !== ⟦2-char-id⟧ ? oB : [];
+        1 !== ⟦2-char-id⟧.length || ⟦2-char-id⟧.includes(⟦2-char-id⟧[0]) || (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.x)(⟦2-char-id⟧, new RegExp(`${kB}(?![\\w$])`, "g"), ⟦2-char-id⟧.l, (() => ⟦2-char-id⟧[0])), ⟦2-char-id⟧.push({
           from: ⟦2-char-id⟧,
           to: ⟦2-char-id⟧[0]
         }))
```

</details>

<details>
<summary>Hunk 25 · Change · +1 / -1</summary>

```diff
@@ -588,7 +588,7 @@
         callbacks: "callback",
         "client options": "clientOption"
       },
-      ⟦2-char-id⟧ = Object.keys(⟦2-char-id⟧).map((⟦2-char-id⟧ => `"${JJ}"`)).join(", ").replace(/, ([^,]*)$/, " or $1"),
+      ⟦2-char-id⟧ = Object.keys(⟦2-char-id⟧).map((⟦2-char-id⟧ => `"${BB}"`)).join(", ").replace(/, ([^,]*)$/, " or $1"),
       ⟦2-char-id⟧ = {
         type: "string",
         description: "A few plain words for the creator on what this change does, under 80 characters"
```

</details>

<details>
<summary>Hunk 26 · Change · +2 / -2</summary>

```diff
@@ -956,13 +956,13 @@
       }, {
         name: "fetch_url",
         title: "Read a docs page",
-        description: `Reads a page of Bloxd's docs as Markdown. ${GJ.f} lists every page with its link; then read the page, or the part of a long page, you need`,
+        description: `Reads a page of Bloxd's docs as Markdown. ${uB.k} lists every page with its link; then read the page, or the part of a long page, you need`,
         inputSchema: {
           type: "object",
           properties: {
             url: {
               type: "string",
-              description: `${GJ.f}, or a page it links to`
+              description: `${uB.k}, or a page it links to`
             }
           },
           required: ["url"]
```

</details>

<details>
<summary>Hunk 27 · Change · +1 / -1</summary>

```diff
@@ -980,7 +980,7 @@
           properties: {
             list: {
               type: "string",
-              description: `${Gc}, to list every one of them`
+              description: `${uT}, to list every one of them`
             },
             name: {
               type: "string",
```

</details>

<details>
<summary>Hunk 28 · Change · +3 / -3</summary>

```diff
@@ -1069,12 +1069,12 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.name === ⟦2-char-id⟧));
-      if (!⟦2-char-id⟧) throw new Error(`No AI Helper tool ${JJ}`);
+      if (!⟦2-char-id⟧) throw new Error(`No AI Helper tool ${BB}`);
       return ⟦2-char-id⟧
     }
     const ⟦2-char-id⟧ = ⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧.name)).filter((⟦2-char-id⟧ => "plan" !== ⟦2-char-id⟧ && "remember" !== ⟦2-char-id⟧)).join("|"),
-      ⟦2-char-id⟧ = new RegExp(String.raw`^(?:\s*(?:We(?:'ll|'d| will| need to| should| must| can(?!'t))|Will use|Need to|Simpler:)(?:[^\n.]*\.(?=[A-Z])|[^\n]*(?:\n+|$))|\s*(?:Now,? )?(?:I'll |I will |[Ll]et's |[Ll]et me )?(?:[Ww]rite|[Mm]ake|[Ss]end|[Oo]utput|[Pp]roduce|[Uu]se|[Dd]o|[Cc]all) (?:the |an? |one )?(?:${Qc})\b[^\n.]*\.?[ \t]*\n*)+`),
-      ⟦2-char-id⟧ = [new RegExp(String.raw`(?:^|[^\w"</=.])(?:${Qc})\b(?!\s*\()`), /\btool calls?\b|^(?:so,? )?(?:(?:we(?:'ll| will)?|I'll|let's) (?:produce|output|generate)|now (?:produce|output))\b|^The user (?:wants?|wanted|asks?|asked|requests?|requested|says|said)\b/i, /^We (?:need|have) to\b/, /^(?:Now|Then),? (?:replace|apply) \S+\.?$|^First edit\b|^Provide (?:the )?(?:entire|full)\b/, /^Let's (?:update|write|implement|produce|output|apply|edit) (?:the )?(?:code|edits?|changes?|calls?|function)\b/, /^(?:Implement|Proceed)\.?$/],
+      ⟦2-char-id⟧ = new RegExp(String.raw`^(?:\s*(?:We(?:'ll|'d| will| need to| should| must| can(?!'t))|Will use|Need to|Simpler:)(?:[^\n.]*\.(?=[A-Z])|[^\n]*(?:\n+|$))|\s*(?:Now,? )?(?:I'll |I will |[Ll]et's |[Ll]et me )?(?:[Ww]rite|[Mm]ake|[Ss]end|[Oo]utput|[Pp]roduce|[Uu]se|[Dd]o|[Cc]all) (?:the |an? |one )?(?:${NT})\b[^\n.]*\.?[ \t]*\n*)+`),
+      ⟦2-char-id⟧ = [new RegExp(String.raw`(?:^|[^\w"</=.])(?:${NT})\b(?!\s*\()`), /\btool calls?\b|^(?:so,? )?(?:(?:we(?:'ll| will)?|I'll|let's) (?:produce|output|generate)|now (?:produce|output))\b|^The user (?:wants?|wanted|asks?|asked|requests?|requested|says|said)\b/i, /^We (?:need|have) to\b/, /^(?:Now|Then),? (?:replace|apply) \S+\.?$|^First edit\b|^Provide (?:the )?(?:entire|full)\b/, /^Let's (?:update|write|implement|produce|output|apply|edit) (?:the )?(?:code|edits?|changes?|calls?|function)\b/, /^(?:Implement|Proceed)\.?$/],
       ⟦2-char-id⟧ = /[.!?](?=[ \t]|[A-Z]|$)|\n|$/g;
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 29 · Change · +4 / -4</summary>

```diff
@@ -1086,16 +1086,16 @@
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.replace(⟦2-char-id⟧, "");
       return ⟦2-char-id⟧ ? function(⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.indexOf("```"),
-          ⟦2-char-id⟧ = -1 === ⟦2-char-id⟧ ? JJ : ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧);
+          ⟦2-char-id⟧ = -1 === ⟦2-char-id⟧ ? BB : ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧);
         let ⟦2-char-id⟧ = -1,
           ⟦2-char-id⟧ = -1,
           ⟦2-char-id⟧ = 0;
         for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.matchAll(⟦2-char-id⟧)) {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.index + ⟦2-char-id⟧[0].length;
-          ⟦2-char-id⟧(⟦2-char-id⟧.slice(⟦2-char-id⟧, ⟦2-char-id⟧)) && (⟦2-char-id⟧ = -1 === ⟦2-char-id⟧ ? eJ : ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧
+          ⟦2-char-id⟧(⟦2-char-id⟧.slice(⟦2-char-id⟧, ⟦2-char-id⟧)) && (⟦2-char-id⟧ = -1 === ⟦2-char-id⟧ ? pB : ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧
         }
-        return -1 === ⟦2-char-id⟧ ? JJ : "" !== ⟦2-char-id⟧.slice(⟦2-char-id⟧).trim() ? ⟦2-char-id⟧.slice(⟦2-char-id⟧).trimStart() : `${JJ.slice(0,FJ).trimEnd()}\n${JJ.slice(ZJ.length)}`.trim()
-      }(⟦2-char-id⟧) : "" !== ⟦2-char-id⟧.trim() ? ZJ : ⟦2-char-id⟧
+        return -1 === ⟦2-char-id⟧ ? BB : "" !== ⟦2-char-id⟧.slice(⟦2-char-id⟧).trim() ? ⟦2-char-id⟧.slice(⟦2-char-id⟧).trimStart() : `${BB.slice(0,VB).trimEnd()}\n${BB.slice(dB.length)}`.trim()
+      }(⟦2-char-id⟧) : "" !== ⟦2-char-id⟧.trim() ? dB : ⟦2-char-id⟧
     }
     const ⟦2-char-id⟧ = /^(?=[\s\S]{200})[^\n]*(?:\\n[^\n]*){3}$/,
       ⟦2-char-id⟧ = new Set(["content", "code"]);
```

</details>

<details>
<summary>Hunk 30 · Change · +1 / -1</summary>

```diff
@@ -1104,7 +1104,7 @@
       const ⟦2-char-id⟧ = "string" === typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧.split(/[./:]/).pop() : void 0;
       return function(⟦2-char-id⟧) {
         return ⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧.name === ⟦2-char-id⟧))
-      }(⟦2-char-id⟧) ? cJ : null
+      }(⟦2-char-id⟧) ? TB : null
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 31 · Change · +1 / -1</summary>

```diff
@@ -1118,7 +1118,7 @@
           const ⟦2-char-id⟧ = {};
           for (const ⟦2-char-id⟧ of ⟦2-char-id⟧[2].matchAll(⟦2-char-id⟧)) {
             var ⟦2-char-id⟧, ⟦2-char-id⟧;
-            ⟦2-char-id⟧[null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[1]) && void 0 !== ⟦2-char-id⟧ ? XJ : ⟦2-char-id⟧[2]] = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[3]) && void 0 !== ⟦2-char-id⟧ ? AJ : ⟦2-char-id⟧[4]
+            ⟦2-char-id⟧[null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[1]) && void 0 !== ⟦2-char-id⟧ ? lB : ⟦2-char-id⟧[2]] = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[3]) && void 0 !== ⟦2-char-id⟧ ? JB : ⟦2-char-id⟧[4]
           }(null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.call.name) === ⟦2-char-id⟧ && "" === ⟦2-char-id⟧.slice(⟦2-char-id⟧.index + ⟦2-char-id⟧.call.source.length, ⟦2-char-id⟧.index).trim() ? ⟦2-char-id⟧[⟦2-char-id⟧.length - 1] = {
             call: {
               name: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 32 · Change · +1 / -1</summary>

```diff
@@ -1144,7 +1144,7 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      let ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? JJ : {};
+      let ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? BB : {};
       if ("string" === typeof ⟦2-char-id⟧) try {
         ⟦2-char-id⟧ = JSON.parse("" === ⟦2-char-id⟧ ? "{}" : ⟦2-char-id⟧)
       } catch {
```

</details>

<details>
<summary>Hunk 33 · Change · +1 / -1</summary>

```diff
@@ -1152,7 +1152,7 @@
       }
       if ("object" !== typeof ⟦2-char-id⟧ || null === ⟦2-char-id⟧) return null;
       const ⟦2-char-id⟧ = {};
-      for (const [⟦2-char-id⟧, ⟦2-char-id⟧] of Object.entries(⟦2-char-id⟧)) "string" === typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧.has(⟦2-char-id⟧) && ⟦2-char-id⟧.test(⟦2-char-id⟧) && !⟦2-char-id⟧.includes("\n") ? ⟦2-char-id⟧(⟦2-char-id⟧) : UJ : "boolean" === typeof ⟦2-char-id⟧ || "number" === typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧[⟦2-char-id⟧] = String(⟦2-char-id⟧) : "object" !== typeof ⟦2-char-id⟧ || null === ⟦2-char-id⟧ || Array.isArray(⟦2-char-id⟧) ? Array.isArray(⟦2-char-id⟧) && ⟦2-char-id⟧.every((⟦2-char-id⟧ => "string" === typeof ⟦2-char-id⟧)) && (⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧.join("\n")) : ⟦2-char-id⟧[⟦2-char-id⟧] = JSON.stringify(⟦2-char-id⟧);
+      for (const [⟦2-char-id⟧, ⟦2-char-id⟧] of Object.entries(⟦2-char-id⟧)) "string" === typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧.has(⟦2-char-id⟧) && ⟦2-char-id⟧.test(⟦2-char-id⟧) && !⟦2-char-id⟧.includes("\n") ? ⟦2-char-id⟧(⟦2-char-id⟧) : yB : "boolean" === typeof ⟦2-char-id⟧ || "number" === typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧[⟦2-char-id⟧] = String(⟦2-char-id⟧) : "object" !== typeof ⟦2-char-id⟧ || null === ⟦2-char-id⟧ || Array.isArray(⟦2-char-id⟧) ? Array.isArray(⟦2-char-id⟧) && ⟦2-char-id⟧.every((⟦2-char-id⟧ => "string" === typeof ⟦2-char-id⟧)) && (⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧.join("\n")) : ⟦2-char-id⟧[⟦2-char-id⟧] = JSON.stringify(⟦2-char-id⟧);
       return ⟦2-char-id⟧
     }
 
```

</details>

<details>
<summary>Hunk 34 · Change · +5 / -5</summary>

```diff
@@ -1178,20 +1178,20 @@
         of ⟦2-char-id⟧) ⟦2-char-id⟧ = ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧) + " ".repeat(⟦2-char-id⟧.source.length) + ⟦2-char-id⟧.slice(⟦2-char-id⟧ + ⟦2-char-id⟧.source.length);
       return ⟦2-char-id⟧
     }
-    const ⟦2-char-id⟧ = new RegExp(`\\b(${rc.map((JJ=>JJ.name)).join("|")})\\s*\\(\\s*(?=\\{)`, "g");
+    const ⟦2-char-id⟧ = new RegExp(`\\b(${vT.map((BB=>BB.name)).join("|")})\\s*\\(\\s*(?=\\{)`, "g");
     const ⟦2-char-id⟧ = {
         formatCall: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
           const ⟦2-char-id⟧ = Object.fromEntries(Object.entries(⟦2-char-id⟧).filter((⟦2-char-id⟧ => {
             let [, ⟦2-char-id⟧] = ⟦2-char-id⟧;
             return void 0 !== ⟦2-char-id⟧
           })));
-          return `${JJ}(${JSON.stringify(ZJ)})`
+          return `${BB}(${JSON.stringify(dB)})`
         },
         declareTools: ⟦2-char-id⟧ => ⟦2-char-id⟧,
         callStyle: "Make each call with function calling, its code in full: never write a call, or the code it carries, in your answer's words or in a code fence.",
-        fileResult: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => `<file path="${JJ}"${ZJ?' open_in_editor="true"':""}>\n${cJ}\n</file>`,
-        editFailure: (⟦2-char-id⟧, ⟦2-char-id⟧) => `${JJ} failed: ${cJ}`,
-        lookupResult: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => `${JJ} ${cJ}:\n${ZJ}`
+        fileResult: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => `<file path="${BB}"${dB?' open_in_editor="true"':""}>\n${TB}\n</file>`,
+        editFailure: (⟦2-char-id⟧, ⟦2-char-id⟧) => `${BB} failed: ${TB}`,
+        lookupResult: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => `${BB} ${TB}:\n${dB}`
       },
       ⟦2-char-id⟧ = /(?:<\|start\|>\s*assistant\s*)?<\|channel\|>[^<{]*?\bto=([\w./:-]+)[^{]*?(?=\{)/g;
 
```

</details>

<details>
<summary>Hunk 35 · Change · +1 / -1</summary>

```diff
@@ -1204,7 +1204,7 @@
           ⟦2-char-id⟧ = null === ⟦2-char-id⟧ ? null : ⟦2-char-id⟧(⟦2-char-id⟧.slice(⟦2-char-id⟧, ⟦2-char-id⟧));
         if (null !== ⟦2-char-id⟧ && null !== ⟦2-char-id⟧ && null !== ⟦2-char-id⟧) {
           var ⟦2-char-id⟧, ⟦2-char-id⟧;
-          const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.slice(⟦2-char-id⟧).match(/^\s*<\|call\|>/)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[0]) && void 0 !== ⟦2-char-id⟧ ? ZJ : "";
+          const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.slice(⟦2-char-id⟧).match(/^\s*<\|call\|>/)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[0]) && void 0 !== ⟦2-char-id⟧ ? dB : "";
           ⟦2-char-id⟧.push({
             call: {
               name: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 36 · Change · +2 / -2</summary>

```diff
@@ -1226,13 +1226,13 @@
       if (Array.isArray(⟦2-char-id⟧.tool_calls)) return ⟦2-char-id⟧.tool_calls.flatMap((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, !0)));
       if (void 0 !== ⟦2-char-id⟧.tool_call) return ⟦2-char-id⟧(⟦2-char-id⟧.tool_call, !0);
       if (void 0 !== ⟦2-char-id⟧.function) return ⟦2-char-id⟧(⟦2-char-id⟧.function, !0);
-      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.arguments) && void 0 !== ⟦2-char-id⟧ ? UJ : ⟦2-char-id⟧.params) && void 0 !== ⟦2-char-id⟧ ? FJ : ⟦2-char-id⟧.param) && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧.args) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧.input,
+      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.arguments) && void 0 !== ⟦2-char-id⟧ ? yB : ⟦2-char-id⟧.params) && void 0 !== ⟦2-char-id⟧ ? VB : ⟦2-char-id⟧.param) && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧.args) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧.input,
         ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.tool);
       if (null !== ⟦2-char-id⟧) {
         const {
           tool: ⟦2-char-id⟧,
           ...⟦2-char-id⟧
-        } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? AJ : ⟦2-char-id⟧);
+        } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? JB : ⟦2-char-id⟧);
         return null === ⟦2-char-id⟧ ? [] : [{
           name: ⟦2-char-id⟧,
           args: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 37 · Change · +12 / -12</summary>

```diff
@@ -1271,29 +1271,29 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      if (Array.isArray(⟦2-char-id⟧)) return `[${JJ.map(Tc).join(", ")}]`;
+      if (Array.isArray(⟦2-char-id⟧)) return `[${BB.map(WT).join(", ")}]`;
       if ("object" === typeof ⟦2-char-id⟧ && null !== ⟦2-char-id⟧) {
-        return `{${Object.entries(JJ).map((JJ=>{let[cJ,ZJ]=JJ;return`${JSON.stringify(⟦2-char-id⟧)}: ${⟦2-char-id⟧(⟦2-char-id⟧)}`})).join(", ")}}`
+        return `{${Object.entries(BB).map((BB=>{let[TB,dB]=BB;return`${JSON.stringify(⟦2-char-id⟧)}: ${⟦2-char-id⟧(⟦2-char-id⟧)}`})).join(", ")}}`
       }
       return JSON.stringify(⟦2-char-id⟧)
     }
     const ⟦2-char-id⟧ = {
-        formatCall: (⟦2-char-id⟧, ⟦2-char-id⟧) => `<tool_call>\n<function=${JJ}>\n${Object.entries(cJ).flatMap((JJ=>{let[cJ,ZJ]=JJ;return void 0===ZJ?[]:[`<parameter=${⟦2-char-id⟧}>\⟦2-char-id⟧{⟦2-char-id⟧}\n</parameter>\n`]})).join("")}</function>\n</tool_call>`,
-        declareTools: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ || 0 === ⟦2-char-id⟧.length ? JJ : `${function(JJ){return`# Tools\n\nYou have access ⟦2-char-id⟧ the following functions:\n\n<tools>${⟦2-char-id⟧.map((⟦2-char-id⟧=>`\n${Tc({type:"function",function:{name:JJ.name,description:JJ.description,parameters:JJ.inputSchema}})}`)).join("")}\n</tools>\n\nIf you choose to call a function ONLY reply in the following format with NO suffix:\n\n<tool_call>\n<function=example_function_name>\n<parameter=example_parameter_1>\nvalue_1\n</parameter>\n<parameter=example_parameter_2>\nThis ⟦2-char-id⟧ the value for the second parameter\nthat can span\nmultiple lines\n</parameter>\n</function>\n</tool_call>\n\n<IMPORTANT>\nReminder:\n- Function calls MUST follow the specified format: an inner <function=...></function> block must ⟦2-char-id⟧ nested within <tool_call></tool_call> XML tags\n- Required parameters MUST be specified\n- You may provide optional reasoning for your function call in natural language BEFORE the function call, but NOT after\n- If there is no function call available, answer the question like normal with your current knowledge and do not tell the user about function calls\n</IMPORTANT>`}(cJ)}\n\n${JJ}`,
+        formatCall: (⟦2-char-id⟧, ⟦2-char-id⟧) => `<tool_call>\n<function=${BB}>\n${Object.entries(TB).flatMap((BB=>{let[TB,dB]=BB;return void 0===dB?[]:[`<parameter=${⟦2-char-id⟧}>\⟦2-char-id⟧{⟦2-char-id⟧}\n</parameter>\n`]})).join("")}</function>\n</tool_call>`,
+        declareTools: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ || 0 === ⟦2-char-id⟧.length ? BB : `${function(BB){return`# Tools\n\nYou have access ⟦2-char-id⟧ the following functions:\n\n<tools>${⟦2-char-id⟧.map((⟦2-char-id⟧=>`\n${WT({type:"function",function:{name:BB.name,description:BB.description,parameters:BB.inputSchema}})}`)).join("")}\n</tools>\n\nIf you choose to call a function ONLY reply in the following format with NO suffix:\n\n<tool_call>\n<function=example_function_name>\n<parameter=example_parameter_1>\nvalue_1\n</parameter>\n<parameter=example_parameter_2>\nThis ⟦2-char-id⟧ the value for the second parameter\nthat can span\nmultiple lines\n</parameter>\n</function>\n</tool_call>\n\n<IMPORTANT>\nReminder:\n- Function calls MUST follow the specified format: an inner <function=...></function> block must ⟦2-char-id⟧ nested within <tool_call></tool_call> XML tags\n- Required parameters MUST be specified\n- You may provide optional reasoning for your function call in natural language BEFORE the function call, but NOT after\n- If there is no function call available, answer the question like normal with your current knowledge and do not tell the user about function calls\n</IMPORTANT>`}(TB)}\n\n${BB}`,
         callStyle: "Write each call in your answer as a <tool_call> holding a <function=name> block with a <parameter=name> for each argument, the code inside as it is, not escaped and in full: never as JSON or inside a code fence.",
-        fileResult: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => `<tool_response>\nview_file ${JJ}${ZJ?" (open in the editor)":""}:\n${cJ}\n</tool_response>`,
-        editFailure: (⟦2-char-id⟧, ⟦2-char-id⟧) => `<tool_response>\nError: ${cJ}\n</tool_response>`,
-        lookupResult: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => `<tool_response>\n${JJ} ${cJ}:\n${ZJ}\n</tool_response>`
+        fileResult: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => `<tool_response>\nview_file ${BB}${dB?" (open in the editor)":""}:\n${TB}\n</tool_response>`,
+        editFailure: (⟦2-char-id⟧, ⟦2-char-id⟧) => `<tool_response>\nError: ${TB}\n</tool_response>`,
+        lookupResult: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => `<tool_response>\n${BB} ${TB}:\n${dB}\n</tool_response>`
       },
       ⟦2-char-id⟧ = ⟦2-char-id⟧(/(?:<tool_call>\s*)?<function=([\w.:/-]+)>((?:(?!<tool_call\b|<function=)[\s\S])*?(?:<\/parameter>(?=\s*(?:<tool_call\b|<function=|$))|(?=<\/function>|<\/tool_call>)))(?:<\/function>(?:\s*<\/tool_call>)?|<\/tool_call>|\s*(?=<tool_call\b|<function=|$))/g, /<parameter(?:=([\w-]+)|\s+name\s*=\s*"([^"]+)")\s*>\n?([\s\S]*?)(?:\n?<\/parameter>|(?=<parameter[=\s])|\n?$)/g),
       ⟦2-char-id⟧ = new Set(["path", "why", "name", "after", "question", "allow_other", "note"]),
       ⟦2-char-id⟧ = {
-        formatCall: (⟦2-char-id⟧, ⟦2-char-id⟧) => `<tool_call name="${JJ}">\n${Object.entries(cJ).flatMap((JJ=>{let[cJ,ZJ]=JJ;return void 0===ZJ?[]:[`<param name="${cJ}">${⟦2-char-id⟧.has(⟦2-char-id⟧)?ZJ:`\n${ZJ}\n`}</param>\n`]})).join("")}</tool_call>`,
-        declareTools: JJ => JJ,
+        formatCall: (⟦2-char-id⟧, ⟦2-char-id⟧) => `<tool_call name="${BB}">\n${Object.entries(TB).flatMap((BB=>{let[TB,dB]=BB;return void 0===dB?[]:[`<param name="${TB}">${⟦2-char-id⟧.has(⟦2-char-id⟧)?dB:`\n${dB}\n`}</param>\n`]})).join("")}</tool_call>`,
+        declareTools: BB => BB,
         callStyle: "Write each call in your answer as a <tool_call> with a <param> for each argument, the code inside as it is, not escaped and in full: never as JSON, a function call or inside a code fence.",
-        fileResult: (JJ, cJ, ZJ) => `<tool_result name="view_file" path="${JJ}"${⟦2-char-id⟧?' open_in_editor="true"':""}>\⟦2-char-id⟧{⟦2-char-id⟧}\n</tool_result>`,
-        editFailure: (⟦2-char-id⟧, ⟦2-char-id⟧) => `<tool_result name="${JJ}" is_error="true">\n${cJ}\n</tool_result>`,
-        lookupResult: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => `<tool_result name="${JJ}" about="${cJ.replace(/"/g,"'")}">\n${ZJ}\n</tool_result>`
+        fileResult: (BB, TB, dB) => `<tool_result name="view_file" path="${BB}"${⟦2-char-id⟧?' open_in_editor="true"':""}>\⟦2-char-id⟧{⟦2-char-id⟧}\n</tool_result>`,
+        editFailure: (⟦2-char-id⟧, ⟦2-char-id⟧) => `<tool_result name="${BB}" is_error="true">\n${TB}\n</tool_result>`,
+        lookupResult: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => `<tool_result name="${BB}" about="${TB.replace(/"/g,"'")}">\n${dB}\n</tool_result>`
       },
       ⟦2-char-id⟧ = ⟦2-char-id⟧(/<tool_call\s+name\s*=\s*"([^"]+)"\s*>((?:(?!<tool_call\b)[\s\S])*?(?:<\/param(?:eter)?>(?=\s*(?:<tool_call\b|$))|(?=<\/(?:tool_call|invoke|function)>)))(?:<\/(?:tool_call|invoke|function)>|\s*(?=<tool_call\b|$))/g, /<(?:param(?:eter)?\s+name\s*=\s*"([^"]+)"|(?:param(?:eter)?(?:=|\s+)|(?=(?:search|replace)>))([\w-]+))\s*>\n?(?:([\s\S]*?)\n?<\/(?:param(?:eter)?|\1\2)>|((?=\s*\S)(?![\s\S]*<\/[\w-]+[^>]*>)[\s\S]*?)\s*$)/g),
       ⟦2-char-id⟧ = {
```

</details>

<details>
<summary>Hunk 38 · Change · +2 / -2</summary>

```diff
@@ -1311,11 +1311,11 @@
             const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧[1]),
               ⟦2-char-id⟧ = ⟦2-char-id⟧.index + ⟦2-char-id⟧[0].length,
               ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
-            if (null === ⟦2-char-id⟧ || null === ⟦2-char-id⟧ || (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.at(-1)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.index) && void 0 !== ⟦2-char-id⟧ ? ZJ : -1) + (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.at(-1)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.call.source.length) && void 0 !== ⟦2-char-id⟧ ? UJ : 0) > ⟦2-char-id⟧.index) continue;
+            if (null === ⟦2-char-id⟧ || null === ⟦2-char-id⟧ || (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.at(-1)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.index) && void 0 !== ⟦2-char-id⟧ ? dB : -1) + (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.at(-1)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.call.source.length) && void 0 !== ⟦2-char-id⟧ ? yB : 0) > ⟦2-char-id⟧.index) continue;
             const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.slice(⟦2-char-id⟧, ⟦2-char-id⟧));
             if (null === ⟦2-char-id⟧) continue;
             const ⟦2-char-id⟧ = /^\s*\)/.exec(⟦2-char-id⟧.slice(⟦2-char-id⟧)),
-              ⟦2-char-id⟧ = ⟦2-char-id⟧.slice(⟦2-char-id⟧.index, ⟦2-char-id⟧ + (null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[0].length) && void 0 !== ⟦2-char-id⟧ ? XJ : 0));
+              ⟦2-char-id⟧ = ⟦2-char-id⟧.slice(⟦2-char-id⟧.index, ⟦2-char-id⟧ + (null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[0].length) && void 0 !== ⟦2-char-id⟧ ? lB : 0));
             ⟦2-char-id⟧.push({
               call: {
                 name: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 39 · Change · +4 / -4</summary>

```diff
@@ -1425,18 +1425,18 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       return /^(?:on[A-Z]\w*|tick|playerCommand)$/.test(⟦2-char-id⟧)
     }
-    const ⟦2-char-id⟧ = new Set(["Hh", "onPlayerJoin", "onPlayerLeave", "onMobDespawned", "onBlockStand", "onBlockStandStart", "onBlockStandStop", "onPlayerJump", "onPlayerSelectInventorySlot", "onEntityCollision", "onChunkLoaded", "onClose"]),
+    const ⟦2-char-id⟧ = new Set(["dL", "onPlayerJoin", "onPlayerLeave", "onMobDespawned", "onBlockStand", "onBlockStandStart", "onBlockStandStop", "onPlayerJump", "onPlayerSelectInventorySlot", "onEntityCollision", "onChunkLoaded", "onClose"]),
       ⟦2-char-id⟧ = {
         playerCommand: {
-          stopsWhen: ⟦2-char-id⟧ => `${JJ} !== undefined && ${JJ} !== false`,
+          stopsWhen: ⟦2-char-id⟧ => `${BB} !== undefined && ${BB} !== false`,
           passedOn: !1
         },
         onPlayerChat: {
-          stopsWhen: ⟦2-char-id⟧ => `${JJ} === false || ${JJ} === null`,
+          stopsWhen: ⟦2-char-id⟧ => `${BB} === false || ${BB} === null`,
           passedOn: !0
         },
         onPlayerDamagingOtherPlayer: {
-          stopsWhen: ⟦2-char-id⟧ => `${JJ} === "preventDamage"`,
+          stopsWhen: ⟦2-char-id⟧ => `${BB} === "preventDamage"`,
           passedOn: !0
         }
       };
```

</details>

<details>
<summary>Hunk 40 · Change · +1 / -1</summary>

```diff
@@ -1449,7 +1449,7 @@
         } = ⟦2-char-id⟧;
       return {
         file: ⟦2-char-id⟧,
-        hasErrors: (null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? cJ : 0) > 0
+        hasErrors: (null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? TB : 0) > 0
       }
     }
 
```

</details>

<details>
<summary>Hunk 41 · Change · +3 / -3</summary>

```diff
@@ -1459,21 +1459,21 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       if (⟦2-char-id⟧().isFunctionDeclaration(⟦2-char-id⟧) && ⟦2-char-id⟧.name) return {
-        Un: ⟦2-char-id⟧,
+        gD: ⟦2-char-id⟧,
         nameNode: ⟦2-char-id⟧.name
       };
       if (⟦2-char-id⟧().isVariableStatement(⟦2-char-id⟧) && 1 === ⟦2-char-id⟧.declarationList.declarations.length) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.declarationList.declarations[0],
           ⟦2-char-id⟧ = ⟦2-char-id⟧.initializer && ⟦2-char-id⟧(⟦2-char-id⟧.initializer);
         if (⟦2-char-id⟧().isIdentifier(⟦2-char-id⟧.name) && ⟦2-char-id⟧(⟦2-char-id⟧)) return {
-          Un: ⟦2-char-id⟧,
+          gD: ⟦2-char-id⟧,
           nameNode: ⟦2-char-id⟧.name
         }
       }
       const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧),
         ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧.value);
       return ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧) ? {
-        Un: ⟦2-char-id⟧,
+        gD: ⟦2-char-id⟧,
         nameNode: ⟦2-char-id⟧.name
       } : null
     }
```

</details>

<details>
<summary>Hunk 42 · Change · +1 / -1</summary>

```diff
@@ -1504,7 +1504,7 @@
         var ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧.getStart(⟦2-char-id⟧);
-            for (const ⟦2-char-id⟧ of (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧().getLeadingCommentRanges(⟦2-char-id⟧, ⟦2-char-id⟧.getFullStart())) && void 0 !== ⟦2-char-id⟧ ? UJ : []).reverse()) {
+            for (const ⟦2-char-id⟧ of (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧().getLeadingCommentRanges(⟦2-char-id⟧, ⟦2-char-id⟧.getFullStart())) && void 0 !== ⟦2-char-id⟧ ? yB : []).reverse()) {
               var ⟦2-char-id⟧;
               if (/\n[^\S\n]*\n/.test(⟦2-char-id⟧.slice(⟦2-char-id⟧.end, ⟦2-char-id⟧))) break;
               ⟦2-char-id⟧ = ⟦2-char-id⟧.pos
```

</details>

<details>
<summary>Hunk 43 · Change · +1 / -1</summary>

```diff
@@ -1570,7 +1570,7 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.slice(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧);
-      return /^\s*$/.test(⟦2-char-id⟧) ? UJ : `${null!==(ZJ=null===(FJ=/^\s*/.exec(UJ))||void 0===FJ?void 0:FJ[0])&&void 0!==ZJ?ZJ:""}\t`
+      return /^\s*$/.test(⟦2-char-id⟧) ? yB : `${null!==(dB=null===(VB=/^\s*/.exec(yB))||void 0===VB?void 0:VB[0])&&void 0!==dB?dB:""}\t`
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 44 · Change · +2 / -2</summary>

```diff
@@ -1579,8 +1579,8 @@
           return -1 === ⟦2-char-id⟧ ? ⟦2-char-id⟧.length : ⟦2-char-id⟧
         }(⟦2-char-id⟧, ⟦2-char-id⟧.getEnd())),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.trim(),
-        ⟦2-char-id⟧ = /^[\w$"']+\s*:/.test(⟦2-char-id⟧) && "" === ⟦2-char-id⟧.slice(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.getStart(⟦2-char-id⟧)), ⟦2-char-id⟧.getStart(⟦2-char-id⟧)).trim() ? ⟦2-char-id⟧.replace(/^\s*/, "\t") : `\t${cJ.getText(ZJ)},`;
-      return /,\s*(?:\/\/.*)?$/.test(⟦2-char-id⟧) ? eJ : ⟦2-char-id⟧.replace(/(\s*(?:\/\/.*)?)$/, ",$1")
+        ⟦2-char-id⟧ = /^[\w$"']+\s*:/.test(⟦2-char-id⟧) && "" === ⟦2-char-id⟧.slice(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.getStart(⟦2-char-id⟧)), ⟦2-char-id⟧.getStart(⟦2-char-id⟧)).trim() ? ⟦2-char-id⟧.replace(/^\s*/, "\t") : `\t${TB.getText(dB)},`;
+      return /,\s*(?:\/\/.*)?$/.test(⟦2-char-id⟧) ? pB : ⟦2-char-id⟧.replace(/(\s*(?:\/\/.*)?)$/, ",$1")
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 45 · Change · +1 / -1</summary>

```diff
@@ -1603,7 +1603,7 @@
         ⟦2-char-id⟧ = ⟦2-char-id⟧.filter((⟦2-char-id⟧ => !⟦2-char-id⟧().isFunctionDeclaration(⟦2-char-id⟧.node) && function(⟦2-char-id⟧, ⟦2-char-id⟧) {
           return !⟦2-char-id⟧().isVariableStatement(⟦2-char-id⟧) || ⟦2-char-id⟧.declarationList.declarations.some((⟦2-char-id⟧ => void 0 !== ⟦2-char-id⟧.initializer && ⟦2-char-id⟧(⟦2-char-id⟧.name).includes(⟦2-char-id⟧)))
         }(⟦2-char-id⟧.node, ⟦2-char-id⟧))),
-        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.length - 1]) && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧[⟦2-char-id⟧.length - 1];
+        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.length - 1]) && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧[⟦2-char-id⟧.length - 1];
       if ("callback" === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.kind)) return ⟦2-char-id⟧(⟦2-char-id⟧.node);
       const ⟦2-char-id⟧ = "other" === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.kind) ? null === (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.node)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.value : void 0;
       if (!⟦2-char-id⟧ || !⟦2-char-id⟧().isIdentifier(⟦2-char-id⟧)) return null;
```

</details>

<details>
<summary>Hunk 46 · Change · +1 / -1</summary>

```diff
@@ -1614,7 +1614,7 @@
         })),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.filter((⟦2-char-id⟧ => ⟦2-char-id⟧.names.includes(⟦2-char-id⟧.text))),
         ⟦2-char-id⟧ = 1 === ⟦2-char-id⟧.length && "function" === ⟦2-char-id⟧[0].kind ? ⟦2-char-id⟧(⟦2-char-id⟧[0].node) : null;
-      return 1 === ⟦2-char-id⟧.length ? YJ : null
+      return 1 === ⟦2-char-id⟧.length ? oB : null
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 47 · Change · +1 / -1</summary>

```diff
@@ -1625,7 +1625,7 @@
       var ⟦2-char-id⟧;
       let ⟦2-char-id⟧ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
       const {
-        Un: ⟦2-char-id⟧
+        gD: ⟦2-char-id⟧
       } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.body;
       if (!⟦2-char-id⟧) return [];
       const ⟦2-char-id⟧ = [],
```

</details>

<details>
<summary>Hunk 48 · Change · +1 / -1</summary>

```diff
@@ -1634,7 +1634,7 @@
         ⟦2-char-id⟧ = new Set([...⟦2-char-id⟧.filter((⟦2-char-id⟧ => null !== ⟦2-char-id⟧)), ...⟦2-char-id⟧(⟦2-char-id⟧)]),
         ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧;
-          for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧.has(⟦2-char-id⟧); ⟦2-char-id⟧++) ⟦2-char-id⟧ = `${JJ}${FJ}`;
+          for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧.has(⟦2-char-id⟧); ⟦2-char-id⟧++) ⟦2-char-id⟧ = `${BB}${VB}`;
           return ⟦2-char-id⟧.add(⟦2-char-id⟧), ⟦2-char-id⟧
         },
         ⟦2-char-id⟧ = [];
```

</details>

<details>
<summary>Hunk 49 · Change · +2 / -2</summary>

```diff
@@ -1642,11 +1642,11 @@
         var ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
         if (void 0 !== ⟦2-char-id⟧ && null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.parameters[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.dotDotDotToken) {
-          ⟦2-char-id⟧.push(null === ⟦2-char-id⟧ ? "undefined" : `...${JJ}`);
+          ⟦2-char-id⟧.push(null === ⟦2-char-id⟧ ? "undefined" : `...${BB}`);
           break
         }
         if (void 0 !== ⟦2-char-id⟧) {
-          ⟦2-char-id⟧.push(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? JJ : "undefined");
+          ⟦2-char-id⟧.push(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? BB : "undefined");
           continue
         }
         const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 50 · Change · +5 / -5</summary>

```diff
@@ -1661,21 +1661,21 @@
           ⟦2-char-id⟧.push({
             from: ⟦2-char-id⟧.getStart(⟦2-char-id⟧),
             to: ⟦2-char-id⟧.getEnd(),
-            text: `(${[JJ.getText(cJ),...fJ].join(", ")})`
+            text: `(${[BB.getText(TB),...HB].join(", ")})`
           })
         } else {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.parameters.hasTrailingComma ? " " : ⟦2-char-id⟧.parameters.length > 0 ? ", " : "";
           ⟦2-char-id⟧.push({
             from: ⟦2-char-id⟧,
             to: ⟦2-char-id⟧,
-            text: `${JJ}${fJ.join(", ")}`
+            text: `${BB}${HB.join(", ")}`
           })
         }
       }
-      const ⟦2-char-id⟧ = `${UJ}(${sJ.join(", ")})`,
-        ⟦2-char-id⟧ = ⟦2-char-id⟧(`${MZ(XJ)}Result`, 2),
+      const ⟦2-char-id⟧ = `${yB}(${OB.join(", ")})`,
+        ⟦2-char-id⟧ = ⟦2-char-id⟧(`${Fd(lB)}Result`, 2),
         ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
-        ⟦2-char-id⟧ = ⟦2-char-id⟧.has(⟦2-char-id⟧) ? [⟦2-char-id⟧] : ⟦2-char-id⟧ ? [`const ${vJ} = ${rJ}`, `if (${mJ.stopsWhen(vJ)}) return ${vJ}`] : [`const ${vJ} = ${rJ}`],
+        ⟦2-char-id⟧ = ⟦2-char-id⟧.has(⟦2-char-id⟧) ? [⟦2-char-id⟧] : ⟦2-char-id⟧ ? [`const ${mB} = ${vB}`, `if (${iB.stopsWhen(mB)}) return ${mB}`] : [`const ${mB} = ${vB}`],
         ⟦2-char-id⟧ = !⟦2-char-id⟧.has(⟦2-char-id⟧) && (null === (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.passedOn) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧);
       if (⟦2-char-id⟧ && ⟦2-char-id⟧().isBlock(⟦2-char-id⟧)) {
         const ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 51 · Change · +3 / -3</summary>

```diff
@@ -1690,19 +1690,19 @@
             if (!⟦2-char-id⟧().isFunctionLike(⟦2-char-id⟧) && ! function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
                 if (!⟦2-char-id⟧().isIfStatement(⟦2-char-id⟧) || !⟦2-char-id⟧().isReturnStatement(⟦2-char-id⟧.thenStatement) || !⟦2-char-id⟧.thenStatement.expression) return !1;
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧.thenStatement.expression;
-                return ⟦2-char-id⟧().isIdentifier(⟦2-char-id⟧) && ⟦2-char-id⟧.has(⟦2-char-id⟧.text) && ⟦2-char-id⟧.expression.getText(⟦2-char-id⟧).startsWith(`${FJ.text} `)
+                return ⟦2-char-id⟧().isIdentifier(⟦2-char-id⟧) && ⟦2-char-id⟧.has(⟦2-char-id⟧.text) && ⟦2-char-id⟧.expression.getText(⟦2-char-id⟧).startsWith(`${VB.text} `)
               }(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)) {
               if (⟦2-char-id⟧().isReturnStatement(⟦2-char-id⟧) && !⟦2-char-id⟧.expression) ⟦2-char-id⟧.push({
                 from: ⟦2-char-id⟧.getStart(⟦2-char-id⟧),
                 to: ⟦2-char-id⟧.getEnd(),
-                text: `return ${vJ}`
+                text: `return ${mB}`
               });
               else if (⟦2-char-id⟧().isReturnStatement(⟦2-char-id⟧) && ⟦2-char-id⟧.expression) {
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.expression, ⟦2-char-id⟧);
                 ⟦2-char-id⟧ && ⟦2-char-id⟧.push({
                   from: ⟦2-char-id⟧.getStart(⟦2-char-id⟧),
                   to: ⟦2-char-id⟧.getEnd(),
-                  text: `${FJ.text} !== undefined ? ${FJ.text} : ${vJ}`
+                  text: `${VB.text} !== undefined ? ${VB.text} : ${mB}`
                 })
               }
               ⟦2-char-id⟧().forEachChild(⟦2-char-id⟧, ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 52 · Change · +2 / -2</summary>

```diff
@@ -1712,9 +1712,9 @@
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.statements[⟦2-char-id⟧.statements.length - 1];
         if (!⟦2-char-id⟧ || !⟦2-char-id⟧().isReturnStatement(⟦2-char-id⟧) && !⟦2-char-id⟧().isThrowStatement(⟦2-char-id⟧)) {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.getEnd() - 1,
-            ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.getStart(⟦2-char-id⟧)) : `${JJ.slice(VZ(JJ,jJ.getStart(cJ)),jJ.getStart(cJ)).replace(/\S.*$/,"")}\t`,
+            ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.getStart(⟦2-char-id⟧)) : `${BB.slice(sd(BB,gB.getStart(TB)),gB.getStart(TB)).replace(/\S.*$/,"")}\t`,
             ⟦2-char-id⟧ = ⟦2-char-id⟧.slice(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧),
-            ⟦2-char-id⟧ = /^\s*$/.test(⟦2-char-id⟧) ? `${FJ}return ${vJ}\n${UJ}` : `\n${FJ}return ${vJ}\n`;
+            ⟦2-char-id⟧ = /^\s*$/.test(⟦2-char-id⟧) ? `${VB}return ${mB}\n${yB}` : `\n${VB}return ${mB}\n`;
           ⟦2-char-id⟧.push({
             from: /^\s*$/.test(⟦2-char-id⟧) ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) : ⟦2-char-id⟧,
             to: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 53 · Change · +5 / -5</summary>

```diff
@@ -1730,26 +1730,26 @@
       if (⟦2-char-id⟧ && ⟦2-char-id⟧.has(⟦2-char-id⟧) && ⟦2-char-id⟧) ⟦2-char-id⟧.push({
         from: ⟦2-char-id⟧.getEnd(),
         to: ⟦2-char-id⟧.getEnd(),
-        text: `\n${KZ(JJ,SJ.getStart(cJ))}${rJ}`
+        text: `\n${Md(BB,zB.getStart(TB))}${vB}`
       });
       else if (⟦2-char-id⟧().isBlock(⟦2-char-id⟧)) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.statements[0],
-          ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.getStart(⟦2-char-id⟧)) : `${JJ.slice(VZ(JJ,jJ.getStart(cJ)),jJ.getStart(cJ)).replace(/\S.*$/,"")}\t`,
+          ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.getStart(⟦2-char-id⟧)) : `${BB.slice(sd(BB,gB.getStart(TB)),gB.getStart(TB)).replace(/\S.*$/,"")}\t`,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.getStart(⟦2-char-id⟧) + 1,
           ⟦2-char-id⟧ = void 0 !== ⟦2-char-id⟧ && !⟦2-char-id⟧.slice(⟦2-char-id⟧, ⟦2-char-id⟧.getStart(⟦2-char-id⟧)).includes("\n");
         ⟦2-char-id⟧.push({
           from: ⟦2-char-id⟧,
           to: ⟦2-char-id⟧ ? ⟦2-char-id⟧.getStart(⟦2-char-id⟧) : ⟦2-char-id⟧,
-          text: `\n${QJ.map((JJ=>`${⟦2-char-id⟧}${⟦2-char-id⟧}`)).join("\n")}${ZJ?eJ?`\⟦2-char-id⟧{⟦2-char-id⟧}`:"":"\n"}`
+          text: `\n${NB.map((BB=>`${⟦2-char-id⟧}${⟦2-char-id⟧}`)).join("\n")}${dB?pB?`\⟦2-char-id⟧{⟦2-char-id⟧}`:"":"\n"}`
         })
       } else {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.slice(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.getStart(⟦2-char-id⟧)), ⟦2-char-id⟧.getStart(⟦2-char-id⟧)).replace(/\S.*$/, ""),
           ⟦2-char-id⟧ = ⟦2-char-id⟧("ownResult", 2),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧ ? [`const ${FJ} = ${YJ.getText(cJ)}`, `return ${FJ} !== undefined ? ${FJ} : ${vJ}`] : [`return ${YJ.getText(cJ)}`];
+          ⟦2-char-id⟧ = ⟦2-char-id⟧ ? [`const ${VB} = ${oB.getText(TB)}`, `return ${VB} !== undefined ? ${VB} : ${mB}`] : [`return ${oB.getText(TB)}`];
         ⟦2-char-id⟧.push({
           from: ⟦2-char-id⟧.getStart(⟦2-char-id⟧),
           to: ⟦2-char-id⟧.getEnd(),
-          text: `{\n${[...QJ,...UJ].map((JJ=>`${⟦2-char-id⟧}\⟦2-char-id⟧{⟦2-char-id⟧}`)).join("\n")}\n${ZJ}}`
+          text: `{\n${[...NB,...yB].map((BB=>`${⟦2-char-id⟧}\⟦2-char-id⟧{⟦2-char-id⟧}`)).join("\n")}\n${dB}}`
         })
       }
       return ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 54 · Change · +1 / -1</summary>

```diff
@@ -1760,7 +1760,7 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧().isIdentifier(⟦2-char-id⟧) ? ⟦2-char-id⟧.has(⟦2-char-id⟧.text) ? JJ : null : ⟦2-char-id⟧().isConditionalExpression(⟦2-char-id⟧) ? ⟦2-char-id⟧(⟦2-char-id⟧.whenFalse, ⟦2-char-id⟧) : null
+      return ⟦2-char-id⟧().isIdentifier(⟦2-char-id⟧) ? ⟦2-char-id⟧.has(⟦2-char-id⟧.text) ? BB : null : ⟦2-char-id⟧().isConditionalExpression(⟦2-char-id⟧) ? ⟦2-char-id⟧(⟦2-char-id⟧.whenFalse, ⟦2-char-id⟧) : null
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 55 · Change · +1 / -1</summary>

```diff
@@ -1773,7 +1773,7 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
-      return (0, ⟦2-char-id⟧.h)(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.body) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.getText(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? FJ : "", new RegExp(`${ZJ}\\s*\\(`), ⟦2-char-id⟧.m).length > 0
+      return (0, ⟦2-char-id⟧.d)(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.body) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.getText(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? VB : "", new RegExp(`${dB}\\s*\\(`), ⟦2-char-id⟧.l).length > 0
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 56 · Change · +2 / -2</summary>

```diff
@@ -1781,9 +1781,9 @@
       const {
         owner: ⟦2-char-id⟧,
         heading: ⟦2-char-id⟧
-      } = ⟦2-char-id⟧, ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.overrides) && void 0 !== ⟦2-char-id⟧ ? FJ : new Set;
+      } = ⟦2-char-id⟧, ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.overrides) && void 0 !== ⟦2-char-id⟧ ? VB : new Set;
       if ("" === ⟦2-char-id⟧.trim() && !0 !== ⟦2-char-id⟧.chainCallbacks) {
-        const ⟦2-char-id⟧ = `${eJ?`${⟦2-char-id⟧}\n`:""}${cJ.trim()}\n`,
+        const ⟦2-char-id⟧ = `${pB?`${⟦2-char-id⟧}\n`:""}${TB.trim()}\n`,
           {
             file: ⟦2-char-id⟧,
             hasErrors: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 57 · Change · +1 / -1</summary>

```diff
@@ -1797,7 +1797,7 @@
           settings: ⟦2-char-id⟧.flatMap((⟦2-char-id⟧ => {
             var ⟦2-char-id⟧;
             const ⟦2-char-id⟧ = "config" === ⟦2-char-id⟧.kind ? ⟦2-char-id⟧(⟦2-char-id⟧.node) : null;
-            return (null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.properties) && void 0 !== ⟦2-char-id⟧ ? cJ : []).flatMap((⟦2-char-id⟧ => {
+            return (null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.properties) && void 0 !== ⟦2-char-id⟧ ? TB : []).flatMap((⟦2-char-id⟧ => {
               const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
               return null === ⟦2-char-id⟧ ? [] : [⟦2-char-id⟧]
             }))
```

</details>

<details>
<summary>Hunk 58 · Change · +2 / -2</summary>

```diff
@@ -1856,13 +1856,13 @@
             if (!⟦2-char-id⟧.slice(⟦2-char-id⟧.getStart(⟦2-char-id⟧), ⟦2-char-id⟧).includes("\n")) {
               const ⟦2-char-id⟧ = ⟦2-char-id⟧.properties.map((⟦2-char-id⟧ => {
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧);
-                return ⟦2-char-id⟧().isPropertyAssignment(⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧ ? `\t${JJ.name.getText(cJ)}: ${ZJ},` : `\t${JJ.getText(cJ)},`
+                return ⟦2-char-id⟧().isPropertyAssignment(⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧ ? `\t${BB.name.getText(TB)}: ${dB},` : `\t${BB.getText(TB)},`
               }));
               return {
                 edits: [{
                   from: ⟦2-char-id⟧.getStart(⟦2-char-id⟧),
                   to: ⟦2-char-id⟧.getEnd(),
-                  text: `{\n${[...JJ,...YJ].join("\n")}\n}`
+                  text: `{\n${[...BB,...oB].join("\n")}\n}`
                 }],
                 settings: ⟦2-char-id⟧
               }
```

</details>

<details>
<summary>Hunk 59 · Change · +1 / -1</summary>

```diff
@@ -1877,7 +1877,7 @@
             }), ⟦2-char-id⟧.push({
               from: ⟦2-char-id⟧,
               to: ⟦2-char-id⟧,
-              text: `${YJ.join("\n")}\n`
+              text: `${oB.join("\n")}\n`
             }), {
               edits: ⟦2-char-id⟧,
               settings: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 60 · Change · +1 / -1</summary>

```diff
@@ -1891,7 +1891,7 @@
             }), ⟦2-char-id⟧.push({
               from: ⟦2-char-id⟧,
               to: ⟦2-char-id⟧,
-              text: `${rJ?",":""}\n${YJ.join("\n")}\n`
+              text: `${vB?",":""}\n${oB.join("\n")}\n`
             }), {
               edits: ⟦2-char-id⟧,
               settings: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 61 · Change · +1 / -1</summary>

```diff
@@ -1908,7 +1908,7 @@
           ⟦2-char-id⟧.push({
             from: ⟦2-char-id⟧,
             to: ⟦2-char-id⟧,
-            text: `${UJ}${cJ.slice(rJ.from,rJ.to)}\n\n`
+            text: `${yB}${TB.slice(vB.from,vB.to)}\n\n`
           }), ⟦2-char-id⟧ = ⟦2-char-id⟧.properties.flatMap((⟦2-char-id⟧ => {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
             return null === ⟦2-char-id⟧ ? [] : [⟦2-char-id⟧]
```

</details>

<details>
<summary>Hunk 62 · Change · +1 / -1</summary>

```diff
@@ -1919,7 +1919,7 @@
         ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.length - 1],
             ⟦2-char-id⟧ = void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧ >= 0 && ⟦2-char-id⟧ === ⟦2-char-id⟧ - 1 && !/\n[^\S\n]*\n/.test(⟦2-char-id⟧.slice(⟦2-char-id⟧[⟦2-char-id⟧].to, ⟦2-char-id⟧[⟦2-char-id⟧].from)) ? "\n" : "\n\n";
-          ⟦2-char-id⟧.push(0 === ⟦2-char-id⟧.length ? JJ : `${UJ}${JJ}`), ⟦2-char-id⟧.push(⟦2-char-id⟧)
+          ⟦2-char-id⟧.push(0 === ⟦2-char-id⟧.length ? BB : `${yB}${BB}`), ⟦2-char-id⟧.push(⟦2-char-id⟧)
         };
       for (const [⟦2-char-id⟧, ⟦2-char-id⟧] of ⟦2-char-id⟧.entries()) {
         if ("config" === ⟦2-char-id⟧.kind) continue;
```

</details>

<details>
<summary>Hunk 63 · Change · +1 / -1</summary>

```diff
@@ -1935,7 +1935,7 @@
             ⟦2-char-id⟧.has(⟦2-char-id⟧) || (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧.add(⟦2-char-id⟧));
             continue
           }
-          const ⟦2-char-id⟧ = `${MZ(UJ)}${IZ(cJ)}`,
+          const ⟦2-char-id⟧ = `${Fd(yB)}${Ud(TB)}`,
             ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.node);
           if (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || !⟦2-char-id⟧.nameNode) continue;
           if (!⟦2-char-id⟧.has(⟦2-char-id⟧)) {
```

</details>

<details>
<summary>Hunk 64 · Change · +5 / -5</summary>

```diff
@@ -1943,14 +1943,14 @@
               ⟦2-char-id⟧ = ⟦2-char-id⟧.nameNode.getEnd() - ⟦2-char-id⟧.from;
             ⟦2-char-id⟧(⟦2-char-id⟧.slice(0, ⟦2-char-id⟧) + ⟦2-char-id⟧ + ⟦2-char-id⟧.slice(⟦2-char-id⟧), ⟦2-char-id⟧), ⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧.add(⟦2-char-id⟧)
           }
-          const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.Un).map(((⟦2-char-id⟧, ⟦2-char-id⟧) => null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? JJ : `arg${cJ}`));
+          const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.gD).map(((⟦2-char-id⟧, ⟦2-char-id⟧) => null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? BB : `arg${TB}`));
           if (!⟦2-char-id⟧) {
-            const ⟦2-char-id⟧ = `${XJ}(${nJ.join(", ")})`,
-              ⟦2-char-id⟧ = `${MZ(UJ)}Result`;
-            ⟦2-char-id⟧(`function ${cJ}(${nJ.join(", ")}) {\n\t${DZ.has(cJ)?JJ:`const ${⟦2-char-id⟧} = ${⟦2-char-id⟧}\n\treturn ${⟦2-char-id⟧}`}\n}`, -1), ⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧.add(⟦2-char-id⟧);
+            const ⟦2-char-id⟧ = `${lB}(${DB.join(", ")})`,
+              ⟦2-char-id⟧ = `${Fd(yB)}Result`;
+            ⟦2-char-id⟧(`function ${TB}(${DB.join(", ")}) {\n\t${Ld.has(TB)?BB:`const ${⟦2-char-id⟧} = ${⟦2-char-id⟧}\n\treturn ${⟦2-char-id⟧}`}\n}`, -1), ⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧.add(⟦2-char-id⟧);
             continue
           }
-          ⟦2-char-id⟧(⟦2-char-id⟧.Un, ⟦2-char-id⟧.file, ⟦2-char-id⟧) || (⟦2-char-id⟧.push(...⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.file, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, !0 === ⟦2-char-id⟧.runsLast)), ⟦2-char-id⟧.push(⟦2-char-id⟧));
+          ⟦2-char-id⟧(⟦2-char-id⟧.gD, ⟦2-char-id⟧.file, ⟦2-char-id⟧) || (⟦2-char-id⟧.push(...⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.file, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, !0 === ⟦2-char-id⟧.runsLast)), ⟦2-char-id⟧.push(⟦2-char-id⟧));
           continue
         }
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.names.filter((⟦2-char-id⟧ => !⟦2-char-id⟧.has(⟦2-char-id⟧)));
```

</details>

<details>
<summary>Hunk 65 · Change · +1 / -1</summary>

```diff
@@ -1962,7 +1962,7 @@
       let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
       if (⟦2-char-id⟧.length > 0) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.replace(/\s*$/, "");
-        ⟦2-char-id⟧ = `${""===JJ?"":`${⟦2-char-id⟧}\n\n`}${eJ?`${⟦2-char-id⟧}\n`:""}${nJ.join("")}\n`
+        ⟦2-char-id⟧ = `${""===BB?"":`${⟦2-char-id⟧}\n\n`}${pB?`${⟦2-char-id⟧}\n`:""}${DB.join("")}\n`
       }
       return ⟦2-char-id⟧(⟦2-char-id⟧).hasErrors ? null : {
         text: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 66 · Change · +2 / -2</summary>

```diff
@@ -1999,11 +1999,11 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.getPropertiesOfType(⟦2-char-id⟧.getNonNullableType(⟦2-char-id⟧)),
-        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => "color" === ⟦2-char-id⟧.name))) && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧[0];
+        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => "color" === ⟦2-char-id⟧.name))) && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧[0];
       if (!⟦2-char-id⟧) return;
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.typeToString(⟦2-char-id⟧.getNonNullableType(⟦2-char-id⟧.getTypeOfSymbol(⟦2-char-id⟧))),
         ⟦2-char-id⟧ = "color" === ⟦2-char-id⟧.name ? '"red"' : ⟦2-char-id⟧.includes("number") ? "1" : "boolean" === ⟦2-char-id⟧ ? "true" : '"..."';
-      return `{ ${UJ.name}: ${XJ} }`
+      return `{ ${yB.name}: ${lB} }`
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 67 · Change · +7 / -7</summary>

```diff
@@ -2015,25 +2015,25 @@
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.getNonNullableType(⟦2-char-id⟧);
       if (⟦2-char-id⟧.isUnion()) {
         const ⟦2-char-id⟧ = [...new Set(⟦2-char-id⟧.types.map((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧))))];
-        return ⟦2-char-id⟧.length > 7 ? `${cJ.slice(0,7).join(" or ")} or ...` : ⟦2-char-id⟧.join(" or ")
-      }
-      if (⟦2-char-id⟧.isStringLiteral()) return `"${FJ.value}"`;
-      if (⟦2-char-id⟧.isNumberLiteral()) return `${FJ.value}`;
+        return ⟦2-char-id⟧.length > 7 ? `${TB.slice(0,7).join(" or ")} or ...` : ⟦2-char-id⟧.join(" or ")
+      }
+      if (⟦2-char-id⟧.isStringLiteral()) return `"${VB.value}"`;
+      if (⟦2-char-id⟧.isNumberLiteral()) return `${VB.value}`;
       if (⟦2-char-id⟧.flags & ⟦2-char-id⟧().TypeFlags.StringLike) return "text";
       if (⟦2-char-id⟧.flags & ⟦2-char-id⟧().TypeFlags.NumberLike) return "a number";
       if (⟦2-char-id⟧.flags & ⟦2-char-id⟧().TypeFlags.BooleanLike) return "true or false";
       if (⟦2-char-id⟧.isTupleType(⟦2-char-id⟧)) {
-        return `[${JJ.getTypeArguments(FJ).map((cJ=>uZ(JJ,cJ,ZJ+1))).join(", ")}]`
+        return `[${BB.getTypeArguments(VB).map((TB=>Gd(BB,TB,dB+1))).join(", ")}]`
       }
       if (⟦2-char-id⟧.isArrayType(⟦2-char-id⟧)) {
         if (⟦2-char-id⟧ > 1) return "a list";
         const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.getTypeArguments(⟦2-char-id⟧)[0], ⟦2-char-id⟧ + 1);
-        return `a list of ${cJ.includes(" or ")?`(${⟦2-char-id⟧})`:cJ}`
+        return `a list of ${TB.includes(" or ")?`(${⟦2-char-id⟧})`:TB}`
       }
       if (⟦2-char-id⟧.getCallSignatures().length > 0) return "a function";
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.getPropertiesOfType(⟦2-char-id⟧);
       if (0 === ⟦2-char-id⟧.length || ⟦2-char-id⟧ > 1) return "{ ... }";
-      return `{ ${UJ.slice(0,10).map((JJ=>`${⟦2-char-id⟧.name}${⟦2-char-id⟧.flags&⟦2-char-id⟧().SymbolFlags.Optional?"?":""}`)).join(", ")}${UJ.length>10?", ...":""} }`
+      return `{ ${yB.slice(0,10).map((BB=>`${⟦2-char-id⟧.name}${⟦2-char-id⟧.flags&⟦2-char-id⟧().SymbolFlags.Optional?"?":""}`)).join(", ")}${yB.length>10?", ...":""} }`
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 68 · Change · +3 / -3</summary>

```diff
@@ -2061,15 +2061,15 @@
           if (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)) {
             var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.getResolvedSignature(⟦2-char-id⟧),
-              ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.getParameters()) && void 0 !== ⟦2-char-id⟧ ? eJ : [],
-              ⟦2-char-id⟧ = new Set((null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.getDeclaration()) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.typeParameters) && void 0 !== ⟦2-char-id⟧ ? XJ : []).map((⟦2-char-id⟧ => ⟦2-char-id⟧.name.text)));
+              ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.getParameters()) && void 0 !== ⟦2-char-id⟧ ? pB : [],
+              ⟦2-char-id⟧ = new Set((null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.getDeclaration()) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.typeParameters) && void 0 !== ⟦2-char-id⟧ ? lB : []).map((⟦2-char-id⟧ => ⟦2-char-id⟧.name.text)));
             ⟦2-char-id⟧.arguments.forEach(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
               var ⟦2-char-id⟧;
               const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.valueDeclaration,
                 ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧().isParameter(⟦2-char-id⟧) ? ⟦2-char-id⟧.type : void 0;
               if (⟦2-char-id⟧.kind === ⟦2-char-id⟧().SyntaxKind.NullKeyword && ⟦2-char-id⟧ && !⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) && !/\b(?:null|any|unknown)\b/.test(⟦2-char-id⟧.getText())) {
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧ === ⟦2-char-id⟧.arguments.length - 1;
-                ⟦2-char-id⟧.add(`${UJ.expression.getText(JJ)} can't take null as ${qJ[FJ].name}: ${cJ?"leave it out":"give undefined instead"}, or it throws when that line runs.`)
+                ⟦2-char-id⟧.add(`${yB.expression.getText(BB)} can't take null as ${YB[VB].name}: ${TB?"leave it out":"give undefined instead"}, or it throws when that line runs.`)
               }
             }))
           }
```

</details>

<details>
<summary>Hunk 69 · Change · +2 / -2</summary>

```diff
@@ -2108,9 +2108,9 @@
         ⟦2-char-id⟧ = [],
         ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
           var ⟦2-char-id⟧;
-          return ⟦2-char-id⟧().isPropertyAccessExpression(⟦2-char-id⟧) && ⟦2-char-id⟧().isIdentifier(⟦2-char-id⟧.expression) && "CONFIG" === ⟦2-char-id⟧.expression.text && null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧.name.text)) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧.getText()
+          return ⟦2-char-id⟧().isPropertyAccessExpression(⟦2-char-id⟧) && ⟦2-char-id⟧().isIdentifier(⟦2-char-id⟧.expression) && "CONFIG" === ⟦2-char-id⟧.expression.text && null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧.name.text)) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧.getText()
         },
-        ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧ && (⟦2-char-id⟧().isStringLiteral(⟦2-char-id⟧) || ⟦2-char-id⟧().isNoSubstitutionTemplateLiteral(⟦2-char-id⟧)) ? ⟦2-char-id⟧.text : ⟦2-char-id⟧ && ⟦2-char-id⟧().isObjectLiteralExpression(⟦2-char-id⟧) ? ⟦2-char-id⟧.properties.flatMap((⟦2-char-id⟧ => ⟦2-char-id⟧().isPropertyAssignment(⟦2-char-id⟧) && (⟦2-char-id⟧().isIdentifier(⟦2-char-id⟧.name) || ⟦2-char-id⟧().isStringLiteral(⟦2-char-id⟧.name)) ? [`${JJ.name.text}: ${eJ(JJ.initializer)}`] : ⟦2-char-id⟧().isShorthandPropertyAssignment(⟦2-char-id⟧) && ⟦2-char-id⟧.has(⟦2-char-id⟧.name.text) ? [`${JJ.name.text}: ${ZJ.get(JJ.name.text)}`] : [])).join("\n") : "";
+        ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧ && (⟦2-char-id⟧().isStringLiteral(⟦2-char-id⟧) || ⟦2-char-id⟧().isNoSubstitutionTemplateLiteral(⟦2-char-id⟧)) ? ⟦2-char-id⟧.text : ⟦2-char-id⟧ && ⟦2-char-id⟧().isObjectLiteralExpression(⟦2-char-id⟧) ? ⟦2-char-id⟧.properties.flatMap((⟦2-char-id⟧ => ⟦2-char-id⟧().isPropertyAssignment(⟦2-char-id⟧) && (⟦2-char-id⟧().isIdentifier(⟦2-char-id⟧.name) || ⟦2-char-id⟧().isStringLiteral(⟦2-char-id⟧.name)) ? [`${BB.name.text}: ${pB(BB.initializer)}`] : ⟦2-char-id⟧().isShorthandPropertyAssignment(⟦2-char-id⟧) && ⟦2-char-id⟧.has(⟦2-char-id⟧.name.text) ? [`${BB.name.text}: ${dB.get(BB.name.text)}`] : [])).join("\n") : "";
       for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.statements) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧().isExpressionStatement(⟦2-char-id⟧) ? ⟦2-char-id⟧.expression : null;
         if (!⟦2-char-id⟧ || !⟦2-char-id⟧().isCallExpression(⟦2-char-id⟧) || !⟦2-char-id⟧().isIdentifier(⟦2-char-id⟧.expression) || !/^use_?prefab$/i.test(⟦2-char-id⟧.expression.text)) continue;
```

</details>

<details>
<summary>Hunk 70 · Change · +1 / -1</summary>

```diff
@@ -2454,7 +2454,7 @@
         title: "Mining simulator",
         category: "economy",
         summary: "Break blocks for coins (each block has its value), the blocks grow back, /upgrade buys a bigger coin multiplier, /pickaxe buys the next better pickaxe when the pickaxes setting lists some, a backpack (backpackSize) can hold the ores until /sell, coins and levels are saved and the richest top the leaderboard",
-        keywords: ["simulator", "simulater", "sim", "mining", "mine", "miner", "ore", "Pe", "clicker", "grind", "grinding", "upgrade", "upgrades", "pickaxe", "pickaxes", "buy pickaxes", "better pickaxe", "rich", "backpack", "sell", "auto sell", "autosell", "brain rot"],
+        keywords: ["simulator", "simulater", "sim", "mining", "mine", "miner", "ore", "VT", "clicker", "grind", "grinding", "upgrade", "upgrades", "pickaxe", "pickaxes", "buy pickaxes", "better pickaxe", "rich", "backpack", "sell", "auto sell", "autosell", "brain rot"],
         howItPlays: "Breaking a block listed in blockValues gives its coins, times the player's level, and it grows back after regrowSeconds. /upgrade spends coins to go up a level (each level costs upgradePriceGrowth times the last). When pickaxes lists some, players start with the first one and /pickaxe spends coins to swap it for the next better one, until the last. With backpackSize above 0, mined ores go into the player's inventory instead, until it holds backpackSize of them (shown on the sidebar): then they can't mine until /sell sells them all for their coins times their level, or, with autoSell on, the full backpack sells itself. Coins, levels and the pickaxe are saved, the leaderboard shows everyone's coins and level, and other blocks can't be broken when protectOtherBlocks is on.",
         settings: [{
           key: "blockValues",
```

</details>

<details>
<summary>Hunk 71 · Change · +1 / -1</summary>

```diff
@@ -4712,7 +4712,7 @@
         group: "boxes",
         code: "// Ready-made boxes: isInBox(playerId, corner1, corner2) says whether a player is inside the box between two corners\n// [x, y, z], and playersInBox(corner1, corner2) lists who is.\nfunction isInBox(playerId, corner1, corner2) {\n\tconst position = api.getPosition(playerId)\n\tfor (let i = 0; i < 3; i++) {\n\t\tconst low = Math.min(corner1[i], corner2[i])\n\t\tconst high = Math.max(corner1[i], corner2[i]) + 1\n\t\tif (position[i] < low || position[i] >= high) {\n\t\t\treturn false\n\t\t}\n\t}\n\treturn true\n}\n\nfunction playersInBox(corner1, corner2) {\n\treturn api.getPlayerIds().filter((playerId) => isInBox(playerId, corner1, corner2))\n}",
         helpers: [{
-          name: "oZJ",
+          name: "wVB",
           category: "world",
           signature: "isInBox(playerId, corner1, corner2)",
           about: "Whether a player is inside the box between two corners [x, y, z], e.g. a finish area or a safe zone.",
```

</details>

<details>
<summary>Hunk 72 · Change · +1 / -1</summary>

```diff
@@ -4796,7 +4796,7 @@
       }, {
         group: "areas",
         code: '// Ready-made areas: protectArea(corner1, corner2) stops everyone breaking or placing blocks in the box between two\n// corners [x, y, z], and noPvpZone(corner1, corner2) stops players hurting each other in one.\nvar protectedAreas\nvar noPvpAreas\n\nfunction protectArea(corner1, corner2) {\n\tif (!protectedAreas) {\n\t\tprotectedAreas = []\n\t}\n\tprotectedAreas.push([corner1.slice(), corner2.slice()])\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tapi.setCantChangeBlockRect(playerId, corner1.slice(), corner2.slice())\n\t}\n}\n\nfunction noPvpZone(corner1, corner2) {\n\tif (!noPvpAreas) {\n\t\tnoPvpAreas = []\n\t}\n\tnoPvpAreas.push([corner1.slice(), corner2.slice()])\n}\n\nfunction onPlayerJoin(playerId) {\n\tfor (const area of protectedAreas || []) {\n\t\tapi.setCantChangeBlockRect(playerId, area[0].slice(), area[1].slice())\n\t}\n}\n\nfunction onPlayerDamagingOtherPlayer(attackingPlayer, damagedPlayer) {\n\tfor (const area of noPvpAreas || []) {\n\t\tif (isInBox(attackingPlayer, area[0], area[1]) || isInBox(damagedPlayer, area[0], area[1])) {\n\t\t\treturn "preventDamage"\n\t\t}\n\t}\n}',
-        uses: ["oZJ"],
+        uses: ["wVB"],
         helpers: [{
           name: "protectArea",
           category: "building",
```

</details>

<details>
<summary>Hunk 73 · Change · +1 / -1</summary>

```diff
@@ -4923,7 +4923,7 @@
       }, {
         group: "enterBox",
         code: "// Ready-made zones: whenEnterBox(corner1, corner2, onEnter, onLeave) calls onEnter(playerId) when a player comes into\n// the box between two corners, and onLeave(playerId) (if given) when they go out of it. One timer checks everyone a few\n// times a second, however many boxes there are. The list is a var made on first use, so it can be called from the top\n// of the file.\nvar boxWatches\nvar boxTimer\n\nfunction whenEnterBox(corner1, corner2, onEnter, onLeave) {\n\tif (!boxWatches) {\n\t\tboxWatches = []\n\t}\n\tboxWatches.push({ corner1: corner1, corner2: corner2, onEnter: onEnter, onLeave: onLeave, inside: {} })\n\tif (boxTimer === undefined) {\n\t\tboxTimer = repeatEvery(0.25, checkBoxWatches)\n\t}\n}\n\nfunction checkBoxWatches() {\n\tfor (const watch of boxWatches) {\n\t\tconst playerIds = api.getPlayerIds()\n\t\t// A player who left is forgotten (onLeave isn't called for them), so coming back counts as coming in\n\t\tfor (const playerId of Object.keys(watch.inside)) {\n\t\t\tif (!playerIds.includes(playerId)) {\n\t\t\t\tdelete watch.inside[playerId]\n\t\t\t}\n\t\t}\n\t\tfor (const playerId of playerIds) {\n\t\t\t// A player can leave while onEnter runs for another\n\t\t\tif (!api.getPlayerIds().includes(playerId)) {\n\t\t\t\tcontinue\n\t\t\t}\n\t\t\tconst inside = isInBox(playerId, watch.corner1, watch.corner2)\n\t\t\tif (inside && !watch.inside[playerId]) {\n\t\t\t\twatch.inside[playerId] = true\n\t\t\t\twatch.onEnter(playerId)\n\t\t\t} else if (!inside && watch.inside[playerId]) {\n\t\t\t\tdelete watch.inside[playerId]\n\t\t\t\tif (watch.onLeave) {\n\t\t\t\t\twatch.onLeave(playerId)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}",
-        uses: ["repeatEvery", "oZJ"],
+        uses: ["repeatEvery", "wVB"],
         helpers: [{
           name: "whenEnterBox",
           category: "world",
```

</details>

<details>
<summary>Hunk 74 · Change · +1 / -1</summary>

```diff
@@ -5016,7 +5016,7 @@
       const {
         file: ⟦2-char-id⟧,
         hasErrors: ⟦2-char-id⟧
-      } = ⟦2-char-id⟧(`(${JJ})`), ⟦2-char-id⟧ = ⟦2-char-id⟧.statements[0];
+      } = ⟦2-char-id⟧(`(${BB})`), ⟦2-char-id⟧ = ⟦2-char-id⟧.statements[0];
       if (⟦2-char-id⟧ || 1 !== ⟦2-char-id⟧.statements.length || !⟦2-char-id⟧ || !⟦2-char-id⟧().isExpressionStatement(⟦2-char-id⟧)) return null;
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.expression;
       return ⟦2-char-id⟧().isParenthesizedExpression(⟦2-char-id⟧) ? ⟦2-char-id⟧.expression : ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 75 · Change · +1 / -1</summary>

```diff
@@ -5054,7 +5054,7 @@
           ⟦2-char-id⟧.push([⟦2-char-id⟧.name.text, ⟦2-char-id⟧.initializer.getText()])
         }
         return ⟦2-char-id⟧
-      }(⟦2-char-id⟧.startsWith("{") ? cJ : `{${cJ}}`);
+      }(⟦2-char-id⟧.startsWith("{") ? TB : `{${TB}}`);
       if (⟦2-char-id⟧) return ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = [];
       let ⟦2-char-id⟧ = null,
```

</details>

<details>
<summary>Hunk 76 · Change · +2 / -2</summary>

```diff
@@ -5065,14 +5065,14 @@
         const ⟦2-char-id⟧ = /\/\//.exec(⟦2-char-id⟧.replace(⟦2-char-id⟧, (⟦2-char-id⟧ => " ".repeat(⟦2-char-id⟧.length)))),
           ⟦2-char-id⟧ = (⟦2-char-id⟧ ? ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧.index) : ⟦2-char-id⟧).trim();
         if ("" === ⟦2-char-id⟧) continue;
-        if (⟦2-char-id⟧ && ⟦2-char-id⟧ > 0) ⟦2-char-id⟧[1] += `\n${cJ}`;
+        if (⟦2-char-id⟧ && ⟦2-char-id⟧ > 0) ⟦2-char-id⟧[1] += `\n${TB}`;
         else {
           const ⟦2-char-id⟧ = /^["']?([A-Za-z_$][\w$]*)["']?\s*[:=]\s*(.*)$/.exec(⟦2-char-id⟧.replace(/^[-*\u2022]\s*/, ""));
           if (!⟦2-char-id⟧) continue;
           ⟦2-char-id⟧ = [⟦2-char-id⟧[1], ⟦2-char-id⟧[2]], ⟦2-char-id⟧.push(⟦2-char-id⟧)
         }
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.replace(⟦2-char-id⟧, "");
-        ⟦2-char-id⟧ = Math.max(0, ⟦2-char-id⟧ + (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.match(/[[{(]/g)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? AJ : 0) - (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.match(/[\]})]/g)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? jJ : 0))
+        ⟦2-char-id⟧ = Math.max(0, ⟦2-char-id⟧ + (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.match(/[[{(]/g)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? JB : 0) - (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.match(/[\]})]/g)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? gB : 0))
       }
       return ⟦2-char-id⟧.map((⟦2-char-id⟧ => {
         let [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 77 · Change · +5 / -5</summary>

```diff
@@ -5086,21 +5086,21 @@
         ⟦2-char-id⟧ = ⟦2-char-id⟧;
       var ⟦2-char-id⟧;
       if (⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧) || !⟦2-char-id⟧ || (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = JSON.stringify(⟦2-char-id⟧.replace(/^["'`]|["'`]$/g, "")), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)), !⟦2-char-id⟧ || !⟦2-char-id⟧(⟦2-char-id⟧)) return {
-        problem: `${JJ.key} must be a plain value like ${JJ.value}, not ${cJ}`
+        problem: `${BB.key} must be a plain value like ${BB.value}, not ${TB}`
       };
       if ("number" === ⟦2-char-id⟧.kind && !⟦2-char-id⟧(⟦2-char-id⟧)) return {
-        problem: `${JJ.key} must be a number, like ${JJ.value}`
+        problem: `${BB.key} must be a number, like ${BB.value}`
       };
       if ("boolean" === ⟦2-char-id⟧.kind && ⟦2-char-id⟧.kind !== ⟦2-char-id⟧().SyntaxKind.TrueKeyword && ⟦2-char-id⟧.kind !== ⟦2-char-id⟧().SyntaxKind.FalseKeyword) return {
-        problem: `${JJ.key} must be true or false`
+        problem: `${BB.key} must be true or false`
       };
       if ("position" === ⟦2-char-id⟧.kind && ! function(⟦2-char-id⟧) {
           return ⟦2-char-id⟧().isArrayLiteralExpression(⟦2-char-id⟧) && 3 === ⟦2-char-id⟧.elements.length && ⟦2-char-id⟧.elements.every(⟦2-char-id⟧)
         }(⟦2-char-id⟧) && (⟦2-char-id⟧.kind !== ⟦2-char-id⟧().SyntaxKind.NullKeyword || "null" !== ⟦2-char-id⟧.value)) return {
-        problem: `${JJ.key} must be a position [x, y, z], like ${"null"===JJ.value?"[0, 10, 0]":JJ.value}`
+        problem: `${BB.key} must be a position [x, y, z], like ${"null"===BB.value?"[0, 10, 0]":BB.value}`
       };
       if ("list" === ⟦2-char-id⟧.kind && !⟦2-char-id⟧().isArrayLiteralExpression(⟦2-char-id⟧)) return {
-        problem: `${JJ.key} must be a list in [ ], like ${JJ.value}`
+        problem: `${BB.key} must be a list in [ ], like ${BB.value}`
       };
       if ("list" === ⟦2-char-id⟧.kind && ⟦2-char-id⟧.names && ⟦2-char-id⟧ && ⟦2-char-id⟧().isArrayLiteralExpression(⟦2-char-id⟧)) return function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧.elements.flatMap(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
```

</details>

<details>
<summary>Hunk 78 · Change · +1 / -1</summary>

```diff
@@ -5128,7 +5128,7 @@
             if (!⟦2-char-id⟧().isPropertyAssignment(⟦2-char-id⟧) || "item" !== ⟦2-char-id⟧.name.getText().replace(/["']/g, "") || !⟦2-char-id⟧ || !⟦2-char-id⟧().isObjectLiteralExpression(⟦2-char-id⟧)) return;
             const ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧.properties.find((⟦2-char-id⟧ => ⟦2-char-id⟧().isPropertyAssignment(⟦2-char-id⟧) && ⟦2-char-id⟧.name.getText().replace(/["']/g, "") === ⟦2-char-id⟧)),
               ⟦2-char-id⟧ = ⟦2-char-id⟧("action"),
-              ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.get(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.initializer)) && void 0 !== ⟦2-char-id⟧ ? cJ : "") : void 0;
+              ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.get(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.initializer)) && void 0 !== ⟦2-char-id⟧ ? TB : "") : void 0;
             return ⟦2-char-id⟧ ? {
               property: ⟦2-char-id⟧,
               item: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 79 · Change · +5 / -5</summary>

```diff
@@ -5137,16 +5137,16 @@
           };
         for (const ⟦2-char-id⟧ of [...⟦2-char-id⟧].reverse()) {
           var ⟦2-char-id⟧;
-          const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? sJ : "",
+          const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? OB : "",
             ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧),
             ⟦2-char-id⟧ = null === ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧) : void 0;
           if (⟦2-char-id⟧) {
-            const ⟦2-char-id⟧ = ⟦2-char-id⟧.named ? `item: ${JSON.stringify(UJ.item)}` : `item: ${JSON.stringify(UJ.item)}, name: ${JSON.stringify(JJ)}`;
-            ⟦2-char-id⟧.unshift(`"${JJ}" isn't an item, so it is a ${UJ.item}${UJ.named?"":` named "${JJ}"`}`), ⟦2-char-id⟧ = `${qJ.slice(0,UJ.property.getStart()-AJ)}${cJ}${qJ.slice(UJ.property.getEnd()-AJ)}`
-          } else null === ⟦2-char-id⟧ ? ⟦2-char-id⟧.unshift(`"${JJ}"`) : ⟦2-char-id⟧ !== ⟦2-char-id⟧ && (⟦2-char-id⟧.unshift(`"${JJ}" is "${cJ}"`), ⟦2-char-id⟧ = `${qJ.slice(0,nJ.getStart()-AJ)}${JSON.stringify(cJ)}${qJ.slice(nJ.getEnd()-AJ)}`)
+            const ⟦2-char-id⟧ = ⟦2-char-id⟧.named ? `item: ${JSON.stringify(yB.item)}` : `item: ${JSON.stringify(yB.item)}, name: ${JSON.stringify(BB)}`;
+            ⟦2-char-id⟧.unshift(`"${BB}" isn't an item, so it is a ${yB.item}${yB.named?"":` named "${BB}"`}`), ⟦2-char-id⟧ = `${YB.slice(0,yB.property.getStart()-JB)}${TB}${YB.slice(yB.property.getEnd()-JB)}`
+          } else null === ⟦2-char-id⟧ ? ⟦2-char-id⟧.unshift(`"${BB}"`) : ⟦2-char-id⟧ !== ⟦2-char-id⟧ && (⟦2-char-id⟧.unshift(`"${BB}" is "${TB}"`), ⟦2-char-id⟧ = `${YB.slice(0,DB.getStart()-JB)}${JSON.stringify(TB)}${YB.slice(DB.getEnd()-JB)}`)
         }
         if (⟦2-char-id⟧.length > 0) return {
-          problem: `${YJ.join(", ")} ${1===YJ.length?"item"===ZJ?"isn't an":"isn't a":"aren't"} ${ZJ} name${1===YJ.length?"":"s"}, so ${JJ.key} kept ${JJ.value}`
+          problem: `${oB.join(", ")} ${1===oB.length?"item"===dB?"isn't an":"isn't a":"aren't"} ${dB} name${1===oB.length?"":"s"}, so ${BB.key} kept ${BB.value}`
         };
         return {
           value: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 80 · Change · +3 / -3</summary>

```diff
@@ -5158,16 +5158,16 @@
       if (⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
         if (null === ⟦2-char-id⟧) return {
-          problem: `${JJ.key} must be text in quotes, like ${JJ.value}`
+          problem: `${BB.key} must be text in quotes, like ${BB.value}`
         };
         if (("block" === ⟦2-char-id⟧.kind || "item" === ⟦2-char-id⟧.kind || "mob" === ⟦2-char-id⟧.kind) && ⟦2-char-id⟧) {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.kind, ⟦2-char-id⟧);
           if (null === ⟦2-char-id⟧) return {
-            problem: `"${cJ}" isn't ${"item"===JJ.kind?"an":"a"} ${JJ.kind} name, so ${JJ.key} kept ${JJ.value}`
+            problem: `"${TB}" isn't ${"item"===BB.kind?"an":"a"} ${BB.kind} name, so ${BB.key} kept ${BB.value}`
           };
           if (⟦2-char-id⟧ !== ⟦2-char-id⟧) return {
             value: JSON.stringify(⟦2-char-id⟧),
-            fixed: `"${cJ}" is "${FJ}"`
+            fixed: `"${TB}" is "${VB}"`
           }
         }
       }
```

</details>

<details>
<summary>Hunk 81 · Change · +1 / -1</summary>

```diff
@@ -5185,7 +5185,7 @@
         economy: "coins, shops, upgrades and saved progress",
         rounds: "lobbies, countdowns and rounds that start and end",
         building: "building and changing blocks",
-        zh: "places, areas and random picks in the world",
+        JL: "places, areas and random picks in the world",
         players: "players' items, health, scores and teleports",
         screen: "text on players' screens and announcements"
       };
```

</details>

<details>
<summary>Hunk 82 · Change · +4 / -4</summary>

```diff
@@ -5197,21 +5197,21 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
-      return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧.name) === ⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧.title) === ⟦2-char-id⟧))) && void 0 !== ⟦2-char-id⟧ ? cJ : null
+      return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧.name) === ⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧.title) === ⟦2-char-id⟧))) && void 0 !== ⟦2-char-id⟧ ? TB : null
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
-      return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.name === ⟦2-char-id⟧))) && void 0 !== ⟦2-char-id⟧ ? cJ : null
+      return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.name === ⟦2-char-id⟧))) && void 0 !== ⟦2-char-id⟧ ? TB : null
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
       const ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
-        return 0 === ⟦2-char-id⟧.length ? "" : `const CONFIG = {\n${JJ.map((JJ=>{var ZJ;return`\⟦2-char-id⟧{⟦2-char-id⟧.key}: ${null!==(⟦2-char-id⟧=⟦2-char-id⟧.get(⟦2-char-id⟧.key))&&void 0!==⟦2-char-id⟧?ZJ:⟦2-char-id⟧.value}, // ${JJ.about}`})).join("\n")}\n}`
+        return 0 === ⟦2-char-id⟧.length ? "" : `const CONFIG = {\n${BB.map((BB=>{var dB;return`\⟦2-char-id⟧{⟦2-char-id⟧.key}: ${null!==(⟦2-char-id⟧=⟦2-char-id⟧.get(⟦2-char-id⟧.key))&&void 0!==⟦2-char-id⟧?dB:⟦2-char-id⟧.value}, // ${BB.about}`})).join("\n")}\n}`
       }(⟦2-char-id⟧.settings, ⟦2-char-id⟧);
-      return `${""===ZJ?"":`${⟦2-char-id⟧}\n\n`}${JJ.code.trim()}\n`
+      return `${""===dB?"":`${⟦2-char-id⟧}\n\n`}${BB.code.trim()}\n`
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 83 · Change · +1 / -1</summary>

```diff
@@ -5221,7 +5221,7 @@
           const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
           if (⟦2-char-id⟧ && !⟦2-char-id⟧.has(⟦2-char-id⟧.group)) {
             ⟦2-char-id⟧.add(⟦2-char-id⟧.group);
-            for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.uses) && void 0 !== ⟦2-char-id⟧ ? eJ : []) {
+            for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.uses) && void 0 !== ⟦2-char-id⟧ ? pB : []) {
               var ⟦2-char-id⟧;
               ⟦2-char-id⟧(⟦2-char-id⟧)
             }
```

</details>

<details>
<summary>Hunk 84 · Change · +1 / -1</summary>

```diff
@@ -5234,7 +5234,7 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧.replace(/\s+/g, ""),
-        ⟦2-char-id⟧ = new RegExp(`function ${cJ.name}\\s*\\([^)]*\\)\\s*\\{`).exec(⟦2-char-id⟧);
+        ⟦2-char-id⟧ = new RegExp(`function ${TB.name}\\s*\\([^)]*\\)\\s*\\{`).exec(⟦2-char-id⟧);
       return !!⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧.code).includes(⟦2-char-id⟧(⟦2-char-id⟧.slice(⟦2-char-id⟧.index, ⟦2-char-id⟧.index + 200)).slice(0, 60))
     }
 
```

</details>

<details>
<summary>Hunk 85 · Change · +1 / -1</summary>

```diff
@@ -5308,7 +5308,7 @@
           for (const [⟦2-char-id⟧, ⟦2-char-id⟧] of ⟦2-char-id⟧(⟦2-char-id⟧)) {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧.toLowerCase());
             if (!⟦2-char-id⟧) {
-              ⟦2-char-id⟧.push(`${JJ.name} has no setting ${AJ}`);
+              ⟦2-char-id⟧.push(`${BB.name} has no setting ${JB}`);
               continue
             }
             if (/^CONFIG\.\w+$/.test(⟦2-char-id⟧.trim())) continue;
```

</details>

<details>
<summary>Hunk 86 · Change · +1 / -1</summary>

```diff
@@ -5331,7 +5331,7 @@
         }, ⟦2-char-id⟧.values), {
           owner: ⟦2-char-id⟧.name,
           overrides: new Set(⟦2-char-id⟧.values.keys()),
-          heading: "" === ⟦2-char-id⟧.trim() ? void 0 : `// ---- ${cJ.title} (ready-made) ----`
+          heading: "" === ⟦2-char-id⟧.trim() ? void 0 : `// ---- ${TB.title} (ready-made) ----`
         });
       if (!⟦2-char-id⟧) return {
         error: ⟦2-char-id⟧(⟦2-char-id⟧) ? "The prefab couldn't be fitted into the code around it without breaking it. Put it into an empty file instead." : "The code around it doesn't parse (a bracket is likely missing), so the prefab couldn't be fitted in. Fix the code first."
```

</details>

<details>
<summary>Hunk 87 · Change · +8 / -8</summary>

```diff
@@ -5348,24 +5348,24 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return `- ${JJ.name}: ${JJ.summary}. Settings: ${JJ.settings.map((JJ=>JJ.key)).join(", ")}`
+      return `- ${BB.name}: ${BB.summary}. Settings: ${BB.settings.map((BB=>BB.key)).join(", ")}`
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.trim().toLowerCase()) && void 0 !== ⟦2-char-id⟧ ? cJ : "",
-        ⟦2-char-id⟧ = Object.keys(⟦2-char-id⟧).includes(⟦2-char-id⟧) ? ZJ : void 0,
+      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.trim().toLowerCase()) && void 0 !== ⟦2-char-id⟧ ? TB : "",
+        ⟦2-char-id⟧ = Object.keys(⟦2-char-id⟧).includes(⟦2-char-id⟧) ? dB : void 0,
         ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.filter((⟦2-char-id⟧ => ⟦2-char-id⟧.category === ⟦2-char-id⟧)) : ⟦2-char-id⟧,
         ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.filter((⟦2-char-id⟧ => ⟦2-char-id⟧.category === ⟦2-char-id⟧)) : [];
-      return `${FJ?`Prefabs for ${⟦2-char-id⟧[⟦2-char-id⟧]}:`:""===ZJ||"all"===ZJ?"Every prefab:":`There ⟦2-char-id⟧ ⟦2-char-id⟧ category ${⟦2-char-id⟧}. Every prefab:`}\n${UJ.length>0?UJ.map(EF).join("\n"):"(none yet)"}${eJ.length>0?`\nReady-made functions for ⟦2-char-id⟧ (call them; their code ⟦2-char-id⟧ added ⟦2-char-id⟧ itself):\⟦2-char-id⟧{⟦2-char-id⟧.map((⟦2-char-id⟧=>`- ${JJ.signature}: ${JJ.about}`)).join("\n")}`:""}${FJ?"":`\nCategories: ${Object.keys(⟦2-char-id⟧).join(", ")}`}`
+      return `${VB?`Prefabs for ${⟦2-char-id⟧[⟦2-char-id⟧]}:`:""===dB||"all"===dB?"Every prefab:":`There ⟦2-char-id⟧ ⟦2-char-id⟧ category ${⟦2-char-id⟧}. Every prefab:`}\n${yB.length>0?yB.map(fV).join("\n"):"(none yet)"}${pB.length>0?`\nReady-made functions for ⟦2-char-id⟧ (call them; their code ⟦2-char-id⟧ added ⟦2-char-id⟧ itself):\⟦2-char-id⟧{⟦2-char-id⟧.map((⟦2-char-id⟧=>`- ${BB.signature}: ${BB.about}`)).join("\n")}`:""}${VB?"":`\nCategories: ${Object.keys(⟦2-char-id⟧).join(", ")}`}`
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = [...⟦2-char-id⟧.settings, ...⟦2-char-id⟧(⟦2-char-id⟧)].map((⟦2-char-id⟧ => `- ${JJ.key} (${JJ.kind}, default ${JJ.value}): ${JJ.about}`)).join("\n"),
-        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.changeable) && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.length ? `\nFunctions to replace by name for a game of their own:\n${JJ.changeable.map((JJ=>`- ${⟦2-char-id⟧.name}: ${⟦2-char-id⟧.about}`)).join("\n")}` : "",
-        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? `\nIts code, as it goes in with the default settings:\n${nF(JJ)}` : "";
-      return `${JJ.name} (${JJ.title}): ${JJ.summary}.\nHow it plays: ${JJ.howItPlays}\nSettings:\n${FJ}${UJ}${JJ.setup?`\nThe creator sets up: ${⟦2-char-id⟧.setup}`:""}${eJ}`
+      const ⟦2-char-id⟧ = [...⟦2-char-id⟧.settings, ...⟦2-char-id⟧(⟦2-char-id⟧)].map((⟦2-char-id⟧ => `- ${BB.key} (${BB.kind}, default ${BB.value}): ${BB.about}`)).join("\n"),
+        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.changeable) && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.length ? `\nFunctions to replace by name for a game of their own:\n${BB.changeable.map((BB=>`- ${⟦2-char-id⟧.name}: ${⟦2-char-id⟧.about}`)).join("\n")}` : "",
+        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? `\nIts code, as it goes in with the default settings:\n${uV(BB)}` : "";
+      return `${BB.name} (${BB.title}): ${BB.summary}.\nHow it plays: ${BB.howItPlays}\nSettings:\n${VB}${yB}${BB.setup?`\nThe creator sets up: ${⟦2-char-id⟧.setup}`:""}${pB}`
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 88 · Change · +3 / -3</summary>

```diff
@@ -5373,10 +5373,10 @@
       const ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
           return new Set(⟦2-char-id⟧.toLowerCase().split(/[^a-z0-9]+/).filter((⟦2-char-id⟧ => ⟦2-char-id⟧.length > 1)))
         }(⟦2-char-id⟧),
-        ⟦2-char-id⟧ = ` ${JJ.toLowerCase().replace(/[^a-z0-9]+/g," ")} `;
+        ⟦2-char-id⟧ = ` ${BB.toLowerCase().replace(/[^a-z0-9]+/g," ")} `;
       return ⟦2-char-id⟧.map((⟦2-char-id⟧ => {
-        const ⟦2-char-id⟧ = ⟦2-char-id⟧.keywords.map((⟦2-char-id⟧ => ⟦2-char-id⟧.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim())).filter((⟦2-char-id⟧ => ⟦2-char-id⟧.includes(" ") ? ⟦2-char-id⟧.includes(` ${JJ} `) : ⟦2-char-id⟧.has(⟦2-char-id⟧))),
-          ⟦2-char-id⟧ = Math.min(...⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧.indexOf(` ${JJ} `))));
+        const ⟦2-char-id⟧ = ⟦2-char-id⟧.keywords.map((⟦2-char-id⟧ => ⟦2-char-id⟧.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim())).filter((⟦2-char-id⟧ => ⟦2-char-id⟧.includes(" ") ? ⟦2-char-id⟧.includes(` ${BB} `) : ⟦2-char-id⟧.has(⟦2-char-id⟧))),
+          ⟦2-char-id⟧ = Math.min(...⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧.indexOf(` ${BB} `))));
         return {
           prefab: ⟦2-char-id⟧,
           score: ⟦2-char-id⟧.length,
```

</details>

<details>
<summary>Hunk 89 · Change · +1 / -1</summary>

```diff
@@ -5412,7 +5412,7 @@
             }
             if ("object" !== typeof ⟦2-char-id⟧ || null === ⟦2-char-id⟧) return ⟦2-char-id⟧;
             const ⟦2-char-id⟧ = ⟦2-char-id⟧,
-              ⟦2-char-id⟧ = ⟦2-char-id⟧ => "string" === typeof ⟦2-char-id⟧ ? JJ : "boolean" === typeof ⟦2-char-id⟧ ? String(⟦2-char-id⟧) : Array.isArray(⟦2-char-id⟧) ? ⟦2-char-id⟧.filter((⟦2-char-id⟧ => "string" === typeof ⟦2-char-id⟧)).join("\n") : void 0,
+              ⟦2-char-id⟧ = ⟦2-char-id⟧ => "string" === typeof ⟦2-char-id⟧ ? BB : "boolean" === typeof ⟦2-char-id⟧ ? String(⟦2-char-id⟧) : Array.isArray(⟦2-char-id⟧) ? ⟦2-char-id⟧.filter((⟦2-char-id⟧ => "string" === typeof ⟦2-char-id⟧)).join("\n") : void 0,
               ⟦2-char-id⟧ = {
                 question: ⟦2-char-id⟧(⟦2-char-id⟧.question),
                 choices: ⟦2-char-id⟧(⟦2-char-id⟧.choices),
```

</details>

<details>
<summary>Hunk 90 · Change · +3 / -3</summary>

```diff
@@ -5426,11 +5426,11 @@
               })))
             }
           } catch {
-            return ⟦2-char-id⟧.startsWith("[") ? UJ : ⟦2-char-id⟧
+            return ⟦2-char-id⟧.startsWith("[") ? yB : ⟦2-char-id⟧
           }
         }(⟦2-char-id⟧),
-        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.question) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.replace(/\s+/g, " ").trim()) && void 0 !== ⟦2-char-id⟧ ? cJ : "",
-        ⟦2-char-id⟧ = (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.choices) && void 0 !== ⟦2-char-id⟧ ? FJ : "").includes("\n") ? (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.choices) && void 0 !== ⟦2-char-id⟧ ? UJ : "").split("\n") : (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.choices) && void 0 !== ⟦2-char-id⟧ ? eJ : "").split("|"),
+        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.question) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.replace(/\s+/g, " ").trim()) && void 0 !== ⟦2-char-id⟧ ? TB : "",
+        ⟦2-char-id⟧ = (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.choices) && void 0 !== ⟦2-char-id⟧ ? VB : "").includes("\n") ? (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.choices) && void 0 !== ⟦2-char-id⟧ ? yB : "").split("\n") : (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.choices) && void 0 !== ⟦2-char-id⟧ ? pB : "").split("|"),
         ⟦2-char-id⟧ = [...new Set(⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧.replace(/^\s*(?:[-*\u2022]|\d+[.)])\s*/, "").trim())).filter(Boolean))].slice(0, 4),
         ⟦2-char-id⟧ = "false" !== (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.allow_other) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.trim().toLowerCase());
       return "" === ⟦2-char-id⟧ || ⟦2-char-id⟧.test(⟦2-char-id⟧) || ⟦2-char-id⟧.length < 2 && !⟦2-char-id⟧ ? null : {
```

</details>

<details>
<summary>Hunk 91 · Change · +4 / -4</summary>

```diff
@@ -5449,10 +5449,10 @@
     }
     const ⟦2-char-id⟧ = /```(?:js|javascript|ts|typescript)?\n([\s\S]*?)```/g,
       ⟦2-char-id⟧ = String.raw`on[A-Z]\w*|tick|playerCommand`,
-      ⟦2-char-id⟧ = new RegExp(String.raw`^(?:(?:async\s+)?function\s+(?:${gF})\s*\(|(?:${gF})\s*=\s*(?:async\s+)?(?:function\b|\())`, "m"),
-      ⟦2-char-id⟧ = new RegExp(`^(?:${gF})$`),
-      ⟦2-char-id⟧ = new RegExp(String.raw`^(${gF})(\s*\([^()\n]*\)\s*\{)`, "gm"),
-      ⟦2-char-id⟧ = new RegExp(String.raw`\bapi\.|\bfunction\s+(?:${gF})\b|\buse_?prefab\s*\(`, "i");
+      ⟦2-char-id⟧ = new RegExp(String.raw`^(?:(?:async\s+)?function\s+(?:${cV})\s*\(|(?:${cV})\s*=\s*(?:async\s+)?(?:function\b|\())`, "m"),
+      ⟦2-char-id⟧ = new RegExp(`^(?:${cV})$`),
+      ⟦2-char-id⟧ = new RegExp(String.raw`^(${cV})(\s*\([^()\n]*\)\s*\{)`, "gm"),
+      ⟦2-char-id⟧ = new RegExp(String.raw`\bapi\.|\bfunction\s+(?:${cV})\b|\buse_?prefab\s*\(`, "i");
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       return ⟦2-char-id⟧.replace(/^\s*```[\w-]*[^\n]*\n/, "").replace(/\n?```\s*$/, "")
```

</details>

<details>
<summary>Hunk 92 · Change · +2 / -2</summary>

```diff
@@ -5465,11 +5465,11 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       switch (⟦2-char-id⟧) {
         case "view_file":
-          return void 0 === ⟦2-char-id⟧.path ? cJ : {
+          return void 0 === ⟦2-char-id⟧.path ? TB : {
             path: ⟦2-char-id⟧(⟦2-char-id⟧.path)
           };
         case "fetch_url":
-          return void 0 === ⟦2-char-id⟧.url ? cJ : {
+          return void 0 === ⟦2-char-id⟧.url ? TB : {
             url: ⟦2-char-id⟧(⟦2-char-id⟧.url)
           };
         default:
```

</details>

<details>
<summary>Hunk 93 · Change · +3 / -3</summary>

```diff
@@ -5515,9 +5515,9 @@
         })
       };
       let ⟦2-char-id⟧ = ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = Object.keys(⟦2-char-id⟧).some(⟦2-char-id⟧.f),
-        ⟦2-char-id⟧ = ⟦2-char-id⟧ => null !== ⟦2-char-id⟧ && ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧),
-        ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧) ? `${sJ.k}${(0,sJ.i)(JJ)}` : null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? eJ : ⟦2-char-id⟧(⟦2-char-id⟧),
+      const ⟦2-char-id⟧ = Object.keys(⟦2-char-id⟧).some(⟦2-char-id⟧.g),
+        ⟦2-char-id⟧ = ⟦2-char-id⟧ => null !== ⟦2-char-id⟧ && ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧),
+        ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧) ? `${OB.k}${(0,OB.j)(BB)}` : null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? pB : ⟦2-char-id⟧(⟦2-char-id⟧),
         ⟦2-char-id⟧ = ⟦2-char-id⟧ => void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧),
         ⟦2-char-id⟧ = ⟦2-char-id⟧ => void 0 !== ⟦2-char-id⟧ && !⟦2-char-id⟧.has(⟦2-char-id⟧),
         ⟦2-char-id⟧ = new Set,
```

</details>

<details>
<summary>Hunk 94 · Change · +4 / -4</summary>

```diff
@@ -5557,11 +5557,11 @@
               const ⟦2-char-id⟧ = ⟦2-char-id⟧.replace(/\s+/g, " ").trim();
               if (⟦2-char-id⟧.length <= 80) return ⟦2-char-id⟧;
               const ⟦2-char-id⟧ = ⟦2-char-id⟧.slice(0, 80);
-              return `${ZJ.slice(0,Math.max(ZJ.lastIndexOf(" "),40)).replace(/[\s,.;:]+$/,"")}\u2026`
-            }(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? cJ : ""),
-            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? FJ : [];
+              return `${dB.slice(0,Math.max(dB.lastIndexOf(" "),40)).replace(/[\s,.;:]+$/,"")}\u2026`
+            }(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? TB : ""),
+            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? VB : [];
           var ⟦2-char-id⟧;
-          ("" === ⟦2-char-id⟧ || ⟦2-char-id⟧.includes(⟦2-char-id⟧) || ⟦2-char-id⟧.set(⟦2-char-id⟧, [...⟦2-char-id⟧, ⟦2-char-id⟧]), "" !== ⟦2-char-id⟧) && ⟦2-char-id⟧.set(⟦2-char-id⟧, [...null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? XJ : [], {
+          ("" === ⟦2-char-id⟧ || ⟦2-char-id⟧.includes(⟦2-char-id⟧) || ⟦2-char-id⟧.set(⟦2-char-id⟧, [...⟦2-char-id⟧, ⟦2-char-id⟧]), "" !== ⟦2-char-id⟧) && ⟦2-char-id⟧.set(⟦2-char-id⟧, [...null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? lB : [], {
             why: ⟦2-char-id⟧,
             code: ⟦2-char-id⟧
           }])
```

</details>

<details>
<summary>Hunk 95 · Change · +4 / -4</summary>

```diff
@@ -5579,21 +5579,21 @@
           const ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
             return ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) : {
-              error: `There is no prefab called ${cJ}. The prefabs are: ${jF.map((JJ=>JJ.name)).join(", ")}.`
+              error: `There is no prefab called ${TB}. The prefabs are: ${oV.map((BB=>BB.name)).join(", ")}.`
             }
-          }(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? UJ : "", ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
+          }(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? yB : "", ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
           return "error" in ⟦2-char-id⟧ ? (⟦2-char-id⟧("use_prefab", ⟦2-char-id⟧, "prefab", {
             detail: ⟦2-char-id⟧.error
           }), !1) : (⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧.text, ⟦2-char-id⟧.add(⟦2-char-id⟧), ⟦2-char-id⟧.set(⟦2-char-id⟧, {
             prefab: ⟦2-char-id⟧.prefab,
             settings: ⟦2-char-id⟧
-          }), ⟦2-char-id⟧(⟦2-char-id⟧, null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? FJ : ⟦2-char-id⟧.prefab.title, ⟦2-char-id⟧.text), ⟦2-char-id⟧.push({
+          }), ⟦2-char-id⟧(⟦2-char-id⟧, null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? VB : ⟦2-char-id⟧.prefab.title, ⟦2-char-id⟧.text), ⟦2-char-id⟧.push({
             name: ⟦2-char-id⟧.prefab.name,
             title: ⟦2-char-id⟧.prefab.title,
             path: ⟦2-char-id⟧,
             problems: ⟦2-char-id⟧.problems,
             fixed: ⟦2-char-id⟧.fixed,
-            setup: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.prefab.setup) && void 0 !== ⟦2-char-id⟧ ? eJ : null
+            setup: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.prefab.setup) && void 0 !== ⟦2-char-id⟧ ? pB : null
           }), !0)
         },
         ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
```

</details>

<details>
<summary>Hunk 96 · Change · +1 / -1</summary>

```diff
@@ -5611,7 +5611,7 @@
         ⟦2-char-id⟧ = new Map;
       for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
         var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧.name)) && void 0 !== ⟦2-char-id⟧ ? Uc : 0;
+        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧.name)) && void 0 !== ⟦2-char-id⟧ ? yT : 0;
         ⟦2-char-id⟧.set(⟦2-char-id⟧.name, ⟦2-char-id⟧ + 1), ⟦2-char-id⟧ = {
           name: ⟦2-char-id⟧.name,
           nth: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 97 · Change · +1 / -1</summary>

```diff
@@ -5621,7 +5621,7 @@
             args: {
               ...⟦2-char-id⟧.args,
               code: ⟦2-char-id⟧.args.content,
-              path: null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.args.path) && void 0 !== ⟦2-char-id⟧ ? Ac : ⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧ ? Xc : ⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧ ? ec : void 0
+              path: null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.args.path) && void 0 !== ⟦2-char-id⟧ ? JT : ⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧ ? lT : ⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧ ? pT : void 0
             }
           } : ⟦2-char-id⟧,
           {
```

</details>

<details>
<summary>Hunk 98 · Change · +1 / -1</summary>

```diff
@@ -5632,7 +5632,7 @@
             code: ⟦2-char-id⟧
           } = ⟦2-char-id⟧.args,
           ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.name),
-          ⟦2-char-id⟧ = `${cJ.name}\n${JSON.stringify({...cJ.args,why:void 0})}`,
+          ⟦2-char-id⟧ = `${TB.name}\n${JSON.stringify({...TB.args,why:void 0})}`,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.has(⟦2-char-id⟧);
         if (⟦2-char-id⟧.annotations.idempotentHint && ⟦2-char-id⟧) ⟦2-char-id⟧ = ⟦2-char-id⟧.replace(⟦2-char-id⟧.source, "");
         else {
```

</details>

<details>
<summary>Hunk 99 · Change · +4 / -4</summary>

```diff
@@ -5652,21 +5652,21 @@
             if (void 0 === ⟦2-char-id⟧) continue;
             void 0 !== ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧.name, null, "missingArgs")
           } else if ("use_prefab" === ⟦2-char-id⟧.name) {
-            const ⟦2-char-id⟧ = void 0 !== ⟦2-char-id⟧ && "" !== ⟦2-char-id⟧.trim() ? ⟦2-char-id⟧(⟦2-char-id⟧) : void 0 === ⟦2-char-id⟧ ? null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? FJ : "index.js" : null;
+            const ⟦2-char-id⟧ = void 0 !== ⟦2-char-id⟧ && "" !== ⟦2-char-id⟧.trim() ? ⟦2-char-id⟧(⟦2-char-id⟧) : void 0 === ⟦2-char-id⟧ ? null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? VB : "index.js" : null;
             if (void 0 === ⟦2-char-id⟧.args.name || "" === ⟦2-char-id⟧.args.name.trim()) ⟦2-char-id⟧(⟦2-char-id⟧.name, ⟦2-char-id⟧, "missingArgs");
             else if (null !== ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧)) {
               var ⟦2-char-id⟧;
-              ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.args.name, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.args.settings) && void 0 !== ⟦2-char-id⟧ ? qc : "", ⟦2-char-id⟧.args.why)
+              ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.args.name, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.args.settings) && void 0 !== ⟦2-char-id⟧ ? YT : "", ⟦2-char-id⟧.args.why)
             } else ⟦2-char-id⟧(⟦2-char-id⟧.name, ⟦2-char-id⟧, "prefab", {
               detail: "A prefab goes in World Code, not in a code block."
             })
           } else if ("ask_creator" === ⟦2-char-id⟧.name) ⟦2-char-id⟧ ??= ⟦2-char-id⟧(⟦2-char-id⟧.args);
           else if ("plan" === ⟦2-char-id⟧.name) {
             var ⟦2-char-id⟧;
-            if (0 === ⟦2-char-id⟧.length) ⟦2-char-id⟧ = ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.args.steps) && void 0 !== ⟦2-char-id⟧ ? Yc : "")
+            if (0 === ⟦2-char-id⟧.length) ⟦2-char-id⟧ = ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.args.steps) && void 0 !== ⟦2-char-id⟧ ? oT : "")
           } else if ("remember" === ⟦2-char-id⟧.name) {
             var ⟦2-char-id⟧;
-            const ⟦2-char-id⟧ = ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.args.note) && void 0 !== ⟦2-char-id⟧ ? hc : "");
+            const ⟦2-char-id⟧ = ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.args.note) && void 0 !== ⟦2-char-id⟧ ? kT : "");
             null !== ⟦2-char-id⟧ && 0 === ⟦2-char-id⟧.length && ⟦2-char-id⟧.push(⟦2-char-id⟧)
           } else if ("export_game" === ⟦2-char-id⟧.name || "switch_to_world_code" === ⟦2-char-id⟧.name) {
             if ("switch_to_world_code" === ⟦2-char-id⟧.name && void 0 === ⟦2-char-id⟧) continue;
```

</details>

<details>
<summary>Hunk 100 · Change · +2 / -2</summary>

```diff
@@ -5681,9 +5681,9 @@
           } else if ("write_file" === ⟦2-char-id⟧.name) {
             var ⟦2-char-id⟧, ⟦2-char-id⟧;
             if (⟦2-char-id⟧(⟦2-char-id⟧))
-              if (void 0 === ⟦2-char-id⟧ || "" !== ⟦2-char-id⟧.trim() && !⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧), void 0 === ⟦2-char-id⟧ ? "" : null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧(⟦2-char-id⟧)]) && void 0 !== ⟦2-char-id⟧ ? nc : "")) {
+              if (void 0 === ⟦2-char-id⟧ || "" !== ⟦2-char-id⟧.trim() && !⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧), void 0 === ⟦2-char-id⟧ ? "" : null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧(⟦2-char-id⟧)]) && void 0 !== ⟦2-char-id⟧ ? DT : "")) {
                 if (void 0 !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)) ⟦2-char-id⟧(⟦2-char-id⟧);
-                else if (void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧)) && "" !== (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧(⟦2-char-id⟧)]) && void 0 !== ⟦2-char-id⟧ ? Gc : "").trim()) ⟦2-char-id⟧(⟦2-char-id⟧.name, ⟦2-char-id⟧(⟦2-char-id⟧), "unread", void 0 === ⟦2-char-id⟧ ? void 0 : {
+                else if (void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧)) && "" !== (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧(⟦2-char-id⟧)]) && void 0 !== ⟦2-char-id⟧ ? uT : "").trim()) ⟦2-char-id⟧(⟦2-char-id⟧.name, ⟦2-char-id⟧(⟦2-char-id⟧), "unread", void 0 === ⟦2-char-id⟧ ? void 0 : {
                   code: ⟦2-char-id⟧(⟦2-char-id⟧)
                 }), ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧));
                 else if (void 0 !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 101 · Change · +10 / -10</summary>

```diff
@@ -5702,35 +5702,35 @@
             const ⟦2-char-id⟧ = void 0 === ⟦2-char-id⟧ ? null : ⟦2-char-id⟧(⟦2-char-id⟧),
               ⟦2-char-id⟧ = "replace_function" === ⟦2-char-id⟧.name ? ⟦2-char-id⟧.args.name : ⟦2-char-id⟧.args.after,
               ⟦2-char-id⟧ = void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧(⟦2-char-id⟧),
-              ⟦2-char-id⟧ = null === ⟦2-char-id⟧ ? "" : null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? fc : "",
+              ⟦2-char-id⟧ = null === ⟦2-char-id⟧ ? "" : null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? HT : "",
               ⟦2-char-id⟧ = void 0 === ⟦2-char-id⟧ ? "" : ⟦2-char-id⟧(⟦2-char-id⟧),
               ⟦2-char-id⟧ = null === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.get(⟦2-char-id⟧),
               ⟦2-char-id⟧ = "replace_function" === ⟦2-char-id⟧.name && void 0 !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.test(⟦2-char-id⟧) && ⟦2-char-id⟧(⟦2-char-id⟧.prefab.code).has(⟦2-char-id⟧),
               ⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? null : ⟦2-char-id⟧ ? null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, {
                 owner: "extra",
                 runsLast: !0
-              })) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.text) && void 0 !== ⟦2-char-id⟧ ? xc : null : "replace_function" === ⟦2-char-id⟧.name ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
-            null === ⟦2-char-id⟧ || null === ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧.name, ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧) ? "brokenCode" : "missingArgs") : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) ? ⟦2-char-id⟧(⟦2-char-id⟧.name, ⟦2-char-id⟧, "placeholder") : "replace_function" === ⟦2-char-id⟧.name && ⟦2-char-id⟧(⟦2-char-id⟧) && ⟦2-char-id⟧(⟦2-char-id⟧).includes(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? FJ : "") ? (⟦2-char-id⟧(⟦2-char-id⟧.name, ⟦2-char-id⟧, "unread", {
+              })) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.text) && void 0 !== ⟦2-char-id⟧ ? ET : null : "replace_function" === ⟦2-char-id⟧.name ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
+            null === ⟦2-char-id⟧ || null === ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧.name, ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧) ? "brokenCode" : "missingArgs") : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) ? ⟦2-char-id⟧(⟦2-char-id⟧.name, ⟦2-char-id⟧, "placeholder") : "replace_function" === ⟦2-char-id⟧.name && ⟦2-char-id⟧(⟦2-char-id⟧) && ⟦2-char-id⟧(⟦2-char-id⟧).includes(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? VB : "") ? (⟦2-char-id⟧(⟦2-char-id⟧.name, ⟦2-char-id⟧, "unread", {
               code: ⟦2-char-id⟧(⟦2-char-id⟧)
             }), ⟦2-char-id⟧(⟦2-char-id⟧)) : (⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧.add(⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.args.why, ⟦2-char-id⟧))
           } else {
             var ⟦2-char-id⟧, ⟦2-char-id⟧;
-            const ⟦2-char-id⟧ = !0 === (null === (⟦2-char-id⟧ = ⟦2-char-id⟧._meta) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.appliesAtOnce) ? null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? eJ : FJ : void 0 === ⟦2-char-id⟧ ? null : ⟦2-char-id⟧(⟦2-char-id⟧),
-              ⟦2-char-id⟧ = null === ⟦2-char-id⟧ ? "" : null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? Ec : "",
+            const ⟦2-char-id⟧ = !0 === (null === (⟦2-char-id⟧ = ⟦2-char-id⟧._meta) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.appliesAtOnce) ? null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? pB : VB : void 0 === ⟦2-char-id⟧ ? null : ⟦2-char-id⟧(⟦2-char-id⟧),
+              ⟦2-char-id⟧ = null === ⟦2-char-id⟧ ? "" : null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? tT : "",
               ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧,
               ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) : null,
               ⟦2-char-id⟧ = null === ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.includes("\\n") ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧)) : null,
-              ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? qJ : ⟦2-char-id⟧,
-              ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ ? ⟦2-char-id⟧(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? hJ : "") : null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? hJ : "",
-              ⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? GJ : ⟦2-char-id⟧(⟦2-char-id⟧.slice(⟦2-char-id⟧.from, ⟦2-char-id⟧.to), ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, null !== ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧) : ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧.slice(⟦2-char-id⟧.to)));
+              ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? YB : ⟦2-char-id⟧,
+              ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ ? ⟦2-char-id⟧(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? kB : "") : null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? kB : "",
+              ⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? uB : ⟦2-char-id⟧(⟦2-char-id⟧.slice(⟦2-char-id⟧.from, ⟦2-char-id⟧.to), ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, null !== ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧) : ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧.slice(⟦2-char-id⟧.to)));
             if (null === ⟦2-char-id⟧ || null === ⟦2-char-id⟧) ⟦2-char-id⟧(⟦2-char-id⟧.name, ⟦2-char-id⟧, ⟦2-char-id⟧ ? "noMatch" : "missingArgs", {
               closest: ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) : null,
               functions: ⟦2-char-id⟧(⟦2-char-id⟧) ? ⟦2-char-id⟧(⟦2-char-id⟧) : []
             });
             else if (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.slice(⟦2-char-id⟧.from, ⟦2-char-id⟧.to))) ⟦2-char-id⟧(⟦2-char-id⟧.name, ⟦2-char-id⟧, "placeholder");
             else {
-              const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧) ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.from, ⟦2-char-id⟧.to, null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? AJ : "", ⟦2-char-id⟧) : null;
-              ⟦2-char-id⟧[⟦2-char-id⟧] = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? FJ : ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧.from) + ⟦2-char-id⟧ + ⟦2-char-id⟧.slice(⟦2-char-id⟧.to), ⟦2-char-id⟧.add(⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.args.why, ⟦2-char-id⟧)
+              const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧) ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.from, ⟦2-char-id⟧.to, null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? JB : "", ⟦2-char-id⟧) : null;
+              ⟦2-char-id⟧[⟦2-char-id⟧] = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? VB : ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧.from) + ⟦2-char-id⟧ + ⟦2-char-id⟧.slice(⟦2-char-id⟧.to), ⟦2-char-id⟧.add(⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.args.why, ⟦2-char-id⟧)
             }
           }
           ⟦2-char-id⟧ = ⟦2-char-id⟧.replace(⟦2-char-id⟧.source, "")
```

</details>

<details>
<summary>Hunk 102 · Change · +2 / -2</summary>

```diff
@@ -5740,9 +5740,9 @@
         var ⟦2-char-id⟧, ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = [...⟦2-char-id⟧.matchAll(⟦2-char-id⟧)],
           ⟦2-char-id⟧ = 1 === ⟦2-char-id⟧.length ? ⟦2-char-id⟧[0][1] : null,
-          ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? eJ : ⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧ ? Vc : "index.js";
+          ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? pB : ⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧ ? fT : "index.js";
         if (null !== ⟦2-char-id⟧ && ⟦2-char-id⟧(null, ⟦2-char-id⟧)) ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.replace(⟦2-char-id⟧[0][0], "");
-        else if (null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.test(⟦2-char-id⟧) && !⟦2-char-id⟧(⟦2-char-id⟧, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? Kc : "")) {
+        else if (null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.test(⟦2-char-id⟧) && !⟦2-char-id⟧(⟦2-char-id⟧, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? sT : "")) {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧));
           ⟦2-char-id⟧(⟦2-char-id⟧) && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, void 0) || (⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧.add(⟦2-char-id⟧)), ⟦2-char-id⟧ = ⟦2-char-id⟧.replace(⟦2-char-id⟧[0][0], "")
         }
```

</details>

<details>
<summary>Hunk 103 · Change · +7 / -7</summary>

```diff
@@ -5752,28 +5752,28 @@
         if (⟦2-char-id⟧(⟦2-char-id⟧)) {
           var ⟦2-char-id⟧;
           const ⟦2-char-id⟧ = Object.values(⟦2-char-id⟧).some((⟦2-char-id⟧ => /\brequire\s*\(/.test(⟦2-char-id⟧)));
-          ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧ ? ⟦2-char-id⟧[⟦2-char-id⟧] : ⟦2-char-id⟧[⟦2-char-id⟧].replace(/^module\.exports\s*=\s*(?:\{[\s\w$,:]*\}|[\w$]+)\s*;?[ \t]*(?:\n|$)/gm, "")), null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? Ic : "");
+          ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧ ? ⟦2-char-id⟧[⟦2-char-id⟧] : ⟦2-char-id⟧[⟦2-char-id⟧].replace(/^module\.exports\s*=\s*(?:\{[\s\w$,:]*\}|[\w$]+)\s*;?[ \t]*(?:\n|$)/gm, "")), null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? wT : "");
           const ⟦2-char-id⟧ = new Set(Object.keys(⟦2-char-id⟧).filter((⟦2-char-id⟧ => ⟦2-char-id⟧ !== ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧))).flatMap((⟦2-char-id⟧ => [...⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧])]))),
             ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧);
           ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧.text, ⟦2-char-id⟧.push(...⟦2-char-id⟧.added)
         }
-        const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧])), ⟦2-char-id⟧(⟦2-char-id⟧) ? UJ : [], null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? yc : "");
+        const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧])), ⟦2-char-id⟧(⟦2-char-id⟧) ? yB : [], null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? MT : "");
         ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧.code, ⟦2-char-id⟧.push(...⟦2-char-id⟧.renames)
       }
       for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
-        const ⟦2-char-id⟧ = ⟦2-char-id⟧.problems.length > 0 ? ` Kept as it was: ${sJ.problems.join("; ")}.` : "",
-          ⟦2-char-id⟧ = ⟦2-char-id⟧.fixed.length > 0 ? ` Names changed to real ones: ${sJ.fixed.join(", ")}.` : "";
-        ⟦2-char-id⟧ += `\n\nThis uses the ready-made ${sJ.title}.${cJ}${JJ}${sJ.setup?` ${⟦2-char-id⟧.setup}`:""}`
+        const ⟦2-char-id⟧ = ⟦2-char-id⟧.problems.length > 0 ? ` Kept as it was: ${OB.problems.join("; ")}.` : "",
+          ⟦2-char-id⟧ = ⟦2-char-id⟧.fixed.length > 0 ? ` Names changed to real ones: ${OB.fixed.join(", ")}.` : "";
+        ⟦2-char-id⟧ += `\n\nThis uses the ready-made ${OB.title}.${TB}${BB}${OB.setup?` ${⟦2-char-id⟧.setup}`:""}`
       }
       for (const {
           from: ⟦2-char-id⟧,
           to: ⟦2-char-id⟧
         }
-        of ⟦2-char-id⟧) ⟦2-char-id⟧ += `\n\nI renamed \`${sJ}\` to \`${IJ}\`, the name World Code calls.`;
+        of ⟦2-char-id⟧) ⟦2-char-id⟧ += `\n\nI renamed \`${OB}\` to \`${wB}\`, the name World Code calls.`;
       const ⟦2-char-id⟧ = [];
       for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
         var ⟦2-char-id⟧;
-        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? bc : "";
+        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? FT : "";
         if (⟦2-char-id⟧[⟦2-char-id⟧] !== ⟦2-char-id⟧) {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧);
           ⟦2-char-id⟧.push(⟦2-char-id⟧ ? {
```

</details>

<details>
<summary>Hunk 104 · Change · +7 / -7</summary>

```diff
@@ -5864,14 +5864,14 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      const ⟦2-char-id⟧ = null === ⟦2-char-id⟧.path ? ⟦2-char-id⟧.tool : `${JJ.tool} ${JJ.path}`;
+      const ⟦2-char-id⟧ = null === ⟦2-char-id⟧.path ? ⟦2-char-id⟧.tool : `${BB.tool} ${BB.path}`;
       var ⟦2-char-id⟧;
-      if ("prefab" === ⟦2-char-id⟧.reason) return `${cJ}: ${null!==(ZJ=JJ.detail)&&void 0!==ZJ?ZJ:"the prefab couldn't go in."} Nothing changed.`;
-      if ("missingArgs" === ⟦2-char-id⟧.reason) return `${cJ}: the call was missing an argument it needs, so nothing changed.`;
-      if ("placeholder" === ⟦2-char-id⟧.reason) return "write_file" === ⟦2-char-id⟧.tool ? `${cJ}: the content was only "..." or had a line standing in for the rest, so nothing changed. Send the whole file, every line of it.` : `${cJ}: the code had a line standing in for code left out ("// ... existing code ..."), so nothing changed. Write out every line it replaces.`;
-      if ("unread" === ⟦2-char-id⟧.reason) return `${cJ}: you hadn't seen this code, so writing it whole could have lost what it has, and nothing changed. Make the change from its code, which ${null!==JJ.path&&(0,sJ.f)(JJ.path)?"view_world_code":"view_file"} shows.`;
-      if ("brokenCode" === ⟦2-char-id⟧.reason) return `${cJ}: the code around that function doesn't parse (a bracket is likely missing), so where it ends isn't clear and nothing changed. Send the whole fixed file with write_file instead.`;
-      return `${cJ}: search matched nothing in the file, so nothing changed. ${JJ.closest?`The closest lines (${⟦2-char-id⟧.closest.line}-${⟦2-char-id⟧.closest.lastLine}) are:\⟦2-char-id⟧{⟦2-char-id⟧.closest.text}`:"No lines in the file are like it."}\nCopy the lines exactly${JJ.functions.length>0?`, ⟦2-char-id⟧ use replace_function with one of these names: ${⟦2-char-id⟧.functions.join(", ")}`:""}.`
+      if ("prefab" === ⟦2-char-id⟧.reason) return `${TB}: ${null!==(dB=BB.detail)&&void 0!==dB?dB:"the prefab couldn't go in."} Nothing changed.`;
+      if ("missingArgs" === ⟦2-char-id⟧.reason) return `${TB}: the call was missing an argument it needs, so nothing changed.`;
+      if ("placeholder" === ⟦2-char-id⟧.reason) return "write_file" === ⟦2-char-id⟧.tool ? `${TB}: the content was only "..." or had a line standing in for the rest, so nothing changed. Send the whole file, every line of it.` : `${TB}: the code had a line standing in for code left out ("// ... existing code ..."), so nothing changed. Write out every line it replaces.`;
+      if ("unread" === ⟦2-char-id⟧.reason) return `${TB}: you hadn't seen this code, so writing it whole could have lost what it has, and nothing changed. Make the change from its code, which ${null!==BB.path&&(0,OB.g)(BB.path)?"view_world_code":"view_file"} shows.`;
+      if ("brokenCode" === ⟦2-char-id⟧.reason) return `${TB}: the code around that function doesn't parse (a bracket is likely missing), so where it ends isn't clear and nothing changed. Send the whole fixed file with write_file instead.`;
+      return `${TB}: search matched nothing in the file, so nothing changed. ${BB.closest?`The closest lines (${⟦2-char-id⟧.closest.line}-${⟦2-char-id⟧.closest.lastLine}) are:\⟦2-char-id⟧{⟦2-char-id⟧.closest.text}`:"No lines in the file are like it."}\nCopy the lines exactly${BB.functions.length>0?`, ⟦2-char-id⟧ use replace_function with one of these names: ${⟦2-char-id⟧.functions.join(", ")}`:""}.`
     }
     const ⟦2-char-id⟧ = {
         offer: "matched",
```

</details>

<details>
<summary>Hunk 105 · Change · +2 / -2</summary>

```diff
@@ -5888,8 +5888,8 @@
         format: "simple",
         nativeTools: !1
       },
-      ⟦2-char-id⟧ = ⟦2-char-id⟧ => `You are the coding helper inside Bloxd's World Code editor. Bloxd is a voxel game; World Code is JavaScript that runs on the game server for one world. The person asking is a young creator (13 or older) who is new to coding.\n\nHow World Code works:\n- The engine calls special top-level functions ("callbacks") when things happen: function onPlayerJoin(playerId) {...}, function tick(ms) {...}, function playerCommand(playerId, command) {...} and the others ${JJ?"in the docs":"in the callback list"}. Define each callback once; never call callbacks yourself.\n- playerCommand gets the chat line without its "/" (e.g. "speed 2"); return true when you handled the command, so the player isn't told it is unknown.\n- tick(ms) runs 20 times a second, with the milliseconds since the last tick. Count time with it (add up ms) instead of setTimeout, and keep it light.\n- Talk to the game only through the api object: api.sendMessage(playerId, text), api.setClientOption(playerId, option, value) and the other methods ${JJ?"in the docs":"in the API list"}. Use only methods, callbacks and client options that are ${JJ?"in the docs":"in the lists below"}, with their exact names.\n- Item, block and mob names are case-sensitive, e.g. "Diamond Sword", "Red Wool", "Block of Gold", "Draugr Zombie". Use only names from the lists below. If what they asked for doesn't exist (e.g. there is no "Golden Apple"), use the closest real one and say so in your answer.\n- Pass arguments exactly as the docs describe. Leave optional arguments out instead of passing null or undefined, and don't pass later optional arguments just to reach one. The style argument of api.sendMessage and api.broadcastMessage is an object, e.g. { color: "green" }; positions are [x, y, z] arrays.\n- Text shown to players (messages, middle text, RightInfoText) must be a string: turn numbers into text with String(n) or a template string.\n- Variables at the top level keep their values while the world runs. Players are identified by playerId (a string, not their name).\n- Values you keep per player (lists, timers, scores, teams) need a start in onPlayerJoin and removing in onPlayerLeave(playerId), so tick never uses a player who left.\n- Use plain JavaScript (var/let/const, functions, objects, arrays). No import/export, no await, no DOM, no Node modules.\n- Settings: numbers and messages the creator may want to change (times, amounts, prices, speeds, messages shown to players, on/off switches) go in one const CONFIG = { ... } at the top of the file, each value a plain number, a quoted string or true/false with a short comment saying what it does, e.g. waveSeconds: 30, // seconds between zombie waves. The code uses CONFIG.waveSeconds, and a message that mentions a setting builds it from CONFIG ("You start with " + CONFIG.startCoins + " coins"), so changing the setting changes the message too. If the file has a CONFIG, add new settings to it and change a setting there; never make a second one. Don't move code they didn't ask about into CONFIG.\n\nRecipes for things the docs don't spell out:\n- A player's name: api.getEntityName(playerId).\n- Flying: api.setClientOption(playerId, "creative", true) (false to stop).\n- Leaderboard: in onPlayerJoin, api.setClientOption(playerId, "lobbyLeaderboardInfo", { name: { displayName: "Name", sortPriority: 0 }, coins: { displayName: "Coins", sortPriority: 1 } }); then whenever a value changes, api.setTargetedPlayerSettingForEveryone(playerId, "lobbyLeaderboardValues", { coins: 5 }, true).\n- Text on the right of the screen: api.setClientOption(playerId, "RightInfoText", "Coins: 5").\n- Full health: api.setHealth(playerId, api.getClientOption(playerId, "maxHealth")).\n- Teleporting somewhere nearby: change x and z only, and keep y (or add a little so they drop onto the ground), e.g. const [x, y, z] = api.getPosition(playerId); api.setPosition(playerId, x + dx, y + 5, z + dz).\n- Positions: api.getPosition(playerId) is the player's feet. The block under them is api.getBlock(Math.floor(x), Math.floor(y) - 1, Math.floor(z)).\n- A player who can't play any more (e.g. out of lives): api.setPlayerGamemode(playerId, "spectator"); "survival" brings them back.\n- Mob waves: api.attemptSpawnMob(mobType, x, y, z) returns the mob's id. Keep the ids, and remove each in onMobDespawned(mobId) to know when they are all dead.\n- Removing or changing a block later: count ms in tick, then api.setBlock(x, y, z, "Air").\n- Coins as a currency: make it once in onPlayerJoin, only if they don't have it yet (a saved one comes back by itself, and setCurrency again would reset it): if (api.getCurrencyAmount(playerId, "coins") === null) api.setCurrency(playerId, "coins", { amount: 0, icon: "coins" }). Then api.giveCurrencyAmount(playerId, "coins", 5). When the request says anything is saved or kept after leaving (e.g. "it saves if you leave"), the coins are saved too: add persistent: true. Otherwise leave it out.\n- Values the request says must stay after leaving (e.g. when they last claimed a reward): api.setPlayerDbValue(playerId, "lastClaim", Date.now()) and api.getPlayerDbValue(playerId, "lastClaim") (null if never set); a saved value is a string or a number. Only those: lives, scores, checkpoints and timers for one game stay in top-level variables, which reset when they leave.\n- A player dying, from anything: onAttemptKillPlayer(killedPlayerId, attackingLifeformId). onPlayerKilledOtherPlayer only covers kills by players.\n- Stopping one player hurting another (e.g. teammates): onPlayerDamagingOtherPlayer(attackingPlayer, damagedPlayer) returns "preventDamage". onAttemptKillPlayer only stops the death, not the damage.\n- A counter of how long each player has been alive: in tick, count only while api.isAlive(playerId), and start again from 0 in onRespawnRequest (the death screen isn't time alive). Other timers don't need this.\n- A reward for reaching a count (5 kills, 10 coins): give it when the count first reaches it (=== 5, or keep a per-player flag such as rewarded[playerId] = true), never on every count after (>= 5 alone gives it again each time).\n- Telling whether a player moved: compare with where they were after any teleport of yours (update the saved position when you teleport them), or your own teleport counts as them moving.\n- A box around a player: the floor is at Math.floor(y) - 1 (y is their feet) and the roof just above their head at Math.floor(y) + 2 (players are 2 blocks tall), e.g. api.setBlockWalls([bx - 2, by - 1, bz - 2], [bx + 2, by + 2, bz + 2], "Glass", true, true) with bx, by, bz the floored position. A bottom corner at by would fill the block they stand in; replacing the ground under them is fine. If they should be trapped, also stop them breaking it: api.setCantChangeBlockRect(playerId, [bx - 2, by - 1, bz - 2], [bx + 2, by + 2, bz + 2]).`,
-      ⟦2-char-id⟧ = ⟦2-char-id⟧ => `You are the coding helper inside Bloxd's code block editor. Bloxd is a voxel game; a code block is a block in the world holding JavaScript that runs on the game server when a player clicks it. The person asking is a young creator (13 or older) who is new to coding.\n\nHow code blocks work:\n- Each click runs the whole code once, from top to bottom. A code block has no callbacks: something that has to happen later or by itself (when players join, every tick, on a chat command, when a player breaks a block) needs World Code, the world's main code, where callbacks such as onPlayerJoin(playerId), tick() and playerCommand(playerId, command) are defined as functions. Write that part as World Code (see How to answer), and put what one click does in the code block.\n- myId is the id of the player who clicked the block (a string, not their name), and thisPos is the block's position as [x, y, z].\n- Talk to the game only through the api object: api.sendMessage(myId, text), api.setClientOption(myId, option, value) and the other methods ${JJ?"in the docs":"in the API list"}. Use only methods and client options that are ${JJ?"in the docs":"in the lists below"}, with their exact names.\n- Item, block and mob names are case-sensitive, e.g. "Diamond Sword", "Red Wool", "Block of Gold", "Draugr Zombie". Use only names from the lists below. If what they asked for doesn't exist (e.g. there is no "Golden Apple"), use the closest real one and say so in your answer.\n- Pass arguments exactly as the docs describe. Leave optional arguments out instead of passing null or undefined, and don't pass later optional arguments just to reach one. The style argument of api.sendMessage and api.broadcastMessage is an object, e.g. { color: "green" }; positions are [x, y, z] arrays.\n- Text shown to players (messages, middle text, RightInfoText) must be a string: turn numbers into text with String(n) or a template string.\n- Variables made with const or let start again on every click. A value kept between clicks is assigned without const or let, after checking it is there, e.g. clicks = (typeof clicks === "number" ? clicks : 0) + 1. It lasts until World Code is next saved or the world restarts.\n- When the last line has a value, the player who clicked sees it in chat as "Result: ...".\n- Use plain JavaScript (var/let/const, functions, objects, arrays). No import/export, no await, no DOM, no Node modules.\n\nRecipes for things the docs don't spell out:\n- A player's name: api.getEntityName(myId).\n- Teleporting the player onto this block: api.setPosition(myId, thisPos[0] + 0.5, thisPos[1] + 1, thisPos[2] + 0.5).\n- A block next to this one: api.setBlock(thisPos[0], thisPos[1] + 1, thisPos[2], "Block of Gold").\n- Flying: api.setClientOption(myId, "creative", true) (false to stop).\n- Text on the right of the screen: api.setClientOption(myId, "RightInfoText", "Coins: 5").\n- Full health: api.setHealth(myId, api.getClientOption(myId, "maxHealth")).\n- Teleporting somewhere nearby: change x and z only, and keep y (or add a little so they drop onto the ground), e.g. const [x, y, z] = api.getPosition(myId); api.setPosition(myId, x + dx, y + 5, z + dz).\n- Positions: api.getPosition(myId) is the player's feet. The block under them is api.getBlock(Math.floor(x), Math.floor(y) - 1, Math.floor(z)).\n- Coins as a currency: make it only if they don't have it yet (setCurrency again would reset it): if (api.getCurrencyAmount(myId, "coins") === null) api.setCurrency(myId, "coins", { amount: 0, icon: "coins" }). Then api.giveCurrencyAmount(myId, "coins", 5).\n- A box around the player: the floor is at Math.floor(y) - 1 (y is their feet) and the roof just above their head at Math.floor(y) + 2 (players are 2 blocks tall), e.g. api.setBlockWalls([bx - 2, by - 1, bz - 2], [bx + 2, by + 2, bz + 2], "Glass", true, true) with bx, by, bz the floored position.`,
+      ⟦2-char-id⟧ = ⟦2-char-id⟧ => `You are the coding helper inside Bloxd's World Code editor. Bloxd is a voxel game; World Code is JavaScript that runs on the game server for one world. The person asking is a young creator (13 or older) who is new to coding.\n\nHow World Code works:\n- The engine calls special top-level functions ("callbacks") when things happen: function onPlayerJoin(playerId) {...}, function tick(ms) {...}, function playerCommand(playerId, command) {...} and the others ${BB?"in the docs":"in the callback list"}. Define each callback once; never call callbacks yourself.\n- playerCommand gets the chat line without its "/" (e.g. "speed 2"); return true when you handled the command, so the player isn't told it is unknown.\n- tick(ms) runs 20 times a second, with the milliseconds since the last tick. Count time with it (add up ms) instead of setTimeout, and keep it light.\n- Talk to the game only through the api object: api.sendMessage(playerId, text), api.setClientOption(playerId, option, value) and the other methods ${BB?"in the docs":"in the API list"}. Use only methods, callbacks and client options that are ${BB?"in the docs":"in the lists below"}, with their exact names.\n- Item, block and mob names are case-sensitive, e.g. "Diamond Sword", "Red Wool", "Block of Gold", "Draugr Zombie". Use only names from the lists below. If what they asked for doesn't exist (e.g. there is no "Golden Apple"), use the closest real one and say so in your answer.\n- Pass arguments exactly as the docs describe. Leave optional arguments out instead of passing null or undefined, and don't pass later optional arguments just to reach one. The style argument of api.sendMessage and api.broadcastMessage is an object, e.g. { color: "green" }; positions are [x, y, z] arrays.\n- Text shown to players (messages, middle text, RightInfoText) must be a string: turn numbers into text with String(n) or a template string.\n- Variables at the top level keep their values while the world runs. Players are identified by playerId (a string, not their name).\n- Values you keep per player (lists, timers, scores, teams) need a start in onPlayerJoin and removing in onPlayerLeave(playerId), so tick never uses a player who left.\n- Use plain JavaScript (var/let/const, functions, objects, arrays). No import/export, no await, no DOM, no Node modules.\n- Settings: numbers and messages the creator may want to change (times, amounts, prices, speeds, messages shown to players, on/off switches) go in one const CONFIG = { ... } at the top of the file, each value a plain number, a quoted string or true/false with a short comment saying what it does, e.g. waveSeconds: 30, // seconds between zombie waves. The code uses CONFIG.waveSeconds, and a message that mentions a setting builds it from CONFIG ("You start with " + CONFIG.startCoins + " coins"), so changing the setting changes the message too. If the file has a CONFIG, add new settings to it and change a setting there; never make a second one. Don't move code they didn't ask about into CONFIG.\n\nRecipes for things the docs don't spell out:\n- A player's name: api.getEntityName(playerId).\n- Flying: api.setClientOption(playerId, "creative", true) (false to stop).\n- Leaderboard: in onPlayerJoin, api.setClientOption(playerId, "lobbyLeaderboardInfo", { name: { displayName: "Name", sortPriority: 0 }, coins: { displayName: "Coins", sortPriority: 1 } }); then whenever a value changes, api.setTargetedPlayerSettingForEveryone(playerId, "lobbyLeaderboardValues", { coins: 5 }, true).\n- Text on the right of the screen: api.setClientOption(playerId, "RightInfoText", "Coins: 5").\n- Full health: api.setHealth(playerId, api.getClientOption(playerId, "maxHealth")).\n- Teleporting somewhere nearby: change x and z only, and keep y (or add a little so they drop onto the ground), e.g. const [x, y, z] = api.getPosition(playerId); api.setPosition(playerId, x + dx, y + 5, z + dz).\n- Positions: api.getPosition(playerId) is the player's feet. The block under them is api.getBlock(Math.floor(x), Math.floor(y) - 1, Math.floor(z)).\n- A player who can't play any more (e.g. out of lives): api.setPlayerGamemode(playerId, "spectator"); "survival" brings them back.\n- Mob waves: api.attemptSpawnMob(mobType, x, y, z) returns the mob's id. Keep the ids, and remove each in onMobDespawned(mobId) to know when they are all dead.\n- Removing or changing a block later: count ms in tick, then api.setBlock(x, y, z, "Air").\n- Coins as a currency: make it once in onPlayerJoin, only if they don't have it yet (a saved one comes back by itself, and setCurrency again would reset it): if (api.getCurrencyAmount(playerId, "coins") === null) api.setCurrency(playerId, "coins", { amount: 0, icon: "coins" }). Then api.giveCurrencyAmount(playerId, "coins", 5). When the request says anything is saved or kept after leaving (e.g. "it saves if you leave"), the coins are saved too: add persistent: true. Otherwise leave it out.\n- Values the request says must stay after leaving (e.g. when they last claimed a reward): api.setPlayerDbValue(playerId, "lastClaim", Date.now()) and api.getPlayerDbValue(playerId, "lastClaim") (null if never set); a saved value is a string or a number. Only those: lives, scores, checkpoints and timers for one game stay in top-level variables, which reset when they leave.\n- A player dying, from anything: onAttemptKillPlayer(killedPlayerId, attackingLifeformId). onPlayerKilledOtherPlayer only covers kills by players.\n- Stopping one player hurting another (e.g. teammates): onPlayerDamagingOtherPlayer(attackingPlayer, damagedPlayer) returns "preventDamage". onAttemptKillPlayer only stops the death, not the damage.\n- A counter of how long each player has been alive: in tick, count only while api.isAlive(playerId), and start again from 0 in onRespawnRequest (the death screen isn't time alive). Other timers don't need this.\n- A reward for reaching a count (5 kills, 10 coins): give it when the count first reaches it (=== 5, or keep a per-player flag such as rewarded[playerId] = true), never on every count after (>= 5 alone gives it again each time).\n- Telling whether a player moved: compare with where they were after any teleport of yours (update the saved position when you teleport them), or your own teleport counts as them moving.\n- A box around a player: the floor is at Math.floor(y) - 1 (y is their feet) and the roof just above their head at Math.floor(y) + 2 (players are 2 blocks tall), e.g. api.setBlockWalls([bx - 2, by - 1, bz - 2], [bx + 2, by + 2, bz + 2], "Glass", true, true) with bx, by, bz the floored position. A bottom corner at by would fill the block they stand in; replacing the ground under them is fine. If they should be trapped, also stop them breaking it: api.setCantChangeBlockRect(playerId, [bx - 2, by - 1, bz - 2], [bx + 2, by + 2, bz + 2]).`,
+      ⟦2-char-id⟧ = ⟦2-char-id⟧ => `You are the coding helper inside Bloxd's code block editor. Bloxd is a voxel game; a code block is a block in the world holding JavaScript that runs on the game server when a player clicks it. The person asking is a young creator (13 or older) who is new to coding.\n\nHow code blocks work:\n- Each click runs the whole code once, from top to bottom. A code block has no callbacks: something that has to happen later or by itself (when players join, every tick, on a chat command, when a player breaks a block) needs World Code, the world's main code, where callbacks such as onPlayerJoin(playerId), tick() and playerCommand(playerId, command) are defined as functions. Write that part as World Code (see How to answer), and put what one click does in the code block.\n- myId is the id of the player who clicked the block (a string, not their name), and thisPos is the block's position as [x, y, z].\n- Talk to the game only through the api object: api.sendMessage(myId, text), api.setClientOption(myId, option, value) and the other methods ${BB?"in the docs":"in the API list"}. Use only methods and client options that are ${BB?"in the docs":"in the lists below"}, with their exact names.\n- Item, block and mob names are case-sensitive, e.g. "Diamond Sword", "Red Wool", "Block of Gold", "Draugr Zombie". Use only names from the lists below. If what they asked for doesn't exist (e.g. there is no "Golden Apple"), use the closest real one and say so in your answer.\n- Pass arguments exactly as the docs describe. Leave optional arguments out instead of passing null or undefined, and don't pass later optional arguments just to reach one. The style argument of api.sendMessage and api.broadcastMessage is an object, e.g. { color: "green" }; positions are [x, y, z] arrays.\n- Text shown to players (messages, middle text, RightInfoText) must be a string: turn numbers into text with String(n) or a template string.\n- Variables made with const or let start again on every click. A value kept between clicks is assigned without const or let, after checking it is there, e.g. clicks = (typeof clicks === "number" ? clicks : 0) + 1. It lasts until World Code is next saved or the world restarts.\n- When the last line has a value, the player who clicked sees it in chat as "Result: ...".\n- Use plain JavaScript (var/let/const, functions, objects, arrays). No import/export, no await, no DOM, no Node modules.\n\nRecipes for things the docs don't spell out:\n- A player's name: api.getEntityName(myId).\n- Teleporting the player onto this block: api.setPosition(myId, thisPos[0] + 0.5, thisPos[1] + 1, thisPos[2] + 0.5).\n- A block next to this one: api.setBlock(thisPos[0], thisPos[1] + 1, thisPos[2], "Block of Gold").\n- Flying: api.setClientOption(myId, "creative", true) (false to stop).\n- Text on the right of the screen: api.setClientOption(myId, "RightInfoText", "Coins: 5").\n- Full health: api.setHealth(myId, api.getClientOption(myId, "maxHealth")).\n- Teleporting somewhere nearby: change x and z only, and keep y (or add a little so they drop onto the ground), e.g. const [x, y, z] = api.getPosition(myId); api.setPosition(myId, x + dx, y + 5, z + dz).\n- Positions: api.getPosition(myId) is the player's feet. The block under them is api.getBlock(Math.floor(x), Math.floor(y) - 1, Math.floor(z)).\n- Coins as a currency: make it only if they don't have it yet (setCurrency again would reset it): if (api.getCurrencyAmount(myId, "coins") === null) api.setCurrency(myId, "coins", { amount: 0, icon: "coins" }). Then api.giveCurrencyAmount(myId, "coins", 5).\n- A box around the player: the floor is at Math.floor(y) - 1 (y is their feet) and the roof just above their head at Math.floor(y) + 2 (players are 2 blocks tall), e.g. api.setBlockWalls([bx - 2, by - 1, bz - 2], [bx + 2, by + 2, bz + 2], "Glass", true, true) with bx, by, bz the floored position.`,
       ⟦2-char-id⟧ = {
         search: "lines to find",
         replace: "lines to put instead",
```

</details>

<details>
<summary>Hunk 106 · Change · +1 / -1</summary>

```diff
@@ -5899,7 +5899,7 @@
         function: "function onPlayerJoin(playerId) {\n\t...the whole new function...\n}"
       },
       ⟦2-char-id⟧ = Object.values(⟦2-char-id⟧);
-    const ⟦2-char-id⟧ = `You looked at World Code: its files are below, their paths starting ${sJ.k}. Put the part of the request that needs World Code (a callback, or something that happens without a click) straight into World Code with the same calls, its path exactly as shown, e.g. ${sJ.k}index.js (in World Code the player is playerId; there is no myId or thisPos). A callback World Code already has is changed in place, with what it already does kept, never defined twice. Keep the code block's own change on the path ${sJ.d}, and leave it out if the request is all World Code. They are taken to World Code to see the change.`;
+    const ⟦2-char-id⟧ = `You looked at World Code: its files are below, their paths starting ${OB.k}. Put the part of the request that needs World Code (a callback, or something that happens without a click) straight into World Code with the same calls, its path exactly as shown, e.g. ${OB.k}index.js (in World Code the player is playerId; there is no myId or thisPos). A callback World Code already has is changed in place, with what it already does kept, never defined twice. Keep the code block's own change on the path ${OB.c}, and leave it out if the request is all World Code. They are taken to World Code to see the change.`;
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 107 · Change · +244 / -244</summary>

```diff
@@ -5910,312 +5910,312 @@
         listedPrefabs: ⟦2-char-id⟧,
         guidesToPrefabs: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.d : "index.js",
-        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? `${sJ.k}index.js` : ⟦2-char-id⟧,
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.c : "index.js",
+        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? `${OB.k}index.js` : ⟦2-char-id⟧,
         ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
         ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧.name === ⟦2-char-id⟧)),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.filter((⟦2-char-id⟧ => ["content", "replace", "code"].some((⟦2-char-id⟧ => ⟦2-char-id⟧ in ⟦2-char-id⟧.inputSchema.properties)))),
-        ⟦2-char-id⟧ = ⟦2-char-id⟧("edit_code_in_place") ? `\nFor a fix of one to a few lines in the code open in the editor, use edit_code_in_place instead: it changes their code straight away, as if they pressed Apply, and they can undo it. search is copied exactly from the open code:\n${xJ("edit_code_in_place",{why:"what this fix does",search:eU.search,replace:eU.replace})}` : "",
-        ⟦2-char-id⟧ = ⟦2-char-id⟧("export_game") ? `\nWhen the creator asks to export, save or publish their world or game, your answer must contain the export_game call; without it nothing is exported. For example, if the creator writes "export the world", your whole answer is:\nSaving your world as your custom game now!\n${xJ("export_game",{})}` : "",
-        ⟦2-char-id⟧ = ⟦2-char-id⟧("replace_function") ? `\nWhen you change only one or two functions or callbacks of a file that already has code, you can send just those instead of the whole file. replace_function finds a function by its name and puts your whole new function in its place; with a name the file doesn't have yet, it adds your new callback or function at the end, changing nothing already there:\n${xJ("replace_function",{path:fJ,name:"onPlayerJoin",why:"what the new function does",code:eU.function})}` : "",
-        ⟦2-char-id⟧ = ⟦2-char-id⟧("edit_file") ? `\nFor a file longer than 6000 characters, don't send it whole: change only the parts that need it, with replace_function where you can, and an edit_file call for each other part, where search is copied exactly from the current file:\n${xJ("edit_file",{path:nJ,why:"what this part's change does",search:eU.search,replace:eU.replace})}` : "",
-        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? `2. Then give the whole new code with a write_file call, exactly like this:\n${xJ("write_file",{path:nJ,why:"what the change does",content:eU.codeBlock})}` : `2. Then give every file you change, in full, with a write_file call, exactly like this:\n${xJ("write_file",{path:nJ,why:"what the change does",content:eU.file})}`,
-        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? "" : ` If there is no code yet, write it in ${nJ}.`,
+        ⟦2-char-id⟧ = ⟦2-char-id⟧("edit_code_in_place") ? `\nFor a fix of one to a few lines in the code open in the editor, use edit_code_in_place instead: it changes their code straight away, as if they pressed Apply, and they can undo it. search is copied exactly from the open code:\n${EB("edit_code_in_place",{why:"what this fix does",search:ly.search,replace:ly.replace})}` : "",
+        ⟦2-char-id⟧ = ⟦2-char-id⟧("export_game") ? `\nWhen the creator asks to export, save or publish their world or game, your answer must contain the export_game call; without it nothing is exported. For example, if the creator writes "export the world", your whole answer is:\nSaving your world as your custom game now!\n${EB("export_game",{})}` : "",
+        ⟦2-char-id⟧ = ⟦2-char-id⟧("replace_function") ? `\nWhen you change only one or two functions or callbacks of a file that already has code, you can send just those instead of the whole file. replace_function finds a function by its name and puts your whole new function in its place; with a name the file doesn't have yet, it adds your new callback or function at the end, changing nothing already there:\n${EB("replace_function",{path:HB,name:"onPlayerJoin",why:"what the new function does",code:ly.function})}` : "",
+        ⟦2-char-id⟧ = ⟦2-char-id⟧("edit_file") ? `\nFor a file longer than 6000 characters, don't send it whole: change only the parts that need it, with replace_function where you can, and an edit_file call for each other part, where search is copied exactly from the current file:\n${EB("edit_file",{path:DB,why:"what this part's change does",search:ly.search,replace:ly.replace})}` : "",
+        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? `2. Then give the whole new code with a write_file call, exactly like this:\n${EB("write_file",{path:DB,why:"what the change does",content:ly.codeBlock})}` : `2. Then give every file you change, in full, with a write_file call, exactly like this:\n${EB("write_file",{path:DB,why:"what the change does",content:ly.file})}`,
+        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? "" : ` If there is no code yet, write it in ${DB}.`,
         ⟦2-char-id⟧ = ⟦2-char-id⟧("switch_to_world_code", {}),
-        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧ ? `\n${AU}` : `\nIf part of the request needs World Code (a callback, or something that happens without a click), give that part as World Code with an add_world_code call, with its callbacks written as functions (in World Code the player is playerId; there is no myId or thisPos), exactly like this:\n${xJ("add_world_code",{code:eU.worldCode})}\n${YJ?"In your sentences, say which part goes in World Code: they are taken there, and it is put in for them.":"In your sentences, say which part goes in World Code and that they should press the World Code button to switch there and add it."} Leave out the code block's write_file call if the request is all World Code.${rJ("view_world_code")?`\nTo see what World Code already has before you write that part (a callback ⟦2-char-id⟧ may already define), look ⟦2-char-id⟧ ⟦2-char-id⟧ first:\⟦2-char-id⟧{⟦2-char-id⟧("view_world_code",{})}`:""}\nWhen the request is all World Code, also call switch_to_world_code after add_world_code: it takes them to World Code, where its AI Helper is asked to add your World Code part. Give a request instead when they asked to go to World Code for something else:\n${SJ}` : "",
+        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧ ? `\n${Yy}` : `\nIf part of the request needs World Code (a callback, or something that happens without a click), give that part as World Code with an add_world_code call, with its callbacks written as functions (in World Code the player is playerId; there is no myId or thisPos), exactly like this:\n${EB("add_world_code",{code:ly.worldCode})}\n${oB?"In your sentences, say which part goes in World Code: they are taken there, and it is put in for them.":"In your sentences, say which part goes in World Code and that they should press the World Code button to switch there and add it."} Leave out the code block's write_file call if the request is all World Code.${vB("view_world_code")?`\nTo see what World Code already has before you write that part (a callback ⟦2-char-id⟧ may already define), look ⟦2-char-id⟧ ⟦2-char-id⟧ first:\⟦2-char-id⟧{⟦2-char-id⟧("view_world_code",{})}`:""}\nWhen the request is all World Code, also call switch_to_world_code after add_world_code: it takes them to World Code, where its AI Helper is asked to add your World Code part. Give a request instead when they asked to go to World Code for something else:\n${zB}` : "",
         ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧("use_prefab") && ⟦2-char-id⟧.length >= 2,
         ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.slice(0, 3).map((⟦2-char-id⟧ => ⟦2-char-id⟧.title)).join("\n") : "A parkour race\nZombie survival\nCapture the flag",
         ⟦2-char-id⟧ = ⟦2-char-id⟧ ? " When you ask what kind of game they want, the choices are the 2 to 4 listed prefabs that fit the request best, by their titles: the one they pick is put in with use_prefab next." : "",
-        ⟦2-char-id⟧ = ⟦2-char-id⟧("ask_creator") ? `\nOnly if the request is too unclear to build anything sensible, ask instead of writing code: call ask_creator with one short question and 2 to 4 short choices, one per line. That is: no idea what kind of thing they want ("make a game"), or asking to make their game better, more fun or cooler without saying how ("make it more fun"): then the choices are 2 to 4 different ideas built on what their code already has, each a short concrete thing to add, not a general word like "more fun" (e.g. for a snowball fight: "Power-ups that drop in", "A score at the top", "Last player standing wins"). Otherwise build it, choosing sensibly, and say in your sentences what you chose so they can ask for something different. Never ask for personal details (name, age, school, where they live).${wJ}\n${xJ("ask_creator",{question:"What kind of game should it be?",choices:bJ,allow_other:"true"})}` : "",
-        ⟦2-char-id⟧ = ⟦2-char-id⟧("plan") ? `\n${"deepseek"===ZJ?"When a request is big, instead of writing it all at once, you may":"This request is big. Instead of writing it all at once, you may"} call plan with 2 to 5 short steps, one per line, each small enough to build and try on its own, the first one playable. Then send no code: the creator builds the steps one at a time. Build it at once instead if it is really only a few lines:\n${xJ("plan",{steps:"Give each player 0 coins when they join, shown on screen\nEarn a coin for each block broken\nA /shop command that sells a sword for 10 coins"})}` : "",
-        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[0]) && void 0 !== ⟦2-char-id⟧ ? UJ : ⟦2-char-id⟧("parkour"),
-        ⟦2-char-id⟧ = (null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.settings) && void 0 !== ⟦2-char-id⟧ ? eJ : []).slice(0, 2).map((⟦2-char-id⟧ => `${JJ.key}: ${JJ.value}`)).join("\n");
-      return `How to answer:\n1. Start with one or two short, friendly sentences in simple words saying what the change does, in the present tense as they read it before it goes in ("This adds...", "This changes..."; or what was wrong), and anything you had to do differently from what they asked. Don't promise it works: they will press Submit and try it. No long lectures.\n${KJ}${EJ}${VJ}${mJ}${IJ}${rJ("use_prefab")?`\nFor a game, ⟦2-char-id⟧ a feature (a kit, a shop, rewards...), that a prefab listed below fits, put the prefab in with use_prefab instead of writing that code yourself: ⟦2-char-id⟧ ⟦2-char-id⟧ tested code that works, and ⟦2-char-id⟧ fits around the code they already have: their code stays as ⟦2-char-id⟧ ⟦2-char-id⟧, and where both have the same callback (onPlayerJoin...) both run, ⟦2-char-id⟧ never rewrite their code ⟦2-char-id⟧ make room for a prefab. Give only the settings the request changes, one per line as key: value, each value written as in JavaScript (text in quotes, positions as [x, y, z]); the rest keep their defaults. For a game like the one asked for but not the same, still use the closest prefab, then in the same answer, after the use_prefab call, change what ⟦2-char-id⟧ doesn't do: replace one of its functions by name, or add a callback, with replace_function. If no prefab fits, write the code yourself:\n${xJ("use_prefab",{name:null!==(XJ=null===HJ||void 0===HJ?void 0:HJ.name)&&void 0!==XJ?XJ:"parkour",settings:PJ,why:null!==(AJ=null===HJ||void 0===HJ?void 0:HJ.summary)&&void 0!==AJ?AJ:"a parkour course"})}`:""}${QJ}${WJ}${gJ}${rJ("remember")?`\nIf the creator tells you something lasting about their game that later requests should know (its idea, its rules, names of teams, items or places in it), also call remember with one short sentence about the game. They are asked before it is kept. Only what they said, never personal details, and not what the code already shows:\n${xJ("remember",{note:"A zombie survival game: a wave comes every 30 seconds and players start with a sword"})}`:""}${function(JJ,cJ,ZJ){const FJ=JJ.some((JJ=>"fetch_url"===JJ.name)),UJ={view_file:`To see another of their files from the list, before you change it:\n${cJ("view_file",{path:"shop.js"})}`,view_world_code:`To see World Code, so you can change it yourself:\n${cJ("view_world_code",{})}`,view_chunk:`To see the blocks around the player (or give a position "x y z" for another chunk near them):\n${cJ("view_chunk",{})}`,view_game_state:`To see where the player is, their health, what they hold and carry, and the players and mobs near them:\n${cJ("view_game_state",{})}`,fetch_url:`To read the docs: ${GJ.f} lists every docs page with its link. Read it, then the page you need (for a long page, the part that has it):\n${cJ("fetch_url",{url:GJ.f})}`,get_docs:FJ?`Or, for a name you already know, read its docs in full, or list every api method, callback or client option by name (${Gc}):\n${cJ("get_docs",{name:"setClientOption"})}\n${cJ("get_docs",{list:"callbacks"})}`:`To read the full docs of an api method, callback or client option the lists only name:\n${cJ("get_docs",{name:"setClientOption"})}`,find_names:`To find the exact names of blocks, items or mobs:\n${cJ("find_names",{words:"gold sword"})}`,view_errors:`To see all the errors their world showed, not only the newest:\n${cJ("view_errors",{})}`,list_prefabs:`To see the prefabs for one kind of game, and the ready-made functions for it:\n${cJ("list_prefabs",{category:"pvp"})}`,view_prefab:`To see one prefab in full, every setting and the functions to replace to change it, before you use it:\n${cJ("view_prefab",{name:"parkour"})}`},eJ=JJ.flatMap((JJ=>{const cJ=UJ[JJ.name];return void 0===cJ?[]:[cJ]}));return 0===eJ.length?ZJ?"\nYou have looked things up as many times as you can: answer now with what you found.":"":`\
+        ⟦2-char-id⟧ = ⟦2-char-id⟧("ask_creator") ? `\nOnly if the request is too unclear to build anything sensible, ask instead of writing code: call ask_creator with one short question and 2 to 4 short choices, one per line. That is: no idea what kind of thing they want ("make a game"), or asking to make their game better, more fun or cooler without saying how ("make it more fun"): then the choices are 2 to 4 different ideas built on what their code already has, each a short concrete thing to add, not a general word like "more fun" (e.g. for a snowball fight: "Power-ups that drop in", "A score at the top", "Last player standing wins"). Otherwise build it, choosing sensibly, and say in your sentences what you chose so they can ask for something different. Never ask for personal details (name, age, school, where they live).${KB}\n${EB("ask_creator",{question:"What kind of game should it be?",choices:FB,allow_other:"true"})}` : "",
+        ⟦2-char-id⟧ = ⟦2-char-id⟧("plan") ? `\n${"deepseek"===dB?"When a request is big, instead of writing it all at once, you may":"This request is big. Instead of writing it all at once, you may"} call plan with 2 to 5 short steps, one per line, each small enough to build and try on its own, the first one playable. Then send no code: the creator builds the steps one at a time. Build it at once instead if it is really only a few lines:\n${EB("plan",{steps:"Give each player 0 coins when they join, shown on screen\nEarn a coin for each block broken\nA /shop command that sells a sword for 10 coins"})}` : "",
+        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[0]) && void 0 !== ⟦2-char-id⟧ ? yB : ⟦2-char-id⟧("parkour"),
+        ⟦2-char-id⟧ = (null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.settings) && void 0 !== ⟦2-char-id⟧ ? pB : []).slice(0, 2).map((⟦2-char-id⟧ => `${BB.key}: ${BB.value}`)).join("\n");
+      return `How to answer:\n1. Start with one or two short, friendly sentences in simple words saying what the change does, in the present tense as they read it before it goes in ("This adds...", "This changes..."; or what was wrong), and anything you had to do differently from what they asked. Don't promise it works: they will press Submit and try it. No long lectures.\n${sB}${tB}${fB}${iB}${wB}${vB("use_prefab")?`\nFor a game, ⟦2-char-id⟧ a feature (a kit, a shop, rewards...), that a prefab listed below fits, put the prefab in with use_prefab instead of writing that code yourself: ⟦2-char-id⟧ ⟦2-char-id⟧ tested code that works, and ⟦2-char-id⟧ fits around the code they already have: their code stays as ⟦2-char-id⟧ ⟦2-char-id⟧, and where both have the same callback (onPlayerJoin...) both run, ⟦2-char-id⟧ never rewrite their code ⟦2-char-id⟧ make room for a prefab. Give only the settings the request changes, one per line as key: value, each value written as in JavaScript (text in quotes, positions as [x, y, z]); the rest keep their defaults. For a game like the one asked for but not the same, still use the closest prefab, then in the same answer, after the use_prefab call, change what ⟦2-char-id⟧ doesn't do: replace one of its functions by name, or add a callback, with replace_function. If no prefab fits, write the code yourself:\n${EB("use_prefab",{name:null!==(lB=null===cB||void 0===cB?void 0:cB.name)&&void 0!==lB?lB:"parkour",settings:SB,why:null!==(JB=null===cB||void 0===cB?void 0:cB.summary)&&void 0!==JB?JB:"a parkour course"})}`:""}${NB}${rB}${IB}${vB("remember")?`\nIf the creator tells you something lasting about their game that later requests should know (its idea, its rules, names of teams, items or places in it), also call remember with one short sentence about the game. They are asked before it is kept. Only what they said, never personal details, and not what the code already shows:\n${EB("remember",{note:"A zombie survival game: a wave comes every 30 seconds and players start with a sword"})}`:""}${function(BB,TB,dB){const VB=BB.some((BB=>"fetch_url"===BB.name)),yB={view_file:`To see another of their files from the list, before you change it:\n${TB("view_file",{path:"shop.js"})}`,view_world_code:`To see World Code, so you can change it yourself:\n${TB("view_world_code",{})}`,view_chunk:`To see the blocks around the player (or give a position "x y z" for another chunk near them):\n${TB("view_chunk",{})}`,view_game_state:`To see where the player is, their health, what they hold and carry, and the players and mobs near them:\n${TB("view_game_state",{})}`,fetch_url:`To read the docs: ${uB.k} lists every docs page with its link. Read it, then the page you need (for a long page, the part that has it):\n${TB("fetch_url",{url:uB.k})}`,get_docs:VB?`Or, for a name you already know, read its docs in full, or list every api method, callback or client option by name (${uT}):\n${TB("get_docs",{name:"setClientOption"})}\n${TB("get_docs",{list:"callbacks"})}`:`To read the full docs of an api method, callback or client option the lists only name:\n${TB("get_docs",{name:"setClientOption"})}`,find_names:`To find the exact names of blocks, items or mobs:\n${TB("find_names",{words:"gold sword"})}`,view_errors:`To see all the errors their world showed, not only the newest:\n${TB("view_errors",{})}`,list_prefabs:`To see the prefabs for one kind of game, and the ready-made functions for it:\n${TB("list_prefabs",{category:"pvp"})}`,view_prefab:`To see one prefab in full, every setting and the functions to replace to change it, before you use it:\n${TB("view_prefab",{name:"parkour"})}`},pB=BB.flatMap((BB=>{const TB=yB[BB.name];return void 0===TB?[]:[TB]}));return 0===pB.length?dB?"\nYou have looked things up as many times as you can: answer now with what you found.":"":`\
       nIf you need to see something before you can answer well, look it up first: answer with only look - up calls, no other words and no code, and you are asked again with what they found.$ {
-        FJ ? "The docs aren't in this message: before you use ⟦2-char-id⟧ api method, callback ⟦2-char-id⟧ client option, look ⟦2-char-id⟧ any you aren't sure of, with llms.txt where you can. Make every look-up you need in one answer where you can, up to 4." : "Most requests need no look-up: only look when the answer depends on it."
+        VB ? "The docs aren't in this message: before you use ⟦2-char-id⟧ api method, callback ⟦2-char-id⟧ client option, look ⟦2-char-id⟧ any you aren't sure of, with llms.txt where you can. Make every look-up you need in one answer where you can, up to 4." : "Most requests need no look-up: only look when the answer depends on it."
       }\
       n$ {
-        eJ.join("\n")
-      }
-      `}(JJ,xJ,jJ)}\nGive each call that changes code a why: a few plain words the creator sees beside that change, e.g. "gives everyone a sword when they join".\n3. Keep everything that already works; change only what the request needs. Don't add commands ⟦2-char-id⟧ features they didn't ask for: suggest them in your answer instead.${yJ}\n4. If the request is not about their ${cJ?"code block":"World Code"}, or asks for something unsafe or unkind, say briefly that you can only help with their game's code.\nDo not put code anywhere except in ${⟦2-char-id⟧.map((⟦2-char-id⟧=>⟦2-char-id⟧.name)).join(" or ")} calls. ${function(⟦2-char-id⟧){return ⟦2-char-id⟧[⟦2-char-id⟧].callStyle}(⟦2-char-id⟧)}`
-    }
-
-    function jU(JJ, cJ, ZJ) {
-      return Object.keys(JJ).filter((JJ => !ZJ || !(0, sJ.f)(JJ))).sort(((JJ, ZJ) => (ZJ === cJ ? 1 : 0) - (JJ === cJ ? 1 : 0) || JJ.localeCompare(ZJ)))
-    }
-
-    function YU(JJ, cJ, ZJ) {
-      var FJ;
-      const UJ = jU(JJ, cJ, ZJ);
-      return null !== cJ && UJ.includes(cJ) ? cJ : null !== (FJ = UJ[0]) && void 0 !== FJ ? FJ : null
-    }
-
-    function hU(JJ) {
-      const cJ = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}${⟦2-char-id⟧.includes("index.ts")?"index.ts":"index.js"}`;
+        pB.join("\n")
+      }
+      `}(BB,EB,gB)}\nGive each call that changes code a why: a few plain words the creator sees beside that change, e.g. "gives everyone a sword when they join".\n3. Keep everything that already works; change only what the request needs. Don't add commands ⟦2-char-id⟧ features they didn't ask for: suggest them in your answer instead.${MB}\n4. If the request is not about their ${TB?"code block":"World Code"}, or asks for something unsafe or unkind, say briefly that you can only help with their game's code.\nDo not put code anywhere except in ${⟦2-char-id⟧.map((⟦2-char-id⟧=>⟦2-char-id⟧.name)).join(" or ")} calls. ${function(⟦2-char-id⟧){return ⟦2-char-id⟧[⟦2-char-id⟧].callStyle}(⟦2-char-id⟧)}`
+    }
+
+    function oy(BB, TB, dB) {
+      return Object.keys(BB).filter((BB => !dB || !(0, OB.g)(BB))).sort(((BB, dB) => (dB === TB ? 1 : 0) - (BB === TB ? 1 : 0) || BB.localeCompare(dB)))
+    }
+
+    function ky(BB, TB, dB) {
+      var VB;
+      const yB = oy(BB, TB, dB);
+      return null !== TB && yB.includes(TB) ? TB : null !== (VB = yB[0]) && void 0 !== VB ? VB : null
+    }
+
+    function Ly(BB) {
+      const TB = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}${⟦2-char-id⟧.includes("index.ts")?"index.ts":"index.js"}`;
       return `Only ${⟦2-char-id⟧} runs ⟦2-char-id⟧ itself: another file runs when ${⟦2-char-id⟧} imports ⟦2-char-id⟧ requires ⟦2-char-id⟧, ⟦2-char-id⟧ keep the import, require and export lines their files have (⟦2-char-id⟧ import/export ⟦2-char-id⟧ for one file), and put callbacks in ${⟦2-char-id⟧}.\n`
     }
 
-    function DU(JJ, cJ) {
-      var ZJ;
+    function Oy(BB, TB) {
+      var dB;
       const {
-        files: FJ,
-        activePath: UJ
-      } = JJ, eJ = !0 === JJ.codeBlock, XJ = jU(FJ, UJ, eJ);
-      if (0 === XJ.length || XJ.every((JJ => "" === FJ[JJ].trim()))) return eJ ? "There is no code yet: the code block is empty." : XJ.includes("index.ts") ? "There is no code yet: index.ts is empty. Write it in index.ts." : "There is no code yet: index.js is empty.";
-      const AJ = null !== (ZJ = YU(FJ, UJ, eJ)) && void 0 !== ZJ ? ZJ : XJ[0];
-      return `${⟦2-char-id⟧.length>1?`Their files:\n${XJ.map((JJ=>{const cJ=""===(ZJ=FJ[JJ])?0:ZJ.replace(/\n$/,"").split("\n").length;var ZJ;return`- ${⟦2-char-id⟧}: ${1===⟦2-char-id⟧?"1 line":`${cJ} lines`}${⟦2-char-id⟧===⟦2-char-id⟧?" (open in the editor, its code below)":""}`})).join("\n")}\n${eJ?"":hU(XJ)}\n`:""}${function(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧.map((⟦2-char-id⟧=>⟦2-char-id⟧[⟦2-char-id⟧].fileResult(⟦2-char-id⟧,⟦2-char-id⟧[⟦2-char-id⟧],⟦2-char-id⟧===⟦2-char-id⟧))).join("\n\n")}(⟦2-char-id⟧,[⟦2-char-id⟧],⟦2-char-id⟧,⟦2-char-id⟧)}`
-    }
-
-    function sU(JJ) {
-      var cJ, ZJ, FJ, UJ, eJ, XJ;
+        files: VB,
+        activePath: yB
+      } = BB, pB = !0 === BB.codeBlock, lB = oy(VB, yB, pB);
+      if (0 === lB.length || lB.every((BB => "" === VB[BB].trim()))) return pB ? "There is no code yet: the code block is empty." : lB.includes("index.ts") ? "There is no code yet: index.ts is empty. Write it in index.ts." : "There is no code yet: index.js is empty.";
+      const JB = null !== (dB = ky(VB, yB, pB)) && void 0 !== dB ? dB : lB[0];
+      return `${⟦2-char-id⟧.length>1?`Their files:\n${lB.map((BB=>{const TB=""===(dB=VB[BB])?0:dB.replace(/\n$/,"").split("\n").length;var dB;return`- ${⟦2-char-id⟧}: ${1===⟦2-char-id⟧?"1 line":`${TB} lines`}${⟦2-char-id⟧===⟦2-char-id⟧?" (open in the editor, its code below)":""}`})).join("\n")}\n${pB?"":Ly(lB)}\n`:""}${function(⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧,⟦2-char-id⟧){return ⟦2-char-id⟧.map((⟦2-char-id⟧=>⟦2-char-id⟧[⟦2-char-id⟧].fileResult(⟦2-char-id⟧,⟦2-char-id⟧[⟦2-char-id⟧],⟦2-char-id⟧===⟦2-char-id⟧))).join("\n\n")}(⟦2-char-id⟧,[⟦2-char-id⟧],⟦2-char-id⟧,⟦2-char-id⟧)}`
+    }
+
+    function Dy(BB) {
+      var TB, dB, VB, yB, pB, lB;
       return {
-        codeBlock: !0 === JJ.codeBlock,
-        hasCode: "" !== (null !== (cJ = JJ.files[null !== (ZJ = JJ.activePath) && void 0 !== ZJ ? ZJ : ""]) && void 0 !== cJ ? cJ : "").trim(),
-        hasBigFile: Object.values(JJ.files).some((JJ => JJ.length > 6e3)),
-        wantsExport: LF(JJ.request),
-        canAsk: !0 === JJ.canAsk,
-        canRemember: !0 === (null === (FJ = JJ.about) || void 0 === FJ ? void 0 : FJ.canRemember),
-        isBigRequest: qc(JJ.request),
-        canLookUp: !0 === JJ.canLookUp,
-        hasOtherFiles: Object.keys(JJ.files).length > 1,
-        hasErrors: JJ.errors.length > 0,
-        canChangeWorldCode: !0 === JJ.canChangeWorldCode,
-        hasWorldCodeFiles: Object.keys(JJ.files).some(sJ.f),
-        offersPrefabs: (UJ = JJ.request, eJ = JJ.files, XJ = nU(JJ), "never" !== XJ.offer && ("always" === XJ.offer || yF(UJ, 1).length > 0 || qc(UJ) || !cU(eJ) && JU.test(UJ))),
-        listsPrefabs: nU(JJ).categories,
-        looksUpDocs: !0 === JJ.looksUpDocs
-      }
-    }
-
-    function nU(JJ) {
-      var cJ;
-      return null !== (cJ = JJ.prefabs) && void 0 !== cJ ? cJ : lF
-    }
-
-    function GU(JJ, cJ) {
-      return "deepseek" === cJ ? function(JJ) {
-        const cJ = aF[JJ ? "codeBlock" : "worldCode"];
-        return rc.filter((JJ => cJ.has(JJ.name)))
-      }(!0 === JJ.codeBlock) : function(JJ) {
-        const cJ = (JJ.hasCode || JJ.hasBigFile) && !JJ.codeBlock || !0 === JJ.hasWorldCodeFiles,
-          ZJ = !0 === JJ.canLookUp,
-          FJ = JJ.codeBlock && !0 === JJ.canChangeWorldCode && !0 !== JJ.hasWorldCodeFiles && ZJ,
-          UJ = {
+        codeBlock: !0 === BB.codeBlock,
+        hasCode: "" !== (null !== (TB = BB.files[null !== (dB = BB.activePath) && void 0 !== dB ? dB : ""]) && void 0 !== TB ? TB : "").trim(),
+        hasBigFile: Object.values(BB.files).some((BB => BB.length > 6e3)),
+        wantsExport: jV(BB.request),
+        canAsk: !0 === BB.canAsk,
+        canRemember: !0 === (null === (VB = BB.about) || void 0 === VB ? void 0 : VB.canRemember),
+        isBigRequest: YT(BB.request),
+        canLookUp: !0 === BB.canLookUp,
+        hasOtherFiles: Object.keys(BB.files).length > 1,
+        hasErrors: BB.errors.length > 0,
+        canChangeWorldCode: !0 === BB.canChangeWorldCode,
+        hasWorldCodeFiles: Object.keys(BB.files).some(OB.g),
+        offersPrefabs: (yB = BB.request, pB = BB.files, lB = uy(BB), "never" !== lB.offer && ("always" === lB.offer || zV(yB, 1).length > 0 || YT(yB) || !dy(pB) && Ty.test(yB))),
+        listsPrefabs: uy(BB).categories,
+        looksUpDocs: !0 === BB.looksUpDocs
+      }
+    }
+
+    function uy(BB) {
+      var TB;
+      return null !== (TB = BB.prefabs) && void 0 !== TB ? TB : By
+    }
+
+    function Hy(BB, TB) {
+      return "deepseek" === TB ? function(BB) {
+        const TB = AV[BB ? "codeBlock" : "worldCode"];
+        return vT.filter((BB => TB.has(BB.name)))
+      }(!0 === BB.codeBlock) : function(BB) {
+        const TB = (BB.hasCode || BB.hasBigFile) && !BB.codeBlock || !0 === BB.hasWorldCodeFiles,
+          dB = !0 === BB.canLookUp,
+          VB = BB.codeBlock && !0 === BB.canChangeWorldCode && !0 !== BB.hasWorldCodeFiles && dB,
+          yB = {
             write_file: !0,
-            edit_file: JJ.hasBigFile,
-            replace_function: cJ,
+            edit_file: BB.hasBigFile,
+            replace_function: TB,
             insert_code: !1,
-            add_world_code: JJ.codeBlock && !0 !== JJ.hasWorldCodeFiles,
-            edit_code_in_place: JJ.hasCode,
-            export_game: JJ.wantsExport,
-            switch_to_world_code: JJ.codeBlock,
-            ask_creator: JJ.canAsk,
-            remember: !0 === JJ.canRemember && !JJ.codeBlock,
-            plan: !0 === JJ.isBigRequest && JJ.canAsk && !JJ.codeBlock,
-            view_file: ZJ && !0 === JJ.hasOtherFiles && !JJ.codeBlock,
-            view_world_code: FJ,
-            view_chunk: ZJ,
-            view_game_state: ZJ,
-            get_docs: ZJ,
-            fetch_url: ZJ && !0 === JJ.looksUpDocs,
-            find_names: ZJ,
-            view_errors: ZJ && !0 === JJ.hasErrors,
-            use_prefab: !0 === JJ.offersPrefabs && !JJ.codeBlock,
-            list_prefabs: ZJ && !0 === JJ.listsPrefabs && !JJ.codeBlock,
-            view_prefab: ZJ && !0 === JJ.offersPrefabs && !JJ.codeBlock
+            add_world_code: BB.codeBlock && !0 !== BB.hasWorldCodeFiles,
+            edit_code_in_place: BB.hasCode,
+            export_game: BB.wantsExport,
+            switch_to_world_code: BB.codeBlock,
+            ask_creator: BB.canAsk,
+            remember: !0 === BB.canRemember && !BB.codeBlock,
+            plan: !0 === BB.isBigRequest && BB.canAsk && !BB.codeBlock,
+            view_file: dB && !0 === BB.hasOtherFiles && !BB.codeBlock,
+            view_world_code: VB,
+            view_chunk: dB,
+            view_game_state: dB,
+            get_docs: dB,
+            fetch_url: dB && !0 === BB.looksUpDocs,
+            find_names: dB,
+            view_errors: dB && !0 === BB.hasErrors,
+            use_prefab: !0 === BB.offersPrefabs && !BB.codeBlock,
+            list_prefabs: dB && !0 === BB.listsPrefabs && !BB.codeBlock,
+            view_prefab: dB && !0 === BB.offersPrefabs && !BB.codeBlock
           };
-        let eJ = rc.filter((JJ => UJ[JJ.name]));
-        for (const XJ of ["remember", "plan"]) eJ.filter((JJ => !vc(JJ.name))).length > 7 && (eJ = eJ.filter((JJ => JJ.name !== XJ)));
-        return eJ
-      }(sU(JJ))
-    }
-
-    function fU(JJ, cJ) {
-      var ZJ, FJ;
-      const UJ = sU(JJ),
-        eJ = !0 === UJ.canLookUp,
-        XJ = (null !== (ZJ = null === (FJ = JJ.lookups) || void 0 === FJ ? void 0 : FJ.length) && void 0 !== ZJ ? ZJ : 0) > 0,
-        AJ = !0 === UJ.hasWorldCodeFiles,
-        qJ = [UJ.hasCode ? "" : "No open file has code, so don't call edit_code_in_place.", UJ.hasBigFile ? "" : "Every file is short, so change them with write_file or replace_function, not edit_file.", eJ ? "" : XJ ? "You have looked things up as many times as you can: answer now with what you found, calling no view_ tool, get_docs or find_names." : "Answer with what you have: call no view_ tool, get_docs or find_names.", eJ && !0 !== UJ.hasErrors ? "Their world showed no errors, so don't call view_errors." : "", ...UJ.codeBlock ? [UJ.canAsk ? "" : "Build what they asked: don't call ask_creator.", AJ ? `${⟦2-char-id⟧} ⟦2-char-id⟧ don't call add_world_code or view_world_code.` : "", AJ || !0 !== UJ.canChangeWorldCode ? "" : "When part of it needs World Code, say which part goes there: they are taken to World Code, and it is put in for them.", AJ || !0 === UJ.canChangeWorldCode && eJ ? "" : "Don't call view_world_code.", AJ ? "" : "The code block has ⟦2-char-id⟧ functions, ⟦2-char-id⟧ don't call replace_function."] : [UJ.canAsk ? "" : "Build what they asked: don't call ask_creator ⟦2-char-id⟧ plan.", UJ.canAsk && !0 !== UJ.isBigRequest ? "This request isn't big, so build it rather than calling plan." : "", UJ.wantsExport ? "" : "They haven't asked ⟦2-char-id⟧ save, ⟦2-char-id⟧ don't call export_game.", !0 === UJ.canRemember ? "" : "Their AI notes are full, so don't call remember.", eJ && !0 !== UJ.hasOtherFiles ? "They have only the one file, ⟦2-char-id⟧ don't call view_file." : "", !0 === UJ.offersPrefabs ? "" : "No prefab fits this request, so don't call use_prefab ⟦2-char-id⟧ view_prefab.", UJ.canAsk && !0 === nU(JJ).guide && cJ.length >= 2 ? `When you ask what kind of game they want, the choices are the 2 to 4 listed prefabs that fit the request best, by their titles (${cJ.slice(0,3).map((JJ=>JJ.title)).join(", ")}...): the one they pick is put in with use_prefab next.` : ""]].filter((JJ => "" !== JJ));
-      return qJ.length > 0 ? `\n\nFor this request: ${qJ.join(" ")}` : ""
-    }
-
-    function xU(JJ, cJ) {
-      var ZJ, FJ, UJ, eJ, XJ, AJ;
-      let qJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ZU,
+        let pB = vT.filter((BB => yB[BB.name]));
+        for (const lB of ["remember", "plan"]) pB.filter((BB => !mT(BB.name))).length > 7 && (pB = pB.filter((BB => BB.name !== lB)));
+        return pB
+      }(Dy(BB))
+    }
+
+    function Ey(BB, TB) {
+      var dB, VB;
+      const yB = Dy(BB),
+        pB = !0 === yB.canLookUp,
+        lB = (null !== (dB = null === (VB = BB.lookups) || void 0 === VB ? void 0 : VB.length) && void 0 !== dB ? dB : 0) > 0,
+        JB = !0 === yB.hasWorldCodeFiles,
+        YB = [yB.hasCode ? "" : "No open file has code, so don't call edit_code_in_place.", yB.hasBigFile ? "" : "Every file is short, so change them with write_file or replace_function, not edit_file.", pB ? "" : lB ? "You have looked things up as many times as you can: answer now with what you found, calling no view_ tool, get_docs or find_names." : "Answer with what you have: call no view_ tool, get_docs or find_names.", pB && !0 !== yB.hasErrors ? "Their world showed no errors, so don't call view_errors." : "", ...yB.codeBlock ? [yB.canAsk ? "" : "Build what they asked: don't call ask_creator.", JB ? `${⟦2-char-id⟧} ⟦2-char-id⟧ don't call add_world_code or view_world_code.` : "", JB || !0 !== yB.canChangeWorldCode ? "" : "When part of it needs World Code, say which part goes there: they are taken to World Code, and it is put in for them.", JB || !0 === yB.canChangeWorldCode && pB ? "" : "Don't call view_world_code.", JB ? "" : "The code block has ⟦2-char-id⟧ functions, ⟦2-char-id⟧ don't call replace_function."] : [yB.canAsk ? "" : "Build what they asked: don't call ask_creator ⟦2-char-id⟧ plan.", yB.canAsk && !0 !== yB.isBigRequest ? "This request isn't big, so build it rather than calling plan." : "", yB.wantsExport ? "" : "They haven't asked ⟦2-char-id⟧ save, ⟦2-char-id⟧ don't call export_game.", !0 === yB.canRemember ? "" : "Their AI notes are full, so don't call remember.", pB && !0 !== yB.hasOtherFiles ? "They have only the one file, ⟦2-char-id⟧ don't call view_file." : "", !0 === yB.offersPrefabs ? "" : "No prefab fits this request, so don't call use_prefab ⟦2-char-id⟧ view_prefab.", yB.canAsk && !0 === uy(BB).guide && TB.length >= 2 ? `When you ask what kind of game they want, the choices are the 2 to 4 listed prefabs that fit the request best, by their titles (${TB.slice(0,3).map((BB=>BB.title)).join(", ")}...): the one they pick is put in with use_prefab next.` : ""]].filter((BB => "" !== BB));
+      return YB.length > 0 ? `\n\nFor this request: ${YB.join(" ")}` : ""
+    }
+
+    function vy(BB, TB) {
+      var dB, VB, yB, pB, lB, JB;
+      let YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Vy,
         {
-          docsInTurn: jJ = !1,
-          Yf: YJ = !1
+          docsInTurn: gB = !1,
+          pH: oB = !1
         } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
-      const hJ = "deepseek" === qJ.format,
-        DJ = Object.values(cJ.files).join("\n"),
-        sJ = cJ.history.slice(-2).map((JJ => JJ.text)).join("\n"),
-        nJ = `${cJ.request}\n${sJ}\n${cJ.errors.join("\n")}`,
-        GJ = !0 === cJ.looksUpDocs,
-        fJ = GJ && !0 === cJ.canLookUp ? [] : JJ.find(nJ, DJ, 12),
-        xJ = JJ.matchItemAndBlockNames(nJ, 12),
-        rJ = !0 === cJ.codeBlock,
-        vJ = rJ ? "myId" : "playerId",
-        mJ = GU(cJ, qJ.format),
-        QJ = mJ.some((JJ => "use_prefab" === JJ.name)),
-        EJ = !QJ || hJ && !0 !== sU(cJ).offersPrefabs ? [] : function(JJ, cJ, ZJ) {
-          if ("never" === ZJ.offer || "none" === ZJ.list) return [];
-          if ("all" === ZJ.list) return [...jF];
-          const FJ = yF(JJ, 4);
-          if (cU(cJ) || !JU.test(JJ) && !qc(JJ)) return FJ;
-          const UJ = jF.filter((JJ => "game" === JJ.kind && !FJ.includes(JJ)));
-          return [...FJ, ...UJ]
-        }(cJ.request, cJ.files, nU(cJ)),
-        VJ = QJ ? function(JJ, cJ, ZJ) {
-          const FJ = cJ ? `\nOther kinds of game have prefabs too: look them up with list_prefabs (${Object.keys(YF).join(", ")}).` : "";
-          if (0 === JJ.length) return cJ ? `## Prefabs (ready-made games)${FJ}` : "";
-          const UJ = ZJ && JJ.includes(ZJ) ? `\nThis request fits ${ZJ.name}: put it in with use_prefab, then change only what the request wants differently: what it already does needs no code of yours (its sidebar is the text on the right of the screen).\n${KF(ZJ,!1)}` : "";
-          return `## Prefabs: ready-made games and features to start from (use_prefab)\n${JJ.map(EF).join("\n")}${UJ}${FJ}`
-        }(EJ, nU(cJ).categories, yF(cJ.request, 1)[0]) : "",
-        KJ = rJ || !0 !== nU(cJ).inlineCode ? "" : function(JJ) {
-          const cJ = yF(JJ, 1)[0];
-          if (!cJ) return "";
-          const ZJ = xF(nF(cJ)).text;
-          return `## Tested code for this kind of game (${cJ.title})\nThis code works. Start from it: put it in the file, keeping what the file already has, and change what the request needs. Change settings in its CONFIG.\n\`\`\`js\n${ZJ}\`\`\``
-        }(cJ.request),
-        yJ = [fJ.length > 0 ? `## Docs for this request\n${fJ.map((JJ=>JJ.text)).join("\n\n")}` : "", xJ.length > 0 ? `## Exact item and block names that match the request\n${xJ.join(", ")}` : ""].filter((JJ => "" !== JJ)),
-        SJ = [{
+      const kB = "deepseek" === YB.format,
+        LB = Object.values(TB.files).join("\n"),
+        OB = TB.history.slice(-2).map((BB => BB.text)).join("\n"),
+        DB = `${TB.request}\n${OB}\n${TB.errors.join("\n")}`,
+        uB = !0 === TB.looksUpDocs,
+        HB = uB && !0 === TB.canLookUp ? [] : BB.find(DB, LB, 12),
+        EB = BB.matchItemAndBlockNames(DB, 12),
+        vB = !0 === TB.codeBlock,
+        mB = vB ? "myId" : "playerId",
+        iB = Hy(TB, YB.format),
+        NB = iB.some((BB => "use_prefab" === BB.name)),
+        tB = !NB || kB && !0 !== Dy(TB).offersPrefabs ? [] : function(BB, TB, dB) {
+          if ("never" === dB.offer || "none" === dB.list) return [];
+          if ("all" === dB.list) return [...oV];
+          const VB = zV(BB, 4);
+          if (dy(TB) || !Ty.test(BB) && !YT(BB)) return VB;
+          const yB = oV.filter((BB => "game" === BB.kind && !VB.includes(BB)));
+          return [...VB, ...yB]
+        }(TB.request, TB.files, uy(TB)),
+        fB = NB ? function(BB, TB, dB) {
+          const VB = TB ? `\nOther kinds of game have prefabs too: look them up with list_prefabs (${Object.keys(kV).join(", ")}).` : "";
+          if (0 === BB.length) return TB ? `## Prefabs (ready-made games)${VB}` : "";
+          const yB = dB && BB.includes(dB) ? `\nThis request fits ${dB.name}: put it in with use_prefab, then change only what the request wants differently: what it already does needs no code of yours (its sidebar is the text on the right of the screen).\n${MV(dB,!1)}` : "";
+          return `## Prefabs: ready-made games and features to start from (use_prefab)\n${BB.map(fV).join("\n")}${yB}${VB}`
+        }(tB, uy(TB).categories, zV(TB.request, 1)[0]) : "",
+        sB = vB || !0 !== uy(TB).inlineCode ? "" : function(BB) {
+          const TB = zV(BB, 1)[0];
+          if (!TB) return "";
+          const dB = vV(uV(TB)).text;
+          return `## Tested code for this kind of game (${TB.title})\nThis code works. Start from it: put it in the file, keeping what the file already has, and change what the request needs. Change settings in its CONFIG.\n\`\`\`js\n${dB}\`\`\``
+        }(TB.request),
+        MB = [HB.length > 0 ? `## Docs for this request\n${HB.map((BB=>BB.text)).join("\n\n")}` : "", EB.length > 0 ? `## Exact item and block names that match the request\n${EB.join(", ")}` : ""].filter((BB => "" !== BB)),
+        zB = [{
           role: "system",
-          content: tF([rJ ? UU(GJ) : FU(GJ), ...GJ ? [] : [rJ ? `## World Code callbacks (all of them; only for World Code, never in the code block)\n${JJ.index("callback")}` : `## Callbacks (all of them)\n${JJ.index("callback")}`, `## API methods (all of them, call as api.name(...))\n${JJ.index("api")}`, `## Client options (all of them, set with api.setClientOption(${vJ}, name, value))\n${JJ.index("clientOption")}`], ...jJ ? [] : yJ, JJ.mobTypes.length > 0 ? `## Mob types (for api.attemptSpawnMob)\n${JJ.mobTypes.join(", ")}` : "", hJ ? "" : VJ, !rJ && nU(cJ).helperIndex ? `## Ready-made functions (call them by name, without api. and without writing them: their code is added to the file by itself; get_docs shows one)\n${cF.map((JJ=>JJ.signature)).join(", ")}` : "", hJ ? "" : KJ, qU(mJ, rJ, qJ.format, hJ ? {
+          content: nV([vB ? py(uB) : yy(uB), ...uB ? [] : [vB ? `## World Code callbacks (all of them; only for World Code, never in the code block)\n${BB.index("callback")}` : `## Callbacks (all of them)\n${BB.index("callback")}`, `## API methods (all of them, call as api.name(...))\n${BB.index("api")}`, `## Client options (all of them, set with api.setClientOption(${mB}, name, value))\n${BB.index("clientOption")}`], ...gB ? [] : MB, BB.mobTypes.length > 0 ? `## Mob types (for api.attemptSpawnMob)\n${BB.mobTypes.join(", ")}` : "", kB ? "" : fB, !vB && uy(TB).helperIndex ? `## Ready-made functions (call them by name, without api. and without writing them: their code is added to the file by itself; get_docs shows one)\n${dV.map((BB=>BB.signature)).join(", ")}` : "", kB ? "" : sB, gy(iB, vB, YB.format, kB ? {
             hasWorldCodeFiles: !1,
             hasLookedUp: !1,
             movesToWorldCode: !1,
             listedPrefabs: [],
             guidesToPrefabs: !1
           } : {
-            hasWorldCodeFiles: !0 === sU(cJ).hasWorldCodeFiles,
-            hasLookedUp: (null !== (ZJ = null === (FJ = cJ.lookups) || void 0 === FJ ? void 0 : FJ.length) && void 0 !== ZJ ? ZJ : 0) > 0,
-            movesToWorldCode: !0 === cJ.canChangeWorldCode,
-            listedPrefabs: EJ,
-            guidesToPrefabs: !0 === nU(cJ).guide
-          })].filter((JJ => "" !== JJ)).join("\n\n"), mJ, qJ.format, qJ.nativeTools)
+            hasWorldCodeFiles: !0 === Dy(TB).hasWorldCodeFiles,
+            hasLookedUp: (null !== (dB = null === (VB = TB.lookups) || void 0 === VB ? void 0 : VB.length) && void 0 !== dB ? dB : 0) > 0,
+            movesToWorldCode: !0 === TB.canChangeWorldCode,
+            listedPrefabs: tB,
+            guidesToPrefabs: !0 === uy(TB).guide
+          })].filter((BB => "" !== BB)).join("\n\n"), iB, YB.format, YB.nativeTools)
         }];
-      if (!hJ)
-        for (const pJ of cJ.history) SJ.push({
-          role: pJ.role,
-          content: pJ.text
+      if (!kB)
+        for (const QB of TB.history) zB.push({
+          role: QB.role,
+          content: QB.text
         });
-      const IJ = hJ && !YJ && cJ.history.length > 0 ? `Earlier in this chat:\n${cJ.history.map((JJ=>`${"user"===JJ.role?"They asked":"You answered"}: ${JJ.text}`)).join("\n")}\n\n` : "",
-        MJ = null !== (UJ = cJ.about) && void 0 !== UJ && UJ.notes.length ? `AI notes (notes they kept):\n${cJ.about.notes.map((JJ=>`- ${JJ}`)).join("\n")}\n\n` : "",
-        bJ = null !== (eJ = cJ.about) && void 0 !== eJ && eJ.outline ? `Outline of their code:\n${cJ.about.outline}\n\n` : "",
-        wJ = cJ.errors.length > 0 ? `\n\nErrors their world showed recently:\n${cJ.errors.slice(-5).join("\n")}` : "",
-        WJ = null === (XJ = cJ.failedEdits) || void 0 === XJ || !XJ.length || hJ && YJ ? "" : `\n\nWhat happened to your last answer's changes:\n${function(JJ,cJ){return JJ.map((JJ=>ac[cJ].editFailure(JJ.tool,oF(JJ)))).join("\n\n")}(cJ.failedEdits,qJ.format)}`,
-        gJ = [...jJ ? yJ : [], ...hJ ? [VJ, KJ] : []].filter((JJ => "" !== JJ)).map((JJ => `${JJ}\n\n`)).join(""),
-        HJ = null === (AJ = cJ.lookups) || void 0 === AJ || !AJ.length || hJ && YJ ? "" : `\n\nWhat you looked up for this request:\n${PJ=cJ.lookups,kJ=qJ.format,PJ.map((JJ=>ac[kJ].lookupResult(JJ.tool,JJ.about,JJ.text))).join("\n\n")}`;
-      var PJ, kJ;
-      return SJ.push({
+      const wB = kB && !oB && TB.history.length > 0 ? `Earlier in this chat:\n${TB.history.map((BB=>`${"user"===BB.role?"They asked":"You answered"}: ${BB.text}`)).join("\n")}\n\n` : "",
+        UB = null !== (yB = TB.about) && void 0 !== yB && yB.notes.length ? `AI notes (notes they kept):\n${TB.about.notes.map((BB=>`- ${BB}`)).join("\n")}\n\n` : "",
+        FB = null !== (pB = TB.about) && void 0 !== pB && pB.outline ? `Outline of their code:\n${TB.about.outline}\n\n` : "",
+        KB = TB.errors.length > 0 ? `\n\nErrors their world showed recently:\n${TB.errors.slice(-5).join("\n")}` : "",
+        rB = null === (lB = TB.failedEdits) || void 0 === lB || !lB.length || kB && oB ? "" : `\n\nWhat happened to your last answer's changes:\n${function(BB,TB){return BB.map((BB=>jT[TB].editFailure(BB.tool,eV(BB)))).join("\n\n")}(TB.failedEdits,YB.format)}`,
+        IB = [...gB ? MB : [], ...kB ? [fB, sB] : []].filter((BB => "" !== BB)).map((BB => `${BB}\n\n`)).join(""),
+        cB = null === (JB = TB.lookups) || void 0 === JB || !JB.length || kB && oB ? "" : `\n\nWhat you looked up for this request:\n${SB=TB.lookups,PB=YB.format,SB.map((BB=>jT[PB].lookupResult(BB.tool,BB.about,BB.text))).join("\n\n")}`;
+      var SB, PB;
+      return zB.push({
         role: "user",
-        content: `${gJ}${MJ}${bJ}${IJ}Their code now:\n${DU(cJ,qJ.format)}${wJ}${WJ}${HJ}${hJ?fU(cJ,EJ):""}\n\nTheir request: ${cJ.request}`
-      }), SJ
-    }
-    var rU = ZJ(38582);
-
-    function vU(JJ) {
-      var cJ, ZJ, FJ, UJ, eJ, XJ;
+        content: `${IB}${UB}${FB}${wB}Their code now:\n${Oy(TB,YB.format)}${KB}${rB}${cB}${kB?Ey(TB,tB):""}\n\nTheir request: ${TB.request}`
+      }), zB
+    }
+    var my = dB(38528);
+
+    function iy(BB) {
+      var TB, dB, VB, yB, pB, lB;
       const {
-        args: AJ
-      } = JJ;
-      switch (JJ.name) {
+        args: JB
+      } = BB;
+      switch (BB.name) {
         case "view_file":
-          return null !== (cJ = AJ.path) && void 0 !== cJ ? cJ : "a file";
+          return null !== (TB = JB.path) && void 0 !== TB ? TB : "a file";
         case "view_world_code":
           return "your World Code";
         case "view_chunk":
-          return AJ.position ? `the blocks near ${null!==(ZJ=null===(FJ=(0,rU.f)(AJ.position))||void 0===FJ?void 0:FJ.map(Math.floor).join(", "))&&void 0!==ZJ?ZJ:AJ.position}` : "the blocks around you";
+          return JB.position ? `the blocks near ${null!==(dB=null===(VB=(0,my.g)(JB.position))||void 0===VB?void 0:VB.map(Math.floor).join(", "))&&void 0!==dB?dB:JB.position}` : "the blocks around you";
         case "view_game_state":
           return "what you see in your world";
         case "get_docs":
-          return AJ.name ? `the docs for ${AJ.name}` : `the list of ${QU(null!==(UJ=AJ.list)&&void 0!==UJ?UJ:mU)}`;
+          return JB.name ? `the docs for ${JB.name}` : `the list of ${ty(null!==(yB=JB.list)&&void 0!==yB?yB:Ny)}`;
         case "fetch_url":
-          return function(JJ) {
-            const cJ = void 0 === JJ ? null : rJ(JJ);
-            if (null === cJ) return null !== JJ && void 0 !== JJ ? JJ : "a docs page";
-            return vJ(cJ) ? "the list of docs pages" : `the docs page ${function(JJ){const cJ=(0,GJ.u)(JJ);return null===cJ?JJ:`${cJ.name}${null===cJ.part?"":`/${cJ.part}`}`}(cJ)}`
-          }(AJ.url);
+          return function(BB) {
+            const TB = void 0 === BB ? null : vB(BB);
+            if (null === TB) return null !== BB && void 0 !== BB ? BB : "a docs page";
+            return mB(TB) ? "the list of docs pages" : `the docs page ${function(BB){const TB=(0,uB.z)(BB);return null===TB?BB:`${TB.name}${null===TB.part?"":`/${TB.part}`}`}(TB)}`
+          }(JB.url);
         case "find_names":
-          return `names for "${null!==(⟦2-char-id⟧=⟦2-char-id⟧.words)&&void 0!==⟦2-char-id⟧?eJ:""}"`;
+          return `names for "${null!==(⟦2-char-id⟧=⟦2-char-id⟧.words)&&void 0!==⟦2-char-id⟧?pB:""}"`;
         case "view_errors":
           return "your world's errors";
         case "list_prefabs":
-          return AJ.category ? `the ready-made ${AJ.category} games` : "the ready-made games";
+          return JB.category ? `the ready-made ${JB.category} games` : "the ready-made games";
         case "view_prefab":
-          return `the ready-made ${null!==(XJ=AJ.name)&&void 0!==XJ?XJ:"game"}`
-      }
-    }
-    const mU = "functions";
-
-    function QU(JJ) {
-      return JJ.trim().toLowerCase().replace(/[\s_]+/g, " ").replace(/s?$/, "s")
-    }
-
-    function EU(JJ) {
-      return "get_docs" === JJ.name || "fetch_url" === JJ.name
-    }
-    async function VU(JJ, cJ) {
-      var ZJ;
-      const FJ = vU(JJ),
-        UJ = cJ => ({
+          return `the ready-made ${null!==(lB=JB.name)&&void 0!==lB?lB:"game"}`
+      }
+    }
+    const Ny = "functions";
+
+    function ty(BB) {
+      return BB.trim().toLowerCase().replace(/[\s_]+/g, " ").replace(/s?$/, "s")
+    }
+
+    function fy(BB) {
+      return "get_docs" === BB.name || "fetch_url" === BB.name
+    }
+    async function sy(BB, TB) {
+      var dB;
+      const VB = iy(BB),
+        yB = TB => ({
           result: {
-            tool: JJ.name,
-            about: FJ,
-            text: cJ
+            tool: BB.name,
+            about: VB,
+            text: TB
           }
         });
-      switch (JJ.name) {
+      switch (BB.name) {
         case "view_file":
-          return UJ((AJ = JJ.args.path, qJ = cJ.files, void 0 === AJ ? "No path was given: give the path of a file from the list." : Object.hasOwn(qJ, AJ) ? "" === qJ[AJ] ? `${AJ} is empty.` : qJ[AJ] : `There is no file called ${AJ}. Their files are: ${Object.keys(qJ).join(", ")}.`));
+          return yB((JB = BB.args.path, YB = TB.files, void 0 === JB ? "No path was given: give the path of a file from the list." : Object.hasOwn(YB, JB) ? "" === YB[JB] ? `${JB} is empty.` : YB[JB] : `There is no file called ${JB}. Their files are: ${Object.keys(YB).join(", ")}.`));
         case "view_world_code": {
-          const JJ = cJ.readWorldCode ? await cJ.readWorldCode() : null;
-          if (null === JJ) return UJ("World Code couldn't ⟦2-char-id⟧ read, ⟦2-char-id⟧ ⟦2-char-id⟧ can't be changed from here. Give its part with add_world_code instead.");
-          const ZJ = Object.keys(JJ).sort(),
-            FJ = Object.fromEntries(ZJ.map((cJ => [`${sJ.k}${cJ}`, JJ[cJ]]))),
-            eJ = ZJ.map((cJ => `${sJ.k}${cJ}:\n${""===JJ[cJ]?"(empty)":JJ[cJ]}`)).join("\n\n"),
-            XJ = ZJ.length > 1 ? `\n\n${hU(ZJ,sJ.k)}` : "";
+          const BB = TB.readWorldCode ? await TB.readWorldCode() : null;
+          if (null === BB) return yB("World Code couldn't ⟦2-char-id⟧ read, ⟦2-char-id⟧ ⟦2-char-id⟧ can't be changed from here. Give its part with add_world_code instead.");
+          const dB = Object.keys(BB).sort(),
+            VB = Object.fromEntries(dB.map((TB => [`${OB.k}${TB}`, BB[TB]]))),
+            pB = dB.map((TB => `${OB.k}${TB}:\n${""===BB[TB]?"(empty)":BB[TB]}`)).join("\n\n"),
+            lB = dB.length > 1 ? `\n\n${Ly(dB,OB.k)}` : "";
           return {
-            ...UJ("" === eJ ? `World Code has no code yet: ${sJ.k}index.js is empty.` : `${eJ}${XJ}`),
-            worldCodeFiles: FJ
+            ...yB("" === pB ? `World Code has no code yet: ${OB.k}index.js is empty.` : `${pB}${lB}`),
+            worldCodeFiles: VB
           }
         }
         case "view_chunk":
-          return UJ(await cJ.viewChunk((0, rU.f)(JJ.args.position)));
+          return yB(await TB.viewChunk((0, my.g)(BB.args.position)));
         case "view_game_state":
-          return UJ(await cJ.viewGameState());
+          return yB(await TB.viewGameState());
         case "get_docs":
-          return UJ(function(JJ, cJ, ZJ) {
-            if (void 0 === JJ) {
-              const JJ = (0, QJ.b)(nc, QU(null !== cJ && void 0 !== cJ ? cJ : mU));
-              return void 0 === JJ ? `There is no list called ${cJ}: ask for ${Gc}.` : ZJ.index(JJ)
+          return yB(function(BB, TB, dB) {
+            if (void 0 === BB) {
+              const BB = (0, NB.b)(DT, ty(null !== TB && void 0 !== TB ? TB : Ny));
+              return void 0 === BB ? `There is no list called ${TB}: ask for ${uT}.` : dB.index(BB)
             }
-            const FJ = ZJ.section(JJ);
-            if (FJ) return FJ.text;
-            const UJ = ZJ.find(JJ, "", 3).map((JJ => JJ.name)).join(", ");
-            return `Nothing is called ${JJ}.${""===UJ?"":` The closest names are: ${UJ}.`}`
-          }(JJ.args.name, JJ.args.list, cJ.docs));
+            const VB = dB.section(BB);
+            if (VB) return VB.text;
+            const yB = dB.find(BB, "", 3).map((BB => BB.name)).join(", ");
+            return `Nothing is called ${BB}.${""===yB?"":` The closest names are: ${yB}.`}`
+          }(BB.args.name, BB.args.list, TB.docs));
         case "fetch_url":
-          return UJ(await cJ.fetchDocsPage(null !== (ZJ = JJ.args.url) && void 0 !== ZJ ? ZJ : ""));
+          return yB(await TB.fetchDocsPage(null !== (dB = BB.args.url) && void 0 !== dB ? dB : ""));
         case "find_names": {
-          var eJ, XJ;
-          const ZJ = cJ.docs.searchNames(null !== (eJ = JJ.args.words) && void 0 !== eJ ? eJ : "", 20);
-          return UJ(ZJ.length > 0 ? ZJ.join(", ") : `No block, item or mob name has any of the words "${null!==(XJ=JJ.args.words)&&void 0!==XJ?XJ:""}".`)
+          var pB, lB;
+          const dB = TB.docs.searchNames(null !== (pB = BB.args.words) && void 0 !== pB ? pB : "", 20);
+          return yB(dB.length > 0 ? dB.join(", ") : `No block, item or mob name has any of the words "${null!==(lB=BB.args.words)&&void 0!==lB?lB:""}".`)
         }
         case "view_errors":
-          return UJ(cJ.errors.length > 0 ? cJ.errors.slice(-30).join("\n") : "Their world showed no errors recently.");
+          return yB(TB.errors.length > 0 ? TB.errors.slice(-30).join("\n") : "Their world showed no errors recently.");
         case "list_prefabs":
-          return UJ(VF(JJ.args.category));
+          return yB(sV(BB.args.category));
         case "view_prefab":
-          return UJ(function(JJ, cJ) {
-            const ZJ = void 0 === JJ ? null : DF(JJ);
-            return ZJ ? KF(ZJ, cJ) : `There is no prefab called ${null!==JJ&&void 0!==JJ?JJ:"that"}.\n${VF()}`
-          }(JJ.args.name, !0 === cJ.showPrefabCode))
-      }
-      var AJ, qJ
-    }
-    const KU = [
+          return yB(function(BB, TB) {
+            const dB = void 0 === BB ? null : OV(BB);
+            return dB ? MV(dB, TB) : `There is no prefab called ${null!==BB&&void 0!==BB?BB:"that"}.\n${sV()}`
+          }(BB.args.name, !0 === TB.showPrefabCode))
+      }
+      var JB, YB
+    }
+    const My = [
       [/\bme\b/gi, "the player"],
       [/\bmyself\b/gi, "the player"],
       [/\bmy\b/gi, "the player's"],
```

</details>

<details>
<summary>Hunk 108 · Change · +170 / -170</summary>

```diff
@@ -6241,206 +6241,206 @@
       [/\bstolen\b/gi, "taken"]
     ];
 
-    function yU(JJ) {
-      let cJ = JJ;
-      for (const [ZJ, FJ] of KU) cJ = cJ.replace(ZJ, (JJ => JJ.length > 1 && JJ[0] !== JJ[0].toLowerCase() && JJ.slice(1) === JJ.slice(1).toLowerCase() ? FJ[0].toUpperCase() + FJ.slice(1) : FJ));
-      return cJ
-    }
-    const SU = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
-      IU = ["Qwen3Guard-Gen-0.6B", "Qwen3Guard-Gen-8B"],
-      MU = ["Qwen3Guard-Gen-8B", "Qwen3Guard-Gen-0.6B"],
-      bU = 12e3,
-      wU = new Set(["Violent", "Non-violent Illegal Acts", "Unethical Acts"]);
-
-    function WU(JJ) {
-      var cJ, ZJ, FJ;
-      const UJ = null === (cJ = /Safety:\s*(\w+)/.exec(JJ)) || void 0 === cJ ? void 0 : cJ[1],
-        eJ = null !== (ZJ = null === (FJ = /Categories:\s*(.+)/.exec(JJ)) || void 0 === FJ ? void 0 : FJ[1]) && void 0 !== ZJ ? ZJ : "";
-      return /PII/.test(eJ) ? "personalInfo" : "Unsafe" === UJ || /Jailbreak|Sexual|Suicide|Self-Harm/i.test(eJ) ? "unsafe" : "ok"
-    }
-
-    function gU(JJ) {
-      var cJ, ZJ, FJ;
-      const UJ = null === (cJ = /Safety:\s*(\w+)/.exec(JJ)) || void 0 === cJ ? void 0 : cJ[1];
-      if (!UJ) return null;
-      const eJ = (null !== (ZJ = null === (FJ = /Categories:\s*(.+)/.exec(JJ)) || void 0 === FJ ? void 0 : FJ[1]) && void 0 !== ZJ ? ZJ : "").split(",").map((JJ => JJ.trim())).filter((JJ => "" !== JJ && "None" !== JJ));
-      return "Safe" !== UJ && eJ.some((JJ => /Sexual/.test(JJ))) ? "unsafe" : "Unsafe" !== UJ ? "ok" : eJ.length > 0 && eJ.every((JJ => wU.has(JJ))) ? "maybeGame" : "unsafe"
-    }
-    async function HU(JJ, cJ) {
-      let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-      const FJ = await cJ(JJ),
-        UJ = null === FJ ? null : gU(FJ);
-      if (null === UJ) return "unchecked";
-      if ("ok" === UJ || "unsafe" === UJ && (!ZJ || null === FJ || /Sexual/.test(FJ))) return UJ;
-      const eJ = yU(JJ);
-      if (eJ === JJ) return "unsafe";
-      const XJ = await cJ(eJ),
-        AJ = null === XJ ? null : gU(XJ);
-      return null === AJ ? "unchecked" : "ok" === AJ ? "ok" : "unsafe"
-    }
-
-    function PU(JJ) {
-      const cJ = [];
-      return zU(JJ, 0, !1, cJ), cJ.map((JJ => JJ.trim())).filter((JJ => "" !== JJ))
-    }
-    const kU = new Set(["return", "typeof", "case", "do", "else", "in", "of", "new", "delete", "void", "throw", "instanceof", "yield", "await"]);
-
-    function pU(JJ, cJ) {
-      let ZJ = cJ - 1;
-      for (; ZJ >= 0 && /\s/.test(JJ[ZJ]);) ZJ--;
-      if (ZJ < 0 || /[(,=:[!&|?{};+\-*%<>~^]/.test(JJ[ZJ])) return !0;
-      let FJ = ZJ;
-      for (; FJ > 0 && /[\w$]/.test(JJ[FJ - 1]);) FJ--;
-      return kU.has(JJ.slice(FJ, ZJ + 1))
-    }
-
-    function dU(JJ, cJ) {
-      let ZJ = !1;
-      for (let FJ = cJ + 1; FJ < JJ.length; FJ++) {
-        const cJ = JJ[FJ];
-        if ("\\" === cJ) FJ++;
+    function zy(BB) {
+      let TB = BB;
+      for (const [dB, VB] of My) TB = TB.replace(dB, (BB => BB.length > 1 && BB[0] !== BB[0].toLowerCase() && BB.slice(1) === BB.slice(1).toLowerCase() ? VB[0].toUpperCase() + VB.slice(1) : VB));
+      return TB
+    }
+    const wy = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
+      Uy = ["Qwen3Guard-Gen-0.6B", "Qwen3Guard-Gen-8B"],
+      Fy = ["Qwen3Guard-Gen-8B", "Qwen3Guard-Gen-0.6B"],
+      Ky = 12e3,
+      ry = new Set(["Violent", "Non-violent Illegal Acts", "Unethical Acts"]);
+
+    function Iy(BB) {
+      var TB, dB, VB;
+      const yB = null === (TB = /Safety:\s*(\w+)/.exec(BB)) || void 0 === TB ? void 0 : TB[1],
+        pB = null !== (dB = null === (VB = /Categories:\s*(.+)/.exec(BB)) || void 0 === VB ? void 0 : VB[1]) && void 0 !== dB ? dB : "";
+      return /PII/.test(pB) ? "personalInfo" : "Unsafe" === yB || /Jailbreak|Sexual|Suicide|Self-Harm/i.test(pB) ? "unsafe" : "ok"
+    }
+
+    function cy(BB) {
+      var TB, dB, VB;
+      const yB = null === (TB = /Safety:\s*(\w+)/.exec(BB)) || void 0 === TB ? void 0 : TB[1];
+      if (!yB) return null;
+      const pB = (null !== (dB = null === (VB = /Categories:\s*(.+)/.exec(BB)) || void 0 === VB ? void 0 : VB[1]) && void 0 !== dB ? dB : "").split(",").map((BB => BB.trim())).filter((BB => "" !== BB && "None" !== BB));
+      return "Safe" !== yB && pB.some((BB => /Sexual/.test(BB))) ? "unsafe" : "Unsafe" !== yB ? "ok" : pB.length > 0 && pB.every((BB => ry.has(BB))) ? "maybeGame" : "unsafe"
+    }
+    async function Sy(BB, TB) {
+      let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+      const VB = await TB(BB),
+        yB = null === VB ? null : cy(VB);
+      if (null === yB) return "unchecked";
+      if ("ok" === yB || "unsafe" === yB && (!dB || null === VB || /Sexual/.test(VB))) return yB;
+      const pB = zy(BB);
+      if (pB === BB) return "unsafe";
+      const lB = await TB(pB),
+        JB = null === lB ? null : cy(lB);
+      return null === JB ? "unchecked" : "ok" === JB ? "ok" : "unsafe"
+    }
+
+    function Py(BB) {
+      const TB = [];
+      return Zy(BB, 0, !1, TB), TB.map((BB => BB.trim())).filter((BB => "" !== BB))
+    }
+    const Qy = new Set(["return", "typeof", "case", "do", "else", "in", "of", "new", "delete", "void", "throw", "instanceof", "yield", "await"]);
+
+    function Ry(BB, TB) {
+      let dB = TB - 1;
+      for (; dB >= 0 && /\s/.test(BB[dB]);) dB--;
+      if (dB < 0 || /[(,=:[!&|?{};+\-*%<>~^]/.test(BB[dB])) return !0;
+      let VB = dB;
+      for (; VB > 0 && /[\w$]/.test(BB[VB - 1]);) VB--;
+      return Qy.has(BB.slice(VB, dB + 1))
+    }
+
+    function ay(BB, TB) {
+      let dB = !1;
+      for (let VB = TB + 1; VB < BB.length; VB++) {
+        const TB = BB[VB];
+        if ("\\" === TB) VB++;
         else {
-          if ("\n" === cJ) break;
-          if (ZJ) ZJ = "]" !== cJ;
-          else if ("[" === cJ) ZJ = !0;
-          else if ("/" === cJ) return FJ + 1
+          if ("\n" === TB) break;
+          if (dB) dB = "]" !== TB;
+          else if ("[" === TB) dB = !0;
+          else if ("/" === TB) return VB + 1
         }
       }
-      return cJ + 1
-    }
-
-    function zU(JJ, cJ, ZJ, FJ) {
-      let UJ = cJ,
-        eJ = 0;
-      for (; UJ < JJ.length;) {
-        const cJ = JJ[UJ],
-          XJ = JJ[UJ + 1];
-        if ("/" === cJ && "/" === XJ) {
-          const cJ = JJ.indexOf("\n", UJ);
-          FJ.push(JJ.slice(UJ + 2, -1 === cJ ? JJ.length : cJ)), UJ = -1 === cJ ? JJ.length : cJ
-        } else if ("/" === cJ && "*" === XJ) {
-          const cJ = JJ.indexOf("*/", UJ + 2);
-          FJ.push(JJ.slice(UJ + 2, -1 === cJ ? JJ.length : cJ)), UJ = -1 === cJ ? JJ.length : cJ + 2
-        } else if ("/" === cJ && pU(JJ, UJ)) UJ = dU(JJ, UJ);
-        else if ('"' === cJ || "'" === cJ || "`" === cJ) {
-          const ZJ = FJ.length;
-          FJ.push("");
-          let eJ = "";
-          for (UJ++; UJ < JJ.length && JJ[UJ] !== cJ;) "\\" === JJ[UJ] ? (eJ += JJ.slice(UJ, UJ + 2), UJ += 2) : "`" === cJ && "$" === JJ[UJ] && "{" === JJ[UJ + 1] ? (eJ += " ", UJ = zU(JJ, UJ + 2, !0, FJ)) : (eJ += JJ[UJ], UJ++);
-          FJ[ZJ] = eJ, UJ++
+      return TB + 1
+    }
+
+    function Zy(BB, TB, dB, VB) {
+      let yB = TB,
+        pB = 0;
+      for (; yB < BB.length;) {
+        const TB = BB[yB],
+          lB = BB[yB + 1];
+        if ("/" === TB && "/" === lB) {
+          const TB = BB.indexOf("\n", yB);
+          VB.push(BB.slice(yB + 2, -1 === TB ? BB.length : TB)), yB = -1 === TB ? BB.length : TB
+        } else if ("/" === TB && "*" === lB) {
+          const TB = BB.indexOf("*/", yB + 2);
+          VB.push(BB.slice(yB + 2, -1 === TB ? BB.length : TB)), yB = -1 === TB ? BB.length : TB + 2
+        } else if ("/" === TB && Ry(BB, yB)) yB = ay(BB, yB);
+        else if ('"' === TB || "'" === TB || "`" === TB) {
+          const dB = VB.length;
+          VB.push("");
+          let pB = "";
+          for (yB++; yB < BB.length && BB[yB] !== TB;) "\\" === BB[yB] ? (pB += BB.slice(yB, yB + 2), yB += 2) : "`" === TB && "$" === BB[yB] && "{" === BB[yB + 1] ? (pB += " ", yB = Zy(BB, yB + 2, !0, VB)) : (pB += BB[yB], yB++);
+          VB[dB] = pB, yB++
         } else {
-          if (ZJ && "{" === cJ) eJ++;
-          else if (ZJ && "}" === cJ) {
-            if (0 === eJ) return UJ + 1;
-            eJ--
+          if (dB && "{" === TB) pB++;
+          else if (dB && "}" === TB) {
+            if (0 === pB) return yB + 1;
+            pB--
           }
-          UJ++
+          yB++
         }
       }
-      return UJ
-    }
-    const NU = 4e5;
-    var OU = ZJ(40217);
-    const TU = 15e3;
-    let CU = [],
-      uU = null;
-
-    function iU(JJ) {
-      return Math.ceil(JJ.length / 4)
-    }
-
-    function RU(JJ) {
-      return "number" === typeof JJ && Number.isInteger(JJ) && JJ >= 0
-    }
-
-    function LU(JJ, cJ, ZJ) {
-      var FJ;
-      let UJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-      ! function(JJ) {
+      return yB
+    }
+    const Xy = 4e5;
+    var Wy = dB(40210);
+    const hy = 15e3;
+    let Cy = [],
+      Gy = null;
+
+    function qy(BB) {
+      return Math.ceil(BB.length / 4)
+    }
+
+    function xy(BB) {
+      return "number" === typeof BB && Number.isInteger(BB) && BB >= 0
+    }
+
+    function jy(BB, TB, dB) {
+      var VB;
+      let yB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+      ! function(BB) {
         if ("undefined" === typeof window) return;
-        if (CU.push(JJ), CU.length >= 40) return void aU();
-        uU ??= setTimeout((() => {
-          aU()
-        }), TU)
-      }(null !== (FJ = function(JJ) {
-        if (null === JJ || "object" !== typeof JJ) return null;
+        if (Cy.push(BB), Cy.length >= 40) return void Ay();
+        Gy ??= setTimeout((() => {
+          Ay()
+        }), hy)
+      }(null !== (VB = function(BB) {
+        if (null === BB || "object" !== typeof BB) return null;
         const {
-          prompt_tokens: cJ,
-          completion_tokens: ZJ,
-          prompt_tokens_details: FJ
-        } = JJ;
-        if (!RU(cJ) || !RU(ZJ)) return null;
-        const UJ = null !== FJ && "object" === typeof FJ ? FJ.cached_tokens : void 0;
+          prompt_tokens: TB,
+          completion_tokens: dB,
+          prompt_tokens_details: VB
+        } = BB;
+        if (!xy(TB) || !xy(dB)) return null;
+        const yB = null !== VB && "object" === typeof VB ? VB.cached_tokens : void 0;
         return {
-          sent: cJ,
-          cached: RU(UJ) ? UJ : 0,
-          received: ZJ
+          sent: TB,
+          cached: xy(yB) ? yB : 0,
+          received: dB
         }
-      }(JJ)) && void 0 !== FJ ? FJ : {
-        sent: iU(JSON.stringify(cJ)),
+      }(BB)) && void 0 !== VB ? VB : {
+        sent: qy(JSON.stringify(TB)),
         cached: 0,
-        received: iU(ZJ) + UJ
+        received: qy(dB) + yB
       })
     }
-    async function aU() {
-      null !== uU && (clearTimeout(uU), uU = null);
-      const JJ = CU.slice(0, 40);
-      if (CU = CU.slice(40), CU.length > 0 && (uU = setTimeout((() => {
-          aU()
-        }), TU)), 0 !== JJ.length) try {
-        await (0, OU.postToGameServer)("/ai-helper/usage", {
-          calls: JJ
+    async function Ay() {
+      null !== Gy && (clearTimeout(Gy), Gy = null);
+      const BB = Cy.slice(0, 40);
+      if (Cy = Cy.slice(40), Cy.length > 0 && (Gy = setTimeout((() => {
+          Ay()
+        }), hy)), 0 !== BB.length) try {
+        await (0, Wy.postToGameServer)("/ai-helper/usage", {
+          calls: BB
         })
       } catch {}
     }
-    const BU = 6e4;
-    const tU = new class {
+    const by = 6e4;
+    const ny = new class {
         constructor() {
           this.calls = new Map, this.fullUntil = new Map
         }
-        record(JJ) {
-          let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-          this.calls.set(JJ, [...this.recent(JJ, cJ), cJ])
+        record(BB) {
+          let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+          this.calls.set(BB, [...this.recent(BB, TB), TB])
         }
-        markFull(JJ) {
-          let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-          this.fullUntil.set(JJ, cJ + BU)
+        markFull(BB) {
+          let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+          this.fullUntil.set(BB, TB + by)
         }
-        callsInLastMinute(JJ) {
-          let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-          return this.recent(JJ, cJ).length
+        callsInLastMinute(BB) {
+          let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+          return this.recent(BB, TB).length
         }
-        freeAt(JJ) {
-          var cJ;
-          let ZJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-          const FJ = this.recent(JJ, ZJ),
-            UJ = FJ.length < 2 ? ZJ : FJ[FJ.length - 2] + BU;
-          return Math.max(UJ, null !== (cJ = this.fullUntil.get(JJ)) && void 0 !== cJ ? cJ : 0, ZJ)
+        freeAt(BB) {
+          var TB;
+          let dB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+          const VB = this.recent(BB, dB),
+            yB = VB.length < 2 ? dB : VB[VB.length - 2] + by;
+          return Math.max(yB, null !== (TB = this.fullUntil.get(BB)) && void 0 !== TB ? TB : 0, dB)
         }
-        firstFreeAt(JJ) {
-          let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-          return Math.min(...JJ.map((JJ => this.freeAt(JJ, cJ))))
+        firstFreeAt(BB) {
+          let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+          return Math.min(...BB.map((BB => this.freeAt(BB, TB))))
         }
         clear() {
           this.calls.clear(), this.fullUntil.clear()
         }
-        recent(JJ, cJ) {
-          var ZJ;
-          return (null !== (ZJ = this.calls.get(JJ)) && void 0 !== ZJ ? ZJ : []).filter((JJ => cJ - JJ < BU))
+        recent(BB, TB) {
+          var dB;
+          return (null !== (dB = this.calls.get(BB)) && void 0 !== dB ? dB : []).filter((BB => TB - BB < by))
         }
       },
-      oU = /\n{3,}/,
-      lU = /<tool_call\b|<function=/;
-
-    function Je(JJ) {
-      const cJ = JJ.trimStart(),
-        ZJ = oU.exec(cJ),
-        FJ = lU.exec(cJ);
-      if (null === ZJ || null !== FJ && FJ.index < ZJ.index) return null;
-      const UJ = cJ.slice(ZJ.index + ZJ[0].length);
-      return "" === UJ.trim() ? null : UJ
-    }
-    const ce = [{
+      ey = /\n{3,}/,
+      Bp = /<tool_call\b|<function=/;
+
+    function Tp(BB) {
+      const TB = BB.trimStart(),
+        dB = ey.exec(TB),
+        VB = Bp.exec(TB);
+      if (null === dB || null !== VB && VB.index < dB.index) return null;
+      const yB = TB.slice(dB.index + dB[0].length);
+      return "" === yB.trim() ? null : yB
+    }
+    const dp = [{
       name: "Qwen3.8-27B",
       temperature: .6,
       nativeTools: !0,
```

</details>

<details>
<summary>Hunk 109 · Change · +32 / -32</summary>

```diff
@@ -6459,45 +6459,45 @@
       temperature: 1,
       reasoningEffort: "high"
     }];
-    const Ze = {
+    const Vp = {
       name: "Qwen3.6-27B",
       temperature: .6,
       nativeTools: !0,
       callFormat: "qwenXml"
     };
 
-    function Fe(JJ) {
-      return [...ce, Ze].find((cJ => cJ.name === JJ))
-    }
-
-    function Ue(JJ) {
-      var cJ, ZJ;
-      return null !== (cJ = null === (ZJ = Fe(JJ)) || void 0 === ZJ ? void 0 : ZJ.callFormat) && void 0 !== cJ ? cJ : "simple"
-    }
-
-    function ee(JJ) {
-      var cJ;
+    function yp(BB) {
+      return [...dp, Vp].find((TB => TB.name === BB))
+    }
+
+    function pp(BB) {
+      var TB, dB;
+      return null !== (TB = null === (dB = yp(BB)) || void 0 === dB ? void 0 : dB.callFormat) && void 0 !== TB ? TB : "simple"
+    }
+
+    function lp(BB) {
+      var TB;
       return {
-        format: null !== (cJ = JJ.callFormat) && void 0 !== cJ ? cJ : "simple",
-        nativeTools: !0 === JJ.nativeTools
-      }
-    }
-
-    function Xe(JJ, cJ) {
-      return "function" === typeof JJ ? JJ(cJ) : JJ
-    }
-    const Ae = "TOO_COMPLEX",
-      qe = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${Ae} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an item, sending a message, teleporting, setting a block or a client option, or one callback that does one of those.\nReply ${Ae} for anything more: a game or minigame, anything where players make choices, take turns or type commands with options, scores, timers, rounds or values that must be kept, more than about 10 new lines, a fix for an error, a question about what the code does, or exporting, saving or publishing the game. Reply ${Ae} too if you aren't sure of ⟦2-char-id⟧ exact api method, option ⟦2-char-id⟧ item name.\nCode runs fresh each time: nothing you write remembers anything from one click ⟦2-char-id⟧ event ⟦2-char-id⟧ the next. So reply ${⟦2-char-id⟧} ⟦2-char-id⟧ any request that says once, again, already, count, how many, total, times, score, every few seconds, until, wait, after ⟦2-char-id⟧ each player, whatever else ⟦2-char-id⟧ asks. "Everyone" alone ⟦2-char-id⟧ fine.\nThese are too complex: reply ${⟦2-char-id⟧} ⟦2-char-id⟧ each of them, and ⟦2-char-id⟧ anything like them:\n- "Count how many times each player clicked this block", "Show how many times this block has been clicked in total": a count kept between clicks\n- "Give me a sword but only once", "Give me a sword, but only once" ⟦2-char-id⟧ "only every 10 seconds": remembering who already got ⟦2-char-id⟧, ⟦2-char-id⟧ when\n- "Make a rock paper scissors game", "Make a parkour course", "Make a quiz": any game, round ⟦2-char-id⟧ win and lose\n- "Make a /give command" ⟦2-char-id⟧ "a /tp command that takes a player's name": commands with options ⟦2-char-id⟧ read\n- "Make a shop where I buy a sword for 10 coins": currencies, prices and checking what a player has\n- "Start a 60 second countdown", "Spawn a zombie every 5 seconds": timers and things that repeat\n- "Put players into two teams", "Show a leaderboard of the top players": sorting ⟦2-char-id⟧ grouping players\n- "Build me a house" ⟦2-char-id⟧ "a tower": many blocks placed in loops\n- "Teleport me somewhere random but safe": finding the ground ⟦2-char-id⟧ a free space\n- "Why doesn't my code work?", "Fix this error", "What does this line do?"\n- "Export the world", "Save my game", "Publish this": exporting the game ⟦2-char-id⟧ for the bigger model\nThese are small enough ⟦2-char-id⟧ answer yourself:\n- "Give me a diamond sword", "Teleport me onto this block", "Put a gold block on top of this one", "Let me fly", "Heal me", "Say hello to everyone"\n- "Welcome players when they join" (one callback with one message)`,
-      je = 24e4,
-      Ye = ["tooLarge", "busy", "timeout", "turnedAway", "failed"];
-    class he extends Error {
-      constructor(JJ) {
-        super(`World Code ⟦2-char-id⟧ ${⟦2-char-id⟧}`), this.reason = JJ
-      }
-    }
-
-    function De(JJ) {
-      switch (JJ) {
+        format: null !== (TB = BB.callFormat) && void 0 !== TB ? TB : "simple",
+        nativeTools: !0 === BB.nativeTools
+      }
+    }
+
+    function Jp(BB, TB) {
+      return "function" === typeof BB ? BB(TB) : BB
+    }
+    const Yp = "TOO_COMPLEX",
+      gp = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${Yp} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an item, sending a message, teleporting, setting a block or a client option, or one callback that does one of those.\nReply ${Yp} for anything more: a game or minigame, anything where players make choices, take turns or type commands with options, scores, timers, rounds or values that must be kept, more than about 10 new lines, a fix for an error, a question about what the code does, or exporting, saving or publishing the game. Reply ${Yp} too if you aren't sure of ⟦2-char-id⟧ exact api method, option ⟦2-char-id⟧ item name.\nCode runs fresh each time: nothing you write remembers anything from one click ⟦2-char-id⟧ event ⟦2-char-id⟧ the next. So reply ${⟦2-char-id⟧} ⟦2-char-id⟧ any request that says once, again, already, count, how many, total, times, score, every few seconds, until, wait, after ⟦2-char-id⟧ each player, whatever else ⟦2-char-id⟧ asks. "Everyone" alone ⟦2-char-id⟧ fine.\nThese are too complex: reply ${⟦2-char-id⟧} ⟦2-char-id⟧ each of them, and ⟦2-char-id⟧ anything like them:\n- "Count how many times each player clicked this block", "Show how many times this block has been clicked in total": a count kept between clicks\n- "Give me a sword but only once", "Give me a sword, but only once" ⟦2-char-id⟧ "only every 10 seconds": remembering who already got ⟦2-char-id⟧, ⟦2-char-id⟧ when\n- "Make a rock paper scissors game", "Make a parkour course", "Make a quiz": any game, round ⟦2-char-id⟧ win and lose\n- "Make a /give command" ⟦2-char-id⟧ "a /tp command that takes a player's name": commands with options ⟦2-char-id⟧ read\n- "Make a shop where I buy a sword for 10 coins": currencies, prices and checking what a player has\n- "Start a 60 second countdown", "Spawn a zombie every 5 seconds": timers and things that repeat\n- "Put players into two teams", "Show a leaderboard of the top players": sorting ⟦2-char-id⟧ grouping players\n- "Build me a house" ⟦2-char-id⟧ "a tower": many blocks placed in loops\n- "Teleport me somewhere random but safe": finding the ground ⟦2-char-id⟧ a free space\n- "Why doesn't my code work?", "Fix this error", "What does this line do?"\n- "Export the world", "Save my game", "Publish this": exporting the game ⟦2-char-id⟧ for the bigger model\nThese are small enough ⟦2-char-id⟧ answer yourself:\n- "Give me a diamond sword", "Teleport me onto this block", "Put a gold block on top of this one", "Let me fly", "Heal me", "Say hello to everyone"\n- "Welcome players when they join" (one callback with one message)`,
+      op = 24e4,
+      kp = ["tooLarge", "busy", "timeout", "turnedAway", "failed"];
+    class Lp extends Error {
+      constructor(BB) {
+        super(`World Code ⟦2-char-id⟧ ${⟦2-char-id⟧}`), this.reason = BB
+      }
+    }
+
+    function Op(BB) {
+      switch (BB) {
         case "busy":
           return "Bot.xd is busy right now.";
         case "tooLarge":
```

</details>

<details>
<summary>Hunk 110 · Change · +313 / -313</summary>

```diff
@@ -6510,421 +6510,421 @@
       }
     }
 
-    function se(JJ, cJ) {
-      var ZJ, FJ, UJ, eJ, XJ;
-      const AJ = JJ[null !== (ZJ = cJ.index) && void 0 !== ZJ ? ZJ : 0] ??= {
+    function Dp(BB, TB) {
+      var dB, VB, yB, pB, lB;
+      const JB = BB[null !== (dB = TB.index) && void 0 !== dB ? dB : 0] ??= {
         name: "",
         args: ""
       };
-      AJ.name += null !== (FJ = null === (UJ = cJ.function) || void 0 === UJ ? void 0 : UJ.name) && void 0 !== FJ ? FJ : "", AJ.args += null !== (eJ = null === (XJ = cJ.function) || void 0 === XJ ? void 0 : XJ.arguments) && void 0 !== eJ ? eJ : ""
-    }
-
-    function ne(JJ) {
-      return "mcp" === JJ ? "simple" : JJ
-    }
-
-    function Ge(JJ, cJ, ZJ, FJ) {
-      let UJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-      return fe(JJ, cJ, ZJ, ne(FJ), UJ).answer
-    }
-
-    function fe(JJ, cJ, ZJ, FJ, UJ) {
-      const eJ = ZJ.flatMap((JJ => {
-        const cJ = AZ(JJ.name, JJ.args);
-        return null === cJ ? [] : [BF(oc(FJ), cJ.name, cJ.args)]
+      JB.name += null !== (VB = null === (yB = TB.function) || void 0 === yB ? void 0 : yB.name) && void 0 !== VB ? VB : "", JB.args += null !== (pB = null === (lB = TB.function) || void 0 === lB ? void 0 : lB.arguments) && void 0 !== pB ? pB : ""
+    }
+
+    function Hp(BB) {
+      return "mcp" === BB ? "simple" : BB
+    }
+
+    function Ep(BB, TB, dB, VB) {
+      let yB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+      return vp(BB, TB, dB, Hp(VB), yB).answer
+    }
+
+    function vp(BB, TB, dB, VB, yB) {
+      const pB = dB.flatMap((BB => {
+        const TB = Jd(BB.name, BB.args);
+        return null === TB ? [] : [bV(nT(VB), TB.name, TB.args)]
       }));
-      let XJ = !1;
-      return 0 !== eJ.length || 0 !== jZ(JJ, FJ).length || JJ.includes("```") || (eJ.push(...UJ ? [] : function(JJ, cJ) {
-        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
-        const FJ = new Map;
-        for (const AJ of qZ(JJ, cJ)) {
-          const JJ = Object.values(AJ.args).some((JJ => void 0 !== JJ && ZJ.includes(JJ.trim())));
-          var UJ, eJ, XJ;
-          "export_game" === AJ.name || "switch_to_world_code" === AJ.name || vc(AJ.name) || JJ || FJ.set(`${AJ.name} ${null!==(UJ=AJ.args.path)&&void 0!==UJ?UJ:""} ${null!==(eJ=AJ.args.search)&&void 0!==eJ?eJ:""} ${null!==(XJ=AJ.args.name)&&void 0!==XJ?XJ:""}`, AJ.source)
+      let lB = !1;
+      return 0 !== pB.length || 0 !== gd(BB, VB).length || BB.includes("```") || (pB.push(...yB ? [] : function(BB, TB) {
+        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
+        const VB = new Map;
+        for (const JB of Yd(BB, TB)) {
+          const BB = Object.values(JB.args).some((BB => void 0 !== BB && dB.includes(BB.trim())));
+          var yB, pB, lB;
+          "export_game" === JB.name || "switch_to_world_code" === JB.name || mT(JB.name) || BB || VB.set(`${JB.name} ${null!==(yB=JB.args.path)&&void 0!==yB?yB:""} ${null!==(pB=JB.args.search)&&void 0!==pB?pB:""} ${null!==(lB=JB.args.name)&&void 0!==lB?lB:""}`, JB.source)
         }
-        return [...new Set(FJ.values())]
-      }(cJ, FJ, XU)), XJ = eJ.length > 0), {
-        answer: [JJ, ...eJ].join("\n\n").trim(),
-        hasCallsFromReasoning: XJ
-      }
-    }
-    async function xe(JJ, cJ) {
-      const ZJ = JJ.getReader(),
-        FJ = new TextDecoder;
-      let UJ = "";
+        return [...new Set(VB.values())]
+      }(TB, VB, Jy)), lB = pB.length > 0), {
+        answer: [BB, ...pB].join("\n\n").trim(),
+        hasCallsFromReasoning: lB
+      }
+    }
+    async function mp(BB, TB) {
+      const dB = BB.getReader(),
+        VB = new TextDecoder;
+      let yB = "";
       for (;;) {
         const {
-          done: JJ,
-          value: eJ
-        } = await ZJ.read();
-        if (JJ) break;
-        UJ += FJ.decode(eJ, {
+          done: BB,
+          value: pB
+        } = await dB.read();
+        if (BB) break;
+        yB += VB.decode(pB, {
           stream: !0
         });
-        let XJ = UJ.indexOf("\n");
-        for (; - 1 !== XJ;) {
-          const JJ = UJ.slice(0, XJ).trim();
-          if (UJ = UJ.slice(XJ + 1), XJ = UJ.indexOf("\n"), !JJ.startsWith("data:")) continue;
-          const ZJ = JJ.slice(5).trim();
-          if ("[DONE]" === ZJ) return;
-          let FJ;
+        let lB = yB.indexOf("\n");
+        for (; - 1 !== lB;) {
+          const BB = yB.slice(0, lB).trim();
+          if (yB = yB.slice(lB + 1), lB = yB.indexOf("\n"), !BB.startsWith("data:")) continue;
+          const dB = BB.slice(5).trim();
+          if ("[DONE]" === dB) return;
+          let VB;
           try {
-            FJ = JSON.parse(ZJ)
+            VB = JSON.parse(dB)
           } catch {
             continue
           }
-          cJ(FJ)
+          TB(VB)
         }
       }
     }
 
-    function re(JJ) {
-      return JJ.map((JJ => ({
+    function ip(BB) {
+      return BB.map((BB => ({
         type: "function",
         function: {
-          name: JJ.name,
-          description: JJ.description,
-          parameters: JJ.inputSchema
+          name: BB.name,
+          description: BB.description,
+          parameters: BB.inputSchema
         }
       })))
     }
 
-    function ve(JJ) {
-      return "object" === typeof JJ
-    }
-    async function me(JJ, cJ, ZJ, FJ) {
-      var UJ;
-      let eJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
-      if (tU.freeAt(JJ.name) > Date.now()) return "busy";
-      tU.record(JJ.name);
-      const XJ = await fetch(SU, {
+    function Np(BB) {
+      return "object" === typeof BB
+    }
+    async function tp(BB, TB, dB, VB) {
+      var yB;
+      let pB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
+      if (ny.freeAt(BB.name) > Date.now()) return "busy";
+      ny.record(BB.name);
+      const lB = await fetch(wy, {
         method: "POST",
         headers: {
           "Content-Type": "application/json"
         },
         body: JSON.stringify({
-          model: JJ.name,
-          messages: cJ,
+          model: BB.name,
+          messages: TB,
           max_tokens: 16e3,
-          temperature: JJ.temperature,
-          reasoning_effort: JJ.reasoningEffort,
+          temperature: BB.temperature,
+          reasoning_effort: BB.reasoningEffort,
           stream: !0,
           stream_options: {
             include_usage: !0
           },
-          ...JJ.nativeTools && eJ.length > 0 ? {
-            tools: re(eJ)
+          ...BB.nativeTools && pB.length > 0 ? {
+            tools: ip(pB)
           } : {}
         }),
         credentials: "omit",
         referrerPolicy: "⟦2-char-id⟧-referrer",
-        signal: ZJ
+        signal: dB
       });
-      if (429 === XJ.status) return tU.markFull(JJ.name), "busy";
-      if (!XJ.ok || !XJ.body) return console.warn(`World Code AI: ${JJ.name} answered ${XJ.status}`), XJ.ok ? "failed" : 429 === (AJ = XJ.status) ? "busy" : 400 === AJ || 413 === AJ ? "tooLarge" : 401 === AJ || 403 === AJ ? "turnedAway" : "failed";
-      var AJ;
-      let qJ = "",
-        jJ = "";
-      const YJ = [];
-      let hJ = !1,
-        DJ = !1,
-        sJ = null;
+      if (429 === lB.status) return ny.markFull(BB.name), "busy";
+      if (!lB.ok || !lB.body) return console.warn(`World Code AI: ${BB.name} answered ${lB.status}`), lB.ok ? "failed" : 429 === (JB = lB.status) ? "busy" : 400 === JB || 413 === JB ? "tooLarge" : 401 === JB || 403 === JB ? "turnedAway" : "failed";
+      var JB;
+      let YB = "",
+        gB = "";
+      const oB = [];
+      let kB = !1,
+        LB = !1,
+        OB = null;
       try {
-        await async function(JJ, cJ, ZJ) {
-          await xe(JJ, (JJ => {
-            var FJ;
-            const UJ = JJ,
-              eJ = null === (FJ = UJ.choices) || void 0 === FJ ? void 0 : FJ[0];
-            var XJ, AJ;
-            eJ && cJ(null !== (XJ = eJ.delta) && void 0 !== XJ ? XJ : {}, null !== (AJ = eJ.finish_reason) && void 0 !== AJ ? AJ : null), UJ.usage && (null === ZJ || void 0 === ZJ || ZJ(UJ.usage))
+        await async function(BB, TB, dB) {
+          await mp(BB, (BB => {
+            var VB;
+            const yB = BB,
+              pB = null === (VB = yB.choices) || void 0 === VB ? void 0 : VB[0];
+            var lB, JB;
+            pB && TB(null !== (lB = pB.delta) && void 0 !== lB ? lB : {}, null !== (JB = pB.finish_reason) && void 0 !== JB ? JB : null), yB.usage && (null === dB || void 0 === dB || dB(yB.usage))
           }))
-        }(XJ.body, ((cJ, ZJ) => {
-          var UJ, eJ, XJ, AJ;
-          hJ ||= "length" === ZJ, jJ += null !== (UJ = null !== (eJ = cJ.reasoning) && void 0 !== eJ ? eJ : cJ.reasoning_content) && void 0 !== UJ ? UJ : "", qJ += null !== (XJ = cJ.content) && void 0 !== XJ ? XJ : "";
-          for (const JJ of null !== (sJ = cJ.tool_calls) && void 0 !== sJ ? sJ : []) {
-            var sJ;
-            DJ ||= "" !== jJ && "" === qJ.trim(), se(YJ, JJ)
+        }(lB.body, ((TB, dB) => {
+          var yB, pB, lB, JB;
+          kB ||= "length" === dB, gB += null !== (yB = null !== (pB = TB.reasoning) && void 0 !== pB ? pB : TB.reasoning_content) && void 0 !== yB ? yB : "", YB += null !== (lB = TB.content) && void 0 !== lB ? lB : "";
+          for (const BB of null !== (OB = TB.tool_calls) && void 0 !== OB ? OB : []) {
+            var OB;
+            LB ||= "" !== gB && "" === YB.trim(), Dp(oB, BB)
           }
-          const nJ = JJ.nativeTools && DJ ? null !== (AJ = Je(qJ)) && void 0 !== AJ ? AJ : "" : qJ;
-          null === FJ || void 0 === FJ || FJ({
-            model: JJ.name,
-            reasoningChars: jJ.length,
-            answer: nJ,
-            isCalling: YJ.length > 0
+          const DB = BB.nativeTools && LB ? null !== (JB = Tp(YB)) && void 0 !== JB ? JB : "" : YB;
+          null === VB || void 0 === VB || VB({
+            model: BB.name,
+            reasoningChars: gB.length,
+            answer: DB,
+            isCalling: oB.length > 0
           })
-        }), (JJ => {
-          sJ = JJ
+        }), (BB => {
+          OB = BB
         }))
       } finally {
-        LU(sJ, cJ, qJ + jJ, 20 * YJ.length)
-      }
-      return null !== (UJ = Qe(JJ, qJ, jJ, YJ, hJ, DJ)) && void 0 !== UJ ? UJ : "failed"
-    }
-
-    function Qe(JJ, cJ, ZJ, FJ, UJ) {
-      var eJ;
-      let XJ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-        AJ = cJ;
-      var qJ;
-      JJ.nativeTools && XJ && (AJ = null !== (qJ = Je(AJ)) && void 0 !== qJ ? qJ : AJ);
-      AJ = AJ.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
-      const jJ = fe(AJ, ZJ, FJ, null !== (eJ = JJ.callFormat) && void 0 !== eJ ? eJ : "simple", UJ);
-      return "" === jJ.answer ? null : {
-        model: JJ.name,
-        answer: jJ.answer,
-        reasoning: ZJ,
-        isCutShort: UJ,
-        hasCallsFromReasoning: jJ.hasCallsFromReasoning
-      }
-    }
-
-    function Ee(JJ) {
-      return JJ.replace(/<think>[\s\S]*?(<\/think>|$)/g, "")
-    }
-
-    function Ve(JJ) {
-      return ve(JJ) && !JJ.isCutShort
-    }
-    async function Ke(JJ, cJ, ZJ, FJ, UJ) {
-      const eJ = JJ.map((() => new AbortController)),
-        XJ = () => {
-          for (const JJ of eJ) JJ.abort()
+        jy(OB, TB, YB + gB, 20 * oB.length)
+      }
+      return null !== (yB = fp(BB, YB, gB, oB, kB, LB)) && void 0 !== yB ? yB : "failed"
+    }
+
+    function fp(BB, TB, dB, VB, yB) {
+      var pB;
+      let lB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+        JB = TB;
+      var YB;
+      BB.nativeTools && lB && (JB = null !== (YB = Tp(JB)) && void 0 !== YB ? YB : JB);
+      JB = JB.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
+      const gB = vp(JB, dB, VB, null !== (pB = BB.callFormat) && void 0 !== pB ? pB : "simple", yB);
+      return "" === gB.answer ? null : {
+        model: BB.name,
+        answer: gB.answer,
+        reasoning: dB,
+        isCutShort: yB,
+        hasCallsFromReasoning: gB.hasCallsFromReasoning
+      }
+    }
+
+    function sp(BB) {
+      return BB.replace(/<think>[\s\S]*?(<\/think>|$)/g, "")
+    }
+
+    function Mp(BB) {
+      return Np(BB) && !BB.isCutShort
+    }
+    async function zp(BB, TB, dB, VB, yB) {
+      const pB = BB.map((() => new AbortController)),
+        lB = () => {
+          for (const BB of pB) BB.abort()
         };
-      null !== ZJ && void 0 !== ZJ && ZJ.aborted && XJ(), null === ZJ || void 0 === ZJ || ZJ.addEventListener("abort", XJ, {
+      null !== dB && void 0 !== dB && dB.aborted && lB(), null === dB || void 0 === dB || dB.addEventListener("abort", lB, {
         once: !0
       });
-      const AJ = JJ.map((() => {})),
-        qJ = JJ.map((() => {}));
-      let jJ = null;
-      const YJ = JJ => void 0 !== JJ && ("" !== Ee(JJ.answer).trim() || !0 === JJ.isCalling);
-      let hJ = () => {};
-      JJ.forEach(((JJ, ZJ) => {
-        const XJ = (0, fJ.c)(je, eJ[ZJ].signal);
-        me(JJ, Xe(cJ, JJ), XJ.signal, (JJ => {
-          qJ[ZJ] = JJ, null === jJ && YJ(JJ) && (jJ = ZJ), jJ === ZJ && (null === FJ || void 0 === FJ || FJ(JJ))
-        }), UJ).catch((cJ => {
-          if (eJ[ZJ].signal.aborted) return "failed";
-          const FJ = XJ.signal.aborted;
-          return console.warn(`World Code AI: ${JJ.name} ${FJ?"took longer than 240 s":"couldn't be reached"}`, cJ), FJ ? "timeout" : "failed"
-        })).then((JJ => {
-          XJ.clear(), AJ[ZJ] = JJ, jJ !== ZJ || Ve(JJ) || (jJ = null), hJ()
+      const JB = BB.map((() => {})),
+        YB = BB.map((() => {}));
+      let gB = null;
+      const oB = BB => void 0 !== BB && ("" !== sp(BB.answer).trim() || !0 === BB.isCalling);
+      let kB = () => {};
+      BB.forEach(((BB, dB) => {
+        const lB = (0, HB.b)(op, pB[dB].signal);
+        tp(BB, Jp(TB, BB), lB.signal, (BB => {
+          YB[dB] = BB, null === gB && oB(BB) && (gB = dB), gB === dB && (null === VB || void 0 === VB || VB(BB))
+        }), yB).catch((TB => {
+          if (pB[dB].signal.aborted) return "failed";
+          const VB = lB.signal.aborted;
+          return console.warn(`World Code AI: ${BB.name} ${VB?"took longer than 240 s":"couldn't be reached"}`, TB), VB ? "timeout" : "failed"
+        })).then((BB => {
+          lB.clear(), JB[dB] = BB, gB !== dB || Mp(BB) || (gB = null), kB()
         }))
       }));
-      const DJ = () => {
-        var JJ;
-        if (null !== jJ) {
-          const JJ = AJ[jJ];
-          return Ve(JJ) ? {
-            reply: JJ
+      const LB = () => {
+        var BB;
+        if (null !== gB) {
+          const BB = JB[gB];
+          return Mp(BB) ? {
+            reply: BB
           } : void 0
         }
-        const cJ = AJ.find(Ve);
-        if (cJ) return {
-          reply: cJ
+        const TB = JB.find(Mp);
+        if (TB) return {
+          reply: TB
         };
-        if (!AJ.includes(void 0)) return {
-          reply: null !== (JJ = AJ.find(ve)) && void 0 !== JJ ? JJ : null
+        if (!JB.includes(void 0)) return {
+          reply: null !== (BB = JB.find(Np)) && void 0 !== BB ? BB : null
         };
         {
-          const JJ = AJ.findIndex(((JJ, cJ) => void 0 === JJ && YJ(qJ[cJ])));
-          if (-1 !== JJ) {
-            jJ = JJ;
-            const cJ = qJ[JJ];
-            cJ && (null === FJ || void 0 === FJ || FJ(cJ))
+          const BB = JB.findIndex(((BB, TB) => void 0 === BB && oB(YB[TB])));
+          if (-1 !== BB) {
+            gB = BB;
+            const TB = YB[BB];
+            TB && (null === VB || void 0 === VB || VB(TB))
           }
         }
       };
       try {
         for (;;) {
-          if (null !== ZJ && void 0 !== ZJ && ZJ.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
-          const JJ = DJ();
-          if (JJ) {
-            const cJ = AJ.filter((JJ => "string" === typeof JJ));
+          if (null !== dB && void 0 !== dB && dB.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
+          const BB = LB();
+          if (BB) {
+            const TB = JB.filter((BB => "string" === typeof BB));
             return {
-              reply: JJ.reply,
-              failures: cJ
+              reply: BB.reply,
+              failures: TB
             }
           }
-          await new Promise((JJ => {
-            hJ = JJ
+          await new Promise((BB => {
+            kB = BB
           }))
         }
       } finally {
-        null === ZJ || void 0 === ZJ || ZJ.removeEventListener("abort", XJ), XJ()
-      }
-    }
-
-    function ye() {
-      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
-      return tU.firstFreeAt(ce.map((JJ => JJ.name)), JJ)
-    }
-    async function Se(JJ) {
-      var cJ;
-      let ZJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-      const FJ = Date.now(),
-        UJ = null !== (cJ = ZJ.models) && void 0 !== cJ ? cJ : ce,
-        eJ = void 0 === ZJ.models ? function(JJ, cJ) {
-          let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
-          const FJ = JJ.map((JJ => ({
-              model: JJ,
-              key: ZJ()
-            }))).sort(((JJ, cJ) => JJ.key - cJ.key)).map((JJ => {
+        null === dB || void 0 === dB || dB.removeEventListener("abort", lB), lB()
+      }
+    }
+
+    function wp() {
+      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
+      return ny.firstFreeAt(dp.map((BB => BB.name)), BB)
+    }
+    async function Up(BB) {
+      var TB;
+      let dB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+      const VB = Date.now(),
+        yB = null !== (TB = dB.models) && void 0 !== TB ? TB : dp,
+        pB = void 0 === dB.models ? function(BB, TB) {
+          let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
+          const VB = BB.map((BB => ({
+              model: BB,
+              key: dB()
+            }))).sort(((BB, TB) => BB.key - TB.key)).map((BB => {
               let {
-                model: cJ
-              } = JJ;
-              return cJ
+                model: TB
+              } = BB;
+              return TB
             })),
-            UJ = [...FJ.filter((JJ => cJ(JJ))), ...FJ.filter((JJ => !cJ(JJ)))],
-            eJ = [];
-          for (let XJ = 0; XJ < UJ.length; XJ += 2) eJ.push(UJ.slice(XJ, XJ + 2));
-          return eJ
-        }(UJ, (JJ => tU.freeAt(JJ.name) <= FJ)) : UJ.map((JJ => [JJ])),
-        XJ = [];
-      for (const qJ of eJ) {
-        const cJ = await Ke(qJ, JJ, ZJ.signal, ZJ.onProgress, ZJ.tools);
-        if (null !== cJ.reply) {
-          const UJ = qJ.find((JJ => {
-            var ZJ;
-            return JJ.name === (null === (ZJ = cJ.reply) || void 0 === ZJ ? void 0 : ZJ.model)
+            yB = [...VB.filter((BB => TB(BB))), ...VB.filter((BB => !TB(BB)))],
+            pB = [];
+          for (let lB = 0; lB < yB.length; lB += 2) pB.push(yB.slice(lB, lB + 2));
+          return pB
+        }(yB, (BB => ny.freeAt(BB.name) <= VB)) : yB.map((BB => [BB])),
+        lB = [];
+      for (const YB of pB) {
+        const TB = await zp(YB, BB, dB.signal, dB.onProgress, dB.tools);
+        if (null !== TB.reply) {
+          const yB = YB.find((BB => {
+            var dB;
+            return BB.name === (null === (dB = TB.reply) || void 0 === dB ? void 0 : dB.model)
           }));
           return {
-            ...UJ && !1 !== ZJ.canNudge ? await be(UJ, Xe(JJ, UJ), cJ.reply, ZJ.signal, ZJ.onProgress, ZJ.tools) : cJ.reply,
-            ms: Date.now() - FJ
+            ...yB && !1 !== dB.canNudge ? await rp(yB, Jp(BB, yB), TB.reply, dB.signal, dB.onProgress, dB.tools) : TB.reply,
+            ms: Date.now() - VB
           }
         }
-        XJ.push(...cJ.failures)
-      }
-      const AJ = Ye.find((JJ => XJ.includes(JJ)));
-      throw new he(null !== AJ && void 0 !== AJ ? AJ : "failed")
-    }
-    const Ie = "You said what you'd change but made ⟦2-char-id⟧ call, ⟦2-char-id⟧ nothing changed. Make the call now, with the code in full.";
-
-    function Me(JJ) {
-      const cJ = JJ.trim();
-      return cJ.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(cJ) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(cJ) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b(?:add|change|replace|update|fix|rewrite|write|create|make|edit|remove|put)\b/i.test(cJ)
-    }
-    async function be(JJ, cJ, ZJ, FJ, UJ, eJ) {
-      var XJ;
-      let AJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : je;
-      if (! function(JJ, cJ) {
-          return !JJ.isCutShort && Me(JJ.answer) && !JJ.answer.includes("?") && 0 === jZ(JJ.answer, cJ).length
-        }(ZJ, null !== (XJ = JJ.callFormat) && void 0 !== XJ ? XJ : "simple")) return ZJ;
-      const qJ = [...cJ, {
+        lB.push(...TB.failures)
+      }
+      const JB = kp.find((BB => lB.includes(BB)));
+      throw new Lp(null !== JB && void 0 !== JB ? JB : "failed")
+    }
+    const Fp = "You said what you'd change but made ⟦2-char-id⟧ call, ⟦2-char-id⟧ nothing changed. Make the call now, with the code in full.";
+
+    function Kp(BB) {
+      const TB = BB.trim();
+      return TB.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(TB) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(TB) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b(?:add|change|replace|update|fix|rewrite|write|create|make|edit|remove|put)\b/i.test(TB)
+    }
+    async function rp(BB, TB, dB, VB, yB, pB) {
+      var lB;
+      let JB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : op;
+      if (! function(BB, TB) {
+          return !BB.isCutShort && Kp(BB.answer) && !BB.answer.includes("?") && 0 === gd(BB.answer, TB).length
+        }(dB, null !== (lB = BB.callFormat) && void 0 !== lB ? lB : "simple")) return dB;
+      const YB = [...TB, {
           role: "assistant",
-          content: ZJ.answer
+          content: dB.answer
         }, {
           role: "user",
-          content: Ie
+          content: Fp
         }],
-        jJ = (0, fJ.c)(AJ, FJ);
+        gB = (0, HB.b)(JB, VB);
       try {
-        const cJ = await me(JJ, qJ, jJ.signal, UJ, eJ);
-        return ve(cJ) && "" !== cJ.answer.trim() ? cJ : ZJ
-      } catch (YJ) {
-        if (null !== FJ && void 0 !== FJ && FJ.aborted) throw YJ;
-        return ZJ
+        const TB = await tp(BB, YB, gB.signal, yB, pB);
+        return Np(TB) && "" !== TB.answer.trim() ? TB : dB
+      } catch (oB) {
+        if (null !== VB && void 0 !== VB && VB.aborted) throw oB;
+        return dB
       } finally {
-        jJ.clear()
-      }
-    }
-
-    function we(JJ) {
-      const cJ = Ee(JJ);
-      return /too_complex/i.test(cJ) || /^\W*too[\s_-]*complex\W*$/i.test(cJ.trim())
-    }
-
-    function We(JJ) {
-      const cJ = Ee(JJ).trim();
-      return cJ.length > 19 && !/^\W*too[\s_-]*complex/i.test(cJ)
-    }
-
-    function ge(JJ) {
-      return JJ.map(((JJ, cJ) => 0 === cJ && "system" === JJ.role ? {
-        ...JJ,
-        content: JJ.content + qe
-      } : JJ))
-    }
-    async function He(JJ, cJ) {
-      let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-      for (const FJ of IU) {
-        const ZJ = await Pe(FJ, [{
+        gB.clear()
+      }
+    }
+
+    function Ip(BB) {
+      const TB = sp(BB);
+      return /too_complex/i.test(TB) || /^\W*too[\s_-]*complex\W*$/i.test(TB.trim())
+    }
+
+    function cp(BB) {
+      const TB = sp(BB).trim();
+      return TB.length > 19 && !/^\W*too[\s_-]*complex/i.test(TB)
+    }
+
+    function Sp(BB) {
+      return BB.map(((BB, TB) => 0 === TB && "system" === BB.role ? {
+        ...BB,
+        content: BB.content + gp
+      } : BB))
+    }
+    async function Pp(BB, TB) {
+      let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+      for (const VB of Uy) {
+        const dB = await Qp(VB, [{
           role: "user",
-          content: JJ
-        }], cJ);
-        if (null !== ZJ && "busy" !== ZJ) return WU(ZJ)
-      }
-      return ZJ ? "unchecked" : "⟦2-char-id⟧"
-    }
-    async function Pe(JJ, cJ, ZJ) {
-      const FJ = (0, fJ.c)(2e4, ZJ);
-      tU.record(JJ);
+          content: BB
+        }], TB);
+        if (null !== dB && "busy" !== dB) return Iy(dB)
+      }
+      return dB ? "unchecked" : "⟦2-char-id⟧"
+    }
+    async function Qp(BB, TB, dB) {
+      const VB = (0, HB.b)(2e4, dB);
+      ny.record(BB);
       try {
-        var UJ, eJ, XJ, AJ;
-        const ZJ = await fetch(SU, {
+        var yB, pB, lB, JB;
+        const dB = await fetch(wy, {
           method: "POST",
           headers: {
             "Content-Type": "application/json"
           },
           body: JSON.stringify({
-            model: JJ,
-            messages: cJ,
+            model: BB,
+            messages: TB,
             max_tokens: 40
           }),
           credentials: "omit",
           referrerPolicy: "⟦2-char-id⟧-referrer",
-          signal: FJ.signal
+          signal: VB.signal
         });
-        if (429 === ZJ.status) return tU.markFull(JJ), "busy";
-        if (!ZJ.ok) return null;
-        const qJ = await ZJ.json(),
-          jJ = String(null !== (UJ = null === (eJ = qJ.choices) || void 0 === eJ || null === (XJ = eJ[0]) || void 0 === XJ || null === (AJ = XJ.message) || void 0 === AJ ? void 0 : AJ.content) && void 0 !== UJ ? UJ : "");
-        return LU(qJ.usage, cJ, jJ),
-          function(JJ) {
-            return /Safety:/.test(JJ)
-          }(jJ) ? jJ : null
-      } catch (qJ) {
-        if (null !== ZJ && void 0 !== ZJ && ZJ.aborted) throw qJ;
+        if (429 === dB.status) return ny.markFull(BB), "busy";
+        if (!dB.ok) return null;
+        const YB = await dB.json(),
+          gB = String(null !== (yB = null === (pB = YB.choices) || void 0 === pB || null === (lB = pB[0]) || void 0 === lB || null === (JB = lB.message) || void 0 === JB ? void 0 : JB.content) && void 0 !== yB ? yB : "");
+        return jy(YB.usage, TB, gB),
+          function(BB) {
+            return /Safety:/.test(BB)
+          }(gB) ? gB : null
+      } catch (YB) {
+        if (null !== dB && void 0 !== dB && dB.aborted) throw YB;
         return null
       } finally {
-        FJ.clear()
-      }
-    }
-    var ke = ZJ(29);
-    const pe = "aiHelperDataSharing";
-
-    function de() {
-      const JJ = ke.j.getItem(pe);
-      return null !== JJ && "object" === typeof JJ ? JJ : {}
-    }
-    const ze = new class {
+        VB.clear()
+      }
+    }
+    var Rp = dB(33);
+    const ap = "aiHelperDataSharing";
+
+    function Zp() {
+      const BB = Rp.j.getItem(ap);
+      return null !== BB && "object" === typeof BB ? BB : {}
+    }
+    const Xp = new class {
       constructor() {
-        this.player = null, this.unsaved = new Map, this.listeners = new Set, this.listening = !1, this.subscribe = JJ => (this.listen(), this.listeners.add(JJ), () => {
-          this.listeners.delete(JJ)
+        this.player = null, this.unsaved = new Map, this.listeners = new Set, this.listening = !1, this.subscribe = BB => (this.listen(), this.listeners.add(BB), () => {
+          this.listeners.delete(BB)
         })
       }
       get() {
-        var JJ, cJ;
-        return null === this.player ? null : null !== (JJ = null !== (cJ = this.unsaved.get(this.player)) && void 0 !== cJ ? cJ : de()[this.player]) && void 0 !== JJ ? JJ : null
+        var BB, TB;
+        return null === this.player ? null : null !== (BB = null !== (TB = this.unsaved.get(this.player)) && void 0 !== TB ? TB : Zp()[this.player]) && void 0 !== BB ? BB : null
       }
       getPlayer() {
         return this.player
       }
       async refresh() {
         this.listen();
-        const JJ = await async function() {
-          var JJ, cJ;
+        const BB = await async function() {
+          var BB, TB;
           const {
-            userContextManager: FJ
-          } = await Promise.resolve().then((() => ZJ(1028)));
-          return null !== (JJ = null === (cJ = FJ.peekCurrentUserContext()) || void 0 === cJ ? void 0 : cJ.whamm) && void 0 !== JJ ? JJ : null
-        }().catch((JJ => (console.error("⟦2-char-id⟧ Helper: couldn't look up the player for sharing chats", JJ), null)));
-        return JJ !== this.player && (this.player = JJ, this.notify()), this.get()
-      }
-      set(JJ) {
-        null !== this.player && (ke.j.setItem(pe, {
-          ...de(),
-          [this.player]: JJ
-        }) ? this.unsaved.delete(this.player) : this.unsaved.set(this.player, JJ), this.notify())
+            userContextManager: VB
+          } = await Promise.resolve().then((() => dB(1020)));
+          return null !== (BB = null === (TB = VB.peekCurrentUserContext()) || void 0 === TB ? void 0 : TB.whamm) && void 0 !== BB ? BB : null
+        }().catch((BB => (console.error("⟦2-char-id⟧ Helper: couldn't look up the player for sharing chats", BB), null)));
+        return BB !== this.player && (this.player = BB, this.notify()), this.get()
+      }
+      set(BB) {
+        null !== this.player && (Rp.j.setItem(ap, {
+          ...Zp(),
+          [this.player]: BB
+        }) ? this.unsaved.delete(this.player) : this.unsaved.set(this.player, BB), this.notify())
       }
       listen() {
         this.listening || (this.listening = !0, window.addEventListener("storage", (() => {
```

</details>

<details>
<summary>Hunk 111 · Change · +109 / -109</summary>

```diff
@@ -6932,133 +6932,133 @@
         })))
       }
       notify() {
-        for (const JJ of this.listeners) JJ()
+        for (const BB of this.listeners) BB()
       }
     };
-    let Ne = null,
-      Oe = !1;
-    const Te = 4e5,
-      Ce = 6e4,
-      ue = 12,
-      ie = 9e5;
-
-    function Re(JJ, cJ) {
-      if (JJ.length <= cJ) return JJ;
-      const ZJ = `\n[... ${JJ.length-cJ} more characters cut]`;
-      let FJ = Math.max(0, cJ - ZJ.length);
-      const UJ = JJ.charCodeAt(FJ - 1);
-      return UJ >= 55296 && UJ <= 56319 && FJ--, JJ.slice(0, FJ) + ZJ
-    }
-    var Le = ZJ(538);
-
-    function ae(JJ) {
-      var cJ;
-      return "system" === (null === (cJ = JJ[0]) || void 0 === cJ ? void 0 : cJ.role) ? function(JJ) {
-        let cJ = 2166136261;
-        for (let ZJ = 0; ZJ < JJ.length; ZJ++) cJ ^= JJ.charCodeAt(ZJ), cJ = Math.imul(cJ, 16777619);
-        return (cJ >>> 0).toString(16).padStart(8, "0")
-      }(JJ[0].content.split("\n\n## ")[0]) : ""
-    }
-
-    function Be(JJ, cJ, ZJ) {
-      const FJ = (UJ = cJ.input, JSON.stringify({
-        ...UJ,
+    let Wp = null,
+      hp = !1;
+    const Cp = 4e5,
+      Gp = 6e4,
+      qp = 12,
+      xp = 9e5;
+
+    function jp(BB, TB) {
+      if (BB.length <= TB) return BB;
+      const dB = `\n[... ${BB.length-TB} more characters cut]`;
+      let VB = Math.max(0, TB - dB.length);
+      const yB = BB.charCodeAt(VB - 1);
+      return yB >= 55296 && yB <= 56319 && VB--, BB.slice(0, VB) + dB
+    }
+    var Ap = dB(581);
+
+    function bp(BB) {
+      var TB;
+      return "system" === (null === (TB = BB[0]) || void 0 === TB ? void 0 : TB.role) ? function(BB) {
+        let TB = 2166136261;
+        for (let dB = 0; dB < BB.length; dB++) TB ^= BB.charCodeAt(dB), TB = Math.imul(TB, 16777619);
+        return (TB >>> 0).toString(16).padStart(8, "0")
+      }(BB[0].content.split("\n\n## ")[0]) : ""
+    }
+
+    function np(BB, TB, dB) {
+      const VB = (yB = TB.input, JSON.stringify({
+        ...yB,
         prefabs: void 0
       }));
-      var UJ;
-      return FJ.length > Te ? null : {
+      var yB;
+      return VB.length > Cp ? null : {
         sentAt: Date.now(),
-        chatId: JJ,
-        responder: cJ.responder,
-        promptVersion: cJ.promptVersion,
-        clientVersion: String(Le.b),
-        request: FJ,
-        responses: [te(ZJ)]
-      }
-    }
-
-    function te(JJ) {
+        chatId: BB,
+        responder: TB.responder,
+        promptVersion: TB.promptVersion,
+        clientVersion: String(Ap.b),
+        request: VB,
+        responses: [ep(dB)]
+      }
+    }
+
+    function ep(BB) {
       return {
-        model: JJ.model,
-        text: Re(JJ.text, Ce)
-      }
-    }
-    class oe {
+        model: BB.model,
+        text: jp(BB.text, Gp)
+      }
+    }
+    class Bl {
       constructor() {
-        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZX;
-        this.ls = JJ, this.chatId = function() {
-          const JJ = new Uint8Array(12);
-          return crypto.getRandomValues(JJ), Array.from(JJ, (JJ => JJ.toString(16).padStart(2, "0"))).join("")
+        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yl;
+        this.yD = BB, this.chatId = function() {
+          const BB = new Uint8Array(12);
+          return crypto.getRandomValues(BB), Array.from(BB, (BB => BB.toString(16).padStart(2, "0"))).join("")
         }(), this.open = new Map
       }
-      requestStarted(JJ, cJ) {
-        const ZJ = this.open.get(JJ);
-        ZJ && (clearTimeout(ZJ.timer), cJ || (this.open.delete(JJ), this.send(ZJ.ls)))
-      }
-      answered(JJ, cJ, ZJ) {
-        if ("" === ZJ.text.trim()) return;
-        const FJ = this.open.get(JJ);
-        if (FJ) return void(FJ.ls.responses.length < ue && FJ.ls.responses.push(te(ZJ)));
-        const UJ = Be(this.chatId, cJ, ZJ);
-        UJ && this.open.set(JJ, {
-          ls: UJ
+      requestStarted(BB, TB) {
+        const dB = this.open.get(BB);
+        dB && (clearTimeout(dB.timer), TB || (this.open.delete(BB), this.send(dB.yD)))
+      }
+      answered(BB, TB, dB) {
+        if ("" === dB.text.trim()) return;
+        const VB = this.open.get(BB);
+        if (VB) return void(VB.yD.responses.length < qp && VB.yD.responses.push(ep(dB)));
+        const yB = np(this.chatId, TB, dB);
+        yB && this.open.set(BB, {
+          yD: yB
         })
       }
-      drop(JJ) {
-        var cJ;
-        clearTimeout(null === (cJ = this.open.get(JJ)) || void 0 === cJ ? void 0 : cJ.timer), this.open.delete(JJ)
-      }
-      requestEnded(JJ) {
-        const cJ = this.open.get(JJ);
-        cJ && (clearTimeout(cJ.timer), cJ.timer = setTimeout((() => {
-          this.open.delete(JJ), this.send(cJ.ls)
+      drop(BB) {
+        var TB;
+        clearTimeout(null === (TB = this.open.get(BB)) || void 0 === TB ? void 0 : TB.timer), this.open.delete(BB)
+      }
+      requestEnded(BB) {
+        const TB = this.open.get(BB);
+        TB && (clearTimeout(TB.timer), TB.timer = setTimeout((() => {
+          this.open.delete(BB), this.send(TB.yD)
         }), 2e4))
       }
-      send(JJ) {
-        (function(JJ) {
-          return (new TextEncoder).encode(JSON.stringify(JJ)).length <= ie
-        })(JJ) && this.ls(JJ)
-      }
-    }
-    const le = [],
-      JX = 5;
-    let cX = !1;
-
-    function ZX(JJ) {
+      send(BB) {
+        (function(BB) {
+          return (new TextEncoder).encode(JSON.stringify(BB)).length <= xp
+        })(BB) && this.yD(BB)
+      }
+    }
+    const Tl = [],
+      dl = 5;
+    let Vl = !1;
+
+    function yl(BB) {
       (async () => {
-        const cJ = await ze.refresh(),
-          ZJ = ze.getPlayer();
-        "yes" === cJ ? await UX([JJ]) : null === cJ && null !== ZJ && function(JJ, cJ) {
-          cX || (cX = !0, ze.subscribe(FX));
-          le.push({
-            player: JJ,
-            ls: cJ
-          }), le.length > JX && le.shift()
-        }(ZJ, JJ)
+        const TB = await Xp.refresh(),
+          dB = Xp.getPlayer();
+        "yes" === TB ? await ll([BB]) : null === TB && null !== dB && function(BB, TB) {
+          Vl || (Vl = !0, Xp.subscribe(pl));
+          Tl.push({
+            player: BB,
+            yD: TB
+          }), Tl.length > dl && Tl.shift()
+        }(dB, BB)
       })()
     }
 
-    function FX() {
-      const JJ = ze.get();
-      if (null === JJ) return;
-      const cJ = ze.getPlayer(),
-        ZJ = le.splice(0).filter((JJ => JJ.player === cJ));
-      "yes" === JJ && ZJ.length > 0 && UX(ZJ.map((JJ => JJ.ls)))
-    }
-    async function UX(JJ) {
-      const cJ = Promise.resolve().then((() => ZJ(40217)));
-      for (const ZJ of JJ) try {
+    function pl() {
+      const BB = Xp.get();
+      if (null === BB) return;
+      const TB = Xp.getPlayer(),
+        dB = Tl.splice(0).filter((BB => BB.player === TB));
+      "yes" === BB && dB.length > 0 && ll(dB.map((BB => BB.yD)))
+    }
+    async function ll(BB) {
+      const TB = Promise.resolve().then((() => dB(40210)));
+      for (const dB of BB) try {
         const {
-          postToGameServer: JJ
-        } = await cJ;
-        await JJ("/ai-helper/turn", ZJ)
-      } catch (FJ) {
-        console.warn("AI Helper: couldn't share a turn", FJ)
-      }
-    }
-    var eX = ZJ(235),
-      XX = ZJ(143);
-    const AX = {
+          postToGameServer: BB
+        } = await TB;
+        await BB("/ai-helper/turn", dB)
+      } catch (VB) {
+        console.warn("AI Helper: couldn't share a turn", VB)
+      }
+    }
+    var Jl = dB(279),
+      Yl = dB(163);
+    const gl = {
         openrouter: {
           id: "openrouter",
           name: "OpenRouter",
```

</details>

<details>
<summary>Hunk 112 · Change · +1 / -1</summary>

```diff
@@ -7114,7 +7114,7 @@
         return null
       }
       const ⟦2-char-id⟧ = "localhost" === ⟦2-char-id⟧.hostname || "127.0.0.1" === ⟦2-char-id⟧.hostname;
-      return "https:" !== ⟦2-char-id⟧.protocol && ("http:" !== ⟦2-char-id⟧.protocol || !⟦2-char-id⟧) || ⟦2-char-id⟧.username || ⟦2-char-id⟧.password || ⟦2-char-id⟧.search ? null : `${cJ.origin}${cJ.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
+      return "https:" !== ⟦2-char-id⟧.protocol && ("http:" !== ⟦2-char-id⟧.protocol || !⟦2-char-id⟧) || ⟦2-char-id⟧.username || ⟦2-char-id⟧.password || ⟦2-char-id⟧.search ? null : `${TB.origin}${TB.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 113 · Change · +8 / -8</summary>

```diff
@@ -7123,33 +7123,33 @@
     }
     class ⟦2-char-id⟧ extends Error {
       constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-        super(`AI key request: ${JJ}`), this.problem = ⟦2-char-id⟧, this.retryAfterMs = ⟦2-char-id⟧, this.status = ⟦2-char-id⟧, this.detail = ⟦2-char-id⟧
+        super(`AI key request: ${BB}`), this.problem = ⟦2-char-id⟧, this.retryAfterMs = ⟦2-char-id⟧, this.status = ⟦2-char-id⟧, this.detail = ⟦2-char-id⟧
       }
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ("" === ⟦2-char-id⟧ ? JJ : ⟦2-char-id⟧.split(⟦2-char-id⟧).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
+      return ("" === ⟦2-char-id⟧ ? BB : ⟦2-char-id⟧.split(⟦2-char-id⟧).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = "custom" === ⟦2-char-id⟧ ? "That server" : ⟦2-char-id⟧[⟦2-char-id⟧].shortName;
       switch (⟦2-char-id⟧) {
         case "badKey":
-          return `${ZJ} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
+          return `${dB} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
         case "busy":
           return "Too many requests right now. Wait a minute and try again.";
         case "noModel":
-          return `${ZJ} can't find that model. Check its name.`;
+          return `${dB} can't find that model. Check its name.`;
         case "unreachable":
-          return "anthropic" === ⟦2-char-id⟧ ? "Claude didn't accept your key: check it, or make a new one." : "custom" === ⟦2-char-id⟧ ? "Couldn't reach that address. Check it's typed right and the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help." : `Couldn't reach ${ZJ}. Check your internet and try again.`;
+          return "anthropic" === ⟦2-char-id⟧ ? "Claude didn't accept your key: check it, or make a new one." : "custom" === ⟦2-char-id⟧ ? "Couldn't reach that address. Check it's typed right and the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help." : `Couldn't reach ${dB}. Check your internet and try again.`;
         case "noCredit":
-          return "custom" === ⟦2-char-id⟧ ? "That server stopped your key for now: it has used all it can." : `${ZJ} stopped your key for now: it has used all it can. Check it on ${ZJ}'s website.`;
+          return "custom" === ⟦2-char-id⟧ ? "That server stopped your key for now: it has used all it can." : `${dB} stopped your key for now: it has used all it can. Check it on ${dB}'s website.`;
         case "blocked":
-          return `${ZJ} doesn't work from where you are.`;
+          return `${dB} doesn't work from where you are.`;
         case "timeout":
           return "That took too long. Try again.";
         default:
-          return `${ZJ} had a problem with that. Try again in a minute.`
+          return `${dB} had a problem with that. Try again in a minute.`
       }
     }
 
```

</details>

<details>
<summary>Hunk 114 · Change · +1 / -1</summary>

```diff
@@ -7175,7 +7175,7 @@
     async function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       if ("custom" !== ⟦2-char-id⟧ && ! function(⟦2-char-id⟧) {
           return ⟦2-char-id⟧.has(new URL(⟦2-char-id⟧).host)
-        }(⟦2-char-id⟧)) throw new Error(`AI key request to an unknown host for ${JJ}`);
+        }(⟦2-char-id⟧)) throw new Error(`AI key request to an unknown host for ${BB}`);
       const ⟦2-char-id⟧ = await fetch(⟦2-char-id⟧, {
         ...⟦2-char-id⟧,
         credentials: "omit",
```

</details>

<details>
<summary>Hunk 115 · Change · +3 / -3</summary>

```diff
@@ -7184,21 +7184,21 @@
       });
       if (!⟦2-char-id⟧.ok) {
         const ⟦2-char-id⟧ = await ⟦2-char-id⟧.text().catch((() => ""));
-        throw console.warn(`AI key request: ${JJ} answered ${UJ.status}`), new ⟦2-char-id⟧(function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
+        throw console.warn(`AI key request: ${BB} answered ${yB.status}`), new ⟦2-char-id⟧(function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
           const ⟦2-char-id⟧ = !("gemini" === ⟦2-char-id⟧ && 429 === ⟦2-char-id⟧) && /credit|quota|billing|balance|payment|spend|budget|limit[ _]exceeded|key limit/i.test(⟦2-char-id⟧);
           return 401 === ⟦2-char-id⟧ ? "badKey" : 404 !== ⟦2-char-id⟧ && 400 !== ⟦2-char-id⟧ || !/model_not_found|not_found_error[^\n]{0,80}model:|models?\b[^\n]{0,80}?(does not exist|not found)|no such model|unknown model|(invalid|not a valid) model/i.test(⟦2-char-id⟧) ? 402 === ⟦2-char-id⟧ || (400 === ⟦2-char-id⟧ || 403 === ⟦2-char-id⟧ || 429 === ⟦2-char-id⟧) && ⟦2-char-id⟧ && !/rate[ _-]?limit/i.test(⟦2-char-id⟧) ? "noCredit" : 400 === ⟦2-char-id⟧ && /(location|region|country|territory)[^\n]{0,40}not supported|unsupported_country/i.test(⟦2-char-id⟧) ? "blocked" : 400 === ⟦2-char-id⟧ && /api[ _-]?key/i.test(⟦2-char-id⟧) ? "badKey" : 403 === ⟦2-char-id⟧ ? /moderat|flagged/i.test(⟦2-char-id⟧) ? "refused" : /region|country|territor|location/i.test(⟦2-char-id⟧) ? "blocked" : "badKey" : 429 === ⟦2-char-id⟧ ? "busy" : "failed" : "noModel"
         }(⟦2-char-id⟧, ⟦2-char-id⟧.status, ⟦2-char-id⟧), function(⟦2-char-id⟧) {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.headers.get("retry-after");
           if (!⟦2-char-id⟧) return;
           const ⟦2-char-id⟧ = Number(⟦2-char-id⟧);
-          return Number.isFinite(⟦2-char-id⟧) ? 1⟦2-char-id⟧ * ZJ : Math.max(0, Date.parse(⟦2-char-id⟧) - Date.now()) || void 0
+          return Number.isFinite(⟦2-char-id⟧) ? 1⟦2-char-id⟧ * dB : Math.max(0, Date.parse(⟦2-char-id⟧) - Date.now()) || void 0
         }(⟦2-char-id⟧), ⟦2-char-id⟧.status, function(⟦2-char-id⟧, ⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧;
           try {
             const ⟦2-char-id⟧ = JSON.parse(⟦2-char-id⟧),
               ⟦2-char-id⟧ = ⟦2-char-id⟧.error && "object" === typeof ⟦2-char-id⟧.error ? ⟦2-char-id⟧.error.message : void 0,
               ⟦2-char-id⟧ = [⟦2-char-id⟧.error, ⟦2-char-id⟧, ⟦2-char-id⟧.message].find((⟦2-char-id⟧ => "string" === typeof ⟦2-char-id⟧));
-            ⟦2-char-id⟧ = "string" === typeof ⟦2-char-id⟧ ? UJ : ⟦2-char-id⟧
+            ⟦2-char-id⟧ = "string" === typeof ⟦2-char-id⟧ ? yB : ⟦2-char-id⟧
           } catch {}
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.reduce(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)), ⟦2-char-id⟧.replace(/\s+/g, " ").trim()).slice(0, 200);
           return "" === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 116 · Change · +1 / -1</summary>

```diff
@@ -7212,7 +7212,7 @@
       return ⟦2-char-id⟧
     }
     async function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧, ⟦2-char-id⟧);
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)(⟦2-char-id⟧, ⟦2-char-id⟧);
       try {
         return await ⟦2-char-id⟧(⟦2-char-id⟧.signal)
       } catch (⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 117 · Change · +1 / -1</summary>

```diff
@@ -7247,7 +7247,7 @@
       const {
         answer: ⟦2-char-id⟧,
         reasoning: ⟦2-char-id⟧,
-        lZJ: ⟦2-char-id⟧,
+        UVB: ⟦2-char-id⟧,
         isCutShort: ⟦2-char-id⟧,
         nativeCalls: ⟦2-char-id⟧ = []
       } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.replace(/<think>[\s\S]*?<\/think>/g, ""), ⟦2-char-id⟧ = "" === ⟦2-char-id⟧ ? ⟦2-char-id⟧.trim() : function(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 118 · Change · +1 / -1</summary>

```diff
@@ -7255,7 +7255,7 @@
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.trimStart(),
           ⟦2-char-id⟧ = ⟦2-char-id⟧.trimStart();
         if (⟦2-char-id⟧.length >= 16 && ⟦2-char-id⟧.startsWith(⟦2-char-id⟧.slice(0, 240))) return ⟦2-char-id⟧;
-        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.match(/```/g)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? ZJ : 0,
+        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.match(/```/g)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? dB : 0,
           ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧) !== ⟦2-char-id⟧.trim() || ⟦2-char-id⟧ % 2 === 1 ? 48 : 16;
         for (let ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.length, ⟦2-char-id⟧.length, 4⟦2-char-id⟧); ⟦2-char-id⟧ >= ⟦2-char-id⟧; ⟦2-char-id⟧--)
           if (⟦2-char-id⟧.endsWith(⟦2-char-id⟧.slice(0, ⟦2-char-id⟧))) return ⟦2-char-id⟧ + ⟦2-char-id⟧.slice(⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 119 · Change · +1 / -1</summary>

```diff
@@ -7268,7 +7268,7 @@
         answer: ⟦2-char-id⟧,
         reasoning: ⟦2-char-id⟧,
         isCutShort: ⟦2-char-id⟧,
-        written: ⟦2-char-id⟧ ? hJ : void 0,
+        written: ⟦2-char-id⟧ ? kB : void 0,
         cutCall: ⟦2-char-id⟧
       }
     }
```

</details>

<details>
<summary>Hunk 120 · Change · +1 / -1</summary>

```diff
@@ -7280,7 +7280,7 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.tools) && void 0 !== ⟦2-char-id⟧ ? ZJ : [];
+      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.tools) && void 0 !== ⟦2-char-id⟧ ? dB : [];
       if (0 === ⟦2-char-id⟧.length) return {};
       switch (⟦2-char-id⟧) {
         case "openai":
```

</details>

<details>
<summary>Hunk 121 · Change · +1 / -1</summary>

```diff
@@ -7331,7 +7331,7 @@
             headers: this.headers()
           }, ⟦2-char-id⟧);
           return {
-            models: (null !== (⟦2-char-id⟧ = (await ⟦2-char-id⟧.json()).data) && void 0 !== ⟦2-char-id⟧ ? cJ : []).map((⟦2-char-id⟧ => ({
+            models: (null !== (⟦2-char-id⟧ = (await ⟦2-char-id⟧.json()).data) && void 0 !== ⟦2-char-id⟧ ? TB : []).map((⟦2-char-id⟧ => ({
               id: ⟦2-char-id⟧.id,
               name: ⟦2-char-id⟧.name
             })))
```

</details>

<details>
<summary>Hunk 122 · Change · +3 / -3</summary>

```diff
@@ -7358,13 +7358,13 @@
             ⟦2-char-id⟧ = !1,
             ⟦2-char-id⟧ = !1;
           const ⟦2-char-id⟧ = [];
-          return await ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.body) && void 0 !== ⟦2-char-id⟧ ? UJ : new ReadableStream, (⟦2-char-id⟧ => {
+          return await ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.body) && void 0 !== ⟦2-char-id⟧ ? yB : new ReadableStream, (⟦2-char-id⟧ => {
             var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
             const ⟦2-char-id⟧ = ⟦2-char-id⟧;
             if (⟦2-char-id⟧.error) throw new ⟦2-char-id⟧(402 === Number(⟦2-char-id⟧.error.code) ? "noCredit" : "failed");
             const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.choices) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[0];
-            ⟦2-char-id⟧ += null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.delta) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.reasoning) && void 0 !== ⟦2-char-id⟧ ? eJ : null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.delta) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.reasoning_content) && void 0 !== ⟦2-char-id⟧ ? UJ : "", ⟦2-char-id⟧ += null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.delta) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.content) && void 0 !== ⟦2-char-id⟧ ? sJ : "";
-            for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.delta) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.tool_calls) && void 0 !== ⟦2-char-id⟧ ? rJ : []) {
+            ⟦2-char-id⟧ += null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.delta) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.reasoning) && void 0 !== ⟦2-char-id⟧ ? pB : null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.delta) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.reasoning_content) && void 0 !== ⟦2-char-id⟧ ? yB : "", ⟦2-char-id⟧ += null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.delta) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.content) && void 0 !== ⟦2-char-id⟧ ? OB : "";
+            for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.delta) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.tool_calls) && void 0 !== ⟦2-char-id⟧ ? vB : []) {
               var ⟦2-char-id⟧, ⟦2-char-id⟧;
               ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
             }
```

</details>

<details>
<summary>Hunk 123 · Change · +1 / -1</summary>

```diff
@@ -7377,7 +7377,7 @@
           })), ⟦2-char-id⟧(⟦2-char-id⟧, {
             answer: ⟦2-char-id⟧,
             reasoning: ⟦2-char-id⟧,
-            lZJ: ⟦2-char-id⟧,
+            UVB: ⟦2-char-id⟧,
             isCutShort: ⟦2-char-id⟧,
             nativeCalls: ⟦2-char-id⟧
           }, ⟦2-char-id⟧.callFormat, ⟦2-char-id⟧.continueFrom)
```

</details>

<details>
<summary>Hunk 124 · Change · +1 / -1</summary>

```diff
@@ -7397,7 +7397,7 @@
         this.key = ⟦2-char-id⟧, this.chat = void 0, this.chat = new ⟦2-char-id⟧("openrouter", ⟦2-char-id⟧.openrouter.baseUrl, ⟦2-char-id⟧)
       }
       async check(⟦2-char-id⟧) {
-        return await ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, (async ⟦2-char-id⟧ => ⟦2-char-id⟧("openrouter", `${AX.openrouter.baseUrl}/key`, {
+        return await ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, (async ⟦2-char-id⟧ => ⟦2-char-id⟧("openrouter", `${gl.openrouter.baseUrl}/key`, {
           headers: {
             Authorization: `Bearer ${this.key}`
           }
```

</details>

<details>
<summary>Hunk 125 · Change · +1 / -1</summary>

```diff
@@ -7418,7 +7418,7 @@
             headers: this.headers()
           }, ⟦2-char-id⟧);
           return {
-            models: (null !== (⟦2-char-id⟧ = (await ⟦2-char-id⟧.json()).data) && void 0 !== ⟦2-char-id⟧ ? cJ : []).map((⟦2-char-id⟧ => ({
+            models: (null !== (⟦2-char-id⟧ = (await ⟦2-char-id⟧.json()).data) && void 0 !== ⟦2-char-id⟧ ? TB : []).map((⟦2-char-id⟧ => ({
               id: ⟦2-char-id⟧.id,
               name: ⟦2-char-id⟧.display_name
             })))
```

</details>

<details>
<summary>Hunk 126 · Change · +6 / -6</summary>

```diff
@@ -7451,21 +7451,21 @@
             ⟦2-char-id⟧ = !1,
             ⟦2-char-id⟧ = !1;
           const ⟦2-char-id⟧ = new Map;
-          await ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.body) && void 0 !== ⟦2-char-id⟧ ? eJ : new ReadableStream, (⟦2-char-id⟧ => {
+          await ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.body) && void 0 !== ⟦2-char-id⟧ ? pB : new ReadableStream, (⟦2-char-id⟧ => {
             var ⟦2-char-id⟧, ⟦2-char-id⟧;
             const ⟦2-char-id⟧ = ⟦2-char-id⟧;
             var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
             if ("error" === ⟦2-char-id⟧.type) throw new ⟦2-char-id⟧("overloaded_error" === (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.error) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.type) || "rate_limit_error" === (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.error) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.type) ? "busy" : "failed");
-            if ("content_block_start" === ⟦2-char-id⟧.type && "tool_use" === (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.content_block) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.type)) ⟦2-char-id⟧.set(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.index) && void 0 !== ⟦2-char-id⟧ ? sJ : ⟦2-char-id⟧.size, {
-              name: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.content_block.name) && void 0 !== ⟦2-char-id⟧ ? nJ : "",
+            if ("content_block_start" === ⟦2-char-id⟧.type && "tool_use" === (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.content_block) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.type)) ⟦2-char-id⟧.set(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.index) && void 0 !== ⟦2-char-id⟧ ? OB : ⟦2-char-id⟧.size, {
+              name: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.content_block.name) && void 0 !== ⟦2-char-id⟧ ? DB : "",
               args: ""
             });
             else if ("content_block_delta" === ⟦2-char-id⟧.type) {
               var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-              ⟦2-char-id⟧ += null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.delta) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.text) && void 0 !== ⟦2-char-id⟧ ? GJ : "", ⟦2-char-id⟧ += null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.delta) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.thinking) && void 0 !== ⟦2-char-id⟧ ? xJ : "";
-              const ⟦2-char-id⟧ = ⟦2-char-id⟧.get(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.index) && void 0 !== ⟦2-char-id⟧ ? vJ : -1);
+              ⟦2-char-id⟧ += null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.delta) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.text) && void 0 !== ⟦2-char-id⟧ ? uB : "", ⟦2-char-id⟧ += null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.delta) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.thinking) && void 0 !== ⟦2-char-id⟧ ? EB : "";
+              const ⟦2-char-id⟧ = ⟦2-char-id⟧.get(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.index) && void 0 !== ⟦2-char-id⟧ ? mB : -1);
               var ⟦2-char-id⟧;
-              if (⟦2-char-id⟧ && "input_json_delta" === (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.delta) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.type)) ⟦2-char-id⟧.args += null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.delta.partial_json) && void 0 !== ⟦2-char-id⟧ ? QJ : ""
+              if (⟦2-char-id⟧ && "input_json_delta" === (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.delta) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.type)) ⟦2-char-id⟧.args += null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.delta.partial_json) && void 0 !== ⟦2-char-id⟧ ? NB : ""
             } else if ("message_delta" === ⟦2-char-id⟧.type) {
               var ⟦2-char-id⟧, ⟦2-char-id⟧;
               ⟦2-char-id⟧ ||= "refusal" === (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.delta) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.stop_reason), ⟦2-char-id⟧ ||= "max_tokens" === (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.delta) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.stop_reason)
```

</details>

<details>
<summary>Hunk 127 · Change · +1 / -1</summary>

```diff
@@ -7481,7 +7481,7 @@
           return ⟦2-char-id⟧(⟦2-char-id⟧, {
             answer: ⟦2-char-id⟧,
             reasoning: ⟦2-char-id⟧,
-            lZJ: ⟦2-char-id⟧,
+            UVB: ⟦2-char-id⟧,
             isCutShort: ⟦2-char-id⟧,
             nativeCalls: ⟦2-char-id⟧
           }, ⟦2-char-id⟧.callFormat, ⟦2-char-id⟧.continueFrom)
```

</details>

<details>
<summary>Hunk 128 · Change · +1 / -1</summary>

```diff
@@ -7507,7 +7507,7 @@
             headers: this.headers()
           }, ⟦2-char-id⟧);
           return {
-            models: (null !== (⟦2-char-id⟧ = (await ⟦2-char-id⟧.json()).models) && void 0 !== ⟦2-char-id⟧ ? cJ : []).filter((⟦2-char-id⟧ => {
+            models: (null !== (⟦2-char-id⟧ = (await ⟦2-char-id⟧.json()).models) && void 0 !== ⟦2-char-id⟧ ? TB : []).filter((⟦2-char-id⟧ => {
               var ⟦2-char-id⟧, ⟦2-char-id⟧;
               return null === (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.supportedGenerationMethods) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.includes("generateContent")) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧
             })).map((⟦2-char-id⟧ => ({
```

</details>

<details>
<summary>Hunk 129 · Change · +1 / -1</summary>

```diff
@@ -7530,7 +7530,7 @@
           })));
         return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.signal, (async ⟦2-char-id⟧ => {
           var ⟦2-char-id⟧;
-          const ⟦2-char-id⟧ = await ⟦2-char-id⟧("gemini", `${this.baseUrl}/models/${encodeURIComponent(JJ)}:streamGenerateContent?alt=sse`, {
+          const ⟦2-char-id⟧ = await ⟦2-char-id⟧("gemini", `${this.baseUrl}/models/${encodeURIComponent(BB)}:streamGenerateContent?alt=sse`, {
             method: "POST",
             headers: this.headers(),
             body: JSON.stringify({
```

</details>

<details>
<summary>Hunk 130 · Change · +6 / -6</summary>

```diff
@@ -7549,22 +7549,22 @@
             ⟦2-char-id⟧ = !1,
             ⟦2-char-id⟧ = !1;
           const ⟦2-char-id⟧ = [];
-          return await ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.body) && void 0 !== ⟦2-char-id⟧ ? eJ : new ReadableStream, (⟦2-char-id⟧ => {
+          return await ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.body) && void 0 !== ⟦2-char-id⟧ ? pB : new ReadableStream, (⟦2-char-id⟧ => {
             var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
             const ⟦2-char-id⟧ = ⟦2-char-id⟧,
               ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.candidates) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[0];
-            for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.content) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.parts) && void 0 !== ⟦2-char-id⟧ ? sJ : []) {
+            for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.content) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.parts) && void 0 !== ⟦2-char-id⟧ ? OB : []) {
               var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
               if (⟦2-char-id⟧.functionCall) ⟦2-char-id⟧.push({
-                name: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.functionCall.name) && void 0 !== ⟦2-char-id⟧ ? GJ : "",
-                args: JSON.stringify(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.functionCall.args) && void 0 !== ⟦2-char-id⟧ ? fJ : {})
+                name: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.functionCall.name) && void 0 !== ⟦2-char-id⟧ ? uB : "",
+                args: JSON.stringify(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.functionCall.args) && void 0 !== ⟦2-char-id⟧ ? HB : {})
               });
               else if (⟦2-char-id⟧.thought) {
                 var ⟦2-char-id⟧;
-                ⟦2-char-id⟧ += null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.text) && void 0 !== ⟦2-char-id⟧ ? xJ : ""
+                ⟦2-char-id⟧ += null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.text) && void 0 !== ⟦2-char-id⟧ ? EB : ""
               } else {
                 var ⟦2-char-id⟧;
-                ⟦2-char-id⟧ += null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.text) && void 0 !== ⟦2-char-id⟧ ? rJ : ""
+                ⟦2-char-id⟧ += null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.text) && void 0 !== ⟦2-char-id⟧ ? vB : ""
               }
             }
             ⟦2-char-id⟧ ||= void 0 !== (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.promptFeedback) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.blockReason) || "SAFETY" === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.finishReason) || "PROHIBITED_CONTENT" === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.finishReason), ⟦2-char-id⟧ ||= "MAX_TOKENS" === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.finishReason), null === (⟦2-char-id⟧ = ⟦2-char-id⟧.onProgress) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.call(⟦2-char-id⟧, {
```

</details>

<details>
<summary>Hunk 131 · Change · +1 / -1</summary>

```diff
@@ -7576,7 +7576,7 @@
           })), ⟦2-char-id⟧(⟦2-char-id⟧, {
             answer: ⟦2-char-id⟧,
             reasoning: ⟦2-char-id⟧,
-            lZJ: ⟦2-char-id⟧,
+            UVB: ⟦2-char-id⟧,
             isCutShort: ⟦2-char-id⟧,
             nativeCalls: ⟦2-char-id⟧
           }, ⟦2-char-id⟧.callFormat, ⟦2-char-id⟧.continueFrom)
```

</details>

<details>
<summary>Hunk 132 · Change · +1 / -1</summary>

```diff
@@ -7601,7 +7601,7 @@
         case "openai":
           return new ⟦2-char-id⟧("openai", ⟦2-char-id⟧.openai.baseUrl, ⟦2-char-id⟧);
         case "custom":
-          return new ⟦2-char-id⟧("custom", null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? ZJ : "", ⟦2-char-id⟧)
+          return new ⟦2-char-id⟧("custom", null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? dB : "", ⟦2-char-id⟧)
       }
     }
     const ⟦2-char-id⟧ = {
```

</details>

<details>
<summary>Hunk 133 · Change · +1 / -1</summary>

```diff
@@ -7729,7 +7729,7 @@
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧));
       return {
         id: ⟦2-char-id⟧,
-        name: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? FJ : ⟦2-char-id⟧,
+        name: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? VB : ⟦2-char-id⟧,
         callFormat: ⟦2-char-id⟧(⟦2-char-id⟧),
         nativeTools: ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
       }
```

</details>

<details>
<summary>Hunk 134 · Change · +2 / -2</summary>

```diff
@@ -7753,13 +7753,13 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
-      return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => "smart" === ⟦2-char-id⟧.tier))) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧[0]
+      return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => "smart" === ⟦2-char-id⟧.tier))) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧[0]
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
       let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-      return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧(⟦2-char-id⟧.provider, ⟦2-char-id⟧.baseUrl, ⟦2-char-id⟧)
+      return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧(⟦2-char-id⟧.provider, ⟦2-char-id⟧.baseUrl, ⟦2-char-id⟧)
     }
     const ⟦2-char-id⟧ = "bloxdAiHelperKeys",
       ⟦2-char-id⟧ = {
```

</details>

<details>
<summary>Hunk 135 · Change · +1 / -1</summary>

```diff
@@ -7776,7 +7776,7 @@
       if ("custom" !== ⟦2-char-id⟧.provider) return !0;
       try {
         var ⟦2-char-id⟧;
-        return new URL(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.baseUrl) && void 0 !== ⟦2-char-id⟧ ? cJ : "").protocol.startsWith("http")
+        return new URL(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.baseUrl) && void 0 !== ⟦2-char-id⟧ ? TB : "").protocol.startsWith("http")
       } catch {
         return !1
       }
```

</details>

<details>
<summary>Hunk 136 · Change · +1 / -1</summary>

```diff
@@ -7786,7 +7786,7 @@
       try {
         return "undefined" === typeof window ? null : window[⟦2-char-id⟧]
       } catch (⟦2-char-id⟧) {
-        return console.warn(`AI Helper: no ${JJ}`, ⟦2-char-id⟧), null
+        return console.warn(`AI Helper: no ${BB}`, ⟦2-char-id⟧), null
       }
     }
     const ⟦2-char-id⟧ = new class {
```

</details>

<details>
<summary>Hunk 137 · Change · +2 / -2</summary>

```diff
@@ -7798,10 +7798,10 @@
         for (const ⟦2-char-id⟧ of [⟦2-char-id⟧, ⟦2-char-id⟧]) null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.getItem(⟦2-char-id⟧) && !this.read(⟦2-char-id⟧) && ⟦2-char-id⟧.removeItem(⟦2-char-id⟧);
         const ⟦2-char-id⟧ = this.read(⟦2-char-id⟧),
           ⟦2-char-id⟧ = this.read(⟦2-char-id⟧);
-        this.state = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.remember ? null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.remember ? UJ : {
+        this.state = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.remember ? null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.remember ? yB : {
           ...⟦2-char-id⟧,
           remember: !1
-        } : null !== (⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? FJ : ⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧, this.ownsRemembered = this.state.remember && null !== ⟦2-char-id⟧
+        } : null !== (⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? VB : ⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧, this.ownsRemembered = this.state.remember && null !== ⟦2-char-id⟧
       }
       nextUsedAt() {
         return this.lastUsedAt = Math.max(Date.now(), this.lastUsedAt + 1), this.lastUsedAt
```

</details>

<details>
<summary>Hunk 138 · Change · +2 / -2</summary>

```diff
@@ -7818,8 +7818,8 @@
       addKey(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
         var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = this.state.keys.find((⟦2-char-id⟧ => "custom" === ⟦2-char-id⟧.provider && ⟦2-char-id⟧.baseUrl === ⟦2-char-id⟧.baseUrl)),
-          ⟦2-char-id⟧ = "custom" !== ⟦2-char-id⟧.provider ? ⟦2-char-id⟧.provider : null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.id) && void 0 !== ⟦2-char-id⟧ ? FJ : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
-          ⟦2-char-id⟧ = void 0 === ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧.models) : null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.models.find((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧))) && void 0 !== ⟦2-char-id⟧ ? UJ : ⟦2-char-id⟧.models[0],
+          ⟦2-char-id⟧ = "custom" !== ⟦2-char-id⟧.provider ? ⟦2-char-id⟧.provider : null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.id) && void 0 !== ⟦2-char-id⟧ ? VB : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
+          ⟦2-char-id⟧ = void 0 === ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧.models) : null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.models.find((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧))) && void 0 !== ⟦2-char-id⟧ ? yB : ⟦2-char-id⟧.models[0],
           ⟦2-char-id⟧ = this.state.keys.find((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧)),
           ⟦2-char-id⟧ = {
             ...⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 139 · Change · +1 / -1</summary>

```diff
@@ -7834,7 +7834,7 @@
           },
           ⟦2-char-id⟧ = this.state.keys.every((⟦2-char-id⟧ => ⟦2-char-id⟧.id !== ⟦2-char-id⟧)),
           ⟦2-char-id⟧ = void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧ !== ⟦2-char-id⟧ && this.state.keys.some((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧)),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧ ? this.state.keys.filter((⟦2-char-id⟧ => ⟦2-char-id⟧.id !== ⟦2-char-id⟧)).map((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧ ? YJ : ⟦2-char-id⟧)) : ⟦2-char-id⟧ ? [...this.state.keys, ⟦2-char-id⟧] : this.state.keys.map((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧ ? YJ : ⟦2-char-id⟧)),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧ ? this.state.keys.filter((⟦2-char-id⟧ => ⟦2-char-id⟧.id !== ⟦2-char-id⟧)).map((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧ ? oB : ⟦2-char-id⟧)) : ⟦2-char-id⟧ ? [...this.state.keys, ⟦2-char-id⟧] : this.state.keys.map((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧ ? oB : ⟦2-char-id⟧)),
           ⟦2-char-id⟧ = ⟦2-char-id⟧ ? {
             keyId: ⟦2-char-id⟧,
             modelId: ⟦2-char-id⟧.id
```

</details>

<details>
<summary>Hunk 140 · Change · +1 / -1</summary>

```diff
@@ -7853,7 +7853,7 @@
               name: ⟦2-char-id⟧,
               ...⟦2-char-id⟧
             } = ⟦2-char-id⟧;
-            return "" === ⟦2-char-id⟧ ? UJ : {
+            return "" === ⟦2-char-id⟧ ? yB : {
               ...⟦2-char-id⟧,
               name: ⟦2-char-id⟧
             }
```

</details>

<details>
<summary>Hunk 141 · Change · +1 / -1</summary>

```diff
@@ -7948,7 +7948,7 @@
       setRemember(⟦2-char-id⟧) {
         var ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧ && !this.ownsRemembered ? this.read(this.local) : null,
-          ⟦2-char-id⟧ = (null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.keys) && void 0 !== ⟦2-char-id⟧ ? cJ : []).filter((⟦2-char-id⟧ => this.state.keys.every((⟦2-char-id⟧ => !⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)))));
+          ⟦2-char-id⟧ = (null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.keys) && void 0 !== ⟦2-char-id⟧ ? TB : []).filter((⟦2-char-id⟧ => this.state.keys.every((⟦2-char-id⟧ => !⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)))));
         this.update({
           remember: ⟦2-char-id⟧,
           keys: [...⟦2-char-id⟧, ...this.state.keys]
```

</details>

<details>
<summary>Hunk 142 · Change · +1 / -1</summary>

```diff
@@ -7992,7 +7992,7 @@
             ...⟦2-char-id⟧,
             ...JSON.parse(⟦2-char-id⟧)
           };
-          return Array.isArray(⟦2-char-id⟧.keys) && ⟦2-char-id⟧.keys.every(⟦2-char-id⟧) ? cJ : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
+          return Array.isArray(⟦2-char-id⟧.keys) && ⟦2-char-id⟧.keys.every(⟦2-char-id⟧) ? TB : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
         } catch (⟦2-char-id⟧) {
           return console.warn("AI Helper: saved keys couldn't be read", ⟦2-char-id⟧ instanceof Error ? ⟦2-char-id⟧.name : "error"), null
         }
```

</details>

<details>
<summary>Hunk 143 · Change · +1 / -1</summary>

```diff
@@ -8034,7 +8034,7 @@
         baseUrl: ⟦2-char-id⟧,
         modelName: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.trim()) && void 0 !== ⟦2-char-id⟧ ? ZJ : "";
+      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.trim()) && void 0 !== ⟦2-char-id⟧ ? dB : "";
       let ⟦2-char-id⟧ = [];
       try {
         ⟦2-char-id⟧ = (await ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧).check(⟦2-char-id⟧)).models
```

</details>

<details>
<summary>Hunk 144 · Change · +1 / -1</summary>

```diff
@@ -8064,7 +8064,7 @@
         } catch (⟦2-char-id⟧) {
           if (! function(⟦2-char-id⟧, ⟦2-char-id⟧) {
               var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-              return 0 !== (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.tools) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? ZJ : 0) && ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ && "failed" === ⟦2-char-id⟧.problem && (400 === ⟦2-char-id⟧.status || 404 === ⟦2-char-id⟧.status && /\btool/i.test(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.detail) && void 0 !== ⟦2-char-id⟧ ? UJ : ""))
+              return 0 !== (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.tools) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? dB : 0) && ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ && "failed" === ⟦2-char-id⟧.problem && (400 === ⟦2-char-id⟧.status || 404 === ⟦2-char-id⟧.status && /\btool/i.test(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.detail) && void 0 !== ⟦2-char-id⟧ ? yB : ""))
             }(⟦2-char-id⟧, ⟦2-char-id⟧)) throw ⟦2-char-id⟧;
           const ⟦2-char-id⟧ = {
               ...⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 145 · Change · +1 / -1</summary>

```diff
@@ -8079,7 +8079,7 @@
       } catch (⟦2-char-id⟧) {
         var ⟦2-char-id⟧, ⟦2-char-id⟧;
         if (!((⟦2-char-id⟧ = ⟦2-char-id⟧) instanceof ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧.status && "noCredit" !== ⟦2-char-id⟧.problem && (429 === ⟦2-char-id⟧.status || 408 === ⟦2-char-id⟧.status || ⟦2-char-id⟧.status >= 500))) throw ⟦2-char-id⟧;
-        return await (⟦2-char-id⟧ = Math.min(null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.retryAfterMs) && void 0 !== ⟦2-char-id⟧ ? AJ : ⟦2-char-id⟧.retryWaitMs) && void 0 !== ⟦2-char-id⟧ ? XJ : 3⟦2-char-id⟧, 2⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.signal, new Promise(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
+        return await (⟦2-char-id⟧ = Math.min(null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.retryAfterMs) && void 0 !== ⟦2-char-id⟧ ? JB : ⟦2-char-id⟧.retryWaitMs) && void 0 !== ⟦2-char-id⟧ ? lB : 3⟦2-char-id⟧, 2⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.signal, new Promise(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
           if (null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.aborted) return void ⟦2-char-id⟧(new DOMException("The AI key request was stopped", "AbortError"));
           const ⟦2-char-id⟧ = setTimeout(⟦2-char-id⟧, ⟦2-char-id⟧);
           null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.addEventListener("abort", (() => {
```

</details>

<details>
<summary>Hunk 146 · Change · +1 / -1</summary>

```diff
@@ -8091,7 +8091,7 @@
       }
       var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(3117);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(3123);
     const ⟦2-char-id⟧ = "Super Bot.xd",
       ⟦2-char-id⟧ = {
         ovh: {
```

</details>

<details>
<summary>Hunk 147 · Change · +2 / -2</summary>

```diff
@@ -8208,9 +8208,9 @@
         case "guest":
           return "Log in to use Super Bot.xd.";
         case "tooNew":
-          return `Super Bot.xd opens once your account is a week old: ${nA((null!==(cJ=JJ.availableFrom)&&void 0!==cJ?cJ:ZJ)-ZJ)} to go.`;
+          return `Super Bot.xd opens once your account is a week old: ${HJ((null!==(TB=BB.availableFrom)&&void 0!==TB?TB:dB)-dB)} to go.`;
         case "noUsageLeft":
-          return ⟦2-char-id⟧.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(JJ,cJ){const ZJ=Math.ceil((JJ-cJ)/36e5);if(ZJ<=24)return ZJ<=1?"within the hour":`in ${⟦2-char-id⟧} hours`;return`in ${⟦2-char-id⟧(⟦2-char-id⟧-⟦2-char-id⟧)}`}(JJ.resetsAt,ZJ)}.` : "0 usage remaining - upgrade to Super for a more powerful AI.";
+          return ⟦2-char-id⟧.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(BB,TB){const dB=Math.ceil((BB-TB)/36e5);if(dB<=24)return dB<=1?"within the hour":`in ${⟦2-char-id⟧} hours`;return`in ${⟦2-char-id⟧(⟦2-char-id⟧-⟦2-char-id⟧)}`}(BB.resetsAt,dB)}.` : "0 usage remaining - upgrade to Super for a more powerful AI.";
         case "unavailable":
           return "Super Bot.xd can't answer right now. Try again later."
       }
```

</details>

<details>
<summary>Hunk 148 · Change · +4 / -4</summary>

```diff
@@ -8241,17 +8241,17 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return `Usage left: ${JJ.left}`
+      return `Usage left: ${BB.left}`
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      const ⟦2-char-id⟧ = Math.max(1, Math.ceil(⟦2-char-id⟧ / ⟦2-char-id⟧.h));
-      return 1 === ⟦2-char-id⟧ ? "1 day" : `${cJ} days`
+      const ⟦2-char-id⟧ = Math.max(1, Math.ceil(⟦2-char-id⟧ / ⟦2-char-id⟧.k));
+      return 1 === ⟦2-char-id⟧ ? "1 day" : `${TB} days`
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = "unavailable" === ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧) : null;
-      if (⟦2-char-id⟧) return `${ZJ} Bot.xd is answering instead.`;
+      if (⟦2-char-id⟧) return `${dB} Bot.xd is answering instead.`;
       switch (⟦2-char-id⟧) {
         case "busy":
           return "Super Bot.xd is busy, so Bot.xd is answering this one.";
```

</details>

<details>
<summary>Hunk 149 · Change · +1 / -1</summary>

```diff
@@ -8270,7 +8270,7 @@
     async function ⟦2-char-id⟧(⟦2-char-id⟧) {
       if (function(⟦2-char-id⟧) {
           var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-          return ⟦2-char-id⟧.messages.length > 12 || ⟦2-char-id⟧.messages.some((⟦2-char-id⟧ => ⟦2-char-id⟧.content.length > ⟦2-char-id⟧)) || (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.toolsJson) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? cJ : 0) > 1⟦2-char-id⟧ || (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.request) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? FJ : 0) > ⟦2-char-id⟧ || (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.code) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? eJ : 0) > ⟦2-char-id⟧ || (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.toolResults) && void 0 !== ⟦2-char-id⟧ ? AJ : []).some((⟦2-char-id⟧ => ⟦2-char-id⟧.text.length > 1⟦2-char-id⟧))
+          return ⟦2-char-id⟧.messages.length > 12 || ⟦2-char-id⟧.messages.some((⟦2-char-id⟧ => ⟦2-char-id⟧.content.length > ⟦2-char-id⟧)) || (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.toolsJson) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? TB : 0) > 1⟦2-char-id⟧ || (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.request) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? VB : 0) > ⟦2-char-id⟧ || (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.code) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? pB : 0) > ⟦2-char-id⟧ || (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.toolResults) && void 0 !== ⟦2-char-id⟧ ? JB : []).some((⟦2-char-id⟧ => ⟦2-char-id⟧.text.length > 1⟦2-char-id⟧))
         }(⟦2-char-id⟧)) return {
         outcome: "tooLarge"
       };
```

</details>

<details>
<summary>Hunk 150 · Change · +4 / -4</summary>

```diff
@@ -8295,13 +8295,13 @@
         })))
       })) : await ⟦2-char-id⟧
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(17),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(13),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2027);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(24),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(21),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2015);
     let ⟦2-char-id⟧ = null;
 
     function ⟦2-char-id⟧() {
-      ⟦2-char-id⟧ ??= Promise.resolve().then((() => ⟦2-char-id⟧(2039))), ⟦2-char-id⟧.then((⟦2-char-id⟧ => {
+      ⟦2-char-id⟧ ??= Promise.resolve().then((() => ⟦2-char-id⟧(2028))), ⟦2-char-id⟧.then((⟦2-char-id⟧ => {
         let {
           siteSupportsPurchases: ⟦2-char-id⟧
         } = ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 151 · Change · +4 / -4</summary>

```diff
@@ -8323,20 +8323,20 @@
           NotificationProvider: ⟦2-char-id⟧
         }, {
           WorldCodeAiOutOfUsage: ⟦2-char-id⟧
-        }] = await Promise.all([Promise.resolve().then((() => ⟦2-char-id⟧(1247))), ⟦2-char-id⟧.e(336).then((() => ⟦2-char-id⟧(59418)))]);
+        }] = await Promise.all([Promise.resolve().then((() => ⟦2-char-id⟧(1235))), ⟦2-char-id⟧.e(336).then((() => ⟦2-char-id⟧(59743)))]);
         null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.tearDownNotification();
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.showCustomPopup({
           body: ⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
             onGetSuperRank: () => {
               ⟦2-char-id⟧(),
                 function() {
-                  ⟦2-char-id⟧.i.Uf("OpenStoreFromCodeEditor"), (0, ⟦2-char-id⟧.i)({
+                  ⟦2-char-id⟧.h.yH("OpenStoreFromCodeEditor"), (0, ⟦2-char-id⟧.h)({
                     mode: "self",
                     source: "codeEditorAi",
                     openItem: "superRank"
                   });
-                  const ⟦2-char-id⟧ = ⟦2-char-id⟧.i.subscribe("appManagerUpdated|openEverythingMenuName", (() => {
-                    null === ⟦2-char-id⟧.d.get("openEverythingMenuName") && (⟦2-char-id⟧.i.unsubscribe(⟦2-char-id⟧), ⟦2-char-id⟧.refresh())
+                  const ⟦2-char-id⟧ = ⟦2-char-id⟧.h.subscribe("appManagerUpdated|openEverythingMenuName", (() => {
+                    null === ⟦2-char-id⟧.d.get("openEverythingMenuName") && (⟦2-char-id⟧.h.unsubscribe(⟦2-char-id⟧), ⟦2-char-id⟧.refresh())
                   }))
                 }()
             }
```

</details>

<details>
<summary>Hunk 152 · Change · +1 / -1</summary>

```diff
@@ -8458,7 +8458,7 @@
         username: ["getEntityName"],
         join: ["onPlayerJoin"],
         joins: ["onPlayerJoin"],
-        cn: ["onPlayerLeave"],
+        lD: ["onPlayerLeave"],
         command: ["playerCommand"],
         chat: ["onPlayerChat", "sendMessage", "broadcastMessage"],
         says: ["onPlayerChat"],
```

</details>

<details>
<summary>Hunk 153 · Change · +3 / -3</summary>

```diff
@@ -8469,9 +8469,9 @@
         side: ["RightInfoText"],
         right: ["RightInfoText"],
         middle: ["sendFlyingMiddleMessage", "middleTextUpper"],
-        countdown: ["sendFlyingMiddleMessage", "Hh"],
-        timer: ["Hh", "RightInfoText"],
-        seconds: ["Hh"],
+        countdown: ["sendFlyingMiddleMessage", "dL"],
+        timer: ["dL", "RightInfoText"],
+        seconds: ["dL"],
         speed: ["speedMultiplier", "runningSpeed", "walkingSpeed"],
         fast: ["speedMultiplier", "runningSpeed"],
         run: ["speedMultiplier", "runningSpeed"],
```

</details>

<details>
<summary>Hunk 154 · Change · +3 / -3</summary>

```diff
@@ -8484,9 +8484,9 @@
         break: ["onPlayerAttemptChangeBlock", "onPlayerChangeBlock"],
         breaks: ["onPlayerAttemptChangeBlock", "onPlayerChangeBlock"],
         breaking: ["onPlayerAttemptChangeBlock", "onPlayerChangeBlock", "canChange"],
-        place: ["onPlayerAttemptChangeBlock", "fK"],
-        build: ["onPlayerAttemptChangeBlock", "fK"],
-        block: ["fK", "Qm"],
+        place: ["onPlayerAttemptChangeBlock", "Cw"],
+        build: ["onPlayerAttemptChangeBlock", "Cw"],
+        block: ["Cw", "XE"],
         leaderboard: ["lobbyLeaderboardInfo", "setTargetedPlayerSettingForEveryone"],
         score: ["lobbyLeaderboardInfo", "RightInfoText"],
         coins: ["RightInfoText", "getMoonstoneChestItemSlot"],
```

</details>

<details>
<summary>Hunk 155 · Change · +1 / -1</summary>

```diff
@@ -8511,7 +8511,7 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return ⟦2-char-id⟧.length > 4 && ⟦2-char-id⟧.endsWith("ies") ? `${JJ.slice(0,-3)}y` : ⟦2-char-id⟧.length > 3 && ⟦2-char-id⟧.endsWith("s") && !⟦2-char-id⟧.endsWith("ss") ? ⟦2-char-id⟧.slice(0, -1) : ⟦2-char-id⟧
+      return ⟦2-char-id⟧.length > 4 && ⟦2-char-id⟧.endsWith("ies") ? `${BB.slice(0,-3)}y` : ⟦2-char-id⟧.length > 3 && ⟦2-char-id⟧.endsWith("s") && !⟦2-char-id⟧.endsWith("ss") ? ⟦2-char-id⟧.slice(0, -1) : ⟦2-char-id⟧
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 156 · Change · +2 / -2</summary>

```diff
@@ -8527,10 +8527,10 @@
       let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
       const ⟦2-char-id⟧ = [],
         ⟦2-char-id⟧ = new Set,
-        ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧ ? JJ : (0, ⟦2-char-id⟧.q)(⟦2-char-id⟧, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, ⟦2-char-id⟧.m, (() => "projectRequire"))),
+        ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧ ? BB : (0, ⟦2-char-id⟧.x)(⟦2-char-id⟧, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, ⟦2-char-id⟧.l, (() => "projectRequire"))),
         ⟦2-char-id⟧ = new Set([...⟦2-char-id⟧.join("\n").matchAll(/\b(?:function\s+|(?:const|let|var)\s+)([\w$]+)/g)].map((⟦2-char-id⟧ => ⟦2-char-id⟧[1])));
       return ⟦2-char-id⟧.forEach(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
-        for (const ⟦2-char-id⟧ of (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧, /(global|window|document|process|require)\b\s*[.([]/g, ⟦2-char-id⟧.m)) ⟦2-char-id⟧.has(⟦2-char-id⟧[1]) || ⟦2-char-id⟧.has(⟦2-char-id⟧[1]) || (⟦2-char-id⟧.add(⟦2-char-id⟧[1]), ⟦2-char-id⟧.push(`Line ${cJ+1} uses "${UJ[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPlayerJoin(playerId) {} is enough.`))
+        for (const ⟦2-char-id⟧ of (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧, /(global|window|document|process|require)\b\s*[.([]/g, ⟦2-char-id⟧.l)) ⟦2-char-id⟧.has(⟦2-char-id⟧[1]) || ⟦2-char-id⟧.has(⟦2-char-id⟧[1]) || (⟦2-char-id⟧.add(⟦2-char-id⟧[1]), ⟦2-char-id⟧.push(`Line ${TB+1} uses "${yB[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPlayerJoin(playerId) {} is enough.`))
       })), ⟦2-char-id⟧
     }
 
```

</details>

<details>
<summary>Hunk 157 · Change · +4 / -4</summary>

```diff
@@ -8545,16 +8545,16 @@
           ⟦2-char-id⟧ = ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧.indexOf("}") + 1 || void 0),
           ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = /amount\s*:\s*(\d+)/.exec(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[1];
         if (!/persistent\s*:\s*true/.test(⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧) return;
-        const ⟦2-char-id⟧ = [null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ - 2]) && void 0 !== ⟦2-char-id⟧ ? eJ : "", null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ - 1]) && void 0 !== ⟦2-char-id⟧ ? XJ : "", ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧)].join(" ");
+        const ⟦2-char-id⟧ = [null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ - 2]) && void 0 !== ⟦2-char-id⟧ ? pB : "", null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ - 1]) && void 0 !== ⟦2-char-id⟧ ? lB : "", ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧)].join(" ");
         if (/\bif\s*\(|\belse\b|\?\s*$|&&\s*$/.test(⟦2-char-id⟧)) return;
-        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[1]) && void 0 !== ⟦2-char-id⟧ ? AJ : "coins";
-        ⟦2-char-id⟧.push(`Line ${FJ+1} sets the saved "${nJ}" back to ${DJ} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${nJ}") is null.`)
+        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[1]) && void 0 !== ⟦2-char-id⟧ ? JB : "coins";
+        ⟦2-char-id⟧.push(`Line ${VB+1} sets the saved "${DB}" back to ${LB} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${DB}") is null.`)
       })), ⟦2-char-id⟧
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.split("### Parameters:")[1]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.split("###")[0]) && void 0 !== ⟦2-char-id⟧ ? cJ : "",
+      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.split("### Parameters:")[1]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.split("###")[0]) && void 0 !== ⟦2-char-id⟧ ? TB : "",
         ⟦2-char-id⟧ = [];
       for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.split("\n")) {
         const ⟦2-char-id⟧ = /^\|\s*([A-Za-z_$][\w$]*)\s*\|(?:\s*`([^`]*)`)?/.exec(⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 158 · Change · +3 / -3</summary>

```diff
@@ -8602,9 +8602,9 @@
       var ⟦2-char-id⟧;
       if (!/^[A-Za-z_$][\w$]*$/.test(⟦2-char-id⟧)) return;
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.replaceAll("$", "\\$"),
-        ⟦2-char-id⟧ = `\\((?:[^()]*[\\s,])?${FJ}(?![\\w$])[^()]*\\)`,
-        ⟦2-char-id⟧ = new RegExp(`(?:const|let|var)\\s+${FJ}(?![\\w$])|${FJ}\\s*(?:\\+?=(?![=>])|=>)|${UJ}\\s*=>|function\\s*[\\w$]*\\s*${UJ}`, "g");
-      return 1 === (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.m).length ? null === (⟦2-char-id⟧ = new RegExp(`\\b(?:const|let|var)\\s+${FJ}\\s*=\\s*${NA}\\s*(?:;|//|$)`, "m").exec(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[1] : void 0
+        ⟦2-char-id⟧ = `\\((?:[^()]*[\\s,])?${VB}(?![\\w$])[^()]*\\)`,
+        ⟦2-char-id⟧ = new RegExp(`(?:const|let|var)\\s+${VB}(?![\\w$])|${VB}\\s*(?:\\+?=(?![=>])|=>)|${yB}\\s*=>|function\\s*[\\w$]*\\s*${yB}`, "g");
+      return 1 === (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.l).length ? null === (⟦2-char-id⟧ = new RegExp(`\\b(?:const|let|var)\\s+${VB}\\s*=\\s*${WJ}\\s*(?:;|//|$)`, "m").exec(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[1] : void 0
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 159 · Change · +7 / -7</summary>

```diff
@@ -8613,20 +8613,20 @@
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.split("\n").slice(1).map((⟦2-char-id⟧ => ⟦2-char-id⟧.trim())).find((⟦2-char-id⟧ => "" !== ⟦2-char-id⟧ && !⟦2-char-id⟧.startsWith("#") && !⟦2-char-id⟧.startsWith("|") && !⟦2-char-id⟧.startsWith("**") && !⟦2-char-id⟧.startsWith("```")));
         if (!⟦2-char-id⟧) return "";
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.search(/\.\s/),
-          ⟦2-char-id⟧ = -1 === ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧ + 1);
-        return ⟦2-char-id⟧.length > 110 ? `${FJ.slice(0,107)}...` : ⟦2-char-id⟧
+          ⟦2-char-id⟧ = -1 === ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧ + 1);
+        return ⟦2-char-id⟧.length > 110 ? `${VB.slice(0,107)}...` : ⟦2-char-id⟧
       }(⟦2-char-id⟧);
-      return ⟦2-char-id⟧ = "api" === ⟦2-char-id⟧ ? `api.${cJ}(${zA(ZJ).join(", ")})${UJ?` \u2014 ${⟦2-char-id⟧}`:""}` : "callback" === ⟦2-char-id⟧ ? `${cJ}(${zA(ZJ).join(", ")})${UJ?` \u2014 ${⟦2-char-id⟧}`:""}` : "clientOption" === ⟦2-char-id⟧ ? `${cJ}: ${function(JJ){var cJ,ZJ;return null!==(cJ=null===(ZJ=/\*\*Type:\*\*\s*`([^`]+)`/.exec(⟦2-char-id⟧))||void 0===⟦2-char-id⟧?void 0:⟦2-char-id⟧[1])&&void 0!==⟦2-char-id⟧?cJ:""}(⟦2-char-id⟧)}${⟦2-char-id⟧?` \u2014 ${UJ}`:""}`:cJ,{kind:JJ,name:cJ,text:ZJ,line:FJ,nameWords:gA(cJ),textWords:gA(ZJ)}}function uA(JJ){return JJ.toLowerCase().split(/[^a-z0-9]+/).filter((JJ=>""!==JJ&&"of"!==JJ&&"the"!==JJ)).sort().join(" ")}const iA=new Set(["block","item"]);function RA(JJ){let{names:cJ,isSure:ZJ}=JJ;return 0===cJ.length?"":1!==cJ.length||ZJ?`
+      return ⟦2-char-id⟧ = "api" === ⟦2-char-id⟧ ? `api.${TB}(${XJ(dB).join(", ")})${yB?` \u2014 ${⟦2-char-id⟧}`:""}` : "callback" === ⟦2-char-id⟧ ? `${TB}(${XJ(dB).join(", ")})${yB?` \u2014 ${⟦2-char-id⟧}`:""}` : "clientOption" === ⟦2-char-id⟧ ? `${TB}: ${function(BB){var TB,dB;return null!==(TB=null===(dB=/\*\*Type:\*\*\s*`([^`]+)`/.exec(⟦2-char-id⟧))||void 0===⟦2-char-id⟧?void 0:⟦2-char-id⟧[1])&&void 0!==⟦2-char-id⟧?TB:""}(⟦2-char-id⟧)}${⟦2-char-id⟧?` \u2014 ${yB}`:""}`:TB,{kind:BB,name:TB,text:dB,line:VB,nameWords:SJ(TB),textWords:SJ(dB)}}function qJ(BB){return BB.toLowerCase().split(/[^a-z0-9]+/).filter((BB=>""!==BB&&"of"!==BB&&"the"!==BB)).sort().join(" ")}const xJ=new Set(["block","item"]);function jJ(BB){let{names:TB,isSure:dB}=BB;return 0===TB.length?"":1!==TB.length||dB?`
       Did you mean $ {
-        ⟦2-char-id⟧.map((⟦2-char-id⟧ => `"${JJ}"`)).join(" or ")
+        ⟦2-char-id⟧.map((⟦2-char-id⟧ => `"${BB}"`)).join(" or ")
       } ? `:`
-      The closest name ⟦2-char-id⟧ "${cJ[0]}", which may ⟦2-char-id⟧ something
+      The closest name ⟦2-char-id⟧ "${TB[0]}", which may ⟦2-char-id⟧ something
       else.
-      `}function LA(JJ){return JJ.split("\n").slice(1).map((JJ=>JJ.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((JJ=>""!==JJ&&!JJ.startsWith("#")))}class aA{constructor(JJ){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0,this.blockNames=void 0,this.namesByLowerCase=void 0,this.wordCounts=new Map,this.realName=(JJ,cJ)=>{if("mob"===JJ){var ZJ;const JJ=cJ.trim().toLowerCase();return null!==(ZJ=this.mobTypes.find((cJ=>cJ.toLowerCase()===JJ)))&&void 0!==ZJ?ZJ:null}const FJ=this.suggestNames(cJ),UJ=FJ.isSure?FJ.names[0]:void 0;return void 0===UJ||"item"!==JJ&&!this.blockNames.has(UJ)?null:UJ};const cJ=[],ZJ=(JJ,ZJ)=>{for(const{name:FJ,text:UJ}of function(JJ){const cJ=[],ZJ=JJ.split(/^## /m).slice(1);for(const FJ of ZJ){const JJ=FJ.indexOf("\n"),ZJ=(-1===JJ?FJ:FJ.slice(0,JJ)).trim(),UJ=`
+      `}function AJ(BB){return BB.split("\n").slice(1).map((BB=>BB.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((BB=>""!==BB&&!BB.startsWith("#")))}class bJ{constructor(BB){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0,this.blockNames=void 0,this.namesByLowerCase=void 0,this.wordCounts=new Map,this.realName=(BB,TB)=>{if("mob"===BB){var dB;const BB=TB.trim().toLowerCase();return null!==(dB=this.mobTypes.find((TB=>TB.toLowerCase()===BB)))&&void 0!==dB?dB:null}const VB=this.suggestNames(TB),yB=VB.isSure?VB.names[0]:void 0;return void 0===yB||"item"!==BB&&!this.blockNames.has(yB)?null:yB};const TB=[],dB=(BB,dB)=>{for(const{name:VB,text:yB}of function(BB){const TB=[],dB=BB.split(/^## /m).slice(1);for(const VB of dB){const BB=VB.indexOf("\n"),dB=(-1===BB?VB:VB.slice(0,BB)).trim(),yB=`
       # # $ {
         ⟦2-char-id⟧
       }
-      `.replace(/\n\s*\n(\s*\n)+/g,"\n\n").trim();cJ.push({name:ZJ,text:UJ})}return cJ}(ZJ))cJ.push(CA(JJ,FJ,UJ))};ZJ("api",JJ.apiReference),ZJ("callback",JJ.callbacks),ZJ("clientOption",JJ.clientOptions),ZJ("snippet",JJ.snippets),ZJ("howTo",JJ.howTo);const FJ=function(){const JJ=cF.map((JJ=>`
+      `.replace(/\n\s*\n(\s*\n)+/g,"\n\n").trim();TB.push({name:dB,text:yB})}return TB}(dB))TB.push(GJ(BB,VB,yB))};dB("api",BB.apiReference),dB("callback",BB.callbacks),dB("clientOption",BB.clientOptions),dB("snippet",BB.snippets),dB("howTo",BB.howTo);const VB=function(){const BB=dV.map((BB=>`
       # # $ {
         ⟦2-char-id⟧.name
       }\
```

</details>

<details>
<summary>Hunk 160 · Change · +4 / -4</summary>

```diff
@@ -8637,11 +8637,11 @@
       its code ⟦2-char-id⟧ added ⟦2-char-id⟧ the file ⟦2-char-id⟧ itself.\⟦2-char-id⟧ {
         ⟦2-char-id⟧.about
       }\
-      n\ nUsage: \`${JJ.signature}\`\n\n\`\`\`js\n${JJ.example}\n\`\`\``)),
-  ⟦2-char-id⟧ = ⟦2-char-id⟧.map((⟦2-char-id⟧ => `## ${JJ.name}\nPrefab (${JJ.kind}, ${JJ.category}): put in with use_prefab. ${KF(JJ,!1)}`));
+      n\ nUsage: \`${BB.signature}\`\n\n\`\`\`js\n${BB.example}\n\`\`\``)),
+  ⟦2-char-id⟧ = ⟦2-char-id⟧.map((⟦2-char-id⟧ => `## ${BB.name}\nPrefab (${BB.kind}, ${BB.category}): put in with use_prefab. ${MV(BB,!1)}`));
   return {
-    helpers: `# Ready-made functions\n\n${JJ.join("\n\n")}\n`,
-    prefabs: `# Prefabs\n\n${cJ.join("\n\n")}\n`
+    helpers: `# Ready-made functions\n\n${BB.join("\n\n")}\n`,
+    prefabs: `# Prefabs\n\n${TB.join("\n\n")}\n`
   }
 }();
 ⟦2-char-id⟧("helper", ⟦2-char-id⟧.helpers), ⟦2-char-id⟧("prefab", ⟦2-char-id⟧.prefabs), this.sections = ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 161 · Change · +2 / -2</summary>

```diff
@@ -8649,12 +8649,12 @@
   this.byName.has(⟦2-char-id⟧.name) || this.byName.set(⟦2-char-id⟧.name, ⟦2-char-id⟧);
   for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.textWords) {
     var ⟦2-char-id⟧;
-    this.wordCounts.set(⟦2-char-id⟧, (null !== (⟦2-char-id⟧ = this.wordCounts.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? UJ : 0) + 1)
+    this.wordCounts.set(⟦2-char-id⟧, (null !== (⟦2-char-id⟧ = this.wordCounts.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? yB : 0) + 1)
   }
 }
 this.itemAndBlockNames = [...new Set([...⟦2-char-id⟧(⟦2-char-id⟧.itemNames), ...⟦2-char-id⟧(⟦2-char-id⟧.blockNames)])], this.blockNames = new Set(⟦2-char-id⟧(⟦2-char-id⟧.blockNames)), this.namesByLowerCase = new Map(this.itemAndBlockNames.map((⟦2-char-id⟧ => [⟦2-char-id⟧.toLowerCase(), ⟦2-char-id⟧]))), this.mobTypes = function(⟦2-char-id⟧) {
   var ⟦2-char-id⟧, ⟦2-char-id⟧;
-  const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.split("## Mob Variations")[1]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.split("```")[1]) && void 0 !== ⟦2-char-id⟧ ? cJ : "",
+  const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.split("## Mob Variations")[1]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.split("```")[1]) && void 0 !== ⟦2-char-id⟧ ? TB : "",
     ⟦2-char-id⟧ = [];
   for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.split("\n")) {
     const ⟦2-char-id⟧ = /^([A-Z][\w ]*?):\s*"/.exec(⟦2-char-id⟧.trim());
```

</details>

<details>
<summary>Hunk 162 · Change · +3 / -3</summary>

```diff
@@ -8677,18 +8677,18 @@
     ⟦2-char-id⟧ = ⟦2-char-id⟧.join("\n"),
     ⟦2-char-id⟧ = new Set([...⟦2-char-id⟧.matchAll(/\b(?:function\s+|(?:const|let|var)\s+)([\w$]+)|^([\w$]+)\s*=/gm)].map((⟦2-char-id⟧ => {
       var ⟦2-char-id⟧;
-      return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[1]) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧[2]
+      return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[1]) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧[2]
     }))),
     ⟦2-char-id⟧ = [...⟦2-char-id⟧.matchAll(/\b(?:const|let|var)\s*([{[][^=]*?[}\]])\s*=/g), ...⟦2-char-id⟧.matchAll(/\bimport\s+([\w$\s{},*]+?)\s+from\b/g)];
   for (const ⟦2-char-id⟧ of ⟦2-char-id⟧)
     for (const ⟦2-char-id⟧ of ⟦2-char-id⟧[1].matchAll(/([\w$]+)\s*(?=[,}\]=]|$)/g)) ⟦2-char-id⟧.add(⟦2-char-id⟧[1]);
   const ⟦2-char-id⟧ = new Map;
   return ⟦2-char-id⟧.forEach(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
-    for (const ⟦2-char-id⟧ of (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧, /([\w$]+)\s*\(/g, ⟦2-char-id⟧.m)) {
+    for (const ⟦2-char-id⟧ of (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧, /([\w$]+)\s*\(/g, ⟦2-char-id⟧.l)) {
       var ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = ⟦2-char-id⟧[1],
         ⟦2-char-id⟧ = /^\s*(?:async\s+)?$/.test(⟦2-char-id⟧.slice(0, ⟦2-char-id⟧.index)) && /^[\w$]+\s*\([^()]*\)\s*\{/.test(⟦2-char-id⟧.slice(⟦2-char-id⟧.index));
-      ⟦2-char-id⟧.has(⟦2-char-id⟧) || ⟦2-char-id⟧.has(⟦2-char-id⟧) || ⟦2-char-id⟧ || "api" !== (null === (⟦2-char-id⟧ = this.byName.get(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.kind) || ⟦2-char-id⟧.set(⟦2-char-id⟧, `Line ${cJ+1} calls ${XJ} without "api.", so it throws there. Did you mean api.${XJ}?`)
+      ⟦2-char-id⟧.has(⟦2-char-id⟧) || ⟦2-char-id⟧.has(⟦2-char-id⟧) || ⟦2-char-id⟧ || "api" !== (null === (⟦2-char-id⟧ = this.byName.get(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.kind) || ⟦2-char-id⟧.set(⟦2-char-id⟧, `Line ${TB+1} calls ${lB} without "api.", so it throws there. Did you mean api.${lB}?`)
     }
   })), [...⟦2-char-id⟧.values()]
 }
```

</details>

<details>
<summary>Hunk 163 · Change · +2 / -2</summary>

```diff
@@ -8697,8 +8697,8 @@
     var ⟦2-char-id⟧;
     return "api" !== (null === (⟦2-char-id⟧ = this.byName.get(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.kind)
   })).map((⟦2-char-id⟧ => {
-    const ⟦2-char-id⟧ = this.find(⟦2-char-id⟧.replace(/([a-z])([A-Z])/g, "$1 $2"), "", 20).filter((⟦2-char-id⟧ => "api" === ⟦2-char-id⟧.kind)).slice(0, 2).map((⟦2-char-id⟧ => `api.${JJ.name}`));
-    return `api.${JJ} doesn't exist.${cJ.length?` Did you mean ${⟦2-char-id⟧.join(" or ")}?`:""}`
+    const ⟦2-char-id⟧ = this.find(⟦2-char-id⟧.replace(/([a-z])([A-Z])/g, "$1 $2"), "", 20).filter((⟦2-char-id⟧ => "api" === ⟦2-char-id⟧.kind)).slice(0, 2).map((⟦2-char-id⟧ => `api.${BB.name}`));
+    return `api.${BB} doesn't exist.${TB.length?` Did you mean ${⟦2-char-id⟧.join(" or ")}?`:""}`
   }))
 }
 unknownItemNames(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 164 · Change · +3 / -3</summary>

```diff
@@ -8718,10 +8718,10 @@
       var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
       if (!⟦2-char-id⟧[⟦2-char-id⟧] && (⟦2-char-id⟧ !== ⟦2-char-id⟧.length - 1 || !⟦2-char-id⟧[⟦2-char-id⟧.length - 1])) return;
       const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = /^CONFIG\.([\w$]+)$/.exec(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[1],
-        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? null === (⟦2-char-id⟧ = new RegExp(`(?:^|[{,])\\s*${hJ.replaceAll("$","\\$")}\\s*:\\s*${NA}`, "m").exec(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[1] : void 0,
+        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? null === (⟦2-char-id⟧ = new RegExp(`(?:^|[{,])\\s*${kB.replaceAll("$","\\$")}\\s*:\\s*${WJ}`, "m").exec(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[1] : void 0,
         ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧),
-        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = new RegExp(`\\?\\s*${NA}\\s*:\\s*${NA}$`).exec(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.slice(1)) && void 0 !== ⟦2-char-id⟧ ? jJ : [];
-      for (const ⟦2-char-id⟧ of [null !== (⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? DJ : ⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧ ? GJ : ⟦2-char-id⟧, ...⟦2-char-id⟧]) {
+        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = new RegExp(`\\?\\s*${WJ}\\s*:\\s*${WJ}$`).exec(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.slice(1)) && void 0 !== ⟦2-char-id⟧ ? gB : [];
+      for (const ⟦2-char-id⟧ of [null !== (⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? LB : ⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧ ? uB : ⟦2-char-id⟧, ...⟦2-char-id⟧]) {
         var ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = /^(["'`])([^"'`]+)\1$/.exec(⟦2-char-id⟧),
           ⟦2-char-id⟧ = "`" === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[1]) && ⟦2-char-id⟧[2].includes("${");
```

</details>

<details>
<summary>Hunk 165 · Change · +1 / -1</summary>

```diff
@@ -8729,7 +8729,7 @@
       }
     }))
   }
-  return [...⟦2-char-id⟧].map((⟦2-char-id⟧ => `"${JJ}" isn't an item or block name.${RA(this.suggestNames(JJ))}`))
+  return [...⟦2-char-id⟧].map((⟦2-char-id⟧ => `"${BB}" isn't an item or block name.${jJ(this.suggestNames(BB))}`))
 }
 reorderedComparedNames(⟦2-char-id⟧) {
   const ⟦2-char-id⟧ = new Set([...this.itemAndBlockNames, "Air", "Unloaded"]),
```

</details>

<details>
<summary>Hunk 166 · Change · +4 / -4</summary>

```diff
@@ -8744,17 +8744,17 @@
     }
   const ⟦2-char-id⟧ = [...⟦2-char-id⟧].map((⟦2-char-id⟧ => {
       let [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
-      return `"${cJ}" isn't a block or item name, so comparing with it is never true. Did you mean "${ZJ}"?`
+      return `"${TB}" isn't a block or item name, so comparing with it is never true. Did you mean "${dB}"?`
     })),
     ⟦2-char-id⟧ = new Map;
   for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.matchAll(/\b\w*block\w*\s*[!=]==?\s*(["'])([^"'\n]+)\1/gi)) {
     const ⟦2-char-id⟧ = ⟦2-char-id⟧[2],
-      ⟦2-char-id⟧ = this.blockNames.has(⟦2-char-id⟧) || !this.itemAndBlockNames.includes(⟦2-char-id⟧) ? void 0 : [`Block of ${cJ}`, `${cJ} Block`].find((⟦2-char-id⟧ => this.blockNames.has(⟦2-char-id⟧)));
-    !⟦2-char-id⟧ || ⟦2-char-id⟧.includes(`"${ZJ}"`) || ⟦2-char-id⟧.includes(`'${ZJ}'`) || ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧)
+      ⟦2-char-id⟧ = this.blockNames.has(⟦2-char-id⟧) || !this.itemAndBlockNames.includes(⟦2-char-id⟧) ? void 0 : [`Block of ${TB}`, `${TB} Block`].find((⟦2-char-id⟧ => this.blockNames.has(⟦2-char-id⟧)));
+    !⟦2-char-id⟧ || ⟦2-char-id⟧.includes(`"${dB}"`) || ⟦2-char-id⟧.includes(`'${dB}'`) || ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧)
   }
   return [...⟦2-char-id⟧, ...[...⟦2-char-id⟧].map((⟦2-char-id⟧ => {
     let [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
-    return `"${cJ}" is an item, not a block, so no block is ever called that. Did you mean "${ZJ}"?`
+    return `"${TB}" is an item, not a block, so no block is ever called that. Did you mean "${dB}"?`
   }))]
 }
 unknownComparedBlockNames(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 167 · Change · +3 / -3</summary>

```diff
@@ -8771,12 +8771,12 @@
         names: ⟦2-char-id⟧,
         isSure: 1 === ⟦2-char-id⟧.length,
         isDecided: !0
-      } : ⟦2-char-id⟧.names.length > 0 || ⟦2-char-id⟧.isDecided ? FJ : {
-        names: ⟦2-char-id⟧.length <= 2 ? ZJ : [],
+      } : ⟦2-char-id⟧.names.length > 0 || ⟦2-char-id⟧.isDecided ? VB : {
+        names: ⟦2-char-id⟧.length <= 2 ? dB : [],
         isSure: 1 === ⟦2-char-id⟧.length,
         isDecided: !1
       };
-    return `"${JJ}" isn't a block or item name, so comparing a block with it is never true.${RA(UJ)}`
+    return `"${BB}" isn't a block or item name, so comparing a block with it is never true.${jJ(yB)}`
   }))
 }
 madeUpStopValues(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 168 · Change · +2 / -2</summary>

```diff
@@ -8791,8 +8791,8 @@
       return ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
         var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
         return {
-          name: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[1]) && void 0 !== ⟦2-char-id⟧ ? UJ : ⟦2-char-id⟧[2],
-          body: ⟦2-char-id⟧.slice(⟦2-char-id⟧.index, null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 1]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.index) && void 0 !== ⟦2-char-id⟧ ? eJ : ⟦2-char-id⟧.length)
+          name: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[1]) && void 0 !== ⟦2-char-id⟧ ? yB : ⟦2-char-id⟧[2],
+          body: ⟦2-char-id⟧.slice(⟦2-char-id⟧.index, null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 1]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.index) && void 0 !== ⟦2-char-id⟧ ? pB : ⟦2-char-id⟧.length)
         }
       }))
     }(⟦2-char-id⟧)) {
```

</details>

<details>
<summary>Hunk 169 · Change · +3 / -3</summary>

```diff
@@ -8800,10 +8800,10 @@
     if ("callback" === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.kind))
       for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.matchAll(/\breturn\s+["']((?:[Pp]revent|[Cc]ancel|[Ss]top|[Bb]lock|[Dd]eny)\w*)["']/g)) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧[1];
-        if (⟦2-char-id⟧.text.includes(`"${FJ}"`)) continue;
+        if (⟦2-char-id⟧.text.includes(`"${VB}"`)) continue;
         const ⟦2-char-id⟧ = [...new Set([...⟦2-char-id⟧.text.matchAll(/Return "(prevent[A-Za-z]*)"/g)].map((⟦2-char-id⟧ => ⟦2-char-id⟧[1])))],
-          ⟦2-char-id⟧ = ⟦2-char-id⟧.length > 0 ? `Did you mean ${eJ.map((JJ=>`"${JJ}"`)).join(" or ")}?` : /Return false/i.test(⟦2-char-id⟧.text) ? `To stop it, return false instead of "${FJ}".` : "Check Show Docs for what it can return.";
-        ⟦2-char-id⟧.add(`${ZJ} can't use "${FJ}" to stop anything. ${XJ}`)
+          ⟦2-char-id⟧ = ⟦2-char-id⟧.length > 0 ? `Did you mean ${pB.map((BB=>`"${BB}"`)).join(" or ")}?` : /Return false/i.test(⟦2-char-id⟧.text) ? `To stop it, return false instead of "${VB}".` : "Check Show Docs for what it can return.";
+        ⟦2-char-id⟧.add(`${dB} can't use "${VB}" to stop anything. ${lB}`)
       }
   }
   return [...⟦2-char-id⟧]
```

</details>

<details>
<summary>Hunk 170 · Change · +1 / -1</summary>

```diff
@@ -8825,7 +8825,7 @@
     }
   }
   const ⟦2-char-id⟧ = ⟦2-char-id⟧.trim().replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase().split(/\s+/).map((⟦2-char-id⟧ => Object.hasOwn(⟦2-char-id⟧, ⟦2-char-id⟧) ? ⟦2-char-id⟧[⟦2-char-id⟧] : ⟦2-char-id⟧)).filter(Boolean).join(" "),
-    ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = this.namesByLowerCase.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? cJ : this.namesByLowerCase.get(⟦2-char-id⟧);
+    ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = this.namesByLowerCase.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? TB : this.namesByLowerCase.get(⟦2-char-id⟧);
   if (⟦2-char-id⟧) return {
     names: [⟦2-char-id⟧],
     isSure: !0,
```

</details>

<details>
<summary>Hunk 171 · Change · +4 / -4</summary>

```diff
@@ -8857,17 +8857,17 @@
   const ⟦2-char-id⟧ = new Map,
     ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
       var ⟦2-char-id⟧;
-      ⟦2-char-id⟧ && ⟦2-char-id⟧.set(⟦2-char-id⟧, (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? ZJ : 0) + ⟦2-char-id⟧)
+      ⟦2-char-id⟧ && ⟦2-char-id⟧.set(⟦2-char-id⟧, (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? dB : 0) + ⟦2-char-id⟧)
     },
     ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧),
     ⟦2-char-id⟧ = ⟦2-char-id⟧.filter((⟦2-char-id⟧ => !⟦2-char-id⟧.has(⟦2-char-id⟧)));
   for (const ⟦2-char-id⟧ of ⟦2-char-id⟧)
     for (const ⟦2-char-id⟧ of Object.hasOwn(⟦2-char-id⟧, ⟦2-char-id⟧) ? ⟦2-char-id⟧[⟦2-char-id⟧] : []) ⟦2-char-id⟧(this.byName.get(⟦2-char-id⟧), 6);
-  for (const ⟦2-char-id⟧ of `${JJ}\n${cJ}`.matchAll(/\bapi\.(\w+)|\b(on[A-Z]\w+|tick|playerCommand)\b|"(\w+)"/g)) {
+  for (const ⟦2-char-id⟧ of `${BB}\n${TB}`.matchAll(/\bapi\.(\w+)|\b(on[A-Z]\w+|tick|playerCommand)\b|"(\w+)"/g)) {
     var ⟦2-char-id⟧, ⟦2-char-id⟧;
-    ⟦2-char-id⟧(this.byName.get(null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[1]) && void 0 !== ⟦2-char-id⟧ ? qJ : ⟦2-char-id⟧[2]) && void 0 !== ⟦2-char-id⟧ ? AJ : ⟦2-char-id⟧[3]), ⟦2-char-id⟧[1] || ⟦2-char-id⟧[2] ? 4 : 2)
+    ⟦2-char-id⟧(this.byName.get(null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[1]) && void 0 !== ⟦2-char-id⟧ ? YB : ⟦2-char-id⟧[2]) && void 0 !== ⟦2-char-id⟧ ? JB : ⟦2-char-id⟧[3]), ⟦2-char-id⟧[1] || ⟦2-char-id⟧[2] ? 4 : 2)
   }
-  for (const ⟦2-char-id⟧ of (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧, /([A-Za-z_$][\w$]*)\s*\(/g, ⟦2-char-id⟧.m)) {
+  for (const ⟦2-char-id⟧ of (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧, /([A-Za-z_$][\w$]*)\s*\(/g, ⟦2-char-id⟧.l)) {
     const ⟦2-char-id⟧ = this.byName.get(⟦2-char-id⟧[1]);
     "helper" === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.kind) && ⟦2-char-id⟧(⟦2-char-id⟧, 3)
   }
```

</details>

<details>
<summary>Hunk 172 · Change · +2 / -2</summary>

```diff
@@ -8876,8 +8876,8 @@
     let ⟦2-char-id⟧ = 0;
     for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = 1 / Math.log2(2 + (null !== (⟦2-char-id⟧ = this.wordCounts.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? YJ : 0));
-      ⟦2-char-id⟧.nameWords.has(⟦2-char-id⟧) ? ⟦2-char-id⟧ += 3 * ZJ : ⟦2-char-id⟧.textWords.has(⟦2-char-id⟧) && (⟦2-char-id⟧ += ⟦2-char-id⟧)
+      const ⟦2-char-id⟧ = 1 / Math.log2(2 + (null !== (⟦2-char-id⟧ = this.wordCounts.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? oB : 0));
+      ⟦2-char-id⟧.nameWords.has(⟦2-char-id⟧) ? ⟦2-char-id⟧ += 3 * dB : ⟦2-char-id⟧.textWords.has(⟦2-char-id⟧) && (⟦2-char-id⟧ += ⟦2-char-id⟧)
     }
     ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
   }
```

</details>

<details>
<summary>Hunk 173 · Change · +1 / -1</summary>

```diff
@@ -8893,7 +8893,7 @@
   var ⟦2-char-id⟧, ⟦2-char-id⟧;
   const ⟦2-char-id⟧ = ⟦2-char-id⟧.trim().replace(/^api\./, "").replace(/\(.*$/, ""),
     ⟦2-char-id⟧ = ⟦2-char-id⟧.toLowerCase();
-  return null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = this.byName.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? ZJ : this.sections.find((⟦2-char-id⟧ => ⟦2-char-id⟧.name.toLowerCase() === ⟦2-char-id⟧))) && void 0 !== ⟦2-char-id⟧ ? cJ : null
+  return null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = this.byName.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? dB : this.sections.find((⟦2-char-id⟧ => ⟦2-char-id⟧.name.toLowerCase() === ⟦2-char-id⟧))) && void 0 !== ⟦2-char-id⟧ ? TB : null
 }
 searchNames(⟦2-char-id⟧, ⟦2-char-id⟧) {
   const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧).filter((⟦2-char-id⟧ => !⟦2-char-id⟧.has(⟦2-char-id⟧))).map(⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 174 · Change · +1 / -1</summary>

```diff
@@ -8930,7 +8930,7 @@
     ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = /^([\w$.]+) (?:needs|couldn't|didn't|isn't a function)/.exec(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[1],
     ⟦2-char-id⟧ = ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? function(⟦2-char-id⟧, ⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.replace(/[$.]/g, "\\$&"),
-        ⟦2-char-id⟧ = new RegExp(`(^|[^\\w$.])${ZJ}\\s*\\(`),
+        ⟦2-char-id⟧ = new RegExp(`(^|[^\\w$.])${dB}\\s*\\(`),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.split("\n").flatMap(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.test(⟦2-char-id⟧) ? [⟦2-char-id⟧ + 1] : []));
       return 1 === ⟦2-char-id⟧.length ? ⟦2-char-id⟧[0] : void 0
     }(⟦2-char-id⟧, ⟦2-char-id⟧) : void 0;
```

</details>

<details>
<summary>Hunk 175 · Change · +11 / -11</summary>

```diff
@@ -8956,37 +8956,37 @@
       };
       const ⟦2-char-id⟧ = /^Error in (?:callback )?(\w+):\s*/.exec(⟦2-char-id⟧);
       return ⟦2-char-id⟧ ? {
-        when: `in ${ZJ[1]}`,
+        when: `in ${dB[1]}`,
         rest: ⟦2-char-id⟧.slice(⟦2-char-id⟧[0].length)
       } : {
         when: "",
         rest: ⟦2-char-id⟧
       }
     }(⟦2-char-id⟧.trim()),
-    ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧ ? ` ${eJ}` : "",
+    ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧ ? ` ${pB}` : "",
     ⟦2-char-id⟧ = /(?:ApiError:\s*)?(\w+) didn't work/.exec(⟦2-char-id⟧);
   if (⟦2-char-id⟧) {
     var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-    const ⟦2-char-id⟧ = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧[0]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.trim()) && void 0 !== ⟦2-char-id⟧ ? jJ : ""),
-      ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧[1]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.trim()) && void 0 !== ⟦2-char-id⟧ ? DJ : "")) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[1],
+    const ⟦2-char-id⟧ = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧[0]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.trim()) && void 0 !== ⟦2-char-id⟧ ? gB : ""),
+      ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧[1]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.trim()) && void 0 !== ⟦2-char-id⟧ ? LB : "")) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[1],
       ⟦2-char-id⟧ = ⟦2-char-id⟧ ? function(⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.split(/\s+or\s+/)[0].trim();
-        return /^(a|an|the)\s/i.test(⟦2-char-id⟧) || !/^[a-z]/i.test(⟦2-char-id⟧) ? cJ : `${/^[aeiou]/i.test(cJ)?"an":"a"} ${cJ}`
+        return /^(a|an|the)\s/i.test(⟦2-char-id⟧) || !/^[a-z]/i.test(⟦2-char-id⟧) ? TB : `${/^[aeiou]/i.test(TB)?"an":"a"} ${TB}`
       }(⟦2-char-id⟧) : void 0;
-    return ⟦2-char-id⟧ && null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧[3] ? `api.${qJ[1]} needs ${ZJ}, but it got ${JJ[3]}${AJ}.` : ⟦2-char-id⟧ ? `api.${qJ[1]} couldn't use its ${nJ=Number(JJ[1]),1===nJ?"first":2===nJ?"second":3===nJ?"third":4===nJ?"fourth":`#${⟦2-char-id⟧}`} argument${AJ}.${ZJ?` ⟦2-char-id⟧ needs ${⟦2-char-id⟧}.`:""}` : `api.${qJ[1]} didn't work${AJ}.`
+    return ⟦2-char-id⟧ && null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧[3] ? `api.${YB[1]} needs ${dB}, but it got ${BB[3]}${JB}.` : ⟦2-char-id⟧ ? `api.${YB[1]} couldn't use its ${DB=Number(BB[1]),1===DB?"first":2===DB?"second":3===DB?"third":4===DB?"fourth":`#${⟦2-char-id⟧}`} argument${JB}.${dB?` ⟦2-char-id⟧ needs ${⟦2-char-id⟧}.`:""}` : `api.${YB[1]} didn't work${JB}.`
   }
   var ⟦2-char-id⟧;
   const ⟦2-char-id⟧ = /TypeError:\s*(?:(.+?) is )?not a function/.exec(⟦2-char-id⟧);
-  if (⟦2-char-id⟧) return ⟦2-char-id⟧[1] ? `${GJ[1]} isn't a function${AJ}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${AJ}. Check each name it calls is spelt exactly right.`;
+  if (⟦2-char-id⟧) return ⟦2-char-id⟧[1] ? `${uB[1]} isn't a function${JB}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${JB}. Check each name it calls is spelt exactly right.`;
   const ⟦2-char-id⟧ = /ReferenceError:\s*'?([^'\s]+)'? is not defined/.exec(⟦2-char-id⟧);
-  if (⟦2-char-id⟧) return `${fJ[1]} isn't defined${AJ}. Check the spelling, or create it before using it.`;
+  if (⟦2-char-id⟧) return `${HB[1]} isn't defined${JB}. Check the spelling, or create it before using it.`;
   const ⟦2-char-id⟧ = /TypeError:\s*[Cc]annot read propert(?:y|ies) (?:'([^']+)' )?of (undefined|null)(?: \(reading '([^']+)'\))?/.exec(⟦2-char-id⟧);
   if (⟦2-char-id⟧) {
     var ⟦2-char-id⟧;
-    const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[1]) && void 0 !== ⟦2-char-id⟧ ? rJ : ⟦2-char-id⟧[3];
-    return `Your code tried to read${JJ?` .${⟦2-char-id⟧}`:" something"} from ${xJ[2]}${AJ}: a value it expected wasn't there.`
+    const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[1]) && void 0 !== ⟦2-char-id⟧ ? vB : ⟦2-char-id⟧[3];
+    return `Your code tried to read${BB?` .${⟦2-char-id⟧}`:" something"} from ${EB[2]}${JB}: a value it expected wasn't there.`
   }
-  return `Your code hit an error${AJ}: ${XJ.replace(/^\w*Error:\s*/,"")}`
+  return `Your code hit an error${JB}: ${lB.replace(/^\w*Error:\s*/,"")}`
 }
 const ⟦2-char-id⟧ = /^"([^"]+)" isn't an item or block name\..*Did you mean "([^"]+)"\?$/,
   ⟦2-char-id⟧ = /^"([^"]+)" isn't a block or item name, so comparing with it\b.*Did you mean "([^"]+)"\?$/,
```

</details>

<details>
<summary>Hunk 176 · Change · +3 / -3</summary>

```diff
@@ -9043,15 +9043,15 @@
 
 function ⟦2-char-id⟧(⟦2-char-id⟧) {
   const ⟦2-char-id⟧ = ⟦2-char-id⟧.map(⟦2-char-id⟧);
-  return ⟦2-char-id⟧.length > 0 && !⟦2-char-id⟧.includes(void 0) ? cJ : void 0
+  return ⟦2-char-id⟧.length > 0 && !⟦2-char-id⟧.includes(void 0) ? TB : void 0
 }
 
 function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-  return ⟦2-char-id⟧.replaceAll(`"${cJ}"`, `"${ZJ}"`).replaceAll(`'${cJ}'`, `'${ZJ}'`)
+  return ⟦2-char-id⟧.replaceAll(`"${TB}"`, `"${dB}"`).replaceAll(`'${TB}'`, `'${dB}'`)
 }
 
 function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-  const ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧().isIdentifier(⟦2-char-id⟧) ? ⟦2-char-id⟧.text === cJ : ⟦2-char-id⟧.elements.some((⟦2-char-id⟧ => !⟦2-char-id⟧().isOmittedExpression(⟦2-char-id⟧) && ⟦2-char-id⟧(⟦2-char-id⟧.name))),
+  const ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧().isIdentifier(⟦2-char-id⟧) ? ⟦2-char-id⟧.text === TB : ⟦2-char-id⟧.elements.some((⟦2-char-id⟧ => !⟦2-char-id⟧().isOmittedExpression(⟦2-char-id⟧) && ⟦2-char-id⟧(⟦2-char-id⟧.name))),
     ⟦2-char-id⟧ = ⟦2-char-id⟧ => void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧().isVariableDeclarationList(⟦2-char-id⟧) && ⟦2-char-id⟧.declarations.some((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧.name))),
     ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧ => !⟦2-char-id⟧().isFunctionLike(⟦2-char-id⟧) && !⟦2-char-id⟧().isClassStaticBlockDeclaration(⟦2-char-id⟧) && (!(!⟦2-char-id⟧().isVariableDeclarationList(⟦2-char-id⟧) || 0 !== (⟦2-char-id⟧.flags & ⟦2-char-id⟧().NodeFlags.BlockScoped) || !⟦2-char-id⟧(⟦2-char-id⟧)) || !0 === ⟦2-char-id⟧().forEachChild(⟦2-char-id⟧, ⟦2-char-id⟧));
```

</details>

<details>
<summary>Hunk 177 · Change · +1 / -1</summary>

```diff
@@ -9064,7 +9064,7 @@
     return ⟦2-char-id⟧().isVariableStatement(⟦2-char-id⟧) && ⟦2-char-id⟧(⟦2-char-id⟧.declarationList) || (⟦2-char-id⟧().isFunctionDeclaration(⟦2-char-id⟧) || ⟦2-char-id⟧().isClassDeclaration(⟦2-char-id⟧)) && (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.name) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.text) === ⟦2-char-id⟧ || ⟦2-char-id⟧().isImportDeclaration(⟦2-char-id⟧) && (⟦2-char-id⟧ => {
       var ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.namedBindings;
-      return (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.name) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.text) === ⟦2-char-id⟧ || void 0 !== ⟦2-char-id⟧ && (⟦2-char-id⟧().isNamespaceImport(⟦2-char-id⟧) ? ⟦2-char-id⟧.name.text === cJ : ⟦2-char-id⟧.elements.some((⟦2-char-id⟧ => ⟦2-char-id⟧.name.text === ⟦2-char-id⟧)))
+      return (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.name) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.text) === ⟦2-char-id⟧ || void 0 !== ⟦2-char-id⟧ && (⟦2-char-id⟧().isNamespaceImport(⟦2-char-id⟧) ? ⟦2-char-id⟧.name.text === TB : ⟦2-char-id⟧.elements.some((⟦2-char-id⟧ => ⟦2-char-id⟧.name.text === ⟦2-char-id⟧)))
     })(⟦2-char-id⟧.importClause)
   })) : ⟦2-char-id⟧().isForStatement(⟦2-char-id⟧) || ⟦2-char-id⟧().isForInStatement(⟦2-char-id⟧) || ⟦2-char-id⟧().isForOfStatement(⟦2-char-id⟧) ? ⟦2-char-id⟧(⟦2-char-id⟧.initializer) : ⟦2-char-id⟧().isCatchClause(⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧.variableDeclaration && ⟦2-char-id⟧(⟦2-char-id⟧.variableDeclaration.name))
 }
```

</details>

<details>
<summary>Hunk 178 · Change · +1 / -1</summary>

```diff
@@ -9089,7 +9089,7 @@
               ⟦2-char-id⟧ = ⟦2-char-id⟧().isCallExpression(⟦2-char-id⟧) && ⟦2-char-id⟧.expression === ⟦2-char-id⟧;
             ⟦2-char-id⟧ || ⟦2-char-id⟧ && !⟦2-char-id⟧ || ⟦2-char-id⟧.push({
               at: ⟦2-char-id⟧.getStart(⟦2-char-id⟧),
-              text: ⟦2-char-id⟧().isShorthandPropertyAssignment(⟦2-char-id⟧) ? `${cJ}: ${ZJ}` : ⟦2-char-id⟧
+              text: ⟦2-char-id⟧().isShorthandPropertyAssignment(⟦2-char-id⟧) ? `${TB}: ${dB}` : ⟦2-char-id⟧
             })
           }
           ⟦2-char-id⟧().forEachChild(⟦2-char-id⟧, (⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 179 · Change · +2 / -2</summary>

```diff
@@ -9099,8 +9099,8 @@
       return ⟦2-char-id⟧(⟦2-char-id⟧, !1), ⟦2-char-id⟧.reduceRight(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧.at) + ⟦2-char-id⟧.text + ⟦2-char-id⟧.slice(⟦2-char-id⟧.at + ⟦2-char-id⟧.length)), ⟦2-char-id⟧)
     }(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, "call" === ⟦2-char-id⟧);
     if ("compared" === ⟦2-char-id⟧ || "comparedBlock" === ⟦2-char-id⟧) {
-      const ⟦2-char-id⟧ = `(["'])${function(JJ){return JJ.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(ZJ)}\\1`;
-      return ("comparedBlock" === ⟦2-char-id⟧ ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${cJ}`, `${cJ}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${cJ}`, `${cJ}\\s*[!=]==?`, `\\bcase\\s+${cJ}\\s*:`, `\\.includes\\(\\s*${cJ}\\s*\\)`]).reduce(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.replace(new RegExp(⟦2-char-id⟧, "g"), (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)))), ⟦2-char-id⟧)
+      const ⟦2-char-id⟧ = `(["'])${function(BB){return BB.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(dB)}\\1`;
+      return ("comparedBlock" === ⟦2-char-id⟧ ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${TB}`, `${TB}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${TB}`, `${TB}\\s*[!=]==?`, `\\bcase\\s+${TB}\\s*:`, `\\.includes\\(\\s*${TB}\\s*\\)`]).reduce(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.replace(new RegExp(⟦2-char-id⟧, "g"), (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)))), ⟦2-char-id⟧)
     }
     if (void 0 !== ⟦2-char-id⟧) {
       return ⟦2-char-id⟧(⟦2-char-id⟧).filter((⟦2-char-id⟧ => ⟦2-char-id⟧.name === ⟦2-char-id⟧ && ⟦2-char-id⟧.topLevel)).reduceRight(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧.from) + ⟦2-char-id⟧(⟦2-char-id⟧.slice(⟦2-char-id⟧.from, ⟦2-char-id⟧.to), ⟦2-char-id⟧, ⟦2-char-id⟧) + ⟦2-char-id⟧.slice(⟦2-char-id⟧.to)), ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 180 · Change · +2 / -2</summary>

```diff
@@ -9115,9 +9115,9 @@
     to: ⟦2-char-id⟧,
     kind: ⟦2-char-id⟧
   } = ⟦2-char-id⟧;
-  return "export" === ⟦2-char-id⟧ ? 'The "global." lines are gone: World Code finds your callbacks by their names.' : `"${cJ}" is now "${ZJ}".`
+  return "export" === ⟦2-char-id⟧ ? 'The "global." lines are gone: World Code finds your callbacks by their names.' : `"${TB}" is now "${dB}".`
 }
-var ⟦2-char-id⟧ = ⟦2-char-id⟧(40197);
+var ⟦2-char-id⟧ = ⟦2-char-id⟧(40193);
 
 function ⟦2-char-id⟧() {
   return (0, ⟦2-char-id⟧.jsxs)("svg", {
```

</details>

<details>
<summary>Hunk 181 · Change · +8 / -8</summary>

```diff
@@ -9174,23 +9174,23 @@
   } = ⟦2-char-id⟧;
   switch (⟦2-char-id⟧) {
     case "badKey":
-      return ⟦2-char-id⟧ ? `${FJ} didn't accept your key: it may be wrong or deleted.` : `${FJ} didn't accept your key: it may be wrong or deleted. Check it on ${FJ}'s website.`;
+      return ⟦2-char-id⟧ ? `${VB} didn't accept your key: it may be wrong or deleted.` : `${VB} didn't accept your key: it may be wrong or deleted. Check it on ${VB}'s website.`;
     case "noCredit":
-      return ⟦2-char-id⟧ ? `${FJ} stopped your key for now: it has used all it can.` : `${FJ} stopped your key for now: it has used all it can. Check it on ${FJ}'s website.`;
+      return ⟦2-char-id⟧ ? `${VB} stopped your key for now: it has used all it can.` : `${VB} stopped your key for now: it has used all it can. Check it on ${VB}'s website.`;
     case "busy":
-      return `Too many requests to ${ZJ} right now. Wait a minute and try again.`;
+      return `Too many requests to ${dB} right now. Wait a minute and try again.`;
     case "noModel":
-      return `${FJ} can't find ${ZJ}. Pick another model, or press Check for new models in AI settings.`;
+      return `${VB} can't find ${dB}. Pick another model, or press Check for new models in AI settings.`;
     case "timeout":
-      return `${ZJ} took too long to answer.`;
+      return `${dB} took too long to answer.`;
     case "unreachable":
-      return ⟦2-char-id⟧ ? `Couldn't reach ${FJ}. Check the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help.` : `Couldn't reach ${FJ}. Check your internet and your key.`;
+      return ⟦2-char-id⟧ ? `Couldn't reach ${VB}. Check the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help.` : `Couldn't reach ${VB}. Check your internet and your key.`;
     case "blocked":
-      return `${FJ} doesn't work from where you are.`;
+      return `${VB} doesn't work from where you are.`;
     case "unchecked":
       return "Bloxd's safety check didn't answer, so your key wasn't used.";
     default:
-      return `${ZJ} can't be used right now. Try again in a minute.`
+      return `${dB} can't be used right now. Try again in a minute.`
   }
 }
 
```

</details>

<details>
<summary>Hunk 182 · Change · +8 / -8</summary>

```diff
@@ -9202,23 +9202,23 @@
   } = ⟦2-char-id⟧;
   switch (⟦2-char-id⟧) {
     case "badKey":
-      return `Not answered: ${FJ} didn't accept your key.`;
+      return `Not answered: ${VB} didn't accept your key.`;
     case "noModel":
-      return `Not answered: ${FJ} couldn't find ${ZJ}.`;
+      return `Not answered: ${VB} couldn't find ${dB}.`;
     case "noCredit":
-      return `Not answered: ${FJ} stopped your key for now.`;
+      return `Not answered: ${VB} stopped your key for now.`;
     case "busy":
-      return `Not answered: too many requests to ${ZJ}.`;
+      return `Not answered: too many requests to ${dB}.`;
     case "timeout":
-      return `Not answered: ${ZJ} took too long.`;
+      return `Not answered: ${dB} took too long.`;
     case "unreachable":
-      return `Not answered: couldn't reach ${FJ}.`;
+      return `Not answered: couldn't reach ${VB}.`;
     case "blocked":
-      return `Not answered: ${FJ} doesn't work from where you are.`;
+      return `Not answered: ${VB} doesn't work from where you are.`;
     case "unchecked":
       return "Not answered: the safety check didn't answer.";
     default:
-      return `Not answered: ${ZJ} couldn't be used.`
+      return `Not answered: ${dB} couldn't be used.`
   }
 }
 
```

</details>

<details>
<summary>Hunk 183 · Change · +1 / -1</summary>

```diff
@@ -9236,7 +9236,7 @@
   return (0, ⟦2-char-id⟧.jsxs)("div", {
     className: "WorldCodeAiKeyNoticeActions",
     children: [(0, ⟦2-char-id⟧.jsx)("button", {
-      ...⟦2-char-id⟧.d,
+      ...⟦2-char-id⟧.f,
       className: "WorldCodeAiPrimaryButton",
       onClick: ⟦2-char-id⟧,
       children: "Use Bot.xd for this one"
```

</details>

<details>
<summary>Hunk 184 · Change · +1 / -1</summary>

```diff
@@ -9369,7 +9369,7 @@
     ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.provider, ⟦2-char-id⟧.baseUrl, !0),
     ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
-      return "" === ⟦2-char-id⟧ ? "no key needed" : ⟦2-char-id⟧.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === ⟦2-char-id⟧ ? `key \u2026${JJ.slice(-4)}` : `${(null!==(ZJ=null===(FJ=/^[a-zA-Z]+-/.exec(JJ))||void 0===FJ?void 0:FJ[0])&&void 0!==ZJ?ZJ:JJ.slice(0,4)).slice(0,6)}\u2026${JJ.slice(-4)}`
+      return "" === ⟦2-char-id⟧ ? "no key needed" : ⟦2-char-id⟧.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === ⟦2-char-id⟧ ? `key \u2026${BB.slice(-4)}` : `${(null!==(dB=null===(VB=/^[a-zA-Z]+-/.exec(BB))||void 0===VB?void 0:VB[0])&&void 0!==dB?dB:BB.slice(0,4)).slice(0,6)}\u2026${BB.slice(-4)}`
     }(⟦2-char-id⟧.key, ⟦2-char-id⟧.provider);
   return (0, ⟦2-char-id⟧.jsxs)("span", {
     className: "WorldCodeAiModelGroupName",
```

</details>

<details>
<summary>Hunk 185 · Change · +2 / -2</summary>

```diff
@@ -9391,12 +9391,12 @@
       className: "WorldCodeAiKeyLinks",
       children: [⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("button", {
         className: "WorldCodeAiKeyLearnMore",
-        "aria-label": `Edit ${eJ} key`,
+        "aria-label": `Edit ${pB} key`,
         onClick: ⟦2-char-id⟧,
         children: "Edit"
       }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("button", {
         className: "WorldCodeAiKeyLearnMore",
-        "aria-label": `Rename ${eJ} key`,
+        "aria-label": `Rename ${pB} key`,
         onClick: ⟦2-char-id⟧,
         children: "Rename"
       })]
```

</details>

<details>
<summary>Hunk 186 · Change · +4 / -4</summary>

```diff
@@ -9417,13 +9417,13 @@
     disabledWhy: ⟦2-char-id⟧
   } = ⟦2-char-id⟧;
   const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(!1),
-    ⟦2-char-id⟧ = `${DJ}-${null!==(cJ=null===YJ||void 0===YJ?void 0:YJ.keyId)&&void 0!==cJ?cJ:"botxd"}-${null!==(ZJ=null===YJ||void 0===YJ?void 0:YJ.modelId)&&void 0!==ZJ?ZJ:"botxd"}`.replace(/[^\w-]/g, "_"),
+    ⟦2-char-id⟧ = `${LB}-${null!==(TB=null===oB||void 0===oB?void 0:oB.keyId)&&void 0!==TB?TB:"botxd"}-${null!==(dB=null===oB||void 0===oB?void 0:oB.modelId)&&void 0!==dB?dB:"botxd"}`.replace(/[^\w-]/g, "_"),
     ⟦2-char-id⟧ = !!⟦2-char-id⟧;
   return (0, ⟦2-char-id⟧.jsxs)("label", {
     className: ⟦2-char-id⟧()("WorldCodeAiModelRow", ⟦2-char-id⟧ && "Selected", ⟦2-char-id⟧ && "Disabled"),
-    "data-key-id": null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.keyId) && void 0 !== ⟦2-char-id⟧ ? UJ : "botxd",
-    "data-model-id": null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.modelId) && void 0 !== ⟦2-char-id⟧ ? AJ : "botxd",
-    title: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? GJ : void 0,
+    "data-key-id": null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.keyId) && void 0 !== ⟦2-char-id⟧ ? yB : "botxd",
+    "data-model-id": null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.modelId) && void 0 !== ⟦2-char-id⟧ ? JB : "botxd",
+    title: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? uB : void 0,
     onPointerDown: () => {
       ⟦2-char-id⟧.current = !⟦2-char-id⟧
     },
```

</details>

<details>
<summary>Hunk 187 · Change · +1 / -1</summary>

```diff
@@ -9431,7 +9431,7 @@
       type: "radio",
       name: ⟦2-char-id⟧,
       "aria-label": ⟦2-char-id⟧,
-      "aria-describedby": ⟦2-char-id⟧ ? xJ : void 0,
+      "aria-describedby": ⟦2-char-id⟧ ? EB : void 0,
       checked: ⟦2-char-id⟧,
       disabled: ⟦2-char-id⟧,
       onChange: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 188 · Change · +1 / -1</summary>

```diff
@@ -9458,7 +9458,7 @@
     onPicked: ⟦2-char-id⟧,
     canRename: ⟦2-char-id⟧ = !1,
     onEdit: ⟦2-char-id⟧,
-    jK: ⟦2-char-id⟧,
+    Kw: ⟦2-char-id⟧,
     onRefresh: ⟦2-char-id⟧,
     refreshingIds: ⟦2-char-id⟧,
     keyNote: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 189 · Change · +1 / -1</summary>

```diff
@@ -9481,7 +9481,7 @@
         var ⟦2-char-id⟧;
         return {
           id: ⟦2-char-id⟧.id,
-          at: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.usedAt) && void 0 !== ⟦2-char-id⟧ ? ZJ : 0,
+          at: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.usedAt) && void 0 !== ⟦2-char-id⟧ ? dB : 0,
           i: ⟦2-char-id⟧
         }
       })).sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.at - ⟦2-char-id⟧.at || ⟦2-char-id⟧.i - ⟦2-char-id⟧.i));
```

</details>

<details>
<summary>Hunk 190 · Change · +1 / -1</summary>

```diff
@@ -9504,7 +9504,7 @@
         null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.querySelector(".WorldCodeAiModelRemove")) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.focus()
       }))
     },
-    ⟦2-char-id⟧ = `${cJ}-model`,
+    ⟦2-char-id⟧ = `${TB}-model`,
     ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
       var ⟦2-char-id⟧;
       return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
```

</details>

<details>
<summary>Hunk 191 · Change · +1 / -1</summary>

```diff
@@ -9517,7 +9517,7 @@
           ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧.unpick()
         },
         onChosen: ⟦2-char-id⟧
-      }, null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.modelId) && void 0 !== ⟦2-char-id⟧ ? FJ : "botxd")
+      }, null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.modelId) && void 0 !== ⟦2-char-id⟧ ? VB : "botxd")
     };
   return (0, ⟦2-char-id⟧.jsxs)("div", {
     className: "WorldCodeAiModelList",
```

</details>

<details>
<summary>Hunk 192 · Change · +3 / -3</summary>

```diff
@@ -9525,18 +9525,18 @@
     "aria-labelledby": ⟦2-char-id⟧,
     children: [⟦2-char-id⟧("Bot.xd (free)", "Bloxd's own AI.", null), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
       name: ⟦2-char-id⟧,
-      hint: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? xJ : `Bloxd's better AI. ${fJ.status?sA(fJ.status):""}`.trim(),
+      hint: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? EB : `Bloxd's better AI. ${HB.status?uJ(HB.status):""}`.trim(),
       choice: ⟦2-char-id⟧,
       selected: ⟦2-char-id⟧.picked && null === ⟦2-char-id⟧,
       radioName: ⟦2-char-id⟧,
       onSelect: () => {
         var ⟦2-char-id⟧, ⟦2-char-id⟧;
-        ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.status) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.provider) && void 0 !== ⟦2-char-id⟧ ? JJ : "ovh") && ⟦2-char-id⟧.PD()
+        ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.status) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.provider) && void 0 !== ⟦2-char-id⟧ ? BB : "ovh") && ⟦2-char-id⟧.dO()
       },
       onChosen: () => {
         (async function(⟦2-char-id⟧) {
           var ⟦2-char-id⟧;
-          if (⟦2-char-id⟧(null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.provider) && void 0 !== ⟦2-char-id⟧ ? cJ : "ovh")) return ⟦2-char-id⟧.PD(), !0;
+          if (⟦2-char-id⟧(null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.provider) && void 0 !== ⟦2-char-id⟧ ? TB : "ovh")) return ⟦2-char-id⟧.dO(), !0;
           if (⟦2-char-id⟧) return !1;
           ⟦2-char-id⟧ = !0;
           try {
```

</details>

<details>
<summary>Hunk 193 · Change · +1 / -1</summary>

```diff
@@ -9544,7 +9544,7 @@
               NotificationProvider: ⟦2-char-id⟧
             }, {
               WorldCodeAiDeepSeekNotice: ⟦2-char-id⟧
-            }] = await Promise.all([Promise.resolve().then((() => ⟦2-char-id⟧(1247))), ⟦2-char-id⟧.e(337).then((() => ⟦2-char-id⟧(59425)))]), ⟦2-char-id⟧ = ⟦2-char-id⟧.showPromptPopup({
+            }] = await Promise.all([Promise.resolve().then((() => ⟦2-char-id⟧(1235))), ⟦2-char-id⟧.e(337).then((() => ⟦2-char-id⟧(59752)))]), ⟦2-char-id⟧ = ⟦2-char-id⟧.showPromptPopup({
               title: "superBotXd:deepSeekTitle",
               subtitle: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {}),
               confirmText: "superBotXd:use",
```

</details>

<details>
<summary>Hunk 194 · Change · +1 / -1</summary>

```diff
@@ -9555,7 +9555,7 @@
               try {
                 window.localStorage.setItem(⟦2-char-id⟧, "1")
               } catch {}
-            }(), ⟦2-char-id⟧.PD(), !0)
+            }(), ⟦2-char-id⟧.dO(), !0)
           } finally {
             ⟦2-char-id⟧ = !1, ⟦2-char-id⟧ = null
           }
```

</details>

<details>
<summary>Hunk 195 · Change · +2 / -2</summary>

```diff
@@ -9568,8 +9568,8 @@
       var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.length >= 4 && !⟦2-char-id⟧(⟦2-char-id⟧) && !⟦2-char-id⟧.has(⟦2-char-id⟧.id) && !⟦2-char-id⟧.has(⟦2-char-id⟧.id),
-        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.models.find((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧.usedModelId))) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧(⟦2-char-id⟧.models) : void 0,
-        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.id]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.trim().toLowerCase()) && void 0 !== ⟦2-char-id⟧ ? ZJ : "",
+        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.models.find((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧.usedModelId))) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧(⟦2-char-id⟧.models) : void 0,
+        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.id]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.trim().toLowerCase()) && void 0 !== ⟦2-char-id⟧ ? dB : "",
         ⟦2-char-id⟧ = ⟦2-char-id⟧ ? [⟦2-char-id⟧] : "" === ⟦2-char-id⟧ ? ⟦2-char-id⟧.models : ⟦2-char-id⟧.models.filter((⟦2-char-id⟧ => ⟦2-char-id⟧.name.toLowerCase().includes(⟦2-char-id⟧) || ⟦2-char-id⟧({
           keyId: ⟦2-char-id⟧.id,
           modelId: ⟦2-char-id⟧.id
```

</details>

<details>
<summary>Hunk 196 · Change · +1 / -1</summary>

```diff
@@ -9582,7 +9582,7 @@
         children: [(0, ⟦2-char-id⟧.jsxs)("div", {
           className: "WorldCodeAiModelGroupHeader",
           children: [⟦2-char-id⟧ === ⟦2-char-id⟧.id ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
-            keyName: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? UJ : "",
+            keyName: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? yB : "",
             placeholder: ⟦2-char-id⟧(⟦2-char-id⟧.provider, ⟦2-char-id⟧.baseUrl),
             onDone: ⟦2-char-id⟧ => {
               null !== ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧.id, ⟦2-char-id⟧), ⟦2-char-id⟧(null)
```

</details>

<details>
<summary>Hunk 197 · Change · +1 / -1</summary>

```diff
@@ -9598,7 +9598,7 @@
             } : void 0
           }), ⟦2-char-id⟧ && ⟦2-char-id⟧ !== ⟦2-char-id⟧.id && (0, ⟦2-char-id⟧.jsx)("button", {
             className: "WorldCodeAiLinkButton WorldCodeAiModelRefresh",
-            "aria-label": `Check ${fJ} for new models`,
+            "aria-label": `Check ${HB} for new models`,
             disabled: null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.has(⟦2-char-id⟧.id),
             onClick: () => {
               ⟦2-char-id⟧(⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 198 · Change · +1 / -1</summary>

```diff
@@ -9606,7 +9606,7 @@
             children: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.has(⟦2-char-id⟧.id) ? "Checking\u2026" : "Check for new models"
           }), ⟦2-char-id⟧ && ⟦2-char-id⟧ !== ⟦2-char-id⟧.id && (0, ⟦2-char-id⟧.jsx)("button", {
             className: "WorldCodeAiLinkButton WorldCodeAiModelRemove",
-            "aria-label": `Remove ${fJ} key`,
+            "aria-label": `Remove ${HB} key`,
             onClick: () => {
               ⟦2-char-id⟧(⟦2-char-id⟧.id)
             },
```

</details>

<details>
<summary>Hunk 199 · Change · +3 / -3</summary>

```diff
@@ -9614,20 +9614,20 @@
           }), ⟦2-char-id⟧ && ⟦2-char-id⟧ === ⟦2-char-id⟧.id && (0, ⟦2-char-id⟧.jsxs)("span", {
             className: "WorldCodeAiKeyConfirm",
             role: "group",
-            "aria-label": `Remove ${fJ} key?`,
+            "aria-label": `Remove ${HB} key?`,
             onKeyDown: ⟦2-char-id⟧ => {
               "Escape" === ⟦2-char-id⟧.key && (⟦2-char-id⟧.stopPropagation(), ⟦2-char-id⟧.preventDefault(), ⟦2-char-id⟧(⟦2-char-id⟧.currentTarget))
             },
             children: ["Remove key?", (0, ⟦2-char-id⟧.jsx)("button", {
               className: "WorldCodeAiLinkButton WorldCodeAiModelRemove",
-              "aria-label": `Yes, remove ${fJ} key`,
+              "aria-label": `Yes, remove ${HB} key`,
               onClick: () => {
                 ⟦2-char-id⟧(null), ⟦2-char-id⟧(⟦2-char-id⟧)
               },
               children: "Yes"
             }), (0, ⟦2-char-id⟧.jsx)("button", {
               className: "WorldCodeAiLinkButton",
-              "aria-label": `No, keep ${fJ} key`,
+              "aria-label": `No, keep ${HB} key`,
               autoFocus: !0,
               onClick: ⟦2-char-id⟧ => {
                 ⟦2-char-id⟧(⟦2-char-id⟧.currentTarget)
```

</details>

<details>
<summary>Hunk 200 · Change · +3 / -3</summary>

```diff
@@ -9641,9 +9641,9 @@
           children: ⟦2-char-id⟧.text
         }), !⟦2-char-id⟧ && ⟦2-char-id⟧.models.length > 12 && (0, ⟦2-char-id⟧.jsx)("input", {
           className: "WorldCodeAiAddKeyInput WorldCodeAiModelFilter",
-          "aria-label": `Find a model from ${fJ}`,
-          placeholder: `Find a model (${JJ.models.length})`,
-          value: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.id]) && void 0 !== ⟦2-char-id⟧ ? nJ : "",
+          "aria-label": `Find a model from ${HB}`,
+          placeholder: `Find a model (${BB.models.length})`,
+          value: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.id]) && void 0 !== ⟦2-char-id⟧ ? DB : "",
           onKeyDown: ⟦2-char-id⟧ => {
             ⟦2-char-id⟧.stopPropagation()
           },
```

</details>

<details>
<summary>Hunk 201 · Change · +1 / -1</summary>

```diff
@@ -9659,7 +9659,7 @@
           modelId: ⟦2-char-id⟧.id
         }))), ⟦2-char-id⟧ && ⟦2-char-id⟧.models.length > 1 && (0, ⟦2-char-id⟧.jsxs)("button", {
           className: "WorldCodeAiKeyLearnMore WorldCodeAiModelUnfold",
-          "aria-label": `Show all ${fJ} models`,
+          "aria-label": `Show all ${HB} models`,
           onClick: ⟦2-char-id⟧ => {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.currentTarget.closest(".WorldCodeAiModelGroup");
             ⟦2-char-id⟧((⟦2-char-id⟧ => new Set(⟦2-char-id⟧).add(⟦2-char-id⟧.id))), setTimeout((() => {
```

</details>

<details>
<summary>Hunk 202 · Change · +1 / -1</summary>

```diff
@@ -9695,7 +9695,7 @@
     }), (0, ⟦2-char-id⟧.jsxs)("span", {
       children: [⟦2-char-id⟧, (0, ⟦2-char-id⟧.jsx)("span", {
         className: "WorldCodeAiAiSettingsNote",
-        children: ⟦2-char-id⟧ ? UJ : ⟦2-char-id⟧
+        children: ⟦2-char-id⟧ ? yB : ⟦2-char-id⟧
       })]
     })]
   })
```

</details>

<details>
<summary>Hunk 203 · Change · +1 / -1</summary>

```diff
@@ -9815,7 +9815,7 @@
           onKeyDown: ⟦2-char-id⟧ => {
             "Escape" === ⟦2-char-id⟧.key && (⟦2-char-id⟧.stopPropagation(), ⟦2-char-id⟧.preventDefault(), ⟦2-char-id⟧())
           },
-          children: [1 === ⟦2-char-id⟧.length ? "Forget your key" : `Forget all ${AJ.length} keys`, " in this browser?", (0, ⟦2-char-id⟧.jsx)("button", {
+          children: [1 === ⟦2-char-id⟧.length ? "Forget your key" : `Forget all ${JB.length} keys`, " in this browser?", (0, ⟦2-char-id⟧.jsx)("button", {
             className: "WorldCodeAiLinkButton WorldCodeAiModelRemove",
             onClick: () => {
               ⟦2-char-id⟧.removeAll(), ⟦2-char-id⟧(!1), ⟦2-char-id⟧(null), ⟦2-char-id⟧(!0)
```

</details>

<details>
<summary>Hunk 204 · Change · +2 / -2</summary>

```diff
@@ -9879,13 +9879,13 @@
               });
               0 === ⟦2-char-id⟧.length ? ⟦2-char-id⟧({
                 keyId: ⟦2-char-id⟧.id,
-                text: `${cJ} listed no models, so your models stay as they were.`
+                text: `${TB} listed no models, so your models stay as they were.`
               }) : ⟦2-char-id⟧.refreshModels(⟦2-char-id⟧.id, ⟦2-char-id⟧, {
                 key: ⟦2-char-id⟧.key,
                 baseUrl: ⟦2-char-id⟧.baseUrl
               }) && ⟦2-char-id⟧({
                 keyId: ⟦2-char-id⟧.id,
-                text: `${cJ}'s models are up to date.`
+                text: `${TB}'s models are up to date.`
               })
             } catch (⟦2-char-id⟧) {
               ⟦2-char-id⟧({
```

</details>

<details>
<summary>Hunk 205 · Change · +1 / -1</summary>

```diff
@@ -9899,7 +9899,7 @@
             }))
           })(⟦2-char-id⟧)
         },
-        jK: ⟦2-char-id⟧ => {
+        Kw: ⟦2-char-id⟧ => {
           var ⟦2-char-id⟧;
           const ⟦2-char-id⟧ = (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.activeKey()) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.id) === ⟦2-char-id⟧.id,
             ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.id);
```

</details>

<details>
<summary>Hunk 206 · Change · +1 / -1</summary>

```diff
@@ -9954,7 +9954,7 @@
       if (⟦2-char-id⟧) {
         var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.current) || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.closest("form")) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.querySelector(".WorldCodeAiAddKeyActions");
-        null === (⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? FJ : ⟦2-char-id⟧.current) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.scrollIntoView({
+        null === (⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? VB : ⟦2-char-id⟧.current) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.scrollIntoView({
           block: "nearest",
           behavior: "smooth"
         })
```

</details>

<details>
<summary>Hunk 207 · Change · +3 / -3</summary>

```diff
@@ -9974,11 +9974,11 @@
       id: "WorldCodeAiKeyExplainerLines",
       className: "WorldCodeAiKeyExplainerLines",
       children: [(0, ⟦2-char-id⟧.jsx)("li", {
-        children: ⟦2-char-id⟧ ? `An API key works like a password for ${qJ.shortName}'s AI (it isn't your ${qJ.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
+        children: ⟦2-char-id⟧ ? `An API key works like a password for ${YB.shortName}'s AI (it isn't your ${YB.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
       }), (0, ⟦2-char-id⟧.jsxs)("li", {
-        children: ["You make it on ", ⟦2-char-id⟧ ? `${qJ.shortName}'s website` : (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {}), ", and see how much you've used or delete it there."]
+        children: ["You make it on ", ⟦2-char-id⟧ ? `${YB.shortName}'s website` : (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {}), ", and see how much you've used or delete it there."]
       }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)("li", {
-        children: ["Your key stays in this browser and only goes to ", null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.shortName) && void 0 !== ⟦2-char-id⟧ ? cJ : "that company", ", never to Bloxd."]
+        children: ["Your key stays in this browser and only goes to ", null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.shortName) && void 0 !== ⟦2-char-id⟧ ? TB : "that company", ", never to Bloxd."]
       }), (0, ⟦2-char-id⟧.jsx)("li", {
         className: "WorldCodeAiKeyExplainerMore",
         children: (0, ⟦2-char-id⟧.jsx)("button", {
```

</details>

<details>
<summary>Hunk 208 · Change · +4 / -4</summary>

```diff
@@ -10037,13 +10037,13 @@
   } = ⟦2-char-id⟧;
   const {
     remember: ⟦2-char-id⟧
-  } = ⟦2-char-id⟧(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.provider) && void 0 !== ⟦2-char-id⟧ ? cJ : null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!!⟦2-char-id⟧), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(""), ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.key) && void 0 !== ⟦2-char-id⟧ ? ZJ : "", [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.baseUrl) && void 0 !== ⟦2-char-id⟧ ? UJ : ""), ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
+  } = ⟦2-char-id⟧(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.provider) && void 0 !== ⟦2-char-id⟧ ? TB : null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!!⟦2-char-id⟧), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(""), ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.key) && void 0 !== ⟦2-char-id⟧ ? dB : "", [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.baseUrl) && void 0 !== ⟦2-char-id⟧ ? yB : ""), ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
     var ⟦2-char-id⟧, ⟦2-char-id⟧;
-    return ⟦2-char-id⟧ === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.provider) && ("custom" !== ⟦2-char-id⟧ || (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? cJ : "") === (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.baseUrl) && void 0 !== ⟦2-char-id⟧ ? ZJ : ""))
+    return ⟦2-char-id⟧ === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.provider) && ("custom" !== ⟦2-char-id⟧ || (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? TB : "") === (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.baseUrl) && void 0 !== ⟦2-char-id⟧ ? dB : ""))
   }, ⟦2-char-id⟧ = "" !== ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
     let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ⟦2-char-id⟧(⟦2-char-id⟧);
-    return "" === ⟦2-char-id⟧ && "" !== ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧) ? rJ : ⟦2-char-id⟧
-  }, [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(""), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? eJ : ""), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(""), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), ⟦2-char-id⟧ = "custom" === ⟦2-char-id⟧ && "" === ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null);
+    return "" === ⟦2-char-id⟧ && "" !== ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧) ? vB : ⟦2-char-id⟧
+  }, [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(""), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? pB : ""), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(""), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), ⟦2-char-id⟧ = "custom" === ⟦2-char-id⟧ && "" === ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null);
   (0, ⟦2-char-id⟧.useEffect)((() => {
     var ⟦2-char-id⟧, ⟦2-char-id⟧;
     ⟦2-char-id⟧ && (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.current) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.scrollIntoView({
```

</details>

<details>
<summary>Hunk 209 · Change · +2 / -2</summary>

```diff
@@ -10074,14 +10074,14 @@
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.addKey({
           provider: ⟦2-char-id⟧,
           key: ⟦2-char-id⟧(⟦2-char-id⟧),
-          baseUrl: "custom" === ⟦2-char-id⟧ && null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? JJ : void 0,
+          baseUrl: "custom" === ⟦2-char-id⟧ && null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? BB : void 0,
           models: ⟦2-char-id⟧
         }, ⟦2-char-id⟧, null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.id);
         ("" !== ⟦2-char-id⟧.trim() || ⟦2-char-id⟧) && ⟦2-char-id⟧.renameKey(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧()
       })() : (async () => {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
         ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧(null);
-        const ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? DJ : ⟦2-char-id⟧(⟦2-char-id⟧),
+        const ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? LB : ⟦2-char-id⟧(⟦2-char-id⟧),
           ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
         if ("" === ⟦2-char-id⟧ && "custom" !== ⟦2-char-id⟧) return void ⟦2-char-id⟧("Paste your key first.");
         if (!⟦2-char-id⟧) return void ⟦2-char-id⟧("Pick the company your key is from.");
```

</details>

<details>
<summary>Hunk 210 · Change · +5 / -5</summary>

```diff
@@ -10096,21 +10096,21 @@
           const ⟦2-char-id⟧ = await ⟦2-char-id⟧({
             provider: ⟦2-char-id⟧,
             key: ⟦2-char-id⟧,
-            baseUrl: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? UJ : void 0,
-            modelName: ⟦2-char-id⟧ ? SJ : void 0
+            baseUrl: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? yB : void 0,
+            modelName: ⟦2-char-id⟧ ? zB : void 0
           }, ⟦2-char-id⟧.signal);
           if (⟦2-char-id⟧(!1), 0 === ⟦2-char-id⟧.length) return ⟦2-char-id⟧(!0), void ⟦2-char-id⟧("custom" === ⟦2-char-id⟧ ? "This address doesn't list its models. Type the name of the model to use." : "Type the name of the model to use.");
           ⟦2-char-id⟧(⟦2-char-id⟧);
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.getState().selected,
             ⟦2-char-id⟧ = ⟦2-char-id⟧ && (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.keyId) === ⟦2-char-id⟧.id ? ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧.modelId)) : void 0;
-          ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? jJ : ⟦2-char-id⟧(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.id) && void 0 !== ⟦2-char-id⟧ ? XJ : "")
+          ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? gB : ⟦2-char-id⟧(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.id) && void 0 !== ⟦2-char-id⟧ ? lB : "")
         } catch (⟦2-char-id⟧) {
           if (⟦2-char-id⟧.signal.aborted) return;
           ⟦2-char-id⟧(!1);
           const ⟦2-char-id⟧ = ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ ? ⟦2-char-id⟧.problem : "failed";
           if (⟦2-char-id⟧(⟦2-char-id⟧ instanceof ⟦2-char-id⟧ && ⟦2-char-id⟧.detail ? ⟦2-char-id⟧(⟦2-char-id⟧.detail, ⟦2-char-id⟧) : null), "badKey" === ⟦2-char-id⟧ && "" === ⟦2-char-id⟧) return void ⟦2-char-id⟧("This address needs a key.");
-          const ⟦2-char-id⟧ = "badKey" !== ⟦2-char-id⟧ || ⟦2-char-id⟧ ? "" : ` If it isn't from ${AX[ZJ].shortName}, pick the company it's from.`;
-          ⟦2-char-id⟧(`${fX(UJ,ZJ)}${XJ}`)
+          const ⟦2-char-id⟧ = "badKey" !== ⟦2-char-id⟧ || ⟦2-char-id⟧ ? "" : ` If it isn't from ${gl[dB].shortName}, pick the company it's from.`;
+          ⟦2-char-id⟧(`${vl(yB,dB)}${lB}`)
         }
       })()
     },
```

</details>

<details>
<summary>Hunk 211 · Change · +1 / -1</summary>

```diff
@@ -10120,7 +10120,7 @@
         children: "Company"
       }), (0, ⟦2-char-id⟧.jsxs)("select", {
         className: "WorldCodeAiAddKeyInput WorldCodeAiAddKeyCompany",
-        value: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? DJ : "",
+        value: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? LB : "",
         onChange: ⟦2-char-id⟧ => {
           ⟦2-char-id⟧(⟦2-char-id⟧.target.value), ⟦2-char-id⟧(!0), ⟦2-char-id⟧(!1), ⟦2-char-id⟧()
         },
```

</details>

<details>
<summary>Hunk 212 · Change · +1 / -1</summary>

```diff
@@ -10148,7 +10148,7 @@
           ⟦2-char-id⟧(⟦2-char-id⟧.target.value), ⟦2-char-id⟧(!1), ⟦2-char-id⟧()
         },
         onKeyDown: ⟦2-char-id⟧
-      }), (!⟦2-char-id⟧ || ⟦2-char-id⟧ !== (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.baseUrl) && void 0 !== ⟦2-char-id⟧ ? AJ : "")) && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {})]
+      }), (!⟦2-char-id⟧ || ⟦2-char-id⟧ !== (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.baseUrl) && void 0 !== ⟦2-char-id⟧ ? JB : "")) && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {})]
     }), (0, ⟦2-char-id⟧.jsxs)("div", {
       className: "WorldCodeAiAddKeyField",
       children: [⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)("span", {
```

</details>

<details>
<summary>Hunk 213 · Change · +1 / -1</summary>

```diff
@@ -10220,7 +10220,7 @@
         name: ⟦2-char-id⟧.name,
         hint: ⟦2-char-id⟧.tier ? ⟦2-char-id⟧[⟦2-char-id⟧.tier] : "",
         choice: {
-          keyId: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? DJ : "",
+          keyId: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? LB : "",
           modelId: ⟦2-char-id⟧.id
         },
         selected: ⟦2-char-id⟧.id === ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 214 · Change · +1 / -1</summary>

```diff
@@ -10244,7 +10244,7 @@
         className: "WorldCodeAiAddKeyInput WorldCodeAiAddKeyName",
         value: ⟦2-char-id⟧,
         maxLength: 30,
-        placeholder: ⟦2-char-id⟧ && "custom" !== ⟦2-char-id⟧ ? `Like My ${AX[DJ].shortName}` : "Like Home server",
+        placeholder: ⟦2-char-id⟧ && "custom" !== ⟦2-char-id⟧ ? `Like My ${gl[LB].shortName}` : "Like Home server",
         autoComplete: "off",
         onChange: ⟦2-char-id⟧ => {
           ⟦2-char-id⟧(⟦2-char-id⟧.target.value)
```

</details>

<details>
<summary>Hunk 215 · Change · +4 / -4</summary>

```diff
@@ -10270,14 +10270,14 @@
         type: "submit",
         className: "WorldCodeAiPrimaryButton WorldCodeAiAddKeySave",
         disabled: ⟦2-char-id⟧,
-        children: ⟦2-char-id⟧ ? ⟦2-char-id⟧ ? "Testing the connection\u2026" : "Testing your key\u2026" : ⟦2-char-id⟧ ? `Save and use ${aJ.name}` : ⟦2-char-id⟧ ? "Test connection" : "Test key"
+        children: ⟦2-char-id⟧ ? ⟦2-char-id⟧ ? "Testing the connection\u2026" : "Testing your key\u2026" : ⟦2-char-id⟧ ? `Save and use ${jB.name}` : ⟦2-char-id⟧ ? "Test connection" : "Test key"
       })]
     })]
   })
 }
-var ⟦2-char-id⟧ = ⟦2-char-id⟧(1086),
-  ⟦2-char-id⟧ = ⟦2-char-id⟧(35901),
-  ⟦2-char-id⟧ = ⟦2-char-id⟧(35897);
+var ⟦2-char-id⟧ = ⟦2-char-id⟧(1078),
+  ⟦2-char-id⟧ = ⟦2-char-id⟧(35860),
+  ⟦2-char-id⟧ = ⟦2-char-id⟧(35856);
 
 function ⟦2-char-id⟧(⟦2-char-id⟧) {
   let {
```

</details>

<details>
<summary>Hunk 216 · Change · +3 / -3</summary>

```diff
@@ -10288,11 +10288,11 @@
   } = ⟦2-char-id⟧;
   const {
     t: ⟦2-char-id⟧
-  } = (0, ⟦2-char-id⟧.F)();
-  return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+  } = (0, ⟦2-char-id⟧.z)();
+  return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.h, {
     tutorial: "aiHelperOverview",
     step: ⟦2-char-id⟧,
-    text: ⟦2-char-id⟧(`codeEditorAiTutorial:${cJ}`),
+    text: ⟦2-char-id⟧(`codeEditorAiTutorial:${TB}`),
     placement: ⟦2-char-id⟧,
     onPrevious: ⟦2-char-id⟧,
     children: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 217 · Change · +1 / -1</summary>

```diff
@@ -10340,7 +10340,7 @@
 
 function ⟦2-char-id⟧(⟦2-char-id⟧) {
   const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, !0);
-  return ⟦2-char-id⟧.model.name.toLowerCase().startsWith(⟦2-char-id⟧.toLowerCase()) ? ⟦2-char-id⟧.model.name : `${cJ} \xb7 ${JJ.model.name}`
+  return ⟦2-char-id⟧.model.name.toLowerCase().startsWith(⟦2-char-id⟧.toLowerCase()) ? ⟦2-char-id⟧.model.name : `${TB} \xb7 ${BB.model.name}`
 }
 
 function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 218 · Change · +1 / -1</summary>

```diff
@@ -10390,7 +10390,7 @@
     }
   }), [⟦2-char-id⟧]);
   const ⟦2-char-id⟧ = ⟦2-char-id⟧ && null !== ⟦2-char-id⟧,
-    ⟦2-char-id⟧ = ⟦2-char-id⟧ ? "Bot.xd (free) \xb7 once" : ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧) : ⟦2-char-id⟧ ? oX : "Bot.xd (free)";
+    ⟦2-char-id⟧ = ⟦2-char-id⟧ ? "Bot.xd (free) \xb7 once" : ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧) : ⟦2-char-id⟧ ? BJ : "Bot.xd (free)";
   return (0, ⟦2-char-id⟧.jsxs)("div", {
     ref: ⟦2-char-id⟧,
     className: "WorldCodeAiModelChipRow",
```

</details>

<details>
<summary>Hunk 219 · Change · +1 / -1</summary>

```diff
@@ -10402,7 +10402,7 @@
       ref: ⟦2-char-id⟧,
       className: ⟦2-char-id⟧()("WorldCodeAiModelChip", ⟦2-char-id⟧ && "Open"),
       "aria-expanded": ⟦2-char-id⟧,
-      "aria-label": `AI model: ${vJ}`,
+      "aria-label": `AI model: ${mB}`,
       title: "Change AI model",
       onClick: () => {
         ⟦2-char-id⟧(!⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 220 · Change · +1 / -1</summary>

```diff
@@ -10420,7 +10420,7 @@
       placement: "top",
       children: (0, ⟦2-char-id⟧.jsx)("span", {
         className: ⟦2-char-id⟧()("WorldCodeAiEditsTag", !⟦2-char-id⟧ && "WorldCodeAiEditsTag-off"),
-        title: `Allow AI to make edits to my code is ${ZJ?"on":"off"}, in AI settings`,
+        title: `Allow AI to make edits to my code is ${dB?"on":"off"}, in AI settings`,
         children: ⟦2-char-id⟧ ? "Edits on" : "Edits off"
       })
     }), (0, ⟦2-char-id⟧.jsx)("span", {
```

</details>

<details>
<summary>Hunk 221 · Change · +3 / -3</summary>

```diff
@@ -10488,14 +10488,14 @@
       ⟦2-char-id⟧()
     }, ⟦2-char-id⟧.onerror = () => {
       var ⟦2-char-id⟧;
-      ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.error) && void 0 !== ⟦2-char-id⟧ ? cJ : new Error("IndexedDB transaction failed"))
+      ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.error) && void 0 !== ⟦2-char-id⟧ ? TB : new Error("IndexedDB transaction failed"))
     }, ⟦2-char-id⟧.onabort = () => {
       var ⟦2-char-id⟧;
-      ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.error) && void 0 !== ⟦2-char-id⟧ ? cJ : new Error("IndexedDB transaction aborted"))
+      ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.error) && void 0 !== ⟦2-char-id⟧ ? TB : new Error("IndexedDB transaction aborted"))
     }
   }))
 }
-var ⟦2-char-id⟧ = ⟦2-char-id⟧(35923);
+var ⟦2-char-id⟧ = ⟦2-char-id⟧(35876);
 const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.memo)((function(⟦2-char-id⟧) {
   let {
     change: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 222 · Change · +2 / -2</summary>

```diff
@@ -10526,11 +10526,11 @@
         children: ["\u22ef ", ⟦2-char-id⟧.count, " unchanged lines"]
       }, ⟦2-char-id⟧);
       const ⟦2-char-id⟧ = "added" === ⟦2-char-id⟧.kind ? function(⟦2-char-id⟧, ⟦2-char-id⟧) {
-          if (⟦2-char-id⟧) return ⟦2-char-id⟧.includes(`"${cJ}"`) ? `"${cJ}"` : ⟦2-char-id⟧.includes(⟦2-char-id⟧) ? cJ : void 0
+          if (⟦2-char-id⟧) return ⟦2-char-id⟧.includes(`"${TB}"`) ? `"${TB}"` : ⟦2-char-id⟧.includes(⟦2-char-id⟧) ? TB : void 0
         }(⟦2-char-id⟧.text, ⟦2-char-id⟧) : void 0,
         ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.text.indexOf(⟦2-char-id⟧) : -1;
       return (0, ⟦2-char-id⟧.jsxs)("div", {
-        className: ⟦2-char-id⟧()("WorldCodeAiDiffLine", `WorldCodeAiDiff-${JJ.kind}`, ⟦2-char-id⟧ && "WorldCodeAiDiff-marked"),
+        className: ⟦2-char-id⟧()("WorldCodeAiDiffLine", `WorldCodeAiDiff-${BB.kind}`, ⟦2-char-id⟧ && "WorldCodeAiDiff-marked"),
         children: [(0, ⟦2-char-id⟧.jsx)("span", {
           className: "WorldCodeAiDiffMark",
           children: "added" === ⟦2-char-id⟧.kind ? "+" : "removed" === ⟦2-char-id⟧.kind ? "\u2212" : " "
```

</details>

<details>
<summary>Hunk 223 · Change · +6 / -6</summary>

```diff
@@ -10593,22 +10593,22 @@
       } : {}
     }).toLowerCase(),
     ⟦2-char-id⟧ = ⟦2-char-id⟧ => new Date(⟦2-char-id⟧).toDateString();
-  return ⟦2-char-id⟧(⟦2-char-id⟧) === ⟦2-char-id⟧(⟦2-char-id⟧) ? FJ : ⟦2-char-id⟧(⟦2-char-id⟧) === ⟦2-char-id⟧(⟦2-char-id⟧ - 864⟦2-char-id⟧) ? `yesterday ${FJ}` : function(⟦2-char-id⟧, ⟦2-char-id⟧) {
+  return ⟦2-char-id⟧(⟦2-char-id⟧) === ⟦2-char-id⟧(⟦2-char-id⟧) ? VB : ⟦2-char-id⟧(⟦2-char-id⟧) === ⟦2-char-id⟧(⟦2-char-id⟧ - 864⟦2-char-id⟧) ? `yesterday ${VB}` : function(⟦2-char-id⟧, ⟦2-char-id⟧) {
     const ⟦2-char-id⟧ = Math.floor((⟦2-char-id⟧ - ⟦2-char-id⟧) / 6⟦2-char-id⟧);
     if (⟦2-char-id⟧ < 1) return "just now";
-    if (⟦2-char-id⟧ < 60) return `${ZJ} min ago`;
+    if (⟦2-char-id⟧ < 60) return `${dB} min ago`;
     const ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧ / 60);
-    if (⟦2-char-id⟧ < 24) return `${FJ} h ago`;
+    if (⟦2-char-id⟧ < 24) return `${VB} h ago`;
     const ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧ / 24);
-    return 1 === ⟦2-char-id⟧ ? "1 day ago" : `${UJ} days ago`
+    return 1 === ⟦2-char-id⟧ ? "1 day ago" : `${yB} days ago`
   }(⟦2-char-id⟧, ⟦2-char-id⟧)
 }
 
 function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
   return [...new Set([...Object.keys(⟦2-char-id⟧), ...Object.keys(⟦2-char-id⟧.files)])].flatMap((⟦2-char-id⟧ => {
     var ⟦2-char-id⟧, ⟦2-char-id⟧;
-    const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.files[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? FJ : "";
-    return (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? UJ : "") === ⟦2-char-id⟧ ? [] : [{
+    const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.files[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? VB : "";
+    return (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? yB : "") === ⟦2-char-id⟧ ? [] : [{
       path: ⟦2-char-id⟧,
       text: ⟦2-char-id⟧
     }]
```

</details>

<details>
<summary>Hunk 224 · Change · +1 / -1</summary>

```diff
@@ -10620,7 +10620,7 @@
   if (⟦2-char-id⟧.length <= ⟦2-char-id⟧) return null;
   const ⟦2-char-id⟧ = ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧),
     ⟦2-char-id⟧ = ⟦2-char-id⟧.lastIndexOf(" ");
-  return `${(FJ>cJ/2?ZJ.slice(0,FJ):ZJ).replace(/[\s,;:.]+$/,"")}\u2026`
+  return `${(VB>TB/2?dB.slice(0,VB):dB).replace(/[\s,;:.]+$/,"")}\u2026`
 }
 
 function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 225 · Change · +1 / -1</summary>

```diff
@@ -10631,7 +10631,7 @@
     withSeconds: ⟦2-char-id⟧,
     onRestore: ⟦2-char-id⟧
   } = ⟦2-char-id⟧;
-  const [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), ⟦2-char-id⟧ = ⟦2-char-id⟧.did ? `Before: ${cJ.did}` : ⟦2-char-id⟧.label, ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.did && ⟦2-char-id⟧.label.startsWith('Before "') ? ⟦2-char-id⟧.label.slice(7) : null, ⟦2-char-id⟧ = null === ⟦2-char-id⟧ ? null : ⟦2-char-id⟧(⟦2-char-id⟧, 50), ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.startsWith('"') ? `${fJ}"` : ⟦2-char-id⟧, ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null);
+  const [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), ⟦2-char-id⟧ = ⟦2-char-id⟧.did ? `Before: ${TB.did}` : ⟦2-char-id⟧.label, ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.did && ⟦2-char-id⟧.label.startsWith('Before "') ? ⟦2-char-id⟧.label.slice(7) : null, ⟦2-char-id⟧ = null === ⟦2-char-id⟧ ? null : ⟦2-char-id⟧(⟦2-char-id⟧, 50), ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.startsWith('"') ? `${HB}"` : ⟦2-char-id⟧, ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null);
   (0, ⟦2-char-id⟧.useEffect)((() => {
     const ⟦2-char-id⟧ = ⟦2-char-id⟧.current,
       ⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.closest(".WorldCodeAiMessages");
```

</details>

<details>
<summary>Hunk 226 · Change · +2 / -2</summary>

```diff
@@ -10656,8 +10656,8 @@
   }), [⟦2-char-id⟧, ⟦2-char-id⟧]);
   const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useMemo)((() => [...new Set([...Object.keys(⟦2-char-id⟧.files), ...Object.keys(⟦2-char-id⟧)])].flatMap((⟦2-char-id⟧ => {
     var ⟦2-char-id⟧, ⟦2-char-id⟧;
-    const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.files[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? FJ : "",
-      ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? UJ : "";
+    const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.files[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? VB : "",
+      ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? yB : "";
     return ⟦2-char-id⟧ === ⟦2-char-id⟧ ? [] : [{
       path: ⟦2-char-id⟧,
       before: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 227 · Change · +1 / -1</summary>

```diff
@@ -10671,7 +10671,7 @@
       className: "WorldCodeAiSnapshotRow",
       children: [(0, ⟦2-char-id⟧.jsxs)("span", {
         className: "WorldCodeAiSnapshotLabel",
-        children: [⟦2-char-id⟧ || !⟦2-char-id⟧ ? sJ : ⟦2-char-id⟧, (⟦2-char-id⟧ || ⟦2-char-id⟧) && (0, ⟦2-char-id⟧.jsx)("button", {
+        children: [⟦2-char-id⟧ || !⟦2-char-id⟧ ? OB : ⟦2-char-id⟧, (⟦2-char-id⟧ || ⟦2-char-id⟧) && (0, ⟦2-char-id⟧.jsx)("button", {
           className: "WorldCodeAiLinkButton WorldCodeAiSnapshotMore",
           "aria-expanded": ⟦2-char-id⟧,
           onClick: () => {
```

</details>

<details>
<summary>Hunk 228 · Change · +1 / -1</summary>

```diff
@@ -10683,7 +10683,7 @@
           children: [" \xb7 ", ⟦2-char-id⟧(⟦2-char-id⟧.at, ⟦2-char-id⟧, ⟦2-char-id⟧)]
         }), null !== ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)("span", {
           className: "WorldCodeAiSnapshotAsked",
-          children: ["You asked: ", ⟦2-char-id⟧ || !⟦2-char-id⟧ ? GJ : ⟦2-char-id⟧]
+          children: ["You asked: ", ⟦2-char-id⟧ || !⟦2-char-id⟧ ? uB : ⟦2-char-id⟧]
         })]
       }), ⟦2-char-id⟧.length > 0 && (0, ⟦2-char-id⟧.jsx)("button", {
         className: "WorldCodeAiLinkButton",
```

</details>

<details>
<summary>Hunk 229 · Change · +1 / -1</summary>

```diff
@@ -10764,7 +10764,7 @@
   let {
     notes: ⟦2-char-id⟧,
     outline: ⟦2-char-id⟧,
-    XE: ⟦2-char-id⟧,
+    Om: ⟦2-char-id⟧,
     onDelete: ⟦2-char-id⟧
   } = ⟦2-char-id⟧;
   const [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(""), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), ⟦2-char-id⟧ = ⟦2-char-id⟧.length >= 8, ⟦2-char-id⟧ = ⟦2-char-id⟧.callbacks.length + ⟦2-char-id⟧.commands.length + ⟦2-char-id⟧.functions.length > 0;
```

</details>

<details>
<summary>Hunk 230 · Change · +1 / -1</summary>

```diff
@@ -10788,7 +10788,7 @@
           children: ⟦2-char-id⟧
         }), (0, ⟦2-char-id⟧.jsx)("button", {
           className: "WorldCodeAiLinkButton",
-          "aria-label": `Delete note: ${JJ}`,
+          "aria-label": `Delete note: ${BB}`,
           onClick: () => {
             ⟦2-char-id⟧(⟦2-char-id⟧)
           },
```

</details>

<details>
<summary>Hunk 231 · Change · +4 / -4</summary>

```diff
@@ -10927,17 +10927,17 @@
           className: "WorldCodeAiPlanAsked",
           children: " (apply it to tick it off)"
         })]
-      }, `${cJ}:${JJ}`)))
+      }, `${TB}:${BB}`)))
     }), ⟦2-char-id⟧ < ⟦2-char-id⟧.length && ⟦2-char-id⟧ < ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)("span", {
       className: "WorldCodeAiHint",
-      children: ["Apply ", ⟦2-char-id⟧ - ⟦2-char-id⟧ > 1 ? `steps ${FJ+1} to ${ZJ}` : `step ${ZJ}`, " to your code and try it, then build step ", ⟦2-char-id⟧ + 1, "."]
+      children: ["Apply ", ⟦2-char-id⟧ - ⟦2-char-id⟧ > 1 ? `steps ${VB+1} to ${dB}` : `step ${dB}`, " to your code and try it, then build step ", ⟦2-char-id⟧ + 1, "."]
     }), ⟦2-char-id⟧ < ⟦2-char-id⟧.length && ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("button", {
-      ...⟦2-char-id⟧.d,
+      ...⟦2-char-id⟧.f,
       className: ⟦2-char-id⟧ < ⟦2-char-id⟧ ? "WorldCodeAiLinkButton" : "WorldCodeAiPrimaryButton",
       onClick: () => {
         ⟦2-char-id⟧(⟦2-char-id⟧)
       },
-      children: ⟦2-char-id⟧ < ⟦2-char-id⟧ ? `Build step ${ZJ+1} anyway` : `Build step ${ZJ+1}`
+      children: ⟦2-char-id⟧ < ⟦2-char-id⟧ ? `Build step ${dB+1} anyway` : `Build step ${dB+1}`
     }), ⟦2-char-id⟧ < ⟦2-char-id⟧.length && ⟦2-char-id⟧ > 0 && ⟦2-char-id⟧ >= ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("span", {
       className: "WorldCodeAiHint",
       children: "Try each step in your world before the next."
```

</details>

<details>
<summary>Hunk 232 · Change · +1 / -1</summary>

```diff
@@ -10949,7 +10949,7 @@
 }
 
 function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-  return `${JJ}\n\nYou asked me: "${cJ}" ${null===ZJ?"I don't mind: choose what works best.":`⟦2-char-id⟧ answer: ${⟦2-char-id⟧.replace(/\.$/,"")}.`} Build it now, without asking again.`
+  return `${BB}\n\nYou asked me: "${TB}" ${null===dB?"I don't mind: choose what works best.":`⟦2-char-id⟧ answer: ${⟦2-char-id⟧.replace(/\.$/,"")}.`} Build it now, without asking again.`
 }
 
 function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 233 · Change · +2 / -2</summary>

```diff
@@ -10968,8 +10968,8 @@
       children: [(0, ⟦2-char-id⟧.jsx)("div", {
         className: "WorldCodeAiQuestionChoices",
         children: ⟦2-char-id⟧.choices.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => (0, ⟦2-char-id⟧.createElement)("button", {
-          ...⟦2-char-id⟧.d,
-          key: `${cJ}:${JJ}`,
+          ...⟦2-char-id⟧.f,
+          key: `${TB}:${BB}`,
           className: "WorldCodeAiQuestionChoice",
           onClick: () => {
             ⟦2-char-id⟧(⟦2-char-id⟧, !1)
```

</details>

<details>
<summary>Hunk 234 · Change · +1 / -1</summary>

```diff
@@ -11002,7 +11002,7 @@
           children: "Send"
         })]
       }), (0, ⟦2-char-id⟧.jsx)("button", {
-        ...⟦2-char-id⟧.d,
+        ...⟦2-char-id⟧.f,
         className: "WorldCodeAiSecondaryButton WorldCodeAiQuestionAiPicks",
         onClick: () => {
           ⟦2-char-id⟧(null, !1)
```

</details>

<details>
<summary>Hunk 235 · Change · +4 / -4</summary>

```diff
@@ -11175,13 +11175,13 @@
       ⟦2-char-id⟧ = "," === (null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.text) ? ⟦2-char-id⟧[⟦2-char-id⟧ + 1] : ⟦2-char-id⟧.slice(⟦2-char-id⟧ + 2, ⟦2-char-id⟧).find((⟦2-char-id⟧ => "comment" === ⟦2-char-id⟧.type && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.start >= ⟦2-char-id⟧.end)),
       ⟦2-char-id⟧ = "comment" !== (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.type) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.slice(⟦2-char-id⟧.end, ⟦2-char-id⟧.start).includes("\n") ? void 0 : ⟦2-char-id⟧.text,
       ⟦2-char-id⟧ = 1 === ⟦2-char-id⟧.length ? ⟦2-char-id⟧[0] : void 0,
-      ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? vJ : ⟦2-char-id⟧;
+      ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? mB : ⟦2-char-id⟧;
     ⟦2-char-id⟧ = void 0;
     const ⟦2-char-id⟧ = {
       key: ⟦2-char-id⟧,
-      raw: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.text) && void 0 !== ⟦2-char-id⟧ ? qJ : "",
-      start: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.start) && void 0 !== ⟦2-char-id⟧ ? jJ : 0,
-      end: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.end) && void 0 !== ⟦2-char-id⟧ ? YJ : 0,
+      raw: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.text) && void 0 !== ⟦2-char-id⟧ ? YB : "",
+      start: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.start) && void 0 !== ⟦2-char-id⟧ ? gB : 0,
+      end: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.end) && void 0 !== ⟦2-char-id⟧ ? oB : 0,
       ...⟦2-char-id⟧ ? {
         comment: ⟦2-char-id⟧
       } : {}
```

</details>

<details>
<summary>Hunk 236 · Change · +1 / -1</summary>

```diff
@@ -11224,7 +11224,7 @@
     if ("string" !== typeof ⟦2-char-id⟧) return null;
     const ⟦2-char-id⟧ = ⟦2-char-id⟧.raw.startsWith("'") ? "'" : '"',
       ⟦2-char-id⟧ = "'" === ⟦2-char-id⟧ ? '"' : "'";
-    ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = `${XJ=ZJ.includes(JJ)&&!ZJ.includes(FJ)?FJ:JJ}${eJ.slice(0,200).replace(/\\/g,"\\\\").replace('"'===XJ?/"/g:/'/g,`\\${⟦2-char-id⟧}`).replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/[\u0000-\u001f\u007f]/g,(JJ=>`\\⟦2-char-id⟧{⟦2-char-id⟧.charCodeAt(0).toString(16).padStart(4,"0")}`))}${XJ}`
+    ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = `${lB=dB.includes(BB)&&!dB.includes(VB)?VB:BB}${pB.slice(0,200).replace(/\\/g,"\\\\").replace('"'===lB?/"/g:/'/g,`\\${⟦2-char-id⟧}`).replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/[\u0000-\u001f\u007f]/g,(BB=>`\\⟦2-char-id⟧{⟦2-char-id⟧.charCodeAt(0).toString(16).padStart(4,"0")}`))}${lB}`
   }
   var ⟦2-char-id⟧, ⟦2-char-id⟧;
   return ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧.start) + ⟦2-char-id⟧ + ⟦2-char-id⟧.slice(⟦2-char-id⟧.end)
```

</details>

<details>
<summary>Hunk 237 · Change · +1 / -1</summary>

```diff
@@ -11233,7 +11233,7 @@
 function ⟦2-char-id⟧(⟦2-char-id⟧) {
   if (!Number.isInteger(⟦2-char-id⟧)) {
     var ⟦2-char-id⟧;
-    const ⟦2-char-id⟧ = Math.min(3, (null !== (⟦2-char-id⟧ = String(⟦2-char-id⟧).split(".")[1]) && void 0 !== ⟦2-char-id⟧ ? cJ : "").length);
+    const ⟦2-char-id⟧ = Math.min(3, (null !== (⟦2-char-id⟧ = String(⟦2-char-id⟧).split(".")[1]) && void 0 !== ⟦2-char-id⟧ ? TB : "").length);
     return 10 ** -Math.max(1, ⟦2-char-id⟧)
   }
   const ⟦2-char-id⟧ = Math.abs(⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 238 · Change · +5 / -5</summary>

```diff
@@ -11248,16 +11248,16 @@
 }
 
 function ⟦2-char-id⟧(⟦2-char-id⟧) {
-  return "boolean" === typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧ ? "on" : "off" : "number" === typeof ⟦2-char-id⟧ ? String(⟦2-char-id⟧) : ⟦2-char-id⟧.length > 20 ? `\u201c${JJ.slice(0,19)}\u2026\u201d` : `\u201c${JJ}\u201d`
+  return "boolean" === typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧ ? "on" : "off" : "number" === typeof ⟦2-char-id⟧ ? String(⟦2-char-id⟧) : ⟦2-char-id⟧.length > 20 ? `\u201c${BB.slice(0,19)}\u2026\u201d` : `\u201c${BB}\u201d`
 }
 
 function ⟦2-char-id⟧(⟦2-char-id⟧) {
   let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "changing";
-  if (0 === ⟦2-char-id⟧.length) return `Before ${cJ} settings`;
+  if (0 === ⟦2-char-id⟧.length) return `Before ${TB} settings`;
   const ⟦2-char-id⟧ = 3 === ⟦2-char-id⟧.length ? 3 : 2,
-    ⟦2-char-id⟧ = ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧).map((⟦2-char-id⟧ => `${JJ.name} ${JJ.from} \u2192 ${JJ.to}`)),
-    ⟦2-char-id⟧ = ⟦2-char-id⟧.length > ⟦2-char-id⟧ ? ` and ${JJ.length-ZJ} more` : "";
-  return `Before ${cJ} settings: ${FJ.join(", ")}${UJ}`
+    ⟦2-char-id⟧ = ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧).map((⟦2-char-id⟧ => `${BB.name} ${BB.from} \u2192 ${BB.to}`)),
+    ⟦2-char-id⟧ = ⟦2-char-id⟧.length > ⟦2-char-id⟧ ? ` and ${BB.length-dB} more` : "";
+  return `Before ${TB} settings: ${VB.join(", ")}${yB}`
 }
 const ⟦2-char-id⟧ = /^(?:(?:async\s+)?function\s*\*?\s*([A-Za-z_$][\w$]*)|(?:const|let|var)\s+([A-Za-z_$][\w$]*)|([A-Za-z_$][\w$]*)\s*=(?!=))/gm;
 
```

</details>

<details>
<summary>Hunk 239 · Change · +3 / -3</summary>

```diff
@@ -11265,15 +11265,15 @@
   const ⟦2-char-id⟧ = new Set;
   for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.matchAll(⟦2-char-id⟧)) {
     var ⟦2-char-id⟧, ⟦2-char-id⟧;
-    ⟦2-char-id⟧.add(null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[1]) && void 0 !== ⟦2-char-id⟧ ? FJ : ⟦2-char-id⟧[2]) && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧[3])
+    ⟦2-char-id⟧.add(null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[1]) && void 0 !== ⟦2-char-id⟧ ? VB : ⟦2-char-id⟧[2]) && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧[3])
   }
   return ⟦2-char-id⟧
 }
 const ⟦2-char-id⟧ = {
-    Hh: ["second", "minute", "timer", "time", "every", "countdown", "wave", "always", "clock"],
+    dL: ["second", "minute", "timer", "time", "every", "countdown", "wave", "always", "clock"],
     playerCommand: ["command", "/"],
     onPlayerJoin: ["join", "start", "welcome", "spawn", "enter", "arrive"],
-    onPlayerLeave: ["cn", "left", "goodbye", "bye", "quit"],
+    onPlayerLeave: ["lD", "left", "goodbye", "bye", "quit"],
     onPlayerChat: ["chat", "message", "say", "type"],
     onPlayerJump: ["jump"],
     onPlayerClick: ["click", "tap"],
```

</details>

<details>
<summary>Hunk 240 · Change · +1 / -1</summary>

```diff
@@ -11288,7 +11288,7 @@
     onPlayerChangeBlock: ["block", "build", "break", "place", "mine"],
     onPlayerAttemptChangeBlock: ["block", "build", "break", "place", "mine", "protect"],
     onPlayerCraft: ["craft"],
-    onPlayerPickedUpItem: ["PD", "collect"],
+    onPlayerPickedUpItem: ["dO", "collect"],
     onPlayerDropItem: ["drop"],
     CONFIG: ["setting", "config", "number", "value"]
   },
```

</details>

<details>
<summary>Hunk 241 · Change · +1 / -1</summary>

```diff
@@ -11312,7 +11312,7 @@
   }))
 }
 const ⟦2-char-id⟧ = {
-    Hh: "Runs all the time",
+    dL: "Runs all the time",
     playerCommand: "Chat commands like /help",
     onPlayerJoin: "When a player joins",
     onPlayerLeave: "When a player leaves",
```

</details>

<details>
<summary>Hunk 242 · Change · +1 / -1</summary>

```diff
@@ -11387,7 +11387,7 @@
       var ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.slice(⟦2-char-id⟧, ⟦2-char-id⟧).find((⟦2-char-id⟧ => ⟦2-char-id⟧.test(⟦2-char-id⟧)));
       ⟦2-char-id⟧.push({
-        name: void 0 === ⟦2-char-id⟧ ? null : null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? UJ : null,
+        name: void 0 === ⟦2-char-id⟧ ? null : null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? yB : null,
         lines: ⟦2-char-id⟧.slice(⟦2-char-id⟧, ⟦2-char-id⟧)
       }), ⟦2-char-id⟧ = ⟦2-char-id⟧
     }
```

</details>

<details>
<summary>Hunk 243 · Change · +1 / -1</summary>

```diff
@@ -11439,7 +11439,7 @@
       added: [...⟦2-char-id⟧.added, ...⟦2-char-id⟧.added]
     } : ⟦2-char-id⟧.push(⟦2-char-id⟧)
   }
-  return ⟦2-char-id⟧.every((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧.removed) && ⟦2-char-id⟧(⟦2-char-id⟧.added))) ? AJ : [⟦2-char-id⟧]
+  return ⟦2-char-id⟧.every((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧.removed) && ⟦2-char-id⟧(⟦2-char-id⟧.added))) ? JB : [⟦2-char-id⟧]
 }
 
 function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 244 · Change · +1 / -1</summary>

```diff
@@ -11491,7 +11491,7 @@
 function ⟦2-char-id⟧(⟦2-char-id⟧) {
   var ⟦2-char-id⟧, ⟦2-char-id⟧;
   const ⟦2-char-id⟧ = /^\s*(?:export\s+)?(?:async\s+)?function\s*\*?\s*(\w+)|^\s*(?:export\s+)?(?:const|let|var|class)\s+(\w+)|^(\w+)\s*=(?!=)/.exec(⟦2-char-id⟧);
-  return ⟦2-char-id⟧ ? null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[1]) && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧[2]) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧[3] : void 0
+  return ⟦2-char-id⟧ ? null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[1]) && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧[2]) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧[3] : void 0
 }
 
 function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 245 · Change · +1 / -1</summary>

```diff
@@ -11519,7 +11519,7 @@
 
 function ⟦2-char-id⟧(⟦2-char-id⟧) {
   var ⟦2-char-id⟧;
-  return ⟦2-char-id⟧.length <= 1 ? null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[0]) && void 0 !== ⟦2-char-id⟧ ? cJ : "" : `${JJ.slice(0,-1).join(", ")} and ${JJ[JJ.length-1]}`
+  return ⟦2-char-id⟧.length <= 1 ? null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[0]) && void 0 !== ⟦2-char-id⟧ ? TB : "" : `${BB.slice(0,-1).join(", ")} and ${BB[BB.length-1]}`
 }
 
 function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 246 · Change · +2 / -2</summary>

```diff
@@ -11534,13 +11534,13 @@
 function ⟦2-char-id⟧(⟦2-char-id⟧) {
   return [...new Set(⟦2-char-id⟧.flatMap((⟦2-char-id⟧ => {
     const ⟦2-char-id⟧ = ⟦2-char-id⟧.replace(/(["'`])(?:\\.|(?!\1).)*\1/g, "");
-    return (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧, /[A-Za-z_$][\w$]{2,}(?!\s*:(?!:))/g, ⟦2-char-id⟧.m).map((⟦2-char-id⟧ => ⟦2-char-id⟧[0])).filter((⟦2-char-id⟧ => !⟦2-char-id⟧.has(⟦2-char-id⟧)))
+    return (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧, /[A-Za-z_$][\w$]{2,}(?!\s*:(?!:))/g, ⟦2-char-id⟧.l).map((⟦2-char-id⟧ => ⟦2-char-id⟧[0])).filter((⟦2-char-id⟧ => !⟦2-char-id⟧.has(⟦2-char-id⟧)))
   })))]
 }
 
 function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
   var ⟦2-char-id⟧;
-  const ⟦2-char-id⟧ = (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.parts) && void 0 !== ⟦2-char-id⟧ ? ZJ : []).map((⟦2-char-id⟧ => {
+  const ⟦2-char-id⟧ = (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.parts) && void 0 !== ⟦2-char-id⟧ ? dB : []).map((⟦2-char-id⟧ => {
       return {
         why: ⟦2-char-id⟧.why,
         lines: (⟦2-char-id⟧ = ⟦2-char-id⟧.code, new Set(⟦2-char-id⟧.split("\n").map((⟦2-char-id⟧ => ⟦2-char-id⟧.trim())).filter((⟦2-char-id⟧ => ⟦2-char-id⟧.length > 1))))
```

</details>

<details>
<summary>Hunk 247 · Change · +2 / -2</summary>

```diff
@@ -11588,11 +11588,11 @@
             ⟦2-char-id⟧ = new Set([...⟦2-char-id⟧.added, ...⟦2-char-id⟧.removed].flatMap((⟦2-char-id⟧ => {
               var ⟦2-char-id⟧;
               const ⟦2-char-id⟧ = /^\s*(?:export\s+)?(?:async\s+)?function\s*\*?\s*(\w+)|^(\w+)\s*=\s*(?:async\s+)?(?:function\b|\([^)]*\)\s*=>|\w+\s*=>)/.exec(⟦2-char-id⟧);
-              return ⟦2-char-id⟧ ? [null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[1]) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧[2]] : []
+              return ⟦2-char-id⟧ ? [null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[1]) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧[2]] : []
             }))),
             ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
               const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
-              return ⟦2-char-id⟧.has(⟦2-char-id⟧) ? `"${cJ}"` : ⟦2-char-id⟧
+              return ⟦2-char-id⟧.has(⟦2-char-id⟧) ? `"${TB}"` : ⟦2-char-id⟧
             },
             ⟦2-char-id⟧ = [...⟦2-char-id⟧, ...⟦2-char-id⟧, ...⟦2-char-id⟧];
           if (⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧.has(⟦2-char-id⟧)))) {
```

</details>

<details>
<summary>Hunk 248 · Change · +2 / -2</summary>

```diff
@@ -11600,10 +11600,10 @@
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧.filter((⟦2-char-id⟧ => ⟦2-char-id⟧.has(⟦2-char-id⟧)));
                 return ⟦2-char-id⟧(⟦2-char-id⟧.length > 0 ? ⟦2-char-id⟧.map((⟦2-char-id⟧ => {
                   var ⟦2-char-id⟧;
-                  return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧
+                  return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧
                 })) : ⟦2-char-id⟧.map(⟦2-char-id⟧))
               },
-              ⟦2-char-id⟧ = [⟦2-char-id⟧.length > 0 ? `${JJ(eJ)} \u2014 changed` : "", ⟦2-char-id⟧.length > 0 ? `${JJ(XJ)} \u2014 added` : "", ⟦2-char-id⟧.length > 0 ? `${JJ(AJ)} \u2014 taken out` : ""].filter(Boolean),
+              ⟦2-char-id⟧ = [⟦2-char-id⟧.length > 0 ? `${BB(pB)} \u2014 changed` : "", ⟦2-char-id⟧.length > 0 ? `${BB(lB)} \u2014 added` : "", ⟦2-char-id⟧.length > 0 ? `${BB(JB)} \u2014 taken out` : ""].filter(Boolean),
               ⟦2-char-id⟧ = [...⟦2-char-id⟧.filter((⟦2-char-id⟧ => ⟦2-char-id⟧.has(⟦2-char-id⟧))), ...⟦2-char-id⟧.filter((⟦2-char-id⟧ => !⟦2-char-id⟧.has(⟦2-char-id⟧)))],
               ⟦2-char-id⟧ = ⟦2-char-id⟧.every((⟦2-char-id⟧ => ⟦2-char-id⟧.includes(⟦2-char-id⟧)));
             return {
```

</details>

<details>
<summary>Hunk 249 · Change · +1 / -1</summary>

```diff
@@ -11614,7 +11614,7 @@
               about: ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
             }
           }
-          const ⟦2-char-id⟧ = [⟦2-char-id⟧.length > 0 ? `changes ${aj(eJ.map(DJ))}` : "", ⟦2-char-id⟧.length > 0 ? `adds ${aj(XJ.map(DJ))}` : "", ⟦2-char-id⟧.length > 0 ? `takes out ${aj(AJ.map(DJ))}` : ""].filter(Boolean);
+          const ⟦2-char-id⟧ = [⟦2-char-id⟧.length > 0 ? `changes ${bg(pB.map(LB))}` : "", ⟦2-char-id⟧.length > 0 ? `adds ${bg(lB.map(LB))}` : "", ⟦2-char-id⟧.length > 0 ? `takes out ${bg(JB.map(LB))}` : ""].filter(Boolean);
           if (⟦2-char-id⟧.length > 0) return {
             named: ⟦2-char-id⟧(⟦2-char-id⟧.join(", ")),
             codeNames: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 250 · Change · +2 / -2</summary>

```diff
@@ -11630,13 +11630,13 @@
             if (⟦2-char-id⟧) {
               const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
               return ⟦2-char-id⟧ ? (⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧), {
-                named: `${ZJ} \u2014 changed`,
+                named: `${dB} \u2014 changed`,
                 codeNames: [⟦2-char-id⟧],
                 takesOut: [],
                 isPlain: !0,
                 about: ⟦2-char-id⟧([⟦2-char-id⟧], !1)
               }) : {
-                named: `Changes ${/\bfunction\b|=>/.test(JJ)?`"${Bj(cJ)}"`:Bj(cJ)}`,
+                named: `Changes ${/\bfunction\b|=>/.test(BB)?`"${ng(TB)}"`:ng(TB)}`,
                 codeNames: [⟦2-char-id⟧],
                 takesOut: [],
                 isPlain: !1,
```

</details>

<details>
<summary>Hunk 251 · Change · +1 / -1</summary>

```diff
@@ -11645,7 +11645,7 @@
             }
           }
           return {
-            named: 0 === ⟦2-char-id⟧.added.length ? `Takes out lines from line ${ZJ}` : `Changes line ${ZJ}`,
+            named: 0 === ⟦2-char-id⟧.added.length ? `Takes out lines from line ${dB}` : `Changes line ${dB}`,
             codeNames: [],
             takesOut: [],
             isPlain: !1,
```

</details>

<details>
<summary>Hunk 252 · Change · +4 / -4</summary>

```diff
@@ -11670,22 +11670,22 @@
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) || void 0 !== ⟦2-char-id⟧.why && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧.why)))),
         ⟦2-char-id⟧ = new Set(⟦2-char-id⟧.flatMap(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
           var ⟦2-char-id⟧;
-          return ⟦2-char-id⟧[⟦2-char-id⟧] && null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.uses) && void 0 !== ⟦2-char-id⟧ ? ZJ : []
+          return ⟦2-char-id⟧[⟦2-char-id⟧] && null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.uses) && void 0 !== ⟦2-char-id⟧ ? dB : []
         }))),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
           var ⟦2-char-id⟧;
-          return ⟦2-char-id⟧[⟦2-char-id⟧] || (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.uses) && void 0 !== ⟦2-char-id⟧ ? ZJ : []).some((⟦2-char-id⟧ => ⟦2-char-id⟧.has(⟦2-char-id⟧)))
+          return ⟦2-char-id⟧[⟦2-char-id⟧] || (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.uses) && void 0 !== ⟦2-char-id⟧ ? dB : []).some((⟦2-char-id⟧ => ⟦2-char-id⟧.has(⟦2-char-id⟧)))
         }));
       if (!⟦2-char-id⟧.includes(!0)) return ⟦2-char-id⟧.map((() => {}));
       const ⟦2-char-id⟧ = new Set(⟦2-char-id⟧.flatMap((⟦2-char-id⟧ => ⟦2-char-id⟧.names)));
       return ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
         if (0 === ⟦2-char-id⟧.names.length) {
           var ⟦2-char-id⟧, ⟦2-char-id⟧;
-          const ⟦2-char-id⟧ = (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.takesOut) && void 0 !== ⟦2-char-id⟧ ? AJ : []).filter((⟦2-char-id⟧ => ("CONFIG" === ⟦2-char-id⟧ || Object.hasOwn(⟦2-char-id⟧, ⟦2-char-id⟧)) && !⟦2-char-id⟧.has(⟦2-char-id⟧)));
+          const ⟦2-char-id⟧ = (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.takesOut) && void 0 !== ⟦2-char-id⟧ ? JB : []).filter((⟦2-char-id⟧ => ("CONFIG" === ⟦2-char-id⟧ || Object.hasOwn(⟦2-char-id⟧, ⟦2-char-id⟧)) && !⟦2-char-id⟧.has(⟦2-char-id⟧)));
           return 0 === ⟦2-char-id⟧.length || ⟦2-char-id⟧({
             ...⟦2-char-id⟧,
             names: ⟦2-char-id⟧
-          }, ⟦2-char-id⟧, ⟦2-char-id⟧) || void 0 !== ⟦2-char-id⟧.why && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧.why)) || (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.removedUses) && void 0 !== ⟦2-char-id⟧ ? qJ : []).some((⟦2-char-id⟧ => ⟦2-char-id⟧.has(⟦2-char-id⟧))) ? void 0 : "takesOut"
+          }, ⟦2-char-id⟧, ⟦2-char-id⟧) || void 0 !== ⟦2-char-id⟧.why && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧.why)) || (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.removedUses) && void 0 !== ⟦2-char-id⟧ ? YB : []).some((⟦2-char-id⟧ => ⟦2-char-id⟧.has(⟦2-char-id⟧))) ? void 0 : "takesOut"
         }
         if (!⟦2-char-id⟧[⟦2-char-id⟧]) return ⟦2-char-id⟧.onlyAdds ? "adds" : "changes"
       }))
```

</details>

<details>
<summary>Hunk 253 · Change · +1 / -1</summary>

```diff
@@ -11704,7 +11704,7 @@
         ...⟦2-char-id⟧
       } = ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = void 0 !== ⟦2-char-id⟧.why && 1 === ⟦2-char-id⟧.filter((⟦2-char-id⟧ => ⟦2-char-id⟧.why === ⟦2-char-id⟧.why)).length && ⟦2-char-id⟧.why ? ⟦2-char-id⟧.why.charAt(0).toUpperCase() + ⟦2-char-id⟧.why.slice(1) : void 0,
-        ⟦2-char-id⟧ = !⟦2-char-id⟧ && ⟦2-char-id⟧ ? jJ : ⟦2-char-id⟧,
+        ⟦2-char-id⟧ = !⟦2-char-id⟧ && ⟦2-char-id⟧ ? gB : ⟦2-char-id⟧,
         ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
         ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.replace(/ \u2014 (added|changed|taken out)$/, "") : ⟦2-char-id⟧;
       return {
```

</details>

<details>
<summary>Hunk 254 · Change · +1 / -1</summary>

```diff
@@ -11721,7 +11721,7 @@
     })),
     ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
-      return `${null!==(cJ=JJ.also)&&void 0!==cJ?cJ:""}|${JJ.label}|${null!==(ZJ=JJ.detail)&&void 0!==ZJ?ZJ:""}`
+      return `${null!==(TB=BB.also)&&void 0!==TB?TB:""}|${BB.label}|${null!==(dB=BB.detail)&&void 0!==dB?dB:""}`
     };
   return ⟦2-char-id⟧.map((⟦2-char-id⟧ => {
     let {
```

</details>

<details>
<summary>Hunk 255 · Change · +1 / -1</summary>

```diff
@@ -11730,7 +11730,7 @@
     } = ⟦2-char-id⟧;
     return ⟦2-char-id⟧.filter((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧) === ⟦2-char-id⟧(⟦2-char-id⟧))).length > 1 ? {
       ...⟦2-char-id⟧,
-      label: `${ZJ.label} (line ${cJ})`
+      label: `${dB.label} (line ${TB})`
     } : ⟦2-char-id⟧
   }))
 }
```

</details>

<details>
<summary>Hunk 256 · Change · +3 / -3</summary>

```diff
@@ -11752,20 +11752,20 @@
 const ⟦2-char-id⟧ = /```[\s\S]*?(?:```|$)|`[^`\n]*`|"[^"\n]*"|\u201c[^\u201d\n]*\u201d|['\u2018][^'\u2019\n]*['\u2019](?![\w])/g;
 
 function ⟦2-char-id⟧(⟦2-char-id⟧) {
-  return !/^['\u2018]/.test(⟦2-char-id⟧[0]) || !(0, ⟦2-char-id⟧.d)(⟦2-char-id⟧, "\\w\u2019'")
+  return !/^['\u2018]/.test(⟦2-char-id⟧[0]) || !(0, ⟦2-char-id⟧.b)(⟦2-char-id⟧, "\\w\u2019'")
 }
 const ⟦2-char-id⟧ = /\b(?:last time|before|earlier|previous(?:ly)?|already|in my last|a mistake|an error|wrong)\b/i;
 
 function ⟦2-char-id⟧(⟦2-char-id⟧) {
   const ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
-      return (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧).map((⟦2-char-id⟧ => [⟦2-char-id⟧.index, ⟦2-char-id⟧.index + ⟦2-char-id⟧[0].length]))
+      return (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧).map((⟦2-char-id⟧ => [⟦2-char-id⟧.index, ⟦2-char-id⟧.index + ⟦2-char-id⟧[0].length]))
     }(⟦2-char-id⟧),
     ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧.some((⟦2-char-id⟧ => {
       let [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
       return ⟦2-char-id⟧ >= ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧
     })),
     ⟦2-char-id⟧ = [];
-  for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.matchAll(new RegExp(`(^|[.!?]\\s+|\\n\\s*)I(?:'ve|\u2019ve| have)?( also)? (${ZY})\\b`, "g"))) {
+  for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.matchAll(new RegExp(`(^|[.!?]\\s+|\\n\\s*)I(?:'ve|\u2019ve| have)?( also)? (${po})\\b`, "g"))) {
     const ⟦2-char-id⟧ = ⟦2-char-id⟧.index + ⟦2-char-id⟧[1].length,
       ⟦2-char-id⟧ = ⟦2-char-id⟧.index + ⟦2-char-id⟧[0].length,
       ⟦2-char-id⟧ = ⟦2-char-id⟧.slice(⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 257 · Change · +3 / -3</summary>

```diff
@@ -11775,12 +11775,12 @@
       ⟦2-char-id⟧.push({
         at: ⟦2-char-id⟧,
         length: ⟦2-char-id⟧ - ⟦2-char-id⟧,
-        words: `${eJ[2]?"It also":"This"} ${cY[eJ[3]]}`
+        words: `${pB[2]?"It also":"This"} ${yo[pB[3]]}`
       });
-      for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.matchAll(new RegExp(`\\b(and|then|also) (${ZY})\\b(?!\\s+(?:of|by|from|with|when|if|in|on|at|to|for|so|as|after|before|into)\\b)`, "g"))) ⟦2-char-id⟧(⟦2-char-id⟧ + ⟦2-char-id⟧.index) || ⟦2-char-id⟧.push({
+      for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.matchAll(new RegExp(`\\b(and|then|also) (${po})\\b(?!\\s+(?:of|by|from|with|when|if|in|on|at|to|for|so|as|after|before|into)\\b)`, "g"))) ⟦2-char-id⟧(⟦2-char-id⟧ + ⟦2-char-id⟧.index) || ⟦2-char-id⟧.push({
         at: ⟦2-char-id⟧ + ⟦2-char-id⟧.index,
         length: ⟦2-char-id⟧[0].length,
-        words: `${JJ[1]} ${cY[JJ[2]]}`
+        words: `${BB[1]} ${yo[BB[2]]}`
       })
     }
   }
```

</details>

<details>
<summary>Hunk 258 · Change · +1 / -1</summary>

```diff
@@ -11793,7 +11793,7 @@
     ⟦2-char-id⟧.has(⟦2-char-id⟧[1]) || ⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧.index) || ⟦2-char-id⟧.test(⟦2-char-id⟧) || ⟦2-char-id⟧ || ⟦2-char-id⟧.push({
       at: ⟦2-char-id⟧.index,
       length: ⟦2-char-id⟧[0].length,
-      words: `will ${UJ=eJ[1],"has"===UJ?"have":UJ.endsWith("ies")?`${⟦2-char-id⟧.slice(0,-3)}y`:/(?:ch|sh|x|zz|o|ss)es$/.test(UJ)?UJ.slice(0,-2):UJ.slice(0,-1)}`
+      words: `will ${yB=pB[1],"has"===yB?"have":yB.endsWith("ies")?`${⟦2-char-id⟧.slice(0,-3)}y`:/(?:ch|sh|x|zz|o|ss)es$/.test(yB)?yB.slice(0,-2):yB.slice(0,-1)}`
     })
   }
   var ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 259 · Change · +1 / -1</summary>

```diff
@@ -11827,7 +11827,7 @@
         if ("" === ⟦2-char-id⟧.trim() || !Number.isFinite(⟦2-char-id⟧)) return ⟦2-char-id⟧("That needs to be a number."), void ⟦2-char-id⟧(null);
         ⟦2-char-id⟧(⟦2-char-id⟧)
       } else ⟦2-char-id⟧(⟦2-char-id⟧)
-  }, ⟦2-char-id⟧ = `WorldCodeAiSetting-${cJ}-${ZJ.key}`;
+  }, ⟦2-char-id⟧ = `WorldCodeAiSetting-${TB}-${dB.key}`;
   return (0, ⟦2-char-id⟧.jsxs)("li", {
     ref: ⟦2-char-id⟧,
     className: "WorldCodeAiSetting",
```

</details>

<details>
<summary>Hunk 260 · Change · +1 / -1</summary>

```diff
@@ -11855,7 +11855,7 @@
       className: "WorldCodeAiSettingControl",
       children: ["number" === ⟦2-char-id⟧.kind && (0, ⟦2-char-id⟧.jsx)("button", {
         className: "WorldCodeAiSecondaryButton WorldCodeAiStepper",
-        "aria-label": `Less ${hJ}`,
+        "aria-label": `Less ${kB}`,
         disabled: !⟦2-char-id⟧,
         onClick: () => {
           ⟦2-char-id⟧(⟦2-char-id⟧.value - ⟦2-char-id⟧(⟦2-char-id⟧.value))
```

</details>

<details>
<summary>Hunk 261 · Change · +1 / -1</summary>

```diff
@@ -11867,7 +11867,7 @@
         type: "number" === ⟦2-char-id⟧.kind ? "number" : "text",
         inputMode: "number" === ⟦2-char-id⟧.kind ? "decimal" : void 0,
         maxLength: "string" === ⟦2-char-id⟧.kind ? 200 : void 0,
-        value: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? AJ : String(⟦2-char-id⟧.value),
+        value: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? JB : String(⟦2-char-id⟧.value),
         disabled: !⟦2-char-id⟧,
         onChange: ⟦2-char-id⟧ => {
           ⟦2-char-id⟧(⟦2-char-id⟧.target.value)
```

</details>

<details>
<summary>Hunk 262 · Change · +1 / -1</summary>

```diff
@@ -11878,7 +11878,7 @@
         }
       }), "number" === ⟦2-char-id⟧.kind && (0, ⟦2-char-id⟧.jsx)("button", {
         className: "WorldCodeAiSecondaryButton WorldCodeAiStepper",
-        "aria-label": `More ${hJ}`,
+        "aria-label": `More ${kB}`,
         disabled: !⟦2-char-id⟧,
         onClick: () => {
           ⟦2-char-id⟧(⟦2-char-id⟧.value + ⟦2-char-id⟧(⟦2-char-id⟧.value))
```

</details>

<details>
<summary>Hunk 263 · Change · +6 / -6</summary>

```diff
@@ -11968,29 +11968,29 @@
 function ⟦2-char-id⟧(⟦2-char-id⟧) {
   if (⟦2-char-id⟧ <= 1⟦2-char-id⟧) return "It starts in a few seconds.";
   const ⟦2-char-id⟧ = 10 * Math.ceil(⟦2-char-id⟧ / 1⟦2-char-id⟧);
-  return ⟦2-char-id⟧ >= 60 ? "It starts in about a minute." : `It starts in about ${cJ} seconds.`
+  return ⟦2-char-id⟧ >= 60 ? "It starts in about a minute." : `It starts in about ${TB} seconds.`
 }
-var ⟦2-char-id⟧ = ⟦2-char-id⟧(3122);
+var ⟦2-char-id⟧ = ⟦2-char-id⟧(3138);
 
 function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
   const ⟦2-char-id⟧ = new Map;
   for (const ⟦2-char-id⟧ of ⟦2-char-id⟧(⟦2-char-id⟧)) {
     var ⟦2-char-id⟧;
-    ⟦2-char-id⟧.set(⟦2-char-id⟧, (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? FJ : 0) + 1)
+    ⟦2-char-id⟧.set(⟦2-char-id⟧, (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? VB : 0) + 1)
   }
   return ⟦2-char-id⟧(⟦2-char-id⟧).filter((⟦2-char-id⟧ => {
     var ⟦2-char-id⟧;
-    const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? cJ : 0;
+    const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? TB : 0;
     return ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧ - 1), ⟦2-char-id⟧ <= 0
   }))
 }
 
 function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
   return new Promise(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
-    if (null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.aborted) return void ⟦2-char-id⟧((0, ⟦2-char-id⟧.e)(⟦2-char-id⟧));
+    if (null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.aborted) return void ⟦2-char-id⟧((0, ⟦2-char-id⟧.c)(⟦2-char-id⟧));
     const ⟦2-char-id⟧ = setTimeout(⟦2-char-id⟧, ⟦2-char-id⟧);
     null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.addEventListener("abort", (() => {
-      clearTimeout(⟦2-char-id⟧), ⟦2-char-id⟧((0, ⟦2-char-id⟧.e)(⟦2-char-id⟧))
+      clearTimeout(⟦2-char-id⟧), ⟦2-char-id⟧((0, ⟦2-char-id⟧.c)(⟦2-char-id⟧))
     }), {
       once: !0
     })
```

</details>

<details>
<summary>Hunk 264 · Change · +1 / -1</summary>

```diff
@@ -12007,7 +12007,7 @@
       if (⟦2-char-id⟧ > ⟦2-char-id⟧) return null;
       null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧), await ⟦2-char-id⟧(⟦2-char-id⟧ - Date.now(), ⟦2-char-id⟧)
     }
-    const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.freeAt(⟦2-char-id⟧) <= Date.now()))) && void 0 !== ⟦2-char-id⟧ ? XJ : ⟦2-char-id⟧[0],
+    const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.freeAt(⟦2-char-id⟧) <= Date.now()))) && void 0 !== ⟦2-char-id⟧ ? lB : ⟦2-char-id⟧[0],
       ⟦2-char-id⟧ = await ⟦2-char-id⟧(⟦2-char-id⟧, [{
         role: "user",
         content: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 265 · Change · +1 / -1</summary>

```diff
@@ -12024,7 +12024,7 @@
   const ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
     const ⟦2-char-id⟧ = [⟦2-char-id⟧.text, ...⟦2-char-id⟧.question ? [⟦2-char-id⟧.question.question, ...⟦2-char-id⟧.question.choices] : [], ...⟦2-char-id⟧.plan, ...⟦2-char-id⟧.notes, ...⟦2-char-id⟧.actions.flatMap((⟦2-char-id⟧ => "switchToWorldCode" === ⟦2-char-id⟧.kind && ⟦2-char-id⟧.request ? [⟦2-char-id⟧.request] : [])), ...⟦2-char-id⟧.lookups.flatMap((⟦2-char-id⟧ => Object.values(⟦2-char-id⟧.args).filter((⟦2-char-id⟧ => void 0 !== ⟦2-char-id⟧)))), ...⟦2-char-id⟧.changes.flatMap((⟦2-char-id⟧ => {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
-      return [...null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.why) && void 0 !== ⟦2-char-id⟧ ? cJ : [], ...(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.parts) && void 0 !== ⟦2-char-id⟧ ? ZJ : []).map((⟦2-char-id⟧ => ⟦2-char-id⟧.why)), ...⟦2-char-id⟧(⟦2-char-id⟧.before, ⟦2-char-id⟧.after)]
+      return [...null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.why) && void 0 !== ⟦2-char-id⟧ ? TB : [], ...(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.parts) && void 0 !== ⟦2-char-id⟧ ? dB : []).map((⟦2-char-id⟧ => ⟦2-char-id⟧.why)), ...⟦2-char-id⟧(⟦2-char-id⟧.before, ⟦2-char-id⟧.after)]
     })), ...⟦2-char-id⟧.worldCode.flatMap((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧)))];
     return ⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧.trim())).filter((⟦2-char-id⟧ => "" !== ⟦2-char-id⟧)).join("\n")
   }(⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 266 · Change · +1 / -1</summary>

```diff
@@ -12035,7 +12035,7 @@
       let ⟦2-char-id⟧ = ⟦2-char-id⟧;
       for (; ⟦2-char-id⟧.length > ⟦2-char-id⟧;) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.lastIndexOf("\n", ⟦2-char-id⟧),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧ > 6⟦2-char-id⟧ ? JJ : ⟦2-char-id⟧;
+          ⟦2-char-id⟧ = ⟦2-char-id⟧ > 6⟦2-char-id⟧ ? BB : ⟦2-char-id⟧;
         ⟦2-char-id⟧.push(⟦2-char-id⟧.slice(0, ⟦2-char-id⟧)), ⟦2-char-id⟧ = ⟦2-char-id⟧.slice(⟦2-char-id⟧)
       }
       return [...⟦2-char-id⟧, ⟦2-char-id⟧]
```

</details>

<details>
<summary>Hunk 267 · Change · +4 / -4</summary>

```diff
@@ -12049,11 +12049,11 @@
 
 function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
   var ⟦2-char-id⟧;
-  const ⟦2-char-id⟧ = ⟦2-char-id⟧ && null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? ZJ : [],
-    ⟦2-char-id⟧ = ⟦2-char-id⟧.length >= 2 ? FJ : Object.values(⟦2-char-id⟧).flat();
-  return ⟦2-char-id⟧.length < 2 ? "Usually under a minute." : `Usually ${function(JJ){const cJ=Math.max(5,5*Math.round(JJ/5e3));if(cJ<60)return`about ${⟦2-char-id⟧} seconds`;const ZJ=10*Math.round(JJ/1e4),FJ=Math.floor(ZJ/60),UJ=ZJ%60,eJ=`${⟦2-char-id⟧} ${1===⟦2-char-id⟧?"minute":"minutes"}`;return 0===UJ?`about ${⟦2-char-id⟧}`:`about ${⟦2-char-id⟧} ${⟦2-char-id⟧} seconds`}(function(JJ){const cJ=[...JJ].sort(((JJ,cJ)=>JJ-cJ)),ZJ=Math.floor(cJ.length/2);return cJ.length%2===1?cJ[ZJ]:(cJ[ZJ-1]+cJ[ZJ])/2}(UJ))}.`
+  const ⟦2-char-id⟧ = ⟦2-char-id⟧ && null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? dB : [],
+    ⟦2-char-id⟧ = ⟦2-char-id⟧.length >= 2 ? VB : Object.values(⟦2-char-id⟧).flat();
+  return ⟦2-char-id⟧.length < 2 ? "Usually under a minute." : `Usually ${function(BB){const TB=Math.max(5,5*Math.round(BB/5e3));if(TB<60)return`about ${⟦2-char-id⟧} seconds`;const dB=10*Math.round(BB/1e4),VB=Math.floor(dB/60),yB=dB%60,pB=`${⟦2-char-id⟧} ${1===⟦2-char-id⟧?"minute":"minutes"}`;return 0===yB?`about ${⟦2-char-id⟧}`:`about ${⟦2-char-id⟧} ${⟦2-char-id⟧} seconds`}(function(BB){const TB=[...BB].sort(((BB,TB)=>BB-TB)),dB=Math.floor(TB.length/2);return TB.length%2===1?TB[dB]:(TB[dB-1]+TB[dB])/2}(yB))}.`
 }
-var ⟦2-char-id⟧ = ⟦2-char-id⟧(35926);
+var ⟦2-char-id⟧ = ⟦2-char-id⟧(35878);
 
 function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
   const ⟦2-char-id⟧ = ⟦2-char-id⟧.split("\n"),
```

</details>

<details>
<summary>Hunk 268 · Change · +7 / -7</summary>

```diff
@@ -12070,27 +12070,27 @@
 }
 
 function ⟦2-char-id⟧(⟦2-char-id⟧) {
-  return `Moving to ${JJ} code\u2026`
+  return `Moving to ${BB} code\u2026`
 }
 
 function ⟦2-char-id⟧(⟦2-char-id⟧) {
-  return ⟦2-char-id⟧.fromLine === ⟦2-char-id⟧.toLine ? `line ${JJ.fromLine}` : `lines ${JJ.fromLine}-${JJ.toLine}`
+  return ⟦2-char-id⟧.fromLine === ⟦2-char-id⟧.toLine ? `line ${BB.fromLine}` : `lines ${BB.fromLine}-${BB.toLine}`
 }
 
 function ⟦2-char-id⟧(⟦2-char-id⟧) {
-  const ⟦2-char-id⟧ = ⟦2-char-id⟧.text.length > 4⟦2-char-id⟧ ? `${JJ.text.slice(0,4e3)}\n...` : ⟦2-char-id⟧.text;
-  return `The part I picked (${JJ.path}, ${yY(JJ)}):\n\`\`\`\n${cJ}\n\`\`\``
+  const ⟦2-char-id⟧ = ⟦2-char-id⟧.text.length > 4⟦2-char-id⟧ ? `${BB.text.slice(0,4e3)}\n...` : ⟦2-char-id⟧.text;
+  return `The part I picked (${BB.path}, ${Fo(BB)}):\n\`\`\`\n${TB}\n\`\`\``
 }
 
 function ⟦2-char-id⟧(⟦2-char-id⟧) {
   let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
   switch (⟦2-char-id⟧.action) {
     case "explain":
-      return `Explain what this part of my code does, in 2 or 3 short sentences. Don't change any code.\n\n${SY(JJ)}`;
+      return `Explain what this part of my code does, in 2 or 3 short sentences. Don't change any code.\n\n${Ko(BB)}`;
     case "fix":
-      return `Fix what is wrong in this part of my code. Change only what it needs.\n\n${SY(JJ)}`;
+      return `Fix what is wrong in this part of my code. Change only what it needs.\n\n${Ko(BB)}`;
     case "change":
-      return `${cJ.trim()}\n\nChange only this part of my code, unless more is needed for it to work.\n\n${SY(JJ)}`
+      return `${TB.trim()}\n\nChange only this part of my code, unless more is needed for it to work.\n\n${Ko(BB)}`
   }
 }
 
```

</details>

<details>
<summary>Hunk 269 · Change · +8 / -8</summary>

```diff
@@ -12099,18 +12099,18 @@
   const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
   switch (⟦2-char-id⟧.action) {
     case "explain":
-      return `Explain ${ZJ}`;
+      return `Explain ${dB}`;
     case "fix":
-      return `Fix ${ZJ}`;
+      return `Fix ${dB}`;
     case "change":
-      return `${cJ.trim()} (${ZJ})`
+      return `${TB.trim()} (${dB})`
   }
 }
-var ⟦2-char-id⟧ = ⟦2-char-id⟧(40118),
-  ⟦2-char-id⟧ = ⟦2-char-id⟧(4153),
-  ⟦2-char-id⟧ = ⟦2-char-id⟧(40103),
-  ⟦2-char-id⟧ = ⟦2-char-id⟧(40111),
-  ⟦2-char-id⟧ = ⟦2-char-id⟧(40107);
+var ⟦2-char-id⟧ = ⟦2-char-id⟧(40115),
+  ⟦2-char-id⟧ = ⟦2-char-id⟧(4147),
+  ⟦2-char-id⟧ = ⟦2-char-id⟧(40096),
+  ⟦2-char-id⟧ = ⟦2-char-id⟧(40107),
+  ⟦2-char-id⟧ = ⟦2-char-id⟧(40104);
 
 function ⟦2-char-id⟧(⟦2-char-id⟧) {
   return ⟦2-char-id⟧ ? "/worldCodeAiCheck.ts" : "/worldCodeAiCheck.js"
```

</details>

<details>
<summary>Hunk 270 · Change · +5 / -5</summary>

```diff
@@ -12128,15 +12128,15 @@
     const ⟦2-char-id⟧ = ⟦2-char-id⟧("worldCodeTs" === ⟦2-char-id⟧),
       ⟦2-char-id⟧ = new Map(⟦2-char-id⟧ ? [
         [⟦2-char-id⟧, "\n"],
-        ["/globals.d.ts", ⟦2-char-id⟧.c],
-        ["/lib.d.ts", ⟦2-char-id⟧.e]
+        ["/globals.d.ts", ⟦2-char-id⟧.e],
+        ["/lib.d.ts", ⟦2-char-id⟧.c]
       ] : [
         [⟦2-char-id⟧, "\n"],
         ["/node_modules/@bloxd/index.d.ts", ⟦2-char-id⟧.default],
-        ["/globals.d.ts", ⟦2-char-id⟧.e],
-        ["/lib.d.ts", ⟦2-char-id⟧.e]
+        ["/globals.d.ts", ⟦2-char-id⟧.c],
+        ["/lib.d.ts", ⟦2-char-id⟧.c]
       ]);
-    ⟦2-char-id⟧ = ⟦2-char-id⟧.c(⟦2-char-id⟧.b(⟦2-char-id⟧), [...⟦2-char-id⟧.keys()], ⟦2-char-id⟧(), {
+    ⟦2-char-id⟧ = ⟦2-char-id⟧.f(⟦2-char-id⟧.d(⟦2-char-id⟧), [...⟦2-char-id⟧.keys()], ⟦2-char-id⟧(), {
       allowJs: !0,
       checkJs: !0,
       noLib: !0,
```

</details>

<details>
<summary>Hunk 271 · Change · +1 / -1</summary>

```diff
@@ -12158,7 +12158,7 @@
   const ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
     ⟦2-char-id⟧ < ⟦2-char-id⟧.getStart(⟦2-char-id⟧) || ⟦2-char-id⟧ >= ⟦2-char-id⟧.getEnd() || (⟦2-char-id⟧().isFunctionLike(⟦2-char-id⟧) && ⟦2-char-id⟧ > ⟦2-char-id⟧.getStart(⟦2-char-id⟧) && (⟦2-char-id⟧ = void 0), ⟦2-char-id⟧().isCallExpression(⟦2-char-id⟧) && (⟦2-char-id⟧ >= ⟦2-char-id⟧.expression.getEnd() || ⟦2-char-id⟧ <= ⟦2-char-id⟧.expression.getEnd()) && (⟦2-char-id⟧ = ⟦2-char-id⟧), ⟦2-char-id⟧().forEachChild(⟦2-char-id⟧, ⟦2-char-id⟧))
   };
-  return ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) ? FJ : void 0
+  return ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) ? VB : void 0
 }
 
 function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 272 · Change · +2 / -2</summary>

```diff
@@ -12177,12 +12177,12 @@
   const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
   if (!⟦2-char-id⟧) return;
   const ⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧) === ⟦2-char-id⟧));
-  if (⟦2-char-id⟧) return `"${FJ}"`;
+  if (⟦2-char-id⟧) return `"${VB}"`;
   const ⟦2-char-id⟧ = ⟦2-char-id⟧.filter((⟦2-char-id⟧ => {
     const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
     return ⟦2-char-id⟧.includes(⟦2-char-id⟧) || ⟦2-char-id⟧.includes(⟦2-char-id⟧)
   })).sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.length - ⟦2-char-id⟧.length));
-  if (⟦2-char-id⟧.length > 0) return ⟦2-char-id⟧.slice(0, 2).map((⟦2-char-id⟧ => `"${JJ}"`)).join(" or ");
+  if (⟦2-char-id⟧.length > 0) return ⟦2-char-id⟧.slice(0, 2).map((⟦2-char-id⟧ => `"${BB}"`)).join(" or ");
   const ⟦2-char-id⟧ = new Set(⟦2-char-id⟧.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean));
   let ⟦2-char-id⟧;
   for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 273 · Change · +1 / -1</summary>

```diff
@@ -12192,7 +12192,7 @@
       shared: ⟦2-char-id⟧
     })
   }
-  return ⟦2-char-id⟧ ? `"${XJ.option}"` : void 0
+  return ⟦2-char-id⟧ ? `"${lB.option}"` : void 0
 }
 
 function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 274 · Change · +3 / -3</summary>

```diff
@@ -12218,10 +12218,10 @@
   if (void 0 !== (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.start)) {
     var ⟦2-char-id⟧, ⟦2-char-id⟧;
     const ⟦2-char-id⟧ = ⟦2-char-id⟧.getLineAndCharacterOfPosition(⟦2-char-id⟧.start).line,
-      ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.split("\n")[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.trim()) && void 0 !== ⟦2-char-id⟧ ? YJ : "",
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.length > 40 ? `${ZJ.slice(0,37)}...` : ⟦2-char-id⟧,
+      ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.split("\n")[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.trim()) && void 0 !== ⟦2-char-id⟧ ? oB : "",
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.length > 40 ? `${dB.slice(0,37)}...` : ⟦2-char-id⟧,
       ⟦2-char-id⟧ = ⟦2-char-id⟧().flattenDiagnosticMessageText(⟦2-char-id⟧.messageText, " ").replace(/\.$/, "");
-    ⟦2-char-id⟧.add(`Line ${cJ+1} stops all of this code from running: "${FJ}" (${UJ}).`)
+    ⟦2-char-id⟧.add(`Line ${TB+1} stops all of this code from running: "${VB}" (${yB}).`)
   }
   const ⟦2-char-id⟧ = new Set;
   for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.languageService.getSemanticDiagnostics(⟦2-char-id⟧)) {
```

</details>

<details>
<summary>Hunk 275 · Change · +27 / -27</summary>

```diff
@@ -12229,96 +12229,96 @@
     if (7027 === ⟦2-char-id⟧.code && void 0 !== ⟦2-char-id⟧.start) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.getLineAndCharacterOfPosition(⟦2-char-id⟧.start).line,
-        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.split("\n")[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.trim()) && void 0 !== ⟦2-char-id⟧ ? QJ : "",
-        ⟦2-char-id⟧ = ⟦2-char-id⟧.length > 40 ? `${ZJ.slice(0,37)}...` : ⟦2-char-id⟧;
-      ⟦2-char-id⟧.add(`Line ${cJ+1} never runs: "${FJ}" comes after a return, which ends the function first.`);
+        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.split("\n")[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.trim()) && void 0 !== ⟦2-char-id⟧ ? NB : "",
+        ⟦2-char-id⟧ = ⟦2-char-id⟧.length > 40 ? `${dB.slice(0,37)}...` : ⟦2-char-id⟧;
+      ⟦2-char-id⟧.add(`Line ${TB+1} never runs: "${VB}" comes after a return, which ends the function first.`);
       continue
     }
     if (⟦2-char-id⟧.has(⟦2-char-id⟧.code) && void 0 !== ⟦2-char-id⟧.start) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧.start + (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? KJ : 0),
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧.start + (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? sB : 0),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.slice(⟦2-char-id⟧.start, ⟦2-char-id⟧),
         ⟦2-char-id⟧ = /^\s*\(/.test(⟦2-char-id⟧.slice(⟦2-char-id⟧)),
-        ⟦2-char-id⟧ = new RegExp(`^${ZJ.replaceAll("$","\\$")}\\s*=[^=]`, "m").test(⟦2-char-id⟧),
+        ⟦2-char-id⟧ = new RegExp(`^${dB.replaceAll("$","\\$")}\\s*=[^=]`, "m").test(⟦2-char-id⟧),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧.start),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.lastIndexOf("/*") > ⟦2-char-id⟧.lastIndexOf("*/") || ⟦2-char-id⟧.slice(⟦2-char-id⟧.lastIndexOf("\n")).includes("//"),
-        ⟦2-char-id⟧ = new RegExp(`//\\s*(?:const|let|var)\\s+${ZJ.replaceAll("$","\\$")}\\b`).test(⟦2-char-id⟧),
-        ⟦2-char-id⟧ = new RegExp(`typeof\\s+${ZJ.replaceAll("$","\\$")}\\b`).test(⟦2-char-id⟧);
+        ⟦2-char-id⟧ = new RegExp(`//\\s*(?:const|let|var)\\s+${dB.replaceAll("$","\\$")}\\b`).test(⟦2-char-id⟧),
+        ⟦2-char-id⟧ = new RegExp(`typeof\\s+${dB.replaceAll("$","\\$")}\\b`).test(⟦2-char-id⟧);
       if (⟦2-char-id⟧.has(⟦2-char-id⟧) || ⟦2-char-id⟧.has(⟦2-char-id⟧) || ⟦2-char-id⟧ || ⟦2-char-id⟧ || ⟦2-char-id⟧ || ⟦2-char-id⟧ || ⟦2-char-id⟧ || ⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.start, ⟦2-char-id⟧))) continue;
       ⟦2-char-id⟧.add(⟦2-char-id⟧);
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.getLineAndCharacterOfPosition(⟦2-char-id⟧.start).line,
         ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = /Did you mean '([\w$]+)'\?/.exec(⟦2-char-id⟧().flattenDiagnosticMessageText(⟦2-char-id⟧.messageText, " "))) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[1];
-      ⟦2-char-id⟧.add(⟦2-char-id⟧ ? `Line ${sJ+1} uses "${ZJ}", which is never set, so it throws there. Did you mean "${nJ}"?` : `Line ${sJ+1} uses "${ZJ}", which isn't set there, so it throws when that line runs.`);
+      ⟦2-char-id⟧.add(⟦2-char-id⟧ ? `Line ${OB+1} uses "${dB}", which is never set, so it throws there. Did you mean "${DB}"?` : `Line ${OB+1} uses "${dB}", which isn't set there, so it throws when that line runs.`);
       continue
     }
     if (!⟦2-char-id⟧.has(⟦2-char-id⟧.code) || void 0 === ⟦2-char-id⟧.start) continue;
     const ⟦2-char-id⟧ = ⟦2-char-id⟧().flattenDiagnosticMessageText(⟦2-char-id⟧.messageText, " ");
     if (⟦2-char-id⟧.includes("'string | number'")) continue;
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.start + (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? sJ : 0),
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.start + (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? OB : 0),
       ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.start, ⟦2-char-id⟧);
     if (!⟦2-char-id⟧) continue;
     const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.start, ⟦2-char-id⟧),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.expression.getText(⟦2-char-id⟧),
       ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.parent && ⟦2-char-id⟧().isPropertyAssignment(⟦2-char-id⟧.parent) && ⟦2-char-id⟧.parent.name === ⟦2-char-id⟧ ? ⟦2-char-id⟧.parent : void 0,
       ⟦2-char-id⟧ = (⟦2-char-id⟧ ? ⟦2-char-id⟧.getText(⟦2-char-id⟧) : ⟦2-char-id⟧.slice(⟦2-char-id⟧.start, ⟦2-char-id⟧)).replace(/\s+/g, " "),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.length > 40 ? `${hJ.slice(0,37)}...` : ⟦2-char-id⟧;
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.length > 40 ? `${kB.slice(0,37)}...` : ⟦2-char-id⟧;
     if (2554 === ⟦2-char-id⟧.code) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.match(/Expected (\S+) arguments?, but got (\d+)/),
-        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧[1]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.replace("-", " to ")) && void 0 !== ⟦2-char-id⟧ ? SJ : "a different number of",
-        ⟦2-char-id⟧ = Number(null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[2]) && void 0 !== ⟦2-char-id⟧ ? MJ : ⟦2-char-id⟧.arguments.length);
-      ⟦2-char-id⟧.add(`${eJ} needs ${ZJ} ${"1"===ZJ?"value":"values"}, but this line gives it ${UJ}.`);
+        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧[1]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.replace("-", " to ")) && void 0 !== ⟦2-char-id⟧ ? zB : "a different number of",
+        ⟦2-char-id⟧ = Number(null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[2]) && void 0 !== ⟦2-char-id⟧ ? UB : ⟦2-char-id⟧.arguments.length);
+      ⟦2-char-id⟧.add(`${pB} needs ${dB} ${"1"===dB?"value":"values"}, but this line gives it ${yB}.`);
       continue
     }
     if (2353 === ⟦2-char-id⟧.code) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.match(/'([^']*)' does not exist/)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[1]) && void 0 !== ⟦2-char-id⟧ ? bJ : ⟦2-char-id⟧,
+      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.match(/'([^']*)' does not exist/)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[1]) && void 0 !== ⟦2-char-id⟧ ? FB : ⟦2-char-id⟧,
         ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.parent && ⟦2-char-id⟧().isPropertyAssignment(⟦2-char-id⟧.parent) ? ⟦2-char-id⟧.parent.parent : null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.parent,
         ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧().isObjectLiteralExpression(⟦2-char-id⟧) ? ⟦2-char-id⟧.getContextualType(⟦2-char-id⟧) : void 0,
         ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ && !⟦2-char-id⟧.isArrayType(⟦2-char-id⟧.getNonNullableType(⟦2-char-id⟧)) ? ⟦2-char-id⟧.getPropertiesOfType(⟦2-char-id⟧.getNonNullableType(⟦2-char-id⟧)).map((⟦2-char-id⟧ => ⟦2-char-id⟧.name)) : []),
-        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ` It takes ${uZ(AJ,FJ)}.` : " Check Show Docs for its settings.";
-      ⟦2-char-id⟧.add(`${eJ} has no setting called "${JJ}".${XJ?` Did you mean ${⟦2-char-id⟧}?`:jJ}`);
+        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ` It takes ${Gd(JB,VB)}.` : " Check Show Docs for its settings.";
+      ⟦2-char-id⟧.add(`${pB} has no setting called "${BB}".${lB?` Did you mean ${⟦2-char-id⟧}?`:gB}`);
       continue
     }
-    const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.initializer) && void 0 !== ⟦2-char-id⟧ ? nJ : ⟦2-char-id⟧,
+    const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.initializer) && void 0 !== ⟦2-char-id⟧ ? DB : ⟦2-char-id⟧,
       ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧().isExpression(⟦2-char-id⟧) ? ⟦2-char-id⟧.getContextualType(⟦2-char-id⟧) : void 0,
       ⟦2-char-id⟧ = (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.isUnion() ? ⟦2-char-id⟧.types : ⟦2-char-id⟧ ? [⟦2-char-id⟧] : []).filter((⟦2-char-id⟧ => ⟦2-char-id⟧.isStringLiteral())).map((⟦2-char-id⟧ => ⟦2-char-id⟧.value)),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.includes("keyof ") ? "setting" : "name",
-      ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.getText(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? GJ : ⟦2-char-id⟧,
+      ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.getText(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? uB : ⟦2-char-id⟧,
       ⟦2-char-id⟧ = ⟦2-char-id⟧.length > 0 ? null === (⟦2-char-id⟧ = /^CONFIG\.([\w$]+)$/.exec(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[1] : void 0;
     if (void 0 !== ⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = new RegExp(`(?:^|[{,])\\s*${TJ.replaceAll("$","\\$")}\\s*:\\s*(["'])([^"'\\n]*)\\1`, "m").exec(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[2];
+      const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = new RegExp(`(?:^|[{,])\\s*${WB.replaceAll("$","\\$")}\\s*:\\s*(["'])([^"'\\n]*)\\1`, "m").exec(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[2];
       if (void 0 !== ⟦2-char-id⟧ && !⟦2-char-id⟧.includes(⟦2-char-id⟧)) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
-        ⟦2-char-id⟧.add(`${eJ} has no ${NJ} called "${cJ}" (${OJ}).${JJ?` Did you mean ${⟦2-char-id⟧}?`:""}`)
+        ⟦2-char-id⟧.add(`${pB} has no ${ZB} called "${TB}" (${XB}).${BB?` Did you mean ${⟦2-char-id⟧}?`:""}`)
       }
       continue
     }
     if (⟦2-char-id⟧ && ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.getTypeAtLocation(⟦2-char-id⟧), ⟦2-char-id⟧)) continue;
     if (⟦2-char-id⟧.length > 0) {
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧().isStringLiteral(⟦2-char-id⟧) ? pJ : void 0,
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧().isStringLiteral(⟦2-char-id⟧) ? QB : void 0,
         ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧.text, ⟦2-char-id⟧) : void 0,
-        ⟦2-char-id⟧ = ⟦2-char-id⟧ && !⟦2-char-id⟧ ? `${eJ} has no ${NJ} called ${gJ=kJ,gJ.startsWith('"')?gJ:`"${gJ}"`}.` : `${eJ} can't take ${kJ} there.`;
-      ⟦2-char-id⟧.add(`${ZJ}${cJ?` Did you mean ${⟦2-char-id⟧}?`:" Check Show Docs for what it takes."}`);
+        ⟦2-char-id⟧ = ⟦2-char-id⟧ && !⟦2-char-id⟧ ? `${pB} has no ${ZB} called ${IB=PB,IB.startsWith('"')?IB:`"${IB}"`}.` : `${pB} can't take ${PB} there.`;
+      ⟦2-char-id⟧.add(`${dB}${TB?` Did you mean ${⟦2-char-id⟧}?`:" Check Show Docs for what it takes."}`);
       continue
     }
     if (⟦2-char-id⟧ && ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧.getTypeAtLocation(⟦2-char-id⟧))) {
-      ⟦2-char-id⟧.add(`${eJ} can't take ${kJ} there: it takes ${uZ(AJ,dJ)}.`);
+      ⟦2-char-id⟧.add(`${pB} can't take ${PB} there: it takes ${Gd(JB,RB)}.`);
       continue
     }
     const ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧.getNonNullableType(⟦2-char-id⟧);
     if (⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧) && !⟦2-char-id⟧.isArrayType(⟦2-char-id⟧) && !⟦2-char-id⟧.isTupleType(⟦2-char-id⟧)) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
-      ⟦2-char-id⟧.add(`${eJ} needs settings in { } there${JJ?`, like ${⟦2-char-id⟧}`:""}, not ${kJ}.`);
+      ⟦2-char-id⟧.add(`${pB} needs settings in { } there${BB?`, like ${⟦2-char-id⟧}`:""}, not ${PB}.`);
       continue
     }
     const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.match(/parameter of type '([^']*)'/)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[1],
       ⟦2-char-id⟧ = ⟦2-char-id⟧.arguments.findIndex((⟦2-char-id⟧ => ⟦2-char-id⟧.getStart(⟦2-char-id⟧) <= ⟦2-char-id⟧.start && ⟦2-char-id⟧.start < ⟦2-char-id⟧.getEnd())),
-      ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.getResolvedSignature(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.parameters[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? rJ : "that part",
+      ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.getResolvedSignature(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.parameters[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? vB : "that part",
       ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.typeToString(⟦2-char-id⟧.getTypeAtLocation(⟦2-char-id⟧)) : "",
       ⟦2-char-id⟧ = "number" === ⟦2-char-id⟧ ? "a number" : "string" === ⟦2-char-id⟧ ? "text" : "something else";
-    "string" === ⟦2-char-id⟧ ? ⟦2-char-id⟧.add(`${eJ} needs ${RJ} as text, but ${kJ} is ${aJ} here.`) : "number" === ⟦2-char-id⟧ ? ⟦2-char-id⟧.add(`${eJ} needs ${RJ} as a number, but ${kJ} is ${aJ} here.`) : ⟦2-char-id⟧.add(`${eJ} can't take ${kJ} there${dJ?`: ⟦2-char-id⟧ takes ${⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧)}`:". Check Show Docs for what it takes"}.`)
+    "string" === ⟦2-char-id⟧ ? ⟦2-char-id⟧.add(`${pB} needs ${qB} as text, but ${PB} is ${jB} here.`) : "number" === ⟦2-char-id⟧ ? ⟦2-char-id⟧.add(`${pB} needs ${qB} as a number, but ${PB} is ${jB} here.`) : ⟦2-char-id⟧.add(`${pB} can't take ${PB} there${RB?`: ⟦2-char-id⟧ takes ${⟦2-char-id⟧(⟦2-char-id⟧,⟦2-char-id⟧)}`:". Check Show Docs for what it takes"}.`)
   }
   var ⟦2-char-id⟧, ⟦2-char-id⟧;
   return [...⟦2-char-id⟧, ...⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)]
```

</details>

<details>
<summary>Hunk 276 · Change · +3 / -3</summary>

```diff
@@ -12333,13 +12333,13 @@
   for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.split("\n")) {
     var ⟦2-char-id⟧;
     const ⟦2-char-id⟧ = /^(?:async\s+)?function\s*\*?\s*(\w+)\s*\(|^(\w+)\s*=\s*(?:async\s*)?(?:\([^()]*\)\s*=>|function\b|\w+\s*=>)/.exec(⟦2-char-id⟧),
-      ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[1]) && void 0 !== ⟦2-char-id⟧ ? ZJ : null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[2];
+      ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[1]) && void 0 !== ⟦2-char-id⟧ ? dB : null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[2];
     var ⟦2-char-id⟧;
-    if (⟦2-char-id⟧) ⟦2-char-id⟧.set(⟦2-char-id⟧, (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? FJ : 0) + 1)
+    if (⟦2-char-id⟧) ⟦2-char-id⟧.set(⟦2-char-id⟧, (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? VB : 0) + 1)
   }
   return [...⟦2-char-id⟧].flatMap((⟦2-char-id⟧ => {
     let [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
-    return ⟦2-char-id⟧ > 1 ? [`${cJ} is in the code ${ZJ} times, so only the last one runs. Put them together in one ${cJ}.`] : []
+    return ⟦2-char-id⟧ > 1 ? [`${TB} is in the code ${dB} times, so only the last one runs. Put them together in one ${TB}.`] : []
   }))
 }
 
```

</details>

<details>
<summary>Hunk 277 · Change · +2 / -2</summary>

```diff
@@ -12348,10 +12348,10 @@
   const ⟦2-char-id⟧ = ⟦2-char-id⟧.after.split("\n"),
     ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.trim()) && void 0 !== ⟦2-char-id⟧ ? cJ : "";
+      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.trim()) && void 0 !== ⟦2-char-id⟧ ? TB : "";
       return "" === ⟦2-char-id⟧ ? void 0 : {
         line: ⟦2-char-id⟧ + 1,
-        text: ⟦2-char-id⟧.length > 50 ? `${FJ.slice(0,47)}...` : ⟦2-char-id⟧
+        text: ⟦2-char-id⟧.length > 50 ? `${VB.slice(0,47)}...` : ⟦2-char-id⟧
       }
     },
     ⟦2-char-id⟧ = /^Line (\d+) /.exec(⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 278 · Change · +3 / -3</summary>

```diff
@@ -12359,15 +12359,15 @@
   const ⟦2-char-id⟧ = /^([\w$]+) is in the code \d+ times\b/.exec(⟦2-char-id⟧);
   if (⟦2-char-id⟧) {
     const ⟦2-char-id⟧ = ⟦2-char-id⟧[1].replaceAll("$", "\\$"),
-      ⟦2-char-id⟧ = new RegExp(`^(?:async\\s+)?function\\s*\\*?\\s*${JJ}\\s*\\(|^${JJ}\\s*=`),
+      ⟦2-char-id⟧ = new RegExp(`^(?:async\\s+)?function\\s*\\*?\\s*${BB}\\s*\\(|^${BB}\\s*=`),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.findIndex((⟦2-char-id⟧ => ⟦2-char-id⟧.test(⟦2-char-id⟧)));
     return ⟦2-char-id⟧ >= 0 ? ⟦2-char-id⟧(⟦2-char-id⟧) : void 0
   }
-  const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = /"([^"]+)"/.exec(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[1]) && void 0 !== ⟦2-char-id⟧ ? ZJ : null === (⟦2-char-id⟧ = /^api\.[\w$]+/.exec(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[0];
+  const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = /"([^"]+)"/.exec(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[1]) && void 0 !== ⟦2-char-id⟧ ? dB : null === (⟦2-char-id⟧ = /^api\.[\w$]+/.exec(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[0];
   if (!⟦2-char-id⟧) return;
   const ⟦2-char-id⟧ = new Set(⟦2-char-id⟧.before.split("\n")),
     ⟦2-char-id⟧ = ⟦2-char-id⟧.flatMap(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.includes(⟦2-char-id⟧) ? [⟦2-char-id⟧] : [])),
-    ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => !⟦2-char-id⟧.has(⟦2-char-id⟧[⟦2-char-id⟧])))) && void 0 !== ⟦2-char-id⟧ ? eJ : ⟦2-char-id⟧[0];
+    ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => !⟦2-char-id⟧.has(⟦2-char-id⟧[⟦2-char-id⟧])))) && void 0 !== ⟦2-char-id⟧ ? pB : ⟦2-char-id⟧[0];
   return void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧(⟦2-char-id⟧)
 }
 
```

</details>

<details>
<summary>Hunk 279 · Change · +2 / -2</summary>

```diff
@@ -12412,13 +12412,13 @@
   return ⟦2-char-id⟧.flatMap((⟦2-char-id⟧ => {
     if (⟦2-char-id⟧.has(⟦2-char-id⟧.name) || ⟦2-char-id⟧.has(⟦2-char-id⟧.name)) return [];
     ⟦2-char-id⟧.add(⟦2-char-id⟧.name);
-    return [`Line ${cJ.getLineAndCharacterOfPosition(JJ.at).line+1} uses "CONFIG.${JJ.name}", but CONFIG has no ${JJ.name}, so it is undefined there. Add ${JJ.name} to CONFIG.`]
+    return [`Line ${TB.getLineAndCharacterOfPosition(BB.at).line+1} uses "CONFIG.${BB.name}", but CONFIG has no ${BB.name}, so it is undefined there. Add ${BB.name} to CONFIG.`]
   }))
 }
 
 function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
   var ⟦2-char-id⟧;
-  const ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && !(void 0 !== ⟦2-char-id⟧.path && (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧.path)),
+  const ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && !(void 0 !== ⟦2-char-id⟧.path && (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧.path)),
     ⟦2-char-id⟧ = !0 === (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.path) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.endsWith(".ts")),
     ⟦2-char-id⟧ = ⟦2-char-id⟧ => [...⟦2-char-id⟧.codeWarnings(⟦2-char-id⟧, ⟦2-char-id⟧), ...⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ...⟦2-char-id⟧(⟦2-char-id⟧), ...⟦2-char-id⟧(⟦2-char-id⟧)],
     ⟦2-char-id⟧ = new Set(⟦2-char-id⟧(⟦2-char-id⟧.before).map(⟦2-char-id⟧));
```

</details>

<details>
<summary>Hunk 280 · Change · +1 / -1</summary>

```diff
@@ -12452,7 +12452,7 @@
           }, ⟦2-char-id⟧(⟦2-char-id⟧)
         }, ⟦2-char-id⟧.onerror = () => {
           var ⟦2-char-id⟧;
-          ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.error) && void 0 !== ⟦2-char-id⟧ ? JJ : new Error("IndexedDB didn't open"))
+          ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.error) && void 0 !== ⟦2-char-id⟧ ? BB : new Error("IndexedDB didn't open"))
         }, ⟦2-char-id⟧.onblocked = () => {
           ⟦2-char-id⟧(new Error("IndexedDB is blocked"))
         }
```

</details>

<details>
<summary>Hunk 281 · Change · +5 / -5</summary>

```diff
@@ -12501,22 +12501,22 @@
         let ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧);
         return ⟦2-char-id⟧.onsuccess = () => {
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(void 0 === ⟦2-char-id⟧.result ? FJ : ⟦2-char-id⟧.result), ⟦2-char-id⟧.put(⟦2-char-id⟧, ⟦2-char-id⟧)
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(void 0 === ⟦2-char-id⟧.result ? VB : ⟦2-char-id⟧.result), ⟦2-char-id⟧.put(⟦2-char-id⟧, ⟦2-char-id⟧)
         }, await ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧
       }
     }
-  }(⟦2-char-id⟧.g),
+  }(⟦2-char-id⟧.f),
   ⟦2-char-id⟧ = new class {
     constructor(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      this.store = ⟦2-char-id⟧, this.signal = ⟦2-char-id⟧, this.ys = new Map
+      this.store = ⟦2-char-id⟧, this.signal = ⟦2-char-id⟧, this.RO = new Map
     }
     watch(⟦2-char-id⟧, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
       return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.signal) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.listen((⟦2-char-id⟧ => {
         if (⟦2-char-id⟧ !== ⟦2-char-id⟧) return;
         const ⟦2-char-id⟧ = this.load(⟦2-char-id⟧).then((async ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, await this.read(⟦2-char-id⟧))));
-        this.ys.set(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.then(⟦2-char-id⟧)
-      }))) && void 0 !== ⟦2-char-id⟧ ? ZJ : () => {}
+        this.RO.set(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.then(⟦2-char-id⟧)
+      }))) && void 0 !== ⟦2-char-id⟧ ? dB : () => {}
     }
     list(⟦2-char-id⟧) {
       return this.load(⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 282 · Change · +1 / -1</summary>

```diff
@@ -12545,7 +12545,7 @@
           }].slice(-30)
         },
         ⟦2-char-id⟧ = this.load(⟦2-char-id⟧).then((async ⟦2-char-id⟧ => this.save(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)))));
-      this.ys.set(⟦2-char-id⟧, ⟦2-char-id⟧.then((⟦2-char-id⟧ => {
+      this.RO.set(⟦2-char-id⟧, ⟦2-char-id⟧.then((⟦2-char-id⟧ => {
         let {
           snapshots: ⟦2-char-id⟧
         } = ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 283 · Change · +1 / -1</summary>

```diff
@@ -12564,7 +12564,7 @@
         ...⟦2-char-id⟧,
         label: ⟦2-char-id⟧
       } : ⟦2-char-id⟧))))));
-      this.ys.set(⟦2-char-id⟧, ⟦2-char-id⟧.then((⟦2-char-id⟧ => {
+      this.RO.set(⟦2-char-id⟧, ⟦2-char-id⟧.then((⟦2-char-id⟧ => {
         let {
           snapshots: ⟦2-char-id⟧
         } = ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 284 · Change · +1 / -1</summary>

```diff
@@ -12581,7 +12581,7 @@
     async save(⟦2-char-id⟧, ⟦2-char-id⟧) {
       if (this.store.update) try {
         return {
-          snapshots: await this.store.update(this.storeKey(⟦2-char-id⟧), (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧) ? JJ : null))),
+          snapshots: await this.store.update(this.storeKey(⟦2-char-id⟧), (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧) ? BB : null))),
           isSaved: !0
         }
       } catch {}
```

</details>

<details>
<summary>Hunk 285 · Change · +5 / -5</summary>

```diff
@@ -12592,19 +12592,19 @@
       }
     }
     read(⟦2-char-id⟧) {
-      return this.store.getItem(this.storeKey(⟦2-char-id⟧)).then((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧) ? JJ : null)).catch((() => null))
+      return this.store.getItem(this.storeKey(⟦2-char-id⟧)).then((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧) ? BB : null)).catch((() => null))
     }
     load(⟦2-char-id⟧) {
-      let ⟦2-char-id⟧ = this.ys.get(⟦2-char-id⟧);
-      return ⟦2-char-id⟧ || (⟦2-char-id⟧ = this.store.getItem(this.storeKey(⟦2-char-id⟧)).then((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧) ? JJ : [])).catch((() => [])), this.ys.set(⟦2-char-id⟧, ⟦2-char-id⟧)), ⟦2-char-id⟧
+      let ⟦2-char-id⟧ = this.RO.get(⟦2-char-id⟧);
+      return ⟦2-char-id⟧ || (⟦2-char-id⟧ = this.store.getItem(this.storeKey(⟦2-char-id⟧)).then((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧) ? BB : [])).catch((() => [])), this.RO.set(⟦2-char-id⟧, ⟦2-char-id⟧)), ⟦2-char-id⟧
     }
     storeKey(⟦2-char-id⟧) {
-      return `worldCodeAiHistory:${JJ}`
+      return `worldCodeAiHistory:${BB}`
     }
   }(⟦2-char-id⟧, ⟦2-char-id⟧("bloxd-worldCodeAiHistory")),
   ⟦2-char-id⟧ = new class {
     constructor(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      this.store = ⟦2-char-id⟧, this.signal = ⟦2-char-id⟧, this.ys = new Map
+      this.store = ⟦2-char-id⟧, this.signal = ⟦2-char-id⟧, this.RO = new Map
     }
     watch(⟦2-char-id⟧, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 286 · Change · +4 / -4</summary>

```diff
@@ -12612,16 +12612,16 @@
         if (⟦2-char-id⟧ !== ⟦2-char-id⟧) return;
         const ⟦2-char-id⟧ = this.load(⟦2-char-id⟧).then((async ⟦2-char-id⟧ => {
           var ⟦2-char-id⟧;
-          return null !== (⟦2-char-id⟧ = await this.read(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧
+          return null !== (⟦2-char-id⟧ = await this.read(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧
         }));
-        this.ys.set(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.then(⟦2-char-id⟧)
-      }))) && void 0 !== ⟦2-char-id⟧ ? ZJ : () => {}
+        this.RO.set(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.then(⟦2-char-id⟧)
+      }))) && void 0 !== ⟦2-char-id⟧ ? dB : () => {}
     }
     list(⟦2-char-id⟧) {
       return this.load(⟦2-char-id⟧)
     }
     add(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return this.update(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.includes(⟦2-char-id⟧) || ⟦2-char-id⟧.length >= 8 ? JJ : [...⟦2-char-id⟧, ⟦2-char-id⟧]))
+      return this.update(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.includes(⟦2-char-id⟧) || ⟦2-char-id⟧.length >= 8 ? BB : [...⟦2-char-id⟧, ⟦2-char-id⟧]))
     }
     remove(⟦2-char-id⟧, ⟦2-char-id⟧) {
       return this.update(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.filter((⟦2-char-id⟧ => ⟦2-char-id⟧ !== ⟦2-char-id⟧))))
```

</details>

<details>
<summary>Hunk 287 · Change · +2 / -2</summary>

```diff
@@ -12633,10 +12633,10 @@
         if (this.store.update) try {
           return await this.store.update(this.storeKey(⟦2-char-id⟧), (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧) ? ⟦2-char-id⟧.slice(0, 8) : ⟦2-char-id⟧)))
         } catch {}
-        const ⟦2-char-id⟧ = ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = await this.read(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? FJ : ⟦2-char-id⟧);
+        const ⟦2-char-id⟧ = ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = await this.read(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? VB : ⟦2-char-id⟧);
         return await this.store.setItem(this.storeKey(⟦2-char-id⟧), ⟦2-char-id⟧).catch((() => !1)), ⟦2-char-id⟧
       }));
-      this.ys.set(⟦2-char-id⟧, ⟦2-char-id⟧);
+      this.RO.set(⟦2-char-id⟧, ⟦2-char-id⟧);
       const ⟦2-char-id⟧ = await ⟦2-char-id⟧;
       return null === (⟦2-char-id⟧ = this.signal) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.post(⟦2-char-id⟧), ⟦2-char-id⟧
     }
```

</details>

<details>
<summary>Hunk 288 · Change · +3 / -3</summary>

```diff
@@ -12644,11 +12644,11 @@
       return this.store.getItem(this.storeKey(⟦2-char-id⟧)).then((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧) ? ⟦2-char-id⟧.slice(0, 8) : null)).catch((() => null))
     }
     load(⟦2-char-id⟧) {
-      let ⟦2-char-id⟧ = this.ys.get(⟦2-char-id⟧);
-      return ⟦2-char-id⟧ || (⟦2-char-id⟧ = this.read(⟦2-char-id⟧).then((⟦2-char-id⟧ => null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? JJ : [])), this.ys.set(⟦2-char-id⟧, ⟦2-char-id⟧)), ⟦2-char-id⟧
+      let ⟦2-char-id⟧ = this.RO.get(⟦2-char-id⟧);
+      return ⟦2-char-id⟧ || (⟦2-char-id⟧ = this.read(⟦2-char-id⟧).then((⟦2-char-id⟧ => null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? BB : [])), this.RO.set(⟦2-char-id⟧, ⟦2-char-id⟧)), ⟦2-char-id⟧
     }
     storeKey(⟦2-char-id⟧) {
-      return `worldCodeAiNotes:${JJ}`
+      return `worldCodeAiNotes:${BB}`
     }
   }(⟦2-char-id⟧, ⟦2-char-id⟧("bloxd-worldCodeAiNotes"));
 const ⟦2-char-id⟧ = ["Next in line", "2nd in line", "3rd in line"];
```

</details>

<details>
<summary>Hunk 289 · Change · +2 / -2</summary>

```diff
@@ -12657,10 +12657,10 @@
 function ⟦2-char-id⟧() {
   if (!⟦2-char-id⟧) {
     var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧.c.find((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧)),
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧.d.find((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧)),
       ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
         var ⟦2-char-id⟧, ⟦2-char-id⟧;
-        return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.content) && void 0 !== ⟦2-char-id⟧ ? cJ : ""
+        return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.content) && void 0 !== ⟦2-char-id⟧ ? TB : ""
       };
     ⟦2-char-id⟧ = new ⟦2-char-id⟧({
       apiReference: ⟦2-char-id⟧("apiReference"),
```

</details>

<details>
<summary>Hunk 290 · Change · +2 / -2</summary>

```diff
@@ -12668,8 +12668,8 @@
       clientOptions: ⟦2-char-id⟧("clientOptions"),
       snippets: ⟦2-char-id⟧("snippets"),
       howTo: ⟦2-char-id⟧("howTo"),
-      itemNames: null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧("itemNames")) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.raw) && void 0 !== ⟦2-char-id⟧ ? JJ : "",
-      blockNames: null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧("blockNames")) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.raw) && void 0 !== ⟦2-char-id⟧ ? ZJ : "",
+      itemNames: null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧("itemNames")) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.raw) && void 0 !== ⟦2-char-id⟧ ? BB : "",
+      blockNames: null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧("blockNames")) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.raw) && void 0 !== ⟦2-char-id⟧ ? dB : "",
       mobSettings: ⟦2-char-id⟧("mobSettings")
     })
   }
```

</details>

<details>
<summary>Hunk 291 · Change · +1 / -1</summary>

```diff
@@ -12711,7 +12711,7 @@
     ref: ⟦2-char-id⟧,
     className: "WorldCodeAiChips WorldCodeAiFollowUps",
     children: ⟦2-char-id⟧.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.createElement)("button", {
-      ...⟦2-char-id⟧.d,
+      ...⟦2-char-id⟧.f,
       key: ⟦2-char-id⟧,
       className: "WorldCodeAiChip",
       onClick: () => {
```

</details>

<details>
<summary>Hunk 292 · Change · +2 / -2</summary>

```diff
@@ -12752,10 +12752,10 @@
 
 function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
   var ⟦2-char-id⟧;
-  return Object.entries(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.leftFiles) && void 0 !== ⟦2-char-id⟧ ? ZJ : {}).every((⟦2-char-id⟧ => {
+  return Object.entries(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.leftFiles) && void 0 !== ⟦2-char-id⟧ ? dB : {}).every((⟦2-char-id⟧ => {
     var ⟦2-char-id⟧;
     let [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
-    return (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? ZJ : "") === ⟦2-char-id⟧
+    return (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? dB : "") === ⟦2-char-id⟧
   }))
 }
 const ⟦2-char-id⟧ = "Check your code: go through my request part by part and play it in your head as each player, from the start: what do they see and when, and what happens the first time, the last time, and with things that shouldn't count? Only something that stops my request working is wrong: keep everything else as it is (numbers, starting values, how it works) and add no new rules or limits. If anything is wrong, send the fixed file, after playing the normal case through once more with your change. If it's all right, say in one sentence that you played it through and found no mistakes, that they should still try it in their world because you can miss things, and send no file.";
```

</details>

<details>
<summary>Hunk 293 · Change · +3 / -3</summary>

```diff
@@ -12783,15 +12783,15 @@
   const ⟦2-char-id⟧ = "offered" === ⟦2-char-id⟧.status && ⟦2-char-id⟧ ? "stale" : ⟦2-char-id⟧.status,
     [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(⟦2-char-id⟧),
     [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1),
-    ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.warnings) && void 0 !== ⟦2-char-id⟧ ? cJ : [],
+    ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.warnings) && void 0 !== ⟦2-char-id⟧ ? TB : [],
     ⟦2-char-id⟧ = ⟦2-char-id⟧ && ("offered" === ⟦2-char-id⟧ || "applied" === ⟦2-char-id⟧) && ⟦2-char-id⟧ && ⟦2-char-id⟧.length > 0 && !⟦2-char-id⟧.warningsSentBack,
     ⟦2-char-id⟧ = "applied" === ⟦2-char-id⟧,
-    ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.swappedTo) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[0]) && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧ ? null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = /"([^"]+)"/.exec(⟦2-char-id⟧[0])) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[1]) && void 0 !== ⟦2-char-id⟧ ? qJ : null === (⟦2-char-id⟧ = /^api\.[\w$]+/.exec(⟦2-char-id⟧[0])) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[0] : void 0,
+    ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.swappedTo) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[0]) && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧ ? null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = /"([^"]+)"/.exec(⟦2-char-id⟧[0])) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[1]) && void 0 !== ⟦2-char-id⟧ ? YB : null === (⟦2-char-id⟧ = /^api\.[\w$]+/.exec(⟦2-char-id⟧[0])) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[0] : void 0,
     ⟦2-char-id⟧ = ⟦2-char-id⟧.every((⟦2-char-id⟧ => /never true|no block is ever called that/.test(⟦2-char-id⟧))),
     ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useMemo)((() => {
       var ⟦2-char-id⟧;
       const [⟦2-char-id⟧] = ⟦2-char-id⟧.changes;
-      return new Map((null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.warnings) && void 0 !== ⟦2-char-id⟧ ? JJ : []).map((⟦2-char-id⟧ => [⟦2-char-id⟧, 1 === ⟦2-char-id⟧.changes.length && ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) : void 0])))
+      return new Map((null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.warnings) && void 0 !== ⟦2-char-id⟧ ? BB : []).map((⟦2-char-id⟧ => [⟦2-char-id⟧, 1 === ⟦2-char-id⟧.changes.length && ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) : void 0])))
     }), [⟦2-char-id⟧.warnings, ⟦2-char-id⟧.changes]),
     ⟦2-char-id⟧ = 1 === ⟦2-char-id⟧.length ? ⟦2-char-id⟧.get(⟦2-char-id⟧[0]) : void 0,
     [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(new Set),
```

</details>

<details>
<summary>Hunk 294 · Change · +1 / -1</summary>

```diff
@@ -12799,7 +12799,7 @@
   (0, ⟦2-char-id⟧.useEffect)((() => {
     null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧)
   }), [⟦2-char-id⟧, ⟦2-char-id⟧]), (0, ⟦2-char-id⟧.useEffect)((() => {
-    ⟦2-char-id⟧((⟦2-char-id⟧ => 0 === ⟦2-char-id⟧.size ? JJ : new Set))
+    ⟦2-char-id⟧((⟦2-char-id⟧ => 0 === ⟦2-char-id⟧.size ? BB : new Set))
   }), [⟦2-char-id⟧.changes]);
   const ⟦2-char-id⟧ = "offered" === ⟦2-char-id⟧ && ⟦2-char-id⟧ && ⟦2-char-id⟧.id >= 0,
     ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useMemo)((() => new Map(⟦2-char-id⟧.changes.map((⟦2-char-id⟧ => [⟦2-char-id⟧.path, ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)])))), [⟦2-char-id⟧.changes, ⟦2-char-id⟧]),
```

</details>

<details>
<summary>Hunk 295 · Change · +2 / -2</summary>

```diff
@@ -12811,13 +12811,13 @@
     ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useMemo)((() => {
       if (0 !== ⟦2-char-id⟧.size) return ⟦2-char-id⟧.changes.flatMap((⟦2-char-id⟧ => {
         var ⟦2-char-id⟧;
-        const ⟦2-char-id⟧ = new Set((null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧.path)) && void 0 !== ⟦2-char-id⟧ ? cJ : []).filter((⟦2-char-id⟧ => !⟦2-char-id⟧.has(`${JJ.path}:${cJ.index}`))).map((⟦2-char-id⟧ => ⟦2-char-id⟧.index))),
+        const ⟦2-char-id⟧ = new Set((null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧.path)) && void 0 !== ⟦2-char-id⟧ ? TB : []).filter((⟦2-char-id⟧ => !⟦2-char-id⟧.has(`${BB.path}:${TB.index}`))).map((⟦2-char-id⟧ => ⟦2-char-id⟧.index))),
           ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.before, ⟦2-char-id⟧.after),
               ⟦2-char-id⟧ = ⟦2-char-id⟧.flatMap((⟦2-char-id⟧ => "same" === ⟦2-char-id⟧.kind ? [⟦2-char-id⟧.text] : ⟦2-char-id⟧.has(⟦2-char-id⟧.index) ? ⟦2-char-id⟧.added : ⟦2-char-id⟧.removed));
             if (0 === ⟦2-char-id⟧.length) return "";
             const ⟦2-char-id⟧ = (⟦2-char-id⟧.every((⟦2-char-id⟧ => "same" === ⟦2-char-id⟧.kind || ⟦2-char-id⟧.has(⟦2-char-id⟧.index))) ? ⟦2-char-id⟧.after : ⟦2-char-id⟧.before).endsWith("\n") ? "\n" : "";
-            return `${FJ.join("\n")}${UJ}`
+            return `${VB.join("\n")}${yB}`
           }(⟦2-char-id⟧, ⟦2-char-id⟧);
         return ⟦2-char-id⟧ === ⟦2-char-id⟧.before ? [] : [{
           ...⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 296 · Change · +1 / -1</summary>

```diff
@@ -12839,7 +12839,7 @@
     className: "WorldCodeAiToolCard",
     children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
       className: "WorldCodeAiChangeLog",
-      title: ⟦2-char-id⟧ ? `Editing code: ${Fc}` : `Code change: ${Fc}`,
+      title: ⟦2-char-id⟧ ? `Editing code: ${VT}` : `Code change: ${VT}`,
       isCalm: !0,
       isElsewhere: !!⟦2-char-id⟧,
       isOpen: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 297 · Change · +2 / -2</summary>

```diff
@@ -12859,10 +12859,10 @@
               added: ⟦2-char-id⟧,
               removed: ⟦2-char-id⟧
             }
-          }(⟦2-char-id⟧ ? null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.path === ⟦2-char-id⟧.path))) && void 0 !== ⟦2-char-id⟧ ? cJ : {
+          }(⟦2-char-id⟧ ? null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.path === ⟦2-char-id⟧.path))) && void 0 !== ⟦2-char-id⟧ ? TB : {
             ...⟦2-char-id⟧,
             after: ⟦2-char-id⟧.before
-          } : ⟦2-char-id⟧), ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧.path)) && void 0 !== ⟦2-char-id⟧ ? ZJ : [], ⟦2-char-id⟧ = "offered" !== ⟦2-char-id⟧ && "applied" !== ⟦2-char-id⟧ || "" === ⟦2-char-id⟧.before ? [] : function(⟦2-char-id⟧, ⟦2-char-id⟧) {
+          } : ⟦2-char-id⟧), ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧.path)) && void 0 !== ⟦2-char-id⟧ ? dB : [], ⟦2-char-id⟧ = "offered" !== ⟦2-char-id⟧ && "applied" !== ⟦2-char-id⟧ || "" === ⟦2-char-id⟧.before ? [] : function(⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
             return [...⟦2-char-id⟧(⟦2-char-id⟧)].filter((⟦2-char-id⟧ => !⟦2-char-id⟧.has(⟦2-char-id⟧)))
           }(⟦2-char-id⟧.before, ⟦2-char-id⟧.after);
```

</details>

<details>
<summary>Hunk 298 · Change · +1 / -1</summary>

```diff
@@ -12875,7 +12875,7 @@
                 children: ⟦2-char-id⟧.path
               }), ⟦2-char-id⟧ > 0 && (0, ⟦2-char-id⟧.jsx)("span", {
                 className: "WorldCodeAiAdded",
-                children: 1 === ⟦2-char-id⟧ ? "1 line added" : `${FJ} lines added`
+                children: 1 === ⟦2-char-id⟧ ? "1 line added" : `${VB} lines added`
               }), ⟦2-char-id⟧ > 0 && (0, ⟦2-char-id⟧.jsxs)("span", {
                 className: "WorldCodeAiRemoved",
                 children: [⟦2-char-id⟧, " removed"]
```

</details>

<details>
<summary>Hunk 299 · Change · +3 / -3</summary>

```diff
@@ -12883,9 +12883,9 @@
             }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("ul", {
               className: "WorldCodeAiHunks",
               children: ⟦2-char-id⟧.map((⟦2-char-id⟧ => {
-                const ⟦2-char-id⟧ = `${JJ.path}:${cJ.index}`,
-                  ⟦2-char-id⟧ = [⟦2-char-id⟧.added.length > 0 ? `+${cJ.added.length}` : "", ⟦2-char-id⟧.removed.length > 0 ? `\u2212${cJ.removed.length}` : ""].filter(Boolean).join(" "),
-                  ⟦2-char-id⟧ = [⟦2-char-id⟧.added.length > 0 ? `${cJ.added.length} ${1===cJ.added.length?"line":"lines"} added` : "", ⟦2-char-id⟧.removed.length > 0 ? `${cJ.removed.length} taken out` : ""].filter(Boolean).join(", ");
+                const ⟦2-char-id⟧ = `${BB.path}:${TB.index}`,
+                  ⟦2-char-id⟧ = [⟦2-char-id⟧.added.length > 0 ? `+${TB.added.length}` : "", ⟦2-char-id⟧.removed.length > 0 ? `\u2212${TB.removed.length}` : ""].filter(Boolean).join(" "),
+                  ⟦2-char-id⟧ = [⟦2-char-id⟧.added.length > 0 ? `${TB.added.length} ${1===TB.added.length?"line":"lines"} added` : "", ⟦2-char-id⟧.removed.length > 0 ? `${TB.removed.length} taken out` : ""].filter(Boolean).join(", ");
                 return (0, ⟦2-char-id⟧.jsx)("li", {
                   children: (0, ⟦2-char-id⟧.jsxs)("label", {
                     children: [(0, ⟦2-char-id⟧.jsx)("input", {
```

</details>

<details>
<summary>Hunk 300 · Change · +1 / -1</summary>

```diff
@@ -12911,7 +12911,7 @@
                       className: "WorldCodeAiHunkCount",
                       title: ⟦2-char-id⟧,
                       "aria-label": ⟦2-char-id⟧,
-                      children: `${FJ} ${cJ.added.length+cJ.removed.length===1?"line":"lines"}`
+                      children: `${VB} ${TB.added.length+TB.removed.length===1?"line":"lines"}`
                     })]
                   })
                 }, ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 301 · Change · +1 / -1</summary>

```diff
@@ -12927,7 +12927,7 @@
               onClick: () => {
                 ⟦2-char-id⟧(!⟦2-char-id⟧)
               },
-              children: ⟦2-char-id⟧ ? `Hide the ${eJ.length} parts` : `Show the ${eJ.length} parts that went in`
+              children: ⟦2-char-id⟧ ? `Hide the ${pB.length} parts` : `Show the ${pB.length} parts that went in`
             }), ⟦2-char-id⟧ && ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("ul", {
               className: "WorldCodeAiHunks WorldCodeAiHunks-done",
               children: ⟦2-char-id⟧.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsx)("li", {
```

</details>

<details>
<summary>Hunk 302 · Change · +1 / -1</summary>

```diff
@@ -12940,7 +12940,7 @@
                     children: ⟦2-char-id⟧.detail
                   })]
                 })
-              }, `${JJ.path}:${cJ.index}`)))
+              }, `${BB.path}:${TB.index}`)))
             }), ⟦2-char-id⟧.why && !⟦2-char-id⟧ && !(⟦2-char-id⟧ && ⟦2-char-id⟧) && (0, ⟦2-char-id⟧.jsx)("ul", {
               className: "WorldCodeAiChangeWhy",
               children: ⟦2-char-id⟧.why.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsx)("li", {
```

</details>

<details>
<summary>Hunk 303 · Change · +2 / -2</summary>

```diff
@@ -12950,9 +12950,9 @@
               className: "WorldCodeAiChangeTakenOut",
               children: ["applied" === ⟦2-char-id⟧ ? "It took out " : "It also takes out ", ⟦2-char-id⟧.slice(0, 6).map((⟦2-char-id⟧ => {
                 var ⟦2-char-id⟧;
-                const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧(⟦2-char-id⟧);
+                const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧(⟦2-char-id⟧);
                 return ⟦2-char-id⟧.charAt(0).toLowerCase() + ⟦2-char-id⟧.slice(1)
-              })).join(", "), ⟦2-char-id⟧.length > 6 ? ` and ${AJ.length-6} more` : "", ".", " ", (0, ⟦2-char-id⟧.jsx)("code", {
+              })).join(", "), ⟦2-char-id⟧.length > 6 ? ` and ${JB.length-6} more` : "", ".", " ", (0, ⟦2-char-id⟧.jsx)("code", {
                 className: "WorldCodeAiHunkCode",
                 children: ⟦2-char-id⟧.slice(0, 6).join(", ")
               })]
```

</details>

<details>
<summary>Hunk 304 · Change · +4 / -4</summary>

```diff
@@ -12977,17 +12977,17 @@
         className: "WorldCodeAiWarning",
         children: [(0, ⟦2-char-id⟧.jsx)("p", {
           className: "WorldCodeAiWarningTitle",
-          children: ⟦2-char-id⟧ ? 1 === ⟦2-char-id⟧.length ? `${OJ?`Line ${⟦2-char-id⟧.line}`:"This line"} ${pJ?"will":"would"} never work:` : `${PJ.length} lines ${pJ?"will":"would"} never work:` : 1 === ⟦2-char-id⟧.length ? `${OJ?`Line ${⟦2-char-id⟧.line}`:"This line"} ${pJ?"will":"would"} break:` : `${PJ.length} lines ${pJ?"will":"would"} break:`
-        }), (⟦2-char-id⟧ ? PJ : ⟦2-char-id⟧.slice(0, 1)).map((⟦2-char-id⟧ => {
+          children: ⟦2-char-id⟧ ? 1 === ⟦2-char-id⟧.length ? `${XB?`Line ${⟦2-char-id⟧.line}`:"This line"} ${QB?"will":"would"} never work:` : `${SB.length} lines ${QB?"will":"would"} never work:` : 1 === ⟦2-char-id⟧.length ? `${XB?`Line ${⟦2-char-id⟧.line}`:"This line"} ${QB?"will":"would"} break:` : `${SB.length} lines ${QB?"will":"would"} break:`
+        }), (⟦2-char-id⟧ ? SB : ⟦2-char-id⟧.slice(0, 1)).map((⟦2-char-id⟧ => {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧);
           return (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
             children: [⟦2-char-id⟧ && !⟦2-char-id⟧(⟦2-char-id⟧) && (0, ⟦2-char-id⟧.jsxs)("p", {
               className: "WorldCodeAiWarningWhere",
-              children: [⟦2-char-id⟧.length > 1 && `Line ${cJ.line}: `, (0, ⟦2-char-id⟧.jsx)("code", {
+              children: [⟦2-char-id⟧.length > 1 && `Line ${TB.line}: `, (0, ⟦2-char-id⟧.jsx)("code", {
                 children: ⟦2-char-id⟧.text
               })]
             }), (0, ⟦2-char-id⟧.jsx)("p", {
-              children: !⟦2-char-id⟧ || 1 !== ⟦2-char-id⟧.length && ⟦2-char-id⟧(⟦2-char-id⟧) ? JJ : ⟦2-char-id⟧(⟦2-char-id⟧)
+              children: !⟦2-char-id⟧ || 1 !== ⟦2-char-id⟧.length && ⟦2-char-id⟧(⟦2-char-id⟧) ? BB : ⟦2-char-id⟧(⟦2-char-id⟧)
             })]
           }, ⟦2-char-id⟧)
         })), !⟦2-char-id⟧ && ⟦2-char-id⟧.length > 1 && (0, ⟦2-char-id⟧.jsxs)("button", {
```

</details>

<details>
<summary>Hunk 305 · Change · +1 / -1</summary>

```diff
@@ -12998,7 +12998,7 @@
           children: ["Show ", ⟦2-char-id⟧.length - 1, " more"]
         })]
       }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("button", {
-        ...⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.warnings) && void 0 !== ⟦2-char-id⟧ ? hJ : []) ? {} : ⟦2-char-id⟧.d,
+        ...⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.warnings) && void 0 !== ⟦2-char-id⟧ ? kB : []) ? {} : ⟦2-char-id⟧.f,
         className: "WorldCodeAiPrimaryButton",
         disabled: ⟦2-char-id⟧,
         onClick: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 306 · Change · +1 / -1</summary>

```diff
@@ -13010,7 +13010,7 @@
         onClick: () => {
           ⟦2-char-id⟧(⟦2-char-id⟧)
         },
-        children: ⟦2-char-id⟧ ? ⟦2-char-id⟧.codeBlock ? "Apply in that code block" : "Apply in World Code" : ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧ ? `Apply ${lJ} of ${LJ} changes` : ⟦2-char-id⟧ ? "Apply anyway" : "Apply to my code"
+        children: ⟦2-char-id⟧ ? ⟦2-char-id⟧.codeBlock ? "Apply in that code block" : "Apply in World Code" : ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧ ? `Apply ${eB} of ${xB} changes` : ⟦2-char-id⟧ ? "Apply anyway" : "Apply to my code"
       }), "offered" === ⟦2-char-id⟧ && !⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("span", {
         className: "WorldCodeAiHint",
         children: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.codeBlock ? "You can't edit that code block." : "You can't edit this world's code."
```

</details>

<details>
<summary>Hunk 307 · Change · +1 / -1</summary>

```diff
@@ -13024,7 +13024,7 @@
           onClick: ⟦2-char-id⟧,
           children: "Try it in my world"
         }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("button", {
-          ...⟦2-char-id⟧.d,
+          ...⟦2-char-id⟧.f,
           className: "WorldCodeAiSecondaryButton",
           disabled: ⟦2-char-id⟧,
           onClick: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 308 · Change · +1 / -1</summary>

```diff
@@ -13125,7 +13125,7 @@
   return (0, ⟦2-char-id⟧.jsxs)("div", {
     className: "WorldCodeAiFailedEdits",
     children: [(0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧, {
-      title: ⟦2-char-id⟧ ? "That change didn't work, so your code is the same." : 1 === ⟦2-char-id⟧.length ? "One part didn't work, so it's left out." : `${ZJ.length} parts didn't work, so they're left out.`,
+      title: ⟦2-char-id⟧ ? "That change didn't work, so your code is the same." : 1 === ⟦2-char-id⟧.length ? "One part didn't work, so it's left out." : `${dB.length} parts didn't work, so they're left out.`,
       defaultOpen: ⟦2-char-id⟧,
       isElsewhere: ⟦2-char-id⟧,
       children: [⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
```

</details>

<details>
<summary>Hunk 309 · Change · +1 / -1</summary>

```diff
@@ -13133,7 +13133,7 @@
           children: "The closest bit in your code:"
         }), (0, ⟦2-char-id⟧.jsx)("pre", {
           className: "WorldCodeAiFailedLines",
-          children: ⟦2-char-id⟧.text.split("\n").length > 4 ? `${jJ.text.split("\n").slice(0,4).join("\n")}\n\u2026` : ⟦2-char-id⟧.text
+          children: ⟦2-char-id⟧.text.split("\n").length > 4 ? `${gB.text.split("\n").slice(0,4).join("\n")}\n\u2026` : ⟦2-char-id⟧.text
         })]
       }), !⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("p", {
         children: "Try asking for it again, maybe in a different way."
```

</details>

<details>
<summary>Hunk 310 · Change · +1 / -1</summary>

```diff
@@ -13141,7 +13141,7 @@
     }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)("div", {
       className: "WorldCodeAiFailedRetry",
       children: [(0, ⟦2-char-id⟧.jsx)("button", {
-        ...⟦2-char-id⟧.d,
+        ...⟦2-char-id⟧.f,
         className: "WorldCodeAiSecondaryButton",
         onClick: ⟦2-char-id⟧,
         children: "Ask the AI to try again"
```

</details>

<details>
<summary>Hunk 311 · Change · +2 / -2</summary>

```diff
@@ -13179,12 +13179,12 @@
 }
 
 function ⟦2-char-id⟧(⟦2-char-id⟧) {
-  return `Add this to my World Code:\n\`\`\`js\n${JJ.join("\n").replace(/\s*$/,"\n")}\`\`\``
+  return `Add this to my World Code:\n\`\`\`js\n${BB.join("\n").replace(/\s*$/,"\n")}\`\`\``
 }
 
 function ⟦2-char-id⟧(⟦2-char-id⟧) {
   const ⟦2-char-id⟧ = Math.ceil(⟦2-char-id⟧ / 1⟦2-char-id⟧);
-  return `${Math.floor(cJ/60)}:${String(cJ%60).padStart(2,"0")}`
+  return `${Math.floor(TB/60)}:${String(TB%60).padStart(2,"0")}`
 }
 
 function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 312 · Change · +2 / -2</summary>

```diff
@@ -13196,13 +13196,13 @@
   let {
     busy: ⟦2-char-id⟧
   } = ⟦2-char-id⟧;
-  const ⟦2-char-id⟧ = (⟦2-char-id⟧ = ⟦2-char-id⟧.phase, ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.reasoningChars) && void 0 !== ⟦2-char-id⟧ ? cJ : 0, "screening" === ⟦2-char-id⟧ ? 3 : "writing" === ⟦2-char-id⟧ ? 2 : "thinking" === ⟦2-char-id⟧ && ⟦2-char-id⟧ >= 400 ? 1 : 0);
+  const ⟦2-char-id⟧ = (⟦2-char-id⟧ = ⟦2-char-id⟧.phase, ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.reasoningChars) && void 0 !== ⟦2-char-id⟧ ? TB : 0, "screening" === ⟦2-char-id⟧ ? 3 : "writing" === ⟦2-char-id⟧ ? 2 : "thinking" === ⟦2-char-id⟧ && ⟦2-char-id⟧ >= 400 ? 1 : 0);
   var ⟦2-char-id⟧, ⟦2-char-id⟧;
   return (0, ⟦2-char-id⟧.jsx)("ol", {
     className: "WorldCodeAiSteps",
     children: ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => (0, ⟦2-char-id⟧.jsx)("li", {
       className: ⟦2-char-id⟧()(⟦2-char-id⟧ < ⟦2-char-id⟧ && "WorldCodeAiStep-done", ⟦2-char-id⟧ === ⟦2-char-id⟧ && "WorldCodeAiStep-current"),
-      children: ⟦2-char-id⟧ < ⟦2-char-id⟧ ? `\u2713 ${JJ}` : ⟦2-char-id⟧
+      children: ⟦2-char-id⟧ < ⟦2-char-id⟧ ? `\u2713 ${BB}` : ⟦2-char-id⟧
     }, ⟦2-char-id⟧)))
   })
 }
```

</details>

<details>
<summary>Hunk 313 · Change · +1 / -1</summary>

```diff
@@ -13247,7 +13247,7 @@
       [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)((() => ⟦2-char-id⟧.entries)),
       ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(!0),
       ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useCallback)((⟦2-char-id⟧ => {
-        const ⟦2-char-id⟧ = "function" === typeof ⟦2-char-id⟧ ? JJ : () => ⟦2-char-id⟧;
+        const ⟦2-char-id⟧ = "function" === typeof ⟦2-char-id⟧ ? BB : () => ⟦2-char-id⟧;
         ⟦2-char-id⟧.current ? ⟦2-char-id⟧(⟦2-char-id⟧) : ⟦2-char-id⟧.setEntries ? ⟦2-char-id⟧.setEntries(⟦2-char-id⟧) : ⟦2-char-id⟧.entries = ⟦2-char-id⟧(⟦2-char-id⟧.entries)
       }), [⟦2-char-id⟧]);
     (0, ⟦2-char-id⟧.useEffect)((() => (⟦2-char-id⟧.current = !0, ⟦2-char-id⟧.setEntries = ⟦2-char-id⟧, () => {
```

</details>

<details>
<summary>Hunk 314 · Change · +1 / -1</summary>

```diff
@@ -13256,7 +13256,7 @@
     const [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)([]), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)([]), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)("settings"), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(function() {
       try {
         var ⟦2-char-id⟧;
-        const ⟦2-char-id⟧ = JSON.parse(null !== (⟦2-char-id⟧ = localStorage.getItem(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? JJ : "{}");
+        const ⟦2-char-id⟧ = JSON.parse(null !== (⟦2-char-id⟧ = localStorage.getItem(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? BB : "{}");
         return "object" !== typeof ⟦2-char-id⟧ || null === ⟦2-char-id⟧ ? {} : Object.fromEntries(Object.entries(⟦2-char-id⟧).filter((⟦2-char-id⟧ => {
           let [, ⟦2-char-id⟧] = ⟦2-char-id⟧;
           return Array.isArray(⟦2-char-id⟧) && ⟦2-char-id⟧.every((⟦2-char-id⟧ => "number" === typeof ⟦2-char-id⟧))
```

</details>

<details>
<summary>Hunk 315 · Change · +1 / -1</summary>

```diff
@@ -13273,7 +13273,7 @@
       [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)([]),
       [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null),
       [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(new Set),
-      [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.dismissedErrorCounts.get(⟦2-char-id⟧.key)) && void 0 !== ⟦2-char-id⟧ ? cJ : 0),
+      [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.dismissedErrorCounts.get(⟦2-char-id⟧.key)) && void 0 !== ⟦2-char-id⟧ ? TB : 0),
       [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1),
       [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(Date.now),
       ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null),
```

</details>

<details>
<summary>Hunk 316 · Change · +2 / -2</summary>

```diff
@@ -13281,8 +13281,8 @@
       ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)([]),
       [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(0),
       [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null),
-      ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧),
-      ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? ZZ : null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.entryId,
+      ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.q)(⟦2-char-id⟧),
+      ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? dd : null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.entryId,
       ⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧)),
       ⟦2-char-id⟧ = (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.target.key) === ⟦2-char-id⟧.key && (null !== ⟦2-char-id⟧ || void 0 === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.endedAt)),
       ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
```

</details>

<details>
<summary>Hunk 317 · Change · +1 / -1</summary>

```diff
@@ -13334,7 +13334,7 @@
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.querySelector(".WorldCodeAiDiff-marked"),
             ⟦2-char-id⟧ = ⟦2-char-id⟧.getBoundingClientRect().height,
             ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧) + 2 * ⟦2-char-id⟧ + ⟦2-char-id⟧.offsetHeight - ⟦2-char-id⟧.clientHeight : ⟦2-char-id⟧(⟦2-char-id⟧) + 3 * ⟦2-char-id⟧ + ⟦2-char-id⟧.offsetHeight - ⟦2-char-id⟧.clientHeight;
-          ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, Math.min(⟦2-char-id⟧, ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧) - ZJ : ⟦2-char-id⟧(⟦2-char-id⟧)))
+          ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, Math.min(⟦2-char-id⟧, ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧) - dB : ⟦2-char-id⟧(⟦2-char-id⟧)))
         } else if (⟦2-char-id⟧ && ⟦2-char-id⟧) {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.querySelectorAll(".WorldCodeAiChangeWhy li"),
             ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.length - 1];
```

</details>

<details>
<summary>Hunk 318 · Change · +1 / -1</summary>

```diff
@@ -13395,7 +13395,7 @@
         ⟦2-char-id⟧ = !1, ⟦2-char-id⟧()
       }
     }), [⟦2-char-id⟧]);
-    const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.findLast((⟦2-char-id⟧ => ⟦2-char-id⟧.target.key === ⟦2-char-id⟧.key))) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.retryAt) && void 0 !== ⟦2-char-id⟧ ? UJ : 0,
+    const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.findLast((⟦2-char-id⟧ => ⟦2-char-id⟧.target.key === ⟦2-char-id⟧.key))) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.retryAt) && void 0 !== ⟦2-char-id⟧ ? yB : 0,
       ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧),
       ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ || ⟦2-char-id⟧ > ⟦2-char-id⟧ || ⟦2-char-id⟧ > ⟦2-char-id⟧;
     (0, ⟦2-char-id⟧.useEffect)((() => {
```

</details>

<details>
<summary>Hunk 319 · Change · +1 / -1</summary>

```diff
@@ -13425,7 +13425,7 @@
             }
           }
         }
-        return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧(⟦2-char-id⟧)
+        return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧(⟦2-char-id⟧)
       }(⟦2-char-id⟧, ⟦2-char-id⟧) : {
         text: ""
       }), [⟦2-char-id⟧, ⟦2-char-id⟧]),
```

</details>

<details>
<summary>Hunk 320 · Change · +1 / -1</summary>

```diff
@@ -13464,7 +13464,7 @@
         let ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
         const {
           check: ⟦2-char-id⟧ = void 0 === ⟦2-char-id⟧,
-          about: ⟦2-char-id⟧ = (null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧.trim()),
+          about: ⟦2-char-id⟧ = (null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧.trim()),
           planStep: ⟦2-char-id⟧,
           wordsOnly: ⟦2-char-id⟧ = !1,
           asked: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 321 · Change · +1 / -1</summary>

```diff
@@ -13488,7 +13488,7 @@
             if (null !== await ⟦2-char-id⟧.refresh() || null === ⟦2-char-id⟧.getPlayer()) return;
             const {
               NotificationProvider: ⟦2-char-id⟧
-            } = await Promise.resolve().then((() => ⟦2-char-id⟧(1247)));
+            } = await Promise.resolve().then((() => ⟦2-char-id⟧(1235)));
             ⟦2-char-id⟧ = ⟦2-char-id⟧.showPromptPopup({
               title: "aiHelperDataSharing:title",
               subtitle: "aiHelperDataSharing:subtitle",
```

</details>

<details>
<summary>Hunk 322 · Change · +2 / -2</summary>

```diff
@@ -13503,11 +13503,11 @@
             ⟦2-char-id⟧ = null, ⟦2-char-id⟧ = !1
           }
         })()));
-        const ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? DJ : ⟦2-char-id⟧ && !⟦2-char-id⟧ && void 0 === ⟦2-char-id⟧ && void 0 === ⟦2-char-id⟧;
+        const ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? LB : ⟦2-char-id⟧ && !⟦2-char-id⟧ && void 0 === ⟦2-char-id⟧ && void 0 === ⟦2-char-id⟧;
         if (!⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧) && ⟦2-char-id⟧((() => {
             ⟦2-char-id⟧.current(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
           }))) return;
-        const ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? EJ : ⟦2-char-id⟧;
+        const ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? tB : ⟦2-char-id⟧;
         void 0 === ⟦2-char-id⟧ && ⟦2-char-id⟧ && ⟦2-char-id⟧(!1), ⟦2-char-id⟧();
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.activeKey(),
           ⟦2-char-id⟧ = ⟦2-char-id⟧ ? null : ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 323 · Change · +3 / -3</summary>

```diff
@@ -13519,12 +13519,12 @@
               if ("user" === ⟦2-char-id⟧[⟦2-char-id⟧].role) return ⟦2-char-id⟧;
             return -1
           })(⟦2-char-id⟧, ⟦2-char-id⟧),
-          ⟦2-char-id⟧ = (⟦2-char-id⟧ < 0 ? Uc : ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧)).filter((⟦2-char-id⟧ => !⟦2-char-id⟧.isNotice && !⟦2-char-id⟧.leftOut && ⟦2-char-id⟧(⟦2-char-id⟧))).slice(-4).map((⟦2-char-id⟧ => ({
+          ⟦2-char-id⟧ = (⟦2-char-id⟧ < 0 ? yT : ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧)).filter((⟦2-char-id⟧ => !⟦2-char-id⟧.isNotice && !⟦2-char-id⟧.leftOut && ⟦2-char-id⟧(⟦2-char-id⟧))).slice(-4).map((⟦2-char-id⟧ => ({
             role: ⟦2-char-id⟧.role,
-            text: ⟦2-char-id⟧.question ? `${JJ.text}\n${JJ.question.question}` : ⟦2-char-id⟧.text
+            text: ⟦2-char-id⟧.question ? `${BB.text}\n${BB.question.question}` : ⟦2-char-id⟧.text
           }))),
           ⟦2-char-id⟧ = void 0 === ⟦2-char-id⟧,
-          ⟦2-char-id⟧ = void 0 === ⟦2-char-id⟧ ? void 0 === ⟦2-char-id⟧ ? KJ : void 0 : null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? qJ : void 0,
+          ⟦2-char-id⟧ = void 0 === ⟦2-char-id⟧ ? void 0 === ⟦2-char-id⟧ ? sB : void 0 : null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? YB : void 0,
           ⟦2-char-id⟧ = void 0 !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧,
           ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧)) : void 0;
         let ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 324 · Change · +1 / -1</summary>

```diff
@@ -13538,7 +13538,7 @@
           const ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧ > 0;
           ⟦2-char-id⟧ = ⟦2-char-id⟧({
             role: "user",
-            text: ⟦2-char-id⟧ ? KJ : null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧,
+            text: ⟦2-char-id⟧ ? sB : null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧,
             changes: [],
             status: "offered",
             about: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 325 · Change · +1 / -1</summary>

```diff
@@ -13609,7 +13609,7 @@
               })
             },
             ⟦2-char-id⟧ = async () => {
-              if (!⟦2-char-id⟧ && !⟦2-char-id⟧) return null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? VJ : ⟦2-char-id⟧;
+              if (!⟦2-char-id⟧ && !⟦2-char-id⟧) return null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? fB : ⟦2-char-id⟧;
               const ⟦2-char-id⟧ = Date.now();
               ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧({
                 phase: "checking",
```

</details>

<details>
<summary>Hunk 326 · Change · +1 / -1</summary>

```diff
@@ -13651,7 +13651,7 @@
                 }
               }), null) : "personalInfo" === ⟦2-char-id⟧ || "unsafe" === ⟦2-char-id⟧ ? (⟦2-char-id⟧(⟦2-char-id⟧), null) : ⟦2-char-id⟧
             };
-          let ⟦2-char-id⟧ = ⟦2-char-id⟧ ? null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? VJ : KJ : await ⟦2-char-id⟧();
+          let ⟦2-char-id⟧ = ⟦2-char-id⟧ ? null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? fB : sB : await ⟦2-char-id⟧();
           if (null === ⟦2-char-id⟧) return;
           const ⟦2-char-id⟧ = ⟦2-char-id⟧ ? {
               ...⟦2-char-id⟧.current,
```

</details>

<details>
<summary>Hunk 327 · Change · +3 / -3</summary>

```diff
@@ -13672,15 +13672,15 @@
               looksUpDocs: ⟦2-char-id⟧,
               about: ⟦2-char-id⟧ ? void 0 : {
                 notes: ⟦2-char-id⟧,
-                outline: (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, new Set(⟦2-char-id⟧().callbackNames())), [⟦2-char-id⟧.callbacks.length > 0 ? `Callbacks: ${Xc.callbacks.join(", ")}` : "", ⟦2-char-id⟧.commands.length > 0 ? `Commands: ${Xc.commands.join(", ")}` : "", ⟦2-char-id⟧.functions.length > 0 ? `Functions: ${Xc.functions.join(", ")}` : ""].filter((⟦2-char-id⟧ => "" !== ⟦2-char-id⟧)).join("\n")),
+                outline: (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, new Set(⟦2-char-id⟧().callbackNames())), [⟦2-char-id⟧.callbacks.length > 0 ? `Callbacks: ${lT.callbacks.join(", ")}` : "", ⟦2-char-id⟧.commands.length > 0 ? `Commands: ${lT.commands.join(", ")}` : "", ⟦2-char-id⟧.functions.length > 0 ? `Functions: ${lT.functions.join(", ")}` : ""].filter((⟦2-char-id⟧ => "" !== ⟦2-char-id⟧)).join("\n")),
                 canRemember: ⟦2-char-id⟧.length < 8
               }
             },
             ⟦2-char-id⟧ = new Map,
             ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
               var ⟦2-char-id⟧;
-              const ⟦2-char-id⟧ = `${JJ.format} ${JJ.nativeTools}`,
-                ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧(⟦2-char-id⟧(), ⟦2-char-id⟧, ⟦2-char-id⟧);
+              const ⟦2-char-id⟧ = `${BB.format} ${BB.nativeTools}`,
+                ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧(⟦2-char-id⟧(), ⟦2-char-id⟧, ⟦2-char-id⟧);
               return ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧
             },
             ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧)),
```

</details>

<details>
<summary>Hunk 328 · Change · +1 / -1</summary>

```diff
@@ -13719,7 +13719,7 @@
               null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.signal) && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.aborted && ⟦2-char-id⟧(), null === (⟦2-char-id⟧ = ⟦2-char-id⟧.signal) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.addEventListener("abort", ⟦2-char-id⟧, {
                 once: !0
               });
-              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.c)(3⟦2-char-id⟧, ⟦2-char-id⟧.signal);
+              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)(3⟦2-char-id⟧, ⟦2-char-id⟧.signal);
               let ⟦2-char-id⟧ = !1;
               try {
                 const ⟦2-char-id⟧ = await ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)), ⟦2-char-id⟧.signal, (⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 329 · Change · +1 / -1</summary>

```diff
@@ -13745,7 +13745,7 @@
               } catch (⟦2-char-id⟧) {
                 var ⟦2-char-id⟧;
                 if (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.signal) && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.aborted) throw ⟦2-char-id⟧;
-                ⟦2-char-id⟧ || console.warn(`World Code AI: ${Ze.name} couldn't be reached`, ⟦2-char-id⟧)
+                ⟦2-char-id⟧ || console.warn(`World Code AI: ${Vp.name} couldn't be reached`, ⟦2-char-id⟧)
               } finally {
                 var ⟦2-char-id⟧;
                 ⟦2-char-id⟧.clear(), null === (⟦2-char-id⟧ = ⟦2-char-id⟧.signal) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.removeEventListener("abort", ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 330 · Change · +1 / -1</summary>

```diff
@@ -13793,7 +13793,7 @@
                 })
               }
             })
-          }, ⟦2-char-id⟧ = (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.getState().status) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.provider, ⟦2-char-id⟧[null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? ec : "ovh"]), ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
+          }, ⟦2-char-id⟧ = (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.getState().status) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.provider, ⟦2-char-id⟧[null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? pT : "ovh"]), ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
             ⟦2-char-id⟧.current = null, ⟦2-char-id⟧.drop(⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧, {
               isNotice: !0
             }), ⟦2-char-id⟧({
```

</details>

<details>
<summary>Hunk 331 · Change · +1 / -1</summary>

```diff
@@ -13813,7 +13813,7 @@
               playingThrough: ⟦2-char-id⟧,
               isSuperBot: !0
             });
-            const ⟦2-char-id⟧ = ⟦2-char-id⟧ < 0 ? Uc : ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧),
+            const ⟦2-char-id⟧ = ⟦2-char-id⟧ < 0 ? yT : ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧),
               ⟦2-char-id⟧ = ⟦2-char-id⟧.findLastIndex((⟦2-char-id⟧ => "assistant" === ⟦2-char-id⟧.role && !⟦2-char-id⟧.isNotice && !⟦2-char-id⟧.leftOut && ⟦2-char-id⟧(⟦2-char-id⟧))),
               ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
               ⟦2-char-id⟧ = ⟦2-char-id⟧.findIndex((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧)),
```

</details>

<details>
<summary>Hunk 332 · Change · +5 / -5</summary>

```diff
@@ -13825,16 +13825,16 @@
               }),
               ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.format),
               ⟦2-char-id⟧ = "deepseek" === ⟦2-char-id⟧.format ? {
-                Yf: ⟦2-char-id⟧(⟦2-char-id⟧(), ⟦2-char-id⟧, ⟦2-char-id⟧, {
+                pH: ⟦2-char-id⟧(⟦2-char-id⟧(), ⟦2-char-id⟧, ⟦2-char-id⟧, {
                   docsInTurn: !0,
-                  Yf: !0
+                  pH: !0
                 }).at(-1),
-                toolResults: [...(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? jJ : []).flatMap((⟦2-char-id⟧ => ⟦2-char-id⟧.call ? [{
+                toolResults: [...(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? gB : []).flatMap((⟦2-char-id⟧ => ⟦2-char-id⟧.call ? [{
                   ...⟦2-char-id⟧.call,
                   text: ⟦2-char-id⟧(⟦2-char-id⟧)
-                }] : [])), ...(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.lookups) && void 0 !== ⟦2-char-id⟧ ? JJ : []).flatMap((⟦2-char-id⟧ => ⟦2-char-id⟧.call ? [{
+                }] : [])), ...(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.lookups) && void 0 !== ⟦2-char-id⟧ ? BB : []).flatMap((⟦2-char-id⟧ => ⟦2-char-id⟧.call ? [{
                   ...⟦2-char-id⟧.call,
-                  text: `${JJ.about}:\n${JJ.text}`
+                  text: `${BB.about}:\n${BB.text}`
                 }] : []))].slice(-20)
               } : {};
             let ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 333 · Change · +1 / -1</summary>

```diff
@@ -13842,7 +13842,7 @@
               ⟦2-char-id⟧ = await async function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
                 var ⟦2-char-id⟧;
                 let {
-                  Yf: ⟦2-char-id⟧,
+                  pH: ⟦2-char-id⟧,
                   toolResults: ⟦2-char-id⟧,
                   request: ⟦2-char-id⟧,
                   code: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 334 · Change · +1 / -1</summary>

```diff
@@ -13851,7 +13851,7 @@
                   ⟦2-char-id⟧ = "system" === (null === (⟦2-char-id⟧ = ⟦2-char-id⟧[0]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.role) ? ⟦2-char-id⟧[0].content : "",
                   ⟦2-char-id⟧ = JSON.stringify(⟦2-char-id⟧(⟦2-char-id⟧)),
                   ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.system === ⟦2-char-id⟧ && ⟦2-char-id⟧.toolsJson === ⟦2-char-id⟧,
-                  ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? XJ : ⟦2-char-id⟧[⟦2-char-id⟧.length - 1],
+                  ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? lB : ⟦2-char-id⟧[⟦2-char-id⟧.length - 1],
                   ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧.length > 0 ? {
                     toolResults: ⟦2-char-id⟧
                   } : {},
```

</details>

<details>
<summary>Hunk 335 · Change · +1 / -1</summary>

```diff
@@ -13948,7 +13948,7 @@
               content: ⟦2-char-id⟧
             }), ⟦2-char-id⟧.push({
               role: "user",
-              content: (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.cutShort) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.cutCall, "Your answer was cut short. Continue exactly where you stopped, from the next character: don't repeat anything or start again, and add nothing before it." + (⟦2-char-id⟧ ? ` Your ${cc.name} call${cc.path?` for ${⟦2-char-id⟧.path}`:""} was cut off part way and didn't come through: make that call again in full.` : ""))
+              content: (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.cutShort) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.cutCall, "Your answer was cut short. Continue exactly where you stopped, from the next character: don't repeat anything or start again, and add nothing before it." + (⟦2-char-id⟧ ? ` Your ${TT.name} call${TT.path?` for ${⟦2-char-id⟧.path}`:""} was cut off part way and didn't come through: make that call again in full.` : ""))
             });
             ⟦2-char-id⟧({
               phase: "thinking",
```

</details>

<details>
<summary>Hunk 336 · Change · +1 / -1</summary>

```diff
@@ -13972,7 +13972,7 @@
                 continueFrom: ⟦2-char-id⟧
               });
               ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = {
-                model: ⟦2-char-id⟧.name ? `${MJ.name} \xb7 ${MJ.model.name}` : ⟦2-char-id⟧.model.name
+                model: ⟦2-char-id⟧.name ? `${UB.name} \xb7 ${UB.model.name}` : ⟦2-char-id⟧.model.name
               }, ⟦2-char-id⟧.isCutShort && (⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
                 return {
                   request: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 337 · Change · +1 / -1</summary>

```diff
@@ -13995,7 +13995,7 @@
                 responder: "super_bot_xd",
                 model: ⟦2-char-id⟧.name,
                 promptVersion: ⟦2-char-id⟧.promptVersion
-              }, ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.callFormat) && void 0 !== ⟦2-char-id⟧ ? Dc : "simple", ⟦2-char-id⟧ = {
+              }, ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.callFormat) && void 0 !== ⟦2-char-id⟧ ? LT : "simple", ⟦2-char-id⟧ = {
                 model: ⟦2-char-id⟧,
                 isSuperBot: !0
               }, ⟦2-char-id⟧ = !0
```

</details>

<details>
<summary>Hunk 338 · Change · +2 / -2</summary>

```diff
@@ -14021,9 +14021,9 @@
               }
               ⟦2-char-id⟧.current = function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
                   var ⟦2-char-id⟧;
-                  return !Number.isFinite(⟦2-char-id⟧) || ⟦2-char-id⟧ <= 0 ? JJ : {
+                  return !Number.isFinite(⟦2-char-id⟧) || ⟦2-char-id⟧ <= 0 ? BB : {
                     ...⟦2-char-id⟧,
-                    [⟦2-char-id⟧]: [...null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? FJ : [], ⟦2-char-id⟧].slice(-10)
+                    [⟦2-char-id⟧]: [...null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? VB : [], ⟦2-char-id⟧].slice(-10)
                   }
                 }(⟦2-char-id⟧.current, ⟦2-char-id⟧.model, ⟦2-char-id⟧.ms),
                 function(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 339 · Change · +1 / -1</summary>

```diff
@@ -14040,7 +14040,7 @@
             }
           }
           const ⟦2-char-id⟧ = ⟦2-char-id⟧(),
-            ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.answer, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.callbackNames(), ⟦2-char-id⟧ ? ⟦2-char-id⟧.d : void 0, ⟦2-char-id⟧, new Set([⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧, ...⟦2-char-id⟧, ...Object.keys(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? vJ : {})].filter((⟦2-char-id⟧ => null !== ⟦2-char-id⟧))), ⟦2-char-id⟧.realName),
+            ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.answer, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.callbackNames(), ⟦2-char-id⟧ ? ⟦2-char-id⟧.c : void 0, ⟦2-char-id⟧, new Set([⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧, ...⟦2-char-id⟧, ...Object.keys(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? mB : {})].filter((⟦2-char-id⟧ => null !== ⟦2-char-id⟧))), ⟦2-char-id⟧.realName),
             ⟦2-char-id⟧ = ⟦2-char-id⟧ ? {
               ...⟦2-char-id⟧,
               changes: [],
```

</details>

<details>
<summary>Hunk 340 · Change · +2 / -2</summary>

```diff
@@ -14079,13 +14079,13 @@
           });
           const ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
               let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ⟦2-char-id⟧;
-              return ⟦2-char-id⟧.flatMap((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ && !(0, ⟦2-char-id⟧.f)(⟦2-char-id⟧.path))))
+              return ⟦2-char-id⟧.flatMap((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ && !(0, ⟦2-char-id⟧.g)(⟦2-char-id⟧.path))))
             },
             ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.changes),
             ⟦2-char-id⟧ = "direct" === ⟦2-char-id⟧ ? function(⟦2-char-id⟧) {
               return ⟦2-char-id⟧.flatMap((⟦2-char-id⟧ => {
                 var ⟦2-char-id⟧;
-                return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? cJ : []
+                return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? TB : []
               }))
             }(⟦2-char-id⟧) : [],
             ⟦2-char-id⟧ = ⟦2-char-id⟧.length > 0 ? {
```

</details>

<details>
<summary>Hunk 341 · Change · +3 / -3</summary>

```diff
@@ -14095,11 +14095,11 @@
                 after: ⟦2-char-id⟧(⟦2-char-id⟧.after, ⟦2-char-id⟧)
               })))
             } : ⟦2-char-id⟧,
-            ⟦2-char-id⟧ = ⟦2-char-id⟧.changes.filter((⟦2-char-id⟧ => ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧.path))).map((⟦2-char-id⟧ => ({
+            ⟦2-char-id⟧ = ⟦2-char-id⟧.changes.filter((⟦2-char-id⟧ => ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧.path))).map((⟦2-char-id⟧ => ({
               ...⟦2-char-id⟧,
-              path: (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧.path)
+              path: (0, ⟦2-char-id⟧.j)(⟦2-char-id⟧.path)
             }))),
-            ⟦2-char-id⟧ = ⟦2-char-id⟧.changes.filter((⟦2-char-id⟧ => !⟦2-char-id⟧ || !(0, ⟦2-char-id⟧.f)(⟦2-char-id⟧.path))),
+            ⟦2-char-id⟧ = ⟦2-char-id⟧.changes.filter((⟦2-char-id⟧ => !⟦2-char-id⟧ || !(0, ⟦2-char-id⟧.g)(⟦2-char-id⟧.path))),
             ⟦2-char-id⟧ = ⟦2-char-id⟧.length > 0 ? {
               ...⟦2-char-id⟧,
               changes: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 342 · Change · +1 / -1</summary>

```diff
@@ -14133,7 +14133,7 @@
                 useFree: ⟦2-char-id⟧,
                 isAutoFix: ⟦2-char-id⟧,
                 autoFixRound: ⟦2-char-id⟧,
-                failedEdits: [...(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? jJ : []).map(⟦2-char-id⟧), ...⟦2-char-id⟧],
+                failedEdits: [...(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? gB : []).map(⟦2-char-id⟧), ...⟦2-char-id⟧],
                 ...⟦2-char-id⟧,
                 lookupRound: ⟦2-char-id⟧ + 1,
                 lookupOf: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 343 · Change · +1 / -1</summary>

```diff
@@ -14148,7 +14148,7 @@
             ⟦2-char-id⟧ = ⟦2-char-id⟧.isCutShort ? ⟦2-char-id⟧.text.replace(/(<tool_call|<function=|<\|channel\||\{\s*"jsonrpc")[\s\S]*$/, "").trim() : ⟦2-char-id⟧.text,
             ⟦2-char-id⟧ = ⟦2-char-id⟧.isCutShort && !⟦2-char-id⟧ ? "\n\nThe answer got too long and was cut off, so part of it is missing. Try asking for one thing at a time." : "",
             ⟦2-char-id⟧ = ⟦2-char-id⟧.length > 0 && ⟦2-char-id⟧.changes.length > 0 && !⟦2-char-id⟧.isCutShort ? "\n\nPart of this answer couldn't go in, so it isn't in the change." : "",
-            ⟦2-char-id⟧ = () => ⟦2-char-id⟧.changes.length > 0 ? "Here's a change for your code." : ⟦2-char-id⟧.length > 0 ? "This changes your World Code." : ⟦2-char-id⟧.worldCode.length > 0 ? "This needs World Code." : ⟦2-char-id⟧.length > 0 ? `I'll put it into ${ac.map((JJ=>JJ.path)).join(" and ")}.` : ⟦2-char-id⟧ ? "Quick question before I build it:" : ⟦2-char-id⟧.plan.length > 0 ? "That's a big one, so here's a plan to build it a step at a time." : ⟦2-char-id⟧.length > 0 ? `I'll look at ${function(JJ){var cJ;const ZJ=JJ.map(vU);return ZJ.length<=1?null!==(cJ=ZJ[0])&&void 0!==cJ?cJ:"":`${⟦2-char-id⟧.slice(0,-1).join(", ")} and ${⟦2-char-id⟧[⟦2-char-id⟧.length-1]}`}(UZ)} first.` : ⟦2-char-id⟧.notes.length > 0 ? "Here's something to remember about your game." : ⟦2-char-id⟧.actions.length > 0 ? "Sure!" : ⟦2-char-id⟧.isCutShort ? "Sorry, that was too much for one answer." : "Sorry, I couldn't work that out. Try asking in a different way.",
+            ⟦2-char-id⟧ = () => ⟦2-char-id⟧.changes.length > 0 ? "Here's a change for your code." : ⟦2-char-id⟧.length > 0 ? "This changes your World Code." : ⟦2-char-id⟧.worldCode.length > 0 ? "This needs World Code." : ⟦2-char-id⟧.length > 0 ? `I'll put it into ${jT.map((BB=>BB.path)).join(" and ")}.` : ⟦2-char-id⟧ ? "Quick question before I build it:" : ⟦2-char-id⟧.plan.length > 0 ? "That's a big one, so here's a plan to build it a step at a time." : ⟦2-char-id⟧.length > 0 ? `I'll look at ${function(BB){var TB;const dB=BB.map(iy);return dB.length<=1?null!==(TB=dB[0])&&void 0!==TB?TB:"":`${⟦2-char-id⟧.slice(0,-1).join(", ")} and ${⟦2-char-id⟧[⟦2-char-id⟧.length-1]}`}(yd)} first.` : ⟦2-char-id⟧.notes.length > 0 ? "Here's something to remember about your game." : ⟦2-char-id⟧.actions.length > 0 ? "Sure!" : ⟦2-char-id⟧.isCutShort ? "Sorry, that was too much for one answer." : "Sorry, I couldn't work that out. Try asking in a different way.",
             ⟦2-char-id⟧ = {
               role: "assistant",
               text: (⟦2-char-id⟧ || ⟦2-char-id⟧()) + ⟦2-char-id⟧ + ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 344 · Change · +2 / -2</summary>

```diff
@@ -14157,8 +14157,8 @@
               warnings: ⟦2-char-id⟧,
               worldCode: ⟦2-char-id⟧.worldCode.length > 0 && !⟦2-char-id⟧ ? ⟦2-char-id⟧.worldCode : void 0,
               editedInPlace: ⟦2-char-id⟧.inPlace && !⟦2-char-id⟧ || void 0,
-              failedEdits: ⟦2-char-id⟧.length > 0 ? lc : void 0,
-              question: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? hZ : void 0,
+              failedEdits: ⟦2-char-id⟧.length > 0 ? eT : void 0,
+              question: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? kd : void 0,
               askedFor: ⟦2-char-id⟧ ? {
                 request: ⟦2-char-id⟧,
                 guardWords: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 345 · Change · +1 / -1</summary>

```diff
@@ -14217,7 +14217,7 @@
             warningsSentBack: !0
           }), ⟦2-char-id⟧((⟦2-char-id⟧ => [{
             id: ⟦2-char-id⟧(),
-            text: (0, ⟦2-char-id⟧.t)(⟦2-char-id⟧),
+            text: (0, ⟦2-char-id⟧.x)(⟦2-char-id⟧),
             shown: "Fix this line",
             check: !1,
             isAutoFix: !0,
```

</details>

<details>
<summary>Hunk 346 · Change · +1 / -1</summary>

```diff
@@ -14256,7 +14256,7 @@
               warnings: ⟦2-char-id⟧(⟦2-char-id⟧, !1),
               answeredBy: ⟦2-char-id⟧,
               byItself: ⟦2-char-id⟧ || void 0
-            }, ⟦2-char-id⟧.i);
+            }, ⟦2-char-id⟧.f);
             ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
           }
           if ("stopped" === (⟦2-char-id⟧ ? await ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, {
```

</details>

<details>
<summary>Hunk 347 · Change · +1 / -1</summary>

```diff
@@ -14279,7 +14279,7 @@
               request: ⟦2-char-id⟧,
               guardWords: ⟦2-char-id⟧
             } = ⟦2-char-id⟧((⟦2-char-id⟧ => function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-              return `They asked: "${JJ}"\nYour last answer wrote this for ${cJ}, but you hadn't seen that file, so it didn't go in. ${cJ} is open now, its code above. Put your code into it, keeping everything it already has and changing only what the request needs:\n\`\`\`js\n${ZJ.replace(/\s*$/,"")}\n\`\`\``
+              return `They asked: "${BB}"\nYour last answer wrote this for ${TB}, but you hadn't seen that file, so it didn't go in. ${TB} is open now, its code above. Put your code into it, keeping everything it already has and changing only what the request needs:\n\`\`\`js\n${dB.replace(/\s*$/,"")}\n\`\`\``
             }(⟦2-char-id⟧, ⟦2-char-id⟧.path, ⟦2-char-id⟧.code)));
             return {
               id: ⟦2-char-id⟧(),
```

</details>

<details>
<summary>Hunk 348 · Change · +3 / -3</summary>

```diff
@@ -14318,10 +14318,10 @@
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.worldCode.join("\n\n"),
               ⟦2-char-id⟧ = "switchToWorldCode" === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.kind) ? ⟦2-char-id⟧.request : null,
               ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧((⟦2-char-id⟧ => function(⟦2-char-id⟧, ⟦2-char-id⟧) {
-                return `In a code block, they asked: "${JJ}"\nThe code block's answer needs this part in World Code, which is open now, its code above. Put it in, keeping everything World Code already has: a callback it already defines is changed, with what it does kept, never defined twice:\n\`\`\`js\n${cJ.replace(/\s*$/,"")}\n\`\`\``
+                return `In a code block, they asked: "${BB}"\nThe code block's answer needs this part in World Code, which is open now, its code above. Put it in, keeping everything World Code already has: a callback it already defines is changed, with what it does kept, never defined twice:\n\`\`\`js\n${TB.replace(/\s*$/,"")}\n\`\`\``
               }(⟦2-char-id⟧, ⟦2-char-id⟧))) : null;
-            ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.request) && void 0 !== ⟦2-char-id⟧ ? sc : ⟦2-char-id⟧ ? function(⟦2-char-id⟧) {
-              return `In a code block, they asked for this in World Code, which is open now: ${JJ}`
+            ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.request) && void 0 !== ⟦2-char-id⟧ ? OT : ⟦2-char-id⟧ ? function(⟦2-char-id⟧) {
+              return `In a code block, they asked for this in World Code, which is open now: ${BB}`
             }(⟦2-char-id⟧) : null, {
               check: !1,
               about: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 349 · Change · +2 / -2</summary>

```diff
@@ -14330,12 +14330,12 @@
               ...⟦2-char-id⟧ ? {
                 guardWords: ⟦2-char-id⟧.guardWords
               } : {}
-            }, ⟦2-char-id⟧ ? JJ : void 0)
+            }, ⟦2-char-id⟧ ? BB : void 0)
           }
           const ⟦2-char-id⟧ = !!⟦2-char-id⟧ && 0 === ⟦2-char-id⟧.length && !⟦2-char-id⟧ && ("switchToWorldCode" === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.kind) || ⟦2-char-id⟧ && ⟦2-char-id⟧.worldCode.length > 0);
           if (⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = "switchToWorldCode" === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.kind) ? ⟦2-char-id⟧.request : null;
-            ⟦2-char-id⟧(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? JJ : ⟦2-char-id⟧.worldCode.length > 0 ? ⟦2-char-id⟧(⟦2-char-id⟧.worldCode) : "", {
+            ⟦2-char-id⟧(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? BB : ⟦2-char-id⟧.worldCode.length > 0 ? ⟦2-char-id⟧(⟦2-char-id⟧.worldCode) : "", {
               leavesChangeBehind: ⟦2-char-id⟧,
               hasWorldCodePart: ⟦2-char-id⟧.worldCode.length > 0
             })
```

</details>

<details>
<summary>Hunk 350 · Change · +1 / -1</summary>

```diff
@@ -14344,7 +14344,7 @@
               warningsSentBack: !0
             }), ⟦2-char-id⟧((⟦2-char-id⟧ => [{
               id: ⟦2-char-id⟧(),
-              text: (0, ⟦2-char-id⟧.D)(⟦2-char-id⟧),
+              text: (0, ⟦2-char-id⟧.M)(⟦2-char-id⟧),
               shown: 1 === ⟦2-char-id⟧.length ? "Fix this line" : "Fix these lines",
               check: !1,
               isAutoFix: !0,
```

</details>

<details>
<summary>Hunk 351 · Change · +1 / -1</summary>

```diff
@@ -14353,7 +14353,7 @@
               until: Date.now() + ⟦2-char-id⟧
             }, ...⟦2-char-id⟧]))), ⟦2-char-id⟧ && ⟦2-char-id⟧.length > 0 && (⟦2-char-id⟧ || 0 === ⟦2-char-id⟧.changes.length && !⟦2-char-id⟧.isCutShort && !⟦2-char-id⟧ && !⟦2-char-id⟧.hasCallsFromReasoning) && !⟦2-char-id⟧ && 0 === ⟦2-char-id⟧.length && 0 === ⟦2-char-id⟧.length && 0 === ⟦2-char-id⟧.length && ⟦2-char-id⟧ < 3 && !⟦2-char-id⟧ && !⟦2-char-id⟧ && !⟦2-char-id⟧ && ⟦2-char-id⟧((⟦2-char-id⟧ => [{
               id: ⟦2-char-id⟧(),
-              text: ⟦2-char-id⟧.p,
+              text: ⟦2-char-id⟧.u,
               shown: ⟦2-char-id⟧,
               replaced: ⟦2-char-id⟧,
               until: Date.now() + ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 352 · Change · +2 / -2</summary>

```diff
@@ -14447,12 +14447,12 @@
           } else {
             var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
             ⟦2-char-id⟧("");
-            const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.askedFor) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.request) && void 0 !== ⟦2-char-id⟧ ? ZJ : "",
+            const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.askedFor) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.request) && void 0 !== ⟦2-char-id⟧ ? dB : "",
               ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.question.question, ⟦2-char-id⟧);
             ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, {
               check: !0,
               about: null === (⟦2-char-id⟧ = ⟦2-char-id⟧.askedFor) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.request,
-              asked: `${eJ} ${JJ}`,
+              asked: `${pB} ${BB}`,
               useFree: ⟦2-char-id⟧
             })
           }
```

</details>

<details>
<summary>Hunk 353 · Change · +1 / -1</summary>

```diff
@@ -14471,7 +14471,7 @@
       if (⟦2-char-id⟧) {
         if (⟦2-char-id⟧.length < 3) {
           var ⟦2-char-id⟧;
-          const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.useFree) && void 0 !== ⟦2-char-id⟧ ? FJ : ⟦2-char-id⟧ && null !== ⟦2-char-id⟧;
+          const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.useFree) && void 0 !== ⟦2-char-id⟧ ? VB : ⟦2-char-id⟧ && null !== ⟦2-char-id⟧;
           ⟦2-char-id⟧ && ⟦2-char-id⟧(!1), ⟦2-char-id⟧([...⟦2-char-id⟧, {
             id: ⟦2-char-id⟧(),
             text: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 354 · Change · +2 / -2</summary>

```diff
@@ -14493,10 +14493,10 @@
             path: ⟦2-char-id⟧,
             text: ⟦2-char-id⟧
           } = ⟦2-char-id⟧;
-          return (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? cJ : "") === ⟦2-char-id⟧
+          return (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? TB : "") === ⟦2-char-id⟧
         }))) {
         var ⟦2-char-id⟧;
-        const ⟦2-char-id⟧ = (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.until) && void 0 !== ⟦2-char-id⟧ ? XJ : 0) - Date.now();
+        const ⟦2-char-id⟧ = (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.until) && void 0 !== ⟦2-char-id⟧ ? lB : 0) - Date.now();
         if (⟦2-char-id⟧ <= 0) return void ⟦2-char-id⟧(⟦2-char-id⟧);
         const ⟦2-char-id⟧ = setTimeout((() => {
           ⟦2-char-id⟧((⟦2-char-id⟧ => [...⟦2-char-id⟧]))
```

</details>

<details>
<summary>Hunk 355 · Change · +1 / -1</summary>

```diff
@@ -14528,7 +14528,7 @@
           }
         }
       }
-      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.followUp) && void 0 !== ⟦2-char-id⟧ ? ZJ : {
+      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.followUp) && void 0 !== ⟦2-char-id⟧ ? dB : {
         ...void 0 === ⟦2-char-id⟧.shown ? {} : {
           check: ⟦2-char-id⟧.check,
           wordsOnly: ⟦2-char-id⟧.wordsOnly,
```

</details>

<details>
<summary>Hunk 356 · Change · +1 / -1</summary>

```diff
@@ -14563,7 +14563,7 @@
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.current;
         if (⟦2-char-id⟧.changes.some((⟦2-char-id⟧ => {
             var ⟦2-char-id⟧;
-            return (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.path]) && void 0 !== ⟦2-char-id⟧ ? cJ : "") !== ⟦2-char-id⟧.before
+            return (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.path]) && void 0 !== ⟦2-char-id⟧ ? TB : "") !== ⟦2-char-id⟧.before
           }))) return ⟦2-char-id⟧(⟦2-char-id⟧.id, "stale"), !1;
         ⟦2-char-id⟧.current.add(⟦2-char-id⟧.id);
         if (!await ⟦2-char-id⟧(⟦2-char-id⟧.changes.map((⟦2-char-id⟧ => ({
```

</details>

<details>
<summary>Hunk 357 · Change · +3 / -3</summary>

```diff
@@ -14574,15 +14574,15 @@
           }))) return ⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧.id, "stale"), !1;
         ⟦2-char-id⟧(function(⟦2-char-id⟧) {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.replace(/\s+/g, " ").trim();
-          return `Before "${cJ.length>200?`${⟦2-char-id⟧.slice(0,200).trimEnd()}\u2026`:cJ}"`
+          return `Before "${TB.length>200?`${⟦2-char-id⟧.slice(0,200).trimEnd()}\u2026`:TB}"`
         }(⟦2-char-id⟧), ⟦2-char-id⟧, function(⟦2-char-id⟧) {
           const ⟦2-char-id⟧ = [...new Set(⟦2-char-id⟧.flatMap((⟦2-char-id⟧ => {
             var ⟦2-char-id⟧;
-            return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.why) && void 0 !== ⟦2-char-id⟧ ? cJ : []
+            return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.why) && void 0 !== ⟦2-char-id⟧ ? TB : []
           })))];
           if (0 === ⟦2-char-id⟧.length) return;
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => 0 === ⟦2-char-id⟧ ? ⟦2-char-id⟧.charAt(0).toUpperCase() + ⟦2-char-id⟧.slice(1) : ⟦2-char-id⟧.charAt(0).toLowerCase() + ⟦2-char-id⟧.slice(1))).join(", ");
-          return ⟦2-char-id⟧.length > 400 ? `${ZJ.slice(0,400).trimEnd()}\u2026` : ⟦2-char-id⟧
+          return ⟦2-char-id⟧.length > 400 ? `${dB.slice(0,400).trimEnd()}\u2026` : ⟦2-char-id⟧
         }(⟦2-char-id⟧.changes)), ⟦2-char-id⟧(⟦2-char-id⟧.id, "applied"), ⟦2-char-id⟧.isPartial && ⟦2-char-id⟧(⟦2-char-id⟧.id, {
           changes: ⟦2-char-id⟧.changes
         });
```

</details>

<details>
<summary>Hunk 358 · Change · +1 / -1</summary>

```diff
@@ -14597,7 +14597,7 @@
             var ⟦2-char-id⟧;
             return ⟦2-char-id⟧.id === ⟦2-char-id⟧.planId ? {
               ...⟦2-char-id⟧,
-              planDone: Math.max(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.planDone) && void 0 !== ⟦2-char-id⟧ ? cJ : 0, ⟦2-char-id⟧.index + 1)
+              planDone: Math.max(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.planDone) && void 0 !== ⟦2-char-id⟧ ? TB : 0, ⟦2-char-id⟧.index + 1)
             } : ⟦2-char-id⟧
           })) : ⟦2-char-id⟧
         })), ⟦2-char-id⟧.current = Date.now(), !0
```

</details>

<details>
<summary>Hunk 359 · Change · +2 / -2</summary>

```diff
@@ -14608,10 +14608,10 @@
       if (!⟦2-char-id⟧ || ⟦2-char-id⟧.targetKey !== ⟦2-char-id⟧.key) return !0;
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧.entryId));
       if (!⟦2-char-id⟧ || "offered" !== ⟦2-char-id⟧.status) return ⟦2-char-id⟧.pendingApply = void 0, !0;
-      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.picked) && void 0 !== ⟦2-char-id⟧ ? JJ : ⟦2-char-id⟧.changes,
+      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.picked) && void 0 !== ⟦2-char-id⟧ ? BB : ⟦2-char-id⟧.changes,
         ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧ && ⟦2-char-id⟧.every((⟦2-char-id⟧ => {
           var ⟦2-char-id⟧;
-          return (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.current[⟦2-char-id⟧.path]) && void 0 !== ⟦2-char-id⟧ ? cJ : "") === ⟦2-char-id⟧.before
+          return (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.current[⟦2-char-id⟧.path]) && void 0 !== ⟦2-char-id⟧ ? TB : "") === ⟦2-char-id⟧.before
         }));
       if (Date.now() > ⟦2-char-id⟧.until) return ⟦2-char-id⟧.pendingApply = void 0, ⟦2-char-id⟧ && ⟦2-char-id⟧({
         role: "assistant",
```

</details>

<details>
<summary>Hunk 360 · Change · +1 / -1</summary>

```diff
@@ -14680,7 +14680,7 @@
     const ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
         ⟦2-char-id⟧((() => {
           ⟦2-char-id⟧.gameBridge.send("sendChatMessage", {
-            JY: "//export",
+            Jo: "//export",
             channelName: null
           })
         }), Math.max(0, ⟦2-char-id⟧.current + 600 - Date.now())), ⟦2-char-id⟧({
```

</details>

<details>
<summary>Hunk 361 · Change · +2 / -2</summary>

```diff
@@ -14725,10 +14725,10 @@
         }), ⟦2-char-id⟧((() => {
           ⟦2-char-id⟧.pendingApply = {
             entryId: ⟦2-char-id⟧,
-            targetKey: ⟦2-char-id⟧.i.key,
+            targetKey: ⟦2-char-id⟧.f.key,
             until: Date.now() + ⟦2-char-id⟧,
             byItself: !0
-          }, ⟦2-char-id⟧(⟦2-char-id⟧.i)
+          }, ⟦2-char-id⟧(⟦2-char-id⟧.f)
         }), ⟦2-char-id⟧)) : ⟦2-char-id⟧({
           role: "assistant",
           text: "Apply this change first, then apply the World Code part.",
```

</details>

<details>
<summary>Hunk 362 · Change · +2 / -2</summary>

```diff
@@ -14748,13 +14748,13 @@
           isCalm: !0
         }), ⟦2-char-id⟧((() => {
           null !== ⟦2-char-id⟧ && (⟦2-char-id⟧.pendingInsert = {
-            targetKey: ⟦2-char-id⟧.i.key,
+            targetKey: ⟦2-char-id⟧.f.key,
             request: ⟦2-char-id⟧,
             options: ⟦2-char-id⟧,
             code: ⟦2-char-id⟧,
             readyBy: Date.now() + 4⟦2-char-id⟧,
             until: Date.now() + ⟦2-char-id⟧
-          }), ⟦2-char-id⟧(⟦2-char-id⟧.i)
+          }), ⟦2-char-id⟧(⟦2-char-id⟧.f)
         }), ⟦2-char-id⟧))
       },
       ⟦2-char-id⟧ = async function(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 363 · Change · +1 / -1</summary>

```diff
@@ -14772,7 +14772,7 @@
             ⟦2-char-id⟧.push(⟦2-char-id⟧.call ? {
               ...⟦2-char-id⟧.result,
               call: ⟦2-char-id⟧.call
-            } : ⟦2-char-id⟧.result), ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.worldCodeFiles) && void 0 !== ⟦2-char-id⟧ ? UJ : ⟦2-char-id⟧
+            } : ⟦2-char-id⟧.result), ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.worldCodeFiles) && void 0 !== ⟦2-char-id⟧ ? yB : ⟦2-char-id⟧
           }
           return {
             results: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 364 · Change · +8 / -8</summary>

```diff
@@ -14782,20 +14782,20 @@
           files: ⟦2-char-id⟧.current,
           docs: ⟦2-char-id⟧(),
           errors: ⟦2-char-id⟧,
-          viewChunk: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? uJ : ⟦2-char-id⟧,
-          viewGameState: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? iJ : ⟦2-char-id⟧,
+          viewChunk: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? CB : ⟦2-char-id⟧,
+          viewGameState: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? GB : ⟦2-char-id⟧,
           readWorldCode: ⟦2-char-id⟧,
           fetchDocsPage: ⟦2-char-id⟧ => async function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            if ("" === ⟦2-char-id⟧.trim()) return `No url was given: give ${GJ.f}, or a page it links to.`;
+            if ("" === ⟦2-char-id⟧.trim()) return `No url was given: give ${uB.k}, or a page it links to.`;
             const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
-            if (null === ⟦2-char-id⟧) return ⟦2-char-id⟧.includes(⟦2-char-id⟧.d) ? `${JJ} is every page at once, too long to read: read ${GJ.f}, then the page you need.` : `Only Bloxd's docs can be read: ${GJ.f} and the pages it links to.`;
-            const ⟦2-char-id⟧ = `There is no docs page at ${JJ}. ${GJ.f} lists every page with its link.`,
-              ⟦2-char-id⟧ = `${JJ} couldn't be read just now. Use get_docs instead.`,
-              ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.c)(2⟦2-char-id⟧, ⟦2-char-id⟧);
+            if (null === ⟦2-char-id⟧) return ⟦2-char-id⟧.includes(⟦2-char-id⟧.e) ? `${BB} is every page at once, too long to read: read ${uB.k}, then the page you need.` : `Only Bloxd's docs can be read: ${uB.k} and the pages it links to.`;
+            const ⟦2-char-id⟧ = `There is no docs page at ${BB}. ${uB.k} lists every page with its link.`,
+              ⟦2-char-id⟧ = `${BB} couldn't be read just now. Use get_docs instead.`,
+              ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)(2⟦2-char-id⟧, ⟦2-char-id⟧);
             let ⟦2-char-id⟧;
             try {
               var ⟦2-char-id⟧;
-              const ⟦2-char-id⟧ = await fetch(`${cJ}${FJ}`, {
+              const ⟦2-char-id⟧ = await fetch(`${TB}${VB}`, {
                 signal: ⟦2-char-id⟧.signal
               });
               if (404 === ⟦2-char-id⟧.status) return ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 365 · Change · +2 / -2</summary>

```diff
@@ -14807,8 +14807,8 @@
             } finally {
               ⟦2-char-id⟧.clear()
             }
-            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.u)(⟦2-char-id⟧);
-            return null !== ⟦2-char-id⟧ && null === ⟦2-char-id⟧.part && ⟦2-char-id⟧.length > ⟦2-char-id⟧.b ? `${JJ} is too long to read whole: read the part you need. Its parts start at ${nJ.e}${(0,GJ.o)(jJ.name,0)}, and ${GJ.f} says what each part has.` : ⟦2-char-id⟧.length <= 4⟦2-char-id⟧ ? AJ : (console.warn("AI Helper: a docs file is longer than any should be", ⟦2-char-id⟧, ⟦2-char-id⟧.length), `${AJ.slice(0,4e4)}\n\n(The rest of this page is cut off.)`)
+            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.z)(⟦2-char-id⟧);
+            return null !== ⟦2-char-id⟧ && null === ⟦2-char-id⟧.part && ⟦2-char-id⟧.length > ⟦2-char-id⟧.b ? `${BB} is too long to read whole: read the part you need. Its parts start at ${DB.c}${(0,uB.r)(gB.name,0)}, and ${uB.k} says what each part has.` : ⟦2-char-id⟧.length <= 4⟦2-char-id⟧ ? JB : (console.warn("AI Helper: a docs file is longer than any should be", ⟦2-char-id⟧, ⟦2-char-id⟧.length), `${JB.slice(0,4e4)}\n\n(The rest of this page is cut off.)`)
           }(⟦2-char-id⟧, window.location.origin, ⟦2-char-id⟧)
         });
         if (null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.aborted) return "stopped";
```

</details>

<details>
<summary>Hunk 366 · Change · +3 / -3</summary>

```diff
@@ -14816,9 +14816,9 @@
           ⟦2-char-id⟧ = ⟦2-char-id⟧.flatMap((⟦2-char-id⟧ => "view_file" === ⟦2-char-id⟧.name && void 0 !== ⟦2-char-id⟧.args.path && ⟦2-char-id⟧.args.path in ⟦2-char-id⟧.current ? [⟦2-char-id⟧.args.path] : [])),
           ⟦2-char-id⟧ = {
             ...⟦2-char-id⟧.options,
-            lookups: [...(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.options.lookups) && void 0 !== ⟦2-char-id⟧ ? ZJ : []).map(⟦2-char-id⟧), ...⟦2-char-id⟧],
-            worldCodeFiles: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.worldCodeFiles) && void 0 !== ⟦2-char-id⟧ ? FJ : ⟦2-char-id⟧.options.worldCodeFiles,
-            viewedPaths: [...null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.options.viewedPaths) && void 0 !== ⟦2-char-id⟧ ? UJ : [], ...⟦2-char-id⟧]
+            lookups: [...(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.options.lookups) && void 0 !== ⟦2-char-id⟧ ? dB : []).map(⟦2-char-id⟧), ...⟦2-char-id⟧],
+            worldCodeFiles: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.worldCodeFiles) && void 0 !== ⟦2-char-id⟧ ? VB : ⟦2-char-id⟧.options.worldCodeFiles,
+            viewedPaths: [...null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.options.viewedPaths) && void 0 !== ⟦2-char-id⟧ ? yB : [], ...⟦2-char-id⟧]
           };
         return ⟦2-char-id⟧((⟦2-char-id⟧ => [{
           id: ⟦2-char-id⟧(),
```

</details>

<details>
<summary>Hunk 367 · Change · +1 / -1</summary>

```diff
@@ -14834,7 +14834,7 @@
         ⟦2-char-id⟧((⟦2-char-id⟧ => ⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧ ? {
           ...⟦2-char-id⟧,
           trial: ⟦2-char-id⟧,
-          trialErrors: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧.trialErrors
+          trialErrors: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧.trialErrors
         } : ⟦2-char-id⟧))))
       }, ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
```

</details>

<details>
<summary>Hunk 368 · Change · +4 / -4</summary>

```diff
@@ -14847,13 +14847,13 @@
           }))
         }), Math.max(⟦2-char-id⟧, ⟦2-char-id⟧.current + 1500 - Date.now())))
       }, ⟦2-char-id⟧ = () => {
-        ⟦2-char-id⟧(), (0, ⟦2-char-id⟧.b)(⟦2-char-id⟧)
+        ⟦2-char-id⟧(), (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧)
       };
     (0, ⟦2-char-id⟧.useEffect)((() => {
-      if (!⟦2-char-id⟧ || void 0 === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.endedAt) || (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.target.key) !== ⟦2-char-id⟧.key) return void(void 0 === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.endedAt) || ⟦2-char-id⟧ || (0, ⟦2-char-id⟧.k)(⟦2-char-id⟧));
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.k)(⟦2-char-id⟧);
+      if (!⟦2-char-id⟧ || void 0 === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.endedAt) || (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.target.key) !== ⟦2-char-id⟧.key) return void(void 0 === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.endedAt) || ⟦2-char-id⟧ || (0, ⟦2-char-id⟧.n)(⟦2-char-id⟧));
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.n)(⟦2-char-id⟧);
       if (!⟦2-char-id⟧) return;
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.z)(⟦2-char-id⟧);
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.F)(⟦2-char-id⟧);
       ⟦2-char-id⟧.current({
         role: "assistant",
         text: ⟦2-char-id⟧.text,
```

</details>

<details>
<summary>Hunk 369 · Change · +1 / -1</summary>

```diff
@@ -14864,7 +14864,7 @@
         logTitle: ⟦2-char-id⟧.title
       }), void 0 !== ⟦2-char-id⟧.ranAt && (0 !== ⟦2-char-id⟧.errors.length ? ⟦2-char-id⟧.autoFixRound >= 3 || (⟦2-char-id⟧(⟦2-char-id⟧.current), ⟦2-char-id⟧((⟦2-char-id⟧ => [{
         id: ⟦2-char-id⟧(),
-        text: (0, ⟦2-char-id⟧.x)(⟦2-char-id⟧.errors),
+        text: (0, ⟦2-char-id⟧.B)(⟦2-char-id⟧.errors),
         shown: 1 === ⟦2-char-id⟧.errors.length ? "Fix the error" : "Fix these errors",
         check: !1,
         isAutoFix: !0,
```

</details>

<details>
<summary>Hunk 370 · Change · +2 / -2</summary>

```diff
@@ -14873,9 +14873,9 @@
     }), [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.key, ⟦2-char-id⟧]);
     const ⟦2-char-id⟧ = async (⟦2-char-id⟧, ⟦2-char-id⟧) => {
       if (⟦2-char-id⟧(⟦2-char-id⟧.id, {
-          forgetStatus: ⟦2-char-id⟧ ? "forgotten" : "ys"
+          forgetStatus: ⟦2-char-id⟧ ? "forgotten" : "RO"
         }), ⟦2-char-id⟧) try {
-        for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.forgetNotes) && void 0 !== ⟦2-char-id⟧ ? ZJ : []) {
+        for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.forgetNotes) && void 0 !== ⟦2-char-id⟧ ? dB : []) {
           var ⟦2-char-id⟧;
           ⟦2-char-id⟧(await ⟦2-char-id⟧.remove(⟦2-char-id⟧, ⟦2-char-id⟧))
         }
```

</details>

<details>
<summary>Hunk 371 · Change · +2 / -2</summary>

```diff
@@ -14895,13 +14895,13 @@
             let [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
             const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
             if (void 0 === ⟦2-char-id⟧) return [];
-            const ⟦2-char-id⟧ = new Map(⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? FJ : "").map((⟦2-char-id⟧ => [⟦2-char-id⟧.key, ⟦2-char-id⟧.value]))),
+            const ⟦2-char-id⟧ = new Map(⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? VB : "").map((⟦2-char-id⟧ => [⟦2-char-id⟧.key, ⟦2-char-id⟧.value]))),
               ⟦2-char-id⟧ = new Map(⟦2-char-id⟧(⟦2-char-id⟧).map((⟦2-char-id⟧ => [⟦2-char-id⟧.key, ⟦2-char-id⟧.value])));
             let ⟦2-char-id⟧ = ⟦2-char-id⟧;
             for (const [⟦2-char-id⟧, ⟦2-char-id⟧] of ⟦2-char-id⟧) {
               var ⟦2-char-id⟧;
               const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧).find((⟦2-char-id⟧ => ⟦2-char-id⟧.key === ⟦2-char-id⟧));
-              ⟦2-char-id⟧ && ⟦2-char-id⟧.value !== ⟦2-char-id⟧ && ⟦2-char-id⟧.get(⟦2-char-id⟧) === ⟦2-char-id⟧.value && (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? YJ : ⟦2-char-id⟧)
+              ⟦2-char-id⟧ && ⟦2-char-id⟧.value !== ⟦2-char-id⟧ && ⟦2-char-id⟧.get(⟦2-char-id⟧) === ⟦2-char-id⟧.value && (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? oB : ⟦2-char-id⟧)
             }
             return ⟦2-char-id⟧ === ⟦2-char-id⟧ ? [] : [{
               path: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 372 · Change · +1 / -1</summary>

```diff
@@ -14917,7 +14917,7 @@
             from: ⟦2-char-id⟧.to,
             to: ⟦2-char-id⟧.from
           })));
-          return ⟦2-char-id⟧.length > 0 ? ⟦2-char-id⟧(⟦2-char-id⟧, "undoing") : 0 === ⟦2-char-id⟧.length ? "Before undoing settings" : `Before undoing settings: ${(JJ.length>3?[...JJ.slice(0,3),JJ.length-3+" more"]:JJ).join(", ")}`
+          return ⟦2-char-id⟧.length > 0 ? ⟦2-char-id⟧(⟦2-char-id⟧, "undoing") : 0 === ⟦2-char-id⟧.length ? "Before undoing settings" : `Before undoing settings: ${(BB.length>3?[...BB.slice(0,3),BB.length-3+" more"]:BB).join(", ")}`
         }(⟦2-char-id⟧.current, [...⟦2-char-id⟧.current.values()]), ⟦2-char-id⟧), ⟦2-char-id⟧.current = Date.now()
       }
       ⟦2-char-id⟧()
```

</details>

<details>
<summary>Hunk 373 · Change · +4 / -4</summary>

```diff
@@ -14928,12 +14928,12 @@
         canEdit: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
       return (0, ⟦2-char-id⟧.useEffect)((() => {
-        (0, ⟦2-char-id⟧.F)("aiNotes", !⟦2-char-id⟧)
+        (0, ⟦2-char-id⟧.O)("aiNotes", !⟦2-char-id⟧)
       }), [⟦2-char-id⟧]), (0, ⟦2-char-id⟧.useEffect)((() => {
-        (0, ⟦2-char-id⟧.F)("aiGameSettings", ⟦2-char-id⟧)
+        (0, ⟦2-char-id⟧.O)("aiGameSettings", ⟦2-char-id⟧)
       }), [⟦2-char-id⟧]), (0, ⟦2-char-id⟧.useEffect)((() => {
-        (0, ⟦2-char-id⟧.F)("aiEdits", ⟦2-char-id⟧)
-      }), [⟦2-char-id⟧]), (0, ⟦2-char-id⟧.i)("aiHelperOverview")
+        (0, ⟦2-char-id⟧.O)("aiEdits", ⟦2-char-id⟧)
+      }), [⟦2-char-id⟧]), (0, ⟦2-char-id⟧.l)("aiHelperOverview")
     }({
       codeBlock: ⟦2-char-id⟧,
       hasSettings: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 374 · Change · +2 / -2</summary>

```diff
@@ -14971,8 +14971,8 @@
     }, ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
-      return null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.about) && void 0 !== ⟦2-char-id⟧ ? ZJ : null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.text) && void 0 !== ⟦2-char-id⟧ ? cJ : "a change"
-    }, ⟦2-char-id⟧ = ⟦2-char-id⟧.filter(⟦2-char-id⟧), ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.length - 1]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.id, ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.findLast((⟦2-char-id⟧ => "user" === ⟦2-char-id⟧.role))) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.id) && void 0 !== ⟦2-char-id⟧ ? vJ : 0, ⟦2-char-id⟧ = ⟦2-char-id⟧.length < ⟦2-char-id⟧.length, ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.length - 1], ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.question) && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.allowOther && !⟦2-char-id⟧ ? wF : void 0, ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(!1), ⟦2-char-id⟧ = () => {
+      return null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.about) && void 0 !== ⟦2-char-id⟧ ? dB : null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.text) && void 0 !== ⟦2-char-id⟧ ? TB : "a change"
+    }, ⟦2-char-id⟧ = ⟦2-char-id⟧.filter(⟦2-char-id⟧), ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.length - 1]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.id, ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.findLast((⟦2-char-id⟧ => "user" === ⟦2-char-id⟧.role))) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.id) && void 0 !== ⟦2-char-id⟧ ? mB : 0, ⟦2-char-id⟧ = ⟦2-char-id⟧.length < ⟦2-char-id⟧.length, ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.length - 1], ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.question) && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.allowOther && !⟦2-char-id⟧ ? rV : void 0, ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(!1), ⟦2-char-id⟧ = () => {
       ⟦2-char-id⟧.current = !0, ⟦2-char-id⟧("settings")
     }, ⟦2-char-id⟧ = () => {
       ⟦2-char-id⟧(!1), ⟦2-char-id⟧(!1), ⟦2-char-id⟧(!1), ⟦2-char-id⟧.current = null, ⟦2-char-id⟧(null), ⟦2-char-id⟧("addKey")
```

</details>

<details>
<summary>Hunk 375 · Change · +1 / -1</summary>

```diff
@@ -15055,7 +15055,7 @@
         let ⟦2-char-id⟧ = !1;
         const ⟦2-char-id⟧ = setTimeout((() => {
           var ⟦2-char-id⟧;
-          ⟦2-char-id⟧.nextAt = Date.now() + (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.count]) && void 0 !== ⟦2-char-id⟧ ? FJ : 0), ⟦2-char-id⟧.count++, ⟦2-char-id⟧.refresh().then((() => {
+          ⟦2-char-id⟧.nextAt = Date.now() + (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.count]) && void 0 !== ⟦2-char-id⟧ ? VB : 0), ⟦2-char-id⟧.count++, ⟦2-char-id⟧.refresh().then((() => {
             ⟦2-char-id⟧ || ⟦2-char-id⟧(Date.now())
           }))
         }), Math.max(0, ⟦2-char-id⟧.nextAt - Date.now()));
```

</details>

<details>
<summary>Hunk 376 · Change · +2 / -2</summary>

```diff
@@ -15070,13 +15070,13 @@
         clearTimeout(⟦2-char-id⟧)
       }
     }), [⟦2-char-id⟧, ⟦2-char-id⟧]);
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧ ? `${kF.id}/${kF.model.id}` : null;
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧ ? `${QV.id}/${QV.model.id}` : null;
     (0, ⟦2-char-id⟧.useEffect)((() => {
       ⟦2-char-id⟧(!1)
     }), [⟦2-char-id⟧]);
     const ⟦2-char-id⟧ = Object.values(⟦2-char-id⟧).some((⟦2-char-id⟧ => "" !== ⟦2-char-id⟧.trim())),
       ⟦2-char-id⟧ = ⟦2-char-id⟧ || ⟦2-char-id⟧ || ⟦2-char-id⟧ || null !== ⟦2-char-id⟧,
-      ⟦2-char-id⟧ = "aiAnswer" === ⟦2-char-id⟧ || ("aiNotes" === ⟦2-char-id⟧ || "aiGameSettings" === ⟦2-char-id⟧ || "aiGear" === ⟦2-char-id⟧) && ⟦2-char-id⟧ ? vF : "aiPanel",
+      ⟦2-char-id⟧ = "aiAnswer" === ⟦2-char-id⟧ || ("aiNotes" === ⟦2-char-id⟧ || "aiGameSettings" === ⟦2-char-id⟧ || "aiGear" === ⟦2-char-id⟧) && ⟦2-char-id⟧ ? iV : "aiPanel",
       ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null),
       ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null),
       ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 377 · Change · +1 / -1</summary>

```diff
@@ -15085,7 +15085,7 @@
       ⟦2-char-id⟧.current = ⟦2-char-id⟧;
       if (!document.activeElement || document.activeElement === document.body) {
         var ⟦2-char-id⟧;
-        null === (⟦2-char-id⟧ = (⟦2-char-id⟧ ? aF : ⟦2-char-id⟧).current) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.focus()
+        null === (⟦2-char-id⟧ = (⟦2-char-id⟧ ? AV : ⟦2-char-id⟧).current) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.focus()
       }
     }), [⟦2-char-id⟧]), (0, ⟦2-char-id⟧.useEffect)((() => {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.current;
```

</details>

<details>
<summary>Hunk 378 · Change · +2 / -2</summary>

```diff
@@ -15160,12 +15160,12 @@
           children: "addKey" === ⟦2-char-id⟧ && ⟦2-char-id⟧.current ? "Back" : "Back to chat"
         }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("h3", {
           className: "WorldCodeAiViewTitle",
-          children: "settings" === ⟦2-char-id⟧ ? "AI settings" : ⟦2-char-id⟧ ? `Edit ${NX(yc)} key` : "Add an API key"
+          children: "settings" === ⟦2-char-id⟧ ? "AI settings" : ⟦2-char-id⟧ ? `Edit ${Wl(MT)} key` : "Add an API key"
         }), "settings" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)("span", {
           className: "WorldCodeAiViewUsing",
           children: [(0, ⟦2-char-id⟧.jsxs)("span", {
             className: "WorldCodeAiViewUsingModel",
-            children: ["Using:", " ", ⟦2-char-id⟧ ? ⟦2-char-id⟧ ? "Bot.xd (free) for the next question" : ⟦2-char-id⟧(⟦2-char-id⟧) : ⟦2-char-id⟧ ? oX : "Bot.xd (free)"]
+            children: ["Using:", " ", ⟦2-char-id⟧ ? ⟦2-char-id⟧ ? "Bot.xd (free) for the next question" : ⟦2-char-id⟧(⟦2-char-id⟧) : ⟦2-char-id⟧ ? BJ : "Bot.xd (free)"]
           }), (0, ⟦2-char-id⟧.jsxs)("span", {
             className: "WorldCodeAiViewUsingEdits",
             children: ["Edits: ", ⟦2-char-id⟧ ? "On" : "Off"]
```

</details>

<details>
<summary>Hunk 379 · Change · +1 / -1</summary>

```diff
@@ -15235,7 +15235,7 @@
             onClick: () => {
               ⟦2-char-id⟧.current = !1, ⟦2-char-id⟧("settings")
             },
-            children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+            children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
               name: "gear"
             }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("span", {
               ref: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 380 · Change · +1 / -1</summary>

```diff
@@ -15265,7 +15265,7 @@
               const ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧) && "applied" === ⟦2-char-id⟧.status && ⟦2-char-id⟧.changes.some((⟦2-char-id⟧ => ⟦2-char-id⟧.path in ⟦2-char-id⟧ && ⟦2-char-id⟧[⟦2-char-id⟧.path] !== ⟦2-char-id⟧.after)),
                 ⟦2-char-id⟧ = ⟦2-char-id⟧.filter((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧) && "saved" === ⟦2-char-id⟧.noteStatus && void 0 !== ⟦2-char-id⟧.note && ⟦2-char-id⟧.includes(⟦2-char-id⟧.note))).map((⟦2-char-id⟧ => {
                   var ⟦2-char-id⟧;
-                  return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.note) && void 0 !== ⟦2-char-id⟧ ? cJ : ""
+                  return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.note) && void 0 !== ⟦2-char-id⟧ ? TB : ""
                 }));
               ⟦2-char-id⟧((⟦2-char-id⟧ => ⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧) ? {
                 ...⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 381 · Change · +1 / -1</summary>

```diff
@@ -15281,7 +15281,7 @@
                 isCalm: !0,
                 undoFiles: ⟦2-char-id⟧,
                 leftFiles: Object.fromEntries(⟦2-char-id⟧.map((⟦2-char-id⟧ => [⟦2-char-id⟧.path, ⟦2-char-id⟧.text]))),
-                forgetNotes: ⟦2-char-id⟧.length > 0 ? eJ : void 0
+                forgetNotes: ⟦2-char-id⟧.length > 0 ? pB : void 0
               })
             })(⟦2-char-id⟧)
           } : void 0
```

</details>

<details>
<summary>Hunk 382 · Change · +2 / -2</summary>

```diff
@@ -15293,11 +15293,11 @@
               var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
               const ⟦2-char-id⟧ = ⟦2-char-id⟧.current,
                 ⟦2-char-id⟧ = ⟦2-char-id⟧.current[⟦2-char-id⟧],
-                ⟦2-char-id⟧ = void 0 !== ⟦2-char-id⟧ && (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? FJ : "") === ⟦2-char-id⟧.current[⟦2-char-id⟧] ? {
+                ⟦2-char-id⟧ = void 0 !== ⟦2-char-id⟧ && (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? VB : "") === ⟦2-char-id⟧.current[⟦2-char-id⟧] ? {
                   ...⟦2-char-id⟧,
                   [⟦2-char-id⟧]: ⟦2-char-id⟧
                 } : ⟦2-char-id⟧,
-                ⟦2-char-id⟧ = ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? UJ : "", ⟦2-char-id⟧, ⟦2-char-id⟧);
+                ⟦2-char-id⟧ = ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? yB : "", ⟦2-char-id⟧, ⟦2-char-id⟧);
               if (null === ⟦2-char-id⟧) return !1;
               if (⟦2-char-id⟧ === ⟦2-char-id⟧[⟦2-char-id⟧]) return !0;
               if (!await ⟦2-char-id⟧([{
```

</details>

<details>
<summary>Hunk 383 · Change · +2 / -2</summary>

```diff
@@ -15305,8 +15305,8 @@
                   text: ⟦2-char-id⟧
                 }])) return !1;
               const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧),
-                ⟦2-char-id⟧ = `${JJ}:${cJ.key}`,
-                ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.current.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? eJ : ⟦2-char-id⟧.value;
+                ⟦2-char-id⟧ = `${BB}:${TB.key}`,
+                ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.current.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? pB : ⟦2-char-id⟧.value;
               ⟦2-char-id⟧.current.set(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ === ⟦2-char-id⟧ ? ⟦2-char-id⟧.current.delete(⟦2-char-id⟧) : ⟦2-char-id⟧.current.set(⟦2-char-id⟧, {
                 name: ⟦2-char-id⟧,
                 from: ⟦2-char-id⟧(⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 384 · Change · +1 / -1</summary>

```diff
@@ -15330,7 +15330,7 @@
                   console.error("World Code AI: couldn't keep a version of the code", ⟦2-char-id⟧)
                 })), ⟦2-char-id⟧(⟦2-char-id⟧)
               }
-              return ⟦2-char-id⟧.current.includes(⟦2-char-id⟧) || ⟦2-char-id⟧.current.push(⟦2-char-id⟧), ⟦2-char-id⟧.current[⟦2-char-id⟧] = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? XJ : "", ⟦2-char-id⟧.current[⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧.current = Date.now(), !0
+              return ⟦2-char-id⟧.current.includes(⟦2-char-id⟧) || ⟦2-char-id⟧.current.push(⟦2-char-id⟧), ⟦2-char-id⟧.current[⟦2-char-id⟧] = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? lB : "", ⟦2-char-id⟧.current[⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧.current = Date.now(), !0
             }));
             return ⟦2-char-id⟧.current = ⟦2-char-id⟧.catch((() => !1)), ⟦2-char-id⟧
           } : void 0,
```

</details>

<details>
<summary>Hunk 385 · Change · +3 / -3</summary>

```diff
@@ -15357,17 +15357,17 @@
             ⟦2-char-id⟧.current = "settings", ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧("addKey")
           }
         }), "addKey" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
-          editing: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? yc : void 0,
+          editing: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? MT : void 0,
           onAdded: () => {
             ⟦2-char-id⟧.current = !0, ⟦2-char-id⟧(⟦2-char-id⟧.current)
           },
           onOpenSettings: () => {
             ⟦2-char-id⟧.current = !1, ⟦2-char-id⟧("settings")
           }
-        }, null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.id) && void 0 !== ⟦2-char-id⟧ ? EJ : "new"), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
+        }, null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.id) && void 0 !== ⟦2-char-id⟧ ? tB : "new"), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
           notes: ⟦2-char-id⟧,
           outline: ⟦2-char-id⟧(⟦2-char-id⟧, new Set(⟦2-char-id⟧().callbackNames())),
-          XE: ⟦2-char-id⟧,
+          Om: ⟦2-char-id⟧,
           onDelete: ⟦2-char-id⟧ => {
             ⟦2-char-id⟧.remove(⟦2-char-id⟧, ⟦2-char-id⟧).then(⟦2-char-id⟧).catch((⟦2-char-id⟧ => {
               console.error("World Code AI: couldn't delete a note", ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 386 · Change · +1 / -1</summary>

```diff
@@ -15385,7 +15385,7 @@
               defaultOpen: !⟦2-char-id⟧.byItself,
               isElsewhere: !⟦2-char-id⟧,
               onRetry: ⟦2-char-id⟧.id !== ⟦2-char-id⟧ || ⟦2-char-id⟧ || 0 !== ⟦2-char-id⟧.length ? void 0 : () => {
-                ⟦2-char-id⟧(⟦2-char-id⟧.p, ⟦2-char-id⟧, {
+                ⟦2-char-id⟧(⟦2-char-id⟧.u, ⟦2-char-id⟧, {
                   about: ⟦2-char-id⟧(⟦2-char-id⟧.id),
                   failedEdits: ⟦2-char-id⟧.failedEdits
                 })
```

</details>

<details>
<summary>Hunk 387 · Change · +1 / -1</summary>

```diff
@@ -15397,7 +15397,7 @@
               target: ⟦2-char-id⟧.target,
               isOpen: ⟦2-char-id⟧
             }), (0, ⟦2-char-id⟧.jsxs)("div", {
-              className: ⟦2-char-id⟧()("WorldCodeAiEntry", `WorldCodeAiEntry-${JJ.role}`, {
+              className: ⟦2-char-id⟧()("WorldCodeAiEntry", `WorldCodeAiEntry-${BB.role}`, {
                 "WorldCodeAiEntry-elsewhere": !⟦2-char-id⟧,
                 WorldCodeAiNotice: ⟦2-char-id⟧.isNotice,
                 "WorldCodeAiNotice-calm": ⟦2-char-id⟧.isNotice && ⟦2-char-id⟧.isCalm,
```

</details>

<details>
<summary>Hunk 388 · Change · +1 / -1</summary>

```diff
@@ -15428,7 +15428,7 @@
                         id: 0,
                         at: 0,
                         label: "",
-                        files: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.undoFiles) && void 0 !== ⟦2-char-id⟧ ? cJ : {}
+                        files: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.undoFiles) && void 0 !== ⟦2-char-id⟧ ? TB : {}
                       }, ⟦2-char-id⟧).filter((⟦2-char-id⟧ => void 0 !== ⟦2-char-id⟧.leftFiles && ⟦2-char-id⟧.path in ⟦2-char-id⟧.leftFiles));
                       if (⟦2-char-id⟧.length > 0) {
                         if (!await ⟦2-char-id⟧(⟦2-char-id⟧)) return;
```

</details>

<details>
<summary>Hunk 389 · Change · +1 / -1</summary>

```diff
@@ -15443,7 +15443,7 @@
                         status: "undone"
                       } : ⟦2-char-id⟧(⟦2-char-id⟧) && ⟦2-char-id⟧.wentBack && ⟦2-char-id⟧.changes.every((⟦2-char-id⟧ => {
                         var ⟦2-char-id⟧;
-                        return (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.path]) && void 0 !== ⟦2-char-id⟧ ? cJ : "") === ⟦2-char-id⟧.after
+                        return (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.path]) && void 0 !== ⟦2-char-id⟧ ? TB : "") === ⟦2-char-id⟧.after
                       })) ? {
                         ...⟦2-char-id⟧,
                         status: "applied",
```

</details>

<details>
<summary>Hunk 390 · Change · +1 / -1</summary>

```diff
@@ -15453,7 +15453,7 @@
                   },
                   children: ⟦2-char-id⟧ ? "Undo going back after this answer" : "Undo going back"
                 })]
-              }) : "assistant" === ⟦2-char-id⟧.role ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
+              }) : "assistant" === ⟦2-char-id⟧.role ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                 markdown: "applied" !== ⟦2-char-id⟧.status && !⟦2-char-id⟧.editedInPlace && (⟦2-char-id⟧.changes.length > 0 || null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.failedEdits) && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.length) ? ⟦2-char-id⟧(⟦2-char-id⟧.text) : ⟦2-char-id⟧.text
               }) : (0, ⟦2-char-id⟧.jsx)("p", {
                 children: ⟦2-char-id⟧.text
```

</details>

<details>
<summary>Hunk 391 · Change · +1 / -1</summary>

```diff
@@ -15472,7 +15472,7 @@
                     className: "WorldCodeAiForgetAsk",
                     children: [1 === ⟦2-char-id⟧.forgetNotes.length ? "Forget this note in AI notes too? " : "Forget these notes in AI notes too? ", (0, ⟦2-char-id⟧.jsx)("span", {
                       className: "WorldCodeAiForgetNote",
-                      children: ⟦2-char-id⟧.forgetNotes.map((⟦2-char-id⟧ => `"${JJ}"`)).join(", ")
+                      children: ⟦2-char-id⟧.forgetNotes.map((⟦2-char-id⟧ => `"${BB}"`)).join(", ")
                     })]
                   }), (0, ⟦2-char-id⟧.jsxs)("div", {
                     className: "WorldCodeAiNoteButtons",
```

</details>

<details>
<summary>Hunk 392 · Change · +2 / -2</summary>

```diff
@@ -15500,9 +15500,9 @@
                 elsewhere: ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.target,
                 isOutOfDate: ⟦2-char-id⟧ && !⟦2-char-id⟧.current.has(⟦2-char-id⟧.id) && ⟦2-char-id⟧.changes.some((⟦2-char-id⟧ => {
                   var ⟦2-char-id⟧;
-                  return (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.path]) && void 0 !== ⟦2-char-id⟧ ? cJ : "") !== ⟦2-char-id⟧.before
+                  return (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.path]) && void 0 !== ⟦2-char-id⟧ ? TB : "") !== ⟦2-char-id⟧.before
                 })),
-                canEdit: ⟦2-char-id⟧ ? wJ : !!⟦2-char-id⟧ && (!⟦2-char-id⟧.target.codeBlock || ⟦2-char-id⟧.target.canChangePos),
+                canEdit: ⟦2-char-id⟧ ? KB : !!⟦2-char-id⟧ && (!⟦2-char-id⟧.target.codeBlock || ⟦2-char-id⟧.target.canChangePos),
                 request: ⟦2-char-id⟧(⟦2-char-id⟧.id),
                 onApply: ⟦2-char-id⟧ => {
                   ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧ ? {
```

</details>

<details>
<summary>Hunk 393 · Change · +1 / -1</summary>

```diff
@@ -15518,7 +15518,7 @@
                     }, ⟦2-char-id⟧(⟦2-char-id⟧.target))
                   })(⟦2-char-id⟧, ⟦2-char-id⟧)
                 },
-                checkPicked: ⟦2-char-id⟧ ? qF : void 0,
+                checkPicked: ⟦2-char-id⟧ ? gV : void 0,
                 onPickedChange: ⟦2-char-id⟧ => {
                   ⟦2-char-id⟧((⟦2-char-id⟧ => {
                     if (⟦2-char-id⟧.has(⟦2-char-id⟧.id) === ⟦2-char-id⟧) return ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 394 · Change · +1 / -1</summary>

```diff
@@ -15531,7 +15531,7 @@
                     const ⟦2-char-id⟧ = ⟦2-char-id⟧.current;
                     if (⟦2-char-id⟧.changes.some((⟦2-char-id⟧ => {
                         var ⟦2-char-id⟧;
-                        return (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.path]) && void 0 !== ⟦2-char-id⟧ ? ZJ : "") !== ⟦2-char-id⟧.after
+                        return (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.path]) && void 0 !== ⟦2-char-id⟧ ? dB : "") !== ⟦2-char-id⟧.after
                       }))) return;
                     await ⟦2-char-id⟧(⟦2-char-id⟧.changes.map((⟦2-char-id⟧ => ({
                       path: ⟦2-char-id⟧.path,
```

</details>

<details>
<summary>Hunk 395 · Change · +3 / -3</summary>

```diff
@@ -15548,14 +15548,14 @@
                 isLatest: ⟦2-char-id⟧ && ⟦2-char-id⟧.id > ⟦2-char-id⟧,
                 canUndo: ⟦2-char-id⟧ && ⟦2-char-id⟧.changes.every((⟦2-char-id⟧ => {
                   var ⟦2-char-id⟧;
-                  return (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.path]) && void 0 !== ⟦2-char-id⟧ ? cJ : "") === ⟦2-char-id⟧.after
+                  return (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.path]) && void 0 !== ⟦2-char-id⟧ ? TB : "") === ⟦2-char-id⟧.after
                 })),
                 onFixWarnings: () => {
                   (⟦2-char-id⟧ => {
                     var ⟦2-char-id⟧;
-                    const ⟦2-char-id⟧ = ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.warnings) && void 0 !== ⟦2-char-id⟧ ? cJ : []);
+                    const ⟦2-char-id⟧ = ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.warnings) && void 0 !== ⟦2-char-id⟧ ? TB : []);
                     var ⟦2-char-id⟧;
-                    if (!⟦2-char-id⟧) return void ⟦2-char-id⟧(`Fix this in your change: ${null===(FJ=JJ.warnings)||void 0===FJ?void 0:FJ.join(" ")}`);
+                    if (!⟦2-char-id⟧) return void ⟦2-char-id⟧(`Fix this in your change: ${null===(VB=BB.warnings)||void 0===VB?void 0:VB.join(" ")}`);
                     const ⟦2-char-id⟧ = ⟦2-char-id⟧(),
                       ⟦2-char-id⟧ = ⟦2-char-id⟧.changes.map((⟦2-char-id⟧ => ({
                         ...⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 396 · Change · +1 / -1</summary>

```diff
@@ -15569,7 +15569,7 @@
                       status: "offered"
                     }), ⟦2-char-id⟧({
                       role: "assistant",
-                      text: `Fixed without asking the AI: ${ZJ.map(Dq).join(" ")}`,
+                      text: `Fixed without asking the AI: ${dB.map(DY).join(" ")}`,
                       changes: ⟦2-char-id⟧,
                       status: "offered",
                       swappedTo: ⟦2-char-id⟧.flatMap((⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 397 · Change · +8 / -8</summary>

```diff
@@ -15585,25 +15585,25 @@
                 onCheck: () => {
                   ⟦2-char-id⟧(function(⟦2-char-id⟧) {
                     const ⟦2-char-id⟧ = [...new Set(⟦2-char-id⟧)];
-                    return ⟦2-char-id⟧.length > 0 ? `${bh} These names were checked against the game and are right, so keep them: ${cJ.map((JJ=>`"${JJ}"`)).join(", ")}.` : ⟦2-char-id⟧
+                    return ⟦2-char-id⟧.length > 0 ? `${Sk} These names were checked against the game and are right, so keep them: ${TB.map((BB=>`"${BB}"`)).join(", ")}.` : ⟦2-char-id⟧
                   }(⟦2-char-id⟧.flatMap((⟦2-char-id⟧ => {
                     var ⟦2-char-id⟧;
-                    return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.swappedTo) && void 0 !== ⟦2-char-id⟧ ? cJ : []
+                    return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.swappedTo) && void 0 !== ⟦2-char-id⟧ ? TB : []
                   }))), "Check it for mistakes")
                 },
-                busy: ⟦2-char-id⟧ ? !!qc : !⟦2-char-id⟧
+                busy: ⟦2-char-id⟧ ? !!YT : !⟦2-char-id⟧
               }), ⟦2-char-id⟧.question && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
                 ownAnswerBelow: !0,
                 question: ⟦2-char-id⟧.question,
                 onAnswer: ⟦2-char-id⟧.id !== ⟦2-char-id⟧ || ⟦2-char-id⟧ ? void 0 : (⟦2-char-id⟧, ⟦2-char-id⟧) => {
                   var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-                  const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.question) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.question) && void 0 !== ⟦2-char-id⟧ ? FJ : "",
-                    ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.askedFor) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.request) && void 0 !== ⟦2-char-id⟧ ? eJ : "";
-                  ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? cJ : "Let the AI pick", {
+                  const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.question) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.question) && void 0 !== ⟦2-char-id⟧ ? VB : "",
+                    ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.askedFor) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.request) && void 0 !== ⟦2-char-id⟧ ? pB : "";
+                  ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? TB : "Let the AI pick", {
                     check: ⟦2-char-id⟧,
                     about: null === (⟦2-char-id⟧ = ⟦2-char-id⟧.askedFor) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.request,
-                    asked: ⟦2-char-id⟧ && ⟦2-char-id⟧ ? `${hJ} ${cJ}` : null,
-                    guardWords: ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.askedFor) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.guardWords) && void 0 !== ⟦2-char-id⟧ ? qJ : "", ⟦2-char-id⟧, ⟦2-char-id⟧)
+                    asked: ⟦2-char-id⟧ && ⟦2-char-id⟧ ? `${kB} ${TB}` : null,
+                    guardWords: ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.askedFor) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.guardWords) && void 0 !== ⟦2-char-id⟧ ? YB : "", ⟦2-char-id⟧, ⟦2-char-id⟧)
                   })
                 }
               }), ⟦2-char-id⟧ && ⟦2-char-id⟧.offerExport && (0, ⟦2-char-id⟧.jsx)("button", {
```

</details>

<details>
<summary>Hunk 398 · Change · +6 / -6</summary>

```diff
@@ -15616,18 +15616,18 @@
                 children: "Save my game"
               }), ⟦2-char-id⟧.plan && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
                 steps: ⟦2-char-id⟧.plan,
-                built: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.planBuilt) && void 0 !== ⟦2-char-id⟧ ? qJ : 0,
-                done: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.planDone) && void 0 !== ⟦2-char-id⟧ ? YJ : 0,
+                built: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.planBuilt) && void 0 !== ⟦2-char-id⟧ ? YB : 0,
+                done: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.planDone) && void 0 !== ⟦2-char-id⟧ ? oB : 0,
                 onBuild: ⟦2-char-id⟧ && !⟦2-char-id⟧ && ⟦2-char-id⟧ ? ⟦2-char-id⟧ => {
                   var ⟦2-char-id⟧;
-                  const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.plan) && void 0 !== ⟦2-char-id⟧ ? ZJ : [];
+                  const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.plan) && void 0 !== ⟦2-char-id⟧ ? dB : [];
                   ⟦2-char-id⟧((() => {
                     ⟦2-char-id⟧(⟦2-char-id⟧.id, {
                       planBuilt: ⟦2-char-id⟧ + 1
                     }), ⟦2-char-id⟧.current(function(⟦2-char-id⟧, ⟦2-char-id⟧) {
-                      const ⟦2-char-id⟧ = ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => `${ZJ+1}. ${JJ}${ZJ<cJ?" (built)":""}`)).join("\n");
-                      return `Build step ${cJ+1} of our plan now: ${JJ[cJ]}\nThe whole plan:\n${ZJ}\nBuild only step ${cJ+1}, keeping what earlier steps built, so I can try it before the next.`
-                    }(⟦2-char-id⟧, ⟦2-char-id⟧), `Build step ${cJ+1}: ${FJ[cJ]}`, {
+                      const ⟦2-char-id⟧ = ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => `${dB+1}. ${BB}${dB<TB?" (built)":""}`)).join("\n");
+                      return `Build step ${TB+1} of our plan now: ${BB[TB]}\nThe whole plan:\n${dB}\nBuild only step ${TB+1}, keeping what earlier steps built, so I can try it before the next.`
+                    }(⟦2-char-id⟧, ⟦2-char-id⟧), `Build step ${TB+1}: ${VB[TB]}`, {
                       about: ⟦2-char-id⟧[⟦2-char-id⟧],
                       asked: ⟦2-char-id⟧[⟦2-char-id⟧],
                       planStep: {
```

</details>

<details>
<summary>Hunk 399 · Change · +1 / -1</summary>

```diff
@@ -15645,7 +15645,7 @@
                 onAnswer: ⟦2-char-id⟧ => {
                   ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
                 }
-              }, "asked" === ⟦2-char-id⟧.noteStatus ? "asked" : "ys"), !⟦2-char-id⟧ && ⟦2-char-id⟧, ⟦2-char-id⟧.lookups && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
+              }, "asked" === ⟦2-char-id⟧.noteStatus ? "asked" : "RO"), !⟦2-char-id⟧ && ⟦2-char-id⟧, ⟦2-char-id⟧.lookups && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
                 lookups: ⟦2-char-id⟧.lookups.lookups,
                 defaultOpen: !⟦2-char-id⟧.lookedAt,
                 isElsewhere: !⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 400 · Change · +2 / -2</summary>

```diff
@@ -15686,9 +15686,9 @@
                 isElsewhere: !⟦2-char-id⟧,
                 onSwitch: ⟦2-char-id⟧ && ⟦2-char-id⟧ ? () => {
                   var ⟦2-char-id⟧;
-                  ⟦2-char-id⟧(⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.worldCode) && void 0 !== ⟦2-char-id⟧ ? cJ : []))
+                  ⟦2-char-id⟧(⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.worldCode) && void 0 !== ⟦2-char-id⟧ ? TB : []))
                 } : void 0
-              }), ⟦2-char-id⟧ && "ask" === ⟦2-char-id⟧.trial && ⟦2-char-id⟧.id > ⟦2-char-id⟧ && ⟦2-char-id⟧ <= (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.trialErrors) && void 0 !== ⟦2-char-id⟧ ? hJ : 0) && (0, ⟦2-char-id⟧.jsxs)("div", {
+              }), ⟦2-char-id⟧ && "ask" === ⟦2-char-id⟧.trial && ⟦2-char-id⟧.id > ⟦2-char-id⟧ && ⟦2-char-id⟧ <= (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.trialErrors) && void 0 !== ⟦2-char-id⟧ ? kB : 0) && (0, ⟦2-char-id⟧.jsxs)("div", {
                 className: "WorldCodeAiTrial",
                 children: [(0, ⟦2-char-id⟧.jsx)("span", {
                   children: "Did your world do what you wanted?"
```

</details>

<details>
<summary>Hunk 401 · Change · +5 / -5</summary>

```diff
@@ -15753,22 +15753,22 @@
               }), void 0 !== ⟦2-char-id⟧.retry && !⟦2-char-id⟧.keyNotice && ⟦2-char-id⟧.id === ⟦2-char-id⟧ && !⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)("div", {
                 className: "WorldCodeAiRetry",
                 children: [(0, ⟦2-char-id⟧.jsx)("button", {
-                  ...⟦2-char-id⟧.d,
+                  ...⟦2-char-id⟧.f,
                   className: "WorldCodeAiSecondaryButton",
-                  disabled: (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.retryAt) && void 0 !== ⟦2-char-id⟧ ? DJ : 0) > ⟦2-char-id⟧,
+                  disabled: (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.retryAt) && void 0 !== ⟦2-char-id⟧ ? LB : 0) > ⟦2-char-id⟧,
                   onClick: () => {
                     var ⟦2-char-id⟧;
-                    ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.retry) && void 0 !== ⟦2-char-id⟧ ? cJ : "", ⟦2-char-id⟧.retryShown, {
+                    ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.retry) && void 0 !== ⟦2-char-id⟧ ? TB : "", ⟦2-char-id⟧.retryShown, {
                       ...⟦2-char-id⟧.retryOptions,
                       retryOf: ⟦2-char-id⟧.id
                     })
                   },
-                  children: (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.retryAt) && void 0 !== ⟦2-char-id⟧ ? sJ : 0) > ⟦2-char-id⟧ ? `Try again in ${ph((null!==(nJ=JJ.retryAt)&&void 0!==nJ?nJ:0)-ac)}` : "Try again"
+                  children: (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.retryAt) && void 0 !== ⟦2-char-id⟧ ? OB : 0) > ⟦2-char-id⟧ ? `Try again in ${Wk((null!==(DB=BB.retryAt)&&void 0!==DB?DB:0)-jT)}` : "Try again"
                 }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)("button", {
                   className: "WorldCodeAiPrimaryButton",
                   onClick: () => {
                     var ⟦2-char-id⟧;
-                    ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.retry) && void 0 !== ⟦2-char-id⟧ ? cJ : "", ⟦2-char-id⟧.retryShown, {
+                    ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.retry) && void 0 !== ⟦2-char-id⟧ ? TB : "", ⟦2-char-id⟧.retryShown, {
                       ...⟦2-char-id⟧.retryOptions,
                       retryOf: ⟦2-char-id⟧.id,
                       useFree: !1
```

</details>

<details>
<summary>Hunk 402 · Change · +1 / -1</summary>

```diff
@@ -15792,7 +15792,7 @@
               defaultOpen: !⟦2-char-id⟧.lookedAt,
               isElsewhere: !⟦2-char-id⟧
             }), !⟦2-char-id⟧.lookups && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
-              title: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.logTitle) && void 0 !== ⟦2-char-id⟧ ? mJ : ⟦2-char-id⟧.isCalm ? "Update" : "Problem",
+              title: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.logTitle) && void 0 !== ⟦2-char-id⟧ ? iB : ⟦2-char-id⟧.isCalm ? "Update" : "Problem",
               isCalm: ⟦2-char-id⟧.isCalm || "user" === ⟦2-char-id⟧.role,
               isElsewhere: !⟦2-char-id⟧,
               children: (0, ⟦2-char-id⟧.jsx)("p", {
```

</details>

<details>
<summary>Hunk 403 · Change · +4 / -4</summary>

```diff
@@ -15810,21 +15810,21 @@
           }), (0, ⟦2-char-id⟧.jsxs)("div", {
             className: "WorldCodeAiChips",
             children: [⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("button", {
-              ...⟦2-char-id⟧.d,
+              ...⟦2-char-id⟧.f,
               className: "WorldCodeAiChip",
               onClick: () => {
                 ⟦2-char-id⟧("Explain what my code does")
               },
               children: "Explain my code"
             }), ⟦2-char-id⟧ && !⟦2-char-id⟧ && !⟦2-char-id⟧ && ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("button", {
-              ...⟦2-char-id⟧.d,
+              ...⟦2-char-id⟧.f,
               className: "WorldCodeAiChip",
               onClick: () => {
                 ⟦2-char-id⟧("Put the numbers and messages in my code that I might want to change (times, amounts, messages) in CONFIG settings at the top, and use them from there. Change nothing else.", "Make settings I can change")
               },
               children: "Make settings I can change"
-            }), (⟦2-char-id⟧ ? ⟦2-char-id⟧ ? nh : sh : []).map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.createElement)("button", {
-              ...⟦2-char-id⟧.d,
+            }), (⟦2-char-id⟧ ? ⟦2-char-id⟧ ? mk : vk : []).map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.createElement)("button", {
+              ...⟦2-char-id⟧.f,
               key: ⟦2-char-id⟧,
               className: "WorldCodeAiChip",
               onClick: () => {
```

</details>

<details>
<summary>Hunk 404 · Change · +1 / -1</summary>

```diff
@@ -15833,7 +15833,7 @@
             }, ⟦2-char-id⟧)))]
           }), (0, ⟦2-char-id⟧.jsxs)("p", {
             className: "WorldCodeAiPrivacy",
-            children: [⟦2-char-id⟧ ? `Bloxd's safety check first makes sure your request is about your game, then it goes with your code to ${kF.model.name} with your key.` : ⟦2-char-id⟧ ? "deepseek" === ⟦2-char-id⟧.provider ? "Your request and code go through Bloxd to Super Bot.xd, run by DeepSeek, which stores them on its servers in China." : "Your request and code go through Bloxd to Super Bot.xd." : "Your request and code go to Bot.xd, which doesn't keep them.", " ", "Never type personal details, like your name, address or school."]
+            children: [⟦2-char-id⟧ ? `Bloxd's safety check first makes sure your request is about your game, then it goes with your code to ${QV.model.name} with your key.` : ⟦2-char-id⟧ ? "deepseek" === ⟦2-char-id⟧.provider ? "Your request and code go through Bloxd to Super Bot.xd, run by DeepSeek, which stores them on its servers in China." : "Your request and code go through Bloxd to Super Bot.xd." : "Your request and code go to Bot.xd, which doesn't keep them.", " ", "Never type personal details, like your name, address or school."]
           }), !⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)("p", {
             className: "WorldCodeAiPrivacy",
             children: ["Want a stronger AI?", " ", (0, ⟦2-char-id⟧.jsx)("button", {
```

</details>

<details>
<summary>Hunk 405 · Change · +5 / -5</summary>

```diff
@@ -15852,20 +15852,20 @@
             }), (0, ⟦2-char-id⟧.jsx)("span", {
               className: "WorldCodeAiBusyText",
               children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
-                title: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? KJ : "Thinking\u2026",
+                title: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? sB : "Thinking\u2026",
                 isCalm: !0,
                 children: "waiting" === ⟦2-char-id⟧.phase ? (0, ⟦2-char-id⟧.jsxs)("span", {
                   className: "WorldCodeAiBusyHint",
-                  children: [⟦2-char-id⟧((null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.until) && void 0 !== ⟦2-char-id⟧ ? yJ : ⟦2-char-id⟧) - ⟦2-char-id⟧), " Lots of people share Bot.xd."]
+                  children: [⟦2-char-id⟧((null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.until) && void 0 !== ⟦2-char-id⟧ ? MB : ⟦2-char-id⟧) - ⟦2-char-id⟧), " Lots of people share Bot.xd."]
                 }) : (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
                   children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
                     busy: ⟦2-char-id⟧
-                  }), "screening" === ⟦2-char-id⟧.phase && (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.until) && void 0 !== ⟦2-char-id⟧ ? SJ : 0) > ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)("span", {
+                  }), "screening" === ⟦2-char-id⟧.phase && (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.until) && void 0 !== ⟦2-char-id⟧ ? zB : 0) > ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)("span", {
                     className: "WorldCodeAiBusyHint",
-                    children: [⟦2-char-id⟧((null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.until) && void 0 !== ⟦2-char-id⟧ ? IJ : ⟦2-char-id⟧) - ⟦2-char-id⟧), " Lots of people share the safety check."]
+                    children: [⟦2-char-id⟧((null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.until) && void 0 !== ⟦2-char-id⟧ ? wB : ⟦2-char-id⟧) - ⟦2-char-id⟧), " Lots of people share the safety check."]
                   }), "checking" !== ⟦2-char-id⟧.phase && "screening" !== ⟦2-char-id⟧.phase && (0, ⟦2-char-id⟧.jsx)("span", {
                     className: "WorldCodeAiBusyHint",
-                    children: ⟦2-char-id⟧.keyModel ? `${qc.keyModel} is answering with your key.` : ⟦2-char-id⟧.isSuperBot ? `${oX} is answering from your usage.` : ⟦2-char-id⟧(⟦2-char-id⟧.current, ⟦2-char-id⟧.model)
+                    children: ⟦2-char-id⟧.keyModel ? `${YT.keyModel} is answering with your key.` : ⟦2-char-id⟧.isSuperBot ? `${BJ} is answering from your usage.` : ⟦2-char-id⟧(⟦2-char-id⟧.current, ⟦2-char-id⟧.model)
                   })]
                 })
               })
```

</details>

<details>
<summary>Hunk 406 · Change · +1 / -1</summary>

```diff
@@ -15889,7 +15889,7 @@
                 isCalm: !0,
                 children: (0, ⟦2-char-id⟧.jsx)("span", {
                   className: "WorldCodeAiBusyHint",
-                  children: ⟦2-char-id⟧ ? "Your code block runs once in your world, as if you clicked it. If it shows an error, the AI fixes it." : `Your change runs in your world for ${Zj.B/1e3} seconds. If it shows an error, the AI fixes it.`
+                  children: ⟦2-char-id⟧ ? "Your code block runs once in your world, as if you clicked it. If it shows an error, the AI fixes it." : `Your change runs in your world for ${yg.J/1e3} seconds. If it shows an error, the AI fixes it.`
                 })
               })
             }), (0, ⟦2-char-id⟧.jsx)("button", {
```

</details>

<details>
<summary>Hunk 407 · Change · +2 / -2</summary>

```diff
@@ -15903,10 +15903,10 @@
           return (0, ⟦2-char-id⟧.jsxs)("div", {
             className: "WorldCodeAiEntry WorldCodeAiEntry-user WorldCodeAiQueued",
             children: [(0, ⟦2-char-id⟧.jsx)("p", {
-              children: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.shown) && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧.text
+              children: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.shown) && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧.text
             }), (0, ⟦2-char-id⟧.jsxs)("span", {
               className: "WorldCodeAiQueuedNote",
-              children: [⟦2-char-id⟧.id === ⟦2-char-id⟧ ? "Pick Bot.xd to send it" : null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? FJ : "In line", (0, ⟦2-char-id⟧.jsx)("button", {
+              children: [⟦2-char-id⟧.id === ⟦2-char-id⟧ ? "Pick Bot.xd to send it" : null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? VB : "In line", (0, ⟦2-char-id⟧.jsx)("button", {
                 className: "WorldCodeAiLinkButton",
                 onClick: () => {
                   ⟦2-char-id⟧((⟦2-char-id⟧ => ⟦2-char-id⟧.filter((⟦2-char-id⟧ => ⟦2-char-id⟧.id !== ⟦2-char-id⟧.id))))
```

</details>

<details>
<summary>Hunk 408 · Change · +2 / -2</summary>

```diff
@@ -15926,9 +15926,9 @@
               title: "Show this line in your code",
               onClick: () => {
                 var ⟦2-char-id⟧, ⟦2-char-id⟧;
-                ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.path) && void 0 !== ⟦2-char-id⟧ ? JJ : ⟦2-char-id⟧, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.line) && void 0 !== ⟦2-char-id⟧ ? cJ : 1), window.matchMedia("(max-width: 900px)").matches && ⟦2-char-id⟧()
+                ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.path) && void 0 !== ⟦2-char-id⟧ ? BB : ⟦2-char-id⟧, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.line) && void 0 !== ⟦2-char-id⟧ ? TB : 1), window.matchMedia("(max-width: 900px)").matches && ⟦2-char-id⟧()
               },
-              children: [⟦2-char-id⟧.path && ⟦2-char-id⟧.path !== ⟦2-char-id⟧ ? `${KZ.path} line` : "Line", " ", ⟦2-char-id⟧.line]
+              children: [⟦2-char-id⟧.path && ⟦2-char-id⟧.path !== ⟦2-char-id⟧ ? `${Md.path} line` : "Line", " ", ⟦2-char-id⟧.line]
             }), ":", " "]
           }), ⟦2-char-id⟧.text]
         }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
```

</details>

<details>
<summary>Hunk 409 · Change · +4 / -4</summary>

```diff
@@ -15937,20 +15937,20 @@
         }), (0, ⟦2-char-id⟧.jsxs)("div", {
           className: "WorldCodeAiErrorActions",
           children: [(0, ⟦2-char-id⟧.jsx)("button", {
-            ...⟦2-char-id⟧.d,
+            ...⟦2-char-id⟧.f,
             className: "WorldCodeAiPrimaryButton",
             onClick: () => {
               ⟦2-char-id⟧((() => {
-                ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧.current(`Fix this error: ${VZ}`)
+                ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧.current(`Fix this error: ${sd}`)
               }))
             },
             children: "Fix the error"
           }), (0, ⟦2-char-id⟧.jsx)("button", {
-            ...⟦2-char-id⟧.d,
+            ...⟦2-char-id⟧.f,
             className: "WorldCodeAiSecondaryButton",
             onClick: () => {
               ⟦2-char-id⟧((() => {
-                ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧.current(`Explain this error in simple words, and where it is in my code: ${VZ}`)
+                ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧.current(`Explain this error in simple words, and where it is in my code: ${sd}`)
               }))
             },
             children: "Explain it"
```

</details>

<details>
<summary>Hunk 410 · Change · +3 / -3</summary>

```diff
@@ -15997,19 +15997,19 @@
               value: ⟦2-char-id⟧,
               maxLength: 1⟦2-char-id⟧,
               rows: 2,
-              placeholder: ⟦2-char-id⟧ ? `How should ${yY(Nc)} change?` : ⟦2-char-id⟧ ? "Or type your own answer here" : "Ask AI",
+              placeholder: ⟦2-char-id⟧ ? `How should ${Fo(ZT)} change?` : ⟦2-char-id⟧ ? "Or type your own answer here" : "Ask AI",
               onChange: ⟦2-char-id⟧ => {
                 ⟦2-char-id⟧(⟦2-char-id⟧.target.value)
               },
               onKeyDown: ⟦2-char-id⟧ => {
                 ⟦2-char-id⟧.stopPropagation(), "Enter" !== ⟦2-char-id⟧.key || ⟦2-char-id⟧.shiftKey || ⟦2-char-id⟧.nativeEvent.isComposing || 229 === ⟦2-char-id⟧.nativeEvent.keyCode || (⟦2-char-id⟧.preventDefault(), ⟦2-char-id⟧())
               }
-            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.m, {
+            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.k, {
               className: "WorldCodeAiSend",
               ariaLabel: "Send",
               disabled: "" === ⟦2-char-id⟧.trim() || !!⟦2-char-id⟧ && ⟦2-char-id⟧.length >= 3,
               onClick: ⟦2-char-id⟧,
-              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                 name: "arrow-up"
               })
             })]
```

</details>

<details>
<summary>Hunk 411 · Change · +5 / -5</summary>

```diff
@@ -16020,17 +16020,17 @@
         children: (0, ⟦2-char-id⟧.jsx)("div", {
           className: ⟦2-char-id⟧()("WorldCodeAiLimit", ⟦2-char-id⟧ && "WorldCodeAiLimit-busy"),
           children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
-            editsOn: ⟦2-char-id⟧ ? Mc : null,
+            editsOn: ⟦2-char-id⟧ ? UT : null,
             freeOnce: ⟦2-char-id⟧,
             onFreeOnce: ⟦2-char-id⟧,
             onAddKey: ⟦2-char-id⟧,
             children: (() => {
-              if (⟦2-char-id⟧) return 0 === ⟦2-char-id⟧.length ? "You can type your next request: it sends when this answer is done." : 1 === ⟦2-char-id⟧.length ? "1 request waiting: it sends when this answer is done." : `${TZ.length} requests waiting: they send one at a time.`;
-              if (⟦2-char-id⟧ && ⟦2-char-id⟧) return `Your next question goes to Bot.xd, then back to ${kF.model.name}.`;
-              if (⟦2-char-id⟧) return `Your question and code go to ${sX(kF.provider,kF.baseUrl,!0)}.`;
+              if (⟦2-char-id⟧) return 0 === ⟦2-char-id⟧.length ? "You can type your next request: it sends when this answer is done." : 1 === ⟦2-char-id⟧.length ? "1 request waiting: it sends when this answer is done." : `${hd.length} requests waiting: they send one at a time.`;
+              if (⟦2-char-id⟧ && ⟦2-char-id⟧) return `Your next question goes to Bot.xd, then back to ${QV.model.name}.`;
+              if (⟦2-char-id⟧) return `Your question and code go to ${ul(QV.provider,QV.baseUrl,!0)}.`;
               if (⟦2-char-id⟧) {
                 const ⟦2-char-id⟧ = null === ⟦2-char-id⟧ ? null : function(⟦2-char-id⟧, ⟦2-char-id⟧) {
-                  return ⟦2-char-id⟧ <= ⟦2-char-id⟧ ? null : `Limit resets in ${(0,tX.d)(Math.ceil((JJ-cJ)/6e4))}`
+                  return ⟦2-char-id⟧ <= ⟦2-char-id⟧ ? null : `Limit resets in ${(0,el.d)(Math.ceil((BB-TB)/6e4))}`
                 }(⟦2-char-id⟧, ⟦2-char-id⟧);
                 return null === ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧) : (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
                   children: [(0, ⟦2-char-id⟧.jsx)("span", {
```

</details>

<details>
<summary>Hunk 412 · Change · +1 / -1</summary>

```diff
@@ -16042,7 +16042,7 @@
                   })]
                 })
               }
-              return ⟦2-char-id⟧ > ⟦2-char-id⟧ ? `Send now and it starts by itself. ${sY(QZ-ac)}` : null
+              return ⟦2-char-id⟧ > ⟦2-char-id⟧ ? `Send now and it starts by itself. ${Eo(td-jT)}` : null
             })()
           })
         })
```

</details>

<details>
<summary>Hunk 413 · Change · +5 / -5</summary>

```diff
@@ -16050,16 +16050,16 @@
     });
     return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
       step: ⟦2-char-id⟧,
-      onPrevious: "aiPanel" === ⟦2-char-id⟧ ? pJ : void 0,
+      onPrevious: "aiPanel" === ⟦2-char-id⟧ ? QB : void 0,
       children: ⟦2-char-id⟧
     })
   })),
   ⟦2-char-id⟧ = ⟦2-char-id⟧
-}, 38582: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+}, 38528: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
   ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-    c: () => ⟦2-char-id⟧,
-    f: () => ⟦2-char-id⟧,
-    j: () => ⟦2-char-id⟧
+    d: () => ⟦2-char-id⟧,
+    g: () => ⟦2-char-id⟧,
+    k: () => ⟦2-char-id⟧
   });
   const ⟦2-char-id⟧ = 6⟦2-char-id⟧;
 
```

</details>

<details>
<summary>Hunk 414 · Change · +2 / -2</summary>

```diff
@@ -16068,12 +16068,12 @@
   }
 
   function ⟦2-char-id⟧(⟦2-char-id⟧) {
-    const ⟦2-char-id⟧ = (null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? JJ : "").match(/-?\d+(?:\.\d+)?/g);
+    const ⟦2-char-id⟧ = (null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? BB : "").match(/-?\d+(?:\.\d+)?/g);
     return ⟦2-char-id⟧ && ⟦2-char-id⟧.length >= 3 ? [Number(⟦2-char-id⟧[0]), Number(⟦2-char-id⟧[1]), Number(⟦2-char-id⟧[2])] : null
   }
 
   function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-    return ⟦2-char-id⟧ === ⟦2-char-id⟧ ? String(⟦2-char-id⟧) : `${JJ}-${cJ}`
+    return ⟦2-char-id⟧ === ⟦2-char-id⟧ ? String(⟦2-char-id⟧) : `${BB}-${TB}`
   }
 
   function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 415 · Change · +1 / -1</summary>

```diff
@@ -16087,7 +16087,7 @@
         let ⟦2-char-id⟧ = ⟦2-char-id⟧;
         for (; ⟦2-char-id⟧ + 1 < ⟦2-char-id⟧[0] + ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧ + 1, ⟦2-char-id⟧, ⟦2-char-id⟧) === ⟦2-char-id⟧;) ⟦2-char-id⟧++;
         if (null !== ⟦2-char-id⟧) {
-          const ⟦2-char-id⟧ = `${qJ} ${jJ} ${UJ}`,
+          const ⟦2-char-id⟧ = `${YB} ${gB} ${yB}`,
             ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧);
           ⟦2-char-id⟧ ? (⟦2-char-id⟧.z1 = ⟦2-char-id⟧, ⟦2-char-id⟧.delete(⟦2-char-id⟧), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧)) : ⟦2-char-id⟧.set(⟦2-char-id⟧, {
             x0: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 416 · Change · +4 / -4</summary>

```diff
@@ -16101,20 +16101,20 @@
       }
       ⟦2-char-id⟧.push(...⟦2-char-id⟧.values()), ⟦2-char-id⟧ = ⟦2-char-id⟧
     }
-    return ⟦2-char-id⟧.push(...⟦2-char-id⟧.values()), ⟦2-char-id⟧.sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.z0 - ⟦2-char-id⟧.z0 || ⟦2-char-id⟧.x0 - ⟦2-char-id⟧.x0)).map((⟦2-char-id⟧ => `x${XJ(JJ.x0,JJ.x1)} z${XJ(JJ.z0,JJ.z1)} ${JJ.name}`))
+    return ⟦2-char-id⟧.push(...⟦2-char-id⟧.values()), ⟦2-char-id⟧.sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.z0 - ⟦2-char-id⟧.z0 || ⟦2-char-id⟧.x0 - ⟦2-char-id⟧.x0)).map((⟦2-char-id⟧ => `x${lB(BB.x0,BB.x1)} z${lB(BB.z0,BB.z1)} ${BB.name}`))
   }
 
   function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
     let ⟦2-char-id⟧ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ⟦2-char-id⟧;
     const ⟦2-char-id⟧ = [⟦2-char-id⟧[0] + ⟦2-char-id⟧ - 1, ⟦2-char-id⟧[1] + ⟦2-char-id⟧ - 1, ⟦2-char-id⟧[2] + ⟦2-char-id⟧ - 1],
       ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.every(((⟦2-char-id⟧, ⟦2-char-id⟧) => Math.floor(⟦2-char-id⟧) >= ⟦2-char-id⟧[⟦2-char-id⟧] && Math.floor(⟦2-char-id⟧) <= ⟦2-char-id⟧[⟦2-char-id⟧])),
-      ⟦2-char-id⟧ = [`The chunk from ${JJ.join(" ")} to ${qJ.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
-    null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.push(`The player's feet are at ${UJ.map(Math.floor).join(" ")}, ${jJ?"in this chunk":"outside this chunk"}.`);
+      ⟦2-char-id⟧ = [`The chunk from ${BB.join(" ")} to ${YB.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
+    null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.push(`The player's feet are at ${yB.map(Math.floor).join(" ")}, ${gB?"in this chunk":"outside this chunk"}.`);
     const ⟦2-char-id⟧ = [];
     for (let ⟦2-char-id⟧ = ⟦2-char-id⟧[1]; ⟦2-char-id⟧ <= ⟦2-char-id⟧[1]; ⟦2-char-id⟧++) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧).join("; "),
         ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.length - 1];
-      (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.boxes) === ⟦2-char-id⟧ ? ⟦2-char-id⟧.to = FJ : ⟦2-char-id⟧.push({
+      (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.boxes) === ⟦2-char-id⟧ ? ⟦2-char-id⟧.to = VB : ⟦2-char-id⟧.push({
         from: ⟦2-char-id⟧,
         to: ⟦2-char-id⟧,
         boxes: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 417 · Change · +11 / -11</summary>

```diff
@@ -16124,32 +16124,32 @@
     0 === ⟦2-char-id⟧.length && ⟦2-char-id⟧.push("It is all air.");
     let ⟦2-char-id⟧ = ⟦2-char-id⟧.join("\n").length;
     for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
-      const ⟦2-char-id⟧ = `y${XJ(FJ.from,FJ.to)}: ${FJ.boxes}`;
+      const ⟦2-char-id⟧ = `y${lB(VB.from,VB.to)}: ${VB.boxes}`;
       if (⟦2-char-id⟧ += ⟦2-char-id⟧.length + 1, ⟦2-char-id⟧ > ⟦2-char-id⟧) {
-        ⟦2-char-id⟧.push(`Cut short: the layers from y${FJ.from} up aren't shown, as there are too many blocks.`);
+        ⟦2-char-id⟧.push(`Cut short: the layers from y${VB.from} up aren't shown, as there are too many blocks.`);
         break
       }
       ⟦2-char-id⟧.push(⟦2-char-id⟧)
     }
     return ⟦2-char-id⟧.join("\n")
   }
-}, 4220: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+}, 4218: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
   ⟦2-char-id⟧.d(⟦2-char-id⟧, {
     b: () => ⟦2-char-id⟧,
-    d: () => ⟦2-char-id⟧,
     e: () => ⟦2-char-id⟧,
-    f: () => ⟦2-char-id⟧,
-    j: () => ⟦2-char-id⟧,
-    l: () => ⟦2-char-id⟧,
+    g: () => ⟦2-char-id⟧,
+    k: () => ⟦2-char-id⟧,
     n: () => ⟦2-char-id⟧,
-    o: () => ⟦2-char-id⟧,
+    p: () => ⟦2-char-id⟧,
+    q: () => ⟦2-char-id⟧,
     r: () => ⟦2-char-id⟧,
-    u: () => ⟦2-char-id⟧
+    v: () => ⟦2-char-id⟧,
+    z: () => ⟦2-char-id⟧
   });
-  var ⟦2-char-id⟧ = ⟦2-char-id⟧(1475);
+  var ⟦2-char-id⟧ = ⟦2-char-id⟧(1477);
   const ⟦2-char-id⟧ = 24⟦2-char-id⟧,
     ⟦2-char-id⟧ = "/docs/llms.txt",
-    ⟦2-char-id⟧ = `${FJ.e}${eJ}`,
+    ⟦2-char-id⟧ = `${VB.c}${pB}`,
     ⟦2-char-id⟧ = "/llms.txt",
     ⟦2-char-id⟧ = "/docs/llms-full.txt";
 
```

</details>

<details>
<summary>Hunk 418 · Change · +2 / -2</summary>

```diff
@@ -16158,11 +16158,11 @@
   }
 
   function ⟦2-char-id⟧(⟦2-char-id⟧) {
-    return `/docs/${jJ(JJ)}.md`
+    return `/docs/${gB(BB)}.md`
   }
 
   function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-    return `/docs/${jJ(JJ)}/${cJ+1}.md`
+    return `/docs/${gB(BB)}/${TB+1}.md`
   }
   const ⟦2-char-id⟧ = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;
 
```

</details>

<details>
<summary>Hunk 419 · Change · +1 / -1</summary>

```diff
@@ -16183,7 +16183,7 @@
   }
 
   function ⟦2-char-id⟧(⟦2-char-id⟧) {
-    return `/docsHtml/${jJ(JJ)}.html`
+    return `/docsHtml/${gB(BB)}.html`
   }
 }
 };
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/83.js</code> · modified · +174 / -174</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +127 / -127</summary>

```diff
@@ -1,192 +1,192 @@
 export const ⟦2-char-id⟧ = 83;
 export const ids = [83];
 export const modules = {
-  41944: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  41997: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       DOCS_AGENT_PART_CHARS: () => ⟦2-char-id⟧.b,
-      DOCS_LLMS_FULL_TXT_PATH: () => ⟦2-char-id⟧.d,
-      DOCS_LLMS_TXT_PATH: () => ⟦2-char-id⟧.e,
-      DOCS_LLMS_TXT_URL: () => ⟦2-char-id⟧.f,
-      ROOT_LLMS_TXT_PATH: () => ⟦2-char-id⟧.j,
-      allGamemodeSettings: () => ⟦2-char-id⟧.d,
-      arcadeModeStaticConfig: () => ⟦2-char-id⟧.d,
+      DOCS_LLMS_FULL_TXT_PATH: () => ⟦2-char-id⟧.e,
+      DOCS_LLMS_TXT_PATH: () => ⟦2-char-id⟧.g,
+      DOCS_LLMS_TXT_URL: () => ⟦2-char-id⟧.k,
+      ROOT_LLMS_TXT_PATH: () => ⟦2-char-id⟧.n,
+      allGamemodeSettings: () => ⟦2-char-id⟧.e,
+      arcadeModeStaticConfig: () => ⟦2-char-id⟧.c,
       arenaStaticConfig: () => ⟦2-char-id⟧,
       backroomsStaticConfig: () => ⟦2-char-id⟧.b,
       battleBoxStaticConfig: () => ⟦2-char-id⟧,
-      bedwarsStaticConfig: () => ⟦2-char-id⟧.b,
+      bedwarsStaticConfig: () => ⟦2-char-id⟧.d,
       bloxdAggregatorConfig: () => ⟦2-char-id⟧.b,
-      bloxdK12AggregatorConfig: () => ⟦2-char-id⟧.c,
-      bloxdPreprodAggregatorConfig: () => ⟦2-char-id⟧.e,
-      bloxdStagingAggregatorConfig: () => ⟦2-char-id⟧.b,
-      bridgeBattleStaticConfig: () => ⟦2-char-id⟧.d,
+      bloxdK12AggregatorConfig: () => ⟦2-char-id⟧.d,
+      bloxdPreprodAggregatorConfig: () => ⟦2-char-id⟧.b,
+      bloxdStagingAggregatorConfig: () => ⟦2-char-id⟧.d,
+      bridgeBattleStaticConfig: () => ⟦2-char-id⟧.b,
       captureTheFlagStaticConfig: () => ⟦2-char-id⟧,
       classicStaticConfig: () => ⟦2-char-id⟧.e,
       clutchStaticConfig: () => ⟦2-char-id⟧.b,
       conquerorStaticConfig: () => ⟦2-char-id⟧,
-      containmentBreachStaticConfig: () => ⟦2-char-id⟧.c,
-      cookingStaticConfig: () => ⟦2-char-id⟧.c,
-      coolMathGamesAggregatorConfig: () => ⟦2-char-id⟧.b,
-      coreDefendersStaticConfig: () => ⟦2-char-id⟧.e,
+      containmentBreachStaticConfig: () => ⟦2-char-id⟧.d,
+      cookingStaticConfig: () => ⟦2-char-id⟧.b,
+      coolMathGamesAggregatorConfig: () => ⟦2-char-id⟧.c,
+      coreDefendersStaticConfig: () => ⟦2-char-id⟧.b,
       crazyGamesNinetyNineNightsBundle: () => ⟦2-char-id⟧.d,
       ctfStaticConfig: () => ⟦2-char-id⟧,
-      customGameSettings: () => ⟦2-char-id⟧.g,
-      customGamesListingHeading: () => ⟦2-char-id⟧.e,
-      customGamesListingPath: () => ⟦2-char-id⟧.h,
+      customGameSettings: () => ⟦2-char-id⟧.i,
+      customGamesListingHeading: () => ⟦2-char-id⟧.c,
+      customGamesListingPath: () => ⟦2-char-id⟧.d,
       defusalStaticConfig: () => ⟦2-char-id⟧,
-      docsPageHtmlPath: () => ⟦2-char-id⟧.l,
-      docsPageMarkdownPath: () => ⟦2-char-id⟧.n,
-      docsPagePartPath: () => ⟦2-char-id⟧.o,
-      docsPageTitles: () => ⟦2-char-id⟧.c,
-      docsSitePageMarkdownPath: () => ⟦2-char-id⟧.r,
+      docsPageHtmlPath: () => ⟦2-char-id⟧.p,
+      docsPageMarkdownPath: () => ⟦2-char-id⟧.q,
+      docsPagePartPath: () => ⟦2-char-id⟧.r,
+      docsPageTitles: () => ⟦2-char-id⟧.d,
+      docsSitePageMarkdownPath: () => ⟦2-char-id⟧.v,
       dodgeBowStaticConfig: () => ⟦2-char-id⟧,
       doodleStaticConfig: () => ⟦2-char-id⟧.d,
-      dressUpStaticConfig: () => ⟦2-char-id⟧.c,
+      dressUpStaticConfig: () => ⟦2-char-id⟧.d,
       eatToGrowStaticConfig: () => ⟦2-char-id⟧.d,
       escapeHtml: () => ⟦2-char-id⟧.g,
-      eviltowerStaticConfig: () => ⟦2-char-id⟧.d,
-      exampleStaticConfig: () => ⟦2-char-id⟧.b,
+      eviltowerStaticConfig: () => ⟦2-char-id⟧.b,
+      exampleStaticConfig: () => ⟦2-char-id⟧.c,
       extractionStaticConfig: () => ⟦2-char-id⟧.b,
-      firstPartyStudioGames: () => ⟦2-char-id⟧.c,
-      fishingStaticConfig: () => ⟦2-char-id⟧.d,
-      gameImageVariantHeights: () => ⟦2-char-id⟧.c,
-      gameImageVariantsEncoding: () => ⟦2-char-id⟧.d,
+      firstPartyStudioGames: () => ⟦2-char-id⟧.b,
+      fishingStaticConfig: () => ⟦2-char-id⟧.c,
+      gameImageVariantHeights: () => ⟦2-char-id⟧.e,
+      gameImageVariantsEncoding: () => ⟦2-char-id⟧.e,
       getAllAggregatorGameNames: () => ⟦2-char-id⟧.d,
       getConfiguredGameImagePaths: () => ⟦2-char-id⟧.d,
-      getCustomGameFromPath: () => ⟦2-char-id⟧.h,
-      getCustomGameListingPage: () => ⟦2-char-id⟧.i,
+      getCustomGameFromPath: () => ⟦2-char-id⟧.i,
+      getCustomGameListingPage: () => ⟦2-char-id⟧.h,
       getCustomGamePagePath: () => ⟦2-char-id⟧.l,
-      getCustomGamePageRedirectPath: () => ⟦2-char-id⟧.m,
-      getCustomGameSchematicIdFromPath: () => ⟦2-char-id⟧.n,
-      getCustomGameThumbnailCandidates: () => ⟦2-char-id⟧.c,
-      getCustomGameThumbnailUrls: () => ⟦2-char-id⟧.f,
-      getCustomGameUrlIdFromPath: () => ⟦2-char-id⟧.r,
+      getCustomGamePageRedirectPath: () => ⟦2-char-id⟧.o,
+      getCustomGameSchematicIdFromPath: () => ⟦2-char-id⟧.s,
+      getCustomGameThumbnailCandidates: () => ⟦2-char-id⟧.e,
+      getCustomGameThumbnailUrls: () => ⟦2-char-id⟧.g,
+      getCustomGameUrlIdFromPath: () => ⟦2-char-id⟧.u,
       getFirstPartyStudioGameName: () => ⟦2-char-id⟧.d,
-      getGameCanonicalUrl: () => ⟦2-char-id⟧.s,
-      getGameImageBlurhash: () => ⟦2-char-id⟧.c,
+      getGameCanonicalUrl: () => ⟦2-char-id⟧.x,
+      getGameImageBlurhash: () => ⟦2-char-id⟧.e,
       getGameImagePath: () => ⟦2-char-id⟧.g,
-      getGameImageVariantPath: () => ⟦2-char-id⟧.j,
-      getGameImageVariantSource: () => ⟦2-char-id⟧.d,
+      getGameImageVariantPath: () => ⟦2-char-id⟧.p,
+      getGameImageVariantSource: () => ⟦2-char-id⟧.c,
       getGameImageVariants: () => ⟦2-char-id⟧.g,
-      getGamePage: () => ⟦2-char-id⟧.A,
-      getGamePageContentHeadings: () => ⟦2-char-id⟧.g,
-      getGamePagePath: () => ⟦2-char-id⟧.t,
-      getGamePageRedirectPath: () => ⟦2-char-id⟧.w,
-      getGameSeoMetadata: () => ⟦2-char-id⟧.D,
+      getGamePage: () => ⟦2-char-id⟧.D,
+      getGamePageContentHeadings: () => ⟦2-char-id⟧.e,
+      getGamePagePath: () => ⟦2-char-id⟧.z,
+      getGamePageRedirectPath: () => ⟦2-char-id⟧.A,
+      getGameSeoMetadata: () => ⟦2-char-id⟧.H,
       getGameTileImagePaths: () => ⟦2-char-id⟧.j,
-      getIndexedCustomGameListingPaths: () => ⟦2-char-id⟧.j,
-      getIndexedGamePages: () => ⟦2-char-id⟧.H,
-      getJsonLdScriptText: () => ⟦2-char-id⟧.L,
-      getPathGamePageContentGame: () => ⟦2-char-id⟧.O,
+      getIndexedCustomGameListingPaths: () => ⟦2-char-id⟧.i,
+      getIndexedGamePages: () => ⟦2-char-id⟧.J,
+      getJsonLdScriptText: () => ⟦2-char-id⟧.M,
+      getPathGamePageContentGame: () => ⟦2-char-id⟧.Q,
       getPathSeoMetadata: () => ⟦2-char-id⟧.R,
       getPlayableGame: () => ⟦2-char-id⟧,
       getPlayerSeoMetadata: () => ⟦2-char-id⟧.V,
-      getSeoMetaTagAttributes: () => ⟦2-char-id⟧.X,
-      getShaderPackPolicy: () => ⟦2-char-id⟧.k,
-      getStaticGameConfig: () => ⟦2-char-id⟧.n,
+      getSeoMetaTagAttributes: () => ⟦2-char-id⟧.Y,
+      getShaderPackPolicy: () => ⟦2-char-id⟧.j,
+      getStaticGameConfig: () => ⟦2-char-id⟧.l,
       getStaticPageSeoMetadata: () => ⟦2-char-id⟧._,
-      getUndescribedPageSeoMetadata: () => ⟦2-char-id⟧.$,
-      goalRushStaticConfig: () => ⟦2-char-id⟧.e,
+      getUndescribedPageSeoMetadata: () => ⟦2-char-id⟧.cb,
+      goalRushStaticConfig: () => ⟦2-char-id⟧.d,
       goldrushStaticConfig: () => ⟦2-char-id⟧,
-      greenvilleStaticConfig: () => ⟦2-char-id⟧.d,
-      heroesvbrainrotsStaticConfig: () => ⟦2-char-id⟧.e,
-      hideseekStaticConfig: () => ⟦2-char-id⟧.b,
+      greenvilleStaticConfig: () => ⟦2-char-id⟧.c,
+      heroesvbrainrotsStaticConfig: () => ⟦2-char-id⟧.d,
+      hideseekStaticConfig: () => ⟦2-char-id⟧.c,
       infectionStaticConfig: () => ⟦2-char-id⟧.c,
-      isGameIndexed: () => ⟦2-char-id⟧.cb,
+      isGameIndexed: () => ⟦2-char-id⟧.fb,
       knockoutStaticConfig: () => ⟦2-char-id⟧.b,
-      lastStandStaticConfig: () => ⟦2-char-id⟧.c,
-      loadGamePageContent: () => ⟦2-char-id⟧.i,
-      luckyBattlegroundsStaticConfig: () => ⟦2-char-id⟧.e,
-      luckyTowersStaticConfig: () => ⟦2-char-id⟧.d,
+      lastStandStaticConfig: () => ⟦2-char-id⟧.e,
+      loadGamePageContent: () => ⟦2-char-id⟧.f,
+      luckyBattlegroundsStaticConfig: () => ⟦2-char-id⟧.b,
+      luckyTowersStaticConfig: () => ⟦2-char-id⟧.b,
       murderMysteryStaticConfig: () => ⟦2-char-id⟧.d,
       naturalDisasterStaticConfig: () => ⟦2-char-id⟧.b,
       ninetyNineNightsStaticConfig: () => ⟦2-char-id⟧.e,
-      normaliseFirstPartyGameNames: () => ⟦2-char-id⟧.e,
-      oneBlockStaticConfig: () => ⟦2-char-id⟧.e,
-      paintballStaticConfig: () => ⟦2-char-id⟧.b,
-      parkourStaticConfig: () => ⟦2-char-id⟧.e,
+      normaliseFirstPartyGameNames: () => ⟦2-char-id⟧.h,
+      oneBlockStaticConfig: () => ⟦2-char-id⟧.c,
+      paintballStaticConfig: () => ⟦2-char-id⟧.e,
+      parkourStaticConfig: () => ⟦2-char-id⟧.c,
       petSimulatorStaticConfig: () => ⟦2-char-id⟧,
-      piratesStaticConfig: () => ⟦2-char-id⟧.d,
-      plotsStaticConfig: () => ⟦2-char-id⟧.d,
+      piratesStaticConfig: () => ⟦2-char-id⟧.c,
+      plotsStaticConfig: () => ⟦2-char-id⟧.e,
       prisonStaticConfig: () => ⟦2-char-id⟧,
-      pvpCivStaticConfig: () => ⟦2-char-id⟧.d,
+      pvpCivStaticConfig: () => ⟦2-char-id⟧.c,
       racingStaticConfig: () => ⟦2-char-id⟧,
-      rankedStaticConfig: () => ⟦2-char-id⟧.e,
-      readDocsPageMarkdownPath: () => ⟦2-char-id⟧.u,
+      rankedStaticConfig: () => ⟦2-char-id⟧.c,
+      readDocsPageMarkdownPath: () => ⟦2-char-id⟧.z,
       renderGamePageContentHtml: () => ⟦2-char-id⟧,
-      renderSeoMetaTags: () => ⟦2-char-id⟧.eb,
-      rocketParkourStaticConfig: () => ⟦2-char-id⟧.b,
-      rocketSpleefStaticConfig: () => ⟦2-char-id⟧.d,
-      seoSiteOrigin: () => ⟦2-char-id⟧.e,
-      shootingStaticConfig: () => ⟦2-char-id⟧.d,
-      simonSaysStaticConfig: () => ⟦2-char-id⟧.e,
+      renderSeoMetaTags: () => ⟦2-char-id⟧.jb,
+      rocketParkourStaticConfig: () => ⟦2-char-id⟧.d,
+      rocketSpleefStaticConfig: () => ⟦2-char-id⟧.b,
+      seoSiteOrigin: () => ⟦2-char-id⟧.c,
+      shootingStaticConfig: () => ⟦2-char-id⟧.b,
+      simonSaysStaticConfig: () => ⟦2-char-id⟧.c,
       skyIslandsStaticConfig: () => ⟦2-char-id⟧.e,
       skyblockStaticConfig: () => ⟦2-char-id⟧.e,
-      skywarsStaticConfig: () => ⟦2-char-id⟧.e,
+      skywarsStaticConfig: () => ⟦2-char-id⟧.d,
       survivalRoyaleStaticConfig: () => ⟦2-char-id⟧,
       testGymStaticConfig: () => ⟦2-char-id⟧.e,
       thePitStaticConfig: () => ⟦2-char-id⟧,
-      tsunamiStaticConfig: () => ⟦2-char-id⟧.b,
+      tsunamiStaticConfig: () => ⟦2-char-id⟧.c,
       uchStaticConfig: () => ⟦2-char-id⟧,
       wallsStaticConfig: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(622);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(663);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
-      return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.n)(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.defaultListedVariation) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧
-    }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(880),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(917),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(615),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(613),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(603),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(608),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(596),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(587),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(633),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(661),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(639),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(643),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(649),
+      return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.l)(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.defaultListedVariation) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧
+    }
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(898),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(925),
       ⟦2-char-id⟧ = ⟦2-char-id⟧(655),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(667),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(673),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(679),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(651),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(637),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(645),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(635),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(626),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(672),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(694),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(677),
       ⟦2-char-id⟧ = ⟦2-char-id⟧(685),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(693),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(695),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(704),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(709),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(712),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(720),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(729),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(734),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(736),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(739),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(744),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(748),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(756),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(762),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(687),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(690),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(703),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(708),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(711),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(724),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(731),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(735),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(740),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(745),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(750),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(753),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(757),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(766),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(768),
       ⟦2-char-id⟧ = ⟦2-char-id⟧(771),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(776),
       ⟦2-char-id⟧ = ⟦2-char-id⟧(779),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(781),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(790),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(783),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(791),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(794),
       ⟦2-char-id⟧ = ⟦2-char-id⟧(797),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(800),
       ⟦2-char-id⟧ = ⟦2-char-id⟧(802),
       ⟦2-char-id⟧ = ⟦2-char-id⟧(806),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(813),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(821),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(808),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(817),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(825),
       ⟦2-char-id⟧ = ⟦2-char-id⟧(829),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(835),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(837),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(845),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(849),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(852),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(858),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(865),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(836),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(843),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(851),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(860),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(869),
       ⟦2-char-id⟧ = ⟦2-char-id⟧(873),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(875);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(875),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(880),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(882),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(884),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(886),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(893);
     const ⟦2-char-id⟧ = {
         type: "Arena",
         title: "Battle Arena",
```

</details>

<details>
<summary>Hunk 2 · Change · +44 / -44</summary>

```diff
@@ -403,72 +403,72 @@
         gameMonId: "wzap3u9jp9ki78o4dohtfdfnklxyci19"
       };
     var ⟦2-char-id⟧ = ⟦2-char-id⟧(1460),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1470),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2996),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1472),
       ⟦2-char-id⟧ = ⟦2-char-id⟧(3011),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1462),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3002),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1447),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1480);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3022),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1466),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3017),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1445),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1484);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return `<${JJ}><h2>${(0,Sc.g)(cJ)}</h2>${ZJ}</${JJ}>`
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return ⟦2-char-id⟧.map((⟦2-char-id⟧ => `<p>${(0,Sc.g)(JJ)}</p>`)).join("")
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return `<ul>${JJ.map((JJ=>`<⟦2-char-id⟧>${⟦2-char-id⟧}</li>`)).join("")}</ul>`
-    }
-
-    function Wc(JJ) {
-      return wc(JJ.map(Sc.g))
-    }
-
-    function gc(JJ, cJ) {
-      return wc(JJ.similarGames.map((JJ => {
-        var ZJ, UJ;
-        const eJ = null !== (ZJ = null === (UJ = Ic.c[JJ]) || void 0 === UJ ? void 0 : UJ.name) && void 0 !== ZJ ? ZJ : cJ(FJ.d[JJ].title);
-        return `<a href="${(0,Sc.g)((0,Sc.t)(JJ))}">${(0,⟦2-char-id⟧.g)(⟦2-char-id⟧)}</a>`
+      return `<${BB}><h2>${(0,zT.g)(TB)}</h2>${dB}</${BB}>`
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧) {
+      return ⟦2-char-id⟧.map((⟦2-char-id⟧ => `<p>${(0,zT.g)(BB)}</p>`)).join("")
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧) {
+      return `<ul>${BB.map((BB=>`<⟦2-char-id⟧>${⟦2-char-id⟧}</li>`)).join("")}</ul>`
+    }
+
+    function rT(BB) {
+      return KT(BB.map(zT.g))
+    }
+
+    function IT(BB, TB) {
+      return KT(BB.similarGames.map((BB => {
+        var dB, yB;
+        const pB = null !== (dB = null === (yB = wT.c[BB]) || void 0 === yB ? void 0 : yB.name) && void 0 !== dB ? dB : TB(VB.e[BB].title);
+        return `<a href="${(0,zT.g)((0,zT.z)(BB))}">${(0,⟦2-char-id⟧.g)(⟦2-char-id⟧)}</a>`
       })))
     }
     async function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.A)(⟦2-char-id⟧);
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.D)(⟦2-char-id⟧);
       if (!⟦2-char-id⟧) return null;
-      const ⟦2-char-id⟧ = await (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧),
-        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧),
+      const ⟦2-char-id⟧ = await (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧),
+        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.faq.map((⟦2-char-id⟧ => {
           let {
             question: ⟦2-char-id⟧,
             answer: ⟦2-char-id⟧
           } = ⟦2-char-id⟧;
-          return `<h3>${(0,Sc.g)(cJ)}</h3><p>${(0,Sc.g)(ZJ)}</p>`
+          return `<h3>${(0,zT.g)(TB)}</h3><p>${(0,zT.g)(dB)}</p>`
         })).join("");
-      return `<main style="position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)"><article>${[`<header><⟦2-char-id⟧>${(0,⟦2-char-id⟧.g)(⟦2-char-id⟧.name)}</h1><p>${(0,Sc.g)(FJ.description)}</p></header>`,Mc("section",UJ.whatIs,bc(FJ.whatIs)),Mc("section",UJ.howToPlay,bc(FJ.howToPlay)),Mc("section",UJ.features,Wc(FJ.features)),Mc("aside",UJ.tips,Wc(FJ.tips)),Mc("section",UJ.faq,eJ),Mc("nav",UJ.similarGames,gc(FJ,cJ))].join("")}</article></main>`
-    }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1477),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1475),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4220)
+      return `<main style="position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)"><article>${[`<header><⟦2-char-id⟧>${(0,⟦2-char-id⟧.g)(⟦2-char-id⟧.name)}</h1><p>${(0,zT.g)(VB.description)}</p></header>`,UT("section",yB.whatIs,FT(VB.whatIs)),UT("section",yB.howToPlay,FT(VB.howToPlay)),UT("section",yB.features,rT(VB.features)),UT("aside",yB.tips,rT(VB.tips)),UT("section",yB.faq,pB),UT("nav",yB.similarGames,IT(VB,TB))].join("")}</article></main>`
+    }
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1482),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1477),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4218)
   },
-  4220: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  4218: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       b: () => ⟦2-char-id⟧,
-      d: () => ⟦2-char-id⟧,
       e: () => ⟦2-char-id⟧,
-      f: () => ⟦2-char-id⟧,
-      j: () => ⟦2-char-id⟧,
-      l: () => ⟦2-char-id⟧,
+      g: () => ⟦2-char-id⟧,
+      k: () => ⟦2-char-id⟧,
       n: () => ⟦2-char-id⟧,
-      o: () => ⟦2-char-id⟧,
+      p: () => ⟦2-char-id⟧,
+      q: () => ⟦2-char-id⟧,
       r: () => ⟦2-char-id⟧,
-      u: () => ⟦2-char-id⟧
+      v: () => ⟦2-char-id⟧,
+      z: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1475);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1477);
     const ⟦2-char-id⟧ = 24⟦2-char-id⟧,
       ⟦2-char-id⟧ = "/docs/llms.txt",
-      ⟦2-char-id⟧ = `${FJ.e}${eJ}`,
+      ⟦2-char-id⟧ = `${VB.c}${pB}`,
       ⟦2-char-id⟧ = "/llms.txt",
       ⟦2-char-id⟧ = "/docs/llms-full.txt";
 
```

</details>

<details>
<summary>Hunk 3 · Change · +2 / -2</summary>

```diff
@@ -477,11 +477,11 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return `/docs/${jJ(JJ)}.md`
+      return `/docs/${gB(BB)}.md`
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return `/docs/${jJ(JJ)}/${cJ+1}.md`
+      return `/docs/${gB(BB)}/${TB+1}.md`
     }
     const ⟦2-char-id⟧ = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;
 
```

</details>

<details>
<summary>Hunk 4 · Change · +1 / -1</summary>

```diff
@@ -502,7 +502,7 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return `/docsHtml/${jJ(JJ)}.html`
+      return `/docsHtml/${gB(BB)}.html`
     }
   }
 };
```

</details>

</details>
