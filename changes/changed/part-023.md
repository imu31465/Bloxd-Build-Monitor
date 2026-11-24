# Changed — Bundle Modifications Report (Part 023 / 065)

- **Updated at**: `2026-11-25T01:10 JST`
- **Part**: `23 / 65` (**275** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 022](part-022.md) · [Part 024 →](part-024.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/303.js` (tz47m9.2cb7e113 → sn3sfj.2522680a · continued)

- **File**: `bundles/bloxd.io/chunks/js/303.js` (222 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a)

#### 111. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1837-L1841` → after: `L3111-L3114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3111-L3114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3111-L3114) · [Before (L1837-L1841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1837-L1841)

```diff
-     }
-     var CD = wD(39832);
-     class xD {
-       get syncRoot() {
-         return this._syncRoot
+       var uc = (pp => (pp[pp.None = 0] = "None", pp[pp.Normal = 1] = "Normal", pp[pp.Aggressive = 2] = "Aggressive", pp[pp.VeryAggressive = 3] = "VeryAggressive", pp))(uc || {});
+ 
+       function jc(pp, ip) {
+         return pp === ip
```

#### 112. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1843-L1844` → after: `L3116-L3118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3116-L3118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3116-L3118) · [Before (L1843-L1844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1843-L1844)

```diff
-       get masterFrame() {
-         return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
+ 
+       function kc(pp, ip) {
+         return pp === ip || void 0 !== pp && void 0 !== ip && pp.toUpperCase() === ip.toUpperCase()
```

#### 113. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1846-L1847` → after: `L3120-L3122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3120-L3122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3120-L3122) · [Before (L1846-L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1846-L1847)

```diff
-       get weight() {
-         return this._weight
+ 
+       function mc(pp, ip) {
+         return jc(pp, ip)
```

#### 114. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1849-L1850` → after: `L3124-L3126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3124-L3126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3124-L3126) · [Before (L1849-L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1849-L1850)

```diff
-       set weight(DD) {
-         this._weight = -1 !== DD ? Math.min(Math.max(DD, 0), 1) : -1
+ 
+       function Rc(pp, ip) {
+         return pp === ip ? 0 : void 0 === pp ? -1 : void 0 === ip ? 1 : pp < ip ? -1 : 1
```

#### 115. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1852-L1853` → after: `L3128-L3130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3128-L3130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3128-L3130) · [Before (L1852-L1853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1852-L1853)

```diff
-       get speedRatio() {
-         return this._speedRatio
+ 
+       function qc(pp, ip) {
+         return Rc(pp, ip)
```

#### 116. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1855-L1859` → after: `L3132-L3134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3132-L3134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3132-L3134) · [Before (L1855-L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1855-L1859)

```diff
-       set speedRatio(DD) {
-         for (let zD = 0; zD < this._runtimeAnimations.length; zD++) {
-           this._runtimeAnimations[zD]._prepareForSpeedRatioChange(DD)
-         }
-         this._speedRatio = DD, null !== this._goToFrame && this.goToFrame(this._goToFrame)
+ 
+       function Mc(pp, ip) {
+         return qc(null == pp ? void 0 : pp.start, null == ip ? void 0 : ip.start) || qc(null == pp ? void 0 : pp.length, null == ip ? void 0 : ip.length)
```

#### 117. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1861-L1862` → after: `L3136-L3139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3136-L3139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3136-L3139) · [Before (L1861-L1862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1861-L1862)

```diff
-       get elapsedTime() {
-         return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
+ 
+       function Cc(pp, ip, cp) {
+         for (let Op = 0; Op < pp.length; Op++) ip = Math.max(ip, cp(pp[Op]));
+         return ip
```

#### 118. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1864-L1874` → after: `L3141-L3143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3141-L3143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3141-L3143) · [Before (L1864-L1874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1864-L1874)

```diff
-       constructor(DD, zD) {
-         let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-           pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
-           KD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           rD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
-           LD = arguments.length > 6 ? arguments[6] : void 0,
-           cD = arguments.length > 7 ? arguments[7] : void 0,
-           gD = arguments.length > 8 ? arguments[8] : void 0,
-           RD = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
-           AD = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
-         this.target = zD, this.fromFrame = wD, this.toFrame = pD, this.loopAnimation = KD, this.onAnimationEnd = LD, this.onAnimationLoop = gD, this.isAdditive = RD, this.playOrder = AD, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._ … [truncated]
+ 
+       function Ec(pp, ip) {
+         return Xi(pp, ((pp, cp) => -1 === ip(pp, cp) ? pp : cp))
```

#### 119. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1876-L1881` → after: `L3145-L3147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3145-L3147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3145-L3147) · [Before (L1876-L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1876-L1881)

```diff
-       syncWith(DD) {
-         if (this._syncRoot = DD, DD) {
-           const DD = this._scene._activeAnimatables.indexOf(this);
-           DD > -1 && (this._scene._activeAnimatables.splice(DD, 1), this._scene._activeAnimatables.push(this))
-         }
-         return this
+ 
+       function Xc(pp, ip) {
+         return pp === ip ? 0 : void 0 === pp ? -1 : void 0 === ip ? 1 : (pp = pp.toUpperCase()) < (ip = ip.toUpperCase()) ? -1 : pp > ip ? 1 : 0
```

#### 120. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1883-L1884` → after: `L3149-L3151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3149-L3151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3149-L3151) · [Before (L1883-L1884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1883-L1884)

```diff
-       getAnimations() {
-         return this._runtimeAnimations
+ 
+       function lc(pp, ip) {
+         return pp === ip ? 0 : void 0 === pp ? -1 : void 0 === ip ? 1 : (pp = pp.toLowerCase()) < (ip = ip.toLowerCase()) ? -1 : pp > ip ? 1 : 0
```

#### 121. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1886-L1893` → after: `L3153-L3155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3153-L3155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3153-L3155) · [Before (L1886-L1893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1886-L1893)

```diff
-       appendAnimations(DD, zD) {
-         for (let wD = 0; wD < zD.length; wD++) {
-           const pD = zD[wD],
-             sD = new PD(DD, pD, this._scene, this);
-           sD._onLoop = () => {
-             this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
-           }, this._runtimeAnimations.push(sD)
-         }
+ 
+       function Qc(pp, ip) {
+         return Rc(pp, ip)
```

#### 122. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1895-L1899` → after: `L3157-L3159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3157-L3159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3157-L3159) · [Before (L1895-L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1895-L1899)

```diff
-       getAnimationByTargetProperty(DD) {
-         const zD = this._runtimeAnimations;
-         for (let wD = 0; wD < zD.length; wD++)
-           if (zD[wD].animation.targetProperty === DD) return zD[wD].animation;
-         return null
+ 
+       function Jc(pp) {
+         return pp ? Xc : Qc
```

#### 123. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1901-L1905` → after: `L3161-L3177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3161-L3177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3161-L3177) · [Before (L1901-L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1901-L1905)

```diff
-       getRuntimeAnimationByTargetProperty(DD) {
-         const zD = this._runtimeAnimations;
-         for (let wD = 0; wD < zD.length; wD++)
-           if (zD[wD].animation.targetProperty === DD) return zD[wD];
-         return null
+       var Bc, Nc, Tc = (() => function(pp) {
+         const ip = new Intl.Collator(pp, {
+           usage: "sort",
+           sensitivity: "variant",
+           numeric: !0
+         }).compare;
+         return (pp, cp) => function(pp, ip, cp) {
+           if (pp === ip) return 0;
+           if (void 0 === pp) return -1;
+           if (void 0 === ip) return 1;
+           const Op = cp(pp, ip);
+           return Op < 0 ? -1 : Op > 0 ? 1 : 0
+         }(pp, cp, ip)
+       })();
+ 
+       function fc() {
+ ... (1 more added lines; see GitHub link above)
```

#### 124. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1907-L1910` → after: `L3179-L3181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3179-L3181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3179-L3181) · [Before (L1907-L1910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1907-L1910)

```diff
-       reset() {
-         const DD = this._runtimeAnimations;
-         for (let zD = 0; zD < DD.length; zD++) DD[zD].reset(!0);
-         this._localDelayOffset = null, this._pausedDelay = null
+ 
+       function bc(pp) {
+         Nc !== pp && (Nc = pp, Bc = void 0)
```

#### 125. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1912-L1914` → after: `L3183-L3185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3183-L3185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3183-L3185) · [Before (L1912-L1914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1912-L1914)

```diff
-       enableBlending(DD) {
-         const zD = this._runtimeAnimations;
-         for (let wD = 0; wD < zD.length; wD++) zD[wD].animation.enableBlending = !0, zD[wD].animation.blendingSpeed = DD
+ 
+       function hc(pp, ip) {
+         return Bc ?? (Bc = Tc(Nc)), Bc(pp, ip)
```

#### 126. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1916-L1918` → after: `L3187-L3189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3187-L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3187-L3189) · [Before (L1916-L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1916-L1918)

```diff
-       disableBlending() {
-         const DD = this._runtimeAnimations;
-         for (let zD = 0; zD < DD.length; zD++) DD[zD].animation.enableBlending = !1
+ 
+       function ac(pp, ip, cp, Op) {
+         return pp === ip ? 0 : void 0 === pp ? -1 : void 0 === ip ? 1 : Op(pp[cp], ip[cp])
```

#### 127. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1920-L1927` → after: `L3191-L3207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3191-L3207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3191-L3207) · [Before (L1920-L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1920-L1927)

```diff
-       goToFrame(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         const wD = this._runtimeAnimations;
-         if (wD[0]) {
-           const zD = wD[0].animation.framePerSecond;
-           this._frameToSyncFromJump = this._frameToSyncFromJump ?? wD[0].currentFrame;
-           const pD = 0 === this.speedRatio ? 0 : (DD - this._frameToSyncFromJump) / zD * 1e3 / this.speedRatio;
-           this._manualJumpDelay = -pD
+ 
+       function nc(pp, ip) {
+         return qc(pp ? 1 : 0, ip ? 1 : 0)
+       }
+ 
+       function Fc(pp, ip, cp) {
+         const Op = Math.max(2, Math.floor(.34 * pp.length));
+         let op, Ip = Math.floor(.4 * pp.length) + 1;
+         for (const Sp of ip) {
+           const ip = cp(Sp);
+           if (void 0 !== ip && Math.abs(ip.length - pp.length) <= Op) {
+             if (ip === pp) continue;
+             if (ip.length < 3 && ip.toLowerCase() !== pp.toLowerCase()) continue;
+             const cp = gc(pp, ip, Ip - .1);
+             if (void 0 === cp) continue;
+             dO.assert(cp < Ip), Ip = cp, op = Sp
+ ... (1 more added lines; see GitHub link above)
```

#### 128. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1929-L1930` → after: `L3209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3209) · [Before (L1929-L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1929-L1930)

```diff
-         for (let pD = 0; pD < wD.length; pD++) wD[pD].goToFrame(DD, zD ? this._weight : -1);
-         this._goToFrame = DD
+         return op
```

#### 129. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1932-L1933` → after: `L3211-L3235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3211-L3235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3211-L3235) · [Before (L1932-L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1932-L1933)

```diff
-       get paused() {
-         return this.HJ
+ 
+       function gc(pp, ip, cp) {
+         let Op = new Array(ip.length + 1),
+           op = new Array(ip.length + 1);
+         const Ip = cp + .01;
+         for (let xp = 0; xp <= ip.length; xp++) Op[xp] = xp;
+         for (let xp = 1; xp <= pp.length; xp++) {
+           const Sp = pp.charCodeAt(xp - 1),
+             Lp = Math.ceil(xp > cp ? xp - cp : 1),
+             Yp = Math.floor(ip.length > cp + xp ? cp + xp : ip.length);
+           op[0] = xp;
+           let Dp = xp;
+           for (let pp = 1; pp < Lp; pp++) op[pp] = Ip;
+           for (let cp = Lp; cp <= Yp; cp++) {
+             const Ip = pp[xp - 1].toLowerCase() === ip[cp - 1].toLowerCase() ? Op[cp - 1] + .1 : Op[cp - 1] + 2,
+               Lp = Sp === ip.charCodeAt(cp - 1) ? Op[cp - 1] : Math.min(Op[cp] + 1, op[cp - 1] + 1, Ip);
+ ... (9 more added lines; see GitHub link above)
```

#### 130. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1935-L1936` → after: `L3237-L3240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3237-L3240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3237-L3240) · [Before (L1935-L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1935-L1936)

```diff
-       pause() {
-         this.HJ || (this.HJ = !0)
+ 
+       function Gc(pp, ip, cp) {
+         const Op = pp.length - ip.length;
+         return Op >= 0 && (cp ? kc(pp.slice(Op), ip) : pp.indexOf(ip, Op) === Op)
```

#### 131. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1938-L1939` → after: `L3242-L3244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3242-L3244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3242-L3244) · [Before (L1938-L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1938-L1939)

```diff
-       restart() {
-         this.HJ = !1
+ 
+       function rc(pp, ip) {
+         return Gc(pp, ip) ? pp.slice(0, pp.length - ip.length) : pp
```

#### 132. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1941-L1942` → after: `L3246-L3248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3246-L3248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3246-L3248) · [Before (L1941-L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1941-L1942)

```diff
-       _raiseOnAnimationEnd() {
-         this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
+ 
+       function Zc(pp, ip) {
+         return Gc(pp, ip) ? pp.slice(0, pp.length - ip.length) : void 0
```

#### 133. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1944-L1955` → after: `L3250-L3263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3250-L3263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3250-L3263) · [Before (L1944-L1955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1944-L1955)

```diff
-       stop(DD, zD) {
-         let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         if (DD || zD) {
-           const sD = this._scene._activeAnimatables.indexOf(this);
-           if (sD > -1) {
-             const KD = this._runtimeAnimations;
-             for (let wD = KD.length - 1; wD >= 0; wD--) {
-               const pD = KD[wD];
-               DD && pD.animation.name != DD || (zD && !zD(pD.target) || (pD.dispose(), KD.splice(wD, 1)))
-             }
-             0 == KD.length && (wD || this._scene._activeAnimatables.splice(sD, 1), pD || this._raiseOnAnimationEnd())
+ 
+       function zc(pp) {
+         let ip = pp.length;
+         for (let cp = ip - 1; cp > 0; cp--) {
+           let Op = pp.charCodeAt(cp);
+           if (Op >= 48 && Op <= 57)
+             do {
+               --cp, Op = pp.charCodeAt(cp)
+             } while (cp > 0 && Op >= 48 && Op <= 57);
+           else {
+             if (!(cp > 4) || 110 !== Op && 78 !== Op) break;
+             if (--cp, Op = pp.charCodeAt(cp), 105 !== Op && 73 !== Op) break;
+             if (--cp, Op = pp.charCodeAt(cp), 109 !== Op && 77 !== Op) break;
+             --cp, Op = pp.charCodeAt(cp)
```

#### 134. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1957-L2008` → after: `L3265-L3266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3265-L3266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3265-L3266) · [Before (L1957-L2008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1957-L2008)

```diff
-         } else {
-           const DD = this._scene._activeAnimatables.indexOf(this);
-           if (DD > -1) {
-             wD || this._scene._activeAnimatables.splice(DD, 1);
-             const zD = this._runtimeAnimations;
-             for (let DD = 0; DD < zD.length; DD++) zD[DD].dispose();
-             this._runtimeAnimations.length = 0, pD || this._raiseOnAnimationEnd()
-           }
-         }
-       }
-       async waitAsync() {
-         return await new Promise((DD => {
-           this.onAnimationEndObservable.add((() => {
-             DD(this)
-           }), void 0, void 0, this, !0)
-         }))
- ... (36 more removed lines; see GitHub link above)
+           if (45 !== Op && 46 !== Op) break;
+           ip = cp
```

#### 135. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L2010-L2059` → after: `L3268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3268) · [Before (L2010-L2059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L2010-L2059)

```diff
-         LD.currentValue.decompose(pD, sD, wD)
-       }
-       if (!RD) {
-         pD.scaleInPlace(gD), wD.scaleInPlace(gD), sD.scaleInPlace(gD);
-         for (let LD = rD; LD < DD.animations.length; LD++) {
-           const rD = DD.animations[LD];
-           if (0 === rD.weight) continue;
-           gD = rD.weight / zD;
-           const cD = KD.n.WI[2],
-             RD = KD.n.WI[3],
-             AD = KD.n.Quaternion[1];
-           rD.currentValue.decompose(RD, AD, cD), RD.scaleAndAddToRef(gD, pD), AD.scaleAndAddToRef(KD.i.Dot(sD, AD) > 0 ? gD : -gD, sD), cD.scaleAndAddToRef(gD, wD)
-         }
-         sD.normalize()
-       }
-       for (let UD = 0; UD < DD.additiveAnimations.length; UD++) {
- ... (34 more removed lines; see GitHub link above)
+         return ip === pp.length ? pp : pp.slice(0, ip)
```

#### 136. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L2068-L2257` → after: `L3271-L3274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3271-L3274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3271-L3274) · [Before (L2068-L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L2068-L2257)

```diff
-     function jD(DD, zD) {
-       zD && (zD.prototype.copyAnimationRange = function(DD, zD, wD) {
-         let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-           sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
-         0 === this.animations.length && (this.animations.push(new VD.d(this.name, "_matrix", DD.animations[0].framePerSecond, VD.d.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
-         const KD = DD.animations[0].getRange(zD);
-         if (!KD) return !1;
-         const rD = KD.from,
-           LD = KD.to,
-           cD = DD.animations[0].getKeys(),
-           gD = DD.length,
-           RD = DD.getParent(),
-           AD = this.getParent(),
-           UD = pD && RD && gD && this.length && gD !== this.length,
-           fD = UD && AD && RD ? AD.length / RD.length : 1,
-           ID = pD && !AD && sD && (1 !== sD.x || 1 !== sD.y || 1 !== sD.z),
- ... (174 more removed lines; see GitHub link above)
+       function sc(pp, ip) {
+         for (let cp = 0; cp < pp.length; cp++)
+           if (pp[cp] === ip) return Kc(pp, cp), !0;
+         return !1
```

#### 137. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L2259-L2260` → after: `L3276-L3279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3276-L3279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3276-L3279) · [Before (L2259-L2260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L2259-L2260)

```diff
-       getSkeleton() {
-         return this._skeleton
+ 
+       function Kc(pp, ip) {
+         for (let cp = ip; cp < pp.length - 1; cp++) pp[cp] = pp[cp + 1];
+         pp.pop()
```

#### 138. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L2262-L2263` → after: `L3281-L3283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3281-L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3281-L3283) · [Before (L2262-L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L2262-L2263)

```diff
-       get parent() {
-         return this._parentNode
+ 
+       function Vc(pp, ip) {
+         pp[ip] = pp[pp.length - 1], pp.pop()
```

#### 139. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L2265-L2266` → after: `L3285-L3291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3285-L3291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3285-L3291) · [Before (L2265-L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L2265-L2266)

```diff
-       getParent() {
-         return this.parent
+ 
+       function pO(pp, ip) {
+         return function(pp, ip) {
+           for (let cp = 0; cp < pp.length; cp++)
+             if (ip(pp[cp])) return Vc(pp, cp), !0;
+           return !1
+         }(pp, (pp => pp === ip))
```

#### 140. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L2268-L2269` → after: `L3293-L3295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3293-L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3293-L3295) · [Before (L2268-L2269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L2268-L2269)

```diff
-       getChildren() {
-         return this.children
+ 
+       function iO(pp) {
+         return pp ? Uc : tc
```

#### 141. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L2271-L2272` → after: `L3297-L3303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3297-L3303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3297-L3303) · [Before (L2271-L2272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L2271-L2272)

```diff
-       getIndex() {
-         return null === this._index ? this.getSkeleton().bones.indexOf(this) : this._index
+ 
+       function cO(pp) {
+         let {
+           prefix: ip,
+           suffix: cp
+         } = pp;
+         return `${ip}*${cp}`
```

#### 142. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L2274-L2275` → after: `L3305-L3307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3305-L3307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3305-L3307) · [Before (L2274-L2275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L2274-L2275)

```diff
-       set parent(DD) {
-         this.setParent(DD)
+ 
+       function OO(pp, ip) {
+         return dO.assert(LO(pp, ip)), ip.substring(pp.prefix.length, ip.length - pp.suffix.length)
```

#### 143. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L2277-L2283` → after: `L3309-L3315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3309-L3315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3309-L3315) · [Before (L2277-L2283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L2277-L2283)

```diff
-       setParent(DD) {
-         let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (this.parent !== DD) {
-           if (this.parent) {
-             const DD = this.parent.children.indexOf(this); - 1 !== DD && this.parent.children.splice(DD, 1)
-           }
-           this._parentNode = DD, this.parent && this.parent.children.push(this), zD && this._updateAbsoluteBindMatrices(), this.vzD()
+ 
+       function oO(pp, ip, cp) {
+         let Op, op = -1;
+         for (let Ip = 0; Ip < pp.length; Ip++) {
+           const Sp = pp[Ip],
+             xp = ip(Sp);
+           xp.prefix.length > op && LO(xp, cp) && (op = xp.prefix.length, Op = Sp)
```

#### 144. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L2286-L2384` → after: `L3319-L3321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3319-L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3319-L3321) · [Before (L2286-L2384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L2286-L2384)

```diff
-       getLocalMatrix() {
-         return this._compose(), this._localMatrix
-       }
-       getBindMatrix() {
-         return this._bindMatrix
-       }
-       getBaseMatrix() {
-         return this.getBindMatrix()
-       }
-       getRestMatrix() {
-         return this._restMatrix
-       }
-       getRestPose() {
-         return this.getRestMatrix()
-       }
-       setRestMatrix(DD) {
- ... (83 more removed lines; see GitHub link above)
+ 
+       function IO(pp, ip, cp) {
+         return cp ? kc(pp.slice(0, ip.length), ip) : 0 === pp.lastIndexOf(ip, 0)
```

#### 145. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L2386-L2390` → after: `L3323-L3325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3323-L3325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3323-L3325) · [Before (L2386-L2390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L2386-L2390)

```diff
-       _updateAbsoluteBindMatrices(DD) {
-         let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (DD || (DD = this._bindMatrix), this.parent ? DD.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.pC(DD), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), zD)
-           for (let wD = 0; wD < this.children.length; wD++) this.children[wD]._updateAbsoluteBindMatrices();
-         this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
+ 
+       function SO(pp, ip) {
+         return IO(pp, ip) ? pp.substr(ip.length) : pp
```

#### 146. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L2392-L2393` → after: `L3327-L3330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3327-L3330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3327-L3330) · [Before (L2392-L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L2392-L2393)

```diff
-       vzD() {
-         return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
+ 
+       function xO(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Uc;
+         return IO(cp(pp), cp(ip)) ? pp.substring(ip.length) : void 0
```

#### 147. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L2395-L2396` → after: `L3332-L3338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3332-L3338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3332-L3338) · [Before (L2395-L2396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L2395-L2396)

```diff
-       _markAsDirtyAndCompose() {
-         this.vzD(), this._needToCompose = !0
+ 
+       function LO(pp, ip) {
+         let {
+           prefix: cp,
+           suffix: Op
+         } = pp;
+         return ip.length >= cp.length + Op.length && IO(ip, cp) && Gc(ip, Op)
```

#### 148. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L2398-L2399` → after: `L3340-L3342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3340-L3342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3340-L3342) · [Before (L2398-L2399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L2398-L2399)

```diff
-       _markAsDirtyAndDecompose() {
-         this.vzD(), this._needToDecompose = !0
+ 
+       function YO(pp, ip) {
+         return cp => pp(cp) && ip(cp)
```

#### 149. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L2401-L2410` → after: `L3344-L3351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3344-L3351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3344-L3351) · [Before (L2401-L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L2401-L2410)

```diff
-       _updatePosition(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           wD = arguments.length > 2 ? arguments[2] : void 0,
-           pD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-         const sD = this.getLocalMatrix();
-         if (0 == zD) pD ? (sD.addAtIndex(12, DD.x), sD.addAtIndex(13, DD.y), sD.addAtIndex(14, DD.z)) : sD.setTranslationFromFloats(DD.x, DD.y, DD.z);
-         else {
-           const zD = WD._TmpMats[0],
-             rD = WD._TmpVecs[0];
-           this.parent ? (zD.pC(this.parent.getAbsoluteMatrix()), wD && zD.multiplyToRef(wD.getWorldMatrix(), zD)) : KD.e.IdentityToRef(zD), pD && zD.setTranslationFromFloats(0, 0, 0), zD.invert(), KD.s.TransformCoordinatesToRef(DD, zD, rD), pD ? (sD.addAtIndex(12, rD.x), sD.addAt … [truncated]
+ 
+       function DO() {
+         for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
+         return function() {
+           let pp;
+           for (const cp of ip)
+             if (pp = cp(...arguments), pp) return pp;
+           return pp
```

#### 150. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L2427-L2434` → after: `L3354-L3357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3354-L3357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3354-L3357) · [Before (L2427-L2434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L2427-L2434)

```diff
-       scale(DD, zD, wD) {
-         let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         const sD = this.getLocalMatrix(),
-           rD = WD._TmpMats[0];
-         KD.e.ScalingToRef(DD, zD, wD, rD), rD.multiplyToRef(sD, sD), rD.invert();
-         for (const KD of this.children) {
-           const pD = KD.getLocalMatrix();
-           pD.multiplyToRef(rD, pD), pD.multiplyAtIndex(12, DD), pD.multiplyAtIndex(13, zD), pD.multiplyAtIndex(14, wD), KD._markAsDirtyAndDecompose()
+ 
+       function AO(pp) {
+         return function() {
+           return !pp(...arguments)
```

#### 151. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L2439-L2446` → after: `L3360-L3364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3360-L3364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3360-L3364) · [Before (L2439-L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L2439-L2446)

```diff
-       setScale(DD) {
-         this._decompose(), this._localScaling.pC(DD), this._markAsDirtyAndCompose()
-       }
-       getScale() {
-         return this._decompose(), this._localScaling
-       }
-       getScaleToRef(DD) {
-         this._decompose(), DD.pC(this._localScaling)
+ 
+       function PO(pp) {}
+ 
+       function WO(pp) {
+         return void 0 === pp ? void 0 : [pp]
```

#### 152. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L2448-L2453` → after: `L3366-L3377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3366-L3377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3366-L3377) · [Before (L2448-L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L2448-L2453)

```diff
-       setYawPitchRoll(DD, zD, wD) {
-         let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-           sD = arguments.length > 4 ? arguments[4] : void 0;
-         if (0 === pD) {
-           const rD = WD._TmpQuat;
-           return KD.i.RotationYawPitchRollToRef(DD, zD, wD, rD), void this.setRotationQuaternion(rD, pD, sD)
+ 
+       function yO(pp, ip, cp, Op, op, Ip) {
+         Ip ?? (Ip = Ac);
+         let Sp = 0,
+           xp = 0;
+         const Lp = pp.length,
+           Yp = ip.length;
+         let Dp = !1;
+         for (; Sp < Lp && xp < Yp;) {
+           const Lp = pp[Sp],
+             Yp = ip[xp],
+             Ap = cp(Lp, Yp); - 1 === Ap ? (Op(Lp), Sp++, Dp = !0) : 1 === Ap ? (op(Yp), xp++, Dp = !0) : (Ip(Yp, Lp), Sp++, xp++)
```

#### 153. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L2455-L2458` → after: `L3379-L3381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3379-L3381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3379-L3381) · [Before (L2455-L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L2455-L2458)

```diff
-         const rD = WD._TmpMats[0];
-         if (!this._getAbsoluteInverseMatrixUnscaledToRef(rD, sD)) return;
-         const LD = WD._TmpMats[1];
-         KD.e.RotationYawPitchRollToRef(DD, zD, wD, LD), rD.multiplyToRef(LD, LD), this._rotateWithMatrix(LD, pD, sD)
+         for (; Sp < Lp;) Op(pp[Sp++]), Dp = !0;
+         for (; xp < Yp;) op(ip[xp++]), Dp = !0;
+         return Dp
```

#### 154. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L2460-L2464` → after: `L3383-L3386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3383-L3386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3383-L3386) · [Before (L2460-L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L2460-L2464)

```diff
-       rotate(DD, zD) {
-         let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-           pD = arguments.length > 3 ? arguments[3] : void 0;
-         const sD = WD._TmpMats[0];
-         sD.setTranslationFromFloats(0, 0, 0), KD.e.RotationAxisToRef(DD, zD, sD), this._rotateWithMatrix(sD, wD, pD)
+ 
+       function UO(pp) {
+         const ip = [];
+         return wO(pp, ip, void 0, 0), ip
```

#### 155. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L2466-L2471` → after: `L3388-L3392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3388-L3392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3388-L3392) · [Before (L2466-L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L2466-L2471)

```diff
-       setAxisAngle(DD, zD) {
-         let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-           pD = arguments.length > 3 ? arguments[3] : void 0;
-         if (0 === wD) {
-           const sD = WD._TmpQuat;
-           return KD.i.RotationAxisToRef(DD, zD, sD), void this.setRotationQuaternion(sD, wD, pD)
+ 
+       function wO(pp, ip, cp, Op) {
+         for (const op of pp[Op]) {
+           let Ip;
+           cp ? (Ip = cp.slice(), Ip.push(op)) : Ip = [op], Op === pp.length - 1 ? ip.push(Ip) : wO(pp, ip, Ip, Op + 1)
```

#### 156. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L2483-L2497` → after: `L3395-L3401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3395-L3401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3395-L3401) · [Before (L2483-L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L2483-L2497)

```diff
-       setRotationQuaternion(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           wD = arguments.length > 2 ? arguments[2] : void 0;
-         if (0 === zD) return this._decompose(), this._localRotation.pC(DD), void this._markAsDirtyAndCompose();
-         const pD = WD._TmpMats[0];
-         if (!this._getAbsoluteInverseMatrixUnscaledToRef(pD, wD)) return;
-         const sD = WD._TmpMats[1];
-         KD.e.FromQuaternionToRef(DD, sD), pD.multiplyToRef(sD, sD), this._rotateWithMatrix(sD, zD, wD)
-       }
-       setRotationMatrix(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           wD = arguments.length > 2 ? arguments[2] : void 0;
-         if (0 === zD) {
-           const pD = WD._TmpQuat;
-           return KD.i.FromRotationMatrixToRef(DD, pD), void this.setRotationQuaternion(pD, zD, wD)
+ 
+       function vO(pp, ip) {
+         if (void 0 !== pp) {
+           const cp = pp.length;
+           let Op = 0;
+           for (; Op < cp && ip(pp[Op]);) Op++;
+           return pp.slice(0, Op)
```

#### 157. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L2504-L2534` → after: `L3404-L3410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3404-L3410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3404-L3410) · [Before (L2504-L2534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L2504-L2534)

```diff
-       _rotateWithMatrix(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           wD = arguments.length > 2 ? arguments[2] : void 0;
-         const pD = this.getLocalMatrix(),
-           sD = pD.m[12],
-           KD = pD.m[13],
-           rD = pD.m[14],
-           LD = this.getParent(),
-           cD = WD._TmpMats[3],
-           gD = WD._TmpMats[4];
-         LD && 1 == zD ? (wD ? (cD.pC(wD.getWorldMatrix()), LD.getAbsoluteMatrix().multiplyToRef(cD, cD)) : cD.pC(LD.getAbsoluteMatrix()), gD.pC(cD), gD.invert(), pD.multiplyToRef(cD, pD), pD.multiplyToRef(DD, pD), pD.multiplyToRef(gD, pD)) : 1 == zD && wD ? (cD.pC(wD.getWorldMatr … [truncated]
-       }
-       _getAbsoluteInverseMatrixUnscaledToRef(DD, zD) {
-         const wD = WD._TmpMats[2];
-         return DD.pC(this.getAbsoluteMatrix()), zD ? (DD.multiplyToRef(zD.getWorldMatrix(), DD), KD.e.ScalingToRef(zD.rc.x, zD.rc.y, zD.rc.z, wD)) : KD.e.IdentityToRef(wD), DD.invert(), !isNaN(DD.m[0]) && (wD.multiplyAtIndex(0, this._scalingDeterminant), DD.multiplyToRef(wD, DD), … [truncated]
-       }
- ... (15 more removed lines; see GitHub link above)
+ 
+       function tO(pp, ip) {
+         if (void 0 !== pp) {
+           const cp = pp.length;
+           let Op = 0;
+           for (; Op < cp && ip(pp[Op]);) Op++;
+           return pp.slice(Op)
```

#### 158. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L2537-L2543` → after: `L3413-L3415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3413-L3415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3413-L3415) · [Before (L2537-L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L2537-L2543)

```diff
-       getAbsolutePosition() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
-         const zD = KD.s.Zero();
-         return this.getPositionToRef(1, DD, zD), zD
-       }
-       getAbsolutePositionToRef(DD, zD) {
-         this.getPositionToRef(1, DD, zD)
+ 
+       function HO() {
+         return "undefined" !== typeof process && !!process.nextTick && !process.browser && !0
```

#### 159. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L2545-L2550` → after: `L3417-L3422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3417-L3422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3417-L3422) · [Before (L2545-L2550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L2545-L2550)

```diff
-       computeAbsoluteMatrices() {
-         if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
-         else {
-           this._absoluteMatrix.pC(this._localMatrix);
-           const DD = this._skeleton.getPoseMatrix();
-           DD && this._absoluteMatrix.multiplyToRef(DD, this._absoluteMatrix)
+       var dO, eO = (pp => (pp[pp.Off = 0] = "Off", pp[pp.Error = 1] = "Error", pp[pp.Warning = 2] = "Warning", pp[pp.Info = 3] = "Info", pp[pp.Verbose = 4] = "Verbose", pp))(eO || {});
+       (pp => {
+         let ip = 0;
+ 
+         function cp(ip) {
+           return pp.currentLogLevel <= ip
```

#### 160. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L2552-L2596` → after: `L3424-L3426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3424-L3426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3424-L3426) · [Before (L2552-L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L2552-L2596)

```diff
-         const DD = this.children,
-           zD = DD.length;
-         for (let wD = 0; wD < zD; wD++) DD[wD].computeAbsoluteMatrices()
-       }
-       computeAbsoluteTransforms() {
-         this.computeAbsoluteMatrices()
-       }
-       WH(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-         const wD = KD.s.Zero();
-         return this.getDirectionToRef(DD, zD, wD), wD
-       }
-       getDirectionToRef(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           wD = arguments.length > 2 ? arguments[2] : void 0;
-         const pD = WD._TmpMats[0].pC(this.getAbsoluteMatrix());
- ... (29 more removed lines; see GitHub link above)
+ 
+         function Op(ip, Op) {
+           pp.loggingHost && cp(ip) && pp.loggingHost.log(ip, Op)
```

#### 161. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L2598-L2612` → after: `L3428-L3430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3428-L3430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3428-L3430) · [Before (L2598-L2612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L2598-L2612)

```diff
-       }
-       getRotationMatrix() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           zD = arguments.length > 1 ? arguments[1] : void 0;
-         const wD = KD.e.Identity();
-         return this.getRotationMatrixToRef(DD, zD, wD), wD
-       }
-       getRotationMatrixToRef() {
-         let DD = arguments.length > 1 ? arguments[1] : void 0,
-           zD = arguments.length > 2 ? arguments[2] : void 0;
-         if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(zD);
-         else {
-           const wD = WD._TmpMats[0],
-             pD = this.getAbsoluteMatrix();
-           DD ? pD.multiplyToRef(DD.getWorldMatrix(), wD) : wD.pC(pD), wD.multiplyAtIndex(0, this._scalingDeterminant), wD.multiplyAtIndex(1, this._scalingDeterminant), wD.multiplyAtIndex(2, this._scalingDeterminant), wD.getRotationMatrixToRef(zD)
+ 
+         function op(pp) {
+           Op(3, pp)
```

#### 162. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L2614-L3176` → after: `L3432-L3445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3432-L3445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3432-L3445) · [Before (L2614-L3176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L2614-L3176)

```diff
-       }
-       getAbsolutePositionFromLocal(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-         const wD = KD.s.Zero();
-         return this.getAbsolutePositionFromLocalToRef(DD, zD, wD), wD
-       }
-       getAbsolutePositionFromLocalToRef(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           wD = arguments.length > 2 ? arguments[2] : void 0;
-         const pD = WD._TmpMats[0].pC(this.getAbsoluteMatrix());
-         zD && pD.multiplyToRef(zD.getWorldMatrix(), pD), KD.s.TransformCoordinatesToRef(DD, pD, wD)
-       }
-       getLocalPositionFromAbsolute(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-         const wD = KD.s.Zero();
-         return this.getLocalPositionFromAbsoluteToRef(DD, zD, wD), wD
- ... (547 more removed lines; see GitHub link above)
+         var Ip;
+         pp.currentLogLevel = 2, pp.isDebugging = !1, pp.shouldLog = cp, pp.log = op, (Ip = op = pp.log || (pp.log = {})).error = function(pp) {
+           Op(1, pp)
+         }, Ip.warn = function(pp) {
+           Op(2, pp)
+         }, Ip.log = function(pp) {
+           Op(3, pp)
+         }, Ip.trace = function(pp) {
+           Op(4, pp)
+         };
+         const Sp = {};
+ 
+         function xp(pp) {
+           return ip >= pp
```

#### 163. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3178-L3210` → after: `L3447-L3452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3447-L3452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3447-L3452) · [Before (L3178-L3210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3178-L3210)

```diff
-         this._rampGradientsTexture = LD.d.CreateRGBATexture(DD, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
-       }
-       getRampGradients() {
-         return this._rampGradients
-       }
-       forceRefreshGradients() {
-         this._syncRampGradientTexture()
-       }
-       _syncRampGradientTexture() {
-         this._rampGradients && (this._rampGradients.sort(((DD, zD) => DD.gradient < zD.gradient ? -1 : DD.gradient > zD.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
-       }
-       addRampGradient(DD, zD) {
-         this._rampGradients || (this._rampGradients = []);
-         const wD = new pD.h(DD, zD);
-         return this._rampGradients.push(wD), this._syncRampGradientTexture(), this
-       }
- ... (17 more removed lines; see GitHub link above)
+ 
+         function Lp(ip, cp) {
+           return !!xp(ip) || (Sp[cp] = {
+             level: ip,
+             assertion: pp[cp]
+           }, pp[cp] = Ac, !1)
```

#### 164. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3212-L3219` → after: `L3454-L3457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3454-L3457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3454-L3457) · [Before (L3212-L3219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3212-L3219)

```diff
-         return 0 === this._colorGradients.length && (this._colorCreation.process = aD, this._colorProcessing.process = FD), this
-       }
-       resetDrawCache() {
-         if (this._drawWrappers) {
-           for (const DD of this._drawWrappers)
-             if (DD)
-               for (const zD of DD) zD?.dispose();
-           this._drawWrappers = []
+ 
+         function Yp(pp, ip) {
+           const cp = new Error(pp ? `Debug Failure. ${pp}` : "Debug Failure.");
+           throw Error.captureStackTrace && Error.captureStackTrace(cp, ip || Yp), cp
```

#### 165. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3221-L3254` → after: `L3459-L3461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3459-L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3459-L3461) · [Before (L3221-L3254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3221-L3254)

```diff
-       }
-       _fetchR(DD, zD, wD, pD, sD) {
-         return sD[4 * (((DD = .5 * Math.abs(DD) + .5) * wD % wD | 0) + ((zD = .5 * Math.abs(zD) + .5) * pD % pD | 0) * wD)] / 255
-       }
-       _reset() {
-         this._resetEffect()
-       }
-       _resetEffect() {
-         this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayO … [truncated]
-       }
-       _createVertexBuffers() {
-         this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertex … [truncated]
-         const DD = this._engine,
-           zD = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
-         this._vertexData = new Float32Array(this._capacity * zD), this._vertexBuffer = new rD.b(DD, this._vertexData, !0, zD);
-         let wD = 0;
- ... (18 more removed lines; see GitHub link above)
+ 
+         function Dp(pp, ip, cp, Op) {
+           pp || (ip = ip ? `False expression: ${ip}` : "False expression.", cp && (ip += "\r\nVerbose Debug Information: " + ("string" === typeof cp ? cp : cp())), Yp(ip, Op || Dp))
```

#### 166. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3256-L3296` → after: `L3463-L3465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3463-L3465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3463-L3465) · [Before (L3256-L3296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3256-L3296)

```diff
-         let cD;
-         if (this._useInstancing) {
-           const zD = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
-           this._spriteBuffer = new rD.b(DD, zD, !1, 2), cD = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
-         } else cD = this._vertexBuffer.createVertexBuffer("offset", wD, 2, this._vertexBufferSize, this._useInstancing);
-         this._vertexBuffers.offset = cD, this.resetDrawCache()
-       }
-       _createIndexBuffer() {
-         if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
-         const DD = [],
-           zD = [];
-         let wD = 0;
-         for (let pD = 0; pD < this._capacity; pD++) DD.push(wD), DD.push(wD + 1), DD.push(wD + 2), DD.push(wD), DD.push(wD + 2), DD.push(wD + 3), zD.push(wD, wD + 1, wD + 1, wD + 2, wD + 2, wD + 3, wD + 3, wD, wD, wD + 3), wD += 4;
-         this._indexBuffer = this._engine.createIndexBuffer(DD), this._linesIndexBuffer = this._engine.createIndexBuffer(zD)
-       }
-       getCapacity() {
- ... (25 more removed lines; see GitHub link above)
+ 
+         function Ap(pp, ip, cp) {
+           void 0 !== pp && null !== pp || Yp(ip, cp || Ap)
```

#### 167. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3298-L3317` → after: `L3467-L3469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3467-L3469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3467-L3469) · [Before (L3298-L3317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3298-L3317)

```diff
-         this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
-       }
-       stop() {
-         let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-         this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(DD))
-       }
-       _postStop(DD) {}
-       reset() {
-         this._stockParticles.length = 0, this._particles.length = 0
-       }
-       _appendParticleVertex(DD, zD, wD, pD) {
-         let sD = DD * this._vertexBufferSize;
-         const rD = KD.n.WI[0].pC(this._scene?.floatingOriginOffset || KD.s.ZeroReadOnly);
-         if (this._vertexData[sD++] = zD.position.x + this.worldOffset.x - rD.x, this._vertexData[sD++] = zD.position.y + this.worldOffset.y - rD.y, this._vertexData[sD++] = zD.position.z + this.worldOffset.z - rD.z, this._vertexData[sD++] = zD.color.r, this._vertexData[sD++] = zD … [truncated]
-         else if (zD._properties.initialDirection) {
-           let DD = zD._properties.initialDirection;
- ... (4 more removed lines; see GitHub link above)
+ 
+         function Pp(pp, ip, cp) {
+           for (const Op of pp) Ap(Op, ip, cp || Pp)
```

#### 168. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3319-L3328` → after: `L3471-L3474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3471-L3474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3471-L3474) · [Before (L3319-L3328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3319-L3328)

```diff
-         this._useRampGradients && zD.remapData && (this._vertexData[sD++] = zD.remapData.x, this._vertexData[sD++] = zD.remapData.y, this._vertexData[sD++] = zD.remapData.z, this._vertexData[sD++] = zD.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 ===  … [truncated]
-       }
-       _prepareParticle(DD) {}
-       _createNewOnes(DD) {
-         let zD;
-         for (let wD = 0; wD < DD && this._particles.length !== this._capacity; wD++) {
-           zD = this._createParticle(), this._particles.push(zD);
-           let DD = this._createQueueStart;
-           for (; DD;) DD.process(zD, this), DD = DD.nextItem;
-           zD._inheritParticleInfoToSubEmitters()
+ 
+         function Wp(pp) {
+           let ip = arguments.length > 2 ? arguments[2] : void 0;
+           return Yp(`${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Illegal value:"} ${"object"===typeof pp&&Qi(pp,"kind")&&Qi(pp,"pos")?"SyntaxKind: "+dp(pp.kind):JSON.stringify(pp)}`, ip || Wp)
```

#### 169. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3330-L3366` → after: `L3476-L3486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3476-L3486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3476-L3486) · [Before (L3330-L3366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3330-L3366)

```diff
-       }
-       _update(DD) {
-         if (this._alive = this._particles.length > 0, this.emitter.position) {
-           const DD = this.emitter;
-           this._emitterWorldMatrix = DD.getWorldMatrix()
-         } else {
-           const DD = this.emitter;
-           this._emitterWorldMatrix = KD.e.Translation(DD.x, DD.y, DD.z)
-         }
-         this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(DD)
-       }
-       static _GetAttributeNamesOrOptions() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         const pD = [rD.k.PositionKind, rD.k.ColorKind, "angle", "offset", "size"];
- ... (21 more removed lines; see GitHub link above)
+ 
+         function yp(pp) {}
+ 
+         function Up(pp) {
+           if ("function" !== typeof pp) return "";
+           if (Qi(pp, "name")) return pp.name;
+           {
+             const ip = Function.prototype.toString.call(pp),
+               cp = /^function\s+([\w$]+)\s*\(/.exec(ip);
+             return cp ? cp[1] : ""
+           }
```

#### 170. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3368-L3394` → after: `L3488-L3789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3488-L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3488-L3789) · [Before (L3368-L3394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3368-L3394)

```diff
-         wD && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), DD.push(this._imageProcessingConfigurationDefines.toString()))
-       }
-       fillUniformsAttributesAndSamplerNames(DD, zD, wD) {
-         zD.push(...jz._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), DD.push(...jz._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDep … [truncated]
-       }
-       _getWrapper(DD) {
-         var zD;
-         const wD = this._getCustomDrawWrapper(DD);
-         if (wD?.effect) return wD;
-         const pD = [];
-         this.fillDefines(pD, DD);
-         const KD = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
-           rD = bz.d._PrepareStringDefines(KD, pD),
-           LD = rD ? bz.d.GetConfiguration(KD) : void 0;
-         let cD = this._drawWrappers[KD];
-         cD || (cD = this._drawWrappers[KD] = [], 0 === KD || this._renderPassObserver || (this._renderPassObserver = ((zD = this._engine)._onReleaseRenderPassObservable ?? (zD._onReleaseRenderPassObservable = new sD.b)).add((DD => {
- ... (11 more removed lines; see GitHub link above)
+ 
+         function wp() {
+           let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+             ip = arguments.length > 2 ? arguments[2] : void 0;
+           const cp = function(pp) {
+             const ip = tp.get(pp);
+             if (ip) return ip;
+             const cp = [];
+             for (const op in pp) {
+               const ip = pp[op];
+               "number" === typeof ip && cp.push([ip, op])
+             }
+             const Op = Ui(cp, ((pp, ip) => qc(pp[0], ip[0])));
+             return tp.set(pp, Op), Op
+           }(arguments.length > 1 ? arguments[1] : void 0);
+           if (0 === pp) return cp.length > 0 && 0 === cp[0][0] ? cp[0][1] : "0";
+ ... (286 more added lines; see GitHub link above)
```

#### 171. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3396-L3407` → after: `L3791-L3996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3791-L3996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3791-L3996) · [Before (L3396-L3407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3396-L3407)

```diff
-             wD = [];
-           this.fillUniformsAttributesAndSamplerNames(zD, DD, wD), rD && (zD.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== LD?.defines.PREPASS_LOCAL_POSITION_INDEX && zD.push("inverseEmitterWM", "geometryWorldOffset")), gD.s … [truncated]
-             attributes: DD,
-             uniformsNames: zD,
-             samplers: wD,
-             defines: RD,
-             shaderLanguage: this._shaderLanguage,
-             multiTarget: rD,
-             indexParameters: rD ? {
-               buffersCount: LD?._mrtCount ?? 0
-             } : void 0
-           }, this._engine), RD)
+             Yp = [],
+             Dp = Up(pp, new Set);
+           for (const kp of Lp) kp.text = Hp(kp.flowNode, kp.circular), vp(kp);
+           const Ap = function pp(ip) {
+               let cp = 0;
+               for (const Op of Wp(ip)) cp = Math.max(cp, pp(Op));
+               return cp + 1
+             }(Dp),
+             Pp = function(pp) {
+               const ip = ep(Array(pp), 0);
+               for (const cp of Lp) ip[cp.level] = Math.max(ip[cp.level], cp.text.length);
+               return ip
+             }(Ap);
+           return function pp(ip, cp) {
+               if (-1 === ip.lane) {
+                 ip.lane = cp, ip.endLane = cp;
+ ... (190 more added lines; see GitHub link above)
```

#### 172. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3409-L3420` → after: `L3998-L4106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3998-L4106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3998-L4106) · [Before (L3409-L3420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3409-L3420)

```diff
-         return gD
-       }
-       _bindGeometryRendering(DD) {
-         const zD = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
-           wD = bz.d.GetConfiguration(zD);
-         if (!wD?._defines) return;
-         DD.setFloat("objectId", 0), DD.setInt("meshBlendTag", 0);
-         const pD = this._scene?.activeCamera;
-         if (DD.setFloat2("cameraInfo", pD?.minZ ?? 0, pD?.maxZ ?? 1), this.isLocal && void 0 !== wD.defines.PREPASS_LOCAL_POSITION_INDEX) {
-           DD.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
-           const zD = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || KD.s.ZeroReadOnly, KD.n.WI[0]);
-           DD.setVector3("geometryWorldOffset", zD)
+         pp.DebugTypeMapper = Tp, pp.attachDebugPrototypeIfDebug = function(ip) {
+           return pp.isDebugging ? Object.setPrototypeOf(ip, Tp.prototype) : ip
+         }, pp.printControlFlowGraph = function(pp) {
+           return console.log(fp(pp))
+         }, pp.formatControlFlowGraph = fp
+       })(dO || (dO = {}));
+       var uO = /^(0|[1-9]\d*)(?:\.(0|[1-9]\d*)(?:\.(0|[1-9]\d*)(?:-([a-z0-9-.]+))?(?:\+([a-z0-9-.]+))?)?)?$/i,
+         jO = /^(?:0|[1-9]\d*|[a-z-][a-z0-9-]*)(?:\.(?:0|[1-9]\d*|[a-z-][a-z0-9-]*))*$/i,
+         kO = /^(?:0|[1-9]\d*|[a-z-][a-z0-9-]*)$/i,
+         mO = /^[a-z0-9-]+(?:\.[a-z0-9-]+)*$/i,
+         RO = /^[a-z0-9-]+$/i,
+         qO = /^(?:0|[1-9]\d*)$/,
+         MO = class pp {
+           constructor(pp) {
+             let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+               cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+ ... (93 more added lines; see GitHub link above)
```

#### 173. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3423-L3429` → after: `L4109-L4111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4109-L4111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4109-L4111) · [Before (L3423-L3429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3423-L3429)

```diff
-       animate() {
-         let DD, zD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         if (this._started && !this.paused) {
-           if (!zD && this._scene) {
-             if (!this.isReady()) return;
-             if (this._currentRenderId === this._scene.getFrameId()) return;
-             this._currentRenderId = this._scene.getFrameId()
+       var XO = class pp {
+           constructor(pp) {
+             this._alternatives = pp ? dO.checkDefined(TO(pp), "Invalid range spec.") : Yp
```

#### 174. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3431-L3434` → after: `L4113-L4118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4113-L4118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4113-L4118) · [Before (L3431-L3434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3431-L3434)

```diff
-           if (this._scaledUpdateSpeed = this.updateSpeed * (zD ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) DD = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
-           else {
-             const zD = this._calculateEmitRate();
-             DD = zD * this._scaledUpdateSpeed | 0, this._newPartsExcess += zD * this._scaledUpdateSpeed - DD
+           static tryParse(ip) {
+             const cp = TO(ip);
+             if (cp) {
+               const ip = new pp("");
+               return ip._alternatives = cp, ip
+             }
```

#### 175. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3436-L3466` → after: `L4120-L4153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4120-L4153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4120-L4153) · [Before (L3436-L3466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3436-L3466)

```diff
-           if (this._newPartsExcess > 1 && (DD += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? DD = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopD … [truncated]
-             let DD = 0;
-             for (let zD = 0; zD < this._particles.length; zD++) {
-               const wD = this._particles[zD];
-               this._appendParticleVertices(DD, wD), DD += this._useInstancing ? 1 : 4
-             }
-             if (this._vertexBuffer)
-               if (this._useFixedCapacityForSnapshot) {
-                 const DD = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
-                   zD = this._particles.length;
-                 zD < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, zD * DD, this._fixedCapacityHighWaterMark * DD), this._fixedCapacityHighWaterMark = zD, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
-               } else this._vertexBuffer.updateDirectly(this._vertexData, 0, this._particles.length)
-           }
-           0 === this.manualEmitCount && this.disposeOnStop && this.stop()
-         }
-       }
- ... (15 more removed lines; see GitHub link above)
+           test(pp) {
+             return "string" === typeof pp && (pp = new CO(pp)),
+               function(pp, ip) {
+                 if (0 === ip.length) return !0;
+                 for (const cp of ip)
+                   if (FO(pp, cp)) return !0;
+                 return !1
+               }(pp, this._alternatives)
+           }
+           toString() {
+             return Xp(this._alternatives, GO).join(" || ") || "*"
+           }
+         },
+         lO = /\|\|/,
+         QO = /\s+/,
+         JO = /^([x*0]|[1-9]\d*)(?:\.([x*0]|[1-9]\d*)(?:\.([x*0]|[1-9]\d*)(?:-([a-z0-9-.]+))?(?:\+([a-z0-9-.]+))?)?)?$/i,
+ ... (18 more added lines; see GitHub link above)
```

#### 176. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3470-L3474` → after: `L4157-L4167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4157-L4167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4157-L4167) · [Before (L3470-L3474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3470-L3474)

```diff
-       _appendParticleVertices(DD, zD) {
-         this._appendParticleVertex(DD++, zD, 0, 0), this._useInstancing || (this._appendParticleVertex(DD++, zD, 1, 0), this._appendParticleVertex(DD++, zD, 1, 1), this._appendParticleVertex(DD, zD, 0, 1))
-       }
-       rebuild() {
-         this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
+ 
+       function fO(pp) {
+         const ip = JO.exec(pp);
+         if (!ip) return;
+         const [, cp, Op = "*", op = "*", Ip, Sp] = ip;
+         return {
+           version: new CO(aO(cp) ? 0 : parseInt(cp, 10), aO(cp) || aO(Op) ? 0 : parseInt(Op, 10), aO(cp) || aO(Op) || aO(op) ? 0 : parseInt(op, 10), Ip, Sp),
+           major: cp,
+           minor: Op,
+           patch: op
+         }
```

#### 177. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3476-L3477` → after: `L4169-L4174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4169-L4174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4169-L4174) · [Before (L3476-L3477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3476-L3477)

```diff
-       async _initShaderSourceAsync() {
-         this._engine.isWebGPU && !jz.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([wD.e(346).then((() => wD(61063))), wD.e(340).then((() => wD(61072)))])) : await Promise.all([wD.e(329).then((() => wD(61076))), Promise.all([wD.e(322), wD.e(356)]).then((() => wD(61084) … [truncated]
+ 
+       function bO(pp, ip, cp) {
+         const Op = fO(pp);
+         if (!Op) return !1;
+         const op = fO(ip);
+         return !!op && (aO(Op.major) || cp.push(nO(">=", Op.version)), aO(op.major) || cp.push(aO(op.minor) ? nO("<", op.version.increment("major")) : aO(op.patch) ? nO("<", op.version.increment("minor")) : nO("<=", op.version)), !0)
```

#### 178. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3479-L3486` → after: `L4176-L4217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4176-L4217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4176-L4217) · [Before (L3479-L3486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3479-L3486)

```diff
-       isReady() {
-         if (!this._shadersLoaded) return !1;
-         if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
-         if (this.blendMode !== ED.BLENDMODE_MULTIPLYADD) {
-           if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
-         } else {
-           if (!this._getWrapper(ED.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
-           if (!this._getWrapper(ED.BLENDMODE_ADD).effect.isReady()) return !1
+ 
+       function hO(pp, ip, cp) {
+         const Op = fO(ip);
+         if (!Op) return !1;
+         const {
+           version: op,
+           major: Ip,
+           minor: Sp,
+           patch: xp
+         } = Op;
+         if (aO(Ip)) "<" !== pp && ">" !== pp || cp.push(nO("<", CO.zero));
+         else switch (pp) {
+           case "~":
+             cp.push(nO(">=", op)), cp.push(nO("<", op.increment(aO(Sp) ? "major" : "minor")));
+             break;
+           case "^":
+ ... (26 more added lines; see GitHub link above)
```

#### 179. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3490-L3513` → after: `L4221-L4229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4221-L4229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4221-L4229) · [Before (L3490-L3513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3490-L3513)

```diff
-       _render(DD) {
-         const zD = this._getWrapper(DD),
-           wD = zD.effect,
-           pD = this._engine;
-         pD.enableEffect(zD);
-         const sD = this.defaultViewMatrix ?? this._scene.getViewMatrix();
-         wD.setTexture("diffuseSampler", this.particleTexture), wD.setMatrix("view", sD);
-         const rD = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
-         if (wD.setMatrix("projection", rD), this._isAnimationSheetEnabled && this.particleTexture) {
-           const DD = this.particleTexture.getBaseSize();
-           wD.setFloat3("particlesInfos", this.spriteCellWidth / DD.width, this.spriteCellHeight / DD.height, this.spriteCellWidth / DD.width)
-         }
-         if (wD.setVector2("translationPivot", this.translationPivot), wD.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
-           const DD = this._scene.activeCamera;
-           wD.setVector3("eyePosition", DD.globalPosition)
-         }
- ... (8 more removed lines; see GitHub link above)
+ 
+       function aO(pp) {
+         return "*" === pp || "x" === pp || "X" === pp
+       }
+ 
+       function nO(pp, ip) {
+         return {
+           operator: pp,
+           operand: ip
```

#### 180. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3517-L3556` → after: `L4232-L4236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4232-L4236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4232-L4236) · [Before (L3517-L3556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3517-L3556)

```diff
-       render() {
-         if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
-         const DD = this._engine;
-         let zD;
-         return DD.setState && (DD.setState(!1), this.forceDepthWrite && DD.setDepthWrite(!0)), zD = this.blendMode === ED.BLENDMODE_MULTIPLYADD ? this._render(ED.BLENDMODE_MULTIPLY) + this._render(ED.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttrib … [truncated]
-       }
-       _onDispose() {}
-       dispose() {
-         let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
-           zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), … [truncated]
-           const DD = this._scene.XE.indexOf(this);
-           DD > -1 && this._scene.XE.splice(DD, 1), this._scene._activeParticleSystems.dispose()
-         }
-         this.Bl.notifyObservers(this), this.Bl.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
- ... (24 more removed lines; see GitHub link above)
+ 
+       function FO(pp, ip) {
+         for (const cp of ip)
+           if (!gO(pp, cp.operator, cp.operand)) return !1;
+         return !0
```

#### 181. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3558-L3645` → after: `L4238-L4253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4238-L4253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4238-L4253) · [Before (L3558-L3645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3558-L3645)

```diff
-       serialize() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const zD = {};
-         return zD.type = this.type, zD.inheritDirection = this.inheritDirection, zD.inheritedVelocityAmount = this.inheritedVelocityAmount, zD.particleSystem = this.particleSystem.serialize(DD), zD
-       }
-       static _ParseParticleSystem(DD, zD, wD) {
-         throw (0, lD.j)("ParseParticle")
-       }
-       static Parse(DD, zD, wD) {
-         const pD = DD.particleSystem,
-           sD = new iz(iz._ParseParticleSystem(pD, zD, wD, !0));
-         return sD.type = DD.type, sD.inheritDirection = DD.inheritDirection, sD.inheritedVelocityAmount = DD.inheritedVelocityAmount, sD.particleSystem._isSubEmitter = !0, sD
-       }
-       dispose() {
-         this.particleSystem.dispose()
-       }
- ... (72 more removed lines; see GitHub link above)
+ 
+       function gO(pp, ip, cp) {
+         const Op = pp.compareTo(cp);
+         switch (ip) {
+           case "<":
+             return Op < 0;
+           case "<=":
+             return Op <= 0;
+           case ">":
+             return Op > 0;
+           case ">=":
+             return Op >= 0;
+           case "=":
+             return 0 === Op;
+           default:
+             return dO.assertNever(ip)
```

#### 182. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3648-L3649` → after: `L4256-L4258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4256-L4258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4256-L4258) · [Before (L3648-L3649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3648-L3649)

```diff
-       get source() {
-         return this._source
+ 
+       function GO(pp) {
+         return Xp(pp, rO).join(" ")
```

#### 183. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3651-L3652` → after: `L4260-L4262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4260-L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4260-L4262) · [Before (L3651-L3652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3651-L3652)

```diff
-       get isNodeGenerated() {
-         return null !== this._source
+ 
+       function rO(pp) {
+         return `${pp.operator}${pp.operand}`
```

#### 184. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3654-L3655` → after: `L4264-L4294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4264-L4294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4264-L4294) · [Before (L3654-L3655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3654-L3655)

```diff
-       get flowMap() {
-         return this._flowMap
+       var ZO = function() {
+           const pp = function() {
+             if (HO()) try {
+               const {
+                 performance: pp
+               } = cp(41653);
+               if (pp) return {
+                 shouldWriteNativeEvents: !1,
+                 performance: pp
+               }
+             } catch {}
+             if ("object" === typeof performance) return {
+               shouldWriteNativeEvents: !0,
+               performance: performance
+             }
+           }();
+ ... (15 more added lines; see GitHub link above)
```

#### 185. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3657-L3665` → after: `L4296-L4300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4296-L4300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4296-L4300) · [Before (L3657-L3665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3657-L3665)

```diff
-       set flowMap(DD) {
-         this._flowMap !== DD && (this._flowMap = DD, this._flowMapUpdate && (Tz(this._flowMapUpdate), this._flowMapUpdate = null), DD && (this._flowMapUpdate = {
-           process: DD => {
-             const zD = this.Ul()?.getTransformMatrix();
-             this._flowMap._processParticle(DD, this.flowMapStrength * this._tempScaledUpdateSpeed, zD)
-           },
-           previousItem: null,
-           nextItem: null
-         }, xz(this._flowMapUpdate, this._directionProcessing)))
+       var KO, VO, po = zO ? () => zO.now() : Date.now,
+         io = {};
+ 
+       function co(pp, ip, cp, Op) {
+         return pp ? Oo(ip, cp, Op) : So
```

#### 186. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3667-L3670` → after: `L4302-L4307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4302-L4307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4302-L4307) · [Before (L3667-L3670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3667-L3670)

```diff
-       addAttractor(DD) {
-         super.addAttractor(DD), 1 === this._attractors.length && (this._attractorUpdate = {
-           process: DD => {
-             for (const zD of this._attractors) zD._processParticle(DD, this)
+ 
+       function Oo(pp, ip, cp) {
+         let Op = 0;
+         return {
+           enter: function() {
+             1 === ++Op && Po(ip)
```

#### 187. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3672-L3674` → after: `L4309-L4312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4309-L4312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4309-L4312) · [Before (L3672-L3674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3672-L3674)

```diff
-           previousItem: null,
-           nextItem: null
-         }, xz(this._attractorUpdate, this._directionProcessing))
+           exit: function() {
+             0 === --Op ? (Po(cp), Wo(pp, ip, cp)) : Op < 0 && dO.fail("enter/exit count does not match.")
+           }
+         }
```

#### 188. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3676-L3677` → after: `L4314-L4344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4314-L4344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4314-L4344) · [Before (L3676-L3677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3676-L3677)

```diff
-       removeAttractor(DD) {
-         super.removeAttractor(DD), 0 === this._attractors.length && this._attractorUpdate && Tz(this._attractorUpdate)
+       op(io, {
+         clearMarks: () => Ho,
+         clearMeasures: () => to,
+         createTimer: () => Oo,
+         createTimerIf: () => co,
+         disable: () => jo,
+         enable: () => uo,
+         forEachMark: () => vo,
+         forEachMeasure: () => wo,
+         getCount: () => yo,
+         getDuration: () => Uo,
+         isEnabled: () => eo,
+         mark: () => Po,
+         measure: () => Wo,
+         nullTimer: () => So
+       });
+ ... (15 more added lines; see GitHub link above)
```

#### 189. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3679-L3681` → after: `L4346-L4353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4346-L4353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4346-L4353) · [Before (L3679-L3681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3679-L3681)

```diff
-       start() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
-         this.canStart() && super.start(DD)
+ 
+       function Wo(pp, ip, cp) {
+         if (xo) {
+           const Op = (void 0 !== cp ? Yo.get(cp) : void 0) ?? po(),
+             op = (void 0 !== ip ? Yo.get(ip) : void 0) ?? Lo,
+             Ip = Ao.get(pp) || 0;
+           Ao.set(pp, Ip + (Op - op)), null == VO || VO.measure(pp, ip, cp)
+         }
```

#### 190. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3683-L3685` → after: `L4355-L4357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4355-L4357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4355-L4357) · [Before (L3683-L3685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3683-L3685)

```diff
-       _prepareSubEmitterInternalArray() {
-         if (this._subEmitters = new Array, this.subEmitters)
-           for (const DD of this.subEmitters) DD instanceof az ? this._subEmitters.push([new iz(DD)]) : DD instanceof iz ? this._subEmitters.push([DD]) : DD instanceof Array && this._subEmitters.push(DD)
+ 
+       function yo(pp) {
+         return Do.get(pp) || 0
```

#### 191. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3687-L3691` → after: `L4359-L4361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4359-L4361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4359-L4361) · [Before (L3687-L3691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3687-L3691)

```diff
-       _stopSubEmitters() {
-         if (this.activeSubSystems) {
-           for (const DD of this.activeSubSystems) DD.stop(!0);
-           this.activeSubSystems = []
-         }
+ 
+       function Uo(pp) {
+         return Ao.get(pp) || 0
```

#### 192. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3693-L3695` → after: `L4363-L4365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4363-L4365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4363-L4365) · [Before (L3693-L3695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3693-L3695)

```diff
-       _removeFromRoot() {
-         if (!this._rootParticleSystem) return;
-         const DD = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== DD && this._rootParticleSystem.activeSubSystems.splice(DD, 1), this._rootParticleSystem = null
+ 
+       function wo(pp) {
+         Ao.forEach(((ip, cp) => pp(cp, ip)))
```

#### 193. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3697-L3698` → after: `L4367-L4369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4367-L4369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4367-L4369) · [Before (L3697-L3698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3697-L3698)

```diff
-       _preStart() {
-         this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
+ 
+       function vo(pp) {
+         Yo.forEach(((ip, cp) => pp(cp)))
```

#### 194. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3700-L3701` → after: `L4371-L4373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4371-L4373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4371-L4373) · [Before (L3700-L3701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3700-L3701)

```diff
-       _postStop(DD) {
-         DD && this._stopSubEmitters()
+ 
+       function to(pp) {
+         void 0 !== pp ? Ao.delete(pp) : Ao.clear(), null == VO || VO.clearMeasures(pp)
```

#### 195. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3703-L3712` → after: `L4375-L4377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4375-L4377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4375-L4377) · [Before (L3703-L3712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3703-L3712)

```diff
-       _prepareParticle(DD) {
-         if (this._subEmitters && this._subEmitters.length > 0) {
-           const zD = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
-           DD._properties.attachedSubEmitters = [];
-           for (const wD of zD)
-             if (0 === wD.type) {
-               const zD = wD.clone();
-               DD._properties.attachedSubEmitters.push(zD), zD.particleSystem.start()
-             }
-         }
+ 
+       function Ho(pp) {
+         void 0 !== pp ? (Do.delete(pp), Yo.delete(pp)) : (Do.clear(), Yo.clear()), null == VO || VO.clearMarks(pp)
```

#### 196. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3714-L3728` → after: `L4379-L4387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4379-L4387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4379-L4387) · [Before (L3714-L3728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3714-L3728)

```diff
-       _onDispose() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), DD && this.particles)
-           for (const wD of this.particles)
-             if (wD._properties.attachedSubEmitters)
-               for (let DD = wD._properties.attachedSubEmitters.length - 1; DD >= 0; DD -= 1) wD._properties.attachedSubEmitters[DD].dispose();
-         if (zD && this.activeSubSystems)
-           for (let wD = this.activeSubSystems.length - 1; wD >= 0; wD -= 1) this.activeSubSystems[wD].dispose();
-         if (this._subEmitters && this._subEmitters.length) {
-           for (let DD = 0; DD < this._subEmitters.length; DD++)
-             for (const zD of this._subEmitters[DD]) zD.dispose();
-           this._subEmitters = [], this.subEmitters = []
-         }
-         this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
+ 
+       function eo() {
+         return xo
+       }
+ 
+       function uo() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RS;
+         var ip;
+         return xo || (xo = !0, KO || (KO = sO()), (null == KO ? void 0 : KO.performance) && (Lo = KO.performance.timeOrigin, (KO.shouldWriteNativeEvents || (null == (ip = null == pp ? void 0 : pp.cpuProfilingEnabled) ? void 0 : ip.call(pp)) || (null == pp ? void 0 : pp.debugMode) … [truncated]
```

#### 197. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3730` → after: `L4389-L4395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4389-L4395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4389-L4395) · [Before (L3730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3730)

```diff
-       static _Parse(DD, zD, wD, pD) {
+ 
+       function jo() {
+         xo && (Yo.clear(), Do.clear(), Ao.clear(), VO = void 0, xo = !1)
+       }(pp => {
+         let ip, Op, op = 0,
+           Ip = 0;
+         const Sp = [];
```

#### 198. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3732-L3782` → after: `L4397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4397) · [Before (L3732-L3782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3732-L3782)

```diff
-         sD = wD instanceof lz.c ? null : wD;
-         const rD = (0, Sz.e)("BABYLON.Texture");
-         if (rD && sD)
-           if (DD.texture) zD.particleTexture = rD.Parse(DD.texture, sD, pD);
-           else if (DD.textureName) {
-           const wD = DD.textureSettings;
-           if (zD.particleTexture = new rD(pD + DD.textureName, sD, !1, void 0 === DD.invertY || DD.invertY, wD ? wD.samplingMode : void 0), zD.particleTexture.name = DD.textureName, wD) {
-             const DD = zD.particleTexture;
-             for (const zD of oz) void 0 !== wD[zD] && (DD[zD] = wD[zD])
-           }
-         }
-         if (DD.emitterId || 0 === DD.emitterId || void 0 !== DD.emitter ? (DD.emitterId || 0 === DD.emitterId) && sD ? (zD.emitter = sD.getLastMeshById(DD.emitterId), zD.emitter || (zD.emitter = KD.s.Zero())) : zD.emitter = KD.s.FromArray(DD.emitter) : zD.emitter = KD.s.Zero(), z … [truncated]
-           for (let wD = 0; wD < DD.animations.length; wD++) {
-             const pD = DD.animations[wD],
-               sD = (0, Sz.e)("BABYLON.Animation");
-             sD && zD.animations.push(sD.Parse(pD))
- ... (35 more removed lines; see GitHub link above)
+         const Lp = [];
```

#### 199. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3784-L3847` → after: `L4399-L4404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4399-L4404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4399-L4404) · [Before (L3784-L3847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3784-L3847)

```diff
-         if (DD.particleEmitterType) {
-           switch (DD.particleEmitterType.type) {
-             case "SphereParticleEmitter":
-               LD = new GD;
-               break;
-             case "SphereDirectedParticleEmitter":
-               LD = new hD;
-               break;
-             case "ConeEmitter":
-             case "ConeParticleEmitter":
-               LD = new MD;
-               break;
-             case "ConeDirectedParticleEmitter":
-               LD = new OD;
-               break;
-             case "CylinderParticleEmitter":
- ... (48 more removed lines; see GitHub link above)
+         var Dp;
+         pp.startTracing = function(Yp, Dp, Ap) {
+           if (dO.assert(!oo, "Tracing already started"), void 0 === ip) try {
+             ip = cp(41659)
+           } catch (wp) {
+             throw new Error(`tracing requires having fs\n(original error: ${wp.message||wp})`)
```

#### 200. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3849-L3859` → after: `L4406-L4594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4406-L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4406-L4594) · [Before (L3849-L3859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3849-L3859)

```diff
-         return az._Parse(DD, UD, zD, wD), DD.textureMask && (UD.textureMask = RD.h.FromArray(DD.textureMask)), DD.worldOffset && (UD.worldOffset = KD.s.FromArray(DD.worldOffset)), DD.preventAutoStart && (UD.preventAutoStart = DD.preventAutoStart), DD.metadata && (UD.metadata = DD … [truncated]
-       }
-       serialize() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const zD = {};
-         if (az._Serialize(zD, this, DD), zD.textureMask = this.textureMask.QpD(), zD.customShader = this.customShader, zD.preventAutoStart = this.preventAutoStart, zD.worldOffset = this.worldOffset.QpD(), this.metadata && (zD.metadata = this.metadata), this.subEmitters) {
-           zD.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
-           for (const wD of this._subEmitters) {
-             const pD = [];
-             for (const zD of wD) zD.particleSystem.doNotSerialize || pD.push(zD.serialize(DD));
-             zD.subEmitters.push(pD)
+           Op = Yp, Sp.length = 0, void 0 === xp && (xp = cx(Dp, "legend.json")), ip.existsSync(Dp) || ip.mkdirSync(Dp, {
+             recursive: !0
+           });
+           const Pp = "build" === Op ? `.${process.pid}-${++op}` : "server" === Op ? `.${process.pid}` : "",
+             Wp = cx(Dp, `trace${Pp}.json`),
+             yp = cx(Dp, `types${Pp}.json`);
+           Lp.push({
+             configFilePath: Ap,
+             tracePath: Wp,
+             typesPath: yp
+           }), Ip = ip.openSync(Wp, "w"), oo = pp;
+           const Up = {
+             cat: "__metadata",
+             ph: "M",
+             ts: 1e3 * po(),
+             pid: 1,
+ ... (173 more added lines; see GitHub link above)
```

#### 201. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3862-L3864` → after: `L4597-L4598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4597-L4598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4597-L4598) · [Before (L3862-L3864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3862-L3864)

```diff
-         if (this._attractors && this._attractors.length) {
-           zD.attractors = [];
-           for (const DD of this._attractors) zD.attractors.push(DD.serialize())
+         pp.dumpLegend = function() {
+           xp && ip.writeFileSync(xp, JSON.stringify(Lp))
```

#### 202. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3866` → after: `L4600-L4655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4600-L4655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4600-L4655) · [Before (L3866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3866)

```diff
-         return zD
+       })(Io || (Io = {}));
+       var ko = Io.startTracing,
+         mo = Io.dumpLegend,
+         Ro = (pp => (pp[pp.Unknown = 0] = "Unknown", pp[pp.EndOfFileToken = 1] = "EndOfFileToken", pp[pp.SingleLineCommentTrivia = 2] = "SingleLineCommentTrivia", pp[pp.MultiLineCommentTrivia = 3] = "MultiLineCommentTrivia", pp[pp.NewLineTrivia = 4] = "NewLineTrivia", pp[pp.White … [truncated]
+         qo = (pp => (pp[pp.None = 0] = "None", pp[pp.Let = 1] = "Let", pp[pp.Const = 2] = "Const", pp[pp.Using = 4] = "Using", pp[pp.AwaitUsing = 6] = "AwaitUsing", pp[pp.NestedNamespace = 8] = "NestedNamespace", pp[pp.Synthesized = 16] = "Synthesized", pp[pp.Namespace = 32] = "N … [truncated]
+         Mo = (pp => (pp[pp.None = 0] = "None", pp[pp.Public = 1] = "Public", pp[pp.Private = 2] = "Private", pp[pp.Protected = 4] = "Protected", pp[pp.Readonly = 8] = "Readonly", pp[pp.Override = 16] = "Override", pp[pp.Export = 32] = "Export", pp[pp.Abstract = 64] = "Abstract",  … [truncated]
+         Co = (pp => (pp[pp.None = 0] = "None", pp[pp.IntrinsicNamedElement = 1] = "IntrinsicNamedElement", pp[pp.IntrinsicIndexedElement = 2] = "IntrinsicIndexedElement", pp[pp.IntrinsicElement = 3] = "IntrinsicElement", pp))(Co || {}),
+         Eo = (pp => (pp[pp.None = 0] = "None", pp[pp.Succeeded = 1] = "Succeeded", pp[pp.Failed = 2] = "Failed", pp[pp.ReportsUnmeasurable = 8] = "ReportsUnmeasurable", pp[pp.ReportsUnreliable = 16] = "ReportsUnreliable", pp[pp.ReportsMask = 24] = "ReportsMask", pp[pp.ComplexityO … [truncated]
+         Xo = (pp => (pp[pp.None = 0] = "None", pp[pp.Always = 1] = "Always", pp[pp.Never = 2] = "Never", pp[pp.Sometimes = 3] = "Sometimes", pp))(Xo || {}),
+         Qo = (pp => (pp[pp.None = 0] = "None", pp[pp.Auto = 1] = "Auto", pp[pp.Loop = 2] = "Loop", pp[pp.Unique = 3] = "Unique", pp[pp.Node = 4] = "Node", pp[pp.KindMask = 7] = "KindMask", pp[pp.ReservedInNestedScopes = 8] = "ReservedInNestedScopes", pp[pp.Optimistic = 16] = "Opt … [truncated]
+         Jo = (pp => (pp[pp.None = 0] = "None", pp[pp.HasIndices = 1] = "HasIndices", pp[pp.Global = 2] = "Global", pp[pp.IgnoreCase = 4] = "IgnoreCase", pp[pp.Multiline = 8] = "Multiline", pp[pp.DotAll = 16] = "DotAll", pp[pp.Unicode = 32] = "Unicode", pp[pp.UnicodeSets = 64] = " … [truncated]
+         Bo = (pp => (pp[pp.None = 0] = "None", pp[pp.PrecedingLineBreak = 1] = "PrecedingLineBreak", pp[pp.PrecedingJSDocComment = 2] = "PrecedingJSDocComment", pp[pp.Unterminated = 4] = "Unterminated", pp[pp.ExtendedUnicodeEscape = 8] = "ExtendedUnicodeEscape", pp[pp.Scientific  … [truncated]
+         No = (pp => (pp[pp.Unreachable = 1] = "Unreachable", pp[pp.Start = 2] = "Start", pp[pp.BranchLabel = 4] = "BranchLabel", pp[pp.LoopLabel = 8] = "LoopLabel", pp[pp.Assignment = 16] = "Assignment", pp[pp.TrueCondition = 32] = "TrueCondition", pp[pp.FalseCondition = 64] = "F … [truncated]
+         To = (pp => (pp[pp.ExpectError = 0] = "ExpectError", pp[pp.Ignore = 1] = "Ignore", pp))(To || {}),
+         fo = class {},
+         bo = (pp => (pp[pp.RootFile = 0] = "RootFile", pp[pp.SourceFromProjectReference = 1] = "SourceFromProjectReference", pp[pp.OutputFromProjectReference = 2] = "OutputFromProjectReference", pp[pp.Import = 3] = "Import", pp[pp.ReferenceFile = 4] = "ReferenceFile", pp[pp.TypeR … [truncated]
+ ... (40 more added lines; see GitHub link above)
```

#### 203. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3868-L3874` → after: `L4657-L4813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4657-L4813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4657-L4813) · [Before (L3868-L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3868-L3874)

```diff
-       static _Serialize(DD, zD, wD) {
-         if (DD.name = zD.name, DD.id = zD.id, DD.bA = zD.getCapacity(), DD.disposeOnStop = zD.disposeOnStop, DD.manualEmitCount = zD.manualEmitCount, zD.emitter.position) {
-           const wD = zD.emitter;
-           DD.emitterId = wD.id
-         } else {
-           const wD = zD.emitter;
-           DD.emitter = wD.QpD()
+       var kI = (pp => (pp[pp.Classic = 1] = "Classic", pp[pp.NodeJs = 2] = "NodeJs", pp[pp.Node10 = 2] = "Node10", pp[pp.Node16 = 3] = "Node16", pp[pp.NodeNext = 99] = "NodeNext", pp[pp.Bundler = 100] = "Bundler", pp))(kI || {}),
+         mI = (pp => (pp[pp.Legacy = 1] = "Legacy", pp[pp.Auto = 2] = "Auto", pp[pp.Force = 3] = "Force", pp))(mI || {}),
+         RI = (pp => (pp[pp.FixedPollingInterval = 0] = "FixedPollingInterval", pp[pp.PriorityPollingInterval = 1] = "PriorityPollingInterval", pp[pp.DynamicPriorityPolling = 2] = "DynamicPriorityPolling", pp[pp.FixedChunkSizePolling = 3] = "FixedChunkSizePolling", pp[pp.UseFsEven … [truncated]
+         qI = (pp => (pp[pp.UseFsEvents = 0] = "UseFsEvents", pp[pp.FixedPollingInterval = 1] = "FixedPollingInterval", pp[pp.DynamicPriorityPolling = 2] = "DynamicPriorityPolling", pp[pp.FixedChunkSizePolling = 3] = "FixedChunkSizePolling", pp))(qI || {}),
+         MI = (pp => (pp[pp.FixedInterval = 0] = "FixedInterval", pp[pp.PriorityInterval = 1] = "PriorityInterval", pp[pp.DynamicPriority = 2] = "DynamicPriority", pp[pp.FixedChunkSize = 3] = "FixedChunkSize", pp))(MI || {}),
+         CI = (pp => (pp[pp.None = 0] = "None", pp[pp.CommonJS = 1] = "CommonJS", pp[pp.AMD = 2] = "AMD", pp[pp.UMD = 3] = "UMD", pp[pp.System = 4] = "System", pp[pp.ES2015 = 5] = "ES2015", pp[pp.ES2020 = 6] = "ES2020", pp[pp.ES2022 = 7] = "ES2022", pp[pp.ESNext = 99] = "ESNext",  … [truncated]
+         EI = (pp => (pp[pp.None = 0] = "None", pp[pp.Preserve = 1] = "Preserve", pp[pp.React = 2] = "React", pp[pp.ReactNative = 3] = "ReactNative", pp[pp.ReactJSX = 4] = "ReactJSX", pp[pp.ReactJSXDev = 5] = "ReactJSXDev", pp))(EI || {}),
+         XI = (pp => (pp[pp.Remove = 0] = "Remove", pp[pp.Preserve = 1] = "Preserve", pp[pp.Error = 2] = "Error", pp))(XI || {}),
+         lI = (pp => (pp[pp.CarriageReturnLineFeed = 0] = "CarriageReturnLineFeed", pp[pp.LineFeed = 1] = "LineFeed", pp))(lI || {}),
+         QI = (pp => (pp[pp.Unknown = 0] = "Unknown", pp[pp.JS = 1] = "JS", pp[pp.JSX = 2] = "JSX", pp[pp.TS = 3] = "TS", pp[pp.TSX = 4] = "TSX", pp[pp.External = 5] = "External", pp[pp.JSON = 6] = "JSON", pp[pp.Deferred = 7] = "Deferred", pp))(QI || {}),
+         JI = (pp => (pp[pp.ES3 = 0] = "ES3", pp[pp.ES5 = 1] = "ES5", pp[pp.ES2015 = 2] = "ES2015", pp[pp.ES2016 = 3] = "ES2016", pp[pp.ES2017 = 4] = "ES2017", pp[pp.ES2018 = 5] = "ES2018", pp[pp.ES2019 = 6] = "ES2019", pp[pp.ES2020 = 7] = "ES2020", pp[pp.ES2021 = 8] = "ES2021", p … [truncated]
+         BI = (pp => (pp[pp.Standard = 0] = "Standard", pp[pp.JSX = 1] = "JSX", pp))(BI || {}),
+         NI = (pp => (pp[pp.None = 0] = "None", pp[pp.Recursive = 1] = "Recursive", pp))(NI || {}),
+         TI = (pp => (pp[pp.EOF = -1] = "EOF", pp[pp.nullCharacter = 0] = "nullCharacter", pp[pp.maxAsciiCharacter = 127] = "maxAsciiCharacter", pp[pp.lineFeed = 10] = "lineFeed", pp[pp.carriageReturn = 13] = "carriageReturn", pp[pp.lineSeparator = 8232] = "lineSeparator", pp[pp.p … [truncated]
+         fI = (pp => (pp.Ts = ".ts", pp.Tsx = ".tsx", pp.Dts = ".d.ts", pp.Js = ".js", pp.Jsx = ".jsx", pp.Json = ".json", pp.TsBuildInfo = ".tsbuildinfo", pp.Mjs = ".mjs", pp.Mts = ".mts", pp.Dmts = ".d.mts", pp.Cjs = ".cjs", pp.Cts = ".cts", pp.Dcts = ".d.cts", pp))(fI || {}),
+         bI = (pp => (pp[pp.None = 0] = "None", pp[pp.ContainsTypeScript = 1] = "ContainsTypeScript", pp[pp.ContainsJsx = 2] = "ContainsJsx", pp[pp.ContainsESNext = 4] = "ContainsESNext", pp[pp.ContainsES2022 = 8] = "ContainsES2022", pp[pp.ContainsES2021 = 16] = "ContainsES2021",  … [truncated]
+ ... (141 more added lines; see GitHub link above)
```

#### 204. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3876-L3893` → after: `L4815-L4831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4815-L4831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4815-L4831) · [Before (L3876-L3893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3876-L3893)

```diff
-         if (zD.particleEmitterType && (DD.particleEmitterType = zD.particleEmitterType.serialize()), zD.particleTexture)
-           if (wD) DD.texture = zD.particleTexture.serialize();
-           else {
-             const wD = zD.particleTexture;
-             DD.textureName = zD.particleTexture.name, DD.invertY = !!wD._invertY;
-             const pD = {};
-             for (const DD of oz) pD[DD] = wD[DD];
-             pD.samplingMode = wD.samplingMode, DD.textureSettings = pD
-           } DD.isLocal = zD.isLocal, Wz.d.AppendSerializedAnimations(zD, DD), DD.beginAnimationOnStart = zD.beginAnimationOnStart, DD.beginAnimationFrom = zD.beginAnimationFrom, DD.beginAnimationTo = zD.beginAnimationTo, DD.beginAnimationLoop = zD.beginAnimationLoop, DD.startDela … [truncated]
-         const pD = zD.getColorGradients();
-         if (pD) {
-           DD.colorGradients = [];
-           for (const zD of pD) {
-             const wD = {
-               gradient: zD.gradient,
-               color1: zD.color1.QpD()
- ... (2 more removed lines; see GitHub link above)
+       }
+       var xS = {
+           Low: 32,
+           Medium: 64,
+           High: 256
+         },
+         LS = SS(xS),
+         YS = SS(xS);
+ 
+       function DS(pp, ip, cp, Op, op) {
+         let Ip = cp;
+         for (let xp = ip.length; Op && xp; Sp(), xp--) {
+           const Sp = ip[cp];
+           if (!Sp) continue;
+           if (Sp.isClosed) {
+             ip[cp] = void 0;
+ ... (1 more added lines; see GitHub link above)
```

#### 205. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3896-L3904` → after: `L4837-L4860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4837-L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4837-L4860) · [Before (L3896-L3904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3896-L3904)

```diff
-         const sD = zD.getRampGradients();
-         if (sD) {
-           DD.rampGradients = [];
-           for (const zD of sD) {
-             const wD = {
-               gradient: zD.gradient,
-               color: zD.color.QpD()
-             };
-             DD.rampGradients.push(wD)
+         return cp;
+ 
+         function Sp() {
+           ++cp === ip.length && (Ip < cp && (ip.length = Ip), cp = 0, Ip = 0)
+         }
+       }
+ 
+       function AS(pp) {
+         const ip = [],
+           cp = [],
+           Op = Sp(250),
+           op = Sp(500),
+           Ip = Sp(2e3);
+         return function(cp, Op, op) {
+           const Ip = {
+             fileName: cp,
+ ... (8 more added lines; see GitHub link above)
```

#### 206. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3906` → after: `L4862-L4866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4862-L4866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4862-L4866) · [Before (L3906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3906)

```diff
-           DD.useRampGradients = zD.useRampGradients
+         };
+ 
+         function Sp(pp) {
+           const ip = [];
+           return ip.pollingInterval = pp, ip.pollIndex = 0, ip.pollScheduled = !1, ip
```

#### 207. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3908-L3916` → after: `L4868-L4891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4868-L4891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4868-L4891) · [Before (L3908-L3916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3908-L3916)

```diff
-         const KD = zD.getColorRemapGradients();
-         if (KD) {
-           DD.colorRemapGradients = [];
-           for (const zD of KD) {
-             const wD = {
-               gradient: zD.gradient,
-               factor1: zD.factor1
-             };
-             void 0 !== zD.factor2 ? wD.factor2 = zD.factor2 : wD.factor2 = zD.factor1, DD.colorRemapGradients.push(wD)
+ 
+         function xp(pp, ip) {
+           ip.pollIndex = Yp(ip, ip.pollingInterval, ip.pollIndex, LS[ip.pollingInterval]), ip.length ? Wp(ip.pollingInterval) : (dO.assert(0 === ip.pollIndex), ip.pollScheduled = !1)
+         }
+ 
+         function Lp(pp, ip) {
+           Yp(cp, 250, 0, cp.length), xp(0, ip), !ip.pollScheduled && cp.length && Wp(250)
+         }
+ 
+         function Yp(ip, Op, op, Ip) {
+           return DS(pp, ip, op, Ip, (function(pp, op, Ip) {
+             Ip ? (pp.unchangedPolls = 0, ip !== cp && (ip[op] = void 0, Sp = pp, cp.push(Sp), Pp(250))) : pp.unchangedPolls !== YS[Op] ? pp.unchangedPolls++ : ip === cp ? (pp.unchangedPolls = 1, ip[op] = void 0, Ap(pp, 250)) : 2e3 !== Op && (pp.unchangedPolls++, ip[op] = void 0,  … [truncated]
+             var Sp
+           }))
+         }
+ 
+ ... (8 more added lines; see GitHub link above)
```

#### 208. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3919-L3927` → after: `L4894-L4938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4894-L4938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4894-L4938) · [Before (L3919-L3927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3919-L3927)

```diff
-         const rD = zD.getAlphaRemapGradients();
-         if (rD) {
-           DD.alphaRemapGradients = [];
-           for (const zD of rD) {
-             const wD = {
-               gradient: zD.gradient,
-               factor1: zD.factor1
-             };
-             void 0 !== zD.factor2 ? wD.factor2 = zD.factor2 : wD.factor2 = zD.factor1, DD.alphaRemapGradients.push(wD)
+ 
+         function Ap(pp, ip) {
+           Dp(ip).push(pp), Pp(ip)
+         }
+ 
+         function Pp(pp) {
+           Dp(pp).pollScheduled || Wp(pp)
+         }
+ 
+         function Wp(ip) {
+           Dp(ip).pollScheduled = pp.setTimeout(250 === ip ? Lp : xp, ip, 250 === ip ? "pollLowPollingIntervalQueue" : "pollPollingIntervalQueue", Dp(ip))
+         }
+       }
+ 
+       function PS(pp, ip, cp, Op) {
+         const op = pc(),
+ ... (29 more added lines; see GitHub link above)
```

#### 209. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3930-L3938` → after: `L4941-L4955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4941-L4955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4941-L4955) · [Before (L3930-L3938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3930-L3938)

```diff
-         const LD = zD.getSizeGradients();
-         if (LD) {
-           DD.sizeGradients = [];
-           for (const zD of LD) {
-             const wD = {
-               gradient: zD.gradient,
-               factor1: zD.factor1
-             };
-             void 0 !== zD.factor2 ? wD.factor2 = zD.factor2 : wD.factor2 = zD.factor1, DD.sizeGradients.push(wD)
+       }
+ 
+       function WS(pp, ip, cp, Op, op) {
+         const Ip = iO(ip)(cp),
+           Sp = pp.get(Ip);
+         return Sp ? Sp.callbacks.push(Op) : pp.set(Ip, {
+           watcher: op(((ip, cp, Op) => {
+             var op;
+             return null == (op = pp.get(Ip)) ? void 0 : op.callbacks.slice().forEach((pp => pp(ip, cp, Op)))
+           })),
+           callbacks: [Op]
+         }), {
+           close: () => {
+             const ip = pp.get(Ip);
+             ip && sc(ip.callbacks, Op) && !ip.callbacks.length && (pp.delete(Ip), Fr(ip))
```

#### 210. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3941-L3949` → after: `L4958-L5036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4958-L5036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4958-L5036) · [Before (L3941-L3949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3941-L3949)

```diff
-         const cD = zD.getAngularSpeedGradients();
-         if (cD) {
-           DD.angularSpeedGradients = [];
-           for (const zD of cD) {
-             const wD = {
-               gradient: zD.gradient,
-               factor1: zD.factor1
-             };
-             void 0 !== zD.factor2 ? wD.factor2 = zD.factor2 : wD.factor2 = zD.factor1, DD.angularSpeedGradients.push(wD)
+       }
+ 
+       function yS(pp, ip) {
+         const cp = pp.mtime.getTime(),
+           Op = ip.getTime();
+         return cp !== Op && (pp.mtime = ip, pp.callback(pp.fileName, US(cp, Op), ip), !0)
+       }
+ 
+       function US(pp, ip) {
+         return 0 === pp ? 0 : 0 === ip ? 2 : 1
+       }
+       var wS = ["/node_modules/.", "/.git", "/.#"],
+         vS = Ac;
+ 
+       function tS(pp) {
+         return vS(pp)
+ ... (63 more added lines; see GitHub link above)
```

#### 211. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3952-L3960` → after: `L5039-L5079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR5039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L5039-L5079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L5039-L5079) · [Before (L3952-L3960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3952-L3960)

```diff
-         const gD = zD.getVelocityGradients();
-         if (gD) {
-           DD.velocityGradients = [];
-           for (const zD of gD) {
-             const wD = {
-               gradient: zD.gradient,
-               factor1: zD.factor1
-             };
-             void 0 !== zD.factor2 ? wD.factor2 = zD.factor2 : wD.factor2 = zD.factor1, DD.velocityGradients.push(wD)
+ 
+         function vp(pp, ip, cp, Op) {
+           var op, Ip;
+           let Sp, xp;
+           xc(cp) ? Sp = cp : xp = cp, Ap.forEach(((pp, cp) => {
+             if ((!xp || !0 !== xp.get(cp)) && (cp === ip || IO(ip, cp) && ip[cp.length] === MS))
+               if (xp)
+                 if (Op) {
+                   const pp = xp.get(cp);
+                   pp ? pp.push(...Op) : xp.set(cp, Op.slice())
+                 } else xp.set(cp, !0);
+             else pp.forEach((pp => {
+               let {
+                 callback: ip
+               } = pp;
+               return ip(Sp)
+ ... (25 more added lines; see GitHub link above)
```

#### 212. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3963-L3971` → after: `L5093-L5118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR5093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L5093-L5118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L5093-L5118) · [Before (L3963-L3971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3963-L3971)

```diff
-         const RD = zD.getDragGradients();
-         if (RD) {
-           DD.dragGradients = [];
-           for (const zD of RD) {
-             const wD = {
-               gradient: zD.gradient,
-               factor1: zD.factor1
-             };
-             void 0 !== zD.factor2 ? wD.factor2 = zD.factor2 : wD.factor2 = zD.factor1, DD.dragGradients.push(wD)
+ 
+         function Hp(pp) {
+           if (!pp) return;
+           const ip = pp.childWatches;
+           pp.childWatches = Yp;
+           for (const cp of ip) cp.close(), Hp(Dp.get(Up(cp.dirName)))
+         }
+ 
+         function dp(pp) {
+           (null == pp ? void 0 : pp.targetWatcher) && (pp.targetWatcher.close(), pp.targetWatcher = void 0)
+         }
+ 
+         function ep(pp, ip, cp) {
+           const Op = Dp.get(ip);
+           if (!Op) return !1;
+           const xp = Sx(Sp(pp));
+ ... (10 more added lines; see GitHub link above)
```

#### 213. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3974-L3982` → after: `L5121-L5138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR5121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L5121-L5138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L5121-L5138) · [Before (L3974-L3982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3974-L3982)

```diff
-         const AD = zD.getEmitRateGradients();
-         if (AD) {
-           DD.emitRateGradients = [];
-           for (const zD of AD) {
-             const wD = {
-               gradient: zD.gradient,
-               factor1: zD.factor1
-             };
-             void 0 !== zD.factor2 ? wD.factor2 = zD.factor2 : wD.factor2 = zD.factor1, DD.emitRateGradients.push(wD)
+ 
+         function jp(pp, ip) {
+           return Zp(wS, (ip => function(pp, ip) {
+             return !!pp.includes(ip) || !cp && Up(pp).includes(ip)
+           }(pp, ip))) || uS(pp, ip, cp, Op)
+         }
+       }
+       var eS = (pp => (pp[pp.File = 0] = "File", pp[pp.Directory = 1] = "Directory", pp))(eS || {});
+ 
+       function uS(pp, ip, cp, Op) {
+         return ((null == ip ? void 0 : ip.excludeDirectories) || (null == ip ? void 0 : ip.excludeFiles)) && (Rb(pp, null == ip ? void 0 : ip.excludeFiles, cp, Op()) || Rb(pp, null == ip ? void 0 : ip.excludeDirectories, cp, Op()))
+       }
+ 
+       function jS(pp, ip, cp, Op, op) {
+         return (Ip, Sp) => {
+           if ("rename" === Ip) {
+ ... (2 more added lines; see GitHub link above)
```

#### 214. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3985-L3993` → after: `L5141-L5228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR5141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L5141-L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L5141-L5228) · [Before (L3985-L3993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3985-L3993)

```diff
-         const UD = zD.getStartSizeGradients();
-         if (UD) {
-           DD.startSizeGradients = [];
-           for (const zD of UD) {
-             const wD = {
-               gradient: zD.gradient,
-               factor1: zD.factor1
-             };
-             void 0 !== zD.factor2 ? wD.factor2 = zD.factor2 : wD.factor2 = zD.factor1, DD.startSizeGradients.push(wD)
+       }
+ 
+       function kS(pp) {
+         let {
+           pollingWatchFileWorker: ip,
+           getModifiedTime: cp,
+           setTimeout: Op,
+           clearTimeout: op,
+           fsWatchWorker: Ip,
+           fileSystemEntryExists: Sp,
+           useCaseSensitiveFileNames: xp,
+           getCurrentDirectory: Lp,
+           fsSupportsRecursiveFsWatch: Yp,
+           getAccessibleSortedChildDirectories: Dp,
+           realpath: Ap,
+           tscWatchFile: Pp,
+ ... (72 more added lines; see GitHub link above)
```

#### 215. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L3996-L4002` → after: `L5231-L5253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR5231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L5231-L5253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L5231-L5253) · [Before (L3996-L4002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L3996-L4002)

```diff
-         const fD = zD.getLifeTimeGradients();
-         if (fD) {
-           DD.lifeTimeGradients = [];
-           for (const zD of fD) {
-             const wD = {
-               gradient: zD.gradient,
-               factor1: zD.factor1
+ 
+         function Mp() {
+           return ep || (ep = AS({
+             getModifiedTime: cp,
+             setTimeout: Op
+           }))
+         }
+ 
+         function Cp() {
+           return jp || (jp = function(pp) {
+             const ip = [];
+             let cp, Op = 0;
+             return function(cp, Op) {
+               const op = {
+                 fileName: cp,
+                 callback: Op,
+ ... (7 more added lines; see GitHub link above)
```

#### 216. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L4004` → after: `L5255-L5273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR5255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L5255-L5273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L5255-L5273) · [Before (L4004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L4004)

```diff
-             void 0 !== zD.factor2 ? wD.factor2 = zD.factor2 : wD.factor2 = zD.factor1, DD.lifeTimeGradients.push(wD)
+ 
+             function op() {
+               cp = void 0, Op = DS(pp, ip, Op, LS[250]), Ip()
+             }
+ 
+             function Ip() {
+               ip.length && !cp && (cp = pp.setTimeout(op, 2e3, "pollQueue"))
+             }
+           }({
+             getModifiedTime: cp,
+             setTimeout: Op
+           }))
+         }
+ 
+         function Ep(pp, ip, cp) {
+           const Op = null == cp ? void 0 : cp.fallbackPolling;
+ ... (3 more added lines; see GitHub link above)
```

#### 217. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L4007-L4015` → after: `L5276-L5308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR5276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L5276-L5308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L5276-L5308) · [Before (L4007-L4015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L4007-L4015)

```diff
-         const ID = zD.getLimitVelocityGradients();
-         if (ID) {
-           DD.limitVelocityGradients = [];
-           for (const zD of ID) {
-             const wD = {
-               gradient: zD.gradient,
-               factor1: zD.factor1
-             };
-             void 0 !== zD.factor2 ? wD.factor2 = zD.factor2 : wD.factor2 = zD.factor1, DD.limitVelocityGradients.push(wD)
+ 
+         function Xp(pp, ip, cp, Op) {
+           dO.assert(!cp);
+           const op = function(pp) {
+               if (pp && void 0 !== pp.watchDirectory) return pp;
+               switch (yp) {
+                 case "RecursiveDirectoryUsingFsWatchFile":
+                   return {
+                     watchDirectory: 1
+                   };
+                 case "RecursiveDirectoryUsingDynamicPriorityPolling":
+                   return {
+                     watchDirectory: 2
+                   };
+                 default:
+                   const ip = null == pp ? void 0 : pp.fallbackPolling;
+ ... (17 more added lines; see GitHub link above)
```

#### 218. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L4019-L4115` → after: `L5311-L5313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR5311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L5311-L5313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L5311-L5313) · [Before (L4019-L4115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L4019-L4115)

```diff
-         zD.noiseTexture && (DD.noiseTexture = zD.noiseTexture.serialize())
-       }
-       clone(DD, zD) {
-         let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         const pD = {
-           ...this._customWrappers
-         };
-         let sD = null;
-         const KD = this._engine;
-         if ((0, lD.d)(KD.createEffectForParticles) && null != this.customShader) {
-           sD = this.customShader;
-           const DD = sD.shaderOptions.defines.length > 0 ? sD.shaderOptions.defines.join("\n") : "",
-             zD = KD.createEffectForParticles(sD.shaderPath.fragmentElement, sD.shaderOptions.uniforms, sD.shaderOptions.samplers, DD);
-           pD[0] ? pD[0].effect = zD : this.setCustomEffect(zD, 0)
-         }
-         const rD = this.serialize(wD),
- ... (81 more removed lines; see GitHub link above)
+ 
+         function lp(pp, cp, Op, op) {
+           return WS(tp, xp, pp, cp, (cp => ip(pp, cp, Op, op)))
```

#### 219. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L4117-L4118` → after: `L5315-L5363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR5315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L5315-L5363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L5315-L5363) · [Before (L4117-L4118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L4117-L4118)

```diff
-         needAlphaBlending() {
-           return this.alpha < 1
+ 
+         function Qp(pp, ip, Op, op, Lp, Yp) {
+           return WS(op ? dp : Hp, xp, pp, Op, (Op => function(pp, ip, Op, op, xp, Lp) {
+             let Yp, Dp;
+             Up && (Yp = pp.substring(pp.lastIndexOf(MS)), Dp = Yp.slice(MS.length));
+             let Ap = Sp(pp, ip) ? Wp() : Hp();
+             return {
+               close: () => {
+                 Ap && (Ap.close(), Ap = void 0)
+               }
+             };
+ 
+             function Pp(ip) {
+               Ap && (vp(`sysLog:: ${pp}:: Changing watcher to ${ip===Wp?"Present":"Missing"}FileSystemEntryWatcher`), Ap.close(), Ap = ip())
+             }
+ 
+ ... (33 more added lines; see GitHub link above)
```

#### 220. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L4120-L4121` → after: `L5365-L5370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR5365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L5365-L5370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L5365-L5370) · [Before (L4120-L4121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L4120-L4121)

```diff
-         needAlphaTesting() {
-           return !1
+ 
+         function Jp(pp, ip, Op) {
+           let op = cp(pp) || oS;
+           return Ip(pp, ip, ((ip, Ip, Sp) => {
+             "change" === ip && (Sp || (Sp = cp(pp) || oS), Sp.getTime() === op.getTime()) || (op = Sp || cp(pp) || oS, Op(ip, Ip, op))
+           }))
```

#### 221. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L4123-L4162` → after: `L5372-L121652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR5372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L5372-L121652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L5372-L121652) · [Before (L4123-L4162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L4123-L4162)

```diff
-         getAlphaTestTexture() {
-           return null
-         }
-         isReadyForSubMesh(zD, wD) {
-           const pD = wD._drawWrapper;
-           if (this.isFrozen && pD.effect && pD._wasPreviouslyReady) return !0;
-           wD.materialDefines || (wD.materialDefines = new hD);
-           const sD = wD.materialDefines,
-             KD = this.Ul();
-           if (this._isReadyForSubMesh(wD)) return !0;
-           if ((0, GD.hb)(zD, KD, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, sD, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, GD.S)(zD, sD, !0, !1), sD.IMAGEPROCESSINGPOSTPROCESS !== KD.imageProcessingConfiguration.applyByPostProcess && sD.mar … [truncated]
-             sD.markAsProcessed(), KD.resetCachedMaterial();
-             const zD = new ID.b;
-             sD.FOG && zD.addFallback(1, "FOG"), sD.IMAGEPROCESSINGPOSTPROCESS = KD.imageProcessingConfiguration.applyByPostProcess, sD.DITHER = this.dithering, sD.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
-             const pD = [RD.f.PositionKind];
-             sD.VERTEXCOLOR && pD.push(RD.f.ColorKind);
- ... (24 more removed lines; see GitHub link above)
+       }
+ 
+       function mS(pp) {
+         const ip = pp.writeFile;
+         pp.writeFile = (cp, Op, op) => Kd(cp, Op, !!op, ((cp, Op, op) => ip.call(pp, cp, Op, op)), (ip => pp.createDirectory(ip)), (ip => pp.directoryExists(ip)))
+       }
+       var RS = (() => {
+         let pp;
+         return HO() && (pp = function() {
+           const pp = /^native |^\([^)]+\)$|^(?:internal[\\/]|[\w\s]+(?:\.js)?$)/,
+             ip = cp(41659),
+             op = cp(41661),
+             Ip = cp(41666);
+           let Sp, xp;
+           try {
+             Sp = cp(41672)
+ ... (116265 more added lines; see GitHub link above)
```

#### 222. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L4164-L4405` → after: `L121654-L125586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR121654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L121654-L125586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L121654-L125586) · [Before (L4164-L4405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L4164-L4405)

```diff
-           this._activeEffect = KD, this.bindOnlyWorldMatrix(DD), this._activeEffect.setMatrix("viewProjection", pD.getTransformMatrix()), this._mustRebind(pD, KD, wD) && ((0, BD.f)(KD, this, pD), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._ … [truncated]
-           const LD = pD.activeCamera;
-           if (LD) {
-             const DD = LD.getWorldMatrix();
-             this._cameraPosition.x = DD.m[12], this._cameraPosition.y = DD.m[13], this._cameraPosition.z = DD.m[14], this._activeEffect.setVector3("cameraPosition", rD.TmpVectors.WI[0].pC(this._cameraPosition).apD(pD.floatingOriginOffset))
-           }
-           if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbi … [truncated]
-             const DD = pD.iI()._currentRenderTarget;
-             this._activeEffect.setFloat("maxColorValue", nD(DD?.texture?.type))
-           }
-           if (!this.useSunPosition) {
-             const DD = Math.PI * (this.inclination - .5),
-               zD = 2 * Math.PI * (this.azimuth - .5);
-             this.sunPosition.x = this.distance * Math.cos(zD) * Math.cos(DD), this.sunPosition.y = this.distance * Math.sin(-DD), this.sunPosition.z = this.distance * Math.sin(zD) * Math.cos(DD), rD.Quaternion.FromUnitVectorsToRef(rD.WI.UpReadOnly, this.up, this._skyOrientation), … [truncated]
-           }
-           this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(zD, this._activeEffect, wD)
- ... (226 more removed lines; see GitHub link above)
+           const {
+             fileName: op
+           } = Op, Ip = this.getScriptInfo(op);
+           if (!Ip && !this.host.fileExists(op)) return;
+           const Sp = {
+               fileName: jdp(op),
+               path: this.toPath(op)
+             },
+             xp = this.getConfigFileNameForFile(Sp, !1);
+           if (!xp) return;
+           let Lp = this.findConfiguredProjectByProjectName(xp);
+           if (!Lp) {
+             if (pp.getCompilerOptions().disableReferencedProjectLoad) return cp ? ip : (null == Ip ? void 0 : Ip.containingProjects.length) ? Op : ip;
+             Lp = this.createConfiguredProject(xp, `Creating project for original file: ${Sp.fileName}${ip!==Op?" for location: "+ip.fileName:""}`)
+           }
+           const Yp = this.tryFindDefaultConfiguredProjectForOpenScriptInfoOrClosedFileInfo(Sp, 5, oup(Lp, 4), (pp => `Creating project referenced in solution ${pp.projectName} to find possible configured project for original file: ${Sp.fileName}${ip!==Op?" for location: "+ip.file … [truncated]
+ ... (3917 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/304.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/304.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc)

#### 1. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/304.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/304.js#L4)

```diff
-   41595: (DD, zD, wD) => {
+   41728: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L6-L11` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/304.js#L6) · [Before (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/304.js#L6-L11)

```diff
-       e: () => UD,
-       g: () => hD,
-       k: () => fD,
-       n: () => ID,
-       r: () => MD,
-       s: () => nD
+       collectImportedWorldCodePluginNames: () => Yp
```

#### 3. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L13-L15` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/304.js#L8-L11) · [Before (L13-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/304.js#L13-L15)

```diff
-     var pD = wD(41545);
-     var sD = "Babylon Lite v1.32.0",
-       KD = wD(41602);
+     var Op = cp(2487),
+       op = cp(37055),
+       Ip = cp(41647),
+       Sp = cp.n(Ip);
```

#### 4. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L18` → after: `L14-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L14-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/304.js#L14-L22) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/304.js#L18)

```diff
-       return "clientWidth" in DD
+       return Sp().isImportDeclaration(pp) && Sp().isStringLiteral(pp.moduleSpecifier) && function(pp) {
+         const ip = pp.importClause;
+         if (!ip) return !0;
+         if (ip.isTypeOnly) return !1;
+         const cp = ip.namedBindings;
+         return !(cp && !Sp().isNamespaceImport(cp)) || !!ip.name || cp.elements.some((pp => !pp.isTypeOnly))
+       }(pp) || Sp().isExportDeclaration(pp) && pp.moduleSpecifier && Sp().isStringLiteral(pp.moduleSpecifier) && function(pp) {
+         return !pp.isTypeOnly && (!pp.exportClause || !Sp().isNamedExports(pp.exportClause) || 0 === pp.exportClause.elements.length || pp.exportClause.elements.some((pp => !pp.isTypeOnly)))
+       }(pp) ? pp.moduleSpecifier.text : Sp().isImportEqualsDeclaration(pp) && !pp.isTypeOnly && Sp().isExternalModuleReference(pp.moduleReference) && pp.moduleReference.expression && Sp().isStringLiteral(pp.moduleReference.expression) ? pp.moduleReference.expression.text : Sp().i … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L23-L940` → after: `L26-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L26-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/304.js#L26-L57) · [Before (L23-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/304.js#L23-L940)

```diff
-       const cD = zD.getContext("webgpu");
-       cD || (0, pD.d)(54), rD(zD) && zD.setAttribute("data-engine", sD);
-       const gD = wD?.format ?? navigator.gpu.getPreferredCanvasFormat(),
-         RD = wD?.srgb ? (AD = gD).endsWith("-srgb") ? AD : `${AD}-srgb` : gD;
-       var AD;
-       const UD = wD?.alphaMode ?? "opaque";
-       cD.configure({
-         device: DD._device,
-         format: gD,
-         alphaMode: UD,
-         viewFormats: [RD]
-       });
-       const fD = 1 === wD?.msaaSamples ? 1 : 4,
-         ID = (0, KD.e)({
-           lbl: "swapchain",
-           format: RD,
- ... (902 more removed lines; see GitHub link above)
+       if (!ip.startsWith("./") && !ip.startsWith("../")) return;
+       const op = ((pp.includes("/") ? pp.slice(0, pp.lastIndexOf("/") + 1) : "") + ip).split("/"),
+         Ip = [];
+       for (const Op of op)
+         if ("" !== Op && "." !== Op)
+           if (".." !== Op) Ip.push(Op);
+           else {
+             if (0 === Ip.length) return;
+             Ip.pop()
+           } const Sp = Ip.join("/");
+       for (const xp of [Sp, `${Sp}.ts`, `${Sp}.js`])
+         if (xp in cp && !(0, Op.m)(xp)) return xp
+     }
+ 
+     function Yp(pp) {
+       const ip = new Set,
+ ... (16 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L943-L975` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/304.js#L61) · [Before (L943-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/304.js#L943-L975)

```diff
-           return DD
-         }();
-       if (sD._frameGraph = rD, !1 !== zD?.defaultRenderTask) {
-         const zD = DD.msaaSamples > 1,
-           KD = zD ? (0, pD.e)({
-             lbl: "scene-color",
-             format: DD.format,
-             dFormat: "depth24plus-stencil8",
-             samples: DD.msaaSamples,
-             size: DD
-           }) : DD.scRT,
-           LD = zD ? void 0 : (0, pD.e)({
-             lbl: "scene-depth",
-             dFormat: "depth24plus-stencil8",
-             samples: 1,
-             size: DD
- ... (17 more removed lines; see GitHub link above)
+         Dp(Yp)
```

#### 7. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L977-L1055` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/304.js#L63) · [Before (L977-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/304.js#L977-L1055)

```diff
-       await iD(zD), lD?.get(zD)?.() || (zD._runtimeBuilds?._e(), zD._renderableVersion++, zD._built = !0), await (zD._rebuildHook?.(zD))
-     }
-     var ZD = null;
-     async function yD(DD) {
-       const zD = DD,
-         pD = zD.surface;
-       (0, sD.k)(pD, zD) || (await ND(DD), zD._renderables.sort(kD), await Promise.all(zD._frameGraph._tasks.map((DD => DD._preload?.()))), ZD && await ZD(zD), zD._frameGraph.build(), pD._renderingContexts[0] && (await wD.e(361).then((() => wD(61129)))).configureSwapchainOverlaySc … [truncated]
-     }
-     var kD = (DD, zD) => DD.order - zD.order
-   },
-   41588: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => gD,
-       e: () => RD
-     });
-     var pD = wD(41545),
- ... (63 more removed lines; see GitHub link above)
+       return [...ip].sort()
```

#### 8. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L1058-L1180` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/304.js#L66) · [Before (L1058-L1180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/304.js#L1058-L1180)

```diff
-   41582: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => cD
-     });
-     var pD = wD(41545),
-       sD = wD(41551),
-       KD = wD(41554),
-       rD = wD(41563),
-       LD = wD(41578);
-     async function cD(DD, zD) {
-       let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-       const [gD, RD] = function(DD) {
-         const zD = DD,
-           wD = [
-             [zD.displayWidth, zD.displayHeight],
-             [zD.videoWidth, zD.videoHeight],
- ... (107 more removed lines; see GitHub link above)
+   41688: pp => {
```

#### 9. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L1182-L1275` → after: `L68-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/304.js#L68-L69) · [Before (L1182-L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/304.js#L1182-L1275)

```diff
-       const zD = DD._device;
-       zD !== AD && (LD?.clear(), LD = null, cD = null, gD = null, RD = null, AD = null, AD = zD), cD ??= zD.createShaderModule({
-         code: rD
-       }), gD ??= function(DD) {
-         return (0, sD.c)(DD, KD)
-       }(DD), RD ??= zD.createBindGroupLayout({
-         entries: [{
-           binding: 0,
-           visibility: pD.e.FRAGMENT,
-           texture: {
-             sampleType: "float"
-           }
-         }, {
-           binding: 1,
-           visibility: pD.e.FRAGMENT,
-           sampler: {}
- ... (78 more removed lines; see GitHub link above)
+       var ip = new Error("Cannot find module '" + pp + "'");
+       throw ip.code = "MODULE_NOT_FOUND", ip
```

#### 10. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L1278-L1349` → after: `L73-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L73-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/304.js#L73-L79) · [Before (L1278-L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/304.js#L1278-L1349)

```diff
-   41578: (DD, zD, wD) => {
-     function pD(DD, zD) {
-       return Math.floor(Math.log2(Math.max(DD, zD))) + 1
-     }
-     wD.d(zD, {
-       b: () => pD
-     })
-   },
-   41542: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => gD,
-       i: () => RD
-     });
-     var pD = wD(41545),
-       sD = wD(41551),
-       KD = wD(41554),
- ... (56 more removed lines; see GitHub link above)
+   41672: () => {},
+   41659: () => {},
+   41695: () => {},
+   41666: () => {},
+   41661: () => {},
+   41653: () => {},
+   41681: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/305.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/305.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e)

#### 1. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/305.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/305.js#L4-L6)

```diff
-   41650: (DD, zD, wD) => {
-     wD.d(zD, {
-       parseShaderPack: () => pD
+   41709: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       default: () => jp
```

#### 2. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L10-L15` → after: `L21-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L21-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/305.js#L21-L44) · [Before (L10-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/305.js#L10-L15)

```diff
-       var zD, wD;
-       const pD = DD.get("shaderPackUrl"),
-         sD = null !== (zD = DD.get("shaderPackMode")) && void 0 !== zD ? zD : "strict";
-       if (null === pD) {
-         if (DD.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
-         return null
+       return pp.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
+     }
+     Dp.d.registerLanguage("javascript", Ap.d), Dp.d.registerLanguage("typescript", Pp.d);
+ 
+     function Up(pp, ip) {
+       const cp = yp(pp).replace(/"/g, "&quot;");
+       return `<button type="button" class="DocsCopyButton ${ip}" title="${cp}" aria-label="${cp}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" vi … [truncated]
+     }
+ 
+     function wp(pp, ip) {
+       const cp = [],
+         Op = pp.toLowerCase(),
+         op = ip.toLowerCase();
+       let Ip = 0;
+       for (; Ip < pp.length;) {
+         const Sp = Op.indexOf(op, Ip);
+ ... (8 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L17-L26` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/305.js#L46) · [Before (L17-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/305.js#L17-L26)

```diff
-       if ("lite" !== DD.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
-       if (! function(DD) {
-           return "strict" === DD || "allow" === DD
-         }(sD)) throw new Error(`Unknown shaderPackMode "${sD}" - use strict or allow`);
-       const KD = (null !== (wD = DD.get("variants")) && void 0 !== wD ? wD : "").split(",").find((DD => DD.trim().startsWith("liteShaderPack")));
-       if (void 0 !== KD) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${KD.trim()}`);
-       return {
-         url: pD,
-         mode: sD
-       }
+       return cp
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/306.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/306.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2)

#### 1. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/306.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/306.js#L4)

```diff
-   41678: (DD, zD, wD) => {
+   41736: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/306.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/306.js#L6)

```diff
-       b: () => gD
+       ensureLocalBloxdTypes: () => vp
```

#### 3. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L8-L15` → after: `L8-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L8-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/306.js#L8-L66) · [Before (L8-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/306.js#L8-L15)

```diff
-     var pD = wD(37079),
-       sD = wD(37125),
-       KD = wD(39916),
-       rD = wD(37088),
-       LD = wD(37273);
-     class cD {
-       constructor(DD, zD, wD, pD) {
-         this.name = DD, this.worldAxisForNormal = zD, this.worldAxisForFileX = wD, this.worldAxisForFileY = pD
+     var Op = cp(4874),
+       op = cp(41630),
+       Ip = cp(41621),
+       Sp = cp(37053),
+       xp = cp(37055),
+       Lp = cp(37070);
+     const Yp = JSON.stringify({
+       name: "@bloxd",
+       types: "index.d.ts"
+     }, null, "\t") + "\n";
+ 
+     function Dp(pp) {
+       return pp.replace(/^\//, "")
+     }
+ 
+     function Ap(pp) {
+ ... (43 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L159` → after: `L71-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L71-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/306.js#L71-L94) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/306.js#L159)

```diff
-       return DD.charCodeAt(0) + (DD.charCodeAt(1) << 8) + (DD.charCodeAt(2) << 16) + (DD.charCodeAt(3) << 24)
+       const ip = {
+         "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
+       };
+       for (const Op of Object.values(Sp.e)) ip[Op.specifier] = [`.${Op.typesVfsPath}`];
+       const cp = [];
+       for (const Op of pp)
+         for (const pp of Object.keys(Op.files)) cp.push(Dp((0, xp.s)(Op.name, pp)));
+       return JSON.stringify({
+         compilerOptions: {
+           allowJs: !0,
+           checkJs: !1,
+           strict: !1,
+           module: "ESNext",
+           moduleResolution: "bundler",
+           target: "ES2015",
+           noEmit: !0,
+ ... (8 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L161-L427` → after: `L96-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L96-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/306.js#L96-L107) · [Before (L161-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/306.js#L161-L427)

```diff
-     const RD = gD("DXT1"),
-       AD = gD("DXT3"),
-       UD = gD("DXT5"),
-       fD = gD("DX10");
-     class ID {
-       static GetDDSInfo(DD) {
-         const zD = new Int32Array(DD.buffer, DD.byteOffset, 31),
-           wD = new Int32Array(DD.buffer, DD.byteOffset, 35);
-         let pD = 1;
-         zD[2] & LD && (pD = Math.max(1, zD[7]));
-         const sD = zD[21],
-           KD = sD === fD ? wD[32] : 0;
-         let rD = 0;
-         switch (sD) {
-           case 113:
-             rD = 2;
- ... (251 more removed lines; see GitHub link above)
+     async function vp(pp) {
+       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
+       const cp = new Set(ip.map((pp => pp.name))),
+         Pp = Object.values(Sp.e).flatMap((ip => {
+           const Op = Dp(ip.typesVfsPath),
+             op = `${Ap(ip)}/package.json`;
+           return [...cp.has(ip.name) ? Object.entries(ip.files).map((cp => {
+             let [Op, op] = cp;
+             return (0, Lp.E)(pp, Dp((0, xp.s)(ip.name, Op)), op)
+           })) : [], (0, Lp.E)(pp, Op, ip.types), (0, Lp.E)(pp, op, Wp(ip))]
+         }));
+       await Promise.all([(0, Lp.E)(pp, "node_modules/@bloxd/index.d.ts", Op.default), (0, Lp.E)(pp, "node_modules/@bloxd/globals.d.ts", Ip.d), (0, Lp.E)(pp, "node_modules/@bloxd/lib.d.ts", op.b), (0, Lp.E)(pp, "node_modules/@bloxd/package.json", Yp), (0, Lp.E)(pp, "tsconfig.json" … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/307.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/307.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a)

#### 1. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/307.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/307.js#L2)

```diff
- export const ids = [306, 307];
+ export const ids = [307];
```

#### 2. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/307.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/307.js#L4)

```diff
-   41690: (DD, zD, wD) => {
+   41792: (pp, ip, cp) => {
```

#### 3. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/307.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/307.js#L6)

```diff
-       _DDSTextureLoader: () => KD
+       installImageBitmapTextureLoader: () => Yp
```

#### 4. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8-L12` → after: `L8-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/307.js#L8-L17) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/307.js#L8-L12)

```diff
-     var pD = wD(39916),
-       sD = wD(41670);
-     class KD {
-       constructor() {
-         this.supportCascades = !0
+     var Op = cp(40088),
+       op = cp(41798),
+       Ip = cp(3309);
+ 
+     function Sp(pp, ip) {
+       if ("string" === typeof pp) {
+         const cp = (0, Ip.h)(pp);
+         return cp ? new Blob([(0, Ip.d)(cp.base64)], {
+           type: cp.mimeType || ip
+         }) : null
```

#### 5. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L14-L32` → after: `L19-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L19-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/307.js#L19-L30) · [Before (L14-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/307.js#L14-L32)

```diff
-       loadCubeData(DD, zD, wD, KD) {
-         const rD = zD.iI();
-         let LD, cD = !1,
-           gD = 1e3;
-         if (Array.isArray(DD))
-           for (let pD = 0; pD < DD.length; pD++) {
-             const wD = DD[pD];
-             LD = sD.DDSTools.GetDDSInfo(wD), zD.width = LD.width, zD.height = LD.height, cD = (LD.isRGB || LD.isLuminance || LD.mipmapCount > 1) && zD.generateMipMaps, rD._unpackFlipY(LD.isCompressed), sD.DDSTools.UploadDDSLevels(rD, zD, wD, LD, cD, 6, -1, pD), LD.isFourCC || 1 ! … [truncated]
-           } else {
-             const KD = DD;
-             LD = sD.DDSTools.GetDDSInfo(KD), zD.width = LD.width, zD.height = LD.height, wD && (LD.sphericalPolynomial = new pD.e), cD = (LD.isRGB || LD.isLuminance || LD.mipmapCount > 1) && zD.generateMipMaps, rD._unpackFlipY(LD.isCompressed), sD.DDSTools.UploadDDSLevels(rD, zD, … [truncated]
-           }
-         rD._setCubeMapTextureParams(zD, cD, gD), zD.isReady = !0, zD.onLoadedObservable.notifyObservers(zD), zD.onLoadedObservable.clear(), KD && KD({
-           isDDS: !0,
-           width: zD.width,
-           info: LD,
- ... (3 more removed lines; see GitHub link above)
+       return pp instanceof Blob ? pp : new Blob([pp], {
+         type: ip
+       })
+     }
+     const xp = function(pp, ip, cp, Op) {
+       let Ip, xp = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
+         Lp = arguments.length > 5 ? arguments[5] : void 0,
+         Yp = arguments.length > 6 ? arguments[6] : void 0;
+       try {
+         Ip = Sp(pp, xp)
+       } catch {
+         Ip = null
```

#### 6. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L34-L40` → after: `L32-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L32-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/307.js#L32-L63) · [Before (L34-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/307.js#L34-L40)

```diff
-       loadData(DD, zD, wD) {
-         const pD = sD.DDSTools.GetDDSInfo(DD),
-           KD = (pD.isRGB || pD.isLuminance || pD.mipmapCount > 1) && zD.generateMipMaps && Math.max(pD.width, pD.height) >> pD.mipmapCount - 1 === 1;
-         wD(pD.width, pD.height, KD, pD.isFourCC, (() => {
-           sD.DDSTools.UploadDDSLevels(zD.iI(), zD, DD, pD, KD, 1)
-         }))
-       }
+       return Ip ? (createImageBitmap(Ip, {
+         premultiplyAlpha: "none",
+         colorSpaceConversion: "none",
+         ...Lp
+       }).then((pp => {
+         ip(pp)
+       }), (() => {
+         (0, op.d)(pp, ip, cp, Op, xp, Lp, Yp)
+       })), null) : (0, op.d)(pp, ip, cp, Op, xp, Lp, Yp)
+     };
+     let Lp = "idle";
+ 
+     function Yp() {
+       "idle" === Lp && "function" === typeof createImageBitmap && (Lp = "pending", async function() {
+         const pp = document.createElement("canvas");
+         pp.width = 1, pp.height = 2;
+ ... (16 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L43` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/307.js#L66) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/307.js#L43)

```diff
-   41678: (DD, zD, wD) => {
+   41798: (pp, ip, cp) => {
```

#### 8. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L45` → after: `L68-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/307.js#L68-L69) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/307.js#L45)

```diff
-       b: () => gD
+       b: () => Op.g,
+       d: () => Op.p
```

#### 9. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L47-L468` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/307.js#L71-L72) · [Before (L47-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/307.js#L47-L468)

```diff
-     var pD = wD(37079),
-       sD = wD(37125),
-       KD = wD(39916),
-       rD = wD(37088),
-       LD = wD(37273);
-     class cD {
-       constructor(DD, zD, wD, pD) {
-         this.name = DD, this.worldAxisForNormal = zD, this.worldAxisForFileX = wD, this.worldAxisForFileY = pD
-       }
-     }
-     class gD {
-       static _NearestPow2Floor(DD) {
-         return DD <= 1 ? 1 : 1 << Math.floor(Math.log2(DD))
-       }
-       static ConvertCubeMapTextureToSphericalPolynomial(DD) {
-         if (!DD.isCube) return null;
- ... (406 more removed lines; see GitHub link above)
+     var Op = cp(40257);
+     (0, Op.u)()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/308.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/308.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e)

#### 1. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/308.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/308.js#L4-L6)

```diff
-   41702: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       _ENVTextureLoader: () => VD
+   41869: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Ip
```

#### 2. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L8-L36` → after: `L8-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/308.js#L8-L13) · [Before (L8-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/308.js#L8-L36)

```diff
-     var pD = wD(39852),
-       sD = wD(37079),
-       KD = wD(37125),
-       rD = wD(39916),
-       LD = wD(39761),
-       cD = wD(39918),
-       gD = (wD(40022), wD(41709)),
-       RD = wD(38662),
-       AD = (wD(41713), wD(41742), wD(39984));
-     const UD = "image/png",
-       fD = [134, 22, 135, 150, 246, 214, 150, 54];
- 
-     function ID(DD) {
-       const zD = new DataView(DD.buffer, DD.byteOffset, DD.byteLength);
-       let wD = 0;
-       for (let rD = 0; rD < fD.length; rD++)
- ... (13 more removed lines; see GitHub link above)
+     var Op = cp(40314),
+       op = cp(41871);
+     class Ip {
+       constructor(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
+         this.maxDepth = cp, this.sOp = [], this._maxBlockCapacity = ip || 64, this._selectionContent = new Op.d(1024), this._creationFunc = pp
```

#### 3. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L38-L49` → after: `L15-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L15-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/308.js#L15-L20) · [Before (L38-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/308.js#L38-L49)

```diff
-     }
- 
-     function GD(DD, zD) {
-       const wD = (zD = BD(zD)).specular;
-       let pD = Math.log2(zD.width);
-       if (pD = Math.round(pD) + 1, wD.mipmaps.length !== 6 * pD) throw new Error(`Unsupported specular mipmaps number "${wD.mipmaps.length}"`);
-       const sD = new Array(pD);
-       for (let KD = 0; KD < pD; KD++) {
-         sD[KD] = new Array(6);
-         for (let pD = 0; pD < 6; pD++) {
-           const rD = wD.mipmaps[6 * KD + pD];
-           sD[KD][pD] = new Uint8Array(DD.buffer, DD.byteOffset + zD.binaryDataPosition + rD.position, rD.length)
+       update(pp, ip, cp) {
+         op.b._CreateBlocks(pp, ip, cp, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
+       }
+       TOp(pp) {
+         for (let ip = 0; ip < this.blocks.length; ip++) {
+           this.blocks[ip].addEntry(pp)
```

#### 4. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L52-L63` → after: `L23-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L23-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/308.js#L23-L25) · [Before (L52-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/308.js#L52-L63)

```diff
-       return sD
-     }
- 
-     function hD(DD, zD) {
-       zD = BD(zD);
-       const wD = new Array(6),
-         pD = zD.irradiance?.irradianceTexture;
-       if (pD) {
-         if (6 !== pD.faces.length) throw new Error(`Incorrect irradiance texture faces number "${pD.faces.length}"`);
-         for (let sD = 0; sD < 6; sD++) {
-           const KD = pD.faces[sD];
-           wD[sD] = new Uint8Array(DD.buffer, DD.byteOffset + zD.binaryDataPosition + KD.position, KD.length)
+       xJ(pp) {
+         for (let ip = 0; ip < this.blocks.length; ip++) {
+           this.blocks[ip].removeEntry(pp)
```

#### 5. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L66-L80` → after: `L28-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L28-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/308.js#L28-L47) · [Before (L66-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/308.js#L66-L80)

```diff
-       return wD
-     }
- 
-     function nD(DD, zD, wD) {
-       const pD = (wD = BD(wD)).specular;
-       if (!pD) return Promise.resolve([]);
-       DD._lodGenerationScale = pD.lodGenerationScale;
-       const KD = [],
-         rD = GD(zD, wD);
-       KD.push(OD(DD, rD, wD.imageType));
-       const LD = wD.irradiance?.irradianceTexture;
-       if (LD) {
-         const pD = hD(zD, wD);
-         let rD = null;
-         wD.irradiance?.irradianceTexture?.dominantDirection && (rD = sD.s.FromArray(wD.irradiance.irradianceTexture.dominantDirection)), KD.push(JD(DD, pD, LD.size, wD.imageType, rD))
+       select(pp, ip) {
+         this._selectionContent.reset();
+         for (let cp = 0; cp < this.blocks.length; cp++) {
+           this.blocks[cp].select(pp, this._selectionContent, ip)
+         }
+         return ip ? this._selectionContent.concat(this.sOp) : this._selectionContent.concatWithNoDuplicate(this.sOp), this._selectionContent
+       }
+       intersects(pp, ip, cp) {
+         this._selectionContent.reset();
+         for (let Op = 0; Op < this.blocks.length; Op++) {
+           this.blocks[Op].intersects(pp, ip, this._selectionContent, cp)
+         }
+         return cp ? this._selectionContent.concat(this.sOp) : this._selectionContent.concatWithNoDuplicate(this.sOp), this._selectionContent
+       }
+       intersectsRay(pp) {
+         this._selectionContent.reset();
+ ... (4 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L84-L100` → after: `L50-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L50-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/308.js#L50-L85) · [Before (L84-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/308.js#L84-L100)

```diff
-     async function MD(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD, RD) {
-       return await new Promise(((AD, UD) => {
-         if (wD) {
-           const wD = zD.createTexture(null, !0, !0, null, 1, null, (DD => {
-             UD(DD)
-           }), DD);
-           pD?.onEffectCreatedObservable.addOnce((LD => {
-             LD.executeWhenCompiled((() => {
-               pD.externalTextureSamplerBinding = !0, pD.onApply = pD => {
-                 pD._bindTexture("textureSampler", wD), pD.setFloat2("scale", 1, zD._features.needsInvertingBitmap && DD instanceof ImageBitmap ? -1 : 1)
-               }, zD.scenes.length && (zD.scenes[0].postProcessManager.directRender([pD], gD, !0, KD, rD), zD.restoreDefaultFramebuffer(), wD.dispose(), URL.revokeObjectURL(sD), AD())
-             }))
-           }))
-         } else {
-           if (zD._uploadImageToTexture(RD, DD, KD, rD), LD) {
-             const wD = cD[rD];
- ... (1 more removed lines; see GitHub link above)
+     Ip.CreationFuncForMeshes = (pp, ip) => {
+       const cp = pp.bJ();
+       !pp.isBlocked && cp.boundingBox.intersectsMinMax(ip.nOp, ip.aOp) && ip.entries.push(pp)
+     }, Ip.CreationFuncForSubMeshes = (pp, ip) => {
+       pp.bJ().boundingBox.intersectsMinMax(ip.nOp, ip.aOp) && ip.entries.push(pp)
+     }
+   },
+   41871: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Ip
+     });
+     var Op = cp(37320),
+       op = cp(40504);
+     class Ip {
+       constructor(pp, ip, cp, Op, op, Ip) {
+         this.entries = [], this.KOp = new Array, this._capacity = cp, this._depth = Op, this._maxDepth = op, this._creationFunc = Ip, this._minPoint = pp, this._maxPoint = ip, this.KOp.push(pp.clone()), this.KOp.push(ip.clone()), this.KOp.push(pp.clone()), this.KOp[2].x = ip.x, t … [truncated]
+ ... (20 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L102` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/308.js#L87) · [Before (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/308.js#L102)

```diff
-           AD()
+           return
```

#### 8. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L104-L160` → after: `L89-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L89-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/308.js#L89-L104) · [Before (L104-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/308.js#L104-L160)

```diff
-       }))
-     }
-     async function OD(DD, zD) {
-       let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UD;
-       const pD = DD.iI();
-       DD.format = 5, DD.type = 0, DD.generateMipMaps = !0, DD._cachedAnisotropicFilteringLevel = null, pD.updateTextureSamplingMode(3, DD), await ED(DD, zD, !0, wD), DD.isReady = !0
-     }
-     async function JD(DD, zD, wD) {
-       let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UD,
-         sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
-       const KD = DD.iI(),
-         rD = new LD.e(KD, 5),
-         gD = new cD.d(KD, rD);
-       DD._irradianceTexture = gD, gD._dominantDirection = sD, rD.isCube = !0, rD.format = 5, rD.type = 0, rD.generateMipMaps = !0, rD._cachedAnisotropicFilteringLevel = null, rD.generateMipMaps = !0, rD.width = wD, rD.height = wD, KD.updateTextureSamplingMode(3, rD), await ED(rD, … [truncated]
-     }
-     async function ED(DD, zD, sD) {
- ... (41 more removed lines; see GitHub link above)
+         const ip = this.entries.indexOf(pp);
+         ip > -1 && this.entries.splice(ip, 1)
+       }
+       addEntries(pp) {
+         for (let ip = 0; ip < pp.length; ip++) {
+           const cp = pp[ip];
+           this.addEntry(cp)
+         }
+       }
+       select(pp, ip, cp) {
+         if (op.d.IsInFrustum(this.KOp, pp)) {
+           if (this.blocks) {
+             for (let Op = 0; Op < this.blocks.length; Op++) {
+               this.blocks[Op].select(pp, ip, cp)
+             }
+             return
```

#### 9. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L164-L188` → after: `L109-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L109-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/308.js#L109-L115) · [Before (L164-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/308.js#L164-L188)

```diff
-       const ED = [];
-       for (let wD = 0; wD < zD.length; wD++)
-         for (let pD = 0; pD < 6; pD++) {
-           const sD = zD[wD][pD],
-             KD = (0, AD.j)(sD),
-             LD = new Blob([KD], {
-               type: rD
-             }),
-             cD = URL.createObjectURL(LD);
-           let gD;
-           if (fD._features.forceBitmapOverHTMLImageElement) gD = fD.createImageBitmap(LD, {
-             premultiplyAlpha: "none",
-             colorSpaceConversion: "none"
-           }).then((async zD => await MD(zD, fD, ID, GD, cD, pD, wD, BD, nD, hD, DD)));
-           else {
-             const zD = new Image;
- ... (9 more removed lines; see GitHub link above)
+       intersects(pp, ip, cp, Op) {
+         if (op.d.IntersectsSphere(this._minPoint, this._maxPoint, pp, ip)) {
+           if (this.blocks) {
+             for (let op = 0; op < this.blocks.length; op++) {
+               this.blocks[op].intersects(pp, ip, cp, Op)
+             }
+             return
```

#### 10. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L190` → after: `L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/308.js#L117) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/308.js#L190)

```diff
-           ED.push(gD)
+           Op ? cp.concat(this.entries) : cp.concatWithNoDuplicate(this.entries)
```

#### 11. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L192-L204` → after: `L119-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L119-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/308.js#L119-L128) · [Before (L192-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/308.js#L192-L204)

```diff
-       if (await Promise.all(ED), zD.length < RD) {
-         let wD;
-         const pD = Math.pow(2, RD - 1 - zD.length),
-           sD = pD * pD * 4;
-         switch (DD.type) {
-           case 0:
-             wD = new Uint8Array(sD);
-             break;
-           case 2:
-             wD = new Uint16Array(sD);
-             break;
-           case 1:
-             wD = new Float32Array(sD)
+       }
+       intersectsRay(pp, ip) {
+         if (pp.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
+           if (this.blocks) {
+             for (let cp = 0; cp < this.blocks.length; cp++) {
+               this.blocks[cp].intersectsRay(pp, ip)
+             }
+             return
+           }
+           ip.concatWithNoDuplicate(this.entries)
```

#### 12. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L209-L211` → after: `L131-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L131-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/308.js#L131-L144) · [Before (L209-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/308.js#L209-L211)

```diff
-       if (hD) {
-         const zD = DD._irradianceTexture;
-         DD._irradianceTexture = null, fD._releaseTexture(DD), hD._swapAndDie(DD), DD._irradianceTexture = zD
+       createInnerBlocks() {
+         Ip._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
+       }
+       static _CreateBlocks(pp, ip, cp, op, Sp, xp, Lp, Yp) {
+         Lp.blocks = new Array;
+         const Dp = new Op.o((ip.x - pp.x) / 2, (ip.y - pp.y) / 2, (ip.z - pp.z) / 2);
+         for (let Op = 0; Op < 2; Op++)
+           for (let ip = 0; ip < 2; ip++)
+             for (let Ap = 0; Ap < 2; Ap++) {
+               const Pp = pp.add(Dp.multiplyByFloats(Op, ip, Ap)),
+                 Wp = pp.add(Dp.multiplyByFloats(Op + 1, ip + 1, Ap + 1)),
+                 yp = new Ip(Pp, Wp, op, Sp + 1, xp, Yp);
+               yp.addEntries(cp), Lp.blocks.push(yp)
+             }
```

#### 13. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L222` → after: `L147-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L147-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/308.js#L147-L158) · [Before (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/308.js#L222)

```diff
-     var XD = wD(41744);
+   },
+   41879: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Dp
+     });
+     var Op = cp(40296),
+       op = cp(37320),
+       Ip = cp(40614),
+       Sp = cp(41810),
+       xp = cp(40368),
+       Lp = cp(37345),
+       Yp = cp(41869);
```

#### 14. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L224-L225` → after: `L160-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L160-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/308.js#L160-L161) · [Before (L224-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/308.js#L224-L225)

```diff
-       constructor() {
-         this.supportCascades = !1
+       constructor(pp) {
+         this.name = xp.e.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new Sp.D(op.o.Zero(), new op.o(1, 1, 1)), (pp = pp || Lp.e.LastCreatedScene) && (this.pw = pp, this.pw.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.pw.getActiveSubMeshCandidat … [truncated]
```

#### 15. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L227-L239` → after: `L163-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L163-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/308.js#L163-L167) · [Before (L227-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/308.js#L227-L239)

```diff
-       loadCubeData(DD, zD, wD, pD, sD) {
-         if (Array.isArray(DD)) return;
-         const KD = ID(DD);
-         if (KD) {
-           zD.width = KD.width, zD.height = KD.width;
-           try {
-             (0, XD.d)(), QD(zD, KD), nD(zD, DD, KD).then((() => {
-               zD.isReady = !0, zD.onLoadedObservable.notifyObservers(zD), zD.onLoadedObservable.clear(), pD && pD()
-             }), (DD => {
-               sD?.("Can not upload environment levels", DD)
-             }))
-           } catch (rD) {
-             sD?.("Can not upload environment file", rD)
+       register() {
+         this.pw.onMeshRemovedObservable.add((pp => {
+           const ip = this.pw.selectionOctree;
+           if (void 0 !== ip && null !== ip) {
+             const cp = ip.sOp.indexOf(pp); - 1 !== cp && ip.sOp.splice(cp, 1)
```

#### 16. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L241` → after: `L169-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L169-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/308.js#L169-L181) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/308.js#L241)

```diff
-         } else sD && sD("Can not parse the environment file", null)
+         })), this.pw.onMeshImportedObservable.add((pp => {
+           const ip = this.pw.selectionOctree;
+           void 0 !== ip && null !== ip && ip.TOp(pp)
+         }))
+       }
+       getActiveMeshCandidates() {
+         return this.pw.xop?.select(this.pw.frustumPlanes) || this.pw._getDefaultMeshCandidates()
+       }
+       getActiveSubMeshCandidates(pp) {
+         if (pp._submeshesOctree && pp.useOctreeForRenderingSelection) {
+           return pp._submeshesOctree.select(this.pw.frustumPlanes)
+         }
+         return this.pw._getDefaultSubMeshCandidates(pp)
```

#### 17. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L243-L244` → after: `L183-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L183-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/308.js#L183-L195) · [Before (L243-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/308.js#L243-L244)

```diff
-       loadData() {
-         throw ".env not supported in 2d."
+       getIntersectingSubMeshCandidates(pp, ip) {
+         if (pp._submeshesOctree && pp.useOctreeForPicking) {
+           Sp.D.TransformToRef(ip, pp.getWorldMatrix(), this._tempRay);
+           return pp._submeshesOctree.intersectsRay(this._tempRay)
+         }
+         return this.pw._getDefaultSubMeshCandidates(pp)
+       }
+       getCollidingSubMeshCandidates(pp, ip) {
+         if (pp._submeshesOctree && pp.useOctreeForCollisions) {
+           const cp = ip._velocityWorldLength + Math.max(ip._radius.x, ip._radius.y, ip._radius.z);
+           return pp._submeshesOctree.intersects(ip._basePointWorld, cp)
+         }
+         return this.pw._getDefaultSubMeshCandidates(pp)
```

#### 18. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L255-L275` → after: `L201-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L201-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/308.js#L201-L222) · [Before (L255-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/308.js#L255-L275)

```diff
- 
-     function rD() {
-       KD || (KD = !0, sD.d.prototype._sphericalPolynomialTargetSize = 0, sD.d.prototype.forceSphericalPolynomialsRecompute = function() {
-         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
-       }, Object.defineProperty(sD.d.prototype, "sphericalPolynomial", {
-         get: function() {
-           if (this._texture) {
-             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
-             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = pD.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
-               this._texture._sphericalPolynomial = DD, this._texture._sphericalPolynomialComputed = !0
-             }))), null
-           }
-           return null
-         },
-         set: function(DD) {
-           this._texture && (this._texture._sphericalPolynomial = DD)
- ... (5 more removed lines; see GitHub link above)
+     Ap || (Ap = !0, Op.f.prototype.createOrUpdateSelectionOctree = function() {
+       let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
+         ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
+         cp = this._getComponent(xp.e.NAME_OCTREE);
+       cp || (cp = new Dp(this), this.uOp(cp)), this.xop || (this.xop = new Yp.d(Yp.d.CreationFuncForMeshes, pp, ip));
+       const Op = this.getWorldExtends();
+       return this.xop.update(Op.min, Op.max, this.meshes), this.xop
+     }, Object.defineProperty(Op.f.prototype, "selectionOctree", {
+       get: function() {
+         return this.xop
+       },
+       enumerable: !0,
+       configurable: !0
+     }), Ip.b.prototype.createOrUpdateSubmeshesOctree = function() {
+       let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
+         ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
+ ... (6 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L277` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/308.js#L224) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/308.js#L277)

```diff
-   41678: (DD, zD, wD) => {
+   41810: (pp, ip, cp) => {
```

#### 20. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L279` → after: `L226-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L226-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/308.js#L226-L235) · [Before (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/308.js#L279)

```diff
-       b: () => gD
+       A: () => mp,
+       D: () => Ap,
+       c: () => Ep,
+       e: () => Up,
+       h: () => yp,
+       k: () => Wp,
+       n: () => Mp,
+       q: () => qp,
+       u: () => kp,
+       x: () => Rp
```

#### 21. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L281-L285` → after: `L237-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L237-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/308.js#L237-L246) · [Before (L281-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/308.js#L281-L285)

```diff
-     var pD = wD(37079),
-       sD = wD(37125),
-       KD = wD(39916),
-       rD = wD(37088),
-       LD = wD(37273);
+     var Op = cp(37324),
+       op = cp(37320),
+       Ip = cp(37329),
+       Sp = cp(40489),
+       xp = cp(40334),
+       Lp = cp(37345),
+       Yp = cp(40390);
+     const Dp = {
+       internalPickerForMesh: void 0
+     };
```

#### 22. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L287-L288` → after: `L248-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L248-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/308.js#L248-L430) · [Before (L287-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/308.js#L287-L288)

```diff
-       constructor(DD, zD, wD, pD) {
-         this.name = DD, this.worldAxisForNormal = zD, this.worldAxisForFileX = wD, this.worldAxisForFileY = pD
+       constructor(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
+           op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Op.b;
+         this.origin = pp, this.direction = ip, this.length = cp, this.epsilon = op
+       }
+       clone() {
+         return new Ap(this.origin.clone(), this.direction.clone(), this.length)
+       }
+       intersectsBoxMinMax(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         const Op = Ap._TmpVector3[0].i5(pp.x - cp, pp.y - cp, pp.z - cp),
+           op = Ap._TmpVector3[1].i5(ip.x + cp, ip.y + cp, ip.z + cp);
+         let Ip, Sp, xp, Lp, Yp = 0,
+           Dp = Number.MAX_VALUE;
+         if (Math.abs(this.direction.x) < 1e-7) {
+           if (this.origin.x < Op.x || this.origin.x > op.x) return !1
+ ... (167 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L291-L334` → after: `L433-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L433-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/308.js#L433-L501) · [Before (L291-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/308.js#L291-L334)

```diff
-     class gD {
-       static _NearestPow2Floor(DD) {
-         return DD <= 1 ? 1 : 1 << Math.floor(Math.log2(DD))
-       }
-       static ConvertCubeMapTextureToSphericalPolynomial(DD) {
-         if (!DD.isCube) return null;
-         DD.Ul()?.iI().flushFramebuffer();
-         const zD = DD.getSize().width,
-           wD = DD._sphericalPolynomialTargetSize,
-           pD = wD > 0 ? this._NearestPow2Floor(wD) : 0,
-           sD = !DD.noMipmap && !0 === DD._texture?.generateMipMaps,
-           KD = pD > 0 && pD < zD && sD,
-           rD = KD ? Math.max(0, Math.round(Math.log2(zD / pD))) : 0,
-           LD = KD ? Math.max(1, Math.floor(zD / Math.pow(2, rD))) : zD,
-           cD = DD.readPixels(0, rD, void 0, !1),
-           gD = DD.readPixels(1, rD, void 0, !1);
- ... (28 more removed lines; see GitHub link above)
+ 
+     function Pp(pp, ip, cp, Op, op) {
+       let Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       const Sp = Ap.Zero();
+       return Wp(pp, ip, cp, Op, Sp, op, Ip), Sp
+     }
+ 
+     function Wp(pp, ip, cp, Op, Ip, Sp) {
+       let xp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         Lp = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
+       const Yp = pp.gy();
+       if (!Sp && !(Sp = pp.activeCamera) && !(Sp = pp.cameraToUseForPointers)) return pp;
+       const Dp = Sp.viewport,
+         Ap = Yp.getRenderHeight(),
+         {
+           x: Pp,
+ ... (53 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L336-L356` → after: `L503-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L503-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/308.js#L503-L542) · [Before (L336-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/308.js#L336-L356)

```diff
-       static _AreaElement(DD, zD) {
-         return Math.atan2(DD * zD, Math.sqrt(DD * DD + zD * zD + 1))
-       }
-       static _DownsampleFace(DD, zD, wD, pD) {
-         const sD = DD instanceof Float32Array ? DD : Float32Array.from(DD),
-           KD = wD * wD * pD,
-           rD = new Float32Array(KD),
-           LD = zD / wD,
-           cD = 1 / (LD * LD);
-         for (let RD = 0; RD < wD; RD++) {
-           const DD = Math.floor(RD * LD),
-             KD = Math.floor((RD + 1) * LD);
-           for (let gD = 0; gD < wD; gD++) {
-             const AD = Math.floor(gD * LD),
-               UD = Math.floor((gD + 1) * LD),
-               fD = (RD * wD + gD) * pD;
- ... (5 more removed lines; see GitHub link above)
+     }
+ 
+     function dp(pp, ip, cp, Op, op) {
+       const Ip = pp(cp, ip.enableDistantPicking);
+       return Ip.intersectsSphere(Op.Yop, op) && Ip.intersectsBox(Op.boundingBox, op) ? Ip : null
+     }
+ 
+     function ep(pp, ip, cp, Op, Ip, Sp) {
+       let Lp = null;
+       const Yp = !!(pp.activeCameras && pp.activeCameras.length > 1 && pp.cameraToUseForPointers !== pp.activeCamera),
+         Ap = pp.cameraToUseForPointers || pp.activeCamera,
+         Pp = Dp.internalPickerForMesh || wp,
+         Wp = Pp === wp;
+       for (let xp = 0; xp < pp.meshes.length; xp++) {
+         const Dp = pp.meshes[xp];
+         if (cp) {
+ ... (24 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L365-L409` → after: `L550-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L550-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/308.js#L550-L584) · [Before (L365-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/308.js#L365-L409)

```diff
-       static ConvertCubeMapToSphericalPolynomial(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const wD = zD > 0 ? this._NearestPow2Floor(zD) : 0;
-         if (wD > 0 && DD.size > wD) {
-           const zD = 5 === DD.format ? 4 : 3,
-             pD = ["right", "left", "up", "down", "front", "back"],
-             sD = {};
-           for (const KD of pD) sD[KD] = this._DownsampleFace(DD[KD], DD.size, wD, zD);
-           DD = {
-             ...DD,
-             ...sD,
-             size: wD
-           }
-         }
-         const pD = new KD.c;
-         let cD = 0;
- ... (29 more removed lines; see GitHub link above)
+       return Lp || new xp.b
+     }
+ 
+     function jp(pp, ip, cp, Op) {
+       if (!xp.b) return null;
+       const Ip = [],
+         Sp = !!(pp.activeCameras && pp.activeCameras.length > 1 && pp.cameraToUseForPointers !== pp.activeCamera),
+         Lp = pp.cameraToUseForPointers || pp.activeCamera,
+         Yp = Dp.internalPickerForMesh || wp,
+         Ap = Yp === wp;
+       for (let xp = 0; xp < pp.meshes.length; xp++) {
+         const Dp = pp.meshes[xp];
+         if (cp) {
+           if (!cp(Dp, -1)) continue
+         } else if (!Dp.isEnabled() || !Dp.isVisible || !Dp.Ow) continue;
+         const Pp = Sp && Dp.isWorldMatrixCameraDependent(),
+ ... (19 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L418` → after: `L605-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L605-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/308.js#L605-L642) · [Before (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/308.js#L418)

```diff
-     gD._FileFaces = [new cD("right", new pD.s(1, 0, 0), new pD.s(0, 0, -1), new pD.s(0, -1, 0)), new cD("left", new pD.s(-1, 0, 0), new pD.s(0, 0, 1), new pD.s(0, -1, 0)), new cD("up", new pD.s(0, 1, 0), new pD.s(1, 0, 0), new pD.s(0, 0, 1)), new cD("down", new pD.s(0, -1, 0), ne … [truncated]
+ 
+     function Rp(pp, ip, cp, Op, Ip) {
+       const Sp = ep(pp, (cp => (pp._pickWithRayInverseMatrix || (pp._pickWithRayInverseMatrix = op.b.Identity()), cp.invertToRef(pp._pickWithRayInverseMatrix), pp._cachedRayForTransform || (pp._cachedRayForTransform = Ap.Zero()), Ap.TransformToRef(ip, pp._pickWithRayInverseMatrix … [truncated]
+       return Sp && (Sp.ray = ip), Sp
+     }
+ 
+     function qp(pp, ip, cp, Op, op, Ip) {
+       return jp(pp, (Op => Pp(pp, ip, cp, Op, op || null)), Op, Ip)
+     }
+ 
+     function Mp(pp, ip, cp, Op) {
+       return jp(pp, (cp => (pp._pickWithRayInverseMatrix || (pp._pickWithRayInverseMatrix = op.b.Identity()), cp.invertToRef(pp._pickWithRayInverseMatrix), pp._cachedRayForTransform || (pp._cachedRayForTransform = Ap.Zero()), Ap.TransformToRef(ip, pp._pickWithRayInverseMatrix, pp … [truncated]
+     }
+ 
+     function Cp(pp, ip) {
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
+ ... (22 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L420` → after: `L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/308.js#L644) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/308.js#L420)

```diff
-   41713: (DD, zD, wD) => {
+   41806: (pp, ip, cp) => {
```

#### 28. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L422` → after: `L646-L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L646-L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/308.js#L646-L908) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/308.js#L422)

```diff
-       b: () => KD
+       c: () => Ip.D
+     });
+     var Op = cp(40296),
+       op = cp(40411),
+       Ip = cp(41810);
+     let Sp = !1;
+     Sp || (Sp = !0, (0, Ip.c)(Op.f, op.d), Op.f.prototype.createPickingRayToRef = function(pp, ip, cp, Op, op) {
+       let Sp = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         xp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
+       return (0, Ip.k)(this, pp, ip, cp, Op, op, Sp, xp)
+     }, Op.f.prototype.createPickingRayInCameraSpace = function(pp, ip, cp) {
+       return (0, Ip.h)(this, pp, ip, cp)
+     }, Op.f.prototype.createPickingRayInCameraSpaceToRef = function(pp, ip, cp, Op) {
+       return (0, Ip.e)(this, pp, ip, cp, Op)
+     }, Op.f.prototype.pickWithBoundingInfo = function(pp, ip, cp, Op, op) {
+       return (0, Ip.u)(this, pp, ip, cp, Op, op)
+ ... (247 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L424-L425` → after: `L910-L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L910-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/308.js#L910-L920) · [Before (L424-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/308.js#L424-L425)

```diff
-     var pD = wD(41709),
-       sD = wD(41722);
+     var Op = cp(38942),
+       op = cp(37349),
+       Ip = cp(37320),
+       Sp = cp(40342),
+       xp = cp(41843),
+       Lp = cp(37345),
+       Yp = cp(40467),
+       Dp = cp(37487),
+       Ap = cp(38944),
+       Pp = cp(38900),
+       Wp = cp(37356);
```

#### 30. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L427-L457` → after: `L922-L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L922-L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/308.js#L922-L923) · [Before (L427-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/308.js#L427-L457)

```diff
-       static ExpandRGBDTexture(DD) {
-         const zD = DD._texture;
-         if (!zD || !DD.isRGBD) return;
-         const sD = zD.iI(),
-           KD = sD.getCaps(),
-           rD = zD.isReady;
-         let LD = !1;
-         KD.textureHalfFloatRender && KD.textureHalfFloatLinearFiltering ? (LD = !0, zD.type = 2) : KD.textureFloatRender && KD.textureFloatLinearFiltering && (LD = !0, zD.type = 1), LD && (zD.isReady = !1, zD._isRGBD = !1, zD.invertY = !1);
-         const cD = async () => {
-           const KD = sD.isWebGPU,
-             rD = KD ? 1 : 0;
-           zD.isReady = !1, KD ? await wD.e(342).then((() => wD(61148))) : await wD.e(324).then((() => wD(61150)));
-           const LD = new pD.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, sD, !1, void 0, zD.type, void 0, null, !1, void 0, rD);
-           LD.externalTextureSamplerBinding = !0;
-           const cD = sD.createRenderTargetTexture(zD.width, {
-             generateDepthBuffer: !1,
- ... (15 more removed lines; see GitHub link above)
+       constructor() {
+         this.direction1 = new Ip.o(0, 1, 0), this.direction2 = new Ip.o(0, 1, 0)
```

#### 31. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L459-L461` → after: `L925-L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L925-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/308.js#L925-L1003) · [Before (L459-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/308.js#L459-L461)

```diff
-       static async EncodeTextureToRGBD(DD, zD) {
-         let pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         return zD.iI().isWebGPU ? await wD.e(343).then((() => wD(61169))) : await wD.e(325).then((() => wD(61162))), await (0, sD.d)("rgbdEncode", DD, zD, pD, 1, 5)
+       startDirectionFunction(pp, ip, cp, Op) {
+         const op = (0, Wp.RandomRange)(this.direction1.x, this.direction2.x),
+           Sp = (0, Wp.RandomRange)(this.direction1.y, this.direction2.y),
+           xp = (0, Wp.RandomRange)(this.direction1.z, this.direction2.z);
+         Op ? ip.i5(op, Sp, xp) : Ip.o.TransformNormalFromFloatsToRef(op, Sp, xp, pp, ip)
+       }
+       startPositionFunction(pp, ip, cp, Op) {
+         Op ? ip.i5(0, 0, 0) : Ip.o.TransformCoordinatesFromFloatsToRef(0, 0, 0, pp, ip)
+       }
+       clone() {
+         const pp = new yp;
+         return Pp.e.DeepCopy(this, pp), pp
+       }
+       applyToShader(pp) {
+         pp.setVector3("direction1", this.direction1), pp.setVector3("direction2", this.direction2)
+       }
+ ... (63 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/309.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/309.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868)

#### 1. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L4-L6` → after: `L4-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L4-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/309.js#L4-L31) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/309.js#L4-L6)

```diff
-   41686: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       _IESTextureLoader: () => LD
+   41955: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Ip
+     });
+     var Op = cp(41948),
+       op = cp(41959);
+ 
+     function Ip(pp) {
+       (0, op.e)(pp), (0, Op.q)(pp);
+       const ip = pp._surfaces;
+       for (const cp of ip) cp._renderingContexts.length = 0, cp._ro?.disconnect(), cp._context.unconfigure();
+       ip.length = 0;
+       try {
+         pp._disposeManagedResources?.(), pp._disposeStorageBuffers?.()
+       } finally {
+         pp._device.destroy()
+ ... (12 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L8` → after: `L33-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L33-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/309.js#L33-L86) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/309.js#L8)

```diff
-     var pD = wD(37125);
+     var Op = cp(41905);
+     var op = "Babylon Lite v1.32.0",
+       Ip = cp(41952);
+ 
+     function Sp(pp) {
+       return "clientWidth" in pp
+     }
+     var xp = 1;
+ 
+     function Lp(pp, ip, cp) {
+       const Lp = ip.getContext("webgpu");
+       Lp || (0, Op.e)(54), Sp(ip) && ip.setAttribute("data-engine", op);
+       const Yp = cp?.format ?? navigator.gpu.getPreferredCanvasFormat(),
+         Dp = cp?.srgb ? (Ap = Yp).endsWith("-srgb") ? Ap : `${Ap}-srgb` : Yp;
+       var Ap;
+       const Pp = cp?.alphaMode ?? "opaque";
+ ... (38 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L11` → after: `L89-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L89-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/309.js#L89-L95) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/309.js#L11)

```diff
-       return DD.split(" ").filter((DD => "" !== DD)).map((DD => parseFloat(DD)))
+       const ip = pp.canvas;
+       if (!Sp(ip)) return;
+       const cp = pp._w ?? ip.clientWidth,
+         Op = pp._h ?? ip.clientHeight;
+       if (!(cp > 0 && Op > 0)) return;
+       const op = Math.min(globalThis.devicePixelRatio || 1, pp.maxDevicePixelRatio);
+       Ap(pp, cp * op | 0, Op * op | 0)
```

#### 4. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L15-L17` → after: `L99-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L99-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/309.js#L99-L149) · [Before (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/309.js#L15-L17)

```diff
-       for (; wD.length !== zD;) {
-         const zD = sD(DD.lines[DD.index++]);
-         wD.push(...zD)
+       const Op = pp.canvas,
+         op = 0 | ip,
+         Ip = 0 | cp;
+       if (op > 0 && Ip > 0 && (op !== Op.width || Ip !== Op.height)) {
+         Op.width = op, Op.height = Ip, pp.scRT._width = op, pp.scRT._height = Ip;
+         for (const ip of pp._renderingContexts) ip._resize?.()
+       }
+     }
+     var Pp = 0;
+ 
+     function Wp(pp, ip) {
+       return -1 !== pp._renderingContexts.indexOf(ip)
+     }
+ 
+     function yp(pp, ip) {
+       return -1 === pp._renderingContexts.indexOf(ip) && (pp._renderingContexts.push(ip), !0)
+ ... (35 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L22-L26` → after: `L178-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L178-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/309.js#L178-L193) · [Before (L22-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/309.js#L22-L26)

```diff
-       let sD = 0,
-         KD = 0,
-         rD = 0,
-         LD = 0,
-         cD = 0,
+       Ap(pp, ip, cp)
+     }
+ 
+     function Hp(pp) {
+       pp._animFrameId && cancelAnimationFrame(pp._animFrameId), pp._animFrameId = 0, pp._renderFn = null, pp._flushGpuRetirements?.(pp)
+     }
+ 
+     function dp(pp, ip) {
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pp.surfaces;
+       if (cp !== pp.surfaces)
+         for (let op = cp.length; op--;) cp[op].engine !== pp && (0, Op.e)(49);
+       ep(pp, ip, cp)
+     }
+ 
+     function ep(pp, ip) {
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pp._surfaces,
```

#### 6. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L28-L54` → after: `L195-L951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L195-L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/309.js#L195-L951) · [Before (L28-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/309.js#L28-L54)

```diff
-       for (let pD = 0; pD < DD.numberOfHorizontalAngles - 1; pD++)
-         if (wD < DD.horizontalAngles[pD + 1] || pD === DD.numberOfHorizontalAngles - 2) {
-           KD = pD, rD = DD.horizontalAngles[pD], LD = DD.horizontalAngles[pD + 1];
-           break
-         } for (let pD = 0; pD < DD.numberOfVerticalAngles - 1; pD++)
-         if (zD < DD.verticalAngles[pD + 1] || pD === DD.numberOfVerticalAngles - 2) {
-           sD = pD, cD = DD.verticalAngles[pD], gD = DD.verticalAngles[pD + 1];
-           break
-         } const RD = LD - rD,
-         AD = gD - cD;
-       if (0 === AD) return 0;
-       const UD = 0 === RD ? 0 : (wD - rD) / RD,
-         fD = (zD - cD) / AD,
-         ID = 0 === RD ? KD : KD + 1,
-         BD = (0, pD.Lerp)(DD.candelaValues[KD][sD], DD.candelaValues[ID][sD], UD),
-         GD = (0, pD.Lerp)(DD.candelaValues[KD][sD + 1], DD.candelaValues[ID][sD + 1], UD);
- ... (11 more removed lines; see GitHub link above)
+       for (let Ip = cp.length; Ip--;) Op += cp[Ip]._renderingContexts.length;
+       if (!Op) return pp.drawCallCount = 0, pp._flushGpuRetirements?.(pp);
+       const op = pp._device.createCommandEncoder({
+         label: "frame"
+       });
+       pp._currentEncoder = op, pp._currentDelta = ip;
+       try {
+         pp._gpuTimerBegin?.(op), Op = 0;
+         for (let pp = 0; pp < cp.length; pp++) {
+           const ip = cp[pp];
+           ip._capturePreFrame?.(ip), Yp(ip);
+           const op = ip._renderingContexts;
+           for (let pp = 0; pp < op.length; pp++) {
+             const ip = op[pp];
+             ip._update(), Op += ip._drawCallsPre + ip._record()
+           }
+ ... (741 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L56-L57` → after: `L953-L958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L953-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/309.js#L953-L958) · [Before (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/309.js#L56-L57)

```diff
-               lines: new TextDecoder("utf-8").decode(DD).split("\n"),
-               index: 0
+             _tasks: [],
+             _currentProcessedTask: null,
+             build() {
+               for (let ip = 0; ip < pp._tasks.length; ip++) Ip(pp, pp._tasks[ip]);
+               for (const ip of pp._tasks)
+                 for (const pp of ip._passes) pp._initialize()
```

#### 8. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L59-L93` → after: `L960-L1223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L960-L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/309.js#L960-L1223) · [Before (L59-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/309.js#L59-L93)

```diff
-             wD = {
-               version: zD.lines[0],
-               candelaValues: [],
-               horizontalAngles: [],
-               verticalAngles: [],
-               numberOfHorizontalAngles: 0,
-               numberOfVerticalAngles: 0
-             };
-           for (zD.index = 1; zD.lines.length > 0 && !zD.lines[zD.index].includes("TILT=");) zD.index++;
-           zD.lines[zD.index].includes("INCLUDE"), zD.index++;
-           const pD = sD(zD.lines[zD.index++]);
-           wD.numberOfLights = pD[0], wD.lumensPerLamp = pD[1], wD.numberOfVerticalAngles = pD[3], wD.numberOfHorizontalAngles = pD[4], wD.photometricType = pD[5], wD.unitsType = pD[6], wD.width = pD[7], wD.length = pD[8], wD.height = pD[9], zD.index++;
-           for (let sD = 0; sD < wD.numberOfHorizontalAngles; sD++) wD.candelaValues[sD] = [];
-           KD(zD, wD.numberOfVerticalAngles, wD.verticalAngles), KD(zD, wD.numberOfHorizontalAngles, wD.horizontalAngles);
-           for (let sD = 0; sD < wD.numberOfHorizontalAngles; sD++) KD(zD, wD.numberOfVerticalAngles, wD.candelaValues[sD]);
-           let LD = -1;
- ... (19 more removed lines; see GitHub link above)
+             execute() {
+               let ip = 0;
+               for (const cp of pp._tasks)
+                 if (!1 !== cp.executionEnabled)
+                   if (cp.execute) ip += cp.execute();
+                   else
+                     for (const pp of cp._passes) ip += pp._execute();
+               return ip
+             },
+             dispose() {
+               for (const ip of pp._tasks) ip.dispose();
+               pp._tasks.length = 0, pp._currentProcessedTask = null
+             }
+           };
+           return pp
+         }();
+ ... (248 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L95-L99` → after: `L1225-L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L1225-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/309.js#L1225-L1305) · [Before (L95-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/309.js#L95-L99)

```diff
-         }(new Uint8Array(DD.buffer, DD.byteOffset, DD.byteLength));
-         wD(pD.width, pD.height, !!zD.useMipMaps, !1, (() => {
-           const DD = zD.iI();
-           zD.type = 1, zD.format = 6, zD._gammaSpace = !1, DD._uploadDataToTextureDirectly(zD, pD.data)
-         }))
+         }, {
+           binding: 1,
+           visibility: Op.h.FRAGMENT,
+           sampler: {}
+         }]
+       })
+     }
+ 
+     function Wp(pp, ip, cp) {
+       const Op = pp._device,
+         op = Op.createCommandEncoder();
+       yp(pp, ip, op, cp), Op.queue.submit([op.finish()])
+     }
+ 
+     function yp(pp, ip, cp, Op) {
+       if (ip.mipLevelCount <= 1) return;
+ ... (65 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/310.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/310.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d)

#### 1. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/310.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/310.js#L4-L6)

```diff
-   41697: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       _BasisTextureLoader: () => nD
+   41996: (pp, ip, cp) => {
+     cp.d(ip, {
+       parseShaderPack: () => Op
```

#### 2. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L13-L48` → after: `L9-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/310.js#L9-L15) · [Before (L13-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/310.js#L13-L48)

```diff
-     function cD() {
-       const DD = 0,
-         zD = 1,
-         wD = 2,
-         pD = 3,
-         sD = 6,
-         KD = 8,
-         rD = 9,
-         LD = 10,
-         cD = 14;
-       let gD = null;
- 
-       function RD(DD, zD, wD, pD, sD) {
-         const KD = DD.getImageTranscodedSizeInBytes(zD, wD, pD);
-         let rD = new Uint8Array(KD);
-         if (!DD.transcodeImage(rD, zD, wD, pD, 1, 0)) return null;
- ... (20 more removed lines; see GitHub link above)
+     function Op(pp) {
+       var ip, cp;
+       const Op = pp.get("shaderPackUrl"),
+         op = null !== (ip = pp.get("shaderPackMode")) && void 0 !== ip ? ip : "strict";
+       if (null === Op) {
+         if (pp.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
+         return null
```

#### 3. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L50-L283` → after: `L17-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L17-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/310.js#L17-L25) · [Before (L50-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/310.js#L50-L283)

```diff
-       onmessage = AD => {
-         if ("init" === AD.data.action) {
-           if (AD.data.url) try {
-             importScripts(AD.data.url)
-           } catch (UD) {
-             postMessage({
-               action: "error",
-               error: UD
-             })
-           }
-           gD || (gD = BASIS({
-             wasmBinary: AD.data.wasmBinary
-           })), null !== gD && gD.then((DD => {
-             BASIS = DD, DD.initializeBasis(), postMessage({
-               action: "init"
-             })
- ... (218 more removed lines; see GitHub link above)
+       if ("lite" !== pp.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
+       if (! function(pp) {
+           return "strict" === pp || "allow" === pp
+         }(op)) throw new Error(`Unknown shaderPackMode "${op}" - use strict or allow`);
+       const Ip = (null !== (cp = pp.get("variants")) && void 0 !== cp ? cp : "").split(",").find((pp => pp.trim().startsWith("liteShaderPack")));
+       if (void 0 !== Ip) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${Ip.trim()}`);
+       return {
+         url: Op,
+         mode: op
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/311.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/311.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab)

#### 1. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L4)

```diff
-   41731: (DD, zD, wD) => {
+   42025: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L6)

```diff
-       b: () => hD
+       d: () => Yp
```

#### 3. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L8-L19` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L8-L12) · [Before (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L8-L19)

```diff
-     var pD = wD(37119),
-       sD = wD(37079),
-       KD = wD(40400),
-       rD = wD(40073),
-       LD = wD(39852),
-       cD = wD(38662),
-       gD = wD(40055),
-       RD = wD(40084),
-       AD = wD(37094),
-       UD = wD(39820),
-       fD = wD(40043),
-       ID = wD(40128);
+     var Op = cp(37320),
+       op = cp(37356),
+       Ip = cp(40190),
+       Sp = cp(37324),
+       xp = cp(37487);
```

#### 4. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L21-L22` → after: `L14-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L14-L15) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L21-L22)

```diff
-       get renderList() {
-         return this._renderList
+       constructor(pp, ip, cp, Op) {
+         this.name = pp, this.worldAxisForNormal = ip, this.worldAxisForFileX = cp, this.worldAxisForFileY = Op
```

#### 5. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L24-L49` → after: `L17-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L17-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L17-L45) · [Before (L24-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L24-L49)

```diff
-       set renderList(DD) {
-         this._renderList !== DD && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), DD && (this._unObserveRenderList = (0, AD.i)(DD, this._renderListHasChanged)), this._renderList = DD)
-       }
-       get disableImageProcessing() {
-         return this._disableImageProcessing
-       }
-       set disableImageProcessing(DD) {
-         DD !== this._disableImageProcessing && (this._disableImageProcessing = DD, this._scene.markAllMaterialsAsDirty(64))
-       }
-       get disableDepthPrePass() {
-         return this._disableDepthPrePass
-       }
-       set disableDepthPrePass(DD) {
-         this._disableDepthPrePass = DD, this._renderingManager.disableDepthPrePass = DD
-       }
-       get name() {
- ... (10 more removed lines; see GitHub link above)
+     }
+     class Yp {
+       static _NearestPow2Floor(pp) {
+         return pp <= 1 ? 1 : 1 << Math.floor(Math.log2(pp))
+       }
+       static ConvertCubeMapTextureToSphericalPolynomial(pp) {
+         if (!pp.isCube) return null;
+         pp.Gl()?.gy().flushFramebuffer();
+         const ip = pp.getSize().width,
+           cp = pp._sphericalPolynomialTargetSize,
+           Op = cp > 0 ? this._NearestPow2Floor(cp) : 0,
+           op = !pp.noMipmap && !0 === pp._texture?.generateMipMaps,
+           Ip = Op > 0 && Op < ip && op,
+           Sp = Ip ? Math.max(0, Math.round(Math.log2(ip / Op))) : 0,
+           xp = Ip ? Math.max(1, Math.floor(ip / Math.pow(2, Sp))) : ip,
+           Lp = pp.readPixels(0, Sp, void 0, !1),
+ ... (13 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L51-L77` → after: `L47-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L47-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L47-L60) · [Before (L51-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L51-L77)

```diff
-         }
-       }
-       get renderPassIds() {
-         return this._renderPassIds
-       }
-       get currentRefreshId() {
-         return this._currentRefreshId
-       }
-       getActiveMeshes() {
-         return this._activeMeshes
-       }
-       setMaterialForRendering(DD, zD) {
-         let wD;
-         wD = Array.isArray(DD) ? DD : [DD];
-         for (let pD = 0; pD < wD.length; ++pD)
-           for (let DD = 0; DD < this.options.numPasses; ++DD) {
- ... (11 more removed lines; see GitHub link above)
+             const Pp = {
+               size: Ap,
+               right: Ip,
+               left: op,
+               up: Sp,
+               down: Lp,
+               front: Yp,
+               back: Dp,
+               format: 5,
+               type: op instanceof Float32Array ? 1 : 0,
+               gammaSpace: yp
+             };
+             pp(this.ConvertCubeMapToSphericalPolynomial(Pp))
+           }))
```

#### 7. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L80-L105` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L63-L64) · [Before (L80-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L80-L105)

```diff
-       _unfreezeActiveMeshes() {
-         this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
-         for (let DD = 0; DD < this._activeMeshes.length; DD++) this._activeMeshes.data[DD]._unFreeze();
-         this._isFrozen = !1
-       }
-       constructor(DD, zD, wD) {
-         this._unObserveRenderList = null, this._renderListHasChanged = (DD, zD) => {
-           const wD = this._renderList ? this._renderList.length : 0;
-           if (0 === zD && wD > 0 || 0 === wD)
-             for (const pD of this._scene.meshes) pD._markSubMeshesAsLightDirty()
-         }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticl … [truncated]
-           numPasses: 1,
-           doNotChangeAspectRatio: !0,
-           enableClusteredLights: !1,
-           ...wD
-         }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new RD.d(zD), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
- ... (10 more removed lines; see GitHub link above)
+       static _AreaElement(pp, ip) {
+         return Math.atan2(pp * ip, Math.sqrt(pp * pp + ip * ip + 1))
```

#### 8. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L107-L148` → after: `L66-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L66-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L66-L83) · [Before (L107-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L107-L148)

```diff
-       _createSceneUBO(DD, zD) {
-         const wD = this._scene.iI(),
-           pD = new gD.e(wD, void 0, zD, DD, void 0, !1);
-         return pD.addUniform("viewProjection", 16), zD && pD.addUniform("viewProjectionR", 16), pD.addUniform("view", 16), pD.addUniform("projection", 16), pD.addUniform("vEyePosition", 4), pD.addUniform("inverseProjection", 16), pD
-       }
-       _getSceneUBO() {
-         this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
-         const DD = this._engine._currentRenderTarget,
-           zD = !(!DD || !DD.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
-         if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
-           const DD = this._sceneUBOs.length;
-           this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${DD} for ${this.name}`, zD)), this._sceneUBOIsMultiview.push(zD)
-         } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== zD && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, zD), this._sceneU … [truncated]
-         const wD = this._sceneUBOs[this._currentSceneUBOIndex++];
-         return wD.unbindEffect(), wD
-       }
- ... (26 more removed lines; see GitHub link above)
+       static _DownsampleFace(pp, ip, cp, Op) {
+         const op = pp instanceof Float32Array ? pp : Float32Array.from(pp),
+           Ip = cp * cp * Op,
+           Sp = new Float32Array(Ip),
+           xp = ip / cp,
+           Lp = 1 / (xp * xp);
+         for (let Dp = 0; Dp < cp; Dp++) {
+           const pp = Math.floor(Dp * xp),
+             Ip = Math.floor((Dp + 1) * xp);
+           for (let Yp = 0; Yp < cp; Yp++) {
+             const Ap = Math.floor(Yp * xp),
+               Pp = Math.floor((Yp + 1) * xp),
+               Wp = (Dp * cp + Yp) * Op;
+             for (let cp = 0; cp < Op; cp++) {
+               let xp = 0;
+               for (let Sp = pp; Sp < Ip; Sp++)
+ ... (2 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L183-L229` → after: `L87-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L87-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L87-L90) · [Before (L183-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L183-L229)

```diff
-         zD || this.onAfterRenderObservable.notifyObservers(DD), this._engine.currentRenderPassId = wD
-       }
-       _checkReadiness() {
-         const DD = this._scene,
-           zD = this._engine.currentRenderPassId;
-         let wD = !0;
-         DD.getViewMatrix() || DD.updateTransformMatrix();
-         const pD = this.options.numPasses;
-         for (let sD = 0; sD < pD && wD; sD++) {
-           const zD = this.renderList ? this.renderList : DD.frameGraph ? DD.meshes : DD.getActiveMeshes().data,
-             KD = this.renderList || DD.frameGraph ? zD.length : DD.getActiveMeshes().length;
-           this._engine.currentRenderPassId = this._renderPassIds[sD], this.onBeforeRenderObservable.notifyObservers(sD);
-           let rD = null,
-             LD = KD;
-           this.getCustomRenderList && (rD = this.getCustomRenderList(sD, zD, KD), rD && (LD = rD.length)), rD || (rD = zD), this.options.doNotChangeAspectRatio || DD.updateTransformMatrix(!0);
-           for (let DD = 0; DD < LD && wD; ++DD) {
- ... (31 more removed lines; see GitHub link above)
+         if (pp instanceof Float32Array) return Sp;
+         const Yp = new(0, pp.constructor)(Ip);
+         for (let Dp = 0; Dp < Ip; Dp++) Yp[Dp] = Sp[Dp] + .5 | 0;
+         return Yp
```

#### 10. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L231-L252` → after: `L92-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L92-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L92-L103) · [Before (L231-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L231-L252)

```diff
-       _prepareRenderingManager() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         const wD = this._scene;
-         let pD, sD, KD = null;
-         const rD = this.renderList ? this.renderList : wD.frameGraph ? wD.meshes : wD.getActiveMeshes().data,
-           LD = this.renderList || wD.frameGraph ? rD.length : wD.getActiveMeshes().length;
-         if (this.getCustomRenderList && (KD = this.getCustomRenderList(DD, rD, LD)), KD) pD = KD.length, sD = this.forceLayerMaskCheck;
-         else {
-           if (this._defaultRenderListPrepared && !zD && !this._engine.isWebGPU) return rD;
-           this._defaultRenderListPrepared = !0, KD = rD, pD = LD, sD = !this.renderList || this.forceLayerMaskCheck
-         }
-         const cD = wD.activeCamera,
-           gD = this.cameraForLOD ?? cD,
-           RD = wD.getBoundingBoxRenderer?.();
-         if (wD._activeMeshesFrozen && this._isFrozen) {
- ... (6 more removed lines; see GitHub link above)
+       static ConvertCubeMapToSphericalPolynomial(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         const cp = ip > 0 ? this._NearestPow2Floor(ip) : 0;
+         if (cp > 0 && pp.size > cp) {
+           const ip = 5 === pp.format ? 4 : 3,
+             Op = ["right", "left", "up", "down", "front", "back"],
+             op = {};
+           for (const Ip of Op) op[Ip] = this._DownsampleFace(pp[Ip], pp.size, cp, ip);
+           pp = {
+             ...pp,
+             ...op,
+             size: cp
```

#### 11. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L256-L283` → after: `L106-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L106-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L106-L132) · [Before (L256-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L256-L283)

```diff
-         if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), RD && RD.reset(), this.renderMeshes) {
-           const DD = wD.getRenderId(),
-             zD = wD.getFrameId();
-           for (let rD = 0; rD < pD; rD++) {
-             const pD = KD[rD];
-             if (pD && !pD.isBlocked) {
-               if (this.customIsReadyFunction) {
-                 if (!this.customIsReadyFunction(pD, this.refreshRate, !1)) {
-                   this.resetRefreshCounter();
-                   continue
-                 }
-               } else if (!pD.isReady(0 === this.refreshRate)) {
-                 this.resetRefreshCounter();
-                 continue
-               }
-               let KD, rD;
- ... (12 more removed lines; see GitHub link above)
+         const Op = new Ip.c;
+         let Lp = 0;
+         const Yp = 2 / pp.size,
+           Dp = Yp,
+           Ap = .5 * Yp,
+           Pp = Ap - 1;
+         for (let Ip = 0; Ip < 6; Ip++) {
+           const ip = this._FileFaces[Ip],
+             cp = pp[ip.name];
+           let Wp = Pp;
+           const yp = 5 === pp.format ? 4 : 3;
+           for (let Ip = 0; Ip < pp.size; Ip++) {
+             let Up = Pp;
+             for (let Dp = 0; Dp < pp.size; Dp++) {
+               const Pp = ip.worldAxisForFileX.scale(Up).add(ip.worldAxisForFileY.scale(Wp)).add(ip.worldAxisForNormal);
+               Pp.normalize();
+ ... (11 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L285-L286` → after: `L134-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L134-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L134-L136) · [Before (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L285-L286)

```diff
-                 pD._postActivate()
-               }
+               } else vp = (0, op.Clamp)(vp, 0, dp), tp = (0, op.Clamp)(tp, 0, dp), Hp = (0, op.Clamp)(Hp, 0, dp);
+               const ep = new xp.d(vp, tp, Hp);
+               Op.addLight(Pp, ep, wp), Lp += wp, Up += Yp
```

#### 13. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L290-L741` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L141-L142) · [Before (L290-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L290-L741)

```diff
-         if (this.enableBoundingBoxRendering && RD && zD)
-           for (let AD = 0; AD < RD.renderList.length; AD++) {
-             const DD = RD.renderList.data[AD];
-             this._activeBoundingBoxes.push(DD)
-           }
-         if (this._scene.particlesEnabled && this.renderParticles) {
-           this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
-           const DD = this.particleSystemList || wD.XE;
-           for (let zD = 0; zD < DD.length; zD++) {
-             const wD = DD[zD],
-               pD = wD.emitter;
-             wD.isStarted() && pD && (!pD.position || pD.isEnabled()) && this._renderingManager.dispatchParticles(wD)
-           }
-           this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
-         }
-         return KD
- ... (436 more removed lines; see GitHub link above)
+         const Wp = 6 * (4 * Math.PI) / 6 / Lp;
+         return Op.scaleInPlace(Wp), Op.convertIncidentRadianceToIrradiance(), Op.convertIrradianceToLambertianRadiance(), Ip.e.FromHarmonics(Op)
```

#### 14. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L744-L745` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L145) · [Before (L744-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L744-L745)

```diff
-     hD.REFRESHRATE_RENDER_ONCE = BD.REFRESHRATE_RENDER_ONCE, hD.REFRESHRATE_RENDER_ONEVERYFRAME = BD.REFRESHRATE_RENDER_ONEVERYFRAME, hD.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = BD.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
-     Object.getOwnPropertyDescriptor(hD.prototype, "noPrePassRenderer") || Object.defineProperty(hD.prototype, "noPrePassRenderer", (0, GD.g)("RenderTargetTexture", "noPrePassRenderer"))
+     Yp._FileFaces = [new Lp("right", new Op.o(1, 0, 0), new Op.o(0, 0, -1), new Op.o(0, -1, 0)), new Lp("left", new Op.o(-1, 0, 0), new Op.o(0, 0, 1), new Op.o(0, -1, 0)), new Lp("up", new Op.o(0, 1, 0), new Op.o(1, 0, 0), new Op.o(0, 0, 1)), new Lp("down", new Op.o(0, -1, 0), ne … [truncated]
```

#### 15. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L747` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L147) · [Before (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L747)

```diff
-   41711: (DD, zD, wD) => {
+   42016: (pp, ip, cp) => {
```

#### 16. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L749-L750` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L149) · [Before (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L749-L750)

```diff
-       e: () => gD,
-       g: () => RD
+       DDSTools: () => yp
```

#### 17. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L752-L810` → after: `L151-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L151-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L151-L159) · [Before (L752-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L752-L810)

```diff
-     var pD = wD(40066),
-       sD = wD(38074),
-       KD = wD(37119),
-       rD = wD(39771),
-       LD = wD(40249);
-     const cD = {
-       positions: [1, 1, -1, 1, -1, -1, 1, -1],
-       indices: [0, 1, 2, 0, 2, 3]
-     };
-     class gD {
-       constructor(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cD;
-         this._fullscreenViewport = new sD.e(0, 0, 1, 1);
-         const wD = zD.positions ?? cD.positions,
-           KD = zD.indices ?? cD.indices;
-         this.engine = DD, this._vertexBuffers = {
- ... (43 more removed lines; see GitHub link above)
+     var Op = cp(37356),
+       op = cp(38905),
+       Ip = cp(42025),
+       Sp = cp(40276);
+     const xp = 131072,
+       Lp = 131072;
+ 
+     function Yp(pp) {
+       return pp.charCodeAt(0) + (pp.charCodeAt(1) << 8) + (pp.charCodeAt(2) << 16) + (pp.charCodeAt(3) << 24)
```

#### 18. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L813-L898` → after: `L166-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L166-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L166-L189) · [Before (L813-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L813-L898)

```diff
-       static RegisterShaderCodeProcessing(DD, zD) {
-         zD ? RD._CustomShaderCodeProcessing[DD ?? ""] = zD : delete RD._CustomShaderCodeProcessing[DD ?? ""]
-       }
-       static _GetShaderCodeProcessing(DD) {
-         return RD._CustomShaderCodeProcessing[DD] ?? RD._CustomShaderCodeProcessing[""]
-       }
-       get name() {
-         return this.options.name
-       }
-       set name(DD) {
-         this.options.name = DD
-       }
-       isReady() {
-         return this._drawWrapper.effect?.isReady() ?? !1
-       }
-       get drawWrapper() {
- ... (70 more removed lines; see GitHub link above)
+       static GetDDSInfo(pp) {
+         const ip = new Int32Array(pp.buffer, pp.byteOffset, 31),
+           cp = new Int32Array(pp.buffer, pp.byteOffset, 35);
+         let Op = 1;
+         ip[2] & xp && (Op = Math.max(1, ip[7]));
+         const op = ip[21],
+           Ip = op === Wp ? cp[32] : 0;
+         let Sp = 0;
+         switch (op) {
+           case 113:
+             Sp = 2;
+             break;
+           case 116:
+             Sp = 1;
+             break;
+           case Wp:
+ ... (8 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L986-L1008` → after: `L192-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L192-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L192-L201) · [Before (L986-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L986-L1008)

```diff
-           canvas: DD,
-           dumpEngine: {
-             engine: pD,
-             renderer: KD,
-             wrapper: gD
-           }
-         }
-       }()), await AD
-     }
-     let fD = (() => {
-       var DD;
-       let zD, wD = [];
-       return DD = class {
-         static async EncodeImageAsync(DD, zD, wD, pD, sD, rD) {
-           const LD = await UD(),
-             cD = LD.dumpEngine;
- ... (7 more removed lines; see GitHub link above)
+           width: ip[4],
+           height: ip[3],
+           mipmapCount: Op,
+           isFourCC: 4 === (4 & ip[20]),
+           isRGB: 64 === (64 & ip[20]),
+           isLuminance: (ip[20] & Lp) === Lp,
+           isCube: 512 === (512 & ip[28]),
+           isCompressed: op === Dp || op === Ap || op === Pp,
+           dxgiFormat: Ip,
+           textureType: Sp
```

#### 20. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L1053-L1333` → after: `L204-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L204-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L204-L211) · [Before (L1053-L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L1053-L1333)

```diff
-       const UD = await fD.EncodeImageAsync(wD, DD, zD, pD, LD, AD);
-       void 0 !== sD && KD.h.DownloadBlob(UD, sD), UD.type !== pD && cD.d.Warn(`DumpData: The requested mimeType '${pD}' is not supported. The result has mimeType '${UD.type}' instead.`);
-       const ID = await UD.arrayBuffer();
-       return RD ? ID : `data:${pD};base64,${(0,gD.e)(ID)}`
-     }
- 
-     function hD(DD, zD, wD, pD) {
-       let sD = arguments.length > 5 ? arguments[5] : void 0;
-       void 0 !== sD || pD || (sD = ""), GD(DD, zD, wD, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", sD, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.len … [truncated]
-         pD && pD(DD)
-       }))
-     }
- 
-     function nD() {
-       AD && (AD?.then((DD => {
-         DD.canvas instanceof HTMLCanvasElement && DD.canvas.remove(), DD.dumpEngine && (DD.dumpEngine.engine.dispose(), DD.dumpEngine.renderer.dispose(), DD.dumpEngine.wrapper.dispose())
- ... (265 more removed lines; see GitHub link above)
+       static _GetHalfFloatAsFloatRGBAArrayBuffer(pp, ip, cp, Op, op, Ip) {
+         const xp = new Float32Array(Op),
+           Lp = new Uint16Array(op, cp);
+         let Yp = 0;
+         for (let Dp = 0; Dp < ip; Dp++)
+           for (let ip = 0; ip < pp; ip++) {
+             const cp = 4 * (ip + Dp * pp);
+             xp[Yp] = (0, Sp.c)(Lp[cp]), xp[Yp + 1] = (0, Sp.c)(Lp[cp + 1]), xp[Yp + 2] = (0, Sp.c)(Lp[cp + 2]), yp.StoreLODInAlphaChannel ? xp[Yp + 3] = Ip : xp[Yp + 3] = (0, Sp.c)(Lp[cp + 3]), Yp += 4
```

#### 21. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L1335` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L213) · [Before (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L1335)

```diff
-         }(DD, GD, hD, LD, cD, RD)
+         return xp
```

#### 22. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L1337-L1344` → after: `L215-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L215-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L215-L225) · [Before (L1337-L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L1337-L1344)

```diff
-       let nD = await DD.readPixels(LD, cD);
-       if (!nD) throw new Error(`Failed to read pixels from texture ${DD.name}.`);
-       if (nD instanceof Float32Array) {
-         const DD = new Uint8Array(nD.length);
-         let zD = nD.length;
-         for (; zD--;) {
-           const wD = nD[zD];
-           DD[zD] = Math.round(255 * (0, AD.Clamp)(wD))
+       static _GetHalfFloatRGBAArrayBuffer(pp, ip, cp, Op, op, Ip) {
+         if (yp.StoreLODInAlphaChannel) {
+           const xp = new Uint16Array(Op),
+             Lp = new Uint16Array(op, cp);
+           let Yp = 0;
+           for (let cp = 0; cp < ip; cp++)
+             for (let ip = 0; ip < pp; ip++) {
+               const Op = 4 * (ip + cp * pp);
+               xp[Yp] = Lp[Op], xp[Yp + 1] = Lp[Op + 1], xp[Yp + 2] = Lp[Op + 2], xp[Yp + 3] = (0, Sp.h)(Ip), Yp += 4
+             }
+           return xp
```

#### 23. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L1346-L1358` → after: `L227-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L227-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L227-L237) · [Before (L1346-L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L1346-L1358)

```diff
-         nD = DD
-       }
-       const MD = GD * hD,
-         OD = 4 * MD;
-       if (nD.length !== OD) {
-         const DD = 0 === MD ? 0 : nD.length / MD;
-         if (1 === DD || 2 === DD || 3 === DD) {
-           const zD = new Uint8Array(OD);
-           for (let wD = 0, pD = 0, sD = 0; wD < MD; wD++, sD += 4) {
-             const wD = nD[pD++];
-             if (1 === DD) {
-               zD[sD] = wD, zD[sD + 1] = wD, zD[sD + 2] = wD, zD[sD + 3] = 255;
-               continue
+         return new Uint16Array(op, cp, Op)
+       }
+       static _GetFloatRGBAArrayBuffer(pp, ip, cp, Op, op, Ip) {
+         if (yp.StoreLODInAlphaChannel) {
+           const Sp = new Float32Array(Op),
+             xp = new Float32Array(op, cp);
+           let Lp = 0;
+           for (let cp = 0; cp < ip; cp++)
+             for (let ip = 0; ip < pp; ip++) {
+               const Op = 4 * (ip + cp * pp);
+               Sp[Lp] = xp[Op], Sp[Lp + 1] = xp[Op + 1], Sp[Lp + 2] = xp[Op + 2], Sp[Lp + 3] = Ip, Lp += 4
```

#### 24. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L1366-L1723` → after: `L251-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L251-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L251-L258) · [Before (L1366-L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L1366-L1723)

```diff
-       return nD
-     }
-     const BD = {
-       CreateResizedCopy: function(DD, zD, wD) {
-         let KD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-         const rD = DD.Ul(),
-           LD = rD.iI(),
-           cD = new sD.b("resized" + DD.name, {
-             width: zD,
-             height: wD
-           }, rD, !DD.noMipmap, !0, DD._texture.type, !1, DD.samplingMode, !1);
-         cD.wrapU = DD.wrapU, cD.wrapV = DD.wrapV, cD.uOffset = DD.uOffset, cD.vOffset = DD.vOffset, cD.uScale = DD.uScale, cD.vScale = DD.vScale, cD.uAng = DD.uAng, cD.vAng = DD.vAng, cD.wAng = DD.wAng, cD.coordinatesIndex = DD.coordinatesIndex, cD.level = DD.level, cD.anisotropi … [truncated]
-         const gD = new RD("pass", 1, null, KD ? pD.d.BILINEAR_SAMPLINGMODE : pD.d.NEAREST_SAMPLINGMODE, LD, !1, 0);
-         return gD.externalTextureSamplerBinding = !0, gD.onEffectCreatedObservable.addOnce((zD => {
-           zD.executeWhenCompiled((() => {
-             gD.onApply = function(zD) {
- ... (342 more removed lines; see GitHub link above)
+       static _GetFloatAsUIntRGBAArrayBuffer(pp, ip, cp, op, Ip, Sp) {
+         const xp = new Uint8Array(op),
+           Lp = new Float32Array(Ip, cp);
+         let Yp = 0;
+         for (let Dp = 0; Dp < ip; Dp++)
+           for (let ip = 0; ip < pp; ip++) {
+             const cp = 4 * (ip + Dp * pp);
+             xp[Yp] = 255 * (0, Op.Clamp)(Lp[cp]), xp[Yp + 1] = 255 * (0, Op.Clamp)(Lp[cp + 1]), xp[Yp + 2] = 255 * (0, Op.Clamp)(Lp[cp + 2]), yp.StoreLODInAlphaChannel ? xp[Yp + 3] = Sp : xp[Yp + 3] = 255 * (0, Op.Clamp)(Lp[cp + 3]), Yp += 4
```

#### 25. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L1725-L1726` → after: `L260-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L260-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L260-L269) · [Before (L1725-L1726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L1725-L1726)

```diff
-           static _Parse(zD, wD, pD, sD) {
-             return gD.d.Parse((() => new DD(zD.name, zD.fragmentUrl, zD.parameters, zD.samplers, zD.options, wD, zD.renderTargetSamplingMode, zD._engine, zD.reusable, zD.defines, zD.textureType, zD.vertexUrl, zD.indexParameters, !1, zD.textureFormat)), zD, pD, sD)
+         return xp
+       }
+       static _GetHalfFloatAsUIntRGBAArrayBuffer(pp, ip, cp, op, Ip, xp) {
+         const Lp = new Uint8Array(op),
+           Yp = new Uint16Array(Ip, cp);
+         let Dp = 0;
+         for (let Ap = 0; Ap < ip; Ap++)
+           for (let ip = 0; ip < pp; ip++) {
+             const cp = 4 * (ip + Ap * pp);
+             Lp[Dp] = 255 * (0, Op.Clamp)((0, Sp.c)(Yp[cp])), Lp[Dp + 1] = 255 * (0, Op.Clamp)((0, Sp.c)(Yp[cp + 1])), Lp[Dp + 2] = 255 * (0, Op.Clamp)((0, Sp.c)(Yp[cp + 2])), yp.StoreLODInAlphaChannel ? Lp[Dp + 3] = xp : Lp[Dp + 3] = 255 * (0, Op.Clamp)((0, Sp.c)(Yp[cp + 3])), Dp … [truncated]
```

#### 26. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L1728-L1964` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L271) · [Before (L1728-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L1728-L1964)

```diff
-         }, (() => {
-           const wD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-           zD = [(0, cD.C)()], LD = [(0, cD.C)()], AD = [(0, cD.C)()], ID = [(0, cD.C)()], BD = [(0, cD.C)()], hD = [(0, cD.m)()], nD = [(0, cD.C)()], MD = [(0, cD.C)()], OD = [(0, cD.C)()], JD = [(0, cD.C)()], ED = [(0, cD.C)()], QD = [(0, cD.C)()], XD = [(0, cD.C)()], VD = [(0,  … [truncated]
-             kind: "getter",
-             name: "name",
-             static: !1,
-             private: !1,
-             access: {
-               has: DD => "name" in DD,
-               get: DD => DD.name
-             },
-             metadata: wD
-           }, null, xD), (0, pD.i)(DD, null, OD, {
-             kind: "getter",
-             name: "alphaMode",
-             static: !1,
- ... (221 more removed lines; see GitHub link above)
+         return Lp
```

#### 27. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L1966-L1976` → after: `L273-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L273-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L273-L282) · [Before (L1966-L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L1966-L1976)

```diff
-       constructor(DD) {
-         let zD = arguments.length > 2 ? arguments[2] : void 0;
-         const wD = {
-           name: DD,
-           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || sD.d.LastCreatedEngine,
-           useShaderStore: !0,
-           useAsPostProcess: !0,
-           fragmentShader: KD.FragmentUrl,
-           ...zD
-         };
-         wD.engine || (wD.engine = sD.d.LastCreatedEngine), super(wD)
+       static _GetRGBAArrayBuffer(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
+         const Yp = new Uint8Array(Op),
+           Dp = new Uint8Array(op, cp);
+         let Ap = 0;
+         for (let Pp = 0; Pp < ip; Pp++)
+           for (let ip = 0; ip < pp; ip++) {
+             const cp = 4 * (ip + Pp * pp);
+             Yp[Ap] = Dp[cp + Ip], Yp[Ap + 1] = Dp[cp + Sp], Yp[Ap + 2] = Dp[cp + xp], Yp[Ap + 3] = Dp[cp + Lp], Ap += 4
+           }
+         return Yp
```

#### 28. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L1978-L1982` → after: `L284-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L284-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L284-L285) · [Before (L1978-L1982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L1978-L1982)

```diff
-     }
-     KD.FragmentUrl = "pass";
-     class rD extends pD.g {
-       _gatherImports(DD, zD) {
-         DD ? (this._webGPUReady = !0, zD.push(Promise.all([wD.e(373).then((() => wD(61221)))]))) : zD.push(Promise.all([wD.e(374).then((() => wD(61227)))])), super._gatherImports(DD, zD)
+       static _ExtractLongWordOrder(pp) {
+         return 0 === pp || 255 === pp || -16777216 === pp ? 0 : 1 + yp._ExtractLongWordOrder(pp >> 8)
```

#### 29. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L1984-L1993` → after: `L287-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L287-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L287-L296) · [Before (L1984-L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L1984-L1993)

```diff
-       constructor(DD) {
-         super({
-           ...arguments.length > 2 ? arguments[2] : void 0,
-           name: DD,
-           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || sD.d.LastCreatedEngine,
-           useShaderStore: !0,
-           useAsPostProcess: !0,
-           fragmentShader: rD.FragmentUrl,
-           defines: "#define POSITIVEX"
-         }), this._face = 0
+       static _GetRGBArrayBuffer(pp, ip, cp, Op, op, Ip, Sp, xp) {
+         const Lp = new Uint8Array(Op),
+           Yp = new Uint8Array(op, cp);
+         let Dp = 0;
+         for (let Ap = 0; Ap < ip; Ap++)
+           for (let ip = 0; ip < pp; ip++) {
+             const cp = 3 * (ip + Ap * pp);
+             Lp[Dp] = Yp[cp + Ip], Lp[Dp + 1] = Yp[cp + Sp], Lp[Dp + 2] = Yp[cp + xp], Dp += 3
+           }
+         return Lp
```

#### 30. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L1995-L1996` → after: `L298-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L298-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L298-L307) · [Before (L1995-L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L1995-L1996)

```diff
-       get face() {
-         return this._face
+       static _GetLuminanceArrayBuffer(pp, ip, cp, Op, op) {
+         const Ip = new Uint8Array(Op),
+           Sp = new Uint8Array(op, cp);
+         let xp = 0;
+         for (let Lp = 0; Lp < ip; Lp++)
+           for (let ip = 0; ip < pp; ip++) {
+             const cp = ip + Lp * pp;
+             Ip[xp] = Sp[cp], xp++
+           }
+         return Ip
```

#### 31. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L1998-L2001` → after: `L309-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L309-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L309-L329) · [Before (L1998-L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L1998-L2001)

```diff
-       set face(DD) {
-         if (!(DD < 0 || DD > 5)) switch (this._face = DD, this._face) {
-           case 0:
-             this.updateEffect("#define POSITIVEX");
+       static UploadDDSLevels(pp, ip, cp, Op, Sp, Lp) {
+         let Yp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
+           Up = arguments.length > 7 ? arguments[7] : void 0,
+           wp = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
+           vp = null;
+         Op.sphericalPolynomial && (vp = []);
+         const tp = !!pp.getCaps().s3tc;
+         ip.generateMipMaps = Sp;
+         const Hp = new Int32Array(cp.buffer, cp.byteOffset, 31);
+         let dp, ep, jp, kp, mp, Rp, qp, Mp = 0,
+           Cp = 0,
+           Ep = 1;
+         if (542327876 !== Hp[0]) return void op.e.Error("Invalid magic number in DDS header");
+         if (!Op.isFourCC && !Op.isRGB && !Op.isLuminance) return void op.e.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
+         if (Op.isCompressed && !tp) return void op.e.Error("Compressed textures are not supported on this platform.");
+         let Xp = Hp[22];
+ ... (5 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L2003-L2004` → after: `L331-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L331-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L331-L332) · [Before (L2003-L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L2003-L2004)

```diff
-           case 1:
-             this.updateEffect("#define NEGATIVEX");
+           case Ap:
+             Ep = 16, Cp = 33778;
```

#### 33. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L2006-L2007` → after: `L334-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L334-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L334-L335) · [Before (L2006-L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L2006-L2007)

```diff
-           case 2:
-             this.updateEffect("#define POSITIVEY");
+           case Pp:
+             Ep = 16, Cp = 33779;
```

#### 34. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L2009-L2010` → after: `L337-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L337-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L337-L338) · [Before (L2009-L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L2009-L2010)

```diff
-           case 3:
-             this.updateEffect("#define NEGATIVEY");
+           case 113:
+             lp = !0, Xp = 64;
```

#### 35. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L2012-L2013` → after: `L340-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L340-L341) · [Before (L2012-L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L2012-L2013)

```diff
-           case 4:
-             this.updateEffect("#define POSITIVEZ");
+           case 116:
+             lp = !0, Xp = 128;
```

#### 36. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L2015-L2016` → after: `L343-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L343-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L343-L413) · [Before (L2015-L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L2015-L2016)

```diff
-           case 5:
-             this.updateEffect("#define NEGATIVEZ")
+           case Wp: {
+             kp += 20;
+             let pp = !1;
+             switch (Op.dxgiFormat) {
+               case 10:
+                 lp = !0, Xp = 64, pp = !0;
+                 break;
+               case 2:
+                 lp = !0, Xp = 128, pp = !0;
+                 break;
+               case 88:
+                 Op.isRGB = !0, Op.isFourCC = !1, Xp = 32, pp = !0
+             }
+             if (pp) break
+           }
+           default:
+ ... (55 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L2020` → after: `L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/311.js#L429) · [Before (L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/311.js#L2020)

```diff
-     rD.FragmentUrl = "passCube"
+     yp.StoreLODInAlphaChannel = !1
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/312.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/312.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986)

#### 1. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/312.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/312.js#L2)

```diff
- export const ids = [312];
+ export const ids = [311, 312];
```

#### 2. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/312.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/312.js#L4)

```diff
-   41749: (DD, zD, wD) => {
+   42041: (pp, ip, cp) => {
```

#### 3. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/312.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/312.js#L6)

```diff
-       _HDRTextureLoader: () => RD
+       _DDSTextureLoader: () => Ip
```

#### 4. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L8` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/312.js#L8-L9) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/312.js#L8)

```diff
-     var pD = wD(37079);
+     var Op = cp(40190),
+       op = cp(42016);
```

#### 5. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L10-L32` → after: `L11-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L11-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/312.js#L11-L107) · [Before (L10-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/312.js#L10-L32)

```diff
-       static ConvertPanoramaToCubemap(DD, zD, wD, pD) {
-         let sD, KD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           rD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
-         if (!DD) throw "ConvertPanoramaToCubemap: input cannot be null";
-         if (DD.length != zD * wD * 3) {
-           if (DD.length != zD * wD * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
-           sD = 4
-         } else sD = 3;
-         return {
-           front: this.CreateCubemapTexture(pD, this.FACE_FRONT, DD, zD, wD, KD, rD, sD),
-           back: this.CreateCubemapTexture(pD, this.FACE_BACK, DD, zD, wD, KD, rD, sD),
-           left: this.CreateCubemapTexture(pD, this.FACE_LEFT, DD, zD, wD, KD, rD, sD),
-           right: this.CreateCubemapTexture(pD, this.FACE_RIGHT, DD, zD, wD, KD, rD, sD),
-           up: this.CreateCubemapTexture(pD, this.FACE_UP, DD, zD, wD, KD, rD, sD),
-           down: this.CreateCubemapTexture(pD, this.FACE_DOWN, DD, zD, wD, KD, rD, sD),
-           size: pD,
- ... (7 more removed lines; see GitHub link above)
+       constructor() {
+         this.supportCascades = !0
+       }
+       loadCubeData(pp, ip, cp, Ip) {
+         const Sp = ip.gy();
+         let xp, Lp = !1,
+           Yp = 1e3;
+         if (Array.isArray(pp))
+           for (let Op = 0; Op < pp.length; Op++) {
+             const cp = pp[Op];
+             xp = op.DDSTools.GetDDSInfo(cp), ip.width = xp.width, ip.height = xp.height, Lp = (xp.isRGB || xp.isLuminance || xp.mipmapCount > 1) && ip.generateMipMaps, Sp._unpackFlipY(xp.isCompressed), op.DDSTools.UploadDDSLevels(Sp, ip, cp, xp, Lp, 6, -1, Op), xp.isFourCC || 1 ! … [truncated]
+           } else {
+             const Ip = pp;
+             xp = op.DDSTools.GetDDSInfo(Ip), ip.width = xp.width, ip.height = xp.height, cp && (xp.sphericalPolynomial = new Op.e), Lp = (xp.isRGB || xp.isLuminance || xp.mipmapCount > 1) && ip.generateMipMaps, Sp._unpackFlipY(xp.isCompressed), op.DDSTools.UploadDDSLevels(Sp, ip, … [truncated]
+           }
+         Sp._setCubeMapTextureParams(ip, Lp, Yp), ip.isReady = !0, ip.onLoadedObservable.notifyObservers(ip), ip.onLoadedObservable.clear(), Ip && Ip({
+ ... (81 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L34-L73` → after: `L109-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L109-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/312.js#L109-L181) · [Before (L34-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/312.js#L34-L73)

```diff
-           RD = KD ? Math.max(1, Math.round(pD / 4 / DD)) : 1,
-           AD = 1 / RD,
-           UD = AD * AD,
-           fD = zD[1].subtract(zD[0]).scale(AD / DD),
-           ID = zD[3].subtract(zD[2]).scale(AD / DD),
-           BD = 1 / DD;
-         let GD = 0;
-         for (let hD = 0; hD < DD; hD++)
-           for (let KD = 0; KD < RD; KD++) {
-             let KD = zD[0],
-               cD = zD[2];
-             for (let zD = 0; zD < DD; zD++)
-               for (let AD = 0; AD < RD; AD++) {
-                 const RD = cD.subtract(KD).scale(GD).add(KD);
-                 RD.normalize();
-                 const AD = this.CalcProjectionSpherical(RD, wD, pD, sD, LD, rD);
- ... (24 more removed lines; see GitHub link above)
+           xp = ip / cp,
+           Lp = 1 / (xp * xp);
+         for (let Dp = 0; Dp < cp; Dp++) {
+           const pp = Math.floor(Dp * xp),
+             Ip = Math.floor((Dp + 1) * xp);
+           for (let Yp = 0; Yp < cp; Yp++) {
+             const Ap = Math.floor(Yp * xp),
+               Pp = Math.floor((Yp + 1) * xp),
+               Wp = (Dp * cp + Yp) * Op;
+             for (let cp = 0; cp < Op; cp++) {
+               let xp = 0;
+               for (let Sp = pp; Sp < Ip; Sp++)
+                 for (let pp = Ap; pp < Pp; pp++) xp += op[(Sp * ip + pp) * Op + cp];
+               Sp[Wp + cp] = xp * Lp
+             }
+           }
+ ... (57 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L76-L87` → after: `L184-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L184-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/312.js#L184-L195) · [Before (L76-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/312.js#L76-L87)

```diff
- 
-     function KD(DD, zD, wD, pD, sD, KD) {
-       sD > 0 ? (sD = function(DD, zD) {
-         return zD > 1023 ? DD * Math.pow(2, 1023) * Math.pow(2, zD - 1023) : zD < -1074 ? DD * Math.pow(2, -1074) * Math.pow(2, zD + 1074) : DD * Math.pow(2, zD)
-       }(1, sD - 136), DD[KD + 0] = zD * sD, DD[KD + 1] = wD * sD, DD[KD + 2] = pD * sD) : (DD[KD + 0] = 0, DD[KD + 1] = 0, DD[KD + 2] = 0)
-     }
- 
-     function rD(DD, zD) {
-       let wD, pD = "";
-       for (let sD = zD; sD < DD.length - zD && (wD = String.fromCharCode(DD[sD]), "\n" != wD); sD++) pD += wD;
-       return pD
-     }
+     Yp._FileFaces = [new Lp("right", new Op.o(1, 0, 0), new Op.o(0, 0, -1), new Op.o(0, -1, 0)), new Lp("left", new Op.o(-1, 0, 0), new Op.o(0, 0, 1), new Op.o(0, -1, 0)), new Lp("up", new Op.o(0, 1, 0), new Op.o(1, 0, 0), new Op.o(0, 0, 1)), new Lp("down", new Op.o(0, -1, 0), ne … [truncated]
+   },
+   42016: (pp, ip, cp) => {
+     cp.d(ip, {
+       DDSTools: () => yp
+     });
+     var Op = cp(37356),
+       op = cp(38905),
+       Ip = cp(42025),
+       Sp = cp(40276);
+     const xp = 131072,
+       Lp = 131072;
```

#### 8. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L90-L109` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/312.js#L198) · [Before (L90-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/312.js#L90-L109)

```diff
-       let zD = rD(DD, 0);
-       if ("#" != zD[0] || "?" != zD[1]) throw "Bad HDR Format.";
-       let wD = !1,
-         pD = !1,
-         sD = 0;
-       do {
-         sD += zD.length + 1, zD = rD(DD, sD), "FORMAT=32-bit_rle_rgbe" == zD ? pD = !0 : 0 == zD.length && (wD = !0)
-       } while (!wD);
-       if (!pD) throw "HDR Bad header format, unsupported FORMAT";
-       sD += zD.length + 1, zD = rD(DD, sD);
-       const KD = /^-Y (.*) \+X (.*)$/g.exec(zD);
-       if (!KD || KD.length < 3) throw "HDR Bad header format, no size";
-       const LD = parseInt(KD[2]),
-         cD = parseInt(KD[1]);
-       if (LD < 8 || LD > 32767) throw "HDR Bad header format, unsupported size";
-       return sD += zD.length + 1, {
- ... (4 more removed lines; see GitHub link above)
+       return pp.charCodeAt(0) + (pp.charCodeAt(1) << 8) + (pp.charCodeAt(2) << 16) + (pp.charCodeAt(3) << 24)
```

#### 9. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L111-L137` → after: `L200-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L200-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/312.js#L200-L466) · [Before (L111-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/312.js#L111-L137)

```diff
- 
-     function cD(DD, zD) {
-       return function(DD, zD) {
-         let wD = zD.height;
-         const pD = zD.width;
-         let sD, rD, LD, cD, RD, AD, UD, fD, ID = zD.dataPosition;
-         const BD = new ArrayBuffer(4 * pD),
-           GD = new Uint8Array(BD),
-           hD = new ArrayBuffer(zD.width * zD.height * 4 * 3),
-           nD = new Float32Array(hD);
-         for (; wD > 0;) {
-           if (sD = DD[ID++], rD = DD[ID++], LD = DD[ID++], cD = DD[ID++], 2 != sD || 2 != rD || 128 & LD || zD.width < 8 || zD.width > 32767) return gD(DD, zD);
-           if ((LD << 8 | cD) != pD) throw "HDR Bad header format, wrong scan line width";
-           for (AD = 0, fD = 0; fD < 4; fD++)
-             for (UD = (fD + 1) * pD; AD < UD;)
-               if (sD = DD[ID++], rD = DD[ID++], sD > 128) {
- ... (11 more removed lines; see GitHub link above)
+     const Dp = Yp("DXT1"),
+       Ap = Yp("DXT3"),
+       Pp = Yp("DXT5"),
+       Wp = Yp("DX10");
+     class yp {
+       static GetDDSInfo(pp) {
+         const ip = new Int32Array(pp.buffer, pp.byteOffset, 31),
+           cp = new Int32Array(pp.buffer, pp.byteOffset, 35);
+         let Op = 1;
+         ip[2] & xp && (Op = Math.max(1, ip[7]));
+         const op = ip[21],
+           Ip = op === Wp ? cp[32] : 0;
+         let Sp = 0;
+         switch (op) {
+           case 113:
+             Sp = 2;
+ ... (251 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L139-L172` → after: `L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/312.js#L468) · [Before (L139-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/312.js#L139-L172)

```diff
- 
-     function gD(DD, zD) {
-       let wD = zD.height;
-       const pD = zD.width;
-       let sD, rD, LD, cD, gD, RD = zD.dataPosition;
-       const AD = new ArrayBuffer(zD.width * zD.height * 4 * 3),
-         UD = new Float32Array(AD);
-       for (; wD > 0;) {
-         for (gD = 0; gD < zD.width; gD++) sD = DD[RD++], rD = DD[RD++], LD = DD[RD++], cD = DD[RD++], KD(UD, sD, rD, LD, cD, (zD.height - wD) * pD * 3 + 3 * gD);
-         wD--
-       }
-       return UD
-     }
-     sD.FACE_LEFT = [new pD.s(-1, -1, -1), new pD.s(1, -1, -1), new pD.s(-1, 1, -1), new pD.s(1, 1, -1)], sD.FACE_RIGHT = [new pD.s(1, -1, 1), new pD.s(-1, -1, 1), new pD.s(1, 1, 1), new pD.s(-1, 1, 1)], sD.FACE_FRONT = [new pD.s(1, -1, -1), new pD.s(1, -1, 1), new pD.s(1, 1, -1), … [truncated]
-     class RD {
-       constructor() {
- ... (18 more removed lines; see GitHub link above)
+     yp.StoreLODInAlphaChannel = !1
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/313.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/313.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333)

#### 1. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/313.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/313.js#L4)

```diff
-   41758: (DD, zD, wD) => {
+   42054: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/313.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/313.js#L6)

```diff
-       _KTXTextureLoader: () => ID
+       _ENVTextureLoader: () => Rp
```

#### 3. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L8-L51` → after: `L8-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L8-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/313.js#L8-L38) · [Before (L8-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/313.js#L8-L51)

```diff
-     var pD = wD(38662);
-     class sD {
-       constructor(DD, zD) {
-         if (this.data = DD, this.isInvalid = !1, !sD.IsValid(DD)) return this.isInvalid = !0, void pD.d.Error("texture missing KTX identifier");
-         const wD = Uint32Array.BYTES_PER_ELEMENT,
-           KD = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * wD),
-           rD = 67305985 === KD.getUint32(0, !0);
-         return this.glType = KD.getUint32(1 * wD, rD), this.glTypeSize = KD.getUint32(2 * wD, rD), this.glFormat = KD.getUint32(3 * wD, rD), this.glInternalFormat = KD.getUint32(4 * wD, rD), this.glBaseInternalFormat = KD.getUint32(5 * wD, rD), this.pixelWidth = KD.getUint32(6 *  … [truncated]
-       }
-       uploadLevels(DD, zD) {
-         switch (this.loadType) {
-           case sD.COMPRESSED_2D:
-             this._upload2DCompressedLevels(DD, zD);
-           case sD.TEX_2D:
-           case sD.COMPRESSED_3D:
-           case sD.TEX_3D:
- ... (28 more removed lines; see GitHub link above)
+     var Op = cp(40143),
+       op = cp(37320),
+       Ip = cp(37356),
+       Sp = cp(40190),
+       xp = cp(40033),
+       Lp = cp(40195),
+       Yp = (cp(40296), cp(42060)),
+       Dp = cp(38905),
+       Ap = (cp(42071), cp(42102), cp(40273));
+     const Pp = "image/png",
+       Wp = [134, 22, 135, 150, 246, 214, 150, 54];
+ 
+     function yp(pp) {
+       const ip = new DataView(pp.buffer, pp.byteOffset, pp.byteLength);
+       let cp = 0;
+       for (let Sp = 0; Sp < Wp.length; Sp++)
+ ... (15 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L54-L193` → after: `L41-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L41-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/313.js#L41-L94) · [Before (L54-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/313.js#L54-L193)

```diff
-       const wD = zD?.jsDecoderModule || KTX2DECODER;
-       DD && (DD.wasmBaseUrl && (wD.Transcoder.WasmBaseUrl = DD.wasmBaseUrl), DD.wasmUASTCToASTC && (wD.LiteTranscoder_UASTC_ASTC.WasmModuleURL = DD.wasmUASTCToASTC), DD.wasmUASTCToBC7 && (wD.LiteTranscoder_UASTC_BC7.WasmModuleURL = DD.wasmUASTCToBC7), DD.wasmUASTCToRGBA_UNORM &&  … [truncated]
-     }
- 
-     function AD(DD) {
-       let zD;
-       "undefined" === typeof DD && "undefined" !== typeof KTX2DECODER && (DD = KTX2DECODER), onmessage = wD => {
-         if (wD.data) switch (wD.data.action) {
-           case "init": {
-             const pD = wD.data.urls;
-             pD && (pD.jsDecoderModule && "undefined" === typeof DD && (importScripts(pD.jsDecoderModule), DD = KTX2DECODER), RD(pD)), wD.data.wasmBinaries && RD(void 0, {
-               ...wD.data.wasmBinaries,
-               jsDecoderModule: DD
-             }), zD = new DD.KTX2Decoder, postMessage({
-               action: "init"
-             });
- ... (124 more removed lines; see GitHub link above)
+       const cp = (ip = Up(ip)).specular;
+       let Op = Math.log2(ip.width);
+       if (Op = Math.round(Op) + 1, cp.mipmaps.length !== 6 * Op) throw new Error(`Unsupported specular mipmaps number "${cp.mipmaps.length}"`);
+       const op = new Array(Op);
+       for (let Ip = 0; Ip < Op; Ip++) {
+         op[Ip] = new Array(6);
+         for (let Op = 0; Op < 6; Op++) {
+           const Sp = cp.mipmaps[6 * Ip + Op];
+           op[Ip][Op] = new Uint8Array(pp.buffer, pp.byteOffset + ip.binaryDataPosition + Sp.position, Sp.length)
+         }
+       }
+       return op
+     }
+ 
+     function vp(pp, ip) {
+       ip = Up(ip);
+ ... (38 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L196-L205` → after: `L97-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L97-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/313.js#L97-L187) · [Before (L196-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/313.js#L196-L205)

```diff
-         }
-         if (UD._DecoderModulePromise) {
-           const pD = await UD._DecoderModulePromise;
-           return UD.DefaultDecoderOptions.isDirty && (UD._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = UD.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((sD, KD) => {
-             pD.decode(DD, wD, zD).then((DD => {
-               sD(DD)
-             })).catch((DD => {
-               KD({
-                 message: DD
-               })
+         } else {
+           if (ip._uploadImageToTexture(Dp, pp, Ip, Sp), xp) {
+             const cp = Lp[Sp];
+             cp && ip._uploadImageToTexture(cp._texture, pp, Ip, 0)
+           }
+           Ap()
+         }
+       }))
+     }
+     async function dp(pp, ip) {
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Pp;
+       const Op = pp.gy();
+       pp.format = 5, pp.type = 0, pp.generateMipMaps = !0, pp._cachedAnisotropicFilteringLevel = null, Op.updateTextureSamplingMode(3, pp), await jp(pp, ip, !0, cp), pp.isReady = !0
+     }
+     async function ep(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Pp,
+ ... (75 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L207-L217` → after: `L189-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L189-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/313.js#L189-L198) · [Before (L207-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/313.js#L207-L217)

```diff
-           }))
-         }
-         throw new Error("KTX2 decoder module is not available")
-       }
-       _createTexture(DD, zD, wD) {
-         if ((DD.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
-         this._engine._bindTextureDirectly(3553, zD), wD && (wD.transcodedFormat = DD.transcodedFormat, wD.isInGammaSpace = DD.isInGammaSpace, wD.hasAlpha = DD.hasAlpha, wD.transcoderName = DD.transcoderName);
-         let pD = !0;
-         switch (DD.transcodedFormat) {
-           case 32856:
-             zD.type = 0, zD.format = 5;
+           }
+           jp.push(Yp)
+         }
+       if (await Promise.all(jp), ip.length < Dp) {
+         let cp;
+         const Op = Math.pow(2, Dp - 1 - ip.length),
+           op = Op * Op * 4;
+         switch (pp.type) {
+           case 0:
+             cp = new Uint8Array(op);
```

#### 7. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L219-L220` → after: `L200-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/313.js#L200-L201) · [Before (L219-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/313.js#L219-L220)

```diff
-           case 33321:
-             zD.type = 0, zD.format = 6;
+           case 2:
+             cp = new Uint16Array(op);
```

#### 8. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L222-L361` → after: `L203-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L203-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/313.js#L203-L222) · [Before (L222-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/313.js#L222-L361)

```diff
-           case 33323:
-             zD.type = 0, zD.format = 7;
-             break;
-           default:
-             zD.format = DD.transcodedFormat, pD = !1
-         }
-         if (zD._gammaSpace = DD.isInGammaSpace, zD.generateMipMaps = DD.mipmaps.length > 1, zD.width = DD.mipmaps[0].width, zD.height = DD.mipmaps[0].height, DD.errors) throw new Error("KTX2 container - could not transcode the data. " + DD.errors);
-         for (let sD = 0; sD < DD.mipmaps.length; ++sD) {
-           const wD = DD.mipmaps[sD];
-           if (!wD || !wD.data) throw new Error("KTX2 container - could not transcode one of the image");
-           pD ? (zD.width = wD.width, zD.height = wD.height, this._engine._uploadDataToTextureDirectly(zD, wD.data, 0, sD, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(zD, DD.transcodedFormat, wD.width, wD.height, wD.data, 0, sD)
-         }
-         zD._extension = ".ktx2", zD.isReady = !0, this._engine._bindTextureDirectly(3553, null)
-       }
-       static IsValid(DD) {
-         if (DD.byteLength >= 12) {
- ... (124 more removed lines; see GitHub link above)
+           case 1:
+             cp = new Float32Array(op)
+         }
+         for (let Ip = ip.length; Ip < Dp; Ip++)
+           for (let ip = 0; ip < 6; ip++) Wp._uploadArrayBufferViewToTexture(vp?.texture || pp, cp, ip, Ip)
+       }
+       if (vp) {
+         const ip = pp._irradianceTexture;
+         pp._irradianceTexture = null, Wp._releaseTexture(pp), vp._swapAndDie(pp), pp._irradianceTexture = ip
+       }
+       wp && wp.dispose(), Up && (pp._lodTextureHigh && pp._lodTextureHigh._texture && (pp._lodTextureHigh._texture.isReady = !0), pp._lodTextureMid && pp._lodTextureMid._texture && (pp._lodTextureMid._texture.isReady = !0), pp._lodTextureLow && pp._lodTextureLow._texture && (pp._ … [truncated]
+     }
+ 
+     function kp(pp, ip) {
+       const cp = (ip = Up(ip)).irradiance;
+       if (!cp) return;
+ ... (4 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L366` → after: `L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/313.js#L227) · [Before (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/313.js#L366)

```diff
-       loadCubeData(DD, zD, wD, pD) {
+       loadCubeData(pp, ip, cp, Op, op) {
```

#### 10. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L368-L390` → after: `L229-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L229-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/313.js#L229-L244) · [Before (L368-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/313.js#L368-L390)

```diff
-         zD._invertVScale = !zD.invertY;
-         const KD = zD.iI(),
-           rD = new sD(DD, 6),
-           LD = fD(rD.glInternalFormat);
-         null !== LD ? (zD.format = LD, zD._useSRGBBuffer = KD._getUseSRGBBuffer(!0, !zD.generateMipMaps), zD._gammaSpace = !0) : zD.format = rD.glInternalFormat;
-         const cD = rD.numberOfMipmapLevels > 1 && zD.generateMipMaps;
-         KD._unpackFlipY(!0), rD.uploadLevels(zD, zD.generateMipMaps), zD.width = rD.pixelWidth, zD.height = rD.pixelHeight, KD._setCubeMapTextureParams(zD, cD, rD.numberOfMipmapLevels - 1), zD.isReady = !0, zD.onLoadedObservable.notifyObservers(zD), zD.onLoadedObservable.clear(), … [truncated]
-       }
-       loadData(DD, zD, wD, KD) {
-         if (sD.IsValid(DD)) {
-           zD._invertVScale = !zD.invertY;
-           const pD = new sD(DD, 1),
-             KD = fD(pD.glInternalFormat);
-           null !== KD ? (zD.format = KD, zD._useSRGBBuffer = zD.iI()._getUseSRGBBuffer(!0, !zD.generateMipMaps), zD._gammaSpace = !0) : zD.format = pD.glInternalFormat, wD(pD.pixelWidth, pD.pixelHeight, zD.generateMipMaps, !0, (() => {
-             pD.uploadLevels(zD, zD.generateMipMaps)
-           }), pD.isInvalid)
- ... (7 more removed lines; see GitHub link above)
+         const Ip = yp(pp);
+         if (Ip) {
+           ip.width = Ip.width, ip.height = Ip.width;
+           try {
+             (0, mp.d)(), kp(ip, Ip), tp(ip, pp, Ip).then((() => {
+               ip.isReady = !0, ip.onLoadedObservable.notifyObservers(ip), ip.onLoadedObservable.clear(), Op && Op()
+             }), (pp => {
+               op?.("Can not upload environment levels", pp)
+             }))
+           } catch (Sp) {
+             op?.("Can not upload environment file", Sp)
+           }
+         } else op && op("Can not parse the environment file", null)
+       }
+       loadData() {
+         throw ".env not supported in 2d."
```

#### 11. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L394` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/313.js#L248) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/313.js#L394)

```diff
-   41766: (DD, zD, wD) => {
+   42109: (pp, ip, cp) => {
```

#### 12. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L399-L423` → after: `L287-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L287-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/313.js#L287-L332) · [Before (L399-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/313.js#L399-L423)

```diff
-       constructor(DD) {
-         this._pendingActions = new Array, this._workerInfos = DD.map((DD => ({
-           workerPromise: Promise.resolve(DD),
-           idle: !0
-         })))
-       }
-       dispose() {
-         for (const DD of this._workerInfos) DD.workerPromise.then((DD => {
-           DD.terminate()
-         }));
-         this._workerInfos.length = 0, this._pendingActions.length = 0
-       }
-       push(DD) {
-         this._executeOnIdleWorker(DD) || this._pendingActions.push(DD)
-       }
-       _executeOnIdleWorker(DD) {
- ... (9 more removed lines; see GitHub link above)
+       constructor(pp, ip, cp, Op) {
+         this.name = pp, this.worldAxisForNormal = ip, this.worldAxisForFileX = cp, this.worldAxisForFileY = Op
+       }
+     }
+     class Yp {
+       static _NearestPow2Floor(pp) {
+         return pp <= 1 ? 1 : 1 << Math.floor(Math.log2(pp))
+       }
+       static ConvertCubeMapTextureToSphericalPolynomial(pp) {
+         if (!pp.isCube) return null;
+         pp.Gl()?.gy().flushFramebuffer();
+         const ip = pp.getSize().width,
+           cp = pp._sphericalPolynomialTargetSize,
+           Op = cp > 0 ? this._NearestPow2Floor(cp) : 0,
+           op = !pp.noMipmap && !0 === pp._texture?.generateMipMaps,
+           Ip = Op > 0 && Op < ip && op,
+ ... (30 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L427-L451` → after: `L336-L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L336-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/313.js#L336-L454) · [Before (L427-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/313.js#L427-L451)

```diff
-     }
-     class sD extends pD {
-       constructor(DD, zD) {
-         let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : sD.DefaultOptions;
-         super([]), this._maxWorkers = DD, this._createWorkerAsync = zD, this._options = wD
-       }
-       push(DD) {
-         if (!this._executeOnIdleWorker(DD))
-           if (this._workerInfos.length < this._maxWorkers) {
-             const zD = {
-               workerPromise: this._createWorkerAsync(),
-               idle: !1
-             };
-             this._workerInfos.push(zD), this._execute(zD, DD)
-           } else this._pendingActions.push(DD)
-       }
- ... (9 more removed lines; see GitHub link above)
+       static _AreaElement(pp, ip) {
+         return Math.atan2(pp * ip, Math.sqrt(pp * pp + ip * ip + 1))
+       }
+       static _DownsampleFace(pp, ip, cp, Op) {
+         const op = pp instanceof Float32Array ? pp : Float32Array.from(pp),
+           Ip = cp * cp * Op,
+           Sp = new Float32Array(Ip),
+           xp = ip / cp,
+           Lp = 1 / (xp * xp);
+         for (let Dp = 0; Dp < cp; Dp++) {
+           const pp = Math.floor(Dp * xp),
+             Ip = Math.floor((Dp + 1) * xp);
+           for (let Yp = 0; Yp < cp; Yp++) {
+             const Ap = Math.floor(Yp * xp),
+               Pp = Math.floor((Yp + 1) * xp),
+               Wp = (Dp * cp + Yp) * Op;
+ ... (103 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L453-L457` → after: `L456-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L456-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/313.js#L456-L462) · [Before (L453-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/313.js#L453-L457)

```diff
-         }))
-       }
-     }
-     sD.DefaultOptions = {
-       idleTimeElapsedBeforeRelease: 1e3
+         };
+         xp && (Sp ? Lp() : pp.onLoadObservable.addOnce(Lp))
+       }
+       static async EncodeTextureToRGBD(pp, ip) {
+         let Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         return ip.gy().isWebGPU ? await cp.e(348).then((() => cp(61509))) : await cp.e(330).then((() => cp(61507))), await (0, op.c)("rgbdEncode", pp, ip, Op, 1, 5)
+       }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/314.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/314.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65)

#### 1. `bundles/bloxd.io/chunks/js/314.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/314.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/314.js#L4)

```diff
-   41770: (DD, zD, wD) => {
+   42034: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/314.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/314.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/314.js#L6)

```diff
-       _TGATextureLoader: () => LD
+       _IESTextureLoader: () => xp
```

#### 3. `bundles/bloxd.io/chunks/js/314.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/314.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/314.js#L8)

```diff
-     var pD = wD(38662);
+     var Op = cp(37356);
```

#### 4. `bundles/bloxd.io/chunks/js/314.js` (Changed code · before: `L11-L23` → after: `L11-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65) · [After (L11-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/314.js#L11-L17) · [Before (L11-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/314.js#L11-L23)

```diff
-       let zD = 0;
-       return {
-         id_length: DD[zD++],
-         colormap_type: DD[zD++],
-         image_type: DD[zD++],
-         colormap_index: DD[zD++] | DD[zD++] << 8,
-         colormap_length: DD[zD++] | DD[zD++] << 8,
-         colormap_size: DD[zD++],
-         origin: [DD[zD++] | DD[zD++] << 8, DD[zD++] | DD[zD++] << 8],
-         width: DD[zD++] | DD[zD++] << 8,
-         height: DD[zD++] | DD[zD++] << 8,
-         pixel_size: DD[zD++],
-         flags: DD[17]
+       return pp.split(" ").filter((pp => "" !== pp)).map((pp => parseFloat(pp)))
+     }
+ 
+     function Ip(pp, ip, cp) {
+       for (; cp.length !== ip;) {
+         const ip = op(pp.lines[pp.index++]);
+         cp.push(...ip)
```

#### 5. `bundles/bloxd.io/chunks/js/314.js` (Changed code · before: `L27-L85` → after: `L21-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65) · [After (L21-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/314.js#L21-L44) · [Before (L27-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/314.js#L27-L85)

```diff
-     function KD(DD, zD) {
-       if (zD.length < 19) return void pD.d.Error("Unable to load TGA file - Not enough data to contain header");
-       let wD = 18;
-       const KD = sD(zD);
-       if (KD.id_length + wD > zD.length) return void pD.d.Error("Unable to load TGA file - Not enough data");
-       wD += KD.id_length;
-       let LD, cD = !1,
-         gD = !1,
-         RD = !1;
-       switch (KD.image_type) {
-         case 9:
-           cD = !0;
-         case 1:
-           gD = !0;
-           break;
-         case 10:
- ... (43 more removed lines; see GitHub link above)
+     function Sp(pp, ip, cp) {
+       let op = 0,
+         Ip = 0,
+         Sp = 0,
+         xp = 0,
+         Lp = 0,
+         Yp = 0;
+       for (let Op = 0; Op < pp.numberOfHorizontalAngles - 1; Op++)
+         if (cp < pp.horizontalAngles[Op + 1] || Op === pp.numberOfHorizontalAngles - 2) {
+           Ip = Op, Sp = pp.horizontalAngles[Op], xp = pp.horizontalAngles[Op + 1];
+           break
+         } for (let Op = 0; Op < pp.numberOfVerticalAngles - 1; Op++)
+         if (ip < pp.verticalAngles[Op + 1] || Op === pp.numberOfVerticalAngles - 2) {
+           op = Op, Lp = pp.verticalAngles[Op], Yp = pp.verticalAngles[Op + 1];
+           break
+         } const Dp = xp - Sp,
+ ... (8 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/314.js` (Changed code · before: `L163` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/314.js#L51) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/314.js#L163)

```diff
-         throw ".env not supported in Cube."
+         throw ".ies not supported in Cube."
```

#### 7. `bundles/bloxd.io/chunks/js/314.js` (Changed code · before: `L166-L169` → after: `L54-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65) · [After (L54-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/314.js#L54-L98) · [Before (L166-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/314.js#L166-L169)

```diff
-         const pD = new Uint8Array(DD.buffer, DD.byteOffset, DD.byteLength),
-           rD = sD(pD);
-         wD(rD.width, rD.height, zD.generateMipMaps, !1, (() => {
-           KD(zD, pD)
+         const Op = function(pp) {
+           const ip = {
+               lines: new TextDecoder("utf-8").decode(pp).split("\n"),
+               index: 0
+             },
+             cp = {
+               version: ip.lines[0],
+               candelaValues: [],
+               horizontalAngles: [],
+               verticalAngles: [],
+               numberOfHorizontalAngles: 0,
+               numberOfVerticalAngles: 0
+             };
+           for (ip.index = 1; ip.lines.length > 0 && !ip.lines[ip.index].includes("TILT=");) ip.index++;
+           ip.lines[ip.index].includes("INCLUDE"), ip.index++;
+           const Op = op(ip.lines[ip.index++]);
+ ... (29 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/315.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/315.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b)

#### 1. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/315.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/315.js#L4)

```diff
-   41777: (DD, zD, wD) => {
+   42046: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/315.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/315.js#L6-L7)

```diff
-       ReadExrDataAsync: () => Az,
-       _ExrTextureLoader: () => Rz
+       _BasisTextureLoader: () => tp
```

#### 3. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L9-L26` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/315.js#L8-L11) · [Before (L9-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/315.js#L9-L26)

```diff
-     var pD = wD(38662),
-       sD = wD(37125),
-       KD = wD(39990);
-     const rD = 4,
-       LD = 4,
-       cD = 1,
-       gD = 2,
-       RD = 8,
-       AD = 65536,
-       UD = AD >> 3,
-       fD = 14,
-       ID = 65537,
-       BD = 1 << fD,
-       GD = BD - 1,
-       hD = 59,
-       nD = 63,
- ... (2 more removed lines; see GitHub link above)
+     var Op, op = cp(40304),
+       Ip = cp(38905),
+       Sp = cp(40654),
+       xp = cp(40033);
```

#### 4. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L28-L34` → after: `L13-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L13-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/315.js#L13-L23) · [Before (L28-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/315.js#L28-L34)

```diff
-     function ED(DD, zD) {
-       const wD = new Uint8Array(DD);
-       let pD = 0;
-       for (; 0 != wD[zD.value + pD];) pD += 1;
-       const sD = (new TextDecoder).decode(wD.slice(zD.value, zD.value + pD));
-       return zD.value = zD.value + pD + 1, sD
-     }
+     function Lp() {
+       const pp = 0,
+         ip = 1,
+         cp = 2,
+         Op = 3,
+         op = 6,
+         Ip = 8,
+         Sp = 9,
+         xp = 10,
+         Lp = 14;
+       let Yp = null;
```

#### 5. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L36-L202` → after: `L25-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L25-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/315.js#L25-L28) · [Before (L36-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/315.js#L36-L202)

```diff
-     function QD(DD, zD) {
-       const wD = DD.getInt32(zD.value, !0);
-       return zD.value += rD, wD
-     }
- 
-     function XD(DD, zD) {
-       const wD = DD.getUint32(zD.value, !0);
-       return zD.value += rD, wD
-     }
- 
-     function VD(DD, zD) {
-       const wD = DD.getUint8(zD.value);
-       return zD.value += cD, wD
-     }
- 
-     function PD(DD, zD) {
- ... (151 more removed lines; see GitHub link above)
+       function Dp(pp, ip, cp, Op, op) {
+         const Ip = pp.getImageTranscodedSizeInBytes(ip, cp, Op);
+         let Sp = new Uint8Array(Ip);
+         if (!pp.transcodeImage(Sp, ip, cp, Op, 1, 0)) return null;
```

#### 6. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L204-L332` → after: `L30-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L30-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/315.js#L30-L117) · [Before (L204-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/315.js#L204-L332)

```diff
-           const sD = ED(DD.buffer, zD),
-             KD = dD(DD, zD, sD, XD(DD, zD));
-           void 0 === KD ? pD.d.Warn(`Unknown header attribute type ${sD}'.`) : rD[wD] = KD
-         } else LD = !1
-       }
-       if (0 != (-5 & sD)) throw new Error("Unsupported file format");
-       return {
-         version: wD,
-         spec: KD,
-         ...rD
-       }
-     }
-     const ND = 32768,
-       ZD = 65535;
- 
-     function yD(DD, zD, wD, pD, sD) {
- ... (113 more removed lines; see GitHub link above)
+           Sp = function(pp, ip, cp, Op) {
+             const op = new Uint16Array(4),
+               Ip = new Uint16Array(cp * Op),
+               Sp = cp / 4,
+               xp = Op / 4;
+             for (let Lp = 0; Lp < xp; Lp++)
+               for (let Op = 0; Op < Sp; Op++) {
+                 const xp = ip + 8 * (Lp * Sp + Op);
+                 op[0] = pp[xp] | pp[xp + 1] << 8, op[1] = pp[xp + 2] | pp[xp + 3] << 8, op[2] = (2 * (31 & op[0]) + 1 * (31 & op[1])) / 3 | (2 * (2016 & op[0]) + 1 * (2016 & op[1])) / 3 & 2016 | (2 * (63488 & op[0]) + 1 * (63488 & op[1])) / 3 & 63488, op[3] = (2 * (31 & op[1]) +  … [truncated]
+                 for (let ip = 0; ip < 4; ip++) {
+                   const Sp = pp[xp + 4 + ip];
+                   let Yp = (4 * Lp + ip) * cp + 4 * Op;
+                   Ip[Yp++] = op[3 & Sp], Ip[Yp++] = op[Sp >> 2 & 3], Ip[Yp++] = op[Sp >> 4 & 3], Ip[Yp] = op[Sp >> 6 & 3]
+                 }
+               }
+             return Ip
+ ... (72 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L335-L364` → after: `L120-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L120-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/315.js#L120-L196) · [Before (L335-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/315.js#L335-L364)

```diff
-         }
-       }(RD, LD, cD, AD),
-       function(DD, zD, wD, pD, sD, KD, rD, LD, cD) {
-         let gD = 0,
-           RD = 0;
-         const AD = rD,
-           UD = Math.trunc(pD.value + (sD + 7) / 8);
-         for (; pD.value < UD;) {
-           let sD = kD(gD, RD, wD, pD);
-           for (gD = sD.c, RD = sD.lc; RD >= fD;) {
-             const rD = zD[gD >> RD - fD & GD];
-             if (rD.len) {
-               RD -= rD.len;
-               const DD = mD(rD.lit, KD, gD, RD, wD, pD, LD, cD, AD);
-               DD && (gD = DD.c, RD = DD.lc)
-             } else {
- ... (14 more removed lines; see GitHub link above)
+           Wp.close(), Wp.delete(), wp && (Up = -1), vp ? postMessage({
+             action: "transcode",
+             success: vp,
+             id: Ap.data.id,
+             fileInfo: yp,
+             format: Up
+           }, tp) : postMessage({
+             action: "transcode",
+             success: vp,
+             id: Ap.data.id
+           })
+         }
+       }
+     }! function(pp) {
+       pp[pp.cTFETC1 = 0] = "cTFETC1", pp[pp.cTFETC2 = 1] = "cTFETC2", pp[pp.cTFBC1 = 2] = "cTFBC1", pp[pp.cTFBC3 = 3] = "cTFBC3", pp[pp.cTFBC4 = 4] = "cTFBC4", pp[pp.cTFBC5 = 5] = "cTFBC5", pp[pp.cTFBC7 = 6] = "cTFBC7", pp[pp.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", pp[pp.cTFPVR … [truncated]
+     }(Op || (Op = {}));
+ ... (61 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L366-L663` → after: `L198-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L198-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/315.js#L198-L213) · [Before (L366-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/315.js#L366-L663)

```diff
-         }
-         const ID = 8 - sD & 7;
-         for (gD >>= ID, RD -= ID; RD > 0;) {
-           const DD = zD[gD << fD - RD & GD];
-           if (!DD.len) throw new Error("HufDecode issues");
-           {
-             RD -= DD.len;
-             const zD = mD(DD.lit, KD, gD, RD, wD, pD, LD, cD, AD);
-             zD && (gD = zD.c, RD = zD.lc)
-           }
-         }
-       }(RD, AD, DD, wD, gD, cD, KD, sD, {
-         value: 0
-       })
-     }
- 
- ... (282 more removed lines; see GitHub link above)
+         else {
+           pp.width = Lp.width, pp.height = Lp.height, pp.generateMipMaps = ip.fileInfo.images[op].levels.length > 1;
+           const Op = vp.GetInternalFormatFromBasisFormat(ip.format, cp);
+           pp.format = Op, Up(pp, cp);
+           const xp = ip.fileInfo.images[op].levels;
+           for (let ip = 0; ip < xp.length; ip++) {
+             const Ip = xp[ip];
+             cp._uploadCompressedDataToTextureDirectly(pp, Op, Ip.width, Ip.height, Ip.transcodedPixels, op, ip)
+           }!cp._features.basisNeedsPOT || Math.log2(pp.width) % 1 === 0 && Math.log2(pp.height) % 1 === 0 || (Ip.e.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with  … [truncated]
+         }
+       }
+     }, vp = {
+       JSModuleURL: Yp.JSModuleURL,
+       WasmModuleURL: Yp.WasmModuleURL,
+       GetInternalFormatFromBasisFormat: (pp, ip) => {
+         let cp;
```

#### 9. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L665-L720` → after: `L215-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L215-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/315.js#L215-L238) · [Before (L665-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/315.js#L665-L720)

```diff
-           case Kz.Float:
-             sD.getter = TD, sD.inputSize = LD;
-             break;
-           case Kz.HalfFloat:
-             sD.getter = jD, sD.inputSize = LD
-         }
-       }
-       sD.blockCount = sD.height / sD.scanlineBlockSize;
-       for (let LD = 0; LD < sD.blockCount; LD++) xD(zD, wD);
-       const cD = sD.width * sD.height * sD.outputChannels;
-       switch (pD) {
-         case Kz.Float:
-           sD.byteArray = new Float32Array(cD), sD.textureType = 1, rD && sD.byteArray.fill(1, 0, cD);
-           break;
-         case Kz.HalfFloat:
-           sD.byteArray = new Uint16Array(cD), sD.textureType = 2, rD && sD.byteArray.fill(15360, 0, cD);
- ... (40 more removed lines; see GitHub link above)
+           case Op.cTFETC1:
+             cp = 36196;
+             break;
+           case Op.cTFBC1:
+             cp = 33776;
+             break;
+           case Op.cTFBC4:
+             cp = 33779;
+             break;
+           case Op.cTFASTC_4x4:
+             cp = 37808;
+             break;
+           case Op.cTFETC2:
+             cp = 37496;
+             break;
+           case Op.cTFBC7:
+ ... (8 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L726` → after: `L244-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L244-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/315.js#L244-L261) · [Before (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/315.js#L726)

```diff
-         throw ".exr not supported in Cube."
+         if (Array.isArray(pp)) return;
+         const Sp = ip.gy().getCaps(),
+           xp = {
+             supportedCompressionFormats: {
+               etc1: !!Sp.etc1,
+               s3tc: !!Sp.s3tc,
+               pvrtc: !!Sp.pvrtc,
+               etc2: !!Sp.etc2,
+               astc: !!Sp.astc,
+               bc7: !!Sp.bptc
+             }
+           };
+         yp(pp, xp).then((pp => {
+           const cp = pp.fileInfo.images[0].levels.length > 1 && ip.generateMipMaps;
+           wp(ip, pp), ip.gy()._setCubeMapTextureParams(ip, cp), ip.isReady = !0, ip.onLoadedObservable.notifyObservers(ip), ip.onLoadedObservable.clear(), Op && Op()
+         })).catch((pp => {
+ ... (2 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L729` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/315.js#L264) · [Before (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/315.js#L729)

```diff
-         const sD = new DataView(DD.buffer),
+         const Op = ip.gy().getCaps(),
```

#### 12. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L731-L740` → after: `L266-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L266-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/315.js#L266-L279) · [Before (L731-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/315.js#L731-L740)

```diff
-             value: 0
-           },
-           rD = WD(sD, KD);
-         cz(rD, sD, KD, Lz.DefaultOutputType).then((DD => {
-           gz(DD, rD, sD, KD);
-           const pD = rD.dataWindow.xMax - rD.dataWindow.xMin + 1,
-             LD = rD.dataWindow.yMax - rD.dataWindow.yMin + 1;
-           wD(pD, LD, zD.generateMipMaps, !1, (() => {
-             const wD = zD.iI();
-             zD.format = rD.format, zD.type = DD.textureType, zD.invertY = !1, zD._gammaSpace = !rD.linearSpace, DD.byteArray && wD._uploadDataToTextureDirectly(zD, DD.byteArray, 0, 0, void 0, !0)
+             supportedCompressionFormats: {
+               etc1: !!Op.etc1,
+               s3tc: !!Op.s3tc,
+               pvrtc: !!Op.pvrtc,
+               etc2: !!Op.etc2,
+               astc: !!Op.astc,
+               bc7: !!Op.bptc
+             }
+           };
+         yp(pp, Ip).then((pp => {
+           const Op = pp.fileInfo.images[0].levels[0],
+             op = pp.fileInfo.images[0].levels.length > 1 && ip.generateMipMaps;
+           cp(Op.width, Op.height, op, -1 !== pp.format, (() => {
+             wp(ip, pp)
```

#### 13. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L743` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/315.js#L282) · [Before (L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/315.js#L743)

```diff
-           pD.d.Error("Failed to load EXR texture: ", DD)
+           op.i.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), op.i.Warn(`Failed to transcode Basis file: ${pp}`), cp(0, 0, !1, !1, (() => {}), !0)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/316.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/316.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064)

#### 1. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L4-L17` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/316.js#L4) · [Before (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/316.js#L4-L17)

```diff
-   41932: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "bumpVertex",
-       KD = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   41848: (DD, zD, wD) => {
+   42087: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L21-L27` → after: `L8-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L8-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/316.js#L8-L341) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/316.js#L21-L27)

```diff
-     var pD = wD(39776);
-     const sD = "bumpVertexDeclaration",
-       KD = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
+     var Op = cp(37349),
+       op = cp(37320),
+       Ip = cp(40654),
+       Sp = cp(40345),
+       xp = cp(40143),
+       Lp = cp(38905),
+       Yp = cp(40332),
+       Dp = cp(40358),
+       Ap = cp(37329),
+       Pp = cp(40107),
+       Wp = cp(40314),
+       yp = cp(40398);
+     class Up {
+       get renderList() {
+         return this._renderList
+       }
+ ... (318 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L30` → after: `L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/316.js#L747) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/316.js#L30)

```diff
-   41808: (DD, zD, wD) => {
+   42069: (pp, ip, cp) => {
```

#### 4. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L32` → after: `L749-L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/316.js#L749-L750) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/316.js#L32)

```diff
-       e: () => rD
+       b: () => Yp,
+       f: () => Dp
```

#### 5. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L34-L38` → after: `L752-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L752-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/316.js#L752-L756) · [Before (L34-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/316.js#L34-L38)

```diff
-     var pD = wD(39776);
-     wD(41796), wD(41802);
-     const sD = "defaultUboDeclaration",
-       KD = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     var Op = cp(40342),
+       op = cp(38313),
+       Ip = cp(37349),
+       Sp = cp(40053),
+       xp = cp(40509);
```

#### 6. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L40-L41` → after: `L758-L932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L758-L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/316.js#L758-L932) · [Before (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/316.js#L40-L41)

```diff
-       name: sD,
-       shader: KD
+       positions: [1, 1, -1, 1, -1, -1, 1, -1],
+       indices: [0, 1, 2, 0, 2, 3]
+     };
+     class Yp {
+       constructor(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Lp;
+         this._fullscreenViewport = new op.c(0, 0, 1, 1);
+         const cp = ip.positions ?? Lp.positions,
+           Ip = ip.indices ?? Lp.indices;
+         this.engine = pp, this._vertexBuffers = {
+           [Op.j.PositionKind]: new Op.j(pp, cp, Op.j.PositionKind, !1, !1, 2)
+         }, this._indexBuffer = pp.createIndexBuffer(Ip), this._indexBufferLength = Ip.length, this._onContextRestoredObserver = pp.Fy.add((() => {
+           this._indexBuffer = pp.createIndexBuffer(Ip);
+           for (const pp in this._vertexBuffers) {
+             this._vertexBuffers[pp]._rebuild()
+           }
+ ... (159 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L44` → after: `L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/316.js#L936) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/316.js#L44)

```diff
-   41785: (DD, zD, wD) => {
+   42102: (pp, ip, cp) => {
```

#### 8. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L46` → after: `L938-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L938-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/316.js#L938-L944) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/316.js#L46)

```diff
-       defaultVertexShader: () => tD
+       Dispose: () => tp,
+       DumpData: () => vp,
+       DumpDataAsync: () => wp,
+       DumpFramebuffer: () => Up,
+       DumpTools: () => Hp,
+       EncodeImageAsync: () => yp,
+       RegisterDumpTools: () => ep
```

#### 9. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L48-L91` → after: `L946-L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L946-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/316.js#L946-L1070) · [Before (L48-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/316.js#L48-L91)

```diff
-     var pD = wD(39776),
-       sD = wD(41790);
-     const KD = "defaultVertexDeclaration",
-       rD = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nuniform mat4 view;\n#ifdef DIFFUSE\nuniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform mat4 ambientMatrix;uniform vec2 vAmbientInfos;\n#endif\n#ifdef O … [truncated]
-     pD.e.IncludesShadersStore[KD] || (pD.e.IncludesShadersStore[KD] = rD);
-     const LD = {
-       name: KD,
-       shader: rD
-     };
-     var cD = wD(41796),
-       gD = wD(41802),
-       RD = wD(41808),
-       AD = wD(41814),
-       UD = wD(41822),
-       fD = wD(41826),
-       ID = wD(41830),
- ... (28 more removed lines; see GitHub link above)
+     var Op = cp(40203),
+       op = cp(42069),
+       Ip = cp(40304),
+       Sp = cp(37356),
+       xp = cp(37345),
+       Lp = cp(38905),
+       Yp = cp(40269),
+       Dp = cp(40210);
+     let Ap = null;
+     async function Pp() {
+       return Ap || (Ap = async function() {
+         const pp = xp.e.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
+         pp instanceof OffscreenCanvas && Lp.e.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
+         const {
+           ThinEngine: ip
+         } = await Promise.resolve().then((() => cp(40050)));
+ ... (109 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L93-L94` → after: `L1072-L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L1072-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/316.js#L1072-L1075) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/316.js#L93-L94)

```diff
-       name: kD,
-       shader: mD
+       DumpData: vp,
+       DumpDataAsync: wp,
+       DumpFramebuffer: Up,
+       Dispose: tp
```

#### 11. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L96-L101` → after: `L1077-L1367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R1077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L1077-L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/316.js#L1077-L1367) · [Before (L96-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/316.js#L96-L101)

```diff
-     var oD = wD(41951);
-     const aD = "defaultVertexShader",
-       uD = "#define CUSTOM_VERTEX_EXTENSION\n#include<__decl__defaultVertex>\n#define CUSTOM_VERTEX_BEGIN\nattribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef TANGENT\nattribute vec4 tangent;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#include<uv … [truncated]
-     pD.e.ShadersStore[aD] || (pD.e.ShadersStore[aD] = uD);
-     const vD = [sD.e, LD, cD.e, gD.c, RD.e, AD.e, UD.c, fD.e, ID.b, BD.e, GD.d, hD.e, nD.d, MD.e, OD.b, JD.e, ED.e, QD.e, XD.e, VD.d, PD.e, CD.c, xD.e, TD.b, bD.e, jD.e, dD.e, SD.e, iD.b, lD.d, WD.c, ND.e, ZD.b, yD.b, eD, oD.e];
-     for (const FD of vD) pD.e.IncludesShadersStore[FD.name] || (pD.e.IncludesShadersStore[FD.name] = FD.shader);
+     let dp = !1;
+ 
+     function ep() {
+       if (dp) return;
+       dp = !0;
+       Ip.i.DumpData = vp, Ip.i.DumpDataAsync = wp, Ip.i.DumpFramebuffer = Up
+     }
+   },
+   42080: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Wp,
+       d: () => yp,
+       h: () => Up
+     });
+     var Op = cp(40654),
+       op = cp(42087),
+ ... (275 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L103-L104` → after: `L1369-L2018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R1369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L1369-L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/316.js#L1369-L2018) · [Before (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/316.js#L103-L104)

```diff
-       name: aD,
-       shader: uD
+       CreateResizedCopy: function(pp, ip, cp) {
+         let Ip = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+         const Sp = pp.Gl(),
+           xp = Sp.gy(),
+           Lp = new op.e("resized" + pp.name, {
+             width: ip,
+             height: cp
+           }, Sp, !pp.noMipmap, !0, pp._texture.type, !1, pp.samplingMode, !1);
+         Lp.wrapU = pp.wrapU, Lp.wrapV = pp.wrapV, Lp.uOffset = pp.uOffset, Lp.vOffset = pp.vOffset, Lp.uScale = pp.uScale, Lp.vScale = pp.vScale, Lp.uAng = pp.uAng, Lp.vAng = pp.vAng, Lp.wAng = pp.wAng, Lp.coordinatesIndex = pp.coordinatesIndex, Lp.level = pp.level, Lp.anisotropi … [truncated]
+         const Yp = new Dp("pass", 1, null, Ip ? Op.d.BILINEAR_SAMPLINGMODE : Op.d.NEAREST_SAMPLINGMODE, xp, !1, 0);
+         return Yp.externalTextureSamplerBinding = !0, Yp.onEffectCreatedObservable.addOnce((ip => {
+           ip.executeWhenCompiled((() => {
+             Yp.onApply = function(ip) {
+               ip.setTexture("textureSampler", pp)
+             };
+             const ip = Lp.renderTarget;
+ ... (634 more added lines; see GitHub link above)
```
