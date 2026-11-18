# Historical build diff — part 023

- Base: e7e20713782fba2472c7866f1ac5b84e503e7647
- Build: 9ad456477d01ce4e7883eecb0f575724f962561f
- Files in this part: 5

<details>
<summary><code>bundles/bloxd.io/chunks/js/91.js</code> · modified · +917 / -917</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +8 / -8</summary>

```diff
@@ -1,18 +1,18 @@
 export const ⟦2-char-id⟧ = 91;
 export const ids = [91, 176];
 export const modules = {
-  8468: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  8512: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       EverythingMenu: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(47),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(926),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(933),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1086),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(942),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1843),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1009),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1078),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(946),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1815),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(993),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let {
```

</details>

<details>
<summary>Hunk 2 · Change · +3 / -3</summary>

```diff
@@ -24,14 +24,14 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.h)(), ⟦2-char-id⟧ = [];
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.i)(), ⟦2-char-id⟧ = [];
       for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
         var ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.length - 1];
         var ⟦2-char-id⟧;
-        if (⟦2-char-id⟧ && ⟦2-char-id⟧.title === (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.section) && void 0 !== ⟦2-char-id⟧ ? GJ : null)) ⟦2-char-id⟧.items.push(⟦2-char-id⟧);
+        if (⟦2-char-id⟧ && ⟦2-char-id⟧.title === (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.section) && void 0 !== ⟦2-char-id⟧ ? uB : null)) ⟦2-char-id⟧.items.push(⟦2-char-id⟧);
         else ⟦2-char-id⟧.push({
-          title: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.section) && void 0 !== ⟦2-char-id⟧ ? fJ : null,
+          title: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.section) && void 0 !== ⟦2-char-id⟧ ? HB : null,
           items: [⟦2-char-id⟧]
         })
       }
```

</details>

<details>
<summary>Hunk 3 · Change · +17 / -17</summary>

```diff
@@ -60,35 +60,35 @@
                 },
                 children: [⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
                   className: "MenuSideBarBodyTabIcon",
-                  children: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.iconElement) && void 0 !== ⟦2-char-id⟧ ? cJ : (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+                  children: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.iconElement) && void 0 !== ⟦2-char-id⟧ ? TB : (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                     name: ⟦2-char-id⟧.faIcon
                   })
                 }), (!⟦2-char-id⟧ || !⟦2-char-id⟧) && (0, ⟦2-char-id⟧.jsx)("div", {
                   children: ⟦2-char-id⟧(⟦2-char-id⟧.title)
-                }), ⟦2-char-id⟧.redDot && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+                }), ⟦2-char-id⟧.redDot && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
                   top: "-0.2rem",
                   right: "-1rem"
                 })]
               }, ⟦2-char-id⟧.id)
             }))]
-          }, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.title) && void 0 !== ⟦2-char-id⟧ ? UJ : ⟦2-char-id⟧)
+          }, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.title) && void 0 !== ⟦2-char-id⟧ ? yB : ⟦2-char-id⟧)
         }))
       })
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(2514),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1022),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2175),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1017),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1329),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(80),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1703),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2017),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2023),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1566),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1232),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4401),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(13),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8476);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(2488),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1011),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2139),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1002),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1324),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(95),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1679),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2006),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2011),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1555),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1225),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4411),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(21),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8520);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let {
```

</details>

<details>
<summary>Hunk 4 · Change · +2 / -2</summary>

```diff
@@ -96,10 +96,10 @@
       } = ⟦2-char-id⟧;
       const {
         clientEscMenuOptions: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.j)(["clientEscMenuOptions"]), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(6400), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(3600), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1);
+      } = (0, ⟦2-char-id⟧.m)(["clientEscMenuOptions"]), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(6400), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(3600), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1);
 
       function ⟦2-char-id⟧(⟦2-char-id⟧) {
-        const ⟦2-char-id⟧ = "screenshot" === ⟦2-char-id⟧ ? AJ : ⟦2-char-id⟧;
+        const ⟦2-char-id⟧ = "screenshot" === ⟦2-char-id⟧ ? JB : ⟦2-char-id⟧;
         ⟦2-char-id⟧(!0);
         const ⟦2-char-id⟧ = ⟦2-char-id⟧ ? "normals" : ⟦2-char-id⟧ ? "depth" : null;
         ⟦2-char-id⟧.devTools.downloadScene(⟦2-char-id⟧, {
```

</details>

<details>
<summary>Hunk 5 · Change · +2 / -2</summary>

```diff
@@ -120,10 +120,10 @@
           onClick: ⟦2-char-id⟧ => {
             ⟦2-char-id⟧.d.setClientEscMenuOptions({
               disableAmbientOcclusion: ⟦2-char-id⟧
-            }), ⟦2-char-id⟧((() => ⟦2-char-id⟧.l))
+            }), ⟦2-char-id⟧((() => ⟦2-char-id⟧.n))
           },
           circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
-        }), ⟦2-char-id⟧.devTools.supports("ambientLight") && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.h, {
+        }), ⟦2-char-id⟧.devTools.supports("ambientLight") && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.k, {
           name: "Ambient Lighting Intensity",
           min: 0,
           max: 1,
```

</details>

<details>
<summary>Hunk 6 · Change · +2 / -2</summary>

```diff
@@ -199,13 +199,13 @@
                   ⟦2-char-id⟧("screenshot")
                 },
                 disabled: ⟦2-char-id⟧,
-                children: [⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {}), "Download Screenshot"]
+                children: [⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {}), "Download Screenshot"]
               }), (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.d, {
                 onClick: () => {
                   ⟦2-char-id⟧("glb")
                 },
                 disabled: ⟦2-char-id⟧,
-                children: [⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {}), "Download GLB"]
+                children: [⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {}), "Download GLB"]
               })]
             })]
           }), (0, ⟦2-char-id⟧.jsx)("div", {
```

</details>

<details>
<summary>Hunk 7 · Change · +20 / -20</summary>

```diff
@@ -215,26 +215,26 @@
         })]
       })
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(112),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1028),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1098),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2516),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1406),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1168),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1133),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2578),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1817),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1389),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(235),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2027),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2039),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1259),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1112),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4301),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1357),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3129),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2328),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2009);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(138),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1020),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1089),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2491),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1407),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1147),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1113),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2554),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1791),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1393),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(279),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2015),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2028),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1249),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1096),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4284),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1353),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3154),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2315),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1997);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let {
```

</details>

<details>
<summary>Hunk 8 · Change · +2 / -2</summary>

```diff
@@ -242,10 +242,10 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), {
+      } = (0, ⟦2-char-id⟧.z)(), {
         data: ⟦2-char-id⟧,
         failed: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧.h, ⟦2-char-id⟧);
+      } = (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧.c, ⟦2-char-id⟧);
       return 0 === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) || null === ⟦2-char-id⟧ && !⟦2-char-id⟧ ? null : (0, ⟦2-char-id⟧.jsxs)("div", {
         className: "SettingBox AccountSettingsPaymentHistory",
         children: [(0, ⟦2-char-id⟧.jsx)("div", {
```

</details>

<details>
<summary>Hunk 9 · Change · +1 / -1</summary>

```diff
@@ -258,7 +258,7 @@
           className: "PaymentHistoryList",
           children: ⟦2-char-id⟧.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsxs)("li", {
             className: "PaymentHistoryEntry",
-            children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
+            children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
               entry: ⟦2-char-id⟧
             }), (0, ⟦2-char-id⟧.jsxs)("div", {
               className: "PaymentHistoryEntryText",
```

</details>

<details>
<summary>Hunk 10 · Change · +7 / -7</summary>

```diff
@@ -266,27 +266,27 @@
                 children: (0, ⟦2-char-id⟧.j)(⟦2-char-id⟧, ⟦2-char-id⟧)
               }), (0, ⟦2-char-id⟧.jsxs)("div", {
                 className: "PaymentHistoryEntryDate",
-                children: [new Date(⟦2-char-id⟧.at).toLocaleDateString(), "number" === typeof ⟦2-char-id⟧.orderId && ` \xb7 ${ZJ("paymentHistory:order",{orderId:JJ.orderId})}`]
+                children: [new Date(⟦2-char-id⟧.at).toLocaleDateString(), "number" === typeof ⟦2-char-id⟧.orderId && ` \xb7 ${dB("paymentHistory:order",{orderId:BB.orderId})}`]
               })]
             })]
-          }, (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧))))
+          }, (0, ⟦2-char-id⟧.b)(⟦2-char-id⟧))))
         })]
       })
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1144),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1247),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1126),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1235),
       ⟦2-char-id⟧ = ⟦2-char-id⟧(1201);
 
     function ⟦2-char-id⟧() {
       const {
         userContext: ⟦2-char-id⟧,
         isUserContextUpdating: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.d)(), {
+      } = (0, ⟦2-char-id⟧.b)(), {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), ⟦2-char-id⟧ = ⟦2-char-id⟧ || ⟦2-char-id⟧;
+      } = (0, ⟦2-char-id⟧.z)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), ⟦2-char-id⟧ = ⟦2-char-id⟧ || ⟦2-char-id⟧;
       return (0, ⟦2-char-id⟧.jsxs)("div", {
         className: "AccountSettingsDeleteAccountButtonContainer",
-        children: [(0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.I, {
+        children: [(0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.K, {
           onClick: async function() {
             if (!⟦2-char-id⟧) {
               ⟦2-char-id⟧(!0);
```

</details>

<details>
<summary>Hunk 11 · Change · +7 / -7</summary>

```diff
@@ -296,24 +296,24 @@
                       title: "auth:deleteAccountPopupTitleNamed",
                       textOpts: {
                         title: {
-                          playerName: (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧.getPlayerName(), !⟦2-char-id⟧.featureFlags.canSeeRealPlayerNames)
+                          playerName: (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧.getPlayerName(), !⟦2-char-id⟧.featureFlags.canSeeRealPlayerNames)
                         }
                       },
-                      subtitle: (0, ⟦2-char-id⟧.b)() ? "auth:discordActivityDeleteAccountWarning" : "auth:deleteAccountWarning",
+                      subtitle: (0, ⟦2-char-id⟧.d)() ? "auth:discordActivityDeleteAccountWarning" : "auth:deleteAccountWarning",
                       confirmText: "auth:deleteAccount",
                       destructive: !0,
                       confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                       cancelText: "general:cancel",
                       cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
-                    }).getResult()) return ⟦2-char-id⟧.b.ok();
-                  const ⟦2-char-id⟧ = await (0, ⟦2-char-id⟧.postJsonWithMetricsCookiesAndJsonResponse)(`${bJ.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
+                    }).getResult()) return ⟦2-char-id⟧.d.ok();
+                  const ⟦2-char-id⟧ = await (0, ⟦2-char-id⟧.postJsonWithMetricsCookiesAndJsonResponse)(`${FB.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
                     gameState: ⟦2-char-id⟧.d.get("gameState")
                   }, {
                     retries: 3
                   }, ⟦2-char-id⟧.getMetricsCookies());
-                  if (⟦2-char-id⟧.error) return ⟦2-char-id⟧.b.error(⟦2-char-id⟧.error);
-                  (0, ⟦2-char-id⟧.b)() && (await ⟦2-char-id⟧.j.discordActivity()).exit("User deleted their account");
-                  return (0, ⟦2-char-id⟧.forgetStoredGuestAccount)(⟦2-char-id⟧.whamm), (0, ⟦2-char-id⟧.forceGlobalSignOut)(!0), ⟦2-char-id⟧.b.ok()
+                  if (⟦2-char-id⟧.error) return ⟦2-char-id⟧.d.error(⟦2-char-id⟧.error);
+                  (0, ⟦2-char-id⟧.d)() && (await ⟦2-char-id⟧.k.discordActivity()).exit("User deleted their account");
+                  return (0, ⟦2-char-id⟧.forgetStoredGuestAccount)(⟦2-char-id⟧.whamm), (0, ⟦2-char-id⟧.forceGlobalSignOut)(!0), ⟦2-char-id⟧.d.ok()
                 }(), ⟦2-char-id⟧ = ⟦2-char-id⟧.isError() ? ⟦2-char-id⟧.asError().message : null;
                 ⟦2-char-id⟧(⟦2-char-id⟧)
               } catch (⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 12 · Change · +5 / -5</summary>

```diff
@@ -326,17 +326,17 @@
           disabled: ⟦2-char-id⟧,
           children: [⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
             className: "DeletingAccountLoader",
-            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {})
-          }), ZJ("auth:deleteAccount")]
+            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {})
+          }), dB("auth:deleteAccount")]
         }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
           className: "DeleteAccountError",
           children: ⟦2-char-id⟧
         })]
       })
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(3072),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3086),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3080);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(3080),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3099),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3096);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let {
```

</details>

<details>
<summary>Hunk 13 · Change · +4 / -4</summary>

```diff
@@ -344,21 +344,21 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), {
+      } = (0, ⟦2-char-id⟧.z)(), {
         data: ⟦2-char-id⟧,
         failed: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧.e, ⟦2-char-id⟧), ⟦2-char-id⟧ = null === ⟦2-char-id⟧ ? null : (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧);
+      } = (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧.b, ⟦2-char-id⟧), ⟦2-char-id⟧ = null === ⟦2-char-id⟧ ? null : (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧);
       return (0, ⟦2-char-id⟧.jsxs)("div", {
         className: "SettingBox BlockedAndIgnoredPlayers",
         children: [(0, ⟦2-char-id⟧.jsx)("div", {
           className: "AccountSettingsLabel",
           children: ⟦2-char-id⟧("settingsMenu:blockedAndIgnoredPlayers")
-        }), null === ⟦2-char-id⟧ && !⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {}), null === ⟦2-char-id⟧ && ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)("div", {
+        }), null === ⟦2-char-id⟧ && !⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {}), null === ⟦2-char-id⟧ && ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)("div", {
           className: "BlockedAndIgnoredPlayersError",
           children: [⟦2-char-id⟧("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
             className: "SmallTextLight",
             onClick: () => {
-              ⟦2-char-id⟧.e.refresh()
+              ⟦2-char-id⟧.b.refresh()
             },
             children: ⟦2-char-id⟧("general:tryAgain")
           })]
```

</details>

<details>
<summary>Hunk 14 · Change · +2 / -2</summary>

```diff
@@ -381,9 +381,9 @@
               }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.g, {
                 className: "SmallTextLight",
                 onClick: () => {
-                  (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧, ⟦2-char-id⟧)
+                  (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧)
                 },
-                children: ⟦2-char-id⟧(⟦2-char-id⟧.h[⟦2-char-id⟧].text)
+                children: ⟦2-char-id⟧(⟦2-char-id⟧.g[⟦2-char-id⟧].text)
               })]
             }, ⟦2-char-id⟧)
           }))
```

</details>

<details>
<summary>Hunk 15 · Change · +5 / -5</summary>

```diff
@@ -399,19 +399,19 @@
       const {
         t: ⟦2-char-id⟧,
         selectedLanguage: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), {
+      } = (0, ⟦2-char-id⟧.z)(), {
         hideSocialLocationFrom: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.j)(["hideSocialLocationFrom"]), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.c)(), {
+      } = (0, ⟦2-char-id⟧.m)(["hideSocialLocationFrom"]), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)(), {
         userContext: ⟦2-char-id⟧,
         isUserContextUpdating: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.d)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.getPlayerName()) && void 0 !== ⟦2-char-id⟧ ? cJ : ""), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), {
+      } = (0, ⟦2-char-id⟧.b)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.getPlayerName()) && void 0 !== ⟦2-char-id⟧ ? TB : ""), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), {
         purchasing: ⟦2-char-id⟧,
         outcome: ⟦2-char-id⟧,
         purchase: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.e)("/super-rank-welcome"), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)({
+      } = (0, ⟦2-char-id⟧.b)("/super-rank-welcome"), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)({
         showProgressUpdateMessage: !0,
         enabled: !0
-      }), ⟦2-char-id⟧ = null === ⟦2-char-id⟧, ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? Uc : [], [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)([]), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), ⟦2-char-id⟧ = ⟦2-char-id⟧.playerHasRank("youtuber"), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useCallback)((() => ⟦2-char-id⟧.c.getPlayerProfile(⟦2-char-id⟧, {
+      }), ⟦2-char-id⟧ = null === ⟦2-char-id⟧, ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? yT : [], [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)([]), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), ⟦2-char-id⟧ = ⟦2-char-id⟧.playerHasRank("youtuber"), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useCallback)((() => ⟦2-char-id⟧.c.getPlayerProfile(⟦2-char-id⟧, {
         lowerCaseName: ⟦2-char-id⟧.getPlayerName().toLowerCase()
       }).then((⟦2-char-id⟧ => {
         ⟦2-char-id⟧(⟦2-char-id⟧.socialLinks)
```

</details>

<details>
<summary>Hunk 16 · Change · +2 / -2</summary>

```diff
@@ -420,13 +420,13 @@
       }))), [⟦2-char-id⟧]);
 
       function ⟦2-char-id⟧(⟦2-char-id⟧) {
-        ⟦2-char-id⟧ !== ⟦2-char-id⟧ && ((0, ⟦2-char-id⟧.l)(⟦2-char-id⟧) ? (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.p)(⟦2-char-id⟧), ⟦2-char-id⟧("Only letters, numbers, and _")) : ⟦2-char-id⟧(null), ⟦2-char-id⟧.current && (⟦2-char-id⟧.current.value = ⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧))
+        ⟦2-char-id⟧ !== ⟦2-char-id⟧ && ((0, ⟦2-char-id⟧.k)(⟦2-char-id⟧) ? (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.n)(⟦2-char-id⟧), ⟦2-char-id⟧("Only letters, numbers, and _")) : ⟦2-char-id⟧(null), ⟦2-char-id⟧.current && (⟦2-char-id⟧.current.value = ⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧))
       }
       return (0, ⟦2-char-id⟧.useEffect)((() => (!0 === ⟦2-char-id⟧ ? (clearInterval(⟦2-char-id⟧.current), ⟦2-char-id⟧.current = setInterval(⟦2-char-id⟧, 1⟦2-char-id⟧)) : clearInterval(⟦2-char-id⟧.current), () => {
         clearInterval(⟦2-char-id⟧.current)
       })), [⟦2-char-id⟧, ⟦2-char-id⟧]), (0, ⟦2-char-id⟧.useEffect)((() => {
         var ⟦2-char-id⟧;
-        ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.getPlayerName()) && void 0 !== ⟦2-char-id⟧ ? JJ : "")
+        ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.getPlayerName()) && void 0 !== ⟦2-char-id⟧ ? BB : "")
       }), [⟦2-char-id⟧]), (0, ⟦2-char-id⟧.useEffect)((() => {
         if (!⟦2-char-id⟧ || !⟦2-char-id⟧ || ⟦2-char-id⟧) return;
         let ⟦2-char-id⟧ = !1;
```

</details>

<details>
<summary>Hunk 17 · Change · +2 / -2</summary>

```diff
@@ -462,9 +462,9 @@
                   openEverythingMenuName: null
                 })
               },
-              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                 name: "arrow-up-right-from-square"
-              }), " ", qJ("profileCard:viewProfile")]
+              }), " ", YB("profileCard:viewProfile")]
             })]
           }), (0, ⟦2-char-id⟧.jsxs)("div", {
             className: "EnterAccNameDivWrapper",
```

</details>

<details>
<summary>Hunk 18 · Change · +9 / -9</summary>

```diff
@@ -474,37 +474,37 @@
               children: [⟦2-char-id⟧.featureFlags.canChangeName && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                 className: "EnterName",
                 placeholderText: ⟦2-char-id⟧("homePage:enterName"),
-                maxLength: ⟦2-char-id⟧.i,
+                maxLength: ⟦2-char-id⟧.e,
                 defaultValue: ⟦2-char-id⟧,
                 onValueChange: ⟦2-char-id⟧ => {
                   ⟦2-char-id⟧(⟦2-char-id⟧)
                 },
-                forcedText: ⟦2-char-id⟧ || !⟦2-char-id⟧.featureFlags.canChangeName ? vJ : null,
+                forcedText: ⟦2-char-id⟧ || !⟦2-char-id⟧.featureFlags.canChangeName ? mB : null,
                 blurOnEnter: !0,
                 domRef: ⟦2-char-id⟧
               }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
                 className: "ChooseRandomNameButton",
                 onClick: () => {
-                  ⟦2-char-id⟧((0, ⟦2-char-id⟧.g)())
+                  ⟦2-char-id⟧((0, ⟦2-char-id⟧.d)())
                 },
-                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                   name: "dice",
                   className: "ChooseRandomNameIcon"
                 })
               }), !⟦2-char-id⟧.featureFlags.canChangeName && (0, ⟦2-char-id⟧.jsx)("div", {
                 className: "EnterName NoInput",
-                children: (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧, !⟦2-char-id⟧.featureFlags.canSeeRealPlayerNames)
+                children: (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧, !⟦2-char-id⟧.featureFlags.canSeeRealPlayerNames)
               })]
             }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
               className: "ChooseNameButton",
               disabled: ⟦2-char-id⟧ || ⟦2-char-id⟧ === ⟦2-char-id⟧.getPlayerName(),
               onClick: () => {
-                ⟦2-char-id⟧.length < ⟦2-char-id⟧.k ? ⟦2-char-id⟧(⟦2-char-id⟧("homePage:changeNameMinLengthError", {
-                  length: ⟦2-char-id⟧.k
-                })) : ⟦2-char-id⟧.length > ⟦2-char-id⟧.i ? ⟦2-char-id⟧(⟦2-char-id⟧("homePage:changeNameMaxLengthError", {
+                ⟦2-char-id⟧.length < ⟦2-char-id⟧.i ? ⟦2-char-id⟧(⟦2-char-id⟧("homePage:changeNameMinLengthError", {
                   length: ⟦2-char-id⟧.i
+                })) : ⟦2-char-id⟧.length > ⟦2-char-id⟧.e ? ⟦2-char-id⟧(⟦2-char-id⟧("homePage:changeNameMaxLengthError", {
+                  length: ⟦2-char-id⟧.e
                 })) : (⟦2-char-id⟧(!0), ⟦2-char-id⟧(null), async function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-                  const ⟦2-char-id⟧ = await (0, ⟦2-char-id⟧.postJsonWithMetricsCookiesAndJsonResponse)(`${bJ.clientSideServerUrls.indexUrl}/index/name/update`, {
+                  const ⟦2-char-id⟧ = await (0, ⟦2-char-id⟧.postJsonWithMetricsCookiesAndJsonResponse)(`${FB.clientSideServerUrls.indexUrl}/index/name/update`, {
                     name: ⟦2-char-id⟧
                   }, {
                     retries: 3
```

</details>

<details>
<summary>Hunk 19 · Change · +5 / -5</summary>

```diff
@@ -526,15 +526,15 @@
           })]
         }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
           label: (() => {
-            if ((0, ⟦2-char-id⟧.j)(⟦2-char-id⟧)) {
-              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.q)(⟦2-char-id⟧.code, "general:timeLeft"),
-                ⟦2-char-id⟧ = (0, ⟦2-char-id⟧._)(⟦2-char-id⟧, Date.now(), ⟦2-char-id⟧ + ⟦2-char-id⟧.i);
-              return `${qJ("settingsMenu:hideSocialLocation")} (${qJ("general:timeLeft",{time:cJ})})`
+            if ((0, ⟦2-char-id⟧.m)(⟦2-char-id⟧)) {
+              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧.code, "general:timeLeft"),
+                ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.cb)(⟦2-char-id⟧, Date.now(), ⟦2-char-id⟧ + ⟦2-char-id⟧.l);
+              return `${YB("settingsMenu:hideSocialLocation")} (${YB("general:timeLeft",{time:TB})})`
             }
             return ⟦2-char-id⟧("settingsMenu:hideSocialLocation")
           })(),
           onClick: () => {
-            const ⟦2-char-id⟧ = !(0, ⟦2-char-id⟧.j)(⟦2-char-id⟧);
+            const ⟦2-char-id⟧ = !(0, ⟦2-char-id⟧.m)(⟦2-char-id⟧);
             (0, ⟦2-char-id⟧.f)({
               id: "social.hide_location",
               value: ⟦2-char-id⟧ ? "on" : "off"
```

</details>

<details>
<summary>Hunk 20 · Change · +2 / -2</summary>

```diff
@@ -546,14 +546,14 @@
               ⟦2-char-id⟧(!1)
             }))
           },
-          checked: (0, ⟦2-char-id⟧.j)(⟦2-char-id⟧),
+          checked: (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧),
           disabled: ⟦2-char-id⟧
         }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)("div", {
           className: "SettingBox AccountSettingsSocialLinks",
           children: [(0, ⟦2-char-id⟧.jsx)("div", {
             className: "AccountSettingsLabel",
             children: ⟦2-char-id⟧("settingsMenu:socialLinks")
-          }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {}), !⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+          }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {}), !⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
             socialLinks: ⟦2-char-id⟧,
             editable: !0,
             userContext: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 21 · Change · +3 / -3</summary>

```diff
@@ -564,13 +564,13 @@
           children: [(0, ⟦2-char-id⟧.jsx)("div", {
             className: "AccountSettingsLabel",
             children: ⟦2-char-id⟧("auth:login")
-          }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {}), !⟦2-char-id⟧ && 0 === ⟦2-char-id⟧.length && (0, ⟦2-char-id⟧.jsx)("div", {
+          }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {}), !⟦2-char-id⟧ && 0 === ⟦2-char-id⟧.length && (0, ⟦2-char-id⟧.jsx)("div", {
             className: "NoLoginOptions",
             children: ⟦2-char-id⟧("auth:noLoginOptions")
-          }), !⟦2-char-id⟧ && ⟦2-char-id⟧.length > 0 && "crazygames" !== ⟦2-char-id⟧.n && (0, ⟦2-char-id⟧.jsx)("div", {
+          }), !⟦2-char-id⟧ && ⟦2-char-id⟧.length > 0 && "crazygames" !== ⟦2-char-id⟧.v && (0, ⟦2-char-id⟧.jsx)("div", {
             className: "AccountSettingsLoginButtons",
             children: ⟦2-char-id⟧
-          }), !⟦2-char-id⟧ && ⟦2-char-id⟧.length > 0 && "crazygames" === ⟦2-char-id⟧.n && (0, ⟦2-char-id⟧.jsxs)("div", {
+          }), !⟦2-char-id⟧ && ⟦2-char-id⟧.length > 0 && "crazygames" === ⟦2-char-id⟧.v && (0, ⟦2-char-id⟧.jsxs)("div", {
             className: "AccountSettingsLoginButtons",
             children: [⟦2-char-id⟧[0], ⟦2-char-id⟧.length > 1 && (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
               children: [(0, ⟦2-char-id⟧.jsxs)("div", {
```

</details>

<details>
<summary>Hunk 22 · Change · +27 / -27</summary>

```diff
@@ -590,89 +590,89 @@
           }), ⟦2-char-id⟧.featureFlags.useLogin && (null !== ⟦2-char-id⟧.loggedInInfo || ⟦2-char-id⟧.isLoggedIn()) && (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
             children: [(0, ⟦2-char-id⟧.jsx)("div", {
               className: "AccountSettingsLoginDivider"
-            }), (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.I, {
+            }), (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.K, {
               onClick: () => {
                 (0, ⟦2-char-id⟧.forceGlobalSignOut)()
               },
               className: "AccountSettingsSignedInButton",
-              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                 name: "right-from-bracket"
-              }), qJ("auth:signOut")]
+              }), YB("auth:signOut")]
             })]
           })]
         }), !⟦2-char-id⟧.playerHasRank("super") && (0, ⟦2-char-id⟧.siteSupportsPurchases)() && (0, ⟦2-char-id⟧.jsxs)("div", {
           className: "SettingBox AccountSettingsSuperRank",
           children: [(0, ⟦2-char-id⟧.jsxs)("div", {
             className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
-            children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+            children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
               name: "bolt"
-            }), qJ("homePage:superRank")]
+            }), YB("homePage:superRank")]
           }), (0, ⟦2-char-id⟧.jsxs)("div", {
             className: "AccountSettingsSuperRankProlongContainer",
-            children: [(0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.m, {
+            children: [(0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.k, {
               className: "AccountSettingsSuperRankProlong",
               onClick: () => {
-                (0, ⟦2-char-id⟧.i)({
+                (0, ⟦2-char-id⟧.h)({
                   mode: "self",
                   source: "accountSettings",
                   openItem: "superRank"
                 })
               },
-              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                 name: "bolt"
-              }), qJ("homePage:getSuperRank")]
-            }), (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.m, {
+              }), YB("homePage:getSuperRank")]
+            }), (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.k, {
               className: "AccountSettingsSuperRankProlong",
               onClick: () => {
-                (0, ⟦2-char-id⟧.i)({
+                (0, ⟦2-char-id⟧.h)({
                   mode: "gift",
                   source: "accountSettings",
                   openItem: "superRank"
                 })
               },
-              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                 name: "bolt"
-              }), qJ("homePage:giftSuperRank")]
+              }), YB("homePage:giftSuperRank")]
             })]
           })]
         }), ⟦2-char-id⟧.playerHasRank("super") && (0, ⟦2-char-id⟧.jsxs)("div", {
           className: "SettingBox AccountSettingsSuperRank",
           children: [(0, ⟦2-char-id⟧.jsxs)("div", {
             className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
-            children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+            children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
               name: "bolt"
-            }), qJ("homePage:superRank"), (0, ⟦2-char-id⟧.jsxs)("div", {
+            }), YB("homePage:superRank"), (0, ⟦2-char-id⟧.jsxs)("div", {
               className: "AccountSettingsSuperRankTimeLeft",
-              children: ["(", qJ("general:timeLeft", {
-                time: (0, ⟦2-char-id⟧.$b)((0, ⟦2-char-id⟧.q)(⟦2-char-id⟧.code, "general:timeLeft"), ⟦2-char-id⟧.superRankInfo)
+              children: ["(", YB("general:timeLeft", {
+                time: (0, ⟦2-char-id⟧.lc)((0, ⟦2-char-id⟧.m)(⟦2-char-id⟧.code, "general:timeLeft"), ⟦2-char-id⟧.superRankInfo)
               }), ")"]
             })]
           }), (0, ⟦2-char-id⟧.siteSupportsPurchases)() && (0, ⟦2-char-id⟧.jsxs)("div", {
             className: "AccountSettingsSuperRankProlongContainer",
-            children: [(0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.m, {
+            children: [(0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.k, {
               className: "AccountSettingsSuperRankProlong",
               loading: ⟦2-char-id⟧,
               onClick: () => {
-                ⟦2-char-id⟧(⟦2-char-id⟧.i.id, null)
+                ⟦2-char-id⟧(⟦2-char-id⟧.p.id, null)
               },
-              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                 name: "bolt"
-              }), qJ("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
-                days: ⟦2-char-id⟧.i.product.days,
-                price: ⟦2-char-id⟧.i.price
+              }), YB("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
+                days: ⟦2-char-id⟧.p.product.days,
+                price: ⟦2-char-id⟧.p.price
               })]
-            }), (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.m, {
+            }), (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.k, {
               className: "AccountSettingsSuperRankProlong",
               onClick: () => {
-                (0, ⟦2-char-id⟧.i)({
+                (0, ⟦2-char-id⟧.h)({
                   mode: "gift",
                   source: "accountSettings",
                   openItem: "superRank"
                 })
               },
-              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                 name: "bolt"
-              }), qJ("homePage:giftSuperRank")]
+              }), YB("homePage:giftSuperRank")]
             })]
           }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
             className: "AccountSettingsSuperRankProlongError SmallTextBold",
```

</details>

<details>
<summary>Hunk 23 · Change · +1 / -1</summary>

```diff
@@ -689,7 +689,7 @@
             children: [(0, ⟦2-char-id⟧.jsx)("div", {
               className: "AccountSettingsDeleteAccountButtonTitle",
               children: ⟦2-char-id⟧("auth:deleteAccountButtonTitle")
-            }), (0, ⟦2-char-id⟧.b)() && (0, ⟦2-char-id⟧.jsx)("div", {
+            }), (0, ⟦2-char-id⟧.d)() && (0, ⟦2-char-id⟧.jsx)("div", {
               className: "AccountSettingsDeleteAccountButtonTitle",
               children: ⟦2-char-id⟧("auth:discordActivityKickWarning")
             }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {})]
```

</details>

<details>
<summary>Hunk 24 · Change · +4 / -4</summary>

```diff
@@ -700,10 +700,10 @@
         })]
       })
     }));
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8487),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2623),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1151),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1319);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8529),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2602),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1133),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1304);
     const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.memo)((function(⟦2-char-id⟧) {
         let {
           inGame: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 25 · Change · +2 / -2</summary>

```diff
@@ -711,10 +711,10 @@
         const {
           t: ⟦2-char-id⟧,
           selectedLanguage: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.F)(), {
+        } = (0, ⟦2-char-id⟧.z)(), {
           clientEscMenuOptions: ⟦2-char-id⟧,
           showDebugOverlay: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.j)(["clientEscMenuOptions", "showDebugOverlay"]), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)("hideCoordinates");
+        } = (0, ⟦2-char-id⟧.m)(["clientEscMenuOptions", "showDebugOverlay"]), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)("hideCoordinates");
         let ⟦2-char-id⟧ = "settingsMenu:showCoordinates",
           ⟦2-char-id⟧ = "settingsMenu:showChunkCoordinates";
 
```

</details>

<details>
<summary>Hunk 26 · Change · +1 / -1</summary>

```diff
@@ -731,7 +731,7 @@
             children: [(0, ⟦2-char-id⟧.jsx)("div", {
               className: "SettingsMenuInviteHeader",
               children: ⟦2-char-id⟧("settingsMenu:inviteLink")
-            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.g, {})]
+            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.f, {})]
           }), (0, ⟦2-char-id⟧.jsxs)("div", {
             className: "SettingBox",
             children: [(0, ⟦2-char-id⟧.jsx)("div", {
```

</details>

<details>
<summary>Hunk 27 · Change · +2 / -2</summary>

```diff
@@ -740,8 +740,8 @@
                 marginBottom: "10px"
               },
               children: ⟦2-char-id⟧("settingsMenu:language")
-            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
-              options: Object.entries(⟦2-char-id⟧.k).map((⟦2-char-id⟧ => {
+            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+              options: Object.entries(⟦2-char-id⟧.f).map((⟦2-char-id⟧ => {
                 let [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
                 return {
                   label: (0, ⟦2-char-id⟧.jsxs)("div", {
```

</details>

<details>
<summary>Hunk 28 · Change · +1 / -1</summary>

```diff
@@ -752,7 +752,7 @@
                     }), (0, ⟦2-char-id⟧.jsxs)("span", {
                       children: [⟦2-char-id⟧(⟦2-char-id⟧), " ", (0, ⟦2-char-id⟧.jsxs)("span", {
                         className: "SettingsMenuLanguageOptionCode",
-                        children: ["(", cJ, ")"]
+                        children: ["(", TB, ")"]
                       })]
                     })]
                   }),
```

</details>

<details>
<summary>Hunk 29 · Change · +2 / -2</summary>

```diff
@@ -761,10 +761,10 @@
               })),
               value: ⟦2-char-id⟧.code,
               onChange: ⟦2-char-id⟧ => {
-                ⟦2-char-id⟧.e.get().setCurrentLanguage(⟦2-char-id⟧.value)
+                ⟦2-char-id⟧.f.get().setCurrentLanguage(⟦2-char-id⟧.value)
               }
             })]
-          }), !(0, ⟦2-char-id⟧.isMobileApp)() && (0, ⟦2-char-id⟧.g)() && ⟦2-char-id⟧.featureFlags.useForceRotateForceFullscreenOverlay && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+          }), !(0, ⟦2-char-id⟧.isMobileApp)() && (0, ⟦2-char-id⟧.e)() && ⟦2-char-id⟧.featureFlags.useForceRotateForceFullscreenOverlay && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
             label: ⟦2-char-id⟧("settingsMenu:disableFullscreenMode"),
             checked: ⟦2-char-id⟧.disableFullscreen,
             onClick: ⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 30 · Change · +1 / -1</summary>

```diff
@@ -806,7 +806,7 @@
                 disableBunnyHopping: ⟦2-char-id⟧
               })
             }
-          }), (0, ⟦2-char-id⟧.v)() && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+          }), (0, ⟦2-char-id⟧.w)() && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
             label: ⟦2-char-id⟧("settingsMenu:showChat"),
             checked: ⟦2-char-id⟧.showChat,
             onClick: ⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 31 · Change · +3 / -3</summary>

```diff
@@ -844,13 +844,13 @@
       ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.memo)((function() {
         const {
           t: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.F)(), {
+        } = (0, ⟦2-char-id⟧.z)(), {
           soundVolume: ⟦2-char-id⟧,
           musicVolume: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.j)(["soundVolume", "musicVolume"]);
+        } = (0, ⟦2-char-id⟧.m)(["soundVolume", "musicVolume"]);
         return (0, ⟦2-char-id⟧.jsxs)("div", {
           className: "SettingsMenuRightInner",
-          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.h, {
+          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.k, {
             name: ⟦2-char-id⟧("settingsMenu:musicVolume"),
             min: 0,
             max: 1,
```

</details>

<details>
<summary>Hunk 32 · Change · +1 / -1</summary>

```diff
@@ -862,7 +862,7 @@
               })
             },
             format: ⟦2-char-id⟧ => ⟦2-char-id⟧.toFixed(2)
-          }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.h, {
+          }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.k, {
             name: ⟦2-char-id⟧("settingsMenu:soundEffectsVolume"),
             min: 0,
             max: 1,
```

</details>

<details>
<summary>Hunk 33 · Change · +5 / -5</summary>

```diff
@@ -877,11 +877,11 @@
           })]
         })
       }));
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(563),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1326),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3137),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8493),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2975);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(602),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1317),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3167),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8531),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2983);
     const ⟦2-char-id⟧ = {
       app: "notificationSettings:pushTargetsApp",
       browser: "notificationSettings:pushTargetsBrowser",
```

</details>

<details>
<summary>Hunk 34 · Change · +4 / -4</summary>

```diff
@@ -891,16 +891,16 @@
     function ⟦2-char-id⟧() {
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)(), {
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)(), {
         mobilePushNotificationsCanAsk: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.j)(["mobilePushNotificationsCanAsk"]), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useCallback)((() => {
-        (0, ⟦2-char-id⟧.d)().then((⟦2-char-id⟧ => {
+      } = (0, ⟦2-char-id⟧.m)(["mobilePushNotificationsCanAsk"]), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useCallback)((() => {
+        (0, ⟦2-char-id⟧.b)().then((⟦2-char-id⟧ => {
           ⟦2-char-id⟧.current && (⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧(!1))
         })).catch((⟦2-char-id⟧ => {
           console.error("Failed to load push notification targets:", ⟦2-char-id⟧), ⟦2-char-id⟧.current && ⟦2-char-id⟧(!0)
         }))
       }), [⟦2-char-id⟧]), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useCallback)((() => {
-        (0, ⟦2-char-id⟧.c)().then((⟦2-char-id⟧ => {
+        (0, ⟦2-char-id⟧.b)().then((⟦2-char-id⟧ => {
           ⟦2-char-id⟧.current && ⟦2-char-id⟧((() => ⟦2-char-id⟧))
         }))
       }), [⟦2-char-id⟧]);
```

</details>

<details>
<summary>Hunk 35 · Change · +1 / -1</summary>

```diff
@@ -908,7 +908,7 @@
         ⟦2-char-id⟧()
       }), [⟦2-char-id⟧]), (0, ⟦2-char-id⟧.useEffect)((() => {
         ⟦2-char-id⟧()
-      }), [⟦2-char-id⟧, ⟦2-char-id⟧]), (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧.k, ⟦2-char-id⟧);
+      }), [⟦2-char-id⟧, ⟦2-char-id⟧]), (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧.e, ⟦2-char-id⟧);
       const ⟦2-char-id⟧ = null === ⟦2-char-id⟧ ? [] : Object.keys(⟦2-char-id⟧).filter((⟦2-char-id⟧ => ⟦2-char-id⟧[⟦2-char-id⟧] > 0));
       return (0, ⟦2-char-id⟧.jsxs)("div", {
         className: "SettingBox PushNotificationSettings",
```

</details>

<details>
<summary>Hunk 36 · Change · +1 / -1</summary>

```diff
@@ -927,7 +927,7 @@
             var ⟦2-char-id⟧;
             return (0, ⟦2-char-id⟧.jsx)("li", {
               children: ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧], {
-                count: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? ZJ : 0
+                count: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? dB : 0
               })
             }, ⟦2-char-id⟧)
           }))
```

</details>

<details>
<summary>Hunk 37 · Change · +4 / -4</summary>

```diff
@@ -962,14 +962,14 @@
       ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.memo)((function() {
         const {
           t: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.F)(), {
+        } = (0, ⟦2-char-id⟧.z)(), {
           clientEscMenuOptions: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.j)(["clientEscMenuOptions"]);
+        } = (0, ⟦2-char-id⟧.m)(["clientEscMenuOptions"]);
         return (0, ⟦2-char-id⟧.jsxs)("div", {
           className: "SettingsMenuRightInner",
-          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.f, {
+          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.g, {
             label: ⟦2-char-id⟧("notificationSettings:friendRequests"),
-            options: ⟦2-char-id⟧.b.map((⟦2-char-id⟧ => ({
+            options: ⟦2-char-id⟧.d.map((⟦2-char-id⟧ => ({
               value: ⟦2-char-id⟧,
               label: ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧].label)
             }))),
```

</details>

<details>
<summary>Hunk 38 · Change · +21 / -21</summary>

```diff
@@ -981,56 +981,56 @@
             },
             circleInfoText: (0, ⟦2-char-id⟧.jsx)("div", {
               className: "NotificationSettingLevelsInfo",
-              children: ⟦2-char-id⟧.b.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsxs)("div", {
+              children: ⟦2-char-id⟧.d.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsxs)("div", {
                 children: [(0, ⟦2-char-id⟧.jsx)("b", {
                   children: ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧].label)
-                }), ": ", JJ(⟦2-char-id⟧[⟦2-char-id⟧].info)]
+                }), ": ", BB(⟦2-char-id⟧[⟦2-char-id⟧].info)]
               }, ⟦2-char-id⟧)))
             })
           }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {})]
         })
       }));
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(3933),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(157),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(223),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(6004),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2938),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8502),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(535),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(17);
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(547),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(29),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3833);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(3924),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(184),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(256),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(5994),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2939),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8540),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(572),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(24);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(586),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(33),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3825);
     const ⟦2-char-id⟧ = new Map([
       ["chunkHorizAddDist", "horizontal"],
       ["chunkVertAddDist", "vertical"]
     ]);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return ⟦2-char-id⟧.has(⟦2-char-id⟧) ? ⟦2-char-id⟧.gameBridge.lookup("EQ", null) : null
+      return ⟦2-char-id⟧.has(⟦2-char-id⟧) ? ⟦2-char-id⟧.gameBridge.lookup("Tm", null) : null
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      if (!(0, ⟦2-char-id⟧.P)(⟦2-char-id⟧.d.get("clientEscMenuOptions")[⟦2-char-id⟧])) return ⟦2-char-id⟧.d.get("clientEscMenuOptions")[⟦2-char-id⟧];
+      if (!(0, ⟦2-char-id⟧.M)(⟦2-char-id⟧.d.get("clientEscMenuOptions")[⟦2-char-id⟧])) return ⟦2-char-id⟧.d.get("clientEscMenuOptions")[⟦2-char-id⟧];
       const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
       return null !== ⟦2-char-id⟧ ? ⟦2-char-id⟧[⟦2-char-id⟧.get(⟦2-char-id⟧)] : ⟦2-char-id⟧.j.getItem(⟦2-char-id⟧)
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      if ("useTouchControls" === ⟦2-char-id⟧) return void(0, ⟦2-char-id⟧.b)(⟦2-char-id⟧);
+      if ("useTouchControls" === ⟦2-char-id⟧) return void(0, ⟦2-char-id⟧.e)(⟦2-char-id⟧);
       ⟦2-char-id⟧ in ⟦2-char-id⟧.d.get("clientEscMenuOptions") && ⟦2-char-id⟧.d.setClientEscMenuOptions({
         [⟦2-char-id⟧]: ⟦2-char-id⟧
       });
       const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
       null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.gameBridge.send("setChunkAddDistance", {
-        ...ZJ,
+        ...dB,
         [⟦2-char-id⟧.get(⟦2-char-id⟧)]: ⟦2-char-id⟧
       }), ⟦2-char-id⟧.j.setItem(⟦2-char-id⟧, ⟦2-char-id⟧)
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8511),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8517),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8526),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3926);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8545),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8547),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8552),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3921);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 39 · Change · +4 / -4</summary>

```diff
@@ -1042,20 +1042,20 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), {
+      } = (0, ⟦2-char-id⟧.z)(), {
         clientEscMenuOptions: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.j)(["clientEscMenuOptions", "showDistantNametags"]), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(⟦2-char-id⟧("showFog")), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(⟦2-char-id⟧.antiAliasing), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(⟦2-char-id⟧.useWebGpu), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)((() => (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧.featureFlags.settings.canUseShaderPacks))), [⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)((() => ⟦2-char-id⟧.d.isWebGpuDefaultOff())), [⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(⟦2-char-id⟧.e);
+      } = (0, ⟦2-char-id⟧.m)(["clientEscMenuOptions", "showDistantNametags"]), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(⟦2-char-id⟧("showFog")), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(⟦2-char-id⟧.antiAliasing), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(⟦2-char-id⟧.useWebGpu), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)((() => (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧.featureFlags.settings.canUseShaderPacks))), [⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)((() => ⟦2-char-id⟧.d.isWebGpuDefaultOff())), [⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(⟦2-char-id⟧.g);
       (0, ⟦2-char-id⟧.useEffect)((() => {
         let ⟦2-char-id⟧ = !1;
         return (0, ⟦2-char-id⟧.hasUsableWebGpuAdapter)().then((⟦2-char-id⟧ => {
           ⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧)
-        })), (0, ⟦2-char-id⟧.k)(⟦2-char-id⟧.featureFlags.settings.canUseShaderPacks) && (0, ⟦2-char-id⟧.f)().then((async ⟦2-char-id⟧ => {
+        })), (0, ⟦2-char-id⟧.k)(⟦2-char-id⟧.featureFlags.settings.canUseShaderPacks) && (0, ⟦2-char-id⟧.d)().then((async ⟦2-char-id⟧ => {
           const ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && await async function(⟦2-char-id⟧) {
             const [{
               isShaderPackActive: ⟦2-char-id⟧
             }, {
               loadPageShaderPackCompiler: ⟦2-char-id⟧
-            }] = await Promise.all([⟦2-char-id⟧.e(120).then((() => ⟦2-char-id⟧(5996))), Promise.all([⟦2-char-id⟧.e(126), ⟦2-char-id⟧.e(124), ⟦2-char-id⟧.e(123)]).then((() => ⟦2-char-id⟧(5960)))]);
+            }] = await Promise.all([⟦2-char-id⟧.e(120).then((() => ⟦2-char-id⟧(5987))), Promise.all([⟦2-char-id⟧.e(126), ⟦2-char-id⟧.e(124), ⟦2-char-id⟧.e(123)]).then((() => ⟦2-char-id⟧(5949)))]);
             return ⟦2-char-id⟧(⟦2-char-id⟧, await ⟦2-char-id⟧())
           }(⟦2-char-id⟧);
           ⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 40 · Change · +1 / -1</summary>

```diff
@@ -1064,7 +1064,7 @@
         }
       }), []);
       const ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-          return (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧, ⟦2-char-id⟧) && !0 === ⟦2-char-id⟧ ? {
+          return (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧, ⟦2-char-id⟧) && !0 === ⟦2-char-id⟧ ? {
             translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
             checked: !0,
             disabled: !0
```

</details>

<details>
<summary>Hunk 41 · Change · +15 / -15</summary>

```diff
@@ -1074,34 +1074,34 @@
             disabled: !0 !== ⟦2-char-id⟧
           }
         }(⟦2-char-id⟧.useWebGpu, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
-        ⟦2-char-id⟧ = (⟦2-char-id⟧.useWebGpu || (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧, ⟦2-char-id⟧)) && ⟦2-char-id⟧ && !0 === ⟦2-char-id⟧,
-        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)("lightingOverride"),
-        ⟦2-char-id⟧ = !(0, ⟦2-char-id⟧.P)(⟦2-char-id⟧);
+        ⟦2-char-id⟧ = (⟦2-char-id⟧.useWebGpu || (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧, ⟦2-char-id⟧)) && ⟦2-char-id⟧ && !0 === ⟦2-char-id⟧,
+        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)("lightingOverride"),
+        ⟦2-char-id⟧ = !(0, ⟦2-char-id⟧.M)(⟦2-char-id⟧);
       let ⟦2-char-id⟧ = "settingsMenu:enableLighting";
       ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧ ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
       const ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
           var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-          const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.showFog) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧("showFog"),
-            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.antiAliasing) && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧.antiAliasing,
-            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.useWebGpu) && void 0 !== ⟦2-char-id⟧ ? FJ : ⟦2-char-id⟧.useWebGpu,
-            ⟦2-char-id⟧ = !⟦2-char-id⟧.r && ⟦2-char-id⟧ !== ⟦2-char-id⟧.current || ⟦2-char-id⟧ !== ⟦2-char-id⟧.current || ⟦2-char-id⟧ !== ⟦2-char-id⟧.current;
-          ⟦2-char-id⟧(⟦2-char-id⟧ ? () => ⟦2-char-id⟧.l : null)
+          const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.showFog) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧("showFog"),
+            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.antiAliasing) && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧.antiAliasing,
+            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.useWebGpu) && void 0 !== ⟦2-char-id⟧ ? VB : ⟦2-char-id⟧.useWebGpu,
+            ⟦2-char-id⟧ = !⟦2-char-id⟧.p && ⟦2-char-id⟧ !== ⟦2-char-id⟧.current || ⟦2-char-id⟧ !== ⟦2-char-id⟧.current || ⟦2-char-id⟧ !== ⟦2-char-id⟧.current;
+          ⟦2-char-id⟧(⟦2-char-id⟧ ? () => ⟦2-char-id⟧.n : null)
         },
-        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)("fogChunkDistanceOverride"),
-        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)("fogBlockDistanceOverride"),
-        ⟦2-char-id⟧ = !(0, ⟦2-char-id⟧.P)(⟦2-char-id⟧) || !(0, ⟦2-char-id⟧.P)(⟦2-char-id⟧),
+        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)("fogChunkDistanceOverride"),
+        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)("fogBlockDistanceOverride"),
+        ⟦2-char-id⟧ = !(0, ⟦2-char-id⟧.M)(⟦2-char-id⟧) || !(0, ⟦2-char-id⟧.M)(⟦2-char-id⟧),
         ⟦2-char-id⟧ = ⟦2-char-id⟧ ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
-        [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧),
-        [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧),
+        [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧),
+        [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧),
         ⟦2-char-id⟧ = ⟦2-char-id⟧("settingsMenu:chunkLoadDistanceDeviceLimit"),
         ⟦2-char-id⟧ = ⟦2-char-id⟧ < ⟦2-char-id⟧,
-        ⟦2-char-id⟧ = Math.min(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧("chunkHorizAddDist")) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧[0], ⟦2-char-id⟧),
+        ⟦2-char-id⟧ = Math.min(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧("chunkHorizAddDist")) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧[0], ⟦2-char-id⟧),
         ⟦2-char-id⟧ = !⟦2-char-id⟧ && function(⟦2-char-id⟧, ⟦2-char-id⟧) {
           return !0 === ⟦2-char-id⟧.showFog && ⟦2-char-id⟧.fogChunkDistance > ⟦2-char-id⟧
         }(⟦2-char-id⟧, ⟦2-char-id⟧);
       return (0, ⟦2-char-id⟧.jsxs)("div", {
         className: "SettingsMenuRightInner",
-        children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.h, {
+        children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.k, {
           name: ⟦2-char-id⟧("settingsMenu:horizontalChunkLoadDistance"),
           min: ⟦2-char-id⟧[0],
           max: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 42 · Change · +4 / -4</summary>

```diff
@@ -1110,19 +1110,19 @@
           step: 1,
           initValue: ⟦2-char-id⟧,
           onChange: ⟦2-char-id⟧ => {
-            !0 === ⟦2-char-id⟧("showFog") && ⟦2-char-id⟧ < ⟦2-char-id⟧("fogChunkDistance") && ⟦2-char-id⟧("fogChunkDistance", ⟦2-char-id⟧), ⟦2-char-id⟧("chunkHorizAddDist", ⟦2-char-id⟧), ⟦2-char-id⟧.i.Uf("updatedChunkLoadDist")
+            !0 === ⟦2-char-id⟧("showFog") && ⟦2-char-id⟧ < ⟦2-char-id⟧("fogChunkDistance") && ⟦2-char-id⟧("fogChunkDistance", ⟦2-char-id⟧), ⟦2-char-id⟧("chunkHorizAddDist", ⟦2-char-id⟧), ⟦2-char-id⟧.h.yH("updatedChunkLoadDist")
           },
           circleInfoText: ⟦2-char-id⟧("settingsMenu:chunkLoadDistanceInfo")
-        }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.h, {
+        }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.k, {
           name: ⟦2-char-id⟧("settingsMenu:verticalChunkLoadDistance"),
           min: ⟦2-char-id⟧[1],
           max: ⟦2-char-id⟧,
           selectableMax: ⟦2-char-id⟧,
           cappedNote: ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧,
           step: 1,
-          initValue: Math.min(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧("chunkVertAddDist")) && void 0 !== ⟦2-char-id⟧ ? UJ : ⟦2-char-id⟧[1], ⟦2-char-id⟧),
+          initValue: Math.min(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧("chunkVertAddDist")) && void 0 !== ⟦2-char-id⟧ ? yB : ⟦2-char-id⟧[1], ⟦2-char-id⟧),
           onChange: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧("chunkVertAddDist", ⟦2-char-id⟧), ⟦2-char-id⟧.i.Uf("updatedChunkLoadDist")
+            ⟦2-char-id⟧("chunkVertAddDist", ⟦2-char-id⟧), ⟦2-char-id⟧.h.yH("updatedChunkLoadDist")
           },
           circleInfoText: ⟦2-char-id⟧("settingsMenu:chunkLoadDistanceInfo"),
           className: "VerticalChunkLoadSlider"
```

</details>

<details>
<summary>Hunk 43 · Change · +3 / -3</summary>

```diff
@@ -1169,16 +1169,16 @@
             className: ⟦2-char-id⟧()({
               SettingBoxWarning: ⟦2-char-id⟧
             })
-          }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.h, {
+          }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.k, {
             name: ⟦2-char-id⟧("settingsMenu:fogChunkDistance"),
             min: ⟦2-char-id⟧[0],
             max: ⟦2-char-id⟧.c.maxChunkHorizAddDistance,
             step: 1,
-            initValue: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.fogChunkDistance) && void 0 !== ⟦2-char-id⟧ ? AJ : ⟦2-char-id⟧[0],
+            initValue: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.fogChunkDistance) && void 0 !== ⟦2-char-id⟧ ? JB : ⟦2-char-id⟧[0],
             onChange: ⟦2-char-id⟧ => {
               ⟦2-char-id⟧.d.setClientEscMenuOptions({
                 fogChunkDistance: ⟦2-char-id⟧
-              }), ⟦2-char-id⟧.i.Uf("fogChunkDistanceChanged", ⟦2-char-id⟧)
+              }), ⟦2-char-id⟧.h.yH("fogChunkDistanceChanged", ⟦2-char-id⟧)
             },
             circleInfoText: ⟦2-char-id⟧("settingsMenu:fogChunkDistanceInfo"),
             disabled: ⟦2-char-id⟧ || !1 === ⟦2-char-id⟧("showFog"),
```

</details>

<details>
<summary>Hunk 44 · Change · +1 / -1</summary>

```diff
@@ -1189,7 +1189,7 @@
             className: "SettingBox SettingsBoxWarning",
             children: ⟦2-char-id⟧("settingsMenu:fogChunkDistanceInfo")
           })]
-        }), !⟦2-char-id⟧.r && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+        }), !⟦2-char-id⟧.p && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
           label: ⟦2-char-id⟧(⟦2-char-id⟧ ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
           checked: !⟦2-char-id⟧ && ⟦2-char-id⟧.disableTexAtlas,
           onClick: ⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 45 · Change · +1 / -1</summary>

```diff
@@ -1199,7 +1199,7 @@
           },
           circleInfoText: ⟦2-char-id⟧("settingsMenu:disableBlockTextureAtlasInfo"),
           disabled: ⟦2-char-id⟧
-        }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.h, {
+        }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.k, {
           name: ⟦2-char-id⟧("settingsMenu:fieldOfView"),
           min: 50,
           max: 160,
```

</details>

<details>
<summary>Hunk 46 · Change · +3 / -3</summary>

```diff
@@ -1230,19 +1230,19 @@
             })
           },
           circleInfoText: ⟦2-char-id⟧("settingsMenu:antiAliasingInfo")
-        }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.h, {
+        }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.k, {
           name: ⟦2-char-id⟧("settingsMenu:pixelScale"),
           min: 1,
           max: 8,
           step: 1,
-          initValue: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.pixelScale) && void 0 !== ⟦2-char-id⟧ ? qJ : 1,
+          initValue: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.pixelScale) && void 0 !== ⟦2-char-id⟧ ? YB : 1,
           onChange: ⟦2-char-id⟧ => {
             (⟦2-char-id⟧ !== ⟦2-char-id⟧.d.get("clientEscMenuOptions").pixelScale || (0, ⟦2-char-id⟧.n)()) && (0, ⟦2-char-id⟧.e)("pixelScale"), ⟦2-char-id⟧.d.setClientEscMenuOptions({
               pixelScale: ⟦2-char-id⟧
             })
           },
           circleInfoText: ⟦2-char-id⟧("settingsMenu:pixelScaleInfo"),
-          format: ⟦2-char-id⟧ => `${JJ}x`
+          format: ⟦2-char-id⟧ => `${BB}x`
         }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
           label: ⟦2-char-id⟧("settingsMenu:pixelSmoothing"),
           checked: ⟦2-char-id⟧.pixelSmoothing,
```

</details>

<details>
<summary>Hunk 47 · Change · +1 / -1</summary>

```diff
@@ -1252,7 +1252,7 @@
             })
           },
           circleInfoText: ⟦2-char-id⟧("settingsMenu:pixelSmoothingInfo")
-        }), ⟦2-char-id⟧.r && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+        }), ⟦2-char-id⟧.p && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
           label: ⟦2-char-id⟧("settingsMenu:distantNametags"),
           checked: (0, ⟦2-char-id⟧.b)(),
           onClick: ⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 48 · Change · +12 / -12</summary>

```diff
@@ -1276,24 +1276,24 @@
         })]
       })
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8546),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8167),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8176),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1297),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4397),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8550),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1743),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3758),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1747),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(567);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8559),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8194),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8196),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1277),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4408),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8565),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1727),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3762),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1736),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(610);
     const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.memo)((function() {
       const {
         clientEscMenuOptions: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.j)(["clientEscMenuOptions"]), {
+      } = (0, ⟦2-char-id⟧.m)(["clientEscMenuOptions"]), {
         recording: ⟦2-char-id⟧,
         clipping: ⟦2-char-id⟧,
         hasClipBuffer: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.f)("replayRecorder"), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)("connectedGame", (⟦2-char-id⟧ => ⟦2-char-id⟧.replay)), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(), ⟦2-char-id⟧ = !1 === (0, ⟦2-char-id⟧.f)("canRecordReplays");
+      } = (0, ⟦2-char-id⟧.i)("replayRecorder"), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.g)("connectedGame", (⟦2-char-id⟧ => ⟦2-char-id⟧.replay)), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.l)(), ⟦2-char-id⟧ = !1 === (0, ⟦2-char-id⟧.j)("canRecordReplays");
       (0, ⟦2-char-id⟧.useEffect)((() => {
         ⟦2-char-id⟧.gameBridge.send("setRecorderPrefs", {
           clipping: ⟦2-char-id⟧.enableClipping,
```

</details>

<details>
<summary>Hunk 49 · Change · +3 / -3</summary>

```diff
@@ -1316,16 +1316,16 @@
           children: [(0, ⟦2-char-id⟧.jsx)("div", {
             className: "ReplayViewerCategoryRecordingRow",
             children: ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
-              children: [(0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.I, {
+              children: [(0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.K, {
                 className: "ReplayViewerCategoryButton",
                 onClick: ⟦2-char-id⟧,
                 disabled: !⟦2-char-id⟧,
                 children: [(0, ⟦2-char-id⟧.jsx)("span", {
                   children: "Stop Recording"
-                }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+                }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
                   noaAction: "recordGame"
                 })]
-              }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+              }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
                 className: "ReplayViewerCategoryRecordingIndicator"
               })]
             }) : (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.d, {
```

</details>

<details>
<summary>Hunk 50 · Change · +1 / -1</summary>

```diff
@@ -1334,7 +1334,7 @@
               disabled: !⟦2-char-id⟧,
               children: [(0, ⟦2-char-id⟧.jsx)("span", {
                 children: "Start Recording"
-              }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+              }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
                 noaAction: "recordGame"
               })]
             })
```

</details>

<details>
<summary>Hunk 51 · Change · +4 / -4</summary>

```diff
@@ -1359,11 +1359,11 @@
             className: ⟦2-char-id⟧()({
               SettingBoxDisabled: !⟦2-char-id⟧
             })
-          }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.h, {
+          }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.k, {
             name: "Clip duration (seconds)",
-            min: ⟦2-char-id⟧.j,
-            max: ⟦2-char-id⟧.i,
-            step: ⟦2-char-id⟧.c,
+            min: ⟦2-char-id⟧.i,
+            max: ⟦2-char-id⟧.f,
+            step: ⟦2-char-id⟧.b,
             initValue: ⟦2-char-id⟧.clipDurationSeconds,
             onChange: function(⟦2-char-id⟧) {
               ⟦2-char-id⟧.d.setClientEscMenuOptions({
```

</details>

<details>
<summary>Hunk 52 · Change · +1 / -1</summary>

```diff
@@ -1383,7 +1383,7 @@
             disabled: !⟦2-char-id⟧,
             children: [(0, ⟦2-char-id⟧.jsx)("span", {
               children: "Record clip"
-            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
               noaAction: "recordClip"
             })]
           }), ⟦2-char-id⟧.enableClipping && !⟦2-char-id⟧ && ⟦2-char-id⟧ && !⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
```

</details>

<details>
<summary>Hunk 53 · Change · +2 / -2</summary>

```diff
@@ -1398,14 +1398,14 @@
           children: [(0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.d, {
             className: "ReplayViewerCategoryButton",
             onClick: function() {
-              (0, ⟦2-char-id⟧.d)(!0), ⟦2-char-id⟧.d.set({
+              (0, ⟦2-char-id⟧.j)(!0), ⟦2-char-id⟧.d.set({
                 openEverythingMenuName: null
               })
             },
             disabled: ⟦2-char-id⟧,
             children: [(0, ⟦2-char-id⟧.jsx)("span", {
               children: "Open Replay Mode"
-            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
               noaAction: "replayViewerOpen"
             })]
           }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
```

</details>

<details>
<summary>Hunk 54 · Change · +2 / -2</summary>

```diff
@@ -1428,8 +1428,8 @@
         })]
       })
     }));
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(227),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1671);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(270),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1652);
     const ⟦2-char-id⟧ = {
       account: {
         icon: "fa-solid fa-user",
```

</details>

<details>
<summary>Hunk 55 · Change · +1 / -1</summary>

```diff
@@ -1471,7 +1471,7 @@
         icon: "fa-solid fa-folder-image",
         displayName: "settingsMenu:texturePack"
       },
-      Jn: {
+      pD: {
         icon: "fa-solid fa-sparkle",
         displayName: "settingsMenu:shaderPack"
       },
```

</details>

<details>
<summary>Hunk 56 · Change · +1 / -1</summary>

```diff
@@ -1498,7 +1498,7 @@
     };
 
     function ⟦2-char-id⟧() {
-      return Promise.all([⟦2-char-id⟧.e(126), ⟦2-char-id⟧.e(124), ⟦2-char-id⟧.e(118), ⟦2-char-id⟧.e(115)]).then((() => ⟦2-char-id⟧(39853))).then((⟦2-char-id⟧ => ({
+      return Promise.all([⟦2-char-id⟧.e(126), ⟦2-char-id⟧.e(124), ⟦2-char-id⟧.e(118), ⟦2-char-id⟧.e(115)]).then((() => ⟦2-char-id⟧(39804))).then((⟦2-char-id⟧ => ({
         default: ⟦2-char-id⟧.ShaderPackCategory
       })), (⟦2-char-id⟧ => (console.error("Failed to load the shader pack settings", ⟦2-char-id⟧), {
         default: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 57 · Change · +3 / -3</summary>

```diff
@@ -1508,14 +1508,14 @@
     function ⟦2-char-id⟧() {
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)();
+      } = (0, ⟦2-char-id⟧.z)();
       return (0, ⟦2-char-id⟧.jsx)("div", {
         className: "SettingsMenuRightInner",
         children: ⟦2-char-id⟧("shaderPack:tabLoadFailed")
       })
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1294);
-    const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.lazy)((() => ⟦2-char-id⟧.e(252).then((() => ⟦2-char-id⟧(39846))).then((⟦2-char-id⟧ => ({
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1275);
+    const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.lazy)((() => ⟦2-char-id⟧.e(252).then((() => ⟦2-char-id⟧(39788))).then((⟦2-char-id⟧ => ({
         default: ⟦2-char-id⟧.BloxdInformation
       }))))),
       ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.lazy)(⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 58 · Change · +7 / -7</summary>

```diff
@@ -1529,19 +1529,19 @@
           show: ⟦2-char-id⟧,
           setBeforeResumeCallback: ⟦2-char-id⟧
         } = ⟦2-char-id⟧;
-        (0, ⟦2-char-id⟧.d)();
+        (0, ⟦2-char-id⟧.e)();
         const {
           gameState: ⟦2-char-id⟧,
           openSettingsCategory: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.j)(["gameState", "openSettingsCategory"]), {
+        } = (0, ⟦2-char-id⟧.m)(["gameState", "openSettingsCategory"]), {
           userContext: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.d)(), {
+        } = (0, ⟦2-char-id⟧.b)(), {
           t: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.c)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)("minChunkAddDist"), ⟦2-char-id⟧ = "inGame" === ⟦2-char-id⟧, [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(⟦2-char-id⟧(⟦2-char-id⟧)), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)([]), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(function() {
+        } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)("minChunkAddDist"), ⟦2-char-id⟧ = "inGame" === ⟦2-char-id⟧, [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(⟦2-char-id⟧(⟦2-char-id⟧)), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)([]), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(function() {
           const ⟦2-char-id⟧ = new Date,
-            ⟦2-char-id⟧ = 6 * (⟦2-char-id⟧.getMonth() + ⟦2-char-id⟧.getDate()) % ⟦2-char-id⟧.r.length;
-          return [...lc.r, ...lc.r].slice(⟦2-char-id⟧, ⟦2-char-id⟧ + 6)
-        }()), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧.i, (0, ⟦2-char-id⟧.e)()), ⟦2-char-id⟧ = Object.keys(⟦2-char-id⟧).filter((⟦2-char-id⟧ => {
+            ⟦2-char-id⟧ = 6 * (⟦2-char-id⟧.getMonth() + ⟦2-char-id⟧.getDate()) % ⟦2-char-id⟧.s.length;
+          return [...eT.s, ...eT.s].slice(⟦2-char-id⟧, ⟦2-char-id⟧ + 6)
+        }()), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧.j, (0, ⟦2-char-id⟧.c)()), ⟦2-char-id⟧ = Object.keys(⟦2-char-id⟧).filter((⟦2-char-id⟧ => {
           switch (⟦2-char-id⟧) {
             case "replayViewer":
               return ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 59 · Change · +6 / -6</summary>

```diff
@@ -1549,27 +1549,27 @@
               return ⟦2-char-id⟧.playerHasRank("developer") || !1;
             case "texturePack":
               return ⟦2-char-id⟧.featureFlags.settings.canChangeTexturePack;
-            case "Jn":
+            case "pD":
               return ⟦2-char-id⟧.featureFlags.settings.canUseShaderPacks;
             case "notifications":
               return ⟦2-char-id⟧.featureFlags.useSocialFeatures;
             case "alternativeDomains":
-              return "crazygames" !== ⟦2-char-id⟧.n;
+              return "crazygames" !== ⟦2-char-id⟧.v;
             case "controller":
               return ⟦2-char-id⟧.featureFlags.useControllerSupport && (⟦2-char-id⟧ || "controller" === ⟦2-char-id⟧);
             default:
               return !0
           }
         }));
-        (0, ⟦2-char-id⟧.i)("toggleFullCoordinateOverlay", (() => {
+        (0, ⟦2-char-id⟧.e)("toggleFullCoordinateOverlay", (() => {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧("showCoordinates") && ⟦2-char-id⟧("showChunkCoordinates") && ⟦2-char-id⟧("showFPS");
           ⟦2-char-id⟧("showCoordinates", !⟦2-char-id⟧), ⟦2-char-id⟧("showChunkCoordinates", !⟦2-char-id⟧), ⟦2-char-id⟧("showFPS", !⟦2-char-id⟧), ⟦2-char-id⟧()
-        })), (0, ⟦2-char-id⟧.i)("updatedChunkLoadDist", (() => {
+        })), (0, ⟦2-char-id⟧.e)("updatedChunkLoadDist", (() => {
           ⟦2-char-id⟧()
         })), (0, ⟦2-char-id⟧.useEffect)((() => {
           if (⟦2-char-id⟧(null), null === ⟦2-char-id⟧.d.get("openSettingsCategory")) {
-            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)() ? ⟦2-char-id⟧.get(⟦2-char-id⟧) : void 0;
-            ⟦2-char-id⟧(⟦2-char-id⟧ && ⟦2-char-id⟧.includes(⟦2-char-id⟧) ? JJ : ⟦2-char-id⟧(⟦2-char-id⟧))
+            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.i)() ? ⟦2-char-id⟧.get(⟦2-char-id⟧) : void 0;
+            ⟦2-char-id⟧(⟦2-char-id⟧ && ⟦2-char-id⟧.includes(⟦2-char-id⟧) ? BB : ⟦2-char-id⟧(⟦2-char-id⟧))
           }
         }), [⟦2-char-id⟧]), (0, ⟦2-char-id⟧.useEffect)((() => {
           null !== ⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.d.set({
```

</details>

<details>
<summary>Hunk 60 · Change · +3 / -3</summary>

```diff
@@ -1578,10 +1578,10 @@
         }), [⟦2-char-id⟧, ⟦2-char-id⟧]), (0, ⟦2-char-id⟧.useLayoutEffect)((() => {
           ⟦2-char-id⟧.current && (⟦2-char-id⟧.current.scrollTop = 0)
         }), [⟦2-char-id⟧, ⟦2-char-id⟧]), (0, ⟦2-char-id⟧.useEffect)((() => {
-          "updateLog" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.e)().then(⟦2-char-id⟧)
+          "updateLog" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.d)().then(⟦2-char-id⟧)
         }), [⟦2-char-id⟧]), (0, ⟦2-char-id⟧.useEffect)((() => {
-          if ((0, ⟦2-char-id⟧.P)(⟦2-char-id⟧)) return;
-          const [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.b)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧[0], ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧[1], ⟦2-char-id⟧, ⟦2-char-id⟧);
+          if ((0, ⟦2-char-id⟧.M)(⟦2-char-id⟧)) return;
+          const [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.d)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧[0], ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧[1], ⟦2-char-id⟧, ⟦2-char-id⟧);
           ⟦2-char-id⟧.gameBridge.send("setChunkAddDistance", {
             horizontal: ⟦2-char-id⟧,
             vertical: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 61 · Change · +1 / -1</summary>

```diff
@@ -1612,7 +1612,7 @@
                   const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧].icon;
                   return {
                     id: ⟦2-char-id⟧,
-                    faIcon: "string" === typeof ⟦2-char-id⟧ ? cJ : void 0,
+                    faIcon: "string" === typeof ⟦2-char-id⟧ ? TB : void 0,
                     iconElement: "string" === typeof ⟦2-char-id⟧ ? void 0 : (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {}),
                     title: ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧].displayName),
                     redDot: !1
```

</details>

<details>
<summary>Hunk 62 · Change · +3 / -3</summary>

```diff
@@ -1635,13 +1635,13 @@
             }), "general" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
               inGame: ⟦2-char-id⟧
             }), "audio" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {}), "notifications" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {}), "graphics" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
-              minChunkAddDist: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? EJ : [2, 2],
+              minChunkAddDist: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? tB : [2, 2],
               getValue: ⟦2-char-id⟧,
               onChange: ⟦2-char-id⟧,
               setApplySettingsCallback: ⟦2-char-id⟧
-            }), "controls" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.h, {}), "controller" === ⟦2-char-id⟧ && ⟦2-char-id⟧.featureFlags.useControllerSupport && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {}), ⟦2-char-id⟧.featureFlags.settings.canChangeTexturePack && "texturePack" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+            }), "controls" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.f, {}), "controller" === ⟦2-char-id⟧ && ⟦2-char-id⟧.featureFlags.useControllerSupport && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {}), ⟦2-char-id⟧.featureFlags.settings.canChangeTexturePack && "texturePack" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
               setApplySettingsCallback: ⟦2-char-id⟧
-            }), ⟦2-char-id⟧.featureFlags.settings.canUseShaderPacks && "Jn" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.Suspense, {
+            }), ⟦2-char-id⟧.featureFlags.settings.canUseShaderPacks && "pD" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.Suspense, {
               fallback: null,
               children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
                 setApplySettingsCallback: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 63 · Change · +1 / -1</summary>

```diff
@@ -1650,7 +1650,7 @@
               className: "SettingsMenuRightInner",
               children: (0, ⟦2-char-id⟧.jsx)("div", {
                 className: "UpdateLogsContainer",
-                children: ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                children: ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
                   updateLog: ⟦2-char-id⟧,
                   index: ⟦2-char-id⟧,
                   close: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 64 · Change · +2 / -2</summary>

```diff
@@ -1671,9 +1671,9 @@
                 className: "AlternativeDomainsList",
                 children: ⟦2-char-id⟧.current.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.d, {
                   onClick: () => {
-                    window.open(`https://${JJ}`)
+                    window.open(`https://${BB}`)
                   },
-                  children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+                  children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                     name: "arrow-up-right-from-square"
                   }), " ", ⟦2-char-id⟧]
                 }, ⟦2-char-id⟧)))
```

</details>

<details>
<summary>Hunk 65 · Change · +2 / -2</summary>

```diff
@@ -1694,9 +1694,9 @@
           })]
         })
       }));
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(2260);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(2237);
     const ⟦2-char-id⟧ = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
-      ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.lazy)((() => Promise.resolve().then((() => ⟦2-char-id⟧(4069))).then((⟦2-char-id⟧ => {
+      ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.lazy)((() => Promise.resolve().then((() => ⟦2-char-id⟧(4064))).then((⟦2-char-id⟧ => {
         ⟦2-char-id⟧.needGameClientAfterPaint();
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.matchmakingLibrariesPromise.then((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧.loadCharacterCustomisationUI(), (⟦2-char-id⟧ => ⟦2-char-id⟧.CharacterCustomisationUI))));
         return Promise.all([⟦2-char-id⟧.ensureGameSetup(), ⟦2-char-id⟧]).then((⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 66 · Change · +3 / -3</summary>

```diff
@@ -1711,12 +1711,12 @@
       } = ⟦2-char-id⟧;
       const {
         userContext: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.d)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)("characters");
+      } = (0, ⟦2-char-id⟧.b)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)("characters");
       if (!⟦2-char-id⟧) return null;
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.filter((⟦2-char-id⟧ => "cape" !== ⟦2-char-id⟧ && "nameColour" !== ⟦2-char-id⟧ || ⟦2-char-id⟧.getPlayerRanks().includes("super") || (0, ⟦2-char-id⟧.siteSupportsPurchases)())).map((⟦2-char-id⟧ => ({
         id: ⟦2-char-id⟧,
-        faIcon: ⟦2-char-id⟧.x[⟦2-char-id⟧],
-        title: ⟦2-char-id⟧.z[⟦2-char-id⟧],
+        faIcon: ⟦2-char-id⟧.C[⟦2-char-id⟧],
+        title: ⟦2-char-id⟧.E[⟦2-char-id⟧],
         redDot: !1
       })));
       return (0, ⟦2-char-id⟧.jsxs)("div", {
```

</details>

<details>
<summary>Hunk 67 · Change · +1 / -1</summary>

```diff
@@ -1735,7 +1735,7 @@
           children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.Suspense, {
             fallback: (0, ⟦2-char-id⟧.jsx)("div", {
               className: "CharacterCustomisationLoading",
-              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {})
+              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {})
             }),
             children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
               selectedTab: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 68 · Change · +16 / -16</summary>

```diff
@@ -1744,22 +1744,22 @@
         })]
       })
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1341),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8557),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3950),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2910),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2946),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8580),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8052),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8563),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8571),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1688),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1675),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4323),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1162),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1122),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1560),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8145);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1345),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8570),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3942),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2898),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2947),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8594),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8075),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8578),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8591),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1666),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1657),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4312),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1139),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1105),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1546),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8178);
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧) {
         this.info = ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 69 · Change · +1 / -1</summary>

```diff
@@ -1788,7 +1788,7 @@
         return !1
       }
       doesCategoryExist(⟦2-char-id⟧) {
-        return !(0, ⟦2-char-id⟧.P)(this.info[⟦2-char-id⟧])
+        return !(0, ⟦2-char-id⟧.M)(this.info[⟦2-char-id⟧])
       }
       categoryHasRedDot(⟦2-char-id⟧) {
         return !0 === this.info[⟦2-char-id⟧].redDot
```

</details>

<details>
<summary>Hunk 70 · Change · +1 / -1</summary>

```diff
@@ -1797,7 +1797,7 @@
         this.info[⟦2-char-id⟧].redDot = ⟦2-char-id⟧
       }
       doesItemExist(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        return this.doesCategoryExist(⟦2-char-id⟧) && !(0, ⟦2-char-id⟧.P)(this.info[⟦2-char-id⟧].items[⟦2-char-id⟧])
+        return this.doesCategoryExist(⟦2-char-id⟧) && !(0, ⟦2-char-id⟧.M)(this.info[⟦2-char-id⟧].items[⟦2-char-id⟧])
       }
       itemHasRedDot(⟦2-char-id⟧, ⟦2-char-id⟧) {
         return !0 === this.info[⟦2-char-id⟧].items[⟦2-char-id⟧].redDot
```

</details>

<details>
<summary>Hunk 71 · Change · +6 / -6</summary>

```diff
@@ -1811,27 +1811,27 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return `${JJ}\x1f${cJ}`
+      return `${BB}\x1f${TB}`
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       return ⟦2-char-id⟧ ? Object.keys(⟦2-char-id⟧).sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
         var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-        const ⟦2-char-id⟧ = (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.sortPriority) && void 0 !== ⟦2-char-id⟧ ? FJ : 0) - (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.sortPriority) && void 0 !== ⟦2-char-id⟧ ? eJ : 0);
-        return 0 !== ⟦2-char-id⟧ ? AJ : ⟦2-char-id⟧.localeCompare(⟦2-char-id⟧)
+        const ⟦2-char-id⟧ = (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.sortPriority) && void 0 !== ⟦2-char-id⟧ ? VB : 0) - (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.sortPriority) && void 0 !== ⟦2-char-id⟧ ? pB : 0);
+        return 0 !== ⟦2-char-id⟧ ? JB : ⟦2-char-id⟧.localeCompare(⟦2-char-id⟧)
       })) : []
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return !(0, ⟦2-char-id⟧.P)(⟦2-char-id⟧) && !(0, ⟦2-char-id⟧.P)(⟦2-char-id⟧) && ⟦2-char-id⟧ in ⟦2-char-id⟧
+      return !(0, ⟦2-char-id⟧.M)(⟦2-char-id⟧) && !(0, ⟦2-char-id⟧.M)(⟦2-char-id⟧) && ⟦2-char-id⟧ in ⟦2-char-id⟧
     }
     const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.memo)((function(⟦2-char-id⟧) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
       let {
         show: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)("players", ⟦2-char-id⟧),
-        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)("players", ⟦2-char-id⟧),
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.g)("players", ⟦2-char-id⟧),
+        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.g)("players", ⟦2-char-id⟧),
         [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)({
           shopInfo: {},
           userInputsPerItem: {},
```

</details>

<details>
<summary>Hunk 72 · Change · +2 / -2</summary>

```diff
@@ -1861,10 +1861,10 @@
         }
         ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧ > 4
       }(0, ⟦2-char-id⟧.useEffect)((() => {
-        ⟦2-char-id⟧.i.Uf("showShopIconRedDot", ⟦2-char-id⟧, !0)
+        ⟦2-char-id⟧.h.yH("showShopIconRedDot", ⟦2-char-id⟧, !0)
       }), [⟦2-char-id⟧]), (0, ⟦2-char-id⟧.useEffect)((() => {
         ⟦2-char-id⟧.gameBridge.send("setShopOpen", ⟦2-char-id⟧), ⟦2-char-id⟧ || (clearTimeout(⟦2-char-id⟧.current), ⟦2-char-id⟧((⟦2-char-id⟧ => ⟦2-char-id⟧.awaitingPurchase ? {
-          ...JJ,
+          ...BB,
           awaitingPurchase: !1
         } : ⟦2-char-id⟧)))
       }), [⟦2-char-id⟧]), (0, ⟦2-char-id⟧.useEffect)((() => () => {
```

</details>

<details>
<summary>Hunk 73 · Change · +3 / -3</summary>

```diff
@@ -1873,15 +1873,15 @@
         ⟦2-char-id⟧.current = ⟦2-char-id⟧
       }), [⟦2-char-id⟧]), (0, ⟦2-char-id⟧.useEffect)((() => {
         if (null === ⟦2-char-id⟧) return;
-        return (0, ⟦2-char-id⟧.d)("pointerdown", (⟦2-char-id⟧ => {
+        return (0, ⟦2-char-id⟧.c)("pointerdown", (⟦2-char-id⟧ => {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.target;
           null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.closest(".ShopItem") || ⟦2-char-id⟧(null)
         }))
       }), [⟦2-char-id⟧]);
       const ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
           ⟦2-char-id⟧((⟦2-char-id⟧ => ({
-            ...cJ,
-            ...JJ
+            ...TB,
+            ...BB
           })))
         },
         ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 74 · Change · +2 / -2</summary>

```diff
@@ -1906,13 +1906,13 @@
             redDotInfo: ⟦2-char-id⟧,
             autoSelectCategory: ⟦2-char-id⟧
           } = function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            if ((0, ⟦2-char-id⟧.P)(⟦2-char-id⟧) || 0 === Object.keys(⟦2-char-id⟧).length) return {
+            if ((0, ⟦2-char-id⟧.M)(⟦2-char-id⟧) || 0 === Object.keys(⟦2-char-id⟧).length) return {
               shopInfo: {},
               userInputsPerItem: {},
               redDotInfo: ⟦2-char-id⟧.fromShopInfo({}),
               autoSelectCategory: null
             };
-            const ⟦2-char-id⟧ = ⟦2-char-id⟧.i[⟦2-char-id⟧.n].adConfig.showRewardedAds,
+            const ⟦2-char-id⟧ = ⟦2-char-id⟧.q[⟦2-char-id⟧.v].adConfig.showRewardedAds,
               ⟦2-char-id⟧ = {};
             let ⟦2-char-id⟧ = null;
             for (const ⟦2-char-id⟧ in ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 75 · Change · +2 / -2</summary>

```diff
@@ -1921,10 +1921,10 @@
               let ⟦2-char-id⟧ = !1;
               for (const ⟦2-char-id⟧ in ⟦2-char-id⟧.items) {
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧.items[⟦2-char-id⟧];
-                (0, ⟦2-char-id⟧.n)(⟦2-char-id⟧, ⟦2-char-id⟧) && (⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧ = !0)
+                (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧) && (⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧ = !0)
               }
               ⟦2-char-id⟧ && (⟦2-char-id⟧[⟦2-char-id⟧] = {
-                ...cJ,
+                ...TB,
                 items: ⟦2-char-id⟧
               }, !0 === ⟦2-char-id⟧.autoSelectCategory && (⟦2-char-id⟧ = ⟦2-char-id⟧))
             }
```

</details>

<details>
<summary>Hunk 76 · Change · +8 / -8</summary>

```diff
@@ -1932,27 +1932,27 @@
               ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
                 var ⟦2-char-id⟧, ⟦2-char-id⟧;
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧),
-                  ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? AJ : ⟦2-char-id⟧[⟦2-char-id⟧];
+                  ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? JB : ⟦2-char-id⟧[⟦2-char-id⟧];
                 if (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.userInput) && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.type) switch (⟦2-char-id⟧.userInput.type) {
                   case "dropdown": {
                     var ⟦2-char-id⟧;
-                    const ⟦2-char-id⟧ = !⟦2-char-id⟧ || !⟦2-char-id⟧.userInput.dropdownOptions.some((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧) === ⟦2-char-id⟧)),
+                    const ⟦2-char-id⟧ = !⟦2-char-id⟧ || !⟦2-char-id⟧.userInput.dropdownOptions.some((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧) === ⟦2-char-id⟧)),
                       ⟦2-char-id⟧ = ⟦2-char-id⟧.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.userInput) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.type) || JSON.stringify(⟦2-char-id⟧.userInput.dropdownOptions) !== JSON.stringify(⟦2-char-id⟧.userInput.dropdownOptions)),
                       ⟦2-char-id⟧ = ⟦2-char-id⟧.userInput,
-                      ⟦2-char-id⟧ = !(0, ⟦2-char-id⟧.P)(⟦2-char-id⟧.initialValue) && ⟦2-char-id⟧.dropdownOptions.some((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧) === ⟦2-char-id⟧.initialValue));
+                      ⟦2-char-id⟧ = !(0, ⟦2-char-id⟧.M)(⟦2-char-id⟧.initialValue) && ⟦2-char-id⟧.dropdownOptions.some((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧) === ⟦2-char-id⟧.initialValue));
                     var ⟦2-char-id⟧;
-                    return void(⟦2-char-id⟧ || ⟦2-char-id⟧ ? ⟦2-char-id⟧ ? ⟦2-char-id⟧[⟦2-char-id⟧] = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.userInput.initialValue) && void 0 !== ⟦2-char-id⟧ ? sJ : null : ⟦2-char-id⟧.userInput.dropdownOptions.length > 0 ? ⟦2-char-id⟧[⟦2-char-id⟧] = (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧.userInput.dropdownOptions[0]) : ⟦2-char-id⟧[⟦2-char-id⟧] = null : ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧)
+                    return void(⟦2-char-id⟧ || ⟦2-char-id⟧ ? ⟦2-char-id⟧ ? ⟦2-char-id⟧[⟦2-char-id⟧] = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.userInput.initialValue) && void 0 !== ⟦2-char-id⟧ ? OB : null : ⟦2-char-id⟧.userInput.dropdownOptions.length > 0 ? ⟦2-char-id⟧[⟦2-char-id⟧] = (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧.userInput.dropdownOptions[0]) : ⟦2-char-id⟧[⟦2-char-id⟧] = null : ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧)
                   }
                   case "text":
                   case "number":
                     var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-                    return void((null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.userInput) !== ⟦2-char-id⟧.userInput ? ⟦2-char-id⟧[⟦2-char-id⟧] = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.userInput.initialValue) && void 0 !== ⟦2-char-id⟧ ? GJ : ⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧ ? nJ : "" : ⟦2-char-id⟧[⟦2-char-id⟧] = null !== (⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? hJ : ⟦2-char-id⟧.userInput.initialValue) && void 0 !== ⟦2-char-id⟧ ? fJ : "");
+                    return void((null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.userInput) !== ⟦2-char-id⟧.userInput ? ⟦2-char-id⟧[⟦2-char-id⟧] = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.userInput.initialValue) && void 0 !== ⟦2-char-id⟧ ? uB : ⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧ ? DB : "" : ⟦2-char-id⟧[⟦2-char-id⟧] = null !== (⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? kB : ⟦2-char-id⟧.userInput.initialValue) && void 0 !== ⟦2-char-id⟧ ? HB : "");
                   case "color":
                     var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-                    return void((null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.userInput) !== ⟦2-char-id⟧.userInput ? ⟦2-char-id⟧[⟦2-char-id⟧] = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.userInput.initialValue) && void 0 !== ⟦2-char-id⟧ ? rJ : ⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧ ? xJ : "#000000" : ⟦2-char-id⟧[⟦2-char-id⟧] = null !== (⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? hJ : ⟦2-char-id⟧.userInput.initialValue) && void 0 !== ⟦2-char-id⟧ ? vJ : "#000000");
+                    return void((null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.userInput) !== ⟦2-char-id⟧.userInput ? ⟦2-char-id⟧[⟦2-char-id⟧] = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.userInput.initialValue) && void 0 !== ⟦2-char-id⟧ ? vB : ⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧ ? EB : "#000000" : ⟦2-char-id⟧[⟦2-char-id⟧] = null !== (⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? kB : ⟦2-char-id⟧.userInput.initialValue) && void 0 !== ⟦2-char-id⟧ ? mB : "#000000");
                   case "player": {
-                    const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.k)(⟦2-char-id⟧, eJ, ⟦2-char-id⟧.userInput);
-                    return void(⟦2-char-id⟧ && ⟦2-char-id⟧.includes(⟦2-char-id⟧) ? ⟦2-char-id⟧[⟦2-char-id⟧] = hJ : ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧.length > 0 ? ⟦2-char-id⟧[0] : null)
+                    const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.k)(⟦2-char-id⟧, pB, ⟦2-char-id⟧.userInput);
+                    return void(⟦2-char-id⟧ && ⟦2-char-id⟧.includes(⟦2-char-id⟧) ? ⟦2-char-id⟧[⟦2-char-id⟧] = kB : ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧.length > 0 ? ⟦2-char-id⟧[0] : null)
                   }
                 }
               };
```

</details>

<details>
<summary>Hunk 77 · Change · +1 / -1</summary>

```diff
@@ -1999,7 +1999,7 @@
           if (null === ⟦2-char-id⟧ || !⟦2-char-id⟧.shopInfo[⟦2-char-id⟧]) return ⟦2-char-id⟧;
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.redDotInfo;
           return ⟦2-char-id⟧.categoryHasRedDot(⟦2-char-id⟧) && (⟦2-char-id⟧.updateCategoryRedDot(⟦2-char-id⟧, !1), ⟦2-char-id⟧ = ⟦2-char-id⟧.shallowCopy()), {
-            ...JJ,
+            ...BB,
             selectedCategoryKey: ⟦2-char-id⟧,
             redDotInfo: ⟦2-char-id⟧
           }
```

</details>

<details>
<summary>Hunk 78 · Change · +8 / -8</summary>

```diff
@@ -2007,28 +2007,28 @@
         ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
           ⟦2-char-id⟧((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)))
         };
-      (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧.j, (() => {
+      (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧.k, (() => {
         ⟦2-char-id⟧((⟦2-char-id⟧ => {
-          const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.l)(⟦2-char-id⟧(⟦2-char-id⟧.shopInfo), ⟦2-char-id⟧.selectedCategoryKey, (⟦2-char-id⟧ => (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧.shopInfo[⟦2-char-id⟧].items)));
-          return ⟦2-char-id⟧ === ⟦2-char-id⟧.selectedCategoryKey ? JJ : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
+          const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.o)(⟦2-char-id⟧(⟦2-char-id⟧.shopInfo), ⟦2-char-id⟧.selectedCategoryKey, (⟦2-char-id⟧ => (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧.shopInfo[⟦2-char-id⟧].items)));
+          return ⟦2-char-id⟧ === ⟦2-char-id⟧.selectedCategoryKey ? BB : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
         }))
-      })), (0, ⟦2-char-id⟧.i)("showShopFromServer", (⟦2-char-id⟧ => {
+      })), (0, ⟦2-char-id⟧.e)("showShopFromServer", (⟦2-char-id⟧ => {
         let {
           toggle: ⟦2-char-id⟧,
-          WZ: ⟦2-char-id⟧
+          kd: ⟦2-char-id⟧
         } = ⟦2-char-id⟧;
         ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧), 0 === Object.keys(⟦2-char-id⟧.shopInfo).length || ⟦2-char-id⟧ && ⟦2-char-id⟧ ? ⟦2-char-id⟧.d.set({
           openEverythingMenuName: null
         }) : ⟦2-char-id⟧.d.set({
           openEverythingMenuName: ⟦2-char-id⟧.m.SHOP
         })
-      })), (0, ⟦2-char-id⟧.i)("closeShopOnDamaged", (() => {
+      })), (0, ⟦2-char-id⟧.e)("closeShopOnDamaged", (() => {
         ⟦2-char-id⟧ && ⟦2-char-id⟧.d.set({
           openEverythingMenuName: null
         })
-      })), (0, ⟦2-char-id⟧.i)("overShopInfo", (⟦2-char-id⟧ => {
+      })), (0, ⟦2-char-id⟧.e)("overShopInfo", (⟦2-char-id⟧ => {
         ⟦2-char-id⟧(⟦2-char-id⟧)
-      })), (0, ⟦2-char-id⟧.e)("currencyAmounts", (⟦2-char-id⟧ => {
+      })), (0, ⟦2-char-id⟧.i)("currencyAmounts", (⟦2-char-id⟧ => {
         var ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.current;
         ⟦2-char-id⟧ && (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.currency]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.amount) === ⟦2-char-id⟧.amountBefore ? ⟦2-char-id⟧({
```

</details>

<details>
<summary>Hunk 79 · Change · +2 / -2</summary>

```diff
@@ -2037,9 +2037,9 @@
           currencyAmounts: ⟦2-char-id⟧,
           awaitingPurchase: !1
         }))
-      })), (0, ⟦2-char-id⟧.e)("shopInfo", (⟦2-char-id⟧ => {
+      })), (0, ⟦2-char-id⟧.i)("shopInfo", (⟦2-char-id⟧ => {
         ⟦2-char-id⟧({
-          ...PJ(⟦2-char-id⟧),
+          ...SB(⟦2-char-id⟧),
           awaitingPurchase: !1
         })
       }));
```

</details>

<details>
<summary>Hunk 80 · Change · +3 / -3</summary>

```diff
@@ -2054,15 +2054,15 @@
         }, ⟦2-char-id⟧((⟦2-char-id⟧ => {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.shopInfo);
           return {
-            ...JJ,
-            ...cJ
+            ...BB,
+            ...TB
           }
         })))
       }), [⟦2-char-id⟧, ⟦2-char-id⟧]);
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.selectedCategoryKey,
         ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
           var ⟦2-char-id⟧, ⟦2-char-id⟧;
-          return (isNaN(⟦2-char-id⟧) || (0, ⟦2-char-id⟧.P)(⟦2-char-id⟧.currency) || ⟦2-char-id⟧(⟦2-char-id⟧.currencyAmounts, ⟦2-char-id⟧.currency) && ⟦2-char-id⟧ <= ⟦2-char-id⟧.currencyAmounts[⟦2-char-id⟧.currency].amount) && (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.canBuy) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧) && !(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.hidden) && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧)
+          return (isNaN(⟦2-char-id⟧) || (0, ⟦2-char-id⟧.M)(⟦2-char-id⟧.currency) || ⟦2-char-id⟧(⟦2-char-id⟧.currencyAmounts, ⟦2-char-id⟧.currency) && ⟦2-char-id⟧ <= ⟦2-char-id⟧.currencyAmounts[⟦2-char-id⟧.currency].amount) && (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.canBuy) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧) && !(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.hidden) && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧)
         },
         ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
           var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 81 · Change · +5 / -5</summary>

```diff
@@ -2072,16 +2072,16 @@
             ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧, ⟦2-char-id⟧),
             ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧),
             ⟦2-char-id⟧ = ⟦2-char-id⟧.enchant,
-            ⟦2-char-id⟧ = ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.lb)(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.customTitle) && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧, {
-              colour: ⟦2-char-id⟧.gb[⟦2-char-id⟧.tier]
-            }) : null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.customTitle) && void 0 !== ⟦2-char-id⟧ ? FJ : ⟦2-char-id⟧,
+            ⟦2-char-id⟧ = ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.qb)(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.customTitle) && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧, {
+              colour: ⟦2-char-id⟧.lb[⟦2-char-id⟧.tier]
+            }) : null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.customTitle) && void 0 !== ⟦2-char-id⟧ ? VB : ⟦2-char-id⟧,
             ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
-              const ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧,
+              const ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧,
                 ⟦2-char-id⟧ = void 0 !== ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧, ⟦2-char-id⟧) : ⟦2-char-id⟧;
               ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) && null !== ⟦2-char-id⟧ && ((⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧.selectedCategoryKey,
                   ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧),
-                  ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧.userInputsPerItem[⟦2-char-id⟧],
+                  ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧.userInputsPerItem[⟦2-char-id⟧],
                   ⟦2-char-id⟧ = {
                     categoryKey: ⟦2-char-id⟧,
                     itemKey: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 82 · Change · +1 / -1</summary>

```diff
@@ -2089,7 +2089,7 @@
                   };
                 if (⟦2-char-id⟧.isRewardedAd) {
                   if (Date.now() - ⟦2-char-id⟧.current < 5⟦2-char-id⟧) return;
-                  (0, ⟦2-char-id⟧.bb)((() => {
+                  (0, ⟦2-char-id⟧.$)((() => {
                     var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
                     console.log("bought rewarded ad");
                     const ⟦2-char-id⟧ = ⟦2-char-id⟧.categoryKey ? null === (⟦2-char-id⟧ = ⟦2-char-id⟧.current.shopInfo[⟦2-char-id⟧.categoryKey]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.items[⟦2-char-id⟧] : null;
```

</details>

<details>
<summary>Hunk 83 · Change · +1 / -1</summary>

```diff
@@ -2110,7 +2110,7 @@
                       amountBefore: ⟦2-char-id⟧.currencyAmounts[⟦2-char-id⟧.currency].amount
                     });
                     const ⟦2-char-id⟧ = {
-                      ...jJ.currencyAmounts
+                      ...gB.currencyAmounts
                     };
                     ⟦2-char-id⟧[⟦2-char-id⟧.currency].amount -= ⟦2-char-id⟧, ⟦2-char-id⟧({
                       currencyAmounts: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 84 · Change · +1 / -1</summary>

```diff
@@ -2133,7 +2133,7 @@
             }),
             "data-pad-focusable": !⟦2-char-id⟧.userInput || void 0,
             "data-pad-unavailable": !⟦2-char-id⟧.userInput && !⟦2-char-id⟧ || void 0,
-            "data-pad-repeat": null !== (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? UJ : void 0,
+            "data-pad-repeat": null !== (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? yB : void 0,
             "data-pad-repeat-wait": ⟦2-char-id⟧.awaitingPurchase || void 0,
             onClick: () => {
               if (⟦2-char-id⟧ && ⟦2-char-id⟧.current) {
```

</details>

<details>
<summary>Hunk 85 · Change · +5 / -5</summary>

```diff
@@ -2143,25 +2143,25 @@
               ⟦2-char-id⟧.userInput || ⟦2-char-id⟧()
             },
             onPointerDown: ⟦2-char-id⟧ => {
-              ⟦2-char-id⟧ && (⟦2-char-id⟧.current = (0, ⟦2-char-id⟧.t)(⟦2-char-id⟧))
+              ⟦2-char-id⟧ && (⟦2-char-id⟧.current = (0, ⟦2-char-id⟧.r)(⟦2-char-id⟧))
             },
             onPointerEnter: ⟦2-char-id⟧ => {
-              ⟦2-char-id⟧ && !(0, ⟦2-char-id⟧.t)(⟦2-char-id⟧) && ⟦2-char-id⟧(⟦2-char-id⟧)
+              ⟦2-char-id⟧ && !(0, ⟦2-char-id⟧.r)(⟦2-char-id⟧) && ⟦2-char-id⟧(⟦2-char-id⟧)
             },
             onPointerLeave: ⟦2-char-id⟧ => {
-              ⟦2-char-id⟧ && !(0, ⟦2-char-id⟧.t)(⟦2-char-id⟧) && ⟦2-char-id⟧((⟦2-char-id⟧ => ⟦2-char-id⟧ === ⟦2-char-id⟧ ? null : ⟦2-char-id⟧))
+              ⟦2-char-id⟧ && !(0, ⟦2-char-id⟧.r)(⟦2-char-id⟧) && ⟦2-char-id⟧((⟦2-char-id⟧ => ⟦2-char-id⟧ === ⟦2-char-id⟧ ? null : ⟦2-char-id⟧))
             },
             style: {
               zIndex: Object.keys(⟦2-char-id⟧.shopInfo[⟦2-char-id⟧].items).length - ⟦2-char-id⟧
             },
-            children: [⟦2-char-id⟧.redDotInfo.itemHasRedDot(⟦2-char-id⟧, ⟦2-char-id⟧) && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+            children: [⟦2-char-id⟧.redDotInfo.itemHasRedDot(⟦2-char-id⟧, ⟦2-char-id⟧) && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
               top: "-6px",
               right: "-6px"
             }), ⟦2-char-id⟧.badge && (0, ⟦2-char-id⟧.jsx)("div", {
               className: "ShopBadgeContainer",
               children: (0, ⟦2-char-id⟧.jsx)("div", {
                 className: ⟦2-char-id⟧()("ShopBadgeMain", ⟦2-char-id⟧.badge.type),
-                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                   text: ⟦2-char-id⟧.badge.text
                 })
               })
```

</details>

<details>
<summary>Hunk 86 · Change · +2 / -2</summary>

```diff
@@ -2178,12 +2178,12 @@
                 className: "ShopItemHeader",
                 children: [(0, ⟦2-char-id⟧.jsx)("div", {
                   className: "ShopItemHeaderTitle",
-                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                     text: ⟦2-char-id⟧
                   })
                 }), (0, ⟦2-char-id⟧.jsx)("div", {
                   className: "ShopItemHeaderDescription",
-                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                     text: ⟦2-char-id⟧.description
                   })
                 })]
```

</details>

<details>
<summary>Hunk 87 · Change · +1 / -1</summary>

```diff
@@ -2199,7 +2199,7 @@
                     ((⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
                       const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧),
                         ⟦2-char-id⟧ = {
-                          ...jJ.userInputsPerItem
+                          ...gB.userInputsPerItem
                         };
                       ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧({
                         userInputsPerItem: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 88 · Change · +4 / -4</summary>

```diff
@@ -2231,18 +2231,18 @@
               })
             }), ⟦2-char-id⟧ && ⟦2-char-id⟧ === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)("div", {
               className: "ShopItemEnchantInfo SmallTextBold",
-              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                 text: ⟦2-char-id⟧
               }), (0, ⟦2-char-id⟧.jsx)("div", {
                 className: "ShopItemEnchantInfoDescription",
-                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
-                  text: (0, ⟦2-char-id⟧.d)("", ⟦2-char-id⟧.enchantments, ⟦2-char-id⟧.enchantmentData)
+                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+                  text: (0, ⟦2-char-id⟧.b)("", ⟦2-char-id⟧.enchantments, ⟦2-char-id⟧.enchantmentData)
                 })
               })]
             })]
           }, ⟦2-char-id⟧)
         };
-      return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
+      return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
         className: "Menu ShopBody",
         show: ⟦2-char-id⟧,
         children: 0 !== Object.keys(⟦2-char-id⟧.shopInfo).length && (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
```

</details>

<details>
<summary>Hunk 89 · Change · +2 / -2</summary>

```diff
@@ -2253,13 +2253,13 @@
                 var ⟦2-char-id⟧;
                 return {
                   id: ⟦2-char-id⟧,
-                  title: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.shopInfo[⟦2-char-id⟧].customTitle) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧,
+                  title: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.shopInfo[⟦2-char-id⟧].customTitle) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧,
                   redDot: ⟦2-char-id⟧.redDotInfo.categoryHasRedDot(⟦2-char-id⟧)
                 }
               })),
               selectedItemId: ⟦2-char-id⟧,
               onClick: ⟦2-char-id⟧,
-              padStartsOnTab: (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧)
+              padStartsOnTab: (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧)
             }), (0, ⟦2-char-id⟧.jsx)("div", {
               className: "MenuSideBarFooter",
               children: ⟦2-char-id⟧.currencyAmounts && Object.keys(⟦2-char-id⟧.currencyAmounts).map((⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 90 · Change · +1 / -1</summary>

```diff
@@ -2280,7 +2280,7 @@
                     }), "\xa0", (0, ⟦2-char-id⟧.b)(⟦2-char-id⟧.amount, 6)]
                   }), (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.subtext) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) > 0 && (0, ⟦2-char-id⟧.jsx)("div", {
                     className: "ShopCurrencySubtext",
-                    children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                    children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                       text: ⟦2-char-id⟧.subtext
                     })
                   })]
```

</details>

<details>
<summary>Hunk 91 · Change · +1 / -1</summary>

```diff
@@ -2293,7 +2293,7 @@
               className: ⟦2-char-id⟧()("ShopOnBoughtInfo", {
                 ShopOnBoughtInfoShow: null !== ⟦2-char-id⟧.onBoughtInfo
               }),
-              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                 text: ⟦2-char-id⟧.current
               })
             }), (0, ⟦2-char-id⟧.jsx)("div", {
```

</details>

<details>
<summary>Hunk 92 · Change · +1 / -1</summary>

```diff
@@ -2302,7 +2302,7 @@
                 className: "ShopItemsInner",
                 children: [(null === (⟦2-char-id⟧ = ⟦2-char-id⟧.shopInfo[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.description) && (0, ⟦2-char-id⟧.jsx)("div", {
                   className: "ShopCategoryDescription",
-                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                     text: ⟦2-char-id⟧.shopInfo[⟦2-char-id⟧].description
                   })
                 }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
```

</details>

<details>
<summary>Hunk 93 · Change · +2 / -2</summary>

```diff
@@ -2332,8 +2332,8 @@
       if (⟦2-char-id⟧) return (0, ⟦2-char-id⟧.jsx)("div", {
         className: "ShopSchematic",
         style: {
-          width: `${ZJ}rem`,
-          height: `${FJ}rem`
+          width: `${dB}rem`,
+          height: `${VB}rem`
         },
         children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
           game: {
```

</details>

<details>
<summary>Hunk 94 · Change · +5 / -5</summary>

```diff
@@ -2342,16 +2342,16 @@
         })
       });
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
-      if ((0, ⟦2-char-id⟧.e)(⟦2-char-id⟧)) return (0, ⟦2-char-id⟧.jsx)("div", {
+      if ((0, ⟦2-char-id⟧.d)(⟦2-char-id⟧)) return (0, ⟦2-char-id⟧.jsx)("div", {
         className: "ShopBlock",
         style: {
-          minWidth: `${ZJ}rem`,
+          minWidth: `${dB}rem`,
           height: "0",
-          minHeight: `${FJ}rem`
+          minHeight: `${VB}rem`
         },
-        children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+        children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
           itemName: ⟦2-char-id⟧,
-          amount: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.amount) && void 0 !== ⟦2-char-id⟧ ? qJ : 0,
+          amount: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.amount) && void 0 !== ⟦2-char-id⟧ ? YB : 0,
           amountFontSize: ⟦2-char-id⟧ / 4 + "rem",
           enchantmentTier: null === (⟦2-char-id⟧ = ⟦2-char-id⟧.enchant) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.tier
         })
```

</details>

<details>
<summary>Hunk 95 · Change · +1 / -1</summary>

```diff
@@ -2360,7 +2360,7 @@
       return ".jpg" === ⟦2-char-id⟧ || ".png" === ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
         image: ⟦2-char-id⟧,
         minWidth: ⟦2-char-id⟧
-      }) : (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+      }) : (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
         name: ⟦2-char-id⟧,
         className: "SelectedItemImage",
         style: {
```

</details>

<details>
<summary>Hunk 96 · Change · +3 / -3</summary>

```diff
@@ -2376,17 +2376,17 @@
       } = ⟦2-char-id⟧;
       const {
         gameNameWithVariation: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.f)("connectedGame"), ⟦2-char-id⟧ = ⟦2-char-id⟧.endsWith(".jpg");
+      } = (0, ⟦2-char-id⟧.i)("connectedGame"), ⟦2-char-id⟧ = ⟦2-char-id⟧.endsWith(".jpg");
       return (0, ⟦2-char-id⟧.jsx)("img", {
         className: ⟦2-char-id⟧()({
           ShopPixelImage: !⟦2-char-id⟧
         }),
         style: {
-          width: `${UJ?1.6*ZJ:ZJ}rem`,
+          width: `${yB?1.6*dB:dB}rem`,
           height: "auto",
           fontSize: "1.25rem"
         },
-        src: `/textures/games/${(0,dJ.Jb)(FJ)}/${cJ}`,
+        src: `/textures/games/${(0,RB.Vb)(VB)}/${TB}`,
         alt: ⟦2-char-id⟧,
         draggable: !1
       })
```

</details>

<details>
<summary>Hunk 97 · Change · +1 / -1</summary>

```diff
@@ -2400,7 +2400,7 @@
       } = ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = !isNaN(⟦2-char-id⟧) && 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.currency);
       let ⟦2-char-id⟧ = null;
-      return ⟦2-char-id⟧.buyButtonText ? ⟦2-char-id⟧ = ⟦2-char-id⟧.buyButtonText : ⟦2-char-id⟧ ? (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧.sell && (⟦2-char-id⟧ = -1 * ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.toString()) : 0 === ⟦2-char-id⟧ ? ⟦2-char-id⟧ = "Free" : ⟦2-char-id⟧.isRewardedAd && (⟦2-char-id⟧ = "Watch ad"), (0, ⟦2-char-id⟧.P)(⟦2-char-id⟧) || " " === ⟦2-char-id⟧ ? null : (0, ⟦2-char-id⟧.jsxs)("div", {
+      return ⟦2-char-id⟧.buyButtonText ? ⟦2-char-id⟧ = ⟦2-char-id⟧.buyButtonText : ⟦2-char-id⟧ ? (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧.sell && (⟦2-char-id⟧ = -1 * ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.toString()) : 0 === ⟦2-char-id⟧ ? ⟦2-char-id⟧ = "Free" : ⟦2-char-id⟧.isRewardedAd && (⟦2-char-id⟧ = "Watch ad"), (0, ⟦2-char-id⟧.M)(⟦2-char-id⟧) || " " === ⟦2-char-id⟧ ? null : (0, ⟦2-char-id⟧.jsxs)("div", {
         className: "BuyItemCostAndIcon",
         children: [⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
           style: {
```

</details>

<details>
<summary>Hunk 98 · Change · +1 / -1</summary>

```diff
@@ -2412,7 +2412,7 @@
           })
         }), (0, ⟦2-char-id⟧.jsx)("div", {
           className: "BuyItemCost",
-          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
             text: ⟦2-char-id⟧
           })
         })]
```

</details>

<details>
<summary>Hunk 99 · Change · +2 / -2</summary>

```diff
@@ -2428,10 +2428,10 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null);
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null);
       if ((0, ⟦2-char-id⟧.useEffect)((() => {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.current;
-          ⟦2-char-id⟧ && ⟦2-char-id⟧.value !== ⟦2-char-id⟧ && document.activeElement !== ⟦2-char-id⟧ && (⟦2-char-id⟧.value = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? ZJ : "")
+          ⟦2-char-id⟧ && ⟦2-char-id⟧.value !== ⟦2-char-id⟧ && document.activeElement !== ⟦2-char-id⟧ && (⟦2-char-id⟧.value = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? dB : "")
         }), [⟦2-char-id⟧]), !⟦2-char-id⟧.userInput) return null;
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.userInput;
       if (⟦2-char-id⟧.featureFlags.sanitizeShopInput && "text" === ⟦2-char-id⟧.userInput.type && (⟦2-char-id⟧ = {
```

</details>

<details>
<summary>Hunk 100 · Change · +1 / -1</summary>

```diff
@@ -2439,7 +2439,7 @@
           placeholderText: "Numbers Only"
         }), "text" === ⟦2-char-id⟧.type || "number" === ⟦2-char-id⟧.type) {
         var ⟦2-char-id⟧, ⟦2-char-id⟧;
-        console.assert(void 0 !== ⟦2-char-id⟧, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(cJ)}`);
+        console.assert(void 0 !== ⟦2-char-id⟧, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(TB)}`);
         const ⟦2-char-id⟧ = "text" === ⟦2-char-id⟧.type && ⟦2-char-id⟧.wordCharsOnly;
         return (0, ⟦2-char-id⟧.jsx)("div", {
           className: "ShopItemUserInput ShopItemUserInputTextWrapper",
```

</details>

<details>
<summary>Hunk 101 · Change · +5 / -5</summary>

```diff
@@ -2449,20 +2449,20 @@
             defaultValue: ⟦2-char-id⟧,
             domRef: ⟦2-char-id⟧,
             onValueChange: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
-              !0 === ⟦2-char-id⟧ && (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.hb)(⟦2-char-id⟧)), ⟦2-char-id⟧.current.value = ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧)
+              !0 === ⟦2-char-id⟧ && (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.qb)(⟦2-char-id⟧)), ⟦2-char-id⟧.current.value = ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧)
             },
             onEnter: ⟦2-char-id⟧,
             type: ⟦2-char-id⟧.type
-          }, (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.initialValue) && void 0 !== ⟦2-char-id⟧ ? hJ : "") + (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.placeholderText) && void 0 !== ⟦2-char-id⟧ ? DJ : ""))
+          }, (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.initialValue) && void 0 !== ⟦2-char-id⟧ ? kB : "") + (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.placeholderText) && void 0 !== ⟦2-char-id⟧ ? LB : ""))
         })
       }
       if ("dropdown" === ⟦2-char-id⟧.type) {
-        console.assert(void 0 !== ⟦2-char-id⟧, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(cJ)}`);
+        console.assert(void 0 !== ⟦2-char-id⟧, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(TB)}`);
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.autoSubmit;
         return (0, ⟦2-char-id⟧.jsx)("div", {
           className: "ShopItemUserInput ShopItemUserInputDropdown",
-          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
-            options: ⟦2-char-id⟧.dropdownOptions.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧))),
+          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+            options: ⟦2-char-id⟧.dropdownOptions.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧))),
             value: ⟦2-char-id⟧,
             onChange: ⟦2-char-id⟧ => {
               let {
```

</details>

<details>
<summary>Hunk 102 · Change · +3 / -3</summary>

```diff
@@ -2495,12 +2495,12 @@
         currInput: ⟦2-char-id⟧,
         updateInput: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)("players"),
-        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)("hiddenPlayerNames"),
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.i)("players"),
+        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.i)("hiddenPlayerNames"),
         ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.k)(⟦2-char-id⟧.ids, ⟦2-char-id⟧.localId, ⟦2-char-id⟧);
       return (0, ⟦2-char-id⟧.jsx)("div", {
         className: "ShopItemUserInput ShopItemUserInputDropdown",
-        children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+        children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
           options: ⟦2-char-id⟧.map((⟦2-char-id⟧ => {
             const {
               name: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 103 · Change · +5 / -5</summary>

```diff
@@ -2539,17 +2539,17 @@
       let {
         iconName: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      return ⟦2-char-id⟧.gameBridge.lookup("isItemName", ⟦2-char-id⟧) ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+      return ⟦2-char-id⟧.gameBridge.lookup("isItemName", ⟦2-char-id⟧) ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
         itemName: ⟦2-char-id⟧,
         amount: 1
-      }) : (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+      }) : (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
         name: ⟦2-char-id⟧,
         className: "2x"
       })
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1528);
-    const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧(1300).g)((⟦2-char-id⟧ => ⟦2-char-id⟧.PadLobbyShortcuts)),
-      ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.lazy)((() => Promise.resolve().then((() => ⟦2-char-id⟧(4069))).then((⟦2-char-id⟧ => ({
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1507);
+    const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧(1286).l)((⟦2-char-id⟧ => ⟦2-char-id⟧.PadLobbyShortcuts)),
+      ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.lazy)((() => Promise.resolve().then((() => ⟦2-char-id⟧(4064))).then((⟦2-char-id⟧ => ({
         default: ⟦2-char-id⟧.Lobbyleaderboard
       })))));
 
```

</details>

<details>
<summary>Hunk 104 · Change · +11 / -11</summary>

```diff
@@ -2561,22 +2561,22 @@
         children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {}), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.Suspense, {
           fallback: (0, ⟦2-char-id⟧.jsx)("div", {
             className: "CharacterCustomisationLoading",
-            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {})
+            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {})
           }),
           children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {})
         })]
       }) : null
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1454),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2527),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1599),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2324),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1387),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1335),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2508),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1906),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2518),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2077);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1457),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2500),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1596),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2312),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1385),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1330),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2485),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1876),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2498),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2051);
     const ⟦2-char-id⟧ = "storeRecentGiftRecipients",
       ⟦2-char-id⟧ = new Map;
 
```

</details>

<details>
<summary>Hunk 105 · Change · +1 / -1</summary>

```diff
@@ -2598,7 +2598,7 @@
       (0, ⟦2-char-id⟧.useEffect)((() => () => {
         ⟦2-char-id⟧.current && clearTimeout(⟦2-char-id⟧.current)
       }), []);
-      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? cJ : null;
+      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? TB : null;
 
       function ⟦2-char-id⟧() {
         ⟦2-char-id⟧.current && (clearTimeout(⟦2-char-id⟧.current), ⟦2-char-id⟧.current = null)
```

</details>

<details>
<summary>Hunk 106 · Change · +2 / -2</summary>

```diff
@@ -2620,12 +2620,12 @@
         let ⟦2-char-id⟧ = !1;
         return async function(⟦2-char-id⟧, ⟦2-char-id⟧) {
           try {
-            const ⟦2-char-id⟧ = await (0, ⟦2-char-id⟧.postJsonWithMetricsCookiesAndJsonResponse)(`${bJ.clientSideServerUrls.indexUrl}/index/xsolla/gift-recipient`, {
+            const ⟦2-char-id⟧ = await (0, ⟦2-char-id⟧.postJsonWithMetricsCookiesAndJsonResponse)(`${FB.clientSideServerUrls.indexUrl}/index/xsolla/gift-recipient`, {
               giftRecipientName: ⟦2-char-id⟧
             }, {
               retries: 1
             }, ⟦2-char-id⟧.getMetricsCookies());
-            if ("boolean" !== typeof(null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(ZJ)}`);
+            if ("boolean" !== typeof(null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(dB)}`);
             return ⟦2-char-id⟧
           } catch (⟦2-char-id⟧) {
             return console.error("Failed to look up gift recipient:", ⟦2-char-id⟧), {
```

</details>

<details>
<summary>Hunk 107 · Change · +12 / -12</summary>

```diff
@@ -2708,26 +2708,26 @@
             if (!⟦2-char-id⟧ || ⟦2-char-id⟧.name.toLowerCase() !== ⟦2-char-id⟧.toLowerCase() || !0 !== ⟦2-char-id⟧.result.giftRecipientFound || "superRank" === ⟦2-char-id⟧) return ⟦2-char-id⟧;
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.result.giftRecipientOwnedPacks;
             return {
-              ...ZJ,
+              ...dB,
               result: {
-                ...ZJ.result,
-                giftRecipientOwnedPacks: ⟦2-char-id⟧.includes(⟦2-char-id⟧) ? FJ : [...FJ, ⟦2-char-id⟧]
+                ...dB.result,
+                giftRecipientOwnedPacks: ⟦2-char-id⟧.includes(⟦2-char-id⟧) ? VB : [...VB, ⟦2-char-id⟧]
               }
             }
           }))
         }
       }
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(2068),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4073),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2595),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2601);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(2047),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4070),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(232),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2575);
     const ⟦2-char-id⟧ = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(2032),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(521),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1537),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2112),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2246);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(2023),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(554),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1514),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2085),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2208);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let {
```

</details>

<details>
<summary>Hunk 108 · Change · +3 / -3</summary>

```diff
@@ -2743,18 +2743,18 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.friend) && void 0 !== ⟦2-char-id⟧ ? ZJ : {
+      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.friend) && void 0 !== ⟦2-char-id⟧ ? dB : {
         isError: !1,
         name: ⟦2-char-id⟧.name,
         ranks: [],
-        cosmetics: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.cosmetics) && void 0 !== ⟦2-char-id⟧ ? FJ : {},
+        cosmetics: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.cosmetics) && void 0 !== ⟦2-char-id⟧ ? VB : {},
         nameColour: ⟦2-char-id⟧.d,
         location: {
           status: "noGamePlayed"
         }
       };
       return ⟦2-char-id⟧ ? {
-        ...UJ,
+        ...yB,
         cosmetics: ⟦2-char-id⟧
       } : ⟦2-char-id⟧
     }
```

</details>

<details>
<summary>Hunk 109 · Change · +2 / -2</summary>

```diff
@@ -2765,8 +2765,8 @@
       } = ⟦2-char-id⟧;
       return "pending" === ⟦2-char-id⟧.status ? (0, ⟦2-char-id⟧.jsx)("span", {
         className: "StoreRecipientStatus",
-        children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {})
-      }) : "found" === ⟦2-char-id⟧.status ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+        children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {})
+      }) : "found" === ⟦2-char-id⟧.status ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
         name: "check",
         className: "StoreRecipientStatus StoreRecipientStatusFound"
       }) : null
```

</details>

<details>
<summary>Hunk 110 · Change · +4 / -4</summary>

```diff
@@ -2783,21 +2783,21 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.k)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), {
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.k)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), {
         query: ⟦2-char-id⟧,
         via: ⟦2-char-id⟧,
         recipient: ⟦2-char-id⟧,
         recipientCosmetics: ⟦2-char-id⟧
-      } = ⟦2-char-id⟧, ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)(⟦2-char-id⟧), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useMemo)((() => {
+      } = ⟦2-char-id⟧, ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.k)(⟦2-char-id⟧), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useMemo)((() => {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.featureFlags.useSocialFeatures ? ⟦2-char-id⟧.friends.filter((⟦2-char-id⟧ => !⟦2-char-id⟧.isError)) : [];
-        return (0, ⟦2-char-id⟧.h)({
+        return (0, ⟦2-char-id⟧.g)({
           onlineFriends: (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧),
           recentRecipients: ⟦2-char-id⟧(),
           friends: ⟦2-char-id⟧,
           selfName: ⟦2-char-id⟧,
           max: 8
         })
-      }), [⟦2-char-id⟧.friends, ⟦2-char-id⟧, ⟦2-char-id⟧]), ⟦2-char-id⟧ = ⟦2-char-id⟧.trim().toLowerCase(), ⟦2-char-id⟧ = "search" !== ⟦2-char-id⟧ && ⟦2-char-id⟧ ? ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.name.toLowerCase() === ⟦2-char-id⟧)) : void 0, ⟦2-char-id⟧ = ⟦2-char-id⟧ && "prefilled" === ⟦2-char-id⟧ ? [⟦2-char-id⟧, ...KJ.filter((⟦2-char-id⟧ => ⟦2-char-id⟧ !== ⟦2-char-id⟧))] : ⟦2-char-id⟧, ⟦2-char-id⟧ = "" !== ⟦2-char-id⟧ && !⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ ? rJ : "", ⟦2-char-id⟧ = ⟦2-char-id⟧.length > 0;
+      }), [⟦2-char-id⟧.friends, ⟦2-char-id⟧, ⟦2-char-id⟧]), ⟦2-char-id⟧ = ⟦2-char-id⟧.trim().toLowerCase(), ⟦2-char-id⟧ = "search" !== ⟦2-char-id⟧ && ⟦2-char-id⟧ ? ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.name.toLowerCase() === ⟦2-char-id⟧)) : void 0, ⟦2-char-id⟧ = ⟦2-char-id⟧ && "prefilled" === ⟦2-char-id⟧ ? [⟦2-char-id⟧, ...sB.filter((⟦2-char-id⟧ => ⟦2-char-id⟧ !== ⟦2-char-id⟧))] : ⟦2-char-id⟧, ⟦2-char-id⟧ = "" !== ⟦2-char-id⟧ && !⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ ? vB : "", ⟦2-char-id⟧ = ⟦2-char-id⟧.length > 0;
       (0, ⟦2-char-id⟧.useEffect)((() => {
         ⟦2-char-id⟧.current && ⟦2-char-id⟧.current.value !== ⟦2-char-id⟧ && (⟦2-char-id⟧.current.value = ⟦2-char-id⟧)
       }), [⟦2-char-id⟧]), (0, ⟦2-char-id⟧.useEffect)((() => {
```

</details>

<details>
<summary>Hunk 111 · Change · +1 / -1</summary>

```diff
@@ -2816,7 +2816,7 @@
         var ⟦2-char-id⟧, ⟦2-char-id⟧;
         if (⟦2-char-id⟧) return;
         if (" " === ⟦2-char-id⟧.key || "Enter" === ⟦2-char-id⟧.key) return ⟦2-char-id⟧.preventDefault(), void ⟦2-char-id⟧.currentTarget.click();
-        const ⟦2-char-id⟧ = Array.from(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.current) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.querySelectorAll("[role=radio]")) && void 0 !== ⟦2-char-id⟧ ? cJ : []),
+        const ⟦2-char-id⟧ = Array.from(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.current) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.querySelectorAll("[role=radio]")) && void 0 !== ⟦2-char-id⟧ ? TB : []),
           ⟦2-char-id⟧ = ⟦2-char-id⟧.indexOf(⟦2-char-id⟧.currentTarget);
         let ⟦2-char-id⟧;
         "ArrowRight" === ⟦2-char-id⟧.key || "ArrowDown" === ⟦2-char-id⟧.key ? ⟦2-char-id⟧ = ⟦2-char-id⟧[(⟦2-char-id⟧ + 1) % ⟦2-char-id⟧.length] : "ArrowLeft" === ⟦2-char-id⟧.key || "ArrowUp" === ⟦2-char-id⟧.key ? ⟦2-char-id⟧ = ⟦2-char-id⟧[(⟦2-char-id⟧ - 1 + ⟦2-char-id⟧.length) % ⟦2-char-id⟧.length] : "Home" === ⟦2-char-id⟧.key ? ⟦2-char-id⟧ = ⟦2-char-id⟧[0] : "End" === ⟦2-char-id⟧.key && (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.length - 1]), ⟦2-char-id⟧ && (⟦2-char-id⟧.preventDefault(), ⟦2-char-id⟧.focus(), ⟦2-char-id⟧.click())
```

</details>

<details>
<summary>Hunk 112 · Change · +1 / -1</summary>

```diff
@@ -2825,7 +2825,7 @@
         ⟦2-char-id⟧ > ⟦2-char-id⟧.current && !⟦2-char-id⟧ && (⟦2-char-id⟧.current = ⟦2-char-id⟧, null === (⟦2-char-id⟧ = ⟦2-char-id⟧.current) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.focus())
       }), [⟦2-char-id⟧, ⟦2-char-id⟧]);
       const ⟦2-char-id⟧ = "self" === ⟦2-char-id⟧,
-        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? cJ : null,
+        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? TB : null,
         ⟦2-char-id⟧ = "error" === ⟦2-char-id⟧.status ? ⟦2-char-id⟧.error : null,
         ⟦2-char-id⟧ = "store:giftRecipientLookupFailed" === ⟦2-char-id⟧;
       return (0, ⟦2-char-id⟧.jsxs)("div", {
```

</details>

<details>
<summary>Hunk 113 · Change · +2 / -2</summary>

```diff
@@ -2854,9 +2854,9 @@
               ⟦2-char-id⟧ || ⟦2-char-id⟧()
             },
             onKeyDown: ⟦2-char-id⟧,
-            children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+            children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
               name: "user"
-            }), " ", DJ("store:me")]
+            }), " ", LB("store:me")]
           }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
             className: "StoreRecipientChips",
             children: ⟦2-char-id⟧.map((⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 114 · Change · +2 / -2</summary>

```diff
@@ -2879,8 +2879,8 @@
                   }(⟦2-char-id⟧)
                 },
                 onKeyDown: ⟦2-char-id⟧,
-                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.g, {
-                  playerSocialPreview: ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ ? EJ : null),
+                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.i, {
+                  playerSocialPreview: ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ ? tB : null),
                   opensProfileCard: !1,
                   isFriend: null !== ⟦2-char-id⟧.friend,
                   hideFriendBadge: !0,
```

</details>

<details>
<summary>Hunk 115 · Change · +1 / -1</summary>

```diff
@@ -2905,7 +2905,7 @@
           },
           children: [⟦2-char-id⟧ && "found" === ⟦2-char-id⟧.status && ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
             cosmetics: ⟦2-char-id⟧
-          }), !(⟦2-char-id⟧ && "found" === ⟦2-char-id⟧.status && ⟦2-char-id⟧) && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+          }), !(⟦2-char-id⟧ && "found" === ⟦2-char-id⟧.status && ⟦2-char-id⟧) && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
             name: "magnifying-glass",
             className: "StoreRecipientSearchIcon"
           }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
```

</details>

<details>
<summary>Hunk 116 · Change · +1 / -1</summary>

```diff
@@ -2913,7 +2913,7 @@
             domRef: ⟦2-char-id⟧,
             placeholderText: ⟦2-char-id⟧("store:searchName"),
             defaultValue: ⟦2-char-id⟧,
-            maxLength: ⟦2-char-id⟧.i,
+            maxLength: ⟦2-char-id⟧.e,
             onValueChange: function(⟦2-char-id⟧) {
               "gift" !== ⟦2-char-id⟧ && ⟦2-char-id⟧.trim() && (0, ⟦2-char-id⟧.f)({
                 id: "store.mode",
```

</details>

<details>
<summary>Hunk 117 · Change · +1 / -1</summary>

```diff
@@ -2929,7 +2929,7 @@
           }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
             recipient: ⟦2-char-id⟧
           }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
-            ...(0, ⟦2-char-id⟧.U)({
+            ...(0, ⟦2-char-id⟧._)({
               disabled: ⟦2-char-id⟧
             }),
             "aria-label": ⟦2-char-id⟧("store:clearRecipient"),
```

</details>

<details>
<summary>Hunk 118 · Change · +1 / -1</summary>

```diff
@@ -2938,7 +2938,7 @@
             onClick: ⟦2-char-id⟧ => {
               ⟦2-char-id⟧.stopPropagation(), ⟦2-char-id⟧ || ⟦2-char-id⟧()
             },
-            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
               name: "xmark"
             })
           })]
```

</details>

<details>
<summary>Hunk 119 · Change · +6 / -6</summary>

```diff
@@ -2951,15 +2951,15 @@
         })]
       })
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(2085),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2013),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3065),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2615),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2042);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(2053),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2001),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3078),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2592),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2034);
     const ⟦2-char-id⟧ = ⟦2-char-id⟧.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";
 
     function ⟦2-char-id⟧() {
-      (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, {
+      (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, {
         lowPriority: !1
       })
     }
```

</details>

<details>
<summary>Hunk 120 · Change · +2 / -2</summary>

```diff
@@ -2973,12 +2973,12 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)("starting"), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useCallback)((() => {
+      } = (0, ⟦2-char-id⟧.z)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)("starting"), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useCallback)((() => {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.current;
         null !== ⟦2-char-id⟧.error && ⟦2-char-id⟧.load();
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.play();
         ⟦2-char-id⟧.current = ⟦2-char-id⟧, ⟦2-char-id⟧.catch((⟦2-char-id⟧ => {
-          (0, ⟦2-char-id⟧.c)("Failed to play Super Rank video", ⟦2-char-id⟧), ⟦2-char-id⟧.current && ⟦2-char-id⟧.current === ⟦2-char-id⟧ && ⟦2-char-id⟧("failed")
+          (0, ⟦2-char-id⟧.e)("Failed to play Super Rank video", ⟦2-char-id⟧), ⟦2-char-id⟧.current && ⟦2-char-id⟧.current === ⟦2-char-id⟧ && ⟦2-char-id⟧("failed")
         }))
       }), [⟦2-char-id⟧]);
       return (0, ⟦2-char-id⟧.useEffect)((() => {
```

</details>

<details>
<summary>Hunk 121 · Change · +2 / -2</summary>

```diff
@@ -3002,9 +3002,9 @@
             children: ⟦2-char-id⟧("general:back")
           }), (0, ⟦2-char-id⟧.jsxs)("div", {
             className: "StoreTileTitle StoreSuperRankTitle",
-            children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+            children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
               name: "bolt"
-            }), " ", qJ("homePage:superRank")]
+            }), " ", YB("homePage:superRank")]
           }), ⟦2-char-id⟧]
         }), (0, ⟦2-char-id⟧.jsxs)("div", {
           className: "StoreSuperRankDetailBody",
```

</details>

<details>
<summary>Hunk 122 · Change · +1 / -1</summary>

```diff
@@ -3012,7 +3012,7 @@
             className: "StoreSuperRankVideo",
             children: [(0, ⟦2-char-id⟧.jsx)("video", {
               ref: ⟦2-char-id⟧,
-              src: `${bJ.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
+              src: `${FB.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
               poster: ⟦2-char-id⟧,
               muted: !0,
               playsInline: !0,
```

</details>

<details>
<summary>Hunk 123 · Change · +1 / -1</summary>

```diff
@@ -3032,7 +3032,7 @@
                   ⟦2-char-id⟧("loading"), ⟦2-char-id⟧()
                 },
                 touchPressOn: "pointerup",
-                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                   name: "play"
                 })
               })
```

</details>

<details>
<summary>Hunk 124 · Change · +1 / -1</summary>

```diff
@@ -3041,7 +3041,7 @@
             className: "StoreSuperRankDetailSide",
             children: [(0, ⟦2-char-id⟧.jsx)("div", {
               className: "StoreSuperRankDetailTable",
-              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {})
+              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {})
             }), (0, ⟦2-char-id⟧.jsxs)("div", {
               className: "StoreTileActions",
               children: [⟦2-char-id⟧, ⟦2-char-id⟧]
```

</details>

<details>
<summary>Hunk 125 · Change · +4 / -4</summary>

```diff
@@ -3050,10 +3050,10 @@
         })]
       })
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(2258),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3019),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2589);
-    const ⟦2-char-id⟧ = [⟦2-char-id⟧.w.yellow, ⟦2-char-id⟧.w.green, ⟦2-char-id⟧.w.aqua, ⟦2-char-id⟧.w.blue, ⟦2-char-id⟧.w.purple, ⟦2-char-id⟧.w.red];
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(2228),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3031),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2567);
+    const ⟦2-char-id⟧ = [⟦2-char-id⟧.t.yellow, ⟦2-char-id⟧.t.green, ⟦2-char-id⟧.t.aqua, ⟦2-char-id⟧.t.blue, ⟦2-char-id⟧.t.purple, ⟦2-char-id⟧.t.red];
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       return "needsRecipient" === ⟦2-char-id⟧ || "lookingUp" === ⟦2-char-id⟧ || "gift" === ⟦2-char-id⟧ || "recipientOwns" === ⟦2-char-id⟧ || "recipientSharesOwned" === ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 126 · Change · +3 / -3</summary>

```diff
@@ -3062,10 +3062,10 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       const {
         onKeyDown: ⟦2-char-id⟧,
-        ...ZJ
-      } = (0, ⟦2-char-id⟧.U)();
+        ...dB
+      } = (0, ⟦2-char-id⟧._)();
       return {
-        ...ZJ,
+        ...dB,
         "aria-label": ⟦2-char-id⟧,
         onKeyDown: ⟦2-char-id⟧ => {
           ⟦2-char-id⟧.target === ⟦2-char-id⟧.currentTarget && (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧))
```

</details>

<details>
<summary>Hunk 127 · Change · +2 / -2</summary>

```diff
@@ -3102,11 +3102,11 @@
         highlight: ⟦2-char-id⟧ = !1,
         onAct: ⟦2-char-id⟧,
         onNeedRecipient: ⟦2-char-id⟧,
-        onLogin: ⟦2-char-id⟧ = ⟦2-char-id⟧.b
+        onLogin: ⟦2-char-id⟧ = ⟦2-char-id⟧.d
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = "superRank" === ⟦2-char-id⟧ ? ⟦2-char-id⟧.i.product.days : null, ⟦2-char-id⟧ = ⟦2-char-id⟧ => null === ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧ ? "general:gift" : "general:buy") : ⟦2-char-id⟧(⟦2-char-id⟧ ? "store:giftDays" : "store:buyDays", {
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = "superRank" === ⟦2-char-id⟧ ? ⟦2-char-id⟧.p.product.days : null, ⟦2-char-id⟧ = ⟦2-char-id⟧ => null === ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧ ? "general:gift" : "general:buy") : ⟦2-char-id⟧(⟦2-char-id⟧ ? "store:giftDays" : "store:buyDays", {
         days: ⟦2-char-id⟧
       }), ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
         children: [⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("span", {
```

</details>

<details>
<summary>Hunk 128 · Change · +2 / -2</summary>

```diff
@@ -3128,14 +3128,14 @@
       let ⟦2-char-id⟧;
       switch (⟦2-char-id⟧) {
         case "pending":
-          ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.m, {
+          ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.k, {
             className: "StoreCtaButton",
             disabled: !0,
             children: ⟦2-char-id⟧(null)
           });
           break;
         case "login":
-          ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.m, {
+          ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.k, {
             className: "StoreCtaButton",
             onClick: ⟦2-char-id⟧,
             children: ⟦2-char-id⟧(⟦2-char-id⟧("store:logIn"))
```

</details>

<details>
<summary>Hunk 129 · Change · +3 / -3</summary>

```diff
@@ -3151,16 +3151,16 @@
             },
             children: (0, ⟦2-char-id⟧.jsxs)("span", {
               className: "StoreCtaLabel",
-              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                 name: "shirt"
-              }), " ", sJ("store:equip")]
+              }), " ", OB("store:equip")]
             })
           });
           break;
         case "recipientOwns":
         case "sharesOwned":
         case "recipientSharesOwned":
-          ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.m, {
+          ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.k, {
             className: "StoreCtaButton",
             disabled: !0,
             children: (0, ⟦2-char-id⟧.jsx)("span", {
```

</details>

<details>
<summary>Hunk 130 · Change · +1 / -1</summary>

```diff
@@ -3172,7 +3172,7 @@
         case "needsRecipient":
         case "lookingUp":
         case "gift":
-          ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.m, {
+          ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.k, {
             className: "StoreCtaButton",
             disabled: "needsRecipient" === ⟦2-char-id⟧ || null === ⟦2-char-id⟧,
             loading: "lookingUp" === ⟦2-char-id⟧ || ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 131 · Change · +2 / -2</summary>

```diff
@@ -3181,12 +3181,12 @@
               id: "store.gift",
               value: ⟦2-char-id⟧
             },
-            children: ⟦2-char-id⟧(⟦2-char-id⟧(!0), ⟦2-char-id⟧.b)
+            children: ⟦2-char-id⟧(⟦2-char-id⟧(!0), ⟦2-char-id⟧.d)
           });
           break;
         case "buy":
         case "recharge":
-          ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.m, {
+          ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.k, {
             className: "StoreCtaButton",
             loading: ⟦2-char-id⟧,
             disabled: null === ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 132 · Change · +9 / -9</summary>

```diff
@@ -3212,28 +3212,28 @@
     function ⟦2-char-id⟧() {
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)();
+      } = (0, ⟦2-char-id⟧.z)();
       return (0, ⟦2-char-id⟧.jsxs)("ul", {
         className: "StorePerks",
         children: [(0, ⟦2-char-id⟧.jsxs)("li", {
-          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
             name: "check"
           }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
             text: ⟦2-char-id⟧("store:colourfulNames")
           })]
         }), (0, ⟦2-char-id⟧.jsxs)("li", {
-          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
             name: "check"
-          }), JJ("store:perkCapes")]
+          }), BB("store:perkCapes")]
         }), (0, ⟦2-char-id⟧.jsxs)("li", {
-          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
             name: "check"
-          }), JJ("store:perkNoAdverts")]
+          }), BB("store:perkNoAdverts")]
         }), (0, ⟦2-char-id⟧.jsxs)("li", {
-          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
             name: "check"
-          }), JJ("store:perkFriends", {
-            count: (0, ⟦2-char-id⟧.b)(["super"])
+          }), BB("store:perkFriends", {
+            count: (0, ⟦2-char-id⟧.e)(["super"])
           })]
         })]
       })
```

</details>

<details>
<summary>Hunk 133 · Change · +1 / -1</summary>

```diff
@@ -3247,7 +3247,7 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = ⟦2-char-id⟧ > 0 ? Math.min(1, Math.max(.03, ⟦2-char-id⟧ / ⟦2-char-id⟧)) : 1;
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = ⟦2-char-id⟧ > 0 ? Math.min(1, Math.max(.03, ⟦2-char-id⟧ / ⟦2-char-id⟧)) : 1;
       return (0, ⟦2-char-id⟧.jsxs)("div", {
         className: ⟦2-char-id⟧()("StoreSuperRankMeterArea", {
           StoreSuperRankMeterUrgent: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 134 · Change · +2 / -2</summary>

```diff
@@ -3284,9 +3284,9 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧), {
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧), {
         days: ⟦2-char-id⟧
-      } = ⟦2-char-id⟧.i.product, ⟦2-char-id⟧ = ⟦2-char-id⟧("store:recipientHasSuperRank", {
+      } = ⟦2-char-id⟧.p.product, ⟦2-char-id⟧ = ⟦2-char-id⟧("store:recipientHasSuperRank", {
         giftDays: ⟦2-char-id⟧
       });
       return (0, ⟦2-char-id⟧.jsxs)("div", {
```

</details>

<details>
<summary>Hunk 135 · Change · +1 / -1</summary>

```diff
@@ -3296,7 +3296,7 @@
           StoreSuperRankTileWithChip: ⟦2-char-id⟧,
           StoreSuperRankTileGiftReady: "gift" === ⟦2-char-id⟧
         }),
-        ...pF(⟦2-char-id⟧("homePage:superRank")),
+        ...RV(⟦2-char-id⟧("homePage:superRank")),
         "data-store-item": "superRank",
         onPointerEnter: ⟦2-char-id⟧,
         onFocus: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 136 · Change · +1 / -1</summary>

```diff
@@ -3304,7 +3304,7 @@
         children: [(0, ⟦2-char-id⟧.jsx)("div", {
           className: "StoreSuperRankArt",
           style: {
-            backgroundImage: `url(${nF.d})`
+            backgroundImage: `url(${uV.c})`
           }
         }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
           className: "StoreGiftRibbon"
```

</details>

<details>
<summary>Hunk 137 · Change · +2 / -2</summary>

```diff
@@ -3316,9 +3316,9 @@
             children: ⟦2-char-id⟧
           }), (0, ⟦2-char-id⟧.jsxs)("div", {
             className: "StoreTileTitle StoreSuperRankTitle",
-            children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+            children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
               name: "bolt"
-            }), " ", fJ("homePage:superRank")]
+            }), " ", HB("homePage:superRank")]
           }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
             className: "StoreTilePitch",
             children: ⟦2-char-id⟧("store:giftPitch", {
```

</details>

<details>
<summary>Hunk 138 · Change · +1 / -1</summary>

```diff
@@ -3333,7 +3333,7 @@
             children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
               state: ⟦2-char-id⟧,
               item: "superRank",
-              price: ⟦2-char-id⟧.i.price,
+              price: ⟦2-char-id⟧.p.price,
               busy: ⟦2-char-id⟧,
               highlight: ⟦2-char-id⟧,
               onAct: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 139 · Change · +6 / -6</summary>

```diff
@@ -3371,14 +3371,14 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = ⟦2-char-id⟧.e[⟦2-char-id⟧], ⟦2-char-id⟧ = ⟦2-char-id⟧.h[⟦2-char-id⟧], ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.l)(⟦2-char-id⟧), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null);
-      (0, ⟦2-char-id⟧.j)(⟦2-char-id⟧, ⟦2-char-id⟧);
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = ⟦2-char-id⟧.c[⟦2-char-id⟧], ⟦2-char-id⟧ = ⟦2-char-id⟧.n[⟦2-char-id⟧], ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.k)(⟦2-char-id⟧), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null);
+      (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧, ⟦2-char-id⟧);
       const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧),
-        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.displayName) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧,
-        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)((() => {
+        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.displayName) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧,
+        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)((() => {
           (0, ⟦2-char-id⟧.d)();
-          const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧);
-          void 0 !== ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.f)((0, ⟦2-char-id⟧.c)(⟦2-char-id⟧))
+          const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧);
+          void 0 !== ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.m)((0, ⟦2-char-id⟧.b)(⟦2-char-id⟧))
         })),
         [⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(⟦2-char-id⟧.j);
       return (0, ⟦2-char-id⟧.jsxs)("div", {
```

</details>

<details>
<summary>Hunk 140 · Change · +1 / -1</summary>

```diff
@@ -3387,7 +3387,7 @@
           StorePackTileRecipientOwns: "recipientOwns" === ⟦2-char-id⟧,
           StoreTileGift: ⟦2-char-id⟧
         }),
-        ...pF(⟦2-char-id⟧),
+        ...RV(⟦2-char-id⟧),
         ref: ⟦2-char-id⟧,
         "data-store-item": ⟦2-char-id⟧,
         onClick: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 141 · Change · +1 / -1</summary>

```diff
@@ -3400,7 +3400,7 @@
           children: ⟦2-char-id⟧.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsx)("div", {
             className: "StorePackCharacter",
             style: {
-              backgroundImage: `url(${(0,nF.h)(JJ)})`
+              backgroundImage: `url(${(0,uV.g)(BB)})`
             }
           }, ⟦2-char-id⟧)))
         }), (0, ⟦2-char-id⟧.jsx)("div", {
```

</details>

<details>
<summary>Hunk 142 · Change · +4 / -4</summary>

```diff
@@ -3415,17 +3415,17 @@
           }), (0, ⟦2-char-id⟧.jsxs)("div", {
             className: "StoreTileMeta",
             children: [⟦2-char-id⟧("store:itemCount", {
-              count: (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧)
+              count: (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧)
             }), "owned" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)("span", {
               className: "StoreTileOwned",
-              children: [" \xb7 ", (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+              children: [" \xb7 ", (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                 name: "check"
-              }), " ", nJ("general:owned")]
+              }), " ", DB("general:owned")]
             })]
           }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
             state: ⟦2-char-id⟧,
             item: ⟦2-char-id⟧,
-            price: (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧),
+            price: (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧),
             busy: ⟦2-char-id⟧,
             onAct: ⟦2-char-id⟧,
             onNeedRecipient: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 143 · Change · +2 / -2</summary>

```diff
@@ -3434,8 +3434,8 @@
         })]
       })
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(2556),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1239);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(2525),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1229);
     const ⟦2-char-id⟧ = {
       standard: "StoreCharacterCardStandard",
       enhanced: "StoreCharacterCardEnhanced",
```

</details>

<details>
<summary>Hunk 144 · Change · +2 / -2</summary>

```diff
@@ -3454,10 +3454,10 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), {
+      } = (0, ⟦2-char-id⟧.z)(), {
         pack: ⟦2-char-id⟧,
         state: ⟦2-char-id⟧
-      } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.e[⟦2-char-id⟧], ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.h[(0, ⟦2-char-id⟧.k)(⟦2-char-id⟧)], ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.tier) && void 0 !== ⟦2-char-id⟧ ? cJ : "standard", ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null);
+      } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.c[⟦2-char-id⟧], ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.n[(0, ⟦2-char-id⟧.i)(⟦2-char-id⟧)], ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.tier) && void 0 !== ⟦2-char-id⟧ ? TB : "standard", ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null);
       return (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧, "standard" !== ⟦2-char-id⟧), (0, ⟦2-char-id⟧.jsxs)("div", {
         ref: ⟦2-char-id⟧,
         className: ⟦2-char-id⟧()("StoreCharacterCard", ⟦2-char-id⟧[⟦2-char-id⟧], {
```

</details>

<details>
<summary>Hunk 145 · Change · +2 / -2</summary>

```diff
@@ -3474,13 +3474,13 @@
           }), (0, ⟦2-char-id⟧.jsx)("div", {
             className: "StoreCharacterFigure",
             style: {
-              backgroundImage: `url(${(0,nF.h)(rJ)})`
+              backgroundImage: `url(${(0,uV.g)(vB)})`
             }
           }), "owned" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("span", {
             className: "StoreCharacterOwned",
             title: ⟦2-char-id⟧("general:owned"),
             "aria-label": ⟦2-char-id⟧("general:owned"),
-            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
               name: "check"
             })
           })]
```

</details>

<details>
<summary>Hunk 146 · Change · +2 / -2</summary>

```diff
@@ -3488,11 +3488,11 @@
           className: "StoreCharacterPlate",
           children: [(0, ⟦2-char-id⟧.jsx)("div", {
             className: "StoreCharacterName",
-            children: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.displayName) && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧
+            children: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.displayName) && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧
           }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
             state: ⟦2-char-id⟧,
             item: ⟦2-char-id⟧,
-            price: (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧),
+            price: (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧),
             busy: ⟦2-char-id⟧,
             highlight: ⟦2-char-id⟧,
             onAct: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 147 · Change · +2 / -2</summary>

```diff
@@ -3557,9 +3557,9 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = ⟦2-char-id⟧.packs.filter((⟦2-char-id⟧ => void 0 === (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧.pack))), ⟦2-char-id⟧ = ⟦2-char-id⟧.packs.filter((⟦2-char-id⟧ => void 0 !== (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧.pack)));
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = ⟦2-char-id⟧.packs.filter((⟦2-char-id⟧ => void 0 === (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧.pack))), ⟦2-char-id⟧ = ⟦2-char-id⟧.packs.filter((⟦2-char-id⟧ => void 0 !== (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧.pack)));
       return (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
-        children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+        children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
           className: "StoreSuperGems",
           gift: ⟦2-char-id⟧
         }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
```

</details>

<details>
<summary>Hunk 148 · Change · +1 / -1</summary>

```diff
@@ -3629,7 +3629,7 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)();
+      } = (0, ⟦2-char-id⟧.z)();
       return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
         onBack: ⟦2-char-id⟧,
         recipient: "gift" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
```

</details>

<details>
<summary>Hunk 149 · Change · +4 / -4</summary>

```diff
@@ -3638,20 +3638,20 @@
             title: ⟦2-char-id⟧("store:giftFor", {
               name: ⟦2-char-id⟧
             }),
-            children: [⟦2-char-id⟧.b, " ", sJ("store:giftFor", {
+            children: [⟦2-char-id⟧.d, " ", OB("store:giftFor", {
               name: ⟦2-char-id⟧
             })]
           }), !⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)("div", {
-            ...(0, ⟦2-char-id⟧.U)(),
+            ...(0, ⟦2-char-id⟧._)(),
             className: "StoreDetailRecipient StoreDetailRecipientChoose",
             onClick: ⟦2-char-id⟧,
-            children: [⟦2-char-id⟧.b, " ", sJ("store:chooseRecipient")]
+            children: [⟦2-char-id⟧.d, " ", OB("store:chooseRecipient")]
           })]
         }),
         cta: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
           state: ⟦2-char-id⟧,
           item: "superRank",
-          price: ⟦2-char-id⟧.i.price,
+          price: ⟦2-char-id⟧.p.price,
           busy: ⟦2-char-id⟧,
           highlight: ⟦2-char-id⟧,
           onAct: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 150 · Change · +1 / -1</summary>

```diff
@@ -3669,7 +3669,7 @@
     const ⟦2-char-id⟧ = {
         kind: "board"
       },
-      ⟦2-char-id⟧ = [...aZ.p, ...aZ.m];
+      ⟦2-char-id⟧ = [...Ad.n, ...Ad.l];
     let ⟦2-char-id⟧ = !1;
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 151 · Change · +1 / -1</summary>

```diff
@@ -3678,7 +3678,7 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       return "found" === ⟦2-char-id⟧.status || "error" === ⟦2-char-id⟧.status && "store:giftRecipientLookupFailed" === ⟦2-char-id⟧.error ? ⟦2-char-id⟧.name : null
-    }(0, ⟦2-char-id⟧.q)(⟦2-char-id⟧.prefetchPremiumCurrencyBundles);
+    }(0, ⟦2-char-id⟧.p)(⟦2-char-id⟧.prefetchPremiumCurrencyBundles);
     const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.memo)((function(⟦2-char-id⟧) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
       let {
```

</details>

<details>
<summary>Hunk 152 · Change · +5 / -5</summary>

```diff
@@ -3686,20 +3686,20 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), {
+      } = (0, ⟦2-char-id⟧.z)(), {
         userContext: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.d)(), ⟦2-char-id⟧ = ⟦2-char-id⟧ !== ⟦2-char-id⟧.NULL_USER_CONTEXT, ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.d)(), {
+      } = (0, ⟦2-char-id⟧.b)(), ⟦2-char-id⟧ = ⟦2-char-id⟧ !== ⟦2-char-id⟧.NULL_USER_CONTEXT, ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.e)(), {
         page: ⟦2-char-id⟧,
         urlMode: ⟦2-char-id⟧,
         goTo: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.f)(), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧), {
+      } = (0, ⟦2-char-id⟧.c)(), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧), {
         openEverythingMenuName: ⟦2-char-id⟧,
         gameState: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.j)(["openEverythingMenuName", "gameState"]), ⟦2-char-id⟧ = null !== ⟦2-char-id⟧;
+      } = (0, ⟦2-char-id⟧.m)(["openEverythingMenuName", "gameState"]), ⟦2-char-id⟧ = null !== ⟦2-char-id⟧;
       ! function(⟦2-char-id⟧, ⟦2-char-id⟧) {
         const [⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(⟦2-char-id⟧.j), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1);
         ⟦2-char-id⟧ && ⟦2-char-id⟧ && !⟦2-char-id⟧ && ⟦2-char-id⟧(!0);
-        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.q)(),
+        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.r)(),
           ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧ && ⟦2-char-id⟧ && !⟦2-char-id⟧;
         (0, ⟦2-char-id⟧.useEffect)((() => {
           if (!⟦2-char-id⟧) return;
```

</details>

<details>
<summary>Hunk 153 · Change · +4 / -4</summary>

```diff
@@ -3712,13 +3712,13 @@
               null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(), ⟦2-char-id⟧ = null, null !== ⟦2-char-id⟧ && (clearTimeout(⟦2-char-id⟧), ⟦2-char-id⟧ = null), null !== ⟦2-char-id⟧ && (clearTimeout(⟦2-char-id⟧), ⟦2-char-id⟧ = null)
             },
             ⟦2-char-id⟧ = () => {
-              (0, ⟦2-char-id⟧.m)(!1), (0, ⟦2-char-id⟧.l)(!1), ⟦2-char-id⟧(), ⟦2-char-id⟧ = setTimeout((() => {
+              (0, ⟦2-char-id⟧.n)(!1), (0, ⟦2-char-id⟧.m)(!1), ⟦2-char-id⟧(), ⟦2-char-id⟧ = setTimeout((() => {
                 ⟦2-char-id⟧ = null, ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)((() => {
-                  ⟦2-char-id⟧ = null, ⟦2-char-id⟧() ? ⟦2-char-id⟧() : ((0, ⟦2-char-id⟧.m)(!0), ⟦2-char-id⟧ = setTimeout((() => {
+                  ⟦2-char-id⟧ = null, ⟦2-char-id⟧() ? ⟦2-char-id⟧() : ((0, ⟦2-char-id⟧.n)(!0), ⟦2-char-id⟧ = setTimeout((() => {
                     ⟦2-char-id⟧ = null, ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)((() => {
-                      ⟦2-char-id⟧ = null, ⟦2-char-id⟧() ? ⟦2-char-id⟧() : (0, ⟦2-char-id⟧.l)(!0)
+                      ⟦2-char-id⟧ = null, ⟦2-char-id⟧() ? ⟦2-char-id⟧() : (0, ⟦2-char-id⟧.m)(!0)
                     }))
-                  }), 3⟦2-char-id⟧), Promise.resolve().then((() => ⟦2-char-id⟧(4069))).then((⟦2-char-id⟧ => {
+                  }), 3⟦2-char-id⟧), Promise.resolve().then((() => ⟦2-char-id⟧(4064))).then((⟦2-char-id⟧ => {
                     ⟦2-char-id⟧.startBackgroundGameSetup()
                   }), (⟦2-char-id⟧ => {
                     console.warn("Background game setup: its chunk failed to load", ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 154 · Change · +1 / -1</summary>

```diff
@@ -3734,7 +3734,7 @@
             for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) window.removeEventListener(⟦2-char-id⟧, ⟦2-char-id⟧, {
               capture: !0
             });
-            ⟦2-char-id⟧(), (0, ⟦2-char-id⟧.m)(!1), (0, ⟦2-char-id⟧.l)(!1)
+            ⟦2-char-id⟧(), (0, ⟦2-char-id⟧.n)(!1), (0, ⟦2-char-id⟧.m)(!1)
           }
         }), [⟦2-char-id⟧])
       }(⟦2-char-id⟧ && ⟦2-char-id⟧, "pack" === ⟦2-char-id⟧.kind);
```

</details>

<details>
<summary>Hunk 155 · Change · +2 / -2</summary>

```diff
@@ -3742,9 +3742,9 @@
       (0, ⟦2-char-id⟧.useEffect)((() => {
         ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.prefetchPremiumCurrencyBundles)()
       }), [⟦2-char-id⟧]), (0, ⟦2-char-id⟧.useEffect)((() => {
-        ⟦2-char-id⟧ && !⟦2-char-id⟧ && ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.t)()
+        ⟦2-char-id⟧ && !⟦2-char-id⟧ && ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.p)()
       }), [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧]);
-      const [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(0), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(!1), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(0), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(!1);
+      const [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(0), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(!1), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.y)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(0), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(!1);
 
       function ⟦2-char-id⟧() {
         ⟦2-char-id⟧((⟦2-char-id⟧ => ⟦2-char-id⟧ + 1))
```

</details>

<details>
<summary>Hunk 156 · Change · +1 / -1</summary>

```diff
@@ -3754,7 +3754,7 @@
             var ⟦2-char-id⟧, ⟦2-char-id⟧;
             ⟦2-char-id⟧.current = ⟦2-char-id⟧.seq;
             const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧);
-            ⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧.highlight && null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧.openItem) && void 0 !== ⟦2-char-id⟧ ? JJ : null), ⟦2-char-id⟧(null), "gift" === ⟦2-char-id⟧.mode && ⟦2-char-id⟧.giftRecipientName ? ⟦2-char-id⟧.choose(⟦2-char-id⟧.giftRecipientName, "prefilled") : "current" !== ⟦2-char-id⟧.mode && ⟦2-char-id⟧.clear(), "gift" !== ⟦2-char-id⟧.mode || ⟦2-char-id⟧.giftRecipientName || ⟦2-char-id⟧(), (0, ⟦2-char-id⟧.f)({
+            ⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧.highlight && null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧.openItem) && void 0 !== ⟦2-char-id⟧ ? BB : null), ⟦2-char-id⟧(null), "gift" === ⟦2-char-id⟧.mode && ⟦2-char-id⟧.giftRecipientName ? ⟦2-char-id⟧.choose(⟦2-char-id⟧.giftRecipientName, "prefilled") : "current" !== ⟦2-char-id⟧.mode && ⟦2-char-id⟧.clear(), "gift" !== ⟦2-char-id⟧.mode || ⟦2-char-id⟧.giftRecipientName || ⟦2-char-id⟧(), (0, ⟦2-char-id⟧.f)({
               id: "store.open",
               value: ⟦2-char-id⟧.source
             })
```

</details>

<details>
<summary>Hunk 157 · Change · +1 / -1</summary>

```diff
@@ -3779,7 +3779,7 @@
           if (⟦2-char-id⟧) ⟦2-char-id⟧.current = ⟦2-char-id⟧, null === (⟦2-char-id⟧ = ⟦2-char-id⟧.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.focus();
           else if (⟦2-char-id⟧.current) {
           var ⟦2-char-id⟧;
-          null === (⟦2-char-id⟧ = ⟦2-char-id⟧.querySelector(`[data-store-item="${CJ.current}"]`)) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.focus(), ⟦2-char-id⟧.current = null
+          null === (⟦2-char-id⟧ = ⟦2-char-id⟧.querySelector(`[data-store-item="${hB.current}"]`)) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.focus(), ⟦2-char-id⟧.current = null
         }
       }), [⟦2-char-id⟧, ⟦2-char-id⟧]), (0, ⟦2-char-id⟧.useEffect)((() => {
         ⟦2-char-id⟧(null)
```

</details>

<details>
<summary>Hunk 158 · Change · +3 / -3</summary>

```diff
@@ -3793,15 +3793,15 @@
         }
       }), [⟦2-char-id⟧]);
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.superRankInfo,
-        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.ac)(⟦2-char-id⟧) : 0,
+        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.oc)(⟦2-char-id⟧) : 0,
         ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧),
         ⟦2-char-id⟧ = ⟦2-char-id⟧ > 0,
         ⟦2-char-id⟧ = ⟦2-char-id⟧.isLoggedIn(),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.getOwnedCosmeticPacks(),
-        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)(⟦2-char-id⟧.query),
+        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.k)(⟦2-char-id⟧.query),
         ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)({
           mode: ⟦2-char-id⟧,
-          loggedIn: ⟦2-char-id⟧ ? cc : null,
+          loggedIn: ⟦2-char-id⟧ ? TT : null,
           hasSuperRank: ⟦2-char-id⟧,
           superRankDaysLeft: ⟦2-char-id⟧,
           ownedPacks: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 159 · Change · +2 / -2</summary>

```diff
@@ -3810,12 +3810,12 @@
         });
       (0, ⟦2-char-id⟧.useEffect)((() => {
         if (!⟦2-char-id⟧ || !⟦2-char-id⟧) return;
-        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.y)();
+        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.w)();
         var ⟦2-char-id⟧;
         ⟦2-char-id⟧ && ("superRank" === (⟦2-char-id⟧ = ⟦2-char-id⟧.item) || ⟦2-char-id⟧.includes(⟦2-char-id⟧)) && ((0, ⟦2-char-id⟧.f)({
           id: "store.login_resume",
           value: ⟦2-char-id⟧.item
-        }), (0, ⟦2-char-id⟧.i)({
+        }), (0, ⟦2-char-id⟧.h)({
           mode: ⟦2-char-id⟧.mode,
           source: "loginResume",
           giftRecipientName: "gift" === ⟦2-char-id⟧.mode && ⟦2-char-id⟧.recipient ? ⟦2-char-id⟧.recipient : void 0,
```

</details>

<details>
<summary>Hunk 160 · Change · +2 / -2</summary>

```diff
@@ -3823,13 +3823,13 @@
           highlight: !0
         }))
       }), [⟦2-char-id⟧, ⟦2-char-id⟧]);
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.l)({
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.o)({
         hasSuperRank: ⟦2-char-id⟧ && ⟦2-char-id⟧,
         superRankDaysLeft: ⟦2-char-id⟧,
         openedThisSession: ⟦2-char-id⟧ || ⟦2-char-id⟧
       });
       if ((0, ⟦2-char-id⟧.useEffect)((() => {
-          (0, ⟦2-char-id⟧.u)(⟦2-char-id⟧)
+          (0, ⟦2-char-id⟧.s)(⟦2-char-id⟧)
         }), [⟦2-char-id⟧]), !⟦2-char-id⟧ || !(0, ⟦2-char-id⟧.siteSupportsPurchases)()) return null;
       const ⟦2-char-id⟧ = ⟦2-char-id⟧ > ⟦2-char-id⟧ && ⟦2-char-id⟧ <= 700,
         ⟦2-char-id⟧ = !⟦2-char-id⟧ && ⟦2-char-id⟧ <= 420,
```

</details>

<details>
<summary>Hunk 161 · Change · +4 / -4</summary>

```diff
@@ -3837,24 +3837,24 @@
         ⟦2-char-id⟧ = null !== ⟦2-char-id⟧;
 
       function ⟦2-char-id⟧(⟦2-char-id⟧) {
-        (0, ⟦2-char-id⟧.o)({
+        (0, ⟦2-char-id⟧.n)({
           item: ⟦2-char-id⟧,
           mode: ⟦2-char-id⟧,
           recipient: "gift" === ⟦2-char-id⟧ ? ⟦2-char-id⟧.query.trim() : ""
-        }), (0, ⟦2-char-id⟧.b)()
+        }), (0, ⟦2-char-id⟧.d)()
       }
 
       function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
         (0, ⟦2-char-id⟧.f)({
           id: "store.purchase_done",
-          value: `${cJ?"gift":"self"}:${JJ}`
+          value: `${TB?"gift":"self"}:${BB}`
         }), ⟦2-char-id⟧ && (⟦2-char-id⟧.recordGift(⟦2-char-id⟧.name, ⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧))
       }
 
       function ⟦2-char-id⟧(⟦2-char-id⟧) {
         ! function(⟦2-char-id⟧) {
           try {
-            ⟦2-char-id⟧.j.setItem(⟦2-char-id⟧, (0, ⟦2-char-id⟧.p)(⟦2-char-id⟧(), ⟦2-char-id⟧))
+            ⟦2-char-id⟧.j.setItem(⟦2-char-id⟧, (0, ⟦2-char-id⟧.s)(⟦2-char-id⟧(), ⟦2-char-id⟧))
           } catch {}
         }({
           name: ⟦2-char-id⟧.name,
```

</details>

<details>
<summary>Hunk 162 · Change · +1 / -1</summary>

```diff
@@ -3863,7 +3863,7 @@
           var ⟦2-char-id⟧;
           return {
             name: ⟦2-char-id⟧.name,
-            seq: (null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.seq) && void 0 !== ⟦2-char-id⟧ ? ZJ : 0) + 1
+            seq: (null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.seq) && void 0 !== ⟦2-char-id⟧ ? dB : 0) + 1
           }
         }))
       }
```

</details>

<details>
<summary>Hunk 163 · Change · +4 / -4</summary>

```diff
@@ -3877,13 +3877,13 @@
           cosmetics: ⟦2-char-id⟧.recipientCosmetics
         } : null;
         if (⟦2-char-id⟧ && !⟦2-char-id⟧.name) return void ⟦2-char-id⟧();
-        const ⟦2-char-id⟧ = "superRank" === ⟦2-char-id⟧ ? ⟦2-char-id⟧.i.id : (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧);
+        const ⟦2-char-id⟧ = "superRank" === ⟦2-char-id⟧ ? ⟦2-char-id⟧.p.id : (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧);
         ⟦2-char-id⟧.current = !0;
-        const ⟦2-char-id⟧ = await (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧, null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? cJ : null);
+        const ⟦2-char-id⟧ = await (0, ⟦2-char-id⟧.b)(⟦2-char-id⟧, null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? TB : null);
         if (⟦2-char-id⟧.current = !1, !⟦2-char-id⟧) return;
         ⟦2-char-id⟧(⟦2-char-id⟧);
-        const ⟦2-char-id⟧ = await ⟦2-char-id⟧.c.purchase(⟦2-char-id⟧, null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? ZJ : null);
-        ⟦2-char-id⟧(null), ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧) : (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ || (await (0, ⟦2-char-id⟧.flushClientAnalyticsEvents)(), (0, ⟦2-char-id⟧.refreshWithoutConfirmation)("superRank" === ⟦2-char-id⟧ ? "/super-rank-welcome" : `/pack-welcome/${JJ}`)))
+        const ⟦2-char-id⟧ = await ⟦2-char-id⟧.c.purchase(⟦2-char-id⟧, null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? dB : null);
+        ⟦2-char-id⟧(null), ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧) : (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ || (await (0, ⟦2-char-id⟧.flushClientAnalyticsEvents)(), (0, ⟦2-char-id⟧.refreshWithoutConfirmation)("superRank" === ⟦2-char-id⟧ ? "/super-rank-welcome" : `/pack-welcome/${BB}`)))
       }
       const ⟦2-char-id⟧ = ⟦2-char-id⟧()("Store", {
         StoreGift: "gift" === ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 164 · Change · +1 / -1</summary>

```diff
@@ -3896,7 +3896,7 @@
         return (0, ⟦2-char-id⟧.jsx)("div", {
           ref: ⟦2-char-id⟧,
           className: "CosmeticShopContainer",
-          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.h, {
             pack: ⟦2-char-id⟧,
             onBack: () => {
               ⟦2-char-id⟧(⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 165 · Change · +1 / -1</summary>

```diff
@@ -3911,7 +3911,7 @@
               children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
                 state: ⟦2-char-id⟧.state,
                 item: ⟦2-char-id⟧,
-                price: (⟦2-char-id⟧ = ⟦2-char-id⟧, "superRank" === ⟦2-char-id⟧ ? ⟦2-char-id⟧.i.price : (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧)),
+                price: (⟦2-char-id⟧ = ⟦2-char-id⟧, "superRank" === ⟦2-char-id⟧ ? ⟦2-char-id⟧.p.price : (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧)),
                 busy: ⟦2-char-id⟧,
                 onAct: () => {
                   ⟦2-char-id⟧(⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 166 · Change · +1 / -1</summary>

```diff
@@ -3926,7 +3926,7 @@
             }),
             ownedPacks: ⟦2-char-id⟧,
             startAsGift: "gift" === ⟦2-char-id⟧,
-            initialGiftRecipient: "gift" === ⟦2-char-id⟧ ? null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? qc : ⟦2-char-id⟧.query.trim() : "",
+            initialGiftRecipient: "gift" === ⟦2-char-id⟧ ? null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? YT : ⟦2-char-id⟧.query.trim() : "",
             highlightCta: ⟦2-char-id⟧ === ⟦2-char-id⟧
           }, ⟦2-char-id⟧)
         })
```

</details>

<details>
<summary>Hunk 167 · Change · +1 / -1</summary>

```diff
@@ -3963,7 +3963,7 @@
           children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
             selfName: ⟦2-char-id⟧ ? ⟦2-char-id⟧.getPlayerName() : "",
             giftRecipient: ⟦2-char-id⟧,
-            suggestionsVersion: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.seq) && void 0 !== ⟦2-char-id⟧ ? cJ : 0,
+            suggestionsVersion: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.seq) && void 0 !== ⟦2-char-id⟧ ? TB : 0,
             pulseSignal: ⟦2-char-id⟧,
             disabled: ⟦2-char-id⟧ || !⟦2-char-id⟧
           })
```

</details>

<details>
<summary>Hunk 168 · Change · +1 / -1</summary>

```diff
@@ -3974,7 +3974,7 @@
           },
           children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
             showSignal: ⟦2-char-id⟧.seq
-          }), ⟦2-char-id⟧.b, " ", qJ("store:giftSent", {
+          }), ⟦2-char-id⟧.d, " ", YB("store:giftSent", {
             name: ⟦2-char-id⟧.name
           })]
         }, ⟦2-char-id⟧.seq), !⟦2-char-id⟧ && ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
```

</details>

<details>
<summary>Hunk 169 · Change · +2 / -2</summary>

```diff
@@ -3998,14 +3998,14 @@
             }
           } : null,
           superRankDaysLeft: ⟦2-char-id⟧,
-          superRankTotalDays: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.superRankForDays) && void 0 !== ⟦2-char-id⟧ ? UJ : 0,
+          superRankTotalDays: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.superRankForDays) && void 0 !== ⟦2-char-id⟧ ? yB : 0,
           busy: ⟦2-char-id⟧,
           highlightItem: ⟦2-char-id⟧,
           onOpen: function(⟦2-char-id⟧) {
             (0, ⟦2-char-id⟧.f)({
               id: "store.item_open",
               value: ⟦2-char-id⟧
-            }), ⟦2-char-id⟧((0, ⟦2-char-id⟧.f)(⟦2-char-id⟧))
+            }), ⟦2-char-id⟧((0, ⟦2-char-id⟧.e)(⟦2-char-id⟧))
           },
           onAct: ⟦2-char-id⟧,
           onNeedRecipient: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 170 · Change · +16 / -16</summary>

```diff
@@ -4013,22 +4013,22 @@
         })]
       })
     }));
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(2321),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8139),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2381),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2240),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2275),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2289),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2292),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2372),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2359),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2344),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2100),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2133),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2117),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1813),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2294),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2142);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(2305),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8175),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2366),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2195),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2258),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2264),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2271),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2355),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2338),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2328),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2063),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2094),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2088),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1788),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2277),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2097);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let {
```

</details>

<details>
<summary>Hunk 171 · Change · +3 / -3</summary>

```diff
@@ -4040,16 +4040,16 @@
     function ⟦2-char-id⟧() {
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), {
+      } = (0, ⟦2-char-id⟧.z)(), {
         followsLeader: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.g)(), {
+      } = (0, ⟦2-char-id⟧.f)(), {
         loading: ⟦2-char-id⟧,
         friends: ⟦2-char-id⟧,
         requests: ⟦2-char-id⟧,
         invites: ⟦2-char-id⟧
       } = (0, ⟦2-char-id⟧.k)(), {
         userContext: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.d)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(⟦2-char-id⟧.i);
+      } = (0, ⟦2-char-id⟧.b)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(⟦2-char-id⟧.i);
       (0, ⟦2-char-id⟧.useEffect)((() => {
         (0, ⟦2-char-id⟧.b)()
       }), []);
```

</details>

<details>
<summary>Hunk 172 · Change · +3 / -3</summary>

```diff
@@ -4057,15 +4057,15 @@
         {
           state: ⟦2-char-id⟧,
           recentRequesters: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.j)(),
-        ⟦2-char-id⟧ = new Map([...("loaded" === ⟦2-char-id⟧.status ? ⟦2-char-id⟧.recentPlayers : []).map((⟦2-char-id⟧ => [⟦2-char-id⟧.preview.name, ⟦2-char-id⟧])), ...rJ.map((⟦2-char-id⟧ => [⟦2-char-id⟧.name, ⟦2-char-id⟧]))]),
+        } = (0, ⟦2-char-id⟧.o)(),
+        ⟦2-char-id⟧ = new Map([...("loaded" === ⟦2-char-id⟧.status ? ⟦2-char-id⟧.recentPlayers : []).map((⟦2-char-id⟧ => [⟦2-char-id⟧.preview.name, ⟦2-char-id⟧])), ...vB.map((⟦2-char-id⟧ => [⟦2-char-id⟧.name, ⟦2-char-id⟧]))]),
         ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null),
         [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(""),
         [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)("Enter"),
         [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null);
 
       function ⟦2-char-id⟧() {
-        ⟦2-char-id⟧ && (⟦2-char-id⟧("Loading"), (0, ⟦2-char-id⟧.j)(⟦2-char-id⟧, "social_menu").then((⟦2-char-id⟧ => {
+        ⟦2-char-id⟧ && (⟦2-char-id⟧("Loading"), (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, "social_menu").then((⟦2-char-id⟧ => {
           if (⟦2-char-id⟧.current) switch (⟦2-char-id⟧.kind) {
             case "sent":
               ⟦2-char-id⟧("Success");
```

</details>

<details>
<summary>Hunk 173 · Change · +3 / -3</summary>

```diff
@@ -4094,15 +4094,15 @@
             className: "SocialMenuColumn",
             children: [(0, ⟦2-char-id⟧.jsxs)("div", {
               className: "SocialMenuBox SocialMenuAddFriend",
-              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                 label: ⟦2-char-id⟧("socialBar:addFriend")
               }), (0, ⟦2-char-id⟧.jsxs)("div", {
                 className: "AddFriendBody",
                 children: [(0, ⟦2-char-id⟧.jsxs)("div", {
                   className: ⟦2-char-id⟧()("AddFriendBodyOverlay", {
-                    [`AddFriendBodyOverlay${yJ}`]: !0
+                    [`AddFriendBodyOverlay${MB}`]: !0
                   }),
-                  children: ["Loading" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {}), "Success" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+                  children: ["Loading" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {}), "Success" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                     name: "check"
                   }), "BecameFriends" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.Fragment, {
                     children: ⟦2-char-id⟧("socialBar:nowFriends", {
```

</details>

<details>
<summary>Hunk 174 · Change · +1 / -1</summary>

```diff
@@ -4118,7 +4118,7 @@
                     placeholderText: ⟦2-char-id⟧("socialBar:enterPlayerName"),
                     domRef: ⟦2-char-id⟧,
                     onValueChange: ⟦2-char-id⟧ => {
-                      ⟦2-char-id⟧((0, ⟦2-char-id⟧.p)(⟦2-char-id⟧)), ⟦2-char-id⟧.current.value = (0, ⟦2-char-id⟧.p)(⟦2-char-id⟧)
+                      ⟦2-char-id⟧((0, ⟦2-char-id⟧.n)(⟦2-char-id⟧)), ⟦2-char-id⟧.current.value = (0, ⟦2-char-id⟧.n)(⟦2-char-id⟧)
                     },
                     onEnter: () => {
                       ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.f)({
```

</details>

<details>
<summary>Hunk 175 · Change · +2 / -2</summary>

```diff
@@ -4135,9 +4135,9 @@
                       id: "social.add_friend",
                       value: "social_menu"
                     },
-                    children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+                    children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                       name: "user-plus"
-                    }), " ", JJ("socialBar:sendRequest")]
+                    }), " ", BB("socialBar:sendRequest")]
                   })]
                 })]
               }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
```

</details>

<details>
<summary>Hunk 176 · Change · +7 / -7</summary>

```diff
@@ -4146,32 +4146,32 @@
               })]
             }), ⟦2-char-id⟧.length > 0 && (0, ⟦2-char-id⟧.jsxs)("div", {
               className: "SocialMenuBox SocialMenuInvites",
-              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                 label: ⟦2-char-id⟧("socialBar:invites"),
                 meta: ⟦2-char-id⟧.length
               }), ⟦2-char-id⟧.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsxs)("div", {
                 className: "SocialMenuInvite",
                 children: [(0, ⟦2-char-id⟧.jsx)("div", {
                   className: "SocialMenuInviteIcon",
-                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                     invite: ⟦2-char-id⟧
                   })
                 }), (0, ⟦2-char-id⟧.jsx)("div", {
                   className: "SocialMenuInviteText",
-                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.g, {
                     invite: ⟦2-char-id⟧
                   })
-                }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.m, {
+                }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.k, {
                   className: "SocialMenuInviteJoin SmallTextLight",
                   onClick: () => {
-                    (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧)
+                    (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧)
                   },
                   analyticsClick: {
                     id: "social.accept_invite",
-                    value: `social_menu:${cJ.destination.kind}`
+                    value: `social_menu:${TB.destination.kind}`
                   },
                   children: ⟦2-char-id⟧("general:join")
-                }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.g, {
+                }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.h, {
                   tooltipInner: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.Fragment, {
                     children: ⟦2-char-id⟧("general:decline")
                   }),
```

</details>

<details>
<summary>Hunk 177 · Change · +3 / -3</summary>

```diff
@@ -4180,13 +4180,13 @@
                     className: "SocialMenuInviteDecline",
                     padDefaultFocus: "invite" === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.kind) && ⟦2-char-id⟧.inviteId === ⟦2-char-id⟧.id,
                     onClick: () => {
-                      ⟦2-char-id⟧.b.declineInvite(⟦2-char-id⟧.id)
+                      ⟦2-char-id⟧.e.declineInvite(⟦2-char-id⟧.id)
                     },
                     analyticsClick: {
                       id: "social.decline_invite",
-                      value: `social_menu:${cJ.destination.kind}`
+                      value: `social_menu:${TB.destination.kind}`
                     },
-                    children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+                    children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                       name: "xmark"
                     })
                   })
```

</details>

<details>
<summary>Hunk 178 · Change · +10 / -10</summary>

```diff
@@ -4196,40 +4196,40 @@
               className: ⟦2-char-id⟧()("SocialMenuBox SocialMenuRequests", {
                 SocialMenuBoxEmpty: !⟦2-char-id⟧ && 0 === ⟦2-char-id⟧.length
               }),
-              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                 label: (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
-                  children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
-                    name: ⟦2-char-id⟧.g
-                  }), " ", JJ("socialBar:requests")]
+                  children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+                    name: ⟦2-char-id⟧.h
+                  }), " ", BB("socialBar:requests")]
                 }),
                 meta: (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
-                  children: [⟦2-char-id⟧.length, ⟦2-char-id⟧.length === ⟦2-char-id⟧.n && (0, ⟦2-char-id⟧.jsx)("span", {
+                  children: [⟦2-char-id⟧.length, ⟦2-char-id⟧.length === ⟦2-char-id⟧.p && (0, ⟦2-char-id⟧.jsx)("span", {
                     className: "SocialSectionTitleLimit",
                     children: ⟦2-char-id⟧("socialBar:limitReached")
                   })]
                 })
               }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
                 className: "SocialMenuLoading",
-                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {})
+                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {})
               }), !⟦2-char-id⟧ && 0 === ⟦2-char-id⟧.length && (0, ⟦2-char-id⟧.jsx)("div", {
                 className: "SocialMenuEmpty",
                 children: ⟦2-char-id⟧("socialBar:noFriendRequests")
               }), !⟦2-char-id⟧ && ⟦2-char-id⟧.length > 0 && (0, ⟦2-char-id⟧.jsx)("div", {
                 className: "PlayerRows",
-                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
                   lazyLoadedClassName: "SocialMenuRequestsLazy",
                   observerUpdateDeps: [⟦2-char-id⟧],
                   children: ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
                     const ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧.name);
-                    return (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.e, {
+                    return (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.g, {
                       playerSocialPreview: ⟦2-char-id⟧,
                       zIndex: ⟦2-char-id⟧.length - ⟦2-char-id⟧,
-                      padDefaultFocus: (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧, ⟦2-char-id⟧.name, ⟦2-char-id⟧),
+                      padDefaultFocus: (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.name, ⟦2-char-id⟧),
                       status: ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                         gameNameWithVariation: ⟦2-char-id⟧.gameNameWithVariation,
                         isPrivateLobby: ⟦2-char-id⟧.isPrivateLobby
                       }),
-                      children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.g, {
+                      children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.h, {
                         tooltipInner: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.Fragment, {
                           children: ⟦2-char-id⟧("general:accept")
                         }),
```

</details>

<details>
<summary>Hunk 179 · Change · +1 / -1</summary>

```diff
@@ -4237,7 +4237,7 @@
                         children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
                           className: "FriendRequestButton",
                           onClick: () => {
-                            ⟦2-char-id⟧((0, ⟦2-char-id⟧.e)(⟦2-char-id⟧, ⟦2-char-id⟧)), (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧.name, !0, {
+                            ⟦2-char-id⟧((0, ⟦2-char-id⟧.e)(⟦2-char-id⟧, ⟦2-char-id⟧)), (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧.name, !0, {
                               source: "social_menu",
                               announceFriend: !1
                             })
```

</details>

<details>
<summary>Hunk 180 · Change · +2 / -2</summary>

```diff
@@ -4246,11 +4246,11 @@
                             id: "social.accept_friend_request",
                             value: "social_menu"
                           },
-                          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+                          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                             name: "check"
                           })
                         })
-                      }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.g, {
+                      }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.h, {
                         tooltipInner: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.Fragment, {
                           children: ⟦2-char-id⟧("general:decline")
                         }),
```

</details>

<details>
<summary>Hunk 181 · Change · +1 / -1</summary>

```diff
@@ -4258,7 +4258,7 @@
                         children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.g, {
                           className: "FriendRequestButton",
                           onClick: () => {
-                            ⟦2-char-id⟧((0, ⟦2-char-id⟧.e)(⟦2-char-id⟧, ⟦2-char-id⟧)), (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧.name, !1, {
+                            ⟦2-char-id⟧((0, ⟦2-char-id⟧.e)(⟦2-char-id⟧, ⟦2-char-id⟧)), (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧.name, !1, {
                               source: "social_menu"
                             })
                           },
```

</details>

<details>
<summary>Hunk 182 · Change · +15 / -15</summary>

```diff
@@ -4266,62 +4266,62 @@
                             id: "social.decline_friend_request",
                             value: "social_menu"
                           },
-                          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+                          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                             name: "xmark"
                           })
                         })
                       })]
-                    }, `${cJ.name}_${cJ.isError}`)
+                    }, `${TB.name}_${TB.isError}`)
                   }))
                 })
               })]
-            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.k, {})]
+            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.j, {})]
           }), (0, ⟦2-char-id⟧.jsxs)("div", {
             className: "SocialMenuColumn",
             children: [(0, ⟦2-char-id⟧.jsxs)("div", {
               className: "SocialMenuBox SocialMenuParty",
-              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                 label: ⟦2-char-id⟧("socialBar:party")
-              }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {})]
+              }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {})]
             }), (0, ⟦2-char-id⟧.jsxs)("div", {
               className: "SocialMenuBox SocialMenuFriends",
-              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                 label: (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
-                  children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+                  children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                     name: ⟦2-char-id⟧.e
-                  }), " ", JJ("socialBar:friends")]
+                  }), " ", BB("socialBar:friends")]
                 }),
                 meta: (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
-                  children: [⟦2-char-id⟧.length, ⟦2-char-id⟧.length >= (0, ⟦2-char-id⟧.b)(⟦2-char-id⟧.getPlayerRanks()) && (0, ⟦2-char-id⟧.jsx)("span", {
+                  children: [⟦2-char-id⟧.length, ⟦2-char-id⟧.length >= (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧.getPlayerRanks()) && (0, ⟦2-char-id⟧.jsx)("span", {
                     className: "SocialSectionTitleLimit",
                     children: ⟦2-char-id⟧("socialBar:limitReached")
                   })]
                 })
               }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
                 className: "SocialMenuLoading",
-                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {})
+                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {})
               }), !⟦2-char-id⟧ && 0 === ⟦2-char-id⟧.length && (0, ⟦2-char-id⟧.jsx)("div", {
                 className: "SocialMenuEmpty",
                 children: ⟦2-char-id⟧("socialBar:noFriends")
               }), !⟦2-char-id⟧ && ⟦2-char-id⟧.length > 0 && (0, ⟦2-char-id⟧.jsx)("div", {
                 className: "PlayerRows",
-                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
                   lazyLoadedClassName: "SocialMenuFriendsLazy",
                   observerUpdateDeps: [⟦2-char-id⟧],
-                  children: ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+                  children: ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.g, {
                     playerSocialPreview: ⟦2-char-id⟧,
                     isFriend: !0,
                     hideFriendBadge: !0,
                     onFriendRemoved: ⟦2-char-id⟧ => {
-                      ⟦2-char-id⟧.b.removeFriendFromState(⟦2-char-id⟧)
+                      ⟦2-char-id⟧.e.removeFriendFromState(⟦2-char-id⟧)
                     },
                     zIndex: ⟦2-char-id⟧.length - ⟦2-char-id⟧,
-                    children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                    children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
                       friend: ⟦2-char-id⟧,
                       followsLeader: ⟦2-char-id⟧,
                       analyticsSurface: "social_menu"
                     })
-                  }, `${JJ.name}_${JJ.isError}`)))
+                  }, `${BB.name}_${BB.isError}`)))
                 })
               })]
             })]
```

</details>

<details>
<summary>Hunk 183 · Change · +1 / -1</summary>

```diff
@@ -4329,7 +4329,7 @@
         })
       })
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(2215);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(2180);
     const ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
         let {
           action: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 184 · Change · +2 / -2</summary>

```diff
@@ -4337,8 +4337,8 @@
         } = ⟦2-char-id⟧;
         const {
           isTouchScreen: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.j)(["isTouchScreen"]), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.q)();
-        return ⟦2-char-id⟧ && !⟦2-char-id⟧ ? null : (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+        } = (0, ⟦2-char-id⟧.m)(["isTouchScreen"]), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.r)();
+        return ⟦2-char-id⟧ && !⟦2-char-id⟧ ? null : (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
           className: "EverythingMenuTabKey",
           noaAction: ⟦2-char-id⟧,
           padHidesKey: !0,
```

</details>

<details>
<summary>Hunk 185 · Change · +5 / -5</summary>

```diff
@@ -4348,20 +4348,20 @@
       ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.memo)((function() {
         const {
           t: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.F)(), {
+        } = (0, ⟦2-char-id⟧.z)(), {
           gameState: ⟦2-char-id⟧,
           openEverythingMenuName: ⟦2-char-id⟧,
           initSdkSelectorFinished: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.j)(["gameState", "openEverythingMenuName", "initSdkSelectorFinished"]), {
+        } = (0, ⟦2-char-id⟧.m)(["gameState", "openEverythingMenuName", "initSdkSelectorFinished"]), {
           userContext: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.d)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.siteSupportsPurchases)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.B)(), ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
+        } = (0, ⟦2-char-id⟧.b)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.siteSupportsPurchases)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.C)(), ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
           action: ⟦2-char-id⟧,
           padAction: ⟦2-char-id⟧
         }), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), ⟦2-char-id⟧ = {
-          ..."inGame" === ⟦2-char-id⟧ ? {} : (0, ⟦2-char-id⟧.U)({
+          ..."inGame" === ⟦2-char-id⟧ ? {} : (0, ⟦2-char-id⟧._)({
             focusOnClick: !1
           }),
-          ...nZ.e
+          ...Dd.e
         }, ⟦2-char-id⟧ = null !== ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ !== ⟦2-char-id⟧.m.COSMETIC_SHOP;
         async function ⟦2-char-id⟧() {
           await async function() {
```

</details>

<details>
<summary>Hunk 186 · Change · +3 / -3</summary>

```diff
@@ -4374,12 +4374,12 @@
         const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useMemo)((() => "inGame" === ⟦2-char-id⟧ ? {
           text: ⟦2-char-id⟧("settingsMenu:exitGame"),
           onClick: () => {
-            (0, ⟦2-char-id⟧.c)()
+            (0, ⟦2-char-id⟧.d)()
           }
-        } : (0, ⟦2-char-id⟧.b)() ? {
+        } : (0, ⟦2-char-id⟧.d)() ? {
           text: ⟦2-char-id⟧("settingsMenu:exitGame"),
           onClick: () => {
-            ⟦2-char-id⟧.j.discordActivity().then((⟦2-char-id⟧ => {
+            ⟦2-char-id⟧.k.discordActivity().then((⟦2-char-id⟧ => {
               ⟦2-char-id⟧.exit("User exited the game")
             }))
           }
```

</details>

<details>
<summary>Hunk 187 · Change · +5 / -5</summary>

```diff
@@ -4389,27 +4389,27 @@
           onClick: () => {
             ⟦2-char-id⟧()
           },
-          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.j, {
+          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.i, {
             className: "EverythingMenuCloseButton"
           })
         });
-        return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+        return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
           showing: ⟦2-char-id⟧,
           globallyUniqueKey: "EverythingMenu",
           alwaysMountChildren: !0,
           keepsMovement: ⟦2-char-id⟧ === ⟦2-char-id⟧.m.SHOP,
           doGameplayStartStopOnShow: "inGame" === ⟦2-char-id⟧,
-          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
+          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
             className: "EverythingMenuContainer",
             show: ⟦2-char-id⟧,
-            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
               close: () => {
                 ⟦2-char-id⟧()
               },
               togglePointerLock: !1,
               children: (0, ⟦2-char-id⟧.jsxs)("div", {
                 className: "EverythingMenu",
-                children: [!(0, ⟦2-char-id⟧.k)(⟦2-char-id⟧) && (0, ⟦2-char-id⟧.jsxs)("div", {
+                children: [!(0, ⟦2-char-id⟧.j)(⟦2-char-id⟧) && (0, ⟦2-char-id⟧.jsxs)("div", {
                   className: "EverythingMenuTabList",
                   children: [(0, ⟦2-char-id⟧.jsxs)("div", {
                     className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
```

</details>

<details>
<summary>Hunk 188 · Change · +4 / -4</summary>

```diff
@@ -4421,22 +4421,22 @@
                       },
                       children: ⟦2-char-id⟧.text
                     }), ⟦2-char-id⟧ && ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
-                      ...rJ,
+                      ...vB,
                       className: "EverythingMenuWallet",
                       title: ⟦2-char-id⟧("homePage:getPremiumCurrency"),
                       onClick: () => {
-                        (0, ⟦2-char-id⟧.i)({
+                        (0, ⟦2-char-id⟧.h)({
                           mode: "current",
                           source: "menuWallet"
                         })
                       },
-                      children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {})
+                      children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.h, {})
                     })]
                   }), (0, ⟦2-char-id⟧.jsxs)("div", {
                     className: "EverythingMenuTabListInner",
                     "data-pad-tabs": "1",
                     children: [(0, ⟦2-char-id⟧.jsxs)("div", {
-                      ...rJ,
+                      ...vB,
                       "data-pad-tab": !0,
                       "data-pad-selected": ⟦2-char-id⟧ === ⟦2-char-id⟧.m.SETTINGS ? "true" : void 0,
                       className: ⟦2-char-id⟧()("EverythingMenuTab", {
```

</details>

<details>
<summary>Hunk 189 · Change · +2 / -2</summary>

```diff
@@ -4447,9 +4447,9 @@
                           openEverythingMenuName: ⟦2-char-id⟧.m.SETTINGS
                         })
                       },
-                      children: [⟦2-char-id⟧("general:settings"), hJ("OpenSettings", "pause")]
+                      children: [⟦2-char-id⟧("general:settings"), kB("OpenSettings", "pause")]
                     }), (0, ⟦2-char-id⟧.jsxs)("div", {
-                      ...rJ,
+                      ...vB,
                       "data-pad-tab": !0,
                       "data-pad-selected": ⟦2-char-id⟧ === ⟦2-char-id⟧.m.CUSTOMISATION ? "true" : void 0,
                       className: ⟦2-char-id⟧()("EverythingMenuTab", {
```

</details>

<details>
<summary>Hunk 190 · Change · +3 / -3</summary>

```diff
@@ -4460,15 +4460,15 @@
                           openEverythingMenuName: ⟦2-char-id⟧.m.CUSTOMISATION
                         })
                       },
-                      children: [⟦2-char-id⟧("general:player"), hJ("OpenCharacterCustomization")]
+                      children: [⟦2-char-id⟧("general:player"), kB("OpenCharacterCustomization")]
                     }), ⟦2-char-id⟧.featureFlags.useSocialFeatures && (0, ⟦2-char-id⟧.jsxs)("div", {
-                      ...rJ,
+                      ...vB,
                       "data-pad-tab": !0,
                       "data-pad-selected": ⟦2-char-id⟧ === ⟦2-char-id⟧.m.SOCIAL ? "true" : void 0,
                       className: ⟦2-char-id⟧()("EverythingMenuTab", {
                         EverythingMenuTabActive: ⟦2-char-id⟧ === ⟦2-char-id⟧.m.SOCIAL
                       }),
-                      ...(0, ⟦2-char-id⟧.d)({
+                      ...(0, ⟦2-char-id⟧.b)({
                         id: "social.open_menu",
                         value: "menu_tab"
                       }, ⟦2-char-id⟧ === ⟦2-char-id⟧.m.SOCIAL),
```

</details>

<details>
<summary>Hunk 191 · Change · +2 / -2</summary>

```diff
@@ -4477,9 +4477,9 @@
                           openEverythingMenuName: ⟦2-char-id⟧.m.SOCIAL
                         })
                       },
-                      children: [⟦2-char-id⟧("socialBar:social"), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {})]
+                      children: [⟦2-char-id⟧("socialBar:social"), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {})]
                     }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)("div", {
-                      ...rJ,
+                      ...vB,
                       "data-pad-tab": !0,
                       "data-pad-selected": ⟦2-char-id⟧ === ⟦2-char-id⟧.m.COSMETIC_SHOP ? "true" : void 0,
                       className: ⟦2-char-id⟧()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
```

</details>

<details>
<summary>Hunk 192 · Change · +1 / -1</summary>

```diff
@@ -4497,7 +4497,7 @@
                         className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                       })]
                     }), "inGame" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)("div", {
-                      ...rJ,
+                      ...vB,
                       "data-pad-tab": !0,
                       "data-pad-selected": ⟦2-char-id⟧ === ⟦2-char-id⟧.m.LOBBY_LEADERBOARD ? "true" : void 0,
                       className: ⟦2-char-id⟧()("EverythingMenuTab", {
```

</details>

<details>
<summary>Hunk 193 · Change · +2 / -2</summary>

```diff
@@ -4508,13 +4508,13 @@
                           openEverythingMenuName: ⟦2-char-id⟧.m.LOBBY_LEADERBOARD
                         })
                       },
-                      children: [⟦2-char-id⟧("general:lobby"), hJ("OpenLobbyLeaderboard", "leaderboard")]
+                      children: [⟦2-char-id⟧("general:lobby"), kB("OpenLobbyLeaderboard", "leaderboard")]
                     })]
                   }), (0, ⟦2-char-id⟧.jsx)("div", {
                     className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                     children: ⟦2-char-id⟧
                   })]
-                }), (0, ⟦2-char-id⟧.k)(⟦2-char-id⟧) && ⟦2-char-id⟧, (0, ⟦2-char-id⟧.jsxs)("div", {
+                }), (0, ⟦2-char-id⟧.j)(⟦2-char-id⟧) && ⟦2-char-id⟧, (0, ⟦2-char-id⟧.jsxs)("div", {
                   className: "EverythingMenuBody",
                   "data-pad-initial-area": !0,
                   style: {
```

</details>

<details>
<summary>Hunk 194 · Change · +1 / -1</summary>

```diff
@@ -4537,7 +4537,7 @@
                   }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
                     show: ⟦2-char-id⟧ === ⟦2-char-id⟧.m.SOCIAL
                   })]
-                }), !(0, ⟦2-char-id⟧.isMobileApp)() && (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧.getPlayerRanks()) && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
+                }), !(0, ⟦2-char-id⟧.isMobileApp)() && (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧.getPlayerRanks()) && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
                   ref: ⟦2-char-id⟧,
                   className: "EverythingMenuBannerDiv",
                   show: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 195 · Change · +7 / -7</summary>

```diff
@@ -4564,27 +4564,27 @@
         })
       }))
   },
-  8563: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  8578: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      d: () => ⟦2-char-id⟧
+      b: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(235),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8565);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(279),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8584);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = Object.entries(⟦2-char-id⟧).sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧[1] - ⟦2-char-id⟧[1])),
-        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.lb)(⟦2-char-id⟧);
+        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.qb)(⟦2-char-id⟧);
       ⟦2-char-id⟧.push(⟦2-char-id⟧ ? "\n\n" : "\n");
       for (const [⟦2-char-id⟧, ⟦2-char-id⟧] of ⟦2-char-id⟧) {
         var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.icon) && void 0 !== ⟦2-char-id⟧ ? AJ : `${UJ} Enchantment`;
+        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.icon) && void 0 !== ⟦2-char-id⟧ ? JB : `${yB} Enchantment`;
         ⟦2-char-id⟧.push({
           icon: ⟦2-char-id⟧,
           style: {
             fontSize: "1.5rem"
           }
         }), ⟦2-char-id⟧.push({
-          str: `${UJ} ${null!==(jJ=(0,FJ.O)(nJ))&&void 0!==jJ?jJ:nJ}\n`
+          str: `${yB} ${null!==(gB=(0,VB.U)(DB))&&void 0!==gB?gB:DB}\n`
         })
       }
       ⟦2-char-id⟧.push({
```

</details>

<details>
<summary>Hunk 196 · Change · +2 / -2</summary>

```diff
@@ -4592,8 +4592,8 @@
       });
       for (const [⟦2-char-id⟧, ⟦2-char-id⟧] of ⟦2-char-id⟧) {
         var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.icon) && void 0 !== ⟦2-char-id⟧ ? YJ : `${FJ} Enchantment`,
-          ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.description) && void 0 !== ⟦2-char-id⟧ ? DJ : (0, ⟦2-char-id⟧.j)(⟦2-char-id⟧);
+        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.icon) && void 0 !== ⟦2-char-id⟧ ? oB : `${VB} Enchantment`,
+          ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.description) && void 0 !== ⟦2-char-id⟧ ? LB : (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧);
         ⟦2-char-id⟧.push({
           icon: ⟦2-char-id⟧,
           style: {
```

</details>

<details>
<summary>Hunk 197 · Change · +12 / -12</summary>

```diff
@@ -4614,23 +4614,23 @@
       return ⟦2-char-id⟧
     }
   },
-  8571: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  8591: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧,
-      f: () => ⟦2-char-id⟧,
+      d: () => ⟦2-char-id⟧,
+      g: () => ⟦2-char-id⟧,
       j: () => ⟦2-char-id⟧,
-      l: () => ⟦2-char-id⟧,
+      k: () => ⟦2-char-id⟧,
       m: () => ⟦2-char-id⟧,
-      q: () => ⟦2-char-id⟧,
+      p: () => ⟦2-char-id⟧,
+      r: () => ⟦2-char-id⟧,
       t: () => ⟦2-char-id⟧,
-      x: () => ⟦2-char-id⟧,
-      z: () => ⟦2-char-id⟧
+      v: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(227),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(535),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(235),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3715),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8563);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(270),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(572),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(279),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3706),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8578);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 198 · Change · +2 / -2</summary>

```diff
@@ -4639,12 +4639,12 @@
         chestOrCreative: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
       var ⟦2-char-id⟧;
-      return ⟦2-char-id⟧ < ⟦2-char-id⟧.length ? null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? eJ : null : null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ - ⟦2-char-id⟧.length]) && void 0 !== ⟦2-char-id⟧ ? ZJ : null
+      return ⟦2-char-id⟧ < ⟦2-char-id⟧.length ? null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? pB : null : null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ - ⟦2-char-id⟧.length]) && void 0 !== ⟦2-char-id⟧ ? dB : null
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
-      return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.amount) && void 0 !== ⟦2-char-id⟧ ? cJ : 0
+      return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.amount) && void 0 !== ⟦2-char-id⟧ ? TB : 0
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 199 · Change · +10 / -10</summary>

```diff
@@ -4664,33 +4664,33 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.displayName;
-      return (0, ⟦2-char-id⟧.P)(⟦2-char-id⟧) ? "string" !== typeof ⟦2-char-id⟧ ? "" : (!⟦2-char-id⟧.has(⟦2-char-id⟧) && ⟦2-char-id⟧.size < ⟦2-char-id⟧ && (⟦2-char-id⟧.add(⟦2-char-id⟧), console.warn(`No item called "${cJ}", so its hover shows the name as given`)), ⟦2-char-id⟧) : ⟦2-char-id⟧
+      return (0, ⟦2-char-id⟧.M)(⟦2-char-id⟧) ? "string" !== typeof ⟦2-char-id⟧ ? "" : (!⟦2-char-id⟧.has(⟦2-char-id⟧) && ⟦2-char-id⟧.size < ⟦2-char-id⟧ && (⟦2-char-id⟧.add(⟦2-char-id⟧), console.warn(`No item called "${TB}", so its hover shows the name as given`)), ⟦2-char-id⟧) : ⟦2-char-id⟧
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.attributes,
-        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.name]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.rootName) && void 0 !== ⟦2-char-id⟧ ? qJ : ⟦2-char-id⟧.name,
-        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.customDisplayName) && void 0 !== ⟦2-char-id⟧ ? hJ : null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.name]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.displayName) && void 0 !== ⟦2-char-id⟧ ? YJ : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
+        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.name]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.rootName) && void 0 !== ⟦2-char-id⟧ ? YB : ⟦2-char-id⟧.name,
+        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.customDisplayName) && void 0 !== ⟦2-char-id⟧ ? kB : null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.name]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.displayName) && void 0 !== ⟦2-char-id⟧ ? oB : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
       let ⟦2-char-id⟧ = ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.customAttributes) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.enchantmentTier;
-      ⟦2-char-id⟧ && (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.lb)(⟦2-char-id⟧, {
-        colour: ⟦2-char-id⟧.gb[⟦2-char-id⟧]
+      ⟦2-char-id⟧ && (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.qb)(⟦2-char-id⟧, {
+        colour: ⟦2-char-id⟧.lb[⟦2-char-id⟧]
       }));
       const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
         var ⟦2-char-id⟧;
         if (void 0 === ⟦2-char-id⟧ || null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.customAttributes) && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.author) return ⟦2-char-id⟧;
-        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.Sb)(⟦2-char-id⟧);
-        return ⟦2-char-id⟧.every((⟦2-char-id⟧ => "string" === typeof ⟦2-char-id⟧)) ? JJ : ⟦2-char-id⟧.map((⟦2-char-id⟧ => "string" === typeof ⟦2-char-id⟧ ? JJ : {
+        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.hc)(⟦2-char-id⟧);
+        return ⟦2-char-id⟧.every((⟦2-char-id⟧ => "string" === typeof ⟦2-char-id⟧)) ? BB : ⟦2-char-id⟧.map((⟦2-char-id⟧ => "string" === typeof ⟦2-char-id⟧ ? BB : {
           icon: ⟦2-char-id⟧.icon,
           style: {
             fontSize: "1.5em"
           }
         }))
-      }(⟦2-char-id⟧.customDescription, ⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? xJ : null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.name]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.description) && void 0 !== ⟦2-char-id⟧ ? fJ : null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.description) && void 0 !== ⟦2-char-id⟧ ? nJ : "";
+      }(⟦2-char-id⟧.customDescription, ⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? EB : null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.name]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.description) && void 0 !== ⟦2-char-id⟧ ? HB : null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.description) && void 0 !== ⟦2-char-id⟧ ? DB : "";
       let ⟦2-char-id⟧ = ⟦2-char-id⟧;
-      if (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.customAttributes) && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.enchantments) ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧, ⟦2-char-id⟧.customAttributes.enchantments, ⟦2-char-id⟧.customAttributes.enchantmentData);
-      else if (⟦2-char-id⟧[⟦2-char-id⟧]) ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.lb)(⟦2-char-id⟧), ⟦2-char-id⟧.push({
+      if (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.customAttributes) && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.enchantments) ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)(⟦2-char-id⟧, ⟦2-char-id⟧.customAttributes.enchantments, ⟦2-char-id⟧.customAttributes.enchantmentData);
+      else if (⟦2-char-id⟧[⟦2-char-id⟧]) ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.qb)(⟦2-char-id⟧), ⟦2-char-id⟧.push({
         str: "\n"
       }), ⟦2-char-id⟧.push({
         str: "Enchantable",
```

</details>

<details>
<summary>Hunk 200 · Change · +1 / -1</summary>

```diff
@@ -4704,7 +4704,7 @@
         var ⟦2-char-id⟧, ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.customAttributes.mobSettings;
         var ⟦2-char-id⟧, ⟦2-char-id⟧;
-        if (⟦2-char-id⟧ = [], (0, ⟦2-char-id⟧.P)(⟦2-char-id⟧.customAttributes.health) || (⟦2-char-id⟧.push({
+        if (⟦2-char-id⟧ = [], (0, ⟦2-char-id⟧.M)(⟦2-char-id⟧.customAttributes.health) || (⟦2-char-id⟧.push({
             str: "\n"
           }), ⟦2-char-id⟧.push({
             icon: "Health",
```

</details>

<details>
<summary>Hunk 201 · Change · +2 / -2</summary>

```diff
@@ -4715,11 +4715,11 @@
             str: " "
           }), ⟦2-char-id⟧.push({
             str: ⟦2-char-id⟧.customAttributes.health.toString()
-          }), (0, ⟦2-char-id⟧.P)(⟦2-char-id⟧.maxHealth) || (⟦2-char-id⟧.push({
+          }), (0, ⟦2-char-id⟧.M)(⟦2-char-id⟧.maxHealth) || (⟦2-char-id⟧.push({
             str: "/"
           }), ⟦2-char-id⟧.push({
             str: ⟦2-char-id⟧.maxHealth.toString()
-          }))), !(0, ⟦2-char-id⟧.P)(⟦2-char-id⟧.attackDamage) && ⟦2-char-id⟧.attackDamage > 0 && (⟦2-char-id⟧.push({
+          }))), !(0, ⟦2-char-id⟧.M)(⟦2-char-id⟧.attackDamage) && ⟦2-char-id⟧.attackDamage > 0 && (⟦2-char-id⟧.push({
             str: "\n"
           }), ⟦2-char-id⟧.push({
             icon: "Iron Sword",
```

</details>

<details>
<summary>Hunk 202 · Change · +1 / -1</summary>

```diff
@@ -4730,7 +4730,7 @@
             str: " "
           }), ⟦2-char-id⟧.push({
             str: ⟦2-char-id⟧.attackDamage.toString()
-          })), !(0, ⟦2-char-id⟧.P)(⟦2-char-id⟧.secondaryAttackDamage) && ⟦2-char-id⟧.secondaryAttackDamage > 0 && (⟦2-char-id⟧.push({
+          })), !(0, ⟦2-char-id⟧.M)(⟦2-char-id⟧.secondaryAttackDamage) && ⟦2-char-id⟧.secondaryAttackDamage > 0 && (⟦2-char-id⟧.push({
             str: "\n"
           }), ⟦2-char-id⟧.push({
             icon: "Stone Crossbow",
```

</details>

<details>
<summary>Hunk 203 · Change · +1 / -1</summary>

```diff
@@ -4741,7 +4741,7 @@
             str: " "
           }), ⟦2-char-id⟧.push({
             str: ⟦2-char-id⟧.secondaryAttackDamage.toString()
-          })), (0, ⟦2-char-id⟧.P)(⟦2-char-id⟧.baseRunningSpeed) || (⟦2-char-id⟧.push({
+          })), (0, ⟦2-char-id⟧.M)(⟦2-char-id⟧.baseRunningSpeed) || (⟦2-char-id⟧.push({
             str: "\n"
           }), ⟦2-char-id⟧.push({
             icon: "Speed",
```

</details>

<details>
<summary>Hunk 204 · Change · +1 / -1</summary>

```diff
@@ -4761,7 +4761,7 @@
         }), ⟦2-char-id⟧.push({
           str: " "
         }), ⟦2-char-id⟧.push({
-          icon: null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.tameInfo) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.saddleItemName) && void 0 !== ⟦2-char-id⟧ ? gJ : "Saddle",
+          icon: null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.tameInfo) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.saddleItemName) && void 0 !== ⟦2-char-id⟧ ? IB : "Saddle",
           style: {
             fontSize: "1.5em"
           }
```

</details>

<details>
<summary>Hunk 205 · Change · +1 / -1</summary>

```diff
@@ -4771,7 +4771,7 @@
           }), ⟦2-char-id⟧.push({
             str: "\n"
           }), ⟦2-char-id⟧.petInfo && null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.tameInfo) && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.supportsFriendship) {
-          const ⟦2-char-id⟧ = ⟦2-char-id⟧.b.getIconsFromFriendshipPoints(⟦2-char-id⟧.petInfo.friendshipPoints);
+          const ⟦2-char-id⟧ = ⟦2-char-id⟧.e.getIconsFromFriendshipPoints(⟦2-char-id⟧.petInfo.friendshipPoints);
           for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.push({
             icon: ⟦2-char-id⟧,
             style: {
```

</details>

<details>
<summary>Hunk 206 · Change · +2 / -2</summary>

```diff
@@ -4781,8 +4781,8 @@
           ⟦2-char-id⟧.push({
             str: "\n"
           });
-          const ⟦2-char-id⟧ = ⟦2-char-id⟧.b.getMobHungerLevel(⟦2-char-id⟧.petInfo.lastFedAt);
-          for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.b.hungerLevelIcons[⟦2-char-id⟧]) ⟦2-char-id⟧.push({
+          const ⟦2-char-id⟧ = ⟦2-char-id⟧.e.getMobHungerLevel(⟦2-char-id⟧.petInfo.lastFedAt);
+          for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.e.hungerLevelIcons[⟦2-char-id⟧]) ⟦2-char-id⟧.push({
             icon: ⟦2-char-id⟧,
             style: {
               fontSize: "1.5em"
```

</details>

<details>
<summary>Hunk 207 · Change · +1 / -1</summary>

```diff
@@ -4791,7 +4791,7 @@
           ⟦2-char-id⟧.push({
             str: " "
           }), ⟦2-char-id⟧.push({
-            str: ⟦2-char-id⟧.b.hungerLevelTranslations[⟦2-char-id⟧],
+            str: ⟦2-char-id⟧.e.hungerLevelTranslations[⟦2-char-id⟧],
             style: {
               fontWeight: "bolder"
             }
```

</details>

<details>
<summary>Hunk 208 · Change · +2 / -2</summary>

```diff
@@ -4799,14 +4799,14 @@
         }
         if (⟦2-char-id⟧.tameInfo && null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.tameInfo) && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.supportsFriendship) {
           var ⟦2-char-id⟧, ⟦2-char-id⟧;
-          let ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.tameInfo.likedFoods) && void 0 !== ⟦2-char-id⟧ ? PJ : [];
+          let ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.tameInfo.likedFoods) && void 0 !== ⟦2-char-id⟧ ? SB : [];
           ⟦2-char-id⟧.push({
             str: "\n"
           }), ⟦2-char-id⟧.push({
             icon: "Pixelated Heart",
             style: {
               fontSize: "1.5em",
-              color: ⟦2-char-id⟧.b.feedTextColours[⟦2-char-id⟧.b.MobFoodType.Superliked]
+              color: ⟦2-char-id⟧.e.feedTextColours[⟦2-char-id⟧.e.MobFoodType.Superliked]
             }
           }), ⟦2-char-id⟧.push({
             str: " "
```

</details>

<details>
<summary>Hunk 209 · Change · +1 / -1</summary>

```diff
@@ -4826,7 +4826,7 @@
             icon: "Pixelated Heart",
             style: {
               fontSize: "1.5em",
-              color: ⟦2-char-id⟧.b.feedTextColours[⟦2-char-id⟧.b.MobFoodType.Liked]
+              color: ⟦2-char-id⟧.e.feedTextColours[⟦2-char-id⟧.e.MobFoodType.Liked]
             }
           }), ⟦2-char-id⟧.push({
             str: " "
```

</details>

<details>
<summary>Hunk 210 · Change · +2 / -2</summary>

```diff
@@ -4843,12 +4843,12 @@
             icon: "Pixelated Heart",
             style: {
               fontSize: "1.5em",
-              color: ⟦2-char-id⟧.b.feedTextColours[⟦2-char-id⟧.b.MobFoodType.Neutral]
+              color: ⟦2-char-id⟧.e.feedTextColours[⟦2-char-id⟧.e.MobFoodType.Neutral]
             }
           }), ⟦2-char-id⟧.push({
             str: " "
           });
-          for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.tameInfo.neutralFoods) && void 0 !== ⟦2-char-id⟧ ? pJ : []) {
+          for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.tameInfo.neutralFoods) && void 0 !== ⟦2-char-id⟧ ? QB : []) {
             var ⟦2-char-id⟧;
             ⟦2-char-id⟧.push({
               icon: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 211 · Change · +2 / -2</summary>

```diff
@@ -4863,12 +4863,12 @@
             icon: "Pixelated Heart",
             style: {
               fontSize: "1.5em",
-              color: ⟦2-char-id⟧.b.feedTextColours[⟦2-char-id⟧.b.MobFoodType.Disliked]
+              color: ⟦2-char-id⟧.e.feedTextColours[⟦2-char-id⟧.e.MobFoodType.Disliked]
             }
           }), ⟦2-char-id⟧.push({
             str: " "
           });
-          for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.tameInfo.dislikedFoods) && void 0 !== ⟦2-char-id⟧ ? dJ : []) {
+          for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.tameInfo.dislikedFoods) && void 0 !== ⟦2-char-id⟧ ? RB : []) {
             var ⟦2-char-id⟧;
             ⟦2-char-id⟧.push({
               icon: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 212 · Change · +1 / -1</summary>

```diff
@@ -4878,7 +4878,7 @@
             })
           }
         }
-        ⟦2-char-id⟧.length > 0 ? (⟦2-char-id⟧.shift(), ⟦2-char-id⟧.unshift(...(0, ⟦2-char-id⟧.lb)(⟦2-char-id⟧))) : ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.lb)(⟦2-char-id⟧)
+        ⟦2-char-id⟧.length > 0 ? (⟦2-char-id⟧.shift(), ⟦2-char-id⟧.unshift(...(0, ⟦2-char-id⟧.qb)(⟦2-char-id⟧))) : ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.qb)(⟦2-char-id⟧)
       }
       return {
         name: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 213 · Change · +2 / -2</summary>

```diff
@@ -4895,8 +4895,8 @@
         ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.name].armourReduction;
       if (⟦2-char-id⟧ === ⟦2-char-id⟧) {
         var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.attributes.customAttributes) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.enchantmentTier) && void 0 !== ⟦2-char-id⟧ ? jJ : "Tier 0",
-          ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.attributes.customAttributes) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.enchantmentTier) && void 0 !== ⟦2-char-id⟧ ? hJ : "Tier 0";
+        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.attributes.customAttributes) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.enchantmentTier) && void 0 !== ⟦2-char-id⟧ ? gB : "Tier 0",
+          ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.attributes.customAttributes) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.enchantmentTier) && void 0 !== ⟦2-char-id⟧ ? kB : "Tier 0";
         return parseInt(⟦2-char-id⟧.replace("Tier ", "")) >= parseInt(⟦2-char-id⟧.replace("Tier ", ""))
       }
       return ⟦2-char-id⟧ > ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 214 · Change · +1 / -1</summary>

```diff
@@ -4905,7 +4905,7 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let ⟦2-char-id⟧;
       if ("number" === typeof ⟦2-char-id⟧) {
-        const ⟦2-char-id⟧ = document.querySelector(`[data-inven-idx="${JJ}"]`);
+        const ⟦2-char-id⟧ = document.querySelector(`[data-inven-idx="${BB}"]`);
         if (!⟦2-char-id⟧) return null;
         ⟦2-char-id⟧ = ⟦2-char-id⟧.getBoundingClientRect()
       } else ⟦2-char-id⟧ = ⟦2-char-id⟧.getBoundingClientRect();
```

</details>

<details>
<summary>Hunk 215 · Change · +13 / -13</summary>

```diff
@@ -4915,22 +4915,22 @@
       }
     }
   },
-  8487: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  8529: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      d: () => ⟦2-char-id⟧,
-      g: () => ⟦2-char-id⟧,
-      j: () => ⟦2-char-id⟧
+      c: () => ⟦2-char-id⟧,
+      f: () => ⟦2-char-id⟧,
+      g: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1329),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(47),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1324),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
       ⟦2-char-id⟧ = ⟦2-char-id⟧(1201),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3950),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2102),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1086),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(80),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1743),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1232),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3942),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2068),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1078),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(95),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1727),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1225),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let {
```

</details>

<details>
<summary>Hunk 216 · Change · +2 / -2</summary>

```diff
@@ -4941,8 +4941,8 @@
         requestedGameNameWithVariation: ⟦2-char-id⟧,
         lobbyName: ⟦2-char-id⟧,
         shownLobbyName: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.f)("connectedGame"), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧, ⟦2-char-id⟧, !1);
-      return ⟦2-char-id⟧.featureFlags.canUseInviteLinks && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+      } = (0, ⟦2-char-id⟧.i)("connectedGame"), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧, ⟦2-char-id⟧, !1);
+      return ⟦2-char-id⟧.featureFlags.canUseInviteLinks && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
         show: ⟦2-char-id⟧,
         close: ⟦2-char-id⟧,
         padShowsHud: !0,
```

</details>

<details>
<summary>Hunk 217 · Change · +1 / -1</summary>

```diff
@@ -4959,7 +4959,7 @@
             children: [(0, ⟦2-char-id⟧.jsx)("div", {
               className: "InviteLinkBoxSubheader SmallTextBold",
               children: '"Join Lobby Name" Button Info'
-            }), "Game: ", null === ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {}) : ⟦2-char-id⟧, (0, ⟦2-char-id⟧.jsx)("br", {}), "Lobby Name: ", eJ, (0, ⟦2-char-id⟧.jsx)("br", {}), (0, ⟦2-char-id⟧.jsx)("br", {}), (0, ⟦2-char-id⟧.jsx)("br", {}), (0, ⟦2-char-id⟧.jsx)("div", {
+            }), "Game: ", null === ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {}) : ⟦2-char-id⟧, (0, ⟦2-char-id⟧.jsx)("br", {}), "Lobby Name: ", pB, (0, ⟦2-char-id⟧.jsx)("br", {}), (0, ⟦2-char-id⟧.jsx)("br", {}), (0, ⟦2-char-id⟧.jsx)("br", {}), (0, ⟦2-char-id⟧.jsx)("div", {
               className: "InviteLinkBoxSubheader SmallTextBold",
               children: "Link"
             })]
```

</details>

<details>
<summary>Hunk 218 · Change · +1 / -1</summary>

```diff
@@ -4972,7 +4972,7 @@
       var ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.featureFlags.canUseInviteLinks)) && void 0 !== ⟦2-char-id⟧ ? JJ : "Loading Link...", [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(0), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useReducer)((⟦2-char-id⟧ => ⟦2-char-id⟧ + 1), 0);
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.featureFlags.canUseInviteLinks)) && void 0 !== ⟦2-char-id⟧ ? BB : "Loading Link...", [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(0), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useReducer)((⟦2-char-id⟧ => ⟦2-char-id⟧ + 1), 0);
       return (0, ⟦2-char-id⟧.useEffect)((() => {
         const ⟦2-char-id⟧ = setTimeout((() => {
           ⟦2-char-id⟧()
```

</details>

<details>
<summary>Hunk 219 · Change · +1 / -1</summary>

```diff
@@ -5003,7 +5003,7 @@
       return (0, ⟦2-char-id⟧.useEffect)((() => {
         if (!⟦2-char-id⟧) return;
         let ⟦2-char-id⟧ = !0;
-        return (0, ⟦2-char-id⟧.y)().then((⟦2-char-id⟧ => {
+        return (0, ⟦2-char-id⟧.z)().then((⟦2-char-id⟧ => {
           ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧)
         })).catch((⟦2-char-id⟧ => {
           console.error("Failed to get invite link:", ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 220 · Change · +8 / -8</summary>

```diff
@@ -5013,22 +5013,22 @@
       }), [⟦2-char-id⟧]), ⟦2-char-id⟧
     }
   },
-  8550: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  8565: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      d: () => ⟦2-char-id⟧
+      c: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(47),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(926),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(933),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1743),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1727),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧ / 3600),
         ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧ % 3600 / 60),
         ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧ % 60),
-        ⟦2-char-id⟧ = `${ZJ.toString().padStart(2,"0")}:${FJ.toString().padStart(2,"0")}`;
-      return ⟦2-char-id⟧ > 0 ? `${cJ}:${UJ}` : ⟦2-char-id⟧
+        ⟦2-char-id⟧ = `${dB.toString().padStart(2,"0")}:${VB.toString().padStart(2,"0")}`;
+      return ⟦2-char-id⟧ > 0 ? `${TB}:${yB}` : ⟦2-char-id⟧
     }
     const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.memo)((function(⟦2-char-id⟧) {
       let {
```

</details>

<details>
<summary>Hunk 221 · Change · +1 / -1</summary>

```diff
@@ -5037,7 +5037,7 @@
       const {
         recording: ⟦2-char-id⟧,
         seconds: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.f)("replayRecorder");
+      } = (0, ⟦2-char-id⟧.i)("replayRecorder");
       return ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.jsxs)("div", {
         className: ⟦2-char-id⟧()("RecordingIndicator", ⟦2-char-id⟧),
         children: [(0, ⟦2-char-id⟧.jsx)("span", {
```

</details>

<details>
<summary>Hunk 222 · Change · +24 / -24</summary>

```diff
@@ -5052,48 +5052,48 @@
       }) : null
     }))
   },
-  8167: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  8194: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      d: () => ⟦2-char-id⟧,
-      h: () => ⟦2-char-id⟧
+      b: () => ⟦2-char-id⟧,
+      f: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1086),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(47),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1756),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1769),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(926),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1078),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1738),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1751),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(933),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1329),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(13),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(80),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(93),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4401),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2175),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1324),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(21),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(95),
       ⟦2-char-id⟧ = ⟦2-char-id⟧(105),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1778),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1782),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8176),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(227),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4411),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2139),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(127),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1754),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1757),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8196),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(270),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
     const ⟦2-char-id⟧ = {
       floating: "settingsMenu:joystickFloating",
       fixed_shown: "settingsMenu:joystickFixed",
       fixed_hidden: "settingsMenu:joystickHidden"
     };
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8178);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8204);
     const ⟦2-char-id⟧ = [function() {
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), {
+      } = (0, ⟦2-char-id⟧.z)(), {
         joystickMode: ⟦2-char-id⟧,
         touchSpeedCurve: ⟦2-char-id⟧,
         autorun: ⟦2-char-id⟧,
         jumpLock: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.j)(["clientEscMenuOptions"]).clientEscMenuOptions;
+      } = (0, ⟦2-char-id⟧.m)(["clientEscMenuOptions"]).clientEscMenuOptions;
       return (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
-        children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.f, {
+        children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.g, {
           label: ⟦2-char-id⟧("settingsMenu:joystick"),
-          options: ⟦2-char-id⟧.nb.map((⟦2-char-id⟧ => ({
+          options: ⟦2-char-id⟧.wb.map((⟦2-char-id⟧ => ({
             value: ⟦2-char-id⟧,
             label: ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧])
           }))),
```

</details>

<details>
<summary>Hunk 223 · Change · +2 / -2</summary>

```diff
@@ -5136,9 +5136,9 @@
     }, function() {
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), {
+      } = (0, ⟦2-char-id⟧.z)(), {
         clientEscMenuOptions: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.j)(["clientEscMenuOptions"]);
+      } = (0, ⟦2-char-id⟧.m)(["clientEscMenuOptions"]);
       return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
         label: ⟦2-char-id⟧("touchSettings:actionButtons"),
         checked: ⟦2-char-id⟧.touchActionButtons,
```

</details>

<details>
<summary>Hunk 224 · Change · +3 / -3</summary>

```diff
@@ -5152,10 +5152,10 @@
     }, function() {
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), {
+      } = (0, ⟦2-char-id⟧.z)(), {
         clientEscMenuOptions: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.j)(["clientEscMenuOptions"]);
-      return (0, ⟦2-char-id⟧.e)() ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+      } = (0, ⟦2-char-id⟧.m)(["clientEscMenuOptions"]);
+      return (0, ⟦2-char-id⟧.c)() ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
         label: ⟦2-char-id⟧("settingsMenu:vibration"),
         checked: ⟦2-char-id⟧.vibration,
         onClick: ⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 225 · Change · +4 / -4</summary>

```diff
@@ -5172,23 +5172,23 @@
         children: ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {}, ⟦2-char-id⟧)))
       })
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(3833);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(3825);
 
     function ⟦2-char-id⟧() {
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), {
+      } = (0, ⟦2-char-id⟧.z)(), {
         isTouchScreen: ⟦2-char-id⟧,
         clientEscMenuOptions: ⟦2-char-id⟧,
         gameState: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.j)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)("ezBridging"), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)("ezTowering"), ⟦2-char-id⟧ = "inGame" !== ⟦2-char-id⟧ || !0 === ⟦2-char-id⟧, ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)() && ("inGame" !== ⟦2-char-id⟧ || !0 === ⟦2-char-id⟧), [, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useReducer)((⟦2-char-id⟧ => ⟦2-char-id⟧ + 1), 0), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(⟦2-char-id⟧.e);
+      } = (0, ⟦2-char-id⟧.m)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)("ezBridging"), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)("ezTowering"), ⟦2-char-id⟧ = "inGame" !== ⟦2-char-id⟧ || !0 === ⟦2-char-id⟧, ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.h)() && ("inGame" !== ⟦2-char-id⟧ || !0 === ⟦2-char-id⟧), [, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useReducer)((⟦2-char-id⟧ => ⟦2-char-id⟧ + 1), 0), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(⟦2-char-id⟧.f);
       return (0, ⟦2-char-id⟧.jsxs)("div", {
         className: "SettingsMenuRightInner",
         children: [⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)("div", {
           className: "SettingBox ControlsControllerNote",
           children: [(0, ⟦2-char-id⟧.jsx)("div", {
             children: ⟦2-char-id⟧("controller:settingsControlsNote")
-          }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.O, {
+          }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.T, {
             onClick: () => {
               ⟦2-char-id⟧.d.set({
                 openSettingsCategory: "controller"
```

</details>

<details>
<summary>Hunk 226 · Change · +1 / -1</summary>

```diff
@@ -5201,7 +5201,7 @@
             label: ⟦2-char-id⟧("settingsMenu:useTouchControls"),
             checked: ⟦2-char-id⟧,
             onClick: ⟦2-char-id⟧ => {
-              (0, ⟦2-char-id⟧.b)(⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧)
+              (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧)
             }
           })
         }) : null, ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {}), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
```

</details>

<details>
<summary>Hunk 227 · Change · +1 / -1</summary>

```diff
@@ -5240,7 +5240,7 @@
             })
           },
           circleInfoText: ⟦2-char-id⟧("settingsMenu:hideUiToggleInfo")
-        }), "mouseOnly" !== (0, ⟦2-char-id⟧.e)() && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.h, {
+        }), "mouseOnly" !== (0, ⟦2-char-id⟧.e)() && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.k, {
           name: ⟦2-char-id⟧("settingsMenu:touchscreenSensitivity"),
           min: 1,
           max: 900,
```

</details>

<details>
<summary>Hunk 228 · Change · +1 / -1</summary>

```diff
@@ -5251,7 +5251,7 @@
               touchscreenSensitivity: ⟦2-char-id⟧
             })
           }
-        }), !(0, ⟦2-char-id⟧.isMobile)() && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.h, {
+        }), !(0, ⟦2-char-id⟧.isMobile)() && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.k, {
           name: ⟦2-char-id⟧("settingsMenu:mouseSensitivity"),
           min: 1,
           max: 200,
```

</details>

<details>
<summary>Hunk 229 · Change · +3 / -3</summary>

```diff
@@ -5269,17 +5269,17 @@
             children: ⟦2-char-id⟧("settingsMenu:keyBindings")
           }), ⟦2-char-id⟧.f.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
             title: ⟦2-char-id⟧(⟦2-char-id⟧.name.translationKey, ⟦2-char-id⟧.name.params),
-            defaultOpen: ⟦2-char-id⟧.j.has(⟦2-char-id⟧.id),
+            defaultOpen: ⟦2-char-id⟧.g.has(⟦2-char-id⟧.id),
             children: ⟦2-char-id⟧.actions.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
               noaAction: ⟦2-char-id⟧,
               forceUpdate: ⟦2-char-id⟧,
               clashesWith: ⟦2-char-id⟧.clashesWith,
               showPadGlyph: ⟦2-char-id⟧
             }, ⟦2-char-id⟧)))
-          }, ⟦2-char-id⟧.name.translationKey))), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.I, {
+          }, ⟦2-char-id⟧.name.translationKey))), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.K, {
             className: "ResetBindingsButton",
             onClick: () => {
-              (0, ⟦2-char-id⟧.H)(), ⟦2-char-id⟧()
+              (0, ⟦2-char-id⟧.y)(), ⟦2-char-id⟧()
             },
             children: ⟦2-char-id⟧("controls:resetBindings")
           })]
```

</details>

<details>
<summary>Hunk 230 · Change · +5 / -5</summary>

```diff
@@ -5327,21 +5327,21 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)(⟦2-char-id⟧), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)("controls:clickToEnterNewBinding"), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null);
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)(⟦2-char-id⟧), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)("controls:clickToEnterNewBinding"), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null);
       (0, ⟦2-char-id⟧.useEffect)((() => {
         ⟦2-char-id⟧ && ⟦2-char-id⟧.current && ⟦2-char-id⟧.current.focus()
       }), [⟦2-char-id⟧]);
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧.z[⟦2-char-id⟧].filter((⟦2-char-id⟧ => ⟦2-char-id⟧.f[⟦2-char-id⟧]));
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧.r[⟦2-char-id⟧].filter((⟦2-char-id⟧ => ⟦2-char-id⟧.j[⟦2-char-id⟧]));
       let ⟦2-char-id⟧ = null;
       const ⟦2-char-id⟧ = [],
         ⟦2-char-id⟧ = ⟦2-char-id⟧.flatMap((⟦2-char-id⟧ => {
           var ⟦2-char-id⟧, ⟦2-char-id⟧;
-          return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.f.find((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧))) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.actions) && void 0 !== ⟦2-char-id⟧ ? cJ : []
+          return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.f.find((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧))) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.actions) && void 0 !== ⟦2-char-id⟧ ? TB : []
         }));
       for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
         if (⟦2-char-id⟧ === ⟦2-char-id⟧) continue;
-        const ⟦2-char-id⟧ = ⟦2-char-id⟧.z[⟦2-char-id⟧];
-        for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.includes(⟦2-char-id⟧) && ⟦2-char-id⟧.push(⟦2-char-id⟧(⟦2-char-id⟧.A[⟦2-char-id⟧].translationKey, ⟦2-char-id⟧.A[⟦2-char-id⟧].params))
+        const ⟦2-char-id⟧ = ⟦2-char-id⟧.r[⟦2-char-id⟧];
+        for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.includes(⟦2-char-id⟧) && ⟦2-char-id⟧.push(⟦2-char-id⟧(⟦2-char-id⟧.u[⟦2-char-id⟧].translationKey, ⟦2-char-id⟧.u[⟦2-char-id⟧].params))
       }
       ⟦2-char-id⟧.length > 0 && (⟦2-char-id⟧ = ⟦2-char-id⟧("controls:sharedBindingsWarning") + " ", ⟦2-char-id⟧ += ⟦2-char-id⟧.join(", "));
       const ⟦2-char-id⟧ = () => {
```

</details>

<details>
<summary>Hunk 231 · Change · +1 / -1</summary>

```diff
@@ -5356,7 +5356,7 @@
           className: "ControlRowInner",
           children: [(0, ⟦2-char-id⟧.jsxs)("div", {
             className: "ControlName",
-            children: [⟦2-char-id⟧(⟦2-char-id⟧.A[⟦2-char-id⟧].translationKey, ⟦2-char-id⟧.A[⟦2-char-id⟧].params), ⟦2-char-id⟧ && ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+            children: [⟦2-char-id⟧(⟦2-char-id⟧.u[⟦2-char-id⟧].translationKey, ⟦2-char-id⟧.u[⟦2-char-id⟧].params), ⟦2-char-id⟧ && ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
               glyph: ⟦2-char-id⟧,
               className: "ControlPadGlyph"
             })]
```

</details>

<details>
<summary>Hunk 232 · Change · +2 / -2</summary>

```diff
@@ -5367,12 +5367,12 @@
               children: [⟦2-char-id⟧.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsxs)("div", {
                 className: "ControlBinding",
                 children: [(0, ⟦2-char-id⟧.jsx)("div", {
-                  children: (0, ⟦2-char-id⟧.r)(⟦2-char-id⟧)
+                  children: (0, ⟦2-char-id⟧.k)(⟦2-char-id⟧)
                 }), (0, ⟦2-char-id⟧.jsx)("div", {
                   className: "ControlBindingRemoveIcon",
                   "data-pad-focusable": !0,
                   onClick: () => {
-                    const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.C)(⟦2-char-id⟧, ⟦2-char-id⟧);
+                    const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.v)(⟦2-char-id⟧, ⟦2-char-id⟧);
                     ⟦2-char-id⟧.isError() ? ⟦2-char-id⟧(⟦2-char-id⟧.asError().message) : ⟦2-char-id⟧(null), ⟦2-char-id⟧()
                   },
                   children: "\xd7"
```

</details>

<details>
<summary>Hunk 233 · Change · +1 / -1</summary>

```diff
@@ -5393,7 +5393,7 @@
                 className: "InputContainer",
                 children: [(0, ⟦2-char-id⟧.jsx)("div", {
                   className: "InputOverlay",
-                  children: ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.r)(⟦2-char-id⟧) : (0, ⟦2-char-id⟧.jsx)("div", {
+                  children: ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.k)(⟦2-char-id⟧) : (0, ⟦2-char-id⟧.jsx)("div", {
                     className: "InputOverlayPlaceholder",
                     children: ⟦2-char-id⟧(⟦2-char-id⟧)
                   })
```

</details>

<details>
<summary>Hunk 234 · Change · +2 / -2</summary>

```diff
@@ -5405,11 +5405,11 @@
                   onKeyDown: ⟦2-char-id⟧ => {
                     if ("Escape" === ⟦2-char-id⟧.code) return ⟦2-char-id⟧(), ⟦2-char-id⟧.preventDefault(), void ⟦2-char-id⟧.stopPropagation();
                     const ⟦2-char-id⟧ = ⟦2-char-id⟧.code;
-                    ⟦2-char-id⟧.c.includes(⟦2-char-id⟧) ? (⟦2-char-id⟧(null), ⟦2-char-id⟧(⟦2-char-id⟧)) : (⟦2-char-id⟧("controls:keyIsReserved"), ⟦2-char-id⟧(null)), ⟦2-char-id⟧.preventDefault(), ⟦2-char-id⟧.stopPropagation()
+                    ⟦2-char-id⟧.e.includes(⟦2-char-id⟧) ? (⟦2-char-id⟧(null), ⟦2-char-id⟧(⟦2-char-id⟧)) : (⟦2-char-id⟧("controls:keyIsReserved"), ⟦2-char-id⟧(null)), ⟦2-char-id⟧.preventDefault(), ⟦2-char-id⟧.stopPropagation()
                   },
                   onMouseDown: ⟦2-char-id⟧ => {
                     const ⟦2-char-id⟧ = "Mouse" + (⟦2-char-id⟧.button + 1);
-                    document.activeElement && document.activeElement.id === ⟦2-char-id⟧() ? ⟦2-char-id⟧.c.includes(⟦2-char-id⟧) ? (⟦2-char-id⟧(null), ⟦2-char-id⟧(⟦2-char-id⟧)) : (⟦2-char-id⟧("controls:keyIsReserved"), ⟦2-char-id⟧(null)) : ⟦2-char-id⟧("controls:enterNewBinding"), ⟦2-char-id⟧.stopPropagation()
+                    document.activeElement && document.activeElement.id === ⟦2-char-id⟧() ? ⟦2-char-id⟧.e.includes(⟦2-char-id⟧) ? (⟦2-char-id⟧(null), ⟦2-char-id⟧(⟦2-char-id⟧)) : (⟦2-char-id⟧("controls:keyIsReserved"), ⟦2-char-id⟧(null)) : ⟦2-char-id⟧("controls:enterNewBinding"), ⟦2-char-id⟧.stopPropagation()
                   },
                   onBlur: () => {
                     ⟦2-char-id⟧("controls:clickToEnterNewBinding")
```

</details>

<details>
<summary>Hunk 235 · Change · +11 / -11</summary>

```diff
@@ -5444,20 +5444,20 @@
       })
     }
   },
-  4301: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  4284: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      d: () => ⟦2-char-id⟧
+      e: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(926),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(933),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4054),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1086),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(942),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1329),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1389),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1247),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2189),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4042),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1078),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(946),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1324),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1393),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1235),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2160),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
     const ⟦2-char-id⟧ = {
       youtube: {
         icon: "youtube",
```

</details>

<details>
<summary>Hunk 236 · Change · +1 / -1</summary>

```diff
@@ -5497,7 +5497,7 @@
         }),
         children: [⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
           variant: "white"
-        }), !⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+        }), !⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
           name: ⟦2-char-id⟧[⟦2-char-id⟧].icon,
           kit: "brands"
         })]
```

</details>

<details>
<summary>Hunk 237 · Change · +1 / -1</summary>

```diff
@@ -5514,7 +5514,7 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
       if (!⟦2-char-id⟧ && !⟦2-char-id⟧) return null;
 
       function ⟦2-char-id⟧() {
```

</details>

<details>
<summary>Hunk 238 · Change · +2 / -2</summary>

```diff
@@ -5527,9 +5527,9 @@
               platform: ⟦2-char-id⟧.name
             }
           },
-          prefixText: ⟦2-char-id⟧.s[⟦2-char-id⟧],
+          prefixText: ⟦2-char-id⟧.x[⟦2-char-id⟧],
           placeholderText: "playBloxd",
-          initialValue: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.handle) && void 0 !== ⟦2-char-id⟧ ? JJ : "",
+          initialValue: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.handle) && void 0 !== ⟦2-char-id⟧ ? BB : "",
           maxLength: 30,
           submitText: "general:save",
           secondaryButtonText: ⟦2-char-id⟧ ? "general:remove" : void 0
```

</details>

<details>
<summary>Hunk 239 · Change · +1 / -1</summary>

```diff
@@ -5545,7 +5545,7 @@
         }))
       }
       if (⟦2-char-id⟧) {
-        const ⟦2-char-id⟧ = `@${ZJ.handle}`;
+        const ⟦2-char-id⟧ = `@${dB.handle}`;
         return (0, ⟦2-char-id⟧.jsxs)("a", {
           className: "PlayerProfileSocialLink",
           style: {
```

</details>

<details>
<summary>Hunk 240 · Change · +3 / -3</summary>

```diff
@@ -5568,18 +5568,18 @@
           }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("button", {
             type: "button",
             className: "PlayerProfileSocialLinkEditButton",
-            ...(0, ⟦2-char-id⟧.U)({
+            ...(0, ⟦2-char-id⟧._)({
               stopPropagation: !0
             }),
             onClick: ⟦2-char-id⟧ => {
               ⟦2-char-id⟧.stopPropagation(), ⟦2-char-id⟧.preventDefault(), ⟦2-char-id⟧()
             },
-            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
               name: "pen-to-square"
             })
           }), !⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("span", {
             className: "PlayerProfileSocialLinkArrow",
-            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
               name: "arrow-up-right-from-square"
             })
           })]
```

</details>

<details>
<summary>Hunk 241 · Change · +1 / -1</summary>

```diff
@@ -5591,7 +5591,7 @@
         style: {
           background: ⟦2-char-id⟧.color
         },
-        ...(0, ⟦2-char-id⟧.U)(),
+        ...(0, ⟦2-char-id⟧._)(),
         onClick: () => {
           ⟦2-char-id⟧()
         },
```

</details>

<details>
<summary>Hunk 242 · Change · +1 / -1</summary>

```diff
@@ -5608,7 +5608,7 @@
           })]
         }), (0, ⟦2-char-id⟧.jsx)("span", {
           className: "PlayerProfileSocialLinkEditButton",
-          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
             name: "pen-to-square"
           })
         })]
```

</details>

<details>
<summary>Hunk 243 · Change · +1 / -1</summary>

```diff
@@ -5624,7 +5624,7 @@
       } = ⟦2-char-id⟧;
       if (!⟦2-char-id⟧ && 0 === ⟦2-char-id⟧.length) return null;
       const ⟦2-char-id⟧ = new Map(⟦2-char-id⟧.map((⟦2-char-id⟧ => [⟦2-char-id⟧.platform, ⟦2-char-id⟧]))),
-        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.o : ⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧.platform));
+        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.w : ⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧.platform));
       return (0, ⟦2-char-id⟧.jsx)("div", {
         className: "PlayerProfileSocialLinks",
         children: (0, ⟦2-char-id⟧.jsx)("div", {
```

</details>

<details>
<summary>Hunk 244 · Change · +4 / -4</summary>

```diff
@@ -5640,12 +5640,12 @@
       })
     }
   },
-  8557: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  8570: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧
+      d: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(3957),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3966);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(3948),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3951);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let {
```

</details>

<details>
<summary>Hunk 245 · Change · +39 / -39</summary>

```diff
@@ -5656,98 +5656,98 @@
         doGameplayStartStopOnShow: ⟦2-char-id⟧ = !0,
         keepsMovement: ⟦2-char-id⟧ = !1
       } = ⟦2-char-id⟧;
-      return (0, ⟦2-char-id⟧.c)(!0, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ || ⟦2-char-id⟧ ? cJ : null
+      return (0, ⟦2-char-id⟧.d)(!0, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ || ⟦2-char-id⟧ ? TB : null
     }
   },
-  8139: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  8175: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧
+      d: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(13),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2924),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1247),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1294);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(21),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2925),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1235),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1275);
     const ⟦2-char-id⟧ = async () => {
-      if ((0, ⟦2-char-id⟧.e)()) {
+      if ((0, ⟦2-char-id⟧.i)()) {
         if (!0 !== await ⟦2-char-id⟧.NotificationProvider.showPromptPopup({
             title: "controller:menusLeaveGameTitle",
             confirmText: "controller:menusLeaveGameLeave",
             cancelText: "controller:menusLeaveGameStay",
             destructive: !0
           }).getResult() || "inGame" !== ⟦2-char-id⟧.d.get("gameState")) return
-      }(0, ⟦2-char-id⟧.e)()
+      }(0, ⟦2-char-id⟧.b)()
     }
   },
-  8145: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  8178: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       b: () => ⟦2-char-id⟧,
-      e: () => ⟦2-char-id⟧,
-      i: () => ⟦2-char-id⟧,
-      j: () => ⟦2-char-id⟧,
-      l: () => ⟦2-char-id⟧
+      d: () => ⟦2-char-id⟧,
+      g: () => ⟦2-char-id⟧,
+      k: () => ⟦2-char-id⟧,
+      o: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1734);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1711);
     const ⟦2-char-id⟧ = "controllerPadShopOpen",
-      ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧.j.includes(⟦2-char-id⟧),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧.f.includes(⟦2-char-id⟧),
       ⟦2-char-id⟧ = ⟦2-char-id⟧ => Object.values(⟦2-char-id⟧).some((⟦2-char-id⟧ => !1 !== ⟦2-char-id⟧.canBuy && !⟦2-char-id⟧.isRewardedAd)),
       ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
         var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.filter((⟦2-char-id⟧ => !⟦2-char-id⟧(⟦2-char-id⟧))),
-          ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.includes(⟦2-char-id⟧) ? cJ : null;
-        return null !== ⟦2-char-id⟧ && !⟦2-char-id⟧(⟦2-char-id⟧) && ⟦2-char-id⟧(⟦2-char-id⟧) ? jJ : null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? AJ : ⟦2-char-id⟧[0]) && void 0 !== ⟦2-char-id⟧ ? XJ : ⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧ ? UJ : ⟦2-char-id⟧[0]) && void 0 !== ⟦2-char-id⟧ ? FJ : null
+          ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.includes(⟦2-char-id⟧) ? TB : null;
+        return null !== ⟦2-char-id⟧ && !⟦2-char-id⟧(⟦2-char-id⟧) && ⟦2-char-id⟧(⟦2-char-id⟧) ? gB : null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? JB : ⟦2-char-id⟧[0]) && void 0 !== ⟦2-char-id⟧ ? lB : ⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧ ? yB : ⟦2-char-id⟧[0]) && void 0 !== ⟦2-char-id⟧ ? VB : null
       },
       ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧.userInput || ⟦2-char-id⟧.isRewardedAd || "boolean" === typeof ⟦2-char-id⟧.isSelected ? null : JSON.stringify([⟦2-char-id⟧.image, ⟦2-char-id⟧.cost, ⟦2-char-id⟧.currency, ⟦2-char-id⟧.amount, ⟦2-char-id⟧.customTitle, ⟦2-char-id⟧.buyButtonText, ⟦2-char-id⟧.description, ⟦2-char-id⟧.canBuy])
   },
-  8176: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  8196: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      b: () => ⟦2-char-id⟧,
-      d: () => ⟦2-char-id⟧
+      e: () => ⟦2-char-id⟧,
+      f: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(47),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1326),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1786),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1300),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1314),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1317),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1764),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1286),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1299),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
     const ⟦2-char-id⟧ = () => {
-        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.s)();
+        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.y)();
         if ((0, ⟦2-char-id⟧.useEffect)((() => {
-            (0, ⟦2-char-id⟧.k)()
+            (0, ⟦2-char-id⟧.p)()
           }), []), !⟦2-char-id⟧) return null;
         const {
           ControllerCategory: ⟦2-char-id⟧
         } = ⟦2-char-id⟧;
-        return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+        return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
           children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {})
         })
       },
       ⟦2-char-id⟧ = () => {
         var ⟦2-char-id⟧;
-        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.s)(),
+        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.y)(),
           [, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useReducer)((⟦2-char-id⟧ => ⟦2-char-id⟧ + 1), 0);
-        return (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧.b, ⟦2-char-id⟧), null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.hasActivePad()) && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧
+        return (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧.d, ⟦2-char-id⟧), null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.hasActivePad()) && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧
       }
   },
-  8482: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  8527: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧
+      d: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = new Set(["chunkBorders"])
   },
-  8476: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  8520: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       ALL_DEV_TOOLS: () => ⟦2-char-id⟧,
       coreDevTools: () => ⟦2-char-id⟧,
       devTools: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(547),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1192),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8482);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(586),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1185),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8527);
     const ⟦2-char-id⟧ = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
     async function ⟦2-char-id⟧() {
       const {
         noaDevTools: ⟦2-char-id⟧
-      } = await ⟦2-char-id⟧.e(218).then((() => ⟦2-char-id⟧(39848)));
+      } = await ⟦2-char-id⟧.e(218).then((() => ⟦2-char-id⟧(39796)));
       return ⟦2-char-id⟧
     }
     const ⟦2-char-id⟧ = new class {
```

</details>

<details>
<summary>Hunk 246 · Change · +1 / -1</summary>

```diff
@@ -5755,7 +5755,7 @@
           this.loadHost = ⟦2-char-id⟧, this.tools = ⟦2-char-id⟧
         }
         setHost(⟦2-char-id⟧) {
-          this.tools = null === ⟦2-char-id⟧ ? XJ : ⟦2-char-id⟧.tools, this.loadHost = null === ⟦2-char-id⟧ ? AJ : async () => ⟦2-char-id⟧
+          this.tools = null === ⟦2-char-id⟧ ? lB : ⟦2-char-id⟧.tools, this.loadHost = null === ⟦2-char-id⟧ ? JB : async () => ⟦2-char-id⟧
         }
         supports(⟦2-char-id⟧) {
           return this.tools.has(⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 247 · Change · +1 / -1</summary>

```diff
@@ -5770,7 +5770,7 @@
         }
       },
       ⟦2-char-id⟧ = {
-        tools: ⟦2-char-id⟧.c,
+        tools: ⟦2-char-id⟧.d,
         downloadScene: async () => {
           throw new Error("This client can't download the scene")
         },
```

</details>

<details>
<summary>Hunk 248 · Change · +12 / -12</summary>

```diff
@@ -5778,40 +5778,40 @@
           throw new Error("This client can't set the ambient light")
         }
       };
-    ⟦2-char-id⟧.r && ⟦2-char-id⟧.setHost(⟦2-char-id⟧), (0, ⟦2-char-id⟧.s)((() => {
+    ⟦2-char-id⟧.p && ⟦2-char-id⟧.setHost(⟦2-char-id⟧), (0, ⟦2-char-id⟧.r)((() => {
       ⟦2-char-id⟧.setHost(⟦2-char-id⟧)
     }))
   },
-  6004: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  5994: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧,
-      f: () => ⟦2-char-id⟧
+      b: () => ⟦2-char-id⟧,
+      d: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(29);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(33);
     const ⟦2-char-id⟧ = "shaderPack";
     async function ⟦2-char-id⟧() {
       var ⟦2-char-id⟧;
       let ⟦2-char-id⟧ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-      return null !== (⟦2-char-id⟧ = await ⟦2-char-id⟧.g.getItem(⟦2-char-id⟧, ⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? JJ : null
+      return null !== (⟦2-char-id⟧ = await ⟦2-char-id⟧.f.getItem(⟦2-char-id⟧, ⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? BB : null
     }
   },
-  8502: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  8540: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       return ⟦2-char-id⟧ && !⟦2-char-id⟧
     }
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧
+      d: () => ⟦2-char-id⟧
     })
   },
-  8541: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  8556: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧
+      b: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(957);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(955);
 
     function ⟦2-char-id⟧() {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
-      return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = screen.orientation) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.type) && void 0 !== ⟦2-char-id⟧ ? JJ : innerWidth > innerHeight ? "landscape" : "portrait"
+      return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = screen.orientation) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.type) && void 0 !== ⟦2-char-id⟧ ? BB : innerWidth > innerHeight ? "landscape" : "portrait"
     }
     const ⟦2-char-id⟧ = new class {
       constructor() {
```

</details>

<details>
<summary>Hunk 249 · Change · +1 / -1</summary>

```diff
@@ -5824,7 +5824,7 @@
       }
       hold() {
         this.heldOrientation = ⟦2-char-id⟧(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
-          this.holding && (0, ⟦2-char-id⟧.MG)(new Error("Game view size held for 60 s"))
+          this.holding && (0, ⟦2-char-id⟧.wu)(new Error("Game view size held for 60 s"))
         }), 6⟦2-char-id⟧)
       }
       release() {
```

</details>

<details>
<summary>Hunk 250 · Change · +13 / -13</summary>

```diff
@@ -5851,35 +5851,35 @@
       }
     }
   },
-  8546: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  8559: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      b: () => ⟦2-char-id⟧
+      d: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(157),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1671),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(29);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(184),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1652),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(33);
     const ⟦2-char-id⟧ = 2;
 
     function ⟦2-char-id⟧() {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧("chunkHorizAddDist", ⟦2-char-id⟧.c.defaultChunkHorizAddDistance),
         ⟦2-char-id⟧ = ⟦2-char-id⟧("chunkVertAddDist", ⟦2-char-id⟧.c.defaultChunkVertAddDistance);
-      return ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.c.maxChunkHorizAddDistance), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.c.maxChunkVertAddDistance), [⟦2-char-id⟧, ⟦2-char-id⟧]
+      return ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.c.maxChunkHorizAddDistance), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.c.maxChunkVertAddDistance), [⟦2-char-id⟧, ⟦2-char-id⟧]
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.j.getItem(⟦2-char-id⟧),
         ⟦2-char-id⟧ = "number" === typeof ⟦2-char-id⟧ || "string" === typeof ⟦2-char-id⟧ ? Number(⟦2-char-id⟧) : Number.NaN;
-      return Number.isFinite(⟦2-char-id⟧) ? FJ : ⟦2-char-id⟧
+      return Number.isFinite(⟦2-char-id⟧) ? VB : ⟦2-char-id⟧
     }
   },
-  8178: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  8204: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧,
-      g: () => ⟦2-char-id⟧
+      c: () => ⟦2-char-id⟧,
+      f: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(13),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1213),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(80);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(21),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1209),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(95);
     const ⟦2-char-id⟧ = {
       blockMined: {
         pattern: [18],
```

</details>

<details>
<summary>Hunk 251 · Change · +16 / -16</summary>

```diff
@@ -5934,40 +5934,40 @@
         var ⟦2-char-id⟧;
         if (!this.deps.enabled()) return;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
-          ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧.pattern;
+          ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧.pattern;
         if (null === ⟦2-char-id⟧) return void console.warn("No vibration pattern for", ⟦2-char-id⟧);
         const ⟦2-char-id⟧ = this.deps.now();
-        ⟦2-char-id⟧ - this.lastAnyAt < 40 && ⟦2-char-id⟧.priority < this.playingPriority || ⟦2-char-id⟧ - (null !== (⟦2-char-id⟧ = this.lastAt.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? ZJ : -1 / 0) < ⟦2-char-id⟧.minGapMs || ⟦2-char-id⟧ < this.playingUntil && ⟦2-char-id⟧.priority < this.playingPriority || (this.lastAt.set(⟦2-char-id⟧, ⟦2-char-id⟧), this.lastAnyAt = ⟦2-char-id⟧, this.playingUntil = ⟦2-char-id⟧ + ⟦2-char-id⟧.reduce(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ + ⟦2-char-id⟧), 0), this.playingPriority = ⟦2-char-id⟧.priority, this.deps.vibrate(⟦2-char-id⟧))
+        ⟦2-char-id⟧ - this.lastAnyAt < 40 && ⟦2-char-id⟧.priority < this.playingPriority || ⟦2-char-id⟧ - (null !== (⟦2-char-id⟧ = this.lastAt.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? dB : -1 / 0) < ⟦2-char-id⟧.minGapMs || ⟦2-char-id⟧ < this.playingUntil && ⟦2-char-id⟧.priority < this.playingPriority || (this.lastAt.set(⟦2-char-id⟧, ⟦2-char-id⟧), this.lastAnyAt = ⟦2-char-id⟧, this.playingUntil = ⟦2-char-id⟧ + ⟦2-char-id⟧.reduce(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ + ⟦2-char-id⟧), 0), this.playingPriority = ⟦2-char-id⟧.priority, this.deps.vibrate(⟦2-char-id⟧))
       }
     }({
       vibrate: ⟦2-char-id⟧ => {
-        navigator.vibrate([...JJ])
+        navigator.vibrate([...BB])
       },
       now: () => performance.now(),
-      enabled: () => ⟦2-char-id⟧() && ⟦2-char-id⟧.d.get("isTouchScreen") && ⟦2-char-id⟧.d.get("clientEscMenuOptions").vibration && !(0, ⟦2-char-id⟧.g)()
+      enabled: () => ⟦2-char-id⟧() && ⟦2-char-id⟧.d.get("isTouchScreen") && ⟦2-char-id⟧.d.get("clientEscMenuOptions").vibration && !(0, ⟦2-char-id⟧.h)()
     })
   },
-  8493: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  8531: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧,
-      d: () => ⟦2-char-id⟧
+      b: () => ⟦2-char-id⟧,
+      e: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(13),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1572),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(29),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1247),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3134),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1357),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1294);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(21),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1573),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(33),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1235),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3160),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1353),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1275);
     const ⟦2-char-id⟧ = 2592⟦2-char-id⟧,
       ⟦2-char-id⟧ = "notificationOptInLastPromptedAt";
     async function ⟦2-char-id⟧() {
       var ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = await ⟦2-char-id⟧();
       if (null === ⟦2-char-id⟧) return;
-      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.j.getItem(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? JJ : 0;
+      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.j.getItem(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? BB : 0;
       if (Date.now() - ⟦2-char-id⟧ < ⟦2-char-id⟧) return;
-      if ((0, ⟦2-char-id⟧.e)()) return;
+      if ((0, ⟦2-char-id⟧.i)()) return;
       const ⟦2-char-id⟧ = await ⟦2-char-id⟧.NotificationProvider.showPromptPopup({
         icon: "bell",
         title: "mobilePushNotifications:optInTitle",
```

</details>

<details>
<summary>Hunk 252 · Change · +3 / -3</summary>

```diff
@@ -5995,15 +5995,15 @@
         }), (⟦2-char-id⟧ => {
           console.error("The app couldn't ask for push notifications:", ⟦2-char-id⟧)
         }))
-      }: null: await ⟦2-char-id⟧.d.canAsk() ? () => ⟦2-char-id⟧.d.requestPermission() : null
+      }: null: await ⟦2-char-id⟧.c.canAsk() ? () => ⟦2-char-id⟧.c.requestPermission() : null
     }
   },
-  8517: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  8547: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       b: () => ⟦2-char-id⟧,
       d: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(13);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(21);
     const ⟦2-char-id⟧ = 24,
       ⟦2-char-id⟧ = "farNametags",
       ⟦2-char-id⟧ = 1⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 253 · Change · +3 / -3</summary>

```diff
@@ -6019,13 +6019,13 @@
         const ⟦2-char-id⟧ = new URLSearchParams(window.location.search).get(⟦2-char-id⟧),
           ⟦2-char-id⟧ = null === ⟦2-char-id⟧ || "" === ⟦2-char-id⟧ ? NaN : Number(⟦2-char-id⟧);
         return Number.isFinite(⟦2-char-id⟧) && ⟦2-char-id⟧ >= 0 ? Math.min(⟦2-char-id⟧, ⟦2-char-id⟧) : null
-      }()) && void 0 !== ⟦2-char-id⟧ ? JJ : ⟦2-char-id⟧() ? 0 : ⟦2-char-id⟧
+      }()) && void 0 !== ⟦2-char-id⟧ ? BB : ⟦2-char-id⟧() ? 0 : ⟦2-char-id⟧
     }
   },
-  8580: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  8594: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       b: () => ⟦2-char-id⟧,
-      e: () => ⟦2-char-id⟧
+      c: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = [{
       threshold: 10n ** 180n,
```

</details>

<details>
<summary>Hunk 254 · Change · +6 / -6</summary>

```diff
@@ -6216,27 +6216,27 @@
         if (Math.abs(⟦2-char-id⟧) < 100) {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧ < 0 ? "-" : "",
             ⟦2-char-id⟧ = Math.abs(⟦2-char-id⟧);
-          return ⟦2-char-id⟧ >= 10 ? `${cJ}${ZJ.toFixed(1).replace(/\.0$/,"")}` : `${cJ}${ZJ.toFixed(2).replace(/\.?0+$/,"")}`
+          return ⟦2-char-id⟧ >= 10 ? `${TB}${dB.toFixed(1).replace(/\.0$/,"")}` : `${TB}${dB.toFixed(2).replace(/\.?0+$/,"")}`
         }
         ⟦2-char-id⟧ = BigInt(Math.floor(⟦2-char-id⟧))
       } else ⟦2-char-id⟧ = ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧ < 0n ? -cJ : ⟦2-char-id⟧,
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧ < 0n ? -TB : ⟦2-char-id⟧,
         ⟦2-char-id⟧ = ⟦2-char-id⟧ < 0n ? "-" : "",
         ⟦2-char-id⟧ = ⟦2-char-id⟧.toString();
-      if (⟦2-char-id⟧.length <= ⟦2-char-id⟧) return `${eJ}${XJ}`;
+      if (⟦2-char-id⟧.length <= ⟦2-char-id⟧) return `${pB}${lB}`;
       const ⟦2-char-id⟧ = 3 * Math.floor((⟦2-char-id⟧.length - 1) / 3);
-      if (⟦2-char-id⟧ < 3) return `${eJ}${XJ}`;
+      if (⟦2-char-id⟧ < 3) return `${pB}${lB}`;
       if (⟦2-char-id⟧ > 3 * ⟦2-char-id⟧.length) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧[0],
           ⟦2-char-id⟧ = ⟦2-char-id⟧.slice(1, 3).replace(/0+$/, "");
-        return `${eJ}${cJ?`${⟦2-char-id⟧}.${⟦2-char-id⟧}`:JJ}e${XJ.length-1}`
+        return `${pB}${TB?`${⟦2-char-id⟧}.${⟦2-char-id⟧}`:BB}e${lB.length-1}`
       }
       const {
         threshold: ⟦2-char-id⟧,
         suffix: ⟦2-char-id⟧
       } = ⟦2-char-id⟧[⟦2-char-id⟧.length - ⟦2-char-id⟧ / 3], ⟦2-char-id⟧ = ⟦2-char-id⟧ / ⟦2-char-id⟧, ⟦2-char-id⟧ = Number(1000n * (⟦2-char-id⟧ % ⟦2-char-id⟧) / ⟦2-char-id⟧), ⟦2-char-id⟧ = Number(⟦2-char-id⟧) + ⟦2-char-id⟧ / 1⟦2-char-id⟧;
       let ⟦2-char-id⟧;
-      return ⟦2-char-id⟧ = ⟦2-char-id⟧ >= 100 ? Math.floor(⟦2-char-id⟧).toString() : ⟦2-char-id⟧ >= 10 ? ⟦2-char-id⟧.toFixed(1).replace(/\.0$/, "") : ⟦2-char-id⟧.toFixed(2).replace(/\.?0+$/, ""), `${eJ}${sJ}${jJ}`
+      return ⟦2-char-id⟧ = ⟦2-char-id⟧ >= 100 ? Math.floor(⟦2-char-id⟧).toString() : ⟦2-char-id⟧ >= 10 ? ⟦2-char-id⟧.toFixed(1).replace(/\.0$/, "") : ⟦2-char-id⟧.toFixed(2).replace(/\.?0+$/, ""), `${pB}${OB}${gB}`
     }
     const ⟦2-char-id⟧ = ⟦2-char-id⟧.map((⟦2-char-id⟧ => {
       let {
```

</details>

<details>
<summary>Hunk 255 · Change · +10 / -10</summary>

```diff
@@ -6264,22 +6264,22 @@
         of ⟦2-char-id⟧)
         if (⟦2-char-id⟧ >= ⟦2-char-id⟧) {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧ / ⟦2-char-id⟧;
-          if (⟦2-char-id⟧ >= 1⟦2-char-id⟧) return `${ZJ}${cJ.toExponential(2).replace("e+","e")}`;
+          if (⟦2-char-id⟧ >= 1⟦2-char-id⟧) return `${dB}${TB.toExponential(2).replace("e+","e")}`;
           let ⟦2-char-id⟧;
-          return ⟦2-char-id⟧ = ⟦2-char-id⟧ >= 100 ? Math.floor(⟦2-char-id⟧).toString() : ⟦2-char-id⟧ >= 10 ? ⟦2-char-id⟧.toFixed(1).replace(/\.0$/, "") : ⟦2-char-id⟧.toFixed(2).replace(/\.?0+$/, ""), `${ZJ}${eJ}${UJ}`
-        } return `${ZJ}${cJ}`
+          return ⟦2-char-id⟧ = ⟦2-char-id⟧ >= 100 ? Math.floor(⟦2-char-id⟧).toString() : ⟦2-char-id⟧ >= 10 ? ⟦2-char-id⟧.toFixed(1).replace(/\.0$/, "") : ⟦2-char-id⟧.toFixed(2).replace(/\.?0+$/, ""), `${dB}${pB}${yB}`
+        } return `${dB}${TB}`
     }
   },
-  8565: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  8584: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+      b: () => ⟦2-char-id⟧,
+      c: () => ⟦2-char-id⟧,
       d: () => ⟦2-char-id⟧,
-      e: () => ⟦2-char-id⟧,
-      h: () => ⟦2-char-id⟧,
-      j: () => ⟦2-char-id⟧,
-      n: () => ⟦2-char-id⟧,
-      p: () => ⟦2-char-id⟧
+      g: () => ⟦2-char-id⟧,
+      k: () => ⟦2-char-id⟧,
+      o: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(235);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(279);
     const ⟦2-char-id⟧ = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
       ⟦2-char-id⟧ = {
         Damage: {
```

</details>

<details>
<summary>Hunk 256 · Change · +1 / -1</summary>

```diff
@@ -6358,7 +6358,7 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
-      return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? cJ : {
+      return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? TB : {
         translationKey: ""
       }
     }
```

</details>

<details>
<summary>Hunk 257 · Change · +3 / -3</summary>

```diff
@@ -6465,14 +6465,14 @@
       const {
         min: ⟦2-char-id⟧,
         max: ⟦2-char-id⟧
-      } = ⟦2-char-id⟧[⟦2-char-id⟧][⟦2-char-id⟧], ⟦2-char-id⟧ = ⟦2-char-id⟧.c.sampleUniformIntDistribution(⟦2-char-id⟧, ⟦2-char-id⟧, "includeMax");
+      } = ⟦2-char-id⟧[⟦2-char-id⟧][⟦2-char-id⟧], ⟦2-char-id⟧ = ⟦2-char-id⟧.e.sampleUniformIntDistribution(⟦2-char-id⟧, ⟦2-char-id⟧, "includeMax");
       return {
-        ...hJ(⟦2-char-id⟧),
+        ...kB(⟦2-char-id⟧),
         level: ⟦2-char-id⟧
       }
     }
   },
-  8052: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  8075: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       return !⟦2-char-id⟧.hidden && (⟦2-char-id⟧ || !⟦2-char-id⟧.isRewardedAd)
     }
```

</details>

<details>
<summary>Hunk 258 · Change · +3 / -3</summary>

```diff
@@ -6493,14 +6493,14 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.excludedPlayers) && void 0 !== ⟦2-char-id⟧ ? FJ : [⟦2-char-id⟧];
+      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.excludedPlayers) && void 0 !== ⟦2-char-id⟧ ? VB : [⟦2-char-id⟧];
       return ⟦2-char-id⟧.filter((⟦2-char-id⟧ => !⟦2-char-id⟧.includes(⟦2-char-id⟧)))
     }
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       e: () => ⟦2-char-id⟧,
-      g: () => ⟦2-char-id⟧,
+      i: () => ⟦2-char-id⟧,
       k: () => ⟦2-char-id⟧,
-      n: () => ⟦2-char-id⟧
+      m: () => ⟦2-char-id⟧
     })
   }
 };
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/92.js</code> · modified · +22 / -22</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +15 / -15</summary>

```diff
@@ -1,25 +1,25 @@
 export const ⟦2-char-id⟧ = 92;
 export const ids = [92];
 export const modules = {
-  4307: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  4293: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       default: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1421),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(47),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1086),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1022),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1009),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1858),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1406),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1232),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1004),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(13),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1329),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(942),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2222),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1422),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1078),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1011),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(993),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1821),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1407),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1225),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(990),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(21),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1324),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(946),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2182),
       ⟦2-char-id⟧ = ⟦2-char-id⟧(1441),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
     const ⟦2-char-id⟧ = [{
         id: "myGames",
         icon: "joystick",
```

</details>

<details>
<summary>Hunk 2 · Change · +3 / -3</summary>

```diff
@@ -42,12 +42,12 @@
     function ⟦2-char-id⟧() {
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useNavigatePreserveSearch)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.q)(), {
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useNavigatePreserveSearch)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.o)(), {
         isUserContextUpdating: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.d)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.h)(), ⟦2-char-id⟧ = (⟦2-char-id⟧ = ⟦2-char-id⟧.pathname).startsWith(⟦2-char-id⟧.l) ? null : ⟦2-char-id⟧.startsWith(⟦2-char-id⟧.docs) ? "docs" : ⟦2-char-id⟧.startsWith(⟦2-char-id⟧.leaderboard) ? "leaderboard" : "myGames";
+      } = (0, ⟦2-char-id⟧.b)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.i)(), ⟦2-char-id⟧ = (⟦2-char-id⟧ = ⟦2-char-id⟧.pathname).startsWith(⟦2-char-id⟧.h) ? null : ⟦2-char-id⟧.startsWith(⟦2-char-id⟧.docs) ? "docs" : ⟦2-char-id⟧.startsWith(⟦2-char-id⟧.leaderboard) ? "leaderboard" : "myGames";
       var ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
-        if (!⟦2-char-id⟧.startsWith(⟦2-char-id⟧.l)) return {
+        if (!⟦2-char-id⟧.startsWith(⟦2-char-id⟧.h)) return {
           title: "studio:leaveStudio",
           icon: "left-from-bracket",
           to: "/"
```

</details>

<details>
<summary>Hunk 3 · Change · +1 / -1</summary>

```diff
@@ -73,7 +73,7 @@
           className: "StudioLayoutRight",
           children: [(0, ⟦2-char-id⟧.jsxs)("div", {
             className: "StudioTop",
-            children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+            children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
               show: !0,
               socialBarIsDocked: ⟦2-char-id⟧
             }), (0, ⟦2-char-id⟧.jsxs)("nav", {
```

</details>

<details>
<summary>Hunk 4 · Change · +2 / -2</summary>

```diff
@@ -86,13 +86,13 @@
                 children: ⟦2-char-id⟧(⟦2-char-id⟧.title)
               }), (0, ⟦2-char-id⟧.jsx)("div", {
                 className: "StudioNavTabs",
-                children: ⟦2-char-id⟧.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.O, {
+                children: ⟦2-char-id⟧.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.T, {
                   active: ⟦2-char-id⟧ === ⟦2-char-id⟧.id,
                   href: ⟦2-char-id⟧[⟦2-char-id⟧.id],
                   onClick: () => {
                     ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧.id])
                   },
-                  children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+                  children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                     name: ⟦2-char-id⟧.icon
                   }), !⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧.title)]
                 }, ⟦2-char-id⟧.id)))
```

</details>

<details>
<summary>Hunk 5 · Change · +1 / -1</summary>

```diff
@@ -102,7 +102,7 @@
             className: "StudioBottom",
             children: [⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
               className: "StudioCentredMessage",
-              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {})
+              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {})
             }), !⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
               className: "StudioContent",
               children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.g, {})
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/93.js</code> · modified · +70 / -70</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +39 / -39</summary>

```diff
@@ -1,83 +1,83 @@
 export const ⟦2-char-id⟧ = 93;
 export const ids = [93];
 export const modules = {
-  4323: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  4312: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       e: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(926),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(933),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(942),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1232),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2988),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(112),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(946),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1225),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2998),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(138),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3037),
       ⟦2-char-id⟧ = ⟦2-char-id⟧(3026),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3017),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let {
         game: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)() ? "large" : "small",
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)() ? "large" : "small",
         ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧),
-        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧),
+        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧),
         ⟦2-char-id⟧ = void 0 !== ⟦2-char-id⟧.blurhash;
       return (0, ⟦2-char-id⟧.jsxs)("div", {
         className: "SchematicImageContainer",
-        children: [⟦2-char-id⟧.isLoading && !⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+        children: [⟦2-char-id⟧.isLoading && !⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
           loaderType: "Secondary"
         }), !⟦2-char-id⟧.failed && (null !== ⟦2-char-id⟧.src || ⟦2-char-id⟧) && (0, ⟦2-char-id⟧.jsx)("div", {
-          className: ⟦2-char-id⟧()("SchematicImage", ⟦2-char-id⟧.j, {
+          className: ⟦2-char-id⟧()("SchematicImage", ⟦2-char-id⟧.e, {
             SchematicImageFadeIn: ⟦2-char-id⟧.fadeIn && !⟦2-char-id⟧
           }),
-          style: (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧),
-          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+          style: (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧),
+          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
             image: ⟦2-char-id⟧
           })
         }), ⟦2-char-id⟧.failed && (0, ⟦2-char-id⟧.jsx)("div", {
           className: "SchematicImageError",
-          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
             name: "face-dizzy"
           })
         })]
       })
     }
   },
-  4310: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  4295: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       default: () => ⟦2-char-id⟧
     });
-    ⟦2-char-id⟧(4317);
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(47),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(926),
+    ⟦2-char-id⟧(4303);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(933),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(227),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(905),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1122),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1086),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1022),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1389),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4323),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1329),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4325),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1232),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1406),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4051),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(942),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(880),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2202),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4332),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(270),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(912),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1105),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1078),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1011),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1393),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4312),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1324),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4316),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1225),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1407),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4033),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(946),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(898),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2170),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4320),
       ⟦2-char-id⟧ = ⟦2-char-id⟧(1441),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
 
     function ⟦2-char-id⟧() {
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useNavigatePreserveSearch)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.o)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useMemo)((() => [...vJ.c].sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useNavigatePreserveSearch)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.k)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useMemo)((() => [...mB.b].sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
         var ⟦2-char-id⟧, ⟦2-char-id⟧;
-        const ⟦2-char-id⟧ = (null !== (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)(⟦2-char-id⟧, ⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? UJ : 0) - (null !== (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)(⟦2-char-id⟧, ⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? eJ : 0);
-        return 0 !== ⟦2-char-id⟧ ? XJ : (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧, ⟦2-char-id⟧).localeCompare((0, ⟦2-char-id⟧.g)(⟦2-char-id⟧, ⟦2-char-id⟧))
+        const ⟦2-char-id⟧ = (null !== (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧, ⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? yB : 0) - (null !== (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧, ⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? pB : 0);
+        return 0 !== ⟦2-char-id⟧ ? lB : (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧).localeCompare((0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧))
       }))), [⟦2-char-id⟧, ⟦2-char-id⟧]);
       return (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
         children: [(0, ⟦2-char-id⟧.jsx)("div", {
```

</details>

<details>
<summary>Hunk 2 · Change · +1 / -1</summary>

```diff
@@ -86,7 +86,7 @@
             className: "StudioPageTitle",
             children: ⟦2-char-id⟧("studio:firstPartyGames")
           })
-        }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+        }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
           className: "StudioTable AnimFadeIn",
           columns: [{
             key: "game",
```

</details>

<details>
<summary>Hunk 3 · Change · +5 / -5</summary>

```diff
@@ -101,17 +101,17 @@
             var ⟦2-char-id⟧;
             return (0, ⟦2-char-id⟧.jsxs)("tr", {
               onClick: () => {
-                ⟦2-char-id⟧((0, ⟦2-char-id⟧.h)((0, ⟦2-char-id⟧.g)(⟦2-char-id⟧, !0)))
+                ⟦2-char-id⟧((0, ⟦2-char-id⟧.g)((0, ⟦2-char-id⟧.d)(⟦2-char-id⟧, !0)))
               },
               children: [(0, ⟦2-char-id⟧.jsx)("td", {
-                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.f, {
-                  thumbnail: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
+                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.g, {
+                  thumbnail: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                     game: ⟦2-char-id⟧
                   }),
-                  name: (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧, ⟦2-char-id⟧)
+                  name: (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧)
                 })
               }), (0, ⟦2-char-id⟧.jsx)("td", {
-                children: (0, ⟦2-char-id⟧.S)(null !== (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)(⟦2-char-id⟧, ⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? UJ : 0)
+                children: (0, ⟦2-char-id⟧.S)(null !== (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧, ⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? yB : 0)
               })]
             })
           }
```

</details>

<details>
<summary>Hunk 4 · Change · +3 / -3</summary>

```diff
@@ -122,13 +122,13 @@
     function ⟦2-char-id⟧() {
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useNavigatePreserveSearch)(), {
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useNavigatePreserveSearch)(), {
         userContext: ⟦2-char-id⟧,
         isUserContextUpdating: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.d)(), {
+      } = (0, ⟦2-char-id⟧.b)(), {
         isCreating: ⟦2-char-id⟧,
         create: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.i)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1);
+      } = (0, ⟦2-char-id⟧.d)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1);
       (0, ⟦2-char-id⟧.useEffect)((() => {
         ⟦2-char-id⟧ || (⟦2-char-id⟧(!1), ⟦2-char-id⟧.c.getPublishedGamePreviews(⟦2-char-id⟧, {
           searchQuery: null,
```

</details>

<details>
<summary>Hunk 5 · Change · +2 / -2</summary>

```diff
@@ -142,8 +142,8 @@
           upAndComing: !1
         }).then((⟦2-char-id⟧ => {
           ⟦2-char-id⟧({
-            ...JJ,
-            results: (0, ⟦2-char-id⟧.O)(⟦2-char-id⟧.results)
+            ...BB,
+            results: (0, ⟦2-char-id⟧.X)(⟦2-char-id⟧.results)
           })
         })).catch((⟦2-char-id⟧ => {
           console.error("Failed to get owned published games", ⟦2-char-id⟧), ⟦2-char-id⟧(!0)
```

</details>

<details>
<summary>Hunk 6 · Change · +1 / -1</summary>

```diff
@@ -153,7 +153,7 @@
           console.error("Failed to get owned unpublished games", ⟦2-char-id⟧), ⟦2-char-id⟧(!0)
         })))
       }), [⟦2-char-id⟧, ⟦2-char-id⟧]);
-      const ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && null !== ⟦2-char-id⟧ ? [...yJ.results, ...IJ] : [],
+      const ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && null !== ⟦2-char-id⟧ ? [...MB.results, ...wB] : [],
         ⟦2-char-id⟧ = !⟦2-char-id⟧ && (null === ⟦2-char-id⟧ || null === ⟦2-char-id⟧),
         ⟦2-char-id⟧ = !⟦2-char-id⟧ && !⟦2-char-id⟧ && 0 === ⟦2-char-id⟧.length,
         ⟦2-char-id⟧ = !⟦2-char-id⟧ && ⟦2-char-id⟧.playerHasRank("developer");
```

</details>

<details>
<summary>Hunk 7 · Change · +5 / -5</summary>

```diff
@@ -164,23 +164,23 @@
           children: [(0, ⟦2-char-id⟧.jsx)("h1", {
             className: "StudioPageTitle",
             children: ⟦2-char-id⟧("studio:myGames")
-          }), (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.m, {
+          }), (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.k, {
             onClick: ⟦2-char-id⟧,
             loading: ⟦2-char-id⟧,
-            children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+            children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
               name: "plus"
-            }), " ", JJ("homePage:createCustomGame")]
+            }), " ", BB("homePage:createCustomGame")]
           })]
         }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
           className: "StudioPageLoader AnimFadeIn",
-          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {})
+          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {})
         }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
           className: "StudioPageMessage AnimFadeIn",
           children: ⟦2-char-id⟧("studio:failedToLoadGames")
         }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
           className: "StudioPageMessage AnimFadeIn",
           children: ⟦2-char-id⟧("studio:noGamesYet")
-        }), !⟦2-char-id⟧ && !⟦2-char-id⟧ && !⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+        }), !⟦2-char-id⟧ && !⟦2-char-id⟧ && !⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
           className: "StudioTable AnimFadeIn",
           columns: [{
             key: "game",
```

</details>

<details>
<summary>Hunk 8 · Change · +2 / -2</summary>

```diff
@@ -200,10 +200,10 @@
           renderRow: ⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsxs)("tr", {
             onClick: () => {
               var ⟦2-char-id⟧;
-              ⟦2-char-id⟧ = ⟦2-char-id⟧.schematicId, ⟦2-char-id⟧((0, ⟦2-char-id⟧.h)((0, ⟦2-char-id⟧.e)(⟦2-char-id⟧)))
+              ⟦2-char-id⟧ = ⟦2-char-id⟧.schematicId, ⟦2-char-id⟧((0, ⟦2-char-id⟧.g)((0, ⟦2-char-id⟧.c)(⟦2-char-id⟧)))
             },
             children: [(0, ⟦2-char-id⟧.jsx)("td", {
-              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.f, {
+              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.g, {
                 thumbnail: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                   game: ⟦2-char-id⟧
                 }),
```

</details>

<details>
<summary>Hunk 9 · Change · +4 / -4</summary>

```diff
@@ -226,13 +226,13 @@
       })
     }
   },
-  4332: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  4320: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      b: () => ⟦2-char-id⟧,
-      f: () => ⟦2-char-id⟧
+      e: () => ⟦2-char-id⟧,
+      g: () => ⟦2-char-id⟧
     });
     var ⟦2-char-id⟧ = ⟦2-char-id⟧(1441),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let {
```

</details>

<details>
<summary>Hunk 10 · Change · +6 / -6</summary>

```diff
@@ -257,19 +257,19 @@
       } = ⟦2-char-id⟧;
       return (0, ⟦2-char-id⟧.jsx)("img", {
         className: "StudioTableThumbnailImage",
-        src: (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧),
+        src: (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧),
         alt: ""
       })
     }
   },
-  4325: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  4316: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧
+      c: () => ⟦2-char-id⟧
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
<summary>Hunk 11 · Change · +2 / -2</summary>

```diff
@@ -290,12 +290,12 @@
         }), (0, ⟦2-char-id⟧.jsx)("tbody", {
           children: ⟦2-char-id⟧.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.Fragment, {
             children: ⟦2-char-id⟧(⟦2-char-id⟧)
-          }, UJ(⟦2-char-id⟧))))
+          }, yB(⟦2-char-id⟧))))
         })]
       })
     }
   },
-  4317: () => {}
+  4303: () => {}
 };
 Object.freeze(modules);
 for (const ⟦2-char-id⟧ in modules) Object.freeze(modules[⟦2-char-id⟧]);
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/94.js</code> · modified · +95 / -95</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +39 / -39</summary>

```diff
@@ -1,78 +1,78 @@
 export const ⟦2-char-id⟧ = 94;
 export const ids = [94];
 export const modules = {
-  4323: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  4312: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       e: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(926),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(933),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(942),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1232),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2988),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(112),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(946),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1225),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2998),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(138),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3037),
       ⟦2-char-id⟧ = ⟦2-char-id⟧(3026),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3017),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let {
         game: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)() ? "large" : "small",
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)() ? "large" : "small",
         ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧),
-        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧),
+        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧),
         ⟦2-char-id⟧ = void 0 !== ⟦2-char-id⟧.blurhash;
       return (0, ⟦2-char-id⟧.jsxs)("div", {
         className: "SchematicImageContainer",
-        children: [⟦2-char-id⟧.isLoading && !⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+        children: [⟦2-char-id⟧.isLoading && !⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
           loaderType: "Secondary"
         }), !⟦2-char-id⟧.failed && (null !== ⟦2-char-id⟧.src || ⟦2-char-id⟧) && (0, ⟦2-char-id⟧.jsx)("div", {
-          className: ⟦2-char-id⟧()("SchematicImage", ⟦2-char-id⟧.j, {
+          className: ⟦2-char-id⟧()("SchematicImage", ⟦2-char-id⟧.e, {
             SchematicImageFadeIn: ⟦2-char-id⟧.fadeIn && !⟦2-char-id⟧
           }),
-          style: (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧),
-          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+          style: (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧),
+          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
             image: ⟦2-char-id⟧
           })
         }), ⟦2-char-id⟧.failed && (0, ⟦2-char-id⟧.jsx)("div", {
           className: "SchematicImageError",
-          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
             name: "face-dizzy"
           })
         })]
       })
     }
   },
-  5846: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  5858: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       default: () => ⟦2-char-id⟧
     });
-    ⟦2-char-id⟧(4317);
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(47),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(926),
+    ⟦2-char-id⟧(4303);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(933),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(227),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(905),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1122),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(880),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1086),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1389),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3036),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1022),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4323),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2246),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1329),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3989),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4325),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1232),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1406),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3982),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2202),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4332),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(5759),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(270),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(912),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1105),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(898),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1078),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1393),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3046),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1011),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4312),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2208),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1324),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3980),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4316),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1225),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1407),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3971),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2170),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4320),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(5778),
       ⟦2-char-id⟧ = ⟦2-char-id⟧(1441),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
     const ⟦2-char-id⟧ = [{
         scope: "customGames",
         title: "studio:leaderboardCustomGames"
```

</details>

<details>
<summary>Hunk 2 · Change · +2 / -2</summary>

```diff
@@ -98,11 +98,11 @@
       let {
         position: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧.d[⟦2-char-id⟧];
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧.b[⟦2-char-id⟧];
       return (0, ⟦2-char-id⟧.jsxs)("td", {
         className: ⟦2-char-id⟧()("StudioLeaderboardPosition", {
           StudioLeaderboardTopPosition: void 0 !== ⟦2-char-id⟧,
-          [`StudioLeaderboardTopPosition${cJ}`]: void 0 !== ⟦2-char-id⟧
+          [`StudioLeaderboardTopPosition${TB}`]: void 0 !== ⟦2-char-id⟧
         }),
         children: [void 0 !== ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("img", {
           className: "StudioLeaderboardPositionItem",
```

</details>

<details>
<summary>Hunk 3 · Change · +3 / -3</summary>

```diff
@@ -120,12 +120,12 @@
         playsPerDay: ⟦2-char-id⟧,
         avgPlaytimeMinutes: ⟦2-char-id⟧,
         retention: ⟦2-char-id⟧
-      } = null === ⟦2-char-id⟧ ? HJ : (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧);
+      } = null === ⟦2-char-id⟧ ? cB : (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧);
       return (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
         children: [(0, ⟦2-char-id⟧.jsx)("td", {
+          children: null !== ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.b)(⟦2-char-id⟧) : "-"
+        }), (0, ⟦2-char-id⟧.jsx)("td", {
           children: null !== ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧) : "-"
-        }), (0, ⟦2-char-id⟧.jsx)("td", {
-          children: null !== ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧) : "-"
         }), (0, ⟦2-char-id⟧.jsx)("td", {
           children: null !== ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧) : "-"
         })]
```

</details>

<details>
<summary>Hunk 4 · Change · +5 / -5</summary>

```diff
@@ -146,21 +146,21 @@
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useNavigatePreserveSearch)(), {
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useNavigatePreserveSearch)(), {
         userContext: ⟦2-char-id⟧,
         isUserContextUpdating: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.d)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.o)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.n)(), ⟦2-char-id⟧ = (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧), ⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧.scope === ⟦2-char-id⟧)) ? OJ : ⟦2-char-id⟧);
+      } = (0, ⟦2-char-id⟧.b)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.k)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.j)(), ⟦2-char-id⟧ = (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧), ⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧.scope === ⟦2-char-id⟧)) ? XB : ⟦2-char-id⟧);
       var ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
-          return ⟦2-char-id⟧.K.includes(⟦2-char-id⟧) ? JJ : null
+          return ⟦2-char-id⟧.R.includes(⟦2-char-id⟧) ? BB : null
         }(⟦2-char-id⟧.get(⟦2-char-id⟧)),
-        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧.get(⟦2-char-id⟧.e)),
+        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧.get(⟦2-char-id⟧.b)),
         [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null),
         [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1);
 
       function ⟦2-char-id⟧(⟦2-char-id⟧) {
         ⟦2-char-id⟧((⟦2-char-id⟧ => {
-          (0, ⟦2-char-id⟧.l)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.scope === ⟦2-char-id⟧ ? null : ⟦2-char-id⟧.scope), (0, ⟦2-char-id⟧.l)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.category), (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.page)
+          (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.scope === ⟦2-char-id⟧ ? null : ⟦2-char-id⟧.scope), (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.category), (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧, ⟦2-char-id⟧.page)
         }))
       }
       const ⟦2-char-id⟧ = !⟦2-char-id⟧ && ⟦2-char-id⟧.playerHasRank("developer"),
```

</details>

<details>
<summary>Hunk 5 · Change · +1 / -1</summary>

```diff
@@ -181,7 +181,7 @@
           upAndComing: !1,
           dormantGames: ⟦2-char-id⟧,
           sortByEngagementScore: !0,
-          firstPartyGameNames: ⟦2-char-id⟧ ? ⟦2-char-id⟧.c : void 0,
+          firstPartyGameNames: ⟦2-char-id⟧ ? ⟦2-char-id⟧.b : void 0,
           includeOwners: !0
         }).then((⟦2-char-id⟧ => {
           ⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 6 · Change · +2 / -2</summary>

```diff
@@ -191,9 +191,9 @@
           ⟦2-char-id⟧ = !0
         }
       }), [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧]);
-      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.results) && void 0 !== ⟦2-char-id⟧ ? JJ : null,
+      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.results) && void 0 !== ⟦2-char-id⟧ ? BB : null,
         ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-          const [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)({}), ⟦2-char-id⟧ = ⟦2-char-id⟧ ? (null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? JJ : []).flatMap((⟦2-char-id⟧ => "firstPartyGame" === ⟦2-char-id⟧.type ? [(0, ⟦2-char-id⟧.g)(⟦2-char-id⟧.gameNameWithVariation, !0)] : [])).join(",") : "", ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useMemo)((() => "" === ⟦2-char-id⟧ ? [] : ⟦2-char-id⟧.split(",")), [⟦2-char-id⟧]);
+          const [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)({}), ⟦2-char-id⟧ = ⟦2-char-id⟧ ? (null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? BB : []).flatMap((⟦2-char-id⟧ => "firstPartyGame" === ⟦2-char-id⟧.type ? [(0, ⟦2-char-id⟧.d)(⟦2-char-id⟧.gameNameWithVariation, !0)] : [])).join(",") : "", ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useMemo)((() => "" === ⟦2-char-id⟧ ? [] : ⟦2-char-id⟧.split(",")), [⟦2-char-id⟧]);
           return (0, ⟦2-char-id⟧.useEffect)((() => {
             if (0 === ⟦2-char-id⟧.length) return void ⟦2-char-id⟧({});
             let ⟦2-char-id⟧ = !1;
```

</details>

<details>
<summary>Hunk 7 · Change · +9 / -9</summary>

```diff
@@ -223,31 +223,31 @@
                 category: ⟦2-char-id⟧.gameCategory,
                 ccu: ⟦2-char-id⟧.ccu,
                 favourites: ⟦2-char-id⟧.favourites,
-                discoverability: (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧) ? cJ : null,
-                url: (0, ⟦2-char-id⟧.h)((0, ⟦2-char-id⟧.e)(⟦2-char-id⟧.schematicId))
+                discoverability: (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧) ? TB : null,
+                url: (0, ⟦2-char-id⟧.g)((0, ⟦2-char-id⟧.c)(⟦2-char-id⟧.schematicId))
               }
             }
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.gameNameWithVariation,
-              ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧, !0);
+              ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧, !0);
             return {
               key: ⟦2-char-id⟧,
               position: ⟦2-char-id⟧,
-              thumbnail: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
+              thumbnail: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                 game: ⟦2-char-id⟧
               }),
-              name: (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧, ⟦2-char-id⟧),
+              name: (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧),
               owner: null,
               category: (0, ⟦2-char-id⟧.b)(⟦2-char-id⟧),
-              ccu: (0, ⟦2-char-id⟧.b)(⟦2-char-id⟧, ⟦2-char-id⟧),
+              ccu: (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧, ⟦2-char-id⟧),
               favourites: null,
-              discoverability: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? XJ : null,
-              url: (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧)
+              discoverability: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? lB : null,
+              url: (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧)
             }
           }))
         }(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, (⟦2-char-id⟧ - 1) * ⟦2-char-id⟧, ⟦2-char-id⟧) : [],
         ⟦2-char-id⟧ = !⟦2-char-id⟧ && null === ⟦2-char-id⟧,
         ⟦2-char-id⟧ = !⟦2-char-id⟧ && !⟦2-char-id⟧ && 0 === ⟦2-char-id⟧.length,
-        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.totalPages) && void 0 !== ⟦2-char-id⟧ ? cJ : 1;
+        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.totalPages) && void 0 !== ⟦2-char-id⟧ ? TB : 1;
       return (0, ⟦2-char-id⟧.jsxs)("div", {
         className: "StudioPage StudioLeaderboard",
         children: [(0, ⟦2-char-id⟧.jsx)("div", {
```

</details>

<details>
<summary>Hunk 8 · Change · +1 / -1</summary>

```diff
@@ -269,7 +269,7 @@
           })]
         }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
           className: "StudioLeaderboardScopes",
-          children: ⟦2-char-id⟧.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.O, {
+          children: ⟦2-char-id⟧.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.T, {
             active: ⟦2-char-id⟧ === ⟦2-char-id⟧.scope,
             onClick: () => {
               ⟦2-char-id⟧({
```

</details>

<details>
<summary>Hunk 9 · Change · +1 / -1</summary>

```diff
@@ -282,7 +282,7 @@
           }, ⟦2-char-id⟧.scope)))
         }), (0, ⟦2-char-id⟧.jsxs)("div", {
           className: "StudioLeaderboardCategories",
-          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.O, {
+          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.T, {
             active: null === ⟦2-char-id⟧,
             onClick: () => {
               ⟦2-char-id⟧({
```

</details>

<details>
<summary>Hunk 10 · Change · +1 / -1</summary>

```diff
@@ -292,7 +292,7 @@
               })
             },
             children: ⟦2-char-id⟧("studio:leaderboardAllCategories")
-          }), ⟦2-char-id⟧.K.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.O, {
+          }), ⟦2-char-id⟧.R.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.T, {
             active: ⟦2-char-id⟧ === ⟦2-char-id⟧,
             onClick: () => {
               ⟦2-char-id⟧({
```

</details>

<details>
<summary>Hunk 11 · Change · +2 / -2</summary>

```diff
@@ -301,11 +301,11 @@
                 page: 1
               })
             },
-            children: (0, ⟦2-char-id⟧.T)(⟦2-char-id⟧)
+            children: (0, ⟦2-char-id⟧.db)(⟦2-char-id⟧)
           }, ⟦2-char-id⟧)))]
         }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
           className: "StudioPageLoader AnimFadeIn",
-          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {})
+          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {})
         }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
           className: "StudioPageMessage AnimFadeIn",
           children: ⟦2-char-id⟧("studio:failedToLoadLeaderboard")
```

</details>

<details>
<summary>Hunk 12 · Change · +1 / -1</summary>

```diff
@@ -314,7 +314,7 @@
           children: ⟦2-char-id⟧("studio:leaderboardEmpty")
         }), !⟦2-char-id⟧ && !⟦2-char-id⟧ && !⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
           className: "StudioLeaderboardTableScroll AnimFadeIn",
-          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
             className: "StudioTable",
             columns: [{
               key: "position",
```

</details>

<details>
<summary>Hunk 13 · Change · +1 / -1</summary>

```diff
@@ -328,7 +328,7 @@
             }, ...null === ⟦2-char-id⟧ ? [{
               key: "category",
               header: ⟦2-char-id⟧("general:category")
-            }] : [], ...BJ ? [{
+            }] : [], ...AB ? [{
               key: "engagementScore",
               header: "engagementScore"
             }] : [], {
```

</details>

<details>
<summary>Hunk 14 · Change · +1 / -1</summary>

```diff
@@ -340,7 +340,7 @@
             }, {
               key: "retention",
               header: ⟦2-char-id⟧("studio:leaderboardSessionsPerPlayer")
-            }, ...oJ ? [] : [{
+            }, ...nB ? [] : [{
               key: "ccu",
               header: ⟦2-char-id⟧("studio:metricCcu")
             }], {
```

</details>

<details>
<summary>Hunk 15 · Change · +3 / -3</summary>

```diff
@@ -356,19 +356,19 @@
               children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
                 position: ⟦2-char-id⟧.position
               }), (0, ⟦2-char-id⟧.jsx)("td", {
-                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.f, {
+                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.g, {
                   thumbnail: ⟦2-char-id⟧.thumbnail,
                   name: ⟦2-char-id⟧.name
                 })
               }), (0, ⟦2-char-id⟧.jsxs)("td", {
                 className: "StudioLeaderboardOwner",
-                children: [null === ⟦2-char-id⟧.owner && "-", null !== ⟦2-char-id⟧.owner && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.g, {
+                children: [null === ⟦2-char-id⟧.owner && "-", null !== ⟦2-char-id⟧.owner && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.i, {
                   playerSocialPreview: ⟦2-char-id⟧.owner,
                   showLocation: !1,
                   opensProfileCard: !1
                 })]
               }), null === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("td", {
-                children: (0, ⟦2-char-id⟧.T)(⟦2-char-id⟧.category)
+                children: (0, ⟦2-char-id⟧.db)(⟦2-char-id⟧.category)
               }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
                 discoverability: ⟦2-char-id⟧.discoverability
               }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
```

</details>

<details>
<summary>Hunk 16 · Change · +1 / -1</summary>

```diff
@@ -380,7 +380,7 @@
               })]
             })
           })
-        }), !⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+        }), !⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
           className: "AnimFadeIn",
           page: ⟦2-char-id⟧,
           totalPages: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 17 · Change · +4 / -4</summary>

```diff
@@ -395,13 +395,13 @@
       })
     }
   },
-  4332: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  4320: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      b: () => ⟦2-char-id⟧,
-      f: () => ⟦2-char-id⟧
+      e: () => ⟦2-char-id⟧,
+      g: () => ⟦2-char-id⟧
     });
     var ⟦2-char-id⟧ = ⟦2-char-id⟧(1441),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let {
```

</details>

<details>
<summary>Hunk 18 · Change · +13 / -13</summary>

```diff
@@ -426,29 +426,29 @@
       } = ⟦2-char-id⟧;
       return (0, ⟦2-char-id⟧.jsx)("img", {
         className: "StudioTableThumbnailImage",
-        src: (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧),
+        src: (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧),
         alt: ""
       })
     }
   },
-  5759: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  5778: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      d: () => ⟦2-char-id⟧
+      b: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = {
-      1: ⟦2-char-id⟧(5768),
-      2: ⟦2-char-id⟧(5776),
-      3: ⟦2-char-id⟧(5779)
-    }
-  },
-  4325: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+      1: ⟦2-char-id⟧(5786),
+      2: ⟦2-char-id⟧(5788),
+      3: ⟦2-char-id⟧(5791)
+    }
+  },
+  4316: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧
+      c: () => ⟦2-char-id⟧
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
<summary>Hunk 19 · Change · +5 / -5</summary>

```diff
@@ -469,19 +469,19 @@
         }), (0, ⟦2-char-id⟧.jsx)("tbody", {
           children: ⟦2-char-id⟧.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.Fragment, {
             children: ⟦2-char-id⟧(⟦2-char-id⟧)
-          }, UJ(⟦2-char-id⟧))))
+          }, yB(⟦2-char-id⟧))))
         })]
       })
     }
   },
-  4317: () => {},
-  5768: ⟦2-char-id⟧ => {
+  4303: () => {},
+  5786: ⟦2-char-id⟧ => {
     ⟦2-char-id⟧.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
   },
-  5776: ⟦2-char-id⟧ => {
+  5788: ⟦2-char-id⟧ => {
     ⟦2-char-id⟧.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
   },
-  5779: ⟦2-char-id⟧ => {
+  5791: ⟦2-char-id⟧ => {
     ⟦2-char-id⟧.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
   }
 };
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/95.js</code> · modified · +104 / -104</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +25 / -25</summary>

```diff
@@ -1,63 +1,63 @@
 export const ⟦2-char-id⟧ = 95;
 export const ids = [95];
 export const modules = {
-  4323: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  4312: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       e: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(926),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(933),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(942),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1232),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2988),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(112),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(946),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1225),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2998),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(138),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3037),
       ⟦2-char-id⟧ = ⟦2-char-id⟧(3026),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3017),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let {
         game: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)() ? "large" : "small",
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)() ? "large" : "small",
         ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧),
-        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧),
+        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧),
         ⟦2-char-id⟧ = void 0 !== ⟦2-char-id⟧.blurhash;
       return (0, ⟦2-char-id⟧.jsxs)("div", {
         className: "SchematicImageContainer",
-        children: [⟦2-char-id⟧.isLoading && !⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+        children: [⟦2-char-id⟧.isLoading && !⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
           loaderType: "Secondary"
         }), !⟦2-char-id⟧.failed && (null !== ⟦2-char-id⟧.src || ⟦2-char-id⟧) && (0, ⟦2-char-id⟧.jsx)("div", {
-          className: ⟦2-char-id⟧()("SchematicImage", ⟦2-char-id⟧.j, {
+          className: ⟦2-char-id⟧()("SchematicImage", ⟦2-char-id⟧.e, {
             SchematicImageFadeIn: ⟦2-char-id⟧.fadeIn && !⟦2-char-id⟧
           }),
-          style: (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧),
-          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+          style: (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧),
+          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
             image: ⟦2-char-id⟧
           })
         }), ⟦2-char-id⟧.failed && (0, ⟦2-char-id⟧.jsx)("div", {
           className: "SchematicImageError",
-          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
             name: "face-dizzy"
           })
         })]
       })
     }
   },
-  4439: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  4451: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       e: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(47),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(926),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(933),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4365),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1232),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1086),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2649),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2787),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(942),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4367),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1225),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1078),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2623),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2768),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(946),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let {
```

</details>

<details>
<summary>Hunk 2 · Change · +1 / -1</summary>

```diff
@@ -69,7 +69,7 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null);
+      } = (0, ⟦2-char-id⟧.z)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null);
       const {
         getRootProps: ⟦2-char-id⟧,
         getInputProps: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 3 · Change · +4 / -4</summary>

```diff
@@ -78,16 +78,16 @@
         onDrop: async function(⟦2-char-id⟧) {
           ⟦2-char-id⟧(!0);
           try {
-            const ⟦2-char-id⟧ = await (0, ⟦2-char-id⟧.l)(⟦2-char-id⟧);
-            if ("customGame" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧)) return void ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧.c));
+            const ⟦2-char-id⟧ = await (0, ⟦2-char-id⟧.o)(⟦2-char-id⟧);
+            if ("customGame" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧)) return void ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧.e));
             if (void 0 !== ⟦2-char-id⟧) {
               const ⟦2-char-id⟧ = JSON.stringify(⟦2-char-id⟧).length / 1048576;
-              if (⟦2-char-id⟧ > ⟦2-char-id⟧) return void ⟦2-char-id⟧(`File size is too large. Max size is ${nJ}MB. Current size is ${JJ}MB.`)
+              if (⟦2-char-id⟧ > ⟦2-char-id⟧) return void ⟦2-char-id⟧(`File size is too large. Max size is ${DB}MB. Current size is ${BB}MB.`)
             }
             ⟦2-char-id⟧(null), ⟦2-char-id⟧(null), ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧.current = ⟦2-char-id⟧,
               function(⟦2-char-id⟧, ⟦2-char-id⟧) {
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧.modelOverrides;
-                ⟦2-char-id⟧ && Promise.all([⟦2-char-id⟧.e(181), ⟦2-char-id⟧.e(180)]).then((() => ⟦2-char-id⟧(8610))).then((⟦2-char-id⟧ => {
+                ⟦2-char-id⟧ && Promise.all([⟦2-char-id⟧.e(181), ⟦2-char-id⟧.e(180)]).then((() => ⟦2-char-id⟧(8623))).then((⟦2-char-id⟧ => {
                   let {
                     packDisplayName: ⟦2-char-id⟧,
                     refusedPackModels: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 4 · Change · +1 / -1</summary>

```diff
@@ -114,7 +114,7 @@
         className: "CustomTexturePackContainer",
         children: [(0, ⟦2-char-id⟧.jsxs)("div", {
           className: "CustomTextureWarning",
-          children: [⟦2-char-id⟧("settingsMenu:customTextureWarning"), ".", (0, ⟦2-char-id⟧.jsx)("br", {}), fJ("settingsMenu:viewDocumentation"), ":", " ", (0, ⟦2-char-id⟧.jsx)("a", {
+          children: [⟦2-char-id⟧("settingsMenu:customTextureWarning"), ".", (0, ⟦2-char-id⟧.jsx)("br", {}), HB("settingsMenu:viewDocumentation"), ":", " ", (0, ⟦2-char-id⟧.jsx)("a", {
             href: "https://github.com/Bloxdy/texturePacks",
             target: "_blank",
             rel: "noreferrer",
```

</details>

<details>
<summary>Hunk 5 · Change · +4 / -4</summary>

```diff
@@ -127,23 +127,23 @@
           className: "CustomTextureError",
           children: ⟦2-char-id⟧
         }), (0, ⟦2-char-id⟧.jsxs)("div", {
-          ...KJ({
+          ...sB({
             className: ⟦2-char-id⟧()("CustomTextureFolderUpload", {
               ActiveDrag: ⟦2-char-id⟧,
               Disabled: ⟦2-char-id⟧
             })
           }),
           children: [(0, ⟦2-char-id⟧.jsx)("input", {
-            ...yJ({
+            ...MB({
               webkitdirectory: "true"
             })
           }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
             className: "CustomTextureFolderUploadLoading",
-            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {})
+            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {})
           }), !⟦2-char-id⟧ && !⟦2-char-id⟧ && ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
             children: [(0, ⟦2-char-id⟧.jsx)("div", {
               className: "CustomTextureFolderUploadIcon Active",
-              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                 name: "folder-image"
               })
             }), (0, ⟦2-char-id⟧.jsx)("div", {
```

</details>

<details>
<summary>Hunk 6 · Change · +1 / -1</summary>

```diff
@@ -153,7 +153,7 @@
           }), !⟦2-char-id⟧ && (⟦2-char-id⟧ || !⟦2-char-id⟧) && (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
             children: [(0, ⟦2-char-id⟧.jsx)("div", {
               className: "CustomTextureFolderUploadIcon",
-              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                 name: "up-from-bracket"
               })
             }), (0, ⟦2-char-id⟧.jsx)("div", {
```

</details>

<details>
<summary>Hunk 7 · Change · +14 / -14</summary>

```diff
@@ -165,24 +165,24 @@
       })
     }
   },
-  4401: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  4411: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       e: () => ⟦2-char-id⟧,
-      f: () => ⟦2-char-id⟧,
-      h: () => ⟦2-char-id⟧,
-      l: () => ⟦2-char-id⟧
+      g: () => ⟦2-char-id⟧,
+      k: () => ⟦2-char-id⟧,
+      n: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(47),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4407),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3826),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1259),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4426),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(926),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4415),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3821),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1249),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4438),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(933),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1247),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1599),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4433),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1235),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1596),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4447),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let {
```

</details>

<details>
<summary>Hunk 8 · Change · +1 / -1</summary>

```diff
@@ -207,7 +207,7 @@
           className: "CheckboxInputAndText",
           children: [(0, ⟦2-char-id⟧.jsx)("label", {
             className: "CheckboxClickableLabel",
-            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
               className: "SettingsCheckbox",
               checked: ⟦2-char-id⟧,
               disabled: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 9 · Change · +1 / -1</summary>

```diff
@@ -260,7 +260,7 @@
         style: ⟦2-char-id⟧,
         children: [(0, ⟦2-char-id⟧.jsxs)("div", {
           className: "SliderText",
-          children: [`${cJ}: ${hJ?hJ(vJ):vJ}`, ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
+          children: [`${TB}: ${kB?kB(mB):mB}`, ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
             className: "SettingsTextInputCircleInfo",
             hoverInfo: ⟦2-char-id⟧
           })]
```

</details>

<details>
<summary>Hunk 10 · Change · +5 / -5</summary>

```diff
@@ -311,28 +311,28 @@
         ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null);
       (0, ⟦2-char-id⟧.useLayoutEffect)((() => {
         var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.current) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.querySelector(".rangeslider")) && void 0 !== ⟦2-char-id⟧ ? JJ : null;
+        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.current) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.querySelector(".rangeslider")) && void 0 !== ⟦2-char-id⟧ ? BB : null;
         null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.setAttribute("data-pad-slider", ""), null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.setAttribute("data-pad-focusable", ""), null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.querySelector(".rangeslider__handle")) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.setAttribute("data-pad-slider-handle", ""), ⟦2-char-id⟧.current = ⟦2-char-id⟧
       }), []), (0, ⟦2-char-id⟧.useLayoutEffect)((() => {
         var ⟦2-char-id⟧, ⟦2-char-id⟧;
         ⟦2-char-id⟧ ? null === (⟦2-char-id⟧ = ⟦2-char-id⟧.current) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.setAttribute("aria-disabled", "true") : null === (⟦2-char-id⟧ = ⟦2-char-id⟧.current) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.removeAttribute("aria-disabled")
       }), [⟦2-char-id⟧]);
-      const ⟦2-char-id⟧ = (null !== (⟦2-char-id⟧ = String(⟦2-char-id⟧).split(".")[1]) && void 0 !== ⟦2-char-id⟧ ? cJ : "").length,
+      const ⟦2-char-id⟧ = (null !== (⟦2-char-id⟧ = String(⟦2-char-id⟧).split(".")[1]) && void 0 !== ⟦2-char-id⟧ ? TB : "").length,
         ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
           const ⟦2-char-id⟧ = Number((Math.round((⟦2-char-id⟧ - ⟦2-char-id⟧) / ⟦2-char-id⟧) * ⟦2-char-id⟧ + ⟦2-char-id⟧).toFixed(⟦2-char-id⟧));
           return Math.min(⟦2-char-id⟧, Math.max(⟦2-char-id⟧, ⟦2-char-id⟧))
         },
         ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(!1);
-      return (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧, {
+      return (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧, {
         adjust: ⟦2-char-id⟧ => {
           if (⟦2-char-id⟧) return;
-          const ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? mJ : Math.max(⟦2-char-id⟧, Math.round((⟦2-char-id⟧ - ⟦2-char-id⟧) / 20 / ⟦2-char-id⟧) * ⟦2-char-id⟧),
+          const ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? iB : Math.max(⟦2-char-id⟧, Math.round((⟦2-char-id⟧ - ⟦2-char-id⟧) / 20 / ⟦2-char-id⟧) * ⟦2-char-id⟧),
             ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧ + ⟦2-char-id⟧ * ⟦2-char-id⟧ * (⟦2-char-id⟧ ? -1 : 1));
           ⟦2-char-id⟧ !== ⟦2-char-id⟧ && (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(), ⟦2-char-id⟧(⟦2-char-id⟧), null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧())
         },
         setFraction: ⟦2-char-id⟧ => {
           if (⟦2-char-id⟧) return;
-          const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧ + (⟦2-char-id⟧ ? 1 - JJ : ⟦2-char-id⟧) * (⟦2-char-id⟧ - ⟦2-char-id⟧));
+          const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧ + (⟦2-char-id⟧ ? 1 - BB : ⟦2-char-id⟧) * (⟦2-char-id⟧ - ⟦2-char-id⟧));
           ⟦2-char-id⟧ !== ⟦2-char-id⟧ && (⟦2-char-id⟧.current || (⟦2-char-id⟧.current = !0, null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧()), ⟦2-char-id⟧(⟦2-char-id⟧))
         },
         endDrag: () => {
```

</details>

<details>
<summary>Hunk 11 · Change · +1 / -1</summary>

```diff
@@ -343,7 +343,7 @@
         style: {
           display: "contents"
         },
-        children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+        children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
           value: ⟦2-char-id⟧,
           min: ⟦2-char-id⟧,
           max: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 12 · Change · +1 / -1</summary>

```diff
@@ -394,7 +394,7 @@
             className: "SettingsTextInputCircleInfo",
             hoverInfo: ⟦2-char-id⟧
           })]
-        }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
+        }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
           ariaLabel: ⟦2-char-id⟧,
           options: ⟦2-char-id⟧,
           value: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 13 · Change · +17 / -17</summary>

```diff
@@ -403,27 +403,27 @@
       })
     }
   },
-  4397: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧,
-      f: () => ⟦2-char-id⟧
+  4408: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+      c: () => ⟦2-char-id⟧,
+      d: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(2649),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2651),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(47),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(926),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(2623),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2626),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(933),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1232),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2642),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1247),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4401),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4439),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(547),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4441),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1225),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2614),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1235),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4411),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4451),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(586),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4459),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
 
     function ⟦2-char-id⟧() {
-      (0, ⟦2-char-id⟧.l)("texturePackPickReload")
+      (0, ⟦2-char-id⟧.n)("texturePackPickReload")
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 14 · Change · +3 / -3</summary>

```diff
@@ -436,12 +436,12 @@
       function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
         ⟦2-char-id⟧.b.setFromJson(⟦2-char-id⟧, "player");
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.b.saveTexturePack();
-        if (⟦2-char-id⟧.r) {
+        if (⟦2-char-id⟧.p) {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.b.toJson();
           ⟦2-char-id⟧.then((⟦2-char-id⟧ => {
-            ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧)
+            ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧, ⟦2-char-id⟧)
           }))
-        } else ⟦2-char-id⟧.current ||= ⟦2-char-id⟧, ⟦2-char-id⟧.current !== ⟦2-char-id⟧.b.getId() || ⟦2-char-id⟧.b.getId() === ⟦2-char-id⟧.r.CUSTOM && ⟦2-char-id⟧.current ? ⟦2-char-id⟧((() => ⟦2-char-id⟧.l)) : ⟦2-char-id⟧(null);
+        } else ⟦2-char-id⟧.current ||= ⟦2-char-id⟧, ⟦2-char-id⟧.current !== ⟦2-char-id⟧.b.getId() || ⟦2-char-id⟧.b.getId() === ⟦2-char-id⟧.r.CUSTOM && ⟦2-char-id⟧.current ? ⟦2-char-id⟧((() => ⟦2-char-id⟧.n)) : ⟦2-char-id⟧(null);
         ⟦2-char-id⟧()
       }
       async function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 15 · Change · +1 / -1</summary>

```diff
@@ -476,7 +476,7 @@
               setSelected: ⟦2-char-id⟧
             }, ⟦2-char-id⟧)))
           }), ⟦2-char-id⟧.b.getId() === ⟦2-char-id⟧.r.CUSTOM && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
-            folderName: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.b.getFromFolderName()) && void 0 !== ⟦2-char-id⟧ ? cJ : null,
+            folderName: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.b.getFromFolderName()) && void 0 !== ⟦2-char-id⟧ ? TB : null,
             onTexturePackUpdated: function(⟦2-char-id⟧) {
               ⟦2-char-id⟧(⟦2-char-id⟧, !0)
             },
```

</details>

<details>
<summary>Hunk 16 · Change · +2 / -2</summary>

```diff
@@ -497,9 +497,9 @@
       return (0, ⟦2-char-id⟧.useEffect)((() => {
         (0, ⟦2-char-id⟧.k)(⟦2-char-id⟧).then((⟦2-char-id⟧ => {
           var ⟦2-char-id⟧;
-          ⟦2-char-id⟧ && (⟦2-char-id⟧.current = ⟦2-char-id⟧, ⟦2-char-id⟧(!1), ⟦2-char-id⟧(⟦2-char-id⟧.current.metaData.name), ⟦2-char-id⟧(⟦2-char-id⟧.current.metaData.author), ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.current.metaData.previewImage) && void 0 !== ⟦2-char-id⟧ ? cJ : ""))
+          ⟦2-char-id⟧ && (⟦2-char-id⟧.current = ⟦2-char-id⟧, ⟦2-char-id⟧(!1), ⟦2-char-id⟧(⟦2-char-id⟧.current.metaData.name), ⟦2-char-id⟧(⟦2-char-id⟧.current.metaData.author), ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.current.metaData.previewImage) && void 0 !== ⟦2-char-id⟧ ? TB : ""))
         })).catch((⟦2-char-id⟧ => {
-          console.warn(`Failed to fetch texture pack ${cJ}`, ⟦2-char-id⟧)
+          console.warn(`Failed to fetch texture pack ${TB}`, ⟦2-char-id⟧)
         }))
       }), [⟦2-char-id⟧]), (0, ⟦2-char-id⟧.jsxs)("div", {
         "data-pad-focusable": !0,
```

</details>

<details>
<summary>Hunk 17 · Change · +2 / -2</summary>

```diff
@@ -515,11 +515,11 @@
         children: [(0, ⟦2-char-id⟧.jsx)("div", {
           className: "TexturePackBg",
           style: {
-            backgroundImage: ⟦2-char-id⟧ ? `url(${xJ})` : void 0
+            backgroundImage: ⟦2-char-id⟧ ? `url(${EB})` : void 0
           }
         }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
           className: "TexturePackName",
-          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {})
+          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {})
         }), !⟦2-char-id⟧ && ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
           className: "TexturePackName",
           children: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 18 · Change · +5 / -5</summary>

```diff
@@ -530,13 +530,13 @@
       })
     }
   },
-  4426: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      b: () => ⟦2-char-id⟧
+  4438: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+      d: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(926),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(933),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let {
```

</details>

<details>
<summary>Hunk 19 · Change · +6 / -6</summary>

```diff
@@ -566,17 +566,17 @@
       })
     }
   },
-  4433: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧,
-      i: () => ⟦2-char-id⟧
+  4447: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+      b: () => ⟦2-char-id⟧,
+      c: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(47);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(62);
     const ⟦2-char-id⟧ = new WeakMap,
       ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
         var ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.closest("[data-pad-slider]");
-        return ⟦2-char-id⟧ && null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? cJ : null
+        return ⟦2-char-id⟧ && null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? TB : null
       },
       ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
         const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 20 · Change · +6 / -6</summary>

```diff
@@ -597,13 +597,13 @@
         }), [⟦2-char-id⟧])
       }
   },
-  4441: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧,
-      f: () => ⟦2-char-id⟧
+  4459: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+      d: () => ⟦2-char-id⟧,
+      h: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(2651),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4448);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(2626),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4467);
     let ⟦2-char-id⟧ = null;
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 21 · Change · +2 / -2</summary>

```diff
@@ -615,10 +615,10 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧;
-      null !== ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.b)(⟦2-char-id⟧.pack, ⟦2-char-id⟧) && (⟦2-char-id⟧ = null, ⟦2-char-id⟧ && ⟦2-char-id⟧.prompt())
+      null !== ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧.pack, ⟦2-char-id⟧) && (⟦2-char-id⟧ = null, ⟦2-char-id⟧ && ⟦2-char-id⟧.prompt())
     }
   },
-  4448: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  4467: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
     }
```

</details>

<details>
<summary>Hunk 22 · Change · +1 / -1</summary>

```diff
@@ -632,7 +632,7 @@
       return ⟦2-char-id⟧.length === Object.keys(⟦2-char-id⟧).length && ⟦2-char-id⟧.every((⟦2-char-id⟧ => Object.prototype.hasOwnProperty.call(⟦2-char-id⟧, ⟦2-char-id⟧) && ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧[⟦2-char-id⟧])))
     }
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      b: () => ⟦2-char-id⟧
+      e: () => ⟦2-char-id⟧
     })
   }
 };
```

</details>

</details>
