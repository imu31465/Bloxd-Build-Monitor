# Changed — Bundle Modifications Report (Part 017 / 069)

- **Updated at**: `2026-11-25T01:02 JST`
- **Part**: `17 / 69` (**289** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 016](part-016.md) · [Part 018 →](part-018.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/252.js` (w4ddu.56408518 → sn3sfj.2522680a · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/252.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af)

#### 25. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L371` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/252.js#L446) · [Before (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/252.js#L371)

```diff
-       b: () => GC
+       e: () => Op
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L519-L523` → after: `L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/252.js#L450) · [Before (L519-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/252.js#L519-L523)

```diff
-         let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-         this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, CC && this.reset()
-       }
-       reset() {
-         this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
+         this.members = new Map
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L526-L590` → after: `L453-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L453-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/252.js#L453-L481) · [Before (L526-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/252.js#L526-L590)

```diff
-         if (!CC) return;
-         const zC = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
-         this.enabled = zC ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = zC ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = zC ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = zC ? this.stencilMaterial. … [truncated]
-       }
-     }
-     class WC {
-       constructor() {
-         this.reset()
-       }
-       reset() {
-         this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = WC.ALWAYS, this.opStencilFail = WC.KEEP, this.opDepthFail = WC.KEEP, this.opStencilDepthPass = WC.REPLACE, this.backFunc = WC.ALWAYS, this.backOpStencilFail = WC.KEEP, this.backOpDepthF … [truncated]
-       }
-       get stencilFunc() {
-         return this.func
-       }
-       set stencilFunc(CC) {
- ... (49 more removed lines; see GitHub link above)
+         const ip = {
+           added: [],
+           removed: [],
+           settingChanges: []
+         };
+         for (const Op of pp.hp) {
+           let pp = this.members.get(Op.ap);
+           if (pp || (pp = {
+               name: null,
+               settings: {}
+             }, this.members.set(Op.ap, pp), ip.added.push(Op.ap)), null !== Op.np && (pp.name = Op.np), null !== Op.Fp || Op.Gp.length > 0) {
+             const cp = null === Op.Fp ? {} : JSON.parse(Op.Fp);
+             Object.assign(pp.settings, cp);
+             for (const ip of Op.Gp) delete pp.settings[ip], cp[ip] = void 0;
+             ip.settingChanges.push({
+               playerId: Op.ap,
+ ... (13 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L592-L593` → after: `L483-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L483-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/252.js#L483-L484) · [Before (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/252.js#L592-L593)

```diff
-       get stencilBackOpStencilDepthPass() {
-         return this.backOpStencilDepthPass
+       has(pp) {
+         return this.members.has(pp)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L595-L596` → after: `L486-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L486-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/252.js#L486-L487) · [Before (L595-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/252.js#L595-L596)

```diff
-       set stencilBackOpStencilDepthPass(CC) {
-         this.backOpStencilDepthPass = CC
+       ids() {
+         return [...this.members.keys()]
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L598-L599` → after: `L489-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L489-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/252.js#L489-L491) · [Before (L598-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/252.js#L598-L599)

```diff
-       get stencilMask() {
-         return this.mask
+       getName(pp) {
+         var ip, cp;
+         return null !== (ip = null === (cp = this.members.get(pp)) || void 0 === cp ? void 0 : cp.name) && void 0 !== ip ? ip : void 0
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L601-L602` → after: `L493-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L493-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/252.js#L493-L495) · [Before (L601-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/252.js#L601-L602)

```diff
-       set stencilMask(CC) {
-         this.mask = CC
+       getSettings(pp) {
+         var ip;
+         return null === (ip = this.members.get(pp)) || void 0 === ip ? void 0 : ip.settings
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L604-L605` → after: `L497-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L497-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/252.js#L497-L499) · [Before (L604-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/252.js#L604-L605)

```diff
-       get stencilTest() {
-         return this.enabled
+       getSetting(pp, ip) {
+         var cp;
+         return null === (cp = this.members.get(pp)) || void 0 === cp ? void 0 : cp.settings[ip]
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L607-L608` → after: `L501-L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L501-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/252.js#L501-L502) · [Before (L607-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/252.js#L607-L608)

```diff
-       set stencilTest(CC) {
-         this.enabled = CC
+       clear() {
+         this.members.clear()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/253.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/253.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/253.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/253.js#L2)

```diff
- export const ids = [253, 353];
+ export const ids = [253];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/253.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/253.js#L4-L6)

```diff
-   39674: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => QC
+   40003: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       playDocsSound: () => xp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L8-L10` → after: `L8-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L8-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/253.js#L8-L31) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/253.js#L8-L10)

```diff
-     class QC {
-       static GetShadersRepository() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QC.ShadersRepository : QC.ShadersRepositoryWGSL
+     var Op = cp(4974),
+       op = cp(36948),
+       Ip = cp(1211);
+     const Sp = new Map;
+ 
+     function xp(pp, ip, cp, xp, Lp) {
+       let Yp, Dp = null,
+         Ap = 0,
+         Pp = 0;
+       if (ip) Yp = new Op.Howl({
+         src: [`${Ip.clientSideServerUrls.staticUrl}/sounds/music/${pp}.mp3`],
+         html5: !0,
+         volume: cp
+       });
+       else {
+         var Wp;
+ ... (8 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L12-L13` → after: `L33-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L33-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/253.js#L33-L74) · [Before (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/253.js#L12-L13)

```diff
-       static GetShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QC.ShadersStore : QC.ShadersStoreWGSL
+       const yp = ip ? Yp.play() : Yp.play(pp);
+       Yp.volume(cp, yp), xp > 0 && Yp.seek(Ap + xp, yp);
+       const Up = () => ip ? Yp.duration() : Pp;
+       let wp = !1;
+       const vp = pp => {
+           wp || (wp = !0, Yp.off("play", tp, yp), Yp.off("end", Hp, yp), Yp.off("loaderror", ep), Yp.off("playerror", dp, yp), ip && Yp.unload(), Lp.onEnd(pp))
+         },
+         tp = () => {
+           Lp.onPlay(Up())
+         },
+         Hp = () => {
+           vp(!1)
+         },
+         dp = (ip, cp) => {
+           console.error(`Could not play docs sound ${pp}`, cp), vp(!0)
+         },
+ ... (26 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/254.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/254.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce)

#### 1. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L4-L12` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/254.js#L4-L6) · [Before (L4-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/254.js#L4-L12)

```diff
-   39882: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => NC,
-       g: () => WC,
-       h: () => oC,
-       i: () => MC,
-       k: () => qC,
-       m: () => fC,
-       o: () => FC
+   40016: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       default: () => Zp
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L14-L228` → after: `L8-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L8-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/254.js#L8-L66) · [Before (L14-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/254.js#L14-L228)

```diff
-     var QC = ZC(38507),
-       wC = ZC(39889);
- 
-     function bC(CC, zC, ZC, QC) {
-       switch (zC) {
-         case 5120: {
-           let zC = CC.getInt8(ZC);
-           return QC && (zC = Math.max(zC / 127, -1)), zC
-         }
-         case 5121: {
-           let zC = CC.getUint8(ZC);
-           return QC && (zC /= 255), zC
-         }
-         case 5122: {
-           let zC = CC.getInt16(ZC, !0);
-           return QC && (zC = Math.max(zC / 32767, -1)), zC
- ... (199 more removed lines; see GitHub link above)
+     cp(6592);
+     var Op = cp(62),
+       op = cp(40024),
+       Ip = cp(40289),
+       Sp = cp(40405),
+       xp = cp(40443),
+       Lp = cp(40459),
+       Yp = cp(37479),
+       Dp = cp(37313),
+       Ap = cp(40568),
+       Pp = cp(40626),
+       Wp = (cp(40663), cp(1234)),
+       yp = cp(195),
+       Up = cp(1201),
+       wp = cp(25),
+       vp = cp(2835),
+ ... (43 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L231-L267` → after: `L69-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L69-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/254.js#L69-L101) · [Before (L231-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/254.js#L231-L267)

```diff
-       const zC = CC.buffer;
-       if (zC instanceof ArrayBuffer) return CC;
-       const ZC = new ArrayBuffer(CC.byteLength);
-       return new Uint8Array(ZC).set(new Uint8Array(zC, CC.byteOffset, CC.byteLength)), ZC
-     }
-   },
-   39703: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => iC,
-       f: () => JC,
-       n: () => IC,
-       j: () => mC,
-       o: () => HC
-     });
-     class QC {
-       constructor() {
- ... (21 more removed lines; see GitHub link above)
+       let {
+         heatmap: ip,
+         scale: cp,
+         fullyOpaqueFrom: Qp,
+         bounds: fp,
+         fitBounds: bp,
+         schematic: hp,
+         controls: ap,
+         onStepTime: np,
+         onShowAllTime: Fp,
+         onTogglePlaying: gp,
+         getReadout: rp = null
+       } = pp;
+       const {
+         t: Zp
+       } = (0, Up.H)(), {
+ ... (17 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L271-L293` → after: `L104-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/254.js#L104-L107) · [Before (L271-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/254.js#L271-L293)

```diff
-           QC += ZC + "\n"
-         }
-         for (const wC of this.children) QC += wC.process(CC, zC, ZC);
-         return this.additionalDefineKey && (CC[this.additionalDefineKey] = this.additionalDefineValue || "true", ZC[this.additionalDefineKey] = CC[this.additionalDefineKey]), QC
-       }
-     }
-     class wC {
-       constructor() {
-         this._lines = []
-       }
-       get currentLine() {
-         return this._lines[this.lineIndex]
-       }
-       get canRead() {
-         return this.lineIndex < this._lines.length - 1
-       }
- ... (7 more removed lines; see GitHub link above)
+           return {
+             positions: Int32Array.from(cp),
+             values: Float64Array.from(Op),
+             count: Op.length
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L295-L299` → after: `L109-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L109-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/254.js#L109-L115) · [Before (L295-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/254.js#L295-L299)

```diff
-           const CC = zC.trim();
-           if (!CC) continue;
-           if (CC.startsWith("//")) {
-             this._lines.push(zC);
-             continue
+         }(ip, Ei)), [ip, Ei]),
+         Bi = mp * xi.cameraFOV / 100,
+         Ni = Wi.height > 0 ? Wi.width / Wi.height : 1,
+         Ti = (0, Op.useMemo)((() => function(pp, ip) {
+           return {
+             min: [pp.min[0] - ip[0], pp.min[1] - ip[1], pp.min[2] - ip[2]],
+             max: [pp.max[0] - ip[0] + 1, pp.max[1] - ip[1] + 1, pp.max[2] - ip[2] + 1]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L301-L309` → after: `L117-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L117-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/254.js#L117-L172) · [Before (L301-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/254.js#L301-L309)

```diff
-           const ZC = CC.indexOf(";");
-           if (-1 === ZC) this._lines.push(CC);
-           else if (ZC === CC.length - 1) CC.length > 1 && this._lines.push(CC);
-           else {
-             const CC = zC.split(";");
-             for (let zC = 0; zC < CC.length; zC++) {
-               let ZC = CC[zC];
-               ZC && (ZC = ZC.trim(), ZC && this._lines.push(ZC + (zC !== CC.length - 1 ? ";" : "")))
-             }
+         }(bp, Ei)), [bp, Ei]),
+         fi = oi(Ti, Ni, Bi),
+         bi = null !== Mi && void 0 !== Mi ? Mi : fi,
+         ai = (0, Op.useRef)({
+           fittedView: fi,
+           fieldOfView: Bi,
+           mouseSensitivity: xi.mouseSensitivity,
+           canLock: ti
+         });
+       ai.current = {
+         fittedView: fi,
+         fieldOfView: Bi,
+         mouseSensitivity: xi.mouseSensitivity,
+         canLock: ti
+       };
+       const ni = (0, Op.useMemo)((() => {
+ ... (40 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L311-L347` → after: `L174-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L174-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/254.js#L174-L259) · [Before (L311-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/254.js#L311-L347)

```diff
-         }
-       }
-     }
-     class bC extends QC {
-       process(CC, zC, ZC) {
-         for (let QC = 0; QC < this.children.length; QC++) {
-           const wC = this.children[QC];
-           if (wC.isValid(CC)) return wC.process(CC, zC, ZC)
-         }
-         return ""
-       }
-     }
-     class nC extends QC {
-       isValid(CC) {
-         return this.testExpression.isTrue(CC)
-       }
- ... (21 more removed lines; see GitHub link above)
+         }), [ji, ip, Ei, bi, Qi, cp, Qp]),
+         {
+           keyHandlers: Fi
+         } = (0, ep.f)({
+           isEnabled: ji,
+           claimedKeyCodes: Xp,
+           RP: pp => {
+             Ci((ip => function(pp, ip) {
+               const cp = [Math.sin(pp.heading), 0, Math.cos(pp.heading)],
+                 Op = Li(Li(Yi(cp, ip.forward), Yi(Oi(pp.heading), ip.right)), [0, ip.up, 0]);
+               return {
+                 ...pp,
+                 position: Li(pp.position, Op)
+               }
+             }(null !== ip && void 0 !== ip ? ip : ai.current.fittedView, pp)))
+           },
+ ... (70 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L349` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/254.js#L261) · [Before (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/254.js#L349)

```diff
-             FC = FC.trim(), "" !== FC && (ZC.push(FC), FC = "")
+             di.current = !1, vi(document.pointerLockElement === pp)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L351-L352` → after: `L263-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/254.js#L263-L264) · [Before (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/254.js#L351-L352)

```diff
-           bC = CC => {
-             QC < fC._Stack.length - 1 && (fC._Stack[++QC] = CC)
+           cp = () => {
+             di.current && (di.current = !1, Hi(!1))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L354-L572` → after: `L266-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L266-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/254.js#L266-L275) · [Before (L354-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/254.js#L354-L572)

```diff
-           nC = () => fC._Stack[QC],
-           oC = () => -1 === QC ? "!!INVALID EXPRESSION!!" : fC._Stack[QC--];
-         let qC = 0,
-           FC = "";
-         for (; qC < CC.length;) {
-           const zC = CC.charAt(qC),
-             WC = qC < CC.length - 1 ? CC.substring(qC, 2 + qC) : "";
-           if ("(" === zC) FC = "", bC(zC);
-           else if (")" === zC) {
-             for (wC(); - 1 !== QC && "(" !== nC();) ZC.push(oC());
-             oC()
-           } else if (fC._OperatorPriority[WC] > 1) {
-             for (wC(); - 1 !== QC && fC._OperatorPriority[nC()] >= fC._OperatorPriority[WC];) ZC.push(oC());
-             bC(WC), qC++
-           } else FC += zC;
-           qC++
- ... (203 more removed lines; see GitHub link above)
+           Op = ip => {
+             const cp = !ai.current.canLock && document.activeElement === pp && 0 !== (1 & ip.buttons);
+             if (document.pointerLockElement !== pp && !cp) return;
+             const Op = ai.current.mouseSensitivity * qp;
+             Ci((pp => function(pp, ip, cp) {
+               const Op = 2 * Math.PI;
+               return {
+                 ...pp,
+                 heading: ((pp.heading + ip) % Op + Op) % Op,
+                 pitch: Math.max(-Tp, Math.min(Tp, pp.pitch + cp))
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L574-L575` → after: `L277-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L277-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/254.js#L277-L300) · [Before (L574-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/254.js#L574-L575)

```diff
-             }
-             continue
+             }(null !== pp && void 0 !== pp ? pp : ai.current.fittedView, ip.movementX * Op, ip.movementY * Op)))
+           };
+         return document.addEventListener("pointerlockchange", ip), document.addEventListener("pointerlockerror", cp), document.addEventListener("pointermove", Op), () => {
+           document.removeEventListener("pointerlockchange", ip), document.removeEventListener("pointerlockerror", cp), document.removeEventListener("pointermove", Op), document.pointerLockElement === pp && (0, jp.c)()
+         }
+       }), []), (0, Op.useEffect)((() => {
+         const pp = Pi.current;
+         null !== pp && 0 !== Wi.width && 0 !== Wi.height && (pp.engine.resize(), pp.needsRender = !0)
+       }), [Wi.width, Wi.height]), (0, Op.useEffect)((() => {
+         const pp = Pi.current;
+         null !== pp && (pp.targetFieldOfView = Bi * (ki ? Rp : 1))
+       }), [Bi, ki]), (0, Op.useEffect)((() => {
+         const pp = Pi.current;
+         null !== pp && function(pp, ip, cp, Op) {
+           const op = [],
+             Ip = [],
+ ... (8 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L577-L622` → after: `L302-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L302-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/254.js#L302-L326) · [Before (L577-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/254.js#L577-L622)

```diff
-         }
-         const nC = new QC;
-         if (nC.line = wC, zC.children.push(nC), "#" === wC[0] && "d" === wC[1]) {
-           const CC = wC.replace(";", "").split(" ");
-           nC.additionalDefineKey = CC[1], 3 === CC.length && (nC.additionalDefineValue = CC[2])
-         }
-       }
-       return !1
-     }
- 
-     function YC(CC, zC, ZC, bC) {
-       const nC = new QC,
-         fC = new wC;
-       return fC.lineIndex = -1, fC.lines = CC.split("\n"), KC(fC, nC, bC), nC.process(zC, ZC, bC)
-     }
- 
- ... (30 more removed lines; see GitHub link above)
+           Kp(pp.cells, Float32Array.from(op), Float32Array.from(Ip), Ip.length / 4), pp.translucent = {
+             rc: Float32Array.from(Sp),
+             colours: Float32Array.from(xp),
+             count: xp.length / 4
+           }, pp.translucentSortedFrom = null, Vp(pp), pp.needsRender = !0
+         }(pp, Ji, cp, Qp)
+       }), [Ji, cp, Qp]), (0, Op.useEffect)((() => {
+         const pp = Pi.current;
+         null !== pp && function(pp, ip) {
+           pp.chunkGridOrigin = ip, pp.chunkGridCentre = null, sp(pp)
+         }(pp, fp.min)
+       }), [fp]), (0, Op.useEffect)((() => {
+         const pp = Pi.current;
+         null !== pp && function(pp, ip, cp) {
+           const Op = [],
+             op = [];
+ ... (9 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L625-L634` → after: `L329-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L329-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/254.js#L329-L387) · [Before (L625-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/254.js#L625-L634)

```diff
-           if (fC[4]) {
-             const CC = fC[5];
-             if (-1 !== CC.indexOf("..")) {
-               const QC = CC.split(".."),
-                 wC = parseInt(QC[0]);
-               let bC = parseInt(QC[1]),
-                 nC = ZC.slice(0);
-               ZC = "", isNaN(bC) && (bC = zC.indexParameters[QC[1]]);
-               for (let CC = wC; CC < bC; CC++) zC.supportsUniformBuffers || (nC = nC.replace(GC, ((CC, zC) => zC + "{X}"))), ZC += nC.replace(RC, CC.toString()) + "\n"
-             } else zC.supportsUniformBuffers || (ZC = ZC.replace(GC, ((CC, zC) => zC + "{X}"))), ZC = ZC.replace(RC, CC)
+           Kp(pp.schematicBlocks, Float32Array.from(Op), Float32Array.from(op), op.length / 4), pp.needsRender = !0
+         }(pp, hp, fp)
+       }), [hp, fp]), (0, Op.useEffect)((() => {
+         const pp = Pi.current;
+         null !== pp && null !== pp.chunkGrid && (pp.chunkGrid.isVisible = Ri, pp.needsRender = !0)
+       }), [Ri, fp]), (0, Op.useEffect)((() => {
+         const pp = Pi.current;
+         null !== pp && function(pp, ip, cp) {
+           const {
+             camera: Op
+           } = pp;
+           Op.position.set(ip.position[0], ip.position[1], ip.position[2]), Op.rotation.set(ip.pitch, ip.heading, 0);
+           const op = (Jp + 1) * yp.g.Qy * Math.sqrt(3);
+           Op.maxZ = Math.max(op, Math.hypot(...Li(ip.position, Yi(Si({
+             min: [0, 0, 0],
+             max: cp
+ ... (43 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L636-L640` → after: `L389-L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L389-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/254.js#L389-L425) · [Before (L636-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/254.js#L636-L640)

```diff
-           const QC = [];
-           for (const CC of wC) {
-             const zC = CC.split(fC[0]);
-             for (let CC = 0; CC < zC.length - 1; CC++) QC.push(zC[CC]), QC.push(ZC);
-             QC.push(zC[zC.length - 1])
+         }), yi && (0, kp.jsx)("div", {
+           className: "StudioHeatmap3DUnavailable SmallTextLight",
+           children: Zp("3D view isn't available in this browser.")
+         }), ji && (0, kp.jsx)("div", {
+           className: "StudioHeatmap3DCrosshair"
+         }), (0, kp.jsx)("div", {
+           className: "StudioHeatmap3DCoordinates SmallTextLight",
+           children: bi.position.map(((pp, ip) => (pp + Ei[ip]).toFixed(2))).join(" ")
+         }), Ri && (0, kp.jsx)(zp, {
+           heading: bi.heading,
+           pitch: bi.pitch,
+           onViewFrom: pp => {
+             const ip = Yi(pp, -1),
+               cp = 0 === ip[1] ? {
+                 heading: Math.atan2(ip[0], ip[2]),
+                 pitch: 0
+ ... (21 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L642-L652` → after: `L427-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L427-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/254.js#L427-L447) · [Before (L642-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/254.js#L642-L652)

```diff
-           wC = QC, bC = bC || ZC.indexOf("#include<") >= 0 || ZC.indexOf("#include <") >= 0
-         }
-       }
-       AC.length = 0;
-       const nC = wC.join("");
-       bC ? mC(nC.toString(), zC, ZC) : ZC(nC)
-     }
-     const HC = {
-       loadFile: (CC, zC, ZC, QC, wC, bC) => {
-         throw (0, NC.i)("FileTools")
-       }
+         }), null !== ni && (0, kp.jsx)("div", {
+           className: "StudioHeatmapMapReadout SmallTextLight",
+           children: null === rp ? Zp("studio:heatmapBlockReadout", {
+             x: ni.x,
+             y: ni.y,
+             z: ni.z,
+             count: (0, Wp.O)(ni.value)
+           }) : rp(ni.x, ni.y, ni.z, ni.value)
+         }), (0, kp.jsxs)("div", {
+           className: "StudioHeatmapMapControls",
+           children: [ap, (0, kp.jsx)(tp.S, {
+             active: null === Mi,
+             onClick: () => {
+               Ci(null)
+             },
+             children: (0, kp.jsx)(Hp.d, {
+ ... (5 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L666-L667` → after: `L450-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L450-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/254.js#L450-L556) · [Before (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/254.js#L666-L667)

```diff
-     function bC(CC, zC) {
-       return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (zC ? zC + "\n" : "") + CC
+     function zp(pp) {
+       let {
+         heading: ip,
+         pitch: cp,
+         onViewFrom: op,
+         onTurn: Ip,
+         onFlip: Sp
+       } = pp;
+       const {
+         t: xp
+       } = (0, Up.H)(), Lp = (0, Op.useRef)(null), Yp = ci({
+         heading: ip,
+         pitch: cp
+       }), Dp = Oi(ip), Ap = Ai(Yp, Dp), Pp = np + Fp + 2, Wp = ap.flatMap((pp => [1, -1].map((ip => {
+         const cp = Yi(pp.direction, ip);
+         return {
+ ... (91 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L670-L673` → after: `L559-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L559-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/254.js#L559-L582) · [Before (L670-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/254.js#L670-L673)

```diff
-     function nC(CC, zC, ZC, bC, nC, fC, oC) {
-       const qC = oC || wC.loadFile;
-       if (!qC) throw (0, QC.i)("FileTools");
-       return qC(CC, zC, ZC, bC, nC, fC)
+     function sp(pp) {
+       var ip, cp, Op;
+       const {
+         chunkGridOrigin: op,
+         camera: Ip
+       } = pp;
+       if (null === op) return;
+       const Sp = [Ip.position.x, Ip.position.y, Ip.position.z],
+         xp = [0, 2].map((pp => Math.floor((Sp[pp] + op[pp]) / yp.g.Qy))),
+         Lp = pp.chunkGridCentre;
+       if (null !== Lp && Lp.every(((pp, ip) => pp === xp[ip]))) return;
+       const Ap = null === (ip = null === (cp = pp.chunkGrid) || void 0 === cp ? void 0 : cp.isVisible) || void 0 === ip || ip;
+       null === (Op = pp.chunkGrid) || void 0 === Op || Op.dispose();
+       const [Wp, Up] = [0, 2].map(((pp, ip) => {
+         const cp = [];
+         for (let Op = xp[ip] - Jp; Op <= xp[ip] + Jp + 1; Op++) cp.push(Op * yp.g.Qy - op[pp]);
+ ... (8 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L677-L698` → after: `L586-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L586-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/254.js#L586-L590) · [Before (L677-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/254.js#L677-L698)

```diff
-       if (CC) return zC ? CC.IS_NDC_HALF_ZRANGE = "" : delete CC.IS_NDC_HALF_ZRANGE, ZC ? CC.USE_REVERSE_DEPTHBUFFER = "" : delete CC.USE_REVERSE_DEPTHBUFFER, void(QC ? CC.USE_EXACT_SRGB_CONVERSIONS = "" : delete CC.USE_EXACT_SRGB_CONVERSIONS);
-       {
-         let CC = "";
-         return zC && (CC += "#define IS_NDC_HALF_ZRANGE"), ZC && (CC && (CC += "\n"), CC += "#define USE_REVERSE_DEPTHBUFFER"), QC && (CC && (CC += "\n"), CC += "#define USE_EXACT_SRGB_CONVERSIONS"), CC
-       }
-     }
- 
-     function oC(CC, zC) {
-       let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         QC = arguments.length > 3 ? arguments[3] : void 0;
-       switch (CC) {
-         case 3: {
-           const CC = new Int8Array(zC);
-           return QC && CC.set(new Int8Array(QC)), CC
-         }
-         case 0: {
- ... (6 more removed lines; see GitHub link above)
+       pp.I9("matrix", function(pp, ip) {
+         const cp = new Float32Array(16 * ip);
+         for (let Op = 0; Op < ip; Op++) {
+           const ip = 16 * Op;
+           cp[ip] = 1, cp[ip + 5] = 1, cp[ip + 10] = 1, cp[ip + 12] = pp[3 * Op], cp[ip + 13] = pp[3 * Op + 1], cp[ip + 14] = pp[3 * Op + 2], cp[ip + 15] = 1
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L700-L727` → after: `L592-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/254.js#L592-L593) · [Before (L700-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/254.js#L700-L727)

```diff
-         case 5:
-         case 8:
-         case 9:
-         case 10:
-         case 2: {
-           const CC = "number" !== typeof zC ? new Uint16Array(zC) : new Uint16Array(ZC ? zC / 2 : zC);
-           return QC && CC.set(new Uint16Array(QC)), CC
-         }
-         case 6: {
-           const CC = "number" !== typeof zC ? new Int32Array(zC) : new Int32Array(ZC ? zC / 4 : zC);
-           return QC && CC.set(new Int32Array(QC)), CC
-         }
-         case 7:
-         case 11:
-         case 12:
-         case 13:
- ... (12 more removed lines; see GitHub link above)
+         return cp
+       }(ip, Op), 16, !0), pp.I9("color", cp, 4, !0), pp.isVisible = Op > 0
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L740` → after: `L597-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L597-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/254.js#L597-L616) · [Before (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/254.js#L740)

```diff
-       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !QC[CC]) return QC[CC] = !0, `${CC} needs to be imported before as it contains a side-effect required by your code.`
+       const {
+         camera: ip,
+         translucent: cp
+       } = pp, Op = [ip.position.x, ip.position.y, ip.position.z], op = pp.translucentSortedFrom;
+       if (null !== op && Math.hypot(Op[0] - op[0], Op[1] - op[1], Op[2] - op[2]) < Qp) return;
+       pp.translucentSortedFrom = Op;
+       const Ip = new Float64Array(cp.count),
+         Sp = new Uint32Array(cp.count);
+       for (let Yp = 0; Yp < cp.count; Yp++) {
+         const pp = cp.rc[3 * Yp] - Op[0],
+           ip = cp.rc[3 * Yp + 1] - Op[1],
+           op = cp.rc[3 * Yp + 2] - Op[2];
+         Ip[Yp] = pp * pp + ip * ip + op * op, Sp[Yp] = Yp
+       }
+       Sp.sort(((pp, ip) => Ip[ip] - Ip[pp]));
+       const xp = new Float32Array(3 * cp.count),
+ ... (4 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L747-L754` → after: `L620-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L620-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/254.js#L620-L624) · [Before (L747-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/254.js#L747-L754)

```diff
-       let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-       const QC = function() {
-         if ((ZC || nC) && 0 === fC) {
-           const ZC = `${CC}.${zC}`;
-           bC[ZC] || (bC[ZC] = !0, console.warn(`[Babylon.js] ${ZC}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
-         }
-       };
-       return QC.__isSideEffectStub = !0, QC
+       const cp = (cp, Op, op) => new Dp.Zy(0 === cp ? pp[0] : ip[0], 0 === Op ? pp[1] : ip[1], 0 === op ? pp[2] : ip[2]),
+         Op = [];
+       for (const op of [0, 1])
+         for (const pp of [0, 1]) Op.push([cp(0, op, pp), cp(1, op, pp)], [cp(op, 0, pp), cp(op, 1, pp)], [cp(op, pp, 0), cp(op, pp, 1)]);
+       return Op
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L758-L787` → after: `L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/254.js#L628) · [Before (L758-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/254.js#L758-L787)

```diff
-       return !!CC && !CC.__isSideEffectStub
-     }
- 
-     function FC(CC, zC) {
-       return {
-         get() {},
-         set(CC) {
-           Object.defineProperty(this, zC, {
-             value: CC,
-             writable: !0,
-             configurable: !0,
-             enumerable: !0
-           })
-         },
-         configurable: !0,
-         enumerable: !0
- ... (14 more removed lines; see GitHub link above)
+       return [Math.sin(pp.heading) * Math.cos(pp.pitch), -Math.sin(pp.pitch), Math.cos(pp.heading) * Math.cos(pp.pitch)]
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L791-L823` → after: `L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/254.js#L632) · [Before (L791-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/254.js#L791-L823)

```diff
-       let zC = "",
-         ZC = CC.firstChild;
-       for (; ZC;) 3 === ZC.nodeType && (zC += ZC.textContent), ZC = ZC.nextSibling;
-       return zC
-     }
-     ZC.d(zC, {
-       e: () => nC,
-       f: () => bC,
-       h: () => wC,
-       k: () => QC
-     })
-   },
-   39872: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => QC,
-       f: () => wC,
- ... (17 more removed lines; see GitHub link above)
+       return [Math.cos(pp), 0, -Math.sin(pp)]
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L825-L860` → after: `L634-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L634-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/254.js#L634-L657) · [Before (L825-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/254.js#L825-L860)

```diff
-   },
-   39865: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => dC,
-       e: () => RC,
-       g: () => eC,
-       h: () => KC,
-       i: () => iC,
-       m: () => JC,
-       o: () => IC,
-       p: () => XC,
-       r: () => vC,
-       v: () => AC
-     });
-     var QC = ZC(39867),
-       wC = ZC(39680),
- ... (20 more removed lines; see GitHub link above)
+ 
+     function oi(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
+         heading: fp,
+         pitch: bp
+       };
+       const op = [pp.max[0] - pp.min[0], pp.max[1] - pp.min[1], pp.max[2] - pp.min[2]],
+         Ip = ci(Op),
+         Sp = Oi(Op.heading),
+         xp = Ai(Ip, Sp),
+         Lp = Math.tan(cp / 2),
+         Yp = Lp * ip;
+       let Dp = 1;
+       for (const Ap of [-op[0] / 2, op[0] / 2])
+         for (const pp of [-op[1] / 2, op[1] / 2])
+           for (const ip of [-op[2] / 2, op[2] / 2]) {
+ ... (8 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L863-L865` → after: `L660-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L660-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/254.js#L660-L669) · [Before (L863-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/254.js#L863-L865)

```diff
-     class GC extends fC.j {
-       constructor(CC, zC) {
-         super(CC, fC.f.ReadFileError), this.file = zC, this.name = "ReadFileError", fC.d._setPrototypeOf(this, GC.prototype)
+ 
+     function Ii(pp, ip, cp) {
+       const Op = xi(pp),
+         op = xi(cp),
+         Ip = Li(pp.position, Yi(ip, -1)),
+         Sp = [0, 1, 2].reduce(((pp, ip) => Li(pp, Yi(op[ip], Di(Ip, Op[ip])))), [0, 0, 0]);
+       return {
+         position: Li(ip, Sp),
+         heading: cp.heading,
+         pitch: cp.pitch
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L1186` → after: `L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/254.js#L674) · [Before (L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/254.js#L1186)

```diff
-       return (0, oC.d)(CC.split(",")[1])
+       return Yi(Li(pp.min, pp.max), .5)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L1237-L1238` → after: `L677-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L677-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/254.js#L677-L680) · [Before (L1237-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/254.js#L1237-L1238)

```diff
-     function XC() {
-       lC || (lC = !0, EC(dC, mC, RC, KC, hC, iC, JC, IC, vC, AC), FC.e.loadFile = iC, FC.e.loadImage = JC, WC.o.loadFile = iC)
+     function xi(pp) {
+       const ip = ci(pp),
+         cp = Oi(pp.heading);
+       return [ip, cp, Ai(ip, cp)]
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L1249-L1283` → after: `L683-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/254.js#L683-L684) · [Before (L1249-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/254.js#L1249-L1283)

```diff
-     function wC() {
-       if (QC) return QC;
-       const CC = new ArrayBuffer(4),
-         zC = new Float32Array(CC),
-         ZC = new Uint32Array(CC),
-         wC = new Uint32Array(512),
-         bC = new Uint32Array(512);
-       for (let QC = 0; QC < 256; ++QC) {
-         const CC = QC - 127;
-         CC < -24 ? (wC[QC] = 0, wC[256 | QC] = 32768, bC[QC] = 24, bC[256 | QC] = 24) : CC < -14 ? (wC[QC] = 1024 >> -CC - 14, wC[256 | QC] = 1024 >> -CC - 14 | 32768, bC[QC] = -CC - 1, bC[256 | QC] = -CC - 1) : CC <= 15 ? (wC[QC] = CC + 15 << 10, wC[256 | QC] = CC + 15 << 10 | 3 … [truncated]
-       }
-       const nC = new Uint32Array(2048),
-         fC = new Uint32Array(64),
-         oC = new Uint32Array(64);
-       for (let QC = 1; QC < 1024; ++QC) {
-         let CC = QC << 13,
- ... (19 more removed lines; see GitHub link above)
+     function Li(pp, ip) {
+       return [pp[0] + ip[0], pp[1] + ip[1], pp[2] + ip[2]]
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L1287-L1292` → after: `L687-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/254.js#L687-L688) · [Before (L1287-L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/254.js#L1287-L1292)

```diff
-     function nC(CC) {
-       const zC = wC();
-       zC.floatView[0] = CC;
-       const ZC = zC.uint32View[0],
-         QC = ZC >> 23 & 511;
-       return zC.baseTable[QC] + ((8388607 & ZC) >> zC.shiftTable[QC])
+     function Yi(pp, ip) {
+       return [pp[0] * ip, pp[1] * ip, pp[2] * ip]
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L1295-L1338` → after: `L691-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L691-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/254.js#L691-L692) · [Before (L1295-L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/254.js#L1295-L1338)

```diff
-     function fC(CC) {
-       const zC = wC();
-       return zC.uint32View[0] = zC.mantissaTable[zC.offsetTable[CC >> 10] + (1023 & CC)] + zC.exponentTable[CC >> 10], zC.floatView[0]
-     }
-   },
-   39878: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => bC,
-       f: () => wC,
-       i: () => QC
-     });
-     const QC = CC => {
-         const zC = ArrayBuffer.isView(CC) ? new Uint8Array(CC.buffer, CC.byteOffset, CC.byteLength) : new Uint8Array(CC);
-         return "function" === typeof zC.toBase64 ? zC.toBase64() : function(CC) {
-           const zC = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
-           let ZC, QC, wC, bC, nC, fC, oC, qC = "",
- ... (28 more removed lines; see GitHub link above)
+     function Di(pp, ip) {
+       return pp[0] * ip[0] + pp[1] * ip[1] + pp[2] * ip[2]
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L1341-L1506` → after: `L695-L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L695-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/254.js#L695-L696) · [Before (L1341-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/254.js#L1341-L1506)

```diff
-     function bC(CC, zC, ZC) {
-       try {
-         if (CC()) return zC(), !0
-       } catch (QC) {
-         return ZC?.(QC), !0
-       }
-       return !1
-     }
-     const nC = function(CC, zC, ZC) {
-       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
-         wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
-         nC = arguments.length > 6 ? arguments[6] : void 0;
-       if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && bC(CC, zC, ZC)) return null;
-       const fC = setInterval((() => {
-         bC(CC, zC, ZC) ? clearInterval(fC) : (wC -= QC, wC < 0 && (clearInterval(fC), ZC?.(new Error("Operation timed out after maximum retries. " + (nC || "")), !0)))
-       }), QC);
- ... (150 more removed lines; see GitHub link above)
+     function Ai(pp, ip) {
+       return [pp[1] * ip[2] - pp[2] * ip[1], pp[2] * ip[0] - pp[0] * ip[2], pp[0] * ip[1] - pp[1] * ip[0]]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/255.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/255.js` (107 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L4` → after: `L4-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L4-L642) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L4)

```diff
-   39921: (CC, zC, ZC) => {
+   40411: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => wp,
+       e: () => Hp
+     });
+     var Op = cp(40203),
+       op = cp(40210),
+       Ip = cp(40314),
+       Sp = cp(37349),
+       xp = cp(37320),
+       Lp = cp(40415),
+       Yp = cp(38905),
+       Dp = cp(37368),
+       Ap = cp(40096),
+       Pp = cp(38313),
+       Wp = cp(37985),
+ ... (623 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L8-L9` → after: `L646-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L646-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L646-L701) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L8-L9)

```diff
-     var QC = ZC(38507),
-       wC = ZC(37002);
+     var Op = cp(37320);
+     class op {
+       constructor(pp, ip, cp) {
+         this._cameraPosition = ip, this._behavior = cp, this.activeInput = !1, this.speed = 1, this.Kr = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = . … [truncated]
+       }
+       computeCurrentFrameDeltas() {
+         const pp = this._scene.gy().getDeltaTime(),
+           ip = this._getEffectiveDeltaMs(pp);
+         if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 ===  … [truncated]
+         this.panDeltaCurrentFrame.E_(0), this.rotationDeltaCurrentFrame.E_(0), this.zoomDeltaCurrentFrame = 0;
+         (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.i5(this._calculateCurrentVelocity(this._pa … [truncated]
+       }
+       resetRotationVelocity() {
+         this._rotationVelocity.E_(0), this.rotationAccumulatedPixels.E_(0)
+       }
+       resetPanVelocity() {
+ ... (40 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L11-L22` → after: `L703-L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L703-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L703-L1151) · [Before (L11-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L11-L22)

```diff
-       static Instantiate(CC) {
-         if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[CC]) return this.RegisteredExternalClasses[CC];
-         const zC = (0, wC.c)(CC);
-         if (zC) return zC;
-         QC.c.Warn(CC + " not found, you may have missed an import.");
-         const ZC = CC.split(".");
-         let bC = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
-         for (let QC = 0, wC = ZC.length; QC < wC; QC++) bC = bC[ZC[QC]];
-         return "function" !== typeof bC ? null : bC
-       }
-     }
-     bC.RegisteredExternalClasses = {}
+       constructor(pp, ip) {
+         this.inputMap = [], this.handlers = pp, this._createDefaultEntries = ip, this.resetInputMap()
+       }
+       resolveInteraction(pp, ip) {
+         for (const cp of this.inputMap)
+           if (cp.source === pp && this._entryMatches(cp, ip)) return cp;
+         return null
+       }
+       resetInputMap() {
+         this.inputMap = this._createDefaultEntries?.() ?? []
+       }
+       getEntry(pp, ip, cp) {
+         const Op = this.inputMap;
+         for (let op = 0; op < Op.length; op++) {
+           const Ip = Op[op];
+           if (Ip.source === pp && Ip.interaction === ip && this._entryConditionsMatch(Ip, cp)) return Ip
+ ... (433 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L24` → after: `L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L1153) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L24)

```diff
-   39730: (CC, zC, ZC) => {
+   40176: (pp, ip, cp) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L28-L31` → after: `L1157-L4730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1157-L4730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L1157-L4730) · [Before (L28-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L28-L31)

```diff
-     var QC = ZC(39680);
-     class wC {
-       static get Now() {
-         return (0, QC.k)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
+     var Op = cp(40050);
+     let op = !1;
+ 
+     function Ip() {
+       op || (op = !0, Op.ThinEngine.prototype.setAlphaMode = function(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         if (this._alphaMode[cp] === pp) {
+           if (!ip) {
+             const ip = 0 === pp;
+             this.depthCullingState.depthMask !== ip && (this.depthCullingState.depthMask = ip)
+           }
+           return
+         }
+         const Op = 0 === pp;
+         this._alphaState.setAlphaBlend(!Op, cp), this._alphaState.setAlphaMode(pp, cp), ip || (this.depthCullingState.depthMask = Op), this._alphaMode[cp] = pp
+ ... (3558 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L33-L106` → after: `L4732-L4739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4732-L4739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L4732-L4739) · [Before (L33-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L33-L106)

```diff
-     }
-   },
-   39747: (CC, zC, ZC) => {
-     function QC(CC) {
-       let zC = 1;
-       do {
-         zC *= 2
-       } while (zC < CC);
-       return zC === CC
-     }
- 
-     function wC(CC, zC, ZC) {
-       return CC * (1 - ZC) + zC * ZC
-     }
- 
-     function bC(CC) {
- ... (58 more removed lines; see GitHub link above)
+       set manualUpdateOfPreviousWorldMatrixInstancedBuffer(pp) {
+         this._instanceDataStorage.previousManualUpdate = pp
+       }
+       get forceWorldMatrixInstancedBufferUpdate() {
+         return this._instanceDataStorage.forceMatrixUpdates
+       }
+       set forceWorldMatrixInstancedBufferUpdate(pp) {
+         this._instanceDataStorage.forceMatrixUpdates = pp
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L108-L109` → after: `L4741-L4804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4741-L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L4741-L4804) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L108-L109)

```diff
-       static set BaseUrl(CC) {
-         NC.e.BaseUrl = CC
+       _copySource(pp, ip) {
+         let cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
+           Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         const op = this.Gl();
+         if (pp._geometry && pp._geometry.applyToMesh(this), dp.e.DeepCopy(pp, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "fop", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLe … [truncated]
+           const ip = pp._ranges;
+           for (const pp in ip) Object.prototype.hasOwnProperty.call(ip, pp) && ip[pp] && this.createAnimationRange(pp, ip[pp].from, ip[pp].to)
+         }
+         if (pp.metadata && pp.metadata.clone ? this.metadata = pp.metadata.clone() : this.metadata = pp.metadata, this._internalMetadata = pp._internalMetadata, this.meshBlendingTag = pp.meshBlendingTag, ep.b && ep.b.HasTags(pp) && ep.b.AddTagsTo(this, ep.b.GetTags(pp, !0)), this … [truncated]
+           const op = pp.getDescendants(!0);
+           for (let pp = 0; pp < op.length; pp++) {
+             const Ip = op[pp];
+             Ip._isMesh ? (sp.parent = this, sp.doNotCloneChildren = ip, sp.clonePhysicsImpostor = cp, sp.cloneThinInstances = Op, Ip.clone(this.name + "." + Ip.name, sp)) : Ip.clone && Ip.clone(this.name + "." + Ip.name, this)
+           }
+         }
+         if (pp.morphTargetManager && (this.morphTargetManager = pp.morphTargetManager), (0, hp.d)(op.getPhysicsEngine)) {
+ ... (48 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L111-L112` → after: `L4806-L4807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4806-L4807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L4806-L4807) · [Before (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L111-L112)

```diff
-       static get CleanUrl() {
-         return NC.e.CleanUrl
+       getClassName() {
+         return "Mesh"
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L114-L115` → after: `L4809-L4810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4809-L4810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L4809-L4810) · [Before (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L114-L115)

```diff
-       static set CleanUrl(CC) {
-         NC.e.CleanUrl = CC
+       get _isMesh() {
+         return !0
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L117-L118` → after: `L4812-L4822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4812-L4822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L4812-L4822) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L117-L118)

```diff
-       static IsAbsoluteUrl(CC) {
-         return 0 === CC.indexOf("//") || -1 !== CC.indexOf("://") && (-1 !== CC.indexOf(".") && (-1 !== CC.indexOf("/") && (!(CC.indexOf(":") > CC.indexOf("/")) && (CC.indexOf("://") < CC.indexOf(".") || (0 === CC.indexOf("data:") || 0 === CC.indexOf("blob:"))))))
+       toString(pp) {
+         let ip = super.toString(pp);
+         if (ip += ", n vertices: " + this.getTotalVertices(), ip += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
+           for (let cp = 0; cp < this.animations.length; cp++) ip += ", animation[0]: " + this.animations[cp].toString(pp);
+         if (pp)
+           if (this._geometry) {
+             const pp = this.NOp(),
+               cp = this.getVerticesData(Mp.j.PositionKind);
+             cp && pp && (ip += ", flat shading: " + (cp.length / 3 === pp.length ? "YES" : "NO"))
+           } else ip += ", flat shading: UNKNOWN";
+         return ip
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L120-L121` → after: `L4824-L4826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4824-L4826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L4824-L4826) · [Before (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L120-L121)

```diff
-       static set ScriptBaseUrl(CC) {
-         NC.e.ScriptBaseUrl = CC
+       _unBindEffect() {
+         super._unBindEffect();
+         for (const pp of this.instances) pp._unBindEffect()
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L123-L124` → after: `L4828-L4829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4828-L4829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L4828-L4829) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L123-L124)

```diff
-       static get ScriptBaseUrl() {
-         return NC.e.ScriptBaseUrl
+       get hasLODLevels() {
+         return this._internalMeshDataInfo._LODLevels.length > 0
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L126-L127` → after: `L4831-L4832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4831-L4832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L4831-L4832) · [Before (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L126-L127)

```diff
-       static set CDNBaseUrl(CC) {
-         QC.ScriptBaseUrl = CC, QC.AssetBaseUrl = CC
+       getLODLevels() {
+         return this._internalMeshDataInfo._LODLevels
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L129-L130` → after: `L4834-L4836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4834-L4836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L4834-L4836) · [Before (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L129-L130)

```diff
-       static set ScriptPreprocessUrl(CC) {
-         NC.e.ScriptPreprocessUrl = CC
+       _sortLODLevels() {
+         const pp = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
+         this._internalMeshDataInfo._LODLevels.sort(((ip, cp) => ip.distanceOrScreenCoverage < cp.distanceOrScreenCoverage ? pp : ip.distanceOrScreenCoverage > cp.distanceOrScreenCoverage ? -pp : 0))
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L132-L133` → after: `L4838-L4841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4838-L4841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L4838-L4841) · [Before (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L132-L133)

```diff
-       static get ScriptPreprocessUrl() {
-         return NC.e.ScriptPreprocessUrl
+       addLODLevel(pp, ip) {
+         if (ip && ip._masterMesh) return fp.e.Warn("You cannot use a mesh as LOD level twice"), this;
+         const cp = new np(pp, ip);
+         return this._internalMeshDataInfo._LODLevels.push(cp), ip && (ip._masterMesh = this), this._sortLODLevels(), this
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L135-L136` → after: `L4843-L4849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4843-L4849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L4843-L4849) · [Before (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L135-L136)

```diff
-       static get DefaultRetryStrategy() {
-         return NC.e.DefaultRetryStrategy
+       getLODLevelAtDistance(pp) {
+         const ip = this._internalMeshDataInfo;
+         for (let cp = 0; cp < ip._LODLevels.length; cp++) {
+           const Op = ip._LODLevels[cp];
+           if (Op.distanceOrScreenCoverage === pp) return Op.mesh
+         }
+         return null
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L138-L139` → after: `L4851-L4854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4851-L4854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L4851-L4854) · [Before (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L138-L139)

```diff
-       static set DefaultRetryStrategy(CC) {
-         NC.e.DefaultRetryStrategy = CC
+       removeLODLevel(pp) {
+         const ip = this._internalMeshDataInfo;
+         for (let cp = 0; cp < ip._LODLevels.length; cp++) ip._LODLevels[cp].mesh === pp && (ip._LODLevels.splice(cp, 1), pp && (pp._masterMesh = null));
+         return this._sortLODLevels(), this
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L141-L142` → after: `L4856-L4880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4856-L4880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L4856-L4880) · [Before (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L141-L142)

```diff
-       static get CorsBehavior() {
-         return NC.e.CorsBehavior
+       getLOD(pp, ip) {
+         const cp = this._internalMeshDataInfo;
+         if (!cp._LODLevels || 0 === cp._LODLevels.length) return this;
+         const Op = ip || this.bJ().Yop,
+           op = pp.mode === kp.d.ORTHOGRAPHIC_CAMERA ? pp.minZ : Op.centerWorld.subtract(pp.globalPosition).length();
+         let Ip = op,
+           Sp = 1;
+         if (cp._useLODScreenCoverage) {
+           const ip = pp.screenArea;
+           let cp = Op.radiusWorld * pp.minZ / op;
+           cp = cp * cp * Math.PI, Ip = cp / ip, Sp = -1
+         }
+         if (Sp * cp._LODLevels[cp._LODLevels.length - 1].distanceOrScreenCoverage > Sp * Ip) return this.onLODLevelSelection && this.onLODLevelSelection(Ip, this, this), this;
+         for (let xp = 0; xp < cp._LODLevels.length; xp++) {
+           const pp = cp._LODLevels[xp];
+           if (Sp * pp.distanceOrScreenCoverage < Sp * Ip) {
+ ... (9 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L144-L145` → after: `L4882-L4883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4882-L4883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L4882-L4883) · [Before (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L144-L145)

```diff
-       static set CorsBehavior(CC) {
-         NC.e.CorsBehavior = CC
+       get geometry() {
+         return this._geometry
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L147-L148` → after: `L4885-L4886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4885-L4886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L4885-L4886) · [Before (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L147-L148)

```diff
-       static get UseFallbackTexture() {
-         return WC.c.UseFallbackTexture
+       getTotalVertices() {
+         return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L150-L151` → after: `L4888-L4891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4888-L4891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L4888-L4891) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L150-L151)

```diff
-       static set UseFallbackTexture(CC) {
-         WC.c.UseFallbackTexture = CC
+       getVerticesData(pp, ip, cp, Op) {
+         if (!this._geometry) return null;
+         let op = Op ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[pp]?.getFloatData(this.instances.length + 1, cp || ip && 1 !== this._geometry.meshes.length);
+         return op || (op = this._geometry.getVerticesData(pp, ip, cp)), op
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L153-L154` → after: `L4893-L4894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4893-L4894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L4893-L4894) · [Before (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L153-L154)

```diff
-       static get RegisteredExternalClasses() {
-         return gC.d.RegisteredExternalClasses
+       copyVerticesData(pp, ip) {
+         this._geometry && this._geometry.copyVerticesData(pp, ip)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L156-L157` → after: `L4896-L4897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4896-L4897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L4896-L4897) · [Before (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L156-L157)

```diff
-       static set RegisteredExternalClasses(CC) {
-         gC.d.RegisteredExternalClasses = CC
+       getVertexBuffer(pp, ip) {
+         return this._geometry ? (ip ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[pp]) ?? this._geometry.getVertexBuffer(pp) : null
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L159-L160` → after: `L4899-L4900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4899-L4900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L4899-L4900) · [Before (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L159-L160)

```diff
-       static get fallbackTexture() {
-         return WC.c.FallbackTexture
+       isVerticesDataPresent(pp, ip) {
+         return this._geometry ? !ip && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[pp] || this._geometry.isVerticesDataPresent(pp) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(pp)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L162-L163` → after: `L4902-L4908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4902-L4908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L4902-L4908) · [Before (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L162-L163)

```diff
-       static set fallbackTexture(CC) {
-         WC.c.FallbackTexture = CC
+       isVertexBufferUpdatable(pp, ip) {
+         if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(pp);
+         if (!ip) {
+           const ip = this._userInstancedBuffersStorage?.vertexBuffers[pp];
+           if (ip) return ip.isUpdatable()
+         }
+         return this._geometry.isVertexBufferUpdatable(pp)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L165-L167` → after: `L4910-L4920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4910-L4920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L4910-L4920) · [Before (L165-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L165-L167)

```diff
-       static FetchToRef(CC, zC, ZC, QC, wC, bC) {
-         const nC = 4 * ((Math.abs(CC) * ZC % ZC | 0) + (Math.abs(zC) * QC % QC | 0) * ZC);
-         bC.r = wC[nC] / 255, bC.g = wC[nC + 1] / 255, bC.b = wC[nC + 2] / 255, bC.a = wC[nC + 3] / 255
+       getVerticesDataKinds(pp) {
+         if (!this._geometry) {
+           const pp = [];
+           if (this._delayInfo)
+             for (const ip of this._delayInfo) pp.push(ip);
+           return pp
+         }
+         const ip = this._geometry.getVerticesDataKinds();
+         if (!pp && this._userInstancedBuffersStorage)
+           for (const cp in this._userInstancedBuffersStorage.vertexBuffers) - 1 === ip.indexOf(cp) && ip.push(cp);
+         return ip
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L169-L170` → after: `L4922-L4923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4922-L4923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L4922-L4923) · [Before (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L169-L170)

```diff
-       static Mix(CC, zC, ZC) {
-         return 0
+       getTotalIndices() {
+         return this._geometry ? this._geometry.getTotalIndices() : 0
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L172-L173` → after: `L4925-L4926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4925-L4926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L4925-L4926) · [Before (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L172-L173)

```diff
-       static Instantiate(CC) {
-         return gC.d.Instantiate(CC)
+       NOp(pp, ip) {
+         return this._geometry ? this._geometry.NOp(pp, ip) : []
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L175-L176` → after: `L4928-L4929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4928-L4929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L4928-L4929) · [Before (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L175-L176)

```diff
-       static SetImmediate(CC) {
-         MC.d.SetImmediate(CC)
+       get isBlocked() {
+         return null !== this._masterMesh && void 0 !== this._masterMesh
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L178` → after: `L4931-L4971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4931-L4971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L4931-L4971) · [Before (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L178)

```diff
-       static IsExponentOfTwo(CC) {
+       isReady() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         if (2 === this.delayLoadState) return !1;
+         if (!super.isReady(pp)) return !1;
+         if (!this.Am || 0 === this.Am.length) return !0;
+         if (!pp) return !0;
+         const cp = this.gy(),
+           Op = this.Gl(),
+           op = ip || cp.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
+         this.computeWorldMatrix();
+         const Ip = this.material || Op.defaultMaterial;
+         if (Ip)
+           if (Ip._storeEffectOnSubMeshes)
+             for (const xp of this.Am) {
+               const pp = xp.Ky();
+ ... (25 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L181-L182` → after: `L4974-L4975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4974-L4975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L4974-L4975) · [Before (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L181-L182)

```diff
-       static FloatRound(CC) {
-         return Math.fround(CC)
+       get areNormalsFrozen() {
+         return this._internalMeshDataInfo._areNormalsFrozen
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L184-L186` → after: `L4977-L4978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4977-L4978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L4977-L4978) · [Before (L184-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L184-L186)

```diff
-       static GetFilename(CC) {
-         const zC = CC.lastIndexOf("/");
-         return zC < 0 ? CC : CC.substring(zC + 1)
+       Vy() {
+         return this._internalMeshDataInfo._areNormalsFrozen = !0, this
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L188-L191` → after: `L4980-L4995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4980-L4995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L4980-L4995) · [Before (L188-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L188-L191)

```diff
-       static GetFolderPath(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         const ZC = CC.lastIndexOf("/");
-         return ZC < 0 ? zC ? CC : "" : CC.substring(0, ZC + 1)
+       unfreezeNormals() {
+         return this._internalMeshDataInfo._areNormalsFrozen = !1, this
+       }
+       set overridenInstanceCount(pp) {
+         this._instanceDataStorage.overridenInstanceCount = pp
+       }
+       _getInstanceDataStorage() {
+         if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
+         const pp = this._instanceDataStorage.engine.currentRenderPassId;
+         let ip = this._instanceDataStorage.renderPasses[pp];
+         return ip || (ip = new gp, this._instanceDataStorage.renderPasses[pp] = ip), ip
+       }
+       _preActivate() {
+         const pp = this._internalMeshDataInfo,
+           ip = this.Gl().getRenderId();
+         return pp._preActivateId === ip || (pp._preActivateId = ip, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L193-L194` → after: `L4997-L4999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4997-L4999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L4997-L4999) · [Before (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L193-L194)

```diff
-       static ToDegrees(CC) {
-         return 180 * CC / Math.PI
+       _preActivateForIntermediateRendering(pp) {
+         const ip = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
+         return ip.visibleInstances && (ip.visibleInstances.intermediateDefaultRenderId = pp), this
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L196-L197` → after: `L5001-L5007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5001-L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5001-L5007) · [Before (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L196-L197)

```diff
-       static ToRadians(CC) {
-         return CC * Math.PI / 180
+       _registerInstanceForRenderId(pp, ip) {
+         const cp = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
+         return cp.visibleInstances || (cp.visibleInstances = {
+           defaultRenderId: ip,
+           selfDefaultRenderId: this._renderId,
+           intermediateDefaultRenderId: -1
+         }), cp.visibleInstances[ip] || (void 0 === cp.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete cp.visibleInstances[cp.previousRenderId], cp.previousRenderId = ip, cp.visibleInstances[ip] = new Arra … [truncated]
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L199-L203` → after: `L5009-L5010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5009-L5010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5009-L5010) · [Before (L199-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L199-L203)

```diff
-       static SmoothAngleChange(CC, zC) {
-         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
-         const QC = this.ToRadians(CC),
-           wC = this.ToRadians(zC);
-         return this.ToDegrees(Math.atan2((1 - ZC) * Math.sin(wC) + ZC * Math.sin(QC), (1 - ZC) * Math.cos(wC) + ZC * Math.cos(QC)))
+       _afterComputeWorldMatrix() {
+         super._afterComputeWorldMatrix(), this.hasThinInstances && (this.sy || this.thinInstanceRefreshBoundingInfo(!1))
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L205-L206` → after: `L5012-L5013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5012-L5013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5012-L5013) · [Before (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L205-L206)

```diff
-       static MakeArray(CC, zC) {
-         return !0 === zC || void 0 !== CC && null != CC ? Array.isArray(CC) ? CC : [CC] : null
+       _postActivate() {
+         this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L208-L209` → after: `L5015-L5048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5015-L5048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5015-L5048) · [Before (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L208-L209)

```diff
-       static GetPointerPrefix(CC) {
-         return (0, bC.k)() && !window.PointerEvent ? "mouse" : "pointer"
+       refreshBoundingInfo() {
+         let pp, ip = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           cp = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         if (this.hasBoundingInfo && this.bJ().isLocked) return this;
+         pp = "object" === typeof ip ? ip : {
+           applySkeleton: ip,
+           applyMorph: cp
+         };
+         const Op = this.geometry ? this.geometry.boundingBias : null;
+         return this._refreshBoundingInfo(this._getData(pp, null, Mp.j.PositionKind), Op), this
+       }
+       _createGlobalSubMesh(pp) {
+         const ip = this.getTotalVertices();
+         if (!ip || !this.NOp()) return null;
+         if (this.Am && this.Am.length > 0) {
+           const cp = this.NOp();
+ ... (18 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L211-L212` → after: `L5050-L5058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5050-L5058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5050-L5058) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L211-L212)

```diff
-       static SetCorsBehavior(CC, zC) {
-         (0, NC.v)(CC, zC)
+       subdivide(pp) {
+         if (pp < 1) return;
+         const ip = this.getTotalIndices();
+         let cp = ip / pp | 0,
+           Op = 0;
+         for (; cp % 3 !== 0;) cp++;
+         this.releaseSubMeshes();
+         for (let op = 0; op < pp && !(Op >= ip); op++) lp.d.CreateFromIndices(0, Op, Op + cp >= ip ? ip - Op : cp, this, void 0, !1), Op += cp;
+         this.refreshBoundingInfo(), this.synchronizeInstances()
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L214-L215` → after: `L5060-L5070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5060-L5070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5060-L5070) · [Before (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L214-L215)

```diff
-       static SetReferrerPolicyBehavior(CC, zC) {
-         zC.referrerPolicy = CC
+       setVerticesData(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           Op = arguments.length > 3 ? arguments[3] : void 0;
+         if (this._geometry) this._geometry.setVerticesData(pp, ip, cp, Op);
+         else {
+           const Op = new Cp.d;
+           Op.set(ip, pp);
+           const op = this.Gl();
+           new Ep.b(Ep.b.RandomId(), op, Op, cp, this)
+         }
+         return this
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L217-L218` → after: `L5072-L5073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5072-L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5072-L5073) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L217-L218)

```diff
-       static get PreprocessUrl() {
-         return NC.e.PreprocessUrl
+       removeVerticesData(pp) {
+         this._geometry && this._geometry.removeVerticesData(pp)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L220-L221` → after: `L5075-L5078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5075-L5078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5075-L5078) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L220-L221)

```diff
-       static set PreprocessUrl(CC) {
-         NC.e.PreprocessUrl = CC
+       markVerticesDataAsUpdatable(pp) {
+         let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         const cp = this.getVertexBuffer(pp);
+         cp && cp.isUpdatable() !== ip && this.setVerticesData(pp, this.getVerticesData(pp), ip)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L223-L224` → after: `L5080-L5083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5080-L5083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5080-L5083) · [Before (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L223-L224)

```diff
-       static LoadImage(CC, zC, ZC, QC, wC, bC) {
-         return (0, NC.m)(CC, zC, ZC, QC, wC, bC)
+       setVerticesBuffer(pp) {
+         let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
+           cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         return this._geometry || (this._geometry = Ep.b.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(pp, cp, ip), this
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L226-L227` → after: `L5085-L5086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5085-L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5085-L5086) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L226-L227)

```diff
-       static LoadFile(CC, zC, ZC, QC, wC, bC) {
-         return (0, NC.i)(CC, zC, ZC, QC, wC, bC)
+       updateVerticesData(pp, ip, cp, Op) {
+         return this._geometry ? (Op ? (this.makeGeometryUnique(), this.updateVerticesData(pp, ip, cp, !1)) : this._geometry.updateVerticesData(pp, ip, cp), this) : this
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L229` → after: `L5088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5088) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L229)

```diff
-       static async LoadFileAsync(CC) {
+       updateMeshPositions(pp) {
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L231-L237` → after: `L5090-L5105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5090-L5105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5090-L5105) · [Before (L231-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L231-L237)

```diff
-         return await new Promise(((ZC, QC) => {
-           (0, NC.i)(CC, (CC => {
-             ZC(CC)
-           }), void 0, void 0, zC, ((CC, zC) => {
-             QC(zC)
-           }))
-         }))
+         const cp = this.getVerticesData(Mp.j.PositionKind);
+         if (!cp) return this;
+         if (pp(cp), this.updateVerticesData(Mp.j.PositionKind, cp, !1, !1), ip) {
+           const pp = this.NOp(),
+             ip = this.getVerticesData(Mp.j.NormalKind);
+           if (!ip) return this;
+           Cp.d.ComputeNormals(cp, pp, ip), this.updateVerticesData(Mp.j.NormalKind, ip, !1, !1)
+         }
+         return this
+       }
+       makeGeometryUnique() {
+         if (!this._geometry) return this;
+         if (1 === this._geometry.meshes.length) return this;
+         const pp = this._geometry,
+           ip = this._geometry.copy(Ep.b.RandomId());
+         return pp.releaseForMesh(this, !0), ip.applyToMesh(this), this
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L239-L243` → after: `L5107-L5121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5107-L5121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5107-L5121) · [Before (L239-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L239-L243)

```diff
-       static GetAssetUrl(CC) {
-         if (!CC) return "";
-         if (QC.AssetBaseUrl && CC.startsWith(QC._DefaultAssetsUrl)) {
-           const zC = QC.AssetBaseUrl.endsWith("/") ? QC.AssetBaseUrl.slice(0, -1) : QC.AssetBaseUrl;
-           return CC.replace(QC._DefaultAssetsUrl, zC)
+       setIndexBuffer(pp, ip, cp) {
+         let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+           op = this._geometry;
+         op || (op = new Ep.b(Ep.b.RandomId(), this.Gl(), void 0, void 0, this)), op.setIndexBuffer(pp, ip, cp, Op)
+       }
+       setIndices(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         if (this._geometry) this._geometry.setIndices(pp, ip, cp, Op);
+         else {
+           const Op = new Cp.d;
+           Op.indices = pp;
+           const op = this.Gl();
+           new Ep.b(Ep.b.RandomId(), op, Op, cp, this, ip)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L245` → after: `L5123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5123) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L245)

```diff
-         return CC
+         return this
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L247-L279` → after: `L5125-L5538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5125-L5538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5125-L5538) · [Before (L247-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L247-L279)

```diff
-       static GetBabylonScriptURL(CC, zC) {
-         if (!CC) return "";
-         if (CC.startsWith(QC._DefaultCdnUrl))
-           if (QC.ScriptBaseUrl) {
-             const zC = QC.ScriptBaseUrl.endsWith("/") ? QC.ScriptBaseUrl.slice(0, -1) : QC.ScriptBaseUrl;
-             CC = CC.replace(QC._DefaultCdnUrl, zC)
-           } else if (QC._CdnVersion) {
-           const zC = `${QC._DefaultCdnUrl}/v${QC._CdnVersion}`;
-           CC.startsWith(zC) || (CC = CC.replace(QC._DefaultCdnUrl, zC))
-         }
-         return CC = QC.ScriptPreprocessUrl(CC), zC && !QC.IsAbsoluteUrl(CC) && (CC = QC.GetAbsoluteUrl(CC)), CC
-       }
-       static LoadBabylonScript(CC, zC, ZC, wC) {
-         CC = QC.GetBabylonScriptURL(CC), QC.LoadScript(CC, zC, ZC)
-       }
-       static async LoadBabylonScriptAsync(CC) {
- ... (17 more removed lines; see GitHub link above)
+       updateIndices(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         return this._geometry ? (this._geometry.updateIndices(pp, ip, cp), this) : this
+       }
+       toLeftHanded() {
+         return this._geometry ? (this._geometry.toLeftHanded(), this) : this
+       }
+       _bind(pp, ip, cp) {
+         let Op = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+         if (!this._geometry) return this;
+         const op = this.Gl().gy();
+         let Ip;
+         if (this._unIndexed)
+           if (this._getRenderingFillMode(cp) === Qp.b.WireFrameFillMode) Ip = pp._getLinesIndexBuffer(this.NOp(), op);
+           else Ip = null;
+         else switch (this._getRenderingFillMode(cp)) {
+ ... (398 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L282-L284` → after: `L5541-L5548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5541-L5548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5541-L5548) · [Before (L282-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L282-L284)

```diff
-       static _LoadScriptWeb(CC, zC, ZC, QC) {
-         let wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         if ("function" === typeof importScripts) {
+       _checkDelayState() {
+         const pp = this.Gl();
+         return this._geometry ? this._geometry.load(pp) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(pp)), this
+       }
+       _queueLoad(pp) {
+         pp.addPendingData(this);
+         const ip = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
+         return (async () => {
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L286` → after: `L5550-L5553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5550-L5553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5550-L5553) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L286)

```diff
-             importScripts(CC), zC && zC()
+             const cp = await pp._loadDelayedFileAsync(this.delayLoadingFile, ip, !0);
+             cp instanceof ArrayBuffer ? this._delayLoadingFunction(cp, this) : this._delayLoadingFunction(JSON.parse(cp), this);
+             for (const pp of this.instances) pp.refreshBoundingInfo(), pp._syncSubMeshes();
+             this.delayLoadState = 1, pp.removePendingData(this)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L288` → after: `L5555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5555) · [Before (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L288)

```diff
-             ZC?.(`Unable to load script '${CC}' in worker`, oC)
+             pp.removePendingData(this), pp.uR || fp.e.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${cp}`)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L290` → after: `L5557-L5586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5557-L5586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5557-L5586) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L290)

```diff
-           return
+         })(), this
+       }
+       isInFrustum(pp) {
+         return 2 !== this.delayLoadState && (!!super.isInFrustum(pp) && (this._checkDelayState(), !0))
+       }
+       setMaterialById(pp) {
+         const ip = this.Gl().materials;
+         let cp;
+         for (cp = ip.length - 1; cp > -1; cp--)
+           if (ip[cp].id === pp) return this.material = ip[cp], this;
+         const Op = this.Gl().multiMaterials;
+         for (cp = Op.length - 1; cp > -1; cp--)
+           if (Op[cp].id === pp) return this.material = Op[cp], this;
+         return this
+       }
+       getAnimatables() {
+ ... (14 more added lines; see GitHub link above)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L292-L299` → after: `L5588-L5592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5588-L5592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5588-L5592) · [Before (L292-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L292-L299)

```diff
-         if (!(0, bC.k)()) return void ZC?.(`Cannot load script '${CC}' outside of a window or a worker`);
-         const nC = document.getElementsByTagName("head")[0],
-           fC = document.createElement("script");
-         wC ? (fC.setAttribute("type", "module"), fC.innerText = CC) : (fC.setAttribute("type", "text/javascript"), fC.setAttribute("src", CC)), QC && (fC.id = QC), fC.onload = () => {
-           zC && zC()
-         }, fC.onerror = zC => {
-           ZC && ZC(`Unable to load script '${CC}'`, zC)
-         }, nC.appendChild(fC)
+         if (this.isVerticesDataPresent(Mp.j.TangentKind)) {
+           for (cp = this.getVerticesData(Mp.j.TangentKind), op = 0; op < cp.length; op += 4) mp.o.TransformNormalFromFloatsToRef(cp[op], cp[op + 1], cp[op + 2], pp, Op).normalize().toArray(cp, op);
+           this.setVerticesData(Mp.j.TangentKind, cp, this.getVertexBuffer(Mp.j.TangentKind).isUpdatable())
+         }
+         return pp.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.Am = ip, this
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L301-L308` → after: `L5594-L5596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5594-L5596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5594-L5596) · [Before (L301-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L301-L308)

```diff
-       static async LoadScriptAsync(CC, zC) {
-         return await new Promise(((ZC, QC) => {
-           this.LoadScript(CC, (() => {
-             ZC()
-           }), ((CC, zC) => {
-             QC(zC || new Error(CC))
-           }), zC)
-         }))
+       bakeCurrentTransformIntoVertices() {
+         let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(pp), this
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L310-L320` → after: `L5598-L5599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5598-L5599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5598-L5599) · [Before (L310-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L310-L320)

```diff
-       static ReadFileAsDataURL(CC, zC, ZC) {
-         const QC = new FileReader,
-           bC = {
-             onCompleteObservable: new wC.d,
-             abort: () => QC.abort()
-           };
-         return QC.onloadend = () => {
-           bC.onCompleteObservable.notifyObservers(bC)
-         }, QC.onload = CC => {
-           zC(CC.target.result)
-         }, QC.onprogress = ZC, QC.readAsDataURL(CC), bC
+       get _positions() {
+         return this._internalAbstractMeshDataInfo._positions || this._geometry && this._geometry._positions || null
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L322-L323` → after: `L5601-L5602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5601-L5602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5601-L5602) · [Before (L322-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L322-L323)

```diff
-       static ReadFile(CC, zC, ZC, QC, wC) {
-         return (0, NC.o)(CC, zC, ZC, QC, wC)
+       _resetPointsArrayCache() {
+         return this._geometry && this._geometry._resetPointsArrayCache(), this
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L325-L327` → after: `L5604-L5605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5604-L5605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5604-L5605) · [Before (L325-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L325-L327)

```diff
-       static FileAsURL(CC) {
-         const zC = new Blob([CC]);
-         return window.URL.createObjectURL(zC)
+       _generatePointsArray() {
+         return !!this._geometry && this._geometry._generatePointsArray()
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L329-L331` → after: `L5607-L5616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5607-L5616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5607-L5616) · [Before (L329-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L329-L331)

```diff
-       static Format(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
-         return CC.toFixed(zC)
+       clone() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
+           ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           cp = arguments.length > 2 ? arguments[2] : void 0,
+           Op = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+         if (ip && void 0 === ip._addToSceneRootNodes) {
+           const cp = ip;
+           return sp.source = this, sp.doNotCloneChildren = cp.doNotCloneChildren, sp.clonePhysicsImpostor = cp.clonePhysicsImpostor, sp.cloneThinInstances = cp.cloneThinInstances, new Kp(pp, this.Gl(), sp)
+         }
+         return new Kp(pp, this.Gl(), ip, this, cp, Op)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L333-L334` → after: `L5618-L5636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5618-L5636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5618-L5636) · [Before (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L333-L334)

```diff
-       static DeepCopy(CC, zC, ZC, QC) {
-         fC.e.DeepCopy(CC, zC, ZC, QC)
+       dispose(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
+         const cp = this._internalMeshDataInfo;
+         if (cp._onBeforeDrawObservable && cp._onBeforeDrawObservable.clear(), cp._onBeforeBindObservable && cp._onBeforeBindObservable.clear(), cp._onBeforeRenderObservable && cp._onBeforeRenderObservable.clear(), cp._onAfterRenderObservable && cp._onAfterRenderObservable.clear() … [truncated]
+           if (cp.meshMap)
+             for (const pp in cp.meshMap) {
+               const ip = cp.meshMap[pp];
+               ip && (ip._internalMeshDataInfo._source = null, cp.meshMap[pp] = void 0)
+             }
+           cp._source && cp._source._internalMeshDataInfo.meshMap && (cp._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
+         } else {
+           const pp = this.Gl().meshes;
+           for (const ip of pp) {
+             const pp = ip;
+             pp._internalMeshDataInfo && pp._internalMeshDataInfo._source && pp._internalMeshDataInfo._source === this && (pp._internalMeshDataInfo._source = null)
+ ... (3 more added lines; see GitHub link above)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L336-L339` → after: `L5638-L5652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5638-L5652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5638-L5652) · [Before (L336-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L336-L339)

```diff
-       static IsEmpty(CC) {
-         for (const zC in CC)
-           if (Object.prototype.hasOwnProperty.call(CC, zC)) return !1;
-         return !0
+       _disposeInstanceSpecificData() {}
+       _disposeThinInstanceSpecificData() {}
+       _invalidateInstanceVertexArrayObject() {}
+       applyDisplacementMap(pp, ip, cp, Op, op, Ip) {
+         let Sp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+           xp = arguments.length > 7 ? arguments[7] : void 0;
+         const Lp = this.Gl();
+         return (0, Hp.p)(pp, (pp => {
+           const xp = pp.width,
+             Lp = pp.height,
+             Yp = this.gy().createCanvas(xp, Lp).getContext("2d");
+           Yp.drawImage(pp, 0, 0);
+           const Dp = Yp.getImageData(0, 0, xp, Lp).data;
+           this.applyDisplacementMapFromBuffer(Dp, xp, Lp, ip, cp, op, Ip, Sp), Op && Op(this)
+         }), xp || (() => {}), Lp.offlineProvider), this
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L341-L347` → after: `L5654-L5668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5654-L5668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5654-L5668) · [Before (L341-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L341-L347)

```diff
-       static RegisterTopRootEvents(CC, zC) {
-         for (let QC = 0; QC < zC.length; QC++) {
-           const wC = zC[QC];
-           CC.addEventListener(wC.name, wC.handler, !1);
-           try {
-             window.parent && window.parent.addEventListener(wC.name, wC.handler, !1)
-           } catch (ZC) {}
+       applyDisplacementMapFromBuffer(pp, ip, cp, Op, op, Ip, Sp) {
+         let xp = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
+         if (!this.isVerticesDataPresent(Mp.j.PositionKind) || !this.isVerticesDataPresent(Mp.j.NormalKind) || !this.isVerticesDataPresent(Mp.j.UVKind)) return fp.e.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
+         const Lp = this.getVerticesData(Mp.j.PositionKind, !0, !0),
+           Yp = this.getVerticesData(Mp.j.NormalKind),
+           Dp = this.getVerticesData(Mp.j.UVKind);
+         let Ap = mp.o.Zero();
+         const Pp = mp.o.Zero(),
+           Wp = mp.l.Zero();
+         Ip = Ip || mp.l.Zero(), Sp = Sp || new mp.l(1, 1);
+         for (let yp = 0; yp < Lp.length; yp += 3) {
+           mp.o.FromArrayToRef(Lp, yp, Ap), mp.o.FromArrayToRef(Yp, yp, Pp), mp.l.FromArrayToRef(Dp, yp / 3 * 2, Wp);
+           const xp = 4 * ((Math.abs(Wp.x * Sp.x + Ip.x % 1) * (ip - 1) % ip | 0) + (Math.abs(Wp.y * Sp.y + Ip.y % 1) * (cp - 1) % cp | 0) * ip),
+             Up = .3 * (pp[xp] / 255) + .59 * (pp[xp + 1] / 255) + .11 * (pp[xp + 2] / 255);
+           Pp.normalize(), Pp.scaleInPlace(Op + (op - Op) * Up), Ap = Ap.add(Pp), Ap.toArray(Lp, yp)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L350-L356` → after: `L5672-L5684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5672-L5684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5672-L5684) · [Before (L350-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L350-L356)

```diff
-       static UnregisterTopRootEvents(CC, zC) {
-         for (let QC = 0; QC < zC.length; QC++) {
-           const wC = zC[QC];
-           CC.removeEventListener(wC.name, wC.handler);
-           try {
-             CC.parent && CC.parent.removeEventListener(wC.name, wC.handler)
-           } catch (ZC) {}
+       _getFlattenedNormals(pp, ip) {
+         const cp = new Float32Array(3 * pp.length);
+         let Op = 0;
+         const op = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
+         for (let Ip = 0; Ip < pp.length; Ip += 3) {
+           const Sp = mp.o.FromArray(ip, 3 * pp[Ip]),
+             xp = mp.o.FromArray(ip, 3 * pp[Ip + 1]),
+             Lp = mp.o.FromArray(ip, 3 * pp[Ip + 2]),
+             Yp = Sp.subtract(xp),
+             Dp = Lp.subtract(xp),
+             Ap = mp.o.Normalize(mp.o.Cross(Yp, Dp));
+           op && Ap.scaleInPlace(-1);
+           for (let pp = 0; pp < 3; pp++) cp[Op++] = Ap.x, cp[Op++] = Ap.y, cp[Op++] = Ap.z
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L359-L360` → after: `L5688-L5733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5688-L5733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5688-L5733) · [Before (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L359-L360)

```diff
-       static async DumpFramebuffer(CC, zC, ZC, QC) {
-         throw (0, qC.i)("DumpTools")
+       _convertToUnIndexedMesh() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const ip = this.getVerticesDataKinds().filter((pp => !this.getVertexBuffer(pp)?.getIsInstanced())),
+           cp = this.NOp(!1, !0),
+           Op = {},
+           op = (pp, ip) => {
+             const Op = new Float32Array(cp.length * ip);
+             let op = 0;
+             for (let Ip = 0; Ip < cp.length; Ip++)
+               for (let Sp = 0; Sp < ip; Sp++) Op[op++] = pp[cp[Ip] * ip + Sp];
+             return Op
+           },
+           Ip = this.bJ(),
+           Sp = this.geometry ? this.Am.slice(0) : [];
+         for (const xp of ip) Op[xp] = this.getVerticesData(xp);
+         for (const xp of ip) {
+ ... (30 more added lines; see GitHub link above)
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L362-L363` → after: `L5735-L5736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5735-L5736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5735-L5736) · [Before (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L362-L363)

```diff
-       static DumpData(CC, zC, ZC, QC) {
-         throw (0, qC.i)("DumpTools")
+       convertToFlatShadedMesh() {
+         return this._convertToUnIndexedMesh(!0)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L365-L366` → after: `L5738-L5739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5738-L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5738-L5739) · [Before (L365-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L365-L366)

```diff
-       static async DumpDataAsync(CC, zC, ZC) {
-         throw (0, qC.i)("DumpTools")
+       convertToUnIndexedMesh() {
+         return this._convertToUnIndexedMesh()
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L368-L369` → after: `L5741-L5754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5741-L5754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5741-L5754) · [Before (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L368-L369)

```diff
-       static _IsOffScreenCanvas(CC) {
-         return void 0 !== CC.convertToBlob
+       flipFaces() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const ip = Cp.d.ExtractFromMesh(this);
+         let cp;
+         if (pp && this.isVerticesDataPresent(Mp.j.NormalKind) && ip.normals) {
+           for (cp = 0; cp < ip.normals.length; cp++) ip.normals[cp] *= -1;
+           this.setVerticesData(Mp.j.NormalKind, ip.normals, this.isVertexBufferUpdatable(Mp.j.NormalKind))
+         }
+         if (ip.indices) {
+           let pp;
+           for (cp = 0; cp < ip.indices.length; cp += 3) pp = ip.indices[cp + 1], ip.indices[cp + 1] = ip.indices[cp + 2], ip.indices[cp + 2] = pp;
+           this.setIndices(ip.indices, null, this.isVertexBufferUpdatable(Mp.j.PositionKind), !0)
+         }
+         return this
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L371-L387` → after: `L5756-L6207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5756-L6207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L5756-L6207) · [Before (L371-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L371-L387)

```diff
-       static ToBlob(CC, zC) {
-         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
-           wC = arguments.length > 3 ? arguments[3] : void 0;
-         QC._IsOffScreenCanvas(CC) || CC.toBlob || (CC.toBlob = function(CC, zC, ZC) {
-           setTimeout((() => {
-             const QC = atob(this.toDataURL(zC, ZC).split(",")[1]),
-               wC = QC.length,
-               bC = new Uint8Array(wC);
-             for (let CC = 0; CC < wC; CC++) bC[CC] = QC.charCodeAt(CC);
-             CC(new Blob([bC]))
-           }))
-         }), QC._IsOffScreenCanvas(CC) ? CC.convertToBlob({
-           type: ZC,
-           quality: wC
-         }).then((CC => zC(CC))) : CC.toBlob((function(CC) {
-           zC(CC)
- ... (1 more removed lines; see GitHub link above)
+       increaseVertices() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
+         const ip = Cp.d.ExtractFromMesh(this),
+           cp = ip.indices && !Array.isArray(ip.indices) && Array.from ? Array.from(ip.indices) : ip.indices,
+           Op = ip.positions && !Array.isArray(ip.positions) && Array.from ? Array.from(ip.positions) : ip.positions,
+           op = ip.uvs && !Array.isArray(ip.uvs) && Array.from ? Array.from(ip.uvs) : ip.uvs,
+           Ip = ip.normals && !Array.isArray(ip.normals) && Array.from ? Array.from(ip.normals) : ip.normals;
+         if (cp && Op) {
+           ip.indices = cp, ip.positions = Op, op && (ip.uvs = op), Ip && (ip.normals = Ip);
+           const Sp = pp + 1,
+             xp = [];
+           for (let pp = 0; pp < Sp + 1; pp++) xp[pp] = [];
+           let Lp, Yp;
+           const Dp = new mp.o(0, 0, 0),
+             Ap = new mp.o(0, 0, 0),
+             Pp = new mp.l(0, 0),
+ ... (436 more added lines; see GitHub link above)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L389-L393` → after: `L6209-L6214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6209-L6214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6209-L6214) · [Before (L389-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L389-L393)

```diff
-       static DownloadBlob(CC, zC) {
-         if ("download" in document.createElement("a")) {
-           if (!zC) {
-             const CC = new Date;
-             zC = "screenshot_" + ((CC.getFullYear() + "-" + (CC.getMonth() + 1)).slice(2) + "-" + CC.getDate() + "_" + CC.getHours() + "-" + ("0" + CC.getMinutes()).slice(-2)) + ".png"
+       o3(pp) {
+         const ip = pp._indexInSourceMeshInstanceArray;
+         if (-1 != ip) {
+           if (ip !== this.instances.length - 1) {
+             const pp = this.instances[this.instances.length - 1];
+             this.instances[ip] = pp, pp._indexInSourceMeshInstanceArray = ip
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L395-L403` → after: `L6216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6216) · [Before (L395-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L395-L403)

```diff
-           QC.Download(CC, zC)
-         } else if (CC && "undefined" !== typeof URL) {
-           const zC = URL.createObjectURL(CC),
-             ZC = window.open("");
-           if (!ZC) return;
-           const QC = ZC.document.createElement("img");
-           QC.onload = function() {
-             URL.revokeObjectURL(zC)
-           }, QC.src = zC, ZC.document.body.appendChild(QC)
+           pp._indexInSourceMeshInstanceArray = -1, this.instances.pop()
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L406-L427` → after: `L6219-L6220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6219-L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6219-L6220) · [Before (L406-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L406-L427)

```diff
-       static EncodeScreenshotCanvasData(CC, zC) {
-         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
-           wC = arguments.length > 3 ? arguments[3] : void 0,
-           bC = arguments.length > 4 ? arguments[4] : void 0;
-         if ("string" !== typeof wC && zC) {
-           if (zC) {
-             if (QC._IsOffScreenCanvas(CC)) return void CC.convertToBlob({
-               type: ZC,
-               quality: bC
-             }).then((CC => {
-               const ZC = new FileReader;
-               ZC.readAsDataURL(CC), ZC.onloadend = () => {
-                 const CC = ZC.result;
-                 zC(CC)
-               }
-             }));
- ... (6 more removed lines; see GitHub link above)
+       _shouldConvertRHS() {
+         return this._scene.useRightHandedSystem && this.sideOrientation === Qp.b.CounterClockWiseSideOrientation
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L429-L435` → after: `L6222-L6224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6222-L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6222-L6224) · [Before (L429-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L429-L435)

```diff
-       static Download(CC, zC) {
-         if ("undefined" === typeof URL) return;
-         const ZC = window.URL.createObjectURL(CC),
-           QC = document.createElement("a");
-         document.body.appendChild(QC), QC.style.display = "none", QC.href = ZC, QC.download = zC, QC.addEventListener("click", (() => {
-           QC.parentElement && QC.parentElement.removeChild(QC)
-         })), QC.click(), window.URL.revokeObjectURL(ZC)
+       _getRenderingFillMode(pp) {
+         const ip = this.Gl();
+         return ip.forcePointsCloud ? Qp.b.PointFillMode : ip.forceWireframe ? Qp.b.WireFrameFillMode : this.overrideRenderingFillMode ?? pp
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L437-L438` → after: `L6226-L6227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6226-L6227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6226-L6227) · [Before (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L437-L438)

```diff
-       static BackCompatCameraNoPreventDefault(CC) {
-         return "boolean" === typeof CC[0] ? CC[0] : "boolean" === typeof CC[1] && CC[1]
+       setMaterialByID(pp) {
+         return this.setMaterialById(pp)
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L440-L441` → after: `L6229-L6230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6229-L6230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6229-L6230) · [Before (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L440-L441)

```diff
-       static CreateScreenshot(CC, zC, ZC, QC) {
-         throw (0, qC.i)("ScreenshotTools")
+       static CreateRibbon(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L443-L444` → after: `L6232-L6233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6232-L6233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6232-L6233) · [Before (L443-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L443-L444)

```diff
-       static async CreateScreenshotAsync(CC, zC, ZC) {
-         throw (0, qC.i)("ScreenshotTools")
+       static CreateDisc(pp, ip, cp, Op, op, Ip) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L446-L447` → after: `L6235-L6236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6235-L6236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6235-L6236) · [Before (L446-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L446-L447)

```diff
-       static CreateScreenshotUsingRenderTarget(CC, zC, ZC, QC) {
-         throw (0, qC.i)("ScreenshotTools")
+       static CreateBox(pp, ip, cp, Op, op) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L449-L450` → after: `L6238-L6239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6238-L6239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6238-L6239) · [Before (L449-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L449-L450)

```diff
-       static async CreateScreenshotUsingRenderTargetAsync(CC, zC, ZC) {
-         throw (0, qC.i)("ScreenshotTools")
+       static CreateSphere(pp, ip, cp, Op, op, Ip) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L452-L453` → after: `L6241-L6242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6241-L6242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6241-L6242) · [Before (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L452-L453)

```diff
-       static RandomId() {
-         return (0, SC.b)()
+       static CreateHemisphere(pp, ip, cp, Op) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L455-L456` → after: `L6244-L6245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6244-L6245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6244-L6245) · [Before (L455-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L455-L456)

```diff
-       static IsBase64(CC) {
-         return (0, NC.h)(CC)
+       static CreateCylinder(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L458-L459` → after: `L6247-L6248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6247-L6248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6247-L6248) · [Before (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L458-L459)

```diff
-       static DecodeBase64(CC) {
-         return (0, NC.d)(CC)
+       static CreateTorus(pp, ip, cp, Op, op, Ip, Sp) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L461-L462` → after: `L6250-L6251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6250-L6251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6250-L6251) · [Before (L461-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L461-L462)

```diff
-       static get errorsCount() {
-         return nC.c.errorsCount
+       static CreateTorusKnot(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L464-L465` → after: `L6253-L6254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6253-L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6253-L6254) · [Before (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L464-L465)

```diff
-       static Log(CC) {
-         nC.c.Log(CC)
+       static CreateLines(pp, ip, cp, Op, op) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L467-L468` → after: `L6256-L6257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6256-L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6256-L6257) · [Before (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L467-L468)

```diff
-       static Warn(CC) {
-         nC.c.Warn(CC)
+       static CreateDashedLines(pp, ip, cp, Op, op, Ip, Sp, xp) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L470-L471` → after: `L6259-L6260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6259-L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6259-L6260) · [Before (L470-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L470-L471)

```diff
-       static Error(CC) {
-         nC.c.Error(CC)
+       static CreatePolygon(pp, ip, cp, Op, op, Ip, Sp) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L473-L474` → after: `L6262-L6263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6262-L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6262-L6263) · [Before (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L473-L474)

```diff
-       static get LogCache() {
-         return nC.c.LogCache
+       static ExtrudePolygon(pp, ip, cp, Op, op, Ip, Sp, xp) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L476-L477` → after: `L6265-L6266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6265-L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6265-L6266) · [Before (L476-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L476-L477)

```diff
-       static ClearLogCache() {
-         nC.c.ClearLogCache()
+       static ExtrudeShape(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L479-L480` → after: `L6268-L6269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6268-L6269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6268-L6269) · [Before (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L479-L480)

```diff
-       static set LogLevels(CC) {
-         nC.c.LogLevels = CC
+       static ExtrudeShapeCustom(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L482-L483` → after: `L6271-L6272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6271-L6272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6271-L6272) · [Before (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L482-L483)

```diff
-       static set PerformanceLogLevel(CC) {
-         (CC & QC.PerformanceUserMarkLogLevel) !== QC.PerformanceUserMarkLogLevel ? (CC & QC.PerformanceConsoleLogLevel) !== QC.PerformanceConsoleLogLevel ? (QC.StartPerformanceCounter = QC._StartPerformanceCounterDisabled, QC.EndPerformanceCounter = QC._EndPerformanceCounterDisab … [truncated]
+       static CreateLathe(pp, ip, cp, Op, op, Ip, Sp) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L485-L493` → after: `L6274-L6275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6274-L6275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6274-L6275) · [Before (L485-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L485-L493)

```diff
-       static _StartPerformanceCounterDisabled(CC, zC) {}
-       static _EndPerformanceCounterDisabled(CC, zC) {}
-       static _StartUserMark(CC) {
-         let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (!QC._Performance) {
-           if (!(0, bC.k)()) return;
-           QC._Performance = window.performance
-         }
-         zC && QC._Performance.mark && QC._Performance.mark(CC + "-Begin")
+       static CreatePlane(pp, ip, cp, Op, op) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L495-L496` → after: `L6277-L6278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6277-L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6277-L6278) · [Before (L495-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L495-L496)

```diff
-       static _EndUserMark(CC) {
-         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && QC._Performance.mark && (QC._Performance.mark(CC + "-End"), QC._Performance.measure(CC, CC + "-Begin", CC + "-End"))
+       static CreateGround(pp, ip, cp, Op, op, Ip) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L498-L500` → after: `L6280-L6281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6280-L6281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6280-L6281) · [Before (L498-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L498-L500)

```diff
-       static _StartPerformanceConsole(CC) {
-         let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         zC && (QC._StartUserMark(CC, zC), console.time && console.time(CC))
+       static CreateTiledGround(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L502-L504` → after: `L6283-L6284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6283-L6284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6283-L6284) · [Before (L502-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L502-L504)

```diff
-       static _EndPerformanceConsole(CC) {
-         let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         zC && (QC._EndUserMark(CC, zC), console.timeEnd(CC))
+       static CreateGroundFromHeightMap(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L506-L512` → after: `L6286-L6287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6286-L6287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6286-L6287) · [Before (L506-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L506-L512)

```diff
-       static _StartMarkNative(CC) {
-         if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
-           if (QC._NativePerformanceCounterHandles.has(CC)) QC.Warn(`Performance counter with name ${CC} is already started.`);
-           else {
-             const zC = _native.startPerformanceCounter(CC);
-             QC._NativePerformanceCounterHandles.set(CC, zC)
-           }
+       static CreateTube(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L514-L518` → after: `L6289-L6290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6289-L6290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6289-L6290) · [Before (L514-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L514-L518)

```diff
-       static _EndMarkNative(CC) {
-         if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
-           const zC = QC._NativePerformanceCounterHandles.get(CC);
-           zC ? (_native.endPerformanceCounter(zC), QC._NativePerformanceCounterHandles.delete(CC)) : QC.Warn(`Performance counter with name ${CC} was not started.`)
-         }
+       static CreatePolyhedron(pp, ip, cp) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L520-L521` → after: `L6292-L6293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6292-L6293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6292-L6293) · [Before (L520-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L520-L521)

```diff
-       static get Now() {
-         return oC.b.Now
+       static CreateIcoSphere(pp, ip, cp) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L523-L533` → after: `L6295-L6296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6295-L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6295-L6296) · [Before (L523-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L523-L533)

```diff
-       static GetClassName(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           ZC = null;
-         if (!zC && CC.getClassName) ZC = CC.getClassName();
-         else {
-           if (CC instanceof Object) {
-             ZC = (zC ? CC : Object.getPrototypeOf(CC)).constructor.__bjsclassName__
-           }
-           ZC || (ZC = typeof CC)
-         }
-         return ZC
+       static CreateDecal(pp, ip, cp, Op, op, Ip) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L535-L538` → after: `L6298-L6299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6298-L6299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6298-L6299) · [Before (L535-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L535-L538)

```diff
-       static First(CC, zC) {
-         for (const ZC of CC)
-           if (zC(ZC)) return ZC;
-         return null
+       static CreateCapsule(pp, ip, cp) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L540-L548` → after: `L6301-L6394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6301-L6394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6301-L6394) · [Before (L540-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L540-L548)

```diff
-       static getFullClassName(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           ZC = null,
-           QC = null;
-         if (!zC && CC.getClassName) ZC = CC.getClassName();
-         else {
-           if (CC instanceof Object) {
-             const wC = zC ? CC : Object.getPrototypeOf(CC);
-             ZC = wC.constructor.__bjsclassName__, QC = wC.constructor.__bjsmoduleName__
+       static ExtendToGoldberg(pp) {
+         throw new Error("Import MeshBuilder to populate this function")
+       }
+     }
+     Kp.FRONTSIDE = Cp.d.FRONTSIDE, Kp.BACKSIDE = Cp.d.BACKSIDE, Kp.DOUBLESIDE = Cp.d.DOUBLESIDE, Kp.DEFAULTSIDE = Cp.d.DEFAULTSIDE, Kp.NO_CAP = 0, Kp.CAP_START = 1, Kp.CAP_END = 2, Kp.CAP_ALL = 3, Kp.NO_FLIP = 0, Kp.FLIP_TILE = 1, Kp.ROTATE_TILE = 2, Kp.FLIP_ROW = 3, Kp.ROTATE_RO … [truncated]
+       throw (0, hp.o)("GroundMesh")
+     }, Kp._GoldbergMeshParser = (pp, ip) => {
+       throw (0, hp.o)("GoldbergMesh")
+     }, Kp._LinesMeshParser = (pp, ip) => {
+       throw (0, hp.o)("LinesMesh")
+     }, Kp._GreasedLineMeshParser = (pp, ip) => {
+       throw (0, hp.o)("GreasedLineMesh")
+     }, Kp._GreasedLineRibbonMeshParser = (pp, ip) => {
+       throw (0, hp.o)("GreasedLineRibbonMesh")
+     }, Kp._TrailMeshParser = (pp, ip) => {
+       throw (0, hp.o)("TrailMesh")
+ ... (78 more added lines; see GitHub link above)
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L552-L563` → after: `L6397-L6878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6397-L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6397-L6878) · [Before (L552-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L552-L563)

```diff
-         return ZC ? (null != QC ? QC + "." : "") + ZC : null
-       }
-       static async DelayAsync(CC) {
-         await new Promise((zC => {
-           setTimeout((() => {
-             zC()
-           }), CC)
-         }))
-       }
-       static IsSafari() {
-         return !!(0, bC.h)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
-       }
+         applyToMesh(pp, ip) {
+           return this._applyTo(pp, ip, !1), this
+         }
+         applyToGeometry(pp, ip) {
+           return this._applyTo(pp, ip, !1), this
+         }
+         updateMesh(pp) {
+           return this._update(pp), this
+         }
+         updateGeometry(pp) {
+           return this._update(pp), this
+         }* _applyToCoroutine(pp) {
+           let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+             cp = arguments.length > 2 ? arguments[2] : void 0;
+           if (this.positions && (pp.setVerticesData(Ip.j.PositionKind, this.positions, ip), cp && (yield)), this.normals && (pp.setVerticesData(Ip.j.NormalKind, this.normals, ip), cp && (yield)), this.tangents && (pp.setVerticesData(Ip.j.TangentKind, this.tangents, ip), cp && (yi … [truncated]
+             const Op = this.positions && this.colors.length === this.positions.length ? 3 : 4;
+ ... (466 more added lines; see GitHub link above)
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L566-L568` → after: `L6881-L6887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6881-L6887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6881-L6887) · [Before (L566-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L566-L568)

```diff
-     function GC(CC, zC) {
-       return ZC => {
-         ZC.__bjsclassName__ = CC, ZC.__bjsmoduleName__ = null != zC ? zC : null
+     function Dp(pp, ip, cp, Op) {
+       cp.E_(Number.POSITIVE_INFINITY), Op.E_(Number.NEGATIVE_INFINITY);
+       for (let op = 0; op < 3 * ip; op += 3) {
+         const ip = pp[op],
+           Ip = pp[op + 1],
+           Sp = pp[op + 2];
+         ip < cp.x && (cp.x = ip), Ip < cp.y && (cp.y = Ip), Sp < cp.z && (cp.z = Sp), ip > Op.x && (Op.x = ip), Ip > Op.y && (Op.y = Ip), Sp > Op.z && (Op.z = Sp)
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L571-L580` → after: `L6890-L6965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6890-L6965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6890-L6965) · [Before (L571-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L571-L580)

```diff
-     QC = PC, PC.AssetBaseUrl = "", PC.UseCustomRequestHeaders = !1, PC.CustomRequestHeaders = FC.d.CustomRequestHeaders, PC.GetDOMTextContent = bC.e, PC._DefaultCdnUrl = "https://cdn.babylonjs.com", PC._CdnVersion = "9.28.0", PC._DefaultAssetsUrl = "https://assets.babylonjs.com/c … [truncated]
-       const zC = document.createElement("a");
-       return zC.href = CC, zC.href
-     } : "function" === typeof URL && "object" === typeof location ? CC => new URL(CC, location.origin).href : () => {
-       throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
-     }, PC.NoneLogLevel = nC.c.NoneLogLevel, PC.MessageLogLevel = nC.c.MessageLogLevel, PC.WarningLogLevel = nC.c.WarningLogLevel, PC.ErrorLogLevel = nC.c.ErrorLogLevel, PC.AllLogLevel = nC.c.AllLogLevel, PC.IsWindowObjectExist = bC.k, PC.PerformanceNoneLogLevel = 0, PC.Performanc … [truncated]
-     class RC {
-       constructor(CC, zC, ZC) {
-         let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-         this.iterations = CC, this.index = QC - 1, this._done = !1, this._fn = zC, this._successCallback = ZC
+ 
+     function Ap(pp, ip, cp) {
+       cp && (pp.x -= pp.x * cp.x + cp.y, pp.y -= pp.y * cp.x + cp.y, pp.z -= pp.z * cp.x + cp.y, ip.x += ip.x * cp.x + cp.y, ip.y += ip.y * cp.x + cp.y, ip.z += ip.z * cp.x + cp.y)
+     }
+ 
+     function Pp(pp, ip, cp, op, Ip) {
+       const Sp = Op.i.Zy[7],
+         xp = Op.i.Zy[8];
+       for (let Lp = 0; Lp < 2; ++Lp)
+         for (let Yp = 0; Yp < 2; ++Yp)
+           for (let Dp = 0; Dp < 2; ++Dp) Sp.set(Lp ? ip.x : pp.x, Yp ? ip.y : pp.y, Dp ? ip.z : pp.z), Op.o.TransformCoordinatesToRef(Sp, cp, xp), op.minimizeInPlace(xp), Ip.maximizeInPlace(xp)
+     }
+ 
+     function Wp(pp, ip, cp, op, Ip) {
+       const Sp = Op.i.Zy[7];
+       for (let xp = 0; xp < 3 * ip; xp += 3) Op.o.TransformCoordinatesFromFloatsToRef(pp[xp], pp[xp + 1], pp[xp + 2], cp, Sp), op.minimizeInPlace(Sp), Ip.maximizeInPlace(Sp)
+ ... (60 more added lines; see GitHub link above)
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L582-L583` → after: `L6967-L6972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6967-L6972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6967-L6972) · [Before (L582-L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L582-L583)

```diff
-       executeNext() {
-         this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
+     }, Sp.d.prototype.thinInstanceGetWorldMatrices = function() {
+       if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
+       const pp = this._thinInstanceDataStorage.matrixData;
+       if (!this._thinInstanceDataStorage.worldMatrices) {
+         this._thinInstanceDataStorage.worldMatrices = [];
+         for (let ip = 0; ip < this._thinInstanceDataStorage.instancesCount; ++ip) this._thinInstanceDataStorage.worldMatrices[ip] = Op.b.FromArray(pp, 16 * ip)
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L585-L586` → after: `L6974-L7027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6974-L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L6974-L7027) · [Before (L585-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L585-L586)

```diff
-       breakLoop() {
-         this._done = !0, this._successCallback()
+       return this._thinInstanceDataStorage.worldMatrices
+     }, Sp.d.prototype.thinInstanceRefreshBoundingInfo = function() {
+       let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+         ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+         cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+         op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
+       const Sp = this._thinInstanceDataStorage.boundingVectors;
+       if (pp || !this.rawBoundingInfo) {
+         if (Sp.length = 0, op && function(pp, ip, cp) {
+             const op = pp._userThinInstanceBuffersStorage,
+               Sp = op?.data[Lp],
+               yp = op?.strides[Lp];
+             if (!Sp || !yp || yp < 4 || !Yp(pp)) return !1;
+             const Up = pp._thinInstanceDataStorage.matrixData;
+             if (!Up) return !1;
+ ... (38 more added lines; see GitHub link above)
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L588-L590` → after: `L7029-L7036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR7029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L7029-L7036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L7029-L7036) · [Before (L588-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L588-L590)

```diff
-       static Run(CC, zC, ZC) {
-         const QC = new RC(CC, zC, ZC, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
-         return QC.executeNext(), QC
+       const yp = this.bJ(),
+         Up = this._thinInstanceDataStorage.matrixData;
+       if (0 === Sp.length)
+         for (let Op = 0; Op < yp.boundingBox.vectors.length; ++Op) Sp.push(yp.boundingBox.vectors[Op].clone());
+       Op.i.Zy[0].E_(Number.POSITIVE_INFINITY), Op.i.Zy[1].E_(Number.NEGATIVE_INFINITY);
+       for (let Ip = 0; Ip < this._thinInstanceDataStorage.instancesCount; ++Ip) {
+         Op.b.FromArrayToRef(Up, 16 * Ip, Op.i.Matrix[0]);
+         for (let pp = 0; pp < Sp.length; ++pp) Op.o.TransformCoordinatesToRef(Sp[pp], Op.i.Matrix[0], Op.i.Zy[2]), Op.i.Zy[0].minimizeInPlace(Op.i.Zy[2]), Op.i.Zy[1].maximizeInPlace(Op.i.Zy[2])
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L592-L601` → after: `L7038-L7477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR7038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L7038-L7477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L7038-L7477) · [Before (L592-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L592-L601)

```diff
-       static SyncAsyncForLoop(CC, zC, ZC, QC, wC) {
-         let bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
-         return RC.Run(Math.ceil(CC / zC), (QC => {
-           wC && wC() ? QC.breakLoop() : setTimeout((() => {
-             for (let bC = 0; bC < zC; ++bC) {
-               const nC = QC.index * zC + bC;
-               if (nC >= CC) break;
-               if (ZC(nC), wC && wC()) {
-                 QC.breakLoop();
-                 break
+       yp.reConstruct(Op.i.Zy[0], Op.i.Zy[1]), this._updateBoundingInfo()
+     }, Sp.d.prototype._thinInstanceRecreateBuffer = function(pp) {
+       let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+       "matrix" === pp ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, ip)) : "previousMatrix" === pp ? this._scene.needsPreviousWorldMatr … [truncated]
+     }, Sp.d.prototype._thinInstanceUpdateBufferSize = function(pp) {
+       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+       pp === xp.j.ColorKind && (pp = xp.j.ColorInstanceKind);
+       const cp = "matrix" === pp;
+       if (!cp && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[pp])) return;
+       const Op = cp ? 16 : this._userThinInstanceBuffersStorage.strides[pp],
+         op = cp ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[pp];
+       let Ip = cp ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[pp];
+       const Sp = (this._thinInstanceDataStorage.instancesCount + ip) * Op;
+       let Lp = op;
+       for (; Lp < Sp;) Lp *= 2;
+       if (!Ip || op != Lp) {
+ ... (424 more added lines; see GitHub link above)
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L604-L606` → after: `L7480-L7682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR7480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L7480-L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L7480-L7682) · [Before (L604-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L604-L606)

```diff
-             QC.executeNext()
-           }), bC)
-         }), QC)
+           }
+           this.ei.i5(1, 1, 1), this.position.i5(0, 0, 0), this.rotation.i5(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = Ap.f.Identity()), this._worldMatrix = Ap.b.Identity()
+         }
+         _afterComputeWorldMatrix() {}
+         registerAfterWorldMatrixUpdate(pp) {
+           return this.onAfterWorldMatrixUpdateObservable.add(pp), this
+         }
+         unregisterAfterWorldMatrixUpdate(pp) {
+           return this.onAfterWorldMatrixUpdateObservable.removeCallback(pp), this
+         }
+         getPositionInCameraSpace() {
+           let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+           return pp || (pp = this.Gl().activeCamera), Ap.o.TransformCoordinates(this.getAbsolutePosition(), pp.getViewMatrix())
+         }
+         getDistanceToCamera() {
+           let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+ ... (187 more added lines; see GitHub link above)
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L612` → after: `L7689-L7711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR7689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L7689-L7711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/255.js#L7689-L7711) · [Before (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/255.js#L612)

```diff
-       AC || (AC = !0, PC.Mix = pC.i, PC.IsExponentOfTwo = pC.h, WC.c.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAE … [truncated]
+       vp || (vp = !0, Up.Parse = wp)
+     }(Op = Up.prototype).fn ?? (Op.fn = (0, yp.k)("TransformNode", "fn")), (op = Up.prototype).applyImpulse ?? (op.applyImpulse = (0, yp.k)("TransformNode", "applyImpulse")), (Ip = Up.prototype).applyAngularImpulse ?? (Ip.applyAngularImpulse = (0, yp.k)("TransformNode", "applyAng … [truncated]
+   },
+   40586: (pp, ip, cp) => {
+     function Op(pp, ip, cp) {
+       try {
+         const Op = pp.next();
+         Op.done ? ip(Op) : Op.value ? Op.value.then((() => {
+           Op.value = void 0, ip(Op)
+         }), cp) : ip(Op)
+       } catch (Op) {
+         cp(Op)
+       }
+     }
+ 
+     function op() {
+ ... (7 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/256.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/256.js` (99 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L4)

```diff
-   40256: (CC, zC, ZC) => {
+   40342: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L6-L12` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L6-L9) · [Before (L6-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L6-L12)

```diff
-       d: () => QC
-     });
-     let QC = !1
-   },
-   39803: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => gC
+       b: () => xp,
+       f: () => Up,
+       i: () => Yp,
+       j: () => Lp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L14-L20` → after: `L11-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L11-L14) · [Before (L14-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L14-L20)

```diff
-     var QC = ZC(39811),
-       wC = ZC(39818),
-       bC = ZC(36987),
-       nC = ZC(36963),
-       fC = ZC(36985),
-       oC = ZC(37731),
-       qC = ZC(39833);
+     var Op = cp(40140),
+       op = cp(38905),
+       Ip = cp(40273),
+       Sp = cp(40179);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L22-L23` → after: `L16-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L16-L17) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L22-L23)

```diff
-       get wrapU() {
-         return this._wrapU
+       get uR() {
+         return this._isDisposed
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L25-L26` → after: `L19-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L19-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L19-L26) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L25-L26)

```diff
-       set wrapU(CC) {
-         this._wrapU = CC
+       constructor(pp, ip, cp) {
+         let op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+           Ip = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           xp = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           Lp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+           Yp = arguments.length > 7 ? arguments[7] : void 0,
+           Dp = arguments.length > 8 ? arguments[8] : void 0;
+         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, Sp.d)(), pp && pp.Gl ? this._engine = pp.Gl().gy() : this._engine = pp, this._updatable = cp, this._instanced = xp, this._divisor = Yp || 1, this._label = Dp, ip instanceof Op.c ? (this._data = null, this._buffer = ip) … [truncated]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L28-L29` → after: `L28-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L28-L33) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L28-L29)

```diff
-       get wrapV() {
-         return this._wrapV
+       createVertexBuffer(pp, ip, cp, Op, op) {
+         let Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           Sp = arguments.length > 6 ? arguments[6] : void 0;
+         const xp = Ip ? ip : ip * Float32Array.BYTES_PER_ELEMENT,
+           Yp = Op ? Ip ? Op : Op * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
+         return new Lp(this._engine, this, pp, this._updatable, !0, Yp, void 0 === op ? this._instanced : op, xp, cp, void 0, void 0, !0, this._divisor || Sp)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L31-L32` → after: `L35-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L35-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L35-L36) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L31-L32)

```diff
-       set wrapV(CC) {
-         this._wrapV = CC
+       isUpdatable() {
+         return this._updatable
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L34-L35` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L38-L39) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L34-L35)

```diff
-       get coordinatesMode() {
-         return 0
+       getData() {
+         return this._data
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L37-L38` → after: `L41-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L41-L42) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L37-L38)

```diff
-       get isCube() {
-         return !!this._texture && this._texture.isCube
+       getBuffer() {
+         return this._buffer
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L40-L41` → after: `L44-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L44-L45) · [Before (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L40-L41)

```diff
-       set isCube(CC) {
-         this._texture && (this._texture.isCube = CC)
+       getStrideSize() {
+         return this.byteStride / Float32Array.BYTES_PER_ELEMENT
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L43-L44` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L47-L49) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L43-L44)

```diff
-       get is3D() {
-         return !!this._texture && this._texture.is3D
+       create() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         !pp && this._buffer || (pp = pp || this._data, pp && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, pp), this._data = pp) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(pp, this._label), this._data = pp … [truncated]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L46-L47` → after: `L51-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L51-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L51-L57) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L46-L47)

```diff
-       set is3D(CC) {
-         this._texture && (this._texture.is3D = CC)
+       _rebuild() {
+         if (this._data) this._buffer = null, this.create(this._data);
+         else {
+           if (!this._buffer) return;
+           if (this._buffer.TA > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.TA, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.TA, void 0, this._label));
+           op.e.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
+         }
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L49-L50` → after: `L59-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L59-L60) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L49-L50)

```diff
-       get is2DArray() {
-         return !!this._texture && this._texture.is2DArray
+       update(pp) {
+         this.create(pp)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L52-L53` → after: `L62-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L62-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L62-L64) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L52-L53)

```diff
-       set is2DArray(CC) {
-         this._texture && (this._texture.is2DArray = CC)
+       updateDirectly(pp, ip, cp) {
+         let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, pp, Op ? ip : ip * Float32Array.BYTES_PER_ELEMENT, cp ? cp * this.byteStride : void 0), this._data = 0 === ip && void 0 === cp ? pp : null)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L55-L56` → after: `L66-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L66-L67) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L55-L56)

```diff
-       getClassName() {
-         return "ThinTexture"
+       _increaseReferences() {
+         this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L58-L59` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L69-L70) · [Before (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L58-L59)

```diff
-       static _IsRenderTargetWrapper(CC) {
-         return void 0 !== CC?.shareDepth
+       dispose() {
+         this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L61-L62` → after: `L72-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L72-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L72-L75) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L61-L62)

```diff
-       constructor(CC) {
-         this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = qC.d.Zero(), this._cachedBaseSize = qC.d.Zero(), this._initialSamplingMode = 2, this._texture = FC. … [truncated]
+     }
+     class Lp {
+       get uR() {
+         return this._isDisposed
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L64-L65` → after: `L77-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L77-L78) · [Before (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L64-L65)

```diff
-       isReady() {
-         return 4 === this.delayLoadState ? (this.delayLoad(), !1) : !!this._texture && this._texture.isReady
+       get instanceDivisor() {
+         return this._instanceDivisor
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L67-L69` → after: `L80-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L80-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L80-L82) · [Before (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L67-L69)

```diff
-       delayLoad() {}
-       getInternalTexture() {
-         return this._texture
+       set instanceDivisor(pp) {
+         const ip = 0 != pp;
+         this._instanceDivisor = pp, ip !== this._instanced && (this._instanced = ip, this._computeHashCode())
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L71-L74` → after: `L84-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L84-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L84-L119) · [Before (L71-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L71-L74)

```diff
-       getSize() {
-         if (this._texture) {
-           if (this._texture.width) return this._cachedSize.width = this._texture.width, this._cachedSize.height = this._texture.height, this._cachedSize;
-           if (this._texture._size) return this._cachedSize.width = this._texture._size, this._cachedSize.height = this._texture._size, this._cachedSize
+       get _maxVerticesCount() {
+         const pp = this.getData();
+         return pp ? Array.isArray(pp) ? pp.length / (this.byteStride / 4) - this.byteOffset / 4 : (pp.byteLength - this.byteOffset) / this.byteStride : 0
+       }
+       constructor(pp, ip, cp, Op, op, Sp, Ap, Pp, Wp, yp) {
+         let Up, wp = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
+           vp = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
+           tp = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
+           Hp = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
+         if (this._isDisposed = !1, this.engine = pp, "object" === typeof Op && null !== Op ? (Up = Op.updatable ?? !1, op = Op.postponeInternalCreation, Sp = Op.stride, Ap = Op.instanced, Pp = Op.offset, Wp = Op.size, yp = Op.type, wp = Op.normalized ?? !1, vp = Op.useBytes ?? !1 … [truncated]
+           const pp = this.getData();
+           this.type = pp ? Dp(pp) : Lp.FLOAT
+         } else this.type = yp;
+         const dp = (0, Ip.p)(this.type);
+         vp ? (this._size = Wp || (Sp ? Sp / dp : Yp(cp)), this.byteStride = Sp || this._buffer.byteStride || this._size * dp, this.byteOffset = Pp || 0) : (this._size = Wp || Sp || Yp(cp), this.byteStride = Sp ? Sp * dp : this._buffer.byteStride || this._size * dp, this.byteOffse … [truncated]
+       }
+ ... (20 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L78-L79` → after: `L122-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L122-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L122-L123) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L78-L79)

```diff
-       getBaseSize() {
-         return this.isReady() && this._texture ? this._texture._size ? (this._cachedBaseSize.width = this._texture._size, this._cachedBaseSize.height = this._texture._size, this._cachedBaseSize) : (this._cachedBaseSize.width = this._texture.baseWidth, this._cachedBaseSize.height  … [truncated]
+       _computeHashCode() {
+         this.hashCode = (Lp._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L81-L82` → after: `L125-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L125-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L125-L126) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L81-L82)

```diff
-       get samplingMode() {
-         return this._texture ? this._texture.samplingMode : this._initialSamplingMode
+       _rebuild() {
+         this._buffer?._rebuild()
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L84-L86` → after: `L128-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L128-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L128-L160) · [Before (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L84-L86)

```diff
-       updateSamplingMode(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         this._texture && this._engine && this._engine.updateTextureSamplingMode(CC, this._texture, this._texture.generateMipMaps && zC)
+       getKind() {
+         return this._kind
+       }
+       isUpdatable() {
+         return this._buffer.isUpdatable()
+       }
+       getData() {
+         return this._buffer.getData()
+       }
+       getFloatData(pp, ip) {
+         const cp = this.getData();
+         return cp ? (0, Ip.m)(cp, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, pp, ip) : null
+       }
+       getBuffer() {
+         return this._buffer.getBuffer()
+       }
+ ... (17 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L88-L89` → after: `L162-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L162-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L162-L170) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L88-L89)

```diff
-       releaseInternalTexture() {
-         this._texture && (this._texture.dispose(), this._texture = null)
+       create(pp) {
+         this._buffer.create(pp), this._alignBuffer()
+       }
+       update(pp) {
+         this._buffer.update(pp), this._alignBuffer()
+       }
+       updateDirectly(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         this._buffer.updateDirectly(pp, ip, void 0, cp), this._alignBuffer()
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L92` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L173) · [Before (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L92)

```diff
-         this._texture && (this.releaseInternalTexture(), this._engine = null)
+         this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L95-L133` → after: `L182-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L182-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L182-L278) · [Before (L95-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L95-L133)

```diff
-     var WC, NC = ZC(39842),
-       MC = ZC(39694);
-     let gC = (() => {
-       var CC;
-       let zC, ZC, qC, WC, MC, gC, SC, pC, PC, GC, RC, AC, xC, JC, IC, iC, vC, eC, hC, KC, YC, dC, mC, HC, EC, lC = FC,
-         XC = [],
-         cC = [],
-         uC = [],
-         rC = [],
-         sC = [],
-         TC = [],
-         aC = [],
-         tC = [],
-         DC = [],
-         jC = [],
-         yC = [],
- ... (23 more removed lines; see GitHub link above)
+ 
+     function Yp(pp) {
+       switch (pp) {
+         case Lp.UVKind:
+         case Lp.UV2Kind:
+         case Lp.UV3Kind:
+         case Lp.UV4Kind:
+         case Lp.UV5Kind:
+         case Lp.UV6Kind:
+           return 2;
+         case Lp.NormalKind:
+         case Lp.PositionKind:
+           return 3;
+         case Lp.ColorKind:
+         case Lp.ColorInstanceKind:
+         case Lp.MatricesIndicesKind:
+ ... (81 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L135-L136` → after: `L280-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L280-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L280-L294) · [Before (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L135-L136)

```diff
-         get hasAlpha() {
-           return this._hasAlpha
+         const Yp = (pp, ip) => {
+           if (-1 !== this.thinInstanceIndex) {
+             const cp = pp._thinInstanceDataStorage.matrixData,
+               op = this.thinInstanceIndex << 4;
+             if (cp && cp.length > op) {
+               const pp = Op.i.Matrix[0];
+               Op.b.FromArrayToRef(cp, op, pp), Op.o.TransformNormalToRef(ip, pp, ip)
+             }
+           }
+           let cp = pp.getWorldMatrix();
+           pp.nonUniformScaling && (Op.i.Matrix[0].rM(cp), cp = Op.i.Matrix[0], cp.setTranslationFromFloats(0, 0, 0), cp.invert(), cp.transposeToRef(Op.i.Matrix[1]), cp = Op.i.Matrix[1]), Op.o.TransformNormalToRef(ip, cp, ip)
+         };
+         if (pp && Yp(this.pickedMesh, cp), this.ray) {
+           const ip = Op.i.Zy[0].rM(cp);
+           pp || Yp(this.pickedMesh, ip), Op.o.Dot(ip, this.ray.direction) > 0 && cp.negateInPlace()
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L138-L139` → after: `L296-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L296-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L296-L357) · [Before (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L138-L139)

```diff
-         set getAlphaFromRGB(CC) {
-           this._getAlphaFromRGB !== CC && (this._getAlphaFromRGB = CC, this._scene && this._scene.markAllMaterialsAsDirty(1, (CC => CC.hasTexture(this))))
+         return cp.normalize(), cp
+       }
+       getTextureCoordinates() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : op.j.UVKind;
+         if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(pp)) return null;
+         const ip = this.pickedMesh.NOp();
+         if (!ip) return null;
+         const cp = this.pickedMesh.getVerticesData(pp);
+         if (!cp) return null;
+         let Ip = Op.l.FromArray(cp, 2 * ip[3 * this.faceId]),
+           Sp = Op.l.FromArray(cp, 2 * ip[3 * this.faceId + 1]),
+           xp = Op.l.FromArray(cp, 2 * ip[3 * this.faceId + 2]);
+         return Ip = Ip.scale(this.bu), Sp = Sp.scale(this.bv), xp = xp.scale(1 - this.bu - this.bv), new Op.l(Ip.x + Sp.x + xp.x, Ip.y + Sp.y + xp.y)
+       }
+     }
+   },
+ ... (46 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L141-L142` → after: `L359-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L359-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L359-L680) · [Before (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L141-L142)

```diff
-         get getAlphaFromRGB() {
-           return this._getAlphaFromRGB
+       }
+       getMSAARenderBuffer() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
+         return this._MSAARenderBuffers?.[pp] ?? null
+       }
+       release() {
+         this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
+       }
+     }
+   },
+   40113: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => tp
+     });
+     var Op = cp(37349),
+       op = cp(40053),
+ ... (306 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L144-L145` → after: `L682-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L682-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L682-L694) · [Before (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L144-L145)

```diff
-         set coordinatesIndex(CC) {
-           this._coordinatesIndex !== CC && (this._coordinatesIndex = CC, this._scene && this._scene.markAllMaterialsAsDirty(1, (CC => CC.hasTexture(this))))
+       }
+       _rebuildInternalTextures() {
+         const pp = this._internalTexturesCache.slice();
+         for (const ip of pp) ip._rebuild()
+       }
+       _rebuildRenderTargetWrappers() {
+         const pp = this._renderTargetWrapperCache.slice();
+         for (const ip of pp) ip.textures?.some((pp => 15 === pp.source)) || ip._rebuild()
+       }
+       _rebuildEffects() {
+         for (const pp in this._compiledEffects) {
+           const ip = this._compiledEffects[pp];
+           ip._pipelineContext = null, ip._prepareEffect()
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L147-L148` → after: `L696-L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L696-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L696-L741) · [Before (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L147-L148)

```diff
-         get coordinatesIndex() {
-           return this._coordinatesIndex
+         op.e.ResetCache()
+       }
+       _rebuildGraphicsResources() {
+         this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
+       }
+       _flagContextRestored() {
+         Sp.e.Warn(this.name + " context successfully restored."), this.Fy.notifyObservers(this), this._contextWasLost = !1
+       }
+       _restoreEngineAfterContextLost(pp) {
+         setTimeout((() => {
+           this._clearEmptyResources();
+           const ip = this._depthCullingState.depthTest,
+             cp = this._depthCullingState.depthFunc,
+             Op = this._depthCullingState.depthMask,
+             op = this._stencilState.stencilTest;
+           pp(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = ip, this._depthCullingState.depthFunc = cp, this._depthCullingState.depthMask = Op, this._stencilState.stencilTest = op, this._flagContextRestored()
+ ... (30 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L150-L151` → after: `L743-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L743-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L743-L773) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L150-L151)

```diff
-         set coordinatesMode(CC) {
-           this._coordinatesMode !== CC && (this._coordinatesMode = CC, this._scene && this._scene.markAllMaterialsAsDirty(1, (CC => CC.hasTexture(this))))
+         return this._emptyCubeTexture
+       }
+       set framebufferDimensionsObject(pp) {
+         this._framebufferDimensionsObject = pp
+       }
+       get activeRenderLoops() {
+         return this._activeRenderLoops
+       }
+       stopRenderLoop(pp) {
+         if (!pp) return this._activeRenderLoops.length = 0, void this._cancelFrame();
+         const ip = this._activeRenderLoops.indexOf(pp);
+         ip >= 0 && (this._activeRenderLoops.splice(ip, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
+       }
+       _cancelFrame() {
+         if (this.customAnimationFrameRequester) {
+           if (0 !== this._frameHandler) {
+ ... (15 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L153-L154` → after: `L775-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L775-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L775-L796) · [Before (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L153-L154)

```diff
-         get coordinatesMode() {
-           return this._coordinatesMode
+       }
+       Hk() {
+         this.onBeginFrameObservable.notifyObservers(this)
+       }
+       Rk() {
+         this._frameId++, this.onEndFrameObservable.notifyObservers(this)
+       }
+       get maxFPS() {
+         return this._maxFPS
+       }
+       set maxFPS(pp) {
+         this._maxFPS = pp, void 0 !== pp && (this._minFrameTime = pp <= 0 ? Number.MAX_VALUE : 1e3 / pp)
+       }
+       _isOverFrameTime(pp) {
+         if (!pp || void 0 === this._maxFPS) return !1;
+         const ip = pp - this._lastFrameTime;
+ ... (6 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L156-L157` → after: `L798-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L798-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L798-L804) · [Before (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L156-L157)

```diff
-         get wrapU() {
-           return this._wrapU
+       }
+       _renderLoop(pp) {
+         this._processFrame(pp), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
+       }
+       _renderFrame() {
+         for (let pp = 0; pp < this._activeRenderLoops.length; pp++) {
+           (0, this._activeRenderLoops[pp])()
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L159-L184` → after: `L806-L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L806-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L806-L943) · [Before (L159-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L159-L184)

```diff
-         set wrapU(CC) {
-           this._wrapU = CC
-         }
-         get wrapV() {
-           return this._wrapV
-         }
-         set wrapV(CC) {
-           this._wrapV = CC
-         }
-         get isCube() {
-           return this._texture ? this._texture.isCube : this._isCube
-         }
-         set isCube(CC) {
-           this._texture ? this._texture.isCube = CC : this._isCube = CC
-         }
-         get is3D() {
- ... (10 more removed lines; see GitHub link above)
+       }
+       _renderViews() {
+         return !1
+       }
+       _queueNewFrame(pp, ip) {
+         return vp(pp, ip)
+       }
+       _queueNewFrameForRenderLoop() {
+         this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.zy = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.z … [truncated]
+       }
+       runRenderLoop(pp) {
+         -1 === this._activeRenderLoops.indexOf(pp) && (this._activeRenderLoops.push(pp), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
+       }
+       getDepthBuffer() {
+         return this._depthCullingState.depthTest
+       }
+ ... (122 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L186-L187` → after: `L945-L1026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L945-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L945-L1026) · [Before (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L186-L187)

```diff
-         get gammaSpace() {
-           return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
+         return kp
+       }
+       _rebuildBuffers() {
+         for (const pp of this._uniformBuffers) pp._rebuildAfterContextLost()
+       }
+       get _shouldUseHighPrecisionShader() {
+         return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
+       }
+       getHostDocument() {
+         return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, Up.f)() ? document : null
+       }
+       getLoadedTexturesCache() {
+         return this._internalTexturesCache
+       }
+       clearInternalTexturesCache() {
+         this._internalTexturesCache.length = 0
+ ... (66 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L189-L195` → after: `L1028-L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L1028-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L1028-L1045) · [Before (L189-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L189-L195)

```diff
-         set gammaSpace(CC) {
-           if (this._texture) {
-             if (this._texture._gammaSpace === CC) return;
-             this._texture._gammaSpace = CC
-           } else {
-             if (this._gammaSpace === CC) return;
-             this._gammaSpace = CC
+         if ((0, Up.j)() && (0, Up.f)())
+           if (this._renderingCanvas) {
+             const cp = this._renderingCanvas.getBoundingClientRect?.();
+             pp = this._renderingCanvas.clientWidth || cp?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, ip = this._renderingCanvas.clientHeight || cp?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
+           } else pp = window.innerWidth, ip = window.innerHeight;
+         else pp = this._renderingCanvas ? this._renderingCanvas.width : 100, ip = this._renderingCanvas ? this._renderingCanvas.height : 100;
+         this.setSize(pp / this._hardwareScalingLevel, ip / this._hardwareScalingLevel, cp)
+       }
+       setSize(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         if (!this._renderingCanvas) return !1;
+         if (pp |= 0, ip |= 0, !cp && this._renderingCanvas.width === pp && this._renderingCanvas.height === ip) return !1;
+         if (this._renderingCanvas.width = pp, this._renderingCanvas.height = ip, this.scenes) {
+           for (let pp = 0; pp < this.scenes.length; pp++) {
+             const ip = this.scenes[pp];
+             for (let pp = 0; pp < ip.cameras.length; pp++) {
+ ... (2 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L197-L209` → after: `L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L1047) · [Before (L197-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L197-L209)

```diff
-           this.Km()?.markAllMaterialsAsDirty(1, (CC => CC.hasTexture(this)))
-         }
-         get isRGBD() {
-           return null != this._texture && this._texture._isRGBD
-         }
-         set isRGBD(CC) {
-           CC !== this.isRGBD && (this._texture && (this._texture._isRGBD = CC), this.Km()?.markAllMaterialsAsDirty(1, (CC => CC.hasTexture(this))))
-         }
-         get noMipmap() {
-           return !1
-         }
-         get lodGenerationOffset() {
-           return this._texture ? this._texture._lodGenerationOffset : 0
+           this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L211-L212` → after: `L1049-L1144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L1049-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L1049-L1144) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L211-L212)

```diff
-         set lodGenerationOffset(CC) {
-           this._texture && (this._texture._lodGenerationOffset = CC)
+         return !0
+       }
+       createRawTexture(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap) {
+         throw (0, Wp.o)("engine.rawTexture")
+       }
+       createRawCubeTexture(pp, ip, cp, Op, op, Ip, Sp, xp) {
+         throw (0, Wp.o)("engine.rawTexture")
+       }
+       createRawTexture3D(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp) {
+         throw (0, Wp.o)("engine.rawTexture")
+       }
+       createRawTexture2DArray(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap) {
+         throw (0, Wp.o)("engine.rawTexture")
+       }
+       _sharedInit(pp) {
+         this._renderingCanvas = pp
+ ... (80 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L214-L215` → after: `L1146-L1208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L1146-L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L1146-L1208) · [Before (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L214-L215)

```diff
-         get lodGenerationScale() {
-           return this._texture ? this._texture._lodGenerationScale : 0
+       }
+       static GetCompatibleTextureLoader(pp, ip) {
+         return null
+       }
+     }
+     tp._RenderPassIdCounter = 0, tp._RescalePostProcessFactory = null, tp.CollisionsEpsilon = .001, tp.QueueNewFrame = vp
+   },
+   40062: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Op
+     });
+     class Op {
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Op.ShadersRepository : Op.ShadersRepositoryWGSL
+       }
+       static GetShadersStore() {
+ ... (47 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L217-L218` → after: `L1210-L1230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L1210-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L1210-L1230) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L217-L218)

```diff
-         set lodGenerationScale(CC) {
-           this._texture && (this._texture._lodGenerationScale = CC)
+         op.forEach(((pp, ip) => {
+           Ip[pp] = ip
+         }));
+         for (const Dp of Lp.getAttributes(this, Sp)) xp.push(Dp)
+       }
+       dispose() {
+         this._uniforms = {}, this._isDisposed = !0
+       }
+       _cacheMatrix(pp, ip) {
+         const cp = this._valueCache[pp],
+           Op = ip.updateFlag;
+         if (void 0 !== cp && cp === Op) return !1;
+         const op = ip.BOp();
+         let Ip = this._matrixValueCache[pp];
+         if (void 0 !== cp && null !== cp && void 0 !== Ip) {
+           let ip = !0;
+ ... (5 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L220-L221` → after: `L1232-L1435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R1232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L1232-L1435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L1232-L1435) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L220-L221)

```diff
-         get linearSpecularLOD() {
-           return !!this._texture && this._texture._linearSpecularLOD
+         return void 0 === Ip && (Ip = this._matrixValueCache[pp] = new Float32Array(16)), Ip.set(op), this._valueCache[pp] = Op, !0
+       }
+       _cacheFloat2(pp, ip, cp) {
+         let Op = this._valueCache[pp];
+         if (!Op || 2 !== Op.length) return Op = [ip, cp], this._valueCache[pp] = Op, !0;
+         let op = !1;
+         return Op[0] !== ip && (Op[0] = ip, op = !0), Op[1] !== cp && (Op[1] = cp, op = !0), op
+       }
+       _cacheFloat3(pp, ip, cp, Op) {
+         let op = this._valueCache[pp];
+         if (!op || 3 !== op.length) return op = [ip, cp, Op], this._valueCache[pp] = op, !0;
+         let Ip = !1;
+         return op[0] !== ip && (op[0] = ip, Ip = !0), op[1] !== cp && (op[1] = cp, Ip = !0), op[2] !== Op && (op[2] = Op, Ip = !0), Ip
+       }
+       _cacheFloat4(pp, ip, cp, Op, op) {
+         let Ip = this._valueCache[pp];
+ ... (188 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L223-L224` → after: `L1437-L1439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R1437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L1437-L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L1437-L1439) · [Before (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L223-L224)

```diff
-         set linearSpecularLOD(CC) {
-           this._texture && (this._texture._linearSpecularLOD = CC)
+         if (!ip.getShaderParameter(Ip, ip.COMPILE_STATUS)) {
+           const cp = ip.getShaderInfoLog(Ip);
+           if (cp) throw pp.fragmentCompilationError = cp, new Error("FRAGMENT SHADER " + cp)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L226-L227` → after: `L1441-L1448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R1441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L1441-L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L1441-L1448) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L226-L227)

```diff
-         get irradianceTexture() {
-           return this._texture ? this._texture._irradianceTexture : null
+         const cp = Op.getProgramInfoLog(Sp);
+         if (cp) throw pp.programLinkError = cp, new Error(cp)
+       }
+       if (cp) {
+         Op.validateProgram(Sp);
+         if (!Op.getProgramParameter(Sp, Op.VALIDATE_STATUS)) {
+           const ip = Op.getProgramInfoLog(Sp);
+           if (ip) throw pp.programValidationError = ip, new Error(ip)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L229-L230` → after: `L1450-L1509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R1450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L1450-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L1450-L1509) · [Before (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L229-L230)

```diff
-         set irradianceTexture(CC) {
-           this._texture && (this._texture._irradianceTexture = CC)
+       }
+       Op.deleteShader(op), Op.deleteShader(Ip), pp.vertexShader = void 0, pp.fragmentShader = void 0, pp.onCompiled && (pp.onCompiled(), pp.onCompiled = void 0)
+     }
+ 
+     function Up(pp, ip, cp, Op, op, Ip, Sp, Lp, Ap) {
+       let Pp = arguments.length > 10 ? arguments[10] : void 0,
+         Wp = arguments.length > 11 ? arguments[11] : void 0,
+         yp = arguments.length > 12 ? arguments[12] : void 0;
+       const Up = xp(pp.context);
+       Wp || (Wp = Up.createRawShaderProgramInjection ?? Yp), yp || (yp = Up.createShaderProgramInjection ?? Dp);
+       const wp = pp;
+       wp.program = Op ? Wp(wp, ip, cp, wp.context, Ap) : yp(wp, ip, cp, Lp, wp.context, Ap), wp.program.__SPECTOR_rebuildProgram = Sp, Pp()
+     }
+ 
+     function wp(pp, ip, cp, Op, Ip, Sp) {
+       return vp((0, op.g)(pp, cp, Op), ip, Ip, Sp)
+ ... (44 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L232-L233` → after: `L1511-L1537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R1511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L1511-L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L1511-L1537) · [Before (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L232-L233)

```diff
-         get uid() {
-           return this._uid || (this._uid = (0, oC.b)()), this._uid
+         return pp
+       }
+     }
+     const Dp = /(flat\s)?\s*varying\s*.*/;
+     class Ap {
+       constructor() {
+         this.shaderLanguage = 0
+       }
+       attributeProcessor(pp) {
+         return pp.replace("attribute", "in")
+       }
+       varyingCheck(pp, ip) {
+         return Dp.test(pp)
+       }
+       varyingProcessor(pp, ip) {
+         return pp.replace("varying", ip ? "in" : "out")
+ ... (11 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L235-L236` → after: `L1539-L1637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R1539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L1539-L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L1539-L1637) · [Before (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L235-L236)

```diff
-         toString() {
-           return this.name
+         return pp
+       }
+     }
+     var Pp = cp(40134),
+       Wp = cp(40143),
+       yp = cp(40149),
+       Up = cp(40033),
+       wp = cp(40088),
+       vp = cp(40068),
+       tp = cp(40151),
+       Hp = cp(40124);
+     class dp {}
+     class ep extends Ip.b {
+       get name() {
+         return this._name
+       }
+ ... (83 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L238-L239` → after: `L1639-L1655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R1639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L1639-L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L1639-L1655) · [Before (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L238-L239)

```diff
-         getClassName() {
-           return "BaseTexture"
+         this._sharedInit(Ip), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== cp.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = cp.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
+         for (let op = 0; op < this._caps.maxVertexAttribs; op++) this._currentBufferPointers[op] = new dp;
+         this._shaderProcessor = this.eU > 1 ? new Ap : new Yp;
+         const Sp = `Babylon.js v${ep.Version}`;
+         xp.e.Log(Sp + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", Sp);
+         const Lp = (0, op.J)(this._gl);
+         Lp.validateShaderPrograms = this.validateShaderPrograms, Lp.parallelShaderCompile = this._caps.parallelShaderCompile
+       }
+       _clearEmptyResources() {
+         this._dummyFramebuffer = null, super._clearEmptyResources()
+       }
+       _getShaderProcessingContext(pp) {
+         return null
+       }
+       areAllEffectsReady() {
+         for (const pp in this._compiledEffects) {
+ ... (1 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L241-L242` → after: `L1657-L1733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L1657-L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L1657-L1733) · [Before (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L241-L242)

```diff
-         set onDispose(CC) {
-           this._onDisposeObserver && this.Tm.remove(this._onDisposeObserver), this._onDisposeObserver = this.Tm.add(CC)
+         return !0
+       }
+       _initGLContext() {
+         this._caps = {
+           maxTexturesImageUnits: this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS),
+           maxCombinedTexturesImageUnits: this._gl.getParameter(this._gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
+           maxVertexTextureImageUnits: this._gl.getParameter(this._gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
+           maxTextureSize: this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE),
+           maxSamples: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_SAMPLES) : 1,
+           maxCubemapTextureSize: this._gl.getParameter(this._gl.MAX_CUBE_MAP_TEXTURE_SIZE),
+           maxRenderTextureSize: this._gl.getParameter(this._gl.MAX_RENDERBUFFER_SIZE),
+           maxVertexAttribs: this._gl.getParameter(this._gl.MAX_VERTEX_ATTRIBS),
+           maxVaryingVectors: this._gl.getParameter(this._gl.MAX_VARYING_VECTORS),
+           maxFragmentUniformVectors: this._gl.getParameter(this._gl.MAX_FRAGMENT_UNIFORM_VECTORS),
+           maxVertexUniformVectors: this._gl.getParameter(this._gl.MAX_VERTEX_UNIFORM_VECTORS),
+           shaderFloatPrecision: 0,
+ ... (61 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L244-L245` → after: `L1735-L1738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R1735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L1735-L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L1735-L1738) · [Before (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L244-L245)

```diff
-         get isBlocking() {
-           return !0
+         if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
+         else {
+           const pp = this._gl.getExtension("WEBGL_depth_texture");
+           null != pp && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = pp.UNSIGNED_INT_24_8_WEBGL)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L247-L248` → after: `L1740-L1744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L1740-L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L1740-L1744) · [Before (L247-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L247-L248)

```diff
-         get loadingError() {
-           return this._loadingError
+         if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
+         else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
+         else {
+           const pp = this._gl.getExtension("OES_vertex_array_object");
+           null != pp && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = pp.createVertexArrayOES.bind(pp), this._gl.bindVertexArray = pp.bindVertexArrayOES.bind(pp), this._gl.deleteVertexArray = pp.deleteVertexArrayOES.bind(pp))
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L250-L251` → after: `L1746-L1749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R1746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L1746-L1749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L1746-L1749) · [Before (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L250-L251)

```diff
-         get errorObject() {
-           return this._errorObject
+         if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
+         else {
+           const pp = this._gl.getExtension("ANGLE_instanced_arrays");
+           null != pp ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = pp.drawArraysInstancedANGLE.bind(pp), this._gl.drawElementsInstanced = pp.drawElementsInstancedANGLE.bind(pp), this._gl.vertexAttribDivisor = pp.vertexAttribDivisorANGLE.bind(pp)) : this._caps … [truncated]
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L253-L255` → after: `L1751-L1759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R1751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L1751-L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L1751-L1759) · [Before (L253-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L253-L255)

```diff
-         constructor(zC) {
-           let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-           super(null), this.uniqueId = ((0, QC.n)(this, XC), (0, QC.n)(this, cC, void 0)), this.name = ((0, QC.n)(this, uC), (0, QC.n)(this, rC, void 0)), this.displayName = ((0, QC.n)(this, sC), (0, QC.n)(this, TC, void 0)), this.metadata = ((0, QC.n)(this, aC), (0, QC.n)(this,  … [truncated]
+         if (this._gl.getShaderPrecisionFormat) {
+           const pp = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
+             ip = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
+           if (pp && ip && (this._caps.highPrecisionShaderSupported = 0 !== pp.precision && 0 !== ip.precision, this._caps.shaderFloatPrecision = Math.min(pp.precision, ip.precision)), !this._shouldUseHighPrecisionShader) {
+             const pp = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
+               ip = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
+             pp && ip && (this._caps.shaderFloatPrecision = Math.min(pp.precision, ip.precision))
+           }
+           this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L257-L258` → after: `L1761-L1764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R1761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L1761-L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L1761-L1764) · [Before (L257-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L257-L258)

```diff
-         Km() {
-           return this._scene
+         if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
+         else {
+           const pp = this._gl.getExtension("EXT_blend_minmax");
+           null != pp && (this._caps.blendMinMax = !0, this._gl.MAX = pp.MAX_EXT, this._gl.MIN = pp.MIN_EXT)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L260-L261` → after: `L1766-L1783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R1766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L1766-L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L1766-L1783) · [Before (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L260-L261)

```diff
-         _getEngine() {
-           return this._engine
+         if (!this._caps.supportSRGBBuffers) {
+           if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
+             SRGB: WebGL2RenderingContext.SRGB,
+             SRGB8: WebGL2RenderingContext.SRGB8,
+             SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
+           };
+           else {
+             const pp = this._gl.getExtension("EXT_sRGB");
+             null != pp && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
+               SRGB: pp.SRGB_EXT,
+               SRGB8: pp.SRGB_ALPHA_EXT,
+               SRGB8_ALPHA8: pp.SRGB_ALPHA_EXT
+             })
+           }
+           if (this._creationOptions) {
+             const pp = this._creationOptions.forceSRGBBufferSupportState;
+ ... (2 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L263-L264` → after: `L1785-L1816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R1785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L1785-L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L1785-L1816) · [Before (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L263-L264)

```diff
-         getTextureMatrix() {
-           return nC.b.IdentityReadOnly
+         this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
+         for (let cp = 0; cp < this._maxSimultaneousTextures; cp++) this._nextFreeTextureSlots.push(cp);
+         "Mali-G72" === this._glRenderer && (this._caps.disableMorphTargetTexture = !0)
+       }
+       _initFeatures() {
+         this._features = {
+           forceBitmapOverHTMLImageElement: "undefined" === typeof HTMLImageElement,
+           supportRenderAndCopyToLodForFloatTextures: 1 !== this._webGLVersion,
+           supportDepthStencilTexture: 1 !== this._webGLVersion,
+           supportShadowSamplers: 1 !== this._webGLVersion,
+           uniformBufferHardCheckMatrix: !1,
+           allowTexturePrefiltering: 1 !== this._webGLVersion,
+           trackUbosInFrame: !1,
+           checkUbosContentBeforeUpload: !1,
+           supportCSM: 1 !== this._webGLVersion,
+           basisNeedsPOT: 1 === this._webGLVersion,
+ ... (16 more added lines; see GitHub link above)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L266-L267` → after: `L1818-L1838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R1818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L1818-L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L1818-L1838) · [Before (L266-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L266-L267)

```diff
-         getReflectionTextureMatrix() {
-           return nC.b.IdentityReadOnly
+       }
+       get eU() {
+         return this._webGLVersion
+       }
+       getClassName() {
+         return "ThinEngine"
+       }
+       _prepareWorkingCanvas() {
+         if (this._workingCanvas) return;
+         this._workingCanvas = this.createCanvas(1, 1);
+         const pp = this._workingCanvas.getContext("2d");
+         pp && (this._workingContext = pp)
+       }
+       getInfo() {
+         return this.getGlInfo()
+       }
+ ... (5 more added lines; see GitHub link above)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L269-L270` → after: `L1840-L1866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R1840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L1840-L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L1840-L1866) · [Before (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L269-L270)

```diff
-         getRefractionTextureMatrix() {
-           return this.getReflectionTextureMatrix()
+       }
+       extractDriverInfo() {
+         const pp = this.getGlInfo();
+         return pp && pp.renderer ? pp.renderer : ""
+       }
+       getRenderWidth() {
+         return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
+       }
+       getRenderHeight() {
+         return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
+       }
+       clear(pp, ip, cp) {
+         let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+           op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
+         const Ip = this.stencilStateComposer.useStencilGlobalOnly;
+         this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = Ip;
+ ... (11 more added lines; see GitHub link above)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L272-L273` → after: `L1868-L1874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R1868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L1868-L1874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L1868-L1874) · [Before (L272-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L272-L273)

```diff
-         isReadyOrNotBlocking() {
-           return !this.isBlocking || this.isReady() || this.loadingError
+         cp && (this.lOp ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), Sp |= this._gl.DEPTH_BUFFER_BIT), Op && (this._gl.clearStencil(op), Sp |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(Sp)
+       }
+       _clearColorAttachment(pp, ip, cp, Op) {
+         if ((0, tp.i)(cp)) {
+           const cp = (0, tp.k)(Op),
+             op = cp ? ep._TempClearColorUint32 : ep._TempClearColorInt32;
+           return op[0] = ip.r, op[1] = ip.g, op[2] = ip.b, op[3] = ip.a, void(cp ? this._gl.clearBufferuiv(this._gl.COLOR, pp, op) : this._gl.clearBufferiv(this._gl.COLOR, pp, op))
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L275-L277` → after: `L1876-L1902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R1876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L1876-L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L1876-L1902) · [Before (L275-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L275-L277)

```diff
-         scale(CC) {}
-         get canRescale() {
-           return !1
+         ep._TempClearColorFloat32[0] = ip.r, ep._TempClearColorFloat32[1] = ip.g, ep._TempClearColorFloat32[2] = ip.b, ep._TempClearColorFloat32[3] = ip.a, this._gl.clearBufferfv(this._gl.COLOR, pp, ep._TempClearColorFloat32)
+       }
+       _viewport(pp, ip, cp, Op) {
+         pp === this._viewportCached.x && ip === this._viewportCached.y && cp === this._viewportCached.z && Op === this._viewportCached.w || (this._viewportCached.x = pp, this._viewportCached.y = ip, this._viewportCached.z = cp, this._viewportCached.w = Op, this._gl.viewport(pp, i … [truncated]
+       }
+       Rk() {
+         super.Rk(), this._badOS && this.flushFramebuffer()
+       }
+       get performanceMonitor() {
+         throw new Error("Not Supported by ThinEngine")
+       }
+       bindFramebuffer(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           cp = arguments.length > 2 ? arguments[2] : void 0,
+           Op = arguments.length > 3 ? arguments[3] : void 0,
+           op = arguments.length > 4 ? arguments[4] : void 0,
+ ... (11 more added lines; see GitHub link above)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L279-L288` → after: `L1904-L8044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R1904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L1904-L8044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L1904-L8044) · [Before (L279-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L279-L288)

```diff
-         _getFromCache(CC, zC, ZC, QC, wC, bC) {
-           const nC = this._getEngine();
-           if (!nC) return null;
-           const fC = nC._getUseSRGBBuffer(!!wC, zC),
-             oC = nC.getLoadedTexturesCache();
-           for (let qC = 0; qC < oC.length; qC++) {
-             const nC = oC[qC];
-             if ((void 0 === wC || fC === nC._useSRGBBuffer) && (void 0 === QC || QC === nC.invertY) && nC.url === CC && nC.generateMipMaps === !zC && (!ZC || ZC === nC.samplingMode) && (void 0 === bC || bC === nC.isCube)) return nC.incrementReferences(), nC
-           }
-           return null
+         Lp._MSAAFramebuffer && this._bindUnboundFramebuffer(Lp._MSAAFramebuffer), this._cachedViewport && !op ? this.setViewport(this._cachedViewport, cp, Op) : (cp || (cp = pp.width, Ip && (cp /= Math.pow(2, Ip))), Op || (Op = pp.height, Ip && (Op /= Math.pow(2, Ip))), this._vie … [truncated]
+       }
+       setStateCullFaceType(pp, ip) {
+         const cp = this.cullBackFaces ?? pp ?? 1 ? this._gl.BACK : this._gl.FRONT;
+         (this._depthCullingState.cullFace !== cp || ip) && (this._depthCullingState.cullFace = cp)
+       }
+       setState(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           cp = arguments.length > 2 ? arguments[2] : void 0,
+           Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+           op = arguments.length > 4 ? arguments[4] : void 0,
+           Ip = arguments.length > 5 ? arguments[5] : void 0,
+           Sp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
+         (this._depthCullingState.cull !== pp || cp) && (this._depthCullingState.cull = pp), this.setStateCullFaceType(op, cp), this.setZOffset(ip), this.setZOffsetUnits(Sp);
+         const xp = Op ? this._gl.CW : this._gl.CCW;
+         (this._depthCullingState.frontFace !== xp || cp) && (this._depthCullingState.frontFace = xp), this._stencilStateComposer.stencilMaterial = Ip
+ ... (6125 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L290-L343` → after: `L8046-L9000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R8046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L8046-L9000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L8046-L9000) · [Before (L290-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L290-L343)

```diff
-         _rebuild() {}
-         clone() {
-           return null
-         }
-         get textureType() {
-           return this._texture && void 0 !== this._texture.type ? this._texture.type : 0
-         }
-         get textureFormat() {
-           return this._texture && void 0 !== this._texture.format ? this._texture.format : 5
-         }
-         _markAllSubMeshesAsTexturesDirty() {
-           const CC = this.Km();
-           CC && CC.markAllMaterialsAsDirty(1)
-         }
-         readPixels() {
-           let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
- ... (38 more removed lines; see GitHub link above)
+       }
+       uOp(pp) {
+         this._components.push(pp), this._transientComponents.push(pp);
+         const ip = pp;
+         ip.addFromContainer && ip.serialize && this._serializableComponents.push(ip)
+       }
+       _getComponent(pp) {
+         for (const ip of this._components)
+           if (ip.name === pp) return ip;
+         return null
+       }
+       get uniqueId() {
+         return this._uniqueId
+       }
+       constructor(pp, ip) {
+         this._inputManager = new Fp(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new Gp.h(.2, .2, .3, 1), this.onClearColorChangedObservable = new Sp.d, … [truncated]
+ ... (939 more added lines; see GitHub link above)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L346-L347` → after: `L9003-L9031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9003-L9031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9003-L9031) · [Before (L346-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L346-L347)

```diff
-         get _lodTextureHigh() {
-           return this._texture ? this._texture._lodTextureHigh : null
+       }
+       updateTransformMatrix(pp) {
+         const ip = this.activeCamera;
+         if (ip)
+           if (ip._renderingMultiview) {
+             const cp = ip._rigCameras[0],
+               Op = ip._rigCameras[1];
+             this.setTransformMatrix(cp.getViewMatrix(), cp.getProjectionMatrix(pp), Op.getViewMatrix(), Op.getProjectionMatrix(pp))
+           } else this.setTransformMatrix(ip.getViewMatrix(), ip.getProjectionMatrix(pp))
+       }
+       _bindFrameBuffer(pp) {
+         let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         this._useCurrentFrameBuffer || (pp && pp._multiviewTexture ? pp._multiviewTexture._bindFrameBuffer() : pp && pp.outputRenderTarget ? pp.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer … [truncated]
+       }
+       _clearFrameBuffer(pp) {
+         if (pp && pp._multiviewTexture);
+ ... (13 more added lines; see GitHub link above)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L349-L350` → after: `L9033-L9036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9033-L9036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9033-L9036) · [Before (L349-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L349-L350)

```diff
-         get _lodTextureMid() {
-           return this._texture ? this._texture._lodTextureMid : null
+         this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = pp.outputRenderTarget?.renderPassId ?? pp.renderPassId ?? 0, this._evaluateActiveMeshes();
+         for (let Op = 0; Op < this._softwareSkinnedMeshes.length; Op++) {
+           const pp = this._softwareSkinnedMeshes.data[Op];
+           pp.applySkeleton(pp.skeleton)
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L352-L353` → after: `L9038-L9040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9038-L9040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9038-L9040) · [Before (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L352-L353)

```diff
-         get _lodTextureLow() {
-           return this._texture ? this._texture._lodTextureLow : null
+         this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), pp.customRenderTargets && pp.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(pp.customRenderTargets), ip  … [truncated]
+         for (let Op = 0, xp = this._gatherActiveCameraRenderTargetsStage; Op < xp.length; Op++) {
+           xp[Op].action(this._renderTargets)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L355-L361` → after: `L9042-L9062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9042-L9062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9042-L9062) · [Before (L355-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L355-L361)

```diff
-         dispose() {
-           if (this._scene) {
-             this._scene.stopAnimation && this._scene.stopAnimation(this), this._scene.removePendingData(this);
-             const CC = this._scene.textures.indexOf(this);
-             if (CC >= 0 && this._scene.textures.splice(CC, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
-               const CC = this._parentContainer.textures.indexOf(this);
-               CC > -1 && this._parentContainer.textures.splice(CC, 1), this._parentContainer = null
+         let Ip = !1;
+         if (this.renderTargetsEnabled) {
+           let pp;
+           if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
+             Op.i.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
+             const ip = this.getBoundingBoxRenderer?.();
+             for (let cp = 0; cp < this._renderTargets.length; cp++) {
+               const Op = this._renderTargets.data[cp];
+               if (Op._shouldRender()) {
+                 this._renderId++;
+                 const cp = Op.activeCamera && Op.activeCamera !== this.activeCamera;
+                 ip && !pp && (pp = ip.renderList.length > 0 ? ip.renderList.data.slice() : [], pp.length = ip.renderList.length), Op.render(cp, this.dumpNextRenderTargets), Ip = !0
+               }
+             }
+             ip && pp && (ip.renderList.data = pp, ip.renderList.length = pp.length), Op.i.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
+           }
+ ... (5 more added lines; see GitHub link above)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L364` → after: `L9066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9066) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L364)

```diff
-           this.Tm.notifyObservers(this), this.Tm.clear(), this.metadata = null, super.dispose()
+           this._intermediateRendering = !1
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L366-L384` → after: `L9068-L9070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9068-L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9068-L9070) · [Before (L366-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L366-L384)

```diff
-         serialize() {
-           let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-           if (!this.name && !CC) return null;
-           const zC = NC.d.Serialize(this);
-           return NC.d.AppendSerializedAnimations(this, zC), zC
-         }
-         static WhenAllReady(CC, zC) {
-           let ZC = CC.length;
-           if (0 !== ZC)
-             for (let QC = 0; QC < CC.length; QC++) {
-               const wC = CC[QC];
-               if (wC.isReady()) 0 === --ZC && zC();
-               else {
-                 const CC = wC.onLoadObservable;
-                 CC ? CC.addOnce((() => {
-                   0 === --ZC && zC()
- ... (3 more removed lines; see GitHub link above)
+         Ip && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || pp._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame … [truncated]
+         for (let Op = 0, xp = this._beforeCameraDrawStage; Op < xp.length; Op++) {
+           xp[Op].action(this.activeCamera)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L386-L387` → after: `L9072-L9076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9072-L9076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9072-L9076) · [Before (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L386-L387)

```diff
-         static _IsScene(CC) {
-           return "Scene" === CC.getClassName()
+         this.onBeforeDrawPhaseObservable.notifyObservers(this);
+         const Sp = op.snapshotRendering && 1 === op.snapshotRenderingMode;
+         Sp && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !Sp), this.onAfterDrawPhaseObservable.notifyObservers(this);
+         for (let Op = 0, xp = this._afterCameraDrawStage; Op < xp.length; Op++) {
+           xp[Op].action(this.activeCamera)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L389-L735` → after: `L9078-L9085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9078-L9085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9078-L9085) · [Before (L389-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L389-L735)

```diff
-       }, (() => {
-         const bC = "function" === typeof Symbol && Symbol.metadata ? Object.create(lC[Symbol.metadata] ?? null) : void 0;
-         zC = [(0, wC.M)()], ZC = [(0, wC.M)()], qC = [(0, wC.M)()], WC = [(0, wC.M)()], MC = [(0, wC.M)("hasAlpha")], gC = [(0, wC.M)("getAlphaFromRGB")], SC = [(0, wC.M)()], pC = [(0, wC.M)("coordinatesIndex")], PC = [(0, wC.M)()], GC = [(0, wC.M)("coordinatesMode")], RC = [(0,  … [truncated]
-           kind: "getter",
-           name: "wrapU",
-           static: !1,
-           private: !1,
-           access: {
-             has: CC => "wrapU" in CC,
-             get: CC => CC.wrapU
-           },
-           metadata: bC
-         }, null, XC), (0, QC.j)(CC, null, AC, {
-           kind: "getter",
-           name: "wrapV",
-           static: !1,
- ... (331 more removed lines; see GitHub link above)
+         if (this.postProcessManager && !pp._multiviewTexture) {
+           const ip = pp.outputRenderTarget ? pp.outputRenderTarget.renderTarget : void 0;
+           this.postProcessManager._finalizeFrame(pp.isIntermediate, ip)
+         }
+         for (let Op = 0, xp = this._afterCameraPostProcessStage; Op < xp.length; Op++) {
+           xp[Op].action(this.activeCamera)
+         }
+         this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L737-L842` → after: `L9087-L9111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9087-L9111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9087-L9111) · [Before (L737-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L737-L842)

```diff
-       return bC.toDataURL("image/png")
-     }
- 
-     function SC(CC) {
-       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const QC = CC.getInternalTexture();
-       if (!QC) return null;
-       const wC = CC._readPixelsSync(zC, ZC);
-       return wC ? gC(wC, CC.getSize(), QC.invertY) : null
-     }
-     async function pC(CC) {
-       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const QC = CC.getInternalTexture();
-       if (!QC) return null;
- ... (90 more removed lines; see GitHub link above)
+       _processSubCameras(pp) {
+         let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         if (0 === pp.cameraRigMode || pp._renderingMultiview) return pp._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(pp, void 0, ip), void this.onAfterRenderCameraObservable.notifyObservers(pp);
+         if (pp._useMultiviewToSingleView) this._renderMultiviewToSingleView(pp);
+         else {
+           this.onBeforeCameraRenderObservable.notifyObservers(pp);
+           for (let ip = 0; ip < pp._rigCameras.length; ip++) this._renderForCamera(pp._rigCameras[ip], pp)
+         }
+         this._activeCamera = pp, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(pp)
+       }
+       _checkIntersections() {
+         for (let pp = 0; pp < this._meshesForIntersections.length; pp++) {
+           const ip = this._meshesForIntersections.data[pp];
+           if (ip.actionManager)
+             for (let pp = 0; ip.actionManager && pp < ip.actionManager.actions.length; pp++) {
+               const cp = ip.actionManager.actions[pp];
+ ... (9 more added lines; see GitHub link above)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L844-L849` → after: `L9113-L9185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9113-L9185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9113-L9185) · [Before (L844-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L844-L849)

```diff
-             else if (IC && IC.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = vC, this._delayedOnError = eC;
-             else {
-               try {
-                 this._texture = iC.createTexture(this.url, fC, this._invertY, IC, oC, vC, eC, this._buffer, void 0, this._format, this._forcedExtension, SC, pC, GC, AC)
-               } catch (hC) {
-                 throw eC("error loading", hC), hC
+             }
+         }
+       }
+       _advancePhysicsEngineStep(pp) {}
+       _animate(pp) {}
+       animate() {
+         if (this._engine.isDeterministicLockStep()) {
+           let pp = Math.max(Lc.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Lc.MaxDeltaTime)) + this._timeAccumulator;
+           const ip = this._engine.getTimeStep(),
+             cp = 1e3 / ip / 1e3;
+           let Op = 0;
+           const op = this._engine.getLockstepMaxSteps();
+           let Ip = Math.floor(pp / ip);
+           for (Ip = Math.min(Ip, op); pp > 0 && Op < Ip;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = ip * cp, this._animate(ip), this.onAfterAnimationsObservable.notifyObservers(this), this.hN && this._advancePhysicsEngineStep(ip), this.onAfterStepO … [truncated]
+           this._timeAccumulator = pp < 0 ? 0 : pp
+         } else {
+ ... (57 more added lines; see GitHub link above)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L851` → after: `L9187-L9189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9187-L9189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9187-L9189) · [Before (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L851)

```diff
-               MC && (this._buffer = null)
+             if (this.particlesEnabled) {
+               const pp = this._activeParticleSystems.length;
+               for (let ip = 0; ip < pp; ip++) this._activeParticleSystems.data[ip].animate()
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L853-L888` → after: `L9191-L9195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9191-L9195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9191-L9195) · [Before (L853-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L853-L888)

```diff
-           }
-           updateURL(CC) {
-             let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-               ZC = arguments.length > 2 ? arguments[2] : void 0,
-               QC = arguments.length > 3 ? arguments[3] : void 0;
-             this.url && (this.releaseInternalTexture(), this.Km().markAllMaterialsAsDirty(1, (CC => CC.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = CC), this.url = CC, this._buffer = zC, this._forcedExtension = QC, this.delayLoadState = 4;
-             const wC = this._delayedOnLoad;
-             this._delayedOnLoad = () => {
-               wC ? wC() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), ZC && ZC()
-             }, this.delayLoad()
-           }
-           delayLoad() {
-             if (4 !== this.delayLoadState) return;
-             const CC = this.Km();
-             if (!CC) return;
-             let zC = this.url;
- ... (20 more removed lines; see GitHub link above)
+           } else {
+             this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
+             for (let Op = 0; Op < cp; Op++) {
+               const cp = ip.data[Op];
+               cp._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, cp.isBlocked || (this._totalVertices.addCount(cp.getTotalVertices(), !1), cp.isReady() && cp.isEnabled() && !cp.ei.hasAZeroComponent && (cp.computeWorldMatrix(pp), cp.actionManager && cp.actionManager.hasSpe … [truncated]
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L890-L900` → after: `L9197-L9202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9197-L9202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9197-L9202) · [Before (L890-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L890-L900)

```diff
-             this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = nC.b.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = nC.b.Zero());
-             const ZC = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
-             switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMo … [truncated]
-               case CC.PLANAR_MODE:
-                 nC.b.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = t … [truncated]
-                 break;
-               case CC.PROJECTION_MODE: {
-                 nC.b.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
-                 const CC = zC.getProjectionMatrix();
-                 this._cachedReflectionProjectionMatrixId = CC.updateFlag, CC.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
-                 break
+             if (this.particlesEnabled)
+               for (let pp = 0; pp < this.Wm.length; pp++) {
+                 const ip = this.Wm[pp];
+                 if (!ip.isStarted() || !ip.emitter) continue;
+                 const cp = ip.emitter;
+                 cp.position && !cp.isEnabled() || (this._activeParticleSystems.push(ip), ip.animate())
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L902-L903` → after: `L9204-L9252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9204-L9252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9204-L9252) · [Before (L902-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L902-L903)

```diff
-               default:
-                 nC.b.IdentityToRef(this._cachedReflectionTextureMatrix)
+           }
+         }
+         this.frameGraph?.execute()
+       }
+       _renderRenderTarget(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         if (this._intermediateRendering = !0, pp._shouldRender()) {
+           if (this._renderId++, this.activeCamera = ip, !this.activeCamera) throw new Error("Active camera not set");
+           this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), pp.render(cp, Op)
+         }
+         this._intermediateRendering = !1
+       }
+       render() {
+         let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
+           ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+ ... (33 more added lines; see GitHub link above)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L905` → after: `L9254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9254) · [Before (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L905)

```diff
-             return ZC && zC.markAllMaterialsAsDirty(1, (CC => CC.hasTexture(this))), this._cachedReflectionTextureMatrix
+             Op.i.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L907-L922` → after: `L9256-L9258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9256-L9258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9256-L9258) · [Before (L907-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L907-L922)

```diff
-           clone() {
-             const zC = {
-               noMipmap: this._noMipmap,
-               invertY: this._invertY,
-               samplingMode: this.samplingMode,
-               onLoad: void 0,
-               onError: void 0,
-               buffer: this._texture ? this._texture._buffer : void 0,
-               deleteBuffer: this._deleteBuffer,
-               format: this.textureFormat,
-               mimeType: this.mimeType,
-               loaderOptions: this._loaderOptions,
-               creationFlags: this._creationFlags,
-               useSRGBBuffer: this._useSRGBBuffer
-             };
-             return GC.d.Clone((() => new CC(this._texture ? this._texture.url : null, this.Km(), zC)), this)
+           this._engine.currentRenderPassId = pp?.renderPassId ?? 0, this.activeCamera = pp, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(t … [truncated]
+           for (let ip = 0, cp = this._beforeClearStage; ip < cp.length; ip++) {
+             cp[ip].action()
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L924-L935` → after: `L9260-L9262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9260-L9262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9260-L9262) · [Before (L924-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L924-L935)

```diff
-           serialize() {
-             const zC = this.name;
-             CC.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
-             const ZC = super.serialize(CC._SerializeInternalTextureUniqueId);
-             if (!ZC) return null;
-             if (CC.SerializeBuffers || CC.ForceSerializeBuffers)
-               if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) ZC.base64String = this._buffer, ZC.name = ZC.name.replace("data:", "");
-               else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
-               const CC = this.mimeType || "image/png";
-               ZC.base64String = `data:${CC};base64,${(0,MC.i)(this._buffer)}`
-             } else(CC.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (ZC.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? SC(this) : pC(this));
-             return ZC.invertY = this._invertY, ZC.samplingMode = this.samplingMode, ZC._creationFlags = this._creationFlags, ZC._useSRGBBuffer = this._useSRGBBuffer, CC._SerializeInternalTextureUniqueId && (ZC.internalTextureUniqueId = this._texture?.uniqueId), ZC.internalTexture … [truncated]
+           this._clearFrameBuffer(this.activeCamera);
+           for (let ip = 0, cp = this._gatherRenderTargetsStage; ip < cp.length; ip++) {
+             cp[ip].action(this._renderTargets)
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L937-L938` → after: `L9264-L9268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9264-L9268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9264-L9268) · [Before (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L937-L938)

```diff
-           getClassName() {
-             return "Texture"
+           if (this.activeCameras && this.activeCameras.length > 0)
+             for (let ip = 0; ip < this.activeCameras.length; ip++) this._processSubCameras(this.activeCameras[ip], ip > 0);
+           else {
+             if (!this.activeCamera) throw new Error("No camera defined");
+             this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L940-L941` → after: `L9270-L9278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9270-L9278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9270-L9278) · [Before (L940-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L940-L941)

```diff
-           dispose() {
-             super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
+         }
+         this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
+         for (let cp = 0, Op = this._afterRenderStage; cp < Op.length; cp++) {
+           Op[cp].action()
+         }
+         if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
+           for (let pp = 0; pp < this._toBeDisposed.length; pp++) {
+             const ip = this._toBeDisposed[pp];
+             ip && ip.dispose()
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L943-L958` → after: `L9280-L9320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9280-L9320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9280-L9320) · [Before (L943-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L943-L958)

```diff
-           static Parse(zC, ZC, QC) {
-             if (zC.customType) {
-               const CC = WC.d.Instantiate(zC.customType).Parse(zC, ZC, QC);
-               return zC.samplingMode && CC.updateSamplingMode && CC._samplingMode && CC._samplingMode !== zC.samplingMode && CC.updateSamplingMode(zC.samplingMode), CC
-             }
-             if (zC.isCube && !zC.isRenderTarget) return CC._CubeTextureParser(zC, ZC, QC);
-             const wC = void 0 !== zC.internalTextureUniqueId;
-             if (!zC.name && !zC.isRenderTarget && !wC) return null;
-             let bC;
-             if (wC) {
-               const CC = ZC.mg().getLoadedTexturesCache();
-               for (const ZC of CC)
-                 if (ZC.uniqueId === zC.internalTextureUniqueId) {
-                   bC = ZC;
-                   break
-                 }
+           this._toBeDisposed.length = 0
+         }
+         this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
+       }
+       freezeMaterials() {
+         for (let pp = 0; pp < this.materials.length; pp++) this.materials[pp].freeze()
+       }
+       unfreezeMaterials() {
+         for (let pp = 0; pp < this.materials.length; pp++) this.materials[pp].unfreeze()
+       }
+       dispose() {
+         if (this.uR) return;
+         if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStag … [truncated]
+           for (const pp of this._activeAnimatables) pp.onAnimationEndObservable.clear(), pp.onAnimationEnd = null;
+           this.stopAllAnimations()
+         }
+ ... (25 more added lines; see GitHub link above)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L960-L1044` → after: `L9322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9322) · [Before (L960-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L960-L1044)

```diff
-             const nC = CC => {
-               if (CC && CC._texture && (CC._texture._cachedWrapU = null, CC._texture._cachedWrapV = null, CC._texture._cachedWrapR = null), zC.samplingMode) {
-                 const ZC = zC.samplingMode;
-                 CC && CC.samplingMode !== ZC && CC.updateSamplingMode(ZC)
-               }
-               if (CC && zC.animations)
-                 for (let ZC = 0; ZC < zC.animations.length; ZC++) {
-                   const QC = zC.animations[ZC],
-                     wC = (0, oC.c)("BABYLON.Animation");
-                   wC && CC.animations.push(wC.Parse(QC))
-                 }
-               CC && CC._texture && (wC && !bC && CC._texture._setUniqueId(zC.internalTextureUniqueId), CC._texture.label = zC.internalTextureLabel)
-             };
-             return GC.d.Parse((() => {
-               let wC = !0;
-               if (zC.noMipmap && (wC = !1), zC.mirrorPlane) {
- ... (69 more removed lines; see GitHub link above)
+             pp--
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L1046-L1240` → after: `L9324-L9325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9324-L9325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9324-L9325) · [Before (L1046-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L1046-L1240)

```diff
-         }, (() => {
-           const bC = "function" === typeof Symbol && Symbol.metadata ? Object.create(YC[Symbol.metadata] ?? null) : void 0;
-           zC = [(0, wC.M)()], ZC = [(0, wC.M)()], gC = [(0, wC.M)()], RC = [(0, wC.M)()], AC = [(0, wC.M)()], xC = [(0, wC.M)()], JC = [(0, wC.M)()], IC = [(0, wC.M)()], iC = [(0, wC.M)()], vC = [(0, wC.M)()], eC = [(0, wC.M)()], hC = [(0, wC.M)()], KC = [(0, wC.M)()], (0, QC.j)( … [truncated]
-             kind: "getter",
-             name: "isBlocking",
-             static: !1,
-             private: !1,
-             access: {
-               has: CC => "isBlocking" in CC,
-               get: CC => CC.isBlocking
-             },
-             metadata: bC
-           }, null, dC), (0, QC.j)(null, null, zC, {
-             kind: "field",
-             name: "url",
-             static: !1,
- ... (179 more removed lines; see GitHub link above)
+         }
+         Op = this._engine._virtualScenes.indexOf(this), Op > -1 && this._engine._virtualScenes.splice(Op, 1), this._engine.wipeCaches(!0), this.Kl.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clea … [truncated]
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L1242-L1243` → after: `L9327-L9331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9327-L9331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9327-L9331) · [Before (L1242-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L1242-L1243)

```diff
-       toString() {
-         return `{W: ${this.width}, H: ${this.height}}`
+       _disposeList(pp, ip) {
+         const cp = pp.slice(0);
+         ip = ip ?? (pp => pp.dispose());
+         for (const Op of cp) ip(Op);
+         pp.length = 0
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L1245-L1246` → after: `L9333-L9340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9333-L9340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9333-L9340) · [Before (L1245-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L1245-L1246)

```diff
-       getClassName() {
-         return "Size"
+       get uR() {
+         return this._isDisposed
+       }
+       clearCachedVertexData() {
+         for (let pp = 0; pp < this.meshes.length; pp++) {
+           const ip = this.meshes[pp].geometry;
+           ip && ip.clearCachedData()
+         }
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L1248-L1250` → after: `L9342-L9345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9342-L9345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9342-L9345) · [Before (L1248-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L1248-L1250)

```diff
-       getHashCode() {
-         let CC = 0 | this.width;
-         return CC = 397 * CC ^ this.height, CC
+       cleanCachedTextureBuffer() {
+         for (const pp of this.textures) {
+           pp._buffer && (pp._buffer = null)
+         }
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L1252-L1253` → after: `L9347-L9365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9347-L9365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9347-L9365) · [Before (L1252-L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L1252-L1253)

```diff
-       Av(CC) {
-         this.width = CC.width, this.height = CC.height
+       getWorldExtends(pp) {
+         const ip = new Dp.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+           cp = new Dp.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+         pp = pp || (() => !0);
+         const Op = this.meshes.filter(pp);
+         for (const op of Op) {
+           if (op.computeWorldMatrix(!0), !op.Am || 0 === op.Am.length || op.infiniteDistance) continue;
+           const pp = op.bJ(),
+             Op = pp.boundingBox.minimumWorld,
+             Ip = pp.boundingBox.maximumWorld;
+           Dp.o.CheckExtends(Op, ip, cp), Dp.o.CheckExtends(Ip, ip, cp)
+         }
+         return ip.x === Number.MAX_VALUE ? {
+           min: Dp.o.Zero(),
+           max: Dp.o.Zero()
+         } : {
+ ... (3 more added lines; see GitHub link above)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L1255-L1256` → after: `L9367-L9368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9367-L9368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9367-L9368) · [Before (L1255-L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L1255-L1256)

```diff
-       L_(CC, zC) {
-         return this.width = CC, this.height = zC, this
+       createPickingRay(pp, ip, cp, Op) {
+         throw (0, ep.o)("Ray")
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L1258-L1259` → after: `L9370-L9409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9370-L9409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9370-L9409) · [Before (L1258-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L1258-L1259)

```diff
-       set(CC, zC) {
-         return this.L_(CC, zC)
+       createPickingRayToRef(pp, ip, cp, Op, op) {
+         throw (0, ep.o)("Ray")
+       }
+       createPickingRayInCameraSpace(pp, ip, cp) {
+         throw (0, ep.o)("Ray")
+       }
+       createPickingRayInCameraSpaceToRef(pp, ip, cp, Op) {
+         throw (0, ep.o)("Ray")
+       }
+       SW(pp, ip, cp, Op, op, Ip) {
+         const Sp = (0, ep.o)("Ray", !0);
+         return Sp && Oc.e.Warn(Sp), new Wp.b
+       }
+       pickWithBoundingInfo(pp, ip, cp, Op, op) {
+         const Ip = (0, ep.o)("Ray", !0);
+         return Ip && Oc.e.Warn(Ip), new Wp.b
+ ... (24 more added lines; see GitHub link above)
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L1261-L1262` → after: `L9411-L9413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9411-L9413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9411-L9413) · [Before (L1261-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L1261-L1262)

```diff
-       multiplyByFloats(CC, zC) {
-         return new QC(this.width * CC, this.height * zC)
+       _rebuildTextures() {
+         for (const pp of this.textures) pp._rebuild(!0);
+         this.markAllMaterialsAsDirty(1)
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L1264-L1265` → after: `L9415-L9558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9415-L9558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9415-L9558) · [Before (L1264-L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L1264-L1265)

```diff
-       clone() {
-         return new QC(this.width, this.height)
+       _getByTags(pp, ip, cp) {
+         if (void 0 === ip) return pp;
+         const Op = [];
+         for (const op in pp) {
+           const Ip = pp[op];
+           Yp.b && Yp.b.MatchesQuery(Ip, ip) && (!cp || cp(Ip)) && Op.push(Ip)
+         }
+         return Op
+       }
+       getMeshesByTags(pp, ip) {
+         return this._getByTags(this.meshes, pp, ip)
+       }
+       getCamerasByTags(pp, ip) {
+         return this._getByTags(this.cameras, pp, ip)
+       }
+       getLightsByTags(pp, ip) {
+ ... (128 more added lines; see GitHub link above)
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L1267-L1268` → after: `L9560-L9561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9560-L9561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9560-L9561) · [Before (L1267-L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L1267-L1268)

```diff
-       equals(CC) {
-         return !!CC && (this.width === CC.width && this.height === CC.height)
+       getGeometryByID(pp) {
+         return this.getGeometryById(pp)
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L1270-L1271` → after: `L9563-L9564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9563-L9564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9563-L9564) · [Before (L1270-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L1270-L1271)

```diff
-       get surface() {
-         return this.width * this.height
+       getMeshByID(pp) {
+         return this.getMeshById(pp)
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L1273-L1274` → after: `L9566-L9567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9566-L9567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9566-L9567) · [Before (L1273-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L1273-L1274)

```diff
-       static Zero() {
-         return new QC(0, 0)
+       getMeshByUniqueID(pp) {
+         return this.getMeshByUniqueId(pp)
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L1276-L1277` → after: `L9569-L9570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9569-L9570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9569-L9570) · [Before (L1276-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L1276-L1277)

```diff
-       add(CC) {
-         return new QC(this.width + CC.width, this.height + CC.height)
+       getLastMeshByID(pp) {
+         return this.getLastMeshById(pp)
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L1279-L1280` → after: `L9572-L9573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9572-L9573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9572-L9573) · [Before (L1279-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L1279-L1280)

```diff
-       subtract(CC) {
-         return new QC(this.width - CC.width, this.height - CC.height)
+       getMeshesByID(pp) {
+         return this.getMeshesById(pp)
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L1282-L1283` → after: `L9575-L9576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9575-L9576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9575-L9576) · [Before (L1282-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L1282-L1283)

```diff
-       scale(CC) {
-         return new QC(this.width * CC, this.height * CC)
+       getTransformNodeByID(pp) {
+         return this.getTransformNodeById(pp)
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L1285-L1288` → after: `L9578-L9579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9578-L9579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/256.js#L9578-L9579) · [Before (L1285-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/256.js#L1285-L1288)

```diff
-       static Lerp(CC, zC, ZC) {
-         const wC = CC.width + (zC.width - CC.width) * ZC,
-           bC = CC.height + (zC.height - CC.height) * ZC;
-         return new QC(wC, bC)
+       getTransformNodeByUniqueID(pp) {
+         return this.getTransformNodeByUniqueId(pp)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/257.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/257.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775)

#### 1. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/257.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/257.js#L2)

```diff
- export const ids = [257];
+ export const ids = [257, 358];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/257.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/257.js#L4)

```diff
-   40069: (CC, zC, ZC) => {
+   40062: (pp, ip, cp) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/257.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/257.js#L6-L7)

```diff
-       e: () => nC,
-       i: () => fC
+       b: () => Op
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L14-L15` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/257.js#L9-L10) · [Before (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/257.js#L14-L15)

```diff
-       constructor(CC) {
-         this.attachedToElement = !1, this.attached = {}, this.camera = CC, this.checkInputs = () => {}
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Op.ShadersRepository : Op.ShadersRepositoryWGSL
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L17-L19` → after: `L12-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/257.js#L12-L13) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/257.js#L17-L19)

```diff
-       add(CC) {
-         const zC = CC.getSimpleName();
-         this.attached[zC] ? QC.c.Warn("camera input of type " + zC + " already exists on camera") : (this.attached[zC] = CC, CC.camera = this.camera, CC.checkInputs && (this.checkInputs = this._addCheckInputs(CC.checkInputs.bind(CC))), this.attachedToElement && CC.attachControl(t … [truncated]
+       static GetShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Op.ShadersStore : Op.ShadersStoreWGSL
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L21-L92` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/257.js#L15-L16) · [Before (L21-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/257.js#L21-L92)

```diff
-       remove(CC) {
-         for (const zC in this.attached) {
-           const ZC = this.attached[zC];
-           if (ZC === CC) return ZC.detachControl(), ZC.camera = null, delete this.attached[zC], void this.rebuildInputCheck()
-         }
-       }
-       removeByType(CC) {
-         for (const zC in this.attached) {
-           const ZC = this.attached[zC];
-           ZC.getClassName() === CC && (ZC.detachControl(), ZC.camera = null, delete this.attached[zC], this.rebuildInputCheck())
-         }
-       }
-       _addCheckInputs(CC) {
-         const zC = this.checkInputs;
-         return () => {
-           zC(), CC()
- ... (56 more removed lines; see GitHub link above)
+       static GetIncludesShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Op.IncludesShadersStore : Op.IncludesShadersStoreWGSL
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L96-L98` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/257.js#L21-L23) · [Before (L96-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/257.js#L96-L98)

```diff
-   40963: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => RC
+   61392: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       postprocessVertexShader: () => Sp
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L100-L441` → after: `L25-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L25-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/257.js#L25-L31) · [Before (L100-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/257.js#L100-L441)

```diff
-     var QC = ZC(39811),
-       wC = ZC(39818),
-       bC = ZC(39712),
-       nC = ZC(36963),
-       fC = ZC(39803),
-       oC = ZC(40303),
-       qC = ZC(37002),
-       FC = ZC(36987),
-       WC = ZC(39842),
-       NC = ZC(39650),
-       MC = ZC(38507),
-       gC = ZC(39865),
-       SC = ZC(37731),
-       pC = ZC(39896);
-     var PC = ZC(39721);
-     let GC = !1;
- ... (326 more removed lines; see GitHub link above)
+     var Op = cp(40062);
+     const op = "postprocessVertexShader",
+       Ip = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
+     Op.b.ShadersStore[op] || (Op.b.ShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/258.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/258.js` (48 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44)

#### 1. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L4)

```diff
-   40031: (CC, zC, ZC) => {
+   40273: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L6` → after: `L6-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L6-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L6-L12) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L6)

```diff
-       d: () => eC
+       d: () => Pp,
+       e: () => Ap,
+       f: () => Lp,
+       i: () => Wp,
+       m: () => Yp,
+       p: () => xp,
+       s: () => Dp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L8-L41` → after: `L14-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L14-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L14-L21) · [Before (L8-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L8-L41)

```diff
-     var QC = ZC(39811),
-       wC = ZC(39818),
-       bC = ZC(36963),
-       nC = ZC(40035),
-       fC = ZC(40069),
-       oC = ZC(40001),
-       qC = ZC(39913);
-     let FC = (() => {
-       var CC;
-       let zC, ZC, nC, fC, FC, WC, NC, MC, gC, SC, pC, PC = [],
-         GC = [],
-         RC = [],
-         AC = [],
-         xC = [],
-         JC = [],
-         IC = [],
- ... (18 more removed lines; see GitHub link above)
+     var Op = cp(38905),
+       op = cp(40276);
+ 
+     function Ip(pp, ip, cp, Op) {
+       switch (ip) {
+         case 5120: {
+           let ip = pp.getInt8(cp);
+           return Op && (ip = Math.max(ip / 127, -1)), ip
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L43-L57` → after: `L23-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L23-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L23-L25) · [Before (L43-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L43-L57)

```diff
-         attachControl(CC) {
-           CC = qC.g.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.Km(), this._engine = this._scene.mg(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
-             this._keys.length = 0
-           })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((zC => {
-             const ZC = zC.event;
-             if (!ZC.metaKey)
-               if (zC.type === oC.c.KEYDOWN) {
-                 if (-1 !== this.keysUp.indexOf(ZC.keyCode) || -1 !== this.keysDown.indexOf(ZC.keyCode) || -1 !== this.keysLeft.indexOf(ZC.keyCode) || -1 !== this.keysRight.indexOf(ZC.keyCode) || -1 !== this.keysUpward.indexOf(ZC.keyCode) || -1 !== this.keysDownward.indexOf(ZC.key … [truncated]
-                   -1 === this._keys.indexOf(ZC.keyCode) && this._keys.push(ZC.keyCode), CC || ZC.preventDefault()
-                 }
-               } else if (-1 !== this.keysUp.indexOf(ZC.keyCode) || -1 !== this.keysDown.indexOf(ZC.keyCode) || -1 !== this.keysLeft.indexOf(ZC.keyCode) || -1 !== this.keysRight.indexOf(ZC.keyCode) || -1 !== this.keysUpward.indexOf(ZC.keyCode) || -1 !== this.keysDownward.indexOf(Z … [truncated]
-               const zC = this._keys.indexOf(ZC.keyCode);
-               zC >= 0 && this._keys.splice(zC, 1), CC || ZC.preventDefault()
-             }
-           })))
+         case 5121: {
+           let ip = pp.getUint8(cp);
+           return Op && (ip /= 255), ip
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L59-L60` → after: `L27-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L27-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L27-L29) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L59-L60)

```diff
-         detachControl() {
-           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
+         case 5122: {
+           let ip = pp.getInt16(cp, !0);
+           return Op && (ip = Math.max(ip / 32767, -1)), ip
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L62-L77` → after: `L31-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L31-L33) · [Before (L62-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L62-L77)

```diff
-         checkInputs() {
-           if (this._onKeyboardObserver) {
-             const CC = this.camera,
-               zC = CC.movement.input,
-               ZC = zC.getEntry("keyboard", "translate"),
-               QC = zC.getEntry("keyboard", "rotate"),
-               wC = QC?.sensitivity ?? 1,
-               nC = CC._localDirection.L_(0, 0, 0);
-             for (let bC = 0; bC < this._keys.length; bC++) {
-               const zC = this._keys[bC]; - 1 !== this.keysLeft.indexOf(zC) ? nC.x -= 1 : -1 !== this.keysUp.indexOf(zC) ? nC.z += 1 : -1 !== this.keysRight.indexOf(zC) ? nC.x += 1 : -1 !== this.keysDown.indexOf(zC) ? nC.z -= 1 : -1 !== this.keysUpward.indexOf(zC) ? nC.y += 1 : -1 … [truncated]
-             }
-             if (ZC && (0 !== nC.x || 0 !== nC.y || 0 !== nC.z)) {
-               const zC = CC._computeLocalCameraSpeed() * (ZC.sensitivity ?? 1);
-               nC.normalize().scaleInPlace(zC), CC.Km().useRightHandedSystem && (nC.z *= -1), CC.getViewMatrix().invertToRef(CC._cameraTransformMatrix), bC.r.TransformNormalToRef(nC, CC._cameraTransformMatrix, CC._transformedDirection), CC.cameraDirection.addInPlace(CC._transforme … [truncated]
-             }
-           }
+         case 5123: {
+           let ip = pp.getUint16(cp, !0);
+           return Op && (ip /= 65535), ip
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L79-L83` → after: `L35-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L35-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L35-L107) · [Before (L79-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L79-L83)

```diff
-         getClassName() {
-           return "FreeCameraKeyboardMoveInput"
-         }
-         _onLostFocus() {
-           this._keys.length = 0
+         case 5131:
+           return (0, op.c)(pp.getUint16(cp, !0));
+         case 5124:
+           return pp.getInt32(cp, !0);
+         case 5125:
+           return pp.getUint32(cp, !0);
+         case 5126:
+           return pp.getFloat32(cp, !0);
+         default:
+           throw new Error(`Invalid component type ${ip}`)
+       }
+     }
+ 
+     function Sp(pp, ip, cp, Op, Ip) {
+       switch (ip) {
+         case 5120:
+ ... (57 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L85-L86` → after: `L109-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L109-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L109-L116) · [Before (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L85-L86)

```diff
-         getSimpleName() {
-           return "keyboard"
+       } else {
+         const Wp = ArrayBuffer.isView(pp) ? new DataView(pp.buffer, pp.byteOffset, pp.byteLength) : new DataView(pp),
+           yp = xp(op);
+         for (let pp = 0; pp < Lp; pp += Op) {
+           for (let pp = 0, cp = ip; pp < Op; pp++, cp += yp) Ap[pp] = Pp[pp] = Ip(Wp, op, cp, Yp);
+           Dp(Pp, pp);
+           for (let pp = 0, cp = ip; pp < Op; pp++, cp += yp) Ap[pp] !== Pp[pp] && Sp(Wp, op, cp, Yp, Pp[pp]);
+           ip += cp
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L88-L90` → after: `L118-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L118-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L118-L133) · [Before (L88-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L88-L90)

```diff
-         _getLocalRotation() {
-           const CC = this.camera._calculateHandednessMultiplier();
-           return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * CC
+       }
+     }
+ 
+     function Yp(pp, ip, cp, op, Ip, Sp, Yp, Dp) {
+       const Ap = ip * xp(cp),
+         Pp = Yp * ip;
+       if (5126 !== cp || Ip !== Ap) {
+         const Op = new Float32Array(Pp);
+         return Lp(pp, op, Ip, ip, cp, Pp, Sp, ((pp, cp) => {
+           for (let op = 0; op < ip; op++) Op[cp + op] = pp[op]
+         })), Op
+       }
+       if (!(pp instanceof Array || pp instanceof Float32Array) || 0 !== op || pp.length !== Pp) {
+         if (pp instanceof Array) {
+           const ip = op / 4;
+           return pp.slice(ip, ip + Pp)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L92-L261` → after: `L135-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L135-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L135-L137) · [Before (L92-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L92-L261)

```diff
-       }, (() => {
-         const bC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         zC = [(0, wC.M)()], ZC = [(0, wC.M)()], nC = [(0, wC.M)()], fC = [(0, wC.M)()], FC = [(0, wC.M)()], WC = [(0, wC.M)()], NC = [(0, wC.M)()], MC = [(0, wC.M)()], gC = [(0, wC.M)()], SC = [(0, wC.M)()], pC = [(0, wC.M)()], (0, QC.j)(null, null, zC, {
-           kind: "field",
-           name: "keysUp",
-           static: !1,
-           private: !1,
-           access: {
-             has: CC => "keysUp" in CC,
-             get: CC => CC.keysUp,
-             set: (CC, zC) => {
-               CC.keysUp = zC
-             }
-           },
-           metadata: bC
-         }, PC, GC), (0, QC.j)(null, null, ZC, {
- ... (154 more removed lines; see GitHub link above)
+         if (ArrayBuffer.isView(pp)) {
+           const ip = pp.byteOffset + op;
+           return 0 !== (3 & ip) && (Op.e.Warn("Float array must be aligned to 4-bytes border"), Dp = !0), Dp ? new Float32Array(pp.buffer.slice(ip, ip + Pp * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(pp.buffer, ip, Pp)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L263-L265` → after: `L139-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L139-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L139-L178) · [Before (L263-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L263-L265)

```diff
-         constructor() {
-           let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-           this.touchEnabled = CC, this.buttons = (0, QC.n)(this, bC, [0, 1, 2]), this.angularSensibility = ((0, QC.n)(this, nC), (0, QC.n)(this, fC, 2e3)), this._pointerInput = (0, QC.n)(this, oC), this._previousPosition = null, this.onPointerMovedObservable = new WC.d, this._all … [truncated]
+         return new Float32Array(pp, op, Pp)
+       }
+       return Dp ? pp.slice() : pp
+     }
+ 
+     function Dp(pp, ip, cp, op, Ip, Sp, Yp) {
+       const Dp = xp(cp),
+         Ap = function(pp) {
+           switch (pp) {
+             case 5120:
+               return Int8Array;
+             case 5121:
+               return Uint8Array;
+             case 5122:
+               return Int16Array;
+             case 5123:
+ ... (24 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L267-L304` → after: `L180-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L180-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L180-L267) · [Before (L267-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L267-L304)

```diff
-         attachControl(CC) {
-           CC = qC.g.BackCompatCameraNoPreventDefault(arguments);
-           const zC = this.camera.mg(),
-             ZC = zC.getInputElement();
-           this._pointerInput || (this._pointerInput = QC => {
-             const wC = QC.event,
-               bC = "touch" === wC.pointerType;
-             if (!this.touchEnabled && bC) return;
-             if (QC.type !== NC.b.POINTERMOVE && -1 === this.buttons.indexOf(wC.button)) return;
-             const nC = wC.target;
-             if (QC.type === NC.b.POINTERDOWN) {
-               if (bC && -1 !== this._activePointerId || !bC && -1 !== this._currentActiveButton) return;
-               this._activePointerId = wC.pointerId;
-               try {
-                 nC?.setPointerCapture(wC.pointerId)
-               } catch (fC) {} - 1 === this._currentActiveButton && (this._currentActiveButton = wC.button), this._previousPosition = {
- ... (22 more removed lines; see GitHub link above)
+         return new Ap(pp.slice(Op, Op + Pp))
+       }
+       let Wp, yp = op;
+       ArrayBuffer.isView(pp) ? (Wp = pp.buffer, yp += pp.byteOffset) : Wp = pp;
+       if (yp + (Sp - 1) * Ip + ip * Dp > Wp.byteLength) throw new Error("Last accessed byte is out of bounds.");
+       const Up = ip * Dp;
+       if (Ip < Up) throw new Error("Byte stride cannot be smaller than the component's byte size.");
+       if (Ip !== Up) {
+         const pp = new Ap(Pp),
+           cp = new Uint8Array(Wp, yp),
+           Op = new Uint8Array(pp.buffer),
+           op = ip * Dp;
+         for (let ip = 0, xp = 0, Lp = 0; ip < Sp; ip++, xp += Ip, Lp += op) Op.set(cp.subarray(xp, xp + op), Lp);
+         return pp
+       }
+       return 1 !== Dp && 0 !== (yp & Dp - 1) && (Op.e.Warn("Array must be aligned to border of element size. Data will be copied."), Yp = !0), Yp ? new Ap(Wp.slice(yp, yp + Pp * Dp)) : new Ap(Wp, yp, Pp)
+ ... (72 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L306-L313` → after: `L269-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L269-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L269-L271) · [Before (L306-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L306-L313)

```diff
-           }), this._onMouseMove = ZC => {
-             if (!zC.isPointerLock) return;
-             const QC = this.camera._calculateHandednessMultiplier();
-             this._applyPointerRotation(ZC.movementX * QC, ZC.movementY * QC), this._previousPosition = null, CC || ZC.preventDefault()
-           }, this._observer = this.camera.Km()._inputManager._addCameraPointerObserver(this._pointerInput, NC.b.POINTERDOWN | NC.b.POINTERUP | NC.b.POINTERMOVE), ZC && (this._contextMenuBind = CC => this.onContextMenu(CC), ZC.addEventListener("contextmenu", this._contextMenuBind, … [truncated]
-         }
-         onContextMenu(CC) {
-           CC.preventDefault()
+             ip.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (ip.lookForClosingBracketForUniformBuffer = !1, op.endOfUniformBufferProcessor && (cp = op.endOfUniformBufferProcessor(this.line, ip.isFragment, ip.processingContext)))
+           }
+           Op += cp + "\n"
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L315-L319` → after: `L273-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L273-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L273-L308) · [Before (L315-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L315-L319)

```diff
-         detachControl() {
-           if (this._observer) {
-             if (this.camera.Km()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
-               const CC = this.camera.mg().getInputElement();
-               CC && CC.removeEventListener("contextmenu", this._contextMenuBind)
+         for (const op of this.children) Op += op.process(pp, ip, cp);
+         return this.additionalDefineKey && (pp[this.additionalDefineKey] = this.additionalDefineValue || "true", cp[this.additionalDefineKey] = pp[this.additionalDefineKey]), Op
+       }
+     }
+     class op {
+       constructor() {
+         this._lines = []
+       }
+       get currentLine() {
+         return this._lines[this.lineIndex]
+       }
+       get canRead() {
+         return this.lineIndex < this._lines.length - 1
+       }
+       set lines(pp) {
+         this._lines.length = 0;
+ ... (20 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L325-L329` → after: `L312-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L312-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L312-L318) · [Before (L325-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L325-L329)

```diff
-         getClassName() {
-           return "FreeCameraMouseInput"
-         }
-         getSimpleName() {
-           return "mouse"
+       }
+     }
+     class Ip extends Op {
+       process(pp, ip, cp) {
+         for (let Op = 0; Op < this.children.length; Op++) {
+           const op = this.children[Op];
+           if (op.isValid(pp)) return op.process(pp, ip, cp)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L331-L343` → after: `L320-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L320-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L320-L349) · [Before (L331-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L331-L343)

```diff
-       }, (() => {
-         const qC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         zC = [(0, wC.M)()], ZC = [(0, wC.M)()], (0, QC.j)(null, null, zC, {
-           kind: "field",
-           name: "buttons",
-           static: !1,
-           private: !1,
-           access: {
-             has: CC => "buttons" in CC,
-             get: CC => CC.buttons,
-             set: (CC, zC) => {
-               CC.buttons = zC
-             }
+         return ""
+       }
+     }
+     class Sp extends Op {
+       isValid(pp) {
+         return this.testExpression.isTrue(pp)
+       }
+     }
+     class xp {
+       isTrue(pp) {
+         return !0
+       }
+       static postfixToInfix(pp) {
+         const ip = [];
+         for (const cp of pp)
+           if (void 0 === xp._OperatorPriority[cp]) ip.push(cp);
+ ... (14 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L345-L356` → after: `L351-L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L351-L352) · [Before (L345-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L345-L356)

```diff
-           metadata: qC
-         }, bC, nC), (0, QC.j)(null, null, ZC, {
-           kind: "field",
-           name: "angularSensibility",
-           static: !1,
-           private: !1,
-           access: {
-             has: CC => "angularSensibility" in CC,
-             get: CC => CC.angularSensibility,
-             set: (CC, zC) => {
-               CC.angularSensibility = zC
-             }
+           Ip = pp => {
+             Op < xp._Stack.length - 1 && (xp._Stack[++Op] = pp)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L358-L379` → after: `L354-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L354-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L354-L369) · [Before (L358-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L358-L379)

```diff
-           metadata: qC
-         }, fC, oC), qC && Object.defineProperty(CC, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: qC
-         })
-       })(), CC
-     })();
-     fC.e.FreeCameraMouseInput = MC;
-     var gC = ZC(40010);
-     let SC = (() => {
-       var CC;
-       let zC, ZC, bC, nC = [],
-         fC = [],
-         oC = [],
- ... (6 more removed lines; see GitHub link above)
+           Sp = () => xp._Stack[Op],
+           Lp = () => -1 === Op ? "!!INVALID EXPRESSION!!" : xp._Stack[Op--];
+         let Yp = 0,
+           Dp = "";
+         for (; Yp < pp.length;) {
+           const ip = pp.charAt(Yp),
+             Ap = Yp < pp.length - 1 ? pp.substring(Yp, 2 + Yp) : "";
+           if ("(" === ip) Dp = "", Ip(ip);
+           else if (")" === ip) {
+             for (op(); - 1 !== Op && "(" !== Sp();) cp.push(Lp());
+             Lp()
+           } else if (xp._OperatorPriority[Ap] > 1) {
+             for (op(); - 1 !== Op && xp._OperatorPriority[Sp()] >= xp._OperatorPriority[Ap];) cp.push(Lp());
+             Ip(Ap), Yp++
+           } else Dp += ip;
+           Yp++
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L381-L390` → after: `L371-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L371-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L371-L437) · [Before (L381-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L381-L390)

```diff
-         attachControl(CC) {
-           CC = qC.g.BackCompatCameraNoPreventDefault(arguments), this._wheel = zC => {
-             if (zC.type !== NC.b.POINTERWHEEL) return;
-             const ZC = zC.event,
-               QC = ZC.deltaMode === gC.d.DOM_DELTA_LINE ? this._ffMultiplier : 1;
-             this._wheelDeltaX += this.wheelPrecisionX * QC * ZC.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * QC * ZC.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * QC * ZC.deltaZ / this._normalize, ZC.preventDefault && (CC || ZC.pre … [truncated]
-           }, this._observer = this.camera.Km()._inputManager._addCameraPointerObserver(this._wheel, NC.b.POINTERWHEEL)
-         }
-         detachControl() {
-           this._observer && (this.camera.Km()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
+         for (op(); - 1 !== Op;) "(" === Sp() ? Lp() : cp.push(Lp());
+         return xp._InfixToPostfixCache.size >= xp.InfixToPostfixCacheLimitSize && xp.ClearCache(), xp._InfixToPostfixCache.set(pp, {
+           result: cp,
+           accessTime: Date.now()
+         }), cp
+       }
+       static ClearCache() {
+         const pp = Array.from(xp._InfixToPostfixCache.entries()).sort(((pp, ip) => pp[1].accessTime - ip[1].accessTime));
+         for (let ip = 0; ip < xp.InfixToPostfixCacheCleanupSize; ip++) xp._InfixToPostfixCache.delete(pp[ip][0])
+       }
+     }
+     xp.InfixToPostfixCacheLimitSize = 5e4, xp.InfixToPostfixCacheCleanupSize = 25e3, xp._InfixToPostfixCache = new Map, xp._OperatorPriority = {
+       ")": 0,
+       "(": 1,
+       "||": 2,
+       "&&": 3
+ ... (51 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L392-L397` → after: `L439-L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L439-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L439-L518) · [Before (L392-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L392-L397)

```diff
-         checkInputs() {
-           this.onChangedObservable.notifyObservers({
-             wheelDeltaX: this._wheelDeltaX,
-             wheelDeltaY: this._wheelDeltaY,
-             wheelDeltaZ: this._wheelDeltaZ
-           }), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0
+         return ip
+       }
+     }
+     var Pp = cp(40096),
+       Wp = cp(40088);
+     const yp = /defined\s*?\((.+?)\)/g,
+       Up = /defined\s*?\[(.+?)\]/g,
+       wp = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
+       vp = /__decl__/,
+       tp = /light\{X\}.(\w*)/g,
+       Hp = /\{X\}/g,
+       dp = [],
+       ep = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;
+ 
+     function jp(pp) {
+       pp.processor && pp.processor.initializeShaders && pp.processor.initializeShaders(pp.processingContext)
+ ... (64 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L399-L400` → after: `L520-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L520-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L520-L532) · [Before (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L399-L400)

```diff
-         getClassName() {
-           return "BaseCameraMouseWheelInput"
+         let Op = cp[cp.length - 1];
+         return "string" === typeof Op && (Op = Op.replace(Up, "defined($1)")), "string" === typeof Op ? Rp(Op) : Op
+       }(op), cp
+     }
+ 
+     function Mp(pp, ip, cp, op) {
+       let Ip;
+       for (; Cp(pp, cp, op);) {
+         Ip = pp.currentLine;
+         const Sp = Ip.substring(0, 5).toLowerCase();
+         if ("#else" === Sp) {
+           const cp = new Op;
+           return ip.children.push(cp), void Cp(pp, cp, op)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L402-L403` → after: `L534-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L534-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L534-L536) · [Before (L402-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L402-L403)

```diff
-         getSimpleName() {
-           return "mousewheel"
+         if ("#elif" === Sp) {
+           const pp = qp(Ip, 5);
+           ip.children.push(pp), cp = pp
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L405-L442` → after: `L538-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L538-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L538-L573) · [Before (L405-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L405-L442)

```diff
-       }, (() => {
-         const qC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         zC = [(0, wC.M)()], ZC = [(0, wC.M)()], bC = [(0, wC.M)()], (0, QC.j)(null, null, zC, {
-           kind: "field",
-           name: "wheelPrecisionX",
-           static: !1,
-           private: !1,
-           access: {
-             has: CC => "wheelPrecisionX" in CC,
-             get: CC => CC.wheelPrecisionX,
-             set: (CC, zC) => {
-               CC.wheelPrecisionX = zC
-             }
-           },
-           metadata: qC
-         }, nC, fC), (0, QC.j)(null, null, ZC, {
- ... (22 more removed lines; see GitHub link above)
+       }
+     }
+ 
+     function Cp(pp, ip, cp) {
+       for (; pp.canRead;) {
+         pp.lineIndex++;
+         const op = pp.currentLine;
+         if (op.indexOf("#") >= 0) {
+           const Op = ep.exec(op);
+           if (Op && Op.length) {
+             switch (Op[0]) {
+               case "#ifdef": {
+                 const Op = new Ip;
+                 ip.children.push(Op);
+                 const Sp = qp(op, 6);
+                 Op.children.push(Sp), Mp(pp, Op, Sp, cp);
+ ... (20 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L444-L491` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L575-L576) · [Before (L444-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L444-L491)

```diff
-           },
-           metadata: qC
-         }, MC, SC), qC && Object.defineProperty(CC, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: qC
-         })
-       })(), CC
-     })();
-     var pC;
-     ! function(CC) {
-       CC[CC.MoveRelative = 0] = "MoveRelative", CC[CC.RotateRelative = 1] = "RotateRelative", CC[CC.MoveScene = 2] = "MoveScene"
-     }(pC || (pC = {}));
-     let PC = (() => {
-       var CC;
- ... (32 more removed lines; see GitHub link above)
+             continue
+           }
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L493-L494` → after: `L578-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L578-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L578-L581) · [Before (L493-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L493-L494)

```diff
-         set wheelYRotateRelative(CC) {
-           null === CC && this._wheelYAction !== pC.RotateRelative || (this._wheelYAction = pC.RotateRelative, this._wheelYActionCoordinate = CC)
+         const Sp = new Op;
+         if (Sp.line = op, ip.children.push(Sp), "#" === op[0] && "d" === op[1]) {
+           const pp = op.replace(";", "").split(" ");
+           Sp.additionalDefineKey = pp[1], 3 === pp.length && (Sp.additionalDefineValue = pp[2])
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L496-L497` → after: `L583-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L583-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L583-L642) · [Before (L496-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L496-L497)

```diff
-         get wheelYRotateRelative() {
-           return this._wheelYAction !== pC.RotateRelative ? null : this._wheelYActionCoordinate
+       }
+       return !1
+     }
+ 
+     function Ep(pp, ip, cp, Ip) {
+       const Sp = new Op,
+         xp = new op;
+       return xp.lineIndex = -1, xp.lines = pp.split("\n"), Cp(xp, Sp, Ip), Sp.process(ip, cp, Ip)
+     }
+ 
+     function Xp(pp, ip) {
+       const cp = pp.defines,
+         Op = {};
+       for (const op of cp) {
+         const pp = op.replace("#define", "").replace(";", "").trim().split(" ");
+         Op[pp[0]] = pp.length > 1 ? pp[1] : ""
+ ... (44 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L499-L500` → after: `L644-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L644-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L644-L690) · [Before (L499-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L499-L500)

```diff
-         set wheelZRotateRelative(CC) {
-           null === CC && this._wheelZAction !== pC.RotateRelative || (this._wheelZAction = pC.RotateRelative, this._wheelZActionCoordinate = CC)
+       }
+       dp.length = 0;
+       const Sp = op.join("");
+       Ip ? lp(Sp.toString(), ip, cp) : cp(Sp)
+     }
+     const Qp = {
+       loadFile: (pp, ip, cp, Op, op, Ip) => {
+         throw (0, Pp.o)("FileTools")
+       }
+     }
+   },
+   40088: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => op,
+       g: () => Ip,
+       j: () => xp,
+ ... (31 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L502-L503` → after: `L692-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L692-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L692-L694) · [Before (L502-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L502-L503)

```diff
-         get wheelZRotateRelative() {
-           return this._wheelZAction !== pC.RotateRelative ? null : this._wheelZActionCoordinate
+         case 0: {
+           const pp = new Uint8Array(ip);
+           return Op && pp.set(new Uint8Array(Op)), pp
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L505-L506` → after: `L696-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L696-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L696-L698) · [Before (L505-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L505-L506)

```diff
-         set wheelXMoveScene(CC) {
-           null === CC && this._wheelXAction !== pC.MoveScene || (this._wheelXAction = pC.MoveScene, this._wheelXActionCoordinate = CC)
+         case 4: {
+           const pp = "number" !== typeof ip ? new Int16Array(ip) : new Int16Array(cp ? ip / 2 : ip);
+           return Op && pp.set(new Int16Array(Op)), pp
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L508-L509` → after: `L700-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L700-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L700-L706) · [Before (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L508-L509)

```diff
-         get wheelXMoveScene() {
-           return this._wheelXAction !== pC.MoveScene ? null : this._wheelXActionCoordinate
+         case 5:
+         case 8:
+         case 9:
+         case 10:
+         case 2: {
+           const pp = "number" !== typeof ip ? new Uint16Array(ip) : new Uint16Array(cp ? ip / 2 : ip);
+           return Op && pp.set(new Uint16Array(Op)), pp
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L511-L512` → after: `L708-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L708-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L708-L710) · [Before (L511-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L511-L512)

```diff
-         set wheelYMoveScene(CC) {
-           null === CC && this._wheelYAction !== pC.MoveScene || (this._wheelYAction = pC.MoveScene, this._wheelYActionCoordinate = CC)
+         case 6: {
+           const pp = "number" !== typeof ip ? new Int32Array(ip) : new Int32Array(cp ? ip / 4 : ip);
+           return Op && pp.set(new Int32Array(Op)), pp
```
