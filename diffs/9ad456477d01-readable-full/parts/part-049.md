# Historical build diff — part 049

- Base: e7e20713782fba2472c7866f1ac5b84e503e7647
- Build: 9ad456477d01ce4e7883eecb0f575724f962561f
- Files in this part: 1

<details>
<summary><code>bundles/staging.bloxd.io/chunks/js/67.js</code> · modified · +35 / -35</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +5 / -5</summary>

```diff
@@ -1,15 +1,15 @@
 export const ⟦2-char-id⟧ = 67;
 export const ids = [67];
 export const modules = {
-  36065: (⟦2-char-id⟧, cJ, ⟦2-char-id⟧) => {
+  35996: (⟦2-char-id⟧, TB, ⟦2-char-id⟧) => {
     if (⟦2-char-id⟧.d(⟦2-char-id⟧, {
-        b: () => ⟦2-char-id⟧,
         d: () => ⟦2-char-id⟧,
+        f: () => ⟦2-char-id⟧,
         g: () => ⟦2-char-id⟧,
         k: () => ⟦2-char-id⟧,
-        m: () => ⟦2-char-id⟧,
-        o: () => ⟦2-char-id⟧
-      }), 36 == ⟦2-char-id⟧.j) var ⟦2-char-id⟧ = ⟦2-char-id⟧(36067);
+        l: () => ⟦2-char-id⟧,
+        p: () => ⟦2-char-id⟧
+      }), 36 == ⟦2-char-id⟧.j) var ⟦2-char-id⟧ = ⟦2-char-id⟧(36⟦2-char-id⟧);
     const ⟦2-char-id⟧ = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
       ⟦2-char-id⟧ = ["Blade", "Guard", "Handle"],
       ⟦2-char-id⟧ = {
```

</details>

<details>
<summary>Hunk 2 · Change · +7 / -7</summary>

```diff
@@ -145,42 +145,42 @@
         defence: {
           name: "Bulwark",
           amount: .06,
-          describe: ⟦2-char-id⟧ => `${KJ(.06*JJ)} less damage taken`
+          describe: ⟦2-char-id⟧ => `${sB(.06*BB)} less damage taken`
         },
         coins: {
           name: "Midas",
           amount: 4,
-          describe: ⟦2-char-id⟧ => `Mobs you slay drop ${Math.round(4*JJ)}+ extra coins`
+          describe: ⟦2-char-id⟧ => `Mobs you slay drop ${Math.round(4*BB)}+ extra coins`
         },
         crit: {
           name: "Keen Edge",
           chance: .12,
           amount: .6,
-          describe: ⟦2-char-id⟧ => `${KJ(.12*JJ)} chance to strike for +60% damage`
+          describe: ⟦2-char-id⟧ => `${sB(.12*BB)} chance to strike for +60% damage`
         },
         bossBane: {
           name: "Bossbane",
           amount: .2,
-          describe: ⟦2-char-id⟧ => `+${KJ(.2*JJ)} damage to bosses`
+          describe: ⟦2-char-id⟧ => `+${sB(.2*BB)} damage to bosses`
         },
         firePool: {
           name: "Magma Pool",
           chance: .15,
           amount: .12,
           cooldownMs: 3⟦2-char-id⟧,
-          describe: ⟦2-char-id⟧ => `${KJ(.15*JJ)} chance to leave a fire pool under the mob that burns for 3s`
+          describe: ⟦2-char-id⟧ => `${sB(.15*BB)} chance to leave a fire pool under the mob that burns for 3s`
         },
         lifesteal: {
           name: "Bloodthirst",
           amount: .06,
-          describe: ⟦2-char-id⟧ => `Heal ${KJ(.06*JJ)} of the damage you deal`
+          describe: ⟦2-char-id⟧ => `Heal ${sB(.06*BB)} of the damage you deal`
         },
         starfall: {
           name: "Starfall",
           chance: .1,
           amount: .6,
           cooldownMs: 4⟦2-char-id⟧,
-          describe: ⟦2-char-id⟧ => `${KJ(.1*JJ)} chance to call a falling star that hits nearby mobs and slows them`
+          describe: ⟦2-char-id⟧ => `${sB(.1*BB)} chance to call a falling star that hits nearby mobs and slows them`
         }
       },
       ⟦2-char-id⟧ = {
```

</details>

<details>
<summary>Hunk 3 · Change · +2 / -2</summary>

```diff
@@ -225,11 +225,11 @@
           cooldownMs: 25⟦2-char-id⟧
         }
       },
-      ⟦2-char-id⟧ = 36 == ⟦2-char-id⟧.j ? ⟦2-char-id⟧.c : null,
+      ⟦2-char-id⟧ = 36 == ⟦2-char-id⟧.j ? ⟦2-char-id⟧.e : null,
       ⟦2-char-id⟧ = "skyblock:forged:";
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      return `${JJ} ${cJ}`
+      return `${BB} ${TB}`
     }
     ⟦2-char-id⟧.flatMap((⟦2-char-id⟧ => ⟦2-char-id⟧.map((⟦2-char-id⟧ => ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)))));
 
```

</details>

<details>
<summary>Hunk 4 · Change · +1 / -1</summary>

```diff
@@ -239,7 +239,7 @@
         guard: ⟦2-char-id⟧,
         handle: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
-      return `${fJ}${cJ.toLowerCase()}-${ZJ.toLowerCase()}-${FJ.toLowerCase()}`
+      return `${HB}${TB.toLowerCase()}-${dB.toLowerCase()}-${VB.toLowerCase()}`
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 5 · Change · +5 / -5</summary>

```diff
@@ -264,25 +264,25 @@
         ⟦2-char-id⟧ = ⟦2-char-id⟧ === ⟦2-char-id⟧ ? ⟦2-char-id⟧.get(⟦2-char-id⟧) : void 0;
       if (void 0 !== ⟦2-char-id⟧) return ⟦2-char-id⟧;
       const ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        var ⟦2-char-id⟧, FJ, UJ, qJ, GJ, fJ, xJ, vJ, ⟦2-char-id⟧;
+        var ⟦2-char-id⟧, VB, yB, YB, uB, HB, EB, mB, ⟦2-char-id⟧;
         const {
           blade: ⟦2-char-id⟧,
           guard: ⟦2-char-id⟧,
           handle: ⟦2-char-id⟧
-        } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ === ⟦2-char-id⟧ && ⟦2-char-id⟧ === ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧((1 + ⟦2-char-id⟧[⟦2-char-id⟧].bladeDamage) * (⟦2-char-id⟧ ? 1 + DJ : 1)), ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.damageMultiplier) && void 0 !== ⟦2-char-id⟧ ? ZJ : ⟦2-char-id⟧, ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.cooldownMultiplier) && void 0 !== ⟦2-char-id⟧ ? FJ : ⟦2-char-id⟧[⟦2-char-id⟧].handleCooldown, ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.knockbackMultiplier) && void 0 !== ⟦2-char-id⟧ ? UJ : ⟦2-char-id⟧(1 + ⟦2-char-id⟧[⟦2-char-id⟧].handleKnockback), ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.reachBonus) && void 0 !== ⟦2-char-id⟧ ? qJ : ⟦2-char-id⟧[⟦2-char-id⟧].handleReach, ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.damageReduction) && void 0 !== ⟦2-char-id⟧ ? GJ : ⟦2-char-id⟧[⟦2-char-id⟧].guardReduction, ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.traits) && void 0 !== ⟦2-char-id⟧ ? fJ : function(⟦2-char-id⟧) {
+        } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ === ⟦2-char-id⟧ && ⟦2-char-id⟧ === ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧((1 + ⟦2-char-id⟧[⟦2-char-id⟧].bladeDamage) * (⟦2-char-id⟧ ? 1 + LB : 1)), ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.damageMultiplier) && void 0 !== ⟦2-char-id⟧ ? dB : ⟦2-char-id⟧, ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.cooldownMultiplier) && void 0 !== ⟦2-char-id⟧ ? VB : ⟦2-char-id⟧[⟦2-char-id⟧].handleCooldown, ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.knockbackMultiplier) && void 0 !== ⟦2-char-id⟧ ? yB : ⟦2-char-id⟧(1 + ⟦2-char-id⟧[⟦2-char-id⟧].handleKnockback), ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.reachBonus) && void 0 !== ⟦2-char-id⟧ ? YB : ⟦2-char-id⟧[⟦2-char-id⟧].handleReach, ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.damageReduction) && void 0 !== ⟦2-char-id⟧ ? uB : ⟦2-char-id⟧[⟦2-char-id⟧].guardReduction, ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.traits) && void 0 !== ⟦2-char-id⟧ ? HB : function(⟦2-char-id⟧) {
           const ⟦2-char-id⟧ = {},
             ⟦2-char-id⟧ = {};
           for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
             var ⟦2-char-id⟧, ⟦2-char-id⟧;
             const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)].trait;
-            null !== ⟦2-char-id⟧ && (⟦2-char-id⟧[⟦2-char-id⟧] = (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? FJ : 0) + ⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧[⟦2-char-id⟧] = (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? UJ : 0) + 1)
+            null !== ⟦2-char-id⟧ && (⟦2-char-id⟧[⟦2-char-id⟧] = (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? VB : 0) + ⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧[⟦2-char-id⟧] = (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? yB : 0) + 1)
           }
           for (const ⟦2-char-id⟧ of Object.keys(⟦2-char-id⟧)) {
-            const ⟦2-char-id⟧ = 3 === ⟦2-char-id⟧[⟦2-char-id⟧] ? hJ : 2 === ⟦2-char-id⟧[⟦2-char-id⟧] ? YJ : 1;
+            const ⟦2-char-id⟧ = 3 === ⟦2-char-id⟧[⟦2-char-id⟧] ? kB : 2 === ⟦2-char-id⟧[⟦2-char-id⟧] ? oB : 1;
             ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧(⟦2-char-id⟧[⟦2-char-id⟧] * ⟦2-char-id⟧)
           }
           return ⟦2-char-id⟧
-        }(⟦2-char-id⟧), ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.ability) && void 0 !== ⟦2-char-id⟧ ? xJ : null, ⟦2-char-id⟧ = void 0 !== ⟦2-char-id⟧.name, ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? vJ : ⟦2-char-id⟧ ? `Pure ${QJ} Sword` : `${MJ[SJ].epithet} ${QJ} Sword`, ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.lore) && void 0 !== ⟦2-char-id⟧ ? mJ : `Forged by the Forge Mother from a ${QJ.toLowerCase()} blade, ${SJ.toLowerCase()} guard and ${IJ.toLowerCase()} handle.`, ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
+        }(⟦2-char-id⟧), ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.ability) && void 0 !== ⟦2-char-id⟧ ? EB : null, ⟦2-char-id⟧ = void 0 !== ⟦2-char-id⟧.name, ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? mB : ⟦2-char-id⟧ ? `Pure ${NB} Sword` : `${UB[zB].epithet} ${NB} Sword`, ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.lore) && void 0 !== ⟦2-char-id⟧ ? iB : `Forged by the Forge Mother from a ${NB.toLowerCase()} blade, ${zB.toLowerCase()} guard and ${wB.toLowerCase()} handle.`, ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
           let {
             blade: ⟦2-char-id⟧,
             guard: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 6 · Change · +8 / -8</summary>

```diff
@@ -291,15 +291,15 @@
           const ⟦2-char-id⟧ = ⟦2-char-id⟧;
           return ⟦2-char-id⟧ * (⟦2-char-id⟧[⟦2-char-id⟧].value + ⟦2-char-id⟧[⟦2-char-id⟧].value + ⟦2-char-id⟧[⟦2-char-id⟧].value)
         }(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧].value + ⟦2-char-id⟧[⟦2-char-id⟧].value + ⟦2-char-id⟧[⟦2-char-id⟧].value, ⟦2-char-id⟧ = ⟦2-char-id⟧ ? "Tier 5" : ⟦2-char-id⟧ <= 4 ? "Tier 1" : ⟦2-char-id⟧ <= 8 ? "Tier 2" : ⟦2-char-id⟧ <= 14 ? "Tier 3" : ⟦2-char-id⟧ <= 22 ? "Tier 4" : "Tier 5", ⟦2-char-id⟧ = [];
-        1 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.push(`${yJ(WJ-1)} damage`);
-        1 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.push(`${KJ(1/gJ-1)} faster strikes`);
-        1 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.push(`${yJ(HJ-1)} knockback`);
-        ⟦2-char-id⟧ > 0 && ⟦2-char-id⟧.push(`+${PJ} reach`);
-        ⟦2-char-id⟧ > 0 && ⟦2-char-id⟧.push(`${KJ(kJ)} less damage taken while held`);
+        1 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.push(`${MB(rB-1)} damage`);
+        1 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.push(`${sB(1/IB-1)} faster strikes`);
+        1 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.push(`${MB(cB-1)} knockback`);
+        ⟦2-char-id⟧ > 0 && ⟦2-char-id⟧.push(`+${SB} reach`);
+        ⟦2-char-id⟧ > 0 && ⟦2-char-id⟧.push(`${sB(PB)} less damage taken while held`);
         const ⟦2-char-id⟧ = [];
-        for (const ⟦2-char-id⟧ of Object.keys(⟦2-char-id⟧)) ⟦2-char-id⟧.push(`${sJ[eJ].name}: ${sJ[eJ].describe(pJ[eJ])}`);
-        null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.push(`${nJ[dJ].name}: ${nJ[dJ].description}`);
-        return ⟦2-char-id⟧.push(...RJ), {
+        for (const ⟦2-char-id⟧ of Object.keys(⟦2-char-id⟧)) ⟦2-char-id⟧.push(`${OB[pB].name}: ${OB[pB].describe(QB[pB])}`);
+        null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.push(`${DB[RB].name}: ${DB[RB].description}`);
+        return ⟦2-char-id⟧.push(...qB), {
           id: ⟦2-char-id⟧(⟦2-char-id⟧),
           parts: ⟦2-char-id⟧,
           baseSword: ⟦2-char-id⟧[⟦2-char-id⟧].baseSword,
```

</details>

<details>
<summary>Hunk 7 · Change · +2 / -2</summary>

```diff
@@ -319,8 +319,8 @@
           enchantmentTier: ⟦2-char-id⟧,
           powerMultiplier: ⟦2-char-id⟧(⟦2-char-id⟧ / ⟦2-char-id⟧)
         }
-      }(⟦2-char-id⟧, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? cJ : {});
-      return ⟦2-char-id⟧ === ⟦2-char-id⟧ && ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧), fJ
+      }(⟦2-char-id⟧, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? TB : {});
+      return ⟦2-char-id⟧ === ⟦2-char-id⟧ && ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧), HB
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 8 · Change · +5 / -5</summary>

```diff
@@ -332,11 +332,11 @@
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return `${Math.round(100*JJ)}%`
-    }
-
-    function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return `${JJ>=0?"+":""}${KJ(JJ)}`
+      return `${Math.round(100*BB)}%`
+    }
+
+    function ⟦2-char-id⟧(⟦2-char-id⟧) {
+      return `${BB>=0?"+":""}${sB(BB)}`
     }
   }
 };
```

</details>

</details>
