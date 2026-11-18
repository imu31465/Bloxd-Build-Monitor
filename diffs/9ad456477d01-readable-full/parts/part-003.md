# Historical build diff — part 003

- Base: e7e20713782fba2472c7866f1ac5b84e503e7647
- Build: 9ad456477d01ce4e7883eecb0f575724f962561f
- Files in this part: 7

<details>
<summary><code>bundles/bloxd.io/chunks/js/178.js</code> · modified · +929 / -929</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +15 / -15</summary>

```diff
@@ -1,22 +1,22 @@
 export const ⟦2-char-id⟧ = 178;
 export const ids = [45, 178];
 export const modules = {
-  37538: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37514: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     var ⟦2-char-id⟧ = {
-      "./combat_1.png": 37544,
-      "./dungeon_crumbling_crypt.png": 37551,
-      "./dungeon_frozen_hollow.png": 37560,
-      "./dungeon_wildwood_grove.png": 37565,
-      "./dungeons.png": 37573,
-      "./farming_1.png": 37581,
-      "./fishing_1.png": 37586,
-      "./hub.png": 37590,
-      "./island.png": 37595,
-      "./mining_1.png": 37602,
-      "./mining_1_bridge.png": 37606,
-      "./mining_1_gallery.png": 37613,
-      "./mining_1_hollow.png": 37617,
-      "./mining_1_village.png": 37619
+      "./combat_1.png": 37519,
+      "./dungeon_crumbling_crypt.png": 37522,
+      "./dungeon_frozen_hollow.png": 37530,
+      "./dungeon_wildwood_grove.png": 37538,
+      "./dungeons.png": 37542,
+      "./farming_1.png": 37550,
+      "./fishing_1.png": 37556,
+      "./hub.png": 37558,
+      "./island.png": 37566,
+      "./mining_1.png": 37573,
+      "./mining_1_bridge.png": 37579,
+      "./mining_1_gallery.png": 37587,
+      "./mining_1_hollow.png": 37591,
+      "./mining_1_village.png": 37593
     };
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 2 · Change · +2 / -2</summary>

```diff
@@ -33,9 +33,9 @@
     }
     ⟦2-char-id⟧.keys = function() {
       return Object.keys(⟦2-char-id⟧)
-    }, ⟦2-char-id⟧.resolve = ⟦2-char-id⟧, ⟦2-char-id⟧.exports = ⟦2-char-id⟧, ⟦2-char-id⟧.id = 37538
+    }, ⟦2-char-id⟧.resolve = ⟦2-char-id⟧, ⟦2-char-id⟧.exports = ⟦2-char-id⟧, ⟦2-char-id⟧.id = 37514
   },
-  37623: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37598: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       b: () => ⟦2-char-id⟧,
       c: () => ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 3 · Change · +4 / -4</summary>

```diff
@@ -48,21 +48,21 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
-      return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? cJ : null
+      return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? TB : null
     }
   },
-  37517: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37488: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
       const {
         width: ⟦2-char-id⟧,
         height: ⟦2-char-id⟧
-      } = ⟦2-char-id⟧, ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.text) && void 0 !== ⟦2-char-id⟧ ? FJ : ⟦2-char-id⟧, ⟦2-char-id⟧ = (⟦2-char-id⟧.x / 100 - .5) * ⟦2-char-id⟧, ⟦2-char-id⟧ = (⟦2-char-id⟧.y / 100 - .5) * ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ / 2 - ⟦2-char-id⟧.x;
+      } = ⟦2-char-id⟧, ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.text) && void 0 !== ⟦2-char-id⟧ ? VB : ⟦2-char-id⟧, ⟦2-char-id⟧ = (⟦2-char-id⟧.x / 100 - .5) * ⟦2-char-id⟧, ⟦2-char-id⟧ = (⟦2-char-id⟧.y / 100 - .5) * ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ / 2 - ⟦2-char-id⟧.x;
       if (null !== ⟦2-char-id⟧.text && Math.abs(⟦2-char-id⟧) <= ⟦2-char-id⟧ && ⟦2-char-id⟧ >= ⟦2-char-id⟧.top - ⟦2-char-id⟧ / 2 && ⟦2-char-id⟧ <= ⟦2-char-id⟧ / 2 - ⟦2-char-id⟧.bottom) return {
         x: ⟦2-char-id⟧.x,
         y: ⟦2-char-id⟧.y
       };
-      const ⟦2-char-id⟧ = Math.min(0 === ⟦2-char-id⟧ ? 1 / 0 : ⟦2-char-id⟧ / Math.abs(⟦2-char-id⟧), ⟦2-char-id⟧ > 0 ? (⟦2-char-id⟧ / 2 - ⟦2-char-id⟧.bottom) / qJ : ⟦2-char-id⟧ < 0 ? (⟦2-char-id⟧.top - ⟦2-char-id⟧ / 2) / qJ : 1 / 0);
+      const ⟦2-char-id⟧ = Math.min(0 === ⟦2-char-id⟧ ? 1 / 0 : ⟦2-char-id⟧ / Math.abs(⟦2-char-id⟧), ⟦2-char-id⟧ > 0 ? (⟦2-char-id⟧ / 2 - ⟦2-char-id⟧.bottom) / YB : ⟦2-char-id⟧ < 0 ? (⟦2-char-id⟧.top - ⟦2-char-id⟧ / 2) / YB : 1 / 0);
       return !Number.isFinite(⟦2-char-id⟧) || ⟦2-char-id⟧ < 0 ? {
         x: 50,
         y: 50
```

</details>

<details>
<summary>Hunk 4 · Change · +3 / -3</summary>

```diff
@@ -72,12 +72,12 @@
       }
     }
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧
+      e: () => ⟦2-char-id⟧
     })
   },
-  37529: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37506: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧
+      d: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = 4,
       ⟦2-char-id⟧ = 12⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 5 · Change · +1 / -1</summary>

```diff
@@ -133,7 +133,7 @@
         this.clearTimer();
         const ⟦2-char-id⟧ = this.now(),
           ⟦2-char-id⟧ = this.lastSentAt + this.spacingMs,
-          ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧ > ⟦2-char-id⟧ ? cJ : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
+          ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧ > ⟦2-char-id⟧ ? TB : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
         ⟦2-char-id⟧ !== 1 / 0 && (this.timer = setTimeout((() => {
           this.timer = null, this.prune(), this.schedule(), this.notify()
         }), Math.max(0, ⟦2-char-id⟧ - ⟦2-char-id⟧)))
```

</details>

<details>
<summary>Hunk 6 · Change · +4 / -4</summary>

```diff
@@ -146,14 +146,14 @@
       }
     }
   },
-  37515: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37480: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      b: () => ⟦2-char-id⟧
+      c: () => ⟦2-char-id⟧
     });
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-        this.Uf = ⟦2-char-id⟧, this.beforeOpen = ⟦2-char-id⟧, this.afterClose = ⟦2-char-id⟧, this.open = !1, this.xn = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
-          this.isEnabled() && !this.xn && (this.open = !0, this.beforeOpen(this), this.emit())
+        this.yH = ⟦2-char-id⟧, this.beforeOpen = ⟦2-char-id⟧, this.afterClose = ⟦2-char-id⟧, this.open = !1, this.ND = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
+          this.isEnabled() && !this.ND && (this.open = !0, this.beforeOpen(this), this.emit())
         }, this.close = () => {
           this.closePanel(!1)
         }, this.dismiss = () => {
```

</details>

<details>
<summary>Hunk 7 · Change · +8 / -8</summary>

```diff
@@ -171,33 +171,33 @@
       }
       onClosed() {}
       dispose() {
-        this.open = !1, this.emit(), this.xn = !0
+        this.open = !1, this.emit(), this.ND = !0
       }
       isEnabled() {
         return !0
       }
       emit() {
-        this.xn || (this.snapshot = this.buildSnapshot(), this.Uf(this.snapshot))
+        this.ND || (this.snapshot = this.buildSnapshot(), this.yH(this.snapshot))
       }
     }
   },
-  37626: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37605: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       SkyblockEntityFacing: () => ⟦2-char-id⟧,
       needsSkyblockEntityFacing: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37524),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3726),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(37633);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37502),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3716),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(37614);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      if (⟦2-char-id⟧.metaInfo === ⟦2-char-id⟧.n || "Iron Guardian" === ⟦2-char-id⟧.type || "Gold Guardian" === ⟦2-char-id⟧.type) return !0;
+      if (⟦2-char-id⟧.metaInfo === ⟦2-char-id⟧.m || "Iron Guardian" === ⟦2-char-id⟧.type || "Gold Guardian" === ⟦2-char-id⟧.type) return !0;
       if ("Pig" === ⟦2-char-id⟧.type) return "sitting" === ⟦2-char-id⟧.pose;
       if ("Person" !== ⟦2-char-id⟧.meshKind || void 0 === ⟦2-char-id⟧.meshOpts) return !1;
       let ⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.get(⟦2-char-id⟧.meshOpts);
       if (void 0 === ⟦2-char-id⟧) {
         var ⟦2-char-id⟧, ⟦2-char-id⟧;
-        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧);
+        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧);
         ⟦2-char-id⟧ = !1, "pig_napoleon" === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.opts.textures) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.head) ? ⟦2-char-id⟧ = !0 : "npc_pig_head" === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.opts.textures) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.head) && (⟦2-char-id⟧ = "sitting" === ⟦2-char-id⟧.opts.pose || "sitting"), ⟦2-char-id⟧ && (⟦2-char-id⟧.size >= 256 && ⟦2-char-id⟧.clear(), ⟦2-char-id⟧.set(⟦2-char-id⟧.meshOpts, ⟦2-char-id⟧))
       }
       return "sitting" === ⟦2-char-id⟧ ? "sitting" === ⟦2-char-id⟧.pose : ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 8 · Change · +6 / -6</summary>

```diff
@@ -227,25 +227,25 @@
       }
     }
   },
-  37508: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37474: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       default: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = "island";
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(235);
-    const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.vb)([0, 0, -1]),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(279);
+    const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.Fb)([0, 0, -1]),
       ⟦2-char-id⟧ = [{
         name: "S",
-        bearing: (0, ⟦2-char-id⟧.vb)([0, 0, 1])
+        bearing: (0, ⟦2-char-id⟧.Fb)([0, 0, 1])
       }, {
         name: "E",
-        bearing: (0, ⟦2-char-id⟧.vb)([-1, 0, 0])
+        bearing: (0, ⟦2-char-id⟧.Fb)([-1, 0, 0])
       }, {
         name: "N",
         bearing: ⟦2-char-id⟧
       }, {
         name: "W",
-        bearing: (0, ⟦2-char-id⟧.vb)([1, 0, 0])
+        bearing: (0, ⟦2-char-id⟧.Fb)([1, 0, 0])
       }];
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 9 · Change · +2 / -2</summary>

```diff
@@ -260,8 +260,8 @@
           var ⟦2-char-id⟧, ⟦2-char-id⟧;
           return {
             id: ⟦2-char-id⟧.id,
-            name: ⟦2-char-id⟧(⟦2-char-id⟧.visited && ⟦2-char-id⟧.nameKey ? null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.mapLabelKey) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧.nameKey : "skyblockGame:mapUnknown"),
-            icon: ⟦2-char-id⟧.visited && null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.icon) && void 0 !== ⟦2-char-id⟧ ? FJ : "unknown",
+            name: ⟦2-char-id⟧(⟦2-char-id⟧.visited && ⟦2-char-id⟧.nameKey ? null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.mapLabelKey) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧.nameKey : "skyblockGame:mapUnknown"),
+            icon: ⟦2-char-id⟧.visited && null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.icon) && void 0 !== ⟦2-char-id⟧ ? VB : "unknown",
             visited: ⟦2-char-id⟧.visited,
             current: !1,
             position: ⟦2-char-id⟧(⟦2-char-id⟧.position),
```

</details>

<details>
<summary>Hunk 10 · Change · +1 / -1</summary>

```diff
@@ -274,7 +274,7 @@
           return {
             id: ⟦2-char-id⟧.id,
             name: ⟦2-char-id⟧(⟦2-char-id⟧.visited && ⟦2-char-id⟧.nameKey ? ⟦2-char-id⟧.nameKey : "skyblockGame:mapUnknown"),
-            icon: ⟦2-char-id⟧.visited && null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.icon) && void 0 !== ⟦2-char-id⟧ ? FJ : "unknown",
+            icon: ⟦2-char-id⟧.visited && null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.icon) && void 0 !== ⟦2-char-id⟧ ? VB : "unknown",
             visited: ⟦2-char-id⟧.visited,
             current: ⟦2-char-id⟧.id === ⟦2-char-id⟧.zoneId,
             position: ⟦2-char-id⟧.position,
```

</details>

<details>
<summary>Hunk 11 · Change · +1 / -1</summary>

```diff
@@ -287,7 +287,7 @@
           var ⟦2-char-id⟧;
           return {
             id: ⟦2-char-id⟧.id,
-            name: ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.nameKey) && void 0 !== ⟦2-char-id⟧ ? cJ : "skyblockGame:mapUnknown"),
+            name: ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.nameKey) && void 0 !== ⟦2-char-id⟧ ? TB : "skyblockGame:mapUnknown"),
             icon: ⟦2-char-id⟧.visited ? "dungeons" === ⟦2-char-id⟧.destination ? "portal_orange" : "portal" : "unknown",
             visited: ⟦2-char-id⟧.visited,
             current: !1,
```

</details>

<details>
<summary>Hunk 12 · Change · +3 / -3</summary>

```diff
@@ -297,20 +297,20 @@
             travelId: ⟦2-char-id⟧.destination
           }
         })),
-        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? qJ : ⟦2-char-id⟧,
+        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? YB : ⟦2-char-id⟧,
         ⟦2-char-id⟧ = ⟦2-char-id⟧.filter((⟦2-char-id⟧ => ⟦2-char-id⟧.visited)).length,
         ⟦2-char-id⟧ = ⟦2-char-id⟧ ? (⟦2-char-id⟧.bounds.mapMaxX - ⟦2-char-id⟧.bounds.mapMinX) / (⟦2-char-id⟧.bounds.mapMaxZ - ⟦2-char-id⟧.bounds.mapMinZ) : 2,
         ⟦2-char-id⟧ = ⟦2-char-id⟧ ? JSON.stringify([⟦2-char-id⟧.bounds, ⟦2-char-id⟧.mapOrigin]) : "";
       return {
         local: ⟦2-char-id⟧,
         points: ⟦2-char-id⟧,
-        portals: ⟦2-char-id⟧ ? hJ : [],
+        portals: ⟦2-char-id⟧ ? kB : [],
         progress: ⟦2-char-id⟧.length ? ⟦2-char-id⟧("skyblockGame:mapDiscovered", {
           current: String(⟦2-char-id⟧),
           total: String(⟦2-char-id⟧.length)
         }) : null,
         percent: ⟦2-char-id⟧.length ? 100 * ⟦2-char-id⟧ / ⟦2-char-id⟧.length : 0,
-        canTravel: [...DJ, ...UJ ? hJ : []].some((⟦2-char-id⟧ => ⟦2-char-id⟧.visited && !⟦2-char-id⟧.current)),
+        canTravel: [...LB, ...yB ? kB : []].some((⟦2-char-id⟧ => ⟦2-char-id⟧.visited && !⟦2-char-id⟧.current)),
         noLandmarks: ⟦2-char-id⟧ && !⟦2-char-id⟧.insideDungeon && 0 === ⟦2-char-id⟧.length,
         background: ⟦2-char-id⟧ ? {
           imageKey: ⟦2-char-id⟧.imageKey,
```

</details>

<details>
<summary>Hunk 13 · Change · +1 / -1</summary>

```diff
@@ -330,7 +330,7 @@
           caption: ⟦2-char-id⟧(⟦2-char-id⟧.zoneId === ⟦2-char-id⟧ ? "skyblockGame:zoneIsland" : ⟦2-char-id⟧.labelKey),
           width: (⟦2-char-id⟧.bounds.mapMaxX - ⟦2-char-id⟧.bounds.mapMinX) / ⟦2-char-id⟧.minimapSpan * 100 + "%",
           height: (⟦2-char-id⟧.bounds.mapMaxZ - ⟦2-char-id⟧.bounds.mapMinZ) / ⟦2-char-id⟧.minimapSpan * 100 + "%",
-          markers: [...qJ, ...hJ]
+          markers: [...YB, ...kB]
         } : null
       }
     }
```

</details>

<details>
<summary>Hunk 14 · Change · +3 / -3</summary>

```diff
@@ -341,15 +341,15 @@
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧)),
           ⟦2-char-id⟧ = [⟦2-char-id⟧.id, ⟦2-char-id⟧].sort().join("|");
         return !⟦2-char-id⟧ || ⟦2-char-id⟧.has(⟦2-char-id⟧) ? [] : (⟦2-char-id⟧.add(⟦2-char-id⟧), [{
-          id: `${ZJ.id}-${FJ}`,
+          id: `${dB.id}-${VB}`,
           start: ⟦2-char-id⟧.position,
           end: ⟦2-char-id⟧.position,
           explored: ⟦2-char-id⟧.visited && ⟦2-char-id⟧.visited
         }])
       }))))
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37515);
-    class ⟦2-char-id⟧ extends ⟦2-char-id⟧.b {}
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37480);
+    class ⟦2-char-id⟧ extends ⟦2-char-id⟧.c {}
     const ⟦2-char-id⟧ = "skyblockMapView";
     class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 15 · Change · +1 / -1</summary>

```diff
@@ -369,7 +369,7 @@
         }, this.selectTab = ⟦2-char-id⟧ => {
           this.tab = ⟦2-char-id⟧, this.feedbackKey = "", this.emit()
         }, this.travel = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
-          if (!this.map || this.pending || this.xn) return;
+          if (!this.map || this.pending || this.ND) return;
           const ⟦2-char-id⟧ = ("zone" === ⟦2-char-id⟧ ? this.map.zones : this.map.landmarks).find((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧));
           if (⟦2-char-id⟧) {
             if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
```

</details>

<details>
<summary>Hunk 16 · Change · +1 / -1</summary>

```diff
@@ -400,7 +400,7 @@
       }
       ⟦2-char-id⟧(⟦2-char-id⟧) {
         var ⟦2-char-id⟧;
-        if (!this.xn)
+        if (!this.ND)
           if ("entities" !== ⟦2-char-id⟧.kind)
             if ("open" !== ⟦2-char-id⟧.kind) {
               var ⟦2-char-id⟧, ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 17 · Change · +1 / -1</summary>

```diff
@@ -410,7 +410,7 @@
                 ⟦2-char-id⟧.requestId === (null === (⟦2-char-id⟧ = this.pending) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
               } else if (⟦2-char-id⟧.requestId === (null === (⟦2-char-id⟧ = this.pending) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.requestId)) {
                 var ⟦2-char-id⟧;
-                this.pending = null, this.feedbackKey = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.errorKey) && void 0 !== ⟦2-char-id⟧ ? eJ : "", null === ⟦2-char-id⟧.errorKey && this.close()
+                this.pending = null, this.feedbackKey = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.errorKey) && void 0 !== ⟦2-char-id⟧ ? pB : "", null === ⟦2-char-id⟧.errorKey && this.close()
               }
               this.emit()
             } else this.show();
```

</details>

<details>
<summary>Hunk 18 · Change · +3 / -3</summary>

```diff
@@ -465,10 +465,10 @@
         return !⟦2-char-id⟧ || ⟦2-char-id⟧.insideDungeon ? [] : ⟦2-char-id⟧.landmarks.filter((⟦2-char-id⟧ => ⟦2-char-id⟧.visited === this.visited)).map((⟦2-char-id⟧ => {
           var ⟦2-char-id⟧, ⟦2-char-id⟧;
           return {
-            id: `landmark:${JJ.id}`,
+            id: `landmark:${BB.id}`,
             position: ⟦2-char-id⟧.position,
-            icon: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.icon) && void 0 !== ⟦2-char-id⟧ ? cJ : "unknown",
-            nameKey: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.nameKey) && void 0 !== ⟦2-char-id⟧ ? ZJ : "skyblockGame:compassUnknown",
+            icon: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.icon) && void 0 !== ⟦2-char-id⟧ ? TB : "unknown",
+            nameKey: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.nameKey) && void 0 !== ⟦2-char-id⟧ ? dB : "skyblockGame:compassUnknown",
             kind: this.visited ? "landmark" : "unknown"
           }
         }))
```

</details>

<details>
<summary>Hunk 19 · Change · +1 / -1</summary>

```diff
@@ -479,7 +479,7 @@
         this.map = ⟦2-char-id⟧, this.kind = ⟦2-char-id⟧, this.position = ⟦2-char-id⟧, this.alive = ⟦2-char-id⟧, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = ⟦2-char-id⟧, this.range = "enemy" === ⟦2-char-id⟧ ? 48 : 64, this.limit = 12
       }
       ⟦2-char-id⟧(⟦2-char-id⟧) {
-        if ("enemy" !== this.kind || this.alive(⟦2-char-id⟧.mc)) return this.position(⟦2-char-id⟧.mc)
+        if ("enemy" !== this.kind || this.alive(⟦2-char-id⟧.My)) return this.position(⟦2-char-id⟧.My)
       }
       getPoints() {
         const ⟦2-char-id⟧ = [];
```

</details>

<details>
<summary>Hunk 20 · Change · +4 / -4</summary>

```diff
@@ -488,13 +488,13 @@
           const ⟦2-char-id⟧ = this.position(⟦2-char-id⟧.compassEntityId);
           var ⟦2-char-id⟧, ⟦2-char-id⟧;
           if (⟦2-char-id⟧) ⟦2-char-id⟧.push({
-            id: `${this.kind}:${FJ.compassEntityId}`,
-            mc: ⟦2-char-id⟧.compassEntityId,
+            id: `${this.kind}:${VB.compassEntityId}`,
+            My: ⟦2-char-id⟧.compassEntityId,
             kind: this.kind,
-            icon: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.icon) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧.npcSkin ? `npc_${FJ.npcSkin}` : this.kind,
+            icon: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.icon) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧.npcSkin ? `npc_${VB.npcSkin}` : this.kind,
             displayName: ⟦2-char-id⟧.displayName,
             position: ⟦2-char-id⟧,
-            nameKey: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.nameKey) && void 0 !== ⟦2-char-id⟧ ? ZJ : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
+            nameKey: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.nameKey) && void 0 !== ⟦2-char-id⟧ ? dB : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
           })
         }
         return ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 21 · Change · +1 / -1</summary>

```diff
@@ -512,7 +512,7 @@
             id: "portal:" + ⟦2-char-id⟧.id,
             kind: "portal",
             position: ⟦2-char-id⟧.position,
-            nameKey: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.nameKey) && void 0 !== ⟦2-char-id⟧ ? cJ : "skyblockGame:compassUnvisitedZone",
+            nameKey: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.nameKey) && void 0 !== ⟦2-char-id⟧ ? TB : "skyblockGame:compassUnvisitedZone",
             icon: ⟦2-char-id⟧.visited ? "dungeons" === ⟦2-char-id⟧.destination ? "portal_orange" : "portal" : "unknown",
             colour: ⟦2-char-id⟧.colour
           }
```

</details>

<details>
<summary>Hunk 22 · Change · +2 / -2</summary>

```diff
@@ -540,9 +540,9 @@
       const ⟦2-char-id⟧ = ⟦2-char-id⟧[0] - ⟦2-char-id⟧[0],
         ⟦2-char-id⟧ = ⟦2-char-id⟧[2] - ⟦2-char-id⟧[2];
       return {
-        ...JJ,
+        ...BB,
         position: ⟦2-char-id⟧,
-        offset: ⟦2-char-id⟧.c.computeShortestRotation(⟦2-char-id⟧, (0, ⟦2-char-id⟧.vb)([⟦2-char-id⟧, 0, ⟦2-char-id⟧])),
+        offset: ⟦2-char-id⟧.e.computeShortestRotation(⟦2-char-id⟧, (0, ⟦2-char-id⟧.Fb)([⟦2-char-id⟧, 0, ⟦2-char-id⟧])),
         distance: Math.hypot(⟦2-char-id⟧, ⟦2-char-id⟧[1] - ⟦2-char-id⟧[1], ⟦2-char-id⟧)
       }
     }
```

</details>

<details>
<summary>Hunk 23 · Change · +1 / -1</summary>

```diff
@@ -599,7 +599,7 @@
           }
           of this.candidates) {
           if (!⟦2-char-id⟧.enabled) continue;
-          const ⟦2-char-id⟧ = ⟦2-char-id⟧.Om ? ⟦2-char-id⟧.Om(⟦2-char-id⟧) : ⟦2-char-id⟧.position;
+          const ⟦2-char-id⟧ = ⟦2-char-id⟧.Dv ? ⟦2-char-id⟧.Dv(⟦2-char-id⟧) : ⟦2-char-id⟧.position;
           if (⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
             Math.abs(⟦2-char-id⟧.offset) <= ⟦2-char-id⟧ && ⟦2-char-id⟧.push(⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 24 · Change · +2 / -2</summary>

```diff
@@ -611,8 +611,8 @@
         this.providers.clear(), this.candidates = []
       }
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(35665),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(47);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(35601),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(62);
     const ⟦2-char-id⟧ = [{
         dailyRewardCoins: 1⟦2-char-id⟧,
         dailyRewardItems: []
```

</details>

<details>
<summary>Hunk 25 · Change · +1 / -1</summary>

```diff
@@ -650,7 +650,7 @@
       return ⟦2-char-id⟧ >= ⟦2-char-id⟧ ? 1 : ⟦2-char-id⟧ + 1
     }
     const ⟦2-char-id⟧ = "skyblockQuests";
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37524);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37502);
     const ⟦2-char-id⟧ = "devquests",
       ⟦2-char-id⟧ = "none",
       ⟦2-char-id⟧ = {
```

</details>

<details>
<summary>Hunk 26 · Change · +5 / -5</summary>

```diff
@@ -720,11 +720,11 @@
       const ⟦2-char-id⟧ = Math.floor(5 * ⟦2-char-id⟧ / (2 * ⟦2-char-id⟧ + 1));
       return Math.min(4, Math.max(0, ⟦2-char-id⟧))
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1137);
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(35494);
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(35661),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(17),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8178);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1117);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(35404);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(35595),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(24),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8204);
     const ⟦2-char-id⟧ = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
       ⟦2-char-id⟧ = 1⟦2-char-id⟧;
 
```

</details>

<details>
<summary>Hunk 27 · Change · +1 / -1</summary>

```diff
@@ -812,7 +812,7 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       return ⟦2-char-id⟧.has(⟦2-char-id⟧)
     }
-    const ⟦2-char-id⟧ = new Set(⟦2-char-id⟧.jb);
+    const ⟦2-char-id⟧ = new Set(⟦2-char-id⟧.pb);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       return ⟦2-char-id⟧.has(⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 28 · Change · +1 / -1</summary>

```diff
@@ -845,7 +845,7 @@
         "Block of Gold": 30
       },
       ⟦2-char-id⟧ = {
-        ...Dc,
+        ...LT,
         ...Object.fromEntries(Object.entries(⟦2-char-id⟧).map((⟦2-char-id⟧ => {
           let [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
           return [⟦2-char-id⟧, 9 * ⟦2-char-id⟧[⟦2-char-id⟧]]
```

</details>

<details>
<summary>Hunk 29 · Change · +3 / -3</summary>

```diff
@@ -954,18 +954,18 @@
       };
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return `rgb(${xc[JJ].join(", ")})`
+      return `rgb(${ET[BB].join(", ")})`
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       if (!⟦2-char-id⟧) return ⟦2-char-id⟧(⟦2-char-id⟧);
       const ⟦2-char-id⟧ = {};
-      for (const [⟦2-char-id⟧, ⟦2-char-id⟧] of Object.entries(⟦2-char-id⟧)) ⟦2-char-id⟧[⟦2-char-id⟧] = "string" === typeof ⟦2-char-id⟧ ? eJ : ⟦2-char-id⟧(⟦2-char-id⟧.translationKey);
+      for (const [⟦2-char-id⟧, ⟦2-char-id⟧] of Object.entries(⟦2-char-id⟧)) ⟦2-char-id⟧[⟦2-char-id⟧] = "string" === typeof ⟦2-char-id⟧ ? pB : ⟦2-char-id⟧(⟦2-char-id⟧.translationKey);
       return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
     }
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        this.now = ⟦2-char-id⟧, this.getJournal = ⟦2-char-id⟧, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.hj = !1, this.onShown = () => {}
+        this.now = ⟦2-char-id⟧, this.getJournal = ⟦2-char-id⟧, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.Dg = !1, this.onShown = () => {}
       }
       enqueue(⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 30 · Change · +1 / -1</summary>

```diff
@@ -977,7 +977,7 @@
         return (null === this.current || null !== this.followUp && !⟦2-char-id⟧) && (this.advance(), !0)
       }
       setHeld(⟦2-char-id⟧) {
-        return this.hj = ⟦2-char-id⟧, !⟦2-char-id⟧ && null === this.current && this.pending.length > 0 && (this.advance(), !0)
+        return this.Dg = ⟦2-char-id⟧, !⟦2-char-id⟧ && null === this.current && this.pending.length > 0 && (this.advance(), !0)
       }
       ⟦2-char-id⟧() {
         const ⟦2-char-id⟧ = this.getJournal(),
```

</details>

<details>
<summary>Hunk 31 · Change · +3 / -3</summary>

```diff
@@ -1008,15 +1008,15 @@
           quest: ⟦2-char-id⟧(⟦2-char-id⟧.questNameKey)
         }) : ⟦2-char-id⟧("skyblockGame:questNextStepTitle") : ⟦2-char-id⟧("started" === ⟦2-char-id⟧ ? "skyblockGame:questStartedTitle" : "quest" === ⟦2-char-id⟧ ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
           token: this.token,
-          kind: null === this.followUp ? AJ : "step",
+          kind: null === this.followUp ? JB : "step",
           phase: null === this.followUp ? "completion" : "next",
           title: ⟦2-char-id⟧,
-          name: ⟦2-char-id⟧ ? ⟦2-char-id⟧("skyblockGame:questExploreName") : null !== ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.step.nameKey, ⟦2-char-id⟧.step.nameParams) : ⟦2-char-id⟧(⟦2-char-id⟧, qJ, ⟦2-char-id⟧),
+          name: ⟦2-char-id⟧ ? ⟦2-char-id⟧("skyblockGame:questExploreName") : null !== ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.step.nameKey, ⟦2-char-id⟧.step.nameParams) : ⟦2-char-id⟧(⟦2-char-id⟧, YB, ⟦2-char-id⟧),
           description: ⟦2-char-id⟧ ? ⟦2-char-id⟧("skyblockGame:questExploreDescription") : null === ⟦2-char-id⟧ ? null : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.step.descriptionKey, ⟦2-char-id⟧.step.descriptionParams),
           reward: null === this.followUp && ⟦2-char-id⟧ > 0 ? ⟦2-char-id⟧("skyblockGame:questCoinRewardSuffix", {
             amount: ⟦2-char-id⟧.toLocaleString(⟦2-char-id⟧)
           }) : null,
-          iconItem: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.step.questIconItem) && void 0 !== ⟦2-char-id⟧ ? eJ : null,
+          iconItem: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.step.questIconItem) && void 0 !== ⟦2-char-id⟧ ? pB : null,
           accent: null,
           durationMs: this.expiresAt - this.shownAt,
           waypointNameKey: null !== ⟦2-char-id⟧ && (null === (⟦2-char-id⟧ = this.getJournal()) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.trackedQuestId) === ⟦2-char-id⟧.questId ? ⟦2-char-id⟧.step.nameKey : null
```

</details>

<details>
<summary>Hunk 32 · Change · +2 / -2</summary>

```diff
@@ -1034,11 +1034,11 @@
           token: this.token,
           kind: "skillLevel",
           phase: "completion",
-          title: ⟦2-char-id⟧(`skyblockGame:${FJ}`),
+          title: ⟦2-char-id⟧(`skyblockGame:${VB}`),
           name: ⟦2-char-id⟧("skyblockGame:skillLevelUp", {
             to: ⟦2-char-id⟧.toLocaleString(⟦2-char-id⟧)
           }),
-          description: ⟦2-char-id⟧.percent === ⟦2-char-id⟧.percent ? null : ⟦2-char-id⟧(`${AJ.translationKey}Change`, {
+          description: ⟦2-char-id⟧.percent === ⟦2-char-id⟧.percent ? null : ⟦2-char-id⟧(`${JB.translationKey}Change`, {
             before: ⟦2-char-id⟧.percent.toLocaleString(⟦2-char-id⟧),
             after: ⟦2-char-id⟧.percent.toLocaleString(⟦2-char-id⟧)
           }),
```

</details>

<details>
<summary>Hunk 33 · Change · +1 / -1</summary>

```diff
@@ -1076,7 +1076,7 @@
           iconItem: ⟦2-char-id⟧ = null
         } = ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = {
-          ...eJ
+          ...pB
         };
         for (const [⟦2-char-id⟧, ⟦2-char-id⟧] of Object.entries(⟦2-char-id⟧)) ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧(⟦2-char-id⟧);
         return {
```

</details>

<details>
<summary>Hunk 34 · Change · +3 / -3</summary>

```diff
@@ -1112,19 +1112,19 @@
         }
       }
       showFollowUp(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        null === ⟦2-char-id⟧ || this.hj ? this.advance() : (this.followUp = ⟦2-char-id⟧, this.token++, this.shownAt = this.now(), this.expiresAt = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? cJ : this.shownAt + this.durationMs())
+        null === ⟦2-char-id⟧ || this.Dg ? this.advance() : (this.followUp = ⟦2-char-id⟧, this.token++, this.shownAt = this.now(), this.expiresAt = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? TB : this.shownAt + this.durationMs())
       }
       findFollowUp(⟦2-char-id⟧) {
         var ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = this.getJournal();
         if (!⟦2-char-id⟧ || this.hasPendingQuestPopup() || ⟦2-char-id⟧(⟦2-char-id⟧)) return null;
-        const ⟦2-char-id⟧ = "started" === ⟦2-char-id⟧.questCompletionKind ? ⟦2-char-id⟧.active.some((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧.questCompletionQuestId)) : "quest" === ⟦2-char-id⟧.questCompletionKind ? ⟦2-char-id⟧.completed.some((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧.questCompletionQuestId)) : [...ZJ.active, ...ZJ.completed].some((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧.questCompletionQuestId && ⟦2-char-id⟧.subquests.some((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧.questCompletionStepId && "completed" === ⟦2-char-id⟧.status))));
+        const ⟦2-char-id⟧ = "started" === ⟦2-char-id⟧.questCompletionKind ? ⟦2-char-id⟧.active.some((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧.questCompletionQuestId)) : "quest" === ⟦2-char-id⟧.questCompletionKind ? ⟦2-char-id⟧.completed.some((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧.questCompletionQuestId)) : [...dB.active, ...dB.completed].some((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧.questCompletionQuestId && ⟦2-char-id⟧.subquests.some((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧.questCompletionStepId && "completed" === ⟦2-char-id⟧.status))));
         if (!⟦2-char-id⟧) return null;
         if ("quest" === ⟦2-char-id⟧.questCompletionKind && 0 === ⟦2-char-id⟧.active.length && !this.hasPendingQuestPopup()) return {
           kind: "explore"
         };
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.active.find((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧.trackedQuestId)),
-          ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.subquests.find((⟦2-char-id⟧ => "ready" === ⟦2-char-id⟧.status))) && void 0 !== ⟦2-char-id⟧ ? cJ : null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.subquests.find((⟦2-char-id⟧ => "active" === ⟦2-char-id⟧.status));
+          ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.subquests.find((⟦2-char-id⟧ => "ready" === ⟦2-char-id⟧.status))) && void 0 !== ⟦2-char-id⟧ ? TB : null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.subquests.find((⟦2-char-id⟧ => "active" === ⟦2-char-id⟧.status));
         return ⟦2-char-id⟧ ? {
           kind: "step",
           questId: ⟦2-char-id⟧.id,
```

</details>

<details>
<summary>Hunk 35 · Change · +1 / -1</summary>

```diff
@@ -1137,7 +1137,7 @@
       }
       advance() {
         var ⟦2-char-id⟧;
-        this.current = this.hj ? null : null !== (⟦2-char-id⟧ = this.pending.shift()) && void 0 !== ⟦2-char-id⟧ ? JJ : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
+        this.current = this.Dg ? null : null !== (⟦2-char-id⟧ = this.pending.shift()) && void 0 !== ⟦2-char-id⟧ ? BB : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
       }
     }
 
```

</details>

<details>
<summary>Hunk 36 · Change · +7 / -7</summary>

```diff
@@ -1148,23 +1148,23 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       return "skillLevel" === ⟦2-char-id⟧ || "landmark" === ⟦2-char-id⟧ || "npcNote" === ⟦2-char-id⟧
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37517);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37488);
     const ⟦2-char-id⟧ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
       ⟦2-char-id⟧ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
       ⟦2-char-id⟧ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
       ⟦2-char-id⟧ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
       ⟦2-char-id⟧ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37519);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37493);
     const ⟦2-char-id⟧ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
       ⟦2-char-id⟧ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
     const ⟦2-char-id⟧ = ⟦2-char-id⟧.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
     const ⟦2-char-id⟧ = ⟦2-char-id⟧.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
       ⟦2-char-id⟧ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(17759),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(19883),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(22292),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(23818),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(25498);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(17881),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(19944),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(22266),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(23829),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(25517);
     const ⟦2-char-id⟧ = {
       ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
       auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
```

</details>

<details>
<summary>Hunk 37 · Change · +1 / -1</summary>

```diff
@@ -1178,7 +1178,7 @@
       dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
       emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
       enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
-      farm: ⟦2-char-id⟧(25508),
+      farm: ⟦2-char-id⟧(25537),
       farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
       fishing: ⟦2-char-id⟧,
       fishing_1: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 38 · Change · +5 / -5</summary>

```diff
@@ -1260,15 +1260,15 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧.startsWith("npc_") ? Ic : ⟦2-char-id⟧;
+      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧.startsWith("npc_") ? wT : ⟦2-char-id⟧;
       if ("portal" !== ⟦2-char-id⟧) return ⟦2-char-id⟧(⟦2-char-id⟧, "SkyblockMapIcon");
       const ⟦2-char-id⟧ = document.createElement("span");
       ⟦2-char-id⟧.className = "SkyblockMapIcon Portal";
       const ⟦2-char-id⟧ = document.createElement("span");
-      return ⟦2-char-id⟧.className = "SkyblockMapIconTint", ⟦2-char-id⟧.style.maskImage = ⟦2-char-id⟧.style.webkitMaskImage = `url("${Wc}")`, ⟦2-char-id⟧.append(⟦2-char-id⟧(⟦2-char-id⟧, "SkyblockMapIconLayer"), ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧, "SkyblockMapIconLayer SkyblockMapIconShade")), ⟦2-char-id⟧
-    }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37499),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3735);
+      return ⟦2-char-id⟧.className = "SkyblockMapIconTint", ⟦2-char-id⟧.style.maskImage = ⟦2-char-id⟧.style.webkitMaskImage = `url("${rT}")`, ⟦2-char-id⟧.append(⟦2-char-id⟧(⟦2-char-id⟧, "SkyblockMapIconLayer"), ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧, "SkyblockMapIconLayer SkyblockMapIconShade")), ⟦2-char-id⟧
+    }
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37463),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3734);
     const ⟦2-char-id⟧ = [{
       lobes: [3, 4],
       amount: [.04, .055]
```

</details>

<details>
<summary>Hunk 39 · Change · +3 / -3</summary>

```diff
@@ -1317,9 +1317,9 @@
             } = ⟦2-char-id⟧;
             return ⟦2-char-id⟧ + ⟦2-char-id⟧ * Math.sin(⟦2-char-id⟧ * ⟦2-char-id⟧ + ⟦2-char-id⟧)
           }), 1);
-        ⟦2-char-id⟧.push(`${(50+jJ*AJ).toFixed(2)} ${(50+jJ*qJ).toFixed(2)}`)
-      }
-      return `M${eJ.join("L")}Z`
+        ⟦2-char-id⟧.push(`${(50+gB*JB).toFixed(2)} ${(50+gB*YB).toFixed(2)}`)
+      }
+      return `M${pB.join("L")}Z`
     }
     const ⟦2-char-id⟧ = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
     class ⟦2-char-id⟧ {
```

</details>

<details>
<summary>Hunk 40 · Change · +2 / -2</summary>

```diff
@@ -1343,9 +1343,9 @@
         }, this.viewport = {
           width: 0,
           height: 0
-        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.xn = !1, this.mountCompass = ⟦2-char-id⟧ => {
+        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.ND = !1, this.mountCompass = ⟦2-char-id⟧ => {
           var ⟦2-char-id⟧;
-          if (null === (⟦2-char-id⟧ = this.stopLayout) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !⟦2-char-id⟧ || this.xn) return;
+          if (null === (⟦2-char-id⟧ = this.stopLayout) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !⟦2-char-id⟧ || this.ND) return;
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.querySelector(".SkyblockCompassTrack");
           this.compass = {
             root: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 41 · Change · +3 / -3</summary>

```diff
@@ -1361,16 +1361,16 @@
             ⟦2-char-id⟧(), ⟦2-char-id⟧.replaceChildren()
           }, this.render(this.frame)
         }, this.mountTerrain = ⟦2-char-id⟧ => {
-          this.terrain = this.xn ? null : ⟦2-char-id⟧, this.render(this.frame)
+          this.terrain = this.ND ? null : ⟦2-char-id⟧, this.render(this.frame)
         }, this.mountMinimapSearchArea = ⟦2-char-id⟧ => {
           this.mountSearchArea("minimap", ⟦2-char-id⟧)
         }, this.mountMapSearchArea = ⟦2-char-id⟧ => {
           this.mountSearchArea("map", ⟦2-char-id⟧)
         }, this.mountPlayer = ⟦2-char-id⟧ => {
-          this.player = this.xn ? null : ⟦2-char-id⟧, this.render(this.frame)
+          this.player = this.ND ? null : ⟦2-char-id⟧, this.render(this.frame)
         }, this.mountWaypoint = ⟦2-char-id⟧ => {
           var ⟦2-char-id⟧, ⟦2-char-id⟧;
-          if (null === (⟦2-char-id⟧ = this.stopWaypoint) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !⟦2-char-id⟧ || this.xn) return;
+          if (null === (⟦2-char-id⟧ = this.stopWaypoint) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !⟦2-char-id⟧ || this.ND) return;
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.querySelector(".SkyblockQuestWaypointMarker");
           ⟦2-char-id⟧.replaceChildren(⟦2-char-id⟧("quest")), this.markerIcon = "quest", this.waypoint = {
             root: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 42 · Change · +1 / -1</summary>

```diff
@@ -1409,7 +1409,7 @@
           }, ⟦2-char-id⟧(), ⟦2-char-id⟧(), this.render(this.frame)
         }, this.mountWaypointOrigin = ⟦2-char-id⟧ => {
           var ⟦2-char-id⟧;
-          if (null === (⟦2-char-id⟧ = this.stopWaypointOrigin) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = ⟦2-char-id⟧ && !this.xn ? Number(⟦2-char-id⟧.dataset.notificationToken) : null, ⟦2-char-id⟧ && !this.xn && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
+          if (null === (⟦2-char-id⟧ = this.stopWaypointOrigin) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = ⟦2-char-id⟧ && !this.ND ? Number(⟦2-char-id⟧.dataset.notificationToken) : null, ⟦2-char-id⟧ && !this.ND && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
             const ⟦2-char-id⟧ = {
               nameKey: ⟦2-char-id⟧.dataset.waypointNameKey,
               x: 0,
```

</details>

<details>
<summary>Hunk 43 · Change · +3 / -3</summary>

```diff
@@ -1438,20 +1438,20 @@
             ⟦2-char-id⟧ = ⟦2-char-id⟧ ? 1 : 8,
             ⟦2-char-id⟧ = Array.from(document.querySelectorAll(⟦2-char-id⟧), (⟦2-char-id⟧ => {
               var ⟦2-char-id⟧;
-              return (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.querySelector(".MiddleTextTop")) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧).getBoundingClientRect()
+              return (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.querySelector(".MiddleTextTop")) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧).getBoundingClientRect()
             })).filter((⟦2-char-id⟧ => ⟦2-char-id⟧.width > 0 && ⟦2-char-id⟧.height > 0));
           let ⟦2-char-id⟧ = (parseFloat(⟦2-char-id⟧.getPropertyValue("--notchTop")) || 0) + ⟦2-char-id⟧,
             ⟦2-char-id⟧ = "";
           if (⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = window.innerWidth / 2,
               ⟦2-char-id⟧ = ⟦2-char-id⟧.getBoundingClientRect().height,
-              ⟦2-char-id⟧ = [⟦2-char-id⟧, ...AJ.map((⟦2-char-id⟧ => Math.max(⟦2-char-id⟧, ⟦2-char-id⟧.bottom + ⟦2-char-id⟧)))].sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ - ⟦2-char-id⟧));
+              ⟦2-char-id⟧ = [⟦2-char-id⟧, ...JB.map((⟦2-char-id⟧ => Math.max(⟦2-char-id⟧, ⟦2-char-id⟧.bottom + ⟦2-char-id⟧)))].sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ - ⟦2-char-id⟧));
             for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
               let ⟦2-char-id⟧ = ⟦2-char-id⟧ - 8;
               for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.bottom + ⟦2-char-id⟧ <= ⟦2-char-id⟧ || ⟦2-char-id⟧.top >= ⟦2-char-id⟧ + ⟦2-char-id⟧ + ⟦2-char-id⟧ || (⟦2-char-id⟧ = Math.min(⟦2-char-id⟧, ⟦2-char-id⟧.right <= ⟦2-char-id⟧ ? ⟦2-char-id⟧ - ⟦2-char-id⟧.right - 8 : ⟦2-char-id⟧.left - ⟦2-char-id⟧ - 8));
               const ⟦2-char-id⟧ = 2 * ⟦2-char-id⟧ - ⟦2-char-id⟧;
               if (⟦2-char-id⟧ >= 16 * ⟦2-char-id⟧) {
-                ⟦2-char-id⟧ = `${YJ}px`, ⟦2-char-id⟧ = ⟦2-char-id⟧;
+                ⟦2-char-id⟧ = `${oB}px`, ⟦2-char-id⟧ = ⟦2-char-id⟧;
                 break
               }
             }
```

</details>

<details>
<summary>Hunk 44 · Change · +3 / -3</summary>

```diff
@@ -1468,14 +1468,14 @@
           }
           if (!⟦2-char-id⟧)
             for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.right > ⟦2-char-id⟧.left - 8 && ⟦2-char-id⟧.left < ⟦2-char-id⟧.right + 8 && (⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, ⟦2-char-id⟧.bottom + ⟦2-char-id⟧));
-          ⟦2-char-id⟧.style.top = `${qJ}px`, this.compassSize.trackHalfWidth !== ⟦2-char-id⟧ && this.render(this.frame)
+          ⟦2-char-id⟧.style.top = `${YB}px`, this.compassSize.trackHalfWidth !== ⟦2-char-id⟧ && this.render(this.frame)
         }
       }
       mountSearchArea(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        this.searchAreas[⟦2-char-id⟧] = this.xn ? null : ⟦2-char-id⟧, this.render(this.frame)
+        this.searchAreas[⟦2-char-id⟧] = this.ND ? null : ⟦2-char-id⟧, this.render(this.frame)
       }
       render(⟦2-char-id⟧) {
-        if (this.xn) return;
+        if (this.ND) return;
         if (this.frame = ⟦2-char-id⟧, this.compass && (⟦2-char-id⟧(this.compass.root, !⟦2-char-id⟧), ⟦2-char-id⟧)) {
           const ⟦2-char-id⟧ = this.compassSize.trackHalfWidth / 50;
           ⟦2-char-id⟧.compass.cardinals.forEach(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
```

</details>

<details>
<summary>Hunk 45 · Change · +1 / -1</summary>

```diff
@@ -1487,7 +1487,7 @@
             var ⟦2-char-id⟧;
             ⟦2-char-id⟧.add(⟦2-char-id⟧.id);
             let ⟦2-char-id⟧ = this.markers.get(⟦2-char-id⟧.id);
-            ⟦2-char-id⟧ || (⟦2-char-id⟧ = document.createElement("span"), ⟦2-char-id⟧.className = "SkyblockCompassMarker", this.markers.set(⟦2-char-id⟧.id, ⟦2-char-id⟧), this.compass.track.appendChild(⟦2-char-id⟧)), ⟦2-char-id⟧.dataset.icon !== ⟦2-char-id⟧.icon && (⟦2-char-id⟧.dataset.icon = ⟦2-char-id⟧.icon, ⟦2-char-id⟧.replaceChildren(⟦2-char-id⟧(⟦2-char-id⟧.icon))), ⟦2-char-id⟧.style.color = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.colour) && void 0 !== ⟦2-char-id⟧ ? eJ : "", ⟦2-char-id⟧.style.translate = ⟦2-char-id⟧.left * ⟦2-char-id⟧ + "px", ⟦2-char-id⟧.style.zIndex = String(⟦2-char-id⟧.compass.markers.length - ⟦2-char-id⟧), ⟦2-char-id⟧.title !== ⟦2-char-id⟧.name && (⟦2-char-id⟧.title = ⟦2-char-id⟧.name)
+            ⟦2-char-id⟧ || (⟦2-char-id⟧ = document.createElement("span"), ⟦2-char-id⟧.className = "SkyblockCompassMarker", this.markers.set(⟦2-char-id⟧.id, ⟦2-char-id⟧), this.compass.track.appendChild(⟦2-char-id⟧)), ⟦2-char-id⟧.dataset.icon !== ⟦2-char-id⟧.icon && (⟦2-char-id⟧.dataset.icon = ⟦2-char-id⟧.icon, ⟦2-char-id⟧.replaceChildren(⟦2-char-id⟧(⟦2-char-id⟧.icon))), ⟦2-char-id⟧.style.color = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.colour) && void 0 !== ⟦2-char-id⟧ ? pB : "", ⟦2-char-id⟧.style.translate = ⟦2-char-id⟧.left * ⟦2-char-id⟧ + "px", ⟦2-char-id⟧.style.zIndex = String(⟦2-char-id⟧.compass.markers.length - ⟦2-char-id⟧), ⟦2-char-id⟧.title !== ⟦2-char-id⟧.name && (⟦2-char-id⟧.title = ⟦2-char-id⟧.name)
           }));
           for (const [⟦2-char-id⟧, ⟦2-char-id⟧] of this.markers) ⟦2-char-id⟧.has(⟦2-char-id⟧) || (⟦2-char-id⟧.remove(), this.markers.delete(⟦2-char-id⟧));
           this.compass.label.textContent !== ⟦2-char-id⟧.compass.label && (this.compass.label.textContent = ⟦2-char-id⟧.compass.label)
```

</details>

<details>
<summary>Hunk 46 · Change · +2 / -2</summary>

```diff
@@ -1503,8 +1503,8 @@
               ⟦2-char-id⟧.dataset.shapeSeed = ⟦2-char-id⟧.shapeSeed;
               for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.querySelectorAll("path")) ⟦2-char-id⟧.setAttribute("d", this.searchAreaPath.d)
             }
-            ⟦2-char-id⟧.style.left = `${cJ.left}%`, ⟦2-char-id⟧.style.top = `${cJ.top}%`, ⟦2-char-id⟧.style.width = `${cJ.width}%`, ⟦2-char-id⟧.style.height = `${cJ.height}%`
-          } if (this.player && (⟦2-char-id⟧(this.player, !(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.player) || ⟦2-char-id⟧.player.hidden), null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.player && (this.player.style.left = `${JJ.player.left}%`, this.player.style.top = `${JJ.player.top}%`, this.player.style.setProperty("--map-player-rotation", ⟦2-char-id⟧.player.rotation))), this.waypoint) {
+            ⟦2-char-id⟧.style.left = `${TB.left}%`, ⟦2-char-id⟧.style.top = `${TB.top}%`, ⟦2-char-id⟧.style.width = `${TB.width}%`, ⟦2-char-id⟧.style.height = `${TB.height}%`
+          } if (this.player && (⟦2-char-id⟧(this.player, !(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.player) || ⟦2-char-id⟧.player.hidden), null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.player && (this.player.style.left = `${BB.player.left}%`, this.player.style.top = `${BB.player.top}%`, this.player.style.setProperty("--map-player-rotation", ⟦2-char-id⟧.player.rotation))), this.waypoint) {
           const {
             root: ⟦2-char-id⟧,
             marker: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 47 · Change · +5 / -5</summary>

```diff
@@ -1529,18 +1529,18 @@
                   ⟦2-char-id⟧ = -⟦2-char-id⟧.nearness * (⟦2-char-id⟧ * ⟦2-char-id⟧ + ⟦2-char-id⟧.width / 2),
                   ⟦2-char-id⟧ = ⟦2-char-id⟧.nearness * (⟦2-char-id⟧ * ⟦2-char-id⟧ + ⟦2-char-id⟧.height / 2);
                 return {
-                  ...JJ,
+                  ...BB,
                   text: {
                     x: ⟦2-char-id⟧.text.x + ⟦2-char-id⟧ / ⟦2-char-id⟧.width * 100,
                     y: ⟦2-char-id⟧.text.y + ⟦2-char-id⟧ / ⟦2-char-id⟧.height * 100
                   }
                 }
               }(⟦2-char-id⟧.waypoint, this.waypointMarkerSize, this.viewport) : ⟦2-char-id⟧.waypoint,
-              ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧, ⟦2-char-id⟧, this.viewport),
+              ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧, ⟦2-char-id⟧, this.viewport),
               ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧ * (3 - 2 * ⟦2-char-id⟧),
-              ⟦2-char-id⟧ = ⟦2-char-id⟧ < 1 ? ⟦2-char-id⟧.x + (⟦2-char-id⟧.x - ⟦2-char-id⟧.x) * DJ : ⟦2-char-id⟧.x,
-              ⟦2-char-id⟧ = ⟦2-char-id⟧ < 1 ? ⟦2-char-id⟧.y + (⟦2-char-id⟧.y - ⟦2-char-id⟧.y) * DJ : ⟦2-char-id⟧.y;
-            ⟦2-char-id⟧.style.translate = `${sJ}vw ${nJ}vh`, ⟦2-char-id⟧.style.clipPath = `inset(${cJ.top}px ${cJ.x}px ${cJ.bottom}px)`, ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ < 1 || !⟦2-char-id⟧.waypoint.text), ⟦2-char-id⟧.style.opacity = String(1 - ⟦2-char-id⟧.waypoint.nearness), ⟦2-char-id⟧.waypoint.text && (⟦2-char-id⟧.style.translate = `${JJ.waypoint.text.x}vw ${JJ.waypoint.text.y}vh`), ⟦2-char-id⟧.textContent !== ⟦2-char-id⟧.waypoint.name && (⟦2-char-id⟧.textContent = ⟦2-char-id⟧.waypoint.name), this.markerIcon !== ⟦2-char-id⟧.waypoint.markerIcon && (this.markerIcon = ⟦2-char-id⟧.waypoint.markerIcon, ⟦2-char-id⟧.replaceChildren(⟦2-char-id⟧(this.markerIcon))), ⟦2-char-id⟧.textContent !== ⟦2-char-id⟧.waypoint.distance && (⟦2-char-id⟧.textContent = ⟦2-char-id⟧.waypoint.distance), ⟦2-char-id⟧(⟦2-char-id⟧, null === ⟦2-char-id⟧.waypoint.hint), null !== ⟦2-char-id⟧.waypoint.hint && ⟦2-char-id⟧.textContent !== ⟦2-char-id⟧.waypoint.hint && (⟦2-char-id⟧.textContent = ⟦2-char-id⟧.waypoint.hint)
+              ⟦2-char-id⟧ = ⟦2-char-id⟧ < 1 ? ⟦2-char-id⟧.x + (⟦2-char-id⟧.x - ⟦2-char-id⟧.x) * LB : ⟦2-char-id⟧.x,
+              ⟦2-char-id⟧ = ⟦2-char-id⟧ < 1 ? ⟦2-char-id⟧.y + (⟦2-char-id⟧.y - ⟦2-char-id⟧.y) * LB : ⟦2-char-id⟧.y;
+            ⟦2-char-id⟧.style.translate = `${OB}vw ${DB}vh`, ⟦2-char-id⟧.style.clipPath = `inset(${TB.top}px ${TB.x}px ${TB.bottom}px)`, ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ < 1 || !⟦2-char-id⟧.waypoint.text), ⟦2-char-id⟧.style.opacity = String(1 - ⟦2-char-id⟧.waypoint.nearness), ⟦2-char-id⟧.waypoint.text && (⟦2-char-id⟧.style.translate = `${BB.waypoint.text.x}vw ${BB.waypoint.text.y}vh`), ⟦2-char-id⟧.textContent !== ⟦2-char-id⟧.waypoint.name && (⟦2-char-id⟧.textContent = ⟦2-char-id⟧.waypoint.name), this.markerIcon !== ⟦2-char-id⟧.waypoint.markerIcon && (this.markerIcon = ⟦2-char-id⟧.waypoint.markerIcon, ⟦2-char-id⟧.replaceChildren(⟦2-char-id⟧(this.markerIcon))), ⟦2-char-id⟧.textContent !== ⟦2-char-id⟧.waypoint.distance && (⟦2-char-id⟧.textContent = ⟦2-char-id⟧.waypoint.distance), ⟦2-char-id⟧(⟦2-char-id⟧, null === ⟦2-char-id⟧.waypoint.hint), null !== ⟦2-char-id⟧.waypoint.hint && ⟦2-char-id⟧.textContent !== ⟦2-char-id⟧.waypoint.hint && (⟦2-char-id⟧.textContent = ⟦2-char-id⟧.waypoint.hint)
           }
         }
       }
```

</details>

<details>
<summary>Hunk 48 · Change · +1 / -1</summary>

```diff
@@ -1549,7 +1549,7 @@
         this.mountWaypointOrigin(null), this.render(null), null === (⟦2-char-id⟧ = this.stopLayout) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.call(this), this.stopLayout = null, null === (⟦2-char-id⟧ = this.stopWaypoint) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
           minimap: null,
           map: null
-        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.xn = !0
+        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.ND = !0
       }
     }
 
```

</details>

<details>
<summary>Hunk 49 · Change · +2 / -2</summary>

```diff
@@ -1564,13 +1564,13 @@
     };
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-        this.map = ⟦2-char-id⟧, this.quests = ⟦2-char-id⟧, this.compass = ⟦2-char-id⟧, this.display = new ⟦2-char-id⟧, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.xn = !1, this.snapshot = null, this.texts = new Map, this.translate = ⟦2-char-id⟧
+        this.map = ⟦2-char-id⟧, this.quests = ⟦2-char-id⟧, this.compass = ⟦2-char-id⟧, this.display = new ⟦2-char-id⟧, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.ND = !1, this.snapshot = null, this.texts = new Map, this.translate = ⟦2-char-id⟧
       }
       setTranslator(⟦2-char-id⟧, ⟦2-char-id⟧) {
         this.translate = ⟦2-char-id⟧, this.locale = ⟦2-char-id⟧, this.metresFormat = new Intl.NumberFormat(⟦2-char-id⟧), this.texts.clear()
       }
       translateCached(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        const ⟦2-char-id⟧ = void 0 === ⟦2-char-id⟧ ? JJ : `${JJ} ${cJ}`;
+        const ⟦2-char-id⟧ = void 0 === ⟦2-char-id⟧ ? BB : `${BB} ${TB}`;
         let ⟦2-char-id⟧ = this.texts.get(⟦2-char-id⟧);
         return void 0 === ⟦2-char-id⟧ && (this.texts.size >= 500 && this.texts.clear(), ⟦2-char-id⟧ = this.translate(⟦2-char-id⟧, void 0 === ⟦2-char-id⟧ ? void 0 : {
           distance: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 50 · Change · +1 / -1</summary>

```diff
@@ -1580,7 +1580,7 @@
         return this.snapshot
       }
       afterRender(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-        if (this.xn) return;
+        if (this.ND) return;
         if (!⟦2-char-id⟧) return this.snapshot = null, void this.display.render(null);
         const ⟦2-char-id⟧ = this.map.getSnapshot().map,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.cameraHeading,
```

</details>

<details>
<summary>Hunk 51 · Change · +2 / -2</summary>

```diff
@@ -1594,14 +1594,14 @@
           for (const ⟦2-char-id⟧ of this.compass.frame(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)) {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.offset, ⟦2-char-id⟧);
             null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.push({
-              ...UJ,
+              ...yB,
               left: ⟦2-char-id⟧
             })
           }
         const ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = [],
               ⟦2-char-id⟧ = ⟦2-char-id⟧ => "quest" === ⟦2-char-id⟧.kind ? ⟦2-char-id⟧.distance - 1 : ⟦2-char-id⟧.distance,
-              ⟦2-char-id⟧ = [...JJ].sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧(⟦2-char-id⟧) - ⟦2-char-id⟧(⟦2-char-id⟧) || ⟦2-char-id⟧.id.localeCompare(⟦2-char-id⟧.id)));
+              ⟦2-char-id⟧ = [...BB].sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧(⟦2-char-id⟧) - ⟦2-char-id⟧(⟦2-char-id⟧) || ⟦2-char-id⟧.id.localeCompare(⟦2-char-id⟧.id)));
             for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
               let ⟦2-char-id⟧ = !1;
               if ("quest" !== ⟦2-char-id⟧.kind)
```

</details>

<details>
<summary>Hunk 52 · Change · +1 / -1</summary>

```diff
@@ -1621,7 +1621,7 @@
           }(⟦2-char-id⟧),
           ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
             var ⟦2-char-id⟧;
-            return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.displayName) && void 0 !== ⟦2-char-id⟧ ? cJ : this.translateCached(⟦2-char-id⟧.nameKey)
+            return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.displayName) && void 0 !== ⟦2-char-id⟧ ? TB : this.translateCached(⟦2-char-id⟧.nameKey)
           },
           ⟦2-char-id⟧ = {
             compass: {
```

</details>

<details>
<summary>Hunk 53 · Change · +3 / -3</summary>

```diff
@@ -1637,14 +1637,14 @@
                   name: ⟦2-char-id⟧,
                   bearing: ⟦2-char-id⟧
                 } = ⟦2-char-id⟧;
-                const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.c.computeShortestRotation(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧);
+                const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.e.computeShortestRotation(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧);
                 return {
                   name: ⟦2-char-id⟧,
-                  left: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? FJ : 0,
+                  left: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? VB : 0,
                   hidden: null === ⟦2-char-id⟧
                 }
               })),
-              label: ⟦2-char-id⟧ ? `${sJ(DJ)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",EJ(DJ.distance,this.locale))}` : ""
+              label: ⟦2-char-id⟧ ? `${OB(LB)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",tB(LB.distance,this.locale))}` : ""
             },
             minimap: null,
             searchArea: null,
```

</details>

<details>
<summary>Hunk 54 · Change · +1 / -1</summary>

```diff
@@ -1661,7 +1661,7 @@
               const [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧;
               return {
                 rotation: ⟦2-char-id⟧,
-                transform: `rotate(${qJ}rad) translate(-${UJ}%, -${XJ}%)`
+                transform: `rotate(${YB}rad) translate(-${yB}%, -${lB}%)`
               }
             }(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.background.bounds);
           ⟦2-char-id⟧.minimap = {
```

</details>

<details>
<summary>Hunk 55 · Change · +2 / -2</summary>

```diff
@@ -1694,13 +1694,13 @@
         const ⟦2-char-id⟧ = this.quests.getNotificationSnapshot(),
           ⟦2-char-id⟧ = "completion" === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.phase) && !⟦2-char-id⟧(⟦2-char-id⟧.kind);
         if (⟦2-char-id⟧ && !⟦2-char-id⟧) {
-          const ⟦2-char-id⟧ = Math.hypot(...fJ.position.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ - ⟦2-char-id⟧[⟦2-char-id⟧]))),
+          const ⟦2-char-id⟧ = Math.hypot(...HB.position.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ - ⟦2-char-id⟧[⟦2-char-id⟧]))),
             ⟦2-char-id⟧ = Math.round(⟦2-char-id⟧),
             ⟦2-char-id⟧ = "talk" === ⟦2-char-id⟧.questMarkerIcon ? Math.min(1, Math.max(0, (10 - ⟦2-char-id⟧) / 5)) : 0,
             ⟦2-char-id⟧ = ⟦2-char-id⟧.projectWorldPosToViewport(⟦2-char-id⟧.position),
             ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧.projectWorldPosToViewport([⟦2-char-id⟧.position[0], ⟦2-char-id⟧.position[1] - 1, ⟦2-char-id⟧.position[2]]);
           ⟦2-char-id⟧.waypoint = {
-            ...ZJ.projectWorldPosToScreenPos(⟦2-char-id⟧.position),
+            ...dB.projectWorldPosToScreenPos(⟦2-char-id⟧.position),
             text: ⟦2-char-id⟧,
             nearness: ⟦2-char-id⟧ * ⟦2-char-id⟧ * (3 - 2 * ⟦2-char-id⟧),
             blockHeight: ⟦2-char-id⟧ && ⟦2-char-id⟧ ? ⟦2-char-id⟧.y - ⟦2-char-id⟧.y : null,
```

</details>

<details>
<summary>Hunk 56 · Change · +1 / -1</summary>

```diff
@@ -1715,7 +1715,7 @@
         this.snapshot = ⟦2-char-id⟧, this.display.render(⟦2-char-id⟧)
       }
       dispose() {
-        this.xn = !0, this.snapshot = null, this.display.dispose()
+        this.ND = !0, this.snapshot = null, this.display.dispose()
       }
     }
     const ⟦2-char-id⟧ = "skyblockSkillsView";
```

</details>

<details>
<summary>Hunk 57 · Change · +2 / -2</summary>

```diff
@@ -1742,8 +1742,8 @@
       text(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = this.skillText.get(⟦2-char-id⟧);
         return ⟦2-char-id⟧ || (⟦2-char-id⟧ = {
-          label: this.translate(`skyblockGame:${JJ}`),
-          description: this.translate(`skyblockGame:${JJ}Description`)
+          label: this.translate(`skyblockGame:${BB}`),
+          description: this.translate(`skyblockGame:${BB}Description`)
         }, this.skillText.set(⟦2-char-id⟧, ⟦2-char-id⟧)), ⟦2-char-id⟧
       }
       sources(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 58 · Change · +1 / -1</summary>

```diff
@@ -1763,7 +1763,7 @@
           xp: this.number(⟦2-char-id⟧["Wheat|FreshlyGrown"])
         }), ⟦2-char-id⟧("skyblockGame:terrainFarmingSource", {
           xp: this.number(2)
-        }), ⟦2-char-id⟧("skyblockGame:noYoungCropXp")] : Object.entries("mining" === ⟦2-char-id⟧ ? sc : ⟦2-char-id⟧).map((⟦2-char-id⟧ => {
+        }), ⟦2-char-id⟧("skyblockGame:noYoungCropXp")] : Object.entries("mining" === ⟦2-char-id⟧ ? OT : ⟦2-char-id⟧).map((⟦2-char-id⟧ => {
           let [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
           return ⟦2-char-id⟧("skyblockGame:itemXpSource", {
             item: this.itemName(⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 59 · Change · +1 / -1</summary>

```diff
@@ -1781,7 +1781,7 @@
         })
       }
       ⟦2-char-id⟧(⟦2-char-id⟧) {
-        if (!this.xn) {
+        if (!this.ND) {
           if ("snapshot" === ⟦2-char-id⟧.kind) this.progress = ⟦2-char-id⟧.progress, this.pending.clear(), this.recent = null;
           else if ("award" === ⟦2-char-id⟧.kind && this.progress) {
             const {
```

</details>

<details>
<summary>Hunk 60 · Change · +2 / -2</summary>

```diff
@@ -1807,10 +1807,10 @@
         }
       }
       predictBlock(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-        if (!this.progress || this.xn || ⟦2-char-id⟧) return;
+        if (!this.progress || this.ND || ⟦2-char-id⟧) return;
         const ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.split("|")[0];
-          return "Air" === ⟦2-char-id⟧ || ⟦2-char-id⟧ === `Barkless ${JJ}` ? Object.hasOwn(⟦2-char-id⟧, ⟦2-char-id⟧) ? {
+          return "Air" === ⟦2-char-id⟧ || ⟦2-char-id⟧ === `Barkless ${BB}` ? Object.hasOwn(⟦2-char-id⟧, ⟦2-char-id⟧) ? {
             skill: "foraging",
             amount: ⟦2-char-id⟧[⟦2-char-id⟧]
           } : "Air" !== ⟦2-char-id⟧ ? null : Object.hasOwn(⟦2-char-id⟧, ⟦2-char-id⟧) ? {
```

</details>

<details>
<summary>Hunk 61 · Change · +1 / -1</summary>

```diff
@@ -1835,7 +1835,7 @@
         if (this.pending.has(⟦2-char-id⟧)) return;
         const ⟦2-char-id⟧ = this.predictedProgress(⟦2-char-id⟧.skill).totalXp + ⟦2-char-id⟧.amount;
         Number.isSafeInteger(⟦2-char-id⟧) && (this.pending.set(⟦2-char-id⟧, {
-          ...FJ,
+          ...VB,
           expires: this.now() + 2⟦2-char-id⟧
         }), this.recordGain(⟦2-char-id⟧.skill, 0), this.emit())
       }
```

</details>

<details>
<summary>Hunk 62 · Change · +1 / -1</summary>

```diff
@@ -1843,7 +1843,7 @@
         this.pending.delete(⟦2-char-id⟧.join(",")) && this.emit()
       }
       ⟦2-char-id⟧() {
-        if (this.xn) return;
+        if (this.ND) return;
         let ⟦2-char-id⟧ = !1;
         for (const [⟦2-char-id⟧, ⟦2-char-id⟧] of this.pending) ⟦2-char-id⟧.expires <= this.now() && (this.pending.delete(⟦2-char-id⟧), ⟦2-char-id⟧ = !0);
         this.recent && this.recent.expires <= this.now() && (this.recent = null, ⟦2-char-id⟧ = !0), ⟦2-char-id⟧ && this.emit()
```

</details>

<details>
<summary>Hunk 63 · Change · +1 / -1</summary>

```diff
@@ -1860,7 +1860,7 @@
           skill: ⟦2-char-id⟧,
           confirmed: ⟦2-char-id⟧ + ⟦2-char-id⟧,
           expires: this.now() + 3⟦2-char-id⟧,
-          levelUpToken: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? UJ : ⟦2-char-id⟧
+          levelUpToken: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? yB : ⟦2-char-id⟧
         }
       }
       pendingXp(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 64 · Change · +2 / -2</summary>

```diff
@@ -1906,14 +1906,14 @@
           enabled: this.isEnabled(),
           open: this.open,
           skills: ⟦2-char-id⟧,
-          detail: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.selected))) && void 0 !== ⟦2-char-id⟧ ? JJ : null,
+          detail: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.selected))) && void 0 !== ⟦2-char-id⟧ ? BB : null,
           overallLevel: this.progress ? ⟦2-char-id⟧.reduce(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ + this.predictedProgress(⟦2-char-id⟧).level), 0) : null,
           hud: ⟦2-char-id⟧ && ⟦2-char-id⟧ > 0 ? {
             skill: ⟦2-char-id⟧,
             gain: this.translate("skyblockGame:xpGain", {
               xp: this.number(⟦2-char-id⟧)
             }),
-            levelUpToken: null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.recent) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.levelUpToken) && void 0 !== ⟦2-char-id⟧ ? cJ : null,
+            levelUpToken: null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.recent) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.levelUpToken) && void 0 !== ⟦2-char-id⟧ ? TB : null,
             colour: ⟦2-char-id⟧(⟦2-char-id⟧.id)
           } : null
         }
```

</details>

<details>
<summary>Hunk 65 · Change · +2 / -2</summary>

```diff
@@ -1947,14 +1947,14 @@
           compassTarget: null
         }, this.getNotificationSnapshot = () => this.notificationSnapshot, this.showTracked = () => {
           var ⟦2-char-id⟧, ⟦2-char-id⟧;
-          this.selected = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.authoritative) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.trackedQuestId) && void 0 !== ⟦2-char-id⟧ ? JJ : null, this.show()
+          this.selected = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.authoritative) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.trackedQuestId) && void 0 !== ⟦2-char-id⟧ ? BB : null, this.show()
         }, this.select = ⟦2-char-id⟧ => {
           this.selected = ⟦2-char-id⟧, this.emit()
         }, this.toggleCompleted = () => {
           this.completedExpanded = !this.completedExpanded, this.emit()
         }, this.trackSelected = () => {
           const ⟦2-char-id⟧ = this.snapshot.detail;
-          !this.xn && null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(⟦2-char-id⟧.id), this.emit())
+          !this.ND && null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(⟦2-char-id⟧.id), this.emit())
         }, this.viewDialogue = () => {
           const ⟦2-char-id⟧ = this.snapshot.detail;
           var ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 66 · Change · +4 / -4</summary>

```diff
@@ -1963,18 +1963,18 @@
       }
       getTrackedQuestId() {
         var ⟦2-char-id⟧, ⟦2-char-id⟧;
-        return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.authoritative) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.trackedQuestId) && void 0 !== ⟦2-char-id⟧ ? JJ : null
+        return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.authoritative) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.trackedQuestId) && void 0 !== ⟦2-char-id⟧ ? BB : null
       }
       notify(⟦2-char-id⟧) {
-        !this.xn && this.notifications.enqueue(⟦2-char-id⟧) && this.emitNotification()
+        !this.ND && this.notifications.enqueue(⟦2-char-id⟧) && this.emitNotification()
       }
       setNotificationsHeld(⟦2-char-id⟧) {
         (this.notifications.setHeld(⟦2-char-id⟧) || ⟦2-char-id⟧) && this.emitNotification()
       }
       ⟦2-char-id⟧() {
         var ⟦2-char-id⟧, ⟦2-char-id⟧;
-        if (this.xn) return;
-        this.notifications.Hh() && this.emitNotification();
+        if (this.ND) return;
+        this.notifications.dL() && this.emitNotification();
         let ⟦2-char-id⟧ = !1;
         this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, ⟦2-char-id⟧ = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, ⟦2-char-id⟧ = !0);
         const ⟦2-char-id⟧ = ⟦2-char-id⟧(this.authoritative);
```

</details>

<details>
<summary>Hunk 67 · Change · +1 / -1</summary>

```diff
@@ -1985,7 +1985,7 @@
         this.translate = ⟦2-char-id⟧, this.locale = ⟦2-char-id⟧, this.emitNotification(), this.emit()
       }
       ⟦2-char-id⟧(⟦2-char-id⟧) {
-        if (!this.xn)
+        if (!this.ND)
           if ("completion" === ⟦2-char-id⟧.kind) this.notify(⟦2-char-id⟧.questCompletion);
           else if ("landmark" === ⟦2-char-id⟧.kind) this.notify({
           questCompletionKind: "landmark",
```

</details>

<details>
<summary>Hunk 68 · Change · +3 / -3</summary>

```diff
@@ -1997,9 +1997,9 @@
             questCompletionKind: "npcNote",
             titleKey: ⟦2-char-id⟧.npcNoteTitleKey,
             textKey: ⟦2-char-id⟧.npcNoteTextKey,
-            params: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.npcNoteParams) && void 0 !== ⟦2-char-id⟧ ? cJ : {},
-            nameKeys: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.npcNoteNameKeys) && void 0 !== ⟦2-char-id⟧ ? ZJ : {},
-            iconItem: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.npcNoteIconItem) && void 0 !== ⟦2-char-id⟧ ? FJ : null
+            params: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.npcNoteParams) && void 0 !== ⟦2-char-id⟧ ? TB : {},
+            nameKeys: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.npcNoteNameKeys) && void 0 !== ⟦2-char-id⟧ ? dB : {},
+            iconItem: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.npcNoteIconItem) && void 0 !== ⟦2-char-id⟧ ? VB : null
           })
         } else if ("open" === ⟦2-char-id⟧.kind) this.show();
         else if ("guidance" === ⟦2-char-id⟧.kind) this.waypoint = ⟦2-char-id⟧.waypoint, this.compassTarget = ⟦2-char-id⟧.compassTarget, this.snapshot = {
```

</details>

<details>
<summary>Hunk 69 · Change · +1 / -1</summary>

```diff
@@ -2008,7 +2008,7 @@
           compassTarget: this.compassTarget
         };
         else if ("snapshot" === ⟦2-char-id⟧.kind) {
-          this.authoritative = ⟦2-char-id⟧.snapshot, this.notifications.Hh() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
+          this.authoritative = ⟦2-char-id⟧.snapshot, this.notifications.dL() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
           const ⟦2-char-id⟧ = this.trackedStepPulse;
           this.updateTrackedStepPulse(⟦2-char-id⟧.snapshot), this.emit(), this.trackedStepPulse > ⟦2-char-id⟧ && this.onTrackedStepFinished()
         }
```

</details>

<details>
<summary>Hunk 70 · Change · +3 / -3</summary>

```diff
@@ -2017,17 +2017,17 @@
         this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
       }
       emitNotification() {
-        this.xn || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
+        this.ND || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
       }
       questTextTranslator() {
         var ⟦2-char-id⟧;
-        return null !== (⟦2-char-id⟧ = this.translateWithIcons) && void 0 !== ⟦2-char-id⟧ ? JJ : this.translate
+        return null !== (⟦2-char-id⟧ = this.translateWithIcons) && void 0 !== ⟦2-char-id⟧ ? BB : this.translate
       }
       clockText(⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.questClock;
         if (!⟦2-char-id⟧) return null;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.elapsedMs + (⟦2-char-id⟧.running ? this.now() - this.receivedAt : 0);
-        return void 0 === ⟦2-char-id⟧.countdownFromMs ? (0, ⟦2-char-id⟧.o)(⟦2-char-id⟧, !1) : (0, ⟦2-char-id⟧.o)(1⟦2-char-id⟧ * Math.ceil(Math.max(0, ⟦2-char-id⟧.countdownFromMs - ⟦2-char-id⟧) / 1⟦2-char-id⟧), !1)
+        return void 0 === ⟦2-char-id⟧.countdownFromMs ? (0, ⟦2-char-id⟧.n)(⟦2-char-id⟧, !1) : (0, ⟦2-char-id⟧.n)(1⟦2-char-id⟧ * Math.ceil(Math.max(0, ⟦2-char-id⟧.countdownFromMs - ⟦2-char-id⟧) / 1⟦2-char-id⟧), !1)
       }
       updateTrackedStepPulse(⟦2-char-id⟧) {
         var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 71 · Change · +2 / -2</summary>

```diff
@@ -2052,8 +2052,8 @@
         this.trackedSteps = {
           questId: ⟦2-char-id⟧.id,
           progress: ⟦2-char-id⟧.progress,
-          finished: new Set([...null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.finished) && void 0 !== ⟦2-char-id⟧ ? ZJ : [], ...XJ]),
-          unlocked: new Set([...null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.unlocked) && void 0 !== ⟦2-char-id⟧ ? FJ : [], ...AJ])
+          finished: new Set([...null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.finished) && void 0 !== ⟦2-char-id⟧ ? dB : [], ...lB]),
+          unlocked: new Set([...null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.unlocked) && void 0 !== ⟦2-char-id⟧ ? VB : [], ...JB])
         }
       }
       entry(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 72 · Change · +1 / -1</summary>

```diff
@@ -2063,7 +2063,7 @@
           ⟦2-char-id⟧ = this.questTextTranslator(),
           ⟦2-char-id⟧ = ⟦2-char-id⟧.subquests.map((⟦2-char-id⟧ => {
             var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-            const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.handInNpcName) && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧.giverName,
+            const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.handInNpcName) && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧.giverName,
               ⟦2-char-id⟧ = this.translate("skyblockGame:progress", {
                 current: ⟦2-char-id⟧.progress.toLocaleString(this.locale),
                 target: ⟦2-char-id⟧.target.toLocaleString(this.locale)
```

</details>

<details>
<summary>Hunk 73 · Change · +1 / -1</summary>

```diff
@@ -2085,7 +2085,7 @@
               statusLabel: ⟦2-char-id⟧ ? this.translate(⟦2-char-id⟧, {
                 npc: ⟦2-char-id⟧
               }) : ⟦2-char-id⟧,
-              iconItem: ⟦2-char-id⟧ && null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.questIconItem) && void 0 !== ⟦2-char-id⟧ ? FJ : null,
+              iconItem: ⟦2-char-id⟧ && null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.questIconItem) && void 0 !== ⟦2-char-id⟧ ? VB : null,
               barPercent: "active" === ⟦2-char-id⟧.status && ⟦2-char-id⟧.showsProgressBar ? Math.min(100, 100 * ⟦2-char-id⟧.progress / ⟦2-char-id⟧.target) : null,
               justFinished: ⟦2-char-id⟧ && null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.trackedChange) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.finished.has(⟦2-char-id⟧.id)) && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧,
               justUnlocked: ⟦2-char-id⟧ && null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.trackedChange) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.unlocked.has(⟦2-char-id⟧.id)) && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 74 · Change · +1 / -1</summary>

```diff
@@ -2106,7 +2106,7 @@
           trackLabel: this.translate(⟦2-char-id⟧ ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : ⟦2-char-id⟧ ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
           canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== ⟦2-char-id⟧.id,
           subquests: ⟦2-char-id⟧,
-          focusStep: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => null !== ⟦2-char-id⟧.barPercent))) && void 0 !== ⟦2-char-id⟧ ? FJ : null,
+          focusStep: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => null !== ⟦2-char-id⟧.barPercent))) && void 0 !== ⟦2-char-id⟧ ? VB : null,
           clock: this.clockText(⟦2-char-id⟧)
         }
       }
```

</details>

<details>
<summary>Hunk 75 · Change · +6 / -6</summary>

```diff
@@ -2115,20 +2115,20 @@
       }
       buildSnapshot() {
         var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-        const ⟦2-char-id⟧ = [...null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.authoritative) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.active) && void 0 !== ⟦2-char-id⟧ ? JJ : [], ...null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.authoritative) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.completed) && void 0 !== ⟦2-char-id⟧ ? ZJ : []];
+        const ⟦2-char-id⟧ = [...null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.authoritative) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.active) && void 0 !== ⟦2-char-id⟧ ? BB : [], ...null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.authoritative) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.completed) && void 0 !== ⟦2-char-id⟧ ? dB : []];
         var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-        ⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧.id === this.selected)) || (this.selected = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.authoritative) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.trackedQuestId) && void 0 !== ⟦2-char-id⟧ ? DJ : null === (⟦2-char-id⟧ = ⟦2-char-id⟧[0]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.id) && void 0 !== ⟦2-char-id⟧ ? hJ : null);
-        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.authoritative) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.active.map((⟦2-char-id⟧ => this.entry(⟦2-char-id⟧, !1)))) && void 0 !== ⟦2-char-id⟧ ? UJ : [];
+        ⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧.id === this.selected)) || (this.selected = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.authoritative) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.trackedQuestId) && void 0 !== ⟦2-char-id⟧ ? LB : null === (⟦2-char-id⟧ = ⟦2-char-id⟧[0]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.id) && void 0 !== ⟦2-char-id⟧ ? kB : null);
+        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.authoritative) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.active.map((⟦2-char-id⟧ => this.entry(⟦2-char-id⟧, !1)))) && void 0 !== ⟦2-char-id⟧ ? yB : [];
         ⟦2-char-id⟧.sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => Number(⟦2-char-id⟧.tracked) - Number(⟦2-char-id⟧.tracked)));
-        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.authoritative) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.completed.map((⟦2-char-id⟧ => this.entry(⟦2-char-id⟧, !0)))) && void 0 !== ⟦2-char-id⟧ ? XJ : [];
+        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.authoritative) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.completed.map((⟦2-char-id⟧ => this.entry(⟦2-char-id⟧, !0)))) && void 0 !== ⟦2-char-id⟧ ? lB : [];
         return {
           enabled: this.isEnabled(),
           open: this.open,
           active: ⟦2-char-id⟧,
           completed: ⟦2-char-id⟧,
           completedExpanded: this.completedExpanded,
-          detail: null !== (⟦2-char-id⟧ = [...GJ, ...fJ].find((⟦2-char-id⟧ => ⟦2-char-id⟧.selected))) && void 0 !== ⟦2-char-id⟧ ? qJ : null,
-          tracked: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.tracked))) && void 0 !== ⟦2-char-id⟧ ? jJ : null,
+          detail: null !== (⟦2-char-id⟧ = [...uB, ...HB].find((⟦2-char-id⟧ => ⟦2-char-id⟧.selected))) && void 0 !== ⟦2-char-id⟧ ? YB : null,
+          tracked: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.tracked))) && void 0 !== ⟦2-char-id⟧ ? gB : null,
           trackedStepPulse: this.trackedStepPulse,
           waypoint: this.waypoint,
           compassTarget: this.compassTarget
```

</details>

<details>
<summary>Hunk 76 · Change · +1 / -1</summary>

```diff
@@ -2138,7 +2138,7 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
-      return null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.active.find((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧.trackedQuestId))) && void 0 !== ⟦2-char-id⟧ ? cJ : null
+      return null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.active.find((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧.trackedQuestId))) && void 0 !== ⟦2-char-id⟧ ? TB : null
     }
     const ⟦2-char-id⟧ = "skyblockDungeonsView";
     class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
```

</details>

<details>
<summary>Hunk 77 · Change · +1 / -1</summary>

```diff
@@ -2169,7 +2169,7 @@
       }
       ⟦2-char-id⟧(⟦2-char-id⟧) {
         var ⟦2-char-id⟧, ⟦2-char-id⟧;
-        if (!this.xn) return "open" === ⟦2-char-id⟧.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== ⟦2-char-id⟧.kind ? "snapshot" === ⟦2-char-id⟧.kind && (this.authoritative = ⟦2-char-id⟧.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.pickerEntry()) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.difficulties.length) && void 0 !== ⟦2-char-id⟧ ? cJ : 1) - 1)), null === ⟦2-char-id⟧.snapshot && this.open ? this.close() : this.emit()) : this.choose(⟦2-char-id⟧.chooseDungeonId))
+        if (!this.ND) return "open" === ⟦2-char-id⟧.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== ⟦2-char-id⟧.kind ? "snapshot" === ⟦2-char-id⟧.kind && (this.authoritative = ⟦2-char-id⟧.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.pickerEntry()) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.difficulties.length) && void 0 !== ⟦2-char-id⟧ ? TB : 1) - 1)), null === ⟦2-char-id⟧.snapshot && this.open ? this.close() : this.emit()) : this.choose(⟦2-char-id⟧.chooseDungeonId))
       }
       dispose() {
         this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
```

</details>

<details>
<summary>Hunk 78 · Change · +6 / -6</summary>

```diff
@@ -2180,24 +2180,24 @@
       choose(⟦2-char-id⟧) {
         var ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.authoritative) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.dungeons.find((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧));
-        void 0 !== ⟦2-char-id⟧ ? this.open && this.pickerDungeonId === ⟦2-char-id⟧ || (this.pickerDungeonId = ⟦2-char-id⟧, this.pageIndex = Math.max(0, ⟦2-char-id⟧.difficulties.findLastIndex((⟦2-char-id⟧ => null !== ⟦2-char-id⟧.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${JJ}`)
+        void 0 !== ⟦2-char-id⟧ ? this.open && this.pickerDungeonId === ⟦2-char-id⟧ || (this.pickerDungeonId = ⟦2-char-id⟧, this.pageIndex = Math.max(0, ⟦2-char-id⟧.difficulties.findLastIndex((⟦2-char-id⟧ => null !== ⟦2-char-id⟧.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${BB}`)
       }
       turnTo(⟦2-char-id⟧) {
         var ⟦2-char-id⟧, ⟦2-char-id⟧;
-        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.pickerEntry()) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.difficulties.length) && void 0 !== ⟦2-char-id⟧ ? cJ : 0;
+        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.pickerEntry()) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.difficulties.length) && void 0 !== ⟦2-char-id⟧ ? TB : 0;
         ⟦2-char-id⟧ < 0 || ⟦2-char-id⟧ >= ⟦2-char-id⟧ || ⟦2-char-id⟧ === this.pageIndex || (this.pageIndex = ⟦2-char-id⟧, this.emit())
       }
       pickerEntry() {
         var ⟦2-char-id⟧, ⟦2-char-id⟧;
-        return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.authoritative) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.dungeons.find((⟦2-char-id⟧ => ⟦2-char-id⟧.id === this.pickerDungeonId))) && void 0 !== ⟦2-char-id⟧ ? JJ : null
+        return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.authoritative) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.dungeons.find((⟦2-char-id⟧ => ⟦2-char-id⟧.id === this.pickerDungeonId))) && void 0 !== ⟦2-char-id⟧ ? BB : null
       }
       difficulty(⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.completions > 0,
-          ⟦2-char-id⟧ = null === ⟦2-char-id⟧.bestMs ? null : (0, ⟦2-char-id⟧.o)(⟦2-char-id⟧.bestMs);
+          ⟦2-char-id⟧ = null === ⟦2-char-id⟧.bestMs ? null : (0, ⟦2-char-id⟧.n)(⟦2-char-id⟧.bestMs);
         return {
           difficulty: ⟦2-char-id⟧.difficulty,
-          label: this.translate(⟦2-char-id⟧.d[⟦2-char-id⟧.difficulty]),
-          colour: ⟦2-char-id⟧.g[⟦2-char-id⟧.difficulty],
+          label: this.translate(⟦2-char-id⟧.e[⟦2-char-id⟧.difficulty]),
+          colour: ⟦2-char-id⟧.i[⟦2-char-id⟧.difficulty],
           beaten: ⟦2-char-id⟧,
           bestTime: ⟦2-char-id⟧,
           completions: ⟦2-char-id⟧.completions,
```

</details>

<details>
<summary>Hunk 79 · Change · +1 / -1</summary>

```diff
@@ -2215,7 +2215,7 @@
           id: ⟦2-char-id⟧.id,
           name: this.translate(⟦2-char-id⟧.nameKey),
           selected: ⟦2-char-id⟧.id === this.selected,
-          beatenSummary: `${ZJ} / ${cJ.length}`,
+          beatenSummary: `${dB} / ${TB.length}`,
           difficulties: ⟦2-char-id⟧
         }
       }
```

</details>

<details>
<summary>Hunk 80 · Change · +4 / -4</summary>

```diff
@@ -2230,10 +2230,10 @@
             ...this.difficulty(⟦2-char-id⟧),
             unlocked: null !== ⟦2-char-id⟧,
             bossName: null === ⟦2-char-id⟧ ? null : this.translate(⟦2-char-id⟧.bossNameKey),
-            bossMobType: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.bossMobType) && void 0 !== ⟦2-char-id⟧ ? FJ : null,
-            bossMobVariation: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.bossMobVariation) && void 0 !== ⟦2-char-id⟧ ? UJ : null,
-            lockedHint: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.text) && void 0 !== ⟦2-char-id⟧ ? eJ : null,
-            lockedHintHighlight: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.highlight) && void 0 !== ⟦2-char-id⟧ ? XJ : null,
+            bossMobType: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.bossMobType) && void 0 !== ⟦2-char-id⟧ ? VB : null,
+            bossMobVariation: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.bossMobVariation) && void 0 !== ⟦2-char-id⟧ ? yB : null,
+            lockedHint: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.text) && void 0 !== ⟦2-char-id⟧ ? pB : null,
+            lockedHintHighlight: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.highlight) && void 0 !== ⟦2-char-id⟧ ? lB : null,
             current: ⟦2-char-id⟧ === this.pageIndex
           }
         }));
```

</details>

<details>
<summary>Hunk 81 · Change · +2 / -2</summary>

```diff
@@ -2257,8 +2257,8 @@
             icon: ⟦2-char-id⟧.combat
           })
         }
-        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.authoritative) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.dungeons) && void 0 !== ⟦2-char-id⟧ ? ZJ : [],
-          ⟦2-char-id⟧ = ⟦2-char-id⟧ > 0 ? JJ : null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.indexOf(⟦2-char-id⟧) - 1]) && void 0 !== ⟦2-char-id⟧ ? UJ : null,
+        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.authoritative) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.dungeons) && void 0 !== ⟦2-char-id⟧ ? dB : [],
+          ⟦2-char-id⟧ = ⟦2-char-id⟧ > 0 ? BB : null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.indexOf(⟦2-char-id⟧) - 1]) && void 0 !== ⟦2-char-id⟧ ? yB : null,
           ⟦2-char-id⟧ = ⟦2-char-id⟧ > 0 ? ⟦2-char-id⟧.difficulties[⟦2-char-id⟧ - 1] : null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.difficulties[0];
         if (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧) return null;
         const ⟦2-char-id⟧ = this.translate(⟦2-char-id⟧.nameKey);
```

</details>

<details>
<summary>Hunk 82 · Change · +2 / -2</summary>

```diff
@@ -2278,8 +2278,8 @@
       }
       hintNamingDifficulty(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
         return this.hintHighlighting(⟦2-char-id⟧, ⟦2-char-id⟧, "difficulty", {
-          name: this.translate(⟦2-char-id⟧.d[⟦2-char-id⟧]),
-          colour: ⟦2-char-id⟧.g[⟦2-char-id⟧],
+          name: this.translate(⟦2-char-id⟧.e[⟦2-char-id⟧]),
+          colour: ⟦2-char-id⟧.i[⟦2-char-id⟧],
           icon: null
         })
       }
```

</details>

<details>
<summary>Hunk 83 · Change · +2 / -2</summary>

```diff
@@ -2290,12 +2290,12 @@
           icon: ⟦2-char-id⟧
         } = ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = this.translate(⟦2-char-id⟧, {
-          ...cJ,
+          ...TB,
           [⟦2-char-id⟧]: "\x01"
         }).split("\x01");
         return {
           text: this.translate(⟦2-char-id⟧, {
-            ...cJ,
+            ...TB,
             [⟦2-char-id⟧]: ⟦2-char-id⟧
           }),
           highlight: 2 === ⟦2-char-id⟧.length ? {
```

</details>

<details>
<summary>Hunk 84 · Change · +3 / -3</summary>

```diff
@@ -2312,15 +2312,15 @@
       }
       buildSnapshot() {
         var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.authoritative) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.dungeons) && void 0 !== ⟦2-char-id⟧ ? JJ : [];
+        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.authoritative) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.dungeons) && void 0 !== ⟦2-char-id⟧ ? BB : [];
         var ⟦2-char-id⟧, ⟦2-char-id⟧;
-        ⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧.id === this.selected)) || (this.selected = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧[0]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.id) && void 0 !== ⟦2-char-id⟧ ? UJ : null);
+        ⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧.id === this.selected)) || (this.selected = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧[0]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.id) && void 0 !== ⟦2-char-id⟧ ? yB : null);
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.map((⟦2-char-id⟧ => this.entry(⟦2-char-id⟧)));
         return {
           enabled: this.isEnabled(),
           open: this.open,
           dungeons: ⟦2-char-id⟧,
-          detail: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.selected))) && void 0 !== ⟦2-char-id⟧ ? ZJ : null,
+          detail: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.selected))) && void 0 !== ⟦2-char-id⟧ ? dB : null,
           picker: null === this.pickerDungeonId ? null : this.picker()
         }
       }
```

</details>

<details>
<summary>Hunk 85 · Change · +2 / -2</summary>

```diff
@@ -2501,14 +2501,14 @@
       ⟦2-char-id⟧ = (new Map(⟦2-char-id⟧.map((⟦2-char-id⟧ => [⟦2-char-id⟧.id, ⟦2-char-id⟧]))), new Map),
       ⟦2-char-id⟧ = new Map;
     for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
-      for (const [⟦2-char-id⟧, ⟦2-char-id⟧] of Object.entries(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.blocks) && void 0 !== ⟦2-char-id⟧ ? IZ : {})) {
+      for (const [⟦2-char-id⟧, ⟦2-char-id⟧] of Object.entries(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.blocks) && void 0 !== ⟦2-char-id⟧ ? Ud : {})) {
         var ⟦2-char-id⟧;
         ⟦2-char-id⟧.set(⟦2-char-id⟧, {
           collection: ⟦2-char-id⟧,
           amount: ⟦2-char-id⟧
         })
       }
-      for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.drops) && void 0 !== ⟦2-char-id⟧ ? MZ : []) {
+      for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.drops) && void 0 !== ⟦2-char-id⟧ ? Fd : []) {
         var ⟦2-char-id⟧;
         ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧)
       }
```

</details>

<details>
<summary>Hunk 86 · Change · +1 / -1</summary>

```diff
@@ -2546,7 +2546,7 @@
         this.translate = ⟦2-char-id⟧, this.locale = ⟦2-char-id⟧, this.itemName = ⟦2-char-id⟧, this.emit()
       }
       ⟦2-char-id⟧(⟦2-char-id⟧) {
-        if (!this.xn)
+        if (!this.ND)
           if ("collOpen" !== ⟦2-char-id⟧.kind) {
             (⟦2-char-id⟧.collFull || null === this.counts) && (this.counts = new Map);
             for (const [⟦2-char-id⟧, ⟦2-char-id⟧] of ⟦2-char-id⟧.collCounts) this.counts.set(⟦2-char-id⟧, ⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 87 · Change · +1 / -1</summary>

```diff
@@ -2576,7 +2576,7 @@
           open: this.open,
           categories: ⟦2-char-id⟧.map((⟦2-char-id⟧ => this.categoryView(⟦2-char-id⟧))),
           collections: ⟦2-char-id⟧,
-          detail: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.selected))) && void 0 !== ⟦2-char-id⟧ ? JJ : null,
+          detail: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.selected))) && void 0 !== ⟦2-char-id⟧ ? BB : null,
           tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
             count: this.number(⟦2-char-id⟧)
           })
```

</details>

<details>
<summary>Hunk 88 · Change · +1 / -1</summary>

```diff
@@ -2588,7 +2588,7 @@
           ⟦2-char-id⟧ = ⟦2-char-id⟧.reduce(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ + ⟦2-char-id⟧.tiers.length), 0);
         return {
           id: ⟦2-char-id⟧,
-          label: this.translate(`skyblockGame:${JJ}`),
+          label: this.translate(`skyblockGame:${BB}`),
           icon: ⟦2-char-id⟧[⟦2-char-id⟧],
           tiers: this.translate("skyblockGame:collectionProgress", {
             current: this.number(⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 89 · Change · +2 / -2</summary>

```diff
@@ -2599,9 +2599,9 @@
       }
       collectionView(⟦2-char-id⟧) {
         var ⟦2-char-id⟧, ⟦2-char-id⟧;
-        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = this.counts.get(⟦2-char-id⟧.id)) && void 0 !== ⟦2-char-id⟧ ? cJ : 0,
+        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = this.counts.get(⟦2-char-id⟧.id)) && void 0 !== ⟦2-char-id⟧ ? TB : 0,
           ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧),
-          ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.tiers[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? ZJ : null,
+          ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.tiers[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? dB : null,
           ⟦2-char-id⟧ = 0 === ⟦2-char-id⟧ ? 0 : ⟦2-char-id⟧.tiers[⟦2-char-id⟧ - 1].amount;
         return {
           id: ⟦2-char-id⟧.id,
```

</details>

<details>
<summary>Hunk 90 · Change · +1 / -1</summary>

```diff
@@ -2625,7 +2625,7 @@
         return this.translate("skyblockGame:collectionReward", {
           coins: this.number(⟦2-char-id⟧),
           xp: this.number(⟦2-char-id⟧),
-          skill: this.translate(`skyblockGame:${JJ.category}`)
+          skill: this.translate(`skyblockGame:${BB.category}`)
         })
       }
       tierLabel(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 91 · Change · +1 / -1</summary>

```diff
@@ -2635,7 +2635,7 @@
       }
       tierOf(⟦2-char-id⟧) {
         var ⟦2-char-id⟧;
-        return ⟦2-char-id⟧(⟦2-char-id⟧, null !== (⟦2-char-id⟧ = this.counts.get(⟦2-char-id⟧.id)) && void 0 !== ⟦2-char-id⟧ ? cJ : 0)
+        return ⟦2-char-id⟧(⟦2-char-id⟧, null !== (⟦2-char-id⟧ = this.counts.get(⟦2-char-id⟧.id)) && void 0 !== ⟦2-char-id⟧ ? TB : 0)
       }
       inCategory(⟦2-char-id⟧) {
         return ⟦2-char-id⟧.filter((⟦2-char-id⟧ => ⟦2-char-id⟧.category === ⟦2-char-id⟧))
```

</details>

<details>
<summary>Hunk 92 · Change · +1 / -1</summary>

```diff
@@ -2649,7 +2649,7 @@
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
-        this.Uf = ⟦2-char-id⟧, this.storage = ⟦2-char-id⟧, this.now = ⟦2-char-id⟧, this.view = null, this.token = 0, this.hideTimer = null
+        this.yH = ⟦2-char-id⟧, this.storage = ⟦2-char-id⟧, this.now = ⟦2-char-id⟧, this.view = null, this.token = 0, this.hideTimer = null
       }
       getSnapshot() {
         return this.view
```

</details>

<details>
<summary>Hunk 93 · Change · +1 / -1</summary>

```diff
@@ -2671,7 +2671,7 @@
       }
       finishArrival(⟦2-char-id⟧) {
         var ⟦2-char-id⟧;
-        "arrival" === (null === (⟦2-char-id⟧ = this.view) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.phase) && this.view.token === ⟦2-char-id⟧ && (this.clearTimer(), this.view = null, this.Uf(null))
+        "arrival" === (null === (⟦2-char-id⟧ = this.view) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.phase) && this.view.token === ⟦2-char-id⟧ && (this.clearTimer(), this.view = null, this.yH(null))
       }
       dispose() {
         this.clearTimer()
```

</details>

<details>
<summary>Hunk 94 · Change · +2 / -2</summary>

```diff
@@ -2683,8 +2683,8 @@
           zoneNameKey: ⟦2-char-id⟧,
           colour: ⟦2-char-id⟧,
           durationMs: ⟦2-char-id⟧
-        }, this.Uf(this.view), this.hideTimer = setTimeout((() => {
-          this.hideTimer = null, this.view = null, this.Uf(null), null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧()
+        }, this.yH(this.view), this.hideTimer = setTimeout((() => {
+          this.hideTimer = null, this.view = null, this.yH(null), null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧()
         }), ⟦2-char-id⟧)
       }
       clearTimer() {
```

</details>

<details>
<summary>Hunk 95 · Change · +5 / -5</summary>

```diff
@@ -2700,20 +2700,20 @@
           ⟦2-char-id⟧ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
           ⟦2-char-id⟧ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
           ⟦2-char-id⟧ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
-        this.Uf = ⟦2-char-id⟧, this.isBusy = ⟦2-char-id⟧, this.holdQuestPopups = ⟦2-char-id⟧, this.onHeldCoinsChanged = ⟦2-char-id⟧, this.onCoinLanded = ⟦2-char-id⟧, this.onStarted = ⟦2-char-id⟧, this.onFinished = ⟦2-char-id⟧, this.onItemLanded = ⟦2-char-id⟧, this.now = ⟦2-char-id⟧, this.hj = [], this.queue = [], this.playing = null, this.token = 0
+        this.yH = ⟦2-char-id⟧, this.isBusy = ⟦2-char-id⟧, this.holdQuestPopups = ⟦2-char-id⟧, this.onHeldCoinsChanged = ⟦2-char-id⟧, this.onCoinLanded = ⟦2-char-id⟧, this.onStarted = ⟦2-char-id⟧, this.onFinished = ⟦2-char-id⟧, this.onItemLanded = ⟦2-char-id⟧, this.now = ⟦2-char-id⟧, this.Dg = [], this.queue = [], this.playing = null, this.token = 0
       }
       getSnapshot() {
         var ⟦2-char-id⟧, ⟦2-char-id⟧;
-        return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.playing) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.view) && void 0 !== ⟦2-char-id⟧ ? JJ : null
+        return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.playing) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.view) && void 0 !== ⟦2-char-id⟧ ? BB : null
       }
       getHeldCoins() {
         var ⟦2-char-id⟧, ⟦2-char-id⟧;
         let ⟦2-char-id⟧ = 0;
-        for (const ⟦2-char-id⟧ of this.hj) ⟦2-char-id⟧ += ⟦2-char-id⟧.coins;
-        return ⟦2-char-id⟧ - (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.playing) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.released) && void 0 !== ⟦2-char-id⟧ ? JJ : 0)
+        for (const ⟦2-char-id⟧ of this.Dg) ⟦2-char-id⟧ += ⟦2-char-id⟧.coins;
+        return ⟦2-char-id⟧ - (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.playing) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.released) && void 0 !== ⟦2-char-id⟧ ? BB : 0)
       }
       ⟦2-char-id⟧(⟦2-char-id⟧) {
-        "dailyRewardClaimed" !== ⟦2-char-id⟧.kind ? (this.queue.push(⟦2-char-id⟧), this.Hh()) : this.hj.push({
+        "dailyRewardClaimed" !== ⟦2-char-id⟧.kind ? (this.queue.push(⟦2-char-id⟧), this.dL()) : this.Dg.push({
           coins: ⟦2-char-id⟧.dailyRewardCoins,
           receivedAt: this.now()
         })
```

</details>

<details>
<summary>Hunk 96 · Change · +1 / -1</summary>

```diff
@@ -2737,7 +2737,7 @@
         ⟦2-char-id⟧ >= ⟦2-char-id⟧.view.durationMs && (this.finish(), this.startNext(⟦2-char-id⟧))
       }
       dispose() {
-        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.hj = [], this.Uf(null)
+        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.Dg = [], this.yH(null)
       }
       startNext(⟦2-char-id⟧) {
         if (0 === this.queue.length || this.isBusy()) return;
```

</details>

<details>
<summary>Hunk 97 · Change · +5 / -5</summary>

```diff
@@ -2757,15 +2757,15 @@
           landed: 0,
           released: 0,
           itemsLanded: 0
-        }, this.holdQuestPopups(!0), this.Uf(⟦2-char-id⟧), this.onStarted(⟦2-char-id⟧)
+        }, this.holdQuestPopups(!0), this.yH(⟦2-char-id⟧), this.onStarted(⟦2-char-id⟧)
       }
       finish() {
-        this.hj.shift(), this.playing = null, this.holdQuestPopups(!1), this.Uf(null), this.onHeldCoinsChanged(), this.onFinished()
+        this.Dg.shift(), this.playing = null, this.holdQuestPopups(!1), this.yH(null), this.onHeldCoinsChanged(), this.onFinished()
       }
       releaseUnshown(⟦2-char-id⟧) {
-        if (this.queue.length > 0 || 0 === this.hj.length) return;
-        const ⟦2-char-id⟧ = this.hj.length;
-        this.hj = this.hj.filter((⟦2-char-id⟧ => ⟦2-char-id⟧ - ⟦2-char-id⟧.receivedAt < 6⟦2-char-id⟧)), this.hj.length !== ⟦2-char-id⟧ && this.onHeldCoinsChanged()
+        if (this.queue.length > 0 || 0 === this.Dg.length) return;
+        const ⟦2-char-id⟧ = this.Dg.length;
+        this.Dg = this.Dg.filter((⟦2-char-id⟧ => ⟦2-char-id⟧ - ⟦2-char-id⟧.receivedAt < 6⟦2-char-id⟧)), this.Dg.length !== ⟦2-char-id⟧ && this.onHeldCoinsChanged()
       }
     }
 
```

</details>

<details>
<summary>Hunk 98 · Change · +5 / -5</summary>

```diff
@@ -2781,24 +2781,24 @@
       constructor(⟦2-char-id⟧, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
           ⟦2-char-id⟧ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
-        this.Uf = ⟦2-char-id⟧, this.isBusy = ⟦2-char-id⟧, this.onStarted = ⟦2-char-id⟧, this.now = ⟦2-char-id⟧, this.waiting = [], this.playing = null, this.token = 0, this.itemName = ⟦2-char-id⟧ => ⟦2-char-id⟧
+        this.yH = ⟦2-char-id⟧, this.isBusy = ⟦2-char-id⟧, this.onStarted = ⟦2-char-id⟧, this.now = ⟦2-char-id⟧, this.waiting = [], this.playing = null, this.token = 0, this.itemName = ⟦2-char-id⟧ => ⟦2-char-id⟧
       }
       getSnapshot() {
         var ⟦2-char-id⟧, ⟦2-char-id⟧;
-        return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.playing) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.view) && void 0 !== ⟦2-char-id⟧ ? JJ : null
+        return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.playing) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.view) && void 0 !== ⟦2-char-id⟧ ? BB : null
       }
       setItemName(⟦2-char-id⟧) {
         this.itemName = ⟦2-char-id⟧
       }
       ⟦2-char-id⟧(⟦2-char-id⟧) {
-        this.waiting.push(...JJ.mailLetters), this.Hh()
+        this.waiting.push(...BB.mailLetters), this.dL()
       }
       ⟦2-char-id⟧() {
         const ⟦2-char-id⟧ = this.now();
-        null !== this.playing && ⟦2-char-id⟧ - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.Uf(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(⟦2-char-id⟧)
+        null !== this.playing && ⟦2-char-id⟧ - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.yH(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(⟦2-char-id⟧)
       }
       dispose() {
-        this.playing = null, this.waiting = [], this.Uf(null)
+        this.playing = null, this.waiting = [], this.yH(null)
       }
       start(⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = this.waiting.slice(0, 3);
```

</details>

<details>
<summary>Hunk 99 · Change · +1 / -1</summary>

```diff
@@ -2812,7 +2812,7 @@
         this.waiting = [], this.playing = {
           view: ⟦2-char-id⟧,
           startedAt: ⟦2-char-id⟧
-        }, this.Uf(⟦2-char-id⟧), this.onStarted(⟦2-char-id⟧)
+        }, this.yH(⟦2-char-id⟧), this.onStarted(⟦2-char-id⟧)
       }
       toView(⟦2-char-id⟧) {
         return {
```

</details>

<details>
<summary>Hunk 100 · Change · +1 / -1</summary>

```diff
@@ -2822,7 +2822,7 @@
             return {
               itemName: ⟦2-char-id⟧.mailItemName,
               amount: ⟦2-char-id⟧.mailItemAmount,
-              label: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.mailItemLabel) && void 0 !== ⟦2-char-id⟧ ? cJ : this.itemName(⟦2-char-id⟧.mailItemName)
+              label: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.mailItemLabel) && void 0 !== ⟦2-char-id⟧ ? TB : this.itemName(⟦2-char-id⟧.mailItemName)
             }
           })),
           reasonKey: ⟦2-char-id⟧.mailReasonKey,
```

</details>

<details>
<summary>Hunk 101 · Change · +4 / -4</summary>

```diff
@@ -2835,17 +2835,17 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       if (0 === ⟦2-char-id⟧.length) return "";
-      const ⟦2-char-id⟧ = [`M ${JJ[0].x} ${JJ[0].y}`];
+      const ⟦2-char-id⟧ = [`M ${BB[0].x} ${BB[0].y}`];
       for (let ⟦2-char-id⟧ = 1; ⟦2-char-id⟧ < ⟦2-char-id⟧.length - 1; ⟦2-char-id⟧++) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 1];
-        ⟦2-char-id⟧.push(`Q ${JJ[FJ].x} ${JJ[FJ].y} ${(JJ[FJ].x+ZJ.x)/2} ${(JJ[FJ].y+ZJ.y)/2}`)
+        ⟦2-char-id⟧.push(`Q ${BB[VB].x} ${BB[VB].y} ${(BB[VB].x+dB.x)/2} ${(BB[VB].y+dB.y)/2}`)
       }
       const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.length - 1];
-      return ⟦2-char-id⟧.push(`L ${ZJ.x} ${ZJ.y}`), ⟦2-char-id⟧.join(" ")
+      return ⟦2-char-id⟧.push(`L ${dB.x} ${dB.y}`), ⟦2-char-id⟧.join(" ")
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧ < ⟦2-char-id⟧ ? `${JJ}|${cJ}` : `${cJ}|${JJ}`
+      return ⟦2-char-id⟧ < ⟦2-char-id⟧ ? `${BB}|${TB}` : `${TB}|${BB}`
     }
     class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 102 · Change · +1 / -1</summary>

```diff
@@ -2874,7 +2874,7 @@
         }
       }
       ⟦2-char-id⟧(⟦2-char-id⟧) {
-        if (!this.xn)
+        if (!this.ND)
           if ("graph" !== ⟦2-char-id⟧.kind) {
             if ("jumping" === ⟦2-char-id⟧.kind) {
               const ⟦2-char-id⟧ = {
```

</details>

<details>
<summary>Hunk 103 · Change · +2 / -2</summary>

```diff
@@ -2887,11 +2887,11 @@
             }
           } else {
             const ⟦2-char-id⟧ = ++this.graphCount;
-            ⟦2-char-id⟧.e(105).then((() => ⟦2-char-id⟧(5783))).then((⟦2-char-id⟧ => {
+            ⟦2-char-id⟧.e(105).then((() => ⟦2-char-id⟧(5798))).then((⟦2-char-id⟧ => {
               let {
                 default: ⟦2-char-id⟧
               } = ⟦2-char-id⟧;
-              this.xn || ⟦2-char-id⟧ !== this.graphCount || (this.layout = function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
+              this.ND || ⟦2-char-id⟧ !== this.graphCount || (this.layout = function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
                 var ⟦2-char-id⟧, ⟦2-char-id⟧;
                 const ⟦2-char-id⟧ = new ⟦2-char-id⟧.graphlib.Graph;
                 ⟦2-char-id⟧.setGraph({
```

</details>

<details>
<summary>Hunk 104 · Change · +9 / -9</summary>

```diff
@@ -2908,35 +2908,35 @@
                 });
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧.filter((⟦2-char-id⟧ => ⟦2-char-id⟧.has(⟦2-char-id⟧.graphFromId) && ⟦2-char-id⟧.has(⟦2-char-id⟧.graphToId) && ⟦2-char-id⟧.graphFromId !== ⟦2-char-id⟧.graphToId)),
                   ⟦2-char-id⟧ = new Map;
-                for (const ⟦2-char-id⟧ of [...AJ].sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => Number("awaits" === ⟦2-char-id⟧.graphEdgeKind) - Number("awaits" === ⟦2-char-id⟧.graphEdgeKind)))) {
+                for (const ⟦2-char-id⟧ of [...JB].sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => Number("awaits" === ⟦2-char-id⟧.graphEdgeKind) - Number("awaits" === ⟦2-char-id⟧.graphEdgeKind)))) {
                   const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.graphFromId, ⟦2-char-id⟧.graphToId);
                   ⟦2-char-id⟧.has(⟦2-char-id⟧) || (⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.setEdge(⟦2-char-id⟧.graphFromId, ⟦2-char-id⟧.graphToId))
                 }
                 ⟦2-char-id⟧.layout(⟦2-char-id⟧);
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧.graph();
                 return {
-                  width: Math.ceil(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.width) && void 0 !== ⟦2-char-id⟧ ? FJ : 0),
-                  height: Math.ceil(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.height) && void 0 !== ⟦2-char-id⟧ ? UJ : 0),
+                  width: Math.ceil(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.width) && void 0 !== ⟦2-char-id⟧ ? VB : 0),
+                  height: Math.ceil(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.height) && void 0 !== ⟦2-char-id⟧ ? yB : 0),
                   nodes: ⟦2-char-id⟧.map((⟦2-char-id⟧ => {
                     var ⟦2-char-id⟧, ⟦2-char-id⟧;
                     const ⟦2-char-id⟧ = ⟦2-char-id⟧.node(⟦2-char-id⟧.graphQuestId);
                     return {
                       node: ⟦2-char-id⟧,
-                      left: (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.x) && void 0 !== ⟦2-char-id⟧ ? cJ : 0) - 95,
-                      top: (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.y) && void 0 !== ⟦2-char-id⟧ ? ZJ : 0) - 26
+                      left: (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.x) && void 0 !== ⟦2-char-id⟧ ? TB : 0) - 95,
+                      top: (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.y) && void 0 !== ⟦2-char-id⟧ ? dB : 0) - 26
                     }
                   })),
                   edges: ⟦2-char-id⟧.map((⟦2-char-id⟧ => {
                     var ⟦2-char-id⟧;
                     const ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧(⟦2-char-id⟧.graphFromId, ⟦2-char-id⟧.graphToId)),
-                      ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.edge(⟦2-char-id⟧.graphFromId, ⟦2-char-id⟧.graphToId).points) && void 0 !== ⟦2-char-id⟧ ? cJ : [];
+                      ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.edge(⟦2-char-id⟧.graphFromId, ⟦2-char-id⟧.graphToId).points) && void 0 !== ⟦2-char-id⟧ ? TB : [];
                     return {
                       edge: ⟦2-char-id⟧,
-                      key: `${JJ.graphFromId}|${JJ.graphToId}|${JJ.graphEdgeKind}`,
-                      path: ⟦2-char-id⟧(⟦2-char-id⟧.graphFromId === ⟦2-char-id⟧.graphFromId ? FJ : [...FJ].reverse())
+                      key: `${BB.graphFromId}|${BB.graphToId}|${BB.graphEdgeKind}`,
+                      path: ⟦2-char-id⟧(⟦2-char-id⟧.graphFromId === ⟦2-char-id⟧.graphFromId ? VB : [...VB].reverse())
                     }
                   })),
-                  plans: new Map(⟦2-char-id⟧.map((⟦2-char-id⟧ => [⟦2-char-id⟧.graphQuestId, new Set([⟦2-char-id⟧.graphQuestId, ...JJ.graphPlanIds])])))
+                  plans: new Map(⟦2-char-id⟧.map((⟦2-char-id⟧ => [⟦2-char-id⟧.graphQuestId, new Set([⟦2-char-id⟧.graphQuestId, ...BB.graphPlanIds])])))
                 }
               }(⟦2-char-id⟧, ⟦2-char-id⟧.graphNodes, ⟦2-char-id⟧.graphEdges), this.show())
             })).catch((⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 105 · Change · +1 / -1</summary>

```diff
@@ -2962,7 +2962,7 @@
       }
       getPlan() {
         var ⟦2-char-id⟧, ⟦2-char-id⟧;
-        return null !== (⟦2-char-id⟧ = null === this.hoveredId || null === (⟦2-char-id⟧ = this.layout) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.plans.get(this.hoveredId)) && void 0 !== ⟦2-char-id⟧ ? JJ : new Set
+        return null !== (⟦2-char-id⟧ = null === this.hoveredId || null === (⟦2-char-id⟧ = this.layout) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.plans.get(this.hoveredId)) && void 0 !== ⟦2-char-id⟧ ? BB : new Set
       }
       buildSnapshot() {
         const ⟦2-char-id⟧ = this.layout;
```

</details>

<details>
<summary>Hunk 106 · Change · +1 / -1</summary>

```diff
@@ -2990,7 +2990,7 @@
             return {
               id: ⟦2-char-id⟧.graphQuestId,
               name: this.translate(⟦2-char-id⟧.graphNameKey),
-              detail: null === ⟦2-char-id⟧.graphGiverName ? ⟦2-char-id⟧.graphZoneId : `${ZJ.graphGiverName} \xb7 ${ZJ.graphZoneId}`,
+              detail: null === ⟦2-char-id⟧.graphGiverName ? ⟦2-char-id⟧.graphZoneId : `${dB.graphGiverName} \xb7 ${dB.graphZoneId}`,
               state: ⟦2-char-id⟧.graphState,
               left: ⟦2-char-id⟧,
               top: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 107 · Change · +1 / -1</summary>

```diff
@@ -3015,7 +3015,7 @@
         }
       }
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36065);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(35996);
     const ⟦2-char-id⟧ = 250,
       ⟦2-char-id⟧ = 2150,
       ⟦2-char-id⟧ = -2.8,
```

</details>

<details>
<summary>Hunk 108 · Change · +4 / -4</summary>

```diff
@@ -3044,12 +3044,12 @@
         return {
           rune: ⟦2-char-id⟧ ? ⟦2-char-id⟧[7 * ⟦2-char-id⟧ % 24] : "",
           style: {
-            "--from-x": `calc(var(--sword-size) * ${(Math.cos(ZJ)*FJ).toFixed(3)})`,
-            "--from-y": `calc(var(--sword-size) * ${(Math.sin(ZJ)*FJ).toFixed(3)})`,
+            "--from-x": `calc(var(--sword-size) * ${(Math.cos(dB)*VB).toFixed(3)})`,
+            "--from-y": `calc(var(--sword-size) * ${(Math.sin(dB)*VB).toFixed(3)})`,
             "--spin": 40 * (⟦2-char-id⟧ % 5 - 2) + "deg",
             "--size": (⟦2-char-id⟧ ? 1 + ⟦2-char-id⟧ % 4 * .2 : .3 + ⟦2-char-id⟧ % 2 * .15) + "rem",
-            "--duration": `${(1.8+7*cJ%5*.35).toFixed(2)}s`,
-            "--delay": `${(-.83*cJ%3).toFixed(2)}s`
+            "--duration": `${(1.8+7*TB%5*.35).toFixed(2)}s`,
+            "--delay": `${(-.83*TB%3).toFixed(2)}s`
           }
         }
       }));
```

</details>

<details>
<summary>Hunk 109 · Change · +4 / -4</summary>

```diff
@@ -3067,10 +3067,10 @@
         return {
           "--c": ⟦2-char-id⟧,
           "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
-          "--distance": `${UJ.toFixed(2)}rem`,
-          "--length": `${eJ.toFixed(2)}rem`,
-          "--width": `${XJ}rem`,
-          "--duration": `${Math.round(AJ)}ms`,
+          "--distance": `${yB.toFixed(2)}rem`,
+          "--length": `${pB.toFixed(2)}rem`,
+          "--width": `${lB}rem`,
+          "--duration": `${Math.round(JB)}ms`,
           "--delay": `${Math.round(40*Math.random())}ms`,
           "--fall": `${(1+Math.random()).toFixed(2)}rem`
         }
```

</details>

<details>
<summary>Hunk 110 · Change · +2 / -2</summary>

```diff
@@ -3122,9 +3122,9 @@
           const ⟦2-char-id⟧ = .15 * ⟦2-char-id⟧ + ⟦2-char-id⟧ * ⟦2-char-id⟧,
             ⟦2-char-id⟧ = -.1 * ⟦2-char-id⟧ + ⟦2-char-id⟧ * ⟦2-char-id⟧,
             ⟦2-char-id⟧ = 3 * ⟦2-char-id⟧ + ⟦2-char-id⟧ * ⟦2-char-id⟧;
-          ⟦2-char-id⟧.push(`${(qJ/XJ*100).toFixed(3)}% { opacity: ${sJ.toFixed(3)}; transform: translate(${nJ.toFixed(3)}rem, ${GJ.toFixed(3)}rem) rotate(${fJ.toFixed(2)}deg) scale(${hJ.toFixed(3)}); filter: brightness(${DJ.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
+          ⟦2-char-id⟧.push(`${(YB/lB*100).toFixed(3)}% { opacity: ${OB.toFixed(3)}; transform: translate(${DB.toFixed(3)}rem, ${uB.toFixed(3)}rem) rotate(${HB.toFixed(2)}deg) scale(${kB.toFixed(3)}); filter: brightness(${LB.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
         }
-        return `@keyframes SkyblockForgeSwordBurst { ${AJ.join(" ")} }`
+        return `@keyframes SkyblockForgeSwordBurst { ${JB.join(" ")} }`
       }(), document.head.append(⟦2-char-id⟧)
     }
     const ⟦2-char-id⟧ = "skyblockForgeView",
```

</details>

<details>
<summary>Hunk 111 · Change · +3 / -3</summary>

```diff
@@ -3141,15 +3141,15 @@
           Handle: null
         }, this.onForgeStarted = null, this.onPartSelected = null, this.select = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
           var ⟦2-char-id⟧, ⟦2-char-id⟧;
-          null !== this.forging || (null !== (⟦2-char-id⟧ = this.owned[(0, ⟦2-char-id⟧.o)(⟦2-char-id⟧, ⟦2-char-id⟧)]) && void 0 !== ⟦2-char-id⟧ ? ZJ : 0) <= 0 || (this.selected[⟦2-char-id⟧] = this.selected[⟦2-char-id⟧] === ⟦2-char-id⟧ ? null : ⟦2-char-id⟧, this.status = null, null === (⟦2-char-id⟧ = this.onPartSelected) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.call(this), this.emit())
+          null !== this.forging || (null !== (⟦2-char-id⟧ = this.owned[(0, ⟦2-char-id⟧.p)(⟦2-char-id⟧, ⟦2-char-id⟧)]) && void 0 !== ⟦2-char-id⟧ ? dB : 0) <= 0 || (this.selected[⟦2-char-id⟧] = this.selected[⟦2-char-id⟧] === ⟦2-char-id⟧ ? null : ⟦2-char-id⟧, this.status = null, null === (⟦2-char-id⟧ = this.onPartSelected) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.call(this), this.emit())
         }, this.forge = ⟦2-char-id⟧ => {
           var ⟦2-char-id⟧, ⟦2-char-id⟧;
           const ⟦2-char-id⟧ = this.selectedParts();
           if (null === ⟦2-char-id⟧ || this.isPending() || !this.open) return;
-          const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧);
+          const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.l)(⟦2-char-id⟧);
           if (null === ⟦2-char-id⟧ || ⟦2-char-id⟧.coalCost > this.coal) return;
           const ⟦2-char-id⟧ = this.preview(⟦2-char-id⟧),
-            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.onForgeStarted) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.call(this, ⟦2-char-id⟧.tier, ⟦2-char-id⟧.named, ⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? cJ : () => {};
+            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.onForgeStarted) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.call(this, ⟦2-char-id⟧.tier, ⟦2-char-id⟧.named, ⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? TB : () => {};
           if (this.dropArrival(), ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = {
               id: ++this.forgeId,
```

</details>

<details>
<summary>Hunk 112 · Change · +2 / -2</summary>

```diff
@@ -3182,12 +3182,12 @@
       apply(⟦2-char-id⟧) {
         if (this.owned = ⟦2-char-id⟧.forgeOwnedParts, this.coal = ⟦2-char-id⟧.forgeCoalOwned, this.keepSelectionOwned("open" === ⟦2-char-id⟧.forgeMessageKind), null !== ⟦2-char-id⟧.forgeForgedSwordId) {
           var ⟦2-char-id⟧;
-          const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧.forgeForgedSwordId);
+          const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.l)(⟦2-char-id⟧.forgeForgedSwordId);
           this.status = {
             tone: "forged",
             key: "skyblockGame:forgeForged",
             params: {
-              sword: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.displayName) && void 0 !== ⟦2-char-id⟧ ? cJ : ""
+              sword: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.displayName) && void 0 !== ⟦2-char-id⟧ ? TB : ""
             }
           }
         } else null !== ⟦2-char-id⟧.forgeRefusalKey && (this.status = {
```

</details>

<details>
<summary>Hunk 113 · Change · +1 / -1</summary>

```diff
@@ -3214,7 +3214,7 @@
           }), 400);
         this.arriving = {
           id: ⟦2-char-id⟧.id,
-          sameSword: null !== ⟦2-char-id⟧ && (null === (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.displayName) === ⟦2-char-id⟧.preview.name,
+          sameSword: null !== ⟦2-char-id⟧ && (null === (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.l)(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.displayName) === ⟦2-char-id⟧.preview.name,
           timer: ⟦2-char-id⟧
         }, this.emit()
       }
```

</details>

<details>
<summary>Hunk 114 · Change · +2 / -2</summary>

```diff
@@ -3238,8 +3238,8 @@
       buildSnapshot() {
         var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = this.selectedParts(),
-          ⟦2-char-id⟧ = null === ⟦2-char-id⟧ ? null : (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧),
-          ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.forging) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.preview) && void 0 !== ⟦2-char-id⟧ ? JJ : null === ⟦2-char-id⟧ ? null : this.preview(⟦2-char-id⟧);
+          ⟦2-char-id⟧ = null === ⟦2-char-id⟧ ? null : (0, ⟦2-char-id⟧.l)(⟦2-char-id⟧),
+          ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.forging) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.preview) && void 0 !== ⟦2-char-id⟧ ? BB : null === ⟦2-char-id⟧ ? null : this.preview(⟦2-char-id⟧);
         return {
           enabled: this.received,
           open: this.open,
```

</details>

<details>
<summary>Hunk 115 · Change · +1 / -1</summary>

```diff
@@ -3250,7 +3250,7 @@
           }))),
           coalOwned: this.coal,
           preview: ⟦2-char-id⟧,
-          unformedSword: ⟦2-char-id⟧.g[null !== (⟦2-char-id⟧ = this.selected.Blade) && void 0 !== ⟦2-char-id⟧ ? ZJ : "Iron"].baseSword,
+          unformedSword: ⟦2-char-id⟧.g[null !== (⟦2-char-id⟧ = this.selected.Blade) && void 0 !== ⟦2-char-id⟧ ? dB : "Iron"].baseSword,
           anyParts: Object.values(this.owned).some((⟦2-char-id⟧ => ⟦2-char-id⟧ > 0)),
           canForge: null !== ⟦2-char-id⟧ && !⟦2-char-id⟧.coalShort && !this.isPending(),
           status: null === this.status ? null : {
```

</details>

<details>
<summary>Hunk 116 · Change · +3 / -3</summary>

```diff
@@ -3283,10 +3283,10 @@
       }
       partsFor(⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = [];
-        for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.d) {
+        for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.f) {
           var ⟦2-char-id⟧;
-          const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.o)(⟦2-char-id⟧, ⟦2-char-id⟧),
-            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = this.owned[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? ZJ : 0;
+          const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.p)(⟦2-char-id⟧, ⟦2-char-id⟧),
+            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = this.owned[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? dB : 0;
           ⟦2-char-id⟧ > 0 && ⟦2-char-id⟧.push({
             material: ⟦2-char-id⟧,
             itemName: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 117 · Change · +2 / -2</summary>

```diff
@@ -3296,10 +3296,10 @@
           })
         }
         if (0 === ⟦2-char-id⟧.length) {
-          const ⟦2-char-id⟧ = ⟦2-char-id⟧.d[0];
+          const ⟦2-char-id⟧ = ⟦2-char-id⟧.f[0];
           ⟦2-char-id⟧.push({
             material: ⟦2-char-id⟧,
-            itemName: (0, ⟦2-char-id⟧.o)(⟦2-char-id⟧, ⟦2-char-id⟧),
+            itemName: (0, ⟦2-char-id⟧.p)(⟦2-char-id⟧, ⟦2-char-id⟧),
             owned: 0,
             selected: !1,
             placeholder: !0
```

</details>

<details>
<summary>Hunk 118 · Change · +6 / -6</summary>

```diff
@@ -3310,28 +3310,28 @@
       stats(⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = [{
           label: this.translate("skyblockGame:forgeStatPower"),
-          value: `\xd7${JJ.powerMultiplier.toFixed(2)}`,
+          value: `\xd7${BB.powerMultiplier.toFixed(2)}`,
           better: ⟦2-char-id⟧.powerMultiplier > 1
         }, {
           label: this.translate("skyblockGame:forgeStatDamage"),
-          value: `\xd7${JJ.damageMultiplier.toFixed(2)}`,
+          value: `\xd7${BB.damageMultiplier.toFixed(2)}`,
           better: ⟦2-char-id⟧.damageMultiplier > 1
         }, {
           label: this.translate("skyblockGame:forgeStatSpeed"),
-          value: `\xd7${(1/JJ.cooldownMultiplier).toFixed(2)}`,
+          value: `\xd7${(1/BB.cooldownMultiplier).toFixed(2)}`,
           better: ⟦2-char-id⟧.cooldownMultiplier < 1
         }, {
           label: this.translate("skyblockGame:forgeStatKnockback"),
-          value: `\xd7${JJ.knockbackMultiplier.toFixed(2)}`,
+          value: `\xd7${BB.knockbackMultiplier.toFixed(2)}`,
           better: ⟦2-char-id⟧.knockbackMultiplier > 1
         }];
         return ⟦2-char-id⟧.reachBonus > 0 && ⟦2-char-id⟧.push({
           label: this.translate("skyblockGame:forgeStatReach"),
-          value: `+${JJ.reachBonus.toFixed(1)}`,
+          value: `+${BB.reachBonus.toFixed(1)}`,
           better: !0
         }), ⟦2-char-id⟧.damageReduction > 0 && ⟦2-char-id⟧.push({
           label: this.translate("skyblockGame:forgeStatDefence"),
-          value: `${Math.round(100*JJ.damageReduction)}%`,
+          value: `${Math.round(100*BB.damageReduction)}%`,
           better: !0
         }), ⟦2-char-id⟧
       }
```

</details>

<details>
<summary>Hunk 119 · Change · +4 / -4</summary>

```diff
@@ -3351,16 +3351,16 @@
         for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.k) {
           var ⟦2-char-id⟧;
           const ⟦2-char-id⟧ = this.selected[⟦2-char-id⟧];
-          if (null !== ⟦2-char-id⟧ && (null !== (⟦2-char-id⟧ = this.owned[(0, ⟦2-char-id⟧.o)(⟦2-char-id⟧, ⟦2-char-id⟧)]) && void 0 !== ⟦2-char-id⟧ ? cJ : 0) > 0) continue;
+          if (null !== ⟦2-char-id⟧ && (null !== (⟦2-char-id⟧ = this.owned[(0, ⟦2-char-id⟧.p)(⟦2-char-id⟧, ⟦2-char-id⟧)]) && void 0 !== ⟦2-char-id⟧ ? TB : 0) > 0) continue;
           if (!⟦2-char-id⟧) {
             this.selected[⟦2-char-id⟧] = null;
             continue
           }
-          const ⟦2-char-id⟧ = [...tZ.d].reverse().find((⟦2-char-id⟧ => {
+          const ⟦2-char-id⟧ = [...nd.f].reverse().find((⟦2-char-id⟧ => {
             var ⟦2-char-id⟧;
-            return (null !== (⟦2-char-id⟧ = this.owned[(0, ⟦2-char-id⟧.o)(⟦2-char-id⟧, ⟦2-char-id⟧)]) && void 0 !== ⟦2-char-id⟧ ? cJ : 0) > 0
+            return (null !== (⟦2-char-id⟧ = this.owned[(0, ⟦2-char-id⟧.p)(⟦2-char-id⟧, ⟦2-char-id⟧)]) && void 0 !== ⟦2-char-id⟧ ? TB : 0) > 0
           }));
-          this.selected[⟦2-char-id⟧] = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? UJ : null
+          this.selected[⟦2-char-id⟧] = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? yB : null
         }
       }
       dispose() {
```

</details>

<details>
<summary>Hunk 120 · Change · +1 / -1</summary>

```diff
@@ -3394,7 +3394,7 @@
             key: "skyblockGame:smugglerBought",
             params: {
               item: void 0 === ⟦2-char-id⟧ ? "" : this.dealName(⟦2-char-id⟧),
-              amount: String(null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.smugglerDealAmount) && void 0 !== ⟦2-char-id⟧ ? cJ : 0)
+              amount: String(null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.smugglerDealAmount) && void 0 !== ⟦2-char-id⟧ ? TB : 0)
             }
           }, this.boughtCount++, null === (⟦2-char-id⟧ = this.onBought) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.call(this)
         } else null !== ⟦2-char-id⟧.smugglerRefusalKey && (this.status = {
```

</details>

<details>
<summary>Hunk 121 · Change · +3 / -3</summary>

```diff
@@ -3548,16 +3548,16 @@
         this.message = null, super.dispose()
       }
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37529);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37506);
     const ⟦2-char-id⟧ = "skyblockKeepersChairView";
     class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
-          ⟦2-char-id⟧ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new ⟦2-char-id⟧.e;
+          ⟦2-char-id⟧ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new ⟦2-char-id⟧.d;
         super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), this.translate = ⟦2-char-id⟧, this.requestAim = ⟦2-char-id⟧, this.now = ⟦2-char-id⟧, this.pacer = ⟦2-char-id⟧, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = ⟦2-char-id⟧ => ⟦2-char-id⟧, this.aim = ⟦2-char-id⟧ => {
           !this.awaitingReply && this.open && this.atChair && ⟦2-char-id⟧ !== this.favoured && (null === ⟦2-char-id⟧ || this.islands.some((⟦2-char-id⟧ => ⟦2-char-id⟧.keepersChairIslandId === ⟦2-char-id⟧ && ⟦2-char-id⟧.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
             this.replyTimeout = null, this.awaitingReply = !1, this.emit()
-          }), 8⟦2-char-id⟧), this.emit(), this.requestAim(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? JJ : "none"))
+          }), 8⟦2-char-id⟧), this.emit(), this.requestAim(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? BB : "none"))
         }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = ⟦2-char-id⟧.subscribe((() => {
           this.emit()
         }))
```

</details>

<details>
<summary>Hunk 122 · Change · +1 / -1</summary>

```diff
@@ -3568,7 +3568,7 @@
         const ⟦2-char-id⟧ = this.favoured,
           ⟦2-char-id⟧ = this.atChair;
         var ⟦2-char-id⟧;
-        return this.islands = ⟦2-char-id⟧.keepersChairIslands, this.favoured = ⟦2-char-id⟧.keepersChairFavoured, this.passage = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.keepersChairPassage) && void 0 !== ⟦2-char-id⟧ ? cJ : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.keepersChairAtChair) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧, "place" === ⟦2-char-id⟧.keepersChairMessageKind ? (!⟦2-char-id⟧ && this.atChair && "refused" === (null === (⟦2-char-id⟧ = this.status) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === ⟦2-char-id⟧.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== ⟦2-char-id⟧.keepersChairRefusalKey ? this.status = {
+        return this.islands = ⟦2-char-id⟧.keepersChairIslands, this.favoured = ⟦2-char-id⟧.keepersChairFavoured, this.passage = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.keepersChairPassage) && void 0 !== ⟦2-char-id⟧ ? TB : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.keepersChairAtChair) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧, "place" === ⟦2-char-id⟧.keepersChairMessageKind ? (!⟦2-char-id⟧ && this.atChair && "refused" === (null === (⟦2-char-id⟧ = this.status) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === ⟦2-char-id⟧.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== ⟦2-char-id⟧.keepersChairRefusalKey ? this.status = {
           tone: "refused",
           key: ⟦2-char-id⟧.keepersChairRefusalKey,
           island: null
```

</details>

<details>
<summary>Hunk 123 · Change · +1 / -1</summary>

```diff
@@ -3605,7 +3605,7 @@
       }
       islandName(⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = this.islands.find((⟦2-char-id⟧ => ⟦2-char-id⟧.keepersChairIslandId === ⟦2-char-id⟧));
-        return void 0 === ⟦2-char-id⟧ ? JJ : this.translate(⟦2-char-id⟧.keepersChairIslandNameKey)
+        return void 0 === ⟦2-char-id⟧ ? BB : this.translate(⟦2-char-id⟧.keepersChairIslandNameKey)
       }
       buildSnapshot() {
         const ⟦2-char-id⟧ = this.atChair ? this.status : {
```

</details>

<details>
<summary>Hunk 124 · Change · +3 / -3</summary>

```diff
@@ -3658,16 +3658,16 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       return ⟦2-char-id⟧.map((⟦2-char-id⟧ => ({
-        ...JJ,
+        ...BB,
         reachLogPageFish: ⟦2-char-id⟧.reachLogPageFish.map((⟦2-char-id⟧ => ({
-          ...JJ,
+          ...BB,
           reachLogFishFresh: ⟦2-char-id⟧(⟦2-char-id⟧)
         })))
       })))
     }
     class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-        let ⟦2-char-id⟧ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new ⟦2-char-id⟧.e;
+        let ⟦2-char-id⟧ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new ⟦2-char-id⟧.d;
         super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), this.translate = ⟦2-char-id⟧, this.requestOpen = ⟦2-char-id⟧, this.pacer = ⟦2-char-id⟧, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = ⟦2-char-id⟧ => ⟦2-char-id⟧, this.ask = () => {
           !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
             this.replyTimeout = null, this.awaitingReply = !1, this.emit()
```

</details>

<details>
<summary>Hunk 125 · Change · +1 / -1</summary>

```diff
@@ -3707,7 +3707,7 @@
         const ⟦2-char-id⟧ = this.pages.find((⟦2-char-id⟧ => ⟦2-char-id⟧.reachLogPageFish.some((⟦2-char-id⟧ => ⟦2-char-id⟧.reachLogFishFresh))));
         if (void 0 !== ⟦2-char-id⟧) return ⟦2-char-id⟧.reachLogIslandId;
         if (null !== this.selected && this.pages.some((⟦2-char-id⟧ => ⟦2-char-id⟧.reachLogIslandId === this.selected))) return this.selected;
-        return null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.pages.filter((⟦2-char-id⟧ => ⟦2-char-id⟧.reachLogIslandAwake)).at(-1)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.reachLogIslandId) && void 0 !== ⟦2-char-id⟧ ? cJ : null === (⟦2-char-id⟧ = this.pages[0]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.reachLogIslandId) && void 0 !== ⟦2-char-id⟧ ? JJ : null
+        return null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.pages.filter((⟦2-char-id⟧ => ⟦2-char-id⟧.reachLogIslandAwake)).at(-1)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.reachLogIslandId) && void 0 !== ⟦2-char-id⟧ ? TB : null === (⟦2-char-id⟧ = this.pages[0]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.reachLogIslandId) && void 0 !== ⟦2-char-id⟧ ? BB : null
       }
       markNews() {
         this.newsToken++, this.news = !0, this.clearNewsTimeout(), this.newsTimeout = setTimeout((() => {
```

</details>

<details>
<summary>Hunk 126 · Change · +1 / -1</summary>

```diff
@@ -3763,7 +3763,7 @@
                 visitor: ⟦2-char-id⟧.reachLogFishVisitor
               }
             })),
-            returner: this.buildReturner(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.reachLogPageReturner) && void 0 !== ⟦2-char-id⟧ ? cJ : null)
+            returner: this.buildReturner(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.reachLogPageReturner) && void 0 !== ⟦2-char-id⟧ ? TB : null)
           }
         }))
       }
```

</details>

<details>
<summary>Hunk 127 · Change · +4 / -4</summary>

```diff
@@ -3787,14 +3787,14 @@
     const ⟦2-char-id⟧ = "skyblockLampLightView";
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-        this.Uf = ⟦2-char-id⟧, this.translate = ⟦2-char-id⟧, this.requestCommand = ⟦2-char-id⟧, this.pacer = ⟦2-char-id⟧, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.xn = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = ⟦2-char-id⟧ => {
+        this.yH = ⟦2-char-id⟧, this.translate = ⟦2-char-id⟧, this.requestCommand = ⟦2-char-id⟧, this.pacer = ⟦2-char-id⟧, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.ND = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = ⟦2-char-id⟧ => {
           ⟦2-char-id⟧ ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
         }, this.buy = ⟦2-char-id⟧ => {
-          this.send(`buy ${JJ}`)
+          this.send(`buy ${BB}`)
         }, this.socket = ⟦2-char-id⟧ => {
-          this.send(`socket ${null!==JJ&&void 0!==JJ?JJ:gJ}`)
+          this.send(`socket ${null!==BB&&void 0!==BB?BB:IB}`)
         }, this.wearTint = ⟦2-char-id⟧ => {
-          this.send(`tint ${null!==JJ&&void 0!==JJ?JJ:gJ}`)
+          this.send(`tint ${null!==BB&&void 0!==BB?BB:IB}`)
         }, this.setSituation = ⟦2-char-id⟧ => {
           this.situation = ⟦2-char-id⟧, this.emit()
         }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = ⟦2-char-id⟧.subscribe((() => {
```

</details>

<details>
<summary>Hunk 128 · Change · +2 / -2</summary>

```diff
@@ -3809,12 +3809,12 @@
       ⟦2-char-id⟧(⟦2-char-id⟧) {
         if (this.message = ⟦2-char-id⟧, null !== ⟦2-char-id⟧.lampLightShop && (this.shop = ⟦2-char-id⟧.lampLightShop), "open" === ⟦2-char-id⟧.lampLightKind && (this.refusalKey = null), "reply" === ⟦2-char-id⟧.lampLightKind) {
           var ⟦2-char-id⟧;
-          const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.lampLightReplyTag) && void 0 !== ⟦2-char-id⟧ ? cJ : null,
+          const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.lampLightReplyTag) && void 0 !== ⟦2-char-id⟧ ? TB : null,
             ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && ⟦2-char-id⟧ === this.offTag;
           var ⟦2-char-id⟧, ⟦2-char-id⟧;
           if (⟦2-char-id⟧ ? this.settleOff() : null !== ⟦2-char-id⟧ && ⟦2-char-id⟧ !== this.awaitingTag || this.settleReply(), this.refusalKey = ⟦2-char-id⟧.lampLightRefusalKey, null !== ⟦2-char-id⟧.lampLightBought && !⟦2-char-id⟧) this.sparkle = {
             id: ⟦2-char-id⟧.lampLightBought,
-            count: (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.sparkle) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.count) && void 0 !== ⟦2-char-id⟧ ? ZJ : 0) + 1
+            count: (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.sparkle) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.count) && void 0 !== ⟦2-char-id⟧ ? dB : 0) + 1
           }
         }
         ⟦2-char-id⟧.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === ⟦2-char-id⟧.lampLightKind && (this.lastGained = ⟦2-char-id⟧.lampLightGained, this.gainedCount++), this.emit()
```

</details>

<details>
<summary>Hunk 129 · Change · +2 / -2</summary>

```diff
@@ -3823,13 +3823,13 @@
         ⟦2-char-id⟧ !== this.atChair && (this.atChair = ⟦2-char-id⟧, ⟦2-char-id⟧ && (this.refusalKey = null), this.emit())
       }
       setTranslator(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        this.translate = ⟦2-char-id⟧, this.locale = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? cJ : this.locale, this.emit()
+        this.translate = ⟦2-char-id⟧, this.locale = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? TB : this.locale, this.emit()
       }
       onChairClosed() {
         this.refusalKey = null, this.emit()
       }
       dispose() {
-        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.xn = !0
+        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.ND = !0
       }
       send(⟦2-char-id⟧) {
         var ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 130 · Change · +1 / -1</summary>

```diff
@@ -3838,7 +3838,7 @@
         const ⟦2-char-id⟧ = this.nextTag();
         this.awaitingTag = ⟦2-char-id⟧, this.replyTimeout = setTimeout((() => {
           this.replyTimeout = null, this.awaitingTag = null, this.emit()
-        }), 8⟦2-char-id⟧), this.requestCommand(`lamplight-${JJ} ${ZJ}`), this.emit()
+        }), 8⟦2-char-id⟧), this.requestCommand(`lamplight-${BB} ${dB}`), this.emit()
       }
       sendQueuedOff() {
         if (!this.offQueued || !this.pacer.canSendPriority()) return;
```

</details>

<details>
<summary>Hunk 131 · Change · +1 / -1</summary>

```diff
@@ -3846,7 +3846,7 @@
         const ⟦2-char-id⟧ = this.nextTag();
         this.offTag = ⟦2-char-id⟧, this.pacer.start(), this.offTimeout = setTimeout((() => {
           this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
-        }), 8⟦2-char-id⟧), this.requestCommand(`lamplight-release off ${JJ}`)
+        }), 8⟦2-char-id⟧), this.requestCommand(`lamplight-release off ${BB}`)
       }
       nextTag() {
         return this.lastTag = this.lastTag % 999999 + 1, this.lastTag
```

</details>

<details>
<summary>Hunk 132 · Change · +1 / -1</summary>

```diff
@@ -3864,7 +3864,7 @@
         null !== this.replyTimeout && (clearTimeout(this.replyTimeout), this.replyTimeout = null)
       }
       emit() {
-        this.xn || (this.snapshot = this.buildSnapshot(), this.Uf(this.snapshot))
+        this.ND || (this.snapshot = this.buildSnapshot(), this.yH(this.snapshot))
       }
       formatLight(⟦2-char-id⟧) {
         return Math.floor(⟦2-char-id⟧).toLocaleString(this.locale)
```

</details>

<details>
<summary>Hunk 133 · Change · +1 / -1</summary>

```diff
@@ -3901,7 +3901,7 @@
               meter: ⟦2-char-id⟧.lampLightMeterCatches,
               bloom: ⟦2-char-id⟧.lampLightBloomCatches,
               notice: ⟦2-char-id⟧.lampLightNoticeChance
-            } [⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? ZJ : 0
+            } [⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? dB : 0
           },
           ⟦2-char-id⟧ = {
             bite: !0,
```

</details>

<details>
<summary>Hunk 134 · Change · +2 / -2</summary>

```diff
@@ -3931,8 +3931,8 @@
           ⟦2-char-id⟧ = "bloom" === this.situation;
         return {
           id: ⟦2-char-id⟧.lampLightCharmId,
-          name: this.translate(`skyblockGame:lampLightCharm${FJ}`),
-          effect: this.translate(`skyblockGame:lampLightCharm${FJ}Effect`),
+          name: this.translate(`skyblockGame:lampLightCharm${VB}`),
+          effect: this.translate(`skyblockGame:lampLightCharm${VB}Effect`),
           cost: this.translate("skyblockGame:lampLightCost", {
             light: this.formatLight(⟦2-char-id⟧.lampLightCharmCost)
           }),
```

</details>

<details>
<summary>Hunk 135 · Change · +3 / -3</summary>

```diff
@@ -3946,13 +3946,13 @@
         var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = this.message,
           ⟦2-char-id⟧ = "ready" === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.lampLightStatus) ? this.shop : null,
-          ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.lampLightBalance) && void 0 !== ⟦2-char-id⟧ ? JJ : 0,
+          ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.lampLightBalance) && void 0 !== ⟦2-char-id⟧ ? BB : 0,
           ⟦2-char-id⟧ = this.atChair,
           ⟦2-char-id⟧ = "loading" === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
-          ⟦2-char-id⟧ = "ready" !== (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.lampLightStatus) || ⟦2-char-id⟧ ? null !== (⟦2-char-id⟧ = this.refusalKey) && void 0 !== ⟦2-char-id⟧ ? cJ : qJ : "skyblockGame:lampLightTooFar";
+          ⟦2-char-id⟧ = "ready" !== (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.lampLightStatus) || ⟦2-char-id⟧ ? null !== (⟦2-char-id⟧ = this.refusalKey) && void 0 !== ⟦2-char-id⟧ ? TB : YB : "skyblockGame:lampLightTooFar";
         return {
           enabled: null !== ⟦2-char-id⟧ && "locked" !== ⟦2-char-id⟧.lampLightStatus,
-          status: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.lampLightStatus) && void 0 !== ⟦2-char-id⟧ ? ZJ : "loading",
+          status: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.lampLightStatus) && void 0 !== ⟦2-char-id⟧ ? dB : "loading",
           balance: this.translate("skyblockGame:lampLightBalance", {
             light: this.formatLight(⟦2-char-id⟧)
           }),
```

</details>

<details>
<summary>Hunk 136 · Change · +3 / -3</summary>

```diff
@@ -3971,20 +3971,20 @@
               island: this.translate(⟦2-char-id⟧.lampLightIslandNameKey)
             }),
             heldRod: null !== ⟦2-char-id⟧.lampLightHeldRod,
-            charms: ⟦2-char-id⟧.lampLightCharms.map((⟦2-char-id⟧ => this.charmView(⟦2-char-id⟧, eJ, ⟦2-char-id⟧))),
+            charms: ⟦2-char-id⟧.lampLightCharms.map((⟦2-char-id⟧ => this.charmView(⟦2-char-id⟧, pB, ⟦2-char-id⟧))),
             tints: ⟦2-char-id⟧.lampLightTints.map((⟦2-char-id⟧ => {
               const ⟦2-char-id⟧ = ⟦2-char-id⟧.lampLightTintId,
                 [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧.lampLightTintColour;
               return {
                 id: ⟦2-char-id⟧,
-                name: this.translate(`skyblockGame:lampLightTint${cJ.charAt(0).toUpperCase()}${cJ.slice(1)}`),
+                name: this.translate(`skyblockGame:lampLightTint${TB.charAt(0).toUpperCase()}${TB.slice(1)}`),
                 cost: this.translate("skyblockGame:lampLightCost", {
                   light: this.formatLight(⟦2-char-id⟧.lampLightTintCost)
                 }),
                 owned: ⟦2-char-id⟧.lampLightTintOwned,
                 affordable: ⟦2-char-id⟧ >= ⟦2-char-id⟧.lampLightTintCost,
                 wearing: ⟦2-char-id⟧.lampLightTint === ⟦2-char-id⟧,
-                colour: `rgb(${ZJ}, ${FJ}, ${UJ})`
+                colour: `rgb(${dB}, ${VB}, ${yB})`
               }
             })),
             wearingIslandColours: null === ⟦2-char-id⟧.lampLightTint
```

</details>

<details>
<summary>Hunk 137 · Change · +1 / -1</summary>

```diff
@@ -3998,7 +3998,7 @@
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
-        this.Uf = ⟦2-char-id⟧, this.now = ⟦2-char-id⟧, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = ⟦2-char-id⟧.map((() => 0)), this.wornAt = ⟦2-char-id⟧.map((() => -1 / 0))
+        this.yH = ⟦2-char-id⟧, this.now = ⟦2-char-id⟧, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = ⟦2-char-id⟧.map((() => 0)), this.wornAt = ⟦2-char-id⟧.map((() => -1 / 0))
       }
       getSnapshot() {
         return this.snapshot
```

</details>

<details>
<summary>Hunk 138 · Change · +3 / -3</summary>

```diff
@@ -4006,14 +4006,14 @@
       ⟦2-char-id⟧(⟦2-char-id⟧) {
         var ⟦2-char-id⟧, ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => !0 === ⟦2-char-id⟧.magmawardPiecesWorn[⟦2-char-id⟧]));
-        if (!⟦2-char-id⟧.includes(!0)) return this.snapshot = null, void this.Uf(null);
+        if (!⟦2-char-id⟧.includes(!0)) return this.snapshot = null, void this.yH(null);
         const ⟦2-char-id⟧ = this.now(),
           ⟦2-char-id⟧ = this.snapshot;
         null === ⟦2-char-id⟧ && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.magmawardFuelCarried,
           ⟦2-char-id⟧ = !⟦2-char-id⟧.includes(!1);
-        let ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.pulse) && void 0 !== ⟦2-char-id⟧ ? cJ : null,
-          ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.flare) && void 0 !== ⟦2-char-id⟧ ? ZJ : null;
+        let ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.pulse) && void 0 !== ⟦2-char-id⟧ ? TB : null,
+          ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.flare) && void 0 !== ⟦2-char-id⟧ ? dB : null;
         ⟦2-char-id⟧.magmawardFuelBurned ? (⟦2-char-id⟧ = "burn", ⟦2-char-id⟧ = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = ⟦2-char-id⟧, this.flareAt = ⟦2-char-id⟧) : null !== ⟦2-char-id⟧ && ⟦2-char-id⟧ > ⟦2-char-id⟧.fuel && (⟦2-char-id⟧ = "gain", this.pulseToken++, this.pulseAt = ⟦2-char-id⟧), ⟦2-char-id⟧ && null !== ⟦2-char-id⟧ && !⟦2-char-id⟧.fullSet && (⟦2-char-id⟧ = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = ⟦2-char-id⟧, this.setLitAt = ⟦2-char-id⟧);
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => (⟦2-char-id⟧[⟦2-char-id⟧] && null !== ⟦2-char-id⟧ && !⟦2-char-id⟧.pieces[⟦2-char-id⟧].worn && (this.wornTokens[⟦2-char-id⟧]++, this.wornAt[⟦2-char-id⟧] = ⟦2-char-id⟧), {
           itemName: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 139 · Change · +4 / -4</summary>

```diff
@@ -4027,16 +4027,16 @@
           fullSet: ⟦2-char-id⟧,
           fuel: ⟦2-char-id⟧,
           fuelState: ⟦2-char-id⟧ <= 0 ? "empty" : ⟦2-char-id⟧ <= 3 ? "low" : "ok",
-          pulse: this.isPlaying(this.pulseAt, ⟦2-char-id⟧) ? qJ : null,
+          pulse: this.isPlaying(this.pulseAt, ⟦2-char-id⟧) ? YB : null,
           pulseToken: this.pulseToken,
-          flare: this.isPlaying(this.flareAt, ⟦2-char-id⟧) ? jJ : null,
+          flare: this.isPlaying(this.flareAt, ⟦2-char-id⟧) ? gB : null,
           flareToken: this.flareToken,
           setLit: ⟦2-char-id⟧ && this.isPlaying(this.setLitAt, ⟦2-char-id⟧),
           setLitToken: this.setLitToken
-        }, this.Uf(this.snapshot)
+        }, this.yH(this.snapshot)
       }
       dispose() {
-        this.snapshot = null, this.Uf(null)
+        this.snapshot = null, this.yH(null)
       }
       isPlaying(⟦2-char-id⟧, ⟦2-char-id⟧) {
         return ⟦2-char-id⟧ - ⟦2-char-id⟧ < 1200
```

</details>

<details>
<summary>Hunk 140 · Change · +1 / -1</summary>

```diff
@@ -4045,7 +4045,7 @@
     const ⟦2-char-id⟧ = "skyblockGlowtideView";
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧) {
-        this.Uf = ⟦2-char-id⟧, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = ⟦2-char-id⟧ => {
+        this.yH = ⟦2-char-id⟧, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = ⟦2-char-id⟧ => {
           this.arrow = ⟦2-char-id⟧, this.arrowTurn = NaN
         }
       }
```

</details>

<details>
<summary>Hunk 141 · Change · +1 / -1</summary>

```diff
@@ -4053,7 +4053,7 @@
         return this.snapshot
       }
       ⟦2-char-id⟧(⟦2-char-id⟧) {
-        this.bloom = ⟦2-char-id⟧.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.Uf(null))
+        this.bloom = ⟦2-char-id⟧.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.yH(null))
       }
       afterRender(⟦2-char-id⟧, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = this.bloom;
```

</details>

<details>
<summary>Hunk 142 · Change · +5 / -5</summary>

```diff
@@ -4071,19 +4071,19 @@
           distance: Math.round(⟦2-char-id⟧),
           inRangeToken: this.inRangeToken
         };
-        (null === ⟦2-char-id⟧ || ⟦2-char-id⟧.colour !== ⟦2-char-id⟧.colour || ⟦2-char-id⟧.inRange !== ⟦2-char-id⟧.inRange || !⟦2-char-id⟧ && ⟦2-char-id⟧.distance !== ⟦2-char-id⟧.distance) && (this.snapshot = ⟦2-char-id⟧, this.Uf(⟦2-char-id⟧));
-        const ⟦2-char-id⟧ = ⟦2-char-id⟧.c.computeShortestRotation(⟦2-char-id⟧, (0, ⟦2-char-id⟧.vb)([⟦2-char-id⟧, 0, ⟦2-char-id⟧]));
-        null === this.arrow || Math.abs(⟦2-char-id⟧ - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${hJ}rad)`, this.arrowTurn = ⟦2-char-id⟧)
+        (null === ⟦2-char-id⟧ || ⟦2-char-id⟧.colour !== ⟦2-char-id⟧.colour || ⟦2-char-id⟧.inRange !== ⟦2-char-id⟧.inRange || !⟦2-char-id⟧ && ⟦2-char-id⟧.distance !== ⟦2-char-id⟧.distance) && (this.snapshot = ⟦2-char-id⟧, this.yH(⟦2-char-id⟧));
+        const ⟦2-char-id⟧ = ⟦2-char-id⟧.e.computeShortestRotation(⟦2-char-id⟧, (0, ⟦2-char-id⟧.Fb)([⟦2-char-id⟧, 0, ⟦2-char-id⟧]));
+        null === this.arrow || Math.abs(⟦2-char-id⟧ - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${kB}rad)`, this.arrowTurn = ⟦2-char-id⟧)
       }
       dispose() {
-        this.bloom = null, this.arrow = null, this.snapshot = null, this.Uf(null)
+        this.bloom = null, this.arrow = null, this.snapshot = null, this.yH(null)
       }
     }
     const ⟦2-char-id⟧ = "skyblockGlowMeterView";
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
-        this.Uf = ⟦2-char-id⟧, this.now = ⟦2-char-id⟧, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
+        this.yH = ⟦2-char-id⟧, this.now = ⟦2-char-id⟧, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
       }
       getSnapshot() {
         return this.snapshot
```

</details>

<details>
<summary>Hunk 143 · Change · +1 / -1</summary>

```diff
@@ -4098,7 +4098,7 @@
           ⟦2-char-id⟧ = this.snapshot;
         null !== ⟦2-char-id⟧ && (⟦2-char-id⟧ && !⟦2-char-id⟧.full && (this.fullToken++, this.fullAt = ⟦2-char-id⟧), ⟦2-char-id⟧.full && !⟦2-char-id⟧ ? (this.burstToken++, this.burstAt = ⟦2-char-id⟧) : ⟦2-char-id⟧ > ⟦2-char-id⟧.fill && (this.gainToken++, this.gainAt = ⟦2-char-id⟧)), this.snapshot = {
           fill: ⟦2-char-id⟧,
-          qh: ⟦2-char-id⟧,
+          Kk: ⟦2-char-id⟧,
           ratio: Math.min(1, Math.max(0, ⟦2-char-id⟧ / ⟦2-char-id⟧)),
           full: ⟦2-char-id⟧,
           rares: ⟦2-char-id⟧.glowMeterRares,
```

</details>

<details>
<summary>Hunk 144 · Change · +2 / -2</summary>

```diff
@@ -4108,10 +4108,10 @@
           burstToken: this.burstToken,
           gained: this.isPlaying(this.gainAt, ⟦2-char-id⟧),
           gainToken: this.gainToken
-        }, this.Uf(this.snapshot)
+        }, this.yH(this.snapshot)
       }
       dispose() {
-        this.snapshot = null, this.Uf(null)
+        this.snapshot = null, this.yH(null)
       }
       isPlaying(⟦2-char-id⟧, ⟦2-char-id⟧) {
         return ⟦2-char-id⟧ - ⟦2-char-id⟧ < 2⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 145 · Change · +1 / -1</summary>

```diff
@@ -4120,7 +4120,7 @@
     const ⟦2-char-id⟧ = "skyblockHushWaitView";
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧) {
-        this.Uf = ⟦2-char-id⟧, this.snapshot = null, this.token = 0, this.timers = []
+        this.yH = ⟦2-char-id⟧, this.snapshot = null, this.token = 0, this.timers = []
       }
       getSnapshot() {
         return this.snapshot
```

</details>

<details>
<summary>Hunk 146 · Change · +1 / -1</summary>

```diff
@@ -4142,7 +4142,7 @@
         }), void this.later(3500, (() => {
           this.show(null)
         }));
-        const ⟦2-char-id⟧ = Math.max(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧, ⟦2-char-id⟧),
+        const ⟦2-char-id⟧ = Math.max(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧, ⟦2-char-id⟧),
           ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧,
           ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧ * ⟦2-char-id⟧ / ⟦2-char-id⟧.length,
           ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 147 · Change · +1 / -1</summary>

```diff
@@ -4169,7 +4169,7 @@
         this.clearTimers(), this.show(null)
       }
       show(⟦2-char-id⟧) {
-        this.snapshot = ⟦2-char-id⟧, this.Uf(⟦2-char-id⟧)
+        this.snapshot = ⟦2-char-id⟧, this.yH(⟦2-char-id⟧)
       }
       later(⟦2-char-id⟧, ⟦2-char-id⟧) {
         this.timers.push(setTimeout(⟦2-char-id⟧, ⟦2-char-id⟧))
```

</details>

<details>
<summary>Hunk 148 · Change · +1 / -1</summary>

```diff
@@ -4221,7 +4221,7 @@
           atMs: 0
         }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
           this.open ? this.dismiss() : (this.picked = null, this.show())
-        }, this.PD = ⟦2-char-id⟧ => {
+        }, this.dO = ⟦2-char-id⟧ => {
           this.picked = ⟦2-char-id⟧, this.emit()
         }, this.snapshot = this.buildSnapshot()
       }
```

</details>

<details>
<summary>Hunk 149 · Change · +1 / -1</summary>

```diff
@@ -4231,7 +4231,7 @@
           for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.tideCharts) {
             var ⟦2-char-id⟧;
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.tideCharts.find((⟦2-char-id⟧ => ⟦2-char-id⟧.tideChartIsland === ⟦2-char-id⟧.tideChartIsland)),
-              ⟦2-char-id⟧ = ⟦2-char-id⟧.tideChartLit & ~(null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.tideChartLit) && void 0 !== ⟦2-char-id⟧ ? ZJ : 0);
+              ⟦2-char-id⟧ = ⟦2-char-id⟧.tideChartLit & ~(null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.tideChartLit) && void 0 !== ⟦2-char-id⟧ ? dB : 0);
             void 0 !== ⟦2-char-id⟧ && 0 !== ⟦2-char-id⟧ && (this.pulse = {
               island: ⟦2-char-id⟧.tideChartIsland,
               cells: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 150 · Change · +1 / -1</summary>

```diff
@@ -4244,7 +4244,7 @@
       locate(⟦2-char-id⟧, ⟦2-char-id⟧) {
         var ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = null === this.message || Number.isNaN(⟦2-char-id⟧) ? null : ⟦2-char-id⟧(this.message, ⟦2-char-id⟧, ⟦2-char-id⟧),
-          ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.tideChartIsland) && void 0 !== ⟦2-char-id⟧ ? ZJ : null,
+          ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.tideChartIsland) && void 0 !== ⟦2-char-id⟧ ? dB : null,
           ⟦2-char-id⟧ = null === ⟦2-char-id⟧ ? -1 : function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             const [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧.tideChartWater;
             return function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 151 · Change · +1 / -1</summary>

```diff
@@ -4294,7 +4294,7 @@
       }
       findChart(⟦2-char-id⟧, ⟦2-char-id⟧) {
         var ⟦2-char-id⟧;
-        return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.tideCharts.find((⟦2-char-id⟧ => ⟦2-char-id⟧.tideChartIsland === ⟦2-char-id⟧))) && void 0 !== ⟦2-char-id⟧ ? ZJ : null
+        return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.tideCharts.find((⟦2-char-id⟧ => ⟦2-char-id⟧.tideChartIsland === ⟦2-char-id⟧))) && void 0 !== ⟦2-char-id⟧ ? dB : null
       }
       describe(⟦2-char-id⟧) {
         var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 152 · Change · +1 / -1</summary>

```diff
@@ -4317,7 +4317,7 @@
           }),
           ⟦2-char-id⟧ = null === ⟦2-char-id⟧.tideChartPictureNameKey ? null : this.translate(⟦2-char-id⟧.tideChartPictureNameKey),
           ⟦2-char-id⟧ = this.hereIsland === ⟦2-char-id⟧ && -1 !== this.hereCell ? this.hereCell : null,
-          ⟦2-char-id⟧ = [`${qJ}: ${jJ}.`];
+          ⟦2-char-id⟧ = [`${YB}: ${gB}.`];
         if (null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
             picture: ⟦2-char-id⟧
           })), null !== ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 153 · Change · +1 / -1</summary>

```diff
@@ -4341,7 +4341,7 @@
           pulseCells: this.pulse.island === ⟦2-char-id⟧ ? this.pulse.cells : 0,
           pulseToken: this.pulse.token,
           castCell: (null === (⟦2-char-id⟧ = this.cast) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.island) === ⟦2-char-id⟧ ? this.cast.cell : null,
-          castToken: null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.cast) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.token) && void 0 !== ⟦2-char-id⟧ ? ZJ : 0
+          castToken: null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.cast) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.token) && void 0 !== ⟦2-char-id⟧ ? dB : 0
         }
       }
       buildSnapshot() {
```

</details>

<details>
<summary>Hunk 154 · Change · +2 / -2</summary>

```diff
@@ -4357,13 +4357,13 @@
           tabs: []
         };
         const ⟦2-char-id⟧ = this.findChart(⟦2-char-id⟧, this.hereIsland),
-          ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = this.findChart(⟦2-char-id⟧, this.open ? this.picked : null)) && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧ ? cJ : this.findChart(⟦2-char-id⟧, this.lastIsland)) && void 0 !== ⟦2-char-id⟧ ? JJ : ⟦2-char-id⟧.tideCharts[0],
+          ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = this.findChart(⟦2-char-id⟧, this.open ? this.picked : null)) && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧ ? TB : this.findChart(⟦2-char-id⟧, this.lastIsland)) && void 0 !== ⟦2-char-id⟧ ? BB : ⟦2-char-id⟧.tideCharts[0],
           ⟦2-char-id⟧ = null === ⟦2-char-id⟧ ? null : this.describe(⟦2-char-id⟧);
         return this.turnsCheckedAtMs = this.now(), {
           enabled: !0,
           open: this.open,
           chip: ⟦2-char-id⟧,
-          card: ⟦2-char-id⟧ === ⟦2-char-id⟧ ? XJ : this.describe(⟦2-char-id⟧),
+          card: ⟦2-char-id⟧ === ⟦2-char-id⟧ ? lB : this.describe(⟦2-char-id⟧),
           turnsText: ⟦2-char-id⟧(this.translate, ⟦2-char-id⟧.tideChartTurnsInMs, this.now() - this.receivedAtMs),
           bookText: this.translate("skyblockGame:tideChartsBook", {
             count: String(⟦2-char-id⟧.tideChartBookCount)
```

</details>

<details>
<summary>Hunk 155 · Change · +2 / -2</summary>

```diff
@@ -4449,10 +4449,10 @@
           gifts: [{
             text: ⟦2-char-id⟧("skyblockGame:regularsGiftFlare"),
             given: ⟦2-char-id⟧ >= 3
-          }, this.describeGift(⟦2-char-id⟧.regularTintGift, lF, {
+          }, this.describeGift(⟦2-char-id⟧.regularTintGift, By, {
             tint: ⟦2-char-id⟧(⟦2-char-id⟧.regularTintNameKey)
           })],
-          history: [...JJ.regularHistory].reverse().map((⟦2-char-id⟧ => {
+          history: [...BB.regularHistory].reverse().map((⟦2-char-id⟧ => {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.regularMeetingKg.toFixed(1),
               ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧.regularMeetingDay;
             return ⟦2-char-id⟧ <= 0 ? ⟦2-char-id⟧("skyblockGame:regularsToday", {
```

</details>

<details>
<summary>Hunk 156 · Change · +1 / -1</summary>

```diff
@@ -4468,7 +4468,7 @@
         return {
           id: ⟦2-char-id⟧.regularsIslandId,
           name: this.translate(⟦2-char-id⟧.regularsIslandNameKey),
-          charm: this.describeGift(⟦2-char-id⟧.regularsCharmGift, JU, {
+          charm: this.describeGift(⟦2-char-id⟧.regularsCharmGift, Ty, {
             charm: this.translate(⟦2-char-id⟧.regularsCharmNameKey)
           }),
           regulars: ⟦2-char-id⟧.regularsList.map((⟦2-char-id⟧ => this.describeRegular(⟦2-char-id⟧, ⟦2-char-id⟧)))
```

</details>

<details>
<summary>Hunk 157 · Change · +1 / -1</summary>

```diff
@@ -4484,7 +4484,7 @@
           islands: []
         };
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.regularsIslands.map((⟦2-char-id⟧ => this.describeIsland(⟦2-char-id⟧, ⟦2-char-id⟧.regularsToday))),
-          ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.id === this.selected))) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.id) && void 0 !== ⟦2-char-id⟧ ? cJ : null === (⟦2-char-id⟧ = ⟦2-char-id⟧[0]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.id) && void 0 !== ⟦2-char-id⟧ ? JJ : "";
+          ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.id === this.selected))) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.id) && void 0 !== ⟦2-char-id⟧ ? TB : null === (⟦2-char-id⟧ = ⟦2-char-id⟧[0]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.id) && void 0 !== ⟦2-char-id⟧ ? BB : "";
         return {
           enabled: !0,
           open: this.open,
```

</details>

<details>
<summary>Hunk 158 · Change · +1 / -1</summary>

```diff
@@ -4499,7 +4499,7 @@
     const ⟦2-char-id⟧ = "skyblockHiddenWatersView";
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧) {
-        this.Uf = ⟦2-char-id⟧, this.snapshot = null
+        this.yH = ⟦2-char-id⟧, this.snapshot = null
       }
       getSnapshot() {
         return this.snapshot
```

</details>

<details>
<summary>Hunk 159 · Change · +1 / -1</summary>

```diff
@@ -4512,7 +4512,7 @@
           }), ⟦2-char-id⟧ = new Map;
           for (const [⟦2-char-id⟧, ⟦2-char-id⟧] of ⟦2-char-id⟧.hiddenWatersGlimpses) {
             var ⟦2-char-id⟧;
-            const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? eJ : [];
+            const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? pB : [];
             ⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧)
           }
           return {
```

</details>

<details>
<summary>Hunk 160 · Change · +1 / -1</summary>

```diff
@@ -4538,7 +4538,7 @@
             })),
             glimpses: ⟦2-char-id⟧
           }
-        }(⟦2-char-id⟧), this.Uf(this.snapshot)
+        }(⟦2-char-id⟧), this.yH(this.snapshot)
       }
     }
     const ⟦2-char-id⟧ = "skyblockDialogueView";
```

</details>

<details>
<summary>Hunk 161 · Change · +1 / -1</summary>

```diff
@@ -4587,7 +4587,7 @@
           completedLabel: this.translate("skyblockDialogue:completed")
         };
         if (!this.open) return {
-          ...cJ,
+          ...TB,
           characters: [],
           questFocus: null,
           conversations: []
```

</details>

<details>
<summary>Hunk 162 · Change · +1 / -1</summary>

```diff
@@ -4596,7 +4596,7 @@
         if ("quest" === ⟦2-char-id⟧.kind) {
           const ⟦2-char-id⟧ = this.scripts.find((⟦2-char-id⟧ => ⟦2-char-id⟧.dialogueQuestId === ⟦2-char-id⟧.questId));
           return {
-            ...cJ,
+            ...TB,
             characters: [],
             questFocus: ⟦2-char-id⟧.questId,
             conversations: ⟦2-char-id⟧ ? [this.conversation(⟦2-char-id⟧)] : []
```

</details>

<details>
<summary>Hunk 163 · Change · +3 / -3</summary>

```diff
@@ -4607,14 +4607,14 @@
           const ⟦2-char-id⟧ = this.scripts[⟦2-char-id⟧].dialogueLines;
           for (let ⟦2-char-id⟧ = ⟦2-char-id⟧.length - 1; ⟦2-char-id⟧ >= 0; ⟦2-char-id⟧--) ⟦2-char-id⟧.includes(⟦2-char-id⟧[⟦2-char-id⟧].dialogueSpeakerId) || ⟦2-char-id⟧.push(⟦2-char-id⟧[⟦2-char-id⟧].dialogueSpeakerId)
         }
-        const ⟦2-char-id⟧ = null !== ⟦2-char-id⟧.npcId && ⟦2-char-id⟧.includes(⟦2-char-id⟧.npcId) ? ⟦2-char-id⟧.npcId : null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[0]) && void 0 !== ⟦2-char-id⟧ ? JJ : null;
+        const ⟦2-char-id⟧ = null !== ⟦2-char-id⟧.npcId && ⟦2-char-id⟧.includes(⟦2-char-id⟧.npcId) ? ⟦2-char-id⟧.npcId : null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[0]) && void 0 !== ⟦2-char-id⟧ ? BB : null;
         return {
-          ...cJ,
+          ...TB,
           characters: ⟦2-char-id⟧.map((⟦2-char-id⟧ => {
             var ⟦2-char-id⟧, ⟦2-char-id⟧;
             return {
               id: ⟦2-char-id⟧,
-              styling: null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.speakers.get(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.dialogueSpeakerStyling) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧,
+              styling: null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.speakers.get(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.dialogueSpeakerStyling) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧,
               selected: ⟦2-char-id⟧ === ⟦2-char-id⟧
             }
           })),
```

</details>

<details>
<summary>Hunk 164 · Change · +4 / -4</summary>

```diff
@@ -4648,13 +4648,13 @@
       params(⟦2-char-id⟧) {
         if (void 0 !== ⟦2-char-id⟧) return Object.fromEntries(Object.entries(⟦2-char-id⟧).map((⟦2-char-id⟧ => {
           let [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
-          return [⟦2-char-id⟧, "string" === typeof ⟦2-char-id⟧ ? ZJ : this.translate(⟦2-char-id⟧.translationKey)]
+          return [⟦2-char-id⟧, "string" === typeof ⟦2-char-id⟧ ? dB : this.translate(⟦2-char-id⟧.translationKey)]
         })))
       }
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(521),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1168),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(80);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(554),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1147),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(95);
     const ⟦2-char-id⟧ = "skyblockAutographsView";
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 165 · Change · +4 / -4</summary>

```diff
@@ -4691,13 +4691,13 @@
       }
       buildSnapshot() {
         var ⟦2-char-id⟧;
-        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = this.signatures) && void 0 !== ⟦2-char-id⟧ ? JJ : [],
+        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = this.signatures) && void 0 !== ⟦2-char-id⟧ ? BB : [],
           ⟦2-char-id⟧ = new Intl.DateTimeFormat(this.locale, {
             dateStyle: "medium"
           }),
-          ⟦2-char-id⟧ = [...cJ].sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => Number(null !== ⟦2-char-id⟧.autographRank) - Number(null !== ⟦2-char-id⟧.autographRank) || ⟦2-char-id⟧.autographSignedAtMs - ⟦2-char-id⟧.autographSignedAtMs)).map((⟦2-char-id⟧ => ({
-            key: `${JJ.autographSignedAtMs}|${JJ.autographSignerName}`,
-            name: (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧.autographSignerName, !⟦2-char-id⟧.featureFlags.canSeeRealPlayerNames),
+          ⟦2-char-id⟧ = [...TB].sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => Number(null !== ⟦2-char-id⟧.autographRank) - Number(null !== ⟦2-char-id⟧.autographRank) || ⟦2-char-id⟧.autographSignedAtMs - ⟦2-char-id⟧.autographSignedAtMs)).map((⟦2-char-id⟧ => ({
+            key: `${BB.autographSignedAtMs}|${BB.autographSignerName}`,
+            name: (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧.autographSignerName, !⟦2-char-id⟧.featureFlags.canSeeRealPlayerNames),
             rank: null === ⟦2-char-id⟧.autographRank ? null : ⟦2-char-id⟧(⟦2-char-id⟧.autographRank),
             signedOn: ⟦2-char-id⟧.format(⟦2-char-id⟧.autographSignedAtMs)
           })));
```

</details>

<details>
<summary>Hunk 166 · Change · +1 / -1</summary>

```diff
@@ -4771,7 +4771,7 @@
           requestLampLight: ⟦2-char-id⟧ = ⟦2-char-id⟧,
           requestDialogue: ⟦2-char-id⟧ = ⟦2-char-id⟧
         } = ⟦2-char-id⟧;
-        this.navigation = void 0, this.map = void 0, this.compass = new ⟦2-char-id⟧, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new ⟦2-char-id⟧.e, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = ⟦2-char-id⟧ => ⟦2-char-id⟧, this.close = () => {
+        this.navigation = void 0, this.map = void 0, this.compass = new ⟦2-char-id⟧, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new ⟦2-char-id⟧.d, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = ⟦2-char-id⟧ => ⟦2-char-id⟧, this.close = () => {
           for (const ⟦2-char-id⟧ of this.panels) ⟦2-char-id⟧.close()
         }, this.setMenuOpen = ⟦2-char-id⟧, this.publishHud = ⟦2-char-id⟧, this.portalTransit = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), this.magmaward = new ⟦2-char-id⟧(⟦2-char-id⟧), this.glowtide = new ⟦2-char-id⟧(⟦2-char-id⟧), this.glowMeter = new ⟦2-char-id⟧(⟦2-char-id⟧), this.hushWait = new ⟦2-char-id⟧(⟦2-char-id⟧), this.dailyReward = new ⟦2-char-id⟧(⟦2-char-id⟧, (() => ⟦2-char-id⟧() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (⟦2-char-id⟧ => {
           this.quests.setNotificationsHeld(⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 167 · Change · +3 / -3</summary>

```diff
@@ -4815,15 +4815,15 @@
           this.beforePanelOpen(this.dialogue)
         }), ⟦2-char-id⟧, ⟦2-char-id⟧), this.autographs = new ⟦2-char-id⟧(⟦2-char-id⟧, (() => {
           this.beforePanelOpen(this.autographs)
-        }), ⟦2-char-id⟧), this.mailbox = new ⟦2-char-id⟧(⟦2-char-id⟧, (() => ⟦2-char-id⟧() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), ⟦2-char-id⟧), this.quests.translateWithIcons = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? ZJ : null, this.skills.onLevelUp = ⟦2-char-id⟧ => {
+        }), ⟦2-char-id⟧), this.mailbox = new ⟦2-char-id⟧(⟦2-char-id⟧, (() => ⟦2-char-id⟧() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), ⟦2-char-id⟧), this.quests.translateWithIcons = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? dB : null, this.skills.onLevelUp = ⟦2-char-id⟧ => {
           this.quests.notify(⟦2-char-id⟧)
         }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new ⟦2-char-id⟧(this.map, this.quests, this.compass, ⟦2-char-id⟧)
       }
       getHudSnapshot() {
         const ⟦2-char-id⟧ = this.hudSnapshot,
           ⟦2-char-id⟧ = this.dailyReward.getHeldCoins();
-        return null === ⟦2-char-id⟧ || ⟦2-char-id⟧ <= 0 || !("hudPurseCoins" in ⟦2-char-id⟧) ? JJ : {
-          ...JJ,
+        return null === ⟦2-char-id⟧ || ⟦2-char-id⟧ <= 0 || !("hudPurseCoins" in ⟦2-char-id⟧) ? BB : {
+          ...BB,
           hudPurseCoins: Math.max(0, ⟦2-char-id⟧.hudPurseCoins - ⟦2-char-id⟧)
         }
       }
```

</details>

<details>
<summary>Hunk 168 · Change · +1 / -1</summary>

```diff
@@ -4839,7 +4839,7 @@
       }
       setTranslator(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ⟦2-char-id⟧ => this.resolveItemName(⟦2-char-id⟧, ⟦2-char-id⟧);
-        this.quests.translateWithIcons = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? ZJ : null, this.navigation.setTranslator(⟦2-char-id⟧, ⟦2-char-id⟧), this.lampLight.setTranslator(⟦2-char-id⟧, ⟦2-char-id⟧), this.mailbox.setItemName(⟦2-char-id⟧);
+        this.quests.translateWithIcons = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? dB : null, this.navigation.setTranslator(⟦2-char-id⟧, ⟦2-char-id⟧), this.lampLight.setTranslator(⟦2-char-id⟧, ⟦2-char-id⟧), this.mailbox.setItemName(⟦2-char-id⟧);
         for (const ⟦2-char-id⟧ of this.panels) ⟦2-char-id⟧.setTranslator(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
       }
       dispose() {
```

</details>

<details>
<summary>Hunk 169 · Change · +10 / -10</summary>

```diff
@@ -4847,17 +4847,17 @@
         for (const ⟦2-char-id⟧ of this.panels) ⟦2-char-id⟧.dispose()
       }
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(926),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(933),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(13),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(35658),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2900),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1688),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1675),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8580),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1086),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1326),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(21),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(35589),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2884),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1666),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1657),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8594),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1078),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1317),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let {
```

</details>

<details>
<summary>Hunk 170 · Change · +4 / -4</summary>

```diff
@@ -4865,20 +4865,20 @@
         minimap: ⟦2-char-id⟧,
         children: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getHudSnapshot()),
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getHudSnapshot()),
         [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(⟦2-char-id⟧.skills.getSnapshot().overallLevel);
-      (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧, (⟦2-char-id⟧ => {
+      (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧, (⟦2-char-id⟧ => {
         ⟦2-char-id⟧(⟦2-char-id⟧.overallLevel)
       }));
       const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null);
-      (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧, (⟦2-char-id⟧ => {
+      (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧, (⟦2-char-id⟧ => {
         ! function(⟦2-char-id⟧, ⟦2-char-id⟧) {
           if (null === ⟦2-char-id⟧ || "function" !== typeof ⟦2-char-id⟧.animate) return;
           const ⟦2-char-id⟧ = ⟦2-char-id⟧ ? 1.35 : 1.15;
           ⟦2-char-id⟧.animate([{
             transform: "scale(1)"
           }, {
-            transform: `scale(${ZJ})`
+            transform: `scale(${dB})`
           }, {
             transform: "scale(1)"
           }], {
```

</details>

<details>
<summary>Hunk 171 · Change · +3 / -3</summary>

```diff
@@ -4889,10 +4889,10 @@
       }));
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), {
+      } = (0, ⟦2-char-id⟧.z)(), {
         isTouchScreen: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.j)(["isTouchScreen"]), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null);
-      return (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧, ".SkyblockRightHud"), null !== ⟦2-char-id⟧ || ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.f, {
+      } = (0, ⟦2-char-id⟧.m)(["isTouchScreen"]), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null);
+      return (0, ⟦2-char-id⟧.k)(⟦2-char-id⟧, ".SkyblockRightHud"), null !== ⟦2-char-id⟧ || ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
         placement: "topRight",
         children: (0, ⟦2-char-id⟧.jsxs)("div", {
           className: ⟦2-char-id⟧()("SkyblockRightHud", {
```

</details>

<details>
<summary>Hunk 172 · Change · +3 / -3</summary>

```diff
@@ -4911,15 +4911,15 @@
                   className: "SkyblockHudIdentity",
                   children: [(0, ⟦2-char-id⟧.jsx)("strong", {
                     style: {
-                      color: ⟦2-char-id⟧.D.cyanUiText
+                      color: ⟦2-char-id⟧.L.cyanUiText
                     },
                     children: ⟦2-char-id⟧(⟦2-char-id⟧.hudZoneNameKey)
                   }), null !== ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("span", {
                     style: {
-                      color: ⟦2-char-id⟧.D.goldUiText
+                      color: ⟦2-char-id⟧.L.goldUiText
                     },
                     children: ⟦2-char-id⟧("skyblockGame:level", {
-                      level: (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧)
+                      level: (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧)
                     })
                   })]
                 }), (0, ⟦2-char-id⟧.jsxs)("span", {
```

</details>

<details>
<summary>Hunk 173 · Change · +4 / -4</summary>

```diff
@@ -4927,19 +4927,19 @@
                   ref: ⟦2-char-id⟧,
                   children: [(0, ⟦2-char-id⟧.jsx)("span", {
                     "aria-hidden": "true",
-                    children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                    children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
                       itemName: "Gold Coin",
                       amount: 0
                     })
-                  }), (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧.hudPurseCoins)]
+                  }), (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧.hudPurseCoins)]
                 })]
               }), ⟦2-char-id⟧.hudClockText.length > 0 && (0, ⟦2-char-id⟧.jsx)("div", {
                 className: "SkyblockHudClock",
-                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                   text: ⟦2-char-id⟧.hudClockText
                 })
               })]
-            }), FJ, "hudZoneNameKey" in ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
+            }), VB, "hudZoneNameKey" in ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
               className: "SkyblockHudAddress",
               children: "www.bloxd.io"
             })]
```

</details>

<details>
<summary>Hunk 174 · Change · +1 / -1</summary>

```diff
@@ -4967,7 +4967,7 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)();
+      } = (0, ⟦2-char-id⟧.z)();
       return (0, ⟦2-char-id⟧.jsx)("div", {
         className: "SkyblockMapPlayer",
         ref: ⟦2-char-id⟧.display.mountPlayer,
```

</details>

<details>
<summary>Hunk 175 · Change · +2 / -2</summary>

```diff
@@ -4977,12 +4977,12 @@
         })
       })
     }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧(37538),
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧(37514),
       ⟦2-char-id⟧ = Object.fromEntries(⟦2-char-id⟧.keys().map((⟦2-char-id⟧ => [⟦2-char-id⟧.replace(/^\.\/(.*)\.png$/, "$1"), ⟦2-char-id⟧(⟦2-char-id⟧)])));
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
-      return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧[⟦2-char-id⟧]
+      return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧[⟦2-char-id⟧]
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 176 · Change · +2 / -2</summary>

```diff
@@ -5010,13 +5010,13 @@
           phase: "entering"
         };
         return ⟦2-char-id⟧.geometryKey === ⟦2-char-id⟧ ? [{
-          ...FJ,
+          ...VB,
           phase: "leaving"
         }, ⟦2-char-id⟧] : [⟦2-char-id⟧]
       }(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
       return ⟦2-char-id⟧ !== ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.Fragment, {
         children: ⟦2-char-id⟧.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsx)("img", {
-          className: ⟦2-char-id⟧()("SkyblockMapTerrainImage", eJ, {
+          className: ⟦2-char-id⟧()("SkyblockMapTerrainImage", pB, {
             Entering: "entering" === ⟦2-char-id⟧.phase,
             Leaving: "leaving" === ⟦2-char-id⟧.phase
           }),
```

</details>

<details>
<summary>Hunk 177 · Change · +1 / -1</summary>

```diff
@@ -5025,7 +5025,7 @@
           onAnimationEnd: () => {
             ⟦2-char-id⟧((⟦2-char-id⟧ => function(⟦2-char-id⟧, ⟦2-char-id⟧) {
               return ⟦2-char-id⟧.flatMap((⟦2-char-id⟧ => ⟦2-char-id⟧.id !== ⟦2-char-id⟧ ? [⟦2-char-id⟧] : "leaving" === ⟦2-char-id⟧.phase ? [] : [{
-                ...JJ,
+                ...BB,
                 phase: "shown"
               }]))
             }(⟦2-char-id⟧, ⟦2-char-id⟧.id)))
```

</details>

<details>
<summary>Hunk 178 · Change · +2 / -2</summary>

```diff
@@ -5033,8 +5033,8 @@
         }, ⟦2-char-id⟧.id)))
       })
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(3950),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1329);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(3942),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1324);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       if ("Tab" !== ⟦2-char-id⟧.key) return;
```

</details>

<details>
<summary>Hunk 179 · Change · +1 / -1</summary>

```diff
@@ -5074,7 +5074,7 @@
         children: [(0, ⟦2-char-id⟧.jsx)("div", {
           className: "SkillProgressBarFill",
           style: {
-            transform: `scaleX(${cJ/100})`
+            transform: `scaleX(${TB/100})`
           }
         }), null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
           className: "SkillProgressBarLevelUp",
```

</details>

<details>
<summary>Hunk 180 · Change · +1 / -1</summary>

```diff
@@ -5110,7 +5110,7 @@
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.current;
         if (!⟦2-char-id⟧ || null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || !⟦2-char-id⟧.local || !⟦2-char-id⟧) return;
         const ⟦2-char-id⟧ = Array.from(⟦2-char-id⟧.querySelectorAll(".SkyblockMapNode")),
-          ⟦2-char-id⟧ = [...cJ.points, ...cJ.portals],
+          ⟦2-char-id⟧ = [...TB.points, ...TB.portals],
           ⟦2-char-id⟧ = () => {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.clientWidth,
               ⟦2-char-id⟧ = ⟦2-char-id⟧.clientHeight,
```

</details>

<details>
<summary>Hunk 181 · Change · +1 / -1</summary>

```diff
@@ -5128,7 +5128,7 @@
               ⟦2-char-id⟧ = new Map(⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => [⟦2-char-id⟧.id, ⟦2-char-id⟧[⟦2-char-id⟧]])));
             for (const ⟦2-char-id⟧ of function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
                 const ⟦2-char-id⟧ = [],
-                  ⟦2-char-id⟧ = [...JJ].sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => Number(⟦2-char-id⟧.portal) - Number(⟦2-char-id⟧.portal) || ⟦2-char-id⟧.id.localeCompare(⟦2-char-id⟧.id)));
+                  ⟦2-char-id⟧ = [...BB].sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => Number(⟦2-char-id⟧.portal) - Number(⟦2-char-id⟧.portal) || ⟦2-char-id⟧.id.localeCompare(⟦2-char-id⟧.id)));
                 for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
                   const ⟦2-char-id⟧ = ⟦2-char-id⟧ => Math.max(⟦2-char-id⟧.width / 2, Math.min(⟦2-char-id⟧ - ⟦2-char-id⟧.width / 2, ⟦2-char-id⟧)),
                     ⟦2-char-id⟧ = ⟦2-char-id⟧ => Math.max(⟦2-char-id⟧.height / 2, Math.min(⟦2-char-id⟧ - ⟦2-char-id⟧.height / 2, ⟦2-char-id⟧)),
```

</details>

<details>
<summary>Hunk 182 · Change · +1 / -1</summary>

```diff
@@ -5136,7 +5136,7 @@
                     ⟦2-char-id⟧ = [⟦2-char-id⟧(⟦2-char-id⟧.y)];
                   for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.push(⟦2-char-id⟧(⟦2-char-id⟧.x - (⟦2-char-id⟧.width + ⟦2-char-id⟧.width) / 2 - 4), ⟦2-char-id⟧(⟦2-char-id⟧.x + (⟦2-char-id⟧.width + ⟦2-char-id⟧.width) / 2 + 4)), ⟦2-char-id⟧.push(⟦2-char-id⟧(⟦2-char-id⟧.y - (⟦2-char-id⟧.height + ⟦2-char-id⟧.height) / 2 - 4), ⟦2-char-id⟧(⟦2-char-id⟧.y + (⟦2-char-id⟧.height + ⟦2-char-id⟧.height) / 2 + 4));
                   let ⟦2-char-id⟧ = {
-                      ...eJ,
+                      ...pB,
                       x: ⟦2-char-id⟧[0],
                       y: ⟦2-char-id⟧[0]
                     },
```

</details>

<details>
<summary>Hunk 183 · Change · +1 / -1</summary>

```diff
@@ -5148,7 +5148,7 @@
                       for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧ += Math.max(0, (⟦2-char-id⟧.width + ⟦2-char-id⟧.width) / 2 + 4 - Math.abs(⟦2-char-id⟧ - ⟦2-char-id⟧.x)) * Math.max(0, (⟦2-char-id⟧.height + ⟦2-char-id⟧.height) / 2 + 4 - Math.abs(⟦2-char-id⟧ - ⟦2-char-id⟧.y));
                       const ⟦2-char-id⟧ = (⟦2-char-id⟧ - ⟦2-char-id⟧.x) ** 2 + (⟦2-char-id⟧ - ⟦2-char-id⟧.y) ** 2;
                       (⟦2-char-id⟧ < ⟦2-char-id⟧ || ⟦2-char-id⟧ === ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧) && (⟦2-char-id⟧ = {
-                        ...eJ,
+                        ...pB,
                         x: ⟦2-char-id⟧,
                         y: ⟦2-char-id⟧
                       }, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 184 · Change · +1 / -1</summary>

```diff
@@ -5158,7 +5158,7 @@
                 return ⟦2-char-id⟧
               }(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)) {
               const ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧.id);
-              ⟦2-char-id⟧.style.left = `${cJ.x}px`, ⟦2-char-id⟧.style.top = `${cJ.y}px`
+              ⟦2-char-id⟧.style.left = `${TB.x}px`, ⟦2-char-id⟧.style.top = `${TB.y}px`
             }
           };
         ⟦2-char-id⟧();
```

</details>

<details>
<summary>Hunk 185 · Change · +2 / -2</summary>

```diff
@@ -5208,8 +5208,8 @@
       const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.zoom, 1, 12);
       return {
         zoom: ⟦2-char-id⟧,
-        x: ⟦2-char-id⟧(⟦2-char-id⟧.x, ZJ, ⟦2-char-id⟧.x0, ⟦2-char-id⟧.x1),
-        y: ⟦2-char-id⟧(⟦2-char-id⟧.y, ZJ, ⟦2-char-id⟧.y0, ⟦2-char-id⟧.y1)
+        x: ⟦2-char-id⟧(⟦2-char-id⟧.x, dB, ⟦2-char-id⟧.x0, ⟦2-char-id⟧.x1),
+        y: ⟦2-char-id⟧(⟦2-char-id⟧.y, dB, ⟦2-char-id⟧.y0, ⟦2-char-id⟧.y1)
       }
     }
 
```

</details>

<details>
<summary>Hunk 186 · Change · +1 / -1</summary>

```diff
@@ -5263,7 +5263,7 @@
             if (!⟦2-char-id⟧) return;
             const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
             if (⟦2-char-id⟧.set(⟦2-char-id⟧.pointerId, ⟦2-char-id⟧), 2 === ⟦2-char-id⟧.size) {
-              const [⟦2-char-id⟧, ⟦2-char-id⟧] = [...AJ.values()], ⟦2-char-id⟧ = Math.hypot(⟦2-char-id⟧.x - ⟦2-char-id⟧.x, ⟦2-char-id⟧.y - ⟦2-char-id⟧.y);
+              const [⟦2-char-id⟧, ⟦2-char-id⟧] = [...JB.values()], ⟦2-char-id⟧ = Math.hypot(⟦2-char-id⟧.x - ⟦2-char-id⟧.x, ⟦2-char-id⟧.y - ⟦2-char-id⟧.y);
               if (⟦2-char-id⟧ > 0) {
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧ / ⟦2-char-id⟧;
                 ⟦2-char-id⟧((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, (⟦2-char-id⟧.x + ⟦2-char-id⟧.x) / 2, (⟦2-char-id⟧.y + ⟦2-char-id⟧.y) / 2, ⟦2-char-id⟧())))
```

</details>

<details>
<summary>Hunk 187 · Change · +6 / -6</summary>

```diff
@@ -5308,27 +5308,27 @@
         controller: ⟦2-char-id⟧,
         navigation: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
         {
           t: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.F)(),
+        } = (0, ⟦2-char-id⟧.z)(),
         ⟦2-char-id⟧ = ⟦2-char-id⟧(),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.presentation,
         ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null),
         ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null),
         ⟦2-char-id⟧ = Boolean(⟦2-char-id⟧.open && (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.local) && ⟦2-char-id⟧.background),
-        ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, `${AJ.open}|${AJ.tab}|${null===YJ||void 0===YJ||null===(cJ=YJ.background)||void 0===cJ?void 0:cJ.geometryKey}`, null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.background) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.ratio) && void 0 !== ⟦2-char-id⟧ ? ZJ : 2);
+        ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, `${JB.open}|${JB.tab}|${null===oB||void 0===oB||null===(TB=oB.background)||void 0===TB?void 0:TB.geometryKey}`, null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.background) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.ratio) && void 0 !== ⟦2-char-id⟧ ? dB : 2);
       if (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.open, ⟦2-char-id⟧.view.zoom), !⟦2-char-id⟧ || !⟦2-char-id⟧.open) return null;
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.local ? ⟦2-char-id⟧.background : null,
         ⟦2-char-id⟧ = {
-          "--map-ratio": String(null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.ratio) && void 0 !== ⟦2-char-id⟧ ? UJ : 2),
+          "--map-ratio": String(null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.ratio) && void 0 !== ⟦2-char-id⟧ ? yB : 2),
           backgroundColor: null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.colour
         },
         ⟦2-char-id⟧ = {
           "--map-zoom": String(⟦2-char-id⟧.view.zoom),
-          transform: `translate(${100*GJ.view.x}%, ${100*GJ.view.y}%) scale(${GJ.view.zoom})`
+          transform: `translate(${100*uB.view.x}%, ${100*uB.view.y}%) scale(${uB.view.zoom})`
         };
-      return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+      return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
         show: ⟦2-char-id⟧.open,
         close: ⟦2-char-id⟧.dismiss,
         togglePointerLock: !1,
```

</details>

<details>
<summary>Hunk 188 · Change · +1 / -1</summary>

```diff
@@ -5367,7 +5367,7 @@
                 },
                 children: ⟦2-char-id⟧("local" === ⟦2-char-id⟧ ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
               }, ⟦2-char-id⟧)))
-            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.j, {
+            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.i, {
               padIgnore: !0,
               onClick: ⟦2-char-id⟧.dismiss
             })]
```

</details>

<details>
<summary>Hunk 189 · Change · +1 / -1</summary>

```diff
@@ -5383,7 +5383,7 @@
               style: ⟦2-char-id⟧,
               children: [(0, ⟦2-char-id⟧.jsx)("div", {
                 className: "SkyblockMapZoomLayer",
-                style: ⟦2-char-id⟧ ? rJ : void 0,
+                style: ⟦2-char-id⟧ ? vB : void 0,
                 children: (0, ⟦2-char-id⟧.jsxs)("div", {
                   className: "SkyblockMapArea",
                   ref: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 190 · Change · +2 / -2</summary>

```diff
@@ -5416,8 +5416,8 @@
                         Current: ⟦2-char-id⟧.current
                       }),
                       style: {
-                        left: `${JJ.position[0]}%`,
-                        top: `${JJ.position[1]}%`
+                        left: `${BB.position[0]}%`,
+                        top: `${BB.position[1]}%`
                       },
                       children: [(0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.d, {
                         className: ⟦2-char-id⟧()("SkyblockMapPin", {
```

</details>

<details>
<summary>Hunk 191 · Change · +2 / -2</summary>

```diff
@@ -5452,8 +5452,8 @@
                   })), ⟦2-char-id⟧.portals.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsx)("div", {
                     className: "SkyblockMapNode",
                     style: {
-                      left: `clamp(3rem, ${JJ.position[0]}%, calc(100% - 3rem))`,
-                      top: `clamp(2rem, ${JJ.position[1]}%, calc(100% - 2rem))`
+                      left: `clamp(3rem, ${BB.position[0]}%, calc(100% - 3rem))`,
+                      top: `clamp(2rem, ${BB.position[1]}%, calc(100% - 2rem))`
                     },
                     children: (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.d, {
                       className: "SkyblockMapPin",
```

</details>

<details>
<summary>Hunk 192 · Change · +2 / -2</summary>

```diff
@@ -5534,9 +5534,9 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), {
+      } = (0, ⟦2-char-id⟧.z)(), {
         isTouchScreen: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.j)(["isTouchScreen"]);
+      } = (0, ⟦2-char-id⟧.m)(["isTouchScreen"]);
       return (0, ⟦2-char-id⟧.jsxs)("aside", {
         className: "SkyblockMinimap",
         "aria-label": ⟦2-char-id⟧("skyblockGame:mapLocal"),
```

</details>

<details>
<summary>Hunk 193 · Change · +2 / -2</summary>

```diff
@@ -5566,8 +5566,8 @@
             }), ⟦2-char-id⟧.markers.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsx)("span", {
               className: "SkyblockMinimapLandmark",
               style: {
-                left: `${JJ.position[0]}%`,
-                top: `${JJ.position[1]}%`,
+                left: `${BB.position[0]}%`,
+                top: `${BB.position[1]}%`,
                 color: ⟦2-char-id⟧.colour
               },
               title: ⟦2-char-id⟧.name,
```

</details>

<details>
<summary>Hunk 194 · Change · +2 / -2</summary>

```diff
@@ -5616,9 +5616,9 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()), ⟦2-char-id⟧ = ⟦2-char-id⟧();
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()), ⟦2-char-id⟧ = ⟦2-char-id⟧();
       return ⟦2-char-id⟧.enabled ? (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
-        children: ["hud" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.f, {
+        children: ["hud" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
           placement: "statBars",
           children: ⟦2-char-id⟧.hud && (0, ⟦2-char-id⟧.jsxs)("div", {
             className: "SkyblockSkillsHudCompact",
```

</details>

<details>
<summary>Hunk 195 · Change · +1 / -1</summary>

```diff
@@ -5639,7 +5639,7 @@
               })]
             })]
           })
-        }), "hud" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.f, {
+        }), "hud" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
           children: ⟦2-char-id⟧.hud && (0, ⟦2-char-id⟧.jsxs)("div", {
             className: "SkyblockSkillsHud",
             children: [(0, ⟦2-char-id⟧.jsxs)("div", {
```

</details>

<details>
<summary>Hunk 196 · Change · +1 / -1</summary>

```diff
@@ -5663,7 +5663,7 @@
               })]
             })]
           })
-        }), "menu" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+        }), "menu" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
           show: ⟦2-char-id⟧.open,
           close: ⟦2-char-id⟧.dismiss,
           togglePointerLock: !1,
```

</details>

<details>
<summary>Hunk 197 · Change · +1 / -1</summary>

```diff
@@ -5685,7 +5685,7 @@
                 }), (0, ⟦2-char-id⟧.jsx)("p", {
                   children: ⟦2-char-id⟧("skyblockGame:skillsIntro")
                 })]
-              }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.j, {
+              }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.i, {
                 padIgnore: !0,
                 onClick: ⟦2-char-id⟧.dismiss
               })]
```

</details>

<details>
<summary>Hunk 198 · Change · +1 / -1</summary>

```diff
@@ -5704,7 +5704,7 @@
                   },
                   children: [(0, ⟦2-char-id⟧.jsx)("div", {
                     className: "SkyblockSkillIcon",
-                    children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                    children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
                       itemName: ⟦2-char-id⟧.icon,
                       amount: 0
                     })
```

</details>

<details>
<summary>Hunk 199 · Change · +1 / -1</summary>

```diff
@@ -5719,7 +5719,7 @@
                       })]
                     }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
                       percent: ⟦2-char-id⟧.percent,
-                      label: `${JJ.label}: ${JJ.xp}`
+                      label: `${BB.label}: ${BB.xp}`
                     }), (0, ⟦2-char-id⟧.jsx)("span", {
                       className: "SkyblockSkillXp",
                       children: ⟦2-char-id⟧.xp
```

</details>

<details>
<summary>Hunk 200 · Change · +1 / -1</summary>

```diff
@@ -5730,7 +5730,7 @@
                 className: "SkyblockSkillDetail",
                 children: [(0, ⟦2-char-id⟧.jsx)("div", {
                   className: "SkyblockSkillDetailIcon",
-                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
                     itemName: ⟦2-char-id⟧.detail.icon,
                     amount: 0
                   })
```

</details>

<details>
<summary>Hunk 201 · Change · +3 / -3</summary>

```diff
@@ -5766,9 +5766,9 @@
         })]
       }) : null
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1259),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4233),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(227);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1249),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4232),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(270);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let {
```

</details>

<details>
<summary>Hunk 202 · Change · +1 / -1</summary>

```diff
@@ -5777,7 +5777,7 @@
       return (0, ⟦2-char-id⟧.jsx)("span", {
         className: "SkyblockQuestStepIcon",
         "aria-hidden": "true",
-        children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+        children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
           itemName: ⟦2-char-id⟧,
           amount: 0
         })
```

</details>

<details>
<summary>Hunk 203 · Change · +1 / -1</summary>

```diff
@@ -5794,7 +5794,7 @@
         className: "SkyblockQuestStepBar",
         children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
           percent: ⟦2-char-id⟧,
-          label: `${(0,Ue.eb)(cJ)}: ${FJ}`
+          label: `${(0,pp.sb)(TB)}: ${VB}`
         }), (0, ⟦2-char-id⟧.jsx)("span", {
           className: "SkyblockQuestStepBarLabel",
           children: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 204 · Change · +2 / -2</summary>

```diff
@@ -5826,11 +5826,11 @@
               }), (0, ⟦2-char-id⟧.jsxs)("span", {
                 className: "SkyblockQuestStepBody",
                 children: [(0, ⟦2-char-id⟧.jsx)("strong", {
-                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
                     text: ⟦2-char-id⟧.name
                   })
                 }), ⟦2-char-id⟧ && !⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("span", {
-                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
                     text: ⟦2-char-id⟧.description
                   })
                 }), null !== ⟦2-char-id⟧.barPercent && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
```

</details>

<details>
<summary>Hunk 205 · Change · +2 / -2</summary>

```diff
@@ -5843,12 +5843,12 @@
                 })]
               })]
             }, ⟦2-char-id⟧.id);
-          return ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.g, {
+          return ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.h, {
             delayShow: 200,
             tooltipInner: (0, ⟦2-char-id⟧.jsxs)("div", {
               className: "SkyblockQuestStepTooltip",
               children: [(0, ⟦2-char-id⟧.jsx)("span", {
-                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
                   text: ⟦2-char-id⟧.description
                 })
               }), (0, ⟦2-char-id⟧.jsx)("strong", {
```

</details>

<details>
<summary>Hunk 206 · Change · +1 / -1</summary>

```diff
@@ -5868,7 +5868,7 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = ⟦2-char-id⟧.focusStep;
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = ⟦2-char-id⟧.focusStep;
       return (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.d, {
         className: ⟦2-char-id⟧()("SkyblockQuestCard", {
           Selected: ⟦2-char-id⟧.selected,
```

</details>

<details>
<summary>Hunk 207 · Change · +1 / -1</summary>

```diff
@@ -5880,7 +5880,7 @@
         children: [(0, ⟦2-char-id⟧.jsxs)("div", {
           className: "SkyblockQuestCardTitle",
           children: [(0, ⟦2-char-id⟧.jsx)("strong", {
-            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
               text: ⟦2-char-id⟧.name
             })
           }), ⟦2-char-id⟧.tracked && (0, ⟦2-char-id⟧.jsx)("span", {
```

</details>

<details>
<summary>Hunk 208 · Change · +2 / -2</summary>

```diff
@@ -5908,10 +5908,10 @@
         controller: ⟦2-char-id⟧,
         surface: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
         {
           t: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.F)(),
+        } = (0, ⟦2-char-id⟧.z)(),
         ⟦2-char-id⟧ = ⟦2-char-id⟧();
       return ⟦2-char-id⟧.enabled ? (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
         children: ["hud" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.Fragment, {
```

</details>

<details>
<summary>Hunk 209 · Change · +1 / -1</summary>

```diff
@@ -5929,7 +5929,7 @@
               }), (0, ⟦2-char-id⟧.jsxs)("span", {
                 className: "SkyblockQuestTrackerTitle",
                 children: [(0, ⟦2-char-id⟧.jsx)("strong", {
-                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
                     text: ⟦2-char-id⟧.tracked.name
                   })
                 }), null !== ⟦2-char-id⟧.tracked.clock && (0, ⟦2-char-id⟧.jsx)("span", {
```

</details>

<details>
<summary>Hunk 210 · Change · +1 / -1</summary>

```diff
@@ -5941,7 +5941,7 @@
               })]
             })
           })
-        }), "menu" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+        }), "menu" === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
           show: ⟦2-char-id⟧.open,
           close: ⟦2-char-id⟧.dismiss,
           togglePointerLock: !1,
```

</details>

<details>
<summary>Hunk 211 · Change · +1 / -1</summary>

```diff
@@ -5961,7 +5961,7 @@
                   id: "skyblockQuestsTitle",
                   children: ⟦2-char-id⟧("skyblockGame:quests")
                 })
-              }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.j, {
+              }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.i, {
                 padIgnore: !0,
                 onClick: ⟦2-char-id⟧.dismiss
               })]
```

</details>

<details>
<summary>Hunk 212 · Change · +1 / -1</summary>

```diff
@@ -5988,7 +5988,7 @@
                     children: [(0, ⟦2-char-id⟧.jsx)("span", {
                       className: "SkyblockQuestSectionCaret",
                       "aria-hidden": "true"
-                    }), UJ("skyblockGame:completed"), (0, ⟦2-char-id⟧.jsx)("span", {
+                    }), yB("skyblockGame:completed"), (0, ⟦2-char-id⟧.jsx)("span", {
                       className: "SkyblockQuestSectionCount",
                       children: ⟦2-char-id⟧.completed.length
                     })]
```

</details>

<details>
<summary>Hunk 213 · Change · +2 / -2</summary>

```diff
@@ -6006,12 +6006,12 @@
                   className: "SkyblockQuestEyebrow",
                   children: ⟦2-char-id⟧("skyblockGame:completedQuest")
                 }), (0, ⟦2-char-id⟧.jsx)("h3", {
-                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
                     text: ⟦2-char-id⟧.detail.name
                   })
                 }), (0, ⟦2-char-id⟧.jsx)("p", {
                   className: "SkyblockQuestDescription",
-                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
                     text: ⟦2-char-id⟧.detail.description
                   })
                 }), (0, ⟦2-char-id⟧.jsxs)("p", {
```

</details>

<details>
<summary>Hunk 214 · Change · +1 / -1</summary>

```diff
@@ -6026,7 +6026,7 @@
                 }), ⟦2-char-id⟧.detail.tracked && (0, ⟦2-char-id⟧.jsx)("p", {
                   className: "SkyblockQuestTrackingStatus",
                   children: ⟦2-char-id⟧.detail.trackLabel
-                }), !⟦2-char-id⟧.detail.completed && !⟦2-char-id⟧.detail.tracked && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.m, {
+                }), !⟦2-char-id⟧.detail.completed && !⟦2-char-id⟧.detail.tracked && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.k, {
                   onClick: ⟦2-char-id⟧.trackSelected,
                   disabled: !⟦2-char-id⟧.detail.canTrack,
                   children: ⟦2-char-id⟧.detail.trackLabel
```

</details>

<details>
<summary>Hunk 215 · Change · +4 / -4</summary>

```diff
@@ -6041,12 +6041,12 @@
         })]
       }) : null
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(942),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2260);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(946),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2237);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧ => "linear" === ⟦2-char-id⟧ ? JJ : {
-          Hc: ⟦2-char-id⟧,
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧ => "linear" === ⟦2-char-id⟧ ? BB : {
+          Xy: ⟦2-char-id⟧,
           point: ⟦2-char-id⟧
         },
         ⟦2-char-id⟧ = {};
```

</details>

<details>
<summary>Hunk 216 · Change · +2 / -2</summary>

```diff
@@ -6055,9 +6055,9 @@
           timeline: []
         }, ⟦2-char-id⟧[⟦2-char-id⟧].timeline.push(⟦2-char-id⟧);
       return {
-        Ic: ⟦2-char-id⟧,
+        Sy: ⟦2-char-id⟧,
         loop: ⟦2-char-id⟧,
-        bc: ⟦2-char-id⟧
+        Qy: ⟦2-char-id⟧
       }
     }
     const ⟦2-char-id⟧ = .547,
```

</details>

<details>
<summary>Hunk 217 · Change · +2 / -2</summary>

```diff
@@ -6147,8 +6147,8 @@
       return {
         TorsoNode: {
           timeFraction: ⟦2-char-id⟧,
-          position: ⟦2-char-id⟧([0, FJ, ⟦2-char-id⟧]),
-          rotation: ⟦2-char-id⟧([⟦2-char-id⟧, XJ, ⟦2-char-id⟧])
+          position: ⟦2-char-id⟧([0, VB, ⟦2-char-id⟧]),
+          rotation: ⟦2-char-id⟧([⟦2-char-id⟧, lB, ⟦2-char-id⟧])
         },
         HeadMesh: {
           timeFraction: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 218 · Change · +3 / -3</summary>

```diff
@@ -6215,9 +6215,9 @@
         }
       }
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36562),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(37458),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(37623);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36496),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(37420),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(37598);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 219 · Change · +3 / -3</summary>

```diff
@@ -6225,15 +6225,15 @@
           let ⟦2-char-id⟧ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
           return ⟦2-char-id⟧ + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - ⟦2-char-id⟧) * ⟦2-char-id⟧
         },
-        [⟦2-char-id⟧, ⟦2-char-id⟧] = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.legs) && void 0 !== ⟦2-char-id⟧ ? FJ : [0, 0],
-        [⟦2-char-id⟧, ⟦2-char-id⟧] = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.legs) && void 0 !== ⟦2-char-id⟧ ? UJ : [0, 0];
+        [⟦2-char-id⟧, ⟦2-char-id⟧] = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.legs) && void 0 !== ⟦2-char-id⟧ ? VB : [0, 0],
+        [⟦2-char-id⟧, ⟦2-char-id⟧] = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.legs) && void 0 !== ⟦2-char-id⟧ ? yB : [0, 0];
       return {
         drop: ⟦2-char-id⟧(⟦2-char-id⟧.drop, ⟦2-char-id⟧.drop),
         shift: ⟦2-char-id⟧(⟦2-char-id⟧.shift, ⟦2-char-id⟧.shift),
         torso: ⟦2-char-id⟧(⟦2-char-id⟧.torso, ⟦2-char-id⟧.torso),
         nod: ⟦2-char-id⟧(⟦2-char-id⟧.nod, ⟦2-char-id⟧.nod),
         tilt: ⟦2-char-id⟧(⟦2-char-id⟧.tilt, ⟦2-char-id⟧.tilt),
-        legs: [⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), eJ(⟦2-char-id⟧, ⟦2-char-id⟧)],
+        legs: [⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), pB(⟦2-char-id⟧, ⟦2-char-id⟧)],
         arms: ⟦2-char-id⟧(⟦2-char-id⟧.arms, ⟦2-char-id⟧.arms),
         spread: ⟦2-char-id⟧(⟦2-char-id⟧.spread, ⟦2-char-id⟧.spread)
       }
```

</details>

<details>
<summary>Hunk 220 · Change · +2 / -2</summary>

```diff
@@ -6249,14 +6249,14 @@
       ⟦2-char-id⟧ = ⟦2-char-id⟧(4400, !0, [
         [0, ⟦2-char-id⟧],
         [.16, {
-          ...Me,
+          ...Kp,
           drop: .06,
           torso: .16,
           arms: -.85
         }],
         [.3, ⟦2-char-id⟧],
         [.44, {
-          ...Me,
+          ...Kp,
           drop: .06,
           torso: .16,
           arms: -.85
```

</details>

<details>
<summary>Hunk 221 · Change · +2 / -2</summary>

```diff
@@ -6265,13 +6265,13 @@
         [.66, ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, .78)],
         [.74, ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, .65)],
         [.86, {
-          ...Me,
+          ...Kp,
           drop: .14
         }],
         [1, ⟦2-char-id⟧]
       ], "catmull-rom-spline"),
       ⟦2-char-id⟧ = {
-        ...Me,
+        ...Kp,
         drop: .14,
         torso: .3,
         spread: .4
```

</details>

<details>
<summary>Hunk 222 · Change · +14 / -14</summary>

```diff
@@ -6296,57 +6296,57 @@
         magmaGolem: ⟦2-char-id⟧(3600, !0, [
           [0, ⟦2-char-id⟧],
           [.12, {
-            ...we,
+            ...Ip,
             tilt: .08,
             drop: .11
           }],
           [.26, {
-            ...we,
+            ...Ip,
             tilt: -.08
           }],
           [.4, {
-            ...we,
+            ...Ip,
             tilt: .06,
             drop: .11
           }],
-          [.52, Ie(⟦2-char-id⟧, Ge, .9)],
-          [.62, Ie(⟦2-char-id⟧, fe, .8)],
-          [.7, Ie(⟦2-char-id⟧, fe, .45)],
-          [.78, Ie(⟦2-char-id⟧, fe, .85)],
+          [.52, Fp(⟦2-char-id⟧, Ep, .9)],
+          [.62, Fp(⟦2-char-id⟧, vp, .8)],
+          [.7, Fp(⟦2-char-id⟧, vp, .45)],
+          [.78, Fp(⟦2-char-id⟧, vp, .85)],
           [.9, {
-            ...we,
+            ...Ip,
             drop: .17
           }],
           [1, ⟦2-char-id⟧]
         ], "catmull-rom-spline"),
-        frostWraith: function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+        frostWraith: function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
           return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
         }(4800, !0, [
           [0, ⟦2-char-id⟧],
           [.14, {
-            ...We,
+            ...cp,
             rise: .25,
             tilt: .06
           }],
           [.28, {
-            ...We,
+            ...cp,
             rise: .12,
             tilt: -.04
           }],
           [.42, {
-            ...We,
+            ...cp,
             rise: .24,
             tilt: .04
           }],
           [.54, {
-            ...We,
+            ...cp,
             rise: .22,
             twist: .2,
             arms: [-.3, -1.6],
             spread: [.4, .05]
           }],
           [.64, {
-            ...We,
+            ...cp,
             rise: .26,
             twist: .2,
             torso: .05,
```

</details>

<details>
<summary>Hunk 223 · Change · +1 / -1</summary>

```diff
@@ -6354,7 +6354,7 @@
             spread: [.4, .05]
           }],
           [.72, {
-            ...We,
+            ...cp,
             rise: .1,
             twist: .22,
             torso: .35,
```

</details>

<details>
<summary>Hunk 224 · Change · +3 / -3</summary>

```diff
@@ -6363,18 +6363,18 @@
             spread: [.4, -.05]
           }],
           [.86, {
-            ...We,
+            ...cp,
             rise: .16,
             tilt: -.04
           }],
           [1, ⟦2-char-id⟧]
         ], "catmull-rom-spline"),
-        tikiTerror: function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+        tikiTerror: function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
           return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
         }(4400, !0, [
           [0, ⟦2-char-id⟧],
           [.16, {
-            ...ge,
+            ...Sp,
             drop: .02,
             torso: .12,
             arms: -.55,
```

</details>

<details>
<summary>Hunk 225 · Change · +1 / -1</summary>

```diff
@@ -6382,7 +6382,7 @@
           }],
           [.3, ⟦2-char-id⟧],
           [.44, {
-            ...ge,
+            ...Sp,
             drop: .02,
             torso: .12,
             arms: -.55,
```

</details>

<details>
<summary>Hunk 226 · Change · +1 / -1</summary>

```diff
@@ -6415,7 +6415,7 @@
             spread: 1.1
           }],
           [.86, {
-            ...ge,
+            ...Sp,
             drop: .1
           }],
           [1, ⟦2-char-id⟧]
```

</details>

<details>
<summary>Hunk 227 · Change · +3 / -3</summary>

```diff
@@ -6432,14 +6432,14 @@
       },
       ⟦2-char-id⟧ = Object.fromEntries(Object.entries(⟦2-char-id⟧).map((⟦2-char-id⟧ => {
         let [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
-        return [⟦2-char-id⟧, (0, ⟦2-char-id⟧.b)((0, ⟦2-char-id⟧.g)(⟦2-char-id⟧), ⟦2-char-id⟧)]
+        return [⟦2-char-id⟧, (0, ⟦2-char-id⟧.b)((0, ⟦2-char-id⟧.h)(⟦2-char-id⟧), ⟦2-char-id⟧)]
       })));
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
         var ⟦2-char-id⟧;
-        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧).poseRig;
-        return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? cJ : void 0 === ⟦2-char-id⟧ ? null : ⟦2-char-id⟧[⟦2-char-id⟧]
+        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧).poseRig;
+        return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? TB : void 0 === ⟦2-char-id⟧ ? null : ⟦2-char-id⟧[⟦2-char-id⟧]
       }(⟦2-char-id⟧);
       return null === ⟦2-char-id⟧ ? null : ⟦2-char-id⟧[⟦2-char-id⟧]
     }
```

</details>

<details>
<summary>Hunk 228 · Change · +1 / -1</summary>

```diff
@@ -6449,7 +6449,7 @@
         "--difficulty-colour": ⟦2-char-id⟧
       }
     }
-    const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.lazy)((() => (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧.e(204).then((() => ⟦2-char-id⟧(40254))), (⟦2-char-id⟧ => ⟦2-char-id⟧.MobPreview))));
+    const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.lazy)((() => (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧.e(204).then((() => ⟦2-char-id⟧(40261))), (⟦2-char-id⟧ => ⟦2-char-id⟧.MobPreview))));
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 229 · Change · +1 / -1</summary>

```diff
@@ -6459,7 +6459,7 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = ⟦2-char-id⟧(), {
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = ⟦2-char-id⟧(), {
         page: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
       return (0, ⟦2-char-id⟧.jsxs)("section", {
```

</details>

<details>
<summary>Hunk 230 · Change · +1 / -1</summary>

```diff
@@ -6478,7 +6478,7 @@
           children: [(0, ⟦2-char-id⟧.jsx)("h2", {
             id: "skyblockBossPickerTitle",
             children: ⟦2-char-id⟧.dungeonName
-          }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.j, {
+          }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.i, {
             padIgnore: !0,
             onClick: ⟦2-char-id⟧.dismiss
           })]
```

</details>

<details>
<summary>Hunk 231 · Change · +1 / -1</summary>

```diff
@@ -6492,7 +6492,7 @@
               onClick: ⟦2-char-id⟧.previous,
               children: (0, ⟦2-char-id⟧.jsx)("span", {
                 className: "SkyblockBossPickerChevron",
-                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                   name: "angle-up"
                 })
               })
```

</details>

<details>
<summary>Hunk 232 · Change · +1 / -1</summary>

```diff
@@ -6508,7 +6508,7 @@
                   className: "SkyblockBossPickerModel",
                   mobType: ⟦2-char-id⟧.bossMobType,
                   variation: ⟦2-char-id⟧.bossMobVariation,
-                  animation: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.bossMobType)) && void 0 !== ⟦2-char-id⟧ ? cJ : void 0
+                  animation: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.bossMobType)) && void 0 !== ⟦2-char-id⟧ ? TB : void 0
                 })
               }), null === ⟦2-char-id⟧.bossMobType && (0, ⟦2-char-id⟧.jsx)("div", {
                 className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
```

</details>

<details>
<summary>Hunk 233 · Change · +1 / -1</summary>

```diff
@@ -6521,7 +6521,7 @@
               onClick: ⟦2-char-id⟧.next,
               children: (0, ⟦2-char-id⟧.jsx)("span", {
                 className: "SkyblockBossPickerChevron",
-                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                   name: "angle-up"
                 })
               })
```

</details>

<details>
<summary>Hunk 234 · Change · +1 / -1</summary>

```diff
@@ -6536,7 +6536,7 @@
               }), ⟦2-char-id⟧.label]
             }), (0, ⟦2-char-id⟧.jsx)("strong", {
               className: "SkyblockBossPickerName",
-              children: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.bossName) && void 0 !== ⟦2-char-id⟧ ? ZJ : "???"
+              children: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.bossName) && void 0 !== ⟦2-char-id⟧ ? dB : "???"
             }), (0, ⟦2-char-id⟧.jsxs)("span", {
               className: ⟦2-char-id⟧()("SkyblockBossPickerRecord", {
                 Locked: null !== ⟦2-char-id⟧.lockedHint
```

</details>

<details>
<summary>Hunk 235 · Change · +2 / -2</summary>

```diff
@@ -6548,13 +6548,13 @@
                   children: [null !== ⟦2-char-id⟧.lockedHintHighlight.icon && (0, ⟦2-char-id⟧.jsx)("span", {
                     className: "SkyblockBossPickerHintIcon",
                     "aria-hidden": "true",
-                    children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                    children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
                       itemName: ⟦2-char-id⟧.lockedHintHighlight.icon,
                       amount: 0
                     })
                   }), ⟦2-char-id⟧.lockedHintHighlight.name]
                 }), ⟦2-char-id⟧.lockedHintHighlight.after]
-              }), null === ⟦2-char-id⟧.lockedHintHighlight && (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.lockedHint) && void 0 !== ⟦2-char-id⟧ ? FJ : ⟦2-char-id⟧.summary)]
+              }), null === ⟦2-char-id⟧.lockedHintHighlight && (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.lockedHint) && void 0 !== ⟦2-char-id⟧ ? VB : ⟦2-char-id⟧.summary)]
             })]
           }), (0, ⟦2-char-id⟧.jsx)("div", {
             className: "SkyblockBossPickerDots",
```

</details>

<details>
<summary>Hunk 236 · Change · +3 / -3</summary>

```diff
@@ -6616,12 +6616,12 @@
       let {
         controller: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
         {
           t: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.F)(),
+        } = (0, ⟦2-char-id⟧.z)(),
         ⟦2-char-id⟧ = ⟦2-char-id⟧();
-      return ⟦2-char-id⟧.enabled ? (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.c, {
+      return ⟦2-char-id⟧.enabled ? (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.b, {
         show: ⟦2-char-id⟧.open,
         close: ⟦2-char-id⟧.dismiss,
         togglePointerLock: !1,
```

</details>

<details>
<summary>Hunk 237 · Change · +1 / -1</summary>

```diff
@@ -6646,7 +6646,7 @@
               }), (0, ⟦2-char-id⟧.jsx)("p", {
                 children: ⟦2-char-id⟧("skyblockGame:dungeonsIntro")
               })]
-            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.j, {
+            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.i, {
               padIgnore: !0,
               onClick: ⟦2-char-id⟧.dismiss
             })]
```

</details>

<details>
<summary>Hunk 238 · Change · +1 / -1</summary>

```diff
@@ -6703,7 +6703,7 @@
         },
         children: [(0, ⟦2-char-id⟧.jsx)("div", {
           className: "SkyblockSkillIcon",
-          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
             itemName: ⟦2-char-id⟧.icon,
             amount: 0
           })
```

</details>

<details>
<summary>Hunk 239 · Change · +1 / -1</summary>

```diff
@@ -6718,7 +6718,7 @@
             })]
           }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
             percent: ⟦2-char-id⟧.percent,
-            label: `${cJ.name}: ${cJ.progress}`
+            label: `${TB.name}: ${TB.progress}`
           }), (0, ⟦2-char-id⟧.jsx)("span", {
             className: "SkyblockSkillXp",
             children: ⟦2-char-id⟧.progress
```

</details>

<details>
<summary>Hunk 240 · Change · +2 / -2</summary>

```diff
@@ -6733,12 +6733,12 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)();
+      } = (0, ⟦2-char-id⟧.z)();
       return (0, ⟦2-char-id⟧.jsxs)("div", {
         className: "SkyblockSkillDetail SkyblockCollectionDetail",
         children: [(0, ⟦2-char-id⟧.jsx)("div", {
           className: "SkyblockSkillDetailIcon",
-          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
             itemName: ⟦2-char-id⟧.icon,
             amount: 0
           })
```

</details>

<details>
<summary>Hunk 241 · Change · +3 / -3</summary>

```diff
@@ -6769,12 +6769,12 @@
       let {
         controller: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
         {
           t: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.F)(),
+        } = (0, ⟦2-char-id⟧.z)(),
         ⟦2-char-id⟧ = ⟦2-char-id⟧();
-      return ⟦2-char-id⟧.enabled ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+      return ⟦2-char-id⟧.enabled ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
         show: ⟦2-char-id⟧.open,
         close: ⟦2-char-id⟧.dismiss,
         togglePointerLock: !1,
```

</details>

<details>
<summary>Hunk 242 · Change · +1 / -1</summary>

```diff
@@ -6796,7 +6796,7 @@
               }), (0, ⟦2-char-id⟧.jsxs)("p", {
                 children: [⟦2-char-id⟧("skyblockGame:collectionsIntro"), " ", ⟦2-char-id⟧.tiersUnlocked]
               })]
-            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.j, {
+            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.i, {
               padIgnore: !0,
               onClick: ⟦2-char-id⟧.dismiss
             })]
```

</details>

<details>
<summary>Hunk 243 · Change · +1 / -1</summary>

```diff
@@ -6814,7 +6814,7 @@
               },
               children: [(0, ⟦2-char-id⟧.jsx)("span", {
                 className: "SkyblockCollectionCategoryIcon",
-                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
                   itemName: ⟦2-char-id⟧.icon,
                   amount: 0
                 })
```

</details>

<details>
<summary>Hunk 244 · Change · +3 / -3</summary>

```diff
@@ -6850,12 +6850,12 @@
       let {
         controller: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
         {
           t: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.F)(),
+        } = (0, ⟦2-char-id⟧.z)(),
         ⟦2-char-id⟧ = ⟦2-char-id⟧();
-      return ⟦2-char-id⟧.enabled ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+      return ⟦2-char-id⟧.enabled ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
         show: ⟦2-char-id⟧.open,
         close: ⟦2-char-id⟧.dismiss,
         togglePointerLock: !1,
```

</details>

<details>
<summary>Hunk 245 · Change · +2 / -2</summary>

```diff
@@ -6877,14 +6877,14 @@
               }), (0, ⟦2-char-id⟧.jsx)("p", {
                 children: ⟦2-char-id⟧("skyblockDevQuests:intro")
               })]
-            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.j, {
+            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.i, {
               onClick: ⟦2-char-id⟧.dismiss
             })]
           }), (0, ⟦2-char-id⟧.jsxs)("div", {
             className: "SkyblockQuestGraphLegend",
             children: [⟦2-char-id⟧.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsx)("span", {
               className: ⟦2-char-id⟧()("SkyblockQuestGraphLegendState", ⟦2-char-id⟧),
-              children: ⟦2-char-id⟧(`skyblockDevQuests:state_${JJ}`)
+              children: ⟦2-char-id⟧(`skyblockDevQuests:state_${BB}`)
             }, ⟦2-char-id⟧))), ⟦2-char-id⟧.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsxs)("span", {
               className: "SkyblockQuestGraphLegendEdge",
               children: [(0, ⟦2-char-id⟧.jsx)("svg", {
```

</details>

<details>
<summary>Hunk 246 · Change · +1 / -1</summary>

```diff
@@ -6898,7 +6898,7 @@
                   x2: "28",
                   y2: "4"
                 })
-              }), FJ(`skyblockDevQuests:edge_${JJ}`)]
+              }), VB(`skyblockDevQuests:edge_${BB}`)]
             }, ⟦2-char-id⟧)))]
           }), (0, ⟦2-char-id⟧.jsx)("div", {
             className: "SkyblockQuestGraphScroll",
```

</details>

<details>
<summary>Hunk 247 · Change · +5 / -5</summary>

```diff
@@ -6979,22 +6979,22 @@
       ⟦2-char-id⟧ = {
         "--impact": "250ms",
         "--hold": "50ms",
-        "--pop-at": `${eF}ms`,
+        "--pop-at": `${lV}ms`,
         "--forge-duration": "2150ms"
       },
       ⟦2-char-id⟧ = Array.from({
         length: 18
       }, ((⟦2-char-id⟧, ⟦2-char-id⟧) => ({
-        "--ember-left": `${(4+92*(.618034*cJ%1)).toFixed(1)}%`,
+        "--ember-left": `${(4+92*(.618034*TB%1)).toFixed(1)}%`,
         "--ember-size": 3 + ⟦2-char-id⟧ % 3 * 2 + "px",
         "--ember-drift": 14 * (⟦2-char-id⟧ % 5 - 2) + "px",
-        "--ember-duration": `${(5.5+7*cJ%5*.9).toFixed(1)}s`,
-        "--ember-delay": `${(-1.37*cJ%8).toFixed(2)}s`
+        "--ember-duration": `${(5.5+7*TB%5*.9).toFixed(1)}s`,
+        "--ember-delay": `${(-1.37*TB%8).toFixed(2)}s`
       })));
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       if (⟦2-char-id⟧.style.removeProperty("--part-size"), null === ⟦2-char-id⟧.parentElement || "wrap" === getComputedStyle(⟦2-char-id⟧.parentElement).flexWrap) return;
-      const ⟦2-char-id⟧ = [...JJ.children],
+      const ⟦2-char-id⟧ = [...BB.children],
         ⟦2-char-id⟧ = getComputedStyle(⟦2-char-id⟧),
         ⟦2-char-id⟧ = parseFloat(⟦2-char-id⟧.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
         ⟦2-char-id⟧ = (⟦2-char-id⟧.clientHeight - parseFloat(⟦2-char-id⟧.rowGap) * (⟦2-char-id⟧.length - 1)) / ⟦2-char-id⟧.length,
```

</details>

<details>
<summary>Hunk 248 · Change · +1 / -1</summary>

```diff
@@ -7013,7 +7013,7 @@
           }
           return ⟦2-char-id⟧
         }));
-      ⟦2-char-id⟧.style.setProperty("--part-size", `${Math.floor(Math.max(FJ,Math.min(...eJ)))}px`)
+      ⟦2-char-id⟧.style.setProperty("--part-size", `${Math.floor(Math.max(VB,Math.min(...pB)))}px`)
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 249 · Change · +2 / -2</summary>

```diff
@@ -7021,10 +7021,10 @@
       let {
         controller: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
         {
           t: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.F)(),
+        } = (0, ⟦2-char-id⟧.z)(),
         ⟦2-char-id⟧ = ⟦2-char-id⟧(),
         ⟦2-char-id⟧ = function() {
           const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null),
```

</details>

<details>
<summary>Hunk 250 · Change · +1 / -1</summary>

```diff
@@ -7053,7 +7053,7 @@
         ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null),
         ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)({}),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.forging,
-        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.preview.tier) && void 0 !== ⟦2-char-id⟧ ? ZJ : 0,
+        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.preview.tier) && void 0 !== ⟦2-char-id⟧ ? dB : 0,
         ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.preview.named) && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧,
         ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useMemo)((() => {
           return null === ⟦2-char-id⟧ ? null : {
```

</details>

<details>
<summary>Hunk 251 · Change · +6 / -6</summary>

```diff
@@ -7069,13 +7069,13 @@
                 [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧ ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : ⟦2-char-id⟧ < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : ⟦2-char-id⟧ < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [⟦2-char-id⟧ < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
               return {
                 "--c": ⟦2-char-id⟧,
-                "--x0": `${(.15*eJ).toFixed(2)}rem`,
-                "--y0": `${(.15*XJ).toFixed(2)}rem`,
-                "--x": `${eJ.toFixed(2)}rem`,
-                "--y": `${XJ.toFixed(2)}rem`,
+                "--x0": `${(.15*pB).toFixed(2)}rem`,
+                "--y0": `${(.15*lB).toFixed(2)}rem`,
+                "--x": `${pB.toFixed(2)}rem`,
+                "--y": `${lB.toFixed(2)}rem`,
                 "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
-                "--size": `${jJ.toFixed(2)}rem`,
-                "--duration": `${Math.round(YJ)}ms`,
+                "--size": `${gB.toFixed(2)}rem`,
+                "--duration": `${Math.round(oB)}ms`,
                 "--delay": `${Math.round(80*Math.random())}ms`
               }
             }))),
```

</details>

<details>
<summary>Hunk 252 · Change · +2 / -2</summary>

```diff
@@ -7087,12 +7087,12 @@
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.preview,
         ⟦2-char-id⟧ = ⟦2-char-id⟧.arriving,
         ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && !⟦2-char-id⟧.sameSword,
-        ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+        ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
           itemName: ⟦2-char-id⟧.baseSword,
           amount: 0,
           enchantmentTier: ⟦2-char-id⟧.enchantmentTier
         });
-      return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+      return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
         show: ⟦2-char-id⟧.open,
         close: ⟦2-char-id⟧.dismiss,
         togglePointerLock: !1,
```

</details>

<details>
<summary>Hunk 253 · Change · +1 / -1</summary>

```diff
@@ -7120,7 +7120,7 @@
               }), (0, ⟦2-char-id⟧.jsx)("p", {
                 children: ⟦2-char-id⟧("skyblockGame:forgeIntro")
               })]
-            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.j, {
+            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.i, {
               onClick: ⟦2-char-id⟧.dismiss
             })]
           }), (0, ⟦2-char-id⟧.jsxs)("div", {
```

</details>

<details>
<summary>Hunk 254 · Change · +1 / -1</summary>

```diff
@@ -7148,7 +7148,7 @@
                     onClick: () => {
                       ⟦2-char-id⟧.select(⟦2-char-id⟧.kind, ⟦2-char-id⟧.material)
                     },
-                    children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                    children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
                       itemName: ⟦2-char-id⟧.itemName,
                       amount: ⟦2-char-id⟧.owned
                     })
```

</details>

<details>
<summary>Hunk 255 · Change · +1 / -1</summary>

```diff
@@ -7160,7 +7160,7 @@
                 Named: null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.named
               }),
               style: {
-                "--tier": null === ⟦2-char-id⟧ ? "transparent" : ⟦2-char-id⟧.gb[⟦2-char-id⟧.enchantmentTier]
+                "--tier": null === ⟦2-char-id⟧ ? "transparent" : ⟦2-char-id⟧.lb[⟦2-char-id⟧.enchantmentTier]
               },
               children: [(0, ⟦2-char-id⟧.jsxs)("div", {
                 className: ⟦2-char-id⟧()("SkyblockForgeAltar", {
```

</details>

<details>
<summary>Hunk 256 · Change · +1 / -1</summary>

```diff
@@ -7173,7 +7173,7 @@
                   }),
                   children: [null === ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
                     className: "SkyblockForgeSword Unformed",
-                    children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                    children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
                       itemName: ⟦2-char-id⟧.unformedSword,
                       amount: 0
                     })
```

</details>

<details>
<summary>Hunk 257 · Change · +2 / -2</summary>

```diff
@@ -7256,8 +7256,8 @@
                     const ⟦2-char-id⟧ = null === ⟦2-char-id⟧ ? "none" : getComputedStyle(⟦2-char-id⟧).transform,
                       ⟦2-char-id⟧ = new DOMMatrixReadOnly("none" === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧);
                     return {
-                      "--settle-y": `${ZJ.f.toFixed(2)}px`,
-                      "--settle-turn": `${(180*Math.atan2(ZJ.b,ZJ.a)/Math.PI).toFixed(2)}deg`
+                      "--settle-y": `${dB.f.toFixed(2)}px`,
+                      "--settle-turn": `${(180*Math.atan2(dB.b,dB.a)/Math.PI).toFixed(2)}deg`
                     }
                   }(⟦2-char-id⟧.current), ⟦2-char-id⟧(), ⟦2-char-id⟧.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                 },
```

</details>

<details>
<summary>Hunk 258 · Change · +2 / -2</summary>

```diff
@@ -7267,8 +7267,8 @@
                   }),
                   children: [(0, ⟦2-char-id⟧.jsx)("span", {
                     className: "SkyblockForgeCoal",
-                    children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
-                      itemName: ⟦2-char-id⟧.b,
+                    children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+                      itemName: ⟦2-char-id⟧.d,
                       amount: 0
                     })
                   }), ⟦2-char-id⟧.coalCost]
```

</details>

<details>
<summary>Hunk 259 · Change · +1 / -1</summary>

```diff
@@ -7333,7 +7333,7 @@
         }),
         children: [(0, ⟦2-char-id⟧.jsx)("span", {
           className: "SkyblockSmugglerPriceIcon",
-          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
             itemName: ⟦2-char-id⟧,
             amount: 0
           })
```

</details>

<details>
<summary>Hunk 260 · Change · +1 / -1</summary>

```diff
@@ -7355,7 +7355,7 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)();
+      } = (0, ⟦2-char-id⟧.z)();
       return (0, ⟦2-char-id⟧.jsxs)("div", {
         className: ⟦2-char-id⟧()("SkyblockSmugglerPocket", {
           Bought: ⟦2-char-id⟧.justBought,
```

</details>

<details>
<summary>Hunk 261 · Change · +1 / -1</summary>

```diff
@@ -7367,7 +7367,7 @@
           "aria-hidden": "true"
         }), (0, ⟦2-char-id⟧.jsxs)("div", {
           className: "SkyblockSmugglerGoods",
-          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
             itemName: ⟦2-char-id⟧.itemName,
             amount: 0,
             enchantmentTier: ⟦2-char-id⟧.enchantmentTier
```

</details>

<details>
<summary>Hunk 262 · Change · +3 / -3</summary>

```diff
@@ -7408,12 +7408,12 @@
       let {
         controller: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
         {
           t: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.F)(),
+        } = (0, ⟦2-char-id⟧.z)(),
         ⟦2-char-id⟧ = ⟦2-char-id⟧();
-      return ⟦2-char-id⟧.enabled ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+      return ⟦2-char-id⟧.enabled ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
         show: ⟦2-char-id⟧.open,
         close: ⟦2-char-id⟧.dismiss,
         togglePointerLock: !1,
```

</details>

<details>
<summary>Hunk 263 · Change · +1 / -1</summary>

```diff
@@ -7454,7 +7454,7 @@
                   amount: ⟦2-char-id⟧.crestsOwned,
                   owned: ⟦2-char-id⟧.crestsOwned
                 })]
-              }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.j, {
+              }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.i, {
                 onClick: ⟦2-char-id⟧.dismiss
               })]
             })]
```

</details>

<details>
<summary>Hunk 264 · Change · +1 / -1</summary>

```diff
@@ -7485,7 +7485,7 @@
         className: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
       return (0, ⟦2-char-id⟧.jsx)("span", {
-        className: ⟦2-char-id⟧()("SkyblockMoon", `Moon-${cJ}`, ⟦2-char-id⟧),
+        className: ⟦2-char-id⟧()("SkyblockMoon", `Moon-${TB}`, ⟦2-char-id⟧),
         "aria-hidden": "true"
       })
     }
```

</details>

<details>
<summary>Hunk 265 · Change · +3 / -3</summary>

```diff
@@ -7494,11 +7494,11 @@
       let {
         controller: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
         {
           t: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.F)();
-      return ⟦2-char-id⟧.enabled ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.f, {
+        } = (0, ⟦2-char-id⟧.z)();
+      return ⟦2-char-id⟧.enabled ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
         placement: "statBars",
         children: (0, ⟦2-char-id⟧.jsx)("button", {
           type: "button",
```

</details>

<details>
<summary>Hunk 266 · Change · +1 / -1</summary>

```diff
@@ -7529,7 +7529,7 @@
         className: "SkyblockPassageFish",
         children: [(0, ⟦2-char-id⟧.jsx)("span", {
           className: "SkyblockPassageFishIcon",
-          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
             itemName: ⟦2-char-id⟧.itemName,
             amount: 0
           })
```

</details>

<details>
<summary>Hunk 267 · Change · +3 / -3</summary>

```diff
@@ -7550,12 +7550,12 @@
       let {
         controller: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
         {
           t: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.F)(),
+        } = (0, ⟦2-char-id⟧.z)(),
         ⟦2-char-id⟧ = ⟦2-char-id⟧();
-      return ⟦2-char-id⟧.enabled ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+      return ⟦2-char-id⟧.enabled ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
         show: ⟦2-char-id⟧.open,
         close: ⟦2-char-id⟧.dismiss,
         togglePointerLock: !1,
```

</details>

<details>
<summary>Hunk 268 · Change · +1 / -1</summary>

```diff
@@ -7581,7 +7581,7 @@
                 className: "SkyblockPassagePhase",
                 children: ⟦2-char-id⟧.phaseName
               })]
-            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.j, {
+            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.i, {
               padIgnore: !0,
               onClick: ⟦2-char-id⟧.dismiss
             })]
```

</details>

<details>
<summary>Hunk 269 · Change · +1 / -1</summary>

```diff
@@ -7646,7 +7646,7 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = ⟦2-char-id⟧.shop, ⟦2-char-id⟧ = (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.sparkle) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.id) === ⟦2-char-id⟧.id;
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = ⟦2-char-id⟧.shop, ⟦2-char-id⟧ = (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.sparkle) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.id) === ⟦2-char-id⟧.id;
       return (0, ⟦2-char-id⟧.jsxs)("li", {
         className: ⟦2-char-id⟧()("SkyblockLampLightCharm", ⟦2-char-id⟧.owned && "Owned", ⟦2-char-id⟧.socketed && "Socketed"),
         children: [⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {}, ⟦2-char-id⟧.sparkle.count), (0, ⟦2-char-id⟧.jsx)("h4", {
```

</details>

<details>
<summary>Hunk 270 · Change · +1 / -1</summary>

```diff
@@ -7675,7 +7675,7 @@
             children: [(0, ⟦2-char-id⟧.jsx)("span", {
               className: "SkyblockLampLightBadge",
               children: ⟦2-char-id⟧("skyblockGame:lampLightSocketed")
-            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.O, {
+            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.T, {
               disabled: !⟦2-char-id⟧.canCommand,
               ariaLabel: ⟦2-char-id⟧("skyblockGame:lampLightRemoveLabel", {
                 charm: ⟦2-char-id⟧.name
```

</details>

<details>
<summary>Hunk 271 · Change · +1 / -1</summary>

```diff
@@ -7718,7 +7718,7 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)();
+      } = (0, ⟦2-char-id⟧.z)();
       return (0, ⟦2-char-id⟧.jsxs)("li", {
         className: ⟦2-char-id⟧()("SkyblockLampLightTint", ⟦2-char-id⟧.wearing && "Wearing"),
         style: {
```

</details>

<details>
<summary>Hunk 272 · Change · +2 / -2</summary>

```diff
@@ -7753,10 +7753,10 @@
       let {
         controller: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
         {
           t: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.F)(),
+        } = (0, ⟦2-char-id⟧.z)(),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.shop;
       return (0, ⟦2-char-id⟧.jsxs)("div", {
         className: "SkyblockLampLightTab",
```

</details>

<details>
<summary>Hunk 273 · Change · +1 / -1</summary>

```diff
@@ -7780,7 +7780,7 @@
               children: (0, ⟦2-char-id⟧.jsx)("span", {
                 className: "SkyblockLampLightSwitchKnob"
               })
-            }), FJ("skyblockGame:lampLightRelease")]
+            }), VB("skyblockGame:lampLightRelease")]
           }), (0, ⟦2-char-id⟧.jsx)("span", {
             className: "SkyblockLampLightHint",
             children: ⟦2-char-id⟧("skyblockGame:lampLightReleaseHint")
```

</details>

<details>
<summary>Hunk 274 · Change · +3 / -3</summary>

```diff
@@ -7862,11 +7862,11 @@
       let {
         controller: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
         {
           t: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.F)();
-      return ⟦2-char-id⟧.releasing ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.f, {
+        } = (0, ⟦2-char-id⟧.z)();
+      return ⟦2-char-id⟧.releasing ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
         children: (0, ⟦2-char-id⟧.jsxs)("button", {
           type: "button",
           className: "SkyblockLampLightPill",
```

</details>

<details>
<summary>Hunk 275 · Change · +2 / -2</summary>

```diff
@@ -7899,9 +7899,9 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = ⟦2-char-id⟧.featuredFish;
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = ⟦2-char-id⟧.featuredFish;
       return (0, ⟦2-char-id⟧.jsxs)("li", {
-        className: ⟦2-char-id⟧()("SkyblockKeepersChairIsland", `Island-${cJ.id}`, ⟦2-char-id⟧.favoured && "Aimed", !⟦2-char-id⟧.relit && "Dark"),
+        className: ⟦2-char-id⟧()("SkyblockKeepersChairIsland", `Island-${TB.id}`, ⟦2-char-id⟧.favoured && "Aimed", !⟦2-char-id⟧.relit && "Dark"),
         children: [(0, ⟦2-char-id⟧.jsx)("h3", {
           children: ⟦2-char-id⟧.name
         }), ⟦2-char-id⟧.relit && null !== ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.jsxs)("div", {
```

</details>

<details>
<summary>Hunk 276 · Change · +1 / -1</summary>

```diff
@@ -7911,7 +7911,7 @@
             children: ⟦2-char-id⟧("skyblockGame:keepersChairTideNotice")
           }), (0, ⟦2-char-id⟧.jsx)("span", {
             className: "SkyblockKeepersChairFish",
-            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
               itemName: ⟦2-char-id⟧.itemName,
               amount: 0
             })
```

</details>

<details>
<summary>Hunk 277 · Change · +4 / -4</summary>

```diff
@@ -7947,16 +7947,16 @@
         controller: ⟦2-char-id⟧,
         lampLight: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
-        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
+        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
         [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)("lamp"),
         {
           t: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.F)(),
+        } = (0, ⟦2-char-id⟧.z)(),
         ⟦2-char-id⟧ = ⟦2-char-id⟧();
       if (!⟦2-char-id⟧.enabled) return null;
       const ⟦2-char-id⟧ = "light" === ⟦2-char-id⟧ && ⟦2-char-id⟧.enabled;
-      return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+      return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
         show: ⟦2-char-id⟧.open,
         close: ⟦2-char-id⟧.dismiss,
         togglePointerLock: !1,
```

</details>

<details>
<summary>Hunk 278 · Change · +1 / -1</summary>

```diff
@@ -7978,7 +7978,7 @@
               }), (0, ⟦2-char-id⟧.jsx)("p", {
                 children: ⟦2-char-id⟧(⟦2-char-id⟧ ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
               })]
-            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.j, {
+            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.i, {
               padIgnore: !0,
               ariaLabel: ⟦2-char-id⟧("skyblockGame:keepersChairClose"),
               onClick: ⟦2-char-id⟧.dismiss
```

</details>

<details>
<summary>Hunk 279 · Change · +1 / -1</summary>

```diff
@@ -8019,7 +8019,7 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)();
+      } = (0, ⟦2-char-id⟧.z)();
       return (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
         children: [(0, ⟦2-char-id⟧.jsx)("ul", {
           className: "SkyblockKeepersChairIslands",
```

</details>

<details>
<summary>Hunk 280 · Change · +1 / -1</summary>

```diff
@@ -8049,7 +8049,7 @@
           children: [(0, ⟦2-char-id⟧.jsx)("span", {
             className: "SkyblockKeepersChairFavour",
             children: ⟦2-char-id⟧("skyblockGame:keepersChairFavour")
-          }), ⟦2-char-id⟧.aimed && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.O, {
+          }), ⟦2-char-id⟧.aimed && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.T, {
             className: "SkyblockKeepersChairRest",
             disabled: !⟦2-char-id⟧.canAim,
             onClick: () => {
```

</details>

<details>
<summary>Hunk 281 · Change · +2 / -2</summary>

```diff
@@ -8071,12 +8071,12 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot());
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot());
       if (!⟦2-char-id⟧.enabled) return null;
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.freshCount > 0 ? ⟦2-char-id⟧("skyblockGame:reachLogOpenNews", {
         count: ⟦2-char-id⟧.freshCount
       }) : ⟦2-char-id⟧("skyblockGame:reachLogOpen");
-      return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.f, {
+      return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
         placement: "statBars",
         children: (0, ⟦2-char-id⟧.jsxs)("button", {
           type: "button",
```

</details>

<details>
<summary>Hunk 282 · Change · +3 / -3</summary>

```diff
@@ -8087,14 +8087,14 @@
           children: [⟦2-char-id⟧.news && (0, ⟦2-char-id⟧.jsx)("span", {
             className: "SkyblockReachLogPulse",
             "aria-hidden": "true"
-          }, `pulse:${FJ.newsToken}`), (0, ⟦2-char-id⟧.jsx)("span", {
+          }, `pulse:${VB.newsToken}`), (0, ⟦2-char-id⟧.jsx)("span", {
             className: ⟦2-char-id⟧()("SkyblockReachLogIcon", ⟦2-char-id⟧.news && "Jump"),
             "aria-hidden": "true",
-            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
               itemName: ⟦2-char-id⟧,
               amount: 0
             })
-          }, `icon:${FJ.newsToken}`), ⟦2-char-id⟧.freshCount > 0 && (0, ⟦2-char-id⟧.jsx)("span", {
+          }, `icon:${VB.newsToken}`), ⟦2-char-id⟧.freshCount > 0 && (0, ⟦2-char-id⟧.jsx)("span", {
             className: "SkyblockReachLogBadge",
             children: ⟦2-char-id⟧.freshCount
           })]
```

</details>

<details>
<summary>Hunk 283 · Change · +1 / -1</summary>

```diff
@@ -8118,7 +8118,7 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)();
+      } = (0, ⟦2-char-id⟧.z)();
       return (0, ⟦2-char-id⟧.jsxs)("li", {
         className: ⟦2-char-id⟧()("SkyblockRegularsCard", ⟦2-char-id⟧.tagged ? "Tagged" : "Untagged", ⟦2-char-id⟧.resting && "Resting"),
         children: [(0, ⟦2-char-id⟧.jsxs)("div", {
```

</details>

<details>
<summary>Hunk 284 · Change · +1 / -1</summary>

```diff
@@ -8126,7 +8126,7 @@
           children: [(0, ⟦2-char-id⟧.jsx)("span", {
             className: "SkyblockRegularsIcon",
             title: ⟦2-char-id⟧.fishName,
-            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
               itemName: ⟦2-char-id⟧.itemName,
               amount: 0
             })
```

</details>

<details>
<summary>Hunk 285 · Change · +1 / -1</summary>

```diff
@@ -8175,7 +8175,7 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()), ⟦2-char-id⟧ = ⟦2-char-id⟧.islands.find((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧));
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()), ⟦2-char-id⟧ = ⟦2-char-id⟧.islands.find((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧));
       if (!⟦2-char-id⟧.enabled || void 0 === ⟦2-char-id⟧) return null;
       const ⟦2-char-id⟧ = ⟦2-char-id⟧("skyblockGame:regularsOpen");
       return (0, ⟦2-char-id⟧.jsxs)("button", {
```

</details>

<details>
<summary>Hunk 286 · Change · +1 / -1</summary>

```diff
@@ -8192,7 +8192,7 @@
         }), ⟦2-char-id⟧.regulars.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsx)("span", {
           className: ⟦2-char-id⟧()("SkyblockRegularsStripIcon", ⟦2-char-id⟧.tagged && "Tagged"),
           title: ⟦2-char-id⟧.name,
-          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
             itemName: ⟦2-char-id⟧.itemName,
             amount: 0
           })
```

</details>

<details>
<summary>Hunk 287 · Change · +4 / -4</summary>

```diff
@@ -8205,14 +8205,14 @@
       let {
         controller: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
         {
           t: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.F)(),
+        } = (0, ⟦2-char-id⟧.z)(),
         ⟦2-char-id⟧ = ⟦2-char-id⟧();
       if (!⟦2-char-id⟧.enabled) return null;
-      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.islands.find((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧.selected))) && void 0 !== ⟦2-char-id⟧ ? cJ : null;
-      return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.islands.find((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧.selected))) && void 0 !== ⟦2-char-id⟧ ? TB : null;
+      return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
         show: ⟦2-char-id⟧.open,
         close: ⟦2-char-id⟧.dismiss,
         togglePointerLock: !1,
```

</details>

<details>
<summary>Hunk 288 · Change · +1 / -1</summary>

```diff
@@ -8234,7 +8234,7 @@
               }), (0, ⟦2-char-id⟧.jsx)("p", {
                 children: ⟦2-char-id⟧("skyblockGame:pimRegularsLedgerWelcome")
               })]
-            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.j, {
+            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.i, {
               padIgnore: !0,
               onClick: ⟦2-char-id⟧.dismiss
             })]
```

</details>

<details>
<summary>Hunk 289 · Change · +1 / -1</summary>

```diff
@@ -8250,7 +8250,7 @@
                 "aria-selected": ⟦2-char-id⟧,
                 "data-pad-tab": !0,
                 "data-pad-selected": ⟦2-char-id⟧ ? "true" : void 0,
-                className: ⟦2-char-id⟧()("SkyblockReachLogTab", `Island-${JJ.id}`, ⟦2-char-id⟧ && "Selected", ⟦2-char-id⟧.charm.given && "GoldPage"),
+                className: ⟦2-char-id⟧()("SkyblockReachLogTab", `Island-${BB.id}`, ⟦2-char-id⟧ && "Selected", ⟦2-char-id⟧.charm.given && "GoldPage"),
                 onClick: () => {
                   ⟦2-char-id⟧.selectIsland(⟦2-char-id⟧.id)
                 },
```

</details>

<details>
<summary>Hunk 290 · Change · +1 / -1</summary>

```diff
@@ -8261,7 +8261,7 @@
               }, ⟦2-char-id⟧.id)
             }))
           }), (0, ⟦2-char-id⟧.jsxs)("div", {
-            className: ⟦2-char-id⟧()("SkyblockRegularsPage", null !== ⟦2-char-id⟧ && `Island-${XJ.id}`),
+            className: ⟦2-char-id⟧()("SkyblockRegularsPage", null !== ⟦2-char-id⟧ && `Island-${lB.id}`),
             role: "tabpanel",
             children: [(0, ⟦2-char-id⟧.jsx)("p", {
               className: "SkyblockRegularsHow",
```

</details>

<details>
<summary>Hunk 291 · Change · +2 / -2</summary>

```diff
@@ -8296,8 +8296,8 @@
       ⟦2-char-id⟧ = Array.from({
         length: 6
       }, ((⟦2-char-id⟧, ⟦2-char-id⟧) => ({
-        "--x": `${(88*(.618034*cJ%1)).toFixed(1)}%`,
-        "--y": `${(10+37*cJ%70).toFixed(1)}%`,
+        "--x": `${(88*(.618034*TB%1)).toFixed(1)}%`,
+        "--y": `${(10+37*TB%70).toFixed(1)}%`,
         "--size": 7 + ⟦2-char-id⟧ % 3 * 3 + "rem",
         "--drift-x": 3 * (⟦2-char-id⟧ % 3 - 1) + "rem",
         "--drift-y": 2 * (⟦2-char-id⟧ % 2 === 0 ? -1 : 1) + "rem",
```

</details>

<details>
<summary>Hunk 292 · Change · +7 / -7</summary>

```diff
@@ -8307,29 +8307,29 @@
       ⟦2-char-id⟧ = Array.from({
         length: 14
       }, ((⟦2-char-id⟧, ⟦2-char-id⟧) => ({
-        "--left": `${(3+94*((.618034*cJ+.3)%1)).toFixed(1)}%`,
+        "--left": `${(3+94*((.618034*TB+.3)%1)).toFixed(1)}%`,
         "--size": 4 + ⟦2-char-id⟧ % 4 * 2 + "px",
         "--sway": ⟦2-char-id⟧ % 3 * 3 + 3 + "px",
-        "--duration": `${(8+7*cJ%6*1.1).toFixed(1)}s`,
-        "--delay": `${(-1.73*cJ%12).toFixed(2)}s`
+        "--duration": `${(8+7*TB%6*1.1).toFixed(1)}s`,
+        "--delay": `${(-1.73*TB%12).toFixed(2)}s`
       }))),
       ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.memo)((function(⟦2-char-id⟧) {
         let {
           island: ⟦2-char-id⟧
         } = ⟦2-char-id⟧;
         return (0, ⟦2-char-id⟧.jsxs)("div", {
-          className: ⟦2-char-id⟧()("SkyblockReachLogDepths", null !== ⟦2-char-id⟧ && `Island-${cJ}`),
+          className: ⟦2-char-id⟧()("SkyblockReachLogDepths", null !== ⟦2-char-id⟧ && `Island-${TB}`),
           "aria-hidden": "true",
           children: [⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => (0, ⟦2-char-id⟧.jsx)("span", {
             className: "SkyblockReachLogShaft",
             style: ⟦2-char-id⟧
-          }, `shaft${cJ}`))), ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => (0, ⟦2-char-id⟧.jsx)("span", {
+          }, `shaft${TB}`))), ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => (0, ⟦2-char-id⟧.jsx)("span", {
             className: ⟦2-char-id⟧()("SkyblockReachLogMote", ⟦2-char-id⟧ % 2 === 1 && "Violet"),
             style: ⟦2-char-id⟧
-          }, `mote${cJ}`))), ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => (0, ⟦2-char-id⟧.jsx)("span", {
+          }, `mote${TB}`))), ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => (0, ⟦2-char-id⟧.jsx)("span", {
             className: "SkyblockReachLogBubble",
             style: ⟦2-char-id⟧
-          }, `bubble${cJ}`)))]
+          }, `bubble${TB}`)))]
         })
       })),
       ⟦2-char-id⟧ = 100;
```

</details>

<details>
<summary>Hunk 293 · Change · +1 / -1</summary>

```diff
@@ -8340,7 +8340,7 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)();
+      } = (0, ⟦2-char-id⟧.z)();
       if (null === ⟦2-char-id⟧ || 0 === ⟦2-char-id⟧.total) return null;
       const ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧.aspect,
         ⟦2-char-id⟧ = ⟦2-char-id⟧("skyblockGame:hiddenWatersCount", {
```

</details>

<details>
<summary>Hunk 294 · Change · +2 / -2</summary>

```diff
@@ -8349,10 +8349,10 @@
         });
       return (0, ⟦2-char-id⟧.jsxs)("div", {
         className: "SkyblockHiddenWatersStrip",
-        title: `${ZJ("skyblockGame:hiddenWatersTitle")}: ${UJ}`,
+        title: `${dB("skyblockGame:hiddenWatersTitle")}: ${yB}`,
         children: [(0, ⟦2-char-id⟧.jsxs)("svg", {
           className: "SkyblockHiddenWatersOutline",
-          viewBox: `0 0 100 ${FJ}`,
+          viewBox: `0 0 100 ${VB}`,
           "aria-hidden": "true",
           children: [⟦2-char-id⟧.islands.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => (0, ⟦2-char-id⟧.jsx)("ellipse", {
             className: "SkyblockHiddenWatersIsland",
```

</details>

<details>
<summary>Hunk 295 · Change · +1 / -1</summary>

```diff
@@ -8386,7 +8386,7 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.glimpses.get(⟦2-char-id⟧);
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.glimpses.get(⟦2-char-id⟧);
       return void 0 === ⟦2-char-id⟧ || 0 === ⟦2-char-id⟧.length ? null : (0, ⟦2-char-id⟧.jsxs)("div", {
         className: "SkyblockHiddenWatersGlimpses",
         children: [(0, ⟦2-char-id⟧.jsx)("span", {
```

</details>

<details>
<summary>Hunk 296 · Change · +1 / -1</summary>

```diff
@@ -8397,7 +8397,7 @@
           children: ⟦2-char-id⟧.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsx)("span", {
             className: "SkyblockHiddenWatersSilhouette",
             "aria-hidden": "true",
-            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
               itemName: ⟦2-char-id⟧,
               amount: 0
             })
```

</details>

<details>
<summary>Hunk 297 · Change · +1 / -1</summary>

```diff
@@ -8422,7 +8422,7 @@
       ⟦2-char-id⟧ = ⟦2-char-id⟧.slice(0, 2);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return ⟦2-char-id⟧ ? HX : ⟦2-char-id⟧
+      return ⟦2-char-id⟧ ? Pl : ⟦2-char-id⟧
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 298 · Change · +3 / -3</summary>

```diff
@@ -8432,18 +8432,18 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)();
+      } = (0, ⟦2-char-id⟧.z)();
       return (0, ⟦2-char-id⟧.jsxs)("span", {
         className: "SkyblockReachLogMarks",
         children: [⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧ < ⟦2-char-id⟧.marks;
           return (0, ⟦2-char-id⟧.jsx)("span", {
-            className: ⟦2-char-id⟧()("SkyblockReachLogPip", JJ, ⟦2-char-id⟧ && "Earned", ⟦2-char-id⟧ && ⟦2-char-id⟧.fresh && ⟦2-char-id⟧ === ⟦2-char-id⟧.marks - 1 && "Newest"),
+            className: ⟦2-char-id⟧()("SkyblockReachLogPip", BB, ⟦2-char-id⟧ && "Earned", ⟦2-char-id⟧ && ⟦2-char-id⟧.fresh && ⟦2-char-id⟧ === ⟦2-char-id⟧.marks - 1 && "Newest"),
             title: ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧])
           }, ⟦2-char-id⟧)
         })), (0, ⟦2-char-id⟧.jsx)("span", {
           className: "SkyblockReachLogDivider"
-        }), kX(⟦2-char-id⟧).map(((⟦2-char-id⟧, ⟦2-char-id⟧) => (0, ⟦2-char-id⟧.jsx)("span", {
+        }), Rl(⟦2-char-id⟧).map(((⟦2-char-id⟧, ⟦2-char-id⟧) => (0, ⟦2-char-id⟧.jsx)("span", {
           className: ⟦2-char-id⟧()("SkyblockReachLogRibbon", ⟦2-char-id⟧.className, !0 === ⟦2-char-id⟧.ribbons[⟦2-char-id⟧] && "Earned"),
           title: ⟦2-char-id⟧(⟦2-char-id⟧.titleKey)
         }, ⟦2-char-id⟧.className)))]
```

</details>

<details>
<summary>Hunk 299 · Change · +1 / -1</summary>

```diff
@@ -8457,7 +8457,7 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)();
+      } = (0, ⟦2-char-id⟧.z)();
       return (0, ⟦2-char-id⟧.jsxs)("span", {
         className: "SkyblockReachLogLegend",
         children: [(0, ⟦2-char-id⟧.jsxs)("span", {
```

</details>

<details>
<summary>Hunk 300 · Change · +5 / -5</summary>

```diff
@@ -8465,25 +8465,25 @@
           title: ⟦2-char-id⟧("skyblockGame:reachLogMarks"),
           children: [(0, ⟦2-char-id⟧.jsx)("span", {
             className: "SkyblockReachLogPip Gold Earned"
-          }), FJ("skyblockGame:reachLogLegendMarks")]
-        }), kX(⟦2-char-id⟧).map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsxs)("span", {
+          }), VB("skyblockGame:reachLogLegendMarks")]
+        }), Rl(⟦2-char-id⟧).map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsxs)("span", {
           className: "SkyblockReachLogLegendItem",
           title: ⟦2-char-id⟧(⟦2-char-id⟧.titleKey),
           children: [(0, ⟦2-char-id⟧.jsx)("span", {
             className: ⟦2-char-id⟧()("SkyblockReachLogRibbon", ⟦2-char-id⟧.className, "Earned")
-          }), FJ(⟦2-char-id⟧.legendKey)]
+          }), VB(⟦2-char-id⟧.legendKey)]
         }, ⟦2-char-id⟧.className))), (0, ⟦2-char-id⟧.jsxs)("span", {
           className: "SkyblockReachLogLegendItem",
           title: ⟦2-char-id⟧("skyblockGame:reachLogGlimmerTitle"),
           children: [(0, ⟦2-char-id⟧.jsx)("span", {
             className: "SkyblockReachLogGlimmer"
-          }), FJ("skyblockGame:reachLogLegendGlimmer")]
+          }), VB("skyblockGame:reachLogLegendGlimmer")]
         }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)("span", {
           className: "SkyblockReachLogLegendItem",
           title: ⟦2-char-id⟧("skyblockGame:reachLogHaloTitle"),
           children: [(0, ⟦2-char-id⟧.jsx)("span", {
             className: "SkyblockReachLogHalo"
-          }), FJ("skyblockGame:reachLogLegendHalo")]
+          }), VB("skyblockGame:reachLogLegendHalo")]
         })]
       })
     }
```

</details>

<details>
<summary>Hunk 301 · Change · +1 / -1</summary>

```diff
@@ -8497,7 +8497,7 @@
         children: [(0, ⟦2-char-id⟧.jsx)("span", {
           className: "SkyblockReachLogReturnerIcon",
           "aria-hidden": "true",
-          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
             itemName: ⟦2-char-id⟧.itemName,
             amount: 0
           })
```

</details>

<details>
<summary>Hunk 302 · Change · +1 / -1</summary>

```diff
@@ -8515,7 +8515,7 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)();
+      } = (0, ⟦2-char-id⟧.z)();
       return (0, ⟦2-char-id⟧.jsxs)("li", {
         className: ⟦2-char-id⟧()("SkyblockReachLogCard", ⟦2-char-id⟧.caught ? "Caught" : "Unknown", ⟦2-char-id⟧.marks >= 3 && "GoldCard", ⟦2-char-id⟧.fresh && "Fresh", ⟦2-char-id⟧.visitor && "Visitor"),
         children: [⟦2-char-id⟧.visitor && (0, ⟦2-char-id⟧.jsx)("span", {
```

</details>

<details>
<summary>Hunk 303 · Change · +1 / -1</summary>

```diff
@@ -8531,7 +8531,7 @@
           children: [⟦2-char-id⟧.halo && (0, ⟦2-char-id⟧.jsx)("span", {
             className: "SkyblockReachLogHalo",
             title: ⟦2-char-id⟧("skyblockGame:reachLogHaloTitle")
-          }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+          }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
             itemName: ⟦2-char-id⟧.itemName,
             amount: 0
           }), ⟦2-char-id⟧.glimmer && (0, ⟦2-char-id⟧.jsx)("span", {
```

</details>

<details>
<summary>Hunk 304 · Change · +1 / -1</summary>

```diff
@@ -8562,7 +8562,7 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)();
+      } = (0, ⟦2-char-id⟧.z)();
       return ⟦2-char-id⟧.awake ? (0, ⟦2-char-id⟧.jsx)("ul", {
         className: "SkyblockReachLogGrid",
         children: ⟦2-char-id⟧.fish.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
```

</details>

<details>
<summary>Hunk 305 · Change · +6 / -6</summary>

```diff
@@ -8587,18 +8587,18 @@
         regulars: ⟦2-char-id⟧,
         hiddenWaters: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
         ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
-          return (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot())
+          return (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot())
         }(⟦2-char-id⟧),
-        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
+        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
         {
           t: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.F)(),
+        } = (0, ⟦2-char-id⟧.z)(),
         ⟦2-char-id⟧ = ⟦2-char-id⟧();
       if (!⟦2-char-id⟧.enabled) return null;
-      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.pages.find((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧.selected))) && void 0 !== ⟦2-char-id⟧ ? cJ : null;
-      return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.pages.find((⟦2-char-id⟧ => ⟦2-char-id⟧.id === ⟦2-char-id⟧.selected))) && void 0 !== ⟦2-char-id⟧ ? TB : null;
+      return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
         show: ⟦2-char-id⟧.open,
         close: ⟦2-char-id⟧.dismiss,
         togglePointerLock: !1,
```

</details>

<details>
<summary>Hunk 306 · Change · +1 / -1</summary>

```diff
@@ -8612,7 +8612,7 @@
           ref: ⟦2-char-id⟧,
           onKeyDown: ⟦2-char-id⟧,
           children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
-            island: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.id) && void 0 !== ⟦2-char-id⟧ ? ZJ : null
+            island: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.id) && void 0 !== ⟦2-char-id⟧ ? dB : null
           }), (0, ⟦2-char-id⟧.jsxs)("header", {
             className: "SkyblockReachLogHeader",
             children: [(0, ⟦2-char-id⟧.jsxs)("div", {
```

</details>

<details>
<summary>Hunk 307 · Change · +1 / -1</summary>

```diff
@@ -8624,7 +8624,7 @@
               })]
             }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
               view: ⟦2-char-id⟧
-            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.j, {
+            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.i, {
               padIgnore: !0,
               onClick: ⟦2-char-id⟧.dismiss
             })]
```

</details>

<details>
<summary>Hunk 308 · Change · +1 / -1</summary>

```diff
@@ -8641,7 +8641,7 @@
                 "aria-selected": ⟦2-char-id⟧,
                 "data-pad-tab": !0,
                 "data-pad-selected": ⟦2-char-id⟧ ? "true" : void 0,
-                className: ⟦2-char-id⟧()("SkyblockReachLogTab", `Island-${JJ.id}`, ⟦2-char-id⟧ && "Selected", !⟦2-char-id⟧.awake && "Asleep", ⟦2-char-id⟧.gold && "GoldPage", ⟦2-char-id⟧ && "HasNews"),
+                className: ⟦2-char-id⟧()("SkyblockReachLogTab", `Island-${BB.id}`, ⟦2-char-id⟧ && "Selected", !⟦2-char-id⟧.awake && "Asleep", ⟦2-char-id⟧.gold && "GoldPage", ⟦2-char-id⟧ && "HasNews"),
                 onClick: () => {
                   ⟦2-char-id⟧.selectPage(⟦2-char-id⟧.id)
                 },
```

</details>

<details>
<summary>Hunk 309 · Change · +1 / -1</summary>

```diff
@@ -8658,7 +8658,7 @@
               }, ⟦2-char-id⟧.id)
             }))
           }), (0, ⟦2-char-id⟧.jsxs)("div", {
-            className: ⟦2-char-id⟧()("SkyblockReachLogPage", null !== ⟦2-char-id⟧ && `Island-${hJ.id}`),
+            className: ⟦2-char-id⟧()("SkyblockReachLogPage", null !== ⟦2-char-id⟧ && `Island-${kB.id}`),
             role: "tabpanel",
             children: [null !== ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
               page: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 310 · Change · +1 / -1</summary>

```diff
@@ -8671,7 +8671,7 @@
               island: ⟦2-char-id⟧.id
             })]
           }), (0, ⟦2-char-id⟧.jsx)("footer", {
-            className: ⟦2-char-id⟧()("SkyblockReachLogFooter", null !== ⟦2-char-id⟧ && `Island-${hJ.id}`, !0 === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.gold) && "GoldPage"),
+            className: ⟦2-char-id⟧()("SkyblockReachLogFooter", null !== ⟦2-char-id⟧ && `Island-${kB.id}`, !0 === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.gold) && "GoldPage"),
             children: !0 === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.gold) ? (0, ⟦2-char-id⟧.jsx)("span", {
               className: "SkyblockReachLogGoldLine",
               children: ⟦2-char-id⟧("skyblockGame:keeperWickReachLogPageGold")
```

</details>

<details>
<summary>Hunk 311 · Change · +1 / -1</summary>

```diff
@@ -8688,7 +8688,7 @@
         })
       })
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(4225);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(4226);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let {
```

</details>

<details>
<summary>Hunk 312 · Change · +1 / -1</summary>

```diff
@@ -8704,7 +8704,7 @@
             className: "SkyblockDialogueCompleted",
             children: ⟦2-char-id⟧
           })]
-        }), ⟦2-char-id⟧.lines.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+        }), ⟦2-char-id⟧.lines.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
           display: ⟦2-char-id⟧.display
         }, ⟦2-char-id⟧.key)))]
       })
```

</details>

<details>
<summary>Hunk 313 · Change · +2 / -2</summary>

```diff
@@ -8716,10 +8716,10 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()), ⟦2-char-id⟧ = ⟦2-char-id⟧();
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()), ⟦2-char-id⟧ = ⟦2-char-id⟧();
       if (!⟦2-char-id⟧.enabled) return null;
       const ⟦2-char-id⟧ = !⟦2-char-id⟧.loading && 0 === ⟦2-char-id⟧.conversations.length;
-      return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+      return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
         show: ⟦2-char-id⟧.open,
         close: ⟦2-char-id⟧.dismiss,
         togglePointerLock: !1,
```

</details>

<details>
<summary>Hunk 314 · Change · +1 / -1</summary>

```diff
@@ -8741,7 +8741,7 @@
               }), (0, ⟦2-char-id⟧.jsx)("p", {
                 children: ⟦2-char-id⟧("skyblockDialogue:intro")
               })]
-            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.j, {
+            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.i, {
               padIgnore: !0,
               onClick: ⟦2-char-id⟧.dismiss
             })]
```

</details>

<details>
<summary>Hunk 315 · Change · +1 / -1</summary>

```diff
@@ -8758,7 +8758,7 @@
                 onClick: () => {
                   ⟦2-char-id⟧.selectCharacter(⟦2-char-id⟧.id)
                 },
-                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                   text: ⟦2-char-id⟧.styling
                 })
               }, ⟦2-char-id⟧.id)))
```

</details>

<details>
<summary>Hunk 316 · Change · +3 / -3</summary>

```diff
@@ -8788,12 +8788,12 @@
       let {
         controller: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
         {
           t: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.F)(),
+        } = (0, ⟦2-char-id⟧.z)(),
         ⟦2-char-id⟧ = ⟦2-char-id⟧();
-      return ⟦2-char-id⟧.enabled ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+      return ⟦2-char-id⟧.enabled ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
         show: ⟦2-char-id⟧.open,
         close: ⟦2-char-id⟧.dismiss,
         togglePointerLock: !1,
```

</details>

<details>
<summary>Hunk 317 · Change · +1 / -1</summary>

```diff
@@ -8815,7 +8815,7 @@
               }), (0, ⟦2-char-id⟧.jsx)("p", {
                 children: ⟦2-char-id⟧("skyblockGame:autographBookIntro")
               })]
-            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.j, {
+            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.i, {
               padIgnore: !0,
               onClick: ⟦2-char-id⟧.dismiss
             })]
```

</details>

<details>
<summary>Hunk 318 · Change · +2 / -2</summary>

```diff
@@ -8850,10 +8850,10 @@
                 style: null === ⟦2-char-id⟧.rank ? void 0 : {
                   color: ⟦2-char-id⟧.rank.colour
                 },
-                children: [null !== ⟦2-char-id⟧.rank && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+                children: [null !== ⟦2-char-id⟧.rank && (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                   className: "SkyblockAutographRankIcon",
                   name: ⟦2-char-id⟧.rank.icon,
-                  kit: (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧.rank.icon)
+                  kit: (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧.rank.icon)
                 }), (0, ⟦2-char-id⟧.jsxs)("div", {
                   className: "SkyblockAutographText",
                   children: [(0, ⟦2-char-id⟧.jsx)("span", {
```

</details>

<details>
<summary>Hunk 319 · Change · +2 / -2</summary>

```diff
@@ -8918,9 +8918,9 @@
         controller: ⟦2-char-id⟧,
         display: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getNotificationSnapshot()),
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getNotificationSnapshot()),
         [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1);
-      return (0, ⟦2-char-id⟧.i)("qteStateUpdated", (⟦2-char-id⟧ => {
+      return (0, ⟦2-char-id⟧.e)("qteStateUpdated", (⟦2-char-id⟧ => {
         ⟦2-char-id⟧(⟦2-char-id⟧.isActive)
       })), (0, ⟦2-char-id⟧.jsxs)("div", {
         className: "SkyblockQuestNotificationAnchor" + (⟦2-char-id⟧ ? " UnderQte" : ""),
```

</details>

<details>
<summary>Hunk 320 · Change · +3 / -3</summary>

```diff
@@ -8928,10 +8928,10 @@
         "aria-live": "polite",
         "aria-atomic": "true",
         children: [⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)("div", {
-          className: `SkyblockQuestNotification ${FJ.kind} ${FJ.phase}`,
+          className: `SkyblockQuestNotification ${VB.kind} ${VB.phase}`,
           style: {
-            "--quest-notification-duration": `${FJ.durationMs}ms`,
-            ...FJ.accent && {
+            "--quest-notification-duration": `${VB.durationMs}ms`,
+            ...VB.accent && {
               "--quest-notification-accent": ⟦2-char-id⟧.accent
             }
           },
```

</details>

<details>
<summary>Hunk 321 · Change · +1 / -1</summary>

```diff
@@ -8943,7 +8943,7 @@
               children: ⟦2-char-id⟧(⟦2-char-id⟧)
             }), ⟦2-char-id⟧.iconItem && (0, ⟦2-char-id⟧.jsx)("span", {
               className: "SkyblockQuestNotificationIcon",
-              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
                 itemName: ⟦2-char-id⟧.iconItem,
                 amount: 0
               })
```

</details>

<details>
<summary>Hunk 322 · Change · +3 / -3</summary>

```diff
@@ -8955,17 +8955,17 @@
               children: ⟦2-char-id⟧.title
             }), (0, ⟦2-char-id⟧.jsx)("strong", {
               className: "SkyblockQuestNotificationName",
-              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
                 text: ⟦2-char-id⟧.name
               })
             }), ⟦2-char-id⟧.description && (0, ⟦2-char-id⟧.jsx)("span", {
               className: "SkyblockQuestNotificationDescription",
-              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
                 text: ⟦2-char-id⟧.description
               })
             }), ⟦2-char-id⟧.reward && (0, ⟦2-char-id⟧.jsx)("span", {
               className: "SkyblockQuestNotificationReward",
-              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
                 text: ⟦2-char-id⟧.reward
               })
             })]
```

</details>

<details>
<summary>Hunk 323 · Change · +2 / -2</summary>

```diff
@@ -8976,13 +8976,13 @@
           "data-notification-token": ⟦2-char-id⟧.token,
           ref: ⟦2-char-id⟧.mountWaypointOrigin,
           "aria-hidden": "true"
-        }, `waypoint-${FJ.token}`)]
+        }, `waypoint-${VB.token}`)]
       })
     }));
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = parseInt(⟦2-char-id⟧.replace("#", ""), 16);
-      return `${cJ>>16&255}, ${cJ>>8&255}, ${255&cJ}`
+      return `${TB>>16&255}, ${TB>>8&255}, ${255&TB}`
     }
     const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.memo)((function(⟦2-char-id⟧) {
       let {
```

</details>

<details>
<summary>Hunk 324 · Change · +1 / -1</summary>

```diff
@@ -8990,7 +8990,7 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot());
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot());
       if (!⟦2-char-id⟧) return null;
       const ⟦2-char-id⟧ = "arrival" === ⟦2-char-id⟧.phase;
       return (0, ⟦2-char-id⟧.jsxs)("div", {
```

</details>

<details>
<summary>Hunk 325 · Change · +1 / -1</summary>

```diff
@@ -9000,7 +9000,7 @@
         }),
         style: {
           "--portal-rgb": ⟦2-char-id⟧(⟦2-char-id⟧.colour),
-          "--portal-duration": `${FJ.durationMs}ms`
+          "--portal-duration": `${VB.durationMs}ms`
         },
         role: "status",
         "aria-live": "polite",
```

</details>

<details>
<summary>Hunk 326 · Change · +3 / -3</summary>

```diff
@@ -9074,14 +9074,14 @@
           return (0, ⟦2-char-id⟧.jsx)("span", {
             className: "SkyblockDailyRewardFlyingItem",
             style: {
-              left: `${UJ.x}px`,
-              top: `${UJ.y}px`,
+              left: `${yB.x}px`,
+              top: `${yB.y}px`,
               "--item-dx": ⟦2-char-id⟧.x - ⟦2-char-id⟧.x + "px",
               "--item-dy": ⟦2-char-id⟧.y - ⟦2-char-id⟧.y + "px",
               "--item-delay": 2⟦2-char-id⟧ + 160 * ⟦2-char-id⟧ + "ms",
               "--item-flight": "700ms"
             },
-            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
               itemName: ⟦2-char-id⟧.dailyRewardItemName,
               amount: 0
             })
```

</details>

<details>
<summary>Hunk 327 · Change · +6 / -6</summary>

```diff
@@ -9111,16 +9111,16 @@
         ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.jsx)("span", {
           className: "SkyblockDailyRewardCoin",
           style: {
-            left: `${cJ.x}px`,
-            top: `${cJ.y}px`,
-            "--coin-bx": `${JJ.x}px`,
-            "--coin-by": `${JJ.y}px`,
+            left: `${TB.x}px`,
+            top: `${TB.y}px`,
+            "--coin-bx": `${BB.x}px`,
+            "--coin-by": `${BB.y}px`,
             "--coin-dx": ⟦2-char-id⟧.x - ⟦2-char-id⟧.x + "px",
             "--coin-dy": ⟦2-char-id⟧.y - ⟦2-char-id⟧.y + "px",
-            "--coin-delay": `${OZ(eJ,FJ)}ms`,
+            "--coin-delay": `${Wd(pB,VB)}ms`,
             "--coin-flight": "650ms"
           },
-          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
             itemName: "Gold Coin",
             amount: 0
           })
```

</details>

<details>
<summary>Hunk 328 · Change · +3 / -3</summary>

```diff
@@ -9140,13 +9140,13 @@
       return (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
         children: [(0, ⟦2-char-id⟧.jsxs)("span", {
           className: "SkyblockDailyRewardFooterReward",
-          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
             itemName: "Gold Coin",
             amount: 0
-          }), (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧.dailyRewardCoins)]
+          }), (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧.dailyRewardCoins)]
         }), ⟦2-char-id⟧.dailyRewardItems.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsxs)("span", {
           className: "SkyblockDailyRewardFooterReward",
-          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
             itemName: ⟦2-char-id⟧.dailyRewardItemName,
             amount: 0
           }), "\xd7", ⟦2-char-id⟧.dailyRewardItemAmount]
```

</details>

<details>
<summary>Hunk 329 · Change · +3 / -3</summary>

```diff
@@ -9175,13 +9175,13 @@
               children: ⟦2-char-id⟧
             }), (0, ⟦2-char-id⟧.jsxs)("span", {
               className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
-              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
                 itemName: "Gold Coin",
                 amount: 0
-              }), (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧.dailyRewardCoins)]
+              }), (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧.dailyRewardCoins)]
             }), ⟦2-char-id⟧.dailyRewardItems.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsxs)("span", {
               className: "SkyblockDailyRewardTileReward",
-              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
                 itemName: ⟦2-char-id⟧.dailyRewardItemName,
                 amount: 0
               }), "\xd7", ⟦2-char-id⟧.dailyRewardItemAmount]
```

</details>

<details>
<summary>Hunk 330 · Change · +2 / -2</summary>

```diff
@@ -9197,13 +9197,13 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null);
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null);
       (0, ⟦2-char-id⟧.useLayoutEffect)((() => {
         var ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.current) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.getBoundingClientRect();
         if (⟦2-char-id⟧) {
           var ⟦2-char-id⟧, ⟦2-char-id⟧;
-          const ⟦2-char-id⟧ = Array.from(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.current) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.children) && void 0 !== ⟦2-char-id⟧ ? ZJ : [], (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧.getBoundingClientRect())));
+          const ⟦2-char-id⟧ = Array.from(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.current) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.children) && void 0 !== ⟦2-char-id⟧ ? dB : [], (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧.getBoundingClientRect())));
           ⟦2-char-id⟧({
             origin: ⟦2-char-id⟧(⟦2-char-id⟧),
             target: ⟦2-char-id⟧(),
```

</details>

<details>
<summary>Hunk 331 · Change · +1 / -1</summary>

```diff
@@ -9214,7 +9214,7 @@
       }), []);
       const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.day),
         ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
-          const [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)((() => ⟦2-char-id⟧() ? JJ : 0));
+          const [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)((() => ⟦2-char-id⟧() ? BB : 0));
           return (0, ⟦2-char-id⟧.useEffect)((() => {
             if (⟦2-char-id⟧()) return;
             const ⟦2-char-id⟧ = performance.now();
```

</details>

<details>
<summary>Hunk 332 · Change · +1 / -1</summary>

```diff
@@ -9233,7 +9233,7 @@
           Jackpot: ⟦2-char-id⟧.day === ⟦2-char-id⟧
         }),
         style: {
-          "--daily-duration": `${cJ.durationMs}ms`
+          "--daily-duration": `${TB.durationMs}ms`
         },
         role: "status",
         "aria-live": "polite",
```

</details>

<details>
<summary>Hunk 333 · Change · +3 / -3</summary>

```diff
@@ -9256,18 +9256,18 @@
           }), (0, ⟦2-char-id⟧.jsxs)("div", {
             className: "SkyblockDailyRewardAmount",
             ref: ⟦2-char-id⟧,
-            children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+            children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
               itemName: "Gold Coin",
               amount: 0
             }), (0, ⟦2-char-id⟧.jsxs)("span", {
-              children: ["+", (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧)]
+              children: ["+", (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧)]
             })]
           }), ⟦2-char-id⟧.items.length > 0 && (0, ⟦2-char-id⟧.jsx)("div", {
             className: "SkyblockDailyRewardItems",
             ref: ⟦2-char-id⟧,
             children: ⟦2-char-id⟧.items.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsxs)("span", {
               className: "SkyblockDailyRewardItem",
-              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+              children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
                 itemName: ⟦2-char-id⟧.dailyRewardItemName,
                 amount: 0
               }), "\xd7", ⟦2-char-id⟧.dailyRewardItemAmount]
```

</details>

<details>
<summary>Hunk 334 · Change · +1 / -1</summary>

```diff
@@ -9295,7 +9295,7 @@
         let {
           controller: ⟦2-char-id⟧
         } = ⟦2-char-id⟧;
-        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot());
+        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot());
         return ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
           view: ⟦2-char-id⟧
         }, ⟦2-char-id⟧.token) : null
```

</details>

<details>
<summary>Hunk 335 · Change · +2 / -2</summary>

```diff
@@ -9308,8 +9308,8 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       return {
-        "--letter-delay": `${DA(JJ)}ms`,
-        "--letter-land": `${DA(JJ)+300}ms`
+        "--letter-delay": `${DJ(BB)}ms`,
+        "--letter-land": `${DJ(BB)+300}ms`
       }
     }
 
```

</details>

<details>
<summary>Hunk 336 · Change · +6 / -6</summary>

```diff
@@ -9351,31 +9351,31 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.items[0]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.itemName) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧;
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.items[0]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.itemName) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧;
       return (0, ⟦2-char-id⟧.jsxs)("li", {
         className: "SkyblockMailboxLetter",
         style: ⟦2-char-id⟧(⟦2-char-id⟧),
         children: [(0, ⟦2-char-id⟧.jsx)("div", {
           className: "SkyblockMailboxStamp",
           "aria-hidden": "true",
-          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+          children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
             itemName: ⟦2-char-id⟧,
             amount: 0
           })
         }), (0, ⟦2-char-id⟧.jsx)("div", {
           className: "SkyblockMailboxReason",
-          children: ⟦2-char-id⟧(⟦2-char-id⟧.reasonKey, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.reasonParams) && void 0 !== ⟦2-char-id⟧ ? FJ : void 0)
+          children: ⟦2-char-id⟧(⟦2-char-id⟧.reasonKey, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.reasonParams) && void 0 !== ⟦2-char-id⟧ ? VB : void 0)
         }), (0, ⟦2-char-id⟧.jsxs)("div", {
           className: "SkyblockMailboxContents",
           children: [⟦2-char-id⟧.coins > 0 && (0, ⟦2-char-id⟧.jsxs)("span", {
             className: "SkyblockMailboxGift SkyblockMailboxCoins",
-            children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+            children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
               itemName: ⟦2-char-id⟧,
               amount: 0
-            }), "+", (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧.coins)]
+            }), "+", (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧.coins)]
           }), ⟦2-char-id⟧.items.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => (0, ⟦2-char-id⟧.jsxs)("span", {
             className: "SkyblockMailboxGift",
-            children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+            children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
               itemName: ⟦2-char-id⟧.itemName,
               amount: 0
             }), ⟦2-char-id⟧.label, " \xd7", ⟦2-char-id⟧.amount]
```

</details>

<details>
<summary>Hunk 337 · Change · +3 / -3</summary>

```diff
@@ -9390,14 +9390,14 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)();
+      } = (0, ⟦2-char-id⟧.z)();
       return (0, ⟦2-char-id⟧.jsx)("div", {
         className: "SkyblockMailbox",
         style: {
-          "--mail-duration": `${cJ.durationMs}ms`,
+          "--mail-duration": `${TB.durationMs}ms`,
           "--flag-up": "300ms",
           "--door-open": "500ms",
-          "--more-land": `${DA(cJ.letters.length)+300}ms`
+          "--more-land": `${DJ(TB.letters.length)+300}ms`
         },
         role: "status",
         "aria-live": "polite",
```

</details>

<details>
<summary>Hunk 338 · Change · +1 / -1</summary>

```diff
@@ -9430,7 +9430,7 @@
       let {
         controller: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot());
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot());
       return ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
         view: ⟦2-char-id⟧
       }, ⟦2-char-id⟧.token) : null
```

</details>

<details>
<summary>Hunk 339 · Change · +1 / -1</summary>

```diff
@@ -9442,7 +9442,7 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot());
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot());
       if (null === ⟦2-char-id⟧) return null;
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.fullSet ? "empty" === ⟦2-char-id⟧.fuelState ? {
         text: ⟦2-char-id⟧("skyblockGame:magmawardHudNoFuel"),
```

</details>

<details>
<summary>Hunk 340 · Change · +4 / -4</summary>

```diff
@@ -9453,16 +9453,16 @@
         }),
         tone: "partial"
       };
-      return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.f, {
+      return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
         placement: "statBars",
         children: (0, ⟦2-char-id⟧.jsxs)("div", {
-          className: ⟦2-char-id⟧()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${FJ.fuelState}`, {
+          className: ⟦2-char-id⟧()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${VB.fuelState}`, {
             "SkyblockMagmawardHud-partial": !⟦2-char-id⟧.fullSet,
             "SkyblockMagmawardHud-armed": ⟦2-char-id⟧.fullSet && "empty" !== ⟦2-char-id⟧.fuelState
           }),
           children: [null !== ⟦2-char-id⟧.flare && (0, ⟦2-char-id⟧.jsx)("div", {
-            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${FJ.flare}`
-          }, `flare:${FJ.flareToken}`), (0, ⟦2-char-id⟧.jsx)("div", {
+            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${VB.flare}`
+          }, `flare:${VB.flareToken}`), (0, ⟦2-char-id⟧.jsx)("div", {
             className: ⟦2-char-id⟧()("SkyblockMagmawardPieces", {
               SkyblockMagmawardPiecesComplete: ⟦2-char-id⟧.setLit
             }),
```

</details>

<details>
<summary>Hunk 341 · Change · +5 / -5</summary>

```diff
@@ -9471,20 +9471,20 @@
                 SkyblockMagmawardPieceWorn: ⟦2-char-id⟧.worn,
                 SkyblockMagmawardPieceJustWorn: ⟦2-char-id⟧.justWorn
               }),
-              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+              children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
                 itemName: ⟦2-char-id⟧.itemName,
                 amount: 0
               })
-            }, `${cJ}:${JJ.wornToken}`)))
-          }, `pieces:${FJ.setLitToken}`), (0, ⟦2-char-id⟧.jsxs)("div", {
+            }, `${TB}:${BB.wornToken}`)))
+          }, `pieces:${VB.setLitToken}`), (0, ⟦2-char-id⟧.jsxs)("div", {
             className: "SkyblockMagmawardFuel",
             children: [(0, ⟦2-char-id⟧.jsx)("div", {
               className: "SkyblockMagmawardLowGlow"
             }), (0, ⟦2-char-id⟧.jsxs)("div", {
-              className: ⟦2-char-id⟧()("SkyblockMagmawardFuelCounter", ⟦2-char-id⟧.pulse && `SkyblockMagmawardFuelCounter-${FJ.pulse}`),
+              className: ⟦2-char-id⟧()("SkyblockMagmawardFuelCounter", ⟦2-char-id⟧.pulse && `SkyblockMagmawardFuelCounter-${VB.pulse}`),
               children: [(0, ⟦2-char-id⟧.jsx)("div", {
                 className: "SkyblockMagmawardFuelIcon",
-                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
                   itemName: "Magmaward Fuel",
                   amount: 0
                 })
```

</details>

<details>
<summary>Hunk 342 · Change · +3 / -3</summary>

```diff
@@ -9492,12 +9492,12 @@
                 className: "SkyblockMagmawardFuelCount SmallTextBold",
                 children: ⟦2-char-id⟧.fuel
               })]
-            }, `counter:${FJ.pulseToken}`), "burn" === ⟦2-char-id⟧.pulse && (0, ⟦2-char-id⟧.jsx)("span", {
+            }, `counter:${VB.pulseToken}`), "burn" === ⟦2-char-id⟧.pulse && (0, ⟦2-char-id⟧.jsx)("span", {
               className: "SkyblockMagmawardEmber SmallTextBold",
               children: "-1"
-            }, `ember:${FJ.pulseToken}`)]
+            }, `ember:${VB.pulseToken}`)]
           }), ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsx)("div", {
-            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${UJ.tone} SmallTextBold`,
+            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${yB.tone} SmallTextBold`,
             children: ⟦2-char-id⟧.text
           })]
         })
```

</details>

<details>
<summary>Hunk 343 · Change · +2 / -2</summary>

```diff
@@ -9511,8 +9511,8 @@
       const {
         t: ⟦2-char-id⟧,
         selectedLanguage: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot());
-      return null === ⟦2-char-id⟧ ? null : (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.f, {
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot());
+      return null === ⟦2-char-id⟧ ? null : (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
         placement: "statBars",
         children: (0, ⟦2-char-id⟧.jsxs)("div", {
           className: ⟦2-char-id⟧()("SkyblockGlowtideChip", {
```

</details>

<details>
<summary>Hunk 344 · Change · +1 / -1</summary>

```diff
@@ -9527,7 +9527,7 @@
           }), ⟦2-char-id⟧.inRange ? (0, ⟦2-char-id⟧.jsx)("span", {
             className: "SkyblockGlowtideChipCall SmallTextBold",
             children: ⟦2-char-id⟧("skyblockGame:glowtideChipInRange")
-          }, `call:${UJ.inRangeToken}`) : (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
+          }, `call:${yB.inRangeToken}`) : (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
             children: [(0, ⟦2-char-id⟧.jsx)("div", {
               ref: ⟦2-char-id⟧.mountArrow,
               className: "SkyblockGlowtideChipArrow"
```

</details>

<details>
<summary>Hunk 345 · Change · +2 / -2</summary>

```diff
@@ -9548,8 +9548,8 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot());
-      return null === ⟦2-char-id⟧ ? null : (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.f, {
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot());
+      return null === ⟦2-char-id⟧ ? null : (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
         placement: "statBars",
         children: (0, ⟦2-char-id⟧.jsxs)("div", {
           className: ⟦2-char-id⟧()("SkyblockGlowMeter", {
```

</details>

<details>
<summary>Hunk 346 · Change · +5 / -5</summary>

```diff
@@ -9557,27 +9557,27 @@
           }),
           "aria-label": ⟦2-char-id⟧("skyblockGame:glowMeterLabel", {
             fill: String(⟦2-char-id⟧.fill),
-            qh: String(⟦2-char-id⟧.qh)
+            Kk: String(⟦2-char-id⟧.Kk)
           }),
           children: [⟦2-char-id⟧.burst && (0, ⟦2-char-id⟧.jsx)("div", {
             className: "SkyblockGlowMeterBurst"
-          }, `burst:${FJ.burstToken}`), (0, ⟦2-char-id⟧.jsxs)("div", {
+          }, `burst:${VB.burstToken}`), (0, ⟦2-char-id⟧.jsxs)("div", {
             className: "SkyblockGlowMeterVial",
             children: [(0, ⟦2-char-id⟧.jsx)("div", {
               className: "SkyblockGlowMeterLiquid",
               style: {
-                transform: `scaleX(${FJ.ratio})`
+                transform: `scaleX(${VB.ratio})`
               }
             }), ⟦2-char-id⟧.gained && (0, ⟦2-char-id⟧.jsx)("div", {
               className: "SkyblockGlowMeterGlint"
-            }, `gain:${FJ.gainToken}`), ⟦2-char-id⟧.full && Array.from({
+            }, `gain:${VB.gainToken}`), ⟦2-char-id⟧.full && Array.from({
               length: 5
             }, ((⟦2-char-id⟧, ⟦2-char-id⟧) => (0, ⟦2-char-id⟧.jsx)("span", {
               className: "SkyblockGlowMeterSparkle"
             }, ⟦2-char-id⟧)))]
           }), ⟦2-char-id⟧.full && ⟦2-char-id⟧.rares.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsx)("div", {
             className: "SkyblockGlowMeterRare",
-            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
               itemName: ⟦2-char-id⟧,
               amount: 0
             })
```

</details>

<details>
<summary>Hunk 347 · Change · +1 / -1</summary>

```diff
@@ -9586,7 +9586,7 @@
             children: (0, ⟦2-char-id⟧.jsx)("span", {
               children: ⟦2-char-id⟧("skyblockGame:glowMeterReady")
             })
-          }, `ready:${FJ.fullToken}`)]
+          }, `ready:${VB.fullToken}`)]
         })
       })
     }
```

</details>

<details>
<summary>Hunk 348 · Change · +3 / -3</summary>

```diff
@@ -9597,15 +9597,15 @@
       } = ⟦2-char-id⟧;
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot());
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot());
       if (null === ⟦2-char-id⟧) return null;
       const ⟦2-char-id⟧ = "waiting" === ⟦2-char-id⟧.phase,
         ⟦2-char-id⟧ = {
-          animationDuration: `${FJ.waitMs}ms`,
+          animationDuration: `${VB.waitMs}ms`,
           animationDelay: -⟦2-char-id⟧.elapsedMs + "ms"
         },
         ⟦2-char-id⟧ = ⟦2-char-id⟧ ? void 0 : {
-          animationDuration: `${FJ.waitMs}ms`
+          animationDuration: `${VB.waitMs}ms`
         };
       return (0, ⟦2-char-id⟧.jsxs)("div", {
         className: ⟦2-char-id⟧ ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
```

</details>

<details>
<summary>Hunk 349 · Change · +3 / -3</summary>

```diff
@@ -9652,14 +9652,14 @@
         className: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
       return (0, ⟦2-char-id⟧.jsx)("div", {
-        className: ⟦2-char-id⟧()("SkyblockTideChartGrid", FJ, null !== ⟦2-char-id⟧.pictureName && "Complete"),
+        className: ⟦2-char-id⟧()("SkyblockTideChartGrid", VB, null !== ⟦2-char-id⟧.pictureName && "Complete"),
         "aria-hidden": "true",
         children: ⟦2-char-id⟧.cells.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
           const ⟦2-char-id⟧ = 0 !== (⟦2-char-id⟧.pulseCells & 1 << ⟦2-char-id⟧),
             ⟦2-char-id⟧ = ⟦2-char-id⟧.castCell === ⟦2-char-id⟧;
           return (0, ⟦2-char-id⟧.jsx)("span", {
-            className: ⟦2-char-id⟧()("SkyblockTideChartCell", `Cell-${JJ}`, ⟦2-char-id⟧ && "Pulse", ⟦2-char-id⟧ && "Cast", ⟦2-char-id⟧ && ⟦2-char-id⟧.hereCell === ⟦2-char-id⟧ && "Here")
-          }, `${FJ}:${UJ?`⟦2-char-id⟧{⟦2-char-id⟧.pulseToken}`:""}:${eJ?`⟦2-char-id⟧{⟦2-char-id⟧.castToken}`:""}`)
+            className: ⟦2-char-id⟧()("SkyblockTideChartCell", `Cell-${BB}`, ⟦2-char-id⟧ && "Pulse", ⟦2-char-id⟧ && "Cast", ⟦2-char-id⟧ && ⟦2-char-id⟧.hereCell === ⟦2-char-id⟧ && "Here")
+          }, `${VB}:${yB?`⟦2-char-id⟧{⟦2-char-id⟧.pulseToken}`:""}:${pB?`⟦2-char-id⟧{⟦2-char-id⟧.castToken}`:""}`)
         }))
       })
     }
```

</details>

<details>
<summary>Hunk 350 · Change · +2 / -2</summary>

```diff
@@ -9668,10 +9668,10 @@
       let {
         controller: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
         {
           t: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.F)(),
+        } = (0, ⟦2-char-id⟧.z)(),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.chip;
       if (!⟦2-char-id⟧.enabled || null === ⟦2-char-id⟧) return null;
       const ⟦2-char-id⟧ = ⟦2-char-id⟧("skyblockGame:tideChartsChipLabel", {
```

</details>

<details>
<summary>Hunk 351 · Change · +1 / -1</summary>

```diff
@@ -9679,7 +9679,7 @@
         lit: String(⟦2-char-id⟧.lit),
         ink: String(⟦2-char-id⟧.ink)
       });
-      return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.f, {
+      return (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
         placement: "statBars",
         children: (0, ⟦2-char-id⟧.jsxs)("button", {
           type: "button",
```

</details>

<details>
<summary>Hunk 352 · Change · +3 / -3</summary>

```diff
@@ -9707,13 +9707,13 @@
       let {
         controller: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.getSnapshot()),
         {
           t: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.F)(),
+        } = (0, ⟦2-char-id⟧.z)(),
         ⟦2-char-id⟧ = ⟦2-char-id⟧(),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.card;
-      return ⟦2-char-id⟧.enabled && null !== ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+      return ⟦2-char-id⟧.enabled && null !== ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
         show: ⟦2-char-id⟧.open,
         close: ⟦2-char-id⟧.dismiss,
         togglePointerLock: !1,
```

</details>

<details>
<summary>Hunk 353 · Change · +1 / -1</summary>

```diff
@@ -9736,7 +9736,7 @@
                 className: "SkyblockTideChartsIntro",
                 children: ⟦2-char-id⟧("skyblockGame:tideChartsIntro")
               })]
-            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.j, {
+            }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.i, {
               padIgnore: !0,
               ariaLabel: ⟦2-char-id⟧("skyblockGame:tideChartsClose"),
               onClick: ⟦2-char-id⟧.dismiss
```

</details>

<details>
<summary>Hunk 354 · Change · +1 / -1</summary>

```diff
@@ -9750,7 +9750,7 @@
               className: ⟦2-char-id⟧()("SkyblockTideChartsTab", ⟦2-char-id⟧.selected && "Selected"),
               "aria-pressed": ⟦2-char-id⟧.selected,
               onClick: () => {
-                ⟦2-char-id⟧.PD(⟦2-char-id⟧.island)
+                ⟦2-char-id⟧.dO(⟦2-char-id⟧.island)
               },
               children: ⟦2-char-id⟧.name
             }, ⟦2-char-id⟧.island)))
```

</details>

<details>
<summary>Hunk 355 · Change · +3 / -3</summary>

```diff
@@ -9786,15 +9786,15 @@
                 children: [(0, ⟦2-char-id⟧.jsxs)("li", {
                   children: [(0, ⟦2-char-id⟧.jsx)("span", {
                     className: "SkyblockTideChartCell Cell-lit"
-                  }), FJ("skyblockGame:tideChartsLegendLit")]
+                  }), VB("skyblockGame:tideChartsLegendLit")]
                 }), (0, ⟦2-char-id⟧.jsxs)("li", {
                   children: [(0, ⟦2-char-id⟧.jsx)("span", {
                     className: "SkyblockTideChartCell Cell-clear"
-                  }), FJ("skyblockGame:tideChartsLegendClear")]
+                  }), VB("skyblockGame:tideChartsLegendClear")]
                 }), null !== ⟦2-char-id⟧.hereCell && (0, ⟦2-char-id⟧.jsxs)("li", {
                   children: [(0, ⟦2-char-id⟧.jsx)("span", {
                     className: "SkyblockTideChartCell Cell-water Here"
-                  }), FJ("skyblockGame:tideChartsLegendHere")]
+                  }), VB("skyblockGame:tideChartsLegendHere")]
                 })]
               }), (0, ⟦2-char-id⟧.jsxs)("p", {
                 className: "SkyblockTideChartsFooter",
```

</details>

<details>
<summary>Hunk 356 · Change · +4 / -4</summary>

```diff
@@ -9817,14 +9817,14 @@
       } = ⟦2-char-id⟧;
       const {
         selectedLanguage: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), ⟦2-char-id⟧ = ⟦2-char-id⟧.code;
+      } = (0, ⟦2-char-id⟧.z)(), ⟦2-char-id⟧ = ⟦2-char-id⟧.code;
       (0, ⟦2-char-id⟧.useEffect)((() => {
-        ⟦2-char-id⟧.setTranslator(((⟦2-char-id⟧, ⟦2-char-id⟧) => (0, ⟦2-char-id⟧.z)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)), ⟦2-char-id⟧, ((⟦2-char-id⟧, ⟦2-char-id⟧) => (0, ⟦2-char-id⟧.t)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)))
+        ⟦2-char-id⟧.setTranslator(((⟦2-char-id⟧, ⟦2-char-id⟧) => (0, ⟦2-char-id⟧.v)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)), ⟦2-char-id⟧, ((⟦2-char-id⟧, ⟦2-char-id⟧) => (0, ⟦2-char-id⟧.r)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)))
       }), [⟦2-char-id⟧, ⟦2-char-id⟧]);
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.map.getSnapshot()),
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.map.getSnapshot()),
         {
           openInGameMenuName: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.j)(["openInGameMenuName"]);
+        } = (0, ⟦2-char-id⟧.m)(["openInGameMenuName"]);
       return (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
         children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧, {
           controller: ⟦2-char-id⟧.quests,
```

</details>

<details>
<summary>Hunk 357 · Change · +1 / -1</summary>

```diff
@@ -9917,7 +9917,7 @@
         })]
       })
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(35789);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(35732);
     const ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧;
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 358 · Change · +1 / -1</summary>

```diff
@@ -9967,7 +9967,7 @@
             volume: .3,
             rate: 1.3
           }, {
-            sound: (0, ⟦2-char-id⟧.e)("firecracker"),
+            sound: (0, ⟦2-char-id⟧.c)("firecracker"),
             beat: 420,
             lead: 160,
             volume: .25,
```

</details>

<details>
<summary>Hunk 359 · Change · +1 / -1</summary>

```diff
@@ -9980,7 +9980,7 @@
             volume: .6,
             rate: 1.2
           }, {
-            sound: (0, ⟦2-char-id⟧.e)("bigDrumSwish"),
+            sound: (0, ⟦2-char-id⟧.c)("bigDrumSwish"),
             beat: ⟦2-char-id⟧ + 80,
             lead: 480,
             volume: .35,
```

</details>

<details>
<summary>Hunk 360 · Change · +1 / -1</summary>

```diff
@@ -10043,7 +10043,7 @@
       }
       getLocalHook() {
         var ⟦2-char-id⟧, ⟦2-char-id⟧;
-        return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.localHook) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.hookId) && void 0 !== ⟦2-char-id⟧ ? JJ : null
+        return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = this.localHook) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.hookId) && void 0 !== ⟦2-char-id⟧ ? BB : null
       }
       afterRender() {
         if (0 === this.pending.size) return;
```

</details>

<details>
<summary>Hunk 361 · Change · +1 / -1</summary>

```diff
@@ -10070,7 +10070,7 @@
         return this.deps.onLocalHookSettled(), !0
       }
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(3726);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(3716);
     const ⟦2-char-id⟧ = {
         0: [15],
         1: [40, 60, 40],
```

</details>

<details>
<summary>Hunk 362 · Change · +2 / -2</summary>

```diff
@@ -10129,9 +10129,9 @@
           } = ⟦2-char-id⟧[⟦2-char-id⟧], [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
           return {
             texture: "glint",
-            pos1: [⟦2-char-id⟧ - .3, FJ, ⟦2-char-id⟧ - .3],
+            pos1: [⟦2-char-id⟧ - .3, VB, ⟦2-char-id⟧ - .3],
             pos2: [⟦2-char-id⟧ + .3, ⟦2-char-id⟧ + .2, ⟦2-char-id⟧ + .3],
-            dir1: [-.6, XJ, -.6],
+            dir1: [-.6, lB, -.6],
             dir2: [.6, 1.4 * ⟦2-char-id⟧, .6],
             minLifeTime: .5,
             maxLifeTime: .9,
```

</details>

<details>
<summary>Hunk 363 · Change · +7 / -7</summary>

```diff
@@ -10152,22 +10152,22 @@
             }],
             colorGradients: [{
               timeFraction: 0,
-              minColor: [⟦2-char-id⟧, jJ, YJ, 1],
+              minColor: [⟦2-char-id⟧, gB, oB, 1],
               maxColor: [255, 255, 255, 1]
             }, {
               timeFraction: 1,
-              minColor: [⟦2-char-id⟧, jJ, YJ, 0],
-              maxColor: [⟦2-char-id⟧, jJ, YJ, 0]
+              minColor: [⟦2-char-id⟧, gB, oB, 0],
+              maxColor: [⟦2-char-id⟧, gB, oB, 0]
             }],
-            blendMode: ⟦2-char-id⟧.g.Add,
+            blendMode: ⟦2-char-id⟧.e.Add,
             hideDist: 48
           }
         }(⟦2-char-id⟧.tier, ⟦2-char-id⟧)))
       }
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1151),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1712),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(29);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1133),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1685),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(33);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       return [{
```

</details>

<details>
<summary>Hunk 364 · Change · +1 / -1</summary>

```diff
@@ -10183,7 +10183,7 @@
       ⟦2-char-id⟧ = {
         texture: "glint",
         mipmaps: !1,
-        qh: 24,
+        Kk: 24,
         minLifeTime: .18,
         maxLifeTime: .35,
         minSize: .07,
```

</details>

<details>
<summary>Hunk 365 · Change · +4 / -4</summary>

```diff
@@ -10193,21 +10193,21 @@
         emitRate: 12,
         dir1: ⟦2-char-id⟧,
         dir2: ⟦2-char-id⟧,
-        blendMode: ⟦2-char-id⟧.g.OneOne
+        blendMode: ⟦2-char-id⟧.e.OneOne
       },
       ⟦2-char-id⟧ = {
-        ...OA,
+        ...hJ,
         colorGradients: ⟦2-char-id⟧([1, .88, .38], [1, .65, .15])
       },
       ⟦2-char-id⟧ = {
-        ...OA,
+        ...hJ,
         colorGradients: ⟦2-char-id⟧([.55, .95, 1], [.9, 1, 1])
       },
       ⟦2-char-id⟧ = [.5, .5, .5],
       ⟦2-char-id⟧ = {
         texture: "glint",
         mipmaps: !1,
-        qh: 24,
+        Kk: 24,
         minLifeTime: .2,
         maxLifeTime: .4,
         minSize: .12,
```

</details>

<details>
<summary>Hunk 366 · Change · +1 / -1</summary>

```diff
@@ -10216,7 +10216,7 @@
         maxEmitPower: 1.5,
         emitRate: 0,
         colorGradients: ⟦2-char-id⟧([1, .12, .12], [1, .35, .2]),
-        blendMode: ⟦2-char-id⟧.g.OneOne
+        blendMode: ⟦2-char-id⟧.e.OneOne
       };
     class ⟦2-char-id⟧ {
       constructor() {
```

</details>

<details>
<summary>Hunk 367 · Change · +1 / -1</summary>

```diff
@@ -10225,7 +10225,7 @@
       ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
         if ("overflowFlash" === ⟦2-char-id⟧.kind) {
           const [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧.position, ⟦2-char-id⟧ = ⟦2-char-id⟧.createParticles(⟦2-char-id⟧, {
-            pos: [⟦2-char-id⟧, FJ, ⟦2-char-id⟧],
+            pos: [⟦2-char-id⟧, VB, ⟦2-char-id⟧],
             half: ⟦2-char-id⟧
           });
           return ⟦2-char-id⟧.emit(18), void ⟦2-char-id⟧.stop()
```

</details>

<details>
<summary>Hunk 368 · Change · +1 / -1</summary>

```diff
@@ -10258,7 +10258,7 @@
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.lastPosition,
             ⟦2-char-id⟧ = ⟦2-char-id⟧.seen && (⟦2-char-id⟧[0] - ⟦2-char-id⟧[0]) ** 2 + (⟦2-char-id⟧[1] - ⟦2-char-id⟧[1]) ** 2 + (⟦2-char-id⟧[2] - ⟦2-char-id⟧[2]) ** 2 > 4e-4,
             ⟦2-char-id⟧ = (⟦2-char-id⟧[0] - ⟦2-char-id⟧[0]) ** 2 + (⟦2-char-id⟧[1] - ⟦2-char-id⟧[1]) ** 2 + (⟦2-char-id⟧[2] - ⟦2-char-id⟧[2]) ** 2 < 2025;
-          ⟦2-char-id⟧.seen = !0, ⟦2-char-id⟧[0] = ⟦2-char-id⟧[0], ⟦2-char-id⟧[1] = ⟦2-char-id⟧[1], ⟦2-char-id⟧[2] = ⟦2-char-id⟧[2], ⟦2-char-id⟧ && (⟦2-char-id⟧.lastMovingAt = ⟦2-char-id⟧), null !== ⟦2-char-id⟧.particles && (!⟦2-char-id⟧ || ⟦2-char-id⟧ - ⟦2-char-id⟧.lastMovingAt > 500) && (⟦2-char-id⟧.particles.stop(), ⟦2-char-id⟧.particles = null, ⟦2-char-id⟧--), ⟦2-char-id⟧ && ⟦2-char-id⟧ && null === ⟦2-char-id⟧.particles && ⟦2-char-id⟧ < 32 && (⟦2-char-id⟧.particles = ⟦2-char-id⟧.createParticles(⟦2-char-id⟧.cosmetic ? CA : ⟦2-char-id⟧, {
+          ⟦2-char-id⟧.seen = !0, ⟦2-char-id⟧[0] = ⟦2-char-id⟧[0], ⟦2-char-id⟧[1] = ⟦2-char-id⟧[1], ⟦2-char-id⟧[2] = ⟦2-char-id⟧[2], ⟦2-char-id⟧ && (⟦2-char-id⟧.lastMovingAt = ⟦2-char-id⟧), null !== ⟦2-char-id⟧.particles && (!⟦2-char-id⟧ || ⟦2-char-id⟧ - ⟦2-char-id⟧.lastMovingAt > 500) && (⟦2-char-id⟧.particles.stop(), ⟦2-char-id⟧.particles = null, ⟦2-char-id⟧--), ⟦2-char-id⟧ && ⟦2-char-id⟧ && null === ⟦2-char-id⟧.particles && ⟦2-char-id⟧ < 32 && (⟦2-char-id⟧.particles = ⟦2-char-id⟧.createParticles(⟦2-char-id⟧.cosmetic ? GJ : ⟦2-char-id⟧, {
             pos: ⟦2-char-id⟧
           }), ⟦2-char-id⟧++), null !== ⟦2-char-id⟧.particles && (⟦2-char-id⟧.particles.moveTo(⟦2-char-id⟧), ⟦2-char-id⟧.particles.setEmitRate(⟦2-char-id⟧ ? 12 : 0)), !⟦2-char-id⟧ && null === ⟦2-char-id⟧.particles && ⟦2-char-id⟧ - Math.max(⟦2-char-id⟧.lastMovingAt, ⟦2-char-id⟧.markedAt) > 2⟦2-char-id⟧ && this.drops.delete(⟦2-char-id⟧)
         }
```

</details>

<details>
<summary>Hunk 369 · Change · +2 / -2</summary>

```diff
@@ -10271,8 +10271,8 @@
         this.drops.clear()
       }
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(157);
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.c.Dv * ⟦2-char-id⟧.c.playerEyeToHeightRatio;
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(184);
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.c.kE * ⟦2-char-id⟧.c.playerEyeToHeightRatio;
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧) {
         this.host = ⟦2-char-id⟧, this.lava = [], this.loop = null, this.nextUpdateAt = 0
```

</details>

<details>
<summary>Hunk 370 · Change · +8 / -8</summary>

```diff
@@ -10314,31 +10314,31 @@
         }
       }
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1685),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(37626);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1662),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(37605);
     const ⟦2-char-id⟧ = {
       "Grey Portal": "Gray"
     };
-    for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.pc) ⟦2-char-id⟧[`${eq} Portal`] = ⟦2-char-id⟧;
+    for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.Gc) ⟦2-char-id⟧[`${JY} Portal`] = ⟦2-char-id⟧;
     const ⟦2-char-id⟧ = Object.keys(⟦2-char-id⟧),
-      ⟦2-char-id⟧ = Object.fromEntries(⟦2-char-id⟧.map((⟦2-char-id⟧ => [⟦2-char-id⟧, (0, ⟦2-char-id⟧.V)(⟦2-char-id⟧.D[`${(0,UJ.be)(lA[JJ])}Team`])])));
-    Object.fromEntries(⟦2-char-id⟧.map((⟦2-char-id⟧ => [⟦2-char-id⟧, ⟦2-char-id⟧.D[`${(0,UJ.be)(lA[JJ])}UiText`]])));
+      ⟦2-char-id⟧ = Object.fromEntries(⟦2-char-id⟧.map((⟦2-char-id⟧ => [⟦2-char-id⟧, (0, ⟦2-char-id⟧.Z)(⟦2-char-id⟧.L[`${(0,yB.qe)(TY[BB])}Team`])])));
+    Object.fromEntries(⟦2-char-id⟧.map((⟦2-char-id⟧ => [⟦2-char-id⟧, ⟦2-char-id⟧.L[`${(0,yB.qe)(TY[BB])}UiText`]])));
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧, ⟦2-char-id⟧) {
         this.presentation = ⟦2-char-id⟧, this.portal = ⟦2-char-id⟧, this.unlocked = void 0
       }
       ⟦2-char-id⟧(⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = !1 === this.unlocked && ⟦2-char-id⟧;
-        this.unlocked = ⟦2-char-id⟧, this.Hh();
+        this.unlocked = ⟦2-char-id⟧, this.dL();
         const {
           min: ⟦2-char-id⟧,
           max: ⟦2-char-id⟧,
           unlockedBlock: ⟦2-char-id⟧
         } = this.portal;
-        if (⟦2-char-id⟧ && this.presentation.hasChunk(...ZJ)) {
+        if (⟦2-char-id⟧ && this.presentation.hasChunk(...dB)) {
           const [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧[⟦2-char-id⟧];
           this.presentation.playParticles({
-            pos1: [...ZJ],
+            pos1: [...dB],
             pos2: ⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧ + 1)),
             dir1: [-1, 0, -1],
             dir2: [1, 1, 1],
```

</details>

<details>
<summary>Hunk 371 · Change · +1 / -1</summary>

```diff
@@ -10354,7 +10354,7 @@
             gravity: [0, .5, 0],
             colorGradients: [{
               timeFraction: 0,
-              minColor: [⟦2-char-id⟧, cJ, eJ, 1],
+              minColor: [⟦2-char-id⟧, TB, pB, 1],
               maxColor: [Math.min(255, ⟦2-char-id⟧ + 55), Math.min(255, ⟦2-char-id⟧ + 55), Math.min(255, ⟦2-char-id⟧ + 90), 1]
             }],
             velocityGradients: [{
```

</details>

<details>
<summary>Hunk 372 · Change · +2 / -2</summary>

```diff
@@ -10368,14 +10368,14 @@
       }
       ⟦2-char-id⟧() {
         var ⟦2-char-id⟧;
-        const ⟦2-char-id⟧ = this.unlocked ? this.portal.unlockedBlock : null !== (⟦2-char-id⟧ = this.portal.lockedBlock) && void 0 !== ⟦2-char-id⟧ ? JJ : "Light Gray Portal",
+        const ⟦2-char-id⟧ = this.unlocked ? this.portal.unlockedBlock : null !== (⟦2-char-id⟧ = this.portal.lockedBlock) && void 0 !== ⟦2-char-id⟧ ? BB : "Light Gray Portal",
           {
             min: ⟦2-char-id⟧,
             max: ⟦2-char-id⟧
           } = this.portal;
         for (let ⟦2-char-id⟧ = ⟦2-char-id⟧[0]; ⟦2-char-id⟧ <= ⟦2-char-id⟧[0]; ⟦2-char-id⟧++)
           for (let ⟦2-char-id⟧ = ⟦2-char-id⟧[1]; ⟦2-char-id⟧ <= ⟦2-char-id⟧[1]; ⟦2-char-id⟧++)
-            for (let ⟦2-char-id⟧ = ⟦2-char-id⟧[2]; ⟦2-char-id⟧ <= ⟦2-char-id⟧[2]; ⟦2-char-id⟧++) this.presentation.hasChunk(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) && this.presentation.Qm(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) !== ⟦2-char-id⟧ && this.presentation.fK(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
+            for (let ⟦2-char-id⟧ = ⟦2-char-id⟧[2]; ⟦2-char-id⟧ <= ⟦2-char-id⟧[2]; ⟦2-char-id⟧++) this.presentation.hasChunk(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) && this.presentation.XE(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) !== ⟦2-char-id⟧ && this.presentation.Cw(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
       }
     }
     const ⟦2-char-id⟧ = {
```

</details>

<details>
<summary>Hunk 373 · Change · +31 / -31</summary>

```diff
@@ -10393,96 +10393,96 @@
           localPlayerId: ⟦2-char-id⟧
         } = ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = new ⟦2-char-id⟧({
-          translate: (⟦2-char-id⟧, ⟦2-char-id⟧) => (0, ⟦2-char-id⟧.z)(⟦2-char-id⟧.e.get().getCurrentLanguageCode(), JJ, ⟦2-char-id⟧),
-          translateWithIcons: (⟦2-char-id⟧, ⟦2-char-id⟧) => (0, ⟦2-char-id⟧.t)(⟦2-char-id⟧.e.get().getCurrentLanguageCode(), JJ, ⟦2-char-id⟧),
+          translate: (⟦2-char-id⟧, ⟦2-char-id⟧) => (0, ⟦2-char-id⟧.v)(⟦2-char-id⟧.f.get().getCurrentLanguageCode(), BB, ⟦2-char-id⟧),
+          translateWithIcons: (⟦2-char-id⟧, ⟦2-char-id⟧) => (0, ⟦2-char-id⟧.r)(⟦2-char-id⟧.f.get().getCurrentLanguageCode(), BB, ⟦2-char-id⟧),
           setMenuOpen: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.n)() : (0, ⟦2-char-id⟧.f)()
+            ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.o)() : (0, ⟦2-char-id⟧.g)()
           },
-          dismissMenu: ⟦2-char-id⟧.j,
+          dismissMenu: ⟦2-char-id⟧.h,
           publishSkills: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
+            ⟦2-char-id⟧.h.yH(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
           },
           publishQuests: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
+            ⟦2-char-id⟧.h.yH(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
           },
           publishQuestNotification: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
+            ⟦2-char-id⟧.h.yH(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
           },
           publishDungeons: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
+            ⟦2-char-id⟧.h.yH(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
           },
           publishCollections: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
+            ⟦2-char-id⟧.h.yH(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
           },
           publishMap: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
+            ⟦2-char-id⟧.h.yH(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
           },
           publishHud: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
+            ⟦2-char-id⟧.h.yH(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
           },
           publishPortalTransit: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
+            ⟦2-char-id⟧.h.yH(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
           },
           isLoadingScreenUp: () => ⟦2-char-id⟧.d.get("loadingOverlayVisible"),
           publishDailyReward: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
+            ⟦2-char-id⟧.h.yH(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
           },
           publishMailbox: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
+            ⟦2-char-id⟧.h.yH(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
           },
           publishQuestGraph: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
+            ⟦2-char-id⟧.h.yH(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
           },
           publishForge: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
+            ⟦2-char-id⟧.h.yH(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
           },
           publishSmuggler: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
+            ⟦2-char-id⟧.h.yH(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
           },
           publishKeepersChair: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
+            ⟦2-char-id⟧.h.yH(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
           },
           publishReachLog: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
+            ⟦2-char-id⟧.h.yH(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
           },
           publishLampLight: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
+            ⟦2-char-id⟧.h.yH(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
           },
           publishMagmaward: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
+            ⟦2-char-id⟧.h.yH(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
           },
           publishGlowtide: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
+            ⟦2-char-id⟧.h.yH(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
           },
           publishGlowMeter: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
+            ⟦2-char-id⟧.h.yH(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
           },
           publishHushWait: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
+            ⟦2-char-id⟧.h.yH(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
           },
           publishPassage: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
+            ⟦2-char-id⟧.h.yH(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
           },
           publishTideCharts: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
+            ⟦2-char-id⟧.h.yH(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
           },
           publishRegulars: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
+            ⟦2-char-id⟧.h.yH(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
           },
           publishHiddenWaters: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
+            ⟦2-char-id⟧.h.yH(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
           },
           publishDialogue: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
+            ⟦2-char-id⟧.h.yH(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
           },
           publishAutographs: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
+            ⟦2-char-id⟧.h.yH(⟦2-char-id⟧, ⟦2-char-id⟧, !0)
           },
           onDailyRewardStarted: ⟦2-char-id⟧ => {
             ⟦2-char-id⟧.playSound(⟦2-char-id⟧, ⟦2-char-id⟧.day === ⟦2-char-id⟧ ? "trumpetFlare" : "chestOpen", .8, 1)
           },
           onDailyRewardCoinLanded: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
-            ⟦2-char-id⟧.playSound(⟦2-char-id⟧, "exp_collect", .35, 1 + .6 * ⟦2-char-id⟧ / (⟦2-char-id⟧ - 1)), ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧, ⟦2-char-id⟧ === ⟦2-char-id⟧ - 1)
+            ⟦2-char-id⟧.playSound(⟦2-char-id⟧, "exp_collect", .35, 1 + .6 * ⟦2-char-id⟧ / (⟦2-char-id⟧ - 1)), ⟦2-char-id⟧.h.yH(⟦2-char-id⟧, ⟦2-char-id⟧ === ⟦2-char-id⟧ - 1)
           },
           onDailyRewardItemLanded: ⟦2-char-id⟧ => {
             ⟦2-char-id⟧.playSound(⟦2-char-id⟧, "pickUp", .6, 1 + .15 * ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 374 · Change · +6 / -6</summary>

```diff
@@ -10493,19 +10493,19 @@
           onDailyRewardFinished: () => {
             ⟦2-char-id⟧.sendCommand("skyblockDailyRewardDone")
           },
-          journeyStorage: ⟦2-char-id⟧.k,
+          journeyStorage: ⟦2-char-id⟧.m,
           requestTracking: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.sendCommand(`quests track ${JJ}`)
+            ⟦2-char-id⟧.sendCommand(`quests track ${BB}`)
           },
           requestDungeonEnter: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
-            ⟦2-char-id⟧.sendCommand(`${wJ.l}${JJ} ${cJ}`)
+            ⟦2-char-id⟧.sendCommand(`${KB.l}${BB} ${TB}`)
           },
           requestQuestJump: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.sendCommand(`${WJ} jump ${JJ}`)
+            ⟦2-char-id⟧.sendCommand(`${rB} jump ${BB}`)
           },
           requestQuestArrive: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
-            const ⟦2-char-id⟧ = `${WJ} arrive ${JJ}`;
-            ⟦2-char-id⟧.sendCommand(⟦2-char-id⟧ ? `${ZJ} complete` : ⟦2-char-id⟧)
+            const ⟦2-char-id⟧ = `${rB} arrive ${BB}`;
+            ⟦2-char-id⟧.sendCommand(⟦2-char-id⟧ ? `${dB} complete` : ⟦2-char-id⟧)
           },
           requestForge: ⟦2-char-id⟧ => {
             let {
```

</details>

<details>
<summary>Hunk 375 · Change · +8 / -8</summary>

```diff
@@ -10513,44 +10513,44 @@
               guard: ⟦2-char-id⟧,
               handle: ⟦2-char-id⟧
             } = ⟦2-char-id⟧;
-            ⟦2-char-id⟧.sendCommand(`forge ${cJ} ${ZJ} ${FJ}`)
+            ⟦2-char-id⟧.sendCommand(`forge ${TB} ${dB} ${VB}`)
           },
           requestDialogue: () => {
             ⟦2-char-id⟧.sendCommand("quests dialogue")
           },
           requestSmuggle: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
-            ⟦2-char-id⟧.sendCommand(`smuggle ${JJ} ${cJ}`)
+            ⟦2-char-id⟧.sendCommand(`smuggle ${BB} ${TB}`)
           },
           requestKeepersChairAim: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.sendCommand(`keeperschair-aim ${JJ}`)
+            ⟦2-char-id⟧.sendCommand(`keeperschair-aim ${BB}`)
           },
           requestReachLogOpen: () => {
             ⟦2-char-id⟧.sendCommand("reachlog-open")
           },
           requestLampLight: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.sendCommand(`${JJ}`)
+            ⟦2-char-id⟧.sendCommand(`${BB}`)
           },
           requestTravel: ⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.sendCommand(`map travel ${JJ.kind} ${JJ.id} ${JJ.requestId}`)
+            ⟦2-char-id⟧.sendCommand(`map travel ${BB.kind} ${BB.id} ${BB.requestId}`)
           }
         });
         let ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = new ⟦2-char-id⟧;
         let ⟦2-char-id⟧, ⟦2-char-id⟧ = null;
-        const ⟦2-char-id⟧ = ⟦2-char-id⟧[null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? ZJ : ""],
+        const ⟦2-char-id⟧ = ⟦2-char-id⟧[null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? dB : ""],
           ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
             null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.raises(⟦2-char-id⟧) && ⟦2-char-id⟧.setNametagOffset(⟦2-char-id⟧, ⟦2-char-id⟧.rise)
           },
           ⟦2-char-id⟧ = new ⟦2-char-id⟧({
             getLocalHookPosition: () => {
               const ⟦2-char-id⟧ = ⟦2-char-id⟧.getLocalHook();
-              return null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.checkValid(⟦2-char-id⟧) ? ⟦2-char-id⟧.Om(⟦2-char-id⟧) : null
+              return null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.checkValid(⟦2-char-id⟧) ? ⟦2-char-id⟧.Dv(⟦2-char-id⟧) : null
             },
             playParticles: ⟦2-char-id⟧ => {
               ⟦2-char-id⟧.playParticleEffect(⟦2-char-id⟧)
             },
             vibrate: ⟦2-char-id⟧ => {
-              ⟦2-char-id⟧.g.play("fishBite", ⟦2-char-id⟧)
+              ⟦2-char-id⟧.f.play("fishBite", ⟦2-char-id⟧)
             },
             now: () => performance.now()
           }),
```

</details>

<details>
<summary>Hunk 376 · Change · +1 / -1</summary>

```diff
@@ -10558,7 +10558,7 @@
             getLineOwner: ⟦2-char-id⟧ => ⟦2-char-id⟧.checkValid(⟦2-char-id⟧) ? ⟦2-char-id⟧.getLineOwner(⟦2-char-id⟧) : null,
             isLocalPlayer: ⟦2-char-id⟧ => ⟦2-char-id⟧.isLocalPlayer(⟦2-char-id⟧),
             getHookPosition: ⟦2-char-id⟧ => {
-              const [⟦2-char-id⟧, , ⟦2-char-id⟧] = ⟦2-char-id⟧.Om(⟦2-char-id⟧);
+              const [⟦2-char-id⟧, , ⟦2-char-id⟧] = ⟦2-char-id⟧.Dv(⟦2-char-id⟧);
               return [⟦2-char-id⟧, ⟦2-char-id⟧]
             },
             isHushWaiting: () => {
```

</details>

<details>
<summary>Hunk 377 · Change · +3 / -3</summary>

```diff
@@ -10578,9 +10578,9 @@
           }),
           ⟦2-char-id⟧ = new ⟦2-char-id⟧({
             now: () => performance.now(),
-            playerPosition: () => ⟦2-char-id⟧.checkValid(⟦2-char-id⟧) ? ⟦2-char-id⟧.Om(⟦2-char-id⟧) : null,
-            play: (⟦2-char-id⟧, cJ, ZJ, FJ, UJ, ⟦2-char-id⟧) => ⟦2-char-id⟧.playSound(⟦2-char-id⟧, JJ, cJ, 1, {
-              lF: ⟦2-char-id⟧,
+            playerPosition: () => ⟦2-char-id⟧.checkValid(⟦2-char-id⟧) ? ⟦2-char-id⟧.Dv(⟦2-char-id⟧) : null,
+            play: (⟦2-char-id⟧, TB, dB, VB, yB, ⟦2-char-id⟧) => ⟦2-char-id⟧.playSound(⟦2-char-id⟧, BB, TB, 1, {
+              xp: ⟦2-char-id⟧,
               maxHearDist: ⟦2-char-id⟧,
               refDistance: ⟦2-char-id⟧
             }, ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 378 · Change · +7 / -7</summary>

```diff
@@ -10589,20 +10589,20 @@
         let ⟦2-char-id⟧;
         return {
           onCreate: ⟦2-char-id⟧ => {
-            if (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = new ⟦2-char-id⟧.SkyblockEntityFacing(⟦2-char-id⟧, ⟦2-char-id⟧ ? LJ : null), ⟦2-char-id⟧.portalTransit.resumeArrival(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? ZJ : null), (null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧) === ⟦2-char-id⟧) {
+            if (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = new ⟦2-char-id⟧.SkyblockEntityFacing(⟦2-char-id⟧, ⟦2-char-id⟧ ? xB : null), ⟦2-char-id⟧.portalTransit.resumeArrival(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? dB : null), (null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧) === ⟦2-char-id⟧) {
               let ⟦2-char-id⟧ = -1 / 0;
-              ⟦2-char-id⟧ = ⟦2-char-id⟧.i.subscribe("toggleMenu", (⟦2-char-id⟧ => {
+              ⟦2-char-id⟧ = ⟦2-char-id⟧.h.subscribe("toggleMenu", (⟦2-char-id⟧ => {
                 const ⟦2-char-id⟧ = performance.now();
                 "inventory|Workbench" !== ⟦2-char-id⟧ || "cross_to_hub" !== ⟦2-char-id⟧.quests.getTrackedQuestId() || ⟦2-char-id⟧ - ⟦2-char-id⟧ < 1⟦2-char-id⟧ || (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧.sendCommand("skyblockWorkbenchOpened"))
               }))
             }
-            for (const [⟦2-char-id⟧, ⟦2-char-id⟧] of Object.entries(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? ZJ : ""]) && void 0 !== ⟦2-char-id⟧ ? cJ : {})) {
+            for (const [⟦2-char-id⟧, ⟦2-char-id⟧] of Object.entries(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? dB : ""]) && void 0 !== ⟦2-char-id⟧ ? TB : {})) {
               var ⟦2-char-id⟧;
               ⟦2-char-id⟧.set(⟦2-char-id⟧, new ⟦2-char-id⟧({
-                hasChunk: (⟦2-char-id⟧, ZJ, ⟦2-char-id⟧) => ⟦2-char-id⟧.isBlockInLoadedChunk(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧),
-                Qm: (⟦2-char-id⟧, ZJ, ⟦2-char-id⟧) => ⟦2-char-id⟧.blockIdToBlockName(⟦2-char-id⟧.getBlockId(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧)),
-                fK: (⟦2-char-id⟧, ZJ, FJ, ⟦2-char-id⟧) => {
-                  ⟦2-char-id⟧.fK(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
+                hasChunk: (⟦2-char-id⟧, dB, ⟦2-char-id⟧) => ⟦2-char-id⟧.isBlockInLoadedChunk(⟦2-char-id⟧, dB, ⟦2-char-id⟧),
+                XE: (⟦2-char-id⟧, dB, ⟦2-char-id⟧) => ⟦2-char-id⟧.blockIdToBlockName(⟦2-char-id⟧.getBlockId(⟦2-char-id⟧, dB, ⟦2-char-id⟧)),
+                Cw: (⟦2-char-id⟧, dB, VB, ⟦2-char-id⟧) => {
+                  ⟦2-char-id⟧.Cw(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
                 },
                 playParticles: ⟦2-char-id⟧ => {
                   ⟦2-char-id⟧.playParticleEffect(⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 379 · Change · +11 / -11</summary>

```diff
@@ -10613,43 +10613,43 @@
               return Object.hasOwn(⟦2-char-id⟧, ⟦2-char-id⟧) || ⟦2-char-id⟧.startsWith("npc_")
             }(⟦2-char-id⟧) ? ⟦2-char-id⟧(⟦2-char-id⟧) : null)), ⟦2-char-id⟧.resolveItemName = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
               const ⟦2-char-id⟧ = ⟦2-char-id⟧.getItemStat(⟦2-char-id⟧, ⟦2-char-id⟧, "displayName");
-              return ⟦2-char-id⟧ && "object" === typeof ⟦2-char-id⟧ && "translationKey" in ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧.translationKey, (0, ⟦2-char-id⟧.s)(⟦2-char-id⟧.params, ⟦2-char-id⟧.d.shown)) : "string" === typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧) : ⟦2-char-id⟧
+              return ⟦2-char-id⟧ && "object" === typeof ⟦2-char-id⟧ && "translationKey" in ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧.translationKey, (0, ⟦2-char-id⟧.o)(⟦2-char-id⟧.params, ⟦2-char-id⟧.c.shown)) : "string" === typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧) : ⟦2-char-id⟧
             }, ⟦2-char-id⟧.quests.notifications.onShown = ⟦2-char-id⟧ => {
-              "quest" === ⟦2-char-id⟧ ? ⟦2-char-id⟧.playSound(⟦2-char-id⟧, "magicAccent1", 1, 1) : "skillLevel" === ⟦2-char-id⟧ ? ⟦2-char-id⟧.playSound(⟦2-char-id⟧, "magicAccent1", 1, .6) : "landmark" === ⟦2-char-id⟧ ? ⟦2-char-id⟧.playSound(⟦2-char-id⟧, "trumpetFlare", 1, .6) : "npcNote" === ⟦2-char-id⟧ ? ⟦2-char-id⟧.playSound(⟦2-char-id⟧, "magicAccent2", .8, 1.1) : "started" === ⟦2-char-id⟧ ? ⟦2-char-id⟧.playSound(⟦2-char-id⟧, (0, ⟦2-char-id⟧.e)("bigDrumSwish"), 1, 1) : ⟦2-char-id⟧.playSound(⟦2-char-id⟧, (0, ⟦2-char-id⟧.e)("rpgHandleSmallLeather"), 1, 1)
+              "quest" === ⟦2-char-id⟧ ? ⟦2-char-id⟧.playSound(⟦2-char-id⟧, "magicAccent1", 1, 1) : "skillLevel" === ⟦2-char-id⟧ ? ⟦2-char-id⟧.playSound(⟦2-char-id⟧, "magicAccent1", 1, .6) : "landmark" === ⟦2-char-id⟧ ? ⟦2-char-id⟧.playSound(⟦2-char-id⟧, "trumpetFlare", 1, .6) : "npcNote" === ⟦2-char-id⟧ ? ⟦2-char-id⟧.playSound(⟦2-char-id⟧, "magicAccent2", .8, 1.1) : "started" === ⟦2-char-id⟧ ? ⟦2-char-id⟧.playSound(⟦2-char-id⟧, (0, ⟦2-char-id⟧.c)("bigDrumSwish"), 1, 1) : ⟦2-char-id⟧.playSound(⟦2-char-id⟧, (0, ⟦2-char-id⟧.c)("rpgHandleSmallLeather"), 1, 1)
             }, ⟦2-char-id⟧.forge.onPartSelected = () => {
               ⟦2-char-id⟧.playSound(⟦2-char-id⟧, "rpgMetalClick", .6, .9 + .2 * Math.random())
             }, ⟦2-char-id⟧.forge.onForgeStarted = (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.smuggler.onBought = () => {
-              ⟦2-char-id⟧.playSound(⟦2-char-id⟧, (0, ⟦2-char-id⟧.e)("rpgHandleSmallLeather"), 1, 1), ⟦2-char-id⟧.playSound(⟦2-char-id⟧, "chestOpen", .6, 1)
+              ⟦2-char-id⟧.playSound(⟦2-char-id⟧, (0, ⟦2-char-id⟧.c)("rpgHandleSmallLeather"), 1, 1), ⟦2-char-id⟧.playSound(⟦2-char-id⟧, "chestOpen", .6, 1)
             }, ⟦2-char-id⟧.compass.register(new ⟦2-char-id⟧(⟦2-char-id⟧.map, !0)), ⟦2-char-id⟧.compass.register(new ⟦2-char-id⟧(⟦2-char-id⟧.map, !1)), ⟦2-char-id⟧.compass.register(new ⟦2-char-id⟧(⟦2-char-id⟧.map)), ⟦2-char-id⟧.compass.register(new ⟦2-char-id⟧((() => ⟦2-char-id⟧.quests.getSnapshot().compassTarget)));
-            for (const ⟦2-char-id⟧ of ["enemy", "npc"]) ⟦2-char-id⟧.compass.register(new ⟦2-char-id⟧(⟦2-char-id⟧.map, ⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.checkValid(⟦2-char-id⟧) ? ⟦2-char-id⟧.Om(⟦2-char-id⟧) : void 0), (⟦2-char-id⟧ => ⟦2-char-id⟧.isAlive(⟦2-char-id⟧))))
+            for (const ⟦2-char-id⟧ of ["enemy", "npc"]) ⟦2-char-id⟧.compass.register(new ⟦2-char-id⟧(⟦2-char-id⟧.map, ⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.checkValid(⟦2-char-id⟧) ? ⟦2-char-id⟧.Dv(⟦2-char-id⟧) : void 0), (⟦2-char-id⟧ => ⟦2-char-id⟧.isAlive(⟦2-char-id⟧))))
           },
           onAfterRender: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
-            const ⟦2-char-id⟧ = ⟦2-char-id⟧.checkValid(⟦2-char-id⟧) ? ⟦2-char-id⟧.Om(⟦2-char-id⟧) : null;
+            const ⟦2-char-id⟧ = ⟦2-char-id⟧.checkValid(⟦2-char-id⟧) ? ⟦2-char-id⟧.Dv(⟦2-char-id⟧) : null;
             ⟦2-char-id⟧.navigation.afterRender(⟦2-char-id⟧, performance.now(), ⟦2-char-id⟧), ⟦2-char-id⟧.glowtide.afterRender(⟦2-char-id⟧, ⟦2-char-id⟧.cameraHeading), ⟦2-char-id⟧.tideCharts.afterRender(⟦2-char-id⟧), ⟦2-char-id⟧.afterRender()
           },
           onClose: () => {
             var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-            ⟦2-char-id⟧ && ⟦2-char-id⟧.i.unsubscribe(⟦2-char-id⟧), null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(), ⟦2-char-id⟧.dispose(), ⟦2-char-id⟧.dispose(), null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.dispose(), ⟦2-char-id⟧.dispose(), ⟦2-char-id⟧.dispose(), null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(), null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(), null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(), null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(), null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(), null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(), null === (⟦2-char-id⟧ = undefined) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(), null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(), null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(), null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(), null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(), null === (⟦2-char-id⟧ = undefined) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(), null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧()
+            ⟦2-char-id⟧ && ⟦2-char-id⟧.h.unsubscribe(⟦2-char-id⟧), null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(), ⟦2-char-id⟧.dispose(), ⟦2-char-id⟧.dispose(), null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.dispose(), ⟦2-char-id⟧.dispose(), ⟦2-char-id⟧.dispose(), null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(), null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(), null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(), null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(), null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(), null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(), null === (⟦2-char-id⟧ = undefined) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(), null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(), null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(), null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(), null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(), null === (⟦2-char-id⟧ = undefined) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(), null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧()
           },
-          onPlayerChangeBlock: (⟦2-char-id⟧, cJ, FJ, eJ, qJ, ⟦2-char-id⟧) => {
+          onPlayerChangeBlock: (⟦2-char-id⟧, TB, VB, pB, YB, ⟦2-char-id⟧) => {
             if (⟦2-char-id⟧ === ⟦2-char-id⟧ && "Air" === ⟦2-char-id⟧) {
               const ⟦2-char-id⟧ = ⟦2-char-id⟧.getClientOption(⟦2-char-id⟧, "creative");
               ⟦2-char-id⟧.skills.predictBlock([⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧], ⟦2-char-id⟧, ⟦2-char-id⟧);
               const ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
                   if ("hub" === ⟦2-char-id⟧ || "farming_1" === ⟦2-char-id⟧ || "mining_1" === ⟦2-char-id⟧) return !⟦2-char-id⟧.has(⟦2-char-id⟧) || "hub" !== ⟦2-char-id⟧ && "mining_1" !== ⟦2-char-id⟧ ? Object.hasOwn(⟦2-char-id⟧, ⟦2-char-id⟧) ? ⟦2-char-id⟧[⟦2-char-id⟧] : void 0 : ⟦2-char-id⟧
                 }(⟦2-char-id⟧, ⟦2-char-id⟧),
-                ⟦2-char-id⟧ = ("hub" === ⟦2-char-id⟧ || "mining_1" === ⟦2-char-id⟧) && (⟦2-char-id⟧.ad.some((⟦2-char-id⟧ => ⟦2-char-id⟧ === ⟦2-char-id⟧)) || Object.hasOwn(⟦2-char-id⟧, ⟦2-char-id⟧) || "mining_1" === ⟦2-char-id⟧ && "Block of Coal" === ⟦2-char-id⟧);
-              ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ && !⟦2-char-id⟧ || ⟦2-char-id⟧.fK(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? jJ : ⟦2-char-id⟧)
+                ⟦2-char-id⟧ = ("hub" === ⟦2-char-id⟧ || "mining_1" === ⟦2-char-id⟧) && (⟦2-char-id⟧.sd.some((⟦2-char-id⟧ => ⟦2-char-id⟧ === ⟦2-char-id⟧)) || Object.hasOwn(⟦2-char-id⟧, ⟦2-char-id⟧) || "mining_1" === ⟦2-char-id⟧ && "Block of Coal" === ⟦2-char-id⟧);
+              ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ && !⟦2-char-id⟧ || ⟦2-char-id⟧.Cw(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? gB : ⟦2-char-id⟧)
             }
           },
           onPlayerAttackEntity: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
             if (⟦2-char-id⟧ !== ⟦2-char-id⟧ || "Player" !== ⟦2-char-id⟧.getEntityType(⟦2-char-id⟧)) return;
-            const [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧.Om(⟦2-char-id⟧);
+            const [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧.Dv(⟦2-char-id⟧);
             ⟦2-char-id⟧.burstParticlePreset("critical", [⟦2-char-id⟧, ⟦2-char-id⟧ + 1, ⟦2-char-id⟧], 10)
           },
           onChangeBlockFail: ⟦2-char-id⟧ => {
             for (const {
-                iF: ⟦2-char-id⟧
+                BB: ⟦2-char-id⟧
               }
               of ⟦2-char-id⟧) ⟦2-char-id⟧.skills.rejectBlock(⟦2-char-id⟧)
           },
```

</details>

<details>
<summary>Hunk 380 · Change · +12 / -12</summary>

```diff
@@ -10657,21 +10657,21 @@
             if ("skyblockGatedPortal" === ⟦2-char-id⟧) {
               var ⟦2-char-id⟧;
               const [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
-              return void(null === (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.Qn(⟦2-char-id⟧))
+              return void(null === (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.MD(⟦2-char-id⟧))
             }
-            if ("skyblockDailyReward" === ⟦2-char-id⟧) return void ⟦2-char-id⟧.dailyReward.Qn(⟦2-char-id⟧);
-            if ("skyblockMailbox" === ⟦2-char-id⟧) return void ⟦2-char-id⟧.mailbox.Qn(⟦2-char-id⟧);
-            if ("skyblockPortalTransit" === ⟦2-char-id⟧) return void ⟦2-char-id⟧.portalTransit.Qn(⟦2-char-id⟧);
-            if ("skyblockLoot" === ⟦2-char-id⟧) return void ⟦2-char-id⟧.Qn(⟦2-char-id⟧, ⟦2-char-id⟧);
-            if ("skyblockLava" === ⟦2-char-id⟧) return void ⟦2-char-id⟧.Qn(⟦2-char-id⟧);
-            if ("skyblockForge" === ⟦2-char-id⟧) return void ⟦2-char-id⟧.forge.Qn(⟦2-char-id⟧);
-            if ("skyblockMagmaward" === ⟦2-char-id⟧) return void ⟦2-char-id⟧.magmaward.Qn(⟦2-char-id⟧);
-            if ("skyblockGlowtide" === ⟦2-char-id⟧) return void ⟦2-char-id⟧.glowtide.Qn(⟦2-char-id⟧);
-            if ("skyblockGlowMeter" === ⟦2-char-id⟧) return void ⟦2-char-id⟧.glowMeter.Qn(⟦2-char-id⟧);
-            if ("skyblockHushWait" === ⟦2-char-id⟧) return void ⟦2-char-id⟧.hushWait.Qn(⟦2-char-id⟧);
+            if ("skyblockDailyReward" === ⟦2-char-id⟧) return void ⟦2-char-id⟧.dailyReward.MD(⟦2-char-id⟧);
+            if ("skyblockMailbox" === ⟦2-char-id⟧) return void ⟦2-char-id⟧.mailbox.MD(⟦2-char-id⟧);
+            if ("skyblockPortalTransit" === ⟦2-char-id⟧) return void ⟦2-char-id⟧.portalTransit.MD(⟦2-char-id⟧);
+            if ("skyblockLoot" === ⟦2-char-id⟧) return void ⟦2-char-id⟧.MD(⟦2-char-id⟧, ⟦2-char-id⟧);
+            if ("skyblockLava" === ⟦2-char-id⟧) return void ⟦2-char-id⟧.MD(⟦2-char-id⟧);
+            if ("skyblockForge" === ⟦2-char-id⟧) return void ⟦2-char-id⟧.forge.MD(⟦2-char-id⟧);
+            if ("skyblockMagmaward" === ⟦2-char-id⟧) return void ⟦2-char-id⟧.magmaward.MD(⟦2-char-id⟧);
+            if ("skyblockGlowtide" === ⟦2-char-id⟧) return void ⟦2-char-id⟧.glowtide.MD(⟦2-char-id⟧);
+            if ("skyblockGlowMeter" === ⟦2-char-id⟧) return void ⟦2-char-id⟧.glowMeter.MD(⟦2-char-id⟧);
+            if ("skyblockHushWait" === ⟦2-char-id⟧) return void ⟦2-char-id⟧.hushWait.MD(⟦2-char-id⟧);
             if ("skyblockPassage" === ⟦2-char-id⟧) {
               const ⟦2-char-id⟧ = ⟦2-char-id⟧;
-              return ⟦2-char-id⟧.passage.Qn(⟦2-char-id⟧), ⟦2-char-id⟧.reachLog.receivePassagePhase(⟦2-char-id⟧.passagePhase), ⟦2-char-id⟧ ??= (0, ⟦2-char-id⟧.t)({
+              return ⟦2-char-id⟧.passage.MD(⟦2-char-id⟧), ⟦2-char-id⟧.reachLog.receivePassagePhase(⟦2-char-id⟧.passagePhase), ⟦2-char-id⟧ ??= (0, ⟦2-char-id⟧.v)({
                 id: "skyblockPassage",
                 order: 5,
                 labelKey: "skyblockGame:passageButton",
```

</details>

<details>
<summary>Hunk 381 · Change · +1 / -1</summary>

```diff
@@ -10689,7 +10689,7 @@
             }
             if ("skyblockTideCharts" === ⟦2-char-id⟧) {
               const ⟦2-char-id⟧ = ⟦2-char-id⟧;
-              return ⟦2-char-id⟧.tideCharts.Qn(⟦2-char-id⟧), void(⟦2-char-id⟧.tideCharts.length > 0 && (⟦2-char-id⟧ ??= (0, ⟦2-char-id⟧.t)({
+              return ⟦2-char-id⟧.tideCharts.MD(⟦2-char-id⟧), void(⟦2-char-id⟧.tideCharts.length > 0 && (⟦2-char-id⟧ ??= (0, ⟦2-char-id⟧.v)({
                 id: "skyblockTideCharts",
                 order: 8,
                 labelKey: "skyblockGame:tideChartsTitle",
```

</details>

<details>
<summary>Hunk 382 · Change · +5 / -5</summary>

```diff
@@ -10701,21 +10701,21 @@
                 onClick: ⟦2-char-id⟧.tideCharts.show
               })))
             }
-            if (⟦2-char-id⟧ === ⟦2-char-id⟧.y) {
+            if (⟦2-char-id⟧ === ⟦2-char-id⟧.t) {
               var ⟦2-char-id⟧;
               const {
                 hookId: ⟦2-char-id⟧,
                 waiting: ⟦2-char-id⟧
               } = ⟦2-char-id⟧;
-              return void ⟦2-char-id⟧.hookWaiting(⟦2-char-id⟧, null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.remainingMs) && void 0 !== ⟦2-char-id⟧ ? FJ : null)
+              return void ⟦2-char-id⟧.hookWaiting(⟦2-char-id⟧, null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.remainingMs) && void 0 !== ⟦2-char-id⟧ ? VB : null)
             }
             if ("skyblockBiteTell" === ⟦2-char-id⟧) return void ⟦2-char-id⟧.receiveTell(⟦2-char-id⟧);
-            if ("skyblockSmuggler" === ⟦2-char-id⟧) return void ⟦2-char-id⟧.smuggler.Qn(⟦2-char-id⟧);
-            if ("skyblockKeepersChair" === ⟦2-char-id⟧) return ⟦2-char-id⟧.keepersChair.Qn(⟦2-char-id⟧), void ⟦2-char-id⟧.lampLight.setAtChair(⟦2-char-id⟧.keepersChair.isAtChair());
+            if ("skyblockSmuggler" === ⟦2-char-id⟧) return void ⟦2-char-id⟧.smuggler.MD(⟦2-char-id⟧);
+            if ("skyblockKeepersChair" === ⟦2-char-id⟧) return ⟦2-char-id⟧.keepersChair.MD(⟦2-char-id⟧), void ⟦2-char-id⟧.lampLight.setAtChair(⟦2-char-id⟧.keepersChair.isAtChair());
             if ("skyblockLampLight" === ⟦2-char-id⟧) {
               const ⟦2-char-id⟧ = ⟦2-char-id⟧;
               var ⟦2-char-id⟧;
-              if (⟦2-char-id⟧.lampLight.Qn(⟦2-char-id⟧), ⟦2-char-id⟧.lampLightReleasing) ⟦2-char-id⟧ ??= (0, ⟦2-char-id⟧.t)({
+              if (⟦2-char-id⟧.lampLight.MD(⟦2-char-id⟧), ⟦2-char-id⟧.lampLightReleasing) ⟦2-char-id⟧ ??= (0, ⟦2-char-id⟧.v)({
                 id: "skyblockLampLightKeepCatches",
                 order: 7,
                 labelKey: "skyblockGame:lampLightKeepCatches",
```

</details>

<details>
<summary>Hunk 383 · Change · +3 / -3</summary>

```diff
@@ -10730,9 +10730,9 @@
               else null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(), ⟦2-char-id⟧ = void 0;
               return
             }
-            if ("skyblockRegulars" === ⟦2-char-id⟧) return void ⟦2-char-id⟧.regulars.Qn(⟦2-char-id⟧);
-            if ("skyblockHiddenWaters" === ⟦2-char-id⟧) return void ⟦2-char-id⟧.hiddenWaters.Qn(⟦2-char-id⟧);
-            if ("skyblockReachLog" === ⟦2-char-id⟧) return ⟦2-char-id⟧.reachLog.Qn(⟦2-char-id⟧), void(⟦2-char-id⟧ ??= (0, ⟦2-char-id⟧.t)({
+            if ("skyblockRegulars" === ⟦2-char-id⟧) return void ⟦2-char-id⟧.regulars.MD(⟦2-char-id⟧);
+            if ("skyblockHiddenWaters" === ⟦2-char-id⟧) return void ⟦2-char-id⟧.hiddenWaters.MD(⟦2-char-id⟧);
+            if ("skyblockReachLog" === ⟦2-char-id⟧) return ⟦2-char-id⟧.reachLog.MD(⟦2-char-id⟧), void(⟦2-char-id⟧ ??= (0, ⟦2-char-id⟧.v)({
               id: "skyblockReachLog",
               order: 6,
               labelKey: "skyblockGame:reachLogTitle",
```

</details>

<details>
<summary>Hunk 384 · Change · +10 / -10</summary>

```diff
@@ -10743,23 +10743,23 @@
               onClick: ⟦2-char-id⟧.reachLog.ask
             }));
             if ("skyblockBurrowDoor" === ⟦2-char-id⟧) {
-              for (const [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧] of ⟦2-char-id⟧) ⟦2-char-id⟧.fK(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
+              for (const [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧] of ⟦2-char-id⟧) ⟦2-char-id⟧.Cw(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
               return
             }
             if ("skyblockHud" === ⟦2-char-id⟧) ⟦2-char-id⟧.receiveHud(⟦2-char-id⟧);
-            else if ("skyblockMap" === ⟦2-char-id⟧) ⟦2-char-id⟧.map.Qn(⟦2-char-id⟧);
-            else if (⟦2-char-id⟧ === ⟦2-char-id⟧.e) ⟦2-char-id⟧.skills.Qn(⟦2-char-id⟧);
-            else if (⟦2-char-id⟧ === ⟦2-char-id⟧ && "dialogue" === ⟦2-char-id⟧.kind) ⟦2-char-id⟧.dialogue.Qn(⟦2-char-id⟧);
-            else if (⟦2-char-id⟧ === ⟦2-char-id⟧) ⟦2-char-id⟧.quests.Qn(⟦2-char-id⟧);
-            else if (⟦2-char-id⟧ === ⟦2-char-id⟧.j) ⟦2-char-id⟧.dungeons.Qn(⟦2-char-id⟧);
-            else if ("sbCollections" === ⟦2-char-id⟧) ⟦2-char-id⟧.collections.Qn(⟦2-char-id⟧);
-            else if ("skyblockQuestGraph" === ⟦2-char-id⟧) ⟦2-char-id⟧.questGraph.Qn(⟦2-char-id⟧);
+            else if ("skyblockMap" === ⟦2-char-id⟧) ⟦2-char-id⟧.map.MD(⟦2-char-id⟧);
+            else if (⟦2-char-id⟧ === ⟦2-char-id⟧.f) ⟦2-char-id⟧.skills.MD(⟦2-char-id⟧);
+            else if (⟦2-char-id⟧ === ⟦2-char-id⟧ && "dialogue" === ⟦2-char-id⟧.kind) ⟦2-char-id⟧.dialogue.MD(⟦2-char-id⟧);
+            else if (⟦2-char-id⟧ === ⟦2-char-id⟧) ⟦2-char-id⟧.quests.MD(⟦2-char-id⟧);
+            else if (⟦2-char-id⟧ === ⟦2-char-id⟧.j) ⟦2-char-id⟧.dungeons.MD(⟦2-char-id⟧);
+            else if ("sbCollections" === ⟦2-char-id⟧) ⟦2-char-id⟧.collections.MD(⟦2-char-id⟧);
+            else if ("skyblockQuestGraph" === ⟦2-char-id⟧) ⟦2-char-id⟧.questGraph.MD(⟦2-char-id⟧);
             else {
               if ("skyblockAutographs" !== ⟦2-char-id⟧) return;
-              ⟦2-char-id⟧.autographs.Qn(⟦2-char-id⟧)
+              ⟦2-char-id⟧.autographs.MD(⟦2-char-id⟧)
             }
             if (!⟦2-char-id⟧ && ⟦2-char-id⟧.map.getSnapshot().enabled) {
-              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.t)({
+              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.v)({
                   id: "skyblockMap",
                   order: 3,
                   labelKey: "skyblockGame:map",
```

</details>

<details>
<summary>Hunk 385 · Change · +2 / -2</summary>

```diff
@@ -10770,11 +10770,11 @@
                   panel: !0,
                   onClick: ⟦2-char-id⟧.map.show
                 }),
-                ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.r)(⟦2-char-id⟧.map.show);
+                ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.p)(⟦2-char-id⟧.map.show);
               ⟦2-char-id⟧ = () => {
                 ⟦2-char-id⟧(), ⟦2-char-id⟧()
               }
-            }!⟦2-char-id⟧ && ⟦2-char-id⟧.skills.getSnapshot().enabled && (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.t)({
+            }!⟦2-char-id⟧ && ⟦2-char-id⟧.skills.getSnapshot().enabled && (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.v)({
               id: "skyblockSkills",
               order: 0,
               labelKey: "skyblockGame:skills",
```

</details>

<details>
<summary>Hunk 386 · Change · +1 / -1</summary>

```diff
@@ -10784,7 +10784,7 @@
               },
               panel: !0,
               onClick: ⟦2-char-id⟧.skills.show
-            })), !⟦2-char-id⟧ && ⟦2-char-id⟧.collections.getSnapshot().enabled && (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.t)({
+            })), !⟦2-char-id⟧ && ⟦2-char-id⟧.collections.getSnapshot().enabled && (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.v)({
               id: "skyblockCollections",
               order: 2.5,
               labelKey: "skyblockGame:collections",
```

</details>

<details>
<summary>Hunk 387 · Change · +1 / -1</summary>

```diff
@@ -10794,7 +10794,7 @@
               },
               panel: !0,
               onClick: ⟦2-char-id⟧.collections.show
-            })), !⟦2-char-id⟧ && ⟦2-char-id⟧.quests.getSnapshot().enabled && (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.t)({
+            })), !⟦2-char-id⟧ && ⟦2-char-id⟧.quests.getSnapshot().enabled && (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.v)({
               id: "skyblockQuests",
               order: 1,
               labelKey: "skyblockGame:quests",
```

</details>

<details>
<summary>Hunk 388 · Change · +1 / -1</summary>

```diff
@@ -10804,7 +10804,7 @@
               },
               panel: !0,
               onClick: ⟦2-char-id⟧.quests.show
-            })), !⟦2-char-id⟧ && ⟦2-char-id⟧.autographs.getSnapshot().enabled && (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.t)({
+            })), !⟦2-char-id⟧ && ⟦2-char-id⟧.autographs.getSnapshot().enabled && (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.v)({
               id: "skyblockAutographs",
               order: 5,
               labelKey: "skyblockGame:autographs",
```

</details>

<details>
<summary>Hunk 389 · Change · +1 / -1</summary>

```diff
@@ -10817,7 +10817,7 @@
             }));
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.dungeons.getSnapshot().enabled;
             var ⟦2-char-id⟧;
-            (⟦2-char-id⟧ || ⟦2-char-id⟧ || ⟦2-char-id⟧) && ⟦2-char-id⟧ !== ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧, null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.t)({
+            (⟦2-char-id⟧ || ⟦2-char-id⟧ || ⟦2-char-id⟧) && ⟦2-char-id⟧ !== ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧, null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.v)({
               id: "skyblockDungeons",
               order: 2,
               labelKey: "skyblockGame:dungeons",
```

</details>

<details>
<summary>Hunk 390 · Change · +1 / -1</summary>

```diff
@@ -10829,7 +10829,7 @@
               panel: !0,
               onClick: ⟦2-char-id⟧.dungeons.show
             }));
-            ⟦2-char-id⟧ || (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.u)((0, ⟦2-char-id⟧.createElement)(⟦2-char-id⟧, {
+            ⟦2-char-id⟧ || (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.r)((0, ⟦2-char-id⟧.createElement)(⟦2-char-id⟧, {
               controller: ⟦2-char-id⟧
             }), {
               content: (0, ⟦2-char-id⟧.createElement)(⟦2-char-id⟧, {
```

</details>

<details>
<summary>Hunk 391 · Change · +8 / -8</summary>

```diff
@@ -10838,22 +10838,22 @@
               onClose: ⟦2-char-id⟧.close
             }))
           },
-          Hh: () => {
+          dL: () => {
             var ⟦2-char-id⟧;
-            for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.values()) ⟦2-char-id⟧.Hh();
-            ⟦2-char-id⟧.Hh(⟦2-char-id⟧), ⟦2-char-id⟧.Hh(), null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.Hh(), ⟦2-char-id⟧.skills.Hh(), ⟦2-char-id⟧.quests.Hh(), ⟦2-char-id⟧.dailyReward.Hh(), ⟦2-char-id⟧.mailbox.Hh(), ⟦2-char-id⟧.map.Hh()
+            for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.values()) ⟦2-char-id⟧.dL();
+            ⟦2-char-id⟧.dL(⟦2-char-id⟧), ⟦2-char-id⟧.dL(), null === (⟦2-char-id⟧ = ⟦2-char-id⟧) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.dL(), ⟦2-char-id⟧.skills.dL(), ⟦2-char-id⟧.quests.dL(), ⟦2-char-id⟧.dailyReward.dL(), ⟦2-char-id⟧.mailbox.dL(), ⟦2-char-id⟧.map.dL()
           }
         }
       }
   },
-  37524: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37502: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      d: () => ⟦2-char-id⟧,
-      g: () => ⟦2-char-id⟧,
+      e: () => ⟦2-char-id⟧,
+      i: () => ⟦2-char-id⟧,
       j: () => ⟦2-char-id⟧,
       l: () => ⟦2-char-id⟧,
-      n: () => ⟦2-char-id⟧,
-      o: () => ⟦2-char-id⟧
+      m: () => ⟦2-char-id⟧,
+      n: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = "skyblockDungeons",
       ⟦2-char-id⟧ = "skyblockHeldBoss",
```

</details>

<details>
<summary>Hunk 392 · Change · +7 / -7</summary>

```diff
@@ -10880,23 +10880,23 @@
         ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧ / 60),
         ⟦2-char-id⟧ = ⟦2-char-id⟧ % 60,
         ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧ / 60),
-        ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧ < 10 ? `0${JJ}` : String(⟦2-char-id⟧),
-        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? `.${FJ}` : "";
-      return ⟦2-char-id⟧ > 0 ? `${qJ}:${jJ(AJ)}:${jJ(eJ)}${YJ}` : `${AJ}:${jJ(eJ)}${YJ}`
+        ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧ < 10 ? `0${BB}` : String(⟦2-char-id⟧),
+        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? `.${VB}` : "";
+      return ⟦2-char-id⟧ > 0 ? `${YB}:${gB(JB)}:${gB(pB)}${oB}` : `${JB}:${gB(pB)}${oB}`
     }
   },
-  35494: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  35404: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       d: () => ⟦2-char-id⟧,
-      e: () => ⟦2-char-id⟧
+      f: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = "skyblockSkills",
       ⟦2-char-id⟧ = "skills_test_gym"
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
<summary>Hunk 393 · Change · +6 / -6</summary>

```diff
@@ -11087,27 +11087,27 @@
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
<summary>Hunk 394 · Change · +24 / -24</summary>

```diff
@@ -11135,73 +11135,73 @@
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
-  37544: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37519: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.exports = ⟦2-char-id⟧.p + "static/media/combat_1.72ac23641446e4f80923.png"
   },
-  37551: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37522: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.exports = ⟦2-char-id⟧.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
   },
-  37560: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37530: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.exports = ⟦2-char-id⟧.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
   },
-  37565: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37538: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.exports = ⟦2-char-id⟧.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
   },
-  37573: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37542: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.exports = ⟦2-char-id⟧.p + "static/media/dungeons.6836b40c30687755a545.png"
   },
-  37581: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37550: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.exports = ⟦2-char-id⟧.p + "static/media/farming_1.08302e28e41bf98474fe.png"
   },
-  37586: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37556: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.exports = ⟦2-char-id⟧.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
   },
-  37590: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37558: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.exports = ⟦2-char-id⟧.p + "static/media/hub.8b20a64678134496251d.png"
   },
-  37595: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37566: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.exports = ⟦2-char-id⟧.p + "static/media/island.113e20c7bd7db93fe1ce.png"
   },
-  37602: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37573: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.exports = ⟦2-char-id⟧.p + "static/media/mining_1.68cac4bdadc5ef809ae5.png"
   },
-  37606: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37579: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.exports = ⟦2-char-id⟧.p + "static/media/mining_1_bridge.56ff82ba845db0b52726.png"
   },
-  37613: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37587: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.exports = ⟦2-char-id⟧.p + "static/media/mining_1_gallery.4e799e6329dbc66249ce.png"
   },
-  37617: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37591: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.exports = ⟦2-char-id⟧.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
   },
-  37619: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37593: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.exports = ⟦2-char-id⟧.p + "static/media/mining_1_village.c2a625c1c4541a1fbe65.png"
   },
-  17759: ⟦2-char-id⟧ => {
+  17881: ⟦2-char-id⟧ => {
     ⟦2-char-id⟧.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
   },
-  19883: ⟦2-char-id⟧ => {
+  19944: ⟦2-char-id⟧ => {
     ⟦2-char-id⟧.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
   },
-  22292: ⟦2-char-id⟧ => {
+  22266: ⟦2-char-id⟧ => {
     ⟦2-char-id⟧.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
   },
-  23818: ⟦2-char-id⟧ => {
+  23829: ⟦2-char-id⟧ => {
     ⟦2-char-id⟧.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
   },
-  25498: ⟦2-char-id⟧ => {
+  25517: ⟦2-char-id⟧ => {
     ⟦2-char-id⟧.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
   },
-  25508: ⟦2-char-id⟧ => {
+  25537: ⟦2-char-id⟧ => {
     ⟦2-char-id⟧.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
   },
-  37519: ⟦2-char-id⟧ => {
+  37493: ⟦2-char-id⟧ => {
     ⟦2-char-id⟧.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
   }
 };
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/179.js</code> · modified · +82 / -82</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +5 / -5</summary>

```diff
@@ -1,18 +1,18 @@
 export const ⟦2-char-id⟧ = 179;
 export const ids = [179];
 export const modules = {
-  8606: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  8615: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      d: () => ⟦2-char-id⟧,
-      h: () => ⟦2-char-id⟧
+      c: () => ⟦2-char-id⟧,
+      g: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(2753);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(2743);
 
     function ⟦2-char-id⟧() {
       if ("undefined" === typeof BroadcastChannel) return null;
       const ⟦2-char-id⟧ = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
       try {
-        const ⟦2-char-id⟧ = new BroadcastChannel(⟦2-char-id⟧.i);
+        const ⟦2-char-id⟧ = new BroadcastChannel(⟦2-char-id⟧.k);
         ⟦2-char-id⟧.postMessage({
           stored: ⟦2-char-id⟧
         }), ⟦2-char-id⟧.close()
```

</details>

<details>
<summary>Hunk 2 · Change · +12 / -12</summary>

```diff
@@ -24,33 +24,33 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = "object" === typeof ⟦2-char-id⟧ && null !== ⟦2-char-id⟧ ? ⟦2-char-id⟧.stored : null;
-      return "string" === typeof ⟦2-char-id⟧ ? cJ : null
+      return "string" === typeof ⟦2-char-id⟧ ? TB : null
     }
   },
-  8601: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  8609: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧,
-      g: () => ⟦2-char-id⟧,
-      h: () => ⟦2-char-id⟧
+      d: () => ⟦2-char-id⟧,
+      f: () => ⟦2-char-id⟧,
+      g: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(2753);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(2743);
     async function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧(await ⟦2-char-id⟧.getItem(⟦2-char-id⟧.f, ⟦2-char-id⟧));
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧(await ⟦2-char-id⟧.getItem(⟦2-char-id⟧.g, ⟦2-char-id⟧));
       if (null === ⟦2-char-id⟧ || ⟦2-char-id⟧()) return null;
-      const ⟦2-char-id⟧ = await ⟦2-char-id⟧.getItem(⟦2-char-id⟧.g, ⟦2-char-id⟧);
+      const ⟦2-char-id⟧ = await ⟦2-char-id⟧.getItem(⟦2-char-id⟧.h, ⟦2-char-id⟧);
       return ⟦2-char-id⟧() ? null : (await async function(⟦2-char-id⟧) {
-        await Promise.all([⟦2-char-id⟧.removeItem(⟦2-char-id⟧.f), ⟦2-char-id⟧.removeItem(⟦2-char-id⟧.g)])
+        await Promise.all([⟦2-char-id⟧.removeItem(⟦2-char-id⟧.g), ⟦2-char-id⟧.removeItem(⟦2-char-id⟧.h)])
       }(⟦2-char-id⟧).catch(⟦2-char-id⟧), {
         pack: ⟦2-char-id⟧,
-        source: "string" === typeof ⟦2-char-id⟧ ? AJ : null
+        source: "string" === typeof ⟦2-char-id⟧ ? JB : null
       })
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return (0, ⟦2-char-id⟧.q)() ? Promise.resolve(null) : ⟦2-char-id⟧(⟦2-char-id⟧, !1, (⟦2-char-id⟧ => {
+      return (0, ⟦2-char-id⟧.r)() ? Promise.resolve(null) : ⟦2-char-id⟧(⟦2-char-id⟧, !1, (⟦2-char-id⟧ => {
         console.error("Error removing temporary texture pack: ", ⟦2-char-id⟧)
-      }), ⟦2-char-id⟧.q)
+      }), ⟦2-char-id⟧.r)
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 3 · Change · +3 / -3</summary>

```diff
@@ -59,14 +59,14 @@
       return "object" !== typeof ⟦2-char-id⟧ || null === ⟦2-char-id⟧ || "string" !== typeof ⟦2-char-id⟧.id ? null : ⟦2-char-id⟧
     }
   },
-  41989: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  42041: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       return null === ⟦2-char-id⟧.gameSource ? "player" : "customGame"
     }
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧,
+      d: () => ⟦2-char-id⟧,
       f: () => ⟦2-char-id⟧,
-      h: () => ⟦2-char-id⟧,
+      i: () => ⟦2-char-id⟧,
       l: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;
```

</details>

<details>
<summary>Hunk 4 · Change · +3 / -3</summary>

```diff
@@ -85,14 +85,14 @@
       ⟦2-char-id⟧ = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
       ⟦2-char-id⟧ = /url\(/gi,
       ⟦2-char-id⟧ = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
-      ⟦2-char-id⟧ = new Set([...YJ.map((⟦2-char-id⟧ => new URL(⟦2-char-id⟧).origin)), "https://fonts.gstatic.com"]),
+      ⟦2-char-id⟧ = new Set([...oB.map((⟦2-char-id⟧ => new URL(⟦2-char-id⟧).origin)), "https://fonts.gstatic.com"]),
       ⟦2-char-id⟧ = new Set(["https://i.imgur.com/MEcjBFQ.png"]);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
       if (⟦2-char-id⟧.includes("\\") || ⟦2-char-id⟧.test(⟦2-char-id⟧)) return !0;
-      const ⟦2-char-id⟧ = [...JJ.matchAll(⟦2-char-id⟧)];
-      return ⟦2-char-id⟧.length !== (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.match(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? cJ : 0) || !⟦2-char-id⟧.every((⟦2-char-id⟧ => {
+      const ⟦2-char-id⟧ = [...BB.matchAll(⟦2-char-id⟧)];
+      return ⟦2-char-id⟧.length !== (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.match(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? TB : 0) || !⟦2-char-id⟧.every((⟦2-char-id⟧ => {
         var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
         let {
           groups: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 5 · Change · +8 / -8</summary>

```diff
@@ -106,32 +106,32 @@
           } catch {
             return !1
           }
-        }(null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.doubleQuoted) && void 0 !== ⟦2-char-id⟧ ? FJ : null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.singleQuoted) && void 0 !== ⟦2-char-id⟧ ? ZJ : null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.unquoted) && void 0 !== ⟦2-char-id⟧ ? cJ : "")
+        }(null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.doubleQuoted) && void 0 !== ⟦2-char-id⟧ ? VB : null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.singleQuoted) && void 0 !== ⟦2-char-id⟧ ? dB : null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.unquoted) && void 0 !== ⟦2-char-id⟧ ? TB : "")
       }))
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = [...Object.values(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.textureOverrides) && void 0 !== ⟦2-char-id⟧ ? cJ : {}), ...Object.values(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.modelOverrides) && void 0 !== ⟦2-char-id⟧ ? ZJ : {})],
-        ⟦2-char-id⟧ = [...Object.values(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.customCss) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.fontFaces) && void 0 !== ⟦2-char-id⟧ ? FJ : {}), ...Object.values(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.customCss) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.classStyles) && void 0 !== ⟦2-char-id⟧ ? AJ : {})].flatMap((⟦2-char-id⟧ => Object.values(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? JJ : {})));
-      return !⟦2-char-id⟧.every(⟦2-char-id⟧) || !Object.values(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.skyBoxes) && void 0 !== ⟦2-char-id⟧ ? jJ : {}).every(⟦2-char-id⟧) || ⟦2-char-id⟧.some((⟦2-char-id⟧ => "string" === typeof ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧)))
+      const ⟦2-char-id⟧ = [...Object.values(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.textureOverrides) && void 0 !== ⟦2-char-id⟧ ? TB : {}), ...Object.values(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.modelOverrides) && void 0 !== ⟦2-char-id⟧ ? dB : {})],
+        ⟦2-char-id⟧ = [...Object.values(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.customCss) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.fontFaces) && void 0 !== ⟦2-char-id⟧ ? VB : {}), ...Object.values(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.customCss) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.classStyles) && void 0 !== ⟦2-char-id⟧ ? JB : {})].flatMap((⟦2-char-id⟧ => Object.values(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? BB : {})));
+      return !⟦2-char-id⟧.every(⟦2-char-id⟧) || !Object.values(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.skyBoxes) && void 0 !== ⟦2-char-id⟧ ? gB : {}).every(⟦2-char-id⟧) || ⟦2-char-id⟧.some((⟦2-char-id⟧ => "string" === typeof ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧)))
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       if (null === ⟦2-char-id⟧ || "player" === ⟦2-char-id⟧ || !⟦2-char-id⟧(⟦2-char-id⟧)) return ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = {
-        ...JJ
+        ...BB
       };
       return ⟦2-char-id⟧.textureOverrides && (⟦2-char-id⟧.textureOverrides = ⟦2-char-id⟧(⟦2-char-id⟧.textureOverrides, ⟦2-char-id⟧, "texture")), ⟦2-char-id⟧.modelOverrides && (⟦2-char-id⟧.modelOverrides = ⟦2-char-id⟧(⟦2-char-id⟧.modelOverrides, ⟦2-char-id⟧, "model")), ⟦2-char-id⟧.skyBoxes && (⟦2-char-id⟧.skyBoxes = ⟦2-char-id⟧(⟦2-char-id⟧.skyBoxes, ⟦2-char-id⟧, "sky")), ⟦2-char-id⟧.customCss && (⟦2-char-id⟧.customCss = function(⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => "string" === typeof ⟦2-char-id⟧ && !⟦2-char-id⟧(⟦2-char-id⟧)), "CSS"),
           {
             fontFaces: ⟦2-char-id⟧,
             classStyles: ⟦2-char-id⟧
-          } = ⟦2-char-id⟧(⟦2-char-id⟧) ? JJ : {},
+          } = ⟦2-char-id⟧(⟦2-char-id⟧) ? BB : {},
           ⟦2-char-id⟧ = {};
-        for (const [⟦2-char-id⟧, ⟦2-char-id⟧] of Object.entries(⟦2-char-id⟧(⟦2-char-id⟧) ? FJ : {})) ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧(⟦2-char-id⟧);
+        for (const [⟦2-char-id⟧, ⟦2-char-id⟧] of Object.entries(⟦2-char-id⟧(⟦2-char-id⟧) ? VB : {})) ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧(⟦2-char-id⟧);
         return {
-          fontFaces: (Array.isArray(⟦2-char-id⟧) ? ZJ : []).map(⟦2-char-id⟧),
+          fontFaces: (Array.isArray(⟦2-char-id⟧) ? dB : []).map(⟦2-char-id⟧),
           classStyles: ⟦2-char-id⟧
         }
       }(⟦2-char-id⟧.customCss)), ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 6 · Change · +1 / -1</summary>

```diff
@@ -142,7 +142,7 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-      const ⟦2-char-id⟧ = Object.entries(⟦2-char-id⟧(⟦2-char-id⟧) ? JJ : {}),
+      const ⟦2-char-id⟧ = Object.entries(⟦2-char-id⟧(⟦2-char-id⟧) ? BB : {}),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.filter((⟦2-char-id⟧ => {
           let [, ⟦2-char-id⟧] = ⟦2-char-id⟧;
           return !⟦2-char-id⟧(⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 7 · Change · +1 / -1</summary>

```diff
@@ -152,7 +152,7 @@
           let [⟦2-char-id⟧] = ⟦2-char-id⟧;
           return ⟦2-char-id⟧
         }));
-        console.warn(`Ignoring a custom game texture pack's ${ZJ} files that name another site: ${JJ.join(", ")}`)
+        console.warn(`Ignoring a custom game texture pack's ${dB} files that name another site: ${BB.join(", ")}`)
       }
       return Object.fromEntries(⟦2-char-id⟧.filter((⟦2-char-id⟧ => {
         let [, ⟦2-char-id⟧] = ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 8 · Change · +15 / -15</summary>

```diff
@@ -160,29 +160,29 @@
       })))
     }
   },
-  41991: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  42043: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧,
-      i: () => ⟦2-char-id⟧,
-      j: () => ⟦2-char-id⟧
+      b: () => ⟦2-char-id⟧,
+      d: () => ⟦2-char-id⟧,
+      f: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(889),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2651),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2745),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2753),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8606),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8601),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(41989),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39831),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39815),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4448);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(900),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2626),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2729),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2743),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8615),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8609),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(42041),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(39779),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(39765),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4467);
     const ⟦2-char-id⟧ = {
       pack: null,
       gameSource: null
     };
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧) {
-        this.host = ⟦2-char-id⟧, this.ready = void 0, this.state = ⟦2-char-id⟧, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.xn = !1, (0, ⟦2-char-id⟧.l)(), this.ready = this.readStored()
+        this.host = ⟦2-char-id⟧, this.ready = void 0, this.state = ⟦2-char-id⟧, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.ND = !1, (0, ⟦2-char-id⟧.m)(), this.ready = this.readStored()
       }
       readyWithin(⟦2-char-id⟧) {
         return Promise.race([this.ready, new Promise((⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 9 · Change · +1 / -1</summary>

```diff
@@ -204,7 +204,7 @@
         }
       }
       isUsingCustomGameTexturePack(⟦2-char-id⟧) {
-        return (0, ⟦2-char-id⟧.f)(this.state, ⟦2-char-id⟧)
+        return (0, ⟦2-char-id⟧.e)(this.state, ⟦2-char-id⟧)
       }
       setGamePackConfirm(⟦2-char-id⟧) {
         this.confirmGamePack = ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 10 · Change · +3 / -3</summary>

```diff
@@ -226,16 +226,16 @@
         return ⟦2-char-id⟧ && this.announce(), ⟦2-char-id⟧
       }
       async packForGame(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-        await this.readyWithin(Math.max(0, (null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? ZJ : performance.now() + ⟦2-char-id⟧.d) - performance.now()));
+        await this.readyWithin(Math.max(0, (null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? dB : performance.now() + ⟦2-char-id⟧.b) - performance.now()));
         const ⟦2-char-id⟧ = ++this.picks,
-          ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.k)(⟦2-char-id⟧) ? (0, ⟦2-char-id⟧.n)(⟦2-char-id⟧) : null;
+          ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)(⟦2-char-id⟧) ? (0, ⟦2-char-id⟧.l)(⟦2-char-id⟧) : null;
         if (null === ⟦2-char-id⟧) return void this.usePlayerPack();
         let ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
           let ⟦2-char-id⟧;
           const ⟦2-char-id⟧ = new Promise(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
             ⟦2-char-id⟧ = setTimeout((() => {
-              ⟦2-char-id⟧(new Error(`no answer in ${JJ} ms`))
+              ⟦2-char-id⟧(new Error(`no answer in ${BB} ms`))
             }), ⟦2-char-id⟧)
           }));
           return ⟦2-char-id⟧.catch((() => {})), {
```

</details>

<details>
<summary>Hunk 11 · Change · +6 / -6</summary>

```diff
@@ -248,18 +248,18 @@
         try {
           const ⟦2-char-id⟧ = await Promise.race([⟦2-char-id⟧.packKey(⟦2-char-id⟧), ⟦2-char-id⟧.passed]);
           if (null !== ⟦2-char-id⟧ && this.onGamePack && this.state.gameSource === ⟦2-char-id⟧) return;
-          if (null !== ⟦2-char-id⟧ && ⟦2-char-id⟧ === this.skippedKey) return void(this.xn || this.picks !== ⟦2-char-id⟧ || this.usePlayerPack());
+          if (null !== ⟦2-char-id⟧ && ⟦2-char-id⟧ === this.skippedKey) return void(this.ND || this.picks !== ⟦2-char-id⟧ || this.usePlayerPack());
           ⟦2-char-id⟧ = null === ⟦2-char-id⟧ ? null : await Promise.race([⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.passed])
         } catch (⟦2-char-id⟧) {
-          const ⟦2-char-id⟧ = !this.xn && this.picks === ⟦2-char-id⟧ && this.holdsOtherGamePack(⟦2-char-id⟧);
-          return this.host.warn(`the texture pack of ${eJ} didn't load: ${JJ?"the player's own shows":"the pack in play stays"}`, ⟦2-char-id⟧), void(⟦2-char-id⟧ && this.usePlayerPack())
+          const ⟦2-char-id⟧ = !this.ND && this.picks === ⟦2-char-id⟧ && this.holdsOtherGamePack(⟦2-char-id⟧);
+          return this.host.warn(`the texture pack of ${pB} didn't load: ${BB?"the player's own shows":"the pack in play stays"}`, ⟦2-char-id⟧), void(⟦2-char-id⟧ && this.usePlayerPack())
         } finally {
           ⟦2-char-id⟧.clear()
         }
-        if (this.xn || this.picks !== ⟦2-char-id⟧) return;
-        null !== ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧.pack) && (this.host.warn(`the texture pack of ${eJ} names files on other sites: the player's own shows`, null), ⟦2-char-id⟧ = null);
+        if (this.ND || this.picks !== ⟦2-char-id⟧) return;
+        null !== ⟦2-char-id⟧ && (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧.pack) && (this.host.warn(`the texture pack of ${pB} names files on other sites: the player's own shows`, null), ⟦2-char-id⟧ = null);
         const ⟦2-char-id⟧ = null === ⟦2-char-id⟧ || await this.confirmed(⟦2-char-id⟧.pack, ⟦2-char-id⟧) ? null : ⟦2-char-id⟧.key;
-        this.xn || this.picks !== ⟦2-char-id⟧ || (null !== ⟦2-char-id⟧ && (this.skippedKey = ⟦2-char-id⟧, ⟦2-char-id⟧ = null), null === ⟦2-char-id⟧ ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
+        this.ND || this.picks !== ⟦2-char-id⟧ || (null !== ⟦2-char-id⟧ && (this.skippedKey = ⟦2-char-id⟧, ⟦2-char-id⟧ = null), null === ⟦2-char-id⟧ ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
           pack: ⟦2-char-id⟧.pack,
           gameSource: ⟦2-char-id⟧.key
         }, !0)))
```

</details>

<details>
<summary>Hunk 12 · Change · +1 / -1</summary>

```diff
@@ -276,7 +276,7 @@
         try {
           return await ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
         } catch (⟦2-char-id⟧) {
-          return this.host.warn(`the texture pack prompt of ${cJ} failed: the pack is skipped`, ⟦2-char-id⟧), !1
+          return this.host.warn(`the texture pack prompt of ${TB} failed: the pack is skipped`, ⟦2-char-id⟧), !1
         }
       }
       async readPlayerPack() {
```

</details>

<details>
<summary>Hunk 13 · Change · +2 / -2</summary>

```diff
@@ -290,9 +290,9 @@
         } catch (⟦2-char-id⟧) {
           return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", ⟦2-char-id⟧)
         }
-        if (this.xn || this.ownChanges !== ⟦2-char-id⟧) return;
+        if (this.ND || this.ownChanges !== ⟦2-char-id⟧) return;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
-        (0, ⟦2-char-id⟧.b)(⟦2-char-id⟧, this.playerPack) || (this.ownChanges++, this.setOwn(⟦2-char-id⟧), this.onGamePack || this.change({
+        (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧, this.playerPack) || (this.ownChanges++, this.setOwn(⟦2-char-id⟧), this.onGamePack || this.change({
           pack: ⟦2-char-id⟧,
           gameSource: null
         }, !1))
```

</details>

<details>
<summary>Hunk 14 · Change · +2 / -2</summary>

```diff
@@ -301,14 +301,14 @@
         this.picks++
       }
       dispose() {
-        this.xn = !0, this.listeners.clear()
+        this.ND = !0, this.listeners.clear()
       }
       async readStored() {
         const {
           store: ⟦2-char-id⟧,
           warn: ⟦2-char-id⟧
         } = this.host;
-        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧, !0, (⟦2-char-id⟧ => {
+        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, !0, (⟦2-char-id⟧ => {
           ⟦2-char-id⟧("the custom game's texture pack wasn't removed from storage", ⟦2-char-id⟧)
         })).then((⟦2-char-id⟧ => {
           this.takeOneShot(⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 15 · Change · +9 / -9</summary>

```diff
@@ -322,39 +322,39 @@
       }
       takeOneShot(⟦2-char-id⟧) {
         var ⟦2-char-id⟧;
-        null === ⟦2-char-id⟧ || this.xn || this.changes > 0 || this.picks > 0 || ((0, ⟦2-char-id⟧.h)(⟦2-char-id⟧.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
+        null === ⟦2-char-id⟧ || this.ND || this.changes > 0 || this.picks > 0 || ((0, ⟦2-char-id⟧.i)(⟦2-char-id⟧.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
           pack: ⟦2-char-id⟧.pack,
-          gameSource: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.source) && void 0 !== ⟦2-char-id⟧ ? cJ : ""
+          gameSource: null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.source) && void 0 !== ⟦2-char-id⟧ ? TB : ""
         }))
       }
       takeStoredOwn(⟦2-char-id⟧) {
-        if (this.playerPicked || this.xn) return;
+        if (this.playerPicked || this.ND) return;
         if (this.ownChanges++, this.setOwn(⟦2-char-id⟧(⟦2-char-id⟧)), this.onGamePack) return;
         const ⟦2-char-id⟧ = {
           pack: this.playerPack,
           gameSource: null
         };
-        0 === this.changes ? this.state = cJ : this.change(⟦2-char-id⟧, !1)
+        0 === this.changes ? this.state = TB : this.change(⟦2-char-id⟧, !1)
       }
       async update() {
         const ⟦2-char-id⟧ = this.playerPack,
           ⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.metaData.id;
         if (!⟦2-char-id⟧ || !⟦2-char-id⟧ || !this.host.fetchLatest || ⟦2-char-id⟧ === ⟦2-char-id⟧.d || ⟦2-char-id⟧ === ⟦2-char-id⟧.r.CUSTOM) return;
-        const ⟦2-char-id⟧ = ⟦2-char-id⟧.v[⟦2-char-id⟧];
+        const ⟦2-char-id⟧ = ⟦2-char-id⟧.s[⟦2-char-id⟧];
         if (void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.metaData.version >= ⟦2-char-id⟧) return;
         let ⟦2-char-id⟧;
         try {
           ⟦2-char-id⟧ = ⟦2-char-id⟧(await this.host.fetchLatest(⟦2-char-id⟧))
         } catch (⟦2-char-id⟧) {
-          return void this.host.warn(`texture pack ${cJ} didn't update to version ${ZJ}`, ⟦2-char-id⟧)
-        }
-        null === ⟦2-char-id⟧ || this.xn || this.playerPack !== ⟦2-char-id⟧ || (this.ownChanges++, this.setOwn(⟦2-char-id⟧), this.onGamePack || this.change({
+          return void this.host.warn(`texture pack ${TB} didn't update to version ${dB}`, ⟦2-char-id⟧)
+        }
+        null === ⟦2-char-id⟧ || this.ND || this.playerPack !== ⟦2-char-id⟧ || (this.ownChanges++, this.setOwn(⟦2-char-id⟧), this.onGamePack || this.change({
           pack: ⟦2-char-id⟧,
           gameSource: null
         }, !1), await this.storePlayerPack(⟦2-char-id⟧) && this.announce())
       }
       announce() {
-        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)();
+        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.c)();
         null !== ⟦2-char-id⟧ && this.ownAnnouncements.add(⟦2-char-id⟧)
       }
       setOwn(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 16 · Change · +2 / -2</summary>

```diff
@@ -379,13 +379,13 @@
         }
       }
       change(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        if (!this.xn) {
+        if (!this.ND) {
           this.changes++, this.onGamePack = ⟦2-char-id⟧, this.state = ⟦2-char-id⟧;
           for (const ⟦2-char-id⟧ of [...this.listeners.keys()]) this.deliver(⟦2-char-id⟧)
         }
       }
       deliver(⟦2-char-id⟧) {
-        if (!this.xn && this.listeners.has(⟦2-char-id⟧) && this.listeners.get(⟦2-char-id⟧) !== this.state) {
+        if (!this.ND && this.listeners.has(⟦2-char-id⟧) && this.listeners.get(⟦2-char-id⟧) !== this.state) {
           this.listeners.set(⟦2-char-id⟧, this.state);
           try {
             ⟦2-char-id⟧(this.state)
```

</details>

<details>
<summary>Hunk 17 · Change · +3 / -3</summary>

```diff
@@ -396,15 +396,15 @@
       }
     }
     async function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.c)(await ⟦2-char-id⟧.fetchPack(⟦2-char-id⟧));
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)(await ⟦2-char-id⟧.fetchPack(⟦2-char-id⟧));
       if (null !== ⟦2-char-id⟧) return {
         pack: ⟦2-char-id⟧,
         key: ⟦2-char-id⟧
       };
       const ⟦2-char-id⟧ = await ⟦2-char-id⟧.packKey(⟦2-char-id⟧);
       if (null === ⟦2-char-id⟧) return null;
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.c)(await ⟦2-char-id⟧.fetchPack(⟦2-char-id⟧));
-      if (null === ⟦2-char-id⟧) throw new Error(`no texture pack at ${UJ}`);
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)(await ⟦2-char-id⟧.fetchPack(⟦2-char-id⟧));
+      if (null === ⟦2-char-id⟧) throw new Error(`no texture pack at ${yB}`);
       return {
         pack: ⟦2-char-id⟧,
         key: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 18 · Change · +5 / -5</summary>

```diff
@@ -416,22 +416,22 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧);
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧);
       return ⟦2-char-id⟧(⟦2-char-id⟧) ? null : ⟦2-char-id⟧
     }
     async function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ⟦2-char-id⟧.e;
+      let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ⟦2-char-id⟧.b;
       if (null === ⟦2-char-id⟧.pack) return null;
       const {
         packAssets: ⟦2-char-id⟧
-      } = await Promise.all([⟦2-char-id⟧.e(181), ⟦2-char-id⟧.e(41)]).then((() => ⟦2-char-id⟧(59741)));
+      } = await Promise.all([⟦2-char-id⟧.e(181), ⟦2-char-id⟧.e(41)]).then((() => ⟦2-char-id⟧(60051)));
       return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.t)();
+      const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.v)();
       return null === ⟦2-char-id⟧ ? () => {} : (⟦2-char-id⟧.onmessage = ⟦2-char-id⟧ => {
-        ⟦2-char-id⟧.readPlayerPack((0, ⟦2-char-id⟧.h)(⟦2-char-id⟧.data))
+        ⟦2-char-id⟧.readPlayerPack((0, ⟦2-char-id⟧.g)(⟦2-char-id⟧.data))
       }, () => {
         ⟦2-char-id⟧.close()
       })
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/180.js</code> · modified · +13 / -13</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +3 / -3</summary>

```diff
@@ -1,15 +1,15 @@
 export const ⟦2-char-id⟧ = 180;
 export const ids = [180];
 export const modules = {
-  8610: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  8623: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       packDisplayName: () => ⟦2-char-id⟧,
       packModelMessage: () => ⟦2-char-id⟧,
       packModelSummary: () => ⟦2-char-id⟧,
       refusedPackModels: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8615),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8620);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8629),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8634);
     const ⟦2-char-id⟧ = "DRACO",
       ⟦2-char-id⟧ = 0,
       ⟦2-char-id⟧ = 1,
```

</details>

<details>
<summary>Hunk 2 · Change · +1 / -1</summary>

```diff
@@ -67,7 +67,7 @@
           if (⟦2-char-id⟧ + ⟦2-char-id⟧ > ⟦2-char-id⟧.byteLength) throw new RangeError("past the stream");
           ⟦2-char-id⟧ += ⟦2-char-id⟧
         }), ⟦2-char-id⟧);
-        const ⟦2-char-id⟧ = ⟦2-char-id⟧ < 2 ? UJ : ⟦2-char-id⟧;
+        const ⟦2-char-id⟧ = ⟦2-char-id⟧ < 2 ? yB : ⟦2-char-id⟧;
         if (⟦2-char-id⟧ === ⟦2-char-id⟧) return {
           faces: 0,
           vertices: ⟦2-char-id⟧()
```

</details>

<details>
<summary>Hunk 3 · Change · +1 / -1</summary>

```diff
@@ -94,7 +94,7 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
       if (null === (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.extensionsUsed) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.includes("KHR_draco_mesh_compression")) || void 0 === ⟦2-char-id⟧ || !⟦2-char-id⟧) return null;
-      for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.meshes) && void 0 !== ⟦2-char-id⟧ ? eJ : []) {
+      for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.meshes) && void 0 !== ⟦2-char-id⟧ ? pB : []) {
         var ⟦2-char-id⟧;
         for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.primitives) {
           var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 4 · Change · +2 / -2</summary>

```diff
@@ -102,10 +102,10 @@
           if ("object" !== typeof ⟦2-char-id⟧ || null === ⟦2-char-id⟧) continue;
           const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.bufferViews) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[⟦2-char-id⟧.bufferView];
           if (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧) return ⟦2-char-id⟧;
-          const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.byteOffset) && void 0 !== ⟦2-char-id⟧ ? qJ : 0,
+          const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.byteOffset) && void 0 !== ⟦2-char-id⟧ ? YB : 0,
             ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.subarray(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧.byteLength));
           if (null === ⟦2-char-id⟧ && !⟦2-char-id⟧) continue;
-          const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.accessors) && void 0 !== ⟦2-char-id⟧ ? jJ : [],
+          const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.accessors) && void 0 !== ⟦2-char-id⟧ ? gB : [],
             ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.attributes.POSITION]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.count,
             ⟦2-char-id⟧ = void 0 === ⟦2-char-id⟧.indices ? 0 : null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.indices]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.count;
           if (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ || 3 * ⟦2-char-id⟧.faces !== ⟦2-char-id⟧ || ⟦2-char-id⟧.vertices > ⟦2-char-id⟧) return ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 5 · Change · +2 / -2</summary>

```diff
@@ -117,11 +117,11 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
-      return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧.fromFolderName || ⟦2-char-id⟧.id
+      return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧.fromFolderName || ⟦2-char-id⟧.id
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return `Texture pack "${JJ}": model "${cJ}" was not loaded because it ${ZJ}. The default model is used instead.`
+      return `Texture pack "${BB}": model "${TB}" was not loaded because it ${dB}. The default model is used instead.`
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 6 · Change · +2 / -2</summary>

```diff
@@ -132,12 +132,12 @@
       for (const [⟦2-char-id⟧, ⟦2-char-id⟧] of Object.entries(⟦2-char-id⟧)) {
         let ⟦2-char-id⟧;
         if (⟦2-char-id⟧.startsWith("data:")) try {
-          const ⟦2-char-id⟧ = new Uint8Array((0, ⟦2-char-id⟧.w)(⟦2-char-id⟧));
+          const ⟦2-char-id⟧ = new Uint8Array((0, ⟦2-char-id⟧.u)(⟦2-char-id⟧));
           if (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧), null === ⟦2-char-id⟧) {
             const {
               json: ⟦2-char-id⟧,
               bin: ⟦2-char-id⟧
-            } = (0, ⟦2-char-id⟧.F)(⟦2-char-id⟧);
+            } = (0, ⟦2-char-id⟧.y)(⟦2-char-id⟧);
             ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
           }
         } catch {
```

</details>

<details>
<summary>Hunk 7 · Change · +2 / -2</summary>

```diff
@@ -152,8 +152,8 @@
       const ⟦2-char-id⟧ = Object.keys(⟦2-char-id⟧);
       if (0 === ⟦2-char-id⟧.length) return null;
       if (1 === ⟦2-char-id⟧.length) return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧[0], ⟦2-char-id⟧[⟦2-char-id⟧[0]]);
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧.map((⟦2-char-id⟧ => `"${JJ}" ${cJ[JJ]}`)).join("; ");
-      return `Texture pack "${JJ}": ${ZJ.length} models were not loaded (${FJ}). The default models are used instead.`
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧.map((⟦2-char-id⟧ => `"${BB}" ${TB[BB]}`)).join("; ");
+      return `Texture pack "${BB}": ${dB.length} models were not loaded (${VB}). The default models are used instead.`
     }
   }
 };
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/181.js</code> · modified · +74 / -74</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +3 / -3</summary>

```diff
@@ -1,13 +1,13 @@
 export const ⟦2-char-id⟧ = 181;
 export const ids = [181];
 export const modules = {
-  8615: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  8629: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       d: () => ⟦2-char-id⟧,
       f: () => ⟦2-char-id⟧,
-      j: () => ⟦2-char-id⟧
+      i: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8620);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8634);
     const ⟦2-char-id⟧ = {
         fileBytes: 4194304,
         vertices: 65535,
```

</details>

<details>
<summary>Hunk 2 · Change · +1 / -1</summary>

```diff
@@ -53,7 +53,7 @@
         TEXCOORD_4: ⟦2-char-id⟧,
         TEXCOORD_5: ⟦2-char-id⟧
       },
-      ⟦2-char-id⟧ = new Set(⟦2-char-id⟧.l.map((⟦2-char-id⟧ => {
+      ⟦2-char-id⟧ = new Set(⟦2-char-id⟧.j.map((⟦2-char-id⟧ => {
         let [⟦2-char-id⟧] = ⟦2-char-id⟧;
         return ⟦2-char-id⟧
       }))),
```

</details>

<details>
<summary>Hunk 3 · Change · +2 / -2</summary>

```diff
@@ -71,11 +71,11 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧ > ⟦2-char-id⟧ ? `has ${fJ(JJ)} ${ZJ} (the limit is ${fJ(cJ)})` : null
+      return ⟦2-char-id⟧ > ⟦2-char-id⟧ ? `has ${HB(BB)} ${dB} (the limit is ${HB(TB)})` : null
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return Number.isInteger(⟦2-char-id⟧) && ⟦2-char-id⟧ >= 0 && ⟦2-char-id⟧ < (null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? cJ : 0)
+      return Number.isInteger(⟦2-char-id⟧) && ⟦2-char-id⟧ >= 0 && ⟦2-char-id⟧ < (null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? TB : 0)
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 4 · Change · +2 / -2</summary>

```diff
@@ -92,13 +92,13 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
-      return `${JJ.normalized?"normalized ":""}${null!==(cJ=FJ.i[JJ.componentType])&&void 0!==cJ?cJ:JJ.componentType} ${JJ.type}`
+      return `${BB.normalized?"normalized ":""}${null!==(TB=VB.g[BB.componentType])&&void 0!==TB?TB:BB.componentType} ${BB.type}`
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
         var ⟦2-char-id⟧;
-        return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? ZJ : -1
+        return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? dB : -1
       };
       return 255 === ⟦2-char-id⟧(0) && 216 === ⟦2-char-id⟧(1) ? "JPEG" : 82 === ⟦2-char-id⟧(0) && 73 === ⟦2-char-id⟧(1) && 87 === ⟦2-char-id⟧(8) && 69 === ⟦2-char-id⟧(9) ? "WebP" : 171 === ⟦2-char-id⟧(0) && 75 === ⟦2-char-id⟧(1) && 84 === ⟦2-char-id⟧(2) && 88 === ⟦2-char-id⟧(3) ? "KTX2" : "non-PNG"
     }
```

</details>

<details>
<summary>Hunk 5 · Change · +1 / -1</summary>

```diff
@@ -108,7 +108,7 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return /^[aeiou]/i.test(⟦2-char-id⟧) ? `an ${JJ}` : `a ${JJ}`
+      return /^[aeiou]/i.test(⟦2-char-id⟧) ? `an ${BB}` : `a ${BB}`
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 6 · Change · +6 / -6</summary>

```diff
@@ -120,27 +120,27 @@
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.bufferViews) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[⟦2-char-id⟧];
       if (!⟦2-char-id⟧ || !⟦2-char-id⟧ || 0 !== ⟦2-char-id⟧.buffer) return null;
-      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.byteOffset) && void 0 !== ⟦2-char-id⟧ ? UJ : 0;
+      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.byteOffset) && void 0 !== ⟦2-char-id⟧ ? yB : 0;
       return !⟦2-char-id⟧(⟦2-char-id⟧) || !⟦2-char-id⟧(⟦2-char-id⟧.byteLength) || ⟦2-char-id⟧ + ⟦2-char-id⟧.byteLength > ⟦2-char-id⟧.byteLength ? null : ⟦2-char-id⟧.subarray(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧.byteLength)
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧.s[⟦2-char-id⟧.type],
-        ⟦2-char-id⟧ = ⟦2-char-id⟧.e[⟦2-char-id⟧.componentType];
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧.r[⟦2-char-id⟧.type],
+        ⟦2-char-id⟧ = ⟦2-char-id⟧.c[⟦2-char-id⟧.componentType];
       if (!⟦2-char-id⟧ || !⟦2-char-id⟧ || !Number.isInteger(⟦2-char-id⟧.count) || ⟦2-char-id⟧.count < 0) return !1;
       if (void 0 === ⟦2-char-id⟧.bufferView) return !0;
       const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.bufferViews) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[⟦2-char-id⟧.bufferView],
-        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.byteOffset) && void 0 !== ⟦2-char-id⟧ ? UJ : 0;
+        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.byteOffset) && void 0 !== ⟦2-char-id⟧ ? yB : 0;
       if (!⟦2-char-id⟧ || !⟦2-char-id⟧(⟦2-char-id⟧) || ⟦2-char-id⟧ % ⟦2-char-id⟧ !== 0) return !1;
       const ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧,
-        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.byteStride) && void 0 !== ⟦2-char-id⟧ ? eJ : ⟦2-char-id⟧;
+        ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.byteStride) && void 0 !== ⟦2-char-id⟧ ? pB : ⟦2-char-id⟧;
       if (⟦2-char-id⟧ < ⟦2-char-id⟧) return !1;
       return (0 === ⟦2-char-id⟧.count ? 0 : ⟦2-char-id⟧ + ⟦2-char-id⟧ * (⟦2-char-id⟧.count - 1) + ⟦2-char-id⟧) <= ⟦2-char-id⟧.byteLength
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return ⟦2-char-id⟧ > ⟦2-char-id⟧.fileBytes ? `is ${(JJ/XJ).toFixed(1)} MiB (the limit is ${UJ.fileBytes/XJ} MiB)` : null
+      return ⟦2-char-id⟧ > ⟦2-char-id⟧.fileBytes ? `is ${(BB/lB).toFixed(1)} MiB (the limit is ${yB.fileBytes/lB} MiB)` : null
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 7 · Change · +7 / -7</summary>

```diff
@@ -175,23 +175,23 @@
                   let [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
                   return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
                 }))) return !0;
-              for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.accessors) && void 0 !== ⟦2-char-id⟧ ? hJ : []) {
+              for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.accessors) && void 0 !== ⟦2-char-id⟧ ? kB : []) {
                 var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-                if (Number.isInteger(⟦2-char-id⟧.count) && (!Number.isSafeInteger(⟦2-char-id⟧.count) || Object.is(⟦2-char-id⟧.count, -0)) || ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.min) && void 0 !== ⟦2-char-id⟧ ? DJ : void 0, ⟦2-char-id⟧) || ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.max) && void 0 !== ⟦2-char-id⟧ ? sJ : void 0, ⟦2-char-id⟧)) return !0
-              }
-              for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.scenes) && void 0 !== ⟦2-char-id⟧ ? nJ : []) {
+                if (Number.isInteger(⟦2-char-id⟧.count) && (!Number.isSafeInteger(⟦2-char-id⟧.count) || Object.is(⟦2-char-id⟧.count, -0)) || ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.min) && void 0 !== ⟦2-char-id⟧ ? LB : void 0, ⟦2-char-id⟧) || ⟦2-char-id⟧(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.max) && void 0 !== ⟦2-char-id⟧ ? OB : void 0, ⟦2-char-id⟧)) return !0
+              }
+              for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.scenes) && void 0 !== ⟦2-char-id⟧ ? DB : []) {
                 var ⟦2-char-id⟧;
                 if (⟦2-char-id⟧(⟦2-char-id⟧.nodes, ⟦2-char-id⟧)) return !0
               }
               let ⟦2-char-id⟧ = 0;
-              for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.nodes) && void 0 !== ⟦2-char-id⟧ ? fJ : []) {
+              for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.nodes) && void 0 !== ⟦2-char-id⟧ ? HB : []) {
                 var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
                 if (⟦2-char-id⟧(⟦2-char-id⟧.children, ⟦2-char-id⟧)) return !0;
-                ⟦2-char-id⟧ += null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.children) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? xJ : 0
+                ⟦2-char-id⟧ += null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.children) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? EB : 0
               }
               if (⟦2-char-id⟧ > ⟦2-char-id⟧) return !0;
               let ⟦2-char-id⟧ = 0;
-              for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.meshes) && void 0 !== ⟦2-char-id⟧ ? EJ : []) {
+              for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.meshes) && void 0 !== ⟦2-char-id⟧ ? tB : []) {
                 var ⟦2-char-id⟧;
                 if (!Array.isArray(⟦2-char-id⟧.primitives)) return !0;
                 if (⟦2-char-id⟧ += ⟦2-char-id⟧.primitives.length, ⟦2-char-id⟧ > ⟦2-char-id⟧) return !0;
```

</details>

<details>
<summary>Hunk 8 · Change · +17 / -17</summary>

```diff
@@ -204,45 +204,45 @@
               return !1
             }(⟦2-char-id⟧, ⟦2-char-id⟧)) return ⟦2-char-id⟧;
           const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.asset) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.version;
-          if ("string" !== typeof ⟦2-char-id⟧ || !/^2\.\d+/.test(⟦2-char-id⟧)) return `uses glTF version ${null!==CJ&&void 0!==CJ?CJ:"(none)"}`;
+          if ("string" !== typeof ⟦2-char-id⟧ || !/^2\.\d+/.test(⟦2-char-id⟧)) return `uses glTF version ${null!==hB&&void 0!==hB?hB:"(none)"}`;
           const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.asset) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.minVersion;
-          if (void 0 !== ⟦2-char-id⟧ && "2.0" !== ⟦2-char-id⟧) return `uses glTF version ${uJ}`;
-          for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.extensionsRequired) && void 0 !== ⟦2-char-id⟧ ? iJ : []) {
+          if (void 0 !== ⟦2-char-id⟧ && "2.0" !== ⟦2-char-id⟧) return `uses glTF version ${CB}`;
+          for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.extensionsRequired) && void 0 !== ⟦2-char-id⟧ ? GB : []) {
             var ⟦2-char-id⟧;
-            if (!⟦2-char-id⟧.has(⟦2-char-id⟧)) return `requires the glTF extension ${FJ}`
+            if (!⟦2-char-id⟧.has(⟦2-char-id⟧)) return `requires the glTF extension ${VB}`
           }
           if (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.animations) && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.length) return "has animations";
           if (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.skins) && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.length) return "uses skins";
-          const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.buffers) && void 0 !== ⟦2-char-id⟧ ? vJ : [];
+          const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.buffers) && void 0 !== ⟦2-char-id⟧ ? mB : [];
           for (const [⟦2-char-id⟧, ⟦2-char-id⟧] of ⟦2-char-id⟧.entries()) {
             if (void 0 !== ⟦2-char-id⟧.uri) return ⟦2-char-id⟧;
             if (⟦2-char-id⟧ > 0 || !⟦2-char-id⟧) return ⟦2-char-id⟧
           }
-          for (const [⟦2-char-id⟧, ⟦2-char-id⟧] of(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.bufferViews) && void 0 !== ⟦2-char-id⟧ ? LJ : []).entries()) {
+          for (const [⟦2-char-id⟧, ⟦2-char-id⟧] of(null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.bufferViews) && void 0 !== ⟦2-char-id⟧ ? xB : []).entries()) {
             var ⟦2-char-id⟧;
             if (!⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) || !⟦2-char-id⟧(⟦2-char-id⟧)) return ⟦2-char-id⟧
           }
-          const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.accessors) && void 0 !== ⟦2-char-id⟧ ? bJ : [];
+          const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.accessors) && void 0 !== ⟦2-char-id⟧ ? FB : [];
           for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
             if (void 0 !== ⟦2-char-id⟧.sparse) return "uses sparse accessors";
             const ⟦2-char-id⟧ = Number.isInteger(⟦2-char-id⟧.count) ? ⟦2-char-id⟧(⟦2-char-id⟧.count, ⟦2-char-id⟧.accessorElements, "elements in an accessor") : null;
             if (⟦2-char-id⟧) return ⟦2-char-id⟧;
             if (!⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)) return ⟦2-char-id⟧
           }
-          const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.scenes) && void 0 !== ⟦2-char-id⟧ ? wJ : [];
-          if (1 !== ⟦2-char-id⟧.length) return `has ${BJ.length} scenes`;
-          const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.D)(⟦2-char-id⟧);
+          const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.scenes) && void 0 !== ⟦2-char-id⟧ ? KB : [];
+          if (1 !== ⟦2-char-id⟧.length) return `has ${AB.length} scenes`;
+          const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.x)(⟦2-char-id⟧);
           if (void 0 !== ⟦2-char-id⟧ && 0 !== ⟦2-char-id⟧) return ⟦2-char-id⟧;
-          const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.nodes) && void 0 !== ⟦2-char-id⟧ ? WJ : [],
-            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.meshes) && void 0 !== ⟦2-char-id⟧ ? gJ : [],
-            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.materials) && void 0 !== ⟦2-char-id⟧ ? HJ : [],
-            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.textures) && void 0 !== ⟦2-char-id⟧ ? PJ : [],
-            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.images) && void 0 !== ⟦2-char-id⟧ ? kJ : [],
-            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.length, ⟦2-char-id⟧.nodes, "nodes")) && void 0 !== ⟦2-char-id⟧ ? zJ : ⟦2-char-id⟧(⟦2-char-id⟧.length, ⟦2-char-id⟧.meshes, "meshes")) && void 0 !== ⟦2-char-id⟧ ? dJ : ⟦2-char-id⟧(⟦2-char-id⟧.length, ⟦2-char-id⟧.materials, "materials")) && void 0 !== ⟦2-char-id⟧ ? pJ : ⟦2-char-id⟧(⟦2-char-id⟧.length, ⟦2-char-id⟧.images, "images");
+          const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.nodes) && void 0 !== ⟦2-char-id⟧ ? rB : [],
+            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.meshes) && void 0 !== ⟦2-char-id⟧ ? IB : [],
+            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.materials) && void 0 !== ⟦2-char-id⟧ ? cB : [],
+            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.textures) && void 0 !== ⟦2-char-id⟧ ? SB : [],
+            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.images) && void 0 !== ⟦2-char-id⟧ ? PB : [],
+            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.length, ⟦2-char-id⟧.nodes, "nodes")) && void 0 !== ⟦2-char-id⟧ ? aB : ⟦2-char-id⟧(⟦2-char-id⟧.length, ⟦2-char-id⟧.meshes, "meshes")) && void 0 !== ⟦2-char-id⟧ ? RB : ⟦2-char-id⟧(⟦2-char-id⟧.length, ⟦2-char-id⟧.materials, "materials")) && void 0 !== ⟦2-char-id⟧ ? QB : ⟦2-char-id⟧(⟦2-char-id⟧.length, ⟦2-char-id⟧.images, "images");
           if (⟦2-char-id⟧) return ⟦2-char-id⟧;
           const ⟦2-char-id⟧ = new Set;
           for (const ⟦2-char-id⟧ of ⟦2-char-id⟧)
-            for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.children) && void 0 !== ⟦2-char-id⟧ ? ec : []) {
+            for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.children) && void 0 !== ⟦2-char-id⟧ ? pT : []) {
               var ⟦2-char-id⟧;
               if (!⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.length) || ⟦2-char-id⟧.has(⟦2-char-id⟧)) return ⟦2-char-id⟧;
               ⟦2-char-id⟧.add(⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 9 · Change · +2 / -2</summary>

```diff
@@ -250,9 +250,9 @@
           const ⟦2-char-id⟧ = new Set,
             ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
               var ⟦2-char-id⟧;
-              return !⟦2-char-id⟧.has(⟦2-char-id⟧) && (⟦2-char-id⟧.add(⟦2-char-id⟧), (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧].children) && void 0 !== ⟦2-char-id⟧ ? cJ : []).every(⟦2-char-id⟧))
+              return !⟦2-char-id⟧.has(⟦2-char-id⟧) && (⟦2-char-id⟧.add(⟦2-char-id⟧), (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧].children) && void 0 !== ⟦2-char-id⟧ ? TB : []).every(⟦2-char-id⟧))
             };
-          for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[0].nodes) && void 0 !== ⟦2-char-id⟧ ? qc : []) {
+          for (const ⟦2-char-id⟧ of null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[0].nodes) && void 0 !== ⟦2-char-id⟧ ? YT : []) {
             var ⟦2-char-id⟧;
             if (!⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.length) || ⟦2-char-id⟧.has(⟦2-char-id⟧) || !⟦2-char-id⟧(⟦2-char-id⟧)) return ⟦2-char-id⟧
           }
```

</details>

<details>
<summary>Hunk 10 · Change · +2 / -2</summary>

```diff
@@ -278,9 +278,9 @@
             if (0 === ⟦2-char-id⟧.primitives.length) return ⟦2-char-id⟧;
             for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.primitives) {
               var ⟦2-char-id⟧, ⟦2-char-id⟧;
-              const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.mode) && void 0 !== ⟦2-char-id⟧ ? sc : 4;
+              const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.mode) && void 0 !== ⟦2-char-id⟧ ? OT : 4;
               var ⟦2-char-id⟧;
-              if (4 !== ⟦2-char-id⟧ && 0 !== ⟦2-char-id⟧) return `uses ${null!==(Gc=nJ[UJ])&&void 0!==Gc?Gc:`mode ${⟦2-char-id⟧}`} primitives`;
+              if (4 !== ⟦2-char-id⟧ && 0 !== ⟦2-char-id⟧) return `uses ${null!==(uT=DB[yB])&&void 0!==uT?uT:`mode ${⟦2-char-id⟧}`} primitives`;
               if (void 0 !== ⟦2-char-id⟧.targets) return "uses morph targets";
               if (void 0 !== ⟦2-char-id⟧.material && !⟦2-char-id⟧(⟦2-char-id⟧.material, ⟦2-char-id⟧.length)) return ⟦2-char-id⟧;
               const ⟦2-char-id⟧ = ⟦2-char-id⟧ ? null === (⟦2-char-id⟧ = ⟦2-char-id⟧.extensions) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.KHR_draco_mesh_compression : void 0;
```

</details>

<details>
<summary>Hunk 11 · Change · +2 / -2</summary>

```diff
@@ -298,9 +298,9 @@
                 if (/^(JOINTS|WEIGHTS)_\d+$/.test(⟦2-char-id⟧)) return "uses skins";
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
                   ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
-                if (⟦2-char-id⟧ && (⟦2-char-id⟧.componentType !== ⟦2-char-id⟧ || ⟦2-char-id⟧.normalized || ⟦2-char-id⟧.type !== ⟦2-char-id⟧)) return `stores ${JJ} as ${EJ(ZJ)}`;
+                if (⟦2-char-id⟧ && (⟦2-char-id⟧.componentType !== ⟦2-char-id⟧ || ⟦2-char-id⟧.normalized || ⟦2-char-id⟧.type !== ⟦2-char-id⟧)) return `stores ${BB} as ${tB(dB)}`;
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
-                if (⟦2-char-id⟧ && (⟦2-char-id⟧.type !== ⟦2-char-id⟧.type || !⟦2-char-id⟧.componentTypes.includes(⟦2-char-id⟧.componentType) || ⟦2-char-id⟧.componentType === ⟦2-char-id⟧ === !!⟦2-char-id⟧.normalized)) return `stores ${JJ} as ${EJ(ZJ)}`;
+                if (⟦2-char-id⟧ && (⟦2-char-id⟧.type !== ⟦2-char-id⟧.type || !⟦2-char-id⟧.componentTypes.includes(⟦2-char-id⟧.componentType) || ⟦2-char-id⟧.componentType === ⟦2-char-id⟧ === !!⟦2-char-id⟧.normalized)) return `stores ${BB} as ${tB(dB)}`;
                 if (⟦2-char-id⟧.has(⟦2-char-id⟧) && ⟦2-char-id⟧.count !== ⟦2-char-id⟧) return "has vertex attributes of different lengths"
               }
               if (⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 12 · Change · +1 / -1</summary>

```diff
@@ -317,7 +317,7 @@
                   ]);
                   const ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧.bufferView);
                   if (⟦2-char-id⟧ && (⟦2-char-id⟧[0] !== ⟦2-char-id⟧ || ⟦2-char-id⟧[1] !== ⟦2-char-id⟧)) return ⟦2-char-id⟧;
-                  ⟦2-char-id⟧.set(⟦2-char-id⟧.bufferView, null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? cJ : [⟦2-char-id⟧, ⟦2-char-id⟧])
+                  ⟦2-char-id⟧.set(⟦2-char-id⟧.bufferView, null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? TB : [⟦2-char-id⟧, ⟦2-char-id⟧])
                 }
               }
               let ⟦2-char-id⟧ = ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 13 · Change · +1 / -1</summary>

```diff
@@ -327,7 +327,7 @@
                 if ("SCALAR" !== ⟦2-char-id⟧.type) return ⟦2-char-id⟧;
                 if (5121 === ⟦2-char-id⟧.componentType) return "uses 8-bit indices";
                 var ⟦2-char-id⟧;
-                if (5123 !== ⟦2-char-id⟧.componentType && 5125 !== ⟦2-char-id⟧.componentType) return `stores indices as ${null!==(fc=FJ.i[JJ.componentType])&&void 0!==fc?fc:JJ.componentType}`;
+                if (5123 !== ⟦2-char-id⟧.componentType && 5125 !== ⟦2-char-id⟧.componentType) return `stores indices as ${null!==(HT=VB.g[BB.componentType])&&void 0!==HT?HT:BB.componentType}`;
                 if (!⟦2-char-id⟧ && void 0 === ⟦2-char-id⟧.bufferView) return ⟦2-char-id⟧;
                 ⟦2-char-id⟧ = ⟦2-char-id⟧.count
               }
```

</details>

<details>
<summary>Hunk 14 · Change · +3 / -3</summary>

```diff
@@ -342,18 +342,18 @@
             if (void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.has(⟦2-char-id⟧))
               for (const ⟦2-char-id⟧ of ⟦2-char-id⟧[⟦2-char-id⟧].primitives) ⟦2-char-id⟧++, ⟦2-char-id⟧ += ⟦2-char-id⟧[⟦2-char-id⟧.attributes.POSITION].count, void 0 !== ⟦2-char-id⟧.indices && (⟦2-char-id⟧ += ⟦2-char-id⟧[⟦2-char-id⟧.indices].count)
           }
-          const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.vertices, "vertices")) && void 0 !== ⟦2-char-id⟧ ? OJ : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.indices, "indices")) && void 0 !== ⟦2-char-id⟧ ? NJ : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.primitives, "primitives");
+          const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.vertices, "vertices")) && void 0 !== ⟦2-char-id⟧ ? XB : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.indices, "indices")) && void 0 !== ⟦2-char-id⟧ ? ZB : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.primitives, "primitives");
           if (⟦2-char-id⟧) return ⟦2-char-id⟧;
           for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
             var ⟦2-char-id⟧, ⟦2-char-id⟧;
             if (void 0 !== ⟦2-char-id⟧.emissiveTexture) return "uses an emissive texture";
-            const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.alphaMode) && void 0 !== ⟦2-char-id⟧ ? Qc : "OPAQUE";
+            const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.alphaMode) && void 0 !== ⟦2-char-id⟧ ? NT : "OPAQUE";
             if ("OPAQUE" !== ⟦2-char-id⟧ && "MASK" !== ⟦2-char-id⟧ && "BLEND" !== ⟦2-char-id⟧) return ⟦2-char-id⟧;
             const ⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.pbrMetallicRoughness) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.baseColorTexture;
             if (⟦2-char-id⟧) {
               var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
               const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.extensionsUsed) && void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.includes("KHR_texture_transform") ? null === (⟦2-char-id⟧ = ⟦2-char-id⟧.extensions) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.KHR_texture_transform : void 0;
-              if (0 !== (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.texCoord) && void 0 !== ⟦2-char-id⟧ ? yc : 0) || 0 !== (null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.texCoord) && void 0 !== ⟦2-char-id⟧ ? Sc : 0)) return "uses a second UV set";
+              if (0 !== (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.texCoord) && void 0 !== ⟦2-char-id⟧ ? MT : 0) || 0 !== (null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.texCoord) && void 0 !== ⟦2-char-id⟧ ? zT : 0)) return "uses a second UV set";
               const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.index];
               if (!⟦2-char-id⟧ || !⟦2-char-id⟧(⟦2-char-id⟧.source, ⟦2-char-id⟧.length) || void 0 !== ⟦2-char-id⟧.sampler && !⟦2-char-id⟧(⟦2-char-id⟧.sampler, null === (⟦2-char-id⟧ = ⟦2-char-id⟧.samplers) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length)) return ⟦2-char-id⟧
             }
```

</details>

<details>
<summary>Hunk 15 · Change · +3 / -3</summary>

```diff
@@ -365,13 +365,13 @@
             if (!⟦2-char-id⟧) return ⟦2-char-id⟧;
             if ("image/png" !== ⟦2-char-id⟧.mimeType) {
               var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-              return `has ${yJ(null!==(Mc=null!==(bc={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(wc=FJ.mimeType)&&void 0!==wc?wc:""])&&void 0!==bc?bc:FJ.mimeType)&&void 0!==Mc?Mc:"untyped")} image`
+              return `has ${MB(null!==(UT=null!==(FT={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(KT=VB.mimeType)&&void 0!==KT?KT:""])&&void 0!==FT?FT:VB.mimeType)&&void 0!==UT?UT:"untyped")} image`
             }
-            if (!⟦2-char-id⟧(⟦2-char-id⟧)) return `has ${yJ(VJ(ZJ))} image`;
+            if (!⟦2-char-id⟧(⟦2-char-id⟧)) return `has ${MB(fB(dB))} image`;
             const ⟦2-char-id⟧ = new DataView(⟦2-char-id⟧.buffer, ⟦2-char-id⟧.byteOffset, ⟦2-char-id⟧.byteLength),
               ⟦2-char-id⟧ = ⟦2-char-id⟧.getUint32(16),
               ⟦2-char-id⟧ = ⟦2-char-id⟧.getUint32(20);
-            if (⟦2-char-id⟧ > ⟦2-char-id⟧.imageSide || ⟦2-char-id⟧ > ⟦2-char-id⟧.imageSide) return `has a ${XJ} \xd7 ${jJ} image (the limit is ${UJ.imageSide})`
+            if (⟦2-char-id⟧ > ⟦2-char-id⟧.imageSide || ⟦2-char-id⟧ > ⟦2-char-id⟧.imageSide) return `has a ${lB} \xd7 ${gB} image (the limit is ${yB.imageSide})`
           }
           return null
         }(⟦2-char-id⟧, ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 16 · Change · +14 / -14</summary>

```diff
@@ -387,31 +387,31 @@
         const {
           json: ⟦2-char-id⟧,
           bin: ⟦2-char-id⟧
-        } = (0, ⟦2-char-id⟧.F)(⟦2-char-id⟧);
+        } = (0, ⟦2-char-id⟧.y)(⟦2-char-id⟧);
         return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
       } catch (⟦2-char-id⟧) {
-        if (⟦2-char-id⟧ instanceof ⟦2-char-id⟧.q) return ⟦2-char-id⟧.reason;
+        if (⟦2-char-id⟧ instanceof ⟦2-char-id⟧.n) return ⟦2-char-id⟧.reason;
         throw ⟦2-char-id⟧
       }
     }
   },
-  8620: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  8634: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      A: () => ⟦2-char-id⟧,
-      D: () => ⟦2-char-id⟧,
-      F: () => ⟦2-char-id⟧,
-      e: () => ⟦2-char-id⟧,
-      i: () => ⟦2-char-id⟧,
+      c: () => ⟦2-char-id⟧,
+      g: () => ⟦2-char-id⟧,
+      j: () => ⟦2-char-id⟧,
       l: () => ⟦2-char-id⟧,
-      o: () => ⟦2-char-id⟧,
-      q: () => ⟦2-char-id⟧,
-      s: () => ⟦2-char-id⟧,
-      w: () => ⟦2-char-id⟧
+      n: () => ⟦2-char-id⟧,
+      r: () => ⟦2-char-id⟧,
+      u: () => ⟦2-char-id⟧,
+      v: () => ⟦2-char-id⟧,
+      x: () => ⟦2-char-id⟧,
+      y: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8625);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8640);
     class ⟦2-char-id⟧ extends Error {
       constructor(⟦2-char-id⟧) {
-        super(`GLB refused: it ${JJ}`), this.reason = ⟦2-char-id⟧, this.name = "GlbRefused"
+        super(`GLB refused: it ${BB}`), this.reason = ⟦2-char-id⟧, this.name = "GlbRefused"
       }
     }
     class ⟦2-char-id⟧ extends Error {
```

</details>

<details>
<summary>Hunk 17 · Change · +2 / -2</summary>

```diff
@@ -428,8 +428,8 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧ instanceof Uint8Array ? JJ : new Uint8Array(⟦2-char-id⟧),
-        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧);
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧ instanceof Uint8Array ? BB : new Uint8Array(⟦2-char-id⟧),
+        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧);
       if (null === ⟦2-char-id⟧) throw new ⟦2-char-id⟧(⟦2-char-id⟧);
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.json,
         {
```

</details>

<details>
<summary>Hunk 18 · Change · +1 / -1</summary>

```diff
@@ -443,7 +443,7 @@
         if (⟦2-char-id⟧ + 8 > ⟦2-char-id⟧) throw new ⟦2-char-id⟧(⟦2-char-id⟧);
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.getUint32(⟦2-char-id⟧, !0),
           ⟦2-char-id⟧ = ⟦2-char-id⟧.getUint32(⟦2-char-id⟧ + 4, !0);
-        if (⟦2-char-id⟧ + 8 + ⟦2-char-id⟧ > ⟦2-char-id⟧ || ⟦2-char-id⟧ === ⟦2-char-id⟧.e || ⟦2-char-id⟧ === ⟦2-char-id⟧ && -1 !== ⟦2-char-id⟧) throw new ⟦2-char-id⟧(⟦2-char-id⟧);
+        if (⟦2-char-id⟧ + 8 + ⟦2-char-id⟧ > ⟦2-char-id⟧ || ⟦2-char-id⟧ === ⟦2-char-id⟧.c || ⟦2-char-id⟧ === ⟦2-char-id⟧ && -1 !== ⟦2-char-id⟧) throw new ⟦2-char-id⟧(⟦2-char-id⟧);
         ⟦2-char-id⟧ === ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧ + 8, ⟦2-char-id⟧ = ⟦2-char-id⟧), ⟦2-char-id⟧ += 8 + ⟦2-char-id⟧
       }
       let ⟦2-char-id⟧ = null;
```

</details>

<details>
<summary>Hunk 19 · Change · +1 / -1</summary>

```diff
@@ -471,7 +471,7 @@
     async function ⟦2-char-id⟧(⟦2-char-id⟧) {
       if (⟦2-char-id⟧.startsWith("data:")) return ⟦2-char-id⟧(⟦2-char-id⟧);
       const ⟦2-char-id⟧ = await fetch(⟦2-char-id⟧);
-      if (!⟦2-char-id⟧.ok) throw new ⟦2-char-id⟧(`fetching ${JJ} failed: ${cJ.status} ${cJ.statusText}`);
+      if (!⟦2-char-id⟧.ok) throw new ⟦2-char-id⟧(`fetching ${BB} failed: ${TB.status} ${TB.statusText}`);
       return await ⟦2-char-id⟧.arrayBuffer()
     }
     const ⟦2-char-id⟧ = {
```

</details>

<details>
<summary>Hunk 20 · Change · +3 / -3</summary>

```diff
@@ -512,11 +512,11 @@
         ["COLOR_0", "color"]
       ]
   },
-  8625: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  8640: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+      c: () => ⟦2-char-id⟧,
       e: () => ⟦2-char-id⟧,
-      f: () => ⟦2-char-id⟧,
-      g: () => ⟦2-char-id⟧
+      f: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = 1179937895,
       ⟦2-char-id⟧ = 1313821514;
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/182.js</code> · modified · +223 / -223</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +28 / -28</summary>

```diff
@@ -1,57 +1,57 @@
 export const ⟦2-char-id⟧ = 182;
 export const ids = [182];
 export const modules = {
-  35935: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  35880: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       b: () => ⟦2-char-id⟧,
-      c: () => ⟦2-char-id⟧
+      e: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(3737),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1326),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(47),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(5817),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3728),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1184),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1703),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1675),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1329),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1086),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(35944),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(926),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(3741),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1317),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(5839),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3725),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1173),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1679),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1657),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1324),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1078),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(35886),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(933),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
       ⟦2-char-id⟧ = ⟦2-char-id⟧(1201),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(942),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1181),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(946),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1165),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
     const ⟦2-char-id⟧ = "SleepingOverlay";
 
     function ⟦2-char-id⟧() {
       const {
         t: ⟦2-char-id⟧
-      } = (0, ⟦2-char-id⟧.F)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(0), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(!1), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(!1), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null);
+      } = (0, ⟦2-char-id⟧.z)(), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(null), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), [⟦2-char-id⟧, ⟦2-char-id⟧] = (0, ⟦2-char-id⟧.useState)(!1), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(0), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(!1), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(!1), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(), ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useRef)(null);
 
       function ⟦2-char-id⟧() {
-        const ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? nJ : "Rested Speed";
-        ⟦2-char-id⟧.gameBridge.send("wakeUp", ⟦2-char-id⟧ ? JJ : null), ⟦2-char-id⟧.current = null, ⟦2-char-id⟧(!1), ⟦2-char-id⟧(null), ⟦2-char-id⟧(1), ⟦2-char-id⟧(!1), ⟦2-char-id⟧(!1)
+        const ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? DB : "Rested Speed";
+        ⟦2-char-id⟧.gameBridge.send("wakeUp", ⟦2-char-id⟧ ? BB : null), ⟦2-char-id⟧.current = null, ⟦2-char-id⟧(!1), ⟦2-char-id⟧(null), ⟦2-char-id⟧(1), ⟦2-char-id⟧(!1), ⟦2-char-id⟧(!1)
       }
 
       function ⟦2-char-id⟧() {
         return !⟦2-char-id⟧ && (⟦2-char-id⟧(), !0)
       }
-      return (0, ⟦2-char-id⟧.i)("PlayerPhysicsTypeUpdate", (⟦2-char-id⟧ => {
-        ⟦2-char-id⟧ !== ⟦2-char-id⟧.current && (⟦2-char-id⟧.current = ⟦2-char-id⟧, ⟦2-char-id⟧ === ⟦2-char-id⟧.s.SLEEPING ? (⟦2-char-id⟧.current || (⟦2-char-id⟧.current = ⟦2-char-id⟧.gameBridge.lookup("cameraZoom", null), ⟦2-char-id⟧.current = !0), ⟦2-char-id⟧.current = !0, ⟦2-char-id⟧.gameBridge.send("setCameraZoom", 3), ⟦2-char-id⟧(!0), ⟦2-char-id⟧(function() {
+      return (0, ⟦2-char-id⟧.e)("PlayerPhysicsTypeUpdate", (⟦2-char-id⟧ => {
+        ⟦2-char-id⟧ !== ⟦2-char-id⟧.current && (⟦2-char-id⟧.current = ⟦2-char-id⟧, ⟦2-char-id⟧ === ⟦2-char-id⟧.q.SLEEPING ? (⟦2-char-id⟧.current || (⟦2-char-id⟧.current = ⟦2-char-id⟧.gameBridge.lookup("cameraZoom", null), ⟦2-char-id⟧.current = !0), ⟦2-char-id⟧.current = !0, ⟦2-char-id⟧.gameBridge.send("setCameraZoom", 3), ⟦2-char-id⟧(!0), ⟦2-char-id⟧(function() {
           for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.gameBridge.lookup("blocksStandingOn", null)) {
-            if (⟦2-char-id⟧.c.leafBeds.includes(⟦2-char-id⟧)) return console.log(`Found leaf bed: ${JJ}`), 1;
-            if (⟦2-char-id⟧.c.woolBeds.includes(⟦2-char-id⟧)) return console.log(`Found woold bed: ${JJ}`), 2;
-            if (⟦2-char-id⟧.c.strongBeds.includes(⟦2-char-id⟧)) return console.log(`Found strong bed ${JJ}`), 3
+            if (⟦2-char-id⟧.e.leafBeds.includes(⟦2-char-id⟧)) return console.log(`Found leaf bed: ${BB}`), 1;
+            if (⟦2-char-id⟧.e.woolBeds.includes(⟦2-char-id⟧)) return console.log(`Found woold bed: ${BB}`), 2;
+            if (⟦2-char-id⟧.e.strongBeds.includes(⟦2-char-id⟧)) return console.log(`Found strong bed ${BB}`), 3
           }
           return 1
         }())) : (⟦2-char-id⟧.current = !1, ⟦2-char-id⟧(!1), ⟦2-char-id⟧(null), ⟦2-char-id⟧(1)))
       })), (0, ⟦2-char-id⟧.useEffect)((() => () => {
-        (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧)
+        (0, ⟦2-char-id⟧.l)(⟦2-char-id⟧)
       }), []), (0, ⟦2-char-id⟧.useEffect)((() => {
-        ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧) : ((0, ⟦2-char-id⟧.e)(⟦2-char-id⟧), ⟦2-char-id⟧.current && (⟦2-char-id⟧.gameBridge.send("setCameraZoom", ⟦2-char-id⟧.current), ⟦2-char-id⟧.current = !1))
-      }), [⟦2-char-id⟧]), (0, ⟦2-char-id⟧.p)("overlay", ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+        ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.p)(⟦2-char-id⟧) : ((0, ⟦2-char-id⟧.l)(⟦2-char-id⟧), ⟦2-char-id⟧.current && (⟦2-char-id⟧.gameBridge.send("setCameraZoom", ⟦2-char-id⟧.current), ⟦2-char-id⟧.current = !1))
+      }), [⟦2-char-id⟧]), (0, ⟦2-char-id⟧.y)("overlay", ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.b, {
         className: "SleepingOverlay",
         "data-camera-keeper": "",
         in: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 2 · Change · +3 / -3</summary>

```diff
@@ -67,13 +67,13 @@
             className: "SleepingOverlayBody",
             children: [(0, ⟦2-char-id⟧.jsx)("div", {
               className: "SleepingOverlayPerkList",
-              children: ⟦2-char-id⟧.i.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧, {
+              children: ⟦2-char-id⟧.j.map((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧, {
                 restedEffect: ⟦2-char-id⟧,
-                YX: ⟦2-char-id⟧,
+                oo: ⟦2-char-id⟧,
                 setChosenRestedEffect: ⟦2-char-id⟧,
                 children: [(0, ⟦2-char-id⟧.jsxs)("div", {
                   className: "SleepingOverlayPerkTitle",
-                  children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                  children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                     text: [{
                       icon: ⟦2-char-id⟧
                     }]
```

</details>

<details>
<summary>Hunk 3 · Change · +3 / -3</summary>

```diff
@@ -92,15 +92,15 @@
               }), (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.d, {
                 className: "SleepingOverlayWakeUpButton",
                 onClick: ⟦2-char-id⟧ => {
-                  ⟦2-char-id⟧ ? ⟦2-char-id⟧() : (⟦2-char-id⟧(!0), (0, ⟦2-char-id⟧.bb)((() => {
+                  ⟦2-char-id⟧ ? ⟦2-char-id⟧() : (⟦2-char-id⟧(!0), (0, ⟦2-char-id⟧.$)((() => {
                     ⟦2-char-id⟧(!1), ⟦2-char-id⟧(!0)
                   }), !0)), ⟦2-char-id⟧.stopPropagation()
                 },
                 loading: ⟦2-char-id⟧,
                 children: [!⟦2-char-id⟧ && (0, ⟦2-char-id⟧.jsxs)(⟦2-char-id⟧.Fragment, {
-                  children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.c, {
+                  children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                     name: "film"
-                  }), " ", JJ("classicGame:watchAdToGetRestedPerk")]
+                  }), " ", BB("classicGame:watchAdToGetRestedPerk")]
                 }), ⟦2-char-id⟧ && ⟦2-char-id⟧("classicGame:wakeUp")]
               }), (0, ⟦2-char-id⟧.jsxs)("div", {
                 className: "SleepingOverlayPerkBottomSide",
```

</details>

<details>
<summary>Hunk 4 · Change · +1 / -1</summary>

```diff
@@ -108,7 +108,7 @@
                   className: ⟦2-char-id⟧()("SleepingOverlayBedIcon", {
                     SleepingOverlayBedIconActive: 1 === ⟦2-char-id⟧
                   }),
-                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                     text: [{
                       icon: "Leaf Bed"
                     }]
```

</details>

<details>
<summary>Hunk 5 · Change · +1 / -1</summary>

```diff
@@ -117,7 +117,7 @@
                   className: ⟦2-char-id⟧()("SleepingOverlayBedIcon", {
                     SleepingOverlayBedIconActive: 2 === ⟦2-char-id⟧
                   }),
-                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                     text: [{
                       icon: "Red Bed"
                     }]
```

</details>

<details>
<summary>Hunk 6 · Change · +1 / -1</summary>

```diff
@@ -126,7 +126,7 @@
                   className: ⟦2-char-id⟧()("SleepingOverlayBedIcon", {
                     SleepingOverlayBedIconActive: 3 === ⟦2-char-id⟧
                   }),
-                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.d, {
+                  children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.e, {
                     text: [{
                       icon: "Red Strongbed"
                     }]
```

</details>

<details>
<summary>Hunk 7 · Change · +2 / -2</summary>

```diff
@@ -142,10 +142,10 @@
       let {
         children: ⟦2-char-id⟧,
         restedEffect: ⟦2-char-id⟧,
-        YX: ⟦2-char-id⟧,
+        oo: ⟦2-char-id⟧,
         setChosenRestedEffect: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      return ⟦2-char-id⟧ === ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.m, {
+      return ⟦2-char-id⟧ === ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.k, {
         onClick: ⟦2-char-id⟧ => {
           ⟦2-char-id⟧.stopPropagation()
         },
```

</details>

<details>
<summary>Hunk 8 · Change · +24 / -24</summary>

```diff
@@ -158,32 +158,32 @@
       })
     }))
   },
-  39341: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  39301: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧
+      b: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(13),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(17),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3758),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(227),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1528),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(7477),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3766),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8058),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(7517),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(7494),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(7525),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1569),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(7527),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(7963),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8095),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8066),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8104),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1703),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(7473),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8011),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8004),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8061);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(21),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(24),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3762),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(270),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1507),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(7511),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3767),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8079),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(7535),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(7515),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(7543),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1564),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(7552),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(7997),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8134),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8094),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8140),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1679),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(7500),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8038),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8031),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8085);
     class ⟦2-char-id⟧ {
       constructor() {
         this.lostAtMs = null
```

</details>

<details>
<summary>Hunk 9 · Change · +1 / -1</summary>

```diff
@@ -223,7 +223,7 @@
       },
       ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
         let ⟦2-char-id⟧ = null;
-        const ⟦2-char-id⟧ = new ⟦2-char-id⟧.d,
+        const ⟦2-char-id⟧ = new ⟦2-char-id⟧.e,
           ⟦2-char-id⟧ = () => {
             ⟦2-char-id⟧ && (((⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
               switch (⟦2-char-id⟧.kind) {
```

</details>

<details>
<summary>Hunk 10 · Change · +23 / -23</summary>

```diff
@@ -264,43 +264,43 @@
             })(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
           };
         return {
-          update: (⟦2-char-id⟧, AJ, jJ, ⟦2-char-id⟧) => {
+          update: (⟦2-char-id⟧, JB, gB, ⟦2-char-id⟧) => {
             var ⟦2-char-id⟧;
             const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧.contextActionInputs()),
-              ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[0]) && void 0 !== ⟦2-char-id⟧ ? DJ : ⟦2-char-id⟧;
-            (0, ⟦2-char-id⟧.d)((0, ⟦2-char-id⟧.g)(⟦2-char-id⟧) ? nJ : null);
-            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧);
+              ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[0]) && void 0 !== ⟦2-char-id⟧ ? LB : ⟦2-char-id⟧;
+            (0, ⟦2-char-id⟧.d)((0, ⟦2-char-id⟧.f)(⟦2-char-id⟧) ? DB : null);
+            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)(⟦2-char-id⟧);
             (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧);
-            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)("actionButton");
+            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)("actionButton");
             if (⟦2-char-id⟧) {
               const ⟦2-char-id⟧ = ⟦2-char-id⟧.update(⟦2-char-id⟧.wasPressed(⟦2-char-id⟧), ⟦2-char-id⟧.isHeld(⟦2-char-id⟧), ⟦2-char-id⟧, ⟦2-char-id⟧);
-              "tap" === ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, [⟦2-char-id⟧], ⟦2-char-id⟧) : "hold" === ⟦2-char-id⟧ && (⟦2-char-id⟧.e.consumeButton(⟦2-char-id⟧), ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧.i, ⟦2-char-id⟧))
+              "tap" === ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, [⟦2-char-id⟧], ⟦2-char-id⟧) : "hold" === ⟦2-char-id⟧ && (⟦2-char-id⟧.d.consumeButton(⟦2-char-id⟧), ⟦2-char-id⟧.h.yH(⟦2-char-id⟧.l, ⟦2-char-id⟧))
             } else ⟦2-char-id⟧.release(), ⟦2-char-id⟧.wasPressed(⟦2-char-id⟧) && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, [⟦2-char-id⟧], ⟦2-char-id⟧);
-            ⟦2-char-id⟧ && ⟦2-char-id⟧ - ⟦2-char-id⟧.atMs >= 40 && !⟦2-char-id⟧.heldBy.some((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.K)(⟦2-char-id⟧.frame.values, ⟦2-char-id⟧))) && ⟦2-char-id⟧()
+            ⟦2-char-id⟧ && ⟦2-char-id⟧ - ⟦2-char-id⟧.atMs >= 40 && !⟦2-char-id⟧.heldBy.some((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.H)(⟦2-char-id⟧.frame.values, ⟦2-char-id⟧))) && ⟦2-char-id⟧()
           },
           pressPicked: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
-            ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, [(0, ⟦2-char-id⟧.j)("menuConfirm"), (0, ⟦2-char-id⟧.j)("actionButton")], performance.now())
+            ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, [(0, ⟦2-char-id⟧.m)("menuConfirm"), (0, ⟦2-char-id⟧.m)("actionButton")], performance.now())
           },
           release: () => {
             ⟦2-char-id⟧.release(), ⟦2-char-id⟧(), (0, ⟦2-char-id⟧.d)(null), (0, ⟦2-char-id⟧.e)(!1)
           }
         }
       };
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(7465);
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(39333),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8024),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(7515),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8145);
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(39325),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8151),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39347),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8128),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8029),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8034),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8038),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(7972);
-    const ⟦2-char-id⟧ = () => ⟦2-char-id⟧.e[(0, ⟦2-char-id⟧.k)().tapHoldTime].wheelMs,
-      ⟦2-char-id⟧ = () => ((0, ⟦2-char-id⟧.b)(), new Event("controllerMenuKey")),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(7493);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(39297),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8045),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(7532),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8178);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(39293),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8183),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(39306),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8166),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8050),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8058),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8067),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8006);
+    const ⟦2-char-id⟧ = () => ⟦2-char-id⟧.c[(0, ⟦2-char-id⟧.h)().tapHoldTime].wheelMs,
+      ⟦2-char-id⟧ = () => ((0, ⟦2-char-id⟧.c)(), new Event("controllerMenuKey")),
       ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => new ⟦2-char-id⟧((() => {
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.bodies();
         return {
```

</details>

<details>
<summary>Hunk 11 · Change · +2 / -2</summary>

```diff
@@ -330,8 +330,8 @@
           sprintHeld: !1
         };
         let ⟦2-char-id⟧ = ⟦2-char-id⟧;
-        const ⟦2-char-id⟧ = new ⟦2-char-id⟧.b,
-          ⟦2-char-id⟧ = ⟦2-char-id⟧.i.subscribe("appManagerUpdated|activeInputDevice", (⟦2-char-id⟧ => {
+        const ⟦2-char-id⟧ = new ⟦2-char-id⟧.e,
+          ⟦2-char-id⟧ = ⟦2-char-id⟧.h.subscribe("appManagerUpdated|activeInputDevice", (⟦2-char-id⟧ => {
             ⟦2-char-id⟧.deviceChanged(⟦2-char-id⟧)
           }));
         let ⟦2-char-id⟧ = null,
```

</details>

<details>
<summary>Hunk 12 · Change · +3 / -3</summary>

```diff
@@ -342,10 +342,10 @@
         let ⟦2-char-id⟧ = !1;
         const ⟦2-char-id⟧ = new ⟦2-char-id⟧,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.look,
-          ⟦2-char-id⟧ = new ⟦2-char-id⟧.d,
-          ⟦2-char-id⟧ = new ⟦2-char-id⟧.d,
+          ⟦2-char-id⟧ = new ⟦2-char-id⟧.e,
+          ⟦2-char-id⟧ = new ⟦2-char-id⟧.e,
           ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧.i.subscribe(⟦2-char-id⟧.j, (⟦2-char-id⟧ => {
+          ⟦2-char-id⟧ = ⟦2-char-id⟧.h.subscribe(⟦2-char-id⟧.o, (⟦2-char-id⟧ => {
             ⟦2-char-id⟧.pressPicked(⟦2-char-id⟧.bodies(), ⟦2-char-id⟧)
           })),
           ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.primaryFireDown()), ((⟦2-char-id⟧, ⟦2-char-id⟧) => {
```

</details>

<details>
<summary>Hunk 13 · Change · +4 / -4</summary>

```diff
@@ -357,12 +357,12 @@
         let ⟦2-char-id⟧ = !1,
           ⟦2-char-id⟧ = !1,
           ⟦2-char-id⟧ = !1;
-        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧.$),
-          ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧.$),
-          ⟦2-char-id⟧ = new ⟦2-char-id⟧.d;
+        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧.Y),
+          ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧.Y),
+          ⟦2-char-id⟧ = new ⟦2-char-id⟧.e;
         let ⟦2-char-id⟧ = !1;
         const ⟦2-char-id⟧ = () => {
-            ⟦2-char-id⟧.reset(), ⟦2-char-id⟧.reset(), ⟦2-char-id⟧.release(), (0, ⟦2-char-id⟧.e)(!1), ⟦2-char-id⟧.release(), ⟦2-char-id⟧.cancel(), (0, ⟦2-char-id⟧.c)(!1), ⟦2-char-id⟧.cancel(), ⟦2-char-id⟧.release(), ⟦2-char-id⟧.release(), ⟦2-char-id⟧.release(), ⟦2-char-id⟧()
+            ⟦2-char-id⟧.reset(), ⟦2-char-id⟧.reset(), ⟦2-char-id⟧.release(), (0, ⟦2-char-id⟧.i)(!1), ⟦2-char-id⟧.release(), ⟦2-char-id⟧.cancel(), (0, ⟦2-char-id⟧.g)(!1), ⟦2-char-id⟧.cancel(), ⟦2-char-id⟧.release(), ⟦2-char-id⟧.release(), ⟦2-char-id⟧.release(), ⟦2-char-id⟧()
           },
           ⟦2-char-id⟧ = function() {
             let ⟦2-char-id⟧ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
```

</details>

<details>
<summary>Hunk 14 · Change · +40 / -40</summary>

```diff
@@ -379,98 +379,98 @@
           },
           ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             let ⟦2-char-id⟧ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.k)(),
-              ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧, ⟦2-char-id⟧.moveDeadzone),
-              ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)("sprint");
-            ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.q)(⟦2-char-id⟧, {
+            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.h)(),
+              ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.moveDeadzone),
+              ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)("sprint");
+            ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.t)(⟦2-char-id⟧, {
               sprintPressed: ⟦2-char-id⟧.wasPressed(⟦2-char-id⟧),
               magnitude: ⟦2-char-id⟧.magnitude,
               autoSprint: ⟦2-char-id⟧.autoSprint,
               nowMs: ⟦2-char-id⟧
             }), ⟦2-char-id⟧.running = ⟦2-char-id⟧.running, ⟦2-char-id⟧.sprintHeld = ⟦2-char-id⟧.isHeld(⟦2-char-id⟧), ⟦2-char-id⟧.x = ⟦2-char-id⟧.x, ⟦2-char-id⟧.y = ⟦2-char-id⟧.y, ⟦2-char-id⟧.magnitude = ⟦2-char-id⟧.speed, ⟦2-char-id⟧.headingOffset = ⟦2-char-id⟧.headingOffset, ⟦2-char-id⟧ = ⟦2-char-id⟧.magnitude > 0;
-            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)("jump");
+            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)("jump");
             if (⟦2-char-id⟧.jumpHeld = ⟦2-char-id⟧.isHeld(⟦2-char-id⟧), ⟦2-char-id⟧.jumpPressed = ⟦2-char-id⟧.wasPressed(⟦2-char-id⟧), ⟦2-char-id⟧.jumpPressed && ⟦2-char-id⟧.bodies().jumpDown(), ⟦2-char-id⟧) return void ⟦2-char-id⟧.move(⟦2-char-id⟧, null);
-            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)("sneak"),
+            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)("sneak"),
               ⟦2-char-id⟧ = ⟦2-char-id⟧.filter({
                 sneakHeld: ⟦2-char-id⟧.isHeld(⟦2-char-id⟧),
                 sneakPressed: ⟦2-char-id⟧.wasPressed(⟦2-char-id⟧),
-                sneakTogglePressed: ⟦2-char-id⟧.wasPressed((0, ⟦2-char-id⟧.j)("sneakToggle"))
+                sneakTogglePressed: ⟦2-char-id⟧.wasPressed((0, ⟦2-char-id⟧.m)("sneakToggle"))
               }, ⟦2-char-id⟧);
             ⟦2-char-id⟧.move(⟦2-char-id⟧, {
-              ...GJ,
+              ...uB,
               mode: ⟦2-char-id⟧.sneakMode
             })
           },
           ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
-            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)("chat");
-            if ("off" === (0, ⟦2-char-id⟧.k)().quickChat) return void(⟦2-char-id⟧.wasPressed(⟦2-char-id⟧) && (⟦2-char-id⟧.e.consumeButton(⟦2-char-id⟧), ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧.c)));
+            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)("chat");
+            if ("off" === (0, ⟦2-char-id⟧.h)().quickChat) return void(⟦2-char-id⟧.wasPressed(⟦2-char-id⟧) && (⟦2-char-id⟧.d.consumeButton(⟦2-char-id⟧), ⟦2-char-id⟧.h.yH(⟦2-char-id⟧.d)));
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.update(⟦2-char-id⟧.wasPressed(⟦2-char-id⟧), ⟦2-char-id⟧.isHeld(⟦2-char-id⟧), ⟦2-char-id⟧, ⟦2-char-id⟧());
-            "tap" === ⟦2-char-id⟧ || "hold" === ⟦2-char-id⟧ && null === (0, ⟦2-char-id⟧.e)() ? ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧.c) : "hold" === ⟦2-char-id⟧ && (⟦2-char-id⟧.e.consumeButton(⟦2-char-id⟧), ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧.o))
+            "tap" === ⟦2-char-id⟧ || "hold" === ⟦2-char-id⟧ && null === (0, ⟦2-char-id⟧.d)() ? ⟦2-char-id⟧.h.yH(⟦2-char-id⟧.d) : "hold" === ⟦2-char-id⟧ && (⟦2-char-id⟧.d.consumeButton(⟦2-char-id⟧), ⟦2-char-id⟧.h.yH(⟦2-char-id⟧.p))
           },
           ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
             ((⟦2-char-id⟧, ⟦2-char-id⟧) => {
-              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)(),
-                ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)("emoteWheel");
-              if ("wheel" === (0, ⟦2-char-id⟧.k)().emoteButton) return ⟦2-char-id⟧.wasPressed(⟦2-char-id⟧) && (⟦2-char-id⟧.e.consumeButton(⟦2-char-id⟧), ⟦2-char-id⟧.i.Uf("requestEmoteWheelPadOpen", !0)), (0, ⟦2-char-id⟧.d)() !== ⟦2-char-id⟧;
+              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)(),
+                ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)("emoteWheel");
+              if ("wheel" === (0, ⟦2-char-id⟧.h)().emoteButton) return ⟦2-char-id⟧.wasPressed(⟦2-char-id⟧) && (⟦2-char-id⟧.d.consumeButton(⟦2-char-id⟧), ⟦2-char-id⟧.h.yH("requestEmoteWheelPadOpen", !0)), (0, ⟦2-char-id⟧.e)() !== ⟦2-char-id⟧;
               const ⟦2-char-id⟧ = ⟦2-char-id⟧.update(⟦2-char-id⟧.wasPressed(⟦2-char-id⟧), ⟦2-char-id⟧.isHeld(⟦2-char-id⟧), ⟦2-char-id⟧, ⟦2-char-id⟧());
-              return "tap" === ⟦2-char-id⟧ ? ⟦2-char-id⟧.i.Uf("requestEmoteRepeatLast") : "hold" === ⟦2-char-id⟧ && (⟦2-char-id⟧.e.consumeButton(⟦2-char-id⟧), ⟦2-char-id⟧.i.Uf("requestEmoteWheelPadOpen", !1)), (0, ⟦2-char-id⟧.d)() !== ⟦2-char-id⟧
-            })(⟦2-char-id⟧, ⟦2-char-id⟧) || ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.wasPressed((0, ⟦2-char-id⟧.j)("inventory")) && (⟦2-char-id⟧.e.consumeButton((0, ⟦2-char-id⟧.j)("inventory")), (0, ⟦2-char-id⟧.t)(⟦2-char-id⟧(), "inventory", ⟦2-char-id⟧.hasFullInventory())), ⟦2-char-id⟧.wasPressed((0, ⟦2-char-id⟧.j)("pause")) && (⟦2-char-id⟧.e.consumeButton((0, ⟦2-char-id⟧.j)("pause")), (0, ⟦2-char-id⟧.b)() === ⟦2-char-id⟧.m.SOCIAL ? (0, ⟦2-char-id⟧.s)(⟦2-char-id⟧(), ⟦2-char-id⟧.m.SOCIAL) : (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧())), ⟦2-char-id⟧.wasPressed((0, ⟦2-char-id⟧.j)("leaderboard")) && !(0, ⟦2-char-id⟧.c)() && (⟦2-char-id⟧.e.consumeButton((0, ⟦2-char-id⟧.j)("leaderboard")), ((⟦2-char-id⟧, ⟦2-char-id⟧) => {
-              if ("shop" === (0, ⟦2-char-id⟧.e)()) return ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧.j), void(0, ⟦2-char-id⟧.s)(⟦2-char-id⟧, ⟦2-char-id⟧.m.SHOP, !0);
+              return "tap" === ⟦2-char-id⟧ ? ⟦2-char-id⟧.h.yH("requestEmoteRepeatLast") : "hold" === ⟦2-char-id⟧ && (⟦2-char-id⟧.d.consumeButton(⟦2-char-id⟧), ⟦2-char-id⟧.h.yH("requestEmoteWheelPadOpen", !1)), (0, ⟦2-char-id⟧.e)() !== ⟦2-char-id⟧
+            })(⟦2-char-id⟧, ⟦2-char-id⟧) || ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.wasPressed((0, ⟦2-char-id⟧.m)("inventory")) && (⟦2-char-id⟧.d.consumeButton((0, ⟦2-char-id⟧.m)("inventory")), (0, ⟦2-char-id⟧.u)(⟦2-char-id⟧(), "inventory", ⟦2-char-id⟧.hasFullInventory())), ⟦2-char-id⟧.wasPressed((0, ⟦2-char-id⟧.m)("pause")) && (⟦2-char-id⟧.d.consumeButton((0, ⟦2-char-id⟧.m)("pause")), (0, ⟦2-char-id⟧.e)() === ⟦2-char-id⟧.m.SOCIAL ? (0, ⟦2-char-id⟧.s)(⟦2-char-id⟧(), ⟦2-char-id⟧.m.SOCIAL) : (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧())), ⟦2-char-id⟧.wasPressed((0, ⟦2-char-id⟧.m)("leaderboard")) && !(0, ⟦2-char-id⟧.g)() && (⟦2-char-id⟧.d.consumeButton((0, ⟦2-char-id⟧.m)("leaderboard")), ((⟦2-char-id⟧, ⟦2-char-id⟧) => {
+              if ("shop" === (0, ⟦2-char-id⟧.e)()) return ⟦2-char-id⟧.h.yH(⟦2-char-id⟧.k), void(0, ⟦2-char-id⟧.s)(⟦2-char-id⟧, ⟦2-char-id⟧.m.SHOP, !0);
               (0, ⟦2-char-id⟧.s)(⟦2-char-id⟧, ⟦2-char-id⟧.m.LOBBY_LEADERBOARD, ⟦2-char-id⟧)
             })(⟦2-char-id⟧(), ⟦2-char-id⟧.hasLobbyLeaderboard()))
           },
           ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.bodies();
             ((⟦2-char-id⟧, ⟦2-char-id⟧) => {
-              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)("attack"),
+              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)("attack"),
                 ⟦2-char-id⟧ = ⟦2-char-id⟧.wasPressed(⟦2-char-id⟧);
-              ⟦2-char-id⟧ && !⟦2-char-id⟧.isLatched() && (⟦2-char-id⟧ = ⟦2-char-id⟧.targetsBlock()), ⟦2-char-id⟧.update(⟦2-char-id⟧, ⟦2-char-id⟧.isHeld(⟦2-char-id⟧), ⟦2-char-id⟧, "toggle" === (0, ⟦2-char-id⟧.k)().attackMode), ⟦2-char-id⟧.isLatched() && ⟦2-char-id⟧ ? ⟦2-char-id⟧.update(⟦2-char-id⟧.targetsBlock(), ⟦2-char-id⟧) && ⟦2-char-id⟧.unlatch() : ⟦2-char-id⟧.reset(), (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧.isLatched())
-            })(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.update(⟦2-char-id⟧.wasPressed((0, ⟦2-char-id⟧.j)("use")), ⟦2-char-id⟧.isHeld((0, ⟦2-char-id⟧.j)("use")), ⟦2-char-id⟧, !1), ⟦2-char-id⟧.update(⟦2-char-id⟧.isHeld((0, ⟦2-char-id⟧.j)("hotbarPrevious")), ⟦2-char-id⟧) && ⟦2-char-id⟧.scrollHotbar(-1), ⟦2-char-id⟧.update(⟦2-char-id⟧.isHeld((0, ⟦2-char-id⟧.j)("hotbarNext")), ⟦2-char-id⟧) && ⟦2-char-id⟧.scrollHotbar(1), ((⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
-              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)("perspective"),
-                ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)("Am"),
+              ⟦2-char-id⟧ && !⟦2-char-id⟧.isLatched() && (⟦2-char-id⟧ = ⟦2-char-id⟧.targetsBlock()), ⟦2-char-id⟧.update(⟦2-char-id⟧, ⟦2-char-id⟧.isHeld(⟦2-char-id⟧), ⟦2-char-id⟧, "toggle" === (0, ⟦2-char-id⟧.h)().attackMode), ⟦2-char-id⟧.isLatched() && ⟦2-char-id⟧ ? ⟦2-char-id⟧.update(⟦2-char-id⟧.targetsBlock(), ⟦2-char-id⟧) && ⟦2-char-id⟧.unlatch() : ⟦2-char-id⟧.reset(), (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧.isLatched())
+            })(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.update(⟦2-char-id⟧.wasPressed((0, ⟦2-char-id⟧.m)("use")), ⟦2-char-id⟧.isHeld((0, ⟦2-char-id⟧.m)("use")), ⟦2-char-id⟧, !1), ⟦2-char-id⟧.update(⟦2-char-id⟧.isHeld((0, ⟦2-char-id⟧.m)("hotbarPrevious")), ⟦2-char-id⟧) && ⟦2-char-id⟧.scrollHotbar(-1), ⟦2-char-id⟧.update(⟦2-char-id⟧.isHeld((0, ⟦2-char-id⟧.m)("hotbarNext")), ⟦2-char-id⟧) && ⟦2-char-id⟧.scrollHotbar(1), ((⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)("perspective"),
+                ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)("aE"),
                 ⟦2-char-id⟧ = ⟦2-char-id⟧.pickBlockAllowed();
-              (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧ && !⟦2-char-id⟧ && ⟦2-char-id⟧.targetsBlock());
+              (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧ && !⟦2-char-id⟧ && ⟦2-char-id⟧.targetsBlock());
               const ⟦2-char-id⟧ = () => {
-                ⟦2-char-id⟧.Am() && (⟦2-char-id⟧ = !0, (0, ⟦2-char-id⟧.e)(!1))
+                ⟦2-char-id⟧.aE() && (⟦2-char-id⟧ = !0, (0, ⟦2-char-id⟧.i)(!1))
               };
               if (!⟦2-char-id⟧ || ⟦2-char-id⟧ !== ⟦2-char-id⟧) return ⟦2-char-id⟧.release(), ⟦2-char-id⟧.wasPressed(⟦2-char-id⟧) && ⟦2-char-id⟧.swapCameraZoom(), void(⟦2-char-id⟧ && ⟦2-char-id⟧.wasPressed(⟦2-char-id⟧) && ⟦2-char-id⟧());
               const ⟦2-char-id⟧ = ⟦2-char-id⟧.update(⟦2-char-id⟧.wasPressed(⟦2-char-id⟧), ⟦2-char-id⟧.isHeld(⟦2-char-id⟧), ⟦2-char-id⟧, ⟦2-char-id⟧());
               "tap" === ⟦2-char-id⟧ ? ⟦2-char-id⟧() : "hold" === ⟦2-char-id⟧ && ⟦2-char-id⟧.swapCameraZoom()
             })(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ((⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
-              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)("drop");
+              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)("drop");
               if (⟦2-char-id⟧.wasPressed(⟦2-char-id⟧)) {
                 ⟦2-char-id⟧.dropItem(!1);
-                const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.k)();
-                "off" !== ⟦2-char-id⟧.buttonRepeat && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.e[⟦2-char-id⟧.tapHoldTime].dropStackMs, (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧))
+                const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.h)();
+                "off" !== ⟦2-char-id⟧.buttonRepeat && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.c[⟦2-char-id⟧.tapHoldTime].dropStackMs, (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧))
               }
               null !== ⟦2-char-id⟧ && (!⟦2-char-id⟧.isHeld(⟦2-char-id⟧) || ⟦2-char-id⟧.selectedSlotEmpty() ? ⟦2-char-id⟧() : ⟦2-char-id⟧ - ⟦2-char-id⟧ >= ⟦2-char-id⟧ && (⟦2-char-id⟧(), ⟦2-char-id⟧.dropItem(!0)))
             })(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.update(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧()), ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
           },
-          ⟦2-char-id⟧ = ⟦2-char-id⟧.e.register({
+          ⟦2-char-id⟧ = ⟦2-char-id⟧.d.register({
             name: "gameplay",
             isActive: () => {
-              const ⟦2-char-id⟧ = ⟦2-char-id⟧ && "keyboardMouse" === ⟦2-char-id⟧.d.get("activeInputDevice") && !(0, ⟦2-char-id⟧.A)(),
-                ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.h)() ? [⟦2-char-id⟧.b] : [];
-              return ((0, ⟦2-char-id⟧.h)() || ⟦2-char-id⟧) && (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧) && ⟦2-char-id⟧.hasPlayer()
+              const ⟦2-char-id⟧ = ⟦2-char-id⟧ && "keyboardMouse" === ⟦2-char-id⟧.d.get("activeInputDevice") && !(0, ⟦2-char-id⟧.H)(),
+                ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.k)() ? [⟦2-char-id⟧.e] : [];
+              return ((0, ⟦2-char-id⟧.k)() || ⟦2-char-id⟧) && (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧) && ⟦2-char-id⟧.hasPlayer()
             },
             onFrame: ⟦2-char-id⟧ => {
               const ⟦2-char-id⟧ = performance.now(),
-                ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.k)(),
-                ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.s)(⟦2-char-id⟧, (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧, (0, ⟦2-char-id⟧.j)("pause"), (0, ⟦2-char-id⟧.c)().isSupported())),
-                ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧.swapSticks);
-              return (0, ⟦2-char-id⟧.h)() ? (⟦2-char-id⟧ = !1, (0, ⟦2-char-id⟧.h)() ? (⟦2-char-id⟧ = !1, ⟦2-char-id⟧.update(⟦2-char-id⟧.look, ⟦2-char-id⟧, ⟦2-char-id⟧.isHeld((0, ⟦2-char-id⟧.j)("use"))), ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.move, ⟦2-char-id⟧), void ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)) : (⟦2-char-id⟧ || (⟦2-char-id⟧ = !0, ⟦2-char-id⟧.lostToPadScreen(), ⟦2-char-id⟧()), void ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧))) : (⟦2-char-id⟧ || (⟦2-char-id⟧(), ⟦2-char-id⟧ = !0), void ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.move, ⟦2-char-id⟧))
+                ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.h)(),
+                ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.w)(⟦2-char-id⟧, (0, ⟦2-char-id⟧.l)(⟦2-char-id⟧, (0, ⟦2-char-id⟧.m)("pause"), (0, ⟦2-char-id⟧.e)().isSupported())),
+                ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)(⟦2-char-id⟧, ⟦2-char-id⟧.swapSticks);
+              return (0, ⟦2-char-id⟧.k)() ? (⟦2-char-id⟧ = !1, (0, ⟦2-char-id⟧.d)() ? (⟦2-char-id⟧ = !1, ⟦2-char-id⟧.update(⟦2-char-id⟧.look, ⟦2-char-id⟧, ⟦2-char-id⟧.isHeld((0, ⟦2-char-id⟧.m)("use"))), ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.move, ⟦2-char-id⟧), void ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)) : (⟦2-char-id⟧ || (⟦2-char-id⟧ = !0, ⟦2-char-id⟧.lostToPadScreen(), ⟦2-char-id⟧()), void ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧))) : (⟦2-char-id⟧ || (⟦2-char-id⟧(), ⟦2-char-id⟧ = !0), void ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.move, ⟦2-char-id⟧))
             },
             onDeactivate: ⟦2-char-id⟧ => {
-              (0, ⟦2-char-id⟧.h)() && ⟦2-char-id⟧.lostToPadScreen(), ⟦2-char-id⟧(⟦2-char-id⟧)
+              (0, ⟦2-char-id⟧.k)() && ⟦2-char-id⟧.lostToPadScreen(), ⟦2-char-id⟧(⟦2-char-id⟧)
             },
             onPeekFrame: ⟦2-char-id⟧ => {
-              (0, ⟦2-char-id⟧.h)() && (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧.e) && ⟦2-char-id⟧.hasPlayer() ? ⟦2-char-id⟧(⟦2-char-id⟧, (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, (0, ⟦2-char-id⟧.k)().swapSticks).move, performance.now(), !0) : ⟦2-char-id⟧()
+              (0, ⟦2-char-id⟧.k)() && (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧.h) && ⟦2-char-id⟧.hasPlayer() ? ⟦2-char-id⟧(⟦2-char-id⟧, (0, ⟦2-char-id⟧.j)(⟦2-char-id⟧, (0, ⟦2-char-id⟧.h)().swapSticks).move, performance.now(), !0) : ⟦2-char-id⟧()
             }
           }),
-          ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧),
+          ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧),
           ⟦2-char-id⟧ = (() => {
-            const ⟦2-char-id⟧ = ⟦2-char-id⟧.i.subscribe(⟦2-char-id⟧.d, (⟦2-char-id⟧ => {
-              !⟦2-char-id⟧ && (0, ⟦2-char-id⟧.h)() && "inGame" === ⟦2-char-id⟧.d.get("gameState") && ⟦2-char-id⟧.i.Uf("showBottomMessage", {
+            const ⟦2-char-id⟧ = ⟦2-char-id⟧.h.subscribe(⟦2-char-id⟧.b, (⟦2-char-id⟧ => {
+              !⟦2-char-id⟧ && (0, ⟦2-char-id⟧.k)() && "inGame" === ⟦2-char-id⟧.d.get("gameState") && ⟦2-char-id⟧.h.yH("showBottomMessage", {
                 message: [{
                   translationKey: "controller:disconnected"
                 }],
```

</details>

<details>
<summary>Hunk 15 · Change · +28 / -28</summary>

```diff
@@ -479,65 +479,65 @@
               })
             }));
             return () => {
-              ⟦2-char-id⟧.i.unsubscribe(⟦2-char-id⟧)
+              ⟦2-char-id⟧.h.unsubscribe(⟦2-char-id⟧)
             }
           })();
         return () => {
-          ⟦2-char-id⟧(), ⟦2-char-id⟧.uninstall(), (0, ⟦2-char-id⟧.i)(!1), (0, ⟦2-char-id⟧.e)(!1), ⟦2-char-id⟧.i.unsubscribe(⟦2-char-id⟧), ⟦2-char-id⟧.i.unsubscribe(⟦2-char-id⟧), ⟦2-char-id⟧(), ⟦2-char-id⟧(), ⟦2-char-id⟧(), ⟦2-char-id⟧.uninstall()
+          ⟦2-char-id⟧(), ⟦2-char-id⟧.uninstall(), (0, ⟦2-char-id⟧.i)(!1), (0, ⟦2-char-id⟧.i)(!1), ⟦2-char-id⟧.h.unsubscribe(⟦2-char-id⟧), ⟦2-char-id⟧.h.unsubscribe(⟦2-char-id⟧), ⟦2-char-id⟧(), ⟦2-char-id⟧(), ⟦2-char-id⟧(), ⟦2-char-id⟧.uninstall()
         }
       }
   },
-  39333: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  39297: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      b: () => ⟦2-char-id⟧,
-      c: () => ⟦2-char-id⟧,
-      e: () => ⟦2-char-id⟧
+      e: () => ⟦2-char-id⟧,
+      g: () => ⟦2-char-id⟧,
+      h: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1184),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3758),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8079),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(35935),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1173),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3762),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8122),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(35880),
       ⟦2-char-id⟧ = ⟦2-char-id⟧(1201),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1077),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(7527),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8066),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8104);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1074),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(7552),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8094),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8140);
     const ⟦2-char-id⟧ = {
-        emoteWheel: ⟦2-char-id⟧.e,
-        quickChatWheel: ⟦2-char-id⟧.d,
-        actionWheel: ⟦2-char-id⟧.m
+        emoteWheel: ⟦2-char-id⟧.i,
+        quickChatWheel: ⟦2-char-id⟧.e,
+        actionWheel: ⟦2-char-id⟧.r
       },
       ⟦2-char-id⟧ = Object.keys(⟦2-char-id⟧),
       ⟦2-char-id⟧ = "dead",
-      ⟦2-char-id⟧ = ⟦2-char-id⟧ => (0, ⟦2-char-id⟧.d)().includes(⟦2-char-id⟧),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧ => (0, ⟦2-char-id⟧.i)().includes(⟦2-char-id⟧),
       ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
-        const ⟦2-char-id⟧ = [(0, ⟦2-char-id⟧.n)(⟦2-char-id⟧, (() => ⟦2-char-id⟧.hasPlayer() && ⟦2-char-id⟧.isPlayerDead())), (0, ⟦2-char-id⟧.n)("sleeping", (() => ⟦2-char-id⟧(⟦2-char-id⟧.c))), (0, ⟦2-char-id⟧.n)("turnstile", (() => ⟦2-char-id⟧(⟦2-char-id⟧.d))), (0, ⟦2-char-id⟧.n)("videoAd", ⟦2-char-id⟧.I), (0, ⟦2-char-id⟧.n)("replay", (() => (0, ⟦2-char-id⟧.c)() || ⟦2-char-id⟧.isReplayMode())), (0, ⟦2-char-id⟧.n)("freeCamera", (() => ⟦2-char-id⟧.isFreeCameraOn())), ...Object.entries(⟦2-char-id⟧).map((⟦2-char-id⟧ => {
+        const ⟦2-char-id⟧ = [(0, ⟦2-char-id⟧.l)(⟦2-char-id⟧, (() => ⟦2-char-id⟧.hasPlayer() && ⟦2-char-id⟧.isPlayerDead())), (0, ⟦2-char-id⟧.l)("sleeping", (() => ⟦2-char-id⟧(⟦2-char-id⟧.e))), (0, ⟦2-char-id⟧.l)("turnstile", (() => ⟦2-char-id⟧(⟦2-char-id⟧.h))), (0, ⟦2-char-id⟧.l)("videoAd", ⟦2-char-id⟧.H), (0, ⟦2-char-id⟧.l)("replay", (() => (0, ⟦2-char-id⟧.g)() || ⟦2-char-id⟧.isReplayMode())), (0, ⟦2-char-id⟧.l)("freeCamera", (() => ⟦2-char-id⟧.isFreeCameraOn())), ...Object.entries(⟦2-char-id⟧).map((⟦2-char-id⟧ => {
           let [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧;
-          return (0, ⟦2-char-id⟧.n)(⟦2-char-id⟧, ⟦2-char-id⟧)
+          return (0, ⟦2-char-id⟧.l)(⟦2-char-id⟧, ⟦2-char-id⟧)
         }))];
         return () => {
           for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧()
         }
       }
   },
-  39325: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  39293: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      b: () => ⟦2-char-id⟧,
       e: () => ⟦2-char-id⟧,
       f: () => ⟦2-char-id⟧,
-      g: () => ⟦2-char-id⟧,
       j: () => ⟦2-char-id⟧,
-      n: () => ⟦2-char-id⟧,
-      q: () => ⟦2-char-id⟧,
-      s: () => ⟦2-char-id⟧
+      l: () => ⟦2-char-id⟧,
+      p: () => ⟦2-char-id⟧,
+      r: () => ⟦2-char-id⟧,
+      t: () => ⟦2-char-id⟧,
+      w: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(7473);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(7500);
     class ⟦2-char-id⟧ {
       constructor() {
         this.fullTiltSinceMs = null
       }
       update(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.lookDeadzone);
+        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.k)(⟦2-char-id⟧, ⟦2-char-id⟧.lookDeadzone);
         if (Math.hypot(⟦2-char-id⟧.x, ⟦2-char-id⟧.y) < .9 || Math.abs(⟦2-char-id⟧.x) < Math.abs(⟦2-char-id⟧.y)) return this.fullTiltSinceMs = null, 1;
         null === this.fullTiltSinceMs && (this.fullTiltSinceMs = ⟦2-char-id⟧);
         const ⟦2-char-id⟧ = (⟦2-char-id⟧ = ⟦2-char-id⟧.lookSensitivityX, Math.min(1, 100 / ⟦2-char-id⟧));
```

</details>

<details>
<summary>Hunk 16 · Change · +1 / -1</summary>

```diff
@@ -556,7 +556,7 @@
               yawBoost: ⟦2-char-id⟧ = 1,
               aiming: ⟦2-char-id⟧ = !1
             } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.i)((0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧.lookDeadzone), ⟦2-char-id⟧.lookCurve),
+            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.i)((0, ⟦2-char-id⟧.k)(⟦2-char-id⟧, ⟦2-char-id⟧.lookDeadzone), ⟦2-char-id⟧.lookCurve),
               ⟦2-char-id⟧ = 220 * Math.PI / 180,
               ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.aimLookSensitivity / 100 : 1,
               ⟦2-char-id⟧ = ⟦2-char-id⟧.lookSensitivityX / 100 * ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 17 · Change · +2 / -2</summary>

```diff
@@ -573,8 +573,8 @@
       ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
         const ⟦2-char-id⟧ = Math.max(0, Math.min(250, ⟦2-char-id⟧)) / 1⟦2-char-id⟧;
         return {
-          bK: ⟦2-char-id⟧.yawRadPerSec * ⟦2-char-id⟧,
-          zK: ⟦2-char-id⟧.pitchRadPerSec * ⟦2-char-id⟧
+          pU: ⟦2-char-id⟧.yawRadPerSec * ⟦2-char-id⟧,
+          kU: ⟦2-char-id⟧.pitchRadPerSec * ⟦2-char-id⟧
         }
       },
       ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ ? {
```

</details>

<details>
<summary>Hunk 18 · Change · +1 / -1</summary>

```diff
@@ -585,7 +585,7 @@
         look: ⟦2-char-id⟧.rightStick
       },
       ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
-        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧),
+        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.k)(⟦2-char-id⟧, ⟦2-char-id⟧),
           ⟦2-char-id⟧ = Math.min(1, Math.hypot(⟦2-char-id⟧.x, ⟦2-char-id⟧.y));
         return {
           magnitude: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 19 · Change · +1 / -1</summary>

```diff
@@ -602,7 +602,7 @@
           autoSprint: ⟦2-char-id⟧,
           nowMs: ⟦2-char-id⟧
         } = ⟦2-char-id⟧;
-        const ⟦2-char-id⟧ = ⟦2-char-id⟧ ? eJ : ⟦2-char-id⟧.latchedAtMs,
+        const ⟦2-char-id⟧ = ⟦2-char-id⟧ ? pB : ⟦2-char-id⟧.latchedAtMs,
           ⟦2-char-id⟧ = (⟦2-char-id⟧ => {
             let {
               running: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 20 · Change · +4 / -4</summary>

```diff
@@ -624,17 +624,17 @@
       },
       ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ && ⟦2-char-id⟧.gyroAiming && "button" === ⟦2-char-id⟧.gyroActivation && ⟦2-char-id⟧.gyroButton !== ⟦2-char-id⟧ ? ⟦2-char-id⟧.gyroButton : null,
       ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ ? {
-        ...JJ,
+        ...BB,
         isHeld: ⟦2-char-id⟧ => ⟦2-char-id⟧ !== ⟦2-char-id⟧ && ⟦2-char-id⟧.isHeld(⟦2-char-id⟧),
         wasPressed: ⟦2-char-id⟧ => ⟦2-char-id⟧ !== ⟦2-char-id⟧ && ⟦2-char-id⟧.wasPressed(⟦2-char-id⟧),
         wasReleased: ⟦2-char-id⟧ => ⟦2-char-id⟧ !== ⟦2-char-id⟧ && ⟦2-char-id⟧.wasReleased(⟦2-char-id⟧),
         value: ⟦2-char-id⟧ => ⟦2-char-id⟧ === ⟦2-char-id⟧ ? 0 : ⟦2-char-id⟧.value(⟦2-char-id⟧)
       } : ⟦2-char-id⟧
   },
-  39347: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  39306: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      b: () => ⟦2-char-id⟧,
-      d: () => ⟦2-char-id⟧
+      e: () => ⟦2-char-id⟧,
+      h: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
       let {
```

</details>

<details>
<summary>Hunk 21 · Change · +2 / -2</summary>

```diff
@@ -651,10 +651,10 @@
         toggled: !1
       } : "hold" === ⟦2-char-id⟧ ? {
         crouchHeld: ⟦2-char-id⟧,
-        toggled: ⟦2-char-id⟧ ? !AJ : ⟦2-char-id⟧
+        toggled: ⟦2-char-id⟧ ? !JB : ⟦2-char-id⟧
       } : {
         crouchHeld: !1,
-        toggled: ⟦2-char-id⟧ || ⟦2-char-id⟧ ? !AJ : ⟦2-char-id⟧
+        toggled: ⟦2-char-id⟧ || ⟦2-char-id⟧ ? !JB : ⟦2-char-id⟧
       } : {
         crouchHeld: !1,
         toggled: !1
```

</details>

<details>
<summary>Hunk 22 · Change · +44 / -44</summary>

```diff
@@ -678,95 +678,95 @@
       }
     }
   },
-  39312: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    ⟦2-char-id⟧(8151)
+  39277: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    ⟦2-char-id⟧(8183)
   },
-  39317: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  39286: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      b: () => ⟦2-char-id⟧
+      c: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(17),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8079),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8092),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(7477),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(7517),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(7494),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39325),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(39333),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(7527),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(7473),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8066),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8104);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(24),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8122),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8130),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(7511),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(7535),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(7515),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(39293),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(39297),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(7552),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(7500),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8094),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8140);
     const ⟦2-char-id⟧ = [{
-        isOpen: ⟦2-char-id⟧.i,
-        openButton: () => (0, ⟦2-char-id⟧.j)("emoteWheel"),
+        isOpen: ⟦2-char-id⟧.j,
+        openButton: () => (0, ⟦2-char-id⟧.m)("emoteWheel"),
         aim: ⟦2-char-id⟧ => {
-          ⟦2-char-id⟧.i.Uf("emoteWheelPadAim", ⟦2-char-id⟧)
+          ⟦2-char-id⟧.h.yH("emoteWheelPadAim", ⟦2-char-id⟧)
         },
         commit: ⟦2-char-id⟧ => {
-          ⟦2-char-id⟧.i.Uf("requestEmoteWheelPadCommit", ⟦2-char-id⟧)
+          ⟦2-char-id⟧.h.yH("requestEmoteWheelPadCommit", ⟦2-char-id⟧)
         },
         close: () => {
-          ⟦2-char-id⟧.i.Uf("requestEmoteWheelClose")
+          ⟦2-char-id⟧.h.yH("requestEmoteWheelClose")
         }
       }, {
-        isOpen: ⟦2-char-id⟧.d,
-        openButton: () => (0, ⟦2-char-id⟧.j)("chat"),
+        isOpen: ⟦2-char-id⟧.e,
+        openButton: () => (0, ⟦2-char-id⟧.m)("chat"),
         aim: ⟦2-char-id⟧ => {
-          ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧.g, ⟦2-char-id⟧)
+          ⟦2-char-id⟧.h.yH(⟦2-char-id⟧.g, ⟦2-char-id⟧)
         },
         commit: ⟦2-char-id⟧ => {
-          ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧.k, ⟦2-char-id⟧)
+          ⟦2-char-id⟧.h.yH(⟦2-char-id⟧.m, ⟦2-char-id⟧)
         },
         close: () => {
-          ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧.h)
-        },
-        keptOpenBy: [⟦2-char-id⟧.b]
+          ⟦2-char-id⟧.h.yH(⟦2-char-id⟧.i)
+        },
+        keptOpenBy: [⟦2-char-id⟧.e]
       }, {
-        isOpen: ⟦2-char-id⟧.m,
-        openButton: () => (0, ⟦2-char-id⟧.j)("actionButton"),
+        isOpen: ⟦2-char-id⟧.r,
+        openButton: () => (0, ⟦2-char-id⟧.m)("actionButton"),
         aim: ⟦2-char-id⟧ => {
-          ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧.b, ⟦2-char-id⟧)
+          ⟦2-char-id⟧.h.yH(⟦2-char-id⟧.d, ⟦2-char-id⟧)
         },
         commit: ⟦2-char-id⟧ => {
-          ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧.e, ⟦2-char-id⟧)
+          ⟦2-char-id⟧.h.yH(⟦2-char-id⟧.h, ⟦2-char-id⟧)
         },
         close: () => {
-          ⟦2-char-id⟧.i.Uf(⟦2-char-id⟧.c)
+          ⟦2-char-id⟧.h.yH(⟦2-char-id⟧.g)
         }
       }],
       ⟦2-char-id⟧ = () => {
         var ⟦2-char-id⟧;
-        return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.isOpen()))) && void 0 !== ⟦2-char-id⟧ ? JJ : null
-      },
-      ⟦2-char-id⟧ = ⟦2-char-id⟧ => (0, ⟦2-char-id⟧.L)(⟦2-char-id⟧.openButton()),
-      ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => !(0, ⟦2-char-id⟧.K)(⟦2-char-id⟧.frame.values, ⟦2-char-id⟧),
+        return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.isOpen()))) && void 0 !== ⟦2-char-id⟧ ? BB : null
+      },
+      ⟦2-char-id⟧ = ⟦2-char-id⟧ => (0, ⟦2-char-id⟧.cb)(⟦2-char-id⟧.openButton()),
+      ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => !(0, ⟦2-char-id⟧.H)(⟦2-char-id⟧.frame.values, ⟦2-char-id⟧),
       ⟦2-char-id⟧ = () => {
         let ⟦2-char-id⟧ = null,
           ⟦2-char-id⟧ = !1,
           ⟦2-char-id⟧ = !1;
-        return ⟦2-char-id⟧.e.register({
+        return ⟦2-char-id⟧.d.register({
           name: "wheel",
           isActive: () => null !== ⟦2-char-id⟧(),
           peek: () => {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧();
             return ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧) ? null : {
               over: "gameplay",
-              stick: (0, ⟦2-char-id⟧.k)().swapSticks ? "right" : "left"
+              stick: (0, ⟦2-char-id⟧.h)().swapSticks ? "right" : "left"
             }
           },
           onFrame: ⟦2-char-id⟧ => {
             var ⟦2-char-id⟧;
             const ⟦2-char-id⟧ = ⟦2-char-id⟧();
             if (!⟦2-char-id⟧) return;
-            if (null !== (0, ⟦2-char-id⟧.d)([...YJ.e, ...null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.keptOpenBy) && void 0 !== ⟦2-char-id⟧ ? UJ : []])) return void ⟦2-char-id⟧.close();
+            if (null !== (0, ⟦2-char-id⟧.c)([...oB.h, ...null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.keptOpenBy) && void 0 !== ⟦2-char-id⟧ ? yB : []])) return void ⟦2-char-id⟧.close();
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.openButton(),
-              ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧.frame, (0, ⟦2-char-id⟧.k)().swapSticks),
+              ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)(⟦2-char-id⟧.frame, (0, ⟦2-char-id⟧.h)().swapSticks),
               ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧) ? ⟦2-char-id⟧.move : ⟦2-char-id⟧.look;
             ⟦2-char-id⟧ !== ⟦2-char-id⟧ ? (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = !⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) || Math.hypot(⟦2-char-id⟧.x, ⟦2-char-id⟧.y) >= ⟦2-char-id⟧.B, ⟦2-char-id⟧ = !1) : ⟦2-char-id⟧ && (⟦2-char-id⟧ = !1, ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) && (⟦2-char-id⟧ = !1)), ⟦2-char-id⟧.aim(⟦2-char-id⟧);
-            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)("menuConfirm"),
-              ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.j)("menuBack");
-            return ⟦2-char-id⟧.wasPressed(⟦2-char-id⟧) ? (⟦2-char-id⟧.e.consumeButton(⟦2-char-id⟧), void ⟦2-char-id⟧.close()) : ⟦2-char-id⟧.wasPressed(⟦2-char-id⟧) || ⟦2-char-id⟧.wasPressed(⟦2-char-id⟧) ? (⟦2-char-id⟧.e.consumeButton(⟦2-char-id⟧), ⟦2-char-id⟧.e.consumeButton(⟦2-char-id⟧), void ⟦2-char-id⟧.commit(!1)) : void(⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) && (⟦2-char-id⟧ = !1, ⟦2-char-id⟧.commit(!0)))
+            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)("menuConfirm"),
+              ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.m)("menuBack");
+            return ⟦2-char-id⟧.wasPressed(⟦2-char-id⟧) ? (⟦2-char-id⟧.d.consumeButton(⟦2-char-id⟧), void ⟦2-char-id⟧.close()) : ⟦2-char-id⟧.wasPressed(⟦2-char-id⟧) || ⟦2-char-id⟧.wasPressed(⟦2-char-id⟧) ? (⟦2-char-id⟧.d.consumeButton(⟦2-char-id⟧), ⟦2-char-id⟧.d.consumeButton(⟦2-char-id⟧), void ⟦2-char-id⟧.commit(!1)) : void(⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) && (⟦2-char-id⟧ = !1, ⟦2-char-id⟧.commit(!0)))
           },
           onDeactivate: () => {
             ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && ⟦2-char-id⟧() === ⟦2-char-id⟧, ⟦2-char-id⟧ || (⟦2-char-id⟧ = null, ⟦2-char-id⟧ = !1)
```

</details>

<details>
<summary>Hunk 23 · Change · +4 / -4</summary>

```diff
@@ -774,12 +774,12 @@
         })
       }
   },
-  8719: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  8746: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧,
-      h: () => ⟦2-char-id⟧
+      c: () => ⟦2-char-id⟧,
+      d: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8687);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8698);
     const ⟦2-char-id⟧ = "Air",
       ⟦2-char-id⟧ = Object.freeze(new ⟦2-char-id⟧.h(⟦2-char-id⟧, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
   }
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/183.js</code> · modified · +30 / -30</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +2 / -2</summary>

```diff
@@ -1,8 +1,8 @@
 export const ⟦2-char-id⟧ = 183;
 export const ids = [183];
 export const modules = {
-  36711: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36715);
+  36649: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36656);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       for (var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = ⟦2-char-id⟧.length, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length;) {
```

</details>

<details>
<summary>Hunk 2 · Change · +1 / -1</summary>

```diff
@@ -34,7 +34,7 @@
       return ⟦2-char-id⟧
     }
   },
-  36715: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  36656: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = 32;
       return (⟦2-char-id⟧ &= -⟦2-char-id⟧) && ⟦2-char-id⟧--, 65535 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 16), 16711935 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 8), 252645135 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 4), 858993459 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 2), 1431655765 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 1), ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 3 · Change · +6 / -6</summary>

```diff
@@ -88,18 +88,18 @@
       return ⟦2-char-id⟧ + 1 | (~⟦2-char-id⟧ & -~⟦2-char-id⟧) - 1 >>> ⟦2-char-id⟧(⟦2-char-id⟧) + 1
     }
   },
-  38606: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  38549: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       emptyColumnHeight: () => ⟦2-char-id⟧,
       loadHeatmapSchematic: () => ⟦2-char-id⟧,
       readSchematicBlocks: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(3246),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(3257),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(3226),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(36711),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(157),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8636);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(3239),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(36649),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(184),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8653);
     const ⟦2-char-id⟧ = [{
         name: "x",
         type: "int"
```

</details>

<details>
<summary>Hunk 4 · Change · +1 / -1</summary>

```diff
@@ -131,7 +131,7 @@
           type: "array",
           items: {
             type: "record",
-            fields: [...jJ, {
+            fields: [...gB, {
               name: "rle",
               type: "bytes"
             }]
```

</details>

<details>
<summary>Hunk 5 · Change · +2 / -2</summary>

```diff
@@ -144,13 +144,13 @@
       }),
       ⟦2-char-id⟧ = ⟦2-char-id⟧().Type.forSchema({
         type: "record",
-        fields: [...YJ, {
+        fields: [...oB, {
           name: "blockData",
           type: {
             type: "array",
             items: {
               type: "record",
-              fields: [...jJ, {
+              fields: [...gB, {
                 name: "data",
                 type: "bytes"
               }]
```

</details>

<details>
<summary>Hunk 6 · Change · +5 / -5</summary>

```diff
@@ -173,21 +173,21 @@
       ⟦2-char-id⟧ = [150, 150, 150],
       ⟦2-char-id⟧ = 16,
       ⟦2-char-id⟧ = 4096,
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.c.Kn,
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.c.UD,
       ⟦2-char-id⟧ = -2147483648;
     async function ⟦2-char-id⟧(⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = await ⟦2-char-id⟧(new Uint8Array(await ⟦2-char-id⟧.arrayBuffer()), await async function() {
         const {
           averageColors: ⟦2-char-id⟧
-        } = await ⟦2-char-id⟧.e(187).then((() => ⟦2-char-id⟧(33439))), ⟦2-char-id⟧ = new Map;
+        } = await ⟦2-char-id⟧.e(187).then((() => ⟦2-char-id⟧(33444))), ⟦2-char-id⟧ = new Map;
         return ⟦2-char-id⟧ => {
           var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧);
           if (void 0 !== ⟦2-char-id⟧) return ⟦2-char-id⟧;
-          const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.m[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? FJ : "",
-            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? eJ : ⟦2-char-id⟧[⟦2-char-id⟧.split("|")[0]],
+          const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.h[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? VB : "",
+            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? pB : ⟦2-char-id⟧[⟦2-char-id⟧.split("|")[0]],
             ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.split("|")[0]],
-            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[0]) && void 0 !== ⟦2-char-id⟧ ? AJ : ⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧ ? XJ : 0 === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) ? null : ⟦2-char-id⟧;
+            ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[0]) && void 0 !== ⟦2-char-id⟧ ? JB : ⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧ ? lB : 0 === (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.length) ? null : ⟦2-char-id⟧;
           return ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧
         }
       }());
```

</details>

<details>
<summary>Hunk 7 · Change · +2 / -2</summary>

```diff
@@ -201,10 +201,10 @@
       if (⟦2-char-id⟧.byteLength < 4) throw new Error("The file is too short to be a schematic.");
       const ⟦2-char-id⟧ = new DataView(⟦2-char-id⟧.buffer, ⟦2-char-id⟧.byteOffset, ⟦2-char-id⟧.byteLength).getUint32(0, !0);
       if (⟦2-char-id⟧ > ⟦2-char-id⟧) throw new Error("The file isn't a schematic this version of Bloxd can read.");
-      const ⟦2-char-id⟧ = (⟦2-char-id⟧ >= ⟦2-char-id⟧ ? DJ : ⟦2-char-id⟧).decode(⟦2-char-id⟧.fn.from(⟦2-char-id⟧.subarray(4)), 0).value;
+      const ⟦2-char-id⟧ = (⟦2-char-id⟧ >= ⟦2-char-id⟧ ? LB : ⟦2-char-id⟧).decode(⟦2-char-id⟧.iD.from(⟦2-char-id⟧.subarray(4)), 0).value;
       if (!⟦2-char-id⟧) throw new Error("The file isn't a schematic.");
       if (0 === ⟦2-char-id⟧.chunkData.length) throw new Error("The schematic has no blocks in it.");
-      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.pasteOffset) && void 0 !== ⟦2-char-id⟧ ? ZJ : {
+      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.pasteOffset) && void 0 !== ⟦2-char-id⟧ ? dB : {
           x: 0,
           y: 0,
           z: 0
```

</details>

<details>
<summary>Hunk 8 · Change · +1 / -1</summary>

```diff
@@ -219,7 +219,7 @@
         ⟦2-char-id⟧ = new Map;
       for (const [⟦2-char-id⟧, ⟦2-char-id⟧] of ⟦2-char-id⟧.entries()) {
         const ⟦2-char-id⟧ = new Uint16Array(⟦2-char-id⟧ ** 3);
-        ⟦2-char-id⟧.decode(⟦2-char-id⟧.rle, ⟦2-char-id⟧), ⟦2-char-id⟧.set(`${hJ.x},${hJ.y},${hJ.z}`, ⟦2-char-id⟧), ⟦2-char-id⟧ % ⟦2-char-id⟧ === ⟦2-char-id⟧ - 1 && await ⟦2-char-id⟧()
+        ⟦2-char-id⟧.decode(⟦2-char-id⟧.rle, ⟦2-char-id⟧), ⟦2-char-id⟧.set(`${kB.x},${kB.y},${kB.z}`, ⟦2-char-id⟧), ⟦2-char-id⟧ % ⟦2-char-id⟧ === ⟦2-char-id⟧ - 1 && await ⟦2-char-id⟧()
       }
       const ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ * ⟦2-char-id⟧ * ⟦2-char-id⟧ + ⟦2-char-id⟧ * ⟦2-char-id⟧ + ⟦2-char-id⟧,
         ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
```

</details>

<details>
<summary>Hunk 9 · Change · +3 / -3</summary>

```diff
@@ -227,16 +227,16 @@
           const ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧ / ⟦2-char-id⟧),
             ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧ / ⟦2-char-id⟧),
             ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧ / ⟦2-char-id⟧);
-          return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.get(`${eJ},${XJ},${AJ}`)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[⟦2-char-id⟧(⟦2-char-id⟧ - ⟦2-char-id⟧ * ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧ * ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧ * ⟦2-char-id⟧)]) && void 0 !== ⟦2-char-id⟧ ? FJ : 0
+          return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.get(`${pB},${lB},${JB}`)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[⟦2-char-id⟧(⟦2-char-id⟧ - ⟦2-char-id⟧ * ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧ * ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧ * ⟦2-char-id⟧)]) && void 0 !== ⟦2-char-id⟧ ? VB : 0
         },
         ⟦2-char-id⟧ = new Map,
         ⟦2-char-id⟧ = [],
         ⟦2-char-id⟧ = [];
       for (const [⟦2-char-id⟧, ⟦2-char-id⟧] of ⟦2-char-id⟧.entries()) {
-        const ⟦2-char-id⟧ = ⟦2-char-id⟧.get(`${XJ.x},${XJ.y},${XJ.z}`),
+        const ⟦2-char-id⟧ = ⟦2-char-id⟧.get(`${lB.x},${lB.y},${lB.z}`),
           ⟦2-char-id⟧ = [⟦2-char-id⟧.x * ⟦2-char-id⟧, ⟦2-char-id⟧.y * ⟦2-char-id⟧, ⟦2-char-id⟧.z * ⟦2-char-id⟧],
           ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ < 0 || ⟦2-char-id⟧ < 0 || ⟦2-char-id⟧ < 0 || ⟦2-char-id⟧ >= ⟦2-char-id⟧ || ⟦2-char-id⟧ >= ⟦2-char-id⟧ || ⟦2-char-id⟧ >= ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧[0] + ⟦2-char-id⟧, ⟦2-char-id⟧[1] + ⟦2-char-id⟧, ⟦2-char-id⟧[2] + ⟦2-char-id⟧) : ⟦2-char-id⟧[⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)],
-          ⟦2-char-id⟧ = `${XJ.x},${XJ.z}`;
+          ⟦2-char-id⟧ = `${lB.x},${lB.z}`;
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧);
         void 0 === ⟦2-char-id⟧ && (⟦2-char-id⟧ = {
           chunkX: ⟦2-char-id⟧.x,
```

</details>

<details>
<summary>Hunk 10 · Change · +3 / -3</summary>

```diff
@@ -268,14 +268,14 @@
           colours: Uint8Array.from(⟦2-char-id⟧),
           count: ⟦2-char-id⟧.length / 3
         },
-        columnTops: [...rJ.values()]
+        columnTops: [...vB.values()]
       }
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       if (0 === ⟦2-char-id⟧) return !0;
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧.m[⟦2-char-id⟧];
-      return void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.LD || ⟦2-char-id⟧.transTex || !1 === ⟦2-char-id⟧.solid
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧.h[⟦2-char-id⟧];
+      return void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.DO || ⟦2-char-id⟧.transTex || !1 === ⟦2-char-id⟧.solid
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 11 · Change · +4 / -4</summary>

```diff
@@ -332,12 +332,12 @@
       }))
     }
   },
-  8719: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  8746: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧,
-      h: () => ⟦2-char-id⟧
+      c: () => ⟦2-char-id⟧,
+      d: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8687);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8698);
     const ⟦2-char-id⟧ = "Air",
       ⟦2-char-id⟧ = Object.freeze(new ⟦2-char-id⟧.h(⟦2-char-id⟧, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
   }
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/184.js</code> · modified · +15 / -15</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +15 / -15</summary>

```diff
@@ -1,34 +1,34 @@
 export const ⟦2-char-id⟧ = 184;
 export const ids = [184];
 export const modules = {
-  39255: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  39231: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      FORMER_BLOCK_IMAGE_NAMES: () => ⟦2-char-id⟧.e,
-      textureAnimationData: () => ⟦2-char-id⟧.v,
-      textureNameToIndex: () => ⟦2-char-id⟧.x
+      FORMER_BLOCK_IMAGE_NAMES: () => ⟦2-char-id⟧.c,
+      textureAnimationData: () => ⟦2-char-id⟧.r,
+      textureNameToIndex: () => ⟦2-char-id⟧.u
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37698),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(8636)
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(37702),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(8653)
   },
-  8719: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  8746: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧,
-      h: () => ⟦2-char-id⟧
+      c: () => ⟦2-char-id⟧,
+      d: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8687);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(8698);
     const ⟦2-char-id⟧ = "Air",
       ⟦2-char-id⟧ = Object.freeze(new ⟦2-char-id⟧.h(⟦2-char-id⟧, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
   },
-  37698: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  37702: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧,
-      i: () => ⟦2-char-id⟧
+      c: () => ⟦2-char-id⟧,
+      g: () => ⟦2-char-id⟧
     });
-    const ⟦2-char-id⟧ = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((⟦2-char-id⟧ => [⟦2-char-id⟧, `${JJ}_block`])));
+    const ⟦2-char-id⟧ = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((⟦2-char-id⟧ => [⟦2-char-id⟧, `${BB}_block`])));
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
-      return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧
+      return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧
     }
   }
 };
```

</details>

</details>
