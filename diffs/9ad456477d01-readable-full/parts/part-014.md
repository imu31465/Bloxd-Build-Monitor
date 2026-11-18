# Historical build diff — part 014

- Base: e7e20713782fba2472c7866f1ac5b84e503e7647
- Build: 9ad456477d01ce4e7883eecb0f575724f962561f
- Files in this part: 5

<details>
<summary><code>bundles/bloxd.io/chunks/js/274.js</code> · modified · +1989 / -1989</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +8 / -8</summary>

```diff
@@ -1,25 +1,25 @@
 export const ⟦2-char-id⟧ = 274;
 export const ids = [274];
 export const modules = {
-  40052: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  40033: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       e: () => ⟦2-char-id⟧,
+      f: () => ⟦2-char-id⟧,
       h: () => ⟦2-char-id⟧,
       l: () => ⟦2-char-id⟧,
       p: () => ⟦2-char-id⟧,
-      r: () => ⟦2-char-id⟧,
       t: () => ⟦2-char-id⟧,
-      w: () => ⟦2-char-id⟧
+      v: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(40060),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(40065),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(40078);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(40036),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(40040),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(40060);
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         this.state = ⟦2-char-id⟧, this.pos = ⟦2-char-id⟧, this.explicit = ⟦2-char-id⟧, this.view = ⟦2-char-id⟧, this.abortListeners = [], this.abortOnDocChange = !1
       }
       tokenBefore(⟦2-char-id⟧) {
-        let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.ub)(this.state).resolveInner(this.pos, -1);
+        let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.hb)(this.state).resolveInner(this.pos, -1);
         for (; ⟦2-char-id⟧ && ⟦2-char-id⟧.indexOf(⟦2-char-id⟧.name) < 0;) ⟦2-char-id⟧ = ⟦2-char-id⟧.parent;
         return ⟦2-char-id⟧ ? {
           from: ⟦2-char-id⟧.from,
```

</details>

<details>
<summary>Hunk 2 · Change · +1 / -1</summary>

```diff
@@ -42,7 +42,7 @@
       get aborted() {
         return null == this.abortListeners
       }
-      addEventListener(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      addEventListener(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         "abort" == ⟦2-char-id⟧ && this.abortListeners && (this.abortListeners.push(⟦2-char-id⟧), ⟦2-char-id⟧ && ⟦2-char-id⟧.onDocChange && (this.abortOnDocChange = !0))
       }
     }
```

</details>

<details>
<summary>Hunk 3 · Change · +1 / -1</summary>

```diff
@@ -50,7 +50,7 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = Object.keys(⟦2-char-id⟧).join(""),
         ⟦2-char-id⟧ = /\w/.test(⟦2-char-id⟧);
-      return ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.replace(/\w/g, "")), `[${ZJ?"\\w":""}${cJ.replace(/[^\w\s]/g,"\\$&")}]`
+      return ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.replace(/\w/g, "")), `[${dB?"\\w":""}${TB.replace(/[^\w\s]/g,"\\$&")}]`
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 4 · Change · +1 / -1</summary>

```diff
@@ -82,7 +82,7 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       return ⟦2-char-id⟧ => {
-        for (let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.ub)(⟦2-char-id⟧.state).resolveInner(⟦2-char-id⟧.pos, -1); ⟦2-char-id⟧; ⟦2-char-id⟧ = ⟦2-char-id⟧.parent) {
+        for (let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.hb)(⟦2-char-id⟧.state).resolveInner(⟦2-char-id⟧.pos, -1); ⟦2-char-id⟧; ⟦2-char-id⟧ = ⟦2-char-id⟧.parent) {
           if (⟦2-char-id⟧.indexOf(⟦2-char-id⟧.name) > -1) return null;
           if (⟦2-char-id⟧.type.isTop) break
         }
```

</details>

<details>
<summary>Hunk 5 · Change · +1 / -1</summary>

```diff
@@ -90,7 +90,7 @@
       }
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         this.completion = ⟦2-char-id⟧, this.source = ⟦2-char-id⟧, this.match = ⟦2-char-id⟧, this.score = ⟦2-char-id⟧
       }
     }
```

</details>

<details>
<summary>Hunk 6 · Change · +6 / -6</summary>

```diff
@@ -104,16 +104,16 @@
       let {
         source: ⟦2-char-id⟧
       } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ && "^" != ⟦2-char-id⟧[0], ⟦2-char-id⟧ = "$" != ⟦2-char-id⟧[⟦2-char-id⟧.length - 1];
-      return ⟦2-char-id⟧ || ⟦2-char-id⟧ ? new RegExp(`${UJ?"^":""}(?:${FJ})${eJ?"$":""}`, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.flags) && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧.ignoreCase ? "i" : "") : ⟦2-char-id⟧
-    }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.d.define();
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧ || ⟦2-char-id⟧ ? new RegExp(`${yB?"^":""}(?:${VB})${pB?"$":""}`, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.flags) && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧.ignoreCase ? "i" : "") : ⟦2-char-id⟧
+    }
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.c.define();
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
       let {
         main: ⟦2-char-id⟧
       } = ⟦2-char-id⟧.selection, ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧.from, ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧.from;
       return {
-        ...JJ.changeByRange((⟦2-char-id⟧ => {
+        ...BB.changeByRange((⟦2-char-id⟧ => {
           if (⟦2-char-id⟧ != ⟦2-char-id⟧ && ⟦2-char-id⟧ != ⟦2-char-id⟧ && ⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧.from + ⟦2-char-id⟧, ⟦2-char-id⟧.from + ⟦2-char-id⟧) != ⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧, ⟦2-char-id⟧)) return {
             range: ⟦2-char-id⟧
           };
```

</details>

<details>
<summary>Hunk 7 · Change · +1 / -1</summary>

```diff
@@ -124,7 +124,7 @@
               to: ⟦2-char-id⟧ == ⟦2-char-id⟧.from ? ⟦2-char-id⟧.to : ⟦2-char-id⟧.from + ⟦2-char-id⟧,
               insert: ⟦2-char-id⟧
             },
-            range: ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧.from + ⟦2-char-id⟧ + ⟦2-char-id⟧.length)
+            range: ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧.from + ⟦2-char-id⟧ + ⟦2-char-id⟧.length)
           }
         })),
         scrollIntoView: !0,
```

</details>

<details>
<summary>Hunk 8 · Change · +7 / -7</summary>

```diff
@@ -136,20 +136,20 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       if (!Array.isArray(⟦2-char-id⟧)) return ⟦2-char-id⟧;
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧);
-      return ⟦2-char-id⟧ || ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)), cJ
-    }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define();
+      return ⟦2-char-id⟧ || ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)), TB
+    }
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.x.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.x.define();
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧) {
         this.pattern = ⟦2-char-id⟧, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
         for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length;) {
-          let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.L)(⟦2-char-id⟧, ⟦2-char-id⟧),
-            ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.P)(⟦2-char-id⟧);
+          let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.K)(⟦2-char-id⟧, ⟦2-char-id⟧),
+            ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.M)(⟦2-char-id⟧);
           this.chars.push(⟦2-char-id⟧);
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.slice(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧),
             ⟦2-char-id⟧ = ⟦2-char-id⟧.toUpperCase();
-          this.folded.push((0, ⟦2-char-id⟧.L)(⟦2-char-id⟧ == ⟦2-char-id⟧ ? ⟦2-char-id⟧.toLowerCase() : ⟦2-char-id⟧, 0)), ⟦2-char-id⟧ += ⟦2-char-id⟧
+          this.folded.push((0, ⟦2-char-id⟧.K)(⟦2-char-id⟧ == ⟦2-char-id⟧ ? ⟦2-char-id⟧.toLowerCase() : ⟦2-char-id⟧, 0)), ⟦2-char-id⟧ += ⟦2-char-id⟧
         }
         this.astral = ⟦2-char-id⟧.length != this.chars.length
       }
```

</details>

<details>
<summary>Hunk 9 · Change · +2 / -2</summary>

```diff
@@ -167,8 +167,8 @@
           byWord: ⟦2-char-id⟧
         } = this;
         if (1 == ⟦2-char-id⟧.length) {
-          let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.L)(⟦2-char-id⟧, 0),
-            ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.P)(⟦2-char-id⟧),
+          let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.K)(⟦2-char-id⟧, 0),
+            ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.M)(⟦2-char-id⟧),
             ⟦2-char-id⟧ = ⟦2-char-id⟧ == ⟦2-char-id⟧.length ? 0 : -100;
           if (⟦2-char-id⟧ == ⟦2-char-id⟧[0]);
           else {
```

</details>

<details>
<summary>Hunk 10 · Change · +2 / -2</summary>

```diff
@@ -183,8 +183,8 @@
           ⟦2-char-id⟧ = 0;
         if (⟦2-char-id⟧ < 0) {
           for (let ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.length, 200); ⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧;) {
-            let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.L)(⟦2-char-id⟧, ⟦2-char-id⟧);
-            ⟦2-char-id⟧ != ⟦2-char-id⟧[⟦2-char-id⟧] && ⟦2-char-id⟧ != ⟦2-char-id⟧[⟦2-char-id⟧] || (⟦2-char-id⟧[⟦2-char-id⟧++] = ⟦2-char-id⟧), ⟦2-char-id⟧ += (0, ⟦2-char-id⟧.P)(⟦2-char-id⟧)
+            let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.K)(⟦2-char-id⟧, ⟦2-char-id⟧);
+            ⟦2-char-id⟧ != ⟦2-char-id⟧[⟦2-char-id⟧] && ⟦2-char-id⟧ != ⟦2-char-id⟧[⟦2-char-id⟧] || (⟦2-char-id⟧[⟦2-char-id⟧++] = ⟦2-char-id⟧), ⟦2-char-id⟧ += (0, ⟦2-char-id⟧.M)(⟦2-char-id⟧)
           }
           if (⟦2-char-id⟧ < ⟦2-char-id⟧) return null
         }
```

</details>

<details>
<summary>Hunk 11 · Change · +9 / -9</summary>

```diff
@@ -197,19 +197,19 @@
           ⟦2-char-id⟧ = /[a-z]/.test(⟦2-char-id⟧),
           ⟦2-char-id⟧ = !0;
         for (let ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.length, 200), ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧;) {
-          let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.L)(⟦2-char-id⟧, ⟦2-char-id⟧);
+          let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.K)(⟦2-char-id⟧, ⟦2-char-id⟧);
           ⟦2-char-id⟧ < 0 && (⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧ == ⟦2-char-id⟧[⟦2-char-id⟧] && (⟦2-char-id⟧[⟦2-char-id⟧++] = ⟦2-char-id⟧), ⟦2-char-id⟧ < ⟦2-char-id⟧ && (⟦2-char-id⟧ == ⟦2-char-id⟧[⟦2-char-id⟧] || ⟦2-char-id⟧ == ⟦2-char-id⟧[⟦2-char-id⟧] ? (0 == ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧ + 1, ⟦2-char-id⟧++) : ⟦2-char-id⟧ = 0));
-          let ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ < 255 ? ⟦2-char-id⟧ >= 48 && ⟦2-char-id⟧ <= 57 || ⟦2-char-id⟧ >= 97 && ⟦2-char-id⟧ <= 122 ? 2 : ⟦2-char-id⟧ >= 65 && ⟦2-char-id⟧ <= 90 ? 1 : 0 : (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.bb)(⟦2-char-id⟧)) != ⟦2-char-id⟧.toLowerCase() ? 1 : ⟦2-char-id⟧ != ⟦2-char-id⟧.toUpperCase() ? 2 : 0;
-          (!⟦2-char-id⟧ || 1 == ⟦2-char-id⟧ && ⟦2-char-id⟧ || 0 == ⟦2-char-id⟧ && 0 != ⟦2-char-id⟧) && (⟦2-char-id⟧[⟦2-char-id⟧] == ⟦2-char-id⟧ || ⟦2-char-id⟧[⟦2-char-id⟧] == ⟦2-char-id⟧ && (⟦2-char-id⟧ = !0) ? ⟦2-char-id⟧[⟦2-char-id⟧++] = rJ : ⟦2-char-id⟧.length && (⟦2-char-id⟧ = !1)), ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ += (0, ⟦2-char-id⟧.P)(⟦2-char-id⟧)
-        }
-        return ⟦2-char-id⟧ == ⟦2-char-id⟧ && 0 == ⟦2-char-id⟧[0] && ⟦2-char-id⟧ ? this.result((⟦2-char-id⟧ ? -200 : 0) - 100, XJ, ⟦2-char-id⟧) : ⟦2-char-id⟧ == ⟦2-char-id⟧ && 0 == ⟦2-char-id⟧ ? this.ret(-200 - ⟦2-char-id⟧.length + (⟦2-char-id⟧ == ⟦2-char-id⟧.length ? 0 : -100), [0, ⟦2-char-id⟧]) : ⟦2-char-id⟧ > -1 ? this.ret(-700 - ⟦2-char-id⟧.length, [⟦2-char-id⟧, ⟦2-char-id⟧ + this.pattern.length]) : ⟦2-char-id⟧ == ⟦2-char-id⟧ ? this.ret(-900 - ⟦2-char-id⟧.length, [⟦2-char-id⟧, ⟦2-char-id⟧]) : ⟦2-char-id⟧ == ⟦2-char-id⟧ ? this.result((⟦2-char-id⟧ ? -200 : 0) - 100 - 700 + (⟦2-char-id⟧ ? 0 : -1100), XJ, ⟦2-char-id⟧) : 2 == ⟦2-char-id⟧.length ? null : this.result((⟦2-char-id⟧[0] ? -700 : 0) - 200 - 1100, UJ, ⟦2-char-id⟧)
-      }
-      result(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+          let ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ < 255 ? ⟦2-char-id⟧ >= 48 && ⟦2-char-id⟧ <= 57 || ⟦2-char-id⟧ >= 97 && ⟦2-char-id⟧ <= 122 ? 2 : ⟦2-char-id⟧ >= 65 && ⟦2-char-id⟧ <= 90 ? 1 : 0 : (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.Y)(⟦2-char-id⟧)) != ⟦2-char-id⟧.toLowerCase() ? 1 : ⟦2-char-id⟧ != ⟦2-char-id⟧.toUpperCase() ? 2 : 0;
+          (!⟦2-char-id⟧ || 1 == ⟦2-char-id⟧ && ⟦2-char-id⟧ || 0 == ⟦2-char-id⟧ && 0 != ⟦2-char-id⟧) && (⟦2-char-id⟧[⟦2-char-id⟧] == ⟦2-char-id⟧ || ⟦2-char-id⟧[⟦2-char-id⟧] == ⟦2-char-id⟧ && (⟦2-char-id⟧ = !0) ? ⟦2-char-id⟧[⟦2-char-id⟧++] = vB : ⟦2-char-id⟧.length && (⟦2-char-id⟧ = !1)), ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ += (0, ⟦2-char-id⟧.M)(⟦2-char-id⟧)
+        }
+        return ⟦2-char-id⟧ == ⟦2-char-id⟧ && 0 == ⟦2-char-id⟧[0] && ⟦2-char-id⟧ ? this.result((⟦2-char-id⟧ ? -200 : 0) - 100, lB, ⟦2-char-id⟧) : ⟦2-char-id⟧ == ⟦2-char-id⟧ && 0 == ⟦2-char-id⟧ ? this.ret(-200 - ⟦2-char-id⟧.length + (⟦2-char-id⟧ == ⟦2-char-id⟧.length ? 0 : -100), [0, ⟦2-char-id⟧]) : ⟦2-char-id⟧ > -1 ? this.ret(-700 - ⟦2-char-id⟧.length, [⟦2-char-id⟧, ⟦2-char-id⟧ + this.pattern.length]) : ⟦2-char-id⟧ == ⟦2-char-id⟧ ? this.ret(-900 - ⟦2-char-id⟧.length, [⟦2-char-id⟧, ⟦2-char-id⟧]) : ⟦2-char-id⟧ == ⟦2-char-id⟧ ? this.result((⟦2-char-id⟧ ? -200 : 0) - 100 - 700 + (⟦2-char-id⟧ ? 0 : -1100), lB, ⟦2-char-id⟧) : 2 == ⟦2-char-id⟧.length ? null : this.result((⟦2-char-id⟧[0] ? -700 : 0) - 200 - 1100, yB, ⟦2-char-id⟧)
+      }
+      result(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = [],
           ⟦2-char-id⟧ = 0;
         for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) {
-          let ⟦2-char-id⟧ = ⟦2-char-id⟧ + (this.astral ? (0, ⟦2-char-id⟧.P)((0, ⟦2-char-id⟧.L)(⟦2-char-id⟧, ⟦2-char-id⟧)) : 1);
-          ⟦2-char-id⟧ && ⟦2-char-id⟧[⟦2-char-id⟧ - 1] == ⟦2-char-id⟧ ? ⟦2-char-id⟧[⟦2-char-id⟧ - 1] = JJ : (⟦2-char-id⟧[⟦2-char-id⟧++] = ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧++] = ⟦2-char-id⟧)
+          let ⟦2-char-id⟧ = ⟦2-char-id⟧ + (this.astral ? (0, ⟦2-char-id⟧.M)((0, ⟦2-char-id⟧.K)(⟦2-char-id⟧, ⟦2-char-id⟧)) : 1);
+          ⟦2-char-id⟧ && ⟦2-char-id⟧[⟦2-char-id⟧ - 1] == ⟦2-char-id⟧ ? ⟦2-char-id⟧[⟦2-char-id⟧ - 1] = BB : (⟦2-char-id⟧[⟦2-char-id⟧++] = ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧++] = ⟦2-char-id⟧)
         }
         return this.ret(⟦2-char-id⟧ - ⟦2-char-id⟧.length, ⟦2-char-id⟧)
       }
```

</details>

<details>
<summary>Hunk 12 · Change · +2 / -2</summary>

```diff
@@ -225,8 +225,8 @@
         return null == ⟦2-char-id⟧ ? null : (this.matched = [0, ⟦2-char-id⟧.length], this.score = ⟦2-char-id⟧ + (⟦2-char-id⟧.length == this.pattern.length ? 0 : -100), this)
       }
     }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define({
-      combine: ⟦2-char-id⟧ => (0, ⟦2-char-id⟧.S)(⟦2-char-id⟧, {
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define({
+      combine: ⟦2-char-id⟧ => (0, ⟦2-char-id⟧.P)(⟦2-char-id⟧, {
         activateOnTyping: !0,
         activateOnCompletion: () => !1,
         activateOnTypingDelay: 100,
```

</details>

<details>
<summary>Hunk 13 · Change · +7 / -7</summary>

```diff
@@ -249,19 +249,19 @@
         defaultKeymap: (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ && ⟦2-char-id⟧,
         closeOnBlur: (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ && ⟦2-char-id⟧,
         icons: (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ && ⟦2-char-id⟧,
-        tooltipClass: (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧), cJ(⟦2-char-id⟧)),
-        optionClass: (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧), cJ(⟦2-char-id⟧)),
+        tooltipClass: (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧), TB(⟦2-char-id⟧)),
+        optionClass: (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧), TB(⟦2-char-id⟧)),
         addToOptions: (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.concat(⟦2-char-id⟧),
         filterStrict: (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ || ⟦2-char-id⟧
       })
     });
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧ ? ⟦2-char-id⟧ ? ⟦2-char-id⟧ + " " + cJ : JJ : ⟦2-char-id⟧
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, eJ, ⟦2-char-id⟧) {
-      let ⟦2-char-id⟧, qJ, ⟦2-char-id⟧ = ⟦2-char-id⟧.textDirection == ⟦2-char-id⟧.e.RTL,
+      return ⟦2-char-id⟧ ? ⟦2-char-id⟧ ? ⟦2-char-id⟧ + " " + TB : BB : ⟦2-char-id⟧
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, pB, ⟦2-char-id⟧) {
+      let ⟦2-char-id⟧, YB, ⟦2-char-id⟧ = ⟦2-char-id⟧.textDirection == ⟦2-char-id⟧.f.RTL,
         ⟦2-char-id⟧ = ⟦2-char-id⟧,
         ⟦2-char-id⟧ = !1,
         ⟦2-char-id⟧ = "top",
```

</details>

<details>
<summary>Hunk 14 · Change · +5 / -5</summary>

```diff
@@ -269,20 +269,20 @@
         ⟦2-char-id⟧ = ⟦2-char-id⟧.right - ⟦2-char-id⟧.right,
         ⟦2-char-id⟧ = ⟦2-char-id⟧.right - ⟦2-char-id⟧.left,
         ⟦2-char-id⟧ = ⟦2-char-id⟧.bottom - ⟦2-char-id⟧.top;
-      if (⟦2-char-id⟧ && ⟦2-char-id⟧ < Math.min(⟦2-char-id⟧, ⟦2-char-id⟧) ? ⟦2-char-id⟧ = !1 : !⟦2-char-id⟧ && ⟦2-char-id⟧ < Math.min(⟦2-char-id⟧, ⟦2-char-id⟧) && (⟦2-char-id⟧ = !0), ⟦2-char-id⟧ <= (⟦2-char-id⟧ ? sJ : ⟦2-char-id⟧)) ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧.top, Math.min(⟦2-char-id⟧.top, ⟦2-char-id⟧.bottom - ⟦2-char-id⟧)) - ⟦2-char-id⟧.top, ⟦2-char-id⟧ = Math.min(400, ⟦2-char-id⟧ ? sJ : ⟦2-char-id⟧);
+      if (⟦2-char-id⟧ && ⟦2-char-id⟧ < Math.min(⟦2-char-id⟧, ⟦2-char-id⟧) ? ⟦2-char-id⟧ = !1 : !⟦2-char-id⟧ && ⟦2-char-id⟧ < Math.min(⟦2-char-id⟧, ⟦2-char-id⟧) && (⟦2-char-id⟧ = !0), ⟦2-char-id⟧ <= (⟦2-char-id⟧ ? OB : ⟦2-char-id⟧)) ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧.top, Math.min(⟦2-char-id⟧.top, ⟦2-char-id⟧.bottom - ⟦2-char-id⟧)) - ⟦2-char-id⟧.top, ⟦2-char-id⟧ = Math.min(400, ⟦2-char-id⟧ ? OB : ⟦2-char-id⟧);
       else {
         ⟦2-char-id⟧ = !0, ⟦2-char-id⟧ = Math.min(400, (⟦2-char-id⟧ ? ⟦2-char-id⟧.right : ⟦2-char-id⟧.right - ⟦2-char-id⟧.left) - 30);
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.bottom - ⟦2-char-id⟧.bottom;
         ⟦2-char-id⟧ >= ⟦2-char-id⟧ || ⟦2-char-id⟧ > ⟦2-char-id⟧.top ? ⟦2-char-id⟧ = ⟦2-char-id⟧.bottom - ⟦2-char-id⟧.top : (⟦2-char-id⟧ = "bottom", ⟦2-char-id⟧ = ⟦2-char-id⟧.bottom - ⟦2-char-id⟧.top)
       }
       return {
-        style: `${DJ}: ${AJ/((cJ.bottom-cJ.top)/XJ.offsetHeight)}px; max-width: ${qJ/((cJ.right-cJ.left)/XJ.offsetWidth)}px`,
+        style: `${LB}: ${JB/((TB.bottom-TB.top)/lB.offsetHeight)}px; max-width: ${YB/((TB.right-TB.left)/lB.offsetWidth)}px`,
         class: "cm-completionInfo-" + (⟦2-char-id⟧ ? ⟦2-char-id⟧ ? "left-narrow" : "right-narrow" : ⟦2-char-id⟧ ? "left" : "right")
       }
     }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define();
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.x.define();
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       if (⟦2-char-id⟧ <= ⟦2-char-id⟧) return {
         from: 0,
         to: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 15 · Change · +1 / -1</summary>

```diff
@@ -301,7 +301,7 @@
       }
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         this.view = ⟦2-char-id⟧, this.stateField = ⟦2-char-id⟧, this.applyCompletion = ⟦2-char-id⟧, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
           read: () => this.measureInfo(),
           write: ⟦2-char-id⟧ => this.placeInfo(⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 16 · Change · +2 / -2</summary>

```diff
@@ -318,11 +318,11 @@
           return ⟦2-char-id⟧.icons && ⟦2-char-id⟧.push({
             render(⟦2-char-id⟧) {
               let ⟦2-char-id⟧ = document.createElement("div");
-              return ⟦2-char-id⟧.classList.add("cm-completionIcon"), ⟦2-char-id⟧.type && ⟦2-char-id⟧.classList.add(...JJ.type.split(/\s+/g).map((⟦2-char-id⟧ => "cm-completionIcon-" + ⟦2-char-id⟧))), ⟦2-char-id⟧.setAttribute("aria-hidden", "true"), cJ
+              return ⟦2-char-id⟧.classList.add("cm-completionIcon"), ⟦2-char-id⟧.type && ⟦2-char-id⟧.classList.add(...BB.type.split(/\s+/g).map((⟦2-char-id⟧ => "cm-completionIcon-" + ⟦2-char-id⟧))), ⟦2-char-id⟧.setAttribute("aria-hidden", "true"), TB
             },
             position: 20
           }), ⟦2-char-id⟧.push({
-            render(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+            render(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
               let ⟦2-char-id⟧ = document.createElement("span");
               ⟦2-char-id⟧.className = "cm-completionLabel";
               let ⟦2-char-id⟧ = ⟦2-char-id⟧.displayLabel || ⟦2-char-id⟧.label,
```

</details>

<details>
<summary>Hunk 17 · Change · +3 / -3</summary>

```diff
@@ -334,18 +334,18 @@
                 let ⟦2-char-id⟧ = ⟦2-char-id⟧.appendChild(document.createElement("span"));
                 ⟦2-char-id⟧.appendChild(document.createTextNode(⟦2-char-id⟧.slice(⟦2-char-id⟧, ⟦2-char-id⟧))), ⟦2-char-id⟧.className = "cm-completionMatchedText", ⟦2-char-id⟧ = ⟦2-char-id⟧
               }
-              return ⟦2-char-id⟧ < ⟦2-char-id⟧.length && ⟦2-char-id⟧.appendChild(document.createTextNode(⟦2-char-id⟧.slice(⟦2-char-id⟧))), UJ
+              return ⟦2-char-id⟧ < ⟦2-char-id⟧.length && ⟦2-char-id⟧.appendChild(document.createTextNode(⟦2-char-id⟧.slice(⟦2-char-id⟧))), yB
             },
             position: 50
           }, {
             render(⟦2-char-id⟧) {
               if (!⟦2-char-id⟧.detail) return null;
               let ⟦2-char-id⟧ = document.createElement("span");
-              return ⟦2-char-id⟧.className = "cm-completionDetail", ⟦2-char-id⟧.textContent = ⟦2-char-id⟧.detail, cJ
+              return ⟦2-char-id⟧.className = "cm-completionDetail", ⟦2-char-id⟧.textContent = ⟦2-char-id⟧.detail, TB
             },
             position: 80
           }), ⟦2-char-id⟧.sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.position - ⟦2-char-id⟧.position)).map((⟦2-char-id⟧ => ⟦2-char-id⟧.render))
-        }(⟦2-char-id⟧), this.optionClass = ⟦2-char-id⟧.optionClass, this.tooltipClass = ⟦2-char-id⟧.tooltipClass, this.range = ⟦2-char-id⟧(⟦2-char-id⟧.length, eJ, ⟦2-char-id⟧.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(⟦2-char-id⟧.state), this.dom.addEventListener("mousedown", (⟦2-char-id⟧ => {
+        }(⟦2-char-id⟧), this.optionClass = ⟦2-char-id⟧.optionClass, this.tooltipClass = ⟦2-char-id⟧.tooltipClass, this.range = ⟦2-char-id⟧(⟦2-char-id⟧.length, pB, ⟦2-char-id⟧.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(⟦2-char-id⟧.state), this.dom.addEventListener("mousedown", (⟦2-char-id⟧ => {
           let {
             options: ⟦2-char-id⟧
           } = ⟦2-char-id⟧.state.field(⟦2-char-id⟧).open;
```

</details>

<details>
<summary>Hunk 18 · Change · +1 / -1</summary>

```diff
@@ -368,7 +368,7 @@
         this.updateSel()
       }
       showOptions(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(⟦2-char-id⟧, cJ, this.range)), this.list.addEventListener("scroll", (() => {
+        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(⟦2-char-id⟧, TB, this.range)), this.list.addEventListener("scroll", (() => {
           this.info && this.view.requestMeasure(this.placeInfoReq)
         }))
       }
```

</details>

<details>
<summary>Hunk 19 · Change · +1 / -1</summary>

```diff
@@ -382,7 +382,7 @@
             selected: ⟦2-char-id⟧,
             disabled: ⟦2-char-id⟧
           } = ⟦2-char-id⟧.open;
-          ⟦2-char-id⟧.open && ⟦2-char-id⟧.open.options == ⟦2-char-id⟧ || (this.range = ⟦2-char-id⟧(⟦2-char-id⟧.length, eJ, ⟦2-char-id⟧.state.facet(⟦2-char-id⟧).maxRenderedOptions), this.showOptions(⟦2-char-id⟧, ⟦2-char-id⟧.id)), this.updateSel(), ⟦2-char-id⟧ != (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.open) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!⟦2-char-id⟧)
+          ⟦2-char-id⟧.open && ⟦2-char-id⟧.open.options == ⟦2-char-id⟧ || (this.range = ⟦2-char-id⟧(⟦2-char-id⟧.length, pB, ⟦2-char-id⟧.state.facet(⟦2-char-id⟧).maxRenderedOptions), this.showOptions(⟦2-char-id⟧, ⟦2-char-id⟧.id)), this.updateSel(), ⟦2-char-id⟧ != (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.open) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!⟦2-char-id⟧)
         }
       }
       updateTooltipClass(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 20 · Change · +1 / -1</summary>

```diff
@@ -413,7 +413,7 @@
           if (!⟦2-char-id⟧) return;
           "then" in ⟦2-char-id⟧ ? ⟦2-char-id⟧.then((⟦2-char-id⟧ => {
             ⟦2-char-id⟧ && this.view.state.field(this.stateField, !1) == ⟦2-char-id⟧ && this.addInfoPane(⟦2-char-id⟧, ⟦2-char-id⟧)
-          })).catch((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.Q)(this.view.state, JJ, "completion info"))) : (this.addInfoPane(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.setAttribute("aria-describedby", this.info.id))
+          })).catch((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.W)(this.view.state, BB, "completion info"))) : (this.addInfoPane(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.setAttribute("aria-describedby", this.info.id))
         }
       }
       addInfoPane(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 21 · Change · +2 / -2</summary>

```diff
@@ -436,8 +436,8 @@
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.getBoundingClientRect(),
             ⟦2-char-id⟧ = ⟦2-char-id⟧.getBoundingClientRect(),
             ⟦2-char-id⟧ = ⟦2-char-id⟧.height / ⟦2-char-id⟧.offsetHeight;
-          ⟦2-char-id⟧.top < ⟦2-char-id⟧.top ? ⟦2-char-id⟧.scrollTop -= (⟦2-char-id⟧.top - ⟦2-char-id⟧.top) / UJ : ⟦2-char-id⟧.bottom > ⟦2-char-id⟧.bottom && (⟦2-char-id⟧.scrollTop += (⟦2-char-id⟧.bottom - ⟦2-char-id⟧.bottom) / ⟦2-char-id⟧)
-        }(this.list, ⟦2-char-id⟧), cJ
+          ⟦2-char-id⟧.top < ⟦2-char-id⟧.top ? ⟦2-char-id⟧.scrollTop -= (⟦2-char-id⟧.top - ⟦2-char-id⟧.top) / yB : ⟦2-char-id⟧.bottom > ⟦2-char-id⟧.bottom && (⟦2-char-id⟧.scrollTop += (⟦2-char-id⟧.bottom - ⟦2-char-id⟧.bottom) / ⟦2-char-id⟧)
+        }(this.list, ⟦2-char-id⟧), TB
       }
       measureInfo() {
         let ⟦2-char-id⟧ = this.dom.querySelector("[aria-selected]");
```

</details>

<details>
<summary>Hunk 22 · Change · +2 / -2</summary>

```diff
@@ -455,12 +455,12 @@
             bottom: ⟦2-char-id⟧.clientHeight
           }
         }
-        return ⟦2-char-id⟧.top > Math.min(⟦2-char-id⟧.bottom, ⟦2-char-id⟧.bottom) - 10 || ⟦2-char-id⟧.bottom < Math.max(⟦2-char-id⟧.top, ⟦2-char-id⟧.top) + 10 ? null : this.view.state.facet(⟦2-char-id⟧).positionInfo(this.view, cJ, FJ, ZJ, UJ, this.dom)
+        return ⟦2-char-id⟧.top > Math.min(⟦2-char-id⟧.bottom, ⟦2-char-id⟧.bottom) - 10 || ⟦2-char-id⟧.bottom < Math.max(⟦2-char-id⟧.top, ⟦2-char-id⟧.top) + 10 ? null : this.view.state.facet(⟦2-char-id⟧).positionInfo(this.view, TB, VB, dB, yB, this.dom)
       }
       placeInfo(⟦2-char-id⟧) {
         this.info && (⟦2-char-id⟧ ? (⟦2-char-id⟧.style && (this.info.style.cssText = ⟦2-char-id⟧.style), this.info.className = "cm-tooltip cm-completionInfo " + (⟦2-char-id⟧.class || "")) : this.info.style.cssText = "top: -1e6px")
       }
-      createListBox(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      createListBox(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = document.createElement("ul");
         ⟦2-char-id⟧.id = ⟦2-char-id⟧, ⟦2-char-id⟧.setAttribute("role", "listbox"), ⟦2-char-id⟧.setAttribute("aria-expanded", "true"), ⟦2-char-id⟧.setAttribute("aria-label", this.view.state.phrase("Completions")), ⟦2-char-id⟧.addEventListener("mousedown", (⟦2-char-id⟧ => {
           ⟦2-char-id⟧.target == ⟦2-char-id⟧ && ⟦2-char-id⟧.preventDefault()
```

</details>

<details>
<summary>Hunk 23 · Change · +1 / -1</summary>

```diff
@@ -474,7 +474,7 @@
             section: ⟦2-char-id⟧
           } = ⟦2-char-id⟧;
           if (⟦2-char-id⟧) {
-            let ⟦2-char-id⟧ = "string" == typeof ⟦2-char-id⟧ ? qJ : ⟦2-char-id⟧.name;
+            let ⟦2-char-id⟧ = "string" == typeof ⟦2-char-id⟧ ? YB : ⟦2-char-id⟧.name;
             if (⟦2-char-id⟧ != ⟦2-char-id⟧ && (⟦2-char-id⟧ > ⟦2-char-id⟧.from || 0 == ⟦2-char-id⟧.from))
               if (⟦2-char-id⟧ = ⟦2-char-id⟧, "string" != typeof ⟦2-char-id⟧ && ⟦2-char-id⟧.header) ⟦2-char-id⟧.appendChild(⟦2-char-id⟧.header(⟦2-char-id⟧));
               else {
```

</details>

<details>
<summary>Hunk 24 · Change · +1 / -1</summary>

```diff
@@ -490,7 +490,7 @@
             ⟦2-char-id⟧ && ⟦2-char-id⟧.appendChild(⟦2-char-id⟧)
           }
         }
-        return ⟦2-char-id⟧.from && ⟦2-char-id⟧.classList.add("cm-completionListIncompleteTop"), ⟦2-char-id⟧.to < ⟦2-char-id⟧.length && ⟦2-char-id⟧.classList.add("cm-completionListIncompleteBottom"), FJ
+        return ⟦2-char-id⟧.from && ⟦2-char-id⟧.classList.add("cm-completionListIncompleteTop"), ⟦2-char-id⟧.to < ⟦2-char-id⟧.length && ⟦2-char-id⟧.classList.add("cm-completionListIncompleteBottom"), VB
       }
       destroyInfo() {
         this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
```

</details>

<details>
<summary>Hunk 25 · Change · +5 / -5</summary>

```diff
@@ -501,20 +501,20 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧ => new ⟦2-char-id⟧(⟦2-char-id⟧, JJ, ⟦2-char-id⟧)
+      return ⟦2-char-id⟧ => new ⟦2-char-id⟧(⟦2-char-id⟧, BB, ⟦2-char-id⟧)
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       return 100 * (⟦2-char-id⟧.boost || 0) + (⟦2-char-id⟧.apply ? 10 : 0) + (⟦2-char-id⟧.info ? 5 : 0) + (⟦2-char-id⟧.type ? 1 : 0)
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, VB, yB, ⟦2-char-id⟧) {
         this.options = ⟦2-char-id⟧, this.attrs = ⟦2-char-id⟧, this.tooltip = ⟦2-char-id⟧, this.timestamp = ⟦2-char-id⟧, this.selected = ⟦2-char-id⟧, this.disabled = ⟦2-char-id⟧
       }
       setSelected(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        return ⟦2-char-id⟧ == this.selected || ⟦2-char-id⟧ >= this.options.length ? this : new ⟦2-char-id⟧(this.options, HJ(⟦2-char-id⟧, ⟦2-char-id⟧), this.tooltip, this.timestamp, JJ, this.disabled)
-      }
-      static build(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, ⟦2-char-id⟧) {
+        return ⟦2-char-id⟧ == this.selected || ⟦2-char-id⟧ >= this.options.length ? this : new ⟦2-char-id⟧(this.options, cB(⟦2-char-id⟧, ⟦2-char-id⟧), this.tooltip, this.timestamp, BB, this.disabled)
+      }
+      static build(⟦2-char-id⟧, TB, dB, VB, yB, ⟦2-char-id⟧) {
         if (⟦2-char-id⟧ && !⟦2-char-id⟧ && ⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧.isPending))) return ⟦2-char-id⟧.setDisabled();
         let ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = [],
```

</details>

<details>
<summary>Hunk 26 · Change · +1 / -1</summary>

```diff
@@ -527,7 +527,7 @@
               } = ⟦2-char-id⟧.completion;
               if (⟦2-char-id⟧) {
                 ⟦2-char-id⟧ || (⟦2-char-id⟧ = []);
-                let ⟦2-char-id⟧ = "string" == typeof ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧.name;
+                let ⟦2-char-id⟧ = "string" == typeof ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧.name;
                 ⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧.name == ⟦2-char-id⟧)) || ⟦2-char-id⟧.push("string" == typeof ⟦2-char-id⟧ ? {
                   name: ⟦2-char-id⟧
                 } : ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 27 · Change · +1 / -1</summary>

```diff
@@ -546,7 +546,7 @@
                   if (⟦2-char-id⟧ = ⟦2-char-id⟧.match(⟦2-char-id⟧.label)) {
                     let ⟦2-char-id⟧ = ⟦2-char-id⟧.displayLabel ? ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.matched) : [] : ⟦2-char-id⟧.matched,
                       ⟦2-char-id⟧ = ⟦2-char-id⟧.score + (⟦2-char-id⟧.boost || 0);
-                    if (⟦2-char-id⟧(new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.source, FJ, ⟦2-char-id⟧)), "object" == typeof ⟦2-char-id⟧.section && "dynamic" === ⟦2-char-id⟧.section.rank) {
+                    if (⟦2-char-id⟧(new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.source, VB, ⟦2-char-id⟧)), "object" == typeof ⟦2-char-id⟧.section && "dynamic" === ⟦2-char-id⟧.section.rank) {
                       let {
                         name: ⟦2-char-id⟧
                       } = ⟦2-char-id⟧.section;
```

</details>

<details>
<summary>Hunk 28 · Change · +1 / -1</summary>

```diff
@@ -563,7 +563,7 @@
               let {
                 section: ⟦2-char-id⟧
               } = ⟦2-char-id⟧.completion;
-              ⟦2-char-id⟧ && (⟦2-char-id⟧.score += ⟦2-char-id⟧["string" == typeof ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧.name])
+              ⟦2-char-id⟧ && (⟦2-char-id⟧.score += ⟦2-char-id⟧["string" == typeof ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧.name])
             }
           }
           let ⟦2-char-id⟧ = [],
```

</details>

<details>
<summary>Hunk 29 · Change · +2 / -2</summary>

```diff
@@ -585,11 +585,11 @@
               break
             }
         }
-        return new ⟦2-char-id⟧(⟦2-char-id⟧, HJ(⟦2-char-id⟧, ⟦2-char-id⟧), {
+        return new ⟦2-char-id⟧(⟦2-char-id⟧, cB(⟦2-char-id⟧, ⟦2-char-id⟧), {
           pos: ⟦2-char-id⟧.reduce(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.hasResult() ? Math.min(⟦2-char-id⟧, ⟦2-char-id⟧.from) : ⟦2-char-id⟧), 1⟦2-char-id⟧),
           create: ⟦2-char-id⟧,
           above: ⟦2-char-id⟧.aboveCursor
-        }, ⟦2-char-id⟧ ? ⟦2-char-id⟧.timestamp : Date.now(), AJ, !1)
+        }, ⟦2-char-id⟧ ? ⟦2-char-id⟧.timestamp : Date.now(), JB, !1)
       }
       map(⟦2-char-id⟧) {
         return new ⟦2-char-id⟧(this.options, this.attrs, {
```

</details>

<details>
<summary>Hunk 30 · Change · +1 / -1</summary>

```diff
@@ -602,7 +602,7 @@
       }
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         this.active = ⟦2-char-id⟧, this.id = ⟦2-char-id⟧, this.open = ⟦2-char-id⟧
       }
       static start() {
```

</details>

<details>
<summary>Hunk 31 · Change · +1 / -1</summary>

```diff
@@ -611,7 +611,7 @@
       update(⟦2-char-id⟧) {
         let {
           state: ⟦2-char-id⟧
-        } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.facet(⟦2-char-id⟧), ⟦2-char-id⟧ = (⟦2-char-id⟧.override || ⟦2-char-id⟧.languageDataAt("autocomplete", hJ(⟦2-char-id⟧)).map(⟦2-char-id⟧)).map((⟦2-char-id⟧ => (this.active.find((⟦2-char-id⟧ => ⟦2-char-id⟧.source == ⟦2-char-id⟧)) || new ⟦2-char-id⟧(⟦2-char-id⟧, this.active.some((⟦2-char-id⟧ => 0 != ⟦2-char-id⟧.state)) ? 1 : 0)).update(⟦2-char-id⟧, ⟦2-char-id⟧)));
+        } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.facet(⟦2-char-id⟧), ⟦2-char-id⟧ = (⟦2-char-id⟧.override || ⟦2-char-id⟧.languageDataAt("autocomplete", kB(⟦2-char-id⟧)).map(⟦2-char-id⟧)).map((⟦2-char-id⟧ => (this.active.find((⟦2-char-id⟧ => ⟦2-char-id⟧.source == ⟦2-char-id⟧)) || new ⟦2-char-id⟧(⟦2-char-id⟧, this.active.some((⟦2-char-id⟧ => 0 != ⟦2-char-id⟧.state)) ? 1 : 0)).update(⟦2-char-id⟧, ⟦2-char-id⟧)));
         ⟦2-char-id⟧.length == this.active.length && ⟦2-char-id⟧.every(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ == this.active[⟦2-char-id⟧])) && (⟦2-char-id⟧ = this.active);
         let ⟦2-char-id⟧ = this.open,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.effects.some((⟦2-char-id⟧ => ⟦2-char-id⟧.is(⟦2-char-id⟧)));
```

</details>

<details>
<summary>Hunk 32 · Change · +1 / -1</summary>

```diff
@@ -625,7 +625,7 @@
             if (⟦2-char-id⟧ || ⟦2-char-id⟧) return ⟦2-char-id⟧ == ⟦2-char-id⟧;
             if (⟦2-char-id⟧[⟦2-char-id⟧++].result != ⟦2-char-id⟧[⟦2-char-id⟧++].result) return !1
           }
-        }(⟦2-char-id⟧, this.active) || ⟦2-char-id⟧ ? ⟦2-char-id⟧ = ⟦2-char-id⟧.build(⟦2-char-id⟧, cJ, this.id, UJ, ZJ, ⟦2-char-id⟧) : ⟦2-char-id⟧ && ⟦2-char-id⟧.disabled && !⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧.isPending)) && (⟦2-char-id⟧ = null), !⟦2-char-id⟧ && ⟦2-char-id⟧.every((⟦2-char-id⟧ => !⟦2-char-id⟧.isPending)) && ⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧.hasResult())) && (⟦2-char-id⟧ = ⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧.hasResult() ? new ⟦2-char-id⟧(⟦2-char-id⟧.source, 0) : ⟦2-char-id⟧)));
+        }(⟦2-char-id⟧, this.active) || ⟦2-char-id⟧ ? ⟦2-char-id⟧ = ⟦2-char-id⟧.build(⟦2-char-id⟧, TB, this.id, yB, dB, ⟦2-char-id⟧) : ⟦2-char-id⟧ && ⟦2-char-id⟧.disabled && !⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧.isPending)) && (⟦2-char-id⟧ = null), !⟦2-char-id⟧ && ⟦2-char-id⟧.every((⟦2-char-id⟧ => !⟦2-char-id⟧.isPending)) && ⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧.hasResult())) && (⟦2-char-id⟧ = ⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧.hasResult() ? new ⟦2-char-id⟧(⟦2-char-id⟧.source, 0) : ⟦2-char-id⟧)));
         for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.effects) ⟦2-char-id⟧.is(⟦2-char-id⟧) && (⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧.setSelected(⟦2-char-id⟧.value, this.id));
         return ⟦2-char-id⟧ == this.active && ⟦2-char-id⟧ == this.open ? this : new ⟦2-char-id⟧(⟦2-char-id⟧, this.id, ⟦2-char-id⟧)
       }
```

</details>

<details>
<summary>Hunk 33 · Change · +1 / -1</summary>

```diff
@@ -633,7 +633,7 @@
         return this.open ? this.open.tooltip : null
       }
       get attrs() {
-        return this.open ? this.open.attrs : this.active.length ? WJ : ⟦2-char-id⟧
+        return this.open ? this.open.attrs : this.active.length ? rB : ⟦2-char-id⟧
       }
     }
     const ⟦2-char-id⟧ = {
```

</details>

<details>
<summary>Hunk 34 · Change · +1 / -1</summary>

```diff
@@ -647,7 +647,7 @@
         "aria-haspopup": "listbox",
         "aria-controls": ⟦2-char-id⟧
       };
-      return ⟦2-char-id⟧ > -1 && (⟦2-char-id⟧["aria-activedescendant"] = ⟦2-char-id⟧ + "-" + ⟦2-char-id⟧), ZJ
+      return ⟦2-char-id⟧ > -1 && (⟦2-char-id⟧["aria-activedescendant"] = ⟦2-char-id⟧ + "-" + ⟦2-char-id⟧), dB
     }
     const ⟦2-char-id⟧ = [];
 
```

</details>

<details>
<summary>Hunk 35 · Change · +1 / -1</summary>

```diff
@@ -692,7 +692,7 @@
       }
     }
     class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, VB, yB, ⟦2-char-id⟧) {
         super(⟦2-char-id⟧, 3, ⟦2-char-id⟧), this.limit = ⟦2-char-id⟧, this.result = ⟦2-char-id⟧, this.from = ⟦2-char-id⟧, this.to = ⟦2-char-id⟧
       }
       hasResult() {
```

</details>

<details>
<summary>Hunk 36 · Change · +3 / -3</summary>

```diff
@@ -708,11 +708,11 @@
           ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.state);
         if (⟦2-char-id⟧ > ⟦2-char-id⟧ || !⟦2-char-id⟧ || 2 & ⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧.startState) == this.from || ⟦2-char-id⟧ < this.limit)) return new ⟦2-char-id⟧(this.source, 4 & ⟦2-char-id⟧ ? 1 : 0);
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.changes.mapPos(this.limit);
-        return function(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+        return function(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
           if (!⟦2-char-id⟧) return !1;
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧, ⟦2-char-id⟧);
-          return "function" == typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, FJ, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, !0).test(⟦2-char-id⟧)
-        }(⟦2-char-id⟧.validFor, ⟦2-char-id⟧.state, UJ, ⟦2-char-id⟧) ? new ⟦2-char-id⟧(this.source, this.explicit, qJ, FJ, UJ, ⟦2-char-id⟧) : ⟦2-char-id⟧.update && (⟦2-char-id⟧ = ⟦2-char-id⟧.update(⟦2-char-id⟧, UJ, eJ, new ⟦2-char-id⟧(⟦2-char-id⟧.state, AJ, !1))) ? new ⟦2-char-id⟧(this.source, this.explicit, qJ, FJ, ⟦2-char-id⟧.from, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.to) && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧(⟦2-char-id⟧.state)) : new ⟦2-char-id⟧(this.source, 1, this.explicit)
+          return "function" == typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, dB, VB, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, !0).test(⟦2-char-id⟧)
+        }(⟦2-char-id⟧.validFor, ⟦2-char-id⟧.state, yB, ⟦2-char-id⟧) ? new ⟦2-char-id⟧(this.source, this.explicit, YB, VB, yB, ⟦2-char-id⟧) : ⟦2-char-id⟧.update && (⟦2-char-id⟧ = ⟦2-char-id⟧.update(⟦2-char-id⟧, yB, pB, new ⟦2-char-id⟧(⟦2-char-id⟧.state, JB, !1))) ? new ⟦2-char-id⟧(this.source, this.explicit, YB, VB, ⟦2-char-id⟧.from, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.to) && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧(⟦2-char-id⟧.state)) : new ⟦2-char-id⟧(this.source, 1, this.explicit)
       }
       map(⟦2-char-id⟧) {
         if (⟦2-char-id⟧.empty) return this;
```

</details>

<details>
<summary>Hunk 37 · Change · +4 / -4</summary>

```diff
@@ -722,20 +722,20 @@
         return ⟦2-char-id⟧.changes.touchesRange(this.from, this.to)
       }
     }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define({
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.x.define({
         map: (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧.map(⟦2-char-id⟧)))
       }),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.E.define({
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define({
         create: () => ⟦2-char-id⟧.start(),
         update: (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.update(⟦2-char-id⟧),
-        provide: ⟦2-char-id⟧ => [⟦2-char-id⟧.ab.from(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.tooltip)), ⟦2-char-id⟧.f.contentAttributes.from(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.attrs))]
+        provide: ⟦2-char-id⟧ => [⟦2-char-id⟧.ob.from(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.tooltip)), ⟦2-char-id⟧.i.contentAttributes.from(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.attrs))]
       });
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.completion.apply || ⟦2-char-id⟧.completion.label;
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.state.field(⟦2-char-id⟧).active.find((⟦2-char-id⟧ => ⟦2-char-id⟧.source == ⟦2-char-id⟧.source));
       return ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ && ("string" == typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧.dispatch({
-        ...nJ(⟦2-char-id⟧.state, ZJ, ⟦2-char-id⟧.from, ⟦2-char-id⟧.to),
+        ...DB(⟦2-char-id⟧.state, dB, ⟦2-char-id⟧.from, ⟦2-char-id⟧.to),
         annotations: ⟦2-char-id⟧.of(⟦2-char-id⟧.completion)
       }) : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.completion, ⟦2-char-id⟧.from, ⟦2-char-id⟧.to), !0)
     }
```

</details>

<details>
<summary>Hunk 38 · Change · +1 / -1</summary>

```diff
@@ -747,7 +747,7 @@
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.state.field(⟦2-char-id⟧, !1);
         if (!⟦2-char-id⟧ || !⟦2-char-id⟧.open || ⟦2-char-id⟧.open.disabled || Date.now() - ⟦2-char-id⟧.open.timestamp < ⟦2-char-id⟧.state.facet(⟦2-char-id⟧).interactionDelay) return !1;
         let ⟦2-char-id⟧, ⟦2-char-id⟧ = 1;
-        "page" == ⟦2-char-id⟧ && (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.w)(⟦2-char-id⟧, ⟦2-char-id⟧.open.tooltip)) && (⟦2-char-id⟧ = Math.max(2, Math.floor(⟦2-char-id⟧.dom.offsetHeight / ⟦2-char-id⟧.dom.querySelector("li").offsetHeight) - 1));
+        "page" == ⟦2-char-id⟧ && (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.D)(⟦2-char-id⟧, ⟦2-char-id⟧.open.tooltip)) && (⟦2-char-id⟧ = Math.max(2, Math.floor(⟦2-char-id⟧.dom.offsetHeight / ⟦2-char-id⟧.dom.querySelector("li").offsetHeight) - 1));
         let {
           length: ⟦2-char-id⟧
         } = ⟦2-char-id⟧.open.options, ⟦2-char-id⟧ = ⟦2-char-id⟧.open.selected > -1 ? ⟦2-char-id⟧.open.selected + ⟦2-char-id⟧ * (⟦2-char-id⟧ ? 1 : -1) : ⟦2-char-id⟧ ? 0 : ⟦2-char-id⟧ - 1;
```

</details>

<details>
<summary>Hunk 39 · Change · +1 / -1</summary>

```diff
@@ -764,7 +764,7 @@
         this.active = ⟦2-char-id⟧, this.context = ⟦2-char-id⟧, this.time = Date.now(), this.updates = [], this.done = void 0
       }
     }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.k.fromClass(class {
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.n.fromClass(class {
         constructor(⟦2-char-id⟧) {
           this.view = ⟦2-char-id⟧, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
           for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.state.field(⟦2-char-id⟧).active) ⟦2-char-id⟧.isPending && this.startQuery(⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 40 · Change · +3 / -3</summary>

```diff
@@ -781,12 +781,12 @@
             let ⟦2-char-id⟧ = this.running[⟦2-char-id⟧];
             if (⟦2-char-id⟧ || ⟦2-char-id⟧.context.abortOnDocChange && ⟦2-char-id⟧.docChanged || ⟦2-char-id⟧.updates.length + ⟦2-char-id⟧.transactions.length > 50 && Date.now() - ⟦2-char-id⟧.time > 1⟦2-char-id⟧) {
               for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.context.abortListeners) try {
-                JJ()
+                BB()
               } catch (⟦2-char-id⟧) {
-                (0, ⟦2-char-id⟧.Q)(this.view.state, ⟦2-char-id⟧)
+                (0, ⟦2-char-id⟧.W)(this.view.state, ⟦2-char-id⟧)
               }
               ⟦2-char-id⟧.context.abortListeners = null, this.running.splice(⟦2-char-id⟧--, 1)
-            } else ⟦2-char-id⟧.updates.push(...JJ.transactions)
+            } else ⟦2-char-id⟧.updates.push(...BB.transactions)
           }
           this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), ⟦2-char-id⟧.transactions.some((⟦2-char-id⟧ => ⟦2-char-id⟧.effects.some((⟦2-char-id⟧ => ⟦2-char-id⟧.is(⟦2-char-id⟧))))) && (this.pendingStart = !0);
           let ⟦2-char-id⟧ = this.pendingStart ? 50 : ⟦2-char-id⟧.activateOnTypingDelay;
```

</details>

<details>
<summary>Hunk 41 · Change · +2 / -2</summary>

```diff
@@ -804,13 +804,13 @@
         startQuery(⟦2-char-id⟧) {
           let {
             state: ⟦2-char-id⟧
-          } = this.view, ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧.explicit, this.view), ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
+          } = this.view, ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, dB, ⟦2-char-id⟧.explicit, this.view), ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
           this.running.push(⟦2-char-id⟧), Promise.resolve(⟦2-char-id⟧.source(⟦2-char-id⟧)).then((⟦2-char-id⟧ => {
             ⟦2-char-id⟧.context.aborted || (⟦2-char-id⟧.done = ⟦2-char-id⟧ || null, this.scheduleAccept())
           }), (⟦2-char-id⟧ => {
             this.view.dispatch({
               effects: ⟦2-char-id⟧.of(null)
-            }), (0, ⟦2-char-id⟧.Q)(this.view.state, ⟦2-char-id⟧)
+            }), (0, ⟦2-char-id⟧.W)(this.view.state, ⟦2-char-id⟧)
           }))
         }
         scheduleAccept() {
```

</details>

<details>
<summary>Hunk 42 · Change · +1 / -1</summary>

```diff
@@ -828,7 +828,7 @@
             if (this.running.splice(⟦2-char-id⟧--, 1), ⟦2-char-id⟧.done) {
               let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.updates.length ? ⟦2-char-id⟧.updates[0].startState : this.view.state),
                 ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧, ⟦2-char-id⟧.done.from + (⟦2-char-id⟧.active.explicit ? 0 : 1)),
-                ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.active.source, ⟦2-char-id⟧.active.explicit, UJ, ⟦2-char-id⟧.done, ⟦2-char-id⟧.done.from, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.done.to) && void 0 !== ⟦2-char-id⟧ ? JJ : ⟦2-char-id⟧);
+                ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.active.source, ⟦2-char-id⟧.active.explicit, yB, ⟦2-char-id⟧.done, ⟦2-char-id⟧.done.from, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.done.to) && void 0 !== ⟦2-char-id⟧ ? BB : ⟦2-char-id⟧);
               for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.updates) ⟦2-char-id⟧ = ⟦2-char-id⟧.update(⟦2-char-id⟧, ⟦2-char-id⟧);
               if (⟦2-char-id⟧.hasResult()) {
                 ⟦2-char-id⟧.push(⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 43 · Change · +1 / -1</summary>

```diff
@@ -851,7 +851,7 @@
           blur(⟦2-char-id⟧) {
             let ⟦2-char-id⟧ = this.view.state.field(⟦2-char-id⟧, !1);
             if (⟦2-char-id⟧ && ⟦2-char-id⟧.tooltip && this.view.state.facet(⟦2-char-id⟧).closeOnBlur) {
-              let ⟦2-char-id⟧ = ⟦2-char-id⟧.open && (0, ⟦2-char-id⟧.w)(this.view, ⟦2-char-id⟧.open.tooltip);
+              let ⟦2-char-id⟧ = ⟦2-char-id⟧.open && (0, ⟦2-char-id⟧.D)(this.view, ⟦2-char-id⟧.open.tooltip);
               ⟦2-char-id⟧ && ⟦2-char-id⟧.dom.contains(⟦2-char-id⟧.relatedTarget) || setTimeout((() => this.view.dispatch({
                 effects: ⟦2-char-id⟧.of(null)
               })), 10)
```

</details>

<details>
<summary>Hunk 44 · Change · +1 / -1</summary>

```diff
@@ -868,7 +868,7 @@
         }
       }),
       ⟦2-char-id⟧ = "object" == typeof navigator && /Win/.test(navigator.platform),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.t.highest(⟦2-char-id⟧.f.domEventHandlers({
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.r.highest(⟦2-char-id⟧.i.domEventHandlers({
         keydown(⟦2-char-id⟧, ⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.state.field(⟦2-char-id⟧, !1);
           if (!⟦2-char-id⟧ || !⟦2-char-id⟧.open || ⟦2-char-id⟧.open.disabled || ⟦2-char-id⟧.open.selected < 0 || ⟦2-char-id⟧.key.length > 1 || ⟦2-char-id⟧.ctrlKey && (!⟦2-char-id⟧ || !⟦2-char-id⟧.altKey) || ⟦2-char-id⟧.metaKey) return !1;
```

</details>

<details>
<summary>Hunk 45 · Change · +1 / -1</summary>

```diff
@@ -878,7 +878,7 @@
           return ⟦2-char-id⟧ && ⟦2-char-id⟧.indexOf(⟦2-char-id⟧.key) > -1 && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), !1
         }
       })),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.f.baseTheme({
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.i.baseTheme({
         ".cm-tooltip.cm-tooltip-autocomplete": {
           "& > ul": {
             fontFamily: "monospace",
```

</details>

<details>
<summary>Hunk 46 · Change · +5 / -5</summary>

```diff
@@ -1038,18 +1038,18 @@
         }
       });
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         this.field = ⟦2-char-id⟧, this.line = ⟦2-char-id⟧, this.from = ⟦2-char-id⟧, this.to = ⟦2-char-id⟧
       }
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         this.field = ⟦2-char-id⟧, this.from = ⟦2-char-id⟧, this.to = ⟦2-char-id⟧
       }
       map(⟦2-char-id⟧) {
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧.mapPos(this.from, -1, ⟦2-char-id⟧.r.TrackDel),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧.mapPos(this.to, 1, ⟦2-char-id⟧.r.TrackDel);
-        return null == ⟦2-char-id⟧ || null == ⟦2-char-id⟧ ? null : new ⟦2-char-id⟧(this.field, cJ, ⟦2-char-id⟧)
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧.mapPos(this.from, -1, ⟦2-char-id⟧.o.TrackDel),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧.mapPos(this.to, 1, ⟦2-char-id⟧.o.TrackDel);
+        return null == ⟦2-char-id⟧ || null == ⟦2-char-id⟧ ? null : new ⟦2-char-id⟧(this.field, TB, ⟦2-char-id⟧)
       }
     }
     class ⟦2-char-id⟧ {
```

</details>

<details>
<summary>Hunk 47 · Change · +1 / -1</summary>

```diff
@@ -1065,7 +1065,7 @@
           if (⟦2-char-id⟧.length) {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧,
               ⟦2-char-id⟧ = /^\t*/.exec(⟦2-char-id⟧)[0].length;
-            for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧ += ⟦2-char-id⟧.facet(⟦2-char-id⟧.db);
+            for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧ += ⟦2-char-id⟧.facet(⟦2-char-id⟧.V);
             ⟦2-char-id⟧.push(⟦2-char-id⟧ + ⟦2-char-id⟧.length - ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧.slice(⟦2-char-id⟧)
           }
           ⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧ += ⟦2-char-id⟧.length + 1
```

</details>

<details>
<summary>Hunk 48 · Change · +1 / -1</summary>

```diff
@@ -1073,7 +1073,7 @@
         let ⟦2-char-id⟧ = this.fieldPositions.map((⟦2-char-id⟧ => new ⟦2-char-id⟧(⟦2-char-id⟧.field, ⟦2-char-id⟧[⟦2-char-id⟧.line] + ⟦2-char-id⟧.from, ⟦2-char-id⟧[⟦2-char-id⟧.line] + ⟦2-char-id⟧.to)));
         return {
           text: ⟦2-char-id⟧,
-          ws: ⟦2-char-id⟧
+          ek: ⟦2-char-id⟧
         }
       }
       static parse(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 49 · Change · +1 / -1</summary>

```diff
@@ -1086,7 +1086,7 @@
               ⟦2-char-id⟧ = ⟦2-char-id⟧[2] || ⟦2-char-id⟧[3] || "",
               ⟦2-char-id⟧ = -1,
               ⟦2-char-id⟧ = ⟦2-char-id⟧.replace(/\\[{}]/g, (⟦2-char-id⟧ => ⟦2-char-id⟧[1]));
-            for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++)(null != ⟦2-char-id⟧ ? ⟦2-char-id⟧[⟦2-char-id⟧].seq == JJ : ⟦2-char-id⟧ && ⟦2-char-id⟧[⟦2-char-id⟧].name == ⟦2-char-id⟧) && (⟦2-char-id⟧ = ⟦2-char-id⟧);
+            for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++)(null != ⟦2-char-id⟧ ? ⟦2-char-id⟧[⟦2-char-id⟧].seq == BB : ⟦2-char-id⟧ && ⟦2-char-id⟧[⟦2-char-id⟧].name == ⟦2-char-id⟧) && (⟦2-char-id⟧ = ⟦2-char-id⟧);
             if (⟦2-char-id⟧ < 0) {
               let ⟦2-char-id⟧ = 0;
               for (; ⟦2-char-id⟧ < ⟦2-char-id⟧.length && (null == ⟦2-char-id⟧ || null != ⟦2-char-id⟧[⟦2-char-id⟧].seq && ⟦2-char-id⟧[⟦2-char-id⟧].seq < ⟦2-char-id⟧);) ⟦2-char-id⟧++;
```

</details>

<details>
<summary>Hunk 50 · Change · +1 / -1</summary>

```diff
@@ -1102,7 +1102,7 @@
                 ⟦2-char-id⟧.from -= ⟦2-char-id⟧, ⟦2-char-id⟧.to -= ⟦2-char-id⟧
               } ⟦2-char-id⟧.push(new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.length, ⟦2-char-id⟧.index, ⟦2-char-id⟧.index + ⟦2-char-id⟧.length)), ⟦2-char-id⟧ = ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧.index) + ⟦2-char-id⟧ + ⟦2-char-id⟧.slice(⟦2-char-id⟧.index + ⟦2-char-id⟧[0].length)
           }
-          ⟦2-char-id⟧ = ⟦2-char-id⟧.replace(/\\([{}])/g, ((⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+          ⟦2-char-id⟧ = ⟦2-char-id⟧.replace(/\\([{}])/g, ((⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
             for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.line == ⟦2-char-id⟧.length && ⟦2-char-id⟧.from > ⟦2-char-id⟧ && (⟦2-char-id⟧.from--, ⟦2-char-id⟧.to--);
             return ⟦2-char-id⟧
           })), ⟦2-char-id⟧.push(⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 51 · Change · +2 / -2</summary>

```diff
@@ -1111,10 +1111,10 @@
       }
     }
     let ⟦2-char-id⟧ = ⟦2-char-id⟧.c.widget({
-        widget: new class extends ⟦2-char-id⟧.l {
+        widget: new class extends ⟦2-char-id⟧.p {
           toDOM() {
             let ⟦2-char-id⟧ = document.createElement("span");
-            return ⟦2-char-id⟧.className = "cm-snippetFieldPosition", JJ
+            return ⟦2-char-id⟧.className = "cm-snippetFieldPosition", BB
           }
           ignoreEvent() {
             return !1
```

</details>

<details>
<summary>Hunk 52 · Change · +2 / -2</summary>

```diff
@@ -1126,11 +1126,11 @@
       });
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        this.ws = ⟦2-char-id⟧, this.active = ⟦2-char-id⟧, this.deco = ⟦2-char-id⟧.c.set(⟦2-char-id⟧.map((⟦2-char-id⟧ => (⟦2-char-id⟧.from == ⟦2-char-id⟧.to ? Jc : ⟦2-char-id⟧).range(⟦2-char-id⟧.from, ⟦2-char-id⟧.to))), !0)
+        this.ek = ⟦2-char-id⟧, this.active = ⟦2-char-id⟧, this.deco = ⟦2-char-id⟧.c.set(⟦2-char-id⟧.map((⟦2-char-id⟧ => (⟦2-char-id⟧.from == ⟦2-char-id⟧.to ? BT : ⟦2-char-id⟧).range(⟦2-char-id⟧.from, ⟦2-char-id⟧.to))), !0)
       }
       map(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = [];
-        for (let ⟦2-char-id⟧ of this.ws) {
+        for (let ⟦2-char-id⟧ of this.ek) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.map(⟦2-char-id⟧);
           if (!⟦2-char-id⟧) return null;
           ⟦2-char-id⟧.push(⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 53 · Change · +16 / -16</summary>

```diff
@@ -1138,50 +1138,50 @@
         return new ⟦2-char-id⟧(⟦2-char-id⟧, this.active)
       }
       selectionInsideField(⟦2-char-id⟧) {
-        return ⟦2-char-id⟧.ws.every((⟦2-char-id⟧ => this.ws.some((⟦2-char-id⟧ => ⟦2-char-id⟧.field == this.active && ⟦2-char-id⟧.from <= ⟦2-char-id⟧.from && ⟦2-char-id⟧.to >= ⟦2-char-id⟧.to))))
-      }
-    }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define({
+        return ⟦2-char-id⟧.ek.every((⟦2-char-id⟧ => this.ek.some((⟦2-char-id⟧ => ⟦2-char-id⟧.field == this.active && ⟦2-char-id⟧.from <= ⟦2-char-id⟧.from && ⟦2-char-id⟧.to >= ⟦2-char-id⟧.to))))
+      }
+    }
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.x.define({
         map: (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ && ⟦2-char-id⟧.map(⟦2-char-id⟧)
       }),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.E.define({
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.x.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define({
         create: () => null,
         update(⟦2-char-id⟧, ⟦2-char-id⟧) {
           for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.effects) {
             if (⟦2-char-id⟧.is(⟦2-char-id⟧)) return ⟦2-char-id⟧.value;
-            if (⟦2-char-id⟧.is(⟦2-char-id⟧) && ⟦2-char-id⟧) return new ⟦2-char-id⟧(⟦2-char-id⟧.ws, ⟦2-char-id⟧.value)
-          }
-          return ⟦2-char-id⟧ && ⟦2-char-id⟧.docChanged && (⟦2-char-id⟧ = ⟦2-char-id⟧.map(⟦2-char-id⟧.changes)), ⟦2-char-id⟧ && ⟦2-char-id⟧.selection && !⟦2-char-id⟧.selectionInsideField(⟦2-char-id⟧.selection) && (⟦2-char-id⟧ = null), JJ
+            if (⟦2-char-id⟧.is(⟦2-char-id⟧) && ⟦2-char-id⟧) return new ⟦2-char-id⟧(⟦2-char-id⟧.ek, ⟦2-char-id⟧.value)
+          }
+          return ⟦2-char-id⟧ && ⟦2-char-id⟧.docChanged && (⟦2-char-id⟧ = ⟦2-char-id⟧.map(⟦2-char-id⟧.changes)), ⟦2-char-id⟧ && ⟦2-char-id⟧.selection && !⟦2-char-id⟧.selectionInsideField(⟦2-char-id⟧.selection) && (⟦2-char-id⟧ = null), BB
         },
-        provide: ⟦2-char-id⟧ => ⟦2-char-id⟧.f.je.from(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧ ? ⟦2-char-id⟧.deco : ⟦2-char-id⟧.c.none))
+        provide: ⟦2-char-id⟧ => ⟦2-char-id⟧.i.QB.from(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧ ? ⟦2-char-id⟧.deco : ⟦2-char-id⟧.c.none))
       });
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧.m.create(⟦2-char-id⟧.filter((⟦2-char-id⟧ => ⟦2-char-id⟧.field == ⟦2-char-id⟧)).map((⟦2-char-id⟧ => ⟦2-char-id⟧.m.range(⟦2-char-id⟧.from, ⟦2-char-id⟧.to))))
+      return ⟦2-char-id⟧.h.create(⟦2-char-id⟧.filter((⟦2-char-id⟧ => ⟦2-char-id⟧.field == ⟦2-char-id⟧)).map((⟦2-char-id⟧ => ⟦2-char-id⟧.h.range(⟦2-char-id⟧.from, ⟦2-char-id⟧.to))))
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.parse(⟦2-char-id⟧);
-      return (⟦2-char-id⟧, ZJ, UJ, ⟦2-char-id⟧) => {
+      return (⟦2-char-id⟧, dB, yB, ⟦2-char-id⟧) => {
         let {
           text: ⟦2-char-id⟧,
-          ws: ⟦2-char-id⟧
+          ek: ⟦2-char-id⟧
         } = ⟦2-char-id⟧.instantiate(⟦2-char-id⟧.state, ⟦2-char-id⟧), {
           main: ⟦2-char-id⟧
         } = ⟦2-char-id⟧.state.selection, ⟦2-char-id⟧ = {
           changes: {
             from: ⟦2-char-id⟧,
             to: ⟦2-char-id⟧ == ⟦2-char-id⟧.from ? ⟦2-char-id⟧.to : ⟦2-char-id⟧,
-            insert: ⟦2-char-id⟧.F.of(⟦2-char-id⟧)
+            insert: ⟦2-char-id⟧.D.of(⟦2-char-id⟧)
           },
           scrollIntoView: !0,
-          annotations: ⟦2-char-id⟧ ? [⟦2-char-id⟧.of(⟦2-char-id⟧), ⟦2-char-id⟧.J.userEvent.of("input.complete")] : void 0
+          annotations: ⟦2-char-id⟧ ? [⟦2-char-id⟧.of(⟦2-char-id⟧), ⟦2-char-id⟧.G.userEvent.of("input.complete")] : void 0
         };
         if (⟦2-char-id⟧.length && (⟦2-char-id⟧.selection = ⟦2-char-id⟧(⟦2-char-id⟧, 0)), ⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧.field > 0))) {
           let ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, 0),
             ⟦2-char-id⟧ = ⟦2-char-id⟧.effects = [⟦2-char-id⟧.of(⟦2-char-id⟧)];
-          void 0 === ⟦2-char-id⟧.state.field(⟦2-char-id⟧, !1) && ⟦2-char-id⟧.push(⟦2-char-id⟧.A.appendConfig.of([⟦2-char-id⟧, hc, sc, ⟦2-char-id⟧]))
+          void 0 === ⟦2-char-id⟧.state.field(⟦2-char-id⟧, !1) && ⟦2-char-id⟧.push(⟦2-char-id⟧.x.appendConfig.of([⟦2-char-id⟧, kT, OT, ⟦2-char-id⟧]))
         }
         ⟦2-char-id⟧.dispatch(⟦2-char-id⟧.state.update(⟦2-char-id⟧))
       }
```

</details>

<details>
<summary>Hunk 54 · Change · +3 / -3</summary>

```diff
@@ -1195,10 +1195,10 @@
         } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.field(⟦2-char-id⟧, !1);
         if (!⟦2-char-id⟧ || ⟦2-char-id⟧ < 0 && 0 == ⟦2-char-id⟧.active) return !1;
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.active + ⟦2-char-id⟧,
-          ⟦2-char-id⟧ = ⟦2-char-id⟧ > 0 && !⟦2-char-id⟧.ws.some((⟦2-char-id⟧ => ⟦2-char-id⟧.field == ⟦2-char-id⟧ + ⟦2-char-id⟧));
+          ⟦2-char-id⟧ = ⟦2-char-id⟧ > 0 && !⟦2-char-id⟧.ek.some((⟦2-char-id⟧ => ⟦2-char-id⟧.field == ⟦2-char-id⟧ + ⟦2-char-id⟧));
         return ⟦2-char-id⟧(⟦2-char-id⟧.update({
-          selection: ⟦2-char-id⟧(⟦2-char-id⟧.ws, ⟦2-char-id⟧),
-          effects: ⟦2-char-id⟧.of(⟦2-char-id⟧ ? null : new ⟦2-char-id⟧(⟦2-char-id⟧.ws, ⟦2-char-id⟧)),
+          selection: ⟦2-char-id⟧(⟦2-char-id⟧.ek, ⟦2-char-id⟧),
+          effects: ⟦2-char-id⟧.of(⟦2-char-id⟧ ? null : new ⟦2-char-id⟧(⟦2-char-id⟧.ek, ⟦2-char-id⟧)),
           scrollIntoView: !0
         })), !0
       }
```

</details>

<details>
<summary>Hunk 55 · Change · +7 / -7</summary>

```diff
@@ -1219,28 +1219,28 @@
           })), !0)
         }
       }],
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define({
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define({
         combine: ⟦2-char-id⟧ => ⟦2-char-id⟧.length ? ⟦2-char-id⟧[0] : ⟦2-char-id⟧
       }),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.t.highest(⟦2-char-id⟧.K.compute([⟦2-char-id⟧], (⟦2-char-id⟧ => ⟦2-char-id⟧.facet(⟦2-char-id⟧))));
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.r.highest(⟦2-char-id⟧.S.compute([⟦2-char-id⟧], (⟦2-char-id⟧ => ⟦2-char-id⟧.facet(⟦2-char-id⟧))));
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       return {
-        ...cJ,
+        ...TB,
         apply: ⟦2-char-id⟧(⟦2-char-id⟧)
       }
     }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.f.domEventHandlers({
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.i.domEventHandlers({
       mousedown(⟦2-char-id⟧, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.state.field(⟦2-char-id⟧, !1);
         if (!⟦2-char-id⟧ || null == (⟦2-char-id⟧ = ⟦2-char-id⟧.posAtCoords({
             x: ⟦2-char-id⟧.clientX,
             y: ⟦2-char-id⟧.clientY
           }))) return !1;
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧.ws.find((⟦2-char-id⟧ => ⟦2-char-id⟧.from <= ⟦2-char-id⟧ && ⟦2-char-id⟧.to >= ⟦2-char-id⟧));
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧.ek.find((⟦2-char-id⟧ => ⟦2-char-id⟧.from <= ⟦2-char-id⟧ && ⟦2-char-id⟧.to >= ⟦2-char-id⟧));
         return !(!⟦2-char-id⟧ || ⟦2-char-id⟧.field == ⟦2-char-id⟧.active) && (⟦2-char-id⟧.dispatch({
-          selection: ⟦2-char-id⟧(⟦2-char-id⟧.ws, ⟦2-char-id⟧.field),
-          effects: ⟦2-char-id⟧.of(⟦2-char-id⟧.ws.some((⟦2-char-id⟧ => ⟦2-char-id⟧.field > ⟦2-char-id⟧.field)) ? new ⟦2-char-id⟧(⟦2-char-id⟧.ws, ⟦2-char-id⟧.field) : null),
+          selection: ⟦2-char-id⟧(⟦2-char-id⟧.ek, ⟦2-char-id⟧.field),
+          effects: ⟦2-char-id⟧.of(⟦2-char-id⟧.ek.some((⟦2-char-id⟧ => ⟦2-char-id⟧.field > ⟦2-char-id⟧.field)) ? new ⟦2-char-id⟧(⟦2-char-id⟧.ek, ⟦2-char-id⟧.field) : null),
           scrollIntoView: !0
         }), !0)
       }
```

</details>

<details>
<summary>Hunk 56 · Change · +5 / -5</summary>

```diff
@@ -1250,16 +1250,16 @@
         before: ")]}:;>",
         stringPrefixes: []
       },
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define({
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.x.define({
         map(⟦2-char-id⟧, ⟦2-char-id⟧) {
-          let ⟦2-char-id⟧ = ⟦2-char-id⟧.mapPos(⟦2-char-id⟧, -1, ⟦2-char-id⟧.r.TrackAfter);
+          let ⟦2-char-id⟧ = ⟦2-char-id⟧.mapPos(⟦2-char-id⟧, -1, ⟦2-char-id⟧.o.TrackAfter);
           return null == ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧
         }
       }),
-      ⟦2-char-id⟧ = new class extends ⟦2-char-id⟧.x {};
+      ⟦2-char-id⟧ = new class extends ⟦2-char-id⟧.w {};
     ⟦2-char-id⟧.startSide = 1, ⟦2-char-id⟧.endSide = -1;
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.E.define({
-      create: () => ⟦2-char-id⟧.v.empty,
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define({
+      create: () => ⟦2-char-id⟧.u.empty,
       update(⟦2-char-id⟧, ⟦2-char-id⟧) {
         if (⟦2-char-id⟧ = ⟦2-char-id⟧.map(⟦2-char-id⟧.changes), ⟦2-char-id⟧.selection) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.state.doc.lineAt(⟦2-char-id⟧.selection.main.head);
```

</details>

<details>
<summary>Hunk 57 · Change · +6 / -6</summary>

```diff
@@ -1282,24 +1282,24 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < 16; ⟦2-char-id⟧ += 2)
         if (⟦2-char-id⟧.charCodeAt(⟦2-char-id⟧) == ⟦2-char-id⟧) return ⟦2-char-id⟧.charAt(⟦2-char-id⟧ + 1);
-      return (0, ⟦2-char-id⟧.bb)(⟦2-char-id⟧ < 128 ? JJ : ⟦2-char-id⟧ + 1)
+      return (0, ⟦2-char-id⟧.Y)(⟦2-char-id⟧ < 128 ? BB : ⟦2-char-id⟧ + 1)
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       return ⟦2-char-id⟧.languageDataAt("closeBrackets", ⟦2-char-id⟧)[0] || ⟦2-char-id⟧
     }
     const ⟦2-char-id⟧ = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.f.inputHandler.of(((⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) => {
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.i.inputHandler.of(((⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) => {
         if ((⟦2-char-id⟧ ? ⟦2-char-id⟧.composing : ⟦2-char-id⟧.compositionStarted) || ⟦2-char-id⟧.state.readOnly) return !1;
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.state.selection.main;
-        if (⟦2-char-id⟧.length > 2 || 2 == ⟦2-char-id⟧.length && 1 == (0, ⟦2-char-id⟧.P)((0, ⟦2-char-id⟧.L)(⟦2-char-id⟧, 0)) || ⟦2-char-id⟧ != ⟦2-char-id⟧.from || ⟦2-char-id⟧ != ⟦2-char-id⟧.to) return !1;
+        if (⟦2-char-id⟧.length > 2 || 2 == ⟦2-char-id⟧.length && 1 == (0, ⟦2-char-id⟧.M)((0, ⟦2-char-id⟧.K)(⟦2-char-id⟧, 0)) || ⟦2-char-id⟧ != ⟦2-char-id⟧.from || ⟦2-char-id⟧ != ⟦2-char-id⟧.to) return !1;
         let ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.selection.main.head),
             ⟦2-char-id⟧ = ⟦2-char-id⟧.brackets || ⟦2-char-id⟧.brackets;
           for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) {
-            let ⟦2-char-id⟧ = ⟦2-char-id⟧((0, ⟦2-char-id⟧.L)(⟦2-char-id⟧, 0));
-            if (⟦2-char-id⟧ == ⟦2-char-id⟧) return ⟦2-char-id⟧ == ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, eJ, ⟦2-char-id⟧.indexOf(⟦2-char-id⟧ + ⟦2-char-id⟧ + ⟦2-char-id⟧) > -1, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, eJ, XJ, ⟦2-char-id⟧.before || ⟦2-char-id⟧.before);
-            if (⟦2-char-id⟧ == ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.selection.main.from)) return ⟦2-char-id⟧(⟦2-char-id⟧, eJ, ⟦2-char-id⟧)
+            let ⟦2-char-id⟧ = ⟦2-char-id⟧((0, ⟦2-char-id⟧.K)(⟦2-char-id⟧, 0));
+            if (⟦2-char-id⟧ == ⟦2-char-id⟧) return ⟦2-char-id⟧ == ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, pB, ⟦2-char-id⟧.indexOf(⟦2-char-id⟧ + ⟦2-char-id⟧ + ⟦2-char-id⟧) > -1, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, pB, lB, ⟦2-char-id⟧.before || ⟦2-char-id⟧.before);
+            if (⟦2-char-id⟧ == ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.selection.main.from)) return ⟦2-char-id⟧(⟦2-char-id⟧, pB, ⟦2-char-id⟧)
           }
           return null
         }(⟦2-char-id⟧.state, ⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 58 · Change · +3 / -3</summary>

```diff
@@ -1319,15 +1319,15 @@
               if (⟦2-char-id⟧.empty) {
                 let ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
                   let ⟦2-char-id⟧ = ⟦2-char-id⟧.sliceString(⟦2-char-id⟧ - 2, ⟦2-char-id⟧);
-                  return (0, ⟦2-char-id⟧.P)((0, ⟦2-char-id⟧.L)(⟦2-char-id⟧, 0)) == ⟦2-char-id⟧.length ? ZJ : ⟦2-char-id⟧.slice(1)
+                  return (0, ⟦2-char-id⟧.M)((0, ⟦2-char-id⟧.K)(⟦2-char-id⟧, 0)) == ⟦2-char-id⟧.length ? dB : ⟦2-char-id⟧.slice(1)
                 }(⟦2-char-id⟧.doc, ⟦2-char-id⟧.head);
                 for (let ⟦2-char-id⟧ of ⟦2-char-id⟧)
-                  if (⟦2-char-id⟧ == ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧.doc, ⟦2-char-id⟧.head) == ⟦2-char-id⟧((0, ⟦2-char-id⟧.L)(⟦2-char-id⟧, 0))) return {
+                  if (⟦2-char-id⟧ == ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧.doc, ⟦2-char-id⟧.head) == ⟦2-char-id⟧((0, ⟦2-char-id⟧.K)(⟦2-char-id⟧, 0))) return {
                     changes: {
                       from: ⟦2-char-id⟧.head - ⟦2-char-id⟧.length,
                       to: ⟦2-char-id⟧.head + ⟦2-char-id⟧.length
                     },
-                    range: ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧.head - ⟦2-char-id⟧.length)
+                    range: ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧.head - ⟦2-char-id⟧.length)
                   }
               }
               return {
```

</details>

<details>
<summary>Hunk 59 · Change · +5 / -5</summary>

```diff
@@ -1345,15 +1345,15 @@
       let ⟦2-char-id⟧ = !1;
       return ⟦2-char-id⟧.field(⟦2-char-id⟧).between(0, ⟦2-char-id⟧.doc.length, (⟦2-char-id⟧ => {
         ⟦2-char-id⟧ == ⟦2-char-id⟧ && (⟦2-char-id⟧ = !0)
-      })), ZJ
+      })), dB
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.sliceString(⟦2-char-id⟧, ⟦2-char-id⟧ + 2);
-      return ⟦2-char-id⟧.slice(0, (0, ⟦2-char-id⟧.P)((0, ⟦2-char-id⟧.L)(⟦2-char-id⟧, 0)))
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧.slice(0, (0, ⟦2-char-id⟧.M)((0, ⟦2-char-id⟧.K)(⟦2-char-id⟧, 0)))
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = null,
         ⟦2-char-id⟧ = ⟦2-char-id⟧.changeByRange((⟦2-char-id⟧ => {
           if (!⟦2-char-id⟧.empty) return {
```

</details>

<details>
<summary>Hunk 60 · Change · +1 / -1</summary>

```diff
@@ -1365,7 +1365,7 @@
               from: ⟦2-char-id⟧.to
             }],
             effects: ⟦2-char-id⟧.of(⟦2-char-id⟧.to + ⟦2-char-id⟧.length),
-            range: ⟦2-char-id⟧.m.range(⟦2-char-id⟧.anchor + ⟦2-char-id⟧.length, ⟦2-char-id⟧.head + ⟦2-char-id⟧.length)
+            range: ⟦2-char-id⟧.h.range(⟦2-char-id⟧.anchor + ⟦2-char-id⟧.length, ⟦2-char-id⟧.head + ⟦2-char-id⟧.length)
           };
           let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.doc, ⟦2-char-id⟧.head);
           return !⟦2-char-id⟧ || /\s/.test(⟦2-char-id⟧) || ⟦2-char-id⟧.indexOf(⟦2-char-id⟧) > -1 ? {
```

</details>

<details>
<summary>Hunk 61 · Change · +1 / -1</summary>

```diff
@@ -1374,7 +1374,7 @@
               from: ⟦2-char-id⟧.head
             },
             effects: ⟦2-char-id⟧.of(⟦2-char-id⟧.head + ⟦2-char-id⟧.length),
-            range: ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧.head + ⟦2-char-id⟧.length)
+            range: ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧.head + ⟦2-char-id⟧.length)
           } : {
             range: ⟦2-char-id⟧ = ⟦2-char-id⟧
           }
```

</details>

<details>
<summary>Hunk 62 · Change · +1 / -1</summary>

```diff
@@ -1385,7 +1385,7 @@
       })
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = null,
         ⟦2-char-id⟧ = ⟦2-char-id⟧.changeByRange((⟦2-char-id⟧ => ⟦2-char-id⟧.empty && ⟦2-char-id⟧(⟦2-char-id⟧.doc, ⟦2-char-id⟧.head) == ⟦2-char-id⟧ ? {
           changes: {
```

</details>

<details>
<summary>Hunk 63 · Change · +1 / -1</summary>

```diff
@@ -1393,7 +1393,7 @@
             to: ⟦2-char-id⟧.head + ⟦2-char-id⟧.length,
             insert: ⟦2-char-id⟧
           },
-          range: ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧.head + ⟦2-char-id⟧.length)
+          range: ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧.head + ⟦2-char-id⟧.length)
         } : ⟦2-char-id⟧ = {
           range: ⟦2-char-id⟧
         }));
```

</details>

<details>
<summary>Hunk 64 · Change · +1 / -1</summary>

```diff
@@ -1403,7 +1403,7 @@
       })
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.stringPrefixes || ⟦2-char-id⟧.stringPrefixes,
         ⟦2-char-id⟧ = null,
         ⟦2-char-id⟧ = ⟦2-char-id⟧.changeByRange((⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 65 · Change · +1 / -1</summary>

```diff
@@ -1416,7 +1416,7 @@
               from: ⟦2-char-id⟧.to
             }],
             effects: ⟦2-char-id⟧.of(⟦2-char-id⟧.to + ⟦2-char-id⟧.length),
-            range: ⟦2-char-id⟧.m.range(⟦2-char-id⟧.anchor + ⟦2-char-id⟧.length, ⟦2-char-id⟧.head + ⟦2-char-id⟧.length)
+            range: ⟦2-char-id⟧.h.range(⟦2-char-id⟧.anchor + ⟦2-char-id⟧.length, ⟦2-char-id⟧.head + ⟦2-char-id⟧.length)
           };
           let ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.head,
             ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.doc, ⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 66 · Change · +3 / -3</summary>

```diff
@@ -1427,17 +1427,17 @@
                 from: ⟦2-char-id⟧
               },
               effects: ⟦2-char-id⟧.of(⟦2-char-id⟧ + ⟦2-char-id⟧.length),
-              range: ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧ + ⟦2-char-id⟧.length)
+              range: ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧ + ⟦2-char-id⟧.length)
             };
             if (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)) {
-              let ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧, ⟦2-char-id⟧ + 3 * ⟦2-char-id⟧.length) == ⟦2-char-id⟧ + ⟦2-char-id⟧ + ⟦2-char-id⟧ ? ⟦2-char-id⟧ + ⟦2-char-id⟧ + cJ : ⟦2-char-id⟧;
+              let ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧, ⟦2-char-id⟧ + 3 * ⟦2-char-id⟧.length) == ⟦2-char-id⟧ + ⟦2-char-id⟧ + ⟦2-char-id⟧ ? ⟦2-char-id⟧ + ⟦2-char-id⟧ + TB : ⟦2-char-id⟧;
               return {
                 changes: {
                   from: ⟦2-char-id⟧,
                   to: ⟦2-char-id⟧ + ⟦2-char-id⟧.length,
                   insert: ⟦2-char-id⟧
                 },
-                range: ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧ + ⟦2-char-id⟧.length)
+                range: ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧ + ⟦2-char-id⟧.length)
               }
             }
           } else {
```

</details>

<details>
<summary>Hunk 67 · Change · +3 / -3</summary>

```diff
@@ -1447,10 +1447,10 @@
                 from: ⟦2-char-id⟧
               },
               effects: ⟦2-char-id⟧.of(⟦2-char-id⟧ + ⟦2-char-id⟧.length),
-              range: ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧ + ⟦2-char-id⟧.length)
+              range: ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧ + ⟦2-char-id⟧.length)
             };
-            if (⟦2-char-id⟧.charCategorizer(⟦2-char-id⟧)(⟦2-char-id⟧) != ⟦2-char-id⟧.i.Word && ⟦2-char-id⟧(⟦2-char-id⟧, jJ, ⟦2-char-id⟧) > -1 && ! function(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-                let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.ub)(⟦2-char-id⟧).resolveInner(⟦2-char-id⟧, -1),
+            if (⟦2-char-id⟧.charCategorizer(⟦2-char-id⟧)(⟦2-char-id⟧) != ⟦2-char-id⟧.e.Word && ⟦2-char-id⟧(⟦2-char-id⟧, gB, ⟦2-char-id⟧) > -1 && ! function(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+                let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.hb)(⟦2-char-id⟧).resolveInner(⟦2-char-id⟧, -1),
                   ⟦2-char-id⟧ = ⟦2-char-id⟧.reduce(((⟦2-char-id⟧, ⟦2-char-id⟧) => Math.max(⟦2-char-id⟧, ⟦2-char-id⟧.length)), 0);
                 for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < 5; ⟦2-char-id⟧++) {
                   let ⟦2-char-id⟧ = ⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧.from, Math.min(⟦2-char-id⟧.to, ⟦2-char-id⟧.from + ⟦2-char-id⟧.length + ⟦2-char-id⟧)),
```

</details>

<details>
<summary>Hunk 68 · Change · +2 / -2</summary>

```diff
@@ -1468,13 +1468,13 @@
                   ⟦2-char-id⟧ = ⟦2-char-id⟧
                 }
                 return !1
-              }(⟦2-char-id⟧, jJ, cJ, ⟦2-char-id⟧)) return {
+              }(⟦2-char-id⟧, gB, TB, ⟦2-char-id⟧)) return {
               changes: {
                 insert: ⟦2-char-id⟧ + ⟦2-char-id⟧,
                 from: ⟦2-char-id⟧
               },
               effects: ⟦2-char-id⟧.of(⟦2-char-id⟧ + ⟦2-char-id⟧.length),
-              range: ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧ + ⟦2-char-id⟧.length)
+              range: ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧ + ⟦2-char-id⟧.length)
             }
           }
           return {
```

</details>

<details>
<summary>Hunk 69 · Change · +5 / -5</summary>

```diff
@@ -1488,23 +1488,23 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.ub)(⟦2-char-id⟧).resolveInner(⟦2-char-id⟧ + 1);
+      let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.hb)(⟦2-char-id⟧).resolveInner(⟦2-char-id⟧ + 1);
       return ⟦2-char-id⟧.parent && ⟦2-char-id⟧.from == ⟦2-char-id⟧
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.charCategorizer(⟦2-char-id⟧);
-      if (⟦2-char-id⟧(⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧ - 1, ⟦2-char-id⟧)) != ⟦2-char-id⟧.i.Word) return ⟦2-char-id⟧;
+      if (⟦2-char-id⟧(⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧ - 1, ⟦2-char-id⟧)) != ⟦2-char-id⟧.e.Word) return ⟦2-char-id⟧;
       for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧.length;
-        if (⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧, ⟦2-char-id⟧) == ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧ - 1, ⟦2-char-id⟧)) != ⟦2-char-id⟧.i.Word) return ⟦2-char-id⟧
+        if (⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧, ⟦2-char-id⟧) == ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧ - 1, ⟦2-char-id⟧)) != ⟦2-char-id⟧.e.Word) return ⟦2-char-id⟧
       }
       return -1
     }
 
     function ⟦2-char-id⟧() {
       let ⟦2-char-id⟧ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-      return [⟦2-char-id⟧, NJ, ⟦2-char-id⟧.of(⟦2-char-id⟧), RJ, Pc, ⟦2-char-id⟧]
+      return [⟦2-char-id⟧, ZB, ⟦2-char-id⟧.of(⟦2-char-id⟧), qB, ST, ⟦2-char-id⟧]
     }
     const ⟦2-char-id⟧ = [{
         key: "Ctrl-Space",
```

</details>

<details>
<summary>Hunk 70 · Change · +8 / -8</summary>

```diff
@@ -1542,18 +1542,18 @@
           return !(⟦2-char-id⟧.state.readOnly || !⟦2-char-id⟧ || !⟦2-char-id⟧.open || ⟦2-char-id⟧.open.selected < 0 || ⟦2-char-id⟧.open.disabled || Date.now() - ⟦2-char-id⟧.open.timestamp < ⟦2-char-id⟧.state.facet(⟦2-char-id⟧).interactionDelay) && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.open.options[⟦2-char-id⟧.open.selected])
         }
       }],
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.t.highest(⟦2-char-id⟧.K.computeN([⟦2-char-id⟧], (⟦2-char-id⟧ => ⟦2-char-id⟧.facet(⟦2-char-id⟧).defaultKeymap ? [⟦2-char-id⟧] : [])))
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.r.highest(⟦2-char-id⟧.S.computeN([⟦2-char-id⟧], (⟦2-char-id⟧ => ⟦2-char-id⟧.facet(⟦2-char-id⟧).defaultKeymap ? [⟦2-char-id⟧] : [])))
   },
-  40189: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  40187: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      b: () => ⟦2-char-id⟧,
-      d: () => ⟦2-char-id⟧,
-      f: () => ⟦2-char-id⟧,
-      i: () => ⟦2-char-id⟧
+      e: () => ⟦2-char-id⟧,
+      i: () => ⟦2-char-id⟧,
+      m: () => ⟦2-char-id⟧,
+      o: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(40060);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(40036);
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         this.origin = ⟦2-char-id⟧, this.changes = ⟦2-char-id⟧, this.effects = ⟦2-char-id⟧, this.clientID = ⟦2-char-id⟧
       }
     }
```

</details>

<details>
<summary>Hunk 71 · Change · +5 / -5</summary>

```diff
@@ -1562,20 +1562,20 @@
         this.version = ⟦2-char-id⟧, this.unconfirmed = ⟦2-char-id⟧
       }
     }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define({
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define({
         combine(⟦2-char-id⟧) {
-          let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.S)(⟦2-char-id⟧, {
+          let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.P)(⟦2-char-id⟧, {
             startVersion: 0,
             clientID: null,
             sharedEffects: () => []
           }, {
             generatedID: ⟦2-char-id⟧ => ⟦2-char-id⟧
           });
-          return null == ⟦2-char-id⟧.clientID && (⟦2-char-id⟧.clientID = ⟦2-char-id⟧.length && ⟦2-char-id⟧[0].generatedID || ""), cJ
+          return null == ⟦2-char-id⟧.clientID && (⟦2-char-id⟧.clientID = ⟦2-char-id⟧.length && ⟦2-char-id⟧[0].generatedID || ""), TB
         }
       }),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.d.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.E.define({
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.c.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define({
         create: ⟦2-char-id⟧ => new ⟦2-char-id⟧(⟦2-char-id⟧.facet(⟦2-char-id⟧).startVersion, []),
         update(⟦2-char-id⟧, ⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.annotation(⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 72 · Change · +1 / -1</summary>

```diff
@@ -1584,7 +1584,7 @@
             sharedEffects: ⟦2-char-id⟧,
             clientID: ⟦2-char-id⟧
           } = ⟦2-char-id⟧.startState.facet(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
-          return ⟦2-char-id⟧.length || !⟦2-char-id⟧.changes.empty ? new ⟦2-char-id⟧(⟦2-char-id⟧.version, ⟦2-char-id⟧.unconfirmed.concat(new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.changes, jJ, ⟦2-char-id⟧))) : ⟦2-char-id⟧
+          return ⟦2-char-id⟧.length || !⟦2-char-id⟧.changes.empty ? new ⟦2-char-id⟧(⟦2-char-id⟧.version, ⟦2-char-id⟧.unconfirmed.concat(new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.changes, gB, ⟦2-char-id⟧))) : ⟦2-char-id⟧
         }
       });
 
```

</details>

<details>
<summary>Hunk 73 · Change · +4 / -4</summary>

```diff
@@ -1608,19 +1608,19 @@
         ⟦2-char-id⟧ = 0;
       for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧ < ⟦2-char-id⟧.length ? ⟦2-char-id⟧[⟦2-char-id⟧] : null;
-        ⟦2-char-id⟧ && ⟦2-char-id⟧.clientID == ⟦2-char-id⟧.clientID ? (⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.map(⟦2-char-id⟧.changes, !0)), ⟦2-char-id⟧ = ⟦2-char-id⟧.A.mapEffects(⟦2-char-id⟧, ⟦2-char-id⟧.changes), ⟦2-char-id⟧++) : (⟦2-char-id⟧ = ⟦2-char-id⟧.A.mapEffects(⟦2-char-id⟧, ⟦2-char-id⟧.changes), ⟦2-char-id⟧.effects && (⟦2-char-id⟧ = ⟦2-char-id⟧.concat(⟦2-char-id⟧.effects)), ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.compose(⟦2-char-id⟧.changes) : ⟦2-char-id⟧.changes)
+        ⟦2-char-id⟧ && ⟦2-char-id⟧.clientID == ⟦2-char-id⟧.clientID ? (⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.map(⟦2-char-id⟧.changes, !0)), ⟦2-char-id⟧ = ⟦2-char-id⟧.x.mapEffects(⟦2-char-id⟧, ⟦2-char-id⟧.changes), ⟦2-char-id⟧++) : (⟦2-char-id⟧ = ⟦2-char-id⟧.x.mapEffects(⟦2-char-id⟧, ⟦2-char-id⟧.changes), ⟦2-char-id⟧.effects && (⟦2-char-id⟧ = ⟦2-char-id⟧.concat(⟦2-char-id⟧.effects)), ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.compose(⟦2-char-id⟧.changes) : ⟦2-char-id⟧.changes)
       }
       if (⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.slice(⟦2-char-id⟧)), ⟦2-char-id⟧.length && (⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.map((⟦2-char-id⟧ => {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.changes.map(⟦2-char-id⟧);
-          return ⟦2-char-id⟧ = ⟦2-char-id⟧.map(⟦2-char-id⟧.changes, !0), new ⟦2-char-id⟧(⟦2-char-id⟧.origin, cJ, ⟦2-char-id⟧.A.mapEffects(⟦2-char-id⟧.effects, ⟦2-char-id⟧), ⟦2-char-id⟧)
+          return ⟦2-char-id⟧ = ⟦2-char-id⟧.map(⟦2-char-id⟧.changes, !0), new ⟦2-char-id⟧(⟦2-char-id⟧.origin, TB, ⟦2-char-id⟧.x.mapEffects(⟦2-char-id⟧.effects, ⟦2-char-id⟧), ⟦2-char-id⟧)
         }))), ⟦2-char-id⟧.length)) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.reduce(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.compose(⟦2-char-id⟧.changes)), ⟦2-char-id⟧.ChangeSet.empty(⟦2-char-id⟧[0].changes.length));
-        ⟦2-char-id⟧ = ⟦2-char-id⟧.A.mapEffects(⟦2-char-id⟧, ⟦2-char-id⟧)
+        ⟦2-char-id⟧ = ⟦2-char-id⟧.x.mapEffects(⟦2-char-id⟧, ⟦2-char-id⟧)
       }
       return ⟦2-char-id⟧ ? ⟦2-char-id⟧.update({
         changes: ⟦2-char-id⟧,
         effects: ⟦2-char-id⟧,
-        annotations: [⟦2-char-id⟧.J.addToHistory.of(!1), ⟦2-char-id⟧.J.remote.of(!0), ⟦2-char-id⟧.of(new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧))],
+        annotations: [⟦2-char-id⟧.G.addToHistory.of(!1), ⟦2-char-id⟧.G.remote.of(!0), ⟦2-char-id⟧.of(new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧))],
         filter: !1
       }) : ⟦2-char-id⟧.update({
         annotations: [⟦2-char-id⟧.of(new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧))]
```

</details>

<details>
<summary>Hunk 74 · Change · +7 / -7</summary>

```diff
@@ -1635,30 +1635,30 @@
       return ⟦2-char-id⟧.field(⟦2-char-id⟧).version
     }
   },
-  40090: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  40073: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧
+      d: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(40080);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(40064);
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, VB, yB, pB, lB, JB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
           ⟦2-char-id⟧ = arguments.length > 10 ? arguments[10] : void 0;
         this.p = ⟦2-char-id⟧, this.stack = ⟦2-char-id⟧, this.state = ⟦2-char-id⟧, this.reducePos = ⟦2-char-id⟧, this.pos = ⟦2-char-id⟧, this.score = ⟦2-char-id⟧, this.buffer = ⟦2-char-id⟧, this.bufferBase = ⟦2-char-id⟧, this.curContext = ⟦2-char-id⟧, this.lookAhead = ⟦2-char-id⟧, this.parent = ⟦2-char-id⟧
       }
       toString() {
-        return `[${this.stack.filter(((JJ,cJ)=>cJ%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
+        return `[${this.stack.filter(((BB,TB)=>TB%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
       }
       static start(⟦2-char-id⟧, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.parser.context;
-        return new ⟦2-char-id⟧(⟦2-char-id⟧, [], cJ, ZJ, ZJ, 0, [], 0, ⟦2-char-id⟧ ? new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.start) : null, 0, null)
+        return new ⟦2-char-id⟧(⟦2-char-id⟧, [], TB, dB, dB, 0, [], 0, ⟦2-char-id⟧ ? new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.start) : null, 0, null)
       }
       get context() {
         return this.curContext ? this.curContext.context : null
       }
       pushState(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        this.stack.push(this.state, cJ, this.bufferBase + this.buffer.length), this.state = ⟦2-char-id⟧
+        this.stack.push(this.state, TB, this.bufferBase + this.buffer.length), this.state = ⟦2-char-id⟧
       }
       reduce(⟦2-char-id⟧) {
         var ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 75 · Change · +5 / -5</summary>

```diff
@@ -1669,26 +1669,26 @@
           } = this.p,
           ⟦2-char-id⟧ = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
           ⟦2-char-id⟧ = ⟦2-char-id⟧.dynamicPrecedence(⟦2-char-id⟧);
-        if (⟦2-char-id⟧ && (this.score += ⟦2-char-id⟧), 0 == ⟦2-char-id⟧) return this.pushState(⟦2-char-id⟧.getGoto(this.state, FJ, !0), this.reducePos), ⟦2-char-id⟧ < ⟦2-char-id⟧.minRepeatTerm && this.storeNode(⟦2-char-id⟧, this.reducePos, this.reducePos, ⟦2-char-id⟧ ? 8 : 4, !0), void this.reduceContext(⟦2-char-id⟧, this.reducePos);
+        if (⟦2-char-id⟧ && (this.score += ⟦2-char-id⟧), 0 == ⟦2-char-id⟧) return this.pushState(⟦2-char-id⟧.getGoto(this.state, VB, !0), this.reducePos), ⟦2-char-id⟧ < ⟦2-char-id⟧.minRepeatTerm && this.storeNode(⟦2-char-id⟧, this.reducePos, this.reducePos, ⟦2-char-id⟧ ? 8 : 4, !0), void this.reduceContext(⟦2-char-id⟧, this.reducePos);
         let ⟦2-char-id⟧ = this.stack.length - 3 * (⟦2-char-id⟧ - 1) - (262144 & ⟦2-char-id⟧ ? 6 : 0),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧ ? this.stack[⟦2-char-id⟧ - 2] : this.p.ws[0].from,
+          ⟦2-char-id⟧ = ⟦2-char-id⟧ ? this.stack[⟦2-char-id⟧ - 2] : this.p.ek[0].from,
           ⟦2-char-id⟧ = this.reducePos - ⟦2-char-id⟧;
         ⟦2-char-id⟧ >= 2⟦2-char-id⟧ && !(null === (⟦2-char-id⟧ = this.p.parser.nodeSet.types[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.isAnonymous) && (⟦2-char-id⟧ == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = ⟦2-char-id⟧) : this.p.lastBigReductionSize < ⟦2-char-id⟧ && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = ⟦2-char-id⟧, this.p.lastBigReductionSize = ⟦2-char-id⟧));
         let ⟦2-char-id⟧ = ⟦2-char-id⟧ ? this.stack[⟦2-char-id⟧ - 1] : 0,
           ⟦2-char-id⟧ = this.bufferBase + this.buffer.length - ⟦2-char-id⟧;
         if (⟦2-char-id⟧ < ⟦2-char-id⟧.minRepeatTerm || 131072 & ⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.stateFlag(this.state, 1) ? this.pos : this.reducePos;
-          this.storeNode(⟦2-char-id⟧, qJ, JJ, ⟦2-char-id⟧ + 4, !0)
+          this.storeNode(⟦2-char-id⟧, YB, BB, ⟦2-char-id⟧ + 4, !0)
         }
         if (262144 & ⟦2-char-id⟧) this.state = this.stack[⟦2-char-id⟧];
         else {
           let ⟦2-char-id⟧ = this.stack[⟦2-char-id⟧ - 3];
-          this.state = ⟦2-char-id⟧.getGoto(⟦2-char-id⟧, FJ, !0)
+          this.state = ⟦2-char-id⟧.getGoto(⟦2-char-id⟧, VB, !0)
         }
         for (; this.stack.length > ⟦2-char-id⟧;) this.stack.pop();
         this.reduceContext(⟦2-char-id⟧, ⟦2-char-id⟧)
       }
-      storeNode(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      storeNode(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
           ⟦2-char-id⟧ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
         if (0 == ⟦2-char-id⟧ && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
```

</details>

<details>
<summary>Hunk 76 · Change · +3 / -3</summary>

```diff
@@ -1711,9 +1711,9 @@
               for (; ⟦2-char-id⟧ > 0 && this.buffer[⟦2-char-id⟧ - 2] > ⟦2-char-id⟧;) this.buffer[⟦2-char-id⟧] = this.buffer[⟦2-char-id⟧ - 4], this.buffer[⟦2-char-id⟧ + 1] = this.buffer[⟦2-char-id⟧ - 3], this.buffer[⟦2-char-id⟧ + 2] = this.buffer[⟦2-char-id⟧ - 2], this.buffer[⟦2-char-id⟧ + 3] = this.buffer[⟦2-char-id⟧ - 1], ⟦2-char-id⟧ -= 4, ⟦2-char-id⟧ > 4 && (⟦2-char-id⟧ -= 4)
           }
           this.buffer[⟦2-char-id⟧] = ⟦2-char-id⟧, this.buffer[⟦2-char-id⟧ + 1] = ⟦2-char-id⟧, this.buffer[⟦2-char-id⟧ + 2] = ⟦2-char-id⟧, this.buffer[⟦2-char-id⟧ + 3] = ⟦2-char-id⟧
-        } else this.buffer.push(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧)
-      }
-      shift(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+        } else this.buffer.push(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧)
+      }
+      shift(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         if (131072 & ⟦2-char-id⟧) this.pushState(65535 & ⟦2-char-id⟧, this.pos);
         else if (0 == (262144 & ⟦2-char-id⟧)) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 77 · Change · +6 / -6</summary>

```diff
@@ -1722,17 +1722,17 @@
             } = this.p;
           this.pos = ⟦2-char-id⟧;
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.stateFlag(⟦2-char-id⟧, 1);
-          !⟦2-char-id⟧ && (⟦2-char-id⟧ > ⟦2-char-id⟧ || ⟦2-char-id⟧ <= ⟦2-char-id⟧.maxNode) && (this.reducePos = ⟦2-char-id⟧), this.pushState(⟦2-char-id⟧, ⟦2-char-id⟧ ? ZJ : Math.min(⟦2-char-id⟧, this.reducePos)), this.shiftContext(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ <= ⟦2-char-id⟧.maxNode && this.buffer.push(⟦2-char-id⟧, ZJ, FJ, 4)
-        } else this.pos = ⟦2-char-id⟧, this.shiftContext(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ <= this.p.parser.maxNode && this.buffer.push(⟦2-char-id⟧, ZJ, FJ, 4)
-      }
-      apply(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-        65536 & ⟦2-char-id⟧ ? this.reduce(⟦2-char-id⟧) : this.shift(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧)
+          !⟦2-char-id⟧ && (⟦2-char-id⟧ > ⟦2-char-id⟧ || ⟦2-char-id⟧ <= ⟦2-char-id⟧.maxNode) && (this.reducePos = ⟦2-char-id⟧), this.pushState(⟦2-char-id⟧, ⟦2-char-id⟧ ? dB : Math.min(⟦2-char-id⟧, this.reducePos)), this.shiftContext(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ <= ⟦2-char-id⟧.maxNode && this.buffer.push(⟦2-char-id⟧, dB, VB, 4)
+        } else this.pos = ⟦2-char-id⟧, this.shiftContext(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ <= this.p.parser.maxNode && this.buffer.push(⟦2-char-id⟧, dB, VB, 4)
+      }
+      apply(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+        65536 & ⟦2-char-id⟧ ? this.reduce(⟦2-char-id⟧) : this.shift(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧)
       }
       useNode(⟦2-char-id⟧, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = this.p.reused.length - 1;
         (⟦2-char-id⟧ < 0 || this.p.reused[⟦2-char-id⟧] != ⟦2-char-id⟧) && (this.p.reused.push(⟦2-char-id⟧), ⟦2-char-id⟧++);
         let ⟦2-char-id⟧ = this.pos;
-        this.reducePos = this.pos = ⟦2-char-id⟧ + ⟦2-char-id⟧.length, this.pushState(⟦2-char-id⟧, ⟦2-char-id⟧), this.buffer.push(⟦2-char-id⟧, FJ, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, JJ, this, this.p.stream.reset(this.pos - ⟦2-char-id⟧.length)))
+        this.reducePos = this.pos = ⟦2-char-id⟧ + ⟦2-char-id⟧.length, this.pushState(⟦2-char-id⟧, ⟦2-char-id⟧), this.buffer.push(⟦2-char-id⟧, VB, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, BB, this, this.p.stream.reset(this.pos - ⟦2-char-id⟧.length)))
       }
       split() {
         let ⟦2-char-id⟧ = this,
```

</details>

<details>
<summary>Hunk 78 · Change · +2 / -2</summary>

```diff
@@ -1741,11 +1741,11 @@
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.buffer.slice(⟦2-char-id⟧),
           ⟦2-char-id⟧ = ⟦2-char-id⟧.bufferBase + ⟦2-char-id⟧;
         for (; ⟦2-char-id⟧ && ⟦2-char-id⟧ == ⟦2-char-id⟧.bufferBase;) ⟦2-char-id⟧ = ⟦2-char-id⟧.parent;
-        return new ⟦2-char-id⟧(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, ZJ, FJ, this.curContext, this.lookAhead, ⟦2-char-id⟧)
+        return new ⟦2-char-id⟧(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, dB, VB, this.curContext, this.lookAhead, ⟦2-char-id⟧)
       }
       recoverByDelete(⟦2-char-id⟧, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧ <= this.p.parser.maxNode;
-        ⟦2-char-id⟧ && this.storeNode(⟦2-char-id⟧, this.pos, cJ, 4), this.storeNode(0, this.pos, cJ, ⟦2-char-id⟧ ? 8 : 4), this.pos = this.reducePos = ⟦2-char-id⟧, this.score -= 190
+        ⟦2-char-id⟧ && this.storeNode(⟦2-char-id⟧, this.pos, TB, 4), this.storeNode(0, this.pos, TB, ⟦2-char-id⟧ ? 8 : 4), this.pos = this.reducePos = ⟦2-char-id⟧, this.score -= 190
       }
       canShift(⟦2-char-id⟧) {
         for (let ⟦2-char-id⟧ = new ⟦2-char-id⟧(this);;) {
```

</details>

<details>
<summary>Hunk 79 · Change · +1 / -1</summary>

```diff
@@ -1786,7 +1786,7 @@
           let ⟦2-char-id⟧ = ⟦2-char-id⟧ >> 19,
             ⟦2-char-id⟧ = 65535 & ⟦2-char-id⟧,
             ⟦2-char-id⟧ = this.stack.length - 3 * ⟦2-char-id⟧;
-          if (⟦2-char-id⟧ < 0 || ⟦2-char-id⟧.getGoto(this.stack[⟦2-char-id⟧], FJ, !1) < 0) {
+          if (⟦2-char-id⟧ < 0 || ⟦2-char-id⟧.getGoto(this.stack[⟦2-char-id⟧], VB, !1) < 0) {
             let ⟦2-char-id⟧ = this.findForcedReduction();
             if (null == ⟦2-char-id⟧) return !1;
             ⟦2-char-id⟧ = ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 80 · Change · +1 / -1</summary>

```diff
@@ -1806,7 +1806,7 @@
               if (⟦2-char-id⟧ > 1) {
                 let ⟦2-char-id⟧ = 65535 & ⟦2-char-id⟧,
                   ⟦2-char-id⟧ = this.stack.length - 3 * ⟦2-char-id⟧;
-                if (⟦2-char-id⟧ >= 0 && ⟦2-char-id⟧.getGoto(this.stack[⟦2-char-id⟧], FJ, !1) >= 0) return ⟦2-char-id⟧ << 19 | 65536 | ⟦2-char-id⟧
+                if (⟦2-char-id⟧ >= 0 && ⟦2-char-id⟧.getGoto(this.stack[⟦2-char-id⟧], VB, !1) >= 0) return ⟦2-char-id⟧ << 19 | 65536 | ⟦2-char-id⟧
               }
             } else {
               let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ + 1);
```

</details>

<details>
<summary>Hunk 81 · Change · +2 / -2</summary>

```diff
@@ -1846,10 +1846,10 @@
         return this.p.parser.dialect.flags[⟦2-char-id⟧]
       }
       shiftContext(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, JJ, this, this.p.stream.reset(⟦2-char-id⟧)))
+        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, BB, this, this.p.stream.reset(⟦2-char-id⟧)))
       }
       reduceContext(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, JJ, this, this.p.stream.reset(⟦2-char-id⟧)))
+        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, BB, this, this.p.stream.reset(⟦2-char-id⟧)))
       }
       emitContext() {
         let ⟦2-char-id⟧ = this.buffer.length - 1;
```

</details>

<details>
<summary>Hunk 82 · Change · +3 / -3</summary>

```diff
@@ -1885,17 +1885,17 @@
         let ⟦2-char-id⟧ = 65535 & ⟦2-char-id⟧,
           ⟦2-char-id⟧ = ⟦2-char-id⟧ >> 19;
         0 == ⟦2-char-id⟧ ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (⟦2-char-id⟧ - 1);
-        let ⟦2-char-id⟧ = this.start.p.parser.getGoto(this.stack[this.base - 3], cJ, !0);
+        let ⟦2-char-id⟧ = this.start.p.parser.getGoto(this.stack[this.base - 3], TB, !0);
         this.state = ⟦2-char-id⟧
       }
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         this.stack = ⟦2-char-id⟧, this.pos = ⟦2-char-id⟧, this.index = ⟦2-char-id⟧, this.buffer = ⟦2-char-id⟧.buffer, 0 == this.index && this.maybeNext()
       }
       static create(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ⟦2-char-id⟧.bufferBase + ⟦2-char-id⟧.buffer.length;
-        return new ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧ - ⟦2-char-id⟧.bufferBase)
+        return new ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧ - ⟦2-char-id⟧.bufferBase)
       }
       maybeNext() {
         let ⟦2-char-id⟧ = this.stack.parent;
```

</details>

<details>
<summary>Hunk 83 · Change · +1 / -1</summary>

```diff
@@ -1939,7 +1939,7 @@
           if (⟦2-char-id⟧ >= 46 && (⟦2-char-id⟧ -= 46, ⟦2-char-id⟧ = !0), ⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧) break;
           ⟦2-char-id⟧ *= 46
         }
-        ⟦2-char-id⟧ ? ⟦2-char-id⟧[⟦2-char-id⟧++] = eJ : ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧)
+        ⟦2-char-id⟧ ? ⟦2-char-id⟧[⟦2-char-id⟧++] = pB : ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧)
       }
       return ⟦2-char-id⟧
     }
```

</details>

<details>
<summary>Hunk 84 · Change · +1 / -1</summary>

```diff
@@ -1951,7 +1951,7 @@
     const ⟦2-char-id⟧ = new ⟦2-char-id⟧;
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        this.input = ⟦2-char-id⟧, this.ws = ⟦2-char-id⟧, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = ⟦2-char-id⟧, this.rangeIndex = 0, this.pos = this.chunkPos = ⟦2-char-id⟧[0].from, this.range = ⟦2-char-id⟧[0], this.end = ⟦2-char-id⟧[⟦2-char-id⟧.length - 1].to, this.readNext()
+        this.input = ⟦2-char-id⟧, this.ek = ⟦2-char-id⟧, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = ⟦2-char-id⟧, this.rangeIndex = 0, this.pos = this.chunkPos = ⟦2-char-id⟧[0].from, this.range = ⟦2-char-id⟧[0], this.end = ⟦2-char-id⟧[⟦2-char-id⟧.length - 1].to, this.readNext()
       }
       resolveOffset(⟦2-char-id⟧, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = this.range,
```

</details>

<details>
<summary>Hunk 85 · Change · +5 / -5</summary>

```diff
@@ -1959,24 +1959,24 @@
           ⟦2-char-id⟧ = this.pos + ⟦2-char-id⟧;
         for (; ⟦2-char-id⟧ < ⟦2-char-id⟧.from;) {
           if (!⟦2-char-id⟧) return null;
-          let ⟦2-char-id⟧ = this.ws[--⟦2-char-id⟧];
+          let ⟦2-char-id⟧ = this.ek[--⟦2-char-id⟧];
           ⟦2-char-id⟧ -= ⟦2-char-id⟧.from - ⟦2-char-id⟧.to, ⟦2-char-id⟧ = ⟦2-char-id⟧
         }
         for (; ⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧ > ⟦2-char-id⟧.to : ⟦2-char-id⟧ >= ⟦2-char-id⟧.to;) {
-          if (⟦2-char-id⟧ == this.ws.length - 1) return null;
-          let ⟦2-char-id⟧ = this.ws[++⟦2-char-id⟧];
+          if (⟦2-char-id⟧ == this.ek.length - 1) return null;
+          let ⟦2-char-id⟧ = this.ek[++⟦2-char-id⟧];
           ⟦2-char-id⟧ += ⟦2-char-id⟧.from - ⟦2-char-id⟧.to, ⟦2-char-id⟧ = ⟦2-char-id⟧
         }
         return ⟦2-char-id⟧
       }
       clipPos(⟦2-char-id⟧) {
         if (⟦2-char-id⟧ >= this.range.from && ⟦2-char-id⟧ < this.range.to) return ⟦2-char-id⟧;
-        for (let ⟦2-char-id⟧ of this.ws)
+        for (let ⟦2-char-id⟧ of this.ek)
           if (⟦2-char-id⟧.to > ⟦2-char-id⟧) return Math.max(⟦2-char-id⟧, ⟦2-char-id⟧.from);
         return this.end
       }
       peek(⟦2-char-id⟧) {
-        let ⟦2-char-id⟧, ZJ, ⟦2-char-id⟧ = this.chunkOff + ⟦2-char-id⟧;
+        let ⟦2-char-id⟧, dB, ⟦2-char-id⟧ = this.chunkOff + ⟦2-char-id⟧;
         if (⟦2-char-id⟧ >= 0 && ⟦2-char-id⟧ < this.chunk.length) ⟦2-char-id⟧ = this.pos + ⟦2-char-id⟧, ⟦2-char-id⟧ = this.chunk.charCodeAt(⟦2-char-id⟧);
         else {
           let ⟦2-char-id⟧ = this.resolveOffset(⟦2-char-id⟧, 1);
```

</details>

<details>
<summary>Hunk 86 · Change · +2 / -2</summary>

```diff
@@ -1985,11 +1985,11 @@
           else {
             let ⟦2-char-id⟧ = this.rangeIndex,
               ⟦2-char-id⟧ = this.range;
-            for (; ⟦2-char-id⟧.to <= ⟦2-char-id⟧;) ⟦2-char-id⟧ = this.ws[++⟦2-char-id⟧];
+            for (; ⟦2-char-id⟧.to <= ⟦2-char-id⟧;) ⟦2-char-id⟧ = this.ek[++⟦2-char-id⟧];
             this.chunk2 = this.input.chunk(this.chunk2Pos = ⟦2-char-id⟧), ⟦2-char-id⟧ + this.chunk2.length > ⟦2-char-id⟧.to && (this.chunk2 = this.chunk2.slice(0, ⟦2-char-id⟧.to - ⟦2-char-id⟧)), ⟦2-char-id⟧ = this.chunk2.charCodeAt(0)
           }
         }
-        return ⟦2-char-id⟧ >= this.token.lookAhead && (this.token.lookAhead = ⟦2-char-id⟧ + 1), ZJ
+        return ⟦2-char-id⟧ >= this.token.lookAhead && (this.token.lookAhead = ⟦2-char-id⟧ + 1), dB
       }
       acceptToken(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
```

</details>

<details>
<summary>Hunk 87 · Change · +5 / -5</summary>

```diff
@@ -2020,19 +2020,19 @@
       advance() {
         let ⟦2-char-id⟧ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
         for (this.chunkOff += ⟦2-char-id⟧; this.pos + ⟦2-char-id⟧ >= this.range.to;) {
-          if (this.rangeIndex == this.ws.length - 1) return this.setDone();
-          ⟦2-char-id⟧ -= this.range.to - this.pos, this.range = this.ws[++this.rangeIndex], this.pos = this.range.from
+          if (this.rangeIndex == this.ek.length - 1) return this.setDone();
+          ⟦2-char-id⟧ -= this.range.to - this.pos, this.range = this.ek[++this.rangeIndex], this.pos = this.range.from
         }
         return this.pos += ⟦2-char-id⟧, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
       }
       setDone() {
-        return this.pos = this.chunkPos = this.end, this.range = this.ws[this.rangeIndex = this.ws.length - 1], this.chunk = "", this.next = -1
+        return this.pos = this.chunkPos = this.end, this.range = this.ek[this.rangeIndex = this.ek.length - 1], this.chunk = "", this.next = -1
       }
       reset(⟦2-char-id⟧, ⟦2-char-id⟧) {
         if (⟦2-char-id⟧ ? (this.token = ⟦2-char-id⟧, ⟦2-char-id⟧.start = ⟦2-char-id⟧, ⟦2-char-id⟧.lookAhead = ⟦2-char-id⟧ + 1, ⟦2-char-id⟧.value = ⟦2-char-id⟧.extended = -1) : this.token = ⟦2-char-id⟧, this.pos != ⟦2-char-id⟧) {
           if (this.pos = ⟦2-char-id⟧, ⟦2-char-id⟧ == this.end) return this.setDone(), this;
-          for (; ⟦2-char-id⟧ < this.range.from;) this.range = this.ws[--this.rangeIndex];
-          for (; ⟦2-char-id⟧ >= this.range.to;) this.range = this.ws[++this.rangeIndex];
+          for (; ⟦2-char-id⟧ < this.range.from;) this.range = this.ek[--this.rangeIndex];
+          for (; ⟦2-char-id⟧ >= this.range.to;) this.range = this.ek[++this.rangeIndex];
           ⟦2-char-id⟧ >= this.chunkPos && ⟦2-char-id⟧ < this.chunkPos + this.chunk.length ? this.chunkOff = ⟦2-char-id⟧ - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
         }
         return this
```

</details>

<details>
<summary>Hunk 88 · Change · +1 / -1</summary>

```diff
@@ -2042,7 +2042,7 @@
         if (⟦2-char-id⟧ >= this.chunk2Pos && ⟦2-char-id⟧ <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(⟦2-char-id⟧ - this.chunk2Pos, ⟦2-char-id⟧ - this.chunk2Pos);
         if (⟦2-char-id⟧ >= this.range.from && ⟦2-char-id⟧ <= this.range.to) return this.input.read(⟦2-char-id⟧, ⟦2-char-id⟧);
         let ⟦2-char-id⟧ = "";
-        for (let ⟦2-char-id⟧ of this.ws) {
+        for (let ⟦2-char-id⟧ of this.ek) {
           if (⟦2-char-id⟧.from >= ⟦2-char-id⟧) break;
           ⟦2-char-id⟧.to > ⟦2-char-id⟧ && (⟦2-char-id⟧ += this.input.read(Math.max(⟦2-char-id⟧.from, ⟦2-char-id⟧), Math.min(⟦2-char-id⟧.to, ⟦2-char-id⟧)))
         }
```

</details>

<details>
<summary>Hunk 89 · Change · +2 / -2</summary>

```diff
@@ -2057,12 +2057,12 @@
         let {
           parser: ⟦2-char-id⟧
         } = ⟦2-char-id⟧.p;
-        ⟦2-char-id⟧(this.data, JJ, cJ, this.id, ⟦2-char-id⟧.data, ⟦2-char-id⟧.tokenPrecTable)
+        ⟦2-char-id⟧(this.data, BB, TB, this.id, ⟦2-char-id⟧.data, ⟦2-char-id⟧.tokenPrecTable)
       }
     }
     ⟦2-char-id⟧.prototype.contextual = ⟦2-char-id⟧.prototype.fallback = ⟦2-char-id⟧.prototype.extend = !1;
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         this.precTable = ⟦2-char-id⟧, this.elseToken = ⟦2-char-id⟧, this.data = "string" == typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧) : ⟦2-char-id⟧
       }
       token(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 90 · Change · +1 / -1</summary>

```diff
@@ -2071,7 +2071,7 @@
         for (;;) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.next < 0,
             ⟦2-char-id⟧ = ⟦2-char-id⟧.resolveOffset(1, 1);
-          if (⟦2-char-id⟧(this.data, JJ, cJ, 0, this.data, this.precTable), ⟦2-char-id⟧.token.value > -1) break;
+          if (⟦2-char-id⟧(this.data, BB, TB, 0, this.data, this.precTable), ⟦2-char-id⟧.token.value > -1) break;
           if (null == this.elseToken) return;
           if (⟦2-char-id⟧ || ⟦2-char-id⟧++, null == ⟦2-char-id⟧) break;
           ⟦2-char-id⟧.reset(⟦2-char-id⟧, ⟦2-char-id⟧.token)
```

</details>

<details>
<summary>Hunk 91 · Change · +3 / -3</summary>

```diff
@@ -2087,18 +2087,18 @@
       }
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, yB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = 0,
         ⟦2-char-id⟧ = 1 << ⟦2-char-id⟧,
         {
           dialect: ⟦2-char-id⟧
         } = ⟦2-char-id⟧.p.parser;
-      JJ: for (; 0 != (⟦2-char-id⟧ & ⟦2-char-id⟧[⟦2-char-id⟧]);) {
+      BB: for (; 0 != (⟦2-char-id⟧ & ⟦2-char-id⟧[⟦2-char-id⟧]);) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 1];
         for (let ⟦2-char-id⟧ = ⟦2-char-id⟧ + 3; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧ += 2)
           if ((⟦2-char-id⟧[⟦2-char-id⟧ + 1] & ⟦2-char-id⟧) > 0) {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
-            if (⟦2-char-id⟧.allows(⟦2-char-id⟧) && (-1 == ⟦2-char-id⟧.token.value || ⟦2-char-id⟧.token.value == ⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.token.value, UJ, ⟦2-char-id⟧))) {
+            if (⟦2-char-id⟧.allows(⟦2-char-id⟧) && (-1 == ⟦2-char-id⟧.token.value || ⟦2-char-id⟧.token.value == ⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.token.value, yB, ⟦2-char-id⟧))) {
               ⟦2-char-id⟧.acceptToken(⟦2-char-id⟧);
               break
             }
```

</details>

<details>
<summary>Hunk 92 · Change · +4 / -4</summary>

```diff
@@ -2126,15 +2126,15 @@
       }
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       for (let ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧; 65535 != (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]); ⟦2-char-id⟧++)
         if (⟦2-char-id⟧ == ⟦2-char-id⟧) return ⟦2-char-id⟧ - ⟦2-char-id⟧;
       return -1
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-      let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, FJ, ⟦2-char-id⟧);
-      return ⟦2-char-id⟧ < 0 || ⟦2-char-id⟧(⟦2-char-id⟧, FJ, ⟦2-char-id⟧) < ⟦2-char-id⟧
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+      let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, VB, ⟦2-char-id⟧);
+      return ⟦2-char-id⟧ < 0 || ⟦2-char-id⟧(⟦2-char-id⟧, VB, ⟦2-char-id⟧) < ⟦2-char-id⟧
     }
     const ⟦2-char-id⟧ = "undefined" != typeof process && {
       NODE_ENV: "production",
```

</details>

<details>
<summary>Hunk 93 · Change · +2 / -2</summary>

```diff
@@ -2155,12 +2155,12 @@
     }.LOG);
     let ⟦2-char-id⟧ = null;
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.cursor(⟦2-char-id⟧.f.IncludeAnonymous);
       for (⟦2-char-id⟧.moveTo(⟦2-char-id⟧);;)
         if (!(⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧.childBefore(⟦2-char-id⟧) : ⟦2-char-id⟧.childAfter(⟦2-char-id⟧)))
           for (;;) {
-            if ((⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧.to < cJ : ⟦2-char-id⟧.from > ⟦2-char-id⟧) && !⟦2-char-id⟧.type.isError) return ⟦2-char-id⟧ < 0 ? Math.max(0, Math.min(⟦2-char-id⟧.to - 1, ⟦2-char-id⟧ - 25)) : Math.min(⟦2-char-id⟧.length, Math.max(⟦2-char-id⟧.from + 1, ⟦2-char-id⟧ + 25));
+            if ((⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧.to < TB : ⟦2-char-id⟧.from > ⟦2-char-id⟧) && !⟦2-char-id⟧.type.isError) return ⟦2-char-id⟧ < 0 ? Math.max(0, Math.min(⟦2-char-id⟧.to - 1, ⟦2-char-id⟧ - 25)) : Math.min(⟦2-char-id⟧.length, Math.max(⟦2-char-id⟧.from + 1, ⟦2-char-id⟧ + 25));
             if (⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧.prevSibling() : ⟦2-char-id⟧.nextSibling()) break;
             if (!⟦2-char-id⟧.parent()) return ⟦2-char-id⟧ < 0 ? 0 : ⟦2-char-id⟧.length
           }
```

</details>

<details>
<summary>Hunk 94 · Change · +2 / -2</summary>

```diff
@@ -2192,12 +2192,12 @@
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.children[⟦2-char-id⟧],
             ⟦2-char-id⟧ = this.start[⟦2-char-id⟧] + ⟦2-char-id⟧.positions[⟦2-char-id⟧];
           if (⟦2-char-id⟧ > ⟦2-char-id⟧) return this.nextStart = ⟦2-char-id⟧, null;
-          if (⟦2-char-id⟧ instanceof ⟦2-char-id⟧.t) {
+          if (⟦2-char-id⟧ instanceof ⟦2-char-id⟧.s) {
             if (⟦2-char-id⟧ == ⟦2-char-id⟧) {
               if (⟦2-char-id⟧ < this.safeFrom) return null;
               let ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧.length;
               if (⟦2-char-id⟧ <= this.safeTo) {
-                let ⟦2-char-id⟧ = ⟦2-char-id⟧.prop(⟦2-char-id⟧.h.lookAhead);
+                let ⟦2-char-id⟧ = ⟦2-char-id⟧.prop(⟦2-char-id⟧.i.lookAhead);
                 if (!⟦2-char-id⟧ || ⟦2-char-id⟧ + ⟦2-char-id⟧ < this.fragment.to) return ⟦2-char-id⟧
               }
             }
```

</details>

<details>
<summary>Hunk 95 · Change · +1 / -1</summary>

```diff
@@ -2226,7 +2226,7 @@
           if (0 == (1 << ⟦2-char-id⟧ & ⟦2-char-id⟧)) continue;
           let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
             ⟦2-char-id⟧ = this.tokens[⟦2-char-id⟧];
-          if ((!⟦2-char-id⟧ || ⟦2-char-id⟧.fallback) && ((⟦2-char-id⟧.contextual || ⟦2-char-id⟧.start != ⟦2-char-id⟧.pos || ⟦2-char-id⟧.mask != ⟦2-char-id⟧ || ⟦2-char-id⟧.context != ⟦2-char-id⟧) && (this.updateCachedToken(⟦2-char-id⟧, FJ, ⟦2-char-id⟧), ⟦2-char-id⟧.mask = ⟦2-char-id⟧, ⟦2-char-id⟧.context = ⟦2-char-id⟧), ⟦2-char-id⟧.lookAhead > ⟦2-char-id⟧.end + 25 && (⟦2-char-id⟧ = Math.max(⟦2-char-id⟧.lookAhead, ⟦2-char-id⟧)), 0 != ⟦2-char-id⟧.value)) {
+          if ((!⟦2-char-id⟧ || ⟦2-char-id⟧.fallback) && ((⟦2-char-id⟧.contextual || ⟦2-char-id⟧.start != ⟦2-char-id⟧.pos || ⟦2-char-id⟧.mask != ⟦2-char-id⟧ || ⟦2-char-id⟧.context != ⟦2-char-id⟧) && (this.updateCachedToken(⟦2-char-id⟧, VB, ⟦2-char-id⟧), ⟦2-char-id⟧.mask = ⟦2-char-id⟧, ⟦2-char-id⟧.context = ⟦2-char-id⟧), ⟦2-char-id⟧.lookAhead > ⟦2-char-id⟧.end + 25 && (⟦2-char-id⟧ = Math.max(⟦2-char-id⟧.lookAhead, ⟦2-char-id⟧)), 0 != ⟦2-char-id⟧.value)) {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧;
             if (⟦2-char-id⟧.extended > -1 && (⟦2-char-id⟧ = this.addActions(⟦2-char-id⟧, ⟦2-char-id⟧.extended, ⟦2-char-id⟧.end, ⟦2-char-id⟧)), ⟦2-char-id⟧ = this.addActions(⟦2-char-id⟧, ⟦2-char-id⟧.value, ⟦2-char-id⟧.end, ⟦2-char-id⟧), !⟦2-char-id⟧.extend && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ > ⟦2-char-id⟧)) break
           }
```

</details>

<details>
<summary>Hunk 96 · Change · +3 / -3</summary>

```diff
@@ -2241,9 +2241,9 @@
             pos: ⟦2-char-id⟧,
             p: ⟦2-char-id⟧
           } = ⟦2-char-id⟧;
-        return ⟦2-char-id⟧.start = ⟦2-char-id⟧, ⟦2-char-id⟧.end = Math.min(⟦2-char-id⟧ + 1, ⟦2-char-id⟧.stream.end), ⟦2-char-id⟧.value = ⟦2-char-id⟧ == ⟦2-char-id⟧.stream.end ? ⟦2-char-id⟧.parser.eofTerm : 0, cJ
-      }
-      updateCachedToken(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+        return ⟦2-char-id⟧.start = ⟦2-char-id⟧, ⟦2-char-id⟧.end = Math.min(⟦2-char-id⟧ + 1, ⟦2-char-id⟧.stream.end), ⟦2-char-id⟧.value = ⟦2-char-id⟧ == ⟦2-char-id⟧.stream.end ? ⟦2-char-id⟧.parser.eofTerm : 0, TB
+      }
+      updateCachedToken(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = this.stream.clipPos(⟦2-char-id⟧.pos);
         if (⟦2-char-id⟧.token(this.stream.reset(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧), ⟦2-char-id⟧.value > -1) {
           let {
```

</details>

<details>
<summary>Hunk 97 · Change · +4 / -4</summary>

```diff
@@ -2259,12 +2259,12 @@
             }
         } else ⟦2-char-id⟧.value = 0, ⟦2-char-id⟧.end = this.stream.clipPos(⟦2-char-id⟧ + 1)
       }
-      putAction(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      putAction(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧ += 3)
           if (this.actions[⟦2-char-id⟧] == ⟦2-char-id⟧) return ⟦2-char-id⟧;
-        return this.actions[⟦2-char-id⟧++] = ⟦2-char-id⟧, this.actions[⟦2-char-id⟧++] = ⟦2-char-id⟧, this.actions[⟦2-char-id⟧++] = ⟦2-char-id⟧, FJ
-      }
-      addActions(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+        return this.actions[⟦2-char-id⟧++] = ⟦2-char-id⟧, this.actions[⟦2-char-id⟧++] = ⟦2-char-id⟧, this.actions[⟦2-char-id⟧++] = ⟦2-char-id⟧, VB
+      }
+      addActions(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         let {
           state: ⟦2-char-id⟧
         } = ⟦2-char-id⟧, {
```

</details>

<details>
<summary>Hunk 98 · Change · +4 / -4</summary>

```diff
@@ -2276,19 +2276,19 @@
           for (let ⟦2-char-id⟧ = ⟦2-char-id⟧.stateSlot(⟦2-char-id⟧, ⟦2-char-id⟧ ? 2 : 1);; ⟦2-char-id⟧ += 3) {
             if (65535 == ⟦2-char-id⟧[⟦2-char-id⟧]) {
               if (1 != ⟦2-char-id⟧[⟦2-char-id⟧ + 1]) {
-                0 == ⟦2-char-id⟧ && 2 == ⟦2-char-id⟧[⟦2-char-id⟧ + 1] && (⟦2-char-id⟧ = this.putAction(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ + 2), cJ, ZJ, ⟦2-char-id⟧));
+                0 == ⟦2-char-id⟧ && 2 == ⟦2-char-id⟧[⟦2-char-id⟧ + 1] && (⟦2-char-id⟧ = this.putAction(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ + 2), TB, dB, ⟦2-char-id⟧));
                 break
               }
               ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ + 2)
             }
-            ⟦2-char-id⟧[⟦2-char-id⟧] == ⟦2-char-id⟧ && (⟦2-char-id⟧ = this.putAction(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ + 1), cJ, ZJ, ⟦2-char-id⟧))
+            ⟦2-char-id⟧[⟦2-char-id⟧] == ⟦2-char-id⟧ && (⟦2-char-id⟧ = this.putAction(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ + 1), TB, dB, ⟦2-char-id⟧))
           }
         return ⟦2-char-id⟧
       }
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-        this.parser = ⟦2-char-id⟧, this.input = ⟦2-char-id⟧, this.ws = ⟦2-char-id⟧, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), this.tokens = new ⟦2-char-id⟧(⟦2-char-id⟧, this.stream), this.topTerm = ⟦2-char-id⟧.top[1];
+      constructor(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+        this.parser = ⟦2-char-id⟧, this.input = ⟦2-char-id⟧, this.ek = ⟦2-char-id⟧, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), this.tokens = new ⟦2-char-id⟧(⟦2-char-id⟧, this.stream), this.topTerm = ⟦2-char-id⟧.top[1];
         let {
           from: ⟦2-char-id⟧
         } = ⟦2-char-id⟧[0];
```

</details>

<details>
<summary>Hunk 99 · Change · +1 / -1</summary>

```diff
@@ -2298,7 +2298,7 @@
         return this.minStackPos
       }
       advance() {
-        let ⟦2-char-id⟧, cJ, ⟦2-char-id⟧ = this.stacks,
+        let ⟦2-char-id⟧, TB, ⟦2-char-id⟧ = this.stacks,
           ⟦2-char-id⟧ = this.minStackPos,
           ⟦2-char-id⟧ = this.stacks = [];
         if (this.bigReductionCount > 300 && 1 == ⟦2-char-id⟧.length) {
```

</details>

<details>
<summary>Hunk 100 · Change · +1 / -1</summary>

```diff
@@ -2311,7 +2311,7 @@
           for (;;) {
             if (this.tokens.mainToken = null, ⟦2-char-id⟧.pos > ⟦2-char-id⟧) ⟦2-char-id⟧.push(⟦2-char-id⟧);
             else {
-              if (this.advanceStack(⟦2-char-id⟧, UJ, ⟦2-char-id⟧)) continue;
+              if (this.advanceStack(⟦2-char-id⟧, yB, ⟦2-char-id⟧)) continue;
               {
                 ⟦2-char-id⟧ || (⟦2-char-id⟧ = [], ⟦2-char-id⟧ = []), ⟦2-char-id⟧.push(⟦2-char-id⟧);
                 let ⟦2-char-id⟧ = this.tokens.getMainToken(⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 101 · Change · +1 / -1</summary>

```diff
@@ -2335,7 +2335,7 @@
           this.recovering || (this.recovering = 5)
         }
         if (this.recovering && ⟦2-char-id⟧) {
-          let ⟦2-char-id⟧ = null != this.stoppedAt && ⟦2-char-id⟧[0].pos > this.stoppedAt ? ⟦2-char-id⟧[0] : this.runRecovery(⟦2-char-id⟧, cJ, ⟦2-char-id⟧);
+          let ⟦2-char-id⟧ = null != this.stoppedAt && ⟦2-char-id⟧[0].pos > this.stoppedAt ? ⟦2-char-id⟧[0] : this.runRecovery(⟦2-char-id⟧, TB, ⟦2-char-id⟧);
           if (⟦2-char-id⟧) return ⟦2-char-id⟧ && console.log("Force-finish " + this.stackID(⟦2-char-id⟧)), this.stackToTree(⟦2-char-id⟧.forceAll())
         }
         if (this.recovering) {
```

</details>

<details>
<summary>Hunk 102 · Change · +1 / -1</summary>

```diff
@@ -2344,7 +2344,7 @@
             for (⟦2-char-id⟧.sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.score - ⟦2-char-id⟧.score)); ⟦2-char-id⟧.length > ⟦2-char-id⟧;) ⟦2-char-id⟧.pop();
           ⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧.reducePos > ⟦2-char-id⟧)) && this.recovering--
         } else if (⟦2-char-id⟧.length > 1) {
-          JJ: for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length - 1; ⟦2-char-id⟧++) {
+          BB: for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length - 1; ⟦2-char-id⟧++) {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
             for (let ⟦2-char-id⟧ = ⟦2-char-id⟧ + 1; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) {
               let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
```

</details>

<details>
<summary>Hunk 103 · Change · +6 / -6</summary>

```diff
@@ -2367,27 +2367,27 @@
         if (null != this.stoppedAt && this.stoppedAt < ⟦2-char-id⟧) throw new RangeError("Can't move stoppedAt forward");
         this.stoppedAt = ⟦2-char-id⟧
       }
-      advanceStack(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      advanceStack(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.pos,
           {
             parser: ⟦2-char-id⟧
           } = this,
           ⟦2-char-id⟧ = ⟦2-char-id⟧ ? this.stackID(⟦2-char-id⟧) + " -> " : "";
-        if (null != this.stoppedAt && ⟦2-char-id⟧ > this.stoppedAt) return ⟦2-char-id⟧.forceReduce() ? JJ : null;
+        if (null != this.stoppedAt && ⟦2-char-id⟧ > this.stoppedAt) return ⟦2-char-id⟧.forceReduce() ? BB : null;
         if (this.fragments) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.curContext && ⟦2-char-id⟧.curContext.tracker.strict,
             ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.curContext.hash : 0;
           for (let ⟦2-char-id⟧ = this.fragments.nodeAt(⟦2-char-id⟧); ⟦2-char-id⟧;) {
             let ⟦2-char-id⟧ = this.parser.nodeSet.types[⟦2-char-id⟧.type.id] == ⟦2-char-id⟧.type ? ⟦2-char-id⟧.getGoto(⟦2-char-id⟧.state, ⟦2-char-id⟧.type.id) : -1;
-            if (⟦2-char-id⟧ > -1 && ⟦2-char-id⟧.length && (!⟦2-char-id⟧ || (⟦2-char-id⟧.prop(⟦2-char-id⟧.h.contextHash) || 0) == ⟦2-char-id⟧)) return ⟦2-char-id⟧.useNode(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ && console.log(⟦2-char-id⟧ + this.stackID(⟦2-char-id⟧) + ` (via reuse of ${eJ.getName(AJ.type.id)})`), !0;
-            if (!(⟦2-char-id⟧ instanceof ⟦2-char-id⟧.t) || 0 == ⟦2-char-id⟧.children.length || ⟦2-char-id⟧.positions[0] > 0) break;
+            if (⟦2-char-id⟧ > -1 && ⟦2-char-id⟧.length && (!⟦2-char-id⟧ || (⟦2-char-id⟧.prop(⟦2-char-id⟧.i.contextHash) || 0) == ⟦2-char-id⟧)) return ⟦2-char-id⟧.useNode(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ && console.log(⟦2-char-id⟧ + this.stackID(⟦2-char-id⟧) + ` (via reuse of ${pB.getName(JB.type.id)})`), !0;
+            if (!(⟦2-char-id⟧ instanceof ⟦2-char-id⟧.s) || 0 == ⟦2-char-id⟧.children.length || ⟦2-char-id⟧.positions[0] > 0) break;
             let ⟦2-char-id⟧ = ⟦2-char-id⟧.children[0];
-            if (!(⟦2-char-id⟧ instanceof ⟦2-char-id⟧.t && 0 == ⟦2-char-id⟧.positions[0])) break;
+            if (!(⟦2-char-id⟧ instanceof ⟦2-char-id⟧.s && 0 == ⟦2-char-id⟧.positions[0])) break;
             ⟦2-char-id⟧ = ⟦2-char-id⟧
           }
         }
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.stateSlot(⟦2-char-id⟧.state, 4);
-        if (⟦2-char-id⟧ > 0) return ⟦2-char-id⟧.reduce(⟦2-char-id⟧), ⟦2-char-id⟧ && console.log(⟦2-char-id⟧ + this.stackID(⟦2-char-id⟧) + ` (via always-reduce ${eJ.getName(65535&AJ)})`), !0;
+        if (⟦2-char-id⟧ > 0) return ⟦2-char-id⟧.reduce(⟦2-char-id⟧), ⟦2-char-id⟧ && console.log(⟦2-char-id⟧ + this.stackID(⟦2-char-id⟧) + ` (via always-reduce ${pB.getName(65535&JB)})`), !0;
         if (⟦2-char-id⟧.stack.length >= 8400)
           for (; ⟦2-char-id⟧.stack.length > 6⟦2-char-id⟧ && ⟦2-char-id⟧.forceReduce(););
         let ⟦2-char-id⟧ = this.tokens.getActions(⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 104 · Change · +2 / -2</summary>

```diff
@@ -2396,9 +2396,9 @@
             ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧++],
             ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧++],
             ⟦2-char-id⟧ = ⟦2-char-id⟧ == ⟦2-char-id⟧.length || !⟦2-char-id⟧,
-            ⟦2-char-id⟧ = ⟦2-char-id⟧ ? JJ : ⟦2-char-id⟧.split(),
+            ⟦2-char-id⟧ = ⟦2-char-id⟧ ? BB : ⟦2-char-id⟧.split(),
             ⟦2-char-id⟧ = this.tokens.mainToken;
-          if (⟦2-char-id⟧.apply(⟦2-char-id⟧, jJ, ⟦2-char-id⟧ ? ⟦2-char-id⟧.start : ⟦2-char-id⟧.pos, ⟦2-char-id⟧), ⟦2-char-id⟧ && console.log(⟦2-char-id⟧ + this.stackID(⟦2-char-id⟧) + ` (via ${0==(65536&AJ)?"shift":`reduce of ${⟦2-char-id⟧.getName(65535&⟦2-char-id⟧)}`} for ${eJ.getName(jJ)} @ ${UJ}${DJ==JJ?"":", split"})`), ⟦2-char-id⟧) return !0;
+          if (⟦2-char-id⟧.apply(⟦2-char-id⟧, gB, ⟦2-char-id⟧ ? ⟦2-char-id⟧.start : ⟦2-char-id⟧.pos, ⟦2-char-id⟧), ⟦2-char-id⟧ && console.log(⟦2-char-id⟧ + this.stackID(⟦2-char-id⟧) + ` (via ${0==(65536&JB)?"shift":`reduce of ${⟦2-char-id⟧.getName(65535&⟦2-char-id⟧)}`} for ${pB.getName(gB)} @ ${yB}${LB==BB?"":", split"})`), ⟦2-char-id⟧) return !0;
           ⟦2-char-id⟧.pos > ⟦2-char-id⟧ ? ⟦2-char-id⟧.push(⟦2-char-id⟧) : ⟦2-char-id⟧.push(⟦2-char-id⟧)
         }
         return !1
```

</details>

<details>
<summary>Hunk 105 · Change · +1 / -1</summary>

```diff
@@ -2410,7 +2410,7 @@
           if (⟦2-char-id⟧.pos > ⟦2-char-id⟧) return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), !0
         }
       }
-      runRecovery(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      runRecovery(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = null,
           ⟦2-char-id⟧ = !1;
         for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) {
```

</details>

<details>
<summary>Hunk 106 · Change · +4 / -4</summary>

```diff
@@ -2429,19 +2429,19 @@
             ⟦2-char-id⟧ && (⟦2-char-id⟧ = this.stackID(⟦2-char-id⟧) + " -> ")
           }
           for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.recoverByInsert(⟦2-char-id⟧)) ⟦2-char-id⟧ && console.log(⟦2-char-id⟧ + this.stackID(⟦2-char-id⟧) + " (via recover-insert)"), this.advanceFully(⟦2-char-id⟧, ⟦2-char-id⟧);
-          this.stream.end > ⟦2-char-id⟧.pos ? (⟦2-char-id⟧ == ⟦2-char-id⟧.pos && (⟦2-char-id⟧++, ⟦2-char-id⟧ = 0), ⟦2-char-id⟧.recoverByDelete(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ && console.log(⟦2-char-id⟧ + this.stackID(⟦2-char-id⟧) + ` (via recover-delete ${this.parser.getName(AJ)})`), KJ(⟦2-char-id⟧, ⟦2-char-id⟧)) : (!⟦2-char-id⟧ || ⟦2-char-id⟧.score < ⟦2-char-id⟧.score) && (⟦2-char-id⟧ = ⟦2-char-id⟧)
+          this.stream.end > ⟦2-char-id⟧.pos ? (⟦2-char-id⟧ == ⟦2-char-id⟧.pos && (⟦2-char-id⟧++, ⟦2-char-id⟧ = 0), ⟦2-char-id⟧.recoverByDelete(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ && console.log(⟦2-char-id⟧ + this.stackID(⟦2-char-id⟧) + ` (via recover-delete ${this.parser.getName(JB)})`), sB(⟦2-char-id⟧, ⟦2-char-id⟧)) : (!⟦2-char-id⟧ || ⟦2-char-id⟧.score < ⟦2-char-id⟧.score) && (⟦2-char-id⟧ = ⟦2-char-id⟧)
         }
         return ⟦2-char-id⟧
       }
       stackToTree(⟦2-char-id⟧) {
-        return ⟦2-char-id⟧.close(), ⟦2-char-id⟧.t.build({
+        return ⟦2-char-id⟧.close(), ⟦2-char-id⟧.s.build({
           buffer: ⟦2-char-id⟧.create(⟦2-char-id⟧),
           nodeSet: this.parser.nodeSet,
           topID: this.topTerm,
           maxBufferLength: this.parser.bufferLength,
           reused: this.reused,
-          start: this.ws[0].from,
-          length: ⟦2-char-id⟧.pos - this.ws[0].from,
+          start: this.ek[0].from,
+          length: ⟦2-char-id⟧.pos - this.ek[0].from,
           minRepeatType: this.parser.minRepeatTerm
         })
       }
```

</details>

<details>
<summary>Hunk 107 · Change · +1 / -1</summary>

```diff
@@ -2459,7 +2459,7 @@
       ⟦2-char-id⟧.push(⟦2-char-id⟧)
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         this.source = ⟦2-char-id⟧, this.flags = ⟦2-char-id⟧, this.disabled = ⟦2-char-id⟧
       }
       allows(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 108 · Change · +2 / -2</summary>

```diff
@@ -2467,9 +2467,9 @@
       }
     }
     const ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧;
-    class ⟦2-char-id⟧ extends ⟦2-char-id⟧.o {
+    class ⟦2-char-id⟧ extends ⟦2-char-id⟧.q {
       constructor(⟦2-char-id⟧) {
-        if (super(), this.wrappers = [], 14 != ⟦2-char-id⟧.version) throw new RangeError(`Parser version (${JJ.version}) doesn't match runtime version (14)`);
+        if (super(), this.wrappers = [], 14 != ⟦2-char-id⟧.version) throw new RangeError(`Parser version (${BB.version}) doesn't match runtime version (14)`);
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.nodeNames.split(" ");
         this.minRepeatTerm = ⟦2-char-id⟧.length;
         for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.repeatNodeCount; ⟦2-char-id⟧++) ⟦2-char-id⟧.push("");
```

</details>

<details>
<summary>Hunk 109 · Change · +9 / -9</summary>

```diff
@@ -2477,39 +2477,39 @@
           ⟦2-char-id⟧ = [];
         for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) ⟦2-char-id⟧.push([]);
 
-        function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+        function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
           ⟦2-char-id⟧[⟦2-char-id⟧].push([⟦2-char-id⟧, ⟦2-char-id⟧.deserialize(String(⟦2-char-id⟧))])
         }
         if (⟦2-char-id⟧.nodeProps)
           for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.nodeProps) {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧[0];
-            "string" == typeof ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.h[⟦2-char-id⟧]);
+            "string" == typeof ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.i[⟦2-char-id⟧]);
             for (let ⟦2-char-id⟧ = 1; ⟦2-char-id⟧ < ⟦2-char-id⟧.length;) {
               let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧++];
-              if (⟦2-char-id⟧ >= 0) ⟦2-char-id⟧(⟦2-char-id⟧, JJ, ⟦2-char-id⟧[⟦2-char-id⟧++]);
+              if (⟦2-char-id⟧ >= 0) ⟦2-char-id⟧(⟦2-char-id⟧, BB, ⟦2-char-id⟧[⟦2-char-id⟧++]);
               else {
                 let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + -⟦2-char-id⟧];
-                for (let ⟦2-char-id⟧ = -⟦2-char-id⟧; ⟦2-char-id⟧ > 0; ⟦2-char-id⟧--) ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧++], JJ, ⟦2-char-id⟧);
+                for (let ⟦2-char-id⟧ = -⟦2-char-id⟧; ⟦2-char-id⟧ > 0; ⟦2-char-id⟧--) ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧++], BB, ⟦2-char-id⟧);
                 ⟦2-char-id⟧++
               }
             }
           }
-        this.nodeSet = new ⟦2-char-id⟧.i(⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.k.define({
+        this.nodeSet = new ⟦2-char-id⟧.j(⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.k.define({
           name: ⟦2-char-id⟧ >= this.minRepeatTerm ? void 0 : ⟦2-char-id⟧,
           id: ⟦2-char-id⟧,
           props: ⟦2-char-id⟧[⟦2-char-id⟧],
           top: ⟦2-char-id⟧.indexOf(⟦2-char-id⟧) > -1,
           error: 0 == ⟦2-char-id⟧,
           skipped: ⟦2-char-id⟧.skippedNodes && ⟦2-char-id⟧.skippedNodes.indexOf(⟦2-char-id⟧) > -1
-        })))), ⟦2-char-id⟧.propSources && (this.nodeSet = this.nodeSet.extend(...JJ.propSources)), this.strict = !1, this.bufferLength = ⟦2-char-id⟧.b;
+        })))), ⟦2-char-id⟧.propSources && (this.nodeSet = this.nodeSet.extend(...BB.propSources)), this.strict = !1, this.bufferLength = ⟦2-char-id⟧.b;
         let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.tokenData);
         this.context = ⟦2-char-id⟧.context, this.specializerSpecs = ⟦2-char-id⟧.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
         for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < this.specializerSpecs.length; ⟦2-char-id⟧++) this.specialized[⟦2-char-id⟧] = this.specializerSpecs[⟦2-char-id⟧].term;
         this.specializers = this.specializerSpecs.map(⟦2-char-id⟧), this.states = ⟦2-char-id⟧(⟦2-char-id⟧.states, Uint32Array), this.data = ⟦2-char-id⟧(⟦2-char-id⟧.stateData), this.goto = ⟦2-char-id⟧(⟦2-char-id⟧.goto), this.maxTerm = ⟦2-char-id⟧.maxTerm, this.tokenizers = ⟦2-char-id⟧.tokenizers.map((⟦2-char-id⟧ => "number" == typeof ⟦2-char-id⟧ ? new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) : ⟦2-char-id⟧)), this.topRules = ⟦2-char-id⟧.topRules, this.dialects = ⟦2-char-id⟧.dialects || {}, this.dynamicPrecedences = ⟦2-char-id⟧.dynamicPrecedences || null, this.tokenPrecTable = ⟦2-char-id⟧.tokenPrec, this.termNames = ⟦2-char-id⟧.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
       }
-      createParse(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-        let ⟦2-char-id⟧ = new ⟦2-char-id⟧(this, JJ, cJ, ⟦2-char-id⟧);
-        for (let ⟦2-char-id⟧ of this.wrappers) ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, JJ, cJ, ⟦2-char-id⟧);
+      createParse(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+        let ⟦2-char-id⟧ = new ⟦2-char-id⟧(this, BB, TB, ⟦2-char-id⟧);
+        for (let ⟦2-char-id⟧ of this.wrappers) ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, BB, TB, ⟦2-char-id⟧);
         return ⟦2-char-id⟧
       }
       getGoto(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 110 · Change · +2 / -2</summary>

```diff
@@ -2578,9 +2578,9 @@
       }
       configure(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = Object.assign(Object.create(⟦2-char-id⟧.prototype), this);
-        if (⟦2-char-id⟧.props && (⟦2-char-id⟧.nodeSet = this.nodeSet.extend(...JJ.props)), ⟦2-char-id⟧.top) {
+        if (⟦2-char-id⟧.props && (⟦2-char-id⟧.nodeSet = this.nodeSet.extend(...BB.props)), ⟦2-char-id⟧.top) {
           let ⟦2-char-id⟧ = this.topRules[⟦2-char-id⟧.top];
-          if (!⟦2-char-id⟧) throw new RangeError(`Invalid top rule name ${JJ.top}`);
+          if (!⟦2-char-id⟧) throw new RangeError(`Invalid top rule name ${BB.top}`);
           ⟦2-char-id⟧.top = ⟦2-char-id⟧
         }
         return ⟦2-char-id⟧.tokenizers && (⟦2-char-id⟧.tokenizers = this.tokenizers.map((⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 111 · Change · +2 / -2</summary>

```diff
@@ -2592,8 +2592,8 @@
           let ⟦2-char-id⟧ = Object.assign(Object.assign({}, ⟦2-char-id⟧), {
             external: ⟦2-char-id⟧.to
           });
-          return ⟦2-char-id⟧.specializers[⟦2-char-id⟧] = ⟦2-char-id⟧(⟦2-char-id⟧), eJ
-        }))), ⟦2-char-id⟧.contextTracker && (⟦2-char-id⟧.context = ⟦2-char-id⟧.contextTracker), ⟦2-char-id⟧.dialect && (⟦2-char-id⟧.dialect = this.parseDialect(⟦2-char-id⟧.dialect)), null != ⟦2-char-id⟧.strict && (⟦2-char-id⟧.strict = ⟦2-char-id⟧.strict), ⟦2-char-id⟧.wrap && (⟦2-char-id⟧.wrappers = ⟦2-char-id⟧.wrappers.concat(⟦2-char-id⟧.wrap)), null != ⟦2-char-id⟧.bufferLength && (⟦2-char-id⟧.bufferLength = ⟦2-char-id⟧.bufferLength), cJ
+          return ⟦2-char-id⟧.specializers[⟦2-char-id⟧] = ⟦2-char-id⟧(⟦2-char-id⟧), pB
+        }))), ⟦2-char-id⟧.contextTracker && (⟦2-char-id⟧.context = ⟦2-char-id⟧.contextTracker), ⟦2-char-id⟧.dialect && (⟦2-char-id⟧.dialect = this.parseDialect(⟦2-char-id⟧.dialect)), null != ⟦2-char-id⟧.strict && (⟦2-char-id⟧.strict = ⟦2-char-id⟧.strict), ⟦2-char-id⟧.wrap && (⟦2-char-id⟧.wrappers = ⟦2-char-id⟧.wrappers.concat(⟦2-char-id⟧.wrap)), null != ⟦2-char-id⟧.bufferLength && (⟦2-char-id⟧.bufferLength = ⟦2-char-id⟧.bufferLength), TB
       }
       hasWrappers() {
         return this.wrappers.length > 0
```

</details>

<details>
<summary>Hunk 112 · Change · +1 / -1</summary>

```diff
@@ -2623,7 +2623,7 @@
         for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++)
           if (!⟦2-char-id⟧[⟦2-char-id⟧])
             for (let ⟦2-char-id⟧, ⟦2-char-id⟧ = this.dialects[⟦2-char-id⟧[⟦2-char-id⟧]]; 65535 != (⟦2-char-id⟧ = this.data[⟦2-char-id⟧++]);)(⟦2-char-id⟧ || (⟦2-char-id⟧ = new Uint8Array(this.maxTerm + 1)))[⟦2-char-id⟧] = 1;
-        return new ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧)
+        return new ⟦2-char-id⟧(⟦2-char-id⟧, dB, ⟦2-char-id⟧)
       }
       static deserialize(⟦2-char-id⟧) {
         return new ⟦2-char-id⟧(⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 113 · Change · +1 / -1</summary>

```diff
@@ -2641,7 +2641,7 @@
       }
       return ⟦2-char-id⟧.get
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(40084);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(40069);
     const ⟦2-char-id⟧ = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
       ⟦2-char-id⟧ = new class {
         constructor(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 114 · Change · +1 / -1</summary>

```diff
@@ -2649,7 +2649,7 @@
         }
       }({
         start: !1,
-        shift: (⟦2-char-id⟧, ⟦2-char-id⟧) => 5 == ⟦2-char-id⟧ || 6 == ⟦2-char-id⟧ || 320 == ⟦2-char-id⟧ ? JJ : 321 == ⟦2-char-id⟧,
+        shift: (⟦2-char-id⟧, ⟦2-char-id⟧) => 5 == ⟦2-char-id⟧ || 6 == ⟦2-char-id⟧ || 320 == ⟦2-char-id⟧ ? BB : 321 == ⟦2-char-id⟧,
         strict: !1
       }),
       ⟦2-char-id⟧ = new ⟦2-char-id⟧(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
```

</details>

<details>
<summary>Hunk 115 · Change · +57 / -57</summary>

```diff
@@ -2712,63 +2712,63 @@
         }
         ⟦2-char-id⟧.acceptToken(4, -⟦2-char-id⟧)
       })),
-      ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)({
-        "get set async static": ⟦2-char-id⟧.j.modifier,
-        "for while do if else switch try catch finally return throw break continue default case defer": ⟦2-char-id⟧.j.controlKeyword,
-        "in of await yield void typeof delete instanceof as satisfies": ⟦2-char-id⟧.j.operatorKeyword,
-        "let var const using function class extends": ⟦2-char-id⟧.j.definitionKeyword,
-        "import export from": ⟦2-char-id⟧.j.moduleKeyword,
-        "with debugger new": ⟦2-char-id⟧.j.keyword,
-        TemplateString: ⟦2-char-id⟧.j.special(⟦2-char-id⟧.j.string),
-        super: ⟦2-char-id⟧.j.atom,
-        BooleanLiteral: ⟦2-char-id⟧.j.bool,
-        this: ⟦2-char-id⟧.j.self,
-        null: ⟦2-char-id⟧.j.null,
-        Star: ⟦2-char-id⟧.j.modifier,
-        VariableName: ⟦2-char-id⟧.j.variableName,
-        "CallExpression/VariableName TaggedTemplateExpression/VariableName": ⟦2-char-id⟧.j.function(⟦2-char-id⟧.j.variableName),
-        VariableDefinition: ⟦2-char-id⟧.j.definition(⟦2-char-id⟧.j.variableName),
-        Label: ⟦2-char-id⟧.j.labelName,
-        PropertyName: ⟦2-char-id⟧.j.propertyName,
-        PrivatePropertyName: ⟦2-char-id⟧.j.special(⟦2-char-id⟧.j.propertyName),
-        "CallExpression/MemberExpression/PropertyName": ⟦2-char-id⟧.j.function(⟦2-char-id⟧.j.propertyName),
-        "FunctionDeclaration/VariableDefinition": ⟦2-char-id⟧.j.function(⟦2-char-id⟧.j.definition(⟦2-char-id⟧.j.variableName)),
-        "ClassDeclaration/VariableDefinition": ⟦2-char-id⟧.j.definition(⟦2-char-id⟧.j.className),
-        "NewExpression/VariableName": ⟦2-char-id⟧.j.className,
-        PropertyDefinition: ⟦2-char-id⟧.j.definition(⟦2-char-id⟧.j.propertyName),
-        PrivatePropertyDefinition: ⟦2-char-id⟧.j.definition(⟦2-char-id⟧.j.special(⟦2-char-id⟧.j.propertyName)),
-        UpdateOp: ⟦2-char-id⟧.j.updateOperator,
-        "LineComment Hashbang": ⟦2-char-id⟧.j.lineComment,
-        BlockComment: ⟦2-char-id⟧.j.blockComment,
-        Number: ⟦2-char-id⟧.j.number,
-        String: ⟦2-char-id⟧.j.string,
-        Escape: ⟦2-char-id⟧.j.escape,
-        ArithOp: ⟦2-char-id⟧.j.arithmeticOperator,
-        LogicOp: ⟦2-char-id⟧.j.logicOperator,
-        BitOp: ⟦2-char-id⟧.j.bitwiseOperator,
-        CompareOp: ⟦2-char-id⟧.j.compareOperator,
-        RegExp: ⟦2-char-id⟧.j.regexp,
-        Equals: ⟦2-char-id⟧.j.definitionOperator,
-        Arrow: ⟦2-char-id⟧.j.function(⟦2-char-id⟧.j.punctuation),
-        ": Spread": ⟦2-char-id⟧.j.punctuation,
-        "( )": ⟦2-char-id⟧.j.paren,
-        "[ ]": ⟦2-char-id⟧.j.squareBracket,
-        "{ }": ⟦2-char-id⟧.j.brace,
-        "InterpolationStart InterpolationEnd": ⟦2-char-id⟧.j.special(⟦2-char-id⟧.j.brace),
-        ".": ⟦2-char-id⟧.j.derefOperator,
-        ", ;": ⟦2-char-id⟧.j.separator,
-        "@": ⟦2-char-id⟧.j.meta,
-        TypeName: ⟦2-char-id⟧.j.typeName,
-        TypeDefinition: ⟦2-char-id⟧.j.definition(⟦2-char-id⟧.j.typeName),
-        "type enum interface implements namespace module declare": ⟦2-char-id⟧.j.definitionKeyword,
-        "abstract global Privacy readonly override": ⟦2-char-id⟧.j.modifier,
-        "is keyof unique infer asserts": ⟦2-char-id⟧.j.operatorKeyword,
-        JSXAttributeValue: ⟦2-char-id⟧.j.attributeValue,
-        JSXText: ⟦2-char-id⟧.j.content,
-        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": ⟦2-char-id⟧.j.angleBracket,
-        "JSXIdentifier JSXNameSpacedName": ⟦2-char-id⟧.j.tagName,
-        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": ⟦2-char-id⟧.j.attributeName,
-        "JSXBuiltin/JSXIdentifier": ⟦2-char-id⟧.j.standard(⟦2-char-id⟧.j.tagName)
+      ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)({
+        "get set async static": ⟦2-char-id⟧.h.modifier,
+        "for while do if else switch try catch finally return throw break continue default case defer": ⟦2-char-id⟧.h.controlKeyword,
+        "in of await yield void typeof delete instanceof as satisfies": ⟦2-char-id⟧.h.operatorKeyword,
+        "let var const using function class extends": ⟦2-char-id⟧.h.definitionKeyword,
+        "import export from": ⟦2-char-id⟧.h.moduleKeyword,
+        "with debugger new": ⟦2-char-id⟧.h.keyword,
+        TemplateString: ⟦2-char-id⟧.h.special(⟦2-char-id⟧.h.string),
+        super: ⟦2-char-id⟧.h.atom,
+        BooleanLiteral: ⟦2-char-id⟧.h.bool,
+        this: ⟦2-char-id⟧.h.self,
+        null: ⟦2-char-id⟧.h.null,
+        Star: ⟦2-char-id⟧.h.modifier,
+        VariableName: ⟦2-char-id⟧.h.variableName,
+        "CallExpression/VariableName TaggedTemplateExpression/VariableName": ⟦2-char-id⟧.h.function(⟦2-char-id⟧.h.variableName),
+        VariableDefinition: ⟦2-char-id⟧.h.definition(⟦2-char-id⟧.h.variableName),
+        Label: ⟦2-char-id⟧.h.labelName,
+        PropertyName: ⟦2-char-id⟧.h.propertyName,
+        PrivatePropertyName: ⟦2-char-id⟧.h.special(⟦2-char-id⟧.h.propertyName),
+        "CallExpression/MemberExpression/PropertyName": ⟦2-char-id⟧.h.function(⟦2-char-id⟧.h.propertyName),
+        "FunctionDeclaration/VariableDefinition": ⟦2-char-id⟧.h.function(⟦2-char-id⟧.h.definition(⟦2-char-id⟧.h.variableName)),
+        "ClassDeclaration/VariableDefinition": ⟦2-char-id⟧.h.definition(⟦2-char-id⟧.h.className),
+        "NewExpression/VariableName": ⟦2-char-id⟧.h.className,
+        PropertyDefinition: ⟦2-char-id⟧.h.definition(⟦2-char-id⟧.h.propertyName),
+        PrivatePropertyDefinition: ⟦2-char-id⟧.h.definition(⟦2-char-id⟧.h.special(⟦2-char-id⟧.h.propertyName)),
+        UpdateOp: ⟦2-char-id⟧.h.updateOperator,
+        "LineComment Hashbang": ⟦2-char-id⟧.h.lineComment,
+        BlockComment: ⟦2-char-id⟧.h.blockComment,
+        Number: ⟦2-char-id⟧.h.number,
+        String: ⟦2-char-id⟧.h.string,
+        Escape: ⟦2-char-id⟧.h.escape,
+        ArithOp: ⟦2-char-id⟧.h.arithmeticOperator,
+        LogicOp: ⟦2-char-id⟧.h.logicOperator,
+        BitOp: ⟦2-char-id⟧.h.bitwiseOperator,
+        CompareOp: ⟦2-char-id⟧.h.compareOperator,
+        RegExp: ⟦2-char-id⟧.h.regexp,
+        Equals: ⟦2-char-id⟧.h.definitionOperator,
+        Arrow: ⟦2-char-id⟧.h.function(⟦2-char-id⟧.h.punctuation),
+        ": Spread": ⟦2-char-id⟧.h.punctuation,
+        "( )": ⟦2-char-id⟧.h.paren,
+        "[ ]": ⟦2-char-id⟧.h.squareBracket,
+        "{ }": ⟦2-char-id⟧.h.brace,
+        "InterpolationStart InterpolationEnd": ⟦2-char-id⟧.h.special(⟦2-char-id⟧.h.brace),
+        ".": ⟦2-char-id⟧.h.derefOperator,
+        ", ;": ⟦2-char-id⟧.h.separator,
+        "@": ⟦2-char-id⟧.h.meta,
+        TypeName: ⟦2-char-id⟧.h.typeName,
+        TypeDefinition: ⟦2-char-id⟧.h.definition(⟦2-char-id⟧.h.typeName),
+        "type enum interface implements namespace module declare": ⟦2-char-id⟧.h.definitionKeyword,
+        "abstract global Privacy readonly override": ⟦2-char-id⟧.h.modifier,
+        "is keyof unique infer asserts": ⟦2-char-id⟧.h.operatorKeyword,
+        JSXAttributeValue: ⟦2-char-id⟧.h.attributeValue,
+        JSXText: ⟦2-char-id⟧.h.content,
+        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": ⟦2-char-id⟧.h.angleBracket,
+        "JSXIdentifier JSXNameSpacedName": ⟦2-char-id⟧.h.tagName,
+        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": ⟦2-char-id⟧.h.attributeName,
+        "JSXBuiltin/JSXIdentifier": ⟦2-char-id⟧.h.standard(⟦2-char-id⟧.h.tagName)
       }),
       ⟦2-char-id⟧ = {
         __proto__: null,
```

</details>

<details>
<summary>Hunk 116 · Change · +1 / -1</summary>

```diff
@@ -2875,7 +2875,7 @@
         skippedNodes: [0, 5, 6, 278],
         repeatNodeCount: 37,
         tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
-        tokenizers: [⟦2-char-id⟧, kJ, pJ, zJ, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, HJ, new ⟦2-char-id⟧("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new ⟦2-char-id⟧("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
+        tokenizers: [⟦2-char-id⟧, PB, QB, aB, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, cB, new ⟦2-char-id⟧("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new ⟦2-char-id⟧("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
         topRules: {
           Script: [0, 7],
           SingleExpression: [1, 276],
```

</details>

<details>
<summary>Hunk 117 · Change · +19 / -19</summary>

```diff
@@ -2904,69 +2904,69 @@
         }],
         tokenPrec: 15201
       });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(40078),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(40060),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(40065),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(40052);
-    const ⟦2-char-id⟧ = [(0, ⟦2-char-id⟧.w)("function ${name}(${params}) {\n\t${}\n}", {
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(40060),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(40036),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(40040),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(40033);
+    const ⟦2-char-id⟧ = [(0, ⟦2-char-id⟧.v)("function ${name}(${params}) {\n\t${}\n}", {
         label: "function",
         detail: "definition",
         type: "keyword"
-      }), (0, ⟦2-char-id⟧.w)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
+      }), (0, ⟦2-char-id⟧.v)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
         label: "for",
         detail: "loop",
         type: "keyword"
-      }), (0, ⟦2-char-id⟧.w)("for (let ${name} of ${collection}) {\n\t${}\n}", {
+      }), (0, ⟦2-char-id⟧.v)("for (let ${name} of ${collection}) {\n\t${}\n}", {
         label: "for",
         detail: "of loop",
         type: "keyword"
-      }), (0, ⟦2-char-id⟧.w)("do {\n\t${}\n} while (${})", {
+      }), (0, ⟦2-char-id⟧.v)("do {\n\t${}\n} while (${})", {
         label: "do",
         detail: "loop",
         type: "keyword"
-      }), (0, ⟦2-char-id⟧.w)("while (${}) {\n\t${}\n}", {
+      }), (0, ⟦2-char-id⟧.v)("while (${}) {\n\t${}\n}", {
         label: "while",
         detail: "loop",
         type: "keyword"
-      }), (0, ⟦2-char-id⟧.w)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
+      }), (0, ⟦2-char-id⟧.v)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
         label: "try",
         detail: "/ catch block",
         type: "keyword"
-      }), (0, ⟦2-char-id⟧.w)("if (${}) {\n\t${}\n}", {
+      }), (0, ⟦2-char-id⟧.v)("if (${}) {\n\t${}\n}", {
         label: "if",
         detail: "block",
         type: "keyword"
-      }), (0, ⟦2-char-id⟧.w)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
+      }), (0, ⟦2-char-id⟧.v)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
         label: "if",
         detail: "/ else block",
         type: "keyword"
-      }), (0, ⟦2-char-id⟧.w)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
+      }), (0, ⟦2-char-id⟧.v)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
         label: "class",
         detail: "definition",
         type: "keyword"
-      }), (0, ⟦2-char-id⟧.w)('import {${names}} from "${module}"\n${}', {
+      }), (0, ⟦2-char-id⟧.v)('import {${names}} from "${module}"\n${}', {
         label: "import",
         detail: "named",
         type: "keyword"
-      }), (0, ⟦2-char-id⟧.w)('import ${name} from "${module}"\n${}', {
+      }), (0, ⟦2-char-id⟧.v)('import ${name} from "${module}"\n${}', {
         label: "import",
         detail: "default",
         type: "keyword"
       })],
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.concat([(0, ⟦2-char-id⟧.w)("interface ${name} {\n\t${}\n}", {
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.concat([(0, ⟦2-char-id⟧.v)("interface ${name} {\n\t${}\n}", {
         label: "interface",
         detail: "definition",
         type: "keyword"
-      }), (0, ⟦2-char-id⟧.w)("type ${name} = ${type}", {
+      }), (0, ⟦2-char-id⟧.v)("type ${name} = ${type}", {
         label: "type",
         detail: "definition",
         type: "keyword"
-      }), (0, ⟦2-char-id⟧.w)("enum ${name} {\n\t${}\n}", {
+      }), (0, ⟦2-char-id⟧.v)("enum ${name} {\n\t${}\n}", {
         label: "enum",
         detail: "definition",
         type: "keyword"
       })]),
-      ⟦2-char-id⟧ = new ⟦2-char-id⟧.n,
+      ⟦2-char-id⟧ = new ⟦2-char-id⟧.m,
       ⟦2-char-id⟧ = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 118 · Change · +1 / -1</summary>

```diff
@@ -2987,7 +2987,7 @@
           ⟦2-char-id⟧.matchContext(⟦2-char-id⟧) || ⟦2-char-id⟧(⟦2-char-id⟧, "variable")
         },
         TypeDefinition(⟦2-char-id⟧, ⟦2-char-id⟧) {
-          cJ(⟦2-char-id⟧, "type")
+          TB(⟦2-char-id⟧, "type")
         },
         __proto__: null
       };
```

</details>

<details>
<summary>Hunk 119 · Change · +2 / -2</summary>

```diff
@@ -3014,13 +3014,13 @@
           for (let ⟦2-char-id⟧ of ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.node)) ⟦2-char-id⟧.push(⟦2-char-id⟧);
           return !1
         }
-      })), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧), UJ
+      })), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧), yB
     }
     const ⟦2-char-id⟧ = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
       ⟦2-char-id⟧ = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.ub)(⟦2-char-id⟧.state).resolveInner(⟦2-char-id⟧.pos, -1);
+      let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.hb)(⟦2-char-id⟧.state).resolveInner(⟦2-char-id⟧.pos, -1);
       if (⟦2-char-id⟧.indexOf(⟦2-char-id⟧.name) > -1) return null;
       let ⟦2-char-id⟧ = "VariableName" == ⟦2-char-id⟧.name || ⟦2-char-id⟧.to - ⟦2-char-id⟧.from < 20 && ⟦2-char-id⟧.test(⟦2-char-id⟧.state.sliceDoc(⟦2-char-id⟧.from, ⟦2-char-id⟧.to));
       if (!⟦2-char-id⟧ && !⟦2-char-id⟧.explicit) return null;
```

</details>

<details>
<summary>Hunk 120 · Change · +6 / -6</summary>

```diff
@@ -3035,26 +3035,26 @@
     const ⟦2-char-id⟧ = ⟦2-char-id⟧.g.define({
         name: "javascript",
         parser: ⟦2-char-id⟧.configure({
-          props: [⟦2-char-id⟧.Y.add({
-            IfStatement: (0, ⟦2-char-id⟧.o)({
+          props: [⟦2-char-id⟧.M.add({
+            IfStatement: (0, ⟦2-char-id⟧.p)({
               except: /^\s*({|else\b)/
             }),
-            TryStatement: (0, ⟦2-char-id⟧.o)({
+            TryStatement: (0, ⟦2-char-id⟧.p)({
               except: /^\s*({|catch\b|finally\b)/
             }),
-            LabeledStatement: ⟦2-char-id⟧.B,
+            LabeledStatement: ⟦2-char-id⟧.z,
             SwitchBody: ⟦2-char-id⟧ => {
               let ⟦2-char-id⟧ = ⟦2-char-id⟧.textAfter,
                 ⟦2-char-id⟧ = /^\s*\}/.test(⟦2-char-id⟧),
                 ⟦2-char-id⟧ = /^\s*(case|default)\b/.test(⟦2-char-id⟧);
               return ⟦2-char-id⟧.baseIndent + (⟦2-char-id⟧ ? 0 : ⟦2-char-id⟧ ? 1 : 2) * ⟦2-char-id⟧.unit
             },
-            Block: (0, ⟦2-char-id⟧.x)({
+            Block: (0, ⟦2-char-id⟧.y)({
               closing: "}"
             }),
             ArrowFunction: ⟦2-char-id⟧ => ⟦2-char-id⟧.baseIndent + ⟦2-char-id⟧.unit,
             "TemplateString BlockComment": () => null,
-            "Statement Property": (0, ⟦2-char-id⟧.o)({
+            "Statement Property": (0, ⟦2-char-id⟧.p)({
               except: /^\s*{/
             }),
             JSXElement(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 121 · Change · +2 / -2</summary>

```diff
@@ -3066,8 +3066,8 @@
               return ⟦2-char-id⟧.lineIndent(⟦2-char-id⟧.node.from) + (⟦2-char-id⟧ ? 0 : ⟦2-char-id⟧.unit)
             },
             "JSXOpenTag JSXSelfClosingTag": ⟦2-char-id⟧ => ⟦2-char-id⟧.column(⟦2-char-id⟧.node.from) + ⟦2-char-id⟧.unit
-          }), ⟦2-char-id⟧.L.add({
-            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": ⟦2-char-id⟧.G,
+          }), ⟦2-char-id⟧.H.add({
+            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": ⟦2-char-id⟧.F,
             BlockComment: ⟦2-char-id⟧ => ({
               from: ⟦2-char-id⟧.from + 2,
               to: ⟦2-char-id⟧.to - 2
```

</details>

<details>
<summary>Hunk 122 · Change · +1 / -1</summary>

```diff
@@ -3109,7 +3109,7 @@
       }),
       ⟦2-char-id⟧ = {
         test: ⟦2-char-id⟧ => /^JSX/.test(⟦2-char-id⟧.name),
-        facet: (0, ⟦2-char-id⟧.t)({
+        facet: (0, ⟦2-char-id⟧.u)({
           commentTokens: {
             block: {
               open: "{/*",
```

</details>

<details>
<summary>Hunk 123 · Change · +2 / -2</summary>

```diff
@@ -3123,11 +3123,11 @@
       }, "typescript"),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.configure({
         dialect: "jsx",
-        props: [⟦2-char-id⟧.jb.add((⟦2-char-id⟧ => ⟦2-char-id⟧.isTop ? [⟦2-char-id⟧] : void 0))]
+        props: [⟦2-char-id⟧._.add((⟦2-char-id⟧ => ⟦2-char-id⟧.isTop ? [⟦2-char-id⟧] : void 0))]
       }),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.configure({
         dialect: "jsx ts",
-        props: [⟦2-char-id⟧.jb.add((⟦2-char-id⟧ => ⟦2-char-id⟧.isTop ? [⟦2-char-id⟧] : void 0))]
+        props: [⟦2-char-id⟧._.add((⟦2-char-id⟧ => ⟦2-char-id⟧.isTop ? [⟦2-char-id⟧] : void 0))]
       }, "typescript");
     let ⟦2-char-id⟧ = ⟦2-char-id⟧ => ({
       label: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 124 · Change · +4 / -4</summary>

```diff
@@ -3138,13 +3138,13 @@
 
     function ⟦2-char-id⟧() {
       let ⟦2-char-id⟧ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
-        ⟦2-char-id⟧ = ⟦2-char-id⟧.jsx ? ⟦2-char-id⟧.typescript ? hc : Yc : ⟦2-char-id⟧.typescript ? jc : ⟦2-char-id⟧,
+        ⟦2-char-id⟧ = ⟦2-char-id⟧.jsx ? ⟦2-char-id⟧.typescript ? kT : oT : ⟦2-char-id⟧.typescript ? gT : ⟦2-char-id⟧,
         ⟦2-char-id⟧ = ⟦2-char-id⟧.typescript ? ⟦2-char-id⟧.concat(⟦2-char-id⟧) : ⟦2-char-id⟧.concat(⟦2-char-id⟧);
-      return new ⟦2-char-id⟧.j(⟦2-char-id⟧, [⟦2-char-id⟧.data.of({
-        autocomplete: (0, ⟦2-char-id⟧.t)(⟦2-char-id⟧, (0, ⟦2-char-id⟧.p)(⟦2-char-id⟧))
+      return new ⟦2-char-id⟧.h(⟦2-char-id⟧, [⟦2-char-id⟧.data.of({
+        autocomplete: (0, ⟦2-char-id⟧.t)(⟦2-char-id⟧, (0, ⟦2-char-id⟧.l)(⟦2-char-id⟧))
       }), ⟦2-char-id⟧.data.of({
         autocomplete: ⟦2-char-id⟧
-      }), ⟦2-char-id⟧.jsx ? rc : []])
+      }), ⟦2-char-id⟧.jsx ? vT : []])
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 125 · Change · +2 / -2</summary>

```diff
@@ -3154,8 +3154,8 @@
       return ""
     }
     const ⟦2-char-id⟧ = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.f.inputHandler.of(((⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) => {
-        if ((⟦2-char-id⟧ ? ⟦2-char-id⟧.composing : ⟦2-char-id⟧.compositionStarted) || ⟦2-char-id⟧.state.readOnly || ⟦2-char-id⟧ != ⟦2-char-id⟧ || ">" != ⟦2-char-id⟧ && "/" != ⟦2-char-id⟧ || !⟦2-char-id⟧.isActiveAt(⟦2-char-id⟧.state, cJ, -1)) return !1;
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.i.inputHandler.of(((⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) => {
+        if ((⟦2-char-id⟧ ? ⟦2-char-id⟧.composing : ⟦2-char-id⟧.compositionStarted) || ⟦2-char-id⟧.state.readOnly || ⟦2-char-id⟧ != ⟦2-char-id⟧ || ">" != ⟦2-char-id⟧ && "/" != ⟦2-char-id⟧ || !⟦2-char-id⟧.isActiveAt(⟦2-char-id⟧.state, TB, -1)) return !1;
         let ⟦2-char-id⟧ = ⟦2-char-id⟧(),
           {
             state: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 126 · Change · +1 / -1</summary>

```diff
@@ -3165,7 +3165,7 @@
             let ⟦2-char-id⟧, {
                 head: ⟦2-char-id⟧
               } = ⟦2-char-id⟧,
-              ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.ub)(⟦2-char-id⟧).resolveInner(⟦2-char-id⟧ - 1, -1);
+              ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.hb)(⟦2-char-id⟧).resolveInner(⟦2-char-id⟧ - 1, -1);
             if ("JSXStartTag" == ⟦2-char-id⟧.name && (⟦2-char-id⟧ = ⟦2-char-id⟧.parent), ⟦2-char-id⟧.doc.sliceString(⟦2-char-id⟧ - 1, ⟦2-char-id⟧) != ⟦2-char-id⟧ || "JSXAttributeValue" == ⟦2-char-id⟧.name && ⟦2-char-id⟧.to > ⟦2-char-id⟧);
             else {
               if (">" == ⟦2-char-id⟧ && "JSXFragmentTag" == ⟦2-char-id⟧.name) return {
```

</details>

<details>
<summary>Hunk 127 · Change · +2 / -2</summary>

```diff
@@ -3179,9 +3179,9 @@
                 let ⟦2-char-id⟧ = ⟦2-char-id⟧.parent,
                   ⟦2-char-id⟧ = ⟦2-char-id⟧.parent;
                 if (⟦2-char-id⟧ && ⟦2-char-id⟧.from == ⟦2-char-id⟧ - 2 && ((⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.doc, ⟦2-char-id⟧.firstChild, ⟦2-char-id⟧)) || "JSXFragmentTag" == (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.firstChild) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.name))) {
-                  let ⟦2-char-id⟧ = `${ZJ}>`;
+                  let ⟦2-char-id⟧ = `${dB}>`;
                   return {
-                    range: ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧ + ⟦2-char-id⟧.length, -1),
+                    range: ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧ + ⟦2-char-id⟧.length, -1),
                     changes: {
                       from: ⟦2-char-id⟧,
                       insert: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 128 · Change · +2 / -2</summary>

```diff
@@ -3196,11 +3196,11 @@
                     ⟦2-char-id⟧ = ⟦2-char-id⟧.parent
                   }
                 }(⟦2-char-id⟧);
-                if (⟦2-char-id⟧ && "JSXOpenTag" == ⟦2-char-id⟧.name && !/^\/?>|^<\//.test(⟦2-char-id⟧.doc.sliceString(⟦2-char-id⟧, ⟦2-char-id⟧ + 2)) && (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.doc, cJ, ⟦2-char-id⟧))) return {
+                if (⟦2-char-id⟧ && "JSXOpenTag" == ⟦2-char-id⟧.name && !/^\/?>|^<\//.test(⟦2-char-id⟧.doc.sliceString(⟦2-char-id⟧, ⟦2-char-id⟧ + 2)) && (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.doc, TB, ⟦2-char-id⟧))) return {
                   range: ⟦2-char-id⟧,
                   changes: {
                     from: ⟦2-char-id⟧,
-                    insert: `</${ZJ}>`
+                    insert: `</${dB}>`
                   }
                 }
               }
```

</details>

<details>
<summary>Hunk 129 · Change · +29 / -29</summary>

```diff
@@ -3215,58 +3215,58 @@
         })]), !0)
       }))
   },
-  40078: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  40060: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      B: () => ⟦2-char-id⟧,
-      E: () => ⟦2-char-id⟧,
+      D: () => ⟦2-char-id⟧,
+      F: () => ⟦2-char-id⟧,
       G: () => ⟦2-char-id⟧,
+      H: () => ⟦2-char-id⟧,
       I: () => ⟦2-char-id⟧,
+      J: () => ⟦2-char-id⟧,
       L: () => ⟦2-char-id⟧,
-      P: () => ⟦2-char-id⟧,
-      S: () => ⟦2-char-id⟧,
-      W: () => ⟦2-char-id⟧,
+      M: () => ⟦2-char-id⟧,
+      Q: () => ⟦2-char-id⟧,
+      R: () => ⟦2-char-id⟧,
+      V: () => ⟦2-char-id⟧,
       Y: () => ⟦2-char-id⟧,
       _: () => ⟦2-char-id⟧,
-      c: () => ⟦2-char-id⟧,
+      b: () => ⟦2-char-id⟧,
       cb: () => ⟦2-char-id⟧,
       d: () => ⟦2-char-id⟧,
-      db: () => ⟦2-char-id⟧,
-      fb: () => ⟦2-char-id⟧,
       g: () => ⟦2-char-id⟧,
-      j: () => ⟦2-char-id⟧,
-      jb: () => ⟦2-char-id⟧,
-      m: () => ⟦2-char-id⟧,
-      nb: () => ⟦2-char-id⟧,
-      o: () => ⟦2-char-id⟧,
+      gb: () => ⟦2-char-id⟧,
+      h: () => ⟦2-char-id⟧,
+      hb: () => ⟦2-char-id⟧,
+      l: () => ⟦2-char-id⟧,
+      p: () => ⟦2-char-id⟧,
       q: () => ⟦2-char-id⟧,
-      qb: () => ⟦2-char-id⟧,
-      t: () => ⟦2-char-id⟧,
-      ub: () => ⟦2-char-id⟧,
-      x: () => ⟦2-char-id⟧
+      u: () => ⟦2-char-id⟧,
+      y: () => ⟦2-char-id⟧,
+      z: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧(40080),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(40060),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(40065),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(40084),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(40068);
-    const ⟦2-char-id⟧ = new ⟦2-char-id⟧.h;
+    var ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧(40064),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(40036),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(40040),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(40069),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(40043);
+    const ⟦2-char-id⟧ = new ⟦2-char-id⟧.i;
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return ⟦2-char-id⟧.p.define({
+      return ⟦2-char-id⟧.l.define({
         combine: ⟦2-char-id⟧ ? ⟦2-char-id⟧ => ⟦2-char-id⟧.concat(⟦2-char-id⟧) : void 0
       })
     }
-    const ⟦2-char-id⟧ = new ⟦2-char-id⟧.h;
+    const ⟦2-char-id⟧ = new ⟦2-char-id⟧.i;
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
           ⟦2-char-id⟧ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
-        this.data = ⟦2-char-id⟧, this.name = ⟦2-char-id⟧, ⟦2-char-id⟧.o.prototype.hasOwnProperty("tree") || Object.defineProperty(⟦2-char-id⟧.o.prototype, "tree", {
+        this.data = ⟦2-char-id⟧, this.name = ⟦2-char-id⟧, ⟦2-char-id⟧.i.prototype.hasOwnProperty("tree") || Object.defineProperty(⟦2-char-id⟧.i.prototype, "tree", {
           get() {
             return ⟦2-char-id⟧(this)
           }
-        }), this.parser = ⟦2-char-id⟧, this.extension = [⟦2-char-id⟧.of(this), ⟦2-char-id⟧.o.languageData.of(((⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-          let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧),
+        }), this.parser = ⟦2-char-id⟧, this.extension = [⟦2-char-id⟧.of(this), ⟦2-char-id⟧.i.languageData.of(((⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+          let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧),
             ⟦2-char-id⟧ = ⟦2-char-id⟧.type.prop(⟦2-char-id⟧);
           if (!⟦2-char-id⟧) return [];
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.facet(⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 130 · Change · +2 / -2</summary>

```diff
@@ -3276,14 +3276,14 @@
             for (let ⟦2-char-id⟧ of ⟦2-char-id⟧)
               if (⟦2-char-id⟧.test(⟦2-char-id⟧, ⟦2-char-id⟧)) {
                 let ⟦2-char-id⟧ = ⟦2-char-id⟧.facet(⟦2-char-id⟧.facet);
-                return "replace" == ⟦2-char-id⟧.type ? ZJ : ⟦2-char-id⟧.concat(⟦2-char-id⟧)
+                return "replace" == ⟦2-char-id⟧.type ? dB : ⟦2-char-id⟧.concat(⟦2-char-id⟧)
               }
           }
           return ⟦2-char-id⟧
         }))].concat(⟦2-char-id⟧)
       }
       isActiveAt(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        return ⟦2-char-id⟧(⟦2-char-id⟧, cJ, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(⟦2-char-id⟧) == this.data
+        return ⟦2-char-id⟧(⟦2-char-id⟧, TB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(⟦2-char-id⟧) == this.data
       }
       findRegions(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.facet(⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 131 · Change · +1 / -1</summary>

```diff
@@ -3298,7 +3298,7 @@
               from: ⟦2-char-id⟧,
               to: ⟦2-char-id⟧ + ⟦2-char-id⟧.length
             });
-            let ⟦2-char-id⟧ = ⟦2-char-id⟧.prop(⟦2-char-id⟧.h.mounted);
+            let ⟦2-char-id⟧ = ⟦2-char-id⟧.prop(⟦2-char-id⟧.i.mounted);
             if (⟦2-char-id⟧) {
               if (⟦2-char-id⟧.tree.prop(⟦2-char-id⟧) == this.data) {
                 if (⟦2-char-id⟧.overlay)
```

</details>

<details>
<summary>Hunk 132 · Change · +8 / -8</summary>

```diff
@@ -3319,32 +3319,32 @@
             }
             for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.children.length; ⟦2-char-id⟧++) {
               let ⟦2-char-id⟧ = ⟦2-char-id⟧.children[⟦2-char-id⟧];
-              ⟦2-char-id⟧ instanceof ⟦2-char-id⟧.t && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.positions[⟦2-char-id⟧] + ⟦2-char-id⟧)
+              ⟦2-char-id⟧ instanceof ⟦2-char-id⟧.s && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.positions[⟦2-char-id⟧] + ⟦2-char-id⟧)
             }
           };
-        return ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧), 0), ZJ
+        return ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧), 0), dB
       }
       get allowsNesting() {
         return !0
       }
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.facet(⟦2-char-id⟧),
         ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧).topNode;
       if (!⟦2-char-id⟧ || ⟦2-char-id⟧.allowsNesting)
-        for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧; ⟦2-char-id⟧ = ⟦2-char-id⟧.enter(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧.f.ExcludeBuffers | ⟦2-char-id⟧.f.EnterBracketed)) ⟦2-char-id⟧.type.isTop && (⟦2-char-id⟧ = ⟦2-char-id⟧);
+        for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧; ⟦2-char-id⟧ = ⟦2-char-id⟧.enter(⟦2-char-id⟧, dB, ⟦2-char-id⟧.f.ExcludeBuffers | ⟦2-char-id⟧.f.EnterBracketed)) ⟦2-char-id⟧.type.isTop && (⟦2-char-id⟧ = ⟦2-char-id⟧);
       return ⟦2-char-id⟧
     }
-    ⟦2-char-id⟧.setState = ⟦2-char-id⟧.A.define();
+    ⟦2-char-id⟧.setState = ⟦2-char-id⟧.x.define();
     class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-        super(⟦2-char-id⟧, cJ, [], ⟦2-char-id⟧), this.parser = ⟦2-char-id⟧
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+        super(⟦2-char-id⟧, TB, [], ⟦2-char-id⟧), this.parser = ⟦2-char-id⟧
       }
       static define(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.languageData);
         return new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.parser.configure({
-          props: [⟦2-char-id⟧.add((⟦2-char-id⟧ => ⟦2-char-id⟧.isTop ? cJ : void 0))]
+          props: [⟦2-char-id⟧.add((⟦2-char-id⟧ => ⟦2-char-id⟧.isTop ? TB : void 0))]
         }), ⟦2-char-id⟧.name)
       }
       configure(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 133 · Change · +1 / -1</summary>

```diff
@@ -3357,7 +3357,7 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.field(⟦2-char-id⟧.state, !1);
-      return ⟦2-char-id⟧ ? ⟦2-char-id⟧.tree : ⟦2-char-id⟧.t.empty
+      return ⟦2-char-id⟧ ? ⟦2-char-id⟧.tree : ⟦2-char-id⟧.s.empty
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 134 · Change · +2 / -2</summary>

```diff
@@ -3380,8 +3380,8 @@
             to: ⟦2-char-id⟧
           });
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.isDone(⟦2-char-id⟧) || ⟦2-char-id⟧.work(⟦2-char-id⟧, ⟦2-char-id⟧) ? ⟦2-char-id⟧.tree : null;
-          return ⟦2-char-id⟧.updateViewport(⟦2-char-id⟧), XJ
-        }(⟦2-char-id⟧.state, cJ, ⟦2-char-id⟧);
+          return ⟦2-char-id⟧.updateViewport(⟦2-char-id⟧), lB
+        }(⟦2-char-id⟧.state, TB, ⟦2-char-id⟧);
       return ⟦2-char-id⟧ != ⟦2-char-id⟧(⟦2-char-id⟧.state) && ⟦2-char-id⟧.dispatch({}), !!⟦2-char-id⟧
     }
     class ⟦2-char-id⟧ {
```

</details>

<details>
<summary>Hunk 135 · Change · +3 / -3</summary>

```diff
@@ -3416,14 +3416,14 @@
           ⟦2-char-id⟧ = arguments.length > 7 ? arguments[7] : void 0;
         this.parser = ⟦2-char-id⟧, this.state = ⟦2-char-id⟧, this.fragments = ⟦2-char-id⟧, this.tree = ⟦2-char-id⟧, this.treeLen = ⟦2-char-id⟧, this.viewport = ⟦2-char-id⟧, this.skipped = ⟦2-char-id⟧, this.scheduleOn = ⟦2-char-id⟧, this.parse = null, this.tempSkipped = []
       }
-      static create(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-        return new ⟦2-char-id⟧(⟦2-char-id⟧, cJ, [], ⟦2-char-id⟧.t.empty, 0, ZJ, [], null)
+      static create(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+        return new ⟦2-char-id⟧(⟦2-char-id⟧, TB, [], ⟦2-char-id⟧.s.empty, 0, dB, [], null)
       }
       startParse() {
         return this.parser.startParse(new ⟦2-char-id⟧(this.state.doc), this.fragments)
       }
       work(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        return null != ⟦2-char-id⟧ && ⟦2-char-id⟧ >= this.state.doc.length && (⟦2-char-id⟧ = void 0), this.tree != ⟦2-char-id⟧.t.empty && this.isDone(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? cJ : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
+        return null != ⟦2-char-id⟧ && ⟦2-char-id⟧ >= this.state.doc.length && (⟦2-char-id⟧ = void 0), this.tree != ⟦2-char-id⟧.s.empty && this.isDone(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? TB : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
           var ⟦2-char-id⟧;
           if ("number" == typeof ⟦2-char-id⟧) {
             let ⟦2-char-id⟧ = Date.now() + ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 136 · Change · +1 / -1</summary>

```diff
@@ -3432,7 +3432,7 @@
           for (this.parse || (this.parse = this.startParse()), null != ⟦2-char-id⟧ && (null == this.parse.stoppedAt || this.parse.stoppedAt > ⟦2-char-id⟧) && ⟦2-char-id⟧ < this.state.doc.length && this.parse.stopAt(⟦2-char-id⟧);;) {
             let ⟦2-char-id⟧ = this.parse.advance();
             if (⟦2-char-id⟧) {
-              if (this.fragments = this.withoutTempSkipped(⟦2-char-id⟧.r.addTree(⟦2-char-id⟧, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (⟦2-char-id⟧ = this.parse.stoppedAt) && void 0 !== ⟦2-char-id⟧ ? ZJ : this.state.doc.length, this.tree = ⟦2-char-id⟧, this.parse = null, !(this.treeLen < (null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? cJ : this.state.doc.length))) return !0;
+              if (this.fragments = this.withoutTempSkipped(⟦2-char-id⟧.r.addTree(⟦2-char-id⟧, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (⟦2-char-id⟧ = this.parse.stoppedAt) && void 0 !== ⟦2-char-id⟧ ? dB : this.state.doc.length, this.tree = ⟦2-char-id⟧, this.parse = null, !(this.treeLen < (null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? TB : this.state.doc.length))) return !0;
               this.parse = this.startParse()
             }
             if (⟦2-char-id⟧()) return !1
```

</details>

<details>
<summary>Hunk 137 · Change · +2 / -2</summary>

```diff
@@ -3468,12 +3468,12 @@
         } = this;
         if (this.takeTree(), !⟦2-char-id⟧.empty) {
           let ⟦2-char-id⟧ = [];
-          if (⟦2-char-id⟧.iterChangedRanges(((⟦2-char-id⟧, ZJ, FJ, ⟦2-char-id⟧) => ⟦2-char-id⟧.push({
+          if (⟦2-char-id⟧.iterChangedRanges(((⟦2-char-id⟧, dB, VB, ⟦2-char-id⟧) => ⟦2-char-id⟧.push({
               fromA: ⟦2-char-id⟧,
               toA: ⟦2-char-id⟧,
               fromB: ⟦2-char-id⟧,
               toB: ⟦2-char-id⟧
-            }))), ⟦2-char-id⟧ = ⟦2-char-id⟧.r.applyChanges(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.t.empty, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = {
+            }))), ⟦2-char-id⟧ = ⟦2-char-id⟧.r.applyChanges(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.s.empty, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = {
               from: ⟦2-char-id⟧.mapPos(⟦2-char-id⟧.from, -1),
               to: ⟦2-char-id⟧.mapPos(⟦2-char-id⟧.to, 1)
             }, this.skipped.length) {
```

</details>

<details>
<summary>Hunk 138 · Change · +1 / -1</summary>

```diff
@@ -3488,7 +3488,7 @@
             }
           }
         }
-        return new ⟦2-char-id⟧(this.parser, cJ, ZJ, FJ, eJ, XJ, AJ, this.scheduleOn)
+        return new ⟦2-char-id⟧(this.parser, TB, dB, VB, pB, lB, JB, this.scheduleOn)
       }
       updateViewport(⟦2-char-id⟧) {
         if (this.viewport.from == ⟦2-char-id⟧.from && this.viewport.to == ⟦2-char-id⟧.to) return !1;
```

</details>

<details>
<summary>Hunk 139 · Change · +1 / -1</summary>

```diff
@@ -3499,7 +3499,7 @@
             from: ⟦2-char-id⟧,
             to: ⟦2-char-id⟧
           } = this.skipped[⟦2-char-id⟧];
-          ⟦2-char-id⟧ < ⟦2-char-id⟧.to && ⟦2-char-id⟧ > ⟦2-char-id⟧.from && (this.fragments = ⟦2-char-id⟧(this.fragments, cJ, ⟦2-char-id⟧), this.skipped.splice(⟦2-char-id⟧--, 1))
+          ⟦2-char-id⟧ < ⟦2-char-id⟧.to && ⟦2-char-id⟧ > ⟦2-char-id⟧.from && (this.fragments = ⟦2-char-id⟧(this.fragments, TB, ⟦2-char-id⟧), this.skipped.splice(⟦2-char-id⟧--, 1))
         }
         return !(this.skipped.length >= ⟦2-char-id⟧) && (this.reset(), !0)
       }
```

</details>

<details>
<summary>Hunk 140 · Change · +2 / -2</summary>

```diff
@@ -3513,8 +3513,8 @@
         })
       }
       static getSkippingParser(⟦2-char-id⟧) {
-        return new class extends ⟦2-char-id⟧.o {
-          createParse(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧) {
+        return new class extends ⟦2-char-id⟧.q {
+          createParse(⟦2-char-id⟧, dB, ⟦2-char-id⟧) {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧[0].from,
               ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.length - 1].to;
             return {
```

</details>

<details>
<summary>Hunk 141 · Change · +1 / -1</summary>

```diff
@@ -3525,7 +3525,7 @@
                   for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.tempSkipped.push(⟦2-char-id⟧);
                   ⟦2-char-id⟧ && (⟦2-char-id⟧.scheduleOn = ⟦2-char-id⟧.scheduleOn ? Promise.all([⟦2-char-id⟧.scheduleOn, ⟦2-char-id⟧]) : ⟦2-char-id⟧)
                 }
-                return this.parsedPos = ⟦2-char-id⟧, new ⟦2-char-id⟧.t(⟦2-char-id⟧.k.none, [], [], ⟦2-char-id⟧ - ⟦2-char-id⟧)
+                return this.parsedPos = ⟦2-char-id⟧, new ⟦2-char-id⟧.s(⟦2-char-id⟧.k.none, [], [], ⟦2-char-id⟧ - ⟦2-char-id⟧)
               },
               stoppedAt: null,
               stopAt() {}
```

</details>

<details>
<summary>Hunk 142 · Change · +1 / -1</summary>

```diff
@@ -3543,7 +3543,7 @@
       }
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       return ⟦2-char-id⟧.r.applyChanges(⟦2-char-id⟧, [{
         fromA: ⟦2-char-id⟧,
         toA: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 143 · Change · +2 / -2</summary>

```diff
@@ -3563,14 +3563,14 @@
       }
       static init(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = Math.min(3⟦2-char-id⟧, ⟦2-char-id⟧.doc.length),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧.create(⟦2-char-id⟧.facet(⟦2-char-id⟧).parser, JJ, {
+          ⟦2-char-id⟧ = ⟦2-char-id⟧.create(⟦2-char-id⟧.facet(⟦2-char-id⟧).parser, BB, {
             from: 0,
             to: ⟦2-char-id⟧
           });
         return ⟦2-char-id⟧.work(20, ⟦2-char-id⟧) || ⟦2-char-id⟧.takeTree(), new ⟦2-char-id⟧(⟦2-char-id⟧)
       }
     }
-    ⟦2-char-id⟧.state = ⟦2-char-id⟧.E.define({
+    ⟦2-char-id⟧.state = ⟦2-char-id⟧.A.define({
       create: ⟦2-char-id⟧.init,
       update(⟦2-char-id⟧, ⟦2-char-id⟧) {
         for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.effects)
```

</details>

<details>
<summary>Hunk 144 · Change · +1 / -1</summary>

```diff
@@ -3592,7 +3592,7 @@
       return () => ⟦2-char-id⟧ < 0 ? clearTimeout(⟦2-char-id⟧) : cancelIdleCallback(⟦2-char-id⟧)
     });
     const ⟦2-char-id⟧ = "undefined" != typeof navigator && (null === (⟦2-char-id⟧ = navigator.scheduling) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.k.fromClass(class {
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.n.fromClass(class {
         constructor(⟦2-char-id⟧) {
           this.view = ⟦2-char-id⟧, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
         }
```

</details>

<details>
<summary>Hunk 145 · Change · +1 / -1</summary>

```diff
@@ -3626,7 +3626,7 @@
           })), this.chunkBudget > 0 && (!⟦2-char-id⟧ || ⟦2-char-id⟧) && this.scheduleWork(), this.checkAsyncSchedule(⟦2-char-id⟧.context)
         }
         checkAsyncSchedule(⟦2-char-id⟧) {
-          ⟦2-char-id⟧.scheduleOn && (this.workScheduled++, ⟦2-char-id⟧.scheduleOn.then((() => this.scheduleWork())).catch((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.Q)(this.view.state, ⟦2-char-id⟧))).then((() => this.workScheduled--)), ⟦2-char-id⟧.scheduleOn = null)
+          ⟦2-char-id⟧.scheduleOn && (this.workScheduled++, ⟦2-char-id⟧.scheduleOn.then((() => this.scheduleWork())).catch((⟦2-char-id⟧ => (0, ⟦2-char-id⟧.W)(this.view.state, ⟦2-char-id⟧))).then((() => this.workScheduled--)), ⟦2-char-id⟧.scheduleOn = null)
         }
         destroy() {
           this.working && this.working()
```

</details>

<details>
<summary>Hunk 146 · Change · +2 / -2</summary>

```diff
@@ -3641,9 +3641,9 @@
           }
         }
       }),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define({
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define({
         combine: ⟦2-char-id⟧ => ⟦2-char-id⟧.length ? ⟦2-char-id⟧[0] : null,
-        enables: ⟦2-char-id⟧ => [⟦2-char-id⟧.state, yJ, ⟦2-char-id⟧.f.contentAttributes.compute([⟦2-char-id⟧], (⟦2-char-id⟧ => {
+        enables: ⟦2-char-id⟧ => [⟦2-char-id⟧.state, MB, ⟦2-char-id⟧.i.contentAttributes.compute([⟦2-char-id⟧], (⟦2-char-id⟧ => {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.facet(⟦2-char-id⟧);
           return ⟦2-char-id⟧ && ⟦2-char-id⟧.name ? {
             "data-language": ⟦2-char-id⟧.name
```

</details>

<details>
<summary>Hunk 147 · Change · +2 / -2</summary>

```diff
@@ -3656,8 +3656,8 @@
         this.language = ⟦2-char-id⟧, this.support = ⟦2-char-id⟧, this.extension = [⟦2-char-id⟧, ⟦2-char-id⟧]
       }
     }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define({
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define({
         combine: ⟦2-char-id⟧ => {
           if (!⟦2-char-id⟧.length) return "  ";
           let ⟦2-char-id⟧ = ⟦2-char-id⟧[0];
```

</details>

<details>
<summary>Hunk 148 · Change · +2 / -2</summary>

```diff
@@ -3684,13 +3684,13 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      ⟦2-char-id⟧ instanceof ⟦2-char-id⟧.o && (⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧));
+      ⟦2-char-id⟧ instanceof ⟦2-char-id⟧.i && (⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧));
       for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.state.facet(⟦2-char-id⟧)) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
         if (void 0 !== ⟦2-char-id⟧) return ⟦2-char-id⟧
       }
       let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.state);
-      return ⟦2-char-id⟧.length >= ⟦2-char-id⟧ ? function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧.length >= ⟦2-char-id⟧ ? function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.resolveStack(⟦2-char-id⟧),
           ⟦2-char-id⟧ = ⟦2-char-id⟧.resolveInner(⟦2-char-id⟧, -1).resolve(⟦2-char-id⟧, 0).enterUnfinishedNodesBefore(⟦2-char-id⟧);
         if (⟦2-char-id⟧ != ⟦2-char-id⟧.node) {
```

</details>

<details>
<summary>Hunk 149 · Change · +2 / -2</summary>

```diff
@@ -3701,8 +3701,8 @@
             next: ⟦2-char-id⟧
           }
         }
-        return ⟦2-char-id⟧(⟦2-char-id⟧, JJ, ⟦2-char-id⟧)
-      }(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧) : null
+        return ⟦2-char-id⟧(⟦2-char-id⟧, BB, ⟦2-char-id⟧)
+      }(⟦2-char-id⟧, dB, ⟦2-char-id⟧) : null
     }
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 150 · Change · +1 / -1</summary>

```diff
@@ -3719,7 +3719,7 @@
         return null != ⟦2-char-id⟧ && ⟦2-char-id⟧ >= ⟦2-char-id⟧.from && ⟦2-char-id⟧ <= ⟦2-char-id⟧.to ? ⟦2-char-id⟧ && ⟦2-char-id⟧ == ⟦2-char-id⟧ ? {
           text: "",
           from: ⟦2-char-id⟧
-        } : (⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧ < JJ : ⟦2-char-id⟧ <= ⟦2-char-id⟧) ? {
+        } : (⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧ < BB : ⟦2-char-id⟧ <= ⟦2-char-id⟧) ? {
           text: ⟦2-char-id⟧.text.slice(⟦2-char-id⟧ - ⟦2-char-id⟧.from),
           from: ⟦2-char-id⟧
         } : {
```

</details>

<details>
<summary>Hunk 151 · Change · +2 / -2</summary>

```diff
@@ -3744,11 +3744,11 @@
           } = this.lineAt(⟦2-char-id⟧, ⟦2-char-id⟧),
           ⟦2-char-id⟧ = this.countColumn(⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧),
           ⟦2-char-id⟧ = this.options.overrideIndentation ? this.options.overrideIndentation(⟦2-char-id⟧) : -1;
-        return ⟦2-char-id⟧ > -1 && (⟦2-char-id⟧ += ⟦2-char-id⟧ - this.countColumn(⟦2-char-id⟧, ⟦2-char-id⟧.search(/\S|$/))), UJ
+        return ⟦2-char-id⟧ > -1 && (⟦2-char-id⟧ += ⟦2-char-id⟧ - this.countColumn(⟦2-char-id⟧, ⟦2-char-id⟧.search(/\S|$/))), yB
       }
       countColumn(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ⟦2-char-id⟧.length;
-        return (0, ⟦2-char-id⟧.U)(⟦2-char-id⟧, this.state.tabSize, ⟦2-char-id⟧)
+        return (0, ⟦2-char-id⟧.R)(⟦2-char-id⟧, this.state.tabSize, ⟦2-char-id⟧)
       }
       lineIndent(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
```

</details>

<details>
<summary>Hunk 152 · Change · +4 / -4</summary>

```diff
@@ -3767,12 +3767,12 @@
         return this.options.simulateBreak || null
       }
     }
-    const ⟦2-char-id⟧ = new ⟦2-char-id⟧.h;
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    const ⟦2-char-id⟧ = new ⟦2-char-id⟧.i;
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧; ⟦2-char-id⟧ = ⟦2-char-id⟧.next) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.node);
-        if (⟦2-char-id⟧) return ⟦2-char-id⟧(⟦2-char-id⟧.create(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧))
+        if (⟦2-char-id⟧) return ⟦2-char-id⟧(⟦2-char-id⟧.create(⟦2-char-id⟧, dB, ⟦2-char-id⟧))
       }
       return 0
     }
```

</details>

<details>
<summary>Hunk 153 · Change · +5 / -5</summary>

```diff
@@ -3781,28 +3781,28 @@
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.type.prop(⟦2-char-id⟧);
       if (⟦2-char-id⟧) return ⟦2-char-id⟧;
       let ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.firstChild;
-      if (⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.type.prop(⟦2-char-id⟧.h.closedBy))) {
+      if (⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.type.prop(⟦2-char-id⟧.i.closedBy))) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.lastChild,
           ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧.indexOf(⟦2-char-id⟧.name) > -1;
         return ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, !0, 1, void 0, ⟦2-char-id⟧ && ! function(⟦2-char-id⟧) {
           return ⟦2-char-id⟧.pos == ⟦2-char-id⟧.options.simulateBreak && ⟦2-char-id⟧.options.simulateDoubleBreak
         }(⟦2-char-id⟧) ? ⟦2-char-id⟧.from : void 0)
       }
-      return null == ⟦2-char-id⟧.parent ? dJ : null
+      return null == ⟦2-char-id⟧.parent ? RB : null
     }
 
     function ⟦2-char-id⟧() {
       return 0
     }
     class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         super(⟦2-char-id⟧.state, ⟦2-char-id⟧.options), this.base = ⟦2-char-id⟧, this.pos = ⟦2-char-id⟧, this.context = ⟦2-char-id⟧
       }
       get node() {
         return this.context.node
       }
-      static create(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-        return new ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧)
+      static create(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+        return new ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧)
       }
       get textAfter() {
         return this.textAfterPos(this.pos)
```

</details>

<details>
<summary>Hunk 154 · Change · +4 / -4</summary>

```diff
@@ -3837,10 +3837,10 @@
         align: ⟦2-char-id⟧ = !0,
         units: ⟦2-char-id⟧ = 1
       } = ⟦2-char-id⟧;
-      return ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, FJ, ⟦2-char-id⟧)
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, dB, VB, ⟦2-char-id⟧)
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.textAfter,
         ⟦2-char-id⟧ = ⟦2-char-id⟧.match(/^\s*/)[0].length,
         ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧.slice(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧.length) == ⟦2-char-id⟧ || ⟦2-char-id⟧ == ⟦2-char-id⟧.pos + ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 155 · Change · +1 / -1</summary>

```diff
@@ -3883,7 +3883,7 @@
     const ⟦2-char-id⟧ = 200;
 
     function ⟦2-char-id⟧() {
-      return ⟦2-char-id⟧.o.transactionFilter.of((⟦2-char-id⟧ => {
+      return ⟦2-char-id⟧.i.transactionFilter.of((⟦2-char-id⟧ => {
         if (!⟦2-char-id⟧.docChanged || !⟦2-char-id⟧.isUserEvent("input.type") && !⟦2-char-id⟧.isUserEvent("input.complete")) return ⟦2-char-id⟧;
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.startState.languageDataAt("indentOnInput", ⟦2-char-id⟧.startState.selection.main.head);
         if (!⟦2-char-id⟧.length) return ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 156 · Change · +1 / -1</summary>

```diff
@@ -3901,7 +3901,7 @@
         for (let {
             head: ⟦2-char-id⟧
           }
-          of ⟦2-char-id⟧.selection.ws) {
+          of ⟦2-char-id⟧.selection.ek) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧);
           if (⟦2-char-id⟧.from == ⟦2-char-id⟧) continue;
           ⟦2-char-id⟧ = ⟦2-char-id⟧.from;
```

</details>

<details>
<summary>Hunk 157 · Change · +2 / -2</summary>

```diff
@@ -3921,8 +3921,8 @@
         }] : ⟦2-char-id⟧
       }))
     }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define(),
-      ⟦2-char-id⟧ = new ⟦2-char-id⟧.h;
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define(),
+      ⟦2-char-id⟧ = new ⟦2-char-id⟧.i;
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.firstChild,
```

</details>

<details>
<summary>Hunk 158 · Change · +3 / -3</summary>

```diff
@@ -3938,12 +3938,12 @@
       return ⟦2-char-id⟧ && ⟦2-char-id⟧.to == ⟦2-char-id⟧.to && ⟦2-char-id⟧.type.isError
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.facet(⟦2-char-id⟧)) {
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧);
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧);
         if (⟦2-char-id⟧) return ⟦2-char-id⟧
       }
-      return function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      return function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
         if (⟦2-char-id⟧.length < ⟦2-char-id⟧) return null;
         let ⟦2-char-id⟧ = null;
```

</details>

<details>
<summary>Hunk 159 · Change · +1 / -1</summary>

```diff
@@ -3958,7 +3958,7 @@
           }
         }
         return ⟦2-char-id⟧
-      }(⟦2-char-id⟧, cJ, ⟦2-char-id⟧)
+      }(⟦2-char-id⟧, TB, ⟦2-char-id⟧)
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 160 · Change · +2 / -2</summary>

```diff
@@ -3969,10 +3969,10 @@
         to: ⟦2-char-id⟧
       }
     }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define({
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.x.define({
         map: ⟦2-char-id⟧
       }),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define({
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.x.define({
         map: ⟦2-char-id⟧
       });
 
```

</details>

<details>
<summary>Hunk 161 · Change · +3 / -3</summary>

```diff
@@ -3981,13 +3981,13 @@
       for (let {
           head: ⟦2-char-id⟧
         }
-        of ⟦2-char-id⟧.state.selection.ws) ⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧.from <= ⟦2-char-id⟧ && ⟦2-char-id⟧.to >= ⟦2-char-id⟧)) || ⟦2-char-id⟧.push(⟦2-char-id⟧.lineBlockAt(⟦2-char-id⟧));
+        of ⟦2-char-id⟧.state.selection.ek) ⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧.from <= ⟦2-char-id⟧ && ⟦2-char-id⟧.to >= ⟦2-char-id⟧)) || ⟦2-char-id⟧.push(⟦2-char-id⟧.lineBlockAt(⟦2-char-id⟧));
       return ⟦2-char-id⟧
     }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.E.define({
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define({
       create: () => ⟦2-char-id⟧.c.none,
       update(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        ⟦2-char-id⟧.isUserEvent("delete") && ⟦2-char-id⟧.changes.iterChangedRanges(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧))), ⟦2-char-id⟧ = ⟦2-char-id⟧.map(⟦2-char-id⟧.changes);
+        ⟦2-char-id⟧.isUserEvent("delete") && ⟦2-char-id⟧.changes.iterChangedRanges(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧))), ⟦2-char-id⟧ = ⟦2-char-id⟧.map(⟦2-char-id⟧.changes);
         for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.effects)
           if (⟦2-char-id⟧.is(⟦2-char-id⟧) && !⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.value.from, ⟦2-char-id⟧.value.to)) {
             let {
```

</details>

<details>
<summary>Hunk 162 · Change · +3 / -3</summary>

```diff
@@ -4003,14 +4003,14 @@
             filterFrom: ⟦2-char-id⟧.value.from,
             filterTo: ⟦2-char-id⟧.value.to
           }));
-        return ⟦2-char-id⟧.selection && (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.selection.main.head)), JJ
+        return ⟦2-char-id⟧.selection && (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.selection.main.head)), BB
       },
-      provide: ⟦2-char-id⟧ => ⟦2-char-id⟧.f.je.from(⟦2-char-id⟧),
+      provide: ⟦2-char-id⟧ => ⟦2-char-id⟧.i.QB.from(⟦2-char-id⟧),
       toJSON(⟦2-char-id⟧, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = [];
         return ⟦2-char-id⟧.between(0, ⟦2-char-id⟧.doc.length, ((⟦2-char-id⟧, ⟦2-char-id⟧) => {
           ⟦2-char-id⟧.push(⟦2-char-id⟧, ⟦2-char-id⟧)
-        })), ZJ
+        })), dB
       },
       fromJSON(⟦2-char-id⟧) {
         if (!Array.isArray(⟦2-char-id⟧) || ⟦2-char-id⟧.length % 2) throw new RangeError("Invalid JSON for fold state");
```

</details>

<details>
<summary>Hunk 163 · Change · +1 / -1</summary>

```diff
@@ -4028,7 +4028,7 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ⟦2-char-id⟧,
         ⟦2-char-id⟧ = !1;
-      return ⟦2-char-id⟧.between(⟦2-char-id⟧, ZJ, ((⟦2-char-id⟧, ⟦2-char-id⟧) => {
+      return ⟦2-char-id⟧.between(⟦2-char-id⟧, dB, ((⟦2-char-id⟧, ⟦2-char-id⟧) => {
         ⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧ > ⟦2-char-id⟧ && (⟦2-char-id⟧ = !0)
       })), ⟦2-char-id⟧ ? ⟦2-char-id⟧.update({
         filterFrom: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 164 · Change · +10 / -10</summary>

```diff
@@ -4037,33 +4037,33 @@
       }) : ⟦2-char-id⟧
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
       let ⟦2-char-id⟧ = null;
-      return null === (⟦2-char-id⟧ = ⟦2-char-id⟧.field(⟦2-char-id⟧, !1)) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.between(⟦2-char-id⟧, ZJ, ((⟦2-char-id⟧, ⟦2-char-id⟧) => {
+      return null === (⟦2-char-id⟧ = ⟦2-char-id⟧.field(⟦2-char-id⟧, !1)) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.between(⟦2-char-id⟧, dB, ((⟦2-char-id⟧, ⟦2-char-id⟧) => {
         (!⟦2-char-id⟧ || ⟦2-char-id⟧.from > ⟦2-char-id⟧) && (⟦2-char-id⟧ = {
           from: ⟦2-char-id⟧,
           to: ⟦2-char-id⟧
         })
-      })), UJ
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      })), yB
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = !1;
-      return ⟦2-char-id⟧.between(⟦2-char-id⟧, cJ, ((⟦2-char-id⟧, ⟦2-char-id⟧) => {
+      return ⟦2-char-id⟧.between(⟦2-char-id⟧, TB, ((⟦2-char-id⟧, ⟦2-char-id⟧) => {
         ⟦2-char-id⟧ == ⟦2-char-id⟧ && ⟦2-char-id⟧ == ⟦2-char-id⟧ && (⟦2-char-id⟧ = !0)
-      })), FJ
+      })), VB
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧.field(⟦2-char-id⟧, !1) ? cJ : ⟦2-char-id⟧.concat(⟦2-char-id⟧.A.appendConfig.of(⟦2-char-id⟧()))
+      return ⟦2-char-id⟧.field(⟦2-char-id⟧, !1) ? TB : ⟦2-char-id⟧.concat(⟦2-char-id⟧.x.appendConfig.of(⟦2-char-id⟧()))
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
         ⟦2-char-id⟧ = ⟦2-char-id⟧.state.doc.lineAt(⟦2-char-id⟧.from).number,
         ⟦2-char-id⟧ = ⟦2-char-id⟧.state.doc.lineAt(⟦2-char-id⟧.to).number;
-      return ⟦2-char-id⟧.f.announce.of(`${JJ.state.phrase(ZJ?"Folded lines":"Unfolded lines")} ${FJ} ${JJ.state.phrase("to")} ${UJ}.`)
+      return ⟦2-char-id⟧.i.announce.of(`${BB.state.phrase(dB?"Folded lines":"Unfolded lines")} ${VB} ${BB.state.phrase("to")} ${yB}.`)
     }
     const ⟦2-char-id⟧ = [{
         key: "Ctrl-Shift-[",
```

</details>

<details>
<summary>Hunk 165 · Change · +1 / -1</summary>

```diff
@@ -4072,7 +4072,7 @@
           for (let ⟦2-char-id⟧ of ⟦2-char-id⟧(⟦2-char-id⟧)) {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.state, ⟦2-char-id⟧.from, ⟦2-char-id⟧.to);
             if (⟦2-char-id⟧) return ⟦2-char-id⟧.dispatch({
-              effects: ⟦2-char-id⟧(⟦2-char-id⟧.state, [⟦2-char-id⟧.of(⟦2-char-id⟧), qc(⟦2-char-id⟧, ⟦2-char-id⟧)])
+              effects: ⟦2-char-id⟧(⟦2-char-id⟧.state, [⟦2-char-id⟧.of(⟦2-char-id⟧), YT(⟦2-char-id⟧, ⟦2-char-id⟧)])
             }), !0
           }
           return !1
```

</details>

<details>
<summary>Hunk 166 · Change · +1 / -1</summary>

```diff
@@ -4085,7 +4085,7 @@
           let ⟦2-char-id⟧ = [];
           for (let ⟦2-char-id⟧ of ⟦2-char-id⟧(⟦2-char-id⟧)) {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.state, ⟦2-char-id⟧.from, ⟦2-char-id⟧.to);
-            ⟦2-char-id⟧ && ⟦2-char-id⟧.push(⟦2-char-id⟧.of(⟦2-char-id⟧), qc(⟦2-char-id⟧, FJ, !1))
+            ⟦2-char-id⟧ && ⟦2-char-id⟧.push(⟦2-char-id⟧.of(⟦2-char-id⟧), YT(⟦2-char-id⟧, VB, !1))
           }
           return ⟦2-char-id⟧.length && ⟦2-char-id⟧.dispatch({
             effects: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 167 · Change · +3 / -3</summary>

```diff
@@ -4127,13 +4127,13 @@
         preparePlaceholder: null,
         placeholderText: "\u2026"
       },
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define({
-        combine: ⟦2-char-id⟧ => (0, ⟦2-char-id⟧.S)(⟦2-char-id⟧, ⟦2-char-id⟧)
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define({
+        combine: ⟦2-char-id⟧ => (0, ⟦2-char-id⟧.P)(⟦2-char-id⟧, ⟦2-char-id⟧)
       });
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = [⟦2-char-id⟧, ⟦2-char-id⟧];
-      return ⟦2-char-id⟧ && ⟦2-char-id⟧.push(⟦2-char-id⟧.of(⟦2-char-id⟧)), cJ
+      return ⟦2-char-id⟧ && ⟦2-char-id⟧.push(⟦2-char-id⟧.of(⟦2-char-id⟧)), TB
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 168 · Change · +4 / -4</summary>

```diff
@@ -4146,18 +4146,18 @@
           effects: ⟦2-char-id⟧.of(⟦2-char-id⟧)
         }), ⟦2-char-id⟧.preventDefault()
       };
-      if (⟦2-char-id⟧.placeholderDOM) return ⟦2-char-id⟧.placeholderDOM(⟦2-char-id⟧, UJ, ⟦2-char-id⟧);
+      if (⟦2-char-id⟧.placeholderDOM) return ⟦2-char-id⟧.placeholderDOM(⟦2-char-id⟧, yB, ⟦2-char-id⟧);
       let ⟦2-char-id⟧ = document.createElement("span");
-      return ⟦2-char-id⟧.textContent = ⟦2-char-id⟧.placeholderText, ⟦2-char-id⟧.setAttribute("aria-label", ⟦2-char-id⟧.phrase("folded code")), ⟦2-char-id⟧.title = ⟦2-char-id⟧.phrase("unfold"), ⟦2-char-id⟧.className = "cm-foldPlaceholder", ⟦2-char-id⟧.onclick = ⟦2-char-id⟧, eJ
+      return ⟦2-char-id⟧.textContent = ⟦2-char-id⟧.placeholderText, ⟦2-char-id⟧.setAttribute("aria-label", ⟦2-char-id⟧.phrase("folded code")), ⟦2-char-id⟧.title = ⟦2-char-id⟧.phrase("unfold"), ⟦2-char-id⟧.className = "cm-foldPlaceholder", ⟦2-char-id⟧.onclick = ⟦2-char-id⟧, pB
     }
     const ⟦2-char-id⟧ = ⟦2-char-id⟧.c.replace({
-      widget: new class extends ⟦2-char-id⟧.l {
+      widget: new class extends ⟦2-char-id⟧.p {
         toDOM(⟦2-char-id⟧) {
           return ⟦2-char-id⟧(⟦2-char-id⟧, null)
         }
       }
     });
-    class ⟦2-char-id⟧ extends ⟦2-char-id⟧.l {
+    class ⟦2-char-id⟧ extends ⟦2-char-id⟧.p {
       constructor(⟦2-char-id⟧) {
         super(), this.value = ⟦2-char-id⟧
       }
```

</details>

<details>
<summary>Hunk 169 · Change · +1 / -1</summary>

```diff
@@ -4175,7 +4175,7 @@
       domEventHandlers: {},
       foldingChanged: () => !1
     };
-    class ⟦2-char-id⟧ extends ⟦2-char-id⟧.j {
+    class ⟦2-char-id⟧ extends ⟦2-char-id⟧.l {
       constructor(⟦2-char-id⟧, ⟦2-char-id⟧) {
         super(), this.config = ⟦2-char-id⟧, this.open = ⟦2-char-id⟧
       }
```

</details>

<details>
<summary>Hunk 170 · Change · +3 / -3</summary>

```diff
@@ -4185,18 +4185,18 @@
       toDOM(⟦2-char-id⟧) {
         if (this.config.markerDOM) return this.config.markerDOM(this.open);
         let ⟦2-char-id⟧ = document.createElement("span");
-        return ⟦2-char-id⟧.textContent = this.open ? this.config.openText : this.config.closedText, ⟦2-char-id⟧.title = ⟦2-char-id⟧.state.phrase(this.open ? "Fold line" : "Unfold line"), cJ
+        return ⟦2-char-id⟧.textContent = this.open ? this.config.openText : this.config.closedText, ⟦2-char-id⟧.title = ⟦2-char-id⟧.state.phrase(this.open ? "Fold line" : "Unfold line"), TB
       }
     }
 
     function ⟦2-char-id⟧() {
       let ⟦2-char-id⟧ = {
-          ...fc,
+          ...HT,
           ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
         },
         ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, !0),
         ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, !1),
-        ⟦2-char-id⟧ = ⟦2-char-id⟧.k.fromClass(class {
+        ⟦2-char-id⟧ = ⟦2-char-id⟧.n.fromClass(class {
           constructor(⟦2-char-id⟧) {
             this.from = ⟦2-char-id⟧.viewport.from, this.markers = this.buildMarkers(⟦2-char-id⟧)
           }
```

</details>

<details>
<summary>Hunk 171 · Change · +2 / -2</summary>

```diff
@@ -4204,9 +4204,9 @@
             (⟦2-char-id⟧.docChanged || ⟦2-char-id⟧.viewportChanged || ⟦2-char-id⟧.startState.facet(⟦2-char-id⟧) != ⟦2-char-id⟧.state.facet(⟦2-char-id⟧) || ⟦2-char-id⟧.startState.field(⟦2-char-id⟧, !1) != ⟦2-char-id⟧.state.field(⟦2-char-id⟧, !1) || ⟦2-char-id⟧(⟦2-char-id⟧.startState) != ⟦2-char-id⟧(⟦2-char-id⟧.state) || ⟦2-char-id⟧.foldingChanged(⟦2-char-id⟧)) && (this.markers = this.buildMarkers(⟦2-char-id⟧.view))
           }
           buildMarkers(⟦2-char-id⟧) {
-            let ⟦2-char-id⟧ = new ⟦2-char-id⟧.u;
+            let ⟦2-char-id⟧ = new ⟦2-char-id⟧.t;
             for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.viewportLineBlocks) {
-              let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.state, ⟦2-char-id⟧.from, ⟦2-char-id⟧.to) ? ZJ : ⟦2-char-id⟧(⟦2-char-id⟧.state, ⟦2-char-id⟧.from, ⟦2-char-id⟧.to) ? cJ : null;
+              let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.state, ⟦2-char-id⟧.from, ⟦2-char-id⟧.to) ? dB : ⟦2-char-id⟧(⟦2-char-id⟧.state, ⟦2-char-id⟧.from, ⟦2-char-id⟧.to) ? TB : null;
               ⟦2-char-id⟧ && ⟦2-char-id⟧.add(⟦2-char-id⟧.from, ⟦2-char-id⟧.from, ⟦2-char-id⟧)
             }
             return ⟦2-char-id⟧.finish()
```

</details>

<details>
<summary>Hunk 172 · Change · +5 / -5</summary>

```diff
@@ -4215,17 +4215,17 @@
         {
           domEventHandlers: ⟦2-char-id⟧
         } = ⟦2-char-id⟧;
-      return [⟦2-char-id⟧, (0, ⟦2-char-id⟧.z)({
+      return [⟦2-char-id⟧, (0, ⟦2-char-id⟧.H)({
         class: "cm-foldGutter",
         markers(⟦2-char-id⟧) {
           var ⟦2-char-id⟧;
-          return (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.plugin(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.markers) || ⟦2-char-id⟧.v.empty
+          return (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.plugin(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.markers) || ⟦2-char-id⟧.u.empty
         },
         initialSpacer: () => new ⟦2-char-id⟧(⟦2-char-id⟧, !1),
         domEventHandlers: {
-          ...UJ,
-          click: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-            if (⟦2-char-id⟧.click && ⟦2-char-id⟧.click(⟦2-char-id⟧, cJ, ⟦2-char-id⟧)) return !0;
+          ...yB,
+          click: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+            if (⟦2-char-id⟧.click && ⟦2-char-id⟧.click(⟦2-char-id⟧, TB, ⟦2-char-id⟧)) return !0;
             let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.state, ⟦2-char-id⟧.from, ⟦2-char-id⟧.to);
             if (⟦2-char-id⟧) return ⟦2-char-id⟧.dispatch({
               effects: ⟦2-char-id⟧.of(⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 173 · Change · +3 / -3</summary>

```diff
@@ -4236,9 +4236,9 @@
             }), !0)
           }
         }
-      }), Dc()]
-    }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.f.baseTheme({
+      }), LT()]
+    }
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.i.baseTheme({
       ".cm-foldPlaceholder": {
         backgroundColor: "#eee",
         border: "1px solid #ddd",
```

</details>

<details>
<summary>Hunk 174 · Change · +10 / -10</summary>

```diff
@@ -4258,42 +4258,42 @@
         let ⟦2-char-id⟧;
 
         function ⟦2-char-id⟧(⟦2-char-id⟧) {
-          let ⟦2-char-id⟧ = ⟦2-char-id⟧.c.newName();
-          return (⟦2-char-id⟧ || (⟦2-char-id⟧ = Object.create(null)))["." + ⟦2-char-id⟧] = ⟦2-char-id⟧, cJ
+          let ⟦2-char-id⟧ = ⟦2-char-id⟧.e.newName();
+          return (⟦2-char-id⟧ || (⟦2-char-id⟧ = Object.create(null)))["." + ⟦2-char-id⟧] = ⟦2-char-id⟧, TB
         }
         this.specs = ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = "string" == typeof ⟦2-char-id⟧.all ? ⟦2-char-id⟧.all : ⟦2-char-id⟧.all ? ⟦2-char-id⟧(⟦2-char-id⟧.all) : void 0,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.scope;
-        this.scope = ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ ? ⟦2-char-id⟧ => ⟦2-char-id⟧.prop(⟦2-char-id⟧) == ⟦2-char-id⟧.data : ⟦2-char-id⟧ ? ⟦2-char-id⟧ => ⟦2-char-id⟧ == eJ : void 0, this.style = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧.map((⟦2-char-id⟧ => ({
+        this.scope = ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ ? ⟦2-char-id⟧ => ⟦2-char-id⟧.prop(⟦2-char-id⟧) == ⟦2-char-id⟧.data : ⟦2-char-id⟧ ? ⟦2-char-id⟧ => ⟦2-char-id⟧ == pB : void 0, this.style = (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧.map((⟦2-char-id⟧ => ({
           tag: ⟦2-char-id⟧.tag,
-          class: ⟦2-char-id⟧.class || ⟦2-char-id⟧(Object.assign({}, JJ, {
+          class: ⟦2-char-id⟧.class || ⟦2-char-id⟧(Object.assign({}, BB, {
             tag: null
           }))
         }))), {
           all: ⟦2-char-id⟧
-        }).style, this.module = ⟦2-char-id⟧ ? new ⟦2-char-id⟧.c(⟦2-char-id⟧) : null, this.themeType = ⟦2-char-id⟧.themeType
+        }).style, this.module = ⟦2-char-id⟧ ? new ⟦2-char-id⟧.e(⟦2-char-id⟧) : null, this.themeType = ⟦2-char-id⟧.themeType
       }
       static define(⟦2-char-id⟧, ⟦2-char-id⟧) {
         return new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ || {})
       }
     }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define({
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define({
         combine: ⟦2-char-id⟧ => ⟦2-char-id⟧.length ? [⟦2-char-id⟧[0]] : null
       });
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.facet(⟦2-char-id⟧);
-      return ⟦2-char-id⟧.length ? cJ : ⟦2-char-id⟧.facet(⟦2-char-id⟧)
+      return ⟦2-char-id⟧.length ? TB : ⟦2-char-id⟧.facet(⟦2-char-id⟧)
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧, ⟦2-char-id⟧ = [⟦2-char-id⟧];
-      return ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ && (⟦2-char-id⟧.module && ⟦2-char-id⟧.push(⟦2-char-id⟧.f.styleModule.of(⟦2-char-id⟧.module)), ⟦2-char-id⟧ = ⟦2-char-id⟧.themeType), (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.fallback) ? ⟦2-char-id⟧.push(⟦2-char-id⟧.of(⟦2-char-id⟧)) : ⟦2-char-id⟧ ? ⟦2-char-id⟧.push(⟦2-char-id⟧.computeN([⟦2-char-id⟧.f.darkTheme], (⟦2-char-id⟧ => ⟦2-char-id⟧.facet(⟦2-char-id⟧.f.darkTheme) == ("dark" == ⟦2-char-id⟧) ? [⟦2-char-id⟧] : []))) : ⟦2-char-id⟧.push(⟦2-char-id⟧.of(⟦2-char-id⟧)), FJ
+      return ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ && (⟦2-char-id⟧.module && ⟦2-char-id⟧.push(⟦2-char-id⟧.i.styleModule.of(⟦2-char-id⟧.module)), ⟦2-char-id⟧ = ⟦2-char-id⟧.themeType), (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.fallback) ? ⟦2-char-id⟧.push(⟦2-char-id⟧.of(⟦2-char-id⟧)) : ⟦2-char-id⟧ ? ⟦2-char-id⟧.push(⟦2-char-id⟧.computeN([⟦2-char-id⟧.i.darkTheme], (⟦2-char-id⟧ => ⟦2-char-id⟧.facet(⟦2-char-id⟧.i.darkTheme) == ("dark" == ⟦2-char-id⟧) ? [⟦2-char-id⟧] : []))) : ⟦2-char-id⟧.push(⟦2-char-id⟧.of(⟦2-char-id⟧)), VB
     }
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧) {
-        this.markCache = Object.create(null), this.tree = ⟦2-char-id⟧(⟦2-char-id⟧.state), this.je = this.buildDeco(⟦2-char-id⟧, Vc(⟦2-char-id⟧.state)), this.decoratedTo = ⟦2-char-id⟧.viewport.to
+        this.markCache = Object.create(null), this.tree = ⟦2-char-id⟧(⟦2-char-id⟧.state), this.QB = this.buildDeco(⟦2-char-id⟧, fT(⟦2-char-id⟧.state)), this.decoratedTo = ⟦2-char-id⟧.viewport.to
       }
       update(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.state),
```

</details>

<details>
<summary>Hunk 175 · Change · +27 / -27</summary>

```diff
@@ -4303,86 +4303,86 @@
             viewport: ⟦2-char-id⟧
           } = ⟦2-char-id⟧.view,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.changes.mapPos(this.decoratedTo, 1);
-        ⟦2-char-id⟧.length < ⟦2-char-id⟧.to && !⟦2-char-id⟧ && ⟦2-char-id⟧.type == this.tree.type && ⟦2-char-id⟧ >= ⟦2-char-id⟧.to ? (this.je = this.je.map(⟦2-char-id⟧.changes), this.decoratedTo = ⟦2-char-id⟧) : (⟦2-char-id⟧ != this.tree || ⟦2-char-id⟧.viewportChanged || ⟦2-char-id⟧) && (this.tree = ⟦2-char-id⟧, this.je = this.buildDeco(⟦2-char-id⟧.view, ⟦2-char-id⟧), this.decoratedTo = ⟦2-char-id⟧.to)
+        ⟦2-char-id⟧.length < ⟦2-char-id⟧.to && !⟦2-char-id⟧ && ⟦2-char-id⟧.type == this.tree.type && ⟦2-char-id⟧ >= ⟦2-char-id⟧.to ? (this.QB = this.QB.map(⟦2-char-id⟧.changes), this.decoratedTo = ⟦2-char-id⟧) : (⟦2-char-id⟧ != this.tree || ⟦2-char-id⟧.viewportChanged || ⟦2-char-id⟧) && (this.tree = ⟦2-char-id⟧, this.QB = this.buildDeco(⟦2-char-id⟧.view, ⟦2-char-id⟧), this.decoratedTo = ⟦2-char-id⟧.to)
       }
       buildDeco(⟦2-char-id⟧, ⟦2-char-id⟧) {
         if (!⟦2-char-id⟧ || !this.tree.length) return ⟦2-char-id⟧.c.none;
-        let ⟦2-char-id⟧ = new ⟦2-char-id⟧.u;
+        let ⟦2-char-id⟧ = new ⟦2-char-id⟧.t;
         for (let {
             from: ⟦2-char-id⟧,
             to: ⟦2-char-id⟧
           }
-          of ⟦2-char-id⟧.o5)(0, ⟦2-char-id⟧.d)(this.tree, cJ, ((⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
-          ⟦2-char-id⟧.add(⟦2-char-id⟧, cJ, this.markCache[⟦2-char-id⟧] || (this.markCache[⟦2-char-id⟧] = ⟦2-char-id⟧.c.mark({
+          of ⟦2-char-id⟧.BBB)(0, ⟦2-char-id⟧.b)(this.tree, TB, ((⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
+          ⟦2-char-id⟧.add(⟦2-char-id⟧, TB, this.markCache[⟦2-char-id⟧] || (this.markCache[⟦2-char-id⟧] = ⟦2-char-id⟧.c.mark({
             class: ⟦2-char-id⟧
           })))
-        }), FJ, ⟦2-char-id⟧);
+        }), VB, ⟦2-char-id⟧);
         return ⟦2-char-id⟧.finish()
       }
     }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.t.high(⟦2-char-id⟧.k.fromClass(⟦2-char-id⟧, {
-        je: ⟦2-char-id⟧ => ⟦2-char-id⟧.je
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.r.high(⟦2-char-id⟧.n.fromClass(⟦2-char-id⟧, {
+        QB: ⟦2-char-id⟧ => ⟦2-char-id⟧.QB
       })),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.define([{
-        tag: ⟦2-char-id⟧.j.meta,
+        tag: ⟦2-char-id⟧.h.meta,
         color: "#404740"
       }, {
-        tag: ⟦2-char-id⟧.j.link,
+        tag: ⟦2-char-id⟧.h.link,
         textDecoration: "underline"
       }, {
-        tag: ⟦2-char-id⟧.j.heading,
+        tag: ⟦2-char-id⟧.h.heading,
         textDecoration: "underline",
         fontWeight: "bold"
       }, {
-        tag: ⟦2-char-id⟧.j.emphasis,
+        tag: ⟦2-char-id⟧.h.emphasis,
         fontStyle: "italic"
       }, {
-        tag: ⟦2-char-id⟧.j.strong,
+        tag: ⟦2-char-id⟧.h.strong,
         fontWeight: "bold"
       }, {
-        tag: ⟦2-char-id⟧.j.strikethrough,
+        tag: ⟦2-char-id⟧.h.strikethrough,
         textDecoration: "line-through"
       }, {
-        tag: ⟦2-char-id⟧.j.keyword,
+        tag: ⟦2-char-id⟧.h.keyword,
         color: "#708"
       }, {
-        tag: [⟦2-char-id⟧.j.atom, ⟦2-char-id⟧.j.bool, ⟦2-char-id⟧.j.url, ⟦2-char-id⟧.j.contentSeparator, ⟦2-char-id⟧.j.labelName],
+        tag: [⟦2-char-id⟧.h.atom, ⟦2-char-id⟧.h.bool, ⟦2-char-id⟧.h.url, ⟦2-char-id⟧.h.contentSeparator, ⟦2-char-id⟧.h.labelName],
         color: "#219"
       }, {
-        tag: [⟦2-char-id⟧.j.literal, ⟦2-char-id⟧.j.inserted],
+        tag: [⟦2-char-id⟧.h.literal, ⟦2-char-id⟧.h.inserted],
         color: "#164"
       }, {
-        tag: [⟦2-char-id⟧.j.string, ⟦2-char-id⟧.j.deleted],
+        tag: [⟦2-char-id⟧.h.string, ⟦2-char-id⟧.h.deleted],
         color: "#a11"
       }, {
-        tag: [⟦2-char-id⟧.j.regexp, ⟦2-char-id⟧.j.escape, ⟦2-char-id⟧.j.special(⟦2-char-id⟧.j.string)],
+        tag: [⟦2-char-id⟧.h.regexp, ⟦2-char-id⟧.h.escape, ⟦2-char-id⟧.h.special(⟦2-char-id⟧.h.string)],
         color: "#e40"
       }, {
-        tag: ⟦2-char-id⟧.j.definition(⟦2-char-id⟧.j.variableName),
+        tag: ⟦2-char-id⟧.h.definition(⟦2-char-id⟧.h.variableName),
         color: "#00f"
       }, {
-        tag: ⟦2-char-id⟧.j.local(⟦2-char-id⟧.j.variableName),
+        tag: ⟦2-char-id⟧.h.local(⟦2-char-id⟧.h.variableName),
         color: "#30a"
       }, {
-        tag: [⟦2-char-id⟧.j.typeName, ⟦2-char-id⟧.j.namespace],
+        tag: [⟦2-char-id⟧.h.typeName, ⟦2-char-id⟧.h.namespace],
         color: "#085"
       }, {
-        tag: ⟦2-char-id⟧.j.className,
+        tag: ⟦2-char-id⟧.h.className,
         color: "#167"
       }, {
-        tag: [⟦2-char-id⟧.j.special(⟦2-char-id⟧.j.variableName), ⟦2-char-id⟧.j.macroName],
+        tag: [⟦2-char-id⟧.h.special(⟦2-char-id⟧.h.variableName), ⟦2-char-id⟧.h.macroName],
         color: "#256"
       }, {
-        tag: ⟦2-char-id⟧.j.definition(⟦2-char-id⟧.j.propertyName),
+        tag: ⟦2-char-id⟧.h.definition(⟦2-char-id⟧.h.propertyName),
         color: "#00c"
       }, {
-        tag: ⟦2-char-id⟧.j.comment,
+        tag: ⟦2-char-id⟧.h.comment,
         color: "#940"
       }, {
-        tag: ⟦2-char-id⟧.j.invalid,
+        tag: ⟦2-char-id⟧.h.invalid,
         color: "#f00"
       }]),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.f.baseTheme({
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.i.baseTheme({
         "&.cm-focused .cm-matchingBracket": {
           backgroundColor: "#328c8252"
         },
```

</details>

<details>
<summary>Hunk 176 · Change · +2 / -2</summary>

```diff
@@ -4392,8 +4392,8 @@
       }),
       ⟦2-char-id⟧ = 1⟦2-char-id⟧,
       ⟦2-char-id⟧ = "()[]{}",
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define({
-        combine: ⟦2-char-id⟧ => (0, ⟦2-char-id⟧.S)(⟦2-char-id⟧, {
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define({
+        combine: ⟦2-char-id⟧ => (0, ⟦2-char-id⟧.P)(⟦2-char-id⟧, {
           afterCursor: !0,
           brackets: ⟦2-char-id⟧,
           maxScanDistance: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 177 · Change · +11 / -11</summary>

```diff
@@ -4409,39 +4409,39 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = [],
-        ⟦2-char-id⟧ = ⟦2-char-id⟧.matched ? gc : ⟦2-char-id⟧;
-      return ⟦2-char-id⟧.push(⟦2-char-id⟧.range(⟦2-char-id⟧.start.from, ⟦2-char-id⟧.start.to)), ⟦2-char-id⟧.end && ⟦2-char-id⟧.push(⟦2-char-id⟧.range(⟦2-char-id⟧.end.from, ⟦2-char-id⟧.end.to)), cJ
+        ⟦2-char-id⟧ = ⟦2-char-id⟧.matched ? IT : ⟦2-char-id⟧;
+      return ⟦2-char-id⟧.push(⟦2-char-id⟧.range(⟦2-char-id⟧.start.from, ⟦2-char-id⟧.start.to)), ⟦2-char-id⟧.end && ⟦2-char-id⟧.push(⟦2-char-id⟧.range(⟦2-char-id⟧.end.from, ⟦2-char-id⟧.end.to)), TB
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = [],
         ⟦2-char-id⟧ = ⟦2-char-id⟧.facet(⟦2-char-id⟧);
-      for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.selection.ws) {
+      for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.selection.ek) {
         if (!⟦2-char-id⟧.empty) continue;
         let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.head, -1, ⟦2-char-id⟧) || ⟦2-char-id⟧.head > 0 && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.head - 1, 1, ⟦2-char-id⟧) || ⟦2-char-id⟧.afterCursor && (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.head, 1, ⟦2-char-id⟧) || ⟦2-char-id⟧.head < ⟦2-char-id⟧.doc.length && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.head + 1, -1, ⟦2-char-id⟧));
         ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.concat(⟦2-char-id⟧.renderMatch(⟦2-char-id⟧, ⟦2-char-id⟧)))
       }
       return ⟦2-char-id⟧.c.set(⟦2-char-id⟧, !0)
     }
-    const ⟦2-char-id⟧ = [⟦2-char-id⟧.k.fromClass(class {
+    const ⟦2-char-id⟧ = [⟦2-char-id⟧.n.fromClass(class {
       constructor(⟦2-char-id⟧) {
-        this.paused = !1, this.je = ⟦2-char-id⟧(⟦2-char-id⟧.state)
+        this.paused = !1, this.QB = ⟦2-char-id⟧(⟦2-char-id⟧.state)
       }
       update(⟦2-char-id⟧) {
-        (⟦2-char-id⟧.docChanged || ⟦2-char-id⟧.selectionSet || this.paused) && (⟦2-char-id⟧.view.composing ? (this.je = this.je.map(⟦2-char-id⟧.changes), this.paused = !0) : (this.je = ⟦2-char-id⟧(⟦2-char-id⟧.state), this.paused = !1))
+        (⟦2-char-id⟧.docChanged || ⟦2-char-id⟧.selectionSet || this.paused) && (⟦2-char-id⟧.view.composing ? (this.QB = this.QB.map(⟦2-char-id⟧.changes), this.paused = !0) : (this.QB = ⟦2-char-id⟧(⟦2-char-id⟧.state), this.paused = !1))
       }
     }, {
-      je: ⟦2-char-id⟧ => ⟦2-char-id⟧.je
+      QB: ⟦2-char-id⟧ => ⟦2-char-id⟧.QB
     }), ⟦2-char-id⟧];
 
     function ⟦2-char-id⟧() {
       let ⟦2-char-id⟧ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
       return [⟦2-char-id⟧.of(⟦2-char-id⟧), ⟦2-char-id⟧]
     }
-    const ⟦2-char-id⟧ = new ⟦2-char-id⟧.h;
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-      let ⟦2-char-id⟧ = ⟦2-char-id⟧.prop(⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧.h.openedBy : ⟦2-char-id⟧.h.closedBy);
+    const ⟦2-char-id⟧ = new ⟦2-char-id⟧.i;
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+      let ⟦2-char-id⟧ = ⟦2-char-id⟧.prop(⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧.i.openedBy : ⟦2-char-id⟧.i.closedBy);
       if (⟦2-char-id⟧) return ⟦2-char-id⟧;
       if (1 == ⟦2-char-id⟧.name.length) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.indexOf(⟦2-char-id⟧.name);
```

</details>

<details>
<summary>Hunk 178 · Change · +7 / -7</summary>

```diff
@@ -4455,21 +4455,21 @@
       return ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧.node) : ⟦2-char-id⟧
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
         ⟦2-char-id⟧ = ⟦2-char-id⟧.maxScanDistance || ⟦2-char-id⟧,
         ⟦2-char-id⟧ = ⟦2-char-id⟧.brackets || ⟦2-char-id⟧,
         ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.resolveInner(⟦2-char-id⟧, ⟦2-char-id⟧);
       for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧; ⟦2-char-id⟧ = ⟦2-char-id⟧.parent) {
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.type, ZJ, ⟦2-char-id⟧);
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.type, dB, ⟦2-char-id⟧);
         if (⟦2-char-id⟧ && ⟦2-char-id⟧.from < ⟦2-char-id⟧.to) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
-          if (⟦2-char-id⟧ && (⟦2-char-id⟧ > 0 ? ⟦2-char-id⟧ >= ⟦2-char-id⟧.from && ⟦2-char-id⟧ < ⟦2-char-id⟧.to : ⟦2-char-id⟧ > ⟦2-char-id⟧.from && ⟦2-char-id⟧ <= ⟦2-char-id⟧.to)) return ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, qJ, UJ, FJ, ⟦2-char-id⟧)
-        }
-      }
-      return function(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, eJ, ⟦2-char-id⟧) {
-        if (⟦2-char-id⟧ < 0 ? !cJ : ⟦2-char-id⟧ == ⟦2-char-id⟧.doc.length) return null;
+          if (⟦2-char-id⟧ && (⟦2-char-id⟧ > 0 ? ⟦2-char-id⟧ >= ⟦2-char-id⟧.from && ⟦2-char-id⟧ < ⟦2-char-id⟧.to : ⟦2-char-id⟧ > ⟦2-char-id⟧.from && ⟦2-char-id⟧ <= ⟦2-char-id⟧.to)) return ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, YB, yB, VB, ⟦2-char-id⟧)
+        }
+      }
+      return function(⟦2-char-id⟧, TB, dB, VB, yB, pB, ⟦2-char-id⟧) {
+        if (⟦2-char-id⟧ < 0 ? !TB : ⟦2-char-id⟧ == ⟦2-char-id⟧.doc.length) return null;
         let ⟦2-char-id⟧ = ⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧ - 1, ⟦2-char-id⟧) : ⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧, ⟦2-char-id⟧ + 1),
           ⟦2-char-id⟧ = ⟦2-char-id⟧.indexOf(⟦2-char-id⟧);
         if (⟦2-char-id⟧ < 0 || ⟦2-char-id⟧ % 2 == 0 != ⟦2-char-id⟧ > 0) return null;
```

</details>

<details>
<summary>Hunk 179 · Change · +4 / -4</summary>

```diff
@@ -4505,10 +4505,10 @@
           start: ⟦2-char-id⟧,
           matched: !1
         } : null
-      }(⟦2-char-id⟧, cJ, ZJ, XJ, ⟦2-char-id⟧.type, UJ, ⟦2-char-id⟧)
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, eJ, ⟦2-char-id⟧) {
+      }(⟦2-char-id⟧, TB, dB, lB, ⟦2-char-id⟧.type, yB, ⟦2-char-id⟧)
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, yB, pB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.parent,
         ⟦2-char-id⟧ = {
           from: ⟦2-char-id⟧.from,
```

</details>

<details>
<summary>Hunk 180 · Change · +1 / -1</summary>

```diff
@@ -4530,7 +4530,7 @@
                 matched: !0
               }
             }
-            if (⟦2-char-id⟧(⟦2-char-id⟧.type, ZJ, ⟦2-char-id⟧)) ⟦2-char-id⟧++;
+            if (⟦2-char-id⟧(⟦2-char-id⟧.type, dB, ⟦2-char-id⟧)) ⟦2-char-id⟧++;
             else if (⟦2-char-id⟧(⟦2-char-id⟧.type, -⟦2-char-id⟧, ⟦2-char-id⟧)) {
               if (0 == ⟦2-char-id⟧) {
                 let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 181 · Change · +2 / -2</summary>

```diff
@@ -4581,8 +4581,8 @@
       for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.split(" ")) {
         let ⟦2-char-id⟧ = [];
         for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.split(".")) {
-          let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧] || ⟦2-char-id⟧.j[⟦2-char-id⟧];
-          ⟦2-char-id⟧ ? "function" == typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧.length ? ⟦2-char-id⟧ = ⟦2-char-id⟧.map(⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, `Modifier ${ZJ} used at start of tag`) : ⟦2-char-id⟧.length ? ⟦2-char-id⟧(⟦2-char-id⟧, `Tag ${ZJ} used as modifier`) : ⟦2-char-id⟧ = Array.isArray(⟦2-char-id⟧) ? FJ : [⟦2-char-id⟧] : ⟦2-char-id⟧(⟦2-char-id⟧, `Unknown highlighting tag ${ZJ}`)
+          let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧] || ⟦2-char-id⟧.h[⟦2-char-id⟧];
+          ⟦2-char-id⟧ ? "function" == typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧.length ? ⟦2-char-id⟧ = ⟦2-char-id⟧.map(⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, `Modifier ${dB} used at start of tag`) : ⟦2-char-id⟧.length ? ⟦2-char-id⟧(⟦2-char-id⟧, `Tag ${dB} used as modifier`) : ⟦2-char-id⟧ = Array.isArray(⟦2-char-id⟧) ? VB : [⟦2-char-id⟧] : ⟦2-char-id⟧(⟦2-char-id⟧, `Unknown highlighting tag ${dB}`)
         }
         for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.push(⟦2-char-id⟧)
       }
```

</details>

<details>
<summary>Hunk 182 · Change · +13 / -13</summary>

```diff
@@ -4594,43 +4594,43 @@
       let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧.k.define({
         id: ⟦2-char-id⟧.length,
         name: ⟦2-char-id⟧,
-        props: [(0, ⟦2-char-id⟧.e)({
+        props: [(0, ⟦2-char-id⟧.f)({
           [⟦2-char-id⟧]: ⟦2-char-id⟧
         })]
       });
       return ⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧.id
     }
-    ⟦2-char-id⟧.e.RTL, ⟦2-char-id⟧.e.LTR
+    ⟦2-char-id⟧.f.RTL, ⟦2-char-id⟧.f.LTR
   },
-  40097: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  40092: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧,
-      e: () => ⟦2-char-id⟧
+      d: () => ⟦2-char-id⟧,
+      h: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(40065),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(40060),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(40070);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(40040),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(40036),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(40051);
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         this.from = ⟦2-char-id⟧, this.to = ⟦2-char-id⟧, this.diagnostic = ⟦2-char-id⟧
       }
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         this.diagnostics = ⟦2-char-id⟧, this.panel = ⟦2-char-id⟧, this.selected = ⟦2-char-id⟧
       }
-      static init(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      static init(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.facet(⟦2-char-id⟧).markerFilter;
         ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧));
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.slice().sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.from - ⟦2-char-id⟧.from || ⟦2-char-id⟧.to - ⟦2-char-id⟧.to)),
-          ⟦2-char-id⟧ = new ⟦2-char-id⟧.u,
+          ⟦2-char-id⟧ = new ⟦2-char-id⟧.t,
           ⟦2-char-id⟧ = [],
           ⟦2-char-id⟧ = 0,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.doc.iter(),
           ⟦2-char-id⟧ = 0,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.doc.length;
         for (let ⟦2-char-id⟧ = 0;;) {
-          let ⟦2-char-id⟧, cJ, ⟦2-char-id⟧ = ⟦2-char-id⟧ == ⟦2-char-id⟧.length ? null : ⟦2-char-id⟧[⟦2-char-id⟧];
+          let ⟦2-char-id⟧, TB, ⟦2-char-id⟧ = ⟦2-char-id⟧ == ⟦2-char-id⟧.length ? null : ⟦2-char-id⟧[⟦2-char-id⟧];
           if (!⟦2-char-id⟧ && !⟦2-char-id⟧.length) break;
           if (⟦2-char-id⟧.length) ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.reduce(((⟦2-char-id⟧, ⟦2-char-id⟧) => Math.min(⟦2-char-id⟧, ⟦2-char-id⟧.to)), ⟦2-char-id⟧ && ⟦2-char-id⟧.from > ⟦2-char-id⟧ ? ⟦2-char-id⟧.from : 1⟦2-char-id⟧);
           else {
```

</details>

<details>
<summary>Hunk 183 · Change · +2 / -2</summary>

```diff
@@ -4660,13 +4660,13 @@
             }
           }
           let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
-          if (⟦2-char-id⟧) ⟦2-char-id⟧.add(⟦2-char-id⟧, JJ, ⟦2-char-id⟧.c.widget({
+          if (⟦2-char-id⟧) ⟦2-char-id⟧.add(⟦2-char-id⟧, BB, ⟦2-char-id⟧.c.widget({
             widget: new ⟦2-char-id⟧(⟦2-char-id⟧),
             diagnostics: ⟦2-char-id⟧.slice()
           }));
           else {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧.reduce(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.markClass ? ⟦2-char-id⟧ + " " + ⟦2-char-id⟧.markClass : ⟦2-char-id⟧), "");
-            ⟦2-char-id⟧.add(⟦2-char-id⟧, cJ, ⟦2-char-id⟧.c.mark({
+            ⟦2-char-id⟧.add(⟦2-char-id⟧, TB, ⟦2-char-id⟧.c.mark({
               class: "cm-lintRange cm-lintRange-" + ⟦2-char-id⟧ + ⟦2-char-id⟧,
               diagnostics: ⟦2-char-id⟧.slice(),
               inclusiveEnd: ⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧.to > ⟦2-char-id⟧))
```

</details>

<details>
<summary>Hunk 184 · Change · +1 / -1</summary>

```diff
@@ -4676,7 +4676,7 @@
           for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧].to <= ⟦2-char-id⟧ && ⟦2-char-id⟧.splice(⟦2-char-id⟧--, 1)
         }
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.finish();
-        return new ⟦2-char-id⟧(⟦2-char-id⟧, cJ, qJ(⟦2-char-id⟧))
+        return new ⟦2-char-id⟧(⟦2-char-id⟧, TB, YB(⟦2-char-id⟧))
       }
     }
 
```

</details>

<details>
<summary>Hunk 185 · Change · +11 / -11</summary>

```diff
@@ -4684,34 +4684,34 @@
       let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
         ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
         ⟦2-char-id⟧ = null;
-      return ⟦2-char-id⟧.between(⟦2-char-id⟧, 1⟦2-char-id⟧, ((⟦2-char-id⟧, ZJ, ⟦2-char-id⟧) => {
+      return ⟦2-char-id⟧.between(⟦2-char-id⟧, 1⟦2-char-id⟧, ((⟦2-char-id⟧, dB, ⟦2-char-id⟧) => {
         let {
           spec: ⟦2-char-id⟧
         } = ⟦2-char-id⟧;
         if (!(⟦2-char-id⟧ && ⟦2-char-id⟧.diagnostics.indexOf(⟦2-char-id⟧) < 0))
           if (⟦2-char-id⟧) {
             if (⟦2-char-id⟧.diagnostics.indexOf(⟦2-char-id⟧.diagnostic) < 0) return !1;
-            ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.from, ZJ, ⟦2-char-id⟧.diagnostic)
-          } else ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧ || ⟦2-char-id⟧.diagnostics[0])
-      })), FJ
+            ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.from, dB, ⟦2-char-id⟧.diagnostic)
+          } else ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, dB, ⟦2-char-id⟧ || ⟦2-char-id⟧.diagnostics[0])
+      })), VB
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.pos,
         ⟦2-char-id⟧ = ⟦2-char-id⟧.end || ⟦2-char-id⟧,
-        ⟦2-char-id⟧ = ⟦2-char-id⟧.state.facet(⟦2-char-id⟧).hideOn(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧);
+        ⟦2-char-id⟧ = ⟦2-char-id⟧.state.facet(⟦2-char-id⟧).hideOn(⟦2-char-id⟧, dB, ⟦2-char-id⟧);
       if (null != ⟦2-char-id⟧) return ⟦2-char-id⟧;
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.startState.doc.lineAt(⟦2-char-id⟧.pos);
       return !(!⟦2-char-id⟧.effects.some((⟦2-char-id⟧ => ⟦2-char-id⟧.is(⟦2-char-id⟧))) && !⟦2-char-id⟧.changes.touchesRange(⟦2-char-id⟧.from, Math.max(⟦2-char-id⟧.to, ⟦2-char-id⟧)))
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧.field(⟦2-char-id⟧, !1) ? cJ : ⟦2-char-id⟧.concat(⟦2-char-id⟧.A.appendConfig.of(⟦2-char-id⟧))
-    }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.E.define({
+      return ⟦2-char-id⟧.field(⟦2-char-id⟧, !1) ? TB : ⟦2-char-id⟧.concat(⟦2-char-id⟧.x.appendConfig.of(⟦2-char-id⟧))
+    }
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.x.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.x.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.x.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define({
         create: () => new ⟦2-char-id⟧(⟦2-char-id⟧.c.none, null, null),
         update(⟦2-char-id⟧, ⟦2-char-id⟧) {
           if (⟦2-char-id⟧.docChanged && ⟦2-char-id⟧.diagnostics.size) {
```

</details>

<details>
<summary>Hunk 186 · Change · +5 / -5</summary>

```diff
@@ -4721,28 +4721,28 @@
             if (⟦2-char-id⟧.selected) {
               let ⟦2-char-id⟧ = ⟦2-char-id⟧.changes.mapPos(⟦2-char-id⟧.selected.from, 1);
               ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.selected.diagnostic, ⟦2-char-id⟧) || ⟦2-char-id⟧(⟦2-char-id⟧, null, ⟦2-char-id⟧)
-            }!⟦2-char-id⟧.size && ⟦2-char-id⟧ && ⟦2-char-id⟧.state.facet(⟦2-char-id⟧).autoPanel && (⟦2-char-id⟧ = null), ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, UJ, ⟦2-char-id⟧)
+            }!⟦2-char-id⟧.size && ⟦2-char-id⟧ && ⟦2-char-id⟧.state.facet(⟦2-char-id⟧).autoPanel && (⟦2-char-id⟧ = null), ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, yB, ⟦2-char-id⟧)
           }
           for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.effects)
             if (⟦2-char-id⟧.is(⟦2-char-id⟧)) {
               let ⟦2-char-id⟧ = ⟦2-char-id⟧.state.facet(⟦2-char-id⟧).autoPanel ? ⟦2-char-id⟧.value.length ? ⟦2-char-id⟧.open : null : ⟦2-char-id⟧.panel;
-              ⟦2-char-id⟧ = ⟦2-char-id⟧.init(⟦2-char-id⟧.value, FJ, ⟦2-char-id⟧.state)
+              ⟦2-char-id⟧ = ⟦2-char-id⟧.init(⟦2-char-id⟧.value, VB, ⟦2-char-id⟧.state)
             } else ⟦2-char-id⟧.is(⟦2-char-id⟧) ? ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.diagnostics, ⟦2-char-id⟧.value ? ⟦2-char-id⟧.open : null, ⟦2-char-id⟧.selected) : ⟦2-char-id⟧.is(⟦2-char-id⟧) && (⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.diagnostics, ⟦2-char-id⟧.panel, ⟦2-char-id⟧.value));
           return ⟦2-char-id⟧
         },
-        provide: ⟦2-char-id⟧ => [⟦2-char-id⟧._.from(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.panel)), ⟦2-char-id⟧.f.je.from(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.diagnostics))]
+        provide: ⟦2-char-id⟧ => [⟦2-char-id⟧.kb.from(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.panel)), ⟦2-char-id⟧.i.QB.from(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.diagnostics))]
       });
     const ⟦2-char-id⟧ = ⟦2-char-id⟧.c.mark({
       class: "cm-lintRange cm-lintRange-active"
     });
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧, {
           diagnostics: ⟦2-char-id⟧
         } = ⟦2-char-id⟧.state.field(⟦2-char-id⟧),
         ⟦2-char-id⟧ = -1,
         ⟦2-char-id⟧ = -1;
-      ⟦2-char-id⟧.between(⟦2-char-id⟧ - (⟦2-char-id⟧ < 0 ? 1 : 0), ⟦2-char-id⟧ + (⟦2-char-id⟧ > 0 ? 1 : 0), ((⟦2-char-id⟧, UJ, ⟦2-char-id⟧) => {
+      ⟦2-char-id⟧.between(⟦2-char-id⟧ - (⟦2-char-id⟧ < 0 ? 1 : 0), ⟦2-char-id⟧ + (⟦2-char-id⟧ > 0 ? 1 : 0), ((⟦2-char-id⟧, yB, ⟦2-char-id⟧) => {
         let {
           spec: ⟦2-char-id⟧
         } = ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 187 · Change · +2 / -2</summary>

```diff
@@ -4760,9 +4760,9 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return (0, ⟦2-char-id⟧.d)("ul", {
+      return (0, ⟦2-char-id⟧.e)("ul", {
         class: "cm-tooltip-lint"
-      }, ⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, cJ, !1))))
+      }, ⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, TB, !1))))
     }
     const ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.state.field(⟦2-char-id⟧, !1);
```

</details>

<details>
<summary>Hunk 188 · Change · +1 / -1</summary>

```diff
@@ -4777,7 +4777,7 @@
           ⟦2-char-id⟧ && ⟦2-char-id⟧.panel || ⟦2-char-id⟧.dispatch({
             effects: ⟦2-char-id⟧(⟦2-char-id⟧.state, [⟦2-char-id⟧.of(!0)])
           });
-          let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.u)(⟦2-char-id⟧, ⟦2-char-id⟧.open);
+          let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.z)(⟦2-char-id⟧, ⟦2-char-id⟧.open);
           return ⟦2-char-id⟧ && ⟦2-char-id⟧.dom.querySelector(".cm-panel-lint ul").focus(), !0
         },
         preventDefault: !0
```

</details>

<details>
<summary>Hunk 189 · Change · +1 / -1</summary>

```diff
@@ -4797,7 +4797,7 @@
           }), !0)
         }
       }],
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.k.fromClass(class {
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.n.fromClass(class {
         constructor(⟦2-char-id⟧) {
           this.view = ⟦2-char-id⟧, this.timeout = -1, this.set = !0;
           let {
```

</details>

<details>
<summary>Hunk 190 · Change · +1 / -1</summary>

```diff
@@ -4816,7 +4816,7 @@
             } = this.view, {
               sources: ⟦2-char-id⟧
             } = ⟦2-char-id⟧.facet(⟦2-char-id⟧);
-            ⟦2-char-id⟧.length && function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+            ⟦2-char-id⟧.length && function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
               let ⟦2-char-id⟧ = [],
                 ⟦2-char-id⟧ = -1;
               for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.then((⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 191 · Change · +1 / -1</summary>

```diff
@@ -4829,7 +4829,7 @@
                 }
               }(this.view.state, ⟦2-char-id⟧.reduce(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.concat(⟦2-char-id⟧)))))
             }), (⟦2-char-id⟧ => {
-              (0, ⟦2-char-id⟧.Q)(this.view.state, ⟦2-char-id⟧)
+              (0, ⟦2-char-id⟧.W)(this.view.state, ⟦2-char-id⟧)
             }))
           }
         }
```

</details>

<details>
<summary>Hunk 192 · Change · +2 / -2</summary>

```diff
@@ -4844,10 +4844,10 @@
           clearTimeout(this.timeout)
         }
       });
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define({
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define({
       combine: ⟦2-char-id⟧ => ({
         sources: ⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧.source)).filter((⟦2-char-id⟧ => null != ⟦2-char-id⟧)),
-        ...(0, ⟦2-char-id⟧.S)(⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧.config)), {
+        ...(0, ⟦2-char-id⟧.P)(⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧.config)), {
           delay: 750,
           markerFilter: null,
           tooltipFilter: null,
```

</details>

<details>
<summary>Hunk 193 · Change · +3 / -3</summary>

```diff
@@ -4857,15 +4857,15 @@
           delay: Math.max,
           markerFilter: ⟦2-char-id⟧,
           tooltipFilter: ⟦2-char-id⟧,
-          needsRefresh: (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ ? ⟦2-char-id⟧ ? ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧) || ⟦2-char-id⟧(⟦2-char-id⟧) : JJ : ⟦2-char-id⟧,
-          hideOn: (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ ? ⟦2-char-id⟧ ? (⟦2-char-id⟧, FJ, ⟦2-char-id⟧) => ⟦2-char-id⟧(⟦2-char-id⟧, FJ, ⟦2-char-id⟧) || ⟦2-char-id⟧(⟦2-char-id⟧, FJ, ⟦2-char-id⟧) : JJ : ⟦2-char-id⟧,
+          needsRefresh: (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ ? ⟦2-char-id⟧ ? ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧) || ⟦2-char-id⟧(⟦2-char-id⟧) : BB : ⟦2-char-id⟧,
+          hideOn: (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ ? ⟦2-char-id⟧ ? (⟦2-char-id⟧, VB, ⟦2-char-id⟧) => ⟦2-char-id⟧(⟦2-char-id⟧, VB, ⟦2-char-id⟧) || ⟦2-char-id⟧(⟦2-char-id⟧, VB, ⟦2-char-id⟧) : BB : ⟦2-char-id⟧,
           autoPanel: (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ || ⟦2-char-id⟧
         })
       })
     });
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧ ? ⟦2-char-id⟧ ? (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧) : JJ : ⟦2-char-id⟧
+      return ⟦2-char-id⟧ ? ⟦2-char-id⟧ ? (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧) : BB : ⟦2-char-id⟧
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 194 · Change · +2 / -2</summary>

```diff
@@ -4873,12 +4873,12 @@
       return [⟦2-char-id⟧.of({
         source: ⟦2-char-id⟧,
         config: ⟦2-char-id⟧
-      }), mJ, ⟦2-char-id⟧]
+      }), iB, ⟦2-char-id⟧]
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = [];
-      if (⟦2-char-id⟧) JJ: for (let {
+      if (⟦2-char-id⟧) BB: for (let {
           name: ⟦2-char-id⟧
         }
         of ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 195 · Change · +3 / -3</summary>

```diff
@@ -4894,12 +4894,12 @@
       return ⟦2-char-id⟧
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
       let ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧.actions) : [];
-      return (0, ⟦2-char-id⟧.d)("li", {
+      return (0, ⟦2-char-id⟧.e)("li", {
         class: "cm-diagnostic cm-diagnostic-" + ⟦2-char-id⟧.severity
-      }, (0, ⟦2-char-id⟧.d)("span", {
+      }, (0, ⟦2-char-id⟧.e)("span", {
         class: "cm-diagnosticText"
       }, ⟦2-char-id⟧.renderMessage ? ⟦2-char-id⟧.renderMessage(⟦2-char-id⟧) : ⟦2-char-id⟧.message), null === (⟦2-char-id⟧ = ⟦2-char-id⟧.actions) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
         let ⟦2-char-id⟧ = !1,
```

</details>

<details>
<summary>Hunk 196 · Change · +5 / -5</summary>

```diff
@@ -4913,20 +4913,20 @@
             name: ⟦2-char-id⟧
           } = ⟦2-char-id⟧,
           ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧] ? ⟦2-char-id⟧.indexOf(⟦2-char-id⟧[⟦2-char-id⟧]) : -1,
-          ⟦2-char-id⟧ = ⟦2-char-id⟧ < 0 ? jJ : [⟦2-char-id⟧.slice(0, ⟦2-char-id⟧), (0, ⟦2-char-id⟧.d)("u", ⟦2-char-id⟧.slice(⟦2-char-id⟧, ⟦2-char-id⟧ + 1)), ⟦2-char-id⟧.slice(⟦2-char-id⟧ + 1)],
+          ⟦2-char-id⟧ = ⟦2-char-id⟧ < 0 ? gB : [⟦2-char-id⟧.slice(0, ⟦2-char-id⟧), (0, ⟦2-char-id⟧.e)("u", ⟦2-char-id⟧.slice(⟦2-char-id⟧, ⟦2-char-id⟧ + 1)), ⟦2-char-id⟧.slice(⟦2-char-id⟧ + 1)],
           ⟦2-char-id⟧ = ⟦2-char-id⟧.markClass ? " " + ⟦2-char-id⟧.markClass : "";
-        return (0, ⟦2-char-id⟧.d)("button", {
+        return (0, ⟦2-char-id⟧.e)("button", {
           type: "button",
           class: "cm-diagnosticAction" + ⟦2-char-id⟧,
           onclick: ⟦2-char-id⟧,
           onmousedown: ⟦2-char-id⟧,
-          "aria-label": ` Action: ${jJ}${YJ<0?"":` (access key "${UJ[FJ]})"`}.`
+          "aria-label": ` Action: ${gB}${oB<0?"":` (access key "${yB[VB]})"`}.`
         }, ⟦2-char-id⟧)
-      })), ⟦2-char-id⟧.source && (0, ⟦2-char-id⟧.d)("div", {
+      })), ⟦2-char-id⟧.source && (0, ⟦2-char-id⟧.e)("div", {
         class: "cm-diagnosticSource"
       }, ⟦2-char-id⟧.source))
     }
-    class ⟦2-char-id⟧ extends ⟦2-char-id⟧.l {
+    class ⟦2-char-id⟧ extends ⟦2-char-id⟧.p {
       constructor(⟦2-char-id⟧) {
         super(), this.sev = ⟦2-char-id⟧
       }
```

</details>

<details>
<summary>Hunk 197 · Change · +3 / -3</summary>

```diff
@@ -4934,20 +4934,20 @@
         return ⟦2-char-id⟧.sev == this.sev
       }
       toDOM() {
-        return (0, ⟦2-char-id⟧.d)("span", {
+        return (0, ⟦2-char-id⟧.e)("span", {
           class: "cm-lintPoint cm-lintPoint-" + this.sev
         })
       }
     }
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        this.diagnostic = ⟦2-char-id⟧, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = ⟦2-char-id⟧(⟦2-char-id⟧, cJ, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
+        this.diagnostic = ⟦2-char-id⟧, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = ⟦2-char-id⟧(⟦2-char-id⟧, TB, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
       }
     }
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧) {
         this.view = ⟦2-char-id⟧, this.items = [];
-        this.list = (0, ⟦2-char-id⟧.d)("ul", {
+        this.list = (0, ⟦2-char-id⟧.e)("ul", {
           tabIndex: 0,
           role: "listbox",
           "aria-label": this.view.state.phrase("Diagnostics"),
```

</details>

<details>
<summary>Hunk 198 · Change · +2 / -2</summary>

```diff
@@ -4978,9 +4978,9 @@
           onclick: ⟦2-char-id⟧ => {
             for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < this.items.length; ⟦2-char-id⟧++) this.items[⟦2-char-id⟧].dom.contains(⟦2-char-id⟧.target) && this.moveSelection(⟦2-char-id⟧)
           }
-        }), this.dom = (0, ⟦2-char-id⟧.d)("div", {
+        }), this.dom = (0, ⟦2-char-id⟧.e)("div", {
           class: "cm-panel-lint"
-        }, this.list, (0, ⟦2-char-id⟧.d)("button", {
+        }, this.list, (0, ⟦2-char-id⟧.e)("button", {
           type: "button",
           name: "close",
           "aria-label": this.view.state.phrase("close"),
```

</details>

<details>
<summary>Hunk 199 · Change · +1 / -1</summary>

```diff
@@ -4999,7 +4999,7 @@
           diagnostics: ⟦2-char-id⟧,
           selected: ⟦2-char-id⟧
         } = this.view.state.field(⟦2-char-id⟧), ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = !1, ⟦2-char-id⟧ = null, ⟦2-char-id⟧ = new Set;
-        for (⟦2-char-id⟧.between(0, this.view.state.doc.length, ((⟦2-char-id⟧, XJ, ⟦2-char-id⟧) => {
+        for (⟦2-char-id⟧.between(0, this.view.state.doc.length, ((⟦2-char-id⟧, lB, ⟦2-char-id⟧) => {
             let {
               spec: ⟦2-char-id⟧
             } = ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 200 · Change · +1 / -1</summary>

```diff
@@ -5030,7 +5030,7 @@
               sel: ⟦2-char-id⟧,
               panel: ⟦2-char-id⟧
             } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.height / this.list.offsetHeight;
-            ⟦2-char-id⟧.top < ⟦2-char-id⟧.top ? this.list.scrollTop -= (⟦2-char-id⟧.top - ⟦2-char-id⟧.top) / FJ : ⟦2-char-id⟧.bottom > ⟦2-char-id⟧.bottom && (this.list.scrollTop += (⟦2-char-id⟧.bottom - ⟦2-char-id⟧.bottom) / ⟦2-char-id⟧)
+            ⟦2-char-id⟧.top < ⟦2-char-id⟧.top ? this.list.scrollTop -= (⟦2-char-id⟧.top - ⟦2-char-id⟧.top) / VB : ⟦2-char-id⟧.bottom > ⟦2-char-id⟧.bottom && (this.list.scrollTop += (⟦2-char-id⟧.bottom - ⟦2-char-id⟧.bottom) / ⟦2-char-id⟧)
           }
         })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), ⟦2-char-id⟧ && this.sync()
       }
```

</details>

<details>
<summary>Hunk 201 · Change · +4 / -4</summary>

```diff
@@ -5066,13 +5066,13 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(JJ)}</svg>')`
+      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(BB)}</svg>')`
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${JJ}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
-    }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.f.baseTheme({
+      return ⟦2-char-id⟧(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${BB}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
+    }
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.i.baseTheme({
       ".cm-diagnostic": {
         padding: "3px 6px 3px 8px",
         marginLeft: "-1px",
```

</details>

<details>
<summary>Hunk 202 · Change · +9 / -9</summary>

```diff
@@ -5213,26 +5213,26 @@
       }
       return ⟦2-char-id⟧
     }
-    ⟦2-char-id⟧.j;
-    const ⟦2-char-id⟧ = [⟦2-char-id⟧, ⟦2-char-id⟧.f.je.compute([⟦2-char-id⟧], (⟦2-char-id⟧ => {
+    ⟦2-char-id⟧.l;
+    const ⟦2-char-id⟧ = [⟦2-char-id⟧, ⟦2-char-id⟧.i.QB.compute([⟦2-char-id⟧], (⟦2-char-id⟧ => {
       let {
         selected: ⟦2-char-id⟧,
         panel: ⟦2-char-id⟧
       } = ⟦2-char-id⟧.field(⟦2-char-id⟧);
       return ⟦2-char-id⟧ && ⟦2-char-id⟧ && ⟦2-char-id⟧.from != ⟦2-char-id⟧.to ? ⟦2-char-id⟧.c.set([⟦2-char-id⟧.range(⟦2-char-id⟧.from, ⟦2-char-id⟧.to)]) : ⟦2-char-id⟧.c.none
-    })), (0, ⟦2-char-id⟧.G)(⟦2-char-id⟧, {
+    })), (0, ⟦2-char-id⟧.R)(⟦2-char-id⟧, {
       hideOn: ⟦2-char-id⟧
     }), ⟦2-char-id⟧]
   },
-  40094: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  40084: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧,
       d: () => ⟦2-char-id⟧,
-      e: () => ⟦2-char-id⟧
+      e: () => ⟦2-char-id⟧,
+      f: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(40065),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(40060),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(40070);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(40040),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(40036),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(40051);
     const ⟦2-char-id⟧ = "function" == typeof String.prototype.normalize ? ⟦2-char-id⟧ => ⟦2-char-id⟧.normalize("NFKD") : ⟦2-char-id⟧ => ⟦2-char-id⟧;
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 203 · Change · +1 / -1</summary>

```diff
@@ -5250,7 +5250,7 @@
           if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
           this.bufferPos = 0, this.buffer = this.iter.value
         }
-        return (0, ⟦2-char-id⟧.L)(this.buffer, this.bufferPos)
+        return (0, ⟦2-char-id⟧.K)(this.buffer, this.bufferPos)
       }
       next() {
         for (; this.matches.length;) this.matches.pop();
```

</details>

<details>
<summary>Hunk 204 · Change · +3 / -3</summary>

```diff
@@ -5260,14 +5260,14 @@
         for (;;) {
           let ⟦2-char-id⟧ = this.peek();
           if (⟦2-char-id⟧ < 0) return this.done = !0, this;
-          let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.bb)(⟦2-char-id⟧),
+          let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.Y)(⟦2-char-id⟧),
             ⟦2-char-id⟧ = this.bufferStart + this.bufferPos;
-          this.bufferPos += (0, ⟦2-char-id⟧.P)(⟦2-char-id⟧);
+          this.bufferPos += (0, ⟦2-char-id⟧.M)(⟦2-char-id⟧);
           let ⟦2-char-id⟧ = this.normalize(⟦2-char-id⟧);
           if (⟦2-char-id⟧.length)
             for (let ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = ⟦2-char-id⟧;; ⟦2-char-id⟧++) {
               let ⟦2-char-id⟧ = ⟦2-char-id⟧.charCodeAt(⟦2-char-id⟧),
-                ⟦2-char-id⟧ = this.match(⟦2-char-id⟧, eJ, this.bufferPos + this.bufferStart);
+                ⟦2-char-id⟧ = this.match(⟦2-char-id⟧, pB, this.bufferPos + this.bufferStart);
               if (⟦2-char-id⟧ == ⟦2-char-id⟧.length - 1) {
                 if (⟦2-char-id⟧) return this.value = ⟦2-char-id⟧, this;
                 break
```

</details>

<details>
<summary>Hunk 205 · Change · +1 / -1</summary>

```diff
@@ -5276,7 +5276,7 @@
             }
         }
       }
-      match(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      match(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = null;
         for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < this.matches.length; ⟦2-char-id⟧ += 2) {
           let ⟦2-char-id⟧ = this.matches[⟦2-char-id⟧],
```

</details>

<details>
<summary>Hunk 206 · Change · +1 / -1</summary>

```diff
@@ -5289,7 +5289,7 @@
         return this.query.charCodeAt(0) == ⟦2-char-id⟧ && (1 == this.query.length ? ⟦2-char-id⟧ = {
           from: ⟦2-char-id⟧,
           to: ⟦2-char-id⟧
-        } : this.matches.push(1, ⟦2-char-id⟧)), ⟦2-char-id⟧ && this.test && !this.test(⟦2-char-id⟧.from, ⟦2-char-id⟧.to, this.buffer, this.bufferStart) && (⟦2-char-id⟧ = null), FJ
+        } : this.matches.push(1, ⟦2-char-id⟧)), ⟦2-char-id⟧ && this.test && !this.test(⟦2-char-id⟧.from, ⟦2-char-id⟧.to, this.buffer, this.bufferStart) && (⟦2-char-id⟧ = null), VB
       }
     }
     "undefined" != typeof Symbol && (⟦2-char-id⟧.prototype[Symbol.iterator] = function() {
```

</details>

<details>
<summary>Hunk 207 · Change · +2 / -2</summary>

```diff
@@ -5302,10 +5302,10 @@
       },
       ⟦2-char-id⟧ = "gm" + (null == /x/.unicode ? "" : "u");
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
           ⟦2-char-id⟧ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ⟦2-char-id⟧.length;
-        if (this.text = ⟦2-char-id⟧, this.to = ⟦2-char-id⟧, this.curLine = "", this.done = !1, this.value = ⟦2-char-id⟧, /\\[sWDnr]|\n|\r|\[\^/.test(⟦2-char-id⟧)) return new ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧);
+        if (this.text = ⟦2-char-id⟧, this.to = ⟦2-char-id⟧, this.curLine = "", this.done = !1, this.value = ⟦2-char-id⟧, /\\[sWDnr]|\n|\r|\[\^/.test(⟦2-char-id⟧)) return new ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧);
         this.re = new RegExp(⟦2-char-id⟧, ⟦2-char-id⟧ + ((null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.ignoreCase) ? "i" : "")), this.test = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.test, this.iter = ⟦2-char-id⟧.iter();
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.lineAt(⟦2-char-id⟧);
         this.curLineStart = ⟦2-char-id⟧.from, this.matchPos = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), this.getLine(this.curLineStart)
```

</details>

<details>
<summary>Hunk 208 · Change · +1 / -1</summary>

```diff
@@ -5323,7 +5323,7 @@
           if (⟦2-char-id⟧) {
             let ⟦2-char-id⟧ = this.curLineStart + ⟦2-char-id⟧.index,
               ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧[0].length;
-            if (this.matchPos = ⟦2-char-id⟧(this.text, ⟦2-char-id⟧ + (⟦2-char-id⟧ == ⟦2-char-id⟧ ? 1 : 0)), ⟦2-char-id⟧ == this.curLineStart + this.curLine.length && this.nextLine(), (⟦2-char-id⟧ < ⟦2-char-id⟧ || ⟦2-char-id⟧ > this.value.to) && (!this.test || this.test(⟦2-char-id⟧, FJ, ⟦2-char-id⟧))) return this.value = {
+            if (this.matchPos = ⟦2-char-id⟧(this.text, ⟦2-char-id⟧ + (⟦2-char-id⟧ == ⟦2-char-id⟧ ? 1 : 0)), ⟦2-char-id⟧ == this.curLineStart + this.curLine.length && this.nextLine(), (⟦2-char-id⟧ < ⟦2-char-id⟧ || ⟦2-char-id⟧ > this.value.to) && (!this.test || this.test(⟦2-char-id⟧, VB, ⟦2-char-id⟧))) return this.value = {
               from: ⟦2-char-id⟧,
               to: ⟦2-char-id⟧,
               match: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 209 · Change · +2 / -2</summary>

```diff
@@ -5344,11 +5344,11 @@
       get ⟦2-char-id⟧() {
         return this.from + this.text.length
       }
-      static get(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      static get(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧);
         if (!⟦2-char-id⟧ || ⟦2-char-id⟧.from >= ⟦2-char-id⟧ || ⟦2-char-id⟧.to <= ⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.sliceString(⟦2-char-id⟧, ⟦2-char-id⟧));
-          return ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧), FJ
+          return ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧), VB
         }
         if (⟦2-char-id⟧.from == ⟦2-char-id⟧ && ⟦2-char-id⟧.to == ⟦2-char-id⟧) return ⟦2-char-id⟧;
         let {
```

</details>

<details>
<summary>Hunk 210 · Change · +2 / -2</summary>

```diff
@@ -5359,8 +5359,8 @@
       }
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
-        this.text = ⟦2-char-id⟧, this.to = ⟦2-char-id⟧, this.done = !1, this.value = ⟦2-char-id⟧, this.matchPos = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), this.re = new RegExp(⟦2-char-id⟧, ⟦2-char-id⟧ + ((null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.ignoreCase) ? "i" : "")), this.test = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.test, this.flat = ⟦2-char-id⟧.get(⟦2-char-id⟧, FJ, this.chunkEnd(⟦2-char-id⟧ + 5⟦2-char-id⟧))
+      constructor(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
+        this.text = ⟦2-char-id⟧, this.to = ⟦2-char-id⟧, this.done = !1, this.value = ⟦2-char-id⟧, this.matchPos = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), this.re = new RegExp(⟦2-char-id⟧, ⟦2-char-id⟧ + ((null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.ignoreCase) ? "i" : "")), this.test = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.test, this.flat = ⟦2-char-id⟧.get(⟦2-char-id⟧, VB, this.chunkEnd(⟦2-char-id⟧ + 5⟦2-char-id⟧))
       }
       chunkEnd(⟦2-char-id⟧) {
         return ⟦2-char-id⟧ >= this.to ? this.to : this.text.lineAt(⟦2-char-id⟧).to
```

</details>

<details>
<summary>Hunk 211 · Change · +1 / -1</summary>

```diff
@@ -5372,7 +5372,7 @@
           if (⟦2-char-id⟧ && !⟦2-char-id⟧[0] && ⟦2-char-id⟧.index == ⟦2-char-id⟧ && (this.re.lastIndex = ⟦2-char-id⟧ + 1, ⟦2-char-id⟧ = this.re.exec(this.flat.text)), ⟦2-char-id⟧) {
             let ⟦2-char-id⟧ = this.flat.from + ⟦2-char-id⟧.index,
               ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧[0].length;
-            if ((this.flat.to >= this.to || ⟦2-char-id⟧.index + ⟦2-char-id⟧[0].length <= this.flat.text.length - 10) && (!this.test || this.test(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧))) return this.value = {
+            if ((this.flat.to >= this.to || ⟦2-char-id⟧.index + ⟦2-char-id⟧[0].length <= this.flat.text.length - 10) && (!this.test || this.test(⟦2-char-id⟧, dB, ⟦2-char-id⟧))) return this.value = {
               from: ⟦2-char-id⟧,
               to: ⟦2-char-id⟧,
               match: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 212 · Change · +2 / -2</summary>

```diff
@@ -5399,8 +5399,8 @@
         maxMatches: 100,
         wholeWords: !1
       },
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define({
-        combine: ⟦2-char-id⟧ => (0, ⟦2-char-id⟧.S)(⟦2-char-id⟧, GJ, {
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define({
+        combine: ⟦2-char-id⟧ => (0, ⟦2-char-id⟧.P)(⟦2-char-id⟧, uB, {
           highlightWordAroundCursor: (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ || ⟦2-char-id⟧,
           minSelectionLength: Math.min,
           maxMatches: Math.min
```

</details>

<details>
<summary>Hunk 213 · Change · +1 / -1</summary>

```diff
@@ -5409,7 +5409,7 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = [⟦2-char-id⟧, ⟦2-char-id⟧];
-      return ⟦2-char-id⟧ && ⟦2-char-id⟧.push(⟦2-char-id⟧.of(⟦2-char-id⟧)), cJ
+      return ⟦2-char-id⟧ && ⟦2-char-id⟧.push(⟦2-char-id⟧.of(⟦2-char-id⟧)), TB
     }
     const ⟦2-char-id⟧ = ⟦2-char-id⟧.c.mark({
         class: "cm-selectionMatch"
```

</details>

<details>
<summary>Hunk 214 · Change · +6 / -6</summary>

```diff
@@ -5418,15 +5418,15 @@
         class: "cm-selectionMatch cm-selectionMatch-main"
       });
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-      return (0 == ⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧ - 1, ⟦2-char-id⟧)) != ⟦2-char-id⟧.i.Word) && (⟦2-char-id⟧ == ⟦2-char-id⟧.doc.length || ⟦2-char-id⟧(⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧, ⟦2-char-id⟧ + 1)) != ⟦2-char-id⟧.i.Word)
-    }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.k.fromClass(class {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+      return (0 == ⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧ - 1, ⟦2-char-id⟧)) != ⟦2-char-id⟧.e.Word) && (⟦2-char-id⟧ == ⟦2-char-id⟧.doc.length || ⟦2-char-id⟧(⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧, ⟦2-char-id⟧ + 1)) != ⟦2-char-id⟧.e.Word)
+    }
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.n.fromClass(class {
         constructor(⟦2-char-id⟧) {
-          this.je = this.getDeco(⟦2-char-id⟧)
+          this.QB = this.getDeco(⟦2-char-id⟧)
         }
         update(⟦2-char-id⟧) {
-          (⟦2-char-id⟧.selectionSet || ⟦2-char-id⟧.docChanged || ⟦2-char-id⟧.viewportChanged) && (this.je = this.getDeco(⟦2-char-id⟧.view))
+          (⟦2-char-id⟧.selectionSet || ⟦2-char-id⟧.docChanged || ⟦2-char-id⟧.viewportChanged) && (this.QB = this.getDeco(⟦2-char-id⟧.view))
         }
         getDeco(⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.state.facet(⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 215 · Change · +1 / -1</summary>

```diff
@@ -5434,7 +5434,7 @@
               state: ⟦2-char-id⟧
             } = ⟦2-char-id⟧,
             ⟦2-char-id⟧ = ⟦2-char-id⟧.selection;
-          if (⟦2-char-id⟧.ws.length > 1) return ⟦2-char-id⟧.c.none;
+          if (⟦2-char-id⟧.ek.length > 1) return ⟦2-char-id⟧.c.none;
           let ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.main,
             ⟦2-char-id⟧ = null;
           if (⟦2-char-id⟧.empty) {
```

</details>

<details>
<summary>Hunk 216 · Change · +8 / -8</summary>

```diff
@@ -5446,28 +5446,28 @@
             let ⟦2-char-id⟧ = ⟦2-char-id⟧.to - ⟦2-char-id⟧.from;
             if (⟦2-char-id⟧ < ⟦2-char-id⟧.minSelectionLength || ⟦2-char-id⟧ > 200) return ⟦2-char-id⟧.c.none;
             if (⟦2-char-id⟧.wholeWords) {
-              if (⟦2-char-id⟧ = ⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧.from, ⟦2-char-id⟧.to), ⟦2-char-id⟧ = ⟦2-char-id⟧.charCategorizer(⟦2-char-id⟧.head), !⟦2-char-id⟧(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧.from, ⟦2-char-id⟧.to) || ! function(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-                  return ⟦2-char-id⟧(⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧, ⟦2-char-id⟧ + 1)) == ⟦2-char-id⟧.i.Word && ⟦2-char-id⟧(⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧ - 1, ⟦2-char-id⟧)) == ⟦2-char-id⟧.i.Word
-                }(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧.from, ⟦2-char-id⟧.to)) return ⟦2-char-id⟧.c.none
+              if (⟦2-char-id⟧ = ⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧.from, ⟦2-char-id⟧.to), ⟦2-char-id⟧ = ⟦2-char-id⟧.charCategorizer(⟦2-char-id⟧.head), !⟦2-char-id⟧(⟦2-char-id⟧, dB, ⟦2-char-id⟧.from, ⟦2-char-id⟧.to) || ! function(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+                  return ⟦2-char-id⟧(⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧, ⟦2-char-id⟧ + 1)) == ⟦2-char-id⟧.e.Word && ⟦2-char-id⟧(⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧ - 1, ⟦2-char-id⟧)) == ⟦2-char-id⟧.e.Word
+                }(⟦2-char-id⟧, dB, ⟦2-char-id⟧.from, ⟦2-char-id⟧.to)) return ⟦2-char-id⟧.c.none
             } else if (⟦2-char-id⟧ = ⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧.from, ⟦2-char-id⟧.to), !⟦2-char-id⟧) return ⟦2-char-id⟧.c.none
           }
           let ⟦2-char-id⟧ = [];
-          for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.o5) {
-            let ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.doc, XJ, ⟦2-char-id⟧.from, ⟦2-char-id⟧.to);
+          for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.BBB) {
+            let ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.doc, lB, ⟦2-char-id⟧.from, ⟦2-char-id⟧.to);
             for (; !⟦2-char-id⟧.next().done;) {
               let {
                 from: ⟦2-char-id⟧,
                 to: ⟦2-char-id⟧
               } = ⟦2-char-id⟧.value;
-              if ((!⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, UJ, ⟦2-char-id⟧)) && (⟦2-char-id⟧.empty && ⟦2-char-id⟧ <= ⟦2-char-id⟧.from && ⟦2-char-id⟧ >= ⟦2-char-id⟧.to ? ⟦2-char-id⟧.push(⟦2-char-id⟧.range(⟦2-char-id⟧, ⟦2-char-id⟧)) : (⟦2-char-id⟧ >= ⟦2-char-id⟧.to || ⟦2-char-id⟧ <= ⟦2-char-id⟧.from) && ⟦2-char-id⟧.push(⟦2-char-id⟧.range(⟦2-char-id⟧, ⟦2-char-id⟧)), ⟦2-char-id⟧.length > ⟦2-char-id⟧.maxMatches)) return ⟦2-char-id⟧.c.none
+              if ((!⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧, dB, yB, ⟦2-char-id⟧)) && (⟦2-char-id⟧.empty && ⟦2-char-id⟧ <= ⟦2-char-id⟧.from && ⟦2-char-id⟧ >= ⟦2-char-id⟧.to ? ⟦2-char-id⟧.push(⟦2-char-id⟧.range(⟦2-char-id⟧, ⟦2-char-id⟧)) : (⟦2-char-id⟧ >= ⟦2-char-id⟧.to || ⟦2-char-id⟧ <= ⟦2-char-id⟧.from) && ⟦2-char-id⟧.push(⟦2-char-id⟧.range(⟦2-char-id⟧, ⟦2-char-id⟧)), ⟦2-char-id⟧.length > ⟦2-char-id⟧.maxMatches)) return ⟦2-char-id⟧.c.none
             }
           }
           return ⟦2-char-id⟧.c.set(⟦2-char-id⟧)
         }
       }, {
-        je: ⟦2-char-id⟧ => ⟦2-char-id⟧.je
+        QB: ⟦2-char-id⟧ => ⟦2-char-id⟧.QB
       }),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.f.baseTheme({
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.i.baseTheme({
         ".cm-selectionMatch": {
           backgroundColor: "#99ff7780"
         },
```

</details>

<details>
<summary>Hunk 217 · Change · +3 / -3</summary>

```diff
@@ -5475,15 +5475,15 @@
           backgroundColor: "transparent"
         }
       });
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define({
-      combine: ⟦2-char-id⟧ => (0, ⟦2-char-id⟧.S)(⟦2-char-id⟧, {
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define({
+      combine: ⟦2-char-id⟧ => (0, ⟦2-char-id⟧.P)(⟦2-char-id⟧, {
         top: !1,
         caseSensitive: !1,
         literal: !1,
         regexp: !1,
         wholeWord: !1,
         createPanel: ⟦2-char-id⟧ => new ⟦2-char-id⟧(⟦2-char-id⟧),
-        scrollToMatch: ⟦2-char-id⟧ => ⟦2-char-id⟧.f.scrollIntoView(⟦2-char-id⟧)
+        scrollToMatch: ⟦2-char-id⟧ => ⟦2-char-id⟧.i.scrollIntoView(⟦2-char-id⟧)
       })
     });
     class ⟦2-char-id⟧ {
```

</details>

<details>
<summary>Hunk 218 · Change · +1 / -1</summary>

```diff
@@ -5497,7 +5497,7 @@
         }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!⟦2-char-id⟧.wholeWord, this.test = ⟦2-char-id⟧.test
       }
       unquote(⟦2-char-id⟧) {
-        return this.literal ? JJ : ⟦2-char-id⟧.replace(/\\([nrt\\])/g, ((⟦2-char-id⟧, ⟦2-char-id⟧) => "n" == ⟦2-char-id⟧ ? "\n" : "r" == ⟦2-char-id⟧ ? "\r" : "t" == ⟦2-char-id⟧ ? "\t" : "\\"))
+        return this.literal ? BB : ⟦2-char-id⟧.replace(/\\([nrt\\])/g, ((⟦2-char-id⟧, ⟦2-char-id⟧) => "n" == ⟦2-char-id⟧ ? "\n" : "r" == ⟦2-char-id⟧ ? "\r" : "t" == ⟦2-char-id⟧ ? "\t" : "\\"))
       }
       ⟦2-char-id⟧(⟦2-char-id⟧) {
         return this.search == ⟦2-char-id⟧.search && this.replace == ⟦2-char-id⟧.replace && this.caseSensitive == ⟦2-char-id⟧.caseSensitive && this.regexp == ⟦2-char-id⟧.regexp && this.wholeWord == ⟦2-char-id⟧.wholeWord && this.test == ⟦2-char-id⟧.test
```

</details>

<details>
<summary>Hunk 219 · Change · +2 / -2</summary>

```diff
@@ -5508,10 +5508,10 @@
       getCursor(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
           ⟦2-char-id⟧ = arguments.length > 2 ? arguments[2] : void 0,
-          ⟦2-char-id⟧ = ⟦2-char-id⟧.doc ? JJ : ⟦2-char-id⟧.o.create({
+          ⟦2-char-id⟧ = ⟦2-char-id⟧.doc ? BB : ⟦2-char-id⟧.i.create({
             doc: ⟦2-char-id⟧
           });
-        return null == ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.doc.length), this.regexp ? ⟦2-char-id⟧(this, FJ, cJ, ⟦2-char-id⟧) : ⟦2-char-id⟧(this, FJ, cJ, ⟦2-char-id⟧)
+        return null == ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.doc.length), this.regexp ? ⟦2-char-id⟧(this, VB, TB, ⟦2-char-id⟧) : ⟦2-char-id⟧(this, VB, TB, ⟦2-char-id⟧)
       }
     }
     class ⟦2-char-id⟧ {
```

</details>

<details>
<summary>Hunk 220 · Change · +12 / -12</summary>

```diff
@@ -5520,33 +5520,33 @@
       }
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧;
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
-      return ⟦2-char-id⟧.wholeWord && (⟦2-char-id⟧ = ⟦2-char-id⟧.doc, ⟦2-char-id⟧ = ⟦2-char-id⟧.charCategorizer(⟦2-char-id⟧.selection.main.head), ⟦2-char-id⟧ = (⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) => ((⟦2-char-id⟧ > ⟦2-char-id⟧ || ⟦2-char-id⟧ + ⟦2-char-id⟧.length < ⟦2-char-id⟧) && (⟦2-char-id⟧ = Math.max(0, ⟦2-char-id⟧ - 2), ⟦2-char-id⟧ = ⟦2-char-id⟧.sliceString(⟦2-char-id⟧, Math.min(⟦2-char-id⟧.length, ⟦2-char-id⟧ + 2))), (⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧)) != ⟦2-char-id⟧.i.Word || ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧)) != ⟦2-char-id⟧.i.Word) && (⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧)) != ⟦2-char-id⟧.i.Word || ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧)) != ⟦2-char-id⟧.i.Word))), ⟦2-char-id⟧.test && (⟦2-char-id⟧ = function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-        return (⟦2-char-id⟧, UJ, eJ, ⟦2-char-id⟧) => {
-          if (⟦2-char-id⟧ && !⟦2-char-id⟧(⟦2-char-id⟧, UJ, eJ, ⟦2-char-id⟧)) return !1;
+      return ⟦2-char-id⟧.wholeWord && (⟦2-char-id⟧ = ⟦2-char-id⟧.doc, ⟦2-char-id⟧ = ⟦2-char-id⟧.charCategorizer(⟦2-char-id⟧.selection.main.head), ⟦2-char-id⟧ = (⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) => ((⟦2-char-id⟧ > ⟦2-char-id⟧ || ⟦2-char-id⟧ + ⟦2-char-id⟧.length < ⟦2-char-id⟧) && (⟦2-char-id⟧ = Math.max(0, ⟦2-char-id⟧ - 2), ⟦2-char-id⟧ = ⟦2-char-id⟧.sliceString(⟦2-char-id⟧, Math.min(⟦2-char-id⟧.length, ⟦2-char-id⟧ + 2))), (⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧)) != ⟦2-char-id⟧.e.Word || ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧)) != ⟦2-char-id⟧.e.Word) && (⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧)) != ⟦2-char-id⟧.e.Word || ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧)) != ⟦2-char-id⟧.e.Word))), ⟦2-char-id⟧.test && (⟦2-char-id⟧ = function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+        return (⟦2-char-id⟧, yB, pB, ⟦2-char-id⟧) => {
+          if (⟦2-char-id⟧ && !⟦2-char-id⟧(⟦2-char-id⟧, yB, pB, ⟦2-char-id⟧)) return !1;
           let ⟦2-char-id⟧ = ⟦2-char-id⟧ >= ⟦2-char-id⟧ && ⟦2-char-id⟧ <= ⟦2-char-id⟧ + ⟦2-char-id⟧.length ? ⟦2-char-id⟧.slice(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧) : ⟦2-char-id⟧.doc.sliceString(⟦2-char-id⟧, ⟦2-char-id⟧);
-          return ⟦2-char-id⟧(⟦2-char-id⟧, cJ, FJ, ⟦2-char-id⟧)
-        }
-      }(⟦2-char-id⟧.test, cJ, ⟦2-char-id⟧)), new ⟦2-char-id⟧(⟦2-char-id⟧.doc, ⟦2-char-id⟧.unquoted, ZJ, FJ, ⟦2-char-id⟧.caseSensitive ? void 0 : ⟦2-char-id⟧ => ⟦2-char-id⟧.toLowerCase(), ⟦2-char-id⟧)
+          return ⟦2-char-id⟧(⟦2-char-id⟧, TB, VB, ⟦2-char-id⟧)
+        }
+      }(⟦2-char-id⟧.test, TB, ⟦2-char-id⟧)), new ⟦2-char-id⟧(⟦2-char-id⟧.doc, ⟦2-char-id⟧.unquoted, dB, VB, ⟦2-char-id⟧.caseSensitive ? void 0 : ⟦2-char-id⟧ => ⟦2-char-id⟧.toLowerCase(), ⟦2-char-id⟧)
     }
     class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧) {
         super(⟦2-char-id⟧)
       }
-      nextMatch(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧(this.spec, JJ, ZJ, ⟦2-char-id⟧.doc.length).nextOverlapping();
+      nextMatch(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧(this.spec, BB, dB, ⟦2-char-id⟧.doc.length).nextOverlapping();
         if (⟦2-char-id⟧.done) {
           let ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.doc.length, ⟦2-char-id⟧ + this.spec.unquoted.length);
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(this.spec, JJ, 0, ⟦2-char-id⟧).nextOverlapping()
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(this.spec, BB, 0, ⟦2-char-id⟧).nextOverlapping()
         }
         return ⟦2-char-id⟧.done || ⟦2-char-id⟧.value.from == ⟦2-char-id⟧ && ⟦2-char-id⟧.value.to == ⟦2-char-id⟧ ? null : ⟦2-char-id⟧.value
       }
-      prevMatchInRange(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      prevMatchInRange(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         for (let ⟦2-char-id⟧ = ⟦2-char-id⟧;;) {
           let ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, ⟦2-char-id⟧ - 1⟦2-char-id⟧ - this.spec.unquoted.length),
-            ⟦2-char-id⟧ = ⟦2-char-id⟧(this.spec, JJ, ZJ, ⟦2-char-id⟧),
+            ⟦2-char-id⟧ = ⟦2-char-id⟧(this.spec, BB, dB, ⟦2-char-id⟧),
             ⟦2-char-id⟧ = null;
           for (; !⟦2-char-id⟧.nextOverlapping().done;) ⟦2-char-id⟧ = ⟦2-char-id⟧.value;
           if (⟦2-char-id⟧) return ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 221 · Change · +1 / -1</summary>

```diff
@@ -5554,7 +5554,7 @@
           ⟦2-char-id⟧ -= 1⟦2-char-id⟧
         }
       }
-      prevMatch(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      prevMatch(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = this.prevMatchInRange(⟦2-char-id⟧, 0, ⟦2-char-id⟧);
         return ⟦2-char-id⟧ || (⟦2-char-id⟧ = this.prevMatchInRange(⟦2-char-id⟧, Math.max(0, ⟦2-char-id⟧ - this.spec.unquoted.length), ⟦2-char-id⟧.doc.length)), !⟦2-char-id⟧ || ⟦2-char-id⟧.from == ⟦2-char-id⟧ && ⟦2-char-id⟧.to == ⟦2-char-id⟧ ? null : ⟦2-char-id⟧
       }
```

</details>

<details>
<summary>Hunk 222 · Change · +1 / -1</summary>

```diff
@@ -5562,7 +5562,7 @@
         return this.spec.unquote(this.spec.replace)
       }
       matchAll(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧(this.spec, JJ, 0, ⟦2-char-id⟧.doc.length),
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧(this.spec, BB, 0, ⟦2-char-id⟧.doc.length),
           ⟦2-char-id⟧ = [];
         for (; !⟦2-char-id⟧.next().done;) {
           if (⟦2-char-id⟧.length >= ⟦2-char-id⟧) return null;
```

</details>

<details>
<summary>Hunk 223 · Change · +17 / -17</summary>

```diff
@@ -5570,47 +5570,47 @@
         }
         return ⟦2-char-id⟧
       }
-      highlight(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧(this.spec, JJ, Math.max(0, ⟦2-char-id⟧ - this.spec.unquoted.length), Math.min(⟦2-char-id⟧ + this.spec.unquoted.length, ⟦2-char-id⟧.doc.length));
+      highlight(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧(this.spec, BB, Math.max(0, ⟦2-char-id⟧ - this.spec.unquoted.length), Math.min(⟦2-char-id⟧ + this.spec.unquoted.length, ⟦2-char-id⟧.doc.length));
         for (; !⟦2-char-id⟧.next().done;) ⟦2-char-id⟧(⟦2-char-id⟧.value.from, ⟦2-char-id⟧.value.to)
       }
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧;
       var ⟦2-char-id⟧;
-      return ⟦2-char-id⟧.wholeWord && (⟦2-char-id⟧ = ⟦2-char-id⟧.charCategorizer(⟦2-char-id⟧.selection.main.head), ⟦2-char-id⟧ = (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => !⟦2-char-id⟧[0].length || (⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧.input, ⟦2-char-id⟧.index)) != ⟦2-char-id⟧.i.Word || ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧.input, ⟦2-char-id⟧.index)) != ⟦2-char-id⟧.i.Word) && (⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧.input, ⟦2-char-id⟧.index + ⟦2-char-id⟧[0].length)) != ⟦2-char-id⟧.i.Word || ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧.input, ⟦2-char-id⟧.index + ⟦2-char-id⟧[0].length)) != ⟦2-char-id⟧.i.Word)), ⟦2-char-id⟧.test && (⟦2-char-id⟧ = function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-        return (⟦2-char-id⟧, UJ, ⟦2-char-id⟧) => (!⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧, UJ, ⟦2-char-id⟧)) && ⟦2-char-id⟧(⟦2-char-id⟧[0], cJ, FJ, ⟦2-char-id⟧)
-      }(⟦2-char-id⟧.test, cJ, ⟦2-char-id⟧)), new ⟦2-char-id⟧(⟦2-char-id⟧.doc, ⟦2-char-id⟧.search, {
+      return ⟦2-char-id⟧.wholeWord && (⟦2-char-id⟧ = ⟦2-char-id⟧.charCategorizer(⟦2-char-id⟧.selection.main.head), ⟦2-char-id⟧ = (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => !⟦2-char-id⟧[0].length || (⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧.input, ⟦2-char-id⟧.index)) != ⟦2-char-id⟧.e.Word || ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧.input, ⟦2-char-id⟧.index)) != ⟦2-char-id⟧.e.Word) && (⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧.input, ⟦2-char-id⟧.index + ⟦2-char-id⟧[0].length)) != ⟦2-char-id⟧.e.Word || ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧.input, ⟦2-char-id⟧.index + ⟦2-char-id⟧[0].length)) != ⟦2-char-id⟧.e.Word)), ⟦2-char-id⟧.test && (⟦2-char-id⟧ = function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+        return (⟦2-char-id⟧, yB, ⟦2-char-id⟧) => (!⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧, yB, ⟦2-char-id⟧)) && ⟦2-char-id⟧(⟦2-char-id⟧[0], TB, VB, ⟦2-char-id⟧)
+      }(⟦2-char-id⟧.test, TB, ⟦2-char-id⟧)), new ⟦2-char-id⟧(⟦2-char-id⟧.doc, ⟦2-char-id⟧.search, {
         ignoreCase: !⟦2-char-id⟧.caseSensitive,
         test: ⟦2-char-id⟧
-      }, ZJ, ⟦2-char-id⟧)
+      }, dB, ⟦2-char-id⟧)
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧.slice((0, ⟦2-char-id⟧.X)(⟦2-char-id⟧, cJ, !1), ⟦2-char-id⟧)
+      return ⟦2-char-id⟧.slice((0, ⟦2-char-id⟧.S)(⟦2-char-id⟧, TB, !1), ⟦2-char-id⟧)
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧.slice(⟦2-char-id⟧, (0, ⟦2-char-id⟧.X)(⟦2-char-id⟧, ⟦2-char-id⟧))
+      return ⟦2-char-id⟧.slice(⟦2-char-id⟧, (0, ⟦2-char-id⟧.S)(⟦2-char-id⟧, ⟦2-char-id⟧))
     }
     class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
-      nextMatch(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧(this.spec, JJ, ZJ, ⟦2-char-id⟧.doc.length).next();
-        return ⟦2-char-id⟧.done && (⟦2-char-id⟧ = ⟦2-char-id⟧(this.spec, JJ, 0, ⟦2-char-id⟧).next()), ⟦2-char-id⟧.done ? null : ⟦2-char-id⟧.value
-      }
-      prevMatchInRange(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      nextMatch(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧(this.spec, BB, dB, ⟦2-char-id⟧.doc.length).next();
+        return ⟦2-char-id⟧.done && (⟦2-char-id⟧ = ⟦2-char-id⟧(this.spec, BB, 0, ⟦2-char-id⟧).next()), ⟦2-char-id⟧.done ? null : ⟦2-char-id⟧.value
+      }
+      prevMatchInRange(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         for (let ⟦2-char-id⟧ = 1;; ⟦2-char-id⟧++) {
           let ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, ⟦2-char-id⟧ - 1⟦2-char-id⟧ * ⟦2-char-id⟧),
-            ⟦2-char-id⟧ = ⟦2-char-id⟧(this.spec, JJ, UJ, ⟦2-char-id⟧),
+            ⟦2-char-id⟧ = ⟦2-char-id⟧(this.spec, BB, yB, ⟦2-char-id⟧),
             ⟦2-char-id⟧ = null;
           for (; !⟦2-char-id⟧.next().done;) ⟦2-char-id⟧ = ⟦2-char-id⟧.value;
           if (⟦2-char-id⟧ && (⟦2-char-id⟧ == ⟦2-char-id⟧ || ⟦2-char-id⟧.from > ⟦2-char-id⟧ + 10)) return ⟦2-char-id⟧;
           if (⟦2-char-id⟧ == ⟦2-char-id⟧) return null
         }
       }
-      prevMatch(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-        return this.prevMatchInRange(⟦2-char-id⟧, 0, ⟦2-char-id⟧) || this.prevMatchInRange(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧.doc.length)
+      prevMatch(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+        return this.prevMatchInRange(⟦2-char-id⟧, 0, ⟦2-char-id⟧) || this.prevMatchInRange(⟦2-char-id⟧, dB, ⟦2-char-id⟧.doc.length)
       }
       getReplacement(⟦2-char-id⟧) {
         return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((⟦2-char-id⟧, ⟦2-char-id⟧) => {
```

</details>

<details>
<summary>Hunk 224 · Change · +1 / -1</summary>

```diff
@@ -5624,7 +5624,7 @@
         }))
       }
       matchAll(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧(this.spec, JJ, 0, ⟦2-char-id⟧.doc.length),
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧(this.spec, BB, 0, ⟦2-char-id⟧.doc.length),
           ⟦2-char-id⟧ = [];
         for (; !⟦2-char-id⟧.next().done;) {
           if (⟦2-char-id⟧.length >= ⟦2-char-id⟧) return null;
```

</details>

<details>
<summary>Hunk 225 · Change · +7 / -7</summary>

```diff
@@ -5632,20 +5632,20 @@
         }
         return ⟦2-char-id⟧
       }
-      highlight(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧(this.spec, JJ, Math.max(0, ⟦2-char-id⟧ - 250), Math.min(⟦2-char-id⟧ + 250, ⟦2-char-id⟧.doc.length));
+      highlight(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧(this.spec, BB, Math.max(0, ⟦2-char-id⟧ - 250), Math.min(⟦2-char-id⟧ + 250, ⟦2-char-id⟧.doc.length));
         for (; !⟦2-char-id⟧.next().done;) ⟦2-char-id⟧(⟦2-char-id⟧.value.from, ⟦2-char-id⟧.value.to)
       }
     }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.E.define({
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.x.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.x.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define({
         create: ⟦2-char-id⟧ => new ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧).create(), null),
         update(⟦2-char-id⟧, ⟦2-char-id⟧) {
-          for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.effects) ⟦2-char-id⟧.is(⟦2-char-id⟧) ? ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.value.create(), ⟦2-char-id⟧.panel) : ⟦2-char-id⟧.is(⟦2-char-id⟧) && (⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.query, ⟦2-char-id⟧.value ? RJ : null));
+          for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.effects) ⟦2-char-id⟧.is(⟦2-char-id⟧) ? ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.value.create(), ⟦2-char-id⟧.panel) : ⟦2-char-id⟧.is(⟦2-char-id⟧) && (⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.query, ⟦2-char-id⟧.value ? qB : null));
           return ⟦2-char-id⟧
         },
-        provide: ⟦2-char-id⟧ => ⟦2-char-id⟧._.from(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.panel))
+        provide: ⟦2-char-id⟧ => ⟦2-char-id⟧.kb.from(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.panel))
       });
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 226 · Change · +3 / -3</summary>

```diff
@@ -5658,13 +5658,13 @@
       ⟦2-char-id⟧ = ⟦2-char-id⟧.c.mark({
         class: "cm-searchMatch cm-searchMatch-selected"
       }),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.k.fromClass(class {
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.n.fromClass(class {
         constructor(⟦2-char-id⟧) {
-          this.view = ⟦2-char-id⟧, this.je = this.highlight(⟦2-char-id⟧.state.field(⟦2-char-id⟧))
+          this.view = ⟦2-char-id⟧, this.QB = this.highlight(⟦2-char-id⟧.state.field(⟦2-char-id⟧))
         }
         update(⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.state.field(⟦2-char-id⟧);
-          (⟦2-char-id⟧ != ⟦2-char-id⟧.startState.field(⟦2-char-id⟧) || ⟦2-char-id⟧.docChanged || ⟦2-char-id⟧.selectionSet || ⟦2-char-id⟧.viewportChanged) && (this.je = this.highlight(⟦2-char-id⟧))
+          (⟦2-char-id⟧ != ⟦2-char-id⟧.startState.field(⟦2-char-id⟧) || ⟦2-char-id⟧.docChanged || ⟦2-char-id⟧.selectionSet || ⟦2-char-id⟧.viewportChanged) && (this.QB = this.highlight(⟦2-char-id⟧))
         }
         highlight(⟦2-char-id⟧) {
           let {
```

</details>

<details>
<summary>Hunk 227 · Change · +6 / -6</summary>

```diff
@@ -5674,22 +5674,22 @@
           if (!⟦2-char-id⟧ || !⟦2-char-id⟧.spec.valid) return ⟦2-char-id⟧.c.none;
           let {
             view: ⟦2-char-id⟧
-          } = this, ⟦2-char-id⟧ = new ⟦2-char-id⟧.u;
-          for (let ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = ⟦2-char-id⟧.o5, ⟦2-char-id⟧ = ⟦2-char-id⟧.length; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) {
+          } = this, ⟦2-char-id⟧ = new ⟦2-char-id⟧.t;
+          for (let ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = ⟦2-char-id⟧.BBB, ⟦2-char-id⟧ = ⟦2-char-id⟧.length; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) {
             let {
               from: ⟦2-char-id⟧,
               to: ⟦2-char-id⟧
             } = ⟦2-char-id⟧[⟦2-char-id⟧];
             for (; ⟦2-char-id⟧ < ⟦2-char-id⟧ - 1 && ⟦2-char-id⟧ > ⟦2-char-id⟧[⟦2-char-id⟧ + 1].from - 500;) ⟦2-char-id⟧ = ⟦2-char-id⟧[++⟦2-char-id⟧].to;
-            ⟦2-char-id⟧.highlight(⟦2-char-id⟧.state, JJ, ZJ, ((⟦2-char-id⟧, ⟦2-char-id⟧) => {
-              let ⟦2-char-id⟧ = ⟦2-char-id⟧.state.selection.ws.some((⟦2-char-id⟧ => ⟦2-char-id⟧.from == ⟦2-char-id⟧ && ⟦2-char-id⟧.to == ⟦2-char-id⟧));
-              ⟦2-char-id⟧.add(⟦2-char-id⟧, cJ, ⟦2-char-id⟧ ? dJ : ⟦2-char-id⟧)
+            ⟦2-char-id⟧.highlight(⟦2-char-id⟧.state, BB, dB, ((⟦2-char-id⟧, ⟦2-char-id⟧) => {
+              let ⟦2-char-id⟧ = ⟦2-char-id⟧.state.selection.ek.some((⟦2-char-id⟧ => ⟦2-char-id⟧.from == ⟦2-char-id⟧ && ⟦2-char-id⟧.to == ⟦2-char-id⟧));
+              ⟦2-char-id⟧.add(⟦2-char-id⟧, TB, ⟦2-char-id⟧ ? RB : ⟦2-char-id⟧)
             }))
           }
           return ⟦2-char-id⟧.finish()
         }
       }, {
-        je: ⟦2-char-id⟧ => ⟦2-char-id⟧.je
+        QB: ⟦2-char-id⟧ => ⟦2-char-id⟧.QB
       });
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 228 · Change · +3 / -3</summary>

```diff
@@ -5703,15 +5703,15 @@
           query: ⟦2-char-id⟧
         } = ⟦2-char-id⟧, {
           to: ⟦2-char-id⟧
-        } = ⟦2-char-id⟧.state.selection.main, ⟦2-char-id⟧ = ⟦2-char-id⟧.nextMatch(⟦2-char-id⟧.state, FJ, ⟦2-char-id⟧);
+        } = ⟦2-char-id⟧.state.selection.main, ⟦2-char-id⟧ = ⟦2-char-id⟧.nextMatch(⟦2-char-id⟧.state, VB, ⟦2-char-id⟧);
         if (!⟦2-char-id⟧) return !1;
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧.m.single(⟦2-char-id⟧.from, ⟦2-char-id⟧.to),
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧.h.single(⟦2-char-id⟧.from, ⟦2-char-id⟧.to),
           ⟦2-char-id⟧ = ⟦2-char-id⟧.state.facet(⟦2-char-id⟧);
         return ⟦2-char-id⟧.dispatch({
           selection: ⟦2-char-id⟧,
           effects: [⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.scrollToMatch(⟦2-char-id⟧.main, ⟦2-char-id⟧)],
           userEvent: "select.search"
-        }), BJ(⟦2-char-id⟧), !0
+        }), AB(⟦2-char-id⟧), !0
       })),
       ⟦2-char-id⟧ = ⟦2-char-id⟧(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
         let {
```

</details>

<details>
<summary>Hunk 229 · Change · +4 / -4</summary>

```diff
@@ -5720,22 +5720,22 @@
           state: ⟦2-char-id⟧
         } = ⟦2-char-id⟧, {
           from: ⟦2-char-id⟧
-        } = ⟦2-char-id⟧.selection.main, ⟦2-char-id⟧ = ⟦2-char-id⟧.prevMatch(⟦2-char-id⟧, eJ, ⟦2-char-id⟧);
+        } = ⟦2-char-id⟧.selection.main, ⟦2-char-id⟧ = ⟦2-char-id⟧.prevMatch(⟦2-char-id⟧, pB, ⟦2-char-id⟧);
         if (!⟦2-char-id⟧) return !1;
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧.m.single(⟦2-char-id⟧.from, ⟦2-char-id⟧.to),
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧.h.single(⟦2-char-id⟧.from, ⟦2-char-id⟧.to),
           ⟦2-char-id⟧ = ⟦2-char-id⟧.state.facet(⟦2-char-id⟧);
         return ⟦2-char-id⟧.dispatch({
           selection: ⟦2-char-id⟧,
           effects: [⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.scrollToMatch(⟦2-char-id⟧.main, ⟦2-char-id⟧)],
           userEvent: "select.search"
-        }), BJ(⟦2-char-id⟧), !0
+        }), AB(⟦2-char-id⟧), !0
       })),
       ⟦2-char-id⟧ = ⟦2-char-id⟧(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
         let {
           query: ⟦2-char-id⟧
         } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.matchAll(⟦2-char-id⟧.state, 1⟦2-char-id⟧);
         return !(!⟦2-char-id⟧ || !⟦2-char-id⟧.length) && (⟦2-char-id⟧.dispatch({
-          selection: ⟦2-char-id⟧.m.create(⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧.m.range(⟦2-char-id⟧.from, ⟦2-char-id⟧.to)))),
+          selection: ⟦2-char-id⟧.h.create(⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧.h.range(⟦2-char-id⟧.from, ⟦2-char-id⟧.to)))),
           userEvent: "select.search.matches"
         }), !0)
       })),
```

</details>

<details>
<summary>Hunk 230 · Change · +4 / -4</summary>

```diff
@@ -5749,18 +5749,18 @@
           to: ⟦2-char-id⟧
         } = ⟦2-char-id⟧.selection.main;
         if (⟦2-char-id⟧.readOnly) return !1;
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧.nextMatch(⟦2-char-id⟧, XJ, ⟦2-char-id⟧);
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧.nextMatch(⟦2-char-id⟧, lB, ⟦2-char-id⟧);
         if (!⟦2-char-id⟧) return !1;
-        let ⟦2-char-id⟧, YJ, ⟦2-char-id⟧ = ⟦2-char-id⟧,
+        let ⟦2-char-id⟧, oB, ⟦2-char-id⟧ = ⟦2-char-id⟧,
           ⟦2-char-id⟧ = [],
           ⟦2-char-id⟧ = [];
         ⟦2-char-id⟧.from == ⟦2-char-id⟧ && ⟦2-char-id⟧.to == ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.toText(⟦2-char-id⟧.getReplacement(⟦2-char-id⟧)), ⟦2-char-id⟧.push({
           from: ⟦2-char-id⟧.from,
           to: ⟦2-char-id⟧.to,
           insert: ⟦2-char-id⟧
-        }), ⟦2-char-id⟧ = ⟦2-char-id⟧.nextMatch(⟦2-char-id⟧, ⟦2-char-id⟧.from, ⟦2-char-id⟧.to), ⟦2-char-id⟧.push(⟦2-char-id⟧.f.announce.of(⟦2-char-id⟧.phrase("replaced match on line $", ⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧).number) + ".")));
+        }), ⟦2-char-id⟧ = ⟦2-char-id⟧.nextMatch(⟦2-char-id⟧, ⟦2-char-id⟧.from, ⟦2-char-id⟧.to), ⟦2-char-id⟧.push(⟦2-char-id⟧.i.announce.of(⟦2-char-id⟧.phrase("replaced match on line $", ⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧).number) + ".")));
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.state.changes(⟦2-char-id⟧);
-        return ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.m.single(⟦2-char-id⟧.from, ⟦2-char-id⟧.to).map(⟦2-char-id⟧), ⟦2-char-id⟧.push(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)), ⟦2-char-id⟧.push(⟦2-char-id⟧.facet(⟦2-char-id⟧).scrollToMatch(⟦2-char-id⟧.main, ⟦2-char-id⟧))), ⟦2-char-id⟧.dispatch({
+        return ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.h.single(⟦2-char-id⟧.from, ⟦2-char-id⟧.to).map(⟦2-char-id⟧), ⟦2-char-id⟧.push(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)), ⟦2-char-id⟧.push(⟦2-char-id⟧.facet(⟦2-char-id⟧).scrollToMatch(⟦2-char-id⟧.main, ⟦2-char-id⟧))), ⟦2-char-id⟧.dispatch({
           changes: ⟦2-char-id⟧,
           selection: ⟦2-char-id⟧,
           effects: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 231 · Change · +1 / -1</summary>

```diff
@@ -5787,7 +5787,7 @@
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.state.phrase("replaced $ matches", ⟦2-char-id⟧.length) + ".";
         return ⟦2-char-id⟧.dispatch({
           changes: ⟦2-char-id⟧,
-          effects: ⟦2-char-id⟧.f.announce.of(⟦2-char-id⟧),
+          effects: ⟦2-char-id⟧.i.announce.of(⟦2-char-id⟧),
           userEvent: "input.replace.all"
         }), !0
       }));
```

</details>

<details>
<summary>Hunk 232 · Change · +7 / -7</summary>

```diff
@@ -5797,22 +5797,22 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      var ⟦2-char-id⟧, FJ, UJ, eJ, ⟦2-char-id⟧;
+      var ⟦2-char-id⟧, VB, yB, pB, ⟦2-char-id⟧;
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.selection.main,
         ⟦2-char-id⟧ = ⟦2-char-id⟧.empty || ⟦2-char-id⟧.to > ⟦2-char-id⟧.from + 100 ? "" : ⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧.from, ⟦2-char-id⟧.to);
       if (⟦2-char-id⟧ && !⟦2-char-id⟧) return ⟦2-char-id⟧;
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.facet(⟦2-char-id⟧);
       return new ⟦2-char-id⟧({
-        search: (null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.literal) && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧.literal) ? qJ : ⟦2-char-id⟧.replace(/\n/g, "\\n"),
-        caseSensitive: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.caseSensitive) && void 0 !== ⟦2-char-id⟧ ? FJ : ⟦2-char-id⟧.caseSensitive,
-        literal: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.literal) && void 0 !== ⟦2-char-id⟧ ? UJ : ⟦2-char-id⟧.literal,
-        regexp: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.regexp) && void 0 !== ⟦2-char-id⟧ ? eJ : ⟦2-char-id⟧.regexp,
-        wholeWord: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.wholeWord) && void 0 !== ⟦2-char-id⟧ ? XJ : ⟦2-char-id⟧.wholeWord
+        search: (null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.literal) && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧.literal) ? YB : ⟦2-char-id⟧.replace(/\n/g, "\\n"),
+        caseSensitive: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.caseSensitive) && void 0 !== ⟦2-char-id⟧ ? VB : ⟦2-char-id⟧.caseSensitive,
+        literal: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.literal) && void 0 !== ⟦2-char-id⟧ ? yB : ⟦2-char-id⟧.literal,
+        regexp: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.regexp) && void 0 !== ⟦2-char-id⟧ ? pB : ⟦2-char-id⟧.regexp,
+        wholeWord: null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.wholeWord) && void 0 !== ⟦2-char-id⟧ ? lB : ⟦2-char-id⟧.wholeWord
       })
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.u)(⟦2-char-id⟧, ⟦2-char-id⟧);
+      let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.z)(⟦2-char-id⟧, ⟦2-char-id⟧);
       return ⟦2-char-id⟧ && ⟦2-char-id⟧.dom.querySelector("[main-field]")
     }
 
```

</details>

<details>
<summary>Hunk 233 · Change · +2 / -2</summary>

```diff
@@ -5831,14 +5831,14 @@
             }), ⟦2-char-id⟧.focus(), ⟦2-char-id⟧.select()
           }
         } else ⟦2-char-id⟧.dispatch({
-          effects: [⟦2-char-id⟧.of(!0), ⟦2-char-id⟧ ? ⟦2-char-id⟧.of(⟦2-char-id⟧(⟦2-char-id⟧.state, ⟦2-char-id⟧.query.spec)) : ⟦2-char-id⟧.A.appendConfig.of(⟦2-char-id⟧)]
+          effects: [⟦2-char-id⟧.of(!0), ⟦2-char-id⟧ ? ⟦2-char-id⟧.of(⟦2-char-id⟧(⟦2-char-id⟧.state, ⟦2-char-id⟧.query.spec)) : ⟦2-char-id⟧.x.appendConfig.of(⟦2-char-id⟧)]
         });
         return !0
       },
       ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.state.field(⟦2-char-id⟧, !1);
         if (!⟦2-char-id⟧ || !⟦2-char-id⟧.panel) return !1;
-        let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.u)(⟦2-char-id⟧, ⟦2-char-id⟧);
+        let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.z)(⟦2-char-id⟧, ⟦2-char-id⟧);
         return ⟦2-char-id⟧ && ⟦2-char-id⟧.dom.contains(⟦2-char-id⟧.root.activeElement) && ⟦2-char-id⟧.focus(), ⟦2-char-id⟧.dispatch({
           effects: ⟦2-char-id⟧.of(!1)
         }), !0
```

</details>

<details>
<summary>Hunk 234 · Change · +3 / -3</summary>

```diff
@@ -5870,17 +5870,17 @@
             state: ⟦2-char-id⟧,
             dispatch: ⟦2-char-id⟧
           } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.selection;
-          if (⟦2-char-id⟧.ws.length > 1 || ⟦2-char-id⟧.main.empty) return !1;
+          if (⟦2-char-id⟧.ek.length > 1 || ⟦2-char-id⟧.main.empty) return !1;
           let {
             from: ⟦2-char-id⟧,
             to: ⟦2-char-id⟧
           } = ⟦2-char-id⟧.main, ⟦2-char-id⟧ = [], ⟦2-char-id⟧ = 0;
           for (let ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.doc, ⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧, ⟦2-char-id⟧)); !⟦2-char-id⟧.next().done;) {
             if (⟦2-char-id⟧.length > 1⟦2-char-id⟧) return !1;
-            ⟦2-char-id⟧.value.from == ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.length), ⟦2-char-id⟧.push(⟦2-char-id⟧.m.range(⟦2-char-id⟧.value.from, ⟦2-char-id⟧.value.to))
+            ⟦2-char-id⟧.value.from == ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.length), ⟦2-char-id⟧.push(⟦2-char-id⟧.h.range(⟦2-char-id⟧.value.from, ⟦2-char-id⟧.value.to))
           }
           return ⟦2-char-id⟧(⟦2-char-id⟧.update({
-            selection: ⟦2-char-id⟧.m.create(⟦2-char-id⟧, ⟦2-char-id⟧),
+            selection: ⟦2-char-id⟧.h.create(⟦2-char-id⟧, ⟦2-char-id⟧),
             userEvent: "select.search.matches"
           })), !0
         }
```

</details>

<details>
<summary>Hunk 235 · Change · +1 / -1</summary>

```diff
@@ -5892,7 +5892,7 @@
           } = ⟦2-char-id⟧, ⟦2-char-id⟧ = String(⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧.state.selection.main.head).number), {
             close: ⟦2-char-id⟧,
             result: ⟦2-char-id⟧
-          } = (0, ⟦2-char-id⟧.Y)(⟦2-char-id⟧, {
+          } = (0, ⟦2-char-id⟧.jb)(⟦2-char-id⟧, {
             label: ⟦2-char-id⟧.phrase("Go to line"),
             input: {
               type: "text",
```

</details>

<details>
<summary>Hunk 236 · Change · +4 / -4</summary>

```diff
@@ -5908,17 +5908,17 @@
               effects: ⟦2-char-id⟧
             });
             let ⟦2-char-id⟧ = ⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧.selection.main.head),
-              [, qJ, jJ, YJ, ⟦2-char-id⟧] = ⟦2-char-id⟧,
+              [, YB, gB, oB, ⟦2-char-id⟧] = ⟦2-char-id⟧,
               ⟦2-char-id⟧ = ⟦2-char-id⟧ ? +⟦2-char-id⟧.slice(1) : 0,
-              ⟦2-char-id⟧ = ⟦2-char-id⟧ ? +jJ : ⟦2-char-id⟧.number;
+              ⟦2-char-id⟧ = ⟦2-char-id⟧ ? +gB : ⟦2-char-id⟧.number;
             if (⟦2-char-id⟧ && ⟦2-char-id⟧) {
               let ⟦2-char-id⟧ = ⟦2-char-id⟧ / 100;
               ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧ * ("-" == ⟦2-char-id⟧ ? -1 : 1) + ⟦2-char-id⟧.number / ⟦2-char-id⟧.doc.lines), ⟦2-char-id⟧ = Math.round(⟦2-char-id⟧.doc.lines * ⟦2-char-id⟧)
             } else ⟦2-char-id⟧ && ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧ * ("-" == ⟦2-char-id⟧ ? -1 : 1) + ⟦2-char-id⟧.number);
             let ⟦2-char-id⟧ = ⟦2-char-id⟧.doc.line(Math.max(1, Math.min(⟦2-char-id⟧.doc.lines, ⟦2-char-id⟧))),
-              ⟦2-char-id⟧ = ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧.from + Math.max(0, Math.min(⟦2-char-id⟧, ⟦2-char-id⟧.length)));
+              ⟦2-char-id⟧ = ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧.from + Math.max(0, Math.min(⟦2-char-id⟧, ⟦2-char-id⟧.length)));
             ⟦2-char-id⟧.dispatch({
-              effects: [⟦2-char-id⟧, ⟦2-char-id⟧.f.scrollIntoView(⟦2-char-id⟧.from, {
+              effects: [⟦2-char-id⟧, ⟦2-char-id⟧.i.scrollIntoView(⟦2-char-id⟧.from, {
                 y: "center"
               })],
               selection: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 237 · Change · +1 / -1</summary>

```diff
@@ -5932,7 +5932,7 @@
             state: ⟦2-char-id⟧,
             dispatch: ⟦2-char-id⟧
           } = ⟦2-char-id⟧, {
-            ws: ⟦2-char-id⟧
+            ek: ⟦2-char-id⟧
           } = ⟦2-char-id⟧.selection;
           if (⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧.from === ⟦2-char-id⟧.to))) return (⟦2-char-id⟧ => {
             let {
```

</details>

<details>
<summary>Hunk 238 · Change · +1 / -1</summary>

```diff
@@ -5940,7 +5940,7 @@
               dispatch: ⟦2-char-id⟧
             } = ⟦2-char-id⟧, {
               selection: ⟦2-char-id⟧
-            } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.m.create(⟦2-char-id⟧.ws.map((⟦2-char-id⟧ => ⟦2-char-id⟧.wordAt(⟦2-char-id⟧.head) || ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧.head))), ⟦2-char-id⟧.mainIndex);
+            } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.h.create(⟦2-char-id⟧.ek.map((⟦2-char-id⟧ => ⟦2-char-id⟧.wordAt(⟦2-char-id⟧.head) || ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧.head))), ⟦2-char-id⟧.mainIndex);
             return !⟦2-char-id⟧.eq(⟦2-char-id⟧) && (⟦2-char-id⟧(⟦2-char-id⟧.update({
               selection: ⟦2-char-id⟧
             })), !0)
```

</details>

<details>
<summary>Hunk 239 · Change · +3 / -3</summary>

```diff
@@ -5949,13 +5949,13 @@
             dispatch: ⟦2-char-id⟧
           });
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧[0].from, ⟦2-char-id⟧[0].to);
-          if (⟦2-char-id⟧.selection.ws.some((⟦2-char-id⟧ => ⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧.from, ⟦2-char-id⟧.to) != ⟦2-char-id⟧))) return !1;
+          if (⟦2-char-id⟧.selection.ek.some((⟦2-char-id⟧ => ⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧.from, ⟦2-char-id⟧.to) != ⟦2-char-id⟧))) return !1;
           let ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
             let {
               main: ⟦2-char-id⟧,
-              ws: ⟦2-char-id⟧
+              ek: ⟦2-char-id⟧
             } = ⟦2-char-id⟧.selection, ⟦2-char-id⟧ = ⟦2-char-id⟧.wordAt(⟦2-char-id⟧.head), ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧.from == ⟦2-char-id⟧.from && ⟦2-char-id⟧.to == ⟦2-char-id⟧.to;
-            for (let ⟦2-char-id⟧ = !1, ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.doc, cJ, ⟦2-char-id⟧[⟦2-char-id⟧.length - 1].to);;) {
+            for (let ⟦2-char-id⟧ = !1, ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.doc, TB, ⟦2-char-id⟧[⟦2-char-id⟧.length - 1].to);;) {
               if (⟦2-char-id⟧.next(), !⟦2-char-id⟧.done) {
                 if (⟦2-char-id⟧ && ⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧.from == ⟦2-char-id⟧.value.from))) continue;
                 if (⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 240 · Change · +3 / -3</summary>

```diff
@@ -5965,12 +5965,12 @@
                 return ⟦2-char-id⟧.value
               }
               if (⟦2-char-id⟧) return null;
-              ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.doc, cJ, 0, Math.max(0, ⟦2-char-id⟧[⟦2-char-id⟧.length - 1].from - 1)), ⟦2-char-id⟧ = !0
+              ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.doc, TB, 0, Math.max(0, ⟦2-char-id⟧[⟦2-char-id⟧.length - 1].from - 1)), ⟦2-char-id⟧ = !0
             }
           }(⟦2-char-id⟧, ⟦2-char-id⟧);
           return !!⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧.update({
-            selection: ⟦2-char-id⟧.selection.addRange(⟦2-char-id⟧.m.range(⟦2-char-id⟧.from, ⟦2-char-id⟧.to), !1),
-            effects: ⟦2-char-id⟧.f.scrollIntoView(⟦2-char-id⟧.to)
+            selection: ⟦2-char-id⟧.selection.addRange(⟦2-char-id⟧.h.range(⟦2-char-id⟧.from, ⟦2-char-id⟧.to), !1),
+            effects: ⟦2-char-id⟧.i.scrollIntoView(⟦2-char-id⟧.to)
           })), !0)
         },
         preventDefault: !0
```

</details>

<details>
<summary>Hunk 241 · Change · +3 / -3</summary>

```diff
@@ -5980,15 +5980,15 @@
         this.view = ⟦2-char-id⟧;
         let ⟦2-char-id⟧ = this.query = ⟦2-char-id⟧.state.field(⟦2-char-id⟧).query.spec;
 
-        function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-          return (0, ⟦2-char-id⟧.d)("button", {
+        function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+          return (0, ⟦2-char-id⟧.e)("button", {
             class: "cm-button",
             name: ⟦2-char-id⟧,
             onclick: ⟦2-char-id⟧,
             type: "button"
           }, ⟦2-char-id⟧)
         }
-        this.commit = this.commit.bind(this), this.searchField = (0, ⟦2-char-id⟧.d)("input", {
+        this.commit = this.commit.bind(this), this.searchField = (0, ⟦2-char-id⟧.e)("input", {
           value: ⟦2-char-id⟧.search,
           placeholder: ⟦2-char-id⟧(⟦2-char-id⟧, "Find"),
           "aria-label": ⟦2-char-id⟧(⟦2-char-id⟧, "Find"),
```

</details>

<details>
<summary>Hunk 242 · Change · +1 / -1</summary>

```diff
@@ -5998,7 +5998,7 @@
           "main-field": "true",
           onchange: this.commit,
           onkeyup: this.commit
-        }), this.replaceField = (0, ⟦2-char-id⟧.d)("input", {
+        }), this.replaceField = (0, ⟦2-char-id⟧.e)("input", {
           value: ⟦2-char-id⟧.replace,
           placeholder: ⟦2-char-id⟧(⟦2-char-id⟧, "Replace"),
           "aria-label": ⟦2-char-id⟧(⟦2-char-id⟧, "Replace"),
```

</details>

<details>
<summary>Hunk 243 · Change · +5 / -5</summary>

```diff
@@ -6007,28 +6007,28 @@
           form: "",
           onchange: this.commit,
           onkeyup: this.commit
-        }), this.caseField = (0, ⟦2-char-id⟧.d)("input", {
+        }), this.caseField = (0, ⟦2-char-id⟧.e)("input", {
           type: "checkbox",
           name: "case",
           form: "",
           checked: ⟦2-char-id⟧.caseSensitive,
           onchange: this.commit
-        }), this.reField = (0, ⟦2-char-id⟧.d)("input", {
+        }), this.reField = (0, ⟦2-char-id⟧.e)("input", {
           type: "checkbox",
           name: "re",
           form: "",
           checked: ⟦2-char-id⟧.regexp,
           onchange: this.commit
-        }), this.wordField = (0, ⟦2-char-id⟧.d)("input", {
+        }), this.wordField = (0, ⟦2-char-id⟧.e)("input", {
           type: "checkbox",
           name: "word",
           form: "",
           checked: ⟦2-char-id⟧.wholeWord,
           onchange: this.commit
-        }), this.dom = (0, ⟦2-char-id⟧.d)("div", {
+        }), this.dom = (0, ⟦2-char-id⟧.e)("div", {
           onkeydown: ⟦2-char-id⟧ => this.keydown(⟦2-char-id⟧),
           class: "cm-search"
-        }, [this.searchField, ZJ("next", (() => ⟦2-char-id⟧(⟦2-char-id⟧)), [⟦2-char-id⟧(⟦2-char-id⟧, "next")]), ZJ("prev", (() => ⟦2-char-id⟧(⟦2-char-id⟧)), [⟦2-char-id⟧(⟦2-char-id⟧, "previous")]), ZJ("select", (() => ⟦2-char-id⟧(⟦2-char-id⟧)), [⟦2-char-id⟧(⟦2-char-id⟧, "all")]), (0, ⟦2-char-id⟧.d)("label", null, [this.caseField, cc(⟦2-char-id⟧, "match case")]), (0, ⟦2-char-id⟧.d)("label", null, [this.reField, cc(⟦2-char-id⟧, "regexp")]), (0, ⟦2-char-id⟧.d)("label", null, [this.wordField, cc(⟦2-char-id⟧, "by word")]), ...JJ.state.readOnly ? [] : [(0, ⟦2-char-id⟧.d)("br"), this.replaceField, ZJ("replace", (() => ⟦2-char-id⟧(⟦2-char-id⟧)), [⟦2-char-id⟧(⟦2-char-id⟧, "replace")]), ZJ("replaceAll", (() => ⟦2-char-id⟧(⟦2-char-id⟧)), [⟦2-char-id⟧(⟦2-char-id⟧, "replace all")])], (0, ⟦2-char-id⟧.d)("button", {
+        }, [this.searchField, dB("next", (() => ⟦2-char-id⟧(⟦2-char-id⟧)), [⟦2-char-id⟧(⟦2-char-id⟧, "next")]), dB("prev", (() => ⟦2-char-id⟧(⟦2-char-id⟧)), [⟦2-char-id⟧(⟦2-char-id⟧, "previous")]), dB("select", (() => ⟦2-char-id⟧(⟦2-char-id⟧)), [⟦2-char-id⟧(⟦2-char-id⟧, "all")]), (0, ⟦2-char-id⟧.e)("label", null, [this.caseField, TT(⟦2-char-id⟧, "match case")]), (0, ⟦2-char-id⟧.e)("label", null, [this.reField, TT(⟦2-char-id⟧, "regexp")]), (0, ⟦2-char-id⟧.e)("label", null, [this.wordField, TT(⟦2-char-id⟧, "by word")]), ...BB.state.readOnly ? [] : [(0, ⟦2-char-id⟧.e)("br"), this.replaceField, dB("replace", (() => ⟦2-char-id⟧(⟦2-char-id⟧)), [⟦2-char-id⟧(⟦2-char-id⟧, "replace")]), dB("replaceAll", (() => ⟦2-char-id⟧(⟦2-char-id⟧)), [⟦2-char-id⟧(⟦2-char-id⟧, "replace all")])], (0, ⟦2-char-id⟧.e)("button", {
           name: "close",
           onclick: () => ⟦2-char-id⟧(⟦2-char-id⟧),
           "aria-label": ⟦2-char-id⟧(⟦2-char-id⟧, "close"),
```

</details>

<details>
<summary>Hunk 244 · Change · +1 / -1</summary>

```diff
@@ -6048,7 +6048,7 @@
         }))
       }
       keydown(⟦2-char-id⟧) {
-        (0, ⟦2-char-id⟧.U)(this.view, JJ, "search-panel") ? ⟦2-char-id⟧.preventDefault(): 13 == ⟦2-char-id⟧.keyCode && ⟦2-char-id⟧.target == this.searchField ? (⟦2-char-id⟧.preventDefault(), (⟦2-char-id⟧.shiftKey ? TJ : ⟦2-char-id⟧)(this.view)) : 13 == ⟦2-char-id⟧.keyCode && ⟦2-char-id⟧.target == this.replaceField && (⟦2-char-id⟧.preventDefault(), uJ(this.view))
+        (0, ⟦2-char-id⟧.fb)(this.view, BB, "search-panel") ? ⟦2-char-id⟧.preventDefault(): 13 == ⟦2-char-id⟧.keyCode && ⟦2-char-id⟧.target == this.searchField ? (⟦2-char-id⟧.preventDefault(), (⟦2-char-id⟧.shiftKey ? WB : ⟦2-char-id⟧)(this.view)) : 13 == ⟦2-char-id⟧.keyCode && ⟦2-char-id⟧.target == this.replaceField && (⟦2-char-id⟧.preventDefault(), CB(this.view))
       }
       update(⟦2-char-id⟧) {
         for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.transactions)
```

</details>

<details>
<summary>Hunk 245 · Change · +3 / -3</summary>

```diff
@@ -6089,9 +6089,9 @@
           if (!⟦2-char-id⟧.test(⟦2-char-id⟧[⟦2-char-id⟧ - 1]) && ⟦2-char-id⟧.test(⟦2-char-id⟧[⟦2-char-id⟧])) {
             ⟦2-char-id⟧ = ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧);
             break
-          } return ⟦2-char-id⟧.f.announce.of(`${JJ.state.phrase("current match")}. ${jJ} ${JJ.state.phrase("on line")} ${eJ.number}.`)
-    }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.f.baseTheme({
+          } return ⟦2-char-id⟧.i.announce.of(`${BB.state.phrase("current match")}. ${gB} ${BB.state.phrase("on line")} ${pB.number}.`)
+    }
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.i.baseTheme({
         ".cm-panel.cm-search": {
           padding: "2px 6px 4px",
           position: "relative",
```

</details>

<details>
<summary>Hunk 246 · Change · +18 / -18</summary>

```diff
@@ -6129,37 +6129,37 @@
           backgroundColor: "#ff00ff8a"
         }
       }),
-      ⟦2-char-id⟧ = [⟦2-char-id⟧, ⟦2-char-id⟧.t.low(⟦2-char-id⟧), ⟦2-char-id⟧]
+      ⟦2-char-id⟧ = [⟦2-char-id⟧, ⟦2-char-id⟧.r.low(⟦2-char-id⟧), ⟦2-char-id⟧]
   },
-  40065: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  40040: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       c: () => ⟦2-char-id⟧,
-      e: () => ⟦2-char-id⟧,
       f: () => ⟦2-char-id⟧,
-      j: () => ⟦2-char-id⟧,
-      k: () => ⟦2-char-id⟧,
+      i: () => ⟦2-char-id⟧,
       l: () => ⟦2-char-id⟧,
-      m: () => ⟦2-char-id⟧,
       n: () => ⟦2-char-id⟧,
-      r: () => ⟦2-char-id⟧,
+      p: () => ⟦2-char-id⟧,
+      q: () => ⟦2-char-id⟧,
       u: () => ⟦2-char-id⟧,
-      w: () => ⟦2-char-id⟧,
+      x: () => ⟦2-char-id⟧,
       z: () => ⟦2-char-id⟧,
       D: () => ⟦2-char-id⟧,
-      A: () => ⟦2-char-id⟧,
-      F: () => ⟦2-char-id⟧,
-      G: () => ⟦2-char-id⟧,
+      H: () => ⟦2-char-id⟧,
+      N: () => ⟦2-char-id⟧,
       K: () => ⟦2-char-id⟧,
-      O: () => ⟦2-char-id⟧,
-      Q: () => ⟦2-char-id⟧,
+      P: () => ⟦2-char-id⟧,
+      R: () => ⟦2-char-id⟧,
       S: () => ⟦2-char-id⟧,
-      T: () => ⟦2-char-id⟧,
-      U: () => ⟦2-char-id⟧,
-      Y: () => ⟦2-char-id⟧,
+      V: () => ⟦2-char-id⟧,
+      W: () => ⟦2-char-id⟧,
       _: () => ⟦2-char-id⟧,
-      ab: () => ⟦2-char-id⟧
+      bb: () => ⟦2-char-id⟧,
+      fb: () => ⟦2-char-id⟧,
+      jb: () => ⟦2-char-id⟧,
+      kb: () => ⟦2-char-id⟧,
+      ob: () => ⟦2-char-id⟧
     });
-    for (var ⟦2-char-id⟧ = ⟦2-char-id⟧(40060), ⟦2-char-id⟧ = ⟦2-char-id⟧(40068), ⟦2-char-id⟧ = {
+    for (var ⟦2-char-id⟧ = ⟦2-char-id⟧(40036), ⟦2-char-id⟧ = ⟦2-char-id⟧(40043), ⟦2-char-id⟧ = {
         8: "Backspace",
         9: "Tab",
         10: "Enter",
```

</details>

<details>
<summary>Hunk 247 · Change · +1 / -1</summary>

```diff
@@ -6241,7 +6241,7 @@
     for (⟦2-char-id⟧ = 1; ⟦2-char-id⟧ <= 24; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧ + 111] = "F" + ⟦2-char-id⟧;
     for (⟦2-char-id⟧ = 65; ⟦2-char-id⟧ <= 90; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧] = String.fromCharCode(⟦2-char-id⟧ + 32), ⟦2-char-id⟧[⟦2-char-id⟧] = String.fromCharCode(⟦2-char-id⟧);
     for (var ⟦2-char-id⟧ in ⟦2-char-id⟧) ⟦2-char-id⟧.hasOwnProperty(⟦2-char-id⟧) || (⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧[⟦2-char-id⟧]);
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(40070);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(40051);
     let ⟦2-char-id⟧ = "undefined" != typeof navigator ? navigator : {
         userAgent: "",
         vendor: "",
```

</details>

<details>
<summary>Hunk 248 · Change · +1 / -1</summary>

```diff
@@ -6286,7 +6286,7 @@
     }
     const ⟦2-char-id⟧ = Object.create(null);
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       if (⟦2-char-id⟧ == ⟦2-char-id⟧) return !0;
       ⟦2-char-id⟧ || (⟦2-char-id⟧ = ⟦2-char-id⟧), ⟦2-char-id⟧ || (⟦2-char-id⟧ = ⟦2-char-id⟧);
       let ⟦2-char-id⟧ = Object.keys(⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 249 · Change · +1 / -1</summary>

```diff
@@ -6297,7 +6297,7 @@
       return !0
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = !1;
       if (⟦2-char-id⟧)
         for (let ⟦2-char-id⟧ in ⟦2-char-id⟧) ⟦2-char-id⟧ && ⟦2-char-id⟧ in ⟦2-char-id⟧ || (⟦2-char-id⟧ = !0, "style" == ⟦2-char-id⟧ ? ⟦2-char-id⟧.style.cssText = "" : ⟦2-char-id⟧.removeAttribute(⟦2-char-id⟧));
```

</details>

<details>
<summary>Hunk 250 · Change · +1 / -1</summary>

```diff
@@ -6318,7 +6318,7 @@
       eq(⟦2-char-id⟧) {
         return !1
       }
-      updateDOM(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      updateDOM(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         return !1
       }
       compare(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 251 · Change · +1 / -1</summary>

```diff
@@ -6333,7 +6333,7 @@
       ignoreEvent(⟦2-char-id⟧) {
         return !0
       }
-      coordsAt(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      coordsAt(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         return null
       }
       get isHidden() {
```

</details>

<details>
<summary>Hunk 252 · Change · +3 / -3</summary>

```diff
@@ -6345,10 +6345,10 @@
       destroy(⟦2-char-id⟧) {}
     }
     var ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
-      return ⟦2-char-id⟧[⟦2-char-id⟧.Text = 0] = "Text", ⟦2-char-id⟧[⟦2-char-id⟧.WidgetBefore = 1] = "WidgetBefore", ⟦2-char-id⟧[⟦2-char-id⟧.WidgetAfter = 2] = "WidgetAfter", ⟦2-char-id⟧[⟦2-char-id⟧.WidgetRange = 3] = "WidgetRange", JJ
+      return ⟦2-char-id⟧[⟦2-char-id⟧.Text = 0] = "Text", ⟦2-char-id⟧[⟦2-char-id⟧.WidgetBefore = 1] = "WidgetBefore", ⟦2-char-id⟧[⟦2-char-id⟧.WidgetAfter = 2] = "WidgetAfter", ⟦2-char-id⟧[⟦2-char-id⟧.WidgetRange = 3] = "WidgetRange", BB
     }(⟦2-char-id⟧ || (⟦2-char-id⟧ = {}));
-    class ⟦2-char-id⟧ extends ⟦2-char-id⟧.x {
-      constructor(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+    class ⟦2-char-id⟧ extends ⟦2-char-id⟧.w {
+      constructor(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         super(), this.startSide = ⟦2-char-id⟧, this.endSide = ⟦2-char-id⟧, this.widget = ⟦2-char-id⟧, this.spec = ⟦2-char-id⟧
       }
       get heightRelevant() {
```

</details>

<details>
<summary>Hunk 253 · Change · +2 / -2</summary>

```diff
@@ -6360,10 +6360,10 @@
       static widget(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = Math.max(-1⟦2-char-id⟧, Math.min(1⟦2-char-id⟧, ⟦2-char-id⟧.side || 0)),
           ⟦2-char-id⟧ = !!⟦2-char-id⟧.block;
-        return ⟦2-char-id⟧ += ⟦2-char-id⟧ && !⟦2-char-id⟧.inlineOrder ? ⟦2-char-id⟧ > 0 ? 3e8 : -4e8 : ⟦2-char-id⟧ > 0 ? 1e8 : -1⟦2-char-id⟧, new ⟦2-char-id⟧(⟦2-char-id⟧, cJ, cJ, ZJ, ⟦2-char-id⟧.widget || null, !1)
+        return ⟦2-char-id⟧ += ⟦2-char-id⟧ && !⟦2-char-id⟧.inlineOrder ? ⟦2-char-id⟧ > 0 ? 3e8 : -4e8 : ⟦2-char-id⟧ > 0 ? 1e8 : -1⟦2-char-id⟧, new ⟦2-char-id⟧(⟦2-char-id⟧, TB, TB, dB, ⟦2-char-id⟧.widget || null, !1)
       }
       static replace(⟦2-char-id⟧) {
-        let ⟦2-char-id⟧, ZJ, ⟦2-char-id⟧ = !!⟦2-char-id⟧.block;
+        let ⟦2-char-id⟧, dB, ⟦2-char-id⟧ = !!⟦2-char-id⟧.block;
         if (⟦2-char-id⟧.isBlockGap) ⟦2-char-id⟧ = -5⟦2-char-id⟧, ⟦2-char-id⟧ = 4⟦2-char-id⟧;
         else {
           let {
```

</details>

<details>
<summary>Hunk 254 · Change · +3 / -3</summary>

```diff
@@ -6372,20 +6372,20 @@
           } = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
           ⟦2-char-id⟧ = (⟦2-char-id⟧ ? ⟦2-char-id⟧ ? -3e8 : -1 : 5⟦2-char-id⟧) - 1, ⟦2-char-id⟧ = 1 + (⟦2-char-id⟧ ? ⟦2-char-id⟧ ? 2e8 : 1 : -6⟦2-char-id⟧)
         }
-        return new ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧.widget || null, !0)
+        return new ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧.widget || null, !0)
       }
       static line(⟦2-char-id⟧) {
         return new ⟦2-char-id⟧(⟦2-char-id⟧)
       }
       static set(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-        return ⟦2-char-id⟧.v.of(⟦2-char-id⟧, ⟦2-char-id⟧)
+        return ⟦2-char-id⟧.u.of(⟦2-char-id⟧, ⟦2-char-id⟧)
       }
       hasHeight() {
         return !!this.widget && this.widget.estimatedHeight > -1
       }
     }
-    ⟦2-char-id⟧.none = ⟦2-char-id⟧.v.empty;
+    ⟦2-char-id⟧.none = ⟦2-char-id⟧.u.empty;
     class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧) {
         let {
```

</details>

<details>
<summary>Hunk 255 · Change · +3 / -3</summary>

```diff
@@ -6421,10 +6421,10 @@
         return super.range(⟦2-char-id⟧, ⟦2-char-id⟧)
       }
     }
-    ⟦2-char-id⟧.prototype.mapMode = ⟦2-char-id⟧.r.TrackBefore, ⟦2-char-id⟧.prototype.point = !0;
+    ⟦2-char-id⟧.prototype.mapMode = ⟦2-char-id⟧.o.TrackBefore, ⟦2-char-id⟧.prototype.point = !0;
     class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, UJ, eJ, ⟦2-char-id⟧) {
-        super(⟦2-char-id⟧, ZJ, eJ, ⟦2-char-id⟧), this.block = ⟦2-char-id⟧, this.isReplace = ⟦2-char-id⟧, this.mapMode = ⟦2-char-id⟧ ? ⟦2-char-id⟧ <= 0 ? ⟦2-char-id⟧.r.TrackBefore : ⟦2-char-id⟧.r.TrackAfter : ⟦2-char-id⟧.r.TrackDel
+      constructor(⟦2-char-id⟧, TB, dB, yB, pB, ⟦2-char-id⟧) {
+        super(⟦2-char-id⟧, dB, pB, ⟦2-char-id⟧), this.block = ⟦2-char-id⟧, this.isReplace = ⟦2-char-id⟧, this.mapMode = ⟦2-char-id⟧ ? ⟦2-char-id⟧ <= 0 ? ⟦2-char-id⟧.o.TrackBefore : ⟦2-char-id⟧.o.TrackAfter : ⟦2-char-id⟧.o.TrackDel
       }
       get type() {
         return this.startSide != this.endSide ? ⟦2-char-id⟧.WidgetRange : this.startSide <= 0 ? ⟦2-char-id⟧.WidgetBefore : ⟦2-char-id⟧.WidgetAfter
```

</details>

<details>
<summary>Hunk 256 · Change · +1 / -1</summary>

```diff
@@ -6434,7 +6434,7 @@
       }
       ⟦2-char-id⟧(⟦2-char-id⟧) {
         return ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ && (⟦2-char-id⟧ = this.widget, ⟦2-char-id⟧ = ⟦2-char-id⟧.widget, ⟦2-char-id⟧ == ⟦2-char-id⟧ || !!(⟦2-char-id⟧ && ⟦2-char-id⟧ && ⟦2-char-id⟧.compare(⟦2-char-id⟧))) && this.block == ⟦2-char-id⟧.block && this.startSide == ⟦2-char-id⟧.startSide && this.endSide == ⟦2-char-id⟧.endSide;
-        var ⟦2-char-id⟧, ZJ
+        var ⟦2-char-id⟧, dB
       }
       range(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 257 · Change · +7 / -7</summary>

```diff
@@ -6451,18 +6451,18 @@
           inclusiveEnd: ⟦2-char-id⟧
         } = ⟦2-char-id⟧;
       return null == ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.inclusive), null == ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.inclusive), {
-        start: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧,
-        end: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? FJ : ⟦2-char-id⟧
-      }
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+        start: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧,
+        end: null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? VB : ⟦2-char-id⟧
+      }
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
         ⟦2-char-id⟧ = ⟦2-char-id⟧.length - 1;
       ⟦2-char-id⟧ >= 0 && ⟦2-char-id⟧[⟦2-char-id⟧] + ⟦2-char-id⟧ >= ⟦2-char-id⟧ ? ⟦2-char-id⟧[⟦2-char-id⟧] = Math.max(⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧) : ⟦2-char-id⟧.push(⟦2-char-id⟧, ⟦2-char-id⟧)
     }
     ⟦2-char-id⟧.prototype.point = !0;
-    class ⟦2-char-id⟧ extends ⟦2-char-id⟧.x {
+    class ⟦2-char-id⟧ extends ⟦2-char-id⟧.w {
       constructor(⟦2-char-id⟧, ⟦2-char-id⟧) {
         super(), this.tagName = ⟦2-char-id⟧, this.attributes = ⟦2-char-id⟧
       }
```

</details>

<details>
<summary>Hunk 258 · Change · +2 / -2</summary>

```diff
@@ -6474,13 +6474,13 @@
       }
       static set(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-        return ⟦2-char-id⟧.v.of(⟦2-char-id⟧, ⟦2-char-id⟧)
+        return ⟦2-char-id⟧.u.of(⟦2-char-id⟧, ⟦2-char-id⟧)
       }
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let ⟦2-char-id⟧;
-      return ⟦2-char-id⟧ = 11 == ⟦2-char-id⟧.nodeType ? ⟦2-char-id⟧.getSelection ? JJ : ⟦2-char-id⟧.ownerDocument : ⟦2-char-id⟧, ⟦2-char-id⟧.getSelection()
+      return ⟦2-char-id⟧ = 11 == ⟦2-char-id⟧.nodeType ? ⟦2-char-id⟧.getSelection ? BB : ⟦2-char-id⟧.ownerDocument : ⟦2-char-id⟧, ⟦2-char-id⟧.getSelection()
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 259 · Change · +2 / -2</summary>

```diff
@@ -6500,8 +6500,8 @@
       return 3 == ⟦2-char-id⟧.nodeType ? ⟦2-char-id⟧(⟦2-char-id⟧, 0, ⟦2-char-id⟧.nodeValue.length).getClientRects() : 1 == ⟦2-char-id⟧.nodeType ? ⟦2-char-id⟧.getClientRects() : []
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-      return !!⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, -1) || ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, 1))
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+      return !!⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, -1) || ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, 1))
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 260 · Change · +1 / -1</summary>

```diff
@@ -6513,7 +6513,7 @@
       return 1 == ⟦2-char-id⟧.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(⟦2-char-id⟧.nodeName)
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
       for (;;) {
         if (⟦2-char-id⟧ == ⟦2-char-id⟧ && ⟦2-char-id⟧ == ⟦2-char-id⟧) return !0;
         if (⟦2-char-id⟧ == (⟦2-char-id⟧ < 0 ? 0 : ⟦2-char-id⟧(⟦2-char-id⟧))) {
```

</details>

<details>
<summary>Hunk 261 · Change · +3 / -3</summary>

```diff
@@ -6595,9 +6595,9 @@
           anchorNode: ⟦2-char-id⟧,
           focusNode: ⟦2-char-id⟧
         } = ⟦2-char-id⟧;
-        this.set(⟦2-char-id⟧, Math.min(⟦2-char-id⟧.anchorOffset, ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧) : 0), ZJ, Math.min(⟦2-char-id⟧.focusOffset, ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧) : 0))
-      }
-      set(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+        this.set(⟦2-char-id⟧, Math.min(⟦2-char-id⟧.anchorOffset, ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧) : 0), dB, Math.min(⟦2-char-id⟧.focusOffset, ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧) : 0))
+      }
+      set(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         this.anchorNode = ⟦2-char-id⟧, this.anchorOffset = ⟦2-char-id⟧, this.focusNode = ⟦2-char-id⟧, this.focusOffset = ⟦2-char-id⟧
       }
     }
```

</details>

<details>
<summary>Hunk 262 · Change · +4 / -4</summary>

```diff
@@ -6628,10 +6628,10 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ⟦2-char-id⟧,
         ⟦2-char-id⟧ = ⟦2-char-id⟧ || (⟦2-char-id⟧ = document.createRange());
-      return ⟦2-char-id⟧.setEnd(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.setStart(⟦2-char-id⟧, ⟦2-char-id⟧), FJ
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧.setEnd(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.setStart(⟦2-char-id⟧, ⟦2-char-id⟧), VB
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = {
         key: ⟦2-char-id⟧,
         code: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 263 · Change · +3 / -3</summary>

```diff
@@ -6693,14 +6693,14 @@
         this.node = ⟦2-char-id⟧, this.offset = ⟦2-char-id⟧, this.precise = ⟦2-char-id⟧
       }
       static before(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        return new ⟦2-char-id⟧(⟦2-char-id⟧.parentNode, uJ(⟦2-char-id⟧), ⟦2-char-id⟧)
+        return new ⟦2-char-id⟧(⟦2-char-id⟧.parentNode, CB(⟦2-char-id⟧), ⟦2-char-id⟧)
       }
       static after(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        return new ⟦2-char-id⟧(⟦2-char-id⟧.parentNode, uJ(⟦2-char-id⟧) + 1, ⟦2-char-id⟧)
+        return new ⟦2-char-id⟧(⟦2-char-id⟧.parentNode, CB(⟦2-char-id⟧) + 1, ⟦2-char-id⟧)
       }
     }
     var ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
-      return ⟦2-char-id⟧[⟦2-char-id⟧.LTR = 0] = "LTR", ⟦2-char-id⟧[⟦2-char-id⟧.RTL = 1] = "RTL", JJ
+      return ⟦2-char-id⟧[⟦2-char-id⟧.LTR = 0] = "LTR", ⟦2-char-id⟧[⟦2-char-id⟧.RTL = 1] = "RTL", BB
     }(⟦2-char-id⟧ || (⟦2-char-id⟧ = {}));
     const ⟦2-char-id⟧ = ⟦2-char-id⟧.LTR,
       ⟦2-char-id⟧ = ⟦2-char-id⟧.RTL;
```

</details>

<details>
<summary>Hunk 264 · Change · +3 / -3</summary>

```diff
@@ -6726,9 +6726,9 @@
     const ⟦2-char-id⟧ = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
     class ⟦2-char-id⟧ {
       get dir() {
-        return this.level % 2 ? hc : ⟦2-char-id⟧
-      }
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+        return this.level % 2 ? kT : ⟦2-char-id⟧
+      }
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         this.from = ⟦2-char-id⟧, this.to = ⟦2-char-id⟧, this.level = ⟦2-char-id⟧
       }
       side(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 265 · Change · +2 / -2</summary>

```diff
@@ -6737,13 +6737,13 @@
       forward(⟦2-char-id⟧, ⟦2-char-id⟧) {
         return ⟦2-char-id⟧ == (this.dir == ⟦2-char-id⟧)
       }
-      static find(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      static find(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = -1;
         for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
           if (⟦2-char-id⟧.from <= ⟦2-char-id⟧ && ⟦2-char-id⟧.to >= ⟦2-char-id⟧) {
             if (⟦2-char-id⟧.level == ⟦2-char-id⟧) return ⟦2-char-id⟧;
-            (⟦2-char-id⟧ < 0 || (0 != ⟦2-char-id⟧ ? ⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧.from < cJ : ⟦2-char-id⟧.to > cJ : ⟦2-char-id⟧[⟦2-char-id⟧].level > ⟦2-char-id⟧.level)) && (⟦2-char-id⟧ = ⟦2-char-id⟧)
+            (⟦2-char-id⟧ < 0 || (0 != ⟦2-char-id⟧ ? ⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧.from < TB : ⟦2-char-id⟧.to > TB : ⟦2-char-id⟧[⟦2-char-id⟧].level > ⟦2-char-id⟧.level)) && (⟦2-char-id⟧ = ⟦2-char-id⟧)
           }
         }
         if (⟦2-char-id⟧ < 0) throw new RangeError("Index out of range");
```

</details>

<details>
<summary>Hunk 266 · Change · +1 / -1</summary>

```diff
@@ -6762,7 +6762,7 @@
     }
     const ⟦2-char-id⟧ = [];
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, eJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, yB, pB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧ % 2 ? 2 : 1;
       if (⟦2-char-id⟧ % 2 == ⟦2-char-id⟧ % 2)
         for (let ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧;) {
```

</details>

<details>
<summary>Hunk 267 · Change · +2 / -2</summary>

```diff
@@ -6773,9 +6773,9 @@
             ⟦2-char-id⟧ != ⟦2-char-id⟧ && (⟦2-char-id⟧ = !1, ⟦2-char-id⟧ = 16 == ⟦2-char-id⟧)
           }
           let ⟦2-char-id⟧ = ⟦2-char-id⟧ || 1 != ⟦2-char-id⟧ ? null : [],
-            ⟦2-char-id⟧ = ⟦2-char-id⟧ ? FJ : ⟦2-char-id⟧ + 1,
+            ⟦2-char-id⟧ = ⟦2-char-id⟧ ? VB : ⟦2-char-id⟧ + 1,
             ⟦2-char-id⟧ = ⟦2-char-id⟧;
-          JJ: for (;;)
+          BB: for (;;)
             if (⟦2-char-id⟧ < ⟦2-char-id⟧.length && ⟦2-char-id⟧ == ⟦2-char-id⟧[⟦2-char-id⟧].from) {
               if (⟦2-char-id⟧) break ⟦2-char-id⟧;
               let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
```

</details>

<details>
<summary>Hunk 268 · Change · +3 / -3</summary>

```diff
@@ -6790,13 +6790,13 @@
                 }
               if (⟦2-char-id⟧++, ⟦2-char-id⟧) ⟦2-char-id⟧.push(⟦2-char-id⟧);
               else {
-                ⟦2-char-id⟧.from > ⟦2-char-id⟧ && ⟦2-char-id⟧.push(new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.from, ⟦2-char-id⟧)), Vc(⟦2-char-id⟧, ⟦2-char-id⟧.direction == ⟦2-char-id⟧ != !(⟦2-char-id⟧ % 2) ? ⟦2-char-id⟧ + 1 : ⟦2-char-id⟧, UJ, ⟦2-char-id⟧.inner, ⟦2-char-id⟧.from, ⟦2-char-id⟧.to, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.to
+                ⟦2-char-id⟧.from > ⟦2-char-id⟧ && ⟦2-char-id⟧.push(new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.from, ⟦2-char-id⟧)), fT(⟦2-char-id⟧, ⟦2-char-id⟧.direction == ⟦2-char-id⟧ != !(⟦2-char-id⟧ % 2) ? ⟦2-char-id⟧ + 1 : ⟦2-char-id⟧, yB, ⟦2-char-id⟧.inner, ⟦2-char-id⟧.from, ⟦2-char-id⟧.to, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.to
               }
               ⟦2-char-id⟧ = ⟦2-char-id⟧.to
             } else {
-              if (⟦2-char-id⟧ == ⟦2-char-id⟧ || (⟦2-char-id⟧ ? ⟦2-char-id⟧[⟦2-char-id⟧] != AJ : ⟦2-char-id⟧[⟦2-char-id⟧] == ⟦2-char-id⟧)) break;
+              if (⟦2-char-id⟧ == ⟦2-char-id⟧ || (⟦2-char-id⟧ ? ⟦2-char-id⟧[⟦2-char-id⟧] != JB : ⟦2-char-id⟧[⟦2-char-id⟧] == ⟦2-char-id⟧)) break;
               ⟦2-char-id⟧++
-            } ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, qJ, sJ, ⟦2-char-id⟧ + 1, UJ, hJ, ⟦2-char-id⟧) : ⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧.push(new ⟦2-char-id⟧(⟦2-char-id⟧, sJ, ⟦2-char-id⟧)), ⟦2-char-id⟧ = ⟦2-char-id⟧
+            } ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, YB, OB, ⟦2-char-id⟧ + 1, yB, kB, ⟦2-char-id⟧) : ⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧.push(new ⟦2-char-id⟧(⟦2-char-id⟧, OB, ⟦2-char-id⟧)), ⟦2-char-id⟧ = ⟦2-char-id⟧
         } else
           for (let ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.length; ⟦2-char-id⟧ > ⟦2-char-id⟧;) {
             let ⟦2-char-id⟧ = !0,
```

</details>

<details>
<summary>Hunk 269 · Change · +2 / -2</summary>

```diff
@@ -6806,9 +6806,9 @@
               ⟦2-char-id⟧ != ⟦2-char-id⟧ && (⟦2-char-id⟧ = !1, ⟦2-char-id⟧ = 16 == ⟦2-char-id⟧)
             }
             let ⟦2-char-id⟧ = ⟦2-char-id⟧ || 1 != ⟦2-char-id⟧ ? null : [],
-              ⟦2-char-id⟧ = ⟦2-char-id⟧ ? FJ : ⟦2-char-id⟧ + 1,
+              ⟦2-char-id⟧ = ⟦2-char-id⟧ ? VB : ⟦2-char-id⟧ + 1,
               ⟦2-char-id⟧ = ⟦2-char-id⟧;
-            JJ: for (;;)
+            BB: for (;;)
               if (⟦2-char-id⟧ && ⟦2-char-id⟧ == ⟦2-char-id⟧[⟦2-char-id⟧ - 1].to) {
                 if (⟦2-char-id⟧) break ⟦2-char-id⟧;
                 let ⟦2-char-id⟧ = ⟦2-char-id⟧[--⟦2-char-id⟧];
```

</details>

<details>
<summary>Hunk 270 · Change · +10 / -10</summary>

```diff
@@ -6823,30 +6823,30 @@
                   }
                 if (⟦2-char-id⟧) ⟦2-char-id⟧.push(⟦2-char-id⟧);
                 else {
-                  ⟦2-char-id⟧.to < ⟦2-char-id⟧ && ⟦2-char-id⟧.push(new ⟦2-char-id⟧(⟦2-char-id⟧.to, qJ, ⟦2-char-id⟧)), Vc(⟦2-char-id⟧, ⟦2-char-id⟧.direction == ⟦2-char-id⟧ != !(⟦2-char-id⟧ % 2) ? ⟦2-char-id⟧ + 1 : ⟦2-char-id⟧, UJ, ⟦2-char-id⟧.inner, ⟦2-char-id⟧.from, ⟦2-char-id⟧.to, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.from
+                  ⟦2-char-id⟧.to < ⟦2-char-id⟧ && ⟦2-char-id⟧.push(new ⟦2-char-id⟧(⟦2-char-id⟧.to, YB, ⟦2-char-id⟧)), fT(⟦2-char-id⟧, ⟦2-char-id⟧.direction == ⟦2-char-id⟧ != !(⟦2-char-id⟧ % 2) ? ⟦2-char-id⟧ + 1 : ⟦2-char-id⟧, yB, ⟦2-char-id⟧.inner, ⟦2-char-id⟧.from, ⟦2-char-id⟧.to, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.from
                 }
                 ⟦2-char-id⟧ = ⟦2-char-id⟧.from
               } else {
-                if (⟦2-char-id⟧ == ⟦2-char-id⟧ || (⟦2-char-id⟧ ? ⟦2-char-id⟧[⟦2-char-id⟧ - 1] != AJ : ⟦2-char-id⟧[⟦2-char-id⟧ - 1] == ⟦2-char-id⟧)) break;
+                if (⟦2-char-id⟧ == ⟦2-char-id⟧ || (⟦2-char-id⟧ ? ⟦2-char-id⟧[⟦2-char-id⟧ - 1] != JB : ⟦2-char-id⟧[⟦2-char-id⟧ - 1] == ⟦2-char-id⟧)) break;
                 ⟦2-char-id⟧--
-              } ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, sJ, qJ, ⟦2-char-id⟧ + 1, UJ, hJ, ⟦2-char-id⟧) : ⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧.push(new ⟦2-char-id⟧(⟦2-char-id⟧, qJ, ⟦2-char-id⟧)), ⟦2-char-id⟧ = ⟦2-char-id⟧
-          }
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, eJ, ⟦2-char-id⟧) {
+              } ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, OB, YB, ⟦2-char-id⟧ + 1, yB, kB, ⟦2-char-id⟧) : ⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧.push(new ⟦2-char-id⟧(⟦2-char-id⟧, YB, ⟦2-char-id⟧)), ⟦2-char-id⟧ = ⟦2-char-id⟧
+          }
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, yB, pB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧ % 2 ? 2 : 1;
-      ! function(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+      ! function(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
         for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ <= ⟦2-char-id⟧.length; ⟦2-char-id⟧++) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧[⟦2-char-id⟧ - 1].to : ⟦2-char-id⟧,
             ⟦2-char-id⟧ = ⟦2-char-id⟧ < ⟦2-char-id⟧.length ? ⟦2-char-id⟧[⟦2-char-id⟧].from : ⟦2-char-id⟧,
             ⟦2-char-id⟧ = ⟦2-char-id⟧ ? 256 : ⟦2-char-id⟧;
           for (let ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.charCodeAt(⟦2-char-id⟧));
-            512 == ⟦2-char-id⟧ ? ⟦2-char-id⟧ = ZJ : 8 == ⟦2-char-id⟧ && 4 == ⟦2-char-id⟧ && (⟦2-char-id⟧ = 16), ⟦2-char-id⟧[⟦2-char-id⟧] = 4 == ⟦2-char-id⟧ ? 2 : ⟦2-char-id⟧, 7 & ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧
+            512 == ⟦2-char-id⟧ ? ⟦2-char-id⟧ = dB : 8 == ⟦2-char-id⟧ && 4 == ⟦2-char-id⟧ && (⟦2-char-id⟧ = 16), ⟦2-char-id⟧[⟦2-char-id⟧] = 4 == ⟦2-char-id⟧ ? 2 : ⟦2-char-id⟧, 7 & ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧
           }
           for (let ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
-            if (128 == ⟦2-char-id⟧) ⟦2-char-id⟧ < ⟦2-char-id⟧ - 1 && ⟦2-char-id⟧ == ⟦2-char-id⟧[⟦2-char-id⟧ + 1] && 24 & ⟦2-char-id⟧ ? ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧] = cJ : ⟦2-char-id⟧[⟦2-char-id⟧] = 256;
+            if (128 == ⟦2-char-id⟧) ⟦2-char-id⟧ < ⟦2-char-id⟧ - 1 && ⟦2-char-id⟧ == ⟦2-char-id⟧[⟦2-char-id⟧ + 1] && 24 & ⟦2-char-id⟧ ? ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧] = TB : ⟦2-char-id⟧[⟦2-char-id⟧] = 256;
             else if (64 == ⟦2-char-id⟧) {
               let ⟦2-char-id⟧ = ⟦2-char-id⟧ + 1;
               for (; ⟦2-char-id⟧ < ⟦2-char-id⟧ && 64 == ⟦2-char-id⟧[⟦2-char-id⟧];) ⟦2-char-id⟧++;
```

</details>

<details>
<summary>Hunk 271 · Change · +4 / -4</summary>

```diff
@@ -6857,19 +6857,19 @@
             ⟦2-char-id⟧ = ⟦2-char-id⟧, 7 & ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧)
           }
         }
-      }(⟦2-char-id⟧, UJ, eJ, FJ, ⟦2-char-id⟧),
-      function(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+      }(⟦2-char-id⟧, yB, pB, VB, ⟦2-char-id⟧),
+      function(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = 1 == ⟦2-char-id⟧ ? 2 : 1;
         for (let ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ <= ⟦2-char-id⟧.length; ⟦2-char-id⟧++) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧[⟦2-char-id⟧ - 1].to : ⟦2-char-id⟧,
             ⟦2-char-id⟧ = ⟦2-char-id⟧ < ⟦2-char-id⟧.length ? ⟦2-char-id⟧[⟦2-char-id⟧].from : ⟦2-char-id⟧;
-          for (let ⟦2-char-id⟧, ZJ, FJ, ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++)
+          for (let ⟦2-char-id⟧, dB, VB, ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++)
             if (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ = ⟦2-char-id⟧.charCodeAt(⟦2-char-id⟧)])
               if (⟦2-char-id⟧ < 0) {
                 for (let ⟦2-char-id⟧ = ⟦2-char-id⟧ - 3; ⟦2-char-id⟧ >= 0; ⟦2-char-id⟧ -= 3)
                   if (⟦2-char-id⟧[⟦2-char-id⟧ + 1] == -⟦2-char-id⟧) {
                     let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 2],
-                      ⟦2-char-id⟧ = 2 & ⟦2-char-id⟧ ? UJ : 4 & ⟦2-char-id⟧ ? 1 & ⟦2-char-id⟧ ? eJ : UJ : 0;
+                      ⟦2-char-id⟧ = 2 & ⟦2-char-id⟧ ? yB : 4 & ⟦2-char-id⟧ ? 1 & ⟦2-char-id⟧ ? pB : yB : 0;
                     ⟦2-char-id⟧ && (⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧[⟦2-char-id⟧[⟦2-char-id⟧]] = ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧;
                     break
                   }
```

</details>

<details>
<summary>Hunk 272 · Change · +2 / -2</summary>

```diff
@@ -6891,8 +6891,8 @@
             }
           }
         }
-      }(⟦2-char-id⟧, UJ, eJ, FJ, ⟦2-char-id⟧),
-      function(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      }(⟦2-char-id⟧, yB, pB, VB, ⟦2-char-id⟧),
+      function(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         for (let ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ <= ⟦2-char-id⟧.length; ⟦2-char-id⟧++) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧[⟦2-char-id⟧ - 1].to : ⟦2-char-id⟧,
             ⟦2-char-id⟧ = ⟦2-char-id⟧ < ⟦2-char-id⟧.length ? ⟦2-char-id⟧[⟦2-char-id⟧].from : ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 273 · Change · +8 / -8</summary>

```diff
@@ -6914,28 +6914,28 @@
             } else ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧++
           }
         }
-      }(⟦2-char-id⟧, eJ, FJ, ⟦2-char-id⟧), Ec(⟦2-char-id⟧, UJ, eJ, cJ, ZJ, FJ, ⟦2-char-id⟧)
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      }(⟦2-char-id⟧, pB, VB, ⟦2-char-id⟧), tT(⟦2-char-id⟧, yB, pB, TB, dB, VB, ⟦2-char-id⟧)
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       if (!⟦2-char-id⟧) return [new ⟦2-char-id⟧(0, 0, ⟦2-char-id⟧ == ⟦2-char-id⟧ ? 1 : 0)];
       if (⟦2-char-id⟧ == ⟦2-char-id⟧ && !⟦2-char-id⟧.length && !⟦2-char-id⟧.test(⟦2-char-id⟧)) return ⟦2-char-id⟧(⟦2-char-id⟧.length);
       if (⟦2-char-id⟧.length)
         for (; ⟦2-char-id⟧.length > ⟦2-char-id⟧.length;) ⟦2-char-id⟧[⟦2-char-id⟧.length] = 256;
       let ⟦2-char-id⟧ = [],
         ⟦2-char-id⟧ = ⟦2-char-id⟧ == ⟦2-char-id⟧ ? 0 : 1;
-      return ⟦2-char-id⟧(⟦2-char-id⟧, UJ, UJ, ZJ, 0, ⟦2-char-id⟧.length, ⟦2-char-id⟧), FJ
+      return ⟦2-char-id⟧(⟦2-char-id⟧, yB, yB, dB, 0, ⟦2-char-id⟧.length, ⟦2-char-id⟧), VB
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return [new ⟦2-char-id⟧(0, JJ, 0)]
+      return [new ⟦2-char-id⟧(0, BB, 0)]
     }
     let ⟦2-char-id⟧ = "";
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, UJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, yB, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.head - ⟦2-char-id⟧.from,
-        ⟦2-char-id⟧ = ⟦2-char-id⟧.find(⟦2-char-id⟧, AJ, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.bidiLevel) && void 0 !== ⟦2-char-id⟧ ? XJ : -1, ⟦2-char-id⟧.assoc),
+        ⟦2-char-id⟧ = ⟦2-char-id⟧.find(⟦2-char-id⟧, JB, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.bidiLevel) && void 0 !== ⟦2-char-id⟧ ? lB : -1, ⟦2-char-id⟧.assoc),
         ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
         ⟦2-char-id⟧ = ⟦2-char-id⟧.side(⟦2-char-id⟧, ⟦2-char-id⟧);
       if (⟦2-char-id⟧ == ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 274 · Change · +5 / -5</summary>

```diff
@@ -6943,13 +6943,13 @@
         if (⟦2-char-id⟧ < 0 || ⟦2-char-id⟧ >= ⟦2-char-id⟧.length) return null;
         ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ = ⟦2-char-id⟧], ⟦2-char-id⟧ = ⟦2-char-id⟧.side(!⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.side(⟦2-char-id⟧, ⟦2-char-id⟧)
       }
-      let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.X)(⟦2-char-id⟧.text, AJ, ⟦2-char-id⟧.forward(⟦2-char-id⟧, ⟦2-char-id⟧));
+      let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.S)(⟦2-char-id⟧.text, JB, ⟦2-char-id⟧.forward(⟦2-char-id⟧, ⟦2-char-id⟧));
       (⟦2-char-id⟧ < ⟦2-char-id⟧.from || ⟦2-char-id⟧ > ⟦2-char-id⟧.to) && (⟦2-char-id⟧ = ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.text.slice(Math.min(⟦2-char-id⟧, ⟦2-char-id⟧), Math.max(⟦2-char-id⟧, ⟦2-char-id⟧));
       let ⟦2-char-id⟧ = ⟦2-char-id⟧ == (⟦2-char-id⟧ ? ⟦2-char-id⟧.length - 1 : 0) ? null : ⟦2-char-id⟧[⟦2-char-id⟧ + (⟦2-char-id⟧ ? 1 : -1)];
-      return ⟦2-char-id⟧ && ⟦2-char-id⟧ == ⟦2-char-id⟧ && ⟦2-char-id⟧.level + (⟦2-char-id⟧ ? 0 : 1) < ⟦2-char-id⟧.level ? ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧.side(!⟦2-char-id⟧, ⟦2-char-id⟧) + ⟦2-char-id⟧.from, ⟦2-char-id⟧.forward(⟦2-char-id⟧, ⟦2-char-id⟧) ? 1 : -1, ⟦2-char-id⟧.level) : ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧ + ⟦2-char-id⟧.from, ⟦2-char-id⟧.forward(⟦2-char-id⟧, ⟦2-char-id⟧) ? -1 : 1, ⟦2-char-id⟧.level)
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧ && ⟦2-char-id⟧ == ⟦2-char-id⟧ && ⟦2-char-id⟧.level + (⟦2-char-id⟧ ? 0 : 1) < ⟦2-char-id⟧.level ? ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧.side(!⟦2-char-id⟧, ⟦2-char-id⟧) + ⟦2-char-id⟧.from, ⟦2-char-id⟧.forward(⟦2-char-id⟧, ⟦2-char-id⟧) ? 1 : -1, ⟦2-char-id⟧.level) : ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧ + ⟦2-char-id⟧.from, ⟦2-char-id⟧.forward(⟦2-char-id⟧, ⟦2-char-id⟧) ? -1 : 1, ⟦2-char-id⟧.level)
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.charCodeAt(⟦2-char-id⟧));
         if (1 == ⟦2-char-id⟧) return ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 275 · Change · +13 / -13</summary>

```diff
@@ -6957,24 +6957,24 @@
       }
       return ⟦2-char-id⟧
     }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define({
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define({
         combine: ⟦2-char-id⟧ => ⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧))
       }),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define({
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define({
         combine: ⟦2-char-id⟧ => ⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧))
       }),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define();
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define();
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
         this.range = ⟦2-char-id⟧, this.y = ⟦2-char-id⟧, this.x = ⟦2-char-id⟧, this.yMargin = ⟦2-char-id⟧, this.xMargin = ⟦2-char-id⟧, this.isSnapshot = ⟦2-char-id⟧
       }
```

</details>

<details>
<summary>Hunk 276 · Change · +11 / -11</summary>

```diff
@@ -6982,23 +6982,23 @@
         return ⟦2-char-id⟧.empty ? this : new ⟦2-char-id⟧(this.range.map(⟦2-char-id⟧), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
       }
       clip(⟦2-char-id⟧) {
-        return this.range.to <= ⟦2-char-id⟧.doc.length ? this : new ⟦2-char-id⟧(⟦2-char-id⟧.m.cursor(⟦2-char-id⟧.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
-      }
-    }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define({
+        return this.range.to <= ⟦2-char-id⟧.doc.length ? this : new ⟦2-char-id⟧(⟦2-char-id⟧.h.cursor(⟦2-char-id⟧.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
+      }
+    }
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.x.define({
         map: (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.map(⟦2-char-id⟧)
       }),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define();
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.x.define();
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.facet(⟦2-char-id⟧);
-      ⟦2-char-id⟧.length ? ⟦2-char-id⟧[0](⟦2-char-id⟧) : window.onerror && window.onerror(String(⟦2-char-id⟧), ZJ, void 0, void 0, ⟦2-char-id⟧) || (⟦2-char-id⟧ ? console.error(⟦2-char-id⟧ + ":", ⟦2-char-id⟧) : console.error(⟦2-char-id⟧))
-    }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define({
+      ⟦2-char-id⟧.length ? ⟦2-char-id⟧[0](⟦2-char-id⟧) : window.onerror && window.onerror(String(⟦2-char-id⟧), dB, void 0, void 0, ⟦2-char-id⟧) || (⟦2-char-id⟧ ? console.error(⟦2-char-id⟧ + ":", ⟦2-char-id⟧) : console.error(⟦2-char-id⟧))
+    }
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define({
       combine: ⟦2-char-id⟧ => !⟦2-char-id⟧.length || ⟦2-char-id⟧[0]
     });
     let ⟦2-char-id⟧ = 0;
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define({
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define({
       combine: ⟦2-char-id⟧ => ⟦2-char-id⟧.filter(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
         for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++)
           if (⟦2-char-id⟧[⟦2-char-id⟧].plugin == ⟦2-char-id⟧.plugin) return !1;
```

</details>

<details>
<summary>Hunk 277 · Change · +1 / -1</summary>

```diff
@@ -7006,7 +7006,7 @@
       }))
     });
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
         this.id = ⟦2-char-id⟧, this.create = ⟦2-char-id⟧, this.domEventHandlers = ⟦2-char-id⟧, this.domEventObservers = ⟦2-char-id⟧, this.baseExtensions = ⟦2-char-id⟧(this), this.extension = this.baseExtensions.concat(⟦2-char-id⟧.of({
           plugin: this,
           arg: void 0
```

</details>

<details>
<summary>Hunk 278 · Change · +3 / -3</summary>

```diff
@@ -7023,14 +7023,14 @@
           eventHandlers: ⟦2-char-id⟧,
           eventObservers: ⟦2-char-id⟧,
           provide: ⟦2-char-id⟧,
-          je: ⟦2-char-id⟧
+          QB: ⟦2-char-id⟧
         } = ⟦2-char-id⟧ || {};
-        return new ⟦2-char-id⟧(⟦2-char-id⟧++, JJ, ZJ, FJ, (⟦2-char-id⟧ => {
+        return new ⟦2-char-id⟧(⟦2-char-id⟧++, BB, dB, VB, (⟦2-char-id⟧ => {
           let ⟦2-char-id⟧ = [];
           return ⟦2-char-id⟧ && ⟦2-char-id⟧.push(⟦2-char-id⟧.of((⟦2-char-id⟧ => {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧.plugin(⟦2-char-id⟧);
             return ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧) : ⟦2-char-id⟧.none
-          }))), ⟦2-char-id⟧ && ⟦2-char-id⟧.push(⟦2-char-id⟧(⟦2-char-id⟧)), cJ
+          }))), ⟦2-char-id⟧ && ⟦2-char-id⟧.push(⟦2-char-id⟧(⟦2-char-id⟧)), TB
         }))
       }
       static fromClass(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 279 · Change · +1 / -1</summary>

```diff
@@ -7051,7 +7051,7 @@
             if (this.mustUpdate = null, this.value.update) try {
               this.value.update(⟦2-char-id⟧)
             } catch (⟦2-char-id⟧) {
-              if (⟦2-char-id⟧(⟦2-char-id⟧.state, cJ, "CodeMirror plugin crashed"), this.value.destroy) try {
+              if (⟦2-char-id⟧(⟦2-char-id⟧.state, TB, "CodeMirror plugin crashed"), this.value.destroy) try {
                 this.value.destroy()
               } catch (⟦2-char-id⟧) {}
               this.deactivate()
```

</details>

<details>
<summary>Hunk 280 · Change · +1 / -1</summary>

```diff
@@ -7060,7 +7060,7 @@
         } else if (this.spec) try {
           this.value = this.spec.plugin.create(⟦2-char-id⟧, this.spec.arg)
         } catch (⟦2-char-id⟧) {
-          ic(⟦2-char-id⟧.state, cJ, "CodeMirror plugin crashed"), this.deactivate()
+          GT(⟦2-char-id⟧.state, TB, "CodeMirror plugin crashed"), this.deactivate()
         }
         return this
       }
```

</details>

<details>
<summary>Hunk 281 · Change · +11 / -11</summary>

```diff
@@ -7069,35 +7069,35 @@
         if (null === (⟦2-char-id⟧ = this.value) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.destroy) try {
           this.value.destroy()
         } catch (⟦2-char-id⟧) {
-          ic(⟦2-char-id⟧.state, ZJ, "CodeMirror plugin crashed")
+          GT(⟦2-char-id⟧.state, dB, "CodeMirror plugin crashed")
         }
       }
       deactivate() {
         this.spec = this.value = null
       }
     }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define();
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define();
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.state.facet(⟦2-char-id⟧);
       if (!⟦2-char-id⟧.length) return ⟦2-char-id⟧;
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧ instanceof Function ? ⟦2-char-id⟧(⟦2-char-id⟧) : ⟦2-char-id⟧)),
         ⟦2-char-id⟧ = [];
-      return ⟦2-char-id⟧.v.spans(⟦2-char-id⟧, ⟦2-char-id⟧.from, ⟦2-char-id⟧.to, {
+      return ⟦2-char-id⟧.u.spans(⟦2-char-id⟧, ⟦2-char-id⟧.from, ⟦2-char-id⟧.to, {
         point() {},
-        span(⟦2-char-id⟧, ZJ, FJ, ⟦2-char-id⟧) {
+        span(⟦2-char-id⟧, dB, VB, ⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧.from,
             ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧.from,
             ⟦2-char-id⟧ = ⟦2-char-id⟧;
           for (let ⟦2-char-id⟧ = ⟦2-char-id⟧.length - 1; ⟦2-char-id⟧ >= 0; ⟦2-char-id⟧--, ⟦2-char-id⟧--) {
             let ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧].spec.bidiIsolate;
-            if (null == ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.text, XJ, ⟦2-char-id⟧)), ⟦2-char-id⟧ > 0 && ⟦2-char-id⟧.length && (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.length - 1]).to == ⟦2-char-id⟧ && ⟦2-char-id⟧.direction == ⟦2-char-id⟧) ⟦2-char-id⟧.to = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.inner;
+            if (null == ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.text, lB, ⟦2-char-id⟧)), ⟦2-char-id⟧ > 0 && ⟦2-char-id⟧.length && (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.length - 1]).to == ⟦2-char-id⟧ && ⟦2-char-id⟧.direction == ⟦2-char-id⟧) ⟦2-char-id⟧.to = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.inner;
             else {
               let ⟦2-char-id⟧ = {
                 from: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 282 · Change · +3 / -3</summary>

```diff
@@ -7109,9 +7109,9 @@
             }
           }
         }
-      }), eJ
-    }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define();
+      }), pB
+    }
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define();
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = 0,
```

</details>

<details>
<summary>Hunk 283 · Change · +2 / -2</summary>

```diff
@@ -7129,9 +7129,9 @@
         bottom: ⟦2-char-id⟧
       }
     }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define();
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define();
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         this.fromA = ⟦2-char-id⟧, this.toA = ⟦2-char-id⟧, this.fromB = ⟦2-char-id⟧, this.toB = ⟦2-char-id⟧
       }
       join(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 284 · Change · +1 / -1</summary>

```diff
@@ -7147,7 +7147,7 @@
             ⟦2-char-id⟧ = ⟦2-char-id⟧.join(⟦2-char-id⟧), ⟦2-char-id⟧.splice(⟦2-char-id⟧ - 1, 1)
           }
         }
-        return ⟦2-char-id⟧.splice(⟦2-char-id⟧, 0, ⟦2-char-id⟧), JJ
+        return ⟦2-char-id⟧.splice(⟦2-char-id⟧, 0, ⟦2-char-id⟧), BB
       }
       static extendWithRanges(⟦2-char-id⟧, ⟦2-char-id⟧) {
         if (0 == ⟦2-char-id⟧.length) return ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 285 · Change · +6 / -6</summary>

```diff
@@ -7172,20 +7172,20 @@
                 let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧++];
                 ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, ⟦2-char-id⟧.toB), ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, ⟦2-char-id⟧.toA), ⟦2-char-id⟧ = ⟦2-char-id⟧.toA - ⟦2-char-id⟧.toB
               }
-            } ⟦2-char-id⟧.push(new ⟦2-char-id⟧(⟦2-char-id⟧, hJ, qJ, ⟦2-char-id⟧))
+            } ⟦2-char-id⟧.push(new ⟦2-char-id⟧(⟦2-char-id⟧, kB, YB, ⟦2-char-id⟧))
         }
         return ⟦2-char-id⟧
       }
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         this.view = ⟦2-char-id⟧, this.state = ⟦2-char-id⟧, this.transactions = ⟦2-char-id⟧, this.flags = 0, this.startState = ⟦2-char-id⟧.state, this.changes = ⟦2-char-id⟧.ChangeSet.empty(this.startState.doc.length);
         for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) this.changes = this.changes.compose(⟦2-char-id⟧.changes);
         let ⟦2-char-id⟧ = [];
-        this.changes.iterChangedRanges(((⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) => ⟦2-char-id⟧.push(new ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧)))), this.changedRanges = ⟦2-char-id⟧
-      }
-      static create(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-        return new ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧)
+        this.changes.iterChangedRanges(((⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) => ⟦2-char-id⟧.push(new ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧)))), this.changedRanges = ⟦2-char-id⟧
+      }
+      static create(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+        return new ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧)
       }
       get viewportChanged() {
         return (4 & this.flags) > 0
```

</details>

<details>
<summary>Hunk 286 · Change · +1 / -1</summary>

```diff
@@ -7256,7 +7256,7 @@
             }
             for (let ⟦2-char-id⟧ in ⟦2-char-id⟧) {
               let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
-              "style" == ⟦2-char-id⟧ ? ⟦2-char-id⟧.style.cssText = FJ : ⟦2-char-id⟧.getAttribute(⟦2-char-id⟧) != ⟦2-char-id⟧ && ⟦2-char-id⟧.setAttribute(⟦2-char-id⟧, ⟦2-char-id⟧)
+              "style" == ⟦2-char-id⟧ ? ⟦2-char-id⟧.style.cssText = VB : ⟦2-char-id⟧.getAttribute(⟦2-char-id⟧) != ⟦2-char-id⟧ && ⟦2-char-id⟧.setAttribute(⟦2-char-id⟧, ⟦2-char-id⟧)
             }
           }(this.dom, ⟦2-char-id⟧)
         }
```

</details>

<details>
<summary>Hunk 287 · Change · +1 / -1</summary>

```diff
@@ -7334,7 +7334,7 @@
         super.sync(⟦2-char-id⟧);
         let ⟦2-char-id⟧, ⟦2-char-id⟧ = this.dom,
           ⟦2-char-id⟧ = null,
-          ⟦2-char-id⟧ = (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.node) == ⟦2-char-id⟧ ? JJ : null,
+          ⟦2-char-id⟧ = (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.node) == ⟦2-char-id⟧ ? BB : null,
           ⟦2-char-id⟧ = 0;
         for (let ⟦2-char-id⟧ of this.children) {
           if (⟦2-char-id⟧.sync(⟦2-char-id⟧), ⟦2-char-id⟧ += ⟦2-char-id⟧.length + ⟦2-char-id⟧.breakAfter, ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.nextSibling : ⟦2-char-id⟧.firstChild, ⟦2-char-id⟧ && ⟦2-char-id⟧ != ⟦2-char-id⟧.dom && (⟦2-char-id⟧.written = !0), ⟦2-char-id⟧.dom.parentNode == ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 288 · Change · +1 / -1</summary>

```diff
@@ -7349,7 +7349,7 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.nextSibling;
-      return ⟦2-char-id⟧.parentNode.removeChild(⟦2-char-id⟧), cJ
+      return ⟦2-char-id⟧.parentNode.removeChild(⟦2-char-id⟧), TB
     }
     class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 289 · Change · +1 / -1</summary>

```diff
@@ -7388,7 +7388,7 @@
           }
       }
       resolveBlock(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        let ⟦2-char-id⟧, FJ, ⟦2-char-id⟧ = -1,
+        let ⟦2-char-id⟧, VB, ⟦2-char-id⟧ = -1,
           ⟦2-char-id⟧ = -1;
         if (this.blockTiles(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧.length;
```

</details>

<details>
<summary>Hunk 290 · Change · +1 / -1</summary>

```diff
@@ -7423,7 +7423,7 @@
       }
       static of (⟦2-char-id⟧, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧ || document.createElement(⟦2-char-id⟧.tagName), ⟦2-char-id⟧);
-        return ⟦2-char-id⟧ || (⟦2-char-id⟧.flags |= 4), ZJ
+        return ⟦2-char-id⟧ || (⟦2-char-id⟧.flags |= 4), dB
       }
     }
     class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
```

</details>

<details>
<summary>Hunk 291 · Change · +3 / -3</summary>

```diff
@@ -7433,14 +7433,14 @@
       isLine() {
         return !0
       }
-      static start(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      static start(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧ || document.createElement("div"), ⟦2-char-id⟧);
-        return ⟦2-char-id⟧ && ⟦2-char-id⟧ || (⟦2-char-id⟧.flags |= 4), FJ
+        return ⟦2-char-id⟧ && ⟦2-char-id⟧ || (⟦2-char-id⟧.flags |= 4), VB
       }
       get domAttrs() {
         return this.attrs
       }
-      resolveInline(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      resolveInline(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = null,
           ⟦2-char-id⟧ = -1,
           ⟦2-char-id⟧ = null,
```

</details>

<details>
<summary>Hunk 292 · Change · +3 / -3</summary>

```diff
@@ -7452,14 +7452,14 @@
             ⟦2-char-id⟧ >= ⟦2-char-id⟧ && (⟦2-char-id⟧.isComposite() ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧) : (!⟦2-char-id⟧ || ⟦2-char-id⟧.isHidden && (⟦2-char-id⟧ > 0 || ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧))) && (⟦2-char-id⟧ > ⟦2-char-id⟧ || 32 & ⟦2-char-id⟧.flags) ? (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧) : (⟦2-char-id⟧ < ⟦2-char-id⟧ || 16 & ⟦2-char-id⟧.flags && !⟦2-char-id⟧.isHidden) && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧)), ⟦2-char-id⟧ = ⟦2-char-id⟧
           }
         }(this, ⟦2-char-id⟧);
-        let ⟦2-char-id⟧ = (⟦2-char-id⟧ < 0 ? FJ : ⟦2-char-id⟧) || ⟦2-char-id⟧ || ⟦2-char-id⟧;
+        let ⟦2-char-id⟧ = (⟦2-char-id⟧ < 0 ? VB : ⟦2-char-id⟧) || ⟦2-char-id⟧ || ⟦2-char-id⟧;
         return ⟦2-char-id⟧ ? {
           tile: ⟦2-char-id⟧,
-          offset: ⟦2-char-id⟧ == ⟦2-char-id⟧ ? UJ : ⟦2-char-id⟧
+          offset: ⟦2-char-id⟧ == ⟦2-char-id⟧ ? yB : ⟦2-char-id⟧
         } : null
       }
       coordsIn(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        let ⟦2-char-id⟧ = this.resolveInline(⟦2-char-id⟧, cJ, !0);
+        let ⟦2-char-id⟧ = this.resolveInline(⟦2-char-id⟧, TB, !0);
         return ⟦2-char-id⟧ ? ⟦2-char-id⟧.tile.coordsIn(Math.max(0, ⟦2-char-id⟧.offset), ⟦2-char-id⟧) : function(⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.dom.lastChild;
           if (!⟦2-char-id⟧) return ⟦2-char-id⟧.dom.getBoundingClientRect();
```

</details>

<details>
<summary>Hunk 293 · Change · +1 / -1</summary>

```diff
@@ -7500,7 +7500,7 @@
       }
       static of (⟦2-char-id⟧, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧ || document.createElement(⟦2-char-id⟧.tagName), ⟦2-char-id⟧);
-        return ⟦2-char-id⟧ || (⟦2-char-id⟧.flags |= 4), ZJ
+        return ⟦2-char-id⟧ || (⟦2-char-id⟧.flags |= 4), dB
       }
     }
     class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
```

</details>

<details>
<summary>Hunk 294 · Change · +4 / -4</summary>

```diff
@@ -7523,19 +7523,19 @@
           ⟦2-char-id⟧ = ⟦2-char-id⟧,
           ⟦2-char-id⟧ = 0;
         0 == ⟦2-char-id⟧ && ⟦2-char-id⟧ < 0 || ⟦2-char-id⟧ == ⟦2-char-id⟧ && ⟦2-char-id⟧ >= 0 ? ⟦2-char-id⟧.chrome || ⟦2-char-id⟧.gecko || (⟦2-char-id⟧ ? (⟦2-char-id⟧--, ⟦2-char-id⟧ = 1) : ⟦2-char-id⟧ < ⟦2-char-id⟧ && (⟦2-char-id⟧++, ⟦2-char-id⟧ = -1)) : ⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧-- : ⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧++;
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧(this.dom, FJ, ⟦2-char-id⟧).getClientRects();
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧(this.dom, VB, ⟦2-char-id⟧).getClientRects();
         if (!⟦2-char-id⟧.length) return null;
         let ⟦2-char-id⟧ = ⟦2-char-id⟧[(⟦2-char-id⟧ ? ⟦2-char-id⟧ < 0 : ⟦2-char-id⟧ >= 0) ? 0 : ⟦2-char-id⟧.length - 1];
         return ⟦2-char-id⟧.safari && !⟦2-char-id⟧ && 0 == ⟦2-char-id⟧.width && (⟦2-char-id⟧ = Array.prototype.find.call(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.width)) || ⟦2-char-id⟧), ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ < 0) : ⟦2-char-id⟧ || null
       }
       static of (⟦2-char-id⟧, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧ || document.createTextNode(⟦2-char-id⟧), ⟦2-char-id⟧);
-        return ⟦2-char-id⟧ || (⟦2-char-id⟧.flags |= 2), ZJ
+        return ⟦2-char-id⟧ || (⟦2-char-id⟧.flags |= 2), dB
       }
     }
     class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-        super(⟦2-char-id⟧, cJ, ⟦2-char-id⟧), this.widget = ⟦2-char-id⟧
+      constructor(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+        super(⟦2-char-id⟧, TB, ⟦2-char-id⟧), this.widget = ⟦2-char-id⟧
       }
       isWidget() {
         return !0
```

</details>

<details>
<summary>Hunk 295 · Change · +10 / -10</summary>

```diff
@@ -7547,35 +7547,35 @@
         return !(48 & this.flags) && (this.flags & (⟦2-char-id⟧ < 0 ? 64 : 128)) > 0
       }
       coordsIn(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        return this.coordsInWidget(⟦2-char-id⟧, cJ, !1)
-      }
-      coordsInWidget(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-        let ⟦2-char-id⟧ = this.widget.coordsAt(this.dom, JJ, ⟦2-char-id⟧);
+        return this.coordsInWidget(⟦2-char-id⟧, TB, !1)
+      }
+      coordsInWidget(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+        let ⟦2-char-id⟧ = this.widget.coordsAt(this.dom, BB, ⟦2-char-id⟧);
         if (⟦2-char-id⟧) return ⟦2-char-id⟧;
-        if (⟦2-char-id⟧) return ⟦2-char-id⟧(this.dom.getBoundingClientRect(), this.length ? 0 == JJ : ⟦2-char-id⟧ <= 0);
+        if (⟦2-char-id⟧) return ⟦2-char-id⟧(this.dom.getBoundingClientRect(), this.length ? 0 == BB : ⟦2-char-id⟧ <= 0);
         {
           let ⟦2-char-id⟧ = this.dom.getClientRects(),
             ⟦2-char-id⟧ = null;
           if (!⟦2-char-id⟧.length) return null;
           let ⟦2-char-id⟧ = !!(16 & this.flags) || !(32 & this.flags) && ⟦2-char-id⟧ > 0;
-          for (let ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.length - 1 : 0; ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧], !(⟦2-char-id⟧ > 0 ? 0 == UJ : ⟦2-char-id⟧ == ⟦2-char-id⟧.length - 1 || ⟦2-char-id⟧.top < ⟦2-char-id⟧.bottom); ⟦2-char-id⟧ += ⟦2-char-id⟧ ? -1 : 1);
+          for (let ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.length - 1 : 0; ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧], !(⟦2-char-id⟧ > 0 ? 0 == yB : ⟦2-char-id⟧ == ⟦2-char-id⟧.length - 1 || ⟦2-char-id⟧.top < ⟦2-char-id⟧.bottom); ⟦2-char-id⟧ += ⟦2-char-id⟧ ? -1 : 1);
           return ⟦2-char-id⟧(⟦2-char-id⟧, !⟦2-char-id⟧)
         }
       }
       get overrideDOMText() {
-        if (!this.length) return ⟦2-char-id⟧.F.empty;
+        if (!this.length) return ⟦2-char-id⟧.D.empty;
         let {
           root: ⟦2-char-id⟧
         } = this;
-        if (!⟦2-char-id⟧) return ⟦2-char-id⟧.F.empty;
+        if (!⟦2-char-id⟧) return ⟦2-char-id⟧.D.empty;
         let ⟦2-char-id⟧ = this.posAtStart;
         return ⟦2-char-id⟧.view.state.doc.slice(⟦2-char-id⟧, ⟦2-char-id⟧ + this.length)
       }
       destroy() {
         super.destroy(), this.widget.destroy(this.dom)
       }
-      static of (⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
-        return ⟦2-char-id⟧ || (⟦2-char-id⟧ = ⟦2-char-id⟧.toDOM(⟦2-char-id⟧), ⟦2-char-id⟧.editable || (⟦2-char-id⟧.contentEditable = "false")), new ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, JJ, ⟦2-char-id⟧)
+      static of (⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
+        return ⟦2-char-id⟧ || (⟦2-char-id⟧ = ⟦2-char-id⟧.toDOM(⟦2-char-id⟧), ⟦2-char-id⟧.editable || (⟦2-char-id⟧.contentEditable = "false")), new ⟦2-char-id⟧(⟦2-char-id⟧, dB, BB, ⟦2-char-id⟧)
       }
     }
     class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
```

</details>

<details>
<summary>Hunk 296 · Change · +1 / -1</summary>

```diff
@@ -7587,7 +7587,7 @@
         return !0
       }
       get overrideDOMText() {
-        return ⟦2-char-id⟧.F.empty
+        return ⟦2-char-id⟧.D.empty
       }
       coordsIn(⟦2-char-id⟧) {
         return this.dom.getBoundingClientRect()
```

</details>

<details>
<summary>Hunk 297 · Change · +1 / -1</summary>

```diff
@@ -7597,7 +7597,7 @@
       constructor(⟦2-char-id⟧) {
         this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = ⟦2-char-id⟧
       }
-      advance(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      advance(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let {
           tile: ⟦2-char-id⟧,
           index: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 298 · Change · +2 / -2</summary>

```diff
@@ -7611,14 +7611,14 @@
               ⟦2-char-id⟧ && ⟦2-char-id⟧.break(), ⟦2-char-id⟧--, ⟦2-char-id⟧ = !1
             } else if (⟦2-char-id⟧ == ⟦2-char-id⟧.children.length) {
           if (!⟦2-char-id⟧ && !⟦2-char-id⟧.length) break;
-          ⟦2-char-id⟧ && ⟦2-char-id⟧.cn(⟦2-char-id⟧), ⟦2-char-id⟧ = !!⟦2-char-id⟧.breakAfter, ({
+          ⟦2-char-id⟧ && ⟦2-char-id⟧.lD(⟦2-char-id⟧), ⟦2-char-id⟧ = !!⟦2-char-id⟧.breakAfter, ({
             tile: ⟦2-char-id⟧,
             index: ⟦2-char-id⟧
           } = ⟦2-char-id⟧.pop()), ⟦2-char-id⟧++
         } else {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.children[⟦2-char-id⟧],
             ⟦2-char-id⟧ = ⟦2-char-id⟧.breakAfter;
-          !(⟦2-char-id⟧ > 0 ? ⟦2-char-id⟧.length <= JJ : ⟦2-char-id⟧.length < ⟦2-char-id⟧) || ⟦2-char-id⟧ && !1 === ⟦2-char-id⟧.skip(⟦2-char-id⟧, 0, ⟦2-char-id⟧.length) && ⟦2-char-id⟧.isComposite ? (⟦2-char-id⟧.push({
+          !(⟦2-char-id⟧ > 0 ? ⟦2-char-id⟧.length <= BB : ⟦2-char-id⟧.length < ⟦2-char-id⟧) || ⟦2-char-id⟧ && !1 === ⟦2-char-id⟧.skip(⟦2-char-id⟧, 0, ⟦2-char-id⟧.length) && ⟦2-char-id⟧.isComposite ? (⟦2-char-id⟧.push({
             tile: ⟦2-char-id⟧,
             index: ⟦2-char-id⟧
           }), ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ && ⟦2-char-id⟧.isComposite() && ⟦2-char-id⟧.enter(⟦2-char-id⟧)) : (⟦2-char-id⟧ = !!⟦2-char-id⟧, ⟦2-char-id⟧++, ⟦2-char-id⟧ -= ⟦2-char-id⟧.length)
```

</details>

<details>
<summary>Hunk 299 · Change · +1 / -1</summary>

```diff
@@ -7630,7 +7630,7 @@
           if (!⟦2-char-id⟧) break;
           {
             let ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧, ⟦2-char-id⟧.length - ⟦2-char-id⟧);
-            ⟦2-char-id⟧ && ⟦2-char-id⟧.skip(⟦2-char-id⟧, UJ, ⟦2-char-id⟧ + ⟦2-char-id⟧), ⟦2-char-id⟧ -= ⟦2-char-id⟧, ⟦2-char-id⟧ += ⟦2-char-id⟧
+            ⟦2-char-id⟧ && ⟦2-char-id⟧.skip(⟦2-char-id⟧, yB, ⟦2-char-id⟧ + ⟦2-char-id⟧), ⟦2-char-id⟧ -= ⟦2-char-id⟧, ⟦2-char-id⟧ += ⟦2-char-id⟧
           }
         }
         return this.tile = ⟦2-char-id⟧, this.index = ⟦2-char-id⟧, this.beforeBreak = ⟦2-char-id⟧, this
```

</details>

<details>
<summary>Hunk 300 · Change · +3 / -3</summary>

```diff
@@ -7640,15 +7640,15 @@
       }
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         this.from = ⟦2-char-id⟧, this.to = ⟦2-char-id⟧, this.wrapper = ⟦2-char-id⟧, this.rank = ⟦2-char-id⟧
       }
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         this.cache = ⟦2-char-id⟧, this.root = ⟦2-char-id⟧, this.blockWrappers = ⟦2-char-id⟧, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
       }
-      addText(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      addText(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         var ⟦2-char-id⟧;
         this.flushBuffer();
         let ⟦2-char-id⟧ = this.ensureMarks(⟦2-char-id⟧, ⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 301 · Change · +2 / -2</summary>

```diff
@@ -7681,13 +7681,13 @@
         let ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.text, ⟦2-char-id⟧.text.nodeValue);
         ⟦2-char-id⟧.flags |= 8, ⟦2-char-id⟧.append(⟦2-char-id⟧)
       }
-      addInlineWidget(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      addInlineWidget(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = this.afterWidget && 48 & ⟦2-char-id⟧.flags && (48 & this.afterWidget.flags) == (48 & ⟦2-char-id⟧.flags);
         ⟦2-char-id⟧ || this.flushBuffer();
         let ⟦2-char-id⟧ = this.ensureMarks(⟦2-char-id⟧, ⟦2-char-id⟧);
         ⟦2-char-id⟧ || 16 & ⟦2-char-id⟧.flags || ⟦2-char-id⟧.append(this.getBuffer(1)), ⟦2-char-id⟧.append(⟦2-char-id⟧), this.pos += ⟦2-char-id⟧.length, this.afterWidget = ⟦2-char-id⟧
       }
-      addMark(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      addMark(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         this.flushBuffer(), this.ensureMarks(⟦2-char-id⟧, ⟦2-char-id⟧).append(⟦2-char-id⟧), this.pos += ⟦2-char-id⟧.length, this.afterWidget = null
       }
       addBlockWidget(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 302 · Change · +1 / -1</summary>

```diff
@@ -7731,7 +7731,7 @@
         if (this.curLine) {
           this.flushBuffer();
           let ⟦2-char-id⟧ = this.curLine.lastChild;
-          ⟦2-char-id⟧ && ⟦2-char-id⟧(this.curLine, !1) && ("BR" == ⟦2-char-id⟧.dom.nodeName || !⟦2-char-id⟧.isWidget() || ⟦2-char-id⟧.ios && ⟦2-char-id⟧(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(⟦2-char-id⟧, 0, 32) || new ⟦2-char-id⟧(⟦2-char-id⟧.toDOM(), 0, PZ, 32)), this.curLine = this.afterWidget = null
+          ⟦2-char-id⟧ && ⟦2-char-id⟧(this.curLine, !1) && ("BR" == ⟦2-char-id⟧.dom.nodeName || !⟦2-char-id⟧.isWidget() || ⟦2-char-id⟧.ios && ⟦2-char-id⟧(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(⟦2-char-id⟧, 0, 32) || new ⟦2-char-id⟧(⟦2-char-id⟧.toDOM(), 0, Pd, 32)), this.curLine = this.afterWidget = null
         }
       }
       updateBlockWrappers() {
```

</details>

<details>
<summary>Hunk 303 · Change · +1 / -1</summary>

```diff
@@ -7777,7 +7777,7 @@
         this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = ⟦2-char-id⟧.iter()
       }
       skip(⟦2-char-id⟧) {
-        this.textOff + ⟦2-char-id⟧ <= this.text.length ? this.textOff += JJ : (this.skipCount += ⟦2-char-id⟧ - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
+        this.textOff + ⟦2-char-id⟧ <= this.text.length ? this.textOff += BB : (this.skipCount += ⟦2-char-id⟧ - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
       }
       next(⟦2-char-id⟧) {
         if (this.textOff == this.text.length) {
```

</details>

<details>
<summary>Hunk 304 · Change · +4 / -4</summary>

```diff
@@ -7793,10 +7793,10 @@
         }
         let ⟦2-char-id⟧ = Math.min(this.text.length, this.textOff + ⟦2-char-id⟧),
           ⟦2-char-id⟧ = this.text.slice(this.textOff, ⟦2-char-id⟧);
-        return this.textOff = ⟦2-char-id⟧, ZJ
-      }
-    }
-    const ⟦2-char-id⟧ = [⟦2-char-id⟧, xZ, mZ, vZ, EZ, fZ, ⟦2-char-id⟧];
+        return this.textOff = ⟦2-char-id⟧, dB
+      }
+    }
+    const ⟦2-char-id⟧ = [⟦2-char-id⟧, Ed, Nd, md, fd, Hd, ⟦2-char-id⟧];
     for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧].bucket = ⟦2-char-id⟧;
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 305 · Change · +2 / -2</summary>

```diff
@@ -7815,11 +7815,11 @@
         for (let ⟦2-char-id⟧ = ⟦2-char-id⟧.length - 1; ⟦2-char-id⟧ >= 0; ⟦2-char-id⟧--) {
           let ⟦2-char-id⟧ = (⟦2-char-id⟧ + ⟦2-char-id⟧) % ⟦2-char-id⟧.length,
             ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
-          if ((!⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧)) && !this.reused.has(⟦2-char-id⟧)) return ⟦2-char-id⟧.splice(⟦2-char-id⟧, 1), ⟦2-char-id⟧ < ⟦2-char-id⟧ && this.index[⟦2-char-id⟧]--, this.reused.set(⟦2-char-id⟧, ⟦2-char-id⟧), AJ
+          if ((!⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧)) && !this.reused.has(⟦2-char-id⟧)) return ⟦2-char-id⟧.splice(⟦2-char-id⟧, 1), ⟦2-char-id⟧ < ⟦2-char-id⟧ && this.index[⟦2-char-id⟧]--, this.reused.set(⟦2-char-id⟧, ⟦2-char-id⟧), JB
         }
         return null
       }
-      findWidget(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      findWidget(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = this.buckets[0];
         if (⟦2-char-id⟧.length)
           for (let ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0;; ⟦2-char-id⟧++) {
```

</details>

<details>
<summary>Hunk 306 · Change · +2 / -2</summary>

```diff
@@ -7828,11 +7828,11 @@
               ⟦2-char-id⟧ = 1, ⟦2-char-id⟧ = 0
             }
             let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
-            if (!this.reused.has(⟦2-char-id⟧) && (0 == ⟦2-char-id⟧ ? ⟦2-char-id⟧.widget.compare(⟦2-char-id⟧) : ⟦2-char-id⟧.widget.constructor == ⟦2-char-id⟧.constructor && ⟦2-char-id⟧.updateDOM(⟦2-char-id⟧.dom, this.view, ⟦2-char-id⟧.widget))) return ⟦2-char-id⟧.splice(⟦2-char-id⟧, 1), ⟦2-char-id⟧ < this.index[0] && this.index[0]--, ⟦2-char-id⟧.widget == ⟦2-char-id⟧ && ⟦2-char-id⟧.length == ⟦2-char-id⟧ && (497 & ⟦2-char-id⟧.flags) == ⟦2-char-id⟧ ? (this.reused.set(⟦2-char-id⟧, 1), ⟦2-char-id⟧) : (this.reused.set(⟦2-char-id⟧, 2), new ⟦2-char-id⟧(⟦2-char-id⟧.dom, cJ, JJ, -498 & ⟦2-char-id⟧.flags | ⟦2-char-id⟧))
+            if (!this.reused.has(⟦2-char-id⟧) && (0 == ⟦2-char-id⟧ ? ⟦2-char-id⟧.widget.compare(⟦2-char-id⟧) : ⟦2-char-id⟧.widget.constructor == ⟦2-char-id⟧.constructor && ⟦2-char-id⟧.updateDOM(⟦2-char-id⟧.dom, this.view, ⟦2-char-id⟧.widget))) return ⟦2-char-id⟧.splice(⟦2-char-id⟧, 1), ⟦2-char-id⟧ < this.index[0] && this.index[0]--, ⟦2-char-id⟧.widget == ⟦2-char-id⟧ && ⟦2-char-id⟧.length == ⟦2-char-id⟧ && (497 & ⟦2-char-id⟧.flags) == ⟦2-char-id⟧ ? (this.reused.set(⟦2-char-id⟧, 1), ⟦2-char-id⟧) : (this.reused.set(⟦2-char-id⟧, 2), new ⟦2-char-id⟧(⟦2-char-id⟧.dom, TB, BB, -498 & ⟦2-char-id⟧.flags | ⟦2-char-id⟧))
           }
       }
       reuse(⟦2-char-id⟧) {
-        return this.reused.set(⟦2-char-id⟧, 1), JJ
+        return this.reused.set(⟦2-char-id⟧, 1), BB
       }
       maybeReuse(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
```

</details>

<details>
<summary>Hunk 307 · Change · +4 / -4</summary>

```diff
@@ -7843,13 +7843,13 @@
       }
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, UJ, ⟦2-char-id⟧) {
-        this.view = ⟦2-char-id⟧, this.je = ⟦2-char-id⟧, this.disallowBlockEffectsFor = ⟦2-char-id⟧, this.openWidget = !1, this.openMarks = 0, this.cache = new ⟦2-char-id⟧(⟦2-char-id⟧), this.text = new ⟦2-char-id⟧(⟦2-char-id⟧.state.doc), this.builder = new ⟦2-char-id⟧(this.cache, new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.contentDOM), ⟦2-char-id⟧.v.iter(⟦2-char-id⟧)), this.cache.reused.set(⟦2-char-id⟧, 2), this.old = new ⟦2-char-id⟧(⟦2-char-id⟧), this.reuseWalker = {
-          skip: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+      constructor(⟦2-char-id⟧, TB, dB, yB, ⟦2-char-id⟧) {
+        this.view = ⟦2-char-id⟧, this.QB = ⟦2-char-id⟧, this.disallowBlockEffectsFor = ⟦2-char-id⟧, this.openWidget = !1, this.openMarks = 0, this.cache = new ⟦2-char-id⟧(⟦2-char-id⟧), this.text = new ⟦2-char-id⟧(⟦2-char-id⟧.state.doc), this.builder = new ⟦2-char-id⟧(this.cache, new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.contentDOM), ⟦2-char-id⟧.u.iter(⟦2-char-id⟧)), this.cache.reused.set(⟦2-char-id⟧, 2), this.old = new ⟦2-char-id⟧(⟦2-char-id⟧), this.reuseWalker = {
+          skip: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
             if (this.cache.add(⟦2-char-id⟧), ⟦2-char-id⟧.isComposite()) return !1
           },
           enter: ⟦2-char-id⟧ => this.cache.add(⟦2-char-id⟧),
-          cn: () => {},
+          lD: () => {},
           break: () => {}
         }
       }
```

</details>

<details>
<summary>Hunk 308 · Change · +1 / -1</summary>

```diff
@@ -7867,7 +7867,7 @@
         }
         return this.builder.curLine && this.builder.endLine(), this.builder.root
       }
-      preserve(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      preserve(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
             let ⟦2-char-id⟧ = [];
             for (let ⟦2-char-id⟧ = ⟦2-char-id⟧.parents.length; ⟦2-char-id⟧ > 1; ⟦2-char-id⟧--) {
```

</details>

<details>
<summary>Hunk 309 · Change · +5 / -5</summary>

```diff
@@ -7878,26 +7878,26 @@
           }(this.old),
           ⟦2-char-id⟧ = this.openMarks;
         this.old.advance(⟦2-char-id⟧, ⟦2-char-id⟧ ? 1 : -1, {
-          skip: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+          skip: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
             if (⟦2-char-id⟧.isWidget())
               if (this.openWidget) this.builder.continueWidget(⟦2-char-id⟧ - ⟦2-char-id⟧);
               else {
                 let ⟦2-char-id⟧ = ⟦2-char-id⟧ > 0 || ⟦2-char-id⟧ < ⟦2-char-id⟧.length ? ⟦2-char-id⟧.of(⟦2-char-id⟧.widget, this.view, ⟦2-char-id⟧ - ⟦2-char-id⟧, 496 & ⟦2-char-id⟧.flags, this.cache.maybeReuse(⟦2-char-id⟧)) : this.cache.reuse(⟦2-char-id⟧);
-                256 & ⟦2-char-id⟧.flags ? (⟦2-char-id⟧.flags &= -2, this.builder.addBlockWidget(⟦2-char-id⟧)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(⟦2-char-id⟧, FJ, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.length)
+                256 & ⟦2-char-id⟧.flags ? (⟦2-char-id⟧.flags &= -2, this.builder.addBlockWidget(⟦2-char-id⟧)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(⟦2-char-id⟧, VB, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.length)
               }
-            else if (⟦2-char-id⟧.isText()) this.builder.ensureLine(null), ⟦2-char-id⟧ || ⟦2-char-id⟧ != ⟦2-char-id⟧.length || this.cache.reused.has(⟦2-char-id⟧) ? (this.cache.add(⟦2-char-id⟧), this.builder.addText(⟦2-char-id⟧.text.slice(⟦2-char-id⟧, ⟦2-char-id⟧), FJ, ⟦2-char-id⟧)) : this.builder.addText(⟦2-char-id⟧.text, FJ, UJ, this.cache.reuse(⟦2-char-id⟧)), ⟦2-char-id⟧ = ⟦2-char-id⟧.length;
+            else if (⟦2-char-id⟧.isText()) this.builder.ensureLine(null), ⟦2-char-id⟧ || ⟦2-char-id⟧ != ⟦2-char-id⟧.length || this.cache.reused.has(⟦2-char-id⟧) ? (this.cache.add(⟦2-char-id⟧), this.builder.addText(⟦2-char-id⟧.text.slice(⟦2-char-id⟧, ⟦2-char-id⟧), VB, ⟦2-char-id⟧)) : this.builder.addText(⟦2-char-id⟧.text, VB, yB, this.cache.reuse(⟦2-char-id⟧)), ⟦2-char-id⟧ = ⟦2-char-id⟧.length;
             else if (⟦2-char-id⟧.isLine()) ⟦2-char-id⟧.flags &= -2, this.cache.reused.set(⟦2-char-id⟧, 1), this.builder.addLine(⟦2-char-id⟧);
             else if (⟦2-char-id⟧ instanceof ⟦2-char-id⟧) this.cache.add(⟦2-char-id⟧);
             else {
               if (!(⟦2-char-id⟧ instanceof ⟦2-char-id⟧)) return !1;
-              this.builder.ensureLine(null), this.builder.addMark(⟦2-char-id⟧, FJ, ⟦2-char-id⟧), this.cache.reused.set(⟦2-char-id⟧, 1), ⟦2-char-id⟧ = ⟦2-char-id⟧.length
+              this.builder.ensureLine(null), this.builder.addMark(⟦2-char-id⟧, VB, ⟦2-char-id⟧), this.cache.reused.set(⟦2-char-id⟧, 1), ⟦2-char-id⟧ = ⟦2-char-id⟧.length
             }
             this.openWidget = !1
           },
           enter: ⟦2-char-id⟧ => {
             ⟦2-char-id⟧.isLine() ? this.builder.addLineStart(⟦2-char-id⟧.attrs, this.cache.maybeReuse(⟦2-char-id⟧)) : (this.cache.add(⟦2-char-id⟧), ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ && ⟦2-char-id⟧.unshift(⟦2-char-id⟧.mark)), this.openWidget = !1
           },
-          cn: ⟦2-char-id⟧ => {
+          lD: ⟦2-char-id⟧ => {
             ⟦2-char-id⟧.isLine() ? ⟦2-char-id⟧.length && (⟦2-char-id⟧.length = ⟦2-char-id⟧ = 0) : ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ && (⟦2-char-id⟧.shift(), ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧, ⟦2-char-id⟧.length))
           },
           break: () => {
```

</details>

<details>
<summary>Hunk 310 · Change · +2 / -2</summary>

```diff
@@ -7909,8 +7909,8 @@
         let ⟦2-char-id⟧ = null,
           ⟦2-char-id⟧ = this.builder,
           ⟦2-char-id⟧ = 0,
-          ⟦2-char-id⟧ = ⟦2-char-id⟧.v.spans(this.je, JJ, cJ, {
-            point: (⟦2-char-id⟧, cJ, FJ, XJ, AJ, ⟦2-char-id⟧) => {
+          ⟦2-char-id⟧ = ⟦2-char-id⟧.u.spans(this.QB, BB, TB, {
+            point: (⟦2-char-id⟧, TB, VB, lB, JB, ⟦2-char-id⟧) => {
               if (⟦2-char-id⟧ instanceof ⟦2-char-id⟧) {
                 if (this.disallowBlockEffectsFor[⟦2-char-id⟧]) {
                   if (⟦2-char-id⟧.block) throw new RangeError("Block decorations may not be specified via plugins");
```

</details>

<details>
<summary>Hunk 311 · Change · +1 / -1</summary>

```diff
@@ -7925,7 +7925,7 @@
                       return ⟦2-char-id⟧
                     }(⟦2-char-id⟧),
                     ⟦2-char-id⟧ = this.cache.findWidget(⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧) || ⟦2-char-id⟧.of(⟦2-char-id⟧, this.view, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧);
-                  ⟦2-char-id⟧.block ? (⟦2-char-id⟧.startSide > 0 && ⟦2-char-id⟧.addLineStartIfNotCovered(⟦2-char-id⟧), ⟦2-char-id⟧.addBlockWidget(⟦2-char-id⟧)) : (⟦2-char-id⟧.ensureLine(⟦2-char-id⟧), ⟦2-char-id⟧.addInlineWidget(⟦2-char-id⟧, XJ, ⟦2-char-id⟧))
+                  ⟦2-char-id⟧.block ? (⟦2-char-id⟧.startSide > 0 && ⟦2-char-id⟧.addLineStartIfNotCovered(⟦2-char-id⟧), ⟦2-char-id⟧.addBlockWidget(⟦2-char-id⟧)) : (⟦2-char-id⟧.ensureLine(⟦2-char-id⟧), ⟦2-char-id⟧.addInlineWidget(⟦2-char-id⟧, lB, ⟦2-char-id⟧))
                 }
                 ⟦2-char-id⟧ = null
               } else ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 312 · Change · +2 / -2</summary>

```diff
@@ -7941,10 +7941,10 @@
               }(⟦2-char-id⟧, ⟦2-char-id⟧);
               ⟦2-char-id⟧ > ⟦2-char-id⟧ && this.text.skip(⟦2-char-id⟧ - ⟦2-char-id⟧)
             },
-            span: (⟦2-char-id⟧, cJ, FJ, ⟦2-char-id⟧) => {
+            span: (⟦2-char-id⟧, TB, VB, ⟦2-char-id⟧) => {
               for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧;) {
                 let ⟦2-char-id⟧ = this.text.next(Math.min(512, ⟦2-char-id⟧ - ⟦2-char-id⟧));
-                null == ⟦2-char-id⟧ ? (⟦2-char-id⟧.addLineStartIfNotCovered(⟦2-char-id⟧), ⟦2-char-id⟧.addBreak(), ⟦2-char-id⟧++) : (⟦2-char-id⟧.ensureLine(⟦2-char-id⟧), ⟦2-char-id⟧.addText(⟦2-char-id⟧, FJ, ⟦2-char-id⟧ == ⟦2-char-id⟧ ? eJ : ⟦2-char-id⟧.length), ⟦2-char-id⟧ += ⟦2-char-id⟧.length), ⟦2-char-id⟧ = null
+                null == ⟦2-char-id⟧ ? (⟦2-char-id⟧.addLineStartIfNotCovered(⟦2-char-id⟧), ⟦2-char-id⟧.addBreak(), ⟦2-char-id⟧++) : (⟦2-char-id⟧.ensureLine(⟦2-char-id⟧), ⟦2-char-id⟧.addText(⟦2-char-id⟧, VB, ⟦2-char-id⟧ == ⟦2-char-id⟧ ? pB : ⟦2-char-id⟧.length), ⟦2-char-id⟧ += ⟦2-char-id⟧.length), ⟦2-char-id⟧ = null
               }
             }
           });
```

</details>

<details>
<summary>Hunk 313 · Change · +1 / -1</summary>

```diff
@@ -7952,7 +7952,7 @@
       }
       forward(⟦2-char-id⟧, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-        ⟦2-char-id⟧ - ⟦2-char-id⟧ <= 10 ? this.old.advance(⟦2-char-id⟧ - ⟦2-char-id⟧, ZJ, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(⟦2-char-id⟧ - ⟦2-char-id⟧ - 10, -1), this.old.advance(5, ZJ, this.reuseWalker))
+        ⟦2-char-id⟧ - ⟦2-char-id⟧ <= 10 ? this.old.advance(⟦2-char-id⟧ - ⟦2-char-id⟧, dB, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(⟦2-char-id⟧ - ⟦2-char-id⟧ - 10, -1), this.old.advance(5, dB, this.reuseWalker))
       }
       getCompositionContext(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = [],
```

</details>

<details>
<summary>Hunk 314 · Change · +1 / -1</summary>

```diff
@@ -7960,7 +7960,7 @@
         for (let ⟦2-char-id⟧ = ⟦2-char-id⟧.parentNode;; ⟦2-char-id⟧ = ⟦2-char-id⟧.parentNode) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧);
           if (⟦2-char-id⟧ == this.view.contentDOM) break;
-          ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ ? ⟦2-char-id⟧.push(⟦2-char-id⟧) : (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.isLine()) ? ⟦2-char-id⟧ = JJ : ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ || ("DIV" != ⟦2-char-id⟧.nodeName || ⟦2-char-id⟧ || ⟦2-char-id⟧ == this.view.contentDOM ? ⟦2-char-id⟧ || ⟦2-char-id⟧.push(⟦2-char-id⟧.of(new ⟦2-char-id⟧({
+          ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ ? ⟦2-char-id⟧.push(⟦2-char-id⟧) : (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.isLine()) ? ⟦2-char-id⟧ = BB : ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ || ("DIV" != ⟦2-char-id⟧.nodeName || ⟦2-char-id⟧ || ⟦2-char-id⟧ == this.view.contentDOM ? ⟦2-char-id⟧ || ⟦2-char-id⟧.push(⟦2-char-id⟧.of(new ⟦2-char-id⟧({
             tagName: ⟦2-char-id⟧.nodeName.toLowerCase(),
             attributes: ⟦2-char-id⟧(⟦2-char-id⟧)
           }), ⟦2-char-id⟧)) : ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧))
```

</details>

<details>
<summary>Hunk 315 · Change · +1 / -1</summary>

```diff
@@ -7986,7 +7986,7 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧);
-      return ⟦2-char-id⟧ && ⟦2-char-id⟧.setDOM(⟦2-char-id⟧.cloneNode()), JJ
+      return ⟦2-char-id⟧ && ⟦2-char-id⟧.setDOM(⟦2-char-id⟧.cloneNode()), BB
     }
     class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 316 · Change · +1 / -1</summary>

```diff
@@ -8019,7 +8019,7 @@
     };
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧) {
-        this.view = ⟦2-char-id⟧, this.je = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = ⟦2-char-id⟧.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.contentDOM), this.updateInner([new ⟦2-char-id⟧(0, 0, 0, ⟦2-char-id⟧.state.doc.length)], null)
+        this.view = ⟦2-char-id⟧, this.QB = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = ⟦2-char-id⟧.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.contentDOM), this.updateInner([new ⟦2-char-id⟧(0, 0, 0, ⟦2-char-id⟧.state.doc.length)], null)
       }
       update(⟦2-char-id⟧) {
         var ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 317 · Change · +1 / -1</summary>

```diff
@@ -8039,7 +8039,7 @@
           }));
           return ⟦2-char-id⟧
         }(⟦2-char-id⟧.changes, this.hasComposition) || ⟦2-char-id⟧.selectionSet || (⟦2-char-id⟧ = ⟦2-char-id⟧.state.selection.main.head));
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧ > -1 ? function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧ > -1 ? function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
           if (!⟦2-char-id⟧) return null;
           let {
```

</details>

<details>
<summary>Hunk 318 · Change · +1 / -1</summary>

```diff
@@ -8051,7 +8051,7 @@
           if (⟦2-char-id⟧.state.doc.sliceString(⟦2-char-id⟧.from, ⟦2-char-id⟧.to) != ⟦2-char-id⟧) return null;
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.invertedDesc;
           return {
-            range: new ⟦2-char-id⟧(⟦2-char-id⟧.mapPos(⟦2-char-id⟧), ⟦2-char-id⟧.mapPos(⟦2-char-id⟧), eJ, ⟦2-char-id⟧),
+            range: new ⟦2-char-id⟧(⟦2-char-id⟧.mapPos(⟦2-char-id⟧), ⟦2-char-id⟧.mapPos(⟦2-char-id⟧), pB, ⟦2-char-id⟧),
             text: ⟦2-char-id⟧
           }
         }(this.view, ⟦2-char-id⟧.changes, ⟦2-char-id⟧) : null;
```

</details>

<details>
<summary>Hunk 319 · Change · +7 / -7</summary>

```diff
@@ -8060,23 +8060,23 @@
             from: ⟦2-char-id⟧,
             to: ⟦2-char-id⟧
           } = this.hasComposition;
-          ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, FJ, ⟦2-char-id⟧.changes.mapPos(⟦2-char-id⟧, -1), ⟦2-char-id⟧.changes.mapPos(⟦2-char-id⟧, 1)).addToSet(⟦2-char-id⟧.slice())
+          ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, VB, ⟦2-char-id⟧.changes.mapPos(⟦2-char-id⟧, -1), ⟦2-char-id⟧.changes.mapPos(⟦2-char-id⟧, 1)).addToSet(⟦2-char-id⟧.slice())
         }
         this.hasComposition = ⟦2-char-id⟧ ? {
           from: ⟦2-char-id⟧.range.fromB,
           to: ⟦2-char-id⟧.range.toB
         } : null, (⟦2-char-id⟧.ie || ⟦2-char-id⟧.chrome) && !⟦2-char-id⟧ && ⟦2-char-id⟧ && ⟦2-char-id⟧.state.doc.lines != ⟦2-char-id⟧.startState.doc.lines && (this.forceSelection = !0);
-        let ⟦2-char-id⟧ = this.je,
+        let ⟦2-char-id⟧ = this.QB,
           ⟦2-char-id⟧ = this.blockWrappers;
         this.updateDeco();
-        let ⟦2-char-id⟧ = function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+        let ⟦2-char-id⟧ = function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = new ⟦2-char-id⟧;
-          return ⟦2-char-id⟧.v.compare(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧), ⟦2-char-id⟧.changes
-        }(⟦2-char-id⟧, this.je, ⟦2-char-id⟧.changes);
+          return ⟦2-char-id⟧.u.compare(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧), ⟦2-char-id⟧.changes
+        }(⟦2-char-id⟧, this.QB, ⟦2-char-id⟧.changes);
         ⟦2-char-id⟧.length && (⟦2-char-id⟧ = ⟦2-char-id⟧.extendWithRanges(⟦2-char-id⟧, ⟦2-char-id⟧));
-        let ⟦2-char-id⟧ = function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+        let ⟦2-char-id⟧ = function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = new ⟦2-char-id⟧;
-          return ⟦2-char-id⟧.v.compare(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧), ⟦2-char-id⟧.changes
+          return ⟦2-char-id⟧.u.compare(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧), ⟦2-char-id⟧.changes
         }(⟦2-char-id⟧, this.blockWrappers, ⟦2-char-id⟧.changes);
         return ⟦2-char-id⟧.length && (⟦2-char-id⟧ = ⟦2-char-id⟧.extendWithRanges(⟦2-char-id⟧, ⟦2-char-id⟧)), ⟦2-char-id⟧ && !⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧.fromA <= ⟦2-char-id⟧.range.fromA && ⟦2-char-id⟧.toA >= ⟦2-char-id⟧.range.toA)) && (⟦2-char-id⟧ = ⟦2-char-id⟧.range.addToSet(⟦2-char-id⟧.slice())), !(2 & this.tile.flags && 0 == ⟦2-char-id⟧.length) && (this.updateInner(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.transactions.length && (this.lastUpdate = Date.now()), !0)
       }
```

</details>

<details>
<summary>Hunk 320 · Change · +2 / -2</summary>

```diff
@@ -8088,8 +8088,8 @@
         ⟦2-char-id⟧.ignore((() => {
           if (⟦2-char-id⟧ || ⟦2-char-id⟧.length) {
             let ⟦2-char-id⟧ = this.tile,
-              ⟦2-char-id⟧ = new ⟦2-char-id⟧(this.view, ZJ, this.blockWrappers, this.je, this.dynamicDecorationMap);
-            ⟦2-char-id⟧ && ⟦2-char-id⟧.get(⟦2-char-id⟧.text) && ⟦2-char-id⟧.cache.reused.set(⟦2-char-id⟧.get(⟦2-char-id⟧.text), 2), this.tile = ⟦2-char-id⟧.run(⟦2-char-id⟧, ⟦2-char-id⟧), pZ(⟦2-char-id⟧, ⟦2-char-id⟧.cache.reused)
+              ⟦2-char-id⟧ = new ⟦2-char-id⟧(this.view, dB, this.blockWrappers, this.QB, this.dynamicDecorationMap);
+            ⟦2-char-id⟧ && ⟦2-char-id⟧.get(⟦2-char-id⟧.text) && ⟦2-char-id⟧.cache.reused.set(⟦2-char-id⟧.get(⟦2-char-id⟧.text), 2), this.tile = ⟦2-char-id⟧.run(⟦2-char-id⟧, ⟦2-char-id⟧), Rd(⟦2-char-id⟧, ⟦2-char-id⟧.cache.reused)
           }
           this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.chrome || ⟦2-char-id⟧.ios ? {
```

</details>

<details>
<summary>Hunk 321 · Change · +1 / -1</summary>

```diff
@@ -8117,7 +8117,7 @@
         if (!(⟦2-char-id⟧ || ⟦2-char-id⟧ || ⟦2-char-id⟧)) return;
         let ⟦2-char-id⟧ = this.forceSelection;
         this.forceSelection = !1;
-        let ⟦2-char-id⟧, AJ, ⟦2-char-id⟧ = this.view.state.selection.main;
+        let ⟦2-char-id⟧, JB, ⟦2-char-id⟧ = this.view.state.selection.main;
         if (⟦2-char-id⟧.empty ? ⟦2-char-id⟧ = ⟦2-char-id⟧ = this.inlineDOMNearPos(⟦2-char-id⟧.anchor, ⟦2-char-id⟧.assoc || 1) : (⟦2-char-id⟧ = this.inlineDOMNearPos(⟦2-char-id⟧.head, ⟦2-char-id⟧.head == ⟦2-char-id⟧.from ? 1 : -1), ⟦2-char-id⟧ = this.inlineDOMNearPos(⟦2-char-id⟧.anchor, ⟦2-char-id⟧.anchor == ⟦2-char-id⟧.from ? 1 : -1)), ⟦2-char-id⟧.gecko && ⟦2-char-id⟧.empty && !this.hasComposition && (1 == (⟦2-char-id⟧ = ⟦2-char-id⟧).node.nodeType && ⟦2-char-id⟧.node.firstChild && (0 == ⟦2-char-id⟧.offset || "false" == ⟦2-char-id⟧.node.childNodes[⟦2-char-id⟧.offset - 1].contentEditable) && (⟦2-char-id⟧.offset == ⟦2-char-id⟧.node.childNodes.length || "false" == ⟦2-char-id⟧.node.childNodes[⟦2-char-id⟧.offset].contentEditable))) {
           let ⟦2-char-id⟧ = document.createTextNode("");
           this.view.observer.ignore((() => ⟦2-char-id⟧.node.insertBefore(⟦2-char-id⟧, ⟦2-char-id⟧.node.childNodes[⟦2-char-id⟧.offset] || null))), ⟦2-char-id⟧ = ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, 0), ⟦2-char-id⟧ = !0
```

</details>

<details>
<summary>Hunk 322 · Change · +1 / -1</summary>

```diff
@@ -8138,7 +8138,7 @@
               if (⟦2-char-id⟧.gecko) {
                 let ⟦2-char-id⟧ = (⟦2-char-id⟧ = ⟦2-char-id⟧.node, ⟦2-char-id⟧ = ⟦2-char-id⟧.offset, 1 != ⟦2-char-id⟧.nodeType ? 0 : (⟦2-char-id⟧ && "false" == ⟦2-char-id⟧.childNodes[⟦2-char-id⟧ - 1].contentEditable ? 1 : 0) | (⟦2-char-id⟧ < ⟦2-char-id⟧.childNodes.length && "false" == ⟦2-char-id⟧.childNodes[⟦2-char-id⟧].contentEditable ? 2 : 0));
                 if (⟦2-char-id⟧ && 3 != ⟦2-char-id⟧) {
-                  let ⟦2-char-id⟧ = (1 == ⟦2-char-id⟧ ? Xc : ⟦2-char-id⟧)(⟦2-char-id⟧.node, ⟦2-char-id⟧.offset);
+                  let ⟦2-char-id⟧ = (1 == ⟦2-char-id⟧ ? lT : ⟦2-char-id⟧)(⟦2-char-id⟧.node, ⟦2-char-id⟧.offset);
                   ⟦2-char-id⟧ && (⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.node, ⟦2-char-id⟧.offset))
                 }
               }
```

</details>

<details>
<summary>Hunk 323 · Change · +1 / -1</summary>

```diff
@@ -8184,7 +8184,7 @@
         let ⟦2-char-id⟧ = this.tile.nearest(⟦2-char-id⟧);
         if (!⟦2-char-id⟧) return 2 & this.tile.dom.compareDocumentPosition(⟦2-char-id⟧) ? 0 : this.view.state.doc.length;
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.posAtStart;
-        if (!⟦2-char-id⟧.isComposite()) return ⟦2-char-id⟧.isText() ? ⟦2-char-id⟧ == ⟦2-char-id⟧.dom ? ⟦2-char-id⟧ + cJ : ⟦2-char-id⟧ + (⟦2-char-id⟧ ? ⟦2-char-id⟧.length : 0) : ⟦2-char-id⟧;
+        if (!⟦2-char-id⟧.isComposite()) return ⟦2-char-id⟧.isText() ? ⟦2-char-id⟧ == ⟦2-char-id⟧.dom ? ⟦2-char-id⟧ + TB : ⟦2-char-id⟧ + (⟦2-char-id⟧ ? ⟦2-char-id⟧.length : 0) : ⟦2-char-id⟧;
         {
           let ⟦2-char-id⟧;
           if (⟦2-char-id⟧ == ⟦2-char-id⟧.dom) ⟦2-char-id⟧ = ⟦2-char-id⟧.dom.childNodes[⟦2-char-id⟧];
```

</details>

<details>
<summary>Hunk 324 · Change · +1 / -1</summary>

```diff
@@ -8195,7 +8195,7 @@
               if (⟦2-char-id⟧ == ⟦2-char-id⟧.dom) break;
               0 == ⟦2-char-id⟧ && ⟦2-char-id⟧.firstChild != ⟦2-char-id⟧.lastChild && (⟦2-char-id⟧ = ⟦2-char-id⟧ == ⟦2-char-id⟧.firstChild ? -1 : 1), ⟦2-char-id⟧ = ⟦2-char-id⟧
             }
-            ⟦2-char-id⟧ = ⟦2-char-id⟧ < 0 ? JJ : ⟦2-char-id⟧.nextSibling
+            ⟦2-char-id⟧ = ⟦2-char-id⟧ < 0 ? BB : ⟦2-char-id⟧.nextSibling
           }
           if (⟦2-char-id⟧ == ⟦2-char-id⟧.dom.firstChild) return ⟦2-char-id⟧;
           for (; ⟦2-char-id⟧ && !⟦2-char-id⟧.get(⟦2-char-id⟧);) ⟦2-char-id⟧ = ⟦2-char-id⟧.nextSibling;
```

</details>

<details>
<summary>Hunk 325 · Change · +1 / -1</summary>

```diff
@@ -8215,7 +8215,7 @@
         return ⟦2-char-id⟧.isWidget() ? ⟦2-char-id⟧.domPosFor(⟦2-char-id⟧, ⟦2-char-id⟧) : ⟦2-char-id⟧.domIn(⟦2-char-id⟧, ⟦2-char-id⟧)
       }
       inlineDOMNearPos(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        let ⟦2-char-id⟧, FJ, ⟦2-char-id⟧ = -1,
+        let ⟦2-char-id⟧, VB, ⟦2-char-id⟧ = -1,
           ⟦2-char-id⟧ = !1,
           ⟦2-char-id⟧ = -1,
           ⟦2-char-id⟧ = !1;
```

</details>

<details>
<summary>Hunk 326 · Change · +2 / -2</summary>

```diff
@@ -8234,13 +8234,13 @@
           tile: ⟦2-char-id⟧,
           offset: ⟦2-char-id⟧
         } = this.tile.resolveBlock(⟦2-char-id⟧, ⟦2-char-id⟧);
-        return ⟦2-char-id⟧.isWidget() ? ⟦2-char-id⟧.widget instanceof ⟦2-char-id⟧ ? null : ⟦2-char-id⟧.coordsInWidget(⟦2-char-id⟧, cJ, !0) : ⟦2-char-id⟧.coordsIn(⟦2-char-id⟧, ⟦2-char-id⟧)
+        return ⟦2-char-id⟧.isWidget() ? ⟦2-char-id⟧.widget instanceof ⟦2-char-id⟧ ? null : ⟦2-char-id⟧.coordsInWidget(⟦2-char-id⟧, TB, !0) : ⟦2-char-id⟧.coordsIn(⟦2-char-id⟧, ⟦2-char-id⟧)
       }
       lineAt(⟦2-char-id⟧, ⟦2-char-id⟧) {
         let {
           tile: ⟦2-char-id⟧
         } = this.tile.resolveBlock(⟦2-char-id⟧, ⟦2-char-id⟧);
-        return ⟦2-char-id⟧.isLine() ? ZJ : null
+        return ⟦2-char-id⟧.isLine() ? dB : null
       }
       coordsForChar(⟦2-char-id⟧) {
         let {
```

</details>

<details>
<summary>Hunk 327 · Change · +2 / -2</summary>

```diff
@@ -8257,9 +8257,9 @@
               }
               if ((⟦2-char-id⟧ -= ⟦2-char-id⟧.length) < 0) break
             } else if (⟦2-char-id⟧.isText() && ⟦2-char-id⟧ < ⟦2-char-id⟧.length) {
-              let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.X)(⟦2-char-id⟧.text, ⟦2-char-id⟧);
+              let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.S)(⟦2-char-id⟧.text, ⟦2-char-id⟧);
               if (⟦2-char-id⟧ == ⟦2-char-id⟧) return null;
-              let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.dom, ZJ, ⟦2-char-id⟧).getClientRects();
+              let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.dom, dB, ⟦2-char-id⟧).getClientRects();
               for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) {
                 let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
                 if (⟦2-char-id⟧ == ⟦2-char-id⟧.length - 1 || ⟦2-char-id⟧.top < ⟦2-char-id⟧.bottom && ⟦2-char-id⟧.left < ⟦2-char-id⟧.right) return ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 328 · Change · +1 / -1</summary>

```diff
@@ -8278,7 +8278,7 @@
           ⟦2-char-id⟧ = -1,
           ⟦2-char-id⟧ = this.view.textDirection == ⟦2-char-id⟧.LTR,
           ⟦2-char-id⟧ = 0,
-          ⟦2-char-id⟧ = (⟦2-char-id⟧, YJ, ⟦2-char-id⟧) => {
+          ⟦2-char-id⟧ = (⟦2-char-id⟧, oB, ⟦2-char-id⟧) => {
             for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.children.length && !(⟦2-char-id⟧ > ⟦2-char-id⟧); ⟦2-char-id⟧++) {
               let ⟦2-char-id⟧ = ⟦2-char-id⟧.children[⟦2-char-id⟧],
                 ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧.length,
```

</details>

<details>
<summary>Hunk 329 · Change · +1 / -1</summary>

```diff
@@ -8286,7 +8286,7 @@
                 {
                   height: ⟦2-char-id⟧
                 } = ⟦2-char-id⟧;
-              if (⟦2-char-id⟧ && !⟦2-char-id⟧ && (⟦2-char-id⟧ += ⟦2-char-id⟧.top - ⟦2-char-id⟧.top), ⟦2-char-id⟧ instanceof ⟦2-char-id⟧) ⟦2-char-id⟧ > ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, YJ, ⟦2-char-id⟧);
+              if (⟦2-char-id⟧ && !⟦2-char-id⟧ && (⟦2-char-id⟧ += ⟦2-char-id⟧.top - ⟦2-char-id⟧.top), ⟦2-char-id⟧ instanceof ⟦2-char-id⟧) ⟦2-char-id⟧ > ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, oB, ⟦2-char-id⟧);
               else if (⟦2-char-id⟧ >= ⟦2-char-id⟧ && (⟦2-char-id⟧ > 0 && ⟦2-char-id⟧.push(-⟦2-char-id⟧), ⟦2-char-id⟧.push(⟦2-char-id⟧ + ⟦2-char-id⟧), ⟦2-char-id⟧ = 0, ⟦2-char-id⟧)) {
                 let ⟦2-char-id⟧ = ⟦2-char-id⟧.dom.lastChild,
                   ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧) : [];
```

</details>

<details>
<summary>Hunk 330 · Change · +1 / -1</summary>

```diff
@@ -8299,7 +8299,7 @@
               ⟦2-char-id⟧ && ⟦2-char-id⟧ == ⟦2-char-id⟧.children.length - 1 && (⟦2-char-id⟧ += ⟦2-char-id⟧.bottom - ⟦2-char-id⟧.bottom), ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧.breakAfter
             }
           };
-        return ⟦2-char-id⟧(this.tile, 0, null), cJ
+        return ⟦2-char-id⟧(this.tile, 0, null), TB
       }
       textDirectionAt(⟦2-char-id⟧) {
         let {
```

</details>

<details>
<summary>Hunk 331 · Change · +1 / -1</summary>

```diff
@@ -8325,7 +8325,7 @@
           }
         }));
         if (⟦2-char-id⟧) return ⟦2-char-id⟧;
-        let ⟦2-char-id⟧, ZJ, FJ, ⟦2-char-id⟧ = document.createElement("div");
+        let ⟦2-char-id⟧, dB, VB, ⟦2-char-id⟧ = document.createElement("div");
         return ⟦2-char-id⟧.className = "cm-line", ⟦2-char-id⟧.style.width = "99999px", ⟦2-char-id⟧.style.position = "absolute", ⟦2-char-id⟧.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
           this.tile.dom.appendChild(⟦2-char-id⟧);
           let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.firstChild)[0];
```

</details>

<details>
<summary>Hunk 332 · Change · +1 / -1</summary>

```diff
@@ -8364,7 +8364,7 @@
             let ⟦2-char-id⟧ = "function" == typeof ⟦2-char-id⟧;
             return ⟦2-char-id⟧ && (⟦2-char-id⟧ = !0), ⟦2-char-id⟧ ? ⟦2-char-id⟧(this.view) : ⟦2-char-id⟧
           }));
-        for (⟦2-char-id⟧.length && (this.dynamicDecorationMap[⟦2-char-id⟧++] = ⟦2-char-id⟧, ⟦2-char-id⟧.push(⟦2-char-id⟧.v.join(⟦2-char-id⟧))), this.je = [this.editContextFormatting, ...cJ, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; ⟦2-char-id⟧ < this.je.length;) this.dynamicDecorationMap[⟦2-char-id⟧++] = !1;
+        for (⟦2-char-id⟧.length && (this.dynamicDecorationMap[⟦2-char-id⟧++] = ⟦2-char-id⟧, ⟦2-char-id⟧.push(⟦2-char-id⟧.u.join(⟦2-char-id⟧))), this.QB = [this.editContextFormatting, ...TB, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; ⟦2-char-id⟧ < this.QB.length;) this.dynamicDecorationMap[⟦2-char-id⟧++] = !1;
         this.blockWrappers = this.view.state.facet(⟦2-char-id⟧).map((⟦2-char-id⟧ => "function" == typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧(this.view) : ⟦2-char-id⟧))
       }
       scrollIntoView(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 333 · Change · +2 / -2</summary>

```diff
@@ -8376,12 +8376,12 @@
         for (let ⟦2-char-id⟧ of this.view.state.facet(⟦2-char-id⟧)) try {
           if (⟦2-char-id⟧(this.view, ⟦2-char-id⟧.range, ⟦2-char-id⟧)) return !0
         } catch (⟦2-char-id⟧) {
-          ic(this.view.state, jJ, "scroll handler")
+          GT(this.view.state, gB, "scroll handler")
         }
         let ⟦2-char-id⟧, {
             range: ⟦2-char-id⟧
           } = ⟦2-char-id⟧,
-          ⟦2-char-id⟧ = this.coordsAt(⟦2-char-id⟧.head, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.assoc) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧.empty ? 0 : ⟦2-char-id⟧.head > ⟦2-char-id⟧.anchor ? -1 : 1);
+          ⟦2-char-id⟧ = this.coordsAt(⟦2-char-id⟧.head, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.assoc) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧.empty ? 0 : ⟦2-char-id⟧.head > ⟦2-char-id⟧.anchor ? -1 : 1);
         if (!⟦2-char-id⟧) return;
         !⟦2-char-id⟧.empty && (⟦2-char-id⟧ = this.coordsAt(⟦2-char-id⟧.anchor, ⟦2-char-id⟧.anchor > ⟦2-char-id⟧.head ? -1 : 1)) && (⟦2-char-id⟧ = {
           left: Math.min(⟦2-char-id⟧.left, ⟦2-char-id⟧.left),
```

</details>

<details>
<summary>Hunk 334 · Change · +1 / -1</summary>

```diff
@@ -8400,7 +8400,7 @@
             offsetWidth: ⟦2-char-id⟧,
             offsetHeight: ⟦2-char-id⟧
           } = this.view.scrollDOM;
-        if (function(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, eJ, XJ, ⟦2-char-id⟧) {
+        if (function(⟦2-char-id⟧, TB, dB, VB, yB, pB, lB, ⟦2-char-id⟧) {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧.ownerDocument,
               ⟦2-char-id⟧ = ⟦2-char-id⟧.defaultView || window;
             for (let ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = !1; ⟦2-char-id⟧ && !⟦2-char-id⟧;)
```

</details>

<details>
<summary>Hunk 335 · Change · +2 / -2</summary>

```diff
@@ -8431,9 +8431,9 @@
                 else {
                   let ⟦2-char-id⟧ = ⟦2-char-id⟧.bottom - ⟦2-char-id⟧.top,
                     ⟦2-char-id⟧ = ⟦2-char-id⟧.bottom - ⟦2-char-id⟧.top;
-                  ⟦2-char-id⟧ = ("center" == ⟦2-char-id⟧ && ⟦2-char-id⟧ <= ⟦2-char-id⟧ ? ⟦2-char-id⟧.top + ⟦2-char-id⟧ / 2 - ⟦2-char-id⟧ / 2 : "start" == ⟦2-char-id⟧ || "center" == ⟦2-char-id⟧ && ⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧.top - XJ : ⟦2-char-id⟧.bottom - ⟦2-char-id⟧ + ⟦2-char-id⟧) - ⟦2-char-id⟧.top
+                  ⟦2-char-id⟧ = ("center" == ⟦2-char-id⟧ && ⟦2-char-id⟧ <= ⟦2-char-id⟧ ? ⟦2-char-id⟧.top + ⟦2-char-id⟧ / 2 - ⟦2-char-id⟧ / 2 : "start" == ⟦2-char-id⟧ || "center" == ⟦2-char-id⟧ && ⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧.top - lB : ⟦2-char-id⟧.bottom - ⟦2-char-id⟧ + ⟦2-char-id⟧) - ⟦2-char-id⟧.top
                 }
-                if ("nearest" == ⟦2-char-id⟧ ? ⟦2-char-id⟧.left < ⟦2-char-id⟧.left + ⟦2-char-id⟧ ? (⟦2-char-id⟧ = ⟦2-char-id⟧.left - (⟦2-char-id⟧.left + ⟦2-char-id⟧), ⟦2-char-id⟧ > 0 && ⟦2-char-id⟧.right > ⟦2-char-id⟧.right + ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.right - ⟦2-char-id⟧.right + ⟦2-char-id⟧)) : ⟦2-char-id⟧.right > ⟦2-char-id⟧.right - ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.right - ⟦2-char-id⟧.right + ⟦2-char-id⟧, ⟦2-char-id⟧ < 0 && ⟦2-char-id⟧.left < ⟦2-char-id⟧.left + ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.left - (⟦2-char-id⟧.left + ⟦2-char-id⟧))) : ⟦2-char-id⟧ = ("center" == ⟦2-char-id⟧ ? ⟦2-char-id⟧.left + (⟦2-char-id⟧.right - ⟦2-char-id⟧.left) / 2 - (⟦2-char-id⟧.right - ⟦2-char-id⟧.left) / 2 : "start" == ⟦2-char-id⟧ == ⟦2-char-id⟧ ? ⟦2-char-id⟧.left - eJ : ⟦2-char-id⟧.right - (⟦2-char-id⟧.right - ⟦2-char-id⟧.left) + ⟦2-char-id⟧) - ⟦2-char-id⟧.left, ⟦2-char-id⟧ || ⟦2-char-id⟧)
+                if ("nearest" == ⟦2-char-id⟧ ? ⟦2-char-id⟧.left < ⟦2-char-id⟧.left + ⟦2-char-id⟧ ? (⟦2-char-id⟧ = ⟦2-char-id⟧.left - (⟦2-char-id⟧.left + ⟦2-char-id⟧), ⟦2-char-id⟧ > 0 && ⟦2-char-id⟧.right > ⟦2-char-id⟧.right + ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.right - ⟦2-char-id⟧.right + ⟦2-char-id⟧)) : ⟦2-char-id⟧.right > ⟦2-char-id⟧.right - ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.right - ⟦2-char-id⟧.right + ⟦2-char-id⟧, ⟦2-char-id⟧ < 0 && ⟦2-char-id⟧.left < ⟦2-char-id⟧.left + ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.left - (⟦2-char-id⟧.left + ⟦2-char-id⟧))) : ⟦2-char-id⟧ = ("center" == ⟦2-char-id⟧ ? ⟦2-char-id⟧.left + (⟦2-char-id⟧.right - ⟦2-char-id⟧.left) / 2 - (⟦2-char-id⟧.right - ⟦2-char-id⟧.left) / 2 : "start" == ⟦2-char-id⟧ == ⟦2-char-id⟧ ? ⟦2-char-id⟧.left - pB : ⟦2-char-id⟧.right - (⟦2-char-id⟧.right - ⟦2-char-id⟧.left) + ⟦2-char-id⟧) - ⟦2-char-id⟧.left, ⟦2-char-id⟧ || ⟦2-char-id⟧)
                   if (⟦2-char-id⟧) ⟦2-char-id⟧.scrollBy(⟦2-char-id⟧, ⟦2-char-id⟧);
                   else {
                     let ⟦2-char-id⟧ = 0,
```

</details>

<details>
<summary>Hunk 336 · Change · +1 / -1</summary>

```diff
@@ -8463,7 +8463,7 @@
                 if (11 != ⟦2-char-id⟧.nodeType) break;
                 ⟦2-char-id⟧ = ⟦2-char-id⟧.host
               }
-          }(this.view.scrollDOM, XJ, ⟦2-char-id⟧.head < ⟦2-char-id⟧.anchor ? -1 : 1, ⟦2-char-id⟧.x, ⟦2-char-id⟧.y, Math.max(Math.min(⟦2-char-id⟧.xMargin, ⟦2-char-id⟧), -⟦2-char-id⟧), Math.max(Math.min(⟦2-char-id⟧.yMargin, ⟦2-char-id⟧), -⟦2-char-id⟧), this.view.textDirection == ⟦2-char-id⟧.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (⟦2-char-id⟧.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || ⟦2-char-id⟧.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
+          }(this.view.scrollDOM, lB, ⟦2-char-id⟧.head < ⟦2-char-id⟧.anchor ? -1 : 1, ⟦2-char-id⟧.x, ⟦2-char-id⟧.y, Math.max(Math.min(⟦2-char-id⟧.xMargin, ⟦2-char-id⟧), -⟦2-char-id⟧), Math.max(Math.min(⟦2-char-id⟧.yMargin, ⟦2-char-id⟧), -⟦2-char-id⟧), this.view.textDirection == ⟦2-char-id⟧.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (⟦2-char-id⟧.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || ⟦2-char-id⟧.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
           let ⟦2-char-id⟧ = this.view.docView.lineAt(⟦2-char-id⟧.head, 1);
           ⟦2-char-id⟧ && ⟦2-char-id⟧.dom.scrollIntoView({
             block: "nearest"
```

</details>

<details>
<summary>Hunk 337 · Change · +1 / -1</summary>

```diff
@@ -8475,7 +8475,7 @@
         return ⟦2-char-id⟧(this.tile.resolveBlock(⟦2-char-id⟧, 1).tile)
       }
       destroy() {
-        pZ(this.tile)
+        Rd(this.tile)
       }
     }
 
```

</details>

<details>
<summary>Hunk 338 · Change · +3 / -3</summary>

```diff
@@ -8514,13 +8514,13 @@
         this.changes = []
       }
       compareRange(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        pJ(⟦2-char-id⟧, cJ, this.changes)
+        QB(⟦2-char-id⟧, TB, this.changes)
       }
       comparePoint(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        pJ(⟦2-char-id⟧, cJ, this.changes)
+        QB(⟦2-char-id⟧, TB, this.changes)
       }
       boundChange(⟦2-char-id⟧) {
-        pJ(⟦2-char-id⟧, JJ, this.changes)
+        QB(⟦2-char-id⟧, BB, this.changes)
       }
     };
     class ⟦2-char-id⟧ {
```

</details>

<details>
<summary>Hunk 339 · Change · +2 / -2</summary>

```diff
@@ -8528,11 +8528,11 @@
         this.changes = []
       }
       compareRange(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        pJ(⟦2-char-id⟧, cJ, this.changes)
+        QB(⟦2-char-id⟧, TB, this.changes)
       }
       comparePoint() {}
       boundChange(⟦2-char-id⟧) {
-        pJ(⟦2-char-id⟧, JJ, this.changes)
+        QB(⟦2-char-id⟧, BB, this.changes)
       }
     }
     class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
```

</details>

<details>
<summary>Hunk 340 · Change · +1 / -1</summary>

```diff
@@ -8541,7 +8541,7 @@
       }
       toDOM() {
         let ⟦2-char-id⟧ = document.createElement("div");
-        return ⟦2-char-id⟧.className = "cm-gap", this.updateDOM(⟦2-char-id⟧), JJ
+        return ⟦2-char-id⟧.className = "cm-gap", this.updateDOM(⟦2-char-id⟧), BB
       }
       ⟦2-char-id⟧(⟦2-char-id⟧) {
         return ⟦2-char-id⟧.height == this.height
```

</details>

<details>
<summary>Hunk 341 · Change · +1 / -1</summary>

```diff
@@ -8560,7 +8560,7 @@
       }
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.lineBlockAt(⟦2-char-id⟧);
       if (Array.isArray(⟦2-char-id⟧.type)) {
         let ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 342 · Change · +1 / -1</summary>

```diff
@@ -8568,7 +8568,7 @@
           if (⟦2-char-id⟧.from > ⟦2-char-id⟧) break;
           if (!(⟦2-char-id⟧.to < ⟦2-char-id⟧)) {
             if (⟦2-char-id⟧.from < ⟦2-char-id⟧ && ⟦2-char-id⟧.to > ⟦2-char-id⟧) return ⟦2-char-id⟧;
-            ⟦2-char-id⟧ && (⟦2-char-id⟧.type != ⟦2-char-id⟧.Text || ⟦2-char-id⟧.type == ⟦2-char-id⟧.type && !(⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧.from < cJ : ⟦2-char-id⟧.to > ⟦2-char-id⟧)) || (⟦2-char-id⟧ = ⟦2-char-id⟧)
+            ⟦2-char-id⟧ && (⟦2-char-id⟧.type != ⟦2-char-id⟧.Text || ⟦2-char-id⟧.type == ⟦2-char-id⟧.type && !(⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧.from < TB : ⟦2-char-id⟧.to > ⟦2-char-id⟧)) || (⟦2-char-id⟧ = ⟦2-char-id⟧)
           }
         }
         return ⟦2-char-id⟧ || ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 343 · Change · +2 / -2</summary>

```diff
@@ -8576,12 +8576,12 @@
       return ⟦2-char-id⟧
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.state.doc.lineAt(⟦2-char-id⟧.head),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.bidiSpans(⟦2-char-id⟧),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.textDirectionAt(⟦2-char-id⟧.from);
       for (let ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = null;;) {
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, eJ, XJ, AJ, ⟦2-char-id⟧),
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, pB, lB, JB, ⟦2-char-id⟧),
           ⟦2-char-id⟧ = ⟦2-char-id⟧;
         if (!⟦2-char-id⟧) {
           if (⟦2-char-id⟧.number == (⟦2-char-id⟧ ? ⟦2-char-id⟧.state.doc.lines : 1)) return ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 344 · Change · +3 / -3</summary>

```diff
@@ -8597,13 +8597,13 @@
       }
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       for (;;) {
         let ⟦2-char-id⟧ = 0;
-        for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.between(⟦2-char-id⟧ - 1, ⟦2-char-id⟧ + 1, ((⟦2-char-id⟧, UJ, ⟦2-char-id⟧) => {
+        for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.between(⟦2-char-id⟧ - 1, ⟦2-char-id⟧ + 1, ((⟦2-char-id⟧, yB, ⟦2-char-id⟧) => {
           if (⟦2-char-id⟧ > ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧) {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧ || ⟦2-char-id⟧ || (⟦2-char-id⟧ - ⟦2-char-id⟧ < ⟦2-char-id⟧ - ⟦2-char-id⟧ ? -1 : 1);
-            ⟦2-char-id⟧ = ⟦2-char-id⟧ < 0 ? JJ : ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧
+            ⟦2-char-id⟧ = ⟦2-char-id⟧ < 0 ? BB : ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧
           }
         }));
         if (!⟦2-char-id⟧) return ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 345 · Change · +12 / -12</summary>

```diff
@@ -8612,25 +8612,25 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = null;
-      for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.ws.length; ⟦2-char-id⟧++) {
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧.ws[⟦2-char-id⟧],
+      for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.ek.length; ⟦2-char-id⟧++) {
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧.ek[⟦2-char-id⟧],
           ⟦2-char-id⟧ = null;
         if (⟦2-char-id⟧.empty) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.from, 0);
-          ⟦2-char-id⟧ != ⟦2-char-id⟧.from && (⟦2-char-id⟧ = ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧, -1))
+          ⟦2-char-id⟧ != ⟦2-char-id⟧.from && (⟦2-char-id⟧ = ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧, -1))
         } else {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.from, -1),
             ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.to, 1);
-          ⟦2-char-id⟧ == ⟦2-char-id⟧.from && ⟦2-char-id⟧ == ⟦2-char-id⟧.to || (⟦2-char-id⟧ = ⟦2-char-id⟧.m.range(⟦2-char-id⟧.from == ⟦2-char-id⟧.anchor ? cJ : ⟦2-char-id⟧, ⟦2-char-id⟧.from == ⟦2-char-id⟧.head ? cJ : ⟦2-char-id⟧))
-        }
-        ⟦2-char-id⟧ && (⟦2-char-id⟧ || (⟦2-char-id⟧ = ⟦2-char-id⟧.ws.slice()), ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧)
-      }
-      return ⟦2-char-id⟧ ? ⟦2-char-id⟧.m.create(⟦2-char-id⟧, ⟦2-char-id⟧.mainIndex) : ⟦2-char-id⟧
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+          ⟦2-char-id⟧ == ⟦2-char-id⟧.from && ⟦2-char-id⟧ == ⟦2-char-id⟧.to || (⟦2-char-id⟧ = ⟦2-char-id⟧.h.range(⟦2-char-id⟧.from == ⟦2-char-id⟧.anchor ? TB : ⟦2-char-id⟧, ⟦2-char-id⟧.from == ⟦2-char-id⟧.head ? TB : ⟦2-char-id⟧))
+        }
+        ⟦2-char-id⟧ && (⟦2-char-id⟧ || (⟦2-char-id⟧ = ⟦2-char-id⟧.ek.slice()), ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧)
+      }
+      return ⟦2-char-id⟧ ? ⟦2-char-id⟧.h.create(⟦2-char-id⟧, ⟦2-char-id⟧.mainIndex) : ⟦2-char-id⟧
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.state.facet(⟦2-char-id⟧).map((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧))), ⟦2-char-id⟧.from, ⟦2-char-id⟧.head > ⟦2-char-id⟧.from ? -1 : 1);
-      return ⟦2-char-id⟧ == ⟦2-char-id⟧.from ? ZJ : ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧, ⟦2-char-id⟧ < ⟦2-char-id⟧.from ? 1 : -1)
+      return ⟦2-char-id⟧ == ⟦2-char-id⟧.from ? dB : ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧, ⟦2-char-id⟧ < ⟦2-char-id⟧.from ? 1 : -1)
     }
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 346 · Change · +1 / -1</summary>

```diff
@@ -8638,7 +8638,7 @@
       }
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.contentDOM.getBoundingClientRect(),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.top + ⟦2-char-id⟧.viewState.paddingTop,
         {
```

</details>

<details>
<summary>Hunk 347 · Change · +7 / -7</summary>

```diff
@@ -8653,32 +8653,32 @@
         if (⟦2-char-id⟧.type == ⟦2-char-id⟧.Text) {
           if (⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧.to < ⟦2-char-id⟧.viewport.from : ⟦2-char-id⟧.from > ⟦2-char-id⟧.viewport.to) break;
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.docView.coordsAt(⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧.from : ⟦2-char-id⟧.to, ⟦2-char-id⟧ > 0 ? -1 : 1);
-          if (⟦2-char-id⟧ && (⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧.top <= ⟦2-char-id⟧ + AJ : ⟦2-char-id⟧.bottom >= ⟦2-char-id⟧ + ⟦2-char-id⟧)) break
+          if (⟦2-char-id⟧ && (⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧.top <= ⟦2-char-id⟧ + JB : ⟦2-char-id⟧.bottom >= ⟦2-char-id⟧ + ⟦2-char-id⟧)) break
         }
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.viewState.heightOracle.textHeight / 2;
-        ⟦2-char-id⟧ = ⟦2-char-id⟧ > 0 ? ⟦2-char-id⟧.bottom + cJ : ⟦2-char-id⟧.top - ⟦2-char-id⟧
+        ⟦2-char-id⟧ = ⟦2-char-id⟧ > 0 ? ⟦2-char-id⟧.bottom + TB : ⟦2-char-id⟧.top - ⟦2-char-id⟧
       }
       if (⟦2-char-id⟧.viewport.from >= ⟦2-char-id⟧.to || ⟦2-char-id⟧.viewport.to <= ⟦2-char-id⟧.from) {
         if (⟦2-char-id⟧) return null;
         if (⟦2-char-id⟧.type == ⟦2-char-id⟧.Text) {
-          let ⟦2-char-id⟧ = function(⟦2-char-id⟧, cJ, ZJ, UJ, ⟦2-char-id⟧) {
+          let ⟦2-char-id⟧ = function(⟦2-char-id⟧, TB, dB, yB, ⟦2-char-id⟧) {
             let ⟦2-char-id⟧ = Math.round((⟦2-char-id⟧ - ⟦2-char-id⟧.left) * ⟦2-char-id⟧.defaultCharacterWidth);
             if (⟦2-char-id⟧.lineWrapping && ⟦2-char-id⟧.height > 1.5 * ⟦2-char-id⟧.defaultLineHeight) {
               let ⟦2-char-id⟧ = ⟦2-char-id⟧.viewState.heightOracle.textHeight;
               ⟦2-char-id⟧ += Math.floor((⟦2-char-id⟧ - ⟦2-char-id⟧.top - .5 * (⟦2-char-id⟧.defaultLineHeight - ⟦2-char-id⟧)) / ⟦2-char-id⟧) * ⟦2-char-id⟧.viewState.heightOracle.lineLength
             }
             let ⟦2-char-id⟧ = ⟦2-char-id⟧.state.sliceDoc(⟦2-char-id⟧.from, ⟦2-char-id⟧.to);
-            return ⟦2-char-id⟧.from + (0, ⟦2-char-id⟧._)(⟦2-char-id⟧, XJ, ⟦2-char-id⟧.state.tabSize)
-          }(⟦2-char-id⟧, XJ, eJ, qJ, ⟦2-char-id⟧);
+            return ⟦2-char-id⟧.from + (0, ⟦2-char-id⟧.U)(⟦2-char-id⟧, lB, ⟦2-char-id⟧.state.tabSize)
+          }(⟦2-char-id⟧, lB, pB, YB, ⟦2-char-id⟧);
           return new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ == ⟦2-char-id⟧.from ? 1 : -1)
         }
       }
       if (⟦2-char-id⟧.type != ⟦2-char-id⟧.Text) return ⟦2-char-id⟧ < (⟦2-char-id⟧.top + ⟦2-char-id⟧.bottom) / 2 ? new ⟦2-char-id⟧(⟦2-char-id⟧.from, 1) : new ⟦2-char-id⟧(⟦2-char-id⟧.to, -1);
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.docView.lineAt(⟦2-char-id⟧.from, 2);
-      return ⟦2-char-id⟧ && ⟦2-char-id⟧.length == ⟦2-char-id⟧.length || (⟦2-char-id⟧ = ⟦2-char-id⟧.docView.lineAt(⟦2-char-id⟧.from, -2)), new ⟦2-char-id⟧(⟦2-char-id⟧, qJ, jJ, ⟦2-char-id⟧.textDirectionAt(⟦2-char-id⟧.from)).scanTile(⟦2-char-id⟧, ⟦2-char-id⟧.from)
+      return ⟦2-char-id⟧ && ⟦2-char-id⟧.length == ⟦2-char-id⟧.length || (⟦2-char-id⟧ = ⟦2-char-id⟧.docView.lineAt(⟦2-char-id⟧.from, -2)), new ⟦2-char-id⟧(⟦2-char-id⟧, YB, gB, ⟦2-char-id⟧.textDirectionAt(⟦2-char-id⟧.from)).scanTile(⟦2-char-id⟧, ⟦2-char-id⟧.from)
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         this.view = ⟦2-char-id⟧, this.x = ⟦2-char-id⟧, this.y = ⟦2-char-id⟧, this.baseDir = ⟦2-char-id⟧, this.line = null, this.spans = null
       }
       bidiSpansAt(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 348 · Change · +3 / -3</summary>

```diff
@@ -8706,16 +8706,16 @@
         return ⟦2-char-id⟧.length > 1 || ⟦2-char-id⟧.length && (⟦2-char-id⟧[0].level != this.baseDir || ⟦2-char-id⟧[0].to + ⟦2-char-id⟧.from < ⟦2-char-id⟧)
       }
       scan(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        let ⟦2-char-id⟧, FJ, UJ, ⟦2-char-id⟧ = 0,
+        let ⟦2-char-id⟧, VB, yB, ⟦2-char-id⟧ = 0,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.length - 1,
           ⟦2-char-id⟧ = new Set,
           ⟦2-char-id⟧ = this.bidiIn(⟦2-char-id⟧[0], ⟦2-char-id⟧[⟦2-char-id⟧]),
           ⟦2-char-id⟧ = -1,
           ⟦2-char-id⟧ = 1⟦2-char-id⟧;
-        JJ: for (; ⟦2-char-id⟧ < ⟦2-char-id⟧;) {
+        BB: for (; ⟦2-char-id⟧ < ⟦2-char-id⟧;) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧,
             ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧ >> 1;
-          cJ: if (⟦2-char-id⟧.has(⟦2-char-id⟧)) {
+          TB: if (⟦2-char-id⟧.has(⟦2-char-id⟧)) {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧ + Math.floor(Math.random() * ⟦2-char-id⟧);
             for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) {
               if (!⟦2-char-id⟧.has(⟦2-char-id⟧)) {
```

</details>

<details>
<summary>Hunk 349 · Change · +1 / -1</summary>

```diff
@@ -8743,7 +8743,7 @@
             }
         }
         if (!⟦2-char-id⟧) {
-          let ⟦2-char-id⟧ = ⟦2-char-id⟧ && (!⟦2-char-id⟧ || this.y - ⟦2-char-id⟧.bottom < ⟦2-char-id⟧.top - this.y) ? ZJ : ⟦2-char-id⟧;
+          let ⟦2-char-id⟧ = ⟦2-char-id⟧ && (!⟦2-char-id⟧ || this.y - ⟦2-char-id⟧.bottom < ⟦2-char-id⟧.top - this.y) ? dB : ⟦2-char-id⟧;
           return this.y = (⟦2-char-id⟧.top + ⟦2-char-id⟧.bottom) / 2, this.scan(⟦2-char-id⟧, ⟦2-char-id⟧)
         }
         if (⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 350 · Change · +2 / -2</summary>

```diff
@@ -8758,12 +8758,12 @@
       }
       scanText(⟦2-char-id⟧, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = [];
-        for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.X)(⟦2-char-id⟧.text, ⟦2-char-id⟧)) ⟦2-char-id⟧.push(⟦2-char-id⟧ + ⟦2-char-id⟧);
+        for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.S)(⟦2-char-id⟧.text, ⟦2-char-id⟧)) ⟦2-char-id⟧.push(⟦2-char-id⟧ + ⟦2-char-id⟧);
         ⟦2-char-id⟧.push(⟦2-char-id⟧ + ⟦2-char-id⟧.length);
         let ⟦2-char-id⟧ = this.scan(⟦2-char-id⟧, (⟦2-char-id⟧ => {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧] - ⟦2-char-id⟧,
             ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 1] - ⟦2-char-id⟧;
-          return ⟦2-char-id⟧(⟦2-char-id⟧.dom, UJ, ⟦2-char-id⟧).getClientRects()
+          return ⟦2-char-id⟧(⟦2-char-id⟧.dom, yB, ⟦2-char-id⟧).getClientRects()
         }));
         return ⟦2-char-id⟧.after ? new ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧.i + 1], -1) : new ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧.i], 1)
       }
```

</details>

<details>
<summary>Hunk 351 · Change · +1 / -1</summary>

```diff
@@ -8788,7 +8788,7 @@
     const ⟦2-char-id⟧ = "\uffff";
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        this.points = ⟦2-char-id⟧, this.view = ⟦2-char-id⟧, this.text = "", this.lineSeparator = ⟦2-char-id⟧.state.facet(⟦2-char-id⟧.o.lineSeparator)
+        this.points = ⟦2-char-id⟧, this.view = ⟦2-char-id⟧, this.text = "", this.lineSeparator = ⟦2-char-id⟧.state.facet(⟦2-char-id⟧.i.lineSeparator)
       }
       append(⟦2-char-id⟧) {
         this.text += ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 352 · Change · +5 / -5</summary>

```diff
@@ -8838,11 +8838,11 @@
         for (let ⟦2-char-id⟧ of this.points) ⟦2-char-id⟧.node == ⟦2-char-id⟧ && ⟦2-char-id⟧.childNodes[⟦2-char-id⟧.offset] == ⟦2-char-id⟧ && (⟦2-char-id⟧.pos = this.text.length)
       }
       findPointInside(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        for (let ⟦2-char-id⟧ of this.points)(3 == ⟦2-char-id⟧.nodeType ? ⟦2-char-id⟧.node == JJ : ⟦2-char-id⟧.contains(⟦2-char-id⟧.node)) && (⟦2-char-id⟧.pos = this.text.length + (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.node, ⟦2-char-id⟧.offset) ? cJ : 0))
-      }
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+        for (let ⟦2-char-id⟧ of this.points)(3 == ⟦2-char-id⟧.nodeType ? ⟦2-char-id⟧.node == BB : ⟦2-char-id⟧.contains(⟦2-char-id⟧.node)) && (⟦2-char-id⟧.pos = this.text.length + (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.node, ⟦2-char-id⟧.offset) ? TB : 0))
+      }
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       for (;;) {
         if (!⟦2-char-id⟧ || ⟦2-char-id⟧ < ⟦2-char-id⟧(⟦2-char-id⟧)) return !1;
         if (⟦2-char-id⟧ == ⟦2-char-id⟧) return !0;
```

</details>

<details>
<summary>Hunk 353 · Change · +2 / -2</summary>

```diff
@@ -8870,14 +8870,14 @@
       }
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         this.typeOver = ⟦2-char-id⟧, this.bounds = null, this.text = "", this.domChanged = ⟦2-char-id⟧ > -1;
         let {
           impreciseHead: ⟦2-char-id⟧,
           impreciseAnchor: ⟦2-char-id⟧
         } = ⟦2-char-id⟧.docView, ⟦2-char-id⟧ = ⟦2-char-id⟧.state.selection;
         if (⟦2-char-id⟧.state.readOnly && ⟦2-char-id⟧ > -1) this.newSel = null;
-        else if (⟦2-char-id⟧ > -1 && (this.bounds = ⟦2-char-id⟧(⟦2-char-id⟧.docView.tile, cJ, ZJ, 0))) {
+        else if (⟦2-char-id⟧ > -1 && (this.bounds = ⟦2-char-id⟧(⟦2-char-id⟧.docView.tile, TB, dB, 0))) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧ || ⟦2-char-id⟧ ? [] : function(⟦2-char-id⟧) {
               let ⟦2-char-id⟧ = [];
               if (⟦2-char-id⟧.root.activeElement != ⟦2-char-id⟧.contentDOM) return ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 354 · Change · +1 / -1</summary>

```diff
@@ -8895,7 +8895,7 @@
             if (0 == ⟦2-char-id⟧.length) return null;
             let ⟦2-char-id⟧ = ⟦2-char-id⟧[0].pos,
               ⟦2-char-id⟧ = 2 == ⟦2-char-id⟧.length ? ⟦2-char-id⟧[1].pos : ⟦2-char-id⟧;
-            return ⟦2-char-id⟧ > -1 && ⟦2-char-id⟧ > -1 ? ⟦2-char-id⟧.m.single(⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧) : null
+            return ⟦2-char-id⟧ > -1 && ⟦2-char-id⟧ > -1 ? ⟦2-char-id⟧.h.single(⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧) : null
           }(⟦2-char-id⟧, this.bounds.from)
         } else {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.observer.selectionRange,
```

</details>

<details>
<summary>Hunk 355 · Change · +8 / -8</summary>

```diff
@@ -8909,17 +8909,17 @@
               ⟦2-char-id⟧ = ⟦2-char-id⟧.to - ⟦2-char-id⟧;
             0 != ⟦2-char-id⟧ && 1 != ⟦2-char-id⟧ && 0 != ⟦2-char-id⟧ || 0 != ⟦2-char-id⟧ && -1 != ⟦2-char-id⟧ && ⟦2-char-id⟧ != ⟦2-char-id⟧.state.doc.length || (⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = ⟦2-char-id⟧.state.doc.length)
           }
-          if (⟦2-char-id⟧.inputState.composing > -1 && ⟦2-char-id⟧.ws.length > 1) this.newSel = ⟦2-char-id⟧.replaceRange(⟦2-char-id⟧.m.range(⟦2-char-id⟧, ⟦2-char-id⟧));
+          if (⟦2-char-id⟧.inputState.composing > -1 && ⟦2-char-id⟧.ek.length > 1) this.newSel = ⟦2-char-id⟧.replaceRange(⟦2-char-id⟧.h.range(⟦2-char-id⟧, ⟦2-char-id⟧));
           else if (⟦2-char-id⟧.lineWrapping && ⟦2-char-id⟧ == ⟦2-char-id⟧ && (!⟦2-char-id⟧.main.empty || ⟦2-char-id⟧.main.head != ⟦2-char-id⟧) && ⟦2-char-id⟧.inputState.lastTouchTime > Date.now() - 100) {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧.coordsAtPos(⟦2-char-id⟧, -1),
               ⟦2-char-id⟧ = 0;
-            ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.inputState.lastTouchY <= ⟦2-char-id⟧.bottom ? -1 : 1), this.newSel = ⟦2-char-id⟧.m.create([⟦2-char-id⟧.m.cursor(⟦2-char-id⟧, ⟦2-char-id⟧)])
-          } else this.newSel = ⟦2-char-id⟧.m.single(⟦2-char-id⟧, ⟦2-char-id⟧)
-        }
-      }
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+            ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.inputState.lastTouchY <= ⟦2-char-id⟧.bottom ? -1 : 1), this.newSel = ⟦2-char-id⟧.h.create([⟦2-char-id⟧.h.cursor(⟦2-char-id⟧, ⟦2-char-id⟧)])
+          } else this.newSel = ⟦2-char-id⟧.h.single(⟦2-char-id⟧, ⟦2-char-id⟧)
+        }
+      }
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
       if (⟦2-char-id⟧.isComposite()) {
         let ⟦2-char-id⟧ = -1,
           ⟦2-char-id⟧ = -1,
```

</details>

<details>
<summary>Hunk 356 · Change · +1 / -1</summary>

```diff
@@ -8928,7 +8928,7 @@
         for (let ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧.children.length; ⟦2-char-id⟧++) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.children[⟦2-char-id⟧],
             ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧.length;
-          if (⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧ > ⟦2-char-id⟧) return ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧);
+          if (⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧ > ⟦2-char-id⟧) return ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧);
           if (⟦2-char-id⟧ >= ⟦2-char-id⟧ && -1 == ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧), ⟦2-char-id⟧ > ⟦2-char-id⟧ && ⟦2-char-id⟧.dom.parentNode == ⟦2-char-id⟧.dom) {
             ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧;
             break
```

</details>

<details>
<summary>Hunk 357 · Change · +8 / -8</summary>

```diff
@@ -8965,31 +8965,31 @@
           to: ⟦2-char-id⟧
         } = ⟦2-char-id⟧.bounds, ⟦2-char-id⟧ = ⟦2-char-id⟧.from, ⟦2-char-id⟧ = null;
         (8 === ⟦2-char-id⟧ || ⟦2-char-id⟧.android && ⟦2-char-id⟧.text.length < ⟦2-char-id⟧ - ⟦2-char-id⟧) && (⟦2-char-id⟧ = ⟦2-char-id⟧.to, ⟦2-char-id⟧ = "end");
-        let ⟦2-char-id⟧, hJ, ⟦2-char-id⟧ = ⟦2-char-id⟧.doc.sliceString(⟦2-char-id⟧, UJ, ⟦2-char-id⟧);
+        let ⟦2-char-id⟧, kB, ⟦2-char-id⟧ = ⟦2-char-id⟧.doc.sliceString(⟦2-char-id⟧, yB, ⟦2-char-id⟧);
         !⟦2-char-id⟧.empty && ⟦2-char-id⟧.from >= ⟦2-char-id⟧ && ⟦2-char-id⟧.to <= ⟦2-char-id⟧ && (⟦2-char-id⟧.typeOver || ⟦2-char-id⟧ != ⟦2-char-id⟧.text) && ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧.from - ⟦2-char-id⟧) == ⟦2-char-id⟧.text.slice(0, ⟦2-char-id⟧.from - ⟦2-char-id⟧) && ⟦2-char-id⟧.slice(⟦2-char-id⟧.to - ⟦2-char-id⟧) == ⟦2-char-id⟧.text.slice(⟦2-char-id⟧ = ⟦2-char-id⟧.text.length - (⟦2-char-id⟧.length - (⟦2-char-id⟧.to - ⟦2-char-id⟧))) ? ⟦2-char-id⟧ = {
           from: ⟦2-char-id⟧.from,
           to: ⟦2-char-id⟧.to,
-          insert: ⟦2-char-id⟧.F.of(⟦2-char-id⟧.text.slice(⟦2-char-id⟧.from - ⟦2-char-id⟧, ⟦2-char-id⟧).split(⟦2-char-id⟧))
+          insert: ⟦2-char-id⟧.D.of(⟦2-char-id⟧.text.slice(⟦2-char-id⟧.from - ⟦2-char-id⟧, ⟦2-char-id⟧).split(⟦2-char-id⟧))
         } : (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.text, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧)) && (⟦2-char-id⟧.chrome && 13 == ⟦2-char-id⟧ && ⟦2-char-id⟧.toB == ⟦2-char-id⟧.from + 2 && ⟦2-char-id⟧.text.slice(⟦2-char-id⟧.from, ⟦2-char-id⟧.toB) == ⟦2-char-id⟧ + ⟦2-char-id⟧ && ⟦2-char-id⟧.toB--, ⟦2-char-id⟧ = {
           from: ⟦2-char-id⟧ + ⟦2-char-id⟧.from,
           to: ⟦2-char-id⟧ + ⟦2-char-id⟧.toA,
-          insert: ⟦2-char-id⟧.F.of(⟦2-char-id⟧.text.slice(⟦2-char-id⟧.from, ⟦2-char-id⟧.toB).split(⟦2-char-id⟧))
+          insert: ⟦2-char-id⟧.D.of(⟦2-char-id⟧.text.slice(⟦2-char-id⟧.from, ⟦2-char-id⟧.toB).split(⟦2-char-id⟧))
         })
       } else ⟦2-char-id⟧ && (!⟦2-char-id⟧.hasFocus && ⟦2-char-id⟧.facet(⟦2-char-id⟧) || ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)) && (⟦2-char-id⟧ = null);
       if (!⟦2-char-id⟧ && !⟦2-char-id⟧) return !1;
-      if ((⟦2-char-id⟧.mac || ⟦2-char-id⟧.android) && ⟦2-char-id⟧ && ⟦2-char-id⟧.from == ⟦2-char-id⟧.to && ⟦2-char-id⟧.from == ⟦2-char-id⟧.head - 1 && /^\. ?$/.test(⟦2-char-id⟧.insert.toString()) && "off" == ⟦2-char-id⟧.contentDOM.getAttribute("autocorrect") ? (⟦2-char-id⟧ && 2 == ⟦2-char-id⟧.insert.length && (⟦2-char-id⟧ = ⟦2-char-id⟧.m.single(⟦2-char-id⟧.main.anchor - 1, ⟦2-char-id⟧.main.head - 1)), ⟦2-char-id⟧ = {
+      if ((⟦2-char-id⟧.mac || ⟦2-char-id⟧.android) && ⟦2-char-id⟧ && ⟦2-char-id⟧.from == ⟦2-char-id⟧.to && ⟦2-char-id⟧.from == ⟦2-char-id⟧.head - 1 && /^\. ?$/.test(⟦2-char-id⟧.insert.toString()) && "off" == ⟦2-char-id⟧.contentDOM.getAttribute("autocorrect") ? (⟦2-char-id⟧ && 2 == ⟦2-char-id⟧.insert.length && (⟦2-char-id⟧ = ⟦2-char-id⟧.h.single(⟦2-char-id⟧.main.anchor - 1, ⟦2-char-id⟧.main.head - 1)), ⟦2-char-id⟧ = {
           from: ⟦2-char-id⟧.from,
           to: ⟦2-char-id⟧.to,
-          insert: ⟦2-char-id⟧.F.of([⟦2-char-id⟧.insert.toString().replace(".", " ")])
+          insert: ⟦2-char-id⟧.D.of([⟦2-char-id⟧.insert.toString().replace(".", " ")])
         }) : ⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧.from).to < ⟦2-char-id⟧.to && ⟦2-char-id⟧.docView.lineHasWidget(⟦2-char-id⟧.to) && ⟦2-char-id⟧.inputState.insertingTextAt > Date.now() - 50 ? ⟦2-char-id⟧ = {
           from: ⟦2-char-id⟧.from,
           to: ⟦2-char-id⟧.to,
           insert: ⟦2-char-id⟧.toText(⟦2-char-id⟧.inputState.insertingText)
-        } : ⟦2-char-id⟧.chrome && ⟦2-char-id⟧ && ⟦2-char-id⟧.from == ⟦2-char-id⟧.to && ⟦2-char-id⟧.from == ⟦2-char-id⟧.head && "\n " == ⟦2-char-id⟧.insert.toString() && ⟦2-char-id⟧.lineWrapping && (⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.m.single(⟦2-char-id⟧.main.anchor - 1, ⟦2-char-id⟧.main.head - 1)), ⟦2-char-id⟧ = {
+        } : ⟦2-char-id⟧.chrome && ⟦2-char-id⟧ && ⟦2-char-id⟧.from == ⟦2-char-id⟧.to && ⟦2-char-id⟧.from == ⟦2-char-id⟧.head && "\n " == ⟦2-char-id⟧.insert.toString() && ⟦2-char-id⟧.lineWrapping && (⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.h.single(⟦2-char-id⟧.main.anchor - 1, ⟦2-char-id⟧.main.head - 1)), ⟦2-char-id⟧ = {
           from: ⟦2-char-id⟧.from,
           to: ⟦2-char-id⟧.to,
-          insert: ⟦2-char-id⟧.F.of([" "])
-        }), ⟦2-char-id⟧) return ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, UJ, ⟦2-char-id⟧);
+          insert: ⟦2-char-id⟧.D.of([" "])
+        }), ⟦2-char-id⟧) return ⟦2-char-id⟧(⟦2-char-id⟧, dB, yB, ⟦2-char-id⟧);
       if (⟦2-char-id⟧ && !⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)) {
         let ⟦2-char-id⟧ = !1,
           ⟦2-char-id⟧ = "select";
```

</details>

<details>
<summary>Hunk 358 · Change · +4 / -4</summary>

```diff
@@ -9002,26 +9002,26 @@
       return !1
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
       if (⟦2-char-id⟧.ios && ⟦2-char-id⟧.inputState.flushIOSKey(⟦2-char-id⟧)) return !0;
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.state.selection.main;
       if (⟦2-char-id⟧.android && (⟦2-char-id⟧.to == ⟦2-char-id⟧.to && (⟦2-char-id⟧.from == ⟦2-char-id⟧.from || ⟦2-char-id⟧.from == ⟦2-char-id⟧.from - 1 && " " == ⟦2-char-id⟧.state.sliceDoc(⟦2-char-id⟧.from, ⟦2-char-id⟧.from)) && 1 == ⟦2-char-id⟧.insert.length && 2 == ⟦2-char-id⟧.insert.lines && ⟦2-char-id⟧(⟦2-char-id⟧.contentDOM, "Enter", 13) || (⟦2-char-id⟧.from == ⟦2-char-id⟧.from - 1 && ⟦2-char-id⟧.to == ⟦2-char-id⟧.to && 0 == ⟦2-char-id⟧.insert.length || 8 == ⟦2-char-id⟧ && ⟦2-char-id⟧.insert.length < ⟦2-char-id⟧.to - ⟦2-char-id⟧.from && ⟦2-char-id⟧.to > ⟦2-char-id⟧.head) && ⟦2-char-id⟧(⟦2-char-id⟧.contentDOM, "Backspace", 8) || ⟦2-char-id⟧.from == ⟦2-char-id⟧.from && ⟦2-char-id⟧.to == ⟦2-char-id⟧.to + 1 && 0 == ⟦2-char-id⟧.insert.length && ⟦2-char-id⟧(⟦2-char-id⟧.contentDOM, "Delete", 46))) return !0;
       let ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.insert.toString();
       ⟦2-char-id⟧.inputState.composing >= 0 && ⟦2-char-id⟧.inputState.composing++;
-      let ⟦2-char-id⟧ = () => ⟦2-char-id⟧ || (⟦2-char-id⟧ = function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      let ⟦2-char-id⟧ = () => ⟦2-char-id⟧ || (⟦2-char-id⟧ = function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.state,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.selection.main,
           ⟦2-char-id⟧ = -1;
         if (⟦2-char-id⟧.from == ⟦2-char-id⟧.to && ⟦2-char-id⟧.from < ⟦2-char-id⟧.from || ⟦2-char-id⟧.from > ⟦2-char-id⟧.to) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.from < ⟦2-char-id⟧.from ? -1 : 1,
             ⟦2-char-id⟧ = ⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧.from : ⟦2-char-id⟧.to,
-            ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.facet(⟦2-char-id⟧).map((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧))), FJ, ⟦2-char-id⟧);
+            ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.facet(⟦2-char-id⟧).map((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧))), VB, ⟦2-char-id⟧);
           ⟦2-char-id⟧.from == ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧)
         }
         if (⟦2-char-id⟧ > -1) ⟦2-char-id⟧ = {
           changes: ⟦2-char-id⟧,
-          selection: ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧.from + ⟦2-char-id⟧.insert.length, -1)
+          selection: ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧.from + ⟦2-char-id⟧.insert.length, -1)
         };
         else if (⟦2-char-id⟧.from >= ⟦2-char-id⟧.from && ⟦2-char-id⟧.to <= ⟦2-char-id⟧.to && ⟦2-char-id⟧.to - ⟦2-char-id⟧.from >= (⟦2-char-id⟧.to - ⟦2-char-id⟧.from) / 3 && (!⟦2-char-id⟧ || ⟦2-char-id⟧.main.empty && ⟦2-char-id⟧.main.from == ⟦2-char-id⟧.from + ⟦2-char-id⟧.insert.length) && ⟦2-char-id⟧.inputState.composing < 0) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.from < ⟦2-char-id⟧.from ? ⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧.from, ⟦2-char-id⟧.from) : "",
```

</details>

<details>
<summary>Hunk 359 · Change · +1 / -1</summary>

```diff
@@ -9030,7 +9030,7 @@
         } else {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.changes(⟦2-char-id⟧),
             ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧.main.to <= ⟦2-char-id⟧.newLength ? ⟦2-char-id⟧.main : void 0;
-          if (⟦2-char-id⟧.selection.ws.length > 1 && (⟦2-char-id⟧.inputState.composing >= 0 || ⟦2-char-id⟧.inputState.compositionPendingChange) && ⟦2-char-id⟧.to <= ⟦2-char-id⟧.to + 10 && ⟦2-char-id⟧.to >= ⟦2-char-id⟧.to - 10) {
+          if (⟦2-char-id⟧.selection.ek.length > 1 && (⟦2-char-id⟧.inputState.composing >= 0 || ⟦2-char-id⟧.inputState.compositionPendingChange) && ⟦2-char-id⟧.to <= ⟦2-char-id⟧.to + 10 && ⟦2-char-id⟧.to >= ⟦2-char-id⟧.to - 10) {
             let ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.state.sliceDoc(⟦2-char-id⟧.from, ⟦2-char-id⟧.to),
               ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.main.head);
             if (⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 360 · Change · +1 / -1</summary>

```diff
@@ -9059,7 +9059,7 @@
                 ⟦2-char-id⟧ = ⟦2-char-id⟧.to - ⟦2-char-id⟧.to;
               return {
                 changes: ⟦2-char-id⟧,
-                range: ⟦2-char-id⟧ ? ⟦2-char-id⟧.m.range(Math.max(0, ⟦2-char-id⟧.anchor + ⟦2-char-id⟧), Math.max(0, ⟦2-char-id⟧.head + ⟦2-char-id⟧)) : ⟦2-char-id⟧.map(⟦2-char-id⟧)
+                range: ⟦2-char-id⟧ ? ⟦2-char-id⟧.h.range(Math.max(0, ⟦2-char-id⟧.anchor + ⟦2-char-id⟧), Math.max(0, ⟦2-char-id⟧.head + ⟦2-char-id⟧)) : ⟦2-char-id⟧.map(⟦2-char-id⟧)
               }
             }))
           } else ⟦2-char-id⟧ = {
```

</details>

<details>
<summary>Hunk 361 · Change · +5 / -5</summary>

```diff
@@ -9073,11 +9073,11 @@
           userEvent: ⟦2-char-id⟧,
           scrollIntoView: !0
         })
-      }(⟦2-char-id⟧, cJ, ⟦2-char-id⟧));
-      return ⟦2-char-id⟧.state.facet(⟦2-char-id⟧).some((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.from, ⟦2-char-id⟧.to, AJ, ⟦2-char-id⟧))) || ⟦2-char-id⟧.dispatch(⟦2-char-id⟧()), !0
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      }(⟦2-char-id⟧, TB, ⟦2-char-id⟧));
+      return ⟦2-char-id⟧.state.facet(⟦2-char-id⟧).some((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.from, ⟦2-char-id⟧.to, JB, ⟦2-char-id⟧))) || ⟦2-char-id⟧.dispatch(⟦2-char-id⟧()), !0
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.length, ⟦2-char-id⟧.length),
         ⟦2-char-id⟧ = 0;
       for (; ⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧.charCodeAt(⟦2-char-id⟧) == ⟦2-char-id⟧.charCodeAt(⟦2-char-id⟧);) ⟦2-char-id⟧++;
```

</details>

<details>
<summary>Hunk 362 · Change · +2 / -2</summary>

```diff
@@ -9089,9 +9089,9 @@
         ⟦2-char-id⟧ -= ⟦2-char-id⟧ + Math.max(0, ⟦2-char-id⟧ - Math.min(⟦2-char-id⟧, ⟦2-char-id⟧)) - ⟦2-char-id⟧
       }
       if (⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧.length < ⟦2-char-id⟧.length) {
-        ⟦2-char-id⟧ -= ⟦2-char-id⟧ <= ⟦2-char-id⟧ && ⟦2-char-id⟧ >= ⟦2-char-id⟧ ? ⟦2-char-id⟧ - ZJ : 0, ⟦2-char-id⟧ = ⟦2-char-id⟧ + (⟦2-char-id⟧ - ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧
+        ⟦2-char-id⟧ -= ⟦2-char-id⟧ <= ⟦2-char-id⟧ && ⟦2-char-id⟧ >= ⟦2-char-id⟧ ? ⟦2-char-id⟧ - dB : 0, ⟦2-char-id⟧ = ⟦2-char-id⟧ + (⟦2-char-id⟧ - ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧
       } else if (⟦2-char-id⟧ < ⟦2-char-id⟧) {
-        ⟦2-char-id⟧ -= ⟦2-char-id⟧ <= ⟦2-char-id⟧ && ⟦2-char-id⟧ >= ⟦2-char-id⟧ ? ⟦2-char-id⟧ - ZJ : 0, ⟦2-char-id⟧ = ⟦2-char-id⟧ + (⟦2-char-id⟧ - ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧
+        ⟦2-char-id⟧ -= ⟦2-char-id⟧ <= ⟦2-char-id⟧ && ⟦2-char-id⟧ >= ⟦2-char-id⟧ ? ⟦2-char-id⟧ - dB : 0, ⟦2-char-id⟧ = ⟦2-char-id⟧ + (⟦2-char-id⟧ - ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧
       }
       return {
         from: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 363 · Change · +1 / -1</summary>

```diff
@@ -9156,7 +9156,7 @@
       }
       flushIOSKey(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = this.pendingIOSKey;
-        return !!⟦2-char-id⟧ && (!("Enter" == ⟦2-char-id⟧.key && ⟦2-char-id⟧ && ⟦2-char-id⟧.from < ⟦2-char-id⟧.to && /^\S+$/.test(⟦2-char-id⟧.insert.toString())) && (this.pendingIOSKey = void 0, Uc(this.view.contentDOM, ⟦2-char-id⟧.key, ⟦2-char-id⟧.keyCode, ⟦2-char-id⟧ instanceof KeyboardEvent ? cJ : void 0)))
+        return !!⟦2-char-id⟧ && (!("Enter" == ⟦2-char-id⟧.key && ⟦2-char-id⟧ && ⟦2-char-id⟧.from < ⟦2-char-id⟧.to && /^\S+$/.test(⟦2-char-id⟧.insert.toString())) && (this.pendingIOSKey = void 0, yT(this.view.contentDOM, ⟦2-char-id⟧.key, ⟦2-char-id⟧.keyCode, ⟦2-char-id⟧ instanceof KeyboardEvent ? TB : void 0)))
       }
       ignoreDuringComposition(⟦2-char-id⟧) {
         return !(!/^key/.test(⟦2-char-id⟧.type) || ⟦2-char-id⟧.synthetic) && (this.composing > 0 || !!(⟦2-char-id⟧.safari && !⟦2-char-id⟧.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
```

</details>

<details>
<summary>Hunk 364 · Change · +2 / -2</summary>

```diff
@@ -9175,9 +9175,9 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       return (⟦2-char-id⟧, ⟦2-char-id⟧) => {
         try {
-          return ⟦2-char-id⟧.call(⟦2-char-id⟧, FJ, ⟦2-char-id⟧)
+          return ⟦2-char-id⟧.call(⟦2-char-id⟧, VB, ⟦2-char-id⟧)
         } catch (⟦2-char-id⟧) {
-          ic(⟦2-char-id⟧.state, ⟦2-char-id⟧)
+          GT(⟦2-char-id⟧.state, ⟦2-char-id⟧)
         }
       }
     }
```

</details>

<details>
<summary>Hunk 365 · Change · +2 / -2</summary>

```diff
@@ -9234,13 +9234,13 @@
       return .7 * Math.max(0, ⟦2-char-id⟧) + 8
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         this.view = ⟦2-char-id⟧, this.startEvent = ⟦2-char-id⟧, this.style = ⟦2-char-id⟧, this.mustSelect = ⟦2-char-id⟧, this.scrollSpeed = {
           x: 0,
           y: 0
         }, this.scrolling = -1, this.lastEvent = ⟦2-char-id⟧, this.scrollParents = ⟦2-char-id⟧(⟦2-char-id⟧.contentDOM), this.atoms = ⟦2-char-id⟧.state.facet(⟦2-char-id⟧).map((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧)));
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.contentDOM.ownerDocument;
-        ⟦2-char-id⟧.addEventListener("mousemove", this.move = this.move.bind(this)), ⟦2-char-id⟧.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = ⟦2-char-id⟧.shiftKey, this.multiple = ⟦2-char-id⟧.state.facet(⟦2-char-id⟧.o.allowMultipleSelections) && function(⟦2-char-id⟧, ⟦2-char-id⟧) {
+        ⟦2-char-id⟧.addEventListener("mousemove", this.move = this.move.bind(this)), ⟦2-char-id⟧.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = ⟦2-char-id⟧.shiftKey, this.multiple = ⟦2-char-id⟧.state.facet(⟦2-char-id⟧.i.allowMultipleSelections) && function(⟦2-char-id⟧, ⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.state.facet(⟦2-char-id⟧);
           return ⟦2-char-id⟧.length ? ⟦2-char-id⟧[0](⟦2-char-id⟧) : ⟦2-char-id⟧.mac ? ⟦2-char-id⟧.metaKey : ⟦2-char-id⟧.ctrlKey
         }(⟦2-char-id⟧, ⟦2-char-id⟧), this.dragging = !(! function(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 366 · Change · +4 / -4</summary>

```diff
@@ -9320,20 +9320,20 @@
       ⟦2-char-id⟧ = Object.create(null),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.ie && ⟦2-char-id⟧.ie_version < 15 || ⟦2-char-id⟧.ios && ⟦2-char-id⟧.webkit_version < 604;
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.facet(⟦2-char-id⟧)) ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
       return ⟦2-char-id⟧
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.state, pc, ⟦2-char-id⟧);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.state, QT, ⟦2-char-id⟧);
       let ⟦2-char-id⟧, {
           state: ⟦2-char-id⟧
         } = ⟦2-char-id⟧,
         ⟦2-char-id⟧ = 1,
         ⟦2-char-id⟧ = ⟦2-char-id⟧.toText(⟦2-char-id⟧),
-        ⟦2-char-id⟧ = ⟦2-char-id⟧.lines == ⟦2-char-id⟧.selection.ws.length;
-      if (null != ⟦2-char-id⟧ && ⟦2-char-id⟧.selection.ws.every((⟦2-char-id⟧ => ⟦2-char-id⟧.empty)) && ⟦2-char-id⟧ == ⟦2-char-id⟧.toString()) {
+        ⟦2-char-id⟧ = ⟦2-char-id⟧.lines == ⟦2-char-id⟧.selection.ek.length;
+      if (null != ⟦2-char-id⟧ && ⟦2-char-id⟧.selection.ek.every((⟦2-char-id⟧ => ⟦2-char-id⟧.empty)) && ⟦2-char-id⟧ == ⟦2-char-id⟧.toString()) {
         let ⟦2-char-id⟧ = -1;
         ⟦2-char-id⟧ = ⟦2-char-id⟧.changeByRange((⟦2-char-id⟧ => {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧.from);
```

</details>

<details>
<summary>Hunk 367 · Change · +1 / -1</summary>

```diff
@@ -9347,7 +9347,7 @@
               from: ⟦2-char-id⟧.from,
               insert: ⟦2-char-id⟧
             },
-            range: ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧.from + ⟦2-char-id⟧.length)
+            range: ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧.from + ⟦2-char-id⟧.length)
           }
         }))
       } else ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.changeByRange((⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 368 · Change · +1 / -1</summary>

```diff
@@ -9358,7 +9358,7 @@
             to: ⟦2-char-id⟧.to,
             insert: ⟦2-char-id⟧.text
           },
-          range: ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧.from + ⟦2-char-id⟧.length)
+          range: ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧.from + ⟦2-char-id⟧.length)
         }
       })) : ⟦2-char-id⟧.replaceSelection(⟦2-char-id⟧);
       ⟦2-char-id⟧.dispatch(⟦2-char-id⟧, {
```

</details>

<details>
<summary>Hunk 369 · Change · +9 / -9</summary>

```diff
@@ -9367,37 +9367,37 @@
       })
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-      if (1 == ⟦2-char-id⟧) return ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧, ⟦2-char-id⟧);
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+      if (1 == ⟦2-char-id⟧) return ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧, ⟦2-char-id⟧);
       if (2 == ⟦2-char-id⟧) return function(⟦2-char-id⟧, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.charCategorizer(⟦2-char-id⟧),
           ⟦2-char-id⟧ = ⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧),
           ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧.from;
-        if (0 == ⟦2-char-id⟧.length) return ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧);
+        if (0 == ⟦2-char-id⟧.length) return ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧);
         0 == ⟦2-char-id⟧ ? ⟦2-char-id⟧ = 1 : ⟦2-char-id⟧ == ⟦2-char-id⟧.length && (⟦2-char-id⟧ = -1);
         let ⟦2-char-id⟧ = ⟦2-char-id⟧,
           ⟦2-char-id⟧ = ⟦2-char-id⟧;
-        ⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.X)(⟦2-char-id⟧.text, XJ, !1) : ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.X)(⟦2-char-id⟧.text, ⟦2-char-id⟧);
+        ⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.S)(⟦2-char-id⟧.text, lB, !1) : ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.S)(⟦2-char-id⟧.text, ⟦2-char-id⟧);
         let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.text.slice(⟦2-char-id⟧, ⟦2-char-id⟧));
         for (; ⟦2-char-id⟧ > 0;) {
-          let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.X)(⟦2-char-id⟧.text, AJ, !1);
+          let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.S)(⟦2-char-id⟧.text, JB, !1);
           if (⟦2-char-id⟧(⟦2-char-id⟧.text.slice(⟦2-char-id⟧, ⟦2-char-id⟧)) != ⟦2-char-id⟧) break;
           ⟦2-char-id⟧ = ⟦2-char-id⟧
         }
         for (; ⟦2-char-id⟧ < ⟦2-char-id⟧.length;) {
-          let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.X)(⟦2-char-id⟧.text, ⟦2-char-id⟧);
+          let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.S)(⟦2-char-id⟧.text, ⟦2-char-id⟧);
           if (⟦2-char-id⟧(⟦2-char-id⟧.text.slice(⟦2-char-id⟧, ⟦2-char-id⟧)) != ⟦2-char-id⟧) break;
           ⟦2-char-id⟧ = ⟦2-char-id⟧
         }
-        return ⟦2-char-id⟧.m.range(⟦2-char-id⟧ + ⟦2-char-id⟧.from, ⟦2-char-id⟧ + ⟦2-char-id⟧.from)
-      }(⟦2-char-id⟧.state, cJ, ⟦2-char-id⟧);
+        return ⟦2-char-id⟧.h.range(⟦2-char-id⟧ + ⟦2-char-id⟧.from, ⟦2-char-id⟧ + ⟦2-char-id⟧.from)
+      }(⟦2-char-id⟧.state, TB, ⟦2-char-id⟧);
       {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.docView.lineAt(⟦2-char-id⟧, ⟦2-char-id⟧),
           ⟦2-char-id⟧ = ⟦2-char-id⟧.state.doc.lineAt(⟦2-char-id⟧ ? ⟦2-char-id⟧.posAtEnd : ⟦2-char-id⟧),
           ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.posAtStart : ⟦2-char-id⟧.from,
           ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.posAtEnd : ⟦2-char-id⟧.to;
-        return ⟦2-char-id⟧ < ⟦2-char-id⟧.state.doc.length && ⟦2-char-id⟧ == ⟦2-char-id⟧.to && ⟦2-char-id⟧++, ⟦2-char-id⟧.m.range(⟦2-char-id⟧, ⟦2-char-id⟧)
+        return ⟦2-char-id⟧ < ⟦2-char-id⟧.state.doc.length && ⟦2-char-id⟧ == ⟦2-char-id⟧.to && ⟦2-char-id⟧++, ⟦2-char-id⟧.h.range(⟦2-char-id⟧, ⟦2-char-id⟧)
       }
     }
     ⟦2-char-id⟧.scroll = ⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 370 · Change · +1 / -1</summary>

```diff
@@ -9426,7 +9426,7 @@
             update(⟦2-char-id⟧) {
               ⟦2-char-id⟧.docChanged && (⟦2-char-id⟧.pos = ⟦2-char-id⟧.changes.mapPos(⟦2-char-id⟧.pos), ⟦2-char-id⟧ = ⟦2-char-id⟧.map(⟦2-char-id⟧.changes))
             },
-            get(⟦2-char-id⟧, XJ, ⟦2-char-id⟧) {
+            get(⟦2-char-id⟧, lB, ⟦2-char-id⟧) {
               let ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.posAndSideAtCoords({
                   x: ⟦2-char-id⟧.clientX,
                   y: ⟦2-char-id⟧.clientY
```

</details>

<details>
<summary>Hunk 371 · Change · +8 / -8</summary>

```diff
@@ -9436,24 +9436,24 @@
                 let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.pos, ⟦2-char-id⟧.assoc, ⟦2-char-id⟧),
                   ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.from, ⟦2-char-id⟧.from),
                   ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧.to, ⟦2-char-id⟧.to);
-                ⟦2-char-id⟧ = ⟦2-char-id⟧ < ⟦2-char-id⟧.from ? ⟦2-char-id⟧.m.range(⟦2-char-id⟧, XJ, ⟦2-char-id⟧.assoc) : ⟦2-char-id⟧.m.range(⟦2-char-id⟧, eJ, ⟦2-char-id⟧.assoc)
+                ⟦2-char-id⟧ = ⟦2-char-id⟧ < ⟦2-char-id⟧.from ? ⟦2-char-id⟧.h.range(⟦2-char-id⟧, lB, ⟦2-char-id⟧.assoc) : ⟦2-char-id⟧.h.range(⟦2-char-id⟧, pB, ⟦2-char-id⟧.assoc)
               }
-              return ⟦2-char-id⟧ ? ⟦2-char-id⟧.replaceRange(⟦2-char-id⟧.main.extend(⟦2-char-id⟧.from, ⟦2-char-id⟧.to, ⟦2-char-id⟧.assoc)) : ⟦2-char-id⟧ && 1 == ⟦2-char-id⟧ && ⟦2-char-id⟧.ws.length > 1 && (⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
-                for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.ws.length; ⟦2-char-id⟧++) {
+              return ⟦2-char-id⟧ ? ⟦2-char-id⟧.replaceRange(⟦2-char-id⟧.main.extend(⟦2-char-id⟧.from, ⟦2-char-id⟧.to, ⟦2-char-id⟧.assoc)) : ⟦2-char-id⟧ && 1 == ⟦2-char-id⟧ && ⟦2-char-id⟧.ek.length > 1 && (⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
+                for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.ek.length; ⟦2-char-id⟧++) {
                   let {
                     from: ⟦2-char-id⟧,
                     to: ⟦2-char-id⟧
-                  } = ⟦2-char-id⟧.ws[⟦2-char-id⟧];
-                  if (⟦2-char-id⟧ <= ⟦2-char-id⟧ && ⟦2-char-id⟧ >= ⟦2-char-id⟧) return ⟦2-char-id⟧.m.create(⟦2-char-id⟧.ws.slice(0, ⟦2-char-id⟧).concat(⟦2-char-id⟧.ws.slice(⟦2-char-id⟧ + 1)), ⟦2-char-id⟧.mainIndex == ⟦2-char-id⟧ ? 0 : ⟦2-char-id⟧.mainIndex - (⟦2-char-id⟧.mainIndex > ⟦2-char-id⟧ ? 1 : 0))
+                  } = ⟦2-char-id⟧.ek[⟦2-char-id⟧];
+                  if (⟦2-char-id⟧ <= ⟦2-char-id⟧ && ⟦2-char-id⟧ >= ⟦2-char-id⟧) return ⟦2-char-id⟧.h.create(⟦2-char-id⟧.ek.slice(0, ⟦2-char-id⟧).concat(⟦2-char-id⟧.ek.slice(⟦2-char-id⟧ + 1)), ⟦2-char-id⟧.mainIndex == ⟦2-char-id⟧ ? 0 : ⟦2-char-id⟧.mainIndex - (⟦2-char-id⟧.mainIndex > ⟦2-char-id⟧ ? 1 : 0))
                 }
                 return null
-              }(⟦2-char-id⟧, ⟦2-char-id⟧.pos)) ? qJ : ⟦2-char-id⟧ ? ⟦2-char-id⟧.addRange(⟦2-char-id⟧) : ⟦2-char-id⟧.m.create([⟦2-char-id⟧])
+              }(⟦2-char-id⟧, ⟦2-char-id⟧.pos)) ? YB : ⟦2-char-id⟧ ? ⟦2-char-id⟧.addRange(⟦2-char-id⟧) : ⟦2-char-id⟧.h.create([⟦2-char-id⟧])
             }
           }
         }(⟦2-char-id⟧, ⟦2-char-id⟧)), ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = !⟦2-char-id⟧.hasFocus;
-        ⟦2-char-id⟧.inputState.startMouseSelection(new ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧)), ⟦2-char-id⟧ && ⟦2-char-id⟧.observer.ignore((() => {
-          Zc(⟦2-char-id⟧.contentDOM);
+        ⟦2-char-id⟧.inputState.startMouseSelection(new ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧)), ⟦2-char-id⟧ && ⟦2-char-id⟧.observer.ignore((() => {
+          dT(⟦2-char-id⟧.contentDOM);
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.root.activeElement;
           ⟦2-char-id⟧ && !⟦2-char-id⟧.contains(⟦2-char-id⟧.contentDOM) && ⟦2-char-id⟧.blur()
         }));
```

</details>

<details>
<summary>Hunk 372 · Change · +2 / -2</summary>

```diff
@@ -9474,8 +9474,8 @@
       return ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = Date.now(), ⟦2-char-id⟧ = !⟦2-char-id⟧ || ⟦2-char-id⟧ > Date.now() - 400 && Math.abs(⟦2-char-id⟧.clientX - ⟦2-char-id⟧.clientX) < 2 && Math.abs(⟦2-char-id⟧.clientY - ⟦2-char-id⟧.clientY) < 2 ? (⟦2-char-id⟧ + 1) % 3 : 1
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-      if (!(⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.state, pc, ⟦2-char-id⟧))) return;
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+      if (!(⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.state, QT, ⟦2-char-id⟧))) return;
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.posAtCoords({
           x: ⟦2-char-id⟧.clientX,
           y: ⟦2-char-id⟧.clientY
```

</details>

<details>
<summary>Hunk 373 · Change · +2 / -2</summary>

```diff
@@ -9515,13 +9515,13 @@
         if (⟦2-char-id⟧ && ⟦2-char-id⟧.isWidget()) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.posAtStart,
             ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧.length;
-          (⟦2-char-id⟧ >= ⟦2-char-id⟧.to || ⟦2-char-id⟧ <= ⟦2-char-id⟧.from) && (⟦2-char-id⟧ = ⟦2-char-id⟧.m.range(⟦2-char-id⟧, ⟦2-char-id⟧))
+          (⟦2-char-id⟧ >= ⟦2-char-id⟧.to || ⟦2-char-id⟧ <= ⟦2-char-id⟧.from) && (⟦2-char-id⟧ = ⟦2-char-id⟧.h.range(⟦2-char-id⟧, ⟦2-char-id⟧))
         }
       }
       let {
         inputState: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      return ⟦2-char-id⟧.mouseSelection && (⟦2-char-id⟧.mouseSelection.dragging = !0), ⟦2-char-id⟧.draggedContent = ⟦2-char-id⟧, ⟦2-char-id⟧.dataTransfer && (⟦2-char-id⟧.dataTransfer.setData("Text", vF(⟦2-char-id⟧.state, dc, ⟦2-char-id⟧.state.sliceDoc(⟦2-char-id⟧.from, ⟦2-char-id⟧.to))), ⟦2-char-id⟧.dataTransfer.effectAllowed = "copyMove"), !1
+      return ⟦2-char-id⟧.mouseSelection && (⟦2-char-id⟧.mouseSelection.dragging = !0), ⟦2-char-id⟧.draggedContent = ⟦2-char-id⟧, ⟦2-char-id⟧.dataTransfer && (⟦2-char-id⟧.dataTransfer.setData("Text", iV(⟦2-char-id⟧.state, RT, ⟦2-char-id⟧.state.sliceDoc(⟦2-char-id⟧.from, ⟦2-char-id⟧.to))), ⟦2-char-id⟧.dataTransfer.effectAllowed = "copyMove"), !1
     }, ⟦2-char-id⟧.dragend = ⟦2-char-id⟧ => (⟦2-char-id⟧.inputState.draggedContent = null, !1), ⟦2-char-id⟧.drop = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
       if (!⟦2-char-id⟧.dataTransfer) return !1;
       if (⟦2-char-id⟧.state.readOnly) return !0;
```

</details>

<details>
<summary>Hunk 374 · Change · +3 / -3</summary>

```diff
@@ -9530,18 +9530,18 @@
         let ⟦2-char-id⟧ = Array(⟦2-char-id⟧.length),
           ⟦2-char-id⟧ = 0,
           ⟦2-char-id⟧ = () => {
-            ++⟦2-char-id⟧ == ⟦2-char-id⟧.length && ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧.filter((⟦2-char-id⟧ => null != ⟦2-char-id⟧)).join(⟦2-char-id⟧.state.lineBreak), !1)
+            ++⟦2-char-id⟧ == ⟦2-char-id⟧.length && ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧.filter((⟦2-char-id⟧ => null != ⟦2-char-id⟧)).join(⟦2-char-id⟧.state.lineBreak), !1)
           };
         for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) {
           let ⟦2-char-id⟧ = new FileReader;
           ⟦2-char-id⟧.onerror = ⟦2-char-id⟧, ⟦2-char-id⟧.onload = () => {
-            /[\x00-\x08\x0e-\x1f]{2}/.test(⟦2-char-id⟧.result) || (⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧.result), eJ()
+            /[\x00-\x08\x0e-\x1f]{2}/.test(⟦2-char-id⟧.result) || (⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧.result), pB()
           }, ⟦2-char-id⟧.readAsText(⟦2-char-id⟧[⟦2-char-id⟧])
         }
         return !0
       } {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.dataTransfer.getData("Text");
-        if (⟦2-char-id⟧) return ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, !0), !0
+        if (⟦2-char-id⟧) return ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, !0), !0
       }
       return !1
     }, ⟦2-char-id⟧.paste = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
```

</details>

<details>
<summary>Hunk 375 · Change · +1 / -1</summary>

```diff
@@ -9553,7 +9553,7 @@
         if (!⟦2-char-id⟧) return;
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.appendChild(document.createElement("textarea"));
         ⟦2-char-id⟧.style.cssText = "position: fixed; left: -10000px; top: 10px", ⟦2-char-id⟧.focus(), setTimeout((() => {
-          ⟦2-char-id⟧.focus(), ⟦2-char-id⟧.remove(), mF(⟦2-char-id⟧, ⟦2-char-id⟧.value)
+          ⟦2-char-id⟧.focus(), ⟦2-char-id⟧.remove(), NV(⟦2-char-id⟧, ⟦2-char-id⟧.value)
         }), 50)
       }(⟦2-char-id⟧), !1)
     };
```

</details>

<details>
<summary>Hunk 376 · Change · +3 / -3</summary>

```diff
@@ -9562,19 +9562,19 @@
       if (!⟦2-char-id⟧(⟦2-char-id⟧.contentDOM, ⟦2-char-id⟧.observer.selectionRange)) return !1;
       let {
         text: ⟦2-char-id⟧,
-        ws: ⟦2-char-id⟧,
+        ek: ⟦2-char-id⟧,
         linewise: ⟦2-char-id⟧
       } = function(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = [],
           ⟦2-char-id⟧ = [],
           ⟦2-char-id⟧ = !1;
-        for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.selection.ws) ⟦2-char-id⟧.empty || (⟦2-char-id⟧.push(⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧.from, ⟦2-char-id⟧.to)), ⟦2-char-id⟧.push(⟦2-char-id⟧));
+        for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.selection.ek) ⟦2-char-id⟧.empty || (⟦2-char-id⟧.push(⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧.from, ⟦2-char-id⟧.to)), ⟦2-char-id⟧.push(⟦2-char-id⟧));
         if (!⟦2-char-id⟧.length) {
           let ⟦2-char-id⟧ = -1;
           for (let {
               from: ⟦2-char-id⟧
             }
-            of ⟦2-char-id⟧.selection.ws) {
+            of ⟦2-char-id⟧.selection.ek) {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧);
             ⟦2-char-id⟧.number > ⟦2-char-id⟧ && (⟦2-char-id⟧.push(⟦2-char-id⟧.text), ⟦2-char-id⟧.push({
               from: ⟦2-char-id⟧.from,
```

</details>

<details>
<summary>Hunk 377 · Change · +3 / -3</summary>

```diff
@@ -9584,13 +9584,13 @@
           ⟦2-char-id⟧ = !0
         }
         return {
-          text: ⟦2-char-id⟧(⟦2-char-id⟧, dc, ⟦2-char-id⟧.join(⟦2-char-id⟧.lineBreak)),
-          ws: ⟦2-char-id⟧,
+          text: ⟦2-char-id⟧(⟦2-char-id⟧, RT, ⟦2-char-id⟧.join(⟦2-char-id⟧.lineBreak)),
+          ek: ⟦2-char-id⟧,
           linewise: ⟦2-char-id⟧
         }
       }(⟦2-char-id⟧.state);
       if (!⟦2-char-id⟧ && !⟦2-char-id⟧) return !1;
-      ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ZJ : null, "cut" != ⟦2-char-id⟧.type || ⟦2-char-id⟧.state.readOnly || ⟦2-char-id⟧.dispatch({
+      ⟦2-char-id⟧ = ⟦2-char-id⟧ ? dB : null, "cut" != ⟦2-char-id⟧.type || ⟦2-char-id⟧.state.readOnly || ⟦2-char-id⟧.dispatch({
         changes: ⟦2-char-id⟧,
         scrollIntoView: !0,
         userEvent: "delete.cut"
```

</details>

<details>
<summary>Hunk 378 · Change · +1 / -1</summary>

```diff
@@ -9605,7 +9605,7 @@
         }), 50)
       }(⟦2-char-id⟧, ⟦2-char-id⟧), !1)
     };
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.d.define();
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.c.define();
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = [];
```

</details>

<details>
<summary>Hunk 379 · Change · +2 / -2</summary>

```diff
@@ -9629,9 +9629,9 @@
       }), 10)
     }
     ⟦2-char-id⟧.focus = ⟦2-char-id⟧ => {
-      ⟦2-char-id⟧.inputState.lastFocusTime = Date.now(), ⟦2-char-id⟧.scrollDOM.scrollTop || !⟦2-char-id⟧.inputState.lastScrollTop && !⟦2-char-id⟧.inputState.lastScrollLeft || (⟦2-char-id⟧.scrollDOM.scrollTop = ⟦2-char-id⟧.inputState.lastScrollTop, ⟦2-char-id⟧.scrollDOM.scrollLeft = ⟦2-char-id⟧.inputState.lastScrollLeft), WF(⟦2-char-id⟧)
+      ⟦2-char-id⟧.inputState.lastFocusTime = Date.now(), ⟦2-char-id⟧.scrollDOM.scrollTop || !⟦2-char-id⟧.inputState.lastScrollTop && !⟦2-char-id⟧.inputState.lastScrollLeft || (⟦2-char-id⟧.scrollDOM.scrollTop = ⟦2-char-id⟧.inputState.lastScrollTop, ⟦2-char-id⟧.scrollDOM.scrollLeft = ⟦2-char-id⟧.inputState.lastScrollLeft), IV(⟦2-char-id⟧)
     }, ⟦2-char-id⟧.blur = ⟦2-char-id⟧ => {
-      ⟦2-char-id⟧.observer.clearSelectionRange(), WF(⟦2-char-id⟧)
+      ⟦2-char-id⟧.observer.clearSelectionRange(), IV(⟦2-char-id⟧)
     }, ⟦2-char-id⟧.compositionstart = ⟦2-char-id⟧.compositionupdate = ⟦2-char-id⟧ => {
       ⟦2-char-id⟧.observer.editContext || (null == ⟦2-char-id⟧.inputState.compositionFirstChange && (⟦2-char-id⟧.inputState.compositionFirstChange = !0), ⟦2-char-id⟧.inputState.composing < 0 && (⟦2-char-id⟧.inputState.composing = 0))
     }, ⟦2-char-id⟧.compositionend = ⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 380 · Change · +1 / -1</summary>

```diff
@@ -9675,7 +9675,7 @@
     }
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧) {
-        this.lineWrapping = ⟦2-char-id⟧, this.doc = ⟦2-char-id⟧.F.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
+        this.lineWrapping = ⟦2-char-id⟧, this.doc = ⟦2-char-id⟧.D.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
       }
       heightForGap(⟦2-char-id⟧, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = this.doc.lineAt(⟦2-char-id⟧).number - this.doc.lineAt(⟦2-char-id⟧).number + 1;
```

</details>

<details>
<summary>Hunk 381 · Change · +1 / -1</summary>

```diff
@@ -9699,7 +9699,7 @@
         }
         return ⟦2-char-id⟧
       }
-      refresh(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, ⟦2-char-id⟧) {
+      refresh(⟦2-char-id⟧, TB, dB, VB, yB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.indexOf(⟦2-char-id⟧) > -1,
           ⟦2-char-id⟧ = Math.abs(⟦2-char-id⟧ - this.lineHeight) > .3 || this.lineWrapping != ⟦2-char-id⟧ || Math.abs(⟦2-char-id⟧ - this.charWidth) > .1;
         if (this.lineWrapping = ⟦2-char-id⟧, this.lineHeight = ⟦2-char-id⟧, this.charWidth = ⟦2-char-id⟧, this.textHeight = ⟦2-char-id⟧, this.lineLength = ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 382 · Change · +1 / -1</summary>

```diff
@@ -9721,7 +9721,7 @@
       }
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
         this.from = ⟦2-char-id⟧, this.length = ⟦2-char-id⟧, this.top = ⟦2-char-id⟧, this.height = ⟦2-char-id⟧, this._content = ⟦2-char-id⟧
       }
       get type() {
```

</details>

<details>
<summary>Hunk 383 · Change · +1 / -1</summary>

```diff
@@ -9745,7 +9745,7 @@
       }
     }
     var ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
-      return ⟦2-char-id⟧[⟦2-char-id⟧.ByPos = 0] = "ByPos", ⟦2-char-id⟧[⟦2-char-id⟧.ByHeight = 1] = "ByHeight", ⟦2-char-id⟧[⟦2-char-id⟧.ByPosNoHeight = 2] = "ByPosNoHeight", JJ
+      return ⟦2-char-id⟧[⟦2-char-id⟧.ByPos = 0] = "ByPos", ⟦2-char-id⟧[⟦2-char-id⟧.ByHeight = 1] = "ByHeight", ⟦2-char-id⟧[⟦2-char-id⟧.ByPosNoHeight = 2] = "ByPosNoHeight", BB
     }(⟦2-char-id⟧ || (⟦2-char-id⟧ = {}));
     const ⟦2-char-id⟧ = .001;
     class ⟦2-char-id⟧ {
```

</details>

<details>
<summary>Hunk 384 · Change · +1 / -1</summary>

```diff
@@ -9762,7 +9762,7 @@
       setHeight(⟦2-char-id⟧) {
         this.height != ⟦2-char-id⟧ && (Math.abs(this.height - ⟦2-char-id⟧) > ⟦2-char-id⟧ && (⟦2-char-id⟧ = !0), this.height = ⟦2-char-id⟧)
       }
-      replace(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      replace(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         return ⟦2-char-id⟧.of(⟦2-char-id⟧)
       }
       decomposeLeft(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 385 · Change · +1 / -1</summary>

```diff
@@ -9771,7 +9771,7 @@
       decomposeRight(⟦2-char-id⟧, ⟦2-char-id⟧) {
         ⟦2-char-id⟧.push(this)
       }
-      applyChanges(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      applyChanges(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = this,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.doc;
         for (let ⟦2-char-id⟧ = ⟦2-char-id⟧.length - 1; ⟦2-char-id⟧ >= 0; ⟦2-char-id⟧--) {
```

</details>

<details>
<summary>Hunk 386 · Change · +4 / -4</summary>

```diff
@@ -9780,11 +9780,11 @@
             toA: ⟦2-char-id⟧,
             fromB: ⟦2-char-id⟧,
             toB: ⟦2-char-id⟧
-          } = ⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧ = ⟦2-char-id⟧.lineAt(⟦2-char-id⟧, ⟦2-char-id⟧.ByPosNoHeight, ⟦2-char-id⟧.setDoc(⟦2-char-id⟧), 0, 0), ⟦2-char-id⟧ = ⟦2-char-id⟧.to >= ⟦2-char-id⟧ ? hJ : ⟦2-char-id⟧.lineAt(⟦2-char-id⟧, ⟦2-char-id⟧.ByPosNoHeight, ZJ, 0, 0);
-          for (⟦2-char-id⟧ += ⟦2-char-id⟧.to - ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.to; ⟦2-char-id⟧ > 0 && ⟦2-char-id⟧.from <= ⟦2-char-id⟧[⟦2-char-id⟧ - 1].toA;) ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ - 1].fromA, ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ - 1].fromB, ⟦2-char-id⟧--, ⟦2-char-id⟧ < ⟦2-char-id⟧.from && (⟦2-char-id⟧ = ⟦2-char-id⟧.lineAt(⟦2-char-id⟧, ⟦2-char-id⟧.ByPosNoHeight, ZJ, 0, 0));
+          } = ⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧ = ⟦2-char-id⟧.lineAt(⟦2-char-id⟧, ⟦2-char-id⟧.ByPosNoHeight, ⟦2-char-id⟧.setDoc(⟦2-char-id⟧), 0, 0), ⟦2-char-id⟧ = ⟦2-char-id⟧.to >= ⟦2-char-id⟧ ? kB : ⟦2-char-id⟧.lineAt(⟦2-char-id⟧, ⟦2-char-id⟧.ByPosNoHeight, dB, 0, 0);
+          for (⟦2-char-id⟧ += ⟦2-char-id⟧.to - ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.to; ⟦2-char-id⟧ > 0 && ⟦2-char-id⟧.from <= ⟦2-char-id⟧[⟦2-char-id⟧ - 1].toA;) ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ - 1].fromA, ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ - 1].fromB, ⟦2-char-id⟧--, ⟦2-char-id⟧ < ⟦2-char-id⟧.from && (⟦2-char-id⟧ = ⟦2-char-id⟧.lineAt(⟦2-char-id⟧, ⟦2-char-id⟧.ByPosNoHeight, dB, 0, 0));
           ⟦2-char-id⟧ += ⟦2-char-id⟧.from - ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.from;
-          let ⟦2-char-id⟧ = ⟦2-char-id⟧.build(⟦2-char-id⟧.setDoc(⟦2-char-id⟧), JJ, jJ, ⟦2-char-id⟧);
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.replace(⟦2-char-id⟧, qJ, ⟦2-char-id⟧))
+          let ⟦2-char-id⟧ = ⟦2-char-id⟧.build(⟦2-char-id⟧.setDoc(⟦2-char-id⟧), BB, gB, ⟦2-char-id⟧);
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.replace(⟦2-char-id⟧, YB, ⟦2-char-id⟧))
         }
         return ⟦2-char-id⟧.updateHeight(⟦2-char-id⟧, 0)
       }
```

</details>

<details>
<summary>Hunk 387 · Change · +11 / -11</summary>

```diff
@@ -9817,31 +9817,31 @@
           ⟦2-char-id⟧ && (⟦2-char-id⟧ += ⟦2-char-id⟧.size)
         }
         let ⟦2-char-id⟧ = 0;
-        return null == ⟦2-char-id⟧[⟦2-char-id⟧ - 1] ? (⟦2-char-id⟧ = 1, ⟦2-char-id⟧--) : null == ⟦2-char-id⟧[⟦2-char-id⟧] && (⟦2-char-id⟧ = 1, ⟦2-char-id⟧++), new ⟦2-char-id⟧(⟦2-char-id⟧.of(⟦2-char-id⟧.slice(0, ⟦2-char-id⟧)), eJ, ⟦2-char-id⟧.of(⟦2-char-id⟧.slice(⟦2-char-id⟧)))
+        return null == ⟦2-char-id⟧[⟦2-char-id⟧ - 1] ? (⟦2-char-id⟧ = 1, ⟦2-char-id⟧--) : null == ⟦2-char-id⟧[⟦2-char-id⟧] && (⟦2-char-id⟧ = 1, ⟦2-char-id⟧++), new ⟦2-char-id⟧(⟦2-char-id⟧.of(⟦2-char-id⟧.slice(0, ⟦2-char-id⟧)), pB, ⟦2-char-id⟧.of(⟦2-char-id⟧.slice(⟦2-char-id⟧)))
       }
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧ == ⟦2-char-id⟧ ? JJ : (⟦2-char-id⟧.constructor != ⟦2-char-id⟧.constructor && (⟦2-char-id⟧ = !0), ⟦2-char-id⟧)
+      return ⟦2-char-id⟧ == ⟦2-char-id⟧ ? BB : (⟦2-char-id⟧.constructor != ⟦2-char-id⟧.constructor && (⟦2-char-id⟧ = !0), ⟦2-char-id⟧)
     }
     ⟦2-char-id⟧.prototype.size = 1;
     const ⟦2-char-id⟧ = ⟦2-char-id⟧.replace({});
     class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         super(⟦2-char-id⟧, ⟦2-char-id⟧), this.deco = ⟦2-char-id⟧, this.spaceAbove = 0
       }
       mainBlock(⟦2-char-id⟧, ⟦2-char-id⟧) {
         return new ⟦2-char-id⟧(⟦2-char-id⟧, this.length, ⟦2-char-id⟧ + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
       }
-      blockAt(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-        return this.spaceAbove && ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.spaceAbove ? new ⟦2-char-id⟧(⟦2-char-id⟧, 0, ZJ, this.spaceAbove, ⟦2-char-id⟧) : this.mainBlock(⟦2-char-id⟧, ⟦2-char-id⟧)
-      }
-      lineAt(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+      blockAt(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+        return this.spaceAbove && ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.spaceAbove ? new ⟦2-char-id⟧(⟦2-char-id⟧, 0, dB, this.spaceAbove, ⟦2-char-id⟧) : this.mainBlock(⟦2-char-id⟧, ⟦2-char-id⟧)
+      }
+      lineAt(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = this.mainBlock(⟦2-char-id⟧, ⟦2-char-id⟧);
-        return this.spaceAbove ? this.blockAt(0, ZJ, FJ, ⟦2-char-id⟧).join(⟦2-char-id⟧) : ⟦2-char-id⟧
-      }
-      forEachLine(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, ⟦2-char-id⟧) {
-        ⟦2-char-id⟧ <= ⟦2-char-id⟧ + this.length && ⟦2-char-id⟧ >= ⟦2-char-id⟧ && ⟦2-char-id⟧(this.lineAt(0, ⟦2-char-id⟧.ByPos, ZJ, FJ, ⟦2-char-id⟧))
+        return this.spaceAbove ? this.blockAt(0, dB, VB, ⟦2-char-id⟧).join(⟦2-char-id⟧) : ⟦2-char-id⟧
+      }
+      forEachLine(⟦2-char-id⟧, TB, dB, VB, yB, ⟦2-char-id⟧) {
+        ⟦2-char-id⟧ <= ⟦2-char-id⟧ + this.length && ⟦2-char-id⟧ >= ⟦2-char-id⟧ && ⟦2-char-id⟧(this.lineAt(0, ⟦2-char-id⟧.ByPos, dB, VB, ⟦2-char-id⟧))
       }
       setMeasuredHeight(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.heights[⟦2-char-id⟧.index++];
```

</details>

<details>
<summary>Hunk 388 · Change · +3 / -3</summary>

```diff
@@ -9857,13 +9857,13 @@
       }
     }
     class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-        super(⟦2-char-id⟧, cJ, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = ⟦2-char-id⟧
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+        super(⟦2-char-id⟧, TB, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = ⟦2-char-id⟧
       }
       mainBlock(⟦2-char-id⟧, ⟦2-char-id⟧) {
         return new ⟦2-char-id⟧(⟦2-char-id⟧, this.length, ⟦2-char-id⟧ + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
       }
-      replace(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      replace(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧[0];
         return 1 == ⟦2-char-id⟧.length && (⟦2-char-id⟧ instanceof ⟦2-char-id⟧ || ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ && 4 & ⟦2-char-id⟧.flags) && Math.abs(this.length - ⟦2-char-id⟧.length) < 10 ? (⟦2-char-id⟧ instanceof ⟦2-char-id⟧ ? ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.length, this.height, this.spaceAbove) : ⟦2-char-id⟧.height = this.height, this.outdated || (⟦2-char-id⟧.outdated = !1), ⟦2-char-id⟧) : ⟦2-char-id⟧.of(⟦2-char-id⟧)
       }
```

</details>

<details>
<summary>Hunk 389 · Change · +1 / -1</summary>

```diff
@@ -9897,7 +9897,7 @@
           perChar: ⟦2-char-id⟧
         }
       }
-      blockAt(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      blockAt(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         let {
           firstLine: ⟦2-char-id⟧,
           lastLine: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 390 · Change · +6 / -6</summary>

```diff
@@ -9909,18 +9909,18 @@
             ⟦2-char-id⟧ = ⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧),
             ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧.length * ⟦2-char-id⟧,
             ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧ / 2);
-          return new ⟦2-char-id⟧(⟦2-char-id⟧.from, ⟦2-char-id⟧.length, jJ, qJ, 0)
+          return new ⟦2-char-id⟧(⟦2-char-id⟧.from, ⟦2-char-id⟧.length, gB, YB, 0)
         } {
           let ⟦2-char-id⟧ = Math.max(0, Math.min(⟦2-char-id⟧ - ⟦2-char-id⟧, Math.floor((⟦2-char-id⟧ - ⟦2-char-id⟧) / ⟦2-char-id⟧))),
             {
               from: ⟦2-char-id⟧,
               length: ⟦2-char-id⟧
             } = ⟦2-char-id⟧.doc.line(⟦2-char-id⟧ + ⟦2-char-id⟧);
-          return new ⟦2-char-id⟧(⟦2-char-id⟧, qJ, ⟦2-char-id⟧ + ⟦2-char-id⟧ * ⟦2-char-id⟧, XJ, 0)
-        }
-      }
-      lineAt(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
-        if (⟦2-char-id⟧ == ⟦2-char-id⟧.ByHeight) return this.blockAt(⟦2-char-id⟧, ZJ, FJ, ⟦2-char-id⟧);
+          return new ⟦2-char-id⟧(⟦2-char-id⟧, YB, ⟦2-char-id⟧ + ⟦2-char-id⟧ * ⟦2-char-id⟧, lB, 0)
+        }
+      }
+      lineAt(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
+        if (⟦2-char-id⟧ == ⟦2-char-id⟧.ByHeight) return this.blockAt(⟦2-char-id⟧, dB, VB, ⟦2-char-id⟧);
         if (⟦2-char-id⟧ == ⟦2-char-id⟧.ByPosNoHeight) {
           let {
             from: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 391 · Change · +3 / -3</summary>

```diff
@@ -9933,9 +9933,9 @@
           perLine: ⟦2-char-id⟧,
           perChar: ⟦2-char-id⟧
         } = this.heightMetrics(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧.length * ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.number - ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧ * ⟦2-char-id⟧ + ⟦2-char-id⟧ * (⟦2-char-id⟧.from - ⟦2-char-id⟧ - ⟦2-char-id⟧);
-        return new ⟦2-char-id⟧(⟦2-char-id⟧.from, ⟦2-char-id⟧.length, Math.max(⟦2-char-id⟧, Math.min(⟦2-char-id⟧, ⟦2-char-id⟧ + this.height - ⟦2-char-id⟧)), jJ, 0)
-      }
-      forEachLine(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, ⟦2-char-id⟧) {
+        return new ⟦2-char-id⟧(⟦2-char-id⟧.from, ⟦2-char-id⟧.length, Math.max(⟦2-char-id⟧, Math.min(⟦2-char-id⟧, ⟦2-char-id⟧ + this.height - ⟦2-char-id⟧)), gB, 0)
+      }
+      forEachLine(⟦2-char-id⟧, TB, dB, VB, yB, ⟦2-char-id⟧) {
         ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧, ⟦2-char-id⟧ + this.length);
         let {
           firstLine: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 392 · Change · +4 / -4</summary>

```diff
@@ -9949,10 +9949,10 @@
             ⟦2-char-id⟧ += ⟦2-char-id⟧ * ⟦2-char-id⟧ + ⟦2-char-id⟧ * (⟦2-char-id⟧ - ⟦2-char-id⟧ - ⟦2-char-id⟧)
           }
           let ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧ * ⟦2-char-id⟧.length;
-          ⟦2-char-id⟧(new ⟦2-char-id⟧(⟦2-char-id⟧.from, ⟦2-char-id⟧.length, YJ, FJ, 0)), ⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.to + 1
-        }
-      }
-      replace(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+          ⟦2-char-id⟧(new ⟦2-char-id⟧(⟦2-char-id⟧.from, ⟦2-char-id⟧.length, oB, VB, 0)), ⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.to + 1
+        }
+      }
+      replace(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = this.length - ⟦2-char-id⟧;
         if (⟦2-char-id⟧ > 0) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.length - 1];
```

</details>

<details>
<summary>Hunk 393 · Change · +3 / -3</summary>

```diff
@@ -9984,13 +9984,13 @@
             ⟦2-char-id⟧.length && ⟦2-char-id⟧.push(null);
             let ⟦2-char-id⟧ = ⟦2-char-id⟧.heights[⟦2-char-id⟧.index++],
               ⟦2-char-id⟧ = 0;
-            ⟦2-char-id⟧ < 0 && (⟦2-char-id⟧ = -⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.heights[⟦2-char-id⟧.index++]), -1 == ⟦2-char-id⟧ ? ⟦2-char-id⟧ = UJ : Math.abs(⟦2-char-id⟧ - ⟦2-char-id⟧) >= ⟦2-char-id⟧ && (⟦2-char-id⟧ = -2);
-            let ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, UJ, ⟦2-char-id⟧);
+            ⟦2-char-id⟧ < 0 && (⟦2-char-id⟧ = -⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.heights[⟦2-char-id⟧.index++]), -1 == ⟦2-char-id⟧ ? ⟦2-char-id⟧ = yB : Math.abs(⟦2-char-id⟧ - ⟦2-char-id⟧) >= ⟦2-char-id⟧ && (⟦2-char-id⟧ = -2);
+            let ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, yB, ⟦2-char-id⟧);
             ⟦2-char-id⟧.outdated = !1, ⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧ += ⟦2-char-id⟧ + 1
           }
           ⟦2-char-id⟧ <= ⟦2-char-id⟧ && ⟦2-char-id⟧.push(null, new ⟦2-char-id⟧(⟦2-char-id⟧ - ⟦2-char-id⟧).updateHeight(⟦2-char-id⟧, ⟦2-char-id⟧));
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.of(⟦2-char-id⟧);
-          return (⟦2-char-id⟧ < 0 || Math.abs(⟦2-char-id⟧.height - this.height) >= ⟦2-char-id⟧ || Math.abs(⟦2-char-id⟧ - this.heightMetrics(⟦2-char-id⟧, ⟦2-char-id⟧).perLine) >= ⟦2-char-id⟧) && (⟦2-char-id⟧ = !0), CF(this, ⟦2-char-id⟧)
+          return (⟦2-char-id⟧ < 0 || Math.abs(⟦2-char-id⟧.height - this.height) >= ⟦2-char-id⟧ || Math.abs(⟦2-char-id⟧ - this.heightMetrics(⟦2-char-id⟧, ⟦2-char-id⟧).perLine) >= ⟦2-char-id⟧) && (⟦2-char-id⟧ = !0), CV(this, ⟦2-char-id⟧)
         }
         return (⟦2-char-id⟧ || this.outdated) && (this.setHeight(⟦2-char-id⟧.heightForGap(⟦2-char-id⟧, ⟦2-char-id⟧ + this.length)), this.outdated = !1), this
       }
```

</details>

<details>
<summary>Hunk 394 · Change · +18 / -18</summary>

```diff
@@ -9999,37 +9999,37 @@
       }
     }
     class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         super(⟦2-char-id⟧.length + ⟦2-char-id⟧ + ⟦2-char-id⟧.length, ⟦2-char-id⟧.height + ⟦2-char-id⟧.height, ⟦2-char-id⟧ | (⟦2-char-id⟧.outdated || ⟦2-char-id⟧.outdated ? 2 : 0)), this.left = ⟦2-char-id⟧, this.right = ⟦2-char-id⟧, this.size = ⟦2-char-id⟧.size + ⟦2-char-id⟧.size
       }
       get break() {
         return 1 & this.flags
       }
-      blockAt(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      blockAt(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧ + this.left.height;
-        return ⟦2-char-id⟧ < ⟦2-char-id⟧ ? this.left.blockAt(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) : this.right.blockAt(⟦2-char-id⟧, cJ, UJ, ⟦2-char-id⟧ + this.left.length + this.break)
-      }
-      lineAt(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+        return ⟦2-char-id⟧ < ⟦2-char-id⟧ ? this.left.blockAt(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) : this.right.blockAt(⟦2-char-id⟧, TB, yB, ⟦2-char-id⟧ + this.left.length + this.break)
+      }
+      lineAt(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧ + this.left.height,
           ⟦2-char-id⟧ = ⟦2-char-id⟧ + this.left.length + this.break,
-          ⟦2-char-id⟧ = ⟦2-char-id⟧ == ⟦2-char-id⟧.ByHeight ? ⟦2-char-id⟧ < eJ : ⟦2-char-id⟧ < ⟦2-char-id⟧,
-          ⟦2-char-id⟧ = ⟦2-char-id⟧ ? this.left.lineAt(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) : this.right.lineAt(⟦2-char-id⟧, cJ, ZJ, eJ, ⟦2-char-id⟧);
-        if (this.break || (⟦2-char-id⟧ ? ⟦2-char-id⟧.to < XJ : ⟦2-char-id⟧.from > ⟦2-char-id⟧)) return ⟦2-char-id⟧;
+          ⟦2-char-id⟧ = ⟦2-char-id⟧ == ⟦2-char-id⟧.ByHeight ? ⟦2-char-id⟧ < pB : ⟦2-char-id⟧ < ⟦2-char-id⟧,
+          ⟦2-char-id⟧ = ⟦2-char-id⟧ ? this.left.lineAt(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) : this.right.lineAt(⟦2-char-id⟧, TB, dB, pB, ⟦2-char-id⟧);
+        if (this.break || (⟦2-char-id⟧ ? ⟦2-char-id⟧.to < lB : ⟦2-char-id⟧.from > ⟦2-char-id⟧)) return ⟦2-char-id⟧;
         let ⟦2-char-id⟧ = ⟦2-char-id⟧ == ⟦2-char-id⟧.ByPosNoHeight ? ⟦2-char-id⟧.ByPosNoHeight : ⟦2-char-id⟧.ByPos;
-        return ⟦2-char-id⟧ ? ⟦2-char-id⟧.join(this.right.lineAt(⟦2-char-id⟧, jJ, ZJ, eJ, ⟦2-char-id⟧)) : this.left.lineAt(⟦2-char-id⟧, jJ, ZJ, FJ, ⟦2-char-id⟧).join(⟦2-char-id⟧)
-      }
-      forEachLine(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, ⟦2-char-id⟧) {
+        return ⟦2-char-id⟧ ? ⟦2-char-id⟧.join(this.right.lineAt(⟦2-char-id⟧, gB, dB, pB, ⟦2-char-id⟧)) : this.left.lineAt(⟦2-char-id⟧, gB, dB, VB, ⟦2-char-id⟧).join(⟦2-char-id⟧)
+      }
+      forEachLine(⟦2-char-id⟧, TB, dB, VB, yB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧ + this.left.height,
           ⟦2-char-id⟧ = ⟦2-char-id⟧ + this.left.length + this.break;
-        if (this.break) ⟦2-char-id⟧ < ⟦2-char-id⟧ && this.left.forEachLine(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, ⟦2-char-id⟧), ⟦2-char-id⟧ >= ⟦2-char-id⟧ && this.right.forEachLine(⟦2-char-id⟧, cJ, ZJ, XJ, AJ, ⟦2-char-id⟧);
+        if (this.break) ⟦2-char-id⟧ < ⟦2-char-id⟧ && this.left.forEachLine(⟦2-char-id⟧, TB, dB, VB, yB, ⟦2-char-id⟧), ⟦2-char-id⟧ >= ⟦2-char-id⟧ && this.right.forEachLine(⟦2-char-id⟧, TB, dB, lB, JB, ⟦2-char-id⟧);
         else {
-          let ⟦2-char-id⟧ = this.lineAt(⟦2-char-id⟧, ⟦2-char-id⟧.ByPos, ZJ, FJ, ⟦2-char-id⟧);
-          ⟦2-char-id⟧ < ⟦2-char-id⟧.from && this.left.forEachLine(⟦2-char-id⟧, ⟦2-char-id⟧.from - 1, ZJ, FJ, UJ, ⟦2-char-id⟧), ⟦2-char-id⟧.to >= ⟦2-char-id⟧ && ⟦2-char-id⟧.from <= ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧ > ⟦2-char-id⟧.to && this.right.forEachLine(⟦2-char-id⟧.to + 1, cJ, ZJ, XJ, AJ, ⟦2-char-id⟧)
-        }
-      }
-      replace(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+          let ⟦2-char-id⟧ = this.lineAt(⟦2-char-id⟧, ⟦2-char-id⟧.ByPos, dB, VB, ⟦2-char-id⟧);
+          ⟦2-char-id⟧ < ⟦2-char-id⟧.from && this.left.forEachLine(⟦2-char-id⟧, ⟦2-char-id⟧.from - 1, dB, VB, yB, ⟦2-char-id⟧), ⟦2-char-id⟧.to >= ⟦2-char-id⟧ && ⟦2-char-id⟧.from <= ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧ > ⟦2-char-id⟧.to && this.right.forEachLine(⟦2-char-id⟧.to + 1, TB, dB, lB, JB, ⟦2-char-id⟧)
+        }
+      }
+      replace(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = this.left.length + this.break;
-        if (⟦2-char-id⟧ < ⟦2-char-id⟧) return this.balanced(this.left.replace(⟦2-char-id⟧, cJ, ⟦2-char-id⟧), this.right);
+        if (⟦2-char-id⟧ < ⟦2-char-id⟧) return this.balanced(this.left.replace(⟦2-char-id⟧, TB, ⟦2-char-id⟧), this.right);
         if (⟦2-char-id⟧ > this.left.length) return this.balanced(this.left, this.right.replace(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧));
         let ⟦2-char-id⟧ = [];
         ⟦2-char-id⟧ > 0 && this.decomposeLeft(⟦2-char-id⟧, ⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 395 · Change · +1 / -1</summary>

```diff
@@ -10037,7 +10037,7 @@
         for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.push(⟦2-char-id⟧);
         if (⟦2-char-id⟧ > 0 && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - 1), ⟦2-char-id⟧ < this.length) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.length;
-          this.decomposeRight(⟦2-char-id⟧, ⟦2-char-id⟧), BF(⟦2-char-id⟧, ⟦2-char-id⟧)
+          this.decomposeRight(⟦2-char-id⟧, ⟦2-char-id⟧), bV(⟦2-char-id⟧, ⟦2-char-id⟧)
         }
         return ⟦2-char-id⟧.of(⟦2-char-id⟧)
       }
```

</details>

<details>
<summary>Hunk 396 · Change · +1 / -1</summary>

```diff
@@ -10065,7 +10065,7 @@
           } = this,
           ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧.length + this.break,
           ⟦2-char-id⟧ = null;
-        return ⟦2-char-id⟧ && ⟦2-char-id⟧.from <= ⟦2-char-id⟧ + ⟦2-char-id⟧.length && ⟦2-char-id⟧.more ? ⟦2-char-id⟧ = ⟦2-char-id⟧ = ⟦2-char-id⟧.updateHeight(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) : ⟦2-char-id⟧.updateHeight(⟦2-char-id⟧, cJ, ⟦2-char-id⟧), ⟦2-char-id⟧ && ⟦2-char-id⟧.from <= ⟦2-char-id⟧ + ⟦2-char-id⟧.length && ⟦2-char-id⟧.more ? ⟦2-char-id⟧ = ⟦2-char-id⟧ = ⟦2-char-id⟧.updateHeight(⟦2-char-id⟧, XJ, ZJ, ⟦2-char-id⟧) : ⟦2-char-id⟧.updateHeight(⟦2-char-id⟧, XJ, ⟦2-char-id⟧), ⟦2-char-id⟧ ? this.balanced(⟦2-char-id⟧, ⟦2-char-id⟧) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
+        return ⟦2-char-id⟧ && ⟦2-char-id⟧.from <= ⟦2-char-id⟧ + ⟦2-char-id⟧.length && ⟦2-char-id⟧.more ? ⟦2-char-id⟧ = ⟦2-char-id⟧ = ⟦2-char-id⟧.updateHeight(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) : ⟦2-char-id⟧.updateHeight(⟦2-char-id⟧, TB, ⟦2-char-id⟧), ⟦2-char-id⟧ && ⟦2-char-id⟧.from <= ⟦2-char-id⟧ + ⟦2-char-id⟧.length && ⟦2-char-id⟧.more ? ⟦2-char-id⟧ = ⟦2-char-id⟧ = ⟦2-char-id⟧.updateHeight(⟦2-char-id⟧, lB, dB, ⟦2-char-id⟧) : ⟦2-char-id⟧.updateHeight(⟦2-char-id⟧, lB, ⟦2-char-id⟧), ⟦2-char-id⟧ ? this.balanced(⟦2-char-id⟧, ⟦2-char-id⟧) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
       }
       toString() {
         return this.left + (this.break ? " " : "-") + this.right
```

</details>

<details>
<summary>Hunk 397 · Change · +2 / -2</summary>

```diff
@@ -10091,13 +10091,13 @@
         }
         this.pos = ⟦2-char-id⟧
       }
-      point(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      point(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         if (⟦2-char-id⟧ < ⟦2-char-id⟧ || ⟦2-char-id⟧.heightRelevant) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.widget ? ⟦2-char-id⟧.widget.estimatedHeight : 0,
             ⟦2-char-id⟧ = ⟦2-char-id⟧.widget ? ⟦2-char-id⟧.widget.lineBreaks : 0;
           ⟦2-char-id⟧ < 0 && (⟦2-char-id⟧ = this.oracle.lineHeight);
           let ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧;
-          ⟦2-char-id⟧.block ? this.oJJ(new ⟦2-char-id⟧(⟦2-char-id⟧, FJ, ⟦2-char-id⟧)) : (⟦2-char-id⟧ || ⟦2-char-id⟧ || ⟦2-char-id⟧ >= 5) && this.addLineDeco(⟦2-char-id⟧, UJ, ⟦2-char-id⟧)
+          ⟦2-char-id⟧.block ? this.UTB(new ⟦2-char-id⟧(⟦2-char-id⟧, VB, ⟦2-char-id⟧)) : (⟦2-char-id⟧ || ⟦2-char-id⟧ || ⟦2-char-id⟧ >= 5) && this.addLineDeco(⟦2-char-id⟧, yB, ⟦2-char-id⟧)
         } else ⟦2-char-id⟧ > ⟦2-char-id⟧ && this.span(⟦2-char-id⟧, ⟦2-char-id⟧);
         this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
       }
```

</details>

<details>
<summary>Hunk 398 · Change · +5 / -5</summary>

```diff
@@ -10111,21 +10111,21 @@
       }
       blankContent(⟦2-char-id⟧, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧ - ⟦2-char-id⟧);
-        return this.oracle.doc.lineAt(⟦2-char-id⟧).to == ⟦2-char-id⟧ && (⟦2-char-id⟧.flags |= 4), ZJ
+        return this.oracle.doc.lineAt(⟦2-char-id⟧).to == ⟦2-char-id⟧ && (⟦2-char-id⟧.flags |= 4), dB
       }
       ensureLine() {
         this.enterLine();
         let ⟦2-char-id⟧ = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
         if (⟦2-char-id⟧ instanceof ⟦2-char-id⟧) return ⟦2-char-id⟧;
         let ⟦2-char-id⟧ = new ⟦2-char-id⟧(0, -1, 0);
-        return this.nodes.push(⟦2-char-id⟧), cJ
-      }
-      oJJ(⟦2-char-id⟧) {
+        return this.nodes.push(⟦2-char-id⟧), TB
+      }
+      UTB(⟦2-char-id⟧) {
         this.enterLine();
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.deco;
         ⟦2-char-id⟧ && ⟦2-char-id⟧.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(⟦2-char-id⟧), this.writtenTo = this.pos = this.pos + ⟦2-char-id⟧.length, ⟦2-char-id⟧ && ⟦2-char-id⟧.endSide > 0 && (this.covering = ⟦2-char-id⟧)
       }
-      addLineDeco(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      addLineDeco(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = this.ensureLine();
         ⟦2-char-id⟧.length += ⟦2-char-id⟧, ⟦2-char-id⟧.collapsed += ⟦2-char-id⟧, ⟦2-char-id⟧.widgetHeight = Math.max(⟦2-char-id⟧.widgetHeight, ⟦2-char-id⟧), ⟦2-char-id⟧.breaks += ⟦2-char-id⟧, this.writtenTo = this.pos = this.pos + ⟦2-char-id⟧
       }
```

</details>

<details>
<summary>Hunk 399 · Change · +2 / -2</summary>

```diff
@@ -10136,9 +10136,9 @@
         for (let ⟦2-char-id⟧ of this.nodes) ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ && ⟦2-char-id⟧.updateHeight(this.oracle, ⟦2-char-id⟧), ⟦2-char-id⟧ += ⟦2-char-id⟧ ? ⟦2-char-id⟧.length : 1;
         return this.nodes
       }
-      static build(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      static build(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
-        return ⟦2-char-id⟧.v.spans(⟦2-char-id⟧, ZJ, UJ, eJ, 0), ⟦2-char-id⟧.finish(⟦2-char-id⟧)
+        return ⟦2-char-id⟧.u.spans(⟦2-char-id⟧, dB, yB, pB, 0), ⟦2-char-id⟧.finish(⟦2-char-id⟧)
       }
     }
     class ⟦2-char-id⟧ {
```

</details>

<details>
<summary>Hunk 400 · Change · +2 / -2</summary>

```diff
@@ -10146,8 +10146,8 @@
         this.changes = []
       }
       compareRange() {}
-      comparePoint(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-        (⟦2-char-id⟧ < ⟦2-char-id⟧ || ⟦2-char-id⟧ && ⟦2-char-id⟧.heightRelevant || ⟦2-char-id⟧ && ⟦2-char-id⟧.heightRelevant) && ⟦2-char-id⟧(⟦2-char-id⟧, cJ, this.changes, 5)
+      comparePoint(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+        (⟦2-char-id⟧ < ⟦2-char-id⟧ || ⟦2-char-id⟧ && ⟦2-char-id⟧.heightRelevant || ⟦2-char-id⟧ && ⟦2-char-id⟧.heightRelevant) && ⟦2-char-id⟧(⟦2-char-id⟧, TB, this.changes, 5)
       }
     }
 
```

</details>

<details>
<summary>Hunk 401 · Change · +1 / -1</summary>

```diff
@@ -10189,7 +10189,7 @@
       }
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         this.from = ⟦2-char-id⟧, this.to = ⟦2-char-id⟧, this.size = ⟦2-char-id⟧, this.displaySize = ⟦2-char-id⟧
       }
       static same(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 402 · Change · +1 / -1</summary>

```diff
@@ -10216,7 +10216,7 @@
       }
       toDOM() {
         let ⟦2-char-id⟧ = document.createElement("div");
-        return this.vertical ? ⟦2-char-id⟧.style.height = this.size + "px" : (⟦2-char-id⟧.style.width = this.size + "px", ⟦2-char-id⟧.style.height = "2px", ⟦2-char-id⟧.style.display = "inline-block"), JJ
+        return this.vertical ? ⟦2-char-id⟧.style.height = this.size + "px" : (⟦2-char-id⟧.style.width = this.size + "px", ⟦2-char-id⟧.style.height = "2px", ⟦2-char-id⟧.style.display = "inline-block"), BB
       }
       get estimatedHeight() {
         return this.vertical ? this.size : -1
```

</details>

<details>
<summary>Hunk 403 · Change · +2 / -2</summary>

```diff
@@ -10229,9 +10229,9 @@
           right: window.innerWidth,
           top: 0,
           bottom: 0
-        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = ⟦2-char-id⟧, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = ⟦2-char-id⟧.LTR, this.o5 = [], this.mustEnforceCursorAssoc = !1;
+        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = ⟦2-char-id⟧, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = ⟦2-char-id⟧.LTR, this.BBB = [], this.mustEnforceCursorAssoc = !1;
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.facet(⟦2-char-id⟧).some((⟦2-char-id⟧ => "function" != typeof ⟦2-char-id⟧ && "cm-lineWrapping" == ⟦2-char-id⟧.class));
-        this.heightOracle = new ⟦2-char-id⟧(⟦2-char-id⟧), this.stateDeco = ⟦2-char-id⟧(⟦2-char-id⟧), this.heightMap = ⟦2-char-id⟧.empty().applyChanges(this.stateDeco, ⟦2-char-id⟧.F.empty, this.heightOracle.setDoc(⟦2-char-id⟧.doc), [new ⟦2-char-id⟧(0, 0, 0, ⟦2-char-id⟧.doc.length)]);
+        this.heightOracle = new ⟦2-char-id⟧(⟦2-char-id⟧), this.stateDeco = ⟦2-char-id⟧(⟦2-char-id⟧), this.heightMap = ⟦2-char-id⟧.empty().applyChanges(this.stateDeco, ⟦2-char-id⟧.D.empty, this.heightOracle.setDoc(⟦2-char-id⟧.doc), [new ⟦2-char-id⟧(0, 0, 0, ⟦2-char-id⟧.doc.length)]);
         for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); ⟦2-char-id⟧++);
         this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = ⟦2-char-id⟧.set(this.lineGaps.map((⟦2-char-id⟧ => ⟦2-char-id⟧.draw(this, !1)))), this.scrollParent = ⟦2-char-id⟧.scrollDOM, this.computeVisibleRanges()
       }
```

</details>

<details>
<summary>Hunk 404 · Change · +1 / -1</summary>

```diff
@@ -10260,7 +10260,7 @@
       }
       updateScaler() {
         let ⟦2-char-id⟧ = this.scaler;
-        return this.scaler = this.heightMap.height <= 7⟦2-char-id⟧ ? AU : new ⟦2-char-id⟧(this.heightOracle, this.heightMap, this.viewports), ⟦2-char-id⟧.eq(this.scaler) ? 0 : 2
+        return this.scaler = this.heightMap.height <= 7⟦2-char-id⟧ ? Yy : new ⟦2-char-id⟧(this.heightOracle, this.heightMap, this.viewports), ⟦2-char-id⟧.eq(this.scaler) ? 0 : 2
       }
       updateViewportLines() {
         this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 405 · Change · +2 / -2</summary>

```diff
@@ -10273,9 +10273,9 @@
         let ⟦2-char-id⟧ = this.stateDeco;
         this.stateDeco = ⟦2-char-id⟧(this.state);
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.changedRanges,
-          ⟦2-char-id⟧ = ⟦2-char-id⟧.extendWithRanges(⟦2-char-id⟧, function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+          ⟦2-char-id⟧ = ⟦2-char-id⟧.extendWithRanges(⟦2-char-id⟧, function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
             let ⟦2-char-id⟧ = new ⟦2-char-id⟧;
-            return ⟦2-char-id⟧.v.compare(⟦2-char-id⟧, cJ, ZJ, UJ, 0), ⟦2-char-id⟧.changes
+            return ⟦2-char-id⟧.u.compare(⟦2-char-id⟧, TB, dB, yB, 0), ⟦2-char-id⟧.changes
           }(⟦2-char-id⟧, this.stateDeco, ⟦2-char-id⟧ ? ⟦2-char-id⟧.changes : ⟦2-char-id⟧.ChangeSet.empty(this.state.doc.length))),
           ⟦2-char-id⟧ = this.heightMap.height,
           ⟦2-char-id⟧ = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
```

</details>

<details>
<summary>Hunk 406 · Change · +1 / -1</summary>

```diff
@@ -10310,7 +10310,7 @@
         ⟦2-char-id⟧ != this.scrollParent && (this.scrollParent = ⟦2-char-id⟧, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
         let ⟦2-char-id⟧ = this.getScrollOffset();
         this.scrollOffset != ⟦2-char-id⟧ && (this.scrollAnchorHeight = -1, this.scrollOffset = ⟦2-char-id⟧), this.scrolledToBottom = ⟦2-char-id⟧(this.scrollParent || ⟦2-char-id⟧.win);
-        let ⟦2-char-id⟧ = (this.printing ? JU : ⟦2-char-id⟧)(⟦2-char-id⟧, this.paddingTop),
+        let ⟦2-char-id⟧ = (this.printing ? Ty : ⟦2-char-id⟧)(⟦2-char-id⟧, this.paddingTop),
           ⟦2-char-id⟧ = ⟦2-char-id⟧.top - this.pixelViewport.top,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.bottom - this.pixelViewport.bottom;
         this.pixelViewport = ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 407 · Change · +6 / -6</summary>

```diff
@@ -10329,17 +10329,17 @@
               charWidth: ⟦2-char-id⟧,
               textHeight: ⟦2-char-id⟧
             } = ⟦2-char-id⟧.docView.measureTextSize();
-            ⟦2-char-id⟧ = ⟦2-char-id⟧ > 0 && ⟦2-char-id⟧.refresh(⟦2-char-id⟧, ZJ, FJ, AJ, Math.max(5, ⟦2-char-id⟧ / ⟦2-char-id⟧), ⟦2-char-id⟧), ⟦2-char-id⟧ && (⟦2-char-id⟧.docView.minWidth = 0, ⟦2-char-id⟧ |= 16)
-          }
-          ⟦2-char-id⟧ > 0 && ⟦2-char-id⟧ > 0 ? ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, ⟦2-char-id⟧) : ⟦2-char-id⟧ < 0 && ⟦2-char-id⟧ < 0 && (⟦2-char-id⟧ = Math.min(⟦2-char-id⟧, ⟦2-char-id⟧)), kF();
+            ⟦2-char-id⟧ = ⟦2-char-id⟧ > 0 && ⟦2-char-id⟧.refresh(⟦2-char-id⟧, dB, VB, JB, Math.max(5, ⟦2-char-id⟧ / ⟦2-char-id⟧), ⟦2-char-id⟧), ⟦2-char-id⟧ && (⟦2-char-id⟧.docView.minWidth = 0, ⟦2-char-id⟧ |= 16)
+          }
+          ⟦2-char-id⟧ > 0 && ⟦2-char-id⟧ > 0 ? ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, ⟦2-char-id⟧) : ⟦2-char-id⟧ < 0 && ⟦2-char-id⟧ < 0 && (⟦2-char-id⟧ = Math.min(⟦2-char-id⟧, ⟦2-char-id⟧)), QV();
           for (let ⟦2-char-id⟧ of this.viewports) {
-            let ⟦2-char-id⟧ = ⟦2-char-id⟧.from == this.viewport.from ? cJ : ⟦2-char-id⟧.docView.measureVisibleLineHeights(⟦2-char-id⟧);
-            this.heightMap = (⟦2-char-id⟧ ? ⟦2-char-id⟧.empty().applyChanges(this.stateDeco, ⟦2-char-id⟧.F.empty, this.heightOracle, [new ⟦2-char-id⟧(0, 0, 0, ⟦2-char-id⟧.state.doc.length)]) : this.heightMap).updateHeight(⟦2-char-id⟧, 0, XJ, new ⟦2-char-id⟧(⟦2-char-id⟧.from, ⟦2-char-id⟧))
+            let ⟦2-char-id⟧ = ⟦2-char-id⟧.from == this.viewport.from ? TB : ⟦2-char-id⟧.docView.measureVisibleLineHeights(⟦2-char-id⟧);
+            this.heightMap = (⟦2-char-id⟧ ? ⟦2-char-id⟧.empty().applyChanges(this.stateDeco, ⟦2-char-id⟧.D.empty, this.heightOracle, [new ⟦2-char-id⟧(0, 0, 0, ⟦2-char-id⟧.state.doc.length)]) : this.heightMap).updateHeight(⟦2-char-id⟧, 0, lB, new ⟦2-char-id⟧(⟦2-char-id⟧.from, ⟦2-char-id⟧))
           }
           ⟦2-char-id⟧ && (⟦2-char-id⟧ |= 2)
         }
         let ⟦2-char-id⟧ = !this.viewportIsAppropriate(this.viewport, ⟦2-char-id⟧) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
-        return ⟦2-char-id⟧ && (2 & ⟦2-char-id⟧ && (⟦2-char-id⟧ |= this.updateScaler()), this.viewport = this.getViewport(⟦2-char-id⟧, this.scrollTarget), ⟦2-char-id⟧ |= this.updateForViewport()), (2 & ⟦2-char-id⟧ || ⟦2-char-id⟧) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4⟦2-char-id⟧) && this.updateLineGaps(this.ensureLineGaps(⟦2-char-id⟧ ? [] : this.lineGaps, ⟦2-char-id⟧)), ⟦2-char-id⟧ |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, ⟦2-char-id⟧.docView.enforceCursorAssoc()), jJ
+        return ⟦2-char-id⟧ && (2 & ⟦2-char-id⟧ && (⟦2-char-id⟧ |= this.updateScaler()), this.viewport = this.getViewport(⟦2-char-id⟧, this.scrollTarget), ⟦2-char-id⟧ |= this.updateForViewport()), (2 & ⟦2-char-id⟧ || ⟦2-char-id⟧) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4⟦2-char-id⟧) && this.updateLineGaps(this.ensureLineGaps(⟦2-char-id⟧ ? [] : this.lineGaps, ⟦2-char-id⟧)), ⟦2-char-id⟧ |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, ⟦2-char-id⟧.docView.enforceCursorAssoc()), gB
       }
       get visibleTop() {
         return this.scaler.fromDOM(this.pixelViewport.top)
```

</details>

<details>
<summary>Hunk 408 · Change · +3 / -3</summary>

```diff
@@ -10355,15 +10355,15 @@
             visibleTop: ⟦2-char-id⟧,
             visibleBottom: ⟦2-char-id⟧
           } = this,
-          ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.lineAt(⟦2-char-id⟧ - 1⟦2-char-id⟧ * ⟦2-char-id⟧, ⟦2-char-id⟧.ByHeight, UJ, 0, 0).from, ⟦2-char-id⟧.lineAt(⟦2-char-id⟧ + 1⟦2-char-id⟧ * (1 - ⟦2-char-id⟧), ⟦2-char-id⟧.ByHeight, UJ, 0, 0).to);
+          ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.lineAt(⟦2-char-id⟧ - 1⟦2-char-id⟧ * ⟦2-char-id⟧, ⟦2-char-id⟧.ByHeight, yB, 0, 0).from, ⟦2-char-id⟧.lineAt(⟦2-char-id⟧ + 1⟦2-char-id⟧ * (1 - ⟦2-char-id⟧), ⟦2-char-id⟧.ByHeight, yB, 0, 0).to);
         if (⟦2-char-id⟧) {
           let {
             head: ⟦2-char-id⟧
           } = ⟦2-char-id⟧.range;
           if (⟦2-char-id⟧ < ⟦2-char-id⟧.from || ⟦2-char-id⟧ > ⟦2-char-id⟧.to) {
             let ⟦2-char-id⟧, ⟦2-char-id⟧ = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
-              ⟦2-char-id⟧ = ⟦2-char-id⟧.lineAt(⟦2-char-id⟧, ⟦2-char-id⟧.ByPos, UJ, 0, 0);
-            ⟦2-char-id⟧ = "center" == ⟦2-char-id⟧.y ? (⟦2-char-id⟧.top + ⟦2-char-id⟧.bottom) / 2 - ⟦2-char-id⟧ / 2 : "start" == ⟦2-char-id⟧.y || "nearest" == ⟦2-char-id⟧.y && ⟦2-char-id⟧ < ⟦2-char-id⟧.from ? ⟦2-char-id⟧.top : ⟦2-char-id⟧.bottom - ⟦2-char-id⟧, ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.lineAt(⟦2-char-id⟧ - 500, ⟦2-char-id⟧.ByHeight, UJ, 0, 0).from, ⟦2-char-id⟧.lineAt(⟦2-char-id⟧ + ⟦2-char-id⟧ + 500, ⟦2-char-id⟧.ByHeight, UJ, 0, 0).to)
+              ⟦2-char-id⟧ = ⟦2-char-id⟧.lineAt(⟦2-char-id⟧, ⟦2-char-id⟧.ByPos, yB, 0, 0);
+            ⟦2-char-id⟧ = "center" == ⟦2-char-id⟧.y ? (⟦2-char-id⟧.top + ⟦2-char-id⟧.bottom) / 2 - ⟦2-char-id⟧ / 2 : "start" == ⟦2-char-id⟧.y || "nearest" == ⟦2-char-id⟧.y && ⟦2-char-id⟧ < ⟦2-char-id⟧.from ? ⟦2-char-id⟧.top : ⟦2-char-id⟧.bottom - ⟦2-char-id⟧, ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.lineAt(⟦2-char-id⟧ - 500, ⟦2-char-id⟧.ByHeight, yB, 0, 0).from, ⟦2-char-id⟧.lineAt(⟦2-char-id⟧ + ⟦2-char-id⟧ + 500, ⟦2-char-id⟧.ByHeight, yB, 0, 0).to)
           }
         }
         return ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 409 · Change · +8 / -8</summary>

```diff
@@ -10402,35 +10402,35 @@
           ⟦2-char-id⟧ = ⟦2-char-id⟧ << 1;
         if (this.defaultTextDirection != ⟦2-char-id⟧.LTR && !⟦2-char-id⟧) return [];
         let ⟦2-char-id⟧ = [],
-          ⟦2-char-id⟧ = (⟦2-char-id⟧, XJ, jJ, ⟦2-char-id⟧) => {
+          ⟦2-char-id⟧ = (⟦2-char-id⟧, lB, gB, ⟦2-char-id⟧) => {
             if (⟦2-char-id⟧ - ⟦2-char-id⟧ < ⟦2-char-id⟧) return;
             let ⟦2-char-id⟧ = this.state.selection.main,
               ⟦2-char-id⟧ = [⟦2-char-id⟧.from];
             ⟦2-char-id⟧.empty || ⟦2-char-id⟧.push(⟦2-char-id⟧.to);
             for (let ⟦2-char-id⟧ of ⟦2-char-id⟧)
-              if (⟦2-char-id⟧ > ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧) return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - 10, jJ, ⟦2-char-id⟧), void ⟦2-char-id⟧(⟦2-char-id⟧ + 10, XJ, jJ, ⟦2-char-id⟧);
+              if (⟦2-char-id⟧ > ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧) return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - 10, gB, ⟦2-char-id⟧), void ⟦2-char-id⟧(⟦2-char-id⟧ + 10, lB, gB, ⟦2-char-id⟧);
             let ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
               for (let ⟦2-char-id⟧ of ⟦2-char-id⟧)
                 if (⟦2-char-id⟧(⟦2-char-id⟧)) return ⟦2-char-id⟧;
               return
             }(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.from >= ⟦2-char-id⟧.from && ⟦2-char-id⟧.to <= ⟦2-char-id⟧.to && Math.abs(⟦2-char-id⟧.from - ⟦2-char-id⟧) < ⟦2-char-id⟧ && Math.abs(⟦2-char-id⟧.to - ⟦2-char-id⟧) < ⟦2-char-id⟧ && !⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧.from < ⟦2-char-id⟧ && ⟦2-char-id⟧.to > ⟦2-char-id⟧))));
             if (!⟦2-char-id⟧) {
-              if (⟦2-char-id⟧ < ⟦2-char-id⟧.to && ⟦2-char-id⟧ && ⟦2-char-id⟧ && ⟦2-char-id⟧.o5.some((⟦2-char-id⟧ => ⟦2-char-id⟧.from <= ⟦2-char-id⟧ && ⟦2-char-id⟧.to >= ⟦2-char-id⟧))) {
-                let ⟦2-char-id⟧ = ⟦2-char-id⟧.moveToLineBoundary(⟦2-char-id⟧.m.cursor(⟦2-char-id⟧), !1, !0).head;
+              if (⟦2-char-id⟧ < ⟦2-char-id⟧.to && ⟦2-char-id⟧ && ⟦2-char-id⟧ && ⟦2-char-id⟧.BBB.some((⟦2-char-id⟧ => ⟦2-char-id⟧.from <= ⟦2-char-id⟧ && ⟦2-char-id⟧.to >= ⟦2-char-id⟧))) {
+                let ⟦2-char-id⟧ = ⟦2-char-id⟧.moveToLineBoundary(⟦2-char-id⟧.h.cursor(⟦2-char-id⟧), !1, !0).head;
                 ⟦2-char-id⟧ > ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧)
               }
-              let ⟦2-char-id⟧ = this.gapSize(⟦2-char-id⟧, UJ, XJ, ⟦2-char-id⟧);
-              ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, XJ, JJ, ⟦2-char-id⟧ || ⟦2-char-id⟧ < 2⟦2-char-id⟧ ? JJ : 2⟦2-char-id⟧)
+              let ⟦2-char-id⟧ = this.gapSize(⟦2-char-id⟧, yB, lB, ⟦2-char-id⟧);
+              ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, lB, BB, ⟦2-char-id⟧ || ⟦2-char-id⟧ < 2⟦2-char-id⟧ ? BB : 2⟦2-char-id⟧)
             }
             ⟦2-char-id⟧.push(⟦2-char-id⟧)
           },
           ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
             if (⟦2-char-id⟧.length < ⟦2-char-id⟧ || ⟦2-char-id⟧.type != ⟦2-char-id⟧.Text) return;
-            let ⟦2-char-id⟧ = function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+            let ⟦2-char-id⟧ = function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
               let ⟦2-char-id⟧ = [],
                 ⟦2-char-id⟧ = ⟦2-char-id⟧,
                 ⟦2-char-id⟧ = 0;
-              ⟦2-char-id⟧.v.spans(⟦2-char-id⟧, JJ, cJ, {
+              ⟦2-char-id⟧.u.spans(⟦2-char-id⟧, BB, TB, {
                 span() {},
                 point(⟦2-char-id⟧, ⟦2-char-id⟧) {
                   ⟦2-char-id⟧ > ⟦2-char-id⟧ && (⟦2-char-id⟧.push({
```

</details>

<details>
<summary>Hunk 410 · Change · +3 / -3</summary>

```diff
@@ -10444,13 +10444,13 @@
               }), ⟦2-char-id⟧ += ⟦2-char-id⟧ - ⟦2-char-id⟧);
               return {
                 total: ⟦2-char-id⟧,
-                ws: ⟦2-char-id⟧
+                ek: ⟦2-char-id⟧
               }
             }(⟦2-char-id⟧.from, ⟦2-char-id⟧.to, this.stateDeco);
             if (⟦2-char-id⟧.total < ⟦2-char-id⟧) return;
-            let ⟦2-char-id⟧, jJ, ⟦2-char-id⟧ = this.scrollTarget ? this.scrollTarget.range.head : null;
+            let ⟦2-char-id⟧, gB, ⟦2-char-id⟧ = this.scrollTarget ? this.scrollTarget.range.head : null;
             if (⟦2-char-id⟧) {
-              let ⟦2-char-id⟧, ZJ, ⟦2-char-id⟧ = ⟦2-char-id⟧ / this.heightOracle.lineLength * this.heightOracle.lineHeight;
+              let ⟦2-char-id⟧, dB, ⟦2-char-id⟧ = ⟦2-char-id⟧ / this.heightOracle.lineLength * this.heightOracle.lineHeight;
               if (null != ⟦2-char-id⟧) {
                 let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧),
                   ⟦2-char-id⟧ = ((this.visibleBottom - this.visibleTop) / 2 + ⟦2-char-id⟧) / ⟦2-char-id⟧.height;
```

</details>

<details>
<summary>Hunk 411 · Change · +1 / -1</summary>

```diff
@@ -10463,7 +10463,7 @@
                 ⟦2-char-id⟧ = 0;
               if (⟦2-char-id⟧ > 2⟦2-char-id⟧)
                 for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.from >= ⟦2-char-id⟧.from && ⟦2-char-id⟧.from < ⟦2-char-id⟧.to && ⟦2-char-id⟧.size != ⟦2-char-id⟧.displaySize && ⟦2-char-id⟧.from * this.heightOracle.charWidth + ⟦2-char-id⟧ < this.pixelViewport.left && (⟦2-char-id⟧ = ⟦2-char-id⟧.size - ⟦2-char-id⟧.displaySize);
-              let ⟦2-char-id⟧, hJ, ⟦2-char-id⟧ = this.pixelViewport.left + ⟦2-char-id⟧,
+              let ⟦2-char-id⟧, kB, ⟦2-char-id⟧ = this.pixelViewport.left + ⟦2-char-id⟧,
                 ⟦2-char-id⟧ = this.pixelViewport.right + ⟦2-char-id⟧;
               if (null != ⟦2-char-id⟧) {
                 let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 412 · Change · +3 / -3</summary>

```diff
@@ -10472,14 +10472,14 @@
               } else ⟦2-char-id⟧ = (⟦2-char-id⟧ - ⟦2-char-id⟧) / ⟦2-char-id⟧, ⟦2-char-id⟧ = (⟦2-char-id⟧ + ⟦2-char-id⟧) / ⟦2-char-id⟧;
               ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
             }
-            ⟦2-char-id⟧ > ⟦2-char-id⟧.from && ⟦2-char-id⟧(⟦2-char-id⟧.from, AJ, cJ, ⟦2-char-id⟧), ⟦2-char-id⟧ < ⟦2-char-id⟧.to && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.to, cJ, ⟦2-char-id⟧)
+            ⟦2-char-id⟧ > ⟦2-char-id⟧.from && ⟦2-char-id⟧(⟦2-char-id⟧.from, JB, TB, ⟦2-char-id⟧), ⟦2-char-id⟧ < ⟦2-char-id⟧.to && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.to, TB, ⟦2-char-id⟧)
           };
         for (let ⟦2-char-id⟧ of this.viewportLines) Array.isArray(⟦2-char-id⟧.type) ? ⟦2-char-id⟧.type.forEach(⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧);
         return ⟦2-char-id⟧
       }
-      gapSize(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      gapSize(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) - ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
-        return this.heightOracle.lineWrapping ? ⟦2-char-id⟧.height * UJ : ⟦2-char-id⟧.total * this.heightOracle.charWidth * ⟦2-char-id⟧
+        return this.heightOracle.lineWrapping ? ⟦2-char-id⟧.height * yB : ⟦2-char-id⟧.total * this.heightOracle.charWidth * ⟦2-char-id⟧
       }
       updateLineGaps(⟦2-char-id⟧) {
         ⟦2-char-id⟧.same(⟦2-char-id⟧, this.lineGaps) || (this.lineGaps = ⟦2-char-id⟧, this.lineGapDeco = ⟦2-char-id⟧.set(⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧.draw(this, this.heightOracle.lineWrapping)))))
```

</details>

<details>
<summary>Hunk 413 · Change · +1 / -1</summary>

```diff
@@ -10488,7 +10488,7 @@
         let ⟦2-char-id⟧ = this.stateDeco;
         this.lineGaps.length && (⟦2-char-id⟧ = ⟦2-char-id⟧.concat(this.lineGapDeco));
         let ⟦2-char-id⟧ = [];
-        ⟦2-char-id⟧.v.spans(⟦2-char-id⟧, this.viewport.from, this.viewport.to, {
+        ⟦2-char-id⟧.u.spans(⟦2-char-id⟧, this.viewport.from, this.viewport.to, {
           span(⟦2-char-id⟧, ⟦2-char-id⟧) {
             ⟦2-char-id⟧.push({
               from: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 414 · Change · +3 / -3</summary>

```diff
@@ -10498,14 +10498,14 @@
           point() {}
         }, 20);
         let ⟦2-char-id⟧ = 0;
-        if (⟦2-char-id⟧.length != this.o5.length) ⟦2-char-id⟧ = 12;
+        if (⟦2-char-id⟧.length != this.BBB.length) ⟦2-char-id⟧ = 12;
         else
           for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length && !(8 & ⟦2-char-id⟧); ⟦2-char-id⟧++) {
-            let ⟦2-char-id⟧ = this.o5[⟦2-char-id⟧],
+            let ⟦2-char-id⟧ = this.BBB[⟦2-char-id⟧],
               ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
             ⟦2-char-id⟧.from == ⟦2-char-id⟧.from && ⟦2-char-id⟧.to == ⟦2-char-id⟧.to || (⟦2-char-id⟧ |= 4, ⟦2-char-id⟧ && ⟦2-char-id⟧.mapPos(⟦2-char-id⟧.from, -1) == ⟦2-char-id⟧.from && ⟦2-char-id⟧.mapPos(⟦2-char-id⟧.to, 1) == ⟦2-char-id⟧.to || (⟦2-char-id⟧ |= 8))
           }
-        return this.o5 = ⟦2-char-id⟧, UJ
+        return this.BBB = ⟦2-char-id⟧, yB
       }
       lineBlockAt(⟦2-char-id⟧) {
         return ⟦2-char-id⟧ >= this.viewport.from && ⟦2-char-id⟧ <= this.viewport.to && this.viewportLines.find((⟦2-char-id⟧ => ⟦2-char-id⟧.from <= ⟦2-char-id⟧ && ⟦2-char-id⟧.to >= ⟦2-char-id⟧)) || ⟦2-char-id⟧(this.heightMap.lineAt(⟦2-char-id⟧, ⟦2-char-id⟧.ByPos, this.heightOracle, 0, 0), this.scaler)
```

</details>

<details>
<summary>Hunk 415 · Change · +1 / -1</summary>

```diff
@@ -10518,7 +10518,7 @@
       }
       scrollAnchorAt(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = this.lineBlockAtHeight(⟦2-char-id⟧ + 8);
-        return ⟦2-char-id⟧.from >= this.viewport.from || this.viewportLines[0].top - ⟦2-char-id⟧ > 200 ? cJ : this.viewportLines[0]
+        return ⟦2-char-id⟧.from >= this.viewport.from || this.viewportLines[0].top - ⟦2-char-id⟧ > 200 ? TB : this.viewportLines[0]
       }
       elementAtHeight(⟦2-char-id⟧) {
         return ⟦2-char-id⟧(this.heightMap.blockAt(this.scaler.fromDOM(⟦2-char-id⟧), this.heightOracle, 0, 0), this.scaler)
```

</details>

<details>
<summary>Hunk 416 · Change · +1 / -1</summary>

```diff
@@ -10539,7 +10539,7 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       let {
         total: ⟦2-char-id⟧,
-        ws: ⟦2-char-id⟧
+        ek: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
       if (⟦2-char-id⟧ <= 0) return ⟦2-char-id⟧[0].from;
       if (⟦2-char-id⟧ >= 1) return ⟦2-char-id⟧[⟦2-char-id⟧.length - 1].to;
```

</details>

<details>
<summary>Hunk 417 · Change · +1 / -1</summary>

```diff
@@ -10560,7 +10560,7 @@
           from: ⟦2-char-id⟧,
           to: ⟦2-char-id⟧
         }
-        of ⟦2-char-id⟧.ws) {
+        of ⟦2-char-id⟧.ek) {
         if (⟦2-char-id⟧ <= ⟦2-char-id⟧) {
           ⟦2-char-id⟧ += ⟦2-char-id⟧ - ⟦2-char-id⟧;
           break
```

</details>

<details>
<summary>Hunk 418 · Change · +2 / -2</summary>

```diff
@@ -10581,10 +10581,10 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.facet(⟦2-char-id⟧).filter((⟦2-char-id⟧ => "function" != typeof ⟦2-char-id⟧)),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.facet(⟦2-char-id⟧).filter((⟦2-char-id⟧ => "function" != typeof ⟦2-char-id⟧));
-      return ⟦2-char-id⟧.length && ⟦2-char-id⟧.push(⟦2-char-id⟧.v.join(⟦2-char-id⟧)), cJ
+      return ⟦2-char-id⟧.length && ⟦2-char-id⟧.push(⟦2-char-id⟧.u.join(⟦2-char-id⟧)), TB
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = 0,
           ⟦2-char-id⟧ = 0,
           ⟦2-char-id⟧ = 0;
```

</details>

<details>
<summary>Hunk 419 · Change · +1 / -1</summary>

```diff
@@ -10592,7 +10592,7 @@
           let {
             from: ⟦2-char-id⟧,
             to: ⟦2-char-id⟧
-          } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.lineAt(⟦2-char-id⟧, ⟦2-char-id⟧.ByPos, JJ, 0, 0).top, ⟦2-char-id⟧ = ⟦2-char-id⟧.lineAt(⟦2-char-id⟧, ⟦2-char-id⟧.ByPos, JJ, 0, 0).bottom;
+          } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.lineAt(⟦2-char-id⟧, ⟦2-char-id⟧.ByPos, BB, 0, 0).top, ⟦2-char-id⟧ = ⟦2-char-id⟧.lineAt(⟦2-char-id⟧, ⟦2-char-id⟧.ByPos, BB, 0, 0).bottom;
           return ⟦2-char-id⟧ += ⟦2-char-id⟧ - ⟦2-char-id⟧, {
             from: ⟦2-char-id⟧,
             to: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 420 · Change · +10 / -10</summary>

```diff
@@ -10629,27 +10629,27 @@
       if (1 == ⟦2-char-id⟧.scale) return ⟦2-char-id⟧;
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.toDOM(⟦2-char-id⟧.top),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.toDOM(⟦2-char-id⟧.bottom);
-      return new ⟦2-char-id⟧(⟦2-char-id⟧.from, ⟦2-char-id⟧.length, ZJ, ⟦2-char-id⟧ - ⟦2-char-id⟧, Array.isArray(⟦2-char-id⟧._content) ? ⟦2-char-id⟧._content.map((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧))) : ⟦2-char-id⟧._content)
-    }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define({
+      return new ⟦2-char-id⟧(⟦2-char-id⟧.from, ⟦2-char-id⟧.length, dB, ⟦2-char-id⟧ - ⟦2-char-id⟧, Array.isArray(⟦2-char-id⟧._content) ? ⟦2-char-id⟧._content.map((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧))) : ⟦2-char-id⟧._content)
+    }
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define({
         combine: ⟦2-char-id⟧ => ⟦2-char-id⟧.join(" ")
       }),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define({
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define({
         combine: ⟦2-char-id⟧ => ⟦2-char-id⟧.indexOf(!0) > -1
       }),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.c.newName(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.c.newName(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.c.newName(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.e.newName(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.e.newName(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.e.newName(),
       ⟦2-char-id⟧ = {
         "&light": "." + ⟦2-char-id⟧,
         "&dark": "." + ⟦2-char-id⟧
       };
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-      return new ⟦2-char-id⟧.c(⟦2-char-id⟧, {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+      return new ⟦2-char-id⟧.e(⟦2-char-id⟧, {
         finish: ⟦2-char-id⟧ => /&/.test(⟦2-char-id⟧) ? ⟦2-char-id⟧.replace(/&\w*/, (⟦2-char-id⟧ => {
           if ("&" == ⟦2-char-id⟧) return ⟦2-char-id⟧;
-          if (!⟦2-char-id⟧ || !⟦2-char-id⟧[⟦2-char-id⟧]) throw new RangeError(`Unsupported selector: ${cJ}`);
+          if (!⟦2-char-id⟧ || !⟦2-char-id⟧[⟦2-char-id⟧]) throw new RangeError(`Unsupported selector: ${TB}`);
           return ⟦2-char-id⟧[⟦2-char-id⟧]
         })) : ⟦2-char-id⟧ + " " + ⟦2-char-id⟧
       })
```

</details>

<details>
<summary>Hunk 421 · Change · +2 / -2</summary>

```diff
@@ -10982,9 +10982,9 @@
             type: "characterData",
             oldValue: ⟦2-char-id⟧.prevValue
           }), this.flushSoon()
-        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.Im = this.Im.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
+        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.qE = this.qE.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
           var ⟦2-char-id⟧;
-          (null === (⟦2-char-id⟧ = this.view.docView) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.lastUpdate) < Date.now() - 75 && this.Im()
+          (null === (⟦2-char-id⟧ = this.view.docView) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.lastUpdate) < Date.now() - 75 && this.qE()
         })), this.resizeScroll.observe(⟦2-char-id⟧.scrollDOM)), this.addWindowListeners(this.win = ⟦2-char-id⟧.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((⟦2-char-id⟧ => {
           this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1⟦2-char-id⟧)), ⟦2-char-id⟧.length > 0 && ⟦2-char-id⟧[⟦2-char-id⟧.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
         }), {
```

</details>

<details>
<summary>Hunk 422 · Change · +1 / -1</summary>

```diff
@@ -11041,7 +11041,7 @@
           function ⟦2-char-id⟧(⟦2-char-id⟧) {
             ⟦2-char-id⟧.preventDefault(), ⟦2-char-id⟧.stopImmediatePropagation(), ⟦2-char-id⟧ = ⟦2-char-id⟧.getTargetRanges()[0]
           }
-          return ⟦2-char-id⟧.contentDOM.addEventListener("beforeinput", FJ, !0), ⟦2-char-id⟧.dom.ownerDocument.execCommand("indent"), ⟦2-char-id⟧.contentDOM.removeEventListener("beforeinput", FJ, !0), ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) : null
+          return ⟦2-char-id⟧.contentDOM.addEventListener("beforeinput", VB, !0), ⟦2-char-id⟧.dom.ownerDocument.execCommand("indent"), ⟦2-char-id⟧.contentDOM.removeEventListener("beforeinput", VB, !0), ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) : null
         }(this.view, ⟦2-char-id⟧) || ⟦2-char-id⟧;
         if (!⟦2-char-id⟧ || this.selectionRange.eq(⟦2-char-id⟧)) return !1;
         let ⟦2-char-id⟧ = ⟦2-char-id⟧(this.dom, ⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 423 · Change · +1 / -1</summary>

```diff
@@ -11049,7 +11049,7 @@
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.focusNode,
             ⟦2-char-id⟧ = ⟦2-char-id⟧.focusOffset;
           if (!⟦2-char-id⟧ || ⟦2-char-id⟧.anchorNode != ⟦2-char-id⟧ || ⟦2-char-id⟧.anchorOffset != ⟦2-char-id⟧) return !1;
-          for (⟦2-char-id⟧ = Math.min(⟦2-char-id⟧, LJ(⟦2-char-id⟧));;)
+          for (⟦2-char-id⟧ = Math.min(⟦2-char-id⟧, xB(⟦2-char-id⟧));;)
             if (⟦2-char-id⟧) {
               if (1 != ⟦2-char-id⟧.nodeType) return !1;
               let ⟦2-char-id⟧ = ⟦2-char-id⟧.childNodes[⟦2-char-id⟧ - 1];
```

</details>

<details>
<summary>Hunk 424 · Change · +1 / -1</summary>

```diff
@@ -11083,7 +11083,7 @@
       ignore(⟦2-char-id⟧) {
         if (!this.active) return ⟦2-char-id⟧();
         try {
-          return this.stop(), JJ()
+          return this.stop(), BB()
         } finally {
           this.start(), this.clear()
         }
```

</details>

<details>
<summary>Hunk 425 · Change · +2 / -2</summary>

```diff
@@ -11156,10 +11156,10 @@
         } = this.processRecords(), ⟦2-char-id⟧ = this.selectionChanged && ⟦2-char-id⟧(this.dom, this.selectionRange);
         if (⟦2-char-id⟧ < 0 && !⟦2-char-id⟧) return null;
         ⟦2-char-id⟧ > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
-        let ⟦2-char-id⟧ = new ⟦2-char-id⟧(this.view, JJ, cJ, ⟦2-char-id⟧);
+        let ⟦2-char-id⟧ = new ⟦2-char-id⟧(this.view, BB, TB, ⟦2-char-id⟧);
         return this.view.docView.domChanged = {
           newSel: ⟦2-char-id⟧.newSel ? ⟦2-char-id⟧.newSel.main : null
-        }, UJ
+        }, yB
       }
       flush() {
         let ⟦2-char-id⟧ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
```

</details>

<details>
<summary>Hunk 426 · Change · +1 / -1</summary>

```diff
@@ -11169,7 +11169,7 @@
         if (!⟦2-char-id⟧) return this.view.requestMeasure(), !1;
         let ⟦2-char-id⟧ = this.view.state,
           ⟦2-char-id⟧ = ⟦2-char-id⟧(this.view, ⟦2-char-id⟧);
-        return this.view.state == ⟦2-char-id⟧ && (⟦2-char-id⟧.domChanged || ⟦2-char-id⟧.newSel && !⟦2-char-id⟧(this.view.state.selection, ⟦2-char-id⟧.newSel.main)) && this.view.update([]), FJ
+        return this.view.state == ⟦2-char-id⟧ && (⟦2-char-id⟧.domChanged || ⟦2-char-id⟧.newSel && !⟦2-char-id⟧(this.view.state.selection, ⟦2-char-id⟧.newSel.main)) && this.view.update([]), VB
       }
       readMutation(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = this.view.docView.tile.nearest(⟦2-char-id⟧.target);
```

</details>

<details>
<summary>Hunk 427 · Change · +5 / -5</summary>

```diff
@@ -11193,28 +11193,28 @@
         ⟦2-char-id⟧ != this.win && (this.removeWindowListeners(this.win), this.win = ⟦2-char-id⟧, this.addWindowListeners(this.win))
       }
       addWindowListeners(⟦2-char-id⟧) {
-        ⟦2-char-id⟧.addEventListener("resize", this.Im), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : ⟦2-char-id⟧.addEventListener("beforeprint", this.onPrint), ⟦2-char-id⟧.addEventListener("scroll", this.onScroll), ⟦2-char-id⟧.document.addEventListener("selectionchange", this.onSelectionChange)
+        ⟦2-char-id⟧.addEventListener("resize", this.qE), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : ⟦2-char-id⟧.addEventListener("beforeprint", this.onPrint), ⟦2-char-id⟧.addEventListener("scroll", this.onScroll), ⟦2-char-id⟧.document.addEventListener("selectionchange", this.onSelectionChange)
       }
       removeWindowListeners(⟦2-char-id⟧) {
-        ⟦2-char-id⟧.removeEventListener("scroll", this.onScroll), ⟦2-char-id⟧.removeEventListener("resize", this.Im), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : ⟦2-char-id⟧.removeEventListener("beforeprint", this.onPrint), ⟦2-char-id⟧.document.removeEventListener("selectionchange", this.onSelectionChange)
+        ⟦2-char-id⟧.removeEventListener("scroll", this.onScroll), ⟦2-char-id⟧.removeEventListener("resize", this.qE), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : ⟦2-char-id⟧.removeEventListener("beforeprint", this.onPrint), ⟦2-char-id⟧.document.removeEventListener("selectionchange", this.onSelectionChange)
       }
       update(⟦2-char-id⟧) {
         this.editContext && (this.editContext.update(⟦2-char-id⟧), ⟦2-char-id⟧.startState.facet(⟦2-char-id⟧) != ⟦2-char-id⟧.state.facet(⟦2-char-id⟧) && (⟦2-char-id⟧.view.contentDOM.editContext = ⟦2-char-id⟧.state.facet(⟦2-char-id⟧) ? this.editContext.editContext : null))
       }
       destroy() {
-        var ⟦2-char-id⟧, cJ, ⟦2-char-id⟧;
+        var ⟦2-char-id⟧, TB, ⟦2-char-id⟧;
         this.stop(), null === (⟦2-char-id⟧ = this.intersection) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.disconnect(), null === (⟦2-char-id⟧ = this.gapIntersection) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.disconnect(), null === (⟦2-char-id⟧ = this.resizeScroll) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.disconnect();
         for (let ⟦2-char-id⟧ of this.scrollTargets) ⟦2-char-id⟧.removeEventListener("scroll", this.onScroll);
         this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
       }
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       for (; ⟦2-char-id⟧;) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧);
         if (⟦2-char-id⟧ && ⟦2-char-id⟧.parent == ⟦2-char-id⟧) return ⟦2-char-id⟧;
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.parentNode;
-        ⟦2-char-id⟧ = ⟦2-char-id⟧ != ⟦2-char-id⟧.dom ? UJ : ⟦2-char-id⟧ > 0 ? ⟦2-char-id⟧.nextSibling : ⟦2-char-id⟧.previousSibling
+        ⟦2-char-id⟧ = ⟦2-char-id⟧ != ⟦2-char-id⟧.dom ? yB : ⟦2-char-id⟧ > 0 ? ⟦2-char-id⟧.nextSibling : ⟦2-char-id⟧.previousSibling
       }
       return null
     }
```

</details>

<details>
<summary>Hunk 428 · Change · +1 / -1</summary>

```diff
@@ -11225,7 +11225,7 @@
         ⟦2-char-id⟧ = ⟦2-char-id⟧.endContainer,
         ⟦2-char-id⟧ = ⟦2-char-id⟧.endOffset,
         ⟦2-char-id⟧ = ⟦2-char-id⟧.docView.domAtPos(⟦2-char-id⟧.state.selection.main.anchor, 1);
-      return ⟦2-char-id⟧(⟦2-char-id⟧.node, ⟦2-char-id⟧.offset, UJ, ⟦2-char-id⟧) && ([⟦2-char-id⟧, FJ, UJ, ⟦2-char-id⟧] = [⟦2-char-id⟧, eJ, ZJ, ⟦2-char-id⟧]), {
+      return ⟦2-char-id⟧(⟦2-char-id⟧.node, ⟦2-char-id⟧.offset, yB, ⟦2-char-id⟧) && ([⟦2-char-id⟧, VB, yB, ⟦2-char-id⟧] = [⟦2-char-id⟧, pB, dB, ⟦2-char-id⟧]), {
         anchorNode: ⟦2-char-id⟧,
         anchorOffset: ⟦2-char-id⟧,
         focusNode: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 429 · Change · +2 / -2</summary>

```diff
@@ -11254,10 +11254,10 @@
             drifted: !1
           });
           let ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧ > ⟦2-char-id⟧.text.length;
-          ⟦2-char-id⟧ == this.from && ⟦2-char-id⟧ < this.from ? ⟦2-char-id⟧ = eJ : ⟦2-char-id⟧ == this.to && ⟦2-char-id⟧ > this.to && (⟦2-char-id⟧ = ⟦2-char-id⟧);
+          ⟦2-char-id⟧ == this.from && ⟦2-char-id⟧ < this.from ? ⟦2-char-id⟧ = pB : ⟦2-char-id⟧ == this.to && ⟦2-char-id⟧ > this.to && (⟦2-char-id⟧ = ⟦2-char-id⟧);
           let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.state.sliceDoc(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.text, (⟦2-char-id⟧ ? ⟦2-char-id⟧.from : ⟦2-char-id⟧.to) - ⟦2-char-id⟧, ⟦2-char-id⟧ ? "end" : null);
           if (!⟦2-char-id⟧) {
-            let ⟦2-char-id⟧ = ⟦2-char-id⟧.m.single(this.toEditorPos(⟦2-char-id⟧.selectionStart), this.toEditorPos(⟦2-char-id⟧.selectionEnd));
+            let ⟦2-char-id⟧ = ⟦2-char-id⟧.h.single(this.toEditorPos(⟦2-char-id⟧.selectionStart), this.toEditorPos(⟦2-char-id⟧.selectionEnd));
             return void(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) || ⟦2-char-id⟧.dispatch({
               selection: ⟦2-char-id⟧,
               userEvent: "select"
```

</details>

<details>
<summary>Hunk 430 · Change · +3 / -3</summary>

```diff
@@ -11266,15 +11266,15 @@
           let ⟦2-char-id⟧ = {
             from: ⟦2-char-id⟧.from + ⟦2-char-id⟧,
             to: ⟦2-char-id⟧.toA + ⟦2-char-id⟧,
-            insert: ⟦2-char-id⟧.F.of(⟦2-char-id⟧.text.slice(⟦2-char-id⟧.from, ⟦2-char-id⟧.toB).split("\n"))
+            insert: ⟦2-char-id⟧.D.of(⟦2-char-id⟧.text.slice(⟦2-char-id⟧.from, ⟦2-char-id⟧.toB).split("\n"))
           };
           if ((⟦2-char-id⟧.mac || ⟦2-char-id⟧.android) && ⟦2-char-id⟧.from == ⟦2-char-id⟧ - 1 && /^\. ?$/.test(⟦2-char-id⟧.text) && "off" == ⟦2-char-id⟧.contentDOM.getAttribute("autocorrect") && (⟦2-char-id⟧ = {
               from: ⟦2-char-id⟧,
               to: ⟦2-char-id⟧,
-              insert: ⟦2-char-id⟧.F.of([⟦2-char-id⟧.text.replace(".", " ")])
+              insert: ⟦2-char-id⟧.D.of([⟦2-char-id⟧.text.replace(".", " ")])
             }), this.pendingContextChange = ⟦2-char-id⟧, !⟦2-char-id⟧.state.readOnly) {
             let ⟦2-char-id⟧ = this.to - this.from + (⟦2-char-id⟧.to - ⟦2-char-id⟧.from + ⟦2-char-id⟧.insert.length);
-            ⟦2-char-id⟧(⟦2-char-id⟧, hJ, ⟦2-char-id⟧.m.single(this.toEditorPos(⟦2-char-id⟧.selectionStart, ⟦2-char-id⟧), this.toEditorPos(⟦2-char-id⟧.selectionEnd, ⟦2-char-id⟧)))
+            ⟦2-char-id⟧(⟦2-char-id⟧, kB, ⟦2-char-id⟧.h.single(this.toEditorPos(⟦2-char-id⟧.selectionStart, ⟦2-char-id⟧), this.toEditorPos(⟦2-char-id⟧.selectionEnd, ⟦2-char-id⟧)))
           }
           this.pendingContextChange && (this.revertPending(⟦2-char-id⟧.state), this.setSelection(⟦2-char-id⟧.state)), ⟦2-char-id⟧.from < ⟦2-char-id⟧.to && !⟦2-char-id⟧.insert.length && ⟦2-char-id⟧.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(⟦2-char-id⟧.text.slice(Math.max(0, ⟦2-char-id⟧.updateRangeStart - 1), Math.min(⟦2-char-id⟧.text.length, ⟦2-char-id⟧.updateRangeStart + 1))) && this.handlers.compositionend(⟦2-char-id⟧)
         }, this.handlers.characterboundsupdate = ⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 431 · Change · +1 / -1</summary>

```diff
@@ -11294,7 +11294,7 @@
               let ⟦2-char-id⟧ = this.toEditorPos(⟦2-char-id⟧.rangeStart),
                 ⟦2-char-id⟧ = this.toEditorPos(⟦2-char-id⟧.rangeEnd);
               if (⟦2-char-id⟧ < ⟦2-char-id⟧) {
-                let ⟦2-char-id⟧ = `text-decoration: underline ${/^[a-z]/.test(cJ)?cJ+" ":"Dashed"==cJ?"dashed ":"Squiggle"==cJ?"wavy ":""}${/thin/i.test(FJ)?1:2}px`;
+                let ⟦2-char-id⟧ = `text-decoration: underline ${/^[a-z]/.test(TB)?TB+" ":"Dashed"==TB?"dashed ":"Squiggle"==TB?"wavy ":""}${/thin/i.test(VB)?1:2}px`;
                 ⟦2-char-id⟧.push(⟦2-char-id⟧.mark({
                   attributes: {
                     style: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 432 · Change · +1 / -1</summary>

```diff
@@ -11329,7 +11329,7 @@
         let ⟦2-char-id⟧ = 0,
           ⟦2-char-id⟧ = !1,
           ⟦2-char-id⟧ = this.pendingContextChange;
-        return ⟦2-char-id⟧.changes.iterChanges(((⟦2-char-id⟧, eJ, XJ, AJ, ⟦2-char-id⟧) => {
+        return ⟦2-char-id⟧.changes.iterChanges(((⟦2-char-id⟧, pB, lB, JB, ⟦2-char-id⟧) => {
           if (⟦2-char-id⟧) return;
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.length - (⟦2-char-id⟧ - ⟦2-char-id⟧);
           if (⟦2-char-id⟧ && ⟦2-char-id⟧ >= ⟦2-char-id⟧.to) {
```

</details>

<details>
<summary>Hunk 433 · Change · +2 / -2</summary>

```diff
@@ -11395,8 +11395,8 @@
       get viewport() {
         return this.viewState.viewport
       }
-      get ⟦2-char-id⟧() {
-        return this.viewState.o5
+      get BBB() {
+        return this.viewState.BBB
       }
       get inView() {
         return this.viewState.inView
```

</details>

<details>
<summary>Hunk 434 · Change · +1 / -1</summary>

```diff
@@ -11426,7 +11426,7 @@
             ⟦2-char-id⟧ = ⟦2-char-id⟧.assignedSlot || ⟦2-char-id⟧.parentNode
           }
           return null
-        }(⟦2-char-id⟧.parent) || document, this.viewState = new ⟦2-char-id⟧(this, ⟦2-char-id⟧.state || ⟦2-char-id⟧.o.create(⟦2-char-id⟧)), ⟦2-char-id⟧.scrollTo && ⟦2-char-id⟧.scrollTo.is(⟦2-char-id⟧) && (this.viewState.scrollTarget = ⟦2-char-id⟧.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(⟦2-char-id⟧).map((⟦2-char-id⟧ => new ⟦2-char-id⟧(⟦2-char-id⟧)));
+        }(⟦2-char-id⟧.parent) || document, this.viewState = new ⟦2-char-id⟧(this, ⟦2-char-id⟧.state || ⟦2-char-id⟧.i.create(⟦2-char-id⟧)), ⟦2-char-id⟧.scrollTo && ⟦2-char-id⟧.scrollTo.is(⟦2-char-id⟧) && (this.viewState.scrollTarget = ⟦2-char-id⟧.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(⟦2-char-id⟧).map((⟦2-char-id⟧ => new ⟦2-char-id⟧(⟦2-char-id⟧)));
         for (let ⟦2-char-id⟧ of this.plugins) ⟦2-char-id⟧.update(this);
         this.observer = new ⟦2-char-id⟧(this), this.inputState = new ⟦2-char-id⟧(this), this.inputState.ensureHandlers(this.plugins), this.docView = new ⟦2-char-id⟧(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (⟦2-char-id⟧ = document.fonts) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.ready) && document.fonts.ready.then((() => {
           this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
```

</details>

<details>
<summary>Hunk 435 · Change · +1 / -1</summary>

```diff
@@ -11434,7 +11434,7 @@
       }
       dispatch() {
         for (var ⟦2-char-id⟧ = arguments.length, ⟦2-char-id⟧ = new Array(⟦2-char-id⟧), ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧] = arguments[⟦2-char-id⟧];
-        let ⟦2-char-id⟧ = 1 == ⟦2-char-id⟧.length && ⟦2-char-id⟧[0] instanceof ⟦2-char-id⟧.J ? cJ : 1 == ⟦2-char-id⟧.length && Array.isArray(⟦2-char-id⟧[0]) ? ⟦2-char-id⟧[0] : [this.state.update(...cJ)];
+        let ⟦2-char-id⟧ = 1 == ⟦2-char-id⟧.length && ⟦2-char-id⟧[0] instanceof ⟦2-char-id⟧.G ? TB : 1 == ⟦2-char-id⟧.length && Array.isArray(⟦2-char-id⟧[0]) ? ⟦2-char-id⟧[0] : [this.state.update(...TB)];
         this.dispatchTransactions(⟦2-char-id⟧, this)
       }
       update(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 436 · Change · +2 / -2</summary>

```diff
@@ -11453,8 +11453,8 @@
         ⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧.annotation(⟦2-char-id⟧))) ? (this.inputState.notifiedFocused = ⟦2-char-id⟧, ⟦2-char-id⟧ = 1) : ⟦2-char-id⟧ != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ || (⟦2-char-id⟧ = 1));
         let ⟦2-char-id⟧ = this.observer.delayedAndroidKey,
           ⟦2-char-id⟧ = null;
-        if (⟦2-char-id⟧ ? (this.observer.clearDelayedAndroidKey(), ⟦2-char-id⟧ = this.observer.readChange(), (⟦2-char-id⟧ && !this.state.doc.eq(⟦2-char-id⟧.doc) || !this.state.selection.eq(⟦2-char-id⟧.selection)) && (⟦2-char-id⟧ = null)) : this.observer.clear(), ⟦2-char-id⟧.facet(⟦2-char-id⟧.o.phrases) != this.state.facet(⟦2-char-id⟧.o.phrases)) return this.setState(⟦2-char-id⟧);
-        ⟦2-char-id⟧ = ⟦2-char-id⟧.create(this, eJ, ⟦2-char-id⟧), ⟦2-char-id⟧.flags |= ⟦2-char-id⟧;
+        if (⟦2-char-id⟧ ? (this.observer.clearDelayedAndroidKey(), ⟦2-char-id⟧ = this.observer.readChange(), (⟦2-char-id⟧ && !this.state.doc.eq(⟦2-char-id⟧.doc) || !this.state.selection.eq(⟦2-char-id⟧.selection)) && (⟦2-char-id⟧ = null)) : this.observer.clear(), ⟦2-char-id⟧.facet(⟦2-char-id⟧.i.phrases) != this.state.facet(⟦2-char-id⟧.i.phrases)) return this.setState(⟦2-char-id⟧);
+        ⟦2-char-id⟧ = ⟦2-char-id⟧.create(this, pB, ⟦2-char-id⟧), ⟦2-char-id⟧.flags |= ⟦2-char-id⟧;
         let ⟦2-char-id⟧ = this.viewState.scrollTarget;
         try {
           this.updateState = 2;
```

</details>

<details>
<summary>Hunk 437 · Change · +1 / -1</summary>

```diff
@@ -11466,7 +11466,7 @@
                 x: ⟦2-char-id⟧,
                 y: ⟦2-char-id⟧
               } = this.state.facet(⟦2-char-id⟧.cursorScrollMargin);
-              ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.empty ? JJ : ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧.head, ⟦2-char-id⟧.head > ⟦2-char-id⟧.anchor ? -1 : 1), "nearest", "nearest", UJ, ⟦2-char-id⟧)
+              ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.empty ? BB : ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧.head, ⟦2-char-id⟧.head > ⟦2-char-id⟧.anchor ? -1 : 1), "nearest", "nearest", yB, ⟦2-char-id⟧)
             }
             for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.effects) ⟦2-char-id⟧.is(⟦2-char-id⟧) && (⟦2-char-id⟧ = ⟦2-char-id⟧.value.clip(this.state))
           }
```

</details>

<details>
<summary>Hunk 438 · Change · +2 / -2</summary>

```diff
@@ -11476,9 +11476,9 @@
         }
         if (⟦2-char-id⟧.startState.facet(⟦2-char-id⟧) != ⟦2-char-id⟧.state.facet(⟦2-char-id⟧) && (this.viewState.mustMeasureContent = !0), (⟦2-char-id⟧ || ⟦2-char-id⟧ || ⟦2-char-id⟧ || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), ⟦2-char-id⟧ && this.docViewUpdate(), !⟦2-char-id⟧.empty)
           for (let ⟦2-char-id⟧ of this.state.facet(⟦2-char-id⟧)) try {
-            FJ(⟦2-char-id⟧)
+            VB(⟦2-char-id⟧)
           } catch (⟦2-char-id⟧) {
-            ic(this.state, DJ, "update listener")
+            GT(this.state, LB, "update listener")
           }(⟦2-char-id⟧ || ⟦2-char-id⟧) && Promise.resolve().then((() => {
             ⟦2-char-id⟧ && this.state == ⟦2-char-id⟧.startState && this.dispatch(⟦2-char-id⟧), ⟦2-char-id⟧ && !⟦2-char-id⟧(this, ⟦2-char-id⟧) && ⟦2-char-id⟧.force && ⟦2-char-id⟧(this.contentDOM, ⟦2-char-id⟧.key, ⟦2-char-id⟧.keyCode)
           }))
```

</details>

<details>
<summary>Hunk 439 · Change · +1 / -1</summary>

```diff
@@ -11524,7 +11524,7 @@
           if (⟦2-char-id⟧ && ⟦2-char-id⟧.docViewUpdate) try {
             ⟦2-char-id⟧.docViewUpdate(this)
           } catch (⟦2-char-id⟧) {
-            ic(this.state, JJ, "doc view update listener")
+            GT(this.state, BB, "doc view update listener")
           }
         }
       }
```

</details>

<details>
<summary>Hunk 440 · Change · +3 / -3</summary>

```diff
@@ -11561,18 +11561,18 @@
                 try {
                   return ⟦2-char-id⟧.read(this)
                 } catch (⟦2-char-id⟧) {
-                  return ⟦2-char-id⟧(this.state, ⟦2-char-id⟧), IU
+                  return ⟦2-char-id⟧(this.state, ⟦2-char-id⟧), Uy
                 }
               })),
               ⟦2-char-id⟧ = ⟦2-char-id⟧.create(this, this.state, []),
               ⟦2-char-id⟧ = !1;
-            ⟦2-char-id⟧.flags |= ⟦2-char-id⟧, ⟦2-char-id⟧ ? ⟦2-char-id⟧.flags |= AJ : ⟦2-char-id⟧ = ⟦2-char-id⟧, this.updateState = 2, ⟦2-char-id⟧.empty || (this.updatePlugins(⟦2-char-id⟧), this.inputState.update(⟦2-char-id⟧), this.updateAttrs(), ⟦2-char-id⟧ = this.docView.update(⟦2-char-id⟧), ⟦2-char-id⟧ && this.docViewUpdate());
+            ⟦2-char-id⟧.flags |= ⟦2-char-id⟧, ⟦2-char-id⟧ ? ⟦2-char-id⟧.flags |= JB : ⟦2-char-id⟧ = ⟦2-char-id⟧, this.updateState = 2, ⟦2-char-id⟧.empty || (this.updatePlugins(⟦2-char-id⟧), this.inputState.update(⟦2-char-id⟧), this.updateAttrs(), ⟦2-char-id⟧ = this.docView.update(⟦2-char-id⟧), ⟦2-char-id⟧ && this.docViewUpdate());
             for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++)
               if (⟦2-char-id⟧[⟦2-char-id⟧] != ⟦2-char-id⟧) try {
                 let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
                 ⟦2-char-id⟧.write && ⟦2-char-id⟧.write(⟦2-char-id⟧[⟦2-char-id⟧], this)
               } catch (⟦2-char-id⟧) {
-                ic(this.state, ⟦2-char-id⟧)
+                GT(this.state, ⟦2-char-id⟧)
               }
             if (⟦2-char-id⟧ && this.docView.updateSelection(!0), !⟦2-char-id⟧.viewportChanged && 0 == this.measureRequests.length) {
               if (this.viewState.editorHeight) {
```

</details>

<details>
<summary>Hunk 441 · Change · +1 / -1</summary>

```diff
@@ -11582,7 +11582,7 @@
                 } {
                   let ⟦2-char-id⟧ = ((⟦2-char-id⟧ < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(⟦2-char-id⟧).top) - ⟦2-char-id⟧) / this.scaleY;
                   if ((⟦2-char-id⟧ > 1 || ⟦2-char-id⟧ < -1) && (⟦2-char-id⟧ == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
-                    ⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧ ? ⟦2-char-id⟧.scrollTop += JJ : this.win.scrollBy(0, ⟦2-char-id⟧), ⟦2-char-id⟧ = -1;
+                    ⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧ ? ⟦2-char-id⟧.scrollTop += BB : this.win.scrollBy(0, ⟦2-char-id⟧), ⟦2-char-id⟧ = -1;
                     continue
                   }
                 }
```

</details>

<details>
<summary>Hunk 442 · Change · +2 / -2</summary>

```diff
@@ -11597,10 +11597,10 @@
           for (let ⟦2-char-id⟧ of this.state.facet(⟦2-char-id⟧)) ⟦2-char-id⟧(⟦2-char-id⟧)
       }
       get themeClasses() {
-        return ⟦2-char-id⟧ + " " + (this.state.facet(⟦2-char-id⟧) ? GU : ⟦2-char-id⟧) + " " + this.state.facet(⟦2-char-id⟧)
+        return ⟦2-char-id⟧ + " " + (this.state.facet(⟦2-char-id⟧) ? Hy : ⟦2-char-id⟧) + " " + this.state.facet(⟦2-char-id⟧)
       }
       updateAttrs() {
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧(this, oc, {
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧(this, nT, {
             class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
           }),
           ⟦2-char-id⟧ = {
```

</details>

<details>
<summary>Hunk 443 · Change · +3 / -3</summary>

```diff
@@ -11611,17 +11611,17 @@
             translate: "no",
             contenteditable: this.state.facet(⟦2-char-id⟧) ? "true" : "false",
             class: "cm-content",
-            style: `${VJ.tabSize}: ${this.state.tabSize}`,
+            style: `${fB.tabSize}: ${this.state.tabSize}`,
             role: "textbox",
             "aria-multiline": "true"
           };
-        this.state.readOnly && (⟦2-char-id⟧["aria-readonly"] = "true"), bU(this, lc, ⟦2-char-id⟧);
+        this.state.readOnly && (⟦2-char-id⟧["aria-readonly"] = "true"), Ky(this, eT, ⟦2-char-id⟧);
         let ⟦2-char-id⟧ = this.observer.ignore((() => {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧(this.contentDOM, this.contentAttrs, ⟦2-char-id⟧),
             ⟦2-char-id⟧ = ⟦2-char-id⟧(this.dom, this.editorAttrs, ⟦2-char-id⟧);
           return ⟦2-char-id⟧ || ⟦2-char-id⟧
         }));
-        return this.editorAttrs = ⟦2-char-id⟧, this.contentAttrs = ⟦2-char-id⟧, ZJ
+        return this.editorAttrs = ⟦2-char-id⟧, this.contentAttrs = ⟦2-char-id⟧, dB
       }
       showAnnouncements(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = !0;
```

</details>

<details>
<summary>Hunk 444 · Change · +1 / -1</summary>

```diff
@@ -11634,7 +11634,7 @@
       mountStyles() {
         this.styleModules = this.state.facet(⟦2-char-id⟧);
         let ⟦2-char-id⟧ = this.state.facet(⟦2-char-id⟧.cspNonce);
-        ⟦2-char-id⟧.c.mount(this.root, this.styleModules.concat(⟦2-char-id⟧).reverse(), ⟦2-char-id⟧ ? {
+        ⟦2-char-id⟧.e.mount(this.root, this.styleModules.concat(⟦2-char-id⟧).reverse(), ⟦2-char-id⟧ ? {
           nonce: ⟦2-char-id⟧
         } : void 0)
       }
```

</details>

<details>
<summary>Hunk 445 · Change · +4 / -4</summary>

```diff
@@ -11685,16 +11685,16 @@
       get contentHeight() {
         return this.viewState.contentHeight
       }
-      moveByChar(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-        return ⟦2-char-id⟧(this, JJ, CZ(this, JJ, cJ, ⟦2-char-id⟧))
+      moveByChar(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+        return ⟦2-char-id⟧(this, BB, Cd(this, BB, TB, ⟦2-char-id⟧))
       }
       moveByGroup(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        return ⟦2-char-id⟧(this, JJ, CZ(this, JJ, cJ, (⟦2-char-id⟧ => function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+        return ⟦2-char-id⟧(this, BB, Cd(this, BB, TB, (⟦2-char-id⟧ => function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.state.charCategorizer(⟦2-char-id⟧),
             ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
           return ⟦2-char-id⟧ => {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
-            return ⟦2-char-id⟧ == ⟦2-char-id⟧.i.Space && (⟦2-char-id⟧ = ⟦2-char-id⟧), ⟦2-char-id⟧ == ⟦2-char-id⟧
+            return ⟦2-char-id⟧ == ⟦2-char-id⟧.e.Space && (⟦2-char-id⟧ = ⟦2-char-id⟧), ⟦2-char-id⟧ == ⟦2-char-id⟧
           }
         }(this, ⟦2-char-id⟧.head, ⟦2-char-id⟧))))
       }
```

</details>

<details>
<summary>Hunk 446 · Change · +2 / -2</summary>

```diff
@@ -11702,10 +11702,10 @@
         let ⟦2-char-id⟧ = this.bidiSpans(⟦2-char-id⟧),
           ⟦2-char-id⟧ = this.textDirectionAt(⟦2-char-id⟧.from),
           ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ ? ⟦2-char-id⟧.length - 1 : 0];
-        return ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧.side(⟦2-char-id⟧, ⟦2-char-id⟧) + ⟦2-char-id⟧.from, ⟦2-char-id⟧.forward(!⟦2-char-id⟧, ⟦2-char-id⟧) ? 1 : -1)
+        return ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧.side(⟦2-char-id⟧, ⟦2-char-id⟧) + ⟦2-char-id⟧.from, ⟦2-char-id⟧.forward(!⟦2-char-id⟧, ⟦2-char-id⟧) ? 1 : -1)
       }
       moveToLineBoundary(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        return function(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+        return function(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.head, ⟦2-char-id⟧.assoc || -1),
             ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧.type == ⟦2-char-id⟧.Text && (⟦2-char-id⟧.lineWrapping || ⟦2-char-id⟧.widgetLineBreaks) ? ⟦2-char-id⟧.coordsAtPos(⟦2-char-id⟧.assoc < 0 && ⟦2-char-id⟧.head > ⟦2-char-id⟧.from ? ⟦2-char-id⟧.head - 1 : ⟦2-char-id⟧.head) : null;
           if (⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 447 · Change · +9 / -9</summary>

```diff
@@ -11715,19 +11715,19 @@
                 x: ⟦2-char-id⟧ == (⟦2-char-id⟧ == ⟦2-char-id⟧.LTR) ? ⟦2-char-id⟧.right - 1 : ⟦2-char-id⟧.left + 1,
                 y: (⟦2-char-id⟧.top + ⟦2-char-id⟧.bottom) / 2
               });
-            if (null != ⟦2-char-id⟧) return ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧, ⟦2-char-id⟧ ? -1 : 1)
-          }
-          return ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧ ? ⟦2-char-id⟧.to : ⟦2-char-id⟧.from, ⟦2-char-id⟧ ? -1 : 1)
-        }(this, JJ, cJ, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
-      }
-      moveVertically(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-        return ⟦2-char-id⟧(this, JJ, function(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+            if (null != ⟦2-char-id⟧) return ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧, ⟦2-char-id⟧ ? -1 : 1)
+          }
+          return ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧ ? ⟦2-char-id⟧.to : ⟦2-char-id⟧.from, ⟦2-char-id⟧ ? -1 : 1)
+        }(this, BB, TB, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
+      }
+      moveVertically(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+        return ⟦2-char-id⟧(this, BB, function(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.head,
             ⟦2-char-id⟧ = ⟦2-char-id⟧ ? 1 : -1;
-          if (⟦2-char-id⟧ == (⟦2-char-id⟧ ? ⟦2-char-id⟧.state.doc.length : 0)) return ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧, ⟦2-char-id⟧.assoc);
+          if (⟦2-char-id⟧ == (⟦2-char-id⟧ ? ⟦2-char-id⟧.state.doc.length : 0)) return ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧, ⟦2-char-id⟧.assoc);
           let ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.goalColumn,
             ⟦2-char-id⟧ = ⟦2-char-id⟧.contentDOM.getBoundingClientRect(),
-            ⟦2-char-id⟧ = ⟦2-char-id⟧.coordsAtPos(⟦2-char-id⟧, ⟦2-char-id⟧.assoc || ((⟦2-char-id⟧.empty ? ZJ : ⟦2-char-id⟧.head == ⟦2-char-id⟧.from) ? 1 : -1)),
+            ⟦2-char-id⟧ = ⟦2-char-id⟧.coordsAtPos(⟦2-char-id⟧, ⟦2-char-id⟧.assoc || ((⟦2-char-id⟧.empty ? dB : ⟦2-char-id⟧.head == ⟦2-char-id⟧.from) ? 1 : -1)),
             ⟦2-char-id⟧ = ⟦2-char-id⟧.documentTop;
           if (⟦2-char-id⟧) null == ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.left - ⟦2-char-id⟧.left), ⟦2-char-id⟧ = ⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧.top : ⟦2-char-id⟧.bottom;
           else {
```

</details>

<details>
<summary>Hunk 448 · Change · +5 / -5</summary>

```diff
@@ -11736,19 +11736,19 @@
           }
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.left + ⟦2-char-id⟧,
             ⟦2-char-id⟧ = ⟦2-char-id⟧.viewState.heightOracle.textHeight >> 1,
-            ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? UJ : ⟦2-char-id⟧;
+            ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? yB : ⟦2-char-id⟧;
           for (let ⟦2-char-id⟧ = 0;; ⟦2-char-id⟧ += ⟦2-char-id⟧) {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧ + (⟦2-char-id⟧ + ⟦2-char-id⟧) * ⟦2-char-id⟧,
               ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, {
                 x: ⟦2-char-id⟧,
                 y: ⟦2-char-id⟧
               }, !1, ⟦2-char-id⟧);
-            if (⟦2-char-id⟧ ? ⟦2-char-id⟧ > ⟦2-char-id⟧.bottom : ⟦2-char-id⟧ < ⟦2-char-id⟧.top) return ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧.pos, ⟦2-char-id⟧.assoc);
+            if (⟦2-char-id⟧ ? ⟦2-char-id⟧ > ⟦2-char-id⟧.bottom : ⟦2-char-id⟧ < ⟦2-char-id⟧.top) return ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧.pos, ⟦2-char-id⟧.assoc);
             let ⟦2-char-id⟧ = ⟦2-char-id⟧.coordsAtPos(⟦2-char-id⟧.pos, ⟦2-char-id⟧.assoc),
               ⟦2-char-id⟧ = ⟦2-char-id⟧ ? (⟦2-char-id⟧.top + ⟦2-char-id⟧.bottom) / 2 : 0;
-            if (!⟦2-char-id⟧ || (⟦2-char-id⟧ ? ⟦2-char-id⟧ > AJ : ⟦2-char-id⟧ < ⟦2-char-id⟧)) return ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧.pos, ⟦2-char-id⟧.assoc, void 0, ⟦2-char-id⟧)
-          }
-        }(this, JJ, cJ, ⟦2-char-id⟧))
+            if (!⟦2-char-id⟧ || (⟦2-char-id⟧ ? ⟦2-char-id⟧ > JB : ⟦2-char-id⟧ < ⟦2-char-id⟧)) return ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧.pos, ⟦2-char-id⟧.assoc, void 0, ⟦2-char-id⟧)
+          }
+        }(this, BB, TB, ⟦2-char-id⟧))
       }
       domAtPos(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
```

</details>

<details>
<summary>Hunk 449 · Change · +2 / -2</summary>

```diff
@@ -11761,12 +11761,12 @@
       posAtCoords(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
         this.readMeasured();
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧(this, JJ, ⟦2-char-id⟧);
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧(this, BB, ⟦2-char-id⟧);
         return ⟦2-char-id⟧ && ⟦2-char-id⟧.pos
       }
       posAndSideAtCoords(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-        return this.readMeasured(), aZ(this, JJ, ⟦2-char-id⟧)
+        return this.readMeasured(), Ad(this, BB, ⟦2-char-id⟧)
       }
       coordsAtPos(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
```

</details>

<details>
<summary>Hunk 450 · Change · +2 / -2</summary>

```diff
@@ -11801,8 +11801,8 @@
         for (let ⟦2-char-id⟧ of this.bidiCache)
           if (⟦2-char-id⟧.from == ⟦2-char-id⟧.from && ⟦2-char-id⟧.dir == ⟦2-char-id⟧ && (⟦2-char-id⟧.fresh || ⟦2-char-id⟧(⟦2-char-id⟧.isolates, ⟦2-char-id⟧ = ⟦2-char-id⟧(this, ⟦2-char-id⟧)))) return ⟦2-char-id⟧.order;
         ⟦2-char-id⟧ || (⟦2-char-id⟧ = ⟦2-char-id⟧(this, ⟦2-char-id⟧));
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.text, ZJ, ⟦2-char-id⟧);
-        return this.bidiCache.push(new ⟦2-char-id⟧(⟦2-char-id⟧.from, ⟦2-char-id⟧.to, ZJ, cJ, !0, ⟦2-char-id⟧)), FJ
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.text, dB, ⟦2-char-id⟧);
+        return this.bidiCache.push(new ⟦2-char-id⟧(⟦2-char-id⟧.from, ⟦2-char-id⟧.to, dB, TB, !0, ⟦2-char-id⟧)), VB
       }
       get hasFocus() {
         var ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 451 · Change · +2 / -2</summary>

```diff
@@ -11810,11 +11810,11 @@
       }
       focus() {
         this.observer.ignore((() => {
-          Zc(this.contentDOM), this.docView.updateSelection()
+          dT(this.contentDOM), this.docView.updateSelection()
         }))
       }
       setRoot(⟦2-char-id⟧) {
-        this._root != ⟦2-char-id⟧ && (this._root = ⟦2-char-id⟧, this.observer.setWindow((9 == ⟦2-char-id⟧.nodeType ? JJ : ⟦2-char-id⟧.ownerDocument).defaultView || window), this.mountStyles())
+        this._root != ⟦2-char-id⟧ && (this._root = ⟦2-char-id⟧, this.observer.setWindow((9 == ⟦2-char-id⟧.nodeType ? BB : ⟦2-char-id⟧.ownerDocument).defaultView || window), this.mountStyles())
       }
       destroy() {
         this.root.activeElement == this.contentDOM && this.contentDOM.blur();
```

</details>

<details>
<summary>Hunk 452 · Change · +3 / -3</summary>

```diff
@@ -11823,15 +11823,15 @@
       }
       static scrollIntoView(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-        var ⟦2-char-id⟧, UJ, eJ, ⟦2-char-id⟧;
-        return ⟦2-char-id⟧.of(new ⟦2-char-id⟧("number" == typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧) : ⟦2-char-id⟧, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.y) && void 0 !== ⟦2-char-id⟧ ? ZJ : "nearest", null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.x) && void 0 !== ⟦2-char-id⟧ ? UJ : "nearest", null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.yMargin) && void 0 !== ⟦2-char-id⟧ ? eJ : 5, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.xMargin) && void 0 !== ⟦2-char-id⟧ ? XJ : 5))
+        var ⟦2-char-id⟧, yB, pB, ⟦2-char-id⟧;
+        return ⟦2-char-id⟧.of(new ⟦2-char-id⟧("number" == typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧) : ⟦2-char-id⟧, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.y) && void 0 !== ⟦2-char-id⟧ ? dB : "nearest", null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.x) && void 0 !== ⟦2-char-id⟧ ? yB : "nearest", null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.yMargin) && void 0 !== ⟦2-char-id⟧ ? pB : 5, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.xMargin) && void 0 !== ⟦2-char-id⟧ ? lB : 5))
       }
       scrollSnapshot() {
         let {
           scrollTop: ⟦2-char-id⟧,
           scrollLeft: ⟦2-char-id⟧
         } = this.scrollDOM, ⟦2-char-id⟧ = this.viewState.scrollAnchorAt(⟦2-char-id⟧);
-        return ⟦2-char-id⟧.of(new ⟦2-char-id⟧(⟦2-char-id⟧.m.cursor(⟦2-char-id⟧.from), "start", "start", ⟦2-char-id⟧.top - ⟦2-char-id⟧, cJ, !0))
+        return ⟦2-char-id⟧.of(new ⟦2-char-id⟧(⟦2-char-id⟧.h.cursor(⟦2-char-id⟧.from), "start", "start", ⟦2-char-id⟧.top - ⟦2-char-id⟧, TB, !0))
       }
       setTabFocusMode(⟦2-char-id⟧) {
         null == ⟦2-char-id⟧ ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof ⟦2-char-id⟧ ? this.inputState.tabFocusMode = ⟦2-char-id⟧ ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 453 · Change · +4 / -4</summary>

```diff
@@ -11847,12 +11847,12 @@
         })
       }
       static theme(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧.c.newName(),
-          ⟦2-char-id⟧ = [⟦2-char-id⟧.of(⟦2-char-id⟧), ⟦2-char-id⟧.of(⟦2-char-id⟧(`.${ZJ}`, ⟦2-char-id⟧))];
-        return ⟦2-char-id⟧ && ⟦2-char-id⟧.dark && ⟦2-char-id⟧.push(⟦2-char-id⟧.of(!0)), FJ
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧.e.newName(),
+          ⟦2-char-id⟧ = [⟦2-char-id⟧.of(⟦2-char-id⟧), ⟦2-char-id⟧.of(⟦2-char-id⟧(`.${dB}`, ⟦2-char-id⟧))];
+        return ⟦2-char-id⟧ && ⟦2-char-id⟧.dark && ⟦2-char-id⟧.push(⟦2-char-id⟧.of(!0)), VB
       }
       static baseTheme(⟦2-char-id⟧) {
-        return ⟦2-char-id⟧.t.lowest(⟦2-char-id⟧.of(⟦2-char-id⟧("." + ⟦2-char-id⟧, JJ, ⟦2-char-id⟧)))
+        return ⟦2-char-id⟧.r.lowest(⟦2-char-id⟧.of(⟦2-char-id⟧("." + ⟦2-char-id⟧, BB, ⟦2-char-id⟧)))
       }
       static findFromDOM(⟦2-char-id⟧) {
         var ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 454 · Change · +2 / -2</summary>

```diff
@@ -11861,11 +11861,11 @@
         return (null === (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.root) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.view) || null
       }
     }
-    ⟦2-char-id⟧.styleModule = ⟦2-char-id⟧, ⟦2-char-id⟧.inputHandler = ⟦2-char-id⟧, ⟦2-char-id⟧.clipboardInputFilter = ⟦2-char-id⟧, ⟦2-char-id⟧.clipboardOutputFilter = ⟦2-char-id⟧, ⟦2-char-id⟧.scrollHandler = ⟦2-char-id⟧, ⟦2-char-id⟧.focusChangeEffect = ⟦2-char-id⟧, ⟦2-char-id⟧.perLineTextDirection = ⟦2-char-id⟧, ⟦2-char-id⟧.exceptionSink = ⟦2-char-id⟧, ⟦2-char-id⟧.updateListener = ⟦2-char-id⟧, ⟦2-char-id⟧.editable = ⟦2-char-id⟧, ⟦2-char-id⟧.mouseSelectionStyle = ⟦2-char-id⟧, ⟦2-char-id⟧.dragMovesSelection = ⟦2-char-id⟧, ⟦2-char-id⟧.clickAddsSelectionRange = ⟦2-char-id⟧, ⟦2-char-id⟧.je = ⟦2-char-id⟧, ⟦2-char-id⟧.blockWrappers = ⟦2-char-id⟧, ⟦2-char-id⟧.outerDecorations = ⟦2-char-id⟧, ⟦2-char-id⟧.atomicRanges = ⟦2-char-id⟧, ⟦2-char-id⟧.bidiIsolatedRanges = ⟦2-char-id⟧, ⟦2-char-id⟧.cursorScrollMargin = ⟦2-char-id⟧.p.define({
+    ⟦2-char-id⟧.styleModule = ⟦2-char-id⟧, ⟦2-char-id⟧.inputHandler = ⟦2-char-id⟧, ⟦2-char-id⟧.clipboardInputFilter = ⟦2-char-id⟧, ⟦2-char-id⟧.clipboardOutputFilter = ⟦2-char-id⟧, ⟦2-char-id⟧.scrollHandler = ⟦2-char-id⟧, ⟦2-char-id⟧.focusChangeEffect = ⟦2-char-id⟧, ⟦2-char-id⟧.perLineTextDirection = ⟦2-char-id⟧, ⟦2-char-id⟧.exceptionSink = ⟦2-char-id⟧, ⟦2-char-id⟧.updateListener = ⟦2-char-id⟧, ⟦2-char-id⟧.editable = ⟦2-char-id⟧, ⟦2-char-id⟧.mouseSelectionStyle = ⟦2-char-id⟧, ⟦2-char-id⟧.dragMovesSelection = ⟦2-char-id⟧, ⟦2-char-id⟧.clickAddsSelectionRange = ⟦2-char-id⟧, ⟦2-char-id⟧.QB = ⟦2-char-id⟧, ⟦2-char-id⟧.blockWrappers = ⟦2-char-id⟧, ⟦2-char-id⟧.outerDecorations = ⟦2-char-id⟧, ⟦2-char-id⟧.atomicRanges = ⟦2-char-id⟧, ⟦2-char-id⟧.bidiIsolatedRanges = ⟦2-char-id⟧, ⟦2-char-id⟧.cursorScrollMargin = ⟦2-char-id⟧.l.define({
       combine: ⟦2-char-id⟧ => {
         let ⟦2-char-id⟧ = 5,
           ⟦2-char-id⟧ = 5;
-        for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) "number" == typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧ = ⟦2-char-id⟧ = FJ : ({
+        for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) "number" == typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧ = ⟦2-char-id⟧ = VB : ({
           x: ⟦2-char-id⟧,
           y: ⟦2-char-id⟧
         } = ⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 455 · Change · +3 / -3</summary>

```diff
@@ -11874,15 +11874,15 @@
           y: ⟦2-char-id⟧
         }
       }
-    }), ⟦2-char-id⟧.scrollMargins = ⟦2-char-id⟧, ⟦2-char-id⟧.darkTheme = ⟦2-char-id⟧, ⟦2-char-id⟧.cspNonce = ⟦2-char-id⟧.p.define({
+    }), ⟦2-char-id⟧.scrollMargins = ⟦2-char-id⟧, ⟦2-char-id⟧.darkTheme = ⟦2-char-id⟧, ⟦2-char-id⟧.cspNonce = ⟦2-char-id⟧.l.define({
       combine: ⟦2-char-id⟧ => ⟦2-char-id⟧.length ? ⟦2-char-id⟧[0] : ""
     }), ⟦2-char-id⟧.contentAttributes = ⟦2-char-id⟧, ⟦2-char-id⟧.editorAttributes = ⟦2-char-id⟧, ⟦2-char-id⟧.lineWrapping = ⟦2-char-id⟧.contentAttributes.of({
       class: "cm-lineWrapping"
-    }), ⟦2-char-id⟧.announce = ⟦2-char-id⟧.A.define();
+    }), ⟦2-char-id⟧.announce = ⟦2-char-id⟧.x.define();
     const ⟦2-char-id⟧ = 4096,
       ⟦2-char-id⟧ = {};
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, VB, yB, ⟦2-char-id⟧) {
         this.from = ⟦2-char-id⟧, this.to = ⟦2-char-id⟧, this.dir = ⟦2-char-id⟧, this.isolates = ⟦2-char-id⟧, this.fresh = ⟦2-char-id⟧, this.order = ⟦2-char-id⟧
       }
       static update(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 456 · Change · +1 / -1</summary>

```diff
@@ -11897,7 +11897,7 @@
       }
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       for (let ⟦2-char-id⟧ = ⟦2-char-id⟧.state.facet(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.length - 1; ⟦2-char-id⟧ >= 0; ⟦2-char-id⟧--) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
           ⟦2-char-id⟧ = "function" == typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧) : ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 457 · Change · +6 / -6</summary>

```diff
@@ -11907,13 +11907,13 @@
     }
     const ⟦2-char-id⟧ = ⟦2-char-id⟧.mac ? "mac" : ⟦2-char-id⟧.windows ? "win" : ⟦2-char-id⟧.linux ? "linux" : "key";
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧.altKey && (⟦2-char-id⟧ = "Alt-" + ⟦2-char-id⟧), ⟦2-char-id⟧.ctrlKey && (⟦2-char-id⟧ = "Ctrl-" + ⟦2-char-id⟧), ⟦2-char-id⟧.metaKey && (⟦2-char-id⟧ = "Meta-" + ⟦2-char-id⟧), !1 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.shiftKey && (⟦2-char-id⟧ = "Shift-" + ⟦2-char-id⟧), JJ
-    }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.t.default(⟦2-char-id⟧.domEventHandlers({
-        keydown: (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧.state), JJ, cJ, "editor")
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧.altKey && (⟦2-char-id⟧ = "Alt-" + ⟦2-char-id⟧), ⟦2-char-id⟧.ctrlKey && (⟦2-char-id⟧ = "Ctrl-" + ⟦2-char-id⟧), ⟦2-char-id⟧.metaKey && (⟦2-char-id⟧ = "Meta-" + ⟦2-char-id⟧), !1 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.shiftKey && (⟦2-char-id⟧ = "Shift-" + ⟦2-char-id⟧), BB
+    }
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.r.default(⟦2-char-id⟧.domEventHandlers({
+        keydown: (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧.state), BB, TB, "editor")
       })),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define({
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define({
         enables: ⟦2-char-id⟧
       }),
       ⟦2-char-id⟧ = new WeakMap;
```

</details>

<details>
<summary>Hunk 458 · Change · +2 / -2</summary>

```diff
@@ -11930,12 +11930,12 @@
             if (null == ⟦2-char-id⟧) ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧;
             else if (⟦2-char-id⟧ != ⟦2-char-id⟧) throw new Error("Key binding " + ⟦2-char-id⟧ + " is used both as a regular binding and as a multi-stroke prefix")
           },
-          ⟦2-char-id⟧ = (⟦2-char-id⟧, FJ, eJ, XJ, ⟦2-char-id⟧) => {
+          ⟦2-char-id⟧ = (⟦2-char-id⟧, VB, pB, lB, ⟦2-char-id⟧) => {
             var ⟦2-char-id⟧, ⟦2-char-id⟧;
             let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧] || (⟦2-char-id⟧[⟦2-char-id⟧] = Object.create(null)),
               ⟦2-char-id⟧ = ⟦2-char-id⟧.split(/ (?!$)/).map((⟦2-char-id⟧ => function(⟦2-char-id⟧, ⟦2-char-id⟧) {
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧.split(/-(?!$)/);
-                let ⟦2-char-id⟧, UJ, eJ, XJ, ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.length - 1];
+                let ⟦2-char-id⟧, yB, pB, lB, ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.length - 1];
                 "Space" == ⟦2-char-id⟧ && (⟦2-char-id⟧ = " ");
                 for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length - 1; ++⟦2-char-id⟧) {
                   const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
```

</details>

<details>
<summary>Hunk 459 · Change · +1 / -1</summary>

```diff
@@ -11948,7 +11948,7 @@
                     "mac" == ⟦2-char-id⟧ ? ⟦2-char-id⟧ = !0 : ⟦2-char-id⟧ = !0
                   }
                 }
-                return ⟦2-char-id⟧ && (⟦2-char-id⟧ = "Alt-" + ⟦2-char-id⟧), ⟦2-char-id⟧ && (⟦2-char-id⟧ = "Ctrl-" + ⟦2-char-id⟧), ⟦2-char-id⟧ && (⟦2-char-id⟧ = "Meta-" + ⟦2-char-id⟧), ⟦2-char-id⟧ && (⟦2-char-id⟧ = "Shift-" + ⟦2-char-id⟧), AJ
+                return ⟦2-char-id⟧ && (⟦2-char-id⟧ = "Alt-" + ⟦2-char-id⟧), ⟦2-char-id⟧ && (⟦2-char-id⟧ = "Ctrl-" + ⟦2-char-id⟧), ⟦2-char-id⟧ && (⟦2-char-id⟧ = "Meta-" + ⟦2-char-id⟧), ⟦2-char-id⟧ && (⟦2-char-id⟧ = "Shift-" + ⟦2-char-id⟧), JB
               }(⟦2-char-id⟧, ⟦2-char-id⟧)));
             for (let ⟦2-char-id⟧ = 1; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) {
               let ⟦2-char-id⟧ = ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧).join(" ");
```

</details>

<details>
<summary>Hunk 460 · Change · +16 / -16</summary>

```diff
@@ -11993,51 +11993,51 @@
             }
           let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧] || ⟦2-char-id⟧.key;
           if (⟦2-char-id⟧)
-            for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧(⟦2-char-id⟧, FJ, ⟦2-char-id⟧.run, ⟦2-char-id⟧.preventDefault, ⟦2-char-id⟧.stopPropagation), ⟦2-char-id⟧.shift && ⟦2-char-id⟧(⟦2-char-id⟧, "Shift-" + ⟦2-char-id⟧, ⟦2-char-id⟧.shift, ⟦2-char-id⟧.preventDefault, ⟦2-char-id⟧.stopPropagation)
+            for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧(⟦2-char-id⟧, VB, ⟦2-char-id⟧.run, ⟦2-char-id⟧.preventDefault, ⟦2-char-id⟧.stopPropagation), ⟦2-char-id⟧.shift && ⟦2-char-id⟧(⟦2-char-id⟧, "Shift-" + ⟦2-char-id⟧, ⟦2-char-id⟧.shift, ⟦2-char-id⟧.preventDefault, ⟦2-char-id⟧.stopPropagation)
         }
         return ⟦2-char-id⟧
-      }(⟦2-char-id⟧.reduce(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.concat(⟦2-char-id⟧)), []))), ZJ
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧.state), cJ, JJ, ⟦2-char-id⟧)
+      }(⟦2-char-id⟧.reduce(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.concat(⟦2-char-id⟧)), []))), dB
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧.state), TB, BB, ⟦2-char-id⟧)
     }
     let ⟦2-char-id⟧ = null;
     const ⟦2-char-id⟧ = 4⟦2-char-id⟧;
     let ⟦2-char-id⟧ = null;
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
       ⟦2-char-id⟧ = ⟦2-char-id⟧;
       let ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
-          var ⟦2-char-id⟧ = !(⟦2-char-id⟧ && ⟦2-char-id⟧.metaKey && ⟦2-char-id⟧.shiftKey && !⟦2-char-id⟧.ctrlKey && !⟦2-char-id⟧.altKey || ⟦2-char-id⟧ && ⟦2-char-id⟧.shiftKey && ⟦2-char-id⟧.key && 1 == ⟦2-char-id⟧.key.length || "Unidentified" == ⟦2-char-id⟧.key) && ⟦2-char-id⟧.key || (⟦2-char-id⟧.shiftKey ? XJ : ⟦2-char-id⟧)[⟦2-char-id⟧.keyCode] || ⟦2-char-id⟧.key || "Unidentified";
-          return "Esc" == ⟦2-char-id⟧ && (⟦2-char-id⟧ = "Escape"), "Del" == ⟦2-char-id⟧ && (⟦2-char-id⟧ = "Delete"), "Left" == ⟦2-char-id⟧ && (⟦2-char-id⟧ = "ArrowLeft"), "Up" == ⟦2-char-id⟧ && (⟦2-char-id⟧ = "ArrowUp"), "Right" == ⟦2-char-id⟧ && (⟦2-char-id⟧ = "ArrowRight"), "Down" == ⟦2-char-id⟧ && (⟦2-char-id⟧ = "ArrowDown"), cJ
+          var ⟦2-char-id⟧ = !(⟦2-char-id⟧ && ⟦2-char-id⟧.metaKey && ⟦2-char-id⟧.shiftKey && !⟦2-char-id⟧.ctrlKey && !⟦2-char-id⟧.altKey || ⟦2-char-id⟧ && ⟦2-char-id⟧.shiftKey && ⟦2-char-id⟧.key && 1 == ⟦2-char-id⟧.key.length || "Unidentified" == ⟦2-char-id⟧.key) && ⟦2-char-id⟧.key || (⟦2-char-id⟧.shiftKey ? lB : ⟦2-char-id⟧)[⟦2-char-id⟧.keyCode] || ⟦2-char-id⟧.key || "Unidentified";
+          return "Esc" == ⟦2-char-id⟧ && (⟦2-char-id⟧ = "Escape"), "Del" == ⟦2-char-id⟧ && (⟦2-char-id⟧ = "Delete"), "Left" == ⟦2-char-id⟧ && (⟦2-char-id⟧ = "ArrowLeft"), "Up" == ⟦2-char-id⟧ && (⟦2-char-id⟧ = "ArrowUp"), "Right" == ⟦2-char-id⟧ && (⟦2-char-id⟧ = "ArrowRight"), "Down" == ⟦2-char-id⟧ && (⟦2-char-id⟧ = "ArrowDown"), TB
         }(⟦2-char-id⟧),
-        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.L)(⟦2-char-id⟧, 0),
-        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.P)(⟦2-char-id⟧) == ⟦2-char-id⟧.length && " " != ⟦2-char-id⟧,
+        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.K)(⟦2-char-id⟧, 0),
+        ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.M)(⟦2-char-id⟧) == ⟦2-char-id⟧.length && " " != ⟦2-char-id⟧,
         ⟦2-char-id⟧ = "",
         ⟦2-char-id⟧ = !1,
         ⟦2-char-id⟧ = !1,
         ⟦2-char-id⟧ = !1;
       ⟦2-char-id⟧ && ⟦2-char-id⟧.view == ⟦2-char-id⟧ && ⟦2-char-id⟧.scope == ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.prefix + " ", ⟦2-char-id⟧.indexOf(⟦2-char-id⟧.keyCode) < 0 && (⟦2-char-id⟧ = !0, ⟦2-char-id⟧ = null));
-      let ⟦2-char-id⟧, xJ, ⟦2-char-id⟧ = new Set,
+      let ⟦2-char-id⟧, EB, ⟦2-char-id⟧ = new Set,
         ⟦2-char-id⟧ = ⟦2-char-id⟧ => {
           if (⟦2-char-id⟧) {
             for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.run)
-              if (!⟦2-char-id⟧.has(⟦2-char-id⟧) && (⟦2-char-id⟧.add(⟦2-char-id⟧), cJ(⟦2-char-id⟧))) return ⟦2-char-id⟧.stopPropagation && (⟦2-char-id⟧ = !0), !0;
+              if (!⟦2-char-id⟧.has(⟦2-char-id⟧) && (⟦2-char-id⟧.add(⟦2-char-id⟧), TB(⟦2-char-id⟧))) return ⟦2-char-id⟧.stopPropagation && (⟦2-char-id⟧ = !0), !0;
             ⟦2-char-id⟧.preventDefault && (⟦2-char-id⟧.stopPropagation && (⟦2-char-id⟧ = !0), ⟦2-char-id⟧ = !0)
           }
           return !1
         },
         ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
-      return ⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧(⟦2-char-id⟧, cJ, !⟦2-char-id⟧)]) ? ⟦2-char-id⟧ = !0 : !⟦2-char-id⟧ || !(⟦2-char-id⟧.altKey || ⟦2-char-id⟧.metaKey || ⟦2-char-id⟧.ctrlKey) || ⟦2-char-id⟧.windows && ⟦2-char-id⟧.ctrlKey && ⟦2-char-id⟧.altKey || ⟦2-char-id⟧.mac && ⟦2-char-id⟧.altKey && !⟦2-char-id⟧.ctrlKey && !⟦2-char-id⟧.metaKey || !(⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.keyCode]) || ⟦2-char-id⟧ == ⟦2-char-id⟧ ? ⟦2-char-id⟧ && ⟦2-char-id⟧.shiftKey && ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧(⟦2-char-id⟧, cJ, !0)]) && (⟦2-char-id⟧ = !0) : (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧(⟦2-char-id⟧, cJ, !0)]) || ⟦2-char-id⟧.shiftKey && (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.keyCode]) != ⟦2-char-id⟧ && ⟦2-char-id⟧ != ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧(⟦2-char-id⟧, cJ, !1)])) && (⟦2-char-id⟧ = !0), !⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧._any) && (⟦2-char-id⟧ = !0)), ⟦2-char-id⟧ && (⟦2-char-id⟧ = !0), ⟦2-char-id⟧ && ⟦2-char-id⟧ && ⟦2-char-id⟧.stopPropagation(), ⟦2-char-id⟧ = null, sJ
+      return ⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧(⟦2-char-id⟧, TB, !⟦2-char-id⟧)]) ? ⟦2-char-id⟧ = !0 : !⟦2-char-id⟧ || !(⟦2-char-id⟧.altKey || ⟦2-char-id⟧.metaKey || ⟦2-char-id⟧.ctrlKey) || ⟦2-char-id⟧.windows && ⟦2-char-id⟧.ctrlKey && ⟦2-char-id⟧.altKey || ⟦2-char-id⟧.mac && ⟦2-char-id⟧.altKey && !⟦2-char-id⟧.ctrlKey && !⟦2-char-id⟧.metaKey || !(⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.keyCode]) || ⟦2-char-id⟧ == ⟦2-char-id⟧ ? ⟦2-char-id⟧ && ⟦2-char-id⟧.shiftKey && ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧(⟦2-char-id⟧, TB, !0)]) && (⟦2-char-id⟧ = !0) : (⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧(⟦2-char-id⟧, TB, !0)]) || ⟦2-char-id⟧.shiftKey && (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.keyCode]) != ⟦2-char-id⟧ && ⟦2-char-id⟧ != ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧(⟦2-char-id⟧, TB, !1)])) && (⟦2-char-id⟧ = !0), !⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧._any) && (⟦2-char-id⟧ = !0)), ⟦2-char-id⟧ && (⟦2-char-id⟧ = !0), ⟦2-char-id⟧ && ⟦2-char-id⟧ && ⟦2-char-id⟧.stopPropagation(), ⟦2-char-id⟧ = null, OB
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
         this.className = ⟦2-char-id⟧, this.left = ⟦2-char-id⟧, this.top = ⟦2-char-id⟧, this.width = ⟦2-char-id⟧, this.height = ⟦2-char-id⟧
       }
       draw() {
         let ⟦2-char-id⟧ = document.createElement("div");
-        return ⟦2-char-id⟧.className = this.className, this.adjust(⟦2-char-id⟧), JJ
+        return ⟦2-char-id⟧.className = this.className, this.adjust(⟦2-char-id⟧), BB
       }
       update(⟦2-char-id⟧, ⟦2-char-id⟧) {
         return ⟦2-char-id⟧.className == this.className && (this.adjust(⟦2-char-id⟧), !0)
```

</details>

<details>
<summary>Hunk 461 · Change · +2 / -2</summary>

```diff
@@ -12048,14 +12048,14 @@
       ⟦2-char-id⟧(⟦2-char-id⟧) {
         return this.left == ⟦2-char-id⟧.left && this.top == ⟦2-char-id⟧.top && this.width == ⟦2-char-id⟧.width && this.height == ⟦2-char-id⟧.height && this.className == ⟦2-char-id⟧.className
       }
-      static forRange(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      static forRange(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         if (⟦2-char-id⟧.empty) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.coordsAtPos(⟦2-char-id⟧.head, ⟦2-char-id⟧.assoc || 1);
           if (!⟦2-char-id⟧) return [];
           let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
           return [new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.left - ⟦2-char-id⟧.left, ⟦2-char-id⟧.top - ⟦2-char-id⟧.top, null, ⟦2-char-id⟧.bottom - ⟦2-char-id⟧.top)]
         }
-        return function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+        return function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
           if (⟦2-char-id⟧.to <= ⟦2-char-id⟧.viewport.from || ⟦2-char-id⟧.from >= ⟦2-char-id⟧.viewport.to) return [];
           let ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧.from, ⟦2-char-id⟧.viewport.from),
             ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.to, ⟦2-char-id⟧.viewport.to),
```

</details>

<details>
<summary>Hunk 462 · Change · +10 / -10</summary>

```diff
@@ -12067,21 +12067,21 @@
             ⟦2-char-id⟧ = ⟦2-char-id⟧ && window.getComputedStyle(⟦2-char-id⟧),
             ⟦2-char-id⟧ = ⟦2-char-id⟧.left + (⟦2-char-id⟧ ? parseInt(⟦2-char-id⟧.paddingLeft) + Math.min(0, parseInt(⟦2-char-id⟧.textIndent)) : 0),
             ⟦2-char-id⟧ = ⟦2-char-id⟧.right - (⟦2-char-id⟧ ? parseInt(⟦2-char-id⟧.paddingRight) : 0),
-            ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, FJ, 1),
-            ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, UJ, -1),
-            ⟦2-char-id⟧ = ⟦2-char-id⟧.type == ⟦2-char-id⟧.Text ? sJ : null,
-            ⟦2-char-id⟧ = ⟦2-char-id⟧.type == ⟦2-char-id⟧.Text ? nJ : null;
-          ⟦2-char-id⟧ && (⟦2-char-id⟧.lineWrapping || ⟦2-char-id⟧.widgetLineBreaks) && (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, FJ, 1, ⟦2-char-id⟧));
-          ⟦2-char-id⟧ && (⟦2-char-id⟧.lineWrapping || ⟦2-char-id⟧.widgetLineBreaks) && (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, UJ, -1, ⟦2-char-id⟧));
+            ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, VB, 1),
+            ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, yB, -1),
+            ⟦2-char-id⟧ = ⟦2-char-id⟧.type == ⟦2-char-id⟧.Text ? OB : null,
+            ⟦2-char-id⟧ = ⟦2-char-id⟧.type == ⟦2-char-id⟧.Text ? DB : null;
+          ⟦2-char-id⟧ && (⟦2-char-id⟧.lineWrapping || ⟦2-char-id⟧.widgetLineBreaks) && (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, VB, 1, ⟦2-char-id⟧));
+          ⟦2-char-id⟧ && (⟦2-char-id⟧.lineWrapping || ⟦2-char-id⟧.widgetLineBreaks) && (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, yB, -1, ⟦2-char-id⟧));
           if (⟦2-char-id⟧ && ⟦2-char-id⟧ && ⟦2-char-id⟧.from == ⟦2-char-id⟧.from && ⟦2-char-id⟧.to == ⟦2-char-id⟧.to) return ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧.from, ⟦2-char-id⟧.to, ⟦2-char-id⟧));
           {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧.from, null, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, !1),
               ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧(null, ⟦2-char-id⟧.to, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, !0),
               ⟦2-char-id⟧ = [];
-            return (⟦2-char-id⟧ || ⟦2-char-id⟧).to < (⟦2-char-id⟧ || ⟦2-char-id⟧).from - (⟦2-char-id⟧ && ⟦2-char-id⟧ ? 1 : 0) || ⟦2-char-id⟧.widgetLineBreaks > 1 && ⟦2-char-id⟧.bottom + ⟦2-char-id⟧.defaultLineHeight / 2 < ⟦2-char-id⟧.top ? ⟦2-char-id⟧.push(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.bottom, DJ, ⟦2-char-id⟧.top)) : ⟦2-char-id⟧.bottom < ⟦2-char-id⟧.top && ⟦2-char-id⟧.elementAtHeight((⟦2-char-id⟧.bottom + ⟦2-char-id⟧.top) / 2).type == ⟦2-char-id⟧.Text && (⟦2-char-id⟧.bottom = ⟦2-char-id⟧.top = (⟦2-char-id⟧.bottom + ⟦2-char-id⟧.top) / 2), rJ(⟦2-char-id⟧).concat(⟦2-char-id⟧).concat(⟦2-char-id⟧(⟦2-char-id⟧))
-          }
-
-          function ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, FJ, ⟦2-char-id⟧) {
+            return (⟦2-char-id⟧ || ⟦2-char-id⟧).to < (⟦2-char-id⟧ || ⟦2-char-id⟧).from - (⟦2-char-id⟧ && ⟦2-char-id⟧ ? 1 : 0) || ⟦2-char-id⟧.widgetLineBreaks > 1 && ⟦2-char-id⟧.bottom + ⟦2-char-id⟧.defaultLineHeight / 2 < ⟦2-char-id⟧.top ? ⟦2-char-id⟧.push(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.bottom, LB, ⟦2-char-id⟧.top)) : ⟦2-char-id⟧.bottom < ⟦2-char-id⟧.top && ⟦2-char-id⟧.elementAtHeight((⟦2-char-id⟧.bottom + ⟦2-char-id⟧.top) / 2).type == ⟦2-char-id⟧.Text && (⟦2-char-id⟧.bottom = ⟦2-char-id⟧.top = (⟦2-char-id⟧.bottom + ⟦2-char-id⟧.top) / 2), vB(⟦2-char-id⟧).concat(⟦2-char-id⟧).concat(⟦2-char-id⟧(⟦2-char-id⟧))
+          }
+
+          function ⟦2-char-id⟧(⟦2-char-id⟧, dB, VB, ⟦2-char-id⟧) {
             return new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧.left, ⟦2-char-id⟧ - ⟦2-char-id⟧.top, Math.max(0, ⟦2-char-id⟧ - ⟦2-char-id⟧), ⟦2-char-id⟧ - ⟦2-char-id⟧)
           }
 
```

</details>

<details>
<summary>Hunk 463 · Change · +7 / -7</summary>

```diff
@@ -12091,23 +12091,23 @@
               bottom: ⟦2-char-id⟧,
               horizontal: ⟦2-char-id⟧
             } = ⟦2-char-id⟧, ⟦2-char-id⟧ = [];
-            for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧ += 2) ⟦2-char-id⟧.push(⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧], cJ, ⟦2-char-id⟧[⟦2-char-id⟧ + 1], ⟦2-char-id⟧));
+            for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧ += 2) ⟦2-char-id⟧.push(⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧], TB, ⟦2-char-id⟧[⟦2-char-id⟧ + 1], ⟦2-char-id⟧));
             return ⟦2-char-id⟧
           }
 
-          function ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧) {
+          function ⟦2-char-id⟧(⟦2-char-id⟧, dB, ⟦2-char-id⟧) {
             let ⟦2-char-id⟧ = 1⟦2-char-id⟧,
               ⟦2-char-id⟧ = -1⟦2-char-id⟧,
               ⟦2-char-id⟧ = [];
 
-            function ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, qJ, jJ, ⟦2-char-id⟧) {
+            function ⟦2-char-id⟧(⟦2-char-id⟧, dB, YB, gB, ⟦2-char-id⟧) {
               let ⟦2-char-id⟧ = ⟦2-char-id⟧.coordsAtPos(⟦2-char-id⟧, ⟦2-char-id⟧ == ⟦2-char-id⟧.to ? -2 : 2),
                 ⟦2-char-id⟧ = ⟦2-char-id⟧.coordsAtPos(⟦2-char-id⟧, ⟦2-char-id⟧ == ⟦2-char-id⟧.from ? 2 : -2);
-              ⟦2-char-id⟧ && ⟦2-char-id⟧ && (⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.top, ⟦2-char-id⟧.top, ⟦2-char-id⟧), ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧.bottom, ⟦2-char-id⟧.bottom, ⟦2-char-id⟧), ⟦2-char-id⟧ == ⟦2-char-id⟧.LTR ? ⟦2-char-id⟧.push(⟦2-char-id⟧ && ⟦2-char-id⟧ ? hJ : ⟦2-char-id⟧.left, ⟦2-char-id⟧ && ⟦2-char-id⟧ ? DJ : ⟦2-char-id⟧.right) : ⟦2-char-id⟧.push(!⟦2-char-id⟧ && ⟦2-char-id⟧ ? hJ : ⟦2-char-id⟧.left, !⟦2-char-id⟧ && ⟦2-char-id⟧ ? DJ : ⟦2-char-id⟧.right))
+              ⟦2-char-id⟧ && ⟦2-char-id⟧ && (⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.top, ⟦2-char-id⟧.top, ⟦2-char-id⟧), ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧.bottom, ⟦2-char-id⟧.bottom, ⟦2-char-id⟧), ⟦2-char-id⟧ == ⟦2-char-id⟧.LTR ? ⟦2-char-id⟧.push(⟦2-char-id⟧ && ⟦2-char-id⟧ ? kB : ⟦2-char-id⟧.left, ⟦2-char-id⟧ && ⟦2-char-id⟧ ? LB : ⟦2-char-id⟧.right) : ⟦2-char-id⟧.push(!⟦2-char-id⟧ && ⟦2-char-id⟧ ? kB : ⟦2-char-id⟧.left, !⟦2-char-id⟧ && ⟦2-char-id⟧ ? LB : ⟦2-char-id⟧.right))
             }
-            let ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧.from,
-              ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧.to;
-            for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.o5)
+            let ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧.from,
+              ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧.to;
+            for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.BBB)
               if (⟦2-char-id⟧.to > ⟦2-char-id⟧ && ⟦2-char-id⟧.from < ⟦2-char-id⟧)
                 for (let ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧.from, ⟦2-char-id⟧), ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.to, ⟦2-char-id⟧);;) {
                   let ⟦2-char-id⟧ = ⟦2-char-id⟧.state.doc.lineAt(⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 464 · Change · +1 / -1</summary>

```diff
@@ -12119,7 +12119,7 @@
                   }
                   if (⟦2-char-id⟧ = ⟦2-char-id⟧.to + 1, ⟦2-char-id⟧ >= ⟦2-char-id⟧) break
                 }
-            return 0 == ⟦2-char-id⟧.length && ⟦2-char-id⟧(⟦2-char-id⟧, null == ⟦2-char-id⟧, YJ, null == ⟦2-char-id⟧, ⟦2-char-id⟧.textDirection), {
+            return 0 == ⟦2-char-id⟧.length && ⟦2-char-id⟧(⟦2-char-id⟧, null == ⟦2-char-id⟧, oB, null == ⟦2-char-id⟧, ⟦2-char-id⟧.textDirection), {
               top: ⟦2-char-id⟧,
               bottom: ⟦2-char-id⟧,
               horizontal: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 465 · Change · +1 / -1</summary>

```diff
@@ -12134,7 +12134,7 @@
               horizontal: []
             }
           }
-        }(⟦2-char-id⟧, cJ, ⟦2-char-id⟧)
+        }(⟦2-char-id⟧, TB, ⟦2-char-id⟧)
       }
     }
 
```

</details>

<details>
<summary>Hunk 466 · Change · +1 / -1</summary>

```diff
@@ -12146,7 +12146,7 @@
       }
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.coordsAtPos(⟦2-char-id⟧, 2 * ⟦2-char-id⟧);
       if (!⟦2-char-id⟧) return ⟦2-char-id⟧;
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.dom.getBoundingClientRect(),
```

</details>

<details>
<summary>Hunk 467 · Change · +1 / -1</summary>

```diff
@@ -12159,7 +12159,7 @@
           x: ⟦2-char-id⟧.right - 1,
           y: ⟦2-char-id⟧
         });
-      return null == ⟦2-char-id⟧ || null == ⟦2-char-id⟧ ? FJ : {
+      return null == ⟦2-char-id⟧ || null == ⟦2-char-id⟧ ? VB : {
         from: Math.max(⟦2-char-id⟧.from, Math.min(⟦2-char-id⟧, ⟦2-char-id⟧)),
         to: Math.min(⟦2-char-id⟧.to, Math.max(⟦2-char-id⟧, ⟦2-char-id⟧))
       }
```

</details>

<details>
<summary>Hunk 468 · Change · +2 / -2</summary>

```diff
@@ -12191,12 +12191,12 @@
           scaleX: ⟦2-char-id⟧,
           scaleY: ⟦2-char-id⟧
         } = this.view;
-        ⟦2-char-id⟧ == this.scaleX && ⟦2-char-id⟧ == this.scaleY || (this.scaleX = ⟦2-char-id⟧, this.scaleY = ⟦2-char-id⟧, this.dom.style.transform = `scale(${1/JJ}, ${1/cJ})`)
+        ⟦2-char-id⟧ == this.scaleX && ⟦2-char-id⟧ == this.scaleY || (this.scaleX = ⟦2-char-id⟧, this.scaleY = ⟦2-char-id⟧, this.dom.style.transform = `scale(${1/BB}, ${1/TB})`)
       }
       draw(⟦2-char-id⟧) {
         if (⟦2-char-id⟧.length != this.drawn.length || ⟦2-char-id⟧.some(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
             return ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = this.drawn[⟦2-char-id⟧], !(⟦2-char-id⟧.constructor == ⟦2-char-id⟧.constructor && ⟦2-char-id⟧.eq(⟦2-char-id⟧));
-            var ⟦2-char-id⟧, FJ
+            var ⟦2-char-id⟧, VB
           }))) {
           let ⟦2-char-id⟧ = this.dom.firstChild,
             ⟦2-char-id⟧ = 0;
```

</details>

<details>
<summary>Hunk 469 · Change · +3 / -3</summary>

```diff
@@ -12212,13 +12212,13 @@
         this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
       }
     }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define();
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define();
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       return [⟦2-char-id⟧.define((⟦2-char-id⟧ => new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧))), ⟦2-char-id⟧.of(⟦2-char-id⟧)]
     }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define({
-      combine: ⟦2-char-id⟧ => (0, ⟦2-char-id⟧.S)(⟦2-char-id⟧, {
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define({
+      combine: ⟦2-char-id⟧ => (0, ⟦2-char-id⟧.P)(⟦2-char-id⟧, {
         cursorBlinkRate: 1200,
         drawRangeCursor: !0,
         iosSelectionHandles: !0
```

</details>

<details>
<summary>Hunk 470 · Change · +1 / -1</summary>

```diff
@@ -12230,7 +12230,7 @@
 
     function ⟦2-char-id⟧() {
       let ⟦2-char-id⟧ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-      return [⟦2-char-id⟧.of(⟦2-char-id⟧), oU, Je, ce, ⟦2-char-id⟧.of(!0)]
+      return [⟦2-char-id⟧.of(⟦2-char-id⟧), ey, Tp, dp, ⟦2-char-id⟧.of(!0)]
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 471 · Change · +3 / -3</summary>

```diff
@@ -12242,12 +12242,12 @@
         let {
           state: ⟦2-char-id⟧
         } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.facet(⟦2-char-id⟧), ⟦2-char-id⟧ = [];
-        for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.selection.ws) {
+        for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.selection.ek) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧ == ⟦2-char-id⟧.selection.main;
           if (⟦2-char-id⟧.empty || ⟦2-char-id⟧.drawRangeCursor && !(⟦2-char-id⟧ && ⟦2-char-id⟧.ios && ⟦2-char-id⟧.iosSelectionHandles)) {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧ ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
-              ⟦2-char-id⟧ = ⟦2-char-id⟧.empty ? eJ : ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧.head, ⟦2-char-id⟧.assoc);
-            for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.forRange(⟦2-char-id⟧, cJ, ⟦2-char-id⟧)) ⟦2-char-id⟧.push(⟦2-char-id⟧)
+              ⟦2-char-id⟧ = ⟦2-char-id⟧.empty ? pB : ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧.head, ⟦2-char-id⟧.assoc);
+            for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.forRange(⟦2-char-id⟧, TB, ⟦2-char-id⟧)) ⟦2-char-id⟧.push(⟦2-char-id⟧)
           }
         }
         return ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 472 · Change · +1 / -1</summary>

```diff
@@ -12258,7 +12258,7 @@
         return ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧.state, ⟦2-char-id⟧), ⟦2-char-id⟧.docChanged || ⟦2-char-id⟧.selectionSet || ⟦2-char-id⟧
       },
       mount(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        lU(⟦2-char-id⟧.state, ⟦2-char-id⟧)
+        Bp(⟦2-char-id⟧.state, ⟦2-char-id⟧)
       },
       class: "cm-cursorLayer"
     });
```

</details>

<details>
<summary>Hunk 473 · Change · +4 / -4</summary>

```diff
@@ -12272,21 +12272,21 @@
           let ⟦2-char-id⟧ = [],
             {
               main: ⟦2-char-id⟧,
-              ws: ⟦2-char-id⟧
+              ek: ⟦2-char-id⟧
             } = ⟦2-char-id⟧.state.selection;
           for (let ⟦2-char-id⟧ of ⟦2-char-id⟧)
             if (!⟦2-char-id⟧.empty)
               for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.forRange(⟦2-char-id⟧, "cm-selectionBackground", ⟦2-char-id⟧)) ⟦2-char-id⟧.push(⟦2-char-id⟧);
           if (⟦2-char-id⟧.ios && !⟦2-char-id⟧.empty && ⟦2-char-id⟧.state.facet(⟦2-char-id⟧).iosSelectionHandles) {
-            for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.forRange(⟦2-char-id⟧, "cm-selectionHandle cm-selectionHandle-start", ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧.from, 1))) ⟦2-char-id⟧.push(⟦2-char-id⟧);
-            for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.forRange(⟦2-char-id⟧, "cm-selectionHandle cm-selectionHandle-end", ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧.to, 1))) ⟦2-char-id⟧.push(⟦2-char-id⟧)
+            for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.forRange(⟦2-char-id⟧, "cm-selectionHandle cm-selectionHandle-start", ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧.from, 1))) ⟦2-char-id⟧.push(⟦2-char-id⟧);
+            for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.forRange(⟦2-char-id⟧, "cm-selectionHandle cm-selectionHandle-end", ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧.to, 1))) ⟦2-char-id⟧.push(⟦2-char-id⟧)
           }
           return ⟦2-char-id⟧
         },
         update: (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.docChanged || ⟦2-char-id⟧.selectionSet || ⟦2-char-id⟧.viewportChanged || ⟦2-char-id⟧(⟦2-char-id⟧),
         class: "cm-selectionLayer"
       }),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.t.highest(⟦2-char-id⟧.theme({
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.r.highest(⟦2-char-id⟧.theme({
         ".cm-line": {
           "& ::selection, &::selection": {
             backgroundColor: "transparent !important"
```

</details>

<details>
<summary>Hunk 474 · Change · +2 / -2</summary>

```diff
@@ -12303,10 +12303,10 @@
           }
         }
       })),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define({
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.x.define({
         map: (⟦2-char-id⟧, ⟦2-char-id⟧) => null == ⟦2-char-id⟧ ? null : ⟦2-char-id⟧.mapPos(⟦2-char-id⟧)
       }),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.E.define({
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define({
         create: () => null,
         update: (⟦2-char-id⟧, ⟦2-char-id⟧) => (null != ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.changes.mapPos(⟦2-char-id⟧)), ⟦2-char-id⟧.effects.reduce(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.is(⟦2-char-id⟧) ? ⟦2-char-id⟧.value : ⟦2-char-id⟧), ⟦2-char-id⟧))
       }),
```

</details>

<details>
<summary>Hunk 475 · Change · +1 / -1</summary>

```diff
@@ -12375,7 +12375,7 @@
       return [⟦2-char-id⟧, ⟦2-char-id⟧]
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
       ⟦2-char-id⟧.lastIndex = 0;
       for (let ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.iterRange(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧; !⟦2-char-id⟧.next().done; ⟦2-char-id⟧ += ⟦2-char-id⟧.value.length)
         if (!⟦2-char-id⟧.lineBreak)
```

</details>

<details>
<summary>Hunk 476 · Change · +5 / -5</summary>

```diff
@@ -12391,19 +12391,19 @@
           maxLength: ⟦2-char-id⟧ = 1⟦2-char-id⟧
         } = ⟦2-char-id⟧;
         if (!⟦2-char-id⟧.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
-        if (this.regexp = ⟦2-char-id⟧, ⟦2-char-id⟧) this.addMatch = (⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) => ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧ + ⟦2-char-id⟧[0].length, JJ, ⟦2-char-id⟧);
-        else if ("function" == typeof ⟦2-char-id⟧) this.addMatch = (⟦2-char-id⟧, cJ, FJ, ⟦2-char-id⟧) => {
-          let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧);
+        if (this.regexp = ⟦2-char-id⟧, ⟦2-char-id⟧) this.addMatch = (⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) => ⟦2-char-id⟧(⟦2-char-id⟧, dB, ⟦2-char-id⟧ + ⟦2-char-id⟧[0].length, BB, ⟦2-char-id⟧);
+        else if ("function" == typeof ⟦2-char-id⟧) this.addMatch = (⟦2-char-id⟧, TB, VB, ⟦2-char-id⟧) => {
+          let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧);
           ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧[0].length, ⟦2-char-id⟧)
         };
         else {
           if (!⟦2-char-id⟧) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
-          this.addMatch = (⟦2-char-id⟧, cJ, FJ, ⟦2-char-id⟧) => ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧[0].length, ⟦2-char-id⟧)
+          this.addMatch = (⟦2-char-id⟧, TB, VB, ⟦2-char-id⟧) => ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧[0].length, ⟦2-char-id⟧)
         }
         this.boundary = ⟦2-char-id⟧, this.maxLength = ⟦2-char-id⟧
       }
       createDeco(⟦2-char-id⟧) {
-        let ⟦2-char-id⟧ = new ⟦2-char-id⟧.u,
+        let ⟦2-char-id⟧ = new ⟦2-char-id⟧.t,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.add.bind(⟦2-char-id⟧);
         for (let {
             from: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 477 · Change · +8 / -8</summary>

```diff
@@ -12411,30 +12411,30 @@
           }
           of
           function(⟦2-char-id⟧, ⟦2-char-id⟧) {
-            let ⟦2-char-id⟧ = ⟦2-char-id⟧.o5;
+            let ⟦2-char-id⟧ = ⟦2-char-id⟧.BBB;
             if (1 == ⟦2-char-id⟧.length && ⟦2-char-id⟧[0].from == ⟦2-char-id⟧.viewport.from && ⟦2-char-id⟧[0].to == ⟦2-char-id⟧.viewport.to) return ⟦2-char-id⟧;
             let ⟦2-char-id⟧ = [];
             for (let {
                 from: ⟦2-char-id⟧,
                 to: ⟦2-char-id⟧
               }
-              of ⟦2-char-id⟧) ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧.state.doc.lineAt(⟦2-char-id⟧).from, ⟦2-char-id⟧ - ⟦2-char-id⟧), ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.state.doc.lineAt(⟦2-char-id⟧).to, ⟦2-char-id⟧ + ⟦2-char-id⟧), ⟦2-char-id⟧.length && ⟦2-char-id⟧[⟦2-char-id⟧.length - 1].to >= ⟦2-char-id⟧ ? ⟦2-char-id⟧[⟦2-char-id⟧.length - 1].to = eJ : ⟦2-char-id⟧.push({
+              of ⟦2-char-id⟧) ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧.state.doc.lineAt(⟦2-char-id⟧).from, ⟦2-char-id⟧ - ⟦2-char-id⟧), ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.state.doc.lineAt(⟦2-char-id⟧).to, ⟦2-char-id⟧ + ⟦2-char-id⟧), ⟦2-char-id⟧.length && ⟦2-char-id⟧[⟦2-char-id⟧.length - 1].to >= ⟦2-char-id⟧ ? ⟦2-char-id⟧[⟦2-char-id⟧.length - 1].to = pB : ⟦2-char-id⟧.push({
               from: ⟦2-char-id⟧,
               to: ⟦2-char-id⟧
             });
             return ⟦2-char-id⟧
-          }(⟦2-char-id⟧, this.maxLength)) ⟦2-char-id⟧(⟦2-char-id⟧.state.doc, this.regexp, FJ, UJ, ((⟦2-char-id⟧, ⟦2-char-id⟧) => this.addMatch(⟦2-char-id⟧, JJ, cJ, ⟦2-char-id⟧)));
+          }(⟦2-char-id⟧, this.maxLength)) ⟦2-char-id⟧(⟦2-char-id⟧.state.doc, this.regexp, VB, yB, ((⟦2-char-id⟧, ⟦2-char-id⟧) => this.addMatch(⟦2-char-id⟧, BB, TB, ⟦2-char-id⟧)));
         return ⟦2-char-id⟧.finish()
       }
       updateDeco(⟦2-char-id⟧, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = 1⟦2-char-id⟧,
           ⟦2-char-id⟧ = -1;
-        return ⟦2-char-id⟧.docChanged && ⟦2-char-id⟧.changes.iterChanges(((⟦2-char-id⟧, UJ, eJ, ⟦2-char-id⟧) => {
+        return ⟦2-char-id⟧.docChanged && ⟦2-char-id⟧.changes.iterChanges(((⟦2-char-id⟧, yB, pB, ⟦2-char-id⟧) => {
           ⟦2-char-id⟧ >= ⟦2-char-id⟧.view.viewport.from && ⟦2-char-id⟧ <= ⟦2-char-id⟧.view.viewport.to && (⟦2-char-id⟧ = Math.min(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, ⟦2-char-id⟧))
-        })), ⟦2-char-id⟧.viewportMoved || ⟦2-char-id⟧ - ⟦2-char-id⟧ > 1⟦2-char-id⟧ ? this.createDeco(⟦2-char-id⟧.view) : ⟦2-char-id⟧ > -1 ? this.updateRange(⟦2-char-id⟧.view, ⟦2-char-id⟧.map(⟦2-char-id⟧.changes), ZJ, ⟦2-char-id⟧) : ⟦2-char-id⟧
-      }
-      updateRange(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-        for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.o5) {
+        })), ⟦2-char-id⟧.viewportMoved || ⟦2-char-id⟧ - ⟦2-char-id⟧ > 1⟦2-char-id⟧ ? this.createDeco(⟦2-char-id⟧.view) : ⟦2-char-id⟧ > -1 ? this.updateRange(⟦2-char-id⟧.view, ⟦2-char-id⟧.map(⟦2-char-id⟧.changes), dB, ⟦2-char-id⟧) : ⟦2-char-id⟧
+      }
+      updateRange(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+        for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.BBB) {
           let ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧.from, ⟦2-char-id⟧),
             ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.to, ⟦2-char-id⟧);
           if (⟦2-char-id⟧ >= ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 478 · Change · +3 / -3</summary>

```diff
@@ -12454,11 +12454,11 @@
                 }
             }
             let ⟦2-char-id⟧, ⟦2-char-id⟧ = [],
-              ⟦2-char-id⟧ = (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => ⟦2-char-id⟧.push(⟦2-char-id⟧.range(⟦2-char-id⟧, ⟦2-char-id⟧));
+              ⟦2-char-id⟧ = (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => ⟦2-char-id⟧.push(⟦2-char-id⟧.range(⟦2-char-id⟧, ⟦2-char-id⟧));
             if (⟦2-char-id⟧ == ⟦2-char-id⟧)
               for (this.regexp.lastIndex = ⟦2-char-id⟧ - ⟦2-char-id⟧.from;
-                (⟦2-char-id⟧ = this.regexp.exec(⟦2-char-id⟧.text)) && ⟦2-char-id⟧.index < ⟦2-char-id⟧ - ⟦2-char-id⟧.from;) this.addMatch(⟦2-char-id⟧, JJ, ⟦2-char-id⟧.index + ⟦2-char-id⟧.from, ⟦2-char-id⟧);
-            else ⟦2-char-id⟧(⟦2-char-id⟧.state.doc, this.regexp, AJ, qJ, ((⟦2-char-id⟧, ⟦2-char-id⟧) => this.addMatch(⟦2-char-id⟧, JJ, cJ, ⟦2-char-id⟧)));
+                (⟦2-char-id⟧ = this.regexp.exec(⟦2-char-id⟧.text)) && ⟦2-char-id⟧.index < ⟦2-char-id⟧ - ⟦2-char-id⟧.from;) this.addMatch(⟦2-char-id⟧, BB, ⟦2-char-id⟧.index + ⟦2-char-id⟧.from, ⟦2-char-id⟧);
+            else ⟦2-char-id⟧(⟦2-char-id⟧.state.doc, this.regexp, JB, YB, ((⟦2-char-id⟧, ⟦2-char-id⟧) => this.addMatch(⟦2-char-id⟧, BB, TB, ⟦2-char-id⟧)));
             ⟦2-char-id⟧ = ⟦2-char-id⟧.update({
               filterFrom: ⟦2-char-id⟧,
               filterTo: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 479 · Change · +2 / -2</summary>

```diff
@@ -12496,9 +12496,9 @@
         65532: "object replacement"
       };
     let ⟦2-char-id⟧ = null;
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define({
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define({
       combine(⟦2-char-id⟧) {
-        let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.S)(⟦2-char-id⟧, {
+        let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.P)(⟦2-char-id⟧, {
           render: null,
           specialChars: ⟦2-char-id⟧,
           addSpecialChars: null
```

</details>

<details>
<summary>Hunk 480 · Change · +2 / -2</summary>

```diff
@@ -12507,10 +12507,10 @@
           var ⟦2-char-id⟧;
           if (null == ⟦2-char-id⟧ && "undefined" != typeof document && document.body) {
             let ⟦2-char-id⟧ = document.body.style;
-            ⟦2-char-id⟧ = null != (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.tabSize) && void 0 !== ⟦2-char-id⟧ ? JJ : ⟦2-char-id⟧.MozTabSize)
+            ⟦2-char-id⟧ = null != (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.tabSize) && void 0 !== ⟦2-char-id⟧ ? BB : ⟦2-char-id⟧.MozTabSize)
           }
           return ⟦2-char-id⟧ || !1
-        }()) && (⟦2-char-id⟧.specialChars = new RegExp("\t|" + ⟦2-char-id⟧.specialChars.source, ⟦2-char-id⟧)), ⟦2-char-id⟧.addSpecialChars && (⟦2-char-id⟧.specialChars = new RegExp(⟦2-char-id⟧.specialChars.source + "|" + ⟦2-char-id⟧.addSpecialChars.source, ⟦2-char-id⟧)), cJ
+        }()) && (⟦2-char-id⟧.specialChars = new RegExp("\t|" + ⟦2-char-id⟧.specialChars.source, ⟦2-char-id⟧)), ⟦2-char-id⟧.addSpecialChars && (⟦2-char-id⟧.specialChars = new RegExp(⟦2-char-id⟧.specialChars.source + "|" + ⟦2-char-id⟧.addSpecialChars.source, ⟦2-char-id⟧)), TB
       }
     });
 
```

</details>

<details>
<summary>Hunk 481 · Change · +4 / -4</summary>

```diff
@@ -12518,19 +12518,19 @@
       let ⟦2-char-id⟧ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
       return [⟦2-char-id⟧.of(⟦2-char-id⟧), ⟦2-char-id⟧ || (⟦2-char-id⟧ = ⟦2-char-id⟧.fromClass(class {
         constructor(⟦2-char-id⟧) {
-          this.view = ⟦2-char-id⟧, this.je = ⟦2-char-id⟧.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(⟦2-char-id⟧.state.facet(⟦2-char-id⟧)), this.je = this.decorator.createDeco(⟦2-char-id⟧)
+          this.view = ⟦2-char-id⟧, this.QB = ⟦2-char-id⟧.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(⟦2-char-id⟧.state.facet(⟦2-char-id⟧)), this.QB = this.decorator.createDeco(⟦2-char-id⟧)
         }
         makeDecorator(⟦2-char-id⟧) {
           return new ⟦2-char-id⟧({
             regexp: ⟦2-char-id⟧.specialChars,
-            decoration: (⟦2-char-id⟧, ZJ, ⟦2-char-id⟧) => {
+            decoration: (⟦2-char-id⟧, dB, ⟦2-char-id⟧) => {
               let {
                 doc: ⟦2-char-id⟧
-              } = ⟦2-char-id⟧.state, ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.L)(⟦2-char-id⟧[0], 0);
+              } = ⟦2-char-id⟧.state, ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.K)(⟦2-char-id⟧[0], 0);
               if (9 == ⟦2-char-id⟧) {
                 let ⟦2-char-id⟧ = ⟦2-char-id⟧.lineAt(⟦2-char-id⟧),
                   ⟦2-char-id⟧ = ⟦2-char-id⟧.state.tabSize,
-                  ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.U)(⟦2-char-id⟧.text, cJ, ⟦2-char-id⟧ - ⟦2-char-id⟧.from);
+                  ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.R)(⟦2-char-id⟧.text, TB, ⟦2-char-id⟧ - ⟦2-char-id⟧.from);
                 return ⟦2-char-id⟧.replace({
                   widget: new ⟦2-char-id⟧((⟦2-char-id⟧ - ⟦2-char-id⟧ % ⟦2-char-id⟧) * this.view.defaultCharacterWidth / this.view.scaleX)
                 })
```

</details>

<details>
<summary>Hunk 482 · Change · +2 / -2</summary>

```diff
@@ -12544,10 +12544,10 @@
         }
         update(⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.state.facet(⟦2-char-id⟧);
-          ⟦2-char-id⟧.startState.facet(⟦2-char-id⟧) != ⟦2-char-id⟧ ? (this.decorator = this.makeDecorator(⟦2-char-id⟧), this.je = this.decorator.createDeco(⟦2-char-id⟧.view)) : this.je = this.decorator.updateDeco(⟦2-char-id⟧, this.je)
+          ⟦2-char-id⟧.startState.facet(⟦2-char-id⟧) != ⟦2-char-id⟧ ? (this.decorator = this.makeDecorator(⟦2-char-id⟧), this.QB = this.decorator.createDeco(⟦2-char-id⟧.view)) : this.QB = this.decorator.updateDeco(⟦2-char-id⟧, this.QB)
         }
       }, {
-        je: ⟦2-char-id⟧ => ⟦2-char-id⟧.je
+        QB: ⟦2-char-id⟧ => ⟦2-char-id⟧.QB
       }))]
     }
     let ⟦2-char-id⟧ = null;
```

</details>

<details>
<summary>Hunk 483 · Change · +2 / -2</summary>

```diff
@@ -12563,10 +12563,10 @@
             return ⟦2-char-id⟧ >= 32 ? "\u2022" : 10 == ⟦2-char-id⟧ ? "\u2424" : String.fromCharCode(9216 + ⟦2-char-id⟧)
           }(this.code),
           ⟦2-char-id⟧ = ⟦2-char-id⟧.state.phrase("Control character") + " " + (⟦2-char-id⟧[this.code] || "0x" + this.code.toString(16)),
-          ⟦2-char-id⟧ = this.options.render && this.options.render(this.code, ZJ, ⟦2-char-id⟧);
+          ⟦2-char-id⟧ = this.options.render && this.options.render(this.code, dB, ⟦2-char-id⟧);
         if (⟦2-char-id⟧) return ⟦2-char-id⟧;
         let ⟦2-char-id⟧ = document.createElement("span");
-        return ⟦2-char-id⟧.textContent = ⟦2-char-id⟧, ⟦2-char-id⟧.title = ⟦2-char-id⟧, ⟦2-char-id⟧.setAttribute("aria-label", ⟦2-char-id⟧), ⟦2-char-id⟧.className = "cm-specialChar", UJ
+        return ⟦2-char-id⟧.textContent = ⟦2-char-id⟧, ⟦2-char-id⟧.title = ⟦2-char-id⟧, ⟦2-char-id⟧.setAttribute("aria-label", ⟦2-char-id⟧), ⟦2-char-id⟧.className = "cm-specialChar", yB
       }
       ignoreEvent() {
         return !1
```

</details>

<details>
<summary>Hunk 484 · Change · +1 / -1</summary>

```diff
@@ -12581,7 +12581,7 @@
       }
       toDOM() {
         let ⟦2-char-id⟧ = document.createElement("span");
-        return ⟦2-char-id⟧.textContent = "\t", ⟦2-char-id⟧.className = "cm-tab", ⟦2-char-id⟧.style.width = this.width + "px", JJ
+        return ⟦2-char-id⟧.textContent = "\t", ⟦2-char-id⟧.className = "cm-tab", ⟦2-char-id⟧.style.width = this.width + "px", BB
       }
       ignoreEvent() {
         return !1
```

</details>

<details>
<summary>Hunk 485 · Change · +4 / -4</summary>

```diff
@@ -12596,22 +12596,22 @@
       }),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.fromClass(class {
         constructor(⟦2-char-id⟧) {
-          this.je = this.getDeco(⟦2-char-id⟧)
+          this.QB = this.getDeco(⟦2-char-id⟧)
         }
         update(⟦2-char-id⟧) {
-          (⟦2-char-id⟧.docChanged || ⟦2-char-id⟧.selectionSet) && (this.je = this.getDeco(⟦2-char-id⟧.view))
+          (⟦2-char-id⟧.docChanged || ⟦2-char-id⟧.selectionSet) && (this.QB = this.getDeco(⟦2-char-id⟧.view))
         }
         getDeco(⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = -1,
             ⟦2-char-id⟧ = [];
-          for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.state.selection.ws) {
+          for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.state.selection.ek) {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧.lineBlockAt(⟦2-char-id⟧.head);
             ⟦2-char-id⟧.from > ⟦2-char-id⟧ && (⟦2-char-id⟧.push(⟦2-char-id⟧.range(⟦2-char-id⟧.from)), ⟦2-char-id⟧ = ⟦2-char-id⟧.from)
           }
           return ⟦2-char-id⟧.set(⟦2-char-id⟧)
         }
       }, {
-        je: ⟦2-char-id⟧ => ⟦2-char-id⟧.je
+        QB: ⟦2-char-id⟧ => ⟦2-char-id⟧.QB
       });
     class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 486 · Change · +1 / -1</summary>

```diff
@@ -12619,7 +12619,7 @@
       }
       toDOM(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = document.createElement("span");
-        return ⟦2-char-id⟧.className = "cm-placeholder", ⟦2-char-id⟧.style.pointerEvents = "none", ⟦2-char-id⟧.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(⟦2-char-id⟧) : this.content.cloneNode(!0)), ⟦2-char-id⟧.setAttribute("aria-hidden", "true"), cJ
+        return ⟦2-char-id⟧.className = "cm-placeholder", ⟦2-char-id⟧.style.pointerEvents = "none", ⟦2-char-id⟧.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(⟦2-char-id⟧) : this.content.cloneNode(!0)), ⟦2-char-id⟧.setAttribute("aria-hidden", "true"), TB
       }
       coordsAt(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.firstChild ? ⟦2-char-id⟧(⟦2-char-id⟧.firstChild) : [];
```

</details>

<details>
<summary>Hunk 487 · Change · +1 / -1</summary>

```diff
@@ -12651,7 +12651,7 @@
           return this.view.state.doc.length ? ⟦2-char-id⟧.none : this.placeholder
         }
       }, {
-        je: ⟦2-char-id⟧ => ⟦2-char-id⟧.je
+        QB: ⟦2-char-id⟧ => ⟦2-char-id⟧.QB
       });
       return "string" == typeof ⟦2-char-id⟧ ? [⟦2-char-id⟧, ⟦2-char-id⟧.contentAttributes.of({
         "aria-placeholder": ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 488 · Change · +1 / -1</summary>

```diff
@@ -12669,7 +12669,7 @@
         ⟦2-char-id⟧ = ⟦2-char-id⟧ > ⟦2-char-id⟧ ? -1 : ⟦2-char-id⟧ == ⟦2-char-id⟧.length ? function(⟦2-char-id⟧, ⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.coordsAtPos(⟦2-char-id⟧.viewport.from);
           return ⟦2-char-id⟧ ? Math.round(Math.abs((⟦2-char-id⟧.left - ⟦2-char-id⟧) / ⟦2-char-id⟧.defaultCharacterWidth)) : -1
-        }(⟦2-char-id⟧, ⟦2-char-id⟧.clientX) : (0, ⟦2-char-id⟧.U)(⟦2-char-id⟧.text, ⟦2-char-id⟧.state.tabSize, ⟦2-char-id⟧ - ⟦2-char-id⟧.from);
+        }(⟦2-char-id⟧, ⟦2-char-id⟧.clientX) : (0, ⟦2-char-id⟧.R)(⟦2-char-id⟧.text, ⟦2-char-id⟧.state.tabSize, ⟦2-char-id⟧ - ⟦2-char-id⟧.from);
       return {
         line: ⟦2-char-id⟧.number,
         col: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 489 · Change · +2 / -2</summary>

```diff
@@ -12692,10 +12692,10 @@
             }, ⟦2-char-id⟧ = ⟦2-char-id⟧.map(⟦2-char-id⟧.changes)
           }
         },
-        get(⟦2-char-id⟧, eJ, ⟦2-char-id⟧) {
+        get(⟦2-char-id⟧, pB, ⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
           if (!⟦2-char-id⟧) return ⟦2-char-id⟧;
-          let ⟦2-char-id⟧ = function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+          let ⟦2-char-id⟧ = function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
             let ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.line, ⟦2-char-id⟧.line),
               ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧.line, ⟦2-char-id⟧.line),
               ⟦2-char-id⟧ = [];
```

</details>

<details>
<summary>Hunk 490 · Change · +7 / -7</summary>

```diff
@@ -12704,24 +12704,24 @@
                 ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧.off, ⟦2-char-id⟧.off);
               for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ <= ⟦2-char-id⟧; ⟦2-char-id⟧++) {
                 let ⟦2-char-id⟧ = ⟦2-char-id⟧.doc.line(⟦2-char-id⟧);
-                ⟦2-char-id⟧.length <= ⟦2-char-id⟧ && ⟦2-char-id⟧.push(⟦2-char-id⟧.m.range(⟦2-char-id⟧.from + ⟦2-char-id⟧, ⟦2-char-id⟧.to + ⟦2-char-id⟧))
+                ⟦2-char-id⟧.length <= ⟦2-char-id⟧ && ⟦2-char-id⟧.push(⟦2-char-id⟧.h.range(⟦2-char-id⟧.from + ⟦2-char-id⟧, ⟦2-char-id⟧.to + ⟦2-char-id⟧))
               }
             } else {
               let ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.col, ⟦2-char-id⟧.col),
                 ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧.col, ⟦2-char-id⟧.col);
               for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ <= ⟦2-char-id⟧; ⟦2-char-id⟧++) {
                 let ⟦2-char-id⟧ = ⟦2-char-id⟧.doc.line(⟦2-char-id⟧),
-                  ⟦2-char-id⟧ = (0, ⟦2-char-id⟧._)(⟦2-char-id⟧.text, AJ, ⟦2-char-id⟧.tabSize, !0);
-                if (⟦2-char-id⟧ < 0) ⟦2-char-id⟧.push(⟦2-char-id⟧.m.cursor(⟦2-char-id⟧.to));
+                  ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.U)(⟦2-char-id⟧.text, JB, ⟦2-char-id⟧.tabSize, !0);
+                if (⟦2-char-id⟧ < 0) ⟦2-char-id⟧.push(⟦2-char-id⟧.h.cursor(⟦2-char-id⟧.to));
                 else {
-                  let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧._)(⟦2-char-id⟧.text, qJ, ⟦2-char-id⟧.tabSize);
-                  ⟦2-char-id⟧.push(⟦2-char-id⟧.m.range(⟦2-char-id⟧.from + ⟦2-char-id⟧, ⟦2-char-id⟧.from + ⟦2-char-id⟧))
+                  let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.U)(⟦2-char-id⟧.text, YB, ⟦2-char-id⟧.tabSize);
+                  ⟦2-char-id⟧.push(⟦2-char-id⟧.h.range(⟦2-char-id⟧.from + ⟦2-char-id⟧, ⟦2-char-id⟧.from + ⟦2-char-id⟧))
                 }
               }
             }
             return ⟦2-char-id⟧
-          }(⟦2-char-id⟧.state, ZJ, ⟦2-char-id⟧);
-          return ⟦2-char-id⟧.length ? ⟦2-char-id⟧ ? ⟦2-char-id⟧.m.create(⟦2-char-id⟧.concat(⟦2-char-id⟧.ws)) : ⟦2-char-id⟧.m.create(⟦2-char-id⟧) : ⟦2-char-id⟧
+          }(⟦2-char-id⟧.state, dB, ⟦2-char-id⟧);
+          return ⟦2-char-id⟧.length ? ⟦2-char-id⟧ ? ⟦2-char-id⟧.h.create(⟦2-char-id⟧.concat(⟦2-char-id⟧.ek)) : ⟦2-char-id⟧.h.create(⟦2-char-id⟧) : ⟦2-char-id⟧
         }
       } : null
     }
```

</details>

<details>
<summary>Hunk 491 · Change · +2 / -2</summary>

```diff
@@ -12765,12 +12765,12 @@
         });
       return [⟦2-char-id⟧, ⟦2-char-id⟧.contentAttributes.of((⟦2-char-id⟧ => {
         var ⟦2-char-id⟧;
-        return (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.plugin(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.isDown) ? Ie : null
+        return (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.plugin(⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.isDown) ? Fp : null
       }))]
     }
     const ⟦2-char-id⟧ = "-10000px";
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         this.facet = ⟦2-char-id⟧, this.createTooltipView = ⟦2-char-id⟧, this.removeTooltipView = ⟦2-char-id⟧, this.input = ⟦2-char-id⟧.state.facet(⟦2-char-id⟧), this.tooltips = this.input.filter((⟦2-char-id⟧ => ⟦2-char-id⟧));
         let ⟦2-char-id⟧ = null;
         this.tooltipViews = this.tooltips.map((⟦2-char-id⟧ => ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)))
```

</details>

<details>
<summary>Hunk 492 · Change · +2 / -2</summary>

```diff
@@ -12814,9 +12814,9 @@
         right: ⟦2-char-id⟧.clientWidth
       }
     }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define({
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define({
         combine: ⟦2-char-id⟧ => {
-          var ⟦2-char-id⟧, ZJ, ⟦2-char-id⟧;
+          var ⟦2-char-id⟧, dB, ⟦2-char-id⟧;
           return {
             position: ⟦2-char-id⟧.ios ? "absolute" : (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.position))) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.position) || "fixed",
             parent: (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.find((⟦2-char-id⟧ => ⟦2-char-id⟧.parent))) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.parent) || null,
```

</details>

<details>
<summary>Hunk 493 · Change · +1 / -1</summary>

```diff
@@ -12833,7 +12833,7 @@
             read: this.readMeasure.bind(this),
             write: this.writeMeasure.bind(this),
             key: this
-          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new ⟦2-char-id⟧(⟦2-char-id⟧, ze, ((⟦2-char-id⟧, ⟦2-char-id⟧) => this.createTooltip(⟦2-char-id⟧, ⟦2-char-id⟧)), (⟦2-char-id⟧ => {
+          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new ⟦2-char-id⟧(⟦2-char-id⟧, Xp, ((⟦2-char-id⟧, ⟦2-char-id⟧) => this.createTooltip(⟦2-char-id⟧, ⟦2-char-id⟧)), (⟦2-char-id⟧ => {
             this.resizeObserver && this.resizeObserver.unobserve(⟦2-char-id⟧.dom), ⟦2-char-id⟧.dom.remove()
           })), this.above = this.manager.tooltips.map((⟦2-char-id⟧ => !!⟦2-char-id⟧.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((⟦2-char-id⟧ => {
             Date.now() > this.lastTransaction - 50 && ⟦2-char-id⟧.length > 0 && ⟦2-char-id⟧[⟦2-char-id⟧.length - 1].intersectionRatio < 1 && this.measureSoon()
```

</details>

<details>
<summary>Hunk 494 · Change · +2 / -2</summary>

```diff
@@ -12880,10 +12880,10 @@
             let ⟦2-char-id⟧ = document.createElement("div");
             ⟦2-char-id⟧.className = "cm-tooltip-arrow", ⟦2-char-id⟧.dom.appendChild(⟦2-char-id⟧)
           }
-          return ⟦2-char-id⟧.dom.style.position = this.position, ⟦2-char-id⟧.dom.style.top = ⟦2-char-id⟧, ⟦2-char-id⟧.dom.style.left = "0px", this.container.insertBefore(⟦2-char-id⟧.dom, ⟦2-char-id⟧), ⟦2-char-id⟧.mount && ⟦2-char-id⟧.mount(this.view), this.resizeObserver && this.resizeObserver.observe(⟦2-char-id⟧.dom), ZJ
+          return ⟦2-char-id⟧.dom.style.position = this.position, ⟦2-char-id⟧.dom.style.top = ⟦2-char-id⟧, ⟦2-char-id⟧.dom.style.left = "0px", this.container.insertBefore(⟦2-char-id⟧.dom, ⟦2-char-id⟧), ⟦2-char-id⟧.mount && ⟦2-char-id⟧.mount(this.view), this.resizeObserver && this.resizeObserver.observe(⟦2-char-id⟧.dom), dB
         }
         destroy() {
-          var ⟦2-char-id⟧, cJ, ⟦2-char-id⟧;
+          var ⟦2-char-id⟧, TB, ⟦2-char-id⟧;
           this.view.win.removeEventListener("resize", this.measureSoon);
           for (let ⟦2-char-id⟧ of this.manager.tooltipViews) ⟦2-char-id⟧.dom.remove(), null === (⟦2-char-id⟧ = ⟦2-char-id⟧.destroy) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.call(⟦2-char-id⟧);
           this.parent && this.container.remove(), null === (⟦2-char-id⟧ = this.resizeObserver) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.disconnect(), null === (⟦2-char-id⟧ = this.intersectionObserver) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧.disconnect(), clearTimeout(this.measureTimeout)
```

</details>

<details>
<summary>Hunk 495 · Change · +1 / -1</summary>

```diff
@@ -12962,7 +12962,7 @@
             let ⟦2-char-id⟧ = ⟦2-char-id⟧.arrow ? ⟦2-char-id⟧.dom.querySelector(".cm-tooltip-arrow") : null,
               ⟦2-char-id⟧ = ⟦2-char-id⟧ ? 7 : 0,
               ⟦2-char-id⟧ = ⟦2-char-id⟧.right - ⟦2-char-id⟧.left,
-              ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧.bottom - ⟦2-char-id⟧.top,
+              ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧.bottom - ⟦2-char-id⟧.top,
               ⟦2-char-id⟧ = ⟦2-char-id⟧.offset || ⟦2-char-id⟧,
               ⟦2-char-id⟧ = this.view.textDirection == ⟦2-char-id⟧.LTR,
               ⟦2-char-id⟧ = ⟦2-char-id⟧.width > ⟦2-char-id⟧.right - ⟦2-char-id⟧.left ? ⟦2-char-id⟧ ? ⟦2-char-id⟧.left : ⟦2-char-id⟧.right - ⟦2-char-id⟧.width : ⟦2-char-id⟧ ? Math.max(⟦2-char-id⟧.left, Math.min(⟦2-char-id⟧.left - (⟦2-char-id⟧ ? 14 : 0) + ⟦2-char-id⟧.x, ⟦2-char-id⟧.right - ⟦2-char-id⟧)) : Math.min(Math.max(⟦2-char-id⟧.left, ⟦2-char-id⟧.left - ⟦2-char-id⟧ + (⟦2-char-id⟧ ? 14 : 0) - ⟦2-char-id⟧.x), ⟦2-char-id⟧.right - ⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 496 · Change · +2 / -2</summary>

```diff
@@ -12979,8 +12979,8 @@
             let ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.top - ⟦2-char-id⟧ - ⟦2-char-id⟧ - ⟦2-char-id⟧.y : ⟦2-char-id⟧.bottom + ⟦2-char-id⟧ + ⟦2-char-id⟧.y,
               ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧;
             if (!0 !== ⟦2-char-id⟧.overlap)
-              for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.left < ⟦2-char-id⟧ && ⟦2-char-id⟧.right > ⟦2-char-id⟧ && ⟦2-char-id⟧.top < ⟦2-char-id⟧ + ⟦2-char-id⟧ && ⟦2-char-id⟧.bottom > ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.top - ⟦2-char-id⟧ - 2 - nJ : ⟦2-char-id⟧.bottom + ⟦2-char-id⟧ + 2);
-            if ("absolute" == this.position ? (⟦2-char-id⟧.style.top = (⟦2-char-id⟧ - ⟦2-char-id⟧.parent.top) / ⟦2-char-id⟧ + "px", ke(⟦2-char-id⟧, (⟦2-char-id⟧ - ⟦2-char-id⟧.parent.left) / ⟦2-char-id⟧)) : (⟦2-char-id⟧.style.top = ⟦2-char-id⟧ / ⟦2-char-id⟧ + "px", ke(⟦2-char-id⟧, ⟦2-char-id⟧ / ⟦2-char-id⟧)), ⟦2-char-id⟧) {
+              for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.left < ⟦2-char-id⟧ && ⟦2-char-id⟧.right > ⟦2-char-id⟧ && ⟦2-char-id⟧.top < ⟦2-char-id⟧ + ⟦2-char-id⟧ && ⟦2-char-id⟧.bottom > ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.top - ⟦2-char-id⟧ - 2 - DB : ⟦2-char-id⟧.bottom + ⟦2-char-id⟧ + 2);
+            if ("absolute" == this.position ? (⟦2-char-id⟧.style.top = (⟦2-char-id⟧ - ⟦2-char-id⟧.parent.top) / ⟦2-char-id⟧ + "px", Rp(⟦2-char-id⟧, (⟦2-char-id⟧ - ⟦2-char-id⟧.parent.left) / ⟦2-char-id⟧)) : (⟦2-char-id⟧.style.top = ⟦2-char-id⟧ / ⟦2-char-id⟧ + "px", Rp(⟦2-char-id⟧, ⟦2-char-id⟧ / ⟦2-char-id⟧)), ⟦2-char-id⟧) {
               let ⟦2-char-id⟧ = ⟦2-char-id⟧.left + (⟦2-char-id⟧ ? ⟦2-char-id⟧.x : -⟦2-char-id⟧.x) - (⟦2-char-id⟧ + 14 - 7);
               ⟦2-char-id⟧.style.left = ⟦2-char-id⟧ / ⟦2-char-id⟧ + "px"
             }!0 !== ⟦2-char-id⟧.overlap && ⟦2-char-id⟧.push({
```

</details>

<details>
<summary>Hunk 497 · Change · +2 / -2</summary>

```diff
@@ -13073,10 +13073,10 @@
         x: 0,
         y: 0
       },
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define({
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define({
         enables: [⟦2-char-id⟧, ⟦2-char-id⟧]
       }),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define({
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define({
         combine: ⟦2-char-id⟧ => ⟦2-char-id⟧.reduce(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.concat(⟦2-char-id⟧)), [])
       });
     class ⟦2-char-id⟧ {
```

</details>

<details>
<summary>Hunk 498 · Change · +2 / -2</summary>

```diff
@@ -13084,11 +13084,11 @@
         return new ⟦2-char-id⟧(⟦2-char-id⟧)
       }
       constructor(⟦2-char-id⟧) {
-        this.view = ⟦2-char-id⟧, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new ⟦2-char-id⟧(⟦2-char-id⟧, Ne, ((⟦2-char-id⟧, ⟦2-char-id⟧) => this.createHostedView(⟦2-char-id⟧, ⟦2-char-id⟧)), (⟦2-char-id⟧ => ⟦2-char-id⟧.dom.remove()))
+        this.view = ⟦2-char-id⟧, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new ⟦2-char-id⟧(⟦2-char-id⟧, Wp, ((⟦2-char-id⟧, ⟦2-char-id⟧) => this.createHostedView(⟦2-char-id⟧, ⟦2-char-id⟧)), (⟦2-char-id⟧ => ⟦2-char-id⟧.dom.remove()))
       }
       createHostedView(⟦2-char-id⟧, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.create(this.view);
-        return ⟦2-char-id⟧.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(⟦2-char-id⟧.dom, ⟦2-char-id⟧ ? ⟦2-char-id⟧.dom.nextSibling : this.dom.firstChild), this.mounted && ⟦2-char-id⟧.mount && ⟦2-char-id⟧.mount(this.view), ZJ
+        return ⟦2-char-id⟧.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(⟦2-char-id⟧.dom, ⟦2-char-id⟧ ? ⟦2-char-id⟧.dom.nextSibling : this.dom.firstChild), this.mounted && ⟦2-char-id⟧.mount && ⟦2-char-id⟧.mount(this.view), dB
       }
       mount(⟦2-char-id⟧) {
         for (let ⟦2-char-id⟧ of this.manager.tooltipViews) ⟦2-char-id⟧.mount && ⟦2-char-id⟧.mount(⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 499 · Change · +3 / -3</summary>

```diff
@@ -13130,10 +13130,10 @@
     const ⟦2-char-id⟧ = ⟦2-char-id⟧.compute([⟦2-char-id⟧], (⟦2-char-id⟧ => {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.facet(⟦2-char-id⟧);
       return 0 === ⟦2-char-id⟧.length ? null : {
-        pos: Math.min(...cJ.map((⟦2-char-id⟧ => ⟦2-char-id⟧.pos))),
-        end: Math.max(...cJ.map((⟦2-char-id⟧ => {
+        pos: Math.min(...TB.map((⟦2-char-id⟧ => ⟦2-char-id⟧.pos))),
+        end: Math.max(...TB.map((⟦2-char-id⟧ => {
           var ⟦2-char-id⟧;
-          return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.end) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧.pos
+          return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.end) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧.pos
         }))),
         create: ⟦2-char-id⟧.create,
         above: ⟦2-char-id⟧[0].above,
```

</details>

<details>
<summary>Hunk 500 · Change · +1 / -1</summary>

```diff
@@ -13141,7 +13141,7 @@
       }
     }));
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
         this.view = ⟦2-char-id⟧, this.source = ⟦2-char-id⟧, this.field = ⟦2-char-id⟧, this.setHover = ⟦2-char-id⟧, this.hoverTime = ⟦2-char-id⟧, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
           x: 0,
           y: 0,
```

</details>

<details>
<summary>Hunk 501 · Change · +6 / -6</summary>

```diff
@@ -13175,20 +13175,20 @@
           if (!⟦2-char-id⟧ || ⟦2-char-id⟧.y < ⟦2-char-id⟧.top || ⟦2-char-id⟧.y > ⟦2-char-id⟧.bottom || ⟦2-char-id⟧.x < ⟦2-char-id⟧.left - ⟦2-char-id⟧.defaultCharacterWidth || ⟦2-char-id⟧.x > ⟦2-char-id⟧.right + ⟦2-char-id⟧.defaultCharacterWidth) return;
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.bidiSpans(⟦2-char-id⟧.state.doc.lineAt(⟦2-char-id⟧)).find((⟦2-char-id⟧ => ⟦2-char-id⟧.from <= ⟦2-char-id⟧ && ⟦2-char-id⟧.to >= ⟦2-char-id⟧)),
             ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧.dir == ⟦2-char-id⟧.RTL ? -1 : 1;
-          ⟦2-char-id⟧ = ⟦2-char-id⟧.x < ⟦2-char-id⟧.left ? -XJ : ⟦2-char-id⟧
-        }
-        let ⟦2-char-id⟧ = this.source(⟦2-char-id⟧, FJ, ⟦2-char-id⟧);
+          ⟦2-char-id⟧ = ⟦2-char-id⟧.x < ⟦2-char-id⟧.left ? -lB : ⟦2-char-id⟧
+        }
+        let ⟦2-char-id⟧ = this.source(⟦2-char-id⟧, VB, ⟦2-char-id⟧);
         if (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.then) {
           let ⟦2-char-id⟧ = this.pending = {
             pos: ⟦2-char-id⟧
           };
           ⟦2-char-id⟧.then((⟦2-char-id⟧ => {
             this.pending == ⟦2-char-id⟧ && (this.pending = null, !⟦2-char-id⟧ || Array.isArray(⟦2-char-id⟧) && !⟦2-char-id⟧.length || ⟦2-char-id⟧.dispatch({
-              effects: this.setHover.of(Array.isArray(⟦2-char-id⟧) ? ZJ : [⟦2-char-id⟧])
+              effects: this.setHover.of(Array.isArray(⟦2-char-id⟧) ? dB : [⟦2-char-id⟧])
             }))
-          }), (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧.state, cJ, "hover tooltip")))
+          }), (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧.state, TB, "hover tooltip")))
         } else !⟦2-char-id⟧ || Array.isArray(⟦2-char-id⟧) && !⟦2-char-id⟧.length || ⟦2-char-id⟧.dispatch({
-          effects: this.setHover.of(Array.isArray(⟦2-char-id⟧) ? eJ : [⟦2-char-id⟧])
+          effects: this.setHover.of(Array.isArray(⟦2-char-id⟧) ? pB : [⟦2-char-id⟧])
         })
       }
       get tooltip() {
```

</details>

<details>
<summary>Hunk 502 · Change · +2 / -2</summary>

```diff
@@ -13223,8 +13223,8 @@
           }(⟦2-char-id⟧.dom, ⟦2-char-id⟧) || this.pending) {
           let {
             pos: ⟦2-char-id⟧
-          } = ⟦2-char-id⟧[0] || this.pending, ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧[0]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.end) && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧;
-          (⟦2-char-id⟧ == ⟦2-char-id⟧ ? this.view.posAtCoords(this.lastMove) == UJ : function(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+          } = ⟦2-char-id⟧[0] || this.pending, ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧[0]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.end) && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧;
+          (⟦2-char-id⟧ == ⟦2-char-id⟧ ? this.view.posAtCoords(this.lastMove) == yB : function(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧.scrollDOM.getBoundingClientRect(),
               ⟦2-char-id⟧ = ⟦2-char-id⟧.documentTop + ⟦2-char-id⟧.documentPadding.top + ⟦2-char-id⟧.contentHeight;
             if (⟦2-char-id⟧.left > ⟦2-char-id⟧ || ⟦2-char-id⟧.right < ⟦2-char-id⟧ || ⟦2-char-id⟧.top > ⟦2-char-id⟧ || Math.min(⟦2-char-id⟧.bottom, ⟦2-char-id⟧) < ⟦2-char-id⟧) return !1;
```

</details>

<details>
<summary>Hunk 503 · Change · +1 / -1</summary>

```diff
@@ -13233,7 +13233,7 @@
               y: ⟦2-char-id⟧
             }, !1);
             return ⟦2-char-id⟧ >= ⟦2-char-id⟧ && ⟦2-char-id⟧ <= ⟦2-char-id⟧
-          }(this.view, UJ, eJ, ⟦2-char-id⟧.clientX, ⟦2-char-id⟧.clientY)) || (this.view.dispatch({
+          }(this.view, yB, pB, ⟦2-char-id⟧.clientX, ⟦2-char-id⟧.clientY)) || (this.view.dispatch({
             effects: this.setHover.of([])
           }), this.pending = null)
         }
```

</details>

<details>
<summary>Hunk 504 · Change · +3 / -3</summary>

```diff
@@ -13268,14 +13268,14 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
-        ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define(),
-        ⟦2-char-id⟧ = ⟦2-char-id⟧.E.define({
+        ⟦2-char-id⟧ = ⟦2-char-id⟧.x.define(),
+        ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define({
           create: () => [],
           update(⟦2-char-id⟧, ⟦2-char-id⟧) {
             if (⟦2-char-id⟧.length && (⟦2-char-id⟧.hideOnChange && (⟦2-char-id⟧.docChanged || ⟦2-char-id⟧.selection) ? ⟦2-char-id⟧ = [] : ⟦2-char-id⟧.hideOn && (⟦2-char-id⟧ = ⟦2-char-id⟧.filter((⟦2-char-id⟧ => !⟦2-char-id⟧.hideOn(⟦2-char-id⟧, ⟦2-char-id⟧)))), ⟦2-char-id⟧.docChanged)) {
               let ⟦2-char-id⟧ = [];
               for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) {
-                let ⟦2-char-id⟧ = ⟦2-char-id⟧.changes.mapPos(⟦2-char-id⟧.pos, -1, ⟦2-char-id⟧.r.TrackDel);
+                let ⟦2-char-id⟧ = ⟦2-char-id⟧.changes.mapPos(⟦2-char-id⟧.pos, -1, ⟦2-char-id⟧.o.TrackDel);
                 if (null != ⟦2-char-id⟧) {
                   let ⟦2-char-id⟧ = Object.assign(Object.create(null), ⟦2-char-id⟧);
                   ⟦2-char-id⟧.pos = ⟦2-char-id⟧, null != ⟦2-char-id⟧.end && (⟦2-char-id⟧.end = ⟦2-char-id⟧.changes.mapPos(⟦2-char-id⟧.end)), ⟦2-char-id⟧.push(⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 505 · Change · +1 / -1</summary>

```diff
@@ -13290,7 +13290,7 @@
         });
       return {
         active: ⟦2-char-id⟧,
-        extension: [⟦2-char-id⟧, ⟦2-char-id⟧.define((⟦2-char-id⟧ => new ⟦2-char-id⟧(⟦2-char-id⟧, JJ, UJ, ZJ, ⟦2-char-id⟧.hoverTime || 300))), ⟦2-char-id⟧]
+        extension: [⟦2-char-id⟧, ⟦2-char-id⟧.define((⟦2-char-id⟧ => new ⟦2-char-id⟧(⟦2-char-id⟧, BB, yB, dB, ⟦2-char-id⟧.hoverTime || 300))), ⟦2-char-id⟧]
       }
     }
 
```

</details>

<details>
<summary>Hunk 506 · Change · +2 / -2</summary>

```diff
@@ -13300,8 +13300,8 @@
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.manager.tooltips.indexOf(⟦2-char-id⟧);
       return ⟦2-char-id⟧ < 0 ? null : ⟦2-char-id⟧.manager.tooltipViews[⟦2-char-id⟧]
     }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define();
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define({
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.x.define();
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define({
       combine(⟦2-char-id⟧) {
         let ⟦2-char-id⟧, ⟦2-char-id⟧;
         for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧ = ⟦2-char-id⟧ || ⟦2-char-id⟧.topContainer, ⟦2-char-id⟧ = ⟦2-char-id⟧ || ⟦2-char-id⟧.bottomContainer;
```

</details>

<details>
<summary>Hunk 507 · Change · +1 / -1</summary>

```diff
@@ -13336,7 +13336,7 @@
             ⟦2-char-id⟧ = [];
           for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) {
             let ⟦2-char-id⟧, ⟦2-char-id⟧ = this.specs.indexOf(⟦2-char-id⟧);
-            ⟦2-char-id⟧ < 0 ? (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.view), ⟦2-char-id⟧.push(⟦2-char-id⟧)) : (⟦2-char-id⟧ = this.panels[⟦2-char-id⟧], ⟦2-char-id⟧.update && ⟦2-char-id⟧.update(⟦2-char-id⟧)), ⟦2-char-id⟧.push(⟦2-char-id⟧), (⟦2-char-id⟧.top ? UJ : ⟦2-char-id⟧).push(⟦2-char-id⟧)
+            ⟦2-char-id⟧ < 0 ? (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.view), ⟦2-char-id⟧.push(⟦2-char-id⟧)) : (⟦2-char-id⟧ = this.panels[⟦2-char-id⟧], ⟦2-char-id⟧.update && ⟦2-char-id⟧.update(⟦2-char-id⟧)), ⟦2-char-id⟧.push(⟦2-char-id⟧), (⟦2-char-id⟧.top ? yB : ⟦2-char-id⟧).push(⟦2-char-id⟧)
           }
           this.specs = ⟦2-char-id⟧, this.panels = ⟦2-char-id⟧, this.top.sync(⟦2-char-id⟧), this.bottom.sync(⟦2-char-id⟧);
           for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.dom.classList.add("cm-panel"), ⟦2-char-id⟧.mount && ⟦2-char-id⟧.mount()
```

</details>

<details>
<summary>Hunk 508 · Change · +1 / -1</summary>

```diff
@@ -13356,7 +13356,7 @@
       }))
     });
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         this.view = ⟦2-char-id⟧, this.top = ⟦2-char-id⟧, this.container = ⟦2-char-id⟧, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
       }
       sync(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 509 · Change · +8 / -8</summary>

```diff
@@ -13391,22 +13391,22 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.nextSibling;
-      return ⟦2-char-id⟧.remove(), cJ
-    }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define({
+      return ⟦2-char-id⟧.remove(), TB
+    }
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define({
       enables: ⟦2-char-id⟧
     });
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧, ⟦2-char-id⟧ = new Promise((⟦2-char-id⟧ => ⟦2-char-id⟧ = ⟦2-char-id⟧)),
-        ⟦2-char-id⟧ = ⟦2-char-id⟧ => function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+        ⟦2-char-id⟧ = ⟦2-char-id⟧ => function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.content ? ⟦2-char-id⟧.content(⟦2-char-id⟧, (() => ⟦2-char-id⟧(null))) : null;
           if (!⟦2-char-id⟧) {
-            if (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)("form"), ⟦2-char-id⟧.input) {
-              let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)("input", ⟦2-char-id⟧.input);
-              /^(text|password|number|email|tel|url)$/.test(⟦2-char-id⟧.type) && ⟦2-char-id⟧.classList.add("cm-textfield"), ⟦2-char-id⟧.name || (⟦2-char-id⟧.name = "input"), ⟦2-char-id⟧.appendChild((0, ⟦2-char-id⟧.d)("label", (⟦2-char-id⟧.label || "") + ": ", ⟦2-char-id⟧))
+            if (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)("form"), ⟦2-char-id⟧.input) {
+              let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)("input", ⟦2-char-id⟧.input);
+              /^(text|password|number|email|tel|url)$/.test(⟦2-char-id⟧.type) && ⟦2-char-id⟧.classList.add("cm-textfield"), ⟦2-char-id⟧.name || (⟦2-char-id⟧.name = "input"), ⟦2-char-id⟧.appendChild((0, ⟦2-char-id⟧.e)("label", (⟦2-char-id⟧.label || "") + ": ", ⟦2-char-id⟧))
             } else ⟦2-char-id⟧.appendChild(document.createTextNode(⟦2-char-id⟧.label || ""));
-            ⟦2-char-id⟧.appendChild(document.createTextNode(" ")), ⟦2-char-id⟧.appendChild((0, ⟦2-char-id⟧.d)("button", {
+            ⟦2-char-id⟧.appendChild(document.createTextNode(" ")), ⟦2-char-id⟧.appendChild((0, ⟦2-char-id⟧.e)("button", {
               class: "cm-button",
               type: "submit"
             }, ⟦2-char-id⟧.submitLabel || "OK"))
```

</details>

<details>
<summary>Hunk 510 · Change · +3 / -3</summary>

```diff
@@ -13415,12 +13415,12 @@
           for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
             ⟦2-char-id⟧.addEventListener("keydown", (⟦2-char-id⟧ => {
-              27 == ⟦2-char-id⟧.keyCode ? (⟦2-char-id⟧.preventDefault(), XJ(null)) : 13 == ⟦2-char-id⟧.keyCode && (⟦2-char-id⟧.preventDefault(), XJ(⟦2-char-id⟧))
+              27 == ⟦2-char-id⟧.keyCode ? (⟦2-char-id⟧.preventDefault(), lB(null)) : 13 == ⟦2-char-id⟧.keyCode && (⟦2-char-id⟧.preventDefault(), lB(⟦2-char-id⟧))
             })), ⟦2-char-id⟧.addEventListener("submit", (⟦2-char-id⟧ => {
-              ⟦2-char-id⟧.preventDefault(), XJ(⟦2-char-id⟧)
+              ⟦2-char-id⟧.preventDefault(), lB(⟦2-char-id⟧)
             }))
           }
-          let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)("div", FJ, (0, ⟦2-char-id⟧.d)("button", {
+          let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)("div", VB, (0, ⟦2-char-id⟧.e)("button", {
             onclick: () => ⟦2-char-id⟧(null),
             "aria-label": ⟦2-char-id⟧.state.phrase("close"),
             class: "cm-dialog-close",
```

</details>

<details>
<summary>Hunk 511 · Change · +1 / -1</summary>

```diff
@@ -13429,7 +13429,7 @@
           ⟦2-char-id⟧.class && (⟦2-char-id⟧.className = ⟦2-char-id⟧.class);
 
           function ⟦2-char-id⟧(⟦2-char-id⟧) {
-            ⟦2-char-id⟧.contains(⟦2-char-id⟧.ownerDocument.activeElement) && ⟦2-char-id⟧.focus(), ZJ(⟦2-char-id⟧)
+            ⟦2-char-id⟧.contains(⟦2-char-id⟧.ownerDocument.activeElement) && ⟦2-char-id⟧.focus(), dB(⟦2-char-id⟧)
           }
           return ⟦2-char-id⟧.classList.add("cm-dialog"), {
             dom: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 512 · Change · +2 / -2</summary>

```diff
@@ -13441,11 +13441,11 @@
               }
             }
           }
-        }(⟦2-char-id⟧, cJ, ⟦2-char-id⟧);
+        }(⟦2-char-id⟧, TB, ⟦2-char-id⟧);
       ⟦2-char-id⟧.state.field(⟦2-char-id⟧, !1) ? ⟦2-char-id⟧.dispatch({
         effects: ⟦2-char-id⟧.of(⟦2-char-id⟧)
       }) : ⟦2-char-id⟧.dispatch({
-        effects: ⟦2-char-id⟧.A.appendConfig.of(⟦2-char-id⟧.init((() => [⟦2-char-id⟧])))
+        effects: ⟦2-char-id⟧.x.appendConfig.of(⟦2-char-id⟧.init((() => [⟦2-char-id⟧])))
       });
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.of(⟦2-char-id⟧);
       return {
```

</details>

<details>
<summary>Hunk 513 · Change · +1 / -1</summary>

```diff
@@ -13457,7 +13457,7 @@
         })), ⟦2-char-id⟧)))
       }
     }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.E.define({
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define({
         create: () => [],
         update(⟦2-char-id⟧, ⟦2-char-id⟧) {
           for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.effects) ⟦2-char-id⟧.is(⟦2-char-id⟧) ? ⟦2-char-id⟧ = [⟦2-char-id⟧.value].concat(⟦2-char-id⟧) : ⟦2-char-id⟧.is(⟦2-char-id⟧) && (⟦2-char-id⟧ = ⟦2-char-id⟧.filter((⟦2-char-id⟧ => ⟦2-char-id⟧ != ⟦2-char-id⟧.value)));
```

</details>

<details>
<summary>Hunk 514 · Change · +3 / -3</summary>

```diff
@@ -13465,9 +13465,9 @@
         },
         provide: ⟦2-char-id⟧ => ⟦2-char-id⟧.computeN([⟦2-char-id⟧], (⟦2-char-id⟧ => ⟦2-char-id⟧.field(⟦2-char-id⟧)))
       }),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define();
-    class ⟦2-char-id⟧ extends ⟦2-char-id⟧.x {
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.x.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.x.define();
+    class ⟦2-char-id⟧ extends ⟦2-char-id⟧.w {
       compare(⟦2-char-id⟧) {
         return this == ⟦2-char-id⟧ || this.constructor == ⟦2-char-id⟧.constructor && this.eq(⟦2-char-id⟧)
       }
```

</details>

<details>
<summary>Hunk 515 · Change · +4 / -4</summary>

```diff
@@ -13476,14 +13476,14 @@
       }
       destroy(⟦2-char-id⟧) {}
     }
-    ⟦2-char-id⟧.prototype.elementClass = "", ⟦2-char-id⟧.prototype.toDOM = void 0, ⟦2-char-id⟧.prototype.mapMode = ⟦2-char-id⟧.r.TrackBefore, ⟦2-char-id⟧.prototype.startSide = ⟦2-char-id⟧.prototype.endSide = -1, ⟦2-char-id⟧.prototype.point = !0;
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define(),
+    ⟦2-char-id⟧.prototype.elementClass = "", ⟦2-char-id⟧.prototype.toDOM = void 0, ⟦2-char-id⟧.prototype.mapMode = ⟦2-char-id⟧.o.TrackBefore, ⟦2-char-id⟧.prototype.startSide = ⟦2-char-id⟧.prototype.endSide = -1, ⟦2-char-id⟧.prototype.point = !0;
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define(),
       ⟦2-char-id⟧ = {
         class: "",
         renderEmptyElements: !1,
         elementStyle: "",
-        markers: () => ⟦2-char-id⟧.v.empty,
+        markers: () => ⟦2-char-id⟧.u.empty,
         lineMarker: () => null,
         widgetMarker: () => null,
         lineMarkerChange: null,
```

</details>

<details>
<summary>Hunk 516 · Change · +5 / -5</summary>

```diff
@@ -13492,21 +13492,21 @@
         domEventHandlers: {},
         side: "before"
       },
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define();
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define();
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       return [⟦2-char-id⟧(), ⟦2-char-id⟧.of({
-        ...qX,
-        ...JJ
+        ...ol,
+        ...BB
       })]
     }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define({
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define({
       combine: ⟦2-char-id⟧ => ⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧))
     });
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = [⟦2-char-id⟧];
-      return ⟦2-char-id⟧ && !1 === ⟦2-char-id⟧.fixed && ⟦2-char-id⟧.push(⟦2-char-id⟧.of(!0)), cJ
+      return ⟦2-char-id⟧ && !1 === ⟦2-char-id⟧.fixed && ⟦2-char-id⟧.push(⟦2-char-id⟧.of(!0)), TB
     }
     const ⟦2-char-id⟧ = ⟦2-char-id⟧.fromClass(class {
       constructor(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 517 · Change · +1 / -1</summary>

```diff
@@ -13533,7 +13533,7 @@
       syncGutters(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = this.dom.nextSibling;
         ⟦2-char-id⟧ && (this.dom.remove(), this.domAfter && this.domAfter.remove());
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧.v.iter(this.view.state.facet(⟦2-char-id⟧), this.view.viewport.from),
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧.u.iter(this.view.state.facet(⟦2-char-id⟧), this.view.viewport.from),
           ⟦2-char-id⟧ = [],
           ⟦2-char-id⟧ = this.gutters.map((⟦2-char-id⟧ => new ⟦2-char-id⟧(⟦2-char-id⟧, this.view.viewport, -this.view.documentPadding.top)));
         for (let ⟦2-char-id⟧ of this.view.viewportLineBlocks)
```

</details>

<details>
<summary>Hunk 518 · Change · +4 / -4</summary>

```diff
@@ -13541,14 +13541,14 @@
             let ⟦2-char-id⟧ = !0;
             for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.type)
               if (⟦2-char-id⟧.type == ⟦2-char-id⟧.Text && ⟦2-char-id⟧) {
-                GX(⟦2-char-id⟧, UJ, ⟦2-char-id⟧.from);
-                for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.line(this.view, cJ, ⟦2-char-id⟧);
+                El(⟦2-char-id⟧, yB, ⟦2-char-id⟧.from);
+                for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.line(this.view, TB, ⟦2-char-id⟧);
                 ⟦2-char-id⟧ = !1
               } else if (⟦2-char-id⟧.widget)
               for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.widget(this.view, ⟦2-char-id⟧)
           } else if (⟦2-char-id⟧.type == ⟦2-char-id⟧.Text) {
-          GX(⟦2-char-id⟧, UJ, ⟦2-char-id⟧.from);
-          for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.line(this.view, FJ, ⟦2-char-id⟧)
+          El(⟦2-char-id⟧, yB, ⟦2-char-id⟧.from);
+          for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.line(this.view, VB, ⟦2-char-id⟧)
         } else if (⟦2-char-id⟧.widget)
           for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.widget(this.view, ⟦2-char-id⟧);
         for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.finish();
```

</details>

<details>
<summary>Hunk 519 · Change · +1 / -1</summary>

```diff
@@ -13557,7 +13557,7 @@
       updateGutters(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.startState.facet(⟦2-char-id⟧),
           ⟦2-char-id⟧ = ⟦2-char-id⟧.state.facet(⟦2-char-id⟧),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧.docChanged || ⟦2-char-id⟧.heightChanged || ⟦2-char-id⟧.viewportChanged || !⟦2-char-id⟧.v.eq(⟦2-char-id⟧.startState.facet(⟦2-char-id⟧), ⟦2-char-id⟧.state.facet(⟦2-char-id⟧), ⟦2-char-id⟧.view.viewport.from, ⟦2-char-id⟧.view.viewport.to);
+          ⟦2-char-id⟧ = ⟦2-char-id⟧.docChanged || ⟦2-char-id⟧.heightChanged || ⟦2-char-id⟧.viewportChanged || !⟦2-char-id⟧.u.eq(⟦2-char-id⟧.startState.facet(⟦2-char-id⟧), ⟦2-char-id⟧.state.facet(⟦2-char-id⟧), ⟦2-char-id⟧.view.viewport.from, ⟦2-char-id⟧.view.viewport.to);
         if (⟦2-char-id⟧ == ⟦2-char-id⟧)
           for (let ⟦2-char-id⟧ of this.gutters) ⟦2-char-id⟧.update(⟦2-char-id⟧) && (⟦2-char-id⟧ = !0);
         else {
```

</details>

<details>
<summary>Hunk 520 · Change · +14 / -14</summary>

```diff
@@ -13594,33 +13594,33 @@
     });
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return Array.isArray(⟦2-char-id⟧) ? JJ : [⟦2-char-id⟧]
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      return Array.isArray(⟦2-char-id⟧) ? BB : [⟦2-char-id⟧]
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       for (; ⟦2-char-id⟧.value && ⟦2-char-id⟧.from <= ⟦2-char-id⟧;) ⟦2-char-id⟧.from == ⟦2-char-id⟧ && ⟦2-char-id⟧.push(⟦2-char-id⟧.value), ⟦2-char-id⟧.next()
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-        this.gutter = ⟦2-char-id⟧, this.height = ⟦2-char-id⟧, this.i = 0, this.cursor = ⟦2-char-id⟧.v.iter(⟦2-char-id⟧.markers, ⟦2-char-id⟧.from)
-      }
-      addElement(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+        this.gutter = ⟦2-char-id⟧, this.height = ⟦2-char-id⟧, this.i = 0, this.cursor = ⟦2-char-id⟧.u.iter(⟦2-char-id⟧.markers, ⟦2-char-id⟧.from)
+      }
+      addElement(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let {
           gutter: ⟦2-char-id⟧
         } = this, ⟦2-char-id⟧ = (⟦2-char-id⟧.top - this.height) / ⟦2-char-id⟧.scaleY, ⟦2-char-id⟧ = ⟦2-char-id⟧.height / ⟦2-char-id⟧.scaleY;
         if (this.i == ⟦2-char-id⟧.elements.length) {
-          let ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, eJ, UJ, ⟦2-char-id⟧);
+          let ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, pB, yB, ⟦2-char-id⟧);
           ⟦2-char-id⟧.elements.push(⟦2-char-id⟧), ⟦2-char-id⟧.dom.appendChild(⟦2-char-id⟧.dom)
-        } else ⟦2-char-id⟧.elements[this.i].update(⟦2-char-id⟧, eJ, UJ, ⟦2-char-id⟧);
+        } else ⟦2-char-id⟧.elements[this.i].update(⟦2-char-id⟧, pB, yB, ⟦2-char-id⟧);
         this.height = ⟦2-char-id⟧.bottom, this.i++
       }
-      line(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      line(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = [];
-        ⟦2-char-id⟧(this.cursor, FJ, ⟦2-char-id⟧.from), ⟦2-char-id⟧.length && (⟦2-char-id⟧ = ⟦2-char-id⟧.concat(⟦2-char-id⟧));
-        let ⟦2-char-id⟧ = this.gutter.config.lineMarker(⟦2-char-id⟧, cJ, ⟦2-char-id⟧);
+        ⟦2-char-id⟧(this.cursor, VB, ⟦2-char-id⟧.from), ⟦2-char-id⟧.length && (⟦2-char-id⟧ = ⟦2-char-id⟧.concat(⟦2-char-id⟧));
+        let ⟦2-char-id⟧ = this.gutter.config.lineMarker(⟦2-char-id⟧, TB, ⟦2-char-id⟧);
         ⟦2-char-id⟧ && ⟦2-char-id⟧.unshift(⟦2-char-id⟧);
         let ⟦2-char-id⟧ = this.gutter;
-        (0 != ⟦2-char-id⟧.length || ⟦2-char-id⟧.config.renderEmptyElements) && this.addElement(⟦2-char-id⟧, cJ, ⟦2-char-id⟧)
+        (0 != ⟦2-char-id⟧.length || ⟦2-char-id⟧.config.renderEmptyElements) && this.addElement(⟦2-char-id⟧, TB, ⟦2-char-id⟧)
       }
       widget(⟦2-char-id⟧, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = this.gutter.config.widgetMarker(⟦2-char-id⟧, ⟦2-char-id⟧.widget, ⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 521 · Change · +1 / -1</summary>

```diff
@@ -13629,7 +13629,7 @@
           let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.widget, ⟦2-char-id⟧);
           ⟦2-char-id⟧ && (⟦2-char-id⟧ || (⟦2-char-id⟧ = [])).push(⟦2-char-id⟧)
         }
-        ⟦2-char-id⟧ && this.addElement(⟦2-char-id⟧, cJ, ⟦2-char-id⟧)
+        ⟦2-char-id⟧ && this.addElement(⟦2-char-id⟧, TB, ⟦2-char-id⟧)
       }
       finish() {
         let ⟦2-char-id⟧ = this.gutter;
```

</details>

<details>
<summary>Hunk 522 · Change · +1 / -1</summary>

```diff
@@ -13650,7 +13650,7 @@
             ⟦2-char-id⟧ = (⟦2-char-id⟧.top + ⟦2-char-id⟧.bottom) / 2
           } else ⟦2-char-id⟧ = ⟦2-char-id⟧.clientY;
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.lineBlockAtHeight(⟦2-char-id⟧ - ⟦2-char-id⟧.documentTop);
-          ⟦2-char-id⟧.domEventHandlers[⟦2-char-id⟧](⟦2-char-id⟧, XJ, ⟦2-char-id⟧) && ⟦2-char-id⟧.preventDefault()
+          ⟦2-char-id⟧.domEventHandlers[⟦2-char-id⟧](⟦2-char-id⟧, lB, ⟦2-char-id⟧) && ⟦2-char-id⟧.preventDefault()
         }));
         this.markers = ⟦2-char-id⟧(⟦2-char-id⟧.markers(⟦2-char-id⟧)), ⟦2-char-id⟧.initialSpacer && (this.spacer = new ⟦2-char-id⟧(⟦2-char-id⟧, 0, 0, [⟦2-char-id⟧.initialSpacer(⟦2-char-id⟧)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
       }
```

</details>

<details>
<summary>Hunk 523 · Change · +5 / -5</summary>

```diff
@@ -13661,17 +13661,17 @@
           ⟦2-char-id⟧ != this.spacer.markers[0] && this.spacer.update(⟦2-char-id⟧.view, 0, 0, [⟦2-char-id⟧])
         }
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.view.viewport;
-        return !⟦2-char-id⟧.v.eq(this.markers, cJ, ⟦2-char-id⟧.from, ⟦2-char-id⟧.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(⟦2-char-id⟧)
+        return !⟦2-char-id⟧.u.eq(this.markers, TB, ⟦2-char-id⟧.from, ⟦2-char-id⟧.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(⟦2-char-id⟧)
       }
       destroy() {
         for (let ⟦2-char-id⟧ of this.elements) ⟦2-char-id⟧.destroy()
       }
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧)
-      }
-      update(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧)
+      }
+      update(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         this.height != ⟦2-char-id⟧ && (this.height = ⟦2-char-id⟧, this.dom.style.height = ⟦2-char-id⟧ + "px"), this.above != ⟦2-char-id⟧ && (this.dom.style.marginTop = (this.above = ⟦2-char-id⟧) ? ⟦2-char-id⟧ + "px" : ""),
           function(⟦2-char-id⟧, ⟦2-char-id⟧) {
             if (⟦2-char-id⟧.length != ⟦2-char-id⟧.length) return !1;
```

</details>

<details>
<summary>Hunk 524 · Change · +4 / -4</summary>

```diff
@@ -13713,10 +13713,10 @@
         this.setMarkers(null, [])
       }
     }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define({
-        combine: ⟦2-char-id⟧ => (0, ⟦2-char-id⟧.S)(⟦2-char-id⟧, {
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define({
+        combine: ⟦2-char-id⟧ => (0, ⟦2-char-id⟧.P)(⟦2-char-id⟧, {
           formatNumber: String,
           domEventHandlers: {}
         }, {
```

</details>

<details>
<summary>Hunk 525 · Change · +1 / -1</summary>

```diff
@@ -13725,7 +13725,7 @@
             for (let ⟦2-char-id⟧ in ⟦2-char-id⟧) {
               let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
                 ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
-              ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧ ? (⟦2-char-id⟧, ZJ, ⟦2-char-id⟧) => ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧) || ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧) : ⟦2-char-id⟧
+              ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧ ? (⟦2-char-id⟧, dB, ⟦2-char-id⟧) => ⟦2-char-id⟧(⟦2-char-id⟧, dB, ⟦2-char-id⟧) || ⟦2-char-id⟧(⟦2-char-id⟧, dB, ⟦2-char-id⟧) : ⟦2-char-id⟧
             }
             return ⟦2-char-id⟧
           }
```

</details>

<details>
<summary>Hunk 526 · Change · +6 / -6</summary>

```diff
@@ -13750,19 +13750,19 @@
       class: "cm-lineNumbers",
       renderEmptyElements: !1,
       markers: ⟦2-char-id⟧ => ⟦2-char-id⟧.state.facet(⟦2-char-id⟧),
-      lineMarker: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => ⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧.toDOM)) ? null : new ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.state.doc.lineAt(⟦2-char-id⟧.from).number)),
-      widgetMarker: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+      lineMarker: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => ⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧.toDOM)) ? null : new ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.state.doc.lineAt(⟦2-char-id⟧.from).number)),
+      widgetMarker: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
         for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.state.facet(⟦2-char-id⟧)) {
-          let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧);
+          let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧);
           if (⟦2-char-id⟧) return ⟦2-char-id⟧
         }
         return null
       },
       lineMarkerChange: ⟦2-char-id⟧ => ⟦2-char-id⟧.startState.facet(⟦2-char-id⟧) != ⟦2-char-id⟧.state.facet(⟦2-char-id⟧),
-      initialSpacer: ⟦2-char-id⟧ => new ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, SX(⟦2-char-id⟧.state.doc.lines))),
+      initialSpacer: ⟦2-char-id⟧ => new ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, Ul(⟦2-char-id⟧.state.doc.lines))),
       updateSpacer(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.view, SX(⟦2-char-id⟧.view.state.doc.lines));
-        return ⟦2-char-id⟧ == ⟦2-char-id⟧.number ? JJ : new ⟦2-char-id⟧(⟦2-char-id⟧)
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.view, Ul(⟦2-char-id⟧.view.state.doc.lines));
+        return ⟦2-char-id⟧ == ⟦2-char-id⟧.number ? BB : new ⟦2-char-id⟧(⟦2-char-id⟧)
       },
       domEventHandlers: ⟦2-char-id⟧.facet(⟦2-char-id⟧).domEventHandlers,
       side: "before"
```

</details>

<details>
<summary>Hunk 527 · Change · +1 / -1</summary>

```diff
@@ -13770,7 +13770,7 @@
 
     function ⟦2-char-id⟧() {
       let ⟦2-char-id⟧ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-      return [⟦2-char-id⟧.of(⟦2-char-id⟧), DX(), ⟦2-char-id⟧]
+      return [⟦2-char-id⟧.of(⟦2-char-id⟧), Dl(), ⟦2-char-id⟧]
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 528 · Change · +7 / -7</summary>

```diff
@@ -13786,28 +13786,28 @@
       ⟦2-char-id⟧ = ⟦2-char-id⟧.compute(["selection"], (⟦2-char-id⟧ => {
         let ⟦2-char-id⟧ = [],
           ⟦2-char-id⟧ = -1;
-        for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.selection.ws) {
+        for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.selection.ek) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧.head).from;
           ⟦2-char-id⟧ > ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧.push(⟦2-char-id⟧.range(⟦2-char-id⟧)))
         }
-        return ⟦2-char-id⟧.v.of(⟦2-char-id⟧)
+        return ⟦2-char-id⟧.u.of(⟦2-char-id⟧)
       }));
 
     function ⟦2-char-id⟧() {
       return ⟦2-char-id⟧
     }
   },
-  40080: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  40064: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       b: () => ⟦2-char-id⟧,
       f: () => ⟦2-char-id⟧,
-      h: () => ⟦2-char-id⟧,
       i: () => ⟦2-char-id⟧,
+      j: () => ⟦2-char-id⟧,
       k: () => ⟦2-char-id⟧,
-      n: () => ⟦2-char-id⟧,
-      o: () => ⟦2-char-id⟧,
+      m: () => ⟦2-char-id⟧,
+      q: () => ⟦2-char-id⟧,
       r: () => ⟦2-char-id⟧,
-      t: () => ⟦2-char-id⟧
+      s: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = 1024;
     let ⟦2-char-id⟧ = 0;
```

</details>

<details>
<summary>Hunk 529 · Change · +1 / -1</summary>

```diff
@@ -13850,7 +13850,7 @@
       perNode: !0
     });
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
         this.tree = ⟦2-char-id⟧, this.overlay = ⟦2-char-id⟧, this.parser = ⟦2-char-id⟧, this.bracketed = ⟦2-char-id⟧
       }
```

</details>

<details>
<summary>Hunk 530 · Change · +2 / -2</summary>

```diff
@@ -13860,14 +13860,14 @@
     }
     const ⟦2-char-id⟧ = Object.create(null);
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
         this.name = ⟦2-char-id⟧, this.props = ⟦2-char-id⟧, this.id = ⟦2-char-id⟧, this.flags = ⟦2-char-id⟧
       }
       static define(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.props && ⟦2-char-id⟧.props.length ? Object.create(null) : ⟦2-char-id⟧,
           ⟦2-char-id⟧ = (⟦2-char-id⟧.top ? 1 : 0) | (⟦2-char-id⟧.skipped ? 2 : 0) | (⟦2-char-id⟧.error ? 4 : 0) | (null == ⟦2-char-id⟧.name ? 8 : 0),
-          ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.name || "", cJ, ⟦2-char-id⟧.id, ⟦2-char-id⟧);
+          ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.name || "", TB, ⟦2-char-id⟧.id, ⟦2-char-id⟧);
         if (⟦2-char-id⟧.props)
           for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.props)
             if (Array.isArray(⟦2-char-id⟧) || (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧)), ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 531 · Change · +1 / -1</summary>

```diff
@@ -13931,7 +13931,7 @@
               ⟦2-char-id⟧.combine && ⟦2-char-id⟧.id in ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.combine(⟦2-char-id⟧[⟦2-char-id⟧.id], ⟦2-char-id⟧)), ⟦2-char-id⟧[⟦2-char-id⟧.id] = ⟦2-char-id⟧
             }
           }
-          ⟦2-char-id⟧.push(⟦2-char-id⟧ ? new ⟦2-char-id⟧(⟦2-char-id⟧.name, cJ, ⟦2-char-id⟧.id, ⟦2-char-id⟧.flags) : ⟦2-char-id⟧)
+          ⟦2-char-id⟧.push(⟦2-char-id⟧ ? new ⟦2-char-id⟧(⟦2-char-id⟧.name, TB, ⟦2-char-id⟧.id, ⟦2-char-id⟧.flags) : ⟦2-char-id⟧)
         }
         return new ⟦2-char-id⟧(⟦2-char-id⟧)
       }
```

</details>

<details>
<summary>Hunk 532 · Change · +2 / -2</summary>

```diff
@@ -13943,10 +13943,10 @@
       ⟦2-char-id⟧[⟦2-char-id⟧.ExcludeBuffers = 1] = "ExcludeBuffers", ⟦2-char-id⟧[⟦2-char-id⟧.IncludeAnonymous = 2] = "IncludeAnonymous", ⟦2-char-id⟧[⟦2-char-id⟧.IgnoreMounts = 4] = "IgnoreMounts", ⟦2-char-id⟧[⟦2-char-id⟧.IgnoreOverlays = 8] = "IgnoreOverlays", ⟦2-char-id⟧[⟦2-char-id⟧.EnterBracketed = 16] = "EnterBracketed"
     }(⟦2-char-id⟧ || (⟦2-char-id⟧ = {}));
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
         if (this.type = ⟦2-char-id⟧, this.children = ⟦2-char-id⟧, this.positions = ⟦2-char-id⟧, this.length = ⟦2-char-id⟧, this.props = null, ⟦2-char-id⟧ && ⟦2-char-id⟧.length) {
           this.props = Object.create(null);
-          for (let [⟦2-char-id⟧, ⟦2-char-id⟧] of ⟦2-char-id⟧) this.props["number" == typeof ⟦2-char-id⟧ ? JJ : ⟦2-char-id⟧.id] = ⟦2-char-id⟧
+          for (let [⟦2-char-id⟧, ⟦2-char-id⟧] of ⟦2-char-id⟧) this.props["number" == typeof ⟦2-char-id⟧ ? BB : ⟦2-char-id⟧.id] = ⟦2-char-id⟧
         }
       }
       toString() {
```

</details>

<details>
<summary>Hunk 533 · Change · +7 / -7</summary>

```diff
@@ -13967,26 +13967,26 @@
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.get(this) || this.topNode,
           ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧);
-        return ⟦2-char-id⟧.moveTo(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.set(this, ⟦2-char-id⟧._tree), FJ
+        return ⟦2-char-id⟧.moveTo(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.set(this, ⟦2-char-id⟧._tree), VB
       }
       get topNode() {
         return new ⟦2-char-id⟧(this, 0, 0, null)
       }
       resolve(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.get(this) || this.topNode, JJ, cJ, !1);
-        return ⟦2-char-id⟧.set(this, ⟦2-char-id⟧), ZJ
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.get(this) || this.topNode, BB, TB, !1);
+        return ⟦2-char-id⟧.set(this, ⟦2-char-id⟧), dB
       }
       resolveInner(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.get(this) || this.topNode, JJ, cJ, !0);
-        return ⟦2-char-id⟧.set(this, ⟦2-char-id⟧), ZJ
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.get(this) || this.topNode, BB, TB, !0);
+        return ⟦2-char-id⟧.set(this, ⟦2-char-id⟧), dB
       }
       resolveStack(⟦2-char-id⟧) {
-        return function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+        return function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.resolveInner(⟦2-char-id⟧, ⟦2-char-id⟧),
             ⟦2-char-id⟧ = null;
-          for (let ⟦2-char-id⟧ = ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ ? FJ : ⟦2-char-id⟧.context.parent; ⟦2-char-id⟧; ⟦2-char-id⟧ = ⟦2-char-id⟧.parent)
+          for (let ⟦2-char-id⟧ = ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ ? VB : ⟦2-char-id⟧.context.parent; ⟦2-char-id⟧; ⟦2-char-id⟧ = ⟦2-char-id⟧.parent)
             if (⟦2-char-id⟧.index < 0) {
               let ⟦2-char-id⟧ = ⟦2-char-id⟧.parent;
               (⟦2-char-id⟧ || (⟦2-char-id⟧ = [⟦2-char-id⟧])).push(⟦2-char-id⟧.resolve(⟦2-char-id⟧, ⟦2-char-id⟧)), ⟦2-char-id⟧ = ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 534 · Change · +3 / -3</summary>

```diff
@@ -13994,15 +13994,15 @@
               let ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧.tree);
               if (⟦2-char-id⟧ && ⟦2-char-id⟧.overlay && ⟦2-char-id⟧.overlay[0].from <= ⟦2-char-id⟧ && ⟦2-char-id⟧.overlay[⟦2-char-id⟧.overlay.length - 1].to >= ⟦2-char-id⟧) {
                 let ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.tree, ⟦2-char-id⟧.overlay[0].from + ⟦2-char-id⟧.from, -1, ⟦2-char-id⟧);
-                (⟦2-char-id⟧ || (⟦2-char-id⟧ = [⟦2-char-id⟧])).push(⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, !1))
+                (⟦2-char-id⟧ || (⟦2-char-id⟧ = [⟦2-char-id⟧])).push(⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, !1))
               }
             } return ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧) : ⟦2-char-id⟧
-        }(this, JJ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
+        }(this, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
       }
       iterate(⟦2-char-id⟧) {
         let {
           enter: ⟦2-char-id⟧,
-          cn: ⟦2-char-id⟧,
+          lD: ⟦2-char-id⟧,
           from: ⟦2-char-id⟧ = 0,
           to: ⟦2-char-id⟧ = this.length
         } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.mode || 0, ⟦2-char-id⟧ = (⟦2-char-id⟧ & ⟦2-char-id⟧.IncludeAnonymous) > 0;
```

</details>

<details>
<summary>Hunk 535 · Change · +1 / -1</summary>

```diff
@@ -14029,7 +14029,7 @@
       }
       balance() {
         let ⟦2-char-id⟧ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-        return this.children.length <= 8 ? this : ⟦2-char-id⟧(⟦2-char-id⟧.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => new ⟦2-char-id⟧(this.type, JJ, cJ, ZJ, this.propValues)), ⟦2-char-id⟧.makeTree || ((⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => new ⟦2-char-id⟧(⟦2-char-id⟧.none, JJ, cJ, ⟦2-char-id⟧)))
+        return this.children.length <= 8 ? this : ⟦2-char-id⟧(⟦2-char-id⟧.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((⟦2-char-id⟧, TB, ⟦2-char-id⟧) => new ⟦2-char-id⟧(this.type, BB, TB, dB, this.propValues)), ⟦2-char-id⟧.makeTree || ((⟦2-char-id⟧, TB, ⟦2-char-id⟧) => new ⟦2-char-id⟧(⟦2-char-id⟧.none, BB, TB, ⟦2-char-id⟧)))
       }
       static build(⟦2-char-id⟧) {
         return function(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 536 · Change · +1 / -1</summary>

```diff
@@ -14042,7 +14042,7 @@
             minRepeatType: ⟦2-char-id⟧ = ⟦2-char-id⟧.types.length
           } = ⟦2-char-id⟧, ⟦2-char-id⟧ = Array.isArray(⟦2-char-id⟧) ? new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.length) : ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.types, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0;
 
-          function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, XJ, ⟦2-char-id⟧) {
+          function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, lB, ⟦2-char-id⟧) {
             let {
               id: ⟦2-char-id⟧,
               start: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 537 · Change · +9 / -9</summary>

```diff
@@ -14056,34 +14056,34 @@
               }
               if (-3 == ⟦2-char-id⟧) return void(⟦2-char-id⟧ = ⟦2-char-id⟧);
               if (-4 == ⟦2-char-id⟧) return void(⟦2-char-id⟧ = ⟦2-char-id⟧);
-              throw new RangeError(`Unrecognized record size: ${yJ}`)
+              throw new RangeError(`Unrecognized record size: ${MB}`)
             }
-            let ⟦2-char-id⟧, bJ, ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
+            let ⟦2-char-id⟧, FB, ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
               ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧;
             if (⟦2-char-id⟧ - ⟦2-char-id⟧ <= ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.pos - ⟦2-char-id⟧, ⟦2-char-id⟧))) {
               let ⟦2-char-id⟧ = new Uint16Array(⟦2-char-id⟧.size - ⟦2-char-id⟧.skip),
                 ⟦2-char-id⟧ = ⟦2-char-id⟧.pos - ⟦2-char-id⟧.size,
                 ⟦2-char-id⟧ = ⟦2-char-id⟧.length;
-              for (; ⟦2-char-id⟧.pos > ⟦2-char-id⟧;) ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.start, cJ, ⟦2-char-id⟧);
+              for (; ⟦2-char-id⟧.pos > ⟦2-char-id⟧;) ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.start, TB, ⟦2-char-id⟧);
               ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧.start, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.start - ⟦2-char-id⟧
             } else {
               let ⟦2-char-id⟧ = ⟦2-char-id⟧.pos - ⟦2-char-id⟧;
               ⟦2-char-id⟧.next();
               let ⟦2-char-id⟧ = [],
                 ⟦2-char-id⟧ = [],
-                ⟦2-char-id⟧ = ⟦2-char-id⟧ >= ⟦2-char-id⟧ ? GJ : -1,
+                ⟦2-char-id⟧ = ⟦2-char-id⟧ >= ⟦2-char-id⟧ ? uB : -1,
                 ⟦2-char-id⟧ = 0,
                 ⟦2-char-id⟧ = ⟦2-char-id⟧;
-              for (; ⟦2-char-id⟧.pos > ⟦2-char-id⟧;) ⟦2-char-id⟧ >= 0 && ⟦2-char-id⟧.id == ⟦2-char-id⟧ && ⟦2-char-id⟧.size >= 0 ? (⟦2-char-id⟧.end <= ⟦2-char-id⟧ - ⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧, ZJ, VJ, UJ, ⟦2-char-id⟧.end, XJ, FJ, SJ, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.length, ⟦2-char-id⟧ = ⟦2-char-id⟧.end), ⟦2-char-id⟧.next()) : ⟦2-char-id⟧ > 2500 ? ⟦2-char-id⟧(⟦2-char-id⟧, JJ, cJ, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, JJ, cJ, ZJ, FJ, ⟦2-char-id⟧ + 1);
-              if (⟦2-char-id⟧ >= 0 && ⟦2-char-id⟧ > 0 && ⟦2-char-id⟧ < ⟦2-char-id⟧.length && ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, VJ, UJ, VJ, XJ, FJ, SJ, ⟦2-char-id⟧), ⟦2-char-id⟧.reverse(), ⟦2-char-id⟧.reverse(), ⟦2-char-id⟧ > -1 && ⟦2-char-id⟧ > 0) {
+              for (; ⟦2-char-id⟧.pos > ⟦2-char-id⟧;) ⟦2-char-id⟧ >= 0 && ⟦2-char-id⟧.id == ⟦2-char-id⟧ && ⟦2-char-id⟧.size >= 0 ? (⟦2-char-id⟧.end <= ⟦2-char-id⟧ - ⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧, dB, fB, yB, ⟦2-char-id⟧.end, lB, VB, zB, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.length, ⟦2-char-id⟧ = ⟦2-char-id⟧.end), ⟦2-char-id⟧.next()) : ⟦2-char-id⟧ > 2500 ? ⟦2-char-id⟧(⟦2-char-id⟧, BB, TB, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, BB, TB, dB, VB, ⟦2-char-id⟧ + 1);
+              if (⟦2-char-id⟧ >= 0 && ⟦2-char-id⟧ > 0 && ⟦2-char-id⟧ < ⟦2-char-id⟧.length && ⟦2-char-id⟧(⟦2-char-id⟧, dB, fB, yB, fB, lB, VB, zB, ⟦2-char-id⟧), ⟦2-char-id⟧.reverse(), ⟦2-char-id⟧.reverse(), ⟦2-char-id⟧ > -1 && ⟦2-char-id⟧ > 0) {
                 let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
-                ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, 0, ⟦2-char-id⟧.length, 0, ⟦2-char-id⟧ - ⟦2-char-id⟧, JJ, ⟦2-char-id⟧)
-              } else ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧)
+                ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, 0, ⟦2-char-id⟧.length, 0, ⟦2-char-id⟧ - ⟦2-char-id⟧, BB, ⟦2-char-id⟧)
+              } else ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧)
             }
             ⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧.push(⟦2-char-id⟧)
           }
 
-          function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+          function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
             let ⟦2-char-id⟧ = [],
               ⟦2-char-id⟧ = 0,
               ⟦2-char-id⟧ = -1;
```

</details>

<details>
<summary>Hunk 538 · Change · +1 / -1</summary>

```diff
@@ -14097,7 +14097,7 @@
               if (⟦2-char-id⟧ > 4) ⟦2-char-id⟧.next();
               else {
                 if (⟦2-char-id⟧ > -1 && ⟦2-char-id⟧ < ⟦2-char-id⟧) break;
-                ⟦2-char-id⟧ < 0 && (⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧), ⟦2-char-id⟧.push(⟦2-char-id⟧, cJ, ⟦2-char-id⟧), ⟦2-char-id⟧++, ⟦2-char-id⟧.next()
+                ⟦2-char-id⟧ < 0 && (⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧), ⟦2-char-id⟧.push(⟦2-char-id⟧, TB, ⟦2-char-id⟧), ⟦2-char-id⟧++, ⟦2-char-id⟧.next()
               }
             }
             if (⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 539 · Change · +8 / -8</summary>

```diff
@@ -14109,25 +14109,25 @@
           }
 
           function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-            return (⟦2-char-id⟧, FJ, ⟦2-char-id⟧) => {
-              let ⟦2-char-id⟧, AJ, ⟦2-char-id⟧ = 0,
+            return (⟦2-char-id⟧, VB, ⟦2-char-id⟧) => {
+              let ⟦2-char-id⟧, JB, ⟦2-char-id⟧ = 0,
                 ⟦2-char-id⟧ = ⟦2-char-id⟧.length - 1;
               if (⟦2-char-id⟧ >= 0 && (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) instanceof ⟦2-char-id⟧) {
                 if (!⟦2-char-id⟧ && ⟦2-char-id⟧.type == ⟦2-char-id⟧ && ⟦2-char-id⟧.length == ⟦2-char-id⟧) return ⟦2-char-id⟧;
                 (⟦2-char-id⟧ = ⟦2-char-id⟧.prop(⟦2-char-id⟧.lookAhead)) && (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧] + ⟦2-char-id⟧.length + ⟦2-char-id⟧)
               }
-              return ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, FJ, UJ, qJ, ⟦2-char-id⟧)
+              return ⟦2-char-id⟧(⟦2-char-id⟧, dB, VB, yB, YB, ⟦2-char-id⟧)
             }
           }
 
-          function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, eJ, XJ, AJ, qJ, ⟦2-char-id⟧) {
+          function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, pB, lB, JB, YB, ⟦2-char-id⟧) {
             let ⟦2-char-id⟧ = [],
               ⟦2-char-id⟧ = [];
             for (; ⟦2-char-id⟧.length > ⟦2-char-id⟧;) ⟦2-char-id⟧.push(⟦2-char-id⟧.pop()), ⟦2-char-id⟧.push(⟦2-char-id⟧.pop() + ⟦2-char-id⟧ - ⟦2-char-id⟧);
-            ⟦2-char-id⟧.push(⟦2-char-id⟧(⟦2-char-id⟧.types[⟦2-char-id⟧], YJ, hJ, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧)), ⟦2-char-id⟧.push(⟦2-char-id⟧ - ⟦2-char-id⟧)
-          }
-
-          function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, eJ, ⟦2-char-id⟧) {
+            ⟦2-char-id⟧.push(⟦2-char-id⟧(⟦2-char-id⟧.types[⟦2-char-id⟧], oB, kB, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧)), ⟦2-char-id⟧.push(⟦2-char-id⟧ - ⟦2-char-id⟧)
+          }
+
+          function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, yB, pB, ⟦2-char-id⟧) {
             if (⟦2-char-id⟧) {
               let ⟦2-char-id⟧ = [⟦2-char-id⟧.contextHash, ⟦2-char-id⟧];
               ⟦2-char-id⟧ = ⟦2-char-id⟧ ? [⟦2-char-id⟧].concat(⟦2-char-id⟧) : [⟦2-char-id⟧]
```

</details>

<details>
<summary>Hunk 540 · Change · +1 / -1</summary>

```diff
@@ -14136,7 +14136,7 @@
               let ⟦2-char-id⟧ = [⟦2-char-id⟧.lookAhead, ⟦2-char-id⟧];
               ⟦2-char-id⟧ = ⟦2-char-id⟧ ? [⟦2-char-id⟧].concat(⟦2-char-id⟧) : [⟦2-char-id⟧]
             }
-            return new ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧)
+            return new ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧)
           }
 
           function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 541 · Change · +1 / -1</summary>

```diff
@@ -14150,7 +14150,7 @@
                 start: 0,
                 skip: 0
               };
-            JJ: for (let ⟦2-char-id⟧ = ⟦2-char-id⟧.pos - ⟦2-char-id⟧; ⟦2-char-id⟧.pos > ⟦2-char-id⟧;) {
+            BB: for (let ⟦2-char-id⟧ = ⟦2-char-id⟧.pos - ⟦2-char-id⟧; ⟦2-char-id⟧.pos > ⟦2-char-id⟧;) {
               let ⟦2-char-id⟧ = ⟦2-char-id⟧.size;
               if (⟦2-char-id⟧.id == ⟦2-char-id⟧ && ⟦2-char-id⟧ >= 0) {
                 ⟦2-char-id⟧.size = ⟦2-char-id⟧, ⟦2-char-id⟧.start = ⟦2-char-id⟧, ⟦2-char-id⟧.skip = ⟦2-char-id⟧, ⟦2-char-id⟧ += 4, ⟦2-char-id⟧ += 4, ⟦2-char-id⟧.next();
```

</details>

<details>
<summary>Hunk 542 · Change · +4 / -4</summary>

```diff
@@ -14169,10 +14169,10 @@
               }
               ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧ += ⟦2-char-id⟧
             }
-            return (⟦2-char-id⟧ < 0 || ⟦2-char-id⟧ == ⟦2-char-id⟧) && (⟦2-char-id⟧.size = ⟦2-char-id⟧, ⟦2-char-id⟧.start = ⟦2-char-id⟧, ⟦2-char-id⟧.skip = ⟦2-char-id⟧), ⟦2-char-id⟧.size > 4 ? YJ : void 0
-          }
-
-          function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+            return (⟦2-char-id⟧ < 0 || ⟦2-char-id⟧ == ⟦2-char-id⟧) && (⟦2-char-id⟧.size = ⟦2-char-id⟧, ⟦2-char-id⟧.start = ⟦2-char-id⟧, ⟦2-char-id⟧.skip = ⟦2-char-id⟧), ⟦2-char-id⟧.size > 4 ? oB : void 0
+          }
+
+          function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
             let {
               id: ⟦2-char-id⟧,
               start: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 543 · Change · +4 / -4</summary>

```diff
@@ -14183,16 +14183,16 @@
               let ⟦2-char-id⟧ = ⟦2-char-id⟧;
               if (⟦2-char-id⟧ > 4) {
                 let ⟦2-char-id⟧ = ⟦2-char-id⟧.pos - (⟦2-char-id⟧ - 4);
-                for (; ⟦2-char-id⟧.pos > ⟦2-char-id⟧;) ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧)
+                for (; ⟦2-char-id⟧.pos > ⟦2-char-id⟧;) ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧)
               }
               ⟦2-char-id⟧[--⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧[--⟦2-char-id⟧] = ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧[--⟦2-char-id⟧] = ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧[--⟦2-char-id⟧] = ⟦2-char-id⟧
-            } else - 3 == ⟦2-char-id⟧ ? ⟦2-char-id⟧ = FJ : -4 == ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧);
+            } else - 3 == ⟦2-char-id⟧ ? ⟦2-char-id⟧ = VB : -4 == ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧);
             return ⟦2-char-id⟧
           }
           let ⟦2-char-id⟧ = [],
             ⟦2-char-id⟧ = [];
-          for (; ⟦2-char-id⟧.pos > 0;) ⟦2-char-id⟧(⟦2-char-id⟧.start || 0, ⟦2-char-id⟧.bufferStart || 0, VJ, KJ, -1, 0);
-          let ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧.length ? ⟦2-char-id⟧[0] + ⟦2-char-id⟧[0].length : 0;
+          for (; ⟦2-char-id⟧.pos > 0;) ⟦2-char-id⟧(⟦2-char-id⟧.start || 0, ⟦2-char-id⟧.bufferStart || 0, fB, sB, -1, 0);
+          let ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.length) && void 0 !== ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧.length ? ⟦2-char-id⟧[0] + ⟦2-char-id⟧[0].length : 0;
           return new ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧.topID], ⟦2-char-id⟧.reverse(), ⟦2-char-id⟧.reverse(), ⟦2-char-id⟧)
         }(⟦2-char-id⟧)
       }
```

</details>

<details>
<summary>Hunk 544 · Change · +1 / -1</summary>

```diff
@@ -14225,7 +14225,7 @@
       }
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         this.buffer = ⟦2-char-id⟧, this.length = ⟦2-char-id⟧, this.set = ⟦2-char-id⟧
       }
       get type() {
```

</details>

<details>
<summary>Hunk 545 · Change · +3 / -3</summary>

```diff
@@ -14246,14 +14246,14 @@
         for (; ⟦2-char-id⟧ < ⟦2-char-id⟧;) ⟦2-char-id⟧.push(this.childString(⟦2-char-id⟧)), ⟦2-char-id⟧ = this.buffer[⟦2-char-id⟧ + 3];
         return ⟦2-char-id⟧ + "(" + ⟦2-char-id⟧.join(",") + ")"
       }
-      findChild(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+      findChild(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
         let {
           buffer: ⟦2-char-id⟧
         } = this, ⟦2-char-id⟧ = -1;
-        for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ != ⟦2-char-id⟧ && !(⟦2-char-id⟧(⟦2-char-id⟧, FJ, ⟦2-char-id⟧[⟦2-char-id⟧ + 1], ⟦2-char-id⟧[⟦2-char-id⟧ + 2]) && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ > 0)); ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 3]);
+        for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ != ⟦2-char-id⟧ && !(⟦2-char-id⟧(⟦2-char-id⟧, VB, ⟦2-char-id⟧[⟦2-char-id⟧ + 1], ⟦2-char-id⟧[⟦2-char-id⟧ + 2]) && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ > 0)); ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 3]);
         return ⟦2-char-id⟧
       }
-      slice(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      slice(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = this.buffer,
           ⟦2-char-id⟧ = new Uint16Array(⟦2-char-id⟧ - ⟦2-char-id⟧),
           ⟦2-char-id⟧ = 0;
```

</details>

<details>
<summary>Hunk 546 · Change · +5 / -5</summary>

```diff
@@ -14262,11 +14262,11 @@
           let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧++] = ⟦2-char-id⟧[⟦2-char-id⟧++] - ⟦2-char-id⟧;
           ⟦2-char-id⟧[⟦2-char-id⟧++] = ⟦2-char-id⟧[⟦2-char-id⟧++] - ⟦2-char-id⟧, ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, ⟦2-char-id⟧)
         }
-        return new ⟦2-char-id⟧(⟦2-char-id⟧, eJ, this.set)
-      }
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+        return new ⟦2-char-id⟧(⟦2-char-id⟧, pB, this.set)
+      }
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
       switch (⟦2-char-id⟧) {
         case -2:
           return ⟦2-char-id⟧ < ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 547 · Change · +4 / -4</summary>

```diff
@@ -14283,17 +14283,17 @@
       }
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-      for (var ⟦2-char-id⟧; ⟦2-char-id⟧.from == ⟦2-char-id⟧.to || (⟦2-char-id⟧ < 1 ? ⟦2-char-id⟧.from >= cJ : ⟦2-char-id⟧.from > ⟦2-char-id⟧) || (⟦2-char-id⟧ > -1 ? ⟦2-char-id⟧.to <= cJ : ⟦2-char-id⟧.to < ⟦2-char-id⟧);) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+      for (var ⟦2-char-id⟧; ⟦2-char-id⟧.from == ⟦2-char-id⟧.to || (⟦2-char-id⟧ < 1 ? ⟦2-char-id⟧.from >= TB : ⟦2-char-id⟧.from > ⟦2-char-id⟧) || (⟦2-char-id⟧ > -1 ? ⟦2-char-id⟧.to <= TB : ⟦2-char-id⟧.to < ⟦2-char-id⟧);) {
         let ⟦2-char-id⟧ = !⟦2-char-id⟧ && ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ && ⟦2-char-id⟧.index < 0 ? null : ⟦2-char-id⟧.parent;
         if (!⟦2-char-id⟧) return ⟦2-char-id⟧;
         ⟦2-char-id⟧ = ⟦2-char-id⟧
       }
       let ⟦2-char-id⟧ = ⟦2-char-id⟧ ? 0 : ⟦2-char-id⟧.IgnoreOverlays;
       if (⟦2-char-id⟧)
-        for (let ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.parent; ⟦2-char-id⟧; ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.parent) ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ && ⟦2-char-id⟧.index < 0 && (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.enter(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.from) != ⟦2-char-id⟧.from && (⟦2-char-id⟧ = ⟦2-char-id⟧);
+        for (let ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.parent; ⟦2-char-id⟧; ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.parent) ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ && ⟦2-char-id⟧.index < 0 && (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.enter(⟦2-char-id⟧, dB, ⟦2-char-id⟧)) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.from) != ⟦2-char-id⟧.from && (⟦2-char-id⟧ = ⟦2-char-id⟧);
       for (;;) {
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧.enter(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧);
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧.enter(⟦2-char-id⟧, dB, ⟦2-char-id⟧);
         if (!⟦2-char-id⟧) return ⟦2-char-id⟧;
         ⟦2-char-id⟧ = ⟦2-char-id⟧
       }
```

</details>

<details>
<summary>Hunk 548 · Change · +4 / -4</summary>

```diff
@@ -14303,17 +14303,17 @@
         return new ⟦2-char-id⟧(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
       }
       getChild(⟦2-char-id⟧) {
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧(this, JJ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧(this, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
         return ⟦2-char-id⟧.length ? ⟦2-char-id⟧[0] : null
       }
       getChildren(⟦2-char-id⟧) {
-        return ⟦2-char-id⟧(this, JJ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
+        return ⟦2-char-id⟧(this, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
       }
       resolve(⟦2-char-id⟧) {
-        return ⟦2-char-id⟧(this, JJ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
+        return ⟦2-char-id⟧(this, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
       }
       resolveInner(⟦2-char-id⟧) {
-        return ⟦2-char-id⟧(this, JJ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
+        return ⟦2-char-id⟧(this, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
       }
       matchContext(⟦2-char-id⟧) {
         return ⟦2-char-id⟧(this.parent, ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 549 · Change · +1 / -1</summary>

```diff
@@ -14336,7 +14336,7 @@
       }
     }
     class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         super(), this._tree = ⟦2-char-id⟧, this.from = ⟦2-char-id⟧, this.index = ⟦2-char-id⟧, this._parent = ⟦2-char-id⟧
       }
       get type() {
```

</details>

<details>
<summary>Hunk 550 · Change · +1 / -1</summary>

```diff
@@ -14348,7 +14348,7 @@
       get ⟦2-char-id⟧() {
         return this.from + this._tree.length
       }
-      nextChild(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      nextChild(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
         for (let ⟦2-char-id⟧ = this;;) {
           for (let {
```

</details>

<details>
<summary>Hunk 551 · Change · +7 / -7</summary>

```diff
@@ -14357,20 +14357,20 @@
             } = ⟦2-char-id⟧._tree, ⟦2-char-id⟧ = ⟦2-char-id⟧ > 0 ? ⟦2-char-id⟧.length : -1; ⟦2-char-id⟧ != ⟦2-char-id⟧; ⟦2-char-id⟧ += ⟦2-char-id⟧) {
             let ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
               ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧] + ⟦2-char-id⟧.from;
-            if (⟦2-char-id⟧ & ⟦2-char-id⟧.EnterBracketed && ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && !⟦2-char-id⟧.overlay && ⟦2-char-id⟧.bracketed && ⟦2-char-id⟧ >= ⟦2-char-id⟧ && ⟦2-char-id⟧ <= ⟦2-char-id⟧ + ⟦2-char-id⟧.length || ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, hJ, ⟦2-char-id⟧ + ⟦2-char-id⟧.length))
+            if (⟦2-char-id⟧ & ⟦2-char-id⟧.EnterBracketed && ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && !⟦2-char-id⟧.overlay && ⟦2-char-id⟧.bracketed && ⟦2-char-id⟧ >= ⟦2-char-id⟧ && ⟦2-char-id⟧ <= ⟦2-char-id⟧ + ⟦2-char-id⟧.length || ⟦2-char-id⟧(⟦2-char-id⟧, dB, kB, ⟦2-char-id⟧ + ⟦2-char-id⟧.length))
               if (⟦2-char-id⟧ instanceof ⟦2-char-id⟧) {
                 if (⟦2-char-id⟧ & ⟦2-char-id⟧.ExcludeBuffers) continue;
-                let ⟦2-char-id⟧ = ⟦2-char-id⟧.findChild(0, ⟦2-char-id⟧.buffer.length, cJ, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧);
-                if (⟦2-char-id⟧ > -1) return new ⟦2-char-id⟧(new ⟦2-char-id⟧(⟦2-char-id⟧, YJ, JJ, ⟦2-char-id⟧), null, ⟦2-char-id⟧)
+                let ⟦2-char-id⟧ = ⟦2-char-id⟧.findChild(0, ⟦2-char-id⟧.buffer.length, TB, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧);
+                if (⟦2-char-id⟧ > -1) return new ⟦2-char-id⟧(new ⟦2-char-id⟧(⟦2-char-id⟧, oB, BB, ⟦2-char-id⟧), null, ⟦2-char-id⟧)
               } else if (⟦2-char-id⟧ & ⟦2-char-id⟧.IncludeAnonymous || !⟦2-char-id⟧.type.isAnonymous || ⟦2-char-id⟧(⟦2-char-id⟧)) {
               let ⟦2-char-id⟧;
-              if (!(⟦2-char-id⟧ & ⟦2-char-id⟧.IgnoreMounts) && (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && !⟦2-char-id⟧.overlay) return new ⟦2-char-id⟧(⟦2-char-id⟧.tree, hJ, JJ, ⟦2-char-id⟧);
-              let ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, hJ, JJ, ⟦2-char-id⟧);
-              return ⟦2-char-id⟧ & ⟦2-char-id⟧.IncludeAnonymous || !⟦2-char-id⟧.type.isAnonymous ? qJ : ⟦2-char-id⟧.nextChild(⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧.children.length - 1 : 0, cJ, ZJ, FJ, ⟦2-char-id⟧)
+              if (!(⟦2-char-id⟧ & ⟦2-char-id⟧.IgnoreMounts) && (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && !⟦2-char-id⟧.overlay) return new ⟦2-char-id⟧(⟦2-char-id⟧.tree, kB, BB, ⟦2-char-id⟧);
+              let ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, kB, BB, ⟦2-char-id⟧);
+              return ⟦2-char-id⟧ & ⟦2-char-id⟧.IncludeAnonymous || !⟦2-char-id⟧.type.isAnonymous ? YB : ⟦2-char-id⟧.nextChild(⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧.children.length - 1 : 0, TB, dB, VB, ⟦2-char-id⟧)
             }
           }
           if (⟦2-char-id⟧ & ⟦2-char-id⟧.IncludeAnonymous || !⟦2-char-id⟧.type.isAnonymous) return null;
-          if (⟦2-char-id⟧ = ⟦2-char-id⟧.index >= 0 ? ⟦2-char-id⟧.index + cJ : ⟦2-char-id⟧ < 0 ? -1 : ⟦2-char-id⟧._parent._tree.children.length, ⟦2-char-id⟧ = ⟦2-char-id⟧._parent, !⟦2-char-id⟧) return null
+          if (⟦2-char-id⟧ = ⟦2-char-id⟧.index >= 0 ? ⟦2-char-id⟧.index + TB : ⟦2-char-id⟧ < 0 ? -1 : ⟦2-char-id⟧._parent._tree.children.length, ⟦2-char-id⟧ = ⟦2-char-id⟧._parent, !⟦2-char-id⟧) return null
         }
       }
       get firstChild() {
```

</details>

<details>
<summary>Hunk 552 · Change · +2 / -2</summary>

```diff
@@ -14380,10 +14380,10 @@
         return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
       }
       childAfter(⟦2-char-id⟧) {
-        return this.nextChild(0, 1, JJ, 2)
+        return this.nextChild(0, 1, BB, 2)
       }
       childBefore(⟦2-char-id⟧) {
-        return this.nextChild(this._tree.children.length - 1, -1, JJ, -2)
+        return this.nextChild(this._tree.children.length - 1, -1, BB, -2)
       }
       prop(⟦2-char-id⟧) {
         return this._tree.prop(⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 553 · Change · +3 / -3</summary>

```diff
@@ -14398,9 +14398,9 @@
               to: ⟦2-char-id⟧
             }
             of ⟦2-char-id⟧.overlay)
-            if ((⟦2-char-id⟧ > 0 || ⟦2-char-id⟧ ? ⟦2-char-id⟧ <= UJ : ⟦2-char-id⟧ < ⟦2-char-id⟧) && (⟦2-char-id⟧ < 0 || ⟦2-char-id⟧ ? ⟦2-char-id⟧ >= UJ : ⟦2-char-id⟧ > ⟦2-char-id⟧)) return new ⟦2-char-id⟧(⟦2-char-id⟧.tree, ⟦2-char-id⟧.overlay[0].from + this.from, -1, this)
-        }
-        return this.nextChild(0, 1, JJ, cJ, ⟦2-char-id⟧)
+            if ((⟦2-char-id⟧ > 0 || ⟦2-char-id⟧ ? ⟦2-char-id⟧ <= yB : ⟦2-char-id⟧ < ⟦2-char-id⟧) && (⟦2-char-id⟧ < 0 || ⟦2-char-id⟧ ? ⟦2-char-id⟧ >= yB : ⟦2-char-id⟧ > ⟦2-char-id⟧)) return new ⟦2-char-id⟧(⟦2-char-id⟧.tree, ⟦2-char-id⟧.overlay[0].from + this.from, -1, this)
+        }
+        return this.nextChild(0, 1, BB, TB, ⟦2-char-id⟧)
       }
       nextSignificantParent() {
         let ⟦2-char-id⟧ = this;
```

</details>

<details>
<summary>Hunk 554 · Change · +1 / -1</summary>

```diff
@@ -14427,7 +14427,7 @@
       }
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.cursor(),
         ⟦2-char-id⟧ = [];
       if (!⟦2-char-id⟧.firstChild()) return ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 555 · Change · +1 / -1</summary>

```diff
@@ -14436,7 +14436,7 @@
           if (⟦2-char-id⟧ = ⟦2-char-id⟧.type.is(⟦2-char-id⟧), !⟦2-char-id⟧.nextSibling()) return ⟦2-char-id⟧;
       for (;;) {
         if (null != ⟦2-char-id⟧ && ⟦2-char-id⟧.type.is(⟦2-char-id⟧)) return ⟦2-char-id⟧;
-        if (⟦2-char-id⟧.type.is(⟦2-char-id⟧) && ⟦2-char-id⟧.push(⟦2-char-id⟧.node), !⟦2-char-id⟧.nextSibling()) return null == ⟦2-char-id⟧ ? eJ : []
+        if (⟦2-char-id⟧.type.is(⟦2-char-id⟧) && ⟦2-char-id⟧.push(⟦2-char-id⟧.node), !⟦2-char-id⟧.nextSibling()) return null == ⟦2-char-id⟧ ? pB : []
       }
     }
 
```

</details>

<details>
<summary>Hunk 556 · Change · +1 / -1</summary>

```diff
@@ -14452,7 +14452,7 @@
       return !0
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         this.parent = ⟦2-char-id⟧, this.buffer = ⟦2-char-id⟧, this.index = ⟦2-char-id⟧, this.start = ⟦2-char-id⟧
       }
     }
```

</details>

<details>
<summary>Hunk 557 · Change · +3 / -3</summary>

```diff
@@ -14466,13 +14466,13 @@
       get ⟦2-char-id⟧() {
         return this.context.start + this.context.buffer.buffer[this.index + 2]
       }
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         super(), this.context = ⟦2-char-id⟧, this._parent = ⟦2-char-id⟧, this.index = ⟦2-char-id⟧, this.type = ⟦2-char-id⟧.buffer.set.types[⟦2-char-id⟧.buffer.buffer[⟦2-char-id⟧]]
       }
-      child(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      child(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let {
           buffer: ⟦2-char-id⟧
-        } = this.context, ⟦2-char-id⟧ = ⟦2-char-id⟧.findChild(this.index + 4, ⟦2-char-id⟧.buffer[this.index + 3], JJ, ⟦2-char-id⟧ - this.context.start, ⟦2-char-id⟧);
+        } = this.context, ⟦2-char-id⟧ = ⟦2-char-id⟧.findChild(this.index + 4, ⟦2-char-id⟧.buffer[this.index + 3], BB, ⟦2-char-id⟧ - this.context.start, ⟦2-char-id⟧);
         return ⟦2-char-id⟧ < 0 ? null : new ⟦2-char-id⟧(this.context, this, ⟦2-char-id⟧)
       }
       get firstChild() {
```

</details>

<details>
<summary>Hunk 558 · Change · +2 / -2</summary>

```diff
@@ -14482,10 +14482,10 @@
         return this.child(-1, 0, 4)
       }
       childAfter(⟦2-char-id⟧) {
-        return this.child(1, JJ, 2)
+        return this.child(1, BB, 2)
       }
       childBefore(⟦2-char-id⟧) {
-        return this.child(-1, JJ, -2)
+        return this.child(-1, BB, -2)
       }
       prop(⟦2-char-id⟧) {
         return this.type.prop(⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 559 · Change · +1 / -1</summary>

```diff
@@ -14501,7 +14501,7 @@
         return this._parent || this.context.parent.nextSignificantParent()
       }
       externalSibling(⟦2-char-id⟧) {
-        return this._parent ? null : this.context.parent.nextChild(this.context.index + ⟦2-char-id⟧, JJ, 0, 4)
+        return this._parent ? null : this.context.parent.nextChild(this.context.index + ⟦2-char-id⟧, BB, 0, 4)
       }
       get nextSibling() {
         let {
```

</details>

<details>
<summary>Hunk 560 · Change · +3 / -3</summary>

```diff
@@ -14528,9 +14528,9 @@
           ⟦2-char-id⟧ = ⟦2-char-id⟧.buffer[this.index + 3];
         if (⟦2-char-id⟧ > ⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.buffer[this.index + 1];
-          ⟦2-char-id⟧.push(⟦2-char-id⟧.slice(⟦2-char-id⟧, UJ, ⟦2-char-id⟧)), ⟦2-char-id⟧.push(0)
-        }
-        return new ⟦2-char-id⟧(this.type, JJ, cJ, this.to - this.from)
+          ⟦2-char-id⟧.push(⟦2-char-id⟧.slice(⟦2-char-id⟧, yB, ⟦2-char-id⟧)), ⟦2-char-id⟧.push(0)
+        }
+        return new ⟦2-char-id⟧(this.type, BB, TB, this.to - this.from)
       }
       toString() {
         return this.context.buffer.childString(this.index)
```

</details>

<details>
<summary>Hunk 561 · Change · +1 / -1</summary>

```diff
@@ -14547,7 +14547,7 @@
       }
       let ⟦2-char-id⟧ = ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ && ⟦2-char-id⟧.index < 0 ? null : ⟦2-char-id⟧.parent,
         ⟦2-char-id⟧ = ⟦2-char-id⟧.slice();
-      return ⟦2-char-id⟧ ? ⟦2-char-id⟧[⟦2-char-id⟧] = FJ : ⟦2-char-id⟧.splice(⟦2-char-id⟧, 1), new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
+      return ⟦2-char-id⟧ ? ⟦2-char-id⟧[⟦2-char-id⟧] = VB : ⟦2-char-id⟧.splice(⟦2-char-id⟧, 1), new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
     }
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 562 · Change · +3 / -3</summary>

```diff
@@ -14587,11 +14587,11 @@
       toString() {
         return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
       }
-      enterChild(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-        if (!this.buffer) return this.yield(this._tree.nextChild(⟦2-char-id⟧ < 0 ? this._tree._tree.children.length - 1 : 0, JJ, cJ, ZJ, this.mode));
+      enterChild(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+        if (!this.buffer) return this.yield(this._tree.nextChild(⟦2-char-id⟧ < 0 ? this._tree._tree.children.length - 1 : 0, BB, TB, dB, this.mode));
         let {
           buffer: ⟦2-char-id⟧
-        } = this.buffer, ⟦2-char-id⟧ = ⟦2-char-id⟧.findChild(this.index + 4, ⟦2-char-id⟧.buffer[this.index + 3], JJ, ⟦2-char-id⟧ - this.buffer.start, ⟦2-char-id⟧);
+        } = this.buffer, ⟦2-char-id⟧ = ⟦2-char-id⟧.findChild(this.index + 4, ⟦2-char-id⟧.buffer[this.index + 3], BB, ⟦2-char-id⟧ - this.buffer.start, ⟦2-char-id⟧);
         return !(⟦2-char-id⟧ < 0) && (this.stack.push(this.index), this.yieldBuf(⟦2-char-id⟧))
       }
       firstChild() {
```

</details>

<details>
<summary>Hunk 563 · Change · +3 / -3</summary>

```diff
@@ -14601,14 +14601,14 @@
         return this.enterChild(-1, 0, 4)
       }
       childAfter(⟦2-char-id⟧) {
-        return this.enterChild(1, JJ, 2)
+        return this.enterChild(1, BB, 2)
       }
       childBefore(⟦2-char-id⟧) {
-        return this.enterChild(-1, JJ, -2)
+        return this.enterChild(-1, BB, -2)
       }
       enter(⟦2-char-id⟧, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
-        return this.buffer ? !(⟦2-char-id⟧ & ⟦2-char-id⟧.ExcludeBuffers) && this.enterChild(1, JJ, ⟦2-char-id⟧) : this.yield(this._tree.enter(⟦2-char-id⟧, cJ, ⟦2-char-id⟧))
+        return this.buffer ? !(⟦2-char-id⟧ & ⟦2-char-id⟧.ExcludeBuffers) && this.enterChild(1, BB, ⟦2-char-id⟧) : this.yield(this._tree.enter(⟦2-char-id⟧, TB, ⟦2-char-id⟧))
       }
       parent() {
         if (!this.buffer) return this.yieldNode(this.mode & ⟦2-char-id⟧.IncludeAnonymous ? this._tree._parent : this._tree.parent);
```

</details>

<details>
<summary>Hunk 564 · Change · +1 / -1</summary>

```diff
@@ -14617,7 +14617,7 @@
         return this.buffer = null, this.yieldNode(⟦2-char-id⟧)
       }
       sibling(⟦2-char-id⟧) {
-        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + ⟦2-char-id⟧, JJ, 0, 4, this.mode));
+        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + ⟦2-char-id⟧, BB, 0, 4, this.mode));
         let {
           buffer: ⟦2-char-id⟧
         } = this.buffer, ⟦2-char-id⟧ = this.stack.length - 1;
```

</details>

<details>
<summary>Hunk 565 · Change · +1 / -1</summary>

```diff
@@ -14628,7 +14628,7 @@
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.buffer[this.index + 3];
           if (⟦2-char-id⟧ < (⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧.buffer.length : ⟦2-char-id⟧.buffer[this.stack[⟦2-char-id⟧] + 3])) return this.yieldBuf(⟦2-char-id⟧)
         }
-        return ⟦2-char-id⟧ < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + ⟦2-char-id⟧, JJ, 0, 4, this.mode))
+        return ⟦2-char-id⟧ < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + ⟦2-char-id⟧, BB, 0, 4, this.mode))
       }
       nextSibling() {
         return this.sibling(1)
```

</details>

<details>
<summary>Hunk 566 · Change · +1 / -1</summary>

```diff
@@ -14637,7 +14637,7 @@
         return this.sibling(-1)
       }
       atLastNode(⟦2-char-id⟧) {
-        let ⟦2-char-id⟧, ZJ, {
+        let ⟦2-char-id⟧, dB, {
           buffer: ⟦2-char-id⟧
         } = this;
         if (⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 567 · Change · +2 / -2</summary>

```diff
@@ -14684,8 +14684,8 @@
       moveTo(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
         for (;
-          (this.from == this.to || (⟦2-char-id⟧ < 1 ? this.from >= JJ : this.from > ⟦2-char-id⟧) || (⟦2-char-id⟧ > -1 ? this.to <= JJ : this.to < ⟦2-char-id⟧)) && this.parent(););
-        for (; this.enterChild(1, JJ, ⟦2-char-id⟧););
+          (this.from == this.to || (⟦2-char-id⟧ < 1 ? this.from >= BB : this.from > ⟦2-char-id⟧) || (⟦2-char-id⟧ > -1 ? this.to <= BB : this.to < ⟦2-char-id⟧)) && this.parent(););
+        for (; this.enterChild(1, BB, ⟦2-char-id⟧););
         return this
       }
       get node() {
```

</details>

<details>
<summary>Hunk 568 · Change · +1 / -1</summary>

```diff
@@ -14693,7 +14693,7 @@
         let ⟦2-char-id⟧ = this.bufferNode,
           ⟦2-char-id⟧ = null,
           ⟦2-char-id⟧ = 0;
-        if (⟦2-char-id⟧ && ⟦2-char-id⟧.context == this.buffer) JJ: for (let ⟦2-char-id⟧ = this.index, ⟦2-char-id⟧ = this.stack.length; ⟦2-char-id⟧ >= 0;) {
+        if (⟦2-char-id⟧ && ⟦2-char-id⟧.context == this.buffer) BB: for (let ⟦2-char-id⟧ = this.index, ⟦2-char-id⟧ = this.stack.length; ⟦2-char-id⟧ >= 0;) {
           for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧; ⟦2-char-id⟧ = ⟦2-char-id⟧._parent)
             if (⟦2-char-id⟧.index == ⟦2-char-id⟧) {
               if (⟦2-char-id⟧ == this.index) return ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 569 · Change · +2 / -2</summary>

```diff
@@ -14701,8 +14701,8 @@
               break ⟦2-char-id⟧
             } ⟦2-char-id⟧ = this.stack[--⟦2-char-id⟧]
         }
-        for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < this.stack.length; ⟦2-char-id⟧++) ⟦2-char-id⟧ = new ⟦2-char-id⟧(this.buffer, cJ, this.stack[⟦2-char-id⟧]);
-        return this.bufferNode = new ⟦2-char-id⟧(this.buffer, cJ, this.index)
+        for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < this.stack.length; ⟦2-char-id⟧++) ⟦2-char-id⟧ = new ⟦2-char-id⟧(this.buffer, TB, this.stack[⟦2-char-id⟧]);
+        return this.bufferNode = new ⟦2-char-id⟧(this.buffer, TB, this.index)
       }
       get tree() {
         return this.buffer ? null : this._tree._tree
```

</details>

<details>
<summary>Hunk 570 · Change · +1 / -1</summary>

```diff
@@ -14732,7 +14732,7 @@
           types: ⟦2-char-id⟧
         } = ⟦2-char-id⟧.set;
         for (let ⟦2-char-id⟧ = ⟦2-char-id⟧.length - 1, ⟦2-char-id⟧ = this.stack.length - 1; ⟦2-char-id⟧ >= 0; ⟦2-char-id⟧--) {
-          if (⟦2-char-id⟧ < 0) return ⟦2-char-id⟧(this._tree, JJ, ⟦2-char-id⟧);
+          if (⟦2-char-id⟧ < 0) return ⟦2-char-id⟧(this._tree, BB, ⟦2-char-id⟧);
           let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.buffer[this.stack[⟦2-char-id⟧]]];
           if (!⟦2-char-id⟧.isAnonymous) {
             if (⟦2-char-id⟧[⟦2-char-id⟧] && ⟦2-char-id⟧[⟦2-char-id⟧] != ⟦2-char-id⟧.name) return !1;
```

</details>

<details>
<summary>Hunk 571 · Change · +2 / -2</summary>

```diff
@@ -14765,13 +14765,13 @@
       return ⟦2-char-id⟧
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, yB, pB, lB, JB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = 0;
       for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧ += ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧]);
       let ⟦2-char-id⟧ = Math.ceil(1.5 * ⟦2-char-id⟧ / 8),
         ⟦2-char-id⟧ = [],
         ⟦2-char-id⟧ = [];
-      return function ⟦2-char-id⟧(⟦2-char-id⟧, FJ, UJ, XJ, ⟦2-char-id⟧) {
+      return function ⟦2-char-id⟧(⟦2-char-id⟧, VB, yB, lB, ⟦2-char-id⟧) {
         for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧;) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧,
             ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
```

</details>

<details>
<summary>Hunk 572 · Change · +3 / -3</summary>

```diff
@@ -14790,17 +14790,17 @@
             ⟦2-char-id⟧.push(⟦2-char-id⟧[⟦2-char-id⟧])
           } else {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ - 1] + ⟦2-char-id⟧[⟦2-char-id⟧ - 1].length - ⟦2-char-id⟧;
-            ⟦2-char-id⟧.push(⟦2-char-id⟧(⟦2-char-id⟧, ZJ, FJ, UJ, jJ, sJ, cJ, null, ⟦2-char-id⟧))
+            ⟦2-char-id⟧.push(⟦2-char-id⟧(⟦2-char-id⟧, dB, VB, yB, gB, OB, TB, null, ⟦2-char-id⟧))
           }
           ⟦2-char-id⟧.push(⟦2-char-id⟧ + ⟦2-char-id⟧ - ⟦2-char-id⟧)
         }
-      }(⟦2-char-id⟧, ZJ, FJ, UJ, 0), (⟦2-char-id⟧ || ⟦2-char-id⟧)(⟦2-char-id⟧, DJ, ⟦2-char-id⟧)
+      }(⟦2-char-id⟧, dB, VB, yB, 0), (⟦2-char-id⟧ || ⟦2-char-id⟧)(⟦2-char-id⟧, LB, ⟦2-char-id⟧)
     }
     class ⟦2-char-id⟧ {
       constructor() {
         this.map = new WeakMap
       }
-      setBuffer(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      setBuffer(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = this.map.get(⟦2-char-id⟧);
         ⟦2-char-id⟧ || this.map.set(⟦2-char-id⟧, ⟦2-char-id⟧ = new Map), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧)
       }
```

</details>

<details>
<summary>Hunk 573 · Change · +1 / -1</summary>

```diff
@@ -14822,7 +14822,7 @@
       }
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
           ⟦2-char-id⟧ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
         this.from = ⟦2-char-id⟧, this.to = ⟦2-char-id⟧, this.tree = ⟦2-char-id⟧, this.offset = ⟦2-char-id⟧, this.open = (⟦2-char-id⟧ ? 1 : 0) | (⟦2-char-id⟧ ? 2 : 0)
```

</details>

<details>
<summary>Hunk 574 · Change · +1 / -1</summary>

```diff
@@ -14836,7 +14836,7 @@
       static addTree(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
           ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-          ⟦2-char-id⟧ = [new ⟦2-char-id⟧(0, ⟦2-char-id⟧.length, JJ, 0, !1, ⟦2-char-id⟧)];
+          ⟦2-char-id⟧ = [new ⟦2-char-id⟧(0, ⟦2-char-id⟧.length, BB, 0, !1, ⟦2-char-id⟧)];
         for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.to > ⟦2-char-id⟧.length && ⟦2-char-id⟧.push(⟦2-char-id⟧);
         return ⟦2-char-id⟧
       }
```

</details>

<details>
<summary>Hunk 575 · Change · +1 / -1</summary>

```diff
@@ -14855,7 +14855,7 @@
               if (⟦2-char-id⟧ >= ⟦2-char-id⟧.from || ⟦2-char-id⟧ <= ⟦2-char-id⟧.to || ⟦2-char-id⟧) {
                 let ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧.from, ⟦2-char-id⟧) - ⟦2-char-id⟧,
                   ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.to, ⟦2-char-id⟧) - ⟦2-char-id⟧;
-                ⟦2-char-id⟧ = ⟦2-char-id⟧ >= ⟦2-char-id⟧ ? null : new ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧.tree, ⟦2-char-id⟧.offset + ⟦2-char-id⟧, ⟦2-char-id⟧ > 0, !!⟦2-char-id⟧)
+                ⟦2-char-id⟧ = ⟦2-char-id⟧ >= ⟦2-char-id⟧ ? null : new ⟦2-char-id⟧(⟦2-char-id⟧, dB, ⟦2-char-id⟧.tree, ⟦2-char-id⟧.offset + ⟦2-char-id⟧, ⟦2-char-id⟧ > 0, !!⟦2-char-id⟧)
               }
               if (⟦2-char-id⟧ && ⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧.to > ⟦2-char-id⟧) break;
               ⟦2-char-id⟧ = ⟦2-char-id⟧ < ⟦2-char-id⟧.length ? ⟦2-char-id⟧[⟦2-char-id⟧++] : null
```

</details>

<details>
<summary>Hunk 576 · Change · +3 / -3</summary>

```diff
@@ -14867,11 +14867,11 @@
       }
     }
     class ⟦2-char-id⟧ {
-      startParse(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      startParse(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         return "string" == typeof ⟦2-char-id⟧ && (⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧)), ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.length ? ⟦2-char-id⟧.map((⟦2-char-id⟧ => new ⟦2-char-id⟧(⟦2-char-id⟧.from, ⟦2-char-id⟧.to))) : [new ⟦2-char-id⟧(0, 0)] : [new ⟦2-char-id⟧(0, ⟦2-char-id⟧.length)], this.createParse(⟦2-char-id⟧, ⟦2-char-id⟧ || [], ⟦2-char-id⟧)
       }
-      parse(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-        let ⟦2-char-id⟧ = this.startParse(⟦2-char-id⟧, cJ, ⟦2-char-id⟧);
+      parse(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+        let ⟦2-char-id⟧ = this.startParse(⟦2-char-id⟧, TB, ⟦2-char-id⟧);
         for (;;) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.advance();
           if (⟦2-char-id⟧) return ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 577 · Change · +8 / -8</summary>

```diff
@@ -14899,28 +14899,28 @@
       perNode: !0
     })
   },
-  40084: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  40069: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      d: () => ⟦2-char-id⟧,
-      e: () => ⟦2-char-id⟧,
+      b: () => ⟦2-char-id⟧,
       f: () => ⟦2-char-id⟧,
-      j: () => ⟦2-char-id⟧
+      g: () => ⟦2-char-id⟧,
+      h: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(40080);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(40064);
     let ⟦2-char-id⟧ = 0;
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         this.name = ⟦2-char-id⟧, this.set = ⟦2-char-id⟧, this.base = ⟦2-char-id⟧, this.modified = ⟦2-char-id⟧, this.id = ⟦2-char-id⟧++
       }
       toString() {
         let {
           name: ⟦2-char-id⟧
         } = this;
-        for (let ⟦2-char-id⟧ of this.modified) ⟦2-char-id⟧.name && (⟦2-char-id⟧ = `${cJ.name}(${JJ})`);
+        for (let ⟦2-char-id⟧ of this.modified) ⟦2-char-id⟧.name && (⟦2-char-id⟧ = `${TB.name}(${BB})`);
         return ⟦2-char-id⟧
       }
       static define(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        let ⟦2-char-id⟧ = "string" == typeof ⟦2-char-id⟧ ? JJ : "?";
+        let ⟦2-char-id⟧ = "string" == typeof ⟦2-char-id⟧ ? BB : "?";
         if (⟦2-char-id⟧ instanceof ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧), null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.base) throw new Error("Can not derive from a modified tag");
         let ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, [], null, []);
         if (⟦2-char-id⟧.set.push(⟦2-char-id⟧), ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 578 · Change · +1 / -1</summary>

```diff
@@ -14929,7 +14929,7 @@
       }
       static defineModifier(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧);
-        return ⟦2-char-id⟧ => ⟦2-char-id⟧.modified.indexOf(⟦2-char-id⟧) > -1 ? JJ : ⟦2-char-id⟧.get(⟦2-char-id⟧.base || ⟦2-char-id⟧, ⟦2-char-id⟧.modified.concat(⟦2-char-id⟧).sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.id - ⟦2-char-id⟧.id)))
+        return ⟦2-char-id⟧ => ⟦2-char-id⟧.modified.indexOf(⟦2-char-id⟧) > -1 ? BB : ⟦2-char-id⟧.get(⟦2-char-id⟧.base || ⟦2-char-id⟧, ⟦2-char-id⟧.modified.concat(⟦2-char-id⟧).sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.id - ⟦2-char-id⟧.id)))
       }
     }
     let ⟦2-char-id⟧ = 0;
```

</details>

<details>
<summary>Hunk 579 · Change · +2 / -2</summary>

```diff
@@ -14941,11 +14941,11 @@
         if (!⟦2-char-id⟧.length) return ⟦2-char-id⟧;
         let ⟦2-char-id⟧ = ⟦2-char-id⟧[0].instances.find((⟦2-char-id⟧ => {
           return ⟦2-char-id⟧.base == ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.modified, ⟦2-char-id⟧.length == ⟦2-char-id⟧.length && ⟦2-char-id⟧.every(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ == ⟦2-char-id⟧[⟦2-char-id⟧])));
-          var ⟦2-char-id⟧, UJ
+          var ⟦2-char-id⟧, yB
         }));
         if (⟦2-char-id⟧) return ⟦2-char-id⟧;
         let ⟦2-char-id⟧ = [],
-          ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.name, FJ, JJ, ⟦2-char-id⟧);
+          ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.name, VB, BB, ⟦2-char-id⟧);
         for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.instances.push(⟦2-char-id⟧);
         let ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = [
```

</details>

<details>
<summary>Hunk 580 · Change · +5 / -5</summary>

```diff
@@ -14991,25 +14991,25 @@
             let ⟦2-char-id⟧ = ⟦2-char-id⟧.length - 1,
               ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
             if (!⟦2-char-id⟧) throw new RangeError("Invalid path: " + ⟦2-char-id⟧);
-            let ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, UJ, ⟦2-char-id⟧ > 0 ? ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧) : null);
+            let ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, yB, ⟦2-char-id⟧ > 0 ? ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧) : null);
             ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧.sort(⟦2-char-id⟧[⟦2-char-id⟧])
           }
       }
       return ⟦2-char-id⟧.add(⟦2-char-id⟧)
     }
-    const ⟦2-char-id⟧ = new ⟦2-char-id⟧.h({
+    const ⟦2-char-id⟧ = new ⟦2-char-id⟧.i({
       combine(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        let ⟦2-char-id⟧, FJ, ⟦2-char-id⟧;
+        let ⟦2-char-id⟧, VB, ⟦2-char-id⟧;
         for (; ⟦2-char-id⟧ || ⟦2-char-id⟧;) {
           if (!⟦2-char-id⟧ || ⟦2-char-id⟧ && ⟦2-char-id⟧.depth >= ⟦2-char-id⟧.depth ? (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.next) : (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.next), ⟦2-char-id⟧ && ⟦2-char-id⟧.mode == ⟦2-char-id⟧.mode && !⟦2-char-id⟧.context && !⟦2-char-id⟧.context) continue;
           let ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.tags, ⟦2-char-id⟧.mode, ⟦2-char-id⟧.context);
-          ⟦2-char-id⟧ ? ⟦2-char-id⟧.next = eJ : ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧
+          ⟦2-char-id⟧ ? ⟦2-char-id⟧.next = pB : ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧
         }
         return ⟦2-char-id⟧
       }
     });
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         this.tags = ⟦2-char-id⟧, this.mode = ⟦2-char-id⟧, this.context = ⟦2-char-id⟧, this.next = ⟦2-char-id⟧
       }
       get opaque() {
```

</details>

<details>
<summary>Hunk 581 · Change · +1 / -1</summary>

```diff
@@ -15043,7 +15043,7 @@
             for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.set) {
               let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.id];
               if (⟦2-char-id⟧) {
-                ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧ + " " + FJ : ⟦2-char-id⟧;
+                ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧ + " " + VB : ⟦2-char-id⟧;
                 break
               }
             }
```

</details>

<details>
<summary>Hunk 582 · Change · +7 / -7</summary>

```diff
@@ -15053,24 +15053,24 @@
       }
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
         ⟦2-char-id⟧ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ⟦2-char-id⟧.length,
-        ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, Array.isArray(⟦2-char-id⟧) ? cJ : [⟦2-char-id⟧], ⟦2-char-id⟧);
-      ⟦2-char-id⟧.highlightRange(⟦2-char-id⟧.cursor(), FJ, UJ, "", ⟦2-char-id⟧.highlighters), ⟦2-char-id⟧.flush(⟦2-char-id⟧)
+        ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, Array.isArray(⟦2-char-id⟧) ? TB : [⟦2-char-id⟧], ⟦2-char-id⟧);
+      ⟦2-char-id⟧.highlightRange(⟦2-char-id⟧.cursor(), VB, yB, "", ⟦2-char-id⟧.highlighters), ⟦2-char-id⟧.flush(⟦2-char-id⟧)
     }
     ⟦2-char-id⟧.empty = new ⟦2-char-id⟧([], 2, null);
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         this.at = ⟦2-char-id⟧, this.highlighters = ⟦2-char-id⟧, this.span = ⟦2-char-id⟧, this.class = ""
       }
       startSpan(⟦2-char-id⟧, ⟦2-char-id⟧) {
         ⟦2-char-id⟧ != this.class && (this.flush(⟦2-char-id⟧), ⟦2-char-id⟧ > this.at && (this.at = ⟦2-char-id⟧), this.class = ⟦2-char-id⟧)
       }
       flush(⟦2-char-id⟧) {
-        ⟦2-char-id⟧ > this.at && this.class && this.span(this.at, JJ, this.class)
-      }
-      highlightRange(⟦2-char-id⟧, cJ, ZJ, UJ, ⟦2-char-id⟧) {
+        ⟦2-char-id⟧ > this.at && this.class && this.span(this.at, BB, this.class)
+      }
+      highlightRange(⟦2-char-id⟧, TB, dB, yB, ⟦2-char-id⟧) {
         let {
           type: ⟦2-char-id⟧,
           from: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 583 · Change · +4 / -4</summary>

```diff
@@ -15088,23 +15088,23 @@
             let ⟦2-char-id⟧ = null;
             for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) {
               let ⟦2-char-id⟧ = ⟦2-char-id⟧.style(⟦2-char-id⟧);
-              ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧ + " " + JJ : ⟦2-char-id⟧)
+              ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧ + " " + BB : ⟦2-char-id⟧)
             }
             return ⟦2-char-id⟧
           }(⟦2-char-id⟧, ⟦2-char-id⟧.tags);
         if (⟦2-char-id⟧ && (⟦2-char-id⟧ && (⟦2-char-id⟧ += " "), ⟦2-char-id⟧ += ⟦2-char-id⟧, 1 == ⟦2-char-id⟧.mode && (⟦2-char-id⟧ += (⟦2-char-id⟧ ? " " : "") + ⟦2-char-id⟧)), this.startSpan(Math.max(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧), ⟦2-char-id⟧.opaque) return;
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧.tree && ⟦2-char-id⟧.tree.prop(⟦2-char-id⟧.h.mounted);
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧.tree && ⟦2-char-id⟧.tree.prop(⟦2-char-id⟧.i.mounted);
         if (⟦2-char-id⟧ && ⟦2-char-id⟧.overlay) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.node.enter(⟦2-char-id⟧.overlay[0].from + ⟦2-char-id⟧, 1),
             ⟦2-char-id⟧ = this.highlighters.filter((⟦2-char-id⟧ => !⟦2-char-id⟧.scope || ⟦2-char-id⟧.scope(⟦2-char-id⟧.tree.type))),
             ⟦2-char-id⟧ = ⟦2-char-id⟧.firstChild();
           for (let ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = ⟦2-char-id⟧;; ⟦2-char-id⟧++) {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧ < ⟦2-char-id⟧.overlay.length ? ⟦2-char-id⟧.overlay[⟦2-char-id⟧] : null,
-              ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.from + AJ : ⟦2-char-id⟧,
+              ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.from + JB : ⟦2-char-id⟧,
               ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, ⟦2-char-id⟧),
               ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧, ⟦2-char-id⟧);
             if (⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧)
-              for (; ⟦2-char-id⟧.from < ⟦2-char-id⟧ && (this.highlightRange(⟦2-char-id⟧, fJ, xJ, UJ, ⟦2-char-id⟧), this.startSpan(Math.min(⟦2-char-id⟧, ⟦2-char-id⟧.to), ⟦2-char-id⟧), !(⟦2-char-id⟧.to >= ⟦2-char-id⟧) && ⟦2-char-id⟧.nextSibling()););
+              for (; ⟦2-char-id⟧.from < ⟦2-char-id⟧ && (this.highlightRange(⟦2-char-id⟧, HB, EB, yB, ⟦2-char-id⟧), this.startSpan(Math.min(⟦2-char-id⟧, ⟦2-char-id⟧.to), ⟦2-char-id⟧), !(⟦2-char-id⟧.to >= ⟦2-char-id⟧) && ⟦2-char-id⟧.nextSibling()););
             if (!⟦2-char-id⟧ || ⟦2-char-id⟧ > ⟦2-char-id⟧) break;
             ⟦2-char-id⟧ = ⟦2-char-id⟧.to + ⟦2-char-id⟧, ⟦2-char-id⟧ > ⟦2-char-id⟧ && (this.highlightRange(⟦2-char-id⟧.cursor(), Math.max(⟦2-char-id⟧, ⟦2-char-id⟧.from + ⟦2-char-id⟧), Math.min(⟦2-char-id⟧, ⟦2-char-id⟧), "", ⟦2-char-id⟧), this.startSpan(Math.min(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧))
           }
```

</details>

<details>
<summary>Hunk 584 · Change · +1 / -1</summary>

```diff
@@ -15114,7 +15114,7 @@
           do {
             if (!(⟦2-char-id⟧.to <= ⟦2-char-id⟧)) {
               if (⟦2-char-id⟧.from >= ⟦2-char-id⟧) break;
-              this.highlightRange(⟦2-char-id⟧, cJ, ZJ, UJ, ⟦2-char-id⟧), this.startSpan(Math.min(⟦2-char-id⟧, ⟦2-char-id⟧.to), ⟦2-char-id⟧)
+              this.highlightRange(⟦2-char-id⟧, TB, dB, yB, ⟦2-char-id⟧), this.startSpan(Math.min(⟦2-char-id⟧, ⟦2-char-id⟧.to), ⟦2-char-id⟧)
             }
           } while (⟦2-char-id⟧.nextSibling());
           ⟦2-char-id⟧.parent()
```

</details>

<details>
<summary>Hunk 585 · Change · +15 / -15</summary>

```diff
@@ -15318,24 +15318,24 @@
       class: "tok-punctuation"
     }])
   },
-  40092: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  40078: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      b: () => ⟦2-char-id⟧.f,
-      e: () => ⟦2-char-id⟧.t,
-      h: () => ⟦2-char-id⟧.A,
-      k: () => ⟦2-char-id⟧.E,
-      n: () => ⟦2-char-id⟧.k,
-      q: () => ⟦2-char-id⟧,
-      s: () => ⟦2-char-id⟧.G,
-      t: () => ⟦2-char-id⟧.ab
+      c: () => ⟦2-char-id⟧.i,
+      d: () => ⟦2-char-id⟧.r,
+      f: () => ⟦2-char-id⟧.x,
+      g: () => ⟦2-char-id⟧.A,
+      k: () => ⟦2-char-id⟧.n,
+      o: () => ⟦2-char-id⟧,
+      p: () => ⟦2-char-id⟧.R,
+      r: () => ⟦2-char-id⟧.ob
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1278),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1270),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(47),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1265),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1258),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(40036),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(40040),
       ⟦2-char-id⟧ = ⟦2-char-id⟧(40060),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(40065),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(40078),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(40080);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(40064);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       return ⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 586 · Change · +4 / -4</summary>

```diff
@@ -15350,12 +15350,12 @@
     }
     const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, 0),
       ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, 0),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧(⟦2-char-id⟧, cJ, function(⟦2-char-id⟧) {
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧(⟦2-char-id⟧, TB, function(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = [];
-        for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.selection.ws) {
+        for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.selection.ek) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧.from),
-            ⟦2-char-id⟧ = ⟦2-char-id⟧.to <= ⟦2-char-id⟧.to ? FJ : ⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧.to);
-          ⟦2-char-id⟧.from > ⟦2-char-id⟧.from && ⟦2-char-id⟧.from == ⟦2-char-id⟧.to && (⟦2-char-id⟧ = ⟦2-char-id⟧.to == ⟦2-char-id⟧.to + 1 ? FJ : ⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧.to - 1));
+            ⟦2-char-id⟧ = ⟦2-char-id⟧.to <= ⟦2-char-id⟧.to ? VB : ⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧.to);
+          ⟦2-char-id⟧.from > ⟦2-char-id⟧.from && ⟦2-char-id⟧.from == ⟦2-char-id⟧.to && (⟦2-char-id⟧ = ⟦2-char-id⟧.to == ⟦2-char-id⟧.to + 1 ? VB : ⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧.to - 1));
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.length - 1;
           ⟦2-char-id⟧ >= 0 && ⟦2-char-id⟧[⟦2-char-id⟧].to > ⟦2-char-id⟧.from ? ⟦2-char-id⟧[⟦2-char-id⟧].to = ⟦2-char-id⟧.to : ⟦2-char-id⟧.push({
             from: ⟦2-char-id⟧.from + /^\s*/.exec(⟦2-char-id⟧.text)[0].length,
```

</details>

<details>
<summary>Hunk 587 · Change · +4 / -4</summary>

```diff
@@ -15366,17 +15366,17 @@
       }(⟦2-char-id⟧))), 0);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      let ⟦2-char-id⟧ = ⟦2-char-id⟧.languageDataAt("commentTokens", cJ, 1);
+      let ⟦2-char-id⟧ = ⟦2-char-id⟧.languageDataAt("commentTokens", TB, 1);
       return ⟦2-char-id⟧.length ? ⟦2-char-id⟧[0] : {}
     }
     const ⟦2-char-id⟧ = 50;
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      let ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ⟦2-char-id⟧.selection.ws,
+      let ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ⟦2-char-id⟧.selection.ek,
         ⟦2-char-id⟧ = ⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.from).block));
       if (!⟦2-char-id⟧.every((⟦2-char-id⟧ => ⟦2-char-id⟧))) return null;
-      let ⟦2-char-id⟧ = ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => function(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-        let ⟦2-char-id⟧, eJ, {
+      let ⟦2-char-id⟧ = ⟦2-char-id⟧.map(((⟦2-char-id⟧, ⟦2-char-id⟧) => function(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+        let ⟦2-char-id⟧, pB, {
             open: ⟦2-char-id⟧,
             close: ⟦2-char-id⟧
           } = ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 588 · Change · +2 / -2</summary>

```diff
@@ -15443,10 +15443,10 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      let ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ⟦2-char-id⟧.selection.ws,
+      let ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ⟦2-char-id⟧.selection.ek,
         ⟦2-char-id⟧ = [],
         ⟦2-char-id⟧ = -1;
-      JJ: for (let {
+      BB: for (let {
           from: ⟦2-char-id⟧,
           to: ⟦2-char-id⟧
         }
```

</details>

<details>
<summary>Hunk 589 · Change · +1 / -1</summary>

```diff
@@ -15460,7 +15460,7 @@
             ⟦2-char-id⟧ = ⟦2-char-id⟧.from;
             let ⟦2-char-id⟧ = /^\s*/.exec(⟦2-char-id⟧.text)[0].length,
               ⟦2-char-id⟧ = ⟦2-char-id⟧ == ⟦2-char-id⟧.length,
-              ⟦2-char-id⟧ = ⟦2-char-id⟧.text.slice(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧.length) == ⟦2-char-id⟧ ? cJ : -1;
+              ⟦2-char-id⟧ = ⟦2-char-id⟧.text.slice(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧.length) == ⟦2-char-id⟧ ? TB : -1;
             ⟦2-char-id⟧ < ⟦2-char-id⟧.text.length && ⟦2-char-id⟧ < ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧), ⟦2-char-id⟧.push({
               line: ⟦2-char-id⟧,
               comment: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 590 · Change · +5 / -5</summary>

```diff
@@ -15516,11 +15516,11 @@
       }
       return null
     }
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧.d.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.d.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define(),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.p.define({
-        combine: ⟦2-char-id⟧ => (0, ⟦2-char-id⟧.S)(⟦2-char-id⟧, {
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧.c.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.c.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.l.define({
+        combine: ⟦2-char-id⟧ => (0, ⟦2-char-id⟧.P)(⟦2-char-id⟧, {
           minDepth: 100,
           newGroupDelay: 500,
           joinToEvent: (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 591 · Change · +1 / -1</summary>

```diff
@@ -15530,7 +15530,7 @@
           joinToEvent: (⟦2-char-id⟧, ⟦2-char-id⟧) => (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) || ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
         })
       }),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.E.define({
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.A.define({
         create: () => ⟦2-char-id⟧.empty,
         update(⟦2-char-id⟧, ⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.state.facet(⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 592 · Change · +5 / -5</summary>

```diff
@@ -15539,14 +15539,14 @@
             let ⟦2-char-id⟧ = ⟦2-char-id⟧.fromTransaction(⟦2-char-id⟧, ⟦2-char-id⟧.selection),
               ⟦2-char-id⟧ = ⟦2-char-id⟧.side,
               ⟦2-char-id⟧ = 0 == ⟦2-char-id⟧ ? ⟦2-char-id⟧.undone : ⟦2-char-id⟧.done;
-            return ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.length, ⟦2-char-id⟧.minDepth, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.startState.selection), new ⟦2-char-id⟧(0 == ⟦2-char-id⟧ ? ⟦2-char-id⟧.rest : ⟦2-char-id⟧, 0 == ⟦2-char-id⟧ ? XJ : ⟦2-char-id⟧.rest)
+            return ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.length, ⟦2-char-id⟧.minDepth, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.startState.selection), new ⟦2-char-id⟧(0 == ⟦2-char-id⟧ ? ⟦2-char-id⟧.rest : ⟦2-char-id⟧, 0 == ⟦2-char-id⟧ ? lB : ⟦2-char-id⟧.rest)
           }
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.annotation(⟦2-char-id⟧);
-          if ("full" != ⟦2-char-id⟧ && "before" != ⟦2-char-id⟧ || (⟦2-char-id⟧ = ⟦2-char-id⟧.isolate()), !1 === ⟦2-char-id⟧.annotation(⟦2-char-id⟧.J.addToHistory)) return ⟦2-char-id⟧.changes.empty ? JJ : ⟦2-char-id⟧.addMapping(⟦2-char-id⟧.changes.desc);
+          if ("full" != ⟦2-char-id⟧ && "before" != ⟦2-char-id⟧ || (⟦2-char-id⟧ = ⟦2-char-id⟧.isolate()), !1 === ⟦2-char-id⟧.annotation(⟦2-char-id⟧.G.addToHistory)) return ⟦2-char-id⟧.changes.empty ? BB : ⟦2-char-id⟧.addMapping(⟦2-char-id⟧.changes.desc);
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.fromTransaction(⟦2-char-id⟧),
-            ⟦2-char-id⟧ = ⟦2-char-id⟧.annotation(⟦2-char-id⟧.J.time),
-            ⟦2-char-id⟧ = ⟦2-char-id⟧.annotation(⟦2-char-id⟧.J.userEvent);
-          return ⟦2-char-id⟧ ? ⟦2-char-id⟧ = ⟦2-char-id⟧.addChanges(⟦2-char-id⟧, AJ, qJ, ZJ, ⟦2-char-id⟧) : ⟦2-char-id⟧.selection && (⟦2-char-id⟧ = ⟦2-char-id⟧.addSelection(⟦2-char-id⟧.startState.selection, AJ, qJ, ⟦2-char-id⟧.newGroupDelay)), "full" != ⟦2-char-id⟧ && "after" != ⟦2-char-id⟧ || (⟦2-char-id⟧ = ⟦2-char-id⟧.isolate()), JJ
+            ⟦2-char-id⟧ = ⟦2-char-id⟧.annotation(⟦2-char-id⟧.G.time),
+            ⟦2-char-id⟧ = ⟦2-char-id⟧.annotation(⟦2-char-id⟧.G.userEvent);
+          return ⟦2-char-id⟧ ? ⟦2-char-id⟧ = ⟦2-char-id⟧.addChanges(⟦2-char-id⟧, JB, YB, dB, ⟦2-char-id⟧) : ⟦2-char-id⟧.selection && (⟦2-char-id⟧ = ⟦2-char-id⟧.addSelection(⟦2-char-id⟧.startState.selection, JB, YB, ⟦2-char-id⟧.newGroupDelay)), "full" != ⟦2-char-id⟧ && "after" != ⟦2-char-id⟧ || (⟦2-char-id⟧ = ⟦2-char-id⟧.isolate()), BB
         },
         toJSON: ⟦2-char-id⟧ => ({
           done: ⟦2-char-id⟧.done.map((⟦2-char-id⟧ => ⟦2-char-id⟧.toJSON())),
```

</details>

<details>
<summary>Hunk 593 · Change · +1 / -1</summary>

```diff
@@ -15564,7 +15564,7 @@
         if (!⟦2-char-id⟧ && ⟦2-char-id⟧.readOnly) return !1;
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.field(⟦2-char-id⟧, !1);
         if (!⟦2-char-id⟧) return !1;
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧.pop(⟦2-char-id⟧, FJ, ⟦2-char-id⟧);
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧.pop(⟦2-char-id⟧, VB, ⟦2-char-id⟧);
         return !!⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧), !0)
       }
     }
```

</details>

<details>
<summary>Hunk 594 · Change · +2 / -2</summary>

```diff
@@ -15573,14 +15573,14 @@
       ⟦2-char-id⟧ = ⟦2-char-id⟧(0, !0),
       ⟦2-char-id⟧ = ⟦2-char-id⟧(1, !0);
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
         this.changes = ⟦2-char-id⟧, this.effects = ⟦2-char-id⟧, this.mapped = ⟦2-char-id⟧, this.startSelection = ⟦2-char-id⟧, this.selectionsAfter = ⟦2-char-id⟧
       }
       setSelAfter(⟦2-char-id⟧) {
         return new ⟦2-char-id⟧(this.changes, this.effects, this.mapped, this.startSelection, ⟦2-char-id⟧)
       }
       toJSON() {
-        var ⟦2-char-id⟧, cJ, ⟦2-char-id⟧;
+        var ⟦2-char-id⟧, TB, ⟦2-char-id⟧;
         return {
           changes: null === (⟦2-char-id⟧ = this.changes) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.toJSON(),
           mapped: null === (⟦2-char-id⟧ = this.mapped) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.toJSON(),
```

</details>

<details>
<summary>Hunk 595 · Change · +1 / -1</summary>

```diff
@@ -15589,7 +15589,7 @@
         }
       }
       static fromJSON(⟦2-char-id⟧) {
-        return new ⟦2-char-id⟧(⟦2-char-id⟧.changes && ⟦2-char-id⟧.ChangeSet.fromJSON(⟦2-char-id⟧.changes), [], ⟦2-char-id⟧.mapped && ⟦2-char-id⟧.h.fromJSON(⟦2-char-id⟧.mapped), ⟦2-char-id⟧.startSelection && ⟦2-char-id⟧.m.fromJSON(⟦2-char-id⟧.startSelection), ⟦2-char-id⟧.selectionsAfter.map(⟦2-char-id⟧.m.fromJSON))
+        return new ⟦2-char-id⟧(⟦2-char-id⟧.changes && ⟦2-char-id⟧.ChangeSet.fromJSON(⟦2-char-id⟧.changes), [], ⟦2-char-id⟧.mapped && ⟦2-char-id⟧.d.fromJSON(⟦2-char-id⟧.mapped), ⟦2-char-id⟧.startSelection && ⟦2-char-id⟧.h.fromJSON(⟦2-char-id⟧.startSelection), ⟦2-char-id⟧.selectionsAfter.map(⟦2-char-id⟧.h.fromJSON))
       }
       static fromTransaction(⟦2-char-id⟧, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 596 · Change · +8 / -8</summary>

```diff
@@ -15597,21 +15597,21 @@
           let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
           ⟦2-char-id⟧.length && (⟦2-char-id⟧ = ⟦2-char-id⟧.concat(⟦2-char-id⟧))
         }
-        return !⟦2-char-id⟧.length && ⟦2-char-id⟧.changes.empty ? null : new ⟦2-char-id⟧(⟦2-char-id⟧.changes.invert(⟦2-char-id⟧.startState.doc), ZJ, void 0, ⟦2-char-id⟧ || ⟦2-char-id⟧.startState.selection, ⟦2-char-id⟧)
+        return !⟦2-char-id⟧.length && ⟦2-char-id⟧.changes.empty ? null : new ⟦2-char-id⟧(⟦2-char-id⟧.changes.invert(⟦2-char-id⟧.startState.doc), dB, void 0, ⟦2-char-id⟧ || ⟦2-char-id⟧.startState.selection, ⟦2-char-id⟧)
       }
       static selection(⟦2-char-id⟧) {
-        return new ⟦2-char-id⟧(void 0, WJ, void 0, void 0, ⟦2-char-id⟧)
-      }
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+        return new ⟦2-char-id⟧(void 0, rB, void 0, void 0, ⟦2-char-id⟧)
+      }
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧ + 1 > ⟦2-char-id⟧ + 20 ? ⟦2-char-id⟧ - ⟦2-char-id⟧ - 1 : 0,
         ⟦2-char-id⟧ = ⟦2-char-id⟧.slice(⟦2-char-id⟧, ⟦2-char-id⟧);
-      return ⟦2-char-id⟧.push(⟦2-char-id⟧), eJ
+      return ⟦2-char-id⟧.push(⟦2-char-id⟧), pB
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧.length ? ⟦2-char-id⟧.length ? ⟦2-char-id⟧.concat(⟦2-char-id⟧) : JJ : ⟦2-char-id⟧
+      return ⟦2-char-id⟧.length ? ⟦2-char-id⟧.length ? ⟦2-char-id⟧.concat(⟦2-char-id⟧) : BB : ⟦2-char-id⟧
     }
     const ⟦2-char-id⟧ = [],
       ⟦2-char-id⟧ = 200;
```

</details>

<details>
<summary>Hunk 597 · Change · +1 / -1</summary>

```diff
@@ -15620,7 +15620,7 @@
       if (⟦2-char-id⟧.length) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.length - 1],
           ⟦2-char-id⟧ = ⟦2-char-id⟧.selectionsAfter.slice(Math.max(0, ⟦2-char-id⟧.selectionsAfter.length - ⟦2-char-id⟧));
-        return ⟦2-char-id⟧.length && ⟦2-char-id⟧[⟦2-char-id⟧.length - 1].eq(⟦2-char-id⟧) ? JJ : (⟦2-char-id⟧.push(⟦2-char-id⟧), bJ(⟦2-char-id⟧, ⟦2-char-id⟧.length - 1, 1⟦2-char-id⟧, ⟦2-char-id⟧.setSelAfter(⟦2-char-id⟧)))
+        return ⟦2-char-id⟧.length && ⟦2-char-id⟧[⟦2-char-id⟧.length - 1].eq(⟦2-char-id⟧) ? BB : (⟦2-char-id⟧.push(⟦2-char-id⟧), FB(⟦2-char-id⟧, ⟦2-char-id⟧.length - 1, 1⟦2-char-id⟧, ⟦2-char-id⟧.setSelAfter(⟦2-char-id⟧)))
       }
       return [⟦2-char-id⟧.selection([⟦2-char-id⟧])]
     }
```

</details>

<details>
<summary>Hunk 598 · Change · +1 / -1</summary>

```diff
@@ -15628,7 +15628,7 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.length - 1],
         ⟦2-char-id⟧ = ⟦2-char-id⟧.slice();
-      return ⟦2-char-id⟧[⟦2-char-id⟧.length - 1] = ⟦2-char-id⟧.setSelAfter(⟦2-char-id⟧.selectionsAfter.slice(0, ⟦2-char-id⟧.selectionsAfter.length - 1)), ZJ
+      return ⟦2-char-id⟧[⟦2-char-id⟧.length - 1] = ⟦2-char-id⟧.setSelAfter(⟦2-char-id⟧.selectionsAfter.slice(0, ⟦2-char-id⟧.selectionsAfter.length - 1)), dB
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 599 · Change · +4 / -4</summary>

```diff
@@ -15636,23 +15636,23 @@
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.length,
         ⟦2-char-id⟧ = ⟦2-char-id⟧;
       for (; ⟦2-char-id⟧;) {
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧ - 1], cJ, ⟦2-char-id⟧);
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧ - 1], TB, ⟦2-char-id⟧);
         if (⟦2-char-id⟧.changes && !⟦2-char-id⟧.changes.empty || ⟦2-char-id⟧.effects.length) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧);
-          return ⟦2-char-id⟧[⟦2-char-id⟧ - 1] = ⟦2-char-id⟧, cJ
+          return ⟦2-char-id⟧[⟦2-char-id⟧ - 1] = ⟦2-char-id⟧, TB
         }
         ⟦2-char-id⟧ = ⟦2-char-id⟧.mapped, ⟦2-char-id⟧--, ⟦2-char-id⟧ = ⟦2-char-id⟧.selectionsAfter
       }
       return ⟦2-char-id⟧.length ? [⟦2-char-id⟧.selection(⟦2-char-id⟧)] : ⟦2-char-id⟧
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.selectionsAfter.length ? ⟦2-char-id⟧.selectionsAfter.map((⟦2-char-id⟧ => ⟦2-char-id⟧.map(⟦2-char-id⟧))) : ⟦2-char-id⟧, ⟦2-char-id⟧);
       if (!⟦2-char-id⟧.changes) return ⟦2-char-id⟧.selection(⟦2-char-id⟧);
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.changes.map(⟦2-char-id⟧),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.mapDesc(⟦2-char-id⟧.changes, !0),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.mapped ? ⟦2-char-id⟧.mapped.composeDesc(⟦2-char-id⟧) : ⟦2-char-id⟧;
-      return new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.A.mapEffects(⟦2-char-id⟧.effects, ⟦2-char-id⟧), AJ, ⟦2-char-id⟧.startSelection.map(⟦2-char-id⟧), ⟦2-char-id⟧)
+      return new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.x.mapEffects(⟦2-char-id⟧.effects, ⟦2-char-id⟧), JB, ⟦2-char-id⟧.startSelection.map(⟦2-char-id⟧), ⟦2-char-id⟧)
     }
     const ⟦2-char-id⟧ = /^(input\.type|delete)($|\.)/;
     class ⟦2-char-id⟧ {
```

</details>

<details>
<summary>Hunk 600 · Change · +11 / -11</summary>

```diff
@@ -15664,30 +15664,30 @@
       isolate() {
         return this.prevTime ? new ⟦2-char-id⟧(this.done, this.undone) : this
       }
-      addChanges(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+      addChanges(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = this.done,
           ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.length - 1];
         return ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧.changes && !⟦2-char-id⟧.changes.empty && ⟦2-char-id⟧.changes && (!⟦2-char-id⟧ || ⟦2-char-id⟧.test(⟦2-char-id⟧)) && (!⟦2-char-id⟧.selectionsAfter.length && ⟦2-char-id⟧ - this.prevTime < ⟦2-char-id⟧.newGroupDelay && ⟦2-char-id⟧.joinToEvent(⟦2-char-id⟧, function(⟦2-char-id⟧, ⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = [],
             ⟦2-char-id⟧ = !1;
-          return ⟦2-char-id⟧.iterChangedRanges(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.push(⟦2-char-id⟧, ⟦2-char-id⟧))), ⟦2-char-id⟧.iterChangedRanges(((⟦2-char-id⟧, cJ, UJ, ⟦2-char-id⟧) => {
+          return ⟦2-char-id⟧.iterChangedRanges(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.push(⟦2-char-id⟧, ⟦2-char-id⟧))), ⟦2-char-id⟧.iterChangedRanges(((⟦2-char-id⟧, TB, yB, ⟦2-char-id⟧) => {
             for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length;) {
               let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧++],
                 ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧++];
               ⟦2-char-id⟧ >= ⟦2-char-id⟧ && ⟦2-char-id⟧ <= ⟦2-char-id⟧ && (⟦2-char-id⟧ = !0)
             }
-          })), FJ
-        }(⟦2-char-id⟧.changes, ⟦2-char-id⟧.changes)) || "input.type.compose" == ⟦2-char-id⟧) ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.length - 1, ⟦2-char-id⟧.minDepth, new ⟦2-char-id⟧(⟦2-char-id⟧.changes.compose(⟦2-char-id⟧.changes), wJ(⟦2-char-id⟧.A.mapEffects(⟦2-char-id⟧.effects, ⟦2-char-id⟧.changes), ⟦2-char-id⟧.effects), ⟦2-char-id⟧.mapped, ⟦2-char-id⟧.startSelection, ⟦2-char-id⟧)) : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.length, ⟦2-char-id⟧.minDepth, ⟦2-char-id⟧), new ⟦2-char-id⟧(⟦2-char-id⟧, WJ, cJ, ⟦2-char-id⟧)
-      }
-      addSelection(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+          })), VB
+        }(⟦2-char-id⟧.changes, ⟦2-char-id⟧.changes)) || "input.type.compose" == ⟦2-char-id⟧) ? ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.length - 1, ⟦2-char-id⟧.minDepth, new ⟦2-char-id⟧(⟦2-char-id⟧.changes.compose(⟦2-char-id⟧.changes), KB(⟦2-char-id⟧.x.mapEffects(⟦2-char-id⟧.effects, ⟦2-char-id⟧.changes), ⟦2-char-id⟧.effects), ⟦2-char-id⟧.mapped, ⟦2-char-id⟧.startSelection, ⟦2-char-id⟧)) : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.length, ⟦2-char-id⟧.minDepth, ⟦2-char-id⟧), new ⟦2-char-id⟧(⟦2-char-id⟧, rB, TB, ⟦2-char-id⟧)
+      }
+      addSelection(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = this.done.length ? this.done[this.done.length - 1].selectionsAfter : ⟦2-char-id⟧;
-        return ⟦2-char-id⟧.length > 0 && ⟦2-char-id⟧ - this.prevTime < ⟦2-char-id⟧ && ⟦2-char-id⟧ == this.prevUserEvent && ⟦2-char-id⟧ && /^select($|\.)/.test(⟦2-char-id⟧) && (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.length - 1], ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧.ws.length == ⟦2-char-id⟧.ws.length && 0 === ⟦2-char-id⟧.ws.filter(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.empty != ⟦2-char-id⟧.ws[⟦2-char-id⟧].empty)).length) ? this : new ⟦2-char-id⟧(⟦2-char-id⟧(this.done, ⟦2-char-id⟧), this.undone, cJ, ⟦2-char-id⟧);
-        var ⟦2-char-id⟧, XJ
+        return ⟦2-char-id⟧.length > 0 && ⟦2-char-id⟧ - this.prevTime < ⟦2-char-id⟧ && ⟦2-char-id⟧ == this.prevUserEvent && ⟦2-char-id⟧ && /^select($|\.)/.test(⟦2-char-id⟧) && (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.length - 1], ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧.ek.length == ⟦2-char-id⟧.ek.length && 0 === ⟦2-char-id⟧.ek.filter(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.empty != ⟦2-char-id⟧.ek[⟦2-char-id⟧].empty)).length) ? this : new ⟦2-char-id⟧(⟦2-char-id⟧(this.done, ⟦2-char-id⟧), this.undone, TB, ⟦2-char-id⟧);
+        var ⟦2-char-id⟧, lB
       }
       addMapping(⟦2-char-id⟧) {
-        return new ⟦2-char-id⟧(⟦2-char-id⟧(this.done, ⟦2-char-id⟧), kJ(this.undone, ⟦2-char-id⟧), this.prevTime, this.prevUserEvent)
-      }
-      pop(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+        return new ⟦2-char-id⟧(⟦2-char-id⟧(this.done, ⟦2-char-id⟧), PB(this.undone, ⟦2-char-id⟧), this.prevTime, this.prevUserEvent)
+      }
+      pop(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = 0 == ⟦2-char-id⟧ ? this.done : this.undone;
         if (0 == ⟦2-char-id⟧.length) return null;
         let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.length - 1],
```

</details>

<details>
<summary>Hunk 601 · Change · +1 / -1</summary>

```diff
@@ -15703,7 +15703,7 @@
           scrollIntoView: !0
         });
         if (⟦2-char-id⟧.changes) {
-          let ⟦2-char-id⟧ = 1 == ⟦2-char-id⟧.length ? WJ : ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧.length - 1);
+          let ⟦2-char-id⟧ = 1 == ⟦2-char-id⟧.length ? rB : ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧.length - 1);
           return ⟦2-char-id⟧.mapped && (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.mapped)), ⟦2-char-id⟧.update({
             changes: ⟦2-char-id⟧.changes,
             selection: ⟦2-char-id⟧.startSelection,
```

</details>

<details>
<summary>Hunk 602 · Change · +1 / -1</summary>

```diff
@@ -15747,7 +15747,7 @@
     }];
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧.m.create(⟦2-char-id⟧.ws.map(⟦2-char-id⟧), ⟦2-char-id⟧.mainIndex)
+      return ⟦2-char-id⟧.h.create(⟦2-char-id⟧.ek.map(⟦2-char-id⟧), ⟦2-char-id⟧.mainIndex)
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 603 · Change · +1 / -1</summary>

```diff
@@ -15767,7 +15767,7 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧ ? ⟦2-char-id⟧.to : ⟦2-char-id⟧.from)
+      return ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧ ? ⟦2-char-id⟧.to : ⟦2-char-id⟧.from)
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 604 · Change · +10 / -10</summary>

```diff
@@ -15775,38 +15775,38 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return ⟦2-char-id⟧.textDirectionAt(⟦2-char-id⟧.state.selection.main.head) == ⟦2-char-id⟧.e.LTR
+      return ⟦2-char-id⟧.textDirectionAt(⟦2-char-id⟧.state.selection.main.head) == ⟦2-char-id⟧.f.LTR
     }
     const ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, !⟦2-char-id⟧(⟦2-char-id⟧)),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, RJ(⟦2-char-id⟧));
+      ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, qB(⟦2-char-id⟧));
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       return ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.empty ? ⟦2-char-id⟧.moveByGroup(⟦2-char-id⟧, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)))
     }
     "undefined" != typeof Intl && Intl.Segmenter;
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       if (⟦2-char-id⟧.type.prop(⟦2-char-id⟧)) return !0;
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.to - ⟦2-char-id⟧.from;
       return ⟦2-char-id⟧ && (⟦2-char-id⟧ > 2 || /[^\s,.;:]/.test(⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧.from, ⟦2-char-id⟧.to))) || ⟦2-char-id⟧.firstChild
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-      let ⟦2-char-id⟧, UJ, ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.ub)(⟦2-char-id⟧).resolveInner(⟦2-char-id⟧.head),
-        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.h.closedBy : ⟦2-char-id⟧.h.openedBy;
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+      let ⟦2-char-id⟧, yB, ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.hb)(⟦2-char-id⟧).resolveInner(⟦2-char-id⟧.head),
+        ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.i.closedBy : ⟦2-char-id⟧.i.openedBy;
       for (let ⟦2-char-id⟧ = ⟦2-char-id⟧.head;;) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.childAfter(⟦2-char-id⟧) : ⟦2-char-id⟧.childBefore(⟦2-char-id⟧);
         if (!⟦2-char-id⟧) break;
-        ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) ? ⟦2-char-id⟧ = cJ : ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.to : ⟦2-char-id⟧.from
-      }
-      return ⟦2-char-id⟧ = ⟦2-char-id⟧.type.prop(⟦2-char-id⟧) && (⟦2-char-id⟧ = ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.fb)(⟦2-char-id⟧, ⟦2-char-id⟧.from, 1) : (0, ⟦2-char-id⟧.fb)(⟦2-char-id⟧, ⟦2-char-id⟧.to, -1)) && ⟦2-char-id⟧.matched ? ⟦2-char-id⟧ ? ⟦2-char-id⟧.end.to : ⟦2-char-id⟧.end.from : ⟦2-char-id⟧ ? ⟦2-char-id⟧.to : ⟦2-char-id⟧.from, ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧, ⟦2-char-id⟧ ? -1 : 1)
+        ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) ? ⟦2-char-id⟧ = TB : ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.to : ⟦2-char-id⟧.from
+      }
+      return ⟦2-char-id⟧ = ⟦2-char-id⟧.type.prop(⟦2-char-id⟧) && (⟦2-char-id⟧ = ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.Y)(⟦2-char-id⟧, ⟦2-char-id⟧.from, 1) : (0, ⟦2-char-id⟧.Y)(⟦2-char-id⟧, ⟦2-char-id⟧.to, -1)) && ⟦2-char-id⟧.matched ? ⟦2-char-id⟧ ? ⟦2-char-id⟧.end.to : ⟦2-char-id⟧.end.from : ⟦2-char-id⟧ ? ⟦2-char-id⟧.to : ⟦2-char-id⟧.from, ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧, ⟦2-char-id⟧ ? -1 : 1)
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       return ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => {
         if (!⟦2-char-id⟧.empty) return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.moveVertically(⟦2-char-id⟧, ⟦2-char-id⟧);
-        return ⟦2-char-id⟧.head != ⟦2-char-id⟧.head ? FJ : ⟦2-char-id⟧.moveToLineBoundary(⟦2-char-id⟧, ⟦2-char-id⟧)
+        return ⟦2-char-id⟧.head != ⟦2-char-id⟧.head ? VB : ⟦2-char-id⟧.moveToLineBoundary(⟦2-char-id⟧, ⟦2-char-id⟧)
       }))
     }
     const ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, !1),
```

</details>

<details>
<summary>Hunk 605 · Change · +1 / -1</summary>

```diff
@@ -15817,7 +15817,7 @@
         ⟦2-char-id⟧ = 0,
         ⟦2-char-id⟧ = 0;
       if (⟦2-char-id⟧) {
-        for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.state.facet(⟦2-char-id⟧.f.scrollMargins)) {
+        for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.state.facet(⟦2-char-id⟧.i.scrollMargins)) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
           (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.top) && (⟦2-char-id⟧ = Math.max(null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.top, ⟦2-char-id⟧)), (null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.bottom) && (⟦2-char-id⟧ = Math.max(null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.bottom, ⟦2-char-id⟧))
         }
```

</details>

<details>
<summary>Hunk 606 · Change · +2 / -2</summary>

```diff
@@ -15836,14 +15836,14 @@
         {
           state: ⟦2-char-id⟧
         } = ⟦2-char-id⟧,
-        ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.selection, (⟦2-char-id⟧ => ⟦2-char-id⟧.empty ? ⟦2-char-id⟧.moveVertically(⟦2-char-id⟧, cJ, ⟦2-char-id⟧.height) : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)));
+        ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.selection, (⟦2-char-id⟧ => ⟦2-char-id⟧.empty ? ⟦2-char-id⟧.moveVertically(⟦2-char-id⟧, TB, ⟦2-char-id⟧.height) : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)));
       if (⟦2-char-id⟧.eq(⟦2-char-id⟧.selection)) return !1;
       if (⟦2-char-id⟧.selfScroll) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.coordsAtPos(⟦2-char-id⟧.selection.main.head),
           ⟦2-char-id⟧ = ⟦2-char-id⟧.scrollDOM.getBoundingClientRect(),
           ⟦2-char-id⟧ = ⟦2-char-id⟧.top + ⟦2-char-id⟧.marginTop,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.bottom - ⟦2-char-id⟧.marginBottom;
-        ⟦2-char-id⟧ && ⟦2-char-id⟧.top > ⟦2-char-id⟧ && ⟦2-char-id⟧.bottom < ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.f.scrollIntoView(⟦2-char-id⟧.main.head, {
+        ⟦2-char-id⟧ && ⟦2-char-id⟧.top > ⟦2-char-id⟧ && ⟦2-char-id⟧.bottom < ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.i.scrollIntoView(⟦2-char-id⟧.main.head, {
           y: "start",
           yMargin: ⟦2-char-id⟧.top - ⟦2-char-id⟧
         }))
```

</details>

<details>
<summary>Hunk 607 · Change · +6 / -6</summary>

```diff
@@ -15855,24 +15855,24 @@
     const ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, !1),
       ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, !0);
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.lineBlockAt(⟦2-char-id⟧.head),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.moveToLineBoundary(⟦2-char-id⟧, ⟦2-char-id⟧);
-      if (⟦2-char-id⟧.head == ⟦2-char-id⟧.head && ⟦2-char-id⟧.head != (⟦2-char-id⟧ ? ⟦2-char-id⟧.to : ⟦2-char-id⟧.from) && (⟦2-char-id⟧ = ⟦2-char-id⟧.moveToLineBoundary(⟦2-char-id⟧, ZJ, !1)), !⟦2-char-id⟧ && ⟦2-char-id⟧.head == ⟦2-char-id⟧.from && ⟦2-char-id⟧.length) {
+      if (⟦2-char-id⟧.head == ⟦2-char-id⟧.head && ⟦2-char-id⟧.head != (⟦2-char-id⟧ ? ⟦2-char-id⟧.to : ⟦2-char-id⟧.from) && (⟦2-char-id⟧ = ⟦2-char-id⟧.moveToLineBoundary(⟦2-char-id⟧, dB, !1)), !⟦2-char-id⟧ && ⟦2-char-id⟧.head == ⟦2-char-id⟧.from && ⟦2-char-id⟧.length) {
         let ⟦2-char-id⟧ = /^\s*/.exec(⟦2-char-id⟧.state.sliceDoc(⟦2-char-id⟧.from, Math.min(⟦2-char-id⟧.from + 100, ⟦2-char-id⟧.to)))[0].length;
-        ⟦2-char-id⟧ && ⟦2-char-id⟧.head != ⟦2-char-id⟧.from + ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧.from + ⟦2-char-id⟧))
+        ⟦2-char-id⟧ && ⟦2-char-id⟧.head != ⟦2-char-id⟧.from + ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧.from + ⟦2-char-id⟧))
       }
       return ⟦2-char-id⟧
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = !1,
         ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.selection, (⟦2-char-id⟧ => {
-          let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.fb)(⟦2-char-id⟧, ⟦2-char-id⟧.head, -1) || (0, ⟦2-char-id⟧.fb)(⟦2-char-id⟧, ⟦2-char-id⟧.head, 1) || ⟦2-char-id⟧.head > 0 && (0, ⟦2-char-id⟧.fb)(⟦2-char-id⟧, ⟦2-char-id⟧.head - 1, 1) || ⟦2-char-id⟧.head < ⟦2-char-id⟧.doc.length && (0, ⟦2-char-id⟧.fb)(⟦2-char-id⟧, ⟦2-char-id⟧.head + 1, -1);
+          let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.Y)(⟦2-char-id⟧, ⟦2-char-id⟧.head, -1) || (0, ⟦2-char-id⟧.Y)(⟦2-char-id⟧, ⟦2-char-id⟧.head, 1) || ⟦2-char-id⟧.head > 0 && (0, ⟦2-char-id⟧.Y)(⟦2-char-id⟧, ⟦2-char-id⟧.head - 1, 1) || ⟦2-char-id⟧.head < ⟦2-char-id⟧.doc.length && (0, ⟦2-char-id⟧.Y)(⟦2-char-id⟧, ⟦2-char-id⟧.head + 1, -1);
           if (!⟦2-char-id⟧ || !⟦2-char-id⟧.end) return ⟦2-char-id⟧;
           ⟦2-char-id⟧ = !0;
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.start.from == ⟦2-char-id⟧.head ? ⟦2-char-id⟧.end.to : ⟦2-char-id⟧.end.from;
-          return ⟦2-char-id⟧ ? ⟦2-char-id⟧.m.range(⟦2-char-id⟧.anchor, ⟦2-char-id⟧) : ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧)
+          return ⟦2-char-id⟧ ? ⟦2-char-id⟧.h.range(⟦2-char-id⟧.anchor, ⟦2-char-id⟧) : ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧)
         }));
       return !!⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)), !0)
     }
```

</details>

<details>
<summary>Hunk 608 · Change · +1 / -1</summary>

```diff
@@ -15880,7 +15880,7 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.state.selection, (⟦2-char-id⟧ => {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
-        return ⟦2-char-id⟧.m.range(⟦2-char-id⟧.anchor, ⟦2-char-id⟧.head, ⟦2-char-id⟧.goalColumn, ⟦2-char-id⟧.bidiLevel || void 0, ⟦2-char-id⟧.assoc)
+        return ⟦2-char-id⟧.h.range(⟦2-char-id⟧.anchor, ⟦2-char-id⟧.head, ⟦2-char-id⟧.goalColumn, ⟦2-char-id⟧.bidiLevel || void 0, ⟦2-char-id⟧.assoc)
       }));
       return !⟦2-char-id⟧.eq(⟦2-char-id⟧.state.selection) && (⟦2-char-id⟧.dispatch(⟦2-char-id⟧(⟦2-char-id⟧.state, ⟦2-char-id⟧)), !0)
     }
```

</details>

<details>
<summary>Hunk 609 · Change · +1 / -1</summary>

```diff
@@ -15889,7 +15889,7 @@
       return ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.moveByChar(⟦2-char-id⟧, ⟦2-char-id⟧)))
     }
     const ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, !⟦2-char-id⟧(⟦2-char-id⟧)),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, RJ(⟦2-char-id⟧));
+      ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, qB(⟦2-char-id⟧));
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       return ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.moveByGroup(⟦2-char-id⟧, ⟦2-char-id⟧)))
```

</details>

<details>
<summary>Hunk 610 · Change · +1 / -1</summary>

```diff
@@ -15902,7 +15902,7 @@
       ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, !0);
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.moveVertically(⟦2-char-id⟧, cJ, Zc(⟦2-char-id⟧).height)))
+      return ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.moveVertically(⟦2-char-id⟧, TB, dT(⟦2-char-id⟧).height)))
     }
     const ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, !1),
       ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, !0),
```

</details>

<details>
<summary>Hunk 611 · Change · +2 / -2</summary>

```diff
@@ -15948,8 +15948,8 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
       let {
         state: ⟦2-char-id⟧
-      } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.selection, ⟦2-char-id⟧ = ⟦2-char-id⟧.selection.ws.slice();
-      for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.selection.ws) {
+      } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.selection, ⟦2-char-id⟧ = ⟦2-char-id⟧.selection.ek.slice();
+      for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.selection.ek) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧.head);
         if (⟦2-char-id⟧ ? ⟦2-char-id⟧.to < ⟦2-char-id⟧.state.doc.length : ⟦2-char-id⟧.from > 0)
           for (let ⟦2-char-id⟧ = ⟦2-char-id⟧;;) {
```

</details>

<details>
<summary>Hunk 612 · Change · +1 / -1</summary>

```diff
@@ -15962,7 +15962,7 @@
             ⟦2-char-id⟧ = ⟦2-char-id⟧
           }
       }
-      return ⟦2-char-id⟧.length != ⟦2-char-id⟧.ws.length && (⟦2-char-id⟧.dispatch(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.m.create(⟦2-char-id⟧, ⟦2-char-id⟧.length - 1))), !0)
+      return ⟦2-char-id⟧.length != ⟦2-char-id⟧.ek.length && (⟦2-char-id⟧.dispatch(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.h.create(⟦2-char-id⟧, ⟦2-char-id⟧.length - 1))), !0)
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 613 · Change · +2 / -2</summary>

```diff
@@ -15978,8 +15978,8 @@
           } = ⟦2-char-id⟧;
           if (⟦2-char-id⟧ == ⟦2-char-id⟧) {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
-            ⟦2-char-id⟧ < ⟦2-char-id⟧ ? (⟦2-char-id⟧ = "delete.backward", ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, XJ, !1)) : ⟦2-char-id⟧ > ⟦2-char-id⟧ && (⟦2-char-id⟧ = "delete.forward", ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, XJ, !0)), ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, ⟦2-char-id⟧)
-          } else ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, UJ, !1), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, eJ, !0);
+            ⟦2-char-id⟧ < ⟦2-char-id⟧ ? (⟦2-char-id⟧ = "delete.backward", ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, lB, !1)) : ⟦2-char-id⟧ > ⟦2-char-id⟧ && (⟦2-char-id⟧ = "delete.forward", ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, lB, !0)), ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, ⟦2-char-id⟧)
+          } else ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, yB, !1), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, pB, !0);
           return ⟦2-char-id⟧ == ⟦2-char-id⟧ ? {
             range: ⟦2-char-id⟧
           } : {
```

</details>

<details>
<summary>Hunk 614 · Change · +10 / -10</summary>

```diff
@@ -15987,35 +15987,35 @@
               from: ⟦2-char-id⟧,
               to: ⟦2-char-id⟧
             },
-            range: ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧, ⟦2-char-id⟧ < ⟦2-char-id⟧.head ? -1 : 1)
+            range: ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧, ⟦2-char-id⟧ < ⟦2-char-id⟧.head ? -1 : 1)
           }
         }));
       return !⟦2-char-id⟧.changes.empty && (⟦2-char-id⟧.dispatch(⟦2-char-id⟧.update(⟦2-char-id⟧, {
         scrollIntoView: !0,
         userEvent: ⟦2-char-id⟧,
-        effects: "delete.selection" == ⟦2-char-id⟧ ? ⟦2-char-id⟧.f.announce.of(⟦2-char-id⟧.phrase("Selection deleted")) : void 0
+        effects: "delete.selection" == ⟦2-char-id⟧ ? ⟦2-char-id⟧.i.announce.of(⟦2-char-id⟧.phrase("Selection deleted")) : void 0
       })), !0)
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-      if (⟦2-char-id⟧ instanceof ⟦2-char-id⟧.f)
-        for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.state.facet(⟦2-char-id⟧.f.atomicRanges).map((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧)))) ⟦2-char-id⟧.between(⟦2-char-id⟧, cJ, ((⟦2-char-id⟧, ⟦2-char-id⟧) => {
-          ⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧ > ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧ ? FJ : ⟦2-char-id⟧)
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+      if (⟦2-char-id⟧ instanceof ⟦2-char-id⟧.i)
+        for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.state.facet(⟦2-char-id⟧.i.atomicRanges).map((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧)))) ⟦2-char-id⟧.between(⟦2-char-id⟧, TB, ((⟦2-char-id⟧, ⟦2-char-id⟧) => {
+          ⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧ > ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧ ? VB : ⟦2-char-id⟧)
         }));
       return ⟦2-char-id⟧
     }
-    const ⟦2-char-id⟧ = (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => {
-        let ⟦2-char-id⟧, eJ, ⟦2-char-id⟧ = ⟦2-char-id⟧.from,
+    const ⟦2-char-id⟧ = (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => {
+        let ⟦2-char-id⟧, pB, ⟦2-char-id⟧ = ⟦2-char-id⟧.from,
           {
             state: ⟦2-char-id⟧
           } = ⟦2-char-id⟧,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧);
         if (⟦2-char-id⟧ && !⟦2-char-id⟧ && ⟦2-char-id⟧ > ⟦2-char-id⟧.from && ⟦2-char-id⟧ < ⟦2-char-id⟧.from + 200 && !/[^ \t]/.test(⟦2-char-id⟧ = ⟦2-char-id⟧.text.slice(0, ⟦2-char-id⟧ - ⟦2-char-id⟧.from))) {
           if ("\t" == ⟦2-char-id⟧[⟦2-char-id⟧.length - 1]) return ⟦2-char-id⟧ - 1;
-          let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.U)(⟦2-char-id⟧, ⟦2-char-id⟧.tabSize) % (0, ⟦2-char-id⟧.S)(⟦2-char-id⟧) || (0, ⟦2-char-id⟧.S)(⟦2-char-id⟧);
+          let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.R)(⟦2-char-id⟧, ⟦2-char-id⟧.tabSize) % (0, ⟦2-char-id⟧.J)(⟦2-char-id⟧) || (0, ⟦2-char-id⟧.J)(⟦2-char-id⟧);
           for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧ && " " == ⟦2-char-id⟧[⟦2-char-id⟧.length - 1 - ⟦2-char-id⟧]; ⟦2-char-id⟧++) ⟦2-char-id⟧--;
           ⟦2-char-id⟧ = ⟦2-char-id⟧
-        } else ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.X)(⟦2-char-id⟧.text, ⟦2-char-id⟧ - ⟦2-char-id⟧.from, cJ, ⟦2-char-id⟧) + ⟦2-char-id⟧.from, ⟦2-char-id⟧ == ⟦2-char-id⟧ && ⟦2-char-id⟧.number != (⟦2-char-id⟧ ? ⟦2-char-id⟧.doc.lines : 1) ? ⟦2-char-id⟧ += ⟦2-char-id⟧ ? 1 : -1 : !⟦2-char-id⟧ && /[\ufe00-\ufe0f]/.test(⟦2-char-id⟧.text.slice(⟦2-char-id⟧ - ⟦2-char-id⟧.from, ⟦2-char-id⟧ - ⟦2-char-id⟧.from)) && (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.X)(⟦2-char-id⟧.text, ⟦2-char-id⟧ - ⟦2-char-id⟧.from, !1, !1) + ⟦2-char-id⟧.from);
+        } else ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.S)(⟦2-char-id⟧.text, ⟦2-char-id⟧ - ⟦2-char-id⟧.from, TB, ⟦2-char-id⟧) + ⟦2-char-id⟧.from, ⟦2-char-id⟧ == ⟦2-char-id⟧ && ⟦2-char-id⟧.number != (⟦2-char-id⟧ ? ⟦2-char-id⟧.doc.lines : 1) ? ⟦2-char-id⟧ += ⟦2-char-id⟧ ? 1 : -1 : !⟦2-char-id⟧ && /[\ufe00-\ufe0f]/.test(⟦2-char-id⟧.text.slice(⟦2-char-id⟧ - ⟦2-char-id⟧.from, ⟦2-char-id⟧ - ⟦2-char-id⟧.from)) && (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.S)(⟦2-char-id⟧.text, ⟦2-char-id⟧ - ⟦2-char-id⟧.from, !1, !1) + ⟦2-char-id⟧.from);
         return ⟦2-char-id⟧
       })),
       ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, !1, !0),
```

</details>

<details>
<summary>Hunk 615 · Change · +1 / -1</summary>

```diff
@@ -16032,7 +16032,7 @@
             ⟦2-char-id⟧ == ⟦2-char-id⟧.head && ⟦2-char-id⟧.number != (⟦2-char-id⟧ ? ⟦2-char-id⟧.doc.lines : 1) && (⟦2-char-id⟧ += ⟦2-char-id⟧ ? 1 : -1);
             break
           }
-          let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.X)(⟦2-char-id⟧.text, ⟦2-char-id⟧ - ⟦2-char-id⟧.from, ⟦2-char-id⟧) + ⟦2-char-id⟧.from,
+          let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.S)(⟦2-char-id⟧.text, ⟦2-char-id⟧ - ⟦2-char-id⟧.from, ⟦2-char-id⟧) + ⟦2-char-id⟧.from,
             ⟦2-char-id⟧ = ⟦2-char-id⟧.text.slice(Math.min(⟦2-char-id⟧, ⟦2-char-id⟧) - ⟦2-char-id⟧.from, Math.max(⟦2-char-id⟧, ⟦2-char-id⟧) - ⟦2-char-id⟧.from),
             ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
           if (null != ⟦2-char-id⟧ && ⟦2-char-id⟧ != ⟦2-char-id⟧) break;
```

</details>

<details>
<summary>Hunk 616 · Change · +4 / -4</summary>

```diff
@@ -16045,23 +16045,23 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = [],
         ⟦2-char-id⟧ = -1;
-      for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.selection.ws) {
+      for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.selection.ek) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧.from),
           ⟦2-char-id⟧ = ⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧.to);
         if (⟦2-char-id⟧.empty || ⟦2-char-id⟧.to != ⟦2-char-id⟧.from || (⟦2-char-id⟧ = ⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧.to - 1)), ⟦2-char-id⟧ >= ⟦2-char-id⟧.number) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.length - 1];
-          ⟦2-char-id⟧.to = ⟦2-char-id⟧.to, ⟦2-char-id⟧.ws.push(⟦2-char-id⟧)
+          ⟦2-char-id⟧.to = ⟦2-char-id⟧.to, ⟦2-char-id⟧.ek.push(⟦2-char-id⟧)
         } else ⟦2-char-id⟧.push({
           from: ⟦2-char-id⟧.from,
           to: ⟦2-char-id⟧.to,
-          ws: [⟦2-char-id⟧]
+          ek: [⟦2-char-id⟧]
         });
         ⟦2-char-id⟧ = ⟦2-char-id⟧.number + 1
       }
       return ⟦2-char-id⟧
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       if (⟦2-char-id⟧.readOnly) return !1;
       let ⟦2-char-id⟧ = [],
         ⟦2-char-id⟧ = [];
```

</details>

<details>
<summary>Hunk 617 · Change · +1 / -1</summary>

```diff
@@ -16077,7 +16077,7 @@
             from: ⟦2-char-id⟧.from,
             insert: ⟦2-char-id⟧.text + ⟦2-char-id⟧.lineBreak
           });
-          for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.ws) ⟦2-char-id⟧.push(⟦2-char-id⟧.m.range(Math.min(⟦2-char-id⟧.doc.length, ⟦2-char-id⟧.anchor + ⟦2-char-id⟧), Math.min(⟦2-char-id⟧.doc.length, ⟦2-char-id⟧.head + ⟦2-char-id⟧)))
+          for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.ek) ⟦2-char-id⟧.push(⟦2-char-id⟧.h.range(Math.min(⟦2-char-id⟧.doc.length, ⟦2-char-id⟧.anchor + ⟦2-char-id⟧), Math.min(⟦2-char-id⟧.doc.length, ⟦2-char-id⟧.head + ⟦2-char-id⟧)))
         } else {
           ⟦2-char-id⟧.push({
             from: ⟦2-char-id⟧.from,
```

</details>

<details>
<summary>Hunk 618 · Change · +3 / -3</summary>

```diff
@@ -16086,18 +16086,18 @@
             from: ⟦2-char-id⟧.to,
             insert: ⟦2-char-id⟧.lineBreak + ⟦2-char-id⟧.text
           });
-          for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.ws) ⟦2-char-id⟧.push(⟦2-char-id⟧.m.range(⟦2-char-id⟧.anchor - ⟦2-char-id⟧, ⟦2-char-id⟧.head - ⟦2-char-id⟧))
+          for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.ek) ⟦2-char-id⟧.push(⟦2-char-id⟧.h.range(⟦2-char-id⟧.anchor - ⟦2-char-id⟧, ⟦2-char-id⟧.head - ⟦2-char-id⟧))
         }
       }
       return !!⟦2-char-id⟧.length && (⟦2-char-id⟧(⟦2-char-id⟧.update({
         changes: ⟦2-char-id⟧,
         scrollIntoView: !0,
-        selection: ⟦2-char-id⟧.m.create(⟦2-char-id⟧, ⟦2-char-id⟧.selection.mainIndex),
+        selection: ⟦2-char-id⟧.h.create(⟦2-char-id⟧, ⟦2-char-id⟧.selection.mainIndex),
         userEvent: "move.line"
       })), !0)
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       if (⟦2-char-id⟧.readOnly) return !1;
       let ⟦2-char-id⟧ = [];
       for (let ⟦2-char-id⟧ of ⟦2-char-id⟧(⟦2-char-id⟧)) ⟦2-char-id⟧ ? ⟦2-char-id⟧.push({
```

</details>

<details>
<summary>Hunk 619 · Change · +9 / -9</summary>

```diff
@@ -16133,33 +16133,33 @@
               from: ⟦2-char-id⟧,
               to: ⟦2-char-id⟧
             };
-            let ⟦2-char-id⟧, ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.ub)(⟦2-char-id⟧).resolveInner(⟦2-char-id⟧),
+            let ⟦2-char-id⟧, ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.hb)(⟦2-char-id⟧).resolveInner(⟦2-char-id⟧),
               ⟦2-char-id⟧ = ⟦2-char-id⟧.childBefore(⟦2-char-id⟧),
               ⟦2-char-id⟧ = ⟦2-char-id⟧.childAfter(⟦2-char-id⟧);
-            return ⟦2-char-id⟧ && ⟦2-char-id⟧ && ⟦2-char-id⟧.to <= ⟦2-char-id⟧ && ⟦2-char-id⟧.from >= ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.type.prop(⟦2-char-id⟧.h.closedBy)) && ⟦2-char-id⟧.indexOf(⟦2-char-id⟧.name) > -1 && ⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧.to).from == ⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧.from).from && !/\S/.test(⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧.to, ⟦2-char-id⟧.from)) ? {
+            return ⟦2-char-id⟧ && ⟦2-char-id⟧ && ⟦2-char-id⟧.to <= ⟦2-char-id⟧ && ⟦2-char-id⟧.from >= ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.type.prop(⟦2-char-id⟧.i.closedBy)) && ⟦2-char-id⟧.indexOf(⟦2-char-id⟧.name) > -1 && ⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧.to).from == ⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧.from).from && !/\S/.test(⟦2-char-id⟧.sliceDoc(⟦2-char-id⟧.to, ⟦2-char-id⟧.from)) ? {
               from: ⟦2-char-id⟧.to,
               to: ⟦2-char-id⟧.from
             } : null
           }(⟦2-char-id⟧, ⟦2-char-id⟧);
-          ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧ = (⟦2-char-id⟧ <= ⟦2-char-id⟧.to ? eJ : ⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧)).to);
+          ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧ = (⟦2-char-id⟧ <= ⟦2-char-id⟧.to ? pB : ⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧)).to);
           let ⟦2-char-id⟧ = new ⟦2-char-id⟧.d(⟦2-char-id⟧, {
               simulateBreak: ⟦2-char-id⟧,
               simulateDoubleBreak: !!⟦2-char-id⟧
             }),
-            ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.W)(⟦2-char-id⟧, ⟦2-char-id⟧);
-          for (null == ⟦2-char-id⟧ && (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.U)(/^\s*/.exec(⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧).text)[0], ⟦2-char-id⟧.tabSize)); ⟦2-char-id⟧ < ⟦2-char-id⟧.to && /\s/.test(⟦2-char-id⟧.text[⟦2-char-id⟧ - ⟦2-char-id⟧.from]);) ⟦2-char-id⟧++;
+            ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.L)(⟦2-char-id⟧, ⟦2-char-id⟧);
+          for (null == ⟦2-char-id⟧ && (⟦2-char-id⟧ = (0, ⟦2-char-id⟧.R)(/^\s*/.exec(⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧).text)[0], ⟦2-char-id⟧.tabSize)); ⟦2-char-id⟧ < ⟦2-char-id⟧.to && /\s/.test(⟦2-char-id⟧.text[⟦2-char-id⟧ - ⟦2-char-id⟧.from]);) ⟦2-char-id⟧++;
           ⟦2-char-id⟧ ? ({
             from: ⟦2-char-id⟧,
             to: ⟦2-char-id⟧
           } = ⟦2-char-id⟧) : ⟦2-char-id⟧ > ⟦2-char-id⟧.from && ⟦2-char-id⟧ < ⟦2-char-id⟧.from + 100 && !/\S/.test(⟦2-char-id⟧.text.slice(0, ⟦2-char-id⟧)) && (⟦2-char-id⟧ = ⟦2-char-id⟧.from);
-          let ⟦2-char-id⟧ = ["", (0, ⟦2-char-id⟧.cb)(⟦2-char-id⟧, ⟦2-char-id⟧)];
-          return ⟦2-char-id⟧ && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.cb)(⟦2-char-id⟧, ⟦2-char-id⟧.lineIndent(⟦2-char-id⟧.from, -1))), {
+          let ⟦2-char-id⟧ = ["", (0, ⟦2-char-id⟧.R)(⟦2-char-id⟧, ⟦2-char-id⟧)];
+          return ⟦2-char-id⟧ && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.R)(⟦2-char-id⟧, ⟦2-char-id⟧.lineIndent(⟦2-char-id⟧.from, -1))), {
             changes: {
               from: ⟦2-char-id⟧,
               to: ⟦2-char-id⟧,
-              insert: ⟦2-char-id⟧.F.of(⟦2-char-id⟧)
+              insert: ⟦2-char-id⟧.D.of(⟦2-char-id⟧)
             },
-            range: ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧ + 1 + ⟦2-char-id⟧[1].length)
+            range: ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧ + 1 + ⟦2-char-id⟧[1].length)
           }
         }));
         return ⟦2-char-id⟧(⟦2-char-id⟧.update(⟦2-char-id⟧, {
```

</details>

<details>
<summary>Hunk 620 · Change · +2 / -2</summary>

```diff
@@ -16175,12 +16175,12 @@
         let ⟦2-char-id⟧ = [];
         for (let ⟦2-char-id⟧ = ⟦2-char-id⟧.from; ⟦2-char-id⟧ <= ⟦2-char-id⟧.to;) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧);
-          ⟦2-char-id⟧.number > ⟦2-char-id⟧ && (⟦2-char-id⟧.empty || ⟦2-char-id⟧.to > ⟦2-char-id⟧.from) && (⟦2-char-id⟧(⟦2-char-id⟧, UJ, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.number), ⟦2-char-id⟧ = ⟦2-char-id⟧.to + 1
+          ⟦2-char-id⟧.number > ⟦2-char-id⟧ && (⟦2-char-id⟧.empty || ⟦2-char-id⟧.to > ⟦2-char-id⟧.from) && (⟦2-char-id⟧(⟦2-char-id⟧, yB, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.number), ⟦2-char-id⟧ = ⟦2-char-id⟧.to + 1
         }
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.changes(⟦2-char-id⟧);
         return {
           changes: ⟦2-char-id⟧,
-          range: ⟦2-char-id⟧.m.range(⟦2-char-id⟧.mapPos(⟦2-char-id⟧.anchor, 1), ⟦2-char-id⟧.mapPos(⟦2-char-id⟧.head, 1))
+          range: ⟦2-char-id⟧.h.range(⟦2-char-id⟧.mapPos(⟦2-char-id⟧.anchor, 1), ⟦2-char-id⟧.mapPos(⟦2-char-id⟧.head, 1))
         }
       }))
     }
```

</details>

<details>
<summary>Hunk 621 · Change · +1 / -1</summary>

```diff
@@ -16192,7 +16192,7 @@
         return !⟦2-char-id⟧.readOnly && (⟦2-char-id⟧(⟦2-char-id⟧.update(⟦2-char-id⟧(⟦2-char-id⟧, ((⟦2-char-id⟧, ⟦2-char-id⟧) => {
           ⟦2-char-id⟧.push({
             from: ⟦2-char-id⟧.from,
-            insert: ⟦2-char-id⟧.facet(⟦2-char-id⟧.db)
+            insert: ⟦2-char-id⟧.facet(⟦2-char-id⟧.V)
           })
         })), {
           userEvent: "input.indent"
```

</details>

<details>
<summary>Hunk 622 · Change · +2 / -2</summary>

```diff
@@ -16206,9 +16206,9 @@
         return !⟦2-char-id⟧.readOnly && (⟦2-char-id⟧(⟦2-char-id⟧.update(⟦2-char-id⟧(⟦2-char-id⟧, ((⟦2-char-id⟧, ⟦2-char-id⟧) => {
           let ⟦2-char-id⟧ = /^\s*/.exec(⟦2-char-id⟧.text)[0];
           if (!⟦2-char-id⟧) return;
-          let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.U)(⟦2-char-id⟧, ⟦2-char-id⟧.tabSize),
+          let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.R)(⟦2-char-id⟧, ⟦2-char-id⟧.tabSize),
             ⟦2-char-id⟧ = 0,
-            ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.cb)(⟦2-char-id⟧, Math.max(0, ⟦2-char-id⟧ - (0, ⟦2-char-id⟧.S)(⟦2-char-id⟧)));
+            ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.R)(⟦2-char-id⟧, Math.max(0, ⟦2-char-id⟧ - (0, ⟦2-char-id⟧.J)(⟦2-char-id⟧)));
           for (; ⟦2-char-id⟧ < ⟦2-char-id⟧.length && ⟦2-char-id⟧ < ⟦2-char-id⟧.length && ⟦2-char-id⟧.charCodeAt(⟦2-char-id⟧) == ⟦2-char-id⟧.charCodeAt(⟦2-char-id⟧);) ⟦2-char-id⟧++;
           ⟦2-char-id⟧.push({
             from: ⟦2-char-id⟧.from + ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 623 · Change · +4 / -4</summary>

```diff
@@ -16222,13 +16222,13 @@
       ⟦2-char-id⟧ = [{
         key: "Alt-ArrowLeft",
         mac: "Ctrl-ArrowLeft",
-        run: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧.state, cJ, !⟦2-char-id⟧(⟦2-char-id⟧)))),
-        shift: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧.state, cJ, !⟦2-char-id⟧(⟦2-char-id⟧))))
+        run: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧.state, TB, !⟦2-char-id⟧(⟦2-char-id⟧)))),
+        shift: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧.state, TB, !⟦2-char-id⟧(⟦2-char-id⟧))))
       }, {
         key: "Alt-ArrowRight",
         mac: "Ctrl-ArrowRight",
-        run: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧.state, cJ, RJ(⟦2-char-id⟧)))),
-        shift: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧.state, cJ, RJ(⟦2-char-id⟧))))
+        run: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧.state, TB, qB(⟦2-char-id⟧)))),
+        shift: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧.state, TB, qB(⟦2-char-id⟧))))
       }, {
         key: "Alt-ArrowUp",
         run: ⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 624 · Change · +1 / -1</summary>

```diff
@@ -16236,7 +16236,7 @@
             state: ⟦2-char-id⟧,
             dispatch: ⟦2-char-id⟧
           } = ⟦2-char-id⟧;
-          return ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, !1)
+          return ⟦2-char-id⟧(⟦2-char-id⟧, dB, !1)
         }
       }, {
         key: "Shift-Alt-ArrowUp",
```

</details>

<details>
<summary>Hunk 625 · Change · +1 / -1</summary>

```diff
@@ -16245,7 +16245,7 @@
             state: ⟦2-char-id⟧,
             dispatch: ⟦2-char-id⟧
           } = ⟦2-char-id⟧;
-          return ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, !1)
+          return ⟦2-char-id⟧(⟦2-char-id⟧, dB, !1)
         }
       }, {
         key: "Alt-ArrowDown",
```

</details>

<details>
<summary>Hunk 626 · Change · +1 / -1</summary>

```diff
@@ -16254,7 +16254,7 @@
             state: ⟦2-char-id⟧,
             dispatch: ⟦2-char-id⟧
           } = ⟦2-char-id⟧;
-          return ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, !0)
+          return ⟦2-char-id⟧(⟦2-char-id⟧, dB, !0)
         }
       }, {
         key: "Shift-Alt-ArrowDown",
```

</details>

<details>
<summary>Hunk 627 · Change · +1 / -1</summary>

```diff
@@ -16263,7 +16263,7 @@
             state: ⟦2-char-id⟧,
             dispatch: ⟦2-char-id⟧
           } = ⟦2-char-id⟧;
-          return ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, !0)
+          return ⟦2-char-id⟧(⟦2-char-id⟧, dB, !0)
         }
       }, {
         key: "Mod-Alt-ArrowUp",
```

</details>

<details>
<summary>Hunk 628 · Change · +1 / -1</summary>

```diff
@@ -16278,7 +16278,7 @@
             state: ⟦2-char-id⟧,
             dispatch: ⟦2-char-id⟧
           } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.selection, ⟦2-char-id⟧ = null;
-          return ⟦2-char-id⟧.ws.length > 1 ? ⟦2-char-id⟧ = ⟦2-char-id⟧.m.create([⟦2-char-id⟧.main]) : ⟦2-char-id⟧.main.empty || (⟦2-char-id⟧ = ⟦2-char-id⟧.m.create([⟦2-char-id⟧.m.cursor(⟦2-char-id⟧.main.head)])), !!⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)), !0)
+          return ⟦2-char-id⟧.ek.length > 1 ? ⟦2-char-id⟧ = ⟦2-char-id⟧.h.create([⟦2-char-id⟧.main]) : ⟦2-char-id⟧.main.empty || (⟦2-char-id⟧ = ⟦2-char-id⟧.h.create([⟦2-char-id⟧.h.cursor(⟦2-char-id⟧.main.head)])), !!⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)), !0)
         }
       }, {
         key: "Mod-Enter",
```

</details>

<details>
<summary>Hunk 629 · Change · +2 / -2</summary>

```diff
@@ -16295,10 +16295,10 @@
               from: ⟦2-char-id⟧,
               to: ⟦2-char-id⟧
             } = ⟦2-char-id⟧;
-            return ⟦2-char-id⟧.m.range(⟦2-char-id⟧, Math.min(⟦2-char-id⟧ + 1, ⟦2-char-id⟧.doc.length))
+            return ⟦2-char-id⟧.h.range(⟦2-char-id⟧, Math.min(⟦2-char-id⟧ + 1, ⟦2-char-id⟧.doc.length))
           }));
           return ⟦2-char-id⟧(⟦2-char-id⟧.update({
-            selection: ⟦2-char-id⟧.m.create(⟦2-char-id⟧),
+            selection: ⟦2-char-id⟧.h.create(⟦2-char-id⟧),
             userEvent: "select"
           })), !0
         }
```

</details>

<details>
<summary>Hunk 630 · Change · +1 / -1</summary>

```diff
@@ -16309,7 +16309,7 @@
             state: ⟦2-char-id⟧,
             dispatch: ⟦2-char-id⟧
           } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.selection, (⟦2-char-id⟧ => {
-            let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.ub)(⟦2-char-id⟧),
+            let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.hb)(⟦2-char-id⟧),
               ⟦2-char-id⟧ = ⟦2-char-id⟧.resolveStack(⟦2-char-id⟧.from, 1);
             if (⟦2-char-id⟧.empty) {
               let ⟦2-char-id⟧ = ⟦2-char-id⟧.resolveStack(⟦2-char-id⟧.from, -1);
```

</details>

<details>
<summary>Hunk 631 · Change · +1 / -1</summary>

```diff
@@ -16319,7 +16319,7 @@
               let {
                 node: ⟦2-char-id⟧
               } = ⟦2-char-id⟧;
-              if ((⟦2-char-id⟧.from < ⟦2-char-id⟧.from && ⟦2-char-id⟧.to >= ⟦2-char-id⟧.to || ⟦2-char-id⟧.to > ⟦2-char-id⟧.to && ⟦2-char-id⟧.from <= ⟦2-char-id⟧.from) && ⟦2-char-id⟧.next) return ⟦2-char-id⟧.m.range(⟦2-char-id⟧.to, ⟦2-char-id⟧.from)
+              if ((⟦2-char-id⟧.from < ⟦2-char-id⟧.from && ⟦2-char-id⟧.to >= ⟦2-char-id⟧.to || ⟦2-char-id⟧.to > ⟦2-char-id⟧.to && ⟦2-char-id⟧.from <= ⟦2-char-id⟧.from) && ⟦2-char-id⟧.next) return ⟦2-char-id⟧.h.range(⟦2-char-id⟧.to, ⟦2-char-id⟧.from)
             }
             return ⟦2-char-id⟧
           }));
```

</details>

<details>
<summary>Hunk 632 · Change · +3 / -3</summary>

```diff
@@ -16347,12 +16347,12 @@
                 return null == ⟦2-char-id⟧ ? -1 : ⟦2-char-id⟧
               }
             }),
-            ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ((⟦2-char-id⟧, ZJ, ⟦2-char-id⟧) => {
-              let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.W)(⟦2-char-id⟧, ⟦2-char-id⟧.from);
+            ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ((⟦2-char-id⟧, dB, ⟦2-char-id⟧) => {
+              let ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.L)(⟦2-char-id⟧, ⟦2-char-id⟧.from);
               if (null == ⟦2-char-id⟧) return;
               /\S/.test(⟦2-char-id⟧.text) || (⟦2-char-id⟧ = 0);
               let ⟦2-char-id⟧ = /^\s*/.exec(⟦2-char-id⟧.text)[0],
-                ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.cb)(⟦2-char-id⟧, ⟦2-char-id⟧);
+                ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.R)(⟦2-char-id⟧, ⟦2-char-id⟧);
               (⟦2-char-id⟧ != ⟦2-char-id⟧ || ⟦2-char-id⟧.from < ⟦2-char-id⟧.from + ⟦2-char-id⟧.length) && (⟦2-char-id⟧[⟦2-char-id⟧.from] = ⟦2-char-id⟧, ⟦2-char-id⟧.push({
                 from: ⟦2-char-id⟧.from,
                 to: ⟦2-char-id⟧.from + ⟦2-char-id⟧.length,
```

</details>

<details>
<summary>Hunk 633 · Change · +1 / -1</summary>

```diff
@@ -16401,7 +16401,7 @@
             state: ⟦2-char-id⟧,
             dispatch: ⟦2-char-id⟧
           } = ⟦2-char-id⟧;
-          return ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, !1)
+          return ⟦2-char-id⟧(⟦2-char-id⟧, dB, !1)
         }
       }, {
         key: "Mod-/",
```

</details>

<details>
<summary>Hunk 634 · Change · +2 / -2</summary>

```diff
@@ -16431,8 +16431,8 @@
         preventDefault: !0
       }, {
         mac: "Cmd-ArrowLeft",
-        run: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, cJ, !⟦2-char-id⟧(⟦2-char-id⟧)))),
-        shift: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, cJ, !⟦2-char-id⟧(⟦2-char-id⟧)))),
+        run: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, TB, !⟦2-char-id⟧(⟦2-char-id⟧)))),
+        shift: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, TB, !⟦2-char-id⟧(⟦2-char-id⟧)))),
         preventDefault: !0
       }, {
         key: "ArrowRight",
```

</details>

<details>
<summary>Hunk 635 · Change · +4 / -4</summary>

```diff
@@ -16442,13 +16442,13 @@
       }, {
         key: "Mod-ArrowRight",
         mac: "Alt-ArrowRight",
-        run: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, RJ(⟦2-char-id⟧)),
-        shift: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, RJ(⟦2-char-id⟧)),
+        run: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, qB(⟦2-char-id⟧)),
+        shift: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, qB(⟦2-char-id⟧)),
         preventDefault: !0
       }, {
         mac: "Cmd-ArrowRight",
-        run: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, cJ, RJ(⟦2-char-id⟧)))),
-        shift: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, cJ, RJ(⟦2-char-id⟧)))),
+        run: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, TB, qB(⟦2-char-id⟧)))),
+        shift: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, TB, qB(⟦2-char-id⟧)))),
         preventDefault: !0
       }, {
         key: "ArrowUp",
```

</details>

<details>
<summary>Hunk 636 · Change · +2 / -2</summary>

```diff
@@ -16486,8 +16486,8 @@
         shift: ⟦2-char-id⟧
       }, {
         key: "Home",
-        run: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, cJ, !1))),
-        shift: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, cJ, !1))),
+        run: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, TB, !1))),
+        shift: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, TB, !1))),
         preventDefault: !0
       }, {
         key: "Mod-Home",
```

</details>

<details>
<summary>Hunk 637 · Change · +2 / -2</summary>

```diff
@@ -16495,8 +16495,8 @@
         shift: ⟦2-char-id⟧
       }, {
         key: "End",
-        run: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, cJ, !0))),
-        shift: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, cJ, !0))),
+        run: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, TB, !0))),
+        shift: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, TB, !0))),
         preventDefault: !0
       }, {
         key: "Mod-End",
```

</details>

<details>
<summary>Hunk 638 · Change · +2 / -2</summary>

```diff
@@ -16544,14 +16544,14 @@
         mac: "Mod-Backspace",
         run: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.moveToLineBoundary(⟦2-char-id⟧, !1).head;
-          return ⟦2-char-id⟧.head > ⟦2-char-id⟧ ? ZJ : Math.max(0, ⟦2-char-id⟧.head - 1)
+          return ⟦2-char-id⟧.head > ⟦2-char-id⟧ ? dB : Math.max(0, ⟦2-char-id⟧.head - 1)
         })),
         preventDefault: !0
       }, {
         mac: "Mod-Delete",
         run: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.moveToLineBoundary(⟦2-char-id⟧, !0).head;
-          return ⟦2-char-id⟧.head < ⟦2-char-id⟧ ? ZJ : Math.min(⟦2-char-id⟧.state.doc.length, ⟦2-char-id⟧.head + 1)
+          return ⟦2-char-id⟧.head < ⟦2-char-id⟧ ? dB : Math.min(⟦2-char-id⟧.state.doc.length, ⟦2-char-id⟧.head + 1)
         })),
         preventDefault: !0
       }].concat([{
```

</details>

<details>
<summary>Hunk 639 · Change · +4 / -4</summary>

```diff
@@ -16573,12 +16573,12 @@
         shift: ⟦2-char-id⟧
       }, {
         key: "Ctrl-a",
-        run: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧.lineBlockAt(⟦2-char-id⟧.head).from, 1))),
-        shift: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧.lineBlockAt(⟦2-char-id⟧.head).from)))
+        run: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧.lineBlockAt(⟦2-char-id⟧.head).from, 1))),
+        shift: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧.lineBlockAt(⟦2-char-id⟧.head).from)))
       }, {
         key: "Ctrl-e",
-        run: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧.lineBlockAt(⟦2-char-id⟧.head).to, -1))),
-        shift: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧.lineBlockAt(⟦2-char-id⟧.head).to)))
+        run: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧.lineBlockAt(⟦2-char-id⟧.head).to, -1))),
+        shift: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧.lineBlockAt(⟦2-char-id⟧.head).to)))
       }, {
         key: "Ctrl-d",
         run: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 640 · Change · +1 / -1</summary>

```diff
@@ -16589,7 +16589,7 @@
         key: "Ctrl-k",
         run: ⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, (⟦2-char-id⟧ => {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.lineBlockAt(⟦2-char-id⟧.head).to;
-          return ⟦2-char-id⟧.head < ⟦2-char-id⟧ ? ZJ : Math.min(⟦2-char-id⟧.state.doc.length, ⟦2-char-id⟧.head + 1)
+          return ⟦2-char-id⟧.head < ⟦2-char-id⟧ ? dB : Math.min(⟦2-char-id⟧.state.doc.length, ⟦2-char-id⟧.head + 1)
         }))
       }, {
         key: "Ctrl-Alt-h",
```

</details>

<details>
<summary>Hunk 641 · Change · +2 / -2</summary>

```diff
@@ -16606,9 +16606,9 @@
             changes: {
               from: ⟦2-char-id⟧.from,
               to: ⟦2-char-id⟧.to,
-              insert: ⟦2-char-id⟧.F.of(["", ""])
+              insert: ⟦2-char-id⟧.D.of(["", ""])
             },
-            range: ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧.from)
+            range: ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧.from)
           })));
           return ⟦2-char-id⟧(⟦2-char-id⟧.update(⟦2-char-id⟧, {
             scrollIntoView: !0,
```

</details>

<details>
<summary>Hunk 642 · Change · +3 / -3</summary>

```diff
@@ -16629,15 +16629,15 @@
             };
             let ⟦2-char-id⟧ = ⟦2-char-id⟧.from,
               ⟦2-char-id⟧ = ⟦2-char-id⟧.doc.lineAt(⟦2-char-id⟧),
-              ⟦2-char-id⟧ = ⟦2-char-id⟧ == ⟦2-char-id⟧.from ? ⟦2-char-id⟧ - 1 : (0, ⟦2-char-id⟧.X)(⟦2-char-id⟧.text, ⟦2-char-id⟧ - ⟦2-char-id⟧.from, !1) + ⟦2-char-id⟧.from,
-              ⟦2-char-id⟧ = ⟦2-char-id⟧ == ⟦2-char-id⟧.to ? ⟦2-char-id⟧ + 1 : (0, ⟦2-char-id⟧.X)(⟦2-char-id⟧.text, ⟦2-char-id⟧ - ⟦2-char-id⟧.from, !0) + ⟦2-char-id⟧.from;
+              ⟦2-char-id⟧ = ⟦2-char-id⟧ == ⟦2-char-id⟧.from ? ⟦2-char-id⟧ - 1 : (0, ⟦2-char-id⟧.S)(⟦2-char-id⟧.text, ⟦2-char-id⟧ - ⟦2-char-id⟧.from, !1) + ⟦2-char-id⟧.from,
+              ⟦2-char-id⟧ = ⟦2-char-id⟧ == ⟦2-char-id⟧.to ? ⟦2-char-id⟧ + 1 : (0, ⟦2-char-id⟧.S)(⟦2-char-id⟧.text, ⟦2-char-id⟧ - ⟦2-char-id⟧.from, !0) + ⟦2-char-id⟧.from;
             return {
               changes: {
                 from: ⟦2-char-id⟧,
                 to: ⟦2-char-id⟧,
                 insert: ⟦2-char-id⟧.doc.slice(⟦2-char-id⟧, ⟦2-char-id⟧).append(⟦2-char-id⟧.doc.slice(⟦2-char-id⟧, ⟦2-char-id⟧))
               },
-              range: ⟦2-char-id⟧.m.cursor(⟦2-char-id⟧)
+              range: ⟦2-char-id⟧.h.cursor(⟦2-char-id⟧)
             }
           }));
           return !⟦2-char-id⟧.changes.empty && (⟦2-char-id⟧(⟦2-char-id⟧.update(⟦2-char-id⟧, {
```

</details>

<details>
<summary>Hunk 643 · Change · +11 / -11</summary>

```diff
@@ -16658,29 +16658,29 @@
         run: ⟦2-char-id⟧,
         shift: ⟦2-char-id⟧
       };
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(40094),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(40052),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(40097),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(40084),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(40033),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(40092),
       ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
         void 0 === ⟦2-char-id⟧ && (⟦2-char-id⟧ = {});
         var {
           crosshairCursor: ⟦2-char-id⟧ = !1
         } = ⟦2-char-id⟧, ⟦2-char-id⟧ = [];
-        !1 !== ⟦2-char-id⟧.closeBracketsKeymap && (⟦2-char-id⟧ = ⟦2-char-id⟧.concat(⟦2-char-id⟧.h)), !1 !== ⟦2-char-id⟧.defaultKeymap && (⟦2-char-id⟧ = ⟦2-char-id⟧.concat(⟦2-char-id⟧)), !1 !== ⟦2-char-id⟧.searchKeymap && (⟦2-char-id⟧ = ⟦2-char-id⟧.concat(⟦2-char-id⟧.e)), !1 !== ⟦2-char-id⟧.historyKeymap && (⟦2-char-id⟧ = ⟦2-char-id⟧.concat(⟦2-char-id⟧)), !1 !== ⟦2-char-id⟧.foldKeymap && (⟦2-char-id⟧ = ⟦2-char-id⟧.concat(⟦2-char-id⟧.I)), !1 !== ⟦2-char-id⟧.completionKeymap && (⟦2-char-id⟧ = ⟦2-char-id⟧.concat(⟦2-char-id⟧.r)), !1 !== ⟦2-char-id⟧.lintKeymap && (⟦2-char-id⟧ = ⟦2-char-id⟧.concat(⟦2-char-id⟧.c));
+        !1 !== ⟦2-char-id⟧.closeBracketsKeymap && (⟦2-char-id⟧ = ⟦2-char-id⟧.concat(⟦2-char-id⟧.f)), !1 !== ⟦2-char-id⟧.defaultKeymap && (⟦2-char-id⟧ = ⟦2-char-id⟧.concat(⟦2-char-id⟧)), !1 !== ⟦2-char-id⟧.searchKeymap && (⟦2-char-id⟧ = ⟦2-char-id⟧.concat(⟦2-char-id⟧.f)), !1 !== ⟦2-char-id⟧.historyKeymap && (⟦2-char-id⟧ = ⟦2-char-id⟧.concat(⟦2-char-id⟧)), !1 !== ⟦2-char-id⟧.foldKeymap && (⟦2-char-id⟧ = ⟦2-char-id⟧.concat(⟦2-char-id⟧.G)), !1 !== ⟦2-char-id⟧.completionKeymap && (⟦2-char-id⟧ = ⟦2-char-id⟧.concat(⟦2-char-id⟧.p)), !1 !== ⟦2-char-id⟧.lintKeymap && (⟦2-char-id⟧ = ⟦2-char-id⟧.concat(⟦2-char-id⟧.d));
         var ⟦2-char-id⟧ = [];
-        return !1 !== ⟦2-char-id⟧.lineNumbers && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.O)()), !1 !== ⟦2-char-id⟧.highlightActiveLineGutter && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.A)()), !1 !== ⟦2-char-id⟧.highlightSpecialChars && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.F)()), !1 !== ⟦2-char-id⟧.history && ⟦2-char-id⟧.push(function() {
+        return !1 !== ⟦2-char-id⟧.lineNumbers && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.V)()), !1 !== ⟦2-char-id⟧.highlightActiveLineGutter && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.K)()), !1 !== ⟦2-char-id⟧.highlightSpecialChars && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.P)()), !1 !== ⟦2-char-id⟧.history && ⟦2-char-id⟧.push(function() {
           let ⟦2-char-id⟧ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-          return [⟦2-char-id⟧, ⟦2-char-id⟧.of(⟦2-char-id⟧), ⟦2-char-id⟧.f.domEventHandlers({
+          return [⟦2-char-id⟧, ⟦2-char-id⟧.of(⟦2-char-id⟧), ⟦2-char-id⟧.i.domEventHandlers({
             beforeinput(⟦2-char-id⟧, ⟦2-char-id⟧) {
-              let ⟦2-char-id⟧ = "historyUndo" == ⟦2-char-id⟧.inputType ? KJ : "historyRedo" == ⟦2-char-id⟧.inputType ? yJ : null;
-              return !!⟦2-char-id⟧ && (⟦2-char-id⟧.preventDefault(), ZJ(⟦2-char-id⟧))
+              let ⟦2-char-id⟧ = "historyUndo" == ⟦2-char-id⟧.inputType ? sB : "historyRedo" == ⟦2-char-id⟧.inputType ? MB : null;
+              return !!⟦2-char-id⟧ && (⟦2-char-id⟧.preventDefault(), dB(⟦2-char-id⟧))
             }
           })]
-        }()), !1 !== ⟦2-char-id⟧.foldGutter && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.E)()), !1 !== ⟦2-char-id⟧.drawSelection && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.n)()), !1 !== ⟦2-char-id⟧.dropCursor && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.r)()), !1 !== ⟦2-char-id⟧.allowMultipleSelections && ⟦2-char-id⟧.push(⟦2-char-id⟧.o.allowMultipleSelections.of(!0)), !1 !== ⟦2-char-id⟧.indentOnInput && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧._)()), !1 !== ⟦2-char-id⟧.syntaxHighlighting && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.nb)(⟦2-char-id⟧.q, {
+        }()), !1 !== ⟦2-char-id⟧.foldGutter && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.D)()), !1 !== ⟦2-char-id⟧.drawSelection && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.u)()), !1 !== ⟦2-char-id⟧.dropCursor && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.x)()), !1 !== ⟦2-char-id⟧.allowMultipleSelections && ⟦2-char-id⟧.push(⟦2-char-id⟧.i.allowMultipleSelections.of(!0)), !1 !== ⟦2-char-id⟧.indentOnInput && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.Q)()), !1 !== ⟦2-char-id⟧.syntaxHighlighting && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.cb)(⟦2-char-id⟧.q, {
           fallback: !0
-        })), !1 !== ⟦2-char-id⟧.bracketMatching && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.m)()), !1 !== ⟦2-char-id⟧.closeBrackets && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.l)()), !1 !== ⟦2-char-id⟧.autocompletion && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.e)()), !1 !== ⟦2-char-id⟧.rectangularSelection && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.T)()), !1 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.m)()), !1 !== ⟦2-char-id⟧.highlightActiveLine && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.D)()), !1 !== ⟦2-char-id⟧.highlightSelectionMatches && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.d)()), ⟦2-char-id⟧.tabSize && "number" === typeof ⟦2-char-id⟧.tabSize && ⟦2-char-id⟧.push(⟦2-char-id⟧.db.of(" ".repeat(⟦2-char-id⟧.tabSize))), ⟦2-char-id⟧.concat([⟦2-char-id⟧.K.of(⟦2-char-id⟧.flat())]).filter(Boolean)
+        })), !1 !== ⟦2-char-id⟧.bracketMatching && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.l)()), !1 !== ⟦2-char-id⟧.closeBrackets && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.h)()), !1 !== ⟦2-char-id⟧.autocompletion && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.e)()), !1 !== ⟦2-char-id⟧.rectangularSelection && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.bb)()), !1 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.q)()), !1 !== ⟦2-char-id⟧.highlightActiveLine && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.N)()), !1 !== ⟦2-char-id⟧.highlightSelectionMatches && ⟦2-char-id⟧.push((0, ⟦2-char-id⟧.e)()), ⟦2-char-id⟧.tabSize && "number" === typeof ⟦2-char-id⟧.tabSize && ⟦2-char-id⟧.push(⟦2-char-id⟧.V.of(" ".repeat(⟦2-char-id⟧.tabSize))), ⟦2-char-id⟧.concat([⟦2-char-id⟧.S.of(⟦2-char-id⟧.flat())]).filter(Boolean)
       },
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(40084);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(40069);
     const ⟦2-char-id⟧ = "#e5c07b",
       ⟦2-char-id⟧ = "#e06c75",
       ⟦2-char-id⟧ = "#56b6c2",
```

</details>

<details>
<summary>Hunk 644 · Change · +1 / -1</summary>

```diff
@@ -16697,7 +16697,7 @@
       ⟦2-char-id⟧ = "#353a42",
       ⟦2-char-id⟧ = "#3E4451",
       ⟦2-char-id⟧ = "#528bff",
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.f.theme({
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.i.theme({
         "&": {
           color: ⟦2-char-id⟧,
           backgroundColor: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 645 · Change · +19 / -19</summary>

```diff
@@ -16771,59 +16771,59 @@
       }, {
         dark: !0
       }),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.c.define([{
-        tag: ⟦2-char-id⟧.j.keyword,
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.b.define([{
+        tag: ⟦2-char-id⟧.h.keyword,
         color: ⟦2-char-id⟧
       }, {
-        tag: [⟦2-char-id⟧.j.name, ⟦2-char-id⟧.j.deleted, ⟦2-char-id⟧.j.character, ⟦2-char-id⟧.j.propertyName, ⟦2-char-id⟧.j.macroName],
+        tag: [⟦2-char-id⟧.h.name, ⟦2-char-id⟧.h.deleted, ⟦2-char-id⟧.h.character, ⟦2-char-id⟧.h.propertyName, ⟦2-char-id⟧.h.macroName],
         color: ⟦2-char-id⟧
       }, {
-        tag: [⟦2-char-id⟧.j.function(⟦2-char-id⟧.j.variableName), ⟦2-char-id⟧.j.labelName],
+        tag: [⟦2-char-id⟧.h.function(⟦2-char-id⟧.h.variableName), ⟦2-char-id⟧.h.labelName],
         color: ⟦2-char-id⟧
       }, {
-        tag: [⟦2-char-id⟧.j.color, ⟦2-char-id⟧.j.constant(⟦2-char-id⟧.j.name), ⟦2-char-id⟧.j.standard(⟦2-char-id⟧.j.name)],
+        tag: [⟦2-char-id⟧.h.color, ⟦2-char-id⟧.h.constant(⟦2-char-id⟧.h.name), ⟦2-char-id⟧.h.standard(⟦2-char-id⟧.h.name)],
         color: ⟦2-char-id⟧
       }, {
-        tag: [⟦2-char-id⟧.j.definition(⟦2-char-id⟧.j.name), ⟦2-char-id⟧.j.separator],
+        tag: [⟦2-char-id⟧.h.definition(⟦2-char-id⟧.h.name), ⟦2-char-id⟧.h.separator],
         color: ⟦2-char-id⟧
       }, {
-        tag: [⟦2-char-id⟧.j.typeName, ⟦2-char-id⟧.j.className, ⟦2-char-id⟧.j.number, ⟦2-char-id⟧.j.changed, ⟦2-char-id⟧.j.annotation, ⟦2-char-id⟧.j.modifier, ⟦2-char-id⟧.j.self, ⟦2-char-id⟧.j.namespace],
+        tag: [⟦2-char-id⟧.h.typeName, ⟦2-char-id⟧.h.className, ⟦2-char-id⟧.h.number, ⟦2-char-id⟧.h.changed, ⟦2-char-id⟧.h.annotation, ⟦2-char-id⟧.h.modifier, ⟦2-char-id⟧.h.self, ⟦2-char-id⟧.h.namespace],
         color: ⟦2-char-id⟧
       }, {
-        tag: [⟦2-char-id⟧.j.operator, ⟦2-char-id⟧.j.operatorKeyword, ⟦2-char-id⟧.j.url, ⟦2-char-id⟧.j.escape, ⟦2-char-id⟧.j.regexp, ⟦2-char-id⟧.j.link, ⟦2-char-id⟧.j.special(⟦2-char-id⟧.j.string)],
+        tag: [⟦2-char-id⟧.h.operator, ⟦2-char-id⟧.h.operatorKeyword, ⟦2-char-id⟧.h.url, ⟦2-char-id⟧.h.escape, ⟦2-char-id⟧.h.regexp, ⟦2-char-id⟧.h.link, ⟦2-char-id⟧.h.special(⟦2-char-id⟧.h.string)],
         color: ⟦2-char-id⟧
       }, {
-        tag: [⟦2-char-id⟧.j.meta, ⟦2-char-id⟧.j.comment],
+        tag: [⟦2-char-id⟧.h.meta, ⟦2-char-id⟧.h.comment],
         color: ⟦2-char-id⟧
       }, {
-        tag: ⟦2-char-id⟧.j.strong,
+        tag: ⟦2-char-id⟧.h.strong,
         fontWeight: "bold"
       }, {
-        tag: ⟦2-char-id⟧.j.emphasis,
+        tag: ⟦2-char-id⟧.h.emphasis,
         fontStyle: "italic"
       }, {
-        tag: ⟦2-char-id⟧.j.strikethrough,
+        tag: ⟦2-char-id⟧.h.strikethrough,
         textDecoration: "line-through"
       }, {
-        tag: ⟦2-char-id⟧.j.link,
+        tag: ⟦2-char-id⟧.h.link,
         color: ⟦2-char-id⟧,
         textDecoration: "underline"
       }, {
-        tag: ⟦2-char-id⟧.j.heading,
+        tag: ⟦2-char-id⟧.h.heading,
         fontWeight: "bold",
         color: ⟦2-char-id⟧
       }, {
-        tag: [⟦2-char-id⟧.j.atom, ⟦2-char-id⟧.j.bool, ⟦2-char-id⟧.j.special(⟦2-char-id⟧.j.variableName)],
+        tag: [⟦2-char-id⟧.h.atom, ⟦2-char-id⟧.h.bool, ⟦2-char-id⟧.h.special(⟦2-char-id⟧.h.variableName)],
         color: ⟦2-char-id⟧
       }, {
-        tag: [⟦2-char-id⟧.j.processingInstruction, ⟦2-char-id⟧.j.string, ⟦2-char-id⟧.j.inserted],
+        tag: [⟦2-char-id⟧.h.processingInstruction, ⟦2-char-id⟧.h.string, ⟦2-char-id⟧.h.inserted],
         color: ⟦2-char-id⟧
       }, {
-        tag: ⟦2-char-id⟧.j.invalid,
+        tag: ⟦2-char-id⟧.h.invalid,
         color: ⟦2-char-id⟧
       }]),
-      ⟦2-char-id⟧ = [⟦2-char-id⟧, (0, ⟦2-char-id⟧.nb)(⟦2-char-id⟧)];
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧.f.theme({
+      ⟦2-char-id⟧ = [⟦2-char-id⟧, (0, ⟦2-char-id⟧.cb)(⟦2-char-id⟧)];
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧.i.theme({
       "&": {
         backgroundColor: "#fff"
       }
```

</details>

<details>
<summary>Hunk 646 · Change · +1 / -1</summary>

```diff
@@ -16840,7 +16840,7 @@
           var ⟦2-char-id⟧ = this.callbacks.slice();
           this.callbacks.length = 0, ⟦2-char-id⟧.forEach((⟦2-char-id⟧ => {
             try {
-              JJ()
+              BB()
             } catch (⟦2-char-id⟧) {
               console.error("TimeoutLatch callback error:", ⟦2-char-id⟧)
             }
```

</details>

<details>
<summary>Hunk 647 · Change · +1 / -1</summary>

```diff
@@ -16870,7 +16870,7 @@
       start() {
         null === this.interval && (this.interval = setInterval((() => {
           this.latches.forEach((⟦2-char-id⟧ => {
-            ⟦2-char-id⟧.Hh(), ⟦2-char-id⟧.isDone && this.remove(⟦2-char-id⟧)
+            ⟦2-char-id⟧.dL(), ⟦2-char-id⟧.isDone && this.remove(⟦2-char-id⟧)
           }))
         }), 1))
       }
```

</details>

<details>
<summary>Hunk 648 · Change · +1 / -1</summary>

```diff
@@ -16879,7 +16879,7 @@
       }
     }
     var ⟦2-char-id⟧ = null,
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.d.define(),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.c.define(),
       ⟦2-char-id⟧ = [];
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 649 · Change · +1 / -1</summary>

```diff
@@ -16910,7 +16910,7 @@
         current: null
       })))[0], ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useState)((() => ({
         current: null
-      })))[0], ⟦2-char-id⟧ = ⟦2-char-id⟧.f.theme({
+      })))[0], ⟦2-char-id⟧ = ⟦2-char-id⟧.i.theme({
         "&": {
           height: ⟦2-char-id⟧,
           minHeight: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 650 · Change · +3 / -3</summary>

```diff
@@ -16922,15 +16922,15 @@
         "& .cm-scroller": {
           height: "100% !important"
         }
-      }), ⟦2-char-id⟧ = ⟦2-char-id⟧.f.updateListener.of((⟦2-char-id⟧ => {
+      }), ⟦2-char-id⟧ = ⟦2-char-id⟧.i.updateListener.of((⟦2-char-id⟧ => {
         if (⟦2-char-id⟧.docChanged && "function" === typeof ⟦2-char-id⟧ && !⟦2-char-id⟧.transactions.some((⟦2-char-id⟧ => ⟦2-char-id⟧.annotation(⟦2-char-id⟧)))) {
           ⟦2-char-id⟧.current ? ⟦2-char-id⟧.current.reset() : (⟦2-char-id⟧.current = new ⟦2-char-id⟧((() => {
             if (⟦2-char-id⟧.current) {
               var ⟦2-char-id⟧ = ⟦2-char-id⟧.current;
-              ⟦2-char-id⟧.current = null, JJ()
+              ⟦2-char-id⟧.current = null, BB()
             }
             ⟦2-char-id⟧.current = null
-          }), 200), ("undefined" === typeof window ? new GZ : (⟦2-char-id⟧ || (⟦2-char-id⟧ = new ⟦2-char-id⟧), ⟦2-char-id⟧)).add(⟦2-char-id⟧.current));
+          }), 200), ("undefined" === typeof window ? new ud : (⟦2-char-id⟧ || (⟦2-char-id⟧ = new ⟦2-char-id⟧), ⟦2-char-id⟧)).add(⟦2-char-id⟧.current));
           var ⟦2-char-id⟧ = ⟦2-char-id⟧.state.doc.toString();
           ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
         }
```

</details>

<details>
<summary>Hunk 651 · Change · +3 / -3</summary>

```diff
@@ -16943,10 +16943,10 @@
           tabSize: ⟦2-char-id⟧.state.tabSize,
           selection: ⟦2-char-id⟧.state.selection,
           selectionAsSingle: ⟦2-char-id⟧.state.selection.asSingle().main,
-          ws: ⟦2-char-id⟧.state.selection.ws,
+          ek: ⟦2-char-id⟧.state.selection.ek,
           selectionCode: ⟦2-char-id⟧.state.sliceDoc(⟦2-char-id⟧.state.selection.main.from, ⟦2-char-id⟧.state.selection.main.to),
-          selections: ⟦2-char-id⟧.state.selection.ws.map((⟦2-char-id⟧ => ⟦2-char-id⟧.state.sliceDoc(⟦2-char-id⟧.from, ⟦2-char-id⟧.to))),
-          selectedText: ⟦2-char-id⟧.state.selection.ws.some((⟦2-char-id⟧ => !⟦2-char-id⟧.empty))
+          selections: ⟦2-char-id⟧.state.selection.ek.map((⟦2-char-id⟧ => ⟦2-char-id⟧.state.sliceDoc(⟦2-char-id⟧.from, ⟦2-char-id⟧.to))),
+          selectedText: ⟦2-char-id⟧.state.selection.ek.some((⟦2-char-id⟧ => !⟦2-char-id⟧.empty))
         }))(⟦2-char-id⟧))
       })), ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
         void 0 === ⟦2-char-id⟧ && (⟦2-char-id⟧ = {});
```

</details>

<details>
<summary>Hunk 652 · Change · +1 / -1</summary>

```diff
@@ -16958,7 +16958,7 @@
           placeholder: ⟦2-char-id⟧ = "",
           basicSetup: ⟦2-char-id⟧ = !0
         } = ⟦2-char-id⟧, ⟦2-char-id⟧ = [];
-        switch (⟦2-char-id⟧ && ⟦2-char-id⟧.unshift(⟦2-char-id⟧.K.of([⟦2-char-id⟧])), ⟦2-char-id⟧ && ("boolean" === typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧.unshift(⟦2-char-id⟧()) : ⟦2-char-id⟧.unshift(⟦2-char-id⟧(⟦2-char-id⟧))), ⟦2-char-id⟧ && ⟦2-char-id⟧.unshift((0, ⟦2-char-id⟧.S)(⟦2-char-id⟧)), ⟦2-char-id⟧) {
+        switch (⟦2-char-id⟧ && ⟦2-char-id⟧.unshift(⟦2-char-id⟧.S.of([⟦2-char-id⟧])), ⟦2-char-id⟧ && ("boolean" === typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧.unshift(⟦2-char-id⟧()) : ⟦2-char-id⟧.unshift(⟦2-char-id⟧(⟦2-char-id⟧))), ⟦2-char-id⟧ && ⟦2-char-id⟧.unshift((0, ⟦2-char-id⟧._)(⟦2-char-id⟧)), ⟦2-char-id⟧) {
           case "light":
             ⟦2-char-id⟧.push(⟦2-char-id⟧);
             break;
```

</details>

<details>
<summary>Hunk 653 · Change · +1 / -1</summary>

```diff
@@ -16970,7 +16970,7 @@
           default:
             ⟦2-char-id⟧.push(⟦2-char-id⟧)
         }
-        return !1 === ⟦2-char-id⟧ && ⟦2-char-id⟧.push(⟦2-char-id⟧.f.editable.of(!1)), ⟦2-char-id⟧ && ⟦2-char-id⟧.push(⟦2-char-id⟧.o.readOnly.of(!0)), [...jJ]
+        return !1 === ⟦2-char-id⟧ && ⟦2-char-id⟧.push(⟦2-char-id⟧.i.editable.of(!1)), ⟦2-char-id⟧ && ⟦2-char-id⟧.push(⟦2-char-id⟧.i.readOnly.of(!0)), [...gB]
       }({
         theme: ⟦2-char-id⟧,
         editable: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 654 · Change · +4 / -4</summary>

```diff
@@ -16978,17 +16978,17 @@
         placeholder: ⟦2-char-id⟧,
         indentWithTab: ⟦2-char-id⟧,
         basicSetup: ⟦2-char-id⟧
-      }), ⟦2-char-id⟧ = [⟦2-char-id⟧, PJ, ...pJ];
-      return ⟦2-char-id⟧ && "function" === typeof ⟦2-char-id⟧ && ⟦2-char-id⟧.push(⟦2-char-id⟧.f.updateListener.of(⟦2-char-id⟧)), ⟦2-char-id⟧ = ⟦2-char-id⟧.concat(⟦2-char-id⟧), (0, ⟦2-char-id⟧.useLayoutEffect)((() => {
+      }), ⟦2-char-id⟧ = [⟦2-char-id⟧, SB, ...QB];
+      return ⟦2-char-id⟧ && "function" === typeof ⟦2-char-id⟧ && ⟦2-char-id⟧.push(⟦2-char-id⟧.i.updateListener.of(⟦2-char-id⟧)), ⟦2-char-id⟧ = ⟦2-char-id⟧.concat(⟦2-char-id⟧), (0, ⟦2-char-id⟧.useLayoutEffect)((() => {
         if (⟦2-char-id⟧ && !⟦2-char-id⟧) {
           var ⟦2-char-id⟧ = {
               doc: ⟦2-char-id⟧,
               selection: ⟦2-char-id⟧,
               extensions: ⟦2-char-id⟧
             },
-            ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.o.fromJSON(⟦2-char-id⟧.json, JJ, ⟦2-char-id⟧.fields) : ⟦2-char-id⟧.o.create(⟦2-char-id⟧);
+            ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.i.fromJSON(⟦2-char-id⟧.json, BB, ⟦2-char-id⟧.fields) : ⟦2-char-id⟧.i.create(⟦2-char-id⟧);
           if (⟦2-char-id⟧(⟦2-char-id⟧), !⟦2-char-id⟧) {
-            var ⟦2-char-id⟧ = new ⟦2-char-id⟧.f({
+            var ⟦2-char-id⟧ = new ⟦2-char-id⟧.i({
               state: ⟦2-char-id⟧,
               parent: ⟦2-char-id⟧,
               root: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 655 · Change · +4 / -4</summary>

```diff
@@ -16997,19 +16997,19 @@
           }
         }
         return () => {
-          ⟦2-char-id⟧ && (⟦2-char-id⟧(void 0), bJ(void 0))
+          ⟦2-char-id⟧ && (⟦2-char-id⟧(void 0), FB(void 0))
         }
       }), [⟦2-char-id⟧, ⟦2-char-id⟧]), (0, ⟦2-char-id⟧.useEffect)((() => {
         ⟦2-char-id⟧.container && ⟦2-char-id⟧(⟦2-char-id⟧.container)
       }), [⟦2-char-id⟧.container]), (0, ⟦2-char-id⟧.useEffect)((() => () => {
-        ⟦2-char-id⟧ && (⟦2-char-id⟧.destroy(), bJ(void 0)), ⟦2-char-id⟧.current && (⟦2-char-id⟧.current.cancel(), ⟦2-char-id⟧.current = null)
+        ⟦2-char-id⟧ && (⟦2-char-id⟧.destroy(), FB(void 0)), ⟦2-char-id⟧.current && (⟦2-char-id⟧.current.cancel(), ⟦2-char-id⟧.current = null)
       }), [⟦2-char-id⟧]), (0, ⟦2-char-id⟧.useEffect)((() => {
         ⟦2-char-id⟧ && ⟦2-char-id⟧ && ⟦2-char-id⟧.focus()
       }), [⟦2-char-id⟧, ⟦2-char-id⟧]), (0, ⟦2-char-id⟧.useEffect)((() => {
         ⟦2-char-id⟧ && ⟦2-char-id⟧.dispatch({
-          effects: ⟦2-char-id⟧.A.reconfigure.of(⟦2-char-id⟧)
+          effects: ⟦2-char-id⟧.x.reconfigure.of(⟦2-char-id⟧)
         })
-      }), [⟦2-char-id⟧, YJ, sJ, nJ, GJ, fJ, xJ, rJ, vJ, mJ, QJ, EJ, VJ, FJ, ⟦2-char-id⟧]), (0, ⟦2-char-id⟧.useEffect)((() => {
+      }), [⟦2-char-id⟧, oB, OB, DB, uB, HB, EB, vB, mB, iB, NB, tB, fB, VB, ⟦2-char-id⟧]), (0, ⟦2-char-id⟧.useEffect)((() => {
         if (void 0 !== ⟦2-char-id⟧) {
           var ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.state.doc.toString() : "";
           if (⟦2-char-id⟧ && ⟦2-char-id⟧ !== ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 656 · Change · +1 / -1</summary>

```diff
@@ -17023,7 +17023,7 @@
                 annotations: [⟦2-char-id⟧.of(!0)]
               })
             };
-            ⟦2-char-id⟧.current && !⟦2-char-id⟧.current.isDone ? ⟦2-char-id⟧.current = ZJ : ⟦2-char-id⟧()
+            ⟦2-char-id⟧.current && !⟦2-char-id⟧.current.isDone ? ⟦2-char-id⟧.current = dB : ⟦2-char-id⟧()
           }
         }
       }), [⟦2-char-id⟧, ⟦2-char-id⟧]), {
```

</details>

<details>
<summary>Hunk 657 · Change · +1 / -1</summary>

```diff
@@ -17035,7 +17035,7 @@
         setContainer: ⟦2-char-id⟧
       }
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(990),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(980),
       ⟦2-char-id⟧ = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
       ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.forwardRef)(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
         var {
```

</details>

<details>
<summary>Hunk 658 · Change · +6 / -6</summary>

```diff
@@ -17095,21 +17095,21 @@
           editor: ⟦2-char-id⟧.current,
           state: ⟦2-char-id⟧,
           view: ⟦2-char-id⟧
-        })), [⟦2-char-id⟧, gJ, wJ, ⟦2-char-id⟧]);
+        })), [⟦2-char-id⟧, IB, KB, ⟦2-char-id⟧]);
         var ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.useCallback)((⟦2-char-id⟧ => {
-          ⟦2-char-id⟧.current = ⟦2-char-id⟧, HJ(⟦2-char-id⟧)
+          ⟦2-char-id⟧.current = ⟦2-char-id⟧, cB(⟦2-char-id⟧)
         }), [⟦2-char-id⟧]);
         if ("string" !== typeof ⟦2-char-id⟧) throw new Error("value must be typeof string but got " + typeof ⟦2-char-id⟧);
-        var ⟦2-char-id⟧ = "string" === typeof ⟦2-char-id⟧ ? "cm-theme-" + nJ : "cm-theme";
-        return (0, ⟦2-char-id⟧.jsx)("div", (0, ⟦2-char-id⟧.b)({
+        var ⟦2-char-id⟧ = "string" === typeof ⟦2-char-id⟧ ? "cm-theme-" + DB : "cm-theme";
+        return (0, ⟦2-char-id⟧.jsx)("div", (0, ⟦2-char-id⟧.c)({
           ref: ⟦2-char-id⟧,
-          className: ⟦2-char-id⟧ + (⟦2-char-id⟧ ? " " + ZJ : "")
+          className: ⟦2-char-id⟧ + (⟦2-char-id⟧ ? " " + dB : "")
         }, ⟦2-char-id⟧))
       }));
     ⟦2-char-id⟧.displayName = "CodeMirror";
     const ⟦2-char-id⟧ = ⟦2-char-id⟧
   },
-  40070: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  40051: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     function ⟦2-char-id⟧() {
       var ⟦2-char-id⟧ = arguments[0];
       "string" == typeof ⟦2-char-id⟧ && (⟦2-char-id⟧ = document.createElement(⟦2-char-id⟧));
```

</details>

<details>
<summary>Hunk 659 · Change · +3 / -3</summary>

```diff
@@ -17136,12 +17136,12 @@
       }
     }
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      d: () => ⟦2-char-id⟧
+      e: () => ⟦2-char-id⟧
     })
   },
-  40068: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  40043: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧
+      e: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
       ⟦2-char-id⟧ = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1⟦2-char-id⟧ * Math.random()) : Symbol("styleSet"),
```

</details>

<details>
<summary>Hunk 660 · Change · +4 / -4</summary>

```diff
@@ -17157,19 +17157,19 @@
           return /^@/.test(⟦2-char-id⟧) ? [⟦2-char-id⟧] : ⟦2-char-id⟧.split(/,\s*/)
         }
 
-        function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, eJ, ⟦2-char-id⟧) {
+        function ⟦2-char-id⟧(⟦2-char-id⟧, TB, pB, ⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = [],
             ⟦2-char-id⟧ = /^@(\w+)\b/.exec(⟦2-char-id⟧[0]),
             ⟦2-char-id⟧ = ⟦2-char-id⟧ && "keyframes" == ⟦2-char-id⟧[1];
           if (⟦2-char-id⟧ && null == ⟦2-char-id⟧) return ⟦2-char-id⟧.push(⟦2-char-id⟧[0] + ";");
           for (let ⟦2-char-id⟧ in ⟦2-char-id⟧) {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
-            if (/&/.test(⟦2-char-id⟧)) ⟦2-char-id⟧(⟦2-char-id⟧.split(/,\s*/).map((⟦2-char-id⟧ => ⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧.replace(/&/, ⟦2-char-id⟧))))).reduce(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.concat(⟦2-char-id⟧))), XJ, ⟦2-char-id⟧);
+            if (/&/.test(⟦2-char-id⟧)) ⟦2-char-id⟧(⟦2-char-id⟧.split(/,\s*/).map((⟦2-char-id⟧ => ⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧.replace(/&/, ⟦2-char-id⟧))))).reduce(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.concat(⟦2-char-id⟧))), lB, ⟦2-char-id⟧);
             else if (⟦2-char-id⟧ && "object" == typeof ⟦2-char-id⟧) {
               if (!⟦2-char-id⟧) throw new RangeError("The value of a property (" + ⟦2-char-id⟧ + ") should be a primitive value.");
-              ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧), XJ, AJ, ⟦2-char-id⟧)
+              ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧), lB, JB, ⟦2-char-id⟧)
             } else null != ⟦2-char-id⟧ && ⟦2-char-id⟧.push(⟦2-char-id⟧.replace(/_.*/, "").replace(/[A-Z]/g, (⟦2-char-id⟧ => "-" + ⟦2-char-id⟧.toLowerCase())) + ": " + ⟦2-char-id⟧ + ";")
-          }(⟦2-char-id⟧.length || ⟦2-char-id⟧) && ⟦2-char-id⟧.push((!⟦2-char-id⟧ || ⟦2-char-id⟧ || ⟦2-char-id⟧ ? JJ : ⟦2-char-id⟧.map(⟦2-char-id⟧)).join(", ") + " {" + ⟦2-char-id⟧.join(" ") + "}")
+          }(⟦2-char-id⟧.length || ⟦2-char-id⟧) && ⟦2-char-id⟧.push((!⟦2-char-id⟧ || ⟦2-char-id⟧ || ⟦2-char-id⟧ ? BB : ⟦2-char-id⟧.map(⟦2-char-id⟧)).join(", ") + " {" + ⟦2-char-id⟧.join(" ") + "}")
         }
         for (let ⟦2-char-id⟧ in ⟦2-char-id⟧) ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧[⟦2-char-id⟧], this.rules)
       }
```

</details>

<details>
<summary>Hunk 661 · Change · +2 / -2</summary>

```diff
@@ -17180,10 +17180,10 @@
         let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧] || 1;
         return ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧ + 1, "\u037c" + ⟦2-char-id⟧.toString(36)
       }
-      static mount(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      static mount(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
           ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧.nonce;
-        ⟦2-char-id⟧ ? ⟦2-char-id⟧ && ⟦2-char-id⟧.setNonce(⟦2-char-id⟧) : ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.mount(Array.isArray(⟦2-char-id⟧) ? cJ : [⟦2-char-id⟧], ⟦2-char-id⟧)
+        ⟦2-char-id⟧ ? ⟦2-char-id⟧ && ⟦2-char-id⟧.setNonce(⟦2-char-id⟧) : ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.mount(Array.isArray(⟦2-char-id⟧) ? TB : [⟦2-char-id⟧], ⟦2-char-id⟧)
       }
     }
     let ⟦2-char-id⟧ = new Map;
```

</details>

<details>
<summary>Hunk 662 · Change · +1 / -1</summary>

```diff
@@ -17213,7 +17213,7 @@
             ⟦2-char-id⟧ += ⟦2-char-id⟧.rules.length, ⟦2-char-id⟧++
           }
         }
-        if (⟦2-char-id⟧) ⟦2-char-id⟧.adoptedStyleSheets.indexOf(this.sheet) < 0 && (⟦2-char-id⟧.adoptedStyleSheets = [this.sheet, ...cJ.adoptedStyleSheets]);
+        if (⟦2-char-id⟧) ⟦2-char-id⟧.adoptedStyleSheets.indexOf(this.sheet) < 0 && (⟦2-char-id⟧.adoptedStyleSheets = [this.sheet, ...TB.adoptedStyleSheets]);
         else {
           let ⟦2-char-id⟧ = "";
           for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < this.modules.length; ⟦2-char-id⟧++) ⟦2-char-id⟧ += this.modules[⟦2-char-id⟧].getRules() + "\n";
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/275.js</code> · modified · +259 / -259</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +13 / -13</summary>

```diff
@@ -1,31 +1,31 @@
 export const ⟦2-char-id⟧ = 275;
 export const ids = [275];
 export const modules = {
-  40060: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  40036: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+      c: () => ⟦2-char-id⟧,
       d: () => ⟦2-char-id⟧,
+      ChangeSet: () => ⟦2-char-id⟧,
+      e: () => ⟦2-char-id⟧,
       h: () => ⟦2-char-id⟧,
-      ChangeSet: () => ⟦2-char-id⟧,
       i: () => ⟦2-char-id⟧,
-      m: () => ⟦2-char-id⟧,
+      l: () => ⟦2-char-id⟧,
       o: () => ⟦2-char-id⟧,
-      p: () => ⟦2-char-id⟧,
       r: () => ⟦2-char-id⟧,
+      u: () => ⟦2-char-id⟧,
       t: () => ⟦2-char-id⟧,
-      v: () => ⟦2-char-id⟧,
-      u: () => ⟦2-char-id⟧,
+      w: () => ⟦2-char-id⟧,
       x: () => ⟦2-char-id⟧,
       A: () => ⟦2-char-id⟧,
-      E: () => ⟦2-char-id⟧,
-      F: () => ⟦2-char-id⟧,
-      J: () => ⟦2-char-id⟧,
-      L: () => ⟦2-char-id⟧,
+      D: () => ⟦2-char-id⟧,
+      G: () => ⟦2-char-id⟧,
+      K: () => ⟦2-char-id⟧,
+      M: () => ⟦2-char-id⟧,
       P: () => ⟦2-char-id⟧,
+      R: () => ⟦2-char-id⟧,
       S: () => ⟦2-char-id⟧,
       U: () => ⟦2-char-id⟧,
-      X: () => ⟦2-char-id⟧,
-      _: () => ⟦2-char-id⟧,
-      bb: () => ⟦2-char-id⟧
+      Y: () => ⟦2-char-id⟧
     });
     let ⟦2-char-id⟧ = [],
       ⟦2-char-id⟧ = [];
```

</details>

<details>
<summary>Hunk 2 · Change · +5 / -5</summary>

```diff
@@ -47,15 +47,15 @@
       return ⟦2-char-id⟧ >= 127462 && ⟦2-char-id⟧ <= 127487
     }(() => {
       let ⟦2-char-id⟧ = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((⟦2-char-id⟧ => ⟦2-char-id⟧ ? parseInt(⟦2-char-id⟧, 36) : 1));
-      for (let ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++)(⟦2-char-id⟧ % 2 ? UJ : ⟦2-char-id⟧).push(⟦2-char-id⟧ += ⟦2-char-id⟧[⟦2-char-id⟧])
+      for (let ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++)(⟦2-char-id⟧ % 2 ? yB : ⟦2-char-id⟧).push(⟦2-char-id⟧ += ⟦2-char-id⟧[⟦2-char-id⟧])
     })();
     const ⟦2-char-id⟧ = 8205;
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? jJ : ⟦2-char-id⟧)(⟦2-char-id⟧, cJ, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? gB : ⟦2-char-id⟧)(⟦2-char-id⟧, TB, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       if (⟦2-char-id⟧ == ⟦2-char-id⟧.length) return ⟦2-char-id⟧;
       ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧.charCodeAt(⟦2-char-id⟧)) && ⟦2-char-id⟧(⟦2-char-id⟧.charCodeAt(⟦2-char-id⟧ - 1)) && ⟦2-char-id⟧--;
       let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 3 · Change · +1 / -1</summary>

```diff
@@ -76,7 +76,7 @@
       return ⟦2-char-id⟧
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       for (; ⟦2-char-id⟧ > 0;) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - 2, ⟦2-char-id⟧);
         if (⟦2-char-id⟧ < ⟦2-char-id⟧) return ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 4 · Change · +7 / -7</summary>

```diff
@@ -105,26 +105,26 @@
     }
     class ⟦2-char-id⟧ {
       lineAt(⟦2-char-id⟧) {
-        if (⟦2-char-id⟧ < 0 || ⟦2-char-id⟧ > this.length) throw new RangeError(`Invalid position ${JJ} in document of length ${this.length}`);
+        if (⟦2-char-id⟧ < 0 || ⟦2-char-id⟧ > this.length) throw new RangeError(`Invalid position ${BB} in document of length ${this.length}`);
         return this.lineInner(⟦2-char-id⟧, !1, 1, 0)
       }
       line(⟦2-char-id⟧) {
-        if (⟦2-char-id⟧ < 1 || ⟦2-char-id⟧ > this.lines) throw new RangeError(`Invalid line number ${JJ} in ${this.lines}-line document`);
+        if (⟦2-char-id⟧ < 1 || ⟦2-char-id⟧ > this.lines) throw new RangeError(`Invalid line number ${BB} in ${this.lines}-line document`);
         return this.lineInner(⟦2-char-id⟧, !0, 1, 0)
       }
-      replace(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-        [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧(this, JJ, ⟦2-char-id⟧);
+      replace(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+        [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧(this, BB, ⟦2-char-id⟧);
         let ⟦2-char-id⟧ = [];
-        return this.decompose(0, JJ, FJ, 2), ⟦2-char-id⟧.length && ⟦2-char-id⟧.decompose(0, ⟦2-char-id⟧.length, FJ, 3), this.decompose(⟦2-char-id⟧, this.length, FJ, 1), ⟦2-char-id⟧.from(⟦2-char-id⟧, this.length - (⟦2-char-id⟧ - ⟦2-char-id⟧) + ⟦2-char-id⟧.length)
+        return this.decompose(0, BB, VB, 2), ⟦2-char-id⟧.length && ⟦2-char-id⟧.decompose(0, ⟦2-char-id⟧.length, VB, 3), this.decompose(⟦2-char-id⟧, this.length, VB, 1), ⟦2-char-id⟧.from(⟦2-char-id⟧, this.length - (⟦2-char-id⟧ - ⟦2-char-id⟧) + ⟦2-char-id⟧.length)
       }
       append(⟦2-char-id⟧) {
         return this.replace(this.length, this.length, ⟦2-char-id⟧)
       }
       slice(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
-        [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧(this, JJ, ⟦2-char-id⟧);
+        [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧(this, BB, ⟦2-char-id⟧);
         let ⟦2-char-id⟧ = [];
-        return this.decompose(⟦2-char-id⟧, cJ, ZJ, 0), ⟦2-char-id⟧.from(⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧)
+        return this.decompose(⟦2-char-id⟧, TB, dB, 0), ⟦2-char-id⟧.from(⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧)
       }
       ⟦2-char-id⟧(⟦2-char-id⟧) {
         if (⟦2-char-id⟧ == this) return !0;
```

</details>

<details>
<summary>Hunk 5 · Change · +1 / -1</summary>

```diff
@@ -143,7 +143,7 @@
       }
       iterRange(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
-        return new ⟦2-char-id⟧(this, JJ, ⟦2-char-id⟧)
+        return new ⟦2-char-id⟧(this, BB, ⟦2-char-id⟧)
       }
       iterLines(⟦2-char-id⟧, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 6 · Change · +1 / -1</summary>

```diff
@@ -160,7 +160,7 @@
       }
       toJSON() {
         let ⟦2-char-id⟧ = [];
-        return this.flatten(⟦2-char-id⟧), JJ
+        return this.flatten(⟦2-char-id⟧), BB
       }
       constructor() {}
       static of (⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 7 · Change · +4 / -4</summary>

```diff
@@ -183,16 +183,16 @@
       get children() {
         return null
       }
-      lineInner(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      lineInner(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         for (let ⟦2-char-id⟧ = 0;; ⟦2-char-id⟧++) {
           let ⟦2-char-id⟧ = this.text[⟦2-char-id⟧],
             ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧.length;
-          if ((⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧) >= ⟦2-char-id⟧) return new ⟦2-char-id⟧(⟦2-char-id⟧, XJ, ZJ, ⟦2-char-id⟧);
+          if ((⟦2-char-id⟧ ? dB : ⟦2-char-id⟧) >= ⟦2-char-id⟧) return new ⟦2-char-id⟧(⟦2-char-id⟧, lB, dB, ⟦2-char-id⟧);
           ⟦2-char-id⟧ = ⟦2-char-id⟧ + 1, ⟦2-char-id⟧++
         }
       }
-      decompose(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧ <= 0 && ⟦2-char-id⟧ >= this.length ? this : new ⟦2-char-id⟧(⟦2-char-id⟧(this.text, JJ, ⟦2-char-id⟧), Math.min(⟦2-char-id⟧, this.length) - Math.max(0, ⟦2-char-id⟧));
+      decompose(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧ <= 0 && ⟦2-char-id⟧ >= this.length ? this : new ⟦2-char-id⟧(⟦2-char-id⟧(this.text, BB, ⟦2-char-id⟧), Math.min(⟦2-char-id⟧, this.length) - Math.max(0, ⟦2-char-id⟧));
         if (1 & ⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.pop(),
             ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.text, ⟦2-char-id⟧.text.slice(), 0, ⟦2-char-id⟧.length);
```

</details>

<details>
<summary>Hunk 8 · Change · +5 / -5</summary>

```diff
@@ -203,17 +203,17 @@
           }
         } else ⟦2-char-id⟧.push(⟦2-char-id⟧)
       }
-      replace(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-        if (!(⟦2-char-id⟧ instanceof ⟦2-char-id⟧)) return super.replace(⟦2-char-id⟧, cJ, ⟦2-char-id⟧);
-        [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧(this, JJ, ⟦2-char-id⟧);
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧(this.text, rJ(⟦2-char-id⟧.text, vJ(this.text, 0, ⟦2-char-id⟧)), ⟦2-char-id⟧),
+      replace(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+        if (!(⟦2-char-id⟧ instanceof ⟦2-char-id⟧)) return super.replace(⟦2-char-id⟧, TB, ⟦2-char-id⟧);
+        [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧(this, BB, ⟦2-char-id⟧);
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧(this.text, vB(⟦2-char-id⟧.text, mB(this.text, 0, ⟦2-char-id⟧)), ⟦2-char-id⟧),
           ⟦2-char-id⟧ = this.length + ⟦2-char-id⟧.length - (⟦2-char-id⟧ - ⟦2-char-id⟧);
         return ⟦2-char-id⟧.length <= 32 ? new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) : ⟦2-char-id⟧.from(⟦2-char-id⟧.split(⟦2-char-id⟧, []), ⟦2-char-id⟧)
       }
       sliceString(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
           ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
-        [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧(this, JJ, ⟦2-char-id⟧);
+        [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧(this, BB, ⟦2-char-id⟧);
         let ⟦2-char-id⟧ = "";
         for (let ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ <= ⟦2-char-id⟧ && ⟦2-char-id⟧ < this.text.length; ⟦2-char-id⟧++) {
           let ⟦2-char-id⟧ = this.text[⟦2-char-id⟧],
```

</details>

<details>
<summary>Hunk 9 · Change · +1 / -1</summary>

```diff
@@ -232,7 +232,7 @@
         let ⟦2-char-id⟧ = [],
           ⟦2-char-id⟧ = -1;
         for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧ += ⟦2-char-id⟧.length + 1, 32 == ⟦2-char-id⟧.length && (⟦2-char-id⟧.push(new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)), ⟦2-char-id⟧ = [], ⟦2-char-id⟧ = -1);
-        return ⟦2-char-id⟧ > -1 && ⟦2-char-id⟧.push(new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)), cJ
+        return ⟦2-char-id⟧ > -1 && ⟦2-char-id⟧.push(new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)), TB
       }
     }
     class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
```

</details>

<details>
<summary>Hunk 10 · Change · +6 / -6</summary>

```diff
@@ -240,28 +240,28 @@
         super(), this.children = ⟦2-char-id⟧, this.length = ⟦2-char-id⟧, this.lines = 0;
         for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) this.lines += ⟦2-char-id⟧.lines
       }
-      lineInner(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      lineInner(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         for (let ⟦2-char-id⟧ = 0;; ⟦2-char-id⟧++) {
           let ⟦2-char-id⟧ = this.children[⟦2-char-id⟧],
             ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧.length,
             ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧.lines - 1;
-          if ((⟦2-char-id⟧ ? AJ : ⟦2-char-id⟧) >= ⟦2-char-id⟧) return ⟦2-char-id⟧.lineInner(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧);
+          if ((⟦2-char-id⟧ ? JB : ⟦2-char-id⟧) >= ⟦2-char-id⟧) return ⟦2-char-id⟧.lineInner(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧);
           ⟦2-char-id⟧ = ⟦2-char-id⟧ + 1, ⟦2-char-id⟧ = ⟦2-char-id⟧ + 1
         }
       }
-      decompose(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      decompose(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         for (let ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ <= ⟦2-char-id⟧ && ⟦2-char-id⟧ < this.children.length; ⟦2-char-id⟧++) {
           let ⟦2-char-id⟧ = this.children[⟦2-char-id⟧],
             ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧.length;
           if (⟦2-char-id⟧ <= ⟦2-char-id⟧ && ⟦2-char-id⟧ >= ⟦2-char-id⟧) {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧ & ((⟦2-char-id⟧ <= ⟦2-char-id⟧ ? 1 : 0) | (⟦2-char-id⟧ >= ⟦2-char-id⟧ ? 2 : 0));
-            ⟦2-char-id⟧ >= ⟦2-char-id⟧ && ⟦2-char-id⟧ <= ⟦2-char-id⟧ && !⟦2-char-id⟧ ? ⟦2-char-id⟧.push(⟦2-char-id⟧) : ⟦2-char-id⟧.decompose(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ZJ, ⟦2-char-id⟧)
+            ⟦2-char-id⟧ >= ⟦2-char-id⟧ && ⟦2-char-id⟧ <= ⟦2-char-id⟧ && !⟦2-char-id⟧ ? ⟦2-char-id⟧.push(⟦2-char-id⟧) : ⟦2-char-id⟧.decompose(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, dB, ⟦2-char-id⟧)
           }
           ⟦2-char-id⟧ = ⟦2-char-id⟧ + 1
         }
       }
-      replace(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-        if ([⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧(this, JJ, ⟦2-char-id⟧), ⟦2-char-id⟧.lines < this.lines)
+      replace(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+        if ([⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧(this, BB, ⟦2-char-id⟧), ⟦2-char-id⟧.lines < this.lines)
           for (let ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < this.children.length; ⟦2-char-id⟧++) {
             let ⟦2-char-id⟧ = this.children[⟦2-char-id⟧],
               ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧.length;
```

</details>

<details>
<summary>Hunk 11 · Change · +3 / -3</summary>

```diff
@@ -272,16 +272,16 @@
                 let ⟦2-char-id⟧ = this.children.slice();
                 return ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧, new ⟦2-char-id⟧(⟦2-char-id⟧, this.length - (⟦2-char-id⟧ - ⟦2-char-id⟧) + ⟦2-char-id⟧.length)
               }
-              return super.replace(⟦2-char-id⟧, XJ, ⟦2-char-id⟧)
+              return super.replace(⟦2-char-id⟧, lB, ⟦2-char-id⟧)
             }
             ⟦2-char-id⟧ = ⟦2-char-id⟧ + 1
           }
-        return super.replace(⟦2-char-id⟧, cJ, ⟦2-char-id⟧)
+        return super.replace(⟦2-char-id⟧, TB, ⟦2-char-id⟧)
       }
       sliceString(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
           ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
-        [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧(this, JJ, ⟦2-char-id⟧);
+        [⟦2-char-id⟧, ⟦2-char-id⟧] = ⟦2-char-id⟧(this, BB, ⟦2-char-id⟧);
         let ⟦2-char-id⟧ = "";
         for (let ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < this.children.length && ⟦2-char-id⟧ <= ⟦2-char-id⟧; ⟦2-char-id⟧++) {
           let ⟦2-char-id⟧ = this.children[⟦2-char-id⟧],
```

</details>

<details>
<summary>Hunk 12 · Change · +1 / -1</summary>

```diff
@@ -296,7 +296,7 @@
       scanIdentical(⟦2-char-id⟧, ⟦2-char-id⟧) {
         if (!(⟦2-char-id⟧ instanceof ⟦2-char-id⟧)) return 0;
         let ⟦2-char-id⟧ = 0,
-          [⟦2-char-id⟧, UJ, eJ, ⟦2-char-id⟧] = ⟦2-char-id⟧ > 0 ? [0, 0, this.children.length, ⟦2-char-id⟧.children.length] : [this.children.length - 1, ⟦2-char-id⟧.children.length - 1, -1, -1];
+          [⟦2-char-id⟧, yB, pB, ⟦2-char-id⟧] = ⟦2-char-id⟧ > 0 ? [0, 0, this.children.length, ⟦2-char-id⟧.children.length] : [this.children.length - 1, ⟦2-char-id⟧.children.length - 1, -1, -1];
         for (;; ⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧ += ⟦2-char-id⟧) {
           if (⟦2-char-id⟧ == ⟦2-char-id⟧ || ⟦2-char-id⟧ == ⟦2-char-id⟧) return ⟦2-char-id⟧;
           let ⟦2-char-id⟧ = this.children[⟦2-char-id⟧],
```

</details>

<details>
<summary>Hunk 13 · Change · +2 / -2</summary>

```diff
@@ -348,8 +348,8 @@
       return ⟦2-char-id⟧
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧, [""], cJ, ⟦2-char-id⟧)
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+      return ⟦2-char-id⟧(⟦2-char-id⟧, [""], TB, ⟦2-char-id⟧)
     }
     ⟦2-char-id⟧.empty = new ⟦2-char-id⟧([""], 0);
     class ⟦2-char-id⟧ {
```

</details>

<details>
<summary>Hunk 14 · Change · +1 / -1</summary>

```diff
@@ -364,7 +364,7 @@
             ⟦2-char-id⟧ = this.offsets[⟦2-char-id⟧],
             ⟦2-char-id⟧ = ⟦2-char-id⟧ >> 1,
             ⟦2-char-id⟧ = ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ ? ⟦2-char-id⟧.text.length : ⟦2-char-id⟧.children.length;
-          if (⟦2-char-id⟧ == (⟦2-char-id⟧ > 0 ? XJ : 0)) {
+          if (⟦2-char-id⟧ == (⟦2-char-id⟧ > 0 ? lB : 0)) {
             if (0 == ⟦2-char-id⟧) return this.done = !0, this.value = "", this;
             ⟦2-char-id⟧ > 0 && this.offsets[⟦2-char-id⟧ - 1]++, this.nodes.pop(), this.offsets.pop()
           } else if ((1 & ⟦2-char-id⟧) == (⟦2-char-id⟧ > 0 ? 0 : 1)) {
```

</details>

<details>
<summary>Hunk 15 · Change · +1 / -1</summary>

```diff
@@ -372,7 +372,7 @@
             ⟦2-char-id⟧--
           } else if (⟦2-char-id⟧ instanceof ⟦2-char-id⟧) {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧.text[⟦2-char-id⟧ + (⟦2-char-id⟧ < 0 ? -1 : 0)];
-            if (this.offsets[⟦2-char-id⟧] += ⟦2-char-id⟧, ⟦2-char-id⟧.length > Math.max(0, ⟦2-char-id⟧)) return this.value = 0 == ⟦2-char-id⟧ ? UJ : ⟦2-char-id⟧ > 0 ? ⟦2-char-id⟧.slice(⟦2-char-id⟧) : ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧.length - ⟦2-char-id⟧), this;
+            if (this.offsets[⟦2-char-id⟧] += ⟦2-char-id⟧, ⟦2-char-id⟧.length > Math.max(0, ⟦2-char-id⟧)) return this.value = 0 == ⟦2-char-id⟧ ? yB : ⟦2-char-id⟧ > 0 ? ⟦2-char-id⟧.slice(⟦2-char-id⟧) : ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧.length - ⟦2-char-id⟧), this;
             ⟦2-char-id⟧ -= ⟦2-char-id⟧.length
           } else {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧.children[⟦2-char-id⟧ + (⟦2-char-id⟧ < 0 ? -1 : 0)];
```

</details>

<details>
<summary>Hunk 16 · Change · +1 / -1</summary>

```diff
@@ -386,7 +386,7 @@
       }
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         this.value = "", this.done = !1, this.cursor = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ > ⟦2-char-id⟧ ? -1 : 1), this.pos = ⟦2-char-id⟧ > ⟦2-char-id⟧ ? ⟦2-char-id⟧.length : 0, this.from = Math.min(⟦2-char-id⟧, ⟦2-char-id⟧), this.to = Math.max(⟦2-char-id⟧, ⟦2-char-id⟧)
       }
       nextInner(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 17 · Change · +1 / -1</summary>

```diff
@@ -397,7 +397,7 @@
         let {
           value: ⟦2-char-id⟧
         } = this.cursor.next(⟦2-char-id⟧);
-        return this.pos += (⟦2-char-id⟧.length + ⟦2-char-id⟧) * ⟦2-char-id⟧, this.value = ⟦2-char-id⟧.length <= ⟦2-char-id⟧ ? FJ : ⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧.slice(⟦2-char-id⟧.length - ⟦2-char-id⟧) : ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧), this.done = !this.value, this
+        return this.pos += (⟦2-char-id⟧.length + ⟦2-char-id⟧) * ⟦2-char-id⟧, this.value = ⟦2-char-id⟧.length <= ⟦2-char-id⟧ ? VB : ⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧.slice(⟦2-char-id⟧.length - ⟦2-char-id⟧) : ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧), this.done = !this.value, this
       }
       next() {
         let ⟦2-char-id⟧ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
```

</details>

<details>
<summary>Hunk 18 · Change · +1 / -1</summary>

```diff
@@ -430,7 +430,7 @@
       return this
     });
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         this.from = ⟦2-char-id⟧, this.to = ⟦2-char-id⟧, this.number = ⟦2-char-id⟧, this.text = ⟦2-char-id⟧
       }
       get length() {
```

</details>

<details>
<summary>Hunk 19 · Change · +2 / -2</summary>

```diff
@@ -438,12 +438,12 @@
       }
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       return [⟦2-char-id⟧ = Math.max(0, Math.min(⟦2-char-id⟧.length, ⟦2-char-id⟧)), Math.max(⟦2-char-id⟧, Math.min(⟦2-char-id⟧.length, ⟦2-char-id⟧))]
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return ⟦2-char-id⟧(⟦2-char-id⟧, cJ, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
+      return ⟦2-char-id⟧(⟦2-char-id⟧, TB, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 20 · Change · +1 / -1</summary>

```diff
@@ -465,7 +465,7 @@
     }
     const ⟦2-char-id⟧ = /\r\n?|\n/;
     var ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
-      return ⟦2-char-id⟧[⟦2-char-id⟧.Simple = 0] = "Simple", ⟦2-char-id⟧[⟦2-char-id⟧.TrackDel = 1] = "TrackDel", ⟦2-char-id⟧[⟦2-char-id⟧.TrackBefore = 2] = "TrackBefore", ⟦2-char-id⟧[⟦2-char-id⟧.TrackAfter = 3] = "TrackAfter", JJ
+      return ⟦2-char-id⟧[⟦2-char-id⟧.Simple = 0] = "Simple", ⟦2-char-id⟧[⟦2-char-id⟧.TrackDel = 1] = "TrackDel", ⟦2-char-id⟧[⟦2-char-id⟧.TrackBefore = 2] = "TrackBefore", ⟦2-char-id⟧[⟦2-char-id⟧.TrackAfter = 3] = "TrackAfter", BB
     }(⟦2-char-id⟧ || (⟦2-char-id⟧ = {}));
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 21 · Change · +2 / -2</summary>

```diff
@@ -491,11 +491,11 @@
         for (let ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < this.sections.length;) {
           let ⟦2-char-id⟧ = this.sections[⟦2-char-id⟧++],
             ⟦2-char-id⟧ = this.sections[⟦2-char-id⟧++];
-          ⟦2-char-id⟧ < 0 ? (⟦2-char-id⟧(⟦2-char-id⟧, FJ, ⟦2-char-id⟧), ⟦2-char-id⟧ += ⟦2-char-id⟧) : ⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧ += ⟦2-char-id⟧
+          ⟦2-char-id⟧ < 0 ? (⟦2-char-id⟧(⟦2-char-id⟧, VB, ⟦2-char-id⟧), ⟦2-char-id⟧ += ⟦2-char-id⟧) : ⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧ += ⟦2-char-id⟧
         }
       }
       iterChangedRanges(⟦2-char-id⟧) {
-        kJ(this, JJ, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
+        PB(this, BB, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
       }
       get invertedDesc() {
         let ⟦2-char-id⟧ = [];
```

</details>

<details>
<summary>Hunk 22 · Change · +2 / -2</summary>

```diff
@@ -507,11 +507,11 @@
         return new ⟦2-char-id⟧(⟦2-char-id⟧)
       }
       composeDesc(⟦2-char-id⟧) {
-        return this.empty ? JJ : ⟦2-char-id⟧.empty ? this : ⟦2-char-id⟧(this, ⟦2-char-id⟧)
+        return this.empty ? BB : ⟦2-char-id⟧.empty ? this : ⟦2-char-id⟧(this, ⟦2-char-id⟧)
       }
       mapDesc(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-        return ⟦2-char-id⟧.empty ? this : ⟦2-char-id⟧(this, JJ, ⟦2-char-id⟧)
+        return ⟦2-char-id⟧.empty ? this : ⟦2-char-id⟧(this, BB, ⟦2-char-id⟧)
       }
       mapPos(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
```

</details>

<details>
<summary>Hunk 23 · Change · +2 / -2</summary>

```diff
@@ -527,12 +527,12 @@
             ⟦2-char-id⟧ += ⟦2-char-id⟧
           } else {
             if (⟦2-char-id⟧ != ⟦2-char-id⟧.Simple && ⟦2-char-id⟧ >= ⟦2-char-id⟧ && (⟦2-char-id⟧ == ⟦2-char-id⟧.TrackDel && ⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧ > ⟦2-char-id⟧ || ⟦2-char-id⟧ == ⟦2-char-id⟧.TrackBefore && ⟦2-char-id⟧ < ⟦2-char-id⟧ || ⟦2-char-id⟧ == ⟦2-char-id⟧.TrackAfter && ⟦2-char-id⟧ > ⟦2-char-id⟧)) return null;
-            if (⟦2-char-id⟧ > ⟦2-char-id⟧ || ⟦2-char-id⟧ == ⟦2-char-id⟧ && ⟦2-char-id⟧ < 0 && !⟦2-char-id⟧) return ⟦2-char-id⟧ == ⟦2-char-id⟧ || ⟦2-char-id⟧ < 0 ? UJ : ⟦2-char-id⟧ + ⟦2-char-id⟧;
+            if (⟦2-char-id⟧ > ⟦2-char-id⟧ || ⟦2-char-id⟧ == ⟦2-char-id⟧ && ⟦2-char-id⟧ < 0 && !⟦2-char-id⟧) return ⟦2-char-id⟧ == ⟦2-char-id⟧ || ⟦2-char-id⟧ < 0 ? yB : ⟦2-char-id⟧ + ⟦2-char-id⟧;
             ⟦2-char-id⟧ += ⟦2-char-id⟧
           }
           ⟦2-char-id⟧ = ⟦2-char-id⟧
         }
-        if (⟦2-char-id⟧ > ⟦2-char-id⟧) throw new RangeError(`Position ${JJ} is out of range for changeset of length ${FJ}`);
+        if (⟦2-char-id⟧ > ⟦2-char-id⟧) throw new RangeError(`Position ${BB} is out of range for changeset of length ${VB}`);
         return ⟦2-char-id⟧
       }
       touchesRange(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 24 · Change · +1 / -1</summary>

```diff
@@ -549,7 +549,7 @@
         for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < this.sections.length;) {
           let ⟦2-char-id⟧ = this.sections[⟦2-char-id⟧++],
             ⟦2-char-id⟧ = this.sections[⟦2-char-id⟧++];
-          ⟦2-char-id⟧ += (⟦2-char-id⟧ ? " " : "") + ⟦2-char-id⟧ + (⟦2-char-id⟧ >= 0 ? ":" + FJ : "")
+          ⟦2-char-id⟧ += (⟦2-char-id⟧ ? " " : "") + ⟦2-char-id⟧ + (⟦2-char-id⟧ >= 0 ? ":" + VB : "")
         }
         return ⟦2-char-id⟧
       }
```

</details>

<details>
<summary>Hunk 25 · Change · +2 / -2</summary>

```diff
@@ -570,10 +570,10 @@
       }
       apply(⟦2-char-id⟧) {
         if (this.length != ⟦2-char-id⟧.length) throw new RangeError("Applying change set to a document with the wrong length");
-        return ⟦2-char-id⟧(this, ((⟦2-char-id⟧, ZJ, FJ, UJ, ⟦2-char-id⟧) => ⟦2-char-id⟧ = ⟦2-char-id⟧.replace(⟦2-char-id⟧, ⟦2-char-id⟧ + (⟦2-char-id⟧ - ⟦2-char-id⟧), ⟦2-char-id⟧)), !1), JJ
+        return ⟦2-char-id⟧(this, ((⟦2-char-id⟧, dB, VB, yB, ⟦2-char-id⟧) => ⟦2-char-id⟧ = ⟦2-char-id⟧.replace(⟦2-char-id⟧, ⟦2-char-id⟧ + (⟦2-char-id⟧ - ⟦2-char-id⟧), ⟦2-char-id⟧)), !1), BB
       }
       mapDesc(⟦2-char-id⟧) {
-        return ⟦2-char-id⟧(this, JJ, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
+        return ⟦2-char-id⟧(this, BB, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
       }
       invert(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = this.sections.slice(),
```

</details>

<details>
<summary>Hunk 26 · Change · +3 / -3</summary>

```diff
@@ -592,14 +592,14 @@
         return new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
       }
       compose(⟦2-char-id⟧) {
-        return this.empty ? JJ : ⟦2-char-id⟧.empty ? this : ⟦2-char-id⟧(this, JJ, !0)
+        return this.empty ? BB : ⟦2-char-id⟧.empty ? this : ⟦2-char-id⟧(this, BB, !0)
       }
       map(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-        return ⟦2-char-id⟧.empty ? this : ⟦2-char-id⟧(this, JJ, cJ, !0)
+        return ⟦2-char-id⟧.empty ? this : ⟦2-char-id⟧(this, BB, TB, !0)
       }
       iterChanges(⟦2-char-id⟧) {
-        kJ(this, JJ, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
+        PB(this, BB, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
       }
       get desc() {
         return ⟦2-char-id⟧.create(this.sections)
```

</details>

<details>
<summary>Hunk 27 · Change · +4 / -4</summary>

```diff
@@ -609,20 +609,20 @@
           ⟦2-char-id⟧ = [],
           ⟦2-char-id⟧ = [],
           ⟦2-char-id⟧ = new ⟦2-char-id⟧(this);
-        JJ: for (let ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0;;) {
+        BB: for (let ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0;;) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧ == ⟦2-char-id⟧.length ? 1e9 : ⟦2-char-id⟧[⟦2-char-id⟧++];
           for (; ⟦2-char-id⟧ < ⟦2-char-id⟧ || ⟦2-char-id⟧ == ⟦2-char-id⟧ && 0 == ⟦2-char-id⟧.len;) {
             if (⟦2-char-id⟧.done) break ⟦2-char-id⟧;
             let ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.len, ⟦2-char-id⟧ - ⟦2-char-id⟧);
-            ⟦2-char-id⟧(⟦2-char-id⟧, JJ, -1);
+            ⟦2-char-id⟧(⟦2-char-id⟧, BB, -1);
             let ⟦2-char-id⟧ = -1 == ⟦2-char-id⟧.ins ? -1 : 0 == ⟦2-char-id⟧.off ? ⟦2-char-id⟧.ins : 0;
-            ⟦2-char-id⟧(⟦2-char-id⟧, JJ, ⟦2-char-id⟧), ⟦2-char-id⟧ > 0 && ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧.text), ⟦2-char-id⟧.forward(⟦2-char-id⟧), ⟦2-char-id⟧ += ⟦2-char-id⟧
+            ⟦2-char-id⟧(⟦2-char-id⟧, BB, ⟦2-char-id⟧), ⟦2-char-id⟧ > 0 && ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧.text), ⟦2-char-id⟧.forward(⟦2-char-id⟧), ⟦2-char-id⟧ += ⟦2-char-id⟧
           }
           let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧++];
           for (; ⟦2-char-id⟧ < ⟦2-char-id⟧;) {
             if (⟦2-char-id⟧.done) break ⟦2-char-id⟧;
             let ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.len, ⟦2-char-id⟧ - ⟦2-char-id⟧);
-            ⟦2-char-id⟧(⟦2-char-id⟧, JJ, -1), HJ(⟦2-char-id⟧, JJ, -1 == ⟦2-char-id⟧.ins ? -1 : 0 == ⟦2-char-id⟧.off ? ⟦2-char-id⟧.ins : 0), ⟦2-char-id⟧.forward(⟦2-char-id⟧), ⟦2-char-id⟧ += ⟦2-char-id⟧
+            ⟦2-char-id⟧(⟦2-char-id⟧, BB, -1), cB(⟦2-char-id⟧, BB, -1 == ⟦2-char-id⟧.ins ? -1 : 0 == ⟦2-char-id⟧.off ? ⟦2-char-id⟧.ins : 0), ⟦2-char-id⟧.forward(⟦2-char-id⟧), ⟦2-char-id⟧ += ⟦2-char-id⟧
           }
         }
         return {
```

</details>

<details>
<summary>Hunk 28 · Change · +1 / -1</summary>

```diff
@@ -639,7 +639,7 @@
         }
         return ⟦2-char-id⟧
       }
-      static of (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      static of (⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = [],
           ⟦2-char-id⟧ = [],
           ⟦2-char-id⟧ = 0,
```

</details>

<details>
<summary>Hunk 29 · Change · +1 / -1</summary>

```diff
@@ -655,7 +655,7 @@
           if (Array.isArray(⟦2-char-id⟧))
             for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧(⟦2-char-id⟧);
           else if (⟦2-char-id⟧ instanceof ⟦2-char-id⟧) {
-            if (⟦2-char-id⟧.length != ⟦2-char-id⟧) throw new RangeError(`Mismatched change set length (got ${qJ.length}, expected ${cJ})`);
+            if (⟦2-char-id⟧.length != ⟦2-char-id⟧) throw new RangeError(`Mismatched change set length (got ${YB.length}, expected ${TB})`);
             ⟦2-char-id⟧(), ⟦2-char-id⟧ = ⟦2-char-id⟧ ? ⟦2-char-id⟧.compose(⟦2-char-id⟧.map(⟦2-char-id⟧)) : ⟦2-char-id⟧
           } else {
             let {
```

</details>

<details>
<summary>Hunk 30 · Change · +5 / -5</summary>

```diff
@@ -663,13 +663,13 @@
               to: ⟦2-char-id⟧ = ⟦2-char-id⟧,
               insert: ⟦2-char-id⟧
             } = ⟦2-char-id⟧;
-            if (⟦2-char-id⟧ > ⟦2-char-id⟧ || ⟦2-char-id⟧ < 0 || ⟦2-char-id⟧ > ⟦2-char-id⟧) throw new RangeError(`Invalid change range ${JJ} to ${XJ} (in doc of length ${cJ})`);
-            let ⟦2-char-id⟧ = ⟦2-char-id⟧ ? "string" == typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧.of(⟦2-char-id⟧.split(⟦2-char-id⟧ || ⟦2-char-id⟧)) : jJ : ⟦2-char-id⟧.empty,
+            if (⟦2-char-id⟧ > ⟦2-char-id⟧ || ⟦2-char-id⟧ < 0 || ⟦2-char-id⟧ > ⟦2-char-id⟧) throw new RangeError(`Invalid change range ${BB} to ${lB} (in doc of length ${TB})`);
+            let ⟦2-char-id⟧ = ⟦2-char-id⟧ ? "string" == typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧.of(⟦2-char-id⟧.split(⟦2-char-id⟧ || ⟦2-char-id⟧)) : gB : ⟦2-char-id⟧.empty,
               ⟦2-char-id⟧ = ⟦2-char-id⟧.length;
             if (⟦2-char-id⟧ == ⟦2-char-id⟧ && 0 == ⟦2-char-id⟧) return;
-            ⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧(), ⟦2-char-id⟧ > ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, -1), HJ(⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧), PJ(⟦2-char-id⟧, FJ, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧
-          }
-        }(⟦2-char-id⟧), AJ(!⟦2-char-id⟧), XJ
+            ⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧(), ⟦2-char-id⟧ > ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, -1), cB(⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧), SB(⟦2-char-id⟧, VB, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧
+          }
+        }(⟦2-char-id⟧), JB(!⟦2-char-id⟧), lB
       }
       static empty(⟦2-char-id⟧) {
         return new ⟦2-char-id⟧(⟦2-char-id⟧ ? [⟦2-char-id⟧, -1] : [], [])
```

</details>

<details>
<summary>Hunk 31 · Change · +5 / -5</summary>

```diff
@@ -697,14 +697,14 @@
       }
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
       if (0 == ⟦2-char-id⟧ && ⟦2-char-id⟧ <= 0) return;
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.length - 2;
-      ⟦2-char-id⟧ >= 0 && ⟦2-char-id⟧ <= 0 && ⟦2-char-id⟧ == ⟦2-char-id⟧[⟦2-char-id⟧ + 1] ? ⟦2-char-id⟧[⟦2-char-id⟧] += cJ : ⟦2-char-id⟧ >= 0 && 0 == ⟦2-char-id⟧ && 0 == ⟦2-char-id⟧[⟦2-char-id⟧] ? ⟦2-char-id⟧[⟦2-char-id⟧ + 1] += ZJ : ⟦2-char-id⟧ ? (⟦2-char-id⟧[⟦2-char-id⟧] += ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧ + 1] += ⟦2-char-id⟧) : ⟦2-char-id⟧.push(⟦2-char-id⟧, ⟦2-char-id⟧)
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      ⟦2-char-id⟧ >= 0 && ⟦2-char-id⟧ <= 0 && ⟦2-char-id⟧ == ⟦2-char-id⟧[⟦2-char-id⟧ + 1] ? ⟦2-char-id⟧[⟦2-char-id⟧] += TB : ⟦2-char-id⟧ >= 0 && 0 == ⟦2-char-id⟧ && 0 == ⟦2-char-id⟧[⟦2-char-id⟧] ? ⟦2-char-id⟧[⟦2-char-id⟧ + 1] += dB : ⟦2-char-id⟧ ? (⟦2-char-id⟧[⟦2-char-id⟧] += ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧ + 1] += ⟦2-char-id⟧) : ⟦2-char-id⟧.push(⟦2-char-id⟧, ⟦2-char-id⟧)
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       if (0 == ⟦2-char-id⟧.length) return;
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.length - 2 >> 1;
       if (⟦2-char-id⟧ < ⟦2-char-id⟧.length) ⟦2-char-id⟧[⟦2-char-id⟧.length - 1] = ⟦2-char-id⟧[⟦2-char-id⟧.length - 1].append(⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 32 · Change · +1 / -1</summary>

```diff
@@ -714,7 +714,7 @@
       }
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.inserted;
       for (let ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.sections.length;) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.sections[⟦2-char-id⟧++],
```

</details>

<details>
<summary>Hunk 33 · Change · +6 / -6</summary>

```diff
@@ -725,12 +725,12 @@
             ⟦2-char-id⟧ = ⟦2-char-id⟧,
             ⟦2-char-id⟧ = ⟦2-char-id⟧.empty;
           for (; ⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧ += ⟦2-char-id⟧, ⟦2-char-id⟧ && ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.append(⟦2-char-id⟧[⟦2-char-id⟧ - 2 >> 1])), !(⟦2-char-id⟧ || ⟦2-char-id⟧ == ⟦2-char-id⟧.sections.length || ⟦2-char-id⟧.sections[⟦2-char-id⟧ + 1] < 0);) ⟦2-char-id⟧ = ⟦2-char-id⟧.sections[⟦2-char-id⟧++], ⟦2-char-id⟧ = ⟦2-char-id⟧.sections[⟦2-char-id⟧++];
-          ⟦2-char-id⟧(⟦2-char-id⟧, jJ, eJ, YJ, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧
-        }
-      }
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+          ⟦2-char-id⟧(⟦2-char-id⟧, gB, pB, oB, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧
+        }
+      }
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = [],
         ⟦2-char-id⟧ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
         ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 34 · Change · +2 / -2</summary>

```diff
@@ -741,13 +741,13 @@
         if (⟦2-char-id⟧.done && ⟦2-char-id⟧.len || ⟦2-char-id⟧.done && ⟦2-char-id⟧.len) throw new Error("Mismatched change set lengths");
         if (-1 == ⟦2-char-id⟧.ins && -1 == ⟦2-char-id⟧.ins) {
           let ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.len, ⟦2-char-id⟧.len);
-          ⟦2-char-id⟧(⟦2-char-id⟧, JJ, -1), ⟦2-char-id⟧.forward(⟦2-char-id⟧), ⟦2-char-id⟧.forward(⟦2-char-id⟧)
+          ⟦2-char-id⟧(⟦2-char-id⟧, BB, -1), ⟦2-char-id⟧.forward(⟦2-char-id⟧), ⟦2-char-id⟧.forward(⟦2-char-id⟧)
         } else if (⟦2-char-id⟧.ins >= 0 && (⟦2-char-id⟧.ins < 0 || ⟦2-char-id⟧ == ⟦2-char-id⟧.i || 0 == ⟦2-char-id⟧.off && (⟦2-char-id⟧.len < ⟦2-char-id⟧.len || ⟦2-char-id⟧.len == ⟦2-char-id⟧.len && !⟦2-char-id⟧))) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧.len;
           for (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.ins, -1); ⟦2-char-id⟧;) {
             if (++⟦2-char-id⟧ > 2⟦2-char-id⟧) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
             let ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.len, ⟦2-char-id⟧);
-            ⟦2-char-id⟧.ins >= 0 && ⟦2-char-id⟧ < ⟦2-char-id⟧.i && ⟦2-char-id⟧.len <= ⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧, 0, ⟦2-char-id⟧.ins), ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, FJ, ⟦2-char-id⟧.text), ⟦2-char-id⟧ = ⟦2-char-id⟧.i), ⟦2-char-id⟧.forward(⟦2-char-id⟧), ⟦2-char-id⟧ -= ⟦2-char-id⟧
+            ⟦2-char-id⟧.ins >= 0 && ⟦2-char-id⟧ < ⟦2-char-id⟧.i && ⟦2-char-id⟧.len <= ⟦2-char-id⟧ && (⟦2-char-id⟧(⟦2-char-id⟧, 0, ⟦2-char-id⟧.ins), ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, VB, ⟦2-char-id⟧.text), ⟦2-char-id⟧ = ⟦2-char-id⟧.i), ⟦2-char-id⟧.forward(⟦2-char-id⟧), ⟦2-char-id⟧ -= ⟦2-char-id⟧
           }
           ⟦2-char-id⟧.next()
         } else {
```

</details>

<details>
<summary>Hunk 35 · Change · +1 / -1</summary>

```diff
@@ -767,7 +767,7 @@
                 ⟦2-char-id⟧ -= ⟦2-char-id⟧.len, ⟦2-char-id⟧.next()
               }
             }
-            ⟦2-char-id⟧(⟦2-char-id⟧, JJ, ⟦2-char-id⟧ < ⟦2-char-id⟧.i ? ⟦2-char-id⟧.ins : 0), ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧.i && ⟦2-char-id⟧(⟦2-char-id⟧, FJ, ⟦2-char-id⟧.text), ⟦2-char-id⟧ = ⟦2-char-id⟧.i, ⟦2-char-id⟧.forward(⟦2-char-id⟧.len - ⟦2-char-id⟧)
+            ⟦2-char-id⟧(⟦2-char-id⟧, BB, ⟦2-char-id⟧ < ⟦2-char-id⟧.i ? ⟦2-char-id⟧.ins : 0), ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧.i && ⟦2-char-id⟧(⟦2-char-id⟧, VB, ⟦2-char-id⟧.text), ⟦2-char-id⟧ = ⟦2-char-id⟧.i, ⟦2-char-id⟧.forward(⟦2-char-id⟧.len - ⟦2-char-id⟧)
           }
         }
       }
```

</details>

<details>
<summary>Hunk 36 · Change · +3 / -3</summary>

```diff
@@ -790,11 +790,11 @@
               ⟦2-char-id⟧ = ⟦2-char-id⟧.length;
             if (-1 == ⟦2-char-id⟧.ins) {
               let ⟦2-char-id⟧ = -1 == ⟦2-char-id⟧.ins ? -1 : ⟦2-char-id⟧.off ? 0 : ⟦2-char-id⟧.ins;
-              ⟦2-char-id⟧(⟦2-char-id⟧, JJ, cJ, ⟦2-char-id⟧), ⟦2-char-id⟧ && ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧.text)
-            } else - 1 == ⟦2-char-id⟧.ins ? (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.off ? 0 : ⟦2-char-id⟧.len, JJ, ⟦2-char-id⟧), ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧.textBit(⟦2-char-id⟧))) : (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.off ? 0 : ⟦2-char-id⟧.len, ⟦2-char-id⟧.off ? 0 : ⟦2-char-id⟧.ins, ⟦2-char-id⟧), ⟦2-char-id⟧ && !⟦2-char-id⟧.off && ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧.text));
+              ⟦2-char-id⟧(⟦2-char-id⟧, BB, TB, ⟦2-char-id⟧), ⟦2-char-id⟧ && ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, dB, ⟦2-char-id⟧.text)
+            } else - 1 == ⟦2-char-id⟧.ins ? (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.off ? 0 : ⟦2-char-id⟧.len, BB, ⟦2-char-id⟧), ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, dB, ⟦2-char-id⟧.textBit(⟦2-char-id⟧))) : (⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.off ? 0 : ⟦2-char-id⟧.len, ⟦2-char-id⟧.off ? 0 : ⟦2-char-id⟧.ins, ⟦2-char-id⟧), ⟦2-char-id⟧ && !⟦2-char-id⟧.off && ⟦2-char-id⟧(⟦2-char-id⟧, dB, ⟦2-char-id⟧.text));
             ⟦2-char-id⟧ = (⟦2-char-id⟧.ins > ⟦2-char-id⟧ || ⟦2-char-id⟧.ins >= 0 && ⟦2-char-id⟧.len > ⟦2-char-id⟧) && (⟦2-char-id⟧ || ⟦2-char-id⟧.length > ⟦2-char-id⟧), ⟦2-char-id⟧.forward2(⟦2-char-id⟧), ⟦2-char-id⟧.forward(⟦2-char-id⟧)
           }
-        } else ⟦2-char-id⟧(⟦2-char-id⟧, 0, ⟦2-char-id⟧.ins, ⟦2-char-id⟧), ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧.text), ⟦2-char-id⟧.next()
+        } else ⟦2-char-id⟧(⟦2-char-id⟧, 0, ⟦2-char-id⟧.ins, ⟦2-char-id⟧), ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, dB, ⟦2-char-id⟧.text), ⟦2-char-id⟧.next()
       }
     }
     class ⟦2-char-id⟧ {
```

</details>

<details>
<summary>Hunk 37 · Change · +1 / -1</summary>

```diff
@@ -833,7 +833,7 @@
       }
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         this.from = ⟦2-char-id⟧, this.to = ⟦2-char-id⟧, this.flags = ⟦2-char-id⟧
       }
       get anchor() {
```

</details>

<details>
<summary>Hunk 38 · Change · +5 / -5</summary>

```diff
@@ -857,15 +857,15 @@
         return 16777215 == ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧
       }
       map(⟦2-char-id⟧) {
-        let ⟦2-char-id⟧, ZJ, ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
-        return this.empty ? ⟦2-char-id⟧ = ⟦2-char-id⟧ = ⟦2-char-id⟧.mapPos(this.from, ⟦2-char-id⟧) : (⟦2-char-id⟧ = ⟦2-char-id⟧.mapPos(this.from, 1), ⟦2-char-id⟧ = ⟦2-char-id⟧.mapPos(this.to, -1)), ⟦2-char-id⟧ == this.from && ⟦2-char-id⟧ == this.to ? this : new ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, this.flags)
+        let ⟦2-char-id⟧, dB, ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
+        return this.empty ? ⟦2-char-id⟧ = ⟦2-char-id⟧ = ⟦2-char-id⟧.mapPos(this.from, ⟦2-char-id⟧) : (⟦2-char-id⟧ = ⟦2-char-id⟧.mapPos(this.from, 1), ⟦2-char-id⟧ = ⟦2-char-id⟧.mapPos(this.to, -1)), ⟦2-char-id⟧ == this.from && ⟦2-char-id⟧ == this.to ? this : new ⟦2-char-id⟧(⟦2-char-id⟧, dB, this.flags)
       }
       extend(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ⟦2-char-id⟧,
           ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-        if (⟦2-char-id⟧ <= this.anchor && ⟦2-char-id⟧ >= this.anchor) return ⟦2-char-id⟧.range(⟦2-char-id⟧, cJ, void 0, void 0, ⟦2-char-id⟧);
-        let ⟦2-char-id⟧ = Math.abs(⟦2-char-id⟧ - this.anchor) > Math.abs(⟦2-char-id⟧ - this.anchor) ? JJ : ⟦2-char-id⟧;
-        return ⟦2-char-id⟧.range(this.anchor, FJ, void 0, void 0, ⟦2-char-id⟧)
+        if (⟦2-char-id⟧ <= this.anchor && ⟦2-char-id⟧ >= this.anchor) return ⟦2-char-id⟧.range(⟦2-char-id⟧, TB, void 0, void 0, ⟦2-char-id⟧);
+        let ⟦2-char-id⟧ = Math.abs(⟦2-char-id⟧ - this.anchor) > Math.abs(⟦2-char-id⟧ - this.anchor) ? BB : ⟦2-char-id⟧;
+        return ⟦2-char-id⟧.range(this.anchor, VB, void 0, void 0, ⟦2-char-id⟧)
       }
       ⟦2-char-id⟧(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
```

</details>

<details>
<summary>Hunk 39 · Change · +14 / -14</summary>

```diff
@@ -881,49 +881,49 @@
         if (!⟦2-char-id⟧ || "number" != typeof ⟦2-char-id⟧.anchor || "number" != typeof ⟦2-char-id⟧.head) throw new RangeError("Invalid JSON representation for SelectionRange");
         return ⟦2-char-id⟧.range(⟦2-char-id⟧.anchor, ⟦2-char-id⟧.head)
       }
-      static create(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-        return new ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧)
+      static create(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+        return new ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧)
       }
     }
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        this.ws = ⟦2-char-id⟧, this.mainIndex = ⟦2-char-id⟧
+        this.ek = ⟦2-char-id⟧, this.mainIndex = ⟦2-char-id⟧
       }
       map(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
-        return ⟦2-char-id⟧.empty ? this : ⟦2-char-id⟧.create(this.ws.map((⟦2-char-id⟧ => ⟦2-char-id⟧.map(⟦2-char-id⟧, ⟦2-char-id⟧))), this.mainIndex)
+        return ⟦2-char-id⟧.empty ? this : ⟦2-char-id⟧.create(this.ek.map((⟦2-char-id⟧ => ⟦2-char-id⟧.map(⟦2-char-id⟧, ⟦2-char-id⟧))), this.mainIndex)
       }
       ⟦2-char-id⟧(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-        if (this.ws.length != ⟦2-char-id⟧.ws.length || this.mainIndex != ⟦2-char-id⟧.mainIndex) return !1;
-        for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < this.ws.length; ⟦2-char-id⟧++)
-          if (!this.ws[⟦2-char-id⟧].eq(⟦2-char-id⟧.ws[⟦2-char-id⟧], ⟦2-char-id⟧)) return !1;
+        if (this.ek.length != ⟦2-char-id⟧.ek.length || this.mainIndex != ⟦2-char-id⟧.mainIndex) return !1;
+        for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < this.ek.length; ⟦2-char-id⟧++)
+          if (!this.ek[⟦2-char-id⟧].eq(⟦2-char-id⟧.ek[⟦2-char-id⟧], ⟦2-char-id⟧)) return !1;
         return !0
       }
       get main() {
-        return this.ws[this.mainIndex]
+        return this.ek[this.mainIndex]
       }
       asSingle() {
-        return 1 == this.ws.length ? this : new ⟦2-char-id⟧([this.main], 0)
+        return 1 == this.ek.length ? this : new ⟦2-char-id⟧([this.main], 0)
       }
       addRange(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-        return ⟦2-char-id⟧.create([⟦2-char-id⟧].concat(this.ws), ⟦2-char-id⟧ ? 0 : this.mainIndex + 1)
+        return ⟦2-char-id⟧.create([⟦2-char-id⟧].concat(this.ek), ⟦2-char-id⟧ ? 0 : this.mainIndex + 1)
       }
       replaceRange(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
-          ⟦2-char-id⟧ = this.ws.slice();
+          ⟦2-char-id⟧ = this.ek.slice();
         return ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧, ⟦2-char-id⟧.create(⟦2-char-id⟧, this.mainIndex)
       }
       toJSON() {
         return {
-          ws: this.ws.map((⟦2-char-id⟧ => ⟦2-char-id⟧.toJSON())),
+          ek: this.ek.map((⟦2-char-id⟧ => ⟦2-char-id⟧.toJSON())),
           main: this.mainIndex
         }
       }
       static fromJSON(⟦2-char-id⟧) {
-        if (!⟦2-char-id⟧ || !Array.isArray(⟦2-char-id⟧.ws) || "number" != typeof ⟦2-char-id⟧.main || ⟦2-char-id⟧.main >= ⟦2-char-id⟧.ws.length) throw new RangeError("Invalid JSON representation for EditorSelection");
-        return new ⟦2-char-id⟧(⟦2-char-id⟧.ws.map((⟦2-char-id⟧ => ⟦2-char-id⟧.fromJSON(⟦2-char-id⟧))), ⟦2-char-id⟧.main)
+        if (!⟦2-char-id⟧ || !Array.isArray(⟦2-char-id⟧.ek) || "number" != typeof ⟦2-char-id⟧.main || ⟦2-char-id⟧.main >= ⟦2-char-id⟧.ek.length) throw new RangeError("Invalid JSON representation for EditorSelection");
+        return new ⟦2-char-id⟧(⟦2-char-id⟧.ek.map((⟦2-char-id⟧ => ⟦2-char-id⟧.fromJSON(⟦2-char-id⟧))), ⟦2-char-id⟧.main)
       }
       static single(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 40 · Change · +1 / -1</summary>

```diff
@@ -934,7 +934,7 @@
         if (0 == ⟦2-char-id⟧.length) throw new RangeError("A selection needs at least one range");
         for (let ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
-          if (⟦2-char-id⟧.empty ? ⟦2-char-id⟧.from <= ZJ : ⟦2-char-id⟧.from < ⟦2-char-id⟧) return ⟦2-char-id⟧.normalized(⟦2-char-id⟧.slice(), ⟦2-char-id⟧);
+          if (⟦2-char-id⟧.empty ? ⟦2-char-id⟧.from <= dB : ⟦2-char-id⟧.from < ⟦2-char-id⟧) return ⟦2-char-id⟧.normalized(⟦2-char-id⟧.slice(), ⟦2-char-id⟧);
           ⟦2-char-id⟧ = ⟦2-char-id⟧.to
         }
         return new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 41 · Change · +5 / -5</summary>

```diff
@@ -943,11 +943,11 @@
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
           ⟦2-char-id⟧ = arguments.length > 2 ? arguments[2] : void 0,
           ⟦2-char-id⟧ = arguments.length > 3 ? arguments[3] : void 0;
-        return ⟦2-char-id⟧.create(⟦2-char-id⟧, JJ, (0 == ⟦2-char-id⟧ ? 0 : ⟦2-char-id⟧ < 0 ? 8 : 16) | (null == ⟦2-char-id⟧ ? 7 : Math.min(6, ⟦2-char-id⟧)) | (null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? FJ : 16777215) << 6)
-      }
-      static range(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
-        let ⟦2-char-id⟧ = (null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? ZJ : 16777215) << 6 | (null == ⟦2-char-id⟧ ? 7 : Math.min(6, ⟦2-char-id⟧));
-        return ⟦2-char-id⟧ || ⟦2-char-id⟧ == ⟦2-char-id⟧ || (⟦2-char-id⟧ = ⟦2-char-id⟧ < ⟦2-char-id⟧ ? 1 : -1), ⟦2-char-id⟧ < ⟦2-char-id⟧ ? ⟦2-char-id⟧.create(⟦2-char-id⟧, JJ, 48 | ⟦2-char-id⟧) : ⟦2-char-id⟧.create(⟦2-char-id⟧, cJ, (⟦2-char-id⟧ ? ⟦2-char-id⟧ < 0 ? 8 : 16 : 0) | ⟦2-char-id⟧)
+        return ⟦2-char-id⟧.create(⟦2-char-id⟧, BB, (0 == ⟦2-char-id⟧ ? 0 : ⟦2-char-id⟧ < 0 ? 8 : 16) | (null == ⟦2-char-id⟧ ? 7 : Math.min(6, ⟦2-char-id⟧)) | (null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? VB : 16777215) << 6)
+      }
+      static range(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
+        let ⟦2-char-id⟧ = (null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? dB : 16777215) << 6 | (null == ⟦2-char-id⟧ ? 7 : Math.min(6, ⟦2-char-id⟧));
+        return ⟦2-char-id⟧ || ⟦2-char-id⟧ == ⟦2-char-id⟧ || (⟦2-char-id⟧ = ⟦2-char-id⟧ < ⟦2-char-id⟧ ? 1 : -1), ⟦2-char-id⟧ < ⟦2-char-id⟧ ? ⟦2-char-id⟧.create(⟦2-char-id⟧, BB, 48 | ⟦2-char-id⟧) : ⟦2-char-id⟧.create(⟦2-char-id⟧, TB, (⟦2-char-id⟧ ? ⟦2-char-id⟧ < 0 ? 8 : 16 : 0) | ⟦2-char-id⟧)
       }
       static normalized(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
```

</details>

<details>
<summary>Hunk 42 · Change · +2 / -2</summary>

```diff
@@ -967,12 +967,12 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.ws)
+      for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.ek)
         if (⟦2-char-id⟧.to > ⟦2-char-id⟧) throw new RangeError("Selection points outside of document")
     }
     let ⟦2-char-id⟧ = 0;
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
         this.combine = ⟦2-char-id⟧, this.compareInput = ⟦2-char-id⟧, this.compare = ⟦2-char-id⟧, this.isStatic = ⟦2-char-id⟧, this.id = ⟦2-char-id⟧++, this.default = ⟦2-char-id⟧([]), this.extensions = "function" == typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧(this) : ⟦2-char-id⟧
       }
       get reader() {
```

</details>

<details>
<summary>Hunk 43 · Change · +1 / -1</summary>

```diff
@@ -980,7 +980,7 @@
       }
       static define() {
         let ⟦2-char-id⟧ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-        return new ⟦2-char-id⟧(⟦2-char-id⟧.combine || (⟦2-char-id⟧ => ⟦2-char-id⟧), ⟦2-char-id⟧.compareInput || ((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ === ⟦2-char-id⟧), ⟦2-char-id⟧.compare || (⟦2-char-id⟧.combine ? (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ === cJ : ⟦2-char-id⟧), !!⟦2-char-id⟧.static, ⟦2-char-id⟧.enables)
+        return new ⟦2-char-id⟧(⟦2-char-id⟧.combine || (⟦2-char-id⟧ => ⟦2-char-id⟧), ⟦2-char-id⟧.compareInput || ((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ === ⟦2-char-id⟧), ⟦2-char-id⟧.compare || (⟦2-char-id⟧.combine ? (⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ === TB : ⟦2-char-id⟧), !!⟦2-char-id⟧.static, ⟦2-char-id⟧.enables)
       }
       of(⟦2-char-id⟧) {
         return new ⟦2-char-id⟧([], this, 0, ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 44 · Change · +1 / -1</summary>

```diff
@@ -1002,7 +1002,7 @@
       return ⟦2-char-id⟧ == ⟦2-char-id⟧ || ⟦2-char-id⟧.length == ⟦2-char-id⟧.length && ⟦2-char-id⟧.every(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ === ⟦2-char-id⟧[⟦2-char-id⟧]))
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         this.dependencies = ⟦2-char-id⟧, this.facet = ⟦2-char-id⟧, this.type = ⟦2-char-id⟧, this.value = ⟦2-char-id⟧, this.id = ⟦2-char-id⟧++
       }
       dynamicSlot(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 45 · Change · +1 / -1</summary>

```diff
@@ -1015,7 +1015,7 @@
           ⟦2-char-id⟧ = !1,
           ⟦2-char-id⟧ = !1,
           ⟦2-char-id⟧ = [];
-        for (let ⟦2-char-id⟧ of this.dependencies) "doc" == ⟦2-char-id⟧ ? ⟦2-char-id⟧ = !0 : "selection" == ⟦2-char-id⟧ ? ⟦2-char-id⟧ = !0 : 0 == (1 & (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.id]) && void 0 !== ⟦2-char-id⟧ ? cJ : 1)) && ⟦2-char-id⟧.push(⟦2-char-id⟧[⟦2-char-id⟧.id]);
+        for (let ⟦2-char-id⟧ of this.dependencies) "doc" == ⟦2-char-id⟧ ? ⟦2-char-id⟧ = !0 : "selection" == ⟦2-char-id⟧ ? ⟦2-char-id⟧ = !0 : 0 == (1 & (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.id]) && void 0 !== ⟦2-char-id⟧ ? TB : 1)) && ⟦2-char-id⟧.push(⟦2-char-id⟧[⟦2-char-id⟧.id]);
         return {
           create: ⟦2-char-id⟧ => (⟦2-char-id⟧.values[⟦2-char-id⟧] = ⟦2-char-id⟧(⟦2-char-id⟧), 1),
           update(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 46 · Change · +1 / -1</summary>

```diff
@@ -1029,7 +1029,7 @@
             let ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.config.address[⟦2-char-id⟧];
             if (null != ⟦2-char-id⟧) {
               let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
-              if (this.dependencies.every((⟦2-char-id⟧ => ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ ? ⟦2-char-id⟧.facet(⟦2-char-id⟧) === ⟦2-char-id⟧.facet(⟦2-char-id⟧) : !(⟦2-char-id⟧ instanceof ⟦2-char-id⟧) || ⟦2-char-id⟧.field(⟦2-char-id⟧, !1) == ⟦2-char-id⟧.field(⟦2-char-id⟧, !1))) || (⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧), UJ, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧))) return ⟦2-char-id⟧.values[⟦2-char-id⟧] = ⟦2-char-id⟧, 0
+              if (this.dependencies.every((⟦2-char-id⟧ => ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ ? ⟦2-char-id⟧.facet(⟦2-char-id⟧) === ⟦2-char-id⟧.facet(⟦2-char-id⟧) : !(⟦2-char-id⟧ instanceof ⟦2-char-id⟧) || ⟦2-char-id⟧.field(⟦2-char-id⟧, !1) == ⟦2-char-id⟧.field(⟦2-char-id⟧, !1))) || (⟦2-char-id⟧ ? ⟦2-char-id⟧(⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧), yB, ⟦2-char-id⟧) : ⟦2-char-id⟧(⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧), ⟦2-char-id⟧))) return ⟦2-char-id⟧.values[⟦2-char-id⟧] = ⟦2-char-id⟧, 0
             } else ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
             return ⟦2-char-id⟧.values[⟦2-char-id⟧] = ⟦2-char-id⟧, 1
           }
```

</details>

<details>
<summary>Hunk 47 · Change · +1 / -1</summary>

```diff
@@ -1037,7 +1037,7 @@
       }
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       if (⟦2-char-id⟧.length != ⟦2-char-id⟧.length) return !1;
       for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++)
         if (!⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧[⟦2-char-id⟧])) return !1;
```

</details>

<details>
<summary>Hunk 48 · Change · +1 / -1</summary>

```diff
@@ -1050,7 +1050,7 @@
       return ⟦2-char-id⟧
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧[⟦2-char-id⟧.id])),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧.type)),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.filter((⟦2-char-id⟧ => !(1 & ⟦2-char-id⟧))),
```

</details>

<details>
<summary>Hunk 49 · Change · +2 / -2</summary>

```diff
@@ -1090,12 +1090,12 @@
       static: !0
     });
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, FJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, VB, ⟦2-char-id⟧) {
         this.id = ⟦2-char-id⟧, this.createF = ⟦2-char-id⟧, this.updateF = ⟦2-char-id⟧, this.compareF = ⟦2-char-id⟧, this.spec = ⟦2-char-id⟧, this.provides = void 0
       }
       static define(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧++, ⟦2-char-id⟧.create, ⟦2-char-id⟧.update, ⟦2-char-id⟧.compare || ((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ === ⟦2-char-id⟧), ⟦2-char-id⟧);
-        return ⟦2-char-id⟧.provide && (⟦2-char-id⟧.provides = ⟦2-char-id⟧.provide(⟦2-char-id⟧)), cJ
+        return ⟦2-char-id⟧.provide && (⟦2-char-id⟧.provides = ⟦2-char-id⟧.provide(⟦2-char-id⟧)), TB
       }
       create(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.facet(⟦2-char-id⟧).find((⟦2-char-id⟧ => ⟦2-char-id⟧.field == this));
```

</details>

<details>
<summary>Hunk 50 · Change · +3 / -3</summary>

```diff
@@ -1167,18 +1167,18 @@
       }
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, VB, yB, ⟦2-char-id⟧) {
         for (this.base = ⟦2-char-id⟧, this.compartments = ⟦2-char-id⟧, this.dynamicSlots = ⟦2-char-id⟧, this.address = ⟦2-char-id⟧, this.staticValues = ⟦2-char-id⟧, this.facets = ⟦2-char-id⟧, this.statusTemplate = []; this.statusTemplate.length < ⟦2-char-id⟧.length;) this.statusTemplate.push(0)
       }
       staticFacet(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = this.address[⟦2-char-id⟧.id];
         return null == ⟦2-char-id⟧ ? ⟦2-char-id⟧.default : this.staticValues[⟦2-char-id⟧ >> 1]
       }
-      static resolve(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      static resolve(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = [],
           ⟦2-char-id⟧ = Object.create(null),
           ⟦2-char-id⟧ = new Map;
-        for (let ⟦2-char-id⟧ of function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+        for (let ⟦2-char-id⟧ of function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
             let ⟦2-char-id⟧ = [
                 [],
                 [],
```

</details>

<details>
<summary>Hunk 51 · Change · +3 / -3</summary>

```diff
@@ -1200,18 +1200,18 @@
               else if (⟦2-char-id⟧ instanceof ⟦2-char-id⟧) {
                 if (⟦2-char-id⟧.has(⟦2-char-id⟧.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                 let ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧.compartment) || ⟦2-char-id⟧.inner;
-                ⟦2-char-id⟧.set(⟦2-char-id⟧.compartment, ⟦2-char-id⟧), eJ(⟦2-char-id⟧, ⟦2-char-id⟧)
+                ⟦2-char-id⟧.set(⟦2-char-id⟧.compartment, ⟦2-char-id⟧), pB(⟦2-char-id⟧, ⟦2-char-id⟧)
               } else if (⟦2-char-id⟧ instanceof ⟦2-char-id⟧) ⟦2-char-id⟧(⟦2-char-id⟧.inner, ⟦2-char-id⟧.prec);
               else if (⟦2-char-id⟧ instanceof ⟦2-char-id⟧) ⟦2-char-id⟧[⟦2-char-id⟧].push(⟦2-char-id⟧), ⟦2-char-id⟧.provides && ⟦2-char-id⟧(⟦2-char-id⟧.provides, ⟦2-char-id⟧);
               else if (⟦2-char-id⟧ instanceof ⟦2-char-id⟧) ⟦2-char-id⟧[⟦2-char-id⟧].push(⟦2-char-id⟧), ⟦2-char-id⟧.facet.extensions && ⟦2-char-id⟧(⟦2-char-id⟧.facet.extensions, ⟦2-char-id⟧);
               else {
                 let ⟦2-char-id⟧ = ⟦2-char-id⟧.extension;
-                if (!⟦2-char-id⟧) throw new Error(`Unrecognized extension value in extension set (${JJ}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
+                if (!⟦2-char-id⟧) throw new Error(`Unrecognized extension value in extension set (${BB}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                 ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
               }
             }
             return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.reduce(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.concat(⟦2-char-id⟧)))
-          }(⟦2-char-id⟧, cJ, ⟦2-char-id⟧)) ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ ? ⟦2-char-id⟧.push(⟦2-char-id⟧) : (⟦2-char-id⟧[⟦2-char-id⟧.facet.id] || (⟦2-char-id⟧[⟦2-char-id⟧.facet.id] = [])).push(⟦2-char-id⟧);
+          }(⟦2-char-id⟧, TB, ⟦2-char-id⟧)) ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ ? ⟦2-char-id⟧.push(⟦2-char-id⟧) : (⟦2-char-id⟧[⟦2-char-id⟧.facet.id] || (⟦2-char-id⟧[⟦2-char-id⟧.facet.id] = [])).push(⟦2-char-id⟧);
         let ⟦2-char-id⟧ = Object.create(null),
           ⟦2-char-id⟧ = [],
           ⟦2-char-id⟧ = [];
```

</details>

<details>
<summary>Hunk 52 · Change · +3 / -3</summary>

```diff
@@ -1222,18 +1222,18 @@
             ⟦2-char-id⟧ = ⟦2-char-id⟧[0].facet,
             ⟦2-char-id⟧ = ⟦2-char-id⟧ && ⟦2-char-id⟧[⟦2-char-id⟧] || [];
           if (⟦2-char-id⟧.every((⟦2-char-id⟧ => 0 == ⟦2-char-id⟧.type)))
-            if (⟦2-char-id⟧[⟦2-char-id⟧.id] = ⟦2-char-id⟧.length << 1 | 1, iJ(⟦2-char-id⟧, ⟦2-char-id⟧)) ⟦2-char-id⟧.push(⟦2-char-id⟧.facet(⟦2-char-id⟧));
+            if (⟦2-char-id⟧[⟦2-char-id⟧.id] = ⟦2-char-id⟧.length << 1 | 1, GB(⟦2-char-id⟧, ⟦2-char-id⟧)) ⟦2-char-id⟧.push(⟦2-char-id⟧.facet(⟦2-char-id⟧));
             else {
               let ⟦2-char-id⟧ = ⟦2-char-id⟧.combine(⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧.value)));
               ⟦2-char-id⟧.push(⟦2-char-id⟧ && ⟦2-char-id⟧.compare(⟦2-char-id⟧, ⟦2-char-id⟧.facet(⟦2-char-id⟧)) ? ⟦2-char-id⟧.facet(⟦2-char-id⟧) : ⟦2-char-id⟧)
             }
           else {
             for (let ⟦2-char-id⟧ of ⟦2-char-id⟧) 0 == ⟦2-char-id⟧.type ? (⟦2-char-id⟧[⟦2-char-id⟧.id] = ⟦2-char-id⟧.length << 1 | 1, ⟦2-char-id⟧.push(⟦2-char-id⟧.value)) : (⟦2-char-id⟧[⟦2-char-id⟧.id] = ⟦2-char-id⟧.length << 1, ⟦2-char-id⟧.push((⟦2-char-id⟧ => ⟦2-char-id⟧.dynamicSlot(⟦2-char-id⟧))));
-            ⟦2-char-id⟧[⟦2-char-id⟧.id] = ⟦2-char-id⟧.length << 1, ⟦2-char-id⟧.push((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧)))
+            ⟦2-char-id⟧[⟦2-char-id⟧.id] = ⟦2-char-id⟧.length << 1, ⟦2-char-id⟧.push((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧)))
           }
         }
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧)));
-        return new ⟦2-char-id⟧(⟦2-char-id⟧, eJ, YJ, XJ, AJ, ⟦2-char-id⟧)
+        return new ⟦2-char-id⟧(⟦2-char-id⟧, pB, oB, lB, JB, ⟦2-char-id⟧)
       }
     }
 
```

</details>

<details>
<summary>Hunk 53 · Change · +3 / -3</summary>

```diff
@@ -1313,11 +1313,11 @@
     }
     ⟦2-char-id⟧.reconfigure = ⟦2-char-id⟧.define(), ⟦2-char-id⟧.appendConfig = ⟦2-char-id⟧.define();
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, VB, yB, ⟦2-char-id⟧) {
         this.startState = ⟦2-char-id⟧, this.changes = ⟦2-char-id⟧, this.selection = ⟦2-char-id⟧, this.effects = ⟦2-char-id⟧, this.annotations = ⟦2-char-id⟧, this.scrollIntoView = ⟦2-char-id⟧, this._doc = null, this._state = null, ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.newLength), ⟦2-char-id⟧.some((⟦2-char-id⟧ => ⟦2-char-id⟧.type == ⟦2-char-id⟧.time)) || (this.annotations = ⟦2-char-id⟧.concat(⟦2-char-id⟧.time.of(Date.now())))
       }
-      static create(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, ⟦2-char-id⟧) {
-        return new ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, ⟦2-char-id⟧)
+      static create(⟦2-char-id⟧, TB, dB, VB, yB, ⟦2-char-id⟧) {
+        return new ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, yB, ⟦2-char-id⟧)
       }
       get newDoc() {
         return this._doc || (this._doc = this.changes.apply(this.startState.doc))
```

</details>

<details>
<summary>Hunk 54 · Change · +2 / -2</summary>

```diff
@@ -1356,9 +1356,9 @@
       }
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
-      let ⟦2-char-id⟧, eJ, ⟦2-char-id⟧;
+      let ⟦2-char-id⟧, pB, ⟦2-char-id⟧;
       return ⟦2-char-id⟧ ? (⟦2-char-id⟧ = ⟦2-char-id⟧.changes, ⟦2-char-id⟧ = ⟦2-char-id⟧.empty(⟦2-char-id⟧.changes.length), ⟦2-char-id⟧ = ⟦2-char-id⟧.changes.compose(⟦2-char-id⟧.changes)) : (⟦2-char-id⟧ = ⟦2-char-id⟧.changes.map(⟦2-char-id⟧.changes), ⟦2-char-id⟧ = ⟦2-char-id⟧.changes.mapDesc(⟦2-char-id⟧.changes, !0), ⟦2-char-id⟧ = ⟦2-char-id⟧.changes.compose(⟦2-char-id⟧)), {
         changes: ⟦2-char-id⟧,
         selection: ⟦2-char-id⟧.selection ? ⟦2-char-id⟧.selection.map(⟦2-char-id⟧) : null === (⟦2-char-id⟧ = ⟦2-char-id⟧.selection) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.map(⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 55 · Change · +5 / -5</summary>

```diff
@@ -1368,25 +1368,25 @@
       }
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.selection,
         ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.annotations);
       return ⟦2-char-id⟧.userEvent && (⟦2-char-id⟧ = ⟦2-char-id⟧.concat(⟦2-char-id⟧.userEvent.of(⟦2-char-id⟧.userEvent))), {
-        changes: ⟦2-char-id⟧.changes instanceof ⟦2-char-id⟧ ? ⟦2-char-id⟧.changes : ⟦2-char-id⟧.of(⟦2-char-id⟧.changes || [], ZJ, ⟦2-char-id⟧.facet(⟦2-char-id⟧)),
-        selection: ⟦2-char-id⟧ && (⟦2-char-id⟧ instanceof ⟦2-char-id⟧ ? FJ : ⟦2-char-id⟧.single(⟦2-char-id⟧.anchor, ⟦2-char-id⟧.head)),
+        changes: ⟦2-char-id⟧.changes instanceof ⟦2-char-id⟧ ? ⟦2-char-id⟧.changes : ⟦2-char-id⟧.of(⟦2-char-id⟧.changes || [], dB, ⟦2-char-id⟧.facet(⟦2-char-id⟧)),
+        selection: ⟦2-char-id⟧ && (⟦2-char-id⟧ instanceof ⟦2-char-id⟧ ? VB : ⟦2-char-id⟧.single(⟦2-char-id⟧.anchor, ⟦2-char-id⟧.head)),
         effects: ⟦2-char-id⟧(⟦2-char-id⟧.effects),
         annotations: ⟦2-char-id⟧,
         scrollIntoView: !!⟦2-char-id⟧.scrollIntoView
       }
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.length ? ⟦2-char-id⟧[0] : {}, ⟦2-char-id⟧.doc.length);
       ⟦2-char-id⟧.length && !1 === ⟦2-char-id⟧[0].filter && (⟦2-char-id⟧ = !1);
       for (let ⟦2-char-id⟧ = 1; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) {
         !1 === ⟦2-char-id⟧[⟦2-char-id⟧].filter && (⟦2-char-id⟧ = !1);
         let ⟦2-char-id⟧ = !!⟦2-char-id⟧[⟦2-char-id⟧].sequential;
-        ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, yc(⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧ ? ⟦2-char-id⟧.changes.newLength : ⟦2-char-id⟧.doc.length), ⟦2-char-id⟧)
+        ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, MT(⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧ ? ⟦2-char-id⟧.changes.newLength : ⟦2-char-id⟧.doc.length), ⟦2-char-id⟧)
       }
       let ⟦2-char-id⟧ = ⟦2-char-id⟧.create(⟦2-char-id⟧, ⟦2-char-id⟧.changes, ⟦2-char-id⟧.selection, ⟦2-char-id⟧.effects, ⟦2-char-id⟧.annotations, ⟦2-char-id⟧.scrollIntoView);
       return function(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 56 · Change · +3 / -3</summary>

```diff
@@ -1395,9 +1395,9 @@
           ⟦2-char-id⟧ = ⟦2-char-id⟧;
         for (let ⟦2-char-id⟧ = ⟦2-char-id⟧.length - 1; ⟦2-char-id⟧ >= 0; ⟦2-char-id⟧--) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧](⟦2-char-id⟧);
-          ⟦2-char-id⟧ && Object.keys(⟦2-char-id⟧).length && (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, yc(⟦2-char-id⟧, eJ, ⟦2-char-id⟧.changes.newLength), !0))
-        }
-        return ⟦2-char-id⟧ == ⟦2-char-id⟧ ? JJ : ⟦2-char-id⟧.create(⟦2-char-id⟧, ⟦2-char-id⟧.changes, ⟦2-char-id⟧.selection, ⟦2-char-id⟧.effects, ⟦2-char-id⟧.annotations, ⟦2-char-id⟧.scrollIntoView)
+          ⟦2-char-id⟧ && Object.keys(⟦2-char-id⟧).length && (⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, MT(⟦2-char-id⟧, pB, ⟦2-char-id⟧.changes.newLength), !0))
+        }
+        return ⟦2-char-id⟧ == ⟦2-char-id⟧ ? BB : ⟦2-char-id⟧.create(⟦2-char-id⟧, ⟦2-char-id⟧.changes, ⟦2-char-id⟧.selection, ⟦2-char-id⟧.effects, ⟦2-char-id⟧.annotations, ⟦2-char-id⟧.scrollIntoView)
       }(⟦2-char-id⟧ ? function(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.startState,
           ⟦2-char-id⟧ = !0;
```

</details>

<details>
<summary>Hunk 57 · Change · +1 / -1</summary>

```diff
@@ -1407,7 +1407,7 @@
             ⟦2-char-id⟧ = !1;
             break
           }
-          Array.isArray(⟦2-char-id⟧) && (⟦2-char-id⟧ = !0 === ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧))
+          Array.isArray(⟦2-char-id⟧) && (⟦2-char-id⟧ = !0 === ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧))
         }
         if (!0 !== ⟦2-char-id⟧) {
           let ⟦2-char-id⟧, ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 58 · Change · +2 / -2</summary>

```diff
@@ -1416,12 +1416,12 @@
             let ⟦2-char-id⟧ = ⟦2-char-id⟧.changes.filter(⟦2-char-id⟧);
             ⟦2-char-id⟧ = ⟦2-char-id⟧.changes, ⟦2-char-id⟧ = ⟦2-char-id⟧.filtered.mapDesc(⟦2-char-id⟧.changes).invertedDesc
           }
-          ⟦2-char-id⟧ = ⟦2-char-id⟧.create(⟦2-char-id⟧, FJ, ⟦2-char-id⟧.selection && ⟦2-char-id⟧.selection.map(⟦2-char-id⟧), ⟦2-char-id⟧.mapEffects(⟦2-char-id⟧.effects, ⟦2-char-id⟧), ⟦2-char-id⟧.annotations, ⟦2-char-id⟧.scrollIntoView)
+          ⟦2-char-id⟧ = ⟦2-char-id⟧.create(⟦2-char-id⟧, VB, ⟦2-char-id⟧.selection && ⟦2-char-id⟧.selection.map(⟦2-char-id⟧), ⟦2-char-id⟧.mapEffects(⟦2-char-id⟧.effects, ⟦2-char-id⟧), ⟦2-char-id⟧.annotations, ⟦2-char-id⟧.scrollIntoView)
         }
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.facet(⟦2-char-id⟧);
         for (let ⟦2-char-id⟧ = ⟦2-char-id⟧.length - 1; ⟦2-char-id⟧ >= 0; ⟦2-char-id⟧--) {
           let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧](⟦2-char-id⟧);
-          ⟦2-char-id⟧ = ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ ? ZJ : Array.isArray(⟦2-char-id⟧) && 1 == ⟦2-char-id⟧.length && ⟦2-char-id⟧[0] instanceof ⟦2-char-id⟧ ? ⟦2-char-id⟧[0] : ⟦2-char-id⟧(⟦2-char-id⟧, Mc(⟦2-char-id⟧), !1)
+          ⟦2-char-id⟧ = ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ ? dB : Array.isArray(⟦2-char-id⟧) && 1 == ⟦2-char-id⟧.length && ⟦2-char-id⟧[0] instanceof ⟦2-char-id⟧ ? ⟦2-char-id⟧[0] : ⟦2-char-id⟧(⟦2-char-id⟧, UT(⟦2-char-id⟧), !1)
         }
         return ⟦2-char-id⟧
       }(⟦2-char-id⟧) : ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 59 · Change · +2 / -2</summary>

```diff
@@ -1430,10 +1430,10 @@
     const ⟦2-char-id⟧ = [];
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return null == ⟦2-char-id⟧ ? Ic : Array.isArray(⟦2-char-id⟧) ? JJ : [⟦2-char-id⟧]
+      return null == ⟦2-char-id⟧ ? wT : Array.isArray(⟦2-char-id⟧) ? BB : [⟦2-char-id⟧]
     }
     var ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
-      return ⟦2-char-id⟧[⟦2-char-id⟧.Word = 0] = "Word", ⟦2-char-id⟧[⟦2-char-id⟧.Space = 1] = "Space", ⟦2-char-id⟧[⟦2-char-id⟧.Other = 2] = "Other", JJ
+      return ⟦2-char-id⟧[⟦2-char-id⟧.Word = 0] = "Word", ⟦2-char-id⟧[⟦2-char-id⟧.Space = 1] = "Space", ⟦2-char-id⟧[⟦2-char-id⟧.Other = 2] = "Other", BB
     }(⟦2-char-id⟧ || (⟦2-char-id⟧ = {}));
     const ⟦2-char-id⟧ = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
     let ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 60 · Change · +1 / -1</summary>

```diff
@@ -1458,7 +1458,7 @@
       }
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, dB, VB, yB, ⟦2-char-id⟧) {
         this.config = ⟦2-char-id⟧, this.doc = ⟦2-char-id⟧, this.selection = ⟦2-char-id⟧, this.values = ⟦2-char-id⟧, this.status = ⟦2-char-id⟧.statusTemplate.slice(), this.computeSlot = ⟦2-char-id⟧, ⟦2-char-id⟧ && (⟦2-char-id⟧._state = this);
         for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < this.config.dynamicSlots.length; ⟦2-char-id⟧++) ⟦2-char-id⟧(this, ⟦2-char-id⟧ << 1);
         this.computeSlot = null
```

</details>

<details>
<summary>Hunk 61 · Change · +2 / -2</summary>

```diff
@@ -1466,12 +1466,12 @@
       field(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
           ⟦2-char-id⟧ = this.config.address[⟦2-char-id⟧.id];
-        if (null != ⟦2-char-id⟧) return ⟦2-char-id⟧(this, ⟦2-char-id⟧), Yc(this, ⟦2-char-id⟧);
+        if (null != ⟦2-char-id⟧) return ⟦2-char-id⟧(this, ⟦2-char-id⟧), oT(this, ⟦2-char-id⟧);
         if (⟦2-char-id⟧) throw new RangeError("Field is not present in this state")
       }
       update() {
         for (var ⟦2-char-id⟧ = arguments.length, ⟦2-char-id⟧ = new Array(⟦2-char-id⟧), ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧] = arguments[⟦2-char-id⟧];
-        return ⟦2-char-id⟧(this, cJ, !0)
+        return ⟦2-char-id⟧(this, TB, !0)
       }
       applyTransaction(⟦2-char-id⟧) {
         let ⟦2-char-id⟧, ⟦2-char-id⟧ = this.config,
```

</details>

<details>
<summary>Hunk 62 · Change · +2 / -2</summary>

```diff
@@ -1482,10 +1482,10 @@
         for (let ⟦2-char-id⟧ of ⟦2-char-id⟧.effects) ⟦2-char-id⟧.is(⟦2-char-id⟧.reconfigure) ? (⟦2-char-id⟧ && (⟦2-char-id⟧ = new Map, ⟦2-char-id⟧.compartments.forEach(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧))), ⟦2-char-id⟧ = null), ⟦2-char-id⟧.set(⟦2-char-id⟧.value.compartment, ⟦2-char-id⟧.value.extension)) : ⟦2-char-id⟧.is(⟦2-char-id⟧.reconfigure) ? (⟦2-char-id⟧ = null, ⟦2-char-id⟧ = ⟦2-char-id⟧.value) : ⟦2-char-id⟧.is(⟦2-char-id⟧.appendConfig) && (⟦2-char-id⟧ = null, ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧).concat(⟦2-char-id⟧.value));
         if (⟦2-char-id⟧) ⟦2-char-id⟧ = ⟦2-char-id⟧.startState.values.slice();
         else {
-          ⟦2-char-id⟧ = ⟦2-char-id⟧.resolve(⟦2-char-id⟧, UJ, this), ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, this.doc, this.selection, ⟦2-char-id⟧.dynamicSlots.map((() => null)), ((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.reconfigure(⟦2-char-id⟧, this)), null).values
+          ⟦2-char-id⟧ = ⟦2-char-id⟧.resolve(⟦2-char-id⟧, yB, this), ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, this.doc, this.selection, ⟦2-char-id⟧.dynamicSlots.map((() => null)), ((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.reconfigure(⟦2-char-id⟧, this)), null).values
         }
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.startState.facet(⟦2-char-id⟧) ? ⟦2-char-id⟧.newSelection : ⟦2-char-id⟧.newSelection.asSingle();
-        new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.newDoc, eJ, cJ, ((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.update(⟦2-char-id⟧, ⟦2-char-id⟧)), ⟦2-char-id⟧)
+        new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.newDoc, pB, TB, ((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.update(⟦2-char-id⟧, ⟦2-char-id⟧)), ⟦2-char-id⟧)
       }
       replaceSelection(⟦2-char-id⟧) {
         return "string" == typeof ⟦2-char-id⟧ && (⟦2-char-id⟧ = this.toText(⟦2-char-id⟧)), this.changeByRange((⟦2-char-id⟧ => ({
```

</details>

<details>
<summary>Hunk 63 · Change · +3 / -3</summary>

```diff
@@ -1499,12 +1499,12 @@
       }
       changeByRange(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = this.selection,
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.ws[0]),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.ek[0]),
           ⟦2-char-id⟧ = this.changes(⟦2-char-id⟧.changes),
           ⟦2-char-id⟧ = [⟦2-char-id⟧.range],
           ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.effects);
-        for (let ⟦2-char-id⟧ = 1; ⟦2-char-id⟧ < ⟦2-char-id⟧.ws.length; ⟦2-char-id⟧++) {
-          let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.ws[⟦2-char-id⟧]),
+        for (let ⟦2-char-id⟧ = 1; ⟦2-char-id⟧ < ⟦2-char-id⟧.ek.length; ⟦2-char-id⟧++) {
+          let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧.ek[⟦2-char-id⟧]),
             ⟦2-char-id⟧ = this.changes(⟦2-char-id⟧.changes),
             ⟦2-char-id⟧ = ⟦2-char-id⟧.map(⟦2-char-id⟧);
           for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧[⟦2-char-id⟧].map(⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 64 · Change · +1 / -1</summary>

```diff
@@ -1519,7 +1519,7 @@
       }
       changes() {
         let ⟦2-char-id⟧ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
-        return ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ ? JJ : ⟦2-char-id⟧.of(⟦2-char-id⟧, this.doc.length, this.facet(⟦2-char-id⟧.lineSeparator))
+        return ⟦2-char-id⟧ instanceof ⟦2-char-id⟧ ? BB : ⟦2-char-id⟧.of(⟦2-char-id⟧, this.doc.length, this.facet(⟦2-char-id⟧.lineSeparator))
       }
       toText(⟦2-char-id⟧) {
         return ⟦2-char-id⟧.of(⟦2-char-id⟧.split(this.facet(⟦2-char-id⟧.lineSeparator) || ⟦2-char-id⟧))
```

</details>

<details>
<summary>Hunk 65 · Change · +2 / -2</summary>

```diff
@@ -1527,11 +1527,11 @@
       sliceDoc() {
         let ⟦2-char-id⟧ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
           ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
-        return this.doc.sliceString(⟦2-char-id⟧, cJ, this.lineBreak)
+        return this.doc.sliceString(⟦2-char-id⟧, TB, this.lineBreak)
       }
       facet(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = this.config.address[⟦2-char-id⟧.id];
-        return null == ⟦2-char-id⟧ ? ⟦2-char-id⟧.default : (⟦2-char-id⟧(this, ⟦2-char-id⟧), Yc(this, ⟦2-char-id⟧))
+        return null == ⟦2-char-id⟧ ? ⟦2-char-id⟧.default : (⟦2-char-id⟧(this, ⟦2-char-id⟧), oT(this, ⟦2-char-id⟧))
       }
       toJSON(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = {
```

</details>

<details>
<summary>Hunk 66 · Change · +1 / -1</summary>

```diff
@@ -1567,7 +1567,7 @@
           ⟦2-char-id⟧ = ⟦2-char-id⟧.resolve(⟦2-char-id⟧.extensions || [], new Map),
           ⟦2-char-id⟧ = ⟦2-char-id⟧.doc instanceof ⟦2-char-id⟧ ? ⟦2-char-id⟧.doc : ⟦2-char-id⟧.of((⟦2-char-id⟧.doc || "").split(⟦2-char-id⟧.staticFacet(⟦2-char-id⟧.lineSeparator) || ⟦2-char-id⟧)),
           ⟦2-char-id⟧ = ⟦2-char-id⟧.selection ? ⟦2-char-id⟧.selection instanceof ⟦2-char-id⟧ ? ⟦2-char-id⟧.selection : ⟦2-char-id⟧.single(⟦2-char-id⟧.selection.anchor, ⟦2-char-id⟧.selection.head) : ⟦2-char-id⟧.single(0);
-        return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.length), ⟦2-char-id⟧.staticFacet(⟦2-char-id⟧) || (⟦2-char-id⟧ = ⟦2-char-id⟧.asSingle()), new ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, FJ, ⟦2-char-id⟧.dynamicSlots.map((() => null)), ((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.create(⟦2-char-id⟧)), null)
+        return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.length), ⟦2-char-id⟧.staticFacet(⟦2-char-id⟧) || (⟦2-char-id⟧ = ⟦2-char-id⟧.asSingle()), new ⟦2-char-id⟧(⟦2-char-id⟧, dB, VB, ⟦2-char-id⟧.dynamicSlots.map((() => null)), ((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.create(⟦2-char-id⟧)), null)
       }
       get tabSize() {
         return this.facet(⟦2-char-id⟧.tabSize)
```

</details>

<details>
<summary>Hunk 67 · Change · +3 / -3</summary>

```diff
@@ -1587,14 +1587,14 @@
           } return ⟦2-char-id⟧.length && (⟦2-char-id⟧ = ⟦2-char-id⟧.replace(/\$(\$|\d*)/g, ((⟦2-char-id⟧, ⟦2-char-id⟧) => {
           if ("$" == ⟦2-char-id⟧) return "$";
           let ⟦2-char-id⟧ = +(⟦2-char-id⟧ || 1);
-          return !⟦2-char-id⟧ || ⟦2-char-id⟧ > ⟦2-char-id⟧.length ? JJ : ⟦2-char-id⟧[⟦2-char-id⟧ - 1]
-        }))), JJ
+          return !⟦2-char-id⟧ || ⟦2-char-id⟧ > ⟦2-char-id⟧.length ? BB : ⟦2-char-id⟧[⟦2-char-id⟧ - 1]
+        }))), BB
       }
       languageDataAt(⟦2-char-id⟧, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
           ⟦2-char-id⟧ = [];
         for (let ⟦2-char-id⟧ of this.facet(⟦2-char-id⟧))
-          for (let ⟦2-char-id⟧ of ⟦2-char-id⟧(this, cJ, ⟦2-char-id⟧)) Object.prototype.hasOwnProperty.call(⟦2-char-id⟧, ⟦2-char-id⟧) && ⟦2-char-id⟧.push(⟦2-char-id⟧[⟦2-char-id⟧]);
+          for (let ⟦2-char-id⟧ of ⟦2-char-id⟧(this, TB, ⟦2-char-id⟧)) Object.prototype.hasOwnProperty.call(⟦2-char-id⟧, ⟦2-char-id⟧) && ⟦2-char-id⟧.push(⟦2-char-id⟧[⟦2-char-id⟧]);
         return ⟦2-char-id⟧
       }
       charCategorizer(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 68 · Change · +1 / -1</summary>

```diff
@@ -1608,7 +1608,7 @@
           length: ⟦2-char-id⟧
         } = this.doc.lineAt(⟦2-char-id⟧), ⟦2-char-id⟧ = this.charCategorizer(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧;
         for (; ⟦2-char-id⟧ > 0;) {
-          let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, eJ, !1);
+          let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, pB, !1);
           if (⟦2-char-id⟧(⟦2-char-id⟧.slice(⟦2-char-id⟧, ⟦2-char-id⟧)) != ⟦2-char-id⟧.Word) break;
           ⟦2-char-id⟧ = ⟦2-char-id⟧
         }
```

</details>

<details>
<summary>Hunk 69 · Change · +1 / -1</summary>

```diff
@@ -1653,7 +1653,7 @@
       }
       range(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ⟦2-char-id⟧;
-        return ⟦2-char-id⟧.create(⟦2-char-id⟧, cJ, this)
+        return ⟦2-char-id⟧.create(⟦2-char-id⟧, TB, this)
       }
     }
 
```

</details>

<details>
<summary>Hunk 70 · Change · +3 / -3</summary>

```diff
@@ -1662,11 +1662,11 @@
     }
     ⟦2-char-id⟧.prototype.startSide = ⟦2-char-id⟧.prototype.endSide = 0, ⟦2-char-id⟧.prototype.point = !1, ⟦2-char-id⟧.prototype.mapMode = ⟦2-char-id⟧.TrackDel;
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         this.from = ⟦2-char-id⟧, this.to = ⟦2-char-id⟧, this.value = ⟦2-char-id⟧
       }
-      static create(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-        return new ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧)
+      static create(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+        return new ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧)
       }
     }
 
```

</details>

<details>
<summary>Hunk 71 · Change · +8 / -8</summary>

```diff
@@ -1674,24 +1674,24 @@
       return ⟦2-char-id⟧.from - ⟦2-char-id⟧.from || ⟦2-char-id⟧.value.startSide - ⟦2-char-id⟧.value.startSide
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-        this.from = ⟦2-char-id⟧, this.to = ⟦2-char-id⟧, this.value = ⟦2-char-id⟧, this.cFJ = ⟦2-char-id⟧
+      constructor(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+        this.from = ⟦2-char-id⟧, this.to = ⟦2-char-id⟧, this.value = ⟦2-char-id⟧, this.KVB = ⟦2-char-id⟧
       }
       get length() {
         return this.to[this.to.length - 1]
       }
-      findIndex(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      findIndex(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
           ⟦2-char-id⟧ = ⟦2-char-id⟧ ? this.to : this.from;
         for (let ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.length;;) {
           if (⟦2-char-id⟧ == ⟦2-char-id⟧) return ⟦2-char-id⟧;
           let ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧ >> 1,
             ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧] - ⟦2-char-id⟧ || (⟦2-char-id⟧ ? this.value[⟦2-char-id⟧].endSide : this.value[⟦2-char-id⟧].startSide) - ⟦2-char-id⟧;
-          if (⟦2-char-id⟧ == ⟦2-char-id⟧) return ⟦2-char-id⟧ >= 0 ? eJ : ⟦2-char-id⟧;
-          ⟦2-char-id⟧ >= 0 ? ⟦2-char-id⟧ = FJ : ⟦2-char-id⟧ = ⟦2-char-id⟧ + 1
-        }
-      }
-      between(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+          if (⟦2-char-id⟧ == ⟦2-char-id⟧) return ⟦2-char-id⟧ >= 0 ? pB : ⟦2-char-id⟧;
+          ⟦2-char-id⟧ >= 0 ? ⟦2-char-id⟧ = VB : ⟦2-char-id⟧ = ⟦2-char-id⟧ + 1
+        }
+      }
+      between(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         for (let ⟦2-char-id⟧ = this.findIndex(⟦2-char-id⟧, -1⟦2-char-id⟧, !0), ⟦2-char-id⟧ = this.findIndex(⟦2-char-id⟧, 1⟦2-char-id⟧, !1, ⟦2-char-id⟧); ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++)
           if (!1 === ⟦2-char-id⟧(this.from[⟦2-char-id⟧] + ⟦2-char-id⟧, this.to[⟦2-char-id⟧] + ⟦2-char-id⟧, this.value[⟦2-char-id⟧])) return !1
       }
```

</details>

<details>
<summary>Hunk 72 · Change · +1 / -1</summary>

```diff
@@ -1702,7 +1702,7 @@
           ⟦2-char-id⟧ = -1,
           ⟦2-char-id⟧ = -1;
         for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < this.value.length; ⟦2-char-id⟧++) {
-          let ⟦2-char-id⟧, jJ, ⟦2-char-id⟧ = this.value[⟦2-char-id⟧],
+          let ⟦2-char-id⟧, gB, ⟦2-char-id⟧ = this.value[⟦2-char-id⟧],
             ⟦2-char-id⟧ = this.from[⟦2-char-id⟧] + ⟦2-char-id⟧,
             ⟦2-char-id⟧ = this.to[⟦2-char-id⟧] + ⟦2-char-id⟧;
           if (⟦2-char-id⟧ == ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 73 · Change · +7 / -7</summary>

```diff
@@ -1713,24 +1713,24 @@
           (⟦2-char-id⟧ - ⟦2-char-id⟧ || ⟦2-char-id⟧.endSide - ⟦2-char-id⟧.startSide) < 0 || (⟦2-char-id⟧ < 0 && (⟦2-char-id⟧ = ⟦2-char-id⟧), ⟦2-char-id⟧.point && (⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧)), ⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧.push(⟦2-char-id⟧ - ⟦2-char-id⟧), ⟦2-char-id⟧.push(⟦2-char-id⟧ - ⟦2-char-id⟧))
         }
         return {
-          mapped: ⟦2-char-id⟧.length ? new ⟦2-char-id⟧(⟦2-char-id⟧, UJ, ZJ, ⟦2-char-id⟧) : null,
+          mapped: ⟦2-char-id⟧.length ? new ⟦2-char-id⟧(⟦2-char-id⟧, yB, dB, ⟦2-char-id⟧) : null,
           pos: ⟦2-char-id⟧
         }
       }
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-        this.chunkPos = ⟦2-char-id⟧, this.chunk = ⟦2-char-id⟧, this.nextLayer = ⟦2-char-id⟧, this.cFJ = ⟦2-char-id⟧
-      }
-      static create(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
-        return new ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧)
+      constructor(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+        this.chunkPos = ⟦2-char-id⟧, this.chunk = ⟦2-char-id⟧, this.nextLayer = ⟦2-char-id⟧, this.KVB = ⟦2-char-id⟧
+      }
+      static create(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
+        return new ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧)
       }
       get length() {
         let ⟦2-char-id⟧ = this.chunk.length - 1;
         return ⟦2-char-id⟧ < 0 ? 0 : Math.max(this.chunkEnd(⟦2-char-id⟧), this.nextLayer.length)
       }
       get size() {
-        if (this.jn) return 0;
+        if (this.OD) return 0;
         let ⟦2-char-id⟧ = this.nextLayer.size;
         for (let ⟦2-char-id⟧ of this.chunk) ⟦2-char-id⟧ += ⟦2-char-id⟧.value.length;
         return ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 74 · Change · +1 / -1</summary>

```diff
@@ -1746,7 +1746,7 @@
           filterTo: ⟦2-char-id⟧ = this.length
         } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.filter;
         if (0 == ⟦2-char-id⟧.length && !⟦2-char-id⟧) return this;
-        if (⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.slice().sort(⟦2-char-id⟧)), this.jn) return ⟦2-char-id⟧.length ? ⟦2-char-id⟧.of(⟦2-char-id⟧) : this;
+        if (⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.slice().sort(⟦2-char-id⟧)), this.OD) return ⟦2-char-id⟧.length ? ⟦2-char-id⟧.of(⟦2-char-id⟧) : this;
         let ⟦2-char-id⟧ = new ⟦2-char-id⟧(this, null, -1).goto(0),
           ⟦2-char-id⟧ = 0,
           ⟦2-char-id⟧ = [],
```

</details>

<details>
<summary>Hunk 75 · Change · +1 / -1</summary>

```diff
@@ -1756,7 +1756,7 @@
             let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧++];
             ⟦2-char-id⟧.addInner(⟦2-char-id⟧.from, ⟦2-char-id⟧.to, ⟦2-char-id⟧.value) || ⟦2-char-id⟧.push(⟦2-char-id⟧)
           } else 1 == ⟦2-char-id⟧.rangeIndex && ⟦2-char-id⟧.chunkIndex < this.chunk.length && (⟦2-char-id⟧ == ⟦2-char-id⟧.length || this.chunkEnd(⟦2-char-id⟧.chunkIndex) < ⟦2-char-id⟧[⟦2-char-id⟧].from) && (!⟦2-char-id⟧ || ⟦2-char-id⟧ > this.chunkEnd(⟦2-char-id⟧.chunkIndex) || ⟦2-char-id⟧ < this.chunkPos[⟦2-char-id⟧.chunkIndex]) && ⟦2-char-id⟧.addChunk(this.chunkPos[⟦2-char-id⟧.chunkIndex], this.chunk[⟦2-char-id⟧.chunkIndex]) ? ⟦2-char-id⟧.nextChunk() : ((!⟦2-char-id⟧ || ⟦2-char-id⟧ > ⟦2-char-id⟧.to || ⟦2-char-id⟧ < ⟦2-char-id⟧.from || ⟦2-char-id⟧(⟦2-char-id⟧.from, ⟦2-char-id⟧.to, ⟦2-char-id⟧.value)) && (⟦2-char-id⟧.addInner(⟦2-char-id⟧.from, ⟦2-char-id⟧.to, ⟦2-char-id⟧.value) || ⟦2-char-id⟧.push(⟦2-char-id⟧.create(⟦2-char-id⟧.from, ⟦2-char-id⟧.to, ⟦2-char-id⟧.value))), ⟦2-char-id⟧.next());
-        return ⟦2-char-id⟧.finishInner(this.nextLayer.jn && !⟦2-char-id⟧.length ? ⟦2-char-id⟧.empty : this.nextLayer.update({
+        return ⟦2-char-id⟧.finishInner(this.nextLayer.OD && !⟦2-char-id⟧.length ? ⟦2-char-id⟧.empty : this.nextLayer.update({
           add: ⟦2-char-id⟧,
           filter: ⟦2-char-id⟧,
           filterFrom: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 76 · Change · +1 / -1</summary>

```diff
@@ -1764,7 +1764,7 @@
         }))
       }
       map(⟦2-char-id⟧) {
-        if (⟦2-char-id⟧.empty || this.jn) return this;
+        if (⟦2-char-id⟧.empty || this.OD) return this;
         let ⟦2-char-id⟧ = [],
           ⟦2-char-id⟧ = [],
           ⟦2-char-id⟧ = -1;
```

</details>

<details>
<summary>Hunk 77 · Change · +7 / -7</summary>

```diff
@@ -1772,26 +1772,26 @@
           let ⟦2-char-id⟧ = this.chunkPos[⟦2-char-id⟧],
             ⟦2-char-id⟧ = this.chunk[⟦2-char-id⟧],
             ⟦2-char-id⟧ = ⟦2-char-id⟧.touchesRange(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧.length);
-          if (!1 === ⟦2-char-id⟧) ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, ⟦2-char-id⟧.cFJ), ⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧.push(⟦2-char-id⟧.mapPos(⟦2-char-id⟧));
+          if (!1 === ⟦2-char-id⟧) ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, ⟦2-char-id⟧.KVB), ⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧.push(⟦2-char-id⟧.mapPos(⟦2-char-id⟧));
           else if (!0 === ⟦2-char-id⟧) {
             let {
               mapped: ⟦2-char-id⟧,
               pos: ⟦2-char-id⟧
             } = ⟦2-char-id⟧.map(⟦2-char-id⟧, ⟦2-char-id⟧);
-            ⟦2-char-id⟧ && (⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, ⟦2-char-id⟧.cFJ), ⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧.push(⟦2-char-id⟧))
+            ⟦2-char-id⟧ && (⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, ⟦2-char-id⟧.KVB), ⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧.push(⟦2-char-id⟧))
           }
         }
         let ⟦2-char-id⟧ = this.nextLayer.map(⟦2-char-id⟧);
-        return 0 == ⟦2-char-id⟧.length ? UJ : new ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧ || ⟦2-char-id⟧.empty, ⟦2-char-id⟧)
-      }
-      between(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-        if (!this.jn) {
+        return 0 == ⟦2-char-id⟧.length ? yB : new ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧ || ⟦2-char-id⟧.empty, ⟦2-char-id⟧)
+      }
+      between(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+        if (!this.OD) {
           for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < this.chunk.length; ⟦2-char-id⟧++) {
             let ⟦2-char-id⟧ = this.chunkPos[⟦2-char-id⟧],
               ⟦2-char-id⟧ = this.chunk[⟦2-char-id⟧];
             if (⟦2-char-id⟧ >= ⟦2-char-id⟧ && ⟦2-char-id⟧ <= ⟦2-char-id⟧ + ⟦2-char-id⟧.length && !1 === ⟦2-char-id⟧.between(⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧)) return
           }
-          this.nextLayer.between(⟦2-char-id⟧, cJ, ⟦2-char-id⟧)
+          this.nextLayer.between(⟦2-char-id⟧, TB, ⟦2-char-id⟧)
         }
       }
       iter() {
```

</details>

<details>
<summary>Hunk 78 · Change · +12 / -12</summary>

```diff
@@ -1805,33 +1805,33 @@
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
         return ⟦2-char-id⟧.from(⟦2-char-id⟧).goto(⟦2-char-id⟧)
       }
-      static compare(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      static compare(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
-          ⟦2-char-id⟧ = ⟦2-char-id⟧.filter((⟦2-char-id⟧ => ⟦2-char-id⟧.cFJ > 0 || !⟦2-char-id⟧.jn && ⟦2-char-id⟧.cFJ >= ⟦2-char-id⟧)),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧.filter((⟦2-char-id⟧ => ⟦2-char-id⟧.cFJ > 0 || !⟦2-char-id⟧.jn && ⟦2-char-id⟧.cFJ >= ⟦2-char-id⟧)),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, XJ, ⟦2-char-id⟧),
-          ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, AJ, ⟦2-char-id⟧),
-          ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, AJ, ⟦2-char-id⟧);
-        ⟦2-char-id⟧.iterGaps(((⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => ⟦2-char-id⟧(⟦2-char-id⟧, JJ, jJ, cJ, ZJ, ⟦2-char-id⟧))), ⟦2-char-id⟧.empty && 0 == ⟦2-char-id⟧.length && ⟦2-char-id⟧(⟦2-char-id⟧, 0, jJ, 0, 0, ⟦2-char-id⟧)
+          ⟦2-char-id⟧ = ⟦2-char-id⟧.filter((⟦2-char-id⟧ => ⟦2-char-id⟧.KVB > 0 || !⟦2-char-id⟧.OD && ⟦2-char-id⟧.KVB >= ⟦2-char-id⟧)),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧.filter((⟦2-char-id⟧ => ⟦2-char-id⟧.KVB > 0 || !⟦2-char-id⟧.OD && ⟦2-char-id⟧.KVB >= ⟦2-char-id⟧)),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, lB, ⟦2-char-id⟧),
+          ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, JB, ⟦2-char-id⟧),
+          ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, JB, ⟦2-char-id⟧);
+        ⟦2-char-id⟧.iterGaps(((⟦2-char-id⟧, TB, ⟦2-char-id⟧) => ⟦2-char-id⟧(⟦2-char-id⟧, BB, gB, TB, dB, ⟦2-char-id⟧))), ⟦2-char-id⟧.empty && 0 == ⟦2-char-id⟧.length && ⟦2-char-id⟧(⟦2-char-id⟧, 0, gB, 0, 0, ⟦2-char-id⟧)
       }
       static ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
           ⟦2-char-id⟧ = arguments.length > 3 ? arguments[3] : void 0;
         null == ⟦2-char-id⟧ && (⟦2-char-id⟧ = 999999999);
-        let ⟦2-char-id⟧ = ⟦2-char-id⟧.filter((⟦2-char-id⟧ => !⟦2-char-id⟧.jn && ⟦2-char-id⟧.indexOf(⟦2-char-id⟧) < 0)),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧.filter((⟦2-char-id⟧ => !⟦2-char-id⟧.jn && ⟦2-char-id⟧.indexOf(⟦2-char-id⟧) < 0));
+        let ⟦2-char-id⟧ = ⟦2-char-id⟧.filter((⟦2-char-id⟧ => !⟦2-char-id⟧.OD && ⟦2-char-id⟧.indexOf(⟦2-char-id⟧) < 0)),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧.filter((⟦2-char-id⟧ => !⟦2-char-id⟧.OD && ⟦2-char-id⟧.indexOf(⟦2-char-id⟧) < 0));
         if (⟦2-char-id⟧.length != ⟦2-char-id⟧.length) return !1;
         if (!⟦2-char-id⟧.length) return !0;
         let ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧),
-          ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, XJ, 0).goto(⟦2-char-id⟧),
-          ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, XJ, 0).goto(⟦2-char-id⟧);
+          ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, lB, 0).goto(⟦2-char-id⟧),
+          ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, lB, 0).goto(⟦2-char-id⟧);
         for (;;) {
           if (⟦2-char-id⟧.to != ⟦2-char-id⟧.to || !⟦2-char-id⟧(⟦2-char-id⟧.active, ⟦2-char-id⟧.active) || ⟦2-char-id⟧.point && (!⟦2-char-id⟧.point || !⟦2-char-id⟧(⟦2-char-id⟧.point, ⟦2-char-id⟧.point))) return !1;
           if (⟦2-char-id⟧.to > ⟦2-char-id⟧) return !0;
           ⟦2-char-id⟧.next(), ⟦2-char-id⟧.next()
         }
       }
-      static spans(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+      static spans(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(⟦2-char-id⟧),
           ⟦2-char-id⟧ = ⟦2-char-id⟧,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.openStart;
```

</details>

<details>
<summary>Hunk 79 · Change · +2 / -2</summary>

```diff
@@ -1840,8 +1840,8 @@
           if (⟦2-char-id⟧.point) {
             let ⟦2-char-id⟧ = ⟦2-char-id⟧.activeForPoint(⟦2-char-id⟧.to),
               ⟦2-char-id⟧ = ⟦2-char-id⟧.pointFrom < ⟦2-char-id⟧ ? ⟦2-char-id⟧.length + 1 : ⟦2-char-id⟧.point.startSide < 0 ? ⟦2-char-id⟧.length : Math.min(⟦2-char-id⟧.length, ⟦2-char-id⟧);
-            ⟦2-char-id⟧.point(⟦2-char-id⟧, JJ, ⟦2-char-id⟧.point, ZJ, AJ, ⟦2-char-id⟧.pointRank), ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.openEnd(⟦2-char-id⟧), ⟦2-char-id⟧.length)
-          } else ⟦2-char-id⟧ > ⟦2-char-id⟧ && (⟦2-char-id⟧.span(⟦2-char-id⟧, JJ, ⟦2-char-id⟧.active, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.openEnd(⟦2-char-id⟧));
+            ⟦2-char-id⟧.point(⟦2-char-id⟧, BB, ⟦2-char-id⟧.point, dB, JB, ⟦2-char-id⟧.pointRank), ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.openEnd(⟦2-char-id⟧), ⟦2-char-id⟧.length)
+          } else ⟦2-char-id⟧ > ⟦2-char-id⟧ && (⟦2-char-id⟧.span(⟦2-char-id⟧, BB, ⟦2-char-id⟧.active, ⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧.openEnd(⟦2-char-id⟧));
           if (⟦2-char-id⟧.to > ⟦2-char-id⟧) return ⟦2-char-id⟧ + (⟦2-char-id⟧.point && ⟦2-char-id⟧.to > ⟦2-char-id⟧ ? 1 : 0);
           ⟦2-char-id⟧ = ⟦2-char-id⟧.to, ⟦2-char-id⟧.next()
         }
```

</details>

<details>
<summary>Hunk 80 · Change · +10 / -10</summary>

```diff
@@ -1864,29 +1864,29 @@
         if (!⟦2-char-id⟧.length) return ⟦2-char-id⟧.empty;
         let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧.length - 1];
         for (let ⟦2-char-id⟧ = ⟦2-char-id⟧.length - 2; ⟦2-char-id⟧ >= 0; ⟦2-char-id⟧--)
-          for (let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]; ⟦2-char-id⟧ != ⟦2-char-id⟧.empty; ⟦2-char-id⟧ = ⟦2-char-id⟧.nextLayer) ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.chunkPos, ⟦2-char-id⟧.chunk, cJ, Math.max(⟦2-char-id⟧.cFJ, ⟦2-char-id⟧.cFJ));
+          for (let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]; ⟦2-char-id⟧ != ⟦2-char-id⟧.empty; ⟦2-char-id⟧ = ⟦2-char-id⟧.nextLayer) ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧.chunkPos, ⟦2-char-id⟧.chunk, TB, Math.max(⟦2-char-id⟧.KVB, ⟦2-char-id⟧.KVB));
         return ⟦2-char-id⟧
       }
     }
     ⟦2-char-id⟧.empty = new ⟦2-char-id⟧([], [], null, -1), ⟦2-char-id⟧.empty.nextLayer = ⟦2-char-id⟧.empty;
     class ⟦2-char-id⟧ {
       finishChunk(⟦2-char-id⟧) {
-        this.chunks.push(new ⟦2-char-id⟧(this.from, this.to, this.value, this.cFJ)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.cFJ), this.cFJ = -1, ⟦2-char-id⟧ && (this.from = [], this.to = [], this.value = [])
+        this.chunks.push(new ⟦2-char-id⟧(this.from, this.to, this.value, this.KVB)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.KVB), this.KVB = -1, ⟦2-char-id⟧ && (this.from = [], this.to = [], this.value = [])
       }
       constructor() {
-        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1⟦2-char-id⟧, this.lastTo = -1⟦2-char-id⟧, this.from = [], this.to = [], this.value = [], this.cFJ = -1, this.setMaxPoint = -1, this.nextLayer = null
-      }
-      add(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-        this.addInner(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) || (this.nextLayer || (this.nextLayer = new ⟦2-char-id⟧)).add(⟦2-char-id⟧, cJ, ⟦2-char-id⟧)
-      }
-      addInner(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1⟦2-char-id⟧, this.lastTo = -1⟦2-char-id⟧, this.from = [], this.to = [], this.value = [], this.KVB = -1, this.setMaxPoint = -1, this.nextLayer = null
+      }
+      add(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+        this.addInner(⟦2-char-id⟧, TB, ⟦2-char-id⟧) || (this.nextLayer || (this.nextLayer = new ⟦2-char-id⟧)).add(⟦2-char-id⟧, TB, ⟦2-char-id⟧)
+      }
+      addInner(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧ - this.lastTo || ⟦2-char-id⟧.startSide - this.last.endSide;
         if (⟦2-char-id⟧ <= 0 && (⟦2-char-id⟧ - this.lastFrom || ⟦2-char-id⟧.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
-        return !(⟦2-char-id⟧ < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = ⟦2-char-id⟧), this.from.push(⟦2-char-id⟧ - this.chunkStart), this.to.push(⟦2-char-id⟧ - this.chunkStart), this.last = ⟦2-char-id⟧, this.lastFrom = ⟦2-char-id⟧, this.lastTo = ⟦2-char-id⟧, this.value.push(⟦2-char-id⟧), ⟦2-char-id⟧.point && (this.cFJ = Math.max(this.cFJ, ⟦2-char-id⟧ - ⟦2-char-id⟧)), !0)
+        return !(⟦2-char-id⟧ < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = ⟦2-char-id⟧), this.from.push(⟦2-char-id⟧ - this.chunkStart), this.to.push(⟦2-char-id⟧ - this.chunkStart), this.last = ⟦2-char-id⟧, this.lastFrom = ⟦2-char-id⟧, this.lastTo = ⟦2-char-id⟧, this.value.push(⟦2-char-id⟧), ⟦2-char-id⟧.point && (this.KVB = Math.max(this.KVB, ⟦2-char-id⟧ - ⟦2-char-id⟧)), !0)
       }
       addChunk(⟦2-char-id⟧, ⟦2-char-id⟧) {
         if ((⟦2-char-id⟧ - this.lastTo || ⟦2-char-id⟧.value[0].startSide - this.last.endSide) < 0) return !1;
-        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, ⟦2-char-id⟧.cFJ), this.chunks.push(⟦2-char-id⟧), this.chunkPos.push(⟦2-char-id⟧);
+        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, ⟦2-char-id⟧.KVB), this.chunks.push(⟦2-char-id⟧), this.chunkPos.push(⟦2-char-id⟧);
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.value.length - 1;
         return this.last = ⟦2-char-id⟧.value[⟦2-char-id⟧], this.lastFrom = ⟦2-char-id⟧.from[⟦2-char-id⟧] + ⟦2-char-id⟧, this.lastTo = ⟦2-char-id⟧.to[⟦2-char-id⟧] + ⟦2-char-id⟧, !0
       }
```

</details>

<details>
<summary>Hunk 81 · Change · +6 / -6</summary>

```diff
@@ -1896,14 +1896,14 @@
       finishInner(⟦2-char-id⟧) {
         if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return ⟦2-char-id⟧;
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(⟦2-char-id⟧) : ⟦2-char-id⟧, this.setMaxPoint);
-        return this.from = null, cJ
-      }
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+        return this.from = null, TB
+      }
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       let ⟦2-char-id⟧ = new Map;
       for (let ⟦2-char-id⟧ of ⟦2-char-id⟧)
-        for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.chunk.length; ⟦2-char-id⟧++) ⟦2-char-id⟧.chunk[⟦2-char-id⟧].cFJ <= 0 && ⟦2-char-id⟧.set(⟦2-char-id⟧.chunk[⟦2-char-id⟧], ⟦2-char-id⟧.chunkPos[⟦2-char-id⟧]);
+        for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.chunk.length; ⟦2-char-id⟧++) ⟦2-char-id⟧.chunk[⟦2-char-id⟧].KVB <= 0 && ⟦2-char-id⟧.set(⟦2-char-id⟧.chunk[⟦2-char-id⟧], ⟦2-char-id⟧.chunkPos[⟦2-char-id⟧]);
       let ⟦2-char-id⟧ = new Set;
       for (let ⟦2-char-id⟧ of ⟦2-char-id⟧)
         for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.chunk.length; ⟦2-char-id⟧++) {
```

</details>

<details>
<summary>Hunk 82 · Change · +2 / -2</summary>

```diff
@@ -1913,9 +1913,9 @@
       return ⟦2-char-id⟧
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-        this.layer = ⟦2-char-id⟧, this.skip = ⟦2-char-id⟧, this.ZFJ = ⟦2-char-id⟧, this.rank = ⟦2-char-id⟧
+        this.layer = ⟦2-char-id⟧, this.skip = ⟦2-char-id⟧, this.rVB = ⟦2-char-id⟧, this.rank = ⟦2-char-id⟧
       }
       get startSide() {
         return this.value ? this.value.startSide : 0
```

</details>

<details>
<summary>Hunk 83 · Change · +6 / -6</summary>

```diff
@@ -1925,22 +1925,22 @@
       }
       goto(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1⟦2-char-id⟧;
-        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(⟦2-char-id⟧, cJ, !1), this
-      }
-      gotoInner(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(⟦2-char-id⟧, TB, !1), this
+      }
+      gotoInner(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
         for (; this.chunkIndex < this.layer.chunk.length;) {
           let ⟦2-char-id⟧ = this.layer.chunk[this.chunkIndex];
-          if (!(this.skip && this.skip.has(⟦2-char-id⟧) || this.layer.chunkEnd(this.chunkIndex) < ⟦2-char-id⟧ || ⟦2-char-id⟧.cFJ < this.ZFJ)) break;
+          if (!(this.skip && this.skip.has(⟦2-char-id⟧) || this.layer.chunkEnd(this.chunkIndex) < ⟦2-char-id⟧ || ⟦2-char-id⟧.KVB < this.rVB)) break;
           this.chunkIndex++, ⟦2-char-id⟧ = !1
         }
         if (this.chunkIndex < this.layer.chunk.length) {
-          let ⟦2-char-id⟧ = this.layer.chunk[this.chunkIndex].findIndex(⟦2-char-id⟧ - this.layer.chunkPos[this.chunkIndex], cJ, !0);
+          let ⟦2-char-id⟧ = this.layer.chunk[this.chunkIndex].findIndex(⟦2-char-id⟧ - this.layer.chunkPos[this.chunkIndex], TB, !0);
           (!⟦2-char-id⟧ || this.rangeIndex < ⟦2-char-id⟧) && this.setRangeIndex(⟦2-char-id⟧)
         }
         this.next()
       }
       forward(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        (this.to - ⟦2-char-id⟧ || this.endSide - ⟦2-char-id⟧) < 0 && this.gotoInner(⟦2-char-id⟧, cJ, !0)
+        (this.to - ⟦2-char-id⟧ || this.endSide - ⟦2-char-id⟧) < 0 && this.gotoInner(⟦2-char-id⟧, TB, !0)
       }
       next() {
         for (;;) {
```

</details>

<details>
<summary>Hunk 84 · Change · +1 / -1</summary>

```diff
@@ -1951,7 +1951,7 @@
             let ⟦2-char-id⟧ = this.layer.chunkPos[this.chunkIndex],
               ⟦2-char-id⟧ = this.layer.chunk[this.chunkIndex],
               ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧.from[this.rangeIndex];
-            if (this.from = ⟦2-char-id⟧, this.to = ⟦2-char-id⟧ + ⟦2-char-id⟧.to[this.rangeIndex], this.value = ⟦2-char-id⟧.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.ZFJ < 0 || this.value.point && this.to - this.from >= this.ZFJ) break
+            if (this.from = ⟦2-char-id⟧, this.to = ⟦2-char-id⟧ + ⟦2-char-id⟧.to[this.rangeIndex], this.value = ⟦2-char-id⟧.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.rVB < 0 || this.value.point && this.to - this.from >= this.rVB) break
           }
         }
       }
```

</details>

<details>
<summary>Hunk 85 · Change · +1 / -1</summary>

```diff
@@ -1978,7 +1978,7 @@
           ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
           ⟦2-char-id⟧ = [];
         for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++)
-          for (let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]; !⟦2-char-id⟧.jn; ⟦2-char-id⟧ = ⟦2-char-id⟧.nextLayer) ⟦2-char-id⟧.cFJ >= ⟦2-char-id⟧ && ⟦2-char-id⟧.push(new ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧));
+          for (let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]; !⟦2-char-id⟧.OD; ⟦2-char-id⟧ = ⟦2-char-id⟧.nextLayer) ⟦2-char-id⟧.KVB >= ⟦2-char-id⟧ && ⟦2-char-id⟧.push(new ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧));
         return 1 == ⟦2-char-id⟧.length ? ⟦2-char-id⟧[0] : new ⟦2-char-id⟧(⟦2-char-id⟧)
       }
       get startSide() {
```

</details>

<details>
<summary>Hunk 86 · Change · +1 / -1</summary>

```diff
@@ -1999,7 +1999,7 @@
         if (0 == this.heap.length) this.from = this.to = 1⟦2-char-id⟧, this.value = null, this.rank = -1;
         else {
           let ⟦2-char-id⟧ = this.heap[0];
-          this.from = ⟦2-char-id⟧.from, this.to = ⟦2-char-id⟧.to, this.value = ⟦2-char-id⟧.value, this.rank = ⟦2-char-id⟧.rank, ⟦2-char-id⟧.value && ⟦2-char-id⟧.next(), Rc(this.heap, 0)
+          this.from = ⟦2-char-id⟧.from, this.to = ⟦2-char-id⟧.to, this.value = ⟦2-char-id⟧.value, this.rank = ⟦2-char-id⟧.rank, ⟦2-char-id⟧.value && ⟦2-char-id⟧.next(), qT(this.heap, 0)
         }
       }
     }
```

</details>

<details>
<summary>Hunk 87 · Change · +2 / -2</summary>

```diff
@@ -2014,8 +2014,8 @@
       }
     }
     class ⟦2-char-id⟧ {
-      constructor(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
-        this.ZFJ = ⟦2-char-id⟧, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1⟦2-char-id⟧, this.endSide = 0, this.openStart = -1, this.cursor = ⟦2-char-id⟧.from(⟦2-char-id⟧, cJ, ⟦2-char-id⟧)
+      constructor(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
+        this.rVB = ⟦2-char-id⟧, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1⟦2-char-id⟧, this.endSide = 0, this.openStart = -1, this.cursor = ⟦2-char-id⟧.from(⟦2-char-id⟧, TB, ⟦2-char-id⟧)
       }
       goto(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 88 · Change · +1 / -1</summary>

```diff
@@ -2026,7 +2026,7 @@
         this.cursor.forward(⟦2-char-id⟧, ⟦2-char-id⟧)
       }
       removeActive(⟦2-char-id⟧) {
-        tc(this.active, ⟦2-char-id⟧), tc(this.activeTo, ⟦2-char-id⟧), tc(this.activeRank, ⟦2-char-id⟧), this.minActive = ⟦2-char-id⟧(this.active, this.activeTo)
+        bT(this.active, ⟦2-char-id⟧), bT(this.activeTo, ⟦2-char-id⟧), bT(this.activeRank, ⟦2-char-id⟧), this.minActive = ⟦2-char-id⟧(this.active, this.activeTo)
       }
       addActive(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = 0,
```

</details>

<details>
<summary>Hunk 89 · Change · +1 / -1</summary>

```diff
@@ -2036,7 +2036,7 @@
             rank: ⟦2-char-id⟧
           } = this.cursor;
         for (; ⟦2-char-id⟧ < this.activeRank.length && (⟦2-char-id⟧ - this.activeRank[⟦2-char-id⟧] || ⟦2-char-id⟧ - this.activeTo[⟦2-char-id⟧]) > 0;) ⟦2-char-id⟧++;
-        ⟦2-char-id⟧(this.active, cJ, ⟦2-char-id⟧), oc(this.activeTo, cJ, ⟦2-char-id⟧), oc(this.activeRank, cJ, ⟦2-char-id⟧), ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, cJ, this.cursor.from), this.minActive = ⟦2-char-id⟧(this.active, this.activeTo)
+        ⟦2-char-id⟧(this.active, TB, ⟦2-char-id⟧), nT(this.activeTo, TB, ⟦2-char-id⟧), nT(this.activeRank, TB, ⟦2-char-id⟧), ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, TB, this.cursor.from), this.minActive = ⟦2-char-id⟧(this.active, this.activeTo)
       }
       next() {
         let ⟦2-char-id⟧ = this.to,
```

</details>

<details>
<summary>Hunk 90 · Change · +1 / -1</summary>

```diff
@@ -2089,7 +2089,7 @@
       }
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, FJ, UJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, VB, yB, ⟦2-char-id⟧) {
       ⟦2-char-id⟧.goto(⟦2-char-id⟧), ⟦2-char-id⟧.goto(⟦2-char-id⟧);
       let ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧,
         ⟦2-char-id⟧ = ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 91 · Change · +2 / -2</summary>

```diff
@@ -2098,9 +2098,9 @@
       for (let ⟦2-char-id⟧ = !1;;) {
         let ⟦2-char-id⟧ = ⟦2-char-id⟧.to + ⟦2-char-id⟧ - ⟦2-char-id⟧.to,
           ⟦2-char-id⟧ = ⟦2-char-id⟧ || ⟦2-char-id⟧.endSide - ⟦2-char-id⟧.endSide,
-          ⟦2-char-id⟧ = ⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧.to + qJ : ⟦2-char-id⟧.to,
+          ⟦2-char-id⟧ = ⟦2-char-id⟧ < 0 ? ⟦2-char-id⟧.to + YB : ⟦2-char-id⟧.to,
           ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧, ⟦2-char-id⟧);
-        if (⟦2-char-id⟧.point || ⟦2-char-id⟧.point ? (⟦2-char-id⟧.point && ⟦2-char-id⟧.point && ⟦2-char-id⟧(⟦2-char-id⟧.point, ⟦2-char-id⟧.point) && ⟦2-char-id⟧(⟦2-char-id⟧.activeForPoint(⟦2-char-id⟧.to), ⟦2-char-id⟧.activeForPoint(⟦2-char-id⟧.to)) || ⟦2-char-id⟧.comparePoint(⟦2-char-id⟧, hJ, ⟦2-char-id⟧.point, ⟦2-char-id⟧.point), ⟦2-char-id⟧ = !1) : (⟦2-char-id⟧ && ⟦2-char-id⟧.boundChange(⟦2-char-id⟧), ⟦2-char-id⟧ > ⟦2-char-id⟧ && !⟦2-char-id⟧(⟦2-char-id⟧.active, ⟦2-char-id⟧.active) && ⟦2-char-id⟧.compareRange(⟦2-char-id⟧, hJ, ⟦2-char-id⟧.active, ⟦2-char-id⟧.active), ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧ && (⟦2-char-id⟧ || ⟦2-char-id⟧.openEnd(⟦2-char-id⟧) != ⟦2-char-id⟧.openEnd(⟦2-char-id⟧)) && (⟦2-char-id⟧ = !0)), ⟦2-char-id⟧ > ⟦2-char-id⟧) break;
+        if (⟦2-char-id⟧.point || ⟦2-char-id⟧.point ? (⟦2-char-id⟧.point && ⟦2-char-id⟧.point && ⟦2-char-id⟧(⟦2-char-id⟧.point, ⟦2-char-id⟧.point) && ⟦2-char-id⟧(⟦2-char-id⟧.activeForPoint(⟦2-char-id⟧.to), ⟦2-char-id⟧.activeForPoint(⟦2-char-id⟧.to)) || ⟦2-char-id⟧.comparePoint(⟦2-char-id⟧, kB, ⟦2-char-id⟧.point, ⟦2-char-id⟧.point), ⟦2-char-id⟧ = !1) : (⟦2-char-id⟧ && ⟦2-char-id⟧.boundChange(⟦2-char-id⟧), ⟦2-char-id⟧ > ⟦2-char-id⟧ && !⟦2-char-id⟧(⟦2-char-id⟧.active, ⟦2-char-id⟧.active) && ⟦2-char-id⟧.compareRange(⟦2-char-id⟧, kB, ⟦2-char-id⟧.active, ⟦2-char-id⟧.active), ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧ && (⟦2-char-id⟧ || ⟦2-char-id⟧.openEnd(⟦2-char-id⟧) != ⟦2-char-id⟧.openEnd(⟦2-char-id⟧)) && (⟦2-char-id⟧ = !0)), ⟦2-char-id⟧ > ⟦2-char-id⟧) break;
         ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ <= 0 && ⟦2-char-id⟧.next(), ⟦2-char-id⟧ >= 0 && ⟦2-char-id⟧.next()
       }
     }
```

</details>

<details>
<summary>Hunk 92 · Change · +1 / -1</summary>

```diff
@@ -2117,7 +2117,7 @@
       ⟦2-char-id⟧.pop()
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       for (let ⟦2-char-id⟧ = ⟦2-char-id⟧.length - 1; ⟦2-char-id⟧ >= ⟦2-char-id⟧; ⟦2-char-id⟧--) ⟦2-char-id⟧[⟦2-char-id⟧ + 1] = ⟦2-char-id⟧[⟦2-char-id⟧];
       ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧
     }
```

</details>

<details>
<summary>Hunk 93 · Change · +2 / -2</summary>

```diff
@@ -2136,11 +2136,11 @@
       return ⟦2-char-id⟧
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, ⟦2-char-id⟧) {
       for (let ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0;;) {
         if (⟦2-char-id⟧ >= ⟦2-char-id⟧) return ⟦2-char-id⟧;
         if (⟦2-char-id⟧ == ⟦2-char-id⟧.length) break;
-        ⟦2-char-id⟧ += 9 == ⟦2-char-id⟧.charCodeAt(⟦2-char-id⟧) ? ⟦2-char-id⟧ - ⟦2-char-id⟧ % ZJ : 1, ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
+        ⟦2-char-id⟧ += 9 == ⟦2-char-id⟧.charCodeAt(⟦2-char-id⟧) ? ⟦2-char-id⟧ - ⟦2-char-id⟧ % dB : 1, ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
       }
       return !0 === ⟦2-char-id⟧ ? -1 : ⟦2-char-id⟧.length
     }
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/276.js</code> · modified · +18 / -18</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +6 / -6</summary>

```diff
@@ -1,17 +1,17 @@
 export const ⟦2-char-id⟧ = 276;
 export const ids = [276];
 export const modules = {
-  40130: ⟦2-char-id⟧ => {
+  40128: ⟦2-char-id⟧ => {
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = new Error("Cannot find module '" + ⟦2-char-id⟧ + "'");
-      throw ⟦2-char-id⟧.code = "MODULE_NOT_FOUND", cJ
+      throw ⟦2-char-id⟧.code = "MODULE_NOT_FOUND", TB
     }
-    ⟦2-char-id⟧.keys = () => [], ⟦2-char-id⟧.resolve = ⟦2-char-id⟧, ⟦2-char-id⟧.id = 40130, ⟦2-char-id⟧.exports = ⟦2-char-id⟧
+    ⟦2-char-id⟧.keys = () => [], ⟦2-char-id⟧.resolve = ⟦2-char-id⟧, ⟦2-char-id⟧.id = 40128, ⟦2-char-id⟧.exports = ⟦2-char-id⟧
   },
-  40197: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  40193: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧,
-      d: () => ⟦2-char-id⟧
+      e: () => ⟦2-char-id⟧,
+      f: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = "Sends one question to the AI",
       ⟦2-char-id⟧ = {
```

</details>

<details>
<summary>Hunk 2 · Change · +2 / -2</summary>

```diff
@@ -19,9 +19,9 @@
         "data-asks-ai": !0
       }
   },
-  40103: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  40096: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      c: () => ⟦2-char-id⟧
+      e: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = String.raw`
 	/** The ID of the player running the code.
```

</details>

<details>
<summary>Hunk 3 · Change · +10 / -10</summary>

```diff
@@ -4213,21 +4213,21 @@
 		nameColour: "default" | "yellow" | "lime" | "green" | "aqua" | "cyan" | "blue" | "purple" | "pink" | "red" | "orange"
 	}`
   },
-  40177: ⟦2-char-id⟧ => {
+  40174: ⟦2-char-id⟧ => {
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = new Error("Cannot find module '" + ⟦2-char-id⟧ + "'");
-      throw ⟦2-char-id⟧.code = "MODULE_NOT_FOUND", cJ
+      throw ⟦2-char-id⟧.code = "MODULE_NOT_FOUND", TB
     }
-    ⟦2-char-id⟧.keys = () => [], ⟦2-char-id⟧.resolve = ⟦2-char-id⟧, ⟦2-char-id⟧.id = 40177, ⟦2-char-id⟧.exports = ⟦2-char-id⟧
+    ⟦2-char-id⟧.keys = () => [], ⟦2-char-id⟧.resolve = ⟦2-char-id⟧, ⟦2-char-id⟧.id = 40174, ⟦2-char-id⟧.exports = ⟦2-char-id⟧
   },
-  40126: () => {},
-  40165: () => {},
-  40149: () => {},
-  40183: () => {},
-  40161: () => {},
+  40124: () => {},
+  40163: () => {},
+  40142: () => {},
+  40179: () => {},
   40155: () => {},
-  40142: () => {},
-  40169: () => {}
+  40151: () => {},
+  40140: () => {},
+  40170: () => {}
 };
 Object.freeze(modules);
 for (const ⟦2-char-id⟧ in modules) Object.freeze(modules[⟦2-char-id⟧]);
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/277.js</code> · modified · +4 / -4</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +2 / -2</summary>

```diff
@@ -1,9 +1,9 @@
 export const ⟦2-char-id⟧ = 277;
 export const ids = [277];
 export const modules = {
-  40111: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  40107: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧
+      c: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = String.raw`interface Map<K, V> {
     clear(): void;
```

</details>

<details>
<summary>Hunk 2 · Change · +2 / -2</summary>

```diff
@@ -6409,9 +6409,9 @@
     f16round(x: number): number;
 }`
   },
-  40107: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  40104: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      e: () => ⟦2-char-id⟧
+      c: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = String.raw`import type {
 	GameApi,
```

</details>

</details>

<details>
<summary><code>bundles/bloxd.io/chunks/js/278.js</code> · modified · +24 / -24</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +1 / -1</summary>

```diff
@@ -1,7 +1,7 @@
 export const ⟦2-char-id⟧ = 278;
 export const ids = [278];
 export const modules = {
-  40118: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  40115: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     function ⟦2-char-id⟧() {
       return ⟦2-char-id⟧ = Object.assign ? Object.assign.bind() : function(⟦2-char-id⟧) {
         for (var ⟦2-char-id⟧ = 1; ⟦2-char-id⟧ < arguments.length; ⟦2-char-id⟧++) {
```

</details>

<details>
<summary>Hunk 2 · Change · +2 / -2</summary>

```diff
@@ -12,8 +12,8 @@
       }, ⟦2-char-id⟧.apply(null, arguments)
     }
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      b: () => ⟦2-char-id⟧,
-      c: () => ⟦2-char-id⟧
+      d: () => ⟦2-char-id⟧,
+      f: () => ⟦2-char-id⟧
     });
     var ⟦2-char-id⟧ = !1;
     try {
```

</details>

<details>
<summary>Hunk 3 · Change · +5 / -5</summary>

```diff
@@ -32,18 +32,18 @@
         return ""
       };
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ZJ, UJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, dB, yB, ⟦2-char-id⟧) {
       void 0 === ⟦2-char-id⟧ && (⟦2-char-id⟧ = {});
-      var ⟦2-char-id⟧ = ⟦2-char-id⟧({}, YJ(⟦2-char-id⟧), ⟦2-char-id⟧),
-        ⟦2-char-id⟧ = function(⟦2-char-id⟧, cJ, ZJ, UJ, ⟦2-char-id⟧) {
+      var ⟦2-char-id⟧ = ⟦2-char-id⟧({}, oB(⟦2-char-id⟧), ⟦2-char-id⟧),
+        ⟦2-char-id⟧ = function(⟦2-char-id⟧, TB, dB, yB, ⟦2-char-id⟧) {
           var ⟦2-char-id⟧ = [].concat(⟦2-char-id⟧),
-            ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ZJ, ⟦2-char-id⟧),
+            ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, dB, ⟦2-char-id⟧),
             ⟦2-char-id⟧ = ⟦2-char-id⟧.compilerHost,
             ⟦2-char-id⟧ = ⟦2-char-id⟧.updateFile,
             ⟦2-char-id⟧ = ⟦2-char-id⟧.deleteFile,
             ⟦2-char-id⟧ = new Map,
             ⟦2-char-id⟧ = 0,
-            ⟦2-char-id⟧ = ⟦2-char-id⟧({}, qJ, {
+            ⟦2-char-id⟧ = ⟦2-char-id⟧({}, YB, {
               getProjectVersion: function() {
                 return ⟦2-char-id⟧.toString()
               },
```

</details>

<details>
<summary>Hunk 4 · Change · +4 / -4</summary>

```diff
@@ -68,22 +68,22 @@
             ⟦2-char-id⟧ = {
               languageServiceHost: ⟦2-char-id⟧,
               updateFile: function(⟦2-char-id⟧) {
-                ⟦2-char-id⟧++, ⟦2-char-id⟧.set(⟦2-char-id⟧.fileName, ⟦2-char-id⟧.toString()), ⟦2-char-id⟧.includes(⟦2-char-id⟧.fileName) || ⟦2-char-id⟧.push(⟦2-char-id⟧.fileName), jJ(⟦2-char-id⟧)
+                ⟦2-char-id⟧++, ⟦2-char-id⟧.set(⟦2-char-id⟧.fileName, ⟦2-char-id⟧.toString()), ⟦2-char-id⟧.includes(⟦2-char-id⟧.fileName) || ⟦2-char-id⟧.push(⟦2-char-id⟧.fileName), gB(⟦2-char-id⟧)
               },
               deleteFile: function(⟦2-char-id⟧) {
                 ⟦2-char-id⟧++, ⟦2-char-id⟧.set(⟦2-char-id⟧.fileName, ⟦2-char-id⟧.toString());
-                var ⟦2-char-id⟧ = ⟦2-char-id⟧.indexOf(⟦2-char-id⟧.fileName); - 1 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.splice(⟦2-char-id⟧, 1), YJ(⟦2-char-id⟧)
+                var ⟦2-char-id⟧ = ⟦2-char-id⟧.indexOf(⟦2-char-id⟧.fileName); - 1 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.splice(⟦2-char-id⟧, 1), oB(⟦2-char-id⟧)
               }
             };
           return ⟦2-char-id⟧
-        }(⟦2-char-id⟧, cJ, XJ, ZJ, ⟦2-char-id⟧),
+        }(⟦2-char-id⟧, TB, lB, dB, ⟦2-char-id⟧),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.languageServiceHost,
         ⟦2-char-id⟧ = ⟦2-char-id⟧.updateFile,
         ⟦2-char-id⟧ = ⟦2-char-id⟧.deleteFile,
         ⟦2-char-id⟧ = ⟦2-char-id⟧.createLanguageService(⟦2-char-id⟧),
         ⟦2-char-id⟧ = ⟦2-char-id⟧.getCompilerOptionsDiagnostics();
       if (⟦2-char-id⟧.length) {
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, UJ, ⟦2-char-id⟧);
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, yB, ⟦2-char-id⟧);
         throw new Error(⟦2-char-id⟧.formatDiagnostics(⟦2-char-id⟧, ⟦2-char-id⟧.compilerHost))
       }
       return {
```

</details>

<details>
<summary>Hunk 5 · Change · +5 / -5</summary>

```diff
@@ -95,15 +95,15 @@
           return null == (⟦2-char-id⟧ = ⟦2-char-id⟧.getProgram()) ? void 0 : ⟦2-char-id⟧.getSourceFile(⟦2-char-id⟧)
         },
         createFile: function(⟦2-char-id⟧, ⟦2-char-id⟧) {
-          jJ(⟦2-char-id⟧.createSourceFile(⟦2-char-id⟧, cJ, ⟦2-char-id⟧.target, !1))
-        },
-        updateFile: function(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+          gB(⟦2-char-id⟧.createSourceFile(⟦2-char-id⟧, TB, ⟦2-char-id⟧.target, !1))
+        },
+        updateFile: function(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
           var ⟦2-char-id⟧ = ⟦2-char-id⟧.getProgram().getSourceFile(⟦2-char-id⟧);
           if (!⟦2-char-id⟧) throw new Error("Did not find a source file for " + ⟦2-char-id⟧);
           var ⟦2-char-id⟧ = ⟦2-char-id⟧.text,
-            ⟦2-char-id⟧ = null != ⟦2-char-id⟧ ? FJ : ⟦2-char-id⟧.createTextSpan(0, ⟦2-char-id⟧.length),
+            ⟦2-char-id⟧ = null != ⟦2-char-id⟧ ? VB : ⟦2-char-id⟧.createTextSpan(0, ⟦2-char-id⟧.length),
             ⟦2-char-id⟧ = ⟦2-char-id⟧.slice(0, ⟦2-char-id⟧.start) + ⟦2-char-id⟧ + ⟦2-char-id⟧.slice(⟦2-char-id⟧.start + ⟦2-char-id⟧.length),
-            ⟦2-char-id⟧ = ⟦2-char-id⟧.updateSourceFile(⟦2-char-id⟧, AJ, {
+            ⟦2-char-id⟧ = ⟦2-char-id⟧.updateSourceFile(⟦2-char-id⟧, JB, {
               span: ⟦2-char-id⟧,
               newLength: ⟦2-char-id⟧.length
             });
```

</details>

<details>
<summary>Hunk 6 · Change · +1 / -1</summary>

```diff
@@ -125,7 +125,7 @@
         for (var ⟦2-char-id⟧ = arguments.length, ⟦2-char-id⟧ = new Array(⟦2-char-id⟧), ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧] = arguments[⟦2-char-id⟧];
         var ⟦2-char-id⟧ = ⟦2-char-id⟧.apply(void 0, ⟦2-char-id⟧),
           ⟦2-char-id⟧ = "string" === typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧.slice(0, 80) + "..." : ⟦2-char-id⟧;
-        return ⟦2-char-id⟧.apply(void 0, ["> " + ⟦2-char-id⟧].concat(⟦2-char-id⟧)), XJ("< " + ⟦2-char-id⟧), eJ
+        return ⟦2-char-id⟧.apply(void 0, ["> " + ⟦2-char-id⟧].concat(⟦2-char-id⟧)), lB("< " + ⟦2-char-id⟧), pB
       }
     }
     var ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 7 · Change · +1 / -1</summary>

```diff
@@ -178,7 +178,7 @@
         })),
         readFile: ⟦2-char-id⟧("readFile", (function(⟦2-char-id⟧) {
           var ⟦2-char-id⟧;
-          return null != (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) ? ZJ : ⟦2-char-id⟧.get(⟦2-char-id⟧(⟦2-char-id⟧))
+          return null != (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) ? dB : ⟦2-char-id⟧.get(⟦2-char-id⟧(⟦2-char-id⟧))
         })),
         resolvePath: function(⟦2-char-id⟧) {
           return ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 8 · Change · +2 / -2</summary>

```diff
@@ -197,10 +197,10 @@
       }
     }
 
-    function ⟦2-char-id⟧(⟦2-char-id⟧, cJ, ⟦2-char-id⟧) {
+    function ⟦2-char-id⟧(⟦2-char-id⟧, TB, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧ = new Map;
       return {
-        compilerHost: ⟦2-char-id⟧({}, JJ, {
+        compilerHost: ⟦2-char-id⟧({}, BB, {
           getCanonicalFileName: function(⟦2-char-id⟧) {
             return ⟦2-char-id⟧
           },
```

</details>

<details>
<summary>Hunk 9 · Change · +1 / -1</summary>

```diff
@@ -212,7 +212,7 @@
           },
           getSourceFile: function(⟦2-char-id⟧, ⟦2-char-id⟧) {
             var ⟦2-char-id⟧, ⟦2-char-id⟧;
-            return ⟦2-char-id⟧.get(⟦2-char-id⟧) || (⟦2-char-id⟧ = ⟦2-char-id⟧.createSourceFile(⟦2-char-id⟧, ⟦2-char-id⟧.readFile(⟦2-char-id⟧), null != (⟦2-char-id⟧ = null != ⟦2-char-id⟧ ? eJ : ⟦2-char-id⟧.target) ? XJ : ⟦2-char-id⟧(⟦2-char-id⟧).target, !1), ⟦2-char-id⟧.set(⟦2-char-id⟧.fileName, ⟦2-char-id⟧), ⟦2-char-id⟧)
+            return ⟦2-char-id⟧.get(⟦2-char-id⟧) || (⟦2-char-id⟧ = ⟦2-char-id⟧.createSourceFile(⟦2-char-id⟧, ⟦2-char-id⟧.readFile(⟦2-char-id⟧), null != (⟦2-char-id⟧ = null != ⟦2-char-id⟧ ? pB : ⟦2-char-id⟧.target) ? lB : ⟦2-char-id⟧(⟦2-char-id⟧).target, !1), ⟦2-char-id⟧.set(⟦2-char-id⟧.fileName, ⟦2-char-id⟧), ⟦2-char-id⟧)
           },
           useCaseSensitiveFileNames: function() {
             return ⟦2-char-id⟧.useCaseSensitiveFileNames
```

</details>

<details>
<summary>Hunk 10 · Change · +2 / -2</summary>

```diff
@@ -220,11 +220,11 @@
         }),
         updateFile: function(⟦2-char-id⟧) {
           var ⟦2-char-id⟧ = ⟦2-char-id⟧.has(⟦2-char-id⟧.fileName);
-          return ⟦2-char-id⟧.writeFile(⟦2-char-id⟧.fileName, ⟦2-char-id⟧.text), ⟦2-char-id⟧.set(⟦2-char-id⟧.fileName, ⟦2-char-id⟧), ZJ
+          return ⟦2-char-id⟧.writeFile(⟦2-char-id⟧.fileName, ⟦2-char-id⟧.text), ⟦2-char-id⟧.set(⟦2-char-id⟧.fileName, ⟦2-char-id⟧), dB
         },
         deleteFile: function(⟦2-char-id⟧) {
           var ⟦2-char-id⟧ = ⟦2-char-id⟧.has(⟦2-char-id⟧.fileName);
-          return ⟦2-char-id⟧.delete(⟦2-char-id⟧.fileName), ⟦2-char-id⟧.deleteFile(⟦2-char-id⟧.fileName), ZJ
+          return ⟦2-char-id⟧.delete(⟦2-char-id⟧.fileName), ⟦2-char-id⟧.deleteFile(⟦2-char-id⟧.fileName), dB
         }
       }
     }
```

</details>

</details>
