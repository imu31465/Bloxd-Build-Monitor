# Changed — Bundle Modifications Report (Part 006 / 086)

- **Updated at**: `2026-11-28T01:59 JST`
- **Part**: `6 / 86` (**250** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 005](part-005.md) · [Part 007 →](part-007.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/107.js` (gw4e3a.937868ec → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/107.js` (427 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0)

#### 151. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3337-L3338` → after: `L5282-L5284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5282-L5284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5282-L5284) · [Before (L3337-L3338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L3337-L3338)

```diff
-     function tG(BB, OB) {
-       BB[0] = OB[0], BB[1] = OB[1], BB[2] = OB[2]
+     function ym(WW) {
+       var iW;
+       return null !== (iW = xm.find((iW => iW.name === WW))) && void 0 !== iW ? iW : null
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3340-L3350` → after: `L5286-L5293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5286-L5293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5286-L5293) · [Before (L3340-L3350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L3340-L3350)

```diff
-     var BY = GB(40342);
-     class OY {
-       constructor(BB, OB, GB) {
-         this.physics = BB, this.d = OB, this.f = GB
-       }
-       f64Rows() {
-         return this.d
-       }
-       f32Rows() {
-         return this.f
-       }
+ 
+     function Tm(WW) {
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
+       const OW = function(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
+         return 0 === WW.length ? "" : `const CONFIG = {\n${WW.map((WW=>{var OW;return`\t${WW.key}: ${null!==(OW=iW.get(WW.key))&&void 0!==OW?OW:WW.value}, // ${WW.about}`})).join("\n")}\n}`
+       }(WW.settings, iW);
+       return `${""===OW?"":`${OW}\n\n`}${WW.code.trim()}\n`
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3352-L3411` → after: `L5295-L5311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5295-L5311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5295-L5311) · [Before (L3352-L3411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L3352-L3411)

```diff
-     class GY extends xG {
-       constructor(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
-         super(BB, OB);
-         var JB = new BY(GB.base, GB.vec),
-           MB = JB.base,
-           PB = JB.max,
-           zB = JB.vec;
-         this._box = JB, this._onCollide = jB, this._onStep = null, this._testSolid = null, this._customSolid = !1, this._view();
-         var lB = this._d,
-           pB = this._o64;
-         lB[pB + 0] = YB, lB[pB + 1] = DB, lB[pB + 2] = QB, lB[pB + 3] = oB, lB[pB + 4] = -1, lB[pB + 5] = -1, lB[pB + 6] = -1, lB[pB + 7] = -1, lB[pB + 8] = 0, lB[pB + 9] = 10, lB[pB + OG] = 0, lB[pB + OG + 1] = 0, lB[pB + OG + 2] = 0, lB[pB + 13] = 0, lB[pB + GG] = 17 | (yB ? 2  … [truncated]
-         var qB = this._f,
-           ZB = this._o32;
-         qB.fill(0, ZB, ZB + 21);
-         for (var NB = 0; NB < 3; NB++) qB[ZB + 0 + NB] = MB[NB], qB[ZB + 3 + NB] = PB[NB], qB[ZB + 6 + NB] = zB[NB]
-       }
- ... (44 more removed lines; see GitHub link above)
+ 
+     function Jm(WW) {
+       const iW = [],
+         OW = new Set,
+         mW = WW => {
+           const EW = ym(WW);
+           if (EW && !OW.has(EW.group)) {
+             OW.add(EW.group);
+             for (const WW of null !== (NW = EW.uses) && void 0 !== NW ? NW : []) {
+               var NW;
+               mW(WW)
+             }
+             iW.push(EW)
+           }
+         };
+       for (const EW of WW) mW(EW);
+ ... (1 more added lines; see GitHub link above)
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3413-L3460` → after: `L5313-L5340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5313-L5340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5313-L5340) · [Before (L3413-L3460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L3413-L3460)

```diff
-     GY.prototype.loadFromCopy = wO.prototype.loadFromCopy, GY.prototype.loadStateFromCopy = wO.prototype.loadStateFromCopy, GY.prototype.setPosition = wO.prototype.setPosition, GY.prototype.pR = wO.prototype.pR, GY.prototype.applyForce = wO.prototype.applyForce, GY.prototype.appl … [truncated]
-     class YY {
-       constructor(BB, OB) {
-         this.wasm = BB, this.physics = OB, this.handle = void 0, this.f64Pages = [], this.f32Pages = [], this.fresh = [], this.freed = [], this.freedHead = 0, this.slotOwners = [], this.releaseCount = 0, this.handle = new(BB.getBloxdWasm().NO)
-       }
-       get owners() {
-         return this.slotOwners
-       }
-       get releases() {
-         return this.releaseCount
-       }
-       setOwner(BB, OB) {
-         this.slotOwners[BB] = OB
-       }
-       clearOwner(BB) {
-         this.slotOwners[BB] = null
- ... (32 more removed lines; see GitHub link above)
+ 
+     function hm(WW, iW) {
+       const OW = WW => WW.replace(/\s+/g, ""),
+         mW = new RegExp(`function ${iW.name}\\s*\\([^)]*\\)\\s*\\{`).exec(WW);
+       return !!mW && OW(iW.code).includes(OW(WW.slice(mW.index, mW.index + 200)).slice(0, 60))
+     }
+ 
+     function Hm(WW) {
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Set;
+       if (!IO(WW)) return {
+         text: WW,
+         added: []
+       };
+       let OW = WW;
+       const mW = [];
+       for (let EW = 0; EW < 4; EW++) {
+ ... (12 more added lines; see GitHub link above)
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3462-L3467` → after: `L5342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5342) · [Before (L3462-L3467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L3462-L3467)

```diff
-         return this.slotOwners[BB] = yB, yB
-       }
-       detach(BB) {
-         if (!(BB instanceof GY)) return;
-         const OB = BB.rowSlot(this);
-         OB >= 0 && (BB.detachRows(), this.release(OB))
+         if (!NW) break
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3469-L3470` → after: `L5344-L5346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5344-L5346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5344-L5346) · [Before (L3469-L3470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L3469-L3470)

```diff
-       dispose() {
-         BG(this.wasm, this.handle)
+       return {
+         text: OW,
+         added: [...new Set(mW)]
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3473-L3486` → after: `L5349-L5354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5349-L5354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5349-L5354) · [Before (L3473-L3486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L3473-L3486)

```diff
-     const DY = new WeakMap;
-     const QY = new Float64Array(0),
-       oY = new Float32Array(0);
-     class jY {
-       constructor() {
-         this.page = -1, this.d = QY, this.f = oY
-       }
-       at(BB, OB) {
-         const GB = zG(OB);
-         GB !== this.page && (this.page = GB, this.d = BB.f64Rows(OB), this.f = BB.f32Rows(OB))
-       }
-       invalidate() {
-         this.page = -1
-       }
+ 
+     function nm(WW, iW) {
+       const OW = [...RO(iW.code)].filter((WW => "CONFIG" !== WW && !kO(WW)));
+       if (0 === OW.length) return WW.includes(iW.code.trim().slice(0, 80));
+       const mW = IO(WW) ? RO(WW) : new Set;
+       return 2 * OW.filter((WW => mW.has(WW))).length >= OW.length
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3488-L3549` → after: `L5356-L5391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5356-L5391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5356-L5391) · [Before (L3488-L3549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L3488-L3549)

```diff
-     class yY {
-       constructor(BB) {
-         this.physics = BB, this.store = null, this.bodies = [], this.slotOfBody = new Map, this.slots = [], this.isStaging = new Uint8Array(0), this.rollback = -1, this.rows = new jY
-       }
-       get any() {
-         return this.bodies.length > 0
-       }
-       useStore(BB) {
-         BB !== this.store && (this.release(), this.store = BB), this.clear()
-       }
-       release() {
-         this.clear();
-         const BB = this.store;
-         if (BB) {
-           for (const OB of this.slots) BB.release(OB);
-           this.rollback >= 0 && BB.release(this.rollback)
- ... (46 more removed lines; see GitHub link above)
+ 
+     function um(WW) {
+       const iW = /^const CONFIG = \{\n([\s\S]*?)\n\}/m.exec(WW.code);
+       return iW ? iW[1].split("\n").flatMap((WW => {
+         const iW = /^\t(\w+): (.+?), \/\/ (.*)$/.exec(WW);
+         if (!iW) return [];
+         const [, OW, mW, EW] = iW;
+         return [{
+           key: OW,
+           kind: /^-?\d/.test(mW) ? "number" : "true" === mW || "false" === mW ? "boolean" : mW.startsWith("[") ? "list" : "string",
+           value: mW,
+           about: EW
+         }]
+       })) : []
+     }
+ 
+ ... (20 more added lines; see GitHub link above)
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3551-L3582` → after: `L5393-L5425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5393-L5425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5393-L5425) · [Before (L3551-L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L3551-L3582)

```diff
-             const JB = YB.lZ,
-               MB = YB.eT,
-               PB = YB.YC,
-               zB = YB.surfaceVelocity;
-             if (!(JB instanceof Float32Array && MB instanceof Float32Array && PB instanceof Float32Array && zB instanceof Float32Array)) return !1;
-             const lB = YB.resting,
-               {
-                 Wy: pB,
-                 friction: qB,
-                 restitution: ZB,
-                 gravityMultiplier: NB,
-                 hz: RB,
-                 fluidDrag: WB,
-                 fluidDragVert: AB,
-                 fluidDragHoriz: VB,
-                 ratioInFluid: SB,
- ... (16 more removed lines; see GitHub link above)
+             if (/^CONFIG\.\w+$/.test(cW.trim())) continue;
+             const wW = sm(iW, cW, OW);
+             "problem" in wW ? EW.push(wW.problem) : (mW.set(iW.key, wW.value), wW.fixed && NW.push(wW.fixed))
+           }
+           return {
+             values: mW,
+             problems: EW,
+             fixed: NW
+           }
+         }({
+           ...iW,
+           settings: [...iW.settings, ...EW]
+         }, OW, mW),
+         PW = EW.filter((WW => NW.values.has(WW.key))),
+         LW = qO(WW, Tm({
+           ...iW,
+ ... (17 more added lines; see GitHub link above)
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3584-L3591` → after: `L5427-L5462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5427-L5462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5427-L5462) · [Before (L3584-L3591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L3584-L3591)

```diff
-       encodeAfterHandler(BB, OB, GB, YB) {
-         if (!this.any) return !0;
-         const DB = this.store.owners,
-           QB = this.isStaging;
-         if (this.rows.invalidate(), BB >= 0 && QB[BB] && !this.encode(BB, DB[BB])) return !1;
-         for (let oB = GB; oB < YB; oB++) {
-           const BB = OB[oB];
-           if (QB[BB] && !this.encode(BB, DB[BB])) return !1
+     }
+ 
+     function em(WW) {
+       return `- ${WW.name}: ${WW.summary}. Settings: ${WW.settings.map((WW=>WW.key)).join(", ")}`
+     }
+ 
+     function gm(WW) {
+       var iW;
+       const OW = null !== (iW = null === WW || void 0 === WW ? void 0 : WW.trim().toLowerCase()) && void 0 !== iW ? iW : "",
+         mW = [...Km.keys()].find((WW => WW === OW)),
+         EW = mW ? Mm.filter((WW => WW.category === mW)) : Mm,
+         NW = mW ? xm.filter((WW => WW.category === mW)) : [];
+       return `${mW?`Prefabs for ${Km.get(mW)}:`:""===OW||"all"===OW?"Every prefab:":`There is no category ${WW}. Every prefab:`}\n${EW.length>0?EW.map(em).join("\n"):"(none yet)"}${NW.length>0?`\nReady-made functions for it (call them; their code is added by itself):\n${NW.map((W … [truncated]
+     }
+ 
+     function Dm(WW, iW) {
+ ... (20 more added lines; see GitHub link above)
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3593-L3604` → after: `L5464-L5508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5464-L5508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5464-L5508) · [Before (L3593-L3604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L3593-L3604)

```diff
-         return !0
-       }
-       decodeCommitted(BB, OB, GB, YB, DB) {
-         const QB = this.store,
-           oB = this.rows;
-         if (oB.invalidate(), this.any) {
-           const DB = QB.owners,
-             jB = this.isStaging;
-           BB >= 0 && jB[BB] && (oB.at(QB, BB), mG(oB.d, oB.f, BB, DB[BB], this.physics));
-           for (let BB = GB; BB < YB; BB++) {
-             const GB = OB[BB];
-             jB[GB] && (oB.at(QB, GB), mG(oB.d, oB.f, GB, DB[GB], this.physics))
+       })).filter((WW => WW.score > 0)).sort(((WW, iW) => iW.score - WW.score || WW.first - iW.first)).slice(0, iW).map((WW => WW.prefab))
+     }
+     const pm = /\byour\s+(?:real\s+|full\s+|first\s+|last\s+)?(?:name|age|school|address|email|phone|birthday)\b|\bhow old\b|\bwhere (?:do )?you live\b|\be-?mail\b|\bphone number\b|\bpassword\b/i;
+ 
+     function fm(WW) {
+       var iW, OW, mW, EW, NW, PW;
+       const LW = function(WW) {
+           var iW, OW;
+           const mW = null === (iW = WW.questions) || void 0 === iW ? void 0 : iW.trim();
+           if (null !== (OW = WW.question) && void 0 !== OW && OW.trim() || !mW) return WW;
+           const EW = {
+             ...WW,
+             question: mW
+           };
+           if (!/^[[{]/.test(mW)) return EW;
+           try {
+ ... (29 more added lines; see GitHub link above)
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3606-L3607` → after: `L5510-L5518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5510-L5518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5510-L5518) · [Before (L3606-L3607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L3606-L3607)

```diff
-         }
-         DB >= 0 && DB === this.rollback && (oB.at(QB, DB), mG(oB.d, oB.f, DB, this.physics.rollbackBody, null))
+         }(WW),
+         cW = null !== (iW = null === (OW = LW.question) || void 0 === OW ? void 0 : OW.replace(/\s+/g, " ").trim()) && void 0 !== iW ? iW : "",
+         wW = (null !== (mW = LW.choices) && void 0 !== mW ? mW : "").includes("\n") ? (null !== (EW = LW.choices) && void 0 !== EW ? EW : "").split("\n") : (null !== (NW = LW.choices) && void 0 !== NW ? NW : "").split("|"),
+         tW = [...new Set(wW.map((WW => WW.replace(/^\s*(?:[-*\u2022]|\d+[.)])\s*/, "").trim())).filter(Boolean))].slice(0, 4),
+         ZW = "false" !== (null === (PW = LW.allow_other) || void 0 === PW ? void 0 : PW.trim().toLowerCase());
+       return "" === cW || pm.test(cW) || tW.length < 2 && !ZW ? null : {
+         question: cW,
+         choices: tW,
+         allowOther: ZW
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3610-L3732` → after: `L5521-L5560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5521-L5560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5521-L5560) · [Before (L3610-L3732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L3610-L3732)

```diff
-     const JY = "has a body wasm can't take (a custom testSolid, a plain-array vector or a field that isn't a number)";
-     class MY {
-       constructor(BB, OB, GB, YB, DB) {
-         this.physics = BB, this.kind = OB, this.wasm = GB, this.rollsBack = YB, this.hostStore = DB, this.current = null, this.store = null, this.staging = void 0, this.listView = null, this.impactsView = null, this.resultView = null, this.listed = 0, this.listSynced = !1, this.l … [truncated]
-           const OB = this.ownSlot(BB);
-           return OB >= 0 ? OB : this.staging.sA(BB)
-         }, this.staging = new yY(BB)
-       }
-       get engine() {
-         return this.current
-       }
-       get bodyStore() {
-         return this.store
-       }
-       list() {
-         return this.listView.view()
- ... (107 more removed lines; see GitHub link above)
+     const Cm = /^\s*(?:\.\.\.|\u2026)\s*$/,
+       Xm = /\b(?:clear(?:s|ed|ing)?|(?:delet|remov|eras|wip)(?:e|es|ed|ing))\s+(?:out\s+)?(?:all\s+(?:of\s+)?(?:the\s+|your\s+)?(?:current\s+|existing\s+)?(?:code|world code|script)|everything|the\s+(?:whole|entire)\s+(?:file|code|script))(?:\s+(?:from|in)\s+(?:the|your|this)\s+( … [truncated]
+       Bm = /^[ \t]*(?:\/\/|\/\*)[ \t]*(?:(?:\.\.\.|\u2026)[ \t]*(?:\*\/)?[ \t]*$|(?:\.\.\.|\u2026)?[ \t]*(?:existing code|rest of (?:the |your )?(?:code|file)))/im;
+ 
+     function qm(WW, iW) {
+       if (Cm.test(WW)) return !0;
+       const OW = new Set(iW.split("\n").map((WW => WW.trim())));
+       return WW.split("\n").some((WW => Bm.test(WW) && !OW.has(WW.trim())))
+     }
+ 
+     function Rm(WW) {
+       return WW.split("\n").map((WW => WW.trim())).filter((WW => "" !== WW && !/^(?:\/\/|\/\*|\*)/.test(WW)))
+     }
+     const Gm = /```(?:js|javascript|ts|typescript)?\n([\s\S]*?)```/g,
+       Im = String.raw`on[A-Z]\w*|tick|playerCommand`,
+       am = new RegExp(String.raw`^(?:(?:async\s+)?function\s+(?:${Im})\s*\(|(?:${Im})\s*=\s*(?:async\s+)?(?:function\b|\())`, "m"),
+ ... (24 more added lines; see GitHub link above)
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3735-L3914` → after: `L5563-L5565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5563-L5565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5563-L5565) · [Before (L3735-L3914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L3735-L3914)

```diff
-     class PY {
-       constructor(BB, OB) {
-         var GB, YB;
-         this.physics = BB, this.host = OB, this.bodies = void 0, this.impacts = new Float64Array(3), this.testSolid = void 0, this.testFluid = void 0, this.rollsBack = void 0, this.failedInTick = !1, this.stoppedMs = 0, this.stoppedRun = 0, this.lastStopAt = 0, this.lost = !1, th … [truncated]
-       }
-       kP(BB) {
-         this.host.stats.physicsTicks++;
-         const OB = !this.usable(),
-           GB = OB ? this.offReason() : this.wasmTick(BB);
-         if (null === GB) return this.stoppedMs = 0, void(this.stoppedRun = 0);
-         this.stop(GB, OB, BB)
-       }
-       stop(BB, OB, GB) {
-         const YB = this.host.kind;
-         if (this.host.stats.stoppedTicks++, this.host.failure.fatal) throw new Error(`wasm physics: ${YB} physics ${BB}, and it runs only in wasm here`);
-         if (OB) return this.bodies.release(), void this.lose(BB);
- ... (164 more removed lines; see GitHub link above)
+ 
+     function OE(WW) {
+       return WW.trim().replace(/^\.?\//, "")
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3916-L3983` → after: `L5567-L5666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5567-L5666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5567-L5666) · [Before (L3916-L3983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L3916-L3983)

```diff
-     class zY {
-       constructor(BB, OB, GB) {
-         this.kz = BB, this.physics = OB, this.options = GB, this.stats = {
-           physicsTicks: 0,
-           wasmTicks: 0,
-           wasmBodyTicks: 0,
-           stoppedTicks: 0,
-           missRounds: 0,
-           wasmPicks: 0,
-           jsPicks: 0,
-           wasmSweeps: 0,
-           wasmSteers: 0,
-           wasmLifts: 0,
-           staleChunks: 0,
-           wasmFailures: 0,
-           wasmMovementTicks: 0,
- ... (52 more removed lines; see GitHub link above)
+ 
+     function mE(WW) {
+       return WW.replace(zm, "function $1$2")
+     }
+ 
+     function EE(WW) {
+       return WW.replace(/\bif\s*\(\s*(\/\*(?:(?!\*\/)[^])*\*\/)\s*\)/g, "if (false $1)")
+     }
+ 
+     function NE(WW, iW, OW, mW) {
+       let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
+         NW = arguments.length > 5 ? arguments[5] : void 0,
+         PW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "offer",
+         LW = arguments.length > 7 ? arguments[7] : void 0,
+         cW = arguments.length > 8 ? arguments[8] : void 0;
+       const wW = {
+ ... (84 more added lines; see GitHub link above)
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3985-L4019` → after: `L5668-L5702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5668-L5702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5668-L5702) · [Before (L3985-L4019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L3985-L4019)

```diff
-             return !0
-           },
-           store: () => this.bodyStore(),
-           failure: this.failure
-         }), this.store = this.makeStore()
-       }
-       get wasmReady() {
-         return this.driver.usable()
-       }
-       takeStatsDelta() {
-         const BB = {
-           physicsTicks: 0,
-           wasmTicks: 0,
-           wasmBodyTicks: 0,
-           stoppedTicks: 0,
-           missRounds: 0,
- ... (19 more removed lines; see GitHub link above)
+           }(null !== (EW = wW[WW]) && void 0 !== EW ? EW : "", iW, OW, cW);
+           return "error" in PW ? (lW("use_prefab", WW, "prefab", {
+             detail: PW.error
+           }), !1) : (wW[WW] = PW.text, tW.add(WW), CW.set(WW, {
+             prefab: PW.prefab,
+             settings: OW
+           }), VW(WW, null !== mW && void 0 !== mW ? mW : PW.prefab.title, PW.text), fW.push({
+             name: PW.prefab.name,
+             title: PW.prefab.title,
+             path: WW,
+             problems: PW.problems,
+             fixed: PW.fixed,
+             setup: null !== (NW = PW.prefab.setup) && void 0 !== NW ? NW : null
+           }), !0)
+         },
+         QW = (WW, iW, OW) => {
+ ... (19 more added lines; see GitHub link above)
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4021-L4026` → after: `L5704-L5820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5704-L5820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5704-L5820) · [Before (L4021-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4021-L4026)

```diff
-         for (const YB of Object.keys(BB)) BB[YB] = this.stats[YB] - this.reportedStats[YB], this.reportedStats[YB] = this.stats[YB];
-         const OB = performance.now(),
-           GB = OB - this.reportedAt;
-         return this.reportedAt = OB, {
-           ...BB,
-           elapsedMs: GB
+         const iW = ("replace_function" === bW.name || "insert_code" === bW.name) && void 0 === bW.args.code && void 0 !== bW.args.content ? {
+             ...bW,
+             args: {
+               ...bW.args,
+               code: bW.args.content,
+               path: null !== (ci = null !== (wi = null !== (ti = bW.args.path) && void 0 !== ti ? ti : NW) && void 0 !== wi ? wi : mW) && void 0 !== ci ? ci : void 0
+             }
+           } : bW,
+           {
+             path: EW,
+             content: PW,
+             search: LW,
+             replace: ZW,
+             code: jW
+           } = iW.args,
+           UW = Ti(iW.name),
+ ... (101 more added lines; see GitHub link above)
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4029-L4039` → after: `L5823-L5835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5823-L5835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5823-L5835) · [Before (L4029-L4039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4029-L4039)

```diff
-       kP(BB) {
-         this.driver.kP(BB)
-       }
-       lC(BB, OB, GB, YB, DB, QB) {
-         const oB = this.bodyStore();
-         if (!oB) return null;
-         let jB;
-         try {
-           jB = oB.allocate()
-         } catch (yB) {
-           return this.driver.onCallFailed(yB, "adding a page of bodies", "the body is a plain RigidBody"), null
+       if (xW = void 0, AW = di(UO(AW), mi.length > 0), 0 === mi.length) {
+         var Ji, Hi;
+         const iW = [...WW.matchAll(Gm)],
+           OW = 1 === iW.length ? iW[0][1] : null,
+           EW = null !== (Ji = null !== NW && void 0 !== NW ? NW : mW) && void 0 !== Ji ? Ji : "index.js",
+           PW = null !== (Hi = wW[EW]) && void 0 !== Hi ? Hi : "";
+         if (null !== OW && rW(null, OW)) Oi(OW), AW = AW.replace(iW[0][0], "");
+         else if (null !== OW && Fm.test(OW) && !qm(OW, PW) && ! function(WW, iW) {
+             const OW = Rm(iW);
+             return OW.length >= 10 && 2 * vW(Rm(WW), OW) < OW.length
+           }(OW, PW)) {
+           const WW = wm(WE(OW));
+           sW(EW) && QW(EW, WW, void 0) || (wW[EW] = WW, tW.add(EW)), AW = AW.replace(iW[0][0], "")
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4043` → after: `L5838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5838) · [Before (L4043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4043)

```diff
-       gC(BB) {
+       for (const bW of tW) {
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4045-L4053` → after: `L5840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5840) · [Before (L4045-L4053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4045-L4053)

```diff
-         null === (OB = this.store) || void 0 === OB || OB.detach(BB)
-       }
-       makeStore() {
-         if (!this.driver.usable() || !UG(this.options.wasm)) return null;
-         let BB = null;
-         try {
-           const OB = new YY(this.options.wasm, this.physics);
-           return BB = OB, this.physics.rollbackBody = hO(((BB, GB, YB, DB, QB, oB, jB) => OB.lC(OB.allocate(), BB, GB, YB, DB, QB, oB, jB))), OB
-         } catch (GB) {
+         if (sW(bW)) {
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4055` → after: `L5842-L5846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5842-L5846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5842-L5846) · [Before (L4055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4055)

```diff
-           return this.driver.onCallFailed(GB, "making the body store", "bodies are plain RigidBodies"), null === (OB = BB) || void 0 === OB || OB.dispose(), null
+           const WW = Object.values(wW).some((WW => /\brequire\s*\(/.test(WW)));
+           wW[bW] = tm(wm(WW ? wW[bW] : wW[bW].replace(/^module\.exports\s*=\s*(?:\{[\s\w$,:]*\}|[\w$]+)\s*;?[ \t]*(?:\n|$)/gm, "")), null !== (ui = OW[bW]) && void 0 !== ui ? ui : "");
+           const iW = new Set(Object.keys(wW).filter((WW => WW !== bW && sW(WW))).flatMap((WW => [...RO(wW[WW])]))),
+             mW = Hm(wW[bW], iW);
+           wW[bW] = mW.text, XW.push(...mW.added)
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4058-L4076` → after: `L5851-L5854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5851-L5854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5851-L5854) · [Before (L4058-L4076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4058-L4076)

```diff
-       bodyStore() {
-         return this.driver.usable() ? this.store : null
-       }
-       pl(BB) {
-         return function(BB, OB, GB) {
-           const {
-             test: YB,
-             offset: DB
-           } = GB;
-           return BB ? YB && !(0, TO.e)(YB) ? XG(OB, GB, "has a block test not marked markIdOnlyBlockTest") : !DB || cG(DB[0]) && cG(DB[1]) && cG(DB[2]) ? BB.pl(OB, GB) : XG(OB, GB, "has an offset that isn't whole cells") : XG(OB, GB, "has no mirror")
-         }(this.getMirror(!1), this.stats, BB)
-       }
-       rC(BB, OB, GB) {
-         var YB;
-         const DB = BB.base instanceof Float32Array && BB.max instanceof Float32Array ? this.driver.currentEngine() : null,
-           QB = DB && null !== (YB = this.mirror) && void 0 !== YB && YB.usable() ? this.mirror : null;
- ... (3 more removed lines; see GitHub link above)
+       for (const bW of fW) {
+         const WW = bW.problems.length > 0 ? ` Kept as it was: ${bW.problems.join("; ")}.` : "",
+           iW = bW.fixed.length > 0 ? ` Names changed to real ones: ${bW.fixed.join(", ")}.` : "";
+         AW += `\n\nThis uses the ready-made ${bW.title}.${iW}${WW}${bW.setup?` ${bW.setup}`:""}`
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4078-L4092` → after: `L5856-L5858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5856-L5858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5856-L5858) · [Before (L4078-L4092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4078-L4092)

```diff
-       wasmSweep(BB, OB, GB, YB) {
-         try {
-           if (!OB.beforePick() || !this.prepare(BB)) return null;
-           const {
-             base: DB,
-             max: QB
-           } = GB;
-           for (let GB = 0; GB < 64; GB++) {
-             const GB = BB.vz(OB.mP, DB[0], DB[1], DB[2], QB[0], QB[1], QB[2], YB[0], YB[1], YB[2]);
-             if (!Number.isNaN(GB)) return GB;
-             this.stats.missRounds++, OB.supplyMisses("load")
-           }
-           OB.mP.Gl()
-         } catch (DB) {
-           this.driver.onCallFailed(DB, "a camera sweep", "it runs in JS")
+       for (const {
+           from: bW,
+           to: nW
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4094-L4109` → after: `L5860-L5877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5860-L5877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5860-L5877) · [Before (L4094-L4109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4094-L4109)

```diff
-         return null
-       }
-       residency() {
-         var BB, OB;
-         return null !== (BB = null === (OB = this.mirror) || void 0 === OB ? void 0 : OB.residency()) && void 0 !== BB ? BB : null
-       }
-       prepare(BB) {
-         const OB = this.kz.Tz;
-         return this.context.setOffsets(BB, OB, OB) && this.context.uploadOverrides(BB, this.kz.mP)
-       }
-       getMirror(BB) {
-         if (!this.options.wasm.isBloxdWasmReady()) return this.releaseMirror(), null;
-         if (this.mirror) {
-           const OB = this.mirror.usable();
-           if (OB || !BB) return OB ? this.mirror : null;
-           this.releaseMirror()
+         of HW) AW += `\n\nI renamed \`${bW}\` to \`${nW}\`, the name World Code calls.`;
+       const oi = [];
+       for (const bW of tW) {
+         var ei;
+         const WW = null !== (ei = OW[bW]) && void 0 !== ei ? ei : "";
+         if (wW[bW] !== WW) {
+           const iW = uW.get(bW);
+           oi.push(iW ? {
+             path: bW,
+             before: WW,
+             after: wW[bW],
+             why: iW,
+             parts: gW.get(bW)
+           } : {
+             path: bW,
+             before: WW,
+ ... (2 more added lines; see GitHub link above)
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4114-L4115` → after: `L5880-L5895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5880-L5895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5880-L5895) · [Before (L4114-L4115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4114-L4115)

```diff
-       releaseMirror() {
-         this.mirror && (this.mirror.dispose(), this.mirror = null)
+       const vi = "direct" === PW && oi.length > 0,
+         gi = oi.length > 0 || JW.length > 0;
+       return {
+         text: AW.replace(/\n{3,}/g, "\n\n").trim(),
+         changes: oi,
+         failedEdits: ZW,
+         renamedCallbacks: HW,
+         worldCode: JW,
+         inPlace: vi,
+         actions: hW,
+         question: gi ? null : BW,
+         notes: RW,
+         plan: gi ? [] : GW,
+         lookups: gi ? yW.filter((WW => KW.has(SW(WW)))) : null !== BW || GW.length > 0 ? [] : yW,
+         prefabs: fW,
+         helpersAdded: [...new Set(XW)]
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4118` → after: `L5898-L5936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5898-L5936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5898-L5936) · [Before (L4118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4118)

```diff
-     var lY = GB(39063);
+ 
+     function PE(WW, iW) {
+       const OW = "" === WW ? [] : WW.replace(/\n$/, "").split("\n"),
+         mW = "" === iW ? [] : iW.replace(/\n$/, "").split("\n");
+       let EW = 0;
+       for (; EW < OW.length && EW < mW.length && OW[EW] === mW[EW];) EW++;
+       let NW = OW.length,
+         PW = mW.length;
+       for (; NW > EW && PW > EW && OW[NW - 1] === mW[PW - 1];) NW--, PW--;
+       const LW = OW.slice(EW, NW),
+         cW = mW.slice(EW, PW),
+         wW = Array.from({
+           length: LW.length + 1
+         }, (() => new Array(cW.length + 1).fill(0)));
+       for (let lW = LW.length - 1; lW >= 0; lW--)
+         for (let WW = cW.length - 1; WW >= 0; WW--) wW[lW][WW] = LW[lW] === cW[WW] ? wW[lW + 1][WW + 1] + 1 : Math.max(wW[lW + 1][WW], wW[lW][WW + 1]);
+ ... (23 more added lines; see GitHub link above)
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4121-L4129` → after: `L5939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5939) · [Before (L4121-L4129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4121-L4129)

```diff
-       var OB;
-       return BB.isBloxdWasmReady() ? {
-         bindings: BB.getBloxdWasm(),
-         view: BB.wasmView,
-         BufferView: BB.WasmBufferView,
-         isReady: BB.isBloxdWasmReady,
-         markFailed: BB.markBloxdWasmFailed,
-         takeRefusedAllocation: null !== (OB = BB.takeBloxdWasmRefusedAllocation) && void 0 !== OB ? OB : () => 0
-       } : null
+       return LE.test(WW)
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4131-L4193` → after: `L5941-L5951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5941-L5951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5941-L5951) · [Before (L4131-L4193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4131-L4193)

```diff
-     const qY = 32768,
-       ZY = [qY, 3, 0, 1, 2, 4, 3, 0, 1, 1, 2, 4, 8, 16];
-     class NY {
-       static create(BB, OB, GB) {
-         var YB, DB, QB;
-         const oB = pY(BB);
-         if (!oB) return null;
-         const jB = null !== (YB = null === (DB = (QB = oB.bindings).Do) || void 0 === DB ? void 0 : DB.call(QB)) && void 0 !== YB ? YB : [];
-         if (!(jB.length === ZY.length && ZY.every(((BB, OB) => jB[OB] === BB)))) throw new Error(`@bloxd/wasm's chunk ingest constants [${Array.from(jB).join()}] are not [${ZY.join()}]`);
-         return new NY(oB, new oB.bindings.FD, OB, GB)
-       }
-       constructor(BB, OB, GB, YB) {
-         this.runtime = BB, this.handle = OB, this.JP = GB, this.reportTrap = YB, this.lightU8 = void 0, this.lightU16 = void 0, this.registryState = -1, this.lightU8 = new BB.BufferView(Uint8Array, OB.rl(!1), qY), this.lightU16 = new BB.BufferView(Uint16Array, OB.rl(!0), qY)
-       }
-       decodeVoxels(BB, OB) {
-         return this.attempt((() => (this.syncRegistry(), AY(this.handle.wl(OB.mP, OB.slot, BB)), this.scan(OB))))
- ... (47 more removed lines; see GitHub link above)
+     const wE = {
+       worldCode: new Set(["write_file", "edit_file", "replace_function", "use_prefab", "edit_code_in_place", "export_game", "ask_creator", "plan", "remember", "view_file", "view_chunk", "view_game_state", "get_docs", "find_names", "view_prefab", "view_errors"]),
+       codeBlock: new Set(["write_file", "edit_file", "replace_function", "add_world_code", "edit_code_in_place", "switch_to_world_code", "ask_creator", "view_world_code", "view_chunk", "view_game_state", "get_docs", "find_names", "view_errors"])
+     };
+ 
+     function tE(WW, iW, OW) {
+       return OO[WW].formatCall(iW, OW)
+     }
+ 
+     function ZE(WW, iW, OW, mW) {
+       return OO[OW].declareTools(WW, iW, mW)
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4199-L4328` → after: `L5955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5955) · [Before (L4199-L4328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4199-L4328)

```diff
-       if (0 !== BB) throw new RY(WY)
-     }
-     var VY = GB(39071);
-     const SY = [11, 0, 1, 2, 3, 4, 5, 6, 10, 0, 1, 2, 32768, 4 * VY.Z, VY.H, VY.D, VY.G, VY.z, VY.u, VY.L, VY.N, VY.w, VY.bb, VY.$, VY.eb, VY.hb, VY.db, VY.q, VY.j, VY.m, VY.p, VY.R, VY.d, ...VY.V],
-       nY = new Int32Array(0);
-     class UY {
-       static create(BB, OB, GB) {
-         var YB, DB, QB;
-         const oB = pY(BB);
-         if (!oB) return null;
-         const jB = null !== (YB = null === (DB = (QB = oB.bindings).XQ) || void 0 === DB ? void 0 : DB.call(QB)) && void 0 !== YB ? YB : [];
-         return jB.length === SY.length && SY.every(((BB, OB) => jB[OB] === BB)) ? new UY(oB, new oB.bindings.EG, OB, GB) : (console.error(`@bloxd/wasm's block edit constants [${Array.from(jB).join()}] are not [${SY.join()}], so blocks are set in JS`), null)
-       }
-       constructor(BB, OB, GB, YB) {
-         this.runtime = BB, this.handle = OB, this.JP = GB, this.jP = YB, this.header = void 0, this.journalPtr = void 0, this.sentProps = null, this.plainProps = null, this.hookedProps = null, this.busy = !1, this.startFailedAt = null, this.header = new BB.BufferView(Uint32Array, … [truncated]
-       }
- ... (114 more removed lines; see GitHub link above)
+       return OO[WW].callStyle
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4332-L4333` → after: `L5959-L5966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5959-L5966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5959-L5966) · [Before (L4332-L4333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4332-L4333)

```diff
-       var OB = Math.sqrt(Math.max(1, BB / KY));
-       return 100 * OB * Math.sqrt(OB)
+       const iW = null === WW.path ? WW.tool : `${WW.tool} ${WW.path}`;
+       var OW;
+       if ("prefab" === WW.reason) return `${iW}: ${null!==(OW=WW.detail)&&void 0!==OW?OW:"the prefab couldn't go in."} Nothing changed.`;
+       if ("missingArgs" === WW.reason) return `${iW}: the call was missing an argument it needs, so nothing changed.`;
+       if ("placeholder" === WW.reason) return "write_file" === WW.tool ? `${iW}: the content was only "..." or had a line standing in for the rest, so nothing changed. Send the whole file, every line of it.` : `${iW}: the code had a line standing in for code left out ("// ... exi … [truncated]
+       if ("unread" === WW.reason) return `${iW}: you hadn't seen this code, so writing it whole could have lost what it has, and nothing changed. Make the change from its code, which ${null!==WW.path&&(0,bW.e)(WW.path)?"view_world_code":"view_file"} shows.`;
+       if ("brokenCode" === WW.reason) return `${iW}: the code around that function doesn't parse (a bracket is likely missing), so where it ends isn't clear and nothing changed. Send the whole fixed file with write_file instead.`;
+       return `${iW}: search matched nothing in the file, so nothing changed. ${WW.closest?`The closest lines (${WW.closest.line}-${WW.closest.lastLine}) are:\n${WW.closest.text}`:"No lines in the file are like it."}\nCopy the lines exactly${WW.functions.length>0?`, or use replace … [truncated]
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4337` → after: `L5977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5977) · [Before (L4337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4337)

```diff
-       BB.lH = BB.ZH = 0
+       return Object.values(WW).some((WW => "" !== WW.trim()))
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4341-L4384` → after: `L5998-L6034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5998-L6034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5998-L6034) · [Before (L4341-L4384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4341-L4384)

```diff
-       return Math.abs(BB) > YB && Math.abs(BB / OB / GB) > 4 ? Math.sign(BB) : 0
-     }
-     var wY = {
-       IH: !1,
-       stopPropagation: !1,
-       iH: !1
-     };
-     const EY = {
-       forward: ["KeyW", "ArrowUp"],
-       backward: ["KeyS", "ArrowDown"],
-       left: ["KeyA", "ArrowLeft"],
-       right: ["KeyD", "ArrowRight"],
-       fire: "Mouse1",
-       "mid-fire": ["Mouse2"],
-       "alt-fire": ["Mouse3", "KeyE"],
-       jump: "Space",
- ... (28 more removed lines; see GitHub link above)
+       var EW, NW, PW, LW;
+       let {
+         hasWorldCodeFiles: cW,
+         hasLookedUp: wW,
+         movesToWorldCode: tW,
+         listedPrefabs: ZW,
+         guidesToPrefabs: xW,
+         callStyle: lW = xE(OW),
+         fencesCalls: AW = !1,
+         entryPath: jW = "index.js"
+       } = mW;
+       const kW = iW ? bW.d : jW,
+         sW = iW ? `${bW.j}index.js` : kW,
+         MW = (WW, iW) => tE(OW, WW, iW),
+         KW = iW => WW.some((WW => WW.name === iW)),
+         SW = WW.filter((WW => ["content", "replace", "code"].some((iW => iW in WW.inputSchema.properties)))),
+ ... (21 more added lines; see GitHub link above)
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4387-L4409` → after: `L6038-L6040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6038-L6040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6038-L6040) · [Before (L4387-L4409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4387-L4409)

```diff
-     var hY = GB(39057),
-       aY = GB(40342),
-       eY = GB(363),
-       TY = GB(40351),
-       bY = GB(9936).h;
-     class CY extends eO {
-       kP(BB) {
-         BB /= 1e3;
-         var OB = FD(0, eY.squaredLength(this.gravity));
-         ! function(BB, OB, GB, YB, DB) {
-           var QB = BB._tickNext,
-             oB = BB._tickEnd;
-           BB._tickNext = OB, BB._tickEnd = GB;
-           try {
-             for (; BB._tickNext < BB._tickEnd;) {
-               var jB = BB.bodies[BB._tickNext++];
- ... (7 more removed lines; see GitHub link above)
+ 
+     function TE(WW, iW, OW) {
+       return Object.keys(WW).filter((WW => !OW || !(0, bW.e)(WW))).sort(((WW, OW) => (OW === iW ? 1 : 0) - (WW === iW ? 1 : 0) || WW.localeCompare(OW)))
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4419-L4420` → after: `L6043-L6046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6043-L6046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6043-L6046) · [Before (L4419-L4420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4419-L4420)

```diff
-     function GD(BB, OB) {
-       return OB * (1 - (1 - BB.ratioInFluid) ** 2)
+     function JE(WW, iW, OW) {
+       var mW;
+       const EW = TE(WW, iW, OW);
+       return null !== iW && EW.includes(iW) ? iW : null !== (mW = EW[0]) && void 0 !== mW ? mW : null
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4424-L4528` → after: `L6049-L6050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6049-L6050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6049-L6050) · [Before (L4424-L4528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4424-L4528)

```diff
-     function DD(BB, OB, GB, YB) {
-       if (!OB.wT || OB.Wy <= 0) {
-         var DB = OB.lZ;
-         DB[0] = 0, DB[1] = 0, DB[2] = 0;
-         var QB = OB.eT;
-         QB[0] = 0, QB[1] = 0, QB[2] = 0;
-         var oB = OB.YC;
-         return oB[0] = 0, oB[1] = 0, void(oB[2] = 0)
-       }
-       var jB = !!BB.gz,
-         yB = (0, hY.b)(OB);
-       if (jB && yB && BB.rollbackBody.loadStateFromCopy(OB), yB && function(BB, OB) {
-           if (!BB.aT) return;
-           var GB = (0, hY.c)(NG(BB, OB), BB.aT, OB.Rz);
-           if (0 === GB) return;
-           fD[1] = GB, OB.Rz.translate(fD), OB.JC(), OB.Lz && OB.Lz()
- ... (89 more removed lines; see GitHub link above)
+     function hE(WW) {
+       return WW.includes("index.ts") ? "index.ts" : "index.js"
```

#### 186. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4532-L4545` → after: `L6053-L6055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6053-L6055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6053-L6055) · [Before (L4532-L4545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4532-L4545)

```diff
-     function oD(BB, OB, GB, YB, DB) {
-       var QB = GB.resting[OB],
-         oB = YB[OB];
-       if (!GB.alwaysApplyHorizFriction || 1 !== OB) {
-         if (0 === QB) return;
-         if (QB * oB <= 0) return
-       }
-       eY.copy(jD, GB.lZ), jD[OB] = 0;
-       var jB = eY.length(jD);
-       if (!FD(jB, 0)) {
-         var yB = Math.abs(GB.friction * BB.gravity[OB] * DB),
-           JB = jB > yB ? (jB - yB) / jB : 0;
-         GB.lZ[(OB + 1) % 3] *= JB, GB.lZ[(OB + 2) % 3] *= JB
-       }
+     function HE(WW) {
+       const iW = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}${hE(WW)}`;
+       return `Only ${iW} runs by itself: another file runs when ${iW} imports or requires it, so keep the import, require and export lines their files have (no import/export is for one file), and put callbacks in ${iW}.\n`
```

#### 187. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4551-L4552` → after: `L6058-L6066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6058-L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6058-L6066) · [Before (L4551-L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4551-L4552)

```diff
-     function MD(BB, OB, GB, YB) {
-       yD[OB] = GB, YB[OB] = 0, JD || (YB[0] = 0, YB[1] = 0, YB[2] = 0)
+     function nE(WW, iW) {
+       var OW;
+       const {
+         files: mW,
+         activePath: EW
+       } = WW, NW = !0 === WW.codeBlock, PW = TE(mW, EW, NW);
+       if (0 === PW.length || PW.every((WW => "" === mW[WW].trim()))) return NW ? "There is no code yet: the code block is empty." : PW.includes("index.ts") ? "There is no code yet: index.ts is empty. Write it in index.ts." : "There is no code yet: index.js is empty.";
+       const LW = null !== (OW = JE(mW, EW, NW)) && void 0 !== OW ? OW : PW[0];
+       return `${PW.length>1?`Their files:\n${PW.map((WW=>{const iW=""===(OW=mW[WW])?0:OW.replace(/\n$/,"").split("\n").length;var OW;return`- ${WW}: ${1===iW?"1 line":`${iW} lines`}${WW===LW?" (open in the editor, its code below)":""}`})).join("\n")}\n${NW?"":HE(PW)}\n`:""}${func … [truncated]
```

#### 188. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4556-L4557` → after: `L6069-L6131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6069-L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6069-L6131) · [Before (L4556-L4557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4556-L4557)

```diff
-     function zD() {
-       return PD = !0, !0
+     function uE(WW) {
+       var iW, OW, mW, EW, NW, PW;
+       return {
+         codeBlock: !0 === WW.codeBlock,
+         hasCode: "" !== (null !== (iW = WW.files[null !== (OW = WW.activePath) && void 0 !== OW ? OW : ""]) && void 0 !== iW ? iW : "").trim(),
+         hasBigFile: Object.values(WW.files).some((WW => WW.length > 6e3)),
+         wantsExport: cE(WW.request),
+         canAsk: !0 === WW.canAsk,
+         canRemember: !0 === (null === (mW = WW.about) || void 0 === mW ? void 0 : mW.canRemember),
+         isBigRequest: li(WW.request),
+         canLookUp: !0 === WW.canLookUp,
+         hasOtherFiles: Object.keys(WW.files).length > 1,
+         hasErrors: WW.errors.length > 0,
+         canChangeWorldCode: !0 === WW.canChangeWorldCode,
+         hasWorldCodeFiles: Object.keys(WW.files).some(bW.e),
+         addsToEntryFile: !0 === WW.addsToEntryFile,
+ ... (47 more added lines; see GitHub link above)
```

#### 189. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4560-L4580` → after: `L6134-L6142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6134-L6142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6134-L6142) · [Before (L4560-L4580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4560-L4580)

```diff
-     function lD(BB, OB, GB, YB) {
-       if (1 !== OB) return !0;
-       YB[OB] = 0
-     }
- 
-     function pD(BB, OB, GB, YB, DB, QB) {
-       DB[0] = 0, DB[1] = 0, DB[2] = 0;
-       var oB = NG(BB, OB);
-       yD = DB, JD = QB;
-       var jB = TY(oB, GB, YB, MD);
-       return yD = null, jB
-     }
-     var qD = new aY([], []),
-       ZD = eY.create(),
-       ND = eY.create(),
-       RD = eY.create(),
- ... (5 more removed lines; see GitHub link above)
+     function eE(WW, iW) {
+       var OW, mW;
+       const EW = uE(WW),
+         NW = !0 === EW.canLookUp,
+         PW = (null !== (OW = null === (mW = WW.lookups) || void 0 === mW ? void 0 : mW.length) && void 0 !== OW ? OW : 0) > 0,
+         LW = !0 === EW.hasWorldCodeFiles,
+         cW = [EW.hasCode ? "" : "No open file has code, so don't call edit_code_in_place.", EW.hasBigFile ? "" : "Every file is short, so change them with write_file or replace_function, not edit_file.", NW ? "" : PW ? "You have looked things up as many times as you can: answer n … [truncated]
+       return cW.length > 0 ? `\n\nFor this request: ${cW.join(" ")}` : ""
+     }
```

#### 190. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4582-L4591` → after: `L6144-L6439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6144-L6439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6144-L6439) · [Before (L4582-L4591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4582-L4591)

```diff
-     function UD(BB, OB, GB, YB, DB, QB, oB) {
-       eY.set(RD, 0, DB, 0);
-       var jB = TY(YB, GB, RD, zD);
-       if (!(jB <= 0)) {
-         eY.subtract(AD, ND, GB.base), AD[1] = 0, pD(BB, OB, GB, AD, ZD, !0);
-         var yB = FD(GB.base[0], ND[0]),
-           JB = FD(GB.base[2], ND[2]);
-         if ((!QB || yB || JB && oB) && (!oB || yB && QB || JB) && (eY.set(WD, 0, -jB, 0), TY(YB, GB, WD, zD), function(BB, OB, GB) {
-             return mD(BB, OB, GB.base[0] + 1e-5, GB.base[1], GB.base[2] + 1e-5) || mD(BB, OB, GB.max[0] - 1e-5, GB.base[1], GB.base[2] + 1e-5) || mD(BB, OB, GB.base[0] + 1e-5, GB.base[1], GB.max[2] - 1e-5) || mD(BB, OB, GB.max[0] - 1e-5, GB.base[1], GB.max[2] - 1e-5)
-           }(BB, OB, GB))) return iD(OB.Rz, GB), OB.resting[0] = ZD[0], OB.resting[2] = ZD[2], OB.Lz && OB.Lz(), !0
+     function vE(WW, iW) {
+       var OW, mW, EW, NW, PW, LW;
+       let cW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UE,
+         {
+           docsInTurn: wW = !1,
+           Yj: tW = !1
+         } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+       const ZW = "deepseek" === cW.format,
+         xW = Object.values(iW.files).join("\n"),
+         lW = iW.history.slice(-2).map((WW => WW.text)).join("\n"),
+         AW = `${iW.request}\n${lW}\n${iW.errors.join("\n")}`,
+         bW = !0 === iW.looksUpDocs,
+         jW = bW && !0 === iW.canLookUp ? [] : WW.find(AW, xW, 12),
+         UW = WW.matchItemAndBlockNames(AW, 12),
+         kW = !0 === iW.codeBlock,
+         sW = kW ? "myId" : "playerId",
+ ... (280 more added lines; see GitHub link above)
```

#### 191. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4594-L4598` → after: `L6443-L6447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6443-L6447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6443-L6447) · [Before (L4594-L4598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4594-L4598)

```diff
-     var fD = eY.create();
-     var kD = eY.create(),
-       dD = new aY([], []),
-       KD = eY.create();
-     var uD = 1e-5;
+     const EN = 4e5;
+     var NN = OW(53658);
+     let PN = [],
+       LN = 0,
+       cN = null;
```

#### 192. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4600-L4608` → after: `L6449-L6450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6449-L6450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6449-L6450) · [Before (L4600-L4608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4600-L4608)

```diff
-     function mD(BB, OB, GB, YB, DB) {
-       var QB = NG(BB, OB),
-         oB = Math.floor(GB),
-         jB = Math.floor(DB),
-         yB = YB - uD,
-         JB = Math.floor(yB);
-       if (bY(QB(oB, JB, jB), GB, yB, DB)) return !0;
-       var MB = Math.floor(YB) - 1;
-       return MB !== JB && bY(QB(oB, MB, jB), GB, MB + 1 - uD, DB)
+     function wN(WW) {
+       return Math.ceil(WW.length / 4)
```

#### 193. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4612-L4613` → after: `L6453-L6454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6453-L6454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6453-L6454) · [Before (L4612-L4613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4612-L4613)

```diff
-     function FD(BB, OB) {
-       return Math.abs(BB - OB) < 1e-5
+     function tN(WW) {
+       return "number" === typeof WW && Number.isInteger(WW) && WW >= 0
```

#### 194. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4616-L4652` → after: `L6457-L6482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6457-L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6457-L6482) · [Before (L4616-L4652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4616-L4652)

```diff
-     function iD(BB, OB) {
-       for (var GB = 0; GB < 3; GB++) BB.base[GB] = OB.base[GB], BB.max[GB] = OB.max[GB], BB.vec[GB] = OB.vec[GB]
-     }
-     var LD = function(BB) {};
-     var gD = {
-       gravity: [0, -10, 0],
-       hz: .1
-     };
-     class rD extends CY {
-       constructor(BB, OB) {
-         OB = Object.assign({}, gD, OB);
-         var GB = BB.mP,
-           YB = BB.JP.Ul,
-           DB = BB.Tz;
-         OB.aT = (0, TO.i)(((BB, OB, YB) => !GB.Qv(BB + DB[0], OB + DB[1], YB + DB[2])), "cell"), super(OB, ((BB, OB, YB) => GB.Cz(BB + DB[0], OB + DB[1], YB + DB[2])), ((BB, OB, QB) => {
-           var oB = GB.sH(BB + DB[0], OB + DB[1], QB + DB[2]);
- ... (21 more removed lines; see GitHub link above)
+     function ZN(WW, iW, OW) {
+       var mW;
+       let EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       ! function(WW) {
+         if ("undefined" === typeof window) return;
+         if (PN.push(WW), PN.length >= 40) return void lN();
+         xN()
+       }(null !== (mW = function(WW) {
+         if (null === WW || "object" !== typeof WW) return null;
+         const {
+           prompt_tokens: iW,
+           completion_tokens: OW,
+           prompt_tokens_details: mW
+         } = WW;
+         if (!tN(iW) || !tN(OW)) return null;
+         const EW = null !== mW && "object" === typeof mW ? mW.cached_tokens : void 0;
+ ... (10 more added lines; see GitHub link above)
```

#### 195. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4660-L4661` → after: `L6485-L6502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6485-L6502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6485-L6502) · [Before (L4660-L4661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4660-L4661)

```diff
-     function aD() {
-       this.Bx = !1, this.Zx = !1, this.Ix = 1, this.Xx = 0, this.Hx = 10, this.vx = 10, this.O4 = 0, this.o4 = .2
+     function xN() {
+       cN ??= setTimeout((() => {
+         lN()
+       }), 15e3)
+     }
+     async function lN() {
+       null !== cN && (clearTimeout(cN), cN = null);
+       const WW = PN.slice(0, 40);
+       PN = PN.slice(40), PN.length > 0 && (cN = setTimeout((() => {
+         lN()
+       }), 15e3));
+       const iW = LN;
+       if (LN = 0, 0 !== WW.length || 0 !== iW) try {
+         await (0, NN.postToGameServer)("/ai-helper/usage", {
+           calls: WW,
+           pastes: iW
+ ... (2 more added lines; see GitHub link above)
```

#### 196. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4663-L4723` → after: `L6504-L6507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6504-L6507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6504-L6507) · [Before (L4663-L4723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4663-L4723)

```diff
-     var eD = [RB().create(), RB().create(), RB().create()],
-       TD = RB().create();
-     class bD {
-       constructor(BB, OB) {
-         OB = Object.assign({}, new aD, OB), this.kz = BB, this.Hx = +OB.Hx, this.vx = +OB.vx, this.Bx = !!OB.Bx, this.Zx = !!OB.Zx, this.Ix = OB.Ix, this.Xx = OB.Xx, this.heading = 0, this.pitch = 0, this.PP = 0, this.jZ = RB().create(), this.W4 = this.kz.DW.A4(["position"]);
-         var GB = .9 * BB.DW.f4(BB.EX).height;
-         BB.DW.RL(this.W4, "vW", {
-           qp: BB.EX,
-           offset: [0, GB, 0]
-         }), this.K4 = OB.O4, this.o4 = OB.o4, this.Z8 = OB.O4, this.gH = {
-           dx: 0,
-           dy: 0
-         }, this.W8 = null, this.targetX = 0, this.targetY = 0, this.cameraRotationOffset = [0, 0, 0], this.cameraPositionOffset = [0, 0, 0], this.K8 = new zQ(this), this.o9 = RB().pp(0, 0, 1), this.J9 = RB().pp(0, 0, 1), this.uE = !1, this.N9 = {
-           bK: 0,
-           vy: 0,
-           lH: 0,
- ... (45 more removed lines; see GitHub link above)
+     const AN = 6e4;
+     const bN = new class {
+       constructor() {
+         this.calls = new Map, this.fullUntil = new Map
```

#### 197. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4725-L4726` → after: `L6509-L6511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6509-L6511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6509-L6511) · [Before (L4725-L4726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4725-L4726)

```diff
-       o_(BB, OB, GB, YB) {
-         BB[4] = GB, BB[5] = YB, BB[6] = OB, this.Tm && this.Tm(BB)
+       record(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         this.calls.set(WW, [...this.recent(WW, iW), iW])
```

#### 198. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4728-L4767` → after: `L6513-L6517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6513-L6517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6513-L6517) · [Before (L4728-L4767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4728-L4767)

```diff
-       K3() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         var OB = {
-           dx: this.gH.dx,
-           dy: this.gH.dy
-         };
-         this.gH.dx = this.gH.dy = 0;
-         var GB = NaN,
-           YB = NaN;
-         BB || (GB = (YB = function() {
-           var BB = "undefined" !== typeof document && document.timeline ? document.timeline.currentTime : null;
-           return "number" === typeof BB ? BB : performance.now()
-         }()) - this.W9, this.W9 = YB);
-         var DB = !BB && this.Tm ? this.Q_(YB, GB, OB) : null;
-         const QB = this.U3 ? this.U3() : 0,
-           oB = this.I3 ? this.I3() : null,
- ... (24 more removed lines; see GitHub link above)
+       markFull(WW) {
+         var iW;
+         let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
+           mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.fullUntil.set(WW, Math.max(null !== (iW = this.fullUntil.get(WW)) && void 0 !== iW ? iW : 0, OW + Math.max(mW, AN)))
```

#### 199. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4769-L4773` → after: `L6519-L6521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6519-L6521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6519-L6521) · [Before (L4769-L4773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4769-L4773)

```diff
-       y_() {
-         RB().set(this.J9, 0, 0, 1);
-         var BB = this.J9,
-           OB = TD;
-         tD(this, this.heading, this.pitch, 0 !== this.Z8, this.o9), RB().gq(BB, BB, OB, this.pitch), RB().sq(BB, BB, OB, this.heading)
+       callsInLastMinute(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         return this.recent(WW, iW).length
```

#### 200. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4775-L4782` → after: `L6523-L6528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6523-L6528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6523-L6528) · [Before (L4775-L4782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4775-L4782)

```diff
-       J_(BB, OB, GB, YB, DB) {
-         if (RB().copy(DB, BB), !(YB > 0)) return 0;
-         xD(this, DB, OB);
-         var QB = tD(this, OB, GB, !0, yQ),
-           oB = this.kz.bloxd.E1(this.kz.EX),
-           jB = sD(HD(this, DB, QB, YB * oB + .5), oB),
-           yB = Math.min(YB, jB);
-         return 0 === yB ? (RB().copy(DB, BB), 0) : (RB().fp(DB, DB, QB, -yB * oB), yB)
+       freeAt(WW) {
+         var iW;
+         let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         const mW = this.recent(WW, OW),
+           EW = mW.length < 2 ? OW : mW[mW.length - 2] + AN;
+         return Math.max(EW, null !== (iW = this.fullUntil.get(WW)) && void 0 !== iW ? iW : 0, OW)
```

#### 201. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4784-L4785` → after: `L6530-L6532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6530-L6532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6530-L6532) · [Before (L4784-L4785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4784-L4785)

```diff
-       M_(BB, OB, GB) {
-         return RB().ep(JQ, OB), HD(this, BB, JQ, GB)
+       firstFreeAt(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         return Math.min(...WW.map((WW => this.freeAt(WW, iW))))
```

#### 202. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4787-L4789` → after: `L6534-L6535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6534-L6535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6534-L6535) · [Before (L4787-L4789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4787-L4789)

```diff
-       P_(BB) {
-         const OB = (this.K4 - this.Z8) * this.o4;
-         Math.abs(OB) < 1e-4 ? this.Z8 = this.K4 : this.Z8 += OB, 0 !== OB && this.W8 && this.W8(this.Z8, this.Z8 - OB), this.K8.update(BB)
+       clear() {
+         this.calls.clear(), this.fullUntil.clear()
```

#### 203. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4791-L4800` → after: `L6537-L6539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6537-L6539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6537-L6539) · [Before (L4791-L4800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4791-L4800)

```diff
-       l_() {
-         var BB = sD(CD(this), this.kz.bloxd.E1(this.kz.EX));
-         this.Z8 > BB && (this.Z8 = BB);
-         var OB = this.kz.UP.p_().q_;
-         if (OB[0] || OB[1]) {
-           var GB = Math.max(BQ(this) - .2, 0);
-           OB[1] > GB && (OB[1] = GB);
-           var YB = Math.max(OQ(this) - .2, 0);
-           OB[0] > YB && (OB[0] = YB)
-         }
+       recent(WW, iW) {
+         var OW;
+         return (null !== (OW = this.calls.get(WW)) && void 0 !== OW ? OW : []).filter((WW => iW - WW < AN))
```

#### 204. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4802` → after: `L6541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6541) · [Before (L4802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4802)

```diff
-     }
+     };
```

#### 205. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4804-L4807` → after: `L6543-L6544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6543-L6544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6543-L6544) · [Before (L4804-L4807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4804-L4807)

```diff
-     function CD(BB) {
-       const OB = BB.kz.bloxd.E1(BB.kz.EX);
-       var GB = Math.max(BB.K4, BB.Z8) * OB + .5;
-       return HD(BB, BB.X3(), BB.Y_(), GB)
+     function jN(WW) {
+       return WW > 36e5
```

#### 206. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4810-L4815` → after: `L6547-L6550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6547-L6550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6547-L6550) · [Before (L4810-L4815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4810-L4815)

```diff
-     function HD(BB, OB, GB, YB) {
-       if (!DQ) {
-         var DB = BB.kz.Tz;
-         DQ = new(wD())([0, 0, 0], RB().clone(oQ)), QQ = (OB, GB, YB) => BB.kz.mP.Cz(OB + DB[0], GB + DB[1], YB + DB[2]), RB().scale(oQ, oQ, -.5)
-       }
-       return DQ.setPosition(OB), DQ.translate(oQ), RB().scale(jQ, GB, -YB), GQ(BB)
+     function UN(WW, iW) {
+       var OW;
+       const mW = null === (OW = WW.headers.get(iW)) || void 0 === OW ? void 0 : OW.trim();
+       return void 0 !== mW && /^\d+$/.test(mW) ? Number(mW) : null
```

#### 207. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4819-L4820` → after: `L6553-L6556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6553-L6556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6553-L6556) · [Before (L4819-L4820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4819-L4820)

```diff
-     function sD(BB, OB) {
-       return Math.max(BB - vD, 0) / OB
+     function kN(WW) {
+       var iW;
+       const OW = null !== (iW = UN(WW, "retry-after")) && void 0 !== iW ? iW : UN(WW, "ratelimit-reset");
+       return null === OW ? null : 1e3 * OW
```

#### 208. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4823-L4825` → after: `L6559-L6562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6559-L6562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6559-L6562) · [Before (L4823-L4825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4823-L4825)

```diff
-     function xD(BB, OB, GB) {
-       var YB = BB.cameraPositionOffset;
-       OB[0] += YB[0] * Math.cos(GB) + YB[2] * Math.sin(GB), OB[1] += YB[1], OB[2] += YB[0] * -Math.sin(GB) + YB[2] * Math.cos(GB)
+     function sN(WW, iW) {
+       var OW;
+       const mW = null !== (OW = kN(iW)) && void 0 !== OW ? OW : 0;
+       (429 === iW.status || jN(mW) && 0 === UN(iW, "ratelimit-remaining")) && bN.markFull(WW, Date.now(), mW)
```

#### 209. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4828-L4830` → after: `L6565-L6568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6565-L6568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6565-L6568) · [Before (L4828-L4830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4828-L4830)

```diff
-     function tD(BB, OB, GB, YB, DB) {
-       var QB = TD;
-       return RB().set(DB, 0, 0, 1), RB().gq(DB, DB, QB, BB.jZ[0]), RB().sq(DB, DB, QB, BB.jZ[1]), RB().YZ(DB, DB, QB, BB.jZ[2]), RB().gq(DB, DB, QB, GB), RB().sq(DB, DB, QB, OB), YB && (RB().gq(DB, DB, QB, BB.cameraRotationOffset[0]), RB().sq(DB, DB, QB, BB.cameraRotationOffset[1 … [truncated]
+     function MN(WW) {
+       const iW = Date.now(),
+         OW = bN.freeAt(WW, iW) - iW;
+       return OW <= 0 ? null : jN(OW) ? "unavailable" : "busy"
```

#### 210. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4833-L4837` → after: `L6571-L6572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6571-L6572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6571-L6572) · [Before (L4833-L4837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4833-L4837)

```diff
-     function BQ(BB) {
-       DQ.setPosition(BB.U1()), DQ.translate(oQ);
-       var OB = Math.max(BB.targetY, BB.kz.UP.p_().q_[1]) + .5,
-         GB = BB.I6();
-       return RB().scale(jQ, GB, OB), GQ(BB)
+     function KN(WW, iW) {
+       return `${function(WW){var iW;if("string"===typeof WW)return WW;if(429!==WW.status)return`http-${WW.status}`;if(jN(null!==(iW=kN(WW))&&void 0!==iW?iW:0))return"yearly-limit";const OW=UN(WW,"retry-after");return null===OW?"busy":`busy-ra${OW}`}(iW)}__${WW.replace(/[^A-Za-z0- … [truncated]
```

#### 211. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4840-L4846` → after: `L6627-L6628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6627-L6628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6627-L6628) · [Before (L4840-L4846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4840-L4846)

```diff
-     function OQ(BB) {
-       const OB = BB.U1(),
-         GB = (0, hD.c)(BB.heading, BB.pitch - Math.PI / 2);
-       RB().fp(OB, OB, GB, BB.kz.UP.p_().q_[1]), DQ.setPosition(OB), DQ.translate(oQ);
-       var YB = Math.max(BB.targetX, BB.kz.UP.p_().q_[0]) + .5;
-       const DB = (0, hD.c)(BB.heading + Math.PI / 2, 0);
-       return RB().scale(jQ, DB, YB), GQ(BB)
+     function HN(WW) {
+       return [...JN, hN].find((iW => iW.name === WW))
```

#### 212. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4849-L4851` → after: `L6631-L6633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6631-L6633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6631-L6633) · [Before (L4849-L4851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4849-L4851)

```diff
-     function GQ(BB) {
-       var OB = BB.kz.physics?.wasm;
-       return OB ? OB.rC(DQ, jQ, YQ) : YQ()
+     function nN(WW) {
+       var iW, OW;
+       return null !== (iW = null === (OW = HN(WW)) || void 0 === OW ? void 0 : OW.callFormat) && void 0 !== iW ? iW : "simple"
```

#### 213. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4854-L4893` → after: `L6636-L6640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6636-L6640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6636-L6640) · [Before (L4854-L4893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4854-L4893)

```diff
-     function YQ() {
-       return cD()(QQ, DQ, jQ, MQ, !0)
-     }
-     var DQ, QQ, oQ = RB().pp(.2, .2, .2),
-       jQ = RB().create(),
-       yQ = RB().create(),
-       JQ = RB().create(),
-       MQ = () => !0;
-     var PQ = Math.PI / 2 - .001;
-     class zQ {
-       constructor(BB) {
-         this.N_ = BB, this.dP = 0, this.R_ = 0, this.A_ = 0, this.S_ = 0, this.n_ = performance.now(), this.U_ = performance.now(), this.f_ = 0, this.k_ = 0
-       }
-       add(BB) {
-         const OB = this.R_ - this.A_,
-           GB = this.N_.pitch + PQ;
- ... (24 more removed lines; see GitHub link above)
+     function uN(WW) {
+       var iW;
+       return {
+         format: null !== (iW = WW.callFormat) && void 0 !== iW ? iW : "simple",
+         nativeTools: !0 === WW.nativeTools
```

#### 214. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4896-L4986` → after: `L6643-L6653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6643-L6653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6643-L6653) · [Before (L4896-L4986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4896-L4986)

```diff
-     var lQ = GB(38165),
-       pQ = {
-         F_: ""
-       };
-     class qQ {
-       constructor(BB, OB, GB) {
-         OB = Object.assign({}, pQ, OB), this.kz = BB, this.L_ = OB.F_;
-         var YB = {},
-           DB = [!1],
-           QB = [!1],
-           oB = [null],
-           jB = [!1],
-           yB = [!1],
-           JB = [!1],
-           MB = [null],
-           PB = [null],
- ... (75 more removed lines; see GitHub link above)
+ 
+     function oN(WW, iW) {
+       return "function" === typeof WW ? WW(iW) : WW
+     }
+     const dN = "TOO_COMPLEX",
+       eN = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${dN} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an  … [truncated]
+       vN = 24e4,
+       gN = ["tooLarge", "busy", "timeout", "turnedAway", "failed", "unavailable"];
+     class DN extends Error {
+       constructor(WW) {
+         super(`World Code AI ${WW}`), this.reason = WW
```

#### 215. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4990-L4993` → after: `L6657-L6663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6657-L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6657-L6663) · [Before (L4990-L4993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4990-L4993)

```diff
-     function ZQ(BB, OB, GB, YB) {
-       if (!GB) return 0;
-       var DB = OB[GB];
-       return void 0 === DB && YB && (DB = BB.R7(GB, {})), DB
+     function VN(WW, iW) {
+       var OW, mW, EW, NW, PW;
+       const LW = WW[null !== (OW = iW.index) && void 0 !== OW ? OW : 0] ??= {
+         name: "",
+         args: ""
+       };
+       LW.name += null !== (mW = null === (EW = iW.function) || void 0 === EW ? void 0 : EW.name) && void 0 !== mW ? mW : "", LW.args += null !== (NW = null === (PW = iW.function) || void 0 === PW ? void 0 : PW.arguments) && void 0 !== NW ? NW : ""
```

#### 216. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4996-L4997` → after: `L6666-L6667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6666-L6667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6666-L6667) · [Before (L4996-L4997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L4996-L4997)

```diff
-     function NQ(BB) {
-       this.onLoad = BB.onLoad || null, this.KV = BB.KV || null, this.HV = BB.HV || null, this.bV = BB.bV || null, this.oV = BB.oV || null
+     function pN(WW) {
+       return "mcp" === WW ? "simple" : WW
```

#### 217. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5000-L5002` → after: `L6670-L6672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6670-L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6670-L6672) · [Before (L5000-L5002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5000-L5002)

```diff
-     function RQ() {
-       let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       this.solid = !BB, this.MZ = null, this.opaque = !BB, this.fl = !1, this.material = null, this.x_ = null, this.az = 1, this.Q0 = .5, this.onLoad = null, this.KV = null, this.HV = null, this.bV = null, this.oV = null, this.dp = null, this.PZ = null, this.Kp = null, this.jF =  … [truncated]
+     function fN(WW, iW, OW, mW) {
+       let EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+       return CN(WW, iW, OW, pN(mW), EW).answer
```

#### 218. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5005-L5006` → after: `L6675-L6722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6675-L6722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6675-L6722) · [Before (L5005-L5006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5005-L5006)

```diff
-     function WQ() {
-       this.color = null, this.B5 = !0, this.h_ = [], this.e_ = !1, this.T_ = -1, this.b_ = null, this.v_ = null, this.Y5 = null, this.zZ = null
+     function CN(WW, iW, OW, mW, EW) {
+       const NW = OW.flatMap((WW => {
+         const iW = AO(WW.name, WW.args);
+         return null === iW ? [] : [tE(NO(mW), iW.name, iW.args)]
+       }));
+       let PW = !1;
+       return 0 !== NW.length || 0 !== jO(WW, mW).length || WW.includes("```") || (NW.push(...EW ? [] : function(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
+         const mW = new Map;
+         for (const LW of bO(WW, iW)) {
+           const WW = Object.values(LW.args).some((WW => void 0 !== WW && OW.includes(WW.trim())));
+           var EW, NW, PW;
+           "export_game" === LW.name || "switch_to_world_code" === LW.name || yi(LW.name) || WW || mW.set(`${LW.name} ${null!==(EW=LW.args.path)&&void 0!==EW?EW:""} ${null!==(NW=LW.args.search)&&void 0!==NW?NW:""} ${null!==(PW=LW.args.name)&&void 0!==PW?PW:""}`, LW.source)
+         }
+         return [...new Set(mW.values())]
+       }(iW, mW, SE)), PW = NW.length > 0), {
+ ... (32 more added lines; see GitHub link above)
```

#### 219. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5013-L5027` → after: `L6725-L6733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6725-L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6725-L6733) · [Before (L5013-L5027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5013-L5027)

```diff
-     function nQ(BB, OB) {
-       this.kz = BB, this.mesh = OB;
-       var GB = OB.Lp();
-       this.JBB = !0 === GB.MBB && !!BB.zp, this.JBB && (0, VQ.i)(OB), this.zBB = GB.lBB?.(OB, this.JBB ? kQ : fQ) ?? null, this.buffer = null, this.pBB = null, this.qBB = null, this.NBB = BB.iq.NBB, this.Jm = !1, this.RBB = null, this.WBB = null, this.ABB = 0, this.JZ = null, thi … [truncated]
-         function(BB, OB) {
-           var GB = BB.material,
-             YB = [];
-           if (GB.jOB && Array.isArray(GB.jOB))
-             for (var DB = 0; DB < GB.jOB.length; DB++) GB.jOB[DB] && YB.push(GB.jOB[DB]);
-           else YB.push(GB);
-           for (DB = 0; DB < YB.length; DB++) {
-             var QB = YB[DB];
-             LQ.has(QB) || ((0, VQ.d)(QB, OB), LQ.add(QB))
-           }
-         }(this.mesh, BB.UP), this.kz.UP.YL(this.mesh), this.kz.emit("addingTerrainMesh", this.mesh)
+     function BN(WW) {
+       return WW.map((WW => ({
+         type: "function",
+         function: {
+           name: WW.name,
+           description: WW.description,
+           parameters: WW.inputSchema
+         }
+       })))
```

#### 220. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5030-L5050` → after: `L6736-L6803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6736-L6803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6736-L6803) · [Before (L5030-L5050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5030-L5050)

```diff
-     function UQ(BB, OB, GB) {
-       return (null === OB || OB.data.length < 2 * BB.ABB) && (OB = {
-         data: new Uint32Array(Math.max(16, 4 * BB.ABB)),
-         count: 0
-       }), OB.count = (0, SQ.I)(BB.RBB, BB.WBB, BB.ABB, GB, SQ.g, OB.data), OB
-     }
-     nQ.prototype.dispose = function() {
-       this.Vp || (this.NBB.iBB.delete(this), (0, SQ.H)(this.mesh, null), this.Jm && (0, SQ.D)(this.mesh, void 0), this.Jm = !1, this.mesh.rBB = 0, this.wBB(0), this.kz.emit("removingTerrainMesh", this.mesh), this.kz.UP.EBB(this.mesh, !1), this.mesh = null, this.dBB = null, this.K … [truncated]
-     }, nQ.prototype.hBB = function(BB, OB, GB, YB, DB, QB, oB) {
-       ! function(BB) {
-         if (BB.count < BB.CP) return;
-         var OB = Math.max(8, 2 * BB.CP);
-         BB.wBB(OB)
-       }(this);
-       var jB = this.count << 4;
-       this.KBB[this.count] = OB, this.dBB.set(OB, jB);
- ... (5 more removed lines; see GitHub link above)
+     function qN(WW) {
+       return "object" === typeof WW
+     }
+     async function RN(WW, iW, OW, mW) {
+       let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
+       const NW = MN(WW.name);
+       if (null !== NW) return NW;
+       bN.record(WW.name);
+       const PW = await fetch(qE, {
+         method: "POST",
+         headers: {
+           "Content-Type": "application/json"
+         },
+         body: JSON.stringify({
+           model: WW.name,
+           messages: iW,
+ ... (52 more added lines; see GitHub link above)
```

#### 221. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5052-L5067` → after: `L6805-L6822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6805-L6822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6805-L6822) · [Before (L5052-L5067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5052-L5067)

```diff
-       this.count++, this.ap = !0
-     }, nQ.prototype.yBB = function(BB, OB) {
-       return this.JBB ? (OB | this.kz.JP.Cp[BB] << 16) >>> 0 : OB
-     }, nQ.prototype.eBB = function(BB, OB) {
-       var GB = this.dBB.get(OB);
-       if (!(GB >= 0)) throw "tried to remove object instance not in storage";
-       this.dBB.delete(OB);
-       var YB = GB >> 4,
-         DB = this.count - 1;
-       if (YB !== DB) {
-         var QB = DB << 4;
-         ! function(BB, OB, GB, YB) {
-           for (var DB = 0; DB < 16; DB++) GB[YB + DB] = BB[OB + DB]
-         }(this.buffer, QB, this.buffer, GB), this.pBB[YB] = this.pBB[DB], this.Jm && (this.qBB[YB] = this.qBB[DB]);
-         var oB = this.KBB[DB];
-         this.dBB.set(oB, GB), this.KBB[YB] = oB
+       const AW = GN(WW, cW, wW, tW, ZW, xW);
+       return null === AW ? (SN.wZ(WW.name, "empty"), "failed") : AW
+     }
+ 
+     function GN(WW, iW, OW, mW, EW) {
+       var NW;
+       let PW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         LW = iW;
+       var cW;
+       WW.nativeTools && PW && (LW = null !== (cW = TN(LW)) && void 0 !== cW ? cW : LW);
+       LW = LW.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
+       const wW = CN(LW, OW, mW, null !== (NW = WW.callFormat) && void 0 !== NW ? NW : "simple", EW);
+       return "" === wW.answer ? null : {
+         model: WW.name,
+         answer: wW.answer,
+         reasoning: OW,
+ ... (2 more added lines; see GitHub link above)
```

#### 222. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5069-L5090` → after: `L6824-L6878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6824-L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6824-L6878) · [Before (L5069-L5090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5069-L5090)

```diff
-       this.count--, this.ap = !0,
-         function(BB) {
-           if (BB.count > .4 * BB.CP) return;
-           if (BB.CP < 100) return;
-           BB.wBB(Math.round(BB.CP / 2)), BB.KBB.length = Math.min(BB.KBB.length, BB.CP)
-         }(this)
-     }, nQ.prototype.TBB = function() {
-       var BB;
-       this.ap ? (this.Jm && (8 * iQ(BB = this) > mQ.length && (function(BB) {
-         for (var OB = BB.count, GB = BB.qBB, YB = 0; YB < OB; YB++) dQ[GB[YB]]++;
-         IQ = BB.NBB.keys, mQ.sort(FQ), IQ = null;
-         for (var DB = 0, QB = 0; QB < mQ.length; QB++) {
-           var oB = dQ[mQ[QB]];
-           dQ[mQ[QB]] = DB, DB += oB
-         }
-         for (var jB = BB.buffer.slice(0, OB << 4), yB = BB.pBB.slice(0, OB), JB = GB.slice(0, OB), MB = BB.KBB.slice(0, OB), PB = 0; PB < OB; PB++) {
- ... (6 more removed lines; see GitHub link above)
+     }
+ 
+     function IN(WW) {
+       return WW.replace(/<think>[\s\S]*?(<\/think>|$)/g, "")
+     }
+ 
+     function aN(WW) {
+       return qN(WW) && !WW.isCutShort
+     }
+     async function rN(WW, iW, OW, mW, EW) {
+       const NW = WW.map((() => new AbortController)),
+         PW = () => {
+           for (const WW of NW) WW.abort()
+         };
+       null !== OW && void 0 !== OW && OW.aborted && PW(), null === OW || void 0 === OW || OW.addEventListener("abort", PW, {
+         once: !0
+ ... (39 more added lines; see GitHub link above)
```

#### 223. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5093-L5118` → after: `L6881-L6895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6881-L6895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6881-L6895) · [Before (L5093-L5118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5093-L5118)

```diff
-         for (var NB = 0; NB < mQ.length; NB++) dQ[mQ[NB]] = 0
-       }(BB), iQ(BB)), (0, SQ.H)(this.mesh, null), this.VBB = !1, null !== this.SBB && (this.nBB = this.SBB, this.SBB = null, (0, SQ.D)(this.mesh, null)), this.UBB = !0), this.mesh.rBB = this.count, this.zBB ? (this.zBB.bBB(this.count), this.zBB.CBB()) : (this.mesh.HBB("matrix"),  … [truncated]
-     }, nQ.prototype.vBB = function(BB, OB, GB) {
-       if (0 !== this.ABB && ((0, SQ.s)() ? (this.JZ = UQ(this, this.JZ, BB), this.VBB = this.JZ.count >= 0, (0, SQ.H)(this.mesh, this.VBB ? this.JZ : null)) : this.VBB && (this.VBB = !1, (0, SQ.H)(this.mesh, null)), GB || this.UBB)) {
-         this.UBB = !1;
-         var YB = UQ(this, this.nBB, OB),
-           DB = this.SBB;
-         YB.count < 0 ? (this.nBB = YB, null !== DB && (this.SBB = null, (0, SQ.D)(this.mesh, null))) : null !== DB && function(BB, OB) {
-           if (BB.count !== OB.count) return !1;
-           for (var GB = 0; GB < 2 * BB.count; GB++)
-             if (BB.data[GB] !== OB.data[GB]) return !1;
-           return !0
-         }(DB, YB) ? this.nBB = YB : (this.nBB = DB, this.SBB = YB, (0, SQ.D)(this.mesh, YB))
-       }
-     }, nQ.prototype.wBB = function() {
-       let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 4;
- ... (10 more removed lines; see GitHub link above)
+       };
+       try {
+         for (;;) {
+           if (null !== OW && void 0 !== OW && OW.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
+           const WW = xW();
+           if (WW) {
+             const iW = LW.filter((WW => "string" === typeof WW));
+             return {
+               reply: WW.reply,
+               failures: iW
+             }
+           }
+           await new Promise((WW => {
+             ZW = WW
+           }))
```

#### 224. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5120-L5122` → after: `L6897-L6942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6897-L6942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6897-L6942) · [Before (L5120-L5122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5120-L5122)

```diff
-         if (this.pBB = DB, this.Jm) {
-           var oB = new Uint16Array(this.CP);
-           this.qBB && oB.set(this.qBB.subarray(0, Math.min(this.qBB.length, oB.length))), this.qBB = oB
+       } finally {
+         null === OW || void 0 === OW || OW.removeEventListener("abort", PW), PW()
+       }
+     }
+ 
+     function zN() {
+       let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
+       const iW = bN.firstFreeAt(JN.map((WW => WW.name)), WW);
+       return jN(iW - WW) ? WW : iW
+     }
+     async function FN(WW) {
+       var iW;
+       let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const mW = Date.now(),
+         EW = null !== (iW = OW.models) && void 0 !== iW ? iW : JN,
+         NW = void 0 === OW.models ? function(WW, iW) {
+ ... (30 more added lines; see GitHub link above)
```

#### 225. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5125-L5146` → after: `L6946-L6947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6946-L6947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6946-L6947) · [Before (L5125-L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5125-L5146)

```diff
-       const jB = !1;
-       this.zBB && 0 === BB ? this.zBB.release() : this.zBB ? this.zBB.attach(this.buffer, this.pBB) : (this.mesh.DOB("matrix", this.buffer, 16, jB), this.mesh.DOB("aPackedLightLevels", this.pBB, 1, jB)), this.TBB()
-     };
-     var fQ = [{
-         name: "aPackedLightLevels",
-         offset: 0,
-         size: 1
-       }],
-       kQ = [{
-         name: "aPackedLightLevels",
-         offset: 0,
-         size: 1,
-         type: 5125
-       }],
-       dQ = new Uint32Array(SQ.e),
-       KQ = new Uint32Array(SQ.e),
- ... (6 more removed lines; see GitHub link above)
+       const LW = gN.find((WW => PW.includes(WW)));
+       throw new DN(null !== LW && void 0 !== LW ? LW : "failed")
```

#### 226. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5149-L5165` → after: `L6951-L6953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6951-L6953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6951-L6953) · [Before (L5149-L5165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5149-L5165)

```diff
-     function iQ(BB) {
-       var OB = BB.count,
-         GB = BB.qBB,
-         YB = BB.NBB.keys;
-       if (null === BB.RBB || BB.RBB.length < OB) {
-         var DB = Math.max(8, BB.CP);
-         BB.RBB = new Uint16Array(DB), BB.WBB = new Uint32Array(DB)
-       }
-       var QB = BB.RBB,
-         oB = BB.WBB,
-         jB = ++uQ;
-       mQ.length = 0;
-       for (var yB = 0, JB = 0, MB = -1 / 0, PB = 0; PB < OB; PB++) {
-         var zB = GB[PB];
-         yB > 0 && QB[yB - 1] === zB ? oB[yB - 1] = PB + 1 : (KQ[zB] === jB ? JB++ : (KQ[zB] = jB, mQ.push(zB), YB[zB] < MB ? JB++ : MB = YB[zB]), QB[yB] = zB, oB[yB] = PB + 1, yB++)
-       }
- ... (1 more removed lines; see GitHub link above)
+     function WP(WW) {
+       const iW = WW.trim();
+       return iW.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(iW) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(iW) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b( … [truncated]
```

#### 227. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5167-L5311` → after: `L6955-L6976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6955-L6976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6955-L6976) · [Before (L5167-L5311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5167-L5311)

```diff
-     var LQ = new WeakSet;
-     var gQ = GB(38176),
-       rQ = {
-         matrix: new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
-         offset: new Float64Array([.5, .5, .5]),
-         cBB: null
-       };
- 
-     function XQ(BB) {
-       this.JR = (0, WB.s)(BB.UP, "objectMeshRoot");
-       var OB = [0, 0, 0],
-         GB = !1,
-         YB = {
-           position: new vB.Xp,
-           rotation: new vB.Xp,
-           SP: new vB.Xp
- ... (129 more removed lines; see GitHub link above)
+     async function iP(WW, iW, OW, mW, EW, NW) {
+       var PW;
+       let LW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : vN;
+       if (! function(WW, iW) {
+           return !WW.isCutShort && WP(WW.answer) && !WW.answer.includes("?") && 0 === jO(WW.answer, iW).length
+         }(OW, null !== (PW = WW.callFormat) && void 0 !== PW ? PW : "simple")) return OW;
+       const cW = [...iW, {
+           role: "assistant",
+           content: OW.answer
+         }, {
+           role: "user",
+           content: QN
+         }],
+         wW = (0, kW.d)(LW, mW);
+       try {
+         const iW = await RN(WW, cW, wW.signal, EW, NW);
+ ... (6 more added lines; see GitHub link above)
```

#### 228. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5314-L5386` → after: `L6979-L7003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6979-L7003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L6979-L7003) · [Before (L5314-L5386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5314-L5386)

```diff
-     var wQ = () => {},
-       EQ = GB(38100),
-       cQ = GB(38030),
-       hQ = GB(38169);
-     var aQ = GB(38491),
-       eQ = GB(7179),
-       TQ = GB(39454),
-       bQ = GB(39462);
-     const CQ = /-sp\d+(?:-|$)/;
-     const HQ = /^terrain-.*?(-lit)?-dir\d+(?:-packed)?-sp(\d+)(-liquid)?$/,
-       vQ = /^standard-sp(\d+)$/;
-     const sQ = [0, 0, 0];
-     class xQ {
-       constructor(BB, OB) {
-         this.kz = BB, this.options = OB, this.mode = "off", this.defines = new Map(eQ.e.map((BB => [BB, 0])))
-       }
- ... (57 more removed lines; see GitHub link above)
+ 
+     function OP(WW) {
+       const iW = IN(WW);
+       return /too_complex/i.test(iW) || /^\W*too[\s_-]*complex\W*$/i.test(iW.trim())
+     }
+ 
+     function mP(WW) {
+       const iW = IN(WW).trim();
+       return iW.length > 19 && !/^\W*too[\s_-]*complex/i.test(iW)
+     }
+ 
+     function EP(WW) {
+       return WW.map(((WW, iW) => 0 === iW && "system" === WW.role ? {
+         ...WW,
+         content: WW.content + eN
+       } : WW))
+ ... (9 more added lines; see GitHub link above)
```

#### 229. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5388-L5390` → after: `L7005-L7039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7005-L7039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7005-L7039) · [Before (L5388-L5390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5388-L5390)

```diff
-       shadowDirection() {
-         const BB = (0, bQ.s)(this.nOB());
-         return [-BB[0], -BB[1], -BB[2]]
+       return OW ? "unchecked" : "ok"
+     }
+     async function PP(WW, iW, OW) {
+       if ("unavailable" === MN(WW)) return "busy";
+       const mW = (0, kW.d)(2e4, OW);
+       bN.record(WW);
+       try {
+         var EW, NW, PW, LW;
+         const OW = await fetch(qE, {
+           method: "POST",
+           headers: {
+             "Content-Type": "application/json"
+           },
+           body: JSON.stringify({
+             model: WW,
+             messages: iW,
+ ... (19 more added lines; see GitHub link above)
```

#### 230. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5392-L5413` → after: `L7041-L7056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7041-L7056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7041-L7056) · [Before (L5392-L5413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5392-L5413)

```diff
-       async checkCompilation() {
-         var BB;
-         let OB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
-         if (OB()) return {
-           status: "rB"
-         };
-         const {
-           UP: GB
-         } = this.kz, YB = null === (BB = GB.Dq) || void 0 === BB ? void 0 : BB.terrain;
-         return null !== YB && void 0 !== YB && YB.checkShaderPack ? YB.checkShaderPack({
-           materials: this.kz.UOB.allMaterials.filter((BB => !(0, aQ.h)(BB))),
-           runtime: this,
-           lighting: GB.wq,
-           dirLightCount: (0, cQ.u)(GB.model.view),
-           isCancelled: OB
-         }) : {
- ... (6 more removed lines; see GitHub link above)
+     }
+     async function LP(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+       const mW = await NP(WW, iW, OW),
+         EW = BE(WW);
+       if ("unsafe" !== mW || EW === WW) return {
+         safety: mW,
+         request: WW
+       };
+       const NW = await NP(EW, iW, !0);
+       return "unchecked" === NW ? {
+         safety: mW,
+         request: WW
+       } : {
+         safety: NW,
+         request: EW
```

#### 231. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5416-L5434` → after: `L7059-L7067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7059-L7067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7059-L7067) · [Before (L5416-L5434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5416-L5434)

```diff
-     var tQ = {
-       debug: !1,
-       silent: !1,
-       fOB: !1,
-       xZ: 1.8,
-       sZ: .6,
-       kOB: [0, 10, 0],
-       tZ: !1,
-       dOB: !0,
-       pI: 30,
-       OE: 0,
-       BN: 10,
-       pE: !0,
-       KOB: !0,
-       qE: !1,
-       uOB: !1,
- ... (3 more removed lines; see GitHub link above)
+     var cP = OW(39),
+       wP = OW(38003);
+     const tP = "aiHelperDataSharing";
+ 
+     function ZP() {
+       const WW = cP.i.getItem(tP);
+       return null !== WW && "object" === typeof WW ? WW : {}
+     }
+     const xP = new class {
```

#### 232. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5436-L5529` → after: `L7069-L7071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7069-L7071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7069-L7071) · [Before (L5436-L5529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5436-L5529)

```diff
-         let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-         if (super(), BB = Object.assign({}, tQ, BB), this.version = "0.33.0", !BB.silent) {
-           var OB = BB.debug ? " (debug)" : "";
-           console.log(`noa-engine v${this.version}${OB}`)
-         }
-         this.fP = !1, this.IOB = BB.mOB, this.Tz = [0, 0, 0], this.FOB = 0, this.VK = 0, this.iOB = "default", this.LOB = 1, this.container = new KO(this, BB), this.mP = new kY.d(this, BB);
-         try {
-           this.UP = new fY.c(this, BB, this.container.canvas)
-         } catch (oB) {
-           throw this.NK(!0), this.container.UW.uP = () => {}, oB
-         }
-         this.pI = this.container.UW.pI, this.OE = this.container.UW.OE, this.zp = BB.zp ? new xQ(this, BB.zp) : null, this.UOB = new aQ.b(this), this.inputs = new cY(this, BB, this.container.element), this.JP = new qQ(this, BB, this.UOB), this.mP.GV = BB.gOB ? NY.create(BB.gOB.wa … [truncated]
-           this.fq(BB.message, BB)
-         })) : null, BB.gOB && (this.mP.Yq = lY.d.wasm(this.mP.qP, BB.gOB.wasm, (BB => {
-           this.fq(BB.message, BB)
-         })), this.mP.XOB = UY.create(BB.gOB.wasm, this.JP, (BB => {
- ... (78 more removed lines; see GitHub link above)
+         this.player = null, this.unsaved = new Map, this.listeners = new Set, this.listening = !1, this.subscribe = WW => (this.listen(), this.listeners.add(WW), () => {
+           this.listeners.delete(WW)
+         })
```

#### 233. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5531-L5534` → after: `L7073-L7075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7073-L7075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7073-L7075) · [Before (L5531-L5534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5531-L5534)

```diff
-       qm(BB, OB) {
-         let GB, YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-           DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-         return GB = OB.length ? this.mP.sC(BB, OB[0], OB[1], OB[2]) : this.mP.sC(BB, OB, YB, DB), this.eOB(), GB
+       get() {
+         var WW, iW;
+         return null === this.player ? null : null !== (WW = null !== (iW = this.unsaved.get(this.player)) && void 0 !== iW ? iW : ZP()[this.player]) && void 0 !== WW ? WW : null
```

#### 234. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5536-L5543` → after: `L7077-L7078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7077-L7078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7077-L7078) · [Before (L5536-L5543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5536-L5543)

```diff
-       uGB(BB, OB) {
-         let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-           YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-         if (OB.length) {
-           if (this.entities.mGB(OB[0], OB[1], OB[2])) return;
-           return this.mP.sC(BB, OB[0], OB[1], OB[2]), BB
-         }
-         if (!this.entities.mGB(OB, GB, YB)) return this.mP.sC(BB, OB, GB, YB), BB
+       getPlayer() {
+         return this.player
```

#### 235. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5545-L5554` → after: `L7080-L7089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7080-L7089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7080-L7089) · [Before (L5545-L5554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5545-L5554)

```diff
-       IGB(BB, OB, GB) {
-         var YB = this.Tz;
-         if (OB) {
-           for (var DB = 0; DB < 3; DB++) {
-             var QB = BB[DB] - YB[DB];
-             QB += OB[DB], GB[DB] = QB
-           }
-           return GB
-         }
-         return RB().subtract(GB, BB, YB)
+       async refresh() {
+         this.listen();
+         const WW = await async function() {
+           var WW, iW;
+           const {
+             userContextManager: mW
+           } = await Promise.resolve().then((() => OW(1111)));
+           return null !== (WW = null === (iW = mW.peekCurrentUserContext()) || void 0 === iW ? void 0 : iW.whamm) && void 0 !== WW ? WW : null
+         }().catch((WW => (console.error("AI Helper: couldn't look up the player for sharing chats", WW), null)));
+         return WW !== this.player && (this.player = WW, this.notify()), this.get()
```

#### 236. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5556-L5566` → after: `L7091-L7095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7091-L7095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7091-L7095) · [Before (L5556-L5566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5556-L5566)

```diff
-       f6(BB, OB) {
-         let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         var YB = this.Tz;
-         if (GB) {
-           for (var DB = 0; DB < 3; DB++) {
-             var QB = Math.floor(BB[DB]);
-             OB[DB] = QB + YB[DB], GB[DB] = BB[DB] - QB
-           }
-           return OB
-         }
-         return RB().add(OB, BB, YB)
+       set(WW) {
+         null !== this.player && (cP.i.setItem(tP, {
+           ...ZP(),
+           [this.player]: WW
+         }) ? this.unsaved.delete(this.player) : this.unsaved.set(this.player, WW), this.notify())
```

#### 237. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5568-L5575` → after: `L7097-L7100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7097-L7100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7097-L7100) · [Before (L5568-L5575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5568-L5575)

```diff
-       pl() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
-           YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-         if (0 === GB) return null;
-         var DB = this.qGB;
-         return BB && (this.IGB(BB, null, DB), BB = DB), this.uC(BB, OB, GB, YB)
+       listen() {
+         this.listening || (this.listening = !0, window.addEventListener("storage", (() => {
+           this.notify()
+         })))
```

#### 238. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5577-L5598` → after: `L7102-L7103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7102-L7103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7102-L7103) · [Before (L5577-L5598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5577-L5598)

```diff
-       uC() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
-           YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-           DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.ZGB;
-         if (0 === GB) return null;
-         BB || (BB = this.camera.X3()), OB = OB || this.camera.B_(), GB = GB || -1, GB < 0 && (GB = this.BN);
-         var QB, oB = DB.NGB,
-           jB = DB.normal,
-           yB = this.physics?.wasm,
-           JB = this.Tz;
-         if (yB) {
-           var MB = null === Go.engine ? Go : Oo();
-           MB.engine = this, MB.test = YB, MB.origin = BB, MB.direction = OB, MB.maxDistance = GB, MB.offset = JB, MB.lT = oB, MB.pT = jB, MB.qT = DB.WGB;
-           try {
- ... (6 more removed lines; see GitHub link above)
+       notify() {
+         for (const WW of this.listeners) WW()
```

#### 239. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5600-L5613` → after: `L7105-L7145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7105-L7145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7105-L7145) · [Before (L5600-L5613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5600-L5613)

```diff
-       pickBlock() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
-           YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-         var DB = {
-             r_: 0,
-             position: [],
-             normal: [],
-             yZ: [],
-             lT: []
-           },
-           QB = this.pl(BB, OB, GB, YB);
-         return QB ? (Qo(this, QB, DB), DB) : null
+     };
+     let lP = null,
+       AP = !1;
+     const bP = 4e5,
+       jP = 6e4,
+       UP = 12,
+       kP = 9e5;
+ 
+     function sP(WW, iW) {
+       if (WW.length <= iW) return WW;
+       const OW = `\n[... ${WW.length-iW} more characters cut]`;
+       let mW = Math.max(0, iW - OW.length);
+       const EW = WW.charCodeAt(mW - 1);
+       return EW >= 55296 && EW <= 56319 && mW--, WW.slice(0, mW) + OW
+     }
+     var MP = OW(649),
+ ... (25 more added lines; see GitHub link above)
```

#### 240. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5615-L5632` → after: `L7147-L7152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7147-L7152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7147-L7152) · [Before (L5615-L5632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5615-L5632)

```diff
-       TOB() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         this.aOB = !1;
-         var OB = this.cOB || this.JP.xH;
-         let GB = this.oGB,
-           YB = this.jGB;
-         var DB = this.uC(GB, YB, null, OB);
-         if (DB) {
-           var QB = this.PGB;
-           Qo(this, DB, QB), this.hOB = QB
-         } else this.hOB = null;
-         const oB = this.FGB(),
-           jB = this.hOB;
-         if (jB && !oB(jB.r_, jB.position[0], jB.position[1], jB.position[2]) && (DB = this.uC(GB, YB, null, oB)), DB) {
-           const BB = this.lGB;
-           Qo(this, DB, BB), this.bOB = BB
- ... (2 more removed lines; see GitHub link above)
+     }
+ 
+     function yP(WW) {
+       return {
+         model: WW.model,
+         text: sP(WW.text, jP)
```

#### 241. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5634-L5640` → after: `L7154-L7171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7154-L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7154-L7171) · [Before (L5634-L5640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5634-L5640)

```diff
-       eOB() {
-         if (this.PGB.r_ = this.mP.sH(this.PGB.position[0], this.PGB.position[1], this.PGB.position[2]), 0 === this.PGB.r_ && (this.hOB = null, this.aOB = !0), this.bOB) {
-           const BB = this.bOB,
-             OB = BB.position;
-           BB.r_ = this.mP.sH(OB[0], OB[1], OB[2]);
-           this.FGB()(BB.r_, OB[0], OB[1], OB[2]) || (this.bOB = null)
-         }
+     }
+     class TP {
+       constructor() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nP;
+         this.wZ = WW, this.chatId = (0, KP.e)(12), this.open = new Map
+       }
+       requestStarted(WW, iW) {
+         const OW = this.open.get(WW);
+         OW && (clearTimeout(OW.timer), iW || (this.open.delete(WW), this.send(OW.wZ)))
+       }
+       answered(WW, iW, OW) {
+         if ("" === OW.text.trim()) return;
+         const mW = this.open.get(WW);
+         if (mW) return void(mW.wZ.responses.length < UP && mW.wZ.responses.push(yP(OW)));
+         const EW = YP(this.chatId, iW, OW);
+         EW && this.open.set(WW, {
+ ... (2 more added lines; see GitHub link above)
```

#### 242. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5642-L5643` → after: `L7173-L7175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7173-L7175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7173-L7175) · [Before (L5642-L5643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5642-L5643)

```diff
-       vOB(BB) {
-         this.sOB = BB, this.BGB(this.bOB)
+       drop(WW) {
+         var iW;
+         clearTimeout(null === (iW = this.open.get(WW)) || void 0 === iW ? void 0 : iW.timer), this.open.delete(WW)
```

#### 243. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5645-L5646` → after: `L7177-L7181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7177-L7181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7177-L7181) · [Before (L5645-L5646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5645-L5646)

```diff
-       xOB(BB) {
-         this.tOB = BB, this.BGB?.(this.bOB)
+       requestEnded(WW) {
+         const iW = this.open.get(WW);
+         iW && (clearTimeout(iW.timer), iW.timer = setTimeout((() => {
+           this.open.delete(WW), this.send(iW.wZ)
+         }), 2e4))
```

#### 244. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5648-L5649` → after: `L7183-L7186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7183-L7186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7183-L7186) · [Before (L5648-L5649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5648-L5649)

```diff
-       FGB() {
-         return this.HOB || this.cOB || this.JP.xH
+       send(WW) {
+         (function(WW) {
+           return (new TextEncoder).encode(JSON.stringify(WW)).length <= kP
+         })(WW) && this.wZ(WW)
```

#### 245. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5653-L5720` → after: `L7193-L7204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7193-L7204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7193-L7204) · [Before (L5653-L5720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5653-L5720)

```diff
-     function Oo() {
-       var BB = {
-         engine: null,
-         test: null,
-         origin: null,
-         direction: null,
-         maxDistance: 0,
-         offset: null,
-         lT: null,
-         pT: null,
-         qT: null,
-         ZC: () => Yo(BB.engine, BB.test, BB.origin, BB.direction, BB.maxDistance, BB.lT, BB.pT, BB.qT)
-       };
-       return BB
-     }
-     var Go = Oo();
- ... (52 more removed lines; see GitHub link above)
+     function nP(WW) {
+       (async () => {
+         const iW = await xP.refresh(),
+           OW = xP.getPlayer();
+         "yes" === iW ? await oP([WW]) : null === iW && null !== OW && function(WW, iW) {
+           HP || (HP = !0, xP.subscribe(uP));
+           JP.push({
+             player: WW,
+             wZ: iW
+           }), JP.length > hP && JP.shift()
+         }(OW, WW)
+       })()
```

#### 246. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5723-L5726` → after: `L7207-L7222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7207-L7222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7207-L7222) · [Before (L5723-L5726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5723-L5726)

```diff
-     function Do(BB, OB) {
-       if (null === OB) {
-         const OB = 0 !== BB[0];
-         return BB[0] = 0, OB
+     function uP() {
+       const WW = xP.get();
+       if (null === WW) return;
+       const iW = xP.getPlayer(),
+         OW = JP.splice(0).filter((WW => WW.player === iW));
+       "yes" === WW && OW.length > 0 && oP(OW.map((WW => WW.wZ)))
+     }
+     async function oP(WW) {
+       const iW = Promise.resolve().then((() => OW(53658)));
+       for (const OW of WW) try {
+         const {
+           postToGameServer: WW
+         } = await iW;
+         await WW("/ai-helper/turn", OW)
+       } catch (mW) {
+         console.warn("AI Helper: couldn't share a turn", mW)
```

#### 247. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5734-L5758` → after: `L7225-L7226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7225-L7226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7225-L7226) · [Before (L5734-L5758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5734-L5758)

```diff
- 
-     function Qo(BB, OB, GB) {
-       RB().copy(GB.position, OB.WGB), RB().copy(GB.normal, OB.normal), RB().add(GB.yZ, GB.position, GB.normal), RB().copy(GB.lT, OB.position), GB.r_ = BB.mP.sH(GB.position[0], GB.position[1], GB.position[2])
-     }
-     var oo = () => {},
-       jo = () => {},
-       yo = GB(3206),
-       Jo = GB(39425),
-       Mo = GB(36912),
-       Po = GB(36902),
-       zo = GB(3210),
-       po = GB(3224),
-       qo = GB(36888),
-       Zo = GB(36885),
-       No = GB(4132),
-       Ro = GB(5165),
- ... (9 more removed lines; see GitHub link above)
+     var dP = OW(344),
+       eP = OW(154);
```

#### 248. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5760-L5805` → after: `L7228-L7261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7228-L7261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7228-L7261) · [Before (L5760-L5805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5760-L5805)

```diff
-         load: async () => {
-           const {
-             createLiteRendererAsync: BB,
-             liteBabylonBackend: OB,
-             setPipelineFailureHook: YB
-           } = await Promise.all([GB.e(613), GB.e(301)]).then((() => GB(44773)));
-           return YB(Io), {
-             create: async (GB, YB) => function(BB, OB) {
-               var GB;
-               const YB = null === (GB = BB.rebuild) || void 0 === GB ? void 0 : GB.bind(BB),
-                 DB = new Set;
-               return {
-                 backendName: BB.backendName,
-                 get gpuDevice() {
-                   return BB.gpuDevice
-                 },
- ... (30 more removed lines; see GitHub link above)
+         openrouter: {
+           id: "openrouter",
+           name: "OpenRouter",
+           shortName: "OpenRouter",
+           baseUrl: "https://openrouter.ai/api/v1",
+           keyPage: "https://openrouter.ai/settings/keys"
+         },
+         anthropic: {
+           id: "anthropic",
+           name: "Claude (Anthropic)",
+           shortName: "Claude",
+           baseUrl: "https://api.anthropic.com/v1",
+           keyPage: "https://console.anthropic.com/settings/keys"
+         },
+         openai: {
+           id: "openai",
+ ... (18 more added lines; see GitHub link above)
```

#### 249. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5808-L5841` → after: `L7264-L7265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7264-L7265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7264-L7265) · [Before (L5808-L5841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5808-L5841)

```diff
-       mo = new Set;
- 
-     function Io(BB, OB, GB, YB) {
-       for (const QB of mo) try {
-         QB(BB, OB, GB, YB)
-       } catch (DB) {
-         console.error("Lite pipeline failure listener failed", DB)
-       }(function(BB) {
-         return CQ.test(BB)
-       })(OB) || function(BB, OB, GB, YB) {
-         var DB;
-         if (Fo.has(BB)) return;
-         Fo.add(BB);
-         const QB = null === GB || void 0 === GB ? void 0 : GB.reason,
-           oB = null !== (DB = null !== YB && void 0 !== YB ? YB : null === GB || void 0 === GB ? void 0 : GB.message) && void 0 !== DB ? DB : String(GB);
-         (0, Ko.e)("Lite pipeline failed", new Error(`${BB}${QB?` ${QB}`:""}: ${oB} [${OB}]`))
- ... (18 more removed lines; see GitHub link above)
+       gP = ["openrouter", "anthropic", "openai", "gemini", "custom"],
+       DP = new Set(Object.values(vP).flatMap((WW => "" === WW.baseUrl ? [] : [new URL(WW.baseUrl).host])));
```

#### 250. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5843-L5874` → after: `L7267-L7268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7267-L7268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7267-L7268) · [Before (L5843-L5874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5843-L5874)

```diff
-     function vo(BB, OB, GB) {
-       const YB = function() {
-           try {
-             return function() {
-               var BB, OB, GB;
-               const {
-                 client: YB,
-                 playedS: DB,
-                 snapshot: QB
-               } = (0, Uo.p)(), oB = null === (BB = (0, CB.g)()) || void 0 === BB ? void 0 : BB.UP, jB = null === oB || void 0 === oB ? void 0 : oB.engine, yB = jB ? (0, bo.e)(jB) : null, JB = (0, wo.c)();
-               return {
-                 client: YB,
-                 playedS: DB,
-                 ...QB,
-                 budgetBasis: (0, Co.j)(),
-                 renderBackend: oB && jB ? (0, Ho.c)(oB) : null,
- ... (16 more removed lines; see GitHub link above)
+     function VP(WW) {
+       return WW.trim().replace(/^[A-Z_]+\s*=\s*/, "").replace(/^["'`]+|["'`]+$/g, "").replace(/^Bearer\s+/i, "").replace(/\s+/g, "")
```

#### 251. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5880-L5881` → after: `L7272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7272) · [Before (L5880-L5881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5880-L5881)

```diff
-       const OB = NO.i.getItem(xo);
-       return !("number" === typeof OB && Date.now() - OB < 3e5) && BB.canRejoin() && NO.i.setItem(xo, Date.now())
+       return WW.startsWith("sk-or-") ? "openrouter" : WW.startsWith("sk-ant-") ? "anthropic" : WW.startsWith("AIza") ? "gemini" : WW.startsWith("sk-") ? "openai" : null
```

#### 252. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5883-L5886` → after: `L7274-L7280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7274-L7280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7274-L7280) · [Before (L5883-L5886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5883-L5886)

```diff
-     class Bj {
-       jP(BB, OB) {
-         let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         (0, So.reportClientError)("render_lost", OB, BB, !0, GB ? 1 / 0 : no.CAPPED_COUNTS_VISIT_CAP)
+ 
+     function fP(WW) {
+       let iW;
+       try {
+         iW = new URL(WW.trim())
+       } catch {
+         return null
```

#### 253. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5888-L5889` → after: `L7282-L7292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7282-L7292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7282-L7292) · [Before (L5888-L5889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5888-L5889)

```diff
-       reportLoss(BB, OB) {
-         vo(OB, BB, no.CAPPED_COUNTS_VISIT_CAP)
+       const OW = "localhost" === iW.hostname || "127.0.0.1" === iW.hostname;
+       return "https:" !== iW.protocol && ("http:" !== iW.protocol || !OW) || iW.username || iW.password || iW.search ? null : `${iW.origin}${iW.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
+     }
+ 
+     function CP(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+       return "custom" === WW && iW ? new URL(iW).host : OW ? vP[WW].shortName : vP[WW].name
+     }
+     class XP extends Error {
+       constructor(WW, iW, OW, mW) {
+         super(`AI key request: ${WW}`), this.problem = WW, this.retryAfterMs = iW, this.status = OW, this.detail = mW
```

#### 254. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5891-L5893` → after: `L7294-L7318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7294-L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7294-L7318) · [Before (L5891-L5893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5891-L5893)

```diff
-       inGame() {
-         var BB;
-         return !0 === (null === (BB = (0, CB.d)()) || void 0 === BB ? void 0 : BB.client.isConnectedToServer())
+     }
+ 
+     function BP(WW, iW) {
+       return ("" === iW ? WW : WW.split(iW).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
+     }
+ 
+     function qP(WW, iW) {
+       const OW = "custom" === iW ? "That server" : vP[iW].shortName;
+       switch (WW) {
+         case "badKey":
+           return `${OW} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
+         case "busy":
+           return "Too many requests right now. Wait a minute and try again.";
+         case "noModel":
+           return `${OW} can't find that model. Check its name.`;
+         case "unreachable":
+ ... (9 more added lines; see GitHub link above)
```

#### 255. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5895-L5897` → after: `L7320-L7376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7320-L7376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7320-L7376) · [Before (L5895-L5897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5895-L5897)

```diff
-       replaying() {
-         var BB;
-         return !0 === (null === (BB = (0, CB.d)()) || void 0 === BB ? void 0 : BB.client.isReplayMode())
+     }
+ 
+     function RP(WW) {
+       var iW;
+       const OW = WW.at(-1);
+       if (!OW || null !== AO(OW.name, OW.args) || function(WW) {
+           try {
+             return JSON.parse(WW), !0
+           } catch {
+             return !1
+           }
+         }(OW.args)) return;
+       const mW = null === (iW = /"path"\s*:\s*"((?:[^"\\]|\\.)*)"/.exec(OW.args)) || void 0 === iW ? void 0 : iW[1];
+       return {
+         name: OW.name || "write_file",
+         path: mW
+ ... (41 more added lines; see GitHub link above)
```

#### 256. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5899-L5901` → after: `L7378-L7388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7378-L7388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7378-L7388) · [Before (L5899-L5901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5899-L5901)

```diff
-       canRejoin() {
-         var BB, OB;
-         return !(0, Eo.isDiscordClient)() && null !== (null !== (BB = null === (OB = (0, CB.d)().client.getConnectionInfo()) || void 0 === OB ? void 0 : OB.lobbyName) && void 0 !== BB ? BB : null)
+       return EW
+     }
+     async function zP(WW, iW, OW) {
+       const mW = (0, kW.d)(WW, iW);
+       try {
+         return await OW(mW.signal)
+       } catch (EW) {
+         if (EW instanceof XP || null !== iW && void 0 !== iW && iW.aborted) throw EW;
+         throw mW.signal.aborted || console.warn("AI key request couldn't be read", EW), new XP(mW.signal.aborted ? "timeout" : "unreachable")
+       } finally {
+         mW.clear()
```

#### 257. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5903-L5912` → after: `L7390-L7438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7390-L7438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7390-L7438) · [Before (L5903-L5912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5903-L5912)

```diff
-       rejoin() {
-         (0, co.d)(), (0, CB.d)().client.leaveGameUnwanted({
-           reason: {
-             translationKey: "general:graphicsStoppedWorking"
-           },
-           requiresRefresh: !1,
-           canReconnect: !0,
-           automaticallyReconnect: !0,
-           reconnectByReload: !0
-         })
+     }
+ 
+     function FP(WW) {
+       let iW = WW.length;
+       const OW = WW.lastIndexOf("<tool_call"); - 1 === OW || WW.includes("</tool_call>", OW) || (iW = OW);
+       const mW = [...WW.matchAll(/\{\s*"(?:jsonrpc|name|tool|method|function)"/g)].find((iW => null === function(WW, iW) {
+         let OW = 0,
+           mW = !1;
+         for (let EW = iW; EW < WW.length; EW++) {
+           const iW = WW[EW];
+           if (mW) "\\" === iW ? EW++ : '"' === iW && (mW = !1);
+           else if ('"' === iW) mW = !0;
+           else if ("{" === iW) OW++;
+           else if ("}" === iW && (OW--, 0 === OW)) return EW + 1
+         }
+         return null
+ ... (33 more added lines; see GitHub link above)
```

#### 258. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5914-L5915` → after: `L7440-L7486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7440-L7486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7440-L7486) · [Before (L5914-L5915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5914-L5915)

```diff
-       end() {
-         (0, ro.c)(so)
+     }
+ 
+     function WL(WW) {
+       const iW = WW.findIndex((WW => "user" === WW.role));
+       return -1 === iW ? [] : WW.slice(iW)
+     }
+ 
+     function iL(WW, iW) {
+       var OW;
+       const mW = null !== (OW = iW.tools) && void 0 !== OW ? OW : [];
+       if (0 === mW.length) return {};
+       switch (WW) {
+         case "openai":
+           return {
+             tools: BN(mW)
+           };
+ ... (31 more added lines; see GitHub link above)
```

#### 259. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5917-L5918` → after: `L7488-L7491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7488-L7491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7488-L7491) · [Before (L5917-L5918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5917-L5918)

```diff
-       hidden() {
-         return document.hidden
+     }
+     class OL {
+       constructor(WW, iW, OW) {
+         this.provider = WW, this.baseUrl = iW, this.key = OW
```

#### 260. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5920-L5922` → after: `L7493-L7505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7493-L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7493-L7505) · [Before (L5920-L5922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5920-L5922)

```diff
-       shownSince(BB) {
-         const OB = (0, wo.c)();
-         return !document.hidden && (null === OB || OB < BB)
+       async check(WW) {
+         return zP(GP, WW, (async WW => {
+           var iW;
+           const OW = await rP(this.provider, `${this.baseUrl}/models`, {
+             headers: this.headers()
+           }, WW);
+           return {
+             models: (null !== (iW = (await OW.json()).data) && void 0 !== iW ? iW : []).map((WW => ({
+               id: WW.id,
+               name: WW.name
+             })))
+           }
+         }))
```

#### 261. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5924-L5925` → after: `L7507-L7550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7507-L7550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7507-L7550) · [Before (L5924-L5925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5924-L5925)

```diff
-       whenNoAdShowing(BB) {
-         return (0, ho.l)(BB)
+       async ask(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+         return zP(IP, OW.signal, (async mW => {
+           var EW;
+           const NW = await rP(this.provider, `${this.baseUrl}/chat/completions`, {
+             method: "POST",
+             headers: this.headers(),
+             body: JSON.stringify({
+               model: WW,
+               messages: iW,
+               ["openai" === this.provider ? "max_completion_tokens" : "max_tokens"]: aP,
+               stream: !0,
+               ...iL("openai", OW)
+             })
+           }, mW);
+           let PW = "",
+ ... (28 more added lines; see GitHub link above)
```

#### 262. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5927-L5931` → after: `L7552-L7558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7552-L7558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7552-L7558) · [Before (L5927-L5931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5927-L5931)

```diff
-       whenShown(BB) {
-         const OB = () => {
-           document.hidden || (document.removeEventListener("visibilitychange", OB), BB())
-         };
-         document.addEventListener("visibilitychange", OB)
+       headers() {
+         return "" === this.key ? {
+           "Content-Type": "application/json"
+         } : {
+           Authorization: `Bearer ${this.key}`,
+           "Content-Type": "application/json"
+         }
```

#### 263. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5936-L5942` → after: `L7562-L7563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7562-L7563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7562-L7563) · [Before (L5936-L5942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5936-L5942)

```diff
-       constructor(BB, OB, GB) {
-         this.loseContext = BB, this.webGlVersion = OB, this.actions = GB, this.startedAt = void 0, this.lostAt = null, this.restoredAt = null, this.restoreTried = !1, this.restoreDidNotHold = !1, this.restoreTimer = null, this.giveUpTimer = null, this.cancelAdWait = null, this.lo … [truncated]
-       }
-       lost(BB) {
-         if (this.gaveUp || null !== this.lostAt) return;
-         const OB = performance.now();
-         this.lostAt = OB, this.restoreTried = !1, this.waiting = !1, this.restoreDidNotHold = null !== this.restoredAt && OB - this.restoredAt < 3e4 && this.actions.shownSince(this.restoredAt), this.reportLoss(OB, BB), this.armTimers(this.lostAt)
+       constructor(WW) {
+         this.key = WW, this.chat = void 0, this.chat = new OL("openrouter", vP.openrouter.baseUrl, WW)
```

#### 264. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5944-L5948` → after: `L7565-L7570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7565-L7570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7565-L7570) · [Before (L5944-L5948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5944-L5948)

```diff
-       restored() {
-         if (this.gaveUp || null === this.lostAt) return;
-         const BB = performance.now(),
-           OB = this.restoreTried ? "restore_context" : "natural";
-         this.actions.jP(`webgl_restored_${OB}_${(0,Xo.l)(BB-this.lostAt)}`, `WebGL${this.webGlVersion} context restored (${OB})`), this.lostAt = null, this.restoredAt = BB, this.clearTimers()
+       async check(WW) {
+         return await zP(GP, WW, (async WW => rP("openrouter", `${vP.openrouter.baseUrl}/key`, {
+           headers: {
+             Authorization: `Bearer ${this.key}`
+           }
+         }, WW))), this.chat.check(WW)
```

#### 265. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5950-L5951` → after: `L7572-L7573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7572-L7573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7572-L7573) · [Before (L5950-L5951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5950-L5951)

```diff
-       visibilityChanged() {
-         this.gaveUp || null === this.lostAt || this.armTimers(this.lostAt)
+       ask(WW, iW, OW) {
+         return this.chat.ask(WW, iW, OW)
```

#### 266. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5953-L5960` → after: `L7575-L7578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7575-L7578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7575-L7578) · [Before (L5953-L5960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5953-L5960)

```diff
-       reportLoss(BB, OB) {
-         if (this.lossReported) return;
-         this.lossReported = !0;
-         const {
-           page: GB,
-           code: YB
-         } = (0, Xo.u)("webgl_lost", this.startedAt, BB), DB = `webgl${this.webGlVersion} ${GB} up${(0,Xo.g)(BB-this.startedAt)}: ${OB}`;
-         (0, Ko.e)(Xo.e.WebGL2, new Error(DB)), this.actions.reportLoss(YB, `WebGL${this.webGlVersion} context lost: ${DB}`)
+     }
+     class EL {
+       constructor(WW) {
+         this.key = WW, this.baseUrl = vP.anthropic.baseUrl
```

#### 267. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5962-L5965` → after: `L7580-L7592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7580-L7592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7580-L7592) · [Before (L5962-L5965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5962-L5965)

```diff
-       armTimers(BB) {
-         this.clearTimers(), this.actions.hidden() || (this.restoreDidNotHold ? this.armGiveUp(BB, 0) : (null === this.loseContext || this.restoreTried || (this.restoreTimer = setTimeout((() => {
-           this.tryRestoreContext()
-         }), 2e3)), this.armGiveUp(BB, 1e4)))
+       async check(WW) {
+         return zP(GP, WW, (async WW => {
+           var iW;
+           const OW = await rP("anthropic", `${this.baseUrl}/models?limit=1000`, {
+             headers: this.headers()
+           }, WW);
+           return {
+             models: (null !== (iW = (await OW.json()).data) && void 0 !== iW ? iW : []).map((WW => ({
+               id: WW.id,
+               name: WW.display_name
+             })))
+           }
+         }))
```

#### 268. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5967-L5970` → after: `L7594-L7617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7594-L7617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7594-L7617) · [Before (L5967-L5970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5967-L5970)

```diff
-       armGiveUp(BB, OB) {
-         this.giveUpTimer = setTimeout((() => {
-           this.giveUpTimer = null;
-           let OB = !1,
+       async ask(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+         const mW = iW.filter((WW => "system" === WW.role)).map((WW => WW.content)).join("\n\n"),
+           EW = WL(iW).map((WW => ({
+             role: WW.role,
+             content: WW.content
+           })));
+         return zP(IP, OW.signal, (async iW => {
+           var NW;
+           const PW = await rP("anthropic", `${this.baseUrl}/messages`, {
+             method: "POST",
+             headers: this.headers(),
+             body: JSON.stringify({
+               model: WW,
+               max_tokens: aP,
+               system: mW,
+ ... (8 more added lines; see GitHub link above)
```

#### 269. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5972-L5973` → after: `L7619-L7644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7619-L7644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7619-L7644) · [Before (L5972-L5973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5972-L5973)

```diff
-           const YB = this.actions.whenNoAdShowing((() => {
-             OB = !0, GB ? (this.cancelAdWait = null, this.armGiveUp(BB, 0)) : this.giveUp(BB)
+           const ZW = new Map;
+           await XN(null !== (NW = PW.body) && void 0 !== NW ? NW : new ReadableStream, (iW => {
+             var mW, EW;
+             const NW = iW;
+             var PW, xW, lW, AW;
+             if ("error" === NW.type) throw new XP("overloaded_error" === (null === (PW = NW.error) || void 0 === PW ? void 0 : PW.type) || "rate_limit_error" === (null === (xW = NW.error) || void 0 === xW ? void 0 : xW.type) ? "busy" : "failed");
+             if ("content_block_start" === NW.type && "tool_use" === (null === (mW = NW.content_block) || void 0 === mW ? void 0 : mW.type)) ZW.set(null !== (lW = NW.index) && void 0 !== lW ? lW : ZW.size, {
+               name: null !== (AW = NW.content_block.name) && void 0 !== AW ? AW : "",
+               args: ""
+             });
+             else if ("content_block_delta" === NW.type) {
+               var bW, jW, UW, kW, sW, MW;
+               LW += null !== (bW = null === (jW = NW.delta) || void 0 === jW ? void 0 : jW.text) && void 0 !== bW ? bW : "", cW += null !== (UW = null === (kW = NW.delta) || void 0 === kW ? void 0 : kW.thinking) && void 0 !== UW ? UW : "";
+               const WW = ZW.get(null !== (sW = NW.index) && void 0 !== sW ? sW : -1);
+               var KW;
+               if (WW && "input_json_delta" === (null === (MW = NW.delta) || void 0 === MW ? void 0 : MW.type)) WW.args += null !== (KW = NW.delta.partial_json) && void 0 !== KW ? KW : ""
+ ... (10 more added lines; see GitHub link above)
```

#### 270. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5975-L5976` → after: `L7646-L7654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7646-L7654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7646-L7654) · [Before (L5975-L5976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5975-L5976)

```diff
-           OB || (GB = !0, this.cancelAdWait = YB)
-         }), OB)
+           const xW = [...ZW.values()];
+           return QP(WW, {
+             answer: LW,
+             reasoning: cW,
+             cEW: wW,
+             isCutShort: tW,
+             nativeCalls: xW
+           }, OW.callFormat, OW.continueFrom)
+         }))
```

#### 271. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5978-L5984` → after: `L7656-L7661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7656-L7661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7656-L7661) · [Before (L5978-L5984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5978-L5984)

```diff
-       tryRestoreContext() {
-         this.restoreTimer = null, this.restoreTried = !0;
-         try {
-           var BB;
-           null === (BB = this.loseContext) || void 0 === BB || BB.restoreContext()
-         } catch (OB) {
-           console.warn("WEBGL_lose_context.restoreContext() threw after a WebGL context loss", OB)
+       headers() {
+         return {
+           "x-api-key": this.key,
+           "anthropic-version": "2023-06-01",
+           "anthropic-dangerous-direct-browser-access": "true",
+           "Content-Type": "application/json"
```

#### 272. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5987-L5994` → after: `L7664-L7684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7664-L7684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7664-L7684) · [Before (L5987-L5994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5987-L5994)

```diff
-       giveUp(BB) {
-         this.clearTimers();
-         const OB = this.restoreTried ? "restore_tried" : "restore_untried";
-         if (!this.actions.inGame()) return this.waiting || (this.waiting = !0, this.actions.jP(`webgl_waiting_${OB}`, `WebGL${this.webGlVersion} context not restored: waiting for a game`)), this.restoreDidNotHold = !1, void this.armTimers(BB);
-         this.gaveUp = !0;
-         const GB = (0, Xo.l)(performance.now() - BB);
-         if (to(this.actions)) return this.actions.jP(`webgl_rejoin_${OB}_${GB}`, `WebGL${this.webGlVersion} context not restored: rejoining`), void this.actions.rejoin();
-         this.actions.jP(`webgl_end_${OB}_${GB}`, `WebGL${this.webGlVersion} context not restored: game ended`), this.actions.end()
+     }
+     class NL {
+       constructor(WW) {
+         this.key = WW, this.baseUrl = vP.gemini.baseUrl
+       }
+       async check(WW) {
+         return zP(GP, WW, (async WW => {
+           var iW;
+           const OW = await rP("gemini", `${this.baseUrl}/models?pageSize=1000`, {
+             headers: this.headers()
+           }, WW);
+           return {
+             models: (null !== (iW = (await OW.json()).models) && void 0 !== iW ? iW : []).filter((WW => {
+               var iW, OW;
+               return null === (iW = null === (OW = WW.supportedGenerationMethods) || void 0 === OW ? void 0 : OW.includes("generateContent")) || void 0 === iW || iW
+             })).map((WW => ({
+ ... (5 more added lines; see GitHub link above)
```

#### 273. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5996-L5999` → after: `L7686-L7770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7686-L7770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7686-L7770) · [Before (L5996-L5999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5996-L5999)

```diff
-       clearTimers() {
-         var BB;
-         for (const OB of [this.restoreTimer, this.giveUpTimer]) null !== OB && clearTimeout(OB);
-         this.restoreTimer = null, this.giveUpTimer = null, null === (BB = this.cancelAdWait) || void 0 === BB || BB.call(this), this.cancelAdWait = null
+       async ask(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+         const mW = iW.filter((WW => "system" === WW.role)).map((WW => ({
+             text: WW.content
+           }))),
+           EW = WL(iW).map((WW => ({
+             role: "assistant" === WW.role ? "model" : "user",
+             parts: [{
+               text: WW.content
+             }]
+           })));
+         return zP(IP, OW.signal, (async iW => {
+           var NW;
+           const PW = await rP("gemini", `${this.baseUrl}/models/${encodeURIComponent(WW)}:streamGenerateContent?alt=sse`, {
+             method: "POST",
+             headers: this.headers(),
+ ... (69 more added lines; see GitHub link above)
```

#### 274. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6002-L6005` → after: `L7773-L7777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7773-L7777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7773-L7777) · [Before (L6002-L6005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6002-L6005)

```diff
-     var Yj = GB(1896),
-       Dj = GB(3136),
-       Qj = GB(4927);
-     const oj = 15e3,
+     const LL = {
+         fast: "Fast",
+         smart: "Smart",
+         smartest: "Smartest"
+       },
```

#### 275. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6007-L6009` → after: `L7779-L7882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7779-L7882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7779-L7882) · [Before (L6007-L6009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6007-L6009)

```diff
-         restoredAt: null,
-         restores: 0,
-         gaveUp: !1
+         anthropic: {
+           fast: [{
+             id: "claude-haiku-5-5",
+             name: "Claude Haiku 5.5"
+           }, {
+             id: "claude-haiku-4-5",
+             name: "Claude Haiku 4.5"
+           }],
+           smart: [{
+             id: "claude-sonnet-5-5",
+             name: "Claude Sonnet 5.5"
+           }, {
+             id: "claude-sonnet-5",
+             name: "Claude Sonnet 5"
+           }, {
+             id: "claude-sonnet-4-6",
+ ... (88 more added lines; see GitHub link above)
```

#### 276. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6013-L6075` → after: `L7890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7890) · [Before (L6013-L6075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6013-L6075)

```diff
-       const {
-         gpuDevice: GB,
-         deviceLost: YB
-       } = BB.Dq;
-       GB && YB && YB.then((YB => {
-         (0, ko.g)(GB) || ((0, Dj.s)("webgpuloss") && (0, Qj.d)((BB => {
-           BB.noteWebGpuLoss("js", !0 === YB.framesRefused ? `${YB.reason} frames refused` : YB.reason, YB.message)
-         })), function(BB, OB, GB, YB) {
-           if (jj.gaveUp) return;
-           const DB = performance.now(),
-             QB = new Bj,
-             oB = (0, Xo.q)(!0 === GB.framesRefused, GB.message, "destroyed" === GB.reason),
-             jB = "destroyed" === GB.reason || !0 === GB.framesRefused,
-             yB = jB && jj.restores < 3 && ! function(BB, OB) {
-               return null !== jj.restoredAt && OB - jj.restoredAt < Oj && BB.shownSince(jj.restoredAt)
-             }(QB, DB) ? BB.rebuild : void 0;
- ... (47 more removed lines; see GitHub link above)
+       return "custom" !== WW && /claude-|gpt-|gemini-/.test(iW)
```

#### 277. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6080-L6089` → after: `L7894-L7901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7894-L7901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7894-L7901) · [Before (L6080-L6089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6080-L6089)

```diff
-       let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       Pj(BB, (() => {
-         const DB = BB.inGame();
-         if (!DB && !BB.replaying()) return YB || BB.jP(`${OB}_waiting`, "WebGPU device lost to the browser: waiting for a game", !0), void setTimeout((() => {
-           Mj(BB, OB, GB, !0)
-         }), Jj);
-         const QB = (0, Xo.l)(performance.now() - GB);
-         if (DB && to(BB)) return BB.jP(`${OB}_rejoin_${QB}`, "WebGPU device lost to the browser: rejoining", !0), void BB.rejoin();
-         BB.jP(`${OB}_end_${QB}`, "WebGPU device lost to the browser: game ended", !0), BB.end()
-       }))
+       var mW;
+       const EW = OW.find((WW => WW.id === iW));
+       return {
+         id: iW,
+         name: null !== (mW = null === EW || void 0 === EW ? void 0 : EW.name) && void 0 !== mW ? mW : iW,
+         callFormat: wL(iW),
+         nativeTools: tL(WW, iW)
+       }
```

#### 278. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6093-L6101` → after: `L7905-L7917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7905-L7917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7905-L7917) · [Before (L6093-L6101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6093-L6101)

```diff
-       if (BB.hidden()) return void BB.whenShown((() => {
-         Pj(BB, OB)
-       }));
-       let GB = !1;
-       BB.whenNoAdShowing((() => {
-         GB ? setTimeout((() => {
-           Pj(BB, OB)
-         }), 0) : OB()
-       })), GB = !0
+       return "custom" !== WW ? function(WW, iW) {
+         if ("custom" === WW) return [];
+         const OW = new Set(iW.map((WW => WW.id))),
+           mW = cL[WW];
+         return Object.keys(mW).flatMap((EW => {
+           const NW = mW[EW].find((WW => OW.has(WW.id)));
+           return NW ? [{
+             ...ZL(WW, NW.id, iW),
+             name: NW.name,
+             tier: EW
+           }] : []
+         }))
+       }(WW, iW) : iW.slice(0, 20).map((OW => ZL(WW, OW.id, iW)))
```

#### 279. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6112-L6123` → after: `L7922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7922) · [Before (L6112-L6123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6112-L6123)

```diff
-       const OB = null === (BB = (0, CB.d)()) || void 0 === BB ? void 0 : BB.client;
-       if (null !== OB && void 0 !== OB && OB.isConnectedToServer()) try {
-         return void OB.leaveGameUnwanted({
-           reason: zj,
-           requiresRefresh: !0,
-           canReconnect: !1,
-           automaticallyReconnect: !1
-         })
-       } catch (GB) {
-         console.error("Failed to leave the game after wasm physics was lost", GB)
-       }
-       ZB.o.tM("unrecoverableError", zj)
+       return null !== (iW = WW.find((WW => "smart" === WW.tier))) && void 0 !== iW ? iW : WW[0]
```

#### 280. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6129-L6181` → after: `L7926-L7928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7926-L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7926-L7928) · [Before (L6129-L6181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6129-L6181)

```diff
-       return {
-         name: "moveState",
-         order: 30,
-         state: {
-           heading: 0,
-           crouching: !1,
-           speed: 0,
-           jumping: !1,
-           toggleFly: !1,
-           edgeGuard: !1,
-           cameraPitch: 0,
-           meshOffset: null,
-           baseRenderHeading: 0,
-           followingEId: null,
-           ridingVehicleEId: null,
-           pose: "standing",
- ... (37 more removed lines; see GitHub link above)
+       var iW;
+       let OW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+       return null !== (iW = WW.name) && void 0 !== iW ? iW : CP(WW.provider, WW.baseUrl, OW)
```

#### 281. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6183-L6184` → after: `L7930-L7935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7930-L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7930-L7935) · [Before (L6183-L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6183-L6184)

```diff
-     var Wj = GB(38862),
-       Aj = GB(38672);
+     const bL = "bloxdAiHelperKeys",
+       jL = {
+         keys: [],
+         selected: null,
+         remember: !1
+       };
```

#### 282. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6186-L6209` → after: `L7937-L7938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7937-L7938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7937-L7938) · [Before (L6186-L6209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6186-L6209)

```diff
-     function Vj(BB) {
-       return {
-         name: "inventory",
-         order: 150,
-         state: {
-           selectedItem: null,
-           inventory: null,
-           opWrapper: null,
-           onInventoryUpdate: null,
-           onChestUpdate: null
-         },
-         OW: function(OB, GB) {
-           if (GB.inventory || (GB.inventory = new Aj.b(BB, GB, gB.x)), !GB.opWrapper) {
-             const {
-               onChestUpdate: OB
-             } = GB;
- ... (8 more removed lines; see GitHub link above)
+     function UL(WW, iW) {
+       return WW.id === iW.id || "custom" === WW.provider && "custom" === iW.provider && WW.baseUrl === iW.baseUrl
```

#### 283. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6213-L6224` → after: `L7942-L7947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7942-L7947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7942-L7947) · [Before (L6213-L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6213-L6224)

```diff
-       return {
-         name: "itemState",
-         order: 105,
-         state: {
-           amount: 1,
-           name: null,
-           typeObj: null,
-           creationTime: 0,
-           uQ: !1,
-           size: 1
-         },
-         attributes: {}
+       if ("custom" !== WW.provider) return !0;
+       try {
+         var iW;
+         return new URL(null !== (iW = WW.baseUrl) && void 0 !== iW ? iW : "").protocol.startsWith("http")
+       } catch {
+         return !1
```

#### 284. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6234-L6258` → after: `L7952-L7956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7952-L7956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7952-L7956) · [Before (L6234-L6258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6234-L6258)

```diff
-       const OB = dj.get(BB);
-       return OB ? OB() : null
-     }
-     const uj = [{
-       queue: "opaque",
-       field: "_opaqueSubMeshes"
-     }, {
-       queue: "alphaTest",
-       field: "_alphaTestSubMeshes"
-     }, {
-       queue: "transparent",
-       field: "_transparentSubMeshes"
-     }, {
-       queue: "depthOnly",
-       field: "_depthOnlySubMeshes"
-     }];
- ... (9 more removed lines; see GitHub link above)
+       try {
+         return "undefined" === typeof window ? null : window[WW]
+       } catch (iW) {
+         return console.warn(`AI Helper: no ${WW}`, iW), null
+       }
```

#### 285. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6260-L6320` → after: `L7958-L7999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R7958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L7958-L7999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L7958-L7999) · [Before (L6260-L6320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6260-L6320)

```diff
- 
-     function Ij(BB, OB, GB) {
-       const YB = {
-         opaque: 0,
-         alphaTest: 0,
-         transparent: 0,
-         depthOnly: 0,
-         total: 0,
-         byGroup: {}
-       };
-       mj(BB, ((BB, OB) => {
-         const GB = {
-           opaque: 0,
-           alphaTest: 0,
-           transparent: 0,
-           depthOnly: 0,
- ... (45 more removed lines; see GitHub link above)
+     const ML = new class {
+       constructor(WW, iW) {
+         var OW;
+         this.session = WW, this.local = iW, this.state = void 0, this.listeners = new Set, this.ownsRemembered = !1, this.lastUsedAt = 0, this.getState = () => this.state, this.subscribe = WW => (this.listeners.add(WW), () => {
+           this.listeners.delete(WW)
+         });
+         for (const NW of [WW, iW]) null !== NW && void 0 !== NW && NW.getItem(bL) && !this.read(NW) && NW.removeItem(bL);
+         const mW = this.read(WW),
+           EW = this.read(iW);
+         this.state = null !== mW && void 0 !== mW && mW.remember ? null !== EW && void 0 !== EW && EW.remember ? EW : {
+           ...mW,
+           remember: !1
+         } : null !== (OW = null !== mW && void 0 !== mW ? mW : EW) && void 0 !== OW ? OW : jL, this.ownsRemembered = this.state.remember && null !== EW
+       }
+       nextUsedAt() {
+         return this.lastUsedAt = Math.max(Date.now(), this.lastUsedAt + 1), this.lastUsedAt
+ ... (26 more added lines; see GitHub link above)
```

#### 286. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6322-L6334` → after: `L8001-L8024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8001-L8024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8001-L8024) · [Before (L6322-L6334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6322-L6334)

```diff
-           other: {
-             draws: 0,
-             instances: 0
-           }
-         },
-         jB = new Set,
-         yB = new Map;
-       let JB = 0;
-       return function(BB, OB, GB, YB) {
-         mj(BB, ((BB, OB) => {
-           for (const {
-               queue: GB,
-               field: DB
+           ZW = this.state.keys.every((WW => WW.id !== LW)),
+           xW = void 0 !== OW && OW !== LW && this.state.keys.some((WW => WW.id === OW)),
+           lW = xW ? this.state.keys.filter((WW => WW.id !== LW)).map((WW => WW.id === OW ? tW : WW)) : ZW ? [...this.state.keys, tW] : this.state.keys.map((WW => WW.id === LW ? tW : WW)),
+           AW = cW ? {
+             keyId: LW,
+             modelId: cW.id
+           } : (null === (NW = this.state.selected) || void 0 === NW ? void 0 : NW.keyId) === OW && xW ? null : this.state.selected;
+         return this.update({
+           keys: lW,
+           selected: AW
+         }), LW
+       }
+       renameKey(WW, iW) {
+         const OW = iW.replace(/\s+/g, " ").trim().slice(0, 30);
+         this.update({
+           keys: this.state.keys.map((iW => {
+ ... (8 more added lines; see GitHub link above)
```

#### 287. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6336-L6341` → after: `L8026-L8085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8026-L8085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8026-L8085) · [Before (L6336-L6341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6336-L6341)

```diff
-             of uj) {
-             const QB = BB[DB];
-             for (let BB = 0; BB < QB.length; BB++) YB(QB.data[BB].getMesh(), GB, OB)
-           }
-         })), null === OB || void 0 === OB || OB.forEachSelected(YB), null === GB || void 0 === GB || GB.forEachSelected(YB)
-       }(BB, GB, YB, ((BB, GB, YB) => {
+           }))
+         })
+       }
+       select(WW) {
+         const iW = this.nextUsedAt(),
+           OW = null === WW ? this.state.keys : this.state.keys.map((OW => OW.id === WW.keyId ? {
+             ...OW,
+             usedAt: iW,
+             usedModelId: WW.modelId
+           } : OW));
+         this.update({
+           keys: OW,
+           selected: WW
+         })
+       }
+       refreshModels(WW, iW, OW) {
+ ... (44 more added lines; see GitHub link above)
```

#### 288. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6343-L6367` → after: `L8087-L8097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8087-L8097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8087-L8097) · [Before (L6343-L6367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6343-L6367)

```diff
-         const MB = BB.metadata,
-           PB = BB;
-         let zB = function(BB, OB) {
-           return !0 === (null === BB || void 0 === BB ? void 0 : BB[EQ.k]) ? "terrain" : !0 === (null === BB || void 0 === BB ? void 0 : BB[fY.r]) ? "objectBlocks" : !0 === (null === BB || void 0 === BB ? void 0 : BB[fY.A]) ? "textPlanes" : -1 === OB ? "sky" : "other"
-         }(MB, YB);
-         "other" === zB && PB.HGB && (zB = "entityParts");
-         const lB = function(BB, OB, GB, YB) {
-             return "terrain" === BB ? GB ? `${null===YB||void 0===YB?void 0:YB[EQ.f]}:${null===YB||void 0===YB?void 0:YB[EQ.i]}` : "(all)" : "textPlanes" === BB ? "(all)" : "objectBlocks" === BB || "entityParts" === BB ? OB : (DB = OB).split(/[|:#]/)[0].replace(/\d+$/, "") || DB;
-             var DB
-           }(zB, BB.name, OB, MB),
-           pB = `${zB}\0${lB}`;
-         let qB = QB.get(pB);
-         qB || (qB = {
-           category: zB,
-           label: lB,
-           draws: 0,
- ... (9 more removed lines; see GitHub link above)
+         const OW = this.state,
+           mW = OW.keys.findIndex((iW => iW.id === WW)),
+           EW = OW.keys[mW];
+         if (!EW) return () => {};
+         const NW = OW.keys.filter((iW => iW.id !== WW)),
+           PW = (null === (iW = OW.selected) || void 0 === iW ? void 0 : iW.keyId) === WW ? null : OW.selected;
+         return this.update({
+           keys: NW,
+           selected: PW,
+           remember: NW.length > 0 && OW.remember
+         }), () => {
```

#### 289. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6369` → after: `L8099-L8191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8099-L8191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8099-L8191) · [Before (L6369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6369)

```diff
-           if (BB) yB.set(BB, (null !== (NB = yB.get(BB)) && void 0 !== NB ? NB : 0) + 1)
+           const NW = this.state.keys.some((WW => UL(WW, EW)));
+           if (NW) return;
+           const PW = [...this.state.keys];
+           PW.splice(Math.min(mW, PW.length), 0, EW);
+           const LW = (null === (iW = OW.selected) || void 0 === iW ? void 0 : iW.keyId) === WW && null === this.state.selected;
+           this.update({
+             keys: PW,
+             selected: LW ? OW.selected : this.state.selected,
+             remember: this.state.remember || OW.remember
+           })
+         }
+       }
+       removeAll() {
+         this.update(jL), this.local && null !== this.local.getItem(bL) && (this.local.setItem(bL, JSON.stringify(jL)), this.local.removeItem(bL))
+       }
+       setRemember(WW) {
+ ... (77 more added lines; see GitHub link above)
```

#### 290. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6371-L6379` → after: `L8193-L8240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8193-L8240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8193-L8240) · [Before (L6371-L6379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6371-L6379)

```diff
-       })), {
-         dispatched: DB,
-         rows: [...QB.values()].sort(((BB, OB) => OB.draws - BB.draws)),
-         byCategory: oB,
-         terrain: {
-           meshes: JB,
-           chunkColumns: jB.size,
-           octreeBlocks: yB.size,
-           maxMeshesPerOctreeBlock: 0 === yB.size ? 0 : Math.max(...yB.values())
+       }
+     }
+     async function SL(WW, iW) {
+       var OW;
+       let {
+         provider: mW,
+         key: EW,
+         baseUrl: NW,
+         modelName: PW
+       } = WW;
+       const LW = null !== (OW = null === PW || void 0 === PW ? void 0 : PW.trim()) && void 0 !== OW ? OW : "";
+       let cW = [];
+       try {
+         cW = (await PL(mW, EW, NW).check(iW)).models
+       } catch (wW) {
+         if (!("custom" === mW && wW instanceof XP && ("failed" === wW.problem || "noModel" === wW.problem))) throw wW
+ ... (32 more added lines; see GitHub link above)
```

#### 291. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6383` → after: `L8260-L8277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8260-L8277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8260-L8277) · [Before (L6383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6383)

```diff
-     const ij = "drawcalls";
+     var yL = OW(4851);
+     const TL = "Super Bot.xd",
+       JL = {
+         ovh: {
+           name: TL,
+           temperature: .6,
+           nativeTools: !0,
+           callFormat: "qwenXml"
+         },
+         deepseek: {
+           name: TL,
+           temperature: 1,
+           nativeTools: !0,
+           callFormat: "deepseek"
+         }
+       };
+ ... (2 more added lines; see GitHub link above)
```

#### 292. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6386` → after: `L8280-L8285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8280-L8285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8280-L8285) · [Before (L6386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6386)

```diff
-       return (0, Ho.k)(BB.UP).backendName
+       if ("deepseek" !== WW) return !0;
+       try {
+         return "undefined" !== typeof window && "1" === window.localStorage.getItem(HL)
+       } catch {
+         return !1
+       }
```

#### 293. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6388` → after: `L8287-L8295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8287-L8295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8287-L8295) · [Before (L6388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6388)

```diff
-     class gj {
+ 
+     function uL() {
+       try {
+         return "undefined" !== typeof window && "1" === window.sessionStorage.getItem(hL)
+       } catch {
+         return !1
+       }
+     }
+     const oL = new class {
```

#### 294. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6390` → after: `L8297-L8307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8297-L8307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8297-L8307) · [Before (L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6390)

```diff
-         this.sum = 0, this.min = Number.POSITIVE_INFINITY, this.max = 0, this.count = 0
+         this.state = void 0, this.listeners = new Set, this.refreshing = null, this.getState = () => this.state, this.subscribe = WW => (this.listeners.add(WW), () => {
+           this.listeners.delete(WW)
+         }), this.state = {
+           picked: uL(),
+           status: null,
+           canBuySuperRank: null
+         }, ML.subscribe((() => {
+           null !== ML.getState().selected && this.state.picked && this.update({
+             picked: !1
+           })
+         }))
```

#### 295. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6392-L6393` → after: `L8309-L8311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8309-L8311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8309-L8311) · [Before (L6392-L6393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6392-L6393)

```diff
-       add(BB) {
-         this.sum += BB, this.count++, BB < this.min && (this.min = BB), BB > this.max && (this.max = BB)
+       isAnswering() {
+         var WW;
+         return this.state.picked && "ok" === (null === (WW = this.state.status) || void 0 === WW ? void 0 : WW.availability)
```

#### 296. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6395-L6396` → after: `L8313-L8316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8313-L8316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8313-L8316) · [Before (L6395-L6396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6395-L6396)

```diff
-       hasSamples() {
-         return this.count > 0
+       Kl() {
+         ML.select(null), this.update({
+           picked: !0
+         })
```

#### 297. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6398-L6407` → after: `L8318-L8346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8318-L8346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8318-L8346) · [Before (L6398-L6407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6398-L6407)

```diff
-       summarise() {
-         return 0 === this.count ? {
-           mean: 0,
-           min: 0,
-           max: 0
-         } : {
-           mean: Math.round(this.sum / this.count * 10) / 10,
-           min: this.min,
-           max: this.max
-         }
+       unpick() {
+         this.update({
+           picked: !1
+         })
+       }
+       setStatus(WW) {
+         const iW = this.state.picked && gL(WW, this.state.canBuySuperRank) && nL(WW.provider);
+         this.update({
+           status: WW,
+           picked: iW
+         })
+       }
+       setCanBuySuperRank(WW) {
+         const {
+           status: iW
+         } = this.state;
+ ... (13 more added lines; see GitHub link above)
```

#### 298. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6412-L6413` → after: `L8368-L8382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8368-L8382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8368-L8382) · [Before (L6412-L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6412-L6413)

```diff
-       var OB, GB;
-       return null !== (OB = null === (GB = BB.UP.Dq) || void 0 === GB ? void 0 : GB.mBB) && void 0 !== OB ? OB : null
+       var iW;
+       let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+       if (null === WW) return "Checking whether Super Bot.xd can answer for you\u2026";
+       switch (WW.availability) {
+         case "ok":
+           return null;
+         case "guest":
+           return "Log in to use Super Bot.xd.";
+         case "tooNew":
+           return `Super Bot.xd opens once your account is a week old: ${XL((null!==(iW=WW.availableFrom)&&void 0!==iW?iW:OW)-OW)} to go.`;
+         case "noUsageLeft":
+           return WW.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(WW,iW){const OW=Math.ceil((WW-iW)/36e5);if(OW<=24)return OW<=1?"within the hour":`in ${OW} hours`;return`in ${XL(WW-iW)}`}(WW.resetsAt,OW)}.` : "0 usage remaining - upgrade to Supe … [truncated]
+         case "unavailable":
+           return "Super Bot.xd can't answer right now. Try again later."
+       }
```

#### 299. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6417-L6418` → after: `L8386-L8390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8386-L8390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8386-L8390) · [Before (L6417-L6418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6417-L6418)

```diff
-       var OB, GB;
-       return null !== (OB = null === (GB = BB.UP.Dq) || void 0 === GB ? void 0 : GB.modelMeshes) && void 0 !== OB ? OB : null
+       return null !== WW && !WW.isSuper && "noUsageLeft" === WW.availability
+     }
+ 
+     function gL(WW, iW) {
+       return "ok" === WW.availability || !1 !== iW && vL(WW)
```

#### 300. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6422-L6423` → after: `L8394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8394) · [Before (L6422-L6423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6422-L6423)

```diff
-       var OB, GB, YB, DB;
-       return BB.UP.JF().getActiveMeshes().length + (null !== (OB = null === (GB = rj(BB)) || void 0 === GB ? void 0 : GB.drawStats().selected) && void 0 !== OB ? OB : 0) + (null !== (YB = null === (DB = Xj(BB)) || void 0 === DB ? void 0 : DB.selectedCount) && void 0 !== YB ? YB : … [truncated]
+       return !0 === WW.canBuySuperRank && vL(WW.status)
```

#### 301. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6427-L6436` → after: `L8398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8398) · [Before (L6427-L6436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6427-L6436)

```diff
-       const OB = BB.UP.JF(),
-         GB = Kj(BB.UP.engine),
-         YB = Ij(OB, rj(BB), Xj(BB));
-       return {
-         backend: Lj(BB),
-         dispatched: YB,
-         activeMeshes: wj(BB),
-         drawn: GB,
-         residual: GB ? GB.lastFrameDraws - YB.total : null
-       }
+       return DL(WW) ? null : eL(WW.status)
```

#### 302. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6440-L6455` → after: `L8402-L8403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8402-L8403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8402-L8403) · [Before (L6440-L6455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6440-L6455)

```diff
-       const OB = function() {
-         var BB;
-         return null !== (BB = (0, fo.o)(ij)) && void 0 !== BB && BB
-       }();
-       OB && !BB.UP.Dq && function(BB) {
-         const OB = dj.get(BB);
-         if (OB) return OB;
-         const GB = {
-             draws: 0,
-             lastFrameDraws: 0,
-             instancedDraws: 0,
-             instances: 0
-           },
-           YB = BB,
-           DB = YB.drawElementsType.bind(BB),
-           QB = YB.drawArraysType.bind(BB);
+       return WW.picked && null === VL(WW)
+     }
```

#### 303. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6457-L6580` → after: `L8405-L8407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8405-L8407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8405-L8407) · [Before (L6457-L6580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6457-L6580)

```diff
-         function oB(BB) {
-           GB.draws++, BB && (GB.instancedDraws++, GB.instances += BB)
-         }
-         YB.drawElementsType = function(BB, OB, GB, YB) {
-           oB(YB), DB(BB, OB, GB, YB)
-         }, YB.drawArraysType = function(BB, OB, GB, YB) {
-           oB(YB), QB(BB, OB, GB, YB)
-         };
-         let jB = 0;
-         BB.onEndFrameObservable.add((() => {
-           GB.lastFrameDraws = GB.draws - jB, jB = GB.draws
-         }));
-         const yB = () => ({
-           ...GB
-         });
-         dj.set(BB, yB)
- ... (108 more removed lines; see GitHub link above)
+     function fL(WW) {
+       return WW.picked && DL(WW)
+     }
```

#### 304. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6583-L6596` → after: `L8410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8410) · [Before (L6583-L6596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6583-L6596)

```diff
-       const OB = BB.UP.JF();
-       OB.onBeforeCameraRenderObservable.add((() => {
-         ! function(BB, OB) {
-           const {
-             DW: GB
-           } = BB, YB = GB.lL(GB.names.vW), DB = GB.lL("lineToEntity");
-           for (const QB of YB) {
-             if (!(0, Cj.chainSkipsSmoothing)(BB, QB.qp)) continue;
-             const YB = GB.iGB(QB.qL);
-             null === (null === YB || void 0 === YB ? void 0 : YB.uF) && (0, Cj.meshOnScreen)(YB.mesh, OB) && (0, Cj.catchUpSkippedSmoothing)(BB, QB.qp)
-           }
-           for (const QB of DB)((0, Cj.chainSkipsSmoothing)(BB, QB.qL) || (0, Cj.chainSkipsSmoothing)(BB, QB._targetEId)) && (0, Cj.meshOnScreen)(QB._line, OB) && ((0, Cj.catchUpSkippedSmoothing)(BB, QB.qL), (0, Cj.catchUpSkippedSmoothing)(BB, QB._targetEId), (0, By.updateLineTran … [truncated]
-         }(BB, OB.frustumPlanes)
-       }), void 0, !0)
+       return `Usage left: ${WW.left}`
```

#### 305. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6605-L6680` → after: `L8414-L8416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8414-L8416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8414-L8416) · [Before (L6605-L6680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6605-L6680)

```diff
-       var OB;
-       BB.UP.QYB = BB => {
-         const OB = BB.isFrozen;
-         OB && (0, SB.G)(BB), (0, hB.b)(BB), OB && (0, SB.m)(BB)
-       }, Object.assign(BB, {
-         xR: Qy.e.values
-       });
-       let YB = BB.BN;
-       Qy.e.subscribe("blockReach", (() => {
-           const OB = BB.bloxd.getBlockReach(BB.EX);
-           BB.BN === YB && (BB.BN = OB), YB = OB
-         })),
-         function(BB) {
-           for (const GB of [Zj.e, Rj, Vj, Sj]) {
-             const OB = BB.DW.jYB(GB(BB));
-             BB.DW.names[OB] = OB
- ... (60 more removed lines; see GitHub link above)
+       const iW = Math.max(1, Math.ceil(WW / dP.k));
+       return 1 === iW ? "1 day" : `${iW} days`
+     }
```

#### 306. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6682-L6791` → after: `L8418-L8433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8418-L8433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8418-L8433) · [Before (L6682-L6791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6682-L6791)

```diff
-           function QB() {
-             const {
-               pixelSmoothing: QB
-             } = go.c.get("clientEscMenuOptions");
-             OB.style.imageRendering = (0, nj.P)((0, nj.z)(QB));
-             const oB = function() {
-               const BB = (0, Uj.e)(YB, DB);
-               if (null !== BB) {
-                 if (null === BB.grid) {
-                   const BB = YB.getBoundingClientRect();
-                   OB.style.width = `${BB.width}px`, OB.style.height = `${BB.height}px`
-                 } else(0, nj.g)(OB, BB.grid);
-                 GB.setSize(BB.width, BB.height)
-               }
-             };
-             BB.UP.resize = oB, BB.container.UW.vN = oB, oB()
- ... (94 more removed lines; see GitHub link above)
+     function BL(WW, iW) {
+       const OW = "unavailable" === WW ? eL(iW) : null;
+       if (OW) return `${OW} Bot.xd is answering instead.`;
+       switch (WW) {
+         case "busy":
+           return "Super Bot.xd is busy, so Bot.xd is answering this one.";
+         case "tooLong":
+           return "That message is too big for your Super Bot.xd usage, so Bot.xd is answering this one.";
+         case "tooLarge":
+           return "That request is too large for Super Bot.xd, so Bot.xd is answering this one.";
+         case "unchecked":
+           return "Super Bot.xd's safety check is busy, so Bot.xd is answering this one.";
+         case "contextRefused":
+           return "Something in your code didn't pass Super Bot.xd's safety check, so Bot.xd is answering this one.";
+         default:
+           return "Super Bot.xd couldn't answer, so Bot.xd is answering this one."
```

#### 307. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6794-L7109` → after: `L8436-L8449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8436-L8449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8436-L8449) · [Before (L6794-L7109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L6794-L7109)

```diff
-     var fy = GB(37288),
-       ky = GB(34755);
-     class dy {
-       constructor(BB, OB, GB, YB, DB) {
-         this.kz = BB, this.bloxd = OB, this.userContext = GB, this.output = YB, this.sounds = DB, this.chunks = void 0, this.actionRay = {
-           origin: [0, 0, 0],
-           direction: [0, 0, 1]
-         }, this.chunks = new Uy(BB.mP)
-       }
-       disposeGameOutput() {
-         this.output.disposeAll(), this.setCrosshairShown(null)
-       }
-       pR(BB) {
-         var OB;
-         const GB = null === (OB = this.kz.DW.f4(this.toLocalId(BB))) || void 0 === OB ? void 0 : OB.position;
-         if (!GB) throw new Error(`Entity ${BB} has no replicated position`);
- ... (300 more removed lines; see GitHub link above)
+     async function qL(WW) {
+       if (function(WW) {
+           var iW, OW, mW, EW, NW, PW, LW;
+           return WW.messages.length > 12 || WW.messages.some((WW => WW.content.length > EN)) || (null !== (iW = null === (OW = WW.toolsJson) || void 0 === OW ? void 0 : OW.length) && void 0 !== iW ? iW : 0) > 1e5 || (null !== (mW = null === (EW = WW.request) || void 0 === EW ? vo … [truncated]
+         }(WW)) return {
+         outcome: "tooLarge"
+       };
+       try {
+         return await (0, NN.postToGameServer)("/ai-helper/super-bot-xd/ask", WW)
+       } catch (iW) {
+         if (iW instanceof eP.c && 413 === iW.httpCode) return {
+           outcome: "tooLarge"
+         };
+         throw iW
```

#### 308. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L7112-L7113` → after: `L8452-L8467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8452-L8467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8452-L8467) · [Before (L7112-L7113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L7112-L7113)

```diff
-     var Ky = GB(39827);
-     const uy = 256;
+     async function RL(WW, iW) {
+       return iW ? await new Promise(((OW, mW) => {
+         const EW = () => {
+           mW(new DOMException("The Super Bot.xd request was stopped", "AbortError"))
+         };
+         iW.aborted ? EW() : (iW.addEventListener("abort", EW, {
+           once: !0
+         }), WW.then(OW, mW).finally((() => {
+           iW.removeEventListener("abort", EW)
+         })))
+       })) : await WW
+     }
+     var GL = OW(27),
+       IL = OW(25),
+       aL = OW(3125);
+     let rL = null;
```

#### 309. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L7115-L7123` → after: `L8469-L8508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8469-L8508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8469-L8508) · [Before (L7115-L7123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L7115-L7123)

```diff
-     function my(BB, OB, GB) {
-       const YB = function(BB) {
-         const OB = (0, SB.l)(BB, "groundArrowPathTex", {
-             width: uy,
-             height: uy,
-             mipmaps: !1,
-             samplingMode: AB.g.nearestNearestMipLinear,
-             hasAlpha: !0,
-             wrap: AB.c.wrap
+     function zL() {
+       rL ??= Promise.resolve().then((() => OW(3132))), rL.then((WW => {
+         let {
+           purchasesAllowed: iW
+         } = WW;
+         oL.setCanBuySuperRank(iW())
+       }), (WW => {
+         rL = null, console.warn("AI Helper: couldn't find out whether Super rank is sold here", WW)
+       }))
+     }
+     let FL = !1,
+       QL = null;
+     async function Wc() {
+       if (FL) return !0;
+       FL = !0;
+       try {
+ ... (24 more added lines; see GitHub link above)
```

#### 310. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L7125-L7152` → after: `L8510-L8519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8510-L8519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8510-L8519) · [Before (L7125-L7152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L7125-L7152)

```diff
-           GB = (0, SB.k)(OB),
-           YB = uy;
-         GB.clearRect(0, 0, YB, YB), GB.fillStyle = "white";
-         const DB = 3,
-           QB = YB / DB,
-           oB = .1 * YB,
-           jB = .2 * QB;
-         for (let yB = 0; yB < DB; yB++) {
-           const BB = yB * QB,
-             OB = BB + .3 * QB,
-             DB = BB + .6 * QB;
-           GB.beginPath(), GB.moveTo(oB, DB), GB.lineTo(YB / 2, OB), GB.lineTo(YB - oB, DB), GB.lineTo(YB - oB, DB + jB), GB.lineTo(YB / 2, OB + jB), GB.lineTo(oB, DB + jB), GB.closePath(), GB.fill()
-         }
-         return (0, SB.J)(OB, !0, !1), OB
-       }(BB);
-       return (0, eB.c)({
- ... (12 more removed lines; see GitHub link above)
+           middleScreenPopupContainerClassName: wP.b
+         });
+         return QL = EW, EW.getResult().finally((() => {
+           QL === EW && (QL = null)
+         })), !0
+       } catch (iW) {
+         return console.warn("AI Helper: the out of usage popup couldn't be opened", iW), !0
+       } finally {
+         FL = !1
+       }
```

#### 311. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L7155-L7159` → after: `L8522-L8682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8522-L8682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8522-L8682) · [Before (L7155-L7159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L7155-L7159)

```diff
-       width: 1,
-       alpha: .8
-     };
-     let Fy = Iy;
-     const iy = new Set;
+         wood: ["Maple Log"],
+         log: ["Maple Log"],
+         logs: ["Maple Log"],
+         "wood log": ["Maple Log"],
+         "wood block": ["Maple Log"],
+         "wooden block": ["Maple Log"],
+         "tree log": ["Maple Log"],
+         "oak wood": ["Maple Log"],
+         planks: ["Maple Wood Planks"],
+         plank: ["Maple Wood Planks"],
+         "wood planks": ["Maple Wood Planks"],
+         "wood plank": ["Maple Wood Planks"],
+         "wooden planks": ["Maple Wood Planks"],
+         "oak planks": ["Maple Wood Planks"],
+         leaves: ["Maple Leaves"],
+         door: ["Maple Door"],
+ ... (145 more added lines; see GitHub link above)
```

#### 312. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L7162-L7165` → after: `L8685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8685) · [Before (L7162-L7165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L7162-L7165)

```diff
-       Fy = null !== BB && void 0 !== BB ? BB : Iy;
-       for (const OB of iy)(0, eB.f)(OB, {
-         alpha: Fy.alpha
-       })
+       return WW.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z0-9]+/).filter((WW => WW.length > 1))
```

#### 313. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L7167-L7192` → after: `L8687-L8739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8687-L8739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8687-L8739) · [Before (L7167-L7192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L7167-L7192)

```diff
-     const gy = .02;
-     class ry {
-       constructor(BB, OB, GB) {
-         this.kz = BB, this.buffers = OB, this.positions = void 0, this.uvs = void 0, this.cachedIndices = void 0, this.edgeResult = {
-           pos: new Float32Array(2),
-           axis: "x"
-         }, this.wallClimbResult = new Float32Array(2), this.mesh = null, this.material = null, this.lastVertPairCount = 0, this.uvOffset = 0, this.colour = void 0, this.positions = new Float32Array(6 * GB), this.uvs = new Float32Array(4 * GB), this.cachedIndices = new Uint16Array … [truncated]
-       }
-       setColour(BB) {
-         this.colour = BB, this.material && function(BB, OB) {
-           (0, eB.f)(BB, {
-             emissiveColor: (0, Ky.c)(OB)
-           })
-         }(this.material, BB)
-       }
-       render(BB, OB) {
- ... (10 more removed lines; see GitHub link above)
+ 
+     function Lc(WW) {
+       return WW.length > 4 && WW.endsWith("ies") ? `${WW.slice(0,-3)}y` : WW.length > 3 && WW.endsWith("s") && !WW.endsWith("ss") ? WW.slice(0, -1) : WW
+     }
+ 
+     function cc(WW) {
+       return new Set(Pc(WW).map((WW => Lc(WW))))
+     }
+     const wc = /^(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(|^([A-Za-z_$][\w$]*)\s*=\s*(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)/gm;
+ 
+     function tc(WW) {
+       return WW.split("\n").map((WW => WW.replace(/\/\/.*$/, "").replace(/(["'`])(?:\\.|(?!\1).)*\1/g, '""'))).join("\n").replace(/\/\*[^]*?\*\//g, (WW => WW.replace(/[^\n]/g, ""))).split("\n")
+     }
+ 
+     function Zc(WW) {
+       let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+ ... (37 more added lines; see GitHub link above)
```

#### 314. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L7194-L7217` → after: `L8741-L8768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8741-L8768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8741-L8768) · [Before (L7194-L7217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L7194-L7217)

```diff
-       buildStripGeometry(BB) {
-         const {
-           sampleX: OB,
-           sampleY: GB,
-           sampleZ: YB,
-           sampleAirborne: DB,
-           perp: QB,
-           direction: oB
-         } = this.buffers, [jB, yB] = QB, [JB, MB] = oB, PB = this.positions, zB = this.uvs;
-         let lB = 0,
-           pB = 0;
-         lB = this.writeStripVerts(PB, zB, lB, OB[0], GB[0] + gy, YB[0], jB, yB, pB);
-         for (let qB = 1; qB < BB; qB++) {
-           const BB = GB[qB - 1],
-             QB = GB[qB],
-             oB = QB - BB,
- ... (8 more removed lines; see GitHub link above)
+       return EW
+     }
+ 
+     function Ac(WW) {
+       return lc(WW).map((WW => WW.name))
+     }
+     const bc = "(\"[^\"\\n]*\"|'[^'\\n]*')";
+ 
+     function jc(WW, iW) {
+       const OW = [];
+       let mW = 0,
+         EW = "",
+         NW = "",
+         PW = iW;
+       for (let LW = iW; LW < WW.length; LW++) {
+         const iW = WW[LW];
+ ... (12 more added lines; see GitHub link above)
```

#### 315. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L7219` → after: `L8770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8770) · [Before (L7219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L7219)

```diff
-           lB = this.writeStripVerts(PB, zB, lB, OB[qB], QB + gy, YB[qB], jB, yB, pB)
+           "," === iW && 0 === mW && (OW.push((NW + WW.slice(PW, LW)).trim()), NW = "", PW = LW + 1)
```

#### 316. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L7287-L7293` → after: `L8777-L8782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8777-L8782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8777-L8782) · [Before (L7287-L7293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L7287-L7293)

```diff
-       const GB = OB - BB;
-       if (Math.abs(GB) <= .001) return 1;
-       const YB = Math.floor(BB),
-         DB = Math.floor(OB);
-       if (YB === DB) return 1;
-       const QB = ((GB > 0 ? DB : YB) - BB) / GB;
-       return QB <= 0 || QB >= 1 ? 1 : QB
+       var OW;
+       if (!/^[A-Za-z_$][\w$]*$/.test(iW)) return;
+       const mW = iW.replaceAll("$", "\\$"),
+         EW = `\\((?:[^()]*[\\s,])?${mW}(?![\\w$])[^()]*\\)`,
+         NW = new RegExp(`(?:const|let|var)\\s+${mW}(?![\\w$])|${mW}\\s*(?:\\+?=(?![=>])|=>)|${EW}\\s*=>|function\\s*[\\w$]*\\s*${EW}`, "g");
+       return 1 === (0, bi.e)(WW, NW, bi.k).length ? null === (OW = new RegExp(`\\b(?:const|let|var)\\s+${mW}\\s*=\\s*${bc}\\s*(?:;|//|$)`, "m").exec(WW)) || void 0 === OW ? void 0 : OW[1] : void 0
```

#### 317. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L7298-L7326` → after: `L8785-L8903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8785-L8903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8785-L8903) · [Before (L7298-L7326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L7298-L7326)

```diff
-     function cy(BB, OB) {
-       const GB = Ey.get(BB);
-       if (null === OB) return void(GB && (BB.childrenNodeParams = GB, Ey.delete(BB)));
-       const YB = null !== GB && void 0 !== GB ? GB : BB.childrenNodeParams,
-         DB = BB.childrenNodeParams.every((BB => BB.softTolerance === OB));
-       GB && DB || (Ey.set(BB, YB), BB.childrenNodeParams = YB.map((BB => ({
-         ...BB,
-         softTolerance: OB
-       }))))
-     }
-     class hy {
-       constructor(BB) {
-         this.kz = BB, this.nametagBases = new WeakMap, this.nametags = new Map, this.rotations = new Set
-       }
-       setNametagOffset(BB, OB) {
-         const GB = this.kz.DW.PYB(BB);
- ... (13 more removed lines; see GitHub link above)
+     function kc(WW, iW, OW) {
+       let mW;
+       const EW = function(WW) {
+         const iW = WW.split("\n").slice(1).map((WW => WW.trim())).find((WW => "" !== WW && !WW.startsWith("#") && !WW.startsWith("|") && !WW.startsWith("**") && !WW.startsWith("```")));
+         if (!iW) return "";
+         const OW = iW.search(/\.\s/),
+           mW = -1 === OW ? iW : iW.slice(0, OW + 1);
+         return mW.length > 110 ? `${mW.slice(0,107)}...` : mW
+       }(OW);
+       return mW = "api" === WW ? `api.${iW}(${Ac(OW).join(", ")})${EW?` \u2014 ${EW}`:""}` : "callback" === WW ? `${iW}(${Ac(OW).join(", ")})${EW?` \u2014 ${EW}`:""}` : "clientOption" === WW ? `${iW}: ${function(WW){var iW,OW;return null!==(iW=null===(OW=/\*\*Type:\*\*\s*`([^`]+) … [truncated]
+       Did you mean $ {
+         iW.map((WW => `"${WW}"`)).join(" or ")
+       } ? `:`
+       The closest name is "${iW[0]}", which may be something
+       else.
+       `}function Sc(WW){return WW.split("\n").slice(1).map((WW=>WW.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((WW=>""!==WW&&!WW.startsWith("#")))}class Yc{constructor(WW){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0, … [truncated]
+ ... (103 more added lines; see GitHub link above)
```

#### 318. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L7328-L7336` → after: `L8905-L8984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8905-L8984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8905-L8984) · [Before (L7328-L7336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L7328-L7336)

```diff
-       restoreAll() {
-         for (const [BB, OB] of this.nametags) {
-           const GB = this.nametagBases.get(OB);
-           GB && this.kz.DW.PYB(BB) === OB && OB.nameYOffset === GB.written && (OB.nameYOffset = GB.base), this.nametagBases.delete(OB)
-         }
-         this.nametags.clear();
-         for (const BB of this.rotations) {
-           const OB = this.rotationState(BB);
-           OB && cy(OB, null)
+     }))
+   }
+   return [...OW].map((WW => `"${WW}" isn't an item or block name.${Kc(this.suggestNames(WW))}`))
+ }
+ aliasedItemNames(WW) {
+   const iW = new Set(this.itemAndBlockNames),
+     OW = new Map,
+     mW = /(?:[[,:]|(?:^|[^=!<>])=)\s*(["'])([A-Z][a-z]+(?: [A-Z][a-z]+)+)\1(?=\s*(?:[,\]});]|\/\/|$))/gm;
+   for (const EW of WW.matchAll(mW)) {
+     const WW = EW[2],
+       mW = iW.has(WW) ? void 0 : this.suggestNames(WW);
+     null !== mW && void 0 !== mW && mW.isDecided && mW.isSure && OW.set(WW, mW.names[0])
+   }
+   return [...OW].map((WW => {
+     let [iW, OW] = WW;
+     return `"${iW}" isn't an item or block name, so giving or selling it fails. Did you mean "${OW}"?`
+ ... (64 more added lines; see GitHub link above)
```

#### 319. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L7338-L7342` → after: `L8986-L8995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8986-L8995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L8986-L8995) · [Before (L7338-L7342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L7338-L7342)

```diff
-         this.rotations.clear()
-       }
-       rotationState(BB) {
-         var OB;
-         return null !== (OB = this.kz.DW.getState(BB, "meshRotation")) && void 0 !== OB ? OB : null
+       }))
+     }(WW)) {
+     const WW = this.byName.get(OW);
+     if ("callback" === (null === WW || void 0 === WW ? void 0 : WW.kind))
+       for (const EW of mW.matchAll(/\breturn\s+["']((?:[Pp]revent|[Cc]ancel|[Ss]top|[Bb]lock|[Dd]eny)\w*)["']/g)) {
+         const mW = EW[1];
+         if (WW.text.includes(`"${mW}"`)) continue;
+         const NW = [...new Set([...WW.text.matchAll(/Return "(prevent[A-Za-z]*)"/g)].map((WW => WW[1])))],
+           PW = NW.length > 0 ? `Did you mean ${NW.map((WW=>`"${WW}"`)).join(" or ")}?` : /Return false/i.test(WW.text) ? `To stop it, return false instead of "${mW}".` : "Check Show Docs for what it can return.";
+         iW.add(`${OW} can't use "${mW}" to stop anything. ${PW}`)
```

#### 320. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L7345-L7400` → after: `L9019-L9299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R9019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L9019-L9299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L9019-L9299) · [Before (L7345-L7400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L7345-L7400)

```diff
-     var ay = GB(39167);
-     class ey {
-       constructor(BB) {
-         this.kz = BB, this.meshes = new Map, this.materials = new Map, this.nextKey = 1
-       }
-       create(BB, OB, GB) {
-         const YB = this.nextKey++,
-           DB = this.kz.UP,
-           QB = (0, WB.q)(DB, `gameMesh${YB}`, {
-             positions: BB.positions.slice(),
-             indices: BB.indices.slice(),
-             ...BB.uvs ? {
-               uvs: BB.uvs.slice()
-             } : {}
-           }),
-           oB = this.material(OB);
- ... (40 more removed lines; see GitHub link above)
+   }
+   const EW = WW.trim().replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase().split(/\s+/).map((WW => Object.hasOwn(Oc, WW) ? Oc[WW] : WW)).filter(Boolean).join(" "),
+     NW = null !== (iW = this.namesByLowerCase.get(OW)) && void 0 !== iW ? iW : this.namesByLowerCase.get(EW);
+   if (NW) return {
+     names: [NW],
+     isSure: !0,
+     isDecided: !0
+   };
+   const PW = this.closestItemAndBlockNames(EW),
+     LW = WW => Pc(WW).filter((WW => !Nc.has(WW) && !Mc.has(WW))).map(Lc),
+     cW = 1 === PW.length ? LW(PW[0]) : [];
+   return {
+     names: PW,
+     isSure: 1 === PW.length && LW(EW).every((WW => cW.includes(WW))),
+     isDecided: !1
+   }
+ ... (265 more added lines; see GitHub link above)
```

#### 321. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L7402-L7416` → after: `L9301-L9314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R9301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L9301-L9314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L9301-L9314) · [Before (L7402-L7416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L7402-L7416)

```diff
-         }(BB);
-         let GB = this.materials.get(OB);
-         return GB || (GB = this.cachedMaterial(BB), this.materials.set(OB, GB)), GB.material
-       }
-       cachedMaterial(BB) {
-         switch (BB.kind) {
-           case void 0:
-           case "flatEmissive": {
-             var OB, GB;
-             const YB = this.flatEmissive(BB.rgb, BB.alpha, null !== (OB = BB.opaque) && void 0 !== OB && OB, null !== (GB = BB.onTop) && void 0 !== GB && GB);
-             return {
-               material: YB,
-               dispose: () => {
-                 YB.dispose()
-               }
+         },
+         PW = [],
+         LW = (WW, iW) => {
+           if (TW().isPropertyAssignment(WW) || TW().isShorthandPropertyAssignment(WW)) {
+             const {
+               name: EW
+             } = WW;
+             if ((TW().isIdentifier(EW) || TW().isStringLiteral(EW)) && EW.text === OW) {
+               const LW = WW.parent.properties.some((WW => nO(WW) === mW));
+               PW.push({
+                 edit: NW(EW, TW().isShorthandPropertyAssignment(WW) ? `${mW}: ${OW}` : mW),
+                 depth: iW,
+                 EZ: LW
+               })
```

#### 322. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L7419-L7426` → after: `L9317-L9384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R9317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L9317-L9384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L9317-L9384) · [Before (L7419-L7426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L7419-L7426)

```diff
-           case "chevronPath": {
-             const OB = my(this.kz.UP.JF(), BB.colour, BB.alpha);
-             return {
-               material: OB,
-               dispose: () => {
-                 OB.dispose(!0, !0)
-               }
-             }
+           TW().isFunctionLike(WW) || TW().isCallExpression(WW) || TW().isNewExpression(WW) || TW().isTaggedTemplateExpression(WW) || TW().isPropertyAccessExpression(WW) || TW().isElementAccessExpression(WW) || TW().forEachChild(WW, (OW => {
+             LW(OW, iW + (TW().isPropertyAssignment(WW) ? 1 : 0))
+           }))
+         },
+         cW = Jc(EW, iW);
+       for (const wW of cW)
+         for (const WW of wW.arguments) LW(WW, 0);
+       if (PW.length > 0) {
+         const iW = Math.min(...PW.map((WW => WW.depth)));
+         return eO(WW, PW.flatMap((WW => WW.depth !== iW || WW.EZ ? [] : [WW.edit])))
+       }
+       return eO(WW, cW.flatMap((WW => {
+         const iW = WW.arguments.find((WW => TW().isStringLiteral(WW) && WW.text === OW));
+         return iW ? [NW(iW, mW)] : []
+       })))
+     }(WW, iW.method, iW.from, iW.to);
+ ... (52 more added lines; see GitHub link above)
```

#### 323. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L7428-L7434` → after: `L9386-L9860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R9386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L9386-L9860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L9386-L9860) · [Before (L7428-L7434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L7428-L7434)

```diff
-           case "furnaceFire": {
-             const BB = this.furnaceFire();
-             return {
-               material: BB,
-               dispose: () => {
-                 BB.dispose(!1, !0)
-               }
+           TW().forEachChild(WW, (WW => {
+             PW(WW, cW)
+           }))
+         };
+       return PW(EW, !1), eO(WW, NW)
+     }(WW, OW, mW, "call" === EW);
+     if ("compared" === EW || "comparedBlock" === EW) {
+       const iW = `(["'])${function(WW){return WW.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(OW)}\\1`;
+       return ("comparedBlock" === EW ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${iW}`, `${iW}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${iW}`, `${iW}\\s*[!=]==?`, `\\bcase\\s+${iW}\\s*:`, `\\.includes\\(\\s*${iW}\\s*\\)`]).reduce(((WW, iW) => WW.replace(new RegExp(iW, "g"), … [truncated]
+     }
+     if (void 0 !== NW) {
+       return BW(WW).filter((WW => WW.name === NW && WW.topLevel)).reduceRight(((WW, iW) => WW.slice(0, iW.from) + Cc(WW.slice(iW.from, iW.to), OW, mW) + WW.slice(iW.to)), WW)
+     }
+     return Cc(WW, OW, mW)
+   }), WW)
+ }
+ ... (459 more added lines; see GitHub link above)
```

#### 324. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L7437-L7439` → after: `L9929-L10054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R9929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L9929-L10054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L9929-L10054) · [Before (L7437-L7439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L7437-L7439)

```diff
-         }
-       }
-       furnaceFire() {
+         }), dW.map((iW => nW(iW.name, iW.tier ? LL[iW.tier] : "", {
+           keyId: WW.id,
+           modelId: iW.id
+         }))), HW && WW.models.length > 1 && (0, PW.jsxs)("button", {
+           className: "WorldCodeAiKeyLearnMore WorldCodeAiModelUnfold",
+           "aria-label": `Show all ${jW} models`,
+           onClick: iW => {
+             const OW = iW.currentTarget.closest(".WorldCodeAiModelGroup");
+             TW((iW => new Set(iW).add(WW.id))), setTimeout((() => {
+               var WW;
+               null === OW || void 0 === OW || null === (WW = OW.querySelector("input")) || void 0 === WW || WW.focus()
+             }))
+           },
+           children: ["Show all ", WW.models.length, " models"]
+         })]
+       }, WW.id)
+ ... (110 more added lines; see GitHub link above)
```

#### 325. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L7441-L7445` → after: `L10056-L10100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R10056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L10056-L10100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L10056-L10100) · [Before (L7441-L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L7441-L7445)

```diff
-         const OB = this.kz.UP.JF(),
-           GB = {
-             wrapU: AB.c.clamp,
-             wrapV: AB.c.clamp,
-             hasAlpha: !0
+         null === (WW = jW.current) || void 0 === WW || WW.focus()
+       }))
+     },
+     [kW, sW] = (0, mW.useState)(new Set),
+     [MW, KW] = (0, mW.useState)(null);
+   return (0, PW.jsxs)("div", {
+     className: "WorldCodeAiAiSettings",
+     children: [OW && (0, PW.jsxs)("div", {
+       className: "WorldCodeAiAiSettingsSection",
+       children: [(0, PW.jsx)(mw, {
+         allow: iW,
+         onChange: WW => {
+           tW(null), OW(WW)
+         }
+       }), (0, PW.jsx)("p", {
+         className: "WorldCodeAiAiSettingsNote",
+ ... (29 more added lines; see GitHub link above)
```

#### 326. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L7447-L7463` → after: `L10102-L10118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R10102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L10102-L10118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L10102-L10118) · [Before (L7447-L7463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L7447-L7463)

```diff
-           YB = (0, AB.t)(OB, {
-             url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAYCAYAAADDLGwtAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADUSURBVCiRnVI7DoMwDH1GDKzNyFIOkgNUohKnYWTq2LkHiUSlHqAH6cSYuVs6hHxwAqV9UiQnmGf7+REijLI28f38nMjFBRjaXqPtNX9OE9EIoBFoew2jKl+hdIF91ABE+AEAMDHGmQnHgz2s7yI3RA70 … [truncated]
-             noMipmap: !0,
-             invertY: !1,
-             samplingMode: AB.g.nearest,
-             sets: GB
-           });
-         return null === (BB = this.kz.UP.Dq) || void 0 === BB || BB.prepareTexture(YB), (0, eB.c)({
-           name: "furnaceFire",
-           eq: OB,
-           sets: {
-             ...SB.d,
-             transparencyMode: kB.s.alphaTest,
-             useAlphaFromDiffuseTexture: !0,
-             diffuseTexture: YB,
-             emissiveColor: [1, 1, 1],
- ... (1 more removed lines; see GitHub link above)
+           children: [1 === LW.length ? "Forget your key" : `Forget all ${LW.length} keys`, " in this browser?", (0, PW.jsx)("button", {
+             className: "WorldCodeAiLinkButton WorldCodeAiModelRemove",
+             onClick: () => {
+               ML.removeAll(), xW(!1), tW(null), AW(!0)
+             },
+             children: "Yes"
+           }), (0, PW.jsx)("button", {
+             className: "WorldCodeAiLinkButton",
+             autoFocus: !0,
+             onClick: UW,
+             children: "No"
+           })]
+         }) : (0, PW.jsx)("button", {
+           ref: jW,
+           className: "WorldCodeAiKeyLearnMore",
+           onClick: () => {
+ ... (1 more added lines; see GitHub link above)
```

#### 327. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L7465-L7484` → after: `L10120-L10141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R10120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L10120-L10141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L10120-L10141) · [Before (L7465-L7484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L7465-L7484)

```diff
-           freeze: !1
-         }).mirror
-       }
-       flatEmissive(BB, OB, GB, YB) {
-         const DB = GB ? {} : {
-           alpha: OB,
-           transparencyMode: kB.s.alphaBlend,
-           disableDepthWrite: !0,
-           depthFunction: YB ? kB.h.always : 0
-         };
-         return (0, eB.c)({
-           name: "gameMeshFlatEmissive",
-           eq: this.kz.UP.JF(),
-           sets: {
-             specularColor: [0, 0, 0],
-             diffuseColor: [0, 0, 0],
- ... (4 more removed lines; see GitHub link above)
+           children: "Forget all keys"
+         })
+       }), 0 === LW.length && lW && (0, PW.jsx)("p", {
+         ref: bW,
+         className: "WorldCodeAiAiSettingsNote WorldCodeAiKeyRemoved",
+         tabIndex: -1,
+         children: "All keys forgotten in this browser. Bot.xd answers now. To stop a key working everywhere, delete it on its company's website."
+       }), wW && (0, PW.jsxs)("p", {
+         ref: bW,
+         className: "WorldCodeAiAiSettingsNote WorldCodeAiKeyRemoved",
+         tabIndex: -1,
+         children: [wW.name, " removed.", wW.wasInUse && " Bot.xd answers now.", wW.keyPage && (0, PW.jsxs)(PW.Fragment, {
+           children: [" ", "To stop it working everywhere, delete it on", " ", (0, PW.jsxs)("a", {
+             href: wW.keyPage,
+             target: "_blank",
+             rel: "noreferrer noopener",
+ ... (6 more added lines; see GitHub link above)
```

#### 328. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L7486-L7642` → after: `L10143-L10196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R10143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L10143-L10196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L10143-L10196) · [Before (L7486-L7642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L7486-L7642)

```diff
-           freeze: !0
-         }).mirror
-       }
-     }
-     var Ty = GB(39830);
-     const by = [0, 0, 0];
-     class Cy {
-       constructor(BB) {
-         this.kz = BB, this.pools = new Set, this.ctx = {
-           budget: 0,
-           frame: 0,
-           lit: !1
-         }, this.onBeforeRender = () => {
-           const {
-             ctx: BB
-           } = this;
- ... (141 more removed lines; see GitHub link above)
+           children: "Undo"
+         })]
+       }), (0, PW.jsx)(Zw, {
+         labelledBy: "WorldCodeAiModelTitle",
+         onPicked: () => {
+           tW(null), KW(null)
+         },
+         canRename: !0,
+         onEdit: NW,
+         refreshingIds: kW,
+         keyNote: MW,
+         onRefresh: WW => {
+           (async WW => {
+             const iW = CP(WW.provider, WW.baseUrl, !0);
+             sW((iW => new Set(iW).add(WW.id))), KW(null);
+             try {
+ ... (38 more added lines; see GitHub link above)
```

#### 329. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L7644-L7656` → after: `L10198-L10243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R10198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L10198-L10243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L10198-L10243) · [Before (L7644-L7656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L7644-L7656)

```diff
-         OB.splice(0, GB)
-       }
-       onBuilt(BB, OB, GB) {
-         const YB = this.kz.UP.kF;
-         if (this.Vp) return void YB.delete(OB);
-         const {
-           scale: DB,
-           yaw: QB
-         } = this.model;
-         YB.setScale(OB, DB, DB, DB), YB.setRotationEulerY(OB, QB), this.ids[BB] = OB, this.state[BB] = 3, this.shown[BB] = 0, this.place(BB, {
-           budget: 0,
-           frame: GB,
-           lit: this.kz.UP.wq
+       })]
+     }), (0, PW.jsx)(bw, {})]
+   })
+ }
+ const Uw = ["anthropic", "openai", "gemini", "openrouter"];
+ 
+ function kw(WW) {
+   let {
+     provider: iW,
+     children: OW
+   } = WW;
+   return (0, PW.jsx)("a", {
+     href: vP[iW].keyPage,
+     target: "_blank",
+     rel: "noreferrer noopener",
+     children: OW
+ ... (30 more added lines; see GitHub link above)
```

#### 330. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L7659-L7845` → after: `L10246-L10355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R10246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L10246-L10355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L10246-L10355) · [Before (L7659-L7845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L7659-L7845)

```diff
-       sweepLight(BB) {
-         const {
-           count: OB
-         } = this;
-         if (0 !== OB)
-           for (let GB = Math.ceil(OB / 30); GB > 0; GB--) {
-             const GB = this.sweep = (this.sweep + 1) % OB;
-             this.shown[GB] && BB.frame - this.litFrame[GB] >= 30 && this.relight(GB, BB.frame, !1)
-           }
-       }
-     }
-     class vy {
-       constructor(BB) {
-         this.kz = BB, this.gameFar = null, this.engineFar = 0
-       }
-       set(BB) {
- ... (171 more removed lines; see GitHub link above)
+     }), [EW]), "custom" === OW) return (0, PW.jsx)("div", {
+     className: "WorldCodeAiKeyExplainer",
+     children: (0, PW.jsx)("p", {
+       className: "WorldCodeAiAiSettingsNote",
+       children: "Paste the key for that server, or leave it empty if it doesn't need one. It goes only to that server, never to Bloxd."
+     })
+   });
+   const cW = OW ? vP[OW] : null;
+   return (0, PW.jsxs)("div", {
+     className: "WorldCodeAiKeyExplainer",
+     children: [(0, PW.jsxs)("ul", {
+       ref: LW,
+       id: "WorldCodeAiKeyExplainerLines",
+       className: "WorldCodeAiKeyExplainerLines",
+       children: [(0, PW.jsx)("li", {
+         children: cW ? `An API key works like a password for ${cW.shortName}'s AI (it isn't your ${cW.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
+ ... (94 more added lines; see GitHub link above)
```

#### 331. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L7847-L7866` → after: `L10357-L10397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R10357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L10357-L10397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L10357-L10397) · [Before (L7847-L7866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L7847-L7866)

```diff
-         const GB = this.kz.UP.kF;
-         if (!(this.visible && this.posed)) return void(this.needsPlace && (GB.Zk(this.id, !1), this.needsPlace = !1));
-         const {
-           offset: YB
-         } = BB, {
-           placedOffset: DB
-         } = this, QB = YB[0] !== DB[0] || YB[1] !== DB[1] || YB[2] !== DB[2], oB = null === (OB = this.cosmetic) || void 0 === OB ? void 0 : OB.perch;
-         if (this.needsPlace || QB || null !== oB && void 0 !== oB && oB.moving()) {
-           if (DB[0] = YB[0], DB[1] = YB[1], DB[2] = YB[2], oB) {
-             oB.place(this.pos, this.yaw + this.yawOffset, this.yawOffset);
-             const {
-               drawnPos: BB,
-               drawnRotation: OB
-             } = oB;
-             GB.setPosition(this.id, BB.x - YB[0], BB.y - YB[1], BB.z - YB[2]), GB.setRotation(this.id, OB.x, OB.y, OB.z, OB.w)
-           } else {
- ... (4 more removed lines; see GitHub link above)
+         if (!xW || !dW) return;
+         const iW = ML.addKey({
+           provider: xW,
+           key: TW(xW),
+           baseUrl: "custom" === xW && null !== (WW = fP(KW)) && void 0 !== WW ? WW : void 0,
+           models: dW
+         }, vW, null === cW || void 0 === cW ? void 0 : cW.id);
+         ("" !== HW.trim() || cW) && ML.renameKey(iW, HW), wW()
+       })() : (async () => {
+         const iW = VP(jW);
+         UW(iW), XW(null);
+         const OW = null !== xW && void 0 !== xW ? xW : pP(iW),
+           mW = TW(OW, iW);
+         if ("" === mW && "custom" !== OW) return void fW("Paste your key first.");
+         if (!OW) return void fW("Pick the company your key is from.");
+         const EW = "custom" === OW ? fP(KW) : null;
+ ... (25 more added lines; see GitHub link above)
```

#### 332. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L7868-L7877` → after: `L10399-L10513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R10399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L10399-L10513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L10399-L10513) · [Before (L7868-L7877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L7868-L7877)

```diff
-         this.playing && GB.getNodeActuallyVisible(this.id, 0) && this.playing.write(GB, this.id, BB.timeS), BB.lit && (this.needsRelight || BB.frame - this.litFrame >= 60) && (this.needsRelight = !1, this.litFrame = BB.frame, this.relight())
-       }
-       relight() {
-         const [BB, OB, GB] = this.pos, YB = (0, xB.h)(this.kz, [BB, OB + .25, GB]), {
-           light: DB
-         } = this;
-         let QB = !1;
-         for (let oB = 0; oB < 4; oB++) {
-           const BB = Math.fround(YB[oB]);
-           DB[oB] !== BB && (DB[oB] = BB, QB = !0)
+       })()
+     },
+     children: [(0, PW.jsxs)("label", {
+       className: "WorldCodeAiAddKeyField",
+       children: [(0, PW.jsx)("span", {
+         children: "Company"
+       }), (0, PW.jsxs)("select", {
+         className: "WorldCodeAiAddKeyInput WorldCodeAiAddKeyCompany",
+         value: null !== xW && void 0 !== xW ? xW : "",
+         onChange: WW => {
+           lW(WW.target.value), bW(!0), oW(!1), IW()
+         },
+         onKeyDown: Sw,
+         children: [null === xW && (0, PW.jsx)("option", {
+           value: "",
+           disabled: !0,
+ ... (99 more added lines; see GitHub link above)
```

#### 333. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L7879-L7941` → after: `L10515-L10551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R10515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L10515-L10551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L10515-L10551) · [Before (L7879-L7941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L7879-L7941)

```diff
-         QB && this.writeLight(DB)
-       }
-     }
-     var MJ = GB(39403);
-     const PJ = 1 / .6,
-       zJ = ["..1111..", ".122221.", "12222221", "12222221", "12222221", "12222221", ".122221.", "..1111.."];
-     class lJ extends MJ.e {
-       constructor(BB) {
-         super(), this.CP = BB, this.queue = void 0, this.length = 0, this.cursor = 0, this.speed = 0, this.queue = new Float32Array(4 * BB)
-       }
-       push(BB, OB, GB, YB) {
-         const DB = 4 * this.length;
-         this.queue[DB] = BB, this.queue[DB + 1] = OB, this.queue[DB + 2] = GB, this.queue[DB + 3] = YB, this.length++
-       }
-       startPositionFunction(BB, OB, GB, YB) {
-         if (this.cursor >= this.length) return this.speed = 0, void vB.Xp.TransformCoordinatesFromFloatsToRef(0, -1e3, 0, BB, OB);
- ... (47 more removed lines; see GitHub link above)
+       }, WW.id))), (0, PW.jsx)("button", {
+         type: "button",
+         className: "WorldCodeAiKeyLearnMore",
+         onClick: () => {
+           oW(!0), IW()
+         },
+         children: "Type a model name yourself"
+       })]
+     }), dW && (0, PW.jsxs)("label", {
+       className: "WorldCodeAiAddKeyField",
+       children: [(0, PW.jsx)("span", {
+         children: "Name it (optional)"
+       }), (0, PW.jsx)("input", {
+         className: "WorldCodeAiAddKeyInput WorldCodeAiAddKeyName",
+         value: HW,
+         maxLength: 30,
+ ... (21 more added lines; see GitHub link above)
```

#### 334. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L7943-L7976` → after: `L10553-L10608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R10553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L10553-L10608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L10553-L10608) · [Before (L7943-L7976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L7943-L7976)

```diff
-         this.system.manualEmitCount = YB.length, this.emitted()
-       }
-       setDirections(BB, OB) {
-         this.box.direction1.set(BB[0], BB[1], BB[2]), this.box.direction2.set(OB[0], OB[1], OB[2])
-       }
-       stop() {
-         this.stopped || (this.stopped = !0, this.system.emitRate = 0, this.idle ? this.dispose() : (this.system.manualEmitCount > 0 ? (this.system.disposeOnStop = !0, this.stopAfterLifetime()) : (this.clearStopTimer(), this.system.stop()), this.running = !1))
-       }
-       dispose() {
-         this.freed || (this.freed = !0, this.stopped = !0, this.clearStopTimer(), this.system.onAnimationEnd = null, this.system.disposeOnStop = !1, this.system.dispose(!1), this.onFree(this))
-       }
-       useBox() {
-         this.system.particleEmitterType !== this.box && (this.system.particleEmitterType = this.box, this.system.emitter = this.boxAt)
-       }
-       start() {
-         this.running || (this.system.start(), this.running = !0, this.idle = !1)
- ... (18 more removed lines; see GitHub link above)
+       }), (0, PW.jsx)("button", {
+         type: "submit",
+         className: "WorldCodeAiPrimaryButton WorldCodeAiAddKeySave",
+         disabled: DW,
+         children: DW ? BW ? "Testing the connection\u2026" : "Testing your key\u2026" : aW ? `Save and use ${aW.name}` : BW ? "Test connection" : "Test key"
+       })]
+     })]
+   })
+ }
+ var yw = OW(1172),
+   Tw = OW(38039),
+   Jw = OW(38030);
+ 
+ function hw(WW) {
+   let {
+     step: iW,
+ ... (40 more added lines; see GitHub link above)
```

#### 335. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L7978-L7985` → after: `L10610-L10665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R10610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L10610-L10665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L10610-L10665) · [Before (L7978-L7985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L7978-L7985)

```diff
-     class NJ {
-       constructor(BB) {
-         this.kz = BB, this.live = new Set, this.textures = new Map
-       }
-       enabled() {
-         return this.kz.UP.JF().particlesEnabled
-       }
-       create(BB, OB) {
+     nw(WW)
+   }
+ }
+ 
+ function nw(WW) {
+   const iW = WW.getBoundingClientRect().top;
+   for (const OW of Array.from(WW.querySelectorAll(".WorldCodeAiModelGroup"))) {
+     const WW = OW.querySelector(".WorldCodeAiModelGroupHeader");
+     if (!WW) continue;
+     const mW = iW + WW.offsetHeight,
+       EW = Array.from(OW.querySelectorAll(".WorldCodeAiModelRow")).some((WW => WW.getBoundingClientRect().bottom > mW + 2));
+     WW.classList.toggle("Unpinned", !EW)
+   }
+ }
+ 
+ function uw(WW) {
+ ... (40 more added lines; see GitHub link above)
```

#### 336. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L7987-L8029` → after: `L10667-L10793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R10667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L10667-L10793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L10667-L10793) · [Before (L7987-L8029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L7987-L8029)

```diff
-         const YB = "string" === typeof BB.texture ? BB.texture : BB.texture.kind,
-           DB = this.kz.UP.gL(`game|${YB}`, BB.CP);
-         DB.texture = this.texture(BB.texture, null === (GB = BB.mipmaps) || void 0 === GB || GB), (0, pJ.d)(DB, BB);
-         const QB = new ZJ(this.kz, DB, BB, OB, (BB => {
-           this.live.delete(BB)
-         }));
-         return this.live.add(QB), QB
-       }
-       playEffect(BB) {
-         (0, IB.r)(this.kz, BB)
-       }
-       burstPreset(BB, OB, GB) {
-         "critical" === BB && (0, IB.o)(this.kz, IB.s, [OB[0], OB[1], OB[2]], GB)
-       }
-       disposeAll() {
-         for (const BB of this.live) BB.dispose();
- ... (27 more removed lines; see GitHub link above)
+         null !== (iW = AW.current) && void 0 !== iW && iW.contains(WW.target) || lW(!1)
+       },
+       LW = WW => {
+         "Escape" === WW.key && (WW.stopPropagation(), WW.preventDefault(), xw.close() || UW())
+       };
+     return document.addEventListener("pointerdown", PW), document.addEventListener("keydown", LW, !0), () => {
+       null === mW || void 0 === mW || mW.removeEventListener("scroll", NW), document.removeEventListener("pointerdown", PW), document.removeEventListener("keydown", LW, !0)
+     }
+   }), [xW]);
+   const kW = EW && null !== wW,
+     sW = kW ? "Bot.xd (free) \xb7 once" : wW ? uw(wW) : ZW ? TL : "Bot.xd (free)";
+   return (0, PW.jsxs)("div", {
+     ref: AW,
+     className: "WorldCodeAiModelChipRow",
+     onBlur: WW => {
+       var iW;
+ ... (111 more added lines; see GitHub link above)
```

#### 337. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L8031-L8074` → after: `L10795-L10847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R10795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L10795-L10847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L10795-L10847) · [Before (L8031-L8074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L8031-L8074)

```diff
-     const RJ = 1 / 3;
-     class WJ {
-       constructor(BB) {
-         this.kz = BB, this.node = null, this.material = null, this.look = "", this.offset = 0, this.slide = BB => {
-           this.offset = (this.offset + Math.min(BB, 250) / 1e3 * 1.2 * RJ) % 1, (0, SB.z)(this.material, -this.offset)
-         }
-       }
-       set(BB) {
-         if (this.clear(), !BB || 0 === BB.cells.length) return;
-         const OB = this.kz.UP,
-           GB = (0, WB.q)(OB, "routeChevrons", function(BB) {
-             const [OB, GB, YB] = BB[0].pos, DB = [], QB = [], oB = [];
-             return BB.forEach(((BB, jB) => {
-               let {
-                 pos: yB,
-                 way: [JB, MB]
- ... (28 more removed lines; see GitHub link above)
+     let WW = mW;
+     for (; WW + 1 < EW.length && "same" === EW[WW + 1].kind;) WW++;
+     const iW = EW.slice(mW, WW + 1),
+       OW = 0 === mW ? 0 : 2,
+       NW = WW === EW.length - 1 ? 0 : 2;
+     iW.length > OW + NW + 1 ? LW.push(...iW.slice(0, OW), {
+       kind: "fold",
+       count: iW.length - OW - NW
+     }, ...iW.slice(iW.length - NW)) : LW.push(...iW), mW = WW
+   }
+   return (0, PW.jsx)("pre", {
+     className: "WorldCodeAiDiff",
+     children: LW.map(((WW, iW) => {
+       if ("fold" === WW.kind) return (0, PW.jsxs)("div", {
+         className: "WorldCodeAiDiffFold",
+         children: ["\u22ef ", WW.count, " unchanged lines"]
+ ... (37 more added lines; see GitHub link above)
```

#### 338. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L8077-L8087` → after: `L10850-L11221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R10850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L10850-L11221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L10850-L11221) · [Before (L8077-L8087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L8077-L8087)

```diff
-     var AJ = GB(39843);
-     class VJ {
-       constructor(BB) {
-         this.particles = void 0, this.meshes = void 0, this.pools = void 0, this.routeChevrons = void 0, this.entityPresentation = void 0, this.mobModels = void 0, this.cameraFar = void 0, this.cameraTurn = new AJ.e((() => Qy.e.get("forcedCameraDirectionTransitionMs")), (BB => {
-           Qy.e.apply(BB)
-         })), this.particles = new NJ(BB), this.meshes = new ey(BB), this.pools = new Cy(BB), this.routeChevrons = new WJ(BB), this.entityPresentation = new hy(BB), this.mobModels = new yJ(BB), this.cameraFar = new vy(BB)
-       }
-       hasPackModel(BB) {
-         return Boolean(qB.c.getModelOverride(BB))
-       }
-       setGroundArrowStyle(BB) {
+   }
+ }
+ 
+ function Vw(WW) {
+   return Array.isArray(WW) && WW.every((WW => {
+     if ("object" !== typeof WW || null === WW || !("id" in WW) || !("at" in WW) || !("label" in WW) || !("files" in WW)) return !1;
+     const iW = WW.files;
+     return "object" === typeof iW && null !== iW && Object.values(iW).every((WW => "string" === typeof WW))
+   }))
+ }
+ 
+ function pw(WW, iW) {
+   return iW ? function(WW, iW) {
+     if (!iW) return [...WW];
+     const OW = new Map;
+     for (const mW of [...iW, ...WW]) OW.set(mW.id, mW);
+ ... (356 more added lines; see GitHub link above)
```

#### 339. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L8089-L8160` → after: `L11223-L11259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R11223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L11223-L11259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L11223-L11259) · [Before (L8089-L8160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L8089-L8160)

```diff
-       }
-       disposeAll() {
-         const BB = [() => {
-           this.particles.disposeAll()
-         }, () => {
-           this.meshes.disposeAll()
-         }, () => {
-           this.pools.disposeAll()
-         }, () => {
-           this.routeChevrons.disposeAll()
-         }, () => {
-           this.entityPresentation.restoreAll()
-         }, () => {
-           this.setGroundArrowStyle(null)
-         }, () => {
-           this.mobModels.disposeAll()
- ... (56 more removed lines; see GitHub link above)
+       },
+       children: mW < OW ? `Build step ${OW+1} anyway` : `Build step ${OW+1}`
+     }), OW < iW.length && OW > 0 && mW >= OW && (0, PW.jsx)("span", {
+       className: "WorldCodeAiHint",
+       children: "Try each step in your world before the next."
+     }), OW === iW.length && (0, PW.jsx)("span", {
+       className: "WorldCodeAiHint",
+       children: "Every step is asked for."
+     })]
+   })
+ }
+ 
+ function rw(WW, iW, OW) {
+   return `${WW}\n\nYou asked me: "${iW}" ${null===OW?"I don't mind: choose what works best.":`My answer: ${OW.replace(/\.$/,"")}.`} Build it now, without asking again.`
+ }
+ 
+ ... (21 more added lines; see GitHub link above)
```

#### 340. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L8162-L8227` → after: `L11261-L11344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R11261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L11261-L11344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L11261-L11344) · [Before (L8162-L8227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L8162-L8227)

```diff
-           of this.iterate(!0)) {
-           BB(OB, GB, YB, DB) && this.remove(OB, GB, YB)
-         }
-       }
-       unbox(BB) {
-         return this.hasBoxes && IJ(BB) ? BB.val : BB
-       }* iterate(BB) {
-         const OB = this.mutationCount;
-         for (const GB of FJ(this.zeroStorage)) {
-           if (!this.zeroStorage.has(GB)) continue;
-           const YB = this.zeroStorage.get(GB);
-           if (this.hasBoxes && IJ(YB) ? yield {
-               x: YB.x,
-               y: YB.y,
-               z: YB.z,
-               val: YB.val
- ... (50 more removed lines; see GitHub link above)
+         }, WW)))
+       }), iW.allowOther && EW && (0, PW.jsx)("span", {
+         className: "WorldCodeAiHint",
+         children: "Or type your own answer in the box below."
+       }), iW.allowOther && !EW && (0, PW.jsxs)("form", {
+         className: "WorldCodeAiQuestionOther",
+         onSubmit: WW => {
+           WW.preventDefault(), "" !== NW.trim() && OW(NW.trim(), !0)
+         },
+         children: [(0, PW.jsx)("input", {
+           className: "WorldCodeAiInput",
+           value: NW,
+           maxLength: 200,
+           placeholder: "Or type your own answer",
+           "aria-label": "Your own answer",
+           onChange: WW => {
+ ... (68 more added lines; see GitHub link above)
```

#### 341. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L8229-L8231` → after: `L11346-L11404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R11346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L11346-L11404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L11346-L11404) · [Before (L8229-L8231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L8229-L8231)

```diff
-     class uJ {
-       constructor(BB, OB, GB, YB) {
-         this.x = BB, this.y = OB, this.z = GB, this.val = YB, mJ.add(this)
+   }
+   return OW
+ }
+ 
+ function it(WW) {
+   const iW = function(WW) {
+     Fw.lastIndex = 0;
+     for (let iW = Fw.exec(WW); iW; iW = Fw.exec(WW))
+       if (!Qw(WW, iW.index)) return iW;
+     return null
+   }(WW);
+   if (!iW) return [];
+   const OW = function(WW, iW) {
+     const OW = [];
+     let mW = 0,
+       EW = iW;
+ ... (43 more added lines; see GitHub link above)
```

#### 342. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L8234-L8245` → after: `L11711-L11843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R11711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L11711-L11843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L11711-L11843) · [Before (L8234-L8245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L8234-L8245)

```diff
-     const mJ = new WeakSet;
- 
-     function IJ(BB) {
-       return "object" === typeof BB && null !== BB && mJ.has(BB)
-     }
- 
-     function FJ(BB) {
-       return Array.from(BB.keys()).sort(((BB, OB) => BB - OB))
-     }
-     class iJ extends Error {
-       constructor() {
-         super(`${dJ.name} has been mutated during iteration`)
+     mW.push({
+       removed: [],
+       added: OW[NW++].lines
+     })
+   }
+   const LW = [];
+   for (const cW of mW) {
+     const WW = LW[LW.length - 1],
+       iW = [...cW.removed, ...cW.added].every(Ut);
+     WW && (iW || [...WW.removed, ...WW.added].every(Ut)) ? LW[LW.length - 1] = {
+       removed: [...WW.removed, ...cW.removed],
+       added: [...WW.added, ...cW.added]
+     } : LW.push(cW)
+   }
+   return LW.every((WW => kt(WW.removed) && kt(WW.added))) ? LW : [WW]
+ }
+ ... (117 more added lines; see GitHub link above)
```

#### 343. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L8248-L8263` → after: `L12069-L12104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12069-L12104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L12069-L12104) · [Before (L8248-L8263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L8248-L8263)

```diff
-     class LJ {
-       constructor() {
-         this.cache = new dJ
-       }
-       getCachedPasskeyForChest(BB) {
-         var OB, GB, YB;
-         const DB = this.cache.get(BB[0], BB[1], BB[2]);
-         if (!DB) return null;
-         const QB = (0, CB.d)().blockDataOwner.getBlockData(BB[0], BB[1], BB[2]),
-           oB = null !== (OB = null === QB || void 0 === QB || null === (GB = QB.persisted) || void 0 === GB || null === (YB = GB.shared) || void 0 === YB ? void 0 : YB.passkeyLastUpdated) && void 0 !== OB ? OB : 0;
-         return DB.lastOpened < oB ? (this.cache.remove(BB[0], BB[1], BB[2]), null) : [...DB.passkeyOnLastOpen]
-       }
-       onChestOpened(BB, OB) {
-         this.cache.set(BB[0], BB[1], BB[2], {
-           passkeyOnLastOpen: [...OB],
-           lastOpened: Date.now()
+   }
+   for (const NW of WW.matchAll(/\bnow ([a-z]{2,}s)\b/g)) {
+     const iW = Math.max(WW.lastIndexOf(".", NW.index), WW.lastIndexOf("\n", NW.index)) + 1,
+       PW = /[.!?](?=\s|$)|\n/.exec(WW.slice(NW.index)),
+       LW = WW.slice(iW, PW ? NW.index + PW.index : WW.length),
+       cW = mW.some((WW => NW.index < WW.at + WW.length && WW.at < NW.index + NW[0].length)),
+       wW = gt.test(WW.slice(iW, NW.index));
+     vt.has(NW[1]) || wW || OW(NW.index) || pt.test(LW) || cW || mW.push({
+       at: NW.index,
+       length: NW[0].length,
+       words: `will ${EW=NW[1],"has"===EW?"have":EW.endsWith("ies")?`${EW.slice(0,-3)}y`:/(?:ch|sh|x|zz|o|ss)es$/.test(EW)?EW.slice(0,-2):EW.slice(0,-1)}`
+     })
+   }
+   var EW;
+   return mW.sort(((WW, iW) => iW.at - WW.at)).reduce(((WW, iW) => WW.slice(0, iW.at) + iW.words + WW.slice(iW.at + iW.length)), WW)
+ }
+ ... (20 more added lines; see GitHub link above)
```

#### 344. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L8267-L8292` → after: `L12110-L12226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12110-L12226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L12110-L12226) · [Before (L8267-L8292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L8267-L8292)

```diff
-     var gJ = GB(39849),
-       rJ = GB(39876),
-       XJ = GB(39879),
-       wJ = GB(4848),
-       EJ = GB(4912),
-       cJ = GB(1338),
-       hJ = GB(39886),
-       aJ = GB(4859),
-       eJ = GB(4820);
-     class TJ {
-       constructor(BB) {
-         this.kz = BB, this.temporaryThirdPersonTimeout = null, this.startedTemporaryThirdPersonFromFirstPerson = !1, this.locked = !1, this.lockedZoom = 0, this.deferredZoom = null, this.deferredThirdPersonEndsAt = null, this.kz.camera.W8 = (BB, OB) => {
-           const GB = this.kz.camera.K4;
-           this.kz.DW.MYB(this.kz.EX).cameraZoomChanged(OB, BB), 0 !== GB && 0 === this.kz.camera.K4 && this.disableFrontFacing()
-         };
-         const OB = ZB.o.subscribe("SwapCameraZoom", (() => {
- ... (10 more removed lines; see GitHub link above)
+   }, jW = () => {
+     if (null !== LW)
+       if ("number" === OW.kind) {
+         const WW = Number(LW.trim());
+         if ("" === LW.trim() || !Number.isFinite(WW)) return tW("That needs to be a number."), void cW(null);
+         bW(WW)
+       } else bW(LW)
+   }, UW = `WorldCodeAiSetting-${iW}-${OW.key}`;
+   return (0, PW.jsxs)("li", {
+     ref: AW,
+     className: "WorldCodeAiSetting",
+     children: [(0, PW.jsxs)("label", {
+       className: "WorldCodeAiSettingLabel",
+       htmlFor: UW,
+       children: [ZW, OW.comment && (0, PW.jsx)("code", {
+         children: OW.key
+ ... (101 more added lines; see GitHub link above)
```

#### 345. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L8294-L8316` → after: `L12228-L12442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12228-L12442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L12228-L12442) · [Before (L8294-L8316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L8294-L8316)

```diff
-           applyDeferred: OB = !0
-         } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-         if (BB === this.locked) return;
-         if (BB) return this.endTemporaryThirdPerson(), this.disableFrontFacing(), this.lockedZoom = this.kz.camera.K4, void(this.locked = !0);
-         this.locked = !1;
-         const GB = this.deferredZoom,
-           YB = this.deferredThirdPersonEndsAt;
-         if (this.deferredZoom = null, this.deferredThirdPersonEndsAt = null, OB && (GB && (GB.validated ? this.setCameraZoom(GB.zoom) : this.setCameraZoomNoValidation(GB.zoom)), null !== YB)) {
-           const BB = YB - performance.now();
-           BB > 0 && this.applyTemporaryThirdPerson(BB === 1 / 0 ? void 0 : BB)
-         }
-       }
-       getZoomDistance() {
-         var BB, OB;
-         return this.locked ? null !== (BB = null === (OB = this.deferredZoom) || void 0 === OB ? void 0 : OB.zoom) && void 0 !== BB ? BB : this.lockedZoom : this.kz.camera.K4
-       }
- ... (7 more removed lines; see GitHub link above)
+           path: iW,
+           fields: mW
+         } = WW;
+         return (0, PW.jsxs)("div", {
+           children: [LW.length > 1 && (0, PW.jsx)("p", {
+             className: "WorldCodeAiAboutHeading",
+             children: iW
+           }), (0, PW.jsx)("ul", {
+             className: "WorldCodeAiSettingList",
+             children: mW.map((WW => {
+               const mW = void 0 === (null === NW || void 0 === NW ? void 0 : NW[iW]) ? void 0 : it(NW[iW]).find((iW => iW.key === WW.key));
+               return (0, PW.jsx)(Xt, {
+                 isChanged: !!NW && (null === mW || void 0 === mW ? void 0 : mW.value) !== WW.value,
+                 path: iW,
+                 field: WW,
+                 onWrite: OW
+ ... (199 more added lines; see GitHub link above)
```

#### 346. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L8318-L8320` → after: `L12444-L12745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12444-L12745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L12444-L12745) · [Before (L8318-L8320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L8318-L8320)

```diff
-           void 0 !== BB && (this.temporaryThirdPersonTimeout = setTimeout((() => {
-             this.endTemporaryThirdPerson()
-           }), BB))
+         })))
+       };
+     if (NW) return PW("sent"), void window.open(mW, "_blank", "noopener");
+     navigator.clipboard.writeText(iW).then((() => {
+       PW("copied")
+     }), (WW => {
+       console.error("Couldn't copy the ChatGPT prompt", WW), PW("notCopied")
+     }))
+   };
+   return (0, PW.jsxs)(PW.Fragment, {
+     children: [(0, PW.jsx)("button", {
+       className: "WorldCodeAiPrimaryButton",
+       ...(0, OZ.getAnalyticsClickAttributes)({
+         id: "ai_helper.ask_chatgpt"
+       }),
+       onClick: () => {
+ ... (286 more added lines; see GitHub link above)
```

#### 347. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L8322-L8330` → after: `L12747-L12883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12747-L12883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L12747-L12883) · [Before (L8322-L8330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L8322-L8330)

```diff
-       }
-       endTemporaryThirdPerson() {
-         this.deferredThirdPersonEndsAt = null, null !== this.temporaryThirdPersonTimeout && (clearTimeout(this.temporaryThirdPersonTimeout), this.temporaryThirdPersonTimeout = null), this.startedTemporaryThirdPersonFromFirstPerson && this.setCameraZoomNoValidation(0), this.starte … [truncated]
-       }
-       handleZoomKeyPressed() {
-         this.kz.xR.canUseZoomKey || ZB.o.tM("showBottomMessage", {
-           message: "Zoom is disabled",
-           timeoutLength: 2e3,
-           type: "Error"
+         of xW) {
+         const WW = (0, YW.c)(mc, iW),
+           OW = void 0 !== WW && PW.includes(WW) && !wW.some((OW => OW.name === WW || OW.name !== iW && (0, YW.c)(mc, OW.name) === WW));
+         let mW;
+         void 0 !== EW && LW.getTypeAtLocation(EW).getCallSignatures().length > 0 || PW.includes(iW) || (mW = OW ? `"${WW}"` : dZ(iW, PW)), cW.add(`${NW} has no setting called "${iW}".${mW?` Did you mean ${mW}?`:lW}`)
+       }
+       continue
+     }
+     const fW = null !== (AW = null === tW || void 0 === tW ? void 0 : tW.initializer) && void 0 !== AW ? AW : EW,
+       CW = fW && TW().isExpression(fW) ? LW.getContextualType(fW) : void 0;
+     if (fW && Em(fW, CW, PW, LW)) continue;
+     const XW = (null !== (DW = CW) && void 0 !== DW && DW.isUnion() ? DW.types : DW ? [DW] : []).filter((WW => WW.isStringLiteral())).map((WW => WW.value)),
+       BW = iW.includes("keyof ") ? "setting" : "name",
+       qW = null !== (bW = null === fW || void 0 === fW ? void 0 : fW.getText(PW)) && void 0 !== bW ? bW : ZW,
+       RW = XW.length > 0 ? null === (jW = /^CONFIG\.([\w$]+)$/.exec(qW)) || void 0 === jW ? void 0 : jW[1] : void 0;
+     if (void 0 !== RW) {
+ ... (121 more added lines; see GitHub link above)
```

#### 348. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L8333-L8381` → after: `L12886-L12931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12886-L12931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L12886-L12931) · [Before (L8333-L8381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L8333-L8381)

```diff
-       handleScrollZoom(BB) {
-         this.locked || this.changeCameraZoom(BB)
-       }
-       setCameraZoom(BB) {
-         if (this.locked) return void(this.deferredZoom = {
-           zoom: BB,
-           validated: !0
-         });
-         const OB = BB - this.kz.camera.K4;
-         this.changeCameraZoom(OB)
-       }
-       setCameraZoomNoValidation(BB) {
-         if (this.locked) return void(this.deferredZoom = {
-           zoom: BB,
-           validated: !1
-         });
- ... (33 more removed lines; see GitHub link above)
+       TW().forEachChild(WW, PW)
+     };
+   PW(iW);
+   const LW = new Set;
+   return NW.flatMap((WW => {
+     if (EW.has(WW.name) || LW.has(WW.name)) return [];
+     LW.add(WW.name);
+     return [`Line ${iW.getLineAndCharacterOfPosition(WW.at).line+1} uses "CONFIG.${WW.name}", but CONFIG has no ${WW.name}, so it is undefined there. Add ${WW.name} to CONFIG.`]
+   }))
+ }
+ 
+ function qZ(WW, iW) {
+   var OW;
+   const mW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && !(void 0 !== iW.path && (0, bW.e)(iW.path)),
+     EW = !0 === (null === (OW = iW.path) || void 0 === OW ? void 0 : OW.endsWith(".ts")),
+     NW = iW => [...WW.codeWarnings(iW, mW), ...vZ(iW, mW, EW), ...DZ(iW), ...BZ(iW)],
+ ... (30 more added lines; see GitHub link above)
```

#### 349. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L8383` → after: `L12933-L12945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12933-L12945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L12933-L12945) · [Before (L8383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L8383)

```diff
-           "mouse" !== BB.pointerType ? "pen" !== BB.pointerType && !BM(BB) || !this.kz.container.element.contains(BB.target) || (0, bJ.f)(BB.target) || null === (OB = this.tapListener) || void 0 === OB || OB.call(this, BB.clientX, BB.clientY) : this.followPoint(BB.clientX, BB.cli … [truncated]
+           OW(null !== (WW = EW.error) && void 0 !== WW ? WW : new Error("IndexedDB didn't open"))
+         }, EW.onblocked = () => {
+           OW(new Error("IndexedDB is blocked"))
+         }
+       })).catch((WW => {
+         throw mW = null, WW
+       })), mW),
+       NW = async WW => {
+         try {
+           return (await EW()).transaction(dw, WW)
+         } catch (iW) {
+           if ("indexedDB" !== OW) throw iW;
+           return mW = null, (await EW()).transaction(dw, WW)
```

#### 350. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L8385-L8524` → after: `L12947-L12951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12947-L12951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L12947-L12951) · [Before (L8385-L8524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L8385-L8524)

```diff
-       }
-       setActive(BB) {
-         BB !== this.active && (this.active = BB, this.kz.container.yE(!BB), BB ? (window.addEventListener("pointermove", this.onPointerMove), window.addEventListener("pointerdown", this.onPointerDown), this.pointerLockWrapper.requestFreeCursor(xJ)) : (window.removeEventListener(" … [truncated]
-       }
-       isInGame() {
-         return this.pointerLockWrapper.isInGame()
-       }
-       copyScreenPoint(BB) {
-         return this.hasPoint && this.toCanvasNdc(this.clientX, this.clientY, BB)
-       }
-       tapToScreenPoint(BB, OB, GB) {
-         return this.hasPoint = !1, this.toCanvasNdc(BB, OB, GB)
-       }
-       toCanvasNdc(BB, OB, GB) {
-         const YB = this.kz.container.canvas.getBoundingClientRect();
-         return function(BB, OB, GB, YB, DB) {
- ... (124 more removed lines; see GitHub link above)
+       }, PW = async () => {
+         if ("unknown" === OW) try {
+           await EW(), OW = "indexedDB"
+         } catch {
+           OW = "fallback"
```

#### 351. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L8526-L8557` → after: `L12953-L12971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12953-L12971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L12953-L12971) · [Before (L8526-L8557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L8526-L8557)

```diff
-       }
-       tickMovement(BB) {
-         var OB;
-         if ((null === (OB = this.kz.bloxd.client) || void 0 === OB || !OB.isReplayMode()) && !this.kz.DW.yYB(this.kz.EX).isAlive) return void this.Zk(!1);
-         const GB = this.inputs,
-           YB = BB / 1e3,
-           DB = YB * this.kz.pI,
-           QB = this.kz.camera.heading,
-           oB = Math.sin(QB),
-           jB = Math.cos(QB);
-         let yB = 0,
-           JB = 0;
-         GB.freeCamForward && (yB += oB, JB += jB), GB.freeCamBackward && (yB -= oB, JB -= jB), GB.freeCamLeft && (yB -= jB, JB += oB), GB.freeCamRight && (yB += jB, JB -= oB);
-         const {
-           forward: MB,
-           strafe: PB
- ... (16 more removed lines; see GitHub link above)
+         return "indexedDB" === OW
+       };
+     return {
+       getItem: async iW => {
+         if (!await PW()) return WW.getItem(iW);
+         const OW = await (async WW => {
+           const iW = await NW("readonly"),
+             OW = iW.objectStore(dw).get(WW);
+           return await ew(iW), OW.result
+         })(iW);
+         return void 0 === OW ? WW.getItem(iW) : OW
+       },
+       setItem: async (iW, OW) => {
+         if (!await PW()) return WW.setItem(iW, OW);
+         try {
+           const WW = await NW("readwrite");
+ ... (3 more added lines; see GitHub link above)
```

#### 352. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L8559-L8566` → after: `L12973-L12983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12973-L12983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L12973-L12983) · [Before (L8559-L8566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L8559-L8566)

```diff
-         const AB = this.flyAccel.yVelocity * YB;
-         if (0 === RB && 0 === AB && 0 === WB) return;
-         const VB = this.kz.DW.pR(this.kz.camera.W4);
-         this.kz.DW.setPosition(this.kz.camera.W4, [VB[0] + RB, VB[1] + AB, VB[2] + WB])
-       }
-       notifyStateChanged(BB) {
-         var OB;
-         ZB.o.tM("freeCameraChanged"), (0, DM.d)(BB), null !== (OB = this.kz.bloxd.client) && void 0 !== OB && OB.isReplayMode() && ZB.o.tM("replayViewer|uiRefresh")
+       },
+       update: async (iW, OW) => {
+         if (!await PW()) throw new Error("No IndexedDB: read and write localforage instead");
+         const mW = await WW.getItem(iW).catch((() => null)),
+           EW = await NW("readwrite"),
+           LW = EW.objectStore(dw);
+         let cW;
+         const wW = LW.get(iW);
+         return wW.onsuccess = () => {
+           cW = OW(void 0 === wW.result ? mW : wW.result), LW.put(cW, iW)
+         }, await ew(EW), cW
```

#### 353. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L8569-L8589` → after: `L12986-L12989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12986-L12989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L12986-L12989) · [Before (L8569-L8589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L8569-L8589)

```diff
-     var jM = GB(1998),
-       yM = GB(39898),
-       JM = GB(39892),
-       MM = GB(39913),
-       PM = GB(38275),
-       zM = GB(38301),
-       lM = GB(39910),
-       pM = GB(39632),
-       qM = GB(756);
-     const ZM = [0, 0, 0];
- 
-     function NM(BB, OB, GB, YB, DB) {
-       DB.heading = OB + BB.jZ[1] + (YB ? BB.cameraRotationOffset[1] : 0);
-       const QB = GB + BB.jZ[0] + (YB ? BB.cameraRotationOffset[0] : 0);
-       (0, JM.l)((0, JM.d)(DB.heading, QB, ZM), DB)
-     }
- ... (5 more removed lines; see GitHub link above)
+   }(cP.f),
+   zZ = new class {
+     constructor(WW, iW) {
+       this.store = WW, this.signal = iW, this.EZ = new Map
```

#### 354. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L8591-L8595` → after: `L12991-L13038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12991-L13038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L12991-L13038) · [Before (L8591-L8595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L8591-L8595)

```diff
-     const AM = [0, 0, 0],
-       VM = [0, 0, 0];
- 
-     function SM(BB, OB, GB, YB) {
-       return GM.b.copyReattachedTargetPosition(BB, AM) ? BB.camera.J_(AM, OB, GB, GM.b.getSavedZoomDistance(BB), YB) : null
+     watch(WW, iW) {
+       var OW, mW;
+       return null !== (OW = null === (mW = this.signal) || void 0 === mW ? void 0 : mW.listen((OW => {
+         if (OW !== WW) return;
+         const mW = this.load(WW).then((async iW => pw(iW, await this.read(WW))));
+         this.EZ.set(WW, mW), mW.then(iW)
+       }))) && void 0 !== OW ? OW : () => {}
+     }
+     list(WW) {
+       return this.load(WW)
+     }
+     async add(WW, iW, OW) {
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Date.now(),
+         EW = arguments.length > 4 ? arguments[4] : void 0;
+       const NW = (WW, NW) => {
+           const PW = pw(WW, NW),
+ ... (32 more added lines; see GitHub link above)
```

#### 355. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L8597-L8599` → after: `L13040-L13057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13040-L13057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L13040-L13057) · [Before (L8597-L8599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L8597-L8599)

```diff
- 
-     function nM(BB) {
-       return (0, lM.f)(BB) ? (0, XB.b)(BB) : null
+     async relabel(WW, iW, OW) {
+       const mW = this.load(WW).then((async mW => this.save(WW, (WW => pw(mW, WW).map((WW => WW.id === iW ? {
+         ...WW,
+         label: OW
+       } : WW))))));
+       this.EZ.set(WW, mW.then((WW => {
+         let {
+           snapshots: iW
+         } = WW;
+         return iW
+       })));
+       const {
+         snapshots: EW,
+         isSaved: NW
+       } = await mW;
+       var PW;
+ ... (2 more added lines; see GitHub link above)
```

#### 356. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L8601-L8700` → after: `L13059-L13069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13059-L13069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L13059-L13069) · [Before (L8601-L8700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L8601-L8700)

```diff
-     class UM {
-       constructor(BB, OB, GB) {
-         this.kz = BB, this.view = OB, this.pickEntity = GB, this.defaultPose = (0, CJ.k)(), this.feet = [0, 0, 0], this.aim = [0, 0, 0], this.localFrom = [0, 0, 0], this.pastBlocks = [0, 0, 0], this.cameraHiddenPlayer = null, this.pickTargetedBlock = (BB, OB, GB) => this.pickDist … [truncated]
-           var YB, DB;
-           const QB = this.pickTargetedBlockFromOutside(BB, OB, GB),
-             oB = this.kz.UP.kF,
-             jB = null === this.cameraHiddenPlayer ? null : null !== (YB = null === (DB = this.kz.DW.iGB(this.cameraHiddenPlayer)) || void 0 === DB ? void 0 : DB.uF) && void 0 !== YB ? YB : null,
-             yB = null !== jB && oB.getPickable(jB);
-           yB && oB.setPickable(jB, !1);
-           try {
-             var JB;
-             return null !== (JB = this.pickEntity(BB, OB, null !== QB && void 0 !== QB ? QB : GB)) && void 0 !== JB ? JB : QB
-           } finally {
-             yB && oB.setPickable(jB, !0)
-           }
-         }, this.isUntargeted = BB => !this.kz.cOB(BB)
- ... (84 more removed lines; see GitHub link above)
+     async save(WW, iW) {
+       if (this.store.update) try {
+         return {
+           snapshots: await this.store.update(this.storeKey(WW), (WW => iW(Vw(WW) ? WW : null))),
+           isSaved: !0
+         }
+       } catch {}
+       const OW = iW(await this.read(WW));
+       return {
+         snapshots: OW,
+         isSaved: await this.store.setItem(this.storeKey(WW), OW).catch((() => !1))
```

#### 357. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L8703-L8787` → after: `L13072-L13073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13072-L13073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L13072-L13073) · [Before (L8703-L8787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L8703-L8787)

```diff
-     var fM = GB(37236);
-     class kM {
-       constructor(BB, OB, GB) {
-         this.kz = BB, this.mP = OB, this.pointer = GB, this.eye = [0, 0, 0], this.ray = [0, 0, 0], this.screenPoint = [0, 0], this.lastPick = {
-           eye: [NaN, NaN, NaN],
-           camera: [NaN, NaN, NaN],
-           ray: [NaN, NaN, NaN]
-         }, this.cursorAim = [0, 0, 0], this.msSincePick = 1 / 0, this.tapPoint = [0, 0, 0], this.hasTapPoint = !1, this.tapAim = [0, 0, 0]
-       }
-       kP(BB) {
-         this.msSincePick += BB
-       }
-       forgetTap() {
-         this.hasTapPoint = !1
-       }
-       aimAtClientPoint(BB, OB, GB) {
- ... (69 more removed lines; see GitHub link above)
+     read(WW) {
+       return this.store.getItem(this.storeKey(WW)).then((WW => Vw(WW) ? WW : null)).catch((() => null))
```

#### 358. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L8789-L8792` → after: `L13075-L13077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13075-L13077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L13075-L13077) · [Before (L8789-L8792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L8789-L8792)

```diff
-     const dM = 250;
- 
-     function KM(BB, OB) {
-       return BB[0] === OB[0] && BB[1] === OB[1] && BB[2] === OB[2]
+     load(WW) {
+       let iW = this.EZ.get(WW);
+       return iW || (iW = this.store.getItem(this.storeKey(WW)).then((WW => Vw(WW) ? WW : [])).catch((() => [])), this.EZ.set(WW, iW)), iW
```

#### 359. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L8794-L8800` → after: `L13079-L13080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13079-L13080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L13079-L13080) · [Before (L8794-L8800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L8794-L8800)

```diff
-     const uM = {
-       heading: 0,
-       pitch: 0
-     };
- 
-     function mM(BB, OB, GB, YB) {
-       uM.heading = GB, uM.pitch = YB, (0, JM.l)(OB, uM), GM.b.setPlayerFacing(BB, uM.heading, uM.pitch)
+     storeKey(WW) {
+       return `worldCodeAiHistory:${WW}`
```

#### 360. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L8802-L8804` → after: `L13082-L13085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13082-L13085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L13082-L13085) · [Before (L8802-L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L8802-L8804)

```diff
- 
-     function IM(BB, OB) {
-       return RB().copy(OB, BB.bloxd.getLifeformEyePos(BB.EX, !1))
+   }(rZ, Dw("bloxd-worldCodeAiHistory")),
+   FZ = new class {
+     constructor(WW, iW) {
+       this.store = WW, this.signal = iW, this.EZ = new Map
```

#### 361. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L8806-L8826` → after: `L13087-L13096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13087-L13096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L13087-L13096) · [Before (L8806-L8826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L8806-L8826)

```diff
-     var FM = GB(39922);
-     const iM = 4 * Math.PI;
-     class LM {
-       constructor() {
-         this.heading = 0, this.writtenHeading = 0, this.writtenPitch = 0, this.hasWritten = !1, this.pointedAt = {
-           heading: 0,
-           pitch: 0
-         }
-       }
-       followBody(BB) {
-         this.heading = BB, this.hasWritten = !1
-       }
-       readLook(BB, OB, GB, YB, DB) {
-         if (YB) return this.pointedAt.heading = BB, this.pointedAt.pitch = OB, this.heading = (0, MM.e)(this.heading, 0, 0, this.pointedAt, GB, DB), DB;
-         if (!this.hasWritten) return DB.Rm = 0, DB.Wm = 0, DB.pointedAt = void 0, DB;
-         const QB = (0, JM.B)(this.writtenHeading, BB);
- ... (5 more removed lines; see GitHub link above)
+     watch(WW, iW) {
+       var OW, mW;
+       return null !== (OW = null === (mW = this.signal) || void 0 === mW ? void 0 : mW.listen((OW => {
+         if (OW !== WW) return;
+         const mW = this.load(WW).then((async iW => {
+           var OW;
+           return null !== (OW = await this.read(WW)) && void 0 !== OW ? OW : iW
+         }));
+         this.EZ.set(WW, mW), mW.then(iW)
+       }))) && void 0 !== OW ? OW : () => {}
```

#### 362. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L8828-L8849` → after: `L13098-L13099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13098-L13099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L13098-L13099) · [Before (L8828-L8849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L8828-L8849)

```diff
-     const gM = [0, 0, 0];
- 
-     function rM(BB, OB, GB, YB, DB, QB) {
-       const oB = Math.max(0, vJ(BB, OB, GB)),
-         jB = gM;
-       for (let zB = 0; zB < 3; zB++) jB[zB] = OB[zB] + GB[zB] * oB;
-       const yB = function(BB, OB, GB, YB) {
-           let DB = 0,
-             QB = 0;
-           for (let jB = 0; jB < 3; jB++) {
-             const YB = OB[jB] - BB[jB];
-             DB += YB * GB[jB], QB += YB * YB
-           }
-           const oB = DB * DB - QB + YB * YB;
-           return oB > 0 ? Math.max(0, Math.sqrt(oB) - DB) : 0
-         }(BB, jB, GB, YB),
- ... (6 more removed lines; see GitHub link above)
+     list(WW) {
+       return this.load(WW)
```

#### 363. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L8851-L8855` → after: `L13101-L13102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13101-L13102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L13101-L13102) · [Before (L8851-L8855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L8851-L8855)

```diff
- 
-     function XM(BB, OB, GB) {
-       const YB = iM * (GB / 1e3),
-         DB = Math.max(-YB, Math.min(YB, (0, JM.B)(BB, OB)));
-       return (0, JM.x)(BB + DB)
+     add(WW, iW) {
+       return this.update(WW, (WW => WW.includes(iW) || WW.length >= 8 ? WW : [...WW, iW]))
```

#### 364. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L8857-L8982` → after: `L13104-L13109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13104-L13109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L13104-L13109) · [Before (L8857-L8982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L8857-L8982)

```diff
-     class wM {
-       constructor(BB, OB, GB, YB, DB, QB) {
-         this.kz = BB, this.cameraController = OB, this.freeCameraController = GB, this.cursor = YB, this.mP = void 0, this.director = void 0, this.view = new LM, this.look = {
-           Rm: 0,
-           Wm: 0
-         }, this.cursorAim = void 0, this.screen = void 0, this.facing = "movement", this.mouseTurns = "view", this.detached = !1, this.eye = [0, 0, 0], this.oGB = [0, 0, 0], this.jGB = [0, 0, 0], this.rayDirection = [0, 0, 0], this.hiddenWatched = null, this.cameraPosition = [0,  … [truncated]
-         const oB = Qy.e.subscribe("gameCamera", (BB => {
-             this.setSettings(BB)
-           })),
-           jB = BB => {
-             this.update(BB)
-           };
-         BB.on("beforeRender", jB);
-         const yB = () => {
-           this.lastFrameMs = performance.now()
-         };
- ... (110 more removed lines; see GitHub link above)
+     remove(WW, iW) {
+       return this.update(WW, (WW => WW.filter((WW => WW !== iW))))
+     }
+     async update(WW, iW) {
+       var OW;
+       const mW = this.load(WW).then((async OW => {
```

#### 365. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L8984-L9022` → after: `L13111-L13119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13111-L13119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L13111-L13119) · [Before (L8984-L9022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L8984-L9022)

```diff
-         const {
-           kz: GB
-         } = this, YB = GB.DW.EGB(GB.EX);
-         let DB = GM.b.getPlayerFacingHeading(GB);
-         const QB = null !== (OB = YB.ridingVehicleEId) && void 0 !== OB ? OB : null;
-         if (null !== QB && function(BB, OB) {
-             if (!(0, zM.c)(BB, OB)) return !0;
-             const GB = BB.bloxd.getResolvedPhysicsSettings(BB.EX, BB.DW.AGB(BB.EX).physicsState);
-             return null !== GB.steering || null !== GB.fixedHeading
-           }(GB, QB)) {
-           var oB;
-           const OB = null === (oB = (0, hj.getCaughtUpMeshRotation)(GB, QB)) || void 0 === oB ? void 0 : oB.renderRotation[1];
-           void 0 !== OB && (DB = XM(DB, OB, BB))
-         } else YB.speed > 0 && (DB = XM(DB, YB.heading, BB));
-         var jB, yB;
-         GM.b.setPlayerFacing(GB, DB, (jB = GM.b.getPlayerFacingPitch(GB), yB = BB, jB * Math.max(0, 1 - yB / 1e3 * 8)))
- ... (23 more removed lines; see GitHub link above)
+         if (this.store.update) try {
+           return await this.store.update(this.storeKey(WW), (WW => iW(ti(WW) ? WW.slice(0, 8) : OW)))
+         } catch {}
+         const EW = iW(null !== (mW = await this.read(WW)) && void 0 !== mW ? mW : OW);
+         return await this.store.setItem(this.storeKey(WW), EW).catch((() => !1)), EW
+       }));
+       this.EZ.set(WW, mW);
+       const EW = await mW;
+       return null === (OW = this.signal) || void 0 === OW || OW.post(WW), EW
```

#### 366. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L9024-L9031` → after: `L13121-L13122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13121-L13122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L13121-L13122) · [Before (L9024-L9031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L9024-L9031)

```diff
-     var EM = GB(34612);
-     const cM = [0, 1, 0],
-       hM = !1,
-       aM = [0, 100, 0];
- 
-     function eM(BB, OB) {
-       var GB, YB;
-       return null !== (GB = null !== (YB = BB.inclination) && void 0 !== YB ? YB : null === OB || void 0 === OB ? void 0 : OB.inclination) && void 0 !== GB ? GB : -.2
+     read(WW) {
+       return this.store.getItem(this.storeKey(WW)).then((WW => ti(WW) ? WW.slice(0, 8) : null)).catch((() => null))
```

#### 367. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L9034-L9035` → after: `L13135-L13139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13135-L13139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L13135-L13139) · [Before (L9034-L9035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L9034-L9035)

```diff
-     function TM(BB, OB, GB) {
-       const YB = function(BB, OB) {
+ function ix() {
+   if (!Wx) {
+     var WW, iW, OW, mW;
+     const EW = WW => lW.b.find((iW => iW.id === WW)),
+       NW = WW => {
```

#### 368. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L9037-L9081` → after: `L13141-L13178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13141-L13178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L13141-L13178) · [Before (L9037-L9081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L9037-L9081)

```diff
-         return null !== (GB = null !== (YB = BB.useSunPosition) && void 0 !== YB ? YB : null === OB || void 0 === OB ? void 0 : OB.useSunPosition) && void 0 !== GB ? GB : hM
-       }(BB, OB);
-       if (YB) {
-         const [YB, DB, QB] = function(BB, OB) {
-           var GB, YB;
-           return null !== (GB = null !== (YB = BB.sunPosition) && void 0 !== YB ? YB : null === OB || void 0 === OB ? void 0 : OB.sunPosition) && void 0 !== GB ? GB : aM
-         }(BB, OB), oB = new vB.Xp(YB, DB, QB);
-         oB.normalize(), void 0 !== GB && oB.scaleInPlace(-1);
-         const {
-           x: jB,
-           y: yB,
-           z: JB
-         } = oB;
-         return {
-           x: jB,
-           y: yB,
- ... (29 more removed lines; see GitHub link above)
+         return null !== (iW = null === (OW = EW(WW)) || void 0 === OW ? void 0 : OW.content) && void 0 !== iW ? iW : ""
+       };
+     Wx = new Yc({
+       apiReference: NW("apiReference"),
+       callbacks: NW("callbacks"),
+       clientOptions: NW("clientOptions"),
+       snippets: NW("snippets"),
+       howTo: NW("howTo"),
+       itemNames: null !== (WW = null === (iW = EW("itemNames")) || void 0 === iW ? void 0 : iW.raw) && void 0 !== WW ? WW : "",
+       blockNames: null !== (OW = null === (mW = EW("blockNames")) || void 0 === mW ? void 0 : mW.raw) && void 0 !== OW ? OW : "",
+       mobSettings: NW("mobSettings")
+     })
+   }
+   return Wx
+ }
+ const Ox = ["Welcome players when they join", "Give everyone a sword when they join", "Make a /spawn command", "Show a timer on the screen"],
+ ... (22 more added lines; see GitHub link above)
```

#### 369. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L9091-L9126` → after: `L13181-L13196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13181-L13196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L13181-L13196) · [Before (L9091-L9126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L9091-L9126)

```diff
- 
-     function CM(BB) {
-       return null !== BB && BB > 0
-     }
-     class HM {
-       constructor(BB) {
-         this.kz = BB, this.starsMesh = null, this.starsMat = null, this.sunMesh = null, this.sunMat = null, this.moonMesh = null, this.moonMat = null, this.sunOpacity = null, this.moonOpacity = null, this.earthSkyBox = null;
-         const OB = this.kz.xR.skyBox;
-         "object" === typeof OB && "earth" === OB.type && (this.earthSkyBox = OB), this.sunOpacity = this.kz.xR.dayNightSunOpacity, this.moonOpacity = this.kz.xR.dayNightMoonOpacity;
-         const GB = Qy.e.subscribe("dayNightSunOpacity", (BB => {
-             this.setSunOpacity(BB)
-           })),
-           YB = Qy.e.subscribe("dayNightMoonOpacity", (BB => {
-             this.setMoonOpacity(BB)
-           })),
-           DB = Qy.e.subscribe("dayNightStarOpacity", (BB => {
- ... (20 more removed lines; see GitHub link above)
+     OW(), iW.addEventListener("scroll", OW, {
+       passive: !0
+     });
+     const mW = "function" === typeof ResizeObserver ? new ResizeObserver(OW) : null;
+     return null === mW || void 0 === mW || mW.observe(iW), null === mW || void 0 === mW || mW.observe(WW), () => {
+       iW.removeEventListener("scroll", OW), null === mW || void 0 === mW || mW.disconnect()
+     }
+   }), [NW]), (0, PW.jsx)("div", {
+     ref: EW,
+     className: "WorldCodeAiChips WorldCodeAiFollowUps",
+     children: iW.map((WW => (0, mW.createElement)("button", {
+       ...Rc.e,
+       key: WW,
+       className: "WorldCodeAiChip",
+       onClick: () => {
+         OW(WW)
```

#### 370. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L9128-L9149` → after: `L13198-L13303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13198-L13303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L13198-L13303) · [Before (L9128-L9149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L9128-L9149)

```diff
-       hasEarthSkyBox() {
-         return null !== this.earthSkyBox
-       }
-       shouldShowSun() {
-         return CM(this.sunOpacity) && this.hasEarthSkyBox()
-       }
-       shouldShowMoon() {
-         return CM(this.moonOpacity) && this.hasEarthSkyBox()
-       }
-       syncSunAndMoon() {
-         const BB = this.shouldShowSun() ? this.sunOpacity : null,
-           OB = this.shouldShowMoon() ? this.moonOpacity : null;
-         var GB, YB;
-         null === BB && (null === (GB = this.sunMesh) || void 0 === GB || GB.Zk(!1));
-         null === OB && (null === (YB = this.moonMesh) || void 0 === YB || YB.Zk(!1));
-         null === BB && null === OB || (this.ensureCreated(), this.applySizes(), this.positionSunAndMoon(), null !== BB && ((0, eB.f)(this.sunMat, {
- ... (6 more removed lines; see GitHub link above)
+     }, function(WW) {
+       const iW = WW.replace(/^It didn't work: /, "").replace(/\.$/, "");
+       return iW.charAt(0).toUpperCase() + iW.slice(1)
+     }(WW))))
+   })
+ }
+ 
+ function wx(WW) {
+   let {
+     useFree: iW,
+     retryOf: OW,
+     isAutoFix: mW,
+     lookupOf: EW
+   } = WW;
+   return !0 !== iW && (void 0 !== OW || !0 !== mW && void 0 === EW)
+ }
+ ... (90 more added lines; see GitHub link above)
```

#### 371. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L9151-L9242` → after: `L13305-L13313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13305-L13313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L13305-L13313) · [Before (L9151-L9242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L9151-L9242)

```diff
-         CM(BB) ? (this.ensureCreated(), (0, eB.f)(this.starsMat, {
-           alpha: BB
-         }), this.starsMesh.Zk(!0)) : null === (OB = this.starsMesh) || void 0 === OB || OB.Zk(!1)
-       }
-       ensureCreated() {
-         if (this.starsMesh) return;
-         const {
-           UP: BB
-         } = this.kz, {
-           eq: OB
-         } = BB;
-         this.starsMesh = (0, WB.q)(BB, "dayNightStars", (0, VB.i)());
-         const GB = EM.g.map((BB => EM.i + BB)),
-           YB = {
-             rootUrl: EM.i,
-             files: GB,
- ... (76 more removed lines; see GitHub link above)
+         const OW = new Set((null !== (iW = IW.get(WW.path)) && void 0 !== iW ? iW : []).filter((iW => !BW.has(`${WW.path}:${iW.index}`))).map((WW => WW.index))),
+           mW = function(WW, iW) {
+             const OW = Kt(WW.before, WW.after),
+               mW = OW.flatMap((WW => "same" === WW.kind ? [WW.text] : iW.has(WW.index) ? WW.added : WW.removed));
+             if (0 === mW.length) return "";
+             const EW = (OW.every((WW => "same" === WW.kind || iW.has(WW.index))) ? WW.after : WW.before).endsWith("\n") ? "\n" : "";
+             return `${mW.join("\n")}${EW}`
+           }(WW, OW);
+         return mW === WW.before ? [] : [{
```

#### 372. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L9244-L9282` → after: `L13315-L13454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13315-L13454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L13315-L13454) · [Before (L9244-L9282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L9244-L9282)

```diff
-           emissiveColor: [1, 1, 1],
-           diffuseTexture: YB,
-           useAlphaFromDiffuseTexture: !0
-         }
-       }).mirror
-     }
-     var sM = GB(4642),
-       xM = GB(38589),
-       tM = GB(37979),
-       BP = GB(38193),
-       OP = GB(38025),
-       GP = GB(791),
-       YP = GB(3104),
-       DP = GB(4709),
-       QP = GB(113),
-       oP = GB(320),
- ... (23 more removed lines; see GitHub link above)
+           after: mW
+         }]
+       }))
+     }), [xW.changes, IW, BW]),
+     Oi = (0, mW.useMemo)((() => ii && YW ? YW(ii) : []), [ii, YW]);
+   (0, mW.useEffect)((() => {
+     "applied" === HW && uW(!1)
+   }), [HW]);
+   const mi = !!xW.editedInPlace;
+   (0, mW.useEffect)((() => {
+     mi || "offered" !== xW.status || uW(!0)
+   }), [mi, xW.status]);
+   const Ei = xW.changes.map((WW => WW.path)).join(", "),
+     Ni = !mi || vW || Oi.length > 0 || "undone" === HW || "stale" === HW;
+   return (0, PW.jsxs)("div", {
+     className: "WorldCodeAiToolCard",
+ ... (124 more added lines; see GitHub link above)
```

#### 373. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L9284-L9310` → after: `L13456-L13472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13456-L13472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L13456-L13472) · [Before (L9284-L9310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L9284-L9310)

```diff
-       }
-       async applyForGame(BB, OB, GB) {
-         this.leaveGame(), this.notifiedModelFallback = !1;
-         const YB = this.startCheck(),
-           DB = () => GB() || YB(),
-           QB = await this.joinResult(BB, OB, DB);
-         if ((0, Dj.s)("webgpuloss")) {
-           const GB = DB() ? {
-             status: "rB"
-           } : QB;
-           (0, Qj.d)((YB => YB.noteJsJoin(OB, BB, GB)))
-         }
-         return DB() ? {
-           status: "rB"
-         } : (ZB.o.tM("matchmakeAndPlayStepCompleted", {
-           step: WO.l.SHADER_PACK,
- ... (11 more removed lines; see GitHub link above)
+       })
+     }), Ni && (0, PW.jsxs)("div", {
+       className: NW()("WorldCodeAiChangeActions", kW && "WorldCodeAiChangeActions-sticky"),
+       children: [Oi.length > 0 && (0, PW.jsxs)("div", {
+         className: "WorldCodeAiWarning",
+         children: [(0, PW.jsx)("p", {
+           className: "WorldCodeAiWarningTitle",
+           children: "Leaving that part out breaks this:"
+         }), (0, PW.jsx)("p", {
+           children: Oi[0]
+         })]
+       }), vW && (0, PW.jsxs)("div", {
+         className: "WorldCodeAiWarning",
+         children: [(0, PW.jsx)("p", {
+           className: "WorldCodeAiWarningTitle",
+           children: VW ? 1 === fW ? `${CW?`Line ${CW.line}`:"This line"} ${gW?"will":"would"} never work:` : `${fW} lines ${gW?"will":"would"} never work:` : 1 === fW ? `${CW?`Line ${CW.line}`:"This line"} ${gW?"will":"would"} break:` : `${fW} lines ${gW?"will":"would"} break:`
+ ... (1 more added lines; see GitHub link above)
```

#### 374. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L9312-L9353` → after: `L13474-L13788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13474-L13788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L13474-L13788) · [Before (L9312-L9353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L9312-L9353)

```diff
-           const jB = function(BB) {
-             const OB = vQ.exec(BB);
-             if (OB) return {
-               program: "model",
-               packVariant: Number(OB[1])
-             };
-             const GB = HQ.exec(BB);
-             return GB ? {
-               program: GB[3] ? "liquid" : "terrain",
-               packVariant: Number(GB[2]),
-               lighting: void 0 !== GB[1]
-             } : null
-           }(YB);
-           if (null === jB) return;
-           const yB = null !== (oB = null !== QB && void 0 !== QB ? QB : null === DB || void 0 === DB ? void 0 : DB.message) && void 0 !== oB ? oB : DB,
-             JB = () => jB.packVariant === BB.defineFor(jB.program) && ("model" === jB.program || jB.lighting === BB.wq());
- ... (26 more removed lines; see GitHub link above)
+           const NW = pW.get(WW),
+             LW = iW > 0 && void 0 !== NW && (null === (EW = pW.get(OW[iW - 1])) || void 0 === EW ? void 0 : EW.line) === NW.line;
+           return (0, PW.jsxs)(mW.Fragment, {
+             children: [NW && !fZ(WW) && !LW && (0, PW.jsxs)("p", {
+               className: "WorldCodeAiWarningWhere",
+               children: [fW > 1 && `Line ${NW.line}: `, (0, PW.jsx)("code", {
+                 children: NW.text
+               })]
+             }), (0, PW.jsx)("p", {
+               children: !NW || 1 !== fW && fZ(WW) ? WW : CZ(WW)
+             })]
+           }, WW)
+         })), !oW && eW.length > 1 && (0, PW.jsxs)("button", {
+           className: "WorldCodeAiLinkButton",
+           onClick: () => {
+             dW(!0)
+ ... (299 more added lines; see GitHub link above)
```

#### 375. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L9355` → after: `L13790-L13848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13790-L13848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L13790-L13848) · [Before (L9355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L9355)

```diff
-       async joinResult(BB, OB, GB) {
+     }()), [di, ei] = (0, mW.useState)(iw), vi = (0, mW.useRef)(di);
+     vi.current = di;
+     const gi = di && dW,
+       Di = (0, mW.useRef)(!1),
+       [Vi, fi] = (0, mW.useState)(null),
+       [Ci, Xi] = (0, mW.useState)(""),
+       [Bi, qi] = (0, mW.useState)([]),
+       [Ri, Gi] = (0, mW.useState)(null),
+       [Ii, ai] = (0, mW.useState)(new Set),
+       [ri, zi] = (0, mW.useState)(null !== (iW = mi.dismissedErrorCounts.get(CW.key)) && void 0 !== iW ? iW : 0),
+       [Fi, Qi] = (0, mW.useState)(!1),
+       [WO, iO] = (0, mW.useState)(Date.now),
+       OO = (0, mW.useRef)(null),
+       mO = (0, mW.useRef)(null),
+       EO = (0, mW.useRef)([]),
+       [NO, PO] = (0, mW.useState)(0),
+ ... (43 more added lines; see GitHub link above)
```

#### 376. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L9357-L9389` → after: `L13850-L13866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13850-L13866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L13850-L13866) · [Before (L9357-L9389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L9357-L9389)

```diff
-         const DB = await this.page.load();
-         if ("none" === DB.status) return {
-           status: "ok"
-         };
-         const QB = null !== (YB = (0, jP.harnessShaderPackMode)()) && void 0 !== YB ? YB : (0, GP.f)(OB);
-         if ("blocked" === DB.status) {
-           if ((0, eQ.k)(DB.variants, QB)) {
-             return {
-               status: "failed",
-               messageKey: "shaderPack:failedUnchecked" === DB.messageKey && !await (0, iB.hasUsableWebGpuAdapter)() ? JP() : DB.messageKey
-             }
-           }
-           return null === BB || void 0 === BB || BB.setMode(QB), {
-             status: "ok"
-           }
-         }
- ... (17 more removed lines; see GitHub link above)
+         const OW = WW.getBoundingClientRect().top,
+           mW = iW => WW.scrollTop + iW.getBoundingClientRect().top - OW;
+         let EW = mW(NW);
+         const LW = NW.querySelector(".WorldCodeAiDiff-added, .WorldCodeAiDiff-removed"),
+           cW = NW.querySelector(".WorldCodeAiChangeHeader"),
+           wW = NW.querySelector(".WorldCodeAiChangeActions-sticky");
+         if (null !== (PW = iW.warnings) && void 0 !== PW && PW.length && LW && cW && wW) {
+           const iW = NW.querySelector(".WorldCodeAiDiff-marked"),
+             OW = LW.getBoundingClientRect().height,
+             PW = iW ? mW(iW) + 2 * OW + wW.offsetHeight - WW.clientHeight : mW(LW) + 3 * OW + wW.offsetHeight - WW.clientHeight;
+           EW = Math.max(EW, Math.min(PW, iW ? mW(iW) - OW : mW(cW)))
+         } else if (cW && wW) {
+           const iW = NW.querySelectorAll(".WorldCodeAiChangeWhy li"),
+             OW = iW[iW.length - 1];
+           if (OW) {
+             const iW = mW(OW) + OW.getBoundingClientRect().height + wW.offsetHeight - WW.clientHeight;
+ ... (1 more added lines; see GitHub link above)
```

#### 377. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L9392-L9407` → after: `L13869-L13870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13869-L13870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L13869-L13870) · [Before (L9392-L9407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L9392-L9407)

```diff
-         if (BB.setMode(QB), !BB.isRunning()) return {
-           status: "ok"
-         };
-         const jB = MP(BB);
-         if (jB === this.lastPassedCheck) return {
-           status: "ok"
-         };
-         this.lastPassedCheck = null;
-         const yB = await this.runCheck(BB, GB, "failed");
-         return "rB" === yB.status ? {
-           status: "rB"
-         } : "failed" === yB.status ? (PP(yB), {
-           status: "failed",
-           messageKey: "shaderPack:failedToCompile"
-         }) : ("ok" === yB.status && (this.lastPassedCheck = jB), {
-           status: "ok"
+         WW.scrollTo({
+           top: EW
```

#### 378. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L9410-L9417` → after: `L13898-L13918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13898-L13918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L13898-L13918) · [Before (L9410-L9417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L9410-L9417)

```diff
-       recheck(BB) {
-         if (!this.inGame || !BB) return;
-         const OB = this.startCheck();
-         if (!BB.isRunning()) return;
-         const GB = MP(BB);
-         GB !== this.lastPassedCheck && this.runCheck(BB, OB, "skipped").then((BB => {
-           OB() || ("failed" === BB.status ? (PP(BB), this.failInGame()) : "ok" === BB.status && (this.lastPassedCheck = GB))
-         }))
+     }(ii)), [ii]), (0, mW.useEffect)((() => {
+       let WW = !0;
+       zZ.list(BW).then((iW => {
+         WW && li(iW)
+       })).catch((WW => {
+         console.error("World Code AI: couldn't read the version history", WW)
+       }));
+       const iW = zZ.watch(BW, li);
+       return () => {
+         WW = !1, iW()
+       }
+     }), [BW]), (0, mW.useEffect)((() => {
+       let WW = !0;
+       FZ.list(BW).then((iW => {
+         WW && Ui(iW)
+       })).catch((WW => {
+ ... (5 more added lines; see GitHub link above)
```

#### 379. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L9419-L9421` → after: `L13920-L13930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13920-L13930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L13920-L13930) · [Before (L9419-L9421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L9419-L9421)

```diff
-       startCheck() {
-         const BB = ++this.checkGeneration;
-         return () => BB !== this.checkGeneration
+     }), [BW]);
+     const TO = null !== (EW = null === (lW = Ni.findLast((WW => WW.target.key === CW.key))) || void 0 === lW ? void 0 : lW.retryAt) && void 0 !== EW ? EW : 0,
+       JO = zN(WO),
+       hO = null !== ti || TO > WO || JO > WO;
+     (0, mW.useEffect)((() => {
+       if (!hO) return;
+       const WW = setInterval((() => {
+         iO(Date.now())
+       }), 1e3);
+       return () => {
+         clearInterval(WW)
```

#### 380. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L9423-L9434` → after: `L13932-L13947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13932-L13947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L13932-L13947) · [Before (L9423-L9434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L9423-L9434)

```diff
-       async runCheck(BB, OB, GB) {
-         this.checksRunning++;
-         try {
-           return await BB.checkCompilation(OB)
-         } catch (YB) {
-           return console.error("The shader pack compile check failed", YB), "skipped" === GB ? {
-             status: "skipped"
-           } : {
-             status: "failed",
-             failure: {
-               material: "terrain",
-               message: `The check failed: ${YB instanceof Error?YB.message:String(YB)}`
+     }), [hO]);
+     const HO = vW > ri && eW.length > 0 ? eW[eW.length - 1] : null,
+       nO = (0, mW.useMemo)((() => HO ? function(WW, iW) {
+         var OW;
+         let mW;
+         for (const [EW, NW] of Object.entries(iW)) {
+           const {
+             text: iW,
+             line: OW
+           } = yc(WW, NW);
+           if (void 0 !== OW) {
+             if (mW) return yc(WW);
+             mW = {
+               text: iW,
+               path: EW,
+               line: OW
```

#### 381. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L9517-L9523` → after: `L13990-L14087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13990-L14087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L13990-L14087) · [Before (L9517-L9523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L9517-L9523)

```diff
-           eq: QB,
-           Dq: oB
-         } = this.kz.UP, jB = "earth" === OB || "earth" === GB.type;
-         if (jB && oB) {
-           (0, xM.e)();
-           const OB = {};
-           return RP(null, OB, BB, GB), void this.showSkyBox(null, OB)
+           check: NW = void 0 === iW,
+           about: PW = (null !== iW && void 0 !== iW ? iW : WW.trim()),
+           planStep: LW,
+           wordsOnly: cW = !1,
+           asked: wW,
+           failedEdits: tW,
+           isAutoFix: ZW = !1,
+           autoFixRound: xW = 0,
+           useFree: lW,
+           retryOf: jW,
+           continueFrom: UW,
+           lookups: sW = [],
+           lookupRound: MW = 0,
+           worldCodeFiles: KW,
+           viewedPaths: SW = [],
+           lookupOf: YW,
+ ... (82 more added lines; see GitHub link above)
```

#### 382. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L9525-L9539` → after: `L14089-L14144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14089-L14144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L14089-L14144) · [Before (L9525-L9539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L9525-L9539)

```diff
-         const yB = (0, WB.q)(this.kz.UP, sM.e.SKYBOX, (0, VB.i)()),
-           JB = jB ? (0, lP.j)(QB) : null;
-         if (JB) RP(yB, JB, BB, GB), JB.fogEnabled = !0, yB.material = JB;
-         else if ("custom" === GB.type) {
-           const BB = [GB.px, GB.py, GB.pz, GB.nx, GB.ny, GB.nz],
-             OB = (0, pP.c)(go.c.get("clientEscMenuOptions").pixelScale),
-             YB = (0, pP.h)(BB, OB, (0, pM.getSettingsFov)()),
-             DB = {
-               specularColor: [0, 0, 0],
-               disableLighting: !0,
-               reflectionTexture: (0, AB.n)(QB, {
-                 rootUrl: YB.join(""),
-                 files: YB,
-                 noMipmap: !1,
-                 luminance: !1
+         const Pi = {
+             lookups: sW,
+             lookupRound: MW,
+             worldCodeFiles: KW,
+             viewedPaths: SW
+           },
+           ci = {
+             retry: hW,
+             retryShown: iW,
+             chatGpt: null === Wi || void 0 === Wi ? void 0 : Wi.chatGpt,
+             retryOptions: {
+               check: BW,
+               about: PW,
+               planStep: LW,
+               wordsOnly: cW,
+               useFree: HW,
+ ... (40 more added lines; see GitHub link above)
```

#### 383. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L9542-L9709` → after: `L14174-L14328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14174-L14328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L14174-L14328) · [Before (L9542-L9709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L9542-L9709)

```diff
-           yB.material = (0, eB.c)({
-             name: "skyBox",
-             eq: QB,
-             sets: DB,
-             unrendered: !0
-           }).mirror, yB.infiniteDistance = !0
-         }
-         yB.bq = !1, yB.Ep = !0, yB.rp = !0, yB.applyFog = this.shouldApplyFogToSkyBox(), yB.renderingGroupId = -1, yB.hp();
-         const MB = yB.material;
-         (0, eB.f)(MB, {
-           backFaceCulling: !1,
-           disableDepthWrite: !0
-         }, {
-           unrendered: !0
-         }), (0, DO.g)(MB), (0, lP.d)(yB, (() => {
-           YB === this.skyBoxRequestId ? this.showSkyBox(yB, JB) : yB.dispose(!1, !0)
- ... (152 more removed lines; see GitHub link above)
+           let wW = GW || VW ? null !== TW && void 0 !== TW ? TW : hW : await NW();
+           if (null === wW) return;
+           const xW = null !== (bi = null === JW || void 0 === JW ? void 0 : JW.files) && void 0 !== bi ? bi : MO.current,
+             lW = KW ? {
+               ...xW,
+               ...KW
+             } : xW,
+             AW = {
+               request: hW,
+               files: lW,
+               activePath: nW,
+               errors: eW.slice(-5),
+               history: rW,
+               codeBlock: ii,
+               failedEdits: tW,
+               canAsk: zW,
+ ... (139 more added lines; see GitHub link above)
```

#### 384. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L9711-L9897` → after: `L14330-L14566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14330-L14566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L14330-L14566) · [Before (L9711-L9897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L9711-L9897)

```diff
-             null === (BB = UP.allRenderers[OB]) || void 0 === BB || BB.update()
-           }
-         }, BB.on("kP", UP.tickHandler))
-       }
-       static unregisterRenderer(BB, OB) {
-         delete UP.allRenderers[OB.rendererId], UP.tickHandler && 0 === Object.keys(UP.allRenderers).length && (BB.off("kP", UP.tickHandler), UP.tickHandler = null)
-       }
-       update() {
-         if (this.tornDown) return;
-         const BB = this.config.getChunkPos();
-         if (!BB) return this.disposeMeshes(), this.lastChunkI = NaN, this.lastChunkJ = NaN, void(this.lastChunkK = NaN);
-         const [OB, GB, YB] = BB;
-         OB === this.lastChunkI && GB === this.lastChunkJ && YB === this.lastChunkK || (this.lastChunkI = OB, this.lastChunkJ = GB, this.lastChunkK = YB, this.rebuildMeshes(OB, GB, YB))
-       }
-       rebuildMeshes(BB, OB, GB) {
-         this.disposeMeshes();
- ... (171 more removed lines; see GitHub link above)
+             const iW = Date.now();
+             iO(iW), Zi({
+               phase: "thinking",
+               startedAt: iW,
+               playingThrough: OW,
+               isSuperBot: !0
+             });
+             const mW = IW < 0 ? Ni : Ni.slice(0, IW),
+               NW = mW.findLastIndex((WW => "assistant" === WW.role && !WW.isNotice && !WW.leftOut && oO(WW))),
+               PW = mW[NW],
+               LW = mW.findIndex((WW => WW.id === YW)),
+               cW = mW.slice(0, Math.max(0, NW)).findLastIndex((WW => "user" === WW.role)),
+               wW = void 0 === jW && (void 0 === YW || LW >= 0 && LW < NW && LW >= cW) && "object" === typeof(null === PW || void 0 === PW ? void 0 : PW.answeredBy) && !0 === PW.answeredBy.isSuperBot,
+               ZW = uN(Ki),
+               xW = vE(ix(), AW, ZW, {
+                 docsInTurn: !0
+ ... (221 more added lines; see GitHub link above)
```

#### 385. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L9899-L9911` → after: `L14568-L14596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14568-L14596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L14568-L14596) · [Before (L9899-L9911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L9899-L9911)

```diff
-           of iP.f[DB].positions) {
-           const DB = this.bloxd.jR(OB + oB, GB + jB, YB + yB);
-           if (this.kz.cOB(DB) || !this.bloxd.playerCanChangePos(BB, OB + oB, GB + jB, YB + yB, MB.h[QB].id)) return !1
-         }
-         return !0
-       }
-       getPositionsIfMultiblock(BB, OB) {
-         const GB = [];
-         for (const {
-             block: YB,
-             x: DB,
-             y: QB,
-             z: oB
+           const fi = ix(),
+             Ci = NE(Ti.answer, ei, lW, nW, fi.callbackNames(), ii ? bW.d : void 0, Ai, new Set([JE(lW, nW, ii), nW, ...SW, ...Object.keys(null !== KW && void 0 !== KW ? KW : {})].filter((WW => null !== WW))), fi.realName),
+             Xi = cW ? {
+               ...Ci,
+               changes: [],
+               failedEdits: [],
+               inPlace: !1,
+               worldCode: [],
+               plan: [],
+               actions: []
+             } : Ci;
+           if (!Vi && !pW) {
+             const WW = Date.now();
+             iO(WW), Zi({
+               phase: "screening",
+               startedAt: WW,
+ ... (13 more added lines; see GitHub link above)
```

#### 386. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L9913-L9919` → after: `L14598-L14608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14598-L14608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L14598-L14608) · [Before (L9913-L9919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L9913-L9919)

```diff
-           of iP.f[OB].positions) GB.push([BB[0] + DB, BB[1] + QB, BB[2] + oB]);
-         return GB
-       }
-       getMultiblockInfo(BB, OB, GB) {
-         if (BB in iP.c) {
-           const YB = {
-               positions: []
+           null !== gi && li.answered(Ei, {
+             input: AW,
+             responder: gi.responder,
+             promptVersion: gi.promptVersion
+           }, {
+             model: gi.model,
+             text: Ti.answer
+           });
+           const Bi = function(WW) {
+               let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ii;
+               return WW.flatMap((WW => qZ(fi, WW, iW && !(0, bW.e)(WW.path))))
```

#### 387. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L9921-L9928` → after: `L14610-L14720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14610-L14720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L14610-L14720) · [Before (L9921-L9928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L9921-L9928)

```diff
-             {
-               mainMultiblock: DB,
-               rootX: QB,
-               rootY: oB,
-               rootZ: jB
-             } = this.getMultiblockRoot(BB, OB[0], OB[1], OB[2]);
-           for (const {
-               block: BB,
+             Ri = Bi(Xi.changes),
+             Gi = "direct" === Ai ? function(WW) {
+               return WW.flatMap((WW => {
+                 var iW;
+                 return null !== (iW = fc(WW)) && void 0 !== iW ? iW : []
+               }))
+             }(Ri) : [],
+             Ii = Gi.length > 0 ? {
+               ...Xi,
+               changes: Xi.changes.map((WW => ({
+                 ...WW,
+                 after: Bc(WW.after, Gi)
+               })))
+             } : Xi,
+             ai = Ii.changes.filter((WW => ii && (0, bW.e)(WW.path))).map((WW => ({
+               ...WW,
+ ... (95 more added lines; see GitHub link above)
```

#### 388. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L9930-L9940` → after: `L14722-L14733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14722-L14733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L14722-L14733) · [Before (L9930-L9940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L9930-L9940)

```diff
-               x: yB,
-               y: JB,
-               z: MB
-             }
-             of iP.f[DB].positions) {
-             const DB = QB + yB,
-               PB = oB + JB,
-               zB = jB + MB,
-               lB = this.bloxd.jR(DB, PB, zB);
-             GB && lB !== OB || YB.positions.push({
-               block: BB,
+               target: WW.target
+             } : WW)))), Yi) : uO(nO),
+             vO = zi.inPlace && dW && !WO && !Ti.isCutShort && !Ti.hasCallsFromReasoning,
+             gO = vO && await QO({
+               id: eO,
+               changes: zi.changes
+             }, PW);
+           !zi.inPlace || WO || gO || dO(eO, {
+             editedInPlace: void 0
+           });
+           const DO = 0 === zi.changes.length && 0 === cO.length && 0 === PO.length && 0 === ai.length && 0 === zi.worldCode.length;
+           if (OO && void 0 !== nO.note && ((gO || WO || DO) && !xi.signal.aborted ? hm({
```

#### 389. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L9942-L9944` → after: `L14735-L15011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14735-L15011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L14735-L15011) · [Before (L9942-L9944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L9942-L9944)

```diff
-               x: DB,
-               y: PB,
-               z: zB
+               note: nO.note,
+               changes: [],
+               status: "applied"
+             }, !0) : vO && !xi.signal.aborted ? Jm(eO, "declined") : Jm(eO, "asked")), xi.signal.aborted) return void uO({
+             role: "assistant",
+             text: "Stopped.",
+             changes: [],
+             status: "offered",
+             isNotice: !0,
+             isCalm: !0
+           });
+           WO && (dO(eO, {
+             warningsSentBack: !0
+           }), qi((WW => [{
+             id: kO(),
+             text: (0, vw.u)(Qi),
+ ... (261 more added lines; see GitHub link above)
```

#### 390. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L9949-L9956` → after: `L15015-L15036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15015-L15036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L15015-L15036) · [Before (L9949-L9956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L9949-L9956)

```diff
-         return {
-           positions: [{
-             block: (0, MB.d)(BB),
-             id: BB,
-             x: OB[0],
-             y: OB[1],
-             z: OB[2]
-           }]
+       }, CO = (0, mW.useRef)(fO);
+     CO.current = fO;
+     const XO = (0, mW.useRef)(VO);
+     XO.current = VO;
+     const BO = (0, mW.useRef)(uO);
+     BO.current = uO;
+     const qO = (0, mW.useRef)(null),
+       [RO, GO] = (0, mW.useState)(null),
+       IO = Bi.filter((WW => void 0 === WW.followUp));
+ 
+     function aO(WW, iW, OW) {
+       if (ti) {
+         if (Bi.length < 3) {
+           var mW;
+           const EW = null !== (mW = OW.useFree) && void 0 !== mW ? mW : yi && null !== Bm;
+           EW && Ti(!1), qi([...Bi, {
+ ... (6 more added lines; see GitHub link above)
```

#### 391. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L9958-L9984` → after: `L15038-L15060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15038-L15060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L15038-L15060) · [Before (L9958-L9984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L9958-L9984)

```diff
-       }
-       getMultiblockRoot(BB, OB, GB, YB) {
-         const {
-           mainMultiblock: DB,
-           compX: QB,
-           compY: oB,
-           compZ: jB
-         } = iP.c[BB], yB = OB - QB, JB = GB - oB, MB = YB - jB, PB = this.bloxd.jR(yB, JB, MB);
-         if (PB in iP.f)
-           for (const {
-               id: zB,
-               x: lB,
-               y: pB,
-               z: qB
-             }
-             of iP.f[PB].positions)
- ... (11 more removed lines; see GitHub link above)
+       } else VO(WW, iW, OW)
+     }(0, mW.useEffect)((() => {
+       var WW, iW, OW;
+       const [mW, ...EW] = Bi;
+       if (ti || !mW || NO > 0) return;
+       const NW = null === (WW = mW.followUp) || void 0 === WW ? void 0 : WW.lookupOf;
+       if (void 0 !== NW && !Ni.some((WW => WW.id === NW))) return void qi(EW);
+       if (null === (iW = mW.replaced) || void 0 === iW ? void 0 : iW.some((WW => {
+           var iW;
+           let {
+             path: OW,
+             text: mW
+           } = WW;
+           return (null !== (iW = uW[OW]) && void 0 !== iW ? iW : "") === mW
+         }))) {
+         var PW;
+ ... (7 more added lines; see GitHub link above)
```

#### 392. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L9987` → after: `L15063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L15063) · [Before (L9987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L9987)

```diff
-       qm(BB, OB, GB, YB) {
+       if (void 0 !== mW.opensPath && mW.opensPath !== oW) {
```

#### 393. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L9989-L10010` → after: `L15065-L15082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15065-L15082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L15065-L15082) · [Before (L9989-L10010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L9989-L10010)

```diff
-         let QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.bloxdSetBlockNoMulti,
-           oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
-         const jB = this.bloxd.jR(BB, OB, GB),
-           yB = null !== (DB = this.getRestoredTop(BB, OB, GB, jB, YB, oB)) && void 0 !== DB ? DB : YB;
-         if (jB in iP.c) {
-           const {
-             mainMultiblock: YB,
-             rootX: DB,
-             rootY: oB,
-             rootZ: yB
-           } = this.getMultiblockRoot(jB, BB, OB, GB);
-           for (const {
-               id: BB,
-               x: OB,
-               y: GB,
-               z: jB
- ... (6 more removed lines; see GitHub link above)
+         (null === (LW = qO.current) || void 0 === LW ? void 0 : LW.id) !== mW.id && (qO.current = {
+           id: mW.id,
+           until: Date.now() + 3e3
+         }, BO.current({
+           role: "assistant",
+           text: lZ(mW.opensPath),
+           changes: [],
+           status: "offered",
+           isNotice: !0,
+           isCalm: !0
+         }), fW(mW.opensPath, 1));
+         const WW = qO.current.until - Date.now();
+         if (WW > 0) {
+           const iW = setTimeout((() => {
+             qi((WW => [...WW]))
+           }), WW);
+ ... (2 more added lines; see GitHub link above)
```

#### 394. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L10043` → after: `L15086-L15099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15086-L15099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L15086-L15099) · [Before (L10043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L10043)

```diff
-       getRestoredTop(BB, OB, GB, YB, DB, QB) {
+       const cW = null !== (OW = mW.followUp) && void 0 !== OW ? OW : {
+         ...void 0 === mW.shown ? {} : {
+           check: mW.check,
+           wordsOnly: mW.wordsOnly,
+           isAutoFix: mW.isAutoFix,
+           autoFixRound: mW.autoFixRound
+         },
+         useFree: mW.useFree
+       };
+       wx(cW) && fL(oL.getState()) ? RO !== mW.id && (GO(mW.id), Wc()) : (qi(EW), XO.current(mW.text, mW.shown, cW))
+     }), [ti, Bi, NO, uW, Ni, oW, fW, vO, RO]);
+     const rO = (0, mW.useRef)(aO);
+     rO.current = aO, (0, mW.useEffect)((() => {
+       if (QW) {
```

#### 395. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L10045-L10050` → after: `L15101-L15105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15101-L15105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L15101-L15105) · [Before (L10045-L10050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L10045-L10050)

```diff
-         const jB = MB.h[DB],
-           yB = (null === jB || void 0 === jB ? void 0 : jB.attachedTop) && MB.h[jB.attachedTop],
-           JB = null === (oB = MB.h[YB]) || void 0 === oB ? void 0 : oB.meta.rootId;
-         if (null === QB || !yB || JB === jB.meta.rootId || JB === yB.meta.rootId || !this.bloxd.Qv(BB, OB - 1, GB)) return null;
-         const PB = MB.h[this.bloxd.jR(BB, OB - 1, GB)];
-         return (null === PB || void 0 === PB ? void 0 : PB.meta.rootId) === jB.meta.rootId ? MB.h[PB.attachedTop].id : null
+         if (null === Wi || void 0 === Wi || Wi(), "change" === QW.action) return Gi(QW), void(null === (WW = UO.current) || void 0 === WW || WW.focus());
+         Gi(null), rO.current(jZ(QW), UZ(QW), {
+           check: !1,
+           wordsOnly: "explain" === QW.action
+         })
```

#### 396. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L10052` → after: `L15107-L15315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15107-L15315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L15107-L15315) · [Before (L10052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L10052)

```diff
-       updateAttachedTop(BB, OB, GB, YB, DB, QB, oB) {
+     }), [QW, Wi]);
+     const zO = (WW, iW, OW) => {
+         zZ.add(BW, WW, iW, Date.now(), OW).then(li).catch((WW => {
+           console.error("World Code AI: couldn't keep a version of the code", WW)
+         }))
+       },
+       FO = (0, mW.useRef)(new Set),
+       QO = async function(WW, iW) {
+         let {
+           tryAgainLater: OW = !1
+         } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+         const mW = MO.current;
+         if (WW.changes.some((WW => {
+             var iW;
+             return (null !== (iW = mW[WW.path]) && void 0 !== iW ? iW : "") !== WW.before
+           }))) return eO(WW.id, "stale"), !1;
+ ... (193 more added lines; see GitHub link above)
```

#### 397. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L10054-L10084` → after: `L15317-L15330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15317-L15330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L15317-L15330) · [Before (L10054-L10084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L10054-L10084)

```diff
-         const PB = null === (jB = MB.h[YB]) || void 0 === jB ? void 0 : jB.attachedTop,
-           zB = null === (yB = MB.h[DB]) || void 0 === yB ? void 0 : yB.attachedTop;
-         if (!PB && !zB || !this.bloxd.Qv(BB, OB + 1, GB)) return;
-         const lB = this.bloxd.jR(BB, OB + 1, GB),
-           pB = !!PB && (null === (JB = MB.h[lB]) || void 0 === JB ? void 0 : JB.meta.rootId) === MB.h[PB].meta.rootId,
-           qB = zB ? MB.h[zB].id : 0;
-         PB && zB && MB.h[YB].meta.rootId === MB.h[DB].meta.rootId ? pB && lB !== qB && QB(BB, OB + 1, GB, qB, !0) : !zB || !pB && 0 !== lB || null !== oB && !this.placerCanAddTop(oB, BB, OB + 1, GB, qB) ? pB && QB(BB, OB + 1, GB, 0, !0) : QB(BB, OB + 1, GB, qB, !0)
-       }
-       placerCanAddTop(BB, OB, GB, YB, DB) {
-         return this.bloxd.playerCanChangePos(BB, OB, GB, YB, DB) && !this.bloxd.placementOverlapsOwnBody(BB, OB, GB, YB, DB)
-       }
-     }
-     var gP = GB(9985);
-     const rP = Object.freeze(Object.create(null));
- 
-     function XP(BB) {
- ... (15 more removed lines; see GitHub link above)
+         let {
+           replaced: NW,
+           signal: PW
+         } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+         const LW = await async function(WW, iW) {
+           const OW = [];
+           let mW = null;
+           for (const NW of WW) {
+             var EW;
+             const WW = await CE(NW, iW);
+             OW.push(NW.call ? {
+               ...WW.result,
+               call: NW.call
+             } : WW.result), mW = null !== (EW = WW.worldCodeFiles) && void 0 !== EW ? EW : mW
```

#### 398. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L10086-L10091` → after: `L15332-L15376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15332-L15376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L15332-L15376) · [Before (L10086-L10091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L10086-L10091)

```diff
-           of YB) {
-           let BB = QB;
-           (BB[0] > 31 || BB[1] > 31 || BB[2] > 31 || BB[0] < 0 || BB[1] < 0 || BB[2] < 0) && (BB = (0, gB.cb)(BB));
-           const OB = null !== oB && void 0 !== oB ? oB : {
-             persisted: jB,
-             gameCreated: yB
+           return {
+             results: OW,
+             worldCodeFiles: mW
+           }
+         }(WW, {
+           files: MO.current,
+           docs: ix(),
+           errors: eW,
+           viewChunk: null !== GW && void 0 !== GW ? GW : tx,
+           viewGameState: null !== IW && void 0 !== IW ? IW : Zx,
+           readWorldCode: RW,
+           fetchDocsPage: WW => async function(WW, iW, OW) {
+             if ("" === WW.trim()) return `No url was given: give ${UW.o}, or a page it links to.`;
+             const mW = MW(WW);
+             if (null === mW) return WW.includes(UW.g) ? `${WW} is every page at once, too long to read: read ${UW.o}, then the page you need.` : `Only Bloxd's docs can be read: ${UW.o} and the pages it links to.`;
+             const EW = `There is no docs page at ${WW}. ${UW.o} lists every page with its link.`,
+ ... (29 more added lines; see GitHub link above)
```

#### 399. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L10093` → after: `L15378-L15435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15378-L15435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L15378-L15435) · [Before (L10093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L10093)

```diff
-           XP(OB.persisted), DB[`${BB[0]}|${BB[1]}|${BB[2]}`] = OB
+         return qi((WW => [{
+           id: kO(),
+           text: iW.request,
+           shown: iW.shown,
+           followUp: tW,
+           ...NW ? {
+             replaced: NW,
+             until: Date.now() + lx
+           } : {}
+         }, ...WW])), "asked"
+       }, wm = (WW, iW, OW) => {
+         wi((mW => mW.map((mW => mW.id === WW ? {
+           ...mW,
+           trial: iW,
+           trialErrors: null !== OW && void 0 !== OW ? OW : mW.trialErrors
+         } : mW))))
+ ... (42 more added lines; see GitHub link above)
```

#### 400. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L10096-L10097` → after: `L15442-L15476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15442-L15476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L15442-L15476) · [Before (L10096-L10097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L10096-L10097)

```diff
-       hasNoBlockData(BB, OB, GB) {
-         return this.storage.get(BB, OB, GB) === rP
+     }, lm = (0, mW.useCallback)((WW => WW.flatMap((WW => qZ(ix(), WW, ii)))), [ii]), Am = (0, mW.useRef)({}), bm = (0, mW.useRef)({}), jm = (0, mW.useRef)(Promise.resolve()), Um = (0, mW.useRef)([]), km = (0, mW.useRef)(new Map), sm = (0, mW.useRef)(new Map), Mm = (0, mW.useRef)( … [truncated]
+       Di.current = !1, Um.current = [], km.current = new Map, sm.current = new Map, Mm.current = null, Am.current = {}, bm.current = {}, fi(null)
+     }, Sm = async () => {
+       if (!Vi) return;
+       const WW = MO.current,
+         iW = function(WW, iW, OW) {
+           return Object.entries(iW).flatMap((iW => {
+             var mW;
+             let [EW, NW] = iW;
+             const PW = OW[EW];
+             if (void 0 === PW) return [];
+             const LW = new Map(it(null !== (mW = WW[EW]) && void 0 !== mW ? mW : "").map((WW => [WW.key, WW.value]))),
+               cW = new Map(it(NW).map((WW => [WW.key, WW.value])));
+             let wW = PW;
+             for (const [WW, OW] of LW) {
+               var tW;
+ ... (19 more added lines; see GitHub link above)
```
