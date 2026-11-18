# Historical build diff — part 045

- Base: e7e20713782fba2472c7866f1ac5b84e503e7647
- Build: 9ad456477d01ce4e7883eecb0f575724f962561f
- Files in this part: 7

<details>
<summary><code>bundles/staging.bloxd.io/chunks/js/69.js</code> · modified · +525 / -525</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +11 / -11</summary>

```diff
@@ -1,20 +1,20 @@
 export const ⟦2-char-id⟧ = 69;
 export const ids = [69, 85];
 export const modules = {
-    4225: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+    4226: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
       ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-        c: () => ⟦2-char-id⟧,
-        d: () => ⟦2-char-id⟧
+        e: () => ⟦2-char-id⟧,
+        h: () => ⟦2-char-id⟧
       });
-      var ⟦2-char-id⟧ = ⟦2-char-id⟧(926),
+      var ⟦2-char-id⟧ = ⟦2-char-id⟧(933),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
-        ⟦2-char-id⟧ = ⟦2-char-id⟧(47),
-        ⟦2-char-id⟧ = ⟦2-char-id⟧(1086),
-        ⟦2-char-id⟧ = ⟦2-char-id⟧(4233),
-        ⟦2-char-id⟧ = ⟦2-char-id⟧(1675),
-        ⟦2-char-id⟧ = ⟦2-char-id⟧(2175),
-        ⟦2-char-id⟧ = ⟦2-char-id⟧(4242),
-        ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+        ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
+        ⟦2-char-id⟧ = ⟦2-char-id⟧(1078),
+        ⟦2-char-id⟧ = ⟦2-char-id⟧(4232),
+        ⟦2-char-id⟧ = ⟦2-char-id⟧(1657),
+        ⟦2-char-id⟧ = ⟦2-char-id⟧(2139),
+        ⟦2-char-id⟧ = ⟦2-char-id⟧(4240),
+        ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
       const ⟦2-char-id⟧ = new WeakMap;
       let ⟦2-char-id⟧ = 0;
 
```

</details>

<details>
<summary>Hunk 2 · Change · +3 / -3</summary>

```diff
@@ -32,10 +32,10 @@
         }) : (0, ⟦2-char-id⟧.jsx)("span", {
           className: "DialogueWord",
           style: {
-            "--word-delay": `${cJ.delayMs}ms`
+            "--word-delay": `${TB.delayMs}ms`
           },
-          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
-            text: "icon" === ⟦2-char-id⟧.kind ? `[[${cJ.icon}]]` : ⟦2-char-id⟧.text
+          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+            text: "icon" === ⟦2-char-id⟧.kind ? `[[${TB.icon}]]` : ⟦2-char-id⟧.text
           })
         })
       }
```

</details>

<details>
<summary>Hunk 3 · Change · +2 / -2</summary>

```diff
@@ -46,12 +46,12 @@
         } = ⟦2-char-id⟧;
         const {
           selectedLanguage: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useMemo)((() => (0, ⟦2-char-id⟧.d)((0, ⟦2-char-id⟧.f)(⟦2-char-id⟧).plan.pieces)), [⟦2-char-id⟧, ⟦2-char-id⟧.code]);
+        } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useMemo)((() => (0, ⟦2-char-id⟧.e)((0, ⟦2-char-id⟧.f)(⟦2-char-id⟧).plan.pieces)), [⟦2-char-id⟧, ⟦2-char-id⟧.code]);
         return (0, ⟦2-char-id⟧.jsxs)("div", {
           className: ⟦2-char-id⟧()("Dialogue", {
             DialogueAnimateIn: !1 !== ⟦2-char-id⟧.animateIn
           }),
-          children: [⟦2-char-id⟧.speakerName && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+          children: [⟦2-char-id⟧.speakerName && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
             text: ⟦2-char-id⟧.speakerName,
             className: "DialogueSpeaker"
           }), (0, ⟦2-char-id⟧.jsx)("p", {
```

</details>

<details>
<summary>Hunk 4 · Change · +1 / -1</summary>

```diff
@@ -66,7 +66,7 @@
         })
       }
       const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.memo)((function() {
-        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)("dialogue");
+        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)("dialogue");
         return (0, ⟦2-char-id⟧.jsx)("div", {
           className: "DialogueAnchor",
           "data-camera-keeper": "",
```

</details>

<details>
<summary>Hunk 5 · Change · +11 / -11</summary>

```diff
@@ -79,22 +79,22 @@
         })
       }))
     },
-    4108: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+    4100: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
         ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
           default: () => ⟦2-char-id⟧
         });
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(47),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(926),
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(933),
           ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(1415),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(1421),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(13),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(60),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(4111),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(1416),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(1422),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(21),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(72),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(4105),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(4117),
           ⟦2-char-id⟧ = ⟦2-char-id⟧(4122),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(4128),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(3824),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(3817),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
         const ⟦2-char-id⟧ = "/textures/docs/icons";
 
         function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 6 · Change · +1 / -1</summary>

```diff
@@ -104,7 +104,7 @@
             className: ⟦2-char-id⟧,
             style: ⟦2-char-id⟧
           } = ⟦2-char-id⟧;
-          const ⟦2-char-id⟧ = `${GJ}/${cJ}.png`;
+          const ⟦2-char-id⟧ = `${uB}/${TB}.png`;
           return ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.jsxs)("span", {
             className: ⟦2-char-id⟧()("DocsPixelIcon", "Tinted", ⟦2-char-id⟧),
             "aria-hidden": "true",
```

</details>

<details>
<summary>Hunk 7 · Change · +2 / -2</summary>

```diff
@@ -112,8 +112,8 @@
             children: [(0, ⟦2-char-id⟧.jsx)("span", {
               className: "DocsPixelIconTint",
               style: {
-                maskImage: `url("${XJ}")`,
-                WebkitMaskImage: `url("${XJ}")`
+                maskImage: `url("${lB}")`,
+                WebkitMaskImage: `url("${lB}")`
               }
             }), (0, ⟦2-char-id⟧.jsx)("img", {
               src: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 8 · Change · +2 / -2</summary>

```diff
@@ -167,8 +167,8 @@
             className: ⟦2-char-id⟧()("DocsCopyButton", ⟦2-char-id⟧, {
               Copied: ⟦2-char-id⟧
             }),
-            title: `Copy ${cJ.length>40?"to clipboard":cJ}`,
-            "aria-label": ⟦2-char-id⟧ ? void 0 : `Copy ${cJ}`,
+            title: `Copy ${TB.length>40?"to clipboard":TB}`,
+            "aria-label": ⟦2-char-id⟧ ? void 0 : `Copy ${TB}`,
             onClick: ⟦2-char-id⟧ => {
               ⟦2-char-id⟧.stopPropagation(), ⟦2-char-id⟧(⟦2-char-id⟧)
             },
```

</details>

<details>
<summary>Hunk 9 · Change · +1 / -1</summary>

```diff
@@ -179,7 +179,7 @@
             })]
           })
         }
-        ⟦2-char-id⟧.e.registerLanguage("javascript", ⟦2-char-id⟧.e), ⟦2-char-id⟧.e.registerLanguage("typescript", ⟦2-char-id⟧.d);
+        ⟦2-char-id⟧.c.registerLanguage("javascript", ⟦2-char-id⟧.b), ⟦2-char-id⟧.c.registerLanguage("typescript", ⟦2-char-id⟧.d);
         const ⟦2-char-id⟧ = {
             js: "javascript",
             ts: "typescript",
```

</details>

<details>
<summary>Hunk 10 · Change · +1 / -1</summary>

```diff
@@ -200,7 +200,7 @@
           } = ⟦2-char-id⟧;
           const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useMemo)((() => function(⟦2-char-id⟧, ⟦2-char-id⟧) {
               const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
-              return ⟦2-char-id⟧ ? ⟦2-char-id⟧.e.highlight(⟦2-char-id⟧, {
+              return ⟦2-char-id⟧ ? ⟦2-char-id⟧.c.highlight(⟦2-char-id⟧, {
                 language: ⟦2-char-id⟧
               }).value : ⟦2-char-id⟧.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
             }(⟦2-char-id⟧, ⟦2-char-id⟧)), [⟦2-char-id⟧, ⟦2-char-id⟧]),
```

</details>

<details>
<summary>Hunk 11 · Change · +2 / -2</summary>

```diff
@@ -238,12 +238,12 @@
               },
               children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
                 name: ⟦2-char-id⟧ ? "chevron-up" : "chevron-down"
-              }), ⟦2-char-id⟧ ? "Show less" : `Show all ${AJ} lines`]
+              }), ⟦2-char-id⟧ ? "Show less" : `Show all ${JB} lines`]
             })]
           })
         }
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(4131);
         var ⟦2-char-id⟧ = ⟦2-char-id⟧(4133);
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(4139);
         const ⟦2-char-id⟧ = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;
 
         function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 12 · Change · +4 / -4</summary>

```diff
@@ -302,25 +302,25 @@
               icon: "player",
               summary: "Per-player options such as speed, health and camera.",
               layout: "settings",
-              setterSnippet: (⟦2-char-id⟧, ⟦2-char-id⟧) => `api.setClientOption(playerId, "${JJ}", ${cJ})`
+              setterSnippet: (⟦2-char-id⟧, ⟦2-char-id⟧) => `api.setClientOption(playerId, "${BB}", ${TB})`
             },
             entitySettings: {
               icon: "eye",
               summary: "How one player sees and interacts with another entity.",
               layout: "settings",
-              setterSnippet: (⟦2-char-id⟧, ⟦2-char-id⟧) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${JJ}", ${cJ})`
+              setterSnippet: (⟦2-char-id⟧, ⟦2-char-id⟧) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${BB}", ${TB})`
             },
             mobSettings: {
               icon: "mob",
               summary: "Health, movement, combat and AI settings for mobs.",
               layout: "settings",
-              setterSnippet: (⟦2-char-id⟧, ⟦2-char-id⟧) => `api.setMobSetting(mobId, "${JJ}", ${cJ})`
+              setterSnippet: (⟦2-char-id⟧, ⟦2-char-id⟧) => `api.setMobSetting(mobId, "${BB}", ${TB})`
             },
             vehicleSettings: {
               icon: "car",
               summary: "Movement, physics and camera settings for vehicles.",
               layout: "settings",
-              setterSnippet: (⟦2-char-id⟧, ⟦2-char-id⟧) => `api.setVehicleSetting(vehicleId, "${JJ}", ${cJ})`
+              setterSnippet: (⟦2-char-id⟧, ⟦2-char-id⟧) => `api.setVehicleSetting(vehicleId, "${BB}", ${TB})`
             },
             meshEntities: {
               icon: "mesh",
```

</details>

<details>
<summary>Hunk 13 · Change · +1 / -1</summary>

```diff
@@ -425,7 +425,7 @@
             summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
             layout: "article",
             markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
-          }, ...⟦2-char-id⟧.c.flatMap((⟦2-char-id⟧ => {
+          }, ...⟦2-char-id⟧.d.flatMap((⟦2-char-id⟧ => {
             const ⟦2-char-id⟧ = {
               id: ⟦2-char-id⟧.id,
               slug: ⟦2-char-id⟧(⟦2-char-id⟧.id),
```

</details>

<details>
<summary>Hunk 14 · Change · +3 / -3</summary>

```diff
@@ -437,16 +437,16 @@
               const ⟦2-char-id⟧ = ⟦2-char-id⟧.markdown.indexOf(⟦2-char-id⟧),
                 ⟦2-char-id⟧ = ⟦2-char-id⟧.markdown.indexOf("\n```", ⟦2-char-id⟧),
                 ⟦2-char-id⟧ = ⟦2-char-id⟧.markdown.indexOf("\n```", ⟦2-char-id⟧ + 1);
-              if (-1 === ⟦2-char-id⟧ || -1 === ⟦2-char-id⟧ || -1 === ⟦2-char-id⟧) throw new Error(`Getting started has no "${PJ}" section with a code block`);
+              if (-1 === ⟦2-char-id⟧ || -1 === ⟦2-char-id⟧ || -1 === ⟦2-char-id⟧) throw new Error(`Getting started has no "${SB}" section with a code block`);
               const ⟦2-char-id⟧ = ⟦2-char-id⟧.markdown.slice(⟦2-char-id⟧ + 31, ⟦2-char-id⟧).trim(),
                 ⟦2-char-id⟧ = [...⟦2-char-id⟧(⟦2-char-id⟧.markdown.slice(⟦2-char-id⟧.markdown.indexOf("\n", ⟦2-char-id⟧ + 1) + 1, ⟦2-char-id⟧))].map((⟦2-char-id⟧ => {
                   let [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
-                  return `## ${cJ}\n\n\`\`\`ts\n${ZJ}\n\`\`\`\n`
+                  return `## ${TB}\n\n\`\`\`ts\n${dB}\n\`\`\`\n`
                 })),
                 ⟦2-char-id⟧ = ⟦2-char-id⟧.markdown.slice(⟦2-char-id⟧.markdown.indexOf("\n", ⟦2-char-id⟧ + 1) + 1);
               return [{
                 ...⟦2-char-id⟧,
-                markdown: `${JJ.markdown.slice(0,cJ)}${XJ}`
+                markdown: `${BB.markdown.slice(0,TB)}${lB}`
               }, {
                 id: "types",
                 slug: "types",
```

</details>

<details>
<summary>Hunk 15 · Change · +1 / -1</summary>

```diff
@@ -454,7 +454,7 @@
                 icon: "tag",
                 summary: "The types the API Reference's parameters and return values refer to.",
                 layout: "article",
-                markdown: `# Types\n\n${UJ}\n\n${eJ.join("\n")}`
+                markdown: `# Types\n\n${yB}\n\n${pB.join("\n")}`
               }]
             }(⟦2-char-id⟧);
             if ("howTo" === ⟦2-char-id⟧.id) {
```

</details>

<details>
<summary>Hunk 16 · Change · +6 / -6</summary>

```diff
@@ -472,17 +472,17 @@
                     ⟦2-char-id⟧.push(⟦2-char-id⟧);
                     continue
                   }
-                  const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? eJ : {
+                  const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? pB : {
                     icon: "lightbulb",
-                    summary: `How to use ${ZJ.toLowerCase()} in World Code.`
+                    summary: `How to use ${dB.toLowerCase()} in World Code.`
                   };
                   ⟦2-char-id⟧.push({
-                    id: `${JJ.id}${ZJ.split(/[^A-Za-z0-9]+/).map((JJ=>JJ.charAt(0).toUpperCase()+JJ.slice(1))).join("")}`,
-                    slug: `${JJ.slug}-${WJ(ZJ)}`,
+                    id: `${BB.id}${dB.split(/[^A-Za-z0-9]+/).map((BB=>BB.charAt(0).toUpperCase()+BB.slice(1))).join("")}`,
+                    slug: `${BB.slug}-${rB(dB)}`,
                     title: ⟦2-char-id⟧,
                     layout: "article",
-                    sourceAnchor: (0, ⟦2-char-id⟧.v)(⟦2-char-id⟧),
-                    markdown: `# ${ZJ}\n\n${gJ(AJ)}`,
+                    sourceAnchor: (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧),
+                    markdown: `# ${dB}\n\n${IB(JB)}`,
                     ...⟦2-char-id⟧
                   })
                 }
```

</details>

<details>
<summary>Hunk 17 · Change · +1 / -1</summary>

```diff
@@ -526,7 +526,7 @@
 
         function ⟦2-char-id⟧(⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧.id);
-          return ⟦2-char-id⟧ || (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.A)(⟦2-char-id⟧.markdown, "changelog" === ⟦2-char-id⟧.layout ? 3 : 2), ⟦2-char-id⟧.set(⟦2-char-id⟧.id, ⟦2-char-id⟧)), ⟦2-char-id⟧
+          return ⟦2-char-id⟧ || (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.p)(⟦2-char-id⟧.markdown, "changelog" === ⟦2-char-id⟧.layout ? 3 : 2), ⟦2-char-id⟧.set(⟦2-char-id⟧.id, ⟦2-char-id⟧)), ⟦2-char-id⟧
         }
 
         function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 18 · Change · +2 / -2</summary>

```diff
@@ -536,8 +536,8 @@
         function ⟦2-char-id⟧(⟦2-char-id⟧) {
           const [⟦2-char-id⟧, ...⟦2-char-id⟧] = ⟦2-char-id⟧.replace(/^#/, "").split("-"), ⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧));
           if (!⟦2-char-id⟧) return null;
-          const ⟦2-char-id⟧ = ⟦2-char-id⟧.length > 0 ? (0, ⟦2-char-id⟧.v)(⟦2-char-id⟧.join("-")) : "";
-          for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.childPageIds) && void 0 !== ⟦2-char-id⟧ ? eJ : []) {
+          const ⟦2-char-id⟧ = ⟦2-char-id⟧.length > 0 ? (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧.join("-")) : "";
+          for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.childPageIds) && void 0 !== ⟦2-char-id⟧ ? pB : []) {
             var ⟦2-char-id⟧;
             const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
             if (⟦2-char-id⟧.sourceAnchor === ⟦2-char-id⟧) return {
```

</details>

<details>
<summary>Hunk 19 · Change · +3 / -3</summary>

```diff
@@ -571,10 +571,10 @@
 
         function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
-          const ⟦2-char-id⟧ = ⟦2-char-id⟧.slug ? `${JJ}/${cJ.slug}` : ⟦2-char-id⟧;
-          return ⟦2-char-id⟧ ? `${FJ}#${ZJ}` : ⟦2-char-id⟧
+          const ⟦2-char-id⟧ = ⟦2-char-id⟧.slug ? `${BB}/${TB.slug}` : ⟦2-char-id⟧;
+          return ⟦2-char-id⟧ ? `${VB}#${dB}` : ⟦2-char-id⟧
         }
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(4153);
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(4147);
         const ⟦2-char-id⟧ = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
           ⟦2-char-id⟧ = new Set(["GameApi", "Console", "_TypeOf"]),
           ⟦2-char-id⟧ = 4;
```

</details>

<details>
<summary>Hunk 20 · Change · +2 / -2</summary>

```diff
@@ -606,10 +606,10 @@
           var ⟦2-char-id⟧;
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.split("\n"),
             ⟦2-char-id⟧ = ⟦2-char-id⟧.flatMap(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.test(⟦2-char-id⟧) ? [⟦2-char-id⟧] : []));
-          let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.slice(0, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[0]) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧.length)).doc;
+          let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.slice(0, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[0]) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧.length)).doc;
           return ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
             var ⟦2-char-id⟧;
-            const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.slice(⟦2-char-id⟧, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 1]) && void 0 !== ⟦2-char-id⟧ ? eJ : ⟦2-char-id⟧.length)),
+            const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.slice(⟦2-char-id⟧, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 1]) && void 0 !== ⟦2-char-id⟧ ? pB : ⟦2-char-id⟧.length)),
               ⟦2-char-id⟧ = {
                 name: ⟦2-char-id⟧[⟦2-char-id⟧].match(⟦2-char-id⟧)[1],
                 doc: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 21 · Change · +1 / -1</summary>

```diff
@@ -622,7 +622,7 @@
         function ⟦2-char-id⟧(⟦2-char-id⟧) {
           var ⟦2-char-id⟧;
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.match(/^readonly \[([\s\S]*)\]$/);
-          return ⟦2-char-id⟧ ? null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== ⟦2-char-id⟧ ? cJ : [] : null
+          return ⟦2-char-id⟧ ? null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== ⟦2-char-id⟧ ? TB : [] : null
         }
 
         function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 22 · Change · +1 / -1</summary>

```diff
@@ -633,7 +633,7 @@
             },
             ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
               const ⟦2-char-id⟧ = ⟦2-char-id⟧.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
-              ⟦2-char-id⟧ && (⟦2-char-id⟧.keys.push(⟦2-char-id⟧[1].startsWith('"') ? ⟦2-char-id⟧[1] : `"${ZJ[1]}"`), ⟦2-char-id⟧.values.push(⟦2-char-id⟧[2].trim()))
+              ⟦2-char-id⟧ && (⟦2-char-id⟧.keys.push(⟦2-char-id⟧[1].startsWith('"') ? ⟦2-char-id⟧[1] : `"${dB[1]}"`), ⟦2-char-id⟧.values.push(⟦2-char-id⟧[2].trim()))
             };
           let ⟦2-char-id⟧ = 0,
             ⟦2-char-id⟧ = "";
```

</details>

<details>
<summary>Hunk 23 · Change · +1 / -1</summary>

```diff
@@ -642,7 +642,7 @@
         }
 
         function ⟦2-char-id⟧(⟦2-char-id⟧) {
-          return ⟦2-char-id⟧.length > ⟦2-char-id⟧ ? `\n\t| ${JJ.join("\n\t| ")}` : ⟦2-char-id⟧.join(" | ")
+          return ⟦2-char-id⟧.length > ⟦2-char-id⟧ ? `\n\t| ${BB.join("\n\t| ")}` : ⟦2-char-id⟧.join(" | ")
         }
 
         function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 24 · Change · +1 / -1</summary>

```diff
@@ -665,7 +665,7 @@
               return ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧.keys) : ⟦2-char-id⟧
             })).replace(/_TypeOf\["([\w$]+)"\]/g, ((⟦2-char-id⟧, ⟦2-char-id⟧) => {
               var ⟦2-char-id⟧, ⟦2-char-id⟧;
-              return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.text) && void 0 !== ⟦2-char-id⟧ ? FJ : ⟦2-char-id⟧
+              return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.text) && void 0 !== ⟦2-char-id⟧ ? VB : ⟦2-char-id⟧
             }))
           }(⟦2-char-id⟧.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), ⟦2-char-id⟧);
           return [⟦2-char-id⟧.doc, ⟦2-char-id⟧].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
```

</details>

<details>
<summary>Hunk 25 · Change · +1 / -1</summary>

```diff
@@ -720,7 +720,7 @@
                 ⟦2-char-id⟧ = !1;
               for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.slice(⟦2-char-id⟧, ⟦2-char-id⟧ + 1).join("\n").split("\n").map((⟦2-char-id⟧ => ⟦2-char-id⟧.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
-                ⟦2-char-id⟧ ? (⟦2-char-id⟧ = ⟦2-char-id⟧[1].trim(), ⟦2-char-id⟧ = "deprecation") : ⟦2-char-id⟧.startsWith("@") ? (⟦2-char-id⟧ = "otherTag", ⟦2-char-id⟧ = !0) : "" === ⟦2-char-id⟧.trim() ? ⟦2-char-id⟧ || (⟦2-char-id⟧ = "description", ⟦2-char-id⟧.push(⟦2-char-id⟧)) : "deprecation" !== ⟦2-char-id⟧ || /^[A-Z]/.test(⟦2-char-id⟧.trim()) ? "otherTag" !== ⟦2-char-id⟧ && (⟦2-char-id⟧ = "description", ⟦2-char-id⟧.push(⟦2-char-id⟧)) : ⟦2-char-id⟧ = `${XJ} ${ZJ.trim()}`.trim()
+                ⟦2-char-id⟧ ? (⟦2-char-id⟧ = ⟦2-char-id⟧[1].trim(), ⟦2-char-id⟧ = "deprecation") : ⟦2-char-id⟧.startsWith("@") ? (⟦2-char-id⟧ = "otherTag", ⟦2-char-id⟧ = !0) : "" === ⟦2-char-id⟧.trim() ? ⟦2-char-id⟧ || (⟦2-char-id⟧ = "description", ⟦2-char-id⟧.push(⟦2-char-id⟧)) : "deprecation" !== ⟦2-char-id⟧ || /^[A-Z]/.test(⟦2-char-id⟧.trim()) ? "otherTag" !== ⟦2-char-id⟧ && (⟦2-char-id⟧ = "description", ⟦2-char-id⟧.push(⟦2-char-id⟧)) : ⟦2-char-id⟧ = `${lB} ${dB.trim()}`.trim()
               }
               ⟦2-char-id⟧.set(⟦2-char-id⟧[1], {
                 deprecation: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 26 · Change · +2 / -2</summary>

```diff
@@ -735,8 +735,8 @@
           if (!⟦2-char-id⟧) {
             ⟦2-char-id⟧ = new Map;
             for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
-              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.y)(⟦2-char-id⟧(⟦2-char-id⟧)).flatMap((⟦2-char-id⟧ => ⟦2-char-id⟧.blocks));
-              for (const ⟦2-char-id⟧ of (0, ⟦2-char-id⟧.l)(⟦2-char-id⟧))
+              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.n)(⟦2-char-id⟧(⟦2-char-id⟧)).flatMap((⟦2-char-id⟧ => ⟦2-char-id⟧.blocks));
+              for (const ⟦2-char-id⟧ of (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧))
                 if ("ts" === ⟦2-char-id⟧.lang || "typescript" === ⟦2-char-id⟧.lang)
                   for (const [⟦2-char-id⟧, ⟦2-char-id⟧] of ⟦2-char-id⟧(⟦2-char-id⟧.code)) ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧)
             }
```

</details>

<details>
<summary>Hunk 27 · Change · +1 / -1</summary>

```diff
@@ -820,7 +820,7 @@
           const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useContext)(⟦2-char-id⟧);
           if (⟦2-char-id⟧.startsWith("#")) {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
-            if (⟦2-char-id⟧) return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+            if (⟦2-char-id⟧) return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
               to: ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.page, ⟦2-char-id⟧.anchor),
               children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.Provider, {
                 value: !0,
```

</details>

<details>
<summary>Hunk 28 · Change · +1 / -1</summary>

```diff
@@ -852,7 +852,7 @@
             type: ⟦2-char-id⟧
           });
           const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
-          if (⟦2-char-id⟧) return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+          if (⟦2-char-id⟧) return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
             className: "DocsInlineCode DocsSymbolLink",
             to: ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧.pageId), ⟦2-char-id⟧.anchor),
             children: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 29 · Change · +2 / -2</summary>

```diff
@@ -872,11 +872,11 @@
           } = ⟦2-char-id⟧;
           const ⟦2-char-id⟧ = [];
           let ⟦2-char-id⟧ = 0;
-          for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.matchAll(⟦2-char-id⟧.g)) {
+          for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.matchAll(⟦2-char-id⟧.f)) {
             ⟦2-char-id⟧.index > ⟦2-char-id⟧ && ⟦2-char-id⟧.push(...⟦2-char-id⟧(⟦2-char-id⟧.slice(⟦2-char-id⟧, ⟦2-char-id⟧.index)));
             const [, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
             ⟦2-char-id⟧ ? ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
-              code: (0, ⟦2-char-id⟧.p)(⟦2-char-id⟧, ⟦2-char-id⟧)
+              code: (0, ⟦2-char-id⟧.j)(⟦2-char-id⟧, ⟦2-char-id⟧)
             })) : ⟦2-char-id⟧ ? ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.jsx)("strong", {
               children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
                 text: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 30 · Change · +1 / -1</summary>

```diff
@@ -980,7 +980,7 @@
               ⟦2-char-id⟧ = ⟦2-char-id⟧.bottom + ⟦2-char-id⟧ + ⟦2-char-id⟧ < window.innerHeight;
             ⟦2-char-id⟧({
               left: ⟦2-char-id⟧,
-              top: ⟦2-char-id⟧ ? ⟦2-char-id⟧.bottom + Ic : Math.max(16, ⟦2-char-id⟧.top - ⟦2-char-id⟧ - ⟦2-char-id⟧)
+              top: ⟦2-char-id⟧ ? ⟦2-char-id⟧.bottom + wT : Math.max(16, ⟦2-char-id⟧.top - ⟦2-char-id⟧ - ⟦2-char-id⟧)
             })
           }), [⟦2-char-id⟧]), (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
             children: [(0, ⟦2-char-id⟧.jsx)("button", {
```

</details>

<details>
<summary>Hunk 31 · Change · +1 / -1</summary>

```diff
@@ -988,7 +988,7 @@
               ref: ⟦2-char-id⟧,
               className: "DocsTypeLink",
               "aria-expanded": ⟦2-char-id⟧,
-              "aria-describedby": ⟦2-char-id⟧ ? vJ : void 0,
+              "aria-describedby": ⟦2-char-id⟧ ? mB : void 0,
               onMouseEnter: ⟦2-char-id⟧,
               onMouseLeave: ⟦2-char-id⟧,
               onFocus: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 32 · Change · +1 / -1</summary>

```diff
@@ -1019,7 +1019,7 @@
                 children: [(0, ⟦2-char-id⟧.jsx)("span", {
                   className: "DocsTypePopoverTitle",
                   children: ⟦2-char-id⟧
-                }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.c, {
+                }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.d, {
                   ref: ⟦2-char-id⟧,
                   className: "DocsTypePopoverLink",
                   to: ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧)),
```

</details>

<details>
<summary>Hunk 33 · Change · +20 / -20</summary>

```diff
@@ -1046,47 +1046,47 @@
                 code: ⟦2-char-id⟧,
                 compact: !0
               })]
-            }), null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? rJ : document.body)]
+            }), null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? vB : document.body)]
           })
         }
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(157),
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(184),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(4156),
           ⟦2-char-id⟧ = ⟦2-char-id⟧(4162),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(4164),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(4171);
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(4167);
         const ⟦2-char-id⟧ = {
           progressBar: {
-            KU: 30,
-            yU: .075,
-            SU: 5,
-            IU: !1,
+            VV: 30,
+            yV: .075,
+            pV: 5,
+            lV: !1,
             description: [{
               str: "Click repeatedly to complete!"
             }],
-            MU: "fa-solid fa-computer-mouse",
+            JV: "fa-solid fa-computer-mouse",
             scale: 3,
             rotation: 15
           },
           timedClick: {
-            wU: 3⟦2-char-id⟧,
+            gV: 3⟦2-char-id⟧,
             icon: "fa-solid fa-computer-mouse",
             label: [{
               str: "Click to complete the QTE!"
             }],
-            WU: !0,
+            oV: !0,
             scale: 3,
             rotation: 15,
-            gU: !1
+            kV: !1
           },
           gravityBar: {
-            KU: 30,
-            PU: .25,
-            kU: 3,
-            pU: .8,
+            VV: 30,
+            OV: .25,
+            DV: 3,
+            uV: .8,
             gravity: 1,
-            dU: 1.5,
-            zU: 8,
-            NU: 4,
-            IU: !1,
+            HV: 1.5,
+            EV: 8,
+            vV: 4,
+            lV: !1,
             description: [{
               str: "Hold to catch!"
             }],
```

</details>

<details>
<summary>Hunk 34 · Change · +1 / -1</summary>

```diff
@@ -1094,7 +1094,7 @@
           },
           precisionBar: {
             speed: .5,
-            TU: .15,
+            iV: .15,
             label: [{
               str: "Click when the marker is within the green zone."
             }],
```

</details>

<details>
<summary>Hunk 35 · Change · +6 / -6</summary>

```diff
@@ -1103,18 +1103,18 @@
             rotation: 0
           },
           rhythmClick: {
-            uU: 5,
-            iU: 1200,
-            RU: .15,
-            LU: 3,
+            tV: 5,
+            fV: 1200,
+            sV: .15,
+            MV: 3,
             label: [{
               str: "Click when the circles align!"
             }],
             icon: ""
           }
         };
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(227),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(1769);
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(270),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(1751);
 
         function ⟦2-char-id⟧(⟦2-char-id⟧) {
           return ⟦2-char-id⟧.startsWith("fa-")
```

</details>

<details>
<summary>Hunk 36 · Change · +1 / -1</summary>

```diff
@@ -1142,7 +1142,7 @@
           };
 
         function ⟦2-char-id⟧(⟦2-char-id⟧) {
-          return "string" === typeof ⟦2-char-id⟧ ? "text" : "entityName" in ⟦2-char-id⟧ || "translationKey" in ⟦2-char-id⟧ ? "other" : (0, ⟦2-char-id⟧.lb)(⟦2-char-id⟧) ? "progressBar" : (0, ⟦2-char-id⟧.hb)(⟦2-char-id⟧) ? "keyBinding" : "icon" in ⟦2-char-id⟧ ? "icon" : "str" in ⟦2-char-id⟧ && "string" === typeof ⟦2-char-id⟧.str ? "text" : "other"
+          return "string" === typeof ⟦2-char-id⟧ ? "text" : "entityName" in ⟦2-char-id⟧ || "translationKey" in ⟦2-char-id⟧ ? "other" : (0, ⟦2-char-id⟧.ub)(⟦2-char-id⟧) ? "progressBar" : (0, ⟦2-char-id⟧.tb)(⟦2-char-id⟧) ? "keyBinding" : "icon" in ⟦2-char-id⟧ ? "icon" : "str" in ⟦2-char-id⟧ && "string" === typeof ⟦2-char-id⟧.str ? "text" : "other"
         }
         const ⟦2-char-id⟧ = [{
             path: ["style", "color"],
```

</details>

<details>
<summary>Hunk 37 · Change · +1 / -1</summary>

```diff
@@ -1262,7 +1262,7 @@
               label: "Action",
               field: {
                 kind: "choice",
-                options: ⟦2-char-id⟧.i
+                options: ⟦2-char-id⟧.m
               },
               isRequired: !0
             }, ...⟦2-char-id⟧],
```

</details>

<details>
<summary>Hunk 38 · Change · +1 / -1</summary>

```diff
@@ -1289,7 +1289,7 @@
                 ...⟦2-char-id⟧
               };
             if (⟦2-char-id⟧ === ⟦2-char-id⟧.length - 1) return void 0 === ⟦2-char-id⟧ ? delete ⟦2-char-id⟧[⟦2-char-id⟧] : ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧;
-            const ⟦2-char-id⟧ = ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? eJ : {}, ⟦2-char-id⟧ + 1);
+            const ⟦2-char-id⟧ = ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? pB : {}, ⟦2-char-id⟧ + 1);
             return 0 === Object.keys(⟦2-char-id⟧).length ? delete ⟦2-char-id⟧[⟦2-char-id⟧] : ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧
           };
           return function(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 39 · Change · +1 / -1</summary>

```diff
@@ -1312,7 +1312,7 @@
             case "icon":
               return String(⟦2-char-id⟧(⟦2-char-id⟧, ["icon"]));
             case "progressBar":
-              return `${Math.round(100*Number(Rc(JJ,["progress"])))}%`;
+              return `${Math.round(100*Number(qT(BB,["progress"])))}%`;
             case "keyBinding":
               return String(⟦2-char-id⟧(⟦2-char-id⟧, ["action"]));
             case "other":
```

</details>

<details>
<summary>Hunk 40 · Change · +5 / -5</summary>

```diff
@@ -1322,21 +1322,21 @@
         const ⟦2-char-id⟧ = /^[A-Za-z_$][\w$]*$/;
 
         function ⟦2-char-id⟧(⟦2-char-id⟧) {
-          if (Array.isArray(⟦2-char-id⟧)) return `[${JJ.map(oc).join(", ")}]`;
+          if (Array.isArray(⟦2-char-id⟧)) return `[${BB.map(nT).join(", ")}]`;
           if (⟦2-char-id⟧ && "object" === typeof ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = Object.entries(⟦2-char-id⟧).map((⟦2-char-id⟧ => {
               let [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
-              return `${tc.test(cJ)?cJ:JSON.stringify(cJ)}: ${oc(ZJ)}`
+              return `${bT.test(TB)?TB:JSON.stringify(TB)}: ${nT(dB)}`
             }));
-            return 0 === ⟦2-char-id⟧.length ? "{}" : `{ ${cJ.join(", ")} }`
+            return 0 === ⟦2-char-id⟧.length ? "{}" : `{ ${TB.join(", ")} }`
           }
           return JSON.stringify(⟦2-char-id⟧)
         }
 
         function ⟦2-char-id⟧(⟦2-char-id⟧) {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.map(⟦2-char-id⟧),
-            ⟦2-char-id⟧ = `[${cJ.join(", ")}]`;
-          return ⟦2-char-id⟧.length <= 60 ? ZJ : `[\n${cJ.map((JJ=>`    ${⟦2-char-id⟧},`)).join("\n")}\n]`
+            ⟦2-char-id⟧ = `[${TB.join(", ")}]`;
+          return ⟦2-char-id⟧.length <= 60 ? dB : `[\n${TB.map((BB=>`    ${⟦2-char-id⟧},`)).join("\n")}\n]`
         }
         const ⟦2-char-id⟧ = {
           "\n": "\\n",
```

</details>

<details>
<summary>Hunk 41 · Change · +4 / -4</summary>

```diff
@@ -1350,22 +1350,22 @@
             const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
             if ("\\" === ⟦2-char-id⟧) {
               var ⟦2-char-id⟧;
-              const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 1]) && void 0 !== ⟦2-char-id⟧ ? ZJ : "";
+              const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 1]) && void 0 !== ⟦2-char-id⟧ ? dB : "";
               ⟦2-char-id⟧ += "'" === ⟦2-char-id⟧ ? "'" : ⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧++
             } else if ('"' === ⟦2-char-id⟧) ⟦2-char-id⟧ += '\\"';
             else {
               var ⟦2-char-id⟧;
-              ⟦2-char-id⟧ += null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? FJ : ⟦2-char-id⟧
+              ⟦2-char-id⟧ += null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? VB : ⟦2-char-id⟧
             }
           }
-          return `"${cJ}"`
+          return `"${TB}"`
         }
 
         function ⟦2-char-id⟧(⟦2-char-id⟧) {
           if ("string" === typeof ⟦2-char-id⟧) return !0;
           if (!⟦2-char-id⟧ || "object" !== typeof ⟦2-char-id⟧ || Array.isArray(⟦2-char-id⟧)) return !1;
           const ⟦2-char-id⟧ = ⟦2-char-id⟧;
-          return "ProgressBar" === ⟦2-char-id⟧.type ? "number" === typeof ⟦2-char-id⟧.progress : "StyledKeyBinding" === ⟦2-char-id⟧.type ? ⟦2-char-id⟧.i.includes(⟦2-char-id⟧.action) : "string" === typeof ⟦2-char-id⟧.icon || "string" === typeof ⟦2-char-id⟧.str || "string" === typeof ⟦2-char-id⟧.entityName || "string" === typeof ⟦2-char-id⟧.translationKey
+          return "ProgressBar" === ⟦2-char-id⟧.type ? "number" === typeof ⟦2-char-id⟧.progress : "StyledKeyBinding" === ⟦2-char-id⟧.type ? ⟦2-char-id⟧.m.includes(⟦2-char-id⟧.action) : "string" === typeof ⟦2-char-id⟧.icon || "string" === typeof ⟦2-char-id⟧.str || "string" === typeof ⟦2-char-id⟧.entityName || "string" === typeof ⟦2-char-id⟧.translationKey
         }
 
         function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 42 · Change · +1 / -1</summary>

```diff
@@ -1414,7 +1414,7 @@
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.findIndex((⟦2-char-id⟧ => !⟦2-char-id⟧(⟦2-char-id⟧)));
           return -1 !== ⟦2-char-id⟧ ? {
             parts: null,
-            error: `Part ${ZJ+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
+            error: `Part ${dB+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
           } : {
             parts: ⟦2-char-id⟧,
             error: null
```

</details>

<details>
<summary>Hunk 43 · Change · +1 / -1</summary>

```diff
@@ -1429,7 +1429,7 @@
             isActive: !1
           },
           ⟦2-char-id⟧ = {
-            progressBar: ⟦2-char-id⟧.progressBar.MU,
+            progressBar: ⟦2-char-id⟧.progressBar.JV,
             timedClick: ⟦2-char-id⟧.timedClick.icon,
             gravityBar: ⟦2-char-id⟧.gravityBar.icon,
             precisionBar: ⟦2-char-id⟧.precisionBar.icon,
```

</details>

<details>
<summary>Hunk 44 · Change · +1 / -1</summary>

```diff
@@ -1443,7 +1443,7 @@
           const [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)("ready"), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!0), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(new Set), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(!1), ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useMemo)((() => ({
             getState: () => {
               var ⟦2-char-id⟧, ⟦2-char-id⟧;
-              return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.current) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.getState()) && void 0 !== ⟦2-char-id⟧ ? JJ : ⟦2-char-id⟧
+              return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.current) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.getState()) && void 0 !== ⟦2-char-id⟧ ? BB : ⟦2-char-id⟧
             },
             onFrame: ⟦2-char-id⟧ => (⟦2-char-id⟧.current.add(⟦2-char-id⟧), () => {
               ⟦2-char-id⟧.current.delete(⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 45 · Change · +1 / -1</summary>

```diff
@@ -1463,7 +1463,7 @@
             var ⟦2-char-id⟧;
             if ("playing" !== ⟦2-char-id⟧) return;
             let ⟦2-char-id⟧ = !1;
-            const ⟦2-char-id⟧ = new ⟦2-char-id⟧.d[⟦2-char-id⟧](⟦2-char-id⟧[⟦2-char-id⟧], (⟦2-char-id⟧ => {
+            const ⟦2-char-id⟧ = new ⟦2-char-id⟧.f[⟦2-char-id⟧](⟦2-char-id⟧[⟦2-char-id⟧], (⟦2-char-id⟧ => {
               ⟦2-char-id⟧ = !0, ⟦2-char-id⟧(!1), ⟦2-char-id⟧(⟦2-char-id⟧ ? "succeeded" : "failed")
             }), (() => {}));
             ⟦2-char-id⟧.current = ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 46 · Change · +1 / -1</summary>

```diff
@@ -1501,7 +1501,7 @@
               }),
               tabIndex: "playing" === ⟦2-char-id⟧ ? 0 : -1,
               role: "playing" === ⟦2-char-id⟧ ? "button" : void 0,
-              "aria-label": "playing" === ⟦2-char-id⟧ ? `${cJ} quick time event: click or press Space` : void 0,
+              "aria-label": "playing" === ⟦2-char-id⟧ ? `${TB} quick time event: click or press Space` : void 0,
               onPointerDown: ⟦2-char-id⟧ => {
                 0 === ⟦2-char-id⟧.button && ⟦2-char-id⟧(!0)
               },
```

</details>

<details>
<summary>Hunk 47 · Change · +1 / -1</summary>

```diff
@@ -1524,7 +1524,7 @@
                 ref: ⟦2-char-id⟧,
                 className: "DocsQteScreen",
                 style: {
-                  transform: `scale(${XJ})`
+                  transform: `scale(${lB})`
                 },
                 children: "playing" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c.Provider, {
                   value: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 48 · Change · +1 / -1</summary>

```diff
@@ -1555,7 +1555,7 @@
                   children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
                     name: "ready" === ⟦2-char-id⟧ ? "play" : "replay"
                   }), (0, ⟦2-char-id⟧.jsx)("span", {
-                    children: "ready" === ⟦2-char-id⟧ ? `Try ${cJ}` : "Play again"
+                    children: "ready" === ⟦2-char-id⟧ ? `Try ${TB}` : "Play again"
                   })]
                 })]
               })]
```

</details>

<details>
<summary>Hunk 49 · Change · +1 / -1</summary>

```diff
@@ -1575,7 +1575,7 @@
             anchor: ⟦2-char-id⟧,
             className: ⟦2-char-id⟧
           } = ⟦2-char-id⟧;
-          const ⟦2-char-id⟧ = `h${Math.min(cJ,6)}`;
+          const ⟦2-char-id⟧ = `h${Math.min(TB,6)}`;
           return (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧, {
                 id: ⟦2-char-id⟧,
                 className: ⟦2-char-id⟧()("DocsHeading", ⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 50 · Change · +3 / -3</summary>

```diff
@@ -1583,11 +1583,11 @@
                       text: ⟦2-char-id⟧
                     }), (0, ⟦2-char-id⟧.jsx)("a", {
                         className: "DocsHeadingAnchor",
-                        href: `#${FJ}`,
-                        "aria-label": `Link to ${ZJ.replace(/`/g,"")}`,children:"#"})]})}function YZ(JJ){let{items:cJ,ordered:ZJ}=JJ;const FJ=ZJ?"ol":"ul";return(0,nJ.jsx)(FJ,{className:"DocsList",children:cJ.map(((JJ,cJ)=>(0,nJ.jsxs)("li",{children:[(0,nJ.jsx)(Ec,{text:JJ.text}),JJ.children.length>0&&(0,nJ.jsx)(YZ,{items:JJ.children,ordered:ZJ})]},cJ)))})}function hZ(JJ){const cJ=JJ[0],ZJ="paragraph"===(null===cJ||void 0===cJ?void 0:cJ.kind)?cJ.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(ZJ)?"warning":/^\*\*(tip|prefer)/.test(ZJ)?"tip":"note"}function DZ(JJ){let{block:cJ}=JJ;switch(cJ.kind){case"heading":return(0,nJ.jsx)(jZ,{level:cJ.level,text:cJ.text,anchor:cJ.anchor});case"paragraph":return(0,nJ.jsx)("p",{children:(0,nJ.jsx)(Ec,{text:cJ.text})});case"code":{const JJ="ts"===cJ.lang?function(JJ){const cJ=JJ.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return cJ&&Object.hasOwn(kc,cJ[1])?cJ[1]:null}(cJ.code):null;return(0,nJ.jsxs)(nJ.Fragment,{children:[(0,nJ.jsx)(VJ,{code:cJ.code,lang:cJ.lang}),JJ&&(0,nJ.jsx)(qZ,{type:JJ})]})}case"table":return(0,nJ.jsx)("div",{className:"DocsTableScroll",children:(0,nJ.jsxs)("table",{className:"DocsTable",children:[(0,nJ.jsx)("thead",{children:(0,nJ.jsx)("tr",{children:cJ.header.map(((JJ,cJ)=>(0,nJ.jsx)("th",{children:(0,nJ.jsx)(Ec,{text:JJ})},cJ)))})}),(0,nJ.jsx)("tbody",{children:cJ.rows.map(((JJ,cJ)=>(0,nJ.jsx)("tr",{children:JJ.map(((JJ,cJ)=>(0,nJ.jsx)("td",{children:(0,nJ.jsx)(Ec,{text:JJ})},cJ)))},cJ)))})]})});case"list":return(0,nJ.jsx)(YZ,{items:cJ.items,ordered:cJ.ordered});case"quote":return(0,nJ.jsx)("aside",{className:eJ()("DocsCallout",hZ(cJ.blocks)),children:(0,nJ.jsx)(sZ,{blocks:cJ.blocks})});case"rule":return(0,nJ.jsx)("hr",{className:"DocsRule"})}}function sZ(JJ){let{blocks:cJ}=JJ;return(0,nJ.jsx)(nJ.Fragment,{children:cJ.map(((JJ,cJ)=>(0,nJ.jsx)(DZ,{block:JJ},cJ)))})}var nZ=ZJ(4145),GZ=ZJ(4148);function fZ(JJ){return"blocks"===JJ||"items"===JJ}const xZ=new Map;function rZ(JJ){let cJ=xZ.get(JJ);return cJ||(cJ=function(JJ){const cJ={entries:[],legend:[],notes:[],examples:[]};let ZJ=!1;for(const eJ of JJ.split(/\r?\n/).slice(1)){if(eJ.startsWith("#")){const JJ=eJ.replace(/^# ?/,""),FJ=JJ.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);FJ?cJ.legend.push({code:FJ[1],meaning:FJ[2],usage:FJ[3].trim()}):/^Examples:/.test(JJ.trim())?ZJ=!0:ZJ&&JJ.trim()?cJ.examples.push(JJ.trim()):JJ.trim()&&!/^\s/.test(JJ)&&cJ.notes.push(JJ.trim());continue}const JJ=eJ.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var FJ,UJ;JJ&&cJ.entries.push({name:JJ[1],variants:null!==(FJ=null===(UJ=JJ[2])||void 0===UJ?void 0:UJ.split(","))&&void 0!==FJ?FJ:[]})}return cJ}("blocks"===JJ?nZ:GZ),xZ.set(JJ,cJ)),cJ}function vZ(JJ){let{className:cJ,value:ZJ,placeholder:FJ,label:UJ,onChange:eJ,count:XJ,children:AJ}=JJ;return(0,nJ.jsxs)("div",{className:cJ,children:[(0,nJ.jsx)(fJ,{name:"magnifying-glass"}),(0,nJ.jsx)("input",{type:"search",value:ZJ,placeholder:FJ,"aria-label":UJ,onChange:JJ=>{eJ(JJ.target.value)}}),AJ,XJ&&(0,nJ.jsxs)("span",{className:"DocsFilterCount",children:[XJ.visible," of ",XJ.total]})]})}var mZ=ZJ(942);function QZ(JJ){const cJ=JJ.trim().match(/^(` {
+                        href: `#${VB}`,
+                        "aria-label": `Link to ${dB.replace(/`/g,"")}`,children:"#"})]})}function od(BB){let{items:TB,ordered:dB}=BB;const VB=dB?"ol":"ul";return(0,DB.jsx)(VB,{className:"DocsList",children:TB.map(((BB,TB)=>(0,DB.jsxs)("li",{children:[(0,DB.jsx)(tT,{text:BB.text}),BB.children.length>0&&(0,DB.jsx)(od,{items:BB.children,ordered:dB})]},TB)))})}function kd(BB){const TB=BB[0],dB="paragraph"===(null===TB||void 0===TB?void 0:TB.kind)?TB.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(dB)?"warning":/^\*\*(tip|prefer)/.test(dB)?"tip":"note"}function Ld(BB){let{block:TB}=BB;switch(TB.kind){case"heading":return(0,DB.jsx)(gd,{level:TB.level,text:TB.text,anchor:TB.anchor});case"paragraph":return(0,DB.jsx)("p",{children:(0,DB.jsx)(tT,{text:TB.text})});case"code":{const BB="ts"===TB.lang?function(BB){const TB=BB.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return TB&&Object.hasOwn(PT,TB[1])?TB[1]:null}(TB.code):null;return(0,DB.jsxs)(DB.Fragment,{children:[(0,DB.jsx)(fB,{code:TB.code,lang:TB.lang}),BB&&(0,DB.jsx)(Yd,{type:BB})]})}case"table":return(0,DB.jsx)("div",{className:"DocsTableScroll",children:(0,DB.jsxs)("table",{className:"DocsTable",children:[(0,DB.jsx)("thead",{children:(0,DB.jsx)("tr",{children:TB.header.map(((BB,TB)=>(0,DB.jsx)("th",{children:(0,DB.jsx)(tT,{text:BB})},TB)))})}),(0,DB.jsx)("tbody",{children:TB.rows.map(((BB,TB)=>(0,DB.jsx)("tr",{children:BB.map(((BB,TB)=>(0,DB.jsx)("td",{children:(0,DB.jsx)(tT,{text:BB})},TB)))},TB)))})]})});case"list":return(0,DB.jsx)(od,{items:TB.items,ordered:TB.ordered});case"quote":return(0,DB.jsx)("aside",{className:pB()("DocsCallout",kd(TB.blocks)),children:(0,DB.jsx)(Od,{blocks:TB.blocks})});case"rule":return(0,DB.jsx)("hr",{className:"DocsRule"})}}function Od(BB){let{blocks:TB}=BB;return(0,DB.jsx)(DB.Fragment,{children:TB.map(((BB,TB)=>(0,DB.jsx)(Ld,{block:BB},TB)))})}var Dd=dB(4138),ud=dB(4141);function Hd(BB){return"blocks"===BB||"items"===BB}const Ed=new Map;function vd(BB){let TB=Ed.get(BB);return TB||(TB=function(BB){const TB={entries:[],legend:[],notes:[],examples:[]};let dB=!1;for(const pB of BB.split(/\r?\n/).slice(1)){if(pB.startsWith("#")){const BB=pB.replace(/^# ?/,""),VB=BB.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);VB?TB.legend.push({code:VB[1],meaning:VB[2],usage:VB[3].trim()}):/^Examples:/.test(BB.trim())?dB=!0:dB&&BB.trim()?TB.examples.push(BB.trim()):BB.trim()&&!/^\s/.test(BB)&&TB.notes.push(BB.trim());continue}const BB=pB.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var VB,yB;BB&&TB.entries.push({name:BB[1],variants:null!==(VB=null===(yB=BB[2])||void 0===yB?void 0:yB.split(","))&&void 0!==VB?VB:[]})}return TB}("blocks"===BB?Dd:ud),Ed.set(BB,TB)),TB}function md(BB){let{className:TB,value:dB,placeholder:VB,label:yB,onChange:pB,count:lB,children:JB}=BB;return(0,DB.jsxs)("div",{className:TB,children:[(0,DB.jsx)(HB,{name:"magnifying-glass"}),(0,DB.jsx)("input",{type:"search",value:dB,placeholder:VB,"aria-label":yB,onChange:BB=>{pB(BB.target.value)}}),JB,lB&&(0,DB.jsxs)("span",{className:"DocsFilterCount",children:[lB.visible," of ",lB.total]})]})}var Nd=dB(946);function td(BB){const TB=BB.trim().match(/^(` {
                           1,
                           2
-                        })\ s * ([ ^ `]+?)\s*\1$/);return cJ?cJ[2]:null}function EZ(JJ){return"paragraph"===JJ.kind&&""===JJ.text.trim()}function VZ(JJ){const cJ={name:JJ.heading.text,description:[],params:[],returns:null};let ZJ="description";for(const UJ of JJ.blocks)if(!EZ(UJ))if("heading"===UJ.kind&&/^Parameters:?$/.test(UJ.text))ZJ="params";else if("heading"===UJ.kind&&/^Returns:?$/.test(UJ.text))ZJ="returns",cJ.returns={type:"",description:[]};else if("params"!==ZJ||"table"!==UJ.kind){if("returns"===ZJ&&"paragraph"===UJ.kind&&""===cJ.returns.type){const JJ=QZ(UJ.text);if(null!==JJ){cJ.returns.type=JJ.replaceAll("\\|","|");continue}}"returns"===ZJ?cJ.returns.description.push(UJ):cJ.description.push(UJ)}else for(const[JJ,ZJ,eJ]of UJ.rows){var FJ;cJ.params.push({name:JJ,type:null!==(FJ=QZ(ZJ))&&void 0!==FJ?FJ:ZJ,description:null!==eJ&&void 0!==eJ?eJ:""})}return cJ}const KZ=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function yZ(JJ){return JJ.filter((JJ=>!EZ(JJ)))}const SZ=/^[\w][\w .'&!:()-]*$/,IZ=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function MZ(JJ){var cJ;if("code"===JJ.kind&&"text"===JJ.lang){const cJ=JJ.code.split("\n").map((JJ=>JJ.trim())).filter(Boolean);return cJ.length>0&&cJ.every((JJ=>SZ.test(JJ)))?cJ.map((JJ=>({name:JJ}))):null}return"paragraph"===JJ.kind&&IZ.test(JJ.text.trim())?[...JJ.text.matchAll(/`([ ^ `]+)` / g)].flatMap((⟦2-char-id⟧ => ⟦2-char-id⟧[1].split(/,\s*/).map((⟦2-char-id⟧ => ({
+                        })\ s * ([ ^ `]+?)\s*\1$/);return TB?TB[2]:null}function fd(BB){return"paragraph"===BB.kind&&""===BB.text.trim()}function sd(BB){const TB={name:BB.heading.text,description:[],params:[],returns:null};let dB="description";for(const yB of BB.blocks)if(!fd(yB))if("heading"===yB.kind&&/^Parameters:?$/.test(yB.text))dB="params";else if("heading"===yB.kind&&/^Returns:?$/.test(yB.text))dB="returns",TB.returns={type:"",description:[]};else if("params"!==dB||"table"!==yB.kind){if("returns"===dB&&"paragraph"===yB.kind&&""===TB.returns.type){const BB=td(yB.text);if(null!==BB){TB.returns.type=BB.replaceAll("\\|","|");continue}}"returns"===dB?TB.returns.description.push(yB):TB.description.push(yB)}else for(const[BB,dB,pB]of yB.rows){var VB;TB.params.push({name:BB,type:null!==(VB=td(dB))&&void 0!==VB?VB:dB,description:null!==pB&&void 0!==pB?pB:""})}return TB}const Md=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function zd(BB){return BB.filter((BB=>!fd(BB)))}const wd=/^[\w][\w .'&!:()-]*$/,Ud=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function Fd(BB){var TB;if("code"===BB.kind&&"text"===BB.lang){const TB=BB.code.split("\n").map((BB=>BB.trim())).filter(Boolean);return TB.length>0&&TB.every((BB=>wd.test(BB)))?TB.map((BB=>({name:BB}))):null}return"paragraph"===BB.kind&&Ud.test(BB.text.trim())?[...BB.text.matchAll(/`([ ^ `]+)` / g)].flatMap((⟦2-char-id⟧ => ⟦2-char-id⟧[1].split(/,\s*/).map((⟦2-char-id⟧ => ({
                               name: ⟦2-char-id⟧.trim()
                             }))))): "table" === ⟦2-char-id⟧.kind && null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.header[0]) && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.startsWith("Song") ? ⟦2-char-id⟧.rows.map((⟦2-char-id⟧ => {
                               let [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 51 · Change · +1 / -1</summary>

```diff
@@ -1625,7 +1625,7 @@
                           };
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-                            return `${wZ[JJ]}-${(0,KJ.v)(cJ)}`
+                            return `${rd[BB]}-${(0,sB.m)(TB)}`
                           }
                           const ⟦2-char-id⟧ = new WeakMap;
 
```

</details>

<details>
<summary>Hunk 52 · Change · +1 / -1</summary>

```diff
@@ -1634,7 +1634,7 @@
                             if (!⟦2-char-id⟧) {
                               ⟦2-char-id⟧ = new Map;
                               const ⟦2-char-id⟧ = new Set;
-                              for (const ⟦2-char-id⟧ of (0, ⟦2-char-id⟧.y)(⟦2-char-id⟧)) {
+                              for (const ⟦2-char-id⟧ of (0, ⟦2-char-id⟧.n)(⟦2-char-id⟧)) {
                                 const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧.blocks)).map((⟦2-char-id⟧ => {
                                   if ("block" === ⟦2-char-id⟧.kind) return ⟦2-char-id⟧;
                                   return {
```

</details>

<details>
<summary>Hunk 53 · Change · +2 / -2</summary>

```diff
@@ -1643,11 +1643,11 @@
                                       var ⟦2-char-id⟧, ⟦2-char-id⟧;
                                       const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.name);
                                       let ⟦2-char-id⟧ = ⟦2-char-id⟧;
-                                      for (let ⟦2-char-id⟧ = 2; ⟦2-char-id⟧.has(⟦2-char-id⟧); ⟦2-char-id⟧++) ⟦2-char-id⟧ = `${XJ}-${JJ}`;
+                                      for (let ⟦2-char-id⟧ = 2; ⟦2-char-id⟧.has(⟦2-char-id⟧); ⟦2-char-id⟧++) ⟦2-char-id⟧ = `${lB}-${BB}`;
                                       return ⟦2-char-id⟧.add(⟦2-char-id⟧), {
                                         ...⟦2-char-id⟧,
                                         anchor: ⟦2-char-id⟧,
-                                        heading: null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.heading) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.text) && void 0 !== ⟦2-char-id⟧ ? FJ : ""
+                                        heading: null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.heading) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.text) && void 0 !== ⟦2-char-id⟧ ? VB : ""
                                       }
                                     })),
                                     isSongs: ⟦2-char-id⟧.isSongs
```

</details>

<details>
<summary>Hunk 54 · Change · +2 / -2</summary>

```diff
@@ -1669,8 +1669,8 @@
                               heading: "Poses",
                               prefix: "pose"
                             }];
-                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(3709),
-                            ⟦2-char-id⟧ = ⟦2-char-id⟧(3726);
+                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(3704),
+                            ⟦2-char-id⟧ = ⟦2-char-id⟧(3716);
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧) {
                             return Object.hasOwn(⟦2-char-id⟧.f, ⟦2-char-id⟧) ? ⟦2-char-id⟧.f[⟦2-char-id⟧] : null
```

</details>

<details>
<summary>Hunk 55 · Change · +1 / -1</summary>

```diff
@@ -1697,7 +1697,7 @@
                               factor: 1,
                               factor2: 1
                             }],
-                            blendMode: ⟦2-char-id⟧.g.Standard
+                            blendMode: ⟦2-char-id⟧.e.Standard
                           };
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 56 · Change · +2 / -2</summary>

```diff
@@ -1730,9 +1730,9 @@
                             return [...⟦2-char-id⟧.colorGradients].sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.timeFraction - ⟦2-char-id⟧.timeFraction)).map((⟦2-char-id⟧ => {
                               var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
                               const ⟦2-char-id⟧ = ⟦2-char-id⟧.minColor,
-                                ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.maxColor) && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧,
+                                ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.maxColor) && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧,
                                 ⟦2-char-id⟧ = ⟦2-char-id⟧(),
-                                ⟦2-char-id⟧ = [⟦2-char-id⟧(⟦2-char-id⟧[0], ⟦2-char-id⟧[0], ⟦2-char-id⟧) / 255, ⟦2-char-id⟧(⟦2-char-id⟧[1], ⟦2-char-id⟧[1], ⟦2-char-id⟧) / 255, ⟦2-char-id⟧(⟦2-char-id⟧[2], ⟦2-char-id⟧[2], ⟦2-char-id⟧) / 255, ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[3]) && void 0 !== ⟦2-char-id⟧ ? FJ : 1, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[3]) && void 0 !== ⟦2-char-id⟧ ? UJ : 1, ⟦2-char-id⟧)];
+                                ⟦2-char-id⟧ = [⟦2-char-id⟧(⟦2-char-id⟧[0], ⟦2-char-id⟧[0], ⟦2-char-id⟧) / 255, ⟦2-char-id⟧(⟦2-char-id⟧[1], ⟦2-char-id⟧[1], ⟦2-char-id⟧) / 255, ⟦2-char-id⟧(⟦2-char-id⟧[2], ⟦2-char-id⟧[2], ⟦2-char-id⟧) / 255, ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[3]) && void 0 !== ⟦2-char-id⟧ ? VB : 1, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[3]) && void 0 !== ⟦2-char-id⟧ ? yB : 1, ⟦2-char-id⟧)];
                               return {
                                 at: ⟦2-char-id⟧.timeFraction,
                                 colour: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 57 · Change · +1 / -1</summary>

```diff
@@ -1763,7 +1763,7 @@
                             for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length - 1; ⟦2-char-id⟧++)
                               if (⟦2-char-id⟧ <= ⟦2-char-id⟧[⟦2-char-id⟧ + 1].at) {
                                 const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 1].at - ⟦2-char-id⟧[⟦2-char-id⟧].at;
-                                return ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧ + 1), ⟦2-char-id⟧ > 0 ? (⟦2-char-id⟧ - ⟦2-char-id⟧[⟦2-char-id⟧].at) / eJ : 1)
+                                return ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧ + 1), ⟦2-char-id⟧ > 0 ? (⟦2-char-id⟧ - ⟦2-char-id⟧[⟦2-char-id⟧].at) / pB : 1)
                               } return ⟦2-char-id⟧(⟦2-char-id⟧.length - 1)
                           }
 
```

</details>

<details>
<summary>Hunk 58 · Change · +1 / -1</summary>

```diff
@@ -1778,7 +1778,7 @@
                             }(⟦2-char-id⟧) * ⟦2-char-id⟧;
                             for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < 3; ⟦2-char-id⟧++) {
                               var ⟦2-char-id⟧;
-                              ⟦2-char-id⟧.pos[⟦2-char-id⟧] += ⟦2-char-id⟧.dir[⟦2-char-id⟧] * ⟦2-char-id⟧, ⟦2-char-id⟧.dir[⟦2-char-id⟧] += (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? UJ : 0) * ⟦2-char-id⟧
+                              ⟦2-char-id⟧.pos[⟦2-char-id⟧] += ⟦2-char-id⟧.dir[⟦2-char-id⟧] * ⟦2-char-id⟧, ⟦2-char-id⟧.dir[⟦2-char-id⟧] += (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? yB : 0) * ⟦2-char-id⟧
                             }
                             return !0
                           }
```

</details>

<details>
<summary>Hunk 59 · Change · +5 / -5</summary>

```diff
@@ -1788,26 +1788,26 @@
                           }
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧) {
-                            return `[${JJ.map(BZ).join(", ")}]`
+                            return `[${BB.map(bd).join(", ")}]`
                           }
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-                            const ⟦2-char-id⟧ = `${cJ}    `;
-                            return `[\n${(CZ(JJ)?JJ.map((JJ=>{const cJ=[`${⟦2-char-id⟧}    timeFraction: ${⟦2-char-id⟧(⟦2-char-id⟧.timeFraction)},`,`${⟦2-char-id⟧}    minColor: ${⟦2-char-id⟧(⟦2-char-id⟧.minColor)},`];return JJ.maxColor&&cJ.push(`${⟦2-char-id⟧}    maxColor: ${⟦2-char-id⟧(⟦2-char-id⟧.maxColor)},`),`${⟦2-char-id⟧}{\⟦2-char-id⟧{⟦2-char-id⟧.join("\n")}\⟦2-char-id⟧{⟦2-char-id⟧}},`})):JJ.map((JJ=>`
+                            const ⟦2-char-id⟧ = `${TB}    `;
+                            return `[\n${(Cd(BB)?BB.map((BB=>{const TB=[`${⟦2-char-id⟧}    timeFraction: ${⟦2-char-id⟧(⟦2-char-id⟧.timeFraction)},`,`${⟦2-char-id⟧}    minColor: ${⟦2-char-id⟧(⟦2-char-id⟧.minColor)},`];return BB.maxColor&&TB.push(`${⟦2-char-id⟧}    maxColor: ${⟦2-char-id⟧(⟦2-char-id⟧.maxColor)},`),`${⟦2-char-id⟧}{\⟦2-char-id⟧{⟦2-char-id⟧.join("\n")}\⟦2-char-id⟧{⟦2-char-id⟧}},`})):BB.map((BB=>`
                             $ {
                               ⟦2-char-id⟧
                             } {
                               color: $ {
                                 ⟦2-char-id⟧(⟦2-char-id⟧.color)
                               }
-                            }, `))).join("\n")}\n${cJ}]`
+                            }, `))).join("\n")}\n${TB}]`
                           }
                           const ⟦2-char-id⟧ = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                             ⟦2-char-id⟧ = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                           const ⟦2-char-id⟧ = .6;
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-                            return `${cJ?"song":"sound"}:${JJ}`
+                            return `${TB?"song":"sound"}:${BB}`
                           }
                           let ⟦2-char-id⟧ = {
                               track: null,
```

</details>

<details>
<summary>Hunk 60 · Change · +1 / -1</summary>

```diff
@@ -1869,7 +1869,7 @@
                                 status: "loading",
                                 duration: ⟦2-char-id⟧
                               }
-                            }), Promise.all([⟦2-char-id⟧.e(201), ⟦2-char-id⟧.e(229)]).then((() => ⟦2-char-id⟧(38603))).then((⟦2-char-id⟧ => {
+                            }), Promise.all([⟦2-char-id⟧.e(201), ⟦2-char-id⟧.e(229)]).then((() => ⟦2-char-id⟧(38545))).then((⟦2-char-id⟧ => {
                               let {
                                 playDocsSound: ⟦2-char-id⟧
                               } = ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 61 · Change · +2 / -2</summary>

```diff
@@ -1884,13 +1884,13 @@
                                   var ⟦2-char-id⟧, ⟦2-char-id⟧;
                                   ⟦2-char-id⟧ === ⟦2-char-id⟧ && (⟦2-char-id⟧ = null, ⟦2-char-id⟧ ? ⟦2-char-id⟧({
                                     track: null
-                                  }) : (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.track) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.duration) && void 0 !== ⟦2-char-id⟧ ? cJ : 0, ⟦2-char-id⟧({
+                                  }) : (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.track) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.duration) && void 0 !== ⟦2-char-id⟧ ? TB : 0, ⟦2-char-id⟧({
                                     status: "paused"
                                   })))
                                 }
                               }))
                             })).catch((⟦2-char-id⟧ => {
-                              console.error(`Could not play docs sound ${JJ}`, ⟦2-char-id⟧), ⟦2-char-id⟧ === ⟦2-char-id⟧ && ⟦2-char-id⟧({
+                              console.error(`Could not play docs sound ${BB}`, ⟦2-char-id⟧), ⟦2-char-id⟧ === ⟦2-char-id⟧ && ⟦2-char-id⟧({
                                 track: null
                               })
                             }))
```

</details>

<details>
<summary>Hunk 62 · Change · +1 / -1</summary>

```diff
@@ -1901,7 +1901,7 @@
                               track: ⟦2-char-id⟧
                             } = ⟦2-char-id⟧;
                             if (!⟦2-char-id⟧) return;
-                            if ("playing" === ⟦2-char-id⟧.status && ⟦2-char-id⟧) return ⟦2-char-id⟧ = ⟦2-char-id⟧.Om(), ⟦2-char-id⟧.pause(), void ⟦2-char-id⟧({
+                            if ("playing" === ⟦2-char-id⟧.status && ⟦2-char-id⟧) return ⟦2-char-id⟧ = ⟦2-char-id⟧.Dv(), ⟦2-char-id⟧.pause(), void ⟦2-char-id⟧({
                               status: "paused"
                             });
                             if ("loading" === ⟦2-char-id⟧.status) return ⟦2-char-id⟧(), void ⟦2-char-id⟧({
```

</details>

<details>
<summary>Hunk 63 · Change · +1 / -1</summary>

```diff
@@ -1914,7 +1914,7 @@
 
                           function ⟦2-char-id⟧() {
                             var ⟦2-char-id⟧;
-                            return ⟦2-char-id⟧ && "playing" === (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.track) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.status) ? ⟦2-char-id⟧.Om() : ⟦2-char-id⟧
+                            return ⟦2-char-id⟧ && "playing" === (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.track) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.status) ? ⟦2-char-id⟧.Dv() : ⟦2-char-id⟧
                           }
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 64 · Change · +1 / -1</summary>

```diff
@@ -1936,7 +1936,7 @@
                             const [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null);
                             return (0, ⟦2-char-id⟧.useEffect)((() => {
                               let ⟦2-char-id⟧ = !1;
-                              return ⟦2-char-id⟧ ??= Promise.all([⟦2-char-id⟧.e(64), ⟦2-char-id⟧.e(67), ⟦2-char-id⟧.e(66), ⟦2-char-id⟧.e(65), ⟦2-char-id⟧.e(185), ⟦2-char-id⟧.e(90), ⟦2-char-id⟧.e(208)]).then((() => ⟦2-char-id⟧(38594))), ⟦2-char-id⟧.then((⟦2-char-id⟧ => {
+                              return ⟦2-char-id⟧ ??= Promise.all([⟦2-char-id⟧.e(64), ⟦2-char-id⟧.e(67), ⟦2-char-id⟧.e(66), ⟦2-char-id⟧.e(65), ⟦2-char-id⟧.e(185), ⟦2-char-id⟧.e(90), ⟦2-char-id⟧.e(208)]).then((() => ⟦2-char-id⟧(38536))), ⟦2-char-id⟧.then((⟦2-char-id⟧ => {
                                 ⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧)
                               }), (⟦2-char-id⟧ => {
                                 console.error("Could not load the docs gallery's textures", ⟦2-char-id⟧), ⟦2-char-id⟧ = null
```

</details>

<details>
<summary>Hunk 65 · Change · +2 / -2</summary>

```diff
@@ -1952,10 +1952,10 @@
                             const ⟦2-char-id⟧ = "skins" === ⟦2-char-id⟧ ? function(⟦2-char-id⟧, ⟦2-char-id⟧) {
                               const ⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.startsWith(⟦2-char-id⟧.heading)));
                               return ⟦2-char-id⟧ ? function(⟦2-char-id⟧, ⟦2-char-id⟧) {
-                                return `${JJ}-${cJ}`
+                                return `${BB}-${TB}`
                               }(⟦2-char-id⟧.prefix, ⟦2-char-id⟧) : null
                             }(⟦2-char-id⟧.heading, ⟦2-char-id⟧.name) : null;
-                            return null === ⟦2-char-id⟧ ? null : `${PZ}/${ZJ}.webp`
+                            return null === ⟦2-char-id⟧ ? null : `${Pd}/${dB}.webp`
                           }
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 66 · Change · +4 / -4</summary>

```diff
@@ -1968,17 +1968,17 @@
                             const {
                               name: ⟦2-char-id⟧
                             } = ⟦2-char-id⟧, [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1);
-                            if ("icons" === ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧)) return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+                            if ("icons" === ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧)) return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                               className: "DocsTileIcon",
                               name: ⟦2-char-id⟧
                             });
                             let ⟦2-char-id⟧ = null;
                             var ⟦2-char-id⟧;
-                            if ("icons" === ⟦2-char-id⟧) ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.getIngameIconUrl(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? hJ : null;
+                            if ("icons" === ⟦2-char-id⟧) ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.getIngameIconUrl(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? kB : null;
                             else if ("particles" === ⟦2-char-id⟧) {
                               var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-                              ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.getParticleTextureUrl(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.texture) && void 0 !== ⟦2-char-id⟧ ? sJ : ⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? DJ : null
-                            } else "skins" === ⟦2-char-id⟧ && (⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? XJ : ⟦2-char-id⟧.test(⟦2-char-id⟧) ? `/textures/charSkins/previews/${AJ}_preview.png` : null);
+                              ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.getParticleTextureUrl(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.texture) && void 0 !== ⟦2-char-id⟧ ? OB : ⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? LB : null
+                            } else "skins" === ⟦2-char-id⟧ && (⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? lB : ⟦2-char-id⟧.test(⟦2-char-id⟧) ? `/textures/charSkins/previews/${JB}_preview.png` : null);
                             return !⟦2-char-id⟧ || ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
                               className: "DocsTileIcon Placeholder",
                               name: "skins" === ⟦2-char-id⟧ ? "person" : "image"
```

</details>

<details>
<summary>Hunk 67 · Change · +2 / -2</summary>

```diff
@@ -1987,11 +1987,11 @@
                                 Pixelated: "skins" !== ⟦2-char-id⟧
                               }),
                               src: ⟦2-char-id⟧,
-                              srcSet: ⟦2-char-id⟧ === ⟦2-char-id⟧ ? `${YJ} 2x` : void 0,
+                              srcSet: ⟦2-char-id⟧ === ⟦2-char-id⟧ ? `${oB} 2x` : void 0,
                               alt: "",
                               loading: "lazy",
                               onError: () => {
-                                console.warn(`Docs gallery: could not load ${YJ}`), ⟦2-char-id⟧(!0)
+                                console.warn(`Docs gallery: could not load ${oB}`), ⟦2-char-id⟧(!0)
                               }
                             })
                           }
```

</details>

<details>
<summary>Hunk 68 · Change · +1 / -1</summary>

```diff
@@ -2015,7 +2015,7 @@
                                 Playing: ⟦2-char-id⟧
                               }),
                               "data-docs-track": ⟦2-char-id⟧(⟦2-char-id⟧.name, ⟦2-char-id⟧),
-                              "aria-label": ⟦2-char-id⟧ ? `Pause ${cJ.name}` : `Play ${cJ.name}`,
+                              "aria-label": ⟦2-char-id⟧ ? `Pause ${TB.name}` : `Play ${TB.name}`,
                               onClick: () => {
                                 null !== ⟦2-char-id⟧ ? ⟦2-char-id⟧() : ⟦2-char-id⟧(⟦2-char-id⟧.name, ⟦2-char-id⟧)
                               },
```

</details>

<details>
<summary>Hunk 69 · Change · +1 / -1</summary>

```diff
@@ -2052,7 +2052,7 @@
                               children: [⟦2-char-id⟧.length > ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
                                 className: "DocsGalleryFilter",
                                 value: ⟦2-char-id⟧,
-                                placeholder: `Filter ${ZJ.length} names\u2026`,
+                                placeholder: `Filter ${dB.length} names\u2026`,
                                 label: "Filter names",
                                 onChange: ⟦2-char-id⟧,
                                 count: ⟦2-char-id⟧ ? {
```

</details>

<details>
<summary>Hunk 70 · Change · +1 / -1</summary>

```diff
@@ -2060,7 +2060,7 @@
                                   total: ⟦2-char-id⟧.length
                                 } : null
                               }), (0, ⟦2-char-id⟧.jsx)("div", {
-                                className: ⟦2-char-id⟧()("DocsGalleryGrid", `Kind-${cJ}`, {
+                                className: ⟦2-char-id⟧()("DocsGalleryGrid", `Kind-${TB}`, {
                                   Songs: ⟦2-char-id⟧
                                 }),
                                 children: ⟦2-char-id⟧.map((⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 71 · Change · +1 / -1</summary>

```diff
@@ -2074,7 +2074,7 @@
                                     className: ⟦2-char-id⟧()("DocsTile Previewable", {
                                       Copied: ⟦2-char-id⟧ === ⟦2-char-id⟧.name
                                     }),
-                                    title: `Play "${JJ.name}" in the playground and copy its name`,
+                                    title: `Play "${BB.name}" in the playground and copy its name`,
                                     onClick: () => {
                                       ⟦2-char-id⟧(⟦2-char-id⟧.name), ⟦2-char-id⟧(⟦2-char-id⟧.name)
                                     },
```

</details>

<details>
<summary>Hunk 72 · Change · +1 / -1</summary>

```diff
@@ -2103,7 +2103,7 @@
                                     className: ⟦2-char-id⟧()("DocsTile", {
                                       Copied: ⟦2-char-id⟧ === ⟦2-char-id⟧.name
                                     }),
-                                    title: `Copy "${JJ.name}"`,
+                                    title: `Copy "${BB.name}"`,
                                     onClick: () => {
                                       ⟦2-char-id⟧(⟦2-char-id⟧.name)
                                     },
```

</details>

<details>
<summary>Hunk 73 · Change · +1 / -1</summary>

```diff
@@ -2176,7 +2176,7 @@
                                   countNoun: ⟦2-char-id⟧
                                 } = ⟦2-char-id⟧;
                                 const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
-                                return (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.c, {
+                                return (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.d, {
                                   to: ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧),
                                   className: "DocsLandingCard",
                                   children: [(0, ⟦2-char-id⟧.jsx)("span", {
```

</details>

<details>
<summary>Hunk 74 · Change · +3 / -3</summary>

```diff
@@ -2210,17 +2210,17 @@
                               children: [(0, ⟦2-char-id⟧.jsx)("span", {
                                 className: "DocsCubeFace Top",
                                 style: {
-                                  backgroundImage: `url("${cJ.top}")`
+                                  backgroundImage: `url("${TB.top}")`
                                 }
                               }), (0, ⟦2-char-id⟧.jsx)("span", {
                                 className: "DocsCubeFace Left",
                                 style: {
-                                  backgroundImage: `url("${cJ.left}")`
+                                  backgroundImage: `url("${TB.left}")`
                                 }
                               }), (0, ⟦2-char-id⟧.jsx)("span", {
                                 className: "DocsCubeFace Right",
                                 style: {
-                                  backgroundImage: `url("${cJ.right}")`
+                                  backgroundImage: `url("${TB.right}")`
                                 }
                               })]
                             })
```

</details>

<details>
<summary>Hunk 75 · Change · +1 / -1</summary>

```diff
@@ -2236,7 +2236,7 @@
                               alt: "",
                               loading: "lazy",
                               onError: () => {
-                                console.warn(`Docs catalogue: could not load ${cJ}`), ⟦2-char-id⟧(!0)
+                                console.warn(`Docs catalogue: could not load ${TB}`), ⟦2-char-id⟧(!0)
                               }
                             })
                           }
```

</details>

<details>
<summary>Hunk 76 · Change · +1 / -1</summary>

```diff
@@ -2247,7 +2247,7 @@
                             } = ⟦2-char-id⟧;
                             const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧),
                               ⟦2-char-id⟧ = ⟦2-char-id⟧(),
-                              ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.q)(),
+                              ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.o)(),
                               [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(""),
                               [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null),
                               [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 77 · Change · +1 / -1</summary>

```diff
@@ -2255,7 +2255,7 @@
                               ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null),
                               ⟦2-char-id⟧ = ⟦2-char-id⟧.trim().toLowerCase();
                             (0, ⟦2-char-id⟧.useEffect)((() => {
-                              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.r)(⟦2-char-id⟧.hash),
+                              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.k)(⟦2-char-id⟧.hash),
                                 ⟦2-char-id⟧ = ⟦2-char-id⟧.entries.find((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.name) === ⟦2-char-id⟧));
                               if (⟦2-char-id⟧) ⟦2-char-id⟧.current = ⟦2-char-id⟧.name, ⟦2-char-id⟧(⟦2-char-id⟧.name), ⟦2-char-id⟧(null), ⟦2-char-id⟧(⟦2-char-id⟧.name);
                               else if (null !== ⟦2-char-id⟧.current) {
```

</details>

<details>
<summary>Hunk 78 · Change · +1 / -1</summary>

```diff
@@ -2299,7 +2299,7 @@
                                             Active: ⟦2-char-id⟧ === ⟦2-char-id⟧.code
                                           }),
                                           "aria-pressed": ⟦2-char-id⟧ === ⟦2-char-id⟧.code,
-                                          title: `Show only ${cJ} with ${JJ.meaning} variants`,
+                                          title: `Show only ${TB} with ${BB.meaning} variants`,
                                           onClick: () => {
                                             ⟦2-char-id⟧(⟦2-char-id⟧ === ⟦2-char-id⟧.code ? null : ⟦2-char-id⟧.code)
                                           },
```

</details>

<details>
<summary>Hunk 79 · Change · +2 / -2</summary>

```diff
@@ -2322,8 +2322,8 @@
                               }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
                                 className: "DocsFilterBar",
                                 value: ⟦2-char-id⟧,
-                                placeholder: `Search ${ZJ.entries.length} ${cJ}\u2026`,
-                                label: `Search ${cJ}`,
+                                placeholder: `Search ${dB.entries.length} ${TB}\u2026`,
+                                label: `Search ${TB}`,
                                 onChange: ⟦2-char-id⟧ => {
                                   ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧)
                                 },
```

</details>

<details>
<summary>Hunk 80 · Change · +2 / -2</summary>

```diff
@@ -2385,8 +2385,8 @@
                               })]
                             })
                           }
-                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(4220),
-                            ⟦2-char-id⟧ = ⟦2-char-id⟧(1475);
+                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(4218),
+                            ⟦2-char-id⟧ = ⟦2-char-id⟧(1477);
                           const ⟦2-char-id⟧ = .95 * ⟦2-char-id⟧.b;
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 81 · Change · +2 / -2</summary>

```diff
@@ -2403,10 +2403,10 @@
                           }
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-                            const ⟦2-char-id⟧ = `${"#".repeat(cJ)} `,
+                            const ⟦2-char-id⟧ = `${"#".repeat(TB)} `,
                               ⟦2-char-id⟧ = [];
                             let ⟦2-char-id⟧ = !1;
-                            for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.split("\n")) ⟦2-char-id⟧(⟦2-char-id⟧) ? ⟦2-char-id⟧ = !UJ : !⟦2-char-id⟧ && ⟦2-char-id⟧.startsWith(⟦2-char-id⟧) && ⟦2-char-id⟧.push(⟦2-char-id⟧.slice(⟦2-char-id⟧.length).trim());
+                            for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.split("\n")) ⟦2-char-id⟧(⟦2-char-id⟧) ? ⟦2-char-id⟧ = !yB : !⟦2-char-id⟧ && ⟦2-char-id⟧.startsWith(⟦2-char-id⟧) && ⟦2-char-id⟧.push(⟦2-char-id⟧.slice(⟦2-char-id⟧.length).trim());
                             return ⟦2-char-id⟧
                           }
 
```

</details>

<details>
<summary>Hunk 82 · Change · +1 / -1</summary>

```diff
@@ -2431,7 +2431,7 @@
                                   }(function(⟦2-char-id⟧, ⟦2-char-id⟧) {
                                     return ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.startsWith("## "))).flatMap((⟦2-char-id⟧ => {
                                       var ⟦2-char-id⟧;
-                                      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, 2)[0]) && void 0 !== ⟦2-char-id⟧ ? ZJ : "";
+                                      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, 2)[0]) && void 0 !== ⟦2-char-id⟧ ? dB : "";
                                       if (⟦2-char-id⟧(⟦2-char-id⟧) <= ⟦2-char-id⟧) return [{
                                         markdown: ⟦2-char-id⟧,
                                         section: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 83 · Change · +1 / -1</summary>

```diff
@@ -2445,7 +2445,7 @@
                                         var ⟦2-char-id⟧;
                                         const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, 3),
                                           ⟦2-char-id⟧ = ⟦2-char-id⟧.startsWith("### ") ? ⟦2-char-id⟧[0] : ⟦2-char-id⟧;
-                                        return ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.at(-1)) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧, {
+                                        return ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.at(-1)) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧, {
                                           markdown: ⟦2-char-id⟧,
                                           section: ⟦2-char-id⟧ || ⟦2-char-id⟧
                                         }
```

</details>

<details>
<summary>Hunk 84 · Change · +1 / -1</summary>

```diff
@@ -2454,7 +2454,7 @@
                                   }(⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧), ⟦2-char-id⟧);
                                 return {
                                   page: ⟦2-char-id⟧,
-                                  groups: ⟦2-char-id⟧.length > 1 ? ZJ : []
+                                  groups: ⟦2-char-id⟧.length > 1 ? dB : []
                                 }
                               }));
                               for (const {
```

</details>

<details>
<summary>Hunk 85 · Change · +2 / -2</summary>

```diff
@@ -2462,9 +2462,9 @@
                                   groups: ⟦2-char-id⟧
                                 }
                                 of ⟦2-char-id⟧) ⟦2-char-id⟧.forEach(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
-                                const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.o)(⟦2-char-id⟧.slug, ⟦2-char-id⟧);
+                                const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.r)(⟦2-char-id⟧.slug, ⟦2-char-id⟧);
                                 for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.flatMap((⟦2-char-id⟧ => [...⟦2-char-id⟧(⟦2-char-id⟧.markdown, 2), ...⟦2-char-id⟧(⟦2-char-id⟧.markdown, 3)]))) {
-                                  const ⟦2-char-id⟧ = `${FJ.id}#${(0,KJ.v)(UJ)}`;
+                                  const ⟦2-char-id⟧ = `${VB.id}#${(0,sB.m)(yB)}`;
                                   this.partPaths.has(⟦2-char-id⟧) || this.partPaths.set(⟦2-char-id⟧, ⟦2-char-id⟧)
                                 }
                               }));
```

</details>

<details>
<summary>Hunk 86 · Change · +3 / -3</summary>

```diff
@@ -2475,14 +2475,14 @@
                                 } = ⟦2-char-id⟧;
                                 return {
                                   page: ⟦2-char-id⟧,
-                                  path: (0, ⟦2-char-id⟧.n)(⟦2-char-id⟧.slug),
-                                  markdown: `# ${cJ.title}\n\n${this.resolveLinks(cJ,NF(cJ))}\n`,
+                                  path: (0, ⟦2-char-id⟧.q)(⟦2-char-id⟧.slug),
+                                  markdown: `# ${TB.title}\n\n${this.resolveLinks(TB,XV(TB))}\n`,
                                   parts: ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => this.renderPart(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.length)))
                                 }
                               }))
                             }
                             url(⟦2-char-id⟧) {
-                              return `${this.origin}${JJ}`
+                              return `${this.origin}${BB}`
                             }
                             getPage(⟦2-char-id⟧) {
                               return this.pages.find((⟦2-char-id⟧ => ⟦2-char-id⟧.page.id === ⟦2-char-id⟧))
```

</details>

<details>
<summary>Hunk 87 · Change · +5 / -5</summary>

```diff
@@ -2495,18 +2495,18 @@
                               }]).filter((⟦2-char-id⟧ => ⟦2-char-id⟧.markdown.length > ⟦2-char-id⟧.b))))
                             }
                             markdownUrl(⟦2-char-id⟧, ⟦2-char-id⟧) {
-                              const ⟦2-char-id⟧ = ⟦2-char-id⟧ && this.partPaths.get(`${JJ.id}#${cJ}`) || (0, ⟦2-char-id⟧.n)(⟦2-char-id⟧.slug);
-                              return this.url(⟦2-char-id⟧ ? `${ZJ}#${cJ}` : ⟦2-char-id⟧)
+                              const ⟦2-char-id⟧ = ⟦2-char-id⟧ && this.partPaths.get(`${BB.id}#${TB}`) || (0, ⟦2-char-id⟧.q)(⟦2-char-id⟧.slug);
+                              return this.url(⟦2-char-id⟧ ? `${dB}#${TB}` : ⟦2-char-id⟧)
                             }
                             resolveLinks(⟦2-char-id⟧, ⟦2-char-id⟧) {
                               return ⟦2-char-id⟧.replace(/\]\((#[^)]+)\)/g, ((⟦2-char-id⟧, ⟦2-char-id⟧) => {
                                 var ⟦2-char-id⟧;
-                                const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? FJ : this.samePageTarget(⟦2-char-id⟧, ⟦2-char-id⟧);
-                                return ⟦2-char-id⟧ ? `](${this.markdownUrl(UJ.page,UJ.anchor)})` : ⟦2-char-id⟧
+                                const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? VB : this.samePageTarget(⟦2-char-id⟧, ⟦2-char-id⟧);
+                                return ⟦2-char-id⟧ ? `](${this.markdownUrl(yB.page,yB.anchor)})` : ⟦2-char-id⟧
                               }))
                             }
                             samePageTarget(⟦2-char-id⟧, ⟦2-char-id⟧) {
-                              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.v)(⟦2-char-id⟧.slice(1));
+                              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧.slice(1));
                               return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) ? {
                                 page: ⟦2-char-id⟧,
                                 anchor: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 88 · Change · +11 / -11</summary>

```diff
@@ -2518,34 +2518,34 @@
                                   if (0 === ⟦2-char-id⟧.length) return "";
                                   const ⟦2-char-id⟧ = ⟦2-char-id⟧[0],
                                     ⟦2-char-id⟧ = ⟦2-char-id⟧.at(-1);
-                                  return ⟦2-char-id⟧ === ⟦2-char-id⟧ ? ZJ : `${ZJ} to ${FJ}`
+                                  return ⟦2-char-id⟧ === ⟦2-char-id⟧ ? dB : `${dB} to ${VB}`
                                 }(⟦2-char-id⟧),
                                 ⟦2-char-id⟧ = ⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧.markdown)).join("\n\n"),
-                                ⟦2-char-id⟧ = ⟦2-char-id⟧ ? `It covers ${UJ}. ` : "",
-                                ⟦2-char-id⟧ = `Part ${ZJ+1} of ${FJ} of [${JJ.title}](${this.url((0,HF.n)(JJ.slug))}). ${XJ}[llms.txt](${this.url(HF.e)}) lists every part.`;
+                                ⟦2-char-id⟧ = ⟦2-char-id⟧ ? `It covers ${yB}. ` : "",
+                                ⟦2-char-id⟧ = `Part ${dB+1} of ${VB} of [${BB.title}](${this.url((0,SV.q)(BB.slug))}). ${lB}[llms.txt](${this.url(SV.g)}) lists every part.`;
                               return {
-                                path: (0, ⟦2-char-id⟧.o)(⟦2-char-id⟧.slug, ⟦2-char-id⟧),
+                                path: (0, ⟦2-char-id⟧.r)(⟦2-char-id⟧.slug, ⟦2-char-id⟧),
                                 label: ⟦2-char-id⟧,
-                                markdown: `# ${JJ.title}, part ${ZJ+1} of ${FJ}\n\n${AJ}\n\n${this.resolveLinks(JJ,eJ)}\n`
+                                markdown: `# ${BB.title}, part ${dB+1} of ${VB}\n\n${JB}\n\n${this.resolveLinks(BB,pB)}\n`
                               }
                             }
                             llmsTxt(⟦2-char-id⟧) {
-                              const ⟦2-char-id⟧ = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${TF(HF.b)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
+                              const ⟦2-char-id⟧ = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${hV(SV.b)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                               for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
-                                ⟦2-char-id⟧.push("", `## ${ZJ.title}`, "");
+                                ⟦2-char-id⟧.push("", `## ${dB.title}`, "");
                                 for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.pageIds) {
                                   const ⟦2-char-id⟧ = this.getPage(⟦2-char-id⟧),
                                     {
                                       page: ⟦2-char-id⟧,
                                       parts: ⟦2-char-id⟧
                                     } = ⟦2-char-id⟧,
-                                    ⟦2-char-id⟧ = `About ${TF(ZJ.markdown.length)} tokens${UJ.length>0?`, in ${⟦2-char-id⟧.length} parts:`:"."}`;
-                                  ⟦2-char-id⟧.push(`- [${FJ.title}](${this.url(ZJ.path)}): ${FJ.summary} ${eJ}`), ⟦2-char-id⟧.forEach(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
-                                    ⟦2-char-id⟧.push(`  - [Part ${ZJ+1}${JJ.label?`: ${⟦2-char-id⟧.label}`:""}](${this.url(JJ.path)})`)
+                                    ⟦2-char-id⟧ = `About ${hV(dB.markdown.length)} tokens${yB.length>0?`, in ${⟦2-char-id⟧.length} parts:`:"."}`;
+                                  ⟦2-char-id⟧.push(`- [${VB.title}](${this.url(dB.path)}): ${VB.summary} ${pB}`), ⟦2-char-id⟧.forEach(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
+                                    ⟦2-char-id⟧.push(`  - [Part ${dB+1}${BB.label?`: ${⟦2-char-id⟧.label}`:""}](${this.url(BB.path)})`)
                                   }))
                                 }
                               }
-                              return ⟦2-char-id⟧.push("", "## Optional", "", `- [Every page in one file](${this.url(HF.d)}): About ${TF(JJ.length)} tokens, for a model with a large context window.`, ""), ⟦2-char-id⟧.join("\n")
+                              return ⟦2-char-id⟧.push("", "## Optional", "", `- [Every page in one file](${this.url(SV.e)}): About ${hV(BB.length)} tokens, for a model with a large context window.`, ""), ⟦2-char-id⟧.join("\n")
                             }
                             llmsFullTxt() {
                               return ⟦2-char-id⟧.flatMap((⟦2-char-id⟧ => ⟦2-char-id⟧.pageIds.map((⟦2-char-id⟧ => this.getPage(⟦2-char-id⟧).markdown)))).join("\n---\n\n")
```

</details>

<details>
<summary>Hunk 89 · Change · +3 / -3</summary>

```diff
@@ -2554,9 +2554,9 @@
                               const ⟦2-char-id⟧ = this.llmsFullTxt(),
                                 ⟦2-char-id⟧ = this.llmsTxt(⟦2-char-id⟧),
                                 ⟦2-char-id⟧ = new Map([
-                                  [⟦2-char-id⟧.j, ⟦2-char-id⟧],
-                                  [⟦2-char-id⟧.e, ⟦2-char-id⟧],
-                                  [⟦2-char-id⟧.d, ⟦2-char-id⟧]
+                                  [⟦2-char-id⟧.n, ⟦2-char-id⟧],
+                                  [⟦2-char-id⟧.g, ⟦2-char-id⟧],
+                                  [⟦2-char-id⟧.e, ⟦2-char-id⟧]
                                 ]);
                               for (const ⟦2-char-id⟧ of this.pages) {
                                 ⟦2-char-id⟧.set(⟦2-char-id⟧.path, ⟦2-char-id⟧.markdown);
```

</details>

<details>
<summary>Hunk 90 · Change · +2 / -2</summary>

```diff
@@ -2567,12 +2567,12 @@
                           }
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧) {
-                            return `${Math.max(1,Math.round(JJ/4e3))}K`
+                            return `${Math.max(1,Math.round(BB/4e3))}K`
                           }
                           let ⟦2-char-id⟧ = null;
 
                           function ⟦2-char-id⟧() {
-                            return ⟦2-char-id⟧ ??= new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.e), ⟦2-char-id⟧
+                            return ⟦2-char-id⟧ ??= new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.c), ⟦2-char-id⟧
                           }
                           const ⟦2-char-id⟧ = [{
                             name: "ChatGPT",
```

</details>

<details>
<summary>Hunk 91 · Change · +1 / -1</summary>

```diff
@@ -2583,7 +2583,7 @@
                           }];
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧) {
-                            return ⟦2-char-id⟧().getPage(⟦2-char-id⟧.id).parts.length > 0 ? `Read ${HF.f}, then the parts of the Bloxd Code API's ${JJ.title} page it lists, so I can ask questions about it.` : `Read ${PF.e}${(0,HF.n)(JJ.slug)} so I can ask questions about it. ${HF.f} lists every page of the Bloxd Code API docs.`
+                            return ⟦2-char-id⟧().getPage(⟦2-char-id⟧.id).parts.length > 0 ? `Read ${SV.k}, then the parts of the Bloxd Code API's ${BB.title} page it lists, so I can ask questions about it.` : `Read ${PV.c}${(0,SV.q)(BB.slug)} so I can ask questions about it. ${SV.k} lists every page of the Bloxd Code API docs.`
                           }
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 92 · Change · +1 / -1</summary>

```diff
@@ -2606,7 +2606,7 @@
                                 })]
                               }), ⟦2-char-id⟧.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsxs)("a", {
                                 className: "DocsPageAgentAction",
-                                href: `${JJ.url}${encodeURIComponent(RF(cJ))}`,
+                                href: `${BB.url}${encodeURIComponent(xV(TB))}`,
                                 target: "_blank",
                                 rel: "noreferrer",
                                 children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
```

</details>

<details>
<summary>Hunk 93 · Change · +1 / -1</summary>

```diff
@@ -2619,7 +2619,7 @@
                           }
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧) {
-                            return `#${[0,1,2].map((cJ=>Math.round(Math.min(255,Math.max(0,JJ[cJ]))).toString(16).padStart(2,"0"))).join("")}`
+                            return `#${[0,1,2].map((TB=>Math.round(Math.min(255,Math.max(0,BB[TB]))).toString(16).padStart(2,"0"))).join("")}`
                           }
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 94 · Change · +1 / -1</summary>

```diff
@@ -2644,7 +2644,7 @@
                                   children: ⟦2-char-id⟧
                                 }), (0, ⟦2-char-id⟧.jsx)("span", {
                                   className: "DocsControlValue",
-                                  children: ⟦2-char-id⟧ === ⟦2-char-id⟧ ? eJ : `${eJ}\u2013${XJ}`
+                                  children: ⟦2-char-id⟧ === ⟦2-char-id⟧ ? pB : `${pB}\u2013${lB}`
                                 })]
                               }), (0, ⟦2-char-id⟧.jsxs)("div", {
                                 className: "DocsParticleRange",
```

</details>

<details>
<summary>Hunk 95 · Change · +1 / -1</summary>

```diff
@@ -2654,7 +2654,7 @@
                                   max: ⟦2-char-id⟧,
                                   step: ⟦2-char-id⟧,
                                   value: Math.min(⟦2-char-id⟧, ⟦2-char-id⟧),
-                                  "aria-label": `Minimum ${cJ.toLowerCase()}`,
+                                  "aria-label": `Minimum ${TB.toLowerCase()}`,
                                   onChange: ⟦2-char-id⟧ => {
                                     const ⟦2-char-id⟧ = Number(⟦2-char-id⟧.target.value);
                                     ⟦2-char-id⟧(⟦2-char-id⟧, Math.max(⟦2-char-id⟧, ⟦2-char-id⟧))
```

</details>

<details>
<summary>Hunk 96 · Change · +1 / -1</summary>

```diff
@@ -2665,7 +2665,7 @@
                                   max: ⟦2-char-id⟧,
                                   step: ⟦2-char-id⟧,
                                   value: Math.min(⟦2-char-id⟧, ⟦2-char-id⟧),
-                                  "aria-label": `Maximum ${cJ.toLowerCase()}`,
+                                  "aria-label": `Maximum ${TB.toLowerCase()}`,
                                   onChange: ⟦2-char-id⟧ => {
                                     const ⟦2-char-id⟧ = Number(⟦2-char-id⟧.target.value);
                                     ⟦2-char-id⟧(Math.min(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 97 · Change · +1 / -1</summary>

```diff
@@ -2727,7 +2727,7 @@
                                 children: ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => (0, ⟦2-char-id⟧.jsx)("input", {
                                   type: "color",
                                   value: ⟦2-char-id⟧(⟦2-char-id⟧.color),
-                                  "aria-label": `Colour ${cJ+1}`,
+                                  "aria-label": `Colour ${TB+1}`,
                                   onChange: ⟦2-char-id⟧ => {
                                     const ⟦2-char-id⟧ = [...⟦2-char-id⟧];
                                     ⟦2-char-id⟧[⟦2-char-id⟧] = {
```

</details>

<details>
<summary>Hunk 98 · Change · +1 / -1</summary>

```diff
@@ -2753,7 +2753,7 @@
                                 })]
                               }), ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
                                 var ⟦2-char-id⟧;
-                                const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.maxColor) && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧.minColor;
+                                const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.maxColor) && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧.minColor;
                                 return (0, ⟦2-char-id⟧.jsxs)("div", {
                                   className: "DocsParticleStop",
                                   children: [(0, ⟦2-char-id⟧.jsxs)("span", {
```

</details>

<details>
<summary>Hunk 99 · Change · +2 / -2</summary>

```diff
@@ -2762,12 +2762,12 @@
                                   }), (0, ⟦2-char-id⟧.jsx)("span", {
                                     className: "DocsParticleStopBar",
                                     style: {
-                                      background: `linear-gradient(90deg, ${aF(JJ.minColor)}, ${aF(FJ)})`
+                                      background: `linear-gradient(90deg, ${AV(BB.minColor)}, ${AV(VB)})`
                                     }
                                   }), (0, ⟦2-char-id⟧.jsx)("input", {
                                     type: "color",
                                     value: ⟦2-char-id⟧(⟦2-char-id⟧.minColor),
-                                    "aria-label": `Minimum colour at ${Math.round(100*JJ.timeFraction)}%`,
+                                    "aria-label": `Minimum colour at ${Math.round(100*BB.timeFraction)}%`,
                                     onChange: ⟦2-char-id⟧ => {
                                       ⟦2-char-id⟧(⟦2-char-id⟧, {
                                         ...⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 100 · Change · +1 / -1</summary>

```diff
@@ -2777,7 +2777,7 @@
                                   }), (0, ⟦2-char-id⟧.jsx)("input", {
                                     type: "color",
                                     value: ⟦2-char-id⟧(⟦2-char-id⟧),
-                                    "aria-label": `Maximum colour at ${Math.round(100*JJ.timeFraction)}%`,
+                                    "aria-label": `Maximum colour at ${Math.round(100*BB.timeFraction)}%`,
                                     onChange: ⟦2-char-id⟧ => {
                                       ⟦2-char-id⟧(⟦2-char-id⟧, {
                                         ...⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 101 · Change · +2 / -2</summary>

```diff
@@ -2799,14 +2799,14 @@
                               const ⟦2-char-id⟧ = Math.round(31 * ⟦2-char-id⟧),
                                 ⟦2-char-id⟧ = Math.round(31 * ⟦2-char-id⟧),
                                 ⟦2-char-id⟧ = Math.round(31 * ⟦2-char-id⟧),
-                                ⟦2-char-id⟧ = `${UJ}|${eJ}|${XJ}`;
+                                ⟦2-char-id⟧ = `${yB}|${pB}|${lB}`;
                               let ⟦2-char-id⟧ = this.tints.get(⟦2-char-id⟧);
                               (!⟦2-char-id⟧ || ⟦2-char-id⟧.size > 2⟦2-char-id⟧) && (⟦2-char-id⟧ = new Map, this.tints.set(⟦2-char-id⟧, ⟦2-char-id⟧));
                               let ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧);
                               if (⟦2-char-id⟧) return ⟦2-char-id⟧;
                               ⟦2-char-id⟧ = document.createElement("canvas"), ⟦2-char-id⟧.width = ⟦2-char-id⟧.naturalWidth || 16, ⟦2-char-id⟧.height = ⟦2-char-id⟧.naturalHeight || 16;
                               const ⟦2-char-id⟧ = ⟦2-char-id⟧.getContext("2d");
-                              return ⟦2-char-id⟧ ? (⟦2-char-id⟧.imageSmoothingEnabled = !1, ⟦2-char-id⟧.drawImage(⟦2-char-id⟧, 0, 0, ⟦2-char-id⟧.width, ⟦2-char-id⟧.height), ⟦2-char-id⟧.globalCompositeOperation = "multiply", ⟦2-char-id⟧.fillStyle = `rgb(${UJ/31*255}, ${eJ/31*255}, ${XJ/31*255})`, ⟦2-char-id⟧.fillRect(0, 0, ⟦2-char-id⟧.width, ⟦2-char-id⟧.height), ⟦2-char-id⟧.globalCompositeOperation = "destination-in", ⟦2-char-id⟧.drawImage(⟦2-char-id⟧, 0, 0, ⟦2-char-id⟧.width, ⟦2-char-id⟧.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧
+                              return ⟦2-char-id⟧ ? (⟦2-char-id⟧.imageSmoothingEnabled = !1, ⟦2-char-id⟧.drawImage(⟦2-char-id⟧, 0, 0, ⟦2-char-id⟧.width, ⟦2-char-id⟧.height), ⟦2-char-id⟧.globalCompositeOperation = "multiply", ⟦2-char-id⟧.fillStyle = `rgb(${yB/31*255}, ${pB/31*255}, ${lB/31*255})`, ⟦2-char-id⟧.fillRect(0, 0, ⟦2-char-id⟧.width, ⟦2-char-id⟧.height), ⟦2-char-id⟧.globalCompositeOperation = "destination-in", ⟦2-char-id⟧.drawImage(⟦2-char-id⟧, 0, 0, ⟦2-char-id⟧.width, ⟦2-char-id⟧.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧
                             }
                           }
 
```

</details>

<details>
<summary>Hunk 102 · Change · +1 / -1</summary>

```diff
@@ -2844,7 +2844,7 @@
                               return ⟦2-char-id⟧.onload = () => {
                                 ⟦2-char-id⟧ || (⟦2-char-id⟧.current = ⟦2-char-id⟧)
                               }, ⟦2-char-id⟧.onerror = () => {
-                                console.warn(`Particle preview: could not load the texture ${ZJ}`)
+                                console.warn(`Particle preview: could not load the texture ${dB}`)
                               }, ⟦2-char-id⟧.src = ⟦2-char-id⟧, () => {
                                 ⟦2-char-id⟧ = !0
                               }
```

</details>

<details>
<summary>Hunk 103 · Change · +4 / -4</summary>

```diff
@@ -2933,22 +2933,22 @@
                                 ⟦2-char-id⟧.imageSmoothingEnabled = !1;
                                 for (const ⟦2-char-id⟧ of function(⟦2-char-id⟧) {
                                     switch (⟦2-char-id⟧) {
-                                      case ⟦2-char-id⟧.g.OneOne:
+                                      case ⟦2-char-id⟧.e.OneOne:
                                         return [{
                                           operation: "lighter",
                                           usesAlpha: !1
                                         }];
-                                      case ⟦2-char-id⟧.g.Add:
+                                      case ⟦2-char-id⟧.e.Add:
                                         return [{
                                           operation: "lighter",
                                           usesAlpha: !0
                                         }];
-                                      case ⟦2-char-id⟧.g.Multiply:
+                                      case ⟦2-char-id⟧.e.Multiply:
                                         return [{
                                           operation: "multiply",
                                           usesAlpha: !0
                                         }];
-                                      case ⟦2-char-id⟧.g.MultiplyAdd:
+                                      case ⟦2-char-id⟧.e.MultiplyAdd:
                                         return [{
                                           operation: "multiply",
                                           usesAlpha: !0
```

</details>

<details>
<summary>Hunk 104 · Change · +1 / -1</summary>

```diff
@@ -2970,7 +2970,7 @@
                                     }
                                     of ⟦2-char-id⟧) {
                                     const [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧ = Math.max(1, ⟦2-char-id⟧.size * ⟦2-char-id⟧.scale);
-                                    ⟦2-char-id⟧.globalAlpha = ⟦2-char-id⟧.usesAlpha ? Math.min(1, Math.max(0, ⟦2-char-id⟧)) : 1, ⟦2-char-id⟧ ? ⟦2-char-id⟧.drawImage(⟦2-char-id⟧.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.x - ⟦2-char-id⟧ / 2, ⟦2-char-id⟧.y - ⟦2-char-id⟧ / 2, ⟦2-char-id⟧, ⟦2-char-id⟧) : (⟦2-char-id⟧.fillStyle = `rgb(${255*eJ}, ${255*XJ}, ${255*AJ})`, ⟦2-char-id⟧.fillRect(⟦2-char-id⟧.x - ⟦2-char-id⟧ / 2, ⟦2-char-id⟧.y - ⟦2-char-id⟧ / 2, ⟦2-char-id⟧, ⟦2-char-id⟧))
+                                    ⟦2-char-id⟧.globalAlpha = ⟦2-char-id⟧.usesAlpha ? Math.min(1, Math.max(0, ⟦2-char-id⟧)) : 1, ⟦2-char-id⟧ ? ⟦2-char-id⟧.drawImage(⟦2-char-id⟧.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.x - ⟦2-char-id⟧ / 2, ⟦2-char-id⟧.y - ⟦2-char-id⟧ / 2, ⟦2-char-id⟧, ⟦2-char-id⟧) : (⟦2-char-id⟧.fillStyle = `rgb(${255*pB}, ${255*lB}, ${255*JB})`, ⟦2-char-id⟧.fillRect(⟦2-char-id⟧.x - ⟦2-char-id⟧ / 2, ⟦2-char-id⟧.y - ⟦2-char-id⟧ / 2, ⟦2-char-id⟧, ⟦2-char-id⟧))
                                   }
                                 }
                                 ⟦2-char-id⟧.globalCompositeOperation = "source-over", ⟦2-char-id⟧.globalAlpha = 1
```

</details>

<details>
<summary>Hunk 105 · Change · +6 / -6</summary>

```diff
@@ -2997,24 +2997,24 @@
                               ref: ⟦2-char-id⟧,
                               className: "DocsParticleCanvas",
                               role: "img",
-                              "aria-label": `Preview of a ${cJ.texture} particle effect. Drag to turn the view.`
+                              "aria-label": `Preview of a ${TB.texture} particle effect. Drag to turn the view.`
                             })
                           }
                           const ⟦2-char-id⟧ = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                             ⟦2-char-id⟧ = [{
-                              mode: ⟦2-char-id⟧.g.OneOne,
+                              mode: ⟦2-char-id⟧.e.OneOne,
                               label: "0 \xb7 OneOne (glow)"
                             }, {
-                              mode: ⟦2-char-id⟧.g.Standard,
+                              mode: ⟦2-char-id⟧.e.Standard,
                               label: "1 \xb7 Standard"
                             }, {
-                              mode: ⟦2-char-id⟧.g.Add,
+                              mode: ⟦2-char-id⟧.e.Add,
                               label: "2 \xb7 Add"
                             }, {
-                              mode: ⟦2-char-id⟧.g.Multiply,
+                              mode: ⟦2-char-id⟧.e.Multiply,
                               label: "3 \xb7 Multiply"
                             }, {
-                              mode: ⟦2-char-id⟧.g.MultiplyAdd,
+                              mode: ⟦2-char-id⟧.e.MultiplyAdd,
                               label: "4 \xb7 MultiplyAdd"
                             }],
                             ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.forwardRef)((function(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 106 · Change · +1 / -1</summary>

```diff
@@ -3029,7 +3029,7 @@
                                 [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(0),
                                 [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1),
                                 ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
-                                  const ⟦2-char-id⟧ = "example" === ⟦2-char-id⟧ ? NZ : ⟦2-char-id⟧(⟦2-char-id⟧);
+                                  const ⟦2-char-id⟧ = "example" === ⟦2-char-id⟧ ? Xd : ⟦2-char-id⟧(⟦2-char-id⟧);
                                   ⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧))
                                 };
                               (0, ⟦2-char-id⟧.useImperativeHandle)(⟦2-char-id⟧, (() => ({
```

</details>

<details>
<summary>Hunk 107 · Change · +5 / -5</summary>

```diff
@@ -3048,12 +3048,12 @@
                                   }), ⟦2-char-id⟧(null)
                                 },
                                 ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
-                                  if (null !== ⟦2-char-id⟧) return `${lZ}    presetId: "${cJ}",\n${JF}\n})`;
-                                  const ⟦2-char-id⟧ = ⟦2-char-id⟧.velocityGradients.map((⟦2-char-id⟧ => `        {\n            timeFraction: ${BZ(JJ.timeFraction)},\n            factor: ${BZ(JJ.factor)},\n            factor2: ${BZ(JJ.factor2)},\n        },`)),
-                                    ⟦2-char-id⟧ = [`    dir1: ${tZ(JJ.dir1)},`, `    dir2: ${tZ(JJ.dir2)},`, ⟦2-char-id⟧, `    texture: "${JJ.texture}",`, `    minLifeTime: ${BZ(JJ.minLifeTime)},`, `    maxLifeTime: ${BZ(JJ.maxLifeTime)},`, `    minEmitPower: ${BZ(JJ.minEmitPower)},`, `    maxEmitPower: ${BZ(JJ.maxEmitPower)},`, `    minSize: ${BZ(JJ.minSize)},`, `    maxSize: ${BZ(JJ.maxSize)},`, `    manualEmitCount: ${BZ(JJ.manualEmitCount)},`, `    gravity: ${tZ(JJ.gravity)},`, `    colorGradients: ${oZ(JJ.colorGradients,"    ")},`, `    velocityGradients: ${ZJ.length>0?`[\⟦2-char-id⟧{⟦2-char-id⟧.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${BZ(JJ.blendMode)},`];
-                                  return void 0 !== ⟦2-char-id⟧.hideDist && ⟦2-char-id⟧.push(`    hideDist: ${BZ(JJ.hideDist)},`), `${lZ}${FJ.join("\n")}\n})`
+                                  if (null !== ⟦2-char-id⟧) return `${BV}    presetId: "${TB}",\n${TV}\n})`;
+                                  const ⟦2-char-id⟧ = ⟦2-char-id⟧.velocityGradients.map((⟦2-char-id⟧ => `        {\n            timeFraction: ${bd(BB.timeFraction)},\n            factor: ${bd(BB.factor)},\n            factor2: ${bd(BB.factor2)},\n        },`)),
+                                    ⟦2-char-id⟧ = [`    dir1: ${nd(BB.dir1)},`, `    dir2: ${nd(BB.dir2)},`, ⟦2-char-id⟧, `    texture: "${BB.texture}",`, `    minLifeTime: ${bd(BB.minLifeTime)},`, `    maxLifeTime: ${bd(BB.maxLifeTime)},`, `    minEmitPower: ${bd(BB.minEmitPower)},`, `    maxEmitPower: ${bd(BB.maxEmitPower)},`, `    minSize: ${bd(BB.minSize)},`, `    maxSize: ${bd(BB.maxSize)},`, `    manualEmitCount: ${bd(BB.manualEmitCount)},`, `    gravity: ${nd(BB.gravity)},`, `    colorGradients: ${ed(BB.colorGradients,"    ")},`, `    velocityGradients: ${dB.length>0?`[\⟦2-char-id⟧{⟦2-char-id⟧.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${bd(BB.blendMode)},`];
+                                  return void 0 !== ⟦2-char-id⟧.hideDist && ⟦2-char-id⟧.push(`    hideDist: ${bd(BB.hideDist)},`), `${BV}${VB.join("\n")}\n})`
                                 }(⟦2-char-id⟧, null === ⟦2-char-id⟧ || "example" === ⟦2-char-id⟧ ? null : ⟦2-char-id⟧),
-                                ⟦2-char-id⟧ = ⟦2-char-id⟧.includes(⟦2-char-id⟧.texture) ? XJ : [...⟦2-char-id⟧, ⟦2-char-id⟧.texture];
+                                ⟦2-char-id⟧ = ⟦2-char-id⟧.includes(⟦2-char-id⟧.texture) ? lB : [...⟦2-char-id⟧, ⟦2-char-id⟧.texture];
                               return (0, ⟦2-char-id⟧.jsxs)("section", {
                                 ref: ⟦2-char-id⟧,
                                 className: "DocsPlayground DocsParticlePlayground",
```

</details>

<details>
<summary>Hunk 108 · Change · +1 / -1</summary>

```diff
@@ -3094,7 +3094,7 @@
                                     children: ⟦2-char-id⟧
                                   }, ⟦2-char-id⟧))), (0, ⟦2-char-id⟧.jsxs)("select", {
                                     className: "DocsParticleSelect",
-                                    value: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? hJ : "custom",
+                                    value: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? kB : "custom",
                                     "aria-label": "Preset",
                                     onChange: ⟦2-char-id⟧ => {
                                       ⟦2-char-id⟧(⟦2-char-id⟧.target.value)
```

</details>

<details>
<summary>Hunk 109 · Change · +1 / -1</summary>

```diff
@@ -3105,7 +3105,7 @@
                                     }), null === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("option", {
                                       value: "custom",
                                       children: "Custom"
-                                    }), ⟦2-char-id⟧.d.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsx)("option", {
+                                    }), ⟦2-char-id⟧.e.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsx)("option", {
                                       value: ⟦2-char-id⟧,
                                       children: ⟦2-char-id⟧
                                     }, ⟦2-char-id⟧)))]
```

</details>

<details>
<summary>Hunk 110 · Change · +1 / -1</summary>

```diff
@@ -3116,7 +3116,7 @@
                                     className: "DocsParticleStageWrap",
                                     children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
                                       opts: ⟦2-char-id⟧,
-                                      textureUrl: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.getParticleTextureUrl(⟦2-char-id⟧.texture)) && void 0 !== ⟦2-char-id⟧ ? ZJ : null,
+                                      textureUrl: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.getParticleTextureUrl(⟦2-char-id⟧.texture)) && void 0 !== ⟦2-char-id⟧ ? dB : null,
                                       burst: ⟦2-char-id⟧,
                                       paused: ⟦2-char-id⟧
                                     }), (0, ⟦2-char-id⟧.jsxs)("div", {
```

</details>

<details>
<summary>Hunk 111 · Change · +1 / -1</summary>

```diff
@@ -3162,7 +3162,7 @@
                                         className: "DocsParticleTextures",
                                         children: ⟦2-char-id⟧.map((⟦2-char-id⟧ => {
                                           var ⟦2-char-id⟧;
-                                          const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.getParticleTextureUrl(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? cJ : null;
+                                          const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.getParticleTextureUrl(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? TB : null;
                                           return (0, ⟦2-char-id⟧.jsx)("button", {
                                             type: "button",
                                             className: ⟦2-char-id⟧()("DocsParticleTexture", {
```

</details>

<details>
<summary>Hunk 112 · Change · +2 / -2</summary>

```diff
@@ -3240,11 +3240,11 @@
                                       min: -40,
                                       max: 40,
                                       step: 1,
-                                      value: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.gravity[1]) && void 0 !== ⟦2-char-id⟧ ? UJ : 0,
+                                      value: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.gravity[1]) && void 0 !== ⟦2-char-id⟧ ? yB : 0,
                                       onChange: ⟦2-char-id⟧ => {
                                         var ⟦2-char-id⟧, ⟦2-char-id⟧;
                                         ⟦2-char-id⟧({
-                                          gravity: [null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.gravity[0]) && void 0 !== ⟦2-char-id⟧ ? cJ : 0, ⟦2-char-id⟧, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.gravity[2]) && void 0 !== ⟦2-char-id⟧ ? ZJ : 0]
+                                          gravity: [null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.gravity[0]) && void 0 !== ⟦2-char-id⟧ ? TB : 0, ⟦2-char-id⟧, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.gravity[2]) && void 0 !== ⟦2-char-id⟧ ? dB : 0]
                                         })
                                       }
                                     }), (0, ⟦2-char-id⟧.jsxs)("div", {
```

</details>

<details>
<summary>Hunk 113 · Change · +2 / -2</summary>

```diff
@@ -3289,8 +3289,8 @@
                                 })]
                               })
                             }));
-                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(3889),
-                            ⟦2-char-id⟧ = ⟦2-char-id⟧(1675);
+                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(3888),
+                            ⟦2-char-id⟧ = ⟦2-char-id⟧(1657);
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
                             return ⟦2-char-id⟧ ? ⟦2-char-id⟧.c.includes(⟦2-char-id⟧) ? ⟦2-char-id⟧.getIngameIconUrl(⟦2-char-id⟧) : ⟦2-char-id⟧.getItemIconUrl(⟦2-char-id⟧) : null
```

</details>

<details>
<summary>Hunk 114 · Change · +2 / -2</summary>

```diff
@@ -3303,8 +3303,8 @@
                               assets: ⟦2-char-id⟧
                             } = ⟦2-char-id⟧;
                             const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.icon),
-                              ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.style) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.fontSize) && void 0 !== ⟦2-char-id⟧ ? cJ : "1.8em",
-                              ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.Lb)(⟦2-char-id⟧.style);
+                              ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.style) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.fontSize) && void 0 !== ⟦2-char-id⟧ ? TB : "1.8em",
+                              ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.Yb)(⟦2-char-id⟧.style);
                             return (0, ⟦2-char-id⟧.jsxs)("span", {
                               className: ⟦2-char-id⟧()("DocsBloxdTextIcon", {
                                 Missing: !⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 115 · Change · +3 / -3</summary>

```diff
@@ -3314,13 +3314,13 @@
                                 height: ⟦2-char-id⟧,
                                 opacity: null === (⟦2-char-id⟧ = ⟦2-char-id⟧.style) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.opacity
                               },
-                              title: ⟦2-char-id⟧ ? void 0 : `No Bloxd icon, item or block is called "${UJ.icon}"`,
+                              title: ⟦2-char-id⟧ ? void 0 : `No Bloxd icon, item or block is called "${yB.icon}"`,
                               children: [⟦2-char-id⟧ && ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("span", {
                                 className: "DocsBloxdTextIconTint",
                                 style: {
                                   background: ⟦2-char-id⟧,
-                                  maskImage: `url("${AJ}")`,
-                                  WebkitMaskImage: `url("${AJ}")`
+                                  maskImage: `url("${JB}")`,
+                                  WebkitMaskImage: `url("${JB}")`
                                 }
                               }), ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.jsx)("img", {
                                 src: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 116 · Change · +3 / -3</summary>

```diff
@@ -3343,15 +3343,15 @@
                               ⟦2-char-id⟧ = [];
                             let ⟦2-char-id⟧ = [];
                             const ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
-                              ⟦2-char-id⟧.length > 0 && (⟦2-char-id⟧.push((0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                              ⟦2-char-id⟧.length > 0 && (⟦2-char-id⟧.push((0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                                 text: ⟦2-char-id⟧
-                              }, `run-${JJ}`)), ⟦2-char-id⟧ = [])
+                              }, `run-${BB}`)), ⟦2-char-id⟧ = [])
                             };
                             return ⟦2-char-id⟧.forEach(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
                               "icon" !== ⟦2-char-id⟧(⟦2-char-id⟧) || ⟦2-char-id⟧(⟦2-char-id⟧.icon) ? ⟦2-char-id⟧.push(⟦2-char-id⟧) : (⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
                                 part: ⟦2-char-id⟧,
                                 assets: ⟦2-char-id⟧
-                              }, `icon-${cJ}`)))
+                              }, `icon-${TB}`)))
                             })), ⟦2-char-id⟧(⟦2-char-id⟧.length), (0, ⟦2-char-id⟧.jsx)("div", {
                               className: ⟦2-char-id⟧()("DocsStyledTextPreview", ⟦2-char-id⟧),
                               children: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 117 · Change · +1 / -1</summary>

```diff
@@ -3364,7 +3364,7 @@
                             if (⟦2-char-id⟧ ??= document.createElement("canvas").getContext("2d"), !⟦2-char-id⟧) return "#000000";
                             ⟦2-char-id⟧.fillStyle = "#000000", ⟦2-char-id⟧.fillStyle = ⟦2-char-id⟧;
                             const ⟦2-char-id⟧ = ⟦2-char-id⟧.fillStyle;
-                            return ⟦2-char-id⟧.startsWith("#") ? cJ : "#000000"
+                            return ⟦2-char-id⟧.startsWith("#") ? TB : "#000000"
                           }
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 118 · Change · +1 / -1</summary>

```diff
@@ -3378,7 +3378,7 @@
                               children: [(0, ⟦2-char-id⟧.jsx)("input", {
                                 type: "color",
                                 value: ⟦2-char-id⟧(⟦2-char-id⟧),
-                                "aria-label": `${ZJ} picker`,
+                                "aria-label": `${dB} picker`,
                                 onChange: ⟦2-char-id⟧ => {
                                   ⟦2-char-id⟧(⟦2-char-id⟧.target.value)
                                 }
```

</details>

<details>
<summary>Hunk 119 · Change · +1 / -1</summary>

```diff
@@ -3434,7 +3434,7 @@
                                     onClick: () => {
                                       ⟦2-char-id⟧(⟦2-char-id⟧)
                                     },
-                                    children: "bloxd" === ⟦2-char-id⟧ ? `Bloxd icons (${qU.c.length})` : `Font Awesome (${ZJ.length})`
+                                    children: "bloxd" === ⟦2-char-id⟧ ? `Bloxd icons (${gy.c.length})` : `Font Awesome (${dB.length})`
                                   }, ⟦2-char-id⟧))), (0, ⟦2-char-id⟧.jsx)("input", {
                                     type: "search",
                                     value: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 120 · Change · +1 / -1</summary>

```diff
@@ -3461,7 +3461,7 @@
                                     onClick: () => {
                                       ⟦2-char-id⟧(⟦2-char-id⟧)
                                     },
-                                    children: "fontAwesome" === ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+                                    children: "fontAwesome" === ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                                       name: ⟦2-char-id⟧
                                     }) : ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.jsx)("img", {
                                       src: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 121 · Change · +2 / -2</summary>

```diff
@@ -3488,11 +3488,11 @@
                             const {
                               field: ⟦2-char-id⟧,
                               label: ⟦2-char-id⟧
-                            } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ => "" !== ⟦2-char-id⟧ || ⟦2-char-id⟧.isRequired ? JJ : void 0;
+                            } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ => "" !== ⟦2-char-id⟧ || ⟦2-char-id⟧.isRequired ? BB : void 0;
                             switch (⟦2-char-id⟧.kind) {
                               case "text":
                                 return ⟦2-char-id⟧.multiline ? (0, ⟦2-char-id⟧.jsx)("textarea", {
-                                  value: String(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? ZJ : ""),
+                                  value: String(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? dB : ""),
                                   rows: 2,
                                   "aria-label": ⟦2-char-id⟧,
                                   onChange: ⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 122 · Change · +1 / -1</summary>

```diff
@@ -3500,7 +3500,7 @@
                                   }
                                 }) : (0, ⟦2-char-id⟧.jsx)("input", {
                                   type: "text",
-                                  value: String(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? ZJ : ""),
+                                  value: String(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? dB : ""),
                                   "aria-label": ⟦2-char-id⟧,
                                   onChange: ⟦2-char-id⟧ => {
                                     ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧.target.value))
```

</details>

<details>
<summary>Hunk 123 · Change · +1 / -1</summary>

```diff
@@ -3509,7 +3509,7 @@
                               case "size":
                                 return (0, ⟦2-char-id⟧.jsx)("input", {
                                   type: "text",
-                                  value: String(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? ZJ : ""),
+                                  value: String(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? dB : ""),
                                   placeholder: ⟦2-char-id⟧.defaultText,
                                   list: "DocsTextSizeSuggestions",
                                   "aria-label": ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 124 · Change · +3 / -3</summary>

```diff
@@ -3520,16 +3520,16 @@
                                 });
                               case "colour":
                                 return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
-                                  value: String(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? ZJ : ""),
+                                  value: String(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? dB : ""),
                                   label: ⟦2-char-id⟧,
                                   onChange: ⟦2-char-id⟧ => {
                                     ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧))
                                   }
                                 });
                               case "colours": {
-                                const ⟦2-char-id⟧ = Array.isArray(⟦2-char-id⟧) ? ZJ : [],
+                                const ⟦2-char-id⟧ = Array.isArray(⟦2-char-id⟧) ? dB : [],
                                   ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
-                                    ⟦2-char-id⟧(⟦2-char-id⟧.length > 0 ? JJ : void 0)
+                                    ⟦2-char-id⟧(⟦2-char-id⟧.length > 0 ? BB : void 0)
                                   };
                                 return (0, ⟦2-char-id⟧.jsxs)("div", {
                                   className: "DocsColourList",
```

</details>

<details>
<summary>Hunk 125 · Change · +3 / -3</summary>

```diff
@@ -3537,14 +3537,14 @@
                                     className: "DocsColourListRow",
                                     children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
                                       value: ⟦2-char-id⟧,
-                                      label: `${XJ} ${FJ+1}`,
+                                      label: `${lB} ${VB+1}`,
                                       onChange: ⟦2-char-id⟧ => {
-                                        ⟦2-char-id⟧(⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ === ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧)))
+                                        ⟦2-char-id⟧(⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ === ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧)))
                                       }
                                     }), (0, ⟦2-char-id⟧.jsx)("button", {
                                       type: "button",
                                       className: "DocsTextIconButton",
-                                      "aria-label": `Remove colour ${FJ+1}`,
+                                      "aria-label": `Remove colour ${VB+1}`,
                                       onClick: () => {
                                         ⟦2-char-id⟧(⟦2-char-id⟧.filter(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ !== ⟦2-char-id⟧)))
                                       },
```

</details>

<details>
<summary>Hunk 126 · Change · +1 / -1</summary>

```diff
@@ -3557,7 +3557,7 @@
                                     className: "DocsTextAddButton",
                                     onClick: () => {
                                       var ⟦2-char-id⟧;
-                                      ⟦2-char-id⟧([...⟦2-char-id⟧, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.at(-1)) && void 0 !== ⟦2-char-id⟧ ? ZJ : "#ffffff"])
+                                      ⟦2-char-id⟧([...⟦2-char-id⟧, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.at(-1)) && void 0 !== ⟦2-char-id⟧ ? dB : "#ffffff"])
                                     },
                                     children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
                                       name: "plus"
```

</details>

<details>
<summary>Hunk 127 · Change · +1 / -1</summary>

```diff
@@ -3567,7 +3567,7 @@
                               }
                               case "fraction": {
                                 var ⟦2-char-id⟧;
-                                const ⟦2-char-id⟧ = "number" === typeof ⟦2-char-id⟧ ? ZJ : Number(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.defaultText) && void 0 !== ⟦2-char-id⟧ ? qJ : 0);
+                                const ⟦2-char-id⟧ = "number" === typeof ⟦2-char-id⟧ ? dB : Number(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.defaultText) && void 0 !== ⟦2-char-id⟧ ? YB : 0);
                                 return (0, ⟦2-char-id⟧.jsxs)("span", {
                                   className: "DocsFractionInput",
                                   children: [(0, ⟦2-char-id⟧.jsx)("input", {
```

</details>

<details>
<summary>Hunk 128 · Change · +1 / -1</summary>

```diff
@@ -3587,7 +3587,7 @@
                               }
                               case "choice":
                                 return (0, ⟦2-char-id⟧.jsxs)("select", {
-                                  value: String(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? ZJ : ""),
+                                  value: String(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? dB : ""),
                                   "aria-label": ⟦2-char-id⟧,
                                   onChange: ⟦2-char-id⟧ => {
                                     ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧.target.value))
```

</details>

<details>
<summary>Hunk 129 · Change · +1 / -1</summary>

```diff
@@ -3602,7 +3602,7 @@
                                 });
                               case "icon":
                                 return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
-                                  value: String(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? ZJ : ""),
+                                  value: String(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? dB : ""),
                                   fontAwesomeIcons: ⟦2-char-id⟧,
                                   onChange: ⟦2-char-id⟧
                                 })
```

</details>

<details>
<summary>Hunk 130 · Change · +1 / -1</summary>

```diff
@@ -3616,7 +3616,7 @@
                             } catch (⟦2-char-id⟧) {
                               return {
                                 part: null,
-                                error: `Not valid JSON yet: ${ZJ.message}`
+                                error: `Not valid JSON yet: ${dB.message}`
                               }
                             }
                             return ⟦2-char-id⟧(⟦2-char-id⟧) ? {
```

</details>

<details>
<summary>Hunk 131 · Change · +1 / -1</summary>

```diff
@@ -3634,7 +3634,7 @@
                               index: ⟦2-char-id⟧,
                               fontAwesomeIcons: ⟦2-char-id⟧,
                               onChange: ⟦2-char-id⟧,
-                              jK: ⟦2-char-id⟧,
+                              Kw: ⟦2-char-id⟧,
                               onClose: ⟦2-char-id⟧
                             } = ⟦2-char-id⟧;
                             const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useContext)(⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 132 · Change · +1 / -1</summary>

```diff
@@ -3657,7 +3657,7 @@
                                 className: "DocsTextDialog",
                                 role: "dialog",
                                 "aria-modal": "true",
-                                "aria-label": `Edit part ${ZJ+1}: ${Nc[DJ]}`,
+                                "aria-label": `Edit part ${dB+1}: ${ZT[LB]}`,
                                 tabIndex: -1,
                                 onKeyDown: ⟦2-char-id⟧ => {
                                   "Escape" === ⟦2-char-id⟧.key ? (⟦2-char-id⟧.stopPropagation(), ⟦2-char-id⟧()) : "Tab" === ⟦2-char-id⟧.key && ⟦2-char-id⟧.current && function(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 133 · Change · +1 / -1</summary>

```diff
@@ -3725,7 +3725,7 @@
                                           type: "button",
                                           className: "DocsTextResetButton",
                                           disabled: ⟦2-char-id⟧,
-                                          "aria-label": `Reset ${JJ.label.toLowerCase()} to default`,
+                                          "aria-label": `Reset ${BB.label.toLowerCase()} to default`,
                                           onClick: () => {
                                             ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.path))
                                           },
```

</details>

<details>
<summary>Hunk 134 · Change · +3 / -3</summary>

```diff
@@ -3827,17 +3827,17 @@
                               if (!⟦2-char-id⟧) return;
                               const ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
                                   var ⟦2-char-id⟧;
-                                  return null === (⟦2-char-id⟧ = ⟦2-char-id⟧.current) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.querySelector(`[data-focus-key="${JJ}"]`)
+                                  return null === (⟦2-char-id⟧ = ⟦2-char-id⟧.current) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.querySelector(`[data-focus-key="${BB}"]`)
                                 },
                                 ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.key);
-                              null === (⟦2-char-id⟧ = ⟦2-char-id⟧ && !⟦2-char-id⟧.disabled ? ZJ : ⟦2-char-id⟧(⟦2-char-id⟧.fallback)) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.focus(), ⟦2-char-id⟧(null)
+                              null === (⟦2-char-id⟧ = ⟦2-char-id⟧ && !⟦2-char-id⟧.disabled ? dB : ⟦2-char-id⟧(⟦2-char-id⟧.fallback)) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.focus(), ⟦2-char-id⟧(null)
                             }), [⟦2-char-id⟧]);
                             const ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
                                 ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧)), ⟦2-char-id⟧(null)
                               },
                               ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
                                 ⟦2-char-id⟧(⟦2-char-id⟧.filter(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ !== ⟦2-char-id⟧))), ⟦2-char-id⟧({
-                                  key: `edit-${Math.min(JJ,ZJ.length-2)}`,
+                                  key: `edit-${Math.min(BB,dB.length-2)}`,
                                   fallback: "add"
                                 })
                               },
```

</details>

<details>
<summary>Hunk 135 · Change · +2 / -2</summary>

```diff
@@ -3846,8 +3846,8 @@
                                   [⟦2-char-id⟧] = ⟦2-char-id⟧.splice(⟦2-char-id⟧, 1);
                                 ⟦2-char-id⟧.splice(⟦2-char-id⟧ + ⟦2-char-id⟧, 0, ⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧);
                                 ⟦2-char-id⟧({
-                                  key: `${cJ<0?"up":"down"}-${JJ+cJ}`,
-                                  fallback: `edit-${JJ+cJ}`
+                                  key: `${TB<0?"up":"down"}-${BB+TB}`,
+                                  fallback: `edit-${BB+TB}`
                                 })
                               };
                             return (0, ⟦2-char-id⟧.jsxs)("section", {
```

</details>

<details>
<summary>Hunk 136 · Change · +2 / -2</summary>

```diff
@@ -3896,8 +3896,8 @@
                                         children: [(0, ⟦2-char-id⟧.jsxs)("button", {
                                           type: "button",
                                           className: "DocsTextPartMain",
-                                          "data-focus-key": `edit-${cJ}`,
-                                          "aria-label": `Edit part ${cJ+1}, ${Nc[FJ]}`,
+                                          "data-focus-key": `edit-${TB}`,
+                                          "aria-label": `Edit part ${TB+1}, ${ZT[VB]}`,
                                           onClick: () => {
                                             ⟦2-char-id⟧(⟦2-char-id⟧)
                                           },
```

</details>

<details>
<summary>Hunk 137 · Change · +2 / -2</summary>

```diff
@@ -3916,8 +3916,8 @@
                                           children: [(0, ⟦2-char-id⟧.jsx)("button", {
                                             type: "button",
                                             className: "DocsTextIconButton",
-                                            "aria-label": `Move part ${cJ+1} up`,
-                                            "data-focus-key": `up-${cJ}`,
+                                            "aria-label": `Move part ${TB+1} up`,
+                                            "data-focus-key": `up-${TB}`,
                                             disabled: 0 === ⟦2-char-id⟧,
                                             onClick: () => {
                                               ⟦2-char-id⟧(⟦2-char-id⟧, -1)
```

</details>

<details>
<summary>Hunk 138 · Change · +2 / -2</summary>

```diff
@@ -3928,8 +3928,8 @@
                                           }), (0, ⟦2-char-id⟧.jsx)("button", {
                                             type: "button",
                                             className: "DocsTextIconButton",
-                                            "aria-label": `Move part ${cJ+1} down`,
-                                            "data-focus-key": `down-${cJ}`,
+                                            "aria-label": `Move part ${TB+1} down`,
+                                            "data-focus-key": `down-${TB}`,
                                             disabled: ⟦2-char-id⟧ === ⟦2-char-id⟧.length - 1,
                                             onClick: () => {
                                               ⟦2-char-id⟧(⟦2-char-id⟧, 1)
```

</details>

<details>
<summary>Hunk 139 · Change · +1 / -1</summary>

```diff
@@ -3940,7 +3940,7 @@
                                           }), (0, ⟦2-char-id⟧.jsx)("button", {
                                             type: "button",
                                             className: "DocsTextIconButton",
-                                            "aria-label": `Remove part ${cJ+1}`,
+                                            "aria-label": `Remove part ${TB+1}`,
                                             onClick: () => {
                                               ⟦2-char-id⟧(⟦2-char-id⟧)
                                             },
```

</details>

<details>
<summary>Hunk 140 · Change · +1 / -1</summary>

```diff
@@ -4024,7 +4024,7 @@
                                     })]
                                   }) : (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
                                     lang: "js",
-                                    code: `api.sendMessage(playerId, ${QJ})`
+                                    code: `api.sendMessage(playerId, ${NB})`
                                   })]
                                 })]
                               }), null !== ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧.length && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
```

</details>

<details>
<summary>Hunk 141 · Change · +7 / -7</summary>

```diff
@@ -4033,25 +4033,25 @@
                                 fontAwesomeIcons: ⟦2-char-id⟧,
                                 onChange: ⟦2-char-id⟧ => {
                                   ((⟦2-char-id⟧, ⟦2-char-id⟧) => {
-                                    ⟦2-char-id⟧(⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ === ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧)))
+                                    ⟦2-char-id⟧(⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ === ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧)))
                                   })(⟦2-char-id⟧, ⟦2-char-id⟧)
                                 },
-                                jK: () => {
+                                Kw: () => {
                                   ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧(null)
                                 },
                                 onClose: () => {
                                   ⟦2-char-id⟧(null), ⟦2-char-id⟧({
-                                    key: `edit-${DJ}`,
+                                    key: `edit-${LB}`,
                                     fallback: "add"
                                   })
                                 }
                               })]
                             })
                           }
-                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(4245),
-                            ⟦2-char-id⟧ = ⟦2-char-id⟧(4225),
-                            ⟦2-char-id⟧ = ⟦2-char-id⟧(4242),
-                            ⟦2-char-id⟧ = ⟦2-char-id⟧(4254);
+                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(4247),
+                            ⟦2-char-id⟧ = ⟦2-char-id⟧(4226),
+                            ⟦2-char-id⟧ = ⟦2-char-id⟧(4240),
+                            ⟦2-char-id⟧ = ⟦2-char-id⟧(4252);
                           const ⟦2-char-id⟧ = 40,
                             ⟦2-char-id⟧ = 800,
                             ⟦2-char-id⟧ = 150,
```

</details>

<details>
<summary>Hunk 142 · Change · +5 / -5</summary>

```diff
@@ -4067,11 +4067,11 @@
                           }
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧) {
-                            return `${JJ} ms`
-                          }
-
-                          function ⟦2-char-id⟧(⟦2-char-id⟧) {
-                            return `${JJ} st`
+                            return `${BB} ms`
+                          }
+
+                          function ⟦2-char-id⟧(⟦2-char-id⟧) {
+                            return `${BB} st`
                           }
                           const ⟦2-char-id⟧ = [{
                             key: "variationSemitones",
```

</details>

<details>
<summary>Hunk 143 · Change · +1 / -1</summary>

```diff
@@ -4096,7 +4096,7 @@
                               synth: ⟦2-char-id⟧,
                               onChange: ⟦2-char-id⟧
                             } = ⟦2-char-id⟧;
-                            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧);
+                            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧);
                             return (0, ⟦2-char-id⟧.jsxs)("div", {
                               className: "DocsVoiceControls",
                               children: [(0, ⟦2-char-id⟧.jsxs)("div", {
```

</details>

<details>
<summary>Hunk 144 · Change · +1 / -1</summary>

```diff
@@ -4133,7 +4133,7 @@
                                   max: ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧),
                                   step: .1,
                                   value: ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.pitchHz),
-                                  format: () => `${cJ.pitchHz} Hz`,
+                                  format: () => `${TB.pitchHz} Hz`,
                                   onChange: ⟦2-char-id⟧ => {
                                     ⟦2-char-id⟧({
                                       pitchHz: ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 145 · Change · +1 / -1</summary>

```diff
@@ -4223,7 +4223,7 @@
                                     checked: null !== ⟦2-char-id⟧.lowpassHz,
                                     onChange: ⟦2-char-id⟧ => {
                                       ⟦2-char-id⟧({
-                                        lowpassHz: ⟦2-char-id⟧.target.checked ? gU : null
+                                        lowpassHz: ⟦2-char-id⟧.target.checked ? cy : null
                                       })
                                     }
                                   }), (0, ⟦2-char-id⟧.jsx)("span", {
```

</details>

<details>
<summary>Hunk 146 · Change · +1 / -1</summary>

```diff
@@ -4235,7 +4235,7 @@
                                   max: ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧),
                                   step: .1,
                                   value: ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.lowpassHz),
-                                  format: () => `${cJ.lowpassHz} Hz`,
+                                  format: () => `${TB.lowpassHz} Hz`,
                                   onChange: ⟦2-char-id⟧ => {
                                     ⟦2-char-id⟧({
                                       lowpassHz: ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 147 · Change · +8 / -8</summary>

```diff
@@ -4273,36 +4273,36 @@
                               })]
                             })
                           }
-                          const ⟦2-char-id⟧ = Object.keys(⟦2-char-id⟧.f),
+                          const ⟦2-char-id⟧ = Object.keys(⟦2-char-id⟧.e),
                             ⟦2-char-id⟧ = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧) {
                             var ⟦2-char-id⟧;
-                            const ⟦2-char-id⟧ = JSON.stringify((0, ⟦2-char-id⟧.h)(⟦2-char-id⟧));
-                            return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => JSON.stringify((0, ⟦2-char-id⟧.h)(⟦2-char-id⟧.f[⟦2-char-id⟧])) === ⟦2-char-id⟧))) && void 0 !== ⟦2-char-id⟧ ? cJ : null
+                            const ⟦2-char-id⟧ = JSON.stringify((0, ⟦2-char-id⟧.i)(⟦2-char-id⟧));
+                            return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => JSON.stringify((0, ⟦2-char-id⟧.i)(⟦2-char-id⟧.e[⟦2-char-id⟧])) === ⟦2-char-id⟧))) && void 0 !== ⟦2-char-id⟧ ? TB : null
                           }
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧) {
                             let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                             if ("object" !== typeof ⟦2-char-id⟧ || null === ⟦2-char-id⟧) return JSON.stringify(⟦2-char-id⟧);
-                            return `{\n${Object.entries(JJ).map((JJ=>{let[ZJ,FJ]=JJ;return`${⟦2-char-id⟧}    ${⟦2-char-id⟧}: ${⟦2-char-id⟧(⟦2-char-id⟧,`${cJ}    `)},`})).join("\n")}\n${cJ}}`
+                            return `{\n${Object.entries(BB).map((BB=>{let[dB,VB]=BB;return`${⟦2-char-id⟧}    ${⟦2-char-id⟧}: ${⟦2-char-id⟧(⟦2-char-id⟧,`${TB}    `)},`})).join("\n")}\n${TB}}`
                           }
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
                             const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧),
-                              ⟦2-char-id⟧ = [`    line: ${JSON.stringify(cJ)},`];
-                            return ⟦2-char-id⟧ && ⟦2-char-id⟧.push(`    speakerName: ${JSON.stringify(ZJ)},`), ⟦2-char-id⟧.push("    voice,"), `const voice = ${FJ?JSON.stringify(FJ):CU((0,KU.h)(JJ))}\n\napi.setClientOption(playerId, "dialogue", {\n${UJ.join("\n")}\n})`
+                              ⟦2-char-id⟧ = [`    line: ${JSON.stringify(TB)},`];
+                            return ⟦2-char-id⟧ && ⟦2-char-id⟧.push(`    speakerName: ${JSON.stringify(dB)},`), ⟦2-char-id⟧.push("    voice,"), `const voice = ${VB?JSON.stringify(VB):Cy((0,My.i)(BB))}\n\napi.setClientOption(playerId, "dialogue", {\n${yB.join("\n")}\n})`
                           }
                           const ⟦2-char-id⟧ = 400,
                             ⟦2-char-id⟧ = 90;
                           let ⟦2-char-id⟧ = null;
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-                            return ⟦2-char-id⟧ ??= new AudioContext, ⟦2-char-id⟧.resume(), (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧, ⟦2-char-id⟧.destination, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, (() => {}))
+                            return ⟦2-char-id⟧ ??= new AudioContext, ⟦2-char-id⟧.resume(), (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧, ⟦2-char-id⟧.destination, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, (() => {}))
                           }
 
                           function ⟦2-char-id⟧() {
-                            const [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(⟦2-char-id⟧.f.regular), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(⟦2-char-id⟧[0]), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)("Innkeeper"), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(0), ⟦2-char-id⟧ = ⟦2-char-id⟧((⟦2-char-id⟧ => ⟦2-char-id⟧.volume)), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(0), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(0), ⟦2-char-id⟧ = () => {
+                            const [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(⟦2-char-id⟧.e.regular), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(⟦2-char-id⟧[0]), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)("Innkeeper"), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(0), ⟦2-char-id⟧ = ⟦2-char-id⟧((⟦2-char-id⟧ => ⟦2-char-id⟧.volume)), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(0), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(0), ⟦2-char-id⟧ = () => {
                               var ⟦2-char-id⟧;
                               null === (⟦2-char-id⟧ = ⟦2-char-id⟧.current) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.call(⟦2-char-id⟧), ⟦2-char-id⟧.current = null
                             };
```

</details>

<details>
<summary>Hunk 148 · Change · +1 / -1</summary>

```diff
@@ -4354,7 +4354,7 @@
                                   "aria-pressed": ⟦2-char-id⟧ === ⟦2-char-id⟧,
                                   onClick: () => {
                                     (⟦2-char-id⟧ => {
-                                      const ⟦2-char-id⟧ = ⟦2-char-id⟧.f[⟦2-char-id⟧];
+                                      const ⟦2-char-id⟧ = ⟦2-char-id⟧.e[⟦2-char-id⟧];
                                       ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧({
                                         ...⟦2-char-id⟧,
                                         voice: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 149 · Change · +1 / -1</summary>

```diff
@@ -4372,7 +4372,7 @@
                                   className: "DocsVoiceScene",
                                   children: [(0, ⟦2-char-id⟧.jsx)("div", {
                                     className: "DocsVoiceStage",
-                                    children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+                                    children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                                       display: ⟦2-char-id⟧
                                     }, ⟦2-char-id⟧)
                                   }), (0, ⟦2-char-id⟧.jsxs)("form", {
```

</details>

<details>
<summary>Hunk 150 · Change · +1 / -1</summary>

```diff
@@ -4440,7 +4440,7 @@
                                     if (⟦2-char-id⟧ - ⟦2-char-id⟧.current >= ⟦2-char-id⟧) {
                                       ⟦2-char-id⟧.current = ⟦2-char-id⟧, ⟦2-char-id⟧();
                                       const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧).plan.blips[0];
-                                      ⟦2-char-id⟧ && (⟦2-char-id⟧.current = ⟦2-char-id⟧((0, ⟦2-char-id⟧.h)(⟦2-char-id⟧), [{
+                                      ⟦2-char-id⟧ && (⟦2-char-id⟧.current = ⟦2-char-id⟧((0, ⟦2-char-id⟧.i)(⟦2-char-id⟧), [{
                                         ...⟦2-char-id⟧,
                                         atMs: 0
                                       }], ⟦2-char-id⟧))
```

</details>

<details>
<summary>Hunk 151 · Change · +6 / -6</summary>

```diff
@@ -4456,24 +4456,24 @@
                               })]
                             })
                           }
-                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(4275);
+                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(4265);
                           const ⟦2-char-id⟧ = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                             ⟦2-char-id⟧ = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                             ⟦2-char-id⟧ = [
-                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${lU}`, "g"), ⟦2-char-id⟧.m],
+                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${Bp}`, "g"), ⟦2-char-id⟧.l],
                               [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
-                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, ⟦2-char-id⟧.m]
+                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, ⟦2-char-id⟧.l]
                             ];
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧) {
-                            return `${JJ.pageId}#${JJ.anchor}`
+                            return `${BB.pageId}#${BB.anchor}`
                           }
                           let ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧) {
-                            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧),
+                            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧),
                               ⟦2-char-id⟧ = new Set;
-                            for (const [, , ⟦2-char-id⟧] of ⟦2-char-id⟧.matchAll(⟦2-char-id⟧.e)) {
+                            for (const [, , ⟦2-char-id⟧] of ⟦2-char-id⟧.matchAll(⟦2-char-id⟧.b)) {
                               const ⟦2-char-id⟧ = ⟦2-char-id⟧.startsWith("#") ? ⟦2-char-id⟧(⟦2-char-id⟧) : null,
                                 ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧({
                                   pageId: ⟦2-char-id⟧.page.id,
```

</details>

<details>
<summary>Hunk 152 · Change · +1 / -1</summary>

```diff
@@ -4498,7 +4498,7 @@
                               }(⟦2-char-id⟧);
                             for (const [, ⟦2-char-id⟧] of ⟦2-char-id⟧.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) ⟦2-char-id⟧.add(⟦2-char-id⟧);
                             for (const [⟦2-char-id⟧, ⟦2-char-id⟧] of ⟦2-char-id⟧)
-                              for (const [, ⟦2-char-id⟧] of(0, ⟦2-char-id⟧.h)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)) ⟦2-char-id⟧.has(⟦2-char-id⟧) && ⟦2-char-id⟧.add(⟦2-char-id⟧);
+                              for (const [, ⟦2-char-id⟧] of(0, ⟦2-char-id⟧.d)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)) ⟦2-char-id⟧.has(⟦2-char-id⟧) && ⟦2-char-id⟧.add(⟦2-char-id⟧);
                             return ⟦2-char-id⟧
                           }
 
```

</details>

<details>
<summary>Hunk 153 · Change · +1 / -1</summary>

```diff
@@ -4514,7 +4514,7 @@
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
                             const ⟦2-char-id⟧ = ⟦2-char-id⟧.params.map(⟦2-char-id⟧).join(", ");
-                            return ⟦2-char-id⟧ ? `${JJ.name} = (${ZJ}) => {\n\t\n}` : `api.${JJ.name}(${ZJ})`
+                            return ⟦2-char-id⟧ ? `${BB.name} = (${dB}) => {\n\t\n}` : `api.${BB.name}(${dB})`
                           }
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 154 · Change · +1 / -1</summary>

```diff
@@ -4551,7 +4551,7 @@
                                     children: ", "
                                   }), (0, ⟦2-char-id⟧.jsx)("a", {
                                     className: "DocsSignatureParam",
-                                    href: `#${cJ.name}-${je(JJ)}`,
+                                    href: `#${TB.name}-${op(BB)}`,
                                     children: ⟦2-char-id⟧.name
                                   })]
                                 }, ⟦2-char-id⟧.name))), (0, ⟦2-char-id⟧.jsx)("span", {
```

</details>

<details>
<summary>Hunk 155 · Change · +2 / -2</summary>

```diff
@@ -4584,10 +4584,10 @@
                               children: [(0, ⟦2-char-id⟧.jsx)("span", {
                                 className: "DocsCardReferencesTitle",
                                 children: ⟦2-char-id⟧
-                              }), ⟦2-char-id⟧.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+                              }), ⟦2-char-id⟧.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
                                 to: ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧.pageId), ⟦2-char-id⟧.anchor),
                                 children: ⟦2-char-id⟧.label
-                              }, `${JJ.pageId}#${JJ.anchor}`)))]
+                              }, `${BB.pageId}#${BB.anchor}`)))]
                             })
                           }
 
```

</details>

<details>
<summary>Hunk 156 · Change · +5 / -5</summary>

```diff
@@ -4607,26 +4607,26 @@
                                   const ⟦2-char-id⟧ = new Set(⟦2-char-id⟧.filter((⟦2-char-id⟧ => "callbacks" === ⟦2-char-id⟧.layout)).flatMap((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧).sections.map((⟦2-char-id⟧ => ⟦2-char-id⟧.heading.text)))));
                                   for (const ⟦2-char-id⟧ of ⟦2-char-id⟧)
                                     if ("article" === ⟦2-char-id⟧.layout || "snippets" === ⟦2-char-id⟧.layout)
-                                      for (const ⟦2-char-id⟧ of (0, ⟦2-char-id⟧.y)(⟦2-char-id⟧(⟦2-char-id⟧)))
+                                      for (const ⟦2-char-id⟧ of (0, ⟦2-char-id⟧.n)(⟦2-char-id⟧(⟦2-char-id⟧)))
                                         for (const {
                                             code: ⟦2-char-id⟧
                                           }
-                                          of(0, ⟦2-char-id⟧.l)(⟦2-char-id⟧.blocks))
+                                          of(0, ⟦2-char-id⟧.i)(⟦2-char-id⟧.blocks))
                                           for (const ⟦2-char-id⟧ of ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)) {
                                             const ⟦2-char-id⟧ = ⟦2-char-id⟧().get(⟦2-char-id⟧);
                                             if (⟦2-char-id⟧) {
                                               var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
                                               const ⟦2-char-id⟧ = {
                                                 pageId: ⟦2-char-id⟧.id,
-                                                anchor: null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.heading) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.anchor) && void 0 !== ⟦2-char-id⟧ ? JJ : "",
-                                                label: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.navTitle) && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧.title
+                                                anchor: null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.heading) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.anchor) && void 0 !== ⟦2-char-id⟧ ? BB : "",
+                                                label: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.navTitle) && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧.title
                                               };
                                               ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧, !1)
                                             }
                                           }
                                 }
                                 return ⟦2-char-id⟧
-                              }().get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? cJ : [],
+                              }().get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? TB : [],
                               ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = function() {
                                 if (!⟦2-char-id⟧) {
                                   ⟦2-char-id⟧ = new Map;
```

</details>

<details>
<summary>Hunk 157 · Change · +1 / -1</summary>

```diff
@@ -4644,7 +4644,7 @@
                                   }
                                 }
                                 return ⟦2-char-id⟧
-                              }().get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? ZJ : [];
+                              }().get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? dB : [];
                             return 0 === ⟦2-char-id⟧.length && 0 === ⟦2-char-id⟧.length ? null : (0, ⟦2-char-id⟧.jsxs)("footer", {
                               className: "DocsCardFooter",
                               children: [⟦2-char-id⟧.length > 0 && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
```

</details>

<details>
<summary>Hunk 158 · Change · +1 / -1</summary>

```diff
@@ -4665,7 +4665,7 @@
                               isCallback: ⟦2-char-id⟧
                             } = ⟦2-char-id⟧;
                             const ⟦2-char-id⟧ = ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧().get(⟦2-char-id⟧.name),
-                              ⟦2-char-id⟧ = ⟦2-char-id⟧.description.length > 0 || null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || !⟦2-char-id⟧.description ? ⟦2-char-id⟧.description : (0, ⟦2-char-id⟧.C)(⟦2-char-id⟧.description);
+                              ⟦2-char-id⟧ = ⟦2-char-id⟧.description.length > 0 || null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || !⟦2-char-id⟧.description ? ⟦2-char-id⟧.description : (0, ⟦2-char-id⟧.s)(⟦2-char-id⟧.description);
                             return (0, ⟦2-char-id⟧.jsxs)("article", {
                               className: "DocsCard DocsMethodCard",
                               children: [(0, ⟦2-char-id⟧.jsxs)("header", {
```

</details>

<details>
<summary>Hunk 159 · Change · +2 / -2</summary>

```diff
@@ -4689,9 +4689,9 @@
                                   children: "Deprecated"
                                 }), ⟦2-char-id⟧.deprecation && (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
                                   children: [": ", (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
-                                    text: (⟦2-char-id⟧ = ⟦2-char-id⟧.deprecation, (0, ⟦2-char-id⟧.q)(⟦2-char-id⟧, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, ⟦2-char-id⟧.k)("`\\w"), (⟦2-char-id⟧ => {
+                                    text: (⟦2-char-id⟧ = ⟦2-char-id⟧.deprecation, (0, ⟦2-char-id⟧.x)(⟦2-char-id⟧, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, ⟦2-char-id⟧.j)("`\\w"), (⟦2-char-id⟧ => {
                                       let [⟦2-char-id⟧] = ⟦2-char-id⟧;
-                                      return ⟦2-char-id⟧().has(⟦2-char-id⟧) ? `\`${cJ}\`` : ⟦2-char-id⟧
+                                      return ⟦2-char-id⟧().has(⟦2-char-id⟧) ? `\`${TB}\`` : ⟦2-char-id⟧
                                     })))
                                   })]
                                 })]
```

</details>

<details>
<summary>Hunk 160 · Change · +1 / -1</summary>

```diff
@@ -4708,7 +4708,7 @@
                                 }), (0, ⟦2-char-id⟧.jsx)("dl", {
                                   className: "DocsParamList",
                                   children: ⟦2-char-id⟧.params.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsxs)("div", {
-                                    id: `${cJ.name}-${je(JJ)}`,
+                                    id: `${TB.name}-${op(BB)}`,
                                     className: "DocsParam",
                                     children: [(0, ⟦2-char-id⟧.jsxs)("dt", {
                                       children: [(0, ⟦2-char-id⟧.jsx)("code", {
```

</details>

<details>
<summary>Hunk 161 · Change · +1 / -1</summary>

```diff
@@ -4750,7 +4750,7 @@
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧) {
                             var ⟦2-char-id⟧;
-                            return null !== ⟦2-char-id⟧.defaultValue && "undefined" !== ⟦2-char-id⟧.defaultValue ? ⟦2-char-id⟧.defaultValue : null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.example) && void 0 !== ⟦2-char-id⟧ ? cJ : "value"
+                            return null !== ⟦2-char-id⟧.defaultValue && "undefined" !== ⟦2-char-id⟧.defaultValue ? ⟦2-char-id⟧.defaultValue : null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.example) && void 0 !== ⟦2-char-id⟧ ? TB : "value"
                           }
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 162 · Change · +3 / -3</summary>

```diff
@@ -4890,10 +4890,10 @@
                                     ⟦2-char-id⟧.description.push(⟦2-char-id⟧);
                                     continue
                                   }
-                                  const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧[2])) && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧[2];
-                                  "Type" === ⟦2-char-id⟧[1] ? ⟦2-char-id⟧.type = UJ : "Default" === ⟦2-char-id⟧[1] ? ⟦2-char-id⟧.defaultValue = UJ : "" !== ⟦2-char-id⟧ && (⟦2-char-id⟧.example = ⟦2-char-id⟧)
+                                  const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧[2])) && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧[2];
+                                  "Type" === ⟦2-char-id⟧[1] ? ⟦2-char-id⟧.type = yB : "Default" === ⟦2-char-id⟧[1] ? ⟦2-char-id⟧.defaultValue = yB : "" !== ⟦2-char-id⟧ && (⟦2-char-id⟧.example = ⟦2-char-id⟧)
                                 }
-                                return ⟦2-char-id⟧.type ? cJ : null
+                                return ⟦2-char-id⟧.type ? TB : null
                               }(⟦2-char-id⟧);
                               if (⟦2-char-id⟧) return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
                                 setting: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 163 · Change · +2 / -2</summary>

```diff
@@ -4960,12 +4960,12 @@
                                 if (!⟦2-char-id⟧.hasTextPlayground) return [];
                                 const ⟦2-char-id⟧ = ⟦2-char-id⟧.sections.flatMap((⟦2-char-id⟧ => ⟦2-char-id⟧.blocks.flatMap((⟦2-char-id⟧ => {
                                   var ⟦2-char-id⟧;
-                                  return (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? cJ : []).flatMap((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧.name) ? [⟦2-char-id⟧.name] : []))
+                                  return (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? TB : []).flatMap((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧.name) ? [⟦2-char-id⟧.name] : []))
                                 }))));
                                 return [...new Set(⟦2-char-id⟧)]
                               }), [⟦2-char-id⟧, ⟦2-char-id⟧]),
                               ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useMemo)((() => ⟦2-char-id⟧ ? ⟦2-char-id⟧.sections.filter((⟦2-char-id⟧ => function(⟦2-char-id⟧, ⟦2-char-id⟧) {
-                                return !!⟦2-char-id⟧.heading.text.toLowerCase().includes(⟦2-char-id⟧) || ⟦2-char-id⟧.blocks.some((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧).toLowerCase().includes(⟦2-char-id⟧)))
+                                return !!⟦2-char-id⟧.heading.text.toLowerCase().includes(⟦2-char-id⟧) || ⟦2-char-id⟧.blocks.some((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧).toLowerCase().includes(⟦2-char-id⟧)))
                               }(⟦2-char-id⟧, ⟦2-char-id⟧))) : ⟦2-char-id⟧.sections), [⟦2-char-id⟧, ⟦2-char-id⟧]),
                               ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useMemo)((() => function(⟦2-char-id⟧, ⟦2-char-id⟧) {
                                 return "article" !== ⟦2-char-id⟧.layout ? ⟦2-char-id⟧.map((⟦2-char-id⟧ => ({
```

</details>

<details>
<summary>Hunk 164 · Change · +1 / -1</summary>

```diff
@@ -5015,7 +5015,7 @@
                               }), !⟦2-char-id⟧ && ⟦2-char-id⟧.intro.length > 0 && (0, ⟦2-char-id⟧.jsx)("div", {
                                 className: "DocsProse DocsPageIntro",
                                 children: ⟦2-char-id⟧.gallery ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.Provider, {
-                                  value: ⟦2-char-id⟧.hasParticlePlayground ? DJ : null,
+                                  value: ⟦2-char-id⟧.hasParticlePlayground ? LB : null,
                                   children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
                                     kind: ⟦2-char-id⟧.gallery,
                                     content: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 165 · Change · +3 / -3</summary>

```diff
@@ -5034,15 +5034,15 @@
                               }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
                                 className: "DocsFilterBar",
                                 value: ⟦2-char-id⟧,
-                                placeholder: `Filter ${UJ.sections.length} ${ve[cJ.layout]}\u2026`,
-                                label: `Filter ${ve[cJ.layout]}`,
+                                placeholder: `Filter ${yB.sections.length} ${Np[TB.layout]}\u2026`,
+                                label: `Filter ${Np[TB.layout]}`,
                                 onChange: ⟦2-char-id⟧,
                                 count: ⟦2-char-id⟧ ? {
                                   visible: ⟦2-char-id⟧.length,
                                   total: ⟦2-char-id⟧.sections.length
                                 } : null
                               }), !⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)("div", {
-                                className: `DocsSections Layout-${cJ.layout}`,
+                                className: `DocsSections Layout-${TB.layout}`,
                                 children: [⟦2-char-id⟧.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
                                   page: ⟦2-char-id⟧,
                                   section: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 166 · Change · +2 / -2</summary>

```diff
@@ -5064,9 +5064,9 @@
                               children: ⟦2-char-id⟧
                             } = ⟦2-char-id⟧;
                             return (0, ⟦2-char-id⟧.jsx)("a", {
-                              href: `#${cJ.anchor}`,
+                              href: `#${TB.anchor}`,
                               "aria-label": ⟦2-char-id⟧,
-                              className: ⟦2-char-id⟧()(`Level${cJ.level}`, {
+                              className: ⟦2-char-id⟧()(`Level${TB.level}`, {
                                 Active: ⟦2-char-id⟧
                               }),
                               "aria-current": ⟦2-char-id⟧ ? "location" : void 0,
```

</details>

<details>
<summary>Hunk 167 · Change · +3 / -3</summary>

```diff
@@ -5110,16 +5110,16 @@
                                   const ⟦2-char-id⟧ = ⟦2-char-id⟧.trim().match(⟦2-char-id⟧);
                                   return ⟦2-char-id⟧ ? {
                                     day: ⟦2-char-id⟧[1],
-                                    month: `${cJ[2]} ${cJ[3]}`
+                                    month: `${TB[2]} ${TB[3]}`
                                   } : null
                                 }(⟦2-char-id⟧.text),
-                                ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.month) && void 0 !== ⟦2-char-id⟧ ? ZJ : null;
+                                ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.month) && void 0 !== ⟦2-char-id⟧ ? dB : null;
                               null !== ⟦2-char-id⟧ && (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.at(-1)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.month) === ⟦2-char-id⟧ || ⟦2-char-id⟧.push({
                                 month: ⟦2-char-id⟧,
                                 entries: []
                               }), ⟦2-char-id⟧.at(-1).entries.push({
                                 entry: ⟦2-char-id⟧,
-                                day: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.day) && void 0 !== ⟦2-char-id⟧ ? UJ : null,
+                                day: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.day) && void 0 !== ⟦2-char-id⟧ ? yB : null,
                                 index: ⟦2-char-id⟧
                               })
                             })), (0, ⟦2-char-id⟧.jsx)("ol", {
```

</details>

<details>
<summary>Hunk 168 · Change · +1 / -1</summary>

```diff
@@ -5154,7 +5154,7 @@
                                           label: ⟦2-char-id⟧.text,
                                           children: (0, ⟦2-char-id⟧.jsx)("span", {
                                             className: "DocsTimelineDay",
-                                            children: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧.text
+                                            children: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧.text
                                           })
                                         })
                                       }, ⟦2-char-id⟧.anchor)
```

</details>

<details>
<summary>Hunk 169 · Change · +2 / -2</summary>

```diff
@@ -5228,8 +5228,8 @@
                               listedUnder: ⟦2-char-id⟧.title
                             })));
                             const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
-                            return (0, ⟦2-char-id⟧.y)(⟦2-char-id⟧).flatMap((⟦2-char-id⟧ => {
-                              const ⟦2-char-id⟧ = ⟦2-char-id⟧.heading ? `${JJ.title} \u203a ${FJ.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : ⟦2-char-id⟧.title;
+                            return (0, ⟦2-char-id⟧.n)(⟦2-char-id⟧).flatMap((⟦2-char-id⟧ => {
+                              const ⟦2-char-id⟧ = ⟦2-char-id⟧.heading ? `${BB.title} \u203a ${VB.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : ⟦2-char-id⟧.title;
                               return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.blocks).flatMap((⟦2-char-id⟧ => "names" !== ⟦2-char-id⟧.kind ? [] : ⟦2-char-id⟧.names.map((⟦2-char-id⟧ => {
                                 const ⟦2-char-id⟧ = ⟦2-char-id⟧.isSongs ? "Song" : ⟦2-char-id⟧[⟦2-char-id⟧];
                                 return {
```

</details>

<details>
<summary>Hunk 170 · Change · +2 / -2</summary>

```diff
@@ -5255,13 +5255,13 @@
                               if (!⟦2-char-id⟧.text.toLowerCase().includes(⟦2-char-id⟧)) return 0;
                               ⟦2-char-id⟧ = 20
                             }
-                            return ⟦2-char-id⟧ - Math.min(⟦2-char-id⟧.length / 10, 9) + ("Page" === ⟦2-char-id⟧.kind ? 8 : "Method" === ⟦2-char-id⟧.kind ? 3 : 0) - (⟦2-char-id⟧.listedUnder ? Me : 0)
+                            return ⟦2-char-id⟧ - Math.min(⟦2-char-id⟧.length / 10, 9) + ("Page" === ⟦2-char-id⟧.kind ? 8 : "Method" === ⟦2-char-id⟧.kind ? 3 : 0) - (⟦2-char-id⟧.listedUnder ? Kp : 0)
                           }
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
                             const ⟦2-char-id⟧ = ⟦2-char-id⟧.toLowerCase().indexOf(⟦2-char-id⟧),
                               ⟦2-char-id⟧ = Math.max(0, ⟦2-char-id⟧ - ⟦2-char-id⟧ / 3);
-                            return `${FJ>0?"\u2026":""}${JJ.slice(FJ,FJ+We)}${FJ+We<JJ.length?"\u2026":""}`
+                            return `${VB>0?"\u2026":""}${BB.slice(VB,VB+cp)}${VB+cp<BB.length?"\u2026":""}`
                           }
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 171 · Change · +1 / -1</summary>

```diff
@@ -5284,7 +5284,7 @@
                               basePath: ⟦2-char-id⟧,
                               onClose: ⟦2-char-id⟧
                             } = ⟦2-char-id⟧;
-                            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.r)(),
+                            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.q)(),
                               [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(""),
                               [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(0),
                               ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null),
```

</details>

<details>
<summary>Hunk 172 · Change · +1 / -1</summary>

```diff
@@ -5300,7 +5300,7 @@
                                     kind: "Page",
                                     text: ⟦2-char-id⟧.summary
                                   }, ...⟦2-char-id⟧.sections.flatMap((⟦2-char-id⟧ => {
-                                    const ⟦2-char-id⟧ = ⟦2-char-id⟧.blocks.filter((⟦2-char-id⟧ => "paragraph" === ⟦2-char-id⟧.kind)).map(⟦2-char-id⟧.i).join(" ").replace(/[`*]/g, ""),
+                                    const ⟦2-char-id⟧ = ⟦2-char-id⟧.blocks.filter((⟦2-char-id⟧ => "paragraph" === ⟦2-char-id⟧.kind)).map(⟦2-char-id⟧.g).join(" ").replace(/[`*]/g, ""),
                                       ⟦2-char-id⟧ = {
                                         page: ⟦2-char-id⟧,
                                         anchor: ⟦2-char-id⟧.heading.anchor,
```

</details>

<details>
<summary>Hunk 173 · Change · +1 / -1</summary>

```diff
@@ -5373,7 +5373,7 @@
                                     placeholder: "Search methods, callbacks, settings and guides\u2026",
                                     "aria-label": "Search the docs",
                                     "aria-controls": "DocsSearchResults",
-                                    "aria-activedescendant": ⟦2-char-id⟧.length > 0 ? `DocsSearchResult-${jJ}` : void 0,
+                                    "aria-activedescendant": ⟦2-char-id⟧.length > 0 ? `DocsSearchResult-${gB}` : void 0,
                                     onChange: ⟦2-char-id⟧ => {
                                       ⟦2-char-id⟧(⟦2-char-id⟧.target.value)
                                     },
```

</details>

<details>
<summary>Hunk 174 · Change · +1 / -1</summary>

```diff
@@ -5398,7 +5398,7 @@
                                   }), ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
                                     var ⟦2-char-id⟧;
                                     return (0, ⟦2-char-id⟧.jsxs)("li", {
-                                      id: `DocsSearchResult-${cJ}`,
+                                      id: `DocsSearchResult-${TB}`,
                                       role: "option",
                                       "aria-selected": ⟦2-char-id⟧ === ⟦2-char-id⟧,
                                       className: ⟦2-char-id⟧()("DocsSearchResult", {
```

</details>

<details>
<summary>Hunk 175 · Change · +2 / -2</summary>

```diff
@@ -5429,9 +5429,9 @@
                                         })]
                                       }), (0, ⟦2-char-id⟧.jsx)("span", {
                                         className: "DocsSearchResultMeta",
-                                        children: "Page" === ⟦2-char-id⟧.kind ? "Page" : null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.listedUnder) && void 0 !== ⟦2-char-id⟧ ? ZJ : `${JJ.kind} \xb7 ${JJ.page.title}`
+                                        children: "Page" === ⟦2-char-id⟧.kind ? "Page" : null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.listedUnder) && void 0 !== ⟦2-char-id⟧ ? dB : `${BB.kind} \xb7 ${BB.page.title}`
                                       })]
-                                    }, `${JJ.page.id}#${JJ.anchor}`)
+                                    }, `${BB.page.id}#${BB.anchor}`)
                                   })), ⟦2-char-id⟧ && 0 === ⟦2-char-id⟧.length && (0, ⟦2-char-id⟧.jsxs)("li", {
                                     className: "DocsSearchHint",
                                     children: ["Nothing matches \u201c", ⟦2-char-id⟧, "\u201d."]
```

</details>

<details>
<summary>Hunk 176 · Change · +2 / -2</summary>

```diff
@@ -5442,9 +5442,9 @@
                           }
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-                            if (⟦2-char-id⟧ < 10) return `${JJ.toFixed(1)}s`;
+                            if (⟦2-char-id⟧ < 10) return `${BB.toFixed(1)}s`;
                             const ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧);
-                            return `${Math.floor(ZJ/60)}:${String(ZJ%60).padStart(2,"0")}`
+                            return `${Math.floor(dB/60)}:${String(dB%60).padStart(2,"0")}`
                           }
 
                           function ⟦2-char-id⟧() {
```

</details>

<details>
<summary>Hunk 177 · Change · +1 / -1</summary>

```diff
@@ -5473,7 +5473,7 @@
                                 children: [(0, ⟦2-char-id⟧.jsx)("button", {
                                   type: "button",
                                   className: "DocsSoundPlayerToggle",
-                                  "aria-label": ⟦2-char-id⟧ ? `Pause ${JJ.name}` : `Play ${JJ.name}`,
+                                  "aria-label": ⟦2-char-id⟧ ? `Pause ${BB.name}` : `Play ${BB.name}`,
                                   onClick: ⟦2-char-id⟧,
                                   children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
                                     name: ⟦2-char-id⟧ ? "pause" : "play"
```

</details>

<details>
<summary>Hunk 178 · Change · +1 / -1</summary>

```diff
@@ -5499,7 +5499,7 @@
                                       value: ⟦2-char-id⟧,
                                       disabled: 0 === ⟦2-char-id⟧.duration,
                                       "aria-label": "Position",
-                                      "aria-valuetext": `${ze(qJ,JJ.duration)} of ${ze(JJ.duration,JJ.duration)}`,
+                                      "aria-valuetext": `${Xp(YB,BB.duration)} of ${Xp(BB.duration,BB.duration)}`,
                                       onChange: ⟦2-char-id⟧ => {
                                         const ⟦2-char-id⟧ = Number(⟦2-char-id⟧.target.value);
                                         ! function(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 179 · Change · +1 / -1</summary>

```diff
@@ -5542,7 +5542,7 @@
                                   "aria-label": "Close the player",
                                   onClick: () => {
                                     var ⟦2-char-id⟧;
-                                    null === (⟦2-char-id⟧ = document.querySelector(`[data-docs-track="${CSS.escape(ZF(JJ.name,JJ.isSong))}"]`)) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.focus(), ⟦2-char-id⟧()
+                                    null === (⟦2-char-id⟧ = document.querySelector(`[data-docs-track="${CSS.escape(VV(BB.name,BB.isSong))}"]`)) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.focus(), ⟦2-char-id⟧()
                                   },
                                   children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
                                     name: "cross"
```

</details>

<details>
<summary>Hunk 180 · Change · +1 / -1</summary>

```diff
@@ -5551,7 +5551,7 @@
                               })
                             })
                           }
-                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(29);
+                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(33);
                           const ⟦2-char-id⟧ = "docsTheme",
                             ⟦2-char-id⟧ = window.matchMedia("(prefers-color-scheme: light)");
 
```

</details>

<details>
<summary>Hunk 181 · Change · +2 / -2</summary>

```diff
@@ -5564,8 +5564,8 @@
                             return (0, ⟦2-char-id⟧.jsx)("button", {
                               type: "button",
                               className: "DocsIconButton DocsThemeToggle",
-                              "aria-label": `Switch to ${FJ} theme`,
-                              title: `Switch to ${FJ} theme`,
+                              "aria-label": `Switch to ${VB} theme`,
+                              title: `Switch to ${VB} theme`,
                               onClick: () => {
                                 ⟦2-char-id⟧(⟦2-char-id⟧)
                               },
```

</details>

<details>
<summary>Hunk 182 · Change · +1 / -1</summary>

```diff
@@ -5596,7 +5596,7 @@
                                 }), ⟦2-char-id⟧.pageIds.map((⟦2-char-id⟧ => {
                                   var ⟦2-char-id⟧;
                                   const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
-                                  return (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.c, {
+                                  return (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.d, {
                                     to: ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧),
                                     className: ⟦2-char-id⟧()("DocsNavLink", {
                                       Active: ⟦2-char-id⟧.id === ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 183 · Change · +1 / -1</summary>

```diff
@@ -5606,7 +5606,7 @@
                                     children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
                                       name: ⟦2-char-id⟧.icon
                                     }), (0, ⟦2-char-id⟧.jsx)("span", {
-                                      children: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.navTitle) && void 0 !== ⟦2-char-id⟧ ? UJ : ⟦2-char-id⟧.title
+                                      children: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.navTitle) && void 0 !== ⟦2-char-id⟧ ? yB : ⟦2-char-id⟧.title
                                     })]
                                   }, ⟦2-char-id⟧.id)
                                 }))]
```

</details>

<details>
<summary>Hunk 184 · Change · +1 / -1</summary>

```diff
@@ -5626,7 +5626,7 @@
                             return (0, ⟦2-char-id⟧.jsxs)("nav", {
                               className: "DocsPager",
                               "aria-label": "Pages",
-                              children: [⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.c, {
+                              children: [⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.d, {
                                 className: "DocsPagerLink Previous",
                                 to: ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧),
                                 children: [(0, ⟦2-char-id⟧.jsx)("span", {
```

</details>

<details>
<summary>Hunk 185 · Change · +1 / -1</summary>

```diff
@@ -5636,7 +5636,7 @@
                                   className: "DocsPagerTitle",
                                   children: ⟦2-char-id⟧.title
                                 })]
-                              }) : (0, ⟦2-char-id⟧.jsx)("span", {}), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.c, {
+                              }) : (0, ⟦2-char-id⟧.jsx)("span", {}), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.d, {
                                 className: "DocsPagerLink Next",
                                 to: ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧),
                                 children: [(0, ⟦2-char-id⟧.jsx)("span", {
```

</details>

<details>
<summary>Hunk 186 · Change · +2 / -2</summary>

```diff
@@ -5657,12 +5657,12 @@
                             } = ⟦2-char-id⟧;
                             const {
                               pageSlug: ⟦2-char-id⟧ = ""
-                            } = (0, ⟦2-char-id⟧.x)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.q)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.r)(), ⟦2-char-id⟧ = (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.slug === ⟦2-char-id⟧)));
+                            } = (0, ⟦2-char-id⟧.u)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.o)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.q)(), ⟦2-char-id⟧ = (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.slug === ⟦2-char-id⟧)));
                             var ⟦2-char-id⟧;
                             const [⟦2-char-id⟧, ⟦2-char-id⟧] = function() {
                               const [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)((() => {
                                 const ⟦2-char-id⟧ = ⟦2-char-id⟧.j.getItem(⟦2-char-id⟧);
-                                return "dark" === ⟦2-char-id⟧ || "light" === ⟦2-char-id⟧ ? JJ : null
+                                return "dark" === ⟦2-char-id⟧ || "light" === ⟦2-char-id⟧ ? BB : null
                               })), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(⟦2-char-id⟧.matches ? "light" : "dark");
                               return (0, ⟦2-char-id⟧.useEffect)((() => {
                                 const ⟦2-char-id⟧ = () => {
```

</details>

<details>
<summary>Hunk 187 · Change · +1 / -1</summary>

```diff
@@ -5671,7 +5671,7 @@
                                 return ⟦2-char-id⟧.addEventListener("change", ⟦2-char-id⟧), () => {
                                   ⟦2-char-id⟧.removeEventListener("change", ⟦2-char-id⟧)
                                 }
-                              }), []), [null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? JJ : ⟦2-char-id⟧, ⟦2-char-id⟧ => {
+                              }), []), [null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? BB : ⟦2-char-id⟧, ⟦2-char-id⟧ => {
                                 ⟦2-char-id⟧.j.setItem(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧)
                               }]
                             }(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)([]), ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 188 · Change · +1 / -1</summary>

```diff
@@ -5683,7 +5683,7 @@
                                     var ⟦2-char-id⟧, ⟦2-char-id⟧;
                                     ⟦2-char-id⟧ = 0;
                                     const ⟦2-char-id⟧ = ⟦2-char-id⟧.getBoundingClientRect().top + ⟦2-char-id⟧;
-                                    let ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧[0]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.anchor) && void 0 !== ⟦2-char-id⟧ ? FJ : "";
+                                    let ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧[0]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.anchor) && void 0 !== ⟦2-char-id⟧ ? VB : "";
                                     for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
                                       const ⟦2-char-id⟧ = document.getElementById(⟦2-char-id⟧.anchor);
                                       ⟦2-char-id⟧ && ⟦2-char-id⟧.getBoundingClientRect().top <= ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.anchor)
```

</details>

<details>
<summary>Hunk 189 · Change · +1 / -1</summary>

```diff
@@ -5700,7 +5700,7 @@
                                 }
                               }), [⟦2-char-id⟧, ⟦2-char-id⟧]), ⟦2-char-id⟧
                             }(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ = "" === ⟦2-char-id⟧ && ⟦2-char-id⟧.hash ? function(⟦2-char-id⟧) {
-                              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.r)(⟦2-char-id⟧);
+                              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.k)(⟦2-char-id⟧);
                               if (⟦2-char-id⟧(⟦2-char-id⟧("welcome"), ⟦2-char-id⟧)) return null;
                               const ⟦2-char-id⟧ = Object.hasOwn(⟦2-char-id⟧, ⟦2-char-id⟧) ? ⟦2-char-id⟧[⟦2-char-id⟧] : null;
                               if (⟦2-char-id⟧) return {
```

</details>

<details>
<summary>Hunk 190 · Change · +1 / -1</summary>

```diff
@@ -5711,7 +5711,7 @@
                               return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) ? {
                                 page: ⟦2-char-id⟧,
                                 anchor: ⟦2-char-id⟧
-                              } : ⟦2-char-id⟧(`#${cJ}`)
+                              } : ⟦2-char-id⟧(`#${TB}`)
                             }(⟦2-char-id⟧.hash) : null;
                             (0, ⟦2-char-id⟧.useEffect)((() => (⟦2-char-id⟧.d.set({
                               musicOnFromPage: !1
```

</details>

<details>
<summary>Hunk 191 · Change · +2 / -2</summary>

```diff
@@ -5736,12 +5736,12 @@
                               if (!⟦2-char-id⟧) return;
                               const ⟦2-char-id⟧ = ⟦2-char-id⟧.current === ⟦2-char-id⟧.pathname;
                               ⟦2-char-id⟧.current = ⟦2-char-id⟧.pathname;
-                              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.r)(⟦2-char-id⟧.hash),
+                              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.k)(⟦2-char-id⟧.hash),
                                 ⟦2-char-id⟧ = ⟦2-char-id⟧ ? document.getElementById(⟦2-char-id⟧) : null;
                               if (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.querySelector(".DocsTargeted")) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.classList.remove("DocsTargeted"), null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.classList.add("DocsTargeted"), ⟦2-char-id⟧) {
                                 var ⟦2-char-id⟧;
                                 const ⟦2-char-id⟧ = ⟦2-char-id⟧.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
-                                (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.closest(".DocsChangelogEntry")) && void 0 !== ⟦2-char-id⟧ ? eJ : ⟦2-char-id⟧).scrollIntoView({
+                                (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.closest(".DocsChangelogEntry")) && void 0 !== ⟦2-char-id⟧ ? pB : ⟦2-char-id⟧).scrollIntoView({
                                   block: ⟦2-char-id⟧ ? "center" : "start",
                                   behavior: ⟦2-char-id⟧ ? "smooth" : "auto"
                                 })
```

</details>

<details>
<summary>Hunk 192 · Change · +1 / -1</summary>

```diff
@@ -5790,7 +5790,7 @@
                                       children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
                                         name: ⟦2-char-id⟧ ? "cross" : "menu"
                                       })
-                                    }), (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.c, {
+                                    }), (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.d, {
                                       to: ⟦2-char-id⟧,
                                       className: "DocsBrand",
                                       children: [(0, ⟦2-char-id⟧.jsx)("img", {
```

</details>

<details>
<summary>Hunk 193 · Change · +1 / -1</summary>

```diff
@@ -5841,7 +5841,7 @@
                                         }), (0, ⟦2-char-id⟧.jsx)("span", {
                                           children: "GitHub"
                                         })]
-                                      }), !⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.c, {
+                                      }), !⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.d, {
                                         to: "/",
                                         className: "DocsTopBarLink DocsPlayLink",
                                         children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
```

</details>

<details>
<summary>Hunk 194 · Change · +8 / -8</summary>

```diff
@@ -5897,18 +5897,18 @@
                               })
                             })
                           }
-                        }, 4133: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+                        }, 4131: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
                           ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-                            A: () => ⟦2-char-id⟧,
-                            C: () => ⟦2-char-id⟧,
-                            e: () => ⟦2-char-id⟧,
+                            b: () => ⟦2-char-id⟧,
+                            f: () => ⟦2-char-id⟧,
                             g: () => ⟦2-char-id⟧,
                             i: () => ⟦2-char-id⟧,
-                            l: () => ⟦2-char-id⟧,
+                            j: () => ⟦2-char-id⟧,
+                            k: () => ⟦2-char-id⟧,
+                            m: () => ⟦2-char-id⟧,
+                            n: () => ⟦2-char-id⟧,
                             p: () => ⟦2-char-id⟧,
-                            r: () => ⟦2-char-id⟧,
-                            v: () => ⟦2-char-id⟧,
-                            y: () => ⟦2-char-id⟧
+                            s: () => ⟦2-char-id⟧
                           });
                           const ⟦2-char-id⟧ = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;
 
```

</details>

<details>
<summary>Hunk 195 · Change · +1 / -1</summary>

```diff
@@ -5923,7 +5923,7 @@
                           function ⟦2-char-id⟧(⟦2-char-id⟧) {
                             return ⟦2-char-id⟧.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                           }
-                          const ⟦2-char-id⟧ = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${FJ.source}`, "g");
+                          const ⟦2-char-id⟧ = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${VB.source}`, "g");
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
                             return 2 === ⟦2-char-id⟧.length ? ⟦2-char-id⟧.replace(/^ (.*) $/, "$1") : ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 196 · Change · +1 / -1</summary>

```diff
@@ -5935,7 +5935,7 @@
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧) {
                             const ⟦2-char-id⟧ = [];
-                            for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) ⟦2-char-id⟧.length > 0 && ⟦2-char-id⟧[⟦2-char-id⟧.length - 1].endsWith("\\") ? ⟦2-char-id⟧[⟦2-char-id⟧.length - 1] += `|${ZJ}` : ⟦2-char-id⟧.push(⟦2-char-id⟧);
+                            for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) ⟦2-char-id⟧.length > 0 && ⟦2-char-id⟧[⟦2-char-id⟧.length - 1].endsWith("\\") ? ⟦2-char-id⟧[⟦2-char-id⟧.length - 1] += `|${dB}` : ⟦2-char-id⟧.push(⟦2-char-id⟧);
                             return ⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧.trim().replaceAll("\\|", "|")))
                           }
                           const ⟦2-char-id⟧ = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;
```

</details>

<details>
<summary>Hunk 197 · Change · +1 / -1</summary>

```diff
@@ -5950,7 +5950,7 @@
                             for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
                               const ⟦2-char-id⟧ = ⟦2-char-id⟧.match(⟦2-char-id⟧);
                               if (!⟦2-char-id⟧) {
-                                ⟦2-char-id⟧ && (⟦2-char-id⟧.text += ` ${UJ.trim()}`);
+                                ⟦2-char-id⟧ && (⟦2-char-id⟧.text += ` ${yB.trim()}`);
                                 continue
                               }
                               const ⟦2-char-id⟧ = ⟦2-char-id⟧[1].replace(/\t/g, "  ").length;
```

</details>

<details>
<summary>Hunk 198 · Change · +2 / -2</summary>

```diff
@@ -6055,8 +6055,8 @@
                             for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
                               if ("heading" === ⟦2-char-id⟧.kind) {
                                 var ⟦2-char-id⟧;
-                                const ⟦2-char-id⟧ = (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧.anchor)) && void 0 !== ⟦2-char-id⟧ ? AJ : 0) + 1;
-                                ⟦2-char-id⟧.set(⟦2-char-id⟧.anchor, ⟦2-char-id⟧), ⟦2-char-id⟧ > 1 && (⟦2-char-id⟧.anchor = `${jJ.anchor}-${JJ}`)
+                                const ⟦2-char-id⟧ = (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧.anchor)) && void 0 !== ⟦2-char-id⟧ ? JB : 0) + 1;
+                                ⟦2-char-id⟧.set(⟦2-char-id⟧.anchor, ⟦2-char-id⟧), ⟦2-char-id⟧ > 1 && (⟦2-char-id⟧.anchor = `${gB.anchor}-${BB}`)
                               }
                               if ("heading" === ⟦2-char-id⟧.kind && 1 === ⟦2-char-id⟧.level && !⟦2-char-id⟧) {
                                 ⟦2-char-id⟧ = ⟦2-char-id⟧.text;
```

</details>

<details>
<summary>Hunk 199 · Change · +1 / -1</summary>

```diff
@@ -6112,7 +6112,7 @@
                               case "table":
                                 return [⟦2-char-id⟧.header, ...⟦2-char-id⟧.rows].map((⟦2-char-id⟧ => ⟦2-char-id⟧.join(" "))).join(" ");
                               case "list": {
-                                const ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧.map((⟦2-char-id⟧ => `${JJ.text} ${cJ(JJ.children)}`)).join(" ");
+                                const ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧.map((⟦2-char-id⟧ => `${BB.text} ${TB(BB.children)}`)).join(" ");
                                 return ⟦2-char-id⟧(⟦2-char-id⟧.items)
                               }
                               case "quote":
```

</details>

<details>
<summary>Hunk 200 · Change · +6 / -6</summary>

```diff
@@ -6121,14 +6121,14 @@
                                 return ""
                             }
                           }
-                        }, 4233: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+                        }, 4232: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
                           ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-                            c: () => ⟦2-char-id⟧
+                            d: () => ⟦2-char-id⟧
                           });
-                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(47),
-                            ⟦2-char-id⟧ = ⟦2-char-id⟧(227),
-                            ⟦2-char-id⟧ = ⟦2-char-id⟧(1688),
-                            ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
+                            ⟦2-char-id⟧ = ⟦2-char-id⟧(270),
+                            ⟦2-char-id⟧ = ⟦2-char-id⟧(1666),
+                            ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧) {
                             let {
```

</details>

<details>
<summary>Hunk 201 · Change · +2 / -2</summary>

```diff
@@ -6136,8 +6136,8 @@
                             } = ⟦2-char-id⟧;
                             const ⟦2-char-id⟧ = [];
                             let ⟦2-char-id⟧ = "";
-                            return (0, ⟦2-char-id⟧.Sb)(⟦2-char-id⟧).forEach(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
-                              if ("string" === typeof ⟦2-char-id⟧ || !(0, ⟦2-char-id⟧.e)(⟦2-char-id⟧.icon)) return void(⟦2-char-id⟧ += "string" === typeof ⟦2-char-id⟧ ? JJ : ⟦2-char-id⟧.icon);
+                            return (0, ⟦2-char-id⟧.hc)(⟦2-char-id⟧).forEach(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
+                              if ("string" === typeof ⟦2-char-id⟧ || !(0, ⟦2-char-id⟧.d)(⟦2-char-id⟧.icon)) return void(⟦2-char-id⟧ += "string" === typeof ⟦2-char-id⟧ ? BB : ⟦2-char-id⟧.icon);
                               const ⟦2-char-id⟧ = Math.max(0, ⟦2-char-id⟧.trimEnd().search(/\S{1,12}$/));
                               ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
                                 children: [⟦2-char-id⟧.slice(0, ⟦2-char-id⟧), (0, ⟦2-char-id⟧.jsxs)("span", {
```

</details>

<details>
<summary>Hunk 202 · Change · +1 / -1</summary>

```diff
@@ -6146,7 +6146,7 @@
                                     className: "InlineIconTextIcon",
                                     role: "img",
                                     "aria-label": ⟦2-char-id⟧.icon,
-                                    children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                                    children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
                                       itemName: ⟦2-char-id⟧.icon,
                                       amount: 0
                                     })
```

</details>

<details>
<summary>Hunk 203 · Change · +7 / -7</summary>

```diff
@@ -6157,16 +6157,16 @@
                               children: ⟦2-char-id⟧
                             })
                           }
-                        }, 4162: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+                        }, 4156: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
                           ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-                            h: () => ⟦2-char-id⟧,
+                            f: () => ⟦2-char-id⟧,
                             e: () => ⟦2-char-id⟧
                           });
-                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(47),
-                            ⟦2-char-id⟧ = ⟦2-char-id⟧(1326),
-                            ⟦2-char-id⟧ = ⟦2-char-id⟧(1675),
-                            ⟦2-char-id⟧ = ⟦2-char-id⟧(4164),
-                            ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
+                            ⟦2-char-id⟧ = ⟦2-char-id⟧(1317),
+                            ⟦2-char-id⟧ = ⟦2-char-id⟧(1657),
+                            ⟦2-char-id⟧ = ⟦2-char-id⟧(4162),
+                            ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
                           const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.memo)((function(⟦2-char-id⟧) {
                             let {
                               initialParameters: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 204 · Change · +3 / -3</summary>

```diff
@@ -6176,12 +6176,12 @@
                               ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(0),
                               ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null),
                               ⟦2-char-id⟧ = ⟦2-char-id⟧.description,
-                              ⟦2-char-id⟧ = ⟦2-char-id⟧.MU,
+                              ⟦2-char-id⟧ = ⟦2-char-id⟧.JV,
                               {
                                 scale: ⟦2-char-id⟧,
                                 rotation: ⟦2-char-id⟧
-                              } = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? cJ : {},
-                              ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.g)();
+                              } = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? TB : {},
+                              ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)();
                             return (0, ⟦2-char-id⟧.useEffect)((() => {
                               const ⟦2-char-id⟧ = ⟦2-char-id⟧.onFrame((() => {
                                 const ⟦2-char-id⟧ = ⟦2-char-id⟧.getState();
```

</details>

<details>
<summary>Hunk 205 · Change · +1 / -1</summary>

```diff
@@ -6206,7 +6206,7 @@
                                     "--scale": ⟦2-char-id⟧
                                   },
                                   ...null !== ⟦2-char-id⟧ && {
-                                    "--rotation": `${sJ}deg`
+                                    "--rotation": `${OB}deg`
                                   }
                                 },
                                 children: [(0, ⟦2-char-id⟧.jsx)("progress", {
```

</details>

<details>
<summary>Hunk 206 · Change · +3 / -3</summary>

```diff
@@ -6217,21 +6217,21 @@
                                 }), (0, ⟦2-char-id⟧.jsx)("span", {
                                   className: "QTEProgressBarInteractionIndicator",
                                   ref: ⟦2-char-id⟧,
-                                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                                     text: [{
                                       icon: ⟦2-char-id⟧
                                     }]
                                   })
                                 }), (0, ⟦2-char-id⟧.jsx)("div", {
                                   className: "QTEProgressBarDescription",
-                                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                                     text: ⟦2-char-id⟧
                                   })
                                 })]
                               })
                             })
                           }));
-                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(926),
+                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(933),
                             ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧);
                           const ⟦2-char-id⟧ = 2 * Math.PI * 90,
                             ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.memo)((function(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 207 · Change · +7 / -7</summary>

```diff
@@ -6243,23 +6243,23 @@
                                 ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null),
                                 ⟦2-char-id⟧ = ⟦2-char-id⟧.label,
                                 ⟦2-char-id⟧ = ⟦2-char-id⟧.icon,
-                                ⟦2-char-id⟧ = ⟦2-char-id⟧.WU,
+                                ⟦2-char-id⟧ = ⟦2-char-id⟧.oV,
                                 {
                                   scale: ⟦2-char-id⟧,
                                   rotation: ⟦2-char-id⟧,
-                                  gU: ⟦2-char-id⟧
-                                } = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? cJ : {},
-                                ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.g)();
+                                  kV: ⟦2-char-id⟧
+                                } = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? TB : {},
+                                ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)();
                               return (0, ⟦2-char-id⟧.useEffect)((() => {
                                 const ⟦2-char-id⟧ = ⟦2-char-id⟧.onFrame((() => {
                                   var ⟦2-char-id⟧, ⟦2-char-id⟧;
                                   const ⟦2-char-id⟧ = ⟦2-char-id⟧.getState();
                                   if (!⟦2-char-id⟧.isActive || !⟦2-char-id⟧.current) return;
                                   const ⟦2-char-id⟧ = ⟦2-char-id⟧.state,
-                                    ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.timeRemaining) && void 0 !== ⟦2-char-id⟧ ? JJ : 0,
-                                    ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.wU) && void 0 !== ⟦2-char-id⟧ ? cJ : 1,
+                                    ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.timeRemaining) && void 0 !== ⟦2-char-id⟧ ? BB : 0,
+                                    ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.gV) && void 0 !== ⟦2-char-id⟧ ? TB : 1,
                                     ⟦2-char-id⟧ = ⟦2-char-id⟧ * (1 - ⟦2-char-id⟧ / ⟦2-char-id⟧);
-                                  ⟦2-char-id⟧.current.style.strokeDashoffset = `${jJ}`, ⟦2-char-id⟧.current && (⟦2-char-id⟧.current.style.opacity = ⟦2-char-id⟧ > 0 ? "1" : "0"), ⟦2-char-id⟧.current && ⟦2-char-id⟧ && (⟦2-char-id⟧.current.textContent = `${(XJ/1e3).toFixed(1)}s`)
+                                  ⟦2-char-id⟧.current.style.strokeDashoffset = `${gB}`, ⟦2-char-id⟧.current && (⟦2-char-id⟧.current.style.opacity = ⟦2-char-id⟧ > 0 ? "1" : "0"), ⟦2-char-id⟧.current && ⟦2-char-id⟧ && (⟦2-char-id⟧.current.textContent = `${(lB/1e3).toFixed(1)}s`)
                                 }));
                                 return () => {
                                   ⟦2-char-id⟧()
```

</details>

<details>
<summary>Hunk 208 · Change · +1 / -1</summary>

```diff
@@ -6272,7 +6272,7 @@
                                     "--scale": ⟦2-char-id⟧
                                   },
                                   ...null !== ⟦2-char-id⟧ && {
-                                    "--rotation": `${GJ}deg`
+                                    "--rotation": `${uB}deg`
                                   }
                                 },
                                 children: [(0, ⟦2-char-id⟧.jsxs)("div", {
```

</details>

<details>
<summary>Hunk 209 · Change · +1 / -1</summary>

```diff
@@ -6300,7 +6300,7 @@
                                     })]
                                   }), (0, ⟦2-char-id⟧.jsx)("div", {
                                     className: "QTETimedClickCenterContent",
-                                    children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                                    children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                                       text: [{
                                         icon: ⟦2-char-id⟧
                                       }],
```

</details>

<details>
<summary>Hunk 210 · Change · +1 / -1</summary>

```diff
@@ -6311,7 +6311,7 @@
                                   })]
                                 }), (0, ⟦2-char-id⟧.jsxs)("div", {
                                   className: "QTETimedClickRightTextContainer",
-                                  children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                                  children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                                     text: ⟦2-char-id⟧,
                                     className: "QTETimedClickLabelText"
                                   }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("span", {
```

</details>

<details>
<summary>Hunk 211 · Change · +3 / -3</summary>

```diff
@@ -6331,15 +6331,15 @@
                                 ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(!1),
                                 ⟦2-char-id⟧ = ⟦2-char-id⟧.description,
                                 ⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.icon,
-                                ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.g)();
+                                ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)();
                               return (0, ⟦2-char-id⟧.useEffect)((() => {
                                 const ⟦2-char-id⟧ = ⟦2-char-id⟧.onFrame((() => {
                                   const ⟦2-char-id⟧ = ⟦2-char-id⟧.getState();
                                   if (!⟦2-char-id⟧.isActive) return;
                                   const ⟦2-char-id⟧ = ⟦2-char-id⟧.state;
                                   if (⟦2-char-id⟧.current) {
-                                    const ⟦2-char-id⟧ = 100 * (⟦2-char-id⟧.catchZonePosition - ⟦2-char-id⟧.PU / 2);
-                                    ⟦2-char-id⟧.current.style.left = `${JJ}%`, ⟦2-char-id⟧.current.style.width = 100 * ⟦2-char-id⟧.PU + "%", ⟦2-char-id⟧.isCatching !== ⟦2-char-id⟧.current && (⟦2-char-id⟧.current = ⟦2-char-id⟧.isCatching, ⟦2-char-id⟧.isCatching ? ⟦2-char-id⟧.current.classList.add("catching") : ⟦2-char-id⟧.current.classList.remove("catching"))
+                                    const ⟦2-char-id⟧ = 100 * (⟦2-char-id⟧.catchZonePosition - ⟦2-char-id⟧.OV / 2);
+                                    ⟦2-char-id⟧.current.style.left = `${BB}%`, ⟦2-char-id⟧.current.style.width = 100 * ⟦2-char-id⟧.OV + "%", ⟦2-char-id⟧.isCatching !== ⟦2-char-id⟧.current && (⟦2-char-id⟧.current = ⟦2-char-id⟧.isCatching, ⟦2-char-id⟧.isCatching ? ⟦2-char-id⟧.current.classList.add("catching") : ⟦2-char-id⟧.current.classList.remove("catching"))
                                   }
                                   ⟦2-char-id⟧.current && (⟦2-char-id⟧.current.style.left = 100 * ⟦2-char-id⟧.moverPosition + "%"), ⟦2-char-id⟧.current && (⟦2-char-id⟧.current.value = ⟦2-char-id⟧.progress)
                                 }));
```

</details>

<details>
<summary>Hunk 212 · Change · +1 / -1</summary>

```diff
@@ -6350,7 +6350,7 @@
                                 className: "QTEGravityBar",
                                 children: [(0, ⟦2-char-id⟧.jsx)("div", {
                                   className: "QTEGravityBarDescription",
-                                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                                     text: ⟦2-char-id⟧
                                   })
                                 }), (0, ⟦2-char-id⟧.jsx)("progress", {
```

</details>

<details>
<summary>Hunk 213 · Change · +1 / -1</summary>

```diff
@@ -6366,7 +6366,7 @@
                                     className: "QTEGravityBarMover",
                                     ref: ⟦2-char-id⟧,
                                     children: (0, ⟦2-char-id⟧.jsx)("span", {
-                                      children: ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                                      children: ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                                         text: [{
                                           icon: ⟦2-char-id⟧,
                                           style: {
```

</details>

<details>
<summary>Hunk 214 · Change · +4 / -4</summary>

```diff
@@ -6379,22 +6379,22 @@
                                 })]
                               })
                             }));
-                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(535);
+                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(572);
                           const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.memo)((function(⟦2-char-id⟧) {
                               let {
                                 initialParameters: ⟦2-char-id⟧
                               } = ⟦2-char-id⟧;
                               const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null),
                                 ⟦2-char-id⟧ = ⟦2-char-id⟧.label,
-                                ⟦2-char-id⟧ = ⟦2-char-id⟧.TU,
+                                ⟦2-char-id⟧ = ⟦2-char-id⟧.iV,
                                 {
                                   icon: ⟦2-char-id⟧,
                                   scale: ⟦2-char-id⟧,
                                   rotation: ⟦2-char-id⟧
-                                } = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? cJ : {},
+                                } = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? TB : {},
                                 ⟦2-char-id⟧ = 100 * (.5 - ⟦2-char-id⟧ / 2),
                                 ⟦2-char-id⟧ = 100 * ⟦2-char-id⟧,
-                                ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.g)();
+                                ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)();
                               return (0, ⟦2-char-id⟧.useEffect)((() => {
                                 const ⟦2-char-id⟧ = ⟦2-char-id⟧.onFrame((() => {
                                   const ⟦2-char-id⟧ = ⟦2-char-id⟧.getState();
```

</details>

<details>
<summary>Hunk 215 · Change · +4 / -4</summary>

```diff
@@ -6408,14 +6408,14 @@
                               }), [⟦2-char-id⟧]), (0, ⟦2-char-id⟧.jsxs)("div", {
                                 className: "QTEPrecisionBarWrapper",
                                 style: {
-                                  ...!(0, ⟦2-char-id⟧.P)(⟦2-char-id⟧) && {
+                                  ...!(0, ⟦2-char-id⟧.M)(⟦2-char-id⟧) && {
                                     "--scale": ⟦2-char-id⟧
                                   },
-                                  ...!(0, ⟦2-char-id⟧.P)(⟦2-char-id⟧) && {
-                                    "--rotation": `${hJ}deg`
+                                  ...!(0, ⟦2-char-id⟧.M)(⟦2-char-id⟧) && {
+                                    "--rotation": `${kB}deg`
                                   }
                                 },
-                                children: [⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                                children: [⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                                   text: [{
                                     icon: ⟦2-char-id⟧
                                   }],
```

</details>

<details>
<summary>Hunk 216 · Change · +2 / -2</summary>

```diff
@@ -6425,8 +6425,8 @@
                                   children: [(0, ⟦2-char-id⟧.jsx)("div", {
                                     className: "QTEPrecisionBarSuccessZone",
                                     style: {
-                                      left: `${DJ}%`,
-                                      width: `${sJ}%`
+                                      left: `${LB}%`,
+                                      width: `${OB}%`
                                     }
                                   }), (0, ⟦2-char-id⟧.jsx)("div", {
                                     className: "QTEPrecisionBarMarker",
```

</details>

<details>
<summary>Hunk 217 · Change · +1 / -1</summary>

```diff
@@ -6434,7 +6434,7 @@
                                   })]
                                 }), (0, ⟦2-char-id⟧.jsx)("div", {
                                   className: "QTEPrecisionBarLabel",
-                                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                                     text: ⟦2-char-id⟧
                                   })
                                 })]
```

</details>

<details>
<summary>Hunk 218 · Change · +3 / -3</summary>

```diff
@@ -6445,10 +6445,10 @@
                                 initialParameters: ⟦2-char-id⟧
                               } = ⟦2-char-id⟧;
                               const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null),
-                                [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)((() => new Array(⟦2-char-id⟧.uU).fill("pending"))),
+                                [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)((() => new Array(⟦2-char-id⟧.tV).fill("pending"))),
                                 [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)((() => {
-                                  const ⟦2-char-id⟧ = ⟦2-char-id⟧.LU;
-                                  return (0, ⟦2-char-id⟧.P)(⟦2-char-id⟧) || ⟦2-char-id⟧ <= 0 ? [] : new Array(⟦2-char-id⟧).fill("pending")
+                                  const ⟦2-char-id⟧ = ⟦2-char-id⟧.MV;
+                                  return (0, ⟦2-char-id⟧.M)(⟦2-char-id⟧) || ⟦2-char-id⟧ <= 0 ? [] : new Array(⟦2-char-id⟧).fill("pending")
                                 })),
                                 ⟦2-char-id⟧ = ⟦2-char-id⟧.label,
                                 {
```

</details>

<details>
<summary>Hunk 219 · Change · +1 / -1</summary>

```diff
@@ -6457,7 +6457,7 @@
                                 ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(0),
                                 ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(0),
                                 ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)([]),
-                                ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.g)();
+                                ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)();
                               return (0, ⟦2-char-id⟧.useEffect)((() => {
                                 const ⟦2-char-id⟧ = ⟦2-char-id⟧.onFrame((() => {
                                   const ⟦2-char-id⟧ = ⟦2-char-id⟧.getState();
```

</details>

<details>
<summary>Hunk 220 · Change · +1 / -1</summary>

```diff
@@ -6481,7 +6481,7 @@
                                   }
                                   ⟦2-char-id⟧.successes === ⟦2-char-id⟧.current && ⟦2-char-id⟧.misses === ⟦2-char-id⟧.current || (⟦2-char-id⟧.current = ⟦2-char-id⟧.successes, ⟦2-char-id⟧.current = ⟦2-char-id⟧.misses, ⟦2-char-id⟧((⟦2-char-id⟧ => {
                                     const ⟦2-char-id⟧ = [...⟦2-char-id⟧];
-                                    for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.uU; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧ < ⟦2-char-id⟧.successes ? "success" : "pending";
+                                    for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.tV; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧ < ⟦2-char-id⟧.successes ? "success" : "pending";
                                     return ⟦2-char-id⟧
                                   })), ⟦2-char-id⟧((⟦2-char-id⟧ => {
                                     if (0 === ⟦2-char-id⟧.length) return ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 221 · Change · +1 / -1</summary>

```diff
@@ -6521,7 +6521,7 @@
                                     })]
                                   }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
                                     className: "QTERhythmClickCenterContent",
-                                    children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                                    children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                                       text: [{
                                         icon: ⟦2-char-id⟧
                                       }],
```

</details>

<details>
<summary>Hunk 222 · Change · +1 / -1</summary>

```diff
@@ -6535,7 +6535,7 @@
                                   }, ⟦2-char-id⟧)))
                                 }), (0, ⟦2-char-id⟧.jsx)("div", {
                                   className: "QTERhythmClickLabel",
-                                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                                     text: ⟦2-char-id⟧
                                   })
                                 })]
```

</details>

<details>
<summary>Hunk 223 · Change · +1 / -1</summary>

```diff
@@ -6578,7 +6578,7 @@
                               state: null,
                               isActive: !1
                             });
-                            return (0, ⟦2-char-id⟧.i)("qteStateUpdated", (⟦2-char-id⟧ => {
+                            return (0, ⟦2-char-id⟧.e)("qteStateUpdated", (⟦2-char-id⟧ => {
                               ⟦2-char-id⟧(⟦2-char-id⟧)
                             })), ⟦2-char-id⟧.isActive && ⟦2-char-id⟧.type ? (0, ⟦2-char-id⟧.jsx)("div", {
                               className: "QTE",
```

</details>

<details>
<summary>Hunk 224 · Change · +10 / -10</summary>

```diff
@@ -6588,30 +6588,30 @@
                               })
                             }) : null
                           }))
-                        }, 4164: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+                        }, 4162: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
                           ⟦2-char-id⟧.d(⟦2-char-id⟧, {
                             c: () => ⟦2-char-id⟧,
-                            g: () => ⟦2-char-id⟧
+                            f: () => ⟦2-char-id⟧
                           });
-                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(47),
-                            ⟦2-char-id⟧ = ⟦2-char-id⟧(1192),
-                            ⟦2-char-id⟧ = ⟦2-char-id⟧(4171);
+                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
+                            ⟦2-char-id⟧ = ⟦2-char-id⟧(1185),
+                            ⟦2-char-id⟧ = ⟦2-char-id⟧(4167);
                           const ⟦2-char-id⟧ = {
                               getState: () => ⟦2-char-id⟧.c.getCurrentState(),
-                              onFrame: ⟦2-char-id⟧.n
+                              onFrame: ⟦2-char-id⟧.m
                             },
                             ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.createContext)(⟦2-char-id⟧);
 
                           function ⟦2-char-id⟧() {
                             return (0, ⟦2-char-id⟧.useContext)(⟦2-char-id⟧)
                           }
-                        }, 4242: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+                        }, 4240: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
                           ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-                            d: () => ⟦2-char-id⟧,
+                            e: () => ⟦2-char-id⟧,
                             f: () => ⟦2-char-id⟧
                           });
-                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(4245),
-                            ⟦2-char-id⟧ = ⟦2-char-id⟧(227);
+                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(4247),
+                            ⟦2-char-id⟧ = ⟦2-char-id⟧(270);
                           const ⟦2-char-id⟧ = 120,
                             ⟦2-char-id⟧ = 260,
                             ⟦2-char-id⟧ = 1.15,
```

</details>

<details>
<summary>Hunk 225 · Change · +5 / -5</summary>

```diff
@@ -6622,13 +6622,13 @@
                             ⟦2-char-id⟧ = .95,
                             ⟦2-char-id⟧ = 8,
                             ⟦2-char-id⟧ = "[\"')\\]\u300d\u300f\uff09]*",
-                            ⟦2-char-id⟧ = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${nJ}$`),
-                            ⟦2-char-id⟧ = new RegExp(`[?\uff1f]${nJ}$`),
-                            ⟦2-char-id⟧ = new RegExp(`[!\uff01]${nJ}$`),
+                            ⟦2-char-id⟧ = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${DB}$`),
+                            ⟦2-char-id⟧ = new RegExp(`[?\uff1f]${DB}$`),
+                            ⟦2-char-id⟧ = new RegExp(`[!\uff01]${DB}$`),
                             ⟦2-char-id⟧ = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                             ⟦2-char-id⟧ = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
-                            ⟦2-char-id⟧ = new RegExp(`[${vJ}]`),
-                            ⟦2-char-id⟧ = new RegExp(`[${vJ}]|[^${vJ}]+`, "g"),
+                            ⟦2-char-id⟧ = new RegExp(`[${mB}]`),
+                            ⟦2-char-id⟧ = new RegExp(`[${mB}]|[^${mB}]+`, "g"),
                             ⟦2-char-id⟧ = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 226 · Change · +2 / -2</summary>

```diff
@@ -6643,10 +6643,10 @@
                             const ⟦2-char-id⟧ = ⟦2-char-id⟧.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                               ⟦2-char-id⟧ = ⟦2-char-id⟧.replace(/[^0-9]/g, "");
                             if (⟦2-char-id⟧.length > 0 && !/\p{L}/u.test(⟦2-char-id⟧)) return Math.min(⟦2-char-id⟧.length, 4);
-                            const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.match(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? cJ : [];
+                            const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.match(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? TB : [];
                             if (0 === ⟦2-char-id⟧.length) {
                               var ⟦2-char-id⟧, ⟦2-char-id⟧;
-                              const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.match(/\p{L}/gu)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? eJ : 0;
+                              const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.match(/\p{L}/gu)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? pB : 0;
                               return 0 === ⟦2-char-id⟧ ? 0 : Math.min(Math.max(1, Math.round(⟦2-char-id⟧ / 2.5)), ⟦2-char-id⟧)
                             }
                             const ⟦2-char-id⟧ = ⟦2-char-id⟧.replace(/[^\p{L}]/gu, ""),
```

</details>

<details>
<summary>Hunk 227 · Change · +3 / -3</summary>

```diff
@@ -6665,11 +6665,11 @@
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
                             var ⟦2-char-id⟧;
-                            const ⟦2-char-id⟧ = ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧),
-                              ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.syllableMs) && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧.c,
+                            const ⟦2-char-id⟧ = ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧),
+                              ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.syllableMs) && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧.b,
                               ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
                                 const ⟦2-char-id⟧ = [];
-                                for (const ⟦2-char-id⟧ of (0, ⟦2-char-id⟧.Sb)(⟦2-char-id⟧))
+                                for (const ⟦2-char-id⟧ of (0, ⟦2-char-id⟧.hc)(⟦2-char-id⟧))
                                   if ("string" === typeof ⟦2-char-id⟧)
                                     for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.split(/(\s+)/)) {
                                       if ("" === ⟦2-char-id⟧) continue;
```

</details>

<details>
<summary>Hunk 228 · Change · +1 / -1</summary>

```diff
@@ -6689,7 +6689,7 @@
                                         continue
                                       }
                                       let ⟦2-char-id⟧ = !0;
-                                      for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.match(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? ZJ : []) {
+                                      for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.match(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? dB : []) {
                                         var ⟦2-char-id⟧;
                                         const ⟦2-char-id⟧ = ⟦2-char-id⟧.at(-1);
                                         ⟦2-char-id⟧ || "word" !== (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.kind) || ⟦2-char-id⟧.test(⟦2-char-id⟧) || /[\p{L}\p{N}]/u.test(⟦2-char-id⟧) ? (⟦2-char-id⟧ || ⟦2-char-id⟧.push({
```

</details>

<details>
<summary>Hunk 229 · Change · +1 / -1</summary>

```diff
@@ -6716,7 +6716,7 @@
                             let ⟦2-char-id⟧ = 0;
                             for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
                               var ⟦2-char-id⟧, ⟦2-char-id⟧;
-                              const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.at(-1)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.text) && void 0 !== ⟦2-char-id⟧ ? wJ : "",
+                              const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.at(-1)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.text) && void 0 !== ⟦2-char-id⟧ ? KB : "",
                                 ⟦2-char-id⟧ = ⟦2-char-id⟧.test(⟦2-char-id⟧),
                                 ⟦2-char-id⟧ = ⟦2-char-id⟧.test(⟦2-char-id⟧),
                                 ⟦2-char-id⟧ = ⟦2-char-id⟧.map((⟦2-char-id⟧ => "word" === ⟦2-char-id⟧.kind ? ⟦2-char-id⟧(⟦2-char-id⟧.text) : 1)),
```

</details>

<details>
<summary>Hunk 230 · Change · +1 / -1</summary>

```diff
@@ -6730,7 +6730,7 @@
                                     intonation: ⟦2-char-id⟧
                                   } = ⟦2-char-id⟧;
                                   let ⟦2-char-id⟧ = ⟦2-char-id⟧ > 0 ? -⟦2-char-id⟧.declineSemitones * (⟦2-char-id⟧ / ⟦2-char-id⟧) : 0;
-                                  ⟦2-char-id⟧ += ⟦2-char-id⟧(`${yJ(xJ.text)}|${UJ}`) * ⟦2-char-id⟧.variationSemitones;
+                                  ⟦2-char-id⟧ += ⟦2-char-id⟧(`${MB(EB.text)}|${yB}`) * ⟦2-char-id⟧.variationSemitones;
                                   const ⟦2-char-id⟧ = Math.min(1, ⟦2-char-id⟧.variationSemitones);
                                   let ⟦2-char-id⟧ = ⟦2-char-id⟧.glideSemitones,
                                     ⟦2-char-id⟧ = 1;
```

</details>

<details>
<summary>Hunk 231 · Change · +2 / -2</summary>

```diff
@@ -6742,11 +6742,11 @@
                                     level: ⟦2-char-id⟧
                                   })
                                 }
-                                ⟦2-char-id⟧ += ⟦2-char-id⟧ * ⟦2-char-id⟧ + (⟦2-char-id⟧.test(⟦2-char-id⟧.text) ? XJ : ⟦2-char-id⟧.test(⟦2-char-id⟧.text) ? eJ : 0)
+                                ⟦2-char-id⟧ += ⟦2-char-id⟧ * ⟦2-char-id⟧ + (⟦2-char-id⟧.test(⟦2-char-id⟧.text) ? lB : ⟦2-char-id⟧.test(⟦2-char-id⟧.text) ? pB : 0)
                               }
                             }
                             return {
-                              pieces: ⟦2-char-id⟧.map((⟦2-char-id⟧ => "space" === ⟦2-char-id⟧.kind ? JJ : "icon" === ⟦2-char-id⟧.kind ? {
+                              pieces: ⟦2-char-id⟧.map((⟦2-char-id⟧ => "space" === ⟦2-char-id⟧.kind ? BB : "icon" === ⟦2-char-id⟧.kind ? {
                                 kind: "icon",
                                 icon: ⟦2-char-id⟧.text,
                                 delayMs: ⟦2-char-id⟧.delayMs
```

</details>

<details>
<summary>Hunk 232 · Change · +10 / -10</summary>

```diff
@@ -6758,19 +6758,19 @@
                               blips: ⟦2-char-id⟧
                             }
                           }
-                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(1086),
-                            ⟦2-char-id⟧ = ⟦2-char-id⟧(1151),
-                            ⟦2-char-id⟧ = ⟦2-char-id⟧(1712);
+                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(1078),
+                            ⟦2-char-id⟧ = ⟦2-char-id⟧(1133),
+                            ⟦2-char-id⟧ = ⟦2-char-id⟧(1685);
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧) {
                             if ("string" === typeof ⟦2-char-id⟧) return ⟦2-char-id⟧;
-                            const ⟦2-char-id⟧ = ⟦2-char-id⟧.e.get().getCurrentLanguageCode();
-                            return (0, ⟦2-char-id⟧.t)(⟦2-char-id⟧, ⟦2-char-id⟧.translationKey, (0, ⟦2-char-id⟧.s)(⟦2-char-id⟧.params, ⟦2-char-id⟧.d.shown))
-                          }
-
-                          function ⟦2-char-id⟧(⟦2-char-id⟧) {
-                            const ⟦2-char-id⟧ = void 0 === ⟦2-char-id⟧.voice ? null : (0, ⟦2-char-id⟧.k)(⟦2-char-id⟧.voice),
-                              ⟦2-char-id⟧ = ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧);
+                            const ⟦2-char-id⟧ = ⟦2-char-id⟧.f.get().getCurrentLanguageCode();
+                            return (0, ⟦2-char-id⟧.r)(⟦2-char-id⟧, ⟦2-char-id⟧.translationKey, (0, ⟦2-char-id⟧.o)(⟦2-char-id⟧.params, ⟦2-char-id⟧.c.shown))
+                          }
+
+                          function ⟦2-char-id⟧(⟦2-char-id⟧) {
+                            const ⟦2-char-id⟧ = void 0 === ⟦2-char-id⟧.voice ? null : (0, ⟦2-char-id⟧.j)(⟦2-char-id⟧.voice),
+                              ⟦2-char-id⟧ = ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧);
                             return {
                               plan: ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧.line), ⟦2-char-id⟧),
                               synth: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 233 · Change · +5 / -5</summary>

```diff
@@ -6786,13 +6786,13 @@
                             }
                             return ⟦2-char-id⟧.length > 0 && ⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧
                           }
-                        }, 4254: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+                        }, 4252: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
                           ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-                            c: () => ⟦2-char-id⟧,
-                            e: () => ⟦2-char-id⟧
+                            e: () => ⟦2-char-id⟧,
+                            f: () => ⟦2-char-id⟧
                           });
-                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(4259),
-                            ⟦2-char-id⟧ = ⟦2-char-id⟧(13);
+                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(4258),
+                            ⟦2-char-id⟧ = ⟦2-char-id⟧(21);
                           const ⟦2-char-id⟧ = .25,
                             ⟦2-char-id⟧ = .85,
                             ⟦2-char-id⟧ = .02,
```

</details>

<details>
<summary>Hunk 234 · Change · +2 / -2</summary>

```diff
@@ -6856,13 +6856,13 @@
                               null === (⟦2-char-id⟧ = ⟦2-char-id⟧._autoSuspend) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.call(⟦2-char-id⟧)
                             }))
                           }
-                        }, 4259: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+                        }, 4258: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
                           ⟦2-char-id⟧.d(⟦2-char-id⟧, {
                             Howl: () => ⟦2-char-id⟧.Howl,
                             b: () => ⟦2-char-id⟧.Howler,
                             readyAudioContext: () => ⟦2-char-id⟧
                           });
-                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(4267);
+                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(4262);
 
                           function ⟦2-char-id⟧() {
                             const ⟦2-char-id⟧ = ⟦2-char-id⟧.Howler;
```

</details>

<details>
<summary>Hunk 235 · Change · +6 / -6</summary>

```diff
@@ -6870,22 +6870,22 @@
                             (⟦2-char-id⟧.volume(), ⟦2-char-id⟧.ctx && ⟦2-char-id⟧.autoUnlock) && (null === (⟦2-char-id⟧ = ⟦2-char-id⟧._unlockAudio) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.call(⟦2-char-id⟧))
                           }
                           ⟦2-char-id⟧.Howler._mobileUnloaded = !0
-                        }, 4275: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+                        }, 4265: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
                           function ⟦2-char-id⟧(⟦2-char-id⟧) {
                             return {
                               notAfter: ⟦2-char-id⟧
                             }
                           }
                           ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+                            B: () => ⟦2-char-id⟧,
+                            b: () => ⟦2-char-id⟧,
                             d: () => ⟦2-char-id⟧,
                             h: () => ⟦2-char-id⟧,
                             j: () => ⟦2-char-id⟧,
-                            k: () => ⟦2-char-id⟧,
-                            m: () => ⟦2-char-id⟧,
-                            o: () => ⟦2-char-id⟧,
+                            l: () => ⟦2-char-id⟧,
                             p: () => ⟦2-char-id⟧,
-                            q: () => ⟦2-char-id⟧,
-                            u: () => ⟦2-char-id⟧
+                            t: () => ⟦2-char-id⟧,
+                            x: () => ⟦2-char-id⟧
                           });
                           const ⟦2-char-id⟧ = ⟦2-char-id⟧("\\w$."),
                             ⟦2-char-id⟧ = ⟦2-char-id⟧("\\w.,");
```

</details>

<details>
<summary>Hunk 236 · Change · +1 / -1</summary>

```diff
@@ -6899,7 +6899,7 @@
                           }
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-                            return ⟦2-char-id⟧.index > 0 && new RegExp(`[${cJ}]`).test(⟦2-char-id⟧.input[⟦2-char-id⟧.index - 1])
+                            return ⟦2-char-id⟧.index > 0 && new RegExp(`[${TB}]`).test(⟦2-char-id⟧.input[⟦2-char-id⟧.index - 1])
                           }
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 237 · Change · +2 / -2</summary>

```diff
@@ -6907,13 +6907,13 @@
                               return void 0 !== ⟦2-char-id⟧ && "function" !== typeof ⟦2-char-id⟧
                             }(⟦2-char-id⟧) ? function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
                               const ⟦2-char-id⟧ = ⟦2-char-id⟧.flags.replace(/[gy]/g, ""),
-                                ⟦2-char-id⟧ = new RegExp(`[^${ZJ}](?:${cJ.source})`, `${FJ}g`),
+                                ⟦2-char-id⟧ = new RegExp(`[^${dB}](?:${TB.source})`, `${VB}g`),
                                 ⟦2-char-id⟧ = [],
                                 ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
                                   const ⟦2-char-id⟧ = ⟦2-char-id⟧.index + ⟦2-char-id⟧[0].length;
                                   return ("" === ⟦2-char-id⟧[0] ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) : ⟦2-char-id⟧) - 1
                                 },
-                                ⟦2-char-id⟧ = new RegExp(`(?:${cJ.source})`, `${FJ}y`).exec(⟦2-char-id⟧);
+                                ⟦2-char-id⟧ = new RegExp(`(?:${TB.source})`, `${VB}y`).exec(⟦2-char-id⟧);
                               if (⟦2-char-id⟧) {
                                 if (⟦2-char-id⟧.push(⟦2-char-id⟧), !⟦2-char-id⟧.global) return ⟦2-char-id⟧;
                                 ⟦2-char-id⟧.lastIndex = ⟦2-char-id⟧(⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 238 · Change · +1 / -1</summary>

```diff
@@ -6925,7 +6925,7 @@
                               }
                               return ⟦2-char-id⟧
                             }(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.notAfter) : function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-                              const ⟦2-char-id⟧ = new RegExp(⟦2-char-id⟧.source, `${cJ.flags.replace(/[gy]/g,"")}g`),
+                              const ⟦2-char-id⟧ = new RegExp(⟦2-char-id⟧.source, `${TB.flags.replace(/[gy]/g,"")}g`),
                                 ⟦2-char-id⟧ = [];
                               for (let ⟦2-char-id⟧ = ⟦2-char-id⟧.exec(⟦2-char-id⟧); ⟦2-char-id⟧; ⟦2-char-id⟧ = ⟦2-char-id⟧.exec(⟦2-char-id⟧))
                                 if (!⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧)) {
```

</details>

<details>
<summary>Hunk 239 · Change · +11 / -11</summary>

```diff
@@ -6952,25 +6952,25 @@
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
                             var ⟦2-char-id⟧;
-                            return ⟦2-char-id⟧ + (⟦2-char-id⟧.unicode && (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.codePointAt(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? FJ : 0) > 65535 ? 2 : 1)
-                          }
-                        }, 4220: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+                            return ⟦2-char-id⟧ + (⟦2-char-id⟧.unicode && (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.codePointAt(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? VB : 0) > 65535 ? 2 : 1)
+                          }
+                        }, 4218: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
                           ⟦2-char-id⟧.d(⟦2-char-id⟧, {
                             b: () => ⟦2-char-id⟧,
-                            d: () => ⟦2-char-id⟧,
                             e: () => ⟦2-char-id⟧,
-                            f: () => ⟦2-char-id⟧,
-                            j: () => ⟦2-char-id⟧,
-                            l: () => ⟦2-char-id⟧,
+                            g: () => ⟦2-char-id⟧,
+                            k: () => ⟦2-char-id⟧,
                             n: () => ⟦2-char-id⟧,
-                            o: () => ⟦2-char-id⟧,
+                            p: () => ⟦2-char-id⟧,
+                            q: () => ⟦2-char-id⟧,
                             r: () => ⟦2-char-id⟧,
-                            u: () => ⟦2-char-id⟧
+                            v: () => ⟦2-char-id⟧,
+                            z: () => ⟦2-char-id⟧
                           });
-                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(1475);
+                          var ⟦2-char-id⟧ = ⟦2-char-id⟧(1477);
                           const ⟦2-char-id⟧ = 24⟦2-char-id⟧,
                             ⟦2-char-id⟧ = "/docs/llms.txt",
-                            ⟦2-char-id⟧ = `${FJ.e}${eJ}`,
+                            ⟦2-char-id⟧ = `${VB.c}${pB}`,
                             ⟦2-char-id⟧ = "/llms.txt",
                             ⟦2-char-id⟧ = "/docs/llms-full.txt";
 
```

</details>

<details>
<summary>Hunk 240 · Change · +2 / -2</summary>

```diff
@@ -6979,11 +6979,11 @@
                           }
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧) {
-                            return `/docs/${jJ(JJ)}.md`
+                            return `/docs/${gB(BB)}.md`
                           }
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-                            return `/docs/${jJ(JJ)}/${cJ+1}.md`
+                            return `/docs/${gB(BB)}/${TB+1}.md`
                           }
                           const ⟦2-char-id⟧ = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;
 
```

</details>

<details>
<summary>Hunk 241 · Change · +7 / -7</summary>

```diff
@@ -7004,15 +7004,15 @@
                           }
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧) {
-                            return `/docsHtml/${jJ(JJ)}.html`
-                          }
-                        }, 4245: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+                            return `/docsHtml/${gB(BB)}.html`
+                          }
+                        }, 4247: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
                           ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-                            c: () => ⟦2-char-id⟧,
+                            b: () => ⟦2-char-id⟧,
                             d: () => ⟦2-char-id⟧,
-                            f: () => ⟦2-char-id⟧,
-                            h: () => ⟦2-char-id⟧,
-                            k: () => ⟦2-char-id⟧
+                            e: () => ⟦2-char-id⟧,
+                            i: () => ⟦2-char-id⟧,
+                            j: () => ⟦2-char-id⟧
                           });
                           const ⟦2-char-id⟧ = ["sine", "triangle", "square", "sawtooth"],
                             ⟦2-char-id⟧ = 55,
```

</details>

<details>
<summary>Hunk 242 · Change · +1 / -1</summary>

```diff
@@ -7156,7 +7156,7 @@
                             };
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧) {
-                            return "string" !== typeof ⟦2-char-id⟧ ? JJ : Object.hasOwn(⟦2-char-id⟧, ⟦2-char-id⟧) ? ⟦2-char-id⟧[⟦2-char-id⟧] : null
+                            return "string" !== typeof ⟦2-char-id⟧ ? BB : Object.hasOwn(⟦2-char-id⟧, ⟦2-char-id⟧) ? ⟦2-char-id⟧[⟦2-char-id⟧] : null
                           }
 
                           function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

</details>

<details>
<summary><code>bundles/staging.bloxd.io/chunks/js/70.js</code> · modified · +144 / -144</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +1 / -1</summary>

```diff
@@ -1,7 +1,7 @@
 export const ⟦2-char-id⟧ = 70;
 export const ids = [70];
 export const modules = {
-  4119: ⟦2-char-id⟧ => {
+  4108: ⟦2-char-id⟧ => {
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       return ⟦2-char-id⟧ instanceof Map ? ⟦2-char-id⟧.clear = ⟦2-char-id⟧.delete = ⟦2-char-id⟧.set = function() {
         throw new Error("map is read-only")
```

</details>

<details>
<summary>Hunk 2 · Change · +3 / -3</summary>

```diff
@@ -51,9 +51,9 @@
           if (⟦2-char-id⟧.startsWith("language:")) return ⟦2-char-id⟧.replace("language:", "language-");
           if (⟦2-char-id⟧.includes(".")) {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.split(".");
-            return [`${ZJ}${cJ.shift()}`, ...⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => `${JJ}${"_".repeat(cJ+1)}`))].join(" ")
-          }
-          return `${ZJ}${JJ}`
+            return [`${dB}${TB.shift()}`, ...⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => `${BB}${"_".repeat(TB+1)}`))].join(" ")
+          }
+          return `${dB}${BB}`
         })(⟦2-char-id⟧.scope, {
           prefix: this.classPrefix
         });
```

</details>

<details>
<summary>Hunk 3 · Change · +1 / -1</summary>

```diff
@@ -66,7 +66,7 @@
         return this.buffer
       }
       span(⟦2-char-id⟧) {
-        this.buffer += `<span class="${JJ}">`
+        this.buffer += `<span class="${BB}">`
       }
     }
     const ⟦2-char-id⟧ = function() {
```

</details>

<details>
<summary>Hunk 4 · Change · +2 / -2</summary>

```diff
@@ -78,13 +78,13 @@
     };
     class ⟦2-char-id⟧ {
       constructor() {
-        this.Wm = ⟦2-char-id⟧(), this.stack = [this.Wm]
+        this.Tv = ⟦2-char-id⟧(), this.stack = [this.Tv]
       }
       get top() {
         return this.stack[this.stack.length - 1]
       }
       get root() {
-        return this.Wm
+        return this.Tv
       }
       add(⟦2-char-id⟧) {
         this.top.children.push(⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 5 · Change · +2 / -2</summary>

```diff
@@ -102,10 +102,10 @@
         for (; this.closeNode(););
       }
       toJSON() {
-        return JSON.stringify(this.Wm, null, 4)
+        return JSON.stringify(this.Tv, null, 4)
       }
       walk(⟦2-char-id⟧) {
-        return this.constructor._walk(⟦2-char-id⟧, this.Wm)
+        return this.constructor._walk(⟦2-char-id⟧, this.Tv)
       }
       static _walk(⟦2-char-id⟧, ⟦2-char-id⟧) {
         return "string" === typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧.addText(⟦2-char-id⟧) : ⟦2-char-id⟧.children && (⟦2-char-id⟧.openNode(⟦2-char-id⟧), ⟦2-char-id⟧.children.forEach((⟦2-char-id⟧ => this._walk(⟦2-char-id⟧, ⟦2-char-id⟧))), ⟦2-char-id⟧.closeNode(⟦2-char-id⟧)), ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 6 · Change · +1 / -1</summary>

```diff
@@ -131,7 +131,7 @@
       }
       __addSublanguage(⟦2-char-id⟧, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.root;
-        ⟦2-char-id⟧ && (⟦2-char-id⟧.scope = `language:${cJ}`), this.add(⟦2-char-id⟧)
+        ⟦2-char-id⟧ && (⟦2-char-id⟧.scope = `language:${TB}`), this.add(⟦2-char-id⟧)
       }
       toHTML() {
         return new ⟦2-char-id⟧(this, this.options).value()
```

</details>

<details>
<summary>Hunk 7 · Change · +1 / -1</summary>

```diff
@@ -142,7 +142,7 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return ⟦2-char-id⟧ ? "string" === typeof ⟦2-char-id⟧ ? JJ : ⟦2-char-id⟧.source : null
+      return ⟦2-char-id⟧ ? "string" === typeof ⟦2-char-id⟧ ? BB : ⟦2-char-id⟧.source : null
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 8 · Change · +1 / -1</summary>

```diff
@@ -194,7 +194,7 @@
           ⟦2-char-id⟧ += ⟦2-char-id⟧.substring(0, ⟦2-char-id⟧.index), ⟦2-char-id⟧ = ⟦2-char-id⟧.substring(⟦2-char-id⟧.index + ⟦2-char-id⟧[0].length), "\\" === ⟦2-char-id⟧[0][0] && ⟦2-char-id⟧[1] ? ⟦2-char-id⟧ += "\\" + String(Number(⟦2-char-id⟧[1]) + ⟦2-char-id⟧) : (⟦2-char-id⟧ += ⟦2-char-id⟧[0], "(" === ⟦2-char-id⟧[0] && ⟦2-char-id⟧++)
         }
         return ⟦2-char-id⟧
-      })).map((⟦2-char-id⟧ => `(${JJ})`)).join(⟦2-char-id⟧)
+      })).map((⟦2-char-id⟧ => `(${BB})`)).join(⟦2-char-id⟧)
     }
     const ⟦2-char-id⟧ = "[a-zA-Z]\\w*",
       ⟦2-char-id⟧ = "[a-zA-Z_]\\w*",
```

</details>

<details>
<summary>Hunk 9 · Change · +3 / -3</summary>

```diff
@@ -202,19 +202,19 @@
       ⟦2-char-id⟧ = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
       ⟦2-char-id⟧ = "\\b(0b[01]+)",
       ⟦2-char-id⟧ = {
-        Fs: "\\\\[\\s\\S]",
+        tO: "\\\\[\\s\\S]",
         relevance: 0
       },
       ⟦2-char-id⟧ = {
         scope: "string",
-        Fs: "'",
+        tO: "'",
         end: "'",
         illegal: "\\n",
         contains: [⟦2-char-id⟧]
       },
       ⟦2-char-id⟧ = {
         scope: "string",
-        Fs: '"',
+        tO: '"',
         end: '"',
         illegal: "\\n",
         contains: [⟦2-char-id⟧]
```

</details>

<details>
<summary>Hunk 10 · Change · +3 / -3</summary>

```diff
@@ -222,20 +222,20 @@
       ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧({
           scope: "comment",
-          Fs: ⟦2-char-id⟧,
+          tO: ⟦2-char-id⟧,
           end: ⟦2-char-id⟧,
           contains: []
         }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
         ⟦2-char-id⟧.contains.push({
           scope: "doctag",
-          Fs: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
+          tO: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
           end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
           excludeBegin: !0,
           relevance: 0
         });
         const ⟦2-char-id⟧ = ⟦2-char-id⟧("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
         return ⟦2-char-id⟧.contains.push({
-          Fs: ⟦2-char-id⟧(/[ ]+/, "(", ⟦2-char-id⟧, /[.]?[:]?([.][ ]|[ ])/, "){3}")
+          tO: ⟦2-char-id⟧(/[ ]+/, "(", ⟦2-char-id⟧, /[.]?[:]?([.][ ]|[ ])/, "){3}")
         }), ⟦2-char-id⟧
       },
       ⟦2-char-id⟧ = ⟦2-char-id⟧("//", "$"),
```

</details>

<details>
<summary>Hunk 11 · Change · +5 / -5</summary>

```diff
@@ -243,25 +243,25 @@
       ⟦2-char-id⟧ = ⟦2-char-id⟧("#", "$"),
       ⟦2-char-id⟧ = {
         scope: "number",
-        Fs: ⟦2-char-id⟧,
+        tO: ⟦2-char-id⟧,
         relevance: 0
       },
       ⟦2-char-id⟧ = {
         scope: "number",
-        Fs: ⟦2-char-id⟧,
+        tO: ⟦2-char-id⟧,
         relevance: 0
       },
       ⟦2-char-id⟧ = {
         scope: "number",
-        Fs: ⟦2-char-id⟧,
+        tO: ⟦2-char-id⟧,
         relevance: 0
       },
       ⟦2-char-id⟧ = {
         scope: "regexp",
-        Fs: /\/(?=[^/\n]*\/)/,
+        tO: /\/(?=[^/\n]*\/)/,
         end: /\/[gimuy]*/,
         contains: [⟦2-char-id⟧, {
-          Fs: /\[/,
+          tO: /\[/,
           end: /\]/,
           relevance: 0,
           contains: [⟦2-char-id⟧]
```

</details>

<details>
<summary>Hunk 12 · Change · +3 / -3</summary>

```diff
@@ -269,16 +269,16 @@
       },
       ⟦2-char-id⟧ = {
         scope: "title",
-        Fs: ⟦2-char-id⟧,
+        tO: ⟦2-char-id⟧,
         relevance: 0
       },
       ⟦2-char-id⟧ = {
         scope: "title",
-        Fs: ⟦2-char-id⟧,
+        tO: ⟦2-char-id⟧,
         relevance: 0
       },
       ⟦2-char-id⟧ = {
-        Fs: "\\.\\s*" + ⟦2-char-id⟧,
+        tO: "\\.\\s*" + ⟦2-char-id⟧,
         relevance: 0
       };
     var ⟦2-char-id⟧ = Object.freeze({
```

</details>

<details>
<summary>Hunk 13 · Change · +1 / -1</summary>

```diff
@@ -309,7 +309,7 @@
       NUMBER_MODE: ⟦2-char-id⟧,
       NUMBER_RE: ⟦2-char-id⟧,
       PHRASAL_WORDS_MODE: {
-        Fs: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
+        tO: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
       },
       QUOTE_STRING_MODE: ⟦2-char-id⟧,
       REGEXP_MODE: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 14 · Change · +2 / -2</summary>

```diff
@@ -317,9 +317,9 @@
       SHEBANG: function() {
         let ⟦2-char-id⟧ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
         const ⟦2-char-id⟧ = /^#![ ]*\//;
-        return ⟦2-char-id⟧.binary && (⟦2-char-id⟧.Fs = ⟦2-char-id⟧(⟦2-char-id⟧, /.*\b/, ⟦2-char-id⟧.binary, /\b.*/)), ⟦2-char-id⟧({
+        return ⟦2-char-id⟧.binary && (⟦2-char-id⟧.tO = ⟦2-char-id⟧(⟦2-char-id⟧, /.*\b/, ⟦2-char-id⟧.binary, /\b.*/)), ⟦2-char-id⟧({
           scope: "meta",
-          Fs: ⟦2-char-id⟧,
+          tO: ⟦2-char-id⟧,
           end: /$/,
           relevance: 0,
           "on:begin": (⟦2-char-id⟧, ⟦2-char-id⟧) => {
```

</details>

<details>
<summary>Hunk 15 · Change · +1 / -1</summary>

```diff
@@ -341,7 +341,7 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      ⟦2-char-id⟧ && ⟦2-char-id⟧.beginKeywords && (⟦2-char-id⟧.Fs = "\\b(" + ⟦2-char-id⟧.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", ⟦2-char-id⟧.__beforeBegin = ⟦2-char-id⟧, ⟦2-char-id⟧.keywords = ⟦2-char-id⟧.keywords || ⟦2-char-id⟧.beginKeywords, delete ⟦2-char-id⟧.beginKeywords, void 0 === ⟦2-char-id⟧.relevance && (⟦2-char-id⟧.relevance = 0))
+      ⟦2-char-id⟧ && ⟦2-char-id⟧.beginKeywords && (⟦2-char-id⟧.tO = "\\b(" + ⟦2-char-id⟧.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", ⟦2-char-id⟧.__beforeBegin = ⟦2-char-id⟧, ⟦2-char-id⟧.keywords = ⟦2-char-id⟧.keywords || ⟦2-char-id⟧.beginKeywords, delete ⟦2-char-id⟧.beginKeywords, void 0 === ⟦2-char-id⟧.relevance && (⟦2-char-id⟧.relevance = 0))
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 16 · Change · +2 / -2</summary>

```diff
@@ -350,8 +350,8 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       if (⟦2-char-id⟧.match) {
-        if (⟦2-char-id⟧.Fs || ⟦2-char-id⟧.end) throw new Error("begin & end are not supported with match");
-        ⟦2-char-id⟧.Fs = ⟦2-char-id⟧.match, delete ⟦2-char-id⟧.match
+        if (⟦2-char-id⟧.tO || ⟦2-char-id⟧.end) throw new Error("begin & end are not supported with match");
+        ⟦2-char-id⟧.tO = ⟦2-char-id⟧.match, delete ⟦2-char-id⟧.match
       }
     }
 
```

</details>

<details>
<summary>Hunk 17 · Change · +1 / -1</summary>

```diff
@@ -364,7 +364,7 @@
         const ⟦2-char-id⟧ = Object.assign({}, ⟦2-char-id⟧);
         Object.keys(⟦2-char-id⟧).forEach((⟦2-char-id⟧ => {
           delete ⟦2-char-id⟧[⟦2-char-id⟧]
-        })), ⟦2-char-id⟧.keywords = ⟦2-char-id⟧.keywords, ⟦2-char-id⟧.Fs = ⟦2-char-id⟧(⟦2-char-id⟧.beforeMatch, ⟦2-char-id⟧(⟦2-char-id⟧.Fs)), ⟦2-char-id⟧.starts = {
+        })), ⟦2-char-id⟧.keywords = ⟦2-char-id⟧.keywords, ⟦2-char-id⟧.tO = ⟦2-char-id⟧(⟦2-char-id⟧.beforeMatch, ⟦2-char-id⟧(⟦2-char-id⟧.tO)), ⟦2-char-id⟧.starts = {
           relevance: 0,
           contains: [Object.assign(⟦2-char-id⟧, {
             endsParent: !0
```

</details>

<details>
<summary>Hunk 18 · Change · +2 / -2</summary>

```diff
@@ -399,10 +399,10 @@
       },
       ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
         for (var ⟦2-char-id⟧ = arguments.length, ⟦2-char-id⟧ = new Array(⟦2-char-id⟧ > 1 ? ⟦2-char-id⟧ - 1 : 0), ⟦2-char-id⟧ = 1; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧ - 1] = arguments[⟦2-char-id⟧];
-        console.log(`WARN: ${JJ}`, ...⟦2-char-id⟧)
+        console.log(`WARN: ${BB}`, ...⟦2-char-id⟧)
       },
       ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
-        ⟦2-char-id⟧[`${JJ}/${cJ}`] || (console.log(`Deprecated as of ${JJ}. ${cJ}`), ⟦2-char-id⟧[`${JJ}/${cJ}`] = !0)
+        ⟦2-char-id⟧[`${BB}/${TB}`] || (console.log(`Deprecated as of ${BB}. ${TB}`), ⟦2-char-id⟧[`${BB}/${TB}`] = !0)
       },
       ⟦2-char-id⟧ = new Error;
 
```

</details>

<details>
<summary>Hunk 19 · Change · +3 / -3</summary>

```diff
@@ -426,12 +426,12 @@
           _wrap: ⟦2-char-id⟧.endScope
         }),
         function(⟦2-char-id⟧) {
-          if (Array.isArray(⟦2-char-id⟧.Fs)) {
+          if (Array.isArray(⟦2-char-id⟧.tO)) {
             if (⟦2-char-id⟧.skip || ⟦2-char-id⟧.excludeBegin || ⟦2-char-id⟧.returnBegin) throw ⟦2-char-id⟧("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), ⟦2-char-id⟧;
             if ("object" !== typeof ⟦2-char-id⟧.beginScope || null === ⟦2-char-id⟧.beginScope) throw ⟦2-char-id⟧("beginScope must be object"), ⟦2-char-id⟧;
-            ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.Fs, {
+            ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.tO, {
               key: "beginScope"
-            }), ⟦2-char-id⟧.Fs = ⟦2-char-id⟧(⟦2-char-id⟧.Fs, {
+            }), ⟦2-char-id⟧.tO = ⟦2-char-id⟧(⟦2-char-id⟧.tO, {
               joinWith: ""
             })
           }
```

</details>

<details>
<summary>Hunk 20 · Change · +1 / -1</summary>

```diff
@@ -495,7 +495,7 @@
           this.regexIndex = 0
         }
         addRule(⟦2-char-id⟧, ⟦2-char-id⟧) {
-          this.rules.push([⟦2-char-id⟧, ⟦2-char-id⟧]), "Fs" === ⟦2-char-id⟧.type && this.count++
+          this.rules.push([⟦2-char-id⟧, ⟦2-char-id⟧]), "tO" === ⟦2-char-id⟧.type && this.count++
         }
         exec(⟦2-char-id⟧) {
           const ⟦2-char-id⟧ = this.getMatcher(this.regexIndex);
```

</details>

<details>
<summary>Hunk 21 · Change · +1 / -1</summary>

```diff
@@ -516,7 +516,7 @@
           if (⟦2-char-id⟧.isCompiled) return ⟦2-char-id⟧;
           [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧].forEach((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧))), ⟦2-char-id⟧.compilerExtensions.forEach((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧))), ⟦2-char-id⟧.__beforeBegin = null, [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧].forEach((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧))), ⟦2-char-id⟧.isCompiled = !0;
           let ⟦2-char-id⟧ = null;
-          return "object" === typeof ⟦2-char-id⟧.keywords && ⟦2-char-id⟧.keywords.$pattern && (⟦2-char-id⟧.keywords = Object.assign({}, ⟦2-char-id⟧.keywords), ⟦2-char-id⟧ = ⟦2-char-id⟧.keywords.$pattern, delete ⟦2-char-id⟧.keywords.$pattern), ⟦2-char-id⟧ = ⟦2-char-id⟧ || /\w+/, ⟦2-char-id⟧.keywords && (⟦2-char-id⟧.keywords = ⟦2-char-id⟧(⟦2-char-id⟧.keywords, ⟦2-char-id⟧.case_insensitive)), ⟦2-char-id⟧.keywordPatternRe = ⟦2-char-id⟧(⟦2-char-id⟧, !0), ⟦2-char-id⟧ && (⟦2-char-id⟧.Fs || (⟦2-char-id⟧.Fs = /\B|\b/), ⟦2-char-id⟧.beginRe = ⟦2-char-id⟧(⟦2-char-id⟧.Fs), ⟦2-char-id⟧.end || ⟦2-char-id⟧.endsWithParent || (⟦2-char-id⟧.end = /\B|\b/), ⟦2-char-id⟧.end && (⟦2-char-id⟧.endRe = ⟦2-char-id⟧(⟦2-char-id⟧.end)), ⟦2-char-id⟧.terminatorEnd = ⟦2-char-id⟧(⟦2-char-id⟧.end) || "", ⟦2-char-id⟧.endsWithParent && ⟦2-char-id⟧.terminatorEnd && (⟦2-char-id⟧.terminatorEnd += (⟦2-char-id⟧.end ? "|" : "") + ⟦2-char-id⟧.terminatorEnd)), ⟦2-char-id⟧.illegal && (⟦2-char-id⟧.illegalRe = ⟦2-char-id⟧(⟦2-char-id⟧.illegal)), ⟦2-char-id⟧.contains || (⟦2-char-id⟧.contains = []), ⟦2-char-id⟧.contains = [].concat(...⟦2-char-id⟧.contains.map((function(⟦2-char-id⟧) {
+          return "object" === typeof ⟦2-char-id⟧.keywords && ⟦2-char-id⟧.keywords.$pattern && (⟦2-char-id⟧.keywords = Object.assign({}, ⟦2-char-id⟧.keywords), ⟦2-char-id⟧ = ⟦2-char-id⟧.keywords.$pattern, delete ⟦2-char-id⟧.keywords.$pattern), ⟦2-char-id⟧ = ⟦2-char-id⟧ || /\w+/, ⟦2-char-id⟧.keywords && (⟦2-char-id⟧.keywords = ⟦2-char-id⟧(⟦2-char-id⟧.keywords, ⟦2-char-id⟧.case_insensitive)), ⟦2-char-id⟧.keywordPatternRe = ⟦2-char-id⟧(⟦2-char-id⟧, !0), ⟦2-char-id⟧ && (⟦2-char-id⟧.tO || (⟦2-char-id⟧.tO = /\B|\b/), ⟦2-char-id⟧.beginRe = ⟦2-char-id⟧(⟦2-char-id⟧.tO), ⟦2-char-id⟧.end || ⟦2-char-id⟧.endsWithParent || (⟦2-char-id⟧.end = /\B|\b/), ⟦2-char-id⟧.end && (⟦2-char-id⟧.endRe = ⟦2-char-id⟧(⟦2-char-id⟧.end)), ⟦2-char-id⟧.terminatorEnd = ⟦2-char-id⟧(⟦2-char-id⟧.end) || "", ⟦2-char-id⟧.endsWithParent && ⟦2-char-id⟧.terminatorEnd && (⟦2-char-id⟧.terminatorEnd += (⟦2-char-id⟧.end ? "|" : "") + ⟦2-char-id⟧.terminatorEnd)), ⟦2-char-id⟧.illegal && (⟦2-char-id⟧.illegalRe = ⟦2-char-id⟧(⟦2-char-id⟧.illegal)), ⟦2-char-id⟧.contains || (⟦2-char-id⟧.contains = []), ⟦2-char-id⟧.contains = [].concat(...⟦2-char-id⟧.contains.map((function(⟦2-char-id⟧) {
             return function(⟦2-char-id⟧) {
               ⟦2-char-id⟧.variants && !⟦2-char-id⟧.cachedVariants && (⟦2-char-id⟧.cachedVariants = ⟦2-char-id⟧.variants.map((function(⟦2-char-id⟧) {
                 return ⟦2-char-id⟧(⟦2-char-id⟧, {
```

</details>

<details>
<summary>Hunk 22 · Change · +3 / -3</summary>

```diff
@@ -529,14 +529,14 @@
               });
               if (Object.isFrozen(⟦2-char-id⟧)) return ⟦2-char-id⟧(⟦2-char-id⟧);
               return ⟦2-char-id⟧
-            }("self" === ⟦2-char-id⟧ ? eJ : ⟦2-char-id⟧)
+            }("self" === ⟦2-char-id⟧ ? pB : ⟦2-char-id⟧)
           }))), ⟦2-char-id⟧.contains.forEach((function(⟦2-char-id⟧) {
             ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
           })), ⟦2-char-id⟧.starts && ⟦2-char-id⟧(⟦2-char-id⟧.starts, ⟦2-char-id⟧), ⟦2-char-id⟧.matcher = function(⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = new ⟦2-char-id⟧;
-            return ⟦2-char-id⟧.contains.forEach((⟦2-char-id⟧ => ⟦2-char-id⟧.addRule(⟦2-char-id⟧.Fs, {
+            return ⟦2-char-id⟧.contains.forEach((⟦2-char-id⟧ => ⟦2-char-id⟧.addRule(⟦2-char-id⟧.tO, {
               rule: ⟦2-char-id⟧,
-              type: "Fs"
+              type: "tO"
             }))), ⟦2-char-id⟧.terminatorEnd && ⟦2-char-id⟧.addRule(⟦2-char-id⟧.terminatorEnd, {
               type: "end"
             }), ⟦2-char-id⟧.illegal && ⟦2-char-id⟧.addRule(⟦2-char-id⟧.illegal, {
```

</details>

<details>
<summary>Hunk 23 · Change · +1 / -1</summary>

```diff
@@ -689,7 +689,7 @@
               ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
             if (!⟦2-char-id⟧) return ⟦2-char-id⟧;
             const ⟦2-char-id⟧ = ⟦2-char-id⟧;
-            ⟦2-char-id⟧.endScope && ⟦2-char-id⟧.endScope._wrap ? (⟦2-char-id⟧(), ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.endScope._wrap)) : ⟦2-char-id⟧.endScope && ⟦2-char-id⟧.endScope._multi ? (⟦2-char-id⟧(), ⟦2-char-id⟧(⟦2-char-id⟧.endScope, ⟦2-char-id⟧)) : ⟦2-char-id⟧.skip ? ⟦2-char-id⟧ += ZJ : (⟦2-char-id⟧.returnEnd || ⟦2-char-id⟧.excludeEnd || (⟦2-char-id⟧ += ⟦2-char-id⟧), ⟦2-char-id⟧(), ⟦2-char-id⟧.excludeEnd && (⟦2-char-id⟧ = ⟦2-char-id⟧));
+            ⟦2-char-id⟧.endScope && ⟦2-char-id⟧.endScope._wrap ? (⟦2-char-id⟧(), ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.endScope._wrap)) : ⟦2-char-id⟧.endScope && ⟦2-char-id⟧.endScope._multi ? (⟦2-char-id⟧(), ⟦2-char-id⟧(⟦2-char-id⟧.endScope, ⟦2-char-id⟧)) : ⟦2-char-id⟧.skip ? ⟦2-char-id⟧ += dB : (⟦2-char-id⟧.returnEnd || ⟦2-char-id⟧.excludeEnd || (⟦2-char-id⟧ += ⟦2-char-id⟧), ⟦2-char-id⟧(), ⟦2-char-id⟧.excludeEnd && (⟦2-char-id⟧ = ⟦2-char-id⟧));
             do {
               ⟦2-char-id⟧.scope && ⟦2-char-id⟧.closeNode(), ⟦2-char-id⟧.skip || ⟦2-char-id⟧.subLanguage || (⟦2-char-id⟧ += ⟦2-char-id⟧.relevance), ⟦2-char-id⟧ = ⟦2-char-id⟧.parent
             } while (⟦2-char-id⟧ !== ⟦2-char-id⟧.parent);
```

</details>

<details>
<summary>Hunk 24 · Change · +4 / -4</summary>

```diff
@@ -700,21 +700,21 @@
           function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧[0];
             if (⟦2-char-id⟧ += ⟦2-char-id⟧, null == ⟦2-char-id⟧) return ⟦2-char-id⟧(), 0;
-            if ("Fs" === ⟦2-char-id⟧.type && "end" === ⟦2-char-id⟧.type && ⟦2-char-id⟧.index === ⟦2-char-id⟧.index && "" === ⟦2-char-id⟧) {
+            if ("tO" === ⟦2-char-id⟧.type && "end" === ⟦2-char-id⟧.type && ⟦2-char-id⟧.index === ⟦2-char-id⟧.index && "" === ⟦2-char-id⟧) {
               if (⟦2-char-id⟧ += ⟦2-char-id⟧.slice(⟦2-char-id⟧.index, ⟦2-char-id⟧.index + 1), !⟦2-char-id⟧) {
-                const ⟦2-char-id⟧ = new Error(`0 width match regex (${JJ})`);
+                const ⟦2-char-id⟧ = new Error(`0 width match regex (${BB})`);
                 throw ⟦2-char-id⟧.languageName = ⟦2-char-id⟧, ⟦2-char-id⟧.badRule = ⟦2-char-id⟧.rule, ⟦2-char-id⟧
               }
               return 1
             }
-            if (⟦2-char-id⟧ = ⟦2-char-id⟧, "Fs" === ⟦2-char-id⟧.type) return function(⟦2-char-id⟧) {
+            if (⟦2-char-id⟧ = ⟦2-char-id⟧, "tO" === ⟦2-char-id⟧.type) return function(⟦2-char-id⟧) {
               const ⟦2-char-id⟧ = ⟦2-char-id⟧[0],
                 ⟦2-char-id⟧ = ⟦2-char-id⟧.rule,
                 ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧),
                 ⟦2-char-id⟧ = [⟦2-char-id⟧.__beforeBegin, ⟦2-char-id⟧["on:begin"]];
               for (const ⟦2-char-id⟧ of ⟦2-char-id⟧)
                 if (⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.isMatchIgnored)) return ⟦2-char-id⟧(⟦2-char-id⟧);
-              return ⟦2-char-id⟧.skip ? ⟦2-char-id⟧ += cJ : (⟦2-char-id⟧.excludeBegin && (⟦2-char-id⟧ += ⟦2-char-id⟧), ⟦2-char-id⟧(), ⟦2-char-id⟧.returnBegin || ⟦2-char-id⟧.excludeBegin || (⟦2-char-id⟧ = ⟦2-char-id⟧)), ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.returnBegin ? 0 : ⟦2-char-id⟧.length
+              return ⟦2-char-id⟧.skip ? ⟦2-char-id⟧ += TB : (⟦2-char-id⟧.excludeBegin && (⟦2-char-id⟧ += ⟦2-char-id⟧), ⟦2-char-id⟧(), ⟦2-char-id⟧.returnBegin || ⟦2-char-id⟧.excludeBegin || (⟦2-char-id⟧ = ⟦2-char-id⟧)), ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.returnBegin ? 0 : ⟦2-char-id⟧.length
             }(⟦2-char-id⟧);
             if ("illegal" === ⟦2-char-id⟧.type && !⟦2-char-id⟧) {
               const ⟦2-char-id⟧ = new Error('Illegal lexeme "' + ⟦2-char-id⟧ + '" for mode "' + (⟦2-char-id⟧.scope || "<unnamed>") + '"');
```

</details>

<details>
<summary>Hunk 25 · Change · +1 / -1</summary>

```diff
@@ -851,7 +851,7 @@
           ⟦2-char-id⟧.innerHTML = ⟦2-char-id⟧.value, ⟦2-char-id⟧.dataset.highlighted = "yes",
             function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
               const ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧[⟦2-char-id⟧] || ⟦2-char-id⟧;
-              ⟦2-char-id⟧.classList.add("hljs"), ⟦2-char-id⟧.classList.add(`language-${FJ}`)
+              ⟦2-char-id⟧.classList.add("hljs"), ⟦2-char-id⟧.classList.add(`language-${VB}`)
             }(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.language), ⟦2-char-id⟧.result = {
               language: ⟦2-char-id⟧.language,
               re: ⟦2-char-id⟧.relevance,
```

</details>

<details>
<summary>Hunk 26 · Change · +5 / -5</summary>

```diff
@@ -971,15 +971,15 @@
       ⟦2-char-id⟧ = ⟦2-char-id⟧({});
     ⟦2-char-id⟧.newInstance = () => ⟦2-char-id⟧({}), ⟦2-char-id⟧.exports = ⟦2-char-id⟧, ⟦2-char-id⟧.HighlightJS = ⟦2-char-id⟧, ⟦2-char-id⟧.default = ⟦2-char-id⟧
   },
-  4111: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  4105: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧
+      c: () => ⟦2-char-id⟧
     });
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧(4119)
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧(4108)
   },
-  4122: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  4117: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧
+      b: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = "[A-Za-z$_][0-9A-Za-z$_]*",
       ⟦2-char-id⟧ = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
```

</details>

<details>
<summary>Hunk 27 · Change · +1 / -1</summary>

```diff
@@ -996,7 +996,7 @@
         ⟦2-char-id⟧ = "<>",
         ⟦2-char-id⟧ = "</>",
         ⟦2-char-id⟧ = {
-          Fs: /<[A-Za-z0-9\\._:-]+/,
+          tO: /<[A-Za-z0-9\\._:-]+/,
           end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
           isTrulyOpeningTag: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧[0].length + ⟦2-char-id⟧.index,
```

</details>

<details>
<summary>Hunk 28 · Change · +16 / -16</summary>

```diff
@@ -1024,36 +1024,36 @@
           "variable.language": ⟦2-char-id⟧
         },
         ⟦2-char-id⟧ = "[0-9](_?[0-9])*",
-        ⟦2-char-id⟧ = `\\.(${GJ})`,
+        ⟦2-char-id⟧ = `\\.(${uB})`,
         ⟦2-char-id⟧ = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
         ⟦2-char-id⟧ = {
           className: "number",
           variants: [{
-            Fs: `(\\b(${xJ})((${fJ})|\\.)?|(${fJ}))[eE][+-]?(${GJ})\\b`
-          }, {
-            Fs: `\\b(${xJ})\\b((${fJ})\\b|\\.)?|(${fJ})\\b`
-          }, {
-            Fs: "\\b(0|[1-9](_?[0-9])*)n\\b"
-          }, {
-            Fs: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
-          }, {
-            Fs: "\\b0[bB][0-1](_?[0-1])*n?\\b"
-          }, {
-            Fs: "\\b0[oO][0-7](_?[0-7])*n?\\b"
-          }, {
-            Fs: "\\b0[0-7]+n?\\b"
+            tO: `(\\b(${EB})((${HB})|\\.)?|(${HB}))[eE][+-]?(${uB})\\b`
+          }, {
+            tO: `\\b(${EB})\\b((${HB})\\b|\\.)?|(${HB})\\b`
+          }, {
+            tO: "\\b(0|[1-9](_?[0-9])*)n\\b"
+          }, {
+            tO: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
+          }, {
+            tO: "\\b0[bB][0-1](_?[0-1])*n?\\b"
+          }, {
+            tO: "\\b0[oO][0-7](_?[0-7])*n?\\b"
+          }, {
+            tO: "\\b0[0-7]+n?\\b"
           }],
           relevance: 0
         },
         ⟦2-char-id⟧ = {
           className: "subst",
-          Fs: "\\$\\{",
+          tO: "\\$\\{",
           end: "\\}",
           keywords: ⟦2-char-id⟧,
           contains: []
         },
         ⟦2-char-id⟧ = {
-          Fs: ".?html`",
+          tO: ".?html`",
           end: "",
           starts: {
             end: "`",
```

</details>

<details>
<summary>Hunk 29 · Change · +1 / -1</summary>

```diff
@@ -1063,7 +1063,7 @@
           }
         },
         ⟦2-char-id⟧ = {
-          Fs: ".?css`",
+          tO: ".?css`",
           end: "",
           starts: {
             end: "`",
```

</details>

<details>
<summary>Hunk 30 · Change · +1 / -1</summary>

```diff
@@ -1073,7 +1073,7 @@
           }
         },
         ⟦2-char-id⟧ = {
-          Fs: ".?gql`",
+          tO: ".?gql`",
           end: "",
           starts: {
             end: "`",
```

</details>

<details>
<summary>Hunk 31 · Change · +1 / -1</summary>

```diff
@@ -1084,7 +1084,7 @@
         },
         ⟦2-char-id⟧ = {
           className: "string",
-          Fs: "`",
+          tO: "`",
           end: "`",
           contains: [⟦2-char-id⟧.BACKSLASH_ESCAPE, ⟦2-char-id⟧]
         },
```

</details>

<details>
<summary>Hunk 32 · Change · +5 / -5</summary>

```diff
@@ -1093,25 +1093,25 @@
           variants: [⟦2-char-id⟧.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
             relevance: 0,
             contains: [{
-              Fs: "(?=@[A-Za-z]+)",
+              tO: "(?=@[A-Za-z]+)",
               relevance: 0,
               contains: [{
                 className: "doctag",
-                Fs: "@[A-Za-z]+"
+                tO: "@[A-Za-z]+"
               }, {
                 className: "type",
-                Fs: "\\{",
+                tO: "\\{",
                 end: "\\}",
                 excludeEnd: !0,
                 excludeBegin: !0,
                 relevance: 0
               }, {
                 className: "variable",
-                Fs: ⟦2-char-id⟧ + "(?=\\s*(-)|$)",
+                tO: ⟦2-char-id⟧ + "(?=\\s*(-)|$)",
                 endsParent: !0,
                 relevance: 0
               }, {
-                Fs: /(?=[^\n])\s/,
+                tO: /(?=[^\n])\s/,
                 relevance: 0
               }]
             }]
```

</details>

<details>
<summary>Hunk 33 · Change · +3 / -3</summary>

```diff
@@ -1121,21 +1121,21 @@
           match: /\$\d+/
         }, ⟦2-char-id⟧];
       ⟦2-char-id⟧.contains = ⟦2-char-id⟧.concat({
-        Fs: /\{/,
+        tO: /\{/,
         end: /\}/,
         keywords: ⟦2-char-id⟧,
         contains: ["self"].concat(⟦2-char-id⟧)
       });
       const ⟦2-char-id⟧ = [].concat(⟦2-char-id⟧, ⟦2-char-id⟧.contains),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.concat([{
-          Fs: /(\s*)\(/,
+          tO: /(\s*)\(/,
           end: /\)/,
           keywords: ⟦2-char-id⟧,
           contains: ["self"].concat(⟦2-char-id⟧)
         }]),
         ⟦2-char-id⟧ = {
           className: "params",
-          Fs: /(\s*)\(/,
+          tO: /(\s*)\(/,
           end: /\)/,
           excludeBegin: !0,
           excludeEnd: !0,
```

</details>

<details>
<summary>Hunk 34 · Change · +2 / -2</summary>

```diff
@@ -1182,13 +1182,13 @@
           illegal: /%/
         };
       const ⟦2-char-id⟧ = {
-        match: ⟦2-char-id⟧.concat(/\b/, (⟦2-char-id⟧ = [...⟦2-char-id⟧, "super", "import"].map((⟦2-char-id⟧ => `${JJ}\\s*\\(`)), ⟦2-char-id⟧.concat("(?!", ⟦2-char-id⟧.join("|"), ")")), ⟦2-char-id⟧, ⟦2-char-id⟧.lookahead(/\s*\(/)),
+        match: ⟦2-char-id⟧.concat(/\b/, (⟦2-char-id⟧ = [...⟦2-char-id⟧, "super", "import"].map((⟦2-char-id⟧ => `${BB}\\s*\\(`)), ⟦2-char-id⟧.concat("(?!", ⟦2-char-id⟧.join("|"), ")")), ⟦2-char-id⟧, ⟦2-char-id⟧.lookahead(/\s*\(/)),
         className: "title.function",
         relevance: 0
       };
       var ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = {
-          Fs: ⟦2-char-id⟧.concat(/\./, ⟦2-char-id⟧.lookahead(⟦2-char-id⟧.concat(⟦2-char-id⟧, /(?![0-9A-Za-z$_(])/))),
+          tO: ⟦2-char-id⟧.concat(/\./, ⟦2-char-id⟧.lookahead(⟦2-char-id⟧.concat(⟦2-char-id⟧, /(?![0-9A-Za-z$_(])/))),
           end: ⟦2-char-id⟧,
           excludeBegin: !0,
           keywords: "prototype",
```

</details>

<details>
<summary>Hunk 35 · Change · +1 / -1</summary>

```diff
@@ -1202,7 +1202,7 @@
             3: "title.function"
           },
           contains: [{
-            Fs: /\(\)/
+            tO: /\(\)/
           }, ⟦2-char-id⟧]
         },
         ⟦2-char-id⟧ = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + ⟦2-char-id⟧.UNDERSCORE_IDENT_RE + ")\\s*=>",
```

</details>

<details>
<summary>Hunk 36 · Change · +1 / -1</summary>

```diff
@@ -1232,7 +1232,7 @@
           label: "use_strict",
           className: "meta",
           relevance: 10,
-          Fs: /^\s*['"]use (strict|asm)['"]/
+          tO: /^\s*['"]use (strict|asm)['"]/
         }, ⟦2-char-id⟧.APOS_STRING_MODE, ⟦2-char-id⟧.QUOTE_STRING_MODE, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, {
           match: /\$\d+/
         }, ⟦2-char-id⟧, ⟦2-char-id⟧, {
```

</details>

<details>
<summary>Hunk 37 · Change · +5 / -5</summary>

```diff
@@ -1240,25 +1240,25 @@
           match: ⟦2-char-id⟧ + ⟦2-char-id⟧.lookahead(":"),
           relevance: 0
         }, ⟦2-char-id⟧, {
-          Fs: "(" + ⟦2-char-id⟧.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
+          tO: "(" + ⟦2-char-id⟧.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
           keywords: "return throw case",
           relevance: 0,
           contains: [⟦2-char-id⟧, ⟦2-char-id⟧.REGEXP_MODE, {
             className: "function",
-            Fs: ⟦2-char-id⟧,
+            tO: ⟦2-char-id⟧,
             returnBegin: !0,
             end: "\\s*=>",
             contains: [{
               className: "params",
               variants: [{
-                Fs: ⟦2-char-id⟧.UNDERSCORE_IDENT_RE,
+                tO: ⟦2-char-id⟧.UNDERSCORE_IDENT_RE,
                 relevance: 0
               }, {
                 className: null,
-                Fs: /\(\s*\)/,
+                tO: /\(\s*\)/,
                 skip: !0
               }, {
-                Fs: /(\s*)\(/,
+                tO: /(\s*)\(/,
                 end: /\)/,
                 excludeBegin: !0,
                 excludeEnd: !0,
```

</details>

<details>
<summary>Hunk 38 · Change · +4 / -4</summary>

```diff
@@ -1267,25 +1267,25 @@
               }]
             }]
           }, {
-            Fs: /,/,
+            tO: /,/,
             relevance: 0
           }, {
             match: /\s+/,
             relevance: 0
           }, {
             variants: [{
-              Fs: ⟦2-char-id⟧,
+              tO: ⟦2-char-id⟧,
               end: ⟦2-char-id⟧
             }, {
               match: /<[A-Za-z0-9\\._:-]+\s*\/>/
             }, {
-              Fs: ⟦2-char-id⟧.Fs,
+              tO: ⟦2-char-id⟧.tO,
               "on:begin": ⟦2-char-id⟧.isTrulyOpeningTag,
               end: ⟦2-char-id⟧.end
             }],
             subLanguage: "xml",
             contains: [{
-              Fs: ⟦2-char-id⟧.Fs,
+              tO: ⟦2-char-id⟧.tO,
               end: ⟦2-char-id⟧.end,
               skip: !0,
               contains: ["self"]
```

</details>

<details>
<summary>Hunk 39 · Change · +2 / -2</summary>

```diff
@@ -1294,11 +1294,11 @@
         }, ⟦2-char-id⟧, {
           beginKeywords: "while if switch catch for"
         }, {
-          Fs: "\\b(?!function)" + ⟦2-char-id⟧.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
+          tO: "\\b(?!function)" + ⟦2-char-id⟧.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
           returnBegin: !0,
           label: "func.def",
           contains: [⟦2-char-id⟧, ⟦2-char-id⟧.inherit(⟦2-char-id⟧.TITLE_MODE, {
-            Fs: ⟦2-char-id⟧,
+            tO: ⟦2-char-id⟧,
             className: "title.function"
           })]
         }, {
```

</details>

<details>
<summary>Hunk 40 · Change · +1 / -1</summary>

```diff
@@ -1323,7 +1323,7 @@
       }
     }
   },
-  4128: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  4122: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       d: () => ⟦2-char-id⟧
     });
```

</details>

<details>
<summary>Hunk 41 · Change · +1 / -1</summary>

```diff
@@ -1342,7 +1342,7 @@
         ⟦2-char-id⟧ = "<>",
         ⟦2-char-id⟧ = "</>",
         ⟦2-char-id⟧ = {
-          Fs: /<[A-Za-z0-9\\._:-]+/,
+          tO: /<[A-Za-z0-9\\._:-]+/,
           end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
           isTrulyOpeningTag: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧[0].length + ⟦2-char-id⟧.index,
```

</details>

<details>
<summary>Hunk 42 · Change · +16 / -16</summary>

```diff
@@ -1370,36 +1370,36 @@
           "variable.language": ⟦2-char-id⟧
         },
         ⟦2-char-id⟧ = "[0-9](_?[0-9])*",
-        ⟦2-char-id⟧ = `\\.(${GJ})`,
+        ⟦2-char-id⟧ = `\\.(${uB})`,
         ⟦2-char-id⟧ = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
         ⟦2-char-id⟧ = {
           className: "number",
           variants: [{
-            Fs: `(\\b(${xJ})((${fJ})|\\.)?|(${fJ}))[eE][+-]?(${GJ})\\b`
-          }, {
-            Fs: `\\b(${xJ})\\b((${fJ})\\b|\\.)?|(${fJ})\\b`
-          }, {
-            Fs: "\\b(0|[1-9](_?[0-9])*)n\\b"
-          }, {
-            Fs: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
-          }, {
-            Fs: "\\b0[bB][0-1](_?[0-1])*n?\\b"
-          }, {
-            Fs: "\\b0[oO][0-7](_?[0-7])*n?\\b"
-          }, {
-            Fs: "\\b0[0-7]+n?\\b"
+            tO: `(\\b(${EB})((${HB})|\\.)?|(${HB}))[eE][+-]?(${uB})\\b`
+          }, {
+            tO: `\\b(${EB})\\b((${HB})\\b|\\.)?|(${HB})\\b`
+          }, {
+            tO: "\\b(0|[1-9](_?[0-9])*)n\\b"
+          }, {
+            tO: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
+          }, {
+            tO: "\\b0[bB][0-1](_?[0-1])*n?\\b"
+          }, {
+            tO: "\\b0[oO][0-7](_?[0-7])*n?\\b"
+          }, {
+            tO: "\\b0[0-7]+n?\\b"
           }],
           relevance: 0
         },
         ⟦2-char-id⟧ = {
           className: "subst",
-          Fs: "\\$\\{",
+          tO: "\\$\\{",
           end: "\\}",
           keywords: ⟦2-char-id⟧,
           contains: []
         },
         ⟦2-char-id⟧ = {
-          Fs: ".?html`",
+          tO: ".?html`",
           end: "",
           starts: {
             end: "`",
```

</details>

<details>
<summary>Hunk 43 · Change · +1 / -1</summary>

```diff
@@ -1409,7 +1409,7 @@
           }
         },
         ⟦2-char-id⟧ = {
-          Fs: ".?css`",
+          tO: ".?css`",
           end: "",
           starts: {
             end: "`",
```

</details>

<details>
<summary>Hunk 44 · Change · +1 / -1</summary>

```diff
@@ -1419,7 +1419,7 @@
           }
         },
         ⟦2-char-id⟧ = {
-          Fs: ".?gql`",
+          tO: ".?gql`",
           end: "",
           starts: {
             end: "`",
```

</details>

<details>
<summary>Hunk 45 · Change · +1 / -1</summary>

```diff
@@ -1430,7 +1430,7 @@
         },
         ⟦2-char-id⟧ = {
           className: "string",
-          Fs: "`",
+          tO: "`",
           end: "`",
           contains: [⟦2-char-id⟧.BACKSLASH_ESCAPE, ⟦2-char-id⟧]
         },
```

</details>

<details>
<summary>Hunk 46 · Change · +5 / -5</summary>

```diff
@@ -1439,25 +1439,25 @@
           variants: [⟦2-char-id⟧.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
             relevance: 0,
             contains: [{
-              Fs: "(?=@[A-Za-z]+)",
+              tO: "(?=@[A-Za-z]+)",
               relevance: 0,
               contains: [{
                 className: "doctag",
-                Fs: "@[A-Za-z]+"
+                tO: "@[A-Za-z]+"
               }, {
                 className: "type",
-                Fs: "\\{",
+                tO: "\\{",
                 end: "\\}",
                 excludeEnd: !0,
                 excludeBegin: !0,
                 relevance: 0
               }, {
                 className: "variable",
-                Fs: ⟦2-char-id⟧ + "(?=\\s*(-)|$)",
+                tO: ⟦2-char-id⟧ + "(?=\\s*(-)|$)",
                 endsParent: !0,
                 relevance: 0
               }, {
-                Fs: /(?=[^\n])\s/,
+                tO: /(?=[^\n])\s/,
                 relevance: 0
               }]
             }]
```

</details>

<details>
<summary>Hunk 47 · Change · +3 / -3</summary>

```diff
@@ -1467,21 +1467,21 @@
           match: /\$\d+/
         }, ⟦2-char-id⟧];
       ⟦2-char-id⟧.contains = ⟦2-char-id⟧.concat({
-        Fs: /\{/,
+        tO: /\{/,
         end: /\}/,
         keywords: ⟦2-char-id⟧,
         contains: ["self"].concat(⟦2-char-id⟧)
       });
       const ⟦2-char-id⟧ = [].concat(⟦2-char-id⟧, ⟦2-char-id⟧.contains),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.concat([{
-          Fs: /(\s*)\(/,
+          tO: /(\s*)\(/,
           end: /\)/,
           keywords: ⟦2-char-id⟧,
           contains: ["self"].concat(⟦2-char-id⟧)
         }]),
         ⟦2-char-id⟧ = {
           className: "params",
-          Fs: /(\s*)\(/,
+          tO: /(\s*)\(/,
           end: /\)/,
           excludeBegin: !0,
           excludeEnd: !0,
```

</details>

<details>
<summary>Hunk 48 · Change · +2 / -2</summary>

```diff
@@ -1528,13 +1528,13 @@
           illegal: /%/
         };
       const ⟦2-char-id⟧ = {
-        match: ⟦2-char-id⟧.concat(/\b/, (⟦2-char-id⟧ = [...⟦2-char-id⟧, "super", "import"].map((⟦2-char-id⟧ => `${JJ}\\s*\\(`)), ⟦2-char-id⟧.concat("(?!", ⟦2-char-id⟧.join("|"), ")")), ⟦2-char-id⟧, ⟦2-char-id⟧.lookahead(/\s*\(/)),
+        match: ⟦2-char-id⟧.concat(/\b/, (⟦2-char-id⟧ = [...⟦2-char-id⟧, "super", "import"].map((⟦2-char-id⟧ => `${BB}\\s*\\(`)), ⟦2-char-id⟧.concat("(?!", ⟦2-char-id⟧.join("|"), ")")), ⟦2-char-id⟧, ⟦2-char-id⟧.lookahead(/\s*\(/)),
         className: "title.function",
         relevance: 0
       };
       var ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = {
-          Fs: ⟦2-char-id⟧.concat(/\./, ⟦2-char-id⟧.lookahead(⟦2-char-id⟧.concat(⟦2-char-id⟧, /(?![0-9A-Za-z$_(])/))),
+          tO: ⟦2-char-id⟧.concat(/\./, ⟦2-char-id⟧.lookahead(⟦2-char-id⟧.concat(⟦2-char-id⟧, /(?![0-9A-Za-z$_(])/))),
           end: ⟦2-char-id⟧,
           excludeBegin: !0,
           keywords: "prototype",
```

</details>

<details>
<summary>Hunk 49 · Change · +1 / -1</summary>

```diff
@@ -1548,7 +1548,7 @@
             3: "title.function"
           },
           contains: [{
-            Fs: /\(\)/
+            tO: /\(\)/
           }, ⟦2-char-id⟧]
         },
         ⟦2-char-id⟧ = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + ⟦2-char-id⟧.UNDERSCORE_IDENT_RE + ")\\s*=>",
```

</details>

<details>
<summary>Hunk 50 · Change · +1 / -1</summary>

```diff
@@ -1578,7 +1578,7 @@
           label: "use_strict",
           className: "meta",
           relevance: 10,
-          Fs: /^\s*['"]use (strict|asm)['"]/
+          tO: /^\s*['"]use (strict|asm)['"]/
         }, ⟦2-char-id⟧.APOS_STRING_MODE, ⟦2-char-id⟧.QUOTE_STRING_MODE, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, {
           match: /\$\d+/
         }, ⟦2-char-id⟧, ⟦2-char-id⟧, {
```

</details>

<details>
<summary>Hunk 51 · Change · +5 / -5</summary>

```diff
@@ -1586,25 +1586,25 @@
           match: ⟦2-char-id⟧ + ⟦2-char-id⟧.lookahead(":"),
           relevance: 0
         }, ⟦2-char-id⟧, {
-          Fs: "(" + ⟦2-char-id⟧.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
+          tO: "(" + ⟦2-char-id⟧.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
           keywords: "return throw case",
           relevance: 0,
           contains: [⟦2-char-id⟧, ⟦2-char-id⟧.REGEXP_MODE, {
             className: "function",
-            Fs: ⟦2-char-id⟧,
+            tO: ⟦2-char-id⟧,
             returnBegin: !0,
             end: "\\s*=>",
             contains: [{
               className: "params",
               variants: [{
-                Fs: ⟦2-char-id⟧.UNDERSCORE_IDENT_RE,
+                tO: ⟦2-char-id⟧.UNDERSCORE_IDENT_RE,
                 relevance: 0
               }, {
                 className: null,
-                Fs: /\(\s*\)/,
+                tO: /\(\s*\)/,
                 skip: !0
               }, {
-                Fs: /(\s*)\(/,
+                tO: /(\s*)\(/,
                 end: /\)/,
                 excludeBegin: !0,
                 excludeEnd: !0,
```

</details>

<details>
<summary>Hunk 52 · Change · +4 / -4</summary>

```diff
@@ -1613,25 +1613,25 @@
               }]
             }]
           }, {
-            Fs: /,/,
+            tO: /,/,
             relevance: 0
           }, {
             match: /\s+/,
             relevance: 0
           }, {
             variants: [{
-              Fs: ⟦2-char-id⟧,
+              tO: ⟦2-char-id⟧,
               end: ⟦2-char-id⟧
             }, {
               match: /<[A-Za-z0-9\\._:-]+\s*\/>/
             }, {
-              Fs: ⟦2-char-id⟧.Fs,
+              tO: ⟦2-char-id⟧.tO,
               "on:begin": ⟦2-char-id⟧.isTrulyOpeningTag,
               end: ⟦2-char-id⟧.end
             }],
             subLanguage: "xml",
             contains: [{
-              Fs: ⟦2-char-id⟧.Fs,
+              tO: ⟦2-char-id⟧.tO,
               end: ⟦2-char-id⟧.end,
               skip: !0,
               contains: ["self"]
```

</details>

<details>
<summary>Hunk 53 · Change · +2 / -2</summary>

```diff
@@ -1640,11 +1640,11 @@
         }, ⟦2-char-id⟧, {
           beginKeywords: "while if switch catch for"
         }, {
-          Fs: "\\b(?!function)" + ⟦2-char-id⟧.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
+          tO: "\\b(?!function)" + ⟦2-char-id⟧.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
           returnBegin: !0,
           label: "func.def",
           contains: [⟦2-char-id⟧, ⟦2-char-id⟧.inherit(⟦2-char-id⟧.TITLE_MODE, {
-            Fs: ⟦2-char-id⟧,
+            tO: ⟦2-char-id⟧,
             className: "title.function"
           })]
         }, {
```

</details>

<details>
<summary>Hunk 54 · Change · +1 / -1</summary>

```diff
@@ -1675,7 +1675,7 @@
         ⟦2-char-id⟧ = ⟦2-char-id⟧,
         ⟦2-char-id⟧ = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
         ⟦2-char-id⟧ = {
-          Fs: [/namespace/, /\s+/, ⟦2-char-id⟧.IDENT_RE],
+          tO: [/namespace/, /\s+/, ⟦2-char-id⟧.IDENT_RE],
           beginScope: {
             1: "keyword",
             3: "title.class"
```

</details>

<details>
<summary>Hunk 55 · Change · +1 / -1</summary>

```diff
@@ -1700,7 +1700,7 @@
         },
         ⟦2-char-id⟧ = {
           className: "meta",
-          Fs: "@" + ⟦2-char-id⟧
+          tO: "@" + ⟦2-char-id⟧
         },
         ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.contains.findIndex((⟦2-char-id⟧ => ⟦2-char-id⟧.label === ⟦2-char-id⟧));
```

</details>

<details>
<summary>Hunk 56 · Change · +1 / -1</summary>

```diff
@@ -1715,7 +1715,7 @@
       ⟦2-char-id⟧.exports.PARAMS_CONTAINS.push([⟦2-char-id⟧.exports.CLASS_REFERENCE, ⟦2-char-id⟧, ⟦2-char-id⟧]), ⟦2-char-id⟧.contains = ⟦2-char-id⟧.contains.concat([⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧]), ⟦2-char-id⟧(⟦2-char-id⟧, "shebang", ⟦2-char-id⟧.SHEBANG()), ⟦2-char-id⟧(⟦2-char-id⟧, "use_strict", {
         className: "meta",
         relevance: 10,
-        Fs: /^\s*['"]use strict['"]/
+        tO: /^\s*['"]use strict['"]/
       });
       return ⟦2-char-id⟧.contains.find((⟦2-char-id⟧ => "func.def" === ⟦2-char-id⟧.label)).relevance = 0, Object.assign(⟦2-char-id⟧, {
         name: "TypeScript",
```

</details>

</details>

<details>
<summary><code>bundles/staging.bloxd.io/chunks/js/71.js</code> · modified · +64 / -64</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +8 / -8</summary>

```diff
@@ -1,18 +1,18 @@
 export const ⟦2-char-id⟧ = 71;
 export const ids = [71];
 export const modules = {
-  4133: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  4131: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      A: () => ⟦2-char-id⟧,
-      C: () => ⟦2-char-id⟧,
-      e: () => ⟦2-char-id⟧,
+      b: () => ⟦2-char-id⟧,
+      f: () => ⟦2-char-id⟧,
       g: () => ⟦2-char-id⟧,
       i: () => ⟦2-char-id⟧,
-      l: () => ⟦2-char-id⟧,
+      j: () => ⟦2-char-id⟧,
+      k: () => ⟦2-char-id⟧,
+      m: () => ⟦2-char-id⟧,
+      n: () => ⟦2-char-id⟧,
       p: () => ⟦2-char-id⟧,
-      r: () => ⟦2-char-id⟧,
-      v: () => ⟦2-char-id⟧,
-      y: () => ⟦2-char-id⟧
+      s: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;
 
```

</details>

<details>
<summary>Hunk 2 · Change · +1 / -1</summary>

```diff
@@ -27,7 +27,7 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       return ⟦2-char-id⟧.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
     }
-    const ⟦2-char-id⟧ = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${FJ.source}`, "g");
+    const ⟦2-char-id⟧ = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${VB.source}`, "g");
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       return 2 === ⟦2-char-id⟧.length ? ⟦2-char-id⟧.replace(/^ (.*) $/, "$1") : ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 3 · Change · +1 / -1</summary>

```diff
@@ -39,7 +39,7 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = [];
-      for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) ⟦2-char-id⟧.length > 0 && ⟦2-char-id⟧[⟦2-char-id⟧.length - 1].endsWith("\\") ? ⟦2-char-id⟧[⟦2-char-id⟧.length - 1] += `|${ZJ}` : ⟦2-char-id⟧.push(⟦2-char-id⟧);
+      for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) ⟦2-char-id⟧.length > 0 && ⟦2-char-id⟧[⟦2-char-id⟧.length - 1].endsWith("\\") ? ⟦2-char-id⟧[⟦2-char-id⟧.length - 1] += `|${dB}` : ⟦2-char-id⟧.push(⟦2-char-id⟧);
       return ⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧.trim().replaceAll("\\|", "|")))
     }
     const ⟦2-char-id⟧ = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;
```

</details>

<details>
<summary>Hunk 4 · Change · +1 / -1</summary>

```diff
@@ -54,7 +54,7 @@
       for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.match(⟦2-char-id⟧);
         if (!⟦2-char-id⟧) {
-          ⟦2-char-id⟧ && (⟦2-char-id⟧.text += ` ${UJ.trim()}`);
+          ⟦2-char-id⟧ && (⟦2-char-id⟧.text += ` ${yB.trim()}`);
           continue
         }
         const ⟦2-char-id⟧ = ⟦2-char-id⟧[1].replace(/\t/g, "  ").length;
```

</details>

<details>
<summary>Hunk 5 · Change · +2 / -2</summary>

```diff
@@ -159,8 +159,8 @@
       for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
         if ("heading" === ⟦2-char-id⟧.kind) {
           var ⟦2-char-id⟧;
-          const ⟦2-char-id⟧ = (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧.anchor)) && void 0 !== ⟦2-char-id⟧ ? AJ : 0) + 1;
-          ⟦2-char-id⟧.set(⟦2-char-id⟧.anchor, ⟦2-char-id⟧), ⟦2-char-id⟧ > 1 && (⟦2-char-id⟧.anchor = `${jJ.anchor}-${JJ}`)
+          const ⟦2-char-id⟧ = (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧.anchor)) && void 0 !== ⟦2-char-id⟧ ? JB : 0) + 1;
+          ⟦2-char-id⟧.set(⟦2-char-id⟧.anchor, ⟦2-char-id⟧), ⟦2-char-id⟧ > 1 && (⟦2-char-id⟧.anchor = `${gB.anchor}-${BB}`)
         }
         if ("heading" === ⟦2-char-id⟧.kind && 1 === ⟦2-char-id⟧.level && !⟦2-char-id⟧) {
           ⟦2-char-id⟧ = ⟦2-char-id⟧.text;
```

</details>

<details>
<summary>Hunk 6 · Change · +1 / -1</summary>

```diff
@@ -216,7 +216,7 @@
         case "table":
           return [⟦2-char-id⟧.header, ...⟦2-char-id⟧.rows].map((⟦2-char-id⟧ => ⟦2-char-id⟧.join(" "))).join(" ");
         case "list": {
-          const ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧.map((⟦2-char-id⟧ => `${JJ.text} ${cJ(JJ.children)}`)).join(" ");
+          const ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧.map((⟦2-char-id⟧ => `${BB.text} ${TB(BB.children)}`)).join(" ");
           return ⟦2-char-id⟧(⟦2-char-id⟧.items)
         }
         case "quote":
```

</details>

<details>
<summary>Hunk 7 · Change · +8 / -8</summary>

```diff
@@ -226,20 +226,20 @@
       }
     }
   },
-  5835: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  5853: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      b: () => ⟦2-char-id⟧,
       e: () => ⟦2-char-id⟧,
-      h: () => ⟦2-char-id⟧
+      f: () => ⟦2-char-id⟧,
+      i: () => ⟦2-char-id⟧
     });
-    ⟦2-char-id⟧(5832);
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(47),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4133),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+    ⟦2-char-id⟧(5849);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4131),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
     const ⟦2-char-id⟧ = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧ === ⟦2-char-id⟧ ? JJ : `${JJ} (${cJ})`
+      return ⟦2-char-id⟧ === ⟦2-char-id⟧ ? BB : `${BB} (${TB})`
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 8 · Change · +1 / -1</summary>

```diff
@@ -249,7 +249,7 @@
         ⟦2-char-id⟧.index > ⟦2-char-id⟧ && ⟦2-char-id⟧.push(⟦2-char-id⟧.slice(⟦2-char-id⟧, ⟦2-char-id⟧.index));
         const [, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
         void 0 !== ⟦2-char-id⟧ ? ⟦2-char-id⟧.push(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)) : void 0 !== ⟦2-char-id⟧ || void 0 !== ⟦2-char-id⟧ ? ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.jsx)("strong", {
-          children: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? qJ : ⟦2-char-id⟧
+          children: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? YB : ⟦2-char-id⟧
         }, ⟦2-char-id⟧.index)) : void 0 !== ⟦2-char-id⟧ ? ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.jsx)("em", {
           children: ⟦2-char-id⟧
         }, ⟦2-char-id⟧.index)) : ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.jsx)("code", {
```

</details>

<details>
<summary>Hunk 9 · Change · +1 / -1</summary>

```diff
@@ -325,7 +325,7 @@
       } = ⟦2-char-id⟧, ⟦2-char-id⟧ = 0;
       return (0, ⟦2-char-id⟧.jsx)("div", {
         className: "StudioAiAnswerText",
-        children: (0, ⟦2-char-id⟧.C)(⟦2-char-id⟧).map(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
+        children: (0, ⟦2-char-id⟧.s)(⟦2-char-id⟧).map(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
           if ("list" !== ⟦2-char-id⟧.kind || !⟦2-char-id⟧.ordered) return ⟦2-char-id⟧ = 0, ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
           const ⟦2-char-id⟧ = ⟦2-char-id⟧ + 1;
           return ⟦2-char-id⟧ += ⟦2-char-id⟧.items.length, (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.Fragment, {
```

</details>

<details>
<summary>Hunk 10 · Change · +8 / -8</summary>

```diff
@@ -335,20 +335,20 @@
       })
     }
   },
-  5830: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  5844: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧,
+      b: () => ⟦2-char-id⟧,
+      h: () => ⟦2-char-id⟧,
       f: () => ⟦2-char-id⟧,
-      e: () => ⟦2-char-id⟧,
-      h: () => ⟦2-char-id⟧
+      i: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(3122),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(5792),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4275);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(3138),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(5809),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4265);
     const ⟦2-char-id⟧ = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧, ⟦2-char-id⟧, (⟦2-char-id⟧ => !/^my/i.test(⟦2-char-id⟧[0]) || !/follow $/i.test(⟦2-char-id⟧.slice(0, ⟦2-char-id⟧.index)))).length > 0
+      return (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧, ⟦2-char-id⟧, (⟦2-char-id⟧ => !/^my/i.test(⟦2-char-id⟧[0]) || !/follow $/i.test(⟦2-char-id⟧.slice(0, ⟦2-char-id⟧.index)))).length > 0
     }
     const ⟦2-char-id⟧ = /\byou(?:r|'re|'ll)?\b/i,
       ⟦2-char-id⟧ = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
```

</details>

<details>
<summary>Hunk 11 · Change · +1 / -1</summary>

```diff
@@ -365,7 +365,7 @@
           }
           if (⟦2-char-id⟧ || /^\s*>/.test(⟦2-char-id⟧)) continue;
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
-          ⟦2-char-id⟧.push(...(0, ⟦2-char-id⟧.m)(⟦2-char-id⟧))
+          ⟦2-char-id⟧.push(...(0, ⟦2-char-id⟧.o)(⟦2-char-id⟧))
         }
         return ⟦2-char-id⟧
       }(⟦2-char-id⟧).filter((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧) || ⟦2-char-id⟧.test(⟦2-char-id⟧) && !⟦2-char-id⟧.test(⟦2-char-id⟧)))
```

</details>

<details>
<summary>Hunk 12 · Change · +1 / -1</summary>

```diff
@@ -392,7 +392,7 @@
       ⟦2-char-id⟧ = 12⟦2-char-id⟧;
     class ⟦2-char-id⟧ extends Error {
       constructor(⟦2-char-id⟧) {
-        super(`Studio AI chat ${JJ}`), this.reason = ⟦2-char-id⟧
+        super(`Studio AI chat ${BB}`), this.reason = ⟦2-char-id⟧
       }
     }
 
```

</details>

<details>
<summary>Hunk 13 · Change · +1 / -1</summary>

```diff
@@ -416,7 +416,7 @@
       return new Promise(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
         const ⟦2-char-id⟧ = new AbortController,
           ⟦2-char-id⟧ = () => {
-            ⟦2-char-id⟧.abort(), ⟦2-char-id⟧((0, ⟦2-char-id⟧.e)(⟦2-char-id⟧))
+            ⟦2-char-id⟧.abort(), ⟦2-char-id⟧((0, ⟦2-char-id⟧.c)(⟦2-char-id⟧))
           };
         if (null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.aborted) return void ⟦2-char-id⟧();
         null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.addEventListener("abort", ⟦2-char-id⟧, {
```

</details>

<details>
<summary>Hunk 14 · Change · +2 / -2</summary>

```diff
@@ -440,11 +440,11 @@
               }
             }, ⟦2-char-id⟧(⟦2-char-id⟧.answer)))
           }), (⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.signal.aborted || (⟦2-char-id⟧[⟦2-char-id⟧] = !0, console.warn(`Studio AI: ${FJ.name} couldn't be reached`, ⟦2-char-id⟧))
+            ⟦2-char-id⟧.signal.aborted || (⟦2-char-id⟧[⟦2-char-id⟧] = !0, console.warn(`Studio AI: ${VB.name} couldn't be reached`, ⟦2-char-id⟧))
           })).finally((() => {
             ⟦2-char-id⟧.clear(), ⟦2-char-id⟧[⟦2-char-id⟧] = !0, ⟦2-char-id⟧.signal.aborted || (() => {
               var ⟦2-char-id⟧, ⟦2-char-id⟧;
-              const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.rank) && void 0 !== ⟦2-char-id⟧ ? JJ : ⟦2-char-id⟧.length;
+              const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.rank) && void 0 !== ⟦2-char-id⟧ ? BB : ⟦2-char-id⟧.length;
               ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧).includes(!1) || (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.removeEventListener("abort", ⟦2-char-id⟧), ⟦2-char-id⟧.abort(), null !== ⟦2-char-id⟧ ? ⟦2-char-id⟧({
                 ...⟦2-char-id⟧.answer,
                 isFinal: !⟦2-char-id⟧.slice(0, ⟦2-char-id⟧.rank).includes(!0)
```

</details>

<details>
<summary>Hunk 15 · Change · +1 / -1</summary>

```diff
@@ -467,7 +467,7 @@
       const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
       try {
         const ⟦2-char-id⟧ = await ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.signal);
-        return null !== ⟦2-char-id⟧ && "object" === typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧.isCutOff ? (console.warn(`Studio AI: ${FJ.name}'s answer was cut off at the token limit`), null) : {
+        return null !== ⟦2-char-id⟧ && "object" === typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧.isCutOff ? (console.warn(`Studio AI: ${VB.name}'s answer was cut off at the token limit`), null) : {
           text: ⟦2-char-id⟧.text
         } : ⟦2-char-id⟧
       } finally {
```

</details>

<details>
<summary>Hunk 16 · Change · +1 / -1</summary>

```diff
@@ -492,7 +492,7 @@
         signal: ⟦2-char-id⟧
       });
       if (429 === ⟦2-char-id⟧.status) return "busy";
-      if (!⟦2-char-id⟧.ok) return console.warn(`Studio AI: ${JJ.name} answered ${FJ.status}`), "failed";
+      if (!⟦2-char-id⟧.ok) return console.warn(`Studio AI: ${BB.name} answered ${VB.status}`), "failed";
       const ⟦2-char-id⟧ = await ⟦2-char-id⟧.json().catch((() => null)),
         ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
           var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 17 · Change · +10 / -10</summary>

```diff
@@ -504,33 +504,33 @@
       return null !== ⟦2-char-id⟧ && function(⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
         return ⟦2-char-id⟧.length >= ⟦2-char-id⟧ || ⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧)))
-      }(⟦2-char-id⟧) ? (console.warn(`Studio AI: ${JJ.name} thought out loud instead of answering`), "failed") : null === ⟦2-char-id⟧ ? null : {
+      }(⟦2-char-id⟧) ? (console.warn(`Studio AI: ${BB.name} thought out loud instead of answering`), "failed") : null === ⟦2-char-id⟧ ? null : {
         text: ⟦2-char-id⟧,
         isCutOff: ⟦2-char-id⟧(⟦2-char-id⟧)
       }
     }
   },
-  5792: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  5809: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      B: () => ⟦2-char-id⟧,
+      D: () => ⟦2-char-id⟧,
       F: () => ⟦2-char-id⟧,
       J: () => ⟦2-char-id⟧,
       N: () => ⟦2-char-id⟧,
-      P: () => ⟦2-char-id⟧,
+      R: () => ⟦2-char-id⟧,
       b: () => ⟦2-char-id⟧,
-      f: () => ⟦2-char-id⟧,
+      d: () => ⟦2-char-id⟧,
+      h: () => ⟦2-char-id⟧,
       i: () => ⟦2-char-id⟧,
-      j: () => ⟦2-char-id⟧,
       l: () => ⟦2-char-id⟧,
-      m: () => ⟦2-char-id⟧,
-      n: () => ⟦2-char-id⟧,
-      r: () => ⟦2-char-id⟧,
+      o: () => ⟦2-char-id⟧,
+      p: () => ⟦2-char-id⟧,
+      q: () => ⟦2-char-id⟧,
       s: () => ⟦2-char-id⟧,
       t: () => ⟦2-char-id⟧,
       x: () => ⟦2-char-id⟧,
       z: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(4275);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(4265);
     const ⟦2-char-id⟧ = 2⟦2-char-id⟧,
       ⟦2-char-id⟧ = 2⟦2-char-id⟧;
 
```

</details>

<details>
<summary>Hunk 18 · Change · +1 / -1</summary>

```diff
@@ -550,7 +550,7 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return (0, ⟦2-char-id⟧.u)(⟦2-char-id⟧, /\s+/g, (0, ⟦2-char-id⟧.p)(".!?")).flatMap((⟦2-char-id⟧ => ⟦2-char-id⟧.split("\n")))
+      return (0, ⟦2-char-id⟧.B)(⟦2-char-id⟧, /\s+/g, (0, ⟦2-char-id⟧.t)(".!?")).flatMap((⟦2-char-id⟧ => ⟦2-char-id⟧.split("\n")))
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 19 · Change · +1 / -1</summary>

```diff
@@ -567,7 +567,7 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return `${cJ}${JJ.replace(/\\/g,"\\\\").split(cJ).join(`\\${⟦2-char-id⟧}`)}${cJ}`
+      return `${TB}${BB.replace(/\\/g,"\\\\").split(TB).join(`\\${⟦2-char-id⟧}`)}${TB}`
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 20 · Change · +1 / -1</summary>

```diff
@@ -584,7 +584,7 @@
     const ⟦2-char-id⟧ = 3;
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧).filter((⟦2-char-id⟧ => ⟦2-char-id⟧.length >= ⟦2-char-id⟧ && !/\d/.test(⟦2-char-id⟧))).map((⟦2-char-id⟧ => `${JJ} ${cJ}`))
+      return ⟦2-char-id⟧(⟦2-char-id⟧).filter((⟦2-char-id⟧ => ⟦2-char-id⟧.length >= ⟦2-char-id⟧ && !/\d/.test(⟦2-char-id⟧))).map((⟦2-char-id⟧ => `${BB} ${TB}`))
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 21 · Change · +6 / -6</summary>

```diff
@@ -609,22 +609,22 @@
       }
     }
   },
-  4275: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  4265: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       return {
         notAfter: ⟦2-char-id⟧
       }
     }
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+      B: () => ⟦2-char-id⟧,
+      b: () => ⟦2-char-id⟧,
       d: () => ⟦2-char-id⟧,
       h: () => ⟦2-char-id⟧,
       j: () => ⟦2-char-id⟧,
-      k: () => ⟦2-char-id⟧,
-      m: () => ⟦2-char-id⟧,
-      o: () => ⟦2-char-id⟧,
+      l: () => ⟦2-char-id⟧,
       p: () => ⟦2-char-id⟧,
-      q: () => ⟦2-char-id⟧,
-      u: () => ⟦2-char-id⟧
+      t: () => ⟦2-char-id⟧,
+      x: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = ⟦2-char-id⟧("\\w$."),
       ⟦2-char-id⟧ = ⟦2-char-id⟧("\\w.,");
```

</details>

<details>
<summary>Hunk 22 · Change · +1 / -1</summary>

```diff
@@ -638,7 +638,7 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧.index > 0 && new RegExp(`[${cJ}]`).test(⟦2-char-id⟧.input[⟦2-char-id⟧.index - 1])
+      return ⟦2-char-id⟧.index > 0 && new RegExp(`[${TB}]`).test(⟦2-char-id⟧.input[⟦2-char-id⟧.index - 1])
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 23 · Change · +2 / -2</summary>

```diff
@@ -646,13 +646,13 @@
         return void 0 !== ⟦2-char-id⟧ && "function" !== typeof ⟦2-char-id⟧
       }(⟦2-char-id⟧) ? function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.flags.replace(/[gy]/g, ""),
-          ⟦2-char-id⟧ = new RegExp(`[^${ZJ}](?:${cJ.source})`, `${FJ}g`),
+          ⟦2-char-id⟧ = new RegExp(`[^${dB}](?:${TB.source})`, `${VB}g`),
           ⟦2-char-id⟧ = [],
           ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.index + ⟦2-char-id⟧[0].length;
             return ("" === ⟦2-char-id⟧[0] ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) : ⟦2-char-id⟧) - 1
           },
-          ⟦2-char-id⟧ = new RegExp(`(?:${cJ.source})`, `${FJ}y`).exec(⟦2-char-id⟧);
+          ⟦2-char-id⟧ = new RegExp(`(?:${TB.source})`, `${VB}y`).exec(⟦2-char-id⟧);
         if (⟦2-char-id⟧) {
           if (⟦2-char-id⟧.push(⟦2-char-id⟧), !⟦2-char-id⟧.global) return ⟦2-char-id⟧;
           ⟦2-char-id⟧.lastIndex = ⟦2-char-id⟧(⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 24 · Change · +1 / -1</summary>

```diff
@@ -664,7 +664,7 @@
         }
         return ⟦2-char-id⟧
       }(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.notAfter) : function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-        const ⟦2-char-id⟧ = new RegExp(⟦2-char-id⟧.source, `${cJ.flags.replace(/[gy]/g,"")}g`),
+        const ⟦2-char-id⟧ = new RegExp(⟦2-char-id⟧.source, `${TB.flags.replace(/[gy]/g,"")}g`),
           ⟦2-char-id⟧ = [];
         for (let ⟦2-char-id⟧ = ⟦2-char-id⟧.exec(⟦2-char-id⟧); ⟦2-char-id⟧; ⟦2-char-id⟧ = ⟦2-char-id⟧.exec(⟦2-char-id⟧))
           if (!⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧)) {
```

</details>

<details>
<summary>Hunk 25 · Change · +2 / -2</summary>

```diff
@@ -691,10 +691,10 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
-      return ⟦2-char-id⟧ + (⟦2-char-id⟧.unicode && (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.codePointAt(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? FJ : 0) > 65535 ? 2 : 1)
+      return ⟦2-char-id⟧ + (⟦2-char-id⟧.unicode && (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.codePointAt(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? VB : 0) > 65535 ? 2 : 1)
     }
   },
-  5832: () => {}
+  5849: () => {}
 };
 Object.freeze(modules);
 for (const ⟦2-char-id⟧ in modules) Object.freeze(modules[⟦2-char-id⟧]);
```

</details>

</details>

<details>
<summary><code>bundles/staging.bloxd.io/chunks/js/72.js</code> · modified · +4 / -4</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +2 / -2</summary>

```diff
@@ -1,9 +1,9 @@
 export const ⟦2-char-id⟧ = 72;
 export const ids = [72];
 export const modules = {
-  4139: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  4133: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧
+      d: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = '# Callbacks\n\nPlayers can use World Code in custom worlds get functions they\'ve written to run when game events happen. These special functions are called callbacks. The world code can be viewed by pressing F8 by default. Initially the world code will have this comment, which can be removed:\n\n```text\ntick onClose onPlayerJoin onPlayerLeave onPlayerJump onRespawnRequest\nplayerCommand onPlayerChat onPlayerAttemptChangeBlock onPlayerChangeBlock\nonPlayerDropItem onPlayerPickedUpItem onPlayerSelectInventorySlot\nonBlockStand onBlockStandStart onBlockStandStop onPlayerAttemptCraft\nonPlayerCraft onPlayerAttemptOpenChest onPlayerOpenedChest\nonPlayerMoveItemOutOfInventory onPlayerMoveInvenItem onPlayerMoveItemIntoIdxs\nonPlayerSwapInvenSlots onPlayerMoveInvenItemWithAmt onPlayerAttemptAltAction\nonPlayerAltAction onPlayerClick onPlayerClickUp onClientOptionUpdated\nonMobSettingUpdated onInventoryUpdated onChestUpdated\nonWorldAttemptChangeBlock onWorldChangeBlock onCreateBloxdMeshEntity\nonEntityCollision onPlayerAttemptSpawnMob onWorldAttemptSpawnMob\nonPlayerSpawnMob onWorldSpawnMob onWorldAttemptDespawnMob onMobDespawned\nonPlayerAttemptSpawnVehicle onWorldAttemptSpawnVehicle onPlayerSpawnVehicle\nonWorldSpawnVehicle onVehicleDespawned onEntityDeleted onPlayerAttack\nonPlayerDamagingOtherPlayer onPlayerDamagingMob onMobDamagingPlayer\nonMobDamagingOtherMob onAttemptKillPlayer onPlayerKilledOtherPlayer\nonMobKilledPlayer onPlayerKilledMob onMobKilledOtherMob onPlayerPotionEffect\nonPlayerDamagingMeshEntity onPlayerBreakMeshEntity onPlayerUsedThrowable\nonPlayerThrowableHitTerrain onTouchscreenActionButton onTaskClaimed\nonChunkLoaded onPlayerRequestChunk onItemDropCreated\nonPlayerStartChargingItem onPlayerFinishChargingItem onPlayerAttemptFish\nonPlayerSucceededFishCatch onPlayerFailedFishCatch onPlayerFinishQTE\nonPlayerToggledShopMenu onPlayerPlayedEmote onPlayerEnteredVehicle\nonPlayerExitedVehicle onPlayerBoughtShopItem onPlayerPressedButton\nonPlayerReleasedButton onUiRequestResponded doPeriodicSave\n\nTo use a callback, just assign a function to it in the world code!\ntick = () => {}\t\t\t or\t\t\t function tick() {}\n```\n\nYou can use `api.setCallbackValueFallback("callbackName", defaultValue)` to set a default value to be returned by your callback code if it throws an error.\n\n## doPeriodicSave\nCalled every so often.\n\nYou should save custom db values/s3 objects here.\n\nPersisted items ARE saved on graceful shutdown (e.g. uncaught error, update, etc),\n\nbut this helps prevent large data-loss on non-graceful shutdowns.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n\n\n\n\n\n\n\n\n\n## onAttemptKillPlayer\nCalled when a player is about to be killed\n\nReturn "preventDeath" to prevent the player from being killed\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| killedPlayer | `PlayerId` | The id of the player being killed |\n| attackingLifeform | `LifeformId` | The optional id of the lifeform attacking the player |\n\n\n### Returns:\n`void \\| "preventDeath"`\n\n\n\n\n\n\n\n\n\n\n\n## onBlockStand\nCalled when a player stands on a block\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player that stood on the block |\n| x | `number` | The x coordinate of the block that was stood on |\n| y | `number` | The y coordinate of the block that was stood on |\n| z | `number` | The z coordinate of the block that was stood on |\n| blockName | `BlockName` | The name of the block that was stood on |\n\n\n\n\n\n\n\n\n## onBlockStandStart\nCalled when a player enters a block. Only called once per block until the player leaves the block.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player that entered the block |\n| x | `number` | The x coordinate of the block that was entered |\n| y | `number` | The y coordinate of the block that was entered |\n| z | `number` | The z coordinate of the block that was entered |\n| blockName | `BlockName` | The name of the block that was entered |\n\n\n\n\n\n\n\n\n## onBlockStandStop\nCalled when a player leaves a block. Stepping from one block onto another calls onBlockStandStart for the new block first and onBlockStandStop for the old one after it, so check blockName (or x, y, z) before undoing what onBlockStandStart did, or stepping onto the block you care about cancels it at once.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player that left the block |\n| x | `number` | The x coordinate of the block that was left |\n| y | `number` | The y coordinate of the block that was left |\n| z | `number` | The z coordinate of the block that was left |\n| blockName | `BlockName` | The name of the block that was left |\n\n\n\n\n\n\n\n\n## onChestUpdated\nCalled when a chest is updated by a player\n\nx, y, z, will be null if isMoonstoneChest is true\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| initiatorEId | `PlayerId` | The id of the player who updated the chest |\n| isMoonstoneChest | `boolean` | Whether the chest is a moonstone chest |\n| x | `number \\| null` | The x coordinate of the chest |\n| y | `number \\| null` | The y coordinate of the chest |\n| z | `number \\| null` | The z coordinate of the chest |\n\n\n\n\n\n\n\n\n## onChunkLoaded\nCalled when a chunk is first loaded\n\nAPI Methods that modify the chunk like setBlock cannot be used here to make\n\npersisted changes, and will introduce client-server desync most cases,\n\nbut might have some creative uses if you know what you\'re doing.\n\nFor most use cases, consider using another callback e.g. tick.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| chunkId | `string` | The id of the chunk being loaded |\n| chunk | `LoadedChunk` | The chunk being loaded, which can be modified by this callback  * For world code callbacks this value will always be null. |\n| wasPersistedChunk | `boolean` | Whether the chunk was persisted |\n\n\n\n\n\n\n\n\n## onClientOptionUpdated\nCalled when a client option is updated\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player whose option was updated |\n| option | `ClientOption` | The option that was updated |\n| value | `any` | The new value of the option, always null for custom code |\n\n\n\n\n\n\n\n\n## onClose\nCalled when the lobby is shutting down\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| serverIsShuttingDown | `boolean` | Whether the server is shutting down |\n\n\n\n\n\n\n\n\n## onCreateBloxdMeshEntity\nCalled when a mesh entity is created\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| eId | `EntityId` | The id of the mesh entity |\n| type | `string` | The type of mesh entity |\n| initiatorId | `EntityId \\| null` | The id of the entity that created the mesh entity, if any |\n\n\n\n\n\n\n\n\n## onEntityCollision\nCalled when a entity collides with another entity\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| eId | `EntityId` | The id of the entity |\n| otherEId | `EntityId` | The id of the other entity |\n\n\n\n\n\n\n\n\n## onEntityDeleted\nCalled when any non-player entity is deleted, after any type specific callback such as "onMobDespawned".\n\nNot called when an item drop is picked up or expires, or when a throwable expires or hits something.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| eId | `EntityId` | The id of the entity deleted |\n| entityType | `EntityType` | What the entity was: for a mob, its mob type (e.g. "Draugr Zombie"), never "mob"; "Item" for an item drop |\n\n\n\n\n\n\n\n\n## onInventoryUpdated\nCalled when a player\'s inventory is updated\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player whose inventory was updated |\n\n\n\n\n\n\n\n\n## onItemDropCreated\nCalled when an item drop is created\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| itemEId | `EntityId` | The id of the item drop |\n| itemName | `string` | The name of the item dropped |\n| itemAmount | `number` | The amount dropped |\n| x | `number` | The x coordinate of the item drop |\n| y | `number` | The y coordinate of the item drop |\n| z | `number` | The z coordinate of the item drop |\n\n\n\n\n\n\n\n\n## onMobDamagingOtherMob\nCalled when a mob is damaging another mob\n\nReturn "preventDamage" to prevent damage\n\nReturn number to change damage dealt to that amount\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| attackingMob | `MobId` | the id of the mob attacking |\n| damagedMob | `MobId` | the id of the mob being damaged |\n| damageDealt | `number` | the amount of damage dealt |\n| withItem | `string` | the item used to attack |\n| damageInfo | `DamageInfo` | what dealt the hit: a melee swing, an explosion, a projectile, etc. |\n\n\n### Returns:\n`number \\| void \\| "preventDamage"`\n\n\n\n\n\n\n\n\n\n\n\n## onMobDamagingPlayer\nCalled when a mob is damaging a player\n\nReturn "preventDamage" to prevent damage\n\nReturn number to change damage dealt to that amount\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| attackingMob | `MobId` | the id of the mob damaging the player |\n| damagedPlayer | `PlayerId` | the id of the player being damaged |\n| damageDealt | `number` | the amount of damage dealt |\n| withItem | `string` | the item used to attack |\n| damageInfo | `DamageInfo` | what dealt the hit: a melee swing, an explosion, a projectile, etc. |\n\n\n### Returns:\n`number \\| void \\| "preventDamage"`\n\n\n\n\n\n\n\n\n\n\n\n## onMobDespawned\nCalled when a mob is gone for any reason: killed, despawned by the world, or removed by code. Use it to know when mobs you spawned are dead.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| mobId | `MobId` | The id of the mob despawned |\n\n\n\n\n\n\n\n\n## onMobKilledOtherMob\nCalled when a mob kills another mob\n\nReturn "preventDrop" to prevent the mob from dropping items\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| attackingMob | `MobId` | The id of the mob attacking |\n| killedMob | `MobId` | The id of the mob killed |\n| damageDealt | `number` | The amount of damage dealt |\n| withItem | `string` | The item used to attack |\n\n\n### Returns:\n`void \\| "preventDrop"`\n\n\n\n\n\n\n\n\n\n\n\n## onMobKilledPlayer\nCalled when a mob kills a player\n\nReturn "keepInventory" to not drop the player\'s inventory\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| attackingMob | `any` | The id of the mob attacking |\n| killedPlayer | `any` | The id of the player killed |\n| damageDealt | `any` | The amount of damage dealt |\n| withItem | `any` | The item used to attack |\n\n\n### Returns:\n`void \\| "keepInventory"`\n\n\n\n\n\n\n\n\n\n\n\n## onMobSettingUpdated\nCalled when a mob setting is updated\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| mobId | `MobId` | The id of the mob whose setting was updated |\n| setting | `MobSetting` | The setting that was updated |\n| value | `any` | The new value of the setting |\n\n\n\n\n\n\n\n\n## onPlayerAltAction\nCalled when player completes an alt action. Right click, the interact bind (E by default) and a mobile tap all arrive here; a left click does not, so this is the callback to use for anything a player should have to choose to do rather than trigger by swinging.\n\nKeeps firing while the input is held, roughly every 50-150ms. That is harmless for anything idempotent, but an interaction that grants an item, charges a currency or advances a conversation has to swallow the repeats itself - open shops with toggle off, and debounce the rest per player.\n\nThe co-ordinates will be undefined if there is no targeted block (and block will be "Air")\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player completing the alt action |\n| x | `number` | The x coordinate of the targeted block |\n| y | `number` | The y coordinate of the targeted block |\n| z | `number` | The z coordinate of the targeted block |\n| block | `BlockName` | The name of the targeted block |\n| targetEId | `EntityId \\| null` | The id of the targeted entity |\n\n\n\n\n\n\n\n\n## onPlayerAttack\nCalled when a player attacks another player\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `string` | The id of the player attacking |\n\n\n\n\n\n\n\n\n## onPlayerAttemptAltAction\nCalled when player alt actions (right click on pc).\n\nThe co-ordinates will be undefined if there is no targeted block (and block will be "Air")\n\nSome actions can be prevented by returning "preventAction",\n\nbut this may not work as well for certain actions which the game client predicts to succeed -\n\ntest it to see if it works for your use case, feel free to report any broken ones.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player attempting the alt action |\n| x | `number` | The x coordinate of the targeted block |\n| y | `number` | The y coordinate of the targeted block |\n| z | `number` | The z coordinate of the targeted block |\n| block | `BlockName` | The name of the targeted block |\n| targetEId | `EntityId \\| null` | The id of the targeted entity |\n\n\n### Returns:\n`void \\| "preventAction"`\n\n\n\n\n\n\n\n\n\n\n\n## onPlayerAttemptChangeBlock\nCalled before a player changes a block.\n\nReturn "preventChange" to stop it. Then onPlayerChangeBlock will not run.\n\nGrowing EZ placements validate at request time and again at completion; keep validation free of rewards or charges.\n\nWhen placing, fromBlock is Air, or the slab a matching slab completes. When breaking, toBlock is Air.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The player trying to change the block |\n| x | `number` | The block\'s x coordinate |\n| y | `number` | The block\'s y coordinate |\n| z | `number` | The block\'s z coordinate |\n| fromBlock | `BlockName` | The current block |\n| toBlock | `BlockName` | The proposed block |\n| droppedItem | `BlockName \\| null` | The item that would drop |\n| fromBlockInfo | `MultiBlockInfo` | The current multiblock info |\n| toBlockInfo | `MultiBlockInfo` | The proposed multiblock info |\n\n\n### Returns:\n`void \\| "preventChange"`\n\n\n\n\n\n\n\n\n\n\n\n## onPlayerAttemptCraft\nCalled when a player attempts to craft an item\n\nReturn "preventCraft" to prevent a craft from happening\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player that is attempting to craft the item |\n| itemName | `string` | The name of the item that is being crafted |\n| craftingIdx | `number` | The index of the used recipe in the item\'s recipe list |\n| craftTimes | `number` | The number of times the craft recipe is used at once (e.g. shift held while crafting) |\n\n\n### Returns:\n`void \\| "preventCraft"`\n\n\n\n\n\n\n\n\n\n\n\n## onPlayerAttemptFish\nCalled once when a fishing hook first enters water. Coordinates are the bob\'s position at water entry.\n\nReturn "preventFish" to cancel, or { caughtItemName?, biteDelayMs?, qte? } to select the fish and override the rod\'s bite delay\n\nand nine-second timed-click QTE. Default delays are Rusty 7\u20139 seconds, Sturdy 5\u20137, and Carbon/other rods 2\u20134.\n\nThe selected fish is fixed for the attempt; omitting caughtItemName uses the engine\'s default fish selection.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| rodName | `string` |  |\n| x | `number` |  |\n| y | `number` |  |\n| z | `number` |  |\n\n\n### Returns:\n`void \\| FishingAttemptOptions \\| "preventFish"`\n\n\n\n\n\n\n\n\n\n\n\n## onPlayerAttemptOpenChest\nCalled when a player attempts to open a chest\n\nReturn "preventOpen" to prevent the player from opening the chest\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player that is attempting to open the chest |\n| x | `number` | The x coordinate of the chest that the player is attempting to open |\n| y | `number` | The y coordinate of the chest that the player is attempting to open |\n| z | `number` | The z coordinate of the chest that the player is attempting to open |\n| isMoonstoneChest | `boolean` | Whether the chest is a moonstone chest |\n| isIronChest | `boolean` | Whether the chest is an iron chest |\n\n\n### Returns:\n`void \\| "preventOpen"`\n\n\n\n\n\n\n\n\n\n\n\n## onPlayerAttemptSpawnMob\nCalled when a player attempts to spawn a mob, e.g. using a spawn orb.\n\nReturn "preventSpawn" to prevent the mob from spawning.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player |\n| mobType | `MobType` | The type of mob |\n| x | `number` | The potential x coordinate of the mob |\n| y | `number` | The potential y coordinate of the mob |\n| z | `number` | The potential z coordinate of the mob |\n\n\n### Returns:\n`void \\| "preventSpawn"`\n\n\n\n\n\n\n\n\n\n\n\n## onPlayerAttemptSpawnVehicle\nCalled when a vehicle is spawned on a player\'s behalf.\n\nReturn "preventSpawn" to prevent the vehicle from spawning.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player |\n| vehicleType | `MeshEntityVehicleType` | The type of vehicle |\n| x | `number` | The potential x coordinate of the vehicle |\n| y | `number` | The potential y coordinate of the vehicle |\n| z | `number` | The potential z coordinate of the vehicle |\n\n\n### Returns:\n`void \\| "preventSpawn"`\n\n\n\n\n\n\n\n\n\n\n\n## onPlayerBoughtShopItem\nCalled after a player successfully buys a shop item\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player that bought the item |\n| categoryKey | `ShopCategoryKey` | The shop category key |\n| itemKey | `ShopItemKey` | The shop item key |\n| item | `BoughtShopItem` | The resolved shop item (with per-player overrides applied, internal properties stripped) |\n| userInput | `string` | The user input provided, if the item has a userInput config |\n\n\n\n\n\n\n\n\n## onPlayerBreakMeshEntity\nCalled when a player breaks a mesh entity\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player breaking the mesh entity |\n| entityId | `EntityId` | The id of the mesh entity being broken |\n\n\n\n\n\n\n\n\n## onPlayerChangeBlock\nIn World Code, called once after all attempt callbacks allow a player block change, before the block is set.\n\nThe current block and its data are still available. Return "preventChange" to cancel the request.\n\nReturn "preventDrop" to stop the engine item drop, or [x, y, z] to set its position.\n\nDrop returns do not skip built-in validation or change notifications; any "preventDrop" takes precedence over a position.\n\nA block written here with api.setBlock is preserved, with normal drops/inventory charges unless the request is cancelled.\n\nCancellation does not undo your own script effects. Built-in change effects run after this callback.\n\nFor growing EZ placements this runs at request time only; completion validates again without repeating this callback.\n\nWriting the target yourself completes that EZ request immediately, without delayed growth or a growth refund.\n\nNative games/plugins receive uninterrupted before-commit notifications and must veto in onPlayerAttemptChangeBlock.\n\nWhen placing, fromBlock is Air, or the slab a matching slab completes. When breaking, toBlock is Air.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player that changed the block |\n| x | `number` | The x coordinate of the block that was changed |\n| y | `number` | The y coordinate of the block that was changed |\n| z | `number` | The z coordinate of the block that was changed |\n| fromBlock | `BlockName` | The old block that was replaced |\n| toBlock | `BlockName` | The new block that was placed |\n| droppedItem | `BlockName \\| null` | The item that was dropped |\n| fromBlockInfo | `MultiBlockInfo` | The info of the old block that was replaced |\n| toBlockInfo | `MultiBlockInfo` | The info of the new block that was placed |\n| dropsPrevented | `boolean` | Whether earlier notifications prevented drops; false during World Code validation |\n\n\n### Returns:\n`void \\| "preventChange" \\| "preventDrop" \\| [number, number, number]`\n\n\n\n\n\n\n\n\n\n\n\n## onPlayerChat\nCalled when a player sends a chat message\n\nReturn false or null to prevent the broadcast of the message.\n\nReturn a string or CustomTextStyling to add a prefix to message.\n\nReturn for most flexibility: an object where keys are playerIds -\n\nthe value for a playerId being false means that player won\'t receive the message. Every player needs a key: one left out doesn\'t receive it either, so give the players who should see it {} (or a prefixContent).\n\nOtherwise playerId values should be an object with (optional) keys\n\nprefixContent and chatContent to modify the prefix and the chat.\n\nCustomTextStyling[] prefixContent is expected, e.g. [["prefix"]] or [[{ str: "prefix" }]]. A colour goes inside style: [[{ str: "[Red]", style: { color: "red" } }]]; any other key makes the whole return value invalid, and the message goes to everyone.\n\nWorld code is not permitted to specify chatContent, it will be ignored.\n\nA message world code sends while handling the chat that shows the player\'s name and their message, e.g. "Bob: hi" or "hi there - Bob", counts as their chat: players who ignore them don\'t get it, and others can report it. Text of two or more words and 8+ characters can sit anywhere in it; shorter text must end it, straight after the name.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player that sent the message |\n| chatMessage | `string` | The message that the player sent |\n| channelName | `string` | The name of the channel that the message was sent in |\n\n\n### Returns:\n`boolean \\| void \\| ChatTags \\| OnPlayerChatObjectResponse`\n\n\n\n\n\n\n\n\n\n\n\n## onPlayerClick\nCalled when a player clicks\n\nDon\'t have important functionality depending on wasAltClick,\n\nas it\'ll always be false for touchscreen players.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player clicking |\n| wasAltClick | `boolean` | Whether the click was an alt click (e.g. right click |\n| x | `number` |  |\n| y | `number` |  |\n| z | `number` |  |\n| block | `BlockName` |  |\n| targetEId | `EntityId \\| null` |  |\n\n\n\n\n\n\n\n\n## onPlayerClickUp\nCalled when a player releases a click (mouse-up on desktop, touch-end on mobile).\n\nFires for both primary and secondary click releases.\n\nKeep in mind wasAltClick will always be false for touchscreen players.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player releasing click |\n| wasAltClick | `boolean` | Whether the released click was an alt click (e.g. right click |\n| x | `number` |  |\n| y | `number` |  |\n| z | `number` |  |\n| block | `BlockName` |  |\n| targetEId | `EntityId \\| null` |  |\n\n\n\n\n\n\n\n\n## onPlayerCraft\nCalled when a player crafts an item\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player that crafted the item |\n| itemName | `string` | The name of the item that was crafted |\n| craftingIdx | `number` | The index of the used recipe in the item\'s recipe list |\n| recipe | `RecipesForItem[number]` | The recipe that was used to craft the item |\n| craftTimes | `number` | The number of times the craft recipe is used at once (e.g. shift held while crafting) |\n\n\n\n\n\n\n\n\n## onPlayerDamagingMeshEntity\nCalled when a player is damaging a mesh entity\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player damaging the mesh entity |\n| damagedId | `EntityId` | The id of the mesh entity being damaged |\n| damageDealt | `number` | The amount of damage dealt |\n| withItem | `string` | The item used to attack |\n\n\n\n\n\n\n\n\n## onPlayerDamagingMob\nCalled when a player is damaging a mob\n\nReturn "preventDamage" to prevent damage\n\nReturn number to change damage dealt to that amount\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player damaging the mob |\n| mobId | `MobId` | The id of the mob being damaged |\n| damageDealt | `number` | The amount of damage dealt |\n| withItem | `string` | The item used to attack |\n| damagerDbId | `PlayerDbId` | The database id of the player attacking |\n| damageInfo | `DamageInfo` | What dealt the hit: a melee swing, an explosion, a projectile, etc. |\n\n\n### Returns:\n`number \\| void \\| "preventDamage"`\n\n\n\n\n\n\n\n\n\n\n\n## onPlayerDamagingOtherPlayer\nCalled when a player is damaging another player\n\nReturn "preventDamage" to prevent damage\n\nReturn number to change damage dealt to that amount\n\nSometimes the damager will have left the game (e.g. spikes placer);\n\nin this case, attackingPlayer will be the damagedPlayer,\n\nbut we pass damagerDbId for use cases where it\'s important.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| attackingPlayer | `PlayerId` | The id of the player attacking |\n| damagedPlayer | `PlayerId` | The id of the player being damaged |\n| damageDealt | `number` | The amount of damage dealt |\n| withItem | `string` | The item used to attack |\n| bodyPartHit | `LifeformBodyPart` | The body part hit |\n| damagerDbId | `PlayerDbId` | The database id of the player attacking |\n| damageInfo | `DamageInfo` | What dealt the hit: a melee swing, an explosion, a projectile, etc. |\n\n\n### Returns:\n`number \\| void \\| "preventDamage"`\n\n\n\n\n\n\n\n\n\n\n\n## onPlayerDropItem\nCalled when a player drops an item\n\nReturn "preventDrop" to prevent the player from dropping the item at all.\n\nReturn "allowButNoDroppedItemCreated" to allow discarding items without dropping them.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player that dropped the item |\n| x | `number` | The x coordinate of the item that was dropped |\n| y | `number` | The y coordinate of the item that was dropped |\n| z | `number` | The z coordinate of the item that was dropped |\n| itemName | `ItemName` | The name of the item that was dropped |\n| itemAmount | `number` | The amount of the item that was dropped |\n| fromIdx | `number` | The index of the item that was dropped from the player\'s inventory |\n\n\n### Returns:\n`void \\| "preventDrop" \\| "allowButNoDroppedItemCreated"`\n\n\n\n\n\n\n\n\n\n\n\n## onPlayerEnteredVehicle\nCalled when a player enters a vehicle\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player that entered the vehicle |\n| vehicleType | `MeshEntityVehicleType` | The type of the vehicle |\n| vehicleEId | `EntityId` | The id of the vehicle |\n\n\n\n\n\n\n\n\n## onPlayerExitedVehicle\nCalled when a player exits a vehicle\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player that exited the vehicle |\n| vehicleType | `MeshEntityVehicleType` | The type of the vehicle |\n| vehicleEId | `EntityId` | The id of the vehicle |\n\n\n\n\n\n\n\n\n## onPlayerFailedFishCatch\nCalled after the fishing QTE fails or its time window expires, after removing the bob/session.\n\nCoordinates are the fishing position captured at water entry. Retracting, switching rods, dying, and leaving cancel silently.\n\ncaughtItemName is the item selected for the failed attempt; no reward is given.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| rodName | `string` |  |\n| x | `number` |  |\n| y | `number` |  |\n| z | `number` |  |\n| caughtItemName | `ItemName` |  |\n\n\n\n\n\n\n\n\n## onPlayerFinishChargingItem\nCalled when a player finishes charging an item\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player charging the item |\n| used | `boolean` | Whether the item was used |\n| itemName | `string` | The name of the charged item |\n| duration | `number` | The duration of the charge |\n\n\n\n\n\n\n\n\n## onPlayerFinishQTE\n\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| qteId | `QTERequestId` |  |\n| result | `boolean` |  |\n\n\n\n\n\n\n\n\n## onPlayerJoin\nCalled when a player joins the lobby\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `string` | The id of the player that joined |\n| fromGameReset | `boolean` | Whether this call is from a game reset (used by SessionBasedGame) |\n\n\n\n\n\n\n\n\n## onPlayerJump\nCalled when a player jumps\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `string` | The id of the player that jumped |\n\n\n\n\n\n\n\n\n## onPlayerKilledMob\nCalled when a player kills a mob\n\nReturn "preventDrop" to prevent the mob from dropping items\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player killed |\n| mobId | `MobId` | The id of the mob that killed the player |\n| damageDealt | `number` | The amount of damage dealt |\n| withItem | `string` | The item used to attack |\n\n\n### Returns:\n`void \\| "preventDrop"`\n\n\n\n\n\n\n\n\n\n\n\n## onPlayerKilledOtherPlayer\nCalled when a player kills another player\n\nReturn "keepInventory" to not drop the player\'s inventory\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| attackingPlayer | `string` | The id of the player attacking |\n| killedPlayer | `string` | The id of the player killed |\n| damageDealt | `number` | The amount of damage dealt |\n| withItem | `string` | The item used to attack |\n\n\n### Returns:\n`void \\| "keepInventory"`\n\n\n\n\n\n\n\n\n\n\n\n## onPlayerLeave\nCalled when a player leaves the lobby\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `string` | The id of the player that left |\n| serverIsShuttingDown | `boolean` | Whether the server is shutting down |\n\n\n\n\n\n\n\n\n## onPlayerMoveInvenItem\nCalled for all types of inventory item movement.\n\nCertain methods of moving item can result in splitting a stack\n\ninto multiple slots. (e.g. shift-click).\n\ntoStartIdx and toEndIdx provide the min and max idxs moved into.\n\nReturn "preventChange" to prevent item movement.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player moving the item |\n| fromIdx | `number` | The index that the item is being moved from |\n| toStartIdx | `number` | The start index that the item is being moved into |\n| toEndIdx | `number` | The end index that the item is being moved into |\n| amt | `number` | The amount of the item being moved |\n\n\n### Returns:\n`void \\| "preventChange"`\n\n\n\n\n\n\n\n\n\n\n\n## onPlayerMoveInvenItemWithAmt\nReturn "preventChange" to prevent the movement\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player moving the item |\n| i | `number` | The index of the first slot |\n| j | `number` | The index of the second slot |\n| amt | `number` | The amount of the item being moved |\n\n\n### Returns:\n`void \\| "preventChange"`\n\n\n\n\n\n\n\n\n\n\n\n## onPlayerMoveItemIntoIdxs\nCalled when a player moves an item into an index within a range of inventory slots\n\nReturn "preventChange" to prevent the movement\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player moving the item |\n| start | `number` | The start index of the range |\n| end | `number` | The end index of the range |\n| moveIdx | `number` | The index of the item being moved |\n| itemAmount | `number` | The amount of the item being moved |\n\n\n### Returns:\n`void \\| "preventChange"`\n\n\n\n\n\n\n\n\n\n\n\n## onPlayerMoveItemOutOfInventory\nCalled when a player moves an item out of their inventory\n\nReturn "preventChange" to prevent the movement\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player moving the item |\n| itemName | `string` | The name of the item being moved |\n| itemAmount | `number` | The amount of the item being moved |\n| fromIdx | `number` | The index which the item is being moved from |\n| movementType | `string` | The type of movement that occurred |\n\n\n### Returns:\n`void \\| "preventChange"`\n\n\n\n\n\n\n\n\n\n\n\n## onPlayerOpenedChest\nCalled when a player opens a chest\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player that opened the chest |\n| x | `number` | The x coordinate of the chest that was opened |\n| y | `number` | The y coordinate of the chest that was opened |\n| z | `number` | The z coordinate of the chest that was opened |\n| isMoonstoneChest | `boolean` | Whether the chest is a moonstone chest |\n| isIronChest | `boolean` | Whether the chest is an iron chest |\n\n\n\n\n\n\n\n\n## onPlayerPickedUpItem\nCalled when a player picks up an item\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player that picked up the item |\n| itemName | `string` | The name of the item that was picked up |\n| itemAmount | `number` | The amount of the item that was picked up |\n| itemEntityId | `EntityId` | The entityId of the item that was picked up |\n\n\n\n\n\n\n\n\n## onPlayerPlayedEmote\n/** Called after a player plays an emote from the emote wheel. */\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| emoteId | `string` |  |\n\n\n\n\n\n\n\n\n## onPlayerPotionEffect\nCalled when a player is affected by a new potion effect\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| initiatorId | `string` | The id of the player who initiated the potion effect |\n| targetId | `string` | The id of the player who has started being affected |\n| effectName | `"Damage" \\| "Speed" \\| "Damage Reduction" \\| "Invisible" \\| "Jump Boost" \\| "Knockback" \\| "Poisoned" \\| "Slowness" \\| "Weakness" \\| "Cleansed" \\| "Instant Damage" \\| "Health Regen" \\| "Healing Pulse" \\| "Instant Health" \\| "Haste" \\| "Shield" \\| "Double Jump" \\| "Heat Resistance" \\| "Thief" \\| "X-Ray Vision" \\| "Mining Yield" \\| "Brain Rot" \\| "Aura" \\| "Wall Climbing" \\| "Air Walk" \\| "Pickpocketer" \\| "Lifesteal" \\| "Bounciness" \\| "Blindness" \\| "Poopy" \\| "Glowing" \\| "Night Vision"` | The name of the potion effect |\n\n\n### Returns:\n`void \\| "preventEffect"`\n\n\n\n\n\n\n\n\n\n\n\n## onPlayerPressedButton\nCalled when a player presses a custom button\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player pressing the button |\n| buttonId | `string` | The id of the button pressed |\n\n\n\n\n\n\n\n\n## onPlayerReleasedButton\nCalled when a player releases a custom button\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player releasing the button |\n| buttonId | `string` | The id of the button released |\n\n\n\n\n\n\n\n\n## onPlayerRequestChunk\nCalled when a player requests a chunk\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player requesting the chunk |\n| chunkX | `number` | The x coordinate of the chunk being requested |\n| chunkY | `number` | The y coordinate of the chunk being requested |\n| chunkZ | `number` | The z coordinate of the chunk being requested |\n| chunkId | `string` | The id of the chunk being requested |\n\n\n\n\n\n\n\n\n## onPlayerSelectInventorySlot\nCalled when a player selects a different inventory slot.\n\nThis will be called eventually when you have already set the slot using\n\napi.setSelectedInventorySlotI so be careful not to cause an infinite loop doing this.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player that selected the inventory slot |\n| slotIndex | `number` | The index of the inventory slot that was selected |\n\n\n\n\n\n\n\n\n## onPlayerSpawnMob\nCalled when a mob is spawned by a player\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player who spawned the mob |\n| mobId | `MobId` | The id of the mob |\n| mobType | `MobType` | The type of mob |\n| x | `number` | The x coordinate of the mob |\n| y | `number` | The y coordinate of the mob |\n| z | `number` | The z coordinate of the mob |\n| mobHerdId | `MobHerdId` | The herd id of the mob |\n| playSoundOnSpawn | `boolean` | Whether to play a sound on spawn |\n\n\n\n\n\n\n\n\n## onPlayerSpawnVehicle\nCalled when a vehicle is spawned by a player, e.g. by placing a boat\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player who spawned the vehicle |\n| vehicleEId | `EntityId` | The id of the vehicle |\n| vehicleType | `MeshEntityVehicleType` | The type of vehicle |\n| x | `number` | The x coordinate of the vehicle |\n| y | `number` | The y coordinate of the vehicle |\n| z | `number` | The z coordinate of the vehicle |\n\n\n\n\n\n\n\n\n## onPlayerStartChargingItem\nCalled when a player starts charging an item\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player charging the item |\n| itemName | `string` | The name of the item being charged |\n\n\n### Returns:\n`void \\| "preventCharge"`\n\n\n\n\n\n\n\n\n\n\n\n## onPlayerSucceededFishCatch\nCalled after the fishing QTE succeeds and the bob/session have been removed.\n\nCoordinates are the fishing position captured at water entry. caughtItemName is the item selected for the attempt.\n\nReturning nothing gives one of that item, or drops it if the inventory is full.\n\nReturn "preventDrop" to suppress the default reward and award custom catches here instead.\n\nReturn "preventItemGrant" to deliver the item yourself while keeping the default catch effects.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| rodName | `string` |  |\n| x | `number` |  |\n| y | `number` |  |\n| z | `number` |  |\n| caughtItemName | `ItemName` |  |\n\n\n### Returns:\n`void \\| "preventDrop" \\| "preventItemGrant"`\n\n\n\n\n\n\n\n\n\n\n\n## onPlayerSwapInvenSlots\nReturn "preventChange" to prevent the swap\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player swapping the inventory slots |\n| i | `number` | The index of the first slot |\n| j | `number` | The index of the second slot |\n\n\n### Returns:\n`void \\| "preventChange"`\n\n\n\n\n\n\n\n\n\n\n\n## onPlayerThrowableHitTerrain\nCalled when a player\'s thrown projectile hits the terrain\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player that threw the throwable item |\n| throwableName | `ThrowableItem` | The name of the throwable item |\n| thrownEntityId | `EntityId` | The id of the entity which hit the terrain |\n\n\n\n\n\n\n\n\n## onPlayerToggledShopMenu\nCalled when a player opens or closes the shop menu\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player whose shop menu changed |\n| isOpen | `boolean` | Whether the shop menu is now open |\n\n\n\n\n\n\n\n\n## onPlayerUsedThrowable\nCalled when a player uses a throwable item\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player using the throwable item |\n| throwableName | `ThrowableItem` | The name of the throwable item |\n| thrownEntityId | `EntityId` | The id of the projectile created by the player |\n\n\n\n\n\n\n\n\n## onRespawnRequest\nCalled when a player requests to respawn.\n\nOptionally return the respawn location. Defaults to [0, 0, 0].\n\nReturn true to handle yourself (good for async,\n\nbut be careful that the player isn\'t at the place they died,\n\nas they could pick up their old items or hit the player they were fighting).\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `string` | The id of the player that requested to respawn |\n\n\n### Returns:\n`true \\| void \\| number[]`\n\n\n\n\n\n\n\n\n\n\n\n## onTaskClaimed\nCalled when a player claims a task\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `string` | The id of the player claiming the task |\n| taskId | `any` | The id of the task being claimed |\n| isPromoTask | `any` | Whether the task is a promo task |\n| claimedRewards | `any` | The rewards claimed by the player |\n\n\n### Returns:\n`any`\n\n\n\n\n\n\n\n\n\n\n\n## onTouchscreenActionButton\nSet client option `touchscreenActionButton` to take effect\n\nCalled when a player presses the touchscreen action button\n\nCalled for both touchDown and touchUp\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player pressing the touchscreen action button |\n| touchDown | `boolean` | Whether the touchscreen action button was pressed or released |\n\n\n\n\n\n\n\n\n## onUiRequestResponded\nCalled when a player responds to a UI request.\n\n\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The id of the player responding to the UI request. |\n| id | `UiRequestId` | The id of the UI request. |\n| response | `boolean` | The response to the UI request. |\n\n\n\n\n\n\n\n\n## onVehicleDespawned\nCalled when a vehicle is despawned\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| vehicleEId | `EntityId` | The id of the vehicle despawned |\n| vehicleType | `MeshEntityVehicleType` | The type of vehicle despawned |\n\n\n\n\n\n\n\n\n## onWorldAttemptChangeBlock\nCalled before the world changes a block.\n\nReturn "preventChange" to stop it. Then onWorldChangeBlock will not run.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| x | `number` | The block\'s x coordinate |\n| y | `number` | The block\'s y coordinate |\n| z | `number` | The block\'s z coordinate |\n| fromBlock | `BlockName` | The current block |\n| toBlock | `BlockName` | The proposed block |\n| initiatorDbId | `string \\| null` | The player who caused the change, or null for game code |\n| extraInfo | `WorldBlockChangedInfo` | More information about the change |\n\n\n### Returns:\n`void \\| "preventChange"`\n\n\n\n\n\n\n\n\n\n\n\n## onWorldAttemptDespawnMob\nCalled when the world tries to despawn a mob, e.g. one far from every player. Not called when a mob is killed: use onMobDespawned for that.\n\nReturn "preventDespawn" to prevent the mob from despawning.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| mobId | `MobId` | The id of the mob despawned |\n\n\n### Returns:\n`void \\| "preventDespawn"`\n\n\n\n\n\n\n\n\n\n\n\n## onWorldAttemptSpawnMob\nCalled when the world attempts to spawn a mob.\n\nReturn "preventSpawn" to prevent the mob from spawning.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| mobType | `MobType` | The type of mob |\n| x | `number` | The potential x coordinate of the mob |\n| y | `number` | The potential y coordinate of the mob |\n| z | `number` | The potential z coordinate of the mob |\n\n\n### Returns:\n`void \\| "preventSpawn"`\n\n\n\n\n\n\n\n\n\n\n\n## onWorldAttemptSpawnVehicle\nCalled when the world attempts to spawn a vehicle.\n\nReturn "preventSpawn" to prevent the vehicle from spawning.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| vehicleType | `MeshEntityVehicleType` | The type of vehicle |\n| x | `number` | The potential x coordinate of the vehicle |\n| y | `number` | The potential y coordinate of the vehicle |\n| z | `number` | The potential z coordinate of the vehicle |\n\n\n### Returns:\n`void \\| "preventSpawn"`\n\n\n\n\n\n\n\n\n\n\n\n## onWorldChangeBlock\nIn World Code, called after all attempt callbacks allow a world block change, before the block is set.\n\nRead the old block/data here; return "preventChange" to cancel the request, or "preventDrop" to stop its engine item drop.\n\nDrop prevention does not skip built-in validation or change notifications.\n\nBlocks/data written here are preserved. Cancelling the original request does not undo your script effects.\n\nNative games/plugins receive uninterrupted before-commit notifications and must veto in onWorldAttemptChangeBlock.\n\ninitiatorDbId is null for game code, such as a growing sapling.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| x | `number` | The x coordinate of the block |\n| y | `number` | The y coordinate of the block |\n| z | `number` | The z coordinate of the block |\n| fromBlock | `BlockName` | The old block that was replaced |\n| toBlock | `BlockName` | The new block that was placed |\n| initiatorDbId | `string \\| null` | The id of the player who updated the block |\n| extraInfo | `WorldBlockChangedInfo` | Extra info about the block change |\n| dropsPrevented | `boolean` | Whether earlier notifications prevented drops; false during World Code validation |\n\n\n### Returns:\n`void \\| "preventChange" \\| "preventDrop"`\n\n\n\n\n\n\n\n\n\n\n\n## onWorldSpawnMob\nCalled when a mob is spawned by the world\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| mobId | `MobId` | The id of the mob |\n| mobType | `MobType` | The type of mob |\n| x | `number` | The x coordinate of the mob |\n| y | `number` | The y coordinate of the mob |\n| z | `number` | The z coordinate of the mob |\n| mobHerdId | `MobHerdId` | The herd id of the mob |\n| playSoundOnSpawn | `boolean` | Whether to play a sound on spawn |\n\n\n\n\n\n\n\n\n## onWorldSpawnVehicle\nCalled when a vehicle is spawned by the world\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| vehicleEId | `EntityId` | The id of the vehicle |\n| vehicleType | `MeshEntityVehicleType` | The type of vehicle |\n| x | `number` | The x coordinate of the vehicle |\n| y | `number` | The y coordinate of the vehicle |\n| z | `number` | The z coordinate of the vehicle |\n\n\n\n\n\n\n\n\n## playerCommand\nCalled when a player sends a command\n\nA message world code sends while handling the command that ends with the player\'s name and then the command, its arguments or what follows its first argument, e.g. "[Whisper] Bob: hi" for "msg Alice hi", counts as their chat, as for onPlayerChat. So does one holding their name and, anywhere, what follows the first argument when that is two or more words and 8+ characters, e.g. "hi there - Bob".\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `string` | The id of the player that sent the command |\n| command | `string` | The command that the player sent |\n\n\n### Returns:\n`boolean`\n\n\n\n\n\n\n\n\n\n\n\n## tick\nCalled every tick, 20 times per second\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| ms | `number` | The fixed timestep, can be used as "milliseconds since last tick" |\n\n\n\n\n\n\n',
       ⟦2-char-id⟧ = '# Client Options\n\nA player\'s "Client Options" impact what they are capable of doing in the world. For example you can give them a double jump by setting the player\'s `airJumpCount` to `1`. Alternatively their health bar can be increased by setting their `maxHealth` to `200`. These API methods allow you to modify the client options:\n\n```js\n/**\n * Modify a client option at runtime and send to the client if it changed\n *\n * @param {PlayerId} playerId\n * @param {PassedOption} option - The name of the option\n * @param {ClientOptions[PassedOption]} value - The new value of the option\n * @returns {void}\n */\nsetClientOption(playerId, option, value)\n\n/**\n * Returns the current value of a client option\n *\n * @param {PlayerId} playerId\n * @param {PassedOption} option\n * @returns {ClientOptions[PassedOption]}\n */\ngetClientOption(playerId, option)\n\n/**\n * Modify client options at runtime\n *\n * @param {PlayerId} playerId\n * @param {Partial<ClientOptions>} optionsObj - An object which contains key value pairs of new settings. E.g {canChange: true, speedMultiplier: false}\n * @returns {void}\n */\nsetClientOptions(playerId, optionsObj)\n\n/**\n * Sets a client option to its default value. This will be the value stored in your game\'s defaultClientOptions, otherwise Bloxd\'s default.\n *\n * @param {PlayerId} playerId\n * @param {ClientOption} option\n * @returns {void}\n */\nsetClientOptionToDefault(playerId, option)\n```\n\nHere is the full list of available client options:\n\n\n## airAccScale\n\n**Type:** `number`\n\n**Default:** `1`\n\nAmount of acceleration to apply to airborne players.\n\n Only change if absolutely necessary i.e. Rocket Obby uses 0.25.\n\n Players are used to the default bloxd movement behaviour and speed,\n\n and may be put off from your game if different muscle memory is required.\n\n We suggest applying speed or slowness effects instead, using api.applyEffect.\n\n \n\n\n\n## airFrictionScale\n\n**Type:** `number`\n\n**Default:** `1`\n\nAmount of friction to apply to airborne players.\n\n Only change if absolutely necessary i.e. Rocket Obby uses 0.\n\n Players are used to the default bloxd movement behaviour and speed,\n\n and may be put off from your game if different muscle memory is required.\n\n We suggest applying speed or slowness effects instead, using api.applyEffect.\n\n \n\n\n\n## airJumpCount\n\n**Type:** `number`\n\n**Default:** `0`\n\nAmount of air jumps the player has\n\n \n\n\n\n## airMomentumConservation\n\n**Type:** `boolean`\n\n**Default:** `false`\n\nWhether to allow the player to strafe and conserve momentum while airborne.\n\n Only change if absolutely necessary i.e. only Rocket Obby uses true.\n\n Players are used to the default bloxd movement behaviour and speed,\n\n and may be put off from your game if different muscle memory is required.\n\n We suggest applying speed or slowness effects instead, using api.applyEffect.\n\n \n\n\n\n## ambientLightColourOverride\n\n**Type:** `string`\n\n**Default:** `null`\n\nAmbient (absence of sky light) colour override - hex string e.g. #ffffff.\n\n \n\n\n\n## arrowPotionEffectDuration\n\n**Type:** `number`\n\n**Default:** `6000`\n\nDuration of arrow potion effects\n\n \n\n\n\n## auraPerLevel\n\n**Type:** `number`\n\n**Default:** `100`\n\nHow much Aura XP is required per level.\n\n \n\n\n\n## autoRespawn\n\n**Type:** `boolean`\n\n**Default:** `false`\n\nIf true, player will respawn automatically after secsToRespawn seconds\n\n \n\n\n\n## blockReach\n\n**Type:** `number`\n\n**Default:** `6`\n\nHow far, in blocks from the eye, the player can break, place and use blocks. 0 to 20.\n\n \n\n\n\n## bounciness\n\n**Type:** `number`\n\n**Default:** `0`\n\nHow much the player bounces off of solid blocks.\n\n A value of 1 is equivalent to every block acting as a mushroom.\n\n \n\n\n\n## bunnyhopMaxMultiplier\n\n**Type:** `number`\n\n**Default:** `1.3`\n\nMaximum multiplier for jump height when bunnyhopping\n\n \n\n\n\n## cameraPositionOffset\n\n**Type:** `[number, number, number]`\n\n**Default:** `[0, 0, 0]`\n\nOffsets the third-person camera from it\'s origin by [x, y, z] world units\n\n \n\n\n\n## cameraRoll\n\n**Type:** `number`\n\n**Default:** `0`\n\nRoll angle of the camera in radians. Useful for disorientation effects, death effects, etc.\n\n \n\n\n\n## cameraRollTransitionMs\n\n**Type:** `number`\n\n**Default:** `0`\n\nDuration in ms to animate/transition to the camera roll angle (when you change cameraRoll). 0 = instant.\n\n Useful for smooth camera roll transitions.\n\n \n\n\n\n## cameraRotationOffset\n\n**Type:** `[number, number, number]`\n\n**Default:** `[0, 0, 0]`\n\nRotates the third-person camera around it\'s origin by [x, y, z] radians\n\n \n\n\n\n## cameraTint\n\n**Type:** `[number, number, number, number]`\n\n**Default:** `null`\n\nRGBA array [r, g, b, a] for camera screen tint effect. Values fall between 0 and 1.\n\n \n\n\n\n## canAltAction\n\n**Type:** `boolean`\n\n**Default:** `true`\n\nWhether the player can use the alt action key (right click on PC)\n\n \n\n\n\n## canChange\n\n**Type:** `boolean`\n\n**Default:** `true`\n\nWhether the player can change blocks\n\n \n\n\n\n## canClimbWalls\n\n**Type:** `boolean`\n\n**Default:** `false`\n\nWhether the player can climb walls\n\n \n\n\n\n## canCraft\n\n**Type:** `boolean`\n\n**Default:** `true`\n\nWhether to allow the player to craft items\n\n useFullInventory must be true for this to work\n\n \n\n\n\n## canCrouch\n\n**Type:** `boolean`\n\n**Default:** `true`\n\nWhether the player can crouch\n\n \n\n\n\n## canCustomiseChar\n\n**Type:** `boolean`\n\n**Default:** `true`\n\nWhether the player can customise their character\n\n \n\n\n\n## canFish\n\n**Type:** `boolean`\n\n**Default:** `true`\n\nWhether to allow players to fish with the default\n\n fishing gameplay in Bloxd. Disable this if you want\n\n to write custom (non-QTE) fishing mechanics\n\n \n\n\n\n## canPickBlocks\n\n**Type:** `boolean`\n\n**Default:** `true`\n\nWhether the player can pick blocks (middle mouse click on PC), ignored if creative is false\n\n \n\n\n\n## canPickUpItems\n\n**Type:** `boolean`\n\n**Default:** `true`\n\nWhether to allow the player to pick up items\n\n \n\n\n\n## canRecordReplays\n\n**Type:** `boolean`\n\n**Default:** `true`\n\nWhen false, players can\'t record replays or save clips. Turning it off mid-game discards any recording in progress. Set it for the whole game, not per area: chunks load before players reach them, and turning it back on lets new clips include every loaded chunk.\n\n \n\n\n\n## canSeeNametagsThroughWalls\n\n**Type:** `boolean`\n\n**Default:** `true`\n\nWhether the player can see name tags through walls\n\n \n\n\n\n## cantBreakError\n\n**Type:** `string | CustomTextStyling`\n\n**Default:** `null`\n\nError message for when the player fails to break a block\n\n \n\n\n\n## cantBuildError\n\n**Type:** `string | CustomTextStyling`\n\n**Default:** `null`\n\nError message for when the player fails to place a block\n\n \n\n\n\n## cantChangeError\n\n**Type:** `string | CustomTextStyling`\n\n**Default:** `"You cannot modify this block"`\n\nError message for when the player fails to change a block\n\n \n\n\n\n## canUseZoomKey\n\n**Type:** `boolean`\n\n**Default:** `true`\n\nWhether the player can use the zoom key\n\n \n\n\n\n## chatChannels\n\n**Type:** ` { channelName: string; elementContent: string | CustomTextStyling; elementBgColor: string; }[] `\n\n**Default:** `null`\n\nAllows player to select a channel that is passed as argument to onPlayerChat. See engineGameplayTypes.ts for expected format\n\n \n\n\n\n## compassTarget\n\n**Type:** `string | number | number[]`\n\n**Default:** `[0, 0, 0]`\n\nThe target the compass will point towards\n\n \n\n\n\n## creative\n\n**Type:** `boolean`\n\n**Default:** `false`\n\nWhether the player is in creative mode\n\n \n\n\n\n## crosshairText\n\n**Type:** `string | CustomTextStyling`\n\n**Default:** `""`\n\nText to display by the crosshair\n\n \n\n\n\n## crouchingSpeed\n\n**Type:** `number`\n\n**Default:** `2`\n\nSpeed multiplier for the player when crouching.\n\n Players are used to the default bloxd movement behaviour and speed,\n\n and may be put off from your game if different muscle memory is required.\n\n We suggest applying speed or slowness effects instead, using api.applyEffect.\n\n \n\n\n\n## crouchMobDetectionRadiusMultiplier\n\n**Type:** `number`\n\n**Default:** `2`\n\nMult for the radius within which mobs can detect the player when crouching.\n\n If a player\'s mult is 2, then mobs will think they are twice as far away.\n\n \n\n\n\n## customButtons\n\n**Type:** `CustomButtonsType`\n\n**Default:** `null`\n\nCustom buttons to show in game\n\n \n\n\n\n## customVariationTitle\n\n**Type:** `string`\n\n**Default:** `""`\n\nOverridden subtitle after the game name in the top-left header.\n\n \n\n\n\n## dealingDamageDefaultMultiplier\n\n**Type:** `number`\n\n**Default:** `1`\n\nMult for when the player hits neither a leg or a head. Only applies to guns\n\n \n\n\n\n## dealingDamageHeadMultiplier\n\n**Type:** `number`\n\n**Default:** `1.75`\n\nDamage multiplier for when the player hits a head. Only applies to guns\n\n \n\n\n\n## dealingDamageLegMultiplier\n\n**Type:** `number`\n\n**Default:** `1`\n\nDamage multiplier for when the player hits a leg. Only applies to guns\n\n \n\n\n\n## dealingDamageMultiplier\n\n**Type:** `number`\n\n**Default:** `1`\n\nDamage multiplier for all types of damage\n\n \n\n\n\n## defaultBlock\n\n**Type:** `string`\n\n**Default:** `"Block of Gold"`\n\nThe default block the player can change blocks to, used if canChange is true but useInventory is false\n\n \n\n\n\n## dialogue\n\n**Type:** ` { line: DialogueText; speakerName?: string | CustomTextStyling; voice?: SpeechVoice; animateIn?: boolean; } `\n\n**Default:** `null`\n\nA line of dialogue in the panel below the crosshair, revealed word by word with a blip in its voice per syllable.\n\n Each new value is a new line, which replays its reveal; null hides the panel.\n\n A line stays up until it is replaced or hidden, so World Code can use `sayDialogue` from `@plugins/dialogue` to hide it after a while.\n\n The voice presets are "soft", "regular", "dark", "high-pitched", "gruff", "lively", "posh" and "mechanical".\n\n ```ts\n {\n     line: string | TranslatedText                 // `[[Item Name]]` shows the item\'s icon inline\n     speakerName?: string | CustomTextStyling      // Shown above the line, such as a portrait icon and a name\n     voice?: SpeechVoicePreset | SpeechSynth       // A preset such as "regular" or "soft", or every synth parameter. Omit for a silent line\n     animateIn?: boolean                           // False shows the line whole, without its reveal or voice\n }\n ```\n\n \n\n\n\n## droppedItemScale\n\n**Type:** `number`\n\n**Default:** `1`\n\nScale factor to use for dropped item meshes\n\n \n\n\n\n## effectDamageDuration\n\n**Type:** `number`\n\n**Default:** `8000`\n\nDuration of the +damage effect from plum\n\n \n\n\n\n## effectDamageReductionDuration\n\n**Type:** `number`\n\n**Default:** `13000`\n\nDuration of +damage reduction effect from pear\n\n \n\n\n\n## effectHealthRegenDuration\n\n**Type:** `number`\n\n**Default:** `5000`\n\nDuration of +health regen effect from cherry\n\n \n\n\n\n## effectSpeedDuration\n\n**Type:** `number`\n\n**Default:** `8000`\n\nDuration of +speed effect from cracked coconut\n\n \n\n\n\n## ezBridging\n\n**Type:** `boolean`\n\n**Default:** `true`\n\nAssisted bridging. When on, the player can place a block off the edge of the block they are\n\n standing on without aiming back at it, but that block grows in place and only becomes solid\n\n when finished - nothing can be placed off it until then.\n\n \n\n A block takes 900ms to finish, making assisted bridging 1.11 blocks/s: slower than crouch\n\n bridging and far slower than speed bridging, so the skill ceiling is preserved. A growing\n\n cell is never valid support, and the assist stops at one rather than looking past it, so\n\n bridging out along a single aim is paced one block at a time. In creative the block is\n\n placed instantly, as there is nothing to pace. `ezBridgingGrowMs` changes the growth time.\n\n \n\n\n\n## ezBridgingGrowMs\n\n**Type:** `number`\n\n**Default:** `null`\n\nHow long, in whole milliseconds (0 to 60000), an ez bridging block takes to grow before it becomes\n\n solid. 0 places it instantly. Applies in creative too when set. Null uses the default: 900ms, or\n\n instant in creative.\n\n \n\n\n\n## ezTowering\n\n**Type:** `boolean`\n\n**Default:** `true`\n\nAssisted towering: a player standing still, or in the air with no movement or jump input, can\n\n place a block on the one beneath them - into their own feet - where it grows for `ezToweringGrowMs`\n\n and then lifts them onto it. Only blocks ez bridging can place can be towered with.\n\n \n\n\n\n## ezToweringGrowMs\n\n**Type:** `number`\n\n**Default:** `null`\n\nHow long, in whole milliseconds (0 to 60000), an ez towering block takes to grow before it becomes\n\n solid. 0 places it instantly. Applies in creative too when set. Null uses the default: 900ms, or\n\n instant in creative.\n\n \n\n\n\n## fallDamage\n\n**Type:** `boolean`\n\n**Default:** `false`\n\nWhether to deal damage to the player when they fall\n\n \n\n\n\n## fillBrokenBlocksWithWater\n\n**Type:** `boolean`\n\n**Default:** `false`\n\nWhether a block the player breaks becomes Water when water touches it from the side or above, rather than Air.\n\n \n\n\n\n## flySpeedMultiplier\n\n**Type:** `number`\n\n**Default:** `1.5`\n\nMultiplier for the flying speed in creative mode\n\n \n\n\n\n## fogBlockDistanceOverride\n\n**Type:** `number`\n\n**Default:** `null`\n\nBlocks from the eye at which fog turns solid, thickening all the way out from the eye. Overrides\n\n fogChunkDistanceOverride and graphic settings when set.\n\n \n\n\n\n## fogChunkDistanceOverride\n\n**Type:** `number`\n\n**Default:** `null`\n\nFog distance which overrides graphic settings. Uses graphic settings if null.\n\n \n\n\n\n## fogColourOverride\n\n**Type:** `string`\n\n**Default:** `null`\n\nRGB string for fog colour override. e.g. #ffffff\n\n \n\n\n\n## fogOnSkybox\n\n**Type:** `boolean`\n\n**Default:** `false`\n\nApplies fog to the skybox, which is otherwise unaffected by fog.\n\n \n\n\n\n## forcedCameraDirection\n\n**Type:** `[number, number, number]`\n\n**Default:** `null`\n\nForce the camera to look in a specific direction [x, y, z]. Set to null to allow free camera movement.\n\n \n\n\n\n## forcedCameraDirectionTransitionMs\n\n**Type:** `number`\n\n**Default:** `0`\n\nDuration in ms to animate/transition to the forced camera direction (when you change forcedCameraDirection). 0 = instant.\n\n Useful for smooth camera movements.\n\n \n\n\n\n## gameCamera\n\n**Type:** `CameraSettings`\n\n**Default:** `{ mode: "default" }`\n\nTakes over the player\'s camera. `mode` picks the kind of camera:\n\n - `"default"`: the player\'s own first or third person camera.\n\n - `"fixed"`: stands at `position`, looking at `lookAt` (a position or entity id, the player if left out) or along `lookDirection`.\n\n - `"follow"`: moves with `target` (the player if left out), `offset` blocks away; `offsetSpace: "target"` turns the offset with the target, +z ahead of it. Good for top-down, side-on and chase cameras. Set `avoidTerrain: true` to move in rather than go through terrain between the camera and the target.\n\n - `"path"`: flies through `keyframes`, each with a `timeMs` and a `position`, and optionally `lookAt`, `lookDirection`, `fov` and `easing`. It stays on the last keyframe at the end, or set `loop: true` to go round again.\n\n - `"frame"`: keeps every one of `targets` (up to 64 positions or entity ids) in view, looking down `viewElevation` degrees (45 if left out) towards `viewHeading` (0, along +z), with `padding` blocks around them, between `closestDistance` and `furthestDistance` blocks away. Good for board game overviews, arenas and boss fights.\n\n `blendInMs` glides from the current view to the new camera over that many ms, or cuts straight to it at 0.\n\n Every mode, `"default"` included, also takes:\n\n - `transition: { colour, outMs, holdMs, inMs }`: fades through a colour instead of blending. The screen fades out to `colour` (`"#rrggbb"`, black if left out) over `outMs`. The view cuts to the new camera once the colour covers the screen, and a path\'s clock starts there. The colour holds for `holdMs` (0 if left out), then fades back in over `inMs`. Each fade takes 200 to 5000 ms, and the hold up to 5000 ms. To spare players flashing, a fade turns between going out and coming in at most once every 333 ms; until then it goes on as it was. A fade already showing keeps its colour until the screen clears. The colour covers the world and the HUD, including chat history and the chat button on touch screens. It doesn\'t cover menus, the chat being typed in, dialogue, the respawn and sleeping screens, QTEs, UI requests, touch controls or the settings button on touch screens. The HUD under the colour can still be clicked unless `hideHud` hides it. Until the cut, the camera on screen stays. Setting that camera again cancels the transition, even with a different `transition`, `letterbox` or `hideHud`. A change to the camera on its way in must repeat `transition`, or it cuts in at once.\n\n - `letterbox: true`: black bars across the top and bottom of the screen, for cutscenes. They slide in and out as it changes, or switch under the colour of a transition. A `"frame"` camera fits its targets between them. Presses on the bars do nothing in the world, and dragging on them doesn\'t turn the camera.\n\n - `hideHud: true`: hides the HUD while the camera is set, from the cut of a transition. What the player still needs stays: nametags, dialogue, the chat while they type, the respawn and sleeping screens, QTEs, UI requests, touch controls, menus, and the settings button on touch screens.\n\n The other modes also take `fov` in degrees, and `playerLook: { maxYaw, maxPitch }` to let the mouse look that many degrees either side of where the camera aims. Leave one out to lock that axis, as in `{ maxYaw: 180 }`.\n\n `playerFacing: "movement"` (the default) turns the player to face where they walk, `"camera"` to face where the camera looks, and `"cursor"` to face what is under the mouse cursor (or the last tap), which they mine, build, hit and shoot at, for top-down and isometric games. Walking is always relative to the camera.\n\n Setting the camera the player already has does nothing, so to replay a path from the start, set another camera first (in the same tick is fine).\n\n The player only sees the world and other entities near them, so keep cameras and their targets within their view distance.\n\n ```js\n // Top-down camera following the player, who aims with the mouse cursor\n api.setClientOption(playerId, "gameCamera", { mode: "follow", offset: [0, 20, 5], playerFacing: "cursor" })\n // Fly over the map for 8 seconds, looking at its centre\n api.setClientOption(playerId, "gameCamera", {\n     mode: "path",\n     keyframes: [\n         { timeMs: 0, position: [0, 80, 0], lookAt: [50, 60, 50] },\n         { timeMs: 8000, position: [100, 80, 0], lookAt: [50, 60, 50] },\n     ],\n })\n // Spectate another player from behind\n api.setClientOption(playerId, "gameCamera", { mode: "follow", target: otherPlayerId, offset: [0, 3, -6], offsetSpace: "target", avoidTerrain: true })\n // Keep every player in view from above, easing out as they spread apart (up to 64 targets)\n api.setClientOption(playerId, "gameCamera", { mode: "frame", targets: api.getPlayerIds().slice(0, 64), viewElevation: 60 })\n // Back to the player\'s own camera, gliding there over half a second\n api.setClientOption(playerId, "gameCamera", { mode: "default", blendInMs: 500 })\n // A cutscene: fade through black into a path, with letterbox bars and no HUD\n const transition = { outMs: 500, holdMs: 250, inMs: 600 }\n api.setClientOption(playerId, "gameCamera", { mode: "path", keyframes, transition, letterbox: true, hideHud: true })\n // ...and when it ends, fade back to the player\'s own camera\n api.setClientOption(playerId, "gameCamera", { mode: "default", transition })\n ```\n\n \n\n\n\n## gravityMultiplier\n\n**Type:** `number`\n\n**Default:** `1`\n\nMultiplier applied to gravity during normal movement.\n\n Set to 1 for default gravity.\n\n \n\n\n\n## groundArrowPath\n\n**Type:** ` { target: [number, number, number]; colour?: string; } `\n\n**Default:** `null`\n\nRenders a terrain-following strip of animated chevron arrows on the ground from this player to the target position.\n\n The arrow path is not visible to other players.\n\n Configure a target position with `target: [x, y, z]` to show, or null to hide.\n\n Optional `colour` is any CSS colour string (e.g. "red", "#ffaa00", "rgb(255,0,0)"), or null for default white.\n\n \n\n\n\n## groundFrictionScale\n\n**Type:** `number`\n\n**Default:** `1`\n\nAmount of friction to apply to grounded players.\n\n Only change if absolutely necessary i.e. Rocket Obby uses 3.\n\n Players are used to the default bloxd movement behaviour and speed,\n\n and may be put off from your game if different muscle memory is required.\n\n We suggest applying speed or slowness effects instead, using api.applyEffect.\n\n \n\n\n\n## gunshotOrigin\n\n**Type:** `GunshotOrigin`\n\n**Default:** `"default"`\n\nWhere gunshots originate from.\n\n -"default" preserves classic bloxd behavior (casts originate from the camera in third person).\n\n -"head" always spawns raycasts from the player\'s head. Useful for certain camera perspectives.\n\n \n\n\n\n## headerChips\n\n**Type:** `HeaderChip[]`\n\n**Default:** `[]`\n\nA row of compact chips shown in the top-left HUD strip, concatenated immediately after the FPS counter,\n\n coordinates and room name. Each chip is bare text or a TextWithDisplayOptions wrapper to toggle its\n\n background panel.\n\n \n\n\n\n## healthRegenAmount\n\n**Type:** `number`\n\n**Default:** `0.05`\n\nFraction of max health that regens each regen tick\n\n \n\n\n\n## healthRegenInterval\n\n**Type:** `number`\n\n**Default:** `4000`\n\nHow often health regen is ticked\n\n \n\n\n\n## healthRegenStartAfter\n\n**Type:** `number`\n\n**Default:** `5000`\n\nHow long after a player receives damage to start regen again\n\n \n\n\n\n## heldLightColourOverride\n\n**Type:** `string`\n\n**Default:** `null`\n\nHeld item light colour override - hex colour string e.g. #ffffff. Applied regardless of any held item.\n\n \n\n\n\n## heldLightConeAngleOverride\n\n**Type:** `number`\n\n**Default:** `null`\n\nHeld item light cone angle override. Angle is measured in degrees. Larger number = wider beam.\n\n \n\n\n\n## heldLightRangeOverride\n\n**Type:** `number`\n\n**Default:** `null`\n\nHeld item light range override. Distance is measured in blocks.\n\n \n\n\n\n## hideCoordinates\n\n**Type:** `boolean`\n\n**Default:** `false`\n\nWhen true, hides world and chunk coordinates regardless of the player\'s setting.\n\n \n\n\n\n## highlightedHotbarSlots\n\n**Type:** `number[]`\n\n**Default:** `[]`\n\nHotbar slots (0-based) that pulse to draw the player\'s eye, e.g. to the item a tutorial wants them to use.\n\n [] for none.\n\n \n\n\n\n## horizontalKnockbackMultiplier\n\n**Type:** `number`\n\n**Default:** `1`\n\nMultiplier for horizontal knockback when dealing damage\n\n \n\n\n\n## initialHealth\n\n**Type:** `number`\n\n**Default:** `100`\n\nHealth upon joining or respawning. Can be null for the player to not have health\n\n \n\n\n\n## initialShield\n\n**Type:** `number`\n\n**Default:** `0`\n\nShield upon joining or respawning\n\n \n\n\n\n## inventoryColourOverride\n\n**Type:** `string`\n\n**Default:** `null`\n\nBackground colour of the hotbar, inventory and crafting panels, as a hex string e.g. "#682323".\n\n Slot colours are derived from it. Chests and crafting stations keep their own colours.\n\n null uses the default colours.\n\n \n\n\n\n## inventoryItemsMoveable\n\n**Type:** `boolean`\n\n**Default:** `true`\n\nWhether the player can move items in their inventory, only applicable if useInventory is true\n\n \n\n\n\n## invincible\n\n**Type:** `boolean`\n\n**Default:** `false`\n\nWhether the player is invincible\n\n \n\n\n\n## isReceivingDamageCooldownGlobal\n\n**Type:** `boolean`\n\n**Default:** `true`\n\nWhen the player is attacked, a short cooldown prevents further damage from the same attack type. If true, all attackers share that cooldown. If false, each attacker has their own.\n\n \n\n\n\n## jumpAmount\n\n**Type:** `number`\n\n**Default:** `8`\n\nAmount of jump power the player has\n\n \n\n\n\n## jumpHoldThrust\n\n**Type:** ` { maxUpSpeed: number; force: number; } `\n\n**Default:** `null`\n\nJetpack-style lift while the player holds jump in the air: `{ maxUpSpeed, force }`, or null for off.\n\n Pushes up with `force` (blocks/s per second, 0 to 45; gravity is 20 times `gravityMultiplier`) until the player\'s vertical speed nears `maxUpSpeed` (blocks/s, -20 to 20).\n\n With `force` above gravity the player climbs at about `maxUpSpeed - gravity / force`, e.g. `{ maxUpSpeed: 8, force: 36 }` climbs at about 7.4 blocks/s.\n\n A negative `maxUpSpeed` slows a fall instead, e.g. `{ maxUpSpeed: -3, force: 36 }` glides down at about 3.6 blocks/s.\n\n With `force` at or below gravity it only weakens gravity by `force`: the player never reaches `maxUpSpeed` and a fall keeps speeding up.\n\n No effect on the ground, in water, on ladders or climbable walls, in cobwebs, while flying, in vehicles, or with a glider or other held vehicle selected.\n\n Separate from the jump itself: a `jumpAmount` or jump multiplier of 0 doesn\'t turn it off.\n\n It still pushes while the player is knocked back, so a held jump can soften or extend a hit.\n\n \n\n\n\n## killstreakDuration\n\n**Type:** `number`\n\n**Default:** `200000000`\n\nDuration before a killstreak expires. (defaults to never expiring)\n\n \n\n\n\n## lightingOverride\n\n**Type:** `boolean`\n\n**Default:** `null`\n\nWhen null, just use the player\'s graphics setting. When set, forces lighting on (true) or off (false).\n\n \n\n\n\n## lobbyLeaderboardInfo\n\n**Type:** `LobbyLeaderboardInfo`\n\n**Default:** \n```ts\n{\nname: {\n\tdisplayName: "Name",\n\tsortPriority: 0,\n},\n\t}\n```\n\nColumns of the lobby leaderboard\n\n \n\n\n\n## maxAuraLevel\n\n**Type:** `number`\n\n**Default:** `0`\n\nThe maximum Aura Level attainable - Set to 0 to disable Aura XP\n\n \n\n\n\n## maxHealth\n\n**Type:** `number`\n\n**Default:** `100`\n\nMaximum health the player can have\n\n \n\n\n\n## maxPlayerZoom\n\n**Type:** `number`\n\n**Default:** `15`\n\nMaximum camera zoom level for the player\n\n \n\n\n\n## maxShield\n\n**Type:** `number`\n\n**Default:** `100`\n\nMaximum shield the player can have\n\n \n\n\n\n## middleTextLower\n\n**Type:** `string | CustomTextStyling | TextWithDisplayOptions`\n\n**Default:** `""`\n\nSmall text to display in the middle of the screen\n\n \n\n\n\n## middleTextTop\n\n**Type:** `string | CustomTextStyling | TextWithDisplayOptions`\n\n**Default:** `""`\n\nText to display centred at the very top of the screen, in line with the FPS counter, coordinates and room name.\n\n Drops to immediately below that strip when a centred placement would not fit without overlapping it.\n\n \n\n\n\n## middleTextUpper\n\n**Type:** `string | CustomTextStyling | TextWithDisplayOptions`\n\n**Default:** `""`\n\nLarge text to display in the middle of the screen\n\n \n\n\n\n## minChunkAddDist\n\n**Type:** `[number, number]`\n\n**Default:** `[2, 2]`\n\nMinimum size of region around player where chunks are loaded.\n\n Format [horizontalMinChunkRadius, verticalMinChunkRadius].\n\n Each value should be between 2 and 4.\n\n \n\n We recommend leaving this at the default of [2, 2] unless you have a specific reason to change it.\n\n (e.g. you need players to see the bottom of a dropper)\n\n This is because higher values can be laggier on low-end devices.\n\n \n\n\n\n## movementBasedFovScale\n\n**Type:** `number`\n\n**Default:** `1`\n\nAmount that player camera is affected by movement based fov\n\n \n\n\n\n## music\n\n**Type:** `Song`\n\n**Default:** `null`\n\nThe music track to play in the background\n\n \n\n\n\n## musicVolumeLevel\n\n**Type:** `number`\n\n**Default:** `0.6`\n\nVolume level for the music\n\n \n\n\n\n## numClosestPlayersVisible\n\n**Type:** `number`\n\n**Default:** `null`\n\nIf set, clients will only be able to see the closest x players (good for client perf in games with many players)\n\n \n\n\n\n## playerZoom\n\n**Type:** `number`\n\n**Default:** `0`\n\nDefault camera zoom level for the player\n\n \n\n\n\n## potionEffectDuration\n\n**Type:** `number`\n\n**Default:** `12000`\n\nDuration of potion effects\n\n \n\n\n\n## predictDroppedItems\n\n**Type:** `boolean`\n\n**Default:** `false`\n\nWhether an item the player drops, and the item a block they break drops, shows at once on their screen, moving as the\n\n server will move it, rather than a round trip later. Only for games whose onPlayerDropItem and onPlayerChangeBlock\n\n leave drops alone: a drop the game prevents or replaces shows for a moment.\n\n \n\n\n\n## preserveProtectedFluidSources\n\n**Type:** `boolean`\n\n**Default:** `false`\n\nWhether empty buckets can collect protected water/lava without removing the source block.\n\n \n\n\n\n## proximityFadeDistance\n\n**Type:** `number`\n\n**Default:** `0.625`\n\nDistance in blocks over which we reduce the opacity of entities as they approach the camera.\n\n \n\n\n\n## proximityFadeMinOpacity\n\n**Type:** `number`\n\n**Default:** `0.5`\n\nMinimum opacity multiplier reachable when fading entities based on camera proximity.\n\n The player\'s own model is always able to fade to 0, and entities being ridden stay fully opaque (as if this value was 1).\n\n \n\n\n\n## receivingDamageMultiplier\n\n**Type:** `number`\n\n**Default:** `1`\n\nDamage multiplier for all types of incoming damage\n\n \n\n\n\n## respawnButtonText\n\n**Type:** `string`\n\n**Default:** `"general:respawn"`\n\nText to show on respawn button. (E.g. "Spectate")\n\n \n\n\n\n## RightInfoText\n\n**Type:** `string | CustomTextStyling | TextWithDisplayOptions`\n\n**Default:** `""`\n\nText to display in the right info box\n\n \n\n\n\n## runningSpeed\n\n**Type:** `number`\n\n**Default:** `7`\n\nRunning speed for the player.\n\n STRONGLY recommend using `speedMultiplier` unless you have a specific use case for this, runningSpeed doesn\'t make UX sense on mobile.\n\n (Walking speed is ignored for mobile players, mobile player speed is determined by joystick input and the max of runningSpeed & walkingSpeed).\n\n \n\n Players are used to the default bloxd movement behaviour and speed,\n\n and may be put off from your game if different muscle memory is required.\n\n We suggest applying speed or slowness effects instead, using api.applyEffect.\n\n \n\n The only use case for walkingSpeed/runningSpeed over speedMultiplier or speed effects is to disable running or to inverse walking/running (so you run by default and e.g. hold shift to go slower).\n\n \n\n\n\n## secsToRespawn\n\n**Type:** `number`\n\n**Default:** `5`\n\nAfter dying the player can respawn after this many seconds\n\n \n\n\n\n## showBasicMovementControls\n\n**Type:** `boolean`\n\n**Default:** `true`\n\nWhether to show basic movement controls\n\n \n\n\n\n## showChatBubbles\n\n**Type:** `boolean`\n\n**Default:** `false`\n\nWhether the viewer renders speech bubbles above other players when they send chat messages. Off by default.\n\n \n\n\n\n## showKillfeed\n\n**Type:** `boolean`\n\n**Default:** `true`\n\nWhether to show the killfeed\n\n \n\n\n\n## showPlayersInUnloadedChunks\n\n**Type:** `boolean`\n\n**Default:** `false`\n\nWhether to show the player in unloaded chunks\n\n \n\n\n\n## showProgressBar\n\n**Type:** `boolean`\n\n**Default:** `false`\n\nWhether to show the progress bar\n\n \n\n\n\n## skyBox\n\n**Type:** `string | EarthSkyBox`\n\n**Default:** `"default"`\n\nNot recommended to use anything other than "default" as client FPS can drop while loading the skybox\n\n \n\n\n\n## skyLightColourOverride\n\n**Type:** `string`\n\n**Default:** `null`\n\nSky light colour override - hex string e.g. #ffffff.\n\n \n\n\n\n## speedMultiplier\n\n**Type:** `number`\n\n**Default:** `1`\n\nSpeed multiplier for the player.\n\n Players are used to the default bloxd movement behaviour and speed,\n\n and may be put off from your game if different muscle memory is required.\n\n We suggest applying speed or slowness effects instead, using api.applyEffect.\n\n \n\n\n\n## splashPotionEffectDuration\n\n**Type:** `number`\n\n**Default:** `8000`\n\nDuration of splash potion effects\n\n \n\n\n\n## stompDamageMultiplier\n\n**Type:** `number`\n\n**Default:** `0`\n\nMult for the damage done by "stomping" on a lifeform, i.e.: falling on them wearing Spiked Boots.\n\n \n\n\n\n## stompDamageRadius\n\n**Type:** `number`\n\n**Default:** `0`\n\nRadius around the player that will be affected by the stomp damage.\n\n \n\n\n\n## strictFluidBuckets\n\n**Type:** `boolean`\n\n**Default:** `true`\n\nWhether a player can place fluid when canChange is false\n\n \n\n\n\n## touchscreenActionButton\n\n**Type:** `string | CustomTextStyling`\n\n**Default:** `null`\n\nThe contents of the action button. Supports custom text styling. onTouchscreenActionButton will be called when button pressed.\n\n \n\n\n\n## ttbMultiplier\n\n**Type:** `number`\n\n**Default:** `1`\n\nMultiplier for the time to break any block\n\n \n\n\n\n## useFullInventory\n\n**Type:** `boolean`\n\n**Default:** `true`\n\nFor now just enables the UI of the full inventory\n\n \n\n\n\n## useInventory\n\n**Type:** `boolean`\n\n**Default:** `true`\n\nWhether to allow the player to use the inventory\n\n Disabling this will also disable the hotbar\n\n \n\n\n\n## usePlayAgainButton\n\n**Type:** `boolean`\n\n**Default:** `false`\n\nWhen player is dead, also show a play again button to matchmake player into a new lobby. Mostly useful for sessionBased games\n\n \n\n\n\n## useRespawnButton\n\n**Type:** `boolean`\n\n**Default:** `true`\n\nWhether the player can use the respawn button. Otherwise forces either play again or exit\n\n \n\n\n\n## verticalKnockbackMultiplier\n\n**Type:** `number`\n\n**Default:** `1`\n\nMultiplier for vertical knockback when dealing damage\n\n \n\n\n\n## visionMinLightColour\n\n**Type:** `string`\n\n**Default:** `null`\n\nThe dimmest light the player can see by - hex string e.g. #ffffff. Anywhere darker is lifted\n\n to it, e.g. caves and night, after the sky/ambient colour overrides. Used by Night Vision.\n\n \n\n\n\n## walkingSpeed\n\n**Type:** `number`\n\n**Default:** `4`\n\nWalking speed for the player.\n\n STRONGLY recommend using `speedMultiplier` unless you have a specific use case for this, walkingSpeed doesn\'t make UX sense on mobile.\n\n (Walking speed ignored for mobile players, mobile player speed is determined by joystick input and the max of runningSpeed & walkingSpeed).\n\n \n\n Players are used to the default bloxd movement behaviour and speed,\n\n and may be put off from your game if different muscle memory is required.\n\n We suggest applying speed or slowness effects instead, using api.applyEffect.\n\n \n\n The only use case for walkingSpeed/runningSpeed over speedMultiplier or speed effects is to disable running or to inverse walking/running (so you run by default and e.g. hold shift to go slower).\n\n \n\n\n\n## zoomOutDistance\n\n**Type:** `number`\n\n**Default:** `3`\n\nDistance to zoom the camera out to\n\n \n\n\n\n',
```

</details>

<details>
<summary>Hunk 2 · Change · +2 / -2</summary>

```diff
@@ -11,8 +11,8 @@
       ⟦2-char-id⟧ = '# Mob Settings\n\nThese impact the behaviour of mobs, what they look like, and how they sound. These can either be set on a per-mob basis or the default can be set for all mobs of a particular type.\nThese API methods allow you to modify mob settings:\n\n```js\n/**\n * Returns the current default value for a mob setting.\n *\n * @param {TMobType} mobType\n * @param {TMobSetting} setting\n * @returns {MobSettings<TMobType>[TMobSetting]}\n */\ngetDefaultMobSetting(mobType, setting)\n\n/**\n * Set the default value for a mob setting.\n *\n * @param {TMobType} mobType\n * @param {TMobSetting} setting\n * @param {MobSettings<TMobType>[TMobSetting]} value\n * @returns {void}\n */\nsetDefaultMobSetting(mobType, setting, value)\n\n/**\n * Get the current value of a mob setting for a specific mob.\n *\n * @param {MobId} mobId\n * @param {TMobSetting} setting\n * @param {boolean} [returnDefaultIfNotOverridden] - If true, return the default setting if not overridden.\n * @returns {MobSettings<MobType>[TMobSetting]}\n */\ngetMobSetting(mobId, setting, returnDefaultIfNotOverridden)\n\n/**\n * Set the current value of a mob setting for a specific mob.\n *\n * @param {MobId} mobId\n * @param {TMobSetting} setting\n * @param {MobSettings<MobType>[TMobSetting]} value\n * @returns {void}\n */\nsetMobSetting(mobId, setting, value)\n```\n\nHere is the full list of available mob settings:\n\n\n## armour\n\n**Type:** `Partial<Record<ArmourPart, {itemName: string, enchantmentTier?: "Tier 1" | "Tier 2" | "Tier 3" | "Tier 4" | "Tier 5" }>>`\n\n**Example:**\n```ts\n{\n\t"Helmet": {\n\t\titemName: "Diamond Helmet",\n\t\tenchantmentTier: "Tier 5",\n\t},\n\t"Boots": {\n\t\titemName: "Iron Boots",\n\t},\n}\n```\n\n\n\n## attackDamage\n\n**Type:** `number`\n\n**Example:** `0`\n\n\n\n## attackEffectDuration\n\n**Type:** `number`\n\n**Example:** `0`\n\n\n\n## attackEffectName\n\n**Type:** `string`\n\n**Example:** `null`\n\n\n\n## attackImpulse\n\n**Type:** `number`\n\n**Example:** `0`\n\n\n\n## attackInterval\n\n**Type:** `number`\n\n**Example:** `0`\n\n\n\n## attackItemName\n\n**Type:** `string`\n\n**Example:** `null`\n\n\n\n## attackRadius\n\n**Type:** `number`\n\n**Example:** `0`\n\n\n\n## attackSound\n\n**Type:** `string`\n\n**Example:** `null`\n\n\n\n## baseJumpImpulseXZ\n\n**Type:** `number`\n\n**Example:** `0`\n\n\n\n## baseJumpImpulseY\n\n**Type:** `number`\n\n**Example:** `0`\n\n\n\n## baseRunningSpeed\n\n**Type:** `number`\n\n**Example:** `4.55 * 0.85`\n\n\n\n## baseWalkingSpeed\n\n**Type:** `number`\n\n**Example:** `3.5`\n\n\n\n## bridgeInfo\n\n**Type:** `MobBridgeInfo`\n\n**Example:**\n```ts\n{\n\tblockToPlace: "Grass",\n\tmustBeGrounded: false,\n\tyOffset: -1,\n}\n```\n\nMakes the mob lay blocks into the world as it moves. If msToDecay is set to a number, and a |Decaying variant exists for `blockToPlace`, the trail/bridge will turn into air after `msToDecay` milliseconds.\n\n\n\n## burstAttackInfo\n\n**Type:** ` { burstAttackIntervals: number[]; } `\n\n**Example:** `null`\n\n\n\n## chargeSpecialAttackInfo\n\n**Type:** `MobChargeSpecialAttackInfo`\n\n**Example:** `{ chargeSpeedMult: 1.5 }`\n\n\n\n## chaseRadius\n\n**Type:** `number`\n\n**Example:** `0`\n\n\n\n## combatTetherInfo\n\n**Type:** `MobCombatTetherCombatInfo`\n\n**Example:** \n```ts\n{\n\trange: 11,\n\tparticleOpts: {\n\t\ttexture: "soul_0",\n\t\tcolorGradients: [\n\t\t\t{\n\t\t\t\ttimeFraction: 0,\n\t\t\t\tminColor: [245, 35, 25, 1],\n\t\t\t\tmaxColor: [255, 45, 35, 1],\n\t\t\t},\n\t\t],\n\t},\n}\n```\n\n\n\n## evadeInfo\n\n**Type:** `MobEvadeInfo`\n\n**Example:** \n```ts\n{\n\tprobability: 0.6,\n\tminAngle: Math.PI * 0.35,\n\tmaxAngle: Math.PI * 0.6,\n\timpulse: 8,\n}\n```\n\n\n\n## healthRegen\n\n**Type:** ` { amount: number; interval: number; startAfter: number; } `\n\n**Example:** `null`\n\n\n\n## heldItemEnchantmentTier\n\n**Type:** `"Tier 1" | "Tier 2" | "Tier 3" | "Tier 4" | "Tier 5"`\n\n**Example:** `null`\n\n\n\n## heldItemName\n\n**Type:** `string`\n\n**Example:** `null`\n\n\n\n## hostilityRadius\n\n**Type:** `number`\n\n**Example:** `0`\n\n\n\n## hurtSound\n\n**Type:** `string`\n\n**Example:** `"pigHurt"`\n\n\n\n## idleSound\n\n**Type:** `string`\n\n**Example:** `"pigOink"`\n\n\n\n## initialHealth\n\n**Type:** `number`\n\n**Example:** `75`\n\n\n\n## isReceivingDamageCooldownGlobal\n\n**Type:** `boolean`\n\n**Example:** `true`\n\n\n\n## isRideable\n\n**Type:** `boolean`\n\n**Example:** `false`\n\n\n\n## jumpCount\n\n**Type:** `number`\n\n**Example:** `0`\n\n\n\n## jumpMultiplier\n\n**Type:** `number`\n\n**Example:** `1`\n\n\n\n## knockbackReceivedMultiplier\n\n**Type:** `number`\n\n**Example:** `1`\n\n\n\n## maxFollowingRadius\n\n**Type:** `number`\n\n**Example:** `12`\n\n\n\n## maxHealth\n\n**Type:** `number`\n\n**Example:** `75`\n\n\n\n## metaInfo\n\n**Type:** `string`\n\n**Example:** `""`\n\n\n\n## minFollowingRadius\n\n**Type:** `number`\n\n**Example:** `5`\n\n\n\n## name\n\n**Type:** `string`\n\n**Example:** `""`\n\n\n\n## onDeathAura\n\n**Type:** `number`\n\n**Example:** `20`\n\n\n\n## onDeathItemDrops\n\n**Type:** ` { itemName: string; probabilityOfDrop?: number; dropMinAmount?: number; dropMaxAmount?: number; applyBurstImpulseToDrop?: boolean; }[] `\n\n**Example:** \n```ts\n[\n\t{\n\t\titemName: "Raw Porkchop",\n\t\tprobabilityOfDrop: 1,\n\t\tdropMinAmount: 1,\n\t\tdropMaxAmount: 3,\n\t},\n]\n```\n\n\n\n## onDeathParticleTexture\n\n**Type:** `string`\n\n**Example:** `"critical_hit"`\n\n\n\n## onTamedHealthMultiplier\n\n**Type:** `number`\n\n**Example:** `4.0`\n\n\n\n## ownerDbId\n\n**Type:** `string`\n\n**Example:** `null`\n\n\n\n## petInfo\n\n**Type:** `MobPetInfo`\n\n**Example:** \n```ts\n{\nfriendshipPoints: 0,\nlastFedAt: null,\nhighestFriendshipLevelReached: 0,\nsuperlikedFood: null,\nsuperlikedFoodKnown: false,\nbonusesGained: [],\n\t}\n```\n\n\n\n## rangedAttackInaccuracy\n\n**Type:** `number`\n\n**Example:** `0`\n\n\n\n## ridingSpeedMult\n\n**Type:** `number`\n\n**Example:** `1`\n\n\n\n## runAwayRadius\n\n**Type:** `number`\n\n**Example:** `0`\n\n\n\n## runningJumpInfo\n\n**Type:** `MobJumpLocomotionInfo`\n\n**Example:** \n```ts\n{\n\t// Combat / following: hop toward the target on a rested cadence (no slides, base speed 0).\n\tintervalBounds: { min: 600, max: 1_000 },\n}\n```\n\n\n\n## runningRandomFacingInfo\n\n**Type:** `MobRandomFacingInfo`\n\n**Example:**\n```ts\n{\n\t// Cosmetic only (via baseRenderHeading): jitter +-30 degrees, each equally likely, so it\'s harder to tell which way it\'s heading.\n\toffsets: [\n\t\t{ offset: Math.PI / 6, weight: 0.5 },\n\t\t{ offset: -Math.PI / 6, weight: 0.5 },\n\t],\n\tintervalBounds: { min: 1_000, max: 2_500 },\n}\n```\n\n\n\n## runningSlideInfo\n\n**Type:** `MobSlideLocomotionInfo`\n\n**Example:**\n```ts\n{\n\t// A combat dash to close on a target: initial speed = impulse / mass.\n\timpulse: 8,\n\tfriction: 0.1,\n\tdurationBounds: { min: 500, max: 900 },\n\tintervalBounds: { min: 1_000, max: 2_000 },\n}\n```\n\n\n\n## runningSpeedMultiplier\n\n**Type:** `number`\n\n**Example:** `1`\n\n\n\n## secondaryAttackDamage\n\n**Type:** `number`\n\n**Example:** `0`\n\n\n\n## secondaryAttackImpulse\n\n**Type:** `number`\n\n**Example:** `0`\n\n\n\n## secondaryAttackItemName\n\n**Type:** `string`\n\n**Example:** `null`\n\n\n\n## secondaryAttackRadius\n\n**Type:** `number`\n\n**Example:** `0`\n\n\n\n## secondaryAttackSound\n\n**Type:** `string`\n\n**Example:** `null`\n\n\n\n## secondaryBurstAttackInfo\n\n**Type:** ` { burstAttackIntervals: number[]; } `\n\n**Example:** `null`\n\n\n\n## stoppingRadius\n\n**Type:** `number`\n\n**Example:** `0.5`\n\n\n\n## swingArmOnAttack\n\n**Type:** `boolean`\n\n**Example:** `true`\n\n\n\n## swingArmOnSecondaryAttack\n\n**Type:** `boolean`\n\n**Example:** `true`\n\n\n\n## tameInfo\n\n**Type:** `MobTameInfo | null`\n\n**Example:**\n```ts\n{\n  "tameItemName": [\n    "Apple"\n  ],\n  "probabilityOfTame": 1,\n  "isSaddleable": false,\n  "supportsFriendship": true,\n  "likedFoods": [\n    "Plum",\n    "Cracked Coconut",\n    "Pumpkin Pie",\n    "Bowl of Rice",\n    "Melon Slice",\n    "Gold Melon Slice",\n    "Corn",\n    "Bowl of Cranberries",\n    "Mushroom Soup",\n    "Chili Pepper",\n    "Carrot",\n    "Beetroot",\n    "Raw Potato",\n    "Baked Potato"\n  ],\n  "neutralFoods": [\n    "Watermelon Slice",\n    "Gold Watermelon Slice",\n    "Apple",\n    "Wheat",\n    "Pear",\n    "Cherry",\n    "Bread"\n  ],\n  "dislikedFoods": [\n    "Raw Porkchop",\n    "Raw Beef",\n    "Raw Mutton",\n    "Raw Venison",\n    "Cooked Porkchop",\n    "Steak",\n    "Cooked Mutton",\n    "Cooked Venison",\n    "Rotten Flesh",\n    "Banana",\n    "Rotten Brain"\n  ],\n  "guaranteedDrop": "Truffle",\n  "commonDrops": [\n    "Poop",\n    "Wheat Seeds"\n  ],\n  "levelUpBonuses": {\n    "1": "Renaming",\n    "2": "Special Drops",\n    "3": "Double Poop",\n    "4": "Painting",\n    "5": "Feed Aura"\n  }\n}\n```\n\nTaming configuration for this mob type. Includes tame items, probability, saddle support, food preferences, drops, and level-up bonuses. See `mobTameInfoDefaults` for per-mob defaults. `null` for non-tameable mobs.\n\n\n\n## territoryRadius\n\n**Type:** `number`\n\n**Example:** `0`\n\n\n\n## variation\n\n**Type:** `"default"`\n\n**Example:** `"default"`\n\n\n\n## walkingJumpInfo\n\n**Type:** `MobJumpLocomotionInfo`\n\n**Example:** \n```ts\n{\n\t// Wander hops; paired with walkingSlideInfo below for a lively mix of hops and slower slides.\n\tintervalBounds: { min: 600, max: 1_500 },\n}\n```\n\n\n\n## walkingRandomFacingInfo\n\n**Type:** `MobRandomFacingInfo`\n\n**Example:** \n```ts\n{\n\t// Cosmetic only (via baseRenderHeading): face mostly backwards, sometimes sideways, occasionally forwards.\n\toffsets: [\n\t\t{ offset: Math.PI, weight: 0.5 },\n\t\t{ offset: Math.PI / 2, weight: 0.15 },\n\t\t{ offset: (3 * Math.PI) / 2, weight: 0.15 },\n\t\t{ offset: 0, weight: 0.2 },\n\t],\n\tintervalBounds: { min: 2_000, max: 5_000 },\n}\n```\n\n\n\n## walkingSlideInfo\n\n**Type:** `MobSlideLocomotionInfo`\n\n**Example:** \n```ts\n{\n\t// Initial slide speed = impulse / mass; friction (far below the default mob 1.5) governs the coast.\n\timpulse: 6,\n\tfriction: 0.1,\n\tdurationBounds: { min: 850, max: 1_500 },\n\t// Longer interval bounds for sliding than hopping makes hopping the dominant behaviour.\n\tintervalBounds: { min: 1_500, max: 3_000 },\n}\n```\n\n\n\n## walkingSpeedMultiplier\n\n**Type:** `number`\n\n**Example:** `1`\n\n\n\n## warpTargetSpecialAttackInfo\n\n**Type:** `MobWarpTargetSpecialAttackInfo`\n\n**Example:** \n```ts\n{\n\tcooldown: 20_000,\n\trange: 32,\n\tsound: "warperPhase",\n\tdelay: 1_000,\n\tminDestinationRadius: 5,\n\tmaxDestinationRadius: 7,\n\tswingArm: false,\n\tparticleOpts: {\n\t\tduration: 2_000,\n\t\ttexture: "soul_0",\n\t\tcolorGradients: [\n\t\t\t{\n\t\t\t\ttimeFraction: 0,\n\t\t\t\tminColor: [70, 215, 230, 1],\n\t\t\t\tmaxColor: [75, 225, 240, 1],\n\t\t\t},\n\t\t],\n\t},\n}\n```\n\n\n\n\n## Mob Variations\n\nSome mob types support variations other than just `"default"`:\n\n```js\n67: "default"\nPig: "default"\nCow: "default", "cream"\nSheep: "default", "black", "red", "orange", "pink", "purple", "yellow", "blue", "brown", "cyan", "gray", "green", "lightBlue", "lightGray", "lime", "magenta"\nHorse: "default", "black", "brown", "cream"\nCamel: "default", "brown"\nSlime: "default"\nCave Golem: "default", "iron", "corrupted"\nDraugr Zombie: "default", "longHairChestplate", "longHairClothed", "shortHairClothed", "flower", "flower2", "mushroom", "vine", "vine2", "corrupted", "corrupted2"\nDraugr Skeleton: "default"\nFrost Golem: "default"\nFrost Zombie: "default", "longHairChestplate", "shortHairClothed"\nFrost Skeleton: "default"\nDraugr Knight: "default"\nWolf: "default", "white", "brown", "grey", "spectral"\nBear: "default"\nDeer: "default"\nStag: "default"\nGold Watermelon Stag: "default"\nGorilla: "default"\nWildcat: "default", "tabby", "grey", "black", "calico", "siamese", "leopard"\nMagma Golem: "default"\nDraugr Huntress: "default", "chainmail"\nSpirit Golem: "default"\nSpirit Wolf: "default"\nSpirit Bear: "default"\nSpirit Stag: "default"\nSpirit Gorilla: "default"\nDraugr Warper: "default"\nFrost Wraith: "default", "tattered", "frostKing", "accursed"\nDraugr Reaver: "default"\nStalker: "default", "crimson", "frost", "void"\nCrone: "default"\nIron Guardian: "default"\nGold Guardian: "default"\nDiamond Guardian: "default"\nMoonstone Guardian: "default"\nIron Goofy Golem: "default", "flaking", "patchy", "shedding", "bare", "stone"\nGold Goofy Golem: "default", "flaking", "patchy", "shedding", "bare", "stone"\nDiamond Goofy Golem: "default", "flaking", "patchy", "shedding", "bare", "stone"\nMoonstone Goofy Golem: "default", "flaking", "patchy", "shedding", "bare", "stone"\nTiki Terror: "default", "titan", "tormentor", "tyrant"\nNPC: "default", "emma", "leo", "isabel", "sanjay", "imara", "enoch", "sara", "carmen", "chef"\nBobino Musculino: "default"\nCapitano Explovissimo: "default"\nDesert Fennec: "default"\nArmour Collector: "default"\nFurnace Knight: "default"\nLil Knight: "default"\nGlass Gremlin: "default"\nGlass Bro: "default"\nLord Vulcan: "default"\nZombie: "default"\nSkeleton: "default"\nMummy: "default"\nScorpion: "default"\nVulcanite: "default"\nEvil Tome: "default"\nMagma Toad: "default"\n```\n\n## Mob AI\n\nA mob\'s AI state determines its behaviour, e.g.: whether it is stood still, walking in a straight line, chasing someone, running towards a coordinate, etc. These API methods allow you to modify a mob\'s AI state:\n\n```js\n/**\n * Gets the current AI state for the given mob.\n *\n * @param {MobId} mobId\n * @returns { { state: MobAiState; params: MobAiStateParams<MobAiState> } }\n */\ngetMobAiState(mobId)\n\n/**\n * Sets the current AI state for the given mob.\n * Some AI states will require context such as the ID of the lifeform being chased.\n * The mob\'s AI normally moves on by itself after a few seconds, or when a player comes near.\n * Pass `{ hold: true }` to keep it in this state until you set another one.\n *\n * @param {MobId} mobId\n * @param {TState} state\n * @param {MobAiStateParams<TState>} params\n * @param {MobAiStateOptions} [opts] - hold: never time out, ignore nearby players and don\'t fight back when hit. The mob still leaves the state if its target leaves the game or turns invisible, or if it is tamed.\n * @returns {void}\n */\nsetMobAiState(mobId, state, params, opts)\n```\n\nHere is the full list of available mob AI states and their parameters:\n\n| State | Description | Parameters |\n|-------|-------------|------------|\n| `idle` | The mob is stood still, but it still has awareness of its environment.<br>For example: if the mob is hostile, it will still chase and attack nearby players. | `null` |\n| `disabled` | The mob is stood still, and it has no awareness of its environment.<br>It will not even react if provoked. | `null` |\n| `idleBeforeTurning` | The mob is stood still (idle) and is about to turn. | `null` |\n| `turning` | The mob has chosen a new direction at random and is turning to face it. | `null` |\n| `idleBeforeWalking` | The mob is stood still (idle) and is about to walk. | `null` |\n| `walking` | The mob is walking in the direction it is facing. | `null` |\n| `runningAway` | The mob is running away from the target lifeform. | `{ targetId: LifeformId }` |\n| `chasing` | The mob is chasing the target lifeform. | `{ targetId: LifeformId }` |\n| `turningBeforeCharging` | A charge-attack mob is stood still, rotating at its `turnRate` until it faces the target,<br>at which point it captures the target\'s current position and transitions to `charging`. | `{ targetId: LifeformId }` |\n| `charging` | A charge-attack mob is dashing straight at the position of the target captured when it<br>entered the state, ignoring the target\'s live position mid-dash (so the charge is dodgeable). | `{ targetId: LifeformId }` |\n| `following` | The mob is following the target lifeform.<br>It will stop if it is within the `minFollowingDistance` (mob setting) of the target,<br>and teleport to the target if it is outside the `maxFollowingDistance` (mob setting) of the target. | `{ targetId: LifeformId }` |\n| `watching` | The mob is stood still looking at the target. | `{ targetId: LifeformId }` |\n| `walkingToPosition` | The mob is walking towards the position.<br>It will stop if it is within the `stoppingRadius` (mob setting) of the position. | `{ pos: Pos }` |\n| `runningToPosition` | The mob is running towards the position.<br>It will stop if it is within the `stoppingRadius` (mob setting) of the position. | `{ pos: Pos }` |\n\n',
       ⟦2-char-id⟧ = '# Vehicle Settings\n\nA vehicle is something you get into and ride, like a boat or a kart. A physics type is a list of settings describing how something moves - its weight, speed, steering, and so on. The two are separate: riding a vehicle normally changes your physics type, but a player can be given one without riding anything.\n\nEach setting\'s value is resolved in three steps:\n\n1. The defaults, which are the same for everything.\n2. The physics type (e.g. `CAR`) changes some of them.\n3. The tier (e.g. `OFF_ROADER`) changes a few more.\n\nOne vehicle can also be given its own value for a setting, which beats all three - but only for whoever rides it.\n\nA few settings (`canAutoStep`, `speedMultiplier`) can be given a value for one block at a time as well, by naming the block first - `"IceCanAutoStep"`. That applies whenever the rider is stood on that block.\n\nThese API methods spawn vehicles and change how a player moves:\n\n```js\n/**\n * Set physics state of player (vehicle type and tier).\n *\n * For types that have tiers (e.g. BOAT, GLIDER, CAR), a `tier` of `null` defaults to the first\n * tier (0). Types without tiers (e.g. DEFAULT) must be given a `null` tier.\n *\n * @param {PlayerId} playerId\n * @param {PlayerPhysicsState<PhysicsType>} physicsState\n * @param {[number, number, number]} [positionOffset] - Optional offset to adjust the player\'s collision box, which is at most 25 blocks wide and 90 tall\n * @returns {void}\n */\nsetPlayerPhysicsState(playerId, physicsState, positionOffset)\n\n/**\n * Get physics state for player\n *\n * @param {PlayerId} playerId\n * @returns {PlayerPhysicsState<PhysicsType>}\n */\ngetPlayerPhysicsState(playerId)\n\n/**\n * Seat a player in a vehicle. Seat 0 drives; other seats follow the vehicle without movement control.\n * The player leaves their current vehicle and replaces anyone occupying the requested seat.\n *\n * @param {PlayerId} playerId\n * @param {EntityId} vehicleEId - A spawned vehicle or a rideable mob.\n * @param {number} [seatIndex] - Seat index (default 0).\n * @returns {void}\n */\nsetPlayerVehicle(playerId, vehicleEId, seatIndex)\n\n/**\n * Take a player off whatever they are riding, dropping them where it is. Does nothing if they are\n * not riding anything.\n *\n * @param {PlayerId} playerId\n * @returns {void}\n */\nexitPlayerVehicle(playerId)\n\n/**\n * The seat layout for a vehicle entity - at minimum one driver seat (index 0), optionally more\n * passenger seats after it. Resolved from the spawned vehicle\'s def (`VehicleMeshEntityDef.seats`,\n * falling back to a single driver seat at the physics type/tier\'s own `riderOffset` default) or a\n * rideable mob\'s override (`getMobVehicleSeats`, falling back to its `rideHeight`). Throws if\n * `vehicleEId` is not a vehicle.\n *\n * @param {EntityId} vehicleEId\n * @returns {VehicleSeat[]}\n */\ngetVehicleSeats(vehicleEId)\n\n/**\n * The current value of a physics setting for a specific vehicle entity: the value set via\n * `setVehicleSetting` if overridden, otherwise (when `returnDefaultIfNotOverridden`) the type/tier\n * default from the vehicle\'s physics state. Mirrors `getMobSetting`.\n *\n * The one default not read from the type/tier is a mob\'s `riderOffset`, which comes from its ride height.\n *\n * A per-block setting (e.g. `"IceCanAutoStep"`) is `undefined` when that block is unlisted, which means\n * the block does not change the setting rather than that the setting is off.\n *\n * @param {EntityId} vehicleEId\n * @param {TSetting} setting\n * @param {boolean} [returnDefaultIfNotOverridden]\n * @returns {SettableVehicleSettingValue<TSetting>}\n */\ngetVehicleSetting(vehicleEId, setting, returnDefaultIfNotOverridden)\n\n/**\n * Override a physics setting for a specific vehicle entity, replacing the type/tier default for that\n * vehicle\'s rider. The override is stored on the shared Bloxd and, when the vehicle currently has a\n * rider, replicated to that rider\'s client. Mirrors `setMobSetting`.\n *\n * A setting can also be overridden for one block by naming the block first, e.g.\n * `setVehicleSetting(boatId, "IceCanAutoStep", true)`. That is stored as an entry of the matching\n * `<setting>ByBlock` record, which the physics tick reads as a precomputed block lookup.\n *\n * The rider\'s body is at most 25 blocks wide and 90 tall: a larger `width` or `height` acts as that.\n *\n * @param {EntityId} vehicleEId\n * @param {TSetting} setting\n * @param {SettableVehicleSettingValue<TSetting>} value\n * @returns {void}\n */\nsetVehicleSetting(vehicleEId, setting, value)\n\n/**\n * Try to spawn a rideable vehicle, which players can mount with an alt action.\n * There is a limit to the number of mesh entities with physics that can be created.\n * WARNING: Either the "onPlayerAttemptSpawnVehicle" or the "onWorldAttemptSpawnVehicle" game callback will be called\n * depending on whether "spawnerId" is provided. Calling this function inside those callbacks risks infinite recursion.\n *\n * @param {MeshEntityVehicleType} vehicleType\n * @param {number} x\n * @param {number} y\n * @param {number} z\n * @param {VehicleSpawnOpts} [opts] - Includes:\n * - spawnerId The ID of the player who spawned the vehicle. The vehicle faces away from them.\n * @returns {EntityId | null} - null if the vehicle could not be spawned, otherwise the entity ID of the vehicle.\n */\nattemptSpawnVehicle(vehicleType, x, y, z, opts)\n\n/**\n * Dispose of a vehicle\'s state and remove them from the world.\n * Always succeeds.\n *\n * @param {EntityId} vehicleId\n * @returns {void}\n */\ndespawnVehicle(vehicleId)\n```\n\n## Vehicle Catalogue\n\n### Mesh-Entity Vehicles\n\nObjects placed in the world, which a player walks up to and climbs into. Use `attemptSpawnVehicle` to make one.\n\n| Vehicles | Physics | Placeable on | Mesh size | Place sound |\n|----------|---------|--------------|-----------|-------------|\n| `Boat` | `BOAT` / `WOOD` | `Water`, `Lava` | 1.2 | `splash1` |\n| `Obsidian Boat` | `BOAT` / `OBSIDIAN` | `Water`, `Lava` | 1.2 | `splash1` |\n| `Speedboat` | `BOAT` / `SPEED` | `Water` | 1.2 | `splash1` |\n| `Hovercraft` | `HOVERCRAFT` | `solidBlocksOrFluid` | 4 | depends on the block it is put on |\n| `Yellow Kart`, `White Kart`, `Red Kart`, `Purple Kart`, `Pink Kart`, `Orange Kart`, `Magenta Kart`, `Lime Kart`, `Light Gray Kart`, `Light Blue Kart`, `Green Kart`, `Gray Kart`, `Cyan Kart`, `Brown Kart`, `Blue Kart`, `Black Kart` | `CAR` / `KART` | `solidBlocks` | 4 | depends on the block it is put on |\n| `Off Roader` | `CAR` / `OFF_ROADER` | `solidBlocks` | 4 | depends on the block it is put on |\n| `Gold Mining Drill` | `CAR` / `GOLD_MINING_DRILL` | `solidBlocks` | 4 | depends on the block it is put on |\n| `Iron Mining Drill` | `CAR` / `IRON_MINING_DRILL` | `solidBlocks` | 4 | depends on the block it is put on |\n| `Diamond Mining Drill` | `CAR` / `DIAMOND_MINING_DRILL` | `solidBlocks` | 4 | depends on the block it is put on |\n| `Moonstone Mining Drill` | `CAR` / `MOONSTONE_MINING_DRILL` | `solidBlocks` | 4 | depends on the block it is put on |\n| `Armored Car` | `CAR` / `ARMORED_CAR` | `solidBlocks` | 4 | depends on the block it is put on |\n| `Light Blue Car` | `CAR` / `CAR` | `solidBlocks` | 4 | depends on the block it is put on |\n\n### Consumable Vehicles\n\nNothing is placed in the world: the player\'s own movement changes and the vehicle appears attached to their body. Using the item consumes one, and the ride ends once the player stops floating.\n\n| Vehicles | Physics | Mesh attachment |\n|----------|---------|-----------------|\n| `Yellow Balloon` | `BALLOON` / `YELLOW` | `{ size: 0.12, offset: [0, 1.8, -0.24], rotation: [0, 0, 0] }` |\n| `White Balloon` | `BALLOON` / `WHITE` | `{ size: 0.12, offset: [0, 1.8, -0.24], rotation: [0, 0, 0] }` |\n| `Red Balloon` | `BALLOON` / `RED` | `{ size: 0.12, offset: [0, 1.8, -0.24], rotation: [0, 0, 0] }` |\n| `Purple Balloon` | `BALLOON` / `PURPLE` | `{ size: 0.12, offset: [0, 1.8, -0.24], rotation: [0, 0, 0] }` |\n| `Pink Balloon` | `BALLOON` / `PINK` | `{ size: 0.12, offset: [0, 1.8, -0.24], rotation: [0, 0, 0] }` |\n| `Orange Balloon` | `BALLOON` / `ORANGE` | `{ size: 0.12, offset: [0, 1.8, -0.24], rotation: [0, 0, 0] }` |\n| `Magenta Balloon` | `BALLOON` / `MAGENTA` | `{ size: 0.12, offset: [0, 1.8, -0.24], rotation: [0, 0, 0] }` |\n| `Lime Balloon` | `BALLOON` / `LIME` | `{ size: 0.12, offset: [0, 1.8, -0.24], rotation: [0, 0, 0] }` |\n| `Light Gray Balloon` | `BALLOON` / `LIGHT_GRAY` | `{ size: 0.12, offset: [0, 1.8, -0.24], rotation: [0, 0, 0] }` |\n| `Light Blue Balloon` | `BALLOON` / `LIGHT_BLUE` | `{ size: 0.12, offset: [0, 1.8, -0.24], rotation: [0, 0, 0] }` |\n| `Green Balloon` | `BALLOON` / `GREEN` | `{ size: 0.12, offset: [0, 1.8, -0.24], rotation: [0, 0, 0] }` |\n| `Gray Balloon` | `BALLOON` / `GRAY` | `{ size: 0.12, offset: [0, 1.8, -0.24], rotation: [0, 0, 0] }` |\n| `Cyan Balloon` | `BALLOON` / `CYAN` | `{ size: 0.12, offset: [0, 1.8, -0.24], rotation: [0, 0, 0] }` |\n| `Brown Balloon` | `BALLOON` / `BROWN` | `{ size: 0.12, offset: [0, 1.8, -0.24], rotation: [0, 0, 0] }` |\n| `Blue Balloon` | `BALLOON` / `BLUE` | `{ size: 0.12, offset: [0, 1.8, -0.24], rotation: [0, 0, 0] }` |\n| `Black Balloon` | `BALLOON` / `BLACK` | `{ size: 0.12, offset: [0, 1.8, -0.24], rotation: [0, 0, 0] }` |\n\n### Held Vehicles\n\nAlso attached to the player rather than placed in the world. Active for as long as the matching item is held, from waking if taken out in bed - swap to something else and the ride ends.\n\n| Vehicles | Physics | Mesh attachment |\n|----------|---------|-----------------|\n| `Wood Hang Glider` | `GLIDER` / `WOOD` | `{ size: 3, offset: [0, 0.72, 0.3], rotation: [-1.5708, 3.14159, 3.14159] }` |\n| `Iron Hang Glider` | `GLIDER` / `IRON` | `{ size: 3, offset: [0, 0.72, 0.3], rotation: [-1.5708, 3.14159, 3.14159] }` |\n| `Gold Hang Glider` | `GLIDER` / `GOLD` | `{ size: 3, offset: [0, 0.72, 0.3], rotation: [-1.5708, 3.14159, 3.14159] }` |\n| `Diamond Hang Glider` | `GLIDER` / `DIAMOND` | `{ size: 3, offset: [0, 0.72, 0.3], rotation: [-1.5708, 3.14159, 3.14159] }` |\n\nEvery vehicle setting and the default it starts from. Valid `pose` values are listed in `SKINS_AND_POSES.md`, and valid `effect.icon` values in `ICONS.md`.\n\nEach example changes the setting on one vehicle, where the id came from `attemptSpawnVehicle`.\n\n## airborneFallSpeedLimit\n\n**Type:** `FallSpeedLimitOpts | null`\n\n**Default:** `null`\n\nCaps how fast it falls while flying. Only used when `airborneMovement` is `"heading"`.\n`null` = it falls at full speed. See `FallSpeedLimitOpts`.\n\n```js\n// A flying hovercraft that drifts down at 4 blocks a second instead of dropping\napi.setVehicleSetting(hovercraftId, "airborneMovement", { model: "heading" })\napi.setVehicleSetting(hovercraftId, "airborneFallSpeedLimit", { maxFallSpeed: 4, slowDownSeconds: 0.15, compensateGravity: true })\n```\n\n## airborneMode\n\n**Type:** `AirborneModeOpts | null`\n\n**Default:** `null`\n\nLets it fly once mid-air and descending. Supported movement types: `GLIDING` and `FLOATING`.\n`null` = it cannot fly. See `AirborneModeOpts`.\n\n```js\n// Give a hovercraft a glider mode, so driving off a cliff becomes a flight\napi.setVehicleSetting(hovercraftId, "airborneMode", { activeMovementType: MovementType.GLIDING, durationMs: null, exitsVehicleOnEnd: false })\n```\n\n## airborneMovement\n\n**Type:** `AirborneMovementOpts | null`\n\n**Default:** `null`\n\nHow it moves while flying. `null` = it steers the same way it does on the ground. See `AirborneMovementOpts`.\n\n```js\n// Make a flying hovercraft follow the camera, like a glider\napi.setVehicleSetting(hovercraftId, "airborneMovement", {\n    model: "cameraDirection",\n    maxSpeed: 13,\n    minSpeed: 0.5,\n    pitchAcceleration: 0.0125,\n    friction: 0,\n    impulseDecayTicks: 100,\n    biasMagnitude: 1.5,\n    excessVelocityBleedPerTick: 0.5,\n})\n```\n\n## airSpeedMultiplier\n\n**Type:** `number`\n\n**Default:** `1`\n\nAn extra speed multiplier used while in the air.\n\n```js\n// A kart that barely steers while mid-jump\napi.setVehicleSetting(kartId, "airSpeedMultiplier", 0.2)\n```\n\n## canAutoStep\n\n**Type:** `boolean`\n\n**Default:** `true`\n\nCan also be set for a single block - see `{BlockName}CanAutoStep`.\n\nWhether it climbs one-block steps by itself, rather than the rider jumping them.\n\n```js\n// Make riders jump every kerb instead of rolling over it\napi.setVehicleSetting(carId, "canAutoStep", false)\n```\n\n## {BlockName}CanAutoStep\n\n**Type:** `boolean`\n\n**Default:** unset - only the blocks a physics type lists in its `canAutoStepByBlock` below start with a value of their own.\n\nNamed as the block followed by the setting: `"IceCanAutoStep"`, `"Red ConcreteCanAutoStep"`.\n\nOverrides `canAutoStep` for particular blocks, by block name. Unlisted blocks use `canAutoStep`.\n\n```js\n// A boat that rides up onto ice, but nothing else\napi.setVehicleSetting(boatId, "canAutoStep", false)\napi.setVehicleSetting(boatId, "IceCanAutoStep", true)\n```\n\n## canRun\n\n**Type:** `boolean`\n\n**Default:** `true`\n\nWhether the rider is allowed to sprint.\n\n```js\n// Let riders sprint a kart, on top of its own speed\napi.setVehicleSetting(kartId, "canRun", true)\n```\n\n## disableBaseMovement\n\n**Type:** `boolean`\n\n**Default:** `false`\n\nTurns off the usual steering-driven movement, as for a sleeping player.\n\n```js\n// A ghost train: riders cannot steer at all\napi.setVehicleSetting(kartId, "disableBaseMovement", true)\n```\n\n## disableFootstepSounds\n\n**Type:** `boolean`\n\n**Default:** `false`\n\nWhether footstep sounds are silenced.\n\n```js\n// Turn footsteps back on for a kart\napi.setVehicleSetting(kartId, "disableFootstepSounds", false)\n```\n\n## effect\n\n**Type:** ` { name: string; icon: string; duration?: number } | null `\n\n**Default:** `null`\n\nA badge shown to the rider for as long as they ride. `null` = none. `icon` is an ingame icon or an\nitem name. `name` must be one that a physics type already uses, such as `"Driving"` or `"Boating"`,\nbecause only those are cleared again when the rider gets off.\n\n```js\n// Badge a kart with the off-roader icon instead of the usual kart one\napi.setVehicleSetting(kartId, "effect", { name: "Driving", icon: "Off Roader" })\n```\n\n## fixedHeading\n\n**Type:** `number | null`\n\n**Default:** `null`\n\nLocks the direction it faces, in radians, ignoring the camera. `null` = it faces wherever the camera or steering points.\n\n```js\n// Pin a boat to one direction, whichever way the rider looks\napi.setVehicleSetting(boatId, "fixedHeading", Math.PI / 2)\n```\n\n## fluidDrag\n\n**Type:** `number`\n\n**Default:** `-1`\n\nHow much water and lava slow it down. `-1` uses the world\'s normal drag.\n\n```js\n// A boat that wallows through water\napi.setVehicleSetting(boatId, "fluidDrag", 8)\n```\n\n## fluidDragHorizontal\n\n**Type:** `number`\n\n**Default:** `-1`\n\n`fluidDrag` for sideways movement only. `-1` falls back to `fluidDrag`.\n\n```js\n// Let a car skate across water instead of bogging down in it\napi.setVehicleSetting(carId, "fluidDragHorizontal", 0)\n```\n\n## fluidDragVertical\n\n**Type:** `number`\n\n**Default:** `-1`\n\n`fluidDrag` for up-and-down movement only. `-1` falls back to `fluidDrag`.\n\n```js\n// A boat that sinks and surfaces slowly instead of bobbing\napi.setVehicleSetting(boatId, "fluidDragVertical", 6)\n```\n\n## fluidSkip\n\n**Type:** `FluidSkipOpts | null`\n\n**Default:** `null`\n\nMakes it skip across water like a stone once it is fast enough. `null` = it floats normally. See `FluidSkipOpts`.\n\n```js\n// Let any boat skim across water like a stone\napi.setVehicleSetting(boatId, "fluidSkip", { minSpeed: 11, launchSpeedFraction: 0.4, launchApproachRate: 25 })\n```\n\n## fluidSpeedMultiplier\n\n**Type:** `number`\n\n**Default:** `1`\n\nAn extra speed multiplier used while in water or lava.\n\n```js\n// An amphibious kart, as quick in water as on the road\napi.setVehicleSetting(kartId, "fluidSpeedMultiplier", 1)\n```\n\n## gravityMultiplier\n\n**Type:** `number`\n\n**Default:** `2`\n\nHow hard gravity pulls it down, compared to a normal player. `0` = it never falls.\n\n```js\n// A moon-buggy kart that hangs in the air after every jump\napi.setVehicleSetting(kartId, "gravityMultiplier", 0.5)\n```\n\n## height\n\n**Type:** `number`\n\n**Default:** `1.8`\n\nHow tall it is, in blocks.\n\n```js\n// A low-slung go-kart that fits under two-block tunnels\napi.setVehicleSetting(kartId, "height", 0.9)\n```\n\n## horizontalBounciness\n\n**Type:** `number`\n\n**Default:** `0`\n\nHow bouncy walls are: `0` stops dead, `1` keeps all its speed. Stacks with the `bounciness` client\noption. Rebounds have a floor speed, so slow bumps come back faster than they arrived.\n\n```js\n// A bumper car that pings off walls instead of stopping dead\napi.setVehicleSetting(kartId, "horizontalBounciness", 0.8)\n```\n\n## horizontalImpactCameraShake\n\n**Type:** `ImpactCameraShakeOpts | null`\n\n**Default:** `null`\n\nShakes the camera when it hits a wall hard enough; it need not bounce. `null` = no shake. See `ImpactCameraShakeOpts`.\n\n```js\n// Rattle the screen when a car wraps itself round a wall\napi.setVehicleSetting(carId, "horizontalImpactCameraShake", { minSpeed: 6, intensityPerSpeed: 0.03, maxIntensity: 0.6, durationMs: 300 })\n```\n\n## jumpMultiplier\n\n**Type:** `number`\n\n**Default:** `1`\n\nHow hard the rider pushes off the ground when jumping, compared to a normal jump. `0` = cannot jump.\nMultiplies the `jumpAmount` client option rather than replacing it, and heavier types need a bigger\nvalue to reach the same height.\n\n```js\n// A stunt kart with a much springier jump\napi.setVehicleSetting(kartId, "jumpMultiplier", 5)\n```\n\n## landSpeedMultiplier\n\n**Type:** `number`\n\n**Default:** `1`\n\nAn extra speed multiplier used while on solid ground.\n\n```js\n// A boat that drags itself along dry land at a tenth speed\napi.setVehicleSetting(boatId, "landSpeedMultiplier", 0.1)\n```\n\n## mass\n\n**Type:** `number`\n\n**Default:** `1`\n\nHow heavy it is. Heavier things resist being pushed around, and sink rather than float.\n\n```js\n// A featherweight kart that every explosion sends flying\napi.setVehicleSetting(kartId, "mass", 0.3)\n```\n\n## maxPushDistance\n\n**Type:** `number`\n\n**Default:** `0`\n\nCaps how hard it is pushed while far below the speed it is aiming for, so it takes longer to get going. `0` = no cap.\n\n```js\n// A heavy lorry takes its time getting up to speed; a nippy racecar has no cap at all\napi.setVehicleSetting(lorryId, "maxPushDistance", 2)\napi.setVehicleSetting(raceCarId, "maxPushDistance", 0)\n```\n\n## minHorizontalSpeedToBounce\n\n**Type:** `number`\n\n**Default:** `0`\n\nHow fast it must hit a wall, in blocks per second, before `horizontalBounciness` applies. `0` = any contact.\n\n```js\n// Only bounce off walls hit at speed, not gentle scrapes\napi.setVehicleSetting(kartId, "minHorizontalSpeedToBounce", 8)\n```\n\n## minVerticalSpeedToBounce\n\n**Type:** `number`\n\n**Default:** `0`\n\nHow fast it must be falling, in blocks per second, before `verticalBounciness` applies. `0` bounces\noff any contact, leaving a bouncy vehicle jiggling in place.\n\n```js\n// Bounce off big drops only, so a parked kart sits still\napi.setVehicleSetting(kartId, "minVerticalSpeedToBounce", 5)\n```\n\n## movementForceMultiplier\n\n**Type:** `number`\n\n**Default:** `1`\n\nHow hard steering pushes it. Bigger = it speeds up and changes direction more sharply.\n\n```js\n// A twitchy kart that reaches top speed almost instantly\napi.setVehicleSetting(kartId, "movementForceMultiplier", 2)\n```\n\n## pose\n\n**Type:** `PlayerPose`\n\n**Default:** `"standing"`\n\nHow the rider\'s body is posed while riding.\n\n```js\n// Riders lie back in this boat instead of sitting up\napi.setVehicleSetting(boatId, "pose", "sleeping")\n```\n\n## riderOffset\n\n**Type:** `[number, number, number]`\n\n**Default:** `[0, 0, 0]`\n\nWhere the rider sits, as `[x, y, z]` blocks from the middle of the vehicle. A rideable mob defaults\nto its own ride height rather than to this type\'s value.\n\n```js\n// Sit the rider further back, as if in the boot\napi.setVehicleSetting(carId, "riderOffset", [0, 0.25, -0.8])\n```\n\n## speedMultiplier\n\n**Type:** `number`\n\n**Default:** `1`\n\nCan also be set for a single block - see `{BlockName}SpeedMultiplier`.\n\nIts top speed, as a multiplier on normal walking speed. `0` = it cannot move.\n\n```js\n// Double a kart\'s top speed for a boost pickup\napi.setVehicleSetting(kartId, "speedMultiplier", 24)\n```\n\n## {BlockName}SpeedMultiplier\n\n**Type:** `number`\n\n**Default:** unset - only the blocks a physics type lists in its `speedMultiplierByBlock` below start with a value of their own.\n\nNamed as the block followed by the setting: `"IceSpeedMultiplier"`, `"Red ConcreteSpeedMultiplier"`.\n\nExtra speed multipliers for the block underfoot, by block name. Solid ground only, and stacks with\n`speedMultiplier` and the land/fluid/air multiplier. When several listed blocks are underfoot, the\nvalue furthest from `1` wins.\n\n```js\n// A car that crawls through snow and flies down stone roads\napi.setVehicleSetting(carId, "SnowSpeedMultiplier", 0.4)\napi.setVehicleSetting(carId, "StoneSpeedMultiplier", 1.5)\n```\n\n## standingFriction\n\n**Type:** `number`\n\n**Default:** `5`\n\nHow quickly it slows to a stop once the rider stops steering. Bigger = stops sooner.\n\n```js\n// An icy kart that slides on after the rider stops steering\napi.setVehicleSetting(kartId, "standingFriction", 0.2)\n```\n\n## steering\n\n**Type:** `SteeringOpts | null`\n\n**Default:** `null`\n\nMakes it steer like a car: left and right turn it rather than sliding it sideways. `null` moves\nfreely in any direction, like a walking player. See `SteeringOpts`.\n\n```js\n// A drift kart: quick to turn, but the back end steps out on every corner\napi.setVehicleSetting(kartId, "steering", { turnRate: 3.5, corneringSpeedDamping: 0.1, gripStrength: 2, gripInFluid: false })\n```\n\n## upwardImpulseOnUse\n\n**Type:** `number`\n\n**Default:** `0`\n\nCannot be changed for a single vehicle - it is always read from the physics type\'s own values.\n\nAn upward shove the moment the rider uses the vehicle, like a balloon lifting off. `0` = none.\n\n```js\n// In physics/settings/*.ts: a balloon that launches its rider higher\nupwardImpulseOnUse: 30\n```\n\n## verticalBounciness\n\n**Type:** `number`\n\n**Default:** `0`\n\nHow bouncy the floor is: `0` lands flat, `1` bounces back as fast as it fell. Stacks with the\n`bounciness` client option, and has the same rebound floor as `horizontalBounciness`.\n\n```js\n// A space hopper kart that bounces every time it lands\napi.setVehicleSetting(kartId, "verticalBounciness", 0.7)\n```\n\n## verticalImpactCameraShake\n\n**Type:** `ImpactCameraShakeOpts | null`\n\n**Default:** `null`\n\nShakes the camera when it hits a floor or ceiling hard enough; it need not bounce. `null` = no shake. See `ImpactCameraShakeOpts`.\n\n```js\n// A bone-shaking thump when an off-roader lands a big jump\napi.setVehicleSetting(offRoaderId, "verticalImpactCameraShake", { minSpeed: 3, intensityPerSpeed: 0.05, maxIntensity: 1, durationMs: 400 })\n```\n\n## width\n\n**Type:** `number`\n\n**Default:** `0.5`\n\nHow wide it is, in blocks.\n\n```js\n// A monster truck too wide for one-block alleys\napi.setVehicleSetting(offRoaderId, "width", 1.2)\n```\n\n## Physics Type Defaults\n\nOnly the changes are shown - anything not listed keeps the value from the step before.\n\n### DEFAULT\n\nA player walking around on foot. Every other type starts from these values.\n\nUses the default values, with nothing changed.\n\n### BOAT\n\nFloats on water and slides over ice. The fast tier can steer, and skips along the surface like a stone.\n\n```ts\nmass: 0.25\nfluidDrag: 2\nfluidDragHorizontal: 0\nfluidDragVertical: 2\nheight: 1.2\ncanRun: false\njumpMultiplier: 0\ncanAutoStep: false\ncanAutoStepByBlock: {\n    Ice: true,\n    "Ice Bricks": true,\n    "Ice Bricks Slab": true,\n    "Melting Ice": true,\n    "Melting Ice|Breaking": true,\n}\npose: "sitting"\neffect: { name: "Boating", icon: "Boating" }\nstandingFriction: 0.4\nspeedMultiplier: 0.25\nfluidSpeedMultiplier: 40\nairSpeedMultiplier: 32\nspeedMultiplierByBlock: { Ice: 40, "Ice Bricks": 40, "Ice Bricks Slab": 40, "Melting Ice": 40, "Melting Ice|Breaking": 40 }\nmaxPushDistance: 7.3\nmovementForceMultiplier: 0.03\ndisableFootstepSounds: true\n```\n\n#### Tier `WOOD`\n\nThe same as `BOAT` above, with nothing changed.\n\n#### Tier `OBSIDIAN`\n\n```ts\neffect: { name: "Boating", icon: "Obsidian Boating" }\n```\n\n#### Tier `SPEED`\n\n```ts\nfluidDragVertical: 1\nfluidSpeedMultiplier: 60\nairSpeedMultiplier: 56\nmovementForceMultiplier: 0.07\nhorizontalBounciness: 0.2\nsteering: { turnRate: 1.6, corneringSpeedDamping: 0.2, gripStrength: 4.5, gripInFluid: true }\nfluidSkip: { minSpeed: 11, launchSpeedFraction: 0.4, launchApproachRate: 25 }\n```\n\n### GLIDER\n\nGlides where you look while mid-air and falling, for as long as the glider is held.\n\n```ts\ngravityMultiplier: 0\nheight: 1.4\npose: "gliding"\neffect: { name: "Gliding", icon: "Gliding" }\nairborneMode: { activeMovementType: MovementType.GLIDING, durationMs: null, exitsVehicleOnEnd: false }\nairborneMovement: {\n    model: "cameraDirection",\n    maxSpeed: 13,\n    minSpeed: 0.5,\n    pitchAcceleration: 0.0125,\n    friction: 0,\n    impulseDecayTicks: 100,\n    biasMagnitude: 1.5,\n    excessVelocityBleedPerTick: 0.5,\n}\n```\n\n#### Tier `WOOD`\n\nThe same as `GLIDER` above, with nothing changed.\n\n#### Tier `IRON`\n\n```ts\nairborneMovement: {\n    model: "cameraDirection",\n    maxSpeed: 17,\n    minSpeed: 0.5,\n    pitchAcceleration: 0.0125,\n    friction: 0,\n    impulseDecayTicks: 100,\n    biasMagnitude: 1.5,\n    excessVelocityBleedPerTick: 0.5,\n}\n```\n\n#### Tier `GOLD`\n\n```ts\nairborneMovement: {\n    model: "cameraDirection",\n    maxSpeed: 21,\n    minSpeed: 0.5,\n    pitchAcceleration: 0.0125,\n    friction: 0,\n    impulseDecayTicks: 100,\n    biasMagnitude: 1.5,\n    excessVelocityBleedPerTick: 0.5,\n}\n```\n\n#### Tier `DIAMOND`\n\n```ts\nairborneMovement: {\n    model: "cameraDirection",\n    maxSpeed: 25,\n    minSpeed: 0.5,\n    pitchAcceleration: 0.0125,\n    friction: 0,\n    impulseDecayTicks: 100,\n    biasMagnitude: 1.5,\n    excessVelocityBleedPerTick: 0.5,\n}\n```\n\n### BALLOON\n\nShoves you upwards on use, then drifts back down until the time runs out.\n\n```ts\ngravityMultiplier: 0\nupwardImpulseOnUse: 20\neffect: { name: "Floating", icon: "Red Balloon", duration: 16000 }\nairborneMode: { activeMovementType: MovementType.FLOATING, durationMs: 16000, exitsVehicleOnEnd: true }\nairborneMovement: { model: "heading" }\nairborneFallSpeedLimit: { maxFallSpeed: 3, slowDownSeconds: 0.15, compensateGravity: true }\n```\n\n#### Tier `YELLOW`\n\n```ts\neffect: { name: "Floating", icon: "Yellow Balloon", duration: 16000 }\n```\n\n#### Tier `WHITE`\n\n```ts\neffect: { name: "Floating", icon: "White Balloon", duration: 16000 }\n```\n\n#### Tier `RED`\n\nThe same as `BALLOON` above, with nothing changed.\n\n#### Tier `PURPLE`\n\n```ts\neffect: { name: "Floating", icon: "Purple Balloon", duration: 16000 }\n```\n\n#### Tier `PINK`\n\n```ts\neffect: { name: "Floating", icon: "Pink Balloon", duration: 16000 }\n```\n\n#### Tier `ORANGE`\n\n```ts\neffect: { name: "Floating", icon: "Orange Balloon", duration: 16000 }\n```\n\n#### Tier `MAGENTA`\n\n```ts\neffect: { name: "Floating", icon: "Magenta Balloon", duration: 16000 }\n```\n\n#### Tier `LIME`\n\n```ts\neffect: { name: "Floating", icon: "Lime Balloon", duration: 16000 }\n```\n\n#### Tier `LIGHT_GRAY`\n\n```ts\neffect: { name: "Floating", icon: "Light Gray Balloon", duration: 16000 }\n```\n\n#### Tier `LIGHT_BLUE`\n\n```ts\neffect: { name: "Floating", icon: "Light Blue Balloon", duration: 16000 }\n```\n\n#### Tier `GREEN`\n\n```ts\neffect: { name: "Floating", icon: "Green Balloon", duration: 16000 }\n```\n\n#### Tier `GRAY`\n\n```ts\neffect: { name: "Floating", icon: "Gray Balloon", duration: 16000 }\n```\n\n#### Tier `CYAN`\n\n```ts\neffect: { name: "Floating", icon: "Cyan Balloon", duration: 16000 }\n```\n\n#### Tier `BROWN`\n\n```ts\neffect: { name: "Floating", icon: "Brown Balloon", duration: 16000 }\n```\n\n#### Tier `BLUE`\n\n```ts\neffect: { name: "Floating", icon: "Blue Balloon", duration: 16000 }\n```\n\n#### Tier `BLACK`\n\n```ts\neffect: { name: "Floating", icon: "Black Balloon", duration: 16000 }\n```\n\n### SLEEPING\n\nA player lying in a bed. They face whichever way the bed points, so there is one tier per bed direction.\n\n```ts\ncanRun: false\njumpMultiplier: 0\npose: "sleeping"\neffect: { name: "Sleeping", icon: "Red Bed" }\nspeedMultiplier: 0\nmovementForceMultiplier: 0\ndisableBaseMovement: true\n```\n\n#### Tier `ROTATION_1`\n\n```ts\nfixedHeading: 0\n```\n\n#### Tier `ROTATION_2`\n\n```ts\nfixedHeading: 1.5708\n```\n\n#### Tier `ROTATION_3`\n\n```ts\nfixedHeading: 3.14159\n```\n\n#### Tier `ROTATION_4`\n\n```ts\nfixedHeading: -1.5708\n```\n\n### RIDING_MOB\n\nA player riding an animal. The animal does the moving, so the player\'s own movement is switched off.\n\n```ts\nfluidDrag: 4\ngravityMultiplier: 6\nheight: 1.5\npose: "riding"\neffect: { name: "Riding", icon: "Riding" }\nspeedMultiplier: 2.25\nmovementForceMultiplier: 0.9\n```\n\n### CAR\n\nQuick on solid ground and hopeless in water. It steers like a car instead of sliding sideways.\n\n```ts\nmass: 2.5\nfluidDrag: 1\nfluidDragHorizontal: 1\nfluidDragVertical: 0\ngravityMultiplier: 3\nwidth: 0.25\nheight: 1.1\ncanRun: false\njumpMultiplier: 2.25\nriderOffset: [0, 0.25, -0.5]\npose: "driving"\neffect: { name: "Driving", icon: "Red Kart" }\nstandingFriction: 2\nspeedMultiplier: 12\nfluidSpeedMultiplier: 0.0333333\nmaxPushDistance: 10\nmovementForceMultiplier: 0.5\ndisableFootstepSounds: true\nhorizontalBounciness: 0.6\nsteering: { turnRate: 3, corneringSpeedDamping: 0.25, gripStrength: 10, gripInFluid: false }\n```\n\n#### Tier `KART`\n\nThe same as `CAR` above, with nothing changed.\n\n#### Tier `OFF_ROADER`\n\n```ts\nmass: 3\ngravityMultiplier: 4\njumpMultiplier: 3\nriderOffset: [0, 0.25, -0.2]\neffect: { name: "Driving", icon: "Off Roader" }\nspeedMultiplier: 10\nfluidSpeedMultiplier: 0.04\nhorizontalBounciness: 0.3\nverticalBounciness: 0.4\nminVerticalSpeedToBounce: 2\nverticalImpactCameraShake: { minSpeed: 4, intensityPerSpeed: 0.025, maxIntensity: 0.5, durationMs: 250 }\nsteering: { turnRate: 2.2, corneringSpeedDamping: 0.25, gripStrength: 5, gripInFluid: false }\n```\n\n#### Tier `CAR`\n\n```ts\nmass: 2.75\ngravityMultiplier: 3.5\njumpMultiplier: 2.625\nriderOffset: [0, 0, -0.25]\neffect: { name: "Driving", icon: "Light Blue Car" }\nspeedMultiplier: 11\nfluidSpeedMultiplier: 0.0367\nspeedMultiplierByBlock: {\n    Dirt: 0.6,\n    "Messy Dirt": 0.6,\n    "Rocky Dirt": 0.6,\n    "Grass Block": 0.6,\n    "Pine Grass Block": 0.6,\n    "Jungle Grass Block": 0.6,\n    "Overgrown Grass Block": 0.6,\n    "Overgrown Pine Grass Block": 0.6,\n    "Overgrown Jungle Grass Block": 0.6,\n    "Dry Grass Block": 0.6,\n    "Overgrown Dry Grass Block": 0.6,\n    Sand: 0.6,\n    "Red Sand": 0.6,\n    Gravel: 0.6,\n    Clay: 0.6,\n    Snow: 0.6,\n    "Packed Snow": 0.6,\n}\nhorizontalBounciness: 0.45\nminVerticalSpeedToBounce: 2\nverticalImpactCameraShake: { minSpeed: 4, intensityPerSpeed: 0.0125, maxIntensity: 0.25, durationMs: 250 }\nsteering: { turnRate: 2.6, corneringSpeedDamping: 0.25, gripStrength: 7.5, gripInFluid: false }\n```\n\n#### Tier `GOLD_MINING_DRILL`\n\n```ts\nmass: 3\ngravityMultiplier: 4\njumpMultiplier: 3\nriderOffset: [0, 0.25, -0.2]\neffect: { name: "Driving", icon: "Gold Mining Drill" }\nspeedMultiplier: 5\nfluidSpeedMultiplier: 0.02\nhorizontalBounciness: 0\nverticalBounciness: 0.4\nminVerticalSpeedToBounce: 2\nverticalImpactCameraShake: { minSpeed: 4, intensityPerSpeed: 0.025, maxIntensity: 0.5, durationMs: 250 }\nsteering: { turnRate: 1.65, corneringSpeedDamping: 0.25, gripStrength: 5, gripInFluid: false }\n```\n\n#### Tier `ARMORED_CAR`\n\n```ts\nmass: 4.5\ngravityMultiplier: 4\njumpMultiplier: 2.5\nriderOffset: [0, 0.25, -0.2]\neffect: { name: "Driving", icon: "Armored Car" }\nstandingFriction: 1.6\nspeedMultiplier: 9\nfluidSpeedMultiplier: 0.0444444\nhorizontalBounciness: 0.15\nverticalBounciness: 0.15\nminVerticalSpeedToBounce: 2\nverticalImpactCameraShake: { minSpeed: 4, intensityPerSpeed: 0.03, maxIntensity: 0.5, durationMs: 300 }\nsteering: { turnRate: 1.6, corneringSpeedDamping: 0.35, gripStrength: 6, gripInFluid: false }\n```\n\n#### Tier `IRON_MINING_DRILL`\n\n```ts\nmass: 3\ngravityMultiplier: 4\njumpMultiplier: 3\nriderOffset: [0, 0.25, -0.2]\neffect: { name: "Driving", icon: "Iron Mining Drill" }\nspeedMultiplier: 4\nfluidSpeedMultiplier: 0.02\nhorizontalBounciness: 0\nverticalBounciness: 0.4\nminVerticalSpeedToBounce: 2\nverticalImpactCameraShake: { minSpeed: 4, intensityPerSpeed: 0.025, maxIntensity: 0.5, durationMs: 250 }\nsteering: { turnRate: 1.65, corneringSpeedDamping: 0.25, gripStrength: 5, gripInFluid: false }\n```\n\n#### Tier `DIAMOND_MINING_DRILL`\n\n```ts\nmass: 3\ngravityMultiplier: 4\njumpMultiplier: 3\nriderOffset: [0, 0.25, -0.2]\neffect: { name: "Driving", icon: "Diamond Mining Drill" }\nspeedMultiplier: 6\nfluidSpeedMultiplier: 0.02\nhorizontalBounciness: 0\nverticalBounciness: 0.4\nminVerticalSpeedToBounce: 2\nverticalImpactCameraShake: { minSpeed: 4, intensityPerSpeed: 0.025, maxIntensity: 0.5, durationMs: 250 }\nsteering: { turnRate: 1.65, corneringSpeedDamping: 0.25, gripStrength: 5, gripInFluid: false }\n```\n\n#### Tier `MOONSTONE_MINING_DRILL`\n\n```ts\nmass: 3\ngravityMultiplier: 4\njumpMultiplier: 3\nriderOffset: [0, 0.25, -0.2]\neffect: { name: "Driving", icon: "Moonstone Mining Drill" }\nspeedMultiplier: 7\nfluidSpeedMultiplier: 0.02\nhorizontalBounciness: 0\nverticalBounciness: 0.4\nminVerticalSpeedToBounce: 2\nverticalImpactCameraShake: { minSpeed: 4, intensityPerSpeed: 0.025, maxIntensity: 0.5, durationMs: 250 }\nsteering: { turnRate: 1.65, corneringSpeedDamping: 0.25, gripStrength: 5, gripInFluid: false }\n```\n\n### HOVERCRAFT\n\nSkims over both land and water, and slides sideways easily because it has no grip.\n\n```ts\nmass: 0.5\nfluidDrag: 2\nfluidDragHorizontal: 0\nfluidDragVertical: 2\ngravityMultiplier: 3\nheight: 1.2\ncanRun: false\njumpMultiplier: 0.7\nriderOffset: [0, 0.25, -0.25]\npose: "driving"\neffect: { name: "Hovering", icon: "Hovercraft" }\nstandingFriction: 0.4\nspeedMultiplier: 9\nmaxPushDistance: 6\nmovementForceMultiplier: 0.11\ndisableFootstepSounds: true\n```\n\n## Types Glossary\n\nThe object shapes taken by some of the settings above.\n\n### `SteeringOpts`\n\n```ts\ntype SteeringOpts = {\n    /** How fast it turns, in radians per second. Bigger = snappier steering and tighter corners. */\n    turnRate: number\n    /** How much speed a hard corner costs, from `0` (none) to `1` (all of it). */\n    corneringSpeedDamping: number\n    /**\n     * How much it grips the ground. `0` slides sideways like a hovercraft on ice; bigger values make it\n     * follow its nose round corners. Solid ground only, unless `gripInFluid` is on.\n     */\n    gripStrength: number\n    /** Whether it also grips while floating in water, so a boat can corner like a kart. */\n    gripInFluid: boolean\n}\n```\n\n### `FluidSkipOpts`\n\n```ts\ntype FluidSkipOpts = {\n    /** How fast it must be going, in blocks per second, to start skipping. */\n    minSpeed: number\n    /** How much of its speed above `minSpeed` becomes upward launch speed. Bigger = higher skips. */\n    launchSpeedFraction: number\n    /** How snappily it leaves the water. Bigger = a sharp pop; smaller = a slow heave. */\n    launchApproachRate: number\n}\n```\n\n### `ImpactCameraShakeOpts`\n\n```ts\ntype ImpactCameraShakeOpts = {\n    /** The crash speed, in blocks per second, needed to shake at all, so small bumps are ignored. */\n    minSpeed: number\n    /** How much shake each extra block per second adds. Shake runs from `0` (still) to `1` (violent). */\n    intensityPerSpeed: number\n    /** The most shake one crash can cause. */\n    maxIntensity: number\n    /** How long the shake lasts, in milliseconds. */\n    durationMs: number\n}\n```\n\n### `AirborneModeOpts`\n\n```ts\ntype AirborneModeOpts = {\n    /** Which movement type to switch to: `GLIDING` for gliders, `FLOATING` for balloons. */\n    activeMovementType: MovementType\n    /** How long the flying lasts, in milliseconds, before it drops the rider. `null` = no limit. */\n    durationMs: number | null\n    /** Whether the flying ending also throws the rider off, as a popping balloon does. */\n    exitsVehicleOnEnd: boolean\n}\n```\n\n### `AirborneMovementOpts`\n\n```ts\ntype AirborneMovementOpts = HeadingAirborneMovement | CameraDirectionAirborneMovement\n```\n\n### `HeadingAirborneMovement`\n\n```ts\ntype HeadingAirborneMovement = { model: "heading" }\n```\n\n### `CameraDirectionAirborneMovement`\n\n```ts\ntype CameraDirectionAirborneMovement = {\n    model: "cameraDirection"\n    /** The fastest it can fly. Better gliders get a bigger value, and dive and climb more sharply. */\n    maxSpeed: number\n    /** The slowest it can fly. It never stalls below this, however steeply it climbs. */\n    minSpeed: number\n    /** How much looking up or down changes its speed. Bigger = dives gain speed quickly. */\n    pitchAcceleration: number\n    /** How much drag slows it each tick. `0` = none. */\n    friction: number\n    /** How many ticks an outside shove - a fuel boost, or knockback - keeps its momentum before flight takes over again. */\n    impulseDecayTicks: number\n    /** How strongly it is nudged forwards, then gently downwards, so a level glider sinks slowly. */\n    biasMagnitude: number\n    /** How much leftover speed from a shove is shed each tick. */\n    excessVelocityBleedPerTick: number\n}\n```\n\n### `FallSpeedLimitOpts`\n\n```ts\ntype FallSpeedLimitOpts = {\n    /** The fastest it may fall, in blocks per second. */\n    maxFallSpeed: number\n    /** Roughly how long, in seconds, it takes to slow back to the limit. Smaller = a firmer catch. */\n    slowDownSeconds: number\n    /** Whether to also cancel gravity while holding it back, so the limit is not slowly overpowered. */\n    compensateGravity: boolean\n}\n```\n\n',
       ⟦2-char-id⟧ = "# API Reference\n\n## addCustomKillfeedMessage\nAdd a custom killfeed message to the killfeed\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| killer | ` { eId: EntityId } \\| { name: string; colour: string } ` | The entity ID or a custom name and colour for the killer |\n| victim | ` { eId: EntityId } \\| { name: string; colour: string } ` | The entity ID or a custom name and colour for the victim |\n| withItem | `string` | The item used |\n\n\n\n\n\n \n\n## addFollowingEntityToPlayer\nAdd following entity to an entity\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `EntityId` |  |\n| eId | `EntityId` |  |\n| offset | `number[]` |  |\n| followsPlayerRotation | `boolean` |  |\n\n\n\n\n\n \n\n## addQTE\nCreate and register the UI for the requested quicktime event (QTE) to the screen.\n\nHandle the result via the onPlayerFinishQTE engine callback.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| qteParameters | `QTEClientParameters<T>` | includes type and parameters |\n\n\n\n### Returns:\n`QTERequestId`\n\n \n\nan id that can be passed to deleteQTE\n\n \n\n## addUiRequest\nAdd a request for the player to answer in the top right corner. E.g. accepting or denying a tprequest.\n\n\n\nUse onUiRequestResponded to handle the response.\n\n\n\nExample Usage:\n\n```js\nconst myRequestId = api.addUiRequest(playerId, {\n  type: \"standard\",\n  title: \"Do you want to join the game?\",\n}, 5000)\n\nonUiRequestResponded = (playerId, uiRequestId, response) => {\n  if (uiRequestId === myRequestId) {\n    api.log(response)\n  }\n}\n```\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The ID of the player to add the request to. |\n| parameters | `UiRequestClientParameters` | The parameters of the request. |\n| timeoutAfterMs | `number` | The timeout after which the request will be automatically deleted. A response will not be given and onUiRequestResponded will not be called. |\n\n\n\n### Returns:\n`UiRequestId`\n\n \n\nThe ID of the request. Pass into deleteUiRequest or cross-reference with onUiRequestResponded.\n\n \n\n## addUiRequestPopup\nAdd a request for the player to answer in the form of a popup. This blocks the player from doing anything else until they respond.\n\n\n\nUse onUiRequestResponded to handle the response.\n\n\n\nExample Usage:\n\n```js\nconst myRequestId = api.addUiRequestPopup(playerId, \"Do you want to join the game?\")\n\nonUiRequestResponded = (playerId, uiRequestId, response) => {\n  if (uiRequestId === myRequestId) {\n    api.log(response)\n  }\n}\n```\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The ID of the player to add the request to. |\n| requestText | `string` | The text of the request. |\n\n\n\n### Returns:\n`UiRequestId | null`\n\n \n\nThe ID of the request, or null if the request was rate limited. Pass into deleteUiRequest or cross-reference with onUiRequestResponded.\n\n \n\n## animateEntity\nAnimates the given entity. Pass `null` for `animation` to stop the entity's current animation (the\n\n`initialTimeFraction` and `animationSpeed` arguments are ignored in that case).\n\n\n\nPass a clip name instead (such as `\"animation.quadruped.head_wave\"`, or just `\"head_wave\"`) to play a clip of the texture pack's or\n\nBloxd's built-in animation on a mob or vehicle that has animation. It adds onto the entity's automatic animation,\n\nas a head nod plays over a walk, or replaces the parts it moves if the clip sets `override_previous_animation`. It\n\nblends back out when a one-shot clip ends or the animation is stopped; a looping or held clip plays until\n\nstopped or replaced. An entity without animation, or a name no clip has (or several share: give the full name),\n\nplays nothing. A name must be 1 to 128 characters long, or the call throws.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| entityId | `EntityId` |  |\n| animation | `AnimationSchema \\| BlockbenchAnimationSchema \\| string \\| null` |  |\n| initialTimeFraction | `number` |  |\n| animationSpeed | `number` |  |\n\n\n\n\n\n \n\n## applyAuraChange\nAdd (or remove if negative) aura to a player. Will not go over max level or under 0\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| auraDiff | `number` |  |\n\n\n\n### Returns:\n`number`\n\n \n\nThe actual change in aura\n\n \n\n## applyEffect\nApply an effect to a lifeform.\n\nCan be an inbuilt effect E.g. \"Speed\" (speed boost), \"Damage\" (damage boost).\n\nFor inbuilt just pass the name of the effect and the functionality is handled in-engine.\n\nFor custom effect, you pass customEffectInfo. The icon can be an InGameIconName or a bloxd item name.\n\nThe custom effect onEndCb is an optional helper within which you can undo the effect you applied.\n\nNote that onEndCb will not work for press to code boards, code blocks or world code.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| lifeformId | `LifeformId` |  |\n| effectName | `string` |  |\n| duration | `number \\| null` |  |\n| customEffectInfo | ` { icon?: IngameIconName \\| ItemName; onEndCb?: () => void; displayName?: string \\| TranslatedText } & Partial<InbuiltEffectInfo> ` |  |\n\n\n\n\n\n \n\n## applyHealthChange\n\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| lifeformId | `LifeformId` |  |\n| changeAmount | `number` | Must be an integer. A positive amount will increase the entity's health. A negative amount will decrease the entity's shield first, then their health. |\n| whoDidDamage | ` LifeformId \\| { lifeformId: LifeformId; withItem: string } ` | Optional - If damage done by another player |\n| broadcastLifeformHurt | `boolean` |  |\n\n\n\n### Returns:\n`boolean`\n\n \n\n\n\n \n\n## applyImpulse\nApply an impulse to an entity\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| eId | `EntityId` |  |\n| xImpulse | `number` |  |\n| yImpulse | `number` |  |\n| zImpulse | `number` |  |\n\n\n\n\n\n \n\n## applyMeleeHit\nMake it as if hittingEId hit hitEId\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| hittingEId | `LifeformId` |  |\n| hitEId | `LifeformId` |  |\n| dirFacing | `number[]` |  |\n| bodyPartHit | `LifeformBodyPart \\| null` |  |\n| overrides | ` { damage?: number \\| null heldItemName?: string \\| null horizontalKbMultiplier?: number verticalKbMultiplier?: number } ` |  |\n\n\n\n### Returns:\n`boolean`\n\n \n\nwhether the attack damaged the lifeform\n\n \n\n## attemptApplyDamage\nApply damage to a lifeform.\n\neId is the player initiating the damage, hitEId is the lifeform being hit.\n\n\n\nIt is recommended to self-inflict damage when the game code wants to apply damage to a lifeform.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| { eId, hitEId, attemptedDmgAmt, withItem, bodyPartHit = undefined, attackDir = undefined, showCritParticles = false, reduceVerticalKbVelocity = true, horizontalKbMultiplier = 1, verticalKbMultiplier = 1, broadcastEntityHurt = true, attackCooldownSettings = null, hittingSoundOverride = null, ignoreOtherEntitySettingCanAttack = false, isTrueDamage = false, damagerDbId = null, damageCause = null, } | `PlayerAttemptDamageOtherPlayerOpts` |  |\n\n\n\n### Returns:\n`boolean`\n\n \n\nwhether the attack damaged the lifeform\n\n \n\n## attemptCreateAudioEntity\nCreate an invisible audio entity at a world position that loops a sound to\n\nnearby players (e.g. a waterfall or fireplace).\n\n\n\nAudio entities count against the same budget as physics-less mesh entities; returns null\n\nif that budget is exhausted.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| x | `number` |  |\n| y | `number` |  |\n| z | `number` |  |\n| soundName | `string` | The sound to loop. |\n| volume | `number` |  |\n| options | ` { refDistance?: number maxHearDist?: number rate?: number } ` | : number, maxHearDist: number, rate: number} refDistance: higher means the sound decreases less in volume with distance. Defaults to 3. Hitting is 4. Guns are 10 maxHearDist: sound is not played if player is further than this. Defaults to 30 rate: The speed of playback. Also affects pitch. 0.5-4. Lower playback = lower pitch. Good for varying the sound. E.g. item pickup sound has a random rate between 1 and 1.5. |\n\n\n\n### Returns:\n`EntityId | null`\n\n \n\nthe audio entity ID, or null if the entity budget is exhausted\n\n \n\n## attemptCreateMeshEntity\nTry to create a mesh entity. This creates an entity whose mesh position is synced with clients.\n\nSet entity position using setPosition\n\nThere is a limit to the number of mesh entities that can be created: 400 without physics (audio entities count too), 100 with physics (throwables count too).\n\nSeparately, each player sees only the nearest 100 mesh entities of one kind (the mesh type, or the block name for a BloxdBlock); farther ones are hidden.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| type | `MeshType` |  |\n| opts | `MeshEntityOpts[MeshType]` |  |\n| name | `string` | The default name for the nametag |\n| physicsOptions | `MeshEntityPhysicsOpts` | Physics Options. With doPhysics, the physics body is at most 25 blocks across, however big the mesh; the entity collision box is the body grown by widthExpandAmt and heightExpandAmt. |\n| initiatorId | `EntityId` | The entity that initiated the creation of the mesh entity. |\n\n\n\n### Returns:\n`EntityId | null`\n\n \n\nnull if the entity creation failed, otherwise the entity ID.\n\n \n\n## attemptCreateThrowable\nTry to create a throwable entity.\n\nSimilar to creating a mesh entity and uses the same rate limiting.\n\nHowever, this uses the predefined throwables system and physics used by throwable items with the game\n\nEach throwable item has its own behaviour already, including default velocity, damage and gravity multipliers.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| throwerEId | `EntityId` |  |\n| itemName | `ThrowableItem` | Must be an Item that is usually throwable in-engine |\n| position | `[number, number, number]` | Starting position |\n| direction | `[number, number, number]` |  |\n| velocityMult | `number` | Multiplier for the default velocity of the throwable item |\n| damageMult | `number` | Multiplier for the default damage of the throwable item |\n| gravityMult | `number` | Multiplier for the default gravity of the throwable item |\n| attributes | `ItemAttributes` | item attributes (currently used only for the \"Boomerag\" item) |\n\n\n\n### Returns:\n`string`\n\n \n\nnull if throwable creation failed, otherwise the entity ID.\n\n \n\n## attemptSpawnMob\nTry to spawn a mob into the world at a given position. Returns null on failure.\n\nWARNING: Either the \"onPlayerAttemptSpawnMob\" or the \"onWorldAttemptSpawnMob\" game callback will be called\n\ndepending on whether \"spawnerId\" is provided. Calling this function inside those callbacks risks infinite recursion.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| mobType | `TMobType` |  |\n| x | `number` |  |\n| y | `number` |  |\n| z | `number` |  |\n| opts | `MobSpawnOpts<TMobType>` | Includes: - mobHerdId The ID of this mob's herd. (A mob herd represents a collection of mobs that move together.) - spawnerId The ID of the player who tried to spawn this mob. - mobDbId A persistent ID for the mob. This can be useful when loading mob data from the database. If the DB ID is already taken, null will be returned. - name If set, gives the mob a name that will be displayed as a nametag above their head. - playSoundOnSpawn - variation - physicsOpts { width: number; height: number; collidesEntities: boolean }. The body is at most 25 blocks wide and 90 tall. |\n\n\n\n### Returns:\n`MobId | null`\n\n \n\nnull if the mob could not be spawned.\nThis can happen when there are too many mobs in the world for the current number\nof players in the lobby, or if the area is protected e.g. by spawn area protection.\n\n \n\n## attemptSpawnVehicle\nTry to spawn a rideable vehicle, which players can mount with an alt action.\n\nThere is a limit to the number of mesh entities with physics that can be created.\n\nWARNING: Either the \"onPlayerAttemptSpawnVehicle\" or the \"onWorldAttemptSpawnVehicle\" game callback will be called\n\ndepending on whether \"spawnerId\" is provided. Calling this function inside those callbacks risks infinite recursion.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| vehicleType | `MeshEntityVehicleType` |  |\n| x | `number` |  |\n| y | `number` |  |\n| z | `number` |  |\n| opts | `VehicleSpawnOpts` | Includes: - spawnerId The ID of the player who spawned the vehicle. The vehicle faces away from them. |\n\n\n\n### Returns:\n`EntityId | null`\n\n \n\nnull if the vehicle could not be spawned, otherwise the entity ID of the vehicle.\n\n \n\n## attemptWorldChangeBlock\nInitiate a block change \"by the world\".\n\nCalls onWorldAttemptChangeBlock, then onWorldChangeBlock if allowed.\n\ninitiatorDbId is null if the change was initiated by the game code.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| initiatorDbId | `PlayerDbId \\| null` |  |\n| x | `number` |  |\n| y | `number` |  |\n| z | `number` |  |\n| blockName | `BlockName` |  |\n| extraInfo | `WorldBlockChangedInfo \\| null` |  |\n\n\n\n### Returns:\n`\"preventChange\" | \"preventDrop\" | void`\n\n \n\n\"preventChange\" if the change was prevented, \"preventDrop\" if the change was allowed but without dropping any items, and undefined if the change was allowed with an item drop\n\n \n\n## blockCoordToChunkId\nGet the unique id of the chunk containing pos in the current map\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| pos | `number[]` |  |\n\n\n\n### Returns:\n`string`\n\n \n\n\n\n \n\n## blockIdToBlockName\nGoes from block id to block name. The reverse of blockNameToBlockId\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| blockId | `BlockId` |  |\n\n\n\n### Returns:\n`BlockName`\n\n \n\n\n\n \n\n## blockNameToBlockId\nGet the numeric id of a block used in the ndarrays returned from getChunk\n\nI.e. chunk.blockData.set(x, y, z, api.blockNameToBlockId(\"Dirt\"))\n\nor chunk.blockData.get(x, y, z) === api.blockNameToBlockId(\"Dirt\")\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| blockName | `BlockName` |  |\n| allowInvalidBlock | `boolean` | Don't throw an error if the block name is invalid. Defaults false. If true and name is invalid, returns null. |\n\n\n\n### Returns:\n`number | null`\n\n \n\n\n\n \n\n## broadcastMessage\nSend a message to everyone\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| message | `string \\| CustomTextStyling` | The text contained within the message. Can use `Custom Text Styling`. |\n| style | ` { fontWeight?: number \\| string; color?: string; colour?: string } ` | An optional style argument. Can contain values for fontWeight and color of the message. style is ignored if message uses custom text styling (i.e. is not a string). |\n\n\n\n\n\n \n\n## broadcastSound\nSee documentation for api.playSound\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| soundName | `string` |  |\n| volume | `number` |  |\n| rate | `number` |  |\n| posSettings | ` { playerIdOrPos: EntityId \\| number[] maxHearDist?: number refDistance?: number } ` |  |\n| exceptPlayerId | `PlayerId \\| null` |  |\n\n\n\n\n\n \n\n## calcExplosionForce\n\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| eId | `EntityId` |  |\n| explosionType | `ExplosionType` |  |\n| knockbackFactor | `number` |  |\n| explosionRadius | `number` |  |\n| explosionPos | `number[]` |  |\n| ignoreProjectiles | `boolean` |  |\n\n\n\n### Returns:\n` { force: [number, number, number]; forceFrac: number; } `\n\n \n\n\n\n \n\n## canOpenStandardChest\nChecks if a player is able to open a chest at a given location,\n\nas per the rules laid out by the \"onPlayerAttemptOpenChest\" game callback.\n\nReturns true if the player can open the chest, false if they cannot, and void if the chest does not exist.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| chestX | `number` |  |\n| chestY | `number` |  |\n| chestZ | `number` |  |\n\n\n\n### Returns:\n`boolean | null`\n\n \n\n\n\n \n\n## changePlayerIntoSkin\nChange a part of a player's skin.\n\nUGC code is restricted to cosmetics from packs with ugcSelectable; internal code can use any cosmetics.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | Player to change |\n| cosmeticType | `CosmeticType` | Type of cosmetic |\n| cosmeticName | `CosmeticName` | Chosen cosmetic, will be made lowercase automatically |\n\n\n\n\n\n \n\n## checkValid\nCheck your game (and, optionally, a entity) is still valid and executing.\n\nUseful if you're using async functions and await within your game.\n\nIf you use await/async or promises and do not check this, your game could have closed and then the rest of your\n\nasync code executes.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| entityId | `EntityId \\| null` |  |\n\n\n\n### Returns:\n`boolean`\n\n \n\n\n\n \n\n## chunkIdToBotLeftCoord\nGet the co-ordinates of the block in the chunk with the lowest x, y, and z co-ordinates\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| chunkId | `string` |  |\n\n\n\n### Returns:\n`[number, number, number]`\n\n \n\n\n\n \n\n## clearDirectionArrow\nClear a directional arrow from the player's screen.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The player to clear the arrow for |\n| id | `string \\| null` | The arrow identifier to clear. If null, clears all arrows for this player. |\n\n\n\n\n\n \n\n## clearInventory\nClear the players inventory\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n\n\n\n\n\n \n\n## clearKillstreak\nClears the player's current killstreak\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n\n\n\n\n\n \n\n## closeChestForPlayer\nClose a chest for a player.\n\nIf the player does not have a chest open, do nothing.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n\n\n\n\n\n \n\n## configureShopCategory\nSet properties of a shop category.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| categoryKey | `ShopCategoryKey` | The key of the category to configure |\n| config | `ShopCategoryConfig` | Category configuration properties |\n\n\n\n\n\n \n\n## configureShopCategoryForPlayer\nConfigure a shop category for a specific player.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The player to configure the category for |\n| categoryKey | `ShopCategoryKey` | The key of the category to configure |\n| config | `ShopCategoryConfig` | Category configuration properties |\n\n\n\n\n\n \n\n## copyChunk\nCopies chunk from one position to another.\n\nA good use case for this is storing 'template' chunks that can be continuously copied to a new position.\n\nIn order to reset an area to the template, e.g. resetting a session-based game.\n\n\n\nNOTE: Does nothing if the source chunk is not loaded.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| fromPos | `number[]` | A block coordinate within the chunk to copy from. |\n| toPos | `number[]` | A block coordinate within the chunk to copy to. |\n\n\n\n\n\n \n\n## createEnchantmentAttributesForItem\nCreate enchantment attributes for an item at a given enchantment level. Same behaviour as if that level of enchant was selected for the item in an enchanting table.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| itemName | `ItemName` |  |\n| enchantmentLevel | `number` |  |\n\n\n\n### Returns:\n`EnchantmentAttributes`\n\n \n\n\n\n \n\n## createItemDrop\nCreate a dropped item.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| x | `number` |  |\n| y | `number` |  |\n| z | `number` |  |\n| itemName | `ItemName` | Name of the item. Any item name, including blocks and 'Air' |\n| amount | `number \\| null` | The amount of the item in the drop. Defaults to 1 when omitted. Use 0 for a collect-only trigger that does not add to inventory (fires onPlayerPickedUpItem with itemAmount 0). |\n| mergeItems | `boolean` | Whether to merge the item into a nearby item of same type, if one exists. Defaults to false. |\n| attributes | `ItemAttributes` | Attributes of the item being dropped |\n| timeTillDespawn | `number` | Time till the item automatically despawns in milliseconds. Defaults to 5 mins, max of 1 hour. |\n| dropperId | `LifeformId \\| null` | Who dropped the item. |\n| options | `ItemDropOptions` | Additional options, such as doPhysics and size. With doPhysics, the physics body is at most 25 blocks across. |\n\n\n\n### Returns:\n`EntityId | null`\n\n \n\nthe id you can pass to setCantPickUpItem, or null if the item drop limit was reached\n\n \n\n## createMobHerd\nCreate a mob herd. A mob herd represents a collection of mobs that move together.\n\n### Returns:\n`MobHerdId`\n\n \n\n\n\n \n\n## createShopItem\nCreate a new shop item under the given category.\n\nWill create a new category if it does not exist.\n\nIf the shop item already exists then it will be replaced.\n\nIf any per-player overrides exist under the same categoryKey and itemKey then they will be deleted.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| categoryKey | `ShopCategoryKey` | The key of the category to create the item in |\n| itemKey | `ShopItemKey` | The unique key for the item |\n| item | `ShopItem` | The shop item to create (will be mutated) |\n\n\n\n\n\n \n\n## createShopItemForPlayer\nCreate a new shop item for a specific player.\n\nWill create a new category if it does not exist.\n\nWill replace any overrides this player already has for the same item.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The player to create the item for |\n| categoryKey | `ShopCategoryKey` | The key of the category to create the item in |\n| itemKey | `ShopItemKey` | The unique key for the item |\n| item | `ShopItem` | The shop item to create (will be mutated) |\n\n\n\n\n\n \n\n## deleteAllItems\nDeletes all items dropped in the world\n\n\n\n \n\n## deleteAllLobbyDbValues\nDeletes all database values that are saved per lobby.\n\n\n\n \n\n## deleteAllPlayerDbValues\nDeletes all database values that are saved per player, including persisted currencies.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n\n\n\n\n\n \n\n## deleteAudioEntity\nDelete an audio entity by its entity ID (returned by attemptCreateAudioEntity).\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| eId | `EntityId` |  |\n\n\n\n\n\n \n\n## deleteCurrency\nDelete a currency from a player. This will make the currency unknown to the player.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| currencyId | `string` |  |\n\n\n\n\n\n \n\n## deleteEntity\nDelete any non-player entity (mesh entity, mob, audio entity, item drop, throwable, etc.) and dispose of their state.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| eId | `EntityId` |  |\n\n\n\n### Returns:\n`boolean`\n\n \n\nwhether the entity's replicated state existed and was deleted\n\n \n\n## deleteItemDrop\nDelete an item drop by item drop entity ID\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| itemId | `EntityId` |  |\n\n\n\n\n\n \n\n## deleteLobbyDbValue\nDeletes a database value that is saved per lobby.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| key | `string` |  |\n\n\n\n\n\n \n\n## deleteMeshEntity\nDelete a mesh entity\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| eId | `EntityId` |  |\n\n\n\n### Returns:\n`boolean`\n\n \n\nwhether the api successfully deleted the meshEntity\n\n \n\n## deletePlayerDbValue\nDeletes a database value that is saved per player.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| key | `string` |  |\n\n\n\n\n\n \n\n## deleteQTE\nDelete a quicktime event from the screen\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| id | `QTERequestId` | Returned from the addQTE request you want to cancel |\n\n\n\n\n\n \n\n## deleteShopItem\nDelete an existing shop item.\n\nThrows an error if the item does not exist.\n\nWill also delete all per-player overrides for the shop item.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| categoryKey | `ShopCategoryKey` | The key of the category containing the item |\n| itemKey | `ShopItemKey` | The unique key for the item |\n\n\n\n\n\n \n\n## deleteThrowable\nDelete a throwable entity before it automatically removes itself.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| eId | `EntityId` |  |\n\n\n\n### Returns:\n`boolean`\n\n \n\ntrue if the entity was deleted, false if it was not a throwable entity\n\n \n\n## deleteUiRequest\nDelete a request for a player.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| id | `UiRequestId` | Returned from the addUiRequest call you want to cancel |\n\n\n\n\n\n \n\n## despawnMob\nDispose of a mob's state and remove them from the world without triggering \"on death\" flows.\n\nAlways succeeds.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| mobId | `MobId` |  |\n\n\n\n\n\n \n\n## despawnVehicle\nDispose of a vehicle's state and remove them from the world.\n\nAlways succeeds.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| vehicleId | `EntityId` |  |\n\n\n\n\n\n \n\n## editItemCraftingRecipes\nEdit the crafting recipes for a player.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| itemName | `ItemName` |  |\n| recipesForItem | `RecipesForItem` |  |\n\n\n\n\n\n \n\n## exitPlayerVehicle\nTake a player off whatever they are riding, dropping them where it is. Does nothing if they are\n\nnot riding anything.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n\n\n\n\n\n \n\n## findItem\nFinds the index of a particular item in a player's inventory.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| itemName | `ItemName` |  |\n\n\n\n### Returns:\n`number | null`\n\n \n\n\n\n \n\n## findStandardChestItem\nFind the index of a particular item in a standard chest\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| chestPos | `number[]` |  |\n| itemName | `ItemName` |  |\n\n\n\n### Returns:\n`number | null`\n\n \n\n\n\n \n\n## forceRespawn\nForce respawn a player, stopping their motion\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| respawnPos | `number[]` |  |\n\n\n\n\n\n \n\n## getAuraInfo\nGet the aura info for a player\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n\n\n\n### Returns:\n` { level: number; totalAura: number; auraPerLevel: number } `\n\n \n\n\n\n \n\n## getBlock\nGet the name of a block.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| x | `number \\| number[]` | could be an array [x, y, z]. If so, the other params shouldn't be passed. |\n| y | `number` |  |\n| z | `number` |  |\n\n\n\n### Returns:\n`BlockName`\n\n \n\n\n\n \n\n## getBlockCoordinatesPlayerStandingOn\nGet the co-ordinates of the blocks the entity is standing on as a list. For example, if the centre of the entity is at 0,0,0\n\nthis function will return [[0, -1, 0], [-1, -1, 0], [0, -1, -1], [-1, -1, -1]]\n\nIf the entity is just standing on one block, the function would return e.g. [[0, 0, 0]]\n\nIf the entity is midair or has no physics body, returns an empty list [].\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `EntityId` |  |\n\n\n\n### Returns:\n`number[][]`\n\n \n\n\n\n \n\n## getBlockData\nGet stored data about a block in a performant manner. Data is cleared when block changes.\n\nE.g. chest\n\nWorks well with blocks marked tickable (e.g. wheat)\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| x | `number` |  |\n| y | `number` |  |\n| z | `number` |  |\n\n\n\n### Returns:\n`any`\n\n \n\n\n\n \n\n## getBlockId\nUsed to get the block id at a specific position.\n\nIntended only for use in hot code paths - default to getBlock for most use cases\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| x | `number` |  |\n| y | `number` |  |\n| z | `number` |  |\n\n\n\n### Returns:\n`BlockId`\n\n \n\n\n\n \n\n## getBlockSolidity\nReturns whether a block is solid or not.\n\nE.g. Grass block is solid, while water, ladder and water are not.\n\nWill be true if the block is unloaded.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| x | `number \\| number[]` |  |\n| y | `number` |  |\n| z | `number` |  |\n\n\n\n### Returns:\n`boolean`\n\n \n\n\n\n \n\n## getBlockTypesPlayerStandingOn\nGet the types of block the entity is standing on\n\nFor example, if an entity is standing on 4 dirt blocks, this will return [\"Dirt\", \"Dirt\", \"Dirt\", \"Dirt\"]\n\nReturns an empty list if the entity is midair or has no physics body.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `EntityId` |  |\n\n\n\n### Returns:\n`any[]`\n\n \n\n\n\n \n\n## getClientOption\nReturns the current value of a client option\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| option | `PassedOption` |  |\n\n\n\n### Returns:\n`ClientOptions[PassedOption]`\n\n \n\n\n\n \n\n## getCraftingRecipesForPlayer\nRead a player's current crafting recipe set, keyed by output item name. Includes any\n\nper-player overrides set via `editItemCraftingRecipes` / `removeItemCraftingRecipes`.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n\n\n\n### Returns:\n`Record<string, RecipesForItem>`\n\n \n\n\n\n \n\n## getCurrencyAmount\nGet the amount of a given currency a player has.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| currencyId | `string` |  |\n\n\n\n### Returns:\n`number | null`\n\n \n\nThe amount of the currency, or null if the currency is not defined.\n\n \n\n## getCurrentKillstreak\nGets the player's current killstreak\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n\n\n\n### Returns:\n`number`\n\n \n\n\n\n \n\n## getDefaultMobSetting\nReturns the current default value for a mob setting.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| mobType | `TMobType` |  |\n| setting | `TMobSetting` |  |\n\n\n\n### Returns:\n`MobSettings<TMobType>[TMobSetting]`\n\n \n\n\n\n \n\n## getEffectLevel\nGet the level of an effect on a lifeform, or 0 if they don't have it.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| lifeformId | `LifeformId` |  |\n| name | `string` |  |\n\n\n\n### Returns:\n`number`\n\n \n\n\n\n \n\n## getEffects\nGet all the effects currently applied to a lifeform.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| lifeformId | `LifeformId` |  |\n\n\n\n### Returns:\n`string[]`\n\n \n\n\n\n \n\n## getEmptyChunk\nUse this to get a chunk ndarray you can edit and set in resetChunk.\n\n\n\nOnly use chunk helpers if you REALLY need the performance (i.e. you are iterating over tens of thousands of blocks)\n\nReturnedObject.blockData is a 32x32x32 ndarray of air.\n\n(see https://www.npmjs.com/package/ndarray)\n\nEach block id is a 16-bit number\n\n### Returns:\n`GameChunk`\n\n \n\n\n\n \n\n## getEntitiesInRect\nGet the entities in the rect between [minX, minY, minZ] and [maxX, maxY, maxZ]\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| minCoords | `number[]` |  |\n| maxCoords | `number[]` |  |\n\n\n\n### Returns:\n`EntityId[]`\n\n \n\n\n\n \n\n## getEntityHeading\n\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| entityId | `EntityId` |  |\n\n\n\n### Returns:\n`number`\n\n \n\n\n\n \n\n## getEntityName\nGet the in game name of an entity: a player's name, or \"\" for a mob nobody named. Use getEntityType for what kind of mob it is.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| entityId | `EntityId` |  |\n\n\n\n### Returns:\n`string`\n\n \n\n\n\n \n\n## getEntityRotation\nGet the rotation for a server-auth entity.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| entityId | `EntityId` |  |\n\n\n\n### Returns:\n`[number, number, number]`\n\n \n\n\n\n \n\n## getEntityType\nWhat kind of entity it is: \"Player\", or a mob's type like \"Draugr Zombie\" or \"Pig\"\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| entityId | `EntityId` |  |\n\n\n\n### Returns:\n`EntityType`\n\n \n\n\n\n \n\n## getHealth\nGet the current health of an entity.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| entityId | `PlayerId` |  |\n\n\n\n### Returns:\n`number`\n\n \n\n\n\n \n\n## getHeldItem\nGet the currently held item of a player\n\nReturns null if no item is being held\n\nIf an item is held, return an object of the format {name: itemName, amount: amountOfItem}\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n\n\n\n### Returns:\n`InvenItem | null`\n\n \n\n\n\n \n\n## getInitialItemMetadata\nGet the metadata about a block or item before stats have been modified by any client options\n\n(i.e. its entry in the initial metadata object)\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| itemName | `string` |  |\n\n\n\n### Returns:\n`Partial<BlockMetadataItem & NonBlockMetadataItem>`\n\n \n\n\n\n \n\n## getInventoryFreeSlotCount\nGet the amount of free slots in a player's inventory.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n\n\n\n### Returns:\n`number`\n\n \n\nnumber\n\n \n\n## getInventoryItemAmount\nThe amount of an itemName a player has.\n\nReturns 0 if the player has none, and a negative number if infinite.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| itemName | `ItemName` |  |\n\n\n\n### Returns:\n`number`\n\n \n\nnumber\n\n \n\n## getItemAmount\nGet the amount of an item in an item entity\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| itemId | `EntityId` |  |\n\n\n\n### Returns:\n`number`\n\n \n\nnumber\n\n \n\n## getItemDropName\nGets the item name of a dropped item\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| itemEId | `EntityId` | The ID of the dropped item from createItemDrop |\n\n\n\n### Returns:\n`ItemName | null`\n\n \n\n\n\n \n\n## getItemIDsOverlappingWithPlayer\nReturns all items overlapping with the given player\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n\n\n\n### Returns:\n`EntityId[]`\n\n \n\nthe overlapping item entity IDs\n\n \n\n## getItemSlot\nGet the item at a specific index\n\nReturns null if there is no item at that index\n\nIf there is an item, return an object of the format { name: string; amount: number | null; attributes: ItemAttributes; }\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| itemSlotIndex | `number` |  |\n\n\n\n### Returns:\n`InvenItem | null`\n\n \n\n\n\n \n\n## getItemStat\nGet stat info about a block or item\n\nEither based on a client option for a player: (e.g. `DirtTtb`)\n\nor its entry in the initial metadata object if no client option is set.\n\n\n\nIf null is passed for lifeformId, this is simply its entry in blockMetadata etc.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| lifeformId | `LifeformId \\| null` |  |\n| itemName | `ItemName` |  |\n| stat | `K` |  |\n\n\n\n### Returns:\n`AnyMetadataItem[K]`\n\n \n\n\n\n \n\n## getLifeformScale\nGet the scale of a lifeform.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| lifeformId | `LifeformId` |  |\n\n\n\n### Returns:\n`number`\n\n \n\n\n\n \n\n## getLobbyDbValue\nGets a database value that is saved per lobby.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| key | `string` |  |\n\n\n\n### Returns:\n`string | number | null`\n\n \n\n\n\n \n\n## getLobbyName\nGet the name of the lobby this game is running in.\n\n### Returns:\n`string`\n\n \n\n\n\n \n\n## getLobbyType\nReturns if the current lobby the game is running in is special - e.g. a discord guild or dm, or simply a standard lobby\n\n### Returns:\n`LobbyType`\n\n \n\n\n\n \n\n## getMetaInfo\nSplits the block name by '|'. If no meta info, metaInfo is ''\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| blockName | `BlockName \\| null \\| undefined` |  |\n\n\n\n### Returns:\n`ItemMetaInfo`\n\n \n\n\n\n \n\n## getMobAiState\nGets the current AI state for the given mob.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| mobId | `MobId` |  |\n\n\n\n### Returns:\n` { state: MobAiState; params: MobAiStateParams<MobAiState> } `\n\n \n\n\n\n \n\n## getMobDbId\nGets the persistent database ID for the given mob.\n\nThis can be useful for reasoning about mobs that have been loaded from the database, such as owned mobs.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| mobId | `MobId` | The ID of the mob from spawnMob |\n\n\n\n### Returns:\n`MobDbId | null`\n\n \n\nThe persistent database ID for the mob, or null if the mob is not persistent\n\n \n\n## getMobIds\nGet the mob IDs of all mobs in the world.\n\n### Returns:\n`MobId[]`\n\n \n\n\n\n \n\n## getMobSetting\nGet the current value of a mob setting for a specific mob.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| mobId | `MobId` |  |\n| setting | `TMobSetting` |  |\n| returnDefaultIfNotOverridden | `boolean` | If true, return the default setting if not overridden. |\n\n\n\n### Returns:\n`MobSettings<MobType>[TMobSetting]`\n\n \n\n\n\n \n\n## getMoonstoneChestItems\nGet all the items from a moonstone chest in order. Use this instead of repetitive calls to getMoonstoneChestItemSlot\n\n\n\nMoonstone chests are a type of chest where a player accesses the same contents no matter the location of the moonstone chest\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n\n\n\n### Returns:\n`(InvenItem | null)[]`\n\n \n\n\n\n \n\n## getMoonstoneChestItemSlot\nGet the item in a player's moonstone chest slot. Null if empty\n\n\n\nMoonstone chests are a type of chest where a player accesses the same contents no matter the location of the moonstone chest\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| idx | `number` |  |\n\n\n\n### Returns:\n`InvenItem | null`\n\n \n\n\n\n \n\n## getNumMobs\nGet the number of mobs in the world.\n\n### Returns:\n`number`\n\n \n\n\n\n \n\n## getNumPlayers\nGet the number of players in the room\n\n### Returns:\n`number`\n\n \n\n\n\n \n\n## getOtherEntitySetting\nGet the value of a player's other-entity setting for a specific entity.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| relevantPlayerId | `PlayerId` |  |\n| targetedEntityId | `EntityId` |  |\n| settingName | `Setting` |  |\n\n\n\n### Returns:\n`OtherEntitySettings[Setting]`\n\n \n\n\n\n \n\n## getPlayerCosmetic\nGet a single equipped cosmetic for a player.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| cosmeticType | `CosmeticType` | Type of cosmetic |\n\n\n\n### Returns:\n`CosmeticName`\n\n \n\n\n\n \n\n## getPlayerDbId\nGiven a player, get their permanent identifier that doesn't change when leaving and re-entering\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n\n\n\n### Returns:\n`PlayerDbId`\n\n \n\n\n\n \n\n## getPlayerDbValue\nGets a database value that is saved per player.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| key | `string` |  |\n\n\n\n### Returns:\n`string | number | null`\n\n \n\n\n\n \n\n## getPlayerFacingInfo\nGet the position of a player's camera and the direction (both in Euclidean and spherical coordinates) they are attempting to use an item.\n\nThe camPos has the same limitations described in getPlayerTargetInfo\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n\n\n\n### Returns:\n` { camPos: [number, number, number]; dir: [number, number, number]; angleDir: AngleDir; moveHeading: number } `\n\n \n\n\n\n \n\n## getPlayerGamemode\nGet the gamemode of a player.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The ID of the player to get the gamemode of. |\n\n\n\n### Returns:\n`WorldGamemode`\n\n \n\nThe gamemode of the player.\n\n \n\n## getPlayerId\nGiven the name of a player, get their id\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerName | `string` |  |\n\n\n\n### Returns:\n`PlayerId | null`\n\n \n\n\n\n \n\n## getPlayerIdFromDbId\nReturns null if player not in lobby\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| dbId | `PlayerDbId` |  |\n\n\n\n### Returns:\n`PlayerId | null`\n\n \n\n\n\n \n\n## getPlayerIds\nGet all the player ids.\n\n### Returns:\n`PlayerId[]`\n\n \n\n\n\n \n\n## getPlayerPartyWhenJoined\nReturns the party that the player was in when they joined the game. The returned object contains the playerDbIds, as well\n\nas the playerIds if available, of the party leader and members.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n\n\n\n### Returns:\n` { partyCode: string; playerDbIds: PlayerDbId[] } | null `\n\n \n\n\n\n \n\n## getPlayerPhysicsState\nGet physics state for player\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n\n\n\n### Returns:\n`PlayerPhysicsState<PhysicsType>`\n\n \n\n\n\n \n\n## getPlayerTargetInfo\nGet the position of a player's target block and the block adjacent to it (e.g. where a block would be placed)\n\n\n\n\n\nNote: This position is a tick ahead of the client's block target info (noa.targetedBlock),\n\nsince the client updates the blocktarget before the entities tick (and since it uses the renderposition of the camera)\n\n\n\nThis normally doesn't matter but if you are client predicting something based on noa.targetedBlock\n\n(currently only applicable to in-engine code), you should not verify using this\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n\n\n\n### Returns:\n` { position: [number, number, number]; normal: [number, number, number]; adjacent: [number, number, number] } `\n\n \n\n\n\n \n\n## getPosition\nGet position of a player / entity.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| entityId | `EntityId` |  |\n\n\n\n### Returns:\n`[number, number, number]`\n\n \n\n\n\n \n\n## getQueuedStatus\nGet the status of a queued command.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| id | `QueuedCommandId` | The ID of the queued command to get the status of. |\n\n\n\n### Returns:\n`QueuedStatusString`\n\n \n\nNOT_IN_QUEUE, WAITING_TO_RUN, or CURRENTLY_RUNNING.\n\n \n\n## getSchematicDimensions\nGet a project schematic's stored dimensions as [x, y, z], including selection padding.\n\nUses the active project snapshot. Missing schematic paths throw an error.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| schematicPath | `string` | Project-relative path, including .bloxdschem. |\n\n\n\n### Returns:\n`[number, number, number]`\n\n \n\n\n\n \n\n## getSelectedInventorySlotI\nGet a player's currently selected inventory slot\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n\n\n\n### Returns:\n`number`\n\n \n\n\n\n \n\n## getShieldAmount\nGet the current shield of an entity.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| entityId | `EntityId` |  |\n\n\n\n### Returns:\n`number`\n\n \n\n\n\n \n\n## getStandardChestFreeSlotCount\nGet the amount of free slots in a standard chest\n\nReturns null for non-chests\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| chestPos | `number[]` |  |\n\n\n\n### Returns:\n`number | null`\n\n \n\nnumber\n\n \n\n## getStandardChestItemAmount\nThe amount of an itemName a standard chest has.\n\nReturns 0 if the standard chest has none, and a negative number if infinite.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| chestPos | `number[]` |  |\n| itemName | `ItemName` |  |\n\n\n\n### Returns:\n`number`\n\n \n\nnumber\n\n \n\n## getStandardChestItems\nGet all the items from a standard chest in order. Use this instead of repetitive calls to getStandardChestItemSlot\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| chestPos | `number[]` |  |\n\n\n\n### Returns:\n`(InvenItem | null)[]`\n\n \n\n\n\n \n\n## getStandardChestItemSlot\nGet the item at a chest slot. Null if empty otherwise format {name: itemName, amount: amountOfItem}\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| chestPos | `number[]` |  |\n| idx | `number` |  |\n\n\n\n### Returns:\n`InvenItem | null`\n\n \n\n\n\n \n\n## getUnitCoordinatesLifeformWithin\nGet the up to 12 unit co-ordinates the entity is located within\n\n(Samples the four horizontal corners at up to three vertical levels)\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| lifeformId | `EntityId` |  |\n\n\n\n### Returns:\n`number[][]`\n\n \n\nList of x, y, z positions e.g. [[-1, 0, 0], [-1, 1, 0], [-1, 2, 0]]\n\n \n\n## getVariation\nGet the current sub-variation name.\n\nReturns `\"default\"` when there is no named sub-variation.\n\n### Returns:\n`string`\n\n \n\n\n\n \n\n## getVehicleSeats\nThe seat layout for a vehicle entity - at minimum one driver seat (index 0), optionally more\n\npassenger seats after it. Resolved from the spawned vehicle's def (`VehicleMeshEntityDef.seats`,\n\nfalling back to a single driver seat at the physics type/tier's own `riderOffset` default) or a\n\nrideable mob's override (`getMobVehicleSeats`, falling back to its `rideHeight`). Throws if\n\n`vehicleEId` is not a vehicle.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| vehicleEId | `EntityId` |  |\n\n\n\n### Returns:\n`VehicleSeat[]`\n\n \n\n\n\n \n\n## getVehicleSetting\nThe current value of a physics setting for a specific vehicle entity: the value set via\n\n`setVehicleSetting` if overridden, otherwise (when `returnDefaultIfNotOverridden`) the type/tier\n\ndefault from the vehicle's physics state. Mirrors `getMobSetting`.\n\n\n\nThe one default not read from the type/tier is a mob's `riderOffset`, which comes from its ride height.\n\n\n\nA per-block setting (e.g. `\"IceCanAutoStep\"`) is `undefined` when that block is unlisted, which means\n\nthe block does not change the setting rather than that the setting is off.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| vehicleEId | `EntityId` |  |\n| setting | `TSetting` |  |\n| returnDefaultIfNotOverridden | `boolean` |  |\n\n\n\n### Returns:\n`SettableVehicleSettingValue<TSetting>`\n\n \n\n\n\n \n\n## getVelocity\nGet the velocity of an entity\n\nWill return [0, 0, 0] if the entity doesn't have a physics body\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| eId | `EntityId` |  |\n\n\n\n### Returns:\n`[number, number, number]`\n\n \n\n\n\n \n\n## giveCurrencyAmount\nGive a player an amount of currency. Can be negative to remove money.\n\nThe currency must exist for the player first, or this throws: make it with setCurrency (with an icon), e.g. in onPlayerJoin.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| currencyId | `string` |  |\n| amount | `number` |  |\n\n\n\n\n\n \n\n## giveItem\nInventory stuff\n\nGive a player an item and a certain amount of that item.\n\nReturns the amount of item added to the users inventory.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| itemName | `ItemName` |  |\n| itemAmount | `number \\| null` |  |\n| attributes | `ItemAttributes` | An optional object for certain types of item. For guns this can contain the shotsLeft field which is the amount of ammo the gun currently has. |\n\n\n\n### Returns:\n`number`\n\n \n\n\n\n \n\n## giveStandardChestItem\nGive a standard chest an item and a certain amount of that item.\n\nReturns the amount of item added to the chest.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| chestPos | `number[]` |  |\n| itemName | `ItemName` |  |\n| itemAmount | `number` |  |\n| playerId | `PlayerId` | The player who is interacting with the chest. |\n| attributes | `ItemAttributes` | An optional object for certain types of item. For guns this can contain the shotsLeft field which is the amount of ammo the gun currently has. |\n\n\n\n### Returns:\n`number`\n\n \n\n\n\n \n\n## hasActiveQTE\nCheck whether the player has any qteRequests\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n\n\n\n### Returns:\n`boolean`\n\n \n\n\n\n \n\n## hasEffect\nCheck if a lifeform has an effect.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| lifeformId | `LifeformId` |  |\n| name | `string` |  |\n| atOrAboveLevel | `number` | Checks whether the effect is at or above the given level |\n\n\n\n### Returns:\n`boolean`\n\n \n\n\n\n \n\n## hasItem\nWhether a player has an item\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| itemName | `ItemName` |  |\n\n\n\n### Returns:\n`boolean`\n\n \n\nbool\n\n \n\n## initiateMiddleScreenBar\nThis will initiate the MiddleScreenBar, starting at empty and filling up to full over the given duration.\n\nGood to represent cooldowns (eg gun reload) or charged items (eg crossbow)\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| duration | `number` | ms over which the MiddleScreenBar fills up |\n| chargeExpiresAutomatically | `boolean` | Defaults to true. If true, the bar will disappear upon reaching full. If false, the bar will remain at full until hidden with removeMiddleScreenBar |\n| horizontalBarRemOffset | `number` | Offset the bar left or right (in css unit - rem) |\n\n\n\n\n\n \n\n## inventoryIsFull\nWhether the player has space in their inventory to get new blocks\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n\n\n\n### Returns:\n`boolean`\n\n \n\n\n\n \n\n## isAlive\nWhether a lifeform is alive or dead (or on the respawn screen, in a player's case).\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| lifeformId | `LifeformId` |  |\n\n\n\n### Returns:\n`boolean`\n\n \n\n\n\n \n\n## isBlockInLoadedChunk\nCheck if the block at a specific position is in a loaded chunk.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| x | `number` |  |\n| y | `number` |  |\n| z | `number` |  |\n\n\n\n### Returns:\n`boolean`\n\n \n\n\n\n \n\n## isInsideRect\nCheck if a position is within a cubic rectangle\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| coordsToCheck | `number[]` |  |\n| pos1 | `number[]` | position of one corner |\n| pos2 | `number[]` | position of opposite corner |\n| addOneToMax | `boolean` |  |\n\n\n\n### Returns:\n`boolean`\n\n \n\n\n\n \n\n## isMobile\nWhether the player is on a mobile device or a computer.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n\n\n\n### Returns:\n`boolean`\n\n \n\n\n\n \n\n## isNearInterrupt\nReturns true if your code is about to be interrupted for exceeding its time budget.\n\nUse this to break up long-running code into smaller chunks.\n\n\n\n\n\n### Example:\n\n```js\n// Resume from where we stopped last time (or 0 on the first run)\nlet savedLoopCounter = 0\n\n// ...\n\nfor (let i = savedLoopCounter; i < 1000; i++) {\n\tif (api.isNearInterrupt()) {\n\t\t// Out of time - remember our progress and stop before getting killed\n\t\tsavedLoopCounter = i\n\t\tbreak\n\t}\n\n\tsomeExpensiveFunction()\n}\n```\n\n### Returns:\n`boolean`\n\n \n\n\n\n \n\n## isPlayerCrouching\nCheck whether a player is crouching\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n\n\n\n### Returns:\n`boolean`\n\n \n\n\n\n \n\n## isPublicLobby\nInteger lobby names are public\n\n### Returns:\n`boolean`\n\n \n\nboolean\n\n \n\n## isUsingCustomGameTexturePack\nWhether the player joined with this custom game's texture pack applied. False if they skipped applying it\n\n(kicking them shows the prompt again when they rejoin).\n\nOnly published custom games prompt for their pack, so anywhere else this says so and returns true.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n\n\n\n### Returns:\n`boolean`\n\n \n\n\n\n \n\n## kickPlayer\nKick a player from the lobby, showing them the reason.\n\n\n\nNOTE: In a world's own lobby, World Code can't kick the world's owner or co-owners: they stay and see why.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| reason | `string` | Shown to the kicked player |\n\n\n\n\n\n \n\n## killLifeform\nKill a lifeform, e.g. api.killLifeform(playerId).\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| lifeformId | `LifeformId` |  |\n| whoKilled | ` LifeformId \\| { lifeformId: LifeformId; withItem: string } ` | Optional: who killed them, as a lifeform id or { lifeformId, withItem }. Leave it out (not null) when nothing killed them |\n\n\n\n\n\n \n\n## matchmakePlayer\nTell a player to disconnect from the current lobby and join a new one.\n\n\n\nTo connect to a specific variation, format is `gamename_variation`.\n\nFor Custom Games, this will be `classic_playerSchematic|XXXXXXXXXX` or\n\n`classic_playerSchematic|XXXXXXXXXX|<varname>` for a named sub-variation.\n\n\n\nNOTE: Players won't disconnect immediately (they may play an ad before being redirected).\n\nIn a world's own lobby, the world's owner and co-owners are asked first and can choose to stay.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| game | `string` | Defaults to the current game. |\n| lobbyName | `string` | Defaults to \"Quick Play\" |\n\n\n\n\n\n \n\n## matchmakeToVariation\nMatchmake a player into a sub-variation of the current custom game.\n\nPass `\"default\"` for the default variation.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The player to matchmake |\n| varname | `string` | Sub-variation name (`[A-Za-z0-9_-]`, 1-32 chars), or `\"default\"` |\n\n\n\n\n\n \n\n## now\nObtain Date.now() value saved at start of current game tick\n\n### Returns:\n`number`\n\n \n\n\n\n \n\n## openChestForPlayer\nOpen a chest for a player.\n\nIf there is no chest, or the player cannot open it, do nothing.\n\nWARNING: This may call \"onPlayerAttemptOpenChest\" to determine if the player has permission to open it. Using this function inside that callback risks infinite recursion.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| x | `number` |  |\n| y | `number` |  |\n| z | `number` |  |\n\n\n\n\n\n \n\n## openShop\nOpen the shop UI for a player\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| toggle | `boolean` | Whether to close the shop if it's already open. Leave this off when opening from an interaction: holding the interact button re-fires the alt action every ~50-150ms, so a toggle would flicker the shop open and closed until release. |\n| forceCategoryKey | `ShopCategoryKey \\| null` | If set, will change the shop to this category |\n| onlyIfNonEmpty | `boolean` | If true, will only open the shop if the category (or shop, if no category is provided) is non-empty |\n\n\n\n\n\n \n\n## passifyHostility\nClears any aggro the mob has towards the given lifeform.\n\nIf the mob is currently chasing or running away from it, this also transitions the mob back to idle.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| mobId | `MobId` |  |\n| targetLifeformId | `LifeformId` |  |\n\n\n\n\n\n \n\n## playClientPredictedSound\nSee documentation for api.playSound\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| soundName | `string` |  |\n| volume | `number` |  |\n| rate | `number` |  |\n| posSettings | ` { playerIdOrPos: EntityId \\| number[] maxHearDist?: number refDistance?: number } ` |  |\n| predictedBy | `EntityId` |  |\n\n\n\n\n\n \n\n## playerIsInGame\nWhether a player is currently in the game\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n\n\n\n### Returns:\n`boolean`\n\n \n\n\n\n \n\n## playerIsLoggedIn\nWhether a player is signed in to a Bloxd account: false for guests, who are still in the game.\n\nTo check that a player is still in the game, use playerIsInGame.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n\n\n\n### Returns:\n`boolean`\n\n \n\n\n\n \n\n## playParticleEffect\nPlay particle effect on all clients, or only on some clients if clientPredictedBy is specified\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| opts | `TempParticleSystemOpts \\| ParticlePresetOpts` |  |\n| clientPredictedBy | `EntityId \\| null` | Play only on clients where the entity clientPredictedBy is visible and not the viewing player |\n\n\n\n\n\n \n\n## playSound\n\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | hears the sound |\n| soundName | `string` | Can also be a prefix. If so, a random sound with that prefix will be played |\n| volume | `number` | 0-1. If it's too quiet and volume is 1, normalise your sound in audacity |\n| rate | `number` | The speed of playback. Also affects pitch. 0.5-4. Lower playback = lower pitch Good for varying the sound. E.g. item pickup sound has a random rate between 1 and 1.5. |\n| posSettings | ` { playerIdOrPos: EntityId \\| number[] maxHearDist?: number refDistance?: number } ` | : EntityId \\| number[], maxHearDist: number, refDistance: number} playerIdOrPos: The entity the sound originates from, or the position of the sound maxHearDist: sound is not played if player is further than this. Default 15 refDistance: higher means the sound decreases less in volume with distance. Default 3. Hitting is 4. Guns are 10 |\n\n\n\n\n\n \n\n## preventFallDamageNextGrounding\nPrevents the player from taking fall damage next time they land on the ground\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n\n\n\n\n\n \n\n## progressBarUpdate\nUpdate the progress bar in the bottom right corner.\n\nCan be queued.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| toFraction | `number` | The fraction of the progress bar you want to be filled up. |\n| toDuration | `number` | The time it takes for the bar to reach the given toFraction in ms. If this is too low and you queue multiple updates, this toFraction could be skipped. Treat 200ms as a minimum. |\n\n\n\n\n\n \n\n## queueCrosshairText\nSchedule text to be displayed in the crosshair.\n\nThis text will be removed after the duration.\n\nStacking queued texts will schedule them to be displayed one after the other.\n\nNOTE: Overriding the crosshairText client option may cause queued texts to be displayed incorrectly.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The ID of the player to display the text to. |\n| text | `string \\| CustomTextStyling` | The text to display. |\n| duration | `number` | The duration of the text in milliseconds. |\n\n\n\n### Returns:\n`QueuedCommandId`\n\n \n\nThe ID of the queued command.\n\n \n\n## queueMiddleTextLower\nSchedule small text to be displayed in the middle of the screen (middleTextLower).\n\nThis text will be removed after the duration.\n\nStacking queued texts will schedule them to be displayed one after the other.\n\nNOTE: Overriding the middleTextLower client option may cause queued texts to be displayed incorrectly.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The ID of the player to display the text to. |\n| text | `string \\| CustomTextStyling` | The text to display. |\n| duration | `number` | The duration of the text in milliseconds. |\n\n\n\n### Returns:\n`QueuedCommandId`\n\n \n\nThe ID of the queued command.\n\n \n\n## queueMiddleTextUpper\nSchedule large text to be displayed in the middle of the screen (middleTextUpper).\n\nThis text will be removed after the duration.\n\nStacking queued texts will schedule them to be displayed one after the other.\n\nNOTE: Overriding the middleTextUpper client option may cause queued texts to be displayed incorrectly.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The ID of the player to display the text to. |\n| text | `string \\| CustomTextStyling` | The text to display. |\n| duration | `number` | The duration of the text in milliseconds. |\n\n\n\n### Returns:\n`QueuedCommandId`\n\n \n\nThe ID of the queued command.\n\n \n\n## raycastForBlock\nRaycast for a block in the world.\n\nGiven a position and a direction, find the first block that the \"ray\" hits.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| fromPos | `number[]` |  |\n| dirVec | `number[]` |  |\n\n\n\n### Returns:\n`BlockRaycastResult`\n\n \n\n\n\n \n\n## registerAnalyticsEvent\nRegister an event for analytics. Custom games only: anywhere else, World Code gets an error.\n\nSpecial value is eventType \"match\" and eventValue \"match_started\" to mark the start of a match when calculating average quantities\n\nEach player can send 20 events a minute. Each day a game can have 20 game categories, 20 event types in each and\n\n50 event values for each type; once it goes past one, events at that level are dropped until midnight UTC\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `string` | The player associated with the event |\n| eventType | `string` | The type of event e.g. \"shop\" or \"death\", at most 64 characters |\n| eventValue | `string \\| null` | The detail of the event e.g. the item bought or cause of death, at most 128 characters |\n| gameCategoryId | `string \\| null` | The game category id e.g. the map you're playing on or the variant of the game to filter by or compare, at most 128 characters |\n| gameStartTimeMs | `number` | The time the game or match started in milliseconds since 1970, within the last 30 days - use to get event times relative to the start of the game. Each event also records the player's lifetime playtime |\n| position | `[number, number, number] \\| null` | Where the event happened, e.g. where the player died or the block they broke, shown on Studio's heatmap. In the same frame of reference as the game's registerAnalyticsPlayerPosition positions for this category. Without one, no position is recorded |\n| numericValue | `number \\| null` | A number the event measures, e.g. the coins earned, the round's score or the seconds it took. |\n\n\n\n\n\n \n\n## registerAnalyticsPlayerPosition\nRecord where a player is for the analytics heatmap. Call it at a regular interval (e.g. once a second).\n\nCustom games only: anywhere else, World Code gets an error.\n\nEach player can send 120 positions a minute. Each day a game can send 100,000 different blocks (event positions\n\nincluded); once it goes past that, positions are dropped until midnight UTC\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `string` | The player whose position to record |\n| gameCategoryId | `string \\| null` | The game category id e.g. the map you're playing on or the variant of the game to filter by, at most 128 characters |\n| gameStartTimeMs | `number` | The time the game or match started in milliseconds since 1970, within the last 30 days - used to get a playback of positions |\n| position | `[number, number, number] \\| null` | The position of the player to record. Defaults to the player's global position. |\n\n\n\n\n\n \n\n## removeAppliedSkin\nRemove gamemode-applied skin from a player\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n\n\n\n\n\n \n\n## removeEffect\nRemove an effect from a lifeform.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| lifeformId | `LifeformId` |  |\n| name | `string` |  |\n\n\n\n\n\n \n\n## removeFollowingEntityFromPlayer\nRemove following entity from an entity\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `EntityId` |  |\n| entityEId | `EntityId` |  |\n\n\n\n\n\n \n\n## removeFromQueue\nRemove a queued command from the queue.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| id | `QueuedCommandId` | The ID of the queued command to remove. |\n\n\n\n\n\n \n\n## removeItemCraftingRecipes\nRemoves crafting recipes\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| itemName | `string \\| null` | Removes all crafting recipes for the given player if null, otherwise removes the crafting recipes for the given item. |\n\n\n\n\n\n \n\n## removeItemName\nRemove an amount of item from a player's inventory\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| itemName | `ItemName` |  |\n| amount | `number` |  |\n\n\n\n\n\n \n\n## removeItemNameFromStandardChest\nRemove an amount of item from a standardChest inventory\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| chestPos | `number[]` |  |\n| itemName | `ItemName` |  |\n| amount | `number` |  |\n| playerId | `PlayerId` | The player who is interacting with the chest. |\n\n\n\n\n\n \n\n## removeMiddleScreenBar\nIf there is any current middle screen bar running, this will hide it\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n\n\n\n\n\n \n\n## resetCanChangeBlock\nRemove any previous can/cant change block settings for a player at a specific co-ordinate\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| x | `number` |  |\n| y | `number` |  |\n| z | `number` |  |\n\n\n\n\n\n \n\n## resetCanChangeBlockRect\nRemove any previous can/cant change block rect settings for a player\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| pos1 | `number[]` |  |\n| pos2 | `number[]` |  |\n\n\n\n\n\n \n\n## resetCanChangeBlockType\nRemove any previous can/cant change block type settings for a player\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| blockName | `BlockName` |  |\n\n\n\n\n\n \n\n## resetCanPickUpItem\nReset a player's ability to pick up an item. itemId returned by createItemDrop\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| itemId | `EntityId` |  |\n\n\n\n\n\n \n\n## resetItemCraftingRecipes\nReset the crafting recipes for a given back to its original bloxd state\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| itemName | `string \\| null` | Resets all crafting recipes for the given player if null, otherwise resets the crafting recipes for the given item. |\n\n\n\n\n\n \n\n## resetShopItemForPlayer\nDelete a specific player's overrides for a shop item.\n\nLike other methods, it doesn't matter whether the overrides were created\n\nusing createShopItemForPlayer or by using updateShopItemForPlayer instead.\n\nThis method does nothing if the overrides don't exist or are defined internally by the engine.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The player to reset the item for |\n| categoryKey | `ShopCategoryKey` | The key of the category containing the item |\n| itemKey | `ShopItemKey` | The unique key for the item |\n\n\n\n\n\n \n\n## scalePlayerMeshNodes\nSet an entity's meshScaling setting by 3d vector. Model node scaling is applied to lifeforms;\n\nfor mesh entities, this setting affects nametag placement and interaction reach, not the model's nodes.\n\nState from prior calls to this api is lost so if you want to have multiple nodes scaled, pass in all the scales at once.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `EntityId` |  |\n| nodeScales | `EntityMeshScalingMap` |  |\n\n\n\n\n\n \n\n## sendFlyingMiddleMessage\nSend a flying middle message to a specific player\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | Id of the player |\n| message | `string \\| CustomTextStyling` | The text contained within the message. Can be either a string or use `Custom Text Styling`. |\n| distanceFromAction | `number` | The distance from the action that has caused this message to be displayed, this value will be used to determine how the message flies across the screen. |\n| lifetimeMs | `number` | How long the message will be visible in milliseconds. Defaults to 1000ms. |\n\n\n\n\n\n \n\n## sendHitmarker\nShow a hitmarker on the player's screen (the X-shaped crosshair flash indicating a successful hit).\n\nUseful for custom weapons or things that need visual hit feedback.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The player to show the hitmarker to |\n| isCrit | `boolean` | If true, shows an enhanced critical-hit hitmarker with a longer, more dramatic animation |\n| directionVector | `number[] \\| null` | Optional [x, y, z] direction vector. When provided, the hitmarker appears at the projected screen position of that direction rather than at the centre of the screen. Same flow as mobile melee attacks where the tap point differs from screen centre. |\n\n\n\n\n\n \n\n## sendMessage\nSend a message to a specific player\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | Id of the player |\n| message | `string \\| CustomTextStyling` | The text contained within the message. Can use `Custom Text Styling`. |\n| style | ` { fontWeight?: number \\| string; color?: string } ` | An optional style argument. Can contain values for fontWeight and color of the message. style is ignored if message uses custom text styling (i.e. is not a string). |\n\n\n\n\n\n \n\n## sendOverShopInfo\nShow a message over the shop in the same place that a shop item's onBoughtMessage is shown.\n\nDisplays for a couple seconds before disappearing\n\nUse case is to show a dynamic message when player buys an item\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| info | `string \\| CustomTextStyling` |  |\n\n\n\n\n\n \n\n## sendTopRightHelper\n\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| icon | `string` | Can be any icon from font-awesome. |\n| text | `string` | The text to send. |\n| opts | ` { duration?: number width?: number height?: number color?: string iconSizeMult?: number textAndIconColor?: string fontSize?: string } ` | Can include keys duration, width, height, color, iconSizeMult.  Default opts: { duration: 8, // seconds width: 400px, height: 100px, color: 'rgb(102, 102, 102)', // must be rgb in this format (hex not supported), iconSizeMult: 5, textAndIconColor: \"white\", // can be any colour supported by css (e.g. hex, rgb), fontSize: '17px', } |\n\n\n\n\n\n \n\n## setAuraLevel\nSet the aura level for a player - shortcut for setTotalAura(level * auraPerLevel)\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| level | `number` |  |\n\n\n\n\n\n \n\n## setBlock\nSet a block. Valid names are any block name, including 'Air'\n\n\n\nThis function is optimised for setting broad swathes of blocks. For example, if you have a 50x50x50 area you need to turn to air, it will run performantly if you call this in double nested loops.\n\n\n\nIF you're only changing a few blocks, you want this to be super snappy for players, AND you're calling this outside of your _tick function, you can use api.setOptimisations(false).\n\n\n\nIf you want the optimisations for large quantities of blocks later on, then call api.setOptimisations(true) when you're done.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| x | `number \\| number[]` | Can be an array |\n| y | `number \\| BlockName` | Should be blockname if first param is array |\n| z | `number` |  |\n| blockName | `BlockName` |  |\n\n\n\n\n\n \n\n## setBlockData\nStore data about a block in a performant manner. Data is cleared when block changes.\n\nE.g. chest: `persisted.chestStr` is a JSON array of nulls and items, each with a string `name`; anything else in it is stored as a load reads it\n\nWorks well with blocks marked tickable (e.g. wheat)\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| x | `number` |  |\n| y | `number` |  |\n| z | `number` |  |\n| data | `object` |  |\n\n\n\n\n\n \n\n## setBlockRect\nHelper function that sets all blocks in a rectangle to a specific block.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| pos1 | `number[]` | array [x, y, z] |\n| pos2 | `number[]` | array [x, y, z] |\n| blockName | `BlockName` |  |\n\n\n\n\n\n \n\n## setBlockWalls\nCreate walls by providing two opposite corners of the cuboid\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| pos1 | `number[]` | array [x, y, z] |\n| pos2 | `number[]` | array [x, y, z] |\n| blockName | `BlockName` |  |\n| hasFloor | `boolean` |  |\n| hasCeiling | `boolean` |  |\n\n\n\n\n\n \n\n## setCallbackValueFallback\nSet a default value to be returned by your callback code if it throws an error.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| cbName | `UserCallbacks` | The name of the callback to set the default value for. |\n| value | `any` | The default value to return. |\n\n\n\n\n\n \n\n## setCameraDirection\nSet the direction the player is looking.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| direction | `number[]` | a vector of the direction to look, format [x, y, z] |\n\n\n\n\n\n \n\n## setCameraZoom\nSet camera zoom for a player\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| zoom | `number` |  |\n\n\n\n\n\n \n\n## setCanChangeBlock\nLet a player change a block at a specific co-ordinate. Useful when client option canChange is false.\n\nOverrides blockRect and blockType settings, so also useful when you have disallowed changing of a block type with setCantChangeBlockType.\n\nUsing this on 1000s of blocks will cause lag - if that is needed, find a way to use setCanChangeBlockType.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| x | `number` |  |\n| y | `number` |  |\n| z | `number` |  |\n\n\n\n\n\n \n\n## setCanChangeBlockRect\nMake it so a player can Change blocks within two points. Coordinates are inclusive. E.g. if [0, 0, 0] is pos1\n\nand [1, 1, 1] is pos2 then the 8 blocks contained within low and high will be able to be broken.\n\nOverrides setCantChangeBlockType\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| pos1 | `number[]` | Arg as [x, y, z] |\n| pos2 | `number[]` | Arg as [x, y, z] |\n\n\n\n\n\n \n\n## setCanChangeBlockType\nLets a player Change a block type. Valid names are any block name, including 'Air'\n\nLess priority than cant change block pos/can change block rect\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| blockName | `BlockName` |  |\n\n\n\n\n\n \n\n## setCantChangeBlock\nPrevents a player from changing a block at a specific co-ordinate. Useful when client option canChange is true.\n\nOverrides blockRect and blockType settings, so also useful when you have allowed changing of a block type with setCantChangeBlockType.\n\nUsing this on 1000s of blocks will cause lag - if that is needed, find a way to use setCantChangeBlockType.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| x | `number` |  |\n| y | `number` |  |\n| z | `number` |  |\n\n\n\n\n\n \n\n## setCantChangeBlockRect\nMake it so a player cant Change blocks within two points. Coordinates are inclusive. E.g. if [0, 0, 0] is pos1\n\nand [1, 1, 1] is pos2 then the 8 blocks contained within pos1 and pos2 won't be able to be broken.\n\nOverrides setCanChangeBlockType\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| pos1 | `number[]` | Arg as [x, y, z] |\n| pos2 | `number[]` | Arg as [x, y, z] |\n\n\n\n\n\n \n\n## setCantChangeBlockType\nStops a player from changing a block type. Valid names are any block name, including 'Air'\n\nLess priority than can change block pos/can change block rect\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| blockName | `BlockName` |  |\n\n\n\n\n\n \n\n## setCantPickUpItem\nPrevent a player from picking up an item. itemId returned by createItemDrop\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| itemId | `EntityId` |  |\n\n\n\n\n\n \n\n## setChunkAsSchematic\nReplace a world chunk with a chunk from a project schematic, including air and block data.\n\nBoth positions are block coordinates selecting their containing 32-block chunk.\n\nAdd schematics in the Code Editor. Missing paths or source chunks throw an error.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| schematicPath | `string` | Project-relative path, including .bloxdschem. |\n| srcCoords | `[number, number, number]` | Block coordinates in the schematic's chunk grid (including selection padding). |\n| destCoords | `[number, number, number]` | Block coordinates in the world. Existing blocks are replaced without break drops. |\n\n\n\n\n\n \n\n## setClientOption\nModify a client option at runtime and send to the client if it changed\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| option | `PassedOption` | The name of the option |\n| value | `ClientOptions[PassedOption]` | The new value of the option |\n\n\n\n\n\n \n\n## setClientOptions\nModify client options at runtime\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| optionsObj | `Partial<ClientOptions>` | An object which contains key value pairs of new settings. E.g {canChange: true, speedMultiplier: false} |\n\n\n\n\n\n \n\n## setClientOptionToDefault\nSets a client option to its default value. This will be the value stored in your game's defaultClientOptions, otherwise Bloxd's default.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| option | `ClientOption` |  |\n\n\n\n\n\n \n\n## setCurrency\nDynamically define a currency for a player and show it on the HUD.\n\nAmounts will persist between sessions if `persistent` is set to true.\n\nPersistent currencies count towards db length limits.\n\n\n\nExample usage:\n\n```js\napi.setCurrency(myId, \"myCurrency\", { amount: 100, icon: \"coins\", iconColour: \"blue\", persistent: true })\n```\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| currencyId | `string` |  |\n| info | `UgcCurrencyInfo` | { amount, icon } are required (icon is an icon name such as \"coins\"); iconColour, persistent, hidden and subtext are optional |\n\n\n\n\n\n \n\n## setCurrencyAmount\nSet the amount of a currency a player has. For persistent currencies, amount/subtext count towards db length limits.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| currencyId | `string` |  |\n| amount | `number` |  |\n| subtext | `string \\| CustomTextStyling` |  |\n\n\n\n\n\n \n\n## setDefaultMobSetting\nSet the default value for a mob setting.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| mobType | `TMobType` |  |\n| setting | `TMobSetting` |  |\n| value | `MobSettings<TMobType>[TMobSetting]` |  |\n\n\n\n\n\n \n\n## setDirectionArrow\nShow a directional arrow indicator on the player's screen pointing toward a world position.\n\nWhen the position is off-screen the indicator is a rotating chevron at the screen edge.\n\nWhen the position is on-screen it becomes a small marker dot.\n\n\n\nThe arrow persists until explicitly cleared via `clearDirectionArrow`.\n\nCalling again with the same `id` updates the existing arrow in-place.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The player to show the arrow to |\n| id | `string` | Unique identifier for this arrow (allows multiple concurrent arrows) |\n| position | `number[]` | [x, y, z] world position the arrow should point toward |\n| text | `string \\| CustomTextStyling \\| null` | Optional label rendered below the indicator. Supports CustomTextStyling for rich text with icons/colours. |\n| showDistance | `boolean` | If true, displays the distance (in blocks) from the player to the arrow position. |\n| style | `TextStyle \\| null` | Optional style object (same format as CustomTextStyling's StyledText `style`). Controls chevron/marker colour, label typography, and opacity. |\n\n\n\n\n\n \n\n## setEntityHeading\n\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| entityId | `EntityId` |  |\n| newHeading | `number` |  |\n\n\n\n\n\n \n\n## setEntityRotation\nSet the rotation for a server-auth entity.\n\nA mob or player-shaped entity turns its head first; set the lockHeadToBody entity setting to turn its whole body.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| entityId | `EntityId` |  |\n| xRotation | `number` |  |\n| yRotation | `number` |  |\n| zRotation | `number` |  |\n\n\n\n\n\n \n\n## setEveryoneSettingForPlayer\nSet a player's other-entity setting for every player, mob and Person mesh in the game.\n\nincludeNewJoiners=true means that the player will have the setting applied to new joiners.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| settingName | `Setting` |  |\n| settingValue | `OtherEntitySettings[Setting]` |  |\n| includeNewJoiners | `boolean` |  |\n\n\n\n\n\n \n\n## setHealth\nSet the current health of an entity.\n\nIf you want to set their health to more than their current max health, the optional increaseMaxHealthIfNeeded must be true.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| entityId | `EntityId` |  |\n| newHealth | `number \\| null` | Can be null to make the player not have health |\n| whoDidDamage | ` LifeformId \\| { lifeformId: LifeformId; withItem: string } ` | Optional |\n| increaseMaxHealthIfNeeded | `boolean` | Optional |\n\n\n\n### Returns:\n`boolean`\n\n \n\n\n\n \n\n## setItemAmount\nSet the amount of an item in an item entity\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| itemId | `EntityId` |  |\n| newAmount | `number` |  |\n\n\n\n\n\n \n\n## setItemSlot\nPut an item in a specific index. Default hotbar is indexes 0-9\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| itemSlotIndex | `number` | 0-indexed |\n| itemName | `ItemName` | Can be 'Air', in which case itemAmount will be ignored and the slot will be cleared. |\n| itemAmount | `number \\| null` | -1 for infinity. Should not be set, or null, for items that are not stackable. |\n| attributes | `ItemAttributes` | An optional object for certain types of item. For guns this can contain the shotsLeft field which is the amount of ammo the gun currently has. `customAttributes.bar = { fraction, colour? }` (0 to 1, hex colour) draws a charge bar on the item's slot. A stack shares one bar, so make barred items unstackable. |\n| tellClient | `boolean` | whether to tell client about it - results in desync between client and server if client doesnt locally perform the same action |\n\n\n\n\n\n \n\n## setItemStat\nSet a stat attribute for a block or item\n\n\n\nNOTE: Only a subset of stats are customisable this way.\n\nafterEatenItem requires an unstackable food.\n\nminChargeStateToUse must be within the item's chargeStages and set on the base item, applying to all its charging variants.\n\nfishingRodInfo adjusts existing rods; drops names the replacement mining drop.\n\nExample: setItemStat(playerId, \"Iron Dagger\", \"comboInfo\", { comboWindowMs: 1000, comboMultipliers: [1, 1.5, 2] })\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| itemName | `ItemName` |  |\n| stat | `K` |  |\n| value | `AnyMetadataItem[K]` |  |\n\n\n\n\n\n \n\n## setLifeformScale\nSet the visual + physical scale of a lifeform. A scale of 1 is the default size.\n\nBodies stop growing at 25 blocks wide and 90 tall (a player's at scale 50); past that only the model grows.\n\ngetLifeformScale returns the scale rounded to 32-bit precision (0.7 reads back as 0.699999988079071).\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| lifeformId | `LifeformId` |  |\n| scale | `number` | Must be a positive number, from about 1.4e-45 to 3.4e38. |\n\n\n\n\n\n \n\n## setLobbyDbValue\nSets a database value that is saved per lobby. This persists between sessions.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| key | `string` |  |\n| value | `string \\| number` |  |\n\n\n\n\n\n \n\n## setMaxPlayers\nUpdate the max players and soft max players matchmaking will use\n\n\n\nsoftMaxPlayers is the number of players that matchmaking will route to using \"Quick Play\".\n\nOnce the softMaxPlayers limit is reached, this lobby can only be joined by requesting the lobby name or joining a friend.\n\n\n\nmaxPlayers is the absolute maximum: a lobby will not have more players than this.\n\nTip: softMaxPlayers should be around 90% of maxPlayers\n\n\n\nWARNING: This change is not immediate, as it takes a while for matchmaking to find out.\n\nAlso, this will not kick players out of the lobby if set to a lower value than the current player count.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| softMaxPlayers | `number` |  |\n| maxPlayers | `number` |  |\n\n\n\n\n\n \n\n## setMobAiState\nSets the current AI state for the given mob.\n\nSome AI states will require context such as the ID of the lifeform being chased.\n\nThe mob's AI normally moves on by itself after a few seconds, or when a player comes near.\n\nPass `{ hold: true }` to keep it in this state until you set another one.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| mobId | `MobId` |  |\n| state | `TState` |  |\n| params | `MobAiStateParams<TState>` |  |\n| opts | `MobAiStateOptions` | hold: never time out, ignore nearby players and don't fight back when hit. The mob still leaves the state if its target leaves the game or turns invisible, or if it is tamed. |\n\n\n\n\n\n \n\n## setMobSetting\nSet the current value of a mob setting for a specific mob.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| mobId | `MobId` |  |\n| setting | `TMobSetting` |  |\n| value | `MobSettings<MobType>[TMobSetting]` |  |\n\n\n\n\n\n \n\n## setMoonstoneChestItemSlot\nMoonstone chests are a type of chest where a player accesses the same contents no matter the location of the moonstone chest\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| idx | `number` | 0-indexed |\n| itemName | `ItemName` | Can be 'Air', in which case itemAmount will be ignored and the slot will be cleared. |\n| itemAmount | `number \\| null` | -1 for infinity. Should not be set, or null, for items that are not stackable. |\n| metadata | `ItemAttributes` | An optional object for certain types of item. For guns this can contain the shotsLeft field which is the amount of ammo the gun currently has. |\n\n\n\n\n\n \n\n## setOtherEntitySetting\nSet a player's other-entity setting for a specific entity.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| relevantPlayerId | `PlayerId` |  |\n| targetedEntityId | `EntityId` |  |\n| settingName | `Setting` |  |\n| settingValue | `OtherEntitySettings[Setting]` |  |\n\n\n\n\n\n \n\n## setOtherEntitySettings\nSet many of a player's other-entity settings for a specific entity.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| relevantPlayerId | `PlayerId` |  |\n| targetedEntityId | `EntityId` |  |\n| settingsObject | `Partial<OtherEntitySettings>` |  |\n\n\n\n\n\n \n\n## setOtherEntitySettingToDefault\nReset a player's other-entity setting for a specific entity to the game's default value.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| relevantPlayerId | `PlayerId` |  |\n| targetedEntityId | `EntityId` |  |\n| settingName | `Setting` |  |\n\n\n\n\n\n \n\n## setPlayerDbValue\nSets a database value that is saved per player. For custom games this persists between sessions and\n\nbetween lobbies, and is shared across all of the game's variations (e.g. a hub and its sub-modes).\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| key | `string` |  |\n| value | `string \\| number` |  |\n\n\n\n\n\n \n\n## setPlayerGamemode\nSet the gamemode of a player. This is persistent across lobbies for custom games.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The ID of the player to set the gamemode of. |\n| gamemode | `WorldGamemode` | The gamemode to set the player to. |\n\n\n\n\n\n \n\n## setPlayerOpacity\nSet an entity's opacity\n\nA simple helper that calls setTargetedPlayerSettingForEveryone\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `EntityId` |  |\n| opacity | `number` |  |\n\n\n\n\n\n \n\n## setPlayerOpacityForOnePlayer\nSet the opacity of an entity for one player\n\nA simple helper that calls setOtherEntitySetting\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerIdWhoViewsOpacityPlayer | `PlayerId` | The player who sees that with opacity |\n| playerIdOfOpacityPlayer | `EntityId` | The entity whose opacity is changed |\n| opacity | `number` |  |\n\n\n\n\n\n \n\n## setPlayerPhysicsState\nSet physics state of player (vehicle type and tier).\n\n\n\nFor types that have tiers (e.g. BOAT, GLIDER, CAR), a `tier` of `null` defaults to the first\n\ntier (0). Types without tiers (e.g. DEFAULT) must be given a `null` tier.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| physicsState | `PlayerPhysicsState<PhysicsType>` |  |\n| positionOffset | `[number, number, number]` | Optional offset to adjust the player's collision box, which is at most 25 blocks wide and 90 tall |\n\n\n\n\n\n \n\n## setPlayerPose\nSet the pose of the player\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| pose | `PlayerPose` |  |\n| poseOffset | `[number, number, number]` |  |\n\n\n\n\n\n \n\n## setPlayerVehicle\nSeat a player in a vehicle. Seat 0 drives; other seats follow the vehicle without movement control.\n\nThe player leaves their current vehicle and replaces anyone occupying the requested seat.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| vehicleEId | `EntityId` | A spawned vehicle or a rideable mob. |\n| seatIndex | `number` | Seat index (default 0). |\n\n\n\n\n\n \n\n## setPosition\nSet position of a player / entity.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| entityId | `EntityId` |  |\n| x | `number \\| number[]` | Can also be an array, in which case y and z shouldn't be passed |\n| y | `number` |  |\n| z | `number` |  |\n\n\n\n\n\n \n\n## setSelectedInventorySlotI\nForce the player to have the ith inventory slot selected. E.g. newI 0 makes the player have the 0th inventory slot selected\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| newI | `number` | integer from 0-9 |\n\n\n\n\n\n \n\n## setShieldAmount\nSet the current shield of a lifeform.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| lifeformId | `LifeformId` |  |\n| newShieldAmount | `number` |  |\n\n\n\n\n\n \n\n## setStandardChestItemSlot\n\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| chestPos | `number[]` |  |\n| idx | `number` | 0-indexed |\n| itemName | `ItemName` | Can be 'Air', in which case itemAmount will be ignored and the slot will be cleared. |\n| itemAmount | `number \\| null` | -1 for infinity. Should not be set, or null, for items that are not stackable. |\n| playerId | `PlayerId` | The player who is interacting with the chest. |\n| attributes | `ItemAttributes` | An optional object for certain types of item. For guns this can contain the shotsLeft field which is the amount of ammo the gun currently has. |\n\n\n\n\n\n \n\n## setTargetedPlayerSettingForEveryone\nSet every player's other-entity setting to a specific value for a particular entity.\n\nincludeNewJoiners=true means that new players joining the game will also have this other player setting applied.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| targetedPlayerId | `EntityId` |  |\n| settingName | `Setting` |  |\n| settingValue | `OtherEntitySettings[Setting]` |  |\n| includeNewJoiners | `boolean` |  |\n\n\n\n\n\n \n\n## setTotalAura\nSets the total aura for a player. Will not go over max level or under 0\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| totalAura | `number` |  |\n\n\n\n\n\n \n\n## setVehicleSetting\nOverride a physics setting for a specific vehicle entity, replacing the type/tier default for that\n\nvehicle's rider. The override is stored on the shared Bloxd and, when the vehicle currently has a\n\nrider, replicated to that rider's client. Mirrors `setMobSetting`.\n\n\n\nA setting can also be overridden for one block by naming the block first, e.g.\n\n`setVehicleSetting(boatId, \"IceCanAutoStep\", true)`. That is stored as an entry of the matching\n\n`<setting>ByBlock` record, which the physics tick reads as a precomputed block lookup.\n\n\n\nThe rider's body is at most 25 blocks wide and 90 tall: a larger `width` or `height` acts as that.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| vehicleEId | `EntityId` |  |\n| setting | `TSetting` |  |\n| value | `SettableVehicleSettingValue<TSetting>` |  |\n\n\n\n\n\n \n\n## setVelocity\nSet the velocity of an entity\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| eId | `EntityId` |  |\n| x | `number` |  |\n| y | `number` |  |\n| z | `number` |  |\n\n\n\n\n\n \n\n## setWalkThroughRect\nAllow a player to walk through (or not walk through) voxels that are located within a given rectangle.\n\nFor blocks that are normally solid and not seethrough, the player will experience slight visual glitches while inside the block.\n\n\n\nYou could set both pos1 and pos2 to [0, 0, 0] to make only 0, 0, 0 walkthrough, for example.\n\n\n\nA player standing inside a voxel that turns solid for them is lifted onto it if there is room above, including onto a CANT_WALK_THROUGH rect.\n\nTo let them stay where they are, remove the block before removing its exemption.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| pos1 | `number[]` | The one corner of the cuboid. Format [x, y, z] |\n| pos2 | `number[]` | The top right corner of the cuboid. Format [x, y, z] |\n| updateType | `WalkThroughType` | The type of update. Whether to make a rect solid, or able to be walked through. Pass DEFAULT_WALK_THROUGH with a previously passed rect to disable any walkthrough setting for that rect. |\n\n\n\n\n\n \n\n## setWalkThroughType\nAllow a player to walk through a type of block. For blocks that are normally solid and not seethrough, the player will experience slight visual glitches while inside the block.\n\n\n\nA player standing inside a block that turns solid for them is lifted onto it if there is room above. To let them stay where they are, remove the block before making its type solid again.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| blockName | `BlockName` |  |\n| disable | `boolean` | If you've enabled a player to walk through a block and want to make the block solid for them again, pass this with true. Otherwise you only need to pass playerId and blockName |\n\n\n\n\n\n \n\n## shakePlayerCamera\nShake a player's camera.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n| intensity | `number` | Shake \"power\" (0..1); the client clamps the accumulated power to 1. |\n| durationMs | `number` | How long the shake lasts, in milliseconds. |\n\n\n\n\n\n \n\n## showShopTutorial\nShow the shop tutorial for a player. Will not be shown if they have ever seen the shop tutorial in your game before.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` |  |\n\n\n\n\n\n \n\n## updateAudioEntity\nUpdate an audio entity's config (sound, volume, falloff, rate). Only the provided fields\n\nchange.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| eId | `EntityId` |  |\n| opts | `Partial<AudioEntityOpts>` | Any subset of soundName, volume, refDistance, maxHearDist, rate. |\n\n\n\n\n\n \n\n## updateEntityNodeMeshAttachment\nAttach/detach mesh instances to/from an entity\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| eId | `EntityId` |  |\n| node | `EntityNamedNode` | node to attach to |\n| type | `MeshType \\| null` | if null, detaches mesh from this node |\n| opts | `MeshEntityOpts[MeshType]` |  |\n| offset | `[number, number, number]` |  |\n| rotation | `[number, number, number]` |  |\n\n\n\n\n\n \n\n## updateMeshEntity\nUpdate a mesh entity. If used on a non-mesh entity, will do nothing.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| eId | `EntityId` |  |\n| type | `MeshType` |  |\n| opts | `MeshEntityOpts[MeshType]` |  |\n\n\n\n\n\n \n\n## updateMeshParticleSystems\nUpdates the particle systems of multiple mesh entities at specified nodes\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| updates | `MeshParticleSystemUpdates` |  |\n\n\n\n\n\n \n\n## updateShopItem\nUpdate selected properties of an existing shop item.\n\nFor example, { canBuy: true } to allow players to purchase the item.\n\nThrows an error if the item does not exist.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| categoryKey | `ShopCategoryKey` | The key of the category containing the item |\n| itemKey | `ShopItemKey` | The unique key for the item |\n| changes | `Partial<ShopItem>` | Partial shop item properties to update |\n\n\n\n\n\n \n\n## updateShopItemForPlayer\nUpdate selected properties of an existing shop item for a specific player.\n\nFor example, { canBuy: true } to allow this player to purchase the item.\n\nThrows an error if the item does not exist.\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| playerId | `PlayerId` | The player to update the item for |\n| categoryKey | `ShopCategoryKey` | The key of the category containing the item |\n| itemKey | `ShopItemKey` | The unique key for the item |\n| changes | `Partial<ShopItem>` | Partial shop item properties to update |\n\n\n\n\n";
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(4145),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4148);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(4138),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4141);
     const ⟦2-char-id⟧ = '# How-Tos\n\nThis contains a quick list of tutorials for some features that may be harder to understand on first glance.\n\n## Variations\n\nCustom games now support *variations*, which allow you to create your own alterations of gameplay.\n\n### Custom Games\n\nIn custom games, you can use [`api.getVariation()`](#apiReference-getVariation) to get the current variation. For the base game, this will be `default`.\n\nYou can use [`api.matchmakeToVariation(playerId, variation)`](#apiReference-matchmakeToVariation) to connect a player to a different variation of your custom game. Use `default` to matchmake back to the original\n\nVariation names must be between 1 and 32 characters. They can only contain letters, numbers, hyphens and underscores.\n\nYou can set the variation title using `api.setClientOption(playerId, "customVariationTitle", "My Variation")`. View the docs for the [`api.setClientOption`](#apiReference-setClientOption) or the [`customVariationTitle`](#clientOptions-customVariationTitle) for more information.\n\nPlayer database values (set with [`api.setPlayerDbValue`](#apiReference-setPlayerDbValue), including persistent currencies) are **shared across all variations** of your custom game, so progress a player earns in the hub carries into `1v1`, `2v2`, etc. If you want a value to differ per variation, include the variation name in the key (e.g. `` `wins_${api.getVariation()}` ``).\n\n### Example\n\nHere\'s an example inspired by the lobby arenas of games such as Clutch and Containment Breach. It creates a hub variation (`default`) and then variations for two different modes: Solos (`1v1`) and Duos (`2v2`)\n\n```js\n\nlet initialised = false\nconst variation = api.getVariation()\n\ntick = () => {\n    if (initialised) {\n        return\n    }\n\n    if (api.getBlock(0, 0, 0) === "Unloaded") {\n        // Wait for chunk to load\n        return\n    }\n\n\n    if (variation === "default") {\n        // Create platforms to matchmake players\n        api.setBlockRect([0, 0, 0], [2, 0, 2], "Red Concrete") // 1v1\n        api.setBlockRect([4, 0, 0], [6, 0, 2], "Blue Concrete") // 2v2\n    }\n    initialised = true\n}\n\nonPlayerJoin = (playerId) => {\n    if (variation === "default") {\n        api.setPosition(playerId, 3, 5, -3)\n        api.setCameraDirection(playerId, [0, 0, 1])\n    }\n    else if (variation === "1v1") {\n        api.setClientOption(playerId, "customVariationTitle", "Solos")\n    } else if (variation === "2v2") {\n        api.setClientOption(playerId, "customVariationTitle", "Duos")\n    }\n}\n\n// Don\'t matchmake people if they\'ve already been matchmade\n/** @type {Record<PlayerId, boolean>} */\nconst playerHasMatchmade = {}\n\nonBlockStandStart = (playerId, _x, _y, _z, blockName) => {\n    if (variation !== "default") {\n        return\n    }\n    if (playerHasMatchmade[playerId]) {\n        return\n    }\n\n    if (blockName === "Red Concrete") {\n        api.matchmakeToVariation(playerId, "1v1")\n        playerHasMatchmade[playerId] = true\n    } else if (blockName === "Blue Concrete") {\n        api.matchmakeToVariation(playerId, "2v2")\n        playerHasMatchmade[playerId] = true\n    }\n}\n```\n\n### Worlds\n\nDue to worlds being their own lobby, there is no possibility for variations. However, to test out custom games, you can reload lobby code as a specific variation. There are two main ways of doing this, however both require you to have at least Coder permissions or higher.\n\n- In the Code Editor, click the three dots on the right to open the `More Options` menu. Here, you can type in a variation and reload the lobby code to test as that variation\n- If your code runs `api.matchmakeToVariation`, it will ask you if you want to reload to that variation.\n\n## Plugins\n\nFirst-party plugins provide reusable World Code features. Import a plugin from `@plugins/<name>` in your entry file or another project file:\n\n```ts\nimport { setTimeout, getRandomItem } from "@plugins/helpers"\nimport { debugLog } from "@plugins/debug"\n```\n\nImporting a plugin also loads its callbacks. Plugin callbacks run before callbacks with the same name in your own code, so both of these `tick` callbacks run:\n\n```ts\nimport { setTimeout } from "@plugins/helpers"\n\ntick = () => {\n    /* Your tick code */\n}\n```\n\nIf callbacks return a value, your callback\'s return value takes precedence over the plugin\'s. Avoid replacing a useful plugin return by accident, particularly in callbacks such as `onPlayerChat` and `onRespawnRequest`.\n\nPlugins may import other plugins. Their dependencies are loaded automatically, so importing `@plugins/sessionBasedGame` also loads the helpers it needs.\n\n### Available plugins\n\n- `@plugins/helpers` exports `setTimeout`, `setInterval`, `clearTimeout`, `clearInterval`, `forceLoadChunk`, `randomInt`, `shuffleArray`, and `getRandomItem`.\n- `@plugins/dialogue` exports `sayDialogue`, which shows a player a line of dialogue for a while, and `clearDialogue`. See [Dialogue](#howTo-Dialogue).\n- `@plugins/debug` exports `debugLog`.\n- `@plugins/sessionBasedGame` provides a lobby-to-game lifecycle, teams, spectators, map loading, optional map voting, optional team choosing, and automatic game resets.\n\nThe editor\'s autocomplete and the read-only plugin source files are the reference for the latest exports and option types.\n\n## Building a SessionBasedGame\n\nUse `@plugins/sessionBasedGame` for a team game that follows this loop:\n\n* Load a lobby and wait for players.\n* Optionally let players choose teams and vote for a map.\n* Copy the selected map into the play area and assign teams.\n* Run the game until one team remains or your code chooses a winner.\n* Show the result, reset the lobby, and start the next countdown.\n\n### World layout\n\nBuild the lobby and each map in unused parts of the world. The plugin treats these areas as templates and copies one of them into `playAreaRect`.\n\n- `playAreaRect` is the destination where the current lobby or map is placed.\n- `lobby.source.rect` and each `map.source.rect` are absolute world coordinates for template builds.\n- Lobby spawns, map team spawns, and team-pad rectangles are offsets from the lowest corner of `playAreaRect`, not absolute world coordinates.\n- Source rectangles are rounded outwards to chunk boundaries. Keep template builds aligned to 32-block chunk boundaries so the copied area is predictable.\n- Every lobby and map source must fit inside `playAreaRect`.\n- At least two teams and one map are required.\n\n### Minimal setup\n\nCreate the game once, at the top level of your entry file:\n\n```js\nimport { createGame } from "@plugins/sessionBasedGame"\n\nconst teams = [\n    { name: "Red", maxPlayers: 4, colour: "#ff5555" },\n    { name: "Blue", maxPlayers: 4, colour: "#5555ff" },\n]\n\nconst game = createGame({\n    teams,\n    maps: [\n        {\n            name: "Castle",\n            icon: "Stone Bricks",\n            source: {\n                rect: [\n                    [320, 0, 0],\n                    [351, 31, 31],\n                ],\n            },\n            teams: {\n                Red: {\n                    spawn: [6, 2, 16],\n                    spawnFacing: [1, 0, 0],\n                },\n                Blue: {\n                    spawn: [26, 2, 16],\n                    spawnFacing: [-1, 0, 0],\n                },\n            },\n        },\n    ],\n    lobby: {\n        source: {\n            rect: [\n                [256, 0, 0],\n                [287, 31, 31],\n            ],\n        },\n        spawn: [16, 2, 16],\n        spawnFacing: [0, 0, 1],\n    },\n    playAreaRect: [\n        [0, 0, 0],\n        [31, 31, 31],\n    ],\n    emptyLobbyStartInSecs: 60,\n    fullLobbyStartInSecs: 10,\n    gameResetInSecs: 10,\n    onStart: () => {\n        game.giveColouredArmourToEveryone()\n    },\n})\n```\n\nThe plugin supplies default values for the optional settings. With the setup above, players are assigned to the smallest available team when the game starts.\n\n### Eliminating players and ending the game\n\nBy default, players remain on their team after dying. For an elimination game, turn the victim into a spectator:\n\n```ts\nonPlayerKilledOtherPlayer = (_killerId, victimId) => {\n    game.getPlayer(victimId).startSpectating()\n}\n\nonMobKilledPlayer = (_mobId, playerId) => {\n    game.getPlayer(playerId).startSpectating()\n}\n```\n\n`startSpectating()` checks whether only one team remains and finishes the game automatically. For games with another win condition, call `game.makeTeamWin(team)` when that condition is met.\n\n### Team choosing\n\nAdd `teamPads` to the lobby to let players request a team before the game starts:\n\n```ts\nlobby: {\n    source: {\n        rect: [\n            [256, 0, 0],\n            [287, 31, 31],\n        ],\n    },\n    spawn: [16, 2, 16],\n    spawnFacing: [0, 0, 1],\n    teamPads: {\n        Red: {\n            rect: [\n                [4, 1, 14],\n                [6, 1, 16],\n            ],\n            emptyBlock: "Red Concrete",\n            fullBlock: "Red Ceramic",\n        },\n        Blue: {\n            rect: [\n                [25, 1, 14],\n                [27, 1, 16],\n            ],\n            emptyBlock: "Blue Concrete",\n            fullBlock: "Blue Ceramic",\n        },\n    },\n}\n```\n\nEach key must exactly match a team name. The plugin changes a pad from `emptyBlock` to `fullBlock` when that team has enough requests.\n\n### Map voting\n\nSet `mapVotingEnabled: true` and provide multiple maps. Before each game, the plugin opens a shop containing up to four randomly selected maps. The `icon` on each map is used as its shop image.\n\n### Custom player state and behaviour\n\nExtend `SessionBasedPlayer` when each player needs additional state or customised lifecycle behaviour, then pass the class as `playerConstructor`. This example assumes `teams`, `maps`, `lobby`, and `playAreaRect` are top-level constants:\n\n```ts\nimport { createGame, SessionBasedPlayer } from "@plugins/sessionBasedGame"\n\nclass GamePlayer extends SessionBasedPlayer<(typeof teams)[number], (typeof maps)[number]> {\n    kills = 0\n\n    startPlaying() {\n        super.startPlaying()\n        this.kills = 0\n    }\n}\n\nconst game = createGame({\n    teams,\n    maps,\n    lobby,\n    playAreaRect,\n    playerConstructor: GamePlayer,\n})\n```\n\nCall `super.startPlaying()` or `super.startSpectating()` when overriding those methods so the plugin still updates inventory, health, visibility, building permissions, and win detection.\n\n### Main session-based exports\n\n- `createGame(options)` creates and returns the single game instance.\n- `SessionBasedGame` exposes the current `gamePhase`, selected `map`, `getPlayer`, `getPlayers`, `getStartingInText`, `giveColouredArmourToEveryone`, `checkWin`, and `makeTeamWin`.\n- `SessionBasedPlayer` exposes `playerId`, `game`, `team`, `requestedTeam`, `isSpectating`, `startPlaying`, `startSpectating`, `onMessage`, `onRespawnRequest`, and `getPositionInPlayArea`.\n- `BaseTeamInfo`, `BaseMapInfo`, and `SessionBasedGameSetupOptions` are exported TypeScript types.\n\n\n### Complete example: team deathmatch\n\nThis combines team choosing, two-map voting, a custom player class, respawning equipment, personal kill counts, team scores, a round timer, sudden death, and automatic resets. Each enemy kill earns one team point. The first team to 10 points wins; after three minutes, the leading team wins. A tied round continues until a team takes the lead. Players who join mid-round spectate until the next round.\n\n#### Build the templates first\n\nUse these absolute world coordinates, or change the corresponding rectangles in the code:\n\n| Area | Lowest block | Highest block |\n| --- | --- | --- |\n| Play area (overwritten each round) | `[0, 0, 0]` | `[31, 31, 31]` |\n| Lobby template | `[256, 0, 0]` | `[287, 31, 31]` |\n| Castle template | `[320, 0, 0]` | `[351, 31, 31]` |\n| Courtyard template | `[384, 0, 0]` | `[415, 31, 31]` |\n\nBuild a floor at `y = 1` in each template, with walls to keep players inside and clear space above each spawn. In the lobby, leave room for the spawn at `[272, 2, 16]` and the team pads at `[260, 1, 14]`\u2013`[262, 1, 16]` and `[281, 1, 14]`\u2013`[283, 1, 16]`. The plugin colours the pads in the copied lobby. Castle\'s spawns are `[326, 2, 16]` and `[346, 2, 16]`; Courtyard\'s are `[400, 2, 6]` and `[400, 2, 26]`. Add cover between the opposing spawns.\n\nEnable PvP and health, disable spawn protection, and save the builds in your world. The code copies your templates; it does not build them. All spawn and pad coordinates **inside the code** are offsets within the copied area, which is why Castle\'s Red spawn is `[6, 2, 16]`, not `[326, 2, 16]`.\n\n#### Paste the whole entry file\n\nUse `index.js` in the Code Editor. Replace the earlier examples with this entire block: it includes every constant and creates the game exactly once. Test with at least two players on opposing teams; team-pad requests are honoured, so choose different pads when testing.\n\n```js\nimport { createGame, SessionBasedPlayer } from "@plugins/sessionBasedGame"\n\n/* Settings */\nconst SCORE_TO_WIN = 10\nconst ROUND_SECONDS = 180\nconst PLAYERS_PER_TEAM = 4\n\n/* World layout */\n/* This example\'s scoring and HUD are written for exactly two teams: Red and Blue. */\nconst teams = [\n    { name: "Red", maxPlayers: PLAYERS_PER_TEAM, colour: "#ff5555" },\n    { name: "Blue", maxPlayers: PLAYERS_PER_TEAM, colour: "#5555ff" },\n]\n\nconst maps = [\n    {\n        name: "Castle",\n        icon: "Stone Bricks",\n        source: { rect: [[320, 0, 0], [351, 31, 31]] },\n        teams: {\n            Red: { spawn: [6, 2, 16], spawnFacing: [1, 0, 0] },\n            Blue: { spawn: [26, 2, 16], spawnFacing: [-1, 0, 0] },\n        },\n    },\n    {\n        name: "Courtyard",\n        icon: "Grass Block",\n        source: { rect: [[384, 0, 0], [415, 31, 31]] },\n        teams: {\n            Red: { spawn: [16, 2, 6], spawnFacing: [0, 0, 1] },\n            Blue: { spawn: [16, 2, 26], spawnFacing: [0, 0, -1] },\n        },\n    },\n]\n\n/* Round state */\nconst scores = { Red: 0, Blue: 0 }\nlet roundEndsAt = 0\nlet resultText = ""\n\nclass ArenaPlayer extends SessionBasedPlayer {\n    kills = 0\n\n    startPlaying() {\n        super.startPlaying()\n        this.kills = 0\n        api.setClientOptions(this.playerId, {\n            secsToRespawn: 3,\n            respawnButtonText: "Respawn",\n            usePlayAgainButton: false,\n        })\n    }\n\n    onRespawnRequest() {\n        const position = super.onRespawnRequest()\n        if (this.team !== null) {\n            /* Also runs at round start. Set slots so respawns cannot duplicate equipment. */\n            api.setItemSlot(this.playerId, 0, "Iron Sword")\n            api.setItemSlot(this.playerId, 46, `${this.team.name} Wood Helmet`)\n            api.setItemSlot(this.playerId, 47, `${this.team.name} Wood Chestplate`)\n            api.setItemSlot(this.playerId, 48, `${this.team.name} Wood Gauntlets`)\n            api.setItemSlot(this.playerId, 49, `${this.team.name} Wood Leggings`)\n            api.setItemSlot(this.playerId, 50, `${this.team.name} Wood Boots`)\n        }\n        return position\n    }\n}\n\nconst game = createGame({\n    teams,\n    maps,\n    playerConstructor: ArenaPlayer,\n    playAreaRect: [[0, 0, 0], [31, 31, 31]],\n    lobby: {\n        source: { rect: [[256, 0, 0], [287, 31, 31]] },\n        spawn: [16, 2, 16],\n        spawnFacing: [0, 0, 1],\n        teamPads: {\n            Red: {\n                rect: [[4, 1, 14], [6, 1, 16]],\n                emptyBlock: "Red Concrete",\n                fullBlock: "Red Ceramic",\n            },\n            Blue: {\n                rect: [[25, 1, 14], [27, 1, 16]],\n                emptyBlock: "Blue Concrete",\n                fullBlock: "Blue Ceramic",\n            },\n        },\n    },\n    mapVotingEnabled: true,\n    maxSpectators: 4,\n    emptyLobbyStartInSecs: 30,\n    fullLobbyStartInSecs: 5,\n    gameResetInSecs: 10,\n    onStart: () => {\n        scores.Red = 0\n        scores.Blue = 0\n        resultText = ""\n        roundEndsAt = api.now() + ROUND_SECONDS * 1000\n        api.broadcastMessage(`First team to ${SCORE_TO_WIN} kills wins!`)\n        game.checkWin()\n    },\n    onFinish: (winningTeam) => {\n        resultText = `${winningTeam.name} wins! Red ${scores.Red} - Blue ${scores.Blue}`\n        api.broadcastMessage(resultText)\n        /* Disable combat and clear equipment during the result screen. */\n        for (const player of game.getPlayers()) {\n            player.startSpectating()\n        }\n    },\n    getRightInfoText: (player) => {\n        if (game.gamePhase === "beforeGame") {\n            return [\n                "TEAM DEATHMATCH\\nChoose a team on the coloured pads.\\nVote for a map in the shop.\\n",\n                ...game.getStartingInText(),\n            ]\n        }\n        if (game.gamePhase === "gameFinished") {\n            return `${resultText}\\nNext round soon!`\n        }\n        const secondsLeft = Math.max(0, Math.ceil((roundEndsAt - api.now()) / 1000))\n        const clock = secondsLeft > 0 ? `${secondsLeft}s left` : "Sudden death: next team lead wins!"\n        const role = player.team === null ? "Spectating until next round" : `${player.team.name} team`\n        return `TEAM DEATHMATCH\\n${role}\\nRed ${scores.Red} - Blue ${scores.Blue}\\nTarget: ${SCORE_TO_WIN}\\n${clock}\\nYour kills: ${player.kills}`\n    },\n})\n\nfunction checkScoreWin() {\n    if (game.gamePhase !== "inGame") {\n        return\n    }\n    for (const team of teams) {\n        const otherName = team.name === "Red" ? "Blue" : "Red"\n        const reachedTarget = scores[team.name] >= SCORE_TO_WIN\n        const leadsAfterTime = api.now() >= roundEndsAt && scores[team.name] > scores[otherName]\n        if (reachedTarget || leadsAfterTime) {\n            game.makeTeamWin(team)\n            return\n        }\n    }\n}\n\ntick = () => {\n    checkScoreWin()\n}\n\nonPlayerKilledOtherPlayer = (killerId, victimId) => {\n    if (game.gamePhase === "inGame") {\n        const killer = game.getPlayer(killerId)\n        const victim = game.getPlayer(victimId)\n        if (killer.team !== null && victim.team !== null && killer.team !== victim.team) {\n            killer.kills++\n            scores[killer.team.name]++\n            checkScoreWin()\n        }\n    }\n    return "keepInventory"\n}\n\nonMobKilledPlayer = () => {\n    return "keepInventory"\n}\n\nonPlayerDropItem = () => {\n    return "preventDrop"\n}\n```\n\n#### How the pieces connect\n\n- Importing the plugin registers its join, leave, tick, team-pad, shop-voting, chat, and respawn callbacks. Do not call those plugin callbacks manually: your `tick` and kill callbacks run after theirs automatically.\n- `startPlaying()` runs once per round for each participant. It resets personal kills and calls the base implementation to restore health, team visibility, friendly-fire rules, and the spawn position. `onStart` resets shared scores and the deadline after players have started.\n- Deaths leave players on their teams, so the plugin respawns them at their map spawn. The player method `onRespawnRequest()` restores equipment and returns the base spawn position. Returning that position is essential; a separate global respawn callback could accidentally override it. Mob and environmental deaths do not award points.\n- `getRightInfoText(player)` builds the scoreboard for that player, including their personal `kills` count. The plugin refreshes this HUD once a second.\n- `makeTeamWin` changes the phase before calling `onFinish`, so converting everyone to spectators there cannot trigger another win. Scores remain visible during the result screen; the plugin reloads the lobby after ten seconds, then `onStart` clears them for the next match. The plugin also ends a round when only one team remains after disconnects.\n\nTo check the full loop, choose opposite pads, vote, score a kill, and confirm the victim respawns with a sword while the killer\'s team gains a point. Temporarily set `SCORE_TO_WIN` to `2` and `ROUND_SECONDS` to `15` to check a score victory, a timed victory, a tied round continuing into sudden death, and the next round starting with cleared scores. Join mid-round to check spectating.\n\n## Interactable NPCs\n\nAn `interactable` entity is one the player aims at and interacts with rather than attacks. Interacting fires `onPlayerAltAction` with the entity as the target, and the crosshair tells the player which key to press.\n\n* `interactable` makes the entity pickable on its own, so leave `canAttack` off unless being hit is meant to do something. Aim still lands on the entity; swinging or shooting at it does nothing.\n* The alt action is consumed, so a held block is not placed through the NPC and a held throwable is not spent.\n* `interactionPrompt` replaces the label beside the key. Leave it unset for the default `Interact`. Describe what interacting does rather than which button to press, since the engine draws the key itself.\n* It takes plain text or `CustomTextStyling`, so use a `translationKey` if your world is translated.\n* Works on mobs as well as mesh entities.\n* Nothing is drawn on touchscreens, where a tap needs no prompt. The interaction itself still works there.\n\n### A shopkeeper\n\n```js\nlet shopkeeperId = null\n\ntick = () => {\n    if (shopkeeperId !== null) {\n        return\n    }\n\n    if (api.getBlock(8, 4, 8) === "Unloaded") {\n        // Wait for the chunk to load before placing the NPC\n        return\n    }\n\n    shopkeeperId = api.attemptCreateMeshEntity("Person", {\n        size: 1,\n        pose: "standing",\n        textures: { head: "trader_black" },\n    }, "Blacksmith")\n\n    if (shopkeeperId === null) {\n        // The mesh entity limit was reached\n        return\n    }\n\n    api.setPosition(shopkeeperId, 8, 5, 8)\n\n    // interactable is what keeps the NPC pickable, so canAttack can stay off\n    api.setTargetedPlayerSettingForEveryone(shopkeeperId, "canAttack", false)\n    api.setTargetedPlayerSettingForEveryone(shopkeeperId, "interactable", true)\n    api.setTargetedPlayerSettingForEveryone(shopkeeperId, "interactionPrompt", "Buy Gear")\n}\n\nonPlayerAltAction = (playerId, x, y, z, block, targetEId) => {\n    if (targetEId === shopkeeperId) {\n        // Toggle off, or holding the key would flicker the shop open and closed\n        api.openShop(playerId, false)\n    }\n}\n```\n\nPlayers now see the interact key and `Buy Gear` at the crosshair whenever they look at the Blacksmith, and pressing it opens the shop. Hitting the NPC does nothing at all.\n\n### Guarding a held key\n\n`onPlayerAltAction` keeps firing while the interact key is held down, roughly every 50-150ms. Reopening an already open shop does nothing, so the example above needs no guard. An interaction that grants an item, charges a currency or advances a conversation is not idempotent, and has to swallow the repeats itself:\n\n```js\nconst INTERACT_COOLDOWN_MS = 800\nconst lastInteractAt = {}\n\nonPlayerAltAction = (playerId, x, y, z, block, targetEId) => {\n    if (targetEId === questGiverId) {\n        const now = api.now()\n        if (now - (lastInteractAt[playerId] ?? 0) >= INTERACT_COOLDOWN_MS) {\n            lastInteractAt[playerId] = now\n            sayNextLine(playerId)\n        }\n    }\n}\n\nonPlayerLeave = (playerId) => {\n    delete lastInteractAt[playerId]\n}\n```\n\n800ms is long enough to swallow a held key and short enough that two deliberate presses still count twice. [A quest giver](#howTo-A quest giver) fills in `sayNextLine`.\n\n## Dialogue\n\n`@plugins/dialogue` shows a player a line of dialogue in the panel below the crosshair. The line is revealed word by word, and each syllable blips in the speaker\'s voice as its word appears.\n\n```js\nimport { sayDialogue, clearDialogue } from "@plugins/dialogue"\n\nonPlayerJoin = (playerId) => {\n    sayDialogue(playerId, "Welcome to the forge. Mind the sparks!", {\n        speakerName: "Blacksmith",\n        voice: "gruff",\n    })\n}\n```\n\n* `sayDialogue(playerId, text, opts)` shows the line and hides it after `opts.durationMs`, 6 seconds by default, counted from when the line starts to appear. A new line replaces the one already up, and saying the same line again replays it.\n* `clearDialogue(playerId)` hides the line early.\n* `text` is plain text or a `TranslatedText`. `[[Item Name]]` in it shows that item\'s icon inline, e.g. `"Bring me 3 [[Iron Bar]]"`.\n* `speakerName` is shown above the line, as plain text or `CustomTextStyling`, so it can carry a portrait icon.\n* `voice` is one of the presets `"soft"`, `"regular"`, `"dark"`, `"high-pitched"`, `"gruff"`, `"lively"`, `"posh"` and `"mechanical"`, or a `SpeechSynth` that sets every parameter, such as its waveform, pitch and speaking rate. Leave it out for a silent line. Hear the presets and make a voice of your own in [Dialogue Voices](#dialogueVoices).\n\nThe plugin is built on the [`dialogue`](#clientOptions-dialogue) client option, which you can also set yourself with `api.setClientOption`, e.g. from a code block. A line set that way stays up until you set the option to `null`, and setting the same line again does not replay it. Set `animateIn: false` on it to show the line whole, without its reveal or voice.\n\n### A quest giver\n\nCreate the quest giver as in [A shopkeeper](#howTo-A shopkeeper), keeping its ID in `questGiverId`, with `interactionPrompt` set to `"Talk"` and no shop. Each interaction says the next line, guarded as in [Guarding a held key](#howTo-Guarding a held key):\n\n```js\nimport { sayDialogue } from "@plugins/dialogue"\n\nconst QUEST_LINES = [\n    "Ah, a new face! The mine has been quiet for days.",\n    "Bring me 3 [[Iron Bar]] and I\'ll make it worth your while.",\n    "Off you go, then!",\n]\nconst INTERACT_COOLDOWN_MS = 800\nconst lastInteractAt = {}\nconst nextLineIndex = {}\n\nfunction sayNextLine(playerId) {\n    const index = nextLineIndex[playerId] ?? 0\n    sayDialogue(playerId, QUEST_LINES[index], { speakerName: "Miner", voice: "lively" })\n    nextLineIndex[playerId] = (index + 1) % QUEST_LINES.length\n}\n\nonPlayerAltAction = (playerId, x, y, z, block, targetEId) => {\n    if (targetEId === questGiverId) {\n        const now = api.now()\n        if (now - (lastInteractAt[playerId] ?? 0) >= INTERACT_COOLDOWN_MS) {\n            lastInteractAt[playerId] = now\n            sayNextLine(playerId)\n        }\n    }\n}\n\nonPlayerLeave = (playerId) => {\n    delete lastInteractAt[playerId]\n    delete nextLineIndex[playerId]\n}\n```\n\nThe plugin has its own `onPlayerLeave`, which runs before yours, so both forget the player.\n\n## Project schematics\n\nIn the Code Editor, click the `+` beside Schematics, enter a project path, then upload a `.bloxdschem` file or choose a snapshot from your profile. A project can contain up to five schematics. Open an existing schematic to rename or delete it. To replace it, delete it and add it again at the same path. Profile edits do not change an existing snapshot.\n\nCall `api.setChunkAsSchematic(schematicPath, srcCoords, destCoords)` to replace one complete destination chunk, including air and block data. Both positions are block coordinates selecting their containing chunk, like `copyChunk`. Source coordinates use the stored chunk grid, including padding around the original selection; the Code Editor shows its dimensions.\n\n```js\n// Place two neighbouring chunks, spreading the work over ticks.\nlet nextChunk = 0\ntick = () => {\n    if (nextChunk < 2) {\n        api.setChunkAsSchematic("maps/arena.bloxdschem", [nextChunk * 32, 0, 0], [nextChunk * 32, 64, 0])\n        nextChunk++\n    }\n}\n```\n\nThe example requires an arena containing source chunks `[0, 0, 0]` and `[32, 0, 0]`. Placement uses the normal chunk-load and block-data budgets, so spread larger builds over time. Missing assets or source chunks throw an error. Placement replaces chunks without block-break drops or callbacks.\n\nUse `api.getSchematicDimensions("maps/arena.bloxdschem")` to get its stored `[x, y, z]` dimensions, including selection padding. Like placement, this reads the active project snapshot.\n\nThe `@plugins/sessionBasedGame` plugin accepts `source: { schematic: "maps/arena.bloxdschem" }` for maps and the lobby, alongside `source: { rect: [pos1, pos2] }`. Dimensions are read automatically and rounded outwards to chunks when checking the play area. Spawn positions and team pads use offsets from the stored chunk grid\'s lowest corner. Schematics are pasted directly through the plugin\'s normal map-loading flow and must fit within the available placement and block-data budgets; large metadata-heavy maps need a custom loader that spreads work over ticks.\n\n### Loading an entire schematic\n\n```js\nfunction loadSchematic(schematicPath, destination) {\n    const [width, height, depth] = api.getSchematicDimensions(schematicPath)\n    const [destX, destY, destZ] = destination\n\n    for (let x = 0; x < width; x += 32) {\n        for (let y = 0; y < height; y += 32) {\n            for (let z = 0; z < depth; z += 32) {\n                api.setChunkAsSchematic(\n                    schematicPath,\n                    [x, y, z],\n                    [destX + x, destY + y, destZ + z],\n                )\n            }\n        }\n    }\n}\n\nloadSchematic("maps/arena.bloxdschem", [0, 64, 0])\n```\n\n## More coming soon!\n\nIf you think there are any guides we should add to this page, let us know in Discord!',
       ⟦2-char-id⟧ = '# Snippets\n\nShort pieces of code to copy into a code block and change to suit your world. In a code block or board, `myId` is the player who ran it. In World Code, use the player ID a callback is given instead.\n\n## Make the player jump\n\nSets the player\'s velocity straight up, whatever they were doing.\n\n```js\napi.setVelocity(myId, 0, 9, 0)\n```\n\n## Push the player\n\nAdds to the player\'s velocity, so the push carries on from how they were already moving.\n\n```js\napi.applyImpulse(myId, 9, 0, 9)\n```\n\n## Teleport the player onto this block\n\n`thisPos` is the position of the code block or board that is running.\n\n```js\napi.setPosition(myId, thisPos[0] + 0.5, thisPos[1] + 1, thisPos[2] + 0.5)\n```\n\n## Send yourself a coloured message\n\n```js\napi.sendMessage(myId, "Welcome to my world!", { color: "orange" })\n```\n\n## Send a message to everyone\n\n```js\napi.broadcastMessage("The game starts in 10 seconds!", { color: "red" })\n```\n\n## Show flying text\n\nText that flies across the middle of the player\'s screen. The last number is how far away whatever caused it is, which sets how the text flies.\n\n```js\napi.sendFlyingMiddleMessage(myId, ["You found the secret room!"], 100)\n```\n\n## Say a line of dialogue\n\nShows a line below the crosshair, revealed word by word in a voice, with the speaker\'s name above it. It stays up until you hide it with `api.setClientOption(myId, "dialogue", null)`. In World Code, `sayDialogue` from `@plugins/dialogue` hides it for you after a while.\n\n```js\napi.setClientOption(myId, "dialogue", { line: "Welcome to my world!", speakerName: "Guide", voice: "regular" })\n```\n\n## Set the player\'s health\n\nLogs the health they had before.\n\n```js\nconst oldHealth = api.getHealth(myId)\napi.setHealth(myId, 50)\napi.log("Old health:", oldHealth)\n```\n\n## Give the player an item\n\n```js\napi.giveItem(myId, "Diamond Sword", 1)\n```\n\n## Place a block above this block\n\n```js\napi.setBlock(thisPos[0], thisPos[1] + 1, thisPos[2], "Block of Gold")\n```\n\n## Give the player a speed boost\n\nAn inbuilt effect, for 10 seconds.\n\n```js\napi.applyEffect(myId, "Speed", 10000, { inbuiltLevel: 1 })\n```\n\n## Make the player faster\n\nClient options change how the game behaves for one player.\n\n```js\napi.setClientOption(myId, "speedMultiplier", 2)\n```\n\n## Play a sound\n\n```js\napi.playSound(myId, "equip_leather1", 1, 1)\n```\n\n## Find every other player\n\nA function assigned without `const` or `let` stays defined for later code blocks, until World Code is next saved or the world restarts.\n\n```js\ngetOtherIds = () => {\n\tconst otherIds = []\n\tfor (const id of api.getPlayerIds()) {\n\t\tif (id !== myId) {\n\t\t\totherIds.push(id)\n\t\t}\n\t}\n\treturn otherIds\n}\n```\n\n## Turn the other players into zombies\n\nUses `getOtherIds` from the snippet above.\n\n```js\nfor (const otherId of getOtherIds()) {\n\tapi.setPlayerPose(otherId, "zombie")\n\tapi.changePlayerIntoSkin(otherId, "head", "zombie")\n}\n```\n\n## Make everyone a floating wizard\n\n```js\nfor (const playerId of api.getPlayerIds()) {\n\tapi.setPlayerPose(playerId, "driving")\n\tapi.changePlayerIntoSkin(playerId, "head", "wizard")\n}\n```\n\n## Welcome players as they join\n\nWorld Code: `onPlayerJoin` runs each time a player joins, with their ID.\n\n```js\nonPlayerJoin = (playerId) => {\n\tapi.sendMessage(playerId, "Welcome! Type in chat if you need help.", { color: "green" })\n}\n```\n\n## Run code every second\n\nWorld Code: `tick` runs many times a second, and is given the time since the last one, in milliseconds.\n\n```js\nlet sinceLastSecond = 0\ntick = (ms) => {\n\tsinceLastSecond += ms\n\tif (sinceLastSecond >= 1000) {\n\t\tsinceLastSecond -= 1000\n\t\tapi.broadcastMessage("Another second has passed")\n\t}\n}\n```';
 
```

</details>

</details>

<details>
<summary><code>bundles/staging.bloxd.io/chunks/js/73.js</code> · modified · +1 / -1</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +1 / -1</summary>

```diff
@@ -1,7 +1,7 @@
 export const ⟦2-char-id⟧ = 73;
 export const ids = [73];
 export const modules = {
-  4145: ⟦2-char-id⟧ => {
+  4138: ⟦2-char-id⟧ => {
     ⟦2-char-id⟧.exports = '# Block Names (1523 blocks)\n#\n# Each block name listed below is the ROOT block - use it exactly as shown (no suffix).\n# Some blocks also have meta variants, indicated by codes in brackets.\n#\n# ROOT BLOCK: Use the block name exactly as listed (e.g. "Maple Door", "Wheat", "Stone")\n#\n# META VARIANTS: If a block has codes in brackets, you can append suffixes to get variants:\n#   R  = rotation    -> BlockName|meta|rot1 through |meta|rot4\n#   O  = open/closed -> BlockName|meta|rot1|open or |closed (combine with R)\n#   H  = halfblockPlacement -> BlockName|meta|rot1|top or |bot or |side (combine with R; stairs have no |side)\n#   G  = growing     -> BlockName|Growing\n#   TB = treeBase    -> BlockName|TreeBase|<WoodType> (e.g. Maple Log|TreeBase|Maple)\n#   TC = treeCanopy  -> BlockName|TreeCanopy\n#   B  = books       -> BlockName|meta|rot1|books1 through |books6 (combine with R)\n#   FG = freshlyGrown -> BlockName|FreshlyGrown (harvestable crop state)\n#   RT = roots       -> BlockName|Roots (flower with roots for world gen)\n#   LV = lava        -> BlockName|Lava (lava-growing variant)\n#   TP = top         -> BlockName|Top (top half of tall plants)\n#   GR = grassRoots  -> BlockName|GrassRoots (dirt with grass roots)\n#   BK = breaking    -> BlockName|Breaking (breaking animation state)\n#   FL = flashing    -> BlockName|Flashing (flashing animation state)\n#   SC = stairsCorner -> BlockName|meta|rot1|bot|innerLeft, innerRight, outerLeft or outerRight (combine with R and H)\n#\n# Examples:\n#   Stone           -> Just use "Stone" (no brackets = no variants, root block only)\n#   Maple Door [O,R] -> Root: "Maple Door", Variants: "Maple Door|meta|rot2|open", etc.\n#   Wheat [FG]       -> Root: "Wheat", Variant: "Wheat|FreshlyGrown"\n#\nDirt [GR]\nMessy Dirt\nGrass Block\nSand\nClay\nGravel\nSnow\nMaple Log [TB]\nPine Log [TB]\nPlum Log [TB]\nCedar Log [TB]\nAspen Log [TB]\nJungle Log [TB]\nMaple Wood Planks\nAspen Wood Planks\nPlum Wood Planks\nJungle Wood Planks\nPine Wood Planks\nCedar Wood Planks\nBarkless Maple Log [TB]\nBarkless Aspen Log [TB]\nBarkless Plum Log [TB]\nBarkless Jungle Log [TB]\nBarkless Pine Log [TB]\nBarkless Cedar Log [TB]\nfree_placeholder2\nStone\nMessy Stone\nfree_placeholder\nSmooth Stone\nDiorite\nSmooth Diorite\nAndesite\nSmooth Andesite\nGranite\nSmooth Granite\nSandstone\nYellowstone\nCoal Ore\nIron Ore\nGold Ore\nLapis Lazuli Ore\nEmerald Ore\nDiamond Ore\nBlock of Coal\nBlock of Iron\nBlock of Gold\nBlock of Lapis Lazuli\nBlock of Emerald\nWhite Wool\nOrange Wool\nMagenta Wool\nLight Blue Wool\nYellow Wool\nLime Wool\nPink Wool\nGray Wool\nLight Gray Wool\nCyan Wool\nPurple Wool\nBlue Wool\nBrown Wool\nGreen Wool\nRed Wool\nBlack Wool\nBaked Clay\nWhite Baked Clay\nOrange Baked Clay\nMagenta Baked Clay\nLight Blue Baked Clay\nYellow Baked Clay\nLime Baked Clay\nPink Baked Clay\nGray Baked Clay\nLight Gray Baked Clay\nCyan Baked Clay\nPurple Baked Clay\nBlue Baked Clay\nBrown Baked Clay\nGreen Baked Clay\nRed Baked Clay\nBlack Baked Clay\nGray Concrete\nLight Gray Concrete\nBlack Concrete\nBlue Concrete\nBrown Concrete\nCyan Concrete\nLight Blue Concrete\nLime Concrete\nMagenta Concrete\nOrange Concrete\nPink Concrete\nPurple Concrete\nRed Concrete\nWhite Concrete\nGreen Concrete\nYellow Concrete\nPine Leaves [TC]\nAspen Leaves [TC]\nMaple Leaves [TC]\nJungle Leaves [TC]\nPumpkin_placeholder\nWatermelon\nGlass\nBlack Glass\nBlue Glass\nBrown Glass\nCyan Glass\nGray Glass\nLight Gray Glass\nGreen Glass\nLight Blue Glass\nLime Glass\nMagenta Glass\nOrange Glass\nPink Glass\nPurple Glass\nRed Glass\nWhite Glass\nYellow Glass\nUNUSED BLOCK TYPE\nDim Lamp On\nDim Lamp Off\nWater\nInvisible Solid\nBricks\nStone Bricks\nDark Red Brick\nDark Red Stone\nBlock of Quartz\nChiseled Block of Quartz\nEngraved Stone\nMossy Stone Bricks\nCracked Stone Bricks\nSmooth Sandstone\nEngraved Sandstone\nIce\nObsidian\nHay Bale\nSponge\nBeacon\ntemp\nGolden Decoration\nMoonstone Explosive\nBedrock\nSmooth Double Stone Slab\nCactus [G]\nGrass\nDandelion [RT]\nPoppy [RT]\nRed Tulip [RT]\nPink Tulip [RT]\nWhite Tulip [RT]\nOrange Tulip [RT]\nDaisy [RT]\nBluebell [RT]\nForget-me-not [RT]\nAllium [RT]\nAzure Bluet [RT]\nLily of the Valley [RT]\nShadow Rose [RT]\nFurnace [R]\nWorkbench [R]\nBlock of Diamond\nMaple Door [O,R]\n_Maple Door Top [O,R]\nMaple Trapdoor [O,R]\nAspen Sapling\nMaple Sapling\nJungle Sapling\nPlum Sapling\nPine Sapling\nCedar Sapling\nChest [R]\nProtector\nFat Cactus [G]\nDry Fat Cactus\nMaple Ladder [R]\nVines [G,R]\nIron Ladder [R]\nWhite Planks\nOrange Planks\nMagenta Planks\nLight Blue Planks\nYellow Planks\nLime Planks\nPink Planks\nGray Planks\nLight Gray Planks\nCyan Planks\nPurple Planks\nBlue Planks\nBrown Planks\nGreen Planks\nRed Planks\nBlack Planks\nArtisan Bench\nWhite Ceramic [R]\nOrange Ceramic [R]\nMagenta Ceramic [R]\nLight Blue Ceramic [R]\nYellow Ceramic [R]\nLime Ceramic [R]\nPink Ceramic [R]\nGray Ceramic [R]\nLight Gray Ceramic [R]\nCyan Ceramic [R]\nPurple Ceramic [R]\nBlue Ceramic [R]\nBrown Ceramic [R]\nGreen Ceramic [R]\nRed Ceramic [R]\nBlack Ceramic [R]\nWheat Seeds\nWheat_stage1\nWheat_stage2\nWheat_stage3\nWheat_stage4\nWheat_stage5\nWheat [FG]\nTilled Soil\nBread Block\nReservedBread BlockRotation1\nReservedBread BlockRotation2\nReservedBread BlockRotation3\nMossy Messy Stone\nWhite Bed [R]\n_White Bed Head [R]\nOrange Bed [R]\n_Orange Bed Head [R]\nMagenta Bed [R]\n_Magenta Bed Head [R]\nLight Blue Bed [R]\n_Light Blue Bed Head [R]\nYellow Bed [R]\n_Yellow Bed Head [R]\nLime Bed [R]\n_Lime Bed Head [R]\nPink Bed [R]\n_Pink Bed Head [R]\nGray Bed [R]\n_Gray Bed Head [R]\nLight Gray Bed [R]\n_Light Gray Bed Head [R]\nCyan Bed [R]\n_Cyan Bed Head [R]\nPurple Bed [R]\n_Purple Bed Head [R]\nBlue Bed [R]\n_Blue Bed Head [R]\nBrown Bed [R]\n_Brown Bed Head [R]\nGreen Bed [R]\n_Green Bed Head [R]\nRed Bed [R]\n_Red Bed Head [R]\nBlack Bed [R]\n_Black Bed Head [R]\nApple Block\nMoonstone Ore\nMoonstone Chest [R]\nBlock of Moonstone\nMagma\nUseless Soil\nMarked Sandstone\nRed Sandstone\nSmooth Red Sandstone\nEngraved Red Sandstone\nMarked Red Sandstone\nGreen Stone\nGreen Bricks\nDark Green Bricks\nSandstone Bricks\nEngraved Diorite\nDiorite Bricks\nEngraved Andesite\nAndesite Bricks\nEngraved Granite\nGranite Bricks\nIce Bricks\nPlaceholder Packed Ice\nPlaceholder Blue Ice\nPlum Leaves [TC]\nCedar Leaves [TC]\nPalm Leaves [TC]\nPalm Log [TB]\nPalm Wood Planks\nPalm Sapling\nPine Door [O,R]\n_Pine Door Top [O,R]\nPlum Door [O,R]\n_Plum Door Top [O,R]\nCedar Door [O,R]\n_Cedar Door Top [O,R]\nAspen Door [O,R]\n_Aspen Door Top [O,R]\nJungle Door [O,R]\n_Jungle Door Top [O,R]\nPalm Door [O,R]\n_Palm Door Top [O,R]\nPine Trapdoor [O,R]\nPlum Trapdoor [O,R]\nCedar Trapdoor [O,R]\nAspen Trapdoor [O,R]\nJungle Trapdoor [O,R]\nPalm Trapdoor [O,R]\nRed Sand\nRed Sandstone Bricks\nRocky Dirt\nAutumn Maple Leaves [TC]\nFallen Maple Leaves [H,R]\nMaple Slab [H,R]\nPine Slab [H,R]\nPlum Slab [H,R]\nCedar Slab [H,R]\nAspen Slab [H,R]\nJungle Slab [H,R]\nPalm Slab [H,R]\nDirt Slab [H,R]\nGrass Slab [H,R]\nMessy Stone Slab [H,R]\nStone Slab [H,R]\nSmooth Stone Slab [H,R]\nEngraved Stone Slab [H,R]\nStone Bricks Slab [H,R]\nMossy Stone Slab [H,R]\nMossy Stone Bricks Slab [H,R]\nAndesite Slab [H,R]\nSmooth Andesite Slab [H,R]\nEngraved Andesite Slab [H,R]\nAndesite Bricks Slab [H,R]\nDiorite Slab [H,R]\nSmooth Diorite Slab [H,R]\nEngraved Diorite Slab [H,R]\nDiorite Bricks Slab [H,R]\nGranite Slab [H,R]\nSmooth Granite Slab [H,R]\nEngraved Granite Slab [H,R]\nGranite Bricks Slab [H,R]\nSandstone Slab [H,R]\nSmooth Sandstone Slab [H,R]\nEngraved Sandstone Slab [H,R]\nMarked Sandstone Slab [H,R]\nSandstone Bricks Slab [H,R]\nRed Sandstone Slab [H,R]\nSmooth Red Sandstone Slab [H,R]\nEngraved Red Sandstone Slab [H,R]\nMarked Red Sandstone Slab [H,R]\nRed Sandstone Bricks Slab [H,R]\nBricks Slab [H,R]\nIce Bricks Slab [H,R]\nPlum Block\nCoconut Block\nPear Log [TB]\nPear Wood Planks\nPear Leaves [TC]\nPear Door [O,R]\n_Pear Door Top [O,R]\nPear Trapdoor [O,R]\nPear Sapling\nPear Slab [H,R]\nPear Block\nCompressed Messy Stone\nExtra Compressed Messy Stone\nSuper Compressed Messy Stone\nHyper Compressed Messy Stone\nUltra Compressed Messy Stone\nMega Compressed Messy Stone\nBoard [R]\nNet\nCobweb\nBrown Mushroom Block\nRed Mushroom Block\nMushroom Stem\nFireball Block\nIceball Block\nWatermelon Seeds [G]\nAttached Watermelon Stem [R]\nPumpkin Seeds [G]\nAttached Pumpkin Stem [R]\nPumpkin\nCarved Pumpkin [R]\nJack o\'Lantern [R]\nMelon Seeds [G]\nAttached Melon Stem [R]\nMelon\nIron Watermelon\nPatterned Black Glass\nPatterned Blue Glass\nPatterned Brown Glass\nPatterned Cyan Glass\nPatterned Gray Glass\nPatterned Light Gray Glass\nPatterned Green Glass\nPatterned Light Blue Glass\nPatterned Lime Glass\nPatterned Magenta Glass\nPatterned Orange Glass\nPatterned Pink Glass\nPatterned Purple Glass\nPatterned Red Glass\nPatterned White Glass\nPatterned Yellow Glass\nPotion Table [R]\nPine Ladder [R]\nPlum Ladder [R]\nCedar Ladder [R]\nAspen Ladder [R]\nJungle Ladder [R]\nPalm Ladder [R]\nPear Ladder [R]\nBlack Carpet\nBlue Carpet\nBrown Carpet\nCyan Carpet\nGray Carpet\nLight Gray Carpet\nGreen Carpet\nLight Blue Carpet\nLime Carpet\nMagenta Carpet\nOrange Carpet\nPink Carpet\nPurple Carpet\nRed Carpet\nWhite Carpet\nYellow Carpet\nBookshelf [B,R]\nEmpty Bookshelf [B,R]\nMailbox [R]\nRice [FG]\nRice_stage1\nRice_stage2\nRice_stage3\nRice_stage4\nRice_stage5\nCranberries\nCranberries_stage1\nCranberries_stage2\nRed Mushroom\nBrown Mushroom\nCotton Seeds\nCotton_stage1\nCotton_stage2\nCotton_stage3\nTribe Protector\nTall Grass [TP]\nFaction Protector\nBarkless Palm Log [TB]\nBarkless Pear Log [TB]\nMystery Block\nRocket\nSuper Rocket\nYellow Concrete Slab [H,R]\nWhite Concrete Slab [H,R]\nRed Concrete Slab [H,R]\nPurple Concrete Slab [H,R]\nPink Concrete Slab [H,R]\nOrange Concrete Slab [H,R]\nMagenta Concrete Slab [H,R]\nLime Concrete Slab [H,R]\nLight Gray Concrete Slab [H,R]\nLight Blue Concrete Slab [H,R]\nGreen Concrete Slab [H,R]\nGray Concrete Slab [H,R]\nCyan Concrete Slab [H,R]\nBrown Concrete Slab [H,R]\nBlue Concrete Slab [H,R]\nBlack Concrete Slab [H,R]\nGrenade\nCherry Log [TB]\nBarkless Cherry Log [TB]\nCherry Wood Planks\nCherry Leaves [TC]\nFallen Cherry Leaves [H,R]\nCherry Door [O,R]\n_Cherry Door Top [O,R]\nCherry Trapdoor [O,R]\nCherry Sapling\nCherry Slab [H,R]\nCherry Ladder [R]\nCherry Block\nBouncy Bomb Block\nObby Rocket\nWood Spikes\nStone Spikes\nIron Spikes\nGold Spikes\nDiamond Spikes\nKill Spikes\nCorn Block\nCorn Seeds [FG,G]\nCorn Seeds_stage1\nCorn Plant_stage1\nCorn Plant_stage2\nCorn Plant_stage3\nCorn Plant_stage4\nCorn Plant_stage5\nCorn Plant [FG]\nLoot Chest [R]\nMelting Ice [BK]\nYellow Paintball Explosive\nWhite Paintball Explosive\nRed Paintball Explosive\nPurple Paintball Explosive\nPink Paintball Explosive\nOrange Paintball Explosive\nMagenta Paintball Explosive\nLime Paintball Explosive\nLight Gray Paintball Explosive\nLight Blue Paintball Explosive\nGreen Paintball Explosive\nGray Paintball Explosive\nCyan Paintball Explosive\nBrown Paintball Explosive\nBlue Paintball Explosive\nBlack Paintball Explosive\nYellow Quick Paintball Explosive\nWhite Quick Paintball Explosive\nRed Quick Paintball Explosive\nPurple Quick Paintball Explosive\nPink Quick Paintball Explosive\nOrange Quick Paintball Explosive\nMagenta Quick Paintball Explosive\nLime Quick Paintball Explosive\nLight Gray Quick Paintball Explosive\nLight Blue Quick Paintball Explosive\nGreen Quick Paintball Explosive\nGray Quick Paintball Explosive\nCyan Quick Paintball Explosive\nBrown Quick Paintball Explosive\nBlue Quick Paintball Explosive\nBlack Quick Paintball Explosive\nYellow Seeking Paintball Explosive\nWhite Seeking Paintball Explosive\nRed Seeking Paintball Explosive\nPurple Seeking Paintball Explosive\nPink Seeking Paintball Explosive\nOrange Seeking Paintball Explosive\nMagenta Seeking Paintball Explosive\nLime Seeking Paintball Explosive\nLight Gray Seeking Paintball Explosive\nLight Blue Seeking Paintball Explosive\nGreen Seeking Paintball Explosive\nGray Seeking Paintball Explosive\nCyan Seeking Paintball Explosive\nBrown Seeking Paintball Explosive\nBlue Seeking Paintball Explosive\nBlack Seeking Paintball Explosive\nYellow Sticky Paintball Explosive\nWhite Sticky Paintball Explosive\nRed Sticky Paintball Explosive\nPurple Sticky Paintball Explosive\nPink Sticky Paintball Explosive\nOrange Sticky Paintball Explosive\nMagenta Sticky Paintball Explosive\nLime Sticky Paintball Explosive\nLight Gray Sticky Paintball Explosive\nLight Blue Sticky Paintball Explosive\nGreen Sticky Paintball Explosive\nGray Sticky Paintball Explosive\nCyan Sticky Paintball Explosive\nBrown Sticky Paintball Explosive\nBlue Sticky Paintball Explosive\nBlack Sticky Paintball Explosive\nWhite Strongbed [R]\n_White Strongbed Head [R]\nOrange Strongbed [R]\n_Orange Strongbed Head [R]\nMagenta Strongbed [R]\n_Magenta Strongbed Head [R]\nLight Blue Strongbed [R]\n_Light Blue Strongbed Head [R]\nYellow Strongbed [R]\n_Yellow Strongbed Head [R]\nLime Strongbed [R]\n_Lime Strongbed Head [R]\nPink Strongbed [R]\n_Pink Strongbed Head [R]\nGray Strongbed [R]\n_Gray Strongbed Head [R]\nLight Gray Strongbed [R]\n_Light Gray Strongbed Head [R]\nCyan Strongbed [R]\n_Cyan Strongbed Head [R]\nPurple Strongbed [R]\n_Purple Strongbed Head [R]\nBlue Strongbed [R]\n_Blue Strongbed Head [R]\nBrown Strongbed [R]\n_Brown Strongbed Head [R]\nGreen Strongbed [R]\n_Green Strongbed Head [R]\nRed Strongbed [R]\n_Red Strongbed Head [R]\nBlack Strongbed [R]\n_Black Strongbed Head [R]\nTimed Spike Bomb Block [FL]\nLava\nFat Brown Mushroom\nFat Red Mushroom\nChili Pepper Block\nChili Pepper Seeds [LV]\nChili Pepper Plant_stage1 [LV]\nChili Pepper Plant_stage2 [LV]\nChili Pepper Plant_stage3 [LV]\nChili Pepper Plant_stage4 [LV]\nChili Pepper Plant [FG,LV]\nChili Pepper Plant_stage5 [LV]\nCode Block\nToxin Ball Block\nSpawn Block (Yellow) [R]\nSpawn Block (White) [R]\nSpawn Block (Red) [R]\nSpawn Block (Purple) [R]\nSpawn Block (Pink) [R]\nSpawn Block (Orange) [R]\nSpawn Block (Magenta) [R]\nSpawn Block (Lime) [R]\nSpawn Block (Light Gray) [R]\nSpawn Block (Light Blue) [R]\nSpawn Block (Green) [R]\nSpawn Block (Gray) [R]\nSpawn Block (Cyan) [R]\nSpawn Block (Brown) [R]\nSpawn Block (Blue) [R]\nSpawn Block (Black) [R]\nCheckpoint Block [R]\nCustom Lobby Block [R]\nGenerator Spawn Block (Red)\nGenerator Spawn Block (Blue)\nGenerator Spawn Block (Lime)\nGenerator Spawn Block (Yellow)\nGenerator Spawn Block (Cyan)\nGenerator Spawn Block (White)\nGenerator Spawn Block (Pink)\nGenerator Spawn Block (Gray)\nTrader Shop Spawn Block [R]\nWizard Shop Spawn Block [R]\nGenerator Spawn Block (Diamond)\nGenerator Spawn Block (Moonstone)\nGenerator Spawn Block (Ore)\nGoal Block (Red)\nGoal Block (Blue)\nFinish Block\nDrop Location Block\nObby Death Block\nObby Absorb Block\nObby Absorb Death Block\nBone Block\nPig Spawner Block\nCow Spawner Block\nSheep Spawner Block\nCave Golem Spawner Block\nDraugr Zombie Spawner Block\nDraugr Skeleton Spawner Block\nEmpty Spawner Block\nFrost Golem Spawner Block\nFrost Zombie Spawner Block\nFrost Skeleton Spawner Block\nSnowy Messy Stone\nSnowy Stone Slab [H,R]\nDraugr Knight Spawner Block\nPacked Snow\nCarved Messy Stone\nSpectral Grass\nSpectral Log [TB]\nBarkless Spectral Log [TB]\nSpectral Wood Planks\nSpectral Leaves [TC]\nSpectral Door [O,R]\n_Spectral Door Top [O,R]\nSpectral Trapdoor [O,R]\nSpectral Sapling\nSpectral Slab [H,R]\nSpectral Ladder [R]\nWood Enchanting Table [R]\nStone Enchanting Table [R]\nIron Enchanting Table [R]\nGold Enchanting Table [R]\nDiamond Enchanting Table [R]\nPine Grass Block\nPine Grass Slab [H,R]\nPine Grass\nPine Fern\nFallen Pine Cone\nPine Cone Block\nWolf Spawner Block\nBear Spawner Block\nDeer Spawner Block\nStag Spawner Block\nBone Antlers [R]\nGold Antlers [R]\nGold Watermelon Stag Spawner Block\nSalvaging Table [R]\nChalk\nYellow Chalk\nWhite Chalk\nRed Chalk\nPurple Chalk\nPink Chalk\nOrange Chalk\nMagenta Chalk\nLime Chalk\nLight Gray Chalk\nLight Blue Chalk\nGreen Chalk\nGray Chalk\nCyan Chalk\nBrown Chalk\nBlue Chalk\nBlack Chalk\nYellow Chalk Bricks\nWhite Chalk Bricks\nRed Chalk Bricks\nPurple Chalk Bricks\nPink Chalk Bricks\nOrange Chalk Bricks\nMagenta Chalk Bricks\nLime Chalk Bricks\nLight Gray Chalk Bricks\nLight Blue Chalk Bricks\nGreen Chalk Bricks\nGray Chalk Bricks\nCyan Chalk Bricks\nBrown Chalk Bricks\nBlue Chalk Bricks\nBlack Chalk Bricks\nYellow Chalk Slab [H,R]\nWhite Chalk Slab [H,R]\nRed Chalk Slab [H,R]\nPurple Chalk Slab [H,R]\nPink Chalk Slab [H,R]\nOrange Chalk Slab [H,R]\nMagenta Chalk Slab [H,R]\nLime Chalk Slab [H,R]\nLight Gray Chalk Slab [H,R]\nLight Blue Chalk Slab [H,R]\nGreen Chalk Slab [H,R]\nGray Chalk Slab [H,R]\nCyan Chalk Slab [H,R]\nBrown Chalk Slab [H,R]\nBlue Chalk Slab [H,R]\nBlack Chalk Slab [H,R]\nYellow Chalk Bricks Slab [H,R]\nWhite Chalk Bricks Slab [H,R]\nRed Chalk Bricks Slab [H,R]\nPurple Chalk Bricks Slab [H,R]\nPink Chalk Bricks Slab [H,R]\nOrange Chalk Bricks Slab [H,R]\nMagenta Chalk Bricks Slab [H,R]\nLime Chalk Bricks Slab [H,R]\nLight Gray Chalk Bricks Slab [H,R]\nLight Blue Chalk Bricks Slab [H,R]\nGreen Chalk Bricks Slab [H,R]\nGray Chalk Bricks Slab [H,R]\nCyan Chalk Bricks Slab [H,R]\nBrown Chalk Bricks Slab [H,R]\nBlue Chalk Bricks Slab [H,R]\nBlack Chalk Bricks Slab [H,R]\nLeaf Bed [R]\n_Leaf Bed Head [R]\nJungle Grass Block\nJungle Grass Slab [H,R]\nJungle Tall Grass [TP]\nCatnip\nMango Log [TB]\nBarkless Mango Log [TB]\nMango Wood Planks\nMango Leaves [TC]\nMango Door [O,R]\n_Mango Door Top [O,R]\nMango Trapdoor [O,R]\nMango Sapling\nMango Slab [H,R]\nMango Ladder [R]\nMango Block\nBanana Block\nBanana Seeds [G]\nAttached Banana Stem [R]\nDangling Rope\nDangling Vine\nGorilla Spawner Block\nWildcat Spawner Block\nFruity Maple Leaves\nPine Cone Leaves\nFruity Plum Leaves\nFruity Palm Leaves\nFruity Pear Leaves\nFruity Cherry Leaves\nFruity Mango Leaves\nDraugr Huntress Spawner Block\nMagma Golem Spawner Block\nBlack Portal\nBlue Portal\nBrown Portal\nCyan Portal\nGray Portal\nGreen Portal\nGrey Portal\nLight Blue Portal\nLight Gray Portal\nLime Portal\nMagenta Portal\nOrange Portal\nPink Portal\nPurple Portal\nRed Portal\nWhite Portal\nYellow Portal\nLeather Block\nHorse Spawner Block\nTomato Plant [FG,TP]\nTomato Plant_stage1\nCarrot Plant [FG]\nCarrot Plant_stage1\nPotato Plant [FG]\nPotato Plant_stage1\nStrawberry Bush\nStrawberry Bush_stage1\nStrawberry Bush_stage2\nSugar Cane Plant [FG,TP]\nSugar Cane Plant_stage1\nLettuce Plant [FG]\nLettuce Plant_stage1\nCoffee Plant [FG]\nCoffee Plant_stage1\nCauliflower Plant [FG]\nCauliflower Plant_stage1\nParsnip Plant [FG]\nParsnip Plant_stage1\nBlueberry Bush\nBlueberry Bush_stage1\nBlueberry Bush_stage2\nRed Cabbage Plant [FG]\nRed Cabbage Plant_stage1\nBeetroot Plant [FG]\nBeetroot Plant_stage1\nAutumn Aspen Leaves [TC]\nAutumn Fern\nIron Chest [R]\nCrate\nCarrot Block\nCarrot Seeds\nPotato Block\nPotato Seeds\nBeetroot Block\nBeetroot Seeds\nWhite Banner [H,R]\n_White Banner Flag [H,R]\nOrange Banner [H,R]\n_Orange Banner Flag [H,R]\nMagenta Banner [H,R]\n_Magenta Banner Flag [H,R]\nLight Blue Banner [H,R]\n_Light Blue Banner Flag [H,R]\nYellow Banner [H,R]\n_Yellow Banner Flag [H,R]\nLime Banner [H,R]\n_Lime Banner Flag [H,R]\nPink Banner [H,R]\n_Pink Banner Flag [H,R]\nGray Banner [H,R]\n_Gray Banner Flag [H,R]\nLight Gray Banner [H,R]\n_Light Gray Banner Flag [H,R]\nCyan Banner [H,R]\n_Cyan Banner Flag [H,R]\nPurple Banner [H,R]\n_Purple Banner Flag [H,R]\nBlue Banner [H,R]\n_Blue Banner Flag [H,R]\nBrown Banner [H,R]\n_Brown Banner Flag [H,R]\nGreen Banner [H,R]\n_Green Banner Flag [H,R]\nRed Banner [H,R]\n_Red Banner Flag [H,R]\nBlack Banner [H,R]\n_Black Banner Flag [H,R]\nDraugr Banner [H,R]\n_Draugr Banner Flag [H,R]\nSpirit Golem Spawner Block\nSpirit Wolf Spawner Block\nSpirit Bear Spawner Block\nSpirit Stag Spawner Block\nSpirit Gorilla Spawner Block\nFertilised Soil\n_Grant Wool Top Left [R]\n_Grant Wool Top Right [R]\nGrant Wool [R]\n_Grant Wool Bottom Right [R]\n_Stampede Top Left [R]\n_Stampede Top Right [R]\nStampede [R]\n_Stampede Bottom Right [R]\n_Unforgotten Pig Top Left [R]\n_Unforgotten Pig Top Right [R]\nUnforgotten Pig [R]\n_Unforgotten Pig Bottom Right [R]\n_Sunbathed Gallope Top Left [R]\n_Sunbathed Gallope Top Right [R]\nSunbathed Gallope [R]\n_Sunbathed Gallope Bottom Right [R]\n_Dreaming Canine Top Left [R]\n_Dreaming Canine Top Right [R]\nDreaming Canine [R]\n_Dreaming Canine Bottom Right [R]\n_A Doe Through The Green Top Left [R]\n_A Doe Through The Green Top Right [R]\nA Doe Through The Green [R]\n_A Doe Through The Green Bottom Right [R]\n_Whiskers Top Left [R]\n_Whiskers Top Right [R]\nWhiskers [R]\n_Whiskers Bottom Right [R]\nHollow Crate\nDraugr Warper Spawner Block\nRadar [R]\n_Radar Back [R]\n_Radar Dish [R]\nInactive Radar [R]\n_Inactive Radar Back [R]\n_Inactive Radar Dish [R]\nActive Radar [R]\n_Active Radar Back [R]\n_Active Radar Dish [R]\nLucky Block\nUltra Lucky Block\nGold Trophy [R]\nSmall Magenta Pod\n_Small Magenta Pod Mid\n_Small Magenta Pod Top\nSmall Light Gray Pod\n_Small Light Gray Pod Mid\n_Small Light Gray Pod Top\nSmall Red Pod\n_Small Red Pod Mid\n_Small Red Pod Top\nINTERNAL_MESH_Gold Trophy\nFrost Wraith Spawner Block\nDraugr Reaver Spawner Block\nSmall White Pod\n_Small White Pod Mid\n_Small White Pod Top\nSmall Orange Pod\n_Small Orange Pod Mid\n_Small Orange Pod Top\nSmall Light Blue Pod\n_Small Light Blue Pod Mid\n_Small Light Blue Pod Top\nSmall Yellow Pod\n_Small Yellow Pod Mid\n_Small Yellow Pod Top\nSmall Lime Pod\n_Small Lime Pod Mid\n_Small Lime Pod Top\nSmall Pink Pod\n_Small Pink Pod Mid\n_Small Pink Pod Top\nSmall Gray Pod\n_Small Gray Pod Mid\n_Small Gray Pod Top\nSmall Cyan Pod\n_Small Cyan Pod Mid\n_Small Cyan Pod Top\nSmall Purple Pod\n_Small Purple Pod Mid\n_Small Purple Pod Top\nSmall Blue Pod\n_Small Blue Pod Mid\n_Small Blue Pod Top\nSmall Brown Pod\n_Small Brown Pod Mid\n_Small Brown Pod Top\nSmall Green Pod\n_Small Green Pod Mid\n_Small Green Pod Top\nSmall Black Pod\n_Small Black Pod Mid\n_Small Black Pod Top\nSkull Banner [H,R]\n_Skull Banner Flag [H,R]\nRainbow Banner [H,R]\n_Rainbow Banner Flag [H,R]\nDuo Blocchino Statue\nBebek Bebek Bebek Statue\nBobino Musculino Statue\nBobzilla Statue\nBrra Brra Pachim Statue\nCapitano Explovissimo Statue\nCappuccino Ninjino Statue\nChimpanzano Bananano Statue\nIl Wizardini Del Porko Statue\nLucchia Blocchi Statue\nMonsieur Bedwar Statue\nTwirlina Cappucina Statue\nWeapon Lucky Block\nBoiling Pot\nChopping Board\nFrying Pan\nHob Boiling\nHob Frying\nKitchen Worktop\nSlicing Board\nWood Trophy [R]\nINTERNAL_MESH_Wood Trophy\nStone Trophy [R]\nINTERNAL_MESH_Stone Trophy\nIron Trophy [R]\nINTERNAL_MESH_Iron Trophy\nDiamond Trophy [R]\nINTERNAL_MESH_Diamond Trophy\nMoonstone Trophy [R]\nINTERNAL_MESH_Moonstone Trophy\nBlack Wave\nBlue Wave\nBrown Wave\nCyan Wave\nGreen Wave\nGrey Wave\nLight Blue Wave\nLight Grey Wave\nLime Wave\nMagenta Wave\nOrange Wave\nPink Wave\nPurple Wave\nRed Wave\nWhite Wave\nYellow Wave\nWhite Directional Arrow [R]\nOrange Directional Arrow [R]\nMagenta Directional Arrow [R]\nLight Blue Directional Arrow [R]\nYellow Directional Arrow [R]\nLime Directional Arrow [R]\nPink Directional Arrow [R]\nGrey Directional Arrow [R]\nLight Grey Directional Arrow [R]\nCyan Directional Arrow [R]\nPurple Directional Arrow [R]\nBlue Directional Arrow [R]\nBrown Directional Arrow [R]\nGreen Directional Arrow [R]\nRed Directional Arrow [R]\nBlack Directional Arrow [R]\nBin\nVending Machine [R]\n_Vending Machine Top [R]\nJob Application Statue\nJohn Beef Statue\n67 Statue\nColoured Wheel\nUFO\nTorch [H,R]\nYellow Torch [H,R]\nWhite Torch [H,R]\nRed Torch [H,R]\nPurple Torch [H,R]\nPink Torch [H,R]\nOrange Torch [H,R]\nMagenta Torch [H,R]\nLime Torch [H,R]\nLight Gray Torch [H,R]\nLight Blue Torch [H,R]\nGreen Torch [H,R]\nGray Torch [H,R]\nCyan Torch [H,R]\nBrown Torch [H,R]\nBlue Torch [H,R]\nBlack Torch [H,R]\nYellow Neon\nWhite Neon\nRed Neon\nPurple Neon\nPink Neon\nOrange Neon\nMagenta Neon\nLime Neon\nLight Gray Neon\nLight Blue Neon\nGreen Neon\nGray Neon\nCyan Neon\nBrown Neon\nBlue Neon\nBlack Neon\nLanding Pad\nWeak Jump Pad\nJump Pad\nStrong Jump Pad\nSuper Jump Pad\nInvisible Yellow Light\nInvisible White Light\nInvisible Red Light\nInvisible Purple Light\nInvisible Pink Light\nInvisible Orange Light\nInvisible Magenta Light\nInvisible Lime Light\nInvisible Light Gray Light\nInvisible Light Blue Light\nInvisible Green Light\nInvisible Gray Light\nInvisible Cyan Light\nInvisible Brown Light\nInvisible Blue Light\nInvisible Black Light\nInvisible Sky Light\nGun Lucky Block\nGhost Chest\nGhost Lucky Block\nGhost Mystery Block\nFootball\nPet Lucky Block\nGlowing Mushroom [H,R]\nCrystal [H,R]\nSlime Trail [R]\nOvergrown Grass Block\nOvergrown Pine Grass Block\nOvergrown Jungle Grass Block\nSmoke Block\nPipe\nAuto Miner [R]\n_Auto Miner Drill Front [R]\n_Auto Miner Drill Back [R]\n_Auto Miner Foot Front [R]\n_Auto Miner Body [R]\nAuto Crafter\nRocket Ship\n_Rocket Ship Southwest L2\n_Rocket Ship Southwest L3\n_Rocket Ship Southwest L4\n_Rocket Ship Southwest L5\n_Rocket Ship Southeast L1\n_Rocket Ship Southeast L2\n_Rocket Ship Southeast L3\n_Rocket Ship Southeast L4\n_Rocket Ship Southeast L5\n_Rocket Ship Northwest L1\n_Rocket Ship Northwest L2\n_Rocket Ship Northwest L3\n_Rocket Ship Northwest L4\n_Rocket Ship Northwest L5\n_Rocket Ship Northeast L1\n_Rocket Ship Northeast L2\n_Rocket Ship Northeast L3\n_Rocket Ship Northeast L4\n_Rocket Ship Northeast L5\nRocket Ship S2\nRocket Ship S3\nRocket Ship S4\nRocket Ship S5\nINTERNAL_MESH_Rocket Ship Full\nExtractor Pipe\nSplitter Pipe\nSolar Panel [R]\n_Solar Panel SE [R]\n_Solar Panel NW [R]\n_Solar Panel NE [R]\nWire\nFilter Pipe\nMerger Pipe\nAuto Harvester\nStalker Spawner Block\nLunite Ore\nBlock of Lunite\nLunite Auto Miner [R]\n_Lunite Auto Miner Drill Front [R]\n_Lunite Auto Miner Drill Back [R]\n_Lunite Auto Miner Foot Front [R]\n_Lunite Auto Miner Body [R]\nLunite Auto Crafter\nLunite Auto Harvester\nBowling Alley Floor\nCrone Spawner Block\nSlime Spawner Block\nIron Guardian Spawner Block\nGold Guardian Spawner Block\nDiamond Guardian Spawner Block\nMoonstone Guardian Spawner Block\nDry Grass Block\nOvergrown Dry Grass Block\nDead Bush\nDry Grass Slab [H,R]\nLantern [H,R]\nLily Pad [R]\nCamel Spawner Block\n_Hump Day Top Left [R]\n_Hump Day Top Right [R]\nHump Day [R]\n_Hump Day Bottom Right [R]\nRare Lucky Block\nSuper Lucky Block\nRare Weapon Lucky Block\nSuper Weapon Lucky Block\nBuilding Lucky Block\nRare Building Lucky Block\nSuper Building Lucky Block\nArmour Lucky Block\nRare Armour Lucky Block\nSuper Armour Lucky Block\nTools Lucky Block\nRare Tools Lucky Block\nSuper Tools Lucky Block\nFood Lucky Block\nRare Food Lucky Block\nSuper Food Lucky Block\nPotion Lucky Block\nRare Potion Lucky Block\nSuper Potion Lucky Block\nBlock Destroyer TNT\nMaple Stairs [H,R,SC]\nPine Stairs [H,R,SC]\nPlum Stairs [H,R,SC]\nCedar Stairs [H,R,SC]\nAspen Stairs [H,R,SC]\nJungle Stairs [H,R,SC]\nPalm Stairs [H,R,SC]\nPear Stairs [H,R,SC]\nCherry Stairs [H,R,SC]\nSpectral Stairs [H,R,SC]\nMango Stairs [H,R,SC]\nMessy Stone Stairs [H,R,SC]\nStone Stairs [H,R,SC]\nSmooth Stone Stairs [H,R,SC]\nEngraved Stone Stairs [H,R,SC]\nStone Bricks Stairs [H,R,SC]\nMossy Stone Stairs [H,R,SC]\nMossy Stone Bricks Stairs [H,R,SC]\nAndesite Stairs [H,R,SC]\nSmooth Andesite Stairs [H,R,SC]\nEngraved Andesite Stairs [H,R,SC]\nAndesite Bricks Stairs [H,R,SC]\nDiorite Stairs [H,R,SC]\nSmooth Diorite Stairs [H,R,SC]\nEngraved Diorite Stairs [H,R,SC]\nDiorite Bricks Stairs [H,R,SC]\nGranite Stairs [H,R,SC]\nSmooth Granite Stairs [H,R,SC]\nEngraved Granite Stairs [H,R,SC]\nGranite Bricks Stairs [H,R,SC]\nSandstone Stairs [H,R,SC]\nSmooth Sandstone Stairs [H,R,SC]\nEngraved Sandstone Stairs [H,R,SC]\nMarked Sandstone Stairs [H,R,SC]\nSandstone Bricks Stairs [H,R,SC]\nRed Sandstone Stairs [H,R,SC]\nSmooth Red Sandstone Stairs [H,R,SC]\nEngraved Red Sandstone Stairs [H,R,SC]\nMarked Red Sandstone Stairs [H,R,SC]\nRed Sandstone Bricks Stairs [H,R,SC]\nBricks Stairs [H,R,SC]\nIce Bricks Stairs [H,R,SC]\nYellow Concrete Stairs [H,R,SC]\nWhite Concrete Stairs [H,R,SC]\nRed Concrete Stairs [H,R,SC]\nPurple Concrete Stairs [H,R,SC]\nPink Concrete Stairs [H,R,SC]\nOrange Concrete Stairs [H,R,SC]\nMagenta Concrete Stairs [H,R,SC]\nLime Concrete Stairs [H,R,SC]\nLight Gray Concrete Stairs [H,R,SC]\nLight Blue Concrete Stairs [H,R,SC]\nGreen Concrete Stairs [H,R,SC]\nGray Concrete Stairs [H,R,SC]\nCyan Concrete Stairs [H,R,SC]\nBrown Concrete Stairs [H,R,SC]\nBlue Concrete Stairs [H,R,SC]\nBlack Concrete Stairs [H,R,SC]\nYellow Chalk Stairs [H,R,SC]\nWhite Chalk Stairs [H,R,SC]\nRed Chalk Stairs [H,R,SC]\nPurple Chalk Stairs [H,R,SC]\nPink Chalk Stairs [H,R,SC]\nOrange Chalk Stairs [H,R,SC]\nMagenta Chalk Stairs [H,R,SC]\nLime Chalk Stairs [H,R,SC]\nLight Gray Chalk Stairs [H,R,SC]\nLight Blue Chalk Stairs [H,R,SC]\nGreen Chalk Stairs [H,R,SC]\nGray Chalk Stairs [H,R,SC]\nCyan Chalk Stairs [H,R,SC]\nBrown Chalk Stairs [H,R,SC]\nBlue Chalk Stairs [H,R,SC]\nBlack Chalk Stairs [H,R,SC]\nYellow Chalk Bricks Stairs [H,R,SC]\nWhite Chalk Bricks Stairs [H,R,SC]\nRed Chalk Bricks Stairs [H,R,SC]\nPurple Chalk Bricks Stairs [H,R,SC]\nPink Chalk Bricks Stairs [H,R,SC]\nOrange Chalk Bricks Stairs [H,R,SC]\nMagenta Chalk Bricks Stairs [H,R,SC]\nLime Chalk Bricks Stairs [H,R,SC]\nLight Gray Chalk Bricks Stairs [H,R,SC]\nLight Blue Chalk Bricks Stairs [H,R,SC]\nGreen Chalk Bricks Stairs [H,R,SC]\nGray Chalk Bricks Stairs [H,R,SC]\nCyan Chalk Bricks Stairs [H,R,SC]\nBrown Chalk Bricks Stairs [H,R,SC]\nBlue Chalk Bricks Stairs [H,R,SC]\nBlack Chalk Bricks Stairs [H,R,SC]\nToxic Waste Barrel\nToxic Waste\nAncient Maple Log\nEvil Lucky Block\nINTERNAL_MESH_Small Twin Icicle\nINTERNAL_MESH_Medium Icicle\nINTERNAL_MESH_Large Icicle\nINTERNAL_MESH_Large Twin Icicle\nNoticeboard Standing [R]\nNoticeboard Standing Top [R]\nNoticeboard Standing Bottom [R]\nNoticeboard Standing Left [R]\nNoticeboard Standing Right [R]\nNoticeboard Standing Top Left [R]\nNoticeboard Standing Top Right [R]\nNoticeboard Standing Bottom Left [R]\nNoticeboard Standing Bottom Right [R]\nNoticeboard Standing Leg [R]\nNoticeboard Wall [R]\nNoticeboard Wall Top [R]\nNoticeboard Wall Bottom [R]\nNoticeboard Wall Left [R]\nNoticeboard Wall Right [R]\nNoticeboard Wall Top Left [R]\nNoticeboard Wall Top Right [R]\nNoticeboard Wall Bottom Left [R]\nNoticeboard Wall Bottom Right [R]\nTiki Terror Spawner Block\nMaple Fence\n_Maple Fence Top\nPine Fence\n_Pine Fence Top\nPlum Fence\n_Plum Fence Top\nCedar Fence\n_Cedar Fence Top\nAspen Fence\n_Aspen Fence Top\nJungle Fence\n_Jungle Fence Top\nPalm Fence\n_Palm Fence Top\nPear Fence\n_Pear Fence Top\nCherry Fence\n_Cherry Fence Top\nSpectral Fence\n_Spectral Fence Top\nMango Fence\n_Mango Fence Top\nNoticeboard [R]\nStanding Noticeboard [R]\nPure Coal Ore\nPure Iron Ore\nPure Gold Ore\nPure Diamond Ore\nPure Moonstone Ore\nMaple Fence Gate [O,R]\n_Maple Fence Gate Top [O,R]\nPine Fence Gate [O,R]\n_Pine Fence Gate Top [O,R]\nPlum Fence Gate [O,R]\n_Plum Fence Gate Top [O,R]\nCedar Fence Gate [O,R]\n_Cedar Fence Gate Top [O,R]\nAspen Fence Gate [O,R]\n_Aspen Fence Gate Top [O,R]\nJungle Fence Gate [O,R]\n_Jungle Fence Gate Top [O,R]\nPalm Fence Gate [O,R]\n_Palm Fence Gate Top [O,R]\nPear Fence Gate [O,R]\n_Pear Fence Gate Top [O,R]\nCherry Fence Gate [O,R]\n_Cherry Fence Gate Top [O,R]\nSpectral Fence Gate [O,R]\n_Spectral Fence Gate Top [O,R]\nMango Fence Gate [O,R]\n_Mango Fence Gate Top [O,R]\nIron Goofy Golem Spawner Block\nGold Goofy Golem Spawner Block\nDiamond Goofy Golem Spawner Block\nMoonstone Goofy Golem Spawner Block\nCannon [R]\n_Cannon Bottom Front [R]\n_Cannon Barrel Back [R]\n_Cannon Barrel Front [R]\n_Cannon Top Back [R]\n_Cannon Top Front [R]\nCrystal Block\nRope Block\nAsh\nCoal Deposit\nIron Deposit\nStone Deposit\nCopper Deposit\nGold Deposit\nHomestead Core\nDrop Pad\nCopper Ore\nBurner Drill [R]\nCrusher [R]\nSmelter [R]\nGenerator [R]\nPress [R]\nWire Mill [R]\nConveyor Belt [R]\nSplitter [R]\nVoltite Ore\nAlloy Kiln [R]\nElectric Drill [R]\nAssembler [R]\nSorting Gate [R]\nBelt Loader [R]\nStorage Silo\nCharge Vault\nMachine Bench\nParts Bench\nTool Bench\n_Homestead Core Mid\n_Homestead Core Top\nTree Cutter [R]\nVoltite Deposit\nVolt Engine [R]\nDeep Drill [R]\nShatter Mill [R]\nSky Tap [R]\nFast Belt [R]\nCharging Pad\nCrystal Vat [R]\nStarframe\nForge Hopper\nComet Ore\nComet Heart\n_Starframe Spire\nRecycler [R]\nBelt Lift\nBelt Drop\nCrop Harvester [R]\nBelt Tunnel [R]\nPure Copper Ore\nPure Voltite Ore\nDarkstone\nDarkstone Bricks\nCracked Darkstone Bricks\nMolten Darkstone Bricks\nEngraved Darkstone\nSmooth Darkstone\nINTERNAL_MESH_Floor Quarters\nScorpion Eggs Block\nINTERNAL_MESH_Boss Target\nINTERNAL_MESH_Rune Sigil\nINTERNAL_MESH_Eclipse Dial\nINTERNAL_MESH_Beam Arm\nINTERNAL_MESH_Beam Arm Mirrored\nINTERNAL_MESH_Mortar\nTrading Terminal [R]\nStone Generator\nWheat Helper\nCarrot Helper\nMelon Helper\nShowcase\nPine Item Pedestal\nPlum Item Pedestal\nCedar Item Pedestal\nAspen Item Pedestal\nJungle Item Pedestal\nPalm Item Pedestal\nPear Item Pedestal\nCherry Item Pedestal\nSpectral Item Pedestal\nMango Item Pedestal\nUranium Ore\nUranium Deposit\nSky Spring\nAtomic Bench\nPump [R]\nCondenser [R]\nCentrifuge [R]\nSynthesizer [R]\nMob Farm [R]\nFluid Tank [R]\nReactor Controller [R]\nReactor Frame [R]\nReactor Casing\nReactor Glass [R]\nReactor Port [R]\nFuel Rod [R]\nGraphite Block\nCoolant Channel [R]\nReactor Slag\nAtomic Bomb\nBattery Controller [R]\nBattery Casing\nBattery Cell [R]\nCollider [R]\n_Collider Focus [R]\n_Collider Output [R]\nLaser [R]\nWireless Terminal [R]\nDense Silo\nExpress Belt [R]\nFast Loader [R]\nUranium Glass\nGlow Lamp\n_Jetpack Back\n_Atomic Spire\nIsotope Comet Ore\nIsotope Comet Heart\nFluid Pipe\nCoolant Mixer [R]\nCoolant Pipe\nScaffolding\nNova Trophy [R]\nUranium Block\nPure Uranium Ore\nCopper Block\nVoltite Block\nNova Bomb\n'
   }
 };
```

</details>

</details>

<details>
<summary><code>bundles/staging.bloxd.io/chunks/js/74.js</code> · modified · +1 / -1</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +1 / -1</summary>

```diff
@@ -1,7 +1,7 @@
 export const ⟦2-char-id⟧ = 74;
 export const ids = [74];
 export const modules = {
-  4148: ⟦2-char-id⟧ => {
+  4141: ⟦2-char-id⟧ => {
     ⟦2-char-id⟧.exports = "# Item Names (1532 items)\n\nWood Pickaxe\nStone Pickaxe\nIron Pickaxe\nGold Pickaxe\nDiamond Pickaxe\nMoonstone Pickaxe\nGolem Pickaxe\nWood Axe\nStone Axe\nIron Axe\nGold Axe\nDiamond Axe\nMoonstone Axe\nArtisan Axe\nWood Spade\nStone Spade\nIron Spade\nGold Spade\nDiamond Spade\nWood Sword\nStone Sword\nIron Sword\nGold Sword\nDiamond Sword\nKnight Sword\nWood Hoe\nStone Hoe\nIron Hoe\nGold Hoe\nDiamond Hoe\nFlashlight\nMining Helmet\nWood Helmet\nIron Helmet\nGold Helmet\nDiamond Helmet\nWood Chestplate\nIron Chestplate\nGold Chestplate\nDiamond Chestplate\nFur Chestplate\nWood Leggings\nIron Leggings\nGold Leggings\nDiamond Leggings\nWood Boots\nIron Boots\nGold Boots\nDiamond Boots\nSpiked Boots\nWood Gauntlets\nIron Gauntlets\nGold Gauntlets\nDiamond Gauntlets\nMilitary Helmet\nMilitary Chestplate\nMilitary Gauntlets\nMilitary Leggings\nMilitary Boots\nWhite Wood Helmet\nWhite Wood Chestplate\nWhite Wood Leggings\nWhite Wood Boots\nWhite Wood Gauntlets\nOrange Wood Helmet\nOrange Wood Chestplate\nOrange Wood Leggings\nOrange Wood Boots\nOrange Wood Gauntlets\nMagenta Wood Helmet\nMagenta Wood Chestplate\nMagenta Wood Leggings\nMagenta Wood Boots\nMagenta Wood Gauntlets\nLight Blue Wood Helmet\nLight Blue Wood Chestplate\nLight Blue Wood Leggings\nLight Blue Wood Boots\nLight Blue Wood Gauntlets\nYellow Wood Helmet\nYellow Wood Chestplate\nYellow Wood Leggings\nYellow Wood Boots\nYellow Wood Gauntlets\nLime Wood Helmet\nLime Wood Chestplate\nLime Wood Leggings\nLime Wood Boots\nLime Wood Gauntlets\nPink Wood Helmet\nPink Wood Chestplate\nPink Wood Leggings\nPink Wood Boots\nPink Wood Gauntlets\nGray Wood Helmet\nGray Wood Chestplate\nGray Wood Leggings\nGray Wood Boots\nGray Wood Gauntlets\nLight Gray Wood Helmet\nLight Gray Wood Chestplate\nLight Gray Wood Leggings\nLight Gray Wood Boots\nLight Gray Wood Gauntlets\nCyan Wood Helmet\nCyan Wood Chestplate\nCyan Wood Leggings\nCyan Wood Boots\nCyan Wood Gauntlets\nPurple Wood Helmet\nPurple Wood Chestplate\nPurple Wood Leggings\nPurple Wood Boots\nPurple Wood Gauntlets\nBlue Wood Helmet\nBlue Wood Chestplate\nBlue Wood Leggings\nBlue Wood Boots\nBlue Wood Gauntlets\nBrown Wood Helmet\nBrown Wood Chestplate\nBrown Wood Leggings\nBrown Wood Boots\nBrown Wood Gauntlets\nGreen Wood Helmet\nGreen Wood Chestplate\nGreen Wood Leggings\nGreen Wood Boots\nGreen Wood Gauntlets\nRed Wood Helmet\nRed Wood Chestplate\nRed Wood Leggings\nRed Wood Boots\nRed Wood Gauntlets\nBlack Wood Helmet\nBlack Wood Chestplate\nBlack Wood Leggings\nBlack Wood Boots\nBlack Wood Gauntlets\nShears\nArtisan Shears\nStick\nCoal\nRaw Iron\nIron Bar\nIron Fragment\nRaw Gold\nGold Bar\nGold Fragment\nDiamond\nDiamond Fragment\nMoonstone\nLunite\nMoonstone Fragment\nBowl\nPartially Full Bowl of Cranberries\nHalf Full Bowl of Cranberries\nNearly Full Bowl of Cranberries\nBowl of Cranberries\nMushroom Soup\nGlowing Soup\nNight Vision Soup\nCotton\nGold Crop\nBucket\nWater Bucket\nLava Bucket\nBoat\nINTERNAL_MESH_Boat\nObsidian Boat\nINTERNAL_MESH_Obsidian Boat\nSpeedboat\nINTERNAL_MESH_Speedboat\nWood Hang Glider\nINTERNAL_MESH_Wood Hang Glider\nIron Hang Glider\nINTERNAL_MESH_Iron Hang Glider\nGold Hang Glider\nINTERNAL_MESH_Gold Hang Glider\nDiamond Hang Glider\nINTERNAL_MESH_Diamond Hang Glider\nHovercraft\nINTERNAL_MESH_Hovercraft\nYellow Kart\nWhite Kart\nRed Kart\nPurple Kart\nPink Kart\nOrange Kart\nMagenta Kart\nLime Kart\nLight Gray Kart\nLight Blue Kart\nGreen Kart\nGray Kart\nCyan Kart\nBrown Kart\nBlue Kart\nBlack Kart\nINTERNAL_MESH_Yellow Kart\nINTERNAL_MESH_White Kart\nINTERNAL_MESH_Red Kart\nINTERNAL_MESH_Purple Kart\nINTERNAL_MESH_Pink Kart\nINTERNAL_MESH_Orange Kart\nINTERNAL_MESH_Magenta Kart\nINTERNAL_MESH_Lime Kart\nINTERNAL_MESH_Light Gray Kart\nINTERNAL_MESH_Light Blue Kart\nINTERNAL_MESH_Green Kart\nINTERNAL_MESH_Gray Kart\nINTERNAL_MESH_Cyan Kart\nINTERNAL_MESH_Brown Kart\nINTERNAL_MESH_Blue Kart\nINTERNAL_MESH_Black Kart\nOff Roader\nINTERNAL_MESH_Off Roader\nGold Mining Drill\nIron Mining Drill\nDiamond Mining Drill\nMoonstone Mining Drill\nArmored Car\nINTERNAL_MESH_Gold Mining Drill\nINTERNAL_MESH_Iron Mining Drill\nINTERNAL_MESH_Diamond Mining Drill\nINTERNAL_MESH_Moonstone Mining Drill\nINTERNAL_MESH_Armored Car\nLight Blue Car\nINTERNAL_MESH_Car\nSnowball\nSnowball Launcher\nPebble\nReinforced Pebble\nBullet\nBall\nReinforced Ball\nFrag Grenade\nMining Grenade\nSmoke Grenade\nMoonstone Orb\nFireball\nBouncy Bomb\nRPG\nObby RPG\nSuper RPG\nGrenade Launcher\nIceball\n67 Base Projectile\n67 Boosted Projectile\nCapitano Grenade\nScatter Pellet\nWood Bow\nWood Bow|meta|charging2\nWood Bow|meta|charging3\nWood Bow|meta|charging4\nStone Bow\nStone Bow|meta|charging2\nStone Bow|meta|charging3\nStone Bow|meta|charging4\nIron Bow\nIron Bow|meta|charging2\nIron Bow|meta|charging3\nIron Bow|meta|charging4\nGold Bow\nGold Bow|meta|charging2\nGold Bow|meta|charging3\nGold Bow|meta|charging4\nDiamond Bow\nDiamond Bow|meta|charging2\nDiamond Bow|meta|charging3\nDiamond Bow|meta|charging4\nWood Crossbow\nWood Crossbow|meta|charging2\nWood Crossbow|meta|charging3\nWood Crossbow|meta|charging4\nStone Crossbow\nStone Crossbow|meta|charging2\nStone Crossbow|meta|charging3\nStone Crossbow|meta|charging4\nIron Crossbow\nIron Crossbow|meta|charging2\nIron Crossbow|meta|charging3\nIron Crossbow|meta|charging4\nGold Crossbow\nGold Crossbow|meta|charging2\nGold Crossbow|meta|charging3\nGold Crossbow|meta|charging4\nDiamond Crossbow\nDiamond Crossbow|meta|charging2\nDiamond Crossbow|meta|charging3\nDiamond Crossbow|meta|charging4\nWood Crossbow Charged\nStone Crossbow Charged\nIron Crossbow Charged\nGold Crossbow Charged\nDiamond Crossbow Charged\nArrow\nCompass\nCompass|meta|dir2\nCompass|meta|dir3\nCompass|meta|dir4\nCompass|meta|dir5\nCompass|meta|dir6\nCompass|meta|dir7\nCompass|meta|dir8\nCompass|meta|dir9\nCompass|meta|dir10\nCompass|meta|dir11\nCompass|meta|dir12\nChunk Map\nBread\nBowl of Rice\nApple\nPlum\nCoconut\nCracked Coconut\nPear\nCherry\nBanana\nWatermelon Slice\nGold Watermelon Slice\nMelon Slice\nGold Melon Slice\nPumpkin Pie\nCorn\nCornbread\nChili Pepper\nMango\nCarrot\nGold Carrot\nRaw Potato\nBaked Potato\nBeetroot\nRaw Porkchop\nCooked Porkchop\nRaw Beef\nSteak\nRaw Mutton\nCooked Mutton\nRaw Venison\nCooked Venison\nRotten Flesh\nRotten Brain\nBone\nBone Meal\nLeather\nSaddle\nSpirit Saddle\nFur\nGolem Eye\nKnight Heart\nTeleport Heart\nFrost Shard\nMolten Cog\nChoir Bell\nSiege Core\nFlywheel\nRadiant Spark\nBrood Sac\nBandolier\nName Tag\nBook\nEmpty Bottle\nWater Bottle\nSlowness Potion\nSlowness Potion II\nSplash Slowness Potion\nSplash Slowness Potion II\nArrow of Slowness\nPoison Potion\nPoison Potion II\nSplash Poison Potion\nSplash Poison Potion II\nArrow of Poison\nWeakness Potion\nWeakness Potion II\nSplash Weakness Potion\nSplash Weakness Potion II\nArrow of Weakness\nInstant Damage Potion\nInstant Damage Potion II\nSplash Instant Damage Potion\nSplash Instant Damage Potion II\nArrow of Instant Damage\nMilk Potion\nSplash Milk Potion\nArrow of Milk\nSpeed Potion\nSpeed Potion II\nSplash Speed Potion\nSplash Speed Potion II\nArrow of Speed\nDefense Potion\nDefense Potion II\nSplash Defense Potion\nSplash Defense Potion II\nArrow of Defense\nStrength Potion\nStrength Potion II\nSplash Strength Potion\nSplash Strength Potion II\nArrow of Strength\nInvisibility Potion\nSplash Invisibility Potion\nArrow of Invisibility\nJump Potion\nJump Potion II\nSplash Jump Potion\nSplash Jump Potion II\nArrow of Jumping\nKnockback Potion\nSplash Knockback Potion\nSplash Knockback Potion II\nArrow of Knockback\nRegeneration Potion\nRegeneration Potion II\nSplash Regeneration Potion\nSplash Regeneration Potion II\nArrow of Regeneration\nInstant Healing Potion\nInstant Healing Potion II\nSplash Instant Healing Potion\nSplash Instant Healing Potion II\nArrow of Instant Healing\nHaste Potion\nHaste Potion II\nSplash Haste Potion\nSplash Haste Potion II\nArrow of Haste\nShield Potion\nShield Potion II\nSplash Shield Potion\nSplash Shield Potion II\nArrow of Shield\nDouble Jump Potion\nSplash Double Jump Potion\nArrow of Double Jump\nHeat Resistance Potion\nSplash Heat Resistance Potion\nArrow of Heat Resistance\nX-Ray Vision Potion\nSplash X-Ray Vision Potion\nArrow of X-Ray Vision\nMining Yield Potion\nMining Yield Potion II\nSplash Mining Yield Potion\nSplash Mining Yield Potion II\nArrow of Mining Yield\nBrain Rot Potion\nSplash Brain Rot Potion\nArrow of Brain Rot\nChaos Potion\nTeleportation Potion\nAmmo\nAK-47\nAK-47|RequiresAmmo\nM16\nM16|RequiresAmmo\nMP40\nMP40|RequiresAmmo\nTAR-21\nTAR-21|RequiresAmmo\nM1911\nM1911|RequiresAmmo\nOne Shot Pistol\nOne Shot Pistol|RequiresAmmo\nDouble Barrel\nDouble Barrel|RequiresAmmo\nAWP\nAWP|RequiresAmmo\nDeagle\nDeagle|RequiresAmmo\nStriker-12\nStriker-12|RequiresAmmo\nVSR\nVSR|RequiresAmmo\nDMR\nDMR|RequiresAmmo\nMinigun\nMinigun|RequiresAmmo\nFMR\nFMR|RequiresAmmo\nSKAR\nSKAR|RequiresAmmo\nBlock-19\nBlock-19|RequiresAmmo\nMini Izu\nMini Izu|RequiresAmmo\nGPMG\nGPMG|RequiresAmmo\nGold Coin\nUpdraft\nSnowdash\nFloor Creator\nMoonstone Remote Explosive\nMoonstone Remote\nIce Bridge\nMaple Planks Bridge\nMessy Stone Bridge\nYellow Balloon\nWhite Balloon\nRed Balloon\nPurple Balloon\nPink Balloon\nOrange Balloon\nMagenta Balloon\nLime Balloon\nLight Gray Balloon\nLight Blue Balloon\nGreen Balloon\nGray Balloon\nCyan Balloon\nBrown Balloon\nBlue Balloon\nBlack Balloon\nINTERNAL_MESH_Yellow Balloon\nINTERNAL_MESH_White Balloon\nINTERNAL_MESH_Red Balloon\nINTERNAL_MESH_Purple Balloon\nINTERNAL_MESH_Pink Balloon\nINTERNAL_MESH_Orange Balloon\nINTERNAL_MESH_Magenta Balloon\nINTERNAL_MESH_Lime Balloon\nINTERNAL_MESH_Light Gray Balloon\nINTERNAL_MESH_Light Blue Balloon\nINTERNAL_MESH_Green Balloon\nINTERNAL_MESH_Gray Balloon\nINTERNAL_MESH_Cyan Balloon\nINTERNAL_MESH_Brown Balloon\nINTERNAL_MESH_Blue Balloon\nINTERNAL_MESH_Black Balloon\nYellow Popup Tower\nWhite Popup Tower\nRed Popup Tower\nPurple Popup Tower\nPink Popup Tower\nOrange Popup Tower\nMagenta Popup Tower\nLime Popup Tower\nLight Gray Popup Tower\nLight Blue Popup Tower\nGreen Popup Tower\nGray Popup Tower\nCyan Popup Tower\nBrown Popup Tower\nBlue Popup Tower\nBlack Popup Tower\nYellow Paintball Gun\nWhite Paintball Gun\nRed Paintball Gun\nPurple Paintball Gun\nPink Paintball Gun\nOrange Paintball Gun\nMagenta Paintball Gun\nLime Paintball Gun\nLight Gray Paintball Gun\nLight Blue Paintball Gun\nGreen Paintball Gun\nGray Paintball Gun\nCyan Paintball Gun\nBrown Paintball Gun\nBlue Paintball Gun\nBlack Paintball Gun\nYellow Paintball\nWhite Paintball\nRed Paintball\nPurple Paintball\nPink Paintball\nOrange Paintball\nMagenta Paintball\nLime Paintball\nLight Gray Paintball\nLight Blue Paintball\nGreen Paintball\nGray Paintball\nCyan Paintball\nBrown Paintball\nBlue Paintball\nBlack Paintball\nYellow Heavy Paintball Gun\nWhite Heavy Paintball Gun\nRed Heavy Paintball Gun\nPurple Heavy Paintball Gun\nPink Heavy Paintball Gun\nOrange Heavy Paintball Gun\nMagenta Heavy Paintball Gun\nLime Heavy Paintball Gun\nLight Gray Heavy Paintball Gun\nLight Blue Heavy Paintball Gun\nGreen Heavy Paintball Gun\nGray Heavy Paintball Gun\nCyan Heavy Paintball Gun\nBrown Heavy Paintball Gun\nBlue Heavy Paintball Gun\nBlack Heavy Paintball Gun\nYellow Paintball Explosive Item\nWhite Paintball Explosive Item\nRed Paintball Explosive Item\nPurple Paintball Explosive Item\nPink Paintball Explosive Item\nOrange Paintball Explosive Item\nMagenta Paintball Explosive Item\nLime Paintball Explosive Item\nLight Gray Paintball Explosive Item\nLight Blue Paintball Explosive Item\nGreen Paintball Explosive Item\nGray Paintball Explosive Item\nCyan Paintball Explosive Item\nBrown Paintball Explosive Item\nBlue Paintball Explosive Item\nBlack Paintball Explosive Item\nYellow Sticky Paintball Explosive Item\nWhite Sticky Paintball Explosive Item\nRed Sticky Paintball Explosive Item\nPurple Sticky Paintball Explosive Item\nPink Sticky Paintball Explosive Item\nOrange Sticky Paintball Explosive Item\nMagenta Sticky Paintball Explosive Item\nLime Sticky Paintball Explosive Item\nLight Gray Sticky Paintball Explosive Item\nLight Blue Sticky Paintball Explosive Item\nGreen Sticky Paintball Explosive Item\nGray Sticky Paintball Explosive Item\nCyan Sticky Paintball Explosive Item\nBrown Sticky Paintball Explosive Item\nBlue Sticky Paintball Explosive Item\nBlack Sticky Paintball Explosive Item\nYellow Seeking Paintball Explosive Item\nWhite Seeking Paintball Explosive Item\nRed Seeking Paintball Explosive Item\nPurple Seeking Paintball Explosive Item\nPink Seeking Paintball Explosive Item\nOrange Seeking Paintball Explosive Item\nMagenta Seeking Paintball Explosive Item\nLime Seeking Paintball Explosive Item\nLight Gray Seeking Paintball Explosive Item\nLight Blue Seeking Paintball Explosive Item\nGreen Seeking Paintball Explosive Item\nGray Seeking Paintball Explosive Item\nCyan Seeking Paintball Explosive Item\nBrown Seeking Paintball Explosive Item\nBlue Seeking Paintball Explosive Item\nBlack Seeking Paintball Explosive Item\nYellow Quick Paintball Explosive Item\nWhite Quick Paintball Explosive Item\nRed Quick Paintball Explosive Item\nPurple Quick Paintball Explosive Item\nPink Quick Paintball Explosive Item\nOrange Quick Paintball Explosive Item\nMagenta Quick Paintball Explosive Item\nLime Quick Paintball Explosive Item\nLight Gray Quick Paintball Explosive Item\nLight Blue Quick Paintball Explosive Item\nGreen Quick Paintball Explosive Item\nGray Quick Paintball Explosive Item\nCyan Quick Paintball Explosive Item\nBrown Quick Paintball Explosive Item\nBlue Quick Paintball Explosive Item\nBlack Quick Paintball Explosive Item\nYellow Paint Bow\nYellow Paint Bow|meta|charging2\nYellow Paint Bow|meta|charging3\nYellow Paint Bow|meta|charging4\nWhite Paint Bow\nWhite Paint Bow|meta|charging2\nWhite Paint Bow|meta|charging3\nWhite Paint Bow|meta|charging4\nRed Paint Bow\nRed Paint Bow|meta|charging2\nRed Paint Bow|meta|charging3\nRed Paint Bow|meta|charging4\nPurple Paint Bow\nPurple Paint Bow|meta|charging2\nPurple Paint Bow|meta|charging3\nPurple Paint Bow|meta|charging4\nPink Paint Bow\nPink Paint Bow|meta|charging2\nPink Paint Bow|meta|charging3\nPink Paint Bow|meta|charging4\nOrange Paint Bow\nOrange Paint Bow|meta|charging2\nOrange Paint Bow|meta|charging3\nOrange Paint Bow|meta|charging4\nMagenta Paint Bow\nMagenta Paint Bow|meta|charging2\nMagenta Paint Bow|meta|charging3\nMagenta Paint Bow|meta|charging4\nLime Paint Bow\nLime Paint Bow|meta|charging2\nLime Paint Bow|meta|charging3\nLime Paint Bow|meta|charging4\nLight Gray Paint Bow\nLight Gray Paint Bow|meta|charging2\nLight Gray Paint Bow|meta|charging3\nLight Gray Paint Bow|meta|charging4\nLight Blue Paint Bow\nLight Blue Paint Bow|meta|charging2\nLight Blue Paint Bow|meta|charging3\nLight Blue Paint Bow|meta|charging4\nGreen Paint Bow\nGreen Paint Bow|meta|charging2\nGreen Paint Bow|meta|charging3\nGreen Paint Bow|meta|charging4\nGray Paint Bow\nGray Paint Bow|meta|charging2\nGray Paint Bow|meta|charging3\nGray Paint Bow|meta|charging4\nCyan Paint Bow\nCyan Paint Bow|meta|charging2\nCyan Paint Bow|meta|charging3\nCyan Paint Bow|meta|charging4\nBrown Paint Bow\nBrown Paint Bow|meta|charging2\nBrown Paint Bow|meta|charging3\nBrown Paint Bow|meta|charging4\nBlue Paint Bow\nBlue Paint Bow|meta|charging2\nBlue Paint Bow|meta|charging3\nBlue Paint Bow|meta|charging4\nBlack Paint Bow\nBlack Paint Bow|meta|charging2\nBlack Paint Bow|meta|charging3\nBlack Paint Bow|meta|charging4\nPig Spawn Orb\nCow Spawn Orb\nSheep Spawn Orb\nHorse Spawn Orb\nCamel Spawn Orb\nIron Goofy Golem Spawn Orb\nGold Goofy Golem Spawn Orb\nDiamond Goofy Golem Spawn Orb\nMoonstone Goofy Golem Spawn Orb\nDeer Spawn Orb\nSlime Spawn Orb\nWolf Spawn Orb\nWildcat Spawn Orb\nSpirit Golem Spawn Orb\nSpirit Wolf Spawn Orb\nSpirit Bear Spawn Orb\nSpirit Stag Spawn Orb\nSpirit Gorilla Spawn Orb\nBear Spawn Orb\nStag Spawn Orb\nGold Watermelon Stag Spawn Orb\nGorilla Spawn Orb\nCave Golem Spawn Orb\nDraugr Zombie Spawn Orb\nDraugr Skeleton Spawn Orb\nFrost Golem Spawn Orb\nFrost Zombie Spawn Orb\nFrost Skeleton Spawn Orb\nDraugr Knight Spawn Orb\nDraugr Huntress Spawn Orb\nMagma Golem Spawn Orb\nDraugr Warper Spawn Orb\nFrost Wraith Spawn Orb\nDraugr Reaver Spawn Orb\nStalker Spawn Orb\nCrone Spawn Orb\nIron Guardian Spawn Orb\nGold Guardian Spawn Orb\nDiamond Guardian Spawn Orb\nMoonstone Guardian Spawn Orb\nTiki Terror Spawn Orb\nMob Catcher\nCaught Mob Pig Default\nCaught Mob Cow Default\nCaught Mob Cow Cream\nCaught Mob Sheep Default\nCaught Mob Sheep Black\nCaught Mob Sheep Red\nCaught Mob Sheep Orange\nCaught Mob Sheep Pink\nCaught Mob Sheep Purple\nCaught Mob Sheep Yellow\nCaught Mob Sheep Blue\nCaught Mob Sheep Brown\nCaught Mob Sheep Cyan\nCaught Mob Sheep Gray\nCaught Mob Sheep Green\nCaught Mob Sheep Lightblue\nCaught Mob Sheep Lightgray\nCaught Mob Sheep Lime\nCaught Mob Sheep Magenta\nCaught Mob Horse Default\nCaught Mob Horse Black\nCaught Mob Horse Brown\nCaught Mob Horse Cream\nCaught Mob Camel Default\nCaught Mob Camel Brown\nCaught Mob Iron_Goofy_Golem Default\nCaught Mob Iron_Goofy_Golem Flaking\nCaught Mob Iron_Goofy_Golem Patchy\nCaught Mob Iron_Goofy_Golem Shedding\nCaught Mob Iron_Goofy_Golem Bare\nCaught Mob Iron_Goofy_Golem Stone\nCaught Mob Gold_Goofy_Golem Default\nCaught Mob Gold_Goofy_Golem Flaking\nCaught Mob Gold_Goofy_Golem Patchy\nCaught Mob Gold_Goofy_Golem Shedding\nCaught Mob Gold_Goofy_Golem Bare\nCaught Mob Gold_Goofy_Golem Stone\nCaught Mob Diamond_Goofy_Golem Default\nCaught Mob Diamond_Goofy_Golem Flaking\nCaught Mob Diamond_Goofy_Golem Patchy\nCaught Mob Diamond_Goofy_Golem Shedding\nCaught Mob Diamond_Goofy_Golem Bare\nCaught Mob Diamond_Goofy_Golem Stone\nCaught Mob Moonstone_Goofy_Golem Default\nCaught Mob Moonstone_Goofy_Golem Flaking\nCaught Mob Moonstone_Goofy_Golem Patchy\nCaught Mob Moonstone_Goofy_Golem Shedding\nCaught Mob Moonstone_Goofy_Golem Bare\nCaught Mob Moonstone_Goofy_Golem Stone\nCaught Mob Deer Default\nCaught Mob Slime Default\nCaught Mob Wolf Default\nCaught Mob Wolf White\nCaught Mob Wolf Brown\nCaught Mob Wolf Grey\nCaught Mob Wolf Spectral\nCaught Mob Wildcat Default\nCaught Mob Wildcat Tabby\nCaught Mob Wildcat Grey\nCaught Mob Wildcat Black\nCaught Mob Wildcat Calico\nCaught Mob Wildcat Siamese\nCaught Mob Wildcat Leopard\nCaught Mob Spirit_Golem Default\nCaught Mob Spirit_Wolf Default\nCaught Mob Spirit_Bear Default\nCaught Mob Spirit_Stag Default\nCaught Mob Spirit_Gorilla Default\nCaught Mob Bear Default\nCaught Mob Stag Default\nCaught Mob Gold_Watermelon_Stag Default\nCaught Mob Gorilla Default\nCaught Mob Cave_Golem Default\nCaught Mob Cave_Golem Iron\nCaught Mob Cave_Golem Corrupted\nCaught Mob Draugr_Zombie Default\nCaught Mob Draugr_Zombie Longhairchestplate\nCaught Mob Draugr_Zombie Longhairclothed\nCaught Mob Draugr_Zombie Shorthairclothed\nCaught Mob Draugr_Zombie Flower\nCaught Mob Draugr_Zombie Flower2\nCaught Mob Draugr_Zombie Mushroom\nCaught Mob Draugr_Zombie Vine\nCaught Mob Draugr_Zombie Vine2\nCaught Mob Draugr_Zombie Corrupted\nCaught Mob Draugr_Zombie Corrupted2\nCaught Mob Draugr_Skeleton Default\nCaught Mob Frost_Golem Default\nCaught Mob Frost_Zombie Default\nCaught Mob Frost_Zombie Longhairchestplate\nCaught Mob Frost_Zombie Shorthairclothed\nCaught Mob Frost_Skeleton Default\nCaught Mob Draugr_Knight Default\nCaught Mob Draugr_Huntress Default\nCaught Mob Draugr_Huntress Chainmail\nCaught Mob Magma_Golem Default\nCaught Mob Draugr_Warper Default\nCaught Mob Frost_Wraith Default\nCaught Mob Frost_Wraith Tattered\nCaught Mob Frost_Wraith Frostking\nCaught Mob Frost_Wraith Accursed\nCaught Mob Draugr_Reaver Default\nCaught Mob Stalker Default\nCaught Mob Stalker Crimson\nCaught Mob Stalker Frost\nCaught Mob Stalker Void\nCaught Mob Crone Default\nCaught Mob Iron_Guardian Default\nCaught Mob Gold_Guardian Default\nCaught Mob Diamond_Guardian Default\nCaught Mob Moonstone_Guardian Default\nCaught Mob Tiki_Terror Default\nCaught Mob Tiki_Terror Titan\nCaught Mob Tiki_Terror Tormentor\nCaught Mob Tiki_Terror Tyrant\nCaught Mob NPC Default\nCaught Mob NPC Emma\nCaught Mob NPC Leo\nCaught Mob NPC Isabel\nCaught Mob NPC Sanjay\nCaught Mob NPC Imara\nCaught Mob NPC Enoch\nCaught Mob NPC Sara\nCaught Mob NPC Carmen\nCaught Mob NPC Chef\nCaught Mob 67 Default\nCaught Mob Bobino_Musculino Default\nCaught Mob Capitano_Explovissimo Default\nCaught Mob Desert_Fennec Default\nCaught Mob Armour_Collector Default\nCaught Mob Furnace_Knight Default\nCaught Mob Lil_Knight Default\nCaught Mob Glass_Gremlin Default\nCaught Mob Glass_Bro Default\nCaught Mob Lord_Vulcan Default\nCaught Mob Zombie Default\nCaught Mob Skeleton Default\nCaught Mob Mummy Default\nCaught Mob Scorpion Default\nCaught Mob Vulcanite Default\nCaught Mob Evil_Tome Default\nCaught Mob Magma_Toad Default\nTimed Spike Bomb\nTimed Spike Bomb|meta|charging2\nTimed Spike Bomb|meta|charging3\nTimed Spike Bomb|meta|charging4\nToxin Ball\nAura XP Fragment\nAura XP Orb\nAura XP Potion\nAura XP Potion II\nSplash Aura XP Potion\nSplash Aura XP Potion II\nArrow of Aura XP\nFirecracker\nRainbow Firecracker\nYellow Firecracker\nWhite Firecracker\nRed Firecracker\nPurple Firecracker\nPink Firecracker\nOrange Firecracker\nMagenta Firecracker\nLime Firecracker\nLight Gray Firecracker\nLight Blue Firecracker\nGreen Firecracker\nGray Firecracker\nCyan Firecracker\nBrown Firecracker\nBlue Firecracker\nBlack Firecracker\nFirecracker Pebble\nRainbow Firecracker Pebble\nYellow Firecracker Pebble\nWhite Firecracker Pebble\nRed Firecracker Pebble\nPurple Firecracker Pebble\nPink Firecracker Pebble\nOrange Firecracker Pebble\nMagenta Firecracker Pebble\nLime Firecracker Pebble\nLight Gray Firecracker Pebble\nLight Blue Firecracker Pebble\nGreen Firecracker Pebble\nGray Firecracker Pebble\nCyan Firecracker Pebble\nBrown Firecracker Pebble\nBlue Firecracker Pebble\nBlack Firecracker Pebble\nWorldBuilder Wand\nRed Strongfish\nGreen Strongfish\nMoon Strongfish\nWheatfish\nMoonfish\nBombfish\nBoomerang Fish\nRoot Flounder\nAbyss Carp\nBoulder Bass\nBarnaclejaw\nCrystalized Wheatfish\nDarter\nShadow Darter\nElectric Eel\nGrass Snapper\nJungle Spinefish\nMangler Catfish\nMossback Arapaima\nSandbelly Piranha\nShadeback Ray\nMudbelly Tilapia\nMireback Carp\nRotslab Eel\nAether Minnow\nMurkborne Ray\nEldertide Leviathan\nOarfish\nAlpha Moon Strongfish\nBamboo Catfish\nBlackwater Bream\nBlackwater Leviathan\nBoned Sturgeon\nBull Shark\nChannel Sawfish\nCoastal Mullet\nCoelacanth\nDriftwood Catfish\nEagle Ray\nGiant Grouper\nGiant Moray\nGiant Stingray\nGolden Mahseer\nGreenfin Loach\nMangrove Herring\nMoonlit Boomerang Fish\nMoonstone Pupfish\nMudline Perch\nMurk Stingray\nNeedlefish\nNomai Moray\nPearlescent Moonfish\nRainbow Guppy\nRed Snapper\nReedglass Minnow\nReef Sardine\nRoot Perch\nRust Scad\nSeahorse\nSnakehead\nSpined Stickleback\nStone Grouper\nSumpback Carp\nSunset Minnow\nTarpon\nThreadfin Bream\nTri-Pointed Needlefish\nGame Dev Fish\nArmoured Searobin\nAsh Lionfish\nBarefrost Toothfish\nBlackfin Icefish\nBasalt Pipefish\nBrimstone Spikefish\nCinder Leviathan\nCrowned Flame Angelfish\nDeepwater Lanternfish\nDriftice Capelin\nEmber Chub\nEmbermark Wrasse\nEviota Vader\nFrost Herring\nFrost Wolf Eel\nFrostpaint Notie\nFrozen Grenadier\nGiant Trevally\nGlacial Lanternfish\nGlacial Silverfish\nHeatwarp Flounder\nHatchetfish\nIce Spined Notothenia\nIceshelf Skate\nIcy Sculpin\nLavaflow Trout\nLavawake Slopefish\nMagma Sardinella\nMagma Trout\nMarbled Moray Cod\nMolten Lotella Cod\nNorthern Wolffish\nPaleice Rockcod\nPermafrost Halibut\nPithead\nPolarflash Electron\nPyroclast Eel\nPyroscale Grouper\nRed Pyreside\nRimesnouted Lancetfish\nScorched Sunfish\nScored Dace\nSilver Dragonfish\nSnow Haddock\nVolcanic Catfish\nVolcanic Semperi\nRusty Rod\nLucky Rod\nSturdy Rod\nJungle Rod\nDraugr Rod\nCursed Rod\nTangle Resistant Rod\nSpeed Rod\nCarbon Rod\nDeep Sea Rod\nMaster Rod\nObsidian Rod\nMolten Magma Rod\nFrost Rod\nBlack Ice Rod\nMythic Rod\nAcorn\nAcorn Jelly\nCow's Milk\nCheese\nCaught Fish\nFish Fillet\nMeaty Bone\nBlinding Pebble\nSheep's Milk\nYoghurt Pot\nTruffle\nTruffle Oil\nOats\nPorridge\nDates\nDate Pudding\nPoop\nFertiliser\nMedkit\nWood Spear\nStone Spear\nIron Spear\nGold Spear\nDiamond Spear\nMoonstone Spear\nWood Dagger\nStone Dagger\nIron Dagger\nGold Dagger\nDiamond Dagger\nMoonstone Dagger\nWood Boomerang\nStone Boomerang\nIron Boomerang\nGold Boomerang\nDiamond Boomerang\nMoonstone Boomerang\nWood Club\nStone Club\nIron Club\nGold Club\nDiamond Club\nMoonstone Club\nWood Mace\nStone Mace\nIron Mace\nGold Mace\nDiamond Mace\nMoonstone Mace\nWood Whip\nStone Whip\nIron Whip\nGold Whip\nDiamond Whip\nMoonstone Whip\nBeef Stew\nChicken\nColeslaw\nEgg\nFish N Chips\nFried Rice\nLettuce\nOmelette\nOnion\nRed Cabbage\nRoast Dinner\nSalad\nStuffed Pepper\nSushi\nTomato\nVegetable Soup\nCommon Lottery Ticket\nUncommon Lottery Ticket\nRare Lottery Ticket\nEpic Lottery Ticket\nLegendary Lottery Ticket\nWood Clock\nWood Clock|meta|midnight\nWood Clock|meta|late_night\nWood Clock|meta|sunrise\nWood Clock|meta|early_day\nWood Clock|meta|late_day\nWood Clock|meta|sunset\nWood Clock|meta|early_night\nGold Clock\nGold Clock|meta|midnight\nGold Clock|meta|late_night\nGold Clock|meta|sunrise\nGold Clock|meta|early_day\nGold Clock|meta|late_day\nGold Clock|meta|sunset\nGold Clock|meta|early_night\nLucky Sword Upgrade\nLucky Armour Upgrade\nLucky Tools Upgrade\nLucky Clover\nVoid Net\nLucky Bomb\nUnlucky Bomb\nSwap Orb\nGolden Lucky Clover\nAmethite\nAmethite Fragment\nAmethite Pickaxe\nAmethite Axe\nAmethite Spade\nAmethite Sword\nAmethite Hoe\nAmethite Helmet\nAmethite Chestplate\nAmethite Leggings\nAmethite Boots\nAmethite Gauntlets\nAmethite Bow\nAmethite Bow|meta|charging2\nAmethite Bow|meta|charging3\nAmethite Bow|meta|charging4\nAmethite Crossbow\nAmethite Crossbow|meta|charging2\nAmethite Crossbow|meta|charging3\nAmethite Crossbow|meta|charging4\nAmethite Crossbow Charged\nAmethite Spear\nAmethite Dagger\nAmethite Boomerang\nAmethite Club\nAmethite Mace\nAmethite Whip\nMagmasteel\nMagmasteel Fragment\nMagmasteel Pickaxe\nMagmasteel Axe\nMagmasteel Spade\nMagmasteel Sword\nMagmasteel Hoe\nMagmasteel Helmet\nMagmasteel Chestplate\nMagmasteel Leggings\nMagmasteel Boots\nMagmasteel Gauntlets\nMagmasteel Bow\nMagmasteel Bow|meta|charging2\nMagmasteel Bow|meta|charging3\nMagmasteel Bow|meta|charging4\nMagmasteel Crossbow\nMagmasteel Crossbow|meta|charging2\nMagmasteel Crossbow|meta|charging3\nMagmasteel Crossbow|meta|charging4\nMagmasteel Crossbow Charged\nMagmasteel Spear\nMagmasteel Dagger\nMagmasteel Boomerang\nMagmasteel Club\nMagmasteel Mace\nMagmasteel Whip\nRubellite\nRubellite Fragment\nRubellite Pickaxe\nRubellite Axe\nRubellite Spade\nRubellite Sword\nRubellite Hoe\nRubellite Helmet\nRubellite Chestplate\nRubellite Leggings\nRubellite Boots\nRubellite Gauntlets\nRubellite Bow\nRubellite Bow|meta|charging2\nRubellite Bow|meta|charging3\nRubellite Bow|meta|charging4\nRubellite Crossbow\nRubellite Crossbow|meta|charging2\nRubellite Crossbow|meta|charging3\nRubellite Crossbow|meta|charging4\nRubellite Crossbow Charged\nRubellite Spear\nRubellite Dagger\nRubellite Boomerang\nRubellite Club\nRubellite Mace\nRubellite Whip\nSerpentite\nSerpentite Fragment\nSerpentite Pickaxe\nSerpentite Axe\nSerpentite Spade\nSerpentite Sword\nSerpentite Hoe\nSerpentite Helmet\nSerpentite Chestplate\nSerpentite Leggings\nSerpentite Boots\nSerpentite Gauntlets\nSerpentite Bow\nSerpentite Bow|meta|charging2\nSerpentite Bow|meta|charging3\nSerpentite Bow|meta|charging4\nSerpentite Crossbow\nSerpentite Crossbow|meta|charging2\nSerpentite Crossbow|meta|charging3\nSerpentite Crossbow|meta|charging4\nSerpentite Crossbow Charged\nSerpentite Spear\nSerpentite Dagger\nSerpentite Boomerang\nSerpentite Club\nSerpentite Mace\nSerpentite Whip\nCursemetal Helmet\nCursemetal Chestplate\nCursemetal Gauntlets\nCursemetal Leggings\nCursemetal Boots\nKingly Amethite Helmet\nKingly Amethite Chestplate\nKingly Amethite Gauntlets\nKingly Amethite Leggings\nKingly Amethite Boots\nKingly Diamond Helmet\nKingly Diamond Chestplate\nKingly Diamond Gauntlets\nKingly Diamond Leggings\nKingly Diamond Boots\nSanguine Shard\nSanguine Sword\nSanguine Bow\nSanguine Bow|meta|charging2\nSanguine Bow|meta|charging3\nSanguine Bow|meta|charging4\nSanguine Crossbow\nSanguine Crossbow|meta|charging2\nSanguine Crossbow|meta|charging3\nSanguine Crossbow|meta|charging4\nSanguine Crossbow Charged\nSanguine Spear\nSanguine Dagger\nSanguine Club\nSanguine Mace\nSanguine Whip\nSanguine Staff\nSanguine Helmet\nSanguine Chestplate\nSanguine Gauntlets\nSanguine Leggings\nSanguine Boots\nSpectral Shard\nSpectral Sword\nSpectral Bow\nSpectral Bow|meta|charging2\nSpectral Bow|meta|charging3\nSpectral Bow|meta|charging4\nSpectral Crossbow\nSpectral Crossbow|meta|charging2\nSpectral Crossbow|meta|charging3\nSpectral Crossbow|meta|charging4\nSpectral Crossbow Charged\nSpectral Spear\nSpectral Dagger\nSpectral Club\nSpectral Mace\nSpectral Whip\nSpectral Staff\nSpectral Helmet\nSpectral Chestplate\nSpectral Gauntlets\nSpectral Leggings\nSpectral Boots\nGeo Shard\nGeo Sword\nGeo Bow\nGeo Bow|meta|charging2\nGeo Bow|meta|charging3\nGeo Bow|meta|charging4\nGeo Crossbow\nGeo Crossbow|meta|charging2\nGeo Crossbow|meta|charging3\nGeo Crossbow|meta|charging4\nGeo Crossbow Charged\nGeo Spear\nGeo Dagger\nGeo Club\nGeo Mace\nGeo Whip\nGeo Staff\nGeo Helmet\nGeo Chestplate\nGeo Gauntlets\nGeo Leggings\nGeo Boots\nAstral Shard\nAstral Sword\nAstral Bow\nAstral Bow|meta|charging2\nAstral Bow|meta|charging3\nAstral Bow|meta|charging4\nAstral Crossbow\nAstral Crossbow|meta|charging2\nAstral Crossbow|meta|charging3\nAstral Crossbow|meta|charging4\nAstral Crossbow Charged\nAstral Spear\nAstral Dagger\nAstral Club\nAstral Mace\nAstral Whip\nAstral Staff\nAstral Helmet\nAstral Chestplate\nAstral Gauntlets\nAstral Leggings\nAstral Boots\nWooden Key\nStone Key\nIron Key\nGold Key\nDiamond Key\nCracked Rubellite Pickaxe\nGoldheart Engine\nDeepbite Drill Tip\nEmpty Fuel Cell\nBlackfire Fuel Cell\nDoom Rivet\nDoom Crest\nRaw Copper\nCopper Bar\nIron Grit\nGold Grit\nCopper Grit\nCharcoal\nRecall Beacon\nIron Hammer\nIron Plate\nCopper Wire\nMotor\nMachine Parts\nRelay Coil\nDeposit Seed (Copper)\nDeposit Seed (Gold)\nDeposit Seed (Voltite)\nDeposit Seed (Coal)\nDeposit Seed (Iron)\nDeposit Seed (Stone)\nSteel Bar\nGold Plate\nLogic Board\nMachine Hull\nRaw Voltite\nPower Coupler\nOre Lens\nHoming Beacon\nPull Charm\nVein Breaker\nVoltite Dust\nVoltite Cell\nSky Pack\nDusk Moss\nStar Alloy\nMoonstone Dust\nComet Shard\nComet Core\nStarbore Drill\nCore Tier 2\nCore Tier 3\nCore Tier 4\nCore Tier 5\nCore Tier 6\nCore Tier 7\nCore Tier 8\nCore Tier 9\nCore Tier 10\nArc Caster\nVoltplate Helmet\nVoltplate Chestplate\nVoltplate Gauntlets\nVoltplate Leggings\nVoltplate Boots\nWood Blade\nWood Guard\nWood Handle\nStone Blade\nStone Guard\nStone Handle\nIron Blade\nIron Guard\nIron Handle\nGold Blade\nGold Guard\nGold Handle\nDiamond Blade\nDiamond Guard\nDiamond Handle\nMoonstone Blade\nMoonstone Guard\nMoonstone Handle\nMagmasteel Blade\nMagmasteel Guard\nMagmasteel Handle\nSanguine Blade\nSanguine Guard\nSanguine Handle\nAstral Blade\nAstral Guard\nAstral Handle\nMoonstone Sword\nMagmaward Fuel\nRaw Uranium\nUranium Grit\nUranium Pellet\nPlutonium Pellet\nSpent Pellet\nGlow Dust\nBiomass\nGraphite\nContainment Plate\nHeat Exchanger\nFocus Lens\nNova Matter\nDeposit Seed (Uranium)\nReactor Blueprint\nWrench\nAdvanced Coupler\nNova Coupler\nCore Tier 11\nCore Tier 12\nCore Tier 13\nCore Tier 14\nCore Tier 15\nJet Chestplate\nNova Jet Chestplate\nNova Helmet\nNova Chestplate\nNova Gauntlets\nNova Leggings\nNova Boots\nNova Blade\nMob Cage\nCaged Pig\nCaged Cow\nCaged Sheep\nCaged Deer\nCaged Stag\nNova Multitool\nPocket Terminal\nComet Beacon\nNova Wrench\n"
   }
 };
```

</details>

</details>

<details>
<summary><code>bundles/staging.bloxd.io/chunks/js/75.js</code> · modified · +1 / -1</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +1 / -1</summary>

```diff
@@ -1,7 +1,7 @@
 export const ⟦2-char-id⟧ = 75;
 export const ids = [75];
 export const modules = {
-  4153: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  4147: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       default: () => ⟦2-char-id⟧
     });
```

</details>

</details>
