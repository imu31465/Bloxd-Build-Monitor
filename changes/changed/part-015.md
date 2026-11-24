# Changed — Bundle Modifications Report (Part 015 / 065)

- **Updated at**: `2026-11-25T01:10 JST`
- **Part**: `15 / 65` (**283** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 014](part-014.md) · [Part 016 →](part-016.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/243.js` (tz47m9.2cb7e113 → sn3sfj.2522680a · continued)

- **File**: `bundles/bloxd.io/chunks/js/243.js` (106 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9)

#### 44. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16585-L16587` → after: `L464-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L464-L465) · [Before (L16585-L16587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16585-L16587)

```diff
-       bJ(DD, zD) {
-         const wD = Math.min(zD.arcStruck, zD.arcPoints.length);
-         this.draw(DD, [zD.arcFrom, ...zD.arcPoints], zD.arcPoints.slice(0, wD))
+       setExecuteFunc(pp) {
+         this._executeFunc = pp
```

#### 45. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16589-L16595` → after: `L467-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L467-L468) · [Before (L16589-L16595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16589-L16595)

```diff
-       onBlade(DD, zD) {
-         const [wD, pD, sD] = zD.bladeCentre, [KD, rD] = zD.bladeFacing, LD = wD - 1.5 * KD, cD = sD - 1.5 * rD, gD = Math.atan2(rD, KD), RD = [];
-         for (let AD = 0; AD <= 8; AD++) {
-           const DD = gD - yh / 2 + yh * AD / 8;
-           RD.push([LD + 2.5 * Math.cos(DD), pD, cD + 2.5 * Math.sin(DD)])
-         }
-         this.draw(DD, RD, zD.bladeStruck)
+       _execute() {
+         this.disabled || this._executeFunc(this._context)
```

#### 46. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16597-L16599` → after: `L470-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L470-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L470-L471) · [Before (L16597-L16599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16597-L16599)

```diff
-       dispose() {
-         var DD;
-         null === (DD = this.particles) || void 0 === DD || DD.stop(), this.particles = null
+       _initialize() {
+         this._initFunc?.(this._context)
```

#### 47. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16601-L16664` → after: `L473-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L473-L474) · [Before (L16601-L16664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16601-L16664)

```diff
-       draw(DD, zD, wD) {
-         if (!DD.particlesEnabled() || zD.length < 2) return;
-         const pD = performance.now();
-         this.budget = Math.min(Wh, this.budget + (pD - this.lastMs) / 1e3 * Wh), this.lastMs = pD;
-         const sD = [];
-         let KD = 0,
-           rD = zD[0];
-         for (const hD of zD.slice(1)) {
-           const DD = Math.min(48, Math.round(Math.hypot(hD[0] - rD[0], hD[1] - rD[1], hD[2] - rD[2]) * this.style.perBlock));
-           sD.push([rD, hD, DD]), KD += DD, rD = hD
-         }
-         const LD = wD.length;
-         KD += 10 * LD;
-         const cD = KD > this.budget ? this.budget / KD : 1;
-         if (0 === KD || cD * KD < 1) return;
-         const gD = zD[0],
- ... (48 more removed lines; see GitHub link above)
+       _isValid() {
+         return void 0 !== this._executeFunc ? null : "Execute function is not set (call setExecuteFunc to set it)"
```

#### 48. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16667-L16678` → after: `L478-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L478-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L478-L480) · [Before (L16667-L16678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16667-L16678)

```diff
-     const mh = new Set(["Sky Spring"]);
- 
-     function eh(DD, zD, wD) {
-       const pD = DD.split("|")[0];
-       return "Air" !== zD || wD || ! function(DD) {
-         const zD = DD.split("|")[0];
-         return void 0 !== rw[zD] || mh.has(zD)
-       }(pD) ? null : DD
-     }
-     class oh {
-       constructor() {
-         this.lastTapAt = -1 / 0
+     class Hp extends tp {
+       static IsObjectListPass(pp) {
+         return void 0 !== pp.setObjectList
```

#### 49. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16680-L16682` → after: `L482-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L482-L483) · [Before (L16680-L16682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16680-L16682)

```diff
-       isNewPress(DD) {
-         const zD = DD - this.lastTapAt >= 300;
-         return this.lastTapAt = DD, zD
+       get objectList() {
+         return this._objectList
```

#### 50. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16684-L16687` → after: `L485-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L485-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L485-L486) · [Before (L16684-L16687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16684-L16687)

```diff
-     }
-     class ah {
-       constructor() {
-         this.presses = new oh, this.predicted = null
+       setObjectList(pp) {
+         this._objectList = pp
```

#### 51. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16689-L16694` → after: `L488-L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L488-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L488-L489) · [Before (L16689-L16694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16689-L16694)

```diff
-       tap(DD, zD) {
-         const wD = this.presses.isNewPress(zD);
-         return wD && (this.predicted = {
-           station: DD,
-           at: zD
-         }), wD
+       constructor(pp, ip, cp, Op) {
+         super(pp, ip, cp), this._engine = Op
```

#### 52. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16696-L16698` → after: `L491-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L491-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L491-L493) · [Before (L16696-L16698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16696-L16698)

```diff
-       consumeServerOpen(DD, zD) {
-         const wD = this.predicted;
-         return !(null === wD || wD.station !== DD || zD - wD.at > 2e3) && (this.predicted = null, !0)
+       _isValid() {
+         const pp = super._isValid();
+         return pp || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
```

#### 53. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16701-L16703` → after: `L496-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L496-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L496-L498) · [Before (L16701-L16703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16701-L16703)

```diff
-     class uh {
-       constructor() {
-         this.thrustAt = -1 / 0
+     class dp extends tp {
+       static IsRenderPass(pp) {
+         return void 0 !== pp.setRenderTarget
```

#### 54. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16705-L16706` → after: `L500-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L500-L501) · [Before (L16705-L16706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16705-L16706)

```diff
-       lit(DD, zD) {
-         return DD && (this.thrustAt = zD), zD - this.thrustAt < 200
+       get renderTarget() {
+         return this._renderTarget
```

#### 55. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16708-L16736` → after: `L503-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L503-L504) · [Before (L16708-L16736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16708-L16736)

```diff
-     }
-     const vh = [.1, .05, .1],
-       th = {
-         texture: "effect_5",
-         bA: Math.ceil(48),
-         minLifeTime: .35,
-         maxLifeTime: .8,
-         minEmitPower: 1,
-         maxEmitPower: 2,
-         minSize: .2,
-         maxSize: .45,
-         emitRate: 0,
-         gravity: [0, -2, 0],
-         dir1: [-.15, -1, -.15],
-         dir2: [.15, -1, .15],
-         colorGradients: [{
- ... (13 more removed lines; see GitHub link above)
+       get renderTargetDepth() {
+         return this._renderTargetDepth
```

#### 56. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16738-L16739` → after: `L506-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L506-L507) · [Before (L16738-L16739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16738-L16739)

```diff
-       bJ(DD, zD) {
-         for (const [wD, pD] of zD.baf2JetFlames) DD.isLocalPlayer(wD) || (pD ? this.lit.add(wD) : this.lit.delete(wD))
+       get frameGraphRenderTarget() {
+         return this._frameGraphRenderTarget
```

#### 57. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16741-L16746` → after: `L509-L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L509-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L509-L510) · [Before (L16741-L16746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16741-L16746)

```diff
-       onAfterRender(DD, zD) {
-         const wD = performance.now(),
-           pD = this.hold.lit(this.selfThrusting(DD, zD), wD);
-         for (const [sD, KD] of this.flames)(sD === zD ? pD : this.lit.has(sD)) || this.setEmitting(KD, !1), sD === zD || DD.getPositionView(sD) ? !KD.emitting && wD - KD.offAt >= 1300 && (KD.particles.stop(), this.flames.delete(sD)) : (KD.particles.dispose(), this.flames.delete(s … [truncated]
-         pD && this.draw(DD, zD, zD);
-         for (const sD of this.lit) this.draw(DD, zD, sD)
+       constructor(pp, ip, cp, Op) {
+         super(pp, ip, cp), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = Op
```

#### 58. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16748-L16750` → after: `L512-L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L512-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L512-L513) · [Before (L16748-L16750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16748-L16750)

```diff
-       dispose() {
-         for (const DD of this.flames.values()) DD.particles.dispose();
-         this.flames.clear(), this.lit.clear()
+       setRenderTarget(pp) {
+         this._renderTarget = pp
```

#### 59. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16752-L16761` → after: `L515-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L515-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L515-L516) · [Before (L16752-L16761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16752-L16761)

```diff
-       selfThrusting(DD, zD) {
-         var wD;
-         const pD = DD.getLocalPlayerMovement();
-         return !!pD && (null !== (sD = {
-           option: null !== (wD = DD.getClientOption(zD, "jumpHoldThrust")) && void 0 !== wD ? wD : null,
-           jumping: pD.jumpHeld,
-           onGround: pD.onGround,
-           alive: DD.isAlive(zD)
-         }).option && sD.option.maxUpSpeed >= 0 && sD.jumping && !sD.onGround && sD.alive);
-         var sD
+       setRenderTargetDepth(pp) {
+         this._renderTargetDepth = pp
```

#### 60. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16763-L16775` → after: `L518-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L518-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L518-L522) · [Before (L16763-L16775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16763-L16775)

```diff
-       draw(DD, zD, wD) {
-         var pD, sD;
-         const KD = this.pos;
-         if (!DD.readDrawnPosition(wD, KD)) return;
-         const rD = DD.readDrawnPosition(zD, this.camera) ? this.camera : KD;
-         if (!((KD[0] - rD[0]) ** 2 + (KD[1] - rD[1]) ** 2 + (KD[2] - rD[2]) ** 2 < 1600) || !DD.particlesEnabled()) {
-           const DD = this.flames.get(wD);
-           return void(DD && this.setEmitting(DD, !1))
-         }
-         const LD = null !== (pD = this.flames.get(wD)) && void 0 !== pD ? pD : this.create(DD, wD, KD),
-           cD = null !== (sD = DD.getDrawnHeading(wD)) && void 0 !== sD ? sD : 0,
-           gD = this.at;
-         gD[0] = KD[0] - .35 * Math.sin(cD), gD[1] = KD[1] + 1.05, gD[2] = KD[2] - .35 * Math.cos(cD), LD.particles.moveTo(gD), this.setEmitting(LD, !0)
+       addDependencies(pp) {
+         if (void 0 !== pp)
+           if (Array.isArray(pp))
+             for (const ip of pp) this._dependencies.add(ip);
+           else this._dependencies.add(pp)
```

#### 61. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16777-L16778` → after: `L524-L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L524-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L524-L531) · [Before (L16777-L16778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16777-L16778)

```diff
-       setEmitting(DD, zD) {
-         DD.emitting !== zD && (DD.emitting = zD, zD || (DD.offAt = performance.now()), DD.particles.setEmitRate(zD ? 60 : 0))
+       collectDependencies(pp) {
+         const ip = this._dependencies.keys();
+         for (let cp = ip.next(); !0 !== cp.done; cp = ip.next()) pp.add(cp.value);
+         if (void 0 !== this._renderTarget)
+           if (Array.isArray(this._renderTarget))
+             for (const cp of this._renderTarget) void 0 !== cp && pp.add(cp);
+           else pp.add(this._renderTarget);
+         void 0 !== this._renderTargetDepth && pp.add(this._renderTargetDepth)
```

#### 62. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16780-L16789` → after: `L533-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L533-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L533-L536) · [Before (L16780-L16789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16780-L16789)

```diff
-       create(DD, zD, wD) {
-         const pD = {
-           particles: DD.createParticles(th, {
-             pos: wD,
-             half: vh
-           }),
-           emitting: !1,
-           offAt: performance.now()
-         };
-         return this.flames.set(zD, pD), pD
+       setOutputLayerAndFaceIndices(pp) {
+         const ip = this.frameGraphRenderTarget.renderTargetWrapper;
+         if (ip)
+           for (const cp of pp) ip.setLayerAndFaceIndex(cp.targetIndex, cp.layerIndex, cp.faceIndex)
```

#### 63. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16791-L16814` → after: `L538-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L538-L539) · [Before (L16791-L16814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16791-L16814)

```diff
-     }
- 
-     function Yh(DD) {
-       return "Reactor Frame" === sp("reactor", DD)
-     }
- 
-     function Hh(DD) {
-       return Zw("reactor", DD) && !Yh(DD) && (DD.startsWith("Reactor Glass") || DD.startsWith("Reactor Port"))
-     }
-     const qh = "baf2Goal";
-     class Dn {
-       constructor() {
-         this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [Ws.l.subscribe("setDirectionArrow", (DD => {
-           let {
-             id: zD,
-             position: wD
- ... (8 more removed lines; see GitHub link above)
+       _initialize() {
+         this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
```

#### 64. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16816-L16817` → after: `L541-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L541-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L541-L542) · [Before (L16816-L16817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16816-L16817)

```diff
-       dispose() {
-         for (const DD of this.subs) Ws.l.unsubscribe(DD)
+       _execute() {
+         this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
```

#### 65. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16819-L16841` → after: `L544-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L544-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L544-L549) · [Before (L16819-L16841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16819-L16841)

```diff
-       sideOf(DD, zD, wD, pD) {
-         const sD = this.goal;
-         if (!sD) return 0;
-         wD - this.checkedAt > 1e3 && (this.checkedAt = wD, this.open = function(DD, zD) {
-           const [wD, pD, sD] = DD.map(Math.floor);
-           if (!Hh(zD(wD, pD, sD))) return null;
-           for (const [KD, rD] of [
-               [1, 0],
-               [0, 1]
-             ]) {
-             const DD = zD(wD + KD, pD, sD + rD),
-               LD = zD(wD - KD, pD, sD - rD);
-             if (Yh(LD) && Hh(DD)) return [KD, 0, rD];
-             if (Yh(DD) && Hh(LD)) return [0 - KD, 0, 0 - rD]
-           }
-           return null
- ... (7 more removed lines; see GitHub link above)
+       _isValid() {
+         const pp = super._isValid();
+         return pp || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
+       }
+       _dispose() {
+         this._frameGraphRenderTarget?.dispose()
```

#### 66. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16845-L16854` → after: `L554-L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L554-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L554-L555) · [Before (L16845-L16854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16845-L16854)

```diff
-       constructor() {
-         this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), th … [truncated]
-           this.boxStale = !0
-         }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.GJ = () => {
-           this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
-         }, this.sizes = new ResizeObserver((DD => {
-           for (const zD of DD) zD.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(zD.target, zD.borderBoxSize[0].inlineSize / 2)
-         })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
-           this.queued = !1, this.MI || this.clear()
-         }, window.addEventListener("resize", this.GJ)
+       get name() {
+         return this._name
```

#### 67. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16856-L16858` → after: `L557-L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L557-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L557-L558) · [Before (L16856-L16858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16856-L16858)

```diff
-       onAfterRender(DD, zD) {
-         var wD;
-         this.api = DD, this.project = null !== (wD = null === zD || void 0 === zD ? void 0 : zD.projectWorldPosToScreenPos) && void 0 !== wD ? wD : null, this.queued || this.MI || (this.queued = !0, queueMicrotask(this.run))
+       set name(pp) {
+         this._name = pp
```

#### 68. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16860-L16865` → after: `L560-L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L560-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L560-L561) · [Before (L16860-L16865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16860-L16865)

```diff
-       dispose() {
-         this.MI = !0;
-         for (const DD of this.moved.keys()) DD.style.transform = "";
-         this.moved.clear();
-         for (const DD of this.sideLabels.keys()) DD.style.transform = "";
-         this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.GJ)
+       get disabled() {
+         return this._disabled
```

#### 69. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16867-L16888` → after: `L563-L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L563-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L563-L564) · [Before (L16867-L16888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16867-L16888)

```diff
-       clear() {
-         for (const KD of this.moved.keys()) KD.isConnected || this.moved.delete(KD);
-         for (const KD of this.sideLabels.keys()) KD.isConnected || this.sideLabels.delete(KD);
-         if (0 === this.arrows.length) return;
-         const DD = performance.now(),
-           zD = DD - this.refreshedAt > 1e3;
-         zD && (this.refreshedAt = DD, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
-         const wD = this.trackerBox(),
-           pD = this.barsBox(),
-           sD = this.toastBox(zD);
-         (wD || pD || sD) && zD && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
-         for (let KD = 0; KD < this.arrows.length; KD++) {
-           const zD = this.arrows[KD];
-           this.labelOffsets.set(zD, this.runLabelAside(zD, DD));
-           const rD = (wD ? this.shiftLeftOf(zD, wD) : 0) || this.shiftOnScreen(zD),
-             LD = Math.min(pD ? this.liftAbove(zD, pD, rD) : 0, sD ? this.liftAbove(zD, sD, rD) : 0),
- ... (6 more removed lines; see GitHub link above)
+       set disabled(pp) {
+         this._disabled = pp
```

#### 70. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16890-L16907` → after: `L566-L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L566-L567) · [Before (L16890-L16907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16890-L16907)

```diff
-       trackerBox() {
-         var DD, zD;
-         const wD = null !== (DD = this.tracker) && void 0 !== DD && DD.isConnected ? this.tracker : null !== (zD = this.trackers[0]) && void 0 !== zD ? zD : null;
-         if (wD !== this.tracker && this.watch(wD), this.boxStale && wD) {
-           var pD, sD, KD;
-           this.boxStale = !1;
-           const DD = wD.closest(".NoRoom") ? null : wD.getBoundingClientRect(),
-             zD = DD && DD.width > 0 ? null === (pD = this.hud) || void 0 === pD ? void 0 : pD.getBoundingClientRect() : void 0,
-             rD = DD && zD ? Math.max(DD.top, zD.top) : null !== (sD = null === DD || void 0 === DD ? void 0 : DD.top) && void 0 !== sD ? sD : 0,
-             LD = DD && zD ? Math.min(DD.bottom, zD.bottom) : null !== (KD = null === DD || void 0 === DD ? void 0 : DD.bottom) && void 0 !== KD ? KD : 0;
-           this.box = DD && DD.width > 0 && LD > rD ? {
-             left: DD.left,
-             top: rD,
-             right: DD.right,
-             bottom: LD
-           } : null
- ... (2 more removed lines; see GitHub link above)
+       get passes() {
+         return this._passes
```

#### 71. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16909-L16921` → after: `L569-L570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L569-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L569-L570) · [Before (L16909-L16921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16909-L16921)

```diff
-       barsBox() {
-         if (this.barsStale) {
-           var DD;
-           this.barsStale = !1;
-           const zD = null === (DD = this.statBars[0]) || void 0 === DD ? void 0 : DD.getBoundingClientRect();
-           this.bars = zD && zD.width > 0 && zD.height > 0 ? {
-             left: zD.left,
-             top: zD.top,
-             right: zD.right,
-             bottom: zD.bottom
-           } : null
-         }
-         return this.bars
+       get passesDisabled() {
+         return this._passesDisabled
```

#### 72. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16923-L16936` → after: `L572-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L572-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L572-L573) · [Before (L16923-L16936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16923-L16936)

```diff
-       toastBox(DD) {
-         var zD;
-         const wD = null !== (zD = this.toasts[0]) && void 0 !== zD ? zD : null;
-         if (wD !== this.toastEl || DD && wD) {
-           this.toastEl = wD;
-           const DD = null === wD || void 0 === wD ? void 0 : wD.getBoundingClientRect();
-           this.toast = DD && DD.width > 0 && DD.height > 0 ? {
-             left: DD.left,
-             top: DD.top,
-             right: DD.right,
-             bottom: DD.bottom
-           } : null
-         }
-         return this.toast
+       getClassName() {
+         return "FrameGraphTask"
```

#### 73. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16938-L16948` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L575-L576) · [Before (L16938-L16948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16938-L16948)

```diff
-       liftAbove(DD, zD, wD) {
-         var pD;
-         const sD = this.anchorOf(DD);
-         if (!sD) return 0;
-         const KD = sD.x + wD + (null !== (pD = this.labelOffsets.get(DD)) && void 0 !== pD ? pD : 0),
-           {
-             halfWidth: rD,
-             labelled: LD
-           } = this.extentOf(DD),
-           cD = sD.y + this.em * (LD ? 6.2 : 3);
-         return cD < zD.top - 6 || KD + rD < zD.left - 6 || KD - rD > zD.right + 6 ? 0 : zD.top - 6 - cD
+       initAsync() {
+         return Promise.resolve()
```

#### 74. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16950-L16957` → after: `L578-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L578-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L578-L579) · [Before (L16950-L16957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16950-L16957)

```diff
-       watch(DD) {
-         var zD, wD;
-         this.tracker && this.sizes.unobserve(this.tracker), null === (zD = this.hud) || void 0 === zD || zD.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = DD, this.hud = null !== (wD = null === DD || void 0 === DD ? void 0 : DD.closest(". … [truncated]
-           passive: !0
-         }), this.hudStyle.observe(this.hud, {
-           attributes: !0,
-           attributeFilter: ["style", "class"]
-         }))
+       isReady() {
+         return !0
```

#### 75. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16959-L16969` → after: `L581-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L581-L582) · [Before (L16959-L16969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16959-L16969)

```diff
-       shiftLeftOf(DD, zD) {
-         var wD;
-         const pD = this.anchorOf(DD);
-         if (!pD) return 0;
-         const {
-           y: sD
-         } = pD, KD = pD.x + (null !== (wD = this.labelOffsets.get(DD)) && void 0 !== wD ? wD : 0), rD = this.em, {
-           halfWidth: LD,
-           labelled: cD
-         } = this.extentOf(DD), gD = sD - rD, RD = KD + LD;
-         return sD + rD * (cD ? 6.2 : 3) < zD.top || gD > zD.bottom || RD < zD.left - 6 || KD - LD > zD.right ? 0 : Math.max(zD.left - 6 - RD, 6 - (KD - LD))
+       dispose() {
+         this._reset(), this.onTexturesAllocatedObservable.clear(), this.onBeforeTaskExecute.clear(), this.onAfterTaskExecute.clear()
```

#### 76. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16971-L16978` → after: `L584-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L584-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L584-L585) · [Before (L16971-L16978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16971-L16978)

```diff
-       shiftOnScreen(DD) {
-         var zD;
-         const wD = this.anchorOf(DD);
-         if (!wD) return 0;
-         const {
-           halfWidth: pD
-         } = this.extentOf(DD), sD = wD.x + (null !== (zD = this.labelOffsets.get(DD)) && void 0 !== zD ? zD : 0), KD = sD + pD - (this.innerWidth - 6);
-         return KD > 0 ? -KD : Math.max(0, 6 - (sD - pD))
+       constructor(pp, ip) {
+         this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new ep.d, this.onBeforeTaskExecute = new ep.d, this.onAfterTaskExecute = new ep.d, this.name = pp, this._frameGraph = ip, this._reset()
```

#### 77. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16980-L16990` → after: `L587-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L587-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L587-L590) · [Before (L16980-L16990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16980-L16990)

```diff
-       runLabelAside(DD, zD) {
-         var wD;
-         let pD = null;
-         for (let rD = 0; rD < DD.children.length; rD++) DD.children[rD].classList.contains("DirectionArrowLabel") && (pD = DD.children[rD]);
-         if (!pD) return 0;
-         const sD = DD.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(DD) : null,
-           KD = (sD && this.api ? this.side.sideOf(this.api, {
-             x: sD.x / this.innerWidth * 100,
-             y: sD.y / this.innerHeight * 100
-           }, zD, this.project) : 0) * this.halfWidthOf(pD);
-         return KD !== (null !== (wD = this.sideLabels.get(pD)) && void 0 !== wD ? wD : 0) && (pD.style.transform = 0 === KD ? "" : `translateX(-50%) translateX(${KD}px)`, 0 === KD ? this.sideLabels.delete(pD) : this.sideLabels.set(pD, KD)), KD
+       _reset() {
+         for (const pp of this._passes) pp._dispose();
+         for (const pp of this._passesDisabled) pp._dispose();
+         this._passes.length = 0, this._passesDisabled.length = 0
```

#### 78. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16992-L16998` → after: `L592-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L592-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L592-L606) · [Before (L16992-L16998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16992-L16998)

```diff
-       extentOf(DD) {
-         let zD = this.em,
-           wD = !1;
-         for (let pD = 0; pD < DD.children.length; pD++) {
-           const sD = DD.children[pD],
-             KD = sD.classList.contains("DirectionArrowLabel");
-           wD ||= KD, (KD || sD.classList.contains("DirectionArrowDistance")) && (zD = Math.max(zD, this.halfWidthOf(sD)))
+       _addPass(pp, ip) {
+         ip ? this._passesDisabled.push(pp) : this._passes.push(pp)
+       }
+       _checkTask() {
+         let pp, ip = null,
+           cp = null;
+         for (const xp of this._passes) {
+           const Op = xp._isValid();
+           if (Op) throw new Error(`Pass "${xp.name}" is not valid. ${Op}`);
+           if (dp.IsRenderPass(xp)) {
+             const pp = Array.isArray(xp.renderTarget) ? xp.renderTarget : [xp.renderTarget];
+             ip = [];
+             for (const cp of pp) void 0 !== cp && ip.push(this._frameGraph.textureManager.getTextureFromHandle(cp));
+             cp = void 0 !== xp.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(xp.renderTargetDepth) : null
+           } else Hp.IsObjectListPass(xp) && (pp = xp.objectList)
```

#### 79. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L17000-L17002` → after: `L608-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L608-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L608-L640) · [Before (L17000-L17002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L17000-L17002)

```diff
-         return {
-           halfWidth: zD,
-           labelled: wD
+         let Op, op = null,
+           Ip = [],
+           Sp = null;
+         for (const xp of this._passesDisabled) {
+           const pp = xp._isValid();
+           if (pp) throw new Error(`Pass "${xp.name}" is not valid. ${pp}`);
+           if (dp.IsRenderPass(xp)) {
+             const pp = Array.isArray(xp.renderTarget) ? xp.renderTarget : [xp.renderTarget];
+             op = [];
+             for (const ip of pp) void 0 !== ip && op.push(this._frameGraph.textureManager.getTextureFromHandle(ip));
+             Ip = pp, Sp = void 0 !== xp.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(xp.renderTargetDepth) : null
+           } else Hp.IsObjectListPass(xp) && (Op = xp.objectList)
+         }
+         if (this._passesDisabled.length > 0) {
+           if (!this._checkSameRenderTarget(ip, op)) {
+             let pp = !0;
+ ... (17 more added lines; see GitHub link above)
```

#### 80. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L17005-L17010` → after: `L644-L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L644-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L644-L651) · [Before (L17005-L17010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L17005-L17010)

```diff
-       halfWidthOf(DD) {
-         let zD = this.halfWidths.get(DD);
-         return void 0 === zD && (zD = DD.offsetWidth / 2, this.halfWidths.set(DD, zD), this.sizes.observe(DD), this.labels.add(DD)), zD
-       }
-       forgetGoneLabels() {
-         for (const DD of this.labels) DD.isConnected || (this.sizes.unobserve(DD), this.halfWidths.delete(DD), this.labels.delete(DD))
+       _initializePasses() {
+         this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
+         try {
+           for (const pp of this._passes) pp._initialize();
+           for (const pp of this._passesDisabled) pp._initialize()
+         } finally {
+           this._frameGraph.engine._debugPopGroup?.()
+         }
```

#### 81. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L17012-L17025` → after: `L653-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L653-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L653-L658) · [Before (L17012-L17025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L17012-L17025)

```diff
-       anchorOf(DD) {
-         const zD = DD.style.translate,
-           wD = this.anchors.get(DD);
-         if (wD && wD.translate === zD && wD.innerWidth === this.innerWidth && wD.innerHeight === this.innerHeight) return wD;
-         const pD = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(zD);
-         if (!pD) return null;
-         const sD = {
-           translate: zD,
-           x: parseFloat(pD[1]) / 100 * this.innerWidth,
-           y: parseFloat(pD[2]) / 100 * this.innerHeight,
-           innerWidth: this.innerWidth,
-           innerHeight: this.innerHeight
-         };
-         return this.anchors.set(DD, sD), sD
+       _checkSameRenderTarget(pp, ip) {
+         if (null === pp || null === ip) return pp === ip;
+         if (pp.length !== ip.length) return !1;
+         for (let cp = 0; cp < pp.length; cp++)
+           if (pp[cp] !== ip[cp]) return !1;
+         return !0
```

#### 82. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L17028-L17040` → after: `L661-L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L661-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L661-L663) · [Before (L17028-L17040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L17028-L17040)

```diff
-     const wn = "Baf2ArrowText";
- 
-     function pn(DD, zD) {
-       const wD = DD.rows.find((DD => DD.current));
-       return dD(DD.tutorial) && null !== wD && void 0 !== wD && wD.item && vs(wD) && xD(wD.item).includes(zD) ? wD.item : null
-     }
-     const sn = new class {
-       constructor(DD) {
-         this.select = DD, this.picks = new Map
-       }
-       open(DD, zD, wD) {
-         const pD = pn(zD, DD);
-         null !== pD && this.HU(DD, pD, wD)
+     class kp extends jp {
+       get alphaMode() {
+         return this.postProcess.alphaMode
```

#### 83. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L17042-L17050` → after: `L665-L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L665-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L665-L666) · [Before (L17042-L17050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L17042-L17050)

```diff
-       follow(DD, zD) {
-         if (LD())
-           for (const [wD, {
-               item: pD,
-               had: sD
-             }] of this.picks) {
-             const KD = pn(DD, wD);
-             KD !== pD && (null !== KD && zD(pD) > sD ? this.HU(wD, KD, zD) : this.picks.delete(wD))
-           } else this.picks.clear()
+       set alphaMode(pp) {
+         this.postProcess.alphaMode = pp
```

#### 84. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L17052-L17067` → after: `L668-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L668-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L668-L669) · [Before (L17052-L17067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L17052-L17067)

```diff
-       clear() {
-         this.picks.clear()
-       }
-       HU(DD, zD, wD) {
-         this.picks.set(DD, {
-           item: zD,
-           had: wD(zD)
-         }), this.select(DD, zD)
-       }
-     }(Ns.s);
- 
-     function Kn(DD) {
-       return zD => {
-         let wD = 0;
-         for (const pD of DD.getInventoryItems())(null === pD || void 0 === pD ? void 0 : pD.name) === zD && (wD += null === pD.amount ? 1 : Math.max(pD.amount, 0));
-         return wD
+       get drawWrapper() {
+         return this._postProcessDrawWrapper
```

#### 85. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L17069-L17087` → after: `L671-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L671-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L671-L701) · [Before (L17069-L17087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L17069-L17087)

```diff
-     }
- 
-     function rn(DD, zD, wD, pD) {
-       DD.getClientOption(zD, "canCraft") && "inventory" !== Es.e.get("openInGameMenuName") && (sn.open(wD, pD.get(), Kn(DD)), Ws.l.KG("toggleMenu", `inventory|${wD}`))
-     }
-     let Ln = null,
-       cn = !1;
- 
-     function gn(DD) {
-       const zD = CK();
-       DD === Ln && zD === cn || (Ln = DD, cn = zD, (0, Ns.v)(function(DD, zD) {
-         const wD = new Map;
-         for (let pD = DD + 1; pD <= sD.length; pD++) {
-           const sD = tK(pD, DD, zD);
-           if (sD)
-             for (const zD of hD(pD).unlocks) wD.set(zD, {
- ... (3 more removed lines; see GitHub link above)
+       constructor(pp, ip, cp) {
+         super(pp, ip), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = cp, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture … [truncated]
+       }
+       isReady() {
+         return this.postProcess.isReady()
+       }
+       getClassName() {
+         return "FrameGraphPostProcessTask"
+       }
+       record() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           ip = arguments.length > 1 ? arguments[1] : void 0,
+           cp = arguments.length > 2 ? arguments[2] : void 0;
+         if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
+         const Op = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
+         if (Op && (Op.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, Op), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentText … [truncated]
+ ... (15 more added lines; see GitHub link above)
```

#### 86. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L17090-L17102` → after: `L704-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L704-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L704-L706) · [Before (L17090-L17102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L17090-L17102)

```diff
-       }(DD, zD)))
-     }
- 
-     function Rn() {
-       return DD = () => {
-         null !== Ln && gn(Ln)
-       }, (0, VK.i)(PK, DD);
-       var DD
-     }
- 
-     function An() {
-       return (0, Ns.x)(vK(Object.keys(CD), mK)), () => {
-         (0, Ns.x)([])
+       }
+       dispose() {
+         this.postProcess.dispose(), super.dispose()
```

#### 87. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L17105-L17123` → after: `L709-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L709-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L709-L711) · [Before (L17105-L17123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L17105-L17123)

```diff
- 
-     function Un(DD, zD, wD) {
-       var pD, sD;
-       const KD = DD.getTargetedBlock();
-       if (!KD || ! function(DD, zD, wD) {
-           if ("Chest" !== zD) return !1;
-           const pD = DD.split("|")[0];
-           if (!Rw(pD) || 0 === Sz[pD].outputSlots.length) return !1;
-           const sD = xG(DD);
-           return wD[0] === sD[0] && wD[1] === sD[1] && wD[2] === sD[2]
-         }(wD, null === (pD = DD.zwD(zD)) || void 0 === pD ? void 0 : pD.name, KD.normal)) return !1;
-       const [rD, LD, cD] = KD.sG, gD = DD.getBlockId(rD, LD, cD);
-       return 0 === gD || !0 === (null === (sD = bD.l[gD]) || void 0 === sD ? void 0 : sD.canBePlacedOver)
-     }
-     var fn = wD(36719);
-     const In = new Set(Gw.e);
- ... (3 more removed lines; see GitHub link above)
+     class mp extends kp {
+       constructor(pp, ip, cp) {
+         super(pp, ip, cp || new Dp(pp, ip.engine))
```

#### 88. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L17125-L17143` → after: `L713-L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L713-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L713-L721) · [Before (L17125-L17143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L17125-L17143)

```diff
-       onAltAction(DD, zD, wD) {
-         const pD = DD.getTargetedBlock();
-         if (!pD || function(DD) {
-             const zD = DD.split("|")[0];
-             return Rw(zD) || null !== Xp(zD) || VD(zD) || Gw.e.includes(zD)
-           }(wD) && !In.has(wD.split("|")[0])) return;
-         const sD = DD.zwD(zD);
-         if (!sD || !In.has(sD.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
-         const KD = sD.typeObj.id,
-           [rD, LD, cD] = pD.sG,
-           gD = DD.getBlockId(rD, LD, cD),
-           RD = bD.l[gD];
-         (0 === gD || null !== RD && void 0 !== RD && RD.Af || null !== RD && void 0 !== RD && RD.canBePlacedOver) && DD.isSolidToPlayerBlockId(KD) && DD.canModifyBlockAt(rD, LD, cD) && DD.OzD(rD, LD, cD, KD) && !DD.OzD(rD, LD, cD, KD, zD) && (this.lastAt = Date.now(), this.toasts … [truncated]
-           baf2ToastText: [(0, SD.Wd)({
-             translationKey: "buildAFactory2Game:beltStepBack"
-           }, SD.I.whiteUiText)],
- ... (3 more removed lines; see GitHub link above)
+       getClassName() {
+         return "FrameGraphFXAATask"
+       }
+       record() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           ip = arguments.length > 1 ? arguments[1] : void 0,
+           cp = arguments.length > 2 ? arguments[2] : void 0;
+         const Op = super.record(pp, ip, cp);
+         return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, Op
```

#### 89. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L17146-L17148` → after: `L724-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L724-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L724-L727) · [Before (L17146-L17148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L17146-L17148)

```diff
-     class Gn {
-       constructor(DD) {
-         this.show = DD, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
+     var Rp = cp(42094);
+     class qp extends kp {
+       constructor(pp, ip, cp) {
+         super(pp, ip, cp || new Rp.d(pp, ip.engine))
```

#### 90. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L17150-L17165` → after: `L729-L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L729-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L729-L730) · [Before (L17150-L17165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L17150-L17165)

```diff
-       onMining(DD, zD, wD) {
-         var pD;
-         if (!zD) return this.started = null, void this.gatedThisHold.clear();
-         if (!DD) return void(this.started = null);
-         const sD = `${DD.x},${DD.y},${DD.z},${DD.Qg}`;
-         if (sD === this.started) return;
-         this.started = sD;
-         const KD = Np(DD.y) ? Rh(DD.block, DD.Qg, DD.level) : null;
-         if (null === KD || this.gatedThisHold.has(sD)) return;
-         this.gatedThisHold.add(sD);
-         const rD = DD.block.split("|")[0];
-         wD - (null !== (pD = this.hintedAt.get(rD)) && void 0 !== pD ? pD : -1 / 0) < 5e3 || (this.hintedAt.set(rD, wD), this.show({
-           baf2ToastText: Ah(KD, DD.block),
-           baf2ToastMs: 2500,
-           baf2ToastStyle: "baf2ToastWarn"
-         }))
+       getClassName() {
+         return "FrameGraphPassTask"
```

#### 91. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L17168-L17186` → after: `L733-L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L733-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L733-L743) · [Before (L17168-L17186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L17168-L17186)

```diff
-     var hn = wD(35);
- 
-     function nn(DD, zD) {
-       const wD = [...DD.baf2CoreBankPaused];
-       for (const [sD] of DD.baf2CoreBanked) wD.push(sD);
-       for (const rD of sD) {
-         for (const {
-             item: DD
-           }
-           of rD.cost) wD.push(DD);
-         for (const DD of rD.newDeposits) wD.push(DD.block);
-         for (const DD of rD.unlocks) wD.push(DD, TD(DD));
-         rD.reward && wD.push(rD.reward);
-         for (const {
-             item: DD
-           }
- ... (3 more removed lines; see GitHub link above)
+     var Mp = cp(40296),
+       Cp = cp(40372),
+       Ep = cp(40334),
+       Xp = cp(40445),
+       lp = cp(37487);
+     class Qp {
+       getRenderCamera(pp) {
+         if (this._renderCamera) return this._renderCamera;
+         {
+           let ip;
+           return ip = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, pp && ip && ip.isRigCamera ? ip.rigParent : ip
```

#### 92. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L17189-L17191` → after: `L746-L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L746-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L746-L747) · [Before (L17189-L17191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L17189-L17191)

```diff
-       return {
-         message: DD,
-         itemNames: zD([...new Set(wD)])
+       setRenderCamera(pp) {
+         this._renderCamera = pp
```

#### 93. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L17193-L17328` → after: `L749-L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L749-L750) · [Before (L17193-L17328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L17193-L17328)

```diff
-     }
-     const Mn = "baf2MultiblockGuide";
-     const On = new Map;
-     const Jn = function(DD, zD, wD, sD) {
-       let {
-         localPlayerId: KD
-       } = sD;
-       const rD = new ML,
-         LD = new Lf,
-         gD = new Bf,
-         RD = new ff(gD),
-         AD = (DD, zD) => {
-           zD ? RD.observe(DD) : RD.unobserve(DD)
-         },
-         UD = new Uf,
-         fD = new Mf(AD),
- ... (120 more removed lines; see GitHub link above)
+       _getSharedGizmoLight() {
+         return this._sharedGizmoLight || (this._sharedGizmoLight = new Xp.b("shared gizmo light", new Yp.o(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = lp.d.Gray()), this._sharedGizmoLight
```

#### 94. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L17330-L17332` → after: `L752-L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L752-L753) · [Before (L17330-L17332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L17330-L17332)

```diff
- 
-       function Jz() {
-         (0, Os.g)(), Oz(null)
+       static get DefaultUtilityLayer() {
+         return null == Qp._DefaultUtilityLayer ? Qp._CreateDefaultUtilityLayerFromScene(Lp.e.LastCreatedScene) : Qp._DefaultUtilityLayer
```

#### 95. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L17334-L17393` → after: `L755-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L755-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L755-L787) · [Before (L17334-L17393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L17334-L17393)

```diff
-       let Ez = new Set,
-         Qz = !1;
-       const Xz = {
-         onCreate: DD => {
-           GD = DD, GD.setGroundArrowStyle({
-             width: .6,
-             alpha: .5,
-             endAtSolidFace: !0
-           });
-           for (const zD of Cz) {
-             const DD = Sz[zD].inputSlots ? iL(rD) : jL(zD, rD, TD, hD);
-             Mz.push((0, ns.d)(zD, DD))
-           }
-           Mz.push((0, Os.w)((0, pD.createElement)(pD.Fragment, null, (0, pD.createElement)(Ef, {
-             controller: fD
-           }), (0, pD.createElement)(BI, {
- ... (44 more removed lines; see GitHub link above)
+       static _CreateDefaultUtilityLayerFromScene(pp) {
+         return Qp._DefaultUtilityLayer = new Qp(pp), Qp._DefaultUtilityLayer.originalScene.Kl.addOnce((() => {
+           Qp._DefaultUtilityLayer = null
+         })), Qp._DefaultUtilityLayer
+       }
+       static get DefaultKeepDepthUtilityLayer() {
+         return null == Qp._DefaultKeepDepthUtilityLayer ? Qp._CreateDefaultKeepUtilityLayerFromScene(Lp.e.LastCreatedScene) : Qp._DefaultKeepDepthUtilityLayer
+       }
+       static _CreateDefaultKeepUtilityLayerFromScene(pp) {
+         return Qp._DefaultKeepDepthUtilityLayer = new Qp(pp), Qp._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, Qp._DefaultKeepDepthUtilityLayer.originalScene.Kl.addOnce((() => {
+           Qp._DefaultKeepDepthUtilityLayer = null
+         })), Qp._DefaultKeepDepthUtilityLayer
+       }
+       constructor(pp) {
+         let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
+           cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+ ... (17 more added lines; see GitHub link above)
```

#### 96. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L17395-L17404` → after: `L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L789) · [Before (L17395-L17404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L17395-L17404)

```diff
-             }),
-             onClose: () => {
-               Oz(null)
-             }
-           })), Mz.push((0, Ms.v)({
-             id: "baf2Quests",
-             labelKey: "buildAFactory2Game:questBookTitle",
-             icon: {
-               kind: "item",
-               name: "Book"
+               return Op
```

#### 97. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L17406-L17462` → after: `L791-L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L791-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L791-L794) · [Before (L17406-L17462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L17406-L17462)

```diff
-             className: "Baf2QuestsButton",
-             onClick: () => {
-               Oz({
-                 kind: "quests"
-               }), (0, Os.r)()
-             }
-           })), Mz.push(function(DD, zD) {
-             let wD = null,
-               pD = () => {};
-             const sD = zD => {
-               var sD;
-               let {
-                 tutorial: KD,
-                 tutorialKnown: rD
-               } = zD;
-               (null === (sD = wD) || void 0 === sD ? void 0 : sD.tutorial) === KD && wD.tutorialKnown === rD || (wD = {
- ... (41 more removed lines; see GitHub link above)
+             op = Op(this.utilityLayerScene);
+           if (!ip.ray && op && (ip.ray = op.ray), ip.originalPickingInfo?.aimTransform && op && (op.aimTransform = ip.originalPickingInfo.aimTransform, op.gripTransform = ip.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(ip), thi … [truncated]
+           if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) op && op.hit && (ip.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new Cp.i(ip.type, ip.event, op), ip.type), ip.skipOnPointerObservable = !0);
+           else {
```

#### 98. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L17464-L17505` → after: `L796-L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L796-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L796-L797) · [Before (L17464-L17505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L17464-L17505)

```diff
-               wD = Ws.l.subscribe(Zs, (DD => {
-                 sn.follow(DD, zD)
-               }));
-             return () => {
-               Ws.l.unsubscribe(wD), sn.clear()
-             }
-           }(GD)), Mz.push(function() {
-             const DD = document.documentElement,
-               zD = (0, mf.d)(".InvenBodyRight", [], (() => {
-                 const zD = document.querySelector(".InvenBodyRight");
-                 zD && DD.style.setProperty("--baf2-backpack-width", `${zD.offsetWidth}px`)
-               }));
-             return () => {
-               zD(), DD.style.removeProperty("--baf2-backpack-width")
-             }
-           }()), Mz.push(function() {
- ... (26 more removed lines; see GitHub link above)
+               Ip = ip.event;
+             cp && op && (0 === op.distance && cp.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(cp.pickedMesh) ? (this._notifyObservers(ip, cp, Ip), ip.skipOnPointerObservable = !0) : ip.type === Cp.d.POINTERDOWN ? (this._pointerCaptures[Ip.pointerI … [truncated]
```

#### 99. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L17507-L17752` → after: `L799-L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L799-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L799-L812) · [Before (L17507-L17752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L17507-L17752)

```diff
-           Qz || (Qz = !0, hD.send("baf2clientready"));
-           const rD = GD.getPositionView(KD);
-           fD.onAfterRender(zD, rD, UD), CD.onAfterRender(zD, rD, UD, ID), RD.run(UD), sz.onAfterRender(GD, rD), Kz.onAfterRender(GD, rD), xD.onAfterRender(GD, rD), WD.onAfterRender(GD, rD), ND.onAfterRender(GD, KD, rD), uD.onAfterRender(GD, KD, rD), FD.onAfterRender(GD, KD), YD.o … [truncated]
-           const cD = GD.getTargetedBlock();
-           pz.onAfterRender(GD, KD, null !== (wD = null === cD || void 0 === cD ? void 0 : cD.W8) && void 0 !== wD ? wD : 0, null !== (pD = null === cD || void 0 === cD ? void 0 : cD.position) && void 0 !== pD ? pD : null), Rz.onAfterRender(GD, zD), PD.onMining(function(DD, zD) {
-             var wD, pD;
-             const sD = DD.getMiningBlock();
-             if (!sD) return null;
-             const KD = (0, bD.h)(DD.getBlockId(sD[0], sD[1], sD[2])),
-               rD = null !== (wD = null === (pD = DD.zwD(zD)) || void 0 === pD ? void 0 : pD.name) && void 0 !== wD ? wD : null,
-               LD = DD.getItemStat(zD, KD.split("|")[0], "harvestLevel");
-             return {
-               block: KD,
-               x: sD[0],
-               y: sD[1],
-               z: sD[2],
- ... (230 more removed lines; see GitHub link above)
+         })), this._originalPointerObserver && pp.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, cp || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((pp => {
+           this.shouldRender && pp == this.getRenderCamera() && this.render()
+         }))), this._sceneDisposeObserver = this.originalScene.Kl.add((() => {
+           this.dispose()
+         })), this._updateCamera()
+       }
+       _notifyObservers(pp, ip, cp) {
+         pp.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new Cp.i(pp.type, pp.event, ip), pp.type), this._lastPointerEvents[cp.pointerId] = !0)
+       }
+       render() {
+         if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
+           const pp = this.utilityLayerScene.activeCamera.Gl(),
+             ip = this.utilityLayerScene.activeCamera;
+           ip._scene = this.utilityLayerScene, ip.leftCamera && (ip.leftCamera._scene = this.utilityLayerScene), ip.rightCamera && (ip.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), ip._scene = pp, ip.leftCamera && (ip.leftCamera._scene = pp), ip. … [truncated]
```

#### 100. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L17754-L17755` → after: `L814-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L814-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L814-L820) · [Before (L17754-L17755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L17754-L17755)

```diff
-       };
-       return Xz
+       }
+       dispose() {
+         this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.Kl.remove(this._sceneDisposeObserver), this._originalPointerObserver && t … [truncated]
+       }
+       _updateCamera() {
+         this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
+       }
```

#### 101. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L17757-L17782` → after: `L822-L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L822-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L822-L838) · [Before (L17757-L17782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L17757-L17782)

```diff
-   },
-   38493: (DD, zD, wD) => {
-     function pD(DD, zD, wD) {
-       const pD = new Set,
-         sD = new ResizeObserver(wD),
-         KD = () => {
-           const zD = new Set(document.querySelectorAll(DD));
-           let KD = !1;
-           for (const DD of pD) zD.has(DD) || (sD.unobserve(DD), pD.delete(DD), KD = !0);
-           for (const DD of zD) pD.has(DD) || (sD.observe(DD), rD.observe(DD, {
-             attributes: !0,
-             attributeFilter: ["class", "style"]
-           }), pD.add(DD));
-           KD && wD()
-         },
-         rD = new MutationObserver((zD => {
- ... (10 more removed lines; see GitHub link above)
+     Qp._DefaultUtilityLayer = null, Qp._DefaultKeepDepthUtilityLayer = null;
+     const Jp = {
+       FindMainCamera: function(pp) {
+         return pp.findMainCamera()
+       },
+       FindMainObjectRenderer: function(pp) {
+         return pp.findMainObjectRenderer()
+       },
+       CreateUtilityLayerRenderer: function(pp) {
+         let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         const cp = pp.pw,
+           Op = new Qp(cp, ip, !0);
+         Op.utilityLayerScene.activeCamera = cp.activeCamera;
+         let op = Jp.FindMainCamera(cp.frameGraph);
+         !op && cp.cameras.length > 0 && (op = cp.cameras[0]), op && (Op.setRenderCamera(op), Op.utilityLayerScene.activeCamera = op);
+         const Ip = cp.onAfterRenderObservable.add((() => {
+ ... (1 more added lines; see GitHub link above)
```

#### 102. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L17784-L17790` → after: `L840-L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L840-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L840-L842) · [Before (L17784-L17790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L17784-L17790)

```diff
-       rD.observe(document.body, {
-         childList: !0,
-         subtree: !0
-       });
-       for (const LD of zD) sD.observe(LD);
-       return window.addEventListener("resize", wD), KD(), wD(), () => {
-         sD.disconnect(), rD.disconnect(), window.removeEventListener("resize", wD)
+         return Op.utilityLayerScene.Kl.addOnce((() => {
+           cp.onAfterRenderObservable.remove(Ip)
+         })), Op
```

#### 103. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L17792-L17802` → after: `L844-L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L844-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L844-L845) · [Before (L17792-L17802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L17792-L17802)

```diff
-     }
-     wD.d(zD, {
-       d: () => pD
-     })
-   },
-   38470: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => rD,
-       d: () => KD
-     });
-     const pD = new WeakMap;
+     };
+     let Bp = null;
```

#### 104. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L17804-L17810` → after: `L847-L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L847-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L847-L911) · [Before (L17804-L17810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L17804-L17810)

```diff
-     function sD(DD) {
-       let zD = pD.get(DD);
-       return zD || (zD = {
-         hidden: DD.hidden,
-         x: NaN,
-         y: NaN
-       }, pD.set(DD, zD)), zD
+     function Np(pp, ip, cp, Op) {
+       let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
+         Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         Sp = arguments.length > 6 ? arguments[6] : void 0,
+         xp = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         Lp = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
+       const {
+         height: Yp,
+         width: Dp
+       } = np(pp, ip, cp);
+       if (!Yp || !Dp) return void Pp.e.Error("Invalid 'size' parameter !");
+       const Ap = ip.Gl();
+       let yp = Ap.activeCamera !== ip;
+       if (Ap.frameGraph) {
+         const pp = Jp.FindMainObjectRenderer(Ap.frameGraph);
+         pp && (yp = pp.camera !== ip)
+ ... (49 more added lines; see GitHub link above)
```

#### 105. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L17813-L17815` → after: `L914-L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L914-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L914-L1092) · [Before (L17813-L17815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L17813-L17815)

```diff
-     function KD(DD, zD) {
-       const wD = sD(DD);
-       wD.hidden !== zD && (wD.hidden = zD, DD.hidden = zD)
+     function bp(pp, ip, Ip, Sp) {
+       let xp = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
+         Lp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
+         Yp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         Dp = arguments.length > 7 ? arguments[7] : void 0,
+         Wp = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         vp = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
+         tp = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
+         Hp = arguments.length > 11 ? arguments[11] : void 0,
+         dp = arguments.length > 12 ? arguments[12] : void 0,
+         ep = arguments.length > 13 ? arguments[13] : void 0,
+         jp = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
+         kp = arguments.length > 15 ? arguments[15] : void 0;
+       const mp = ip.Gl();
+       if (mp.frameGraph) return void ap(mp.frameGraph, ip, Ip, xp, Lp, Yp, Dp, Hp, ep, !Sp).then((pp => {
+         Sp && Sp(pp)
+ ... (163 more added lines; see GitHub link above)
```

#### 106. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L17819-L17820` → after: `L1096-L1124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1096-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L1096-L1124) · [Before (L17819-L17820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L17819-L17820)

```diff
-       const pD = sD(DD);
-       pD.x === zD && pD.y === wD || (pD.x = zD, pD.y = wD, DD.style.translate = `${zD}vw ${wD}vh`)
+       let Op = 0,
+         op = 0,
+         Ip = 0,
+         Sp = 0;
+       if ("object" === typeof cp) {
+         const xp = cp.precision ? Math.abs(cp.precision) : 1;
+         cp.width && cp.height ? (Op = cp.height * xp, op = cp.width * xp) : cp.width && !cp.height ? (op = cp.width * xp, Op = Math.round(op / pp.getAspectRatio(ip))) : cp.height && !cp.width ? (Op = cp.height * xp, op = Math.round(Op * pp.getAspectRatio(ip))) : (op = Math.round( … [truncated]
+       } else isNaN(cp) || (Op = cp, op = cp, Ip = cp, Sp = cp);
+       return op && (op = Math.floor(op)), Op && (Op = Math.floor(Op)), Ip && (Ip = Math.floor(Ip)), Sp && (Sp = Math.floor(Sp)), {
+         height: 0 | Op,
+         width: 0 | op,
+         finalWidth: 0 | Ip,
+         finalHeight: 0 | Sp
+       }
+     }
+     const Fp = {
+ ... (13 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/244.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/244.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38)

#### 1. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4-L163` → after: `L4-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/244.js#L4-L72) · [Before (L4-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/244.js#L4-L163)

```diff
-   41008: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => rD,
-       h: () => RD,
-       l: () => gD
-     });
-     var pD, sD = wD(37125),
-       KD = wD(37079);
-     ! function(DD) {
-       DD[DD.CW = 0] = "CW", DD[DD.CCW = 1] = "CCW"
-     }(pD || (pD = {}));
-     class rD {
-       static Interpolate(DD, zD, wD, pD, sD) {
-         if (0 === DD) return 0;
-         const KD = 1 - 3 * pD + 3 * zD,
-           rD = 3 * pD - 6 * zD,
- ... (144 more removed lines; see GitHub link above)
+   37985: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => op
+     });
+     var Op = cp(37989);
+     class op {
+       static GetPlanes(pp) {
+         const ip = [];
+         for (let cp = 0; cp < 6; cp++) ip.push(new Op.e(0, 0, 0, 0));
+         return op.GetPlanesToRef(pp, ip), ip
+       }
+       static GetNearPlaneToRef(pp, ip) {
+         const cp = pp.m;
+         ip.normal.x = cp[3] + cp[2], ip.normal.y = cp[7] + cp[6], ip.normal.z = cp[11] + cp[10], ip.d = cp[15] + cp[14], ip.normalize()
+       }
+       static GetFarPlaneToRef(pp, ip) {
+ ... (53 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L165-L300` → after: `L74-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L74-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/244.js#L74-L138) · [Before (L165-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/244.js#L165-L300)

```diff
-         for (let wD = DD - 1, pD = 0; pD < DD; wD = pD++) zD += this._points[wD].x * this._points[pD].y - this._points[pD].x * this._points[wD].y;
-         return .5 * zD
-       }
-       getPoints() {
-         return this._points
-       }
-       getPointAtLengthPosition(DD) {
-         if (DD < 0 || DD > 1) return KD.r.Zero();
-         const zD = DD * this.length();
-         let wD = 0;
-         for (let pD = 0; pD < this._points.length; pD++) {
-           const DD = (pD + 1) % this._points.length,
-             sD = this._points[pD],
-             rD = this._points[DD].subtract(sD),
-             LD = rD.length() + wD;
-           if (zD >= wD && zD <= LD) {
- ... (120 more removed lines; see GitHub link above)
+         return 0 !== pp && (ip = 1 / pp), this.normal.x *= ip, this.normal.y *= ip, this.normal.z *= ip, this.d *= ip, this
+       }
+       transform(pp) {
+         const ip = op._TmpMatrix;
+         pp.invertToRef(ip);
+         const cp = ip.m,
+           Op = this.normal.x,
+           Ip = this.normal.y,
+           Sp = this.normal.z,
+           xp = this.d,
+           Lp = Op * cp[0] + Ip * cp[1] + Sp * cp[2] + xp * cp[3],
+           Yp = Op * cp[4] + Ip * cp[5] + Sp * cp[6] + xp * cp[7],
+           Dp = Op * cp[8] + Ip * cp[9] + Sp * cp[10] + xp * cp[11],
+           Ap = Op * cp[12] + Ip * cp[13] + Sp * cp[14] + xp * cp[15];
+         return new op(Lp, Yp, Dp, Ap)
+       }
+ ... (49 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L333` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/244.js#L171) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/244.js#L333)

```diff
-             pD.d.Warn(cD.message)
+             Op.e.Warn(Lp.message)
```

#### 4. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L339-L341` → after: `L177-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L177-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/244.js#L177-L190) · [Before (L339-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/244.js#L339-L341)

```diff
-   38662: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => pD
+   38124: (pp, ip, cp) => {
+     function Op() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (pp => {
+         const ip = 16 * Math.random() | 0;
+         return ("x" === pp ? ip : 3 & ip | 8).toString(16)
+       }))
+     }
+     cp.d(ip, {
+       e: () => Op
+     })
+   },
+   38905: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Op
```

#### 5. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L362` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/244.js#L211) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/244.js#L362)

```diff
-         const zD = DD => DD < 10 ? "0" + DD : "" + DD,
+         const ip = pp => pp < 10 ? "0" + pp : "" + pp,
```

#### 6. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L377` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/244.js#L226) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/244.js#L377)

```diff
-         const cD = `<div style='color:${rD.color}'>${KD}</div><br>`;
+         const Lp = `<div style='color:${Sp.color}'>${Ip}</div><br>`;
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/245.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/245.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc)

#### 1. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/245.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/245.js#L2)

```diff
- export const ids = [245];
+ export const ids = [244, 245];
```

#### 2. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/245.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/245.js#L4)

```diff
-   41087: (DD, zD, wD) => {
+   61380: (pp, ip, cp) => {
```

#### 3. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L6-L78` → after: `L6-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L6-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/245.js#L6-L181) · [Before (L6-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/245.js#L6-L78)

```diff
-       openCharacterPreview: () => uD
-     });
-     var pD = wD(38082),
-       sD = wD(2769),
-       KD = wD(605),
-       rD = wD(37164),
-       LD = wD(2204),
-       cD = wD(37151),
-       gD = wD(39744),
-       RD = wD(40015),
-       AD = wD(41006),
-       UD = wD(37070),
-       fD = wD(40183),
-       ID = wD(37267),
-       BD = wD(40192),
-       GD = wD(41049),
- ... (57 more removed lines; see GitHub link above)
+       RegisterShaderMaterial: () => Op.e,
+       ShaderMaterial: () => Op.q,
+       ShaderMaterialCreateFromSnippetAsync: () => Op.f,
+       ShaderMaterialParse: () => Op.p,
+       ShaderMaterialParseFromFileAsync: () => Op.j,
+       ShaderMaterialParseFromSnippetAsync: () => Op.m
+     });
+     var Op = cp(40647);
+     (0, Op.e)()
+   },
+   37985: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => op
+     });
+     var Op = cp(37989);
+     class op {
+ ... (160 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L80-L334` → after: `L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/245.js#L183) · [Before (L80-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/245.js#L80-L334)

```diff
-             throw delete this.modelCache[pD], console.error(`Failed to load preview attachment ${pD}:`, sD), sD
-           }
-         })()), this.modelCache[pD]
-       }
-       async update(DD, zD) {
-         var wD;
-         const {
-           thinInstMgr: pD,
-           Vl: sD
-         } = this;
-         this.cosmeticNames[DD] = zD;
-         const KD = this.attachmentsByType[DD];
-         if (KD)
-           for (const {
-               mesh: LD,
-               destNode: cD,
- ... (239 more removed lines; see GitHub link above)
+             Op.e.Warn(Lp.message)
```

#### 5. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L337-L377` → after: `L186-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L186-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/245.js#L186-L253) · [Before (L337-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/245.js#L337-L377)

```diff
-       };
-     (0, rD.o)(UD)
-   },
-   38667: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => RD,
-       f: () => AD
-     });
-     var pD = wD(37181),
-       sD = wD(37435),
-       KD = wD(37186),
-       rD = wD(37201);
-     const LD = "bloxdTextLodBias",
-       cD = [{
-         name: LD,
-         type: "float"
- ... (25 more removed lines; see GitHub link above)
+       }
+     }
+   },
+   38124: (pp, ip, cp) => {
+     function Op() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (pp => {
+         const ip = 16 * Math.random() | 0;
+         return ("x" === pp ? ip : 3 & ip | 8).toString(16)
+       }))
+     }
+     cp.d(ip, {
+       e: () => Op
+     })
+   },
+   38905: (pp, ip, cp) => {
+     cp.d(ip, {
+ ... (52 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L379-L891` → after: `L255-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L255-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/245.js#L255-L269) · [Before (L379-L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/245.js#L379-L891)

```diff
-         }
-       };
-     (0, rD.o)(AD)
-   },
-   41038: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       CapeMaterialPlugin: () => OD,
-       HueTintMaterialPlugin: () => JD,
-       LifeformMaterialPlugin: () => ED,
-       OverlayMaterialPlugin: () => QD
-     });
-     var pD = wD(41042),
-       sD = wD(37984);
-     class KD extends((0, pD.h)(sD.e)) {}(0, pD.j)(sD.e, KD);
-     var rD = wD(37178);
-     class LD extends((0, pD.h)(rD.f)) {}(0, pD.j)(rD.f, LD);
- ... (497 more removed lines; see GitHub link above)
+       }
+     }
+     Op.NoneLogLevel = 0, Op.MessageLogLevel = 1, Op.WarningLogLevel = 2, Op.ErrorLogLevel = 4, Op.AllLogLevel = 7, Op.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Op._LogCache = "", Op._LogLimitOutputs = {}, Op._Levels =  … [truncated]
+       color: "white",
+       logFunc: console.log,
+       name: "Log"
+     }, {
+       color: "orange",
+       logFunc: console.warn,
+       name: "Warn"
+     }, {}, {
+       color: "red",
+       logFunc: console.error,
+       name: "Error"
+     }], Op.errorsCount = 0, Op.Log = Op._LogEnabled.bind(Op, Op.MessageLogLevel), Op.Warn = Op._LogEnabled.bind(Op, Op.WarningLogLevel), Op.Error = Op._LogEnabled.bind(Op, Op.ErrorLogLevel)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/246.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/246.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835)

#### 1. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L4-L8` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/246.js#L4-L7) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/246.js#L4-L8)

```diff
-   40998: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       openMobLineupPreview: () => yD,
-       openMobPreview: () => ZD,
-       openPetPreview: () => kD
+   38033: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Ap,
+       f: () => Sp
```

#### 2. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L10-L37` → after: `L9-L3406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L9-L3406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/246.js#L9-L3406) · [Before (L10-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/246.js#L10-L37)

```diff
-     var pD = wD(39744),
-       sD = wD(40015),
-       KD = wD(41006),
-       rD = wD(37267),
-       LD = wD(37070),
-       cD = wD(40183),
-       gD = wD(41027),
-       RD = wD(38448),
-       AD = wD(37169),
-       UD = wD(37151),
-       fD = wD(37061),
-       ID = wD(38353),
-       BD = wD(38344),
-       GD = wD(38082),
-       hD = wD(38123),
-       nD = wD(38101),
- ... (12 more removed lines; see GitHub link above)
+     var Op = cp(9359),
+       op = cp(9338),
+       Ip = cp(337);
+     const Sp = {
+       "Maple Door": {
+         positions: [{
+           block: "Maple Door",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Maple Door Top",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
+ ... (3382 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L39-L56` → after: `L3408-L3566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R3408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L3408-L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/246.js#L3408-L3566) · [Before (L39-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/246.js#L39-L56)

```diff
-     function bD() {
-       if (null !== CD) return CD;
-       const DD = document.createElement("canvas");
-       DD.classList.add("MobPreviewCanvas");
-       const zD = new pD.b(DD, !0, {
-         preserveDrawingBuffer: !0
-       });
-       zD.OpD = (0, OD.e)().wB.engine.OpD;
-       const wD = new sD.b(zD);
-       wD.clearColor = new rD.e(0, 0, 0, 0), wD.ambientColor = new rD.Color3(1, 1, 1);
-       const gD = new KD.c("WG", Math.PI / 2, Math.PI / 2, ED, LD.WI.Zero(), wD),
-         RD = new cD.e("light", new LD.WI(-.1, 1, -.3), wD);
-       return RD.diffuse = new rD.Color3(1, 1, 1), RD.specular = new rD.Color3(1, 1, 1), RD.groundColor = new rD.Color3(.5, .5, .5), CD = {
-         engine: zD,
-         oB: wD,
-         canvas: DD,
- ... (2 more removed lines; see GitHub link above)
+     function xp(pp) {
+       return {
+         [`${pp} Banner`]: {
+           positions: [{
+             block: `${pp} Banner`,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_${pp} Banner Flag|meta|rot1|bot`,
+             x: 0,
+             y: 1,
+             z: 0
+           }]
+         },
+         [`${pp} Banner|meta|rot2|bot`]: {
+ ... (143 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L60-L62` → after: `L3570-L3664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R3570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L3570-L3664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/246.js#L3570-L3664) · [Before (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/246.js#L60-L62)

```diff
-       return xD[DD] ??= (0, GD.D)(DD, bD().oB, !0).catch((zD => {
-         throw delete xD[DD], zD
-       })), xD[DD]
+       const ip = (0, Ip.Ob)(pp);
+       return {
+         [ip]: {
+           positions: [{
+             block: ip,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_${ip} Top Left`,
+             x: 0,
+             y: 1,
+             z: 0
+           }, {
+             block: `_${ip} Top Right`,
+             x: -1,
+ ... (79 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L66-L69` → after: `L3668-L3743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R3668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L3668-L3743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/246.js#L3668-L3743) · [Before (L66-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/246.js#L66-L69)

```diff
-       let zD = TD.get(DD);
-       return zD || (zD = MD.u[DD].loadModel(bD().oB, !1).then((DD => (DD.nC(!1), DD)), (zD => {
-         throw TD.delete(DD), zD
-       })), TD.set(DD, zD)), zD
+       const ip = `_${pp} Back`,
+         cp = `_${pp} Dish`;
+       return {
+         [pp]: {
+           positions: [{
+             block: pp,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: ip,
+             x: 0,
+             y: 0,
+             z: -1
+           }, {
+             block: cp,
+ ... (60 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L73-L121` → after: `L3747-L3766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R3747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L3747-L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/246.js#L3747-L3766) · [Before (L73-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/246.js#L73-L121)

```diff
-       var zD, wD, pD;
-       let {
-         mobType: sD,
-         variation: KD,
-         animation: rD
-       } = DD, cD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, ED = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const VD = null !== (zD = null === cD || void 0 === cD ? void 0 : cD.size) && void 0 !== zD ? zD : 1,
-         PD = null !== (wD = null === cD || void 0 === cD ? void 0 : cD.cosmetics) && void 0 !== wD ? wD : [],
-         CD = null !== (pD = null === cD || void 0 === cD ? void 0 : cD.lE) && void 0 !== pD ? pD : null;
-       let xD = !1,
-         TD = null,
-         SD = null;
-       const {
-         engine: iD,
-         oB: lD
-       } = bD(), WD = lD.onBeforeRenderObservable.add((() => {
- ... (33 more removed lines; see GitHub link above)
+       const ip = `Small ${pp} Pod`;
+       return {
+         [ip]: {
+           positions: [{
+             block: ip,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_Small ${pp} Pod Mid`,
+             x: 0,
+             y: 1,
+             z: 0
+           }, {
+             block: `_Small ${pp} Pod Top`,
+             x: 0,
+ ... (4 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L124-L130` → after: `L3769-L3772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R3769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L3769-L3772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/246.js#L3769-L3772) · [Before (L124-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/246.js#L124-L130)

```diff
- 
-     function iD(DD, zD) {
-       return SD({
-         mobType: "NPC",
-         variation: null,
-         animation: DD.animation
-       }, DD, zD)
+     for (const Pp in Sp) {
+       for (const pp of Sp[Pp].positions)
+         if (pp.id = op.e[pp.block].id, Pp === pp.block && (0 !== pp.x || 0 !== pp.y || 0 !== pp.z)) throw new Error(`Multiblock "${Pp}" has main block "${pp.block}" at non-origin position (${pp.x}, ${pp.y}, ${pp.z}) - if you need to do something like this, you'll need to rethink  … [truncated]
+       Sp[op.e[Pp].id] = Sp[Pp]
```

#### 8. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L132-L147` → after: `L3774-L3782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R3774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L3774-L3782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/246.js#L3774-L3782) · [Before (L132-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/246.js#L132-L147)

```diff
- 
-     function lD(DD) {
-       let {
-         mobType: zD,
-         variation: wD,
-         metaInfo: pD,
-         tamed: sD
-       } = DD, KD = !1, rD = null, LD = 0;
-       const cD = (0, OD.e)(),
-         gD = cD.wB.Ql,
-         RD = DD => {
-           LD += PD * (DD / 1e3) % (2 * Math.PI), gD.setRotationEulerY(rD, LD)
-         };
-       return jD(zD).then((DD => {
-         if (KD) return;
-         rD = (0, GD.o)(zD, VD, !0, !0), gD.setPosition(rD, 0, -VD, 0), DD.meshApi.updateVariation(rD, zD, wD);
+     const Ap = {};
+     for (const Pp in Sp)
+       for (const {
+           block: pp,
+           x: ip,
+           y: cp,
+           z: Op
+         }
+         of Sp[Pp].positions) {
```

#### 9. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L149-L152` → after: `L3784-L3787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R3784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L3784-L3787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/246.js#L3784-L3787) · [Before (L149-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/246.js#L149-L152)

```diff
-           wool: "Sheared" !== pD,
-           saddle: "Saddled" === pD,
-           antlers: "Antlers" === pD,
-           collar: sD
+           mainMultiblock: Pp,
+           compX: ip,
+           compY: cp,
+           compZ: Op
```

#### 10. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L154-L187` → after: `L3789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R3789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/246.js#L3789) · [Before (L154-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/246.js#L154-L187)

```diff
-         for (const [zD, wD] of Object.entries(LD)) gD.hasGroup(rD, zD) && DD.meshApi.setMeshGroupVisibility(rD, zD, wD);
-         gD.set(rD, "aOpacity", 1), cD.on("renderTickBegin", RD)
-       })).catch((DD => {
-         console.error(`Pet preview: could not load ${zD}`, DD)
-       })), () => {
-         KD = !0, cD.off("renderTickBegin", RD), null !== rD && gD.delete(rD)
-       }
-     }
-     class WD {
-       constructor(DD, zD) {
-         this.place = zD, this.remove = null;
-         const {
-           engine: wD,
-           oB: pD,
-           canvas: sD
-         } = bD();
- ... (18 more removed lines; see GitHub link above)
+         Ap[pp] = Ip, Ap[op.e[pp].id] = Ip
```

#### 11. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L192-L195` → after: `L3814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R3814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L3814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/246.js#L3814) · [Before (L192-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/246.js#L192-L195)

```diff
-         this.preview = void 0, this.view = {
-           figures: [],
-           shown: []
-         }, this.aspect = 1, this.placed = [], this.preview = new WD(DD, (() => () => {}))
+         this.model = pp, this.reshapeOffsets = [...Sp, [0, -1, 0]]
```

#### 12. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L197-L198` → after: `L3816-L3818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R3816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L3816-L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/246.js#L3816-L3818) · [Before (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/246.js#L197-L198)

```diff
-       show(DD) {
-         DD.figures !== this.view.figures && this.preload(DD.figures), this.view = DD, this.place()
+       handles(pp) {
+         const ip = Op.e[pp];
+         return (null === ip || void 0 === ip ? void 0 : ip.model) === this.model && void 0 !== ip.attachedTop
```

#### 13. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L200-L201` → after: `L3820-L3821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R3820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L3820-L3821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/246.js#L3820-L3821) · [Before (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/246.js#L200-L201)

```diff
-       resize(DD, zD) {
-         this.preview.resize(DD, zD), this.aspect = DD / zD, this.place()
+       affects(pp) {
+         return this.handles(pp) || xp(pp) || (0, Ip.F)(Op.e[pp])
```

#### 14. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L203-L233` → after: `L3823-L3835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R3823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L3823-L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/246.js#L3823-L3835) · [Before (L203-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/246.js#L203-L233)

```diff
-       close() {
-         this.preview.close();
-         for (const DD of this.placed) null === DD || void 0 === DD || DD.remove();
-         this.placed = []
-       }
-       preload(DD) {
-         const zD = () => {};
-         jD("NPC").catch(zD);
-         for (const {
-             lE: wD
-           }
-           of DD) null !== wD && dD(wD).catch(zD)
-       }
-       place() {
-         const {
-           figures: DD,
- ... (15 more removed lines; see GitHub link above)
+       shape(pp, ip, cp, Sp, Lp) {
+         let Yp = this.handles(pp(ip, cp + 1, Sp)) ? op.h : 0;
+         return op.s.forEach(((Lp, Dp) => {
+           let {
+             dx: Ap,
+             dz: Pp
+           } = Lp;
+           const Wp = pp(ip + Ap, cp, Sp + Pp);
+           (this.handles(Wp) || xp(Wp) || function(pp, ip) {
+             const cp = Op.e[pp];
+             return (0, Ip.F)(cp) && (0, Ip.x)(cp.meta.rot) === (0 !== op.s[ip].dx)
+           }(Wp, Dp)) && (Yp |= 1 << Dp)
+         })), (0, Op.f)((0, op.j)(Op.e[Lp].meta.rootName, Yp))
```

#### 15. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L236-L238` → after: `L3838-L3868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R3838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L3838-L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/246.js#L3838-L3868) · [Before (L236-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/246.js#L236-L238)

```diff
- 
-     function ZD(DD) {
-       return new WD(DD, SD)
+   },
+   38218: (pp, ip, cp) => {
+     function Op(pp, ip) {
+       var cp;
+       ip || (ip = {});
+       const Op = null !== (cp = ip.customAttributes) && void 0 !== cp ? cp : {};
+       var op, Ip, Sp;
+       "Gun" === (null === pp || void 0 === pp ? void 0 : pp.type) && (Op.shotsLeft = null !== (op = null !== (Ip = Op.shotsLeft) && void 0 !== Ip ? Ip : null === (Sp = Op.gunStats) || void 0 === Sp ? void 0 : Sp.clipSize) && void 0 !== op ? op : pp.clipSize);
+       if (Op.enchantmentTier && (Op.enchantmentTier = Op.enchantmentTier.toString()), Op.enchantments)
+         for (const Ap in Op.enchantments) {
+           const pp = Op.enchantments[Ap];
+           if ("number" !== typeof pp) {
+             const ip = parseInt(pp);
+             isNaN(ip) || ip < 0 ? Op.enchantments[Ap] = void 0 : Op.enchantments[Ap] = ip > 1e9 ? 1e9 : ip
+           }
+         }
+ ... (15 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L242` → after: `L3889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R3889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L3889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/246.js#L3889) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/246.js#L242)

```diff
-       return new ND(DD)
+       return Sp <= pp && pp <= xp
```

#### 17. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L246` → after: `L3898-L3899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R3898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L3898-L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/246.js#L3898-L3899) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/246.js#L246)

```diff
-       return new WD(DD, lD)
+       var ip, cp;
+       return "string" === typeof(null === pp || void 0 === pp || null === (ip = pp.persisted) || void 0 === ip || null === (cp = ip.shared) || void 0 === cp ? void 0 : cp.text)
```

#### 18. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L260-L270` → after: `L3903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R3903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/246.js#L3903) · [Before (L260-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/246.js#L260-L270)

```diff
-       return `\n\t\t\t\t${(0,LD.C)(DD,"mat2","rotate",[{name:"ang",type:"float"}],`\
-       n\ t\ t\ t\ t\ t$ {
-         (0, LD.E)(DD, "float", "s", "sin(ang)")
-       }\
-       n\ t\ t\ t\ t\ t$ {
-         (0, LD.E)(DD, "float", "c", "cos(ang)")
-       }\
-       n\ t\ t\ t\ t\ treturn $ {
-         (0, LD.q)(DD, "mat2", "c", "s", "-s", "c")
-       };\
-       n\ t\ t\ t\ t`)}\n\t\t\t`
+       return wp(pp) && "" !== pp.persisted.shared.text.trim()
```

#### 19. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L274-L277` → after: `L3907-L3909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R3907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L3907-L3909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/246.js#L3907-L3909) · [Before (L274-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/246.js#L274-L277)

```diff
-       let wD = (0, LD.Fb)(DD, "skele" + (zD - 1));
-       for (let sD = zD - 2; sD >= 0; sD--) wD = (0, LD.ub)(DD, `boneIdx == ${sD}`, (0, LD.Fb)(DD, `skele${sD}`), wD);
-       const pD = "bone.yz + rotate(bone.x) * pivot - pivot";
-       return `\n\t\t\t\t${(0,LD.E)(DD,"int","boneIdx",(0,LD.Ab)(DD,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,LD.E)(DD,"vec3","bone",wD)}\n\t\t\t\t${(0,LD.E)(DD,"vec2","pivot",(0,LD.q)(DD,"vec2","0.0",`${(0,LD.Nb)(DD,"position")}.z`))}\n\t\t\t\t${(0,LD._)(DD)?`positi … [truncated]
+       let [cp, , Op] = ip;
+       const [Ip, , Sp] = op.x[pp][Wp];
+       return cp * Ip + Op * Sp
```

#### 20. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L280-L281` → after: `L3912-L3913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R3912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L3912-L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/246.js#L3912-L3913) · [Before (L280-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/246.js#L280-L281)

```diff
-     function RD(DD) {
-       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,LD.q)(DD,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
+     function Hp(pp, ip, cp) {
+       return cp[1] - ip[1] || tp(pp, ip) - tp(pp, cp)
```

#### 21. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L429-L434` → after: `L3916-L3921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R3916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L3916-L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/246.js#L3916-L3921) · [Before (L429-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/246.js#L429-L434)

```diff
-     function hD(DD, zD) {
-       return Object.assign((function(DD, wD, pD, sD) {
-         return zD(this.featureState, DD, wD, pD, sD)
-       }), {
-         LI: DD
-       })
+     function dp(pp, ip, cp, Ip, xp) {
+       var Lp;
+       let Dp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : pp(ip[0], ip[1], ip[2]);
+       if (!(Yp[Dp - Sp] & 1 << cp)) return null;
+       const [Ap, Pp, Wp] = op.x[xp][cp], yp = [ip[0] + Ap, ip[1] + Pp, ip[2] + Wp], Up = pp(yp[0], yp[1], yp[2]), wp = null === (Lp = Op.e[Up]) || void 0 === Lp ? void 0 : Lp.meta;
+       return (null === wp || void 0 === wp ? void 0 : wp.rootId) === Ip && wp.rot === xp && Yp[Up - Sp] & 1 << (1 ^ cp) ? yp : null
```

#### 22. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L437-L461` → after: `L3924-L3936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R3924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L3924-L3936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/246.js#L3924-L3936) · [Before (L437-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/246.js#L437-L461)

```diff
-     function nD(DD) {
-       const zD = class extends fD.e {
-           constructor(zD, wD) {
-             const pD = (0, BD.db)(zD),
-               sD = pD && (0, BD.y)(pD, DD.name);
-             for (var KD = arguments.length, rD = new Array(KD > 2 ? KD - 2 : 0), LD = 2; LD < KD; LD++) rD[LD - 2] = arguments[LD];
-             super(zD, DD.name, DD.priority, sD ? sD.defines : DD.defines(...rD), !1), this.featureState = void 0, this.featureState = wD, this._pluginManager._addPlugin(this), this._enable(!0), (0, BD.B)(this._material, DD, this.featureState, this._pluginDefineNames)
-           }
-           getClassName() {
-             return DD.className
-           }
-           isCompatible(DD) {
-             return DD === GD.c.GLSL || DD === GD.c.WGSL
-           }
-         },
-         wD = (0, ID.j)(DD);
- ... (9 more removed lines; see GitHub link above)
+     function ep(pp, ip, cp, Ip) {
+       const Sp = pp(ip, cp, Ip);
+       if (!Lp(Sp)) return null;
+       const {
+         rootId: xp,
+         rot: Yp
+       } = Op.e[Sp].meta, Ap = (ip, cp) => {
+         let Op = ip,
+           op = 1;
+         for (let Ip = dp(pp, Op, cp, xp, Yp); Ip && op < Dp; Ip = dp(pp, Op, cp, xp, Yp)) Op = Ip, op++;
+         return {
+           end: Op,
+           cells: op
```

#### 23. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L471-L508` → after: `L3952-L3956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R3952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L3952-L3956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/246.js#L3952-L3956) · [Before (L471-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/246.js#L471-L508)

```diff
-     function QD(DD, zD, wD) {
-       let pD = ED.get(wD);
-       pD || (pD = new Map, ED.set(wD, pD));
-       const {
-         url: sD
-       } = DD;
-       let KD = pD.get(sD);
-       return KD || (KD = async function(DD, zD, wD) {
-         var pD;
-         const {
-           width: sD,
-           height: KD
-         } = DD.getSize(), LD = Math.round(KD / sD), cD = DD.getInternalTexture(), gD = zD && zD.byteLength === sD * sD * LD * 4 ? zD : null !== (pD = XD.get(cD)) && void 0 !== pD ? pD : DD._readPixelsSync(), RD = new JD.b(gD, sD, sD, LD, OD.b.TEXTUREFORMAT_RGBA, wD, !0, !1, rD.b. … [truncated]
-         XD.has(cD) || (! function(DD, zD) {
-           const wD = zD.createRawTexture(new Uint8Array(4), 1, 1, OD.b.TEXTUREFORMAT_RGBA, !1, !1, rD.b.NEAREST_SAMPLINGMODE);
-           DD._hardwareTexture.release(), zD.unbindAllTextures(), wD._swapAndDie(DD, !1)
- ... (22 more removed lines; see GitHub link above)
+     function jp(pp, ip) {
+       for (const cp of function(pp) {
+           let {
+             anchor: ip,
+             rot: cp,
```

#### 24. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L511-L562` → after: `L3959-L3966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R3959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L3959-L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/246.js#L3959-L3966) · [Before (L511-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/246.js#L511-L562)

```diff
-           } = DD.getSize(),
-           LD = sD.useWebGL2 ? await QD(DD, null !== (wD = null === (pD = sD.sources.pixels) || void 0 === pD ? void 0 : pD[zD]) && void 0 !== wD ? wD : null, this._material.Ul()) : null;
-         (0, VD.b)(this._material, sD, zD, LD, KD, Math.round(rD / KD), this._material.shaderLanguage)
-       }
-     }
-     var CD = wD(41066),
-       xD = wD(40234),
-       TD = wD(37070),
-       bD = wD(41069),
-       jD = wD(40348),
-       dD = wD(40224),
-       SD = wD(41027),
-       iD = wD(37577),
-       lD = wD(41075);
-     class WD extends CD.b {
-       getData() {
- ... (36 more removed lines; see GitHub link above)
+           } = pp;
+           const [Sp, , xp] = op.x[cp][Wp], Lp = [];
+           for (let op = 0; op < Ip; op++)
+             for (let pp = 0; pp < Op; pp++) Lp.push([ip[0] + Sp * pp, ip[1] - op, ip[2] + xp * pp]);
+           return Lp
+         }(pp))
+         if (wp(ip(cp[0], cp[1], cp[2]))) return cp;
+       return null
```

#### 25. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L565-L566` → after: `L3969-L3971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R3969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L3969-L3971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/246.js#L3969-L3971) · [Before (L565-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/246.js#L565-L566)

```diff
-     function kD(DD, zD) {
-       if (!(zD instanceof pD.StandardMaterial) || zD.specularTexture) return;
+     function kp(pp, ip, cp, op, Ip) {
+       const Sp = pp(cp, op, Ip);
+       if (!Lp(Sp)) return null;
```

#### 26. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L568-L605` → after: `L3973-L3988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R3973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L3973-L3988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/246.js#L3973-L3988) · [Before (L568-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/246.js#L568-L605)

```diff
-         r: wD,
-         g: sD,
-         b: KD
-       } = zD.specularColor;
-       0 === wD && 0 === sD && 0 === KD && (DD.SPECULARTERM = !1)
-     }(0, RD.e)({
-       disableUnusedSpecularTerm: kD
-     });
-     var mD = wD(37304),
-       eD = wD(37584);
-     const oD = new RegExp(`^#define ${gD.c}\\s*$`, "m");
-     class aD extends(nD(gD.i)) {
-       constructor(DD, zD) {
-         super(DD, zD), this.MI = !1, zD.ditherOnlyWhileFading && (eD.c.add(DD), this.prewarmDitherTwins(DD))
-       }
-       prewarmDitherTwins(DD) {
- ... (22 more removed lines; see GitHub link above)
+         rootId: xp,
+         rot: Yp
+       } = Op.e[Sp].meta, Dp = [
+         [cp, op, Ip]
+       ], Pp = new Set([Dp[0].join()]);
+       let Wp = Dp[0],
+         yp = null;
+       for (let Op = 0; Op < Dp.length; Op++) {
+         const cp = Dp[Op];
+         if (Hp(Yp, cp, Wp) < 0 && (Wp = cp), wp(ip(cp[0], cp[1], cp[2]))) {
+           const ip = ep(pp, cp[0], cp[1], cp[2]);
+           (!yp || Hp(Yp, ip.anchor, yp.anchor) < 0) && (yp = ip)
+         }
+         for (let ip = 0; ip < 4 && Dp.length < Ap; ip++) {
+           const Op = dp(pp, cp, ip, xp, Yp);
+           Op && !Pp.has(Op.join()) && (Pp.add(Op.join()), Dp.push(Op))
```

#### 27. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L609-L610` → after: `L3991-L3995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R3991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L3991-L3995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/246.js#L3991-L3995) · [Before (L609-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/246.js#L609-L610)

```diff
-       dispose(DD) {
-         this.MI = !0, super.dispose(DD)
+       return yp ??= ep(pp, Wp[0], Wp[1], Wp[2]), {
+         cells: Dp,
+         topLeft: Wp,
+         rect: yp,
+         textCell: jp(yp, ip)
```

#### 28. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L615-L675` → after: `L3999-L4000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R3999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L3999-L4000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/246.js#L3999-L4000) · [Before (L615-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/246.js#L615-L675)

```diff
-     function vD(DD, zD) {
-       uD.set(DD, zD)
-     }
-     vD(LD.d, MD), vD(cD.j, PD), vD(gD.i, aD), vD(RD.g, yD), (0, AD.d)({
-       create: (DD, zD) => {
-         const wD = new pD.StandardMaterial(DD.name, zD);
-         return (0, mD.r)(DD, wD), wD.detailMap._pluginDefineNames
-       },
-       write: (DD, zD, wD) => {
-         (0, mD.V)(DD.mirror, zD, wD)
-       },
-       addFeature: (DD, zD, wD) => {
-         const pD = uD.get(zD.feature);
-         if (!pD) throw new Error(`${zD.feature.name} has no plugin class (registerPluginClass)`);
-         new pD(DD.mirror, zD.state, ...wD)
-       },
- ... (45 more removed lines; see GitHub link above)
+     function mp(pp, ip, cp, Sp, xp) {
+       if (null !== cp && Lp(cp)) {
```

#### 29. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L677-L780` → after: `L4002-L4010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R4002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L4002-L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/246.js#L4002-L4010) · [Before (L677-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/246.js#L677-L780)

```diff
-           samplingMode: gD
-         } = DD.sampler, RD = gD === (0, UD.H)(LD) ? null : () => {
-           (0, mD.L)(AD, gD)
-         }, AD = new sD.e(pD, zD, null, LD, KD, RD, null, (0, UD.D)(cD));
-         AD.coordinatesMode = rD.b.SKYBOX_MODE, (0, UD.U)(DD, AD)
-       },
-       canvas: (DD, zD, wD) => {
-         let {
-           width: pD,
-           height: sD,
-           mipmaps: LD,
-           samplingMode: cD,
-           hasAlpha: gD = !1,
-           wrap: RD = rD.b.CLAMP_ADDRESSMODE
-         } = wD;
-         const AD = new KD.e(zD, {
- ... (88 more removed lines; see GitHub link above)
+           rootName: pp,
+           rot: ip
+         } = Op.e[cp].meta;
+         if (op.x[ip].some((pp => {
+             let [ip, cp, Op] = pp;
+             return ip === Sp[0] && cp === Sp[1] && Op === Sp[2]
+           }))) return {
+           root: pp,
+           rot: ip
```

#### 30. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L798-L799` → after: `L4013-L4016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R4013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L4013-L4016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/246.js#L4013-L4016) · [Before (L798-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/246.js#L798-L799)

```diff
-       dispose() {
-         this.release(), super.dispose()
+       const [Yp, Dp] = op.n[xp], Ap = pp(ip[0] - Yp, ip[1], ip[2] - Dp);
+       return {
+         root: (0, Ip.g)(Ap) ? op.A : op.y,
+         rot: xp
```

#### 31. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L831-L845` → after: `L4031-L4039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R4031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L4031-L4039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/246.js#L4031-L4039) · [Before (L831-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/246.js#L831-L845)

```diff
-     function UD(DD, zD, wD) {
-       let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       const sD = new LD.e(DD, wD),
-         {
-           positions: KD,
-           normals: rD,
-           uvs: gD,
-           indices: RD
-         } = zD;
-       return Object.assign(new cD.b, {
-         positions: KD,
-         normals: rD,
-         uvs: gD,
-         indices: RD
-       }).applyToMesh(sD, pD), sD
+     function Sp(pp) {
+       const ip = pp.indexOf("|");
+       return -1 === ip ? {
+         item: pp,
+         clientPredictedThrower: null
+       } : {
+         item: pp.slice(0, ip),
+         clientPredictedThrower: pp.slice(ip + 1)
+       }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/247.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/247.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f)

#### 1. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/247.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/247.js#L4)

```diff
-   40942: (DD, zD, wD) => {
+   38281: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L6-L7` → after: `L6-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/247.js#L6-L11) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/247.js#L6-L7)

```diff
-       c: () => KD,
-       d: () => rD
+       e: () => Yp,
+       h: () => Op,
+       i: () => xp,
+       l: () => op,
+       o: () => Sp,
+       q: () => Ip
```

#### 3. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L9-L10` → after: `L13-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L13-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/247.js#L13-L18) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/247.js#L9-L10)

```diff
-     var pD = wD(1941);
-     let sD = !1;
+     const Op = 1.001,
+       op = .501,
+       Ip = .025,
+       Sp = .75,
+       xp = .08,
+       Lp = 4;
```

#### 4. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L13-L17` → after: `L21-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L21-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/247.js#L21-L35) · [Before (L13-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/247.js#L13-L17)

```diff
-       sD = !0
-     }
- 
-     function rD() {
-       sD && (sD = !1, (0, pD.b)())
+       const pp = op,
+         ip = Ip,
+         cp = pp - ip / 2,
+         Op = (2 * pp - 2 * ip) / (2 * Lp - 1),
+         Sp = [];
+       for (const op of [-cp, cp])
+         for (const Ip of [-cp, cp])
+           for (let cp = 0; cp < Lp; cp++) {
+             const xp = -pp + ip + Op * (2 * cp + .5);
+             Sp.push([Op, ip, ip, xp, op, Ip]), Sp.push([ip, Op, ip, op, xp, Ip]), Sp.push([ip, ip, Op, op, Ip, xp])
+           }
+       for (const op of [-cp, cp])
+         for (const pp of [-cp, cp])
+           for (const Op of [-cp, cp]) Sp.push([ip, ip, ip, op, pp, Op]);
+       return Sp
```

#### 5. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L20` → after: `L38-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L38-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/247.js#L38-L181) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/247.js#L20)

```diff
-   40940: (DD, zD, wD) => {
+   38636: (pp, ip, cp) => {
+     cp.d(ip, {
+       B: () => Pp,
+       D: () => Up,
+       G: () => vp,
+       J: () => op,
+       b: () => Dp,
+       e: () => Lp,
+       h: () => Hp,
+       i: () => Yp,
+       k: () => xp,
+       m: () => Sp,
+       o: () => Ip,
+       p: () => kp,
+       s: () => Wp,
+       t: () => jp,
+ ... (128 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L23-L24` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/247.js#L184) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/247.js#L23-L24)

```diff
-       h: () => KD,
-       j: () => LD
+       e: () => Jp
```

#### 7. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L26-L60` → after: `L186-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L186-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/247.js#L186-L276) · [Before (L26-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/247.js#L26-L60)

```diff
-     var pD = wD(40506),
-       sD = wD(40516);
- 
-     function KD(DD) {
-       if (DD.queries.drawCensus() < pD.yb.BYTES) return null;
-       const zD = DD.memoryData(DD.scratch(), pD.yb.BYTES, 4, "the draw census");
-       return null === zD ? null : {
-         terrainOpaque: pD.yb.terrainOpaque(zD, 0),
-         terrainTransparent: pD.yb.terrainTransparent(zD, 0),
-         terrainPack: pD.yb.terrainPack(zD, 0),
-         earthSky: pD.yb.earthSky(zD, 0),
-         skyMeshes: pD.yb.skyMeshes(zD, 0),
-         regular: pD.yb.regular(zD, 0),
-         thin: pD.yb.thin(zD, 0),
-         line: pD.yb.line(zD, 0),
-         text: pD.yb.text(zD, 0),
- ... (19 more removed lines; see GitHub link above)
+     var Op = cp(9338),
+       op = cp(9375);
+     const Ip = [
+       [1, 0, 0],
+       [-1, 0, 0],
+       [0, 0, 1],
+       [0, 0, -1],
+       [0, 1, 0],
+       [0, -1, 0]
+     ];
+     var Sp = cp(9392),
+       xp = cp(38438),
+       Lp = cp(9385);
+     const Yp = {
+       1: [0, -1],
+       2: [-1, 0],
+ ... (75 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L62-L67` → after: `L278-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L278-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/247.js#L278-L369) · [Before (L62-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/247.js#L62-L67)

```diff
-       return zD + wD + pD + sD + KD + rD + LD + cD + gD
-     }
- 
-     function LD() {
-       const DD = (0, sD.i)();
-       return !0 === (null === DD || void 0 === DD ? void 0 : DD.isCoreRunning) ? function(DD) {
+       const [xp, Lp] = (0, Rp.o)(Ip, Sp), Yp = Cp(pp, ip + xp, cp, Op + Lp);
+       return null !== Yp && Yp.rot === Ip && Yp.half === Rp.q[Sp]
+     }
+     var Xp = cp(38633);
+     const lp = [new class {
+       constructor() {
+         this.reshapeOffsets = Wp
+       }
+       handles(pp) {
+         var ip;
+         return "Stairs" === (null === (ip = Op.e[pp]) || void 0 === ip ? void 0 : ip.model)
+       }
+       affects(pp) {
+         return this.handles(pp)
+       }
+       shape(pp, ip, cp, op, Ip) {
+ ... (76 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L69` → after: `L371-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L371-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/247.js#L371-L377) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/247.js#L69)

```diff
-         if (null === zD) return [];
+         return tp.has(ip) || ip === yp.l
+       }
+       affects(pp) {
+         const ip = jp(pp);
+         return Hp.has(ip) || dp.has(ip) || ip === wp || ip === yp.l || void 0 !== yp.e[ip]
+       }
+       shape(pp, ip, cp, op, Ip, Sp) {
```

#### 10. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L71-L98` → after: `L379-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L379-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/247.js#L379-L464) · [Before (L71-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/247.js#L71-L98)

```diff
-           terrainOpaque: wD,
-           terrainTransparent: pD,
-           terrainPack: sD,
-           earthSky: LD,
-           skyMeshes: cD,
-           regular: gD,
-           thin: RD,
-           line: AD,
-           text: UD,
-           particles: fD
-         } = zD;
-         return [{
-           label: "Drawn",
-           value: `${rD(zD)}`
-         }, {
-           label: "Terrain",
- ... (12 more removed lines; see GitHub link above)
+           rootName: xp,
+           rot: Lp
+         } = Op.e[Ip].meta;
+         return xp === yp.l ? Sp ? Ip : function(pp, ip, cp, op, Ip) {
+           const [Sp, xp] = yp.h[Ip - 1];
+           for (let Lp = 1; Lp <= yp.J; Lp++) {
+             const [Yp, Dp] = [ip - Sp * Lp, op - xp * Lp], Ap = pp(Yp, cp, Dp);
+             if (jp(Ap) === yp.l && Op.e[Ap].meta.rot === Ip && Up(ip, cp, op, Yp, Dp)) return (0, Op.f)((0, yp.ab)(Ip, !kp(Ap)))
+           }
+           return (0, Op.f)((0, yp.ab)(Ip, !1))
+         }(pp, ip, cp, op, Lp) : (0, Op.f)((0, yp.P)(xp, Lp, function(pp, ip, cp, op, Ip) {
+           const [Sp, xp] = yp.h[Ip - 1], Lp = (Ip, Sp) => function(pp, ip, cp) {
+             var op;
+             const Ip = null === (op = Op.e[pp]) || void 0 === op ? void 0 : op.meta;
+             if (!Ip) return !1;
+             const Sp = Ip.rootName,
+ ... (70 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L101-L194` → after: `L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/247.js#L467) · [Before (L101-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/247.js#L101-L194)

```diff
-   40919: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => ID,
-       f: () => UD,
-       g: () => fD
-     });
-     var pD = wD(1950),
-       sD = wD(1301),
-       KD = wD(40516),
-       rD = wD(40535),
-       LD = wD(40540),
-       cD = wD(40558);
-     const gD = new sD.b;
-     let RD = !1;
- 
-     function AD(DD) {
- ... (78 more removed lines; see GitHub link above)
+   38633: (pp, ip, cp) => {
```

#### 12. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L286-L305` → after: `L473-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L473-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/247.js#L473-L484) · [Before (L286-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/247.js#L286-L305)

```diff
-     var pD = wD(1270),
-       sD = wD(608),
-       KD = wD(103),
-       rD = wD(4820),
-       LD = wD(40506),
-       cD = wD(40529),
-       gD = wD(40516),
-       RD = wD(40928),
-       AD = wD(40916),
-       UD = wD(40540),
-       fD = wD(40558);
- 
-     function ID(DD) {
-       let {
-         deadEId: zD,
-         killerEId: wD,
- ... (4 more removed lines; see GitHub link above)
+     var Op = cp(9338),
+       op = cp(9359),
+       Ip = cp(9427),
+       Sp = cp(38636),
+       xp = cp(9422);
+     const Lp = (0, Sp.D)("pipe"),
+       Yp = (0, Sp.D)("tank"),
+       Dp = (0, Sp.D)("port"),
+       Ap = "Reactor Port";
+ 
+     function Pp(pp, ip, cp) {
+       const Op = new Set([Ip.d, Ip.c, Ap, ...ip, ...cp, ...pp ? [Sp.i] : []]);
```

#### 13. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L307-L406` → after: `L486-L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L486-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/247.js#L486-L494) · [Before (L307-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/247.js#L307-L406)

```diff
-         killer: OD({
-           eId: wD,
-           lifeformType: pD
-         }),
-         victim: OD({
-           eId: zD
-         }),
-         withItem: sD,
-         killstreak: KD
-       }
-     }
- 
-     function BD(DD) {
-       let {
-         killer: zD,
-         victim: wD,
- ... (84 more removed lines; see GitHub link above)
+         makers: new Set(ip),
+         roots: Op
+       }
+     }
+     const Wp = {
+         water: Pp(!0, ["Condenser"], ["Centrifuge", "Synthesizer", Sp.b]),
+         cryo: Pp(!1, [Sp.b], [])
+       },
+       yp = new Set([...Wp.water.roots, ...Wp.cryo.roots]),
```

#### 14. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L408-L426` → after: `L496-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L496-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/247.js#L496-L501) · [Before (L408-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/247.js#L408-L426)

```diff
-         kill: {
-           watch(DD) {
-             if (XD = !0, 0 === ED.length) return QD = DD, () => {
-               XD = !1, QD = null
-             };
-             const zD = setTimeout((() => {
-               const zD = ED;
-               ED = [], QD = DD;
-               for (const pD of zD) try {
-                 DD(pD())
-               } catch (wD) {
-                 console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", wD)
-               }
-             }), 0);
-             return () => {
-               clearTimeout(zD), XD = !1, QD = null
- ... (3 more removed lines; see GitHub link above)
+         nx: [-1, 0, 0],
+         ny: [0, -1, 0],
+         nz: [0, 0, -1],
+         px: [1, 0, 0],
+         py: [0, 1, 0],
+         pz: [0, 0, 1]
```

#### 15. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L428-L442` → after: `L503-L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L503-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/247.js#L503-L615) · [Before (L428-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/247.js#L428-L442)

```diff
-       dD = {
-         localPos() {
-           const DD = (0, gD.i)();
-           if (null === DD) return xD;
-           const zD = DD.api.apiView;
-           for (let wD = 0; wD < 3; wD++) TD[wD] = LD.v.localPos(zD, 0, wD);
-           return TD
-         },
-         targetedBlockPos() {
-           const DD = (0, gD.i)();
-           if (null === DD || LD.v.targetBlockId(DD.api.apiView, 0) === LD.Xc) return null;
-           for (let zD = 0; zD < 3; zD++) bD[zD] = LD.v.targetBlock(DD.api.apiView, 0, zD);
-           return bD
-         }
-       }
+       wp = op.g.map((pp => Up[pp])),
+       vp = wp.map((pp => {
+         let [ip, cp, Op] = pp;
+         return Sp.s.findIndex((pp => {
+           let [op, Ip, Sp] = pp;
+           return op === ip && Ip === cp && Sp === Op
+         }))
+       }));
+ 
+     function tp(pp) {
+       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
+       const cp = Op.e[pp],
+         op = null === cp || void 0 === cp ? void 0 : cp.meta.rootName,
+         Pp = Wp[ip];
+       if (!op || !Pp.roots.has(op)) return null;
+       if ((0, Ip.i)(op)) return (0, Sp.B)(cp.name) === ip ? Lp : null;
+ ... (97 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L444` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/247.js#L617) · [Before (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/247.js#L444)

```diff
-   38967: (DD, zD, wD) => {
+   38399: (pp, ip, cp) => {
```

#### 17. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L448-L503` → after: `L622-L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L622-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/247.js#L622-L644) · [Before (L448-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/247.js#L448-L503)

```diff
-     class pD {
-       constructor() {
-         this.members = new Map
-       }
-       apply(DD) {
-         const zD = {
-           added: [],
-           removed: [],
-           settingChanges: []
-         };
-         for (const pD of DD.Hw) {
-           let DD = this.members.get(pD.qw);
-           if (DD || (DD = {
-               name: null,
-               settings: {}
-             }, this.members.set(pD.qw, DD), zD.added.push(pD.qw)), null !== pD.Dp && (DD.name = pD.Dp), null !== pD.zp || pD.wp.length > 0) {
- ... (40 more removed lines; see GitHub link above)
+     const Op = ["Chest", "Loot Chest", "Moonstone Chest"],
+       op = [{
+         name: "Workbench",
+         exactMatch: !0
+       }, {
+         name: "Furnace",
+         exactMatch: !0
+       }, {
+         name: "Artisan Bench",
+         exactMatch: !0
+       }, {
+         name: "Potion Table",
+         exactMatch: !0
+       }, {
+         name: "Salvaging Table",
+         exactMatch: !0
+ ... (7 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/248.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/248.js` (132 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6)

#### 1. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4-L97` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L4) · [Before (L4-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L4-L97)

```diff
-   39406: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       default: () => Dp
-     });
-     const pD = [0, 90, 180, 270],
-       sD = "plotsblueprint";
-     var KD = wD(58),
-       rD = wD(36580),
-       LD = wD(20),
-       cD = wD(1648),
-       gD = wD(1737),
-       RD = wD(25);
-     const AD = [
-         ["farm_hut", "farm_house", "farm_barn"],
-         ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
-         ["market_stand", "market_stall", "market_shop"],
- ... (78 more removed lines; see GitHub link above)
+   39281: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L99` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L6) · [Before (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L99)

```diff
-       return UD[DD]
+       return !(!pp.lobbyLeaderboardInfo && !pp.lobbyManage)
```

#### 3. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L101` → after: `L8-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L8-L17) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L101)

```diff
-     const BD = new Map(AD.flatMap((DD => DD.slice(1).map(((zD, wD) => [zD, DD[wD]])))));
+     cp.d(ip, {
+       d: () => Op
+     })
+   },
+   39208: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Ip
+     });
+     var Op = cp(34),
+       op = cp(1982);
```

#### 4. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L104-L140` → after: `L20-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L20-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L20-L31) · [Before (L104-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L104-L140)

```diff
-       var zD;
-       return null !== (zD = BD.get(DD)) && void 0 !== zD ? zD : null
-     }
-     const hD = {
-       farm_hut: "plotsGame:journalNoteFarmHut",
-       rusticHome_tent: "plotsGame:journalNoteRusticHomeTent",
-       castle_tower: "plotsGame:journalNoteCastleTower",
-       farm_house: "plotsGame:journalNoteFarmHouse",
-       farm_barn: "plotsGame:journalNoteFarmBarn"
-     };
- 
-     function nD(DD, zD) {
-       const wD = new Set(DD),
-         pD = function(DD) {
-           const zD = new Set(DD);
-           return new Set(fD.filter((DD => {
- ... (21 more removed lines; see GitHub link above)
+       let {
+         taskId: ip,
+         progress: cp
+       } = pp;
+       const Op = op.c.get("_tasks");
+       null !== Op && void 0 !== Op && Op[ip] && op.c.apply({
+         _tasks: {
+           ...Op,
+           [ip]: {
+             ...Op[ip],
+             progress: cp
+           }
```

#### 5. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L142` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L33) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L142)

```diff
-       }))
+       })
```

#### 6. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L144` → after: `L35-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L35-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L35-L54) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L144)

```diff
-     const MD = "plotsJournalChanged";
+     Op.m.subscribe("clientTaskProgress", (pp => {
+       Ip(pp)
+     }))
+   },
+   39152: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Oc,
+       g: () => ic,
+       j: () => cc
+     });
+     var Op = cp(3774),
+       op = cp(156),
+       Ip = cp(195),
+       Sp = cp(643),
+       xp = cp(44),
+       Lp = cp(2849),
+ ... (4 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L147-L153` → after: `L57-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L57-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L57-L69) · [Before (L147-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L147-L153)

```diff
-         this.api = DD, this.placement = zD, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
-           this.placement.stop(), this.sI("journal_opened")
-         }, this.build = DD => {
-           this.sI("placement_started"), this.placement.start(DD), (0, rD.g)()
-         }, this.putAway = () => {
-           this.api.sendCommand(`${sD} cancel`)
-         }
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
+           IDp: !0
+         };
+         this.callbacks = ip, this.options = cp, this.zcp = void 0, this.sessionId = void 0, this.mC = [], this.SDp = !1, this.Ry = !1, this.xDp = void 0, this.uC = 0, this.YIp = 0, this.LDp = (pp, ip) => {
+           if (this.Ry) return;
+           const cp = Number(pp);
+           this.SDp ? this.YDp(cp, ip) : this.mC.push({
+             id: cp,
+             payload: ip
+           })
+         }, this.dispose = () => {
+           this.Ry || (this.Ry = !0, Pp.delete(this), this.mC.length = 0, this.xDp())
+         }, this.zcp = pp, this.sessionId = pp.sessionId, Pp.set(this, []), this.xDp = this.DDp()
```

#### 8. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L155-L156` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L71-L72) · [Before (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L155-L156)

```diff
-       getPages() {
-         return this.pages
+       ADp(pp) {
+         this.xDp(), this.zcp = pp, this.sessionId = pp.sessionId, this.uC = 0, this.YIp = 0, this.xDp = this.DDp()
```

#### 9. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L158-L160` → after: `L74-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L74-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L74-L75) · [Before (L158-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L158-L160)

```diff
-       QI(DD) {
-         let [, zD, wD] = DD;
-         this.pages = nD(zD, wD), RD.l.KG(MD, this.pages, !0)
+       get tC() {
+         return this.YIp
```

#### 10. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L162-L163` → after: `L77-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L77-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L77-L79) · [Before (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L162-L163)

```diff
-       openFromServer() {
-         this.openRequested = !0, this.DU()
+       DDp() {
+         const pp = this.zcp.ku("*", this.LDp);
+         return this.options.IDp && this.zcp.Eu(this.dispose), pp
```

#### 11. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L165-L166` → after: `L81-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L81-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L81-L94) · [Before (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L165-L166)

```diff
-       DU() {
-         this.openRequested && !LD.e.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, cD.q)() || (0, gD.isTypingInInput)() || null !== this.placement.getView() || (0, rD.r)())
+       YDp(pp, ip) {
+         try {
+           (0, Yp.bc)(pp) && (ip = (0, Yp.b)(pp, Dp.my.from(ip)));
+           const cp = Pp.get(this)[pp];
+           if ("function" !== typeof cp) {
+             if (this.callbacks.PDp) return void this.callbacks.PDp(pp, ip);
+             throw new Error(`No onMessage handler registered for message id ${pp}`)
+           }
+           cp(ip)
+         } catch (cp) {
+           this.callbacks.WDp(`Error in onMessage ${pp} with payload ${JSON.stringify(ip)}`, cp)
+         } finally {
+           this.uC++
+         }
```

#### 12. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L168-L169` → after: `L96-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L96-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L96-L105) · [Before (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L168-L169)

```diff
-       sI(DD) {
-         this.reported.has(DD) || (this.reported.add(DD), this.api.sendCommand(`${sD} report ${DD}`))
+       yDp() {
+         for (const {
+             id: pp,
+             payload: ip
+           }
+           of this.mC) {
+           if (this.Ry) break;
+           this.YDp(pp, ip)
+         }
+         this.mC.length = 0
```

#### 13. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L171-L197` → after: `L107-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L107-L108) · [Before (L171-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L171-L197)

```diff
-     }
-     var JD = wD(1044),
-       ED = wD.n(JD),
-       QD = wD(1057),
-       XD = wD(1447),
-       VD = wD(4552),
-       PD = wD(3416),
-       CD = wD(1442),
-       xD = wD(1119),
-       TD = wD(1200),
-       bD = wD(9198);
-     const jD = [0, 90, 180, 270],
-       dD = /^(meta\|rot\d)\|([lrud]+)$/,
-       SD = "nesw",
-       iD = /^meta\|([nesw]*)\|?(Stacked)?$/,
-       lD = function(DD) {
- ... (11 more removed lines; see GitHub link above)
+       uR() {
+         return this.Ry
```

#### 14. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L199-L201` → after: `L110-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L110-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L110-L121) · [Before (L199-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L199-L201)

```diff
-       static
-       for (DD) {
-         return lD(DD)
+       UDp() {
+         if (this.SDp || this.Ry) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
+         return {
+           ku: (pp, ip) => {
+             if (this.SDp || this.Ry) throw new Error("Trying to call onMessage after registration finished");
+             this.ku(pp, ip)
+           },
+           finishRegistration: () => {
+             if (this.Ry) throw new Error("Cannot finish message registration after disposal");
+             this.SDp = !0, this.yDp()
+           }
+         }
```

#### 15. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L203-L206` → after: `L123-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L123-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L123-L128) · [Before (L203-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L203-L206)

```diff
-       getBlockIdMapping(DD, zD) {
-         const wD = this.getBlockIdMappingKey(DD, zD);
-         let pD = this.blockIdMappings.get(wD);
-         return void 0 === pD && jD.includes(DD) && (pD = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, DD, zD), this.blockIdMappings.set(wD, pD)), pD
+       ku(pp, ip) {
+         var cp, Op;
+         null === (cp = (Op = this.callbacks).wDp) || void 0 === cp || cp.call(Op);
+         const op = Pp.get(this);
+         for (; pp > op.length;) op[op.length] = null;
+         op[pp] = ip
```

#### 16. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L208-L209` → after: `L130-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L130-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L130-L131) · [Before (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L208-L209)

```diff
-       turnBlockId(DD, zD, wD) {
-         return this.mapBlockId(this.blockMetadata[DD], zD, this.getRotationMapping(zD, wD), wD)
+       send(pp, ip) {
+         this.vDp(), (0, Ap.C)(ip) ? this.zcp.bC(pp, ip) : this.zcp.send(pp, ip)
```

#### 17. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L211-L212` → after: `L133-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L133-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L133-L135) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L211-L212)

```diff
-       getBlockIdMappingKey(DD, zD) {
-         return `r${DD}|m${Number(zD)}`
+       vDp() {
+         var pp, ip;
+         (this.YIp++, 5 === yp++) && (null === (pp = (ip = this.callbacks).wDp) || void 0 === pp || pp.call(ip), yp = 0)
```

#### 18. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L214-L221` → after: `L137-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L137-L138) · [Before (L214-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L214-L221)

```diff
-       createBlockIdMapping(DD, zD, wD, pD) {
-         const sD = new Uint16Array(zD + 1),
-           KD = this.getRotationMapping(wD, pD);
-         for (const rD in DD) {
-           const zD = DD[rD];
-           sD[zD.id] = this.mapBlockId(zD, wD, KD, pD)
-         }
-         return sD
+       YH() {
+         this.dispose(), this.zcp.YH()
```

#### 19. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L223-L231` → after: `L140-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L140-L141) · [Before (L223-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L223-L231)

```diff
-       getRotationMapping(DD, zD) {
-         const wD = Math.round(DD / 90),
-           pD = new Uint8Array(4);
-         for (let sD = 0; sD < 4; sD++) pD[sD] = (4 + sD - wD) % 4;
-         if (zD) {
-           let DD = pD[0];
-           pD[0] = pD[1], pD[1] = DD, DD = pD[2], pD[2] = pD[3], pD[3] = DD
-         }
-         return pD
+       leave() {
+         this.dispose(), this.zcp.leave()
```

#### 20. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L233-L264` → after: `L143-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L143-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L143-L154) · [Before (L233-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L233-L264)

```diff
-       mapBlockId(DD, zD, wD, pD) {
-         var sD;
-         const {
-           blockMetadata: KD
-         } = this, rD = Math.round(zD / 90), {
-           id: LD,
-           meta: cD
-         } = DD, {
-           rot: gD,
-           rootName: RD,
-           metaStr: AD
-         } = cD;
-         let UD;
-         const [, fD, ID] = null !== (sD = iD.exec(AD)) && void 0 !== sD ? sD : [];
-         if (void 0 !== fD) {
-           var BD, GD;
- ... (16 more removed lines; see GitHub link above)
+     }
+     let yp = 0;
+     var Up = cp(3797);
+     class wp extends Wp {
+       constructor(pp) {
+         super(pp, {
+           wDp: () => {
+             (0, xp.m)(!0) && (0, Op.yC)()
+           },
+           WDp: (pp, ip) => {
+             var cp;
+             null === (cp = (0, Lp.g)()) || void 0 === cp || cp.BU(pp, ip)
```

#### 21. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L266-L267` → after: `L156-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L156-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L156-L170) · [Before (L266-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L266-L267)

```diff
-         }
-         return UD
+         }, {
+           IDp: !1
+         }), (0, Up.e)(pp)
+       }
+       RC(pp, ip) {
+         return !!(0, Up.h)((0, Up.d)(), this.zcp, pp, ip) && (this.vDp(), !0)
+       }
+       ADp(pp) {
+         this.tDp(), super.ADp(pp), (0, Up.e)(pp)
+       }
+       YH() {
+         super.YH(), this.tDp()
+       }
+       tDp() {
+         this.zcp.DH.Wy.ZE = void 0
```

#### 22. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L272-L277` → after: `L184-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L184-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L184-L218) · [Before (L272-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L272-L277)

```diff
-       let {
-         xRotationMappedOrigin: pD,
-         shouldSwapXZ: sD
-       } = wD;
-       const KD = sD ? zD : DD;
-       return null === pD ? KD : pD - KD
+       const Op = function(pp) {
+           const ip = new Int32Array(pp.length * Rp.e);
+           return pp.forEach(((pp, cp) => {
+             const Op = cp * Rp.e;
+             if (4 === pp.length) {
+               const [cp, op, Ip, Sp] = pp;
+               ip.set([cp, op, Ip, cp, op, Ip, Sp], Op)
+             } else {
+               const [cp, op, Ip, Sp, xp, Lp, Yp] = pp;
+               ip.set([cp, Ip, xp, op, Sp, Lp, Yp], Op)
+             }
+           })), ip
+         }(cp),
+         op = (ip, cp, Op, op) => {
+           pp.setBlockNoMulti(ip, cp, Op, op, !0)
+         };
+ ... (19 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L280-L286` → after: `L221-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L221-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L221-L222) · [Before (L280-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L280-L286)

```diff
-     function ZD(DD, zD, wD) {
-       let {
-         zRotationMappedOrigin: pD,
-         shouldSwapXZ: sD
-       } = wD;
-       const KD = sD ? DD : zD;
-       return null === pD ? KD : pD - KD
+     function Mp(pp) {
+       pp.Ncp = new Set, pp.hcp = new Set, pp.Tcp = new Set, pp.acp = new Set, pp.fcp = [], pp.ncp = [], pp.lT = new Set, pp.II = [], pp.hT = []
```

#### 24. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L288-L393` → after: `L224-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L224-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L224-L282) · [Before (L288-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L288-L393)

```diff
-     const yD = {
-         farm_hut: {
-           size: [7, 7, 7],
-           palette: ["Aspen Wood Planks", "Messy Stone", "Barkless Aspen Log", "Red Planks", "Glass", "Barkless Pine Log", "Maple Wood Planks", "Smooth Stone"],
-           layers: ["....... .cbhbc. .bgggb. .bgggb. .bgggb. .cbbbc. .......", "....... .cd.dc. .d...d. .d...d. .d...d. .cdddc. .......", "....... .cd.dc. .d...d. .e...d. .d...d. .cdddc. .......", "aa...aa bfdadfb bd...db bd...db bd...db bfdddfb aa...aa", ".aa.aa. .bbdbb. .bb.bb.  … [truncated]
-         },
-         rusticHome_tent: {
-           size: [7, 6, 7],
-           palette: ["Barkless Pine Log", "White Wool", "Pine Wood Planks"],
-           layers: ["a..a..a b.....b b.....b b.....b b.....b b.....b a..a..a", "a..a..a b.....b b.....b b.....b b.....b b.....b a..a..a", "cc.a.cc b.....b b.....b b.....b b.....b b.....b cc.a.cc", ".ccacc. .b...b. .b...b. .b...b. .b...b. .b...b. .ccacc.", "..ccc.. ..b.b.. ..b.b..  … [truncated]
-         },
-         market_stand: {
-           size: [7, 4, 4],
-           palette: ["Barkless Pine Log", "Pine Wood Planks", "White Wool", "Green Wool"],
-           layers: ["a.bbbba ....... ....... acdcdca", "a.....a ....... ....... acdcdca", "a.....a ....... ....... acdcdca", "bcdcdcb bcdcdcb bcdcdcb bcdcdcb"]
-         },
- ... (90 more removed lines; see GitHub link above)
+     class Cp {
+       constructor(pp) {
+         this.HP = pp
+       }
+       register(pp) {
+         const ip = this.HP,
+           cp = (0, Lp.d)();
+         pp.ku(Yp.Q, (pp => {
+           ip.WP.Ncp.add(pp), ip.WP.hcp.delete(pp)
+         })), pp.ku(Yp.X, (pp => {
+           ip.WP.hcp.add(pp), ip.WP.Ncp.delete(pp)
+         })), pp.ku(Yp.Od, (pp => {
+           ip.WP.hcp.delete(pp), ip.WP.Ncp.delete(pp)
+         })), pp.ku(Yp.V, (pp => {
+           ip.WP.Tcp.add(pp), ip.WP.acp.delete(pp)
+         })), pp.ku(Yp._, (pp => {
+ ... (43 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L396-L399` → after: `L301-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L301-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L301-L316) · [Before (L396-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L396-L399)

```diff
-         })), pD = {
-           size: [cD, sD[1], gD],
-           cells: fD
-         }, kD.set(wD, pD)
+         })), pp.ku(Yp.We, (pp => {
+           let {
+             mp: ip,
+             Rp: Op
+           } = pp;
+           if (cp.lG(ip[0], ip[1], ip[2])) {
+             const pp = (0, Lp.d)().nH(ip[0], ip[1], ip[2]);
+             (0, Lp.d)().updateMailboxContents(ip[0], ip[1], ip[2], pp, Op)
+           }
+         })), pp.ku(Yp.ke, (pp => {
+           let {
+             pos: ip,
+             data: Op
+           } = pp;
+           cp.blockDataOwner.setBlockData(ip[0], ip[1], ip[2], Op), cp.blockAdded(ip[0], ip[1], ip[2], cp.nH(ip[0], ip[1], ip[2]))
+         }))
```

#### 26. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L403-L475` → after: `L319-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L319-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L319-L390) · [Before (L403-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L403-L475)

```diff
-     const eD = {
-       farm_hut: wD.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
-       farm_house: wD.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
-       farm_barn: wD.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
-       rusticHome_tent: wD.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
-       rusticHome_cabin: wD.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
-       rusticHome_house: wD.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
-       market_stand: wD.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
-       market_stall: wD.p + "static/media/market_stall.9a562807f9dff591618a.webp",
-       market_shop: wD.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
-       castle_wall: wD.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
-       castle_gate: wD.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
-       castle_tower: wD.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
-     };
-     var oD = wD(1096);
-     const aD = {
- ... (57 more removed lines; see GitHub link above)
+     var Ep = cp(37387),
+       Xp = cp(36959),
+       lp = cp(38293),
+       Qp = cp(38132),
+       Jp = cp(38310);
+     class Bp {
+       constructor(pp, ip) {
+         this.HP = pp, this.setUpQueuedEntity = ip
+       }
+       register(pp) {
+         const ip = this.HP,
+           cp = (0, Lp.d)();
+         pp.ku(Yp.N, (pp => {
+           let {
+             Jc: ip,
+             Bc: cp
+ ... (56 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L477-L534` → after: `L392-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L392-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L392-L447) · [Before (L477-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L477-L534)

```diff
-           }), zD.active && (0, oD.jsxs)(oD.Fragment, {
-             children: [(0, oD.jsx)("p", {
-               className: "PlotsJournalHint Building",
-               children: KD("plotsGame:journalBuilding")
-             }), (0, oD.jsx)(XD.g, {
-               onClick: sD,
-               children: KD("plotsGame:journalPutAway")
-             })]
-           }), !RD && !zD.active && (0, oD.jsx)(AD, {
-             onClick: () => {
-               pD(zD.id)
-             },
-             children: KD("plotsGame:placementBuild")
-           })]
-         })]
-       })
- ... (42 more removed lines; see GitHub link above)
+           }
+           Op === ip.NJ && (cp.shakePlayerCamera(Op, xp / 40, 200), vp.m.GA("closeShopOnDamaged", null), vp.m.GA("damagedByOtherPlayer", {
+             Ec: null,
+             direction: Lp,
+             Qp: xp
+           }, !0));
+           const Ap = ip.Yk.sH(Op);
+           if (Ap && (Ip || Sp)) {
+             const pp = [Ap[0], Ap[1] + 1, Ap[2]];
+             Ip && (0, Qp.l)(ip, Qp.y, pp, 15), Sp && (0, Qp.l)(ip, Qp.q, pp, 10)
+           }
+         })), pp.ku(Yp.zc, (pp => {
+           let {
+             Bi: cp,
+             Ni: Op,
+             Ti: op
+ ... (40 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L537-L544` → after: `L460-L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L460-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L460-L461) · [Before (L537-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L537-L544)

```diff
-       constructor() {
-         this.samples = []
-       }
-       add(DD, zD) {
-         for (this.samples.push({
-             x: DD,
-             at: zD
-           }); zD - this.samples[0].at > 100;) this.samples.shift()
+       constructor(pp, ip) {
+         this.HP = pp, this.setUpQueuedEntity = ip
```

#### 29. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L546-L549` → after: `L463-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L463-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L463-L525) · [Before (L546-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L546-L549)

```diff
-       get() {
-         const DD = this.samples[0],
-           zD = this.samples[this.samples.length - 1];
-         return zD.at > DD.at ? (zD.x - DD.x) / (zD.at - DD.at) : 0
+       register(pp) {
+         const ip = this.HP,
+           cp = (0, Lp.d)();
+         pp.ku(Yp.Oc, (pp => {
+           let {
+             eId: cp,
+             settings: Op
+           } = pp;
+           (0, Fp.g)(cp);
+           for (const ip in Op)(0, Fp.d)(cp, ip, Op[ip]);
+           if ("canSee" in Op && ip.Yk.hpp(cp, "hidingMeshManager")) {
+             const pp = ip.Yk.getState(cp, "hidingMeshManager");
+             pp.canSee = (0, gp.c)("canSee", Op.canSee), pp._forceUpdate = !0
+           }
+         })), pp.ku(Yp.B, (pp => {
+           let {
+ ... (47 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L553-L554` → after: `L538-L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L538-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L538-L652) · [Before (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L553-L554)

```diff
-     function zz(DD, zD) {
-       return DD > zD && DD >= 600
+         function Op() {
+           return ip.Yk.Nip(ip.NJ)
+         }
+         pp.ku(Yp.kc, (pp => {
+           let {
+             ao: cp,
+             Fo: Op,
+             Go: op,
+             ro: Ip,
+             Zo: Sp,
+             zo: xp,
+             Ko: Lp,
+             Vo: Yp,
+             pI: Dp
+           } = pp;
+           if (!ip.Yk.hpp(cp, "itemState")) return void(0, Zp.h)(ip, cp, [Sp, xp, Lp], Op, {
+ ... (99 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L556-L558` → after: `L654-L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L654-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L654-L784) · [Before (L556-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L556-L558)

```diff
- 
-     function wz(DD) {
-       return HD(new DOMMatrixReadOnly(getComputedStyle(DD).transform).m11)
+     var Kp = cp(6605),
+       Vp = cp(37636),
+       ii = cp(343),
+       ci = cp.n(ii),
+       Oi = cp(4609),
+       oi = cp(37907),
+       Ii = cp(38468),
+       Si = cp(37634);
+     class xi {
+       constructor(pp, ip) {
+         this.HP = pp, this.setUpQueuedEntity = ip
+       }
+       register(pp) {
+         const ip = this.HP,
+           cp = (0, Lp.d)();
+         pp.ku(Yp.Ne, (pp => {
+ ... (115 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L561-L562` → after: `L787-L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L787-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L787-L790) · [Before (L561-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L561-L562)

```diff
-     function pz(DD, zD) {
-       DD.style.transform = `rotateY(${-zD}deg)`, DD.classList.add("Turning")
+     function Li(pp, ip, cp, Op, op) {
+       let Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       if (!pp.Yk.Bip(pp.NJ)) return console.log("Got resync inven but don't have inven component"), void ip.acknowledge(Op);
+       Ip && console.error("Had to sync inven"), ip.K9(Op, op) && cp.GA("chestToggleFromServer", !1, !0), cp.GA("syncedInvenFromServer")
```

#### 33. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L566-L598` → after: `L798-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L798-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L798-L808) · [Before (L566-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L566-L598)

```diff
-       let {
-         journal: zD
-       } = DD;
-       const {
-         t: wD
-       } = (0, TD.E)(), pD = (0, CD.k)(MD, zD.getPages()), sD = (0, xD.p)(zz), [LD, cD] = (0, KD.useState)((() => function(DD) {
-         const zD = DD.findIndex((DD => DD.active));
-         return -1 !== zD ? zD : Math.max(0, DD.findIndex((DD => "open" === DD.state)))
-       }(pD))), RD = (0, KD.useRef)(null), AD = (0, KD.useRef)(null), UD = (0, KD.useRef)({
-         Forward: null,
-         Back: null
-       }), fD = sD ? 2 : 1, ID = sD ? 180 : 90, BD = LD - LD % fD, GD = BD > 0, hD = BD + fD < pD.length, nD = (0, KD.useCallback)((() => {
-         const DD = AD.current;
-         return null === DD ? BD : (AD.current = null, DD.animation.cancel(), (zD = UD.current[DD.direction]).style.transform = "", zD.classList.remove("Turning"), null === DD.next ? BD : (cD(DD.next), DD.next));
-         var zD
-       }), [BD]), OD = (0, KD.useCallback)(((DD, zD, wD, pD) => {
- ... (17 more removed lines; see GitHub link above)
+       const ip = pp.WP;
+       let cp = 0,
+         op = -1,
+         Sp = -1 / 0,
+         xp = null,
+         Lp = !0;
+       const Dp = () => {
+         if (++cp % 10 !== 0) return;
+         const Dp = (0, Op.getLastReceivedPacketId)();
+         if (Dp <= op) return;
+         const [Ap, Pp, Wp] = pp.Yk.sH(pp.NJ), yp = ! function(pp) {
```

#### 34. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L600` → after: `L810-L877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L810-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L810-L877) · [Before (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L600)

```diff
-           (null === (DD = AD.current) || void 0 === DD ? void 0 : DD.animation) === LD && nD()
+           let cp = null === (ip = pp.Yk.qcp(pp.NJ)) || void 0 === ip ? void 0 : ip.vy;
+           if (void 0 === cp) return !1;
+           const Op = new Set;
+           for (; void 0 !== cp && !Op.has(cp);) {
+             var op;
+             Op.add(cp);
+             const ip = pp.Yk.getState(cp, "smoothToServerPos"),
+               Ip = Array.isArray(ip) ? null : null === ip || void 0 === ip ? void 0 : ip.serverPosition;
+             if (Ip) {
+               const ip = pp.Yk.sH(cp);
+               if (Math.abs(ip[0] - Ip[0]) > 10 || Math.abs(ip[1] - Ip[1]) > 10 || Math.abs(ip[2] - Ip[2]) > 10) return !0
+             }
+             cp = null === (op = pp.Yk.qcp(cp)) || void 0 === op ? void 0 : op.vy
+           }
+           return !1
+         }(pp) && function(pp, ip, cp, Op) {
+ ... (52 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L602-L710` → after: `L879-L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L879-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L879-L934) · [Before (L602-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L602-L710)

```diff
-       }), [fD, ID, nD]), JD = (0, KD.useCallback)((DD => {
-         if (null !== RD.current) return;
-         const zD = nD();
-         ("Forward" === DD ? zD + fD < pD.length : zD > 0) && OD(DD, !0, 0, zD)
-       }), [nD, OD, fD, pD.length]);
-       (0, KD.useEffect)((() => {
-         zD.onOpened()
-       }), [zD]), (0, KD.useEffect)((() => () => {
-         var DD;
-         null === (DD = AD.current) || void 0 === DD || DD.animation.cancel()
-       }), []), (0, KD.useEffect)((() => {
-         const DD = DD => {
-           var zD;
-           DD.pointerId !== (null === (zD = RD.current) || void 0 === zD ? void 0 : zD.pointerId) || RD.current.following || (RD.current = null)
-         };
-         return window.addEventListener("pointerup", DD), () => {
- ... (93 more removed lines; see GitHub link above)
+       }
+       restartChunkStreaming() {
+         (0, oi.i)(this.HP, (0, Lp.d)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - yi.d)), this.startChunkReports()
+       }
+       register(pp) {
+         const ip = this.HP,
+           cp = (0, Lp.d)();
+         pp.ku(Yp.Lc, (pp => {
+           tp.c.applyNewClientOptions(pp)
+         })), pp.ku(Yp.ed, (pp => {
+           wi.c.onReceiveColyseusPing(pp)
+         })), pp.ku(Yp.re, (pp => {
+           let {
+             key: ip,
+             value: cp
+           } = pp;
+ ... (40 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L712-L761` → after: `L936-L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L936-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L936-L968) · [Before (L712-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L712-L761)

```diff
-               DD.pointerId === (null === (zD = RD.current) || void 0 === zD ? void 0 : zD.pointerId) && bD(DD.clientX, DD.timeStamp)
-             },
-             onPointerCancel: DD => {
-               const zD = RD.current;
-               DD.pointerId === (null === zD || void 0 === zD ? void 0 : zD.pointerId) && (RD.current = null, null !== zD.direction && OD(zD.direction, !1, 0, BD))
-             },
-             children: (0, oD.jsxs)("div", {
-               className: "PlotsJournalSheet",
-               children: [sD && dD("Left", BD - 2, !0), dD("Right", BD + 2 * fD - 1, !0), (0, oD.jsxs)("div", {
-                 ref: DD => {
-                   UD.current.Back = DD
-                 },
-                 className: "PlotsJournalLeaf Back",
-                 children: [dD("Recto", BD - 1, !0), sD && dD("Verso", BD, !1)]
-               }), (0, oD.jsxs)("div", {
-                 ref: DD => {
- ... (34 more removed lines; see GitHub link above)
+               const Op = null !== (Sp = pp.endSeq) && void 0 !== Sp ? Sp : cp.lastActionSeq;
+               cp.forget((pp => pp > op.dI && pp <= Op || Ip.has(pp))), Li(ip, cp, vp.m, op.dI, op.load)
+             } else cp.dropPending(), cp.askForSnapshot()
+           })) : console.warn("ResumeComplete arrived without a resume")
+         })), pp.ku(Yp.Je, (pp => {
+           let {
+             FI: cp,
+             zI: Op,
+             dI: op
+           } = pp;
+           const {
+             inventoryPrediction: Ip
+           } = (0, Lp.d)().client, Sp = () => {
+             ip.Yk.fip(ip.NJ).loadFromString(cp)
+           };
+           this.replayResume && (this.replayResume.sync = {
+ ... (17 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L763-L764` → after: `L970-L1023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L970-L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L970-L1023) · [Before (L763-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L763-L764)

```diff
-         })
-       })
+         })), pp.ku(Yp._d, (pp => {
+           let {
+             type: ip,
+             resourceType: cp,
+             amount: Op,
+             category: op,
+             itemName: Ip
+           } = pp;
+           (0, ti.logResourceEvent)({
+             type: ip,
+             resourceType: cp,
+             amount: Op,
+             category: op,
+             itemName: Ip
+           })
+         })), pp.ku(Yp.wc, (pp => {
+ ... (38 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L766-L770` → after: `L1025-L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1025-L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1025-L1030) · [Before (L766-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L766-L770)

```diff
-     var rz = wD(36577),
-       Lz = wD(1915),
-       cz = wD(1977);
-     const gz = "plotsStepChanged",
-       Rz = "plotsPlotChanged";
+     var ei = cp(39208),
+       ui = cp(39215),
+       ji = cp(1014),
+       ki = cp(39210),
+       mi = cp(2479),
+       Ri = cp(3750);
```

#### 39. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L772-L785` → after: `L1032-L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1032-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1032-L1033) · [Before (L772-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L772-L785)

```diff
-       constructor() {
-         this.step = ["none"], this.plot = ["none"]
-       }
-       getStep() {
-         return this.step
-       }
-       receiveStep(DD) {
-         this.step = DD, RD.l.KG(gz, DD, !0)
-       }
-       getPlot() {
-         return this.plot
-       }
-       receivePlot(DD) {
-         this.plot = DD, RD.l.KG(Rz, DD, !0)
+       constructor(pp, ip) {
+         this.HP = pp, this.clientApi = ip
```

#### 40. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L787-L825` → after: `L1035-L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1035-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1035-L1062) · [Before (L787-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L787-L825)

```diff
-     }
-     const Uz = "KeyJ";
- 
-     function fz(DD) {
-       let {
-         hud: zD,
-         journal: wD
-       } = DD;
-       const pD = (0, CD.k)(MD, wD.getPages()),
-         sD = (0, CD.k)(gz, zD.getStep()),
-         {
-           isTouchScreen: KD
-         } = (0, LD.n)(["isTouchScreen"]),
-         {
-           t: RD
-         } = (0, TD.E)(),
- ... (23 more removed lines; see GitHub link above)
+       register(pp) {
+         const ip = this.HP,
+           cp = (0, Lp.d)();
+         pp.ku(Yp.lb, (pp => {
+           let {
+             chatMsgId: ip,
+             content: cp,
+             chatterEId: Op
+           } = pp;
+           vp.m.GA("chat", {
+             serverChatMsgId: ip,
+             content: cp,
+             chatterEId: Op
+           }, !0)
+         })), pp.ku(Yp.Qe, (pp => {
+           vp.m.GA("TopRightHelper", pp, !0)
+ ... (12 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L827-L883` → after: `L1064-L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1064-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1064-L1077) · [Before (L827-L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L827-L883)

```diff
-         })
-       }) : null
-     }
-     var Iz = wD(38400),
-       Bz = wD(38151),
-       Gz = wD(36891),
-       hz = wD(9228),
-       nz = wD(9240),
-       Mz = wD(37791);
-     const Oz = new Map([
-         ["Aspen Wood Planks", [.78, .706, .502]],
-         ["Barkless Aspen Log", [.792, .718, .518]],
-         ["Barkless Pine Log", [.49, .353, .275]],
-         ["Blue Planks", [.247, .267, .588]],
-         ["Blue Wool", [.227, .267, .651]],
-         ["Glass", [.702, .902, .882]],
- ... (41 more removed lines; see GitHub link above)
+         })), pp.ku(Yp.Ie, (() => {
+           vp.m.GA("showShopTutorial", null, !0)
+         })), pp.ku(Yp.od, (pp => {
+           vp.m.GA("progressBarUpdate", pp, !0)
+         })), pp.ku(Yp.fc, (pp => {
+           vp.m.GA("middleScreenBarInitiate", {
+             duration: pp.cI,
+             OI: pp.OI,
+             horizBarRemOffset: pp.oI
+           }, !0)
+         })), pp.ku(Yp.Dd, (() => {
+           vp.m.GA("middleScreenBarRemove", !0)
+         })), pp.ku(Yp.te, (pp => {
+           let {
```

#### 42. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L885-L896` → after: `L1079-L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1079-L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1079-L1104) · [Before (L885-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L885-L896)

```diff
-             meta: zD,
-             altActionable: cD,
-             canBePlacedOver: fD
-           } = bD.l[UD];
-           wD[DD] = gD(Pz(UD));
-           const ID = zD.stairsCorner;
-           if (null === ID) pD[DD] = wD[DD];
-           else {
-             const wD = ID.endsWith("Right");
-             pD[DD] = gD(`${zD.rootName}|rot${wD?zD.rot%4+1:zD.rot}|${zD.halfblockPlacement}|${ID.replace("Right","Left")}`)
-           }
-           sD[DD] = fD ? 1 : 0, KD[DD] = cD || null !== zD.open || UD in Mz.e || RD.has(zD.rootName) || void 0 !== (0, Bz.c)(zD.rootName) ? 1 : 0;
+             position: cp,
+             style: Op,
+             gi: op,
+             ri: Ip
+           } = pp;
+           vp.m.GA("setDirectionArrow", {
+             id: ip,
+             position: cp,
+             style: Op,
+             text: (0, Yp.q)(op),
+             ri: Ip
+           }, !0)
+         })), pp.ku(Yp.wb, (pp => {
+           let {
+             id: ip
+           } = pp;
+ ... (10 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L898` → after: `L1106-L1125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1106-L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1106-L1125) · [Before (L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L898)

```diff
-             rootName: BD
+             type: op,
+             params: Ip
+           } = (0, ui.e)(cp), Sp = {
+             ...Ip
+           };
+           for (const Op of ui.b) Op in Sp && Sp[Op] && (Sp[Op] = (0, Yp.q)(Sp[Op]));
+           Hi.b.queueQTE(ip, op, Sp).getResult().then((pp => {
+             "boolean" === typeof pp && (0, Op.sendColyMessage)(Yp.Rh, {
+               qteId: ip,
+               qteResponse: pp
+             })
+           }))
+         })), pp.ku(Yp.Gd, (pp => {
+           Hi.b.cancelQTE(pp)
+         })), (0, Op.onGameResetOnce)((() => {
+           Hi.b.reset()
+ ... (4 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L900-L1005` → after: `L1127-L1177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1127-L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1127-L1177) · [Before (L900-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L900-L1005)

```diff
-           rD[DD] = null !== zD.open || Bz.b.includes(BD) || BD.includes("Bookshelf") || BD.includes("Mailbox") ? 1 : 0, LD[DD] = null !== (AD = (0, Iz.e)(DD)) && void 0 !== AD ? AD : BD
-         }
-         return {
-           kinds: wD,
-           shapes: pD,
-           empty: sD,
-           inUse: KD,
-           ownAltActionMessage: rD,
-           placingItems: LD
-         }
-       }(), Qz
-     }
- 
-     function Vz() {
-       return Object.keys(bD.l).filter((DD => bD.l[DD].name === DD))
-     }
- ... (90 more removed lines; see GitHub link above)
+           (0, Yi.d)(ip, cp)
+         })), pp.ku(Yp.Hd, (pp => {
+           (0, Yi.h)(pp)
+         })), pp.ku(Yp.Te, (pp => {
+           let {
+             text: ip,
+             id: cp,
+             destructive: op
+           } = pp;
+           (0, Yi.j)(cp, ip, op, (pp => {
+             (0, Op.sendColyMessage)(Yp.rj, {
+               XL: cp,
+               lL: pp,
+               QL: 5
+             })
+           }))
+ ... (35 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1029-L1044` → after: `L1181-L1182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1181-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1181-L1182) · [Before (L1029-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1029-L1044)

```diff
-       constructor(DD) {
-         this.api = DD, this.meshes = null, this.shown = null
-       }
-       show(DD) {
-         if (!(0, yz.f)(DD, this.shown))
-           if (this.shown = null === DD ? null : [DD[0], DD[1], DD[2]], null !== this.meshes)
-             for (const zD of this.meshes) this.api.setGameMesh(zD, null === DD ? {
-               visible: !1
-             } : {
-               anchor: DD,
-               visible: !0
-             });
-           else if (null !== DD) {
-           const zD = [az.f, az.f, az.f, 0, 0, 0];
-           this.meshes = [this.build([zD], az.g, DD), this.build((0, az.c)(), az.l, DD)]
-         }
+       constructor(pp, ip, cp, Op) {
+         this.gameNameWithVariation = pp, this.HP = cp, this.connectionResume = Op, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new ep.e(ip, this.HP)
```

#### 46. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1046-L1051` → after: `L1184-L1187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1184-L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1184-L1187) · [Before (L1046-L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1046-L1051)

```diff
-       dispose() {
-         for (const zD of null !== (DD = this.meshes) && void 0 !== DD ? DD : []) {
-           var DD;
-           this.api.disposeGameMesh(zD)
-         }
-         this.meshes = null, this.shown = null
+       setupStateReplicationHandlers() {
+         this.stateReplicationHandler.setup(), (0, Op.onGameResetOnce)((() => {
+           this.stateReplicationHandler.dispose()
+         }))
```

#### 47. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1053-L1064` → after: `L1189-L1197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1189-L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1189-L1197) · [Before (L1053-L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1053-L1064)

```diff
-       build(DD, zD, wD) {
-         const pD = [],
-           sD = [];
-         for (const [KD, rD, LD, cD, gD, RD] of DD)(0, uz.g)(pD, sD, [cD + .5, gD + .5, RD + .5], [KD, rD, LD]);
-         return this.api.createGameMesh({
-           positions: pD,
-           indices: sD
-         }, {
-           rgb: vz,
-           alpha: zD,
-           onTop: !0
-         }, wD)
+       ADp(pp) {
+         this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new ep.e(pp, this.HP), this.stateReplicationHandler.setup()
+       }
+       setupOnMessageListeners(pp, ip) {
+         const cp = this.HP,
+           Op = pp => {
+             this.stateReplicationHandler.setUpIfQueued(pp)
+           };
+         new di(cp, this.gameNameWithVariation, this.connectionResume).register(pp), new Cp(cp).register(pp), new sp(cp).register(pp), new Bp(cp, Op).register(pp), new rp(cp, Op).register(pp), new qi(cp, ip).register(pp), new xi(cp, Op).register(pp)
```

#### 48. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1068-L1080` → after: `L1206-L1224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1206-L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1206-L1224) · [Before (L1068-L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1068-L1080)

```diff
-       constructor(DD) {
-         this.api = DD, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
-       }
-       watch(DD) {
-         const zD = kz.f.CI;
-         this.chunks = [];
-         for (let wD = 0; wD < DD.length; wD += 3) {
-           const pD = Math.floor(DD[wD] / zD),
-             sD = Math.floor(DD[wD + 1] / zD),
-             KD = Math.floor(DD[wD + 2] / zD);
-           this.watches(pD, sD, KD) || this.chunks.push(pD, sD, KD)
-         }
-         this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
+       constructor(pp, ip, cp, Op) {
+         this.msgHandler = cp, this.listener = Op, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new Ci.e({
+           reconnect: pp,
+           isLive: () => Op.isLive(),
+           onReconnected: pp => {
+             this.resumeOnRoom(pp)
+           },
+           onGaveUp: (pp, ip) => {
+             Op.onGaveUp(pp, ip)
+           },
+           freeze: ip,
+           releaseSeat: ip => {
+             pp(ip).then((pp => {
+               pp.leave(!0)
+             }), (pp => {
+               console.warn("Couldn't release the held seat of a game left while reconnecting", pp)
+ ... (3 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1082-L1091` → after: `L1226-L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1226-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1226-L1227) · [Before (L1082-L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1082-L1091)

```diff
-       changed() {
-         const DD = performance.now();
-         if (DD - this.lastCheckMs < 100) return !1;
-         this.lastCheckMs = DD;
-         let zD = !1;
-         for (let wD = 0; wD < this.chunks.length; wD += 3) {
-           const DD = this.api.getChunkVersion(this.chunks[wD], this.chunks[wD + 1], this.chunks[wD + 2]);
-           this.versions[wD / 3] !== DD && (this.versions[wD / 3] = DD, zD = !0)
-         }
-         return zD
+       onInitialInfo(pp, ip) {
+         this.session.onInitialInfo(pp, ip)
```

#### 50. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1093-L1096` → after: `L1229-L1230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1229-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1229-L1230) · [Before (L1093-L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1093-L1096)

```diff
-       watches(DD, zD, wD) {
-         for (let pD = 0; pD < this.chunks.length; pD += 3)
-           if (this.chunks[pD] === DD && this.chunks[pD + 1] === zD && this.chunks[pD + 2] === wD) return !0;
-         return !1
+       isResuming() {
+         return this.session.isResuming()
```

#### 51. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1098-L1124` → after: `L1232-L1233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1232-L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1232-L1233) · [Before (L1098-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1098-L1124)

```diff
-     }
-     const Yz = .35,
-       Hz = {
-         size: .9,
-         alpha: .35,
-         crossed: !1
-       },
-       qz = {
-         size: 1.04,
-         alpha: .45,
-         crossed: !0
-       },
-       Dw = [.95, .2, .15];
-     class zw {
-       constructor() {
-         this.groups = []
- ... (11 more removed lines; see GitHub link above)
+       getDroppedAt() {
+         return this.droppedAt
```

#### 52. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1126-L1127` → after: `L1235-L1243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1235-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1235-L1243) · [Before (L1126-L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1126-L1127)

```diff
-       toArray() {
-         return this.groups
+       onResumeInitialInfo(pp, ip) {
+         if (this.session.onResuming(), null === pp) {
+           try {
+             (0, Lp.d)().client.itemDropPrediction.reset()
+           } catch (cp) {
+             console.error("Error dropping the item drop predictions on resuming", cp)
+           }
+           return Op.offlineInputReplay.discard(), void this.setSuspended(!1)
+         }(0, Lp.d)().client.itemDropPrediction.onResumeReplayOffered(), Op.offlineInputReplay.replayFrom(pp.tp, ip)
```

#### 53. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1129-L1132` → after: `L1245-L1253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1245-L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1245-L1253) · [Before (L1129-L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1129-L1132)

```diff
-     }
-     class ww {
-       constructor(DD) {
-         this.api = DD, this.shown = []
+       onResumed(pp) {
+         this.setSuspended(!1), (0, Op.resendBeacons)();
+         try {
+           pp()
+         } catch (ip) {
+           console.error("Error completing the resume", ip)
+         } finally {
+           this.session.onResumed()
+         }
```

#### 54. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1134-L1142` → after: `L1255-L1270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1255-L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1255-L1270) · [Before (L1134-L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1134-L1142)

```diff
-       show(DD) {
-         const zD = [];
-         for (const wD of DD) {
-           const DD = this.shown.findIndex((DD => {
-             let {
-               group: zD
-             } = DD;
-             return sw(zD, wD.rgb, wD.look) && Kw(zD, wD)
-           })); - 1 === DD ? zD.push(this.build(wD)) : (zD.push(this.shown[DD]), this.shown.splice(DD, 1))
+       attachRoom(pp) {
+         const ip = (0, Xi.k)((() => pp.connection.isOpen));
+         pp.Eu(ip);
+         const cp = new Ei.e((() => {
+           this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(pp, "silent"), pp.leave(!1))
+         }));
+         pp.onStateChange((() => {
+           cp.heard()
+         }));
+         const Op = ip => {
+           ip.persisted || pp.leave(!0)
+         };
+         window.addEventListener("pagehide", Op), pp.Eu(((ip, cp) => {
+           if (pp === this.attachedRoom && this.listener.isLive()) return (0, Ip.j)(ip) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${ip}, reconnecting`), this.listener.onDropped(ip, cp), void this.onConnectionDropped(pp, String(i … [truncated]
+         })), this.attachedRoom = pp, this.detachRoomListeners = () => {
+           ip(), cp.dispose(), window.removeEventListener("pagehide", Op)
```

#### 55. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1147-L1152` → after: `L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1274) · [Before (L1147-L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1147-L1152)

```diff
-         for (const {
-             meshes: DD
-           }
-           of this.shown)
-           for (const zD of DD) this.api.disposeGameMesh(zD);
-         this.shown = []
+         this.detachRoom(), this.session.leave(), this.setSuspended(!1)
```

#### 56. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1154-L1182` → after: `L1276-L1277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1276-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1276-L1277) · [Before (L1154-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1154-L1182)

```diff
-       build(DD) {
-         const {
-           rgb: zD,
-           look: wD,
-           boxes: pD
-         } = DD, sD = [zD[0] + (1 - zD[0]) * Yz, zD[1] + (1 - zD[1]) * Yz, zD[2] + (1 - zD[2]) * Yz], KD = [this.buildMesh(DD.cells, zD, wD.alpha, ((DD, zD, sD, KD) => {
-           pw(DD, zD, sD, pD[KD], wD.size, !1)
-         })), this.buildMesh(DD.cells, sD, wD.alpha, ((DD, zD, sD, KD) => {
-           pw(DD, zD, sD, pD[KD], wD.size, !0)
-         }))];
-         return wD.crossed && KD.push(this.buildMesh(DD.cells, zD, .9, ((DD, zD, pD) => {
-           (0, uz.j)(DD, zD, pD, wD.size + .01, .12)
-         }))), {
-           group: DD,
-           meshes: KD
-         }
- ... (13 more removed lines; see GitHub link above)
+       setSuspended(pp) {
+         pp !== this.suspended && (this.suspended = pp, (0, Op.setConnectionSuspended)(pp), (0, Lp.d)().client.itemDropPrediction.setSuspended(pp))
```

#### 57. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1184-L1191` → after: `L1279-L1288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1279-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1279-L1288) · [Before (L1184-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1184-L1191)

```diff
-     }
- 
-     function pw(DD, zD, wD, pD, sD, KD) {
-       for (let rD = 0; rD < pD.length; rD += 6) {
-         const LD = [0, 0, 0],
-           cD = [0, 0, 0];
-         for (let DD = 0; DD < 3; DD++) LD[DD] = wD[DD] + ((pD[rD + DD] + pD[rD + DD + 3]) / 2 - .5) * sD, cD[DD] = (pD[rD + DD + 3] - pD[rD + DD]) * sD;
-         (0, uz.d)(DD, zD, LD, cD, KD)
+       detachRoom() {
+         var pp;
+         null === (pp = this.detachRoomListeners) || void 0 === pp || pp.call(this), this.detachRoomListeners = null, this.attachedRoom = null
+       }
+       onConnectionDropped(pp, ip) {
+         (0, li.reportClientError)("disconnect", "Left room", ip), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), Op.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(pp.reconnectionToken)
+       }
+       resumeOnRoom(pp) {
+         if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), pp.leave(!0), void this.dispose();
+         console.log("Reconnected to the game server, waiting for the game to resume"), (0, Gp.k)(), Op.offlineInputReplay.onConnectionReplaced(), this.msgHandler.ADp(pp), this.listener.onReconnected(pp), this.attachRoom(pp)
```

#### 58. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1195-L1196` → after: `L1308-L1319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1308-L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1308-L1319) · [Before (L1195-L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1195-L1196)

```diff
-     function sw(DD, zD, wD) {
-       return DD.rgb[0] === zD[0] && DD.rgb[1] === zD[1] && DD.rgb[2] === zD[2] && DD.look === wD
+     function Vi(pp) {
+       var ip, cp;
+       if ("object" !== typeof pp || null === pp) return {
+         errType: typeof pp
+       };
+       const Op = pp;
+       return {
+         errType: null !== (ip = null === (cp = pp.constructor) || void 0 === cp ? void 0 : cp.name) && void 0 !== ip ? ip : "",
+         errName: "string" === typeof Op.name ? Op.name : "",
+         eventType: "string" === typeof Op.type ? Op.type : "",
+         errStack: "string" === typeof Op.stack ? Op.stack.split("\n").slice(1).join(" | ") : ""
+       }
```

#### 59. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1199-L1204` → after: `L1322-L1330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1322-L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1322-L1330) · [Before (L1199-L1204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1199-L1204)

```diff
-     function Kw(DD, zD) {
-       if (DD.cells.length !== zD.cells.length) return !1;
-       for (let wD = 0; wD < DD.cells.length; wD++)
-         if (DD.cells[wD] !== zD.cells[wD]) return !1;
-       return DD.boxes.every(((DD, wD) => DD === zD.boxes[wD]))
-     }
+     function pc(pp) {
+       if ("undefined" !== typeof ProgressEvent && pp instanceof ProgressEvent) return !0;
+       if (!(pp instanceof Error)) return !1;
+       const ip = pp.code;
+       return "ServerError" === pp.name && void 0 === ip || "AbortError" === pp.name || "seat reservation expired." === pp.message || "early_leave" === pp.message
+     }(0, Up.i)((pp => {
+       (0, li.reportClientError)("wasm_net", pp)
+     }));
+     let ic = !0;
```

#### 60. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1206-L1207` → after: `L1332-L1333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1332-L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1332-L1333) · [Before (L1206-L1207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1206-L1207)

```diff
-     function rw(DD, zD) {
-       return DD.getClientOption(zD, "blockReach") + 1
+     function cc() {
+       ic = !1
```

#### 61. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1210-L1215` → after: `L1336-L1337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1336-L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1336-L1337) · [Before (L1210-L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1210-L1215)

```diff
-       constructor(DD, zD, wD) {
-         this.api = DD, this.localPlayerId = zD, this.pickNext = wD, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
-       }
-       look(DD) {
-         const [zD, , wD] = DD.cameraDirection, pD = Math.hypot(zD, wD);
-         pD > .001 && (this.heading = [zD / pD, wD / pD])
+       constructor(pp) {
+         this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.joinAdHold = !1, this.checkSendPath = () => {}, this.HP = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = vo … [truncated]
```

#### 62. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1217-L1231` → after: `L1339-L1442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1339-L1442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1339-L1442) · [Before (L1217-L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1217-L1231)

```diff
-       tapped(DD, zD, wD) {
-         const pD = rw(this.api, this.localPlayerId),
-           {
-             origin: sD,
-             direction: KD
-           } = this.api.getActionRay(),
-           rD = [...sD],
-           LD = [
-             [rD, [rD[0] + KD[0] * pD, rD[1] + KD[1] * pD, rD[2] + KD[2] * pD]]
-           ];
-         null !== DD && LD.push([rD, (0, yz.d)(DD)]), this.tap = {
-           lines: LD,
-           next: zD,
-           ms: wD
-         }
+       async connectToServer(pp, ip, cp) {
+         tp.c.reset(), pp.QJ = {
+           [pp.NJ]: {}
+         }, pp.Fpp = void 0, (0, Gp.k)(), (0, Lp.d)().removeAllEntityNames(), (0, Lp.d)().setEntityName(pp.NJ, this.userContext.getPlayerName()), (0, Ni.p)({
+           lobbyName: this.lobbyName
+         }), console.log("Waiting for clientConnection passed promise to resolve"), this.joinAdHold = (0, si.d)(), console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
+         const Sp = performance.now();
+         cp.aborted || (0, Ti.n)("wasm_core_ready", Sp);
+         const xp = (0, Gi.g)(this.userContext, (() => {
+           const {
+             roomName: Op,
+             joinOptions: op
+           } = (0, dp.d)(this.userContext, this.gameNameWithVariation, this.lobbyName, ip, (pp => bi.d.isUsingCustomGameTexturePack(pp)));
+           return op.joinAdHold = this.joinAdHold, op.renderBackend = (0, Ki.c)(pp.WU), (0, Fi.g)((() => this.colyClient.joinOrCreateUntil(cp, Op, op)), cp)
+         }));
+         return vp.m.GA("loadingScreenState", "loadingPage:joiningLobby"), await xp.then((ip => {
+ ... (88 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1233-L1234` → after: `L1444-L1447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1444-L1447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1444-L1447) · [Before (L1233-L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1233-L1234)

```diff
-       filled(DD, zD) {
-         this.tap = null, this.turnFrom(DD, zD), this.retry(zD)
+       setupServerListeners(pp, ip, cp) {
+         vp.m.GA("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new Mi(this.gameNameWithVariation, ip.zcp, pp, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
+         const op = ip.UDp();
+         this.incomingMsgInitialisor.setupOnMessageListeners(op, cp), (0, Op.onConnectionToServerReady)(op, ip), this.joinAdHold && vi.c.markAdmissionAwaited(), op.finishRegistration()
```

#### 64. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1236-L1283` → after: `L1449-L1450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1449-L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1449-L1450) · [Before (L1236-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1236-L1283)

```diff
-       arrived(DD, zD) {
-         const {
-           tap: wD
-         } = this;
-         if (null === wD || zD - wD.ms > 1500) return null;
-         const pD = (0, yz.d)(DD);
-         return (0, yz.f)(wD.next, DD) || wD.lines.some((DD => {
-           let [zD, wD] = DD;
-           return function(DD, zD, wD) {
-             const pD = [wD[0] - zD[0], wD[1] - zD[1], wD[2] - zD[2]],
-               sD = [DD[0] - zD[0], DD[1] - zD[1], DD[2] - zD[2]],
-               KD = pD[0] ** 2 + pD[1] ** 2 + pD[2] ** 2,
-               rD = 0 === KD ? 0 : Math.min(1, Math.max(0, (sD[0] * pD[0] + sD[1] * pD[1] + sD[2] * pD[2]) / KD));
-             return Math.hypot(sD[0] - pD[0] * rD, sD[1] - pD[1] * rD, sD[2] - pD[2] * rD)
-           }(pD, zD, wD) <= .9
-         })) ? (this.tap = null, this.turnFrom(DD, zD), wD.ms) : null
- ... (32 more removed lines; see GitHub link above)
+       dispose() {
+         this.connectionResume.dispose()
```

#### 65. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1285-L1288` → after: `L1452-L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1452-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1452-L1464) · [Before (L1285-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1285-L1288)

```diff
-     }
-     class gw {
-       constructor(DD, zD, wD) {
-         this.api = DD, this.localPlayerId = zD, this.juice = wD, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], th … [truncated]
+       onResumeGaveUp(pp, ip) {
+         (0, ai.NU)(new Error("Reconnect failed"), {
+           ...(0, Ji.l)(ip),
+           game: this.gameNameWithVariation
+         }), (0, li.reportClientError)("disconnect", "Reconnect failed", ip.reason), (0, Lp.d)().client.leaveGameUnwanted({
+           reason: {
+             translationKey: "general:lostConnection"
+           },
+           canReconnect: !pp,
+           canPlayAgain: pp,
+           requiresRefresh: !1,
+           automaticallyReconnect: !1
+         }), (0, Ui.navigatePreserveSearch)("/")
```

#### 66. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1290-L1297` → after: `L1466-L1467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1466-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1466-L1467) · [Before (L1290-L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1290-L1297)

```diff
-       QI(DD) {
-         const zD = "active" === DD[0] ? `${DD[1]}|${DD[3]}|${DD[4]}|${DD[5]}|${DD[6]}` : "";
-         if ("active" !== DD[0]) "built" === DD[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
-         else {
-           const [, , , , , , , wD, pD, sD, KD] = DD;
-           zD !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = wD) : wD === this.layerY ? this.burstUnlisted(pD) : wD > this.layerY && this.finishLayer(wD), this.layerY = wD, this.layerCells.has(wD) || this.layerCells.set(wD, pD.filter(Aw)), this.ghostCells = pD, th … [truncated]
-         }
-         zD !== this.blueprint && (this.blueprint = zD, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((DD => this.api.blockNameToBlockId(DD))), this.chunkWatch.watch([...this.ghostCells.filter(Aw), . … [truncated]
+       sinceJoined() {
+         return null === this.joinedAt ? "" : (0, Bi.d)(performance.now() - this.joinedAt)
```

#### 67. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1299-L1300` → after: `L1469-L1486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1469-L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1469-L1486) · [Before (L1299-L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1299-L1300)

```diff
-       finishLayer(DD) {
-         this.burstUnlisted([]), DD > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = DD)
+       onRoomLeft(pp, ip) {
+         var cp;
+         if (pp === Ip.e.gameOrPluginKick.code) return;
+         if (console.log(`Left room with code ${pp}`), pp === Ip.e.serverUpdating.code) return (0, li.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, Lp.d)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
+         this.HP.BU(`Kicked from server with code ${pp}`, new Error);
+         const Op = Object.keys(Ip.e).find((ip => Ip.e[ip].code === pp));
+         (0, li.reportClientError)("disconnect", "Left room", null !== Op && void 0 !== Op ? Op : String(pp));
+         const op = this.onConnectionToServerLost(pp, void 0, {
+           site: "leave",
+           closeReason: null !== ip && void 0 !== ip ? ip : "",
+           sinceJoined: this.sinceJoined()
+         });
+         (0, Lp.d)().client.leaveGameUnwanted({
+           reason: `You have disconnected from the server.\n${op.reason}`,
+           canReconnect: op.canReconnect,
+           requiresRefresh: op.requiresRefresh,
+ ... (2 more added lines; see GitHub link above)
```

#### 68. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1302-L1311` → after: `L1488-L1489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1488-L1489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1488-L1489) · [Before (L1302-L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1302-L1311)

```diff
-       DU() {
-         if (this.chunkWatch.changed()) return void this.refresh();
-         const DD = performance.now();
-         let zD = !1;
-         for (const [sD, KD] of this.foreseen) {
-           var wD;
-           if (DD - KD > 1e3) this.foreseen.delete(sD), zD = !0, (null === (wD = this.lastFilled) || void 0 === wD ? void 0 : wD.join()) === sD && (this.lastFilled = this.lastSeenFilled)
-         }
-         const pD = Rw(this.api.getPositionView(this.localPlayerId));
-         (zD || pD.some(((DD, zD) => DD !== this.playerCells[zD]))) && this.showNext()
+       getUpdateWaitingUrl() {
+         return (0, fi.E)(this.gameNameWithVariation, this.lobbyName)
```

#### 69. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1313-L1365` → after: `L1491-L1492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1491-L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1491-L1492) · [Before (L1313-L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1313-L1365)

```diff
-       dispose() {
-         this.meshes.dispose(), this.outline.dispose()
-       }
-       burstUnlisted(DD) {
-         const zD = new Set;
-         for (let sD = 0; sD < DD.length; sD += 4) zD.add(`${DD[sD]},${DD[sD+1]},${DD[sD+2]}`);
-         const wD = [],
-           {
-             ghostCells: pD
-           } = this;
-         for (let sD = 0; sD < pD.length; sD += 4) {
-           const DD = `${pD[sD]},${pD[sD+1]},${pD[sD+2]}`;
-           !zD.has(DD) && this.open.delete(DD) && wD.push(this.filledCell(sD))
-         }
-         this.burst(wD)
-       }
- ... (37 more removed lines; see GitHub link above)
+       goToUpdateWaiting() {
+         (0, Ui.navigatePreserveSearch)(this.getUpdateWaitingUrl())
```

#### 70. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1367` → after: `L1494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1494) · [Before (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1367)

```diff
-       showNext() {
+       onConnectionToServerLost(pp, ip, cp) {
```

#### 71. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1369-L1390` → after: `L1496-L1519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1496-L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1496-L1519) · [Before (L1369-L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1369-L1390)

```diff
-         const zD = this.api.getPositionView(this.localPlayerId);
-         this.playerCells.splice(0, 1 / 0, ...Rw(zD));
-         const wD = this.lastFilled;
-         this.nextCell = this.pickNext(null === wD ? [zD[0], zD[1] + 1, zD[2]] : (0, yz.d)(wD), (() => !1)), this.outline.show(null !== (DD = this.aimed) && void 0 !== DD ? DD : this.nextCell)
-       }
-       pickNext(DD, zD) {
-         const wD = this.api.getPositionView(this.localPlayerId),
-           pD = [wD[0], wD[1] + kz.f.eG * kz.f.playerEyeToHeightRatio, wD[2]],
-           sD = rw(this.api, this.localPlayerId),
-           {
-             nextCells: KD
-           } = this,
-           rD = DD => [KD[DD], KD[DD + 1], KD[DD + 2]],
-           LD = function(DD, zD, wD, pD, sD, KD) {
-             let rD = -1,
-               LD = -1,
- ... (6 more removed lines; see GitHub link above)
+         let op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         if (null !== (Op = ip) && void 0 !== Op && Op.endsWith(Ip.l) && (this.userContext.invalidateTrafficCode(), ip = ip.replace(Ip.l, "")), pp === Ip.e.outdatedVersion.code) return console.error("Outdated client with version ", Sp.c, ", refreshing page"), (0, Hp.reloadBloxd)() … [truncated]
+           reason: "Outdated client",
+           requiresRefresh: !0,
+           canReconnect: !1
+         };
+         if (pp === Ip.e.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, Hp.reloadBloxd)(), {
+           reason: "Failed to load recaptcha",
+           requiresRefresh: !0,
+           canReconnect: !1
+         };
+         for (const Sp in Ip.e) {
+           const {
+             code: cp,
+             text: Op,
+             canReconnect: op
+ ... (8 more added lines; see GitHub link above)
```

#### 72. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1392-L1445` → after: `L1521-L1528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1521-L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1521-L1528) · [Before (L1392-L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1392-L1445)

```diff
-             return rD
-           }(KD, 4, DD, (DD => 1 === KD[DD + 3]), (DD => {
-             const pD = rD(DD);
-             return mz(pD, wD) || this.foreseen.has(pD.join()) || zD(pD)
-           }), (DD => function(DD, zD, wD) {
-             return (zD[0] + .5 - DD[0]) ** 2 + (zD[1] + .5 - DD[1]) ** 2 + (zD[2] + .5 - DD[2]) ** 2 <= wD ** 2
-           }(pD, rD(DD), sD)));
-         return -1 === LD ? null : rD(LD)
-       }
-       afterRender(DD) {
-         var zD;
-         this.turn.look(DD);
-         const wD = this.api.getTargetedBlock();
-         this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === wD ? null : wD.position), this.outline.show(null !== (zD = this.aimed) && void 0 !== zD ? zD : this.nextCell)
-       }
-       isHolding(DD) {
- ... (38 more removed lines; see GitHub link above)
+           }
+         }
+         return console.log("Didn't match known error, leaving game"), (0, Bi.g)(pp) || op ? console.warn("Connection lost", pp, ip) : this.logUnrecognisedConnectionLoss(pp, ip, cp), {
+           reason: `Either your internet isn't working or this is a bug.\nCode: ${pp}`,
+           requiresRefresh: !1,
+           canReconnect: !1,
+           gameServerUnreachable: op ? "failed" : void 0
+         }
```

#### 73. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1447-L1464` → after: `L1530-L1537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1530-L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1530-L1537) · [Before (L1447-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1447-L1464)

```diff
-     }
- 
-     function Rw(DD) {
-       let [zD, wD, pD] = DD;
-       const sD = kz.f.mG / 2;
-       return [Math.floor(zD), Math.floor(wD), Math.floor(pD), Math.floor(zD - sD), Math.floor(zD + sD), Math.floor(wD + kz.f.eG), Math.floor(pD - sD), Math.floor(pD + sD)]
-     }
- 
-     function Aw(DD, zD) {
-       return zD % 4 !== 3
-     }
- 
-     function Uw(DD, zD, wD, pD, sD) {
-       if (!DD.isBlockInLoadedChunk(zD, pD - 6, wD) || !DD.isBlockInLoadedChunk(zD, pD + 6 + sD, wD) || !DD.canModifyBlockAt(zD, pD, wD)) return NaN;
-       let KD = pD - 1;
-       if (0 !== DD.getBlockId(zD, KD, wD)) {
- ... (2 more removed lines; see GitHub link above)
+       logUnrecognisedConnectionLoss(pp, ip, cp) {
+         (0, ai.NU)(new Error("Unrecognised connection loss"), {
+           code: String(pp),
+           cause: null !== ip && void 0 !== ip ? ip : "",
+           ...cp,
+           game: this.gameNameWithVariation,
+           ...(0, Bi.l)()
+         })
```

#### 74. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1476-L1482` → after: `L1540-L1830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1540-L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1540-L1830) · [Before (L1476-L1482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1476-L1482)

```diff
- 
-     function Iw(DD) {
-       const zD = new Map;
-       for (const rD of DD) {
-         var wD;
-         if (Number.isNaN(rD)) return null;
-         zD.set(rD, (null !== (wD = zD.get(rD)) && void 0 !== wD ? wD : 0) + 1)
+   },
+   39157: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => zc,
+       h: () => cO
+     });
+     var Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap, Pp, Wp, yp, Up, wp, vp, tp, Hp, dp, ep, jp, kp, mp, Rp, qp, Mp, Cp, Ep, Xp, lp, Qp, Jp, Bp, Np, Tp, fp, bp, hp, ap, np, Fp, gp, Gp, rp, Zp, zp, sp, Kp, Vp, ii, ci, Oi, oi, Ii, Si, xi, Li, Yi, Di, Ai, Pi, Wi, yi, Ui, wi, vi, ti, Hi, di,  … [truncated]
+       cc = cp(37387),
+       Oc = cp(39164),
+       oc = cp(39169),
+       Ic = cp(9253),
+       Sc = cp(636),
+       xc = cp(629),
+       Lc = cp(36994);
+     let Yc = (Op = (0, Ic.type)("number"), op = (0, Ic.type)("number"), Ip = (0, Ic.type)("number"), Sp = (0, Ic.type)("number"), xp = (0, Ic.type)("number"), Lp = (0, Ic.type)("number"), Yp = (0, Ic.type)("string"), Dp = class extends Ic.Schema {
+         constructor() {
+ ... (275 more added lines; see GitHub link above)
```

#### 75. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1484-L1490` → after: `L1832-L1852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1832-L1852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1832-L1852) · [Before (L1484-L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1484-L1490)

```diff
-       let pD = NaN,
-         sD = 0;
-       for (const [rD, LD] of zD)(LD > sD || LD === sD && rD < pD) && (pD = rD, sD = LD);
-       let KD = 0;
-       for (const rD of DD) KD += Math.abs(rD - pD);
-       return KD
-     }
+     }, Ti = (0, oc.b)(Ni.prototype, "meshKind", [li], {
+       configurable: !0,
+       enumerable: !0,
+       writable: !0,
+       initializer: null
+     }), fi = (0, oc.b)(Ni.prototype, "meshOpts", [Qi], {
+       configurable: !0,
+       enumerable: !0,
+       writable: !0,
+       initializer: null
+     }), bi = (0, oc.b)(Ni.prototype, "pose", [Ji], {
+       configurable: !0,
+       enumerable: !0,
+       writable: !0,
+       initializer: null
+     }), ai = (0, oc.b)(Ni.prototype, "leaderboardTop", [Bi], {
+ ... (5 more added lines; see GitHub link above)
```

#### 76. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1492-L1514` → after: `L1854-L1919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1854-L1919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1854-L1919) · [Before (L1492-L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1492-L1514)

```diff
-     function Bw(DD, zD, wD, pD) {
-       const {
-         eye: sD,
-         forward: KD,
-         tanHalfFovX: rD,
-         tanHalfFovY: LD
-       } = DD, [cD, gD] = function(DD) {
-         let [zD, wD, pD] = DD;
-         const sD = Math.hypot(zD, pD),
-           [KD, rD] = [pD / sD, -zD / sD];
-         return [
-           [KD, 0, rD],
-           [wD * rD, pD * KD - zD * rD, -wD * KD]
-         ]
-       }(KD), [RD, AD] = [zD * rD, wD * LD], UD = KD[0] + RD * cD[0] + AD * gD[0], fD = KD[1] + AD * gD[1], ID = KD[2] + RD * cD[2] + AD * gD[2], BD = (pD - sD[1]) / fD;
-       return BD > 0 && BD < 1 / 0 ? [sD[0] + BD * UD, sD[2] + BD * ID] : null
- ... (7 more removed lines; see GitHub link above)
+     function yc(pp) {
+       return Object.keys(Ic.Metadata.getFields(pp))
+     }
+     const Uc = yc(Wc);
+     for (const OO of Sc.q)
+       if (!Uc.includes(OO)) throw new Error(`Mob Schema is missing a networked property: "${OO}"`);
+     const wc = yc((ni = (0, Ic.type)("string"), Fi = (0, Ic.type)("float32"), gi = (0, Ic.type)("float32"), Gi = (0, Ic.type)("float32"), ri = (0, Ic.type)("float32"), Zi = class extends Ac {
+       constructor() {
+         super(...arguments), (0, Oc.c)(this, "soundName", zi, this), (0, Oc.c)(this, "volume", si, this), (0, Oc.c)(this, "refDistance", Ki, this), (0, Oc.c)(this, "maxHearDist", Vi, this), (0, Oc.c)(this, "rate", pc, this)
+       }
+     }, zi = (0, oc.b)(Zi.prototype, "soundName", [ni], {
+       configurable: !0,
+       enumerable: !0,
+       writable: !0,
+       initializer: function() {
+         return ""
+ ... (50 more added lines; see GitHub link above)
```

#### 77. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1517-L1594` → after: `L1922-L1948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1922-L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1922-L1948) · [Before (L1517-L1594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1517-L1594)

```diff
-         this.api = DD, this.localPlayerId = zD, this.placing = null, this.view = null, this.camera = {
-           eye: [0, 0, 0],
-           forward: [0, 0, 1],
-           tanHalfFovX: 1,
-           tanHalfFovY: 1
-         }, this.chunkWatch = void 0, this.meshes = void 0, this.start = DD => {
-           var zD, wD, pD, KD;
-           const rD = null !== (zD = null === (wD = this.placing) || void 0 === wD ? void 0 : wD.rotation) && void 0 !== zD ? zD : 0,
-             {
-               size: LD
-             } = mD(DD, rD),
-             cD = this.api.PJ(this.localPlayerId),
-             [gD, RD] = null !== (pD = null !== (KD = function(DD, zD, wD) {
-               const [pD, sD, KD] = zD, [rD, LD, cD] = [Math.floor(wD[0]), Math.floor(wD[1]), Math.floor(wD[2])], gD = 6 + Math.max(pD, KD) / 2, [RD, AD] = [Math.ceil(gD + pD / 2), Math.ceil(gD + KD / 2)], [UD, fD] = [rD - RD, cD - AD], [ID, BD] = [2 * RD + 1, 2 * AD + 1], GD = ne … [truncated]
-               for (let JD = 0; JD < ID; JD++)
-                 for (let zD = 0; zD < BD; zD++) {
- ... (62 more removed lines; see GitHub link above)
+         this.bloxd = pp, this.eId = ip, this.HP = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub  … [truncated]
+       }
+       initClient(pp) {
+         var ip, cp, Op;
+         this.colyseusEntity = pp, this.meshKind = pp.meshKind, this.meshOpts = pp.meshOpts, this.leaderboardTop = pp.leaderboardTop, this.HP.Yk.add([pp.x, pp.y, pp.z], 1, 1, null, null, !1, !1, this.eId), this.HP.Yk.vJ(this.eId, "smoothToServerPos");
+         const op = "Person" === this.meshKind;
+         this.HP.Yk.vJ(this.eId, "meshRotation", {
+           isServerControlled: !0,
+           ...op ? {
+             defaultRotationsPerSecond: .5
+           } : {},
+           childrenNodeParams: op ? [{
+             nodeName: "HeadMesh",
+             softTolerance: qc.k,
+             hardTolerance: null
+           }] : []
+ ... (11 more added lines; see GitHub link above)
```

#### 78. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1596-L1626` → after: `L1950-L1962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1950-L1962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1950-L1962) · [Before (L1596-L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1596-L1626)

```diff
-         }, this.dragTo = (DD, zD) => {
-           const wD = this.placing.drag,
-             pD = wD && Bw(wD.view, DD, zD, wD.level);
-           null !== wD && null !== pD && this.moveTo(wD.corner[0] + Math.round(pD[0] - wD.ground[0]), wD.corner[1] + Math.round(pD[1] - wD.ground[1]))
-         }, this.endDrag = () => {
-           this.placing.drag = null
-         }, this.tap = () => {
-           const DD = this.view;
-           DD.waiting || (DD.blocked ? this.KG({
-             ...DD,
-             refusals: ++this.placing.refusals
-           }) : this.build())
-         }, this.build = () => {
-           const DD = this.placing,
-             {
-               id: zD,
- ... (15 more removed lines; see GitHub link above)
+           const Sp = pp.mesh;
+           if (Sp)
+             for (const xp of [Sp, ...Sp.getChildMeshes(!1)]) "Ow" in xp && !xp.name.startsWith("Cape|") && (xp.Ow = ip)
+         };
+         this.canAttackSub = ic.m.subscribe(`otherEntitySettings|${this.eId}|canAttack`, Ip), this.interactableSub = ic.m.subscribe(`otherEntitySettings|${this.eId}|interactable`, Ip), this.overlayColourSub = ic.m.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayCol … [truncated]
+           this.updateOverlayColour(pp)
+         })), this.opacitySub = ic.m.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (pp => {
+           this.updateOpacity(pp)
+         })), this.zIndexSub = ic.m.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (pp => {
+           this.updateZIndex(pp)
+         }));
+         const Sp = this.HP.QJ[this.HP.NJ][this.eId];
+         this.updateOverlayColour(null !== (ip = null === Sp || void 0 === Sp ? void 0 : Sp.overlayColour) && void 0 !== ip ? ip : null), this.updateOpacity(null !== (cp = null === Sp || void 0 === Sp ? void 0 : Sp.opacity) && void 0 !== cp ? cp : 1), this.updateZIndex(null !== (O … [truncated]
```

#### 79. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1628-L1641` → after: `L1964-L1984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1964-L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1964-L1984) · [Before (L1628-L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1628-L1641)

```diff
-       DU() {
-         const DD = this.placing;
-         null !== DD && (null !== DD.sent && !DD.sent.timedOut && performance.now() - DD.sent.atMs > 3e3 ? (DD.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(DD) || this.chunkWatch.changed()) && this.update())
-       }
-       afterRender(DD) {
-         const zD = this.placing;
-         null !== zD && (! function(DD, zD) {
-           for (let wD = 0; wD < 3; wD++) zD.eye[wD] = DD.cameraPosition[wD], zD.forward[wD] = DD.cameraDirection[wD];
-           zD.tanHalfFovX = DD.tanHalfFovX, zD.tanHalfFovY = DD.tanHalfFovY
-         }(DD, this.camera), null !== zD.hover && this.moveCentreTo(this.camera, zD.hover[0], zD.hover[1]))
-       }
-       QI(DD) {
-         const zD = this.placing;
-         if (null === zD || null === zD.sent || "active" !== DD[0]) return;
+       onChangeClient(pp, ip) {
+         if ("xRotation" === pp || "yRotation" === pp || "zRotation" === pp)(0, Rc.x)(this.HP, this.eId, pp, ip);
+         else if ("pose" === pp) {
+           const pp = this.HP.Yk.Jip(this.eId);
+           pp && (pp.pose = ip || "standing")
+         } else "meshKind" === pp || "meshOpts" === pp ? (this[pp] = ip, this.queueMeshRebuild()) : "name" === pp && "" !== ip ? this.updateHidingMeshMgr() : "leaderboardTop" === pp && (this.leaderboardTop = ip, ic.m.GA(`leaderboardTop|${this.eId}`, ip))
+       }
+       disposeClient() {
+         this.Ry = !0, this.HP.Yk.deleteEntity(this.eId), ic.m.unsubscribe(this.canSeeSub), ic.m.unsubscribe(this.canAttackSub), ic.m.unsubscribe(this.interactableSub), ic.m.unsubscribe(this.overlayColourSub), ic.m.unsubscribe(this.opacitySub), ic.m.unsubscribe(this.zIndexSub), ic … [truncated]
+       }
+       getCurrentHidingMeshMgrState() {
+         var pp, ip;
+         return {
+           canSee: null !== (pp = null === (ip = this.HP.QJ[this.HP.NJ][this.eId]) || void 0 === ip ? void 0 : ip.canSee) && void 0 !== pp && pp,
+           name: this.colyseusEntity.name,
+           meshKind: this.meshKind,
+ ... (5 more added lines; see GitHub link above)
```

#### 80. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1643-L1645` → after: `L1986-L2110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1986-L2110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L1986-L2110) · [Before (L1643-L1645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1643-L1645)

```diff
-           sent: wD
-         } = zD, [, pD, sD, KD, rD, LD, cD] = DD;
-         sD && pD === zD.id && cD === wD.rotation && KD === wD.corner[0] && rD === wD.corner[1] && LD === wD.corner[2] && this.close()
+           HP: Op
+         } = this, {
+           Yk: op
+         } = Op, Ip = this.getCurrentHidingMeshMgrState();
+         if ((0, uc.Td)(this.previousHidingMeshManagerState, Ip)) return;
+         if (this.previousHidingMeshManagerState = Ip, op.HJ(this.eId, "hidingMeshManager"), null === (pp = Op.QJ[Op.NJ][this.eId]) || void 0 === pp || !pp.canSee) return;
+         const Sp = this.getSpec();
+         if (!Sp) return;
+         const {
+           type: xp,
+           opts: Lp
+         } = Sp;
+         "Person" === xp && (Lp.textures = (0, mc.r)(Lp.textures)), Lp.eId = this.eId, op.vJ(this.eId, "hidingMeshManager", {
+           addMeshComponent: () => {
+             var pp, ip, cp;
+             "Leaderboard" === xp && (Lp.leaderboardTop = this.leaderboardTop);
+ ... (109 more added lines; see GitHub link above)
```

#### 81. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1647-L1648` → after: `L2112-L2115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2112-L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L2112-L2115) · [Before (L1647-L1648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1647-L1648)

```diff
-       endFromServer() {
-         null !== this.placing && this.close()
+       queueMeshRebuild() {
+         this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
+           this.meshRebuildQueued = !1, this.Ry || this.updateHidingMeshMgr()
+         })))
```

#### 82. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1650-L1651` → after: `L2117-L2200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2117-L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L2117-L2200) · [Before (L1650-L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1650-L1651)

```diff
-       dispose() {
-         this.meshes.dispose()
+       getSpec() {
+         return (0, ec.h)({
+           meshKind: this.meshKind,
+           meshOpts: this.meshOpts
+         })
+       }
+       updateOverlayColour(pp) {
+         var ip, cp;
+         if ("Person" !== this.meshKind) return;
+         let Op = new jc.b(0, 0, 0, 0);
+         if (null !== pp) {
+           const ip = (0, uc.$)(pp);
+           Op = new jc.b(ip[0] / 255, ip[1] / 255, ip[2] / 255, .5)
+         }
+         const op = null !== (ip = null === (cp = this.HP.Yk.Rip(this.eId)) || void 0 === cp ? void 0 : cp.FQ) && void 0 !== ip ? ip : null;
+         null !== op && kc.d.Player.meshApi.updateMeshOverlayColour(op, Op)
+ ... (68 more added lines; see GitHub link above)
```

#### 83. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1653-L1658` → after: `L2202-L2203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2202-L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L2202-L2203) · [Before (L1653-L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1653-L1658)

```diff
-       cornerOnTarget(DD) {
-         let [zD, , wD] = DD;
-         const pD = this.api.getTargetedBlock();
-         if (null === pD) return null;
-         const [sD, , KD] = pD.position;
-         return [sD - Math.floor(zD / 2), KD - Math.floor(wD / 2)]
+       setup() {
+         this.setupEntityHandlers(), this.setupItemHandlers(), this.zcp.onStateChange(this.setUpPromoted), this.HP.on("beforeInputs", this.onFrame), this.HP.on("LP", this.gH)
```

#### 84. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1660` → after: `L2205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L2205) · [Before (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1660)

```diff
-       playerLevel() {
+       setUpQueuedEntities(pp) {
```

#### 85. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1662-L1667` → after: `L2207-L2213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2207-L2213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L2207-L2213) · [Before (L1662-L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1662-L1667)

```diff
-         const [zD, wD, pD] = this.api.PJ(this.localPlayerId);
-         if (null !== (DD = this.api.getLocalPlayerMovement()) && void 0 !== DD && DD.onGround) return Math.ceil(wD - .01);
-         const [sD, KD, rD] = [Math.floor(zD), Math.floor(wD), Math.floor(pD)];
-         for (let LD = KD; LD >= KD - 2; LD--)
-           if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(sD, LD, rD))) return LD + 1;
-         return KD
+         if ((null === (ip = (0, nc.d)().client.getMsgHandler()) || void 0 === ip ? void 0 : ip.zcp) !== this.zcp) return this.HP.off("beforeInputs", this.onFrame), this.HP.off("LP", this.gH), this.queuedSetups.clear(), void this.promotedSetups.clear();
+         if (pp && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
+           for (Ec().copy(sc, this.HP.Yk.sH(this.HP.NJ)); this.setupBudgetLeftMs > 0;) {
+             const pp = this.nearestQueued(sc);
+             if (null === pp) return;
+             this.setUpIfQueued(pp), this.setUpPromoted()
+           }
```

#### 86. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1669-L1672` → after: `L2215-L2223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2215-L2223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L2215-L2223) · [Before (L1669-L1672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1669-L1672)

```diff
-       followPlayerLevel(DD) {
-         if (Mw(DD)) return !1;
-         const zD = this.playerLevel();
-         return zD !== DD.corner[1] && (DD.corner[1] = zD, !0)
+       nearestQueued(pp) {
+         let ip = null,
+           cp = 1 / 0;
+         return this.queuedSetups.forEach(((Op, op) => {
+           const Ip = function(pp, ip) {
+             return (ip.x - pp[0]) ** 2 + (ip.y - pp[1]) ** 2 + (ip.z - pp[2]) ** 2
+           }(pp, Op);
+           (null === ip || Ip < cp) && (ip = op, cp = Ip)
+         })), ip
```

#### 87. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1674-L1679` → after: `L2225-L2282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2225-L2282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L2225-L2282) · [Before (L1674-L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1674-L1679)

```diff
-       moveCentreTo(DD, zD, wD) {
-         const pD = this.placing,
-           sD = Bw(DD, zD, wD, pD.corner[1]);
-         if (null !== sD) {
-           const [DD, , zD] = mD(pD.id, pD.rotation).size;
-           this.moveTo(Math.round(sD[0] - DD / 2), Math.round(sD[1] - zD / 2))
+       setUpOrQueue(pp, ip) {
+         0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(pp, ip) ? this.timedSetup(pp, ip) : this.queuedSetups.set(ip, pp)
+       }
+       mustSetUpNow(pp, ip) {
+         const cp = this.HP.Fpp;
+         if (ip === cp) return !0;
+         const Op = this.roomState.entities.get(cp);
+         return !(!Op || Op.ridingVehicleEId !== ip && Op.followingEId !== ip) || (Kc(pp.type) === vc.b || (0, nc.d)().getFollowingEntities(ip).length > 0)
+       }
+       setUpIfQueued(pp) {
+         const ip = this.queuedSetups.get(pp);
+         ip && (this.queuedSetups.delete(pp), this.timedSetup(ip, pp))
+       }
+       promoteIfQueued(pp) {
+         null !== pp && this.queuedSetups.has(pp) && this.promotedSetups.add(pp)
+       }
+ ... (42 more added lines; see GitHub link above)
```

#### 88. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1682-L1692` → after: `L2288-L2334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2288-L2334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L2288-L2334) · [Before (L1682-L1692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1682-L1692)

```diff
-       moveTo(DD, zD) {
-         let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
-         const pD = this.placing;
-         if (Mw(pD)) return;
-         const [sD, KD, rD] = pD.corner;
-         if (this.centreOnPlot(sD, rD) && !this.centreOnPlot(DD, zD, wD))
-           if (this.centreOnPlot(DD, rD, wD)) zD = rD;
-           else {
-             if (!this.centreOnPlot(sD, zD, wD)) return;
-             DD = sD
-           } DD === sD && zD === rD && wD === pD.rotation || (pD.rotation = wD, pD.corner = [DD, KD, zD], this.update())
+       setupMapSchemaCallbacks(pp, ip, cp, Op) {
+         const op = cp[Op],
+           Ip = new Map;
+         op.Lk(((cp, op) => {
+           if (this.onEntityFieldChange(pp, ip, Op, {
+               key: op,
+               value: cp
+             }), !(cp instanceof Ic.Schema)) return;
+           const Sp = this.createStateCallbacks(cp),
+             xp = [];
+           for (const Ip of yc(cp.constructor)) xp.push(this.listenForFutureChanges(Sp, Ip, (() => {
+             this.onEntityFieldChange(pp, ip, Op, {
+               key: op,
+               value: cp
+             })
+           })));
+ ... (31 more added lines; see GitHub link above)
```

#### 89. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1694-L1695` → after: `L2336-L2377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2336-L2377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L2336-L2377) · [Before (L1694-L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1694-L1695)

```diff
-       centreOnPlot(DD, zD) {
-         let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
+       listenForFutureChanges(pp, ip, cp) {
+         return pp.listen(ip, cp, !1)
+       }
+       onEntityFieldChange(pp, ip, cp, Op) {
+         switch (cp) {
+           case "ridingVehicleEId": {
+             this.promoteIfQueued(Op);
+             const ip = this.HP.Yk.Jip((0, bc.b)(pp));
+             ip && (ip.ridingVehicleEId = Op);
+             break
+           }
+           case "armour":
+             this.handleArmourChange(pp, Op);
+             break;
+           case "followingEId":
+             this.promoteIfQueued(Op), this.handleFollowingEIdChange(pp, ip, Op);
+ ... (26 more added lines; see GitHub link above)
```

#### 90. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1697-L1700` → after: `L2379-L2382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2379-L2382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L2379-L2382) · [Before (L1697-L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1697-L1700)

```diff
-           id: pD,
-           corner: sD
-         } = this.placing, [KD, , rD] = mD(pD, wD).size;
-         return this.api.canModifyBlockAt(DD + Math.floor(KD / 2), sD[1], zD + Math.floor(rD / 2))
+           key: op,
+           value: Ip
+         } = ip;
+         (0, kc.v)(pp, op, null !== (cp = null === Ip || void 0 === Ip ? void 0 : Ip.itemName) && void 0 !== cp ? cp : null, null !== (Op = null === Ip || void 0 === Ip ? void 0 : Ip.enchantmentTier) && void 0 !== Op ? Op : null)
```

#### 91. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1702-L1703` → after: `L2384-L2413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2384-L2413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L2384-L2413) · [Before (L1702-L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1702-L1703)

```diff
-       close() {
-         this.placing = null, this.meshes.dispose(), this.KG(null)
+       handleFollowingEIdChange(pp, ip, cp) {
+         const Op = (0, bc.b)(pp),
+           op = Op === this.HP.NJ;
+         if (this.HP.Yk.HJ(Op, this.HP.Yk.names.Qm), cp) this.HP.Yk.HJ(Op, "smoothToServerPos"), this.HP.Yk.vJ(Op, this.HP.Yk.names.Qm, {
+           vy: (0, bc.b)(cp),
+           offset: Array.from(ip.followingOffset),
+           Mcp: ip.shouldMatchFollowingEntityRotation,
+           Qcp: !0,
+           Jcp: (pp, Op) => {
+             if (Ec().copy(pp, ip.followingOffset), ip.ridingVehicleEId === cp) {
+               const ip = (0, bc.b)(cp),
+                 op = (0, nc.d)().getEntityHeading(ip, Op);
+               Ec().wi(pp, pp, Ec().ZERO, op)
+             }
+           }
+         });
+ ... (14 more added lines; see GitHub link above)
```

#### 92. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1705` → after: `L2415-L2428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2415-L2428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L2415-L2428) · [Before (L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1705)

```diff
-       update() {
+       handleScaleChange(pp, ip) {
+         const cp = (0, bc.b)(pp);
+         if (ic.m.GA(`entityScale|${cp}`, ip), cp === this.HP.NJ) {
+           var Op;
+           (0, nc.d)().removeFromEyeHeightCache(cp);
+           const pp = this.HP.Yk.xip(this.HP.NJ),
+             ip = null !== (Op = null === pp || void 0 === pp ? void 0 : pp.physicsState) && void 0 !== Op ? Op : {
+               type: hc.l.DEFAULT,
+               tier: null
+             };
+           return void(0, nc.d)().updatePositionAndPhysics(this.HP.NJ, ip, !1)
+         }
+         const op = (0, nc.d)().getLifeformType(cp);
+         if (null === op) return;
```

#### 93. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1707-L1712` → after: `L2430-L2795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2430-L2795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L2430-L2795) · [Before (L1707-L1712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1707-L1712)

```diff
-           id: DD,
-           rotation: zD,
-           corner: wD,
-           refusals: pD
-         } = this.placing, sD = new zw, KD = [];
-         let rD = !1,
+           physicsBodyWidth: Ip,
+           physicsBodyHeight: Sp
+         } = (0, Gc.f)(ip, op);
+         this.HP.Yk.kcp(cp, Ip, Sp, Ip)
+       }
+       handleBaseRenderHeadingChange(pp, ip) {
+         const cp = this.HP.Yk.getState(pp, "meshRotation");
+         cp && (cp.baseRenderRotation[1] = ip);
+         for (const Op of (0, nc.d)().getFollowingEntities(pp)) {
+           const pp = this.HP.Yk.getState(Op, "meshRotation"),
+             cp = this.HP.Yk.qcp(Op);
+           pp && cp.Mcp && (pp.baseRenderRotation[1] = ip)
+         }
+       }
+       handleFollowingOffsetChange(pp, ip) {
+         const cp = this.HP.Yk.qcp((0, bc.b)(pp));
+ ... (350 more added lines; see GitHub link above)
```

#### 94. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1714-L1716` → after: `L2797-L2912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2797-L2912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L2797-L2912) · [Before (L1714-L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1714-L1716)

```diff
-         for (const {
-             offset: RD,
-             block: AD
+         return this.clickDownDurations.forEach((Op => {
+           Op.atTime > Date.now() - pp && (ip++, cp = Math.max(cp, Op.dur))
+         })), `${ip}:${cp}`
+       }
+     }
+     var mp = cp(36693),
+       Rp = cp(39261),
+       qp = cp(25),
+       Mp = cp(2849),
+       Cp = cp(1349),
+       Ep = cp(2479),
+       Xp = cp(4532),
+       lp = cp(131),
+       Qp = cp(38374),
+       Jp = cp(38601),
+       Bp = cp(640),
+ ... (100 more added lines; see GitHub link above)
```

#### 95. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1718-L1734` → after: `L2914-L3140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2914-L3140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L2914-L3140) · [Before (L1718-L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1718-L1734)

```diff
-           of mD(DD, zD).cells) {
-           const [DD, zD, pD] = [wD[0] + RD[0], wD[1] + RD[1], wD[2] + RD[2]];
-           KD.push(DD, zD, pD);
-           const cD = !this.api.canModifyBlockAt(DD, zD, pD),
-             gD = this.api.getBlockId(DD, zD, pD),
-             UD = !xz(gD) && !Cz(this.api.blockNameToBlockId(AD), gD);
-           rD ||= cD, LD += UD ? 1 : 0, cD || UD ? sD.add(DD, zD, pD, Dw, qz) : sD.add(DD, zD, pD, bz(AD), hw, Zz(AD))
-         }
-         this.chunkWatch.watch(KD), this.meshes.show(sD.toArray());
-         const cD = this.view,
-           gD = Mw(this.placing);
-         (null === cD || void 0 === cD ? void 0 : cD.id) === DD && cD.blocked === rD && cD.toClear === LD && cD.waiting === gD && cD.refusals === pD || this.KG({
-           id: DD,
-           blocked: rD,
-           toClear: LD,
-           waiting: gD,
- ... (1 more removed lines; see GitHub link above)
+           if (null !== (op = (0, Mp.d)().client) && void 0 !== op && null !== (Ip = op.freeCameraController) && void 0 !== Ip && Ip.isKeyPressOverriden(ip)) return;
+           pp.Yk.wcp()[Op] = cp
+         };
+         pp.inputs.down.on(Op, (pp => ip(pp, !0))), pp.inputs.up.on(Op, (pp => ip(pp, !1)))
+       }
+       pp.inputs.down.on("crouch", (() => {
+         if (Ii()) return;
+         if (!pp.Tu.canCrouch) return;
+         const ip = pp.Yk.wcp();
+         qp.c.get("clientEscMenuOptions").crouchIsToggle && (ip.crouchToggled = !ip.crouchToggled && !ip.padSneakToggled), ip.padSneakToggled = !1
+       }));
+       const cp = () => {
+         const pp = ip();
+         pp.isGun() && pp.inaccuracyCalculator.jump()
+       };
+       pp.inputs.down.on("jump", (pp => {
+ ... (211 more added lines; see GitHub link above)
```

#### 96. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1737-L1738` → after: `L3342-L3355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3342-L3355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L3342-L3355) · [Before (L1737-L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1737-L1738)

```diff
-       KG(DD) {
-         this.view = DD, RD.l.KG(Gw, DD, !0)
+     }), wi = function(pp) {
+       function ip(...pp) {
+         return pp[Mi[13]] = Mi[2], typeof Hi[pp[Mi[1]]] === Mi[18] ? Hi[pp[Mi[1]]] = function(...pp) {
+           for (li(pp[Mi[13]] = Mi[2], pp[Mi[27]] = '=6,v&}48u{;w(*^2[]10/x95"`yq3SAN|LTUOKeJhRoDBEtCibWranFmHfZQgjsGPc$z_.7)+lXYp?#<V~@>%k:!IMd', pp[Mi[0]] = "" + (pp[Mi[1]] || ""), pp[Mi[6]] = pp[Mi[0]].length, pp[Mi[10]] = [], pp[Mi[46]] = Mi[1], pp[Mi[33]] = Mi[1], pp[-Mi[49]] … [truncated]
+             if (pp[-Mi[48]] = pp[Mi[27]].indexOf(pp[Mi[0]][pp[Mi[47]]]), pp[-Mi[48]] !== -Mi[2])
+               if (pp[-Mi[49]] < Mi[1]) pp[-Mi[49]] = pp[-Mi[48]];
+               else {
+                 li(pp[-Mi[49]] += pp[-Mi[48]] * Mi[37], pp[Mi[46]] |= pp[-Mi[49]] << pp[Mi[33]], pp[Mi[33]] += (pp[-Mi[49]] & Mi[39]) > Mi[40] ? Mi[30] : Mi[41]);
+                 do {
+                   li(pp[Mi[10]].push(pp[Mi[46]] & Mi[12]), pp[Mi[46]] >>= Mi[11], pp[Mi[33]] -= Mi[11])
+                 } while (pp[Mi[33]] > Mi[20]);
+                 pp[-Mi[49]] = -Mi[2]
+               } return pp[-Mi[49]] > -Mi[2] && pp[Mi[10]].push((pp[Mi[46]] | pp[-Mi[49]] << pp[Mi[33]]) & Mi[12]), Ei(pp[Mi[10]])
+         }(di[pp[Mi[1]]]) : Hi[pp[Mi[1]]]
```

#### 97. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1743-L1746` → after: `L3766-L3771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3766-L3771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L3766-L3771) · [Before (L1743-L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1743-L1746)

```diff
-       let {
-         sent: zD
-       } = DD;
-       return null !== zD && !zD.timedOut
+       op = pp, pp ? Op.g.setMultiplierType("emoteWheel", 0) : Op.g.removeMultiplier("emoteWheel")
+     }
+   },
+   39278: (pp, ip, cp) => {
+     function Op(pp) {
+       return Boolean(pp.Tu.useInventory && pp.Tu.useFullInventory && pp.Yk.bip(pp.NJ))
```

#### 98. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1748-L1749` → after: `L3773-L3782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3773-L3782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L3773-L3782) · [Before (L1748-L1749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1748-L1749)

```diff
-     var Ow = wD(4257),
-       Jw = wD(39113);
+     cp.d(ip, {
+       d: () => Op
+     })
+   },
+   39175: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Ip,
+       c: () => op
+     });
+     var Op = cp(37385);
```

#### 99. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1751-L1753` → after: `L3784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L3784) · [Before (L1751-L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1751-L1753)

```diff
-     function Ew(DD, zD, wD) {
-       const pD = [255 * DD, 255 * zD, 255 * wD],
-         [sD, KD, rD] = pD.map((DD => DD + .4 * (255 - DD)));
+     function op(pp, ip) {
```

#### 100. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1755-L1837` → after: `L3786-L3787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3786-L3787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L3786-L3787) · [Before (L1755-L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1755-L1837)

```diff
-         texture: "square_particle",
-         bA: 48,
-         minLifeTime: .3 / Jw.b,
-         maxLifeTime: .55 / Jw.b,
-         minSize: .07,
-         maxSize: .14,
-         minEmitPower: 1,
-         maxEmitPower: 1,
-         emitRate: 0,
-         gravity: [0, -14 * Jw.b * Jw.b, 0],
-         colorGradients: [{
-           timeFraction: 0,
-           minColor: [...pD, 1],
-           maxColor: [sD, KD, rD, 1]
-         }, {
-           timeFraction: 1,
- ... (67 more removed lines; see GitHub link above)
+         replayedClipName: pp,
+         replayedClipAgeSeconds: ip
```

#### 101. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1845-L1852` → after: `L3791-L3803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3791-L3803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L3791-L3803) · [Before (L1845-L1852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1845-L1852)

```diff
-     function Tw(DD) {
-       let {
-         placement: zD
-       } = DD;
-       const wD = (0, CD.k)(Gw, zD.getView()),
-         {
-           t: pD
-         } = (0, TD.E)(),
+     function Ip(pp, ip, cp, op, Ip) {
+       const Sp = function(pp) {
+           if ("object" !== typeof pp || null === pp) return null;
+           const {
+             replayedClipName: ip,
+             replayedClipAgeSeconds: cp
+           } = pp;
+           return "string" === typeof ip && "number" === typeof cp ? {
+             oo: ip,
+             Io: cp
+           } : null
+         }(cp),
+         xp = null === Sp ? cp : null,
```

#### 102. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1854-L1900` → after: `L3805-L3808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3805-L3808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L3805-L3808) · [Before (L1854-L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1854-L1900)

```diff
-           isTouchScreen: sD
-         } = (0, LD.n)(["isTouchScreen"]),
-         KD = null !== wD,
-         rD = KD && !wD.blocked && !wD.waiting;
-       if ((0, PD.d)((DD => KD && !DD.repeat && !(0, gD.isTypingInInput)() && !(0, cD.q)() && !sD), (DD => {
-           const wD = function(DD, zD, wD) {
-             if (DD === xw) return zD.stop;
-             if (DD === Cw) return wD ? zD.build : jw;
-             return Vw.u[Pw].includes(DD) ? zD.rotate : null
-           }(DD.code, zD, rD);
-           null !== wD && (DD.stopPropagation(), wD())
-         })), !KD) return null;
-       let RD = sD ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
-       return wD.blocked ? RD = "plotsGame:placementOffPlot" : wD.toClear > 0 && (RD = "plotsGame:placementClear"), (0, oD.jsx)(rz.g, {
-         placement: "bottom",
-         children: (0, oD.jsxs)("div", {
- ... (31 more removed lines; see GitHub link above)
+           oo: Lp = null,
+           Io: Yp = 0
+         } = null !== Sp && void 0 !== Sp ? Sp : {};
+       pp.animateEntity(ip, Op.e.Custom, xp, op, Ip, Lp, Yp)
```

#### 103. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1903-L1907` → after: `L3819-L3825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3819-L3825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L3819-L3825) · [Before (L1903-L1907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1903-L1907)

```diff
-     function bw(DD) {
-       return (0, oD.jsx)(cz.e, {
-         className: "PlotsPlacementKey",
-         ...DD
-       })
+     function Sp() {
+       var pp, ip, cp, Op;
+       const Sp = (0, Ip.g)(),
+         xp = null !== (pp = null === (ip = Sp.Yk.Bip(Sp.NJ)) || void 0 === ip ? void 0 : ip.selectedItem) && void 0 !== pp ? pp : null,
+         Lp = xp ? (0, Ip.d)().getItemStat(Sp.NJ, xp.name, "attackCooldownMs") : null,
+         Yp = (0, op.Uc)(Lp, null === xp || void 0 === xp || null === (cp = xp.attributes.customAttributes) || void 0 === cp || null === (Op = cp.enchantments) || void 0 === Op ? void 0 : Op["Attack Speed"]);
+       return Math.max(56, Math.ceil((Yp + 30) / 3))
```

#### 104. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1913-L1914` → after: `L3828-L3829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3828-L3829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L3828-L3829) · [Before (L1913-L1914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1913-L1914)

```diff
-       constructor(DD) {
-         this.placement = DD, this.press = null
+       constructor(pp, ip) {
+         this.tries = void 0, this.dueMs = void 0, this.intervalMs = void 0, this.tries = [pp], this.dueMs = pp, this.intervalMs = ip
```

#### 105. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1916-L1932` → after: `L3831-L3842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3831-L3842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L3831-L3842) · [Before (L1916-L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1916-L1932)

```diff
-       down(DD) {
-         if (null !== this.press) return !1;
-         const {
-           id: zD,
-           mouse: wD,
-           x: pD,
-           y: sD,
-           atMs: KD
-         } = DD;
-         return this.press = {
-           id: zD,
-           mouse: wD,
-           x: pD,
-           y: sD,
-           atMs: KD,
-           moved: !1
- ... (1 more removed lines; see GitHub link above)
+       spacedBy(pp, ip) {
+         if (pp === this.intervalMs) return this;
+         const cp = this.tries[this.tries.length - 1],
+           Op = new xp(cp, pp);
+         return Op.dueMs = Math.max(cp, ip - pp), Op
+       }
+       nextDueMs() {
+         const pp = this.tries[this.tries.length - 1];
+         return Math.max(pp + 56, this.tries[0] + this.tries.length * this.intervalMs, this.dueMs + this.intervalMs)
+       }
+       noteTry(pp, ip) {
+         this.tries.push(pp), this.tries.length > 3 && this.tries.shift(), this.dueMs = ip
```

#### 106. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1934-L1936` → after: `L3844-L3863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3844-L3863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L3844-L3863) · [Before (L1934-L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1934-L1936)

```diff
-       move(DD) {
-         const zD = this.press;
-         null !== zD && zD.id === DD.id && (zD.moved ||= Math.hypot(DD.x - zD.x, DD.y - zD.y) > 8), DD.mouse ? this.placement.hoverAt(DD.ndcX, DD.ndcY) : (null === zD || void 0 === zD ? void 0 : zD.id) === DD.id && this.placement.dragTo(DD.ndcX, DD.ndcY)
+     }
+     var Lp = cp(39263),
+       Yp = cp(1308);
+     class Dp {
+       constructor() {
+         this.timer = null, this.tries = new xp(0, 0), this.check = () => {
+           const pp = Date.now(),
+             ip = this.tries.spacedBy(Sp(), pp),
+             cp = ip.nextDueMs();
+           if (pp < cp) this.schedule();
+           else {
+             if (ip.noteTry(pp, cp), this.tries = ip, (0, Yp.t)() && !(0, Lp.b)()) {
+               var op, xp;
+               (0, Op.f)();
+               const pp = (0, Ip.g)();
+               null === (op = pp.Yk.Dcp(pp.NJ)) || void 0 === op || null === (xp = op.qm) || void 0 === xp || xp.repeatAttack()
+ ... (4 more added lines; see GitHub link above)
```

#### 107. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1938-L1940` → after: `L3865-L3867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3865-L3867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L3865-L3867) · [Before (L1938-L1940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1938-L1940)

```diff
-       up(DD) {
-         const zD = this.press;
-         (null === zD || void 0 === zD ? void 0 : zD.id) === DD.id && (this.move(DD), this.end(), !zD.moved && (zD.mouse || DD.atMs - zD.atMs <= 250) && this.placement.tap())
+       start() {
+         var pp;
+         null === (pp = Dp.running) || void 0 === pp || pp.stop(), Dp.running = this, this.tries = new xp(Date.now(), Sp()), this.schedule()
```

#### 108. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1942` → after: `L3869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L3869) · [Before (L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1942)

```diff
-       cancel(DD) {
+       static stopRunning() {
```

#### 109. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1944` → after: `L3871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L3871) · [Before (L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1944)

```diff
-         (null === (zD = this.press) || void 0 === zD ? void 0 : zD.id) === DD && this.end()
+         null === (pp = Dp.running) || void 0 === pp || pp.stop()
```

#### 110. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1946-L1951` → after: `L3873-L3874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3873-L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L3873-L3874) · [Before (L1946-L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1946-L1951)

```diff
-       leave(DD) {
-         let {
-           id: zD,
-           mouse: wD
-         } = DD;
-         wD && this.placement.endHover(), this.cancel(zD)
+       stop() {
+         clearTimeout(this.timer), this.timer = null, Dp.running === this && (Dp.running = null)
```

#### 111. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1953-L1954` → after: `L3876-L3879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3876-L3879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L3876-L3879) · [Before (L1953-L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1953-L1954)

```diff
-       end() {
-         this.press.mouse || this.placement.endDrag(), this.press = null
+       schedule() {
+         const pp = Date.now(),
+           ip = this.tries.spacedBy(Sp(), pp).nextDueMs() - pp;
+         this.timer = setTimeout(this.check, Math.min(ip, 100))
```

#### 112. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1958-L1964` → after: `L3901-L3902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3901-L3902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L3901-L3902) · [Before (L1958-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1958-L1964)

```diff
-     function iw(DD) {
-       let {
-         placement: zD
-       } = DD;
-       return null === (0, CD.k)(Gw, zD.getView()) ? null : (0, oD.jsx)(lw, {
-         placement: zD
-       })
+     function Dp() {
+       return Yp
```

#### 113. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1967-L1994` → after: `L3905-L3906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3905-L3906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L3905-L3906) · [Before (L1967-L1994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1967-L1994)

```diff
-     function lw(DD) {
-       let {
-         placement: zD
-       } = DD;
-       (0, dw.e)(!0, !0, "PlotsPlacementLayer");
-       const wD = (0, KD.useMemo)((() => new Sw(zD)), [zD]);
-       return (0, oD.jsx)("div", {
-         className: "PlotsPlacementLayer",
-         onPointerDown: DD => {
-           "mouse" === DD.pointerType && 0 !== DD.button || !wD.down(Ww(DD)) || DD.currentTarget.setPointerCapture(DD.pointerId)
-         },
-         onPointerMove: DD => {
-           wD.move(Ww(DD))
-         },
-         onPointerUp: DD => {
-           wD.up(Ww(DD))
- ... (12 more removed lines; see GitHub link above)
+     function Ap() {
+       Yp.clear()
```

#### 114. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1997-L2022` → after: `L3909-L3915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3909-L3915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L3909-L3915) · [Before (L1997-L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L1997-L2022)

```diff
-     function Ww(DD) {
-       const {
-         left: zD,
-         top: wD,
-         width: pD,
-         height: sD
-       } = DD.currentTarget.getBoundingClientRect();
-       return {
-         id: DD.pointerId,
-         mouse: "mouse" === DD.pointerType,
-         x: DD.clientX,
-         y: DD.clientY,
-         ndcX: (DD.clientX - zD) / pD * 2 - 1,
-         ndcY: 1 - (DD.clientY - wD) / sD * 2,
-         atMs: DD.timeStamp
-       }
- ... (10 more removed lines; see GitHub link above)
+     function Pp() {
+       for (const pp of Yp.ids()) {
+         const ip = Yp.getName(pp);
+         void 0 !== ip && Sp.d.delete(ip)
+       }
+       Ap(), xp.m.GA("playerRosterChanged", Yp.ids())
+     }
```

#### 115. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2024-L2045` → after: `L3917-L3921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3917-L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L3917-L3921) · [Before (L2024-L2045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L2024-L2045)

```diff
-     function ew(DD) {
-       let {
-         hud: zD
-       } = DD;
-       const wD = (0, CD.k)(Rz, zD.getPlot()),
-         [pD, sD] = (0, KD.useState)(null),
-         rD = (0, Zw.i)(pD);
-       if ("none" === wD[0]) return null;
-       const [, LD, cD, gD, RD, AD] = wD;
-       return (0, oD.jsx)("div", {
-         className: ED()("PlotsPlotBannerContainer", {
-           Below: rD
-         }),
-         children: (0, oD.jsx)(ow, {
-           plotX: LD,
-           plotZ: cD,
- ... (6 more removed lines; see GitHub link above)
+     function Wp(pp, ip) {
+       var cp, Op;
+       if (Yp.has(pp)) return Yp.getSetting(pp, ip);
+       const op = (0, Lp.g)();
+       return null === (cp = op.QJ[op.NJ]) || void 0 === cp || null === (Op = cp[pp]) || void 0 === Op ? void 0 : Op[ip]
```

#### 116. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2059-L2095` → after: `L3926-L3943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3926-L3943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L3926-L3943) · [Before (L2059-L2095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L2059-L2095)

```diff
-         t: gD
-       } = (0, TD.E)(), RD = (0, yw.i)("hiddenPlayerNames"), AD = (0, yw.i)("players"), UD = null === rD ? null : null !== (zD = null === (wD = AD.byId[rD]) || void 0 === wD ? void 0 : wD.cosmetics) && void 0 !== zD ? zD : null, fD = gD("plotsGame:plotBannerCoords", {
-         x: pD,
-         z: sD
-       }), ID = "own" === LD || null !== KD;
-       return (0, oD.jsxs)("div", {
-         ref: cD,
-         className: ED()("PlotsPlotBanner", {
-           Own: "own" === LD,
-           Shared: "shared" === LD
-         }),
-         role: "status",
-         children: [(0, oD.jsxs)("span", {
-           className: ED()("PlotsPlotBannerSeal", {
-             Face: null !== UD
-           }),
- ... (21 more removed lines; see GitHub link above)
+         added: ip,
+         removed: cp,
+         settingChanges: Op
+       } = Yp.apply(pp);
+       for (const {
+           playerId: op,
+           name: Ip
+         }
+         of cp) void 0 === Ip || wp(op) || Sp.d.delete(Ip);
+       for (const {
+           playerId: Ip,
+           settings: Sp
+         }
+         of Op)
+         if (wp(Ip)) Up(Ip, Sp);
+         else
+ ... (2 more added lines; see GitHub link above)
```

#### 117. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2099-L2122` → after: `L3947-L3951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3947-L3951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L3947-L3951) · [Before (L2099-L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L2099-L2122)

```diff
-       let {
-         progress: zD,
-         goal: wD
-       } = DD;
-       const pD = Math.min(zD, wD);
-       return (0, oD.jsxs)("div", {
-         className: "PlotsProgress",
-         children: [(0, oD.jsx)("div", {
-           className: "PlotsProgressBar",
-           role: "progressbar",
-           "aria-valuemin": 0,
-           "aria-valuemax": wD,
-           "aria-valuenow": pD,
-           children: (0, oD.jsx)("div", {
-             className: "PlotsProgressBarFill",
-             style: {
- ... (8 more removed lines; see GitHub link above)
+       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yp.getSettings(pp);
+       if (ip) {
+         (0, op.g)(pp);
+         for (const cp in ip)(0, op.d)(pp, cp, ip[cp])
+       }
```

#### 118. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2126-L2128` → after: `L3955-L4000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3955-L4000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L3955-L4000) · [Before (L2126-L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L2126-L2128)

```diff
-       return {
-         translationKey: `plotsGame:${DD}`,
-         actions: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
+       return pp === (0, Lp.g)().Fpp || (0, Lp.d)().client.hasEntity(pp)
+     }(0, Ip.onGameReset)(Ap)
+   },
+   38310: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => qp,
+       g: () => jp,
+       k: () => mp,
+       m: () => Rp,
+       p: () => Mp
+     });
+     var Op = cp(37313),
+       op = cp(38313),
+       Ip = cp(343),
+       Sp = cp.n(Ip),
+       xp = cp(3511);
+ ... (30 more added lines; see GitHub link above)
```

#### 119. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2131-L2172` → after: `L4014-L4036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4014-L4036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L4014-L4036) · [Before (L2131-L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L2131-L2172)

```diff
-     const vw = {
-       house: {
-         icon: "house",
-         titleKey: "plotsGame:starterLotHouseTitle",
-         desktop: uw("starterLotHouseHint", ["alt-fire"]),
-         touch: uw("starterLotHouseHint", ["alt-fire"]),
-         plainKey: "plotsGame:starterLotHousePlain"
-       },
-       garden: {
-         icon: "sparkle",
-         titleKey: "plotsGame:starterLotGarden",
-         desktop: uw("starterLotGardenHint", ["alt-fire"]),
-         touch: uw("starterLotGardenHint", ["alt-fire"]),
-         plainKey: "plotsGame:starterLotGardenPlain"
-       },
-       boulder: {
- ... (26 more removed lines; see GitHub link above)
+ 
+     function kp(pp, ip) {
+       const cp = pp.WU.Gl(),
+         op = cp.gy(),
+         Ip = op.getRenderWidth(),
+         Sp = op.getRenderHeight();
+       ep.width = Ip, ep.height = Sp;
+       const xp = pp.WU.xOp(),
+         Dp = xp ? dp.i5(xp.eye[0], xp.eye[1], xp.eye[2]) : pp.WU.camera.globalPosition;
+       Lp.i5(Dp.x + 10 * ip[0], Dp.y + 10 * ip[1], Dp.z + 10 * ip[2]);
+       const Ap = xp ? Op.Matrix.FromArrayToRef(xp.viewProjectionMatrix, 0, tp) : cp.getTransformMatrix();
+       return Op.Zy.ProjectToRef(Lp, vp, Ap, ep, Yp), Yp.z < 0 || Yp.z > 1 ? null : (yp.x = Yp.x / Ip * 100, yp.y = Yp.y / Sp * 100, yp)
+     }
+ 
+     function mp(pp, ip) {
+       return jp(pp, Cp(pp, ip))
+ ... (7 more added lines; see GitHub link above)
```

#### 120. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2174` → after: `L4038-L4043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4038-L4043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L4038-L4043) · [Before (L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L2174)

```diff
-     };
+     }
+ 
+     function qp(pp) {
+       var ip, cp;
+       return 1 / (null !== (ip = null === (cp = pp.WU.xOp()) || void 0 === cp ? void 0 : cp.projectionMatrix[0]) && void 0 !== ip ? ip : pp.WU.Gl().activeCamera.getProjectionMatrix().m[0])
+     }
```

#### 121. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2177-L2191` → after: `L4046-L4061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4046-L4061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L4046-L4061) · [Before (L2177-L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L2177-L2191)

```diff
-       const {
-         translationKey: pD,
-         actions: sD
-       } = wD ? zD.touch : zD.desktop;
-       if (0 === sD.length) return DD(pD);
-       const KD = [];
-       for (const rD of sD) {
-         const pD = (0, Vw.q)(rD, wD),
-           sD = Vw.u[rD][0];
-         if (null === pD && void 0 === sD) return DD(zD.plainKey);
-         KD.push(null === pD ? (0, Vw.m)(sD) : DD(pD.translationKey))
-       }
-       return DD(pD, {
-         key: KD.join("")
-       })
+       const Op = pp.WU.xOp(),
+         op = Op ? Op.worldMatrix : pp.WU.Gl().activeCamera.getWorldMatrix().m,
+         Ip = pp.BP;
+       for (let Sp = 0; Sp < 3; Sp++) ip[Sp] = op[12 + Sp] + Ip[Sp], cp[Sp] = op[8 + Sp];
+       Sp().normalize(cp, cp)
+     }
+ 
+     function Cp(pp, ip) {
+       const cp = pp.BP,
+         Op = pp.WU.xOp(),
+         op = Op ? dp.i5(Op.eye[0], Op.eye[1], Op.eye[2]) : pp.WU.camera.globalPosition;
+       return Wp[0] = ip[0] - cp[0] - op.x, Wp[1] = ip[1] - cp[1] - op.y, Wp[2] = ip[2] - cp[2] - op.z, Sp().normalize(Wp, Wp), Wp
+     }
+ 
+     function Ep(pp, ip) {
+       return (0, xp.h)(pp, ip, xp.d, (0, xp.k)())
```

#### 122. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2195-L2215` → after: `L4137-L4148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4137-L4148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L4137-L4148) · [Before (L2195-L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L2195-L2215)

```diff
-       let {
-         hud: zD
-       } = DD;
-       const wD = (0, CD.k)(gz, zD.getStep()),
-         {
-           t: pD
-         } = (0, TD.E)();
-       return (0, oD.jsxs)(rz.g, {
-         placement: "bottom",
-         children: ["step" === wD[0] && (0, oD.jsx)(Yw, {
-           step: wD[1],
-           progress: wD[2],
-           goal: wD[3]
-         }, wD[1]), "celebrate" === wD[0] && (0, oD.jsx)(Hw, {
-           className: ED()("Celebrate", {
-             Gold: "house" === wD[1]
- ... (5 more removed lines; see GitHub link above)
+       return "refetchCode" === pp || "devDownloadJson" === pp || pp.startsWith("Plugin")
+     }
+ 
+     function Ip(pp, ip) {
+       "refetchCode" !== pp ? "Plugin|MobAiPlugin|ShowPetUi" !== pp ? Promise.all([cp.e(109), cp.e(110), cp.e(105), cp.e(107), cp.e(218)]).then((() => cp(41985))).then((cp => {
+         let {
+           runClientGameMessage: Op
+         } = cp;
+         Op(pp, ip)
+       })).catch((ip => {
+         console.error(`Game message ${pp} failed`, ip)
+       })) : Op.m.GA("showPetUi", ip) : Op.m.GA("refetchCode")
```

#### 123. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2220-L2222` → after: `L4165-L4166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4165-L4166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L4165-L4166) · [Before (L2220-L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L2220-L2222)

```diff
-         step: zD,
-         progress: wD,
-         goal: pD
+         xI: ip,
+         LI: cp
```

#### 124. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2224-L2239` → after: `L4168-L4189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4168-L4189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L4168-L4189) · [Before (L2224-L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L2224-L2239)

```diff
-       const {
-         isTouchScreen: sD
-       } = (0, LD.n)(["isTouchScreen"]), {
-         t: KD
-       } = (0, TD.E)(), rD = vw[zD];
-       return (0, oD.jsxs)(Hw, {
-         icon: rD.icon,
-         title: KD(rD.titleKey),
-         children: [(0, oD.jsx)("div", {
-           className: "PlotsStepCardHint SmallTextLight",
-           children: tw(KD, rD, sD)
-         }), pD > 1 && (0, oD.jsx)(aw, {
-           progress: wD,
-           goal: pD
-         }), "backpack" === zD && sD && (0, oD.jsx)(qw, {})]
-       })
+       const Dp = null !== ip && void 0 !== ip ? ip : (0, xp.d)().gameNameWithVariation;
+       (0, Op.H)(Dp) && ((0, Yp.j)(), (0, Sp.Z)((() => {
+         console.log("Received matchmaking order from game server to game", ip), (0, Ip.k)("inGameReplay"), (0, Lp.navigatePreserveSearch)((0, op.c)(Dp, null !== cp && void 0 !== cp ? cp : void 0))
+       }), "video_start"))
+     }
+   },
+   39190: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Lp,
+       d: () => Sp,
+       h: () => xp,
+       j: () => Yp
+     });
+     var Op = cp(34),
+       op = cp(1372);
+     const Ip = new Map;
+ ... (6 more added lines; see GitHub link above)
```

#### 125. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2243-L2264` → after: `L4193-L4195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4193-L4195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L4193-L4195) · [Before (L2243-L2264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L2243-L2264)

```diff
-       let {
-         className: zD,
-         icon: wD,
-         title: pD,
-         children: sD
-       } = DD;
-       return (0, oD.jsxs)("div", {
-         className: ED()("PlotsStepCard", zD),
-         role: "status",
-         children: [(0, oD.jsx)("span", {
-           className: "PlotsStepCardIcon",
-           children: (0, oD.jsx)(QD.e, {
-             name: wD
-           })
-         }), (0, oD.jsxs)("div", {
-           className: "PlotsStepCardBody",
- ... (6 more removed lines; see GitHub link above)
+       Op.m.GA("removeUiRequest", pp, !0);
+       const ip = Ip.get(pp);
+       ip && (ip.tearDownNotification(), Ip.delete(pp))
```

#### 126. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2268-L2274` → after: `L4199-L4201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4199-L4201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L4199-L4201) · [Before (L2268-L2274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L2268-L2274)

```diff
-       return (0, KD.useEffect)((() => (LD.e.set({
-         backpackPointerRequested: !0
-       }), () => {
-         LD.e.set({
-           backpackPointerRequested: !1
-         })
-       })), []), null
+       Op.m.GA("clearUiRequests");
+       for (const pp of Ip.values()) pp.tearDownNotification();
+       Ip.clear()
```

#### 127. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2276-L2302` → after: `L4203-L4242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4203-L4242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L4203-L4242) · [Before (L2276-L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L2276-L2302)

```diff
-     const Dp = function(DD, zD, wD, pD) {
-       let {
-         localPlayerId: sD
-       } = pD;
-       const LD = new Az;
-       let cD = null,
-         gD = null,
-         RD = null,
-         AD = null,
-         UD = null;
-       const fD = [];
-       return {
-         onCreate: DD => {
-           cD = new Xw(DD, sD), gD = new gw(DD, sD, cD), RD = new gw(DD, sD, cD), AD = new nw(DD, sD), UD = new OD(DD, AD), fD.push((0, rD.w)((0, KD.createElement)(KD.Fragment, null, (0, KD.createElement)(ew, {
-             hud: LD
-           }), (0, KD.createElement)(Fw, {
- ... (11 more removed lines; see GitHub link above)
+ 
+     function Yp(pp, ip, cp, Op) {
+       const Sp = op.NotificationProvider.showPromptPopup({
+         title: ip,
+         confirmText: "general:yes",
+         cancelText: "general:no",
+         destructive: cp,
+         unlockPointerKey: "uiRequestPopup"
+       });
+       Ip.set(pp, Sp), Sp.getResult().then((ip => {
+         Ip.delete(pp), "notificationTornDown" !== ip && Op(ip)
+       }))
+     }
+   },
+   39182: (pp, ip, cp) => {
+     cp.d(ip, {
+ ... (24 more added lines; see GitHub link above)
```

#### 128. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2304-L2309` → after: `L4244-L4247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4244-L4247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L4244-L4247) · [Before (L2304-L2309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L2304-L2309)

```diff
-           }))
-         },
-         DU: () => {
-           gD.DU(), RD.DU(), AD.DU(), UD.DU()
-         },
-         onPlayerAttemptAltAction: (DD, zD, wD, pD, sD, KD) => {
+           }
+         }
+         for (const Op of pp.rp) {
+           const pp = this.members.get(Op);
```

#### 129. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2311-L2332` → after: `L4249-L4252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4249-L4252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L4249-L4252) · [Before (L2311-L2332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L2311-L2332)

```diff
-           if (null !== KD) return;
-           const LD = void 0 === zD ? null : [zD, wD, pD];
-           return null !== (rD = gD.attemptAltAction(LD)) && void 0 !== rD ? rD : RD.attemptAltAction(LD)
-         },
-         onPlayerClickUp: () => {
-           gD.endPress(), RD.endPress()
-         },
-         onAfterRender: (DD, zD) => {
-           AD.afterRender(zD), gD.afterRender(zD), RD.afterRender(zD)
-         },
-         onClose: () => {
-           for (const DD of fD) DD();
-           cD.dispose(), gD.dispose(), RD.dispose(), AD.dispose(), cD = null, gD = null, RD = null, AD = null, UD = null
-         },
-         onReceivedMessageFromServer: (DD, zD) => {
-           if ("plotsStarterLot" === DD) LD.receiveStep(zD);
- ... (6 more removed lines; see GitHub link above)
+           if (pp) this.members.delete(Op), ip.removed.push({
+             playerId: Op,
+             name: null !== (cp = pp.name) && void 0 !== cp ? cp : void 0
+           })
```

#### 130. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2337` → after: `L4279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L4279) · [Before (L2337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L2337)

```diff
-   39113: (DD, zD, wD) => {
+   39215: (pp, ip, cp) => {
```

#### 131. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2340` → after: `L4282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L4282) · [Before (L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L2340)

```diff
-       f: () => KD
+       e: () => op
```

#### 132. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2342-L2388` → after: `L4284-L4290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4284-L4290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/248.js#L4284-L4290) · [Before (L2342-L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/248.js#L2342-L2388)

```diff
-     const pD = 1 / .6,
-       sD = {
-         kind: "smokePuff"
-       };
-     class KD {
-       constructor(DD, zD, wD) {
-         this.style = DD, this.bA = zD, this.half = wD, this.particles = null, this.lastFrame = -1
-       }
-       emit(DD, zD, wD) {
-         let KD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
-         return wD !== this.lastFrame && (this.lastFrame = wD, this.particles || (this.particles = DD.createParticles(function(DD, zD) {
-           const [
-             [wD, KD, rD],
-             [LD, cD, gD]
-           ] = DD.colours;
-           return {
- ... (31 more removed lines; see GitHub link above)
+     const Op = ["description", "label"];
+ 
+     function op(pp) {
+       const ip = pp.type;
+       return {
+         type: ip,
+         params: pp[ip]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/249.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/249.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479)

#### 1. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L4-L6` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/249.js#L4-L8) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/249.js#L4-L6)

```diff
-   39736: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       playDocsSound: () => LD
+   41309: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp,
+       h: () => Dp,
+       k: () => Yp
```

#### 2. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L8-L76` → after: `L10-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L10-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/249.js#L10-L408) · [Before (L8-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/249.js#L8-L76)

```diff
-     var pD = wD(4875),
-       sD = wD(36719),
-       KD = wD(1211);
-     const rD = new Map;
- 
-     function LD(DD, zD, wD, LD, cD) {
-       let gD, RD = null,
-         AD = 0,
-         UD = 0;
-       if (zD) gD = new pD.Howl({
-         src: [`${KD.clientSideServerUrls.staticUrl}/sounds/music/${DD}.mp3`],
-         html5: !0,
-         volume: wD
-       });
-       else {
-         var fD;
- ... (53 more removed lines; see GitHub link above)
+     var Op, op = cp(37356),
+       Ip = cp(37320);
+     ! function(pp) {
+       pp[pp.CW = 0] = "CW", pp[pp.CCW = 1] = "CCW"
+     }(Op || (Op = {}));
+     class Sp {
+       static Interpolate(pp, ip, cp, Op, op) {
+         if (0 === pp) return 0;
+         const Ip = 1 - 3 * Op + 3 * ip,
+           Sp = 3 * Op - 6 * ip,
+           xp = 3 * ip;
+         let Lp = pp;
+         for (let Yp = 0; Yp < 5; Yp++) {
+           const ip = Lp * Lp;
+           Lp -= (Ip * (ip * Lp) + Sp * ip + xp * Lp - pp) * (1 / (3 * Ip * ip + 2 * Sp * Lp + xp)), Lp = Math.min(1, Math.max(0, Lp))
+         }
+ ... (383 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/250.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/250.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977)

#### 1. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L4` → after: `L4-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L4-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/250.js#L4-L35) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/250.js#L4)

```diff
-   39742: (DD, zD, wD) => {
+   39017: (pp, ip, cp) => {
+     var Op = {
+       "./cape_cow_cream.png": 28171,
+       "./cape_cow_normal.png": 28176,
+       "./cape_creator_level1.png": 28184,
+       "./cape_creator_level2.png": 28191,
+       "./cape_creator_level3.png": 28197,
+       "./cape_none.png": 28204,
+       "./cape_pig.png": 28213,
+       "./cape_sheep.png": 28217,
+       "./cape_super.png": 28226,
+       "./cape_super_inverted.png": 28234,
+       "./cape_youtuber.png": 28239
+     };
+ 
+     function op(pp) {
+ ... (16 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L6` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/250.js#L37) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/250.js#L6)

```diff
-       default: () => vD
+       openCharacterPreview: () => rp
```

#### 3. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L8-L66` → after: `L39-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L39-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/250.js#L39-L72) · [Before (L8-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/250.js#L8-L66)

```diff
-     wD(6507);
-     var pD = wD(58),
-       sD = wD(39744),
-       KD = wD(40015),
-       rD = wD(40137),
-       LD = wD(40183),
-       cD = wD(40192),
-       gD = wD(37267),
-       RD = wD(37070),
-       AD = wD(40331),
-       UD = wD(40382),
-       fD = (wD(40408), wD(1232)),
-       ID = wD(197),
-       BD = wD(1200),
-       GD = wD(20),
-       hD = wD(2750),
- ... (43 more removed lines; see GitHub link above)
+     var Op = cp(38317),
+       op = cp(2849),
+       Ip = cp(620),
+       Sp = cp(37395),
+       xp = cp(2281),
+       Lp = cp(37385),
+       Yp = cp(40024),
+       Dp = cp(40289),
+       Ap = cp(41300),
+       Pp = cp(37313),
+       Wp = cp(40443),
+       yp = cp(37479),
+       Up = cp(40459),
+       wp = cp(41353),
+       vp = cp(37305),
+       tp = cp(1234),
+ ... (18 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L69-L186` → after: `L75-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L75-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/250.js#L75-L98) · [Before (L69-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/250.js#L69-L186)

```diff
-       let {
-         heatmap: zD,
-         scale: wD,
-         fullyOpaqueFrom: dD,
-         bounds: ND,
-         fitBounds: ZD,
-         schematic: yD,
-         controls: kD,
-         onStepTime: mD,
-         onShowAllTime: eD,
-         onTogglePlaying: oD,
-         getReadout: uD = null
-       } = DD;
-       const {
-         t: vD
-       } = (0, BD.E)(), {
- ... (102 more removed lines; see GitHub link above)
+       pp.unfreezeWorldMatrix();
+       for (const ip of pp.getChildren()) kp(ip)
+     }
+ 
+     function mp(pp, ip) {
+       pp.isVisible = ip;
+       for (const cp of pp.getChildMeshes()) cp.isVisible = ip
+     }
+     class Rp {
+       constructor(pp, ip, cp) {
+         this.pw = pp, this.thinInstMgr = ip, this.FQ = cp, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
+       }
+       loadModel(pp, ip, cp) {
+         const Op = (0, dp.g)(pp, ip);
+         return Op in this.modelCache || (this.modelCache[Op] = (async () => {
+           try {
+ ... (8 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L188-L245` → after: `L100-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L100-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/250.js#L100-L108) · [Before (L188-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/250.js#L188-L245)

```diff
-             }(null !== zD && void 0 !== zD ? zD : Zz.current.fittedView, DD)))
-           },
-           onZoomChange: Qz
-         });
-       (0, pD.useEffect)((() => {
-         const DD = gz.current;
-         if (!DD) return;
-         let zD;
-         try {
-           zD = function(DD, zD) {
-             const wD = new sD.b(DD, !0, {
-                 stencil: !1
-               }, !0),
-               pD = new KD.b(wD),
-               [fD, ID, BD] = OD.Q;
-             pD.clearColor = new gD.e(fD / 255, ID / 255, BD / 255, 1);
- ... (42 more removed lines; see GitHub link above)
+             });
+             for (const pp of Op.rootNodes) kp(pp);
+             const Sp = void 0 === cp ? null : (0, ep.e)(cp, (pp => {
+               var ip, cp;
+               return null !== (ip = null === (cp = op.get(pp)) || void 0 === cp ? void 0 : cp.rotationQuaternion) && void 0 !== ip ? ip : null
+             }));
+             return {
+               nodesByName: op,
+               bones: null === Sp ? null : new jp(Sp, op)
```

#### 6. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L247-L300` → after: `L110-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/250.js#L110-L111) · [Before (L247-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/250.js#L247-L300)

```diff
-           }(DD, Zz.current.fieldOfView)
-         } catch (wD) {
-           return console.error("Failed to start the 3D heatmap", wD), void fz(!0)
-         }
-         return Rz.current = zD, zD.engine.runRenderLoop((() => {
-           const DD = zD.camera;
-           DD.fov !== zD.targetFieldOfView && (DD.fov += (zD.targetFieldOfView - DD.fov) * (DD.fov > zD.targetFieldOfView ? .3 : .2), Math.abs(zD.targetFieldOfView - DD.fov) < 5e-4 && (DD.fov = zD.targetFieldOfView), zD.needsRender = !0), zD.needsRender && (zD.oB.render(), zD.need … [truncated]
-         })), () => {
-           Rz.current = null, zD.engine.dispose()
-         }
-       }), []), (0, pD.useEffect)((() => {
-         const DD = gz.current;
-         if (!DD) return;
-         const zD = () => {
-             nz.current = !1, Bz(document.pointerLockElement === DD)
-           },
- ... (38 more removed lines; see GitHub link above)
+           } catch (op) {
+             throw delete this.modelCache[Op], console.error(`Failed to load preview attachment ${Op}:`, op), op
```

#### 7. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L302-L326` → after: `L113-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L113-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/250.js#L113-L127) · [Before (L302-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/250.js#L302-L326)

```diff
-           YD(DD.cells, Float32Array.from(sD), Float32Array.from(KD), KD.length / 4), DD.translucent = {
-             GA: Float32Array.from(rD),
-             colours: Float32Array.from(LD),
-             count: LD.length / 4
-           }, DD.translucentSortedFrom = null, HD(DD), DD.needsRender = !0
-         }(DD, dz, wD, dD)
-       }), [dz, wD, dD]), (0, pD.useEffect)((() => {
-         const DD = Rz.current;
-         null !== DD && function(DD, zD) {
-           DD.chunkGridOrigin = zD, DD.chunkGridCentre = null, FD(DD)
-         }(DD, ND.min)
-       }), [ND]), (0, pD.useEffect)((() => {
-         const DD = Rz.current;
-         null !== DD && function(DD, zD, wD) {
-           const pD = [],
-             sD = [];
- ... (9 more removed lines; see GitHub link above)
+         })()), this.modelCache[Op]
+       }
+       async update(pp, ip) {
+         var cp;
+         const {
+           thinInstMgr: Op,
+           FQ: op
+         } = this;
+         this.cosmeticNames[pp] = ip;
+         const Ip = this.attachmentsByType[pp];
+         if (Ip)
+           for (const {
+               mesh: xp,
+               destNode: Lp,
+               bones: Yp
```

#### 8. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L329-L425` → after: `L134-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L134-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/250.js#L134-L156) · [Before (L329-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/250.js#L329-L425)

```diff
-           YD(DD.schematicBlocks, Float32Array.from(pD), Float32Array.from(sD), sD.length / 4), DD.needsRender = !0
-         }(DD, yD, ND)
-       }), [yD, ND]), (0, pD.useEffect)((() => {
-         const DD = Rz.current;
-         null !== DD && null !== DD.chunkGrid && (DD.chunkGrid.isVisible = Xz, DD.needsRender = !0)
-       }), [Xz, ND]), (0, pD.useEffect)((() => {
-         const DD = Rz.current;
-         null !== DD && function(DD, zD, wD) {
-           const {
-             camera: pD
-           } = DD;
-           pD.position.set(zD.position[0], zD.position[1], zD.position[2]), pD.rotation.set(zD.pitch, zD.heading, 0);
-           const sD = (SD + 1) * ID.f.CI * Math.sqrt(3);
-           pD.maxZ = Math.max(sD, Math.hypot(...rz(zD.position, Lz(sz({
-             min: [0, 0, 0],
-             max: wD
- ... (81 more removed lines; see GitHub link above)
+         this.attachmentsByType[pp] = [];
+         const Sp = (0, Hp.m)(pp, ip);
+         if (null !== Sp && void 0 !== Sp && null !== (cp = Sp.attachments) && void 0 !== cp && cp.length)
+           for (const xp of Sp.attachments) {
+             let cp;
+             try {
+               cp = await this.loadModel(xp.modelGlb, xp.texture, xp.animation)
+             } catch {
+               continue
+             }
+             if (this.cosmeticNames[pp] !== ip) return;
+             const Ip = cp.nodesByName.get(xp.modelNode);
+             if (!Ip) {
+               console.error(`Preview attachment node ${xp.modelNode} not found in ${xp.modelGlb}`);
+               continue
+             }
+ ... (7 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L427-L447` → after: `L158-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L158-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/250.js#L158-L161) · [Before (L427-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/250.js#L427-L447)

```diff
-         }), null !== yz && (0, QD.jsx)("div", {
-           className: "StudioHeatmapMapReadout SmallTextLight",
-           children: null === uD ? vD("studio:heatmapBlockReadout", {
-             x: yz.x,
-             y: yz.y,
-             z: yz.z,
-             count: (0, fD.N)(yz.value)
-           }) : uD(yz.x, yz.y, yz.z, yz.value)
-         }), (0, QD.jsxs)("div", {
-           className: "StudioHeatmapMapControls",
-           children: [kD, (0, QD.jsx)(nD.Y, {
-             active: null === Pz,
-             onClick: () => {
-               Cz(null)
-             },
-             children: (0, QD.jsx)(MD.e, {
- ... (5 more removed lines; see GitHub link above)
+       }
+       writePoses(pp) {
+         for (const ip of this.shownBones) ip.write(pp)
+       }
```

#### 10. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L450-L490` → after: `L177-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L177-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/250.js#L177-L195) · [Before (L450-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/250.js#L450-L490)

```diff
-     function tD(DD) {
-       let {
-         heading: zD,
-         pitch: wD,
-         onViewFrom: sD,
-         onTurn: KD,
-         onFlip: rD
-       } = DD;
-       const {
-         t: LD
-       } = (0, BD.E)(), cD = (0, pD.useRef)(null), gD = Dz({
-         heading: zD,
-         pitch: wD
-       }), RD = zz(zD), AD = gz(gD, RD), UD = mD + eD + 2, fD = kD.flatMap((DD => [1, -1].map((zD => {
-         const wD = Lz(DD.direction, zD);
-         return {
- ... (25 more removed lines; see GitHub link above)
+     function np(pp, ip) {
+       bp.width = pp, bp.height = ip, Cp.resize()
+     }
+     let Fp = 0;
+     class gp {
+       constructor(pp, ip) {
+         this.framing = ip, this.ready = fp, this.dev = {
+           canvas: () => bp,
+           isolateHead(pp) {
+             const ip = Jp.getNodeNames(Bp);
+             for (let cp = 0; cp < ip.length; cp++) "HeadMesh" !== ip[cp] && "__root__" !== ip[cp] && "TorsoNode" !== ip[cp] && Jp.setNodeEnabled(Bp, cp, !1);
+             if (pp) {
+               const pp = Jp.getNamedNode(Bp, "HeadMesh");
+               Jp.setNodeDisableColorWrite(Bp, pp, !0, (pp => {
+                 const ip = new Up.StandardMaterial(`${pp.name}_depthOnly`, pp.Gl());
+                 return ip.disableColorWrite = !0, ip
+ ... (3 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L492-L556` → after: `L197-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L197-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/250.js#L197-L251) · [Before (L492-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/250.js#L492-L556)

```diff
-         },
-         onPointerMove: DD => {
-           const zD = cD.current;
-           if (null === zD || zD.pointerId !== DD.pointerId) return;
-           const wD = DD.clientX - zD.x,
-             pD = DD.clientY - zD.y;
-           zD.x = DD.clientX, zD.y = DD.clientY, zD.travel += Math.abs(wD) + Math.abs(pD), zD.travel >= uD && KD(wD, pD)
-         },
-         onPointerUp: DD => {
-           const zD = cD.current;
-           cD.current = null, null === zD || zD.pointerId !== DD.pointerId || zD.travel >= uD || (null !== zD.side ? sD(zD.side) : zD.isOnMiddle && rD())
-         },
-         onPointerCancel: () => {
-           cD.current = null
-         },
-         children: [fD.map(((DD, zD) => {
- ... (49 more removed lines; see GitHub link above)
+         }, this.closed = !1, this.resetCamera();
+         const cp = pp.getBoundingClientRect();
+         np(cp.width, cp.height), Fp++, Cp.stopRenderLoop(), Cp.runRenderLoop((() => {
+           var pp, ip;
+           null === (pp = Np) || void 0 === pp || pp.render(Cp.getDeltaTime()), null === (ip = Tp) || void 0 === ip || ip.writePoses(performance.now() / 1e3), Xp.render()
+         }))
+       }
+       isReady() {
+         return !!lp
+       }
+       setCosmetic(pp, ip) {
+         ! function(pp, ip) {
+           if (!lp) return;
+           const Sp = (0, op.g)();
+           Sp.ZC(!1), Op.d.Player.meshApi.updatePlayerCosmetic(Sp.NJ, Bp, pp, ip, !0), "cape" === pp && (ip === Ip.c ? Qp.eC(!1) : (Qp.eC(!0), Qp.material.diffuseTexture = new wp.d(cp(39017)(`./cape_${ip}.png`), Qp.Gl(), {
+             invertY: !1,
+ ... (39 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L560-L563` → after: `L255-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L255-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/250.js#L255-L259) · [Before (L560-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/250.js#L560-L563)

```diff
-       var zD, wD, pD;
-       const {
-         chunkGridOrigin: sD,
-         camera: KD
+       let {
+         yaw: ip,
+         pitch: cp,
+         radius: Op,
+         target: op
```

#### 13. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L565-L582` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/250.js#L261) · [Before (L565-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/250.js#L565-L582)

```diff
-       if (null === sD) return;
-       const rD = [KD.position.x, KD.position.y, KD.position.z],
-         LD = [0, 2].map((DD => Math.floor((rD[DD] + sD[DD]) / ID.f.CI))),
-         cD = DD.chunkGridCentre;
-       if (null !== cD && cD.every(((DD, zD) => DD === LD[zD]))) return;
-       const AD = null === (zD = null === (wD = DD.chunkGrid) || void 0 === wD ? void 0 : wD.isVisible) || void 0 === zD || zD;
-       null === (pD = DD.chunkGrid) || void 0 === pD || pD.dispose();
-       const [fD, BD] = [0, 2].map(((DD, zD) => {
-         const wD = [];
-         for (let pD = LD[zD] - SD; pD <= LD[zD] + SD + 1; pD++) wD.push(pD * ID.f.CI - sD[DD]);
-         return wD
-       })), GD = -sD[1], hD = [];
-       for (const gD of BD) hD.push([new RD.WI(fD[0], GD, gD), new RD.WI(fD[fD.length - 1], GD, gD)]);
-       for (const gD of fD) hD.push([new RD.WI(gD, GD, BD[0]), new RD.WI(gD, GD, BD[BD.length - 1])]);
-       const nD = (0, UD.b)("Heatmap3DChunkGrid", {
-         lines: hD
- ... (2 more removed lines; see GitHub link above)
+       Ep.alpha = ip, Ep.beta = cp, Op && (Ep.radius = Op), op && Ep.target.set(op[0], op[1], op[2])
```

#### 14. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L585-L593` → after: `L264-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L264-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/250.js#L264-L291) · [Before (L585-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/250.js#L585-L593)

```diff
-     function YD(DD, zD, wD, pD) {
-       DD.f6("matrix", function(DD, zD) {
-         const wD = new Float32Array(16 * zD);
-         for (let pD = 0; pD < zD; pD++) {
-           const zD = 16 * pD;
-           wD[zD] = 1, wD[zD + 5] = 1, wD[zD + 10] = 1, wD[zD + 12] = DD[3 * pD], wD[zD + 13] = DD[3 * pD + 1], wD[zD + 14] = DD[3 * pD + 2], wD[zD + 15] = 1
-         }
-         return wD
-       }(zD, pD), 16, !0), DD.f6("color", wD, 4, !0), DD.isVisible = pD > 0
+     function rp(pp, ip) {
+       return pp.appendChild(bp), Cp || function() {
+         Cp = new Yp.d(bp, !0, {
+           preserveDrawingBuffer: !0
+         });
+         const pp = (0, op.g)();
+         Cp.lOp = pp.WU.engine.lOp, Xp = new Dp.c(Cp), Xp.clearColor = new yp.b(0, 0, 0, 0), Xp.ambientColor = new yp.Color3(1, 1, 1), Ep = new Ap.c("Gw", 0, 0, 1, Pp.Zy.Zero(), Xp), Ep.attachControl(bp, !0), Ep.panningSensibility = 0, fp = (0, Op.u)("Player", Xp, !0).then((ip =>  … [truncated]
+           lp = ip.meshApi, Qp = ip.capeMesh, Jp = pp.WU.EQ;
+           const cp = 8.33;
+           Bp = (0, Op.n)("Player", cp, !0, !0), Jp.setPosition(Bp, 0, -8.33, 0);
+           const op = Jp.getNamedNode(Bp, "BodyMesh");
+           Jp.attachTransformNode(Qp, Bp, op), Jp.set(Bp, "aOpacity", 1), Jp.aJ(Bp, "aOpacity", 1), Tp = new Rp(Xp, Jp, Bp), Np = new vp.AnimatorState, Np.HP = pp, Np.thinInstMgr = Jp, Np.FQ = Bp, Np.iOp = Jp.QOp(Bp, 0), Np.modelLifeformType = "Player", Np.nodeNameAliases = (0, qp … [truncated]
+           const Ip = Qp.bJ().boundingBox;
+           Qp.position.y = ((24 - Ip.maximum.y + Ip.minimum.y) / 2 - 1 / 32) / cp, Qp.position.z = -1 / cp, Qp.rotationQuaternion = null;
+           const Sp = Math.PI / 18,
+             xp = Ip.maximum.y / cp;
+ ... (12 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L597-L616` → after: `L305-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L305-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/250.js#L305-L315) · [Before (L597-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/250.js#L597-L616)

```diff
-       const {
-         camera: zD,
-         translucent: wD
-       } = DD, pD = [zD.position.x, zD.position.y, zD.position.z], sD = DD.translucentSortedFrom;
-       if (null !== sD && Math.hypot(pD[0] - sD[0], pD[1] - sD[1], pD[2] - sD[2]) < dD) return;
-       DD.translucentSortedFrom = pD;
-       const KD = new Float64Array(wD.count),
-         rD = new Uint32Array(wD.count);
-       for (let gD = 0; gD < wD.count; gD++) {
-         const DD = wD.GA[3 * gD] - pD[0],
-           zD = wD.GA[3 * gD + 1] - pD[1],
-           sD = wD.GA[3 * gD + 2] - pD[2];
-         KD[gD] = DD * DD + zD * zD + sD * sD, rD[gD] = gD
-       }
-       rD.sort(((DD, zD) => KD[zD] - KD[DD]));
-       const LD = new Float32Array(3 * wD.count),
- ... (4 more removed lines; see GitHub link above)
+       return `\n\t\t\t\t${(0,xp.v)(pp,"mat2","rotate",[{name:"ang",type:"float"}],`\
+       n\ t\ t\ t\ t\ t$ {
+         (0, xp.A)(pp, "float", "s", "sin(ang)")
+       }\
+       n\ t\ t\ t\ t\ t$ {
+         (0, xp.A)(pp, "float", "c", "cos(ang)")
+       }\
+       n\ t\ t\ t\ t\ treturn $ {
+         (0, xp.j)(pp, "mat2", "c", "s", "-s", "c")
+       };\
+       n\ t\ t\ t\ t`)}\n\t\t\t`
```

#### 16. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L620-L624` → after: `L319-L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L319-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/250.js#L319-L322) · [Before (L620-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/250.js#L620-L624)

```diff
-       const wD = (wD, pD, sD) => new RD.WI(0 === wD ? DD[0] : zD[0], 0 === pD ? DD[1] : zD[1], 0 === sD ? DD[2] : zD[2]),
-         pD = [];
-       for (const sD of [0, 1])
-         for (const DD of [0, 1]) pD.push([wD(0, sD, DD), wD(1, sD, DD)], [wD(sD, 0, DD), wD(sD, 1, DD)], [wD(sD, DD, 0), wD(sD, DD, 1)]);
-       return pD
+       let cp = (0, xp.sb)(pp, "skele" + (ip - 1));
+       for (let op = ip - 2; op >= 0; op--) cp = (0, xp.jb)(pp, `boneIdx == ${op}`, (0, xp.sb)(pp, `skele${op}`), cp);
+       const Op = "bone.yz + rotate(bone.x) * pivot - pivot";
+       return `\n\t\t\t\t${(0,xp.A)(pp,"int","boneIdx",(0,xp.qb)(pp,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,xp.A)(pp,"vec3","bone",cp)}\n\t\t\t\t${(0,xp.A)(pp,"vec2","pivot",(0,xp.j)(pp,"vec2","0.0",`${(0,xp.zb)(pp,"position")}.z`))}\n\t\t\t\t${(0,xp.Y)(pp)?`positi … [truncated]
```

#### 17. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L628` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/250.js#L326) · [Before (L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/250.js#L628)

```diff
-       return [Math.sin(DD.heading) * Math.cos(DD.pitch), -Math.sin(DD.pitch), Math.cos(DD.heading) * Math.cos(DD.pitch)]
+       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,xp.j)(pp,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
```

#### 18. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L631-L632` → after: `L474-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L474-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/250.js#L474-L479) · [Before (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/250.js#L631-L632)

```diff
-     function zz(DD) {
-       return [Math.cos(DD), 0, -Math.sin(DD)]
+     function vp(pp, ip) {
+       return Object.assign((function(pp, cp, Op, op) {
+         return ip(this.featureState, pp, cp, Op, op)
+       }), {
+         Py: pp
+       })
```

#### 19. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L635-L652` → after: `L482-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L482-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/250.js#L482-L491) · [Before (L635-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/250.js#L635-L652)

```diff
-     function wz(DD, zD, wD) {
-       let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
-         heading: ND,
-         pitch: ZD
-       };
-       const sD = [DD.max[0] - DD.min[0], DD.max[1] - DD.min[1], DD.max[2] - DD.min[2]],
-         KD = Dz(pD),
-         rD = zz(pD.heading),
-         LD = gz(KD, rD),
-         cD = Math.tan(wD / 2),
-         gD = cD * zD;
-       let RD = 1;
-       for (const AD of [-sD[0] / 2, sD[0] / 2])
-         for (const DD of [-sD[1] / 2, sD[1] / 2])
-           for (const zD of [-sD[2] / 2, sD[2] / 2]) {
-             const wD = [AD, DD, zD],
- ... (2 more removed lines; see GitHub link above)
+     function tp(pp) {
+       const ip = class extends Wp.c {
+           constructor(ip, cp) {
+             const Op = (0, Up.$)(ip),
+               op = Op && (0, Up.s)(Op, pp.name);
+             for (var Ip = arguments.length, Sp = new Array(Ip > 2 ? Ip - 2 : 0), xp = 2; xp < Ip; xp++) Sp[xp - 2] = arguments[xp];
+             super(ip, pp.name, pp.priority, op ? op.defines : pp.defines(...Sp), !1), this.featureState = void 0, this.featureState = cp, this._pluginManager._addPlugin(this), this._enable(!0), (0, Up.v)(this._material, pp, this.featureState, this._pluginDefineNames)
+           }
+           getClassName() {
+             return pp.className
```

#### 20. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L654-L657` → after: `L493-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L493-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/250.js#L493-L507) · [Before (L654-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/250.js#L654-L657)

```diff
-       return {
-         position: rz([DD.min[0] + sD[0] / 2, DD.min[1] + sD[1] / 2, DD.min[2] + sD[2] / 2], Lz(KD, -RD * yD)),
-         heading: pD.heading,
-         pitch: pD.pitch
+           isCompatible(pp) {
+             return pp === wp.b.GLSL || pp === wp.b.WGSL
+           }
+         },
+         cp = (0, yp.l)(pp);
+       for (const [Op, op] of Object.entries(yp.e)) {
+         const Ip = pp[Op];
+         if (Ip) {
+           const pp = cp[Op];
+           Object.defineProperty(ip.prototype, op, {
+             value: vp(Ip, pp),
+             writable: !0,
+             configurable: !0
+           })
+         }
```

#### 21. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L662-L669` → after: `L517-L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L517-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/250.js#L517-L569) · [Before (L662-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/250.js#L662-L669)

```diff
-       const pD = Kz(DD),
-         sD = Kz(wD),
-         KD = rz(DD.position, Lz(zD, -1)),
-         rD = [0, 1, 2].reduce(((DD, zD) => rz(DD, Lz(sD[zD], cz(KD, pD[zD])))), [0, 0, 0]);
-       return {
-         position: rz(zD, rD),
-         heading: wD.heading,
-         pitch: wD.pitch
+       return (0, jp.h)(cp, ip.urls, (() => async function(pp, ip, cp) {
+         const {
+           width: Op
+         } = pp[0].getSize(), op = pp.map(((pp, cp) => {
+           var op;
+           const Ip = Math.round(pp.getSize().height / Op),
+             Sp = null === ip || void 0 === ip ? void 0 : ip[cp];
+           return {
+             pixels: Sp && Sp.byteLength === Op * Op * Ip * 4 ? Sp : null !== (op = mp.get(pp.getInternalTexture())) && void 0 !== op ? op : pp._readPixelsSync(),
+             layers: Ip
+           }
+         })), Ip = cp.gy().getCaps().texture2DArrayMaxLayerCount, xp = (0, jp.d)(op, Op, Ip).map((pp => {
+           let {
+             pixels: ip,
+             layers: op
+           } = pp;
+ ... (37 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L672-L674` → after: `L572-L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L572-L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/250.js#L572-L588) · [Before (L672-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/250.js#L672-L674)

```diff
- 
-     function sz(DD) {
-       return Lz(rz(DD.min, DD.max), .5)
+     var Mp = cp(41378),
+       Cp = cp(40498),
+       Ep = cp(37313),
+       Xp = cp(41383),
+       lp = cp(40589),
+       Qp = cp(40481),
+       Jp = cp(41325),
+       Bp = cp(37800),
+       Np = cp(41391);
+     class Tp extends Mp.c {
+       getData() {
+         return null
+       }
+       _rebuild() {}
+       restore() {
+         super._rebuild()
+ ... (1 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L676-L680` → after: `L590-L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L590-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/250.js#L590-L618) · [Before (L676-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/250.js#L676-L680)

```diff
- 
-     function Kz(DD) {
-       const zD = Dz(DD),
-         wD = zz(DD.heading);
-       return [zD, wD, gz(zD, wD)]
+     const fp = {
+       Mesh: Xp.c,
+       TransformNode: Jp.b,
+       my: Mp.c,
+       VertexBuffer: Mp.f,
+       BoundingInfo: Cp.d,
+       Zy: Ep.Zy,
+       ArenaBuffer: Tp,
+       SubMesh: Qp.d,
+       VertexData: lp.d,
+       MirroredGeometry: Np.b,
+       meshFromArrays: Np.e,
+       plainMeshFromArrays: Np.f
+     };
+     (0, Bp.g)(fp);
+     var bp = cp(37655);
+ ... (13 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L684` → after: `L622-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L622-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/250.js#L622-L667) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/250.js#L684)

```diff
-       return [DD[0] + zD[0], DD[1] + zD[1], DD[2] + zD[2]]
+       if (!(ip instanceof Op.StandardMaterial) || ip.specularTexture) return;
+       const {
+         r: cp,
+         g: op,
+         b: Ip
+       } = ip.specularColor;
+       0 === cp && 0 === op && 0 === Ip && (pp.SPECULARTERM = !1)
+     }(0, Dp.d)({
+       disableUnusedSpecularTerm: ap
+     });
+     var np = cp(37519),
+       Fp = cp(37807);
+     const gp = new RegExp(`^#define ${Yp.b}\\s*$`, "m");
+     class Gp extends(tp(Yp.h)) {
+       constructor(pp, ip) {
+         super(pp, ip), this.Ry = !1, ip.ditherOnlyWhileFading && (Fp.d.add(pp), this.prewarmDitherTwins(pp))
+ ... (30 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L688` → after: `L672-L863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L672-L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/250.js#L672-L863) · [Before (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/250.js#L688)

```diff
-       return [DD[0] * zD, DD[1] * zD, DD[2] * zD]
+       rp.set(pp, ip)
+     }
+     Zp(xp.d, Hp), Zp(Lp.f, qp), Zp(Yp.h, Gp), Zp(Dp.g, hp), (0, Ap.e)({
+       create: (pp, ip) => {
+         const cp = new Op.StandardMaterial(pp.name, ip);
+         return (0, np.p)(pp, cp), cp.detailMap._pluginDefineNames
+       },
+       write: (pp, ip, cp) => {
+         (0, np.S)(pp.mirror, ip, cp)
+       },
+       addFeature: (pp, ip, cp) => {
+         const Op = rp.get(ip.feature);
+         if (!Op) throw new Error(`${ip.feature.name} has no plugin class (registerPluginClass)`);
+         new Op(pp.mirror, ip.state, ...cp)
+       },
+       texture: (pp, ip, cp) => {
+ ... (176 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L691-L692` → after: `L866-L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L866-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/250.js#L866-L884) · [Before (L691-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/250.js#L691-L692)

```diff
-     function cz(DD, zD) {
-       return DD[0] * zD[0] + DD[1] * zD[1] + DD[2] * zD[2]
+     function Ap(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new xp.c(pp, cp);
+       const op = (0, Yp.j)(ip),
+         {
+           positions: Ip,
+           normals: Ap,
+           uvs: Pp,
+           indices: Wp,
+           named: yp = {}
+         } = ip,
+         Up = new Lp.d;
+       Up.positions = Ip, Up.normals = null !== Ap && void 0 !== Ap ? Ap : null, Up.uvs = null !== Pp && void 0 !== Pp ? Pp : null, Up.indices = Wp;
+       const wp = new Dp(Sp.b.RandomId(), cp, Up, !1, Op);
+       for (const {
+           kind: Sp,
+           components: xp
+ ... (3 more added lines; see GitHub link above)
```
