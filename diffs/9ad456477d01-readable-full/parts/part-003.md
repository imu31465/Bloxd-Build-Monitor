# Historical build diff — part 003

- Base: e7e20713782fba2472c7866f1ac5b84e503e7647
- Build: 9ad456477d01ce4e7883eecb0f575724f962561f
- Files in this part: 4

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
-  8615: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  8629: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
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
-  8620: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  8634: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
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
-  8625: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  8640: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
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
<summary><code>bundles/bloxd.io/chunks/js/182.js</code> · modified · +221 / -221</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +28 / -28</summary>

```diff
@@ -1,57 +1,57 @@
 export const ⟦2-char-id⟧ = 182;
 export const ids = [182];
 export const modules = {
-  35935: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  35880: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
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
<summary>Hunk 3 · Change · +2 / -2</summary>

```diff
@@ -92,13 +92,13 @@
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
                   }), " ", ⟦2-char-id⟧("classicGame:watchAdToGetRestedPerk")]
                 }), ⟦2-char-id⟧ && ⟦2-char-id⟧("classicGame:wakeUp")]
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
-  39341: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  39301: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
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
<summary>Hunk 10 · Change · +22 / -22</summary>

```diff
@@ -267,40 +267,40 @@
           update: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
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
-  39333: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  39297: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
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
-  39325: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  39293: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
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
-  39347: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  39306: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
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
-  39312: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
-    ⟦2-char-id⟧(8151)
+  39277: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+    ⟦2-char-id⟧(8183)
   },
-  39317: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  39286: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
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
-  8719: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  8746: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
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
-  36711: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(36715);
+  36649: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
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
-  38606: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  38549: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
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
-  8719: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  8746: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
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
-  39255: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  39231: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
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
-  8719: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  8746: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
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
-  37698: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  37702: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
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
